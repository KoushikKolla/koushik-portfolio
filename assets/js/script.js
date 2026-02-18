/* Minimal page-switching + UI helpers for the portfolio
   - works with data-nav-link and data-page attributes
   - lazy-loads the resume PDF
   - renders content dynamically from data.js
*/

(() => {
  // helper
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));

  // RENDER DATA: populate HTML from window.portfolioData
  function renderData() {
    const d = window.portfolioData;
    if (!d) return;

    // --- Sidebar ---
    const avatar = $('#sidebar-avatar');
    if (avatar) {
      avatar.src = d.sidebar.avatar;
      avatar.alt = d.sidebar.name;
    }
    const name = $('#sidebar-name');
    if (name) {
      name.textContent = d.sidebar.name;
      name.title = d.sidebar.name;
    }
    const role = $('#sidebar-role');
    // Typewriter effect
    if (role && d.sidebar.roles) {
      let roleIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      let typeSpeed = 100;

      function typeWriter() {
        const currentRole = d.sidebar.roles[roleIndex];

        if (isDeleting) {
          role.textContent = currentRole.substring(0, charIndex - 1);
          charIndex--;
          typeSpeed = 50;
        } else {
          role.textContent = currentRole.substring(0, charIndex + 1);
          charIndex++;
          typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentRole.length) {
          isDeleting = true;
          typeSpeed = 2000; // Wait before deleting
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % d.sidebar.roles.length;
          typeSpeed = 500;
        }

        setTimeout(typeWriter, typeSpeed);
      }

      typeWriter();
    } else if (role) {
      role.textContent = d.sidebar.role;
    }

    const contactsList = $('#contacts-list');
    if (contactsList) {
      contactsList.innerHTML = d.sidebar.contacts.map(item => {
        let content;
        if (item.link) {
          content = `<a class="contact-link" href="${item.link}">${item.value}</a>`;
        } else if (item.date) {
          content = `<time datetime="${item.date}">${item.value}</time>`;
        } else {
          content = `<address>${item.value}</address>`;
        }
        return `
          <li class="contact-item">
            <div class="icon-box"><ion-icon name="${item.icon}"></ion-icon></div>
            <div class="contact-info">
              <p class="contact-title">${item.title}</p>
              ${content}
            </div>
          </li>
        `;
      }).join('');
    }

    const socialList = $('#social-list');
    if (socialList) {
      socialList.innerHTML = d.sidebar.socials.map(item => `
        <li class="social-item">
          <a class="social-link" href="${item.link}" target="_blank" rel="noreferrer">
            <ion-icon name="${item.icon}"></ion-icon>
          </a>
        </li>
      `).join('');
    }

    // --- About ---
    const aboutText = $('#about-text');
    if (aboutText) aboutText.innerHTML = d.about.description;

    const serviceList = $('#service-list');
    if (serviceList) {
      serviceList.innerHTML = d.about.services.map(item => `
        <li class="service-item">
          <div class="service-icon-box"><img src="${item.icon}" alt="${item.alt}" width="40" /></div>
          <div class="service-content-box">
            <h4 class="h4 service-item-title">${item.title}</h4>
            <p class="service-item-text">${item.text}</p>
          </div>
        </li>
      `).join('');
    }

    // --- Skills ---
    const skillsList = $('#skills-list');
    if (skillsList && d.skills) {
      skillsList.innerHTML = d.skills.map(item => `
        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">${item.title}</h5>
            <data value="${item.value}">${item.value}%</data>
          </div>
          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: ${item.value}%;"></div>
          </div>
        </li>
      `).join('');
    }

    // --- Portfolio ---
    const projectList = $('#project-list');
    if (projectList) {
      projectList.innerHTML = d.portfolio.map((item, index) => `
        <li class="project-item active" data-filter-item data-category="${item.category}" data-project-id="${index}">
          <a href="${item.link}" target="_blank">
            <figure class="project-img">
              <div class="project-item-icon-box" style="display:none;"><ion-icon name="eye-outline"></ion-icon></div>
              <img src="${item.image}" alt="${item.title}" loading="lazy" />
            </figure>
            <div class="project-text-content">
              <h3 class="project-title">${item.title}</h3>
              <p class="project-category" style="margin-bottom: 10px;">${item.technologies}</p>
              
              ${item.description ? `<p class="project-description" style="color: var(--light-gray); font-size: var(--fs-6); font-weight: 300; line-height: 1.6; margin-bottom: 15px;">${item.description}</p>` : ''}
              
              ${item.techStack ? `
              <div class="project-tech-stack" style="margin-top: 15px;">
                 <p style="margin-bottom: 8px; font-size: var(--fs-7); color: var(--light-gray-70);">Technologies:</p>
                 <ul style="display: flex; gap: 10px; flex-wrap: wrap;">
                   ${item.techStack.map(t => {
        const isImage = t.icon.includes('/') || t.icon.includes('.');
        const iconContent = isImage
          ? `<img src="${t.icon}" alt="${t.name}" style="width: 20px; height: 20px; object-fit: contain;">`
          : `<ion-icon name="${t.icon}"></ion-icon>`;
        return `
                       <li style="display: flex; align-items: center; gap: 6px; background: var(--jet); padding: 6px 10px; border-radius: 6px; border: 1px solid var(--jet); font-size: 13px; color: var(--light-gray);">
                          <div style="color: var(--orange-yellow-crayola); display: flex; align-items: center;">${iconContent}</div>
                          <span>${t.name}</span>
                       </li>
                      `;
      }).join('')}
                 </ul>
              </div>
              ` : ''}

              <div style="margin-top: 15px;">
                  <span style="color: var(--orange-yellow-crayola); font-size: var(--fs-7); display: inline-flex; align-items: center; gap: 5px;">
                    View Project <ion-icon name="arrow-forward-outline"></ion-icon>
                  </span>
              </div>
            </div>
          </a>
        </li>
      `).join('');
    }

    // Modal elements
    const modalContainer = $('[data-modal-container]');
    const modalCloseBtn = $('[data-modal-close-btn]');
    const overlay = $('[data-overlay]');
    const modalimg = $('[data-modal-img]');
    const modalTitle = $('[data-modal-title]');
    const modalText = $('[data-modal-text]');
    const modalLink = $('[data-modal-link]');
    const modalDate = $('[data-modal-date]'); // Reusing for category

    // Close modal function
    const modalCloseFunc = function () {
      modalContainer.classList.remove('active');
      overlay.classList.remove('active');
    }

    if (modalCloseBtn && overlay) {
      modalCloseBtn.addEventListener('click', modalCloseFunc);
      overlay.addEventListener('click', modalCloseFunc);
    }

    // Add click event to all project items
    // const projectItems = $$('.project-item');
    // projectItems.forEach(item => {
    //   item.addEventListener('click', function () {
    //     // Modal disabled
    //   });
    // });


  }

  // NAVIGATION: switch data-page sections when nav buttons clicked
  function initNav() {
    const navButtons = $$('[data-nav-link]');
    const pages = $$('[data-page]');

    navButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // active button
        navButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const pageName = btn.textContent.trim().toLowerCase();
        // find matching page by data-page (exact match with lowercased article data-page values)
        pages.forEach(p => {
          if ((p.getAttribute('data-page') || '').toLowerCase() === pageName) {
            p.classList.add('active');
            // lazy-load resume when page opened
            if (pageName === 'resume') lazyLoadResume();
          } else {
            p.classList.remove('active');
          }
        });

        // scroll top for accessibility
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });
  }

  // SIDEBAR: show/hide contact block
  function initSidebar() {
    const sbBtn = $('[data-sidebar-btn]');
    const sbMore = $('.sidebar-info_more');
    if (!sbBtn || !sbMore) return;
    sbBtn.addEventListener('click', () => {
      sbMore.classList.toggle('show'); // style .show in CSS if you want animation
    });
  }

  // FILTERS: simple project filter support (keeps original behavior)
  function initFilters() {
    const filterBtns = $$('[data-filter-btn]');
    const projects = $$('[data-filter-item]'); // Note: This needs to query AFTER rendering!

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const currentProjects = $$('[data-filter-item]'); // Re-query here to be safe
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.textContent.trim().toLowerCase();
        currentProjects.forEach(p => {
          const cat = (p.getAttribute('data-category') || '').toLowerCase();
          if (category === 'all' || cat.includes(category)) {
            p.style.display = '';
          } else {
            p.style.display = 'none';
          }
        });
      });
    });

    // optional: wire the select-list items if present
    const selectItems = $$('[data-select-item]');
    selectItems.forEach(item => {
      item.addEventListener('click', (e) => {
        const parent = item.closest('.filter-select-box');
        const selectValue = parent && parent.querySelector('[data-selecct-value]');
        if (selectValue) selectValue.textContent = item.textContent.trim();
        // trigger corresponding filter button (if exists)
        const txt = item.textContent.trim().toLowerCase();
        const match = filterBtns.find(b => b.textContent.trim().toLowerCase() === txt);
        if (match) match.click();
      });
    });
  }

  // Lazy-load the resume PDF only when user opens Resume page
  function lazyLoadResume() {
    // look for object with data set to placeholder or blank
    const obj = $('article.resume object') || $('article.resume iframe');
    if (!obj) return;

    // If already loaded, skip
    const current = obj.getAttribute('data-loaded');
    if (current === 'true') return;

    // use data from script instead of hardcoded
    const d = window.portfolioData;
    const pdfPath = d && d.resume ? d.resume.url : './assets/files/Koushik_Kolla_Resume_Up.pdf';

    try {
      if (obj.tagName.toLowerCase() === 'object') {
        obj.setAttribute('data', pdfPath + '#toolbar=0&navpanes=0&scrollbar=0');
      } else if (obj.tagName.toLowerCase() === 'iframe') {
        obj.setAttribute('src', pdfPath + '#toolbar=0&navpanes=0&scrollbar=0');
      }
      obj.setAttribute('data-loaded', 'true');
      // also ensure download link exists (no-op if present)
      const dl = document.querySelector('a[download][href$=".pdf"]');
      if (dl && d && d.resume) {
        dl.setAttribute('href', pdfPath);
        dl.setAttribute('download', d.resume.filename || 'resume.pdf');
      }
    } catch (e) {
      // ignore
      console.warn('Could not lazy-load resume PDF', e);
    }
  }

  // INITIALIZE
  document.addEventListener('DOMContentLoaded', () => {
    renderData(); // Render first
    initNav();
    initSidebar();
    initFilters(); // Init filters after rendering elements

    // If the page loads on a hash like #resume, open that page
    const hash = (location.hash || '').replace('#', '').toLowerCase();
    if (hash) {
      const btn = Array.from($$('[data-nav-link]')).find(b => b.textContent.trim().toLowerCase() === hash);
      if (btn) btn.click();
    }
  });

})();

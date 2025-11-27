/* Minimal page-switching + UI helpers for the portfolio
   - works with data-nav-link and data-page attributes from the HTML I gave you
   - lazy-loads the resume PDF only when Resume page is opened
*/

(() => {
  // helper
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));

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
    const projects = $$('[data-filter-item]');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.textContent.trim().toLowerCase();
        projects.forEach(p => {
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

    // prefer to set data attribute of object
    const pdfPath = './assets/files/Koushik_Kolla_Resume_Up.pdf';
    try {
      if (obj.tagName.toLowerCase() === 'object') {
        obj.setAttribute('data', pdfPath);
      } else if (obj.tagName.toLowerCase() === 'iframe') {
        obj.setAttribute('src', pdfPath);
      }
      obj.setAttribute('data-loaded', 'true');
      // also ensure download link exists (no-op if present)
      const dl = document.querySelector('a[download][href$=".pdf"]');
      if (dl) dl.setAttribute('href', pdfPath);
    } catch (e) {
      // ignore
      console.warn('Could not lazy-load resume PDF', e);
    }
  }

  // INITIALIZE
  document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initSidebar();
    initFilters();

    // If the page loads on a hash like #resume, open that page
    const hash = (location.hash || '').replace('#','').toLowerCase();
    if (hash) {
      const btn = Array.from($$('[data-nav-link]')).find(b => b.textContent.trim().toLowerCase() === hash);
      if (btn) btn.click();
    }
  });

})();

window.portfolioData = {
    sidebar: {
        name: "KOUSHIK KOLLA",
        role: "Engineering student | Full-Stack & ML Enthusiast",
        roles: ["Engineering Student", "Full-Stack Developer", "ML Enthusiast", "Problem Solver"],
        avatar: "./assets/images/picofme.png",
        contacts: [
            {
                id: "email",
                title: "Email",
                value: "koushikkolla51@gmail.com",
                link: "mailto:koushikkolla51@gmail.com",
                icon: "mail-outline"
            },
            {
                id: "phone",
                title: "Phone",
                value: "+91 74833 77571",
                link: "tel:+917483377571",
                icon: "phone-portrait-outline"
            },
            {
                id: "birthday",
                title: "Birthday",
                value: "August 13, 2004",
                date: "2004-08-13",
                icon: "calendar-outline"
            },
            {
                id: "location",
                title: "Location",
                value: "Bengaluru, Karnataka, India",
                icon: "location-outline"
            }
        ],
        socials: [
            { link: "https://github.com/KoushikKolla", icon: "logo-github" },
            { link: "https://www.linkedin.com/in/koushik-kolla-605632249/", icon: "logo-linkedin" },
            { link: "#", icon: "logo-twitter" },
            { link: "#", icon: "logo-instagram" }
        ]
    },

    about: {
        description: `
            <p>I am a motivated engineering student currently pursuing my undergraduate degree, with a strong interest in software development and problem-solving. I enjoy building applications that combine logic, creativity, and real-world impact, and I am continuously working to strengthen my fundamentals in computer science.</p>

            <p>My technical skill set includes Java, Python, and Web Development (HTML, CSS, JavaScript). I have hands-on experience working with databases, basic backend concepts, and modern development tools. Through academic and self-driven projects, I have built applications such as web-based systems, automation tools, and data-driven dashboards, which helped me understand end-to-end development and clean coding practices.</p>

            <p>I have also explored internships, mini-projects, and practical labs that exposed me to teamwork, debugging, and structured problem-solving. These experiences taught me the importance of writing scalable code and learning from feedback.</p>

            <p>My career goal is to grow into a Software Engineer where I can contribute to impactful projects, learn from experienced professionals, and continuously improve my technical and communication skills. I am highly enthusiastic about learning new technologies, adapting to challenges, and staying updated with industry trends.</p>

            <p>I am currently open to internships and entry-level opportunities where I can apply my skills, gain real-world exposure, and add value to the organization.</p>
        `,
        services: [
            {
                title: "Full-Stack Development",
                text: "React, Node, Express, MongoDB — scalable web apps and secure APIs.",
                icon: "./assets/images/image.png",
                alt: "Web Development"

            },
            {
                title: "Machine Learning & Computer Vision",
                text: "OpenCV, MediaPipe, ML models for automation-style interaction and CV tasks.",
                icon: "./assets/images/image1.png",
                alt: "Machine Learning"
            },

            {
                title: "Data & Analytics",
                text: "Tableau, Chart.js, Pandas — analytics and reporting for product insights.",
                icon: "./assets/images/image2.png",
                alt: "Data Analytics"
            }
        ]
    },

    resume: {
        url: "./assets/files/Koushik_Kolla_Resume_Up.pdf",
        filename: "Koushik_Kolla_Resume_Up.pdf"
    },

    skills: [
        { title: "Java", value: 60 },
        { title: "JavaScript (ES6+)", value: 85 },
        { title: "React.js", value: 80 },
        { title: "Node.js / Express", value: 75 },
        { title: "Machine Learning (OpenCV, Pytorch)", value: 70 },
        { title: "MongoDB / SQL", value: 75 },
        { title: "HTML5 / CSS3", value: 90 },
        { title: "Git / GitHub", value: 85 },
        { title: "Advanced Java", value: 0 }
    ],

    portfolio: [
        {
            title: "Personalized News Digest Service",
            category: "Web development",
            image: "./assets/images/image3.png",
            technologies: "React · Node.js · Express · MongoDB · Tailwind CSS",
            link: "https://news-digest-q3jw.vercel.app/",
            description: "Developed a MERN application for personalized news aggregation and automated email delivery based on user preferences. Implemented scheduled background jobs using Node-cron for fetching real-time news via NewsAPI and sending digests via Nodemailer. Designed a responsive, modern dashboard using React and Tailwind CSS for seamless topic management.",
            techStack: [
                { icon: "logo-react", name: "React" },
                { icon: "logo-nodejs", name: "Node.js" },
                { icon: "logo-css3", name: "Tailwind CSS" },
                { icon: "server-outline", name: "Express" },
                { icon: "server-outline", name: "MongoDB" }
            ]
        },
        {
            title: "Gesture-Based E-Voting System",
            category: "ML / CV",
            image: "./assets/images/image1.png",
            technologies: "Python · OpenCV · MediaPipe · SQL",
            link: "https://github.com/KoushikKolla",
            techStack: [
                { icon: "logo-python", name: "Python" },
                { icon: "aperture-outline", name: "OpenCV" },
                { icon: "hardware-chip-outline", name: "MediaPipe" },
                { icon: "server-outline", name: "SQL" }
            ]
        },

        {
            title: "Smart Expense Tracker with Analytics",
            category: "Web development",
            image: "./assets/images/image2.png",
            technologies: "React · Node · MongoDB · Chart.js",
            link: "https://expense-tracker-f-645a-1igfj8msn-lll-caa9b760.vercel.app/login",
            description: "Developed a MERN application supporting authentication, analytics, and profile management. Used MongoDB aggregation pipelines for expense insights and dynamic chart generation. Added responsive UI, dark mode, and PDF export for professional reporting.",
            techStack: [
                { icon: "logo-react", name: "React" },
                { icon: "logo-nodejs", name: "Node.js" },
                { icon: "server-outline", name: "MongoDB" },
                { icon: "bar-chart-outline", name: "Chart.js" }
            ]
        },
        {
            title: "Reinforcement Learning: Tic-Tac-Toe AI",
            category: "ML / AI",
            image: "./assets/images/image1.png", // Using standard ML placeholder
            technologies: "Python · Q-Learning · NumPy",
            link: "https://github.com/KoushikKolla",
            description: "Developed an intelligent Tic-Tac-Toe agent using Q-Learning (Reinforcement Learning). The AI learns optimal strategies by playing thousands of games against itself, demonstrating reinforcement learning principles and state-value estimation.",
            techStack: [
                { icon: "logo-python", name: "Python" },
                { icon: "stats-chart-outline", name: "Q-Learning" },
                { icon: "grid-outline", name: "NumPy" }
            ]
        }
    ],
    blog: [
        {
            title: "Today I Learned: System Design & Scalability",
            category: "Daily Log",
            date: "Feb 17, 2026",
            dateTime: "2026-02-17",
            // No image needed for quick daily updates!
            desc: `
        <p>Day 2 – Java Full Stack Web Development | Building Strong Foundations 💻
Today’s session focused on understanding computers before coding.
✔ Evolution of Computers
 ✔ CPU, RAM & Hard Disk (Saving vs Loading)
 ✔ Why computers understand 0 & 1
 ✔ Machine, Assembly & High-Level Languages
 ✔ Role of Compiler
 ✔ Importance of GPU & AI
📌 Programming is not memorizing syntax — it’s understanding how the system works.
This foundation sets the stage for Core Java & Full Stack Development 🚀
 Excited to start coding from tomorrow!</p>`
        },

        {
            title: "Today I Learned: System Design & Scalability",
            category: "Daily Log",
            date: "Feb 17, 2026",
            dateTime: "2026-02-17",
            // No image needed for quick daily updates!
            desc: `
                <p>Spent the day diving deep into horizontal vs vertical scaling. Vertical scaling (scaling up) involves adding more power to your existing machine, while horizontal scaling (scaling out) involves adding more machines to your pool of resources.</p>
                
                <p>I also implemented a basic load balancer in Node.js to understand round-robin distribution. It was fascinating to see how requests were distributed across different simulated servers!</p>
            `,
            link: "#"
        }
    ]
};

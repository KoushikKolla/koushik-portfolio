window.portfolioData = {
    sidebar: {
        name: "KOUSHIK KOLLA",
        role: "Software Engineering Apprentice | Enterprise Java & Full-Stack Developer",
        roles: [
            "Software Engineering Apprentice",
            "Enterprise Java Developer",
            "Full-Stack Developer",
            "Problem Solver"
        ],
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
            { link: "https://linkedin.com/in/koushikkolla", icon: "logo-linkedin" },
            { link: "#", icon: "logo-twitter" },
            { link: "https://www.instagram.com/koushik_kolla?igsh=Y210bWRmN3pvOHM=", icon: "logo-instagram" }
        ]
    },

    about: {
        description: `
            <p>I am an Information Science Engineering student and <strong>Software Engineering Apprentice at Tieto</strong> with hands-on experience in <strong>Enterprise Java (Java 21, Spring Boot, Spring Batch)</strong>, enterprise integrations (<strong>Apache Camel</strong>), and microservice containerization.</p>

            <p>Experienced in architecting robust <strong>RESTful and SOAP web services</strong>, type-safe database queries with <strong>jOOQ & SQL</strong>, and building scalable full-stack web applications with <strong>React</strong> and <strong>Node.js</strong>. I adhere to enterprise design patterns, clean coding standards, modular architecture, and automated testing to deliver production-grade software.</p>

            <p>Through my apprenticeship, academic curriculum, and end-to-end projects, I have developed automated bulk data processing pipelines, biometric authentication systems, and cloud-ready microservices. I am passionate about tackling complex distributed backend challenges and building high-performance systems.</p>
        `,
        services: [
            {
                title: "Enterprise Java & Microservices",
                text: "Java 21, Spring Boot, Spring Batch, Apache Camel — robust microservices and asynchronous message routing.",
                icon: "./assets/images/image.png",
                alt: "Enterprise Backend"
            },
            {
                title: "Full-Stack Development",
                text: "React, Node.js, Express, MongoDB — scalable web apps, responsive dashboards, and secure APIs.",
                icon: "./assets/images/html.png",
                alt: "Full-Stack Development"
            },
            {
                title: "Machine Learning & Computer Vision",
                text: "OpenCV, MediaPipe, Python — biometric authentication pipelines, real-time hand tracking, and CV models.",
                icon: "./assets/images/image1.png",
                alt: "Machine Learning"
            },
            {
                title: "Databases, DevOps & Testing",
                text: "jOOQ, MySQL, Docker, Kubernetes, JUnit, Bruno, ReadyAPI — type-safe queries, containerization, and API verification.",
                icon: "./assets/images/image2.png",
                alt: "DevOps & Testing"
            }
        ]
    },

    experience: [
        {
            title: "Software Engineering Apprentice",
            company: "Tieto",
            period: "Apr 13, 2026 – Oct 9, 2026",
            location: "Bengaluru, India",
            responsibilities: [
                "Engineered backend microservices utilizing Java 21 and Spring Boot, adhering to enterprise design patterns, clean coding standards, and modular architecture.",
                "Developed robust data pipelines and asynchronous workflows using Spring Batch and Apache Camel for automated message routing and bulk data processing.",
                "Designed type-safe relational database operations using jOOQ and SQL, improving query execution performance and eliminating runtime syntax vulnerabilities.",
                "Built and documented secure RESTful and SOAP web services; authored automated unit and integration tests using JUnit to ensure high code coverage.",
                "Tested API contracts using Bruno and ReadyAPI; containerized applications with Docker and managed remote server configurations via PuTTY and WinSCP."
            ],
            technologies: [
                "Java 21",
                "Spring Boot",
                "Spring Batch",
                "Apache Camel",
                "jOOQ",
                "SQL",
                "REST / SOAP",
                "JUnit",
                "Docker",
                "Bruno",
                "ReadyAPI",
                "PuTTY / WinSCP"
            ]
        }
    ],

    education: [
        {
            institution: "Global Academy of Technology (Affiliated to VTU)",
            degree: "Bachelor of Engineering in Information Science and Engineering",
            period: "Dec 2022 – Jul 2026",
            location: "Bengaluru, India",
            gpa: "8.39 / 10.0"
        }
    ],

    resume: {
        url: "./assets/files/KOUSHIK_KOLLA_UPDATED.pdf",
        filename: "KOUSHIK_KOLLA_UPDATED.pdf"
    },

    skills: [
        { title: "Java 21 / Spring Boot / Spring Batch", value: 90 },
        { title: "Enterprise Integrations (Apache Camel)", value: 85 },
        { title: "Database Systems & jOOQ (SQL, MySQL, MongoDB)", value: 85 },
        { title: "Web Services & Testing (REST, SOAP, JUnit, Bruno)", value: 85 },
        { title: "JavaScript & React.js", value: 85 },
        { title: "Node.js & Express.js", value: 80 },
        { title: "DevOps & Cloud (Docker, Kubernetes, GCP)", value: 75 },
        { title: "Python & Computer Vision (OpenCV, MediaPipe)", value: 80 },
        { title: "Tools & Environments (Git, Linux/Bash, WinSCP, PuTTY)", value: 85 }
    ],

    portfolio: [
        {
            title: "Gesture-Based E-Voting System & Facial Authentication",
            category: "ML / CV",
            image: "./assets/images/image1.png",
            technologies: "Python · OpenCV · MediaPipe · SQL",
            link: "https://github.com/KoushikKolla",
            description: "Engineered a contactless biometric authentication pipeline using OpenCV, achieving 95%+ face verification accuracy and reducing identity verification time to under 1.5s. Implemented real-time hand-tracking with MediaPipe at 30+ FPS, incorporating a 2-second hold validation algorithm to eliminate accidental ballot submissions. Designed role-based access control (Admin, Candidate, Voter) over a relational database, enforcing single-vote integrity constraints to prevent 100% of duplicate ballots.",
            techStack: [
                { icon: "logo-python", name: "Python" },
                { icon: "aperture-outline", name: "OpenCV" },
                { icon: "hardware-chip-outline", name: "MediaPipe" },
                { icon: "server-outline", name: "SQL" }
            ]
        },
        {
            title: "Personalized News Digest Service",
            category: "Web development",
            image: "./assets/images/image3.png",
            technologies: "React · Node.js · Express · MongoDB · Tailwind CSS",
            link: "https://news-digest-q3jw.vercel.app/",
            description: "Architected a full-stack automated news pipeline, scheduling daily cron jobs to fetch, filter, and dispatch batch digests via Nodemailer with 99.5% delivery reliability. Optimized MongoDB performance by indexing user interest schemas and deduplicating NewsAPI responses, cutting payload size and reducing read latency by ~35%. Developed a responsive dashboard in React and Tailwind featuring JWT authentication and dynamic preference toggles, achieving sub-1.2s page load times.",
            techStack: [
                { icon: "logo-react", name: "React" },
                { icon: "logo-nodejs", name: "Node.js" },
                { icon: "logo-css3", name: "Tailwind CSS" },
                { icon: "server-outline", name: "Express" },
                { icon: "server-outline", name: "MongoDB" }
            ]
        },
        {
            title: "Enterprise Bank Account Management System",
            category: "Applications",
            image: "./assets/images/image.png",
            technologies: "Java 21 · JDBC · MySQL · OOP",
            link: "https://github.com/KoushikKolla",
            description: "Engineered a multi-tiered banking engine in Java to manage customer onboarding, balance inquiries, and fund transfers using Object-Oriented principles and modular design. Integrated MySQL using JDBC, implementing ACID-compliant transaction rollback mechanisms to maintain zero data inconsistencies during concurrent account transfers. Built robust validation layers and custom exception handling architectures to simulate enterprise-grade financial transaction flows securely.",
            techStack: [
                { icon: "code-slash-outline", name: "Java 21" },
                { icon: "server-outline", name: "JDBC" },
                { icon: "server-outline", name: "MySQL" },
                { icon: "shield-checkmark-outline", name: "OOP / ACID" }
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
            image: "./assets/images/image1.png",
            technologies: "Python · Q-Learning · NumPy",
            link: "https://github.com/KoushikKolla/tic-tac-toe-rl",
            description: "Developed an intelligent Tic-Tac-Toe agent using Q-Learning (Reinforcement Learning). The AI learns optimal strategies by playing thousands of games against itself, demonstrating reinforcement learning principles and state-value estimation.",
            techStack: [
                { icon: "logo-python", name: "Python" },
                { icon: "stats-chart-outline", name: "Q-Learning" },
                { icon: "grid-outline", name: "NumPy" }
            ]
        }
    ]
};

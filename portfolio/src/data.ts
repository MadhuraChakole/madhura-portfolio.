import {
  Database,
  Layout,
  Terminal,
  Network,
  CloudCog
} from "lucide-react";

export const PORTFOLIO_DATA = {
  name: "Madhura Chakole",
  fullName: "Madhura Ambaji Chakole",
  role: "Frontend Developer | React.js Developer",
  email: "madhurachakole.22@gmail.com",
  phone: "+91 9325509858",
  linkedin: "https://linkedin.com/in/madhura-chakole",
  github: "https://github.com/MadhuraChakole",
  portfolio: "https://madhurachakole-portfolio.vercel.app",
  resumeLink: "/Madhura_Chakole_Resume.pdf",
  location: "Pune, Maharashtra, India",

  tagline: "I build responsive, API-driven web applications using React.js, TypeScript, and modern component architectures.",

  about: [
    "I am a Frontend Developer (React.js) with hands-on internship experience building responsive, API-driven web applications using React.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, and Tailwind CSS. Skilled in reusable component architecture, REST API integration, Figma-to-code implementation, cross-browser compatibility, debugging, and performance optimization.",
    "At Proser Digital Solutions, I developed modular React components using a hooks-based architecture, integrated REST APIs with MongoDB-backed data flows across core admin modules, and converted Figma designs into responsive interfaces across desktop and mobile breakpoints. Previously at Tayan Solutions, I delivered responsive interfaces and resolved functional bugs within sprint deadlines.",
    "I have built full-stack applications including HerFit AI (AI-Powered Fitness & Wellness Platform) and shipped six core admin modules for the EDICT Enterprise SaaS Platform. As an MCA graduate (Grade: A+), I am actively seeking a Frontend / React.js Developer role."
  ],

  summary: "Frontend Developer (React.js) with hands-on internship experience building responsive, API-driven web applications using React.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, and Tailwind CSS. Skilled in reusable component architecture, REST API integration, Figma-to-code implementation, cross-browser compatibility, debugging, and performance optimization. Working knowledge of Node.js, Express.js, and MongoDB, with full-stack project experience. MCA graduate seeking a Frontend / React.js Developer role.",

  skills: [
    { category: "Languages", items: ["JavaScript (ES6+)", "TypeScript", "Core Java", "SQL (basics)"], icon: Terminal },
    { category: "Frontend", items: ["React.js", "Hooks", "React.memo", "Code Splitting", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Responsive Design"], icon: Layout },
    { category: "Backend & DB", items: ["Node.js", "Express.js", "REST APIs", "Axios", "MongoDB", "User Authentication"], icon: Database },
    { category: "Tools", items: ["Git", "GitHub", "Bitbucket", "VS Code", "Postman", "Jira", "Figma"], icon: Network },
    { category: "Practices", items: ["Reusable Components", "API Integration", "Role-Based Access Control", "Debugging", "Cross-Browser Compatibility", "Performance Optimization", "Agile/Scrum"], icon: CloudCog },
  ],

  projects: [
    {
      title: "HerFit AI – AI-Powered Fitness & Wellness Platform",
      link: "https://madhurachakole-portfolio.vercel.app",
      github: "https://github.com/MadhuraChakole",
      description: "Full-stack personalized fitness and wellness platform letting users manage workouts, hydration, daily fitness goals, and progress from a single dashboard.",
      points: [
        "Developed a full-stack personalized fitness and wellness platform that lets users manage workouts, hydration, daily fitness goals, and progress from a single, user-friendly dashboard.",
        "Built the React.js and Tailwind CSS frontend, Node.js/Express.js backend, secure user authentication, and MongoDB integration to support data-driven application features.",
        "Implemented personalized daily workout plans based on users' fitness goals, experience levels, and available time.",
        "Integrated an AI fitness coach that answers fitness-related questions and recommends suitable workouts based on individual goals and preferences.",
        "Built hydration tracking with quick-add water logging, daily hydration goals, and progress monitoring to encourage consistent habits.",
        "Developed workout and activity logging with summaries, and a progress dashboard showing user-recorded workout and hydration data through clear visual indicators."
      ],
      tags: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "AI Coach", "User Auth"]
    },
    {
      title: "EDICT App – Enterprise SaaS Platform",
      link: "https://www.edictapp.com",
      github: "",
      description: "Enterprise SaaS platform providing multi-module administration, subscription management, and role-based access control.",
      points: [
        "Built and shipped six core admin modules: Dashboard, Subscription & Billing, User Management, Reports, Audit Trail, and Feedback.",
        "Implemented role-based access control and permission-driven UI across user roles, departments, and organizational scopes.",
        "Developed subscription and billing workflows covering plan restrictions, usage tracking, subscription status, and transaction history.",
        "Built user-management tools with multi-filter search, department/role assignment, and permission-controlled actions."
      ],
      tags: ["React.js", "REST APIs", "MongoDB", "RBAC", "Billing Workflows", "Tailwind CSS"]
    },
    {
      title: "Personal Portfolio Website",
      link: "https://madhurachakole-portfolio.vercel.app",
      github: "https://github.com/MadhuraChakole",
      description: "Responsive personal portfolio showcasing projects, technical skills, and professional experience, optimized for desktop, tablet, and mobile screens.",
      points: [
        "Designed and developed a responsive personal portfolio to showcase projects, technical skills, and professional experience, optimized for desktop, tablet, and mobile screens.",
        "Built reusable, type-safe React components with TypeScript and styled the interface with Tailwind CSS for a clean, consistent, and maintainable UI.",
        "Developed interactive project-detail modals presenting each project's description, tech stack, and key features.",
        "Improved initial load time and reduced unnecessary re-renders using React.memo and code-splitting.",
        "Deployed the site on Vercel for fast, publicly accessible hosting."
      ],
      tags: ["React.js", "TypeScript", "Tailwind CSS", "React.memo", "Code Splitting", "Vercel"]
    },
    {
      title: "Avtech Solutions – Corporate Website",
      link: "https://www.avtechsolutions.co.in",
      github: "",
      description: "Responsive corporate website organizing service information into clear, scannable categories with cross-browser compatibility.",
      points: [
        "Built a responsive corporate website, organizing service information into clear, scannable categories.",
        "Ensured responsive layouts and cross-browser consistency across desktop, tablet, and mobile breakpoints."
      ],
      tags: ["React.js", "Bootstrap", "Responsive Design", "Cross-Browser Compatibility"]
    }
  ],

  experience: [
    {
      role: "Web Developer Intern",
      company: "Proser Digital Solutions",
      duration: "Dec 2025 – Aug 2026",
      points: [
        "Built modular, reusable React components using a hooks-based architecture, reducing duplicate code across admin modules and speeding up feature development.",
        "Integrated REST APIs using Axios with MongoDB-backed data flows across core admin modules, replacing manual data refreshes with dynamic updates.",
        "Converted Figma designs into responsive, cross-browser interfaces with consistent layouts across desktop and mobile breakpoints.",
        "Identified and reduced unnecessary component re-renders to improve UI responsiveness in admin screens.",
        "Collaborated in Agile sprints; used Git/GitHub for version control and participated in code reviews."
      ]
    },
    {
      role: "Web Developer Intern",
      company: "Tayan Solutions",
      duration: "Mar 2025 – May 2025",
      points: [
        "Developed responsive web interfaces using HTML, CSS, JavaScript, and Bootstrap.",
        "Resolved UI and functional bugs and delivered interactive client-side features within sprint deadlines.",
        "Integrated REST APIs to fetch and render dynamic content in place of hardcoded data.",
        "Tracked tasks in Jira and collaborated using GitHub/Bitbucket."
      ]
    }
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "PVG's College of Science and Commerce",
      score: "Grade: A+",
      period: "2024 – 2026"
    },
    {
      degree: "Bachelor's Degree",
      institution: "PVG's College of Science and Commerce",
      score: "Grade: A+",
      period: "2020 – 2023"
    }
  ],

  certifications: [
    "JavaScript Essentials 1 – Cisco Networking Academy (Oct 2026)",
    "Basics of SQL Statements & Indexes – UniAthena / Cambridge International Qualifications, UK (Oct 2026)",
    "Basics of Artificial Intelligence: Learning Models – UniAthena / Cambridge International Qualifications, UK (Oct 2026)",
    "Basics of UI UX Strategy – UniAthena / Cambridge International Qualifications, UK (Oct 2026)",
    "ReactJS for Beginners – Meta / Coursera",
    "Introduction to Prompt Engineering for Generative AI – DeepLearning.AI",
    "Big Data Computing – NPTEL / IIT",
    "Certified Web Developer Intern – Proser Digital Solutions; Tayan Solutions"
  ],

  languages: ["English", "Hindi", "Marathi"]
};

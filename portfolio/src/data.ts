import {
  Database,
  Layout,
  Terminal,
  Network,
  CloudCog
} from "lucide-react";

export const PORTFOLIO_DATA = {
  name: "Madhura Chakole",
  role: "Frontend Developer",
  email: "madhurachakole.22@gmail.com",
  phone: "+91 9325509858",
  linkedin: "https://linkedin.com/in/madhura-chakole",
  github: "https://github.com/MadhuraChakole",
  resumeLink: "/Madhura_Chakole_Resume.pdf",

  tagline: "I build pixel-perfect, accessible, and high-performance web experiences for modern SaaS products.",

  about: [
    "I'm a Frontend Developer who loves turning complex problems into simple, beautiful, and intuitive interfaces. My journey started with a curiosity about how websites work, and it has evolved into a passion for building scalable, production-ready applications.",
    "Currently, I'm working at Proser Digital Solutions where I build modular React components, integrate REST APIs, and convert Figma designs into responsive UIs. Previously, I contributed to the Edict platform — an AI-powered SaaS admin dashboard used by organizations to automate workflows, manage documents, and track audits.",
    "When I'm not coding, I'm exploring new frontend tools, reading about design systems, or working on side projects to sharpen my TypeScript and React skills."
  ],

  summary: "Frontend Developer with hands-on experience building scalable Admin Dashboards and full-stack web applications using React 19, TypeScript, and JavaScript (ES6+). Skilled in Redux Toolkit, Context API, REST API integration, Firebase Authentication, and MongoDB-backed systems. Experienced in converting Figma designs into responsive UI and optimizing performance for cross-browser compatibility.",

  skills: [
    { category: "Frontend", items: ["React.js (v19)", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"], icon: Layout },
    { category: "Backend & DB", items: ["Node.js", "Express.js", "MongoDB", "Core Java"], icon: Database },
    { category: "API Integration", items: ["REST APIs", "Axios", "Redux Toolkit", "Context API"], icon: Network },
    { category: "Tools", items: ["Git", "GitHub", "Bitbucket", "VS Code", "Postman", "Jira", "Figma"], icon: Terminal },
    { category: "Practices", items: ["Responsive Design", "Cross-Browser Compatibility", "Debugging", "Performance Optimization", "Agile workflow"], icon: CloudCog },
  ],

  projects: [
    {
      title: "Edict — AI Business Automation Platform",
      link: "https://www.edictapp.com/",
      github: "",
      description: "Multi-tenant SaaS admin dashboard serving 50+ organizations to automate day-to-day business operations with AI-powered workflows.",
      points: [
        "Built a scalable React-based frontend with role-based access control (RBAC) serving 5 distinct user roles.",
        "Implemented a visual drag-and-drop workflow builder using ReactFlow, reducing approval setup time by 60%.",
        "Integrated document management, leave application, and holiday policy modules with scoped access.",
        "Developed enterprise-grade audit features including activity heatmaps, risk alerts, and exportable log reports."
      ],
      tags: ["React 19", "TypeScript", "Redux Toolkit", "ReactFlow", "Tailwind CSS", "Firebase"]
    },
    {
      title: "AVTech Solutions",
      link: "https://www.avtechsolutions.co.in",
      github: "",
      description: "Infrastructure monitoring dashboard providing real-time service status updates across 10+ service endpoints.",
      points: [
        "Developed 15+ reusable React components for infrastructure monitoring dashboard.",
        "Integrated REST APIs for real-time service status updates with auto-refresh every 30 seconds.",
        "Managed state using React Hooks and Context API, reducing prop drilling by 70%.",
        "Implemented performance optimization achieving sub-2s page load times and responsive UI across devices."
      ],
      tags: ["React", "Context API", "REST APIs", "Responsive UI"]
    },
    {
      title: "Networking Site",
      link: "https://networking-site.netlify.app",
      github: "",
      description: "Full-stack Admin Dashboard with role-based access control, analytics, and full CRUD operations handling 1000+ records.",
      points: [
        "Built scalable Admin Dashboard using React 19 and TypeScript with 20+ dynamic pages.",
        "Implemented Firebase Authentication with role-based access control for Admin, Manager, and User roles.",
        "Developed full CRUD operations using Node.js, Express.js, and MongoDB.",
        "Designed search and filtering logic handling 1000+ records with instant response times.",
        "Developed analytics dashboards using Recharts with 5+ interactive chart types."
      ],
      tags: ["React 19", "TypeScript", "Node.js", "MongoDB", "Redux Toolkit", "Firebase"]
    }
  ],

  experience: [
    {
      role: "Web Developer Intern",
      company: "Proser Digital Solutions",
      duration: "Oct 2025 – Present",
      points: [
        "Developed 30+ modular React components using hooks-based architecture, improving code reusability by 40%.",
        "Integrated MongoDB-backed REST APIs using Axios with proper error handling and loading states.",
        "Converted 15+ Figma designs into pixel-perfect responsive UI with cross-browser compatibility.",
        "Optimized rendering performance, reducing unnecessary re-renders by 50% using React.memo and useMemo.",
        "Collaborated in Agile sprints using Git, GitHub, and Jira for task tracking and code reviews."
      ]
    },
    {
      role: "Web Developer Intern",
      company: "Tayan Solutions",
      duration: "Mar 2024 – May 2024",
      points: [
        "Developed responsive web interfaces using HTML, CSS, JavaScript, and Bootstrap for 3+ client projects.",
        "Implemented UI enhancements and resolved 20+ bugs, improving overall user experience.",
        "Gained hands-on experience with version control (Git) and collaborative development workflows."
      ]
    }
  ],

  education: [
    {
      degree: "Master of Computer Application (MCA)",
      institution: "PVG's College of Science and Commerce",
      score: "78%"
    },
    {
      degree: "Bachelor of Computer Science (BCS)",
      institution: "PVG's College of Science and Commerce",
      score: "76.1%"
    }
  ],

  certifications: [
    "ReactJS for Beginners",
    "Introduction to Prompt Engineering for Generative AI",
    "Big Data Computing – 8 Weeks",
    "Certified Web Developer Intern – Tayan Solutions"
  ]
};

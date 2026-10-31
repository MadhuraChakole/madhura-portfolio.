import {
  Database,
  Layout,
  Terminal,
  Network,
  CloudCog,
  Zap,
  ShieldCheck,
  Cpu,
  Layers
} from "lucide-react";

export interface ProjectDetail {
  id: string;
  category: "SaaS & AI" | "Infrastructure & Dashboards" | "Full-Stack Web Apps";
  title: string;
  subtitle: string;
  link: string;
  github: string;
  description: string;
  points: string[];
  tags: string[];
  featured: boolean;
  modalDetails: {
    problem: string;
    solution: string;
    architecture: string[];
    keyMetrics: string[];
    techStackDetails: string[];
  };
}

export interface CodeSnippet {
  id: string;
  title: string;
  language: string;
  filename: string;
  description: string;
  code: string;
}

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
  availability: "Available for Full-Time Roles",

  tagline: "Frontend Developer (React.js) building responsive, API-driven web applications with modern component architectures, performance tuning, and full-stack capabilities.",

  stats: [
    { label: "Modular Components", value: "30+", desc: "Hooks-based React architecture", icon: Layers },
    { label: "Core Admin Modules", value: "6", desc: "Shipped for EDICT Enterprise platform", icon: Zap },
    { label: "Re-Render Reduction", value: "50%", desc: "Optimized via React.memo & code-splitting", icon: Cpu },
    { label: "Academic Standing", value: "Grade A+", desc: "MCA & Bachelor's Degrees", icon: ShieldCheck }
  ],

  about: {
    bio: [
      "I am a Frontend Developer (React.js) with hands-on internship experience building responsive, API-driven web applications using React.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, and Tailwind CSS. Skilled in reusable component architecture, REST API integration, Figma-to-code implementation, cross-browser compatibility, debugging, and performance optimization.",
      "At Proser Digital Solutions, I developed modular React components using a hooks-based architecture, integrated REST APIs with MongoDB-backed data flows across core admin modules, and converted Figma designs into responsive interfaces across desktop and mobile breakpoints. Previously at Tayan Solutions, I delivered responsive interfaces and resolved functional bugs within sprint deadlines.",
      "I have built full-stack applications including HerFit AI (AI-Powered Fitness & Wellness Platform) and shipped six core admin modules for the EDICT Enterprise SaaS Platform. As an MCA graduate (Grade: A+), I am actively seeking a Frontend / React.js Developer role."
    ],
    principles: [
      {
        title: "Clean & Reusable Component Architecture",
        desc: "Hooks-based modular architecture, strict TypeScript typing, and separation of UI from business logic.",
        icon: Layout
      },
      {
        title: "Performance Optimization",
        desc: "Minimizing wasteful re-renders using React.memo, code splitting, and sub-2 second page loads.",
        icon: Zap
      },
      {
        title: "Figma-to-Code Precision",
        desc: "Translating Figma designs into responsive, cross-browser interfaces with consistent layouts across breakpoints.",
        icon: CloudCog
      },
      {
        title: "Resilient API & State Integration",
        desc: "Dynamic data fetching with Axios, MongoDB-backed flows, and robust error handling.",
        icon: Network
      }
    ]
  },

  summary: "Frontend Developer (React.js) with hands-on internship experience building responsive, API-driven web applications using React.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, and Tailwind CSS. Skilled in reusable component architecture, REST API integration, Figma-to-code implementation, cross-browser compatibility, debugging, and performance optimization. Working knowledge of Node.js, Express.js, and MongoDB, with full-stack project experience. MCA graduate seeking a Frontend / React.js Developer role.",

  skills: [
    { category: "Languages", items: ["JavaScript (ES6+)", "TypeScript", "Core Java", "SQL (basics)"], icon: Terminal },
    { category: "Frontend", items: ["React.js", "Hooks", "React.memo", "Code Splitting", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Responsive Design"], icon: Layout },
    { category: "Backend & Database", items: ["Node.js", "Express.js", "REST APIs", "Axios", "MongoDB", "User Authentication"], icon: Database },
    { category: "Tools", items: ["Git", "GitHub", "Bitbucket", "VS Code", "Postman", "Jira", "Figma"], icon: Network },
    { category: "Practices", items: ["Reusable Components", "API Integration", "Role-Based Access Control", "Debugging", "Cross-Browser Compatibility", "Performance Optimization", "Agile/Scrum"], icon: CloudCog }
  ],

  projects: [
    {
      id: "herfit-ai",
      category: "SaaS & AI",
      title: "HerFit AI – AI-Powered Fitness & Wellness Platform",
      subtitle: "Personalized Fitness Dashboard & AI Fitness Coach",
      link: "https://madhurachakole-portfolio.vercel.app",
      github: "https://github.com/MadhuraChakole",
      description: "Full-stack personalized fitness and wellness platform that lets users manage workouts, hydration, daily fitness goals, and progress from a single, user-friendly dashboard.",
      points: [
        "Built full-stack fitness and wellness platform letting users manage workouts, hydration, daily fitness goals, and progress.",
        "Built React.js and Tailwind CSS frontend, Node.js/Express.js backend, secure user auth, and MongoDB integration.",
        "Implemented personalized daily workout plans based on fitness goals, experience levels, and available time.",
        "Integrated an AI fitness coach answering fitness questions and recommending workouts based on individual goals.",
        "Built hydration tracking with quick-add water logging, daily hydration goals, and progress monitoring.",
        "Developed workout and activity logging with summaries, and a progress dashboard with clear visual indicators."
      ],
      tags: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "AI Coach", "User Auth"],
      featured: true,
      modalDetails: {
        problem: "Users often struggle with inconsistent fitness habits due to fragmented tools for tracking exercise, monitoring daily hydration, and getting immediate tailored workout guidance.",
        solution: "Engineered a unified full-stack wellness hub with personalized daily workout generation, quick-add hydration logging, an integrated AI fitness coach, and visual progress tracking.",
        architecture: [
          "React.js and Tailwind CSS responsive interface with custom interactive progress dashboards.",
          "Node.js and Express.js REST APIs managing workout plans, activity logs, and hydration records.",
          "MongoDB database integration with optimized schemas for daily tracking and streaks.",
          "Secure user authentication ensuring personal health data privacy."
        ],
        keyMetrics: [
          "Complete full-stack fitness & wellness hub",
          "Personalized daily workout generation",
          "Integrated AI fitness coach recommendations",
          "Quick-add hydration tracking & progress dashboard"
        ],
        techStackDetails: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "AI Coach Integration", "User Authentication"]
      }
    },
    {
      id: "edict-app",
      category: "SaaS & AI",
      title: "EDICT App – Enterprise SaaS Platform",
      subtitle: "Enterprise Admin Modules, RBAC & Billing Management",
      link: "https://www.edictapp.com",
      github: "",
      description: "Enterprise SaaS platform providing multi-module administration, subscription management, and role-based access control.",
      points: [
        "Built and shipped six core admin modules: Dashboard, Subscription & Billing, User Management, Reports, Audit Trail, and Feedback.",
        "Implemented role-based access control and permission-driven UI across user roles, departments, and organizational scopes.",
        "Developed subscription and billing workflows covering plan restrictions, usage tracking, subscription status, and transaction history.",
        "Built user-management tools with multi-filter search, department/role assignment, and permission-controlled actions."
      ],
      tags: ["React.js", "REST APIs", "MongoDB", "RBAC", "Billing Workflows", "Tailwind CSS"],
      featured: true,
      modalDetails: {
        problem: "Enterprise SaaS operations required centralized administrative control over user access, department permissions, subscription tiers, and audit compliance.",
        solution: "Engineered 6 core production admin modules with strict permission gating, dynamic multi-filter searching, and subscription lifecycle management.",
        architecture: [
          "Hooks-based React architecture with reusable table, modal, and filter components.",
          "Permission-driven UI engine rendering actions conditionally by role and department.",
          "REST API integration with MongoDB-backed dynamic data updates.",
          "Subscription and billing state engine handling plan limits and transaction logs."
        ],
        keyMetrics: [
          "6 core enterprise modules shipped to production",
          "Comprehensive Role-Based Access Control (RBAC)",
          "Subscription & billing limit enforcement",
          "Production deployment at edictapp.com"
        ],
        techStackDetails: ["React.js", "REST APIs", "MongoDB", "Tailwind CSS", "Axios", "RBAC Architecture"]
      }
    },
    {
      id: "personal-portfolio",
      category: "Full-Stack Web Apps",
      title: "Personal Portfolio Website",
      subtitle: "High-Performance Developer Portfolio & Interactive Showcase",
      link: "https://madhurachakole-portfolio.vercel.app",
      github: "https://github.com/MadhuraChakole",
      description: "Responsive personal portfolio showcasing projects, technical skills, and professional experience, optimized for all screen sizes.",
      points: [
        "Designed and developed a responsive personal portfolio to showcase projects, technical skills, and professional experience, optimized for desktop, tablet, and mobile screens.",
        "Built reusable, type-safe React components with TypeScript and styled the interface with Tailwind CSS for a clean, consistent, and maintainable UI.",
        "Developed interactive project-detail modals presenting each project's description, tech stack, and key features.",
        "Improved initial load time and reduced unnecessary re-renders using React.memo and code-splitting.",
        "Deployed the site on Vercel for fast, publicly accessible hosting."
      ],
      tags: ["React.js", "TypeScript", "Tailwind CSS", "React.memo", "Code Splitting", "Vercel"],
      featured: true,
      modalDetails: {
        problem: "Presenting complex engineering achievements, interactive project deep-dives, and technical competencies in a clean, modern, and high-performance format.",
        solution: "Built a type-safe single-page portfolio with responsive dark-theme design, dynamic project modals, code showcases, and optimized bundle delivery.",
        architecture: [
          "Modular component tree with TypeScript interfaces ensuring end-to-end type safety.",
          "Render optimizations leveraging React.memo and dynamic code-splitting.",
          "Tailwind CSS utility styling with modern glassmorphism and responsive breakpoints.",
          "Continuous integration and instant deployments on Vercel edge network."
        ],
        keyMetrics: [
          "Sub-2 second initial load time",
          "100% type-safe React codebase",
          "Zero unnecessary component re-renders",
          "Live at madhurachakole-portfolio.vercel.app"
        ],
        techStackDetails: ["React.js", "TypeScript", "Tailwind CSS", "React.memo", "Code Splitting", "Vercel"]
      }
    },
    {
      id: "avtech-solutions",
      category: "Infrastructure & Dashboards",
      title: "Avtech Solutions – Corporate Website",
      subtitle: "Corporate Web Experience & Scannable Services Directory",
      link: "https://www.avtechsolutions.co.in",
      github: "",
      description: "Responsive corporate website organizing technical service offerings into clear, scannable categories with cross-browser compatibility.",
      points: [
        "Built a responsive corporate website, organizing service information into clear, scannable categories.",
        "Ensured responsive layouts and cross-browser consistency across desktop, tablet, and mobile breakpoints.",
        "Structured navigation pathways for intuitive client discovery of IT solutions and service capabilities."
      ],
      tags: ["React.js", "Bootstrap", "Responsive Design", "Cross-Browser Compatibility"],
      featured: true,
      modalDetails: {
        problem: "Corporate clients needed clear, fast access to technical service portfolios without navigating cluttered or non-responsive pages.",
        solution: "Designed and implemented a responsive, scannable corporate website organizing services into intuitive categories.",
        architecture: [
          "Responsive grid architecture using React.js and Bootstrap.",
          "Scannable category layouts with structured service descriptions.",
          "Cross-browser testing ensuring uniform appearance across modern browsers."
        ],
        keyMetrics: [
          "100% responsive cross-device layout",
          "Fast scannable service directory",
          "Production deployment at avtechsolutions.co.in"
        ],
        techStackDetails: ["React.js", "Bootstrap", "HTML5/CSS3", "Responsive Design"]
      }
    }
  ] as ProjectDetail[],

  codeSnippets: [
    {
      id: "use-debounce",
      title: "Custom React Hook: useDebounce",
      language: "typescript",
      filename: "hooks/useDebounce.ts",
      description: "Custom hook for delaying search query executions to eliminate redundant API calls during fast user typing.",
      code: `import { useState, useEffect } from 'react';

/**
 * Returns a debounced value after a specified delay period.
 * Ideal for search inputs and auto-saving forms.
 */
export function useDebounce<T>(value: T, delayMs: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delayMs);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delayMs]);

  return debouncedValue;
}`
    },
    {
      id: "rbac-guard",
      title: "Role-Based Access Route Guard",
      language: "typescript",
      filename: "components/ProtectedRoute.tsx",
      description: "Declarative React component wrapper that checks user roles against required permissions before rendering protected routes.",
      code: `import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: Array<'SuperAdmin' | 'Admin' | 'Manager' | 'User'>;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  allowedRoles
}) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <div className="animate-pulse p-8 text-center text-text-sub">Verifying session...</div>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const hasPermission = allowedRoles.includes(user.role);

  if (!hasPermission) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};`
    },
    {
      id: "memoized-filter",
      title: "Optimized Search & Filter Logic",
      language: "typescript",
      filename: "utils/filterRecords.ts",
      description: "High-performance search utility with multi-field matching and memoization to process records seamlessly.",
      code: `import { useMemo } from 'react';

export interface RecordItem {
  id: string;
  name: string;
  category: string;
  status: 'active' | 'pending' | 'archived';
  tags: string[];
}

export function useFilteredRecords(
  records: RecordItem[],
  query: string,
  categoryFilter: string
) {
  return useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return records.filter((item) => {
      const matchesCategory =
        categoryFilter === 'All' || item.category === categoryFilter;

      if (!matchesCategory) return false;
      if (!normalizedQuery) return true;

      return (
        item.name.toLowerCase().includes(normalizedQuery) ||
        item.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery))
      );
    });
  }, [records, query, categoryFilter]);
}`
    }
  ] as CodeSnippet[],

  experience: [
    {
      role: "Web Developer Intern",
      company: "Proser Digital Solutions",
      location: "Pune, India",
      duration: "Dec 2025 – Aug 2026",
      points: [
        "Built modular, reusable React components using a hooks-based architecture, reducing duplicate code across admin modules and speeding up feature development.",
        "Integrated REST APIs using Axios with MongoDB-backed data flows across core admin modules, replacing manual data refreshes with dynamic updates.",
        "Converted Figma designs into responsive, cross-browser interfaces with consistent layouts across desktop and mobile breakpoints.",
        "Identified and reduced unnecessary component re-renders to improve UI responsiveness in admin screens.",
        "Collaborated in Agile sprints; used Git/GitHub for version control and participated in code reviews."
      ],
      tech: ["React.js", "Hooks", "React.memo", "Axios", "REST APIs", "MongoDB", "Figma", "Git", "GitHub", "Agile/Scrum"]
    },
    {
      role: "Web Developer Intern",
      company: "Tayan Solutions",
      location: "Pune, India",
      duration: "Mar 2025 – May 2025",
      points: [
        "Developed responsive web interfaces using HTML, CSS, JavaScript, and Bootstrap.",
        "Resolved UI and functional bugs and delivered interactive client-side features within sprint deadlines.",
        "Integrated REST APIs to fetch and render dynamic content in place of hardcoded data.",
        "Tracked tasks in Jira and collaborated using GitHub/Bitbucket."
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "REST APIs", "Jira", "GitHub", "Bitbucket"]
    }
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "PVG's College of Science and Commerce",
      score: "Grade: A+",
      period: "2024 – 2026",
      desc: "Comprehensive coursework in Web Software Engineering, Database Systems, Advanced React Development, and Scalable Software Architecture."
    },
    {
      degree: "Bachelor's Degree",
      institution: "PVG's College of Science and Commerce",
      score: "Grade: A+",
      period: "2020 – 2023",
      desc: "Foundational computer science curriculum including Data Structures, Algorithms, Object-Oriented Programming (Core Java), HTML/CSS/JS, and Database Management."
    }
  ],

  certifications: [
    {
      title: "JavaScript Essentials 1",
      issuer: "Cisco Networking Academy (Oct 2026)",
      desc: "Core JavaScript fundamentals, control structures, functions, and algorithmic problem-solving."
    },
    {
      title: "Basics of SQL Statements & Indexes",
      issuer: "UniAthena / Cambridge International Qualifications, UK (Oct 2026)",
      desc: "Relational database querying, index design, query optimization, and schema management."
    },
    {
      title: "Basics of Artificial Intelligence: Learning Models",
      issuer: "UniAthena / Cambridge International Qualifications, UK (Oct 2026)",
      desc: "Artificial intelligence principles, machine learning model foundations, and data-driven systems."
    },
    {
      title: "Basics of UI UX Strategy",
      issuer: "UniAthena / Cambridge International Qualifications, UK (Oct 2026)",
      desc: "User interface and user experience design principles, wireframing, and usability heuristics."
    },
    {
      title: "ReactJS for Beginners",
      issuer: "Meta / Coursera",
      desc: "React hooks, state management, component lifecycle, and modern front-end patterns."
    },
    {
      title: "Introduction to Prompt Engineering for Generative AI",
      issuer: "DeepLearning.AI",
      desc: "LLM prompt optimization, contextual structuring, and AI workflow integration."
    },
    {
      title: "Big Data Computing",
      issuer: "NPTEL / IIT",
      desc: "Distributed systems, parallel computing paradigms, and large-scale data workflows."
    },
    {
      title: "Certified Web Developer Intern",
      issuer: "Proser Digital Solutions; Tayan Solutions",
      desc: "Internship certification recognizing front-end and full-stack development contributions."
    }
  ],

  languages: ["English", "Hindi", "Marathi"]
};

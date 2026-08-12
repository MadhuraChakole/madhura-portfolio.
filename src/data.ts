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
  role: "Frontend Developer",
  email: "madhurachakole.22@gmail.com",
  phone: "+91 9325509858",
  linkedin: "https://linkedin.com/in/madhura-chakole",
  github: "https://github.com/MadhuraChakole",
  resumeLink: "/Madhura_Chakole_Resume.pdf",
  location: "Pune, India",
  availability: "Available for Full-Time Roles",

  tagline: "Building scalable, high-performance React 19 & TypeScript applications for modern SaaS platforms and enterprise admin dashboards.",

  stats: [
    { label: "Modular Components", value: "30+", desc: "Hooks-based React architecture", icon: Layers },
    { label: "Approval Setup Time", value: "60% Faster", desc: "Reduced via ReactFlow drag-and-drop", icon: Zap },
    { label: "Re-Render Reduction", value: "50%", desc: "Optimized using useMemo & React.memo", icon: Cpu },
    { label: "Page Load Time", value: "< 2s", desc: "Sub-2 second cross-browser load times", icon: ShieldCheck }
  ],

  about: {
    bio: [
      "I am a results-driven Frontend Developer specializing in React 19, TypeScript, and modern web architectures. I turn complex business workflows into crisp, intuitive, and performant user interfaces.",
      "Currently at Proser Digital Solutions, I build modular React components, integrate REST APIs with resilient state management, and convert Figma designs into pixel-perfect web applications. Previously, I contributed to Edict, an AI-powered enterprise SaaS admin platform handling audit tracking, visual workflow builders, and document management for 50+ organizations.",
      "Engineers and hiring teams value my focus on clean code, strong TypeScript typing, proactive performance tuning, and responsive UI design."
    ],
    principles: [
      {
        title: "Clean & Type-Safe Architecture",
        desc: "Strict TypeScript interfaces, modular component patterns, and separation of UI from business logic.",
        icon: Layout
      },
      {
        title: "Performance Optimization",
        desc: "Sub-2s page renders, minimized re-renders using React.memo, useMemo, and optimized bundle chunks.",
        icon: Zap
      },
      {
        title: "User-Centric Engineering",
        desc: "Pixel-perfect Figma translations, smooth Framer Motion micro-animations, and full WCAG accessibility.",
        icon: CloudCog
      },
      {
        title: "Scalable State Management",
        desc: "Predictable data flows leveraging Redux Toolkit, Context API, and resilient Axios error handling.",
        icon: Network
      }
    ]
  },

  summary: "Frontend Developer with hands-on experience building scalable Admin Dashboards and full-stack web applications using React 19, TypeScript, and JavaScript (ES6+). Skilled in Redux Toolkit, Context API, REST API integration, Firebase Authentication, and MongoDB-backed systems. Experienced in converting Figma designs into responsive UI and optimizing performance for cross-browser compatibility.",

  skills: [
    { category: "Frontend Core", items: ["React.js (v19)", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"], icon: Layout },
    { category: "Backend & DB", items: ["Node.js", "Express.js", "MongoDB", "Core Java"], icon: Database },
    { category: "State & API Integration", items: ["Redux Toolkit", "Context API", "REST APIs", "Axios", "Async Thunks"], icon: Network },
    { category: "Development Tools", items: ["Git", "GitHub", "Bitbucket", "VS Code", "Postman", "Jira", "Figma"], icon: Terminal },
    { category: "Engineering Practices", items: ["Responsive UI", "Cross-Browser Testing", "Performance Optimization", "Clean Code", "Agile Sprints"], icon: CloudCog }
  ],

  projects: [
    {
      id: "edict-ai",
      category: "SaaS & AI",
      title: "Edict — AI Business Automation Platform",
      subtitle: "Multi-Tenant SaaS Admin Dashboard & Workflow Builder",
      link: "https://www.edictapp.com/",
      github: "",
      description: "Enterprise SaaS admin dashboard serving 50+ organizations to automate day-to-day business operations, audit tracking, and document workflows.",
      points: [
        "Architected scalable React 19 frontend supporting Role-Based Access Control (RBAC) across 5 distinct user roles.",
        "Built an intuitive drag-and-drop workflow builder using ReactFlow, cutting approval setup time by 60%.",
        "Integrated document management, leave application, and holiday policy modules with scoped permissions.",
        "Engineered enterprise audit suite featuring real-time activity heatmaps, risk alerts, and CSV/PDF exportable log reports."
      ],
      tags: ["React 19", "TypeScript", "Redux Toolkit", "ReactFlow", "Tailwind CSS", "Firebase"],
      featured: true,
      modalDetails: {
        problem: "Organizations needed a single centralized multi-tenant platform to automate internal approvals, track document access, and maintain immutable audit logs for regulatory compliance.",
        solution: "Engineered a modular React 19 single-page app with visual flowchart creation (ReactFlow), secure token-based authentication, and customizable dashboard widgets for 5 role types (SuperAdmin, Admin, Manager, Auditor, Employee).",
        architecture: [
          "Role-Based Access Control (RBAC) wrapper component restricting views and API calls per user token.",
          "Visual node graph builder storing customized approval logic into structured JSON state.",
          "Lazy-loaded dynamic reporting components for activity heatmaps and log exports.",
          "Tailwind CSS theme engine supporting high-contrast accessible layouts."
        ],
        keyMetrics: [
          "60% reduction in workflow setup time",
          "5 distinct role-based access flows",
          "50+ active client organizations onboarded",
          "100% compliance audit trail accuracy"
        ],
        techStackDetails: ["React 19", "TypeScript", "ReactFlow Engine", "Redux Toolkit", "Tailwind CSS", "Firebase Auth & Firestore"]
      }
    },
    {
      id: "avtech-monitoring",
      category: "Infrastructure & Dashboards",
      title: "AVTech Solutions Dashboard",
      subtitle: "Real-Time Infrastructure Monitoring & Service Status Platform",
      link: "https://www.avtechsolutions.co.in",
      github: "",
      description: "High-uptime service status dashboard monitoring 10+ cloud infrastructure endpoints in real time.",
      points: [
        "Created 15+ reusable React monitoring components styled with custom CSS and Tailwind utilities.",
        "Integrated REST endpoints with auto-refresh every 30 seconds for live service status and uptime alerts.",
        "Streamlined state management using Context API, reducing prop drilling by 70% across nested views.",
        "Tuned initial page load to sub-2 seconds with lazy loading and optimized bundle splitting."
      ],
      tags: ["React", "Context API", "REST APIs", "Axios", "Responsive UI", "Tailwind CSS"],
      featured: true,
      modalDetails: {
        problem: "IT ops needed instant visual clarity into endpoint latency, server downtime, and live service health without reloading browser pages.",
        solution: "Developed an auto-polling status matrix dashboard with status color coding (Healthy, Degraded, Down), historical uptime trendlines, and immediate email alert triggers.",
        architecture: [
          "Axios polling hook with auto-retry and backoff interval logic.",
          "Centralized Status Context providing instant state broadcasts to child endpoint widgets.",
          "Sub-2s render optimization via code-splitting and asset compression."
        ],
        keyMetrics: [
          "Sub-2s page load speed",
          "70% reduction in component prop drilling",
          "10+ service endpoints monitored live",
          "30-second live status refresh loop"
        ],
        techStackDetails: ["React.js", "TypeScript", "Context API", "Axios Interceptors", "Tailwind CSS"]
      }
    },
    {
      id: "networking-dashboard",
      category: "Full-Stack Web Apps",
      title: "Networking Admin Suite",
      subtitle: "Full-Stack Analytics & Record Management Platform",
      link: "https://networking-site.netlify.app",
      github: "",
      description: "Comprehensive admin portal featuring role-based auth, full CRUD operations over 1,000+ records, and interactive charts.",
      points: [
        "Built dynamic Admin Portal using React 19 & TypeScript with 20+ responsive pages.",
        "Implemented Firebase Authentication with role-based routing for Admin, Manager, and standard users.",
        "Developed RESTful CRUD API endpoints leveraging Node.js, Express.js, and MongoDB.",
        "Created client-side filter & search algorithm indexing 1,000+ records with zero lag (< 50ms response).",
        "Built visual metrics dashboards with 5+ chart variants powered by Recharts."
      ],
      tags: ["React 19", "TypeScript", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "Firebase"],
      featured: true,
      modalDetails: {
        problem: "Managing user networking records, subscription tiers, and engagement data required a secure, searchable, and responsive control panel.",
        solution: "Delivered an end-to-end full-stack MERN application with clean UI/UX, responsive tables, modal forms for record editing, and real-time analytical graphs.",
        architecture: [
          "Node.js/Express REST API with JWT authentication and middleware input validation.",
          "MongoDB aggregation queries for quick statistics calculation.",
          "React 19 dynamic pagination and memoized client-side filtering.",
          "Recharts analytics engine with customizable time-series filters."
        ],
        keyMetrics: [
          "1,000+ indexed data records handled effortlessly",
          "< 50ms instant client search response",
          "20+ dynamic application routes",
          "5 interactive analytics chart types"
        ],
        techStackDetails: ["React 19", "TypeScript", "Node.js / Express", "MongoDB Atlas", "Firebase Auth", "Recharts"]
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
      description: "High-performance search utility with multi-field matching and memoization to process 1,000+ records seamlessly.",
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
      duration: "Oct 2025 – Present",
      points: [
        "Developed 30+ modular, reusable React components using hooks-based architecture, boosting team UI reusability by 40%.",
        "Integrated REST APIs with Axios, implementing custom request interceptors, global loading states, and robust error toast notifications.",
        "Converted 15+ complex Figma wireframes into pixel-perfect, responsive HTML5/CSS3/Tailwind interfaces.",
        "Optimized component render cycles using React.memo, useMemo, and useCallback, reducing wasteful re-renders by 50%.",
        "Participated in Agile sprint planning, code reviews, and Git/Jira workflow management."
      ],
      tech: ["React 19", "TypeScript", "Tailwind CSS", "Axios", "REST APIs", "Git", "Jira", "Figma"]
    },
    {
      role: "Web Developer Intern",
      company: "Tayan Solutions",
      location: "Pune, India",
      duration: "Mar 2024 – May 2024",
      points: [
        "Crafted responsive landing pages and administrative layouts using JavaScript (ES6+), Bootstrap, and CSS3 for 3+ client applications.",
        "Diagnosed and resolved 20+ frontend rendering and browser compatibility bugs, improving client satisfaction scores.",
        "Collaborated with senior engineers using Git version control and GitHub pull request workflows."
      ],
      tech: ["JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap", "Git", "Bug Resolution"]
    }
  ],

  education: [
    {
      degree: "Master of Computer Application (MCA)",
      institution: "PVG's College of Science and Commerce",
      score: "78%",
      period: "2022 – 2024",
      desc: "Specialized in Web Software Engineering, Database Systems, Advanced React Development, and Software Architecture."
    },
    {
      degree: "Bachelor of Computer Science (BCS)",
      institution: "PVG's College of Science and Commerce",
      score: "76.1%",
      period: "2019 – 2022",
      desc: "Core coursework in Data Structures, Algorithms, Object-Oriented Programming (Java), HTML/CSS/JS, and Database Management."
    }
  ],

  certifications: [
    { title: "ReactJS for Beginners", issuer: "Meta / Coursera", desc: "Hooks, state management, component lifecycle & JSX." },
    { title: "Introduction to Prompt Engineering for Generative AI", issuer: "DeepLearning.AI", desc: "LLM integration, context structuring, and AI workflow automation." },
    { title: "Big Data Computing (8 Weeks)", issuer: "NPTEL / IIT", desc: "Distributed computing concepts, data pipelines, and analytics." },
    { title: "Certified Web Developer Intern", issuer: "Tayan Solutions", desc: "Professional web development certification upon internship completion." }
  ]
};

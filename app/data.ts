import { Code2, AppWindow } from "lucide-react";

export const PROJECTS = [
  {
    title: "ArcherEats",
    description: "A local restaurant finder web app for DLSU Manila",
    role: "Software Developer, Design Analyst, & Quality Assurance",
    fullDescription: "Developed a full-featured local restaurant discovery web application designed to enhance the discovery, review, and sharing of information about local businesses around DLSU-Manila. Provided an integrated map showcasing establishment locations around the school campus for easier navigation by students and visitors. Implemented search filters enabling customers to find restaurants based on their desired criteria and reviews.",
    technologies: "Web Application",
    icon: Code2,
    link: "",
    imageFolder: "ArcherEats",
    images: [
      { src: "/ArcherEats/ArcherEats.webp", alt: "ArcherEats - Cover" },
      { src: "/ArcherEats/ArcherEatshomepage.webp", alt: "ArcherEats - Homepage" },
      { src: "/ArcherEats/ArcherEatslogin.webp", alt: "ArcherEats - Login" },
      { src: "/ArcherEats/ArcherEatsprofile.webp", alt: "ArcherEats - Profile" },
      { src: "/ArcherEats/ArcherEatssearch.webp", alt: "ArcherEats - Search" },
      { src: "/ArcherEats/ArcherEatsstore.webp", alt: "ArcherEats - Store" },
      { src: "/ArcherEats/ArcherEatsdatabase.webp", alt: "ArcherEats - Database" }
    ]
  },
  {
    title: "FINSI Tracker",
    description: "A workforce management system",
    role: "Software Developer & Quality Assurance",
    fullDescription: "Developed a workforce management system for FINSI, a leading telecommunications provider in the Philippines, to improve employee, project, and cost tracking. Implemented user authentication, manual data entry, and a centralized dashboard featuring task progress summaries. Designed organized, visual representations of project statuses and employee assignments to enhance operational efficiency and oversight.",
    technologies: "Software Application",
    icon: AppWindow,
    link: "",
    imageFolder: "FINSI",
    images: [
      { src: "/FINSI/FINSIopening.webp", alt: "FINSI - Opening Screen" },
      { src: "/FINSI/FINSIdashboard.webp", alt: "FINSI - Dashboard" },
      { src: "/FINSI/FINSIemployeelist.webp", alt: "FINSI - Employee List" },
      { src: "/FINSI/FINSItracker.webp", alt: "FINSI - Tracker" }
    ]
  },
  {
    title: "Smart Screenshot Overlay Prototype",
    description: "AI-powered Context Recovery Tracker for developers",
    role: "Software Developer",
    fullDescription: "Developed a desktop application as part of an undergraduate thesis designed to help programmers, designers, and students track their work and maintain a contextual log of their computer usage. The application automatically captures screenshots of a user's desktop at a configurable interval, then leverages Optical Character Recognition (OCR) and a machine learning model to analyze, categorize, and summarize user activity in real time.",
    technologies: "Prototype Software Application",
    icon: AppWindow,
    link: "",
    imageFolder: "Thesis",
    images: [
      { src: "/Thesis/THESISmainoverlay.webp", alt: "Thesis - Main Overlay" },
      { src: "/Thesis/THESISbackgroundwidget.webp", alt: "Thesis - Background Widget" },
      { src: "/Thesis/THESIScontextgenerator.webp", alt: "Thesis - Context Generator" },
      { src: "/Thesis/THESISscreenshotinterval.webp", alt: "Thesis - Screenshot Interval" }
    ]
  },
  {
    title: "LW Web-based AI",
    description: "A Multi-tenant AI SaaS Platform",
    role: "Software Developer",
    fullDescription: "Contributed to the development of a multi-tenant AI SaaS platform during a three-month internship at Lightweight Solutions. Collaborated with the Quality Assurance team to review and resolve implementation issues across multiple software application projects. Gained hands-on experience integrating AI chatbots into production applications and connecting them with the company's social media channels. Specific project details and deliverables are protected under a Non-Disclosure Agreement (NDA) signed with Lightweight Solutions and cannot be disclosed.",
    technologies: "Web Application",
    icon: Code2,
    link: "",
    imageFolder: "LW",
    images: []
  }
];

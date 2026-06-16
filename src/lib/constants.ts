export const GITHUB_USERNAME = "peirisabhi";
export const MEDIUM_USERNAME = "abhishekpeiris";

export const PERSONAL_INFO = {
  name: "Abhishek Peiris",
  tagline: "Software Engineer | Innovator | Full Stack Developer",
  location: "Sri Lanka",
  company: "Virtusa",
  email: "abhishekpeiris@example.com",
  bio: "Passionate Software Engineer focused on building scalable software solutions and innovative digital products. Experienced in Java, Spring Boot, Android Development, PHP, JavaScript, and modern web technologies.",
  social: {
    github: "https://github.com/peirisabhi",
    linkedin: "https://www.linkedin.com/in/abhishekpeiris/",
    medium: "https://medium.com/@abhishekpeiris",
  },
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS = {
  Backend: [
    { name: "Java", icon: "☕", level: 90, color: "#F89820" },
    { name: "Spring Boot", icon: "🍃", level: 85, color: "#6DB33F" },
    { name: "PHP", icon: "🐘", level: 80, color: "#777BB4" },
    { name: "REST APIs", icon: "🔌", level: 88, color: "#06B6D4" },
    { name: "Kafka", icon: "📨", level: 75, color: "#7C3AED" },
  ],
  Frontend: [
    { name: "JavaScript", icon: "⚡", level: 85, color: "#F7DF1E" },
    { name: "React", icon: "⚛️", level: 80, color: "#61DAFB" },
    { name: "HTML", icon: "🌐", level: 90, color: "#E34F26" },
    { name: "CSS", icon: "🎨", level: 85, color: "#1572B6" },
    { name: "Bootstrap", icon: "🅱️", level: 80, color: "#7952B3" },
  ],
  Mobile: [
    { name: "Android", icon: "📱", level: 82, color: "#3DDC84" },
  ],
  Databases: [
    { name: "MySQL", icon: "🗄️", level: 80, color: "#4479A1" },
  ],
  Tools: [
    { name: "Git", icon: "🔀", level: 88, color: "#F05032" },
    { name: "GitHub", icon: "🐙", level: 88, color: "#ffffff" },
    { name: "IntelliJ", icon: "🧠", level: 85, color: "#FE315D" },
    { name: "Postman", icon: "📮", level: 82, color: "#FF6C37" },
    { name: "VS Code", icon: "💻", level: 88, color: "#007ACC" },
  ],
  Cloud: [
    { name: "AWS", icon: "☁️", level: 65, color: "#FF9900" },
    { name: "Docker", icon: "🐳", level: 70, color: "#2496ED" },
  ],
};

export const EXPERIENCE = [
  {
    company: "Virtusa",
    role: "Software Engineer",
    period: "2022 – Present",
    location: "Sri Lanka",
    description:
      "Working on enterprise-scale software solutions, contributing to full-stack development using Java, Spring Boot, and modern web technologies. Involved in Agile sprints, code reviews, and architecture design.",
    achievements: [
      "Developed and maintained microservices using Spring Boot and Kafka",
      "Built RESTful APIs consumed by Android and web clients",
      "Contributed to open source tools for sprint data management",
      "Implemented client-side configuration management systems",
    ],
    technologies: ["Java", "Spring Boot", "Kafka", "REST APIs", "MySQL", "Git", "Agile"],
    color: "#7C3AED",
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Agile Sprint Dashboard",
    description:
      "A comprehensive dashboard for tracking Agile sprint progress, team velocity, and project analytics. Built with modern web technologies.",
    repo: "agile-sprint-dashboard",
    githubUrl: "https://github.com/peirisabhi/agile-sprint-dashboard",
    tags: ["JavaScript", "Agile", "Dashboard"],
    category: "JavaScript",
    color: "#F7DF1E",
    featured: true,
  },
  {
    id: 2,
    title: "SpringBoot Kafka Integration",
    description:
      "Demonstrates event-driven architecture using Apache Kafka with Spring Boot. Includes producers, consumers, and topic management.",
    repo: "springboot-kfka",
    githubUrl: "https://github.com/peirisabhi/springboot-kfka",
    tags: ["Java", "Spring Boot", "Kafka", "Microservices"],
    category: "Spring Boot",
    color: "#6DB33F",
    featured: true,
  },
  {
    id: 3,
    title: "Ideamart API Middleware",
    description:
      "Middleware layer for Ideamart API integration, enabling seamless communication between applications and telecom services.",
    repo: "ideamart_api_middleware",
    githubUrl: "https://github.com/peirisabhi/ideamart_api_middleware",
    tags: ["Java", "PHP", "API", "Middleware"],
    category: "Java",
    color: "#F89820",
    featured: true,
  },
  {
    id: 4,
    title: "Fetch OpenSource Sprint Data",
    description:
      "Tool for fetching and analyzing sprint data from open source projects, providing insights into development patterns.",
    repo: "fetch_opensource_projects_sprint_data",
    githubUrl: "https://github.com/peirisabhi/fetch_opensource_projects_sprint_data",
    tags: ["Python", "Data Analysis", "Open Source"],
    category: "Python",
    color: "#3776AB",
    featured: false,
  },
  {
    id: 5,
    title: "Client Config WebApp",
    description:
      "Dynamic client-side configuration management web application with real-time updates and secure storage.",
    repo: "client-config-webapp",
    githubUrl: "https://github.com/peirisabhi/client-config-webapp",
    tags: ["JavaScript", "React", "Configuration"],
    category: "JavaScript",
    color: "#61DAFB",
    featured: false,
  },
];

export const TIMELINE = [
  {
    year: "2017",
    title: "Started CS Journey",
    description: "Began exploring programming with Java and basic web development.",
    icon: "🚀",
    color: "#7C3AED",
  },
  {
    year: "2018",
    title: "Android Development",
    description: "Built first Android applications and discovered the power of mobile development.",
    icon: "📱",
    color: "#3DDC84",
  },
  {
    year: "2019",
    title: "Full Stack Development",
    description: "Expanded into PHP, JavaScript and started building full-stack web applications.",
    icon: "🌐",
    color: "#06B6D4",
  },
  {
    year: "2020",
    title: "Spring Boot & Microservices",
    description: "Dove deep into enterprise Java, Spring Boot, and microservices architecture.",
    icon: "🍃",
    color: "#6DB33F",
  },
  {
    year: "2021",
    title: "Open Source Contributions",
    description: "Started contributing to open source and publishing 100+ repositories on GitHub.",
    icon: "🐙",
    color: "#24292F",
  },
  {
    year: "2022",
    title: "Joined Virtusa",
    description: "Began professional journey as a Software Engineer at Virtusa, working on enterprise-scale projects.",
    icon: "💼",
    color: "#F89820",
  },
  {
    year: "2024+",
    title: "AI-Assisted Development",
    description: "Exploring AI, cloud technologies, and innovative product engineering approaches.",
    icon: "🤖",
    color: "#22C55E",
  },
];

export const PROJECT_FILTERS = ["All", "Java", "Spring Boot", "Android", "PHP", "JavaScript", "Python"];

export const GITHUB_USERNAME = "peirisabhi";
export const MEDIUM_USERNAME = "abhishekpeiris";

export const PERSONAL_INFO = {
  name: "Abhishek Peiris",
  tagline: "Software Engineer | Full Stack Developer | Java Specialist",
  location: "Negombo, Sri Lanka",
  company: "VitalHub Innovations Lab",
  email: "abhishekpeiris9@gmail.com",
  bio: "Software Engineer with 5+ years of experience building scalable applications across healthcare, ERP, and enterprise domains. Specialised in Java, Spring Boot, and Android development. Currently integrating healthcare interoperability solutions at VitalHub Innovations Lab.",
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
    { name: "Java", icon: "☕", level: 92, color: "#F89820" },
    { name: "Spring Boot", icon: "🍃", level: 88, color: "#6DB33F" },
    { name: "Java EE", icon: "🏢", level: 82, color: "#F89820" },
    { name: "PHP", icon: "🐘", level: 90, color: "#777BB4" },
    { name: "Python", icon: "🐍", level: 72, color: "#3776AB" },
    { name: "C#", icon: "🔷", level: 68, color: "#239120" },
    { name: "Node.js", icon: "🟢", level: 72, color: "#339933" },
  ],
  Frontend: [
    { name: "TypeScript", icon: "🔷", level: 82, color: "#3178C6" },
    { name: "JavaScript", icon: "⚡", level: 85, color: "#F7DF1E" },
    { name: "React", icon: "⚛️", level: 80, color: "#61DAFB" },
    { name: "Next.js", icon: "▲", level: 75, color: "#ffffff" },
    { name: "Angular", icon: "🅰️", level: 78, color: "#DD0031" },
    { name: "HTML / CSS", icon: "🌐", level: 88, color: "#E34F26" },
    { name: "jQuery", icon: "🎯", level: 80, color: "#0769AD" },
  ],
  Mobile: [
    { name: "Android", icon: "📱", level: 84, color: "#3DDC84" },
    { name: "Arduino", icon: "🔌", level: 68, color: "#00979D" },
    { name: "IoT", icon: "📡", level: 70, color: "#22C55E" },
  ],
  Databases: [
    { name: "SQL", icon: "💾", level: 88, color: "#4479A1" },
    { name: "MySQL", icon: "🗄️", level: 85, color: "#4479A1" },
    { name: "MSSQL", icon: "🪟", level: 75, color: "#CC2927" },
    { name: "PostgreSQL", icon: "🐘", level: 70, color: "#336791" },
    { name: "MongoDB", icon: "🍃", level: 75, color: "#47A248" },
    { name: "Redis", icon: "🔴", level: 68, color: "#DC382D" },
    { name: "Firebase", icon: "🔥", level: 72, color: "#FFCA28" },
  ],
  Tools: [
    { name: "Git / GitLab", icon: "🔀", level: 90, color: "#F05032" },
    { name: "Jenkins", icon: "🤖", level: 78, color: "#D33833" },
    { name: "Docker", icon: "🐳", level: 74, color: "#2496ED" },
    { name: "SonarQube", icon: "📊", level: 72, color: "#4E9BCD" },
    { name: "Maven / Gradle", icon: "⚙️", level: 80, color: "#C71A36" },
    { name: "Postman", icon: "📮", level: 85, color: "#FF6C37" },
    { name: "Mirth Connect", icon: "🏥", level: 75, color: "#06B6D4" },
    { name: "JUnit / Mockito", icon: "✅", level: 82, color: "#25A162" },
  ],
  Messaging: [
    { name: "Apache Kafka", icon: "📨", level: 78, color: "#7C3AED" },
    { name: "RabbitMQ", icon: "🐇", level: 75, color: "#FF6600" },
    { name: "MQTT", icon: "📡", level: 70, color: "#8B5CF6" },
  ],
};

export const EXPERIENCE = [
  {
    company: "VitalHub Innovations Lab",
    role: "Software Engineer",
    period: "Dec 2023 – Present",
    location: "Sri Lanka",
    description:
      "Working on healthcare interoperability solutions, integrating clinical data across hospital systems using HL7, FHIR, and enterprise messaging tools. Building robust integration pipelines and maintaining high-availability services.",
    achievements: [
      "Implementing HL7/FHIR integration pipelines using Mirth Connect for real-time clinical data exchange",
      "Building event-driven microservices with Apache Kafka for scalable healthcare data streaming",
      "Developing and maintaining RESTful APIs for hospital information system integrations",
      "Collaborating with clinical teams to gather requirements and deliver compliant healthcare software",
    ],
    technologies: ["Java", "Spring Boot", "Mirth Connect", "Kafka", "HL7", "FHIR", "MySQL", "Jenkins", "Docker"],
    color: "#06B6D4",
    current: true,
  },
  {
    company: "Virtusa Pvt. Ltd",
    role: "Associate Engineer – Technology",
    period: "Jan 2022 – Dec 2023",
    location: "Colombo, Sri Lanka",
    description:
      "Worked on the ServiceNow platform developing enterprise client use cases and built highly scalable microservices using Java 8 and 11 with Spring Boot and RabbitMQ for event-driven architecture.",
    achievements: [
      "Developed and delivered client use cases on the ServiceNow platform",
      "Built highly scalable microservices using Java 8/11, Spring Boot, and RabbitMQ",
      "Wrote comprehensive unit and integration tests using JUnit and Mockito",
      "Participated in the Virtusa SRE Hackathon, achieving 4th place",
      "Followed Agile methodologies using GitLab for efficient software delivery",
    ],
    technologies: ["Java", "Spring Boot", "RabbitMQ", "ServiceNow", "JUnit", "Mockito", "GitLab", "Agile"],
    color: "#7C3AED",
    current: false,
  },
  {
    company: "Exon Software Solutions Pvt. Ltd",
    role: "Software Engineer",
    period: "Jun 2021 – Jan 2022",
    location: "Colombo, Sri Lanka",
    description:
      "Worked with retail ERP systems built on Java PrimeFaces. Handled full project ownership — from gathering customer requirements through development to release.",
    achievements: [
      "Maintained and enhanced a retail ERP system using Java PrimeFaces",
      "Managed the full project lifecycle independently, from requirements to release",
      "Led a small team, running knowledge-sharing sessions to improve team capability",
      "Delivered multiple project versions on time through effective collaboration",
    ],
    technologies: ["Java EE", "PrimeFaces", "MySQL", "Glassfish", "Git"],
    color: "#22C55E",
    current: false,
  },
  {
    company: "Exon Software Solutions Pvt. Ltd",
    role: "Associate Software Engineer",
    period: "Jan 2021 – Jun 2021",
    location: "Colombo, Sri Lanka",
    description:
      "Designed and developed Android applications integrated with Java EE backends. Built an LMS system and a multi-vendor e-commerce platform.",
    achievements: [
      "Designed and developed Android applications integrated with Java EE backends",
      "Built and maintained an LMS system using Java EE and MySQL",
      "Developed a multi-vendor e-commerce platform with both web and Android clients",
    ],
    technologies: ["Android", "Java EE", "MySQL", "Firebase"],
    color: "#F59E0B",
    current: false,
  },
  {
    company: "Stephen Innovations Pvt. Ltd",
    role: "Intern Software Engineer",
    period: "Jan 2020 – Feb 2021",
    location: "Negombo, Sri Lanka",
    description:
      "Developed a hybrid payroll management system and built web applications using PHP frameworks. Gained hands-on experience in backend API development.",
    achievements: [
      "Designed and developed a hybrid payroll management system using C#",
      "Built backend services and API endpoints using CodeIgniter and Laravel",
      "Developed e-commerce applications using the CodeIgniter framework",
    ],
    technologies: ["C#", "PHP", "CodeIgniter", "Laravel", "MySQL"],
    color: "#EC4899",
    current: false,
  },
];

export const EDUCATION = [
  {
    degree: "MSc Data Science",
    institution: "Cardiff Metropolitan University",
    location: "UK",
    period: "2024 – 2026",
    grade: "Merit",
    icon: "🎓",
    color: "#7C3AED",
  },
  {
    degree: "BSc Software Engineering (1st Class Honours)",
    institution: "Cardiff Metropolitan University",
    location: "UK",
    period: "May 2022 – Jun 2023",
    grade: "1st Class",
    icon: "🏅",
    color: "#06B6D4",
  },
  {
    degree: "Higher National Diploma in Software Engineering",
    institution: "Java Institute",
    location: "Colombo, Sri Lanka",
    period: "Jan 2019 – Jan 2022",
    grade: "SQA Level 8",
    icon: "📜",
    color: "#22C55E",
  },
  {
    degree: "Diploma in Software Engineering",
    institution: "Java Institute",
    location: "Colombo, Sri Lanka",
    period: "Nov 2018 – Dec 2019",
    grade: "SQA Level 7",
    icon: "📋",
    color: "#F59E0B",
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "PyroPro – Wildfire Detection & Prediction System",
    description:
      "IoT-based deforestation control and wildfire detection system. Collects sensor data, predicts fire risk using ML, and detects flames via camera + image processing. Sends real-time alerts to users.",
    repo: "pyropro",
    githubUrl: "https://github.com/peirisabhi",
    tags: ["Spring Boot", "NodeJS", "Angular", "Flask", "MQTT", "MySQL", "MongoDB", "Jenkins", "SonarQube"],
    category: "Spring Boot",
    color: "#EC4899",
    featured: true,
  },
  {
    id: 2,
    title: "GoCheeta – Taxi Booking System",
    description:
      "Full-featured taxi booking application with admin panel. Provides booking status tracking, user management, vehicle management, and driver management.",
    repo: "gocheeta",
    githubUrl: "https://github.com/peirisabhi/gocheeta.git",
    tags: ["Spring Boot", "Angular", "MySQL"],
    category: "Spring Boot",
    color: "#6DB33F",
    featured: true,
  },
  {
    id: 3,
    title: "SpringBoot Kafka Integration",
    description:
      "Demonstrates event-driven architecture using Apache Kafka with Spring Boot. Includes producers, consumers, and topic management for scalable async processing.",
    repo: "springboot-kfka",
    githubUrl: "https://github.com/peirisabhi/springboot-kfka",
    tags: ["Java", "Spring Boot", "Kafka", "Microservices"],
    category: "Spring Boot",
    color: "#7C3AED",
    featured: true,
  },
  {
    id: 4,
    title: "DoctGo – Doctor Booking Platform",
    description:
      "Doctor booking application available on both Android and web. Supports appointment scheduling with an integrated payment gateway.",
    repo: "doctgo",
    githubUrl: "https://github.com/peirisabhi",
    tags: ["Android", "Java EE", "MySQL", "Firebase"],
    category: "Android",
    color: "#3DDC84",
    featured: true,
  },
  {
    id: 5,
    title: "ERP System for Tyre Company",
    description:
      "Enterprise Resource Planning system built for a tyre company using Java EE and PrimeFaces. Handles inventory, sales, and reporting.",
    repo: "erp-tyre",
    githubUrl: "https://github.com/peirisabhi",
    tags: ["Java EE", "PrimeFaces", "MySQL", "Glassfish"],
    category: "Java",
    color: "#F89820",
    featured: false,
  },
  {
    id: 6,
    title: "PODIE – Attendance & Payroll System",
    description:
      "Complete payroll management system with biometric or manual attendance, deductions, allowances, overtime, shifts, departments, and leave management.",
    repo: "podie",
    githubUrl: "https://github.com/peirisabhi",
    tags: ["C#", "MySQL"],
    category: "C#",
    color: "#239120",
    featured: false,
  },
  {
    id: 7,
    title: "The Fancy Paradise – E-Commerce Platform",
    description:
      "E-commerce platform for a cosmetic shop with an admin panel. Manages users, brands, categories, products, ads, and orders with a dashboard.",
    repo: "fancy-paradise",
    githubUrl: "https://github.com/peirisabhi",
    tags: ["CodeIgniter", "MySQL", "jQuery"],
    category: "PHP",
    color: "#777BB4",
    featured: false,
  },
  {
    id: 8,
    title: "Ideamart API Middleware",
    description:
      "Middleware layer for Ideamart API integration, enabling seamless communication between applications and telecom services.",
    repo: "ideamart_api_middleware",
    githubUrl: "https://github.com/peirisabhi/ideamart_api_middleware",
    tags: ["Java", "PHP", "API", "Middleware"],
    category: "Java",
    color: "#F89820",
    featured: false,
  },
];

export const TIMELINE = [
  {
    year: "2017",
    title: "O/L Completed",
    description: "Successfully completed G.C.E. Ordinary Level Examination and began exploring programming.",
    icon: "🎒",
    color: "#7C3AED",
  },
  {
    year: "2018",
    title: "A/L & Diploma Started",
    description: "Completed G.C.E. Advanced Level and enrolled in the Diploma in Software Engineering at Java Institute.",
    icon: "📚",
    color: "#06B6D4",
  },
  {
    year: "2019",
    title: "HND Enrolled",
    description: "Started Higher National Diploma in Software Engineering at Java Institute, Colombo (SQA Level 8).",
    icon: "🎓",
    color: "#22C55E",
  },
  {
    year: "2020",
    title: "Intern Software Engineer",
    description: "First professional role at Stephen Innovations, building payroll systems and PHP web applications.",
    icon: "💼",
    color: "#F59E0B",
  },
  {
    year: "2021",
    title: "Joined Exon Software Solutions",
    description: "Progressed from Associate Software Engineer to Software Engineer, building Android apps and ERP systems.",
    icon: "📱",
    color: "#EC4899",
  },
  {
    year: "2022",
    title: "Joined Virtusa · BSc 1st Class",
    description: "Started at Virtusa as Associate Engineer – Technology. Earned BSc Software Engineering 1st Class Honours from Cardiff Metropolitan University.",
    icon: "🏅",
    color: "#7C3AED",
  },
  {
    year: "2023",
    title: "Joined VitalHub Innovations Lab",
    description: "Started as Software Engineer at VitalHub Innovations Lab, working on healthcare interoperability with Mirth Connect, Kafka, and HL7/FHIR.",
    icon: "🚀",
    color: "#06B6D4",
  },
  // {
  //   year: "2024",
  //   title: "MSc Data Science",
  //   description: "Enrolled in MSc Data Science at Cardiff Metropolitan University, deepening expertise in AI, machine learning, and data engineering.",
  //   icon: "🎓",
  //   color: "#8B5CF6",
  // },
  {
    year: "2026",
    title: "MSc Completed · Merit",
    description: "Successfully completed MSc in Data Science with Merit. Continuing to advance in healthcare tech, AI-assisted development, and IoT.",
    icon: "🤖",
    color: "#22C55E",
  },
];

export const PROJECT_FILTERS = ["All", "Spring Boot", "Java", "Android", "PHP", "C#", "JavaScript"];

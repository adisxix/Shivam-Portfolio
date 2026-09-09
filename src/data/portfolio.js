// =============================================
// PORTFOLIO DATA — Source of Truth (Resume)
// =============================================
// Update URLs, profile image, and placeholder values here.

export const personalInfo = {
  name: "Shivam Chaturvedi",
  initials: "SC",
  title: "Software Engineer",
  phone: "+91 7905093221",
  email: "vk451418@gmail.com",
  location: "Noida, India",
  profileImage: "/profile/profile.png",
  resumePath: "/resume/Shivam_Chaturvedi_Resume.pdf", // Place resume in public/resume/
  social: {
    github: "https://github.com/ShivamChaturvedi54",
    linkedin: "https://www.linkedin.com/in/shivamchaturvedi14/",
    leetcode: "https://leetcode.com/u/Shivam21434/",
    x: "https://x.com/ShivamChat47902",
    instagram: "https://www.instagram.com/shivam_42643",
    snapchat: "https://www.snapchat.com/@s_chaturved2154",
    portfolio: "#",
  },
  about:
    "Software Engineer with strong foundations in software development and a growing interest in Artificial Intelligence and Generative AI. Skilled in building scalable applications using Java, Python, JavaScript, React, Next.js, and modern development tools. Passionate about developing AI-driven solutions and solving real-world problems through efficient software engineering practices.",
  stats: [
    { label: "DSA Problems Solved", value: "50+" },
    { label: "Core Projects Built", value: "3+" },
    { label: "Tech Stack & Tools", value: "20+" },
  ],
};

export const skills = {
  Frontend: [
    { name: "React.js", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Redux", icon: "redux" },
    { name: "Tailwind CSS", icon: "tailwind" },
    { name: "Bootstrap", icon: "bootstrap" },
    { name: "HTML5", icon: "html5" },
    { name: "CSS3", icon: "css3" },
    { name: "Responsive", icon: "responsive" },
  ],
  Backend: [
    { name: "Node.js", icon: "nodejs" },
    { name: "Express.js", icon: "express" },
    { name: "REST APIs", icon: "api" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "SQL", icon: "sql" },
    { name: "DBMS", icon: "dbms" },
    { name: "DSA", icon: "dsa" },
    { name: "OOP", icon: "oop" },
  ],
  Languages: [
    { name: "Java", icon: "java" },
    { name: "Python", icon: "python" },
    { name: "JavaScript", icon: "javascript" },
    { name: "TypeScript", icon: "typescript" },
    { name: "C++", icon: "cpp" },
    { name: "SQL", icon: "sql" },
    { name: "HTML5", icon: "html5" },
    { name: "CSS3", icon: "css3" },
  ],
  Tools: [
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "VS Code", icon: "vscode" },
    { name: "Postman", icon: "postman" },
    { name: "Figma", icon: "figma" },
    { name: "Vercel", icon: "vercel" },
    { name: "Netlify", icon: "netlify" },
    { name: "Gen AI", icon: "ai" },
  ],
};

export const bankDetails = {
  accountNumber: "033325224469693",
  ifscCode: "NESF0000333",
  accountHolderName: "Shivam Chaturvedi",
  bankName: "Slice Small Finance Bank",
  accountType: "Savings Account",
  qrImage: "/qrcode.jpeg",
};

export const projects = [
  {
    name: "Nova UI",
    subtitle: "Scalable CSS Design System",
    description:
      "Developed a modular UI design system with 20+ reusable components, improving development efficiency by nearly 40%. Implemented design tokens and scalable component architecture for better maintainability. Built interactive documentation with live previews, improving developer productivity by approximately 30%. Optimized component rendering and styling consistency, improving UI performance by 25%.",
    tech: ["CSS", "HTML", "JavaScript", "Design Tokens"],
    liveUrl: "#", // UPDATE: Add Nova UI live URL
    githubUrl: "#", // UPDATE: Add Nova UI GitHub URL
    hasLive: true,
    hasGithub: true,
  },
  {
    name: "GreenGrocery",
    subtitle: "Full Stack E-Commerce Platform",
    description:
      "Built a responsive e-commerce platform with product catalog, cart management, and checkout functionality. Implemented Redux state management for real-time updates and seamless user interactions. Integrated REST APIs for dynamic product handling and asynchronous data fetching. Enhanced application responsiveness and optimized workflows, reducing interaction time by approximately 35%.",
    tech: ["React.js", "Redux", "REST APIs", "CSS"],
    liveUrl: "#", // UPDATE: Add GreenGrocery live URL
    githubUrl: "#", // UPDATE: Add GreenGrocery GitHub URL
    hasLive: true,
    hasGithub: true,
  },
  {
    name: "AI Resume Analyzer",
    subtitle: "Python + AI",
    description:
      "Developed an AI-powered resume analysis system using Python and NLP techniques. Implemented keyword extraction and semantic skill matching against job descriptions. Improved resume-job relevance prediction accuracy by approximately 30%. Reduced manual resume screening effort by nearly 50% through workflow automation.",
    tech: ["Python", "NLP", "AI", "Automation"],
    liveUrl: null,
    githubUrl: null,
    hasLive: false,
    hasGithub: false,
  },
];

export const education = [
  {
    institution: "Accurate Institute of Management and Technology",
    degree: "B.Tech in Computer Science and Engineering",
    location: "Greater Noida, India",
    duration: "2022 – 2026",
    cgpa: "7.1 / 10",
    coursework: [
      "Data Structures & Algorithms",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];

// =============================================
// CERTIFICATIONS & ACHIEVEMENTS
// =============================================
// User will add their actual certifications here at the end:
export const certifications = [
  {
    title: "Certification Title",
    issuer: "Issuing Organization / Platform",
    date: "2024",
    credentialUrl: "#",
    description: "Certification details, credentials, or skills verified. [DATA]",
  },
  {
    title: "Certification Title",
    issuer: "Issuing Organization / Platform",
    date: "2024",
    credentialUrl: "#",
    description: "Certification details, credentials, or skills verified. [DATA]",
  },
  {
    title: "Certification Title",
    issuer: "Issuing Organization / Platform",
    date: "2023",
    credentialUrl: "#",
    description: "Certification details, credentials, or skills verified. [DATA]",
  },
];

export const achievements = [
  {
    title: "50+ Problems Solved",
    description:
      "Solved 50+ coding and algorithmic problems on LeetCode and HackerRank.",
  },
  {
    title: "5+ Deployed Projects",
    description: "Built and deployed 5+ web and AI-based projects.",
  },
  {
    title: "40% Efficiency Boost",
    description:
      "Developed scalable UI systems, improving development efficiency by approximately 40%.",
  },
  {
    title: "Collaborative Development",
    description:
      "Hands-on experience with Git-based collaborative development practices.",
  },
  {
    title: "Exploring Generative AI",
    description:
      "Actively exploring Generative AI and Large Language Model applications.",
  },
  {
    title: "Strong Fundamentals",
    description:
      "Strong understanding of software engineering concepts including DSA, DBMS, and REST APIs.",
  },
];

export const marqueeItems = [
  "React.js",
  "JavaScript",
  "Java",
  "Python",
  "Next.js",
  "Tailwind CSS",
  "Redux",
  "Node.js",
  "HTML5",
  "CSS3",
  "SQL",
  "Git",
  "GitHub",
  "REST APIs",
  "Generative AI",
  "NLP",
  "Figma",
  "Vercel",
  "Bootstrap",
  "VS Code",
];

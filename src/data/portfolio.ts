export interface Internship {
    id: string;
    title: string;
    company: string;
    dates: string;
    achievements: string[];
    technologies: string[];
}

export interface Project {
    id: string;
    name: string;
    description: string;
    stack: string[];
    github?: string;
    demo?: string;
    badge?: string;
    image?: string;
}

export interface Skill {
    name: string;
    category: "Languages" | "Frameworks" | "Tools" | "Concepts";
    proficiency: number; // 0-100
}

export const internships: Internship[] = [
    {
        id: "squarepoint",
        title: "Software Engineering Intern",
        company: "Squarepoint Capital",
        dates: "Jun 2024 - Aug 2024",
        achievements: [
            "Developed high-performance trading algorithms using C++ and Python",
            "Optimized data processing pipelines reducing latency by 40%",
            "Collaborated with quantitative researchers on market analysis tools",
            "Implemented automated testing frameworks for critical trading systems",
        ],
        technologies: ["C++", "Python", "Linux", "Git", "Docker"],
    },
    {
        id: "avanade",
        title: "Software Developer Intern",
        company: "Avanade",
        dates: "Jun 2023 - Aug 2023",
        achievements: [
            "Built enterprise web applications using Microsoft technologies",
            "Developed RESTful APIs and database solutions",
            "Participated in agile development processes and code reviews",
            "Delivered client presentations and technical documentation",
        ],
        technologies: ["C#", ".NET", "Azure", "SQL Server", "React"],
    },
    {
        id: "koda",
        title: "Software Engineering Intern",
        company: "Koda Technologies",
        dates: "Jan 2023 - Mar 2023",
        achievements: [
            "Contributed to blockchain-based financial technology solutions",
            "Implemented smart contracts and decentralized applications",
            "Conducted security audits and performance optimization",
            "Researched emerging blockchain protocols and DeFi applications",
        ],
        technologies: [
            "Solidity",
            "JavaScript",
            "Web3.js",
            "Ethereum",
            "Node.js",
        ],
    },
];

export const projects: Project[] = [
    {
        id: "trading-platform",
        name: "Algorithmic Trading Platform",
        description:
            "A high-frequency trading system with real-time market data analysis and automated execution strategies.",
        stack: ["C++", "Python", "Redis", "PostgreSQL", "Docker"],
        github: "https://github.com/servetefetekin/trading-platform",
        badge: "Full-stack",
    },
    {
        id: "blockchain-wallet",
        name: "Multi-Chain Wallet",
        description:
            "A secure cryptocurrency wallet supporting multiple blockchain networks with advanced security features.",
        stack: ["React", "TypeScript", "Web3.js", "Solidity", "Node.js"],
        github: "https://github.com/servetefetekin/blockchain-wallet",
        demo: "https://wallet-demo.vercel.app",
        badge: "Blockchain",
    },
    {
        id: "ai-chatbot",
        name: "AI-Powered Chatbot",
        description:
            "An intelligent chatbot using natural language processing for customer service automation.",
        stack: ["Python", "TensorFlow", "FastAPI", "React", "MongoDB"],
        github: "https://github.com/servetefetekin/ai-chatbot",
        demo: "https://ai-chatbot.vercel.app",
        badge: "AI/ML",
    },
    {
        id: "game-engine",
        name: "2D Game Engine",
        description:
            "A lightweight game engine built from scratch with physics simulation and asset management.",
        stack: ["C++", "OpenGL", "SDL2", "Box2D", "CMake"],
        github: "https://github.com/servetefetekin/game-engine",
        badge: "Systems",
    },
    {
        id: "portfolio-website",
        name: "Portfolio Website",
        description:
            "A modern, responsive portfolio website with dark theme and interactive animations.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        github: "https://github.com/servetefetekin/portfolio",
        demo: "https://servetefetekin.vercel.app",
        badge: "Web",
    },
    {
        id: "data-visualization",
        name: "Data Visualization Dashboard",
        description:
            "Interactive dashboard for visualizing complex datasets with real-time updates and filtering.",
        stack: ["React", "D3.js", "TypeScript", "Node.js", "PostgreSQL"],
        github: "https://github.com/servetefetekin/data-viz",
        demo: "https://data-viz.vercel.app",
        badge: "Data",
    },
];

export const skills: Skill[] = [
    // Languages
    { name: "C++", category: "Languages", proficiency: 95 },
    { name: "Python", category: "Languages", proficiency: 90 },
    { name: "JavaScript", category: "Languages", proficiency: 85 },
    { name: "TypeScript", category: "Languages", proficiency: 80 },
    { name: "Java", category: "Languages", proficiency: 75 },
    { name: "Solidity", category: "Languages", proficiency: 70 },

    // Frameworks
    { name: "React", category: "Frameworks", proficiency: 85 },
    { name: "Next.js", category: "Frameworks", proficiency: 80 },
    { name: ".NET", category: "Frameworks", proficiency: 75 },
    { name: "Node.js", category: "Frameworks", proficiency: 80 },
    { name: "Express.js", category: "Frameworks", proficiency: 75 },
    { name: "FastAPI", category: "Frameworks", proficiency: 70 },

    // Tools
    { name: "Git", category: "Tools", proficiency: 90 },
    { name: "Docker", category: "Tools", proficiency: 80 },
    { name: "Linux", category: "Tools", proficiency: 85 },
    { name: "AWS", category: "Tools", proficiency: 70 },
    { name: "Azure", category: "Tools", proficiency: 75 },
    { name: "PostgreSQL", category: "Tools", proficiency: 80 },
    { name: "MongoDB", category: "Tools", proficiency: 75 },
    { name: "Redis", category: "Tools", proficiency: 70 },

    // Concepts
    { name: "Algorithm Design", category: "Concepts", proficiency: 90 },
    { name: "Data Structures", category: "Concepts", proficiency: 90 },
    { name: "System Design", category: "Concepts", proficiency: 80 },
    { name: "Blockchain", category: "Concepts", proficiency: 75 },
    { name: "Machine Learning", category: "Concepts", proficiency: 70 },
    { name: "DevOps", category: "Concepts", proficiency: 75 },
    { name: "Agile/Scrum", category: "Concepts", proficiency: 80 },
];

export const personalInfo = {
    name: "Servet Efe Tekin",
    tagline: "CS Student • Developer • Tech Enthusiast",
    subtitle: "Building accessible tech. Exploring the future.",
    about: `I'm a Computer Science student at University College London (UCL) with a minor in Mathematics. 
  My passion lies in developing high-performance systems, exploring blockchain technology, and creating 
  innovative software solutions. I'm an active member of the UCL Game Development Society and enjoy 
  contributing to open-source projects.`,
    funFact:
        "I once debugged a critical trading algorithm at 3 AM during a hackathon - the adrenaline rush was incredible!",
    education:
        "BSc Computer Science with Mathematics, University College London (UCL)",
    location: "London, UK",
    email: "servet.efetekin@ucl.ac.uk",
    github: "https://github.com/servetefetekin",
    linkedin: "https://linkedin.com/in/servetefetekin",
    cv: "/cv-servet-efetekin.pdf",
};

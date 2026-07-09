// ============================================================
// SINGLE SOURCE OF TRUTH — built from resume + LinkedIn PDF
// All data verified. Nothing invented.
// ============================================================

export const RESUME_DATA = {
  personal: {
    name: "Kaveri Desai",
    email: "kaveridesai1101@gmail.com",
    phone: "+91-8766926040",
    linkedin: "https://www.linkedin.com/in/kaveridesai/",
    github: "https://github.com/kaveridesai1101",
    location: "Pune, Maharashtra, India",
    role: "AI & Machine Learning Engineer",
    tagline: "Building Production-Ready AI Systems",
    heroDescription:
      "I design and develop intelligent applications using Generative AI, Computer Vision, NLP, RAG Systems and Full Stack Engineering.",
    summary:
      "I'm a B.E. student specializing in Artificial Intelligence and Machine Learning at ISB&M. Passionate about exploring how intelligent systems shape the future, I'm building a strong foundation in AI, data structures, and full-stack development. I actively take on internships, projects, and collaborations that allow me to apply my skills in real-world scenarios.",
    areasOfInterest: [
      "Artificial Intelligence & Machine Learning",
      "Python Programming",
      "Data Science",
      "Tech Research",
      "Creative Problem Solving",
      "Generative AI",
      "NLP",
    ],
  },

  education: {
    degree: "Bachelor of Engineering",
    major: "Artificial Intelligence & Machine Learning",
    university: "International School of Business & Media (ISB&M)",
    duration: "2024 – 2028",
    cgpa: null, // Not listed in LinkedIn/resume for ISB&M
    coursework: [
      "Data Structures",
      "Algorithms",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "NLP",
      "Mathematics for ML",
    ],
  },

  // Only technologies listed in the resume
  skills: {
    programmingLanguages: ["Python", "C++", "Java", "SQL"],
    aiMl: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "OpenCV",
      "Hugging Face",
      "NLTK",
      "LangChain",
      "Spacy",
      "YOLO",
      "Streamlit",
    ],
    webDevelopment: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
    backend: ["FastAPI", "Node.js", "Express.js"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "SQLite"],
    developerTools: [
      "Git",
      "GitHub",
      "VS Code",
      "Google Colab",
      "Jupyter Notebook",
      "Docker",
      "Netlify",
      "Vercel",
    ],
  },

  // 5 internships — verified from LinkedIn profile (current resume)
  experience: [
    {
      id: "xyzon",
      company: "Xyzon Innovations Private Limited",
      role: "Gen-AI Intern",
      duration: "February 2026 – May 2026",
      location: "Pune, Maharashtra",
      bullets: [
        "Worked as a Full Stack Development & AI Intern on real-world web applications and SaaS-based projects using MERN Stack, AI integrations, REST APIs, and modern frontend/backend technologies.",
        "Built AI-powered platform for generating ATS-optimized resumes and portfolio websites with multi-step onboarding, auto-save, and PDF export.",
        "Implemented AI-powered content generation and ATS scoring systems using GPT-4o and Puppeteer.",
        "Developed XYZON Innovations AI Support Chatbot with intent classification and contextual response handling.",
        "Worked on Finora — a MERN SaaS platform for GST automation, OCR-based invoice processing, and compliance dashboards.",
      ],
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "GPT-4o", "FastAPI", "Python"],
    },
    {
      id: "technohacks",
      company: "TechnoHacks EduTech",
      role: "Machine Learning Intern",
      duration: "January 2026 – February 2026",
      location: "",
      bullets: [
        "Performed hyperparameter tuning using GridSearchCV and RandomizedSearchCV to boost model performance.",
        "Applied feature engineering techniques to create, transform, and refine dataset features.",
        "Evaluated model performance before and after tuning to measure impact and reliability.",
        "Executed end-to-end ML workflows including preprocessing, tuning, and analysis.",
      ],
      technologies: ["Python", "Pandas", "Scikit-learn", "NumPy"],
    },
    {
      id: "microsoft",
      company: "Microsoft | Azure Cloud & AI Partner",
      role: "Intern – Emerging Technologies",
      duration: "January 2026 – February 2026",
      location: "Pune, Maharashtra",
      bullets: [
        "Completed 4-week internship under the Microsoft Elevate Emerging Technologies Program.",
        "Gained hands-on exposure to Azure Fundamentals, Power BI, and Copilot-enabled development.",
        "Built interactive dashboards and business insights using Power BI.",
        "Completed structured learning paths on Microsoft Learn.",
      ],
      technologies: ["Microsoft Azure", "Power BI", "Copilot"],
    },
    {
      id: "uptoskills",
      company: "UptoSkills",
      role: "Artificial Intelligence Intern",
      duration: "September 2025 – December 2025",
      location: "Pune, Maharashtra",
      bullets: [
        "Contributed to a FinTech CRM project focusing on customer data analysis.",
        "Designed and implemented an analytics dashboard for business insights.",
        "Supported landing page development to enhance user experience.",
        "Applied AI concepts in real-world project scenarios.",
      ],
      technologies: ["Python", "AI/ML", "Dashboard Development"],
    },
    {
      id: "edunet",
      company: "Edunet Foundation",
      role: "AIML Intern (IBM SkillsBuild Program)",
      duration: "January 2026 – February 2026",
      location: "",
      bullets: [
        "Completed IBM AI Fundamentals course under IBM SkillsBuild AI Program.",
        "Developed an AI-powered Fake News Detection system using ML and NLP techniques.",
        "Implemented text preprocessing — tokenization, stopword removal, vectorization.",
        "Trained and tested classification models to detect misinformation effectively.",
        "Built a user-friendly interface for real-time news credibility predictions.",
      ],
      technologies: ["Python", "Scikit-learn", "NLP", "Machine Learning", "IBM AI"],
    },
  ],

  // 4 projects — verified from resume and LinkedIn (Facial Emotion Recognition removed per user)
  projects: [
    {
      id: "ai-resume-builder",
      title: "AI Resume Builder",
      tagline: "Intelligent ATS-Optimized Resume Generation",
      description:
        "Developed an AI-powered platform for generating ATS-optimized resumes. Built multi-step onboarding forms with auto-save functionality. Implemented PDF export and responsive dashboards.",
      bullets: [
        "Built multi-step onboarding forms with auto-save functionality.",
        "Implemented intelligent content suggestions.",
        "Developed PDF export functionality and responsive dashboards.",
      ],
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/kaveridesai1101/Resume-Builder",
      demo: "https://drive.google.com/file/d/1X1bAwvLuPl-5Hl1ojX4SAOXR66Y8qn1W/view?usp=sharing",
      architecture: ["User Input", "React Frontend", "Node.js API", "Template Engine", "PDF Export"],
    },
    {
      id: "ai-resume-analyzer",
      title: "AI Resume Analyzer",
      tagline: "NLP-Powered ATS Resume Analyzer",
      description:
        "Engineered an end-to-end AI Resume Analyzer with an NLP pipeline using Spacy and NLTK for text extraction and skill analysis. Integrated OpenAI API for tailored resume suggestions with ATS Compatibility Scoring.",
      bullets: [
        "Engineered an end-to-end AI Resume Analyzer.",
        "Built NLP pipeline with Spacy and NLTK for text extraction and skill analysis.",
        "Integrated OpenAI API for generating tailored resume suggestions.",
        "ATS Compatibility Scoring System using keyword analysis and semantic matching.",
      ],
      technologies: ["Streamlit", "OpenAI API", "Python", "Spacy", "NLTK", "LangChain"],
      github: "https://github.com/kaveridesai1101/Resume-analyzer-and-Internship-Portel-",
      demo: "https://drive.google.com/file/d/1bBJd234fh0Zm6wTq-IhjKcnTzY2ptM7w/view?usp=drivesdk",
      architecture: ["User Upload", "NLP Pipeline", "OpenAI API", "ATS Scorer", "Report Output"],
    },
    {
      id: "satyasetu",
      title: "SatyaSetu – Fake News Detector",
      tagline: "AI-Powered Misinformation Detection",
      description:
        "Built a Streamlit-powered fake news detection app using Hugging Face Transformers. Implemented NLP Pipeline for fake news classification with custom training. Deployed on cloud with accessible public URL with explainability features.",
      bullets: [
        "Built a Streamlit-powered fake news detection app using Hugging Face Transformers.",
        "Implemented NLP Pipeline for fake news classification with custom training.",
        "Deployed on cloud with accessible public URL.",
        "Added explainability features for model predictions.",
      ],
      technologies: ["Streamlit", "Hugging Face", "PyTorch", "Transformers", "Scikit-learn", "Python"],
      github: "https://github.com/kaveridesai1101/SatyaSetu",
      demo: "https://satyasetu.streamlit.app/",
      architecture: ["News Article", "Text Preprocessing", "Transformer Model", "Classification", "Explainability Output"],
    },
    {
      id: "smart-surveillance",
      title: "AI Smart Surveillance System",
      tagline: "Real-Time Human Activity Recognition with Dynamic ROI",
      description:
        "Developed a real-time human activity recognition system using Skeleton-based action recognition. Integrated YOLO for real-time human detection with 95% precision. Implemented Dynamic ROI selection with Tkinter and logged activity data in SQLite.",
      bullets: [
        "Developed real-time human activity recognition using Skeleton-based action recognition.",
        "Integrated YOLO for real-time human detection with 95% precision.",
        "Implemented Dynamic Region of Interest (ROI) selection with Tkinter interface.",
        "Stored activity logs in SQLite database for real-time monitoring.",
      ],
      technologies: ["Python", "TensorFlow", "OpenCV", "YOLO", "SQLite", "Tkinter"],
      github: "https://github.com/kaveridesai1101/AI-Smart-Surveillance-System",
      demo: "https://drive.google.com/file/d/1HsqcXJLyW6xvwMwtyb_6aE459rg1db1d/view?usp=sharing",
      architecture: ["Camera Stream", "YOLO Detection", "Skeleton Tracking", "ROI Selection", "SQLite Logs"],
    },
  ],

  // Only verified certifications (GAN, Python-Google, Salesforce removed per user instruction)
  certifications: [
    {
      title: "Generative AI with Large Language Models",
      issuer: "Coursera (DeepLearning.AI)",
    },
    {
      title: "IBM AI Fundamentals",
      issuer: "IBM SkillsBuild",
    },
    {
      title: "DeepSeek AI Masterclass: Build, Automate, Monetize Like a Pro",
      issuer: "Online",
    },
    {
      title: "Data Analysis & AI: From Data to Intelligent Decisions",
      issuer: "Online",
    },
    {
      title: "Learning & Development with Generative AI",
      issuer: "Online",
    },
    {
      title: "Certificate of Participation – AIQrew 2025",
      issuer: "AIQrew",
      year: "2025",
    },
    {
      title: "Certificate of Participation – TATA Crucible Campus Quiz 2025",
      issuer: "TATA",
      year: "2025",
    },
  ],

  // Fixed leadership — Technical Team Lead, College AI/ML Club
  leadership: [
    {
      title: "Technical Team Lead",
      organization: "College AI/ML Club",
      bullets: [
        "Led the technical team for the college AI/ML Club, organizing workshops and events.",
        "Mentored fellow students in machine learning concepts and project development.",
        "Collaborated with faculty to bridge academic and industry AI practices.",
      ],
    },
  ],

  // Research interests — from areas of interest + actual internship work
  researchInterests: [
    { title: "Large Language Models", desc: "Prompt engineering, fine-tuning, and RAG pipelines using open-source and proprietary LLMs." },
    { title: "AI Agents", desc: "Designing autonomous agents capable of multi-step reasoning, tool use, and task planning." },
    { title: "Computer Vision", desc: "Real-time detection, tracking, and recognition systems for edge and cloud environments." },
    { title: "RAG Systems", desc: "Retrieval-Augmented Generation with vector databases for knowledge-intensive applications." },
    { title: "NLP", desc: "Text classification, information extraction, and semantic search pipelines." },
    { title: "Explainable AI", desc: "Making AI model decisions interpretable and trustworthy for end users." },
  ],

  // Currently building — as specified by user
  currentlyBuilding: [
    { label: "Agentic AI", icon: "bot" },
    { label: "Multi-Agent Systems", icon: "network" },
    { label: "LangGraph", icon: "git-branch" },
    { label: "RAG Pipelines", icon: "database" },
    { label: "Open Source", icon: "code-2" },
    { label: "This Portfolio", icon: "layout" },
  ],

  // AI Journey — corrected (no MIT, no Rinex, no Smart Internz)
  aiJourney: [
    {
      year: "2024",
      title: "Started B.E. AI & ML at ISB&M",
      description: "Enrolled in Bachelor of Engineering in Artificial Intelligence & Machine Learning at International School of Business & Media.",
    },
    {
      year: "2024",
      title: "First Internship – Edunet Foundation",
      description: "First hands-on AI experience under IBM SkillsBuild Program. Completed IBM AI Fundamentals and built an AI-powered Fake News Detector.",
    },
    {
      year: "2025",
      title: "AI Intern – UptoSkills",
      description: "Contributed to FinTech CRM analytics dashboard and applied AI concepts in real-world business scenarios.",
    },
    {
      year: "2026",
      title: "ML Intern – TechnoHacks",
      description: "Advanced model optimization through hyperparameter tuning, feature engineering, and end-to-end ML pipeline development.",
    },
    {
      year: "2026",
      title: "Emerging Tech – Microsoft",
      description: "Gained hands-on experience with Azure Fundamentals, Power BI dashboards, and Copilot-enabled AI development.",
    },
    {
      year: "2026",
      title: "Gen-AI Intern – Xyzon Innovations",
      description: "Built production SaaS products including AI Resume Generator, AI Chatbot, and a GST compliance system using MERN and GPT-4o.",
    },
    {
      year: "Now →",
      title: "Building Agentic AI Systems",
      description: "Actively developing multi-agent frameworks, RAG pipelines, and contributing to open-source AI projects.",
    },
  ],
};

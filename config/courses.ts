export interface CourseModule {
  title: string
  topics: string[]
}

export interface CourseItem {
  id: string
  slug: string
  title: string
  subtitle: string
  category: "IT & Development" | "AI & Automation"
  badge: string
  popular?: boolean
  featured?: boolean
  duration: string
  eligibility: string
  level: "Beginner to Advanced" | "Intermediate to Advanced" | "All Levels"
  shortDescription: string
  fullDescription: string
  skillsCovered: string[]
  whatYouWillBuild: {
    title: string
    description: string
  }[]
  curriculum: CourseModule[]
  careerOpportunities: {
    roles: string[]
    avgSalary: string
    hiringIndustries: string[]
  }
  faqs: {
    question: string
    answer: string
  }[]
  toolsAndTech: string[]
}

export const COURSES: CourseItem[] = [
  // IT & Development Courses
  {
    id: "java-developer",
    slug: "java-developer",
    title: "Java Developer",
    subtitle: "Enterprise Backend & Full Stack Engineering",
    category: "IT & Development",
    badge: "High Demand",
    popular: true,
    featured: true,
    duration: "4 - 6 Months",
    eligibility: "12th Pass, BSc, BCA, BCom, Engineering or Any Graduate",
    level: "Beginner to Advanced",
    shortDescription:
      "Master Core Java, OOPs, Spring Boot, Microservices, Hibernate and REST APIs with live enterprise-grade projects.",
    fullDescription:
      "Our Java Developer program at SmartEdge Academy Bhiwandi is crafted to transform beginners into job-ready enterprise software engineers. You will learn modern Java (Java 17/21), Object-Oriented Design patterns, Spring Boot, JPA/Hibernate, SQL database design, and Microservices architecture with hands-on labs and real client scenarios.",
    skillsCovered: [
      "Core Java 17/21 & OOP",
      "Spring Boot 3",
      "Microservices Architecture",
      "Hibernate & Spring Data JPA",
      "RESTful API Design",
      "MySQL & PostgreSQL",
      "Docker & Maven",
      "Unit Testing (JUnit & Mockito)",
    ],
    whatYouWillBuild: [
      {
        title: "E-Commerce Microservices Engine",
        description:
          "Multi-service order, catalog, and payment processing backend with Spring Cloud and Kafka.",
      },
      {
        title: "Banking & Transaction API",
        description:
          "Secure JWT-authenticated banking ledger system with ACID transactional integrity.",
      },
    ],
    curriculum: [
      {
        title: "Module 1: Java Foundations & OOP Mastery",
        topics: [
          "Java Syntax, Data Types & Memory Management",
          "OOP: Encapsulation, Inheritance, Polymorphism & Abstraction",
          "Java Collections Framework (List, Set, Map)",
          "Exception Handling & Multithreading basics",
        ],
      },
      {
        title: "Module 2: Database & JDBC Integration",
        topics: [
          "Relational Database Design with MySQL",
          "Advanced SQL Queries, Joins & Indexing",
          "JDBC Drivers & Connection Pooling (HikariCP)",
          "DAO Design Pattern",
        ],
      },
      {
        title: "Module 3: Spring Boot & Hibernate JPA",
        topics: [
          "Spring IoC, Dependency Injection & Spring Beans",
          "Building REST APIs with Spring Web MVC",
          "Hibernate ORM, Entity Mapping & JPQL",
          "Spring Data JPA Repositories & Pagination",
        ],
      },
      {
        title: "Module 4: Enterprise Security & Microservices",
        topics: [
          "Spring Security 6 & JWT Token Authentication",
          "Microservices with Spring Cloud & Eureka",
          "API Gateway & Resilience4j Circuit Breaker",
          "Dockerizing Spring Boot Services & Deployment",
        ],
      },
    ],
    careerOpportunities: {
      roles: [
        "Java Developer",
        "Backend Software Engineer",
        "Spring Boot Developer",
        "Associate Java Consultant",
      ],
      avgSalary: "₹3.8 LPA – ₹7.5 LPA (Entry to Mid)",
      hiringIndustries: ["FinTech", "IT Services", "E-Commerce", "Healthcare Tech"],
    },
    faqs: [
      {
        question: "Is Java suitable for beginners with no coding background?",
        answer:
          "Yes! At SmartEdge Academy, our Java Developer training starts from foundational programming concepts, variables, and logic before advancing to object-oriented programming and frameworks.",
      },
      {
        question: "Will I learn Spring Boot and Microservices?",
        answer:
          "Absolutely. Spring Boot 3 and Microservices form the core backend component of our curriculum to meet current industry hiring requirements.",
      },
    ],
    toolsAndTech: ["Java 21", "Spring Boot", "Hibernate", "MySQL", "Docker", "Git", "Postman", "IntelliJ IDEA"],
  },
  {
    id: "python-developer",
    slug: "python-developer",
    title: "Python Developer",
    subtitle: "Backend Systems, APIs & Automation",
    category: "IT & Development",
    badge: "Most Popular",
    popular: true,
    featured: true,
    duration: "4 - 5 Months",
    eligibility: "12th Pass, BSc, BCA, BCom, Engineering, Working Professionals",
    level: "Beginner to Advanced",
    shortDescription:
      "Learn modern Python, Django/FastAPI, REST architectures, database design, and automated testing.",
    fullDescription:
      "SmartEdge Academy's Python Developer course is designed for rapid learning and practical production code. From foundational scripting to scalable web servers with Django and FastAPI, you will master the language that powers modern tech, AI APIs, and backend automation.",
    skillsCovered: [
      "Python 3.12 Core & Advanced",
      "Django Web Framework",
      "FastAPI & Asynchronous Programming",
      "PostgreSQL & SQLite",
      "RESTful API Development",
      "Web Scraping (BeautifulSoup / Playwright)",
      "Automated Testing with PyTest",
      "Git & GitHub Workflows",
    ],
    whatYouWillBuild: [
      {
        title: "SaaS Workflow & Booking Platform",
        description: "Full-featured multi-tenant booking system built with Django and PostgreSQL.",
      },
      {
        title: "High-Performance AI-Ready FastAPI Service",
        description: "Asynchronous micro-service with automated Swagger documentation and Redis caching.",
      },
    ],
    curriculum: [
      {
        title: "Module 1: Python Fundamentals & Data Structures",
        topics: [
          "Python Syntax, Control Flow & Functions",
          "Lists, Tuples, Dictionaries & Sets",
          "File I/O, Error Handling & Virtual Environments",
          "Object-Oriented Programming (Classes & Methods)",
        ],
      },
      {
        title: "Module 2: Advanced Python & Automation",
        topics: [
          "Decorators, Generators & Context Managers",
          "Working with JSON, CSV & External APIs",
          "Web Scraping with BeautifulSoup & Playwright",
          "Task Automation Scripts for Daily Operations",
        ],
      },
      {
        title: "Module 3: Django & Database Management",
        topics: [
          "Django Architecture (MVT Pattern)",
          "Django ORM, Migrations & Database Relations",
          "User Authentication & Session Management",
          "Django Admin Customization & Security Best Practices",
        ],
      },
      {
        title: "Module 4: Modern APIs with FastAPI",
        topics: [
          "Building Fast APIs with Type Hints & Pydantic",
          "Async / Await Concurrency in Python",
          "JWT Security & Role-Based Access Control",
          "Deployment to Cloud Platforms & Dockerizing",
        ],
      },
    ],
    careerOpportunities: {
      roles: ["Python Developer", "Backend Engineer", "API Specialist", "Automation Engineer"],
      avgSalary: "₹3.5 LPA – ₹7.2 LPA",
      hiringIndustries: ["Software Companies", "Analytics Firms", "Startups", "Digital Agencies"],
    },
    faqs: [
      {
        question: "Why is Python recommended for career switchers?",
        answer:
          "Python has human-readable English-like syntax and vast applications in web backends, automation, and AI, making it the easiest programming language to grasp while delivering powerful job opportunities.",
      },
    ],
    toolsAndTech: ["Python 3.12", "Django", "FastAPI", "PostgreSQL", "PyTest", "Docker", "VS Code"],
  },
  {
    id: "data-science",
    slug: "data-science",
    title: "Data Science",
    subtitle: "Machine Learning, Predictive Analytics & AI Models",
    category: "IT & Development",
    badge: "Trending Career",
    popular: true,
    featured: true,
    duration: "5 - 6 Months",
    eligibility: "BSc, BCA, BCom, Engineering, MCA or Graduates with Aptitude",
    level: "Beginner to Advanced",
    shortDescription:
      "Transform raw data into predictive intelligence with Python, Pandas, Scikit-Learn, and Machine Learning algorithms.",
    fullDescription:
      "SmartEdge Academy's Data Science course prepares you for high-impact analytical roles. You will master statistical foundations, exploratory data analysis, machine learning pipelines, feature engineering, and model deployment using industry-standard tools.",
    skillsCovered: [
      "Python for Data Science (NumPy, Pandas)",
      "Exploratory Data Analysis (EDA)",
      "Applied Statistics & Probability",
      "Machine Learning with Scikit-Learn",
      "Regression & Classification Algorithms",
      "Clustering & Dimension Reduction (PCA)",
      "Data Visualization (Matplotlib, Seaborn)",
      "Model Deployment with Streamlit",
    ],
    whatYouWillBuild: [
      {
        title: "Customer Churn Prediction Model",
        description: "End-to-end classification pipeline predicting subscriber retention for telecom firms.",
      },
      {
        title: "Real Estate Valuation Predictor",
        description: "Multivariate regression model with interactive Streamlit web dashboard.",
      },
    ],
    curriculum: [
      {
        title: "Module 1: Data Manipulation with NumPy & Pandas",
        topics: ["Vectorized Operations", "Data Cleaning & Wrangling", "Handling Missing Values", "Time-Series Data"],
      },
      {
        title: "Module 2: Statistics & Exploratory Analysis",
        topics: ["Descriptive & Inferential Statistics", "Hypothesis Testing & p-values", "Seaborn Visualizations"],
      },
      {
        title: "Module 3: Supervised & Unsupervised ML",
        topics: ["Linear/Logistic Regression", "Decision Trees & Random Forests", "K-Means & Hierarchical Clustering"],
      },
      {
        title: "Module 4: Model Evaluation & Live Deployment",
        topics: ["Cross-Validation & ROC-AUC", "Hyperparameter Tuning with GridSearch", "Deploying with Streamlit"],
      },
    ],
    careerOpportunities: {
      roles: ["Data Scientist", "Associate ML Engineer", "Quantitative Analyst", "Research Associate"],
      avgSalary: "₹4.5 LPA – ₹9.0 LPA",
      hiringIndustries: ["Banking", "Healthcare", "E-Commerce", "Supply Chain"],
    },
    faqs: [
      {
        question: "Do I need advanced mathematics for this Data Science course?",
        answer:
          "We teach all necessary math and statistics from the ground up, focusing on intuitive visual applications rather than complex abstract formulas.",
      },
    ],
    toolsAndTech: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Jupyter", "Streamlit", "Seaborn"],
  },
  {
    id: "data-analyst",
    slug: "data-analyst",
    title: "Data Analyst",
    subtitle: "SQL, Advanced Excel, Power BI & Business Intelligence",
    category: "IT & Development",
    badge: "Non-IT Friendly",
    popular: true,
    featured: true,
    duration: "3 - 4 Months",
    eligibility: "12th Pass, BCom, BAF, BMS, BSc, BCA or Any Graduate",
    level: "Beginner to Advanced",
    shortDescription:
      "Become a business data analyst using Advanced Excel, SQL queries, interactive Power BI dashboards, and Python basics.",
    fullDescription:
      "The Data Analyst course at SmartEdge Academy Bhiwandi is one of the most accessible routes into tech for commerce, arts, and science graduates. You will learn to clean messy data, write complex SQL queries, and build executive Power BI dashboards that drive company decisions.",
    skillsCovered: [
      "Advanced Excel (VLOOKUP, XLOOKUP, Pivot Tables)",
      "SQL Querying & Database Aggregations",
      "Power BI Dashboard Design & DAX",
      "Data Cleaning & Transformation (Power Query)",
      "Business KPI Metrics & Reporting",
      "Python for Data Analysis Basics",
      "Storytelling with Data Visuals",
    ],
    whatYouWillBuild: [
      {
        title: "Executive Retail Performance Dashboard",
        description: "Interactive Power BI report tracking revenue, margins, and SKU performance across regions.",
      },
      {
        title: "Healthcare Clinic Operations Analysis",
        description: "SQL-driven database audit identifying patient wait times and doctor utilization rates.",
      },
    ],
    curriculum: [
      {
        title: "Module 1: Advanced Excel for Business",
        topics: ["Logical Functions & Lookups", "Pivot Tables & Slicers", "Conditional Formatting & Dashboarding"],
      },
      {
        title: "Module 2: SQL for Analytics",
        topics: ["SELECT, WHERE, GROUP BY & HAVING", "INNER / LEFT / RIGHT Joins", "Window Functions & Subqueries"],
      },
      {
        title: "Module 3: Power BI Data Modeling & DAX",
        topics: ["Power Query ETL", "Star Schema Architecture", "CALCULATE, RELATED & Time Intelligence DAX"],
      },
      {
        title: "Module 4: Business Case Studies & Portfolios",
        topics: ["Sales, HR & Finance Dashboards", "Automated PDF/Email Reporting", "Publishing to Power BI Service"],
      },
    ],
    careerOpportunities: {
      roles: ["Data Analyst", "Business Intelligence Analyst", "MIS Executive", "Operations Analyst"],
      avgSalary: "₹3.2 LPA – ₹6.0 LPA",
      hiringIndustries: ["Retail", "Manufacturing", "Logistics (Bhiwandi Hubs)", "Corporate Offices"],
    },
    faqs: [
      {
        question: "Can BCom or Non-IT graduates apply for Data Analyst?",
        answer:
          "Yes! Data Analysis heavily values business intuition, Excel, and SQL, making it the #1 choice for BCom, BAF, and non-coding graduates.",
      },
    ],
    toolsAndTech: ["Microsoft Excel", "SQL Server / MySQL", "Power BI", "Power Query", "DAX", "Tableau basics"],
  },
  {
    id: "front-end-developer",
    slug: "front-end-developer",
    title: "Front End Developer",
    subtitle: "Modern HTML5, CSS3, JavaScript, Tailwind & React",
    category: "IT & Development",
    badge: "Creative & Coding",
    popular: true,
    featured: false,
    duration: "4 Months",
    eligibility: "12th Pass, Diploma, Any Graduate",
    level: "Beginner to Advanced",
    shortDescription:
      "Craft visually stunning, fast, and responsive user interfaces with modern JavaScript, Tailwind CSS, and React.",
    fullDescription:
      "Become a creative frontend engineer. Master semantic HTML5, modern CSS flexbox and grid, ES6+ JavaScript, Tailwind CSS, component state management, and modern React architectures with sleek UI animations.",
    skillsCovered: [
      "Semantic HTML5 & Modern CSS3",
      "JavaScript ES6+ & DOM Manipulation",
      "Tailwind CSS & Responsive Layouts",
      "React Components, Hooks & State",
      "API Consumption (Fetch / Axios)",
      "Git & GitHub Deployment",
      "Web Accessibility (a11y) & Core Web Vitals",
    ],
    whatYouWillBuild: [
      {
        title: "Modern SaaS Landing Page & Web App",
        description: "Dark/light mode responsive web interface with animated components and interactive filters.",
      },
      {
        title: "Real-Time Movie & Media Explorer",
        description: "API-driven app with search, genre filtering, and bookmarking features.",
      },
    ],
    curriculum: [
      {
        title: "Module 1: Web Fundamentals & CSS Mastery",
        topics: ["HTML5 Semantics & SEO Tags", "CSS Grid & Flexbox", "Tailwind CSS Utility-First Styling"],
      },
      {
        title: "Module 2: JavaScript Deep Dive",
        topics: ["Variables, Scope & Closures", "DOM Manipulation & Event Listeners", "Async/Await & Promises"],
      },
      {
        title: "Module 3: React Fundamentals",
        topics: ["JSX & Functional Components", "useState, useEffect & Custom Hooks", "React Router Navigation"],
      },
      {
        title: "Module 4: Performance & Deployment",
        topics: ["State Management (Context API / Zustand)", "Vite / Next.js Setup", "Vercel / Netlify Deployment"],
      },
    ],
    careerOpportunities: {
      roles: ["Front End Developer", "UI Developer", "React Developer", "Web Designer"],
      avgSalary: "₹3.5 LPA – ₹6.5 LPA",
      hiringIndustries: ["Tech Startups", "Digital Agencies", "Software Consultancies", "E-Commerce"],
    },
    faqs: [
      {
        question: "Is graphic design required to be a frontend developer?",
        answer: "No, frontend focuses on converting designs into clean, responsive web code using HTML, CSS, JavaScript, and React.",
      },
    ],
    toolsAndTech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "React", "Git", "VS Code"],
  },
  {
    id: "power-bi",
    slug: "power-bi",
    title: "Power BI",
    subtitle: "Business Intelligence, Data Modeling & DAX",
    category: "IT & Development",
    badge: "Fast Track",
    popular: false,
    featured: false,
    duration: "2 - 3 Months",
    eligibility: "Any Graduate, Working Professional, Accountant, Analyst",
    level: "All Levels",
    shortDescription:
      "Transform Excel spreadsheets and SQL databases into interactive executive dashboards with Power BI and DAX formulas.",
    fullDescription:
      "A laser-focused practical masterclass in Microsoft Power BI. You will learn to ingest data from heterogeneous sources, clean it using Power Query, build resilient star schema models, write advanced DAX metrics, and build stunning reports.",
    skillsCovered: [
      "Power BI Desktop & Power BI Service",
      "Power Query ETL & M Code",
      "Data Modeling (Star / Snowflake Schema)",
      "DAX Expressions (Measures & Columns)",
      "Drill-Through, Tooltips & Bookmarks",
      "Scheduled Data Refresh & Gateways",
    ],
    whatYouWillBuild: [
      {
        title: "Supply Chain & Warehouse Dashboard",
        description: "Optimized for Bhiwandi logistics hub operations tracking dispatch speed and truck turnarounds.",
      },
    ],
    curriculum: [
      {
        title: "Module 1: Data Extraction & Power Query",
        topics: ["Connecting to SQL, Excel, Web APIs", "Data Transformation & Unpivoting", "Handling Errors"],
      },
      {
        title: "Module 2: Relationships & DAX Mastery",
        topics: ["One-to-Many Relationships", "CALCULATE, FILTER, ALL", "Time Intelligence (YTD, QTD, MoM)"],
      },
      {
        title: "Module 3: Visual Design & Publishing",
        topics: ["UX Design for Dashboards", "Power BI Workspaces", "Row-Level Security (RLS)"],
      },
    ],
    careerOpportunities: {
      roles: ["Power BI Developer", "BI Specialist", "Reporting Analyst", "MIS Lead"],
      avgSalary: "₹3.5 LPA – ₹7.0 LPA",
      hiringIndustries: ["Logistics", "Manufacturing", "Finance", "Healthcare"],
    },
    faqs: [
      {
        question: "Is coding required for Power BI?",
        answer: "No traditional programming is required! You only learn formulaic DAX expressions similar to Excel formulas.",
      },
    ],
    toolsAndTech: ["Power BI Desktop", "Power Query", "DAX", "Microsoft Excel", "SQL Server"],
  },
  {
    id: "sql-developer",
    slug: "sql-developer",
    title: "SQL Developer",
    subtitle: "Relational Databases, Stored Procedures & Optimization",
    category: "IT & Development",
    badge: "Core Foundation",
    popular: false,
    featured: false,
    duration: "2 - 3 Months",
    eligibility: "12th Pass, Any Graduate or IT Student",
    level: "Beginner to Intermediate",
    shortDescription:
      "Master relational database management, complex joins, subqueries, stored procedures, triggers, and query performance.",
    fullDescription:
      "Database skills are demanded across backend development, data analysis, and software testing. In this hands-on course, you will design robust schemas, write production-grade SQL queries, optimize indexes, and work with MySQL, PostgreSQL, and SQL Server.",
    skillsCovered: [
      "Relational Database Design & Normalization (1NF - BCNF)",
      "DDL, DML, DQL & DCL Operations",
      "Complex Multi-Table Joins & CTEs",
      "Stored Procedures, Functions & Triggers",
      "Index Tuning & Execution Plans",
      "ACID Transactions & Concurrency",
    ],
    whatYouWillBuild: [
      {
        title: "Core Banking Transaction Schema",
        description: "Enterprise relational schema with automated ledger audit triggers and foreign key constraints.",
      },
    ],
    curriculum: [
      {
        title: "Module 1: Relational Modeling & Fundamentals",
        topics: ["Entity-Relationship Diagrams", "Normalization Rules", "Table Constraints & Keys"],
      },
      {
        title: "Module 2: Advanced Querying",
        topics: ["Window Functions (ROW_NUMBER, RANK)", "Recursive CTEs", "Set Operators"],
      },
      {
        title: "Module 3: Programmability & Performance",
        topics: ["Stored Procedures & Triggers", "Indexing Strategies", "Optimizing Slow Queries"],
      },
    ],
    careerOpportunities: {
      roles: ["SQL Developer", "Database Administrator (Junior)", "Data QA Engineer", "Backend Associate"],
      avgSalary: "₹3.0 LPA – ₹5.5 LPA",
      hiringIndustries: ["Fintech", "Telecom", "E-Commerce", "Government IT"],
    },
    faqs: [
      {
        question: "Can I learn SQL without prior programming knowledge?",
        answer: "Yes! SQL is declarative English-like language and very intuitive to master for beginners.",
      },
    ],
    toolsAndTech: ["MySQL Workbench", "PostgreSQL / pgAdmin", "SQL Server", "DBeaver"],
  },
  {
    id: "graphic-designer",
    slug: "graphic-designer",
    title: "Graphic Designer",
    subtitle: "Brand Identity, Photoshop, Illustrator, Figma & AI Design",
    category: "IT & Development",
    badge: "Creative Career",
    popular: false,
    featured: false,
    duration: "3 - 4 Months",
    eligibility: "10th, 12th Pass or Any Stream Student with Creative Interest",
    level: "Beginner to Advanced",
    shortDescription:
      "Create professional brand identities, social media creatives, print media, UI banners, and AI-accelerated artwork.",
    fullDescription:
      "SmartEdge Academy's Graphic Design course empowers you to turn visual creativity into a high-paying career or freelance business. You will master Adobe Photoshop, Adobe Illustrator, Canva Pro, Figma, and AI image generation tools like Midjourney and Canva AI.",
    skillsCovered: [
      "Adobe Photoshop Photo Editing & Compositing",
      "Adobe Illustrator Vector Art & Logo Design",
      "Figma Social Media & Web Banner Prototyping",
      "Typography, Color Psychology & Layout Grids",
      "Print Media (Brochures, Flex, Packaging)",
      "Generative AI Tools for Creatives",
      "Freelance Client Management & Portfolio",
    ],
    whatYouWillBuild: [
      {
        title: "Complete Brand Identity Kit",
        description: "Logo, stationery, social media template kit, and billboard flex for a retail brand.",
      },
    ],
    curriculum: [
      {
        title: "Module 1: Design Principles & Color Theory",
        topics: ["Visual Hierarchy", "Color Harmonies & Contrast", "Typography Pairing"],
      },
      {
        title: "Module 2: Adobe Photoshop Mastery",
        topics: ["Layer Masks, Selections & Retouching", "Color Grading & Photo Manipulation", "Social Media Poster Design"],
      },
      {
        title: "Module 3: Adobe Illustrator & Vector Graphics",
        topics: ["Pen Tool Mastery", "Logo Design & Iconography", "Print Ready CMYK Formats"],
      },
      {
        title: "Module 4: AI Design & Portfolio Creation",
        topics: ["AI Prompting for Textures & Backgrounds", "Behance & Instagram Portfolio", "Freelancing on Upwork"],
      },
    ],
    careerOpportunities: {
      roles: ["Graphic Designer", "Visual Branding Specialist", "Social Media Creative Designer", "Freelance Designer"],
      avgSalary: "₹2.5 LPA – ₹5.0 LPA + Freelance Earnings",
      hiringIndustries: ["Advertising Agencies", "E-Commerce", "Print & Publishing", "Digital Marketing Firms"],
    },
    faqs: [
      {
        question: "Do I need a drawing or sketch background?",
        answer: "No drawing skills are needed. You will learn digital vector tools, software techniques, and aesthetic layout principles.",
      },
    ],
    toolsAndTech: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Canva Pro", "Midjourney / AI Image Tools"],
  },
  {
    id: "mobile-app-developer",
    slug: "mobile-app-developer",
    title: "Mobile App Developer",
    subtitle: "Cross-Platform iOS & Android with React Native / Flutter",
    category: "IT & Development",
    badge: "In Demand",
    popular: false,
    featured: false,
    duration: "4 - 5 Months",
    eligibility: "12th Pass, Diploma, IT / Computer Science Graduate or Coding Enthusiast",
    level: "Intermediate",
    shortDescription:
      "Build native-feeling iOS and Android mobile applications using a single codebase with React Native and modern mobile APIs.",
    fullDescription:
      "Learn to create high-performance mobile apps for millions of smartphone users. Master mobile navigation, camera/location hardware access, offline storage, push notifications, and App Store / Google Play store publishing standards.",
    skillsCovered: [
      "React Native & Expo Ecosystem",
      "Cross-Platform Mobile UI Components",
      "State Management (Zustand / Redux Toolkit)",
      "Native Device APIs (Camera, GPS, Storage)",
      "Push Notifications & Firebase Integration",
      "Publishing to Google Play Store",
    ],
    whatYouWillBuild: [
      {
        title: "Food Delivery & Live Tracking App",
        description: "Mobile app with cart, online payments, user profiles, and live Google Maps tracking.",
      },
    ],
    curriculum: [
      {
        title: "Module 1: Mobile App Fundamentals & Expo",
        topics: ["Expo CLI & React Native Architecture", "Flexbox for Mobile Screens", "Touch Events & Gesture Handlers"],
      },
      {
        title: "Module 2: Navigation & Backend Sync",
        topics: ["React Navigation (Stack, Tabs, Drawer)", "REST API Integration", "AsyncStorage & SQLite"],
      },
      {
        title: "Module 3: Device Features & Firebase",
        topics: ["Camera, Media Library & Geolocation", "Firebase Auth & Push Notifications", "Performance Optimization"],
      },
    ],
    careerOpportunities: {
      roles: ["Mobile App Developer", "React Native Developer", "Cross-Platform Mobile Engineer"],
      avgSalary: "₹3.8 LPA – ₹7.5 LPA",
      hiringIndustries: ["Consumer Apps", "FinTech", "Delivery Platforms", "Healthcare"],
    },
    faqs: [
      {
        question: "Can I test apps on my own Android phone?",
        answer: "Yes! Using Expo Go, you can test live apps directly on your physical smartphone via QR code.",
      },
    ],
    toolsAndTech: ["React Native", "Expo", "TypeScript", "Firebase", "Android Studio", "VS Code"],
  },
  {
    id: "ppa-developer",
    slug: "ppa-developer",
    title: "PPA Developer",
    subtitle: "Professional Python & Automation Engineering",
    category: "IT & Development",
    badge: "Specialized",
    popular: false,
    featured: false,
    duration: "4 Months",
    eligibility: "12th Pass, Any Graduate or Working Professional",
    level: "Beginner to Advanced",
    shortDescription:
      "Specialized program combining Python software development, RPA (Robotic Process Automation), and business API pipelines.",
    fullDescription:
      "The PPA (Practical Professional Applications / Professional Python & Automation) Developer course is designed specifically to fill high-paying automation roles across modern logistics, back-office, and digital transformation teams in Mumbai-MMR.",
    skillsCovered: [
      "Python Software Development",
      "Browser & Desktop Automation (Playwright / Selenium)",
      "Excel & Document Automation (OpenPyXL / PyPDF)",
      "REST API Integration & Webhooks",
      "Automated Alerting & Monitoring Systems",
    ],
    whatYouWillBuild: [
      {
        title: "Automated Invoice & Order Extraction Bot",
        description: "Bot that scans email PDF attachments, validates GST details, and uploads them to database.",
      },
    ],
    curriculum: [
      {
        title: "Module 1: Robust Python Foundations",
        topics: ["Clean Code & Modular Functions", "Regular Expressions & String Parsing", "File System Operations"],
      },
      {
        title: "Module 2: Web & Desktop RPA",
        topics: ["Browser Automation with Playwright", "Form Filling & Data Scraping", "Handling Captchas & Sessions"],
      },
      {
        title: "Module 3: Integration & Scheduling",
        topics: ["Cron Jobs & Windows Task Scheduler", "Error Logging & Email Dispatch", "Production Deployment"],
      },
    ],
    careerOpportunities: {
      roles: ["PPA Engineer", "Python Automation Developer", "RPA Associate", "Business Process Engineer"],
      avgSalary: "₹3.5 LPA – ₹6.5 LPA",
      hiringIndustries: ["Warehousing & Logistics", "BPO & KPO", "Finance Shared Services", "E-Commerce Ops"],
    },
    faqs: [
      {
        question: "How is PPA different from general Python?",
        answer: "PPA focuses heavily on automating real workplace tasks—documents, spreadsheets, browser workflows, and repetitive corporate operations.",
      },
    ],
    toolsAndTech: ["Python", "Playwright", "Selenium", "OpenPyXL", "Postman", "Git"],
  },
  {
    id: "digital-marketing-ai",
    slug: "digital-marketing-ai",
    title: "Digital Marketing with AI",
    subtitle: "SEO, Performance Ads, AI Content & Lead Generation",
    category: "IT & Development",
    badge: "High Growth",
    popular: true,
    featured: true,
    duration: "3 - 4 Months",
    eligibility: "12th Pass, BCom, BA, BMS, Any Graduate, Business Owners",
    level: "Beginner to Advanced",
    shortDescription:
      "Master modern SEO, Google Ads, Meta Ads, WhatsApp automation, and AI content workflows to generate leads and revenue.",
    fullDescription:
      "Traditional digital marketing is obsolete without AI. At SmartEdge Academy, you will learn the new standard: AI-powered SEO, programmatic content creation, Google Ads, Meta Performance Campaigns, WhatsApp Marketing Automation, and ROI analytics.",
    skillsCovered: [
      "AI-Powered Search Engine Optimization (SEO)",
      "Generative Engine Optimization (GEO & AEO)",
      "Google Ads (Search, Display, Performance Max)",
      "Meta Ads (Facebook & Instagram Lead Generation)",
      "WhatsApp Business API Automation",
      "Copywriting with ChatGPT & Claude",
      "Google Analytics 4 & Conversion Tracking",
    ],
    whatYouWillBuild: [
      {
        title: "High-Converting Real Estate Lead Funnel",
        description: "Landing page, Meta ad campaign, automated WhatsApp response bot, and GA4 tracking.",
      },
    ],
    curriculum: [
      {
        title: "Module 1: Modern SEO & Answer Engine Optimization",
        topics: ["Keyword Research with AI Tools", "On-Page & Technical SEO", "Local SEO & Google Business Profile"],
      },
      {
        title: "Module 2: Paid Ads Mastery (Google & Meta)",
        topics: ["Campaign Structure & Budgeting", "Audience Targeting & Retargeting", "Ad Copy & Creative Testing"],
      },
      {
        title: "Module 3: Social Media & WhatsApp Automation",
        topics: ["Instagram Growth Strategies", "WhatsApp API Drip Campaigns", "Chatbot Funnels"],
      },
      {
        title: "Module 4: Analytics, Reporting & Freelancing",
        topics: ["GA4 Custom Events & Tag Manager", "Client Reporting Dashboards", "Closing Digital Marketing Clients"],
      },
    ],
    careerOpportunities: {
      roles: ["Digital Marketing Executive", "Performance Marketer", "SEO Specialist", "Social Media Manager"],
      avgSalary: "₹3.0 LPA – ₹6.0 LPA + Freelance Income",
      hiringIndustries: ["Agencies", "Real Estate", "Healthcare", "E-Commerce", "Local Businesses"],
    },
    faqs: [
      {
        question: "Is this suitable for non-technical students?",
        answer: "Yes, this course is 100% non-coding and ideal for creative thinkers, business owners, and graduates seeking quick placement.",
      },
    ],
    toolsAndTech: ["Google Ads", "Meta Ads Manager", "Google Analytics 4", "Semrush / Ahrefs", "ChatGPT", "Canva", "Brevo / WhatsApp API"],
  },
  {
    id: "business-automation",
    slug: "business-automation",
    title: "Business Automation",
    subtitle: "CRM Systems, Zapier, Make, n8n & Automated Workflows",
    category: "IT & Development",
    badge: "Executive Skill",
    popular: false,
    featured: false,
    duration: "2 - 3 Months",
    eligibility: "Any Graduate, Business Owners, Operations Managers, IT Professionals",
    level: "All Levels",
    shortDescription:
      "Automate manual business operations, CRM updates, lead assignment, and invoicing without writing complex code.",
    fullDescription:
      "Every modern business wants to eliminate repetitive manual work. In this course, you will learn to connect apps, design webhook triggers, integrate CRMs (HubSpot / Zoho), and build zero-code / low-code operational workflows.",
    skillsCovered: [
      "Workflow Architecture & Trigger-Action Logic",
      "n8n & Make.com (Integromat) Pipelines",
      "CRM Integration (Zoho, HubSpot, Google Sheets)",
      "Automated Invoicing & Payment Webhooks",
      "WhatsApp & Email Auto-responders",
      "API Webhooks & JSON Data Transformation",
    ],
    whatYouWillBuild: [
      {
        title: "Automated Clinic / Logistics Intake System",
        description: "Zero-touch customer onboarding from web enquiry to WhatsApp notification to CRM update.",
      },
    ],
    curriculum: [
      {
        title: "Module 1: Automation Fundamentals & Tooling",
        topics: ["Understanding APIs & Webhooks", "Connecting Google Sheets & Forms", "Zapier & Make Basics"],
      },
      {
        title: "Module 2: Self-Hosted n8n & Advanced Pipelines",
        topics: ["n8n Node Architecture", "Conditionals, Loops & Error Handling", "Database Connectors"],
      },
      {
        title: "Module 3: Enterprise Business Case Studies",
        topics: ["Lead Qualification Bots", "Automated Billing Workflows", "Client Project Delivery"],
      },
    ],
    careerOpportunities: {
      roles: ["Automation Specialist", "Operations Systems Architect", "CRM Consultant", "Workflow Developer"],
      avgSalary: "₹3.5 LPA – ₹7.0 LPA",
      hiringIndustries: ["Bhiwandi Warehousing & Logistics", "Digital Agencies", "SaaS Companies"],
    },
    faqs: [
      {
        question: "Do I need to know coding?",
        answer: "No programming background is required. We focus on visual node-based automation platforms.",
      },
    ],
    toolsAndTech: ["n8n", "Make.com", "Zapier", "Zoho CRM", "Google Sheets", "Webhooks"],
  },
  {
    id: "cloud-devops",
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    subtitle: "AWS, Linux, Docker, Kubernetes & CI/CD Pipelines",
    category: "IT & Development",
    badge: "Highest Paying",
    popular: true,
    featured: true,
    duration: "5 - 6 Months",
    eligibility: "BSc IT, BCA, BTech, MCA or Tech Enthusiasts with Computer Knowledge",
    level: "Intermediate to Advanced",
    shortDescription:
      "Master AWS cloud services, Linux administration, Docker containers, Kubernetes clustering, and automated CI/CD pipelines.",
    fullDescription:
      "Cloud and DevOps engineers are the backbone of modern tech infrastructure. Learn AWS cloud infrastructure, Linux server administration, containerization with Docker, orchestration with Kubernetes, and continuous deployment with GitHub Actions.",
    skillsCovered: [
      "Linux System Administration & Shell Scripting",
      "Amazon Web Services (EC2, S3, RDS, VPC, IAM)",
      "Docker Containerization & Multi-Stage Builds",
      "Kubernetes Pods, Services & Deployments",
      "CI/CD with GitHub Actions & Jenkins",
      "Infrastructure as Code (Terraform basics)",
      "Cloud Security & Monitoring (CloudWatch / Prometheus)",
    ],
    whatYouWillBuild: [
      {
        title: "Production Kubernetes Cluster Deployment",
        description: "Automated CI/CD pipeline deploying a containerized microservice to AWS EKS with zero downtime.",
      },
    ],
    curriculum: [
      {
        title: "Module 1: Linux & Networking Foundations",
        topics: ["Command Line Mastery & Permissions", "Bash Scripting & Automation", "DNS, TCP/IP, SSH & Firewalls"],
      },
      {
        title: "Module 2: AWS Cloud Architecture",
        topics: ["IAM Policies & Roles", "EC2, Auto-Scaling & Load Balancers", "VPC Networking & S3 Storage"],
      },
      {
        title: "Module 3: Containers & Orchestration",
        topics: ["Dockerfiles & Image Optimization", "Docker Compose Multi-Container", "Kubernetes Pods & Ingress"],
      },
      {
        title: "Module 4: CI/CD & Monitoring",
        topics: ["GitHub Actions Automated Pipelines", "Prometheus & Grafana Dashboards", "Cloud Cost Optimization"],
      },
    ],
    careerOpportunities: {
      roles: ["Cloud Engineer", "DevOps Engineer", "Site Reliability Engineer (SRE)", "AWS Administrator"],
      avgSalary: "₹4.8 LPA – ₹10.0 LPA",
      hiringIndustries: ["Cloud Consultancies", "Enterprise Software", "Fintech", "Telecom"],
    },
    faqs: [
      {
        question: "Is AWS certification included in guidance?",
        answer: "Yes, our curriculum maps directly to AWS Certified Solutions Architect Associate (SAA-C03) domains.",
      },
    ],
    toolsAndTech: ["AWS", "Linux (Ubuntu)", "Docker", "Kubernetes", "GitHub Actions", "Terraform", "Prometheus"],
  },
  {
    id: "react-js-react-native",
    slug: "react-js-react-native",
    title: "React JS / React Native",
    subtitle: "Unified Web & Mobile Frontend Engineering",
    category: "IT & Development",
    badge: "Full Frontend",
    popular: true,
    featured: false,
    duration: "4 - 5 Months",
    eligibility: "12th Pass, Any Graduate with basic computer aptitude",
    level: "Beginner to Advanced",
    shortDescription:
      "Learn to build rich web applications with React JS and cross-platform native iOS & Android mobile apps with React Native.",
    fullDescription:
      "Master the React mental model across web and mobile ecosystems. By mastering component lifecycles, state hooks, React Router, Expo, and native UI modules, you position yourself as a dual-skilled engineer who can build web portals and mobile apps interchangeably.",
    skillsCovered: [
      "Modern JavaScript & TypeScript basics",
      "React JS Web Components & Single Page Apps",
      "React Native Mobile Architecture",
      "State Management with Redux Toolkit & Zustand",
      "API Integration & Real-Time WebSockets",
      "App Deployment on Web & Mobile Stores",
    ],
    whatYouWillBuild: [
      {
        title: "Omnichannel Fitness Tracking Platform",
        description: "Responsive React web dashboard synced with an Expo React Native mobile workout tracker.",
      },
    ],
    curriculum: [
      {
        title: "Module 1: React Web Mastery",
        topics: ["Components, Props & State", "Hooks: useState, useEffect, useMemo", "Forms & Validation (Zod)"],
      },
      {
        title: "Module 2: React Native Foundations",
        topics: ["View, Text, ScrollView, FlatList", "Mobile Layouts with Flexbox", "Touch Interactivity & Animations"],
      },
      {
        title: "Module 3: Shared Logic & State",
        topics: ["Custom Hooks Architecture", "Global State Management", "Offline Caching"],
      },
    ],
    careerOpportunities: {
      roles: ["React Developer", "React Native Engineer", "Frontend Specialist", "Full UI Developer"],
      avgSalary: "₹3.8 LPA – ₹7.5 LPA",
      hiringIndustries: ["Tech Startups", "Consumer Tech", "Software Consultancies"],
    },
    faqs: [
      {
        question: "Can I get a job with just React and React Native?",
        answer: "Yes! React is the world's most demanded frontend library, and React Native skills multiply your hiring value.",
      },
    ],
    toolsAndTech: ["React", "React Native", "TypeScript", "Tailwind CSS", "Expo", "Redux", "VS Code"],
  },
  {
    id: "mern-stack",
    slug: "mern-stack",
    title: "MERN Stack",
    subtitle: "MongoDB, Express.js, React.js & Node.js Full Stack",
    category: "IT & Development",
    badge: "Industry Standard",
    popular: true,
    featured: true,
    duration: "5 - 6 Months",
    eligibility: "12th Pass, BSc, BCA, BCom, Engineering, Any Graduate",
    level: "Beginner to Advanced",
    shortDescription:
      "Master complete JavaScript full stack development from MongoDB databases to Node backends and React frontends.",
    fullDescription:
      "The MERN Stack course at SmartEdge Academy is our flagship full stack program. You will build end-to-end web applications completely with JavaScript/TypeScript, mastering database modeling, RESTful APIs, authentication, state management, and cloud deployment.",
    skillsCovered: [
      "MongoDB NoSQL Database Design",
      "Express.js Server Framework",
      "React.js Single Page Applications",
      "Node.js Runtime & Event Loop",
      "JWT Authentication & Role-Based Access",
      "REST & GraphQL APIs",
      "Tailwind CSS & UI Libraries",
      "Deployment on Render, Vercel & MongoDB Atlas",
    ],
    whatYouWillBuild: [
      {
        title: "Full-Featured EdTech Course Portal",
        description: "Student dashboard, video playback, payment gateway integration, and admin management console.",
      },
      {
        title: "Real-Time Collaboration Workspace",
        description: "Socket.io real-time chat, task boards, and document sharing system.",
      },
    ],
    curriculum: [
      {
        title: "Module 1: JavaScript & Frontend with React",
        topics: ["Modern ES6+ Syntax", "React Components & State", "Tailwind UI & API Integration"],
      },
      {
        title: "Module 2: Node.js & Express Backend",
        topics: ["Node.js Architecture & HTTP Server", "Express Routing & Middleware", "REST API Development"],
      },
      {
        title: "Module 3: MongoDB & Mongoose ORM",
        topics: ["Document Data Modeling", "CRUD Operations & Aggregation Pipelines", "Indexing & Security"],
      },
      {
        title: "Module 4: Full Stack Integration & Deployment",
        topics: ["JWT Auth & Cookie Security", "Payment Gateway (Razorpay/Stripe)", "CI/CD & Live Deployment"],
      },
    ],
    careerOpportunities: {
      roles: ["Full Stack Developer", "MERN Stack Engineer", "Backend Node.js Developer", "React Developer"],
      avgSalary: "₹4.0 LPA – ₹8.0 LPA",
      hiringIndustries: ["SaaS Startups", "IT Services", "Product Companies", "Digital Product Studios"],
    },
    faqs: [
      {
        question: "Is MERN Stack still popular in 2026?",
        answer: "Yes, JavaScript/TypeScript remains the #1 language ecosystem on GitHub, and MERN stack jobs are ubiquitous worldwide.",
      },
    ],
    toolsAndTech: ["MongoDB", "Express.js", "React", "Node.js", "TypeScript", "Tailwind CSS", "Postman", "Git"],
  },

  // AI & Automation Courses
  {
    id: "chatgpt-for-professionals",
    slug: "chatgpt-for-professionals",
    title: "ChatGPT for Professionals",
    subtitle: "Advanced Prompt Engineering & Enterprise Productivity",
    category: "AI & Automation",
    badge: "Essential AI",
    popular: true,
    featured: true,
    duration: "1 - 2 Months",
    eligibility: "Students, Graduates, Office Professionals, Content Creators",
    level: "All Levels",
    shortDescription:
      "Master advanced prompt engineering, custom GPT creation, document synthesis, coding assistance, and workplace acceleration.",
    fullDescription:
      "Move beyond simple questions. Learn how top professionals use ChatGPT as a 24/7 research assistant, senior code reviewer, business strategist, and copywriter. You will master Few-Shot prompting, Chain-of-Thought, Custom GPTs, and API integration.",
    skillsCovered: [
      "Advanced Prompt Engineering Frameworks",
      "Chain-of-Thought & Few-Shot Reasoning",
      "Building Custom GPTs & Knowledge Bases",
      "AI for Coding, Debugging & Code Refactoring",
      "Business Proposals & Report Generation",
      "OpenAI API Integration Basics",
    ],
    whatYouWillBuild: [
      {
        title: "Custom Domain Knowledge Assistant",
        description: "Specialized Custom GPT trained on company legal policies and product documentation.",
      },
    ],
    curriculum: [
      {
        title: "Module 1: The Mechanics of Large Language Models",
        topics: ["How LLMs Work & Token Economics", "Prompt Anatomy & Role Playing", "System vs User Prompts"],
      },
      {
        title: "Module 2: High-Performance Prompting Techniques",
        topics: ["Zero-Shot, Few-Shot & Chain-of-Thought", "Delimiters, JSON Output & Guardrails", "Prompt Templates"],
      },
      {
        title: "Module 3: Custom GPTs & Workplace Automation",
        topics: ["Configuring Custom GPTs", "Uploading Documents & Vector Search", "OpenAI API Playground"],
      },
    ],
    careerOpportunities: {
      roles: ["Prompt Engineer", "AI Productivity Specialist", "AI Operations Executive"],
      avgSalary: "₹3.5 LPA – ₹6.5 LPA",
      hiringIndustries: ["All Tech, Corporate, Agency, and Startup Roles"],
    },
    faqs: [
      {
        question: "Do I need coding to use ChatGPT professionally?",
        answer: "No! Prompt engineering is a linguistic and structured thinking skill that anyone can master.",
      },
    ],
    toolsAndTech: ["ChatGPT Plus", "OpenAI Playground", "Custom GPTs", "Advanced Data Analysis"],
  },
  {
    id: "google-gemini",
    slug: "google-gemini",
    title: "Google Gemini",
    subtitle: "Multimodal AI, Workspace Integration & Large Context",
    category: "AI & Automation",
    badge: "Next-Gen AI",
    popular: true,
    featured: false,
    duration: "1 - 2 Months",
    eligibility: "Open to All Streams & Professionals",
    level: "All Levels",
    shortDescription:
      "Leverage Gemini's million-token context window for processing long video, audio, PDFs, and deep Google Workspace automation.",
    fullDescription:
      "Google Gemini represents the cutting edge of multimodal AI. In this hands-on course, you will learn to analyze entire hour-long videos, digest massive 500-page business reports in seconds, and integrate Gemini with Google Docs, Gmail, Sheets, and Google AI Studio.",
    skillsCovered: [
      "Multimodal Analysis (Video, Audio, Image, Text)",
      "Google AI Studio & Gemini 1.5/2.0 Models",
      "Million-Token Context Window Workflows",
      "Google Workspace Duet/Gemini Integration",
      "Structured Output with Gemini APIs",
    ],
    whatYouWillBuild: [
      {
        title: "Video Lecture & Meeting Summarizer",
        description: "Automated pipeline that extracts action items and slides directly from 60-minute recorded MP4 videos.",
      },
    ],
    curriculum: [
      {
        title: "Module 1: Multimodal Architecture",
        topics: ["Gemini Models & Capabilities", "Google AI Studio Quickstart", "System Instructions & Temperature"],
      },
      {
        title: "Module 2: Long-Context Analysis",
        topics: ["Analyzing 100+ Page PDFs", "Video Understanding & Timestamping", "Audio Transcription & Insights"],
      },
      {
        title: "Module 3: Workspace & API Solutions",
        topics: ["Gemini in Docs, Sheets & Gmail", "Connecting Python to Gemini API", "Building Automated Tools"],
      },
    ],
    careerOpportunities: {
      roles: ["AI Solutions Specialist", "Digital Operations Lead", "AI Content Strategist"],
      avgSalary: "₹3.5 LPA – ₹6.5 LPA",
      hiringIndustries: ["Media", "Education", "Corporate Offices", "Technology"],
    },
    faqs: [
      {
        question: "How does Gemini compare to ChatGPT?",
        answer: "Gemini excels in multimodal video and audio processing, as well as massive 1M+ token context windows for large enterprise files.",
      },
    ],
    toolsAndTech: ["Google Gemini", "Google AI Studio", "Google Workspace", "Gemini API"],
  },
  {
    id: "google-flow-ai-video",
    slug: "google-flow-ai-video",
    title: "Google Flow",
    subtitle: "AI Video Creation, Voice Synthesis & Media Generation",
    category: "AI & Automation",
    badge: "Creative AI",
    popular: true,
    featured: true,
    duration: "2 Months",
    eligibility: "Content Creators, Marketers, Students, Designers, Anyone",
    level: "All Levels",
    shortDescription:
      "Create broadcast-quality commercial videos, animations, and voiceovers in minutes using generative AI video workflows.",
    fullDescription:
      "AI video creation is revolutionizing content marketing, YouTube, and corporate training. Learn to generate realistic talking head videos, script-to-video scenes, AI voice cloning, and cinematic visuals using Google Flow and leading generative video platforms.",
    skillsCovered: [
      "AI Video Generation & Prompt Direction",
      "Camera Angles, Lighting & Motion Prompts",
      "AI Voice Cloning & Multilingual Dubbing",
      "Scriptwriting for Viral Reels & Commercials",
      "Editing & Post-Processing AI Videos",
      "Commercial Copyright & Monetization",
    ],
    whatYouWillBuild: [
      {
        title: "Full Commercial Brand Video Ad",
        description: "End-to-end commercial video with AI script, cinematic b-roll, human-like voiceover, and brand graphics.",
      },
    ],
    curriculum: [
      {
        title: "Module 1: Video Prompting & Pre-Production",
        topics: ["Storyboarding with AI", "Cinematography Terms in AI Prompts", "Scene Consistency"],
      },
      {
        title: "Module 2: Generative Video Platforms",
        topics: ["Text-to-Video & Image-to-Video", "Motion Controls & Camera Moves", "Upscaling to 4K"],
      },
      {
        title: "Module 3: Audio, Voice & Final Assembly",
        topics: ["ElevenLabs Voice Synthesis", "Sound Effects & Background Music", "CapCut / Premiere Assembly"],
      },
    ],
    careerOpportunities: {
      roles: ["AI Video Creator", "Multimedia Producer", "Social Media Video Specialist", "Freelance Video Editor"],
      avgSalary: "₹3.0 LPA – ₹6.0 LPA + High Freelance Rates",
      hiringIndustries: ["Marketing Agencies", "EdTech", "YouTube Channels", "Brand Media"],
    },
    faqs: [
      {
        question: "Do I need a high-end gaming PC?",
        answer: "No, AI video tools run on cloud servers, so all generation happens in your web browser.",
      },
    ],
    toolsAndTech: ["Google Flow", "Runway Gen-3", "Luma Dream Machine", "ElevenLabs", "CapCut", "Midjourney"],
  },
  {
    id: "antigravity-ai-development",
    slug: "antigravity-ai-development",
    title: "Antigravity",
    subtitle: "AI-Powered Software Development & Next-Gen Engineering",
    category: "AI & Automation",
    badge: "Cutting Edge",
    popular: true,
    featured: true,
    duration: "3 Months",
    eligibility: "Programmers, Engineering Students, Coding Beginners & Career Switchers",
    level: "All Levels",
    shortDescription:
      "Build full stack software 10x faster using Google Antigravity, autonomous coding agents, and AI pair-programming.",
    fullDescription:
      "Software development has permanently shifted. The engineers who succeed are those who orchestrate autonomous coding agents. Learn Google Antigravity, MCP (Model Context Protocol), custom subagents, automated refactoring, and AI-first development workflows.",
    skillsCovered: [
      "Antigravity CLI & IDE Architecture",
      "Autonomous Multi-Agent Orchestration",
      "Model Context Protocol (MCP) Tools",
      "Prompt-Driven Code Generation & Testing",
      "Architectural Design with AI Guidance",
      "Autonomous Bug Fixing & CI Debugging",
    ],
    whatYouWillBuild: [
      {
        title: "Autonomous Full-Stack Web Application",
        description: "Production web app built from spec to live deployment using Antigravity coding agents.",
      },
    ],
    curriculum: [
      {
        title: "Module 1: AI Agent Fundamentals",
        topics: ["How Agentic Coding Works", "Context Windows & Scratchpads", "Antigravity Workspace Setup"],
      },
      {
        title: "Module 2: Subagents & MCP Tools",
        topics: ["Defining Custom Subagents", "Connecting Databases & APIs via MCP", "Background Task Orchestration"],
      },
      {
        title: "Module 3: Real-World Software Delivery",
        topics: ["Building Next.js & Python Apps with Agents", "Automated Testing & Self-Healing Code", "Production Ship"],
      },
    ],
    careerOpportunities: {
      roles: ["AI-Assisted Software Engineer", "Full Stack Developer", "Technical Product Builder", "Solutions Architect"],
      avgSalary: "₹4.5 LPA – ₹9.0 LPA",
      hiringIndustries: ["Tech Companies", "Modern Startups", "Consulting Firms"],
    },
    faqs: [
      {
        question: "Will AI replace programmers?",
        answer: "No, but programmers who know how to command AI agents will replace those who don't. This course ensures you stay ahead.",
      },
    ],
    toolsAndTech: ["Google Antigravity", "Claude Code / Cursor", "Next.js", "Python", "MCP Servers", "Git"],
  },
  {
    id: "n8n-workflow-automation",
    slug: "n8n-workflow-automation",
    title: "n8n Workflow Automation",
    subtitle: "Open-Source Integrations, Webhooks & AI Agents",
    category: "AI & Automation",
    badge: "In Demand",
    popular: true,
    featured: true,
    duration: "2 - 3 Months",
    eligibility: "Any Graduate, IT Professional, Operations Lead, Developer",
    level: "Beginner to Advanced",
    shortDescription:
      "Build enterprise-grade automated workflows, AI agent chains, and business integrations using self-hosted n8n.",
    fullDescription:
      "n8n is the fastest growing open-source workflow automation platform in the world. Learn to self-host n8n, connect 400+ business applications, parse webhooks, build LangChain-style AI agents with memory, and deploy high-volume data pipelines.",
    skillsCovered: [
      "Self-Hosted n8n Deployment (Docker / Cloud)",
      "Trigger Nodes, Webhooks & Polling",
      "Data Manipulation with JavaScript & JMESPath",
      "n8n AI Nodes & LangChain Agent Integration",
      "WhatsApp, Telegram & Slack Bot Workflows",
      "Error Triggers & High-Availability Scaling",
    ],
    whatYouWillBuild: [
      {
        title: "Autonomous Customer Support AI Bot",
        description: "n8n workflow that ingests WhatsApp queries, queries internal PostgreSQL vector DB, and replies automatically.",
      },
    ],
    curriculum: [
      {
        title: "Module 1: n8n Architecture & Setup",
        topics: ["Deploying n8n with Docker", "Credentials Management", "Core Node Concepts & Execution Flow"],
      },
      {
        title: "Module 2: Complex Logic & Data Flow",
        topics: ["Code Nodes & Custom JavaScript", "Switch, If, Merge & SplitInBatches", "Working with HTTP Request Nodes"],
      },
      {
        title: "Module 3: AI Agents & LLM Nodes",
        topics: ["AI Agent Nodes with OpenAI/Gemini", "Vector Store Nodes (Qdrant / Pinecone)", "Tool Nodes & Memory"],
      },
    ],
    careerOpportunities: {
      roles: ["n8n Specialist", "Automation Engineer", "Integration Architect", "AI Workflow Consultant"],
      avgSalary: "₹4.0 LPA – ₹8.0 LPA",
      hiringIndustries: ["Global Remote Teams", "Logistics & Supply Chain", "Digital Marketing Agencies", "Fintech"],
    },
    faqs: [
      {
        question: "Why learn n8n instead of Zapier?",
        answer: "n8n can be self-hosted with unlimited executions for free, has native AI agent nodes, and has no per-task fees, making it the top choice for companies.",
      },
    ],
    toolsAndTech: ["n8n", "Docker", "PostgreSQL", "JavaScript", "Webhooks", "OpenAI / Gemini"],
  },
  {
    id: "ai-tools-productivity",
    slug: "ai-tools-productivity",
    title: "AI Tools & Productivity",
    subtitle: "Complete Toolkit for Career & Workplace Acceleration",
    category: "AI & Automation",
    badge: "Fast Track",
    popular: false,
    featured: false,
    duration: "1 - 2 Months",
    eligibility: "Students, Job Seekers, Working Professionals, Freelancers",
    level: "All Levels",
    shortDescription:
      "Master 25+ cutting-edge AI tools for presentations, research, spreadsheets, copywriting, meeting notes, and daily work.",
    fullDescription:
      "Multiply your personal productivity by 5x. Learn the essential AI toolkit used by top global professionals for instant presentation decks (Gamma), deep research (Perplexity), audio transcription (Otter), automated spreadsheets, and smart drafting.",
    skillsCovered: [
      "Perplexity AI for Instant Citation-Backed Research",
      "Gamma App for AI Presentation Decks",
      "AI Excel / Google Sheets Formulas & Modeling",
      "Notion AI for Personal Knowledge Management",
      "Meeting Transcription & Action Items (Otter / Fireflies)",
      "Grammarly & QuillBot for Flawless Communication",
    ],
    whatYouWillBuild: [
      {
        title: "Executive Business Pitch & Deck in 1 Hour",
        description: "Complete market research report and stunning 15-slide investor presentation created using AI tools.",
      },
    ],
    curriculum: [
      {
        title: "Module 1: AI Search & Deep Research",
        topics: ["Perplexity Pro Search Strategies", "Fact-Checking & Source Verification", "Synthesizing Long Studies"],
      },
      {
        title: "Module 2: AI Presentations & Documents",
        topics: ["Gamma Presentation Generation", "Notion AI Knowledge Hubs", "Resume & Cover Letter Optimizers"],
      },
      {
        title: "Module 3: Spreadsheets & Communications",
        topics: ["AI Formulas & Data Cleaning", "Meeting Summary Automations", "Professional Email Frameworks"],
      },
    ],
    careerOpportunities: {
      roles: ["AI Productivity Specialist", "Executive Assistant", "Operations Coordinator", "Modern Office Manager"],
      avgSalary: "₹3.0 LPA – ₹5.5 LPA",
      hiringIndustries: ["Corporate Offices", "Consultancies", "Real Estate", "Startups"],
    },
    faqs: [
      {
        question: "Can I take this course alongside my college or job?",
        answer: "Yes! Classes are available in flexible morning, evening, and weekend batches at our Bhiwandi center.",
      },
    ],
    toolsAndTech: ["Perplexity", "Gamma", "Notion AI", "ChatGPT", "Claude", "Otter.ai", "Canva AI"],
  },
]

export const popularCourses = COURSES.map((c) => ({
  ...c,
  name: c.title,
  description: c.shortDescription,
  skills: c.skillsCovered,
  projects: c.whatYouWillBuild.map((p) => p.title),
}))

export function getCourseBySlug(slug: string): CourseItem | undefined {
  return COURSES.find((c) => c.slug === slug || c.id === slug)
}


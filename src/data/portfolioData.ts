export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
}

export interface CapabilityItem {
  id: string;
  title: string;
  tags: string[];
  description: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  featured?: boolean;
  architectureNotes?: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface ArchitectureNode {
  id: string;
  title: string;
  type: 'frontend' | 'gateway' | 'service' | 'messaging' | 'database';
  description: string;
  tech: string;
  details: string;
}

export interface EngineeringInterest {
  title: string;
  description: string;
}

export interface PortfolioData {
  name: string;
  primaryTitle: string;
  typingRoles: string[];
  heroSubtitle: string;
  bioTitle: string;
  bioSubtitle: string;
  aboutText: string;
  profileImage: string;
  cvUrl: string;
  experiences: ExperienceItem[];
  capabilities: CapabilityItem[];
  skillCategories: SkillCategory[];
  currentlyLearning: SkillCategory;
  projects: ProjectItem[];
  architectureNodes: ArchitectureNode[];
  engineeringInterests: EngineeringInterest[];
  contact: {
    name: string;
    location: string;
    email: string;
    formspreeEndpoint?: string;
  };
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
}

export const portfolioData: PortfolioData = {
  name: "Anurag Khonde",
  primaryTitle: "Backend Software Engineer",
  typingRoles: [
    "Backend Software Engineer",
    "Java Developer",
    "Spring Boot Developer",
    "Microservices Engineer",
    "Backend Developer",
    "Software Engineer"
  ],
  heroSubtitle: "Java • Spring Boot • Microservices • Distributed Systems",
  bioTitle: "I'm Anurag Khonde.",
  bioSubtitle: "Backend Software Engineer specializing in Java & Distributed Systems",
  aboutText: `I am a backend-focused Software Engineer with a deep passion for building high-throughput server-side applications, microservices architectures, and event-driven systems. Focused primarily on Java, Spring Boot, Kafka, gRPC, C# .NET, and PostgreSQL, I bring hands-on experience in building scalable REST APIs, relational data modeling, and clean, maintainable server architectures.`,
  profileImage: "./profile.png",
  cvUrl: "./resume.pdf",

  experiences: [
    {
      id: "simplify-healthcare-ase",
      company: "Simplify Healthcare",
      role: "Associate Software Engineer",
      period: "JUL 2026 – CURRENT",
      location: "Pune, Maharashtra",
      description: "Worked on Nova, migrating multiple healthcare insurance applications into a unified platform. Resolved application bugs across Agile sprints, executed PostgreSQL operations, collaborated with QA/UI, and used observability monitoring.",
      technologies: ["C#", ".NET", "PostgreSQL", "CQRS", "Agile/Scrum", "Observability"]
    },
    {
      id: "simplify-healthcare-intern",
      company: "Simplify Healthcare",
      role: "Software Engineer Intern",
      period: "JAN 2026 – JUN 2026",
      location: "Pune, Maharashtra",
      description: "Delivered development tasks for application migration, resolved bugs across modules, executed PostgreSQL queries/stored procedures, and performed end-to-end integration testing.",
      technologies: ["C#", ".NET", "PostgreSQL", "Agile/Scrum", "Npgsql", "Monitoring"]
    },
    {
      id: "uptoskills",
      company: "UptoSkills",
      role: "Web Development Intern",
      period: "JAN 2025 – APR 2025",
      location: "Remote / Pune",
      description: "Developed and integrated RESTful APIs using Spring Boot, worked with Spring Data JPA and MySQL for data persistence, and contributed to responsive UI development.",
      technologies: ["Spring Boot", "Spring Data JPA", "MySQL", "REST API", "JavaScript", "React.js"]
    }
  ],

  capabilities: [
    {
      id: "backend-dev",
      title: "Backend Development",
      tags: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate", "REST APIs"],
      description: "Build scalable, robust, and maintainable enterprise backend applications and RESTful APIs with clean object-oriented architecture."
    },
    {
      id: "microservices",
      title: "Microservices Architecture",
      tags: ["Spring Boot", "gRPC", "Kafka", "Docker", "Service Communication"],
      description: "Design and implement modular microservices architectures with low-latency inter-service communication and containerization."
    },
    {
      id: "api-dev",
      title: "API Development & Security",
      tags: ["REST", "gRPC", "Spring Security", "JWT", "API Integration"],
      description: "Design secure, documented, and well-structured APIs with JWT authentication, role-based access control, and payload validation."
    },
    {
      id: "database-layer",
      title: "Database & Data Layer",
      tags: ["PostgreSQL", "MySQL", "JPA", "Hibernate", "Redis"],
      description: "Design normalized data-access layers, write optimized SQL queries, manage database migrations, and implement Redis caching."
    },
    {
      id: "event-driven",
      title: "Event-Driven Systems",
      tags: ["Apache Kafka", "Producers", "Consumers", "Event Architecture"],
      description: "Build asynchronous, decoupled microservices workflows using Apache Kafka event streams for high-concurrency event processing."
    },
    {
      id: "api-integration",
      title: "API & Payload Integration",
      tags: ["REST APIs", "JSON Payload", "HTTP Protocol", "Postman", "CORS"],
      description: "Design and implement RESTful API contracts, request/response payload serialization, and seamless HTTP integration for client applications."
    }
  ],

  skillCategories: [
    {
      category: "Backend Core",
      items: ["Java", "Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate", "Spring Security", "REST APIs", "Microservices", "gRPC", "C#", ".NET"]
    },
    {
      category: "Messaging & Distributed Systems",
      items: ["Apache Kafka", "Event-Driven Architecture", "Distributed Systems", "Inter-Service Communication"]
    },
    {
      category: "Databases & Storage",
      items: ["PostgreSQL", "MySQL", "JPA / Hibernate", "Redis"]
    },
    {
      category: "Web Fundamentals & Templating",
      items: ["HTML5", "CSS3", "Thymeleaf", "HTTP/REST Protocols", "JSON Data Modeling"]
    },
    {
      category: "DevOps & Tools",
      items: ["Docker", "Git", "Maven", "Linux / WSL", "IntelliJ IDEA", "Postman"]
    }
  ],

  currentlyLearning: {
    category: "Currently Learning & Exploring",
    items: ["Spring AI", "Cloud (AWS)", "Kubernetes", "Advanced Distributed Systems"]
  },

  projects: [
    {
      id: "lifenote",
      title: "LifeNote",
      subtitle: "Java • Git-Versioned Personal Note Platform",
      featured: true,
      description: "A secure personal note management platform featuring Git-inspired version control, change tracking, and server-side persistence built with Java and Spring Boot.",
      techStack: ["Java", "Spring Boot", "Git Control", "PostgreSQL", "REST APIs"],
      githubUrl: "https://github.com/AKSTAR1147/lifeNote"
    },
    {
      id: "personal-finance-manager",
      title: "Personal Finance Manager",
      subtitle: "Java • Financial Backend & Analytics Service",
      featured: false,
      description: "A backend service for managing income, expense analytics, budget tracking, and transaction categorization with secure database persistence.",
      techStack: ["Java", "Spring Boot", "MySQL", "REST APIs", "JSON Payload"],
      githubUrl: "https://github.com/AKSTAR1147/personal-finance-manager"
    },
    {
      id: "blogspot",
      title: "BlogSpot",
      subtitle: "Spring Boot • Web Templating & Security",
      featured: false,
      description: "Full-featured web blogging platform with Spring Boot backend, Spring Security authentication, dynamic Thymeleaf templating, and post management.",
      techStack: ["Spring Boot", "Spring Security", "Thymeleaf", "HTML", "CSS", "MySQL"],
      githubUrl: "https://github.com/AKSTAR1147/my_blogspot"
    }
  ],

  architectureNodes: [
    {
      id: "react-client",
      title: "Client / Web Browser",
      type: "frontend",
      description: "Client Application & HTTP Request Entry",
      tech: "HTTP, JSON Payload, REST",
      details: "Sends HTTP REST requests with JWT bearer tokens to the backend entry point (inspected via Browser DevTools Network Tab)."
    },
    {
      id: "api-gateway",
      title: "API Gateway",
      type: "gateway",
      description: "Entry Gateway & Router",
      tech: "Spring Cloud Gateway",
      details: "Handles request routing, rate limiting, JWT validation, and CORS policy enforcement before passing traffic to microservices."
    },
    {
      id: "patient-service",
      title: "Patient Service",
      type: "service",
      description: "Patient Identity & Profile Microservice",
      tech: "Java, Spring Boot, Spring Data JPA",
      details: "Manages patient profiles and medical histories. Communicates with Billing Service using high-speed gRPC proto calls."
    },
    {
      id: "appointment-service",
      title: "Appointment Service",
      type: "service",
      description: "Scheduling & Booking Microservice",
      tech: "Java, Spring Boot, PostgreSQL",
      details: "Handles slot booking and state transitions. Publishes appointment creation events directly to Apache Kafka topics."
    },
    {
      id: "billing-service",
      title: "Billing Service",
      type: "service",
      description: "Invoicing & Payment Microservice",
      tech: "Java, Spring Boot, gRPC Client",
      details: "Consumes appointment events from Kafka to automatically trigger invoice generation and billing computations."
    },
    {
      id: "kafka-bus",
      title: "Apache Kafka",
      type: "messaging",
      description: "Distributed Event Bus",
      tech: "Kafka Topics, Producers & Consumers",
      details: "Enables asynchronous, decoupled messaging for appointment events, invoice notifications, and audit logging."
    },
    {
      id: "postgresql-db",
      title: "PostgreSQL Database",
      type: "database",
      description: "Relational Persistence Layer",
      tech: "PostgreSQL, Database per Service",
      details: "Isolated database instances ensuring service autonomy and data encapsulation."
    }
  ],

  engineeringInterests: [
    {
      title: "Distributed Systems",
      description: "Understanding how reliable, fault-tolerant systems communicate and operate consistently across multiple independent server instances."
    },
    {
      title: "Microservices Architecture",
      description: "Designing independently deployable, modular services with clear domain boundaries, low coupling, and robust error resilience."
    },
    {
      title: "Event-Driven Architecture",
      description: "Leveraging Apache Kafka and asynchronous messaging to build reactive, loosely coupled systems capable of processing high-volume streams."
    },
    {
      title: "Backend Performance",
      description: "Optimizing concurrency, Redis caching, database connection pooling, query execution plans, and low-latency API response times."
    },
    {
      title: "System Design & Scalability",
      description: "Architecting scalable enterprise solutions while evaluating trade-offs between consistency, availability, latency, and operational complexity."
    }
  ],

  contact: {
    name: "Anurag Khonde",
    location: "Pune, Maharashtra, India",
    email: "anuragkhonde6@gmail.com",
    formspreeEndpoint: "https://formspree.io/f/xbjnqkyv"
  },

  socials: {
    github: "https://github.com/AKSTAR1147",
    linkedin: "https://www.linkedin.com/in/anuragkhonde/",
    email: "mailto:anuragkhonde6@gmail.com"
  }
};

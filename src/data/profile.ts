export const profile = {
  name: 'Chirag Sahoo',
  nameDisplay: 'CHIRAG SAHOO',
  title: 'Tech Lead',
  location: 'Bhubaneswar, Odisha, India',
  experience: '4+ Years',
  tagline: 'Building Scalable, Secure & High-Performance Software Systems',
  secondaryLine:
    'Tech Leadership • Backend Engineering • Microservices • FinTech • Cloud',
  identity:
    'Hands-on Tech Lead and Senior Backend Engineer specializing in .NET, Microservices, distributed systems, FinTech and enterprise applications.',
  about: [
    'I combine technical leadership with hands-on software development—guiding architecture, mentoring engineers, and shipping production-grade backend systems.',
    'My experience spans FinTech and payment platforms, banking and credit-card processing, and large-scale government and enterprise applications including ERP and legal case management.',
    'I focus on microservices architecture, API design, performance optimization, code quality through reviews, and reliable production support across distributed systems.',
  ],
  footerQuote: 'CODE. ARCHITECT. LEAD. DELIVER.',
  resumePath: `${import.meta.env.BASE_URL}assets/Chirag-Sahoo-Resume.pdf`,
  contact: {
    email: 'chiragsahoo086@gmail.com',
    phone: '7000545328',
    linkedin: 'https://www.linkedin.com/in/chiragsahoo',
    // github: '' as string, // Hidden for now
  },
  targetRoles: [
    'Tech Lead',
    'Technical Lead – .NET',
    '.NET Tech Lead',
    'Lead Software Engineer',
    'Senior Backend Engineer',
    'Senior .NET Developer',
    'Backend Tech Lead',
    'Software Engineer',
    'Solution / Technical Architecture',
  ],
} as const;

export const heroBadges = [
  '.NET',
  'C#',
  'ASP.NET Core',
  'AI',
  'LLM',
  'Kafka',
  'Redis',
  'AWS',
  'Docker',
] as const;

export const snapshotMetrics = [
  {
    value: '4+',
    label: 'Years',
    description: 'Professional Experience',
    animate: true,
  },
  {
    value: 'Tech Lead',
    label: 'Since March 2026',
    description: 'Hands-on Leadership',
    animate: false,
  },
  {
    value: 'FinTech',
    label: 'Payment & Banking',
    description: 'Domain Experience',
    animate: false,
  },
  {
    value: 'Microservices',
    label: 'Backend Architecture',
    description: 'Distributed Systems',
    animate: false,
  },
  {
    value: 'Enterprise',
    label: 'Government & ERP',
    description: 'Platform Experience',
    animate: false,
  },
] as const;

export type TechCategory = {
  id: string;
  title: string;
  highlight?: boolean;
  items: string[];
};

export const techStack: TechCategory[] = [
  {
    id: 'backend',
    title: 'Backend',
    highlight: true,
    items: [
      'C#',
      '.NET Core',
      'ASP.NET Core',
      'Web API',
      'REST API',
      'Dapper',
      'Entity Framework',
      'Entity Framework Core',
      'LINQ',
      'Java',
      'Spring Boot',
      'Hibernate',
      'Rust',
      'WebSocket',
      'Cron Job',
      'Polling',
      'xUnit',
    ],
  },
  {
    id: 'ai',
    title: 'AI & Emerging Tech',
    highlight: true,
    items: ['AI', 'LLM', 'OpenAI', 'Neuralink'],
  },
  {
    id: 'architecture',
    title: 'Architecture',
    items: [
      'Microservices',
      'Distributed Systems',
      'System Design',
      'OOP',
      'SOLID',
      'Design Patterns',
      'Dependency Injection',
      'Middleware',
      'Clean Architecture',
    ],
  },
  {
    id: 'data',
    title: 'Data & Messaging',
    items: [
      'PostgreSQL',
      'PgSQL',
      'SQL Server',
      'MSSQL',
      'SQL',
      'Stored Procedures',
      'Query Optimisation',
      'Kafka',
      'Zookeeper',
      'RabbitMQ',
      'Redis',
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    items: [
      'AWS',
      'Microsoft Azure',
      'Azure',
      'Docker',
      'Kubernetes',
      'Portainer UI',
      'Jenkins',
      'CI/CD',
      'Git',
      'Bitbucket',
      'Grafana',
      'Grafana Loki',
      'Azure Functions',
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    items: [
      'Angular',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'AJAX',
      'jQuery',
    ],
  },
  {
    id: 'api',
    title: 'API & Tools',
    items: ['Postman', 'SOAP', 'WSDL', 'SOAP UI', 'WebSocket'],
  },
  {
    id: 'practices',
    title: 'Practices',
    items: [
      'Agile/Scrum',
      'TDD',
      'xUnit',
      'Technical Leadership',
      'Mentoring',
      'Code Reviews',
      'DevSecOps',
    ],
  },
  {
    id: 'payments',
    title: 'Payments & Card Networks',
    highlight: true,
    items: [
      'Mastercard Simulator',
      'Visa Simulator',
      'PayShield',
      'Tokenization',
      'Advanced Encryption',
      'Hashing',
      'DE Elements',
      'Advanced Security',
      'Credit Card Processing',
      'ISO 8583',
      '3D Secure',
      'Payment Gateway Integration',
      'BBPS',
      'AEPS',
      'DMT',
      'UPI',
      'NACH',
    ],
  },
];

export const architectureFlow = [
  'Client',
  'API / Gateway',
  '.NET / Spring Boot Services',
  'Microservices',
  'Kafka',
  'Redis',
  'PostgreSQL / SQL',
  'Cloud / Docker / CI-CD',
] as const;

export const architectureCards = [
  {
    title: 'Microservices',
    description:
      'Designing and delivering independently deployable services with clear boundaries and scalable communication patterns.',
  },
  {
    title: 'REST API Design',
    description:
      'Building well-structured, secure REST APIs with consistent contracts for enterprise and FinTech workloads.',
  },
  {
    title: 'Distributed Systems',
    description:
      'Working across distributed backends with attention to reliability, consistency, and operational readiness.',
  },
  {
    title: 'Event-Driven Architecture',
    description:
      'Using messaging and event flows—including Kafka-based queuing—to decouple services and process workloads asynchronously.',
  },
  {
    title: 'Caching',
    description:
      'Applying Redis and caching strategies to improve responsiveness and reduce load on critical data paths.',
  },
  {
    title: 'Database Design',
    description:
      'Working with SQL Server and PostgreSQL, stored procedures, and query optimization for production systems.',
  },
  {
    title: 'Cloud & DevOps',
    description:
      'Deploying and operating services with Docker, CI/CD, cloud platforms, and observability tooling.',
  },
  {
    title: 'Performance & Reliability',
    description:
      'Focusing on production support, debugging, and performance optimization across backend platforms.',
  },
] as const;

export type CareerEntry = {
  id: string;
  company: string;
  role: string;
  period: string;
  domain: string;
  highlight?: boolean;
  promotion?: boolean;
  focus: string[];
  technologies?: string[];
  projects?: string[];
};

export const careerTimeline: CareerEntry[] = [
  {
    id: 'corecard-intern',
    company: 'CoreCard Software',
    role: 'Intern',
    period: 'Internship',
    domain: 'Banking / Credit Card Processing',
    technologies: ['.NET', 'C#', 'Microservices', 'SQL'],
    projects: [
      'Mastercard Simulator',
      'Visa Simulator',
      'DE Elements',
    ],
    focus: [
      'Credit card transaction fundamentals',
      'Banking microservices exposure',
      'Card network processing concepts',
      'Mastercard Simulator',
      'Visa Simulator',
      'DE Elements',
      'Agile development',
      'Debugging and learning production systems',
    ],
  },
  {
    id: 'corecard',
    company: 'CoreCard Software',
    role: 'Associate .NET Developer',
    period: 'July 2022 – April 2024',
    domain: 'Banking / Credit Card Processing',
    technologies: [
      '.NET',
      'C#',
      'ASP.NET Core',
      'Web API',
      'Entity Framework',
      'Microservices',
      'Kafka',
      'Zookeeper',
      'RabbitMQ',
      'Redis',
      'WebSocket',
      'MSSQL',
      'PostgreSQL',
      'Docker',
      'Portainer UI',
      'Azure',
      'AWS',
      'Jenkins',
      'CI/CD',
      'Grafana Loki',
      'Cron Job',
      'Postman',
      'xUnit',
      'Mastercard Simulator',
      'Visa Simulator',
      'PayShield',
      'Tokenization',
      'Advanced Encryption',
      'Hashing',
      'DE Elements',
      'Advanced Security',
    ],
    projects: [
      'Mastercard Simulator',
      'Visa Simulator',
      'PayShield',
      'Tokenization',
      'Advanced Encryption',
      'Hashing',
      'DE Elements',
      'Advanced security',
    ],
    focus: [
      'Banking microservices',
      'Credit-card transaction processing',
      'Mastercard Simulator',
      'Visa Simulator',
      'PayShield',
      'Tokenization',
      'Advanced encryption',
      'Hashing',
      'DE Elements',
      'Advanced security',
      'Enterprise software development',
      'Production systems',
      'CI/CD',
      'Code reviews',
      'Debugging',
      'Agile development',
    ],
  },
  {
    id: 'bankify',
    company: 'Bankify',
    role: 'Software Developer',
    period: 'Prior Role',
    domain: 'FinTech / Payment Technology',
    technologies: [
      '.NET',
      'C#',
      'ASP.NET Core',
      'Java',
      'Spring Boot',
      'Hibernate',
      'Microservices',
      'Kafka',
      'Zookeeper',
      'RabbitMQ',
      'Redis',
      'WebSocket',
      'Polling',
      'REST APIs',
      'Entity Framework',
      'MSSQL',
      'PostgreSQL',
      'Azure',
      'AWS',
      'Docker',
      'Portainer UI',
      'Grafana Loki',
      'Jenkins',
      'CI/CD',
      'Cron Job',
      'Postman',
      'xUnit',
    ],
    projects: [
      'BBPS',
      'AEPS',
      'DMT',
      'IME',
      'NACH',
      'UPI',
      'QR Login / Authentication',
      'Cashfree payment gateway integration',
    ],
    focus: [
      'Payment services',
      'Financial transaction processing',
      'API integrations',
      'Event-driven processing',
      'Kafka-based queuing',
      'RabbitMQ messaging',
      'Redis caching',
      'Polling-based processing',
      'Java / Spring Boot services',
      'Hibernate data access',
      'Backend services',
      'FinTech applications',
    ],
  },
  {
    id: 'oasys-se',
    company: 'Oasys Tech Solutions',
    role: 'Software Engineer',
    period: 'November 2025 – March 2026',
    domain: 'Government & Enterprise Applications',
    projects: [
      'RCS Odisha',
      'RCS Jharkhand',
      'RCS Bihar',
      'HED – Higher Education Department',
      'ERP – College & University Management System',
      'LCMs – Legal Case Management System',
    ],
    focus: [
      'Backend development',
      'API development',
      'Solution design',
      'Production support',
      'Cross-functional collaboration',
    ],
  },
  {
    id: 'oasys-tl',
    company: 'Oasys Tech Solutions',
    role: 'Tech Lead',
    period: 'March 2026 – Present',
    domain: 'Government & Enterprise Applications',
    highlight: true,
    promotion: true,
    projects: [
      'RCS Odisha',
      'RCS Jharkhand',
      'RCS Bihar',
      'HED – Higher Education Department',
      'ERP – College & University Management System',
      'LCMs – Legal Case Management System',
    ],
    focus: [
      'Technical leadership',
      'Requirement analysis',
      'Solution design',
      'Microservices architecture',
      'API development',
      'Code reviews',
      'Developer mentoring',
      'Task planning and delegation',
      'Technical guidance',
      'Production support',
      'Performance optimization',
      'Cross-functional collaboration',
      'Hands-on backend development',
    ],
  },
];

export type ProjectItem = {
  name: string;
  domain: string;
  tags: string[];
  description: string;
};

export const projectCategories: {
  id: string;
  title: string;
  projects: ProjectItem[];
}[] = [
  {
    id: 'fintech',
    title: 'FinTech & Payments',
    projects: [
      {
        name: 'BBPS',
        domain: 'FinTech / Payments',
        tags: [
          '.NET Core',
          'C#',
          'Microservices',
          'REST APIs',
          'Kafka',
          'Redis',
          'High Availability',
        ],
        description:
          'End-to-end Bharat Bill Payment System module for real-time bill payment processing on fintech microservices.',
      },
      {
        name: 'AEPS',
        domain: 'FinTech / Payments',
        tags: ['.NET Core', 'C#', 'REST APIs', 'Microservices', 'API Integration'],
        description:
          'Aadhaar Enabled Payment System integration expanding platform reach for rural banking payment flows.',
      },
      {
        name: 'DMT',
        domain: 'FinTech / Payments',
        tags: ['.NET', 'Microservices', 'Kafka', 'Redis', 'Docker'],
        description:
          'Domestic Money Transfer flows supporting seamless merchant payouts and financial transaction processing.',
      },
      {
        name: 'IME',
        domain: 'FinTech / Payments',
        tags: ['.NET', 'REST APIs', 'Microservices', 'API Integration'],
        description:
          'International money transfer API integration for cross-border remittance capabilities.',
      },
      {
        name: 'QR Authentication',
        domain: 'FinTech / Security',
        tags: ['.NET', 'C#', 'REST APIs', 'Tokenised Authentication'],
        description:
          'Tokenised QR-based secure login eliminating password-based vulnerabilities in payment applications.',
      },
      {
        name: 'Cashfree Payment Gateway',
        domain: 'FinTech / Gateway Integration',
        tags: ['.NET', 'REST APIs', 'Payment Gateway', 'API Integration'],
        description:
          'Cashfree payment gateway integration for merchant payouts and payment processing workflows.',
      },
      {
        name: 'Payment Microservices',
        domain: 'FinTech / Event-Driven',
        tags: ['Kafka', 'Redis', 'Docker', 'Microservices', '.NET', 'Event-Driven'],
        description:
          'Event-driven, containerised payment microservices using Kafka messaging and Redis caching for high-throughput transactions.',
      },
      {
        name: 'Card Network Processing',
        domain: 'Banking / Card Networks',
        tags: [
          'Mastercard Simulator',
          'Visa Simulator',
          'PayShield',
          'Tokenization',
          'Advanced Encryption',
          'Hashing',
          'DE Elements',
          'Advanced Security',
          '.NET',
          'Microservices',
        ],
        description:
          'Implementation work with Mastercard Simulator and Visa Simulator, including PayShield, tokenization, advanced encryption, hashing, and DE Elements in banking microservices.',
      },
    ],
  },
  {
    id: 'enterprise',
    title: 'Government & Enterprise',
    projects: [
      {
        name: 'RCS Odisha',
        domain: 'Government Applications',
        tags: [
          'ASP.NET Core',
          'Microservices',
          'REST APIs',
          'Middleware',
          'SQL',
        ],
        description:
          'Multi-state government cooperative society management portal — backend APIs, microservices, and secure data workflows.',
      },
      {
        name: 'RCS Jharkhand',
        domain: 'Government Applications',
        tags: ['ASP.NET Core', 'Microservices', 'REST APIs', 'C#'],
        description:
          'Government cooperative society platform delivery with scalable backend services and regulatory data workflows.',
      },
      {
        name: 'RCS Bihar',
        domain: 'Government Applications',
        tags: ['ASP.NET Core', 'Microservices', 'REST APIs', 'Dependency Injection'],
        description:
          'Backend services for RCS Bihar cooperative management with secure authentication and API integrations.',
      },
      {
        name: 'HED – Higher Education Department',
        domain: 'Higher Education',
        tags: ['ASP.NET Core', 'REST APIs', 'Microservices', 'SQL'],
        description:
          'Government education portal with scalable enrollment and data management REST APIs for institutions and students.',
      },
      {
        name: 'ERP – College & University Management',
        domain: 'ERP / Higher Education',
        tags: ['ASP.NET Core', 'ERP', 'REST APIs', 'C#'],
        description:
          'College and university management ERP experience for academic and administrative backend processes.',
      },
      {
        name: 'LCMs – Legal Case Management System',
        domain: 'Legal / Enterprise',
        tags: ['ASP.NET Core', 'Enterprise', 'REST APIs', 'C#'],
        description:
          'Legal case management system experience for enterprise case handling and workflow-backed APIs.',
      },
    ],
  },
];

export const leadershipAreas = [
  {
    title: 'Technical Direction',
    description:
      'Setting technical direction and aligning engineering decisions with product and delivery goals.',
  },
  {
    title: 'Architecture & Design',
    description:
      'Driving solution design, microservices architecture, and scalable backend patterns.',
  },
  {
    title: 'Code Reviews',
    description:
      'Maintaining code quality, consistency, and maintainability through structured peer review.',
  },
  {
    title: 'Developer Mentoring',
    description:
      'Guiding engineers with technical coaching, best practices, and hands-on support.',
  },
  {
    title: 'Requirement Analysis',
    description:
      'Translating business needs into clear technical requirements and actionable designs.',
  },
  {
    title: 'Task Planning',
    description:
      'Planning, prioritizing, and delegating work to keep delivery predictable and focused.',
  },
  {
    title: 'Technical Problem Solving',
    description:
      'Diagnosing complex issues across services, data flows, and production environments.',
  },
  {
    title: 'Production Support',
    description:
      'Owning production readiness, incident response, and continuous system reliability.',
  },
  {
    title: 'Cross-functional Collaboration',
    description:
      'Working closely with stakeholders, product, and engineering teams to deliver outcomes.',
  },
] as const;

export const fintechHighlights = [
  'BBPS',
  'AEPS',
  'DMT',
  'IME',
  'NACH',
  'UPI',
  'Mastercard Simulator',
  'Visa Simulator',
  'PayShield',
  'Tokenization',
  'Advanced Encryption',
  'Hashing',
  'DE Elements',
  'Advanced Security',
  'Payment Gateway Integration',
  'Banking Systems',
  'Credit Card Processing',
  'Transaction Processing',
  'Kafka',
  'Redis',
  'Microservices',
] as const;

export const navLinks = [
  { href: '#top', label: 'Home', id: 'top' },
  { href: '#about', label: 'About', id: 'about' },
  { href: '#career', label: 'Experience', id: 'career' },
  { href: '#tech', label: 'Skills', id: 'tech' },
  { href: '#architecture', label: 'Architecture', id: 'architecture' },
  { href: '#projects', label: 'Projects', id: 'projects' },
  { href: '#leadership', label: 'Leadership', id: 'leadership' },
  { href: '#contact', label: 'Contact', id: 'contact' },
] as const;

export const heroSupportLine =
  '.NET • C# • Microservices • AI • LLM • Cloud • FinTech';

export const orbitTechnologies = [
  '.NET',
  'C#',
  'AI',
  'LLM',
  'OpenAI',
  'Kafka',
  'Redis',
  'AWS',
  'Docker',
] as const;

export const leadershipFlow = [
  'TECH LEAD',
  'ARCHITECTURE',
  'ENGINEERING',
  'DELIVERY',
  'IMPACT',
] as const;

export const architectureNodes = [
  {
    id: 'client',
    label: 'Client',
    detail: 'Entry point for applications and user interfaces consuming backend services.',
  },
  {
    id: 'api',
    label: 'API / Gateway',
    detail: 'API surface for secure, consistent access to backend capabilities.',
  },
  {
    id: 'services',
    label: '.NET / Spring Boot',
    detail: 'Service layer for business logic across .NET and Spring Boot backends.',
  },
  {
    id: 'micro',
    label: 'Microservices',
    detail: 'Scalable service-oriented architecture with clear boundaries.',
  },
  {
    id: 'kafka',
    label: 'Kafka',
    detail: 'Event-driven messaging and asynchronous processing.',
  },
  {
    id: 'redis',
    label: 'Redis',
    detail: 'Caching and high-performance data access.',
  },
  {
    id: 'db',
    label: 'PostgreSQL / SQL',
    detail: 'Reliable data persistence with SQL platforms and query optimization.',
  },
  {
    id: 'cloud',
    label: 'Cloud / Docker / CI-CD',
    detail: 'Cloud delivery, containerization, and continuous integration/deployment.',
  },
] as const;

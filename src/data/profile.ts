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
  footerQuote: 'Code. Architect. Lead. Deliver.',
  resumePath: '/assets/Chirag-Sahoo-Resume.pdf',
  contact: {
    email: '' as string, // e.g. "chirag@example.com"
    phone: '' as string, // e.g. "+91 XXXXX XXXXX"
    linkedin: '' as string, // e.g. "https://linkedin.com/in/your-profile"
    github: '' as string, // e.g. "https://github.com/your-username"
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
  'Spring Boot',
  'Rust',
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
      'Java',
      'Spring Boot',
      'Rust',
    ],
  },
  {
    id: 'architecture',
    title: 'Architecture',
    items: [
      'Microservices',
      'Distributed Systems',
      'System Design',
      'SOLID',
      'Design Patterns',
      'Dependency Injection',
      'Middleware',
    ],
  },
  {
    id: 'data',
    title: 'Data & Messaging',
    items: ['PostgreSQL', 'SQL', 'Kafka', 'Redis', 'Zookeeper'],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    items: [
      'AWS',
      'Azure',
      'Docker',
      'Jenkins',
      'CI/CD',
      'Git',
      'Bitbucket',
      'Grafana',
      'Kubernetes',
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    items: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    id: 'api',
    title: 'API & Tools',
    items: ['Postman', 'SOAP', 'WSDL', 'SOAP UI'],
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
    id: 'corecard',
    company: 'CoreCard Software',
    role: 'Associate .NET Developer',
    period: 'Earlier Role',
    domain: 'Banking / Credit Card Processing',
    focus: [
      'Banking microservices',
      'Credit-card transaction processing',
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
    technologies: ['.NET', 'C#', 'Microservices', 'Kafka', 'Redis', 'REST APIs'],
    projects: [
      'BBPS',
      'AEPS',
      'DMT',
      'IME',
      'QR Login / Authentication',
      'Cashfree payment gateway integration',
    ],
    focus: [
      'Payment services',
      'Financial transaction processing',
      'API integrations',
      'Event-driven processing',
      'Kafka-based queuing',
      'Redis caching',
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
        tags: ['.NET', 'Microservices', 'REST APIs', 'Kafka', 'Redis'],
        description:
          'Backend work on Bharat Bill Payment System capabilities within payment technology platforms.',
      },
      {
        name: 'AEPS',
        domain: 'FinTech / Payments',
        tags: ['.NET', 'C#', 'REST APIs', 'Microservices'],
        description:
          'Support for Aadhaar Enabled Payment System flows in FinTech backend services.',
      },
      {
        name: 'DMT',
        domain: 'FinTech / Payments',
        tags: ['.NET', 'Microservices', 'Kafka', 'Redis'],
        description:
          'Domestic Money Transfer related payment services and transaction processing.',
      },
      {
        name: 'IME',
        domain: 'FinTech / Payments',
        tags: ['.NET', 'REST APIs', 'Microservices'],
        description:
          'International Money Exchange related payment and remittance backend capabilities.',
      },
      {
        name: 'QR Authentication',
        domain: 'FinTech / Security',
        tags: ['.NET', 'C#', 'REST APIs'],
        description:
          'QR-based login and authentication flows for secure access in payment applications.',
      },
      {
        name: 'Cashfree Payment Gateway',
        domain: 'FinTech / Gateway Integration',
        tags: ['.NET', 'REST APIs', 'API Integration'],
        description:
          'Integration work with Cashfree payment gateway for payment processing workflows.',
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
        tags: ['Enterprise', 'Backend', 'APIs'],
        description:
          'Enterprise government platform experience supporting RCS Odisha initiatives.',
      },
      {
        name: 'RCS Jharkhand',
        domain: 'Government Applications',
        tags: ['Enterprise', 'Backend', 'APIs'],
        description:
          'Government application delivery experience for RCS Jharkhand.',
      },
      {
        name: 'RCS Bihar',
        domain: 'Government Applications',
        tags: ['Enterprise', 'Backend', 'APIs'],
        description:
          'Backend and platform contributions for RCS Bihar government systems.',
      },
      {
        name: 'HED – Higher Education Department',
        domain: 'Higher Education',
        tags: ['Enterprise', 'Backend', 'APIs'],
        description:
          'Higher Education Department platform experience across institutional workflows.',
      },
      {
        name: 'ERP – College & University Management',
        domain: 'ERP / Higher Education',
        tags: ['ERP', 'Enterprise', 'Backend'],
        description:
          'College and university management ERP experience for academic and administrative processes.',
      },
      {
        name: 'LCMs – Legal Case Management System',
        domain: 'Legal / Enterprise',
        tags: ['Enterprise', 'Backend', 'APIs'],
        description:
          'Legal case management system experience for enterprise case and workflow handling.',
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
  'Payment Gateway Integration',
  'Banking Systems',
  'Credit Card Processing',
  'Transaction Processing',
  'Kafka',
  'Redis',
  'Microservices',
] as const;

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#tech', label: 'Tech Stack' },
  { href: '#architecture', label: 'Architecture' },
  { href: '#career', label: 'Career' },
  { href: '#projects', label: 'Projects' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#fintech', label: 'FinTech' },
  { href: '#contact', label: 'Contact' },
] as const;

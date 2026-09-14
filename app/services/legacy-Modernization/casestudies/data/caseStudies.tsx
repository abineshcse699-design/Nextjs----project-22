// app/services/legacy-modernization/data/caseStudies.tsx

export type CaseStudy = {
  slug: string;
  image: string;
  heroImage: string;

  title: string;
  body: string;

  client: string;
  industry: string;
  duration: string;

  overview: string;
  challenge: string;
  solution: string;
  results: string;

  services: string[];
  benefits: string[];
  technologies: string[];

  stats: {
    value: string;
    label: string;
  }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "reinsurance-mainframe-application-modernization",

    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=900&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1800&auto=format&fit=crop",

    title:
      "Starfii Modernizes a Legacy Mainframe for a Global Reinsurer",

    body:
      "Explore how Starfii re engineered a decades old mainframe claims system into a modern, cloud ready platform, reducing processing complexity and creating a stronger foundation for future digital growth.",

    client: "Global Reinsurance Company",

    industry: "Insurance & Reinsurance",

    duration: "12 Months",

    overview:
      "A global reinsurer relied on a decades old mainframe claims platform that supported critical business operations. While the platform remained reliable, its aging technology made application changes expensive, integrations difficult, and modernization increasingly important.",

    challenge:
      "The claims platform contained years of embedded business rules and tightly coupled dependencies. Development teams faced long release cycles, limited integration options, increasing maintenance effort, and growing dependency on specialized legacy technology skills.",

    solution:
      "Starfii began with a detailed legacy assessment covering applications, dependencies, interfaces, data flows, and business rules. Critical workloads were then progressively re engineered and exposed through modern APIs while the existing platform continued supporting day to day business operations.",

    results:
      "The reinsurer moved toward a more maintainable and integration ready platform without a disruptive big bang replacement. Processing became more efficient, application changes became easier to deliver, and the organization gained a clear foundation for continued modernization.",

    services: [
      "Legacy Assessment",
      "Application Modernization",
      "Mainframe Re engineering",
      "API Modernization",
      "Cloud Migration",
    ],

    benefits: [
      "Reduced legacy technology dependency",
      "Faster application release cycles",
      "Improved system integration",
      "Lower long term maintenance complexity",
      "Preserved critical business logic",
      "Improved foundation for cloud adoption",
    ],

    technologies: [
      "Mainframe Modernization",
      "Application Re engineering",
      "REST APIs",
      "Cloud Architecture",
      "Database Modernization",
      "CI/CD",
      "Microservices",
      "Application Dependency Mapping",
    ],

    stats: [
      {
        value: "42%",
        label: "Faster claims processing",
      },
      {
        value: "35%",
        label: "Shorter release cycles",
      },
      {
        value: "30%",
        label: "Lower maintenance effort",
      },
    ],
  },

  {
    slug: "regional-bank-core-banking-replatform",

    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=900&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1800&auto=format&fit=crop",

    title:
      "Starfii Re Platforms Core Banking Systems for a Regional Bank",

    body:
      "See how Starfii's re platforming approach moved a legacy core banking system toward modern cloud infrastructure while reducing operational complexity and creating a scalable foundation for future growth.",

    client: "Regional Banking Institution",

    industry: "Banking & Financial Services",

    duration: "10 Months",

    overview:
      "A regional bank was operating a stable but aging core banking environment. The platform supported critical customer and transaction workflows, but its infrastructure limited scalability and made ongoing modernization increasingly difficult.",

    challenge:
      "The bank needed to modernize its core banking environment without disrupting customer transactions. A complete rewrite would introduce unnecessary delivery risk, while continuing with the existing platform would increase technical debt and operating complexity.",

    solution:
      "Starfii designed a phased re platforming strategy that moved core workloads onto modern infrastructure with targeted application changes. The program included dependency analysis, migration planning, data validation, testing, cutover preparation, and rollback controls.",

    results:
      "The bank gained a more flexible and scalable technology foundation without undertaking a high risk ground up rewrite. Infrastructure operations became easier to manage, modernization risk was reduced, and the platform was prepared for future application modernization.",

    services: [
      "Legacy Assessment",
      "Re platforming",
      "Cloud Migration",
      "Database Modernization",
      "Application Modernization",
    ],

    benefits: [
      "Improved infrastructure scalability",
      "Reduced infrastructure maintenance effort",
      "Lower modernization risk",
      "Improved operational flexibility",
      "Stronger cloud foundation",
      "Minimal disruption to banking operations",
    ],

    technologies: [
      "Cloud Infrastructure",
      "Application Re platforming",
      "Database Migration",
      "API Integration",
      "Infrastructure Automation",
      "CI/CD",
      "Observability",
      "Automated Testing",
    ],

    stats: [
      {
        value: "99.99%",
        label: "Platform availability",
      },
      {
        value: "38%",
        label: "Lower infrastructure overhead",
      },
      {
        value: "2.5x",
        label: "Improved deployment frequency",
      },
    ],
  },

  {
    slug: "utilities-legacy-data-migration",

    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=900&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1800&auto=format&fit=crop",

    title:
      "Legacy Data Migration for a Utilities Provider",

    body:
      "Discover how Starfii migrated decades of legacy operational data into a modern database architecture, improving data accessibility and creating a stronger foundation for analytics.",

    client: "Regional Utilities Provider",

    industry: "Energy & Utilities",

    duration: "8 Months",

    overview:
      "A utilities provider had accumulated decades of operational information across legacy databases and applications. Accessing this information was slow and often required manual processes across multiple teams.",

    challenge:
      "The existing database environment contained inconsistent structures, legacy dependencies, and tightly coupled applications. The organization needed to modernize its data foundation while protecting data integrity and maintaining operational continuity.",

    solution:
      "Starfii assessed the legacy database landscape, mapped dependencies, defined migration priorities, and designed a modern data architecture. Migration was executed in controlled phases with validation and reconciliation throughout the program.",

    results:
      "The utilities provider gained a more accessible and scalable data foundation. Teams can work with operational information more efficiently, while the organization now has a stronger platform for analytics and future digital applications.",

    services: [
      "Legacy Assessment",
      "Database Modernization",
      "Data Migration",
      "Cloud Data Architecture",
    ],

    benefits: [
      "Improved data accessibility",
      "Reduced legacy database dependency",
      "Improved data quality",
      "Faster operational data access",
      "Scalable analytics foundation",
      "Lower database maintenance complexity",
    ],

    technologies: [
      "Database Modernization",
      "Data Migration",
      "Cloud Data Platform",
      "ETL Pipelines",
      "Data Validation",
      "Data Reconciliation",
      "API Integration",
      "Data Governance",
    ],

    stats: [
      {
        value: "60%",
        label: "Faster data access",
      },
      {
        value: "45%",
        label: "Lower manual data effort",
      },
      {
        value: "99.9%",
        label: "Validated migration accuracy",
      },
    ],
  },

  {
    slug: "insurance-api-modernization",

    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=900&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1800&auto=format&fit=crop",

    title:
      "Starfii Modernizes Legacy APIs for a National Insurer",

    body:
      "Learn how Starfii replaced brittle point to point integrations with modern APIs, improving system connectivity and simplifying partner onboarding.",

    client: "National Insurance Provider",

    industry: "Insurance",

    duration: "7 Months",

    overview:
      "A national insurer depended on aging point to point integrations that made connecting new partners, digital channels, and internal applications unnecessarily complex.",

    challenge:
      "Legacy interfaces were tightly coupled to internal applications. Each new integration required custom development, increasing maintenance effort and slowing partner onboarding.",

    solution:
      "Starfii redesigned the integration layer around secure and reusable APIs. Existing interfaces were assessed and progressively modernized, documented, secured, and connected to the insurer's modern application ecosystem.",

    results:
      "The insurer gained a reusable API foundation that simplified integrations and reduced dependency on brittle point to point connections. New partners and applications can connect through standardized interfaces.",

    services: [
      "API Modernization",
      "Integration Modernization",
      "Application Modernization",
      "Security Modernization",
    ],

    benefits: [
      "Faster partner onboarding",
      "Reusable API capabilities",
      "Reduced point to point integrations",
      "Improved API security",
      "Better developer experience",
      "Simpler integration maintenance",
    ],

    technologies: [
      "REST APIs",
      "API Gateway",
      "OAuth 2.0",
      "Microservices",
      "API Management",
      "Integration Architecture",
      "Monitoring",
      "Automated Testing",
    ],

    stats: [
      {
        value: "65%",
        label: "Faster partner onboarding",
      },
      {
        value: "40%",
        label: "Fewer point to point integrations",
      },
      {
        value: "3x",
        label: "Faster API delivery",
      },
    ],
  },

  {
    slug: "healthcare-legacy-architecture-modernization",

    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=900&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1800&auto=format&fit=crop",

    title:
      "Starfii Modernizes a Monolithic Platform for a Healthcare Provider",

    body:
      "See how Starfii transformed a legacy monolithic platform into a modular architecture designed for scalability, maintainability, and future digital growth.",

    client: "Healthcare Services Provider",

    industry: "Healthcare",

    duration: "11 Months",

    overview:
      "A healthcare provider operated a large monolithic application that had grown over many years. The platform supported critical workflows but had become difficult to change, test, and scale.",

    challenge:
      "Small application changes required large regression testing cycles. Tight coupling between modules slowed development, while scaling the entire application created unnecessary infrastructure overhead.",

    solution:
      "Starfii analyzed application dependencies and business capabilities before defining a phased architecture modernization roadmap. High value modules were progressively separated behind modern APIs while the existing platform continued operating during the transition.",

    results:
      "The healthcare provider moved toward a modular and scalable architecture without a disruptive big bang rewrite. Development teams gained greater flexibility, deployment risk decreased, and the platform became easier to evolve.",

    services: [
      "Architecture Modernization",
      "Application Modernization",
      "API Modernization",
      "Cloud Migration",
    ],

    benefits: [
      "Reduced application coupling",
      "Faster development cycles",
      "Improved scalability",
      "Simpler testing and deployment",
      "Better API connectivity",
      "Lower long term technical debt",
    ],

    technologies: [
      "Microservices",
      "REST APIs",
      "Cloud Architecture",
      "Containerization",
      "CI/CD",
      "Application Monitoring",
      "Automated Testing",
      "Architecture Refactoring",
    ],

    stats: [
      {
        value: "45%",
        label: "Faster feature delivery",
      },
      {
        value: "50%",
        label: "Reduced deployment effort",
      },
      {
        value: "3x",
        label: "Improved application scalability",
      },
    ],
  },
];

export function getCaseStudyBySlug(
  slug: string
): CaseStudy | undefined {
  return caseStudies.find(
    (study) => study.slug === slug
  );
}
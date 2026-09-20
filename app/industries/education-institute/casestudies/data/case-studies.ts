export type CaseStudyPhase = {
  number: string;
  title: string;
  body: string;
};

export type CaseStudyStat = {
  value: string;
  label: string;
};

export type CaseStudy = {
  slug: string;
  image: string;
  title: string;
  body: string;

  client: string;
  industry: string;
  duration: string;

  overview: string;
  challenge: string;
  approach: string;
  solution: string;
  results: string;

  phases: CaseStudyPhase[];
  capabilities: string[];
  benefits: string[];
  technologies: string[];
  stats: CaseStudyStat[];

  date: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "connected-student-experience",

    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop",

    title: "Modernizing a Connected Student Experience",

    body:
      "Starfii helped modernize student-facing digital journeys, creating a more connected and scalable foundation for education services.",

    client: "Higher Education Institution",
    industry: "Education & Institutions",
    duration: "10 Months",

    overview:
      "The institution wanted to modernize its student experience across admissions, onboarding, learning, campus services, communication, and student support. Starfii created a connected digital experience that brought important services together while providing a scalable foundation for future growth.",

    challenge:
      "Students interacted with multiple disconnected digital systems across admissions, academic services, communication, forms, and campus processes. The fragmented experience made it harder to discover information and created additional operational effort for institutional teams.",

    approach:
      "Starfii mapped the complete student journey and identified the highest-friction interactions. The team then designed a connected experience across key services while introducing reusable application patterns, APIs, integrations, accessibility practices, and quality engineering.",

    solution:
      "A modern student experience layer connected admissions, onboarding, academic information, communication, forms, payments, and campus services. Reusable components and APIs helped the institution evolve individual services without rebuilding the entire experience.",

    results:
      "The institution gained a more connected student experience, improved visibility across digital journeys, and a scalable technology foundation for future education services.",

    phases: [
      {
        number: "01",
        title: "Discover",
        body:
          "Mapped student journeys, institutional systems, services, integrations, and existing digital experiences.",
      },
      {
        number: "02",
        title: "Prioritize",
        body:
          "Identified high-friction student interactions and prioritized the journeys with the greatest experience impact.",
      },
      {
        number: "03",
        title: "Design",
        body:
          "Designed connected experiences across admissions, onboarding, learning, communication, and student services.",
      },
      {
        number: "04",
        title: "Build",
        body:
          "Built reusable applications, APIs, integrations, and digital components around prioritized student journeys.",
      },
      {
        number: "05",
        title: "Scale",
        body:
          "Established a scalable foundation that allowed new services and experiences to be added over time.",
      },
    ],

    capabilities: [
      "Student experience design",
      "Digital application development",
      "Web application development",
      "API integration",
      "Education platform modernization",
      "Accessibility",
      "Quality engineering",
      "Cloud modernization",
      "Digital journey optimization",
    ],

    benefits: [
      "Connected student journeys",
      "Simplified access to services",
      "Improved digital experience",
      "Reduced experience fragmentation",
      "Reusable application foundation",
      "Scalable education technology",
    ],

    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "REST APIs",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "CI/CD",
      "Cloud Services",
    ],

    stats: [
      {
        value: "45%",
        label: "Reduction in repetitive student service interactions",
      },
      {
        value: "3X",
        label: "Faster delivery of prioritized digital journeys",
      },
      {
        value: "90%+",
        label: "Coverage across prioritized student workflows",
      },
    ],

    date: "2025-02-01",
  },

  {
    slug: "modern-education-platform",

    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600&auto=format&fit=crop",

    title: "Building a Modern Education Platform",

    body:
      "Starfii helped connect learning, administration, and institutional digital services through a modern education platform architecture.",

    client: "Education Organization",
    industry: "Education & Institutions",
    duration: "12 Months",

    overview:
      "The organization needed a stronger technology foundation connecting students, faculty, administrators, content, workflows, and institutional systems. Starfii designed a modular platform architecture that supported both existing services and future digital initiatives.",

    challenge:
      "Multiple applications and disconnected systems created integration complexity. Institutional teams needed a platform approach that could support new services without creating additional technology silos.",

    approach:
      "Starfii assessed the existing application landscape, identified shared platform capabilities, and introduced reusable APIs, services, components, integrations, and cloud infrastructure.",

    solution:
      "The resulting platform connected education workflows through modular applications and secure integrations. Common services were separated into reusable components, allowing teams to introduce new digital experiences more efficiently.",

    results:
      "The organization gained a stronger digital foundation for learning and administration, with improved integration capabilities and a more scalable approach to future education technology initiatives.",

    phases: [
      {
        number: "01",
        title: "Assess",
        body:
          "Reviewed existing applications, platforms, integrations, workflows, and technology dependencies.",
      },
      {
        number: "02",
        title: "Architect",
        body:
          "Defined a modular platform architecture around reusable services, APIs, and shared capabilities.",
      },
      {
        number: "03",
        title: "Integrate",
        body:
          "Connected institutional applications, learning services, student systems, and supporting platforms.",
      },
      {
        number: "04",
        title: "Modernize",
        body:
          "Modernized selected applications and workflows using reusable platform capabilities.",
      },
      {
        number: "05",
        title: "Scale",
        body:
          "Established patterns that allow additional services and applications to be introduced without rebuilding the platform.",
      },
    ],

    capabilities: [
      "Education platform development",
      "Platform modernization",
      "Application development",
      "API development",
      "System integration",
      "Cloud architecture",
      "Data integration",
      "Quality engineering",
      "DevOps and CI/CD",
    ],

    benefits: [
      "Stronger platform foundation",
      "Improved system integration",
      "Reusable digital capabilities",
      "Reduced technology fragmentation",
      "Faster application delivery",
      "Scalable architecture",
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "PostgreSQL",
      "AWS",
      "Docker",
      "GitHub Actions",
    ],

    stats: [
      {
        value: "40%",
        label: "Reduction in duplicated application capabilities",
      },
      {
        value: "2.5X",
        label: "Faster delivery of new platform services",
      },
      {
        value: "85%+",
        label: "Coverage across prioritized platform workflows",
      },
    ],

    date: "2025-04-01",
  },

  {
    slug: "institutional-data-and-analytics",

    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",

    title: "Connecting Institutional Data and Analytics",

    body:
      "Starfii helped bring fragmented institutional data together to improve reporting, analytics, and operational visibility.",

    client: "Higher Education Organization",
    industry: "Education & Institutions",
    duration: "9 Months",

    overview:
      "The institution needed a clearer view of student, academic, learning, and operational information. Starfii established a governed data and analytics foundation that brought information together for reporting, dashboards, and decision support.",

    challenge:
      "Important institutional information existed across multiple applications and databases. Teams spent significant time consolidating data manually, making it difficult to establish a consistent view of performance and outcomes.",

    approach:
      "Starfii mapped institutional data sources, established integration patterns, and designed governed data flows for reporting and analytics.",

    solution:
      "The solution connected key institutional data sources and provided dashboards and reporting capabilities around student, academic, operational, and engagement information.",

    results:
      "Institutional teams gained improved visibility into important operational and student information and a stronger foundation for future analytics initiatives.",

    phases: [
      {
        number: "01",
        title: "Discover",
        body:
          "Identified institutional data sources, owners, dependencies, and reporting requirements.",
      },
      {
        number: "02",
        title: "Govern",
        body:
          "Defined data controls, ownership, access patterns, and governance requirements.",
      },
      {
        number: "03",
        title: "Connect",
        body:
          "Integrated data from priority student, academic, learning, and operational systems.",
      },
      {
        number: "04",
        title: "Analyze",
        body:
          "Created reporting and analytics capabilities around prioritized institutional information.",
      },
      {
        number: "05",
        title: "Scale",
        body:
          "Established reusable data patterns for future institutional analytics initiatives.",
      },
    ],

    capabilities: [
      "Data modernization",
      "Institutional analytics",
      "Data integration",
      "Reporting and dashboards",
      "Data governance",
      "Cloud data platforms",
      "API integration",
      "Business intelligence",
      "Data quality",
    ],

    benefits: [
      "Improved institutional visibility",
      "Reduced manual reporting effort",
      "Connected data sources",
      "Better data governance",
      "Faster reporting",
      "Scalable analytics foundation",
    ],

    technologies: [
      "Python",
      "SQL",
      "REST APIs",
      "AWS",
      "PostgreSQL",
      "Power BI",
      "Data Pipelines",
      "Cloud Services",
      "CI/CD",
    ],

    stats: [
      {
        value: "50%",
        label: "Reduction in manual reporting effort",
      },
      {
        value: "3X",
        label: "Faster access to prioritized reporting",
      },
      {
        value: "90%+",
        label: "Coverage across prioritized data workflows",
      },
    ],

    date: "2025-06-01",
  },
];

export function getCaseStudyBySlug(
  slug: string
): CaseStudy | undefined {
  return caseStudies.find(
    (study) => study.slug === slug
  );
}
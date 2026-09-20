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
    slug: "connected-healthcare-experience",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop",
    title: "Modernizing a Connected Healthcare Experience",
    body:
      "A digital modernization program redesigned customer-facing healthcare journeys and strengthened the application foundation behind them.",
    client: "Healthcare Organization",
    industry: "Healthcare & Life Sciences",
    duration: "10 Months",

    overview:
      "The initiative focused on creating a more connected digital experience across discovery, access, communication, and follow-up while establishing a maintainable engineering foundation.",

    challenge:
      "The organization needed to reduce friction across digital healthcare journeys while working with existing applications, integrations, and operational processes.",

    approach:
      "Starfii used a phased discovery, experience, engineering, integration, and validation approach so the highest-value journeys could be modernized without losing sight of the broader technology landscape.",

    solution:
      "The solution combined responsive web experiences, reusable application components, API integrations, workflow improvements, accessibility, automated testing, and cloud-ready engineering practices.",

    results:
      "The resulting foundation was designed to make healthcare journeys easier to navigate, simplify future delivery, and provide a stronger base for continued digital modernization.",

    phases: [
      {
        number: "01",
        title: "Discover",
        body:
          "Map current journeys, systems, constraints, user needs, and modernization priorities.",
      },
      {
        number: "02",
        title: "Prioritize",
        body:
          "Identify the highest-value experiences and sequence the work around measurable delivery milestones.",
      },
      {
        number: "03",
        title: "Design",
        body:
          "Create accessible, responsive experiences and reusable interface patterns for priority journeys.",
      },
      {
        number: "04",
        title: "Integrate",
        body:
          "Connect applications and services through secure APIs and reusable integration patterns.",
      },
      {
        number: "05",
        title: "Scale",
        body:
          "Harden delivery, testing, observability, and engineering practices for future releases.",
      },
    ],

    capabilities: [
      "Digital healthcare modernization",
      "Patient and customer experience",
      "Application development",
      "API and system integration",
      "Responsive web applications",
      "Accessibility engineering",
      "Automated testing",
      "Cloud-ready architecture",
      "Digital workflow modernization",
    ],

    benefits: [
      "More connected digital journeys",
      "Reduced digital friction",
      "Improved application usability",
      "Reusable technology foundation",
      "Better integration across systems",
      "Stronger scalability for future services",
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "PostgreSQL",
      "AWS",
      "CI/CD",
      "Automated Testing",
    ],

    stats: [
      {
        value: "—",
        label: "Add verified client outcome",
      },
      {
        value: "—",
        label: "Add verified delivery metric",
      },
      {
        value: "—",
        label: "Add verified adoption metric",
      },
    ],

    date: "2025-04-15",
  },

  {
    slug: "scalable-healthcare-platform",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1600&auto=format&fit=crop",
    title: "Building a Scalable Healthcare Platform",
    body:
      "A platform engineering initiative connected digital experiences, integrations, and data capabilities around a more scalable technology foundation.",
    client: "Healthcare Organization",
    industry: "Healthcare & Life Sciences",
    duration: "12 Months",

    overview:
      "The program established reusable platform capabilities to support digital applications, integrations, data services, and operational workflows.",

    challenge:
      "Fragmented applications and duplicated functionality made it harder to introduce new digital capabilities consistently and efficiently.",

    approach:
      "The team assessed the existing landscape, defined target architecture, introduced reusable services, and modernized priority application and integration layers in stages.",

    solution:
      "The platform combined application modernization, API-first architecture, cloud engineering, identity and access patterns, CI/CD, automated testing, and operational visibility.",

    results:
      "The resulting platform foundation was designed to reduce duplication, improve maintainability, and give delivery teams reusable building blocks for future healthcare services.",

    phases: [
      {
        number: "01",
        title: "Assess",
        body:
          "Review the application, integration, data, and delivery landscape and identify modernization opportunities.",
      },
      {
        number: "02",
        title: "Architect",
        body:
          "Define reusable platform patterns, service boundaries, integration contracts, and non-functional requirements.",
      },
      {
        number: "03",
        title: "Modernize",
        body:
          "Refactor priority capabilities and introduce reusable services without requiring a single large migration.",
      },
      {
        number: "04",
        title: "Integrate",
        body:
          "Connect applications and enterprise systems through consistent API and integration patterns.",
      },
      {
        number: "05",
        title: "Operationalize",
        body:
          "Strengthen CI/CD, testing, monitoring, security, and release practices for sustainable delivery.",
      },
    ],

    capabilities: [
      "Healthcare platform modernization",
      "Application modernization",
      "API-first architecture",
      "System integration",
      "Cloud engineering",
      "Identity and access",
      "CI/CD implementation",
      "Automated testing",
      "Platform observability",
    ],

    benefits: [
      "More maintainable architecture",
      "Reusable platform services",
      "Simpler system integration",
      "Faster application delivery",
      "Improved scalability",
      "Better operational visibility",
    ],

    technologies: [
      "React",
      "Next.js",
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
        value: "—",
        label: "Add verified client outcome",
      },
      {
        value: "—",
        label: "Add verified delivery metric",
      },
      {
        value: "—",
        label: "Add verified platform metric",
      },
    ],

    date: "2025-06-10",
  },

  {
    slug: "healthcare-data-and-analytics",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    title: "Modernizing Data and Analytics",
    body:
      "A data modernization approach brought fragmented information into governed analytics workflows for stronger operational visibility.",
    client: "Healthcare Organization",
    industry: "Healthcare & Life Sciences",
    duration: "9 Months",

    overview:
      "The initiative created a governed foundation for bringing operational information together and making reporting and analytics easier to use.",

    challenge:
      "Important information was distributed across systems and manual reporting processes, making consistent visibility difficult.",

    approach:
      "The work focused on data discovery, governance, integration, pipeline design, reporting priorities, and role-based access.",

    solution:
      "The solution connected source systems through repeatable data pipelines and exposed governed information through dashboards, reporting workflows, and analytics services.",

    results:
      "The resulting data foundation was designed to reduce manual reporting effort, improve consistency, and make important operational information easier to access.",

    phases: [
      {
        number: "01",
        title: "Discover",
        body:
          "Identify source systems, reporting needs, data owners, quality issues, and priority information flows.",
      },
      {
        number: "02",
        title: "Govern",
        body:
          "Define data ownership, access patterns, quality rules, and governance requirements.",
      },
      {
        number: "03",
        title: "Connect",
        body:
          "Build repeatable pipelines and integrations that bring priority information together.",
      },
      {
        number: "04",
        title: "Analyze",
        body:
          "Create reporting and dashboard experiences around the most important operational questions.",
      },
      {
        number: "05",
        title: "Scale",
        body:
          "Extend the data foundation to additional sources, use cases, and analytics needs.",
      },
    ],

    capabilities: [
      "Healthcare data modernization",
      "Data integration",
      "Data pipelines",
      "Analytics platforms",
      "Institutional dashboards",
      "Reporting automation",
      "Data governance",
      "Role-based access",
      "Decision-support analytics",
    ],

    benefits: [
      "Reduced manual reporting effort",
      "Improved operational visibility",
      "More consistent reporting",
      "Faster access to important information",
      "Governed data foundation",
      "Scalable analytics architecture",
    ],

    technologies: [
      "SQL",
      "Python",
      "PostgreSQL",
      "AWS",
      "Data Pipelines",
      "Power BI",
      "REST APIs",
      "ETL",
      "Cloud Analytics",
    ],

    stats: [
      {
        value: "—",
        label: "Add verified reporting improvement",
      },
      {
        value: "—",
        label: "Add verified insight-delivery metric",
      },
      {
        value: "—",
        label: "Add verified workflow coverage",
      },
    ],

    date: "2025-08-20",
  },
];

export function getCaseStudyBySlug(
  slug: string,
): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
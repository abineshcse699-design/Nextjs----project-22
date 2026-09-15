export type CaseStudyStat = {
  value: string;
  label: string;
};

export type CaseStudyPhase = {
  number: string;
  title: string;
  body: string;
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
  solution: string;
  migration: string;
  results: string;

  benefits: string[];
  capabilities: string[];
  technologies: string[];

  stats: CaseStudyStat[];

  phases: CaseStudyPhase[];

  // Publish date, format "YYYY-MM-DD". Used for newest-first ordering
  // on the combined /About/case-study filter page.
  date: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "legacy-itsm-platform-migration-insurer",

    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1800&auto=format&fit=crop",

    title:
      "Starfii Migrates a Global Insurer From a Legacy ITSM Platform",

    body:
      "Explore how Starfii moved a global insurer off an end of life ITSM platform, migrating incidents, changes, and CMDB data without a single day of service desk downtime.",

    client: "Global Insurance Company",

    industry: "Insurance & Reinsurance",

    duration: "12 Months",

    overview:
      "A global insurer relied on a legacy ITSM platform that had become difficult to maintain and expensive to evolve. The platform supported incidents, service requests, change management, configuration management, and critical service desk workflows across multiple business units.",

    challenge:
      "The insurer needed to move away from its legacy ITSM environment without disrupting daily service desk operations. Years of historical incidents, service requests, changes, configuration records, workflows, business rules, and integrations had created a highly interconnected environment. A big bang migration would have introduced significant operational risk.",

    solution:
      "Starfii assessed the existing ITSM environment, mapped business processes, workflows, data structures, integrations, CMDB relationships, service catalog items, and platform customizations. The team then designed a phased migration strategy that prioritized business continuity while progressively modernizing the platform.",

    migration:
      "Historical data was extracted, cleansed, transformed, validated, and migrated through controlled migration waves. Critical workflows and configurations were rebuilt and optimized instead of being copied blindly. Service desk teams participated in testing and user acceptance activities before production cutover.",

    results:
      "The insurer successfully transitioned away from the legacy ITSM platform while maintaining service desk continuity. The organization gained a cleaner service management environment, improved integration capabilities, better data quality, and a stronger foundation for continued ITSM transformation.",

    benefits: [
      "Migration from an end of life ITSM platform",
      "No planned service desk downtime",
      "Improved historical incident data quality",
      "Modernized CMDB and configuration records",
      "Rebuilt and optimized ITSM workflows",
      "Improved integration capabilities",
      "Reduced legacy platform dependency",
      "Stronger foundation for future ITSM transformation",
    ],

    capabilities: [
      "ITSM migration assessment",
      "Current state analysis",
      "Target state design",
      "Data migration",
      "Configuration migration",
      "Workflow migration",
      "Service catalog migration",
      "CMDB migration",
      "Integration migration",
      "Testing and validation",
      "User acceptance testing",
      "Cutover planning",
      "Post migration support",
    ],

    technologies: [
      "ITSM Platform",
      "CMDB",
      "REST APIs",
      "Data Migration",
      "ETL",
      "Workflow Automation",
      "API Integration",
      "Identity Integration",
      "Automated Testing",
      "Cloud Infrastructure",
    ],

    stats: [
      {
        value: "0",
        label: "Days of planned service desk downtime",
      },
      {
        value: "100%",
        label: "Critical migration workflows validated",
      },
      {
        value: "12",
        label: "Months from assessment to stabilization",
      },
    ],

    phases: [
      {
        number: "01",
        title: "Discover",
        body:
          "Assess the legacy ITSM platform, business processes, data, integrations, workflows, CMDB, and technical dependencies.",
      },
      {
        number: "02",
        title: "Design",
        body:
          "Define the target operating model and map legacy capabilities to the modern ITSM platform.",
      },
      {
        number: "03",
        title: "Migrate",
        body:
          "Extract, cleanse, transform, validate, and migrate data and configurations through controlled migration waves.",
      },
      {
        number: "04",
        title: "Validate",
        body:
          "Perform functional testing, integration testing, data reconciliation, and user acceptance testing.",
      },
      {
        number: "05",
        title: "Cutover",
        body:
          "Execute the production migration using detailed runbooks, rollback plans, and hypercare support.",
      },
    ],

    date: "2025-04-01",
  },

  {
    slug: "service-catalog-modernization-retail",

    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1800&auto=format&fit=crop",

    title:
      "Starfii Modernizes a Retail Service Catalog for Faster Self Service",

    body:
      "See how Starfii restructured a sprawling service catalog into a clean, self service experience that improved request fulfillment and reduced unnecessary service desk workload.",

    client: "Global Retail Organization",

    industry: "Retail",

    duration: "9 Months",

    overview:
      "A large retail organization had accumulated hundreds of service catalog items over several years. Different business units maintained overlapping offerings, inconsistent request forms, approval processes, and fulfillment workflows.",

    challenge:
      "Employees struggled to identify the correct service request. Duplicate catalog items and inconsistent approval processes created unnecessary ticket volume and increased fulfillment effort for service desk teams.",

    solution:
      "Starfii reviewed the existing catalog structure, usage patterns, request forms, approval chains, fulfillment workflows, ownership models, and service definitions. Low value and duplicate services were identified while frequently used services were prioritized for redesign.",

    migration:
      "Existing catalog data and service definitions were mapped into the target structure. Request forms were simplified, approval rules were standardized, and fulfillment workflows were redesigned before being migrated into the modern service management environment.",

    results:
      "The retailer gained a cleaner and easier to navigate service catalog. Employees could find services faster while service teams benefited from standardized forms, workflows, ownership, and fulfillment processes.",

    benefits: [
      "Simplified service catalog structure",
      "Improved employee self service experience",
      "Reduced duplicate service offerings",
      "Standardized request forms",
      "Simplified approval workflows",
      "Improved service ownership",
      "Faster request fulfillment",
      "Reduced service desk workload",
    ],

    capabilities: [
      "Service catalog assessment",
      "Catalog rationalization",
      "Service definition",
      "Request form modernization",
      "Approval workflow redesign",
      "Fulfillment automation",
      "Service ownership mapping",
      "User acceptance testing",
      "Service catalog migration",
    ],

    technologies: [
      "ITSM Service Catalog",
      "Workflow Automation",
      "REST APIs",
      "Identity Integration",
      "Self Service Portal",
      "Automation",
      "Reporting",
      "Analytics",
    ],

    stats: [
      {
        value: "45%",
        label: "Faster request fulfillment",
      },
      {
        value: "35%",
        label: "Reduction in duplicate catalog items",
      },
      {
        value: "2x",
        label: "Improvement in self service adoption",
      },
    ],

    phases: [
      {
        number: "01",
        title: "Assess",
        body:
          "Review existing catalog items, usage, ownership, forms, approvals, and fulfillment workflows.",
      },
      {
        number: "02",
        title: "Rationalize",
        body:
          "Remove duplicates, retire low value offerings, and define a cleaner service hierarchy.",
      },
      {
        number: "03",
        title: "Redesign",
        body:
          "Create simplified forms and optimized workflows around the employee experience.",
      },
      {
        number: "04",
        title: "Validate",
        body:
          "Test services with representative employee scenarios and service desk teams.",
      },
      {
        number: "05",
        title: "Launch",
        body:
          "Deploy the modern catalog and provide post launch optimization support.",
      },
    ],

    date: "2025-05-01",
  },

  {
    slug: "cmdb-asset-consolidation-manufacturer",

    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1800&auto=format&fit=crop",

    title:
      "CMDB and Asset Consolidation for a Global Manufacturer",

    body:
      "Discover how Starfii consolidated fragmented asset records into a single CMDB, giving IT teams accurate dependency mapping across plants, facilities, and business services.",

    client: "Global Manufacturing Company",

    industry: "Manufacturing",

    duration: "10 Months",

    overview:
      "The manufacturer operated multiple plants and facilities with fragmented asset records maintained across different systems and teams. The lack of a consistent configuration model made it difficult to understand relationships between infrastructure, applications, and business services.",

    challenge:
      "Asset records were duplicated, incomplete, and inconsistently structured. Different facilities followed different naming standards and ownership models, making enterprise wide dependency mapping difficult.",

    solution:
      "Starfii assessed asset sources, configuration records, naming standards, ownership models, discovery processes, and relationships. A common CMDB model was designed to establish consistent data structures across facilities.",

    migration:
      "Fragmented asset and configuration records were cleansed, normalized, reconciled, and migrated into a structured CMDB. Relationships between configuration items were mapped to improve service dependency visibility.",

    results:
      "The manufacturer gained a more reliable configuration management foundation with improved visibility across infrastructure and service dependencies. IT teams could make better informed decisions during incidents, changes, and infrastructure planning.",

    benefits: [
      "Single source of truth for configuration data",
      "Improved asset visibility",
      "Reduced duplicate records",
      "Improved dependency mapping",
      "Standardized configuration data",
      "Better incident investigation",
      "Improved change impact analysis",
      "Stronger governance foundation",
    ],

    capabilities: [
      "CMDB assessment",
      "Asset discovery",
      "Data cleansing",
      "Configuration normalization",
      "Relationship mapping",
      "CMDB migration",
      "Data reconciliation",
      "Governance design",
    ],

    technologies: [
      "CMDB",
      "Asset Management",
      "Discovery",
      "REST APIs",
      "Data Integration",
      "ETL",
      "Data Quality",
      "Configuration Management",
      "Analytics",
    ],

    stats: [
      {
        value: "60%",
        label: "Improvement in asset data quality",
      },
      {
        value: "40%",
        label: "Reduction in duplicate records",
      },
      {
        value: "3x",
        label: "Faster dependency analysis",
      },
    ],

    phases: [
      {
        number: "01",
        title: "Inventory",
        body:
          "Identify all existing asset and configuration data sources across plants and business units.",
      },
      {
        number: "02",
        title: "Normalize",
        body:
          "Standardize naming, ownership, classifications, attributes, and configuration structures.",
      },
      {
        number: "03",
        title: "Consolidate",
        body:
          "Merge fragmented records and remove duplicate configuration items.",
      },
      {
        number: "04",
        title: "Map",
        body:
          "Establish relationships between infrastructure, applications, and business services.",
      },
      {
        number: "05",
        title: "Govern",
        body:
          "Implement ongoing data quality and CMDB governance processes.",
      },
    ],

    date: "2025-06-01",
  },

  {
    slug: "workflow-automation-healthcare-itsm",

    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1800&auto=format&fit=crop",

    title:
      "Starfii Automates ITSM Workflows for a Healthcare Provider",

    body:
      "Learn how Starfii rebuilt approval chains and escalation workflows during migration, reducing manual handoffs and improving incident resolution times.",

    client: "Healthcare Services Provider",

    industry: "Healthcare",

    duration: "8 Months",

    overview:
      "A healthcare provider depended on highly customized ITSM workflows that had evolved over many years. Manual approvals, email based handoffs, and inconsistent escalation paths created delays for service desk and infrastructure teams.",

    challenge:
      "The organization needed to modernize its ITSM platform while preserving critical healthcare support processes. Existing workflows contained complex business rules and manual exceptions that made a direct migration difficult.",

    solution:
      "Starfii mapped each workflow from request initiation through fulfillment or resolution. Approval chains, escalation rules, SLA policies, automation triggers, and exception paths were documented before redesign.",

    migration:
      "Legacy workflows were rebuilt using modern automation patterns. Unnecessary manual approvals were removed, escalation rules were standardized, and service level policies were connected directly to workflow automation.",

    results:
      "The healthcare provider achieved faster workflow execution and reduced manual handoffs while maintaining the controls required for critical support processes.",

    benefits: [
      "Reduced manual workflow steps",
      "Faster incident escalation",
      "Improved SLA compliance",
      "Standardized approval chains",
      "Better workflow visibility",
      "Reduced email based handoffs",
      "Improved service desk productivity",
      "Stronger automation foundation",
    ],

    capabilities: [
      "Workflow assessment",
      "Process mapping",
      "Workflow redesign",
      "Approval automation",
      "SLA automation",
      "Escalation management",
      "Exception handling",
      "Workflow testing",
    ],

    technologies: [
      "Workflow Automation",
      "ITSM",
      "REST APIs",
      "Business Rules",
      "SLA Management",
      "Notifications",
      "Integration APIs",
      "Automated Testing",
    ],

    stats: [
      {
        value: "40%",
        label: "Reduction in manual handoffs",
      },
      {
        value: "30%",
        label: "Faster incident escalation",
      },
      {
        value: "25%",
        label: "Improvement in SLA compliance",
      },
    ],

    phases: [
      {
        number: "01",
        title: "Map",
        body:
          "Document existing workflows, approvals, SLAs, escalations, exceptions, and business rules.",
      },
      {
        number: "02",
        title: "Simplify",
        body:
          "Remove unnecessary manual steps and redesign workflows around business outcomes.",
      },
      {
        number: "03",
        title: "Automate",
        body:
          "Implement modern automation for approvals, routing, notifications, and escalations.",
      },
      {
        number: "04",
        title: "Test",
        body:
          "Validate normal, exception, escalation, and SLA scenarios with service desk teams.",
      },
      {
        number: "05",
        title: "Optimize",
        body:
          "Monitor workflow performance and continuously improve automation after go live.",
      },
    ],

    date: "2025-07-01",
  },

  {
    slug: "managed-services-post-migration-bank",

    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1800&auto=format&fit=crop",

    title:
      "Post Migration Managed Services for a Regional Bank",

    body:
      "See how Starfii's managed services team supported a regional bank after ITSM migration, keeping the platform tuned as usage, business, and compliance needs grew.",

    client: "Regional Banking Institution",

    industry: "Banking & Financial Services",

    duration: "Ongoing",

    overview:
      "After completing its ITSM migration, a regional bank wanted to avoid the common post go live problem where platform performance, workflows, configurations, and integrations gradually become difficult to manage.",

    challenge:
      "The bank needed ongoing expertise to manage platform enhancements, operational issues, integrations, compliance requirements, service catalog changes, workflow tuning, and user support without building a large internal platform team.",

    solution:
      "Starfii established a structured managed services model covering platform administration, incident support, enhancement delivery, workflow optimization, integration monitoring, release management, and continuous improvement.",

    migration:
      "Post migration activities included hypercare, defect resolution, platform tuning, user support, workflow optimization, integration monitoring, and knowledge transfer to internal teams.",

    results:
      "The bank maintained a stable and well governed ITSM environment while continuing to evolve the platform as business, technology, and regulatory requirements changed.",

    benefits: [
      "Reliable post migration support",
      "Faster issue resolution",
      "Continuous platform optimization",
      "Improved release governance",
      "Integration monitoring",
      "Workflow tuning",
      "Service catalog maintenance",
      "Reduced internal platform administration effort",
    ],

    capabilities: [
      "ITSM managed services",
      "Platform administration",
      "Application support",
      "Integration monitoring",
      "Workflow optimization",
      "Release management",
      "Enhancement delivery",
      "Performance monitoring",
      "User support",
      "Continuous improvement",
    ],

    technologies: [
      "ITSM Platform",
      "CMDB",
      "REST APIs",
      "Integration Monitoring",
      "Workflow Automation",
      "Analytics",
      "Reporting",
      "Cloud Infrastructure",
      "CI/CD",
    ],

    stats: [
      {
        value: "35%",
        label: "Faster issue resolution",
      },
      {
        value: "30%",
        label: "Reduction in platform administration effort",
      },
      {
        value: "24/7",
        label: "Operational monitoring coverage",
      },
    ],

    phases: [
      {
        number: "01",
        title: "Stabilize",
        body:
          "Provide hypercare support, resolve migration defects, and stabilize workflows and integrations.",
      },
      {
        number: "02",
        title: "Operate",
        body:
          "Manage day to day platform administration, incidents, service requests, and operational issues.",
      },
      {
        number: "03",
        title: "Optimize",
        body:
          "Tune workflows, service catalogs, integrations, reports, and platform configurations.",
      },
      {
        number: "04",
        title: "Govern",
        body:
          "Establish release management, enhancement governance, security, and compliance practices.",
      },
      {
        number: "05",
        title: "Evolve",
        body:
          "Continuously introduce improvements as business requirements and technology needs change.",
      },
    ],

    date: "2025-08-01",
  },
];

export function getCaseStudyBySlug(
  slug: string
): CaseStudy | undefined {
  return caseStudies.find(
    (study) => study.slug === slug
  );
}
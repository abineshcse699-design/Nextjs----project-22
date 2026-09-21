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
      "The insurer needed to move away from its legacy ITSM environment without disrupting daily service desk operations. Years of historical incidents, service requests, changes, configuration records, workflows, business rules, and integrations had created a highly interconnected environment. A big bang migration would have introduced significant operational risk. Service desk teams handled a steady flow of live tickets every day, so there was no convenient window to pause the platform and switch over. Years of customization meant that many workflows and business rules were poorly documented, and moving them without understanding how they worked risked breaking processes that business units depended on. The insurer needed a plan that protected daily operations at every step.",

    solution:
      "Starfii assessed the existing ITSM environment, mapped business processes, workflows, data structures, integrations, CMDB relationships, service catalog items, and platform customizations. The team then designed a phased migration strategy that prioritized business continuity while progressively modernizing the platform. Each workflow, integration, and catalog item was reviewed with the people who use it, so the team could decide what to keep, what to redesign, and what to retire. Migration waves were sequenced by business risk and dependency, and clear success criteria were agreed with the insurer before each wave began. This let the program modernize the platform step by step instead of taking on the full risk in a single move.",

    migration:
      "Historical data was extracted, cleansed, transformed, validated, and migrated through controlled migration waves. Critical workflows and configurations were rebuilt and optimized instead of being copied blindly. Service desk teams participated in testing and user acceptance activities before production cutover. Each migration wave was followed by data reconciliation to confirm that records, relationships, and attachments matched the source. Detailed runbooks and rollback plans were prepared before cutover so the team could act quickly if an issue appeared, and hypercare support stayed in place after go live to resolve questions from service desk teams.",

    results:
      "The insurer successfully transitioned away from the legacy ITSM platform while maintaining service desk continuity. The organization gained a cleaner service management environment, improved integration capabilities, better data quality, and a stronger foundation for continued ITSM transformation. There were no days of planned service desk downtime, and every critical migration workflow was validated before it went live. The full program, from assessment to stabilization, was completed in 12 months. Service desk teams now work in a modern environment with rebuilt and optimized workflows rather than copies of old customizations, and historical incident and CMDB data is cleaner and easier to trust. The insurer no longer depends on an end of life platform, which removes a growing maintenance burden and lowers the risk of relying on aging technology. With a solid foundation in place, it can continue improving its service management, add new integrations, and extend automation across its business units at its own pace.",

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
      "Employees struggled to identify the correct service request. Duplicate catalog items and inconsistent approval processes created unnecessary ticket volume and increased fulfillment effort for service desk teams. Requests often landed with the wrong team or came back for clarification because forms asked for different information depending on the business unit. Service desk agents spent time redirecting tickets and chasing missing details instead of fulfilling requests, and there was no single owner who could say which services were still needed.",

    solution:
      "Starfii reviewed the existing catalog structure, usage patterns, request forms, approval chains, fulfillment workflows, ownership models, and service definitions. Low value and duplicate services were identified while frequently used services were prioritized for redesign. Ownership was assigned for each service so someone was accountable for its form, approvals, and fulfillment. The redesigned structure was organized around the way employees describe their needs, not around the internal teams that deliver them, which makes services easier to find and request.",

    migration:
      "Existing catalog data and service definitions were mapped into the target structure. Request forms were simplified, approval rules were standardized, and fulfillment workflows were redesigned before being migrated into the modern service management environment. Retired and duplicate services were archived rather than carried forward, so the new environment started clean. Each redesigned service was tested against real request scenarios before it was released, and service teams were briefed on the new forms and workflows ahead of launch.",

    results:
      "The retailer gained a cleaner and easier to navigate service catalog. Employees could find services faster while service teams benefited from standardized forms, workflows, ownership, and fulfillment processes. Requests are now fulfilled 45% faster, duplicate catalog items have been reduced by 35%, and self service adoption has doubled. Employees spend less time searching for the right service and less time waiting for approvals, because forms ask the right questions the first time and approval steps follow a consistent pattern. Service desk teams see fewer misdirected tickets and fewer follow up requests for missing information, which frees them to focus on work that needs their expertise. Clear service ownership means the catalog stays accurate as business needs change, and the retailer now has a solid structure for adding new services without letting the catalog grow out of control again.",

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
      "Asset records were duplicated, incomplete, and inconsistently structured. Different facilities followed different naming standards and ownership models, making enterprise wide dependency mapping difficult. Because each plant recorded assets in its own way, IT teams could not easily answer basic questions such as which applications depended on a given server or which services would be affected by a change. Incident investigations took longer than necessary, and the risk of unexpected impact from changes was hard to judge.",

    solution:
      "Starfii assessed asset sources, configuration records, naming standards, ownership models, discovery processes, and relationships. A common CMDB model was designed to establish consistent data structures across facilities. Sources were compared and ranked by reliability so the most trusted data could serve as the foundation for the CMDB. The team also defined ownership and update responsibilities for each class of configuration item, so the data would stay accurate after the initial cleanup.",

    migration:
      "Fragmented asset and configuration records were cleansed, normalized, reconciled, and migrated into a structured CMDB. Relationships between configuration items were mapped to improve service dependency visibility. Reconciliation rules matched records that described the same asset across different sources, and exceptions were reviewed with facility teams instead of being resolved by guesswork. The result was a CMDB that reflects how each plant actually operates, with consistent attributes and relationships across all facilities.",

    results:
      "The manufacturer gained a more reliable configuration management foundation with improved visibility across infrastructure and service dependencies. IT teams could make better informed decisions during incidents, changes, and infrastructure planning. Asset data quality has improved by 60%, duplicate records have been reduced by 40%, and dependency analysis is now 3x faster. When an incident occurs, teams can quickly see which applications and business services are affected and where to look first, which shortens investigation time. Change planning is more confident because the impact of a change on connected systems is visible before it is approved. Consistent naming, ownership, and attributes across plants mean that a record in one facility means the same thing as a record in another. With governance processes now in place, the CMDB will stay accurate over time instead of drifting back into the fragmented state it started from, giving the business a lasting base for service management and infrastructure planning.",

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
      "The organization needed to modernize its ITSM platform while preserving critical healthcare support processes. Existing workflows contained complex business rules and manual exceptions that made a direct migration difficult. Many approvals depended on email threads and individual follow ups, which made it hard to see where a request was stuck or who was responsible. Escalation paths differed between teams, so urgent issues could sit longer than they should, and SLA performance was difficult to track consistently.",

    solution:
      "Starfii mapped each workflow from request initiation through fulfillment or resolution. Approval chains, escalation rules, SLA policies, automation triggers, and exception paths were documented before redesign. Working with service desk and infrastructure teams, the team separated the steps that truly required human judgment from those that could be handled automatically. Steps that existed only because of old tooling limits were flagged for removal, while controls that supported healthcare support requirements were kept and made explicit in the new design.",

    migration:
      "Legacy workflows were rebuilt using modern automation patterns. Unnecessary manual approvals were removed, escalation rules were standardized, and service level policies were connected directly to workflow automation. Rebuilt workflows were tested against normal, exception, and escalation scenarios before go live, so teams could trust that critical support processes behaved as expected. Notifications replaced many email based handoffs, giving everyone involved a clear view of request status.",

    results:
      "The healthcare provider achieved faster workflow execution and reduced manual handoffs while maintaining the controls required for critical support processes. Manual handoffs are down 40%, incident escalation is 30% faster, and SLA compliance has improved by 25%. Approvals now move through consistent, automated paths, so requests no longer wait on an email reply or a manual reminder. Escalations follow the same rules across teams, which means urgent issues reach the right people sooner. Service desk agents spend less time chasing status and more time resolving issues, and managers can see where work is delayed and act on it. Because service level policies are tied directly to workflow automation, SLA performance is measured the same way every time. The provider now has a strong automation foundation that it can extend to more processes as its support needs evolve, without giving up the oversight that healthcare operations require.",

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
      "The bank needed ongoing expertise to manage platform enhancements, operational issues, integrations, compliance requirements, service catalog changes, workflow tuning, and user support without building a large internal platform team. Without continued attention, a newly migrated platform tends to drift as new requests, quick fixes, and one-off changes pile up. The bank also operates under strict regulatory expectations, so every change to workflows or configurations had to be controlled and traceable.",

    solution:
      "Starfii established a structured managed services model covering platform administration, incident support, enhancement delivery, workflow optimization, integration monitoring, release management, and continuous improvement. Service levels and responsibilities were agreed upfront so the bank knew exactly what support to expect. A regular cadence of reviews connected platform performance, open enhancements, and upcoming business needs, keeping priorities aligned between the bank and Starfii.",

    migration:
      "Post migration activities included hypercare, defect resolution, platform tuning, user support, workflow optimization, integration monitoring, and knowledge transfer to internal teams. As internal teams grew more familiar with the platform, knowledge was shared through documentation and working sessions so the bank keeps control of its environment and can choose how much support it wants over time.",

    results:
      "The bank maintained a stable and well governed ITSM environment while continuing to evolve the platform as business, technology, and regulatory requirements changed. Issues are now resolved 35% faster, platform administration effort has fallen by 30%, and operations are monitored around the clock. Releases follow a controlled process, so changes reach production in an orderly and traceable way that supports the bank's compliance obligations. Integrations are monitored proactively, which means problems are usually found and fixed before users notice them. The bank's internal teams no longer need to spend their time on routine platform administration and can focus on higher value work for the business. Because the platform is tuned continuously, workflows and service catalogs keep pace with how the bank actually operates rather than slowly falling out of date. The result is an ITSM environment that stays reliable, secure, and ready to support new needs as the institution grows.",

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
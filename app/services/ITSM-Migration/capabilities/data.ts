// Shared data source for ITSM Migration & Transformation capabilities.
// Used by:
//   - app/services/ITSM-Migration/ItsmMigrationTransformationSection.tsx  (the capability grid / focus areas)
//   - app/services/ITSM-Migration/capabilities/[slug]/page.tsx            (detail page)
//
// Keeping one source of truth means the grid card and its "Learn More"
// destination can never drift out of sync with each other.
//
// Slugs below match exactly what ItsmMigrationTransformationSection.tsx
// generates for each focus area card via:
//   area.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
// so existing "Learn More" links on the main ITSM Migration page resolve correctly.
//
// Structure is identical to app/services/cloud/capabilities/data.ts and
// app/services/data-analytics/capabilities/data.ts on purpose, so the
// [slug]/page.tsx, FaqAccordion, Reveal and OtherCapabilities components can
// be reused unchanged across all services.

export type KeyFeature = {
  title: string;
  body: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type Capability = {
  slug: string;
  title: string;
  body: string;
  tags: string[];
  // Detail-page-only fields. Kept minimal on purpose: the detail page
  // should show what the card already promises, not invent new content.
  heroImage: string;
  // Detail-page-only: what's included, shown as a feature grid.
  keyFeatures: KeyFeature[];
  // Detail-page-only: frequently asked questions, shown as an accordion.
  faqs: Faq[];
};

export const capabilities: Capability[] = [
  {
    slug: "current-state-analysis",
    title: "Current State Analysis",
    body: "Starfii's ITSM migration team audits your existing service management platform, workflows, and technical debt, so every migration decision is grounded in how the platform is actually used today.",
    tags: ["ASSESSMENT", "TECHNICAL DEBT", "DISCOVERY"],
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Platform & Workflow Audit",
        body: "We review existing workflows, forms, business rules, and platform configuration to understand what is actually driving day to day operations.",
      },
      {
        title: "Data Quality Review",
        body: "Historical incidents, requests, and CMDB records are examined for duplication, staleness, and gaps before any migration plan is built.",
      },
      {
        title: "Integration & Dependency Mapping",
        body: "We map every upstream and downstream integration, so nothing quietly breaks once the legacy platform is retired.",
      },
      {
        title: "Risk & Complexity Scoring",
        body: "Each workflow and dataset is scored for migration risk and complexity, giving your team a clear, prioritized starting point.",
      },
    ],
    faqs: [
      {
        question: "What does a current state analysis actually cover?",
        answer:
          "We review workflows, service catalogs, integrations, configurations, historical data, user roles, and platform dependencies to build a complete picture of the existing environment.",
      },
      {
        question: "How long does the assessment phase typically take?",
        answer:
          "Timelines vary with platform complexity, but most assessments are scoped to run in parallel with early target state design so the migration plan isn't delayed.",
      },
      {
        question: "Does the analysis flag issues we don't already know about?",
        answer:
          "Yes. Data quality reviews and dependency mapping routinely surface stale records, undocumented integrations, and workflow logic no one remembers writing.",
      },
      {
        question: "Can this be done without disrupting the current service desk?",
        answer:
          "Yes. Assessment work is read-only against the live platform, so agents and end users continue operating normally while we analyze the environment.",
      },
    ],
  },
  {
    slug: "target-state-design",
    title: "Target State Design",
    body: "Starfii designs the target ITSM environment around your future operating model, mapping processes, roles, and platform capabilities before a single record is moved.",
    tags: ["TARGET STATE", "PROCESS DESIGN", "ROLES"],
    heroImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Future Operating Model",
        body: "We define how service management should work going forward, not just how to replicate the legacy platform on new infrastructure.",
      },
      {
        title: "Process & Role Mapping",
        body: "Roles, permissions, and approval chains are redesigned around the new platform's capabilities rather than copied forward as-is.",
      },
      {
        title: "Platform Capability Alignment",
        body: "Target configuration is matched against native platform features, so teams don't end up rebuilding legacy workarounds unnecessarily.",
      },
      {
        title: "Governance & Standards",
        body: "Naming conventions, categorization, and data standards are defined up front, so the new platform starts clean and stays that way.",
      },
    ],
    faqs: [
      {
        question: "Does target state design mean redesigning every process?",
        answer:
          "No. We keep processes that work well and only redesign where the current approach relies on legacy workarounds the new platform doesn't need.",
      },
      {
        question: "How does Starfii decide what roles and permissions look like in the new platform?",
        answer:
          "We map current responsibilities against the new platform's native role model, so access matches actual job functions rather than legacy habits.",
      },
      {
        question: "Can target state design happen before we've selected a new platform?",
        answer:
          "Some of it can. Process and role mapping is largely platform independent, though final configuration decisions depend on the platform chosen.",
      },
      {
        question: "How does this reduce rework later in the migration?",
        answer:
          "Defining governance, naming, and data standards before migration begins prevents the config drift that usually forces cleanup projects after go live.",
      },
    ],
  },
  {
    slug: "migration-strategy",
    title: "Migration Strategy",
    body: "Starfii builds a phased migration strategy that sequences data, configuration, and workflow moves to minimize risk and keep service desks running throughout the transition.",
    tags: ["STRATEGY", "SEQUENCING", "RISK"],
    heroImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Phased Migration Waves",
        body: "Data, configuration, and workflow moves are sequenced into waves, so teams learn from early phases before tackling complex processes.",
      },
      {
        title: "Business Risk Prioritization",
        body: "Migration order is driven by business risk and dependency, not just technical convenience, keeping critical services protected.",
      },
      {
        title: "Parallel Run Planning",
        body: "Where needed, we plan periods where legacy and new platforms run side by side, so cutover isn't an all or nothing event.",
      },
      {
        title: "Rollback & Contingency Planning",
        body: "Every wave includes a defined rollback path, so an unexpected issue never leaves the service desk without a way back.",
      },
    ],
    faqs: [
      {
        question: "How does Starfii decide which processes migrate first?",
        answer:
          "We sequence migration waves around business risk and dependencies, starting with practical, lower risk workflows before moving to complex ones.",
      },
      {
        question: "Does the migration strategy account for regulatory or compliance needs?",
        answer:
          "Yes. Compliance sensitive data and audit trails are flagged early and given dedicated handling within the migration plan.",
      },
      {
        question: "What happens if a migration wave doesn't go as planned?",
        answer:
          "Every wave has a documented rollback plan, so a failed step can be reverted without affecting workflows that already migrated successfully.",
      },
      {
        question: "Can the migration strategy adapt if priorities change mid project?",
        answer:
          "Yes. Waves are planned to be resequenced if business priorities shift, without requiring the whole migration plan to be rebuilt.",
      },
    ],
  },
  {
    slug: "data-migration",
    title: "Data Migration",
    body: "Starfii's data migration practice extracts, cleanses, and transforms incidents, requests, problems, and change records so historical service data arrives accurate and query ready.",
    tags: ["DATA", "CLEANSING", "ETL"],
    heroImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Extract, Cleanse & Transform",
        body: "Incidents, requests, problems, and change records are extracted, deduplicated, and mapped to the new platform's data model.",
      },
      {
        title: "Historical Record Integrity",
        body: "Timestamps, ownership, and audit history are preserved during migration, so reporting and compliance trails remain intact.",
      },
      {
        title: "Validation & Reconciliation",
        body: "Migrated record counts and field values are reconciled against source data to catch discrepancies before go live.",
      },
      {
        title: "Archival Strategy for Legacy Data",
        body: "Data that doesn't need to migrate live is archived appropriately, keeping the new platform clean without losing access to history.",
      },
    ],
    faqs: [
      {
        question: "What types of records does Starfii typically migrate?",
        answer:
          "We migrate incidents, service requests, problems, changes, and related history, mapping each record type to the new platform's data model.",
      },
      {
        question: "How does Starfii handle duplicate or inconsistent legacy data?",
        answer:
          "Data is cleansed and deduplicated during extraction, so the new platform starts with accurate, query ready records rather than legacy clutter.",
      },
      {
        question: "Will historical audit trails survive the migration?",
        answer:
          "Yes. Timestamps, ownership, and change history are preserved so compliance and reporting trails remain intact after migration.",
      },
      {
        question: "Does everything need to migrate, or can some data be archived instead?",
        answer:
          "Not everything needs to move live. We help define an archival strategy for data that should remain accessible without cluttering the new platform.",
      },
    ],
  },
  {
    slug: "configuration-migration",
    title: "Configuration Migration",
    body: "Starfii migrates forms, business rules, SLAs, and platform configurations from legacy ITSM tools, preserving the logic teams depend on while modernizing the underlying platform.",
    tags: ["CONFIGURATION", "SLAs", "BUSINESS RULES"],
    heroImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Forms & Field Logic",
        body: "Forms, conditional fields, and validation logic are rebuilt natively in the new platform rather than copied as a fragile workaround.",
      },
      {
        title: "SLA & Escalation Rules",
        body: "Service level agreements and escalation timers are migrated with the same thresholds teams already rely on, adjusted where the new platform improves on them.",
      },
      {
        title: "Business Rule Translation",
        body: "Legacy business rules are translated into the new platform's native automation model instead of forced into unsupported patterns.",
      },
      {
        title: "Configuration Documentation",
        body: "Every migrated rule and setting is documented, so future changes don't depend on tribal knowledge of what was moved and why.",
      },
    ],
    faqs: [
      {
        question: "Can Starfii migrate custom forms and fields exactly as they are today?",
        answer:
          "We rebuild forms and field logic natively in the new platform, preserving the same behavior while avoiding fragile legacy workarounds where possible.",
      },
      {
        question: "What happens to our existing SLAs during migration?",
        answer:
          "SLA definitions and escalation timers are migrated with the same thresholds your teams rely on, with improvements suggested where the new platform allows.",
      },
      {
        question: "Does configuration migration include automation and business rules?",
        answer:
          "Yes. Business rules are translated into the new platform's native automation model rather than recreated as unsupported legacy patterns.",
      },
      {
        question: "How do we know what configuration actually moved?",
        answer:
          "We document every migrated rule, form, and setting, so your team has a clear record instead of relying on memory after go live.",
      },
    ],
  },
  {
    slug: "workflow-migration",
    title: "Workflow Migration",
    body: "Starfii rebuilds and optimizes approval chains, escalation paths, and automation workflows in the new environment instead of copying legacy limitations forward.",
    tags: ["WORKFLOWS", "APPROVALS", "AUTOMATION"],
    heroImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Approval Chain Rebuilding",
        body: "Multi step approval chains are rebuilt using the new platform's native workflow engine, improving reliability over legacy scripting.",
      },
      {
        title: "Escalation Path Optimization",
        body: "Escalation logic is reviewed and improved during migration rather than reproduced exactly, removing steps that no longer serve a purpose.",
      },
      {
        title: "Automation Modernization",
        body: "Manual handoffs identified during migration are automated where the new platform supports it, reducing agent workload.",
      },
      {
        title: "Workflow Testing Against Real Scenarios",
        body: "Migrated workflows are tested against real ticket scenarios, not just sample data, to confirm they behave as expected under normal load.",
      },
    ],
    faqs: [
      {
        question: "Does Starfii just copy our existing workflows into the new platform?",
        answer:
          "No. Workflows are rebuilt using the new platform's native engine, and we optimize approval chains and escalation paths rather than reproduce legacy limitations.",
      },
      {
        question: "Can workflow migration reduce manual work for our agents?",
        answer:
          "Yes. We identify manual handoffs during migration and automate them where the new platform supports it, reducing repetitive agent work.",
      },
      {
        question: "How are migrated workflows tested before go live?",
        answer:
          "We test migrated workflows against real ticket scenarios, not just sample data, so behavior is validated under conditions that match daily operations.",
      },
      {
        question: "Will our approval chains work the same way after migration?",
        answer:
          "Approval chains are rebuilt to match your existing logic, with a review of steps that may no longer serve a purpose in the new environment.",
      },
    ],
  },
  {
    slug: "service-catalog-migration",
    title: "Service Catalog Migration",
    body: "Starfii restructures and migrates your service catalog, so end users find the right service requests quickly and IT can manage offerings from a single source of truth.",
    tags: ["SERVICE CATALOG", "SELF SERVICE", "CATALOG DESIGN"],
    heroImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Catalog Structure Redesign",
        body: "Sprawling, duplicated catalog items are consolidated into a clear, logically organized structure end users can actually navigate.",
      },
      {
        title: "Request Form Simplification",
        body: "Overly complex request forms are simplified to only the fields that are genuinely needed, reducing friction and ticket errors.",
      },
      {
        title: "Fulfillment Workflow Mapping",
        body: "Each catalog item is mapped to the correct fulfillment workflow in the new platform, so requests route correctly from day one.",
      },
      {
        title: "Self Service Adoption Support",
        body: "Catalog structure and naming are optimized for search and browsing, encouraging adoption instead of ticket volume creeping back up.",
      },
    ],
    faqs: [
      {
        question: "Why does the service catalog need restructuring instead of just moving over?",
        answer:
          "Most legacy catalogs accumulate duplicate and outdated items over time. Restructuring during migration prevents carrying that clutter into the new platform.",
      },
      {
        question: "Will migrating the catalog change how requests get fulfilled?",
        answer:
          "Each catalog item is mapped to the correct fulfillment workflow in the new platform, so requests continue routing correctly, often more efficiently.",
      },
      {
        question: "How does catalog migration improve self service adoption?",
        answer:
          "We optimize catalog structure, naming, and search so employees find what they need quickly, which is typically what drives higher self service adoption.",
      },
      {
        question: "Can we add new catalog items during the migration itself?",
        answer:
          "Yes. Migration is a practical opportunity to introduce new catalog items alongside the ones being carried over from the legacy platform.",
      },
    ],
  },
  {
    slug: "cmdb-and-asset-migration",
    title: "CMDB and Asset Migration",
    body: "Starfii migrates configuration items, asset records, and relationship maps into a clean CMDB, giving teams accurate visibility into infrastructure and service dependencies.",
    tags: ["CMDB", "ASSETS", "DEPENDENCY MAPPING"],
    heroImage:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "CI & Asset Record Cleansing",
        body: "Configuration items and asset records are deduplicated and validated before migration, so the new CMDB doesn't inherit legacy noise.",
      },
      {
        title: "Relationship & Dependency Mapping",
        body: "CI relationships are rebuilt so teams have accurate dependency visibility for change impact analysis from day one.",
      },
      {
        title: "Discovery Tool Alignment",
        body: "CMDB structure is aligned with your discovery tooling, so ongoing reconciliation keeps records accurate after go live.",
      },
      {
        title: "Consolidated Multi Source CMDB",
        body: "Where asset data lives across multiple legacy sources, we consolidate it into a single, reconciled CMDB rather than several conflicting ones.",
      },
    ],
    faqs: [
      {
        question: "How does Starfii clean up a messy legacy CMDB during migration?",
        answer:
          "Configuration items and asset records are deduplicated and validated before migration, so the new CMDB starts accurate rather than carrying forward legacy noise.",
      },
      {
        question: "Can Starfii consolidate CMDB data from multiple legacy sources?",
        answer:
          "Yes. Where asset data lives across several systems or business units, we consolidate it into a single, reconciled CMDB rather than several conflicting ones.",
      },
      {
        question: "Will our discovery tooling still work with the new CMDB?",
        answer:
          "We align CMDB structure with your existing discovery tooling, so ongoing reconciliation keeps records accurate after the migration completes.",
      },
      {
        question: "How does a clean CMDB actually help day to day operations?",
        answer:
          "Accurate CI relationships give teams reliable dependency visibility, which materially improves change impact analysis and incident triage.",
      },
    ],
  },
  {
    slug: "integration-migration",
    title: "Integration Migration",
    body: "Starfii re-establishes integrations with monitoring, identity, HR, and collaboration tools, so the new ITSM platform connects to your broader technology ecosystem from day one.",
    tags: ["INTEGRATIONS", "APIs", "IDENTITY"],
    heroImage:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Monitoring & Alerting Integration",
        body: "Monitoring tools are reconnected so alerts continue flowing into incident management without a gap during cutover.",
      },
      {
        title: "Identity & Access Integration",
        body: "Identity providers are re-integrated for authentication and role provisioning, keeping access consistent with your existing controls.",
      },
      {
        title: "HR & Collaboration Tooling",
        body: "HR systems and collaboration platforms are reconnected to keep onboarding, notifications, and approvals flowing without manual steps.",
      },
      {
        title: "API & Middleware Validation",
        body: "Every integration is tested end to end after migration, confirming data flows correctly in both directions before go live.",
      },
    ],
    faqs: [
      {
        question: "What integrations does Starfii typically re-establish during migration?",
        answer:
          "We commonly reconnect monitoring, identity, HR, and collaboration tools, along with any custom API integrations the legacy platform depended on.",
      },
      {
        question: "Is there a risk of integration downtime during cutover?",
        answer:
          "We plan integration cutover carefully, often validating connections in parallel before switching over, to minimize any gap in monitoring or alerting.",
      },
      {
        question: "Can Starfii migrate custom, non standard integrations?",
        answer:
          "Yes. Custom API and middleware integrations are assessed individually and rebuilt against the new platform's integration framework.",
      },
      {
        question: "How are integrations validated before go live?",
        answer:
          "Every integration is tested end to end, confirming data flows correctly in both directions, before it's relied on in production.",
      },
    ],
  },
];

export function getCapabilityBySlug(slug: string): Capability | undefined {
  return capabilities.find((c) => c.slug === slug);
}
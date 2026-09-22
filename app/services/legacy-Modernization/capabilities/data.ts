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
  heroImage: string;
  keyFeatures: KeyFeature[];
  faqs: Faq[];
};

export const capabilities: Capability[] = [
  {
    slug: "legacy-assessment",
    title: "Legacy Assessment",
    body:
      "Starfii's legacy assessment maps your existing applications, dependencies, and technical debt, so modernization decisions are grounded in real risk and real business impact instead of guesswork.",
    tags: ["ASSESSMENT", "TECH DEBT", "RISK"],
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Application Portfolio Assessment",
        body:
          "We map applications, dependencies, integrations, and infrastructure to create a clear picture of the current technology estate.",
      },
      {
        title: "Technical Debt Analysis",
        body:
          "We identify outdated frameworks, fragile integrations, unsupported platforms, and code quality issues that increase maintenance effort.",
      },
      {
        title: "Risk & Business Impact Analysis",
        body:
          "Each system is evaluated against business criticality, operational risk, maintenance cost, and modernization complexity.",
      },
      {
        title: "Modernization Roadmap",
        body:
          "Assessment findings are converted into a practical roadmap showing what to modernize, why, and in what sequence.",
      },
    ],
    faqs: [
      {
        question: "What does a legacy assessment include?",
        answer:
          "A legacy assessment reviews applications, architecture, dependencies, integrations, infrastructure, technical debt, and operational risks to establish a clear modernization baseline.",
      },
      {
        question: "Can Starfii assess a large application portfolio?",
        answer:
          "Yes. We can assess individual applications or larger portfolios and prioritize systems based on business value, risk, maintenance cost, and modernization effort.",
      },
      {
        question: "Does the assessment include a modernization roadmap?",
        answer:
          "Yes. Assessment findings can be translated into a phased roadmap covering modernization priorities, sequencing, dependencies, and delivery considerations.",
      },
      {
        question: "Can an assessment be done without disrupting production systems?",
        answer:
          "Yes. The assessment process is structured to gather the required technical and business information while minimizing disruption to production operations.",
      },
    ],
  },

  {
    slug: "application-modernization",
    title: "Application Modernization",
    body:
      "Starfii modernizes legacy applications into maintainable, cloud ready systems, preserving business logic that works while replacing what slows the business down.",
    tags: ["APPLICATIONS", "CLOUD", "MAINTAINABILITY"],
    heroImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Legacy Application Analysis",
        body:
          "We evaluate application architecture, dependencies, code quality, runtime environments, and integrations before defining the modernization approach.",
      },
      {
        title: "Application Refactoring",
        body:
          "Critical components are progressively refactored to improve maintainability, performance, testability, and development speed.",
      },
      {
        title: "Cloud Ready Architecture",
        body:
          "Applications are modernized around scalable runtime environments and cloud capabilities without unnecessarily rebuilding everything.",
      },
      {
        title: "Business Logic Preservation",
        body:
          "Existing business rules and capabilities are preserved while outdated technical constraints are removed.",
      },
    ],
    faqs: [
      {
        question: "Does application modernization require a complete rewrite?",
        answer:
          "No. The approach can include refactoring, re-platforming, re-engineering, or selective rebuilding depending on the application's condition and business requirements.",
      },
      {
        question: "Can Starfii modernize applications without changing business processes?",
        answer:
          "Yes. Modernization can preserve proven business logic and workflows while improving the underlying architecture and technology.",
      },
      {
        question: "Can legacy applications be moved to the cloud?",
        answer:
          "Yes. Cloud migration can be combined with application modernization when the target architecture and operational requirements justify it.",
      },
      {
        question: "How does Starfii reduce modernization risk?",
        answer:
          "We use phased delivery, dependency analysis, automated testing, validation, and incremental migration approaches to reduce disruption during modernization.",
      },
    ],
  },

  {
    slug: "re-engineering",
    title: "Re-engineering",
    body:
      "Starfii's re engineering practice rebuilds outdated codebases and workflows around modern languages and frameworks, improving performance without losing years of embedded business rules.",
    tags: ["RE-ENGINEERING", "REFACTORING", "PERFORMANCE"],
    heroImage:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Codebase Re-engineering",
        body:
          "Outdated codebases are restructured around modern development practices while retaining the business capabilities the organization depends on.",
      },
      {
        title: "Architecture Refactoring",
        body:
          "Tightly coupled application components can be reorganized into cleaner, modular structures that are easier to maintain and extend.",
      },
      {
        title: "Performance Improvements",
        body:
          "We identify performance bottlenecks across application code, data access, integrations, and runtime environments.",
      },
      {
        title: "Modern Framework Adoption",
        body:
          "Legacy frameworks and languages can be progressively replaced with maintainable technologies suited to the target environment.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between re-engineering and rewriting?",
        answer:
          "Re-engineering focuses on improving or restructuring an existing system while preserving valuable business logic. A complete rewrite replaces most or all of the existing implementation.",
      },
      {
        question: "Can Starfii preserve existing business rules during re-engineering?",
        answer:
          "Yes. Existing application behavior and business rules are analyzed before critical components are changed so valuable business knowledge is not unnecessarily lost.",
      },
      {
        question: "Can re-engineering improve application performance?",
        answer:
          "Yes. Re-engineering can address inefficient code, architecture, data access, integrations, and runtime constraints that contribute to poor performance.",
      },
      {
        question: "Can re-engineering be done incrementally?",
        answer:
          "Yes. Critical components can be modernized progressively while the existing system continues supporting business operations.",
      },
    ],
  },

  {
    slug: "re-platforming",
    title: "Re-platforming",
    body:
      "Starfii re platforms legacy systems onto modern runtime environments with targeted code changes, unlocking cloud scalability faster than a full rebuild.",
    tags: ["RE-PLATFORMING", "CLOUD", "SPEED"],
    heroImage:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Runtime Modernization",
        body:
          "Legacy workloads are moved onto supported and modern runtime environments with targeted application changes.",
      },
      {
        title: "Cloud Platform Adoption",
        body:
          "Applications can be transitioned to modern cloud infrastructure without requiring a complete ground-up rebuild.",
      },
      {
        title: "Compatibility Engineering",
        body:
          "Dependencies, frameworks, operating systems, and runtime compatibility are addressed during the transition.",
      },
      {
        title: "Deployment Modernization",
        body:
          "Modern deployment pipelines and operational practices can be introduced alongside the new platform environment.",
      },
    ],
    faqs: [
      {
        question: "When is re-platforming appropriate?",
        answer:
          "Re-platforming is useful when the existing application is still valuable but its underlying runtime or infrastructure is limiting scalability, supportability, or operational efficiency.",
      },
      {
        question: "Does re-platforming require changing application code?",
        answer:
          "Usually some targeted changes are required for compatibility, security, performance, or deployment requirements, but a complete rewrite is not necessarily required.",
      },
      {
        question: "Can re-platforming support cloud migration?",
        answer:
          "Yes. Re-platforming is often used as a practical bridge between legacy infrastructure and modern cloud environments.",
      },
      {
        question: "How is downtime managed?",
        answer:
          "Migration can be planned in phases with validation, controlled cutovers, and rollback procedures designed around the application's operational requirements.",
      },
    ],
  },

  {
    slug: "cloud-migration",
    title: "Cloud Migration",
    body:
      "Starfii plans and executes cloud migration for legacy workloads, moving applications and data to scalable infrastructure with minimal downtime and a clear rollback path.",
    tags: ["CLOUD", "MIGRATION", "INFRASTRUCTURE"],
    heroImage:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Cloud Readiness Assessment",
        body:
          "Applications, infrastructure, dependencies, and workloads are evaluated before migration to identify constraints and migration requirements.",
      },
      {
        title: "Migration Planning",
        body:
          "Workloads are organized into migration waves with clear dependencies, validation steps, and rollback considerations.",
      },
      {
        title: "Data Migration",
        body:
          "Data is migrated with validation and integrity checks designed to protect critical business information throughout the transition.",
      },
      {
        title: "Post Migration Optimization",
        body:
          "After migration, infrastructure and workloads can be optimized for performance, reliability, scalability, and cost efficiency.",
      },
    ],
    faqs: [
      {
        question: "Can Starfii migrate legacy applications directly to the cloud?",
        answer:
          "Yes. We assess each workload and determine whether it should be migrated as-is, re-platformed, refactored, or modernized before migration.",
      },
      {
        question: "Which cloud platforms can be supported?",
        answer:
          "Cloud migration can be planned around the target platform and existing technology environment, including major public cloud platforms.",
      },
      {
        question: "How does Starfii protect data during migration?",
        answer:
          "Migration plans include validation, integrity checks, controlled migration waves, and rollback planning appropriate to the workload.",
      },
      {
        question: "Can cloud migration be performed with minimal downtime?",
        answer:
          "Yes. Migration architecture and cutover strategy can be designed around operational continuity and the application's availability requirements.",
      },
    ],
  },

  {
    slug: "architecture-modernization",
    title: "Architecture Modernization",
    body:
      "Starfii redesigns monolithic and outdated architectures into modular, service based systems that are easier to scale, test, and extend over time.",
    tags: ["ARCHITECTURE", "MICROSERVICES", "SCALE"],
    heroImage:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Monolith Assessment",
        body:
          "We analyze monolithic architectures to identify boundaries, dependencies, bottlenecks, and areas suitable for incremental modernization.",
      },
      {
        title: "Modular Architecture",
        body:
          "Applications are reorganized around clearer modules and business capabilities to improve maintainability and development velocity.",
      },
      {
        title: "Service Based Architecture",
        body:
          "Where appropriate, tightly coupled capabilities can be separated into independently deployable services.",
      },
      {
        title: "Scalability Engineering",
        body:
          "Architecture is designed to support growing traffic, data volumes, integrations, and feature requirements.",
      },
    ],
    faqs: [
      {
        question: "Does architecture modernization always mean microservices?",
        answer:
          "No. The target architecture depends on the application's requirements. Modular monoliths, service based architectures, and other approaches can all be appropriate.",
      },
      {
        question: "Can a monolith be modernized without replacing it immediately?",
        answer:
          "Yes. Incremental modernization can improve selected areas while the existing monolith continues to operate.",
      },
      {
        question: "How are service boundaries identified?",
        answer:
          "Service boundaries are based on business capabilities, dependencies, data ownership, operational requirements, and the desired deployment model.",
      },
      {
        question: "Can architecture modernization improve scalability?",
        answer:
          "Yes. A suitable target architecture can make it easier to scale high-demand workloads independently and reduce unnecessary coupling.",
      },
    ],
  },

  {
    slug: "api-modernization",
    title: "API Modernization",
    body:
      "Starfii modernizes legacy interfaces into secure, well documented APIs, so your systems can connect to partners, mobile apps, and third party platforms without added fragility.",
    tags: ["API", "INTEGRATIONS", "SECURITY"],
    heroImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Legacy API Assessment",
        body:
          "Existing interfaces are assessed for reliability, security, documentation, coupling, and compatibility with current consumers.",
      },
      {
        title: "API Architecture",
        body:
          "Modern API patterns are introduced to create cleaner contracts between applications, partners, internal systems, and clients.",
      },
      {
        title: "Security & Authentication",
        body:
          "Authentication, authorization, validation, and secure transport are considered as part of the API modernization approach.",
      },
      {
        title: "API Documentation",
        body:
          "Clear API documentation and contracts make integrations easier for internal teams, partners, and third party consumers.",
      },
    ],
    faqs: [
      {
        question: "Can Starfii modernize existing APIs without breaking consumers?",
        answer:
          "Yes. API modernization can use versioning, compatibility layers, phased migration, and controlled consumer transitions to reduce disruption.",
      },
      {
        question: "Can legacy point to point integrations be modernized?",
        answer:
          "Yes. Existing integration patterns can be assessed and replaced with more maintainable API based integration architectures where appropriate.",
      },
      {
        question: "Does API modernization include security?",
        answer:
          "Yes. API security can cover authentication, authorization, validation, encryption, rate limiting, and appropriate monitoring.",
      },
      {
        question: "Can APIs support mobile and third party applications?",
        answer:
          "Yes. Modern API architecture can provide controlled interfaces for mobile applications, partners, internal platforms, and third party integrations.",
      },
    ],
  },

  {
    slug: "database-modernization",
    title: "Database Modernization",
    body:
      "Starfii migrates and re architects legacy databases for performance, scalability, and cost efficiency, with a data migration approach that protects data integrity throughout.",
    tags: ["DATABASE", "MIGRATION", "DATA INTEGRITY"],
    heroImage:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Database Assessment",
        body:
          "Existing schemas, workloads, queries, dependencies, storage requirements, and operational constraints are analyzed.",
      },
      {
        title: "Database Migration",
        body:
          "Data can be migrated to a modern database platform with validation and controlled migration processes.",
      },
      {
        title: "Performance Optimization",
        body:
          "Indexing, query patterns, schema design, caching, and workload characteristics are reviewed to improve performance.",
      },
      {
        title: "Data Integrity",
        body:
          "Migration plans include validation and reconciliation processes designed to protect data accuracy throughout the transition.",
      },
    ],
    faqs: [
      {
        question: "Can Starfii migrate an old database to a modern platform?",
        answer:
          "Yes. Database migration can include schema analysis, transformation, data movement, validation, and controlled production cutover.",
      },
      {
        question: "How is data integrity protected during migration?",
        answer:
          "Migration processes can include validation, reconciliation, checksums, record comparisons, and controlled cutover procedures based on the workload.",
      },
      {
        question: "Can database modernization improve performance?",
        answer:
          "Yes. Schema design, indexing, queries, infrastructure, and workload patterns can all be optimized as part of modernization.",
      },
      {
        question: "Can legacy databases be modernized incrementally?",
        answer:
          "Yes. Where the architecture allows it, database modernization can be phased to reduce operational risk.",
      },
    ],
  },

  {
    slug: "modernization-roadmap",
    title: "Modernization Roadmap",
    body:
      "Starfii builds a phased modernization roadmap that sequences assessment, migration, and re engineering work around business priorities, so value shows up early and often.",
    tags: ["ROADMAP", "STRATEGY", "PLANNING"],
    heroImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Current State Assessment",
        body:
          "We establish the current application, architecture, infrastructure, dependency, and technical debt landscape.",
      },
      {
        title: "Target State Definition",
        body:
          "Business and technical requirements are translated into a practical target architecture and modernization direction.",
      },
      {
        title: "Phased Modernization Plan",
        body:
          "Modernization initiatives are sequenced into manageable phases with dependencies, priorities, and milestones.",
      },
      {
        title: "Investment & Risk Planning",
        body:
          "The roadmap considers business impact, technical risk, delivery complexity, and operational constraints.",
      },
    ],
    faqs: [
      {
        question: "What is included in a modernization roadmap?",
        answer:
          "A roadmap can include current state findings, target architecture, modernization priorities, dependencies, migration phases, milestones, risks, and delivery considerations.",
      },
      {
        question: "How are modernization priorities determined?",
        answer:
          "Priorities can be based on business criticality, technical risk, maintenance cost, customer impact, dependencies, and expected modernization value.",
      },
      {
        question: "Can the roadmap be changed as priorities evolve?",
        answer:
          "Yes. A modernization roadmap should be reviewed as business priorities, technology constraints, and delivery learnings change.",
      },
      {
        question: "Does Starfii help execute the roadmap?",
        answer:
          "Yes. The roadmap can be followed by assessment, re-engineering, re-platforming, migration, architecture, API, and database modernization work.",
      },
    ],
  },
];

export function getCapabilityBySlug(slug: string) {
  return capabilities.find((capability) => capability.slug === slug);
}
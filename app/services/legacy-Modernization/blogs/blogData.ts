// app/services/legacy-modernization/blogs/blogsData.ts

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
  quote?: string;
};

export type BlogBenefit = {
  title: string;
  body: string;
};

export type BlogProcessStep = {
  title: string;
  body: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  lastUpdated: string;
  readTime: string;
  heroImage: string;
  excerpt: string;

  seo: {
    title: string;
    description: string;
    keywords: string[];
  };

  author: {
    name: string;
    role: string;
    photo: string;
    bio: string;
  };

  intro: string[];

  sections: BlogSection[];

  benefits: BlogBenefit[];

  process: BlogProcessStep[];

  keyTakeaways: string[];

  conclusion: string;

  cta: {
    title: string;
    body: string;
    buttonText: string;
    buttonHref: string;
  };
};

const AUTHOR = {
  name: "Starfii Modernization Team",

  role: "Legacy Modernization",

  photo:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",

  bio:
    "The Starfii modernization team helps enterprises assess, re engineer, re platform, migrate, and modernize legacy applications, APIs, databases, and architectures.",
};

const CTA_HREF =
  "/services/legacy-modernization#connect";

export const blogPosts: BlogPost[] = [
  {
    slug: "legacy-modernization-with-generative-ai",

    title:
      "Legacy Modernization with Generative AI: Faster Assessment, Safer Migration, Future Ready Systems",

    category: "Legacy Modernization",

    lastUpdated: "September 2026",

    readTime: "8 min read",

    heroImage:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1600&auto=format&fit=crop",

    excerpt:
      "Explore how generative AI can accelerate legacy assessment, code understanding, and modernization planning while keeping engineering review in the loop.",

    seo: {
      title:
        "Legacy Modernization with Generative AI | Starfii",

      description:
        "Learn how generative AI can accelerate legacy assessment, code understanding, modernization planning, and migration while keeping engineering governance in place.",

      keywords: [
        "legacy modernization",
        "generative AI",
        "legacy application modernization",
        "code modernization",
        "cloud migration",
        "Starfii",
      ],
    },

    author: AUTHOR,

    intro: [
      "Legacy modernization is often slowed by the effort required to understand decades of code, dependencies, interfaces, and undocumented business rules.",

      "Generative AI can help teams summarize legacy code, identify dependencies, draft transformation plans, and accelerate repetitive engineering work without removing human accountability.",

      "The strongest modernization programs use AI as an engineering accelerator while keeping architecture, security, testing, and migration decisions under expert review.",
    ],

    sections: [
      {
        heading: "Start With Legacy Assessment",

        paragraphs: [
          "A modernization program should begin by understanding the applications, data flows, interfaces, dependencies, technical debt, and business rules already embedded in the estate.",

          "AI assisted code analysis can help teams classify modules, summarize unfamiliar code, identify duplicated logic, and surface likely dependency relationships.",

          "The output is most useful when engineers validate the findings against runtime behavior, production telemetry, and business owners before decisions are made.",
        ],
      },

      {
        heading: "Use AI to Accelerate Code Understanding",

        paragraphs: [
          "Large legacy codebases contain repetitive patterns that are expensive to inspect manually. Generative AI can create explanations, documentation drafts, test cases, and transformation candidates for review.",

          "This does not mean automatically rewriting an entire system. The safer approach is to use AI for bounded tasks with clear inputs, outputs, tests, and acceptance criteria.",
        ],

        image:
          "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop",

        imageAlt:
          "Engineers using modern software tools to analyze legacy code",
      },

      {
        heading: "Modernize in Controlled Increments",

        paragraphs: [
          "Modernization becomes easier to govern when applications are divided into capabilities that can be tested, migrated, and released independently.",

          "Teams can combine re engineering, re platforming, API modernization, database modernization, and cloud migration according to the risk and value of each workload.",

          "Incremental delivery creates checkpoints where performance, security, compatibility, and business behavior can be verified before the next migration step.",
        ],
      },

      {
        heading: "Keep Human Review at the Decision Points",

        paragraphs: [
          "Generated code and generated migration recommendations still require engineering review. Critical decisions should be supported by automated tests, dependency checks, security analysis, and rollback plans.",

          "The goal is not to replace modernization expertise. It is to give experienced teams more leverage over large and complex application portfolios.",
        ],

        quote:
          "AI can accelerate modernization work, but production decisions still need engineering accountability.",
      },
    ],

    benefits: [
      {
        title: "Faster Assessment",
        body:
          "AI assisted analysis can reduce the time needed to understand large legacy codebases.",
      },
      {
        title: "Better Documentation",
        body:
          "Generated documentation drafts help teams capture business and technical context that may be missing.",
      },
      {
        title: "Controlled Transformation",
        body:
          "Bounded modernization tasks make it easier to review and test changes incrementally.",
      },
      {
        title: "Lower Migration Risk",
        body:
          "Dependency discovery and automated testing help identify problems before production cutover.",
      },
      {
        title: "More Engineering Capacity",
        body:
          "Automation can reduce repetitive work so engineers can focus on architecture and high value decisions.",
      },
      {
        title: "Future Ready Systems",
        body:
          "Modern APIs, cloud platforms, and maintainable codebases create a stronger foundation for future change.",
      },
    ],

    process: [
      {
        title: "Assess",
        body:
          "Inventory applications, dependencies, interfaces, data, technical debt, and business criticality.",
      },
      {
        title: "Understand",
        body:
          "Use AI assisted analysis to document code, identify patterns, and surface transformation candidates.",
      },
      {
        title: "Prioritize",
        body:
          "Sequence modernization around business value, technical risk, dependencies, and delivery constraints.",
      },
      {
        title: "Transform",
        body:
          "Re engineer, re platform, migrate, or modernize bounded capabilities with automated testing.",
      },
      {
        title: "Validate",
        body:
          "Verify security, performance, compatibility, business behavior, and rollback readiness before release.",
      },
    ],

    keyTakeaways: [
      "AI can accelerate legacy assessment and code understanding without replacing engineering review.",
      "Modernization should begin with application, dependency, data, and business context.",
      "Bounded transformation tasks are easier to test and govern than a full automatic rewrite.",
      "Re engineering, re platforming, API modernization, and cloud migration can be combined by workload.",
      "Human accountability remains essential for architecture, security, testing, and production decisions.",
    ],

    conclusion:
      "Generative AI can make legacy modernization faster, but the strongest results come from combining automation with disciplined assessment, incremental delivery, testing, and engineering governance.",

    cta: {
      title: "Ready to Modernize a Legacy Estate?",

      body:
        "Talk to Starfii about assessing your applications and building a practical modernization roadmap.",

      buttonText: "Talk to Our Modernization Team",

      buttonHref: CTA_HREF,
    },
  },

  {
    slug: "when-to-rearchitect-vs-replatform",

    title:
      "When to Re Architect vs Re Platform a Legacy System",

    category: "Legacy Modernization",

    lastUpdated: "September 2026",

    readTime: "7 min read",

    heroImage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop",

    excerpt:
      "Not every legacy system needs a rebuild. See how to choose between re architecting, re platforming, and re engineering based on risk, cost, and timeline.",

    seo: {
      title:
        "Re Architect vs Re Platform Legacy Systems | Starfii",

      description:
        "Understand when to re architect, re platform, or re engineer a legacy application based on business value, technical risk, cost, and timeline.",

      keywords: [
        "re architect",
        "re platform",
        "legacy system",
        "application modernization",
        "legacy modernization strategy",
        "Starfii",
      ],
    },

    author: AUTHOR,

    intro: [
      "Modernization is not a single technology choice. Different applications need different levels of change.",

      "Re platforming can provide a faster path to a modern runtime, while re architecting can address structural limitations that a platform move cannot solve.",

      "The right decision balances business urgency, technical debt, dependencies, risk, and the value of changing the system itself.",
    ],

    sections: [
      {
        heading:
          "Choose Re Platforming When the Core Still Works",

        paragraphs: [
          "Re platforming is useful when the application delivers valuable business functionality but runs on an aging runtime or infrastructure layer.",

          "The goal is targeted change: move the workload to a supported platform, container environment, or cloud service while minimizing changes to proven business logic.",
        ],
      },

      {
        heading:
          "Choose Re Engineering When Code Quality Is the Constraint",

        paragraphs: [
          "Re engineering makes sense when the system's code structure has become difficult to maintain, test, or extend.",

          "The modernization team can incrementally replace outdated languages, frameworks, modules, and integration patterns while preserving important business behavior.",
        ],
      },

      {
        heading:
          "Choose Re Architecting When the Structure Limits the Business",

        paragraphs: [
          "Re architecting is appropriate when the existing architecture prevents the organization from scaling, integrating, releasing, or changing the product at the required pace.",

          "This may involve decomposing a monolith, introducing service boundaries, modernizing APIs, separating data responsibilities, or redesigning integration patterns.",
        ],

        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",

        imageAlt:
          "Modern software architecture and engineering environment",
      },

      {
        heading:
          "Make the Decision Using Evidence",

        paragraphs: [
          "Modernization decisions should be based on application dependencies, business criticality, operating cost, technical risk, release constraints, and expected business value.",

          "A structured assessment makes it easier to choose the smallest modernization approach that solves the actual problem.",
        ],

        quote:
          "The right modernization strategy is the smallest change that removes the constraint holding the business back.",
      },
    ],

    benefits: [
      {
        title: "Lower Transformation Risk",
        body:
          "Choosing the right modernization pattern avoids unnecessary changes to stable business capabilities.",
      },
      {
        title: "Faster Time to Value",
        body:
          "Re platforming can provide meaningful infrastructure improvements without requiring a complete rebuild.",
      },
      {
        title: "Better Maintainability",
        body:
          "Re engineering can simplify codebases and make future changes easier to deliver.",
      },
      {
        title: "Improved Scalability",
        body:
          "Re architecting can remove structural constraints that prevent systems from scaling.",
      },
    ],

    process: [
      {
        title: "Assess",
        body:
          "Understand architecture, dependencies, runtime, code quality, data, and business criticality.",
      },
      {
        title: "Compare",
        body:
          "Evaluate re platforming, re engineering, re architecting, and replacement options.",
      },
      {
        title: "Prioritize",
        body:
          "Rank options according to business value, cost, risk, and delivery timeline.",
      },
      {
        title: "Pilot",
        body:
          "Validate the selected modernization approach against a representative workload.",
      },
      {
        title: "Scale",
        body:
          "Expand the proven modernization pattern across the application portfolio.",
      },
    ],

    keyTakeaways: [
      "Not every legacy system needs a complete rewrite.",
      "Re platforming is useful when business logic works but the runtime or infrastructure is outdated.",
      "Re engineering addresses maintainability and code quality problems.",
      "Re architecting is appropriate when structural limitations prevent business growth.",
      "Architecture decisions should be grounded in application and business evidence.",
    ],

    conclusion:
      "Successful modernization is less about choosing the newest technology and more about choosing the right level of change for the business problem.",

    cta: {
      title:
        "Not Sure Which Modernization Path Fits?",

      body:
        "Starfii can assess your legacy estate and recommend a practical modernization strategy.",

      buttonText: "Talk to Our Modernization Team",

      buttonHref: CTA_HREF,
    },
  },

  {
    slug: "cloud-migration-without-downtime",

    title:
      "Cloud Migration Without Downtime: A Practical Playbook",

    category: "Cloud Migration",

    lastUpdated: "September 2026",

    readTime: "7 min read",

    heroImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop",

    excerpt:
      "Stop trading uptime for modernization. See how a phased cloud migration approach can keep legacy systems running while the new platform comes online.",

    seo: {
      title:
        "Cloud Migration Without Downtime | Starfii",

      description:
        "A practical approach to cloud migration for legacy applications, including dependency mapping, phased migration, testing, cutover, and rollback planning.",

      keywords: [
        "cloud migration",
        "legacy cloud migration",
        "zero downtime migration",
        "application modernization",
        "cloud modernization",
        "Starfii",
      ],
    },

    author: AUTHOR,

    intro: [
      "Cloud migration does not have to mean taking a critical legacy application offline for a large cutover.",

      "A phased migration strategy can keep the existing platform operational while the target environment is built, tested, and gradually introduced.",

      "The migration plan should treat data synchronization, application dependencies, validation, observability, and rollback as first class concerns.",
    ],

    sections: [
      {
        heading:
          "Map the Existing Environment First",

        paragraphs: [
          "Before moving a workload, identify application dependencies, databases, external integrations, batch jobs, authentication systems, file transfers, and operational processes.",

          "Dependency mapping helps determine migration waves and prevents hidden integrations from becoming production surprises.",
        ],
      },

      {
        heading:
          "Build the Target Environment in Parallel",

        paragraphs: [
          "The target cloud environment should be provisioned and validated while the existing application continues operating.",

          "Infrastructure, networking, security, observability, backup, and deployment processes should be tested before the application becomes production dependent on the new environment.",
        ],

        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",

        imageAlt:
          "Cloud infrastructure visualization",
      },

      {
        heading:
          "Synchronize and Validate Data",

        paragraphs: [
          "Data migration is frequently the most sensitive part of a cloud transition.",

          "Teams should establish a repeatable synchronization mechanism, validate record counts and business rules, and test application behavior against the migrated data before final cutover.",
        ],
      },

      {
        heading:
          "Use a Controlled Cutover",

        paragraphs: [
          "A controlled cutover defines the exact sequence for traffic switching, validation, monitoring, and rollback.",

          "The team should know in advance which signals determine success and which conditions trigger a return to the previous environment.",
        ],

        quote:
          "A safe migration is designed around reversibility, not just the happy path.",
      },
    ],

    benefits: [
      {
        title: "Reduced Downtime",
        body:
          "Phased migration reduces the need for long application outages.",
      },
      {
        title: "Lower Cutover Risk",
        body:
          "Parallel environments provide more opportunities to validate the target platform before production traffic moves.",
      },
      {
        title: "Improved Scalability",
        body:
          "Cloud infrastructure provides a stronger foundation for future workload growth.",
      },
      {
        title: "Better Observability",
        body:
          "Modern monitoring and logging can improve visibility into application behavior.",
      },
    ],

    process: [
      {
        title: "Discover",
        body:
          "Map applications, infrastructure, data, integrations, and dependencies.",
      },
      {
        title: "Design",
        body:
          "Define the target cloud architecture, security model, networking, and operations.",
      },
      {
        title: "Build",
        body:
          "Create and test the target environment while the legacy platform remains active.",
      },
      {
        title: "Migrate",
        body:
          "Move workloads and data in controlled phases with validation at each stage.",
      },
      {
        title: "Cutover",
        body:
          "Switch production traffic using predefined validation and rollback criteria.",
      },
    ],

    keyTakeaways: [
      "Cloud migration should begin with dependency discovery.",
      "Build and test the target environment before production cutover.",
      "Data synchronization and validation are critical to migration success.",
      "A rollback plan should be tested rather than documented only on paper.",
      "Phased migration can reduce downtime and operational risk.",
    ],

    conclusion:
      "Cloud migration is safest when it is treated as a controlled modernization program rather than a one time infrastructure move.",

    cta: {
      title:
        "Planning a Legacy Cloud Migration?",

      body:
        "Starfii can help assess your legacy workloads and build a phased cloud migration roadmap.",

      buttonText: "Talk to Our Modernization Team",

      buttonHref: CTA_HREF,
    },
  },

  {
    slug: "database-modernization-strategies",

    title:
      "Database Modernization Strategies for Legacy Enterprises",

    category: "Database Modernization",

    lastUpdated: "September 2026",

    readTime: "7 min read",

    heroImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",

    excerpt:
      "Discover how database modernization improves performance, scalability, maintainability, and cost efficiency for enterprises running legacy data platforms.",

    seo: {
      title:
        "Database Modernization Strategies | Starfii",

      description:
        "Learn how enterprises can modernize legacy databases through assessment, migration, re architecture, data validation, and phased implementation.",

      keywords: [
        "database modernization",
        "legacy database",
        "database migration",
        "data modernization",
        "enterprise database",
        "Starfii",
      ],
    },

    author: AUTHOR,

    intro: [
      "Legacy databases often contain decades of business data and rules, making modernization more complex than simply moving tables to a new platform.",

      "A successful database modernization program considers application dependencies, data quality, performance requirements, integration patterns, and business continuity.",

      "The right strategy may involve migration, re architecture, replication, consolidation, or a phased transition rather than a single big bang change.",
    ],

    sections: [
      {
        heading:
          "Assess the Existing Data Estate",

        paragraphs: [
          "Start by identifying databases, schemas, applications, interfaces, data ownership, volumes, workloads, and dependencies.",

          "The assessment should also identify obsolete data, duplicate records, sensitive information, and workloads that have unusual performance requirements.",
        ],
      },

      {
        heading:
          "Choose the Right Modernization Pattern",

        paragraphs: [
          "Some databases can be migrated with limited structural changes, while others require schema redesign or a new data architecture.",

          "The choice depends on application compatibility, scalability requirements, operational cost, data relationships, and the desired future architecture.",
        ],
      },

      {
        heading:
          "Protect Data Integrity",

        paragraphs: [
          "Data validation should be built into every migration phase.",

          "Teams should compare record counts, checksums, critical fields, referential relationships, application behavior, and business reports before declaring a migration successful.",
        ],

        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",

        imageAlt:
          "Modern database and data infrastructure",
      },

      {
        heading:
          "Modernize Around Business Continuity",

        paragraphs: [
          "Database modernization should minimize disruption to the applications and teams that depend on the data.",

          "Replication, phased migration, dual running, controlled cutovers, and tested rollback plans can reduce operational risk.",
        ],

        quote:
          "Modernizing the database is successful only when the business can trust the data throughout the transition.",
      },
    ],

    benefits: [
      {
        title: "Improved Performance",
        body:
          "Modern data platforms can improve query performance and workload scalability.",
      },
      {
        title: "Lower Operating Cost",
        body:
          "Modern platforms can reduce infrastructure and operational overhead.",
      },
      {
        title: "Better Scalability",
        body:
          "Modern database architectures can support growing data volumes and application workloads.",
      },
      {
        title: "Stronger Data Governance",
        body:
          "Modern data architectures make security, monitoring, and governance easier to implement.",
      },
    ],

    process: [
      {
        title: "Inventory",
        body:
          "Identify databases, schemas, workloads, owners, integrations, and dependencies.",
      },
      {
        title: "Assess",
        body:
          "Evaluate data quality, performance, compatibility, security, and business criticality.",
      },
      {
        title: "Design",
        body:
          "Choose the target database platform and migration architecture.",
      },
      {
        title: "Migrate",
        body:
          "Move and synchronize data using controlled migration waves.",
      },
      {
        title: "Validate",
        body:
          "Verify data integrity, application behavior, performance, and reporting.",
      },
    ],

    keyTakeaways: [
      "Database modernization starts with understanding data and application dependencies.",
      "Migration strategy should match the technical and business requirements.",
      "Data validation must be continuous throughout the migration.",
      "Business continuity should shape the migration architecture.",
      "Modern databases can improve performance, scalability, governance, and operating cost.",
    ],

    conclusion:
      "Database modernization should create a stronger data foundation without compromising the integrity or availability of the information the business depends on.",

    cta: {
      title:
        "Modernize Your Legacy Data Platform",

      body:
        "Talk to Starfii about assessing your databases and designing a controlled modernization path.",

      buttonText: "Talk to Our Modernization Team",

      buttonHref: CTA_HREF,
    },
  },

  {
    slug: "building-a-modernization-roadmap",

    title:
      "Building a Modernization Roadmap Enterprises Can Actually Follow",

    category: "Modernization Strategy",

    lastUpdated: "September 2026",

    readTime: "6 min read",

    heroImage:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop",

    excerpt:
      "Learn how a phased modernization roadmap sequences legacy assessment, migration, and re engineering work so value shows up early and risk stays contained.",

    seo: {
      title:
        "Building a Legacy Modernization Roadmap | Starfii",

      description:
        "Learn how to create a practical legacy modernization roadmap that balances business priorities, dependencies, technical risk, investment, and delivery milestones.",

      keywords: [
        "modernization roadmap",
        "legacy modernization strategy",
        "application modernization roadmap",
        "IT modernization",
        "legacy transformation",
        "Starfii",
      ],
    },

    author: AUTHOR,

    intro: [
      "A modernization roadmap should do more than list technologies. It should explain what changes first, why it changes, what dependencies exist, and how progress will be measured.",

      "The most practical roadmaps sequence work around business value and technical risk instead of attempting to modernize every application at once.",

      "A good roadmap creates clear stages that allow the organization to learn from early modernization work before scaling the approach.",
    ],

    sections: [
      {
        heading:
          "Start With Portfolio Assessment",

        paragraphs: [
          "Create a clear inventory of applications, technologies, integrations, databases, business owners, operating costs, and technical risks.",

          "This provides the evidence needed to prioritize workloads instead of relying on assumptions.",
        ],
      },

      {
        heading:
          "Prioritize by Value and Risk",

        paragraphs: [
          "High business value does not automatically mean an application should be modernized first. Dependencies, technical complexity, security risk, and operational constraints also matter.",

          "A prioritization framework should balance business impact, modernization effort, risk reduction, and strategic importance.",
        ],
      },

      {
        heading:
          "Create Modernization Waves",

        paragraphs: [
          "Group related applications and dependencies into manageable modernization waves.",

          "Early waves should produce measurable outcomes and validate the organization's modernization patterns, engineering practices, testing approach, and governance.",
        ],

        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",

        imageAlt:
          "Team planning a technology modernization roadmap",
      },

      {
        heading:
          "Measure Progress by Business Outcomes",

        paragraphs: [
          "A modernization roadmap should track more than completed migrations.",

          "Useful measures include application reliability, release speed, infrastructure cost, security exposure, performance, developer productivity, and business capability improvements.",
        ],

        quote:
          "A modernization roadmap is successful when it connects technology change to measurable business outcomes.",
      },
    ],

    benefits: [
      {
        title: "Clear Priorities",
        body:
          "A structured roadmap makes it clear which applications should be addressed first.",
      },
      {
        title: "Controlled Investment",
        body:
          "Phased delivery allows organizations to manage modernization investment over time.",
      },
      {
        title: "Reduced Risk",
        body:
          "Dependencies and technical risks are addressed before they become migration blockers.",
      },
      {
        title: "Visible Business Value",
        body:
          "Modernization milestones can be connected directly to measurable business outcomes.",
      },
    ],

    process: [
      {
        title: "Inventory",
        body:
          "Create a complete view of applications, data, infrastructure, integrations, and owners.",
      },
      {
        title: "Assess",
        body:
          "Score business value, technical debt, risk, complexity, and modernization effort.",
      },
      {
        title: "Prioritize",
        body:
          "Select the workloads that create the strongest combination of value and risk reduction.",
      },
      {
        title: "Sequence",
        body:
          "Build modernization waves around dependencies and organizational capacity.",
      },
      {
        title: "Measure",
        body:
          "Track delivery progress and business outcomes throughout the roadmap.",
      },
    ],

    keyTakeaways: [
      "A modernization roadmap should connect technology decisions to business outcomes.",
      "Portfolio assessment provides the evidence needed for prioritization.",
      "Business value, technical risk, dependencies, and effort should all influence sequencing.",
      "Modernization waves create controlled opportunities to learn and improve.",
      "Progress should be measured through operational and business outcomes, not migration counts alone.",
    ],

    conclusion:
      "A practical modernization roadmap turns a complex legacy estate into a sequence of manageable decisions, allowing organizations to modernize with greater visibility, control, and measurable business value.",

    cta: {
      title:
        "Build a Modernization Roadmap That Works",

      body:
        "Starfii can assess your legacy estate and help build a phased roadmap around your business priorities.",

      buttonText: "Talk to Our Modernization Team",

      buttonHref: CTA_HREF,
    },
  },
];

export function getBlogBySlug(
  slug: string
): BlogPost | undefined {
  return blogPosts.find(
    (post) => post.slug === slug
  );
}

export function getRelatedBlogs(
  currentSlug: string,
  count = 3
): BlogPost[] {
  return blogPosts
    .filter(
      (post) => post.slug !== currentSlug
    )
    .slice(0, count);
}
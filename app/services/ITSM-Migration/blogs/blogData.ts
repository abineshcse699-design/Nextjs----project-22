// app/services/itsm-migration/blogs/blogData.ts

export type BlogHighlight = {
  number: string;
  title: string;
  body: string;
};

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
  number: string;
  title: string;
  body: string;
};

export type BlogService = "itsm-migration";

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  service: BlogService;
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

  highlights?: BlogHighlight[];

  sections: BlogSection[];

  benefits?: BlogBenefit[];

  process?: BlogProcessStep[];

  keyTakeaways?: string[];

  conclusion?: string;

  cta?: {
    title: string;
    body: string;
    buttonText: string;
    buttonHref: string;
  };
};

/* ============================================================
   AUTHOR
============================================================ */

const AUTHOR = {
  name: "Sanjay Salunkhe",
  role: "President and Global Head of Digital and Software Services",
  photo:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop",
  bio:
    "Sanjay Salunkhe is the President and Global Head of Digital and Software Services of our Company.",
};

/* ============================================================
   ITSM MIGRATION & TRANSFORMATION BLOGS
============================================================ */

export const blogPosts: BlogPost[] = [
  {
    slug: "planning-a-low-risk-itsm-migration",

    title:
      "Planning a Low Risk ITSM Migration: A Practical Roadmap for Enterprises",

    category: "ITSM Migration & Transformation",

    service: "itsm-migration",

    lastUpdated: "September 2026",

    readTime: "7 min read",

    heroImage:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1600&auto=format&fit=crop",

    excerpt:
      "Explore how Starfii structures ITSM migrations into assessment, design, and phased execution, so enterprises modernize service management without disrupting daily operations.",

    seo: {
      title:
        "Planning a Low Risk ITSM Migration: A Practical Roadmap for Enterprises",

      description:
        "Learn how a structured assessment, target state design, and phased execution plan reduce risk during an ITSM migration.",

      keywords: [
        "ITSM migration",
        "ITSM transformation",
        "ITSM migration roadmap",
        "service management migration",
        "ITSM migration strategy",
        "low risk migration",
      ],
    },

    author: AUTHOR,

    intro: [
      "Migrating off a legacy ITSM platform is one of the highest risk projects an IT organization can take on, because the service desk cannot simply pause while the move happens.",

      "A low risk migration depends less on the destination platform and more on how carefully the current state is understood before any data or workflow is moved.",

      "Enterprises that treat migration as a structured program, assessment, design, and phased execution, consistently see fewer disruptions than those that treat it as a single cutover event.",
    ],

    highlights: [
      {
        number: "01",
        title: "Assess",
        body:
          "Understand current workflows, data quality, and integrations before any migration decision is made.",
      },
      {
        number: "02",
        title: "Design",
        body:
          "Map the target state around future operations, not a copy of legacy limitations.",
      },
      {
        number: "03",
        title: "Execute in Phases",
        body:
          "Sequence data, configuration, and workflow moves to protect the live service desk.",
      },
    ],

    sections: [
      {
        heading: "Start With an Honest Assessment",

        paragraphs: [
          "Every ITSM migration should begin with a structured assessment of the current platform, covering workflows, data quality, integrations, and known technical debt.",

          "Skipping this step is the most common reason migrations run over budget, since issues that surface mid project are far more expensive to fix than issues found during assessment.",
        ],
      },

      {
        heading: "Design the Target State Deliberately",

        paragraphs: [
          "The target ITSM environment should be designed around the organization's future operating model, not a like for like copy of the legacy platform's structure.",

          "This is the point to fix long standing workflow inefficiencies rather than migrating them forward into the new system.",
        ],

        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",

        imageAlt:
          "IT team designing a target state ITSM architecture",
      },

      {
        heading: "Sequence the Migration in Phases",

        paragraphs: [
          "A phased migration strategy moves data, configuration, and workflows in a deliberate sequence rather than all at once.",

          "Phasing reduces the blast radius of any single issue and gives teams room to validate each stage before moving to the next.",
        ],

        quote:
          "A migration plan is not measured by how fast it moves data. It is measured by how little the service desk notices while that data moves.",
      },

      {
        heading: "Protect the Live Service Desk",

        paragraphs: [
          "Throughout the migration, the existing service desk needs to keep functioning for end users, which means parallel run periods and rollback plans are not optional extras.",

          "Enterprises that build contingency into the plan from day one are far less likely to face a disruptive, unplanned rollback later.",
        ],
      },
    ],

    benefits: [
      {
        title: "Fewer Surprises Mid Project",
        body:
          "A thorough assessment surfaces data and integration issues before they can derail the timeline.",
      },
      {
        title: "A Cleaner Target Environment",
        body:
          "Deliberate target state design avoids carrying legacy inefficiencies into the new platform.",
      },
      {
        title: "Reduced Business Disruption",
        body:
          "Phased execution keeps the service desk running throughout the transition.",
      },
      {
        title: "Clearer Stakeholder Confidence",
        body:
          "A staged roadmap gives leadership visibility into progress instead of a single high stakes cutover date.",
      },
      {
        title: "Lower Rollback Risk",
        body:
          "Built in contingency planning reduces the chance of an unplanned, disruptive reversal.",
      },
      {
        title: "Faster Issue Resolution",
        body:
          "Smaller migration phases make it easier to isolate and fix problems quickly.",
      },
    ],

    process: [
      {
        number: "01",
        title: "Assess the Current State",
        body:
          "Audit workflows, data quality, integrations, and technical debt across the existing platform.",
      },
      {
        number: "02",
        title: "Design the Target State",
        body:
          "Map the future operating model, roles, and platform capabilities before migration begins.",
      },
      {
        number: "03",
        title: "Build the Migration Strategy",
        body:
          "Sequence data, configuration, and workflow moves into a phased execution plan.",
      },
      {
        number: "04",
        title: "Execute and Validate",
        body:
          "Move each phase, test thoroughly, and confirm outcomes before advancing.",
      },
      {
        number: "05",
        title: "Stabilize and Support",
        body:
          "Provide hypercare and ongoing support as the organization settles into the new platform.",
      },
    ],

    keyTakeaways: [
      "A structured assessment is the strongest predictor of a smooth ITSM migration.",
      "Target state design should fix legacy inefficiencies, not copy them forward.",
      "Phased execution reduces the blast radius of any single migration issue.",
      "Parallel run periods and rollback plans protect the live service desk.",
      "Migration success is measured by how little disruption end users experience.",
    ],

    conclusion:
      "A low risk ITSM migration is the product of disciplined planning, not luck. Enterprises that invest in assessment, design the target state deliberately, and execute in careful phases consistently move faster and with fewer surprises than those that treat migration as a single high stakes event.",

    cta: {
      title: "Planning an ITSM Migration?",

      body:
        "Starfii can assess your current ITSM platform and build a phased migration roadmap that protects your service desk.",

      buttonText: "Talk to Starfii",

      buttonHref: "/services/itsm-migration#connect",
    },
  },

  {
    slug: "cmdb-data-quality-before-migration",

    title:
      "Why CMDB Data Quality Determines ITSM Migration Success",

    category: "ITSM Migration & Transformation",

    service: "itsm-migration",

    lastUpdated: "September 2026",

    readTime: "6 min read",

    heroImage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop",

    excerpt:
      "Stop migrating bad data into a new platform. See how Starfii cleanses and validates CMDB records before migration to prevent downstream service disruptions.",

    seo: {
      title:
        "Why CMDB Data Quality Determines ITSM Migration Success",

      description:
        "Learn why CMDB data cleansing and validation before migration prevents downstream service disruptions and inaccurate dependency mapping.",

      keywords: [
        "CMDB migration",
        "CMDB data quality",
        "ITSM migration",
        "asset migration",
        "configuration management database",
      ],
    },

    author: AUTHOR,

    intro: [
      "A CMDB is only as useful as the accuracy of the records inside it, and migration is the moment that accuracy gets tested the hardest.",

      "Moving flawed configuration data into a new platform does not fix the underlying problem, it simply gives the organization a modern place to keep bad data.",

      "Enterprises that treat CMDB cleansing as a prerequisite for migration, rather than an afterthought, avoid a long tail of downstream service disruptions.",
    ],

    highlights: [
      {
        number: "01",
        title: "Audit First",
        body:
          "Identify duplicate, orphaned, and stale configuration items before migration begins.",
      },
      {
        number: "02",
        title: "Cleanse and Validate",
        body:
          "Correct relationships and attributes so dependency mapping reflects reality.",
      },
      {
        number: "03",
        title: "Migrate With Confidence",
        body:
          "Move a validated CMDB instead of carrying legacy data problems forward.",
      },
    ],

    sections: [
      {
        heading: "Bad Data Does Not Improve With a New Platform",

        paragraphs: [
          "A common assumption is that moving to a modern ITSM platform will naturally clean up existing configuration data, but migration only relocates the problem.",

          "Duplicate configuration items, orphaned relationships, and stale records carry the same risk in a new environment as they did in the old one.",
        ],
      },

      {
        heading: "Audit Before You Move Anything",

        paragraphs: [
          "A thorough CMDB audit identifies duplicate records, broken relationships, and configuration items that no longer reflect the current infrastructure.",

          "This audit should happen well before migration execution begins, since cleansing decisions often require input from infrastructure and application owners.",
        ],

        image:
          "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop",

        imageAlt:
          "IT team auditing CMDB records before migration",
      },

      {
        heading: "Validate Relationships, Not Just Records",

        paragraphs: [
          "Individual configuration items can look accurate in isolation while the relationships between them are wrong, which undermines dependency mapping and impact analysis.",

          "Validating relationships alongside records gives teams confidence that incident and change impact assessments will be accurate after go live.",
        ],

        quote:
          "A clean CMDB is not a nice to have after migration. It is the difference between accurate impact analysis and guesswork.",
      },

      {
        heading: "Migrate a Trusted Dataset",

        paragraphs: [
          "Once configuration items and relationships are validated, migration becomes a matter of moving trusted data into a well designed target structure.",

          "This sequencing, cleanse first, migrate second, consistently produces a CMDB that teams can rely on immediately after cutover.",
        ],
      },
    ],

    benefits: [
      {
        title: "Accurate Dependency Mapping",
        body:
          "Validated relationships give teams a reliable view of how services and infrastructure connect.",
      },
      {
        title: "Fewer Post Migration Incidents",
        body:
          "Clean data reduces the chance of impact analysis errors after go live.",
      },
      {
        title: "Faster Root Cause Analysis",
        body:
          "Accurate CMDB records help teams trace incidents to their source more quickly.",
      },
      {
        title: "Reduced Manual Cleanup",
        body:
          "Cleansing before migration avoids repeated after the fact data fixes.",
      },
      {
        title: "Stronger Change Confidence",
        body:
          "Reliable configuration data improves the quality of change impact assessments.",
      },
      {
        title: "A Foundation for Automation",
        body:
          "Clean CMDB data is a prerequisite for reliable workflow automation and self healing processes.",
      },
    ],

    process: [
      {
        number: "01",
        title: "Audit the CMDB",
        body:
          "Identify duplicate, orphaned, and stale configuration items across the existing platform.",
      },
      {
        number: "02",
        title: "Engage Data Owners",
        body:
          "Work with infrastructure and application owners to resolve ambiguous or outdated records.",
      },
      {
        number: "03",
        title: "Cleanse and Deduplicate",
        body:
          "Correct attributes and remove duplicate or obsolete configuration items.",
      },
      {
        number: "04",
        title: "Validate Relationships",
        body:
          "Confirm that dependency mapping between configuration items reflects current infrastructure.",
      },
      {
        number: "05",
        title: "Migrate and Verify",
        body:
          "Move the validated dataset and verify accuracy in the new environment before go live.",
      },
    ],

    keyTakeaways: [
      "Migration relocates CMDB data quality problems, it does not fix them.",
      "A CMDB audit should happen well before migration execution begins.",
      "Relationships between configuration items matter as much as the records themselves.",
      "Clean CMDB data reduces incidents and improves change impact analysis after go live.",
      "Cleansing first and migrating second consistently produces a more trustworthy CMDB.",
    ],

    conclusion:
      "CMDB data quality is not a side detail in an ITSM migration, it is one of the strongest predictors of how the platform will perform after go live. Enterprises that audit, cleanse, and validate their configuration data before migration protect themselves from a long tail of avoidable service disruptions.",

    cta: {
      title: "Worried About CMDB Data Quality?",

      body:
        "Starfii can audit and cleanse your CMDB before migration, so dependency mapping and impact analysis are accurate from day one.",

      buttonText: "Talk to Starfii",

      buttonHref: "/services/itsm-migration#connect",
    },
  },

  {
    slug: "cutover-runbooks-service-continuity",

    title:
      "Building Cutover Runbooks That Protect Service Continuity",

    category: "ITSM Migration & Transformation",

    service: "itsm-migration",

    lastUpdated: "September 2026",

    readTime: "6 min read",

    heroImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop",

    excerpt:
      "Learn how detailed cutover runbooks and rollback plans help IT teams move to a new ITSM platform with confidence and minimal downtime.",

    seo: {
      title:
        "Building Cutover Runbooks That Protect Service Continuity",

      description:
        "Learn how cutover runbooks, rollback plans, and hypercare coverage protect service continuity during an ITSM platform switch.",

      keywords: [
        "ITSM cutover",
        "cutover runbook",
        "rollback plan",
        "ITSM migration",
        "service continuity",
      ],
    },

    author: AUTHOR,

    intro: [
      "Cutover is the moment an ITSM migration becomes real for end users, which is exactly why it deserves more planning than any other phase of the project.",

      "A detailed runbook turns cutover from a stressful, improvised event into a rehearsed sequence of steps with clear owners and clear rollback triggers.",

      "Enterprises that under invest in cutover planning often find that the platform itself was ready long before the process for switching to it was.",
    ],

    highlights: [
      {
        number: "01",
        title: "Runbook",
        body:
          "Document every cutover step, owner, and dependency in sequence.",
      },
      {
        number: "02",
        title: "Rollback Plan",
        body:
          "Define clear triggers and steps for reverting if something goes wrong.",
      },
      {
        number: "03",
        title: "Hypercare",
        body:
          "Staff up support immediately after go live to catch issues early.",
      },
    ],

    sections: [
      {
        heading: "Treat Cutover as Its Own Project",

        paragraphs: [
          "Cutover deserves the same level of planning as any other major project phase, with named owners, a detailed sequence of steps, and clear timing for each one.",

          "Teams that treat cutover as a simple final step after migration is otherwise complete are the ones most likely to be caught off guard on go live day.",
        ],
      },

      {
        heading: "Write the Runbook in Detail",

        paragraphs: [
          "A strong cutover runbook documents every step required to switch systems, including data freezes, final synchronization, DNS or access changes, and communication to end users.",

          "Each step should have an owner and an expected duration, so the team can tell early if the cutover is falling behind schedule.",
        ],

        image:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",

        imageAlt:
          "IT team following a cutover runbook during go live",
      },

      {
        heading: "Define Rollback Triggers in Advance",

        paragraphs: [
          "A rollback plan is only useful if the criteria for triggering it are defined before cutover begins, not debated in the moment under pressure.",

          "Clear, pre agreed triggers, such as failed data validation or a critical integration outage, let teams make fast decisions instead of hesitating.",
        ],

        quote:
          "The best rollback plan is the one nobody has to argue about at two in the morning.",
      },

      {
        heading: "Staff Hypercare Properly",

        paragraphs: [
          "The days immediately following cutover are when most issues surface, so hypercare support should be staffed at a higher level than normal operations.",

          "A well staffed hypercare period catches problems while they are still small, before they become visible to the wider organization.",
        ],
      },
    ],

    benefits: [
      {
        title: "Predictable Go Live",
        body:
          "A detailed runbook replaces improvisation with a rehearsed, sequenced process.",
      },
      {
        title: "Faster Issue Response",
        body:
          "Pre agreed rollback triggers let teams react quickly instead of debating under pressure.",
      },
      {
        title: "Reduced End User Disruption",
        body:
          "Clear communication steps in the runbook keep users informed throughout cutover.",
      },
      {
        title: "Early Issue Detection",
        body:
          "Well staffed hypercare catches problems before they escalate.",
      },
      {
        title: "Clearer Accountability",
        body:
          "Named owners for each runbook step remove ambiguity during a high pressure event.",
      },
      {
        title: "Stronger Stakeholder Confidence",
        body:
          "A rehearsed cutover plan reassures leadership that go live risk is well managed.",
      },
    ],

    process: [
      {
        number: "01",
        title: "Map Cutover Steps",
        body:
          "Document every action required to switch systems, in sequence, with owners assigned.",
      },
      {
        number: "02",
        title: "Define Rollback Triggers",
        body:
          "Agree in advance on the conditions that would require reverting to the legacy platform.",
      },
      {
        number: "03",
        title: "Rehearse the Runbook",
        body:
          "Walk through the plan with the team before go live to surface gaps and timing issues.",
      },
      {
        number: "04",
        title: "Execute Cutover",
        body:
          "Follow the runbook step by step, tracking progress against expected timing.",
      },
      {
        number: "05",
        title: "Run Hypercare",
        body:
          "Staff up support immediately after go live to resolve issues quickly.",
      },
    ],

    keyTakeaways: [
      "Cutover deserves the same planning discipline as any other major project phase.",
      "A detailed runbook with named owners reduces confusion during go live.",
      "Rollback triggers should be agreed before cutover, not debated during it.",
      "Hypercare should be staffed above normal levels immediately after go live.",
      "Rehearsing the runbook in advance surfaces gaps before they become real problems.",
    ],

    conclusion:
      "A successful ITSM cutover is the result of preparation, not luck on the day. Enterprises that build detailed runbooks, agree on rollback triggers in advance, and staff hypercare properly protect service continuity during the moment their migration matters most.",

    cta: {
      title: "Planning Your Cutover?",

      body:
        "Starfii builds detailed cutover runbooks and rollback plans that keep your ITSM migration on track.",

      buttonText: "Talk to Starfii",

      buttonHref: "/services/itsm-migration#connect",
    },
  },

  {
    slug: "modernizing-service-catalogs-self-service",

    title:
      "Modernizing Service Catalogs to Drive Self Service Adoption",

    category: "ITSM Migration & Transformation",

    service: "itsm-migration",

    lastUpdated: "September 2026",

    readTime: "5 min read",

    heroImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",

    excerpt:
      "Discover how a restructured service catalog improves employee self service adoption and reduces ticket volume for overloaded service desks.",

    seo: {
      title:
        "Modernizing Service Catalogs to Drive Self Service Adoption",

      description:
        "Learn how restructuring service categories, request forms, and routing rules during migration drives higher self service adoption.",

      keywords: [
        "service catalog migration",
        "self service adoption",
        "ITSM migration",
        "service catalog modernization",
        "request routing",
      ],
    },

    author: AUTHOR,

    intro: [
      "A service catalog that has grown organically over years often becomes a confusing list of overlapping requests that employees give up on and route to the service desk instead.",

      "Migration is a natural opportunity to rethink the catalog structure rather than simply reproducing it in a new platform.",

      "A catalog designed around how employees actually search for help drives real self service adoption instead of just looking modern.",
    ],

    highlights: [
      {
        number: "01",
        title: "Simplify",
        body:
          "Remove duplicate and overlapping service requests that confuse employees.",
      },
      {
        number: "02",
        title: "Organize",
        body:
          "Group requests by how employees think about problems, not by internal team structure.",
      },
      {
        number: "03",
        title: "Route Automatically",
        body:
          "Send requests to the right team without manual triage.",
      },
    ],

    sections: [
      {
        heading: "Do Not Migrate Catalog Clutter",

        paragraphs: [
          "Legacy service catalogs frequently accumulate duplicate or overlapping requests as different teams add items over time without a shared structure.",

          "Migrating this clutter into a new platform preserves the same confusion for employees, just with a different interface.",
        ],
      },

      {
        heading: "Organize Around Employee Language",

        paragraphs: [
          "A catalog organized around internal team names or ticket categories often fails, because employees describe problems in plain language rather than IT terminology.",

          "Restructuring the catalog around how employees actually search and describe issues makes self service far more likely to succeed.",
        ],

        image:
          "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop",

        imageAlt:
          "Employee browsing a modernized self service catalog",
      },

      {
        heading: "Automate Routing Behind the Scenes",

        paragraphs: [
          "Once requests are organized clearly, automated routing rules can send each request to the right team without requiring employees to know the internal org chart.",

          "This combination, a clear front end and automated routing behind it, is what actually reduces service desk ticket volume.",
        ],

        quote:
          "Employees will use self service when it is faster than emailing the help desk, and not a moment before.",
      },
    ],

    benefits: [
      {
        title: "Higher Self Service Adoption",
        body:
          "A clear, employee friendly catalog increases the share of requests handled without a live agent.",
      },
      {
        title: "Reduced Ticket Volume",
        body:
          "Fewer employees fall back to email or phone when the catalog is easy to navigate.",
      },
      {
        title: "Faster Request Fulfillment",
        body:
          "Automated routing gets requests to the right team without manual triage delays.",
      },
      {
        title: "Improved Employee Experience",
        body:
          "A catalog organized around plain language reduces frustration and repeated searches.",
      },
      {
        title: "Lower Service Desk Load",
        body:
          "Well structured self service frees agents to focus on complex issues.",
      },
      {
        title: "Cleaner Ongoing Maintenance",
        body:
          "A simplified catalog structure is easier for teams to keep current over time.",
      },
    ],

    process: [
      {
        number: "01",
        title: "Audit the Existing Catalog",
        body:
          "Identify duplicate, overlapping, or rarely used service requests.",
      },
      {
        number: "02",
        title: "Group by Employee Language",
        body:
          "Reorganize categories around how employees describe problems, not internal team names.",
      },
      {
        number: "03",
        title: "Redesign Request Forms",
        body:
          "Simplify forms to capture only the information needed to fulfill each request.",
      },
      {
        number: "04",
        title: "Build Routing Rules",
        body:
          "Automate request routing to the correct fulfillment team behind the scenes.",
      },
      {
        number: "05",
        title: "Measure and Refine",
        body:
          "Track adoption and ticket volume, and refine the catalog based on real usage patterns.",
      },
    ],

    keyTakeaways: [
      "Migrating a cluttered service catalog carries the same confusion into the new platform.",
      "Catalog structure should match how employees describe problems, not internal team names.",
      "Automated routing behind a simple front end is what actually reduces ticket volume.",
      "Self service adoption depends on speed and clarity, not just modern design.",
      "Catalog restructuring during migration is a low cost, high impact opportunity.",
    ],

    conclusion:
      "A modern ITSM platform will not fix self service adoption on its own if the catalog behind it is still cluttered and confusing. Enterprises that use migration as a chance to simplify, reorganize, and automate their service catalog see real reductions in ticket volume, not just a new coat of paint.",

    cta: {
      title: "Ready to Modernize Your Service Catalog?",

      body:
        "Starfii restructures service catalogs during migration to drive real self service adoption.",

      buttonText: "Talk to Starfii",

      buttonHref: "/services/itsm-migration#connect",
    },
  },

  {
    slug: "managed-services-after-itsm-go-live",

    title:
      "What Good Managed Services Look Like After ITSM Go Live",

    category: "ITSM Migration & Transformation",

    service: "itsm-migration",

    lastUpdated: "September 2026",

    readTime: "6 min read",

    heroImage:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop",

    excerpt:
      "Learn what to expect from managed services after an ITSM migration, from hypercare support to ongoing platform tuning and optimization.",

    seo: {
      title:
        "What Good Managed Services Look Like After ITSM Go Live",

      description:
        "Learn how hypercare, ongoing platform tuning, and ongoing managed services keep an ITSM platform improving after migration.",

      keywords: [
        "ITSM managed services",
        "post migration support",
        "ITSM optimization",
        "ITSM migration",
        "hypercare support",
      ],
    },

    author: AUTHOR,

    intro: [
      "Go live is not the finish line for an ITSM migration, it is the point where the platform starts being tested by real, everyday use.",

      "The first weeks after cutover surface issues that no amount of pre migration testing can fully predict, which is why hypercare and managed services matter so much.",

      "Enterprises that plan for ongoing support and tuning get more value from their new platform than those that treat go live as the end of the project.",
    ],

    highlights: [
      {
        number: "01",
        title: "Hypercare",
        body:
          "Provide elevated support immediately after go live to catch issues fast.",
      },
      {
        number: "02",
        title: "Tune",
        body:
          "Adjust workflows and automation as real usage patterns emerge.",
      },
      {
        number: "03",
        title: "Sustain",
        body:
          "Keep the platform optimized as ticket volume and business needs evolve.",
      },
    ],

    sections: [
      {
        heading: "Hypercare Is Not Just a Buzzword",

        paragraphs: [
          "The days and weeks immediately following go live typically see a higher volume of edge cases and configuration gaps than any other period.",

          "Elevated hypercare support during this window catches problems while they are small, before they turn into recurring complaints from end users.",
        ],
      },

      {
        heading: "Tune the Platform Against Real Usage",

        paragraphs: [
          "No amount of pre migration testing fully replicates how employees will actually use the platform once it goes live.",

          "Ongoing tuning of workflows, automation rules, and routing logic based on real usage data closes the gap between the design and reality.",
        ],

        image:
          "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",

        imageAlt:
          "Managed services team tuning an ITSM platform after go live",
      },

      {
        heading: "Treat Optimization as Continuous",

        paragraphs: [
          "As ticket volume, team structure, and business priorities change, the platform's configuration should evolve with them rather than staying frozen at the go live state.",

          "Managed services should include a regular cadence of review, not just reactive support when something breaks.",
        ],

        quote:
          "The value of an ITSM platform compounds when someone keeps tuning it. It erodes when nobody does.",
      },

      {
        heading: "Measure What Managed Services Are Actually Delivering",

        paragraphs: [
          "Good managed services engagements track metrics such as resolution time, automation coverage, and user satisfaction, not just uptime.",

          "These metrics give enterprises a clear picture of whether the platform is continuing to improve after the migration project has formally ended.",
        ],
      },
    ],

    benefits: [
      {
        title: "Faster Issue Resolution",
        body:
          "Elevated hypercare catches and resolves go live issues before they escalate.",
      },
      {
        title: "Continuous Improvement",
        body:
          "Ongoing tuning keeps workflows and automation aligned with real usage.",
      },
      {
        title: "Better Long Term ROI",
        body:
          "Sustained optimization protects the value of the migration investment over time.",
      },
      {
        title: "Reduced Configuration Drift",
        body:
          "Regular review cycles prevent the platform from quietly falling out of alignment with the business.",
      },
      {
        title: "Clear Performance Visibility",
        body:
          "Tracked metrics show whether the platform is improving, not just staying operational.",
      },
      {
        title: "Scalable Support Model",
        body:
          "A structured managed services model adapts as ticket volume and team needs grow.",
      },
    ],

    process: [
      {
        number: "01",
        title: "Run Hypercare",
        body:
          "Provide elevated support coverage in the days and weeks immediately after go live.",
      },
      {
        number: "02",
        title: "Monitor Real Usage",
        body:
          "Track how employees and agents are actually using the platform after cutover.",
      },
      {
        number: "03",
        title: "Tune Configuration",
        body:
          "Adjust workflows, automation, and routing rules based on real usage data.",
      },
      {
        number: "04",
        title: "Review Regularly",
        body:
          "Establish a recurring cadence to reassess configuration against business needs.",
      },
      {
        number: "05",
        title: "Report on Outcomes",
        body:
          "Track resolution time, automation coverage, and satisfaction to show ongoing value.",
      },
    ],

    keyTakeaways: [
      "Go live is the beginning of the platform's real test, not the end of the project.",
      "Hypercare support should be elevated well above normal levels immediately after cutover.",
      "Ongoing tuning closes the gap between pre migration design and real usage.",
      "Optimization should be continuous, not a one time activity tied to go live.",
      "Good managed services track improvement metrics, not just uptime.",
    ],

    conclusion:
      "The organizations that get the most value from an ITSM migration are the ones that keep investing in the platform after go live. Strong hypercare, continuous tuning, and a genuine managed services model turn a migration project into a platform that keeps getting better long after the cutover date.",

    cta: {
      title: "Need Support After Go Live?",

      body:
        "Starfii's managed services team provides hypercare and ongoing optimization after your ITSM migration.",

      buttonText: "Talk to Starfii",

      buttonHref: "/services/itsm-migration#connect",
    },
  },
];

/* ============================================================
   GET SINGLE BLOG
============================================================ */

export function getBlogBySlug(
  slug: string
): BlogPost | undefined {
  return blogPosts.find(
    (blog) =>
      blog.slug === slug &&
      blog.service === "itsm-migration"
  );
}

/* ============================================================
   GET RELATED BLOGS
============================================================ */

export function getRelatedBlogs(
  currentSlug: string,
  count = 3
): BlogPost[] {
  return blogPosts
    .filter(
      (blog) =>
        blog.slug !== currentSlug &&
        blog.service === "itsm-migration"
    )
    .slice(0, count);
}
export type CaseStudyResult = {
  metric: string;
  label: string;
};

export type PointGroup = {
  title: string;
  points: string[];
};

export type ClientStat = {
  value: string;
  label: string;
};

export type CaseStudy = {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  cardDescription: string;

  client: string;
  industry: string;
  services: string[];

  image: string;
  heroImage: string;

  // CLIENT section
  clientParagraphs: string[];
  clientStats: ClientStat[];

  // CHALLENGE section
  challengeParagraphs: string[];
  challengePoints: string[]; // shown under "Major Challenges"

  // SOLUTION section
  solutionParagraphs: string[];
  solutionGroups: PointGroup[];

  // BENEFITS section
  benefitsGroups: PointGroup[];

  // SUMMARY section
  summary: string;
  results: CaseStudyResult[];
  techStack: string[];

  // Publish date "YYYY-MM-DD". Newest shows first everywhere.
  date: string;
};

/*
  NOTE: Slugs (URLs) and image links keep their hyphens because routes
  need them. Every piece of text shown on the page is hyphen free.
*/

const rawCaseStudies: CaseStudy[] = [
  {
    slug: "ai-assistant-embedded-in-support-software",
    category: "AI Product Engineering",
    title: "Embedding an AI Assistant into a Customer Support Software Product",
    subtitle:
      "A help desk software vendor wanted AI powered replies inside its product without sending customer data to a third party or slowing agents down.",
    cardDescription:
      "See how Starfii shipped a production ready AI assistant inside an existing support product, cutting agent handling time while keeping customer data private.",

    client: "Help desk software vendor, 2,400 business customers",
    industry: "Software & Technology",
    services: ["AI Product Engineering", "Data Engineering", "Cloud Engineering"],

    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2000&auto=format&fit=crop",

    clientParagraphs: [
      "The client builds a ticketing and help desk product used by customer support teams across retail, telecom, and SaaS companies. Their customers were increasingly asking for AI features, and two competitors had already announced assistants of their own.",
      "The product team had a working prototype, but it called a public model API directly and had no way to guarantee that ticket content stayed inside each customer's own data boundary.",

      "The product team also needed the assistant to feel like a natural part of the existing agent workflow, rather than another separate tool that agents had to open and manage.",    ],
    clientStats: [
      { value: "2,400", label: "Business customers on the platform" },
      { value: "38,000", label: "Support agents using the product daily" },
      { value: "1.2M", label: "Tickets handled every month" },
    ],

    challengeParagraphs: [
      "The client needed to move from prototype to a production feature quickly, but the prototype could not be released as it was. Replies were slow, answers were sometimes wrong, and there was no record of which knowledge base article had informed a suggestion.",
      "Enterprise customers also made it clear that they would not enable any AI feature until data isolation, opt out controls, and audit logs were in place.",

      "The team therefore had to balance answer quality, response speed, privacy, and usability at the same time, while keeping the feature simple enough for support agents to trust during live conversations.",    ],
    challengePoints: [
      "Data isolation: Ticket content from one customer could never be used to answer another customer's tickets.",
      "Unreliable answers: The prototype produced confident replies even when the knowledge base had no relevant article.",
      "Slow responses: Suggested replies took 8 to 12 seconds, which agents would not wait for.",
      "No visibility: Product and support leads had no way to measure whether suggestions were actually being used.",
    ],

    solutionParagraphs: [
      "Starfii designed the assistant as a retrieval based feature that sits inside the agent's ticket view. Suggestions are built only from that customer's own knowledge base and past resolved tickets, and every suggestion shows the sources behind it.",
      "The feature was released in stages, starting with a small group of design partner customers, so the team could tune quality before opening it to everyone.",

      "The experience was kept deliberately close to the existing support workflow, with relevant context available at the moment an agent needed it and without requiring agents to leave the ticket screen.",    ],
    solutionGroups: [
      {
        title: "Retrieval & Answer Quality",
        points: [
          "Per customer vector indexes so each tenant's data stays separate",
          "Answers are generated only when a relevant source is found; otherwise the agent sees a clear 'no suggestion' state",
          "Every suggestion links to the article or ticket it came from",
        ],
      },
      {
        title: "Speed & Experience",
        points: [
          "Streaming responses so agents see the first words in under a second",
          "One click insert, edit, or dismiss directly inside the reply editor",
          "Caching of common questions to keep costs and latency low",
        ],
      },
      {
        title: "Governance & Analytics",
        points: [
          "Admin controls to enable or disable the assistant per team",
          "Full audit log of prompts, sources, and agent actions",
          "Dashboard showing acceptance rate, edits, and time saved",
        ],
      },
    ],

    benefitsGroups: [
      {
        title: "For Support Agents",
        points: [
          "Faster first replies with sources they can verify",
          "Less time searching the knowledge base for repeat questions",
        ],
      },
      {
        title: "For the Product Team",
        points: [
          "A shippable AI feature that enterprise security teams approved",
          "Usage data to guide the next set of AI improvements",
          "A reusable retrieval layer for future features",
        ],
      },
    ],

    summary:
      "The prototype proved the idea, but trust was what made the feature sellable. Isolating each customer's data, showing sources, and giving admins control turned an AI demo into a product enterprise customers were willing to switch on.",

    results: [
      { metric: "−31%", label: "Average ticket handling time" },
      { metric: "<1s", label: "Time to first suggestion" },
      { metric: "64%", label: "Suggestions accepted or lightly edited" },
      { metric: "11 wks", label: "From prototype to general availability" },
    ],
    techStack: ["Next.js", "Node.js", "Vector search", "LLM APIs", "PostgreSQL", "AWS"],

    date: "2025-10-01",
  },

  {
    slug: "legacy-erp-to-multi-tenant-saas",
    category: "SaaS Product Engineering",
    title: "Rearchitecting a Legacy ERP into a Multi Tenant SaaS Platform",
    subtitle:
      "An 18 year old on premise ERP product needed to become a cloud subscription product without breaking the customers who depended on it.",
    cardDescription:
      "Learn how Starfii moved an on premise ERP product to a multi tenant SaaS platform, cutting onboarding from months to days.",

    client: "Mid size ERP software vendor, 600+ on premise customers",
    industry: "Software & Technology",
    services: ["SaaS Product Engineering", "Composable Architecture", "Cloud Engineering"],

    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop",

    clientParagraphs: [
      "The client sells an ERP product covering finance, inventory, and purchasing to mid size manufacturers. For nearly two decades it was installed on each customer's own servers and customised for each deployment.",
      "New prospects were asking for a hosted subscription option, and existing customers were tired of paying for upgrade projects every year.",

      "The cloud version also needed to preserve the workflows that customers already understood, so the migration could improve the platform without forcing customers to relearn the entire product.",    ],
    clientStats: [
      { value: "600+", label: "On premise customer installations" },
      { value: "18 yrs", label: "Product in the market" },
      { value: "$42M", label: "Annual recurring revenue" },
    ],

    challengeParagraphs: [
      "Each customer ran a slightly different version of the product, with custom fields, reports, and integrations built over the years. Upgrades were manual projects that took the vendor's services team weeks per customer.",
      "The codebase assumed one company per database. Moving to a shared platform meant rethinking how data, configuration, and security worked, while continuing to support customers who were not ready to move.",

      "The migration had to account for differences between customer environments while creating a common foundation that could be maintained and released consistently going forward.",    ],
    challengePoints: [
      "Single tenant design: The application and database were built for one company per install.",
      "Heavy customisation: Hundreds of customer specific changes lived directly in the core code.",
      "Slow upgrades: Every release required a separate rollout project for each customer.",
      "Migration risk: Customers could not accept downtime or data loss during the move to the cloud.",
    ],

    solutionParagraphs: [
      "Starfii introduced a multi tenant core and moved customisation out of the code into a configuration layer, so customers could keep their own fields, workflows, and reports without forking the product.",
      "Modules were migrated in a planned order, with the desktop and SaaS versions kept in sync during the transition.",

      "The team separated customer specific behaviour from the shared application so the platform could evolve centrally while still supporting the configuration differences customers relied on.",    ],
    solutionGroups: [
      {
        title: "Platform Architecture",
        points: [
          "Tenant aware data layer with row level isolation and per tenant encryption keys",
          "Configuration engine for custom fields, workflows, and approval rules",
          "API first services so integrations no longer depend on database access",
        ],
      },
      {
        title: "Migration & Onboarding",
        points: [
          "Automated import tooling that maps on premise data into the new schema",
          "Parallel run period where customers compare results before switching",
          "Self service setup wizard for new customers",
        ],
      },
      {
        title: "Operations",
        points: [
          "Single release stream with feature flags for gradual rollouts",
          "Monitoring and usage metrics for every tenant",
        ],
      },
    ],

    benefitsGroups: [
      {
        title: "Faster Delivery",
        points: [
          "New versions reach every customer at once instead of one rollout project at a time",
          "Customer specific needs are handled through configuration, not code changes",
        ],
      },
      {
        title: "Business Growth",
        points: [
          "Subscription pricing opened the product to smaller manufacturers",
          "Services team time shifted from upgrades to onboarding and customer success",
          "Predictable recurring revenue replaced one off project income",
        ],
      },
    ],

    summary:
      "The real work was not moving servers to the cloud. It was removing the customisation that tied every customer to their own version. Once that lived in configuration, one product could serve all of them.",

    results: [
      { metric: "3 mo → 5 d", label: "New customer onboarding time" },
      { metric: "70%", label: "Reduction in upgrade services effort" },
      { metric: "210", label: "Customers migrated in the first year" },
      { metric: "99.95%", label: "Platform availability" },
    ],
    techStack: ["React", ".NET Core", "PostgreSQL", "Kubernetes", "Azure", "Feature flags"],

    date: "2025-09-01",
  },

  {
    slug: "fintech-mvp-to-scale-payments-dashboard",
    category: "Product Engineering",
    title: "From MVP to Scale: Building a Payments Platform for a Fintech Startup",
    subtitle:
      "A seed stage fintech had an investor demo and a six month deadline. Starfii helped turn the idea into a live product that could handle real transactions.",
    cardDescription:
      "See how Starfii took a fintech payments product from idea to launch in five months and scaled it to millions of transactions.",

    client: "Seed stage fintech startup, B2B payments for small businesses",
    industry: "Fintech",
    services: ["Product Strategy", "SaaS Product Engineering", "UX Consulting"],

    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop",

    clientParagraphs: [
      "The client is a young fintech building a payments and invoicing product for small businesses that need to collect money from other businesses without chasing invoices.",
      "The founders had a clear vision and early investor interest, but no in house engineering team and a launch date tied to their next funding milestone.",

      "Because the product would handle real financial workflows, the team also needed to make important actions clear and predictable for users from the first release.",    ],
    clientStats: [
      { value: "5 mo", label: "Idea to live product" },
      { value: "1,800", label: "Businesses onboarded in year one" },
      { value: "$96M", label: "Payment volume processed" },
    ],

    challengeParagraphs: [
      "The founders needed a product that looked and felt credible to finance teams, and that could pass banking partner reviews, all with a small budget and no room for rework.",
      "They also knew that the first version would change quickly once real customers started using it, so the foundation had to be simple to evolve.",

      "Every feature had to justify its place in the first release, while the underlying architecture still needed enough flexibility to support the feedback that would arrive after launch.",    ],
    challengePoints: [
      "Tight timeline: A fixed launch date linked to investor commitments.",
      "Regulated domain: Payments, identity checks, and audit trails had to be right from day one.",
      "Unclear scope: Many ideas, limited budget, and no data yet on what customers valued most.",
      "Future scale: The MVP needed to grow without a full rewrite after launch.",
    ],

    solutionParagraphs: [
      "Starfii ran a two week discovery to reduce the scope to the smallest product that delivered value: send an invoice, accept a payment, and reconcile it automatically.",
      "The product was built in short cycles with the founders reviewing a working version every week.",

      "The team prioritised the core payment journey and kept supporting workflows modular so new requirements could be added without disrupting the primary customer experience.",    ],
    solutionGroups: [
      {
        title: "Product & Design",
        points: [
          "Clickable prototype tested with 12 small business owners before development started",
          "Simple dashboard focused on what is owed, what is paid, and what is late",
        ],
      },
      {
        title: "Engineering Foundation",
        points: [
          "Modular backend where payments, invoicing, and notifications are separate services",
          "Integration with a licensed payments partner and an identity verification provider",
          "Automated tests and deployment pipeline from the first sprint",
        ],
      },
      {
        title: "Growth Readiness",
        points: [
          "Event tracking to show which features customers actually used",
          "Role based access for accountants and business owners",
        ],
      },
    ],

    benefitsGroups: [
      {
        title: "For the Founders",
        points: [
          "Launched on schedule and used the live product in the funding conversation",
          "Clear product data to prioritise the next roadmap items",
        ],
      },
      {
        title: "For Customers",
        points: [
          "Invoices paid faster with automatic reminders",
          "Payments matched to invoices without manual bookkeeping",
        ],
      },
    ],

    summary:
      "Cutting scope early mattered more than adding features. A small, dependable product on a clean foundation gave the startup something real to show investors and customers, and room to grow.",

    results: [
      { metric: "5 mo", label: "From kickoff to live launch" },
      { metric: "−42%", label: "Average days to get paid" },
      { metric: "1,800", label: "Businesses onboarded in year one" },
      { metric: "0", label: "Rewrites needed after launch" },
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe style payments API", "AWS"],

    date: "2025-08-01",
  },

  {
    slug: "devops-cicd-release-automation-product-company",
    category: "DevOps & Cloud",
    title: "Cutting Release Time by 5x with DevOps and CI/CD Automation",
    subtitle:
      "A software product company shipped once a month because every release depended on manual testing and a late night deployment.",
    cardDescription:
      "Discover how Starfii automated testing and deployment for a software product team, moving from monthly releases to several a week.",

    client: "B2B software product company, 9 engineering teams",
    industry: "Software & Technology",
    services: ["DevOps Consulting", "Cloud Engineering", "Quality Engineering"],

    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000&auto=format&fit=crop",

    clientParagraphs: [
      "The client develops a workforce management product used by mid size enterprises. Nine engineering teams contribute to a shared platform with web, mobile, and API components.",
      "As the team grew, releases became bigger, riskier, and slower, and customer requests waited weeks to reach production.",

      "With multiple teams contributing to the same product, the release process needed to become predictable enough that teams could make smaller changes without coordinating every deployment manually.",    ],
    clientStats: [
      { value: "9", label: "Engineering teams" },
      { value: "140", label: "Engineers contributing to the product" },
      { value: "1 / month", label: "Release frequency before the project" },
    ],

    challengeParagraphs: [
      "Releases were coordinated by a small group who ran regression tests by hand over a weekend. Any bug found late pushed the whole release back by another cycle.",
      "Environments were set up manually, so what worked in testing often behaved differently in production, and rollbacks were slow and stressful.",

      "The existing process made release risk visible only late in the cycle, so the new approach needed to move quality and deployment feedback much earlier in development.",    ],
    challengePoints: [
      "Manual regression: Around 900 test cases were executed by hand before each release.",
      "Inconsistent environments: Staging and production configuration had drifted apart.",
      "Big bang deployments: Changes from all nine teams shipped together, making failures hard to trace.",
      "Slow recovery: Rolling back a bad release took several hours.",
    ],

    solutionParagraphs: [
      "Starfii built a delivery pipeline that tests every change automatically and deploys it through the same steps every time, starting with the two teams that shipped most often.",
      "Infrastructure was moved into code so any environment could be created, compared, or rebuilt on demand.",

      "The pipeline standardised the path from code change to production and made deployment health visible throughout the process instead of relying on a final manual release check.",    ],
    solutionGroups: [
      {
        title: "Automated Quality",
        points: [
          "Automated unit, API, and end to end test suites running on every pull request",
          "Security and dependency scanning built into the pipeline",
          "Test results and coverage visible to every team",
        ],
      },
      {
        title: "Reliable Deployments",
        points: [
          "Infrastructure as code so environments stay consistent",
          "Blue green and canary releases with automatic rollback",
          "Feature flags to separate deployment from release",
        ],
      },
      {
        title: "Visibility",
        points: [
          "Delivery dashboard tracking lead time, deploy frequency, and failure rate",
          "Alerts tied to each release for faster diagnosis",
        ],
      },
    ],

    benefitsGroups: [
      {
        title: "Speed to Market",
        points: [
          "Customer requested changes reach production in days instead of weeks",
          "Teams release independently without waiting for a shared date",
        ],
      },
      {
        title: "Quality & Confidence",
        points: [
          "Fewer defects found after release",
          "Weekend release work eliminated for the engineering teams",
          "Rollbacks completed in minutes",
        ],
      },
    ],

    summary:
      "The bottleneck was not developer speed, it was the manual work around every release. Automating tests and deployments let each team ship small changes safely and often.",

    results: [
      { metric: "1/mo → 4/wk", label: "Release frequency" },
      { metric: "−68%", label: "Post release defects" },
      { metric: "4h → 6min", label: "Rollback time" },
      { metric: "85%", label: "Regression tests automated" },
    ],
    techStack: ["GitHub Actions", "Terraform", "Kubernetes", "Playwright", "Datadog", "AWS"],

    date: "2025-07-01",
  },

  {
    slug: "b2b-analytics-product-ux-redesign",
    category: "UX & Product Design",
    title: "Redesigning a B2B Analytics Product for Adoption and Retention",
    subtitle:
      "An analytics product with powerful features was losing customers because new users could not find value in their first week.",
    cardDescription:
      "See how Starfii combined UX research and front end engineering to redesign an analytics product and lift activation and retention.",

    client: "B2B analytics software company, 350 enterprise accounts",
    industry: "Software & Technology",
    services: ["UX Consulting", "SaaS Product Engineering", "Design Systems"],

    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop",

    clientParagraphs: [
      "The client offers a dashboarding and reporting product used by operations and finance teams at large companies. The product had grown feature by feature over eight years.",
      "Sales demos went well, but many customers struggled after purchase, and renewal conversations kept returning to the same complaint: the product was hard to learn.",

      "The redesign also needed to work for experienced customers, who already had established workflows and could not simply be moved to an entirely unfamiliar interface.",    ],
    clientStats: [
      { value: "350", label: "Enterprise accounts" },
      { value: "8 yrs", label: "Of feature growth" },
      { value: "27%", label: "Of new users active after 30 days" },
    ],

    challengeParagraphs: [
      "Usage data showed that most new users opened the product once or twice and never built their first dashboard. Interviews revealed that the navigation grew organically, and each screen followed different patterns.",
      "The team wanted to improve the experience without pausing feature work or forcing existing customers to relearn everything at once.",

      "The team had to improve the first time experience while preserving the productivity of existing users who depended on the product every day.",    ],
    challengePoints: [
      "Complex navigation: More than 60 menu items spread across five different areas.",
      "Inconsistent interface: Similar actions looked and behaved differently from screen to screen.",
      "Empty first experience: New accounts started with a blank workspace and no guidance.",
      "Limited front end capacity: The codebase had no shared components, so every change took longer than it should.",
    ],

    solutionParagraphs: [
      "Starfii started with research: 18 customer interviews and a review of session recordings to find where new users got stuck. The findings shaped a simplified structure built around the first tasks people actually needed to complete.",
      "The redesign was delivered gradually behind feature flags, and every change was tested with a subset of accounts before wider release.",

      "Changes were introduced incrementally so the product could improve its onboarding and navigation without requiring a disruptive all at once redesign.",    ],
    solutionGroups: [
      {
        title: "Experience Design",
        points: [
          "New navigation built around jobs to be done instead of internal feature names",
          "Guided first run flow that helps users create a useful dashboard from their own data",
          "Template gallery for the most common reports",
        ],
      },
      {
        title: "Design System & Engineering",
        points: [
          "Shared component library used across all product areas",
          "Accessibility improvements to meet WCAG 2.1 AA",
          "Performance work on the heaviest dashboard screens",
        ],
      },
      {
        title: "Measurement",
        points: [
          "Activation and retention metrics defined before design started",
          "A/B tests on onboarding steps to confirm improvements",
        ],
      },
    ],

    benefitsGroups: [
      {
        title: "For Customers",
        points: [
          "Faster time to the first useful dashboard",
          "A consistent interface that is easier to learn and to train others on",
        ],
      },
      {
        title: "For the Product Team",
        points: [
          "New features built from ready made components in less time",
          "Clear metrics linking design changes to retention",
          "Fewer support tickets about basic navigation",
        ],
      },
    ],

    summary:
      "The product did not need fewer features; it needed a clearer path to the first result. Redesigning around the first tasks users care about, and backing it with a shared design system, made the product easier to adopt and easier to build on.",

    results: [
      { metric: "27% → 58%", label: "Users active after 30 days" },
      { metric: "−44%", label: "Time to first dashboard" },
      { metric: "−36%", label: "Navigation related support tickets" },
      { metric: "+12 pts", label: "Net revenue retention" },
    ],
    techStack: ["React", "TypeScript", "Storybook", "Figma", "GraphQL", "Amplitude"],

    date: "2025-06-01",
  },
];

// Newest date first. This is what every page actually imports.
export const caseStudies: CaseStudy[] = [...rawCaseStudies].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
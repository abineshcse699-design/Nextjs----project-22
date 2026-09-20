// Save as: app/industries/technology-products/data/casestudies.ts
//
// NOTE: client descriptions, figures and outcomes are DRAFT placeholder
// content. Replace with real, approved client data before going live.

export type CaseStudyResult = {
  metric: string;
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

  overview: string;
  clientOverview: string;

  challengeIntro: string;
  challengePoints: string[];

  solutionIntro: string;
  solutionDetail: string;
  solution: string[];

  results: CaseStudyResult[];

  benefitsIntro: string;
  benefits: string[];

  summary: string;
  techStack: string[];

  // "YYYY-MM-DD". Latest date shows first everywhere.
  date: string;
};

const rawCaseStudies: CaseStudy[] = [
  {
    slug: "technology-scalable-product-platform",
    category: "Product Engineering",

    title: "Starfii Builds a Scalable Digital Product Platform",
    subtitle:
      "A growing software company had a promising product, but every new feature slowed the codebase and the release process a little more.",
    cardDescription:
      "A product engineering program connected experience, application architecture, APIs, and cloud foundations around a scalable product platform.",

    client: "Software company, ~250 employees, product used by 1,200+ business customers",
    industry: "Technology, Products & Platforms",
    services: ["Product Engineering", "Platform Engineering", "Cloud Engineering"],

    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop",

    overview: "A product growing faster than its foundation",
    clientOverview:
      "The product had grown feature by feature on a single codebase. Releases were infrequent, teams blocked each other, and customers were asking for integrations the architecture could not support without major rework.",

    challengeIntro: "Growth outpacing architecture",
    challengePoints: [
      "Coupled codebase: Teams could not ship independently without breaking each other's work.",
      "Slow releases: Deployments happened monthly and needed a full regression cycle.",
      "Limited integrations: Customer-requested APIs and connectors had no clean place to live.",
    ],

    solutionIntro: "A modular platform with APIs at the center",
    solutionDetail:
      "Starfii defined a target architecture, exposed core capabilities as APIs, and moved the product onto a modular platform one capability at a time, alongside continued feature delivery.",
    solution: [
      "Modular architecture: Core capabilities became independent services with clear ownership.",
      "Public API layer: Customers and partners integrate through documented, versioned APIs.",
      "Delivery pipeline: Automated build, test, and release replaced the monthly regression cycle.",
    ],

    results: [
      { metric: "Monthly → Weekly", label: "Production release frequency" },
      { metric: "-55%", label: "Lead time from commit to release" },
      { metric: "20+", label: "Partner integrations enabled through the API layer" },
      { metric: "99.95%", label: "Platform availability" },
    ],

    benefitsIntro: "What changed for the product and its teams",
    benefits: [
      "Independent teams: Squads ship their own services without waiting on each other.",
      "Faster customer value: Features and integrations reach customers weeks sooner.",
      "Room to scale: New capabilities plug into the platform instead of the monolith.",
    ],

    summary:
      "The product did not need a rewrite. It needed clearer boundaries. Modular services and an API layer let the team keep shipping features while the foundation improved underneath.",

    techStack: [
      "Microservices",
      "API gateway",
      "CI/CD",
      "Cloud infrastructure",
      "Observability",
    ],

    date: "2026-09-01",
  },

  {
    slug: "technology-saas-ecosystem-modernization",
    category: "SaaS Modernization",

    title: "Starfii Modernizes a SaaS Technology Ecosystem",
    subtitle:
      "A ten-year-old SaaS product still served thousands of customers, but its single-tenant design made every new customer costly to onboard and operate.",
    cardDescription:
      "Platform and application modernization created stronger foundations for a growing SaaS product and its connected digital services.",

    client: "B2B SaaS provider, 3,500+ customer accounts",
    industry: "Technology, Products & Platforms",
    services: ["SaaS Modernization", "Application Modernization", "Platform Engineering"],

    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000&auto=format&fit=crop",

    overview: "A successful product held back by its own design",
    clientOverview:
      "Each customer ran on a separately deployed instance. Upgrades had to be rolled out account by account, infrastructure costs grew with every new customer, and the team spent more time on operations than on new features.",

    challengeIntro: "Single-tenant operations that did not scale",
    challengePoints: [
      "Per-customer deployments: Every account ran on its own instance and needed its own upgrade.",
      "Rising cost: Infrastructure and support effort grew in step with the customer count.",
      "No downtime tolerance: Customers depended on the product daily, so risky migrations were off the table.",
    ],

    solutionIntro: "Multi-tenant modernization without interrupting customers",
    solutionDetail:
      "Starfii introduced a multi-tenant architecture, then migrated customers in waves, running old and new side by side and validating each wave before moving the next.",
    solution: [
      "Multi-tenant architecture: One platform serves many customers with isolated data and configurable settings.",
      "Wave-based migration: Customers moved in small groups, starting with lower-risk accounts.",
      "Automated tenant onboarding: New accounts are provisioned in minutes instead of days.",
    ],

    results: [
      { metric: "-40%", label: "Infrastructure cost per customer" },
      { metric: "Days → Minutes", label: "New customer onboarding time" },
      { metric: "3,500+", label: "Accounts migrated" },
      { metric: "0", label: "Customer-facing outages during migration" },
    ],

    benefitsIntro: "What changed for customers and the SaaS team",
    benefits: [
      "One upgrade for everyone: New releases reach all customers at once.",
      "Lower cost to serve: Margins improve as the customer base grows.",
      "More time for product: Engineers spend less time on per-account operations.",
    ],

    summary:
      "Customers never noticed the migration, which was the goal. Moving in validated waves let the company change its foundation without asking anyone to stop using the product.",

    techStack: [
      "Multi-tenant architecture",
      "Automated provisioning",
      "Data migration tooling",
      "Cloud infrastructure",
      "Observability",
    ],

    date: "2026-08-01",
  },

  {
    slug: "technology-ai-native-engineering",
    category: "AI-Native Development",

    title: "Starfii Accelerates AI-Native Engineering",
    subtitle:
      "Product teams wanted intelligent features and faster delivery, but had no shared way to build, test, and govern AI capabilities.",
    cardDescription:
      "AI capabilities and modern engineering practices were connected to create more intelligent product workflows and delivery experiences.",

    client: "Digital product company with 6 product teams",
    industry: "Technology, Products & Platforms",
    services: ["AI-Native Development", "Platform Engineering", "Quality Engineering"],

    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",

    overview: "Six teams, six different ways of building with AI",
    clientOverview:
      "Each team had started its own AI experiments with different tools and no shared standards for evaluation, data handling, or review. Promising prototypes stalled before reaching production.",

    challengeIntro: "Scattered AI experiments and no path to production",
    challengePoints: [
      "Inconsistent tooling: Teams used different models, prompts, and pipelines with no shared standards.",
      "Unproven quality: There was no consistent way to test AI output before release.",
      "Governance gaps: Data use, logging, and human review were handled differently by each team.",
    ],

    solutionIntro: "A shared AI foundation with quality and governance built in",
    solutionDetail:
      "Starfii built a shared AI platform layer with common components, evaluation, and guardrails, and applied AI-assisted practices across the engineering workflow.",
    solution: [
      "Shared AI layer: Common services for retrieval, prompts, and model access that every team reuses.",
      "Evaluation and testing: Automated checks measure quality before any AI feature ships.",
      "Governance and oversight: Logging, data controls, and human review are part of the platform by default.",
    ],

    results: [
      { metric: "6", label: "Product teams on one shared AI platform" },
      { metric: "3x", label: "Faster time from AI prototype to production" },
      { metric: "-30%", label: "Time spent on routine engineering tasks" },
      { metric: "100%", label: "AI features shipped with automated evaluation" },
    ],

    benefitsIntro: "What changed for product and engineering teams",
    benefits: [
      "Faster path to production: Prototypes reach users in weeks, not quarters.",
      "Consistent quality: Every AI feature is evaluated the same way before release.",
      "Trust built in: Logging and review are part of the platform, not an afterthought.",
    ],

    summary:
      "The teams did not need more AI ideas. They needed a shared, safe way to ship them. A common platform with built-in evaluation turned scattered experiments into dependable product features.",

    techStack: [
      "Large language models",
      "Retrieval-augmented generation",
      "Evaluation framework",
      "Prompt and response logging",
      "CI/CD",
    ],

    date: "2026-07-01",
  },

  {
    slug: "technology-ecommerce-peak-season-scale",
    category: "Cloud Engineering",

    title: "Starfii Scales an E Commerce Platform for Peak Season Traffic",
    subtitle:
      "Every holiday season, traffic spikes pushed the platform to its limits, and the team spent weeks firefighting instead of building.",
    cardDescription:
      "See how Starfii's cloud engineering team re-architected a high traffic platform on AWS to handle peak season load without downtime.",

    client: "Online marketplace platform, 10M+ monthly visitors",
    industry: "Technology, Products & Platforms",
    services: ["Cloud Engineering", "DevOps", "Performance Engineering"],

    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop",

    overview: "A platform built for average days, not peak ones",
    clientOverview:
      "Capacity was provisioned by hand ahead of each season and often guessed wrong. Slowdowns at peak hours cost sales, and the engineering team was pulled away from product work for weeks around every major sale event.",

    challengeIntro: "Traffic spikes that the architecture could not absorb",
    challengePoints: [
      "Manual capacity planning: Servers were sized by estimate and adjusted by hand.",
      "Peak-hour slowdowns: Response times degraded when traffic surged.",
      "Costly firefighting: Engineers spent weeks on incident response instead of product work.",
    ],

    solutionIntro: "An elastic cloud architecture that scales with demand",
    solutionDetail:
      "Starfii re-architected the platform on AWS with autoscaling, caching, and resilient services, then validated it with load testing before the next peak season.",
    solution: [
      "Autoscaling: Capacity grows and shrinks with real traffic, with no manual sizing.",
      "Caching and optimization: Hot paths were tuned to serve peak load faster and cheaper.",
      "Load testing and observability: Peak scenarios were rehearsed in advance and monitored live.",
    ],

    results: [
      { metric: "0", label: "Downtime through peak season" },
      { metric: "4x", label: "Peak traffic handled versus previous year" },
      { metric: "-50%", label: "Page response time at peak" },
      { metric: "-25%", label: "Annual infrastructure spend" },
    ],

    benefitsIntro: "What changed for shoppers and the engineering team",
    benefits: [
      "Reliable peaks: The platform stays fast when demand is highest.",
      "Lower cost: Capacity is paid for when used, not held in reserve.",
      "Focus restored: Engineers spend peak season on product, not incident response.",
    ],

    summary:
      "The fix was not more servers. It was a platform that adjusts itself. Rehearsing peak load ahead of time meant the busiest season became a routine one.",

    techStack: [
      "AWS",
      "Autoscaling",
      "Caching layer",
      "Load testing",
      "Observability",
    ],

    date: "2026-06-01",
  },
];

// Newest date first. This is what every page imports.
export const caseStudies: CaseStudy[] = [...rawCaseStudies].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
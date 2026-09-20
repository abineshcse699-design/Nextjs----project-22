// Save as: app/industries/retail-consumer/data/casestudies.ts
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
    slug: "retail-connected-experience-modernization",
    category: "Customer Experience",

    title: "Starfii Modernizes a Connected Retail Experience",
    subtitle:
      "Shoppers could browse online and buy in store, but the two never shared a cart, loyalty balance, or order history.",
    cardDescription:
      "A digital modernization program improved customer journeys while creating a more scalable foundation for commerce and digital experiences.",

    client: "Specialty retailer, 220 stores and a growing online channel",
    industry: "Retail & Consumer",
    services: ["Customer Experience", "Mobile and Web", "Application Engineering"],

    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop",

    overview: "Stores, web, and app that did not know each other",
    clientOverview:
      "Each channel ran on its own systems. Loyalty points did not carry between store and web, returns had to go back through the original channel, and store staff could not see a customer's online activity.",

    challengeIntro: "Disconnected channels and inconsistent journeys",
    challengePoints: [
      "Channel silos: Store, web, and app held separate customer and order data.",
      "Loyalty gaps: Points earned in one channel were not visible in another.",
      "Slow change: Each customer-facing update meant separate work across three systems.",
    ],

    solutionIntro: "A connected experience layer across every channel",
    solutionDetail:
      "Starfii introduced an API-based experience layer that unifies customer, order, and loyalty data, then rebuilt the top journeys on web and mobile on top of it.",
    solution: [
      "Unified customer view: One profile, order history, and loyalty balance across all channels.",
      "Cross-channel journeys: Buy online and return in store, or reserve online and pick up, without friction.",
      "Experience layer: New features ship once and appear on web, app, and store devices.",
    ],

    results: [
      { metric: "+28%", label: "Repeat purchase rate among connected customers" },
      { metric: "+35%", label: "Loyalty program engagement" },
      { metric: "-40%", label: "Time to ship a customer-facing change" },
      { metric: "+12 pts", label: "Customer satisfaction score" },
    ],

    benefitsIntro: "What changed for shoppers and store teams",
    benefits: [
      "Consistent experience: Customers get the same context in store, on web, and in the app.",
      "Empowered staff: Store teams see order and loyalty history to serve customers better.",
      "Faster improvement: One change reaches every channel instead of three.",
    ],

    summary:
      "The channels were never the problem. The missing link between them was. A shared experience layer gave customers one relationship with the brand and gave the business one place to improve it.",

    techStack: [
      "React",
      "Next.js",
      "API gateway",
      "Customer data platform",
      "Mobile apps",
    ],

    date: "2026-09-01",
  },

  {
    slug: "retail-scalable-digital-commerce-platform",
    category: "Digital Commerce",

    title: "Starfii Builds a Scalable Digital Commerce Platform",
    subtitle:
      "A monolithic storefront slowed at peak traffic, and adding a payment method or promotion meant a full release cycle.",
    cardDescription:
      "Application engineering and integration capabilities helped evolve a commerce ecosystem around modular, connected digital services.",

    client: "Consumer goods brand selling direct online, 3M+ annual orders",
    industry: "Retail & Consumer",
    services: ["Digital Commerce", "Application Engineering", "Systems Integration"],

    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=2000&auto=format&fit=crop",

    overview: "A storefront that struggled when demand peaked",
    clientOverview:
      "Catalog, pricing, checkout, and order management sat inside one large application. Seasonal peaks caused slowdowns, and even small changes such as a new promotion type needed a coordinated release of the whole platform.",

    challengeIntro: "A monolith that could not keep up with demand",
    challengePoints: [
      "Peak-time slowdowns: Checkout performance dropped during sales and holiday traffic.",
      "Slow releases: Small changes required a full platform release.",
      "Hard to integrate: Adding a payment method or fulfillment partner took weeks.",
    ],

    solutionIntro: "Modular commerce services that scale independently",
    solutionDetail:
      "Starfii separated catalog, pricing, checkout, and order management into API-driven services, migrating one capability at a time while the live store kept running.",
    solution: [
      "Modular services: Each commerce capability scales and changes on its own.",
      "Integration layer: New payment and fulfillment partners connect through standard APIs.",
      "Staged migration: Capabilities moved over in priority order with the old and new running side by side.",
    ],

    results: [
      { metric: "-45%", label: "Checkout time at peak traffic" },
      { metric: "+18%", label: "Checkout conversion rate" },
      { metric: "5x", label: "Faster release cadence" },
      { metric: "0", label: "Sales-impacting incidents during migration" },
    ],

    benefitsIntro: "What changed for shoppers and the commerce team",
    benefits: [
      "Smoother peaks: The store stays fast when traffic is highest.",
      "Faster launches: Promotions and payment options go live in days, not release cycles.",
      "Room to grow: New channels and partners plug into the same services.",
    ],

    summary:
      "Breaking the monolith apart did not require stopping sales. Moving one capability at a time meant the store kept running while it became faster and easier to change.",

    techStack: [
      "Microservices",
      "API gateway",
      "Event streaming",
      "Cloud infrastructure",
      "Observability",
    ],

    date: "2026-08-01",
  },

  {
    slug: "retail-data-analytics-foundation",
    category: "Data and Analytics",

    title: "Starfii Connects Retail Data and Analytics",
    subtitle:
      "Sales, inventory, and customer data lived in separate systems, so planners waited days for a view of what was actually selling.",
    cardDescription:
      "A data modernization approach connected fragmented retail information to create stronger reporting, analytics, and operational visibility.",

    client: "Multi-brand retailer, 35+ data sources across stores and online",
    industry: "Retail & Consumer",
    services: ["Data Engineering", "Analytics", "Cloud Engineering"],

    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",

    overview: "Plenty of data, but no shared view of demand",
    clientOverview:
      "Point-of-sale, e-commerce, inventory, and loyalty data sat in separate systems with different definitions. Merchandising and supply teams built their own spreadsheets, and reports often disagreed on basic numbers.",

    challengeIntro: "Fragmented data and slow, conflicting reports",
    challengePoints: [
      "Fragmented sources: Sales, stock, and customer data lived in 35+ systems.",
      "Conflicting numbers: Teams used different definitions for the same metrics.",
      "Delayed insight: Weekly reports arrived after decisions had already been made.",
    ],

    solutionIntro: "A governed data platform with near real-time views",
    solutionDetail:
      "Starfii consolidated the key sources into a governed cloud platform with shared definitions, then built dashboards for merchandising, stores, and supply teams.",
    solution: [
      "Unified data platform: Key sources feed one governed store with consistent definitions.",
      "Near real-time dashboards: Sales, stock, and channel performance update through the day.",
      "Self-service analytics: Teams explore trusted data without waiting on analysts.",
    ],

    results: [
      { metric: "Weekly → Daily", label: "Frequency of demand and stock reporting" },
      { metric: "35+", label: "Data sources consolidated" },
      { metric: "-22%", label: "Out-of-stock incidents on key lines" },
      { metric: "-50%", label: "Analyst time spent on manual reporting" },
    ],

    benefitsIntro: "What changed for merchandising and supply teams",
    benefits: [
      "One version of the truth: Every team reads the same numbers.",
      "Faster reactions: Teams respond to demand shifts within the day.",
      "Analysts freed up: Time goes to insight instead of reconciliation.",
    ],

    summary:
      "The biggest change was agreement. Once every team worked from the same definitions and the same data, decisions got faster and arguments about the numbers stopped.",

    techStack: [
      "Cloud data platform",
      "Data pipelines",
      "Governance and lineage",
      "Analytics dashboards",
      "Observability",
    ],

    date: "2026-07-01",
  },
];

// Newest date first. This is what every page imports.
export const caseStudies: CaseStudy[] = [...rawCaseStudies].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
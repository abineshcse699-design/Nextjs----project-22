// Save as: app/industries/transport/data/casestudies.ts
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
    slug: "logistics-connected-platform-modernization",
    category: "Logistics Platforms",

    title: "Starfii Modernizes a Connected Logistics Platform",
    subtitle:
      "A growing logistics company ran orders, carriers, and shipments on separate systems, so every new customer or carrier meant more manual coordination.",
    cardDescription:
      "A digital modernization program connected logistics workflows, applications, and data around a scalable operational technology foundation.",

    client: "Third-party logistics provider, 40+ carrier partners",
    industry: "Transportation & Logistics",
    services: ["Logistics Platforms", "Application Engineering", "Cloud Engineering"],

    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop",

    overview: "Growth held back by disconnected logistics systems",
    clientOverview:
      "Order management, carrier booking, and shipment records lived in separate applications. Dispatchers re-entered the same details in several places, onboarding a new carrier took weeks, and customers had to call for basic shipment updates.",

    challengeIntro: "Fragmented systems slowing every shipment",
    challengePoints: [
      "Disconnected applications: Orders, carriers, and shipments were managed in separate tools with no shared record.",
      "Manual coordination: Dispatch teams re-keyed information and confirmed details by phone and email.",
      "Slow partner onboarding: Each new carrier needed custom integration work before the first shipment.",
    ],

    solutionIntro: "One connected platform, modernized in stages",
    solutionDetail:
      "Starfii wrapped the existing systems with APIs, built a connected logistics platform on top, and moved workflows over in priority order, running old and new side by side until each step was validated.",
    solution: [
      "Connected platform: Orders, carriers, shipments, and customers share one operational record.",
      "Standard carrier integrations: New carriers connect through reusable APIs instead of custom builds.",
      "Phased migration: Workflows moved in priority order so shipments and dispatch kept running without interruption.",
    ],

    results: [
      { metric: "Weeks → Days", label: "Time to onboard a new carrier" },
      { metric: "-45%", label: "Manual data entry in dispatch" },
      { metric: "+30%", label: "Shipments handled per dispatcher" },
      { metric: "0", label: "Shipment disruptions during migration" },
    ],

    benefitsIntro: "What changed for operations, carriers, and customers",
    benefits: [
      "One source of truth: Everyone works from the same shipment and order information.",
      "Faster growth: New carriers and customers come on board without custom work.",
      "Fewer status calls: Customers see shipment progress without contacting the team.",
    ],

    summary:
      "The company did not need to replace everything at once. It needed its systems to work as one. A connected platform and reusable integrations let operations scale without slowing down daily shipments.",

    techStack: [
      "API gateway",
      "Integration layer",
      "Modular architecture",
      "Cloud infrastructure",
      "Observability",
    ],

    date: "2026-09-01",
  },

  {
    slug: "logistics-end-to-end-operational-visibility",
    category: "Tracking & Visibility",

    title: "Starfii Creates End to End Operational Visibility",
    subtitle:
      "Shipment status, tracking signals, and warehouse events sat in different systems, so teams learned about delays only after customers did.",
    cardDescription:
      "Tracking, data integration, and analytics capabilities connected fragmented operational information into clearer visibility.",

    client: "Multi-modal freight and warehousing company, 12 regional hubs",
    industry: "Transportation & Logistics",
    services: ["Tracking & Visibility", "Data & Analytics", "Cloud Engineering"],

    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=2000&auto=format&fit=crop",

    overview: "Information everywhere, but no single view of the journey",
    clientOverview:
      "Carrier tracking feeds, warehouse scans, and order data were stored separately. Operations teams pieced together shipment status from several screens, exceptions were found late, and reports were compiled by hand each week.",

    challengeIntro: "Late exceptions and an incomplete picture of each shipment",
    challengePoints: [
      "Scattered signals: Tracking, warehouse, and order data could not be viewed together.",
      "Late exception handling: Delays and missed handoffs surfaced only after customers asked.",
      "Manual reporting: Performance reports were assembled by hand and were always out of date.",
    ],

    solutionIntro: "A unified visibility layer with analytics on top",
    solutionDetail:
      "Starfii integrated tracking, warehouse, and order data into a governed data platform, then built live dashboards and exception alerts so teams and customers work from the same trusted information.",
    solution: [
      "Unified shipment view: Tracking signals and operational events combine into one timeline per shipment.",
      "Exception alerts: Delays and missed handoffs are flagged early and routed to the right team.",
      "Analytics and dashboards: Performance, on-time delivery, and hub activity are visible in near real time.",
    ],

    results: [
      { metric: "+40%", label: "Shipments with real-time tracking coverage" },
      { metric: "-50%", label: "Time to detect and respond to exceptions" },
      { metric: "-35%", label: "Customer status inquiries" },
      { metric: "Weekly → Live", label: "Operational reporting cadence" },
    ],

    benefitsIntro: "What changed for operations and customers",
    benefits: [
      "Earlier response: Teams act on exceptions before they become customer complaints.",
      "Shared visibility: Operations and customers see the same trusted shipment information.",
      "Better decisions: Live analytics replace hand-built weekly reports.",
    ],

    summary:
      "The data already existed. It was just never in one place. Bringing tracking, warehouse, and order signals together turned scattered updates into a clear view of every journey.",

    techStack: [
      "Data integration",
      "Streaming pipelines",
      "Dashboards and analytics",
      "Alerting",
      "Cloud infrastructure",
    ],

    date: "2026-08-01",
  },

  {
    slug: "logistics-mobile-and-cloud-services",
    category: "Mobile & Cloud",

    title: "Starfii Builds Modern Mobile and Cloud Services",
    subtitle:
      "Drivers relied on paper manifests and phone calls, and the on-premises systems behind them could not keep up with growing delivery volumes.",
    cardDescription:
      "Mobile application engineering and cloud modernization created a stronger foundation for connected transportation workflows.",

    client: "Regional transportation company, 800+ drivers",
    industry: "Transportation & Logistics",
    services: ["Mobile Applications", "Cloud Engineering", "Application Engineering"],

    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop",

    overview: "Drivers in the field, systems stuck in the back office",
    clientOverview:
      "Drivers received schedules and manifests on paper and reported status by phone. Back-office systems ran on aging on-premises servers, updates reached dispatchers hours late, and adding capacity during busy periods took weeks.",

    challengeIntro: "Field workflows and infrastructure that could not keep pace",
    challengePoints: [
      "Paper-based workflows: Manifests, schedules, and proof of delivery were handled on paper.",
      "Delayed updates: Dispatchers learned about delivery status hours after it changed.",
      "Limited capacity: On-premises servers struggled during peak delivery periods.",
    ],

    solutionIntro: "A mobile-first driver experience on resilient cloud services",
    solutionDetail:
      "Starfii built a secure mobile app for drivers and moved the supporting services to the cloud in stages, so information flows between the road and operations without extra effort.",
    solution: [
      "Driver mobile app: Schedules, tasks, navigation, and proof of delivery in one app, with offline support.",
      "Cloud-based services: Scalable, resilient services replaced aging on-premises servers.",
      "Real-time sync: Status updates reach dispatch as they happen, with no manual reporting.",
    ],

    results: [
      { metric: "800+", label: "Drivers on the mobile app" },
      { metric: "-70%", label: "Paperwork per delivery" },
      { metric: "Hours → Seconds", label: "Delay in delivery status updates" },
      { metric: "99.95%", label: "Platform availability at peak volume" },
    ],

    benefitsIntro: "What changed for drivers and dispatch",
    benefits: [
      "Less paperwork: Drivers spend more time driving and delivering.",
      "Instant updates: Dispatch sees delivery status as it changes.",
      "Ready for peaks: Cloud capacity scales up when delivery volumes surge.",
    ],

    summary:
      "The drivers needed better tools, and the systems behind them needed room to grow. Mobile and cloud modernization gave both, without interrupting daily deliveries.",

    techStack: [
      "Mobile application",
      "Offline-first sync",
      "Cloud infrastructure",
      "API services",
      "Observability",
    ],

    date: "2026-07-01",
  },

  {
    slug: "logistics-last-mile-delivery-optimization",
    category: "Fleet & Last Mile",

    title: "Starfii Optimizes Last Mile Delivery Operations",
    subtitle:
      "Route planning was manual, customers had no delivery updates, and failed deliveries were costing the provider time and money every day.",
    cardDescription:
      "Connected delivery planning, mobile workflows, and customer communication improved last mile reliability and customer experience.",

    client: "Delivery services provider, 15,000+ parcels per day",
    industry: "Transportation & Logistics",
    services: ["Fleet & Operations", "Mobile Applications", "Data & Analytics"],

    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2000&auto=format&fit=crop",

    overview: "The final mile was the least predictable part of the journey",
    clientOverview:
      "Dispatchers planned routes by hand each morning, drivers had no way to adjust when conditions changed, and customers were left guessing when a parcel would arrive. Missed deliveries meant repeat trips and frustrated customers.",

    challengeIntro: "Manual planning and limited communication at the last mile",
    challengePoints: [
      "Manual route planning: Daily routes were built by hand and could not adapt to changes.",
      "No customer updates: Customers had no visibility into delivery windows or delays.",
      "Failed deliveries: Missed handoffs led to repeat trips and higher cost per parcel.",
    ],

    solutionIntro: "Connected delivery planning, drivers, and customers",
    solutionDetail:
      "Starfii connected route planning, a driver mobile workflow, and customer notifications, with analytics that help dispatchers see how the day is going and adjust in time.",
    solution: [
      "Route planning: Daily routes are generated from delivery windows, capacity, and conditions, and adjusted as the day changes.",
      "Driver workflow: Drivers receive updates, capture proof of delivery, and flag issues from one mobile app.",
      "Customer notifications: Customers get delivery windows, live updates, and delay alerts automatically.",
    ],

    results: [
      { metric: "-25%", label: "Failed delivery attempts" },
      { metric: "-18%", label: "Distance driven per parcel" },
      { metric: "+20%", label: "Deliveries completed per driver per day" },
      { metric: "15,000+", label: "Parcels a day on the connected platform" },
    ],

    benefitsIntro: "What changed for drivers, dispatch, and customers",
    benefits: [
      "Smoother days: Routes adapt as conditions change instead of being fixed at dawn.",
      "Informed customers: Delivery windows and delay alerts reduce repeat contacts.",
      "Lower cost per delivery: Fewer failed attempts and shorter routes cut repeat trips.",
    ],

    summary:
      "The last mile did not need more vehicles. It needed better coordination. Connecting planning, drivers, and customers made deliveries more predictable for everyone.",

    techStack: [
      "Route optimization",
      "Mobile application",
      "Notification services",
      "Analytics dashboards",
      "Cloud infrastructure",
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
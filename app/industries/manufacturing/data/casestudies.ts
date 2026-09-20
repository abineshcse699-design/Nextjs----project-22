// Save as: app/industries/manufacturing/data/casestudies.ts
//
// NOTE: client descriptions, figures and outcomes below are DRAFT
// placeholder content. Replace them with real, approved client data
// before going live.

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

  // Publish date, format "YYYY-MM-DD". Used only for ordering:
  // the latest date always shows first.
  date: string;
};

const rawCaseStudies: CaseStudy[] = [
  {
    slug: "manufacturing-connected-operations-modernization",
    category: "Digital Manufacturing",

    title: "Starfii Modernizes Connected Manufacturing Operations",
    subtitle:
      "Plant floor systems, planning tools, and business applications each held part of the picture, and nobody could see production end to end.",
    cardDescription:
      "A digital modernization program connected operational workflows, applications, and data around a more scalable manufacturing technology foundation.",

    client: "Discrete manufacturer, 7 plants across 3 regions",
    industry: "Manufacturing",
    services: ["Digital Manufacturing", "Application Engineering", "Systems Integration"],

    image:
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=2000&auto=format&fit=crop",

    overview: "Seven plants, seven ways of reporting production",
    clientOverview:
      "Each plant ran its own mix of shop floor systems and spreadsheets. Production status reached leadership a day late through manual reports, and connecting a new plant or system meant a custom integration every time.",

    challengeIntro: "Disconnected systems and delayed visibility",
    challengePoints: [
      "Siloed systems: Plant floor tools and business applications did not share data.",
      "Delayed reporting: Production status was compiled by hand and arrived a day late.",
      "One-off integrations: Every new plant or system needed custom point-to-point work.",
    ],

    solutionIntro: "A connected operations layer across plants and applications",
    solutionDetail:
      "Starfii introduced an API-based integration layer between plant systems and business applications, then built shared operational dashboards on top of it, rolling out plant by plant.",
    solution: [
      "Integration layer: Standard APIs and event feeds connect plant systems to business applications.",
      "Shared dashboards: Production, quality, and downtime appear in one view for plants and leadership.",
      "Phased rollout: Each plant went live in turn, so lessons carried into the next one.",
    ],

    results: [
      { metric: "Same-day", label: "Production visibility, down from next-day" },
      { metric: "-60%", label: "Time spent compiling manual reports" },
      { metric: "7", label: "Plants connected on one platform" },
      { metric: "-50%", label: "Effort to onboard a new system" },
    ],

    benefitsIntro: "What changed for plants and leadership",
    benefits: [
      "Live visibility: Teams see production status as it happens, not the next morning.",
      "Less manual reporting: Supervisors spend time on the floor instead of in spreadsheets.",
      "Easier growth: New plants and systems plug into the same layer without custom work.",
    ],

    summary:
      "The plants did not need to standardize on one system. They needed a common layer that let different systems talk. Connecting them through APIs gave the business one view without forcing a rip and replace.",

    techStack: [
      "API gateway",
      "Event streaming",
      "Operational dashboards",
      "Systems integration",
      "Role-based access",
    ],

    date: "2026-09-01",
  },

  {
    slug: "manufacturing-workflow-automation",
    category: "Automation",

    title: "Starfii Automates Complex Operational Workflows",
    subtitle:
      "Quality reports, maintenance requests, and approvals moved through email and paper, so simple items waited days for the right person.",
    cardDescription:
      "Automation and application engineering helped reduce manual processing and create clearer workflow visibility across business operations.",

    client: "Industrial equipment manufacturer, ~4,000 employees",
    industry: "Manufacturing",
    services: ["Workflow Automation", "Application Engineering", "Process Digitization"],

    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?q=80&w=2000&auto=format&fit=crop",

    overview: "Routine approvals that took days instead of hours",
    clientOverview:
      "Maintenance requests, quality deviations, and purchase approvals were passed around by email, paper forms, and chat messages. Nobody could tell where an item was stuck, and audit questions meant searching through inboxes.",

    challengeIntro: "Paper trails, email chains, and no visibility",
    challengePoints: [
      "Manual hand-offs: Forms and approvals moved by email and paper between teams.",
      "No status visibility: Teams could not see where a request was waiting or why.",
      "Hard-to-find records: Audit evidence had to be pieced together from inboxes.",
    ],

    solutionIntro: "Digital workflows with clear control points",
    solutionDetail:
      "Starfii digitized the highest-volume workflows first, added rules-based routing and escalation, and connected them to the systems the teams already used.",
    solution: [
      "Digital forms and routing: Requests go to the right approver automatically based on type and value.",
      "Status tracking: Requesters and managers see every item's stage and owner in real time.",
      "Connected systems: Approved items update maintenance and purchasing systems without re-entry.",
    ],

    results: [
      { metric: "-65%", label: "Average approval turnaround" },
      { metric: "-70%", label: "Manual data re-entry" },
      { metric: "100%", label: "Requests with a recorded history" },
      { metric: "12", label: "Paper-based processes retired" },
    ],

    benefitsIntro: "What changed for operations teams",
    benefits: [
      "Faster approvals: Requests reach the right person immediately and are tracked to completion.",
      "Less re-entry: Approved items flow into other systems without retyping.",
      "Ready for audits: Full request history is available in seconds.",
    ],

    summary:
      "The biggest gain was not speed alone. It was that everyone could finally see where work was waiting. Digitizing the workflow made bottlenecks visible, and fixing them became routine.",

    techStack: [
      "Workflow automation",
      "Rules engine",
      "System integration",
      "Audit logging",
      "Role-based access",
    ],

    date: "2026-08-01",
  },

  {
    slug: "manufacturing-data-cloud-foundation",
    category: "Data and Cloud",

    title: "Starfii Builds a Modern Data and Cloud Foundation",
    subtitle:
      "Production, quality, and inventory data lived in separate systems and on-premise servers, so answering a simple cross-plant question took a week.",
    cardDescription:
      "A phased modernization approach connected fragmented data and workloads through scalable cloud and analytics capabilities.",

    client: "Consumer goods manufacturer, 12 facilities, 40+ data sources",
    industry: "Manufacturing",
    services: ["Data Engineering", "Cloud Engineering", "Analytics"],

    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop",

    overview: "Data everywhere, answers nowhere",
    clientOverview:
      "Data sat across plant databases, legacy servers, and departmental spreadsheets. Analysts spent most of their time collecting and reconciling numbers, and aging on-premise infrastructure limited how far the business could scale analytics.",

    challengeIntro: "Fragmented data on aging infrastructure",
    challengePoints: [
      "Fragmented data: Production, quality, and inventory numbers lived in 40+ separate sources.",
      "Slow answers: Cross-plant questions took a week of manual collection and cleanup.",
      "Aging infrastructure: On-premise servers limited scale and were costly to maintain.",
    ],

    solutionIntro: "A governed cloud data platform, built in phases",
    solutionDetail:
      "Starfii moved workloads to the cloud in priority order, consolidated the key data sources into a governed platform, and built dashboards on top, keeping plants running throughout.",
    solution: [
      "Unified data platform: Key sources feed one governed store with consistent definitions.",
      "Staged cloud migration: Workloads moved in priority order, validated before old systems were retired.",
      "Self-service analytics: Dashboards give plant and business teams trusted numbers on demand.",
    ],

    results: [
      { metric: "1wk → 1hr", label: "Time to answer cross-plant questions" },
      { metric: "40+", label: "Data sources consolidated" },
      { metric: "-35%", label: "Infrastructure running cost" },
      { metric: "0", label: "Unplanned plant downtime during migration" },
    ],

    benefitsIntro: "What changed for analysts and plant teams",
    benefits: [
      "Trusted numbers: Everyone works from the same definitions of output, quality, and inventory.",
      "Analysts freed up: Time goes to analysis instead of collecting and reconciling data.",
      "Room to scale: Cloud capacity grows with new plants and new use cases such as AI.",
    ],

    summary:
      "The platform mattered less than the discipline behind it: one set of definitions, migrated in small validated steps. That made the data trustworthy and gave the business a base for advanced analytics.",

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
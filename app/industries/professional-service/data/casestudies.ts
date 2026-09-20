// Save as: app/industries/professional-service/data/casestudies.ts
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
    slug: "professional-services-platform-modernization",
    category: "Digital Platforms",

    title: "Modernizing a Professional Services Platform",
    subtitle:
      "Client portals, project tools, and document systems all ran separately, so clients chased updates by email and staff re-entered the same data in three places.",
    cardDescription:
      "A digital modernization program connected client experiences, service workflows, applications, and data around a scalable platform foundation.",

    client: "Advisory and consulting firm, ~1,800 professionals across 9 offices",
    industry: "Professional Services",
    services: ["Digital Platforms", "Application Engineering", "Systems Integration"],

    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000&auto=format&fit=crop",

    overview: "A firm whose tools did not talk to each other",
    clientOverview:
      "Engagement tracking, document sharing, billing, and client communication lived in separate applications. Clients had no single place to see status, and every new service line meant another round of custom integration work.",

    challengeIntro: "Disconnected tools and a fragmented client view",
    challengePoints: [
      "Siloed applications: Project, document, and billing systems shared no common data.",
      "Manual status updates: Teams compiled progress reports by hand for each client.",
      "Slow to extend: Each new service line needed custom integration before it could launch.",
    ],

    solutionIntro: "A modular platform connecting clients, teams, and data",
    solutionDetail:
      "Starfii built an API-based platform layer that connects the firm's existing systems, then delivered a client portal and internal workspace on top, one service line at a time.",
    solution: [
      "Platform layer: Standard APIs connect project, document, and billing systems.",
      "Client portal: Clients see engagement status, documents, and messages in one place.",
      "Phased rollout: Each service line moved over in turn, so lessons carried into the next one.",
    ],

    results: [
      { metric: "-60%", label: "Time spent compiling client status reports" },
      { metric: "+45%", label: "Client portal adoption in six months" },
      { metric: "4", label: "Systems connected on one platform" },
      { metric: "-50%", label: "Effort to launch a new service line" },
    ],

    benefitsIntro: "What changed for clients and service teams",
    benefits: [
      "One client view: Clients check status themselves instead of emailing for updates.",
      "Less duplicate entry: Data entered once flows into every connected system.",
      "Faster growth: New services plug into the platform without custom rework.",
    ],

    summary:
      "The firm did not need to replace its tools. It needed them connected. A shared platform layer gave clients one place to look and gave staff their time back.",

    techStack: [
      "API gateway",
      "Client portal",
      "Systems integration",
      "Identity and access management",
      "Operational dashboards",
    ],

    date: "2026-09-01",
  },

  {
    slug: "professional-services-workflow-automation",
    category: "Workflow Automation",

    title: "Automating Complex Service Workflows",
    subtitle:
      "Approvals, case routing, and document hand-offs moved through email, so simple requests waited days for the right person.",
    cardDescription:
      "Workflow automation and digital experiences helped connect teams, information, approvals, and client-facing processes.",

    client: "Professional services firm, ~900 staff, 15,000+ client requests a year",
    industry: "Professional Services",
    services: ["Workflow Automation", "Application Engineering", "Process Digitization"],

    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2000&auto=format&fit=crop",

    overview: "Routine approvals that took days instead of hours",
    clientOverview:
      "Client requests, engagement approvals, and document reviews were routed by email and spreadsheets. Nobody could see where an item was waiting, and partners spent time chasing status instead of advising clients.",

    challengeIntro: "Email hand-offs and no visibility into status",
    challengePoints: [
      "Manual routing: Requests were forwarded by email to whoever seemed right.",
      "No status visibility: Teams could not see where an item was waiting or why.",
      "Repeated data entry: The same details were typed into several systems.",
    ],

    solutionIntro: "Digital workflows that keep people in the loop",
    solutionDetail:
      "Starfii digitized the highest-volume workflows first, added rules-based routing and reminders, and kept human approval at every judgment point.",
    solution: [
      "Rules-based routing: Requests reach the right reviewer automatically by type and value.",
      "Live status tracking: Requesters and managers see every item's stage and owner.",
      "Connected systems: Approved items update downstream systems without re-entry.",
    ],

    results: [
      { metric: "-62%", label: "Average approval turnaround" },
      { metric: "-70%", label: "Manual data re-entry" },
      { metric: "100%", label: "Requests with a recorded history" },
      { metric: "14", label: "Email-based processes retired" },
    ],

    benefitsIntro: "What changed for teams and clients",
    benefits: [
      "Faster turnaround: Requests reach the right person immediately and are tracked to completion.",
      "Less chasing: Status is visible to everyone, so nobody has to ask.",
      "Judgment kept: People still make the calls, without the manual hand-offs.",
    ],

    summary:
      "Automation worked because it removed hand-offs, not people. Every judgment point stayed with a person, while routing, reminders, and re-entry disappeared.",

    techStack: [
      "Workflow automation",
      "Rules engine",
      "System integration",
      "Notifications",
      "Role-based access",
    ],

    date: "2026-08-01",
  },

  {
    slug: "professional-services-data-ai-cloud",
    category: "Data, AI and Cloud",

    title: "Connecting Data, AI, and Cloud Capabilities",
    subtitle:
      "Project, financial, and client data sat in separate systems and on aging servers, so a simple utilization question took days to answer.",
    cardDescription:
      "Data modernization, intelligent technology, and cloud engineering created a stronger foundation for service delivery and operational insight.",

    client: "Multi-service consulting group, 30+ data sources",
    industry: "Professional Services",
    services: ["Data Engineering", "Cloud Engineering", "Applied AI"],

    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop",

    overview: "Plenty of data, no shared view of the business",
    clientOverview:
      "Time, project, billing, and client data lived in separate systems and departmental spreadsheets. Analysts spent most of their time reconciling numbers, and aging on-premise infrastructure limited what the firm could build next.",

    challengeIntro: "Fragmented data on aging infrastructure",
    challengePoints: [
      "Fragmented data: Key numbers lived in 30+ separate sources with different definitions.",
      "Slow answers: Cross-practice questions took days of manual collection.",
      "Limited foundation: On-premise servers made new analytics and AI work costly.",
    ],

    solutionIntro: "A governed cloud data foundation, built in stages",
    solutionDetail:
      "Starfii moved workloads to the cloud in priority order, consolidated the key sources into a governed platform, and added dashboards and an AI-assisted search layer on top.",
    solution: [
      "Unified data platform: Key sources feed one governed store with consistent definitions.",
      "Staged cloud migration: Workloads moved in priority order and were validated before old systems were retired.",
      "AI-assisted insight: Teams query approved data in plain language, with sources shown.",
    ],

    results: [
      { metric: "3d → 1hr", label: "Time to answer cross-practice questions" },
      { metric: "30+", label: "Data sources consolidated" },
      { metric: "-30%", label: "Infrastructure running cost" },
      { metric: "0", label: "Unplanned downtime during migration" },
    ],

    benefitsIntro: "What changed for leadership and delivery teams",
    benefits: [
      "Trusted numbers: Everyone works from the same definitions of utilization and revenue.",
      "Analysts freed up: Time goes to analysis instead of reconciling data.",
      "Room to grow: Cloud capacity supports new analytics and AI use cases.",
    ],

    summary:
      "The technology mattered less than the discipline behind it: one set of definitions, migrated in small validated steps. That made the data trustworthy and gave AI something reliable to work with.",

    techStack: [
      "Cloud data platform",
      "Data pipelines",
      "Governance and lineage",
      "Retrieval-augmented search",
      "Observability",
    ],

    date: "2026-07-01",
  },

  {
    slug: "professional-services-generative-ai-platform",
    category: "Generative AI",

    title: "Embedding Generative AI Into a Service Platform",
    subtitle:
      "Clients were asking for AI features, but the platform handled confidential material under strict compliance rules, so a bolt-on chatbot was not an option.",
    cardDescription:
      "Discover how Starfii's Generative AI and LLM engineering team embedded AI features into a compliance driven platform.",

    client: "Compliance-driven service platform used by enterprise clients",
    industry: "Professional Services",
    services: ["Generative AI Engineering", "LLM Integration", "SaaS Product Engineering"],

    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",

    overview: "Generative AI inside a platform with no room for error",
    clientOverview:
      "Enterprise clients wanted summarization, drafting, and search across their own documents. Any AI feature had to keep data isolated between clients, log every interaction, and leave a person in control of the outcome.",

    challengeIntro: "Confidential data, high accuracy bar, and audit needs",
    challengePoints: [
      "Confidential data: AI had to work with sensitive documents without exposing them across clients.",
      "Accuracy expectations: Outputs had to be grounded in the client's own content, not model guesses.",
      "Audit requirements: Every prompt, response, and user action needed to be logged and reviewable.",
    ],

    solutionIntro: "Grounded, governed AI with a person in the loop",
    solutionDetail:
      "Starfii designed the AI layer around retrieval from each client's own data, strict tenant isolation, and review steps, and shipped features incrementally.",
    solution: [
      "Grounded answers: Responses draw on the client's own records and show their sources.",
      "Tenant isolation: Each client's data and prompts stay separated from every other client's.",
      "Human review and logging: Users review AI output before it is used, and every interaction is logged.",
    ],

    results: [
      { metric: "4", label: "Generative AI features shipped in the first release" },
      { metric: "-45%", label: "Time to draft routine documents" },
      { metric: "-60%", label: "Time to find information in records" },
      { metric: "100%", label: "AI interactions logged for audit" },
    ],

    benefitsIntro: "What changed for clients and the product team",
    benefits: [
      "Time saved: Routine drafting and searching take a fraction of the time.",
      "Trustworthy output: Sourced answers let users verify what the AI produced.",
      "Compliance intact: Isolation and logging kept the platform within its obligations.",
    ],

    summary:
      "The AI features did not need to be the boldest on the market. They needed to be dependable. Grounding answers in each client's data and keeping people in the loop is what made them safe to ship.",

    techStack: [
      "Large language models",
      "Retrieval-augmented generation",
      "Tenant isolation",
      "Prompt and response logging",
      "Human-in-the-loop review",
    ],

    date: "2026-06-01",
  },

  {
    slug: "professional-services-client-experience-frontend",
    category: "Client Experience",

    title: "Rebuilding a Client Experience Front End",
    subtitle:
      "The client-facing site was slow, hard to use on mobile, and tied so closely to back-end systems that even small changes took weeks.",
    cardDescription:
      "Explore how Starfii's legacy software modernization team rebuilt a front end into a fast, secure digital experience.",

    client: "Professional services firm with ~40,000 active client users",
    industry: "Professional Services",
    services: ["Client Experience Design", "Front-End Engineering", "Legacy Modernization"],

    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2000&auto=format&fit=crop",

    overview: "A client portal that clients avoided using",
    clientOverview:
      "The portal loaded slowly, broke on phones, and needed a back-end change for almost every screen update. Clients fell back on email and phone calls, which raised the load on service teams.",

    challengeIntro: "A slow, tightly coupled front end",
    challengePoints: [
      "Poor performance: Pages were slow, and mobile use was close to unusable.",
      "Tight coupling: Front-end changes required back-end releases, so updates took weeks.",
      "Inconsistent journeys: Onboarding, documents, and messaging each looked and worked differently.",
    ],

    solutionIntro: "A fast, modern front end on top of existing systems",
    solutionDetail:
      "Starfii rebuilt the front end as a responsive application over an API layer, keeping the back-end systems in place and moving journeys over one at a time.",
    solution: [
      "Responsive rebuild: One consistent experience across desktop, tablet, and phone.",
      "API layer: The front end is decoupled, so screens change without back-end releases.",
      "Journey-by-journey migration: Onboarding, documents, and messaging moved over in sequence with no cutover day.",
    ],

    results: [
      { metric: "-65%", label: "Average page load time" },
      { metric: "+38%", label: "Clients using the portal monthly" },
      { metric: "-30%", label: "Routine service requests by phone and email" },
      { metric: "4x", label: "Faster release cadence for front-end changes" },
    ],

    benefitsIntro: "What changed for clients and service teams",
    benefits: [
      "Easier for clients: Fast, consistent screens that work on any device.",
      "Fewer routine requests: Service teams handle complex work, not status questions.",
      "Faster improvement: Front-end updates ship without waiting on the back end.",
    ],

    summary:
      "The back end was not the problem. The front end was tied to it too tightly. Decoupling it through an API layer let the firm improve the client experience without touching its core systems.",

    techStack: [
      "React",
      "Next.js",
      "API gateway",
      "Identity and access management",
      "Performance monitoring",
    ],

    date: "2026-05-01",
  },
];

// Newest date first. This is what every page imports.
export const caseStudies: CaseStudy[] = [...rawCaseStudies].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
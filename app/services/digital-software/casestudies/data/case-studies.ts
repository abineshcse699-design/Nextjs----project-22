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

  // Publish date, format "YYYY-MM-DD". Used only for ordering — the
  // case study with the latest date always shows first, everywhere
  // this data is used, regardless of where it sits in this array.
  date: string;
};

// Raw list — order here does NOT matter for display, only `date` does.
const rawCaseStudies: CaseStudy[] = [
  {
    slug: "regional-bank-digital-banking-experience",
    category: "Banking",

    title: "Starfii Builds a Modern Digital Banking Experience for a Regional Bank",
    subtitle:
      "A 38-branch retail bank was losing new customers to digital-first competitors because opening an account still meant a branch visit and a week of paperwork.",
    cardDescription:
      "See how Starfii rebuilt a legacy banking front end into a fast, secure digital experience that cut onboarding time and lifted customer satisfaction.",

    client: "38-branch regional retail bank, ~410,000 active customers",
    industry: "Banking & Financial Services",
    services: ["SaaS Product Engineering", "UX Consulting", "Cloud Engineering"],

    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop",

    overview: "A bank whose digital front door was turning customers away",
    clientOverview:
      "New account applications were dropping off before completion in 61% of cases, mostly at the identity-verification step, which still required a printed form to be brought into a branch. The bank's core banking vendor released updates on a fixed quarterly schedule, so even small UI fixes had to wait months to ship.",

    challengeIntro: "A decade-old portal tightly wired to core banking",
    challengePoints: [
      "Locked release cycle: Every feature request, even copy changes, required a change ticket with the core banking vendor and a multi-week release window.",
      "Batch identity checks: The KYC provider only returned results overnight, forcing applicants to wait a full day before funding an account.",
      "No separation of concerns: The public site was a decade-old ASP.NET app with no boundary between presentation and core banking logic.",
    ],

    solutionIntro: "A decoupled experience layer with real-time verification",
    solutionDetail:
      "Starfii built a dedicated experience layer in Next.js sitting behind a GraphQL gateway, separating the customer-facing product from the core banking system entirely.",
    solution: [
      "Real-time KYC: Replaced the overnight batch identity check with a real-time document-verification and liveness-check provider.",
      "One-session onboarding: ID capture, liveness check, and initial deposit combined into a single guided flow instead of separate steps.",
      "Weekly release cadence: A feature-flagging system let the bank's product team ship UI and flow changes weekly, independent of the vendor's release calendar.",
    ],

    results: [
      { metric: "9d → 40m", label: "Time to open and fund an account" },
      { metric: "-54%", label: "Drop-off at identity verification" },
      { metric: "14", label: "Onboarding experiments shipped in 6 months" },
      { metric: "3x", label: "Faster feature releases" },
    ],

    benefitsIntro: "What changed for the bank's product team",
    benefits: [
      "Faster iteration: Product managers ship onboarding experiments weekly instead of waiting on a vendor release window.",
      "Higher completion: More than half of applicants who used to abandon at identity verification now complete the flow.",
      "Lower support load: Fewer customers call branches asking why their application is stuck overnight.",
    ],

    summary:
      "The bank's real bottleneck wasn't the account-opening form — it was an overnight identity check and a vendor release calendar sitting behind it. Fixing both let a 9-day process become a 40-minute one, and let the product team start shipping on its own schedule.",

    techStack: ["Next.js", "GraphQL", "Real-time KYC integration", "Feature flagging", "AWS"],

    date: "2025-08-01",
  },

  {
    slug: "utilities-digital-transformation-microsoft",
    category: "Utilities",

    title: "Digital Transformation in Utilities Powered by Microsoft Business Applications",
    subtitle:
      "Crews were dispatched by radio and filed paper work orders, so headquarters had no idea a job was finished until a technician drove back to file paperwork.",
    cardDescription:
      "Discover how Starfii used Microsoft Business Applications to modernize field operations and give teams real-time visibility across the grid.",

    client: "Regional electric utility, 280 field technicians across 6 service districts",
    industry: "Utilities & Energy",
    services: ["Microsoft Business Applications", "Field Operations", "Data Engineering"],

    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop",

    overview: "A utility running field operations over radio and paper",
    clientOverview:
      "Crews received job assignments over radio and filled out paper work orders that were manually keyed into the billing system, typically 1-3 days after the work was finished. Outage maps in the control room were updated by phone call, so the public outage tracker was frequently hours behind reality.",

    challengeIntro: "Rural connectivity and legacy on-prem systems",
    challengePoints: [
      "No mobile tooling: Many trucks had unreliable data connectivity in rural districts, so any solution had to work offline and sync later.",
      "No API surface: Billing and asset-management ran on on-prem SQL Server databases with no existing integration layer.",
      "Manual relay: Outage status moved from field to control room by phone call, with no direct link to the public outage map.",
    ],

    solutionIntro: "An offline-first field app connected to dispatch and BI",
    solutionDetail:
      "Starfii built an offline-capable Power Apps field application that queues work-order updates locally and syncs once connectivity returns, paired with Dynamics 365 Field Service for dispatch.",
    solution: [
      "Offline-first mobile: Field technicians close work orders even without signal; updates sync automatically once back in range.",
      "Connected dispatch: Dynamics 365 Field Service gives dispatchers live crew location and job status instead of radio check-ins.",
      "Live outage data: A new integration layer over the legacy SQL Server systems feeds the same outage data into the public-facing map.",
    ],

    results: [
      { metric: "Days → min", label: "Time for job data to reach billing" },
      { metric: "280", label: "Field technicians using the app daily" },
      { metric: "6", label: "Service districts connected, incl. rural areas" },
      { metric: "45%", label: "Faster outage response" },
    ],

    benefitsIntro: "What changed in day-to-day operations",
    benefits: [
      "Real-time visibility: Dispatchers see a job close the moment it's done, not after a truck drives back to the depot.",
      "Accurate public outage map: The map reflects live field data instead of a manually updated phone relay.",
      "Less rework: Fewer billing corrections from illegible or delayed paper work orders.",
    ],

    summary:
      "The utility didn't need a bigger system — it needed the field and the office looking at the same data at the same time. An offline-first app closed that gap even in districts where connectivity itself was the obstacle.",

    techStack: ["Power Apps", "Dynamics 365 Field Service", "Power BI", "SQL Server integration"],

    date: "2025-07-01",
  },

  {
    slug: "digital-mortgage-automation",
    category: "Mortgage Lending",

    title: "Starfii Automates the Digital Mortgage Application Process",
    subtitle:
      "Underwriters were spending roughly 40% of their time manually re-keying figures from pay stubs and bank statements instead of evaluating risk.",
    cardDescription:
      "Learn how Starfii's intelligent automation shortened mortgage approval cycles from weeks to days while keeping every step compliant and fully auditable.",

    client: "National mortgage lender, ~1,900 loan applications processed monthly",
    industry: "Financial Services",
    services: ["Intelligent Automation", "Compliance Engineering", "Cloud Engineering"],

    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000&auto=format&fit=crop",

    overview: "A lender caught between speed and compliance",
    clientOverview:
      "Regulatory requirements meant every calculation and decision needed a traceable audit trail, which had historically pushed the lender away from automation for fear of losing that traceability — even as manual document handling ate into underwriting capacity.",

    challengeIntro: "Inconsistent documents and a batch-only loan system",
    challengePoints: [
      "Inconsistent formats: Documents arrived as scanned PDFs, phone photos, and faxes from three different origination channels.",
      "No live integration: The loan origination system only supported a nightly batch import, not real-time updates.",
      "Audit requirements: Every automated decision needed a full trail back to its source document for investor and regulatory review.",
    ],

    solutionIntro: "Automated extraction with a built-in audit trail",
    solutionDetail:
      "Starfii introduced an intelligent document processing pipeline that extracts and cross-checks income and asset figures automatically, flagging only exceptions for human review.",
    solution: [
      "Exception-based review: Underwriters review flagged discrepancies instead of re-keying every document.",
      "Real-time LOS updates: A custom integration service replaced the nightly batch import with near real-time data flow.",
      "Queryable audit store: Every automated decision and its source document are logged so compliance can trace it directly, without an engineering request.",
    ],

    results: [
      { metric: "4wk → 9d", label: "Median underwriting decision time" },
      { metric: "78%", label: "Documents processed with no manual re-keying" },
      { metric: "100%", label: "Decisions traceable to source in the audit store" },
      { metric: "35%", label: "Lower processing effort" },
    ],

    benefitsIntro: "What changed for underwriting and compliance",
    benefits: [
      "Faster decisions: Median time to a decision dropped from about 4 weeks to 9 days.",
      "Preserved compliance: Every checkpoint required by investor and regulatory guidelines stayed in place.",
      "Self-service audits: Compliance can trace any decision without waiting on engineering.",
    ],

    summary:
      "Compliance was the reason the lender had avoided automation for years. Building the audit trail in from day one — not bolting it on after — was what made automation acceptable to the compliance team.",

    techStack: ["Intelligent document processing (OCR)", "Workflow automation", "LOS integration", "Audit logging"],

    date: "2025-06-01",
  },

  {
    slug: "healthcare-saas-platform-scale",
    category: "Healthcare",

    title: "Starfii Scales a SaaS Platform for a Fortune 500 Healthcare Provider",
    subtitle:
      "A healthcare SaaS platform's Rails monolith took the entire product offline for up to 45 minutes on every release, and that maintenance window was starting to block enterprise deals.",
    cardDescription:
      "See how Starfii's composable architecture let a healthcare SaaS platform scale to millions of users without sacrificing reliability or HIPAA compliance.",

    client: "Fortune 500 healthcare provider, patient-engagement SaaS product",
    industry: "Healthcare",
    services: ["SaaS Product Engineering", "Composable Architecture", "Cloud Engineering"],

    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop",

    overview: "A monolith that had outgrown its own release process",
    clientOverview:
      "The platform had grown from a single-tenant pilot to serving over a million patients, but the architecture hadn't changed: one Rails monolith, one PostgreSQL database, deployed during a nightly maintenance window. As enterprise health-system customers signed on, that downtime window and the compliance review overhead on every release became the two biggest blockers to closing new deals.",

    challengeIntro: "A tightly coupled codebase with manual compliance gates",
    challengePoints: [
      "Coupled modules: A roughly 400,000-line codebase meant a scheduling change could break billing in ways that were hard to catch pre-release.",
      "Manual compliance checklist: HIPAA review ran as a checklist before every deploy, capping releases to roughly once every 6 weeks.",
      "No tenant isolation: One shared database meant no way to isolate load or roll back a single feature without rolling back everything.",
    ],

    solutionIntro: "Service extraction with compliance built into the pipeline",
    solutionDetail:
      "Starfii extracted the highest-traffic domains — scheduling, messaging, and billing — into separate services behind an API gateway, each with its own datastore.",
    solution: [
      "Targeted extraction: The three highest-traffic domains moved to independent services first; lower-traffic modules stayed in the monolith for a later phase.",
      "Automated compliance gates: HIPAA checks — encryption, access-log verification, PHI-field scanning — now run in CI/CD on every commit.",
      "Zero-downtime deploys: Blue-green releases per service eliminated the maintenance window entirely.",
    ],

    results: [
      { metric: "1M → 5M+", label: "Active users supported" },
      { metric: "45min → 0", label: "Deployment downtime window" },
      { metric: "6wk → days", label: "Release cadence for extracted services" },
      { metric: "99.99%", label: "Platform uptime" },
    ],

    benefitsIntro: "What changed for the engineering organization",
    benefits: [
      "Independent releases: The scheduling team ships without waiting on billing or messaging.",
      "Faster compliance sign-off: Most HIPAA checks run automatically instead of requiring a manual pre-release review.",
      "Room to grow: The platform absorbed 5x user growth without an incident tied to capacity.",
    ],

    summary:
      "The platform's growth wasn't the real risk — its release process was. Breaking the monolith apart one domain at a time, with compliance checks moved into the pipeline itself, let the team keep shipping while user count grew 5x.",

    techStack: ["Service extraction", "API gateway", "HIPAA compliance automation", "Blue-green deployments", "Kubernetes"],

    date: "2025-05-01",
  },

  {
    slug: "insurance-claims-low-code-platform",
    category: "Insurance",

    title: "Starfii Transforms Reinsurance Claims Management with a Low Code Platform",
    subtitle:
      "Each regional office tracked claims in its own spreadsheet, so a large claim could exist in four different versions with four different statuses.",
    cardDescription:
      "Explore how Starfii transformed insurance claims management with a low code digital platform, automating workflows, improving efficiency, and enhancing service quality for a global reinsurer.",

    client: "Global reinsurance provider, 14 regional claims offices",
    industry: "Insurance",
    services: ["Low Code Engineering", "Workflow Automation", "Claims Systems"],

    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2000&auto=format&fit=crop",

    overview: "A reinsurer reconciling spreadsheets instead of settling claims",
    clientOverview:
      "For claims involving multiple regions — common in large reinsurance treaties — there was no single source of truth, and reconciling conflicting statuses across offices could add a week or more to settlement.",

    challengeIntro: "14 regions, 14 sets of rules, two disconnected legacy systems",
    challengePoints: [
      "Regional variation: Different local regulatory requirements and document types meant a single rigid workflow wouldn't fit every office.",
      "No shared identifiers: Policy administration and finance ran on two separate legacy systems with no common ID linking a claim to its policy and payment.",
      "Weekly reconciliation: Offices compared spreadsheets manually every week to catch conflicting claim statuses.",
    ],

    solutionIntro: "One configurable platform, one shared claim record",
    solutionDetail:
      "Starfii built the platform on Microsoft Power Platform with a configurable workflow engine, so each region could adjust intake steps and required documents within a shared framework.",
    solution: [
      "Configurable workflows: Each region adjusts its own intake steps and document requirements without forking the platform.",
      "Cross-system matching: A matching service resolves policy and claim identifiers across the two legacy systems automatically.",
      "Automated intake: OCR handles the most common claim-form types, routing anything unclear to a human reviewer.",
    ],

    results: [
      { metric: "62%", label: "Faster average claims cycle time" },
      { metric: "14", label: "Regional offices on one shared platform" },
      { metric: "40+", label: "Region-specific workflow variants configured" },
      { metric: "99.9%", label: "Platform uptime" },
    ],

    benefitsIntro: "What changed for claims operations",
    benefits: [
      "One source of truth: Every region and head office see the same claim record and status in real time.",
      "No more reconciliation cycle: The weekly spreadsheet comparison is gone entirely.",
      "Faster multi-region claims: The claims that used to be slowest — spanning multiple offices — saw the largest improvement.",
    ],

    summary:
      "The reinsurer's problem was never claims volume — it was 14 versions of the truth. A configurable platform let each region keep its own process while finally working from one shared record.",

    techStack: ["Power Platform", "Configurable workflow engine", "Cross-system identity matching", "OCR document intake"],

    date: "2025-09-01",
  },
];

// Newest date first — this is what every page actually imports.
export const caseStudies: CaseStudy[] = [...rawCaseStudies].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
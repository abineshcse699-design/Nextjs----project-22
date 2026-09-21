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

  // Publish date in YYYY-MM-DD format.
  // Newest case study is shown first.
  date: string;
};

const rawCaseStudies: CaseStudy[] = [
  /* ===============================================================
     01. REGIONAL BANK
     =============================================================== */

  {
    slug: "regional-bank-digital-banking-experience",
    category: "Banking",

    title:
      "Starfii Builds a Modern Digital Banking Experience for a Regional Bank",

    subtitle:
      "A 38-branch retail bank was losing new customers to digital-first competitors because opening an account still meant a branch visit and a week of paperwork.",

    cardDescription:
      "See how Starfii rebuilt a legacy banking front end into a fast, secure digital experience that cut onboarding time and lifted customer satisfaction.",

    client: "38-branch regional retail bank, ~410,000 active customers",

    industry: "Banking & Financial Services",

    services: [
      "SaaS Product Engineering",
      "UX Consulting",
      "Cloud Engineering",
    ],

    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop",

    overview:
      "A bank whose digital front door was turning customers away",

    clientOverview:
      "New account applications were dropping off before completion in 61% of cases, mostly at the identity-verification step, which still required a printed form to be brought into a branch. The bank's core banking vendor released updates on a fixed quarterly schedule, so even small UI fixes had to wait months to ship. Branch staff were handling paper forms that then had to be re-entered into internal systems, and customers who left mid-application rarely came back. The bank's leadership saw digital-first competitors winning younger customers who expected to open an account from their phone in a single sitting.",

    challengeIntro:
      "A decade-old portal tightly wired to core banking",

    challengePoints: [
      "Locked release cycle: Every feature request, even copy changes, required a change ticket with the core banking vendor and a multi-week release window.",

      "Batch identity checks: The KYC provider only returned results overnight, forcing applicants to wait a full day before funding an account.",

      "No separation of concerns: The public site was a decade-old ASP.NET app with no boundary between presentation and core banking logic.",

      "Mobile gaps: The existing portal was not designed for phones, so applicants who started an application on a mobile device often abandoned it before finishing.",

      "Limited experimentation: With no way to test changes safely, the product team could not measure what actually helped applicants complete the flow.",
    ],

    solutionIntro:
      "A decoupled experience layer with real-time verification",

    solutionDetail:
      "Starfii built a dedicated experience layer in Next.js sitting behind a GraphQL gateway, separating the customer-facing product from the core banking system entirely. The gateway gives the bank one consistent interface to its core banking data, so new screens and flows can be built and tested without touching the vendor's system. Security and access controls were designed into the layer from the start, keeping customer data protected while the experience became faster and simpler.",

    solution: [
      "Real-time KYC: Replaced the overnight batch identity check with a real-time document-verification and liveness-check provider.",

      "One-session onboarding: ID capture, liveness check, and initial deposit combined into a single guided flow instead of separate steps.",

      "Weekly release cadence: A feature-flagging system let the bank's product team ship UI and flow changes weekly, independent of the vendor's release calendar.",

      "Mobile-first design: The onboarding flow was designed for phones first, so applicants can capture their ID and finish the application from a single device.",

      "Safe experimentation: Feature flags let the team test changes with a small group of applicants and roll back instantly if a change hurts completion.",
    ],

    results: [
      {
        metric: "9d → 40m",
        label: "Time to open and fund an account",
      },
      {
        metric: "-54%",
        label: "Drop-off at identity verification",
      },
      {
        metric: "14",
        label: "Onboarding experiments shipped in 6 months",
      },
      {
        metric: "3x",
        label: "Faster feature releases",
      },
    ],

    benefitsIntro:
      "What changed for the bank's product team",

    benefits: [
      "Faster iteration: Product managers ship onboarding experiments weekly instead of waiting on a vendor release window.",

      "Higher completion: More than half of applicants who used to abandon at identity verification now complete the flow.",

      "Lower support load: Fewer customers call branches asking why their application is stuck overnight.",

      "Better customer experience: Applicants can open and fund an account in one sitting instead of returning to a branch.",

      "Freedom from vendor timelines: UI and flow improvements no longer depend on the core banking vendor's quarterly schedule.",
    ],

    summary:
      "The bank's real bottleneck wasn't the account-opening form — it was an overnight identity check and a vendor release calendar sitting behind it. Fixing both let a 9-day process become a 40-minute one, and let the product team start shipping on its own schedule. Because the experience layer sits apart from the core banking system, the bank can keep improving the customer journey without touching the systems it depends on for day to day operations. The same foundation is ready for new digital products as customer expectations continue to change.",

    techStack: [
      "Next.js",
      "GraphQL",
      "Real-time KYC integration",
      "Feature flagging",
      "AWS",
    ],

    date: "2025-08-01",
  },

  /* ===============================================================
     02. UTILITIES
     =============================================================== */

  {
    slug: "utilities-digital-transformation-microsoft",
    category: "Utilities",

    title:
      "Digital Transformation in Utilities Powered by Microsoft Business Applications",

    subtitle:
      "Crews were dispatched by radio and filed paper work orders, so headquarters had no idea a job was finished until a technician drove back to file paperwork.",

    cardDescription:
      "Discover how Starfii used Microsoft Business Applications to modernize field operations and give teams real-time visibility across the grid.",

    client:
      "Regional electric utility, 280 field technicians across 6 service districts",

    industry: "Utilities & Energy",

    services: [
      "Microsoft Business Applications",
      "Field Operations",
      "Data Engineering",
    ],

    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop",

    overview:
      "A utility running field operations over radio and paper",

    clientOverview:
      "Crews received job assignments over radio and filled out paper work orders that were manually keyed into the billing system, typically 1-3 days after the work was finished. Outage maps in the control room were updated by phone call, so the public outage tracker was frequently hours behind reality. Because information reached headquarters late, dispatchers often assigned crews without knowing what had already been completed, and customers waiting for restoration had little reliable information about when service would return. Leadership wanted field and office teams to work from the same picture of the grid.",

    challengeIntro:
      "Rural connectivity and legacy on-prem systems",

    challengePoints: [
      "No mobile tooling: Many trucks had unreliable data connectivity in rural districts, so any solution had to work offline and sync later.",

      "No API surface: Billing and asset-management ran on on-prem SQL Server databases with no existing integration layer.",

      "Manual relay: Outage status moved from field to control room by phone call, with no direct link to the public outage map.",

      "Paper dependency: Handwritten work orders were often hard to read, and manual keying into billing introduced errors that took time to correct.",

      "Limited grid visibility: Dispatchers and control room staff had no shared live view of where crews were or which jobs were still open.",
    ],

    solutionIntro:
      "An offline-first field app connected to dispatch and BI",

    solutionDetail:
      "Starfii built an offline-capable Power Apps field application that queues work-order updates locally and syncs once connectivity returns, paired with Dynamics 365 Field Service for dispatch. Power BI dashboards sit on top of the same data, so managers can track job completion, crew workload, and outage response across all six service districts. The design assumed weak connectivity from the start, so technicians can rely on the app in the places where they need it most.",

    solution: [
      "Offline-first mobile: Field technicians close work orders even without signal; updates sync automatically once back in range.",

      "Connected dispatch: Dynamics 365 Field Service gives dispatchers live crew location and job status instead of radio check-ins.",

      "Live outage data: A new integration layer over the legacy SQL Server systems feeds the same outage data into the public-facing map.",

      "Operational dashboards: Power BI gives managers a live view of work orders, crew workload, and response performance across districts.",

      "Digital work orders: Paper forms were replaced with structured digital ones, so job details reach billing accurately without being re-keyed.",
    ],

    results: [
      {
        metric: "Days → min",
        label: "Time for job data to reach billing",
      },
      {
        metric: "280",
        label: "Field technicians using the app daily",
      },
      {
        metric: "6",
        label: "Service districts connected, incl. rural areas",
      },
      {
        metric: "45%",
        label: "Faster outage response",
      },
    ],

    benefitsIntro:
      "What changed in day-to-day operations",

    benefits: [
      "Real-time visibility: Dispatchers see a job close the moment it's done, not after a truck drives back to the depot.",

      "Accurate public outage map: The map reflects live field data instead of a manually updated phone relay.",

      "Less rework: Fewer billing corrections from illegible or delayed paper work orders.",

      "Better customer communication: The public outage map reflects what crews are actually doing, so customers get more dependable restoration information.",

      "Smarter crew planning: Managers use live workload and location data to assign the nearest available crew to a job.",
    ],

    summary:
      "The utility didn't need a bigger system — it needed the field and the office looking at the same data at the same time. An offline-first app closed that gap even in districts where connectivity itself was the obstacle. With structured digital data now flowing from the field, the utility has a base for planning, reporting, and further improvements across its service districts. Crews spend less time on paperwork, and the office spends less time chasing updates.",

    techStack: [
      "Power Apps",
      "Dynamics 365 Field Service",
      "Power BI",
      "SQL Server integration",
    ],

    date: "2025-07-01",
  },

  /* ===============================================================
     03. DIGITAL MORTGAGE
     =============================================================== */

  {
    slug: "digital-mortgage-automation",
    category: "Mortgage Lending",

    title:
      "Starfii Automates the Digital Mortgage Application Process",

    subtitle:
      "Underwriters were spending roughly 40% of their time manually re-keying figures from pay stubs and bank statements instead of evaluating risk.",

    cardDescription:
      "Learn how Starfii's intelligent automation shortened mortgage approval cycles from weeks to days while keeping every step compliant and fully auditable.",

    client:
      "National mortgage lender, ~1,900 loan applications processed monthly",

    industry: "Financial Services",

    services: [
      "Intelligent Automation",
      "Compliance Engineering",
      "Cloud Engineering",
    ],

    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000&auto=format&fit=crop",

    overview:
      "A lender caught between speed and compliance",

    clientOverview:
      "Regulatory requirements meant every calculation and decision needed a traceable audit trail, which had historically pushed the lender away from automation for fear of losing that traceability — even as manual document handling ate into underwriting capacity. Underwriters were highly skilled at judging risk, but much of their day went to reading documents and typing figures, which slowed decisions for borrowers and limited how many applications the team could handle. The lender wanted to speed up decisions without giving up the controls its investors and regulators expect.",

    challengeIntro:
      "Inconsistent documents and a batch-only loan system",

    challengePoints: [
      "Inconsistent formats: Documents arrived as scanned PDFs, phone photos, and faxes from three different origination channels.",

      "No live integration: The loan origination system only supported a nightly batch import, not real-time updates.",

      "Audit requirements: Every automated decision needed a full trail back to its source document for investor and regulatory review.",

      "Underwriter capacity: Time spent re-keying figures reduced the time available for reviewing risk, which limited how many applications the team could handle.",

      "Risk of errors: Manual entry of income and asset figures created opportunities for mistakes that had to be caught later in the process.",
    ],

    solutionIntro:
      "Automated extraction with a built-in audit trail",

    solutionDetail:
      "Starfii introduced an intelligent document processing pipeline that extracts and cross-checks income and asset figures automatically, flagging only exceptions for human review. Figures are cross-checked across documents, so mismatches between a pay stub and a bank statement are surfaced automatically instead of relying on someone to notice them. The lender kept human judgment at the center of the decision, using automation to prepare information rather than to replace underwriters.",

    solution: [
      "Exception-based review: Underwriters review flagged discrepancies instead of re-keying every document.",

      "Real-time LOS updates: A custom integration service replaced the nightly batch import with near real-time data flow.",

      "Queryable audit store: Every automated decision and its source document are logged so compliance can trace it directly, without an engineering request.",

      "Cross-document validation: Income and asset figures are compared across documents automatically, and mismatches are flagged for review.",

      "Multi-channel intake: Documents from all three origination channels flow into a single pipeline, whatever the file format.",
    ],

    results: [
      {
        metric: "4wk → 9d",
        label: "Median underwriting decision time",
      },
      {
        metric: "78%",
        label: "Documents processed with no manual re-keying",
      },
      {
        metric: "100%",
        label: "Decisions traceable to source in the audit store",
      },
      {
        metric: "35%",
        label: "Lower processing effort",
      },
    ],

    benefitsIntro:
      "What changed for underwriting and compliance",

    benefits: [
      "Faster decisions: Median time to a decision dropped from about 4 weeks to 9 days.",

      "Preserved compliance: Every checkpoint required by investor and regulatory guidelines stayed in place.",

      "Self-service audits: Compliance can trace any decision without waiting on engineering.",

      "More time for risk: Underwriters spend their day evaluating applications rather than typing figures from documents.",

      "Fewer manual errors: Automated extraction and cross-checking reduces mistakes that come from re-keying.",
    ],

    summary:
      "Compliance was the reason the lender had avoided automation for years. Building the audit trail in from day one — not bolting it on after — was what made automation acceptable to the compliance team. Underwriters remain in control of every decision, and the automation gives them cleaner information to work with. The lender now has a scalable process that can handle growing application volumes while keeping every step reviewable.",

    techStack: [
      "Intelligent document processing (OCR)",
      "Workflow automation",
      "LOS integration",
      "Audit logging",
    ],

    date: "2025-06-01",
  },

  /* ===============================================================
     04. HEALTHCARE SAAS
     =============================================================== */

  {
    slug: "healthcare-saas-platform-scale",
    category: "Healthcare",

    title:
      "Starfii Scales a SaaS Platform for a Fortune 500 Healthcare Provider",

    subtitle:
      "A healthcare SaaS platform's Rails monolith took the entire product offline for up to 45 minutes on every release, and that maintenance window was starting to block enterprise deals.",

    cardDescription:
      "See how Starfii's composable architecture let a healthcare SaaS platform scale to millions of users without sacrificing reliability or HIPAA compliance.",

    client:
      "Fortune 500 healthcare provider, patient-engagement SaaS product",

    industry: "Healthcare",

    services: [
      "SaaS Product Engineering",
      "Composable Architecture",
      "Cloud Engineering",
    ],

    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop",

    overview:
      "A monolith that had outgrown its own release process",

    clientOverview:
      "The platform had grown from a single-tenant pilot to serving over a million patients, but the architecture hadn't changed: one Rails monolith, one PostgreSQL database, deployed during a nightly maintenance window. As enterprise health-system customers signed on, that downtime window and the compliance review overhead on every release became the two biggest blockers to closing new deals. Enterprise health systems expect strict uptime and a clear compliance record from their software vendors, and the platform's release process was making it harder to meet either expectation. The engineering team was capable, but the architecture forced every change through the same slow, cautious path.",

    challengeIntro:
      "A tightly coupled codebase with manual compliance gates",

    challengePoints: [
      "Coupled modules: A roughly 400,000-line codebase meant a scheduling change could break billing in ways that were hard to catch pre-release.",

      "Manual compliance checklist: HIPAA review ran as a checklist before every deploy, capping releases to roughly once every 6 weeks.",

      "No tenant isolation: One shared database meant no way to isolate load or roll back a single feature without rolling back everything.",

      "Slow feedback: Infrequent releases meant that fixes and improvements took a long time to reach users, and larger releases carried more risk each time.",

      "Scaling limits: Because everything shared a single application and database, heavy load in one area could slow down unrelated parts of the platform.",
    ],

    solutionIntro:
      "Service extraction with compliance built into the pipeline",

    solutionDetail:
      "Starfii extracted the highest-traffic domains — scheduling, messaging, and billing — into separate services behind an API gateway, each with its own datastore. Each extracted service can now be released, scaled, and rolled back on its own, so a problem in one area no longer affects the rest of the platform. Extraction was phased, keeping the product stable for existing customers while the architecture changed underneath.",

    solution: [
      "Targeted extraction: The three highest-traffic domains moved to independent services first; lower-traffic modules stayed in the monolith for a later phase.",

      "Automated compliance gates: HIPAA checks — encryption, access-log verification, PHI-field scanning — now run in CI/CD on every commit.",

      "Zero-downtime deploys: Blue-green releases per service eliminated the maintenance window entirely.",

      "Independent scaling: Each extracted service scales on its own, so heavy use in one area doesn't slow the rest of the platform.",

      "Phased migration: Traffic moved to the new services gradually, keeping the product stable for existing customers throughout.",
    ],

    results: [
      {
        metric: "1M → 5M+",
        label: "Active users supported",
      },
      {
        metric: "45min → 0",
        label: "Deployment downtime window",
      },
      {
        metric: "6wk → days",
        label: "Release cadence for extracted services",
      },
      {
        metric: "99.99%",
        label: "Platform uptime",
      },
    ],

    benefitsIntro:
      "What changed for the engineering organization",

    benefits: [
      "Independent releases: The scheduling team ships without waiting on billing or messaging.",

      "Faster compliance sign-off: Most HIPAA checks run automatically instead of requiring a manual pre-release review.",

      "Room to grow: The platform absorbed 5x user growth without an incident tied to capacity.",

      "Stronger enterprise readiness: Zero-downtime releases and automated compliance checks answer two concerns that had been slowing enterprise deals.",

      "Lower release risk: Smaller, more frequent releases are easier to test and easier to roll back than one large release.",
    ],

    summary:
      "The platform's growth wasn't the real risk — its release process was. Breaking the monolith apart one domain at a time, with compliance checks moved into the pipeline itself, let the team keep shipping while user count grew 5x. The team can now improve one part of the product without putting the rest at risk, and enterprise customers see a vendor that ships reliably and stays compliant. The remaining modules can be extracted later, at a pace that suits the business.",

    techStack: [
      "Service extraction",
      "API gateway",
      "HIPAA compliance automation",
      "Blue-green deployments",
      "Kubernetes",
    ],

    date: "2025-05-01",
  },

  /* ===============================================================
     05. INSURANCE
     =============================================================== */

  {
    slug: "insurance-claims-low-code-platform",
    category: "Insurance",

    title:
      "Starfii Transforms Reinsurance Claims Management with a Low Code Platform",

    subtitle:
      "Each regional office tracked claims in its own spreadsheet, so a large claim could exist in four different versions with four different statuses.",

    cardDescription:
      "Explore how Starfii transformed insurance claims management with a low code digital platform, automating workflows, improving efficiency, and enhancing service quality for a global reinsurer.",

    client:
      "Global reinsurance provider, 14 regional claims offices",

    industry: "Insurance",

    services: [
      "Low Code Engineering",
      "Workflow Automation",
      "Claims Systems",
    ],

    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1200&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2000&auto=format&fit=crop",

    overview:
      "A reinsurer reconciling spreadsheets instead of settling claims",

    clientOverview:
      "For claims involving multiple regions — common in large reinsurance treaties — there was no single source of truth, and reconciling conflicting statuses across offices could add a week or more to settlement. Claims handlers spent much of their time confirming which version of a record was correct rather than moving the claim forward, and head office had no dependable, current view of exposure across regions. The reinsurer wanted a common platform that respected local requirements without recreating the same fragmentation.",

    challengeIntro:
      "14 regions, 14 sets of rules, two disconnected legacy systems",

    challengePoints: [
      "Regional variation: Different local regulatory requirements and document types meant a single rigid workflow wouldn't fit every office.",

      "No shared identifiers: Policy administration and finance ran on two separate legacy systems with no common ID linking a claim to its policy and payment.",

      "Weekly reconciliation: Offices compared spreadsheets manually every week to catch conflicting claim statuses.",

      "Limited head office visibility: Without a shared record, leadership could not see the true status of large multi-region claims at any given moment.",

      "Manual document handling: Claim forms arrived in different formats and were typed into systems by hand, which slowed intake and introduced errors.",
    ],

    solutionIntro:
      "One configurable platform, one shared claim record",

    solutionDetail:
      "Starfii built the platform on Microsoft Power Platform with a configurable workflow engine, so each region could adjust intake steps and required documents within a shared framework. A shared claim record sits at the center, so head office and every region see the same information at the same time. Because regions configure workflows within one framework instead of building separate versions, the platform stays maintainable as requirements change.",

    solution: [
      "Configurable workflows: Each region adjusts its own intake steps and document requirements without forking the platform.",

      "Cross-system matching: A matching service resolves policy and claim identifiers across the two legacy systems automatically.",

      "Automated intake: OCR handles the most common claim-form types, routing anything unclear to a human reviewer.",

      "Shared claim record: Every office and head office work from a single record for each claim, updated in real time.",

      "Consistent framework: Regional variants live inside one platform, so improvements can be rolled out to every office without rebuilding each workflow.",
    ],

    results: [
      {
        metric: "62%",
        label: "Faster average claims cycle time",
      },
      {
        metric: "14",
        label: "Regional offices on one shared platform",
      },
      {
        metric: "40+",
        label: "Region-specific workflow variants configured",
      },
      {
        metric: "99.9%",
        label: "Platform uptime",
      },
    ],

    benefitsIntro:
      "What changed for claims operations",

    benefits: [
      "One source of truth: Every region and head office see the same claim record and status in real time.",

      "No more reconciliation cycle: The weekly spreadsheet comparison is gone entirely.",

      "Faster multi-region claims: The claims that used to be slowest — spanning multiple offices — saw the largest improvement.",

      "Better leadership visibility: Head office can see the current status of large multi-region claims without waiting for regional updates.",

      "Less manual effort: Automated intake and cross-system matching remove much of the typing and cross-checking claims teams did by hand.",
    ],

    summary:
      "The reinsurer's problem was never claims volume — it was 14 versions of the truth. A configurable platform let each region keep its own process while finally working from one shared record. Head office now has a clear, current view of claims across regions, and regional teams keep the flexibility they need to meet local requirements. The shared platform gives the reinsurer a base it can build on as its treaties and markets evolve.",

    techStack: [
      "Power Platform",
      "Configurable workflow engine",
      "Cross-system identity matching",
      "OCR document intake",
    ],

    date: "2025-09-01",
  },
];

/* ===============================================================
   SORT CASE STUDIES
   Newest case study first
   =============================================================== */

export const caseStudies: CaseStudy[] = [...rawCaseStudies].sort(
  (a, b) =>
    new Date(b.date).getTime() -
    new Date(a.date).getTime()
);

/* ===============================================================
   GET CASE STUDY BY SLUG
   =============================================================== */

export function getCaseStudyBySlug(
  slug: string
): CaseStudy | undefined {
  return caseStudies.find(
    (study) => study.slug === slug
  );
}
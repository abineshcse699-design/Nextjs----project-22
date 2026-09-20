// Save as: app/industries/insurencee/data/case-studies.tsx
//
// NOTE: client descriptions, figures and outcomes below are DRAFT
// placeholder content written to match the tone of your other case
// studies. Replace them with real, approved client data before going live.

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

  // Publish date, format "YYYY-MM-DD". Used only for ordering: the
  // case study with the latest date always shows first, everywhere
  // this data is used, regardless of where it sits in this array.
  date: string;
};

// Raw list. Order here does NOT matter for display, only `date` does.
// Slugs match the carousel on the Insurance page exactly.
const rawCaseStudies: CaseStudy[] = [
  {
    slug: "insurance-customer-experience-modernization",
    category: "Digital Insurance",

    title: "Starfii Modernizes a Customer-Facing Insurance Experience",
    subtitle:
      "Policyholders could pay a bill online but had to call an agent to change coverage, add a driver, or find out where a claim stood.",
    cardDescription:
      "A digital modernization program improved customer journeys and application foundations while creating a more scalable experience layer.",

    client: "Regional property and casualty insurer, ~600,000 policyholders",
    industry: "Insurance",
    services: ["Digital Insurance", "Customer Portals", "Application Engineering"],

    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000&auto=format&fit=crop",

    overview: "An insurer whose portal stopped at the payment page",
    clientOverview:
      "The customer portal handled payments and document downloads, but almost everything else, including policy changes, quotes, and claim status, went through phone calls and agent emails. Each new portal feature required changes deep inside the policy administration system, so releases were slow and infrequent.",

    challengeIntro: "A payments-only portal tied to policy administration",
    challengePoints: [
      "Limited self-service: Policy changes, quotes, and claim status all needed a call or an agent email.",
      "Tightly coupled front end: Portal changes touched the policy system directly, so releases were slow and risky.",
      "Inconsistent journeys: Web, mobile, and agent-assisted flows collected the same information in different ways.",
    ],

    solutionIntro: "A scalable experience layer in front of core systems",
    solutionDetail:
      "Starfii introduced an API-based experience layer between customer channels and the policy and claims systems, then rebuilt the top servicing journeys on top of it.",
    solution: [
      "Self-service policy changes: Customers update drivers, addresses, and coverage online with real-time validation.",
      "Claim status tracking: Customers follow a claim from submission to resolution without calling.",
      "Experience layer: APIs decouple the portal from core systems, so new features ship without changing the policy platform.",
    ],

    results: [
      { metric: "+52%", label: "Policy changes completed online" },
      { metric: "-34%", label: "Service calls for routine requests" },
      { metric: "3x", label: "Faster portal release cadence" },
      { metric: "+16 pts", label: "Customer satisfaction score" },
    ],

    benefitsIntro: "What changed for policyholders and service teams",
    benefits: [
      "Self-service that works: Customers make routine changes online instead of waiting for a callback.",
      "Fewer routine calls: Service staff spend their time on complex cases, not simple updates.",
      "Faster improvement: New journeys ship without waiting on a policy system release.",
    ],

    summary:
      "The portal's limit was not its design. It was that every feature had to pass through the policy system. Putting an experience layer in between let the insurer improve the customer journey without touching its core platform.",

    techStack: [
      "React",
      "Next.js",
      "API gateway",
      "Policy system integration",
      "Identity and access management",
    ],

    date: "2026-09-01",
  },

  {
    slug: "regulated-platform-workflow-automation",
    category: "Automation",

    title: "Starfii Automates Workflows for a Regulated Platform",
    subtitle:
      "Staff opened, read, and re-typed thousands of submission and claim documents each month, and every hand-off was tracked in email.",
    cardDescription:
      "Engineering and automation capabilities helped streamline document-heavy workflows while keeping controls and auditability visible.",

    client: "Insurance services platform, ~25,000 documents processed monthly",
    industry: "Insurance",
    services: ["Workflow Automation", "Intelligent Document Processing", "Compliance Engineering"],

    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000&auto=format&fit=crop",

    overview: "Document-heavy workflows run by hand in a regulated setting",
    clientOverview:
      "Carriers and brokers sent submissions, claim forms, and supporting evidence by email and upload. Staff read each document, keyed the details into the workflow system, and chased approvals by email, which slowed turnaround and made audit evidence hard to assemble.",

    challengeIntro: "Unstructured documents and scattered approvals",
    challengePoints: [
      "Unstructured inputs: Documents arrived as PDFs, scans, and emails in dozens of formats.",
      "Manual re-keying: Staff typed key details into the workflow system by hand.",
      "Visibility gaps: Approvals happened over email, so audit evidence had to be assembled after the fact.",
    ],

    solutionIntro: "Automated intake with controls kept in view",
    solutionDetail:
      "Starfii added document extraction and rules-based routing to the platform, keeping approval points and audit logs visible to compliance at every step.",
    solution: [
      "Document extraction: Key fields are read from incoming documents and checked before they enter the workflow.",
      "Rules-based routing: Work is assigned automatically by type, value, and risk, with clear escalation paths.",
      "Built-in audit trail: Every action and approval is logged, so evidence is ready when auditors ask.",
    ],

    results: [
      { metric: "-55%", label: "Manual handling time per document" },
      { metric: "72%", label: "Documents processed with no manual re-keying" },
      { metric: "-40%", label: "Average turnaround time" },
      { metric: "100%", label: "Approvals with a recorded audit trail" },
    ],

    benefitsIntro: "What changed for operations and compliance",
    benefits: [
      "Less re-keying: Staff review exceptions instead of typing every document into the system.",
      "Faster turnaround: Routing rules put each item in front of the right person immediately.",
      "Audit ready: Compliance can pull the full history of any item without asking operations.",
    ],

    summary:
      "Automation was acceptable to compliance because the controls were designed in from the start, not added later. Every approval point stayed visible while the manual typing disappeared.",

    techStack: [
      "Intelligent document processing",
      "Workflow automation",
      "Rules engine",
      "Audit logging",
      "Role-based access",
    ],

    date: "2026-08-01",
  },

  {
    slug: "enterprise-legacy-modernization-timeline",
    category: "Application Modernization",

    title: "Starfii Modernizes a Legacy Application Portfolio",
    subtitle:
      "Core policy and billing workloads ran on decades-old platforms that only a handful of people understood, and every change took months.",
    cardDescription:
      "A phased application modernization approach moved critical workloads toward a more maintainable and scalable architecture.",

    client: "Life and annuity insurer, 90+ applications across 3 core platforms",
    industry: "Insurance",
    services: ["Application Modernization", "Cloud Engineering", "Quality Engineering"],

    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2000&auto=format&fit=crop",

    overview: "Critical systems that few people could safely change",
    clientOverview:
      "The insurer's policy administration, billing, and commission systems had been extended for decades. Documentation was thin, knowledge sat with a few long-tenured staff, and even small regulatory updates needed months of testing before release.",

    challengeIntro: "Concentrated knowledge, slow change, and no room for downtime",
    challengePoints: [
      "Knowledge concentration: Only a few people understood how the core platforms actually worked.",
      "Slow, risky change: Manual regression testing stretched even small updates to months.",
      "No downtime tolerance: Policy and billing had to keep running throughout any modernization.",
    ],

    solutionIntro: "A phased path with old and new running side by side",
    solutionDetail:
      "Starfii mapped dependencies, wrapped legacy functions with APIs, and moved workloads in priority order, validating each step before retiring the old component.",
    solution: [
      "Dependency mapping: A clear view of how systems interact set the order of migration.",
      "API wrapping: Legacy functions were exposed through APIs, so new services could use them without a rewrite first.",
      "Automated regression testing: Test suites built up front let every change go out with confidence.",
    ],

    results: [
      { metric: "6mo → 6wk", label: "Time to deliver a regulatory change" },
      { metric: "-70%", label: "Regression testing effort" },
      { metric: "24", label: "Applications retired or consolidated" },
      { metric: "0", label: "Unplanned downtime during migration" },
    ],

    benefitsIntro: "What changed for technology and business teams",
    benefits: [
      "Faster regulatory response: Required updates reach production in weeks instead of months.",
      "Shared knowledge: System behavior is documented and tested, not held in a few people's heads.",
      "Lower risk: Each step is validated in parallel before the old component is switched off.",
    ],

    summary:
      "The insurer could not stop its core systems to fix them, so the plan never asked it to. Wrapping, testing, and migrating in small validated steps moved critical workloads without interrupting a single policy transaction.",

    techStack: [
      "API wrapping",
      "Dependency analysis",
      "Cloud migration",
      "Automated regression testing",
      "Observability",
    ],

    date: "2026-07-01",
  },

  {
    slug: "fintech-saas-platform-mvp-to-scale",
    category: "Fintech SaaS",

    title: "Starfii Builds a Fortune 500 Fintech SaaS Platform From MVP to Scale",
    subtitle:
      "A young company needed a working product in front of Fortune 500 buyers within a quarter, without building something that could not survive their security reviews.",
    cardDescription:
      "See how Starfii's enterprise product engineering team took a fintech SaaS platform from a three month MVP to a full featured product serving Fortune 500 clients.",

    client: "Fintech SaaS vendor serving insurers and large financial institutions",
    industry: "Fintech",
    services: ["SaaS Product Engineering", "Enterprise Application Development", "Cloud Engineering"],

    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop",

    overview: "A three-month window to prove the product to enterprise buyers",
    clientOverview:
      "The company had a strong idea and a short window to win its first enterprise pilots. Buyers expected enterprise-grade security, integrations, and reliability from day one, which ruled out a throwaway prototype that would have to be rebuilt later.",

    challengeIntro: "A short timeline with enterprise-level expectations",
    challengePoints: [
      "Tight timeline: The first enterprise pilot was only three months away.",
      "Enterprise requirements: Buyers required single sign-on, audit logs, and role-based access before signing.",
      "Growth after launch: The architecture had to scale from a handful of pilots to full rollouts without a rebuild.",
    ],

    solutionIntro: "An MVP built on foundations that scale",
    solutionDetail:
      "Starfii scoped the smallest product that would satisfy enterprise buyers, built it on a multi-tenant architecture with security controls from the start, and evolved it release by release.",
    solution: [
      "Focused MVP scope: A tight feature set delivered the core workflow within three months.",
      "Enterprise controls from day one: Single sign-on, audit logging, and role-based access shipped in the first release.",
      "Multi-tenant architecture: One platform serves many customers with isolated data and configurable settings.",
    ],

    results: [
      { metric: "3mo", label: "From kickoff to first enterprise pilot" },
      { metric: "8", label: "Fortune 500 clients live on the platform" },
      { metric: "Weekly", label: "Release cadence after launch" },
      { metric: "99.95%", label: "Platform uptime" },
    ],

    benefitsIntro: "What changed for the product and its customers",
    benefits: [
      "Speed to market: The product reached enterprise pilots within a single quarter.",
      "No rebuild: The MVP architecture carried the platform through to full rollouts.",
      "Buyer confidence: Security and audit controls passed enterprise reviews on the first attempt.",
    ],

    summary:
      "Speed and enterprise readiness usually pull in opposite directions. Scoping the MVP tightly while building security and multi-tenancy in from the first release meant nothing had to be thrown away when the customers got bigger.",

    techStack: [
      "Multi-tenant architecture",
      "Single sign-on",
      "Audit logging",
      "CI/CD",
      "Cloud infrastructure",
    ],

    date: "2026-06-01",
  },

  {
    slug: "healthcare-saas-generative-ai-features",
    category: "Generative AI",

    title: "Starfii Ships a Generative AI Feature Set for a Regulated SaaS Platform",
    subtitle:
      "Customers were asking for AI features, but the platform handled sensitive data under strict compliance rules, so the team could not simply bolt on a chatbot.",
    cardDescription:
      "Discover how Starfii's Generative AI and LLM engineering team embedded Gen AI features into a compliance driven SaaS platform.",

    client: "Compliance-driven SaaS platform serving enterprise healthcare customers",
    industry: "Healthcare Technology",
    services: ["Generative AI Engineering", "LLM Integration", "SaaS Product Engineering"],

    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop",

    overview: "Generative AI inside a platform with no room for error",
    clientOverview:
      "Enterprise customers wanted summarization, drafting, and search across their own records. Any AI feature had to keep data isolated between customers, log every interaction, and leave a person in control of the outcome.",

    challengeIntro: "Sensitive data, high accuracy standards, and audit requirements",
    challengePoints: [
      "Sensitive data: AI features had to work with confidential records without exposing them across customers.",
      "Accuracy expectations: Outputs had to be grounded in the customer's own content, not model guesses.",
      "Audit requirements: Every prompt, response, and user action needed to be logged and reviewable.",
    ],

    solutionIntro: "Grounded, governed AI features with a person in the loop",
    solutionDetail:
      "Starfii designed the AI layer around retrieval from each customer's own data, strict tenant isolation, and review steps, and shipped features incrementally rather than all at once.",
    solution: [
      "Grounded answers: Responses draw on the customer's own records and show their sources.",
      "Tenant isolation: Each customer's data and prompts stay separated from every other customer's.",
      "Human review and logging: Users review AI output before it is used, and every interaction is logged.",
    ],

    results: [
      { metric: "4", label: "Generative AI features shipped in the first release" },
      { metric: "-45%", label: "Time to draft routine documents" },
      { metric: "-60%", label: "Time to find information in records" },
      { metric: "100%", label: "AI interactions logged for audit" },
    ],

    benefitsIntro: "What changed for customers and the product team",
    benefits: [
      "Time saved: Routine drafting and searching take a fraction of the time they used to.",
      "Trustworthy output: Sourced answers let users verify what the AI produced.",
      "Compliance intact: Isolation and logging kept the platform within its regulatory obligations.",
    ],

    summary:
      "The AI features did not need to be the boldest on the market. They needed to be dependable in a regulated setting. Grounding answers in each customer's own data and keeping people in the loop is what made them safe to ship.",

    techStack: [
      "Large language models",
      "Retrieval-augmented generation",
      "Tenant isolation",
      "Prompt and response logging",
      "Human-in-the-loop review",
    ],

    date: "2026-05-01",
  },
];

// Newest date first. This is what every page actually imports.
export const caseStudies: CaseStudy[] = [...rawCaseStudies].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
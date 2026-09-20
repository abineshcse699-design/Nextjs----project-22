// Save as: app/industries/financial-services/casestudies/data/casestudies.tsx
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
// Slugs match the carousel on the Financial Services page exactly.
const rawCaseStudies: CaseStudy[] = [
  {
    slug: "regional-institution-digital-experience",
    category: "Digital Transformation",

    title: "Starfii Modernizes a Regional Financial Institution's Digital Experience",
    subtitle:
      "Members could check balances online but still had to call or visit a branch to change details, open products, or dispute a charge, and digital adoption had stalled.",
    cardDescription:
      "Explore how Starfii's modernization team redesigned customer-facing journeys and application foundations for a faster, more secure digital experience.",

    client: "Regional financial institution, ~520,000 members, 60 branches",
    industry: "Financial Services",
    services: ["Customer Experience", "Application Engineering", "Digital Transformation"],

    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000&auto=format&fit=crop",

    overview: "An institution whose digital channel only did half the job",
    clientOverview:
      "The online banking portal covered balances and transaction history but little else. Most servicing still needed a call or a branch visit, which kept contact-center volume high, and every portal change needed a long release cycle because the front end was tightly bound to the core banking system.",

    challengeIntro: "A read-only portal tied directly to core banking",
    challengePoints: [
      "Limited self-service: Members could view accounts but not update details, open products, or raise disputes online.",
      "Tight coupling: Portal screens called core banking directly, so every change needed a coordinated release.",
      "Inconsistent journeys: Web and mobile handled the same tasks differently, confusing members and support staff.",
    ],

    solutionIntro: "A modern experience layer with secure self-service journeys",
    solutionDetail:
      "Starfii redesigned the highest-volume journeys and rebuilt the front end on an API layer that separates the member experience from the core system.",
    solution: [
      "Journey redesign: Research-led redesign of the top servicing journeys removed unnecessary steps and screens.",
      "API experience layer: A secure API layer decouples the front end from core banking so changes ship independently.",
      "Shared components: One design system keeps web and mobile behavior consistent across every journey.",
    ],

    results: [
      { metric: "+41%", label: "Members using digital self-service" },
      { metric: "-31%", label: "Contact center calls for routine servicing" },
      { metric: "3x", label: "Faster portal release cadence" },
      { metric: "+18 pts", label: "Digital satisfaction score" },
    ],

    benefitsIntro: "What changed for members and the institution",
    benefits: [
      "Self-service that works: Members complete routine tasks online without calling or visiting a branch.",
      "Lower service cost: Fewer routine calls free contact-center staff for complex conversations.",
      "Faster change: Product teams ship journey improvements without waiting on a core banking release.",
    ],

    summary:
      "The portal's problem was not its look. It was that the front end and the core system were welded together. Separating them let the institution redesign journeys once and keep improving them on its own schedule.",

    techStack: ["React", "Next.js", "API gateway", "Design system", "Cloud hosting"],

    date: "2026-09-01",
  },

  {
    slug: "fintech-platform-mvp-to-scale",
    category: "Fintech",

    title: "Starfii Builds a Fintech Platform From MVP to Scale",
    subtitle:
      "A fintech's MVP had won its first customers, but a single-service codebase could not handle enterprise volumes or pass partner security reviews.",
    cardDescription:
      "See how Starfii's product engineering team helped take a fintech platform from an early MVP into a scalable, enterprise-ready product.",

    client: "Growth-stage fintech, payments and lending platform",
    industry: "Fintech",
    services: ["Product Engineering", "SaaS Engineering", "Cloud Engineering"],

    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop",

    overview: "An MVP that had outgrown its first architecture",
    clientOverview:
      "The platform launched on one application and one database, built to validate the idea quickly. As banks and lenders began piloting it, they asked for audit logs, role-based access, uptime commitments, and transaction volumes the original build was never designed to provide.",

    challengeIntro: "A prototype architecture facing enterprise expectations",
    challengePoints: [
      "Single point of failure: One service and one database meant any incident took the whole product down.",
      "Security review gaps: Partner due diligence flagged missing audit logging, role-based access, and encryption controls.",
      "Slow releases: Tightly coupled, lightly tested code made every deploy risky and infrequent.",
    ],

    solutionIntro: "An enterprise-ready platform built in stages",
    solutionDetail:
      "Starfii kept the product live while re-architecting it into modular services and adding the security and reliability controls that enterprise buyers require.",
    solution: [
      "Modular services: Accounts, payments, and lending were separated into independently scalable services.",
      "Security foundation: Audit logging, role-based access control, and encryption were built into the platform.",
      "Automated delivery: CI/CD with automated tests and staged rollouts made deployments routine.",
    ],

    results: [
      { metric: "10x", label: "Transaction volume supported" },
      { metric: "99.95%", label: "Platform uptime" },
      { metric: "Monthly → daily", label: "Release frequency" },
      { metric: "5", label: "Enterprise partners onboarded after security review" },
    ],

    benefitsIntro: "What changed for the product and its buyers",
    benefits: [
      "Enterprise credibility: Audit trails and access controls now satisfy partner security reviews.",
      "Room to scale: Each service scales on its own instead of the whole product scaling together.",
      "Confident releases: Automated testing lets the team ship small changes often with less risk.",
    ],

    summary:
      "The MVP did its job, and that was the problem: it had been built to prove an idea, not to carry enterprise traffic. Rebuilding it in stages, without pausing the product, let the company grow into the customers it had won.",

    techStack: [
      "Microservices",
      "API architecture",
      "CI/CD",
      "Role-based access control",
      "Kubernetes",
    ],

    date: "2026-08-01",
  },

  {
    slug: "legacy-application-portfolio-modernization",
    category: "Modernization",

    title: "Starfii Modernizes a Complex Legacy Application Portfolio",
    subtitle:
      "Over 120 aging applications consumed most of the technology budget, and nobody could say which to keep, move, or retire.",
    cardDescription:
      "Learn how Starfii's phased modernization roadmap moved legacy workloads toward a scalable cloud architecture with controlled business disruption.",

    client: "Financial services group, 120+ applications across 4 business units",
    industry: "Financial Services",
    services: ["Application Modernization", "Cloud Engineering", "Quality Engineering"],

    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2000&auto=format&fit=crop",

    overview: "A portfolio that cost more to maintain than to improve",
    clientOverview:
      "Years of acquisitions had left the group with over 120 applications, many on unsupported platforms and connected by point-to-point integrations. Roughly three-quarters of the technology budget went on keeping them running, leaving little for new capability.",

    challengeIntro: "Unclear priorities and undocumented dependencies",
    challengePoints: [
      "No portfolio view: There was no shared inventory of what each application did or what depended on it.",
      "Unsupported platforms: Several core applications ran on end-of-life technology with growing security exposure.",
      "Continuity risk: The business could not accept downtime, which ruled out a big-bang replacement.",
    ],

    solutionIntro: "A phased roadmap that modernizes without disruption",
    solutionDetail:
      "Starfii assessed the whole estate, ranked applications by risk and value, and sequenced the migration so critical services stayed available at every step.",
    solution: [
      "Portfolio assessment: Every application was scored on risk, cost, and business value to set clear priorities.",
      "Staged migration: Workloads moved in priority order, with old and new running side by side until validated.",
      "Automated testing: Regression suites built early gave teams confidence at each stage.",
    ],

    results: [
      { metric: "120+", label: "Applications assessed and prioritized" },
      { metric: "38", label: "Applications retired or consolidated" },
      { metric: "-25%", label: "Run cost of migrated workloads" },
      { metric: "0", label: "Unplanned downtime during migration waves" },
    ],

    benefitsIntro: "What changed for technology leadership",
    benefits: [
      "Clear priorities: One scored inventory replaces guesswork about what to fix first.",
      "Lower run cost: Retiring and consolidating applications frees budget for new capability.",
      "Reduced risk: Unsupported platforms are replaced in order of exposure, not convenience.",
    ],

    summary:
      "The group did not need a bigger migration budget. It needed to know which applications mattered. A scored portfolio and a staged sequence made modernization safe enough to actually start.",

    techStack: [
      "Application assessment",
      "API wrapping",
      "Cloud migration",
      "Automated regression testing",
      "Observability",
    ],

    date: "2026-07-01",
  },

  {
    slug: "fraud-detection-ai-rollout",
    category: "AI",

    title: "Starfii Rolls Out AI-Assisted Fraud Detection for a Lending Platform",
    subtitle:
      "Fixed rules were flagging too many genuine applicants and still missing coordinated fraud, while analysts worked from an ever-growing queue.",
    cardDescription:
      "Discover how Starfii's AI engineering team embedded explainable fraud models into a high-volume lending platform.",

    client: "Digital lending platform, ~85,000 applications processed monthly",
    industry: "Lending",
    services: ["AI Engineering", "Data Engineering", "Risk Analytics"],

    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",

    overview: "A fraud team drowning in false positives",
    clientOverview:
      "Static rules sent a large share of legitimate applications to manual review, delaying approvals for genuine borrowers, while organized fraud rings adapted around those rules. Analysts had no consistent way to decide which cases mattered most.",

    challengeIntro: "Blunt rules, slow reviews, and regulatory scrutiny",
    challengePoints: [
      "High false positives: Static rules sent many genuine applicants to manual review.",
      "Unprioritized queue: Analysts worked cases in arrival order, not by likelihood or value at risk.",
      "Explainability requirement: Any model had to justify each decision to auditors and regulators.",
    ],

    solutionIntro: "Explainable models that support analysts",
    solutionDetail:
      "Starfii embedded machine learning models alongside the existing rules, with each score accompanied by the factors behind it and a human review step for borderline decisions.",
    solution: [
      "Risk scoring: Models score each application using behavior, device, and transaction signals.",
      "Explainable outputs: Every score shows its top contributing factors so analysts and auditors can review it.",
      "Analyst workbench: A prioritized queue with case context puts the highest-risk cases first.",
    ],

    results: [
      { metric: "-37%", label: "False-positive referrals to manual review" },
      { metric: "+24%", label: "More confirmed fraud caught" },
      { metric: "-52%", label: "Time to clear a flagged case" },
      { metric: "100%", label: "Model decisions with a recorded explanation" },
    ],

    benefitsIntro: "What changed for risk and lending teams",
    benefits: [
      "Fewer false alarms: Genuine borrowers move through without unnecessary manual review.",
      "Better use of analysts: Investigators spend their time on the cases most likely to be fraud.",
      "Defensible decisions: Recorded explanations give auditors and regulators a clear trail.",
    ],

    summary:
      "Better detection was only half the result. What made the models usable in a regulated lender was that every score came with a reason, and a person stayed in the loop for the close calls.",

    techStack: [
      "Machine learning",
      "Feature engineering",
      "Explainability tooling",
      "Case management",
      "Model monitoring",
    ],

    date: "2026-06-01",
  },

  {
    slug: "regulatory-reporting-automation",
    category: "Data & Analytics",

    title: "Starfii Automates Regulatory Reporting for a Financial Services Group",
    subtitle:
      "Each reporting cycle, analysts spent weeks collecting data from spreadsheets and systems, and no two entities produced figures the same way.",
    cardDescription:
      "See how Starfii's data engineering team replaced manual reporting workflows with a governed, automated reporting pipeline.",

    client: "Financial services group, 9 legal entities across 5 jurisdictions",
    industry: "Financial Services",
    services: ["Data Engineering", "Automation", "Governance and Compliance"],

    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",

    overview: "A reporting cycle built on spreadsheets and email",
    clientOverview:
      "Teams in each legal entity pulled data manually from core systems and local spreadsheets, reconciled it by hand, and emailed drafts for sign-off. Definitions varied between entities, so figures often had to be reworked before submission.",

    challengeIntro: "Fragmented data and inconsistent definitions",
    challengePoints: [
      "Manual collection: Analysts extracted data from several systems and spreadsheets every cycle.",
      "Inconsistent definitions: Entities calculated the same metrics differently, forcing rework at group level.",
      "Weak lineage: Reviewers could not easily trace a reported figure back to its source data.",
    ],

    solutionIntro: "A governed, automated reporting pipeline",
    solutionDetail:
      "Starfii built a central reporting data layer with shared definitions, automated validation, and lineage, so each regulatory report is fed from one governed source.",
    solution: [
      "Unified data layer: Source data from every entity lands in one governed store with shared definitions.",
      "Automated validation: Checks flag gaps and mismatches before reports reach reviewers.",
      "Lineage and audit trail: Each reported figure traces back to its source data and approval history.",
    ],

    results: [
      { metric: "-60%", label: "Time to prepare each reporting cycle" },
      { metric: "9", label: "Legal entities on one shared pipeline" },
      { metric: "-70%", label: "Reconciliation errors found late" },
      { metric: "100%", label: "Reported figures traceable to source" },
    ],

    benefitsIntro: "What changed for finance and compliance teams",
    benefits: [
      "Shorter cycles: Teams finish reports in a fraction of the time and start reviewing sooner.",
      "Consistent numbers: Shared definitions mean every entity reports the same metric the same way.",
      "Audit confidence: Reviewers can trace any figure to its source without asking an analyst.",
    ],

    summary:
      "The reporting delay was not about effort. It was about having no single governed source. Agreeing on definitions and building lineage in from the start turned each cycle from a scramble into a routine.",

    techStack: [
      "Data pipelines",
      "Data governance",
      "Data lineage",
      "Automated validation",
      "BI reporting",
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
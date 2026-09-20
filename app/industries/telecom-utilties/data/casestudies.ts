// Save as: app/industries/telecom-utilties/data/casestudies.ts
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
    slug: "telecom-connected-customer-platform",
    category: "Customer Platforms",

    title: "Starfii Modernizes a Connected Customer Platform",
    subtitle:
      "A regional telecom provider had customers spread across separate portals for billing, support, and service requests, and every new offer meant another disconnected screen.",
    cardDescription:
      "A digital modernization program connected customer journeys, service workflows, applications, and data around a scalable platform foundation.",

    client: "Regional telecom provider, 2M+ subscribers",
    industry: "Telecom & Utilities",
    services: ["Customer Platforms", "Application Engineering", "Cloud Engineering"],

    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop",

    overview: "Customers moving between systems that did not talk to each other",
    clientOverview:
      "Billing, account management, and support each lived in a separate application. Customers repeated the same details across channels, agents switched between screens to answer simple questions, and launching a new plan meant changes in several systems at once.",

    challengeIntro: "A fragmented customer experience across web, mobile, and support",
    challengePoints: [
      "Disconnected portals: Billing, service requests, and support ran on separate applications with no shared customer view.",
      "Repeat contacts: Customers called support for tasks they could not finish in self-service.",
      "Slow launches: Every new plan or offer needed coordinated changes across several legacy systems.",
    ],

    solutionIntro: "One modular customer platform, rolled out in stages",
    solutionDetail:
      "Starfii wrapped the legacy systems with APIs, built a unified customer platform on top, and moved journeys over one at a time so account and billing operations kept running without interruption.",
    solution: [
      "Unified customer platform: Self-service, account management, service requests, and billing experiences share one web and mobile front end.",
      "API layer over legacy systems: Existing billing and CRM systems stayed in place and were exposed through stable APIs.",
      "Staged rollout: Journeys moved in priority order, with old and new running side by side until each step was validated.",
    ],

    results: [
      { metric: "-35%", label: "Support contacts for routine account tasks" },
      { metric: "2x", label: "Growth in digital self-service adoption" },
      { metric: "Weeks → Days", label: "Time to launch a new plan or offer" },
      { metric: "0", label: "Billing interruptions during the rollout" },
    ],

    benefitsIntro: "What changed for customers and the service teams",
    benefits: [
      "One place for customers: Account, billing, and support journeys feel connected instead of separate.",
      "Faster offers: New plans and services reach customers without changes across every legacy system.",
      "Better agent experience: Support teams see the full customer picture on a single screen.",
    ],

    summary:
      "The provider did not need to replace its core systems. It needed a connected layer on top of them. A modular platform and APIs let customers see one experience while the foundation improved underneath.",

    techStack: [
      "Modular architecture",
      "API gateway",
      "Web and mobile front end",
      "Cloud infrastructure",
      "Observability",
    ],

    date: "2026-09-01",
  },

  {
    slug: "utilities-digital-operations-automation",
    category: "Digital Operations",

    title: "Starfii Connects Digital Operations and Automation",
    subtitle:
      "A utility's field crews worked from paper forms and separate systems for scheduling, work orders, and asset records, so simple jobs took far longer than they should.",
    cardDescription:
      "Operational workflows, automation, and application engineering helped connect teams, assets, information, and service processes.",

    client: "Regional utility provider, 900+ field technicians",
    industry: "Telecom & Utilities",
    services: ["Digital Operations", "Automation", "Application Engineering"],

    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop",

    overview: "Field work held back by disconnected tools",
    clientOverview:
      "Scheduling, work orders, and asset information were kept in different systems. Technicians called the office to confirm job details, updates were entered by hand after the visit, and exceptions were tracked in spreadsheets.",

    challengeIntro: "Manual coordination between the office and the field",
    challengePoints: [
      "Scattered information: Schedules, work orders, and asset history sat in separate systems.",
      "Double entry: Field updates were re-keyed by back-office staff after each visit.",
      "Slow exceptions: Delays and reschedules relied on phone calls and spreadsheets to resolve.",
    ],

    solutionIntro: "Connected field workflows with automation built in",
    solutionDetail:
      "Starfii built a mobile-first field service application connected to scheduling and asset data, then automated the routine steps around it while routing exceptions to the right team.",
    solution: [
      "Mobile field application: Technicians see jobs, asset history, and service notes in one place, online or offline.",
      "Workflow automation: Assignments, approvals, notifications, and status updates happen without manual handoffs.",
      "Exception routing: Delays and failed visits go straight to the right team with the context they need.",
    ],

    results: [
      { metric: "+22%", label: "Jobs completed per technician per week" },
      { metric: "-60%", label: "Manual data entry after field visits" },
      { metric: "-30%", label: "Average time to resolve a service request" },
      { metric: "900+", label: "Field technicians on the connected platform" },
    ],

    benefitsIntro: "What changed for field teams and operations",
    benefits: [
      "Less paperwork: Technicians spend more of the day on the job itself.",
      "Faster service: Requests move from booking to completion with fewer handoffs.",
      "People stay in control: Automation handles routine steps while judgment calls go to the right team.",
    ],

    summary:
      "The crews did not need more reporting. They needed their tools to work together. Connecting the field, the office, and asset data removed the manual steps that slowed every job.",

    techStack: [
      "Mobile application",
      "Workflow automation",
      "Integration layer",
      "Cloud infrastructure",
      "Observability",
    ],

    date: "2026-08-01",
  },

  {
    slug: "telecom-cloud-data-foundations",
    category: "Cloud & Data",

    title: "Starfii Builds Cloud and Data Foundations for Network Visibility",
    subtitle:
      "A telecom operator had valuable network, customer, and usage data, but it lived in separate systems and reports were always a day behind.",
    cardDescription:
      "Cloud engineering and data capabilities created a stronger foundation for operational visibility, intelligent services, and scalable applications.",

    client: "Telecom operator, multi-region network",
    industry: "Telecom & Utilities",
    services: ["Cloud Engineering", "Data Platforms", "Application Engineering"],

    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop",

    overview: "Rich data, but no shared view of the network",
    clientOverview:
      "Network, customer, and usage data were held in separate on-premises systems. Operations teams waited for overnight reports, capacity decisions were made on yesterday's numbers, and adding new analytics meant weeks of integration work.",

    challengeIntro: "Data and infrastructure that could not keep up with operations",
    challengePoints: [
      "Siloed data: Network, customer, and usage data could not be viewed together.",
      "Delayed reporting: Teams worked from overnight reports instead of current data.",
      "Rigid infrastructure: Scaling capacity or adding analytics required long lead times.",
    ],

    solutionIntro: "A governed cloud data platform built for continuous service",
    solutionDetail:
      "Starfii planned a staged cloud migration, prioritizing the workloads where cloud delivered the most resilience, and built a governed data platform that brings operational and customer data together.",
    solution: [
      "Cloud landing zone: Secure, resilient foundations with failover patterns designed for continuous service.",
      "Governed data platform: Network, customer, and usage data are combined with clear ownership and access controls.",
      "Near real-time dashboards: Operations teams monitor service health and demand as it happens.",
    ],

    results: [
      { metric: "24h → 5 min", label: "Data freshness for operational reporting" },
      { metric: "-30%", label: "Time to detect and triage service issues" },
      { metric: "99.98%", label: "Platform availability after migration" },
      { metric: "6", label: "Data sources unified in one platform" },
    ],

    benefitsIntro: "What changed for operations and decision makers",
    benefits: [
      "A trusted view: Teams work from the same current numbers instead of separate reports.",
      "Faster response: Issues are spotted and handled earlier.",
      "Ready for what is next: New analytics and AI services build on the same data foundation.",
    ],

    summary:
      "The data already existed. It needed a common home and a resilient platform. Cloud and data foundations turned separate systems into one view the whole operation could rely on.",

    techStack: [
      "Cloud landing zone",
      "Data platform",
      "Streaming pipelines",
      "Dashboards and reporting",
      "Observability",
    ],

    date: "2026-07-01",
  },

  {
    slug: "utilities-generative-ai-service-platform",
    category: "AI",

    title: "Starfii Embeds Generative AI Into a Service Platform",
    subtitle:
      "A utility's support agents searched long manuals and past tickets to answer customer questions, and answers varied from agent to agent.",
    cardDescription:
      "Discover how Starfii's Generative AI and LLM engineering team embedded AI features into a compliance-driven service platform.",

    client: "Utility provider, 600+ customer support agents",
    industry: "Telecom & Utilities",
    services: ["AI Engineering", "Application Engineering", "Data Platforms"],

    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",

    overview: "Answers buried in manuals, tickets, and tribal knowledge",
    clientOverview:
      "Agents relied on lengthy policy documents and past tickets to respond to billing and outage questions. New agents took months to become confident, and the utility needed any AI it introduced to be explainable and auditable.",

    challengeIntro: "Knowledge that was hard to find and inconsistent to apply",
    challengePoints: [
      "Slow lookups: Agents searched several sources to answer a single question.",
      "Inconsistent answers: Similar questions received different responses depending on the agent.",
      "Compliance pressure: Any AI feature had to be explainable, logged, and reviewed by people.",
    ],

    solutionIntro: "Responsible AI assistance inside the tools agents already use",
    solutionDetail:
      "Starfii embedded a retrieval-based assistant into the service platform, grounded in approved knowledge sources, with logging, guardrails, and human review built in from the start.",
    solution: [
      "Grounded assistant: Suggested answers cite the approved policy or knowledge article they came from.",
      "Guardrails and logging: Every suggestion is recorded, and sensitive topics are routed to a person.",
      "Agent in control: Agents review, edit, and approve responses before they reach the customer.",
    ],

    results: [
      { metric: "-40%", label: "Average time to find an answer" },
      { metric: "-30%", label: "Onboarding time for new agents" },
      { metric: "600+", label: "Agents using the assistant" },
      { metric: "100%", label: "AI suggestions logged and auditable" },
    ],

    benefitsIntro: "What changed for agents and customers",
    benefits: [
      "Faster answers: Customers wait less for a clear, accurate reply.",
      "More consistent service: Every agent works from the same approved knowledge.",
      "Trust built in: Logging and human review are part of the platform, not an afterthought.",
    ],

    summary:
      "The utility did not need AI that replaced its agents. It needed AI that helped them find the right answer quickly and showed its sources. Governance built in from day one made it safe to use.",

    techStack: [
      "Large language models",
      "Retrieval-augmented generation",
      "Knowledge indexing",
      "Prompt and response logging",
      "Cloud infrastructure",
    ],

    date: "2026-06-01",
  },

  {
    slug: "telecom-customer-experience-front-end",
    category: "Application Modernization",

    title: "Starfii Rebuilds a Customer Experience Front End",
    subtitle:
      "A telecom provider's customer-facing app was slow, hard to change, and increasingly out of step with what customers expected on mobile.",
    cardDescription:
      "Explore how Starfii's legacy software modernization team rebuilt a front end into a fast, secure digital experience.",

    client: "Telecom provider, 1.2M active app users",
    industry: "Telecom & Utilities",
    services: ["Application Modernization", "Application Engineering", "Quality Engineering"],

    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",

    overview: "A front end that had not kept up with its customers",
    clientOverview:
      "The customer app was built years earlier on a tightly coupled stack. Pages loaded slowly on mobile, small design changes took weeks, and app store ratings were falling as customers compared it with newer digital services.",

    challengeIntro: "An aging front end limiting the customer experience",
    challengePoints: [
      "Slow performance: Key screens took several seconds to load on mobile networks.",
      "Hard to change: Small updates needed changes across a tightly coupled codebase.",
      "Declining satisfaction: App ratings and digital adoption were falling.",
    ],

    solutionIntro: "A modern, secure front end delivered incrementally",
    solutionDetail:
      "Starfii rebuilt the front end screen by screen on a modern component-based architecture, released each journey behind a gradual rollout, and kept the existing back-end services running throughout.",
    solution: [
      "Component-based front end: A shared design system makes screens consistent and quick to change.",
      "Performance engineering: Load times were tuned for mobile networks and lower-end devices.",
      "Gradual rollout with automated testing: Each journey shipped to a small group first and was validated before full release.",
    ],

    results: [
      { metric: "-55%", label: "Load time on key mobile screens" },
      { metric: "3.2 → 4.5", label: "App store rating" },
      { metric: "Monthly → Weekly", label: "Front-end release frequency" },
      { metric: "0", label: "Customer-facing outages during the transition" },
    ],

    benefitsIntro: "What changed for customers and the product team",
    benefits: [
      "A faster experience: Customers complete everyday tasks in fewer taps and less waiting.",
      "Easier to evolve: Design and feature updates ship in days instead of weeks.",
      "Safer releases: Automated testing and gradual rollout reduce the risk of each change.",
    ],

    summary:
      "The back end still worked. The front end was the bottleneck. Rebuilding it in stages gave customers a faster, more modern experience without disrupting service.",

    techStack: [
      "Component-based front end",
      "Design system",
      "Automated testing",
      "CI/CD",
      "Observability",
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
export type CaseStudyStat = {
  value: string;
  label: string;
};

export type CaseStudyDetail = {
  slug: string;
  image: string;
  heroImage?: string;
  title: string;
  body: string;

  client: string;
  industry: string;
  services: string[];
  duration: string;

  overview: string;
  challenge: string;
  solution: string;
  results: string;

  stats: CaseStudyStat[];
};

export const caseStudies: CaseStudyDetail[] = [
  {
    slug: "healthcare-cloud-migration-zero-downtime",

    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1800&auto=format&fit=crop",

    title:
      "Starfii Moves a Healthcare Provider to the Cloud With Zero Downtime",

    body:
      "Starfii's cloud operations team migrated critical patient systems onto AWS in phases, keeping every service online through the entire transition.",

    client: "Healthcare Provider",

    industry: "Healthcare",

    services: [
      "Cloud Infrastructure & Operations",
      "Migration Planning",
      "Monitoring & Support",
    ],

    duration: "8 Months",

    overview:
      "A healthcare provider needed to move critical patient facing systems off aging on premise infrastructure and onto AWS, without interrupting the clinical operations that depend on them around the clock.",

    challenge:
      "Legacy infrastructure could not scale with patient volume, maintenance windows were becoming harder to schedule, and any downtime risked disrupting patient care and compliance reporting.",

    solution:
      "Starfii's cloud operations team planned a phased migration onto AWS, moving workloads in stages with parallel run environments, automated health checks, and rollback plans so every service stayed reachable throughout the cutover.",

    results:
      "The provider completed the full migration with zero unplanned downtime, gained a scalable cloud foundation for future growth, and reduced ongoing infrastructure maintenance overhead.",

    stats: [
      {
        value: "0",
        label: "Unplanned downtime incidents",
      },
      {
        value: "100%",
        label: "Patient systems migrated",
      },
      {
        value: "8 Months",
        label: "Phased migration timeline",
      },
    ],
  },

  {
    slug: "fintech-devops-release-cycle",

    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1200&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1800&auto=format&fit=crop",

    title: "A Fintech Cuts Release Time by 60% With Starfii DevOps",

    body:
      "Starfii's CI/CD automation and test automation shortened a fintech's release cycle from weeks to days without compromising compliance checks.",

    client: "Fintech Company",

    industry: "Fintech",

    services: [
      "DevOps & Continuous Operations",
      "CI/CD Automation",
      "Test Automation",
    ],

    duration: "6 Months",

    overview:
      "A fintech company needed to ship product updates faster while still meeting the compliance and audit requirements that come with handling financial data.",

    challenge:
      "Manual release processes and inconsistent testing meant every release took weeks to prepare, with compliance checks often done late in the cycle, creating bottlenecks before every launch.",

    solution:
      "Starfii built automated CI/CD pipelines with test automation embedded at every stage, including automated compliance and security checks running alongside functional tests before code reached production.",

    results:
      "Release cycles dropped from weeks to days, engineering teams gained confidence in every deployment, and compliance checks now run continuously rather than as a last minute gate.",

    stats: [
      {
        value: "60%",
        label: "Faster release cycle",
      },
      {
        value: "100%",
        label: "Automated compliance checks",
      },
      {
        value: "6 Months",
        label: "Time to full rollout",
      },
    ],
  },

  {
    slug: "retail-security-operations-overhaul",

    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1800&auto=format&fit=crop",

    title:
      "Starfii Rebuilds Security Operations for a National Retail Chain",

    body:
      "Starfii's cybersecurity team put continuous monitoring and incident response in place, cutting the retailer's threat detection time significantly.",

    client: "National Retail Chain",

    industry: "Retail",

    services: [
      "Cybersecurity & Security Operations",
      "Threat Monitoring",
      "Incident Response",
    ],

    duration: "7 Months",

    overview:
      "A national retail chain needed a modern security operations capability after outgrowing periodic manual security reviews that could not keep pace with its threat surface.",

    challenge:
      "Security monitoring was reactive rather than continuous, incident response relied on manual escalation, and the retailer had limited visibility into threats across its store and e-commerce systems.",

    solution:
      "Starfii's cybersecurity team implemented continuous monitoring across infrastructure and applications, established a structured incident response process, and built alerting that surfaced real threats without overwhelming the team with noise.",

    results:
      "The retailer significantly cut the time it takes to detect and respond to security incidents, gained continuous visibility across its environment, and reduced dependence on manual security reviews.",

    stats: [
      {
        value: "70%",
        label: "Faster threat detection",
      },
      {
        value: "24/7",
        label: "Continuous monitoring",
      },
      {
        value: "7 Months",
        label: "Implementation timeline",
      },
    ],
  },

  {
    slug: "insurance-legacy-modernization-continuity",

    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1200&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1800&auto=format&fit=crop",

    title:
      "Legacy Modernization Without Downtime for a Regional Insurer",

    body:
      "Starfii migrated a regional insurer off an aging policy system onto a modern platform while claims operations kept running uninterrupted.",

    client: "Regional Insurer",

    industry: "Insurance",

    services: [
      "Legacy System Modernization",
      "Migration Planning",
      "Operational Continuity",
    ],

    duration: "11 Months",

    overview:
      "A regional insurer relied on an aging policy administration system that was becoming increasingly costly to maintain and difficult to extend with new features.",

    challenge:
      "The legacy system was tightly coupled to claims operations, so any migration risked disrupting active claims processing. The insurer also faced rising maintenance costs and a shrinking pool of engineers familiar with the old platform.",

    solution:
      "Starfii assessed the legacy system, built a phased modernization roadmap, and migrated functionality onto a modern platform in stages, running the old and new systems in parallel until each module was fully validated.",

    results:
      "The insurer modernized its core policy system with no disruption to claims operations, reduced ongoing maintenance costs, and gained a platform that can support new products going forward.",

    stats: [
      {
        value: "0",
        label: "Claims processing interruptions",
      },
      {
        value: "100%",
        label: "Policy system migrated",
      },
      {
        value: "11 Months",
        label: "Modernization timeline",
      },
    ],
  },

  {
    slug: "saas-24x7-sla-support-model",

    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1800&auto=format&fit=crop",

    title:
      "Building a 24/7 SLA Support Model for a Growing SaaS Company",
    body:
      "Starfii stood up round the clock operational support with clear SLAs, giving a scaling SaaS company predictable uptime as its user base grew.",

    client: "SaaS Company",

    industry: "Technology",

    services: [
      "Enterprise Product Support & Maintenance",
      "SLA Design",
      "24/7 Operations",
    ],

    duration: "5 Months",

    overview:
      "A growing SaaS company needed a formal, round the clock support model as its customer base expanded beyond what its internal team could reliably support during business hours alone.",

    challenge:
      "Support coverage was limited to business hours, incidents outside that window were handled ad hoc, and the company had no formal SLA commitments to give customers confidence as it scaled.",

    solution:
      "Starfii designed a 24/7 support model with clearly defined SLA tiers, set up on call rotations and escalation paths, and put monitoring in place to catch issues before customers had to report them.",

    results:
      "The SaaS company now offers round the clock support backed by clear SLAs, giving customers predictable uptime and giving the internal team a sustainable operational rhythm as the user base continues to grow.",

    stats: [
      {
        value: "24/7",
        label: "Support coverage",
      },
      {
        value: "100%",
        label: "SLA backed tickets",
      },
      {
        value: "5 Months",
        label: "Time to launch",
      },
    ],
  },
];

export function getCaseStudyBySlug(
  slug: string
): CaseStudyDetail | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
// PLACE THIS FILE AT: app/services/global-capability-centers/data/case-studies.tsx

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
  // Publish date, format "YYYY-MM-DD". Used only for ordering — the
  // case study with the latest date always shows first, everywhere
  // this data is used (global-capability-centers page carousel AND
  // the /About/case-study all-case-studies filter page).
  date: string;
};

// Raw list — order here does NOT matter for display, only `date`
// controls what shows first. Add new entries anywhere with today's
// date (or later) and it auto-appears first everywhere.
const rawCaseStudies: CaseStudyDetail[] = [
  {
    slug: "fintech-gcc-launch-five-months",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=900&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1800&auto=format&fit=crop",

    title:
      "Starfii Sets Up a Global Capability Center for a US Fintech in Under Five Months",

    body:
      "See how Starfii took a US fintech from entity incorporation to a fully staffed engineering GCC, with governance and compliance built in from day one.",

    client: "US Fintech Company",

    industry: "Financial Services",

    services: [
      "Global Capability Center Setup",
      "GCC Talent Strategy",
      "GCC Governance Design",
    ],

    duration: "5 Months",

    overview:
      "A US fintech wanted to establish a dedicated engineering Global Capability Center that could provide access to specialized technology talent while maintaining strong governance, compliance, and operational control.",

    challenge:
      "The client needed to move quickly from location evaluation and entity formation to hiring its first engineering cohort. The GCC also needed clear governance, compliance controls, and operating processes from the beginning. Because the client operates in a regulated industry, every decision about location, entity structure, and hiring had to hold up to scrutiny, and there was little room for rework. The leadership team also needed the center to feel like a true extension of the US engineering organization from day one, rather than a separate unit that would take years to integrate.",

    solution:
      "Starfii supported the client across feasibility assessment, entity setup, talent acquisition, facilities, onboarding, governance design, and operational readiness. The engagement was structured around a phased launch so legal, infrastructure, hiring, and operating workstreams progressed in parallel. A single Starfii team coordinated these workstreams, so a decision in one area did not delay another. Governance and compliance frameworks were designed alongside the entity and hiring plans instead of being added afterward, and onboarding was planned so the first engineers could start contributing to the client's roadmap quickly.",

    results:
      "The GCC became operational in under five months with its initial engineering team onboarded, governance structures established, and compliance processes in place for continued scale. Going from entity to a working center in five months gave the client a dedicated engineering presence far sooner than a traditional setup would have allowed. Initial compliance coverage is complete, and one integrated operating model now brings together legal, hiring, infrastructure, and governance. The engineering team works as a genuine extension of the US organization, with clear reporting lines, defined processes, and controls that regulators and auditors can review with confidence. Because governance was built in from the start, the client can add new teams and roles without redesigning how the center operates. The GCC now gives the fintech reliable access to specialized technology talent and a strong base to keep growing.",

    stats: [
      { value: "5 mo", label: "Entity to operational GCC" },
      { value: "100%", label: "Initial compliance coverage" },
      { value: "1", label: "Integrated GCC operating model" },
    ],

    date: "2026-02-12",
  },

  {
    slug: "retail-analytics-gcc-scale-up",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=900&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1800&auto=format&fit=crop",

    title:
      "Starfii Builds an Analytics Focused GCC for a Global Retail Enterprise",

    body:
      "Explore how Starfii's talent strategy and facility setup gave a retail enterprise a dedicated analytics GCC, cutting time to first insight and easing pressure on the onshore data team.",

    client: "Global Retail Enterprise",

    industry: "Retail",

    services: [
      "GCC Talent Strategy",
      "Data & Analytics",
      "Facilities & Infrastructure",
    ],

    duration: "8 Months",

    overview:
      "A global retail enterprise wanted to establish an analytics focused GCC to expand its data capabilities and provide additional capacity to its onshore teams.",

    challenge:
      "The organization needed specialized analytics talent, a scalable operating model, and a dedicated center that could integrate effectively with existing global teams. The onshore data team was under pressure, with a growing queue of analysis requests and long waits for insights. Hiring enough analysts locally was slow and costly, and any new center risked operating in isolation, with unclear ownership of work and weak links to the business teams it was meant to support.",

    solution:
      "Starfii designed the talent model, defined key roles, supported hiring, established the operating environment, and created the collaboration model between the GCC and headquarters. Roles were mapped to the analytics work the retailer needed most, so hiring focused on the right skills from the start. The team also set up the facilities and tools the analysts needed and defined how work would be shared between the GCC and the onshore team, including planning routines, handoffs, and shared standards, so both teams could work as one data organization.",

    results:
      "The analytics GCC became a dedicated extension of the client's global data organization, increasing analytics capacity while improving collaboration between offshore and onshore teams. More than 40 analytics professionals were in place in the first phase, and time to insight is now 30% faster. One integrated operating model connects the GCC with headquarters, so requests are routed clearly, priorities are shared, and results reach business teams sooner. The onshore data team has more room to focus on strategic work instead of a backlog of routine requests. Analysts in the GCC understand the business context behind the numbers, which raises the quality and relevance of the insights they produce. With a scalable model in place, the retailer can extend the center to new analytics use cases as its data needs grow.",

    stats: [
      { value: "40+", label: "Initial analytics professionals" },
      { value: "30%", label: "Faster time to insight" },
      { value: "1", label: "Integrated analytics operating model" },
    ],

    date: "2026-04-03",
  },

  {
    slug: "managed-transition-support-operations",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=900&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1800&auto=format&fit=crop",

    title:
      "Starfii Transitions Legacy Support Operations Into a Managed GCC",

    body:
      "Learn how Starfii's structured knowledge transfer plan moved a multinational's support operations into a new GCC without disrupting service levels during the handover.",

    client: "Multinational Enterprise",

    industry: "Enterprise Technology",

    services: [
      "Managed GCC Transition",
      "Knowledge Transfer",
      "GCC Operations",
    ],

    duration: "7 Months",

    overview:
      "A multinational organization wanted to transition selected legacy support operations into a newly established GCC while maintaining existing service levels.",

    challenge:
      "The transition involved complex processes, existing customer commitments, and multiple teams. Any disruption during knowledge transfer could have affected business operations. Much of the operational know-how lived with the people currently running support, and it was not always documented. The client had to protect service levels for its customers throughout the handover while a new team, in a new location, learned processes it had never run before.",

    solution:
      "Starfii created a phased knowledge transfer plan with defined ownership, onboarding milestones, shadowing periods, reverse shadowing, and exit criteria before operational handover. Each process was documented and assigned an owner on both sides, and the new team first observed live support work, then took it on while the existing team observed and corrected. Handover happened only when the agreed exit criteria were met for that process, so service levels stayed protected at every stage, and progress was tracked openly with the client's leadership throughout the program.",

    results:
      "Support operations transitioned into the GCC without disrupting service delivery, while the new team gained the knowledge and operating context required for ongoing support. There were no service disruption incidents during the seven month program, and every in scope process was covered by the transition plan. The GCC team now owns day to day support with documented processes, clear ownership, and a full understanding of the commitments behind them. Customers experienced continuity throughout the handover, and the client avoided the risk and cost of a rushed move. The structured approach also left the organization with a reusable transition model that it can apply when it moves further operations into the GCC. Support knowledge that once depended on a few individuals is now captured and shared across the team.",

    stats: [
      { value: "0", label: "Service disruption incidents" },
      { value: "100%", label: "Transition coverage" },
      { value: "7 mo", label: "Transition program" },
    ],

    date: "2026-05-27",
  },

  {
    slug: "healthcare-gcc-compliance-first",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=900&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1800&auto=format&fit=crop",

    title:
      "Starfii Stands Up a Compliance First GCC for a Healthcare Technology Firm",

    body:
      "Discover how Starfii built HIPAA aligned data residency and information security requirements into a healthcare GCC's operating model from the first day of setup.",

    client: "Healthcare Technology Firm",

    industry: "Healthcare",

    services: [
      "GCC Setup",
      "Compliance & Risk Management",
      "Information Security",
    ],

    duration: "9 Months",

    overview:
      "A healthcare technology company needed a GCC that could expand its engineering capabilities while maintaining strict compliance and security requirements.",

    challenge:
      "The GCC operating model had to account for healthcare data, information security, employee access, data residency, and compliance requirements from the beginning. Getting any of these wrong after launch would have been costly, and could have put sensitive data and the client's reputation at risk. The client needed a center that could grow its engineering capability quickly, but not at the expense of the security and privacy standards that healthcare customers expect.",

    solution:
      "Starfii embedded compliance and security requirements into entity setup, infrastructure, hiring, access controls, operating processes, and governance rather than treating compliance as a later phase. HIPAA aligned data residency and information security requirements were built into the operating model from the first day of setup. Access to systems and data was designed around roles, and policies, training, and controls were put in place before the first engineers began work, so the team could start contributing without compromising the client's compliance obligations.",

    results:
      "The GCC launched with compliance and security controls integrated into its operating model, providing the foundation required for future expansion. Compliance coverage is complete, with no critical compliance gaps, and the center reached operational readiness in nine months. Because these controls were built in from the beginning, the client did not have to pause or redesign the center as it grew. Engineers work within clear access rules and security practices that are part of everyday operations rather than an extra layer added later. The client's leadership, security, and compliance teams can review the center with confidence, and new teams and roles can be added within the same framework. The GCC now gives the company a trusted base for expanding its engineering work.",

    stats: [
      { value: "100%", label: "Compliance coverage" },
      { value: "9 mo", label: "Setup to operational readiness" },
      { value: "0", label: "Critical compliance gaps" },
    ],

    date: "2026-07-15",
  },

  {
    slug: "manufacturing-gcc-scale-up",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=900&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1800&auto=format&fit=crop",

    title:
      "Starfii Scales a Manufacturing Enterprise's GCC From 20 to 200",

    body:
      "See how Starfii's phased scale up plan grew a manufacturing enterprise's GCC from an initial cost focused footprint to a steady state engineering and analytics hub.",

    client: "Manufacturing Enterprise",

    industry: "Manufacturing",

    services: [
      "GCC Scale Up",
      "Talent Strategy",
      "Engineering & Analytics",
    ],

    duration: "18 Months",

    overview:
      "A manufacturing enterprise wanted to expand its GCC from an initial team into a strategic engineering and analytics hub supporting global operations.",

    challenge:
      "Rapid headcount growth created challenges around hiring quality, organizational structure, governance, knowledge transfer, and maintaining delivery standards as the center expanded. Growing from 20 people to a team ten times that size meant the informal ways of working that suit a small team would no longer hold. Without a plan, the client risked inconsistent hiring, unclear roles, and a loss of quality and knowledge as new people joined faster than they could be onboarded.",

    solution:
      "Starfii created a phased scale up roadmap covering headcount planning, role architecture, hiring, onboarding, governance, and capability development. Growth was planned in stages, so hiring volume never got ahead of the center's ability to onboard and guide new team members. Role architecture gave every function a clear structure and career path, and governance was updated at each stage to match the size of the center. The roadmap also moved the GCC's focus from its initial cost focused footprint toward higher value engineering and analytics work.",

    results:
      "The GCC grew from its initial 20 person footprint to a 200 person engineering and analytics hub with a structured operating model designed for continued growth. That is a 10x expansion delivered over an 18 month program, with hiring quality and delivery standards maintained at each stage. The center now supports global operations with both engineering and analytics capability, rather than serving only as a cost focused extension. Clear roles, consistent onboarding, and governance that scaled with headcount mean new team members become productive faster. Knowledge is shared across the team instead of resting with a few early hires. With this structure in place, the client can keep growing the GCC or add new capabilities without rebuilding how it operates.",

    stats: [
      { value: "20 → 200", label: "GCC team growth" },
      { value: "10x", label: "Headcount expansion" },
      { value: "18 mo", label: "Scale up program" },
    ],

    date: "2026-08-20",
  },
];

// Newest date first — this is what every page actually imports.
export const caseStudies: CaseStudyDetail[] = [...rawCaseStudies].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export function getCaseStudyBySlug(
  slug: string
): CaseStudyDetail | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
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
      "The client needed to move quickly from location evaluation and entity formation to hiring its first engineering cohort. The GCC also needed clear governance, compliance controls, and operating processes from the beginning.",

    solution:
      "Starfii supported the client across feasibility assessment, entity setup, talent acquisition, facilities, onboarding, governance design, and operational readiness. The engagement was structured around a phased launch so legal, infrastructure, hiring, and operating workstreams progressed in parallel.",

    results:
      "The GCC became operational in under five months with its initial engineering team onboarded, governance structures established, and compliance processes in place for continued scale.",

    stats: [
      {
        value: "5 mo",
        label: "Entity to operational GCC",
      },
      {
        value: "100%",
        label: "Initial compliance coverage",
      },
      {
        value: "1",
        label: "Integrated GCC operating model",
      },
    ],
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
      "The organization needed specialized analytics talent, a scalable operating model, and a dedicated center that could integrate effectively with existing global teams.",

    solution:
      "Starfii designed the talent model, defined key roles, supported hiring, established the operating environment, and created the collaboration model between the GCC and headquarters.",

    results:
      "The analytics GCC became a dedicated extension of the client's global data organization, increasing analytics capacity while improving collaboration between offshore and onshore teams.",

    stats: [
      {
        value: "40+",
        label: "Initial analytics professionals",
      },
      {
        value: "30%",
        label: "Faster time to insight",
      },
      {
        value: "1",
        label: "Integrated analytics operating model",
      },
    ],
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
      "The transition involved complex processes, existing customer commitments, and multiple teams. Any disruption during knowledge transfer could have affected business operations.",

    solution:
      "Starfii created a phased knowledge transfer plan with defined ownership, onboarding milestones, shadowing periods, reverse shadowing, and exit criteria before operational handover.",

    results:
      "Support operations transitioned into the GCC without disrupting service delivery, while the new team gained the knowledge and operating context required for ongoing support.",

    stats: [
      {
        value: "0",
        label: "Service disruption incidents",
      },
      {
        value: "100%",
        label: "Transition coverage",
      },
      {
        value: "7 mo",
        label: "Transition program",
      },
    ],
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
      "The GCC operating model had to account for healthcare data, information security, employee access, data residency, and compliance requirements from the beginning.",

    solution:
      "Starfii embedded compliance and security requirements into entity setup, infrastructure, hiring, access controls, operating processes, and governance rather than treating compliance as a later phase.",

    results:
      "The GCC launched with compliance and security controls integrated into its operating model, providing the foundation required for future expansion.",

    stats: [
      {
        value: "100%",
        label: "Compliance coverage",
      },
      {
        value: "9 mo",
        label: "Setup to operational readiness",
      },
      {
        value: "0",
        label: "Critical compliance gaps",
      },
    ],
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
      "Rapid headcount growth created challenges around hiring quality, organizational structure, governance, knowledge transfer, and maintaining delivery standards as the center expanded.",

    solution:
      "Starfii created a phased scale up roadmap covering headcount planning, role architecture, hiring, onboarding, governance, and capability development.",

    results:
      "The GCC grew from its initial 20 person footprint to a 200 person engineering and analytics hub with a structured operating model designed for continued growth.",

    stats: [
      {
        value: "20 → 200",
        label: "GCC team growth",
      },
      {
        value: "10x",
        label: "Headcount expansion",
      },
      {
        value: "18 mo",
        label: "Scale up program",
      },
    ],
  },
];

export function getCaseStudyBySlug(
  slug: string
): CaseStudyDetail | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
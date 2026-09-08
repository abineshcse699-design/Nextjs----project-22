export type BlogHighlight = {
  number: string;
  title: string;
  body: string;
};

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
  quote?: string;
};

export type BlogBenefit = {
  title: string;
  body: string;
};

export type BlogProcessStep = {
  number: string;
  title: string;
  body: string;
};

export type BlogService = "global-capability-centers";

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  service: BlogService;
  lastUpdated: string;
  readTime: string;
  heroImage: string;
  excerpt: string;

  author: {
    name: string;
    role: string;
    photo: string;
    bio: string;
  };

  intro: string[];

  highlights?: BlogHighlight[];

  sections: BlogSection[];

  benefits?: BlogBenefit[];

  process?: BlogProcessStep[];

  keyTakeaways?: string[];

  conclusion?: string;

  cta?: {
    title: string;
    body: string;
    buttonText: string;
    buttonHref: string;
  };
};

/* ============================================================
   AUTHOR
============================================================ */

const AUTHOR = {
  name: "Sanjay Salunkhe",
  role: "President and Global Head of Digital and Software Services",
  photo:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop",
  bio:
    "Sanjay Salunkhe is the President and Global Head of Digital and Software Services of our Company.",
};

/* ============================================================
   GLOBAL CAPABILITY CENTER BLOGS
============================================================ */

export const blogPosts: BlogPost[] = [
  /* ==========================================================
     BLOG 1
  ========================================================== */
  {
    slug: "global-capability-centers-build-buy-partner",
    title:
      "Global Capability Centers: Build, Buy, or Partner, Choosing the Right Model",
    category: "Global Capability Centers",
    service: "global-capability-centers",
    lastUpdated: "Sep 7, 2026",
    readTime: "7 min read",

    heroImage:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1600&auto=format&fit=crop",

    excerpt:
      "Explore the trade offs between building a GCC in house, acquiring an existing center, and partnering with a setup specialist, and how each path affects timeline, cost, and control.",

    author: AUTHOR,

    intro: [
      "Global Capability Centers have become an important operating model for enterprises looking to build long term technology, analytics, engineering, finance, customer support, and other strategic capabilities.",
      "The right GCC model depends on the organization's objectives, timeline, investment appetite, desired level of control, and ability to manage local operations.",
      "Enterprises generally evaluate three approaches: building a new center, acquiring an existing operation, or partnering with a specialist that can support the setup and transition.",
    ],

    highlights: [
      {
        number: "01",
        title: "Build",
        body:
          "Full control over structure, culture, and governance, at the cost of a longer, more complex setup.",
      },
      {
        number: "02",
        title: "Buy",
        body:
          "Faster access to a trained workforce and facilities, with integration risk to manage carefully.",
      },
      {
        number: "03",
        title: "Partner",
        body:
          "Coordinated entity setup, hiring, and compliance under one engagement to accelerate time to operational.",
      },
    ],

    sections: [
      {
        heading: "1. Build: Maximum Control",
        paragraphs: [
          "Building a GCC from the ground up gives an enterprise significant control over location, organization structure, technology environment, culture, hiring strategy, and governance.",
          "The trade off is that a greenfield setup requires more planning and coordination across legal, facilities, talent, HR, compliance, infrastructure, and operating model design.",
        ],
      },
      {
        heading: "2. Buy: Faster Access to Capability",
        paragraphs: [
          "Acquiring an existing center can provide faster access to an established workforce, facilities, processes, and local operating knowledge.",
          "However, enterprises need to carefully evaluate workforce alignment, technology compatibility, organizational culture, contractual obligations, and integration requirements.",
        ],
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Enterprise leadership evaluating a GCC acquisition",
      },
      {
        heading: "3. Partner: Accelerate Setup",
        paragraphs: [
          "A GCC setup partner can bring together entity formation, facilities, talent acquisition, compliance, payroll, governance, and transition support under one coordinated engagement.",
          "This model can reduce the operational burden on the enterprise while helping the organization move from feasibility to an operational center faster.",
        ],
        quote:
          "The right GCC model is the one that matches your timeline and appetite for direct control, not the one that looks best on a slide.",
      },
      {
        heading: "4. Choosing the Right Model",
        paragraphs: [
          "The best model depends on the required speed, level of control, investment strategy, available internal resources, and long term GCC mandate.",
          "Enterprises should evaluate the operating model before committing to a location or hiring plan so that the center is designed around measurable business outcomes.",
        ],
      },
    ],

    benefits: [
      {
        title: "Faster Time to Value",
        body:
          "A partner led or buy approach can shorten the path from decision to an operational, delivering center.",
      },
      {
        title: "Reduced Setup Risk",
        body:
          "Coordinated entity formation, compliance, and facilities planning reduce the chance of costly missteps.",
      },
      {
        title: "Retained Strategic Control",
        body:
          "A build approach keeps governance, culture, and technology decisions fully in the enterprise's hands.",
      },
      {
        title: "Clearer Investment Case",
        body:
          "Comparing models side by side gives leadership a clearer view of cost, timeline, and control trade offs.",
      },
      {
        title: "Better Workforce Fit",
        body:
          "Evaluating acquisition targets or partners against the GCC mandate improves long term talent alignment.",
      },
      {
        title: "Lower Integration Risk",
        body:
          "Structured due diligence on culture, technology, and contracts reduces friction after a buy decision.",
      },
    ],

    process: [
      {
        number: "01",
        title: "Define the Mandate",
        body:
          "Clarify the capabilities, functions, and business outcomes the GCC is expected to deliver.",
      },
      {
        number: "02",
        title: "Evaluate Models",
        body:
          "Compare build, buy, and partner approaches against timeline, cost, control, and risk tolerance.",
      },
      {
        number: "03",
        title: "Select and Structure",
        body:
          "Choose the model and structure the legal, financial, and operational plan around it.",
      },
      {
        number: "04",
        title: "Execute Setup",
        body:
          "Stand up the entity, facilities, technology, and initial workforce required to begin delivery.",
      },
      {
        number: "05",
        title: "Transition to Operations",
        body:
          "Move from setup activity into steady, measurable delivery aligned with headquarters.",
      },
    ],

    keyTakeaways: [
      "Build offers the most control but the longest setup timeline.",
      "Buying an existing center accelerates access to talent but raises integration risk.",
      "Partnering can compress setup timelines by coordinating entity, talent, and compliance work.",
      "The right model depends on speed, control, and internal resourcing, not a single best answer.",
      "Evaluating the operating model before hiring avoids designing a center around the wrong assumptions.",
    ],

    conclusion:
      "There is no universally correct way to stand up a Global Capability Center. Build, buy, and partner each solve for a different mix of speed, control, and risk. Enterprises that evaluate their mandate, timeline, and internal capacity honestly before choosing a model are far more likely to end up with a center that delivers what it was built for.",

    cta: {
      title: "Deciding How to Build Your GCC?",
      body:
        "Starfii can help you evaluate build, buy, and partner options against your timeline, budget, and control requirements.",
      buttonText: "Talk to Starfii",
      buttonHref: "/services/global-capability-centers#connect",
    },
  },

  /* ==========================================================
     BLOG 2
  ========================================================== */
  {
    slug: "gcc-talent-strategy-structuring-roles",
    title: "GCC Talent Strategy: Structuring Roles Before You Hire",
    category: "Global Capability Centers",
    service: "global-capability-centers",
    lastUpdated: "Sep 7, 2026",
    readTime: "6 min read",

    heroImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",

    excerpt:
      "See why role architecture has to come before sourcing, and how Starfii turns a vague headcount target into a hiring plan matched to what your GCC actually needs.",

    author: AUTHOR,

    intro: [
      "A successful GCC talent strategy starts before the first job description is created.",
      "Enterprises need to understand the capabilities the center is expected to deliver, the roles required to support those capabilities, and how those roles should evolve as the GCC scales.",
      "A structured talent strategy helps organizations build the right teams at the right time instead of simply increasing headcount.",
    ],

    highlights: [
      {
        number: "01",
        title: "Mandate First",
        body:
          "Define the capabilities the center must deliver before writing a single job description.",
      },
      {
        number: "02",
        title: "Role Architecture",
        body:
          "Map job families, seniority, and delivery responsibilities into a clear hiring framework.",
      },
      {
        number: "03",
        title: "Phased Hiring",
        body:
          "Build cohorts aligned to business priorities rather than one large, undifferentiated headcount push.",
      },
    ],

    sections: [
      {
        heading: "1. Start With the GCC Mandate",
        paragraphs: [
          "The GCC mandate defines the capabilities, services, and business outcomes expected from the center.",
          "Engineering, analytics, finance, customer support, cybersecurity, and other functions may require very different workforce structures.",
        ],
      },
      {
        heading: "2. Create Role Architecture",
        paragraphs: [
          "Role architecture establishes the relationship between capabilities, job families, seniority levels, leadership roles, and delivery responsibilities.",
          "This structure gives recruiting teams a clear framework instead of relying on disconnected hiring requests.",
        ],
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Team mapping role architecture for a GCC",
      },
      {
        heading: "3. Build the Hiring Roadmap",
        paragraphs: [
          "Once the role architecture is defined, the enterprise can create phased hiring plans based on business priorities and operational readiness.",
          "Hiring in cohorts can also make onboarding, knowledge transfer, and team formation more manageable.",
        ],
      },
      {
        heading: "4. Plan for Scale",
        paragraphs: [
          "A GCC talent strategy should anticipate future capabilities instead of focusing only on the first group of hires.",
          "This allows leadership development, succession planning, internal mobility, and specialist capability building to become part of the GCC operating model.",
        ],
        quote:
          "A headcount number is not a talent strategy. Role architecture is what turns a number into a team that can actually deliver.",
      },
    ],

    benefits: [
      {
        title: "Faster, Cleaner Sourcing",
        body:
          "Recruiters work against a defined framework instead of ad hoc requests, reducing time to fill.",
      },
      {
        title: "Consistent Career Paths",
        body:
          "Clear job families and seniority levels give employees a visible path for growth from day one.",
      },
      {
        title: "Better Cost Planning",
        body:
          "Phased cohorts let finance and leadership forecast workforce cost against delivery milestones.",
      },
      {
        title: "Smoother Onboarding",
        body:
          "Hiring in cohorts makes it easier to standardize onboarding and knowledge transfer.",
      },
      {
        title: "Stronger Succession Planning",
        body:
          "A role architecture designed for scale supports internal mobility and leadership development.",
      },
      {
        title: "Reduced Mis-Hires",
        body:
          "Roles mapped to the actual mandate reduce the risk of hiring for capabilities the center doesn't need.",
      },
    ],

    process: [
      {
        number: "01",
        title: "Clarify the Mandate",
        body:
          "Confirm the capabilities and outcomes the GCC needs to deliver before defining any role.",
      },
      {
        number: "02",
        title: "Map Job Families",
        body:
          "Define job families, seniority bands, and leadership roles tied to each capability area.",
      },
      {
        number: "03",
        title: "Sequence the Hiring Plan",
        body:
          "Group hires into cohorts aligned with operational readiness and business priorities.",
      },
      {
        number: "04",
        title: "Source and Onboard",
        body:
          "Recruit against the defined framework and onboard cohorts with a standardized process.",
      },
      {
        number: "05",
        title: "Review and Adjust",
        body:
          "Revisit the role architecture as the GCC's mandate and capabilities evolve.",
      },
    ],

    keyTakeaways: [
      "Role architecture should be defined before recruiting begins, not alongside it.",
      "Different GCC functions require meaningfully different workforce structures.",
      "Phased, cohort-based hiring improves onboarding and team formation.",
      "A talent strategy built for future capabilities avoids repeated redesign as the center scales.",
      "Clear job families support internal mobility and long term retention.",
    ],

    conclusion:
      "A GCC talent strategy is only as strong as the role architecture behind it. Enterprises that invest time in mapping capabilities to job families, seniority, and delivery responsibility before sourcing consistently build stronger, more scalable teams than those that start with a headcount number alone.",

    cta: {
      title: "Ready to Structure Your GCC Talent Plan?",
      body:
        "Starfii helps enterprises translate a GCC mandate into role architecture and a phased hiring roadmap.",
      buttonText: "Talk to Starfii",
      buttonHref: "/services/global-capability-centers#connect",
    },
  },

  /* ==========================================================
     BLOG 3
  ========================================================== */
  {
    slug: "gcc-governance-models-hq-alignment",
    title: "Governance Models That Keep a GCC Aligned With HQ",
    category: "Global Capability Centers",
    service: "global-capability-centers",
    lastUpdated: "Sep 7, 2026",
    readTime: "6 min read",

    heroImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",

    excerpt:
      "Stop letting decision rights stay ambiguous. See how a defined governance model prevents the early stalls that slow down new global capability centers.",

    author: AUTHOR,

    intro: [
      "Governance determines how a GCC works with headquarters, business units, technology leaders, and other stakeholders.",
      "Without clearly defined decision rights and reporting structures, even a well staffed GCC can experience delays and conflicting priorities.",
      "A strong governance model creates accountability while allowing the GCC to operate with the speed and flexibility expected from a strategic capability center.",
    ],

    highlights: [
      {
        number: "01",
        title: "Decision Rights",
        body:
          "Clarify what HQ owns and what GCC leadership can decide on its own.",
      },
      {
        number: "02",
        title: "Reporting Lines",
        body:
          "Establish reporting relationships across business, technology, finance, and HR.",
      },
      {
        number: "03",
        title: "Shared Metrics",
        body:
          "Use common KPIs so HQ and the GCC speak the same language about performance.",
      },
    ],

    sections: [
      {
        heading: "1. Define Decision Rights",
        paragraphs: [
          "Enterprises should define which decisions remain with headquarters and which decisions can be owned by GCC leadership.",
          "Clear decision rights reduce unnecessary escalation and help teams operate with greater accountability.",
        ],
      },
      {
        heading: "2. Create Reporting Structures",
        paragraphs: [
          "The GCC should have clear reporting relationships across business, technology, finance, HR, and operations where relevant.",
          "Regular reporting should focus on measurable outcomes rather than activity alone.",
        ],
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "GCC and headquarters leadership reviewing governance",
      },
      {
        heading: "3. Establish Performance Metrics",
        paragraphs: [
          "GCC governance should include KPIs covering delivery, quality, workforce, cost, capability development, and business impact.",
          "These metrics create a common language between the GCC and headquarters.",
        ],
        quote:
          "Governance is not about slowing the GCC down. It is about making sure speed doesn't come at the cost of alignment.",
      },
      {
        heading: "4. Review and Evolve",
        paragraphs: [
          "Governance should evolve as the center moves from setup to steady state.",
          "The structure required for a small initial center may be different from the structure required for a larger strategic capability hub.",
        ],
      },
    ],

    benefits: [
      {
        title: "Fewer Escalations",
        body:
          "Clear decision rights reduce the volume of issues that need to travel all the way back to HQ.",
      },
      {
        title: "Faster Local Decisions",
        body:
          "GCC leadership can act quickly on matters that fall within their defined authority.",
      },
      {
        title: "Stronger Accountability",
        body:
          "Well defined reporting lines make ownership of outcomes clear across the organization.",
      },
      {
        title: "Aligned Priorities",
        body:
          "Shared KPIs reduce the chance of the GCC and HQ optimizing for different goals.",
      },
      {
        title: "Easier Scaling",
        body:
          "A governance model that can evolve avoids repeated restructuring as the center grows.",
      },
      {
        title: "Better Risk Management",
        body:
          "Clear escalation paths help surface risks earlier, before they become larger issues.",
      },
    ],

    process: [
      {
        number: "01",
        title: "Map Stakeholders",
        body:
          "Identify every group at HQ and in the GCC that has a stake in governance decisions.",
      },
      {
        number: "02",
        title: "Define Decision Rights",
        body:
          "Document what GCC leadership can decide independently and what requires HQ sign off.",
      },
      {
        number: "03",
        title: "Set Reporting Cadence",
        body:
          "Establish regular reporting rhythms tied to measurable outcomes, not just activity updates.",
      },
      {
        number: "04",
        title: "Agree on KPIs",
        body:
          "Define shared performance metrics covering delivery, quality, cost, and workforce.",
      },
      {
        number: "05",
        title: "Review Periodically",
        body:
          "Revisit the governance model as the GCC matures from setup into steady state.",
      },
    ],

    keyTakeaways: [
      "Ambiguous decision rights are one of the most common causes of early GCC delays.",
      "Reporting structures should be tied to measurable outcomes rather than activity.",
      "Shared KPIs create a common language between the GCC and headquarters.",
      "Governance needs to evolve as the center grows from setup to steady state.",
      "Strong governance enables speed rather than restricting it.",
    ],

    conclusion:
      "Governance is often treated as an afterthought during GCC setup, but it is one of the strongest predictors of how quickly and smoothly a center will scale. Enterprises that define decision rights, reporting structures, and shared metrics early avoid the ambiguity that slows so many centers down in their first year.",

    cta: {
      title: "Need a Governance Model That Scales?",
      body:
        "Starfii helps enterprises design GCC governance frameworks that keep centers aligned with HQ as they grow.",
      buttonText: "Talk to Starfii",
      buttonHref: "/services/global-capability-centers#connect",
    },
  },

  /* ==========================================================
     BLOG 4
  ========================================================== */
  {
    slug: "gcc-operating-model-setup-to-steady-state",
    title: "GCC Operating Model: From Setup to Steady State",
    category: "Global Capability Centers",
    service: "global-capability-centers",
    lastUpdated: "Sep 7, 2026",
    readTime: "6 min read",

    heroImage:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop",

    excerpt:
      "See how a clear operating model connects governance, delivery, talent, and performance as a new global capability center moves into steady state.",

    author: AUTHOR,

    intro: [
      "A GCC operating model defines how the center works every day after the initial setup is complete.",
      "It connects people, processes, governance, technology, performance management, and business priorities into one operating system.",
      "A clearly defined model helps the GCC move from an initial setup project into a sustainable and measurable business capability.",
    ],

    highlights: [
      {
        number: "01",
        title: "Setup",
        body:
          "Establish the legal, facilities, technology, and governance foundation for the first teams.",
      },
      {
        number: "02",
        title: "Launch",
        body:
          "Onboard the initial workforce and begin working with headquarters and stakeholders.",
      },
      {
        number: "03",
        title: "Steady State",
        body:
          "Shift focus to capability expansion, productivity, and strategic business outcomes.",
      },
    ],

    sections: [
      {
        heading: "1. Phase One: Setup",
        paragraphs: [
          "The setup phase establishes the legal entity, facilities, technology environment, workforce plan, HR operations, and governance framework.",
          "The objective is to create the foundation required for the first delivery teams.",
        ],
      },
      {
        heading: "2. Phase Two: Launch",
        paragraphs: [
          "During launch, the initial workforce is onboarded and teams begin working with headquarters and business stakeholders.",
          "Knowledge transfer and operational readiness are critical during this phase.",
        ],
        image:
          "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "New GCC team launching operations",
      },
      {
        heading: "3. Phase Three: Stabilize",
        paragraphs: [
          "Once the initial teams are operational, leadership can focus on improving processes, measuring performance, and strengthening governance.",
          "The GCC begins moving from setup activity toward predictable delivery.",
        ],
      },
      {
        heading: "4. Phase Four: Steady State",
        paragraphs: [
          "At steady state, the GCC becomes an integrated part of the enterprise operating model.",
          "The focus shifts toward capability expansion, innovation, productivity, talent development, and strategic business outcomes.",
        ],
        quote:
          "Steady state is not the end of the GCC journey. It's the point where the center starts compounding value for the business.",
      },
    ],

    benefits: [
      {
        title: "Predictable Delivery",
        body:
          "A defined operating model turns early setup effort into consistent, repeatable delivery.",
      },
      {
        title: "Clear Phase Ownership",
        body:
          "Breaking the journey into phases makes it clear who owns what at each stage.",
      },
      {
        title: "Faster Time to Stability",
        body:
          "Structured launch and stabilize phases reduce the time spent in reactive firefighting.",
      },
      {
        title: "Stronger Knowledge Transfer",
        body:
          "A defined launch phase gives knowledge transfer the attention it needs before scaling.",
      },
      {
        title: "Better Long Term Planning",
        body:
          "Leadership can plan capability expansion once the center reaches steady state.",
      },
      {
        title: "Improved Stakeholder Confidence",
        body:
          "Visible progress through defined phases builds HQ confidence in the center's trajectory.",
      },
    ],

    process: [
      {
        number: "01",
        title: "Setup",
        body:
          "Stand up the legal entity, facilities, technology, and governance framework.",
      },
      {
        number: "02",
        title: "Launch",
        body:
          "Onboard the first cohort and begin operational delivery with HQ stakeholders.",
      },
      {
        number: "03",
        title: "Stabilize",
        body:
          "Refine processes, strengthen governance, and establish performance baselines.",
      },
      {
        number: "04",
        title: "Steady State",
        body:
          "Operate as an integrated part of the enterprise with predictable delivery.",
      },
      {
        number: "05",
        title: "Expand",
        body:
          "Grow capabilities, talent depth, and strategic scope based on proven performance.",
      },
    ],

    keyTakeaways: [
      "A GCC operating model connects people, process, governance, and technology into one system.",
      "Setup and launch require different priorities than stabilize and steady state.",
      "Knowledge transfer during launch is critical to long term delivery quality.",
      "Steady state is when the GCC shifts from proving itself to compounding value.",
      "Each phase needs its own success measures rather than one blanket set of metrics.",
    ],

    conclusion:
      "Moving a GCC from setup to steady state is a journey, not a single milestone. Enterprises that define what success looks like at each phase, setup, launch, stabilize, and steady state, are better positioned to build a center that becomes a genuine strategic asset rather than a permanent setup project.",

    cta: {
      title: "Plan Your GCC's Path to Steady State",
      body:
        "Starfii supports enterprises across every phase of the GCC journey, from setup through steady state operations.",
      buttonText: "Talk to Starfii",
      buttonHref: "/services/global-capability-centers#connect",
    },
  },

  /* ==========================================================
     BLOG 5
  ========================================================== */
  {
    slug: "scaling-gcc-talent-delivery-quality",
    title: "Scaling GCC Talent Without Losing Delivery Quality",
    category: "Global Capability Centers",
    service: "global-capability-centers",
    lastUpdated: "Sep 7, 2026",
    readTime: "5 min read",

    heroImage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop",

    excerpt:
      "Explore how phased hiring, structured onboarding, and capability planning help GCCs scale headcount while keeping delivery quality on track.",

    author: AUTHOR,

    intro: [
      "Scaling a GCC is not simply a matter of adding more employees.",
      "Rapid workforce growth can create onboarding gaps, inconsistent processes, management bottlenecks, and delivery quality issues unless the organization scales its operating model at the same time.",
      "A structured scaling approach helps organizations increase capacity while protecting quality, culture, governance, and business outcomes.",
    ],

    highlights: [
      {
        number: "01",
        title: "Phased Hiring",
        body:
          "Validate the operating model with each hiring wave instead of one large headcount push.",
      },
      {
        number: "02",
        title: "Standard Onboarding",
        body:
          "Give every new employee a consistent, repeatable path into the organization.",
      },
      {
        number: "03",
        title: "Capability Layers",
        body:
          "Balance junior, experienced, specialist, and leadership talent as the team grows.",
      },
    ],

    sections: [
      {
        heading: "1. Hire in Phases",
        paragraphs: [
          "Phased hiring allows leadership to validate the operating model before making large workforce commitments.",
          "Each hiring wave can be aligned to specific capabilities and delivery requirements.",
        ],
      },
      {
        heading: "2. Standardize Onboarding",
        paragraphs: [
          "A consistent onboarding framework helps new employees understand business context, technology standards, delivery expectations, security requirements, and governance.",
          "Standardized onboarding also makes it easier to scale teams without creating inconsistent employee experiences.",
        ],
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "New GCC employees going through onboarding",
      },
      {
        heading: "3. Build Capability Layers",
        paragraphs: [
          "A mature GCC needs a mix of junior, experienced, specialist, and leadership talent.",
          "Capability planning helps ensure that workforce growth does not create an organization with too few senior people to support the expanding team.",
        ],
      },
      {
        heading: "4. Measure Quality While Scaling",
        paragraphs: [
          "Delivery quality should remain visible throughout the scale up process.",
          "Enterprises can track productivity, quality, customer satisfaction, attrition, onboarding effectiveness, and delivery outcomes as the center grows.",
        ],
        quote:
          "Headcount growth is easy to measure. Delivery quality during that growth is what actually matters.",
      },
    ],

    benefits: [
      {
        title: "Controlled Growth Risk",
        body:
          "Phased hiring surfaces operating model gaps early, before they affect a large workforce.",
      },
      {
        title: "Consistent Employee Experience",
        body:
          "Standardized onboarding keeps quality high even as hiring volume increases.",
      },
      {
        title: "Balanced Seniority Mix",
        body:
          "Capability layering avoids overloading a small number of senior staff.",
      },
      {
        title: "Sustained Delivery Quality",
        body:
          "Continuous quality measurement keeps growth from quietly eroding output.",
      },
      {
        title: "Lower Attrition Risk",
        body:
          "Structured onboarding and clear capability paths improve early retention.",
      },
      {
        title: "Better Forecasting",
        body:
          "Phased cohorts give finance and operations more accurate growth projections.",
      },
    ],

    process: [
      {
        number: "01",
        title: "Plan Cohorts",
        body:
          "Group upcoming hires into phases tied to specific capabilities and delivery needs.",
      },
      {
        number: "02",
        title: "Standardize Onboarding",
        body:
          "Build a repeatable onboarding framework covering context, tools, and governance.",
      },
      {
        number: "03",
        title: "Layer Capability",
        body:
          "Balance seniority levels within each cohort to avoid overloading experienced staff.",
      },
      {
        number: "04",
        title: "Track Quality Metrics",
        body:
          "Monitor productivity, quality, and attrition throughout the scale up.",
      },
      {
        number: "05",
        title: "Adjust and Repeat",
        body:
          "Refine the approach for each subsequent hiring wave based on what the data shows.",
      },
    ],

    keyTakeaways: [
      "Scaling a GCC is an operating model challenge, not just a hiring challenge.",
      "Phased hiring lets leadership validate the model before committing to large headcount growth.",
      "Standardized onboarding keeps the employee experience consistent as the team grows.",
      "A balanced mix of seniority levels protects delivery quality during rapid growth.",
      "Quality metrics should be tracked continuously, not just reviewed after a scaling push.",
    ],

    conclusion:
      "Growing a GCC quickly is possible without sacrificing quality, but only if the organization scales its operating model alongside its headcount. Phased hiring, standardized onboarding, and deliberate capability planning give enterprises a way to grow with confidence rather than simply growing fast.",

    cta: {
      title: "Scaling Your GCC Team?",
      body:
        "Starfii helps enterprises grow GCC headcount in phases without losing sight of delivery quality.",
      buttonText: "Talk to Starfii",
      buttonHref: "/services/global-capability-centers#connect",
    },
  },
];

/* ============================================================
   GET SINGLE GLOBAL CAPABILITY CENTER BLOG
============================================================ */

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(
    (blog) => blog.slug === slug && blog.service === "global-capability-centers"
  );
}

/* ============================================================
   GET RELATED GLOBAL CAPABILITY CENTER BLOGS
============================================================ */

export function getRelatedBlogs(currentSlug: string, count = 3): BlogPost[] {
  const currentBlog = blogPosts.find(
    (blog) =>
      blog.slug === currentSlug && blog.service === "global-capability-centers"
  );

  if (!currentBlog) {
    return [];
  }

  return blogPosts
    .filter(
      (blog) =>
        blog.slug !== currentSlug && blog.service === "global-capability-centers"
    )
    .slice(0, count);
}
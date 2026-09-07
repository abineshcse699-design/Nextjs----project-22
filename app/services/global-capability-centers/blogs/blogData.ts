export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogService =
  | "digital-software"
  | "enterprise-automation"
  | "global-capability-centers";

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
  sections: BlogSection[];
};

/* ============================================================
   AUTHOR
============================================================ */

const AUTHOR = {
  name: "Sanjay Salunkhe",

  role:
    "President and Global Head of Digital and Software Services",

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
    slug:
      "global-capability-centers-build-buy-partner",

    title:
      "Global Capability Centers: Build, Buy, or Partner, Choosing the Right Model",

    category:
      "Global Capability Centers",

    service:
      "global-capability-centers",

    lastUpdated:
      "Sep 7, 2026",

    readTime:
      "7 min read",

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

    sections: [
      {
        heading:
          "1. Build: Maximum Control",

        paragraphs: [
          "Building a GCC from the ground up gives an enterprise significant control over location, organization structure, technology environment, culture, hiring strategy, and governance.",

          "The trade off is that a greenfield setup requires more planning and coordination across legal, facilities, talent, HR, compliance, infrastructure, and operating model design.",
        ],
      },

      {
        heading:
          "2. Buy: Faster Access to Capability",

        paragraphs: [
          "Acquiring an existing center can provide faster access to an established workforce, facilities, processes, and local operating knowledge.",

          "However, enterprises need to carefully evaluate workforce alignment, technology compatibility, organizational culture, contractual obligations, and integration requirements.",
        ],
      },

      {
        heading:
          "3. Partner: Accelerate Setup",

        paragraphs: [
          "A GCC setup partner can bring together entity formation, facilities, talent acquisition, compliance, payroll, governance, and transition support under one coordinated engagement.",

          "This model can reduce the operational burden on the enterprise while helping the organization move from feasibility to an operational center faster.",
        ],
      },

      {
        heading:
          "4. Choosing the Right Model",

        paragraphs: [
          "The best model depends on the required speed, level of control, investment strategy, available internal resources, and long term GCC mandate.",

          "Enterprises should evaluate the operating model before committing to a location or hiring plan so that the center is designed around measurable business outcomes.",
        ],
      },
    ],
  },

  /* ==========================================================
     BLOG 2
  ========================================================== */

  {
    slug:
      "gcc-talent-strategy-structuring-roles",

    title:
      "GCC Talent Strategy: Structuring Roles Before You Hire",

    category:
      "Global Capability Centers",

    service:
      "global-capability-centers",

    lastUpdated:
      "Sep 7, 2026",

    readTime:
      "6 min read",

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

    sections: [
      {
        heading:
          "1. Start With the GCC Mandate",

        paragraphs: [
          "The GCC mandate defines the capabilities, services, and business outcomes expected from the center.",

          "Engineering, analytics, finance, customer support, cybersecurity, and other functions may require very different workforce structures.",
        ],
      },

      {
        heading:
          "2. Create Role Architecture",

        paragraphs: [
          "Role architecture establishes the relationship between capabilities, job families, seniority levels, leadership roles, and delivery responsibilities.",

          "This structure gives recruiting teams a clear framework instead of relying on disconnected hiring requests.",
        ],
      },

      {
        heading:
          "3. Build the Hiring Roadmap",

        paragraphs: [
          "Once the role architecture is defined, the enterprise can create phased hiring plans based on business priorities and operational readiness.",

          "Hiring in cohorts can also make onboarding, knowledge transfer, and team formation more manageable.",
        ],
      },

      {
        heading:
          "4. Plan for Scale",

        paragraphs: [
          "A GCC talent strategy should anticipate future capabilities instead of focusing only on the first group of hires.",

          "This allows leadership development, succession planning, internal mobility, and specialist capability building to become part of the GCC operating model.",
        ],
      },
    ],
  },

  /* ==========================================================
     BLOG 3
  ========================================================== */

  {
    slug:
      "gcc-governance-models-hq-alignment",

    title:
      "Governance Models That Keep a GCC Aligned With HQ",

    category:
      "Global Capability Centers",

    service:
      "global-capability-centers",

    lastUpdated:
      "Sep 7, 2026",

    readTime:
      "6 min read",

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

    sections: [
      {
        heading:
          "1. Define Decision Rights",

        paragraphs: [
          "Enterprises should define which decisions remain with headquarters and which decisions can be owned by GCC leadership.",

          "Clear decision rights reduce unnecessary escalation and help teams operate with greater accountability.",
        ],
      },

      {
        heading:
          "2. Create Reporting Structures",

        paragraphs: [
          "The GCC should have clear reporting relationships across business, technology, finance, HR, and operations where relevant.",

          "Regular reporting should focus on measurable outcomes rather than activity alone.",
        ],
      },

      {
        heading:
          "3. Establish Performance Metrics",

        paragraphs: [
          "GCC governance should include KPIs covering delivery, quality, workforce, cost, capability development, and business impact.",

          "These metrics create a common language between the GCC and headquarters.",
        ],
      },

      {
        heading:
          "4. Review and Evolve",

        paragraphs: [
          "Governance should evolve as the center moves from setup to steady state.",

          "The structure required for a small initial center may be different from the structure required for a larger strategic capability hub.",
        ],
      },
    ],
  },

  /* ==========================================================
     BLOG 4
  ========================================================== */

  {
    slug:
      "gcc-operating-model-setup-to-steady-state",

    title:
      "GCC Operating Model: From Setup to Steady State",

    category:
      "Global Capability Centers",

    service:
      "global-capability-centers",

    lastUpdated:
      "Sep 7, 2026",

    readTime:
      "6 min read",

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

    sections: [
      {
        heading:
          "1. Phase One: Setup",

        paragraphs: [
          "The setup phase establishes the legal entity, facilities, technology environment, workforce plan, HR operations, and governance framework.",

          "The objective is to create the foundation required for the first delivery teams.",
        ],
      },

      {
        heading:
          "2. Phase Two: Launch",

        paragraphs: [
          "During launch, the initial workforce is onboarded and teams begin working with headquarters and business stakeholders.",

          "Knowledge transfer and operational readiness are critical during this phase.",
        ],
      },

      {
        heading:
          "3. Phase Three: Stabilize",

        paragraphs: [
          "Once the initial teams are operational, leadership can focus on improving processes, measuring performance, and strengthening governance.",

          "The GCC begins moving from setup activity toward predictable delivery.",
        ],
      },

      {
        heading:
          "4. Phase Four: Steady State",

        paragraphs: [
          "At steady state, the GCC becomes an integrated part of the enterprise operating model.",

          "The focus shifts toward capability expansion, innovation, productivity, talent development, and strategic business outcomes.",
        ],
      },
    ],
  },

  /* ==========================================================
     BLOG 5
  ========================================================== */

  {
    slug:
      "scaling-gcc-talent-delivery-quality",

    title:
      "Scaling GCC Talent Without Losing Delivery Quality",

    category:
      "Global Capability Centers",

    service:
      "global-capability-centers",

    lastUpdated:
      "Sep 7, 2026",

    readTime:
      "5 min read",

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

    sections: [
      {
        heading:
          "1. Hire in Phases",

        paragraphs: [
          "Phased hiring allows leadership to validate the operating model before making large workforce commitments.",

          "Each hiring wave can be aligned to specific capabilities and delivery requirements.",
        ],
      },

      {
        heading:
          "2. Standardize Onboarding",

        paragraphs: [
          "A consistent onboarding framework helps new employees understand business context, technology standards, delivery expectations, security requirements, and governance.",

          "Standardized onboarding also makes it easier to scale teams without creating inconsistent employee experiences.",
        ],
      },

      {
        heading:
          "3. Build Capability Layers",

        paragraphs: [
          "A mature GCC needs a mix of junior, experienced, specialist, and leadership talent.",

          "Capability planning helps ensure that workforce growth does not create an organization with too few senior people to support the expanding team.",
        ],
      },

      {
        heading:
          "4. Measure Quality While Scaling",

        paragraphs: [
          "Delivery quality should remain visible throughout the scale up process.",

          "Enterprises can track productivity, quality, customer satisfaction, attrition, onboarding effectiveness, and delivery outcomes as the center grows.",
        ],
      },
    ],
  },
];

/* ============================================================
   GET SINGLE GCC BLOG
============================================================ */

export function getBlogBySlug(
  slug: string
): BlogPost | undefined {
  return blogPosts.find(
    (blog) =>
      blog.slug === slug &&
      blog.service ===
        "global-capability-centers"
  );
}

/* ============================================================
   GET RELATED GCC BLOGS
============================================================ */

export function getRelatedBlogs(
  currentSlug: string,
  count = 3
): BlogPost[] {
  const currentBlog = blogPosts.find(
    (blog) =>
      blog.slug === currentSlug &&
      blog.service ===
        "global-capability-centers"
  );

  if (!currentBlog) {
    return [];
  }

  return blogPosts
    .filter(
      (blog) =>
        blog.slug !== currentSlug &&
        blog.service ===
          "global-capability-centers"
    )
    .slice(0, count);
}
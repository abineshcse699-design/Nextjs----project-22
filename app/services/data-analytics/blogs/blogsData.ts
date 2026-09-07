export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
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

const AUTHOR = {
  name: "Starfii Data & Analytics Team",
  role: "Data & Analytics Services",
  photo:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop",
  bio:
    "Starfii helps enterprises build governed data platforms, modern analytics environments, and AI-ready data foundations.",
};

export const blogPosts: BlogPost[] = [
  {
    slug: "generative-ai-enterprise-data-warehouses-to-answers",
    title: "Generative AI on Enterprise Data: From Warehouses to Answers",
    category: "Data & Analytics",
    lastUpdated: "2026",
    readTime: "6 min read",
    heroImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "See how Starfii connects LLMs to governed enterprise data so teams can get plain-language answers grounded in trusted information.",
    author: AUTHOR,
    intro: [
      "Generative AI becomes more useful when it is grounded in the data an enterprise already trusts. Starfii connects AI models with governed enterprise data so teams can move from static dashboards to natural-language answers.",
      "The goal is not to replace the data platform. It is to make the data platform easier to use while preserving governance, security, and business context.",
    ],
    sections: [
      {
        heading: "From Dashboards to Answers",
        paragraphs: [
          "Teams can ask business questions in plain language and retrieve answers grounded in approved enterprise data instead of manually searching across multiple reports and systems.",
        ],
      },
      {
        heading: "Grounding AI in Trusted Data",
        paragraphs: [
          "Governed data, access controls, lineage, and retrieval patterns help keep AI responses connected to the information the business actually relies on.",
        ],
      },
      {
        heading: "Business Impact",
        paragraphs: [
          "A well-designed enterprise AI data layer can shorten the path from question to insight and make analytics accessible to more teams.",
        ],
      },
    ],
  },
  {
    slug: "cloud-data-platforms-aws-azure-gcp",
    title: "Cloud Data Platforms: Choosing Between AWS, Azure, and GCP",
    category: "Data & Analytics",
    lastUpdated: "2026",
    readTime: "6 min read",
    heroImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Compare the factors that matter when selecting a cloud data platform, including cost, governance, scale, and near real-time access.",
    author: AUTHOR,
    intro: [
      "AWS, Azure, and GCP all provide powerful building blocks for modern data platforms. The right choice depends on an enterprise's existing technology landscape, governance requirements, workloads, and growth plans.",
    ],
    sections: [
      {
        heading: "Start With Business Requirements",
        paragraphs: [
          "Platform selection should begin with the workloads, data volumes, latency requirements, compliance needs, and operating model the business needs to support.",
        ],
      },
      {
        heading: "Cost and Governance",
        paragraphs: [
          "A sustainable cloud data platform balances performance with cost controls, security, access policies, and governance that can operate at enterprise scale.",
        ],
      },
      {
        heading: "Choosing the Right Fit",
        paragraphs: [
          "Starfii evaluates the existing data estate and business priorities before recommending an architecture across AWS, Azure, GCP, or a multi-cloud approach.",
        ],
      },
    ],
  },
  {
    slug: "data-governance-at-scale-trust-every-pipeline",
    title: "Data Governance at Scale: Building Trust Into Every Pipeline",
    category: "Data & Analytics",
    lastUpdated: "2026",
    readTime: "5 min read",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Explore how lineage, stewardship, and automated quality checks help keep enterprise data trustworthy as it moves across systems.",
    author: AUTHOR,
    intro: [
      "Data governance works best when it is part of the data lifecycle rather than a separate manual process. Enterprises need clear ownership, lineage, quality controls, and policies built into everyday data operations.",
    ],
    sections: [
      {
        heading: "Make Ownership Clear",
        paragraphs: [
          "Data stewardship gives teams clear responsibility for critical datasets, definitions, quality expectations, and access decisions.",
        ],
      },
      {
        heading: "Automate Quality Checks",
        paragraphs: [
          "Automated validation and monitoring can detect missing, duplicated, stale, or inconsistent data before it reaches downstream analytics.",
        ],
      },
      {
        heading: "Create End-to-End Trust",
        paragraphs: [
          "Combining governance with lineage and quality monitoring gives users more confidence in the information behind reports, models, and AI applications.",
        ],
      },
    ],
  },
  {
    slug: "mdm-in-practice-one-customer-record",
    title: "MDM in Practice: Getting Every Team to One Customer Record",
    category: "Data & Analytics",
    lastUpdated: "2026",
    readTime: "5 min read",
    heroImage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "A practical look at how master data management helps remove conflicting customer records across sales, support, and marketing systems.",
    author: AUTHOR,
    intro: [
      "Customer information often becomes fragmented as organizations add applications, channels, and acquisitions. Master data management helps create a consistent customer record that can be shared across teams.",
    ],
    sections: [
      {
        heading: "Why Customer Records Fragment",
        paragraphs: [
          "Different systems frequently store different versions of customer names, addresses, identifiers, and account relationships, creating confusion across business processes.",
        ],
      },
      {
        heading: "Build a Trusted Master Record",
        paragraphs: [
          "MDM combines matching, deduplication, survivorship, governance, and integration to create a reliable representation of critical customer data.",
        ],
      },
      {
        heading: "Business Impact",
        paragraphs: [
          "A consistent customer record improves reporting, personalization, service operations, and the quality of downstream analytics.",
        ],
      },
    ],
  },
  {
    slug: "legacy-warehouse-to-lakehouse-migration-playbook",
    title: "From Legacy Warehouse to Lakehouse: A Migration Playbook",
    category: "Data & Analytics",
    lastUpdated: "2026",
    readTime: "6 min read",
    heroImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Learn how a phased modernization approach can move reporting from aging warehouses to modern cloud data platforms without unnecessary disruption.",
    author: AUTHOR,
    intro: [
      "Legacy warehouses can become difficult to scale, expensive to maintain, and slow to adapt to new analytics requirements. A phased migration gives organizations a practical path to modernize while protecting critical reporting.",
    ],
    sections: [
      {
        heading: "Assess Before Migrating",
        paragraphs: [
          "A migration starts with understanding workloads, dependencies, data quality, reporting requirements, and the operational constraints of the current platform.",
        ],
      },
      {
        heading: "Migrate in Phases",
        paragraphs: [
          "Prioritizing workloads and moving them in controlled waves reduces disruption and creates opportunities to validate the target architecture along the way.",
        ],
      },
      {
        heading: "Modernize the Data Experience",
        paragraphs: [
          "The target platform should support scalable ingestion, governed analytics, automation, and future AI workloads rather than simply reproducing the old warehouse.",
        ],
      },
    ],
  },
  {
    slug: "bi-dashboards-designed-around-decisions",
    title: "BI That Gets Opened: Designing Dashboards Around Decisions",
    category: "Data & Analytics",
    lastUpdated: "2026",
    readTime: "5 min read",
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Why the best dashboards start with the decisions teams need to make, not simply the metrics that are easiest to compute.",
    author: AUTHOR,
    intro: [
      "A dashboard creates value when it helps someone make a better decision. Starfii designs BI experiences around business questions, user workflows, and the actions that follow from the information.",
    ],
    sections: [
      {
        heading: "Start With the Decision",
        paragraphs: [
          "Before choosing charts or metrics, identify what decision the user needs to make and what information is required to make it confidently.",
        ],
      },
      {
        heading: "Keep the Experience Focused",
        paragraphs: [
          "Well-designed dashboards prioritize the most important signals, provide useful context, and avoid overwhelming users with metrics that do not affect their next action.",
        ],
      },
      {
        heading: "Connect Insight to Action",
        paragraphs: [
          "BI becomes more valuable when insights are connected to operational workflows, allowing teams to move from understanding performance to taking action.",
        ],
      },
    ],
  },
];

export function getBlogBySlug(
  slug: string
): BlogPost | undefined {
  return blogPosts.find((blog) => blog.slug === slug);
}

export function getRelatedBlogs(
  currentSlug: string,
  count = 3
): BlogPost[] {
  return blogPosts
    .filter((blog) => blog.slug !== currentSlug)
    .slice(0, count);
}

/* ============================================================
   BLOG TYPES
============================================================ */

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

/* ============================================================
   AUTHOR
============================================================ */

const AUTHOR = {
  name: "Starfii Sustainability Team",

  role: "Sustainability and Digital Transformation",

  photo:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop",

  bio:
    "The Starfii Sustainability team explores how technology, data, automation, and intelligent workflows can help organizations build more measurable and sustainable operations.",
};

/* ============================================================
   SUSTAINABILITY SERVICES BLOGS
============================================================ */

export const blogPosts: BlogPost[] = [
  /* ==========================================================
     BLOG 1
  ========================================================== */

  {
    slug:
      "digital-sustainability-how-technology-supports-responsible-growth",

    title:
      "Digital Sustainability: How Technology Supports Responsible Growth",

    category:
      "Sustainability Services",

    lastUpdated:
      "Sep 7, 2026",

    readTime:
      "7 min read",

    heroImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop",

    excerpt:
      "Explore how digital technologies, data platforms, and intelligent workflows can help organizations measure sustainability performance and support responsible business growth.",

    author:
      AUTHOR,

    intro: [
      "Sustainability is increasingly becoming part of how organizations plan operations, manage resources, and measure long-term business performance.",

      "Digital technology can help make sustainability initiatives more measurable by connecting data, workflows, reporting, and operational decision-making.",

      "The goal is not simply to digitize sustainability reporting. It is to create connected systems that help organizations understand performance and take informed action.",
    ],

    sections: [
      {
        heading:
          "1. Moving From Isolated Reporting to Connected Sustainability Data",

        paragraphs: [
          "Sustainability information is often distributed across facilities, suppliers, finance systems, operational teams, and external reporting processes.",

          "This fragmentation can make it difficult to create a consistent picture of organizational performance.",

          "Connected digital platforms can bring relevant information together and provide teams with a stronger foundation for analysis and decision-making.",
        ],
      },

      {
        heading:
          "2. Improving Visibility Through Data",

        paragraphs: [
          "Organizations need reliable information to understand energy consumption, resource usage, operational efficiency, and sustainability progress.",

          "Digital data systems can help teams organize information from multiple sources into more consistent and accessible views.",

          "Improved visibility allows leaders to identify trends and areas where operational improvements may be possible.",
        ],
      },

      {
        heading:
          "3. Supporting Better Operational Decisions",

        paragraphs: [
          "Sustainability is closely connected to everyday operational decisions.",

          "Data and analytics can help teams evaluate processes and identify opportunities to reduce waste, improve efficiency, and optimize resource use.",

          "Technology can support decision-making by making relevant information available when teams need it.",
        ],
      },

      {
        heading:
          "4. Automation and Sustainable Operations",

        paragraphs: [
          "Manual processes can create delays, duplicated effort, and inconsistent reporting.",

          "Workflow automation can help organizations standardize repetitive sustainability-related activities and reduce unnecessary administrative effort.",

          "Automation can also support more consistent data collection and operational monitoring.",
        ],
      },

      {
        heading:
          "5. Building Sustainability Into Digital Transformation",

        paragraphs: [
          "Digital transformation initiatives can provide an opportunity to include sustainability considerations in business and technology decisions.",

          "Organizations can evaluate how systems, processes, and workflows affect efficiency and resource consumption.",

          "This approach helps sustainability become part of long-term operational transformation rather than an isolated reporting activity.",
        ],
      },
    ],
  },

  /* ==========================================================
     BLOG 2
  ========================================================== */

  {
    slug:
      "data-driven-sustainability-building-better-environmental-visibility",

    title:
      "Data-Driven Sustainability: Building Better Environmental Visibility",

    category:
      "Sustainability Services",

    lastUpdated:
      "Sep 7, 2026",

    readTime:
      "6 min read",

    heroImage:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1600&auto=format&fit=crop",

    excerpt:
      "Discover how connected data, analytics, and reporting systems can help organizations build stronger visibility into environmental and operational performance.",

    author:
      AUTHOR,

    intro: [
      "Organizations generate large amounts of operational information, but sustainability-related data is not always easy to access or interpret.",

      "A data-driven approach can help teams move beyond fragmented spreadsheets toward more connected and structured sustainability intelligence.",

      "Better visibility can help organizations understand where resources are being used and where improvements may create meaningful impact.",
    ],

    sections: [
      {
        heading:
          "1. Why Sustainability Data Is Often Fragmented",

        paragraphs: [
          "Information may be stored across facilities, suppliers, operational systems, and reporting teams.",

          "Different formats and reporting processes can make comparison and consolidation difficult.",

          "A connected data strategy can help reduce fragmentation and improve consistency.",
        ],
      },

      {
        heading:
          "2. Creating a Reliable Data Foundation",

        paragraphs: [
          "Reliable analysis begins with clearly defined data sources and governance processes.",

          "Organizations need to understand where important information originates and how it is validated.",

          "A strong data foundation improves confidence in reporting and analysis.",
        ],
      },

      {
        heading:
          "3. Using Analytics to Identify Trends",

        paragraphs: [
          "Analytics can help teams identify patterns that may not be obvious when information is reviewed manually.",

          "Historical and operational data can reveal changes in consumption, efficiency, and process performance.",

          "These insights can support more targeted improvement initiatives.",
        ],
      },

      {
        heading:
          "4. Making Information Accessible",

        paragraphs: [
          "Sustainability insights are most useful when relevant stakeholders can access understandable information.",

          "Dashboards and structured reporting can make complex data easier to review.",

          "Accessibility helps sustainability become part of broader business decision-making.",
        ],
      },

      {
        heading:
          "5. From Visibility to Action",

        paragraphs: [
          "Data alone does not create sustainability outcomes.",

          "Organizations need processes that connect insights with decisions and operational action.",

          "The greatest value comes from using information to support continuous improvement.",
        ],
      },
    ],
  },

  /* ==========================================================
     BLOG 3
  ========================================================== */

  {
    slug:
      "sustainable-operations-using-automation-to-improve-efficiency",

    title:
      "Sustainable Operations: Using Automation to Improve Efficiency",

    category:
      "Sustainability Services",

    lastUpdated:
      "Sep 7, 2026",

    readTime:
      "6 min read",

    heroImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",

    excerpt:
      "Learn how workflow automation and intelligent process design can help organizations reduce repetitive effort and improve operational efficiency.",

    author:
      AUTHOR,

    intro: [
      "Operational efficiency and sustainability are often closely connected.",

      "Processes that require excessive manual effort, repeated data entry, or disconnected handoffs can increase both operational complexity and resource consumption.",

      "Automation can help organizations simplify workflows and create more efficient ways of working.",
    ],

    sections: [
      {
        heading:
          "1. Identifying Inefficient Workflows",

        paragraphs: [
          "Organizations often have processes that evolved over time without being redesigned for current needs.",

          "Manual handoffs and duplicated tasks can create delays and inconsistencies.",

          "Process analysis can help identify areas where automation may improve efficiency.",
        ],
      },

      {
        heading:
          "2. Automating Repetitive Activities",

        paragraphs: [
          "Many operational activities involve predictable and repeatable steps.",

          "Automation can reduce the amount of manual effort required for these activities.",

          "This allows employees to spend more time on higher-value work and decision-making.",
        ],
      },

      {
        heading:
          "3. Improving Process Consistency",

        paragraphs: [
          "Standardized workflows can reduce unnecessary variation in how activities are performed.",

          "Automation can help ensure that defined processes are followed consistently.",

          "Consistent execution can improve both efficiency and operational visibility.",
        ],
      },

      {
        heading:
          "4. Connecting Automation With Data",

        paragraphs: [
          "Automation becomes more valuable when it works with relevant operational data.",

          "Connected systems can trigger actions based on defined conditions and business events.",

          "This can reduce delays between identifying an issue and taking action.",
        ],
      },

      {
        heading:
          "5. Continuous Improvement",

        paragraphs: [
          "Automation should not be treated as a one-time implementation.",

          "Organizations can monitor workflow performance and refine processes over time.",

          "Continuous improvement helps automation continue delivering value as business requirements change.",
        ],
      },
    ],
  },

  /* ==========================================================
     BLOG 4
  ========================================================== */

  {
    slug:
      "enterprise-sustainability-strategy-connecting-goals-data-and-action",

    title:
      "Enterprise Sustainability Strategy: Connecting Goals, Data, and Action",

    category:
      "Sustainability Services",

    lastUpdated:
      "Sep 7, 2026",

    readTime:
      "7 min read",

    heroImage:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?q=80&w=1600&auto=format&fit=crop",

    excerpt:
      "Explore how enterprises can connect sustainability goals with measurable data, operational accountability, and technology-enabled action.",

    author:
      AUTHOR,

    intro: [
      "Sustainability strategies are most effective when long-term goals are connected to measurable operational activities.",

      "Organizations need visibility into progress as well as mechanisms for turning insights into action.",

      "Technology can help connect strategy, data, reporting, and execution across different business functions.",
    ],

    sections: [
      {
        heading:
          "1. Defining Clear Sustainability Objectives",

        paragraphs: [
          "Organizations need clearly defined objectives that can guide planning and operational decisions.",

          "Clear objectives help teams understand priorities and establish measurable outcomes.",

          "They also provide a foundation for reporting progress over time.",
        ],
      },

      {
        heading:
          "2. Connecting Strategy With Operational Data",

        paragraphs: [
          "Strategic goals need supporting data to measure progress.",

          "Relevant operational information can help organizations understand current performance.",

          "Connected data systems improve the ability to compare goals with actual outcomes.",
        ],
      },

      {
        heading:
          "3. Creating Accountability",

        paragraphs: [
          "Sustainability initiatives often involve multiple teams and business functions.",

          "Clearly defined responsibilities can help ensure that important actions are owned and tracked.",

          "Digital workflows can support visibility into progress and responsibilities.",
        ],
      },

      {
        heading:
          "4. Supporting Decisions With Insights",

        paragraphs: [
          "Leadership teams need relevant information when evaluating priorities and investments.",

          "Analytics and reporting can provide structured insight into performance trends.",

          "This supports more informed decisions across the organization.",
        ],
      },

      {
        heading:
          "5. Measuring Continuous Progress",

        paragraphs: [
          "Sustainability is an ongoing process rather than a single project.",

          "Organizations can continuously monitor outcomes and identify areas for improvement.",

          "Technology helps create repeatable measurement and improvement processes.",
        ],
      },
    ],
  },

  /* ==========================================================
     BLOG 5
  ========================================================== */

  {
    slug:
      "technology-and-sustainability-building-resilient-future-ready-businesses",

    title:
      "Technology and Sustainability: Building Resilient, Future-Ready Businesses",

    category:
      "Sustainability Services",

    lastUpdated:
      "Sep 7, 2026",

    readTime:
      "6 min read",

    heroImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",

    excerpt:
      "See how organizations can combine digital transformation, efficient operations, and sustainability initiatives to build more resilient business models.",

    author:
      AUTHOR,

    intro: [
      "Business resilience increasingly depends on an organization's ability to adapt to changing operational, environmental, and market conditions.",

      "Technology can help organizations build stronger visibility, improve efficiency, and respond more effectively to change.",

      "Combining digital transformation with sustainability thinking can support long-term resilience and responsible growth.",
    ],

    sections: [
      {
        heading:
          "1. Building Resilient Operations",

        paragraphs: [
          "Resilient organizations need visibility into important operational processes.",

          "Connected technology can help teams identify changes and respond more quickly.",

          "This improves the ability to manage complexity and uncertainty.",
        ],
      },

      {
        heading:
          "2. Improving Resource Efficiency",

        paragraphs: [
          "Efficient use of resources can support both operational and sustainability objectives.",

          "Digital monitoring and analytics can help identify opportunities for improvement.",

          "Better visibility supports more informed resource management.",
        ],
      },

      {
        heading:
          "3. Using Technology for Adaptability",

        paragraphs: [
          "Business requirements can change quickly.",

          "Flexible digital platforms can help organizations adapt workflows and processes.",

          "Adaptability is an important component of long-term resilience.",
        ],
      },

      {
        heading:
          "4. Connecting Business and Sustainability Priorities",

        paragraphs: [
          "Sustainability initiatives can be more effective when connected with broader business strategy.",

          "Technology can help make sustainability information visible across different decision-making processes.",

          "This supports more integrated planning.",
        ],
      },

      {
        heading:
          "5. Creating a Future-Ready Foundation",

        paragraphs: [
          "Future-ready organizations need systems that can evolve with changing requirements.",

          "Digital capabilities can provide a foundation for continuous innovation and improvement.",

          "Combining technology, operational efficiency, and sustainability can support stronger long-term outcomes.",
        ],
      },
    ],
  },
];

/* ============================================================
   GET SINGLE BLOG
============================================================ */

export function getBlogBySlug(
  slug: string
): BlogPost | undefined {
  return blogPosts.find(
    (blog) =>
      blog.slug === slug
  );
}

/* ============================================================
   GET RELATED BLOGS
============================================================ */

export function getRelatedBlogs(
  currentSlug: string,
  count = 3
): BlogPost[] {
  return blogPosts
    .filter(
      (blog) =>
        blog.slug !== currentSlug
    )
    .slice(0, count);
}
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
  name: "Starfii",
  role: "Digital IT Operations",
  photo:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop",
  bio:
    "Starfii helps enterprises improve cloud, DevOps, cybersecurity, data, and IT operations through modern engineering and automation.",
};

export const blogPosts: BlogPost[] = [
  {
    slug: "cloud-cost-optimization-multi-cloud-spend",
    title:
      "Cloud Cost Optimization: Cutting Multi-Cloud Spend Without Losing Performance",
    category: "Digital IT Operations",
    lastUpdated: "Sep 6, 2026",
    readTime: "6 min read",
    heroImage:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Explore how cloud cost optimization across AWS, Azure, and GCP can reduce unnecessary spend while protecting performance and reliability.",
    author: AUTHOR,
    intro: [
      "Cloud environments can become expensive as workloads grow, teams adopt multiple platforms, and infrastructure changes faster than governance processes.",
      "A practical cloud cost optimization approach combines visibility, right sizing, automation, and continuous review so enterprises can control spend without sacrificing the performance their applications depend on.",
    ],
    sections: [
      {
        heading: "Start With Multi Cloud Visibility",
        paragraphs: [
          "The first step is understanding where cloud spend is going across AWS, Azure, and GCP. A consistent operations model makes it easier to identify unused resources, inefficient workloads, and unexpected cost growth.",
        ],
      },
      {
        heading: "Right Size and Automate",
        paragraphs: [
          "Right sizing infrastructure and automating repeatable cost controls can reduce waste while keeping production capacity aligned with actual demand.",
        ],
      },
      {
        heading: "Protect Reliability While Reducing Spend",
        paragraphs: [
          "Cost optimization should not be treated as a simple cost cutting exercise. Performance, availability, security, and business critical workloads must remain part of every optimization decision.",
        ],
      },
    ],
  },
  {
    slug: "devops-automation-ci-cd-release-time",
    title: "DevOps Automation: How CI/CD Pipelines Cut Release Time by 60%",
    category: "Digital IT Operations",
    lastUpdated: "Sep 6, 2026",
    readTime: "6 min read",
    heroImage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "See how CI/CD and test automation can shorten release cycles while helping teams maintain production stability.",
    author: AUTHOR,
    intro: [
      "Frequent software releases can create operational risk when deployment, testing, and validation remain heavily manual.",
      "DevOps automation connects the delivery pipeline so teams can move faster while maintaining repeatable quality and production reliability.",
    ],
    sections: [
      {
        heading: "Automate the Delivery Pipeline",
        paragraphs: [
          "CI/CD automation reduces repetitive deployment steps and creates a consistent path from code changes to production releases.",
        ],
      },
      {
        heading: "Build Testing Into Every Release",
        paragraphs: [
          "Automated testing gives teams faster feedback and helps identify defects before they reach production.",
        ],
      },
      {
        heading: "Balance Speed With Stability",
        paragraphs: [
          "The goal is not simply to release faster. A mature DevOps operating model combines automation, testing, monitoring, and operational discipline so faster releases remain reliable.",
        ],
      },
    ],
  },
  {
    slug: "cybersecurity-operations-framework",
    title:
      "Cybersecurity Operations: Building a Framework That Scales With You",
    category: "Digital IT Operations",
    lastUpdated: "Sep 6, 2026",
    readTime: "6 min read",
    heroImage:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Learn how continuous security monitoring and a resilient cybersecurity framework can become part of everyday IT operations.",
    author: AUTHOR,
    intro: [
      "Cybersecurity cannot be treated as an isolated activity that happens only after a threat appears.",
      "A scalable security operations approach brings monitoring, risk management, compliance, and operational controls into the everyday technology environment.",
    ],
    sections: [
      {
        heading: "Make Security Continuous",
        paragraphs: [
          "Continuous monitoring helps teams identify suspicious activity and operational weaknesses earlier instead of waiting for an incident to expose them.",
        ],
      },
      {
        heading: "Connect Security With IT Operations",
        paragraphs: [
          "Security controls work best when they are integrated with infrastructure, applications, data, and release processes rather than managed separately.",
        ],
      },
      {
        heading: "Scale the Framework as the Business Grows",
        paragraphs: [
          "A resilient cybersecurity framework should evolve as cloud environments, applications, data volumes, and compliance requirements change.",
        ],
      },
    ],
  },
  {
    slug: "cloud-infrastructure-operations-reliability",
    title:
      "Cloud Infrastructure Operations: Keeping Enterprise Systems Reliable",
    category: "Digital IT Operations",
    lastUpdated: "Sep 6, 2026",
    readTime: "5 min read",
    heroImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Explore how modern cloud infrastructure operations across AWS, Azure, and GCP improve reliability, visibility, and cost efficiency.",
    author: AUTHOR,
    intro: [
      "Enterprise workloads need cloud infrastructure that remains visible, scalable, secure, and reliable as demand changes.",
      "Cloud operations brings architecture, migration, monitoring, maintenance, and cost optimization together under a consistent operating model.",
    ],
    sections: [
      {
        heading: "Operate Across Cloud Platforms",
        paragraphs: [
          "A common operations model can simplify management when workloads span AWS, Azure, and GCP.",
        ],
      },
      {
        heading: "Monitor Before Problems Escalate",
        paragraphs: [
          "Proactive monitoring provides earlier visibility into infrastructure and application issues, helping teams respond before small problems become major disruptions.",
        ],
      },
      {
        heading: "Keep Operations Ready for Growth",
        paragraphs: [
          "Reliable cloud operations must support both today's workload and tomorrow's scale through automation, optimization, and disciplined operational practices.",
        ],
      },
    ],
  },
  {
    slug: "it-operations-automation-reducing-manual-work",
    title: "IT Operations Automation: Reducing Manual Work at Scale",
    category: "Digital IT Operations",
    lastUpdated: "Sep 6, 2026",
    readTime: "5 min read",
    heroImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "See how automation across monitoring, DevOps, and repetitive IT workflows helps teams respond faster and keep day to day operations stable.",
    author: AUTHOR,
    intro: [
      "Manual operational work consumes valuable engineering time and can introduce inconsistency into repetitive processes.",
      "IT operations automation helps teams standardize repeatable activities so people can focus on incidents, improvements, and higher value engineering work.",
    ],
    sections: [
      {
        heading: "Automate Repetitive Workflows",
        paragraphs: [
          "Monitoring actions, deployment steps, routine maintenance, and other repeatable activities can be candidates for automation when they follow predictable patterns.",
        ],
      },
      {
        heading: "Improve Response Speed",
        paragraphs: [
          "Automated workflows can help teams detect and respond to operational events faster while reducing the amount of manual intervention required.",
        ],
      },
      {
        heading: "Create More Consistent Operations",
        paragraphs: [
          "Standardized automation makes day to day operations more repeatable and gives engineering teams more time to improve reliability and efficiency.",
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

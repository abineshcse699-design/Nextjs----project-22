export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  service: string;
  category: string;
  title: string;
  excerpt: string;
  body: string;
  heroImage: string;
  publishedAt: string;
  readTime: string;
  author: string;
  sections: BlogSection[];
};

export const QUALITY_ENGINEERING_SERVICE = "Quality-Engineering";

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-automation-quality-engineering",
    service: QUALITY_ENGINEERING_SERVICE,
    category: "Quality Engineering",
    title:
      "AI Automation in Quality Engineering: Faster and Smarter Software Testing",
    excerpt:
      "Explore how AI automation can modernize quality engineering, increase test coverage, reduce repetitive testing, and support faster enterprise software releases.",
    body:
      "AI assisted testing is changing how enterprise quality teams design, execute, and maintain software tests. The strongest approach is not to replace engineering judgment, but to use AI to remove repetitive work and help teams focus on the risks that matter most.",
    heroImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1800&auto=format&fit=crop",
    publishedAt: "September 10, 2026",
    readTime: "7 min read",
    author: "Starfii Engineering",
    sections: [
      {
        heading: "Why AI automation matters for quality engineering",
        paragraphs: [
          "Enterprise applications change continuously. New features, integrations, APIs, and releases increase the amount of regression coverage that teams need to maintain.",
          "AI can help quality engineering teams analyze requirements, identify likely risk areas, generate test ideas, and reduce repetitive maintenance. This creates faster feedback without removing human validation from the process.",
        ],
        bullets: [
          "Generate test scenarios from requirements and user journeys.",
          "Prioritize regression tests around changed functionality.",
          "Identify flaky or redundant tests.",
          "Improve test coverage across APIs, web applications, and mobile experiences.",
        ],
      },
      {
        heading: "Building an AI assisted testing workflow",
        paragraphs: [
          "A practical implementation starts with the existing delivery lifecycle. Requirements flow into test design, automation runs inside CI/CD, results are analyzed, and quality signals are fed back to engineering teams.",
          "The goal is a repeatable quality loop rather than a standalone AI experiment. Teams should measure whether the approach improves feedback speed, coverage, defect detection, and maintenance effort.",
        ],
      },
      {
        heading: "Where human expertise still matters",
        paragraphs: [
          "AI generated tests still need engineering review. Domain rules, business critical workflows, security expectations, accessibility, and unusual customer behavior require experienced testers and engineers.",
          "The best results come from combining AI assistance with clear quality ownership, reliable test data, observable environments, and well designed automation frameworks.",
        ],
      },
      {
        heading: "A practical starting point",
        paragraphs: [
          "Start with one high value regression area. Measure its current execution time, failure rate, coverage, and maintenance cost. Then introduce AI assisted test generation or prioritization and compare the results over several release cycles.",
        ],
      },
    ],
  },

  {
    slug: "enterprise-devops-reliability",
    service: QUALITY_ENGINEERING_SERVICE,
    category: "Quality Engineering",
    title:
      "Enterprise DevOps and Reliability for Always On Digital Platforms",
    excerpt:
      "Learn how automation, observability, SRE, and quality engineering create safer releases and more reliable enterprise technology operations.",
    body:
      "Reliable enterprise software requires more than successful deployments. Quality engineering, DevOps automation, observability, and reliability practices must work together so teams can detect risk early and recover quickly.",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1800&auto=format&fit=crop",
    publishedAt: "September 5, 2026",
    readTime: "6 min read",
    author: "Starfii Engineering",
    sections: [
      {
        heading: "Reliability starts before production",
        paragraphs: [
          "Production reliability is influenced by design decisions, test coverage, deployment controls, infrastructure configuration, and operational readiness.",
          "Quality engineering brings reliability checks earlier into the delivery lifecycle so defects and risky changes are discovered before they affect customers.",
        ],
        bullets: [
          "Automated regression and integration testing.",
          "Performance validation before major launches.",
          "Security checks within delivery pipelines.",
          "Release quality gates and deployment verification.",
        ],
      },
      {
        heading: "Observability closes the feedback loop",
        paragraphs: [
          "Logs, metrics, traces, and business signals help teams understand how a release behaves in real environments. When combined with automated testing, observability provides a stronger view of quality than either practice can provide alone.",
        ],
      },
      {
        heading: "Making reliability measurable",
        paragraphs: [
          "Teams should connect engineering signals to outcomes such as failed deployments, escaped defects, recovery time, availability, and release frequency. These measurements help organizations improve reliability without slowing delivery unnecessarily.",
        ],
      },
    ],
  },

  {
    slug: "enterprise-integration-api-strategy",
    service: QUALITY_ENGINEERING_SERVICE,
    category: "Quality Engineering",
    title:
      "Enterprise Integration and API Strategy for Connected Systems",
    excerpt:
      "See how APIs and modern integration patterns help enterprises connect applications, data, partners, and workflows without creating new technology silos.",
    body:
      "APIs are the connective tissue of modern enterprise platforms. Strong API quality practices protect contracts, integrations, data flows, and downstream applications as systems evolve.",
    heroImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1800&auto=format&fit=crop",
    publishedAt: "August 28, 2026",
    readTime: "6 min read",
    author: "Starfii Engineering",
    sections: [
      {
        heading: "Why API quality is critical",
        paragraphs: [
          "A single API change can affect web applications, mobile clients, internal services, partners, and reporting systems. Contract validation helps detect incompatible changes before they become production incidents.",
          "API testing should validate successful flows as well as authentication, authorization, validation, error handling, rate limits, and edge cases.",
        ],
      },
      {
        heading: "A modern API testing strategy",
        paragraphs: [
          "A layered strategy combines contract tests, functional tests, integration tests, performance tests, and security validation. Each layer should provide focused feedback and run at the appropriate stage of the delivery pipeline.",
        ],
        bullets: [
          "Validate request and response contracts.",
          "Test positive and negative scenarios.",
          "Verify authentication and authorization behavior.",
          "Test downstream integrations and failure conditions.",
          "Measure performance for critical API paths.",
        ],
      },
      {
        heading: "Keeping integrations maintainable",
        paragraphs: [
          "Good API governance should make change safer rather than preventing change. Versioning, documentation, ownership, automated validation, and clear compatibility rules help teams evolve connected systems with confidence.",
        ],
      },
    ],
  },

  {
    slug: "enterprise-ai-platforms",
    service: QUALITY_ENGINEERING_SERVICE,
    category: "Quality Engineering",
    title:
      "Enterprise AI Platforms: Moving From Experiments to Business Value",
    excerpt:
      "Discover how organizations can operationalize Generative AI and LLM capabilities with the platform, data, security, and governance needed for enterprise scale.",
    body:
      "Moving an AI proof of concept into an enterprise product introduces new quality dimensions. Organizations need reliable evaluation, secure data handling, predictable application behavior, and continuous monitoring.",
    heroImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1800&auto=format&fit=crop",
    publishedAt: "August 20, 2026",
    readTime: "8 min read",
    author: "Starfii Engineering",
    sections: [
      {
        heading: "AI applications need a different quality model",
        paragraphs: [
          "Traditional software often expects deterministic outputs. AI systems can produce variable responses, which means quality engineering must evaluate relevance, safety, consistency, latency, and business usefulness.",
          "Evaluation datasets and repeatable test suites make these behaviors measurable across model and prompt changes.",
        ],
      },
      {
        heading: "Testing the complete AI application",
        paragraphs: [
          "Testing should cover more than the model. Retrieval, prompts, orchestration, APIs, permissions, user interfaces, observability, and failure handling all contribute to the final user experience.",
        ],
        bullets: [
          "Prompt and response evaluation.",
          "Retrieval and grounding checks.",
          "Security and authorization testing.",
          "Latency and load testing.",
          "Regression evaluation across model changes.",
        ],
      },
      {
        heading: "Governance and continuous evaluation",
        paragraphs: [
          "Enterprise AI quality improves when evaluation becomes part of CI/CD. Every important change can be measured against a controlled evaluation set before it reaches production.",
        ],
      },
    ],
  },

  {
    slug: "enterprise-cloud-modernization",
    service: QUALITY_ENGINEERING_SERVICE,
    category: "Quality Engineering",
    title:
      "Enterprise Cloud Modernization: From Legacy Complexity to Scalable Platforms",
    excerpt:
      "Learn how enterprises can modernize critical workloads incrementally while improving resilience, agility, security, and operational efficiency.",
    body:
      "Cloud modernization is a transformation of architecture, operations, security, and delivery practices. Quality engineering helps enterprises control risk while applications move from legacy environments to modern platforms.",
    heroImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1800&auto=format&fit=crop",
    publishedAt: "August 12, 2026",
    readTime: "7 min read",
    author: "Starfii Engineering",
    sections: [
      {
        heading: "Modernization needs a quality baseline",
        paragraphs: [
          "Before changing a legacy workload, teams need confidence in the current behavior. Regression coverage, critical user journeys, integration dependencies, and performance baselines provide that foundation.",
        ],
      },
      {
        heading: "Testing during incremental migration",
        paragraphs: [
          "Incremental modernization allows organizations to move capabilities in controlled stages. Automated tests can compare behavior between legacy and modern components while traffic, data, and integrations transition.",
        ],
        bullets: [
          "Capture critical business workflows.",
          "Automate regression coverage before migration.",
          "Validate data and integration compatibility.",
          "Performance test modernized workloads.",
          "Use production observability to verify outcomes.",
        ],
      },
      {
        heading: "Quality as a modernization accelerator",
        paragraphs: [
          "A strong quality strategy reduces uncertainty. When teams know what must remain stable and have automated evidence for that behavior, modernization decisions can move faster with lower business risk.",
        ],
      },
    ],
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(
    (post) =>
      post.slug === slug &&
      post.service === QUALITY_ENGINEERING_SERVICE
  );
}

export function getRelatedBlogs(
  currentSlug: string,
  limit = 3
): BlogPost[] {
  return blogPosts
    .filter(
      (post) =>
        post.slug !== currentSlug &&
        post.service === QUALITY_ENGINEERING_SERVICE
    )
    .slice(0, limit);
}
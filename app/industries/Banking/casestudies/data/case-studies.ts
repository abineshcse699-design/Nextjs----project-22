export type CaseStudyPhase = {
  number: string;
  title: string;
  body: string;
};

export type CaseStudyStat = {
  value: string;
  label: string;
};

export type CaseStudy = {
  slug: string;
  image: string;
  title: string;
  body: string;

  client: string;
  industry: string;
  duration: string;

  overview: string;
  challenge: string;
  approach: string;
  solution: string;
  results: string;

  phases: CaseStudyPhase[];
  capabilities: string[];
  benefits: string[];
  technologies: string[];
  stats: CaseStudyStat[];

  date: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "regional-bank-digital-banking-experience",

    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop",

    title:
      "Starfii Modernizes a Regional Bank's Digital Banking Experience",

    body:
      "Starfii improved the quality and technology foundation for a regional bank's digital banking experience, helping teams deliver customer-facing functionality with greater speed, reliability, and confidence.",

    client: "Regional Banking Organization",
    industry: "Banking",
    duration: "10 Months",

    overview:
      "The banking organization was modernizing its customer-facing digital experience and needed a technology and quality engineering approach capable of supporting complex banking journeys across web applications, APIs, backend services, and third-party integrations.",

    challenge:
      "Frequent changes across digital banking workflows increased regression and integration risk. Authentication, account management, payments, transfers, and customer onboarding required consistent validation across multiple systems and environments.",

    approach:
      "Starfii established a structured engineering and quality approach covering functional validation, API testing, automation, integration testing, exploratory testing, security-focused validation, and release certification.",

    solution:
      "Reusable automated scenarios were created around the most important banking workflows. API and integration validation reduced dependency on UI-only testing, while CI/CD execution provided faster feedback throughout development and release cycles.",

    results:
      "The organization gained a more predictable delivery and testing process, stronger regression visibility, improved automated coverage, and greater confidence when releasing customer-facing digital banking capabilities.",

    phases: [
      {
        number: "01",
        title: "Discover",
        body:
          "Analyzed digital banking workflows, integrations, environments, dependencies, and existing test coverage.",
      },
      {
        number: "02",
        title: "Design",
        body:
          "Designed a layered engineering and quality strategy around critical banking journeys and high-risk workflows.",
      },
      {
        number: "03",
        title: "Build",
        body:
          "Built reusable automation for high-value customer workflows including authentication, account management, payments, and onboarding.",
      },
      {
        number: "04",
        title: "Validate",
        body:
          "Added API, integration, browser, regression, and security-focused validation across critical banking capabilities.",
      },
      {
        number: "05",
        title: "Scale",
        body:
          "Embedded automated quality checks into the delivery lifecycle to support repeatable releases as the platform evolved.",
      },
    ],

    capabilities: [
      "Digital banking engineering",
      "Functional testing",
      "API testing",
      "UI automation",
      "Integration testing",
      "Regression testing",
      "Cross-browser validation",
      "Security-focused testing",
      "CI/CD testing",
      "Release certification",
    ],

    benefits: [
      "More reliable digital banking journeys",
      "Faster regression validation",
      "Improved API coverage",
      "Earlier defect discovery",
      "Consistent release validation",
      "Improved customer experience",
      "Better release visibility",
    ],

    technologies: [
      "Playwright",
      "Selenium",
      "REST APIs",
      "Postman",
      "Jenkins",
      "Git",
      "SQL",
      "AWS",
      "CI/CD",
    ],

    stats: [
      { value: "55%", label: "Reduction in regression execution effort" },
      { value: "2.5X", label: "Improvement in automated test execution speed" },
      { value: "95%", label: "Coverage across prioritized digital journeys" },
    ],

    date: "2025-03-15",
  },

  {
    slug: "fintech-saas-platform-mvp-to-scale",

    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop",

    title:
      "Starfii Builds a Fortune 500 Fintech SaaS Platform From MVP to Scale",

    body:
      "Starfii helped a fintech SaaS business move from an early MVP to a reliable enterprise platform with scalable engineering, automated testing, API validation, and continuous quality practices.",

    client: "Fortune 500 Fintech",
    industry: "Financial Services",
    duration: "12 Months",

    overview:
      "The client needed to scale a business-critical fintech SaaS platform while maintaining reliability across customer journeys, APIs, integrations, and rapidly changing product functionality.",

    challenge:
      "Rapid product growth created increasing regression risk. Manual validation consumed significant release time, while the expanding API and integration surface made it difficult for teams to validate every critical workflow consistently.",

    approach:
      "Starfii introduced a risk-based engineering and quality model. Critical customer journeys were identified first, followed by automation of repeatable regression scenarios, API validation, integration testing, performance validation, and release-readiness checks.",

    solution:
      "The solution combined reusable automation frameworks, API validation, end-to-end testing, regression suites, CI/CD quality gates, exploratory testing, and performance validation. Test execution was integrated into the delivery workflow so engineering teams received quality feedback earlier.",

    results:
      "The new engineering and quality model improved regression confidence, reduced repetitive manual validation, increased automated coverage, and created a repeatable release process that could scale with the product and engineering organization.",

    phases: [
      {
        number: "01",
        title: "Assess",
        body:
          "Mapped critical business journeys, application dependencies, APIs, integrations, and existing test coverage.",
      },
      {
        number: "02",
        title: "Prioritize",
        body:
          "Identified high-risk workflows and prioritized automation around business-critical functionality.",
      },
      {
        number: "03",
        title: "Automate",
        body:
          "Created maintainable automated regression and end-to-end testing suites.",
      },
      {
        number: "04",
        title: "Integrate",
        body:
          "Connected automated quality checks with CI/CD pipelines and engineering workflows.",
      },
      {
        number: "05",
        title: "Optimize",
        body:
          "Used execution insights to improve coverage, stability, performance, and test maintenance.",
      },
    ],

    capabilities: [
      "Manual and exploratory testing",
      "End-to-end test automation",
      "API and integration testing",
      "Regression test automation",
      "Performance validation",
      "CI/CD quality gates",
      "Cross-browser testing",
      "Release readiness validation",
      "Test reporting and analytics",
    ],

    benefits: [
      "Faster regression cycles",
      "Higher release confidence",
      "Improved automated coverage",
      "Earlier defect detection",
      "Reduced repetitive manual testing",
      "Better visibility into release quality",
    ],

    technologies: [
      "Playwright",
      "Cypress",
      "REST APIs",
      "GitHub Actions",
      "Jenkins",
      "Postman",
      "JMeter",
      "SQL",
      "AWS",
      "Cloud Platforms",
    ],

    stats: [
      { value: "60%", label: "Reduction in repetitive regression effort" },
      { value: "3X", label: "Faster feedback for critical releases" },
      { value: "90%+", label: "Coverage across prioritized critical workflows" },
    ],

    date: "2025-02-01",
  },

  {
    slug: "enterprise-legacy-modernization-timeline",

    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1600&auto=format&fit=crop",

    title:
      "Starfii Cuts Legacy Modernization Timelines for an Enterprise Client",

    body:
      "Starfii's modernization roadmap moved a complex legacy application portfolio to a scalable cloud platform with minimal business disruption, cutting the expected migration timeline significantly.",

    client: "Enterprise Technology Organization",
    industry: "Enterprise Technology",
    duration: "14 Months",

    overview:
      "The client operated a large portfolio of legacy applications built over more than a decade, with tightly coupled dependencies that made modernization slow, risky, and expensive using conventional approaches.",

    challenge:
      "Legacy applications were tightly coupled to on-premises infrastructure and outdated frameworks, making changes slow and risky. Limited documentation, undocumented dependencies, and fragile integrations meant even small updates carried significant regression risk across the portfolio.",

    approach:
      "Starfii built a phased modernization roadmap that prioritized applications by business risk and technical debt. Legacy systems were wrapped with APIs, dependencies were mapped and validated, and workloads were migrated incrementally with old and new components running side by side until each stage was proven stable.",

    solution:
      "The solution combined dependency mapping, API-led decoupling, automated regression suites for legacy workflows, and a staged cloud migration plan. Parallel-run validation and rollback checkpoints were built into every migration wave, so the organization could modernize without pausing daily operations.",

    results:
      "The organization compressed its modernization timeline substantially, reduced production incidents tied to legacy changes, and gained a scalable cloud foundation that supports faster feature delivery going forward.",

    phases: [
      {
        number: "01",
        title: "Map",
        body:
          "Documented the legacy application portfolio, dependencies, integrations, and technical debt hotspots.",
      },
      {
        number: "02",
        title: "Prioritize",
        body:
          "Sequenced applications for migration based on business risk, complexity, and modernization impact.",
      },
      {
        number: "03",
        title: "Decouple",
        body:
          "Wrapped legacy systems with APIs to decouple tightly bound components ahead of migration.",
      },
      {
        number: "04",
        title: "Migrate",
        body:
          "Moved workloads to the cloud in stages, running legacy and modernized components in parallel to validate stability.",
      },
      {
        number: "05",
        title: "Stabilize",
        body:
          "Monitored, tuned, and hardened the modernized platform to support ongoing feature delivery.",
      },
    ],

    capabilities: [
      "Legacy system assessment",
      "Dependency mapping",
      "API-led decoupling",
      "Cloud migration",
      "Automated regression testing",
      "Parallel-run validation",
      "Release risk management",
      "Platform stabilization",
    ],

    benefits: [
      "Significantly shorter modernization timeline",
      "Reduced production incidents",
      "Lower long-term maintenance cost",
      "Improved deployment frequency",
      "Clearer system documentation",
      "Foundation for future scalability",
    ],

    technologies: [
      "AWS",
      "Docker",
      "Kubernetes",
      "REST APIs",
      "Jenkins",
      "Terraform",
      "SQL",
      "Git",
    ],

    stats: [
      { value: "40%", label: "Faster modernization timeline than planned" },
      { value: "65%", label: "Reduction in legacy-related production incidents" },
      { value: "3X", label: "Increase in deployment frequency post-migration" },
    ],

    date: "2025-01-10",
  },

  {
    slug: "ecommerce-platform-peak-season-scale",

    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop",

    title:
      "Starfii Scales an E Commerce Platform for Peak Season Traffic",

    body:
      "Starfii's cloud engineering team re-architected a high traffic platform on AWS to handle peak season load without downtime, giving the business confidence during its most critical selling periods.",

    client: "E-Commerce Retail Platform",
    industry: "E-Commerce & Retail",
    duration: "8 Months",

    overview:
      "The client's platform experienced sharp, unpredictable traffic spikes during peak shopping seasons, and the existing infrastructure struggled to scale fast enough to avoid slowdowns and outages.",

    challenge:
      "Traffic during peak sales events could increase many times over baseline within hours. The existing architecture relied on manual scaling and fixed capacity, leading to slow page loads, checkout failures, and lost revenue during the periods that mattered most.",

    approach:
      "Starfii re-architected the platform around auto-scaling infrastructure, load-tested every critical path ahead of peak events, and introduced caching and queuing strategies to absorb traffic bursts without overwhelming backend services.",

    solution:
      "The solution included auto-scaling compute and database layers on AWS, a CDN and caching strategy for high-traffic pages, asynchronous processing for order and inventory updates, and repeatable load testing to validate capacity before each major sales event.",

    results:
      "The platform handled peak season traffic with no downtime, checkout completion rates improved, and the business gained a repeatable process for validating capacity ahead of future high-traffic events.",

    phases: [
      {
        number: "01",
        title: "Analyze",
        body:
          "Reviewed historical peak traffic patterns, bottlenecks, and past incident data.",
      },
      {
        number: "02",
        title: "Re-architect",
        body:
          "Redesigned compute, database, and caching layers around auto-scaling and resilience.",
      },
      {
        number: "03",
        title: "Load Test",
        body:
          "Simulated peak season traffic against critical checkout and browsing paths.",
      },
      {
        number: "04",
        title: "Harden",
        body:
          "Added queuing, caching, and failover strategies to protect critical workflows under load.",
      },
      {
        number: "05",
        title: "Monitor",
        body:
          "Implemented real-time monitoring and alerting to track platform health during live peak events.",
      },
    ],

    capabilities: [
      "Cloud architecture design",
      "Auto-scaling infrastructure",
      "Load and performance testing",
      "Caching and CDN strategy",
      "Asynchronous processing",
      "Real-time monitoring",
      "Incident readiness planning",
    ],

    benefits: [
      "Zero downtime during peak season",
      "Improved checkout completion rates",
      "Faster page load times under load",
      "Repeatable pre-event capacity validation",
      "Reduced infrastructure cost outside peak periods",
      "Greater confidence for future sales events",
    ],

    technologies: [
      "AWS",
      "Kubernetes",
      "Redis",
      "CloudFront",
      "JMeter",
      "Node.js",
      "SQL",
      "Terraform",
    ],

    stats: [
      { value: "100%", label: "Uptime during peak season traffic" },
      { value: "4X", label: "Increase in supported concurrent traffic" },
      { value: "30%", label: "Improvement in checkout completion rate" },
    ],

    date: "2024-11-20",
  },

  {
    slug: "healthcare-saas-generative-ai-features",

    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop",

    title:
      "Starfii Ships a Generative AI Feature Set for a Regulated SaaS Platform",

    body:
      "Starfii's Generative AI and LLM engineering team embedded Gen AI features into a compliance driven SaaS platform, improving productivity while meeting strict healthcare regulatory requirements.",

    client: "Healthcare SaaS Provider",
    industry: "Healthcare Technology",
    duration: "9 Months",

    overview:
      "The client's platform served regulated healthcare customers and needed to introduce generative AI features to improve documentation and workflow efficiency without compromising compliance, data privacy, or auditability.",

    challenge:
      "Introducing generative AI into a regulated healthcare product raised concerns around data privacy, model reliability, explainability, and audit requirements. The team also needed guardrails to prevent inaccurate or unsafe outputs in clinical and administrative workflows.",

    approach:
      "Starfii designed a governed AI architecture with strict data handling boundaries, human-in-the-loop review for sensitive outputs, and evaluation pipelines to measure model accuracy and safety before features reached production.",

    solution:
      "The solution included LLM-powered documentation assistance, automated summarization of patient and administrative records, guardrails and content filtering, audit logging for every AI-generated output, and a feedback loop for continuous model evaluation.",

    results:
      "The platform launched generative AI features that reduced documentation time, maintained full auditability, and passed internal compliance review, giving the client a defensible path to expand AI capabilities further.",

    phases: [
      {
        number: "01",
        title: "Assess",
        body:
          "Reviewed compliance requirements, data flows, and candidate workflows for generative AI features.",
      },
      {
        number: "02",
        title: "Design",
        body:
          "Designed a governed AI architecture with data boundaries, guardrails, and audit logging.",
      },
      {
        number: "03",
        title: "Build",
        body:
          "Built LLM-powered documentation assistance and summarization features with human-in-the-loop review.",
      },
      {
        number: "04",
        title: "Evaluate",
        body:
          "Ran accuracy, safety, and bias evaluations against representative healthcare scenarios.",
      },
      {
        number: "05",
        title: "Launch",
        body:
          "Rolled out features with monitoring, feedback loops, and compliance sign-off.",
      },
    ],

    capabilities: [
      "Generative AI and LLM engineering",
      "AI governance and guardrails",
      "Prompt and evaluation engineering",
      "Compliance-aware architecture",
      "Audit logging",
      "Human-in-the-loop workflows",
      "Model evaluation and monitoring",
    ],

    benefits: [
      "Reduced documentation time",
      "Full auditability of AI outputs",
      "Passed internal compliance review",
      "Improved staff productivity",
      "Safer, guardrailed AI workflows",
      "Clear path to expand AI features",
    ],

    technologies: [
      "LLM APIs",
      "Python",
      "Vector Databases",
      "AWS",
      "REST APIs",
      "SQL",
      "CI/CD",
    ],

    stats: [
      { value: "45%", label: "Reduction in documentation time" },
      { value: "100%", label: "Audit coverage on AI-generated outputs" },
      { value: "3", label: "Generative AI features shipped to production" },
    ],

    date: "2024-09-05",
  },
];

/* ============================================================
   GET CASE STUDY BY SLUG
============================================================ */

export function getCaseStudyBySlug(
  slug: string
): CaseStudy | undefined {
  return caseStudies.find(
    (study) => study.slug === slug
  );
}
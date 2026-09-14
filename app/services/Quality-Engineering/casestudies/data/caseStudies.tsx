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
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "fintech-saas-platform-mvp-to-scale",

    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop",

    title:
      "Starfii Builds a Fortune 500 Fintech SaaS Platform From MVP to Scale",

    body:
      "Starfii helped a fintech SaaS business move from an early MVP to a reliable enterprise platform with scalable quality engineering, automated testing, and continuous validation.",

    client: "Fortune 500 Fintech",
    industry: "Financial Services",
    duration: "12 Months",

    overview:
      "The client needed to scale a business critical fintech SaaS platform while maintaining a high level of reliability across customer journeys, APIs, integrations, and rapidly changing product functionality. Starfii established a quality engineering approach that combined manual validation, automation, API testing, performance testing, and continuous quality practices.",

    challenge:
      "Rapid product growth created increasing regression risk. Manual validation consumed significant release time, while the expanding API and integration surface made it difficult for teams to validate every critical workflow consistently. The organization needed faster feedback without compromising release quality.",

    approach:
      "Starfii introduced a risk based quality engineering model. Critical customer journeys were identified first, followed by automation of repeatable regression scenarios. API contracts, integration workflows, performance characteristics, and release readiness were brought into the same quality strategy.",

    solution:
      "The solution combined reusable automation frameworks, API validation, end to end testing, regression suites, CI/CD quality gates, exploratory testing, and performance validation. Test execution was integrated into the delivery workflow so engineering teams received quality feedback earlier in the development lifecycle.",

    results:
      "The new quality engineering model improved regression confidence, reduced repetitive manual validation, increased automated coverage, and created a repeatable release process that could scale with the product and engineering organization.",

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
          "Identified high risk workflows and prioritized automation around business critical functionality.",
      },
      {
        number: "03",
        title: "Automate",
        body:
          "Created maintainable automated regression and end to end testing suites.",
      },
      {
        number: "04",
        title: "Integrate",
        body:
          "Connected automated quality checks with CI/CD pipelines and development workflows.",
      },
      {
        number: "05",
        title: "Optimize",
        body:
          "Used execution insights to improve coverage, stability, and test maintenance.",
      },
    ],

    capabilities: [
      "Manual and exploratory testing",
      "End to end test automation",
      "API and integration testing",
      "Regression test automation",
      "Performance validation",
      "CI/CD quality gates",
      "Cross browser testing",
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
      "Cloud Platforms",
    ],

    stats: [
      {
        value: "60%",
        label: "Reduction in repetitive regression effort",
      },
      {
        value: "3X",
        label: "Faster feedback for critical releases",
      },
      {
        value: "90%+",
        label: "Coverage across prioritized critical workflows",
      },
    ],
  },

  {
    slug: "regional-bank-digital-banking-experience",

    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop",

    title:
      "Starfii Modernizes a Regional Bank's Digital Banking Experience",

    body:
      "Starfii improved the quality engineering foundation for a regional bank's digital banking experience, helping teams release customer facing functionality with greater speed and confidence.",

    client: "Regional Banking Organization",
    industry: "Banking",
    duration: "10 Months",

    overview:
      "The banking organization was modernizing its customer facing digital experience and needed a quality engineering approach capable of validating complex journeys across browsers, APIs, backend services, and third party integrations.",

    challenge:
      "Frequent changes across digital banking workflows increased regression risk. Authentication, account management, payments, and customer onboarding required consistent validation across multiple systems and environments.",

    approach:
      "Starfii established a layered testing strategy covering functional validation, API testing, automation, integration testing, exploratory testing, and release certification.",

    solution:
      "Reusable automated scenarios were created around the most important banking workflows. API and integration validation were added to reduce dependency on purely UI based testing, while CI/CD execution provided faster feedback during development.",

    results:
      "The organization gained a more predictable testing process, better regression visibility, and improved confidence when releasing customer facing digital banking capabilities.",

    phases: [
      {
        number: "01",
        title: "Discover",
        body:
          "Analyzed digital banking workflows, integrations, environments, and existing test coverage.",
      },
      {
        number: "02",
        title: "Design",
        body:
          "Designed a layered quality strategy around critical banking journeys.",
      },
      {
        number: "03",
        title: "Build",
        body:
          "Built reusable automation for high value customer workflows.",
      },
      {
        number: "04",
        title: "Validate",
        body:
          "Added API, integration, browser, and regression validation.",
      },
      {
        number: "05",
        title: "Scale",
        body:
          "Embedded quality checks into the delivery lifecycle.",
      },
    ],

    capabilities: [
      "Digital banking testing",
      "Functional testing",
      "API testing",
      "UI automation",
      "Integration testing",
      "Regression testing",
      "Cross browser validation",
      "Security focused testing",
      "CI/CD testing",
    ],

    benefits: [
      "More reliable digital journeys",
      "Faster regression validation",
      "Improved API coverage",
      "Earlier defect discovery",
      "Consistent release validation",
      "Improved customer experience",
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
      {
        value: "55%",
        label: "Reduction in regression execution effort",
      },
      {
        value: "2.5X",
        label: "Improvement in automated test execution speed",
      },
      {
        value: "95%",
        label: "Coverage across prioritized digital journeys",
      },
    ],
  },

  {
    slug: "healthcare-saas-generative-ai-features",

    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop",

    title:
      "Starfii Ships a Generative AI Feature Set for a Healthcare SaaS Platform",

    body:
      "Starfii supported quality engineering for a healthcare SaaS platform introducing Generative AI capabilities across its product experience.",

    client: "Healthcare SaaS Provider",
    industry: "Healthcare Technology",
    duration: "9 Months",

    overview:
      "The healthcare SaaS organization was introducing AI powered product capabilities while maintaining reliability across existing workflows. The quality strategy needed to address both conventional software behavior and new AI driven interactions.",

    challenge:
      "AI features introduced new validation requirements around response quality, workflow behavior, API reliability, security, and regression coverage. The organization needed a testing model that could evolve alongside the AI capabilities.",

    approach:
      "Starfii combined conventional automation with API testing, exploratory testing, workflow validation, and AI focused quality checks.",

    solution:
      "The team established reusable testing patterns for AI enabled workflows and integrated those checks with existing product regression suites. Quality gates were introduced so new changes could be validated consistently before release.",

    results:
      "The client gained a repeatable approach for validating AI enabled features while protecting the reliability of existing SaaS functionality.",

    phases: [
      {
        number: "01",
        title: "Map",
        body:
          "Mapped AI enabled workflows and their relationship with existing product functionality.",
      },
      {
        number: "02",
        title: "Define",
        body:
          "Defined functional, API, workflow, and AI focused quality criteria.",
      },
      {
        number: "03",
        title: "Automate",
        body:
          "Automated repeatable workflows and critical regression scenarios.",
      },
      {
        number: "04",
        title: "Evaluate",
        body:
          "Validated AI enabled interactions and system behavior.",
      },
      {
        number: "05",
        title: "Monitor",
        body:
          "Introduced continuous quality checks throughout delivery.",
      },
    ],

    capabilities: [
      "AI feature testing",
      "SaaS application testing",
      "API automation",
      "End to end automation",
      "Regression testing",
      "Exploratory testing",
      "Security validation",
      "Integration testing",
      "Continuous testing",
    ],

    benefits: [
      "Reliable AI feature releases",
      "Better regression coverage",
      "Improved testing consistency",
      "Earlier issue detection",
      "Scalable automation",
      "Continuous release validation",
    ],

    technologies: [
      "Playwright",
      "Python",
      "REST APIs",
      "Postman",
      "GitHub Actions",
      "LLM APIs",
      "SQL",
      "Cloud",
      "CI/CD",
    ],

    stats: [
      {
        value: "50%",
        label: "Reduction in manual regression effort",
      },
      {
        value: "2X",
        label: "Faster validation of critical workflows",
      },
      {
        value: "85%+",
        label: "Coverage across prioritized scenarios",
      },
    ],
  },

  {
    slug: "ecommerce-platform-peak-season-scale",

    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop",

    title:
      "Starfii Scales an E Commerce Platform for Peak Season Traffic",

    body:
      "Starfii helped an e commerce organization strengthen quality and performance validation before high traffic periods.",

    client: "Enterprise E Commerce Company",
    industry: "Retail and E Commerce",
    duration: "8 Months",

    overview:
      "The client needed confidence that its platform could support significant traffic increases while protecting checkout, search, catalog, account, and payment workflows.",

    challenge:
      "Peak season traffic created performance and reliability risks. Existing functional testing did not provide enough visibility into how the platform behaved under realistic concurrent load.",

    approach:
      "Starfii combined functional automation with performance testing, API testing, integration validation, and release readiness checks.",

    solution:
      "Critical customer journeys were automated and performance scenarios were designed around realistic peak traffic patterns. The resulting test strategy provided engineering teams with actionable quality and performance feedback.",

    results:
      "The organization improved visibility into system behavior under load and gained a stronger quality foundation for high traffic releases.",

    phases: [
      {
        number: "01",
        title: "Baseline",
        body:
          "Established performance and functional baselines for critical journeys.",
      },
      {
        number: "02",
        title: "Model",
        body:
          "Created realistic peak traffic and customer behavior scenarios.",
      },
      {
        number: "03",
        title: "Test",
        body:
          "Executed load, stress, API, and end to end validation.",
      },
      {
        number: "04",
        title: "Analyze",
        body:
          "Identified bottlenecks and prioritized high impact improvements.",
      },
      {
        number: "05",
        title: "Release",
        body:
          "Established repeatable performance validation before major releases.",
      },
    ],

    capabilities: [
      "Performance testing",
      "Load testing",
      "Stress testing",
      "API testing",
      "Checkout testing",
      "Regression automation",
      "Scalability validation",
      "Cloud testing",
      "Release certification",
    ],

    benefits: [
      "Improved peak season readiness",
      "Earlier bottleneck discovery",
      "Higher checkout confidence",
      "Better scalability visibility",
      "Repeatable performance testing",
      "Reduced release risk",
    ],

    technologies: [
      "JMeter",
      "K6",
      "Playwright",
      "REST APIs",
      "AWS",
      "CloudWatch",
      "Postman",
      "GitHub Actions",
      "SQL",
    ],

    stats: [
      {
        value: "4X",
        label: "Increase in validated peak traffic capacity",
      },
      {
        value: "45%",
        label: "Reduction in performance test preparation effort",
      },
      {
        value: "99.9%",
        label: "Target availability supported by validation",
      },
    ],
  },

  {
    slug: "enterprise-legacy-modernization-timeline",

    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1600&auto=format&fit=crop",

    title:
      "Starfii Cuts Legacy Modernization Timelines for an Enterprise Client",

    body:
      "Starfii helped an enterprise modernization program establish a scalable quality engineering strategy across legacy applications, integrations, and modern cloud services.",

    client: "Enterprise Technology Organization",
    industry: "Enterprise Technology",
    duration: "14 Months",

    overview:
      "The enterprise was modernizing a complex application portfolio while maintaining business continuity. Quality engineering was required across legacy applications, new services, APIs, integrations, and cloud infrastructure.",

    challenge:
      "Legacy dependencies and limited automated coverage made regression testing slow and difficult. Modernization releases required confidence that new services would continue to support existing business behavior.",

    approach:
      "Starfii established a phased quality engineering model covering application assessment, regression automation, API testing, integration validation, performance testing, and continuous testing.",

    solution:
      "Automated regression suites were introduced around critical legacy business workflows. API and integration tests were added alongside modernized services, while CI/CD quality gates helped teams identify defects before production deployment.",

    results:
      "The modernization program gained a repeatable testing foundation that reduced release risk and provided better visibility across legacy and modern application components.",

    phases: [
      {
        number: "01",
        title: "Assess",
        body:
          "Reviewed legacy applications, dependencies, integrations, and existing quality practices.",
      },
      {
        number: "02",
        title: "Prioritize",
        body:
          "Identified critical business workflows and modernization risk areas.",
      },
      {
        number: "03",
        title: "Modernize",
        body:
          "Built automated validation around modernized application components.",
      },
      {
        number: "04",
        title: "Integrate",
        body:
          "Connected API, integration, and regression validation.",
      },
      {
        number: "05",
        title: "Continuously Test",
        body:
          "Embedded quality checks into the modernization delivery pipeline.",
      },
    ],

    capabilities: [
      "Legacy application testing",
      "Modernization testing",
      "Regression automation",
      "API testing",
      "Integration testing",
      "Cloud testing",
      "Performance testing",
      "CI/CD quality gates",
      "Release validation",
    ],

    benefits: [
      "Lower modernization risk",
      "Faster regression cycles",
      "Improved legacy coverage",
      "Better integration visibility",
      "Earlier defect detection",
      "More predictable releases",
    ],

    technologies: [
      "Playwright",
      "Selenium",
      "REST APIs",
      "JMeter",
      "Jenkins",
      "GitHub Actions",
      "AWS",
      "SQL",
      "CI/CD",
    ],

    stats: [
      {
        value: "40%",
        label: "Reduction in modernization regression effort",
      },
      {
        value: "3X",
        label: "Faster release validation",
      },
      {
        value: "90%+",
        label: "Coverage across prioritized business workflows",
      },
    ],
  },
];

export function getCaseStudyBySlug(
  slug: string
): CaseStudy | undefined {
  return caseStudies.find(
    (study) => study.slug === slug
  );
}
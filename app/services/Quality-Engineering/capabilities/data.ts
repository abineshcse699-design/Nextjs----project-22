// Shared data source for Quality Engineering capabilities.
// Used by:
//   - app/services/Quality-Engineering/QualityEngineeringSection.tsx  (the capability grid)
//   - app/services/Quality-Engineering/capabilities/[slug]/page.tsx   (detail page)

export type KeyFeature = {
  title: string;
  body: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type Capability = {
  slug: string;
  title: string;
  body: string;
  tags: string[];
  heroImage: string;
  keyFeatures: KeyFeature[];
  faqs: Faq[];
};

export const CAPABILITY_BASE = "/services/Quality-Engineering/capabilities";
export const SERVICE_BASE = "/services/Quality-Engineering";

export const capabilities: Capability[] = [
  {
    slug: "manual-testing",
    title: "Manual Testing",
    body: "Starfii's manual testing teams validate real user journeys and edge cases that automation alone can miss, giving your product a human check before every release.",
    tags: ["MANUAL", "EXPLORATORY", "UAT"],
    heroImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Exploratory & Usability Testing",
        body: "Experienced testers explore the product the way real users do, finding usability gaps and unexpected behavior that scripted checks never look for.",
      },
      {
        title: "Test Case Design & Coverage",
        body: "Clear, traceable test cases mapped to requirements and user stories, so coverage is visible and nothing critical is left to chance.",
      },
      {
        title: "Regression & Release Validation",
        body: "Focused regression passes and smoke checks before every release, so the build that ships is the build that was verified.",
      },
      {
        title: "Defect Reporting & Triage",
        body: "Reproducible defect reports with severity, evidence, and clear steps, so developers can fix issues quickly without back and forth.",
      },
    ],
    faqs: [
      {
        question: "When is manual testing still the right choice?",
        answer:
          "Manual testing is the right fit for exploratory work, usability checks, new features that are still changing, and complex scenarios where human judgment matters. We use it alongside automation, not instead of it.",
      },
      {
        question: "How does Starfii decide what to test manually and what to automate?",
        answer:
          "We assess each scenario for stability, repeatability, and business risk. Stable, high frequency checks move to automation, while exploratory and judgment based checks stay manual.",
      },
      {
        question: "Can Starfii support user acceptance testing?",
        answer:
          "Yes. We help plan UAT, prepare test scenarios with business users, track results, and manage defects so sign off is based on evidence.",
      },
      {
        question: "What do we receive after a testing cycle?",
        answer:
          "You receive test execution results, defect reports with evidence, coverage summaries, and a clear release readiness view that your team can act on.",
      },
      {
        question: "Can we scale the testing team up or down?",
        answer:
          "Yes. We flex team size around your release calendar, so you have the coverage you need at peak times without carrying idle capacity.",
      },
    ],
  },
  {
    slug: "test-automation",
    title: "Test Automation",
    body: "We build durable, maintainable test automation suites that cut regression time and give teams fast, reliable feedback on every build.",
    tags: ["AUTOMATION", "REGRESSION", "FRAMEWORKS"],
    heroImage:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Automation Strategy & Test Pyramid",
        body: "A clear plan for what to automate at the unit, integration, and end to end layers, so effort goes where it pays back the most.",
      },
      {
        title: "Maintainable Framework Design",
        body: "Reusable components, clean page objects, and shared utilities that keep suites readable and cheap to update as the product changes.",
      },
      {
        title: "CI Integration & Reporting",
        body: "Suites run automatically on every build, with dashboards and reports that show pass rates, trends, and failures at a glance.",
      },
      {
        title: "Flaky Test Control",
        body: "Unstable tests are detected, isolated, and fixed, so the team keeps trusting the results instead of rerunning builds.",
      },
    ],
    faqs: [
      {
        question: "Which tools and frameworks does Starfii use?",
        answer:
          "We choose tooling based on your stack and team skills, such as Selenium, Playwright, Cypress, or Appium, and design frameworks your own engineers can maintain.",
      },
      {
        question: "How much of our testing should be automated?",
        answer:
          "There is no fixed percentage. We prioritize stable, repeatable, high value scenarios first, and expand coverage as the automation proves its return.",
      },
      {
        question: "How do you prevent automation suites from becoming brittle?",
        answer:
          "We use reusable components, stable locators, test data management, and regular suite reviews, so changes in the product do not break large parts of the suite.",
      },
      {
        question: "Can Starfii take over and repair our existing automation?",
        answer:
          "Yes. We audit current suites, remove duplicated or unreliable tests, and restructure them into a maintainable framework with clear ownership.",
      },
      {
        question: "How do we measure the value of automation?",
        answer:
          "We agree on measures such as regression cycle time, defect escape rate, and pass rate stability before we build, then report on them regularly.",
      },
    ],
  },
  {
    slug: "api-testing",
    title: "API Testing",
    body: "Starfii validates API contracts, payloads, and integrations so services stay reliable as your architecture grows more distributed.",
    tags: ["API", "CONTRACTS", "INTEGRATION"],
    heroImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Functional & Contract Testing",
        body: "Requests, responses, schemas, and status codes are validated against agreed contracts, so breaking changes are caught early.",
      },
      {
        title: "Authentication & Authorization Checks",
        body: "Access controls, tokens, and permission boundaries are tested so the right users see the right data and nothing more.",
      },
      {
        title: "Negative & Edge Case Coverage",
        body: "Invalid inputs, missing fields, timeouts, and failure paths are exercised so APIs behave predictably when things go wrong.",
      },
      {
        title: "Pipeline Integrated API Suites",
        body: "API tests run automatically in CI/CD, so contract changes surface in the pipeline and not in a partner's inbox.",
      },
    ],
    faqs: [
      {
        question: "What types of APIs can Starfii test?",
        answer:
          "We test REST, GraphQL, SOAP, and event driven interfaces, covering both internal service to service calls and external partner integrations.",
      },
      {
        question: "What is contract testing and why does it matter?",
        answer:
          "Contract testing checks that a provider and its consumers agree on the shape of requests and responses. It catches breaking changes before deployment, especially across many services.",
      },
      {
        question: "Can API tests run before the front end is ready?",
        answer:
          "Yes. API testing does not depend on a user interface, so it can start as soon as endpoints exist, and mocks or stubs can cover services that are not yet available.",
      },
      {
        question: "How are test data and environments handled?",
        answer:
          "We set up repeatable test data and isolated environments, so tests give consistent results and do not interfere with other teams.",
      },
      {
        question: "Does API testing include performance and security checks?",
        answer:
          "Yes. We can extend API suites with load tests and security checks, so functional, performance, and security concerns are covered on the same endpoints.",
      },
    ],
  },
  {
    slug: "performance-testing",
    title: "Performance Testing",
    body: "We load test and stress test critical systems to uncover bottlenecks before customers do, keeping platforms fast under real world traffic.",
    tags: ["PERFORMANCE", "LOAD", "SCALABILITY"],
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Load & Stress Testing",
        body: "Realistic traffic models push your platform to and beyond expected peaks, showing where and how it starts to degrade.",
      },
      {
        title: "Bottleneck Analysis",
        body: "Application, database, network, and infrastructure metrics are analyzed together to find the actual cause of slowdowns.",
      },
      {
        title: "Scalability & Capacity Planning",
        body: "Results are turned into capacity guidance, so you know what the platform can handle today and what it needs for growth.",
      },
      {
        title: "Tuning Recommendations",
        body: "Findings are delivered as clear, prioritized actions across code, queries, configuration, and infrastructure, not just graphs.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between load testing and stress testing?",
        answer:
          "Load testing checks behavior under expected traffic. Stress testing pushes past expected limits to see where the system fails and how it recovers.",
      },
      {
        question: "When should performance testing start?",
        answer:
          "As early as there is something to measure. Early tests on critical services are far cheaper than fixing problems found just before launch.",
      },
      {
        question: "Which tools does Starfii use for performance testing?",
        answer:
          "We select tools such as JMeter, k6, or Gatling based on your architecture and team, and connect them to monitoring so results are easy to interpret.",
      },
      {
        question: "Can performance tests be part of our CI/CD pipeline?",
        answer:
          "Yes. Lightweight performance checks can run on every build, with heavier tests scheduled before major releases.",
      },
      {
        question: "How realistic are the test scenarios?",
        answer:
          "We build scenarios from your real usage patterns, such as user journeys, peak periods, and data volumes, so results reflect production conditions.",
      },
    ],
  },
  {
    slug: "security-testing",
    title: "Security Testing",
    body: "Starfii's security testing practice identifies vulnerabilities in applications and APIs early, reducing risk before code reaches production.",
    tags: ["SECURITY", "VULNERABILITIES", "COMPLIANCE"],
    heroImage:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Application & API Vulnerability Testing",
        body: "Applications and APIs are probed for common weaknesses such as injection, broken access control, and insecure configuration.",
      },
      {
        title: "Authentication & Session Review",
        body: "Login flows, tokens, sessions, and permission checks are tested to confirm they resist abuse.",
      },
      {
        title: "Automated Scanning in the Pipeline",
        body: "Static and dynamic scans run in CI/CD, so vulnerabilities are found while code is still being written.",
      },
      {
        title: "Remediation Guidance & Retesting",
        body: "Every finding comes with clear fix guidance and a retest, so issues are confirmed closed and not just marked done.",
      },
    ],
    faqs: [
      {
        question: "What standards does security testing follow?",
        answer:
          "We align testing with recognized guidance such as the OWASP Top 10 and OWASP ASVS, and adapt it to your industry and compliance needs.",
      },
      {
        question: "Is security testing the same as a penetration test?",
        answer:
          "Not exactly. Security testing in the delivery lifecycle is continuous and automated where possible, while a penetration test is a deeper, point in time assessment. We can support both.",
      },
      {
        question: "Can Starfii help with audit evidence?",
        answer:
          "Yes. Test scope, findings, remediation, and retest results are documented, so you have evidence ready for audits and customer security reviews.",
      },
      {
        question: "How do you handle vulnerabilities found in production code?",
        answer:
          "We rate each finding by severity and exploitability, share clear reproduction steps, and work with your engineers on fixes in priority order.",
      },
      {
        question: "Can security checks run without slowing releases?",
        answer:
          "Yes. Automated scans run in the pipeline and deeper testing is scheduled around releases, so security stays in step with delivery speed.",
      },
    ],
  },
  {
    slug: "mobile-testing",
    title: "Mobile Testing",
    body: "We test mobile applications across real devices, operating systems, and network conditions to make sure quality holds up everywhere your users are.",
    tags: ["MOBILE", "DEVICES", "ANDROID / IOS"],
    heroImage:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Real Device & OS Coverage",
        body: "Apps are tested on a chosen mix of real Android and iOS devices and versions, based on what your users actually run.",
      },
      {
        title: "Network & Interruption Scenarios",
        body: "Slow connections, offline mode, calls, notifications, and low battery are tested so the app copes with real life.",
      },
      {
        title: "Mobile Test Automation",
        body: "Automated suites for both platforms run on device farms, cutting regression time across many device combinations.",
      },
      {
        title: "App Store Release Readiness",
        body: "Installation, upgrade, permissions, and store guideline checks are covered before each submission.",
      },
    ],
    faqs: [
      {
        question: "Do you test on real devices or emulators?",
        answer:
          "Both. Emulators are useful for fast early feedback, while real devices are used for final validation, performance, and hardware related behavior.",
      },
      {
        question: "How do you choose which devices to cover?",
        answer:
          "We use your analytics and market data to select the devices and OS versions that matter most, so coverage matches your real audience.",
      },
      {
        question: "Can you test native, hybrid, and web apps?",
        answer:
          "Yes. We test native Android and iOS apps, hybrid apps, and mobile web experiences.",
      },
      {
        question: "Does mobile testing include performance and security?",
        answer:
          "Yes. We can check launch time, memory and battery use, and data storage and transport security alongside functional testing.",
      },
      {
        question: "Can mobile automation run in our CI/CD pipeline?",
        answer:
          "Yes. We connect suites to device farms so tests run automatically on builds and results feed back to your team.",
      },
    ],
  },
  {
    slug: "continuous-testing",
    title: "Continuous Testing",
    body: "Starfii embeds continuous testing into CI/CD pipelines so quality gates run automatically with every commit, not just before a release.",
    tags: ["CI/CD", "QUALITY GATES", "DEVOPS"],
    heroImage:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Quality Gates in the Pipeline",
        body: "Automated checks at every stage decide whether a build can move forward, so defects are stopped early.",
      },
      {
        title: "Shift Left Testing",
        body: "Testing starts during design and development, so problems are found when they are cheapest to fix.",
      },
      {
        title: "Test Environment & Data Management",
        body: "Stable, on demand environments and reliable test data remove the delays that usually slow testing down.",
      },
      {
        title: "Quality Dashboards & Metrics",
        body: "Live views of pass rates, coverage, and release readiness give the whole team one picture of quality.",
      },
    ],
    faqs: [
      {
        question: "What does continuous testing mean in practice?",
        answer:
          "It means automated tests run throughout the delivery pipeline, on every change, so feedback arrives in minutes and not at the end of a release cycle.",
      },
      {
        question: "Which CI/CD tools can Starfii work with?",
        answer:
          "We work with common tools such as Jenkins, GitHub Actions, GitLab CI, Azure DevOps, and others, and fit into the pipeline you already have.",
      },
      {
        question: "How do you keep the pipeline fast?",
        answer:
          "We layer tests by speed and value, run them in parallel, and reserve slower suites for later stages, so quick checks give fast feedback.",
      },
      {
        question: "What happens when a quality gate fails?",
        answer:
          "The build is stopped and the right team is notified with the failure details, so the issue is fixed before it moves further.",
      },
      {
        question: "Can continuous testing support frequent releases?",
        answer:
          "Yes. Automated gates and reliable suites let teams release often with confidence, because every change has already been verified.",
      },
    ],
  },
  {
    slug: "ai-assisted-testing",
    title: "AI Assisted Testing",
    body: "We use AI assisted testing to generate test cases, detect flaky tests, and prioritize the checks that matter most, cutting manual test maintenance.",
    tags: ["AI", "TEST GENERATION", "INSIGHTS"],
    heroImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "AI Generated Test Cases",
        body: "Requirements, user stories, and code changes are used to draft test cases and data, which our engineers review and refine.",
      },
      {
        title: "Flaky Test Detection",
        body: "Patterns in test history reveal unstable tests, so they can be fixed or quarantined before they erode trust.",
      },
      {
        title: "Risk Based Test Prioritization",
        body: "Tests are ranked by the likelihood of failure and business impact, so the most valuable checks run first.",
      },
      {
        title: "Self Healing & Maintenance Support",
        body: "AI helps update locators and scripts when the interface changes, reducing time spent repairing tests.",
      },
    ],
    faqs: [
      {
        question: "Does AI replace test engineers?",
        answer:
          "No. AI speeds up repetitive work such as drafting and maintaining tests. Engineers still set strategy, review output, and make the quality decisions.",
      },
      {
        question: "How do you make sure AI generated tests are reliable?",
        answer:
          "Every generated test is reviewed and validated by an engineer before it is added to a suite, and results are tracked so quality of the output is measured.",
      },
      {
        question: "Is our code and data safe when using AI tools?",
        answer:
          "We use approved tools and configurations, apply access controls, and follow your data handling requirements, so sensitive code and data are protected.",
      },
      {
        question: "Where does AI add the most value in testing?",
        answer:
          "Typically in test design, test maintenance, flaky test analysis, and prioritization, where large amounts of data and repetitive effort slow teams down.",
      },
      {
        question: "Can AI assisted testing work with our existing framework?",
        answer:
          "Yes. We add AI capabilities on top of your current tools and pipelines, so you do not need to rebuild your test setup.",
      },
    ],
  },
  {
    slug: "qa-automation",
    title: "QA Automation",
    body: "Starfii's QA automation practice builds the frameworks, tooling, and reporting that let quality engineering teams scale coverage without scaling headcount.",
    tags: ["QA", "FRAMEWORKS", "SCALE"],
    heroImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Enterprise Automation Frameworks",
        body: "A common, well documented framework used across teams, so tests are consistent and easy to share and maintain.",
      },
      {
        title: "Tooling & Accelerators",
        body: "Reusable libraries, templates, and utilities that shorten the time it takes to add new automated coverage.",
      },
      {
        title: "Unified Reporting",
        body: "Results from every suite and team are brought into one view, so quality is easy to track and report.",
      },
      {
        title: "Team Enablement & Governance",
        body: "Coding standards, review practices, and training keep automation healthy long after the initial build.",
      },
    ],
    faqs: [
      {
        question: "How is QA automation different from test automation?",
        answer:
          "Test automation is about the tests themselves. QA automation covers the wider setup around them, including frameworks, tooling, environments, reporting, and the practices that help teams scale.",
      },
      {
        question: "Can Starfii build a shared framework for multiple teams?",
        answer:
          "Yes. We design a shared framework with common standards, so teams reuse components and results stay consistent across products.",
      },
      {
        question: "How do we scale coverage without adding headcount?",
        answer:
          "Reusable components, good tooling, and automation of repetitive tasks let existing teams cover more of the product with the same effort.",
      },
      {
        question: "Will our team be able to maintain what you build?",
        answer:
          "Yes. We document the framework, follow clear coding standards, and train your engineers, so ownership can sit with your team.",
      },
      {
        question: "Does Starfii support QA automation after delivery?",
        answer:
          "Yes. We can provide ongoing enhancements, framework upgrades, and support under a managed services arrangement.",
      },
    ],
  },
];

export function getCapabilityBySlug(slug: string): Capability | undefined {
  return capabilities.find((c) => c.slug === slug);
}
// Shared data source for Software & Product Engineering capabilities.
// Used by:
//   - app/services/software-product/page.tsx                      (the capability grid)
//   - app/services/software-product/capabilities/[slug]/page.tsx  (detail page)
//
// Keeping one source of truth means the grid card and its "Learn More"
// destination can never drift out of sync with each other.

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
  // Detail-page-only fields. Kept minimal on purpose: the detail page
  // should show what the card already promises, not invent new content.
  heroImage: string;
  // Detail-page-only: what's included, shown as a feature grid.
  keyFeatures: KeyFeature[];
  // Detail-page-only: frequently asked questions, shown as an accordion.
  faqs: Faq[];
};

export const capabilities: Capability[] = [
  {
    slug: "ui-ux-engineering",
    title: "UI/UX Engineering",
    body: "Starfii's UI/UX engineering team designs digital products that balance what users need with what the business needs, so every screen in your software product earns its place and drives measurable engagement.",
    tags: ["UX", "UI", "DESIGN"],
    heroImage:
      "https://images.unsplash.com/photo-1581276879432-15e50529f34b?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "User Research & Journey Mapping",
        body: "We study real user behavior and pain points before a single screen is designed, so decisions are backed by evidence instead of guesswork.",
      },
      {
        title: "Design Systems & Component Libraries",
        body: "Reusable, documented components keep every screen visually consistent and let engineering teams ship new features faster.",
      },
      {
        title: "Prototyping & Usability Testing",
        body: "Interactive prototypes are tested with real users early, catching friction points before they become expensive to fix in code.",
      },
      {
        title: "Accessibility & Inclusive Design",
        body: "WCAG aligned patterns ensure your product works for the widest possible audience, including assistive technology users.",
      },
    ],
    faqs: [
      {
        question: "What is the typical timeline for a UI/UX engagement?",
        answer:
          "Most engagements run 6 to 12 weeks depending on scope, covering research, wireframes, high fidelity design, and a design system handoff to engineering.",
      },
      {
        question: "Can Starfii extend or build on our existing design system?",
        answer:
          "Yes. We can extend an existing design system or build a new one from scratch, whichever gets your product to market faster without rework.",
      },
      {
        question: "Does Starfii also handle front end development after the design phase?",
        answer:
          "Yes. Our UI/UX team works alongside our web and mobile application development teams, so the final build matches the approved design closely.",
      },
      {
        question: "Does Starfii offer standalone UX audits for existing products?",
        answer:
          "Yes. A standalone UX audit surfaces friction points, accessibility gaps, and quick wins before you commit to a full redesign.",
      },
      {
        question: "How does Starfii measure the success of a UI/UX redesign?",
        answer:
          "We agree on success metrics up front, such as task completion, conversion, drop off, and user satisfaction, and compare them before and after launch so the impact of the design work is visible and measurable.",
      },
      {
        question: "How does Starfii involve stakeholders and end users during the design process?",
        answer:
          "We run discovery workshops with stakeholders, test prototypes with real users, and share progress at regular checkpoints, so feedback is captured early and decisions stay aligned with business goals.",
      },
      {
        question: "Does Starfii design for both web and mobile experiences?",
        answer:
          "Yes. We design responsive web experiences and mobile interfaces, keeping patterns, components, and branding consistent across every screen and device.",
      },
    ],
  },
  {
    slug: "web-application-development",
    title: "Web Application Development",
    body: "Starfii builds web applications that adapt to shifting user expectations and market conditions, so your software product stays competitive long after launch instead of needing a rebuild every cycle.",
    tags: ["WEB", "FRONTEND", "FULL STACK"],
    heroImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Modern Frontend Architecture",
        body: "React, Next.js, and component driven architectures built for performance, SEO, and long term maintainability.",
      },
      {
        title: "Full Stack Delivery",
        body: "One team owns the frontend, backend, and deployment pipeline, so nothing gets lost in translation between layers.",
      },
      {
        title: "Performance & Core Web Vitals",
        body: "Applications are engineered and monitored against Core Web Vitals so real users experience fast, responsive pages.",
      },
      {
        title: "Progressive Enhancement",
        body: "Applications are built to evolve, so new features, integrations, and markets can be added without a rebuild.",
      },
    ],
    faqs: [
      {
        question: "Which frameworks and technologies does Starfii use for web application development?",
        answer:
          "We primarily build with React and Next.js, and we adapt to your existing stack (Vue, Angular, or a legacy framework) when a rebuild is not the right first step.",
      },
      {
        question: "Can Starfii take over and improve an existing web application?",
        answer:
          "Yes. We regularly onboard onto existing codebases, run a technical audit first, and then plan improvements alongside new feature delivery.",
      },
      {
        question: "How does Starfii manage hosting, deployment, and monitoring?",
        answer:
          "We set up CI/CD pipelines and deploy to your preferred cloud provider (AWS, Azure, GCP, or Vercel), with monitoring built in from day one.",
      },
      {
        question: "How does Starfii ensure a web application scales as traffic grows?",
        answer:
          "We design with caching, code splitting, and horizontal scaling in mind from the start, and we load test before major launches.",
      },
      {
        question: "How does Starfii approach web application security?",
        answer:
          "Security is built in from the start, including secure authentication, input validation, dependency scanning, and protection against common web vulnerabilities such as those listed in the OWASP Top 10.",
      },
      {
        question: "Can Starfii build web applications that are optimized for search engines?",
        answer:
          "Yes. Using frameworks like Next.js, we build with server rendering, clean semantic markup, and fast load times, so pages are easy for search engines to crawl and index.",
      },
      {
        question: "How does Starfii structure the delivery of a web application project?",
        answer:
          "We deliver in short, visible increments with regular demos, so your team can review working software early, give feedback, and adjust priorities as the product takes shape.",
      },
    ],
  },
  {
    slug: "mobile-application-development",
    title: "Mobile Application Development",
    body: "Starfii's mobile application development team ships native and cross platform apps that combine performance, polish, and reliability across iOS and Android.",
    tags: ["IOS", "ANDROID", "CROSS PLATFORM"],
    heroImage:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Native iOS & Android Development",
        body: "Swift and Kotlin expertise for apps that need platform specific performance, animations, or hardware access.",
      },
      {
        title: "Cross Platform with React Native & Flutter",
        body: "One codebase, two app stores, when speed to market and budget matter more than platform specific polish.",
      },
      {
        title: "App Store Optimization & Release Management",
        body: "We handle store listings, review guidelines, and phased rollouts so launches go smoothly and updates ship on schedule.",
      },
      {
        title: "Offline First & Sync Architecture",
        body: "Apps that stay usable without a connection and reconcile data cleanly the moment connectivity returns.",
      },
    ],
    faqs: [
      {
        question: "How should we choose between native and cross platform development?",
        answer:
          "If your app needs deep hardware access or platform specific performance, native is worth the investment. Otherwise, cross platform reaches both app stores faster and at lower cost. We recommend an approach based on your requirements.",
      },
      {
        question: "Does Starfii support push notifications and in app purchases?",
        answer:
          "Yes, including Firebase Cloud Messaging, Apple Push Notification service, and subscription or one time purchase flows through both app stores.",
      },
      {
        question: "Does Starfii provide maintenance and support after launch?",
        answer:
          "Yes. We offer ongoing maintenance plans covering OS updates, bug fixes, and new feature development after launch.",
      },
      {
        question: "How does Starfii handle App Store and Play Store review requirements?",
        answer:
          "We build against current App Store and Play Store guidelines from day one, and our release management process handles any resubmission quickly.",
      },
      {
        question: "Can Starfii build mobile apps that work offline?",
        answer:
          "Yes. We design offline first architectures where the app stays usable without a connection and syncs data cleanly once connectivity returns.",
      },
      {
        question: "How does Starfii approach mobile app security and data protection?",
        answer:
          "We apply secure authentication, encrypted data storage and transport, and safe handling of tokens and user data, following the security guidelines of each platform.",
      },
      {
        question: "Can Starfii migrate our existing app to a new platform or framework?",
        answer:
          "Yes. We assess the current app, recommend whether to refactor, rebuild, or move to a cross platform framework, and plan the transition so existing users are not disrupted.",
      },
    ],
  },
  {
    slug: "backend-engineering",
    title: "Backend Engineering",
    body: "Starfii's backend engineering practice builds resilient services, data models, and infrastructure that keep your software product fast, secure, and ready to scale.",
    tags: ["BACKEND", "MICROSERVICES", "CLOUD"],
    heroImage:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Microservices & Distributed Systems",
        body: "Services are decomposed around business capabilities, so teams can deploy independently without stepping on each other.",
      },
      {
        title: "Database Design & Data Modeling",
        body: "Relational and NoSQL data models tuned for the access patterns your product actually uses, not generic defaults.",
      },
      {
        title: "Security & Compliance by Design",
        body: "Authentication, authorization, and encryption are built in from the first sprint, not retrofitted before an audit.",
      },
      {
        title: "Observability & Reliability Engineering",
        body: "Logging, tracing, and alerting are wired in early so issues are caught before customers notice them.",
      },
    ],
    faqs: [
      {
        question: "Which languages and frameworks does Starfii use for backend engineering?",
        answer:
          "Most commonly Node.js, Python, and Java with Spring, chosen based on your team's existing stack and the performance profile the workload needs.",
      },
      {
        question: "Can Starfii help us migrate from a monolith to microservices?",
        answer:
          "Yes. We typically use the strangler fig pattern, carving out services incrementally so the monolith keeps running while we migrate.",
      },
      {
        question: "How does Starfii approach database performance and scaling?",
        answer:
          "We start with indexing and query optimization, then introduce read replicas, sharding, or caching layers only once the data justifies them.",
      },
      {
        question: "Does Starfii offer on call and production support after launch?",
        answer:
          "We can set up your team's on call rotation and runbooks, or provide managed support ourselves under a support retainer.",
      },
      {
        question: "How does Starfii ensure backend reliability and uptime?",
        answer:
          "We build in observability from the start, with logging, tracing, and alerting, so issues are detected and addressed before customers are affected.",
      },
      {
        question: "How does Starfii secure backend services and sensitive data?",
        answer:
          "Authentication, authorization, and encryption are designed in from the first sprint, with access controls and audit trails aligned to your compliance requirements.",
      },
      {
        question: "Can Starfii design the data model for our product?",
        answer:
          "Yes. We design relational and NoSQL data models around the access patterns your product actually uses, and plan for growth so the model can evolve without major rework.",
      },
    ],
  },
  {
    slug: "api-integrations",
    title: "API & Integrations",
    body: "Starfii designs and builds API and integrations layers that connect your software product to partners, internal systems, and third party platforms without adding fragility.",
    tags: ["API", "INTEGRATIONS", "CLOUD"],
    heroImage:
      "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "REST, GraphQL & Webhook APIs",
        body: "APIs designed around how your consumers actually use data, with versioning and documentation built in from day one.",
      },
      {
        title: "Third Party & Partner Integrations",
        body: "Payment gateways, CRMs, ERPs, and partner platforms connected reliably, with retries and failure handling designed in.",
      },
      {
        title: "API Gateway & Rate Limiting",
        body: "A single, secured entry point for your APIs with throttling, authentication, and monitoring applied consistently.",
      },
      {
        title: "Event Driven Architecture",
        body: "Message queues and event streams that decouple systems, so one integration failing doesn't take down the rest of your platform.",
      },
    ],
    faqs: [
      {
        question: "Can Starfii integrate with our existing CRM or ERP systems?",
        answer:
          "Yes. We have built integrations with Salesforce, HubSpot, SAP, and many other enterprise platforms, using their official APIs or middleware where needed.",
      },
      {
        question: "How does Starfii manage API versioning?",
        answer:
          "We design a versioning strategy up front (usually URL or header based) so consumers can migrate on their own schedule without breaking changes.",
      },
      {
        question: "How does Starfii secure the APIs it builds?",
        answer:
          "OAuth 2.0, API keys, rate limiting, and request validation are standard on every API layer we build.",
      },
      {
        question: "Does Starfii provide API documentation for external partners?",
        answer:
          "Yes. We produce OpenAPI/Swagger specifications and interactive documentation so partner teams can integrate on their own without back and forth.",
      },
      {
        question: "Which types of APIs does Starfii build?",
        answer:
          "We build REST, GraphQL, and webhook based APIs, choosing the style that best fits how your consumers use the data.",
      },
      {
        question: "How does Starfii keep integrations reliable when a third party system fails?",
        answer:
          "We design retries, timeouts, and failure handling into every integration, and use message queues and event driven patterns so one failing system does not take down the rest of the platform.",
      },
      {
        question: "Can Starfii monitor and manage APIs after they go live?",
        answer:
          "Yes. We put an API gateway in place with throttling, authentication, and monitoring, so usage, performance, and errors stay visible after launch.",
      },
    ],
  },
  {
    slug: "saas-engineering",
    title: "SaaS Engineering",
    body: "From fintech and healthcare to e commerce, Starfii has built SaaS products for leading Fortune 500 companies, proving our SaaS engineering capability on real production projects.",
    tags: ["SAAS", "FINTECH", "HEALTHCARE"],
    heroImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Multi Tenant Architecture",
        body: "Tenant isolation, data partitioning, and shared infrastructure designed so one customer's usage never affects another's.",
      },
      {
        title: "Usage Based Billing & Metering",
        body: "Subscription and usage based billing integrated with Stripe or your preferred payment processor, built to handle upgrades, downgrades, and proration.",
      },
      {
        title: "Compliance for Regulated Industries",
        body: "HIPAA, SOC 2, and PCI DSS aligned architecture for SaaS products in healthcare, fintech, and other regulated spaces.",
      },
      {
        title: "Composable, Scalable Architecture",
        body: "Modular services that let you add new tenants, features, and integrations without re-architecting the platform.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between single tenant and multi tenant SaaS architecture?",
        answer:
          "Multi tenant shares infrastructure across customers to reduce cost per customer, while single tenant isolates each customer fully, often for compliance reasons. We help you choose based on your customer base and regulatory needs.",
      },
      {
        question: "Can Starfii support SOC 2 or HIPAA compliance for our SaaS product?",
        answer:
          "Yes. We design architecture with compliance controls built in and can support your audit process with the documentation and evidence auditors require.",
      },
      {
        question: "How does Starfii implement SaaS pricing and billing logic?",
        answer:
          "We integrate metered and subscription billing through Stripe or Chargebee, handling trials, upgrades, downgrades, and dunning management.",
      },
      {
        question: "Does Starfii have experience building SaaS platforms at Fortune 500 scale?",
        answer:
          "Yes. Our SaaS engineering team has shipped production SaaS platforms for Fortune 500 customers across fintech, healthcare, and e commerce.",
      },
      {
        question: "How does Starfii keep customer data isolated in a multi tenant platform?",
        answer:
          "We design tenant isolation and data partitioning so one customer's data and usage never affect another's, with access controls enforced at every layer.",
      },
      {
        question: "Can Starfii add new tenants and features without re-architecting the platform?",
        answer:
          "Yes. We use modular, composable services so new tenants, features, and integrations can be added without rebuilding the core platform.",
      },
      {
        question: "Does Starfii build SaaS products for regulated industries?",
        answer:
          "Yes. We have built SaaS products in healthcare and fintech, and we design architecture aligned with requirements such as HIPAA, SOC 2, and PCI DSS.",
      },
    ],
  },
  {
    slug: "enterprise-application-development",
    title: "Enterprise Application Development",
    body: "Starfii is an enterprise application development partner that works from ideation through launch, combining AI driven software engineering with proven practices to deliver breakthrough growth, value, and performance.",
    tags: ["ENTERPRISE", "PLATFORMS", "SCALE"],
    heroImage:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "End to End Delivery",
        body: "From ideation and product strategy through launch and post launch support, one accountable team owns the outcome.",
      },
      {
        title: "AI Driven Engineering",
        body: "AI assisted development accelerates delivery timelines without compromising code quality or maintainability.",
      },
      {
        title: "Enterprise Grade Security",
        body: "Role based access control, audit trails, and enterprise SSO integration built in for organizations with strict security requirements.",
      },
      {
        title: "Integration with Legacy Systems",
        body: "New enterprise applications are built to work alongside existing ERPs, mainframes, and internal tools rather than replacing them overnight.",
      },
    ],
    faqs: [
      {
        question: "How does Starfii manage large scale enterprise projects?",
        answer:
          "We use structured delivery frameworks with clear milestones, stakeholder checkpoints, and dedicated program management for every enterprise engagement.",
      },
      {
        question: "Can Starfii integrate new applications with our existing enterprise systems?",
        answer:
          "Yes. We regularly integrate with SAP, Oracle, Salesforce, and custom internal systems as part of enterprise application delivery.",
      },
      {
        question: "What does AI driven engineering mean in practice at Starfii?",
        answer:
          "We use AI assisted coding, testing, and code review tools to speed up delivery, while senior engineers maintain full oversight of architecture and quality.",
      },
      {
        question: "How does Starfii address enterprise security and compliance requirements?",
        answer:
          "Enterprise SSO, RBAC, audit logging, and compliance requirements (SOC 2, ISO 27001, and others) are scoped during the discovery phase, not added later.",
      },
      {
        question: "How does Starfii control access and audit activity in enterprise applications?",
        answer:
          "We build in role based access control, audit trails, and enterprise SSO integration, so organizations with strict security requirements can control and review who does what.",
      },
      {
        question: "Does Starfii support enterprise applications after launch?",
        answer:
          "Yes. One accountable team owns the outcome from ideation through launch and post launch support, so the application keeps improving after go live.",
      },
      {
        question: "Can Starfii work alongside our internal IT and engineering teams?",
        answer:
          "Yes. We collaborate with your internal teams through shared planning, regular checkpoints, and clear ownership, so knowledge is shared and your team can operate the product with confidence.",
      },
    ],
  },
  {
    slug: "product-modernization",
    title: "Product Modernization",
    body: "Starfii's product modernization team assesses your existing systems, builds a tailored migration roadmap, and transitions you to a scalable, cloud ready, future proof platform with minimal disruption.",
    tags: ["MIGRATION", "MODERNIZATION", "CLOUD"],
    heroImage:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Legacy System Assessment",
        body: "A thorough technical audit of your current stack identifies risk, technical debt, and quick modernization wins before any code changes.",
      },
      {
        title: "Phased Migration Roadmap",
        body: "Migrations are planned in phases so the business keeps running on the old system while the new one is built and validated.",
      },
      {
        title: "Cloud Migration & Re-platforming",
        body: "On premise or outdated cloud workloads are moved to modern, cost efficient, and scalable cloud infrastructure.",
      },
      {
        title: "Zero Downtime Cutover Strategy",
        body: "Data migration, dual writes, and rollback plans are designed so the cutover to the new platform doesn't interrupt daily operations.",
      },
    ],
    faqs: [
      {
        question: "How does Starfii minimize business disruption during modernization?",
        answer:
          "We run the legacy and modernized systems in parallel where possible, migrating in phases so business operations are never interrupted for an extended period.",
      },
      {
        question: "How does Starfii approach modernizing systems that lack documentation?",
        answer:
          "Our assessment phase includes reverse engineering the existing system's behavior through code review and stakeholder interviews before the migration is planned.",
      },
      {
        question: "How long does a typical product modernization project take?",
        answer:
          "It depends heavily on system complexity, but most engagements run from 3 months for a focused re-platform to 12+ months for a full enterprise modernization.",
      },
      {
        question: "Does Starfii migrate data as well as application code?",
        answer:
          "Yes. Data migration, validation, and reconciliation are built into every modernization roadmap to make sure nothing is lost in the transition.",
      },
      {
        question: "How does Starfii decide which parts of a legacy system to modernize first?",
        answer:
          "Our assessment identifies risk, technical debt, and quick wins, and we prioritize by business impact and risk to build a phased roadmap.",
      },
      {
        question: "What does the process of moving on premise workloads to the cloud involve?",
        answer:
          "We assess your current workloads, plan the target cloud architecture, and migrate in phases, with validation at each step so the move is cost efficient, scalable, and low risk.",
      },
      {
        question: "How does Starfii ensure a safe cutover to the new platform?",
        answer:
          "We plan data migration, dual writes, and rollback procedures in advance, so the cutover does not interrupt daily operations and we can revert quickly if needed.",
      },
    ],
  },
  {
    slug: "qa-and-release-engineering",
    title: "QA and Release Engineering",
    body: "Starfii's QA and release engineering services get your products to market faster, with CI/CD automation and test automation built into every stage of the software development lifecycle.",
    tags: ["QA", "RELEASE", "AUTOMATION"],
    heroImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Test Automation Frameworks",
        body: "Automated unit, integration, and end to end test suites that catch regressions before they reach production.",
      },
      {
        title: "CI/CD Pipeline Engineering",
        body: "Build, test, and deployment pipelines that give your team fast, reliable feedback on every commit.",
      },
      {
        title: "Performance & Load Testing",
        body: "Applications are tested under realistic and peak load conditions before launches and major releases, not after an incident.",
      },
      {
        title: "Release Management & Rollback Strategy",
        body: "Feature flags, canary releases, and rollback plans reduce the risk of every deployment reaching production.",
      },
    ],
    faqs: [
      {
        question: "Which testing and CI/CD tools does Starfii work with?",
        answer:
          "We work with tools like Jest, Cypress, Playwright, and Selenium for automated testing, and Jenkins, GitHub Actions, or GitLab CI for pipelines, adapting to what your team already uses.",
      },
      {
        question: "Can Starfii improve the test coverage of our existing product?",
        answer:
          "Yes. We start with a coverage audit to find critical untested paths, then prioritize automation where it reduces the most risk first.",
      },
      {
        question: "How much can CI/CD automation reduce our release cycle time?",
        answer:
          "Teams typically see release cycles shrink significantly once manual testing and deployment steps are automated. Exact gains depend on the maturity of your current process.",
      },
      {
        question: "Does Starfii support blue green and canary deployment strategies?",
        answer:
          "Yes. We design release strategies including blue green, canary, and feature flag rollouts based on your risk tolerance and infrastructure.",
      },
      {
        question: "Which types of testing does Starfii cover?",
        answer:
          "We cover unit, integration, end to end, and performance and load testing, so quality is checked at every level before release.",
      },
      {
        question: "How does Starfii reduce risk during production releases?",
        answer:
          "We use feature flags, canary releases, and rollback plans so changes reach users gradually and can be reversed quickly if something goes wrong.",
      },
      {
        question: "Can Starfii set up CI/CD pipelines for our team from scratch?",
        answer:
          "Yes. We build pipelines that run build, test, and deployment steps on every commit, giving your team fast, reliable feedback, and we integrate with the tools you already use.",
      },
    ],
  },
];

export function getCapabilityBySlug(slug: string): Capability | undefined {
  return capabilities.find((c) => c.slug === slug);
}
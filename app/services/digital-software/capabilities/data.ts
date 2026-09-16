// Shared data source for Software & Product Engineering capabilities.
// Used by:
//   - app/services/digital-software/page.tsx        (the capability grid)
//   - app/services/digital-software/capabilities/[slug]/page.tsx  (detail page)
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
        question: "How long does a typical UI/UX engagement take?",
        answer:
          "Most engagements run 6 to 12 weeks depending on scope, covering research, wireframes, high fidelity design, and a design system handoff to engineering.",
      },
      {
        question: "Do you work with our existing design system?",
        answer:
          "Yes. We can extend an existing design system or build a new one from scratch, whichever gets your product to market faster without rework.",
      },
      {
        question: "Do you also build the front end, or only design it?",
        answer:
          "Both. Our UI/UX team typically pairs with our web and mobile application development teams so the final build matches the design pixel for pixel.",
      },
      {
        question: "Can you audit our current product's usability?",
        answer:
          "Yes, we offer standalone UX audits that surface friction points, accessibility gaps, and quick wins before committing to a full redesign.",
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
        question: "What frameworks do you build with?",
        answer:
          "We primarily build with React and Next.js, and adapt to your existing stack (Vue, Angular, or a legacy framework) when a rebuild isn't the right first step.",
      },
      {
        question: "Can you take over an existing web application?",
        answer:
          "Yes. We regularly onboard onto existing codebases, run a technical audit first, then plan improvements alongside new feature delivery.",
      },
      {
        question: "Do you handle hosting and deployment?",
        answer:
          "We set up CI/CD pipelines and can deploy to your preferred cloud provider (AWS, Azure, GCP, or Vercel) with monitoring built in from day one.",
      },
      {
        question: "How do you ensure the app scales as traffic grows?",
        answer:
          "We design with caching, code splitting, and horizontal scaling in mind from the start, and load test before major launches.",
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
        question: "Native or cross platform, which is right for us?",
        answer:
          "If your app needs deep hardware access or platform specific performance, native is worth it. Otherwise cross platform gets you to both stores faster at lower cost. We'll recommend based on your requirements.",
      },
      {
        question: "Do you support push notifications and in app purchases?",
        answer:
          "Yes, including Firebase Cloud Messaging, Apple Push Notification service, and subscription or one time purchase flows through both app stores.",
      },
      {
        question: "Can you maintain an app after launch?",
        answer:
          "Yes, we offer ongoing maintenance plans covering OS updates, bug fixes, and new feature development post launch.",
      },
      {
        question: "How do you handle app store rejections?",
        answer:
          "We build against current App Store and Play Store guidelines from day one, and our release management process handles resubmissions quickly if they occur.",
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
        question: "What languages and frameworks do you use on the backend?",
        answer:
          "Most commonly Node.js, Python, and Java/Spring, chosen based on your team's existing stack and the performance profile the workload needs.",
      },
      {
        question: "Can you help us move from a monolith to microservices?",
        answer:
          "Yes. We typically use the strangler fig pattern, carving out services incrementally so the monolith keeps running while we migrate.",
      },
      {
        question: "How do you approach database scaling?",
        answer:
          "We start with indexing and query optimization, then introduce read replicas, sharding, or caching layers only once the data justifies them.",
      },
      {
        question: "Do you provide on call support after launch?",
        answer:
          "We can set up your team's on call rotation and runbooks, or provide managed support ourselves under a support retainer.",
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
        question: "Can you integrate with our existing CRM or ERP?",
        answer:
          "Yes, we've built integrations with Salesforce, HubSpot, SAP, and many other enterprise platforms, using their official APIs or middleware where needed.",
      },
      {
        question: "How do you handle API versioning?",
        answer:
          "We design a versioning strategy up front (usually URL or header based) so consumers can migrate on their own schedule without breaking changes.",
      },
      {
        question: "What about API security?",
        answer:
          "OAuth 2.0, API keys, rate limiting, and request validation are standard on every API layer we build.",
      },
      {
        question: "Can you document APIs for external partners?",
        answer:
          "Yes, we produce OpenAPI/Swagger specs and interactive documentation so partner teams can self serve integration without back and forth.",
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
        question: "What's the difference between single tenant and multi tenant?",
        answer:
          "Multi tenant shares infrastructure across customers to reduce cost per customer; single tenant isolates each customer fully, often for compliance reasons. We help you choose based on your customer base and regulatory needs.",
      },
      {
        question: "Can you help us achieve SOC 2 or HIPAA compliance?",
        answer:
          "Yes, we design architecture with compliance controls built in and can support your audit process with the documentation and evidence auditors require.",
      },
      {
        question: "How do you handle SaaS pricing and billing logic?",
        answer:
          "We integrate metered and subscription billing through Stripe or Chargebee, handling trials, upgrades, downgrades, and dunning management.",
      },
      {
        question: "Do you have experience with Fortune 500 scale SaaS?",
        answer:
          "Yes, our SaaS engineering team has shipped production SaaS platforms for Fortune 500 customers across fintech, healthcare, and e commerce.",
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
        question: "How do you manage enterprise scale projects?",
        answer:
          "We use structured delivery frameworks with clear milestones, stakeholder checkpoints, and dedicated program management for every enterprise engagement.",
      },
      {
        question: "Can you integrate with our existing enterprise systems?",
        answer:
          "Yes, we regularly integrate with SAP, Oracle, Salesforce, and custom internal systems as part of enterprise application delivery.",
      },
      {
        question: "What does 'AI driven engineering' actually mean here?",
        answer:
          "We use AI assisted coding, testing, and code review tools to speed up delivery, while senior engineers maintain full oversight of architecture and quality.",
      },
      {
        question: "How do you handle enterprise security and compliance?",
        answer:
          "Enterprise SSO, RBAC, audit logging, and compliance requirements (SOC 2, ISO 27001, etc.) are scoped in during the discovery phase, not bolted on later.",
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
        question: "How do you minimize disruption during modernization?",
        answer:
          "We run the legacy and modernized systems in parallel where possible, migrating in phases so business operations are never interrupted for an extended period.",
      },
      {
        question: "What if our legacy system has no documentation?",
        answer:
          "Our assessment phase includes reverse engineering the existing system's behavior through code review and stakeholder interviews before planning the migration.",
      },
      {
        question: "How long does a typical modernization project take?",
        answer:
          "It depends heavily on system complexity, but most engagements run from 3 months for a focused re-platform to 12+ months for a full enterprise modernization.",
      },
      {
        question: "Do you migrate data as well as code?",
        answer:
          "Yes, data migration, validation, and reconciliation are built into every modernization roadmap to make sure nothing is lost in the transition.",
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
        question: "What testing tools do you use?",
        answer:
          "We work with tools like Jest, Cypress, Playwright, and Selenium for automated testing, and Jenkins, GitHub Actions, or GitLab CI for pipelines, adapting to what your team already uses.",
      },
      {
        question: "Can you improve our existing test coverage?",
        answer:
          "Yes, we start with a coverage audit to find critical untested paths, then prioritize automation where it reduces the most risk first.",
      },
      {
        question: "How much can CI/CD automation cut our release time?",
        answer:
          "Teams typically see release cycles shrink significantly once manual testing and deployment steps are automated. Exact gains depend on your current process maturity.",
      },
      {
        question: "Do you support blue-green or canary deployments?",
        answer:
          "Yes, we design release strategies including blue-green, canary, and feature flag rollouts based on your risk tolerance and infrastructure.",
      },
    ],
  },
];

export function getCapabilityBySlug(slug: string): Capability | undefined {
  return capabilities.find((c) => c.slug === slug);
}
// Shared data source for Cloud Engineering capabilities.
// Used by:
//   - app/services/cloud/page.tsx                          (the capability grid / focus areas)
//   - app/services/cloud/capabilities/[slug]/page.tsx      (detail page)
//
// Keeping one source of truth means the grid card and its "Learn More"
// destination can never drift out of sync with each other.
//
// Slugs below match exactly what CloudServicesSection.tsx already
// generates for each focus area card via:
//   area.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
// so existing "Learn More" links on the main Cloud page resolve correctly.
//
// Structure is identical to app/services/data-analytics/capabilities/data.ts
// and app/services/software-product/capabilities/data.ts on purpose, so the
// [slug]/page.tsx, FaqAccordion, Reveal and OtherCapabilities components can
// be reused unchanged across all three services.

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
    slug: "cloud-architecture-design",
    title: "Cloud Architecture & Design",
    body: "Starfii designs well architected cloud blueprints across AWS, Azure, and GCP, covering landing zones, networking, and account structure before a single workload moves.",
    tags: ["ARCHITECTURE", "LANDING ZONES", "WELL-ARCHITECTED"],
    heroImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Landing Zone & Account Design",
        body: "We define account structure, networking, and governance guardrails up front, so every workload that lands in the cloud has a consistent foundation.",
      },
      {
        title: "Multi Cloud & Hybrid Blueprints",
        body: "Architecture is designed across AWS, Azure, and GCP, or alongside on premise systems, based on where each workload actually performs best.",
      },
      {
        title: "Identity, Network & Data Placement",
        body: "We plan how users and services access resources, how environments are separated, and where data should reside for performance and compliance.",
      },
      {
        title: "Built for Long Term Scale",
        body: "Standards for naming, connectivity, monitoring, and disaster recovery are set early, so growth follows proven patterns instead of one off decisions.",
      },
    ],
    faqs: [
      {
        question: "What does a cloud architecture engagement with Starfii include?",
        answer:
          "We assess your workloads and requirements, then design landing zones, network topology, and account structure across AWS, Azure, or GCP before any migration begins.",
      },
      {
        question: "Can Starfii design for multi cloud or hybrid environments?",
        answer:
          "Yes. We design architecture that spans more than one cloud provider, or connects cloud and on premise systems, when your workloads call for it.",
      },
      {
        question: "How does Starfii prevent architectural drift as we grow?",
        answer:
          "We establish clear standards for resource organization, naming, and access up front, so new teams and applications follow the same proven patterns.",
      },
      {
        question: "Does cloud architecture planning slow down our migration timeline?",
        answer:
          "No. Architecture decisions are made early and deliberately so later migration and build phases move faster with fewer redesigns.",
      },
    ],
  },
  {
    slug: "cloud-migration-services",
    title: "Cloud Migration Services",
    body: "Starfii assesses workloads, sequences the migration plan around business risk, and moves systems to AWS, Azure, or GCP with minimal disruption to day to day operations.",
    tags: ["AWS", "AZURE", "GCP"],
    heroImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Workload Assessment & Prioritization",
        body: "Each application is evaluated to determine whether it should be rehosted, replatformed, refactored, retired, or retained.",
      },
      {
        title: "Risk Sequenced Migration Waves",
        body: "Migration waves are planned around business risk and dependencies, so teams learn from early moves before tackling complex systems.",
      },
      {
        title: "Dependency & Data Mapping",
        body: "We map application dependencies and flag systems that need special handling due to sensitivity, licensing, or integration complexity.",
      },
      {
        title: "Operational Readiness Built In",
        body: "Network, identity, backup, and monitoring readiness are planned as part of the migration, not treated as afterthoughts.",
      },
    ],
    faqs: [
      {
        question: "How does Starfii decide the order workloads should migrate in?",
        answer:
          "We sequence migration waves around business risk and technical dependencies, starting with practical workloads before moving to more complex systems.",
      },
      {
        question: "Can Starfii migrate us without downtime to critical systems?",
        answer:
          "Yes. We plan validation, rollback, and testing steps into every wave, and often run source and target systems in parallel during cutover.",
      },
      {
        question: "Does Starfii handle rehosting as well as re-architecting workloads?",
        answer:
          "Yes. Every application is assessed individually to determine whether it should be rehosted, replatformed, refactored, retired, or retained.",
      },
      {
        question: "How does Starfii handle data transfer during migration?",
        answer:
          "Data transfer, backup, and disaster recovery are planned as part of the migration roadmap itself, alongside network and identity readiness.",
      },
    ],
  },
  {
    slug: "cloud-modernization",
    title: "Cloud Modernization",
    body: "Starfii refactors legacy monoliths into modular, cloud ready services, replacing brittle infrastructure with architecture that scales cleanly as the business grows.",
    tags: ["MODERNIZATION", "REFACTORING", "LEGACY SYSTEMS"],
    heroImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Legacy Application Assessment",
        body: "We assess legacy architectures, databases, and deployment processes to determine where modernization delivers real value.",
      },
      {
        title: "Containers, Microservices & Serverless",
        body: "Applications are refactored using the patterns that fit, containers, microservices, or serverless, rather than one default approach.",
      },
      {
        title: "Staged Modernization Roadmaps",
        body: "Large changes are broken into manageable stages so modernization maintains business continuity throughout the transition.",
      },
      {
        title: "Right Sized Modernization",
        body: "Not every workload needs a rebuild. We avoid unnecessary complexity when a simpler migration already delivers the outcome you need.",
      },
    ],
    faqs: [
      {
        question: "Does every legacy application need to be rebuilt?",
        answer:
          "No. We assess each application individually and only recommend modernization where it delivers measurable business or technical value.",
      },
      {
        question: "What architectural patterns does Starfii use for modernization?",
        answer:
          "We refactor using containers, microservices, managed services, APIs, and serverless technologies, chosen based on what actually improves scalability and resilience.",
      },
      {
        question: "How does Starfii avoid disrupting the business during modernization?",
        answer:
          "We break large modernization efforts into staged roadmaps with clear milestones, so business continuity is maintained throughout the transformation.",
      },
      {
        question: "Can modernization happen alongside an ongoing cloud migration?",
        answer:
          "Yes. We often use migration as the opportunity to modernize the applications that will benefit most, rather than treating them as separate projects.",
      },
    ],
  },
  {
    slug: "cloud-native-application-development",
    title: "Cloud Native Application Development",
    body: "As a cloud native application development company, Starfii builds with containers, microservices, and serverless architecture where they deliver the most value, not by default.",
    tags: ["CONTAINERS", "MICROSERVICES", "SERVERLESS"],
    heroImage:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Container & Microservice Architecture",
        body: "Applications are decomposed into services that scale, deploy, and fail independently, so one component's issue doesn't take down the whole system.",
      },
      {
        title: "Serverless Where It Fits",
        body: "Event driven and serverless patterns are used where they reduce operational overhead, not applied as a default architectural choice.",
      },
      {
        title: "Elastic, Fault Tolerant by Design",
        body: "Applications are built to make use of elastic compute, managed databases, and automated scaling from the start.",
      },
      {
        title: "API & Event Driven Integration",
        body: "Services communicate through well defined APIs and event driven patterns, keeping the system loosely coupled as it grows.",
      },
    ],
    faqs: [
      {
        question: "What makes an application 'cloud native' rather than just cloud hosted?",
        answer:
          "A cloud native application is architected to use elastic compute, managed services, and automated scaling natively, not just relocated onto cloud infrastructure.",
      },
      {
        question: "Does Starfii always default to microservices and containers?",
        answer:
          "No. We choose containers, microservices, or serverless based on where they deliver real value for a given workload, not as a default pattern.",
      },
      {
        question: "Can Starfii build cloud native applications alongside an existing platform?",
        answer:
          "Yes. New cloud native services can be built to integrate with your existing systems through APIs and event driven interfaces.",
      },
      {
        question: "How does cloud native architecture improve reliability?",
        answer:
          "Decomposed services fail independently and scale elastically, so issues in one component are far less likely to affect the whole application.",
      },
    ],
  },
  {
    slug: "devops-engineering",
    title: "DevOps Engineering",
    body: "Starfii embeds DevOps practices across development and operations teams, aligning tooling, culture, and workflows so releases move faster without added risk.",
    tags: ["DEVOPS", "COLLABORATION", "AUTOMATION"],
    heroImage:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Shared Tooling & Workflows",
        body: "Development, infrastructure, and operations teams work from aligned tooling and workflows, reducing handoff friction between releases.",
      },
      {
        title: "Culture & Process Alignment",
        body: "We help teams adopt DevOps practices gradually, matching process changes to how your organization actually works.",
      },
      {
        title: "Automation First Mindset",
        body: "Repetitive manual steps are identified and automated, freeing engineers to focus on building rather than babysitting releases.",
      },
      {
        title: "Cross Team Visibility",
        body: "Shared dashboards and communication practices keep development and operations aligned on the same release goals.",
      },
    ],
    faqs: [
      {
        question: "How does Starfii introduce DevOps practices to a team that hasn't used them before?",
        answer:
          "We introduce shared tooling, workflows, and automation gradually, matching the pace of change to how your teams currently operate.",
      },
      {
        question: "Does DevOps engineering require a specific toolchain?",
        answer:
          "No. We adapt to your existing tools where possible and only recommend new tooling where it clearly improves collaboration or release speed.",
      },
      {
        question: "Can Starfii help unify development and operations without a full reorganization?",
        answer:
          "Yes. Most engagements start with shared tooling and process alignment rather than requiring structural changes to your teams.",
      },
      {
        question: "How does Starfii measure whether DevOps adoption is working?",
        answer:
          "We track release frequency, lead time, and failure rate, so improvements in collaboration and automation are visible, not just assumed.",
      },
    ],
  },
  {
    slug: "ci-cd-pipeline-automation",
    title: "CI/CD Pipeline Automation",
    body: "Starfii builds automated CI/CD pipelines that get code to production faster and safer, with testing, monitoring, and rollback built into every release.",
    tags: ["CI/CD", "TESTING", "RELEASE MANAGEMENT"],
    heroImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Automated Build & Test Pipelines",
        body: "Source validation, compilation, testing, and security checks are automated across development, staging, and production.",
      },
      {
        title: "Deployment Strategies That Fit",
        body: "Rolling releases, blue-green deployments, and canary releases are used where they reduce risk for a given application.",
      },
      {
        title: "Automated Rollback",
        body: "Releases are monitored against expected behavior, with automated rollback available when a deployment doesn't perform as expected.",
      },
      {
        title: "Consistent Environment Configuration",
        body: "Configuration is standardized across environments, so what passes in staging behaves the same way in production.",
      },
    ],
    faqs: [
      {
        question: "What testing gets built into a Starfii CI/CD pipeline?",
        answer:
          "We incorporate automated testing, security checks, and validation steps directly into the pipeline, so issues surface before code reaches production.",
      },
      {
        question: "Can Starfii set up canary or blue-green deployments?",
        answer:
          "Yes. We use rolling, blue-green, or canary deployment strategies depending on which best reduces risk for a given application and traffic pattern.",
      },
      {
        question: "How does Starfii handle a release that fails in production?",
        answer:
          "Automated rollback and release validation are built into the pipeline, so a failing deployment can be reverted quickly with minimal manual intervention.",
      },
      {
        question: "Does CI/CD automation work with our existing source control and tooling?",
        answer:
          "Yes. We build pipelines around your existing source control, artifact management, and deployment tooling wherever possible.",
      },
    ],
  },
  {
    slug: "infrastructure-automation-iac",
    title: "Infrastructure Automation & IaC",
    body: "Starfii provisions cloud infrastructure as code with Terraform and native tooling, so environments stay consistent, version controlled, and repeatable across every stage.",
    tags: ["TERRAFORM", "IaC", "CONFIGURATION"],
    heroImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Terraform & Native Tooling",
        body: "Networking, compute, storage, and security controls are codified using Terraform and native cloud tooling so environments deploy consistently.",
      },
      {
        title: "Version Controlled Infrastructure",
        body: "Infrastructure changes are tracked in version control, so every change is reviewable, auditable, and reversible when needed.",
      },
      {
        title: "Reusable Modules",
        body: "We build reusable infrastructure modules and patterns, so teams can spin up new environments without rebuilding from scratch.",
      },
      {
        title: "Automated Configuration Validation",
        body: "Validation checks catch misconfigurations before they reach production, reducing drift between development, staging, and live environments.",
      },
    ],
    faqs: [
      {
        question: "Why use Infrastructure as Code instead of manual provisioning?",
        answer:
          "IaC makes environments consistent, repeatable, and auditable, so provisioning doesn't depend on one engineer remembering every manual step.",
      },
      {
        question: "Does Starfii use Terraform or native cloud provisioning tools?",
        answer:
          "We typically use Terraform alongside native cloud tooling, choosing based on your existing stack and multi cloud requirements.",
      },
      {
        question: "How does IaC reduce configuration drift across environments?",
        answer:
          "Because environments are provisioned from the same codified definitions, development, staging, and production stay consistent by default.",
      },
      {
        question: "Can Starfii convert our existing manually managed infrastructure to IaC?",
        answer:
          "Yes. We assess current infrastructure and migrate it into version controlled, reusable modules without disrupting running environments.",
      },
    ],
  },
  {
    slug: "monitoring-observability",
    title: "Monitoring & Observability",
    body: "Starfii instruments applications and infrastructure with unified metrics, logs, and traces, giving teams the visibility to catch issues before they become incidents.",
    tags: ["OBSERVABILITY", "METRICS", "ALERTING"],
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Unified Metrics, Logs & Traces",
        body: "Metrics, logs, and distributed traces are brought together into a single view, so engineers aren't piecing together isolated data sources.",
      },
      {
        title: "Meaningful, Low Noise Alerting",
        body: "Alert thresholds are defined around what actually matters, so on call teams act on real signals instead of alert fatigue.",
      },
      {
        title: "Dependency Mapping",
        body: "Application and infrastructure dependencies are mapped, so teams quickly understand how an issue in one component affects another.",
      },
      {
        title: "Escalation & Incident Workflows",
        body: "Clear escalation paths and incident response workflows mean teams know exactly what to do when a critical condition fires.",
      },
    ],
    faqs: [
      {
        question: "How does Starfii reduce alert fatigue for on call teams?",
        answer:
          "We define meaningful thresholds and service level indicators around what actually matters, rather than alerting on every possible signal.",
      },
      {
        question: "What observability data does Starfii bring together?",
        answer:
          "We unify metrics, logs, distributed traces, and infrastructure signals into a single view, so investigations don't require switching between tools.",
      },
      {
        question: "Can Starfii set up observability across multiple cloud providers?",
        answer:
          "Yes. We design observability to span AWS, Azure, and GCP where your workloads are distributed across more than one provider.",
      },
      {
        question: "How does observability data help beyond just catching incidents?",
        answer:
          "Over time, the same data reveals recurring problems, capacity trends, and performance bottlenecks, informing longer term optimization work.",
      },
    ],
  },
  {
    slug: "cloud-security-compliance",
    title: "Cloud Security & Compliance",
    body: "Starfii's cloud security consulting builds identity, network, and compliance controls into your environment from day one, so infrastructure growth never outpaces data protection.",
    tags: ["SECURITY", "COMPLIANCE", "IAM"],
    heroImage:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Least Privilege Identity & Access",
        body: "Identity and access management is designed around least privilege and role separation, so permissions match actual responsibilities.",
      },
      {
        title: "Network Segmentation & Trust Boundaries",
        body: "Network security is designed with clear segmentation, private connectivity, and controlled ingress and egress.",
      },
      {
        title: "Encryption & Secrets Management",
        body: "Encryption, secrets management, and security monitoring are built in according to the sensitivity of each workload.",
      },
      {
        title: "Compliance Mapped Controls",
        body: "Security controls are mapped to the compliance requirements relevant to your industry, supporting the documentation auditors need.",
      },
    ],
    faqs: [
      {
        question: "Does Starfii build security in from the start, or as a later add-on?",
        answer:
          "Security controls are embedded into architecture, infrastructure, and delivery pipelines from the beginning, not treated as a final review step.",
      },
      {
        question: "Can Starfii help us meet SOC 2 or industry specific compliance requirements?",
        answer:
          "Yes. We map security controls to the compliance requirements relevant to your industry and support the documentation auditors typically require.",
      },
      {
        question: "How does Starfii balance security controls with developer productivity?",
        answer:
          "Security policies are integrated into IaC and CI/CD workflows, so protection is applied consistently without unnecessarily slowing development.",
      },
      {
        question: "What identity and access patterns does Starfii typically implement?",
        answer:
          "We design around least privilege and role separation, so workload and user permissions match exactly what's needed and nothing more.",
      },
    ],
  },
  {
    slug: "finops-cloud-cost-optimization",
    title: "FinOps & Cloud Cost Optimization",
    body: "Starfii monitors and tunes cloud spend continuously through FinOps best practices, keeping infrastructure costs predictable as usage scales across every environment.",
    tags: ["FINOPS", "COST", "OPTIMIZATION"],
    heroImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Continuous Cost Visibility",
        body: "Cloud spend is tracked and attributed across teams and workloads, so cost ownership is clear rather than buried in a single bill.",
      },
      {
        title: "Right Sizing & Waste Reduction",
        body: "We identify idle and oversized resources and right size compute and storage without affecting performance or reliability.",
      },
      {
        title: "Forecasting & Budget Alerts",
        body: "Usage trends inform cost forecasts, with alerts configured so spend spikes are caught early, not discovered at the end of the month.",
      },
      {
        title: "FinOps Practices Embedded in Delivery",
        body: "Cost awareness is built into architecture and deployment decisions, so efficiency doesn't require a separate cleanup project later.",
      },
    ],
    faqs: [
      {
        question: "How much can FinOps typically reduce cloud spend?",
        answer:
          "Engagements vary, but identifying idle resources and right sizing compute and storage commonly reduces cloud spend by 25 to 35 percent.",
      },
      {
        question: "Does cost optimization risk affecting performance or uptime?",
        answer:
          "No. Right sizing and waste reduction are validated against real usage patterns, so cost savings don't come at the expense of reliability.",
      },
      {
        question: "How does Starfii keep cloud costs predictable as usage grows?",
        answer:
          "We build cost forecasting and budget alerting into ongoing operations, so spend trends are visible well before they become a surprise.",
      },
      {
        question: "Can FinOps be applied across a multi cloud environment?",
        answer:
          "Yes. We track and optimize spend across AWS, Azure, and GCP together, rather than treating each provider's cost in isolation.",
      },
    ],
  },
  {
    slug: "kubernetes-container-orchestration",
    title: "Kubernetes & Container Orchestration",
    body: "Starfii designs and operates Kubernetes clusters across AWS, Azure, and GCP, giving containerized workloads consistent scaling, deployment, and recovery wherever they run.",
    tags: ["KUBERNETES", "EKS/AKS/GKE", "ORCHESTRATION"],
    heroImage:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Managed Kubernetes Design",
        body: "Clusters on EKS, AKS, or GKE are designed with networking, node scaling, and workload isolation matched to your traffic patterns.",
      },
      {
        title: "Consistent Multi Cluster Operations",
        body: "Deployment, scaling, and recovery behave consistently whether workloads run on one cluster or span multiple regions and providers.",
      },
      {
        title: "Autoscaling & Self Healing",
        body: "Pods and nodes scale automatically with demand, and failed workloads recover without manual intervention.",
      },
      {
        title: "GitOps Deployment Workflows",
        body: "Deployments are managed through version controlled manifests, keeping cluster state predictable and auditable.",
      },
    ],
    faqs: [
      {
        question: "Which managed Kubernetes services does Starfii work with?",
        answer:
          "We design and operate clusters on EKS, AKS, and GKE, choosing the provider based on your existing cloud footprint and workload needs.",
      },
      {
        question: "Can Starfii manage Kubernetes across multiple clusters or regions?",
        answer:
          "Yes. We design multi cluster operations so scaling, deployment, and recovery behave consistently regardless of region or provider.",
      },
      {
        question: "Does Starfii set up autoscaling for Kubernetes workloads?",
        answer:
          "Yes. We configure pod and node autoscaling so capacity adjusts automatically to demand rather than requiring manual resizing.",
      },
      {
        question: "How does Starfii keep Kubernetes deployments auditable?",
        answer:
          "We implement GitOps workflows so deployments are driven by version controlled manifests, keeping cluster state predictable and reviewable.",
      },
    ],
  },
  {
    slug: "cloud-managed-services",
    title: "Cloud Managed Services",
    body: "Starfii's managed services team monitors, patches, and optimizes your cloud environment around the clock, so internal teams stay focused on building product, not babysitting infrastructure.",
    tags: ["MANAGED", "SUPPORT", "OPERATIONS"],
    heroImage:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Round the Clock Monitoring",
        body: "Cloud environments are monitored continuously across AWS, Azure, and GCP, covering health, performance, availability, and capacity.",
      },
      {
        title: "Patching & Operational Maintenance",
        body: "Routine patching, backups, and operational changes are handled proactively, reducing the maintenance burden on internal teams.",
      },
      {
        title: "SRE Led Incident Response",
        body: "Incidents are triaged and resolved by an SRE led team, with lessons captured to reduce the chance of recurrence.",
      },
      {
        title: "Ongoing Optimization Reviews",
        body: "Regular reviews surface underutilized resources, configuration issues, and cost or performance opportunities as the environment evolves.",
      },
    ],
    faqs: [
      {
        question: "What does Starfii's cloud managed services cover day to day?",
        answer:
          "We monitor infrastructure health, performance, and capacity, handle patching and backups, and manage operational changes across your cloud estate.",
      },
      {
        question: "How does Starfii handle incidents outside business hours?",
        answer:
          "Our SRE led operations team monitors environments around the clock and follows established incident response processes regardless of when an issue occurs.",
      },
      {
        question: "Does Starfii only respond to issues, or also look for improvements?",
        answer:
          "Both. Alongside monitoring and incident response, we run regular operational reviews to catch optimization opportunities before they become problems.",
      },
      {
        question: "Can managed services scale as we add more cloud accounts or workloads?",
        answer:
          "Yes. We maintain consistent operational standards across accounts and environments, so management doesn't fragment as your footprint grows.",
      },
    ],
  },
];


export function getCapabilityBySlug(slug: string): Capability | undefined {
  return capabilities.find((c) => c.slug === slug);

  
}
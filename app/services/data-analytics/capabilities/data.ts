// Shared data source for Data & Analytics capabilities.
// Used by:
//   - app/services/data-analytics/page.tsx                       (the capability grid / focus areas)
//   - app/services/data-analytics/capabilities/[slug]/page.tsx   (detail page)
//
// Keeping one source of truth means the grid card and its "Learn More"
// destination can never drift out of sync with each other.
// Structure is identical to app/services/software-product/capabilities/data.ts
// on purpose, so the [slug]/page.tsx, FaqAccordion, Reveal and
// OtherCapabilities components can be reused unchanged across both services.

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
    slug: "data-engineering",
    title: "Data Engineering",
    body: "Starfii's certified data engineers design and build resilient pipelines and data platforms, so every downstream system works from clean, timely, well governed data.",
    tags: ["PIPELINES", "ETL", "ORCHESTRATION"],
    heroImage:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Batch, Streaming & Near Real Time Pipelines",
        body: "We build ingestion and transformation pipelines that fit the latency your use case actually needs, from nightly batch to streaming.",
      },
      {
        title: "Automated Validation & Monitoring",
        body: "Data quality checks and pipeline monitoring catch failures and drift before they reach dashboards or downstream systems.",
      },
      {
        title: "Schema Evolution & Recovery",
        body: "Pipelines are designed for changing schemas, new sources, retries, and recovery, so one upstream change doesn't break the whole flow.",
      },
      {
        title: "Scalable Processing Frameworks",
        body: "We work with Spark, dbt, Airflow, and cloud native services, choosing the stack that matches your data volume and team.",
      },
    ],
    faqs: [
      {
        question: "Which data engineering tools and frameworks does Starfii use?",
        answer:
          "We commonly work with Spark, dbt, Airflow, and Kafka, along with native services on AWS, Azure, and GCP, chosen based on your existing stack and data volumes.",
      },
      {
        question: "Can Starfii take over and stabilize our existing pipelines?",
        answer:
          "Yes. We start with an audit of your current pipelines to find fragile jobs and silent failures, then stabilize and modernize them alongside new development.",
      },
      {
        question: "How does Starfii handle pipeline failures in production?",
        answer:
          "We build monitoring, alerting, and automated retries into every pipeline, so failures are caught and, where possible, resolved before anyone downstream notices.",
      },
      {
        question: "Can Starfii support both batch and streaming data needs?",
        answer:
          "Yes. We design pipelines around the latency your use case needs, mixing batch, micro batch, and streaming within the same platform where required.",
      },
    ],
  },
  {
    slug: "data-architecture",
    title: "Data Architecture",
    body: "Starfii designs the blueprints for how data flows, is stored, and is accessed across your organization, so every new source and pipeline fits a plan instead of adding to the sprawl.",
    tags: ["ARCHITECTURE", "DATA MODELING", "SCHEMA DESIGN"],
    heroImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "End to End Data Flow Design",
        body: "We map how data should move from source to storage to consumption, so every new pipeline has a clear place to fit.",
      },
      {
        title: "Data Modeling & Schema Strategy",
        body: "Relational, dimensional, and NoSQL models are designed around the access patterns your reporting and applications actually use.",
      },
      {
        title: "Storage & Access Layer Planning",
        body: "We define where data lives, how it's partitioned, and who can access it, balancing performance, cost, and governance.",
      },
      {
        title: "Future Proofed for Scale",
        body: "Architecture is planned with room for new sources, new use cases, and AI workloads, so growth doesn't force a redesign.",
      },
    ],
    faqs: [
      {
        question: "How does Starfii approach a new data architecture engagement?",
        answer:
          "We start by mapping your current sources, storage, and access patterns, then design a target architecture validated against your business and growth requirements.",
      },
      {
        question: "Can Starfii redesign our architecture without disrupting current reporting?",
        answer:
          "Yes. We plan transitions in phases, running old and new architecture in parallel where needed so existing reports keep working during the migration.",
      },
      {
        question: "Does Starfii design for future AI and machine learning use cases?",
        answer:
          "Yes. We plan storage, access, and governance with AI and ML workloads in mind from the start, so you don't need a separate architecture later.",
      },
      {
        question: "How does Starfii decide between relational, dimensional, and NoSQL models?",
        answer:
          "We base the choice on how the data will actually be queried and by whom, rather than defaulting to one modeling style for every use case.",
      },
    ],
  },
  {
    slug: "data-pipelines-orchestration",
    title: "Data Pipelines & Orchestration",
    body: "We build ingestion and transformation pipelines with automated orchestration and monitoring, so data lands where it is needed, on schedule, without manual babysitting.",
    tags: ["ORCHESTRATION", "INGESTION", "ETL/ELT"],
    heroImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Workflow Orchestration",
        body: "Airflow and cloud native orchestrators sequence and schedule your pipelines, with dependencies and retries handled automatically.",
      },
      {
        title: "ETL & ELT Pipeline Design",
        body: "We choose the right pattern for each source, extracting, transforming, and loading data in the order that fits your platform.",
      },
      {
        title: "Ingestion from Any Source",
        body: "APIs, databases, files, and event streams are all connected into a single, consistently orchestrated ingestion layer.",
      },
      {
        title: "Alerting & SLA Monitoring",
        body: "Pipelines are monitored against data freshness and completeness SLAs, with alerts firing before a missed run becomes a business problem.",
      },
    ],
    faqs: [
      {
        question: "What orchestration tools does Starfii typically implement?",
        answer:
          "We most often use Airflow, Dagster, or native cloud orchestrators, chosen based on your team's existing skills and infrastructure.",
      },
      {
        question: "Can Starfii orchestrate pipelines across multiple cloud providers?",
        answer:
          "Yes. We design orchestration layers that can trigger and monitor jobs across AWS, Azure, and GCP when your data estate spans more than one cloud.",
      },
      {
        question: "How does Starfii prevent pipeline failures from going unnoticed?",
        answer:
          "We set data freshness and completeness SLAs on every pipeline and wire alerting so failures are flagged immediately, not discovered in a downstream report.",
      },
      {
        question: "Does Starfii support both ETL and ELT patterns?",
        answer:
          "Yes. We choose ETL or ELT per source based on where transformation makes the most sense for performance, cost, and your target platform.",
      },
    ],
  },
  {
    slug: "cloud-data-platforms",
    title: "Cloud Data Platforms",
    body: "Starfii architects and migrates data estates onto modern cloud data platforms on AWS, Azure, and GCP, built for scale, cost control, and near real time access.",
    tags: ["AWS", "AZURE", "GCP"],
    heroImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Multi Cloud Platform Design",
        body: "We select and combine storage, compute, warehouse, and analytics services across AWS, Azure, and GCP based on your workloads.",
      },
      {
        title: "Cost Aware Architecture",
        body: "Platforms are designed with cost, performance, and scalability considered together, so usage growth doesn't quietly inflate your bill.",
      },
      {
        title: "Near Real Time Access",
        body: "Data lands and is queryable close to real time where the business needs it, without over-engineering pipelines that don't.",
      },
      {
        title: "AI & Analytics Ready Foundations",
        body: "Platforms are built to support future analytics, machine learning, and AI workloads without a major re-architecture later.",
      },
    ],
    faqs: [
      {
        question: "How does Starfii decide between AWS, Azure, and GCP for a project?",
        answer:
          "We evaluate your workloads, existing infrastructure, security requirements, and team familiarity, then recommend the platform or combination that fits best.",
      },
      {
        question: "Can Starfii migrate our data platform without downtime?",
        answer:
          "Yes. We plan migrations in phases, often running source and target platforms in parallel, so reporting and applications keep running throughout.",
      },
      {
        question: "How does Starfii control cloud data platform costs as usage grows?",
        answer:
          "We design storage tiering, compute scaling, and query patterns with cost in mind from the start, and review usage regularly as the platform grows.",
      },
      {
        question: "Does Starfii support multi cloud or hybrid cloud data platforms?",
        answer:
          "Yes. When your data estate spans more than one provider or includes on premise systems, we design an architecture that connects them reliably.",
      },
    ],
  },
  {
    slug: "analytics-and-insights",
    title: "Data Analytics",
    body: "Starfii turns raw, siloed data into clear analysis, surfacing trends and answering the business questions teams actually ask.",
    tags: ["ANALYTICS", "SELF-SERVICE", "INSIGHTS"],
    heroImage:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Business Question Driven Analysis",
        body: "We start from the decision a team needs to make, then build the analysis that actually answers it, not a generic report.",
      },
      {
        title: "Self Service Analytics",
        body: "Curated, well documented datasets let business teams explore data on their own without waiting on a request queue.",
      },
      {
        title: "Trend & Root Cause Analysis",
        body: "We dig past the headline number to explain why a metric moved, so decisions are based on the cause, not just the symptom.",
      },
      {
        title: "Consistent Metric Definitions",
        body: "Shared, documented metric definitions mean two teams looking at 'revenue' or 'churn' are always looking at the same number.",
      },
    ],
    faqs: [
      {
        question: "How does Starfii approach a new analytics engagement?",
        answer:
          "We start by identifying the business questions and decisions the analysis needs to support, then work backward to the data and metrics required.",
      },
      {
        question: "Can Starfii enable self service analytics for business teams?",
        answer:
          "Yes. We curate and document datasets and metric definitions so business teams can explore and answer their own questions without engineering support.",
      },
      {
        question: "How does Starfii keep metric definitions consistent across teams?",
        answer:
          "We define and document metrics once in a shared layer, so every dashboard and report pulls from the same, agreed upon definition.",
      },
      {
        question: "Does Starfii help explain why a metric changed, not just report it?",
        answer:
          "Yes. Our analysis goes beyond the headline number to identify root causes and contributing factors behind a trend.",
      },
    ],
  },
  {
    slug: "business-intelligence-dashboards",
    title: "Business Intelligence & Dashboards",
    body: "We turn raw data into actionable business intelligence using Tableau and Power BI, so decision makers see what matters without digging for it.",
    tags: ["TABLEAU", "POWER BI", "DASHBOARDS"],
    heroImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Decision Focused Dashboard Design",
        body: "Dashboards are designed around the decision a team needs to make, not around every metric that happens to be available.",
      },
      {
        title: "Tableau & Power BI Development",
        body: "We build and maintain dashboards in the BI tool your organization already standardizes on, with clean, reusable data models underneath.",
      },
      {
        title: "Role Based Access & Drill Downs",
        body: "Executives get the summary view, analysts get the drill down, all from the same governed dataset with the right access controls.",
      },
      {
        title: "Automated Refresh & Alerting",
        body: "Dashboards refresh on a schedule that matches how the business uses them, with alerts for metrics that cross a threshold.",
      },
    ],
    faqs: [
      {
        question: "Does Starfii work with Tableau, Power BI, or both?",
        answer:
          "Both. We build and maintain dashboards in whichever tool your organization has standardized on, or help you choose one if you haven't yet.",
      },
      {
        question: "Can Starfii redesign dashboards that nobody actually opens?",
        answer:
          "Yes. We start by identifying the decisions the dashboard should support, then redesign around those instead of listing every available metric.",
      },
      {
        question: "How does Starfii handle different access needs across roles?",
        answer:
          "We build role based access and drill downs from a single governed dataset, so executives and analysts see the right level of detail.",
      },
      {
        question: "Can dashboards trigger alerts when a metric crosses a threshold?",
        answer:
          "Yes. We can configure automated alerting on key metrics so teams are notified proactively instead of discovering an issue during a review.",
      },
    ],
  },
  {
    slug: "data-science-advanced-analytics",
    title: "Data Science & Advanced Analytics",
    body: "Our data scientists build the models and surface the patterns behind better decisions, from demand forecasting to anomaly detection to product recommendation.",
    tags: ["ML", "FORECASTING", "STATISTICAL MODELING"],
    heroImage:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Forecasting & Demand Models",
        body: "Time series and regression models help teams anticipate demand, revenue, and capacity needs ahead of time, not after the fact.",
      },
      {
        title: "Anomaly & Fraud Detection",
        body: "Models trained on your transaction or usage data flag unusual patterns in near real time, before they become expensive problems.",
      },
      {
        title: "Recommendation & Personalization",
        body: "Recommendation models built on your product and customer data surface the next best action, offer, or content for each user.",
      },
      {
        title: "Model Validation & Monitoring",
        body: "Models are validated against real outcomes and monitored for drift, so performance doesn't quietly degrade as business conditions change.",
      },
    ],
    faqs: [
      {
        question: "What types of models does Starfii's data science team build?",
        answer:
          "Most commonly forecasting, anomaly detection, and recommendation models, built around a specific, measurable business problem rather than general experimentation.",
      },
      {
        question: "How does Starfii make sure models stay accurate over time?",
        answer:
          "We validate models against real outcomes and monitor for drift, retraining or adjusting when business conditions shift the data patterns.",
      },
      {
        question: "Can Starfii build models on top of our existing data platform?",
        answer:
          "Yes. We work with whatever governed data platform you already have, and can help prepare it further if the data isn't yet model ready.",
      },
      {
        question: "Does Starfii help deploy models into production, not just prototypes?",
        answer:
          "Yes. We take models from development through validation and deployment, so they run reliably in production rather than staying a one-off notebook.",
      },
    ],
  },
  {
    slug: "ai-ready-data",
    title: "AI-Ready Data",
    body: "Starfii prepares and governs enterprise data so it is clean, contextual, and safe for AI and LLM consumption, turning raw records into something models can actually reason over.",
    tags: ["AI-READY", "RAG", "DATA QUALITY"],
    heroImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Data Cleaning & Contextualization",
        body: "Raw records are cleaned, structured, and enriched with context, so AI systems reason over accurate, well framed information.",
      },
      {
        title: "RAG Pipeline Preparation",
        body: "We prepare and chunk enterprise content for retrieval augmented generation, so LLM answers stay grounded in your actual data.",
      },
      {
        title: "Access Controls for AI Workloads",
        body: "Governance and access controls extend into AI pipelines, so models only ever see the data a given user or system is allowed to see.",
      },
      {
        title: "Freshness Pipelines for AI",
        body: "Pipelines keep AI-facing data current as source systems change, so answers don't drift out of date behind the scenes.",
      },
    ],
    faqs: [
      {
        question: "What does making data 'AI-ready' actually involve?",
        answer:
          "It means cleaning, structuring, and contextualizing your data so AI and LLM systems can reason over it accurately, with governance and access controls carried through.",
      },
      {
        question: "Can Starfii prepare our data for a retrieval augmented generation setup?",
        answer:
          "Yes. We prepare and chunk enterprise content for RAG pipelines so LLM answers stay grounded in your governed data rather than the model's general knowledge.",
      },
      {
        question: "How does Starfii keep AI systems from accessing data they shouldn't?",
        answer:
          "We extend your existing governance and access controls into the AI pipeline, so models only surface data a given user or system is authorized to see.",
      },
      {
        question: "Does Starfii keep AI-facing data current as source systems change?",
        answer:
          "Yes. We build freshness pipelines so AI-facing datasets stay up to date and don't drift out of sync with the systems they're pulled from.",
      },
    ],
  },
  {
    slug: "data-modernization",
    title: "Data Modernization",
    body: "We move legacy warehouses and data marts onto modern cloud platforms with minimal disruption, closing the gap between old systems and new business demands.",
    tags: ["MIGRATION", "MODERNIZATION", "CLOUD"],
    heroImage:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Legacy Warehouse Assessment",
        body: "We assess existing warehouses, ETL jobs, and reporting dependencies to find where legacy technology is slowing the business down.",
      },
      {
        title: "Phased Migration Roadmap",
        body: "Migrations move in manageable stages, protecting critical reporting and reducing disruption to daily operations along the way.",
      },
      {
        title: "Pipeline Simplification",
        body: "Outdated, brittle ETL is simplified or replaced during the move, so you're not just relocating old problems to a new platform.",
      },
      {
        title: "Lakehouse & Modern Warehouse Migration",
        body: "We move workloads to modern cloud-native warehouses and lakehouse platforms built for today's analytics and AI workloads.",
      },
    ],
    faqs: [
      {
        question: "How does Starfii minimize disruption during a data modernization project?",
        answer:
          "We migrate in manageable stages, often running legacy and modern systems in parallel, so critical reporting keeps working throughout the transition.",
      },
      {
        question: "Does modernization mean just moving to the cloud, or improving pipelines too?",
        answer:
          "Both. We use the migration as an opportunity to simplify brittle ETL and remove unnecessary dependencies, not just relocate the same pipelines.",
      },
      {
        question: "How long does a typical data modernization project take?",
        answer:
          "It depends on the size of the estate, but most engagements run from a few months for a focused warehouse migration to a year or more for a full enterprise modernization.",
      },
      {
        question: "Can Starfii modernize our data platform without breaking existing dashboards?",
        answer:
          "Yes. We validate reporting against the new platform before cutover, and plan rollback options so dashboards teams rely on daily keep working.",
      },
    ],
  },
  {
    slug: "data-governance-quality",
    title: "Data Governance & Quality",
    body: "We put stewardship, lineage, and data quality checks in place so your enterprise data stays trustworthy as it moves across systems and teams.",
    tags: ["GOVERNANCE", "LINEAGE", "QUALITY"],
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Data Stewardship Programs",
        body: "Clear ownership and stewardship roles mean every dataset has someone accountable for its accuracy and definition.",
      },
      {
        title: "End to End Data Lineage",
        body: "Lineage tracking shows where data comes from and how it's transformed, so teams can trust and troubleshoot every number.",
      },
      {
        title: "Automated Data Quality Checks",
        body: "Validation rules run continuously across pipelines, catching quality issues before they reach a report or a model.",
      },
      {
        title: "Compliance Aligned Controls",
        body: "Governance controls are designed to align with the compliance requirements your industry and regulators expect.",
      },
    ],
    faqs: [
      {
        question: "How does Starfii establish data ownership across an organization?",
        answer:
          "We set up a stewardship program with clear owners for each key dataset, so there's always someone accountable for its accuracy and definition.",
      },
      {
        question: "What does data lineage actually give my team?",
        answer:
          "Lineage tracking shows exactly where a number came from and how it was transformed, making it much faster to trust or troubleshoot any report.",
      },
      {
        question: "Can Starfii support compliance requirements like SOC 2 or industry regulations?",
        answer:
          "Yes. We design governance controls aligned to the compliance requirements relevant to your industry and can support the documentation auditors need.",
      },
      {
        question: "How are data quality issues caught before they affect reporting?",
        answer:
          "We build automated validation rules directly into pipelines, so quality issues are flagged and addressed before they ever reach a dashboard or model.",
      },
    ],
  },
  {
    slug: "mdm-data-integration",
    title: "MDM & Data Integration",
    body: "We consolidate fragmented sources into a single, reliable master data record, so every team works from the same version of the truth.",
    tags: ["MDM", "INTEGRATION", "MASTER DATA"],
    heroImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Golden Record Creation",
        body: "Duplicate and conflicting records across systems are matched and merged into a single trusted master record.",
      },
      {
        title: "Cross System Integration",
        body: "CRM, ERP, and other business systems are integrated so master data stays consistent everywhere it's used.",
      },
      {
        title: "Match & Merge Rules",
        body: "Configurable matching logic identifies duplicate customers, products, or accounts, even when source data is messy.",
      },
      {
        title: "Ongoing Data Stewardship",
        body: "Stewardship workflows keep master data clean as new records are created, rather than letting drift creep back in over time.",
      },
    ],
    faqs: [
      {
        question: "What is a 'golden record' and how does Starfii create one?",
        answer:
          "A golden record is the single trusted version of a customer, product, or account, created by matching and merging duplicate or conflicting records across your systems.",
      },
      {
        question: "Which systems can Starfii integrate for master data management?",
        answer:
          "We commonly integrate CRM, ERP, and other core business systems, so the master record stays consistent everywhere it's referenced.",
      },
      {
        question: "How does Starfii handle messy or inconsistent source data during matching?",
        answer:
          "We configure match and merge rules tailored to your data, using fuzzy matching and business logic to catch duplicates that simple exact matching would miss.",
      },
      {
        question: "How does Starfii prevent master data from degrading again after cleanup?",
        answer:
          "We set up ongoing stewardship workflows so new records are checked against the master data standard as they're created, not just cleaned up once.",
      },
    ],
  },
  {
    slug: "generative-ai-enterprise-data",
    title: "Generative AI on Enterprise Data",
    body: "Starfii connects Generative AI and LLMs to your own enterprise data safely, so teams can query, summarize, and act on it in plain language.",
    tags: ["GENAI", "LLM", "RAG"],
    heroImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "LLMs Grounded in Your Data",
        body: "Retrieval augmented generation connects LLMs to your governed data, so answers are grounded in what's actually true for your business.",
      },
      {
        title: "Natural Language Querying",
        body: "Teams can ask plain language questions over enterprise data instead of waiting on a report or writing a query themselves.",
      },
      {
        title: "Secure, Access Controlled AI",
        body: "Existing access controls and governance extend into the AI layer, so responses respect who is allowed to see what data.",
      },
      {
        title: "Summarization & Action Workflows",
        body: "Beyond answering questions, models can summarize reports and trigger downstream workflows based on what they find.",
      },
    ],
    faqs: [
      {
        question: "How does Starfii keep Generative AI answers grounded in real data?",
        answer:
          "We connect LLMs to your governed data through retrieval augmented generation, so responses are based on your actual records, not just the model's general knowledge.",
      },
      {
        question: "Can business teams query enterprise data without writing SQL?",
        answer:
          "Yes. We build natural language interfaces over governed data, so teams can ask plain language questions and get grounded answers directly.",
      },
      {
        question: "How does Starfii secure Generative AI access to sensitive data?",
        answer:
          "We extend your existing access controls and governance into the AI layer, so a user's permissions determine what the model is allowed to surface for them.",
      },
      {
        question: "What kinds of workflows can be built on top of enterprise Generative AI?",
        answer:
          "Beyond Q&A, we build summarization of reports and documents, and can trigger downstream actions or alerts based on what the model finds in your data.",
      },
    ],
  },
];

export function getCapabilityBySlug(slug: string): Capability | undefined {
  return capabilities.find((c) => c.slug === slug);
}
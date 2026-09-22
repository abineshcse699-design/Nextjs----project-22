// Shared data source for ServiceNow ITSM capabilities.
// Used by:
//   - app/services/servicenow/page.tsx                      (the capability grid)
//   - app/services/servicenow/capabilities/[slug]/page.tsx  (detail page)

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

export const capabilities: Capability[] = [
  {
    slug: "incident-management",
    title: "Incident Management",
    body: "Log, prioritize, and resolve incidents through one governed queue, so nothing sits unassigned and every SLA is visible in real time.",
    tags: ["INCIDENT", "SLA", "ITSM"],
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Unified Incident Queue",
        body: "Emails, portal tickets, phone calls, and monitoring alerts land in one governed queue, so no incident goes unowned.",
      },
      {
        title: "Priority & SLA Configuration",
        body: "Impact, urgency, and priority matrices with SLA timers that reflect how your business actually measures service.",
      },
      {
        title: "Automated Assignment & Escalation",
        body: "Assignment rules and escalation paths route each incident to the right team and warn owners before a breach happens.",
      },
      {
        title: "Major Incident Handling",
        body: "A defined process for high impact outages, with clear roles, communication plans, and post incident reviews.",
      },
    ],
    faqs: [
      {
        question: "Can Starfii consolidate multiple support queues into one ServiceNow incident process?",
        answer:
          "Yes. We map your existing queues, inboxes, and tools, then design a single governed incident process with clear ownership and reporting.",
      },
      {
        question: "How does Starfii configure priorities and SLAs?",
        answer:
          "We work with service owners to define impact and urgency values, priority rules, and SLA targets that match your operating model, instead of using a generic default setup.",
      },
      {
        question: "Can incidents be created automatically from monitoring tools?",
        answer:
          "Yes. We integrate monitoring and alerting tools so events can create, enrich, and route incidents automatically.",
      },
      {
        question: "Does Starfii support major incident management?",
        answer:
          "Yes. We configure major incident workflows with defined roles, stakeholder communication, and post incident review steps.",
      },
      {
        question: "Can we migrate existing ticket data into ServiceNow?",
        answer:
          "Yes. We plan data migration, validation, and reconciliation as part of the implementation so historical context is not lost.",
      },
    ],
  },
  {
    slug: "problem-management",
    title: "Problem Management",
    body: "Trace recurring incidents back to root cause and track the fix through to closure, instead of firefighting the same issue every month.",
    tags: ["PROBLEM", "ROOT CAUSE", "ITSM"],
    heroImage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Root Cause Analysis Workflows",
        body: "Structured investigation steps that guide teams from symptom to confirmed root cause, with findings recorded on the problem.",
      },
      {
        title: "Incident to Problem Linking",
        body: "Related incidents are grouped under one problem record, so the real cost of a recurring issue is visible.",
      },
      {
        title: "Known Error & Workaround Tracking",
        body: "Workarounds are documented and shared with the service desk, so agents resolve repeat issues faster while a permanent fix is built.",
      },
      {
        title: "Fix Tracking Through Closure",
        body: "Problem tasks, owners, and change requests are tracked to completion so fixes do not stall after diagnosis.",
      },
    ],
    faqs: [
      {
        question: "When should an incident become a problem record?",
        answer:
          "Typically when incidents recur, affect many users, or point to an unresolved underlying cause. We help you define clear criteria and automate the trigger where it makes sense.",
      },
      {
        question: "Can problem management connect to change management?",
        answer:
          "Yes. Permanent fixes are raised as change requests directly from the problem, so the full path from cause to resolution is traceable.",
      },
      {
        question: "How do known errors help the service desk?",
        answer:
          "Known error records and workarounds surface in the agent workspace and knowledge base, so repeat incidents are resolved faster.",
      },
      {
        question: "Does Starfii provide reporting on recurring issues?",
        answer:
          "Yes. We build dashboards on problem trends, ageing, and repeat incident volume so service owners can prioritize what to fix first.",
      },
      {
        question: "Can we run problem management without a dedicated problem manager?",
        answer:
          "Yes. We design lightweight workflows and role assignments that fit your team size, and scale them as your process matures.",
      },
    ],
  },
  {
    slug: "change-management",
    title: "Change Management",
    body: "Route every change through the right approvals and risk checks automatically, so releases stay controlled without slowing teams down.",
    tags: ["CHANGE", "RISK", "APPROVALS"],
    heroImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Standard, Normal & Emergency Changes",
        body: "Change types with their own approval paths, so low risk work moves fast and high risk work gets proper scrutiny.",
      },
      {
        title: "Risk Assessment & Impact Analysis",
        body: "Risk scoring and CMDB based impact analysis show which services a change could affect before it is approved.",
      },
      {
        title: "Automated Approvals & CAB",
        body: "Approval rules, change advisory board scheduling, and conflict detection replace manual coordination.",
      },
      {
        title: "Change Calendar & Collision Detection",
        body: "A shared view of planned changes highlights overlaps and blackout windows before they cause an incident.",
      },
    ],
    faqs: [
      {
        question: "Can change management keep up with frequent releases?",
        answer:
          "Yes. Standard change templates, risk based approvals, and automation let controlled change coexist with a fast release cadence.",
      },
      {
        question: "How does the CMDB support change management?",
        answer:
          "Impact analysis uses CMDB relationships to show affected services, so approvers can assess risk with real data.",
      },
      {
        question: "Can Starfii integrate change management with our CI/CD pipelines?",
        answer:
          "Yes. We can connect pipelines so deployments create or validate change records automatically, with approvals enforced where required.",
      },
      {
        question: "Does Starfii configure emergency change processes?",
        answer:
          "Yes. We define emergency paths with expedited approvals and mandatory post implementation review, so speed does not remove accountability.",
      },
      {
        question: "Can we align change management with audit requirements?",
        answer:
          "Yes. Approval history, risk checks, and implementation records are captured on each change, so audit evidence is a report and not a manual exercise.",
      },
    ],
  },
  {
    slug: "request-management",
    title: "Request Management",
    body: "Give employees a single place to ask for what they need, with status tracking that replaces email threads and follow up pings.",
    tags: ["REQUESTS", "FULFILLMENT", "PORTAL"],
    heroImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Single Employee Portal",
        body: "One place to request services, track status, and get answers, replacing email threads and scattered forms.",
      },
      {
        title: "Fulfillment Workflows",
        body: "Requests are broken into tasks and routed to the right fulfillment groups, with progress visible to the requester.",
      },
      {
        title: "Approval Routing",
        body: "Manager, cost, and security approvals are applied automatically based on what is being requested.",
      },
      {
        title: "Status Tracking & Notifications",
        body: "Requesters see where their request stands, and fulfillers get clear task queues, so nobody needs to chase.",
      },
    ],
    faqs: [
      {
        question: "How is request management different from incident management?",
        answer:
          "Incidents restore a service that is broken. Requests fulfill something new, like access, hardware, or software. Each has its own workflow and SLAs.",
      },
      {
        question: "Can requests span multiple teams such as IT, HR, and Facilities?",
        answer:
          "Yes. Fulfillment tasks can be routed across teams, so one request can cover everything an employee needs.",
      },
      {
        question: "Can we automate fulfillment of common requests?",
        answer:
          "Yes. Routine requests such as access grants can be automated end to end where integrations and approvals allow.",
      },
      {
        question: "Will employees actually use the portal?",
        answer:
          "Adoption is part of our scope. We design the portal around common requests, add clear search and knowledge content, and support rollout with training and communication.",
      },
      {
        question: "Can request SLAs be tracked separately from incident SLAs?",
        answer:
          "Yes. We configure separate SLA definitions and reporting for requests, so fulfillment performance is visible on its own.",
      },
    ],
  },
  {
    slug: "service-catalog",
    title: "Service Catalog",
    body: "Present every IT service as a clear, orderable item with the right approvals built in, so requesting something is a click, not a ticket essay.",
    tags: ["CATALOG", "SELF SERVICE", "FORMS"],
    heroImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Catalog Design & Structure",
        body: "Services grouped and named the way employees think about them, so the right item is easy to find.",
      },
      {
        title: "Catalog Items & Variables",
        body: "Clean order forms with conditional fields, defaults, and validation that capture what fulfillers need the first time.",
      },
      {
        title: "Built In Approvals & Fulfillment",
        body: "Every item carries its own approval rules and fulfillment flow, so ordering is consistent and auditable.",
      },
      {
        title: "Catalog Governance",
        body: "Ownership, review cycles, and retirement rules keep the catalog accurate instead of growing stale.",
      },
    ],
    faqs: [
      {
        question: "How many items should our service catalog have at launch?",
        answer:
          "We usually recommend starting with the highest volume requests and expanding after launch, rather than publishing everything at once.",
      },
      {
        question: "Can catalog items be reused across departments?",
        answer:
          "Yes. We design reusable variable sets and flows so new items are quick to build and consistent across teams.",
      },
      {
        question: "Can we control who sees which catalog items?",
        answer:
          "Yes. Items can be restricted by role, group, location, or other criteria so employees only see what applies to them.",
      },
      {
        question: "Does Starfii redesign an existing catalog?",
        answer:
          "Yes. We review usage, remove duplicates and low value items, and restructure the catalog around how employees actually request services.",
      },
      {
        question: "How is catalog data used for reporting?",
        answer:
          "Order volumes, fulfillment times, and approval delays feed dashboards so you can see which services need improvement.",
      },
    ],
  },
  {
    slug: "cmdb",
    title: "CMDB",
    body: "Keep a live, accurate map of your infrastructure and its dependencies, so impact analysis is a lookup instead of a guess.",
    tags: ["CMDB", "DISCOVERY", "DATA QUALITY"],
    heroImage:
      "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "CMDB Design & Data Model",
        body: "A right sized data model based on the questions you need answered, not on collecting every possible attribute.",
      },
      {
        title: "Discovery & Service Mapping",
        body: "Automated discovery and service maps keep configuration items and their dependencies current.",
      },
      {
        title: "Data Governance & Health",
        body: "Ownership, completeness, and correctness rules with health scoring, so the data stays trustworthy over time.",
      },
      {
        title: "Impact Analysis for ITSM",
        body: "Incident, problem, and change processes use CMDB relationships to show what is affected and how badly.",
      },
    ],
    faqs: [
      {
        question: "Why do many CMDBs end up unreliable?",
        answer:
          "Usually because ownership and governance were missing. Discovery populates data, but without clear owners and health checks, it drifts. We design governance alongside the technical setup.",
      },
      {
        question: "Can Starfii clean up an existing CMDB?",
        answer:
          "Yes. We assess data quality, remove duplicates and stale records, and set up reconciliation and health scoring to keep it clean.",
      },
      {
        question: "Do we need Discovery to have a CMDB?",
        answer:
          "Not always. Discovery helps automate accuracy, but we can also integrate other sources of truth. We recommend an approach based on your environment.",
      },
      {
        question: "How does the CMDB connect to asset management?",
        answer:
          "Asset and configuration data are linked, so hardware, software, and their relationships can be tracked together.",
      },
      {
        question: "How long does a CMDB project take?",
        answer:
          "It depends on scope and data sources. A focused foundation can be delivered in phases, and we prioritize the services that matter most first.",
      },
    ],
  },
  {
    slug: "it-asset-management",
    title: "IT Asset Management",
    body: "Track hardware, software, and license usage against your CMDB, so renewals, audits, and spend are never a last minute scramble.",
    tags: ["ITAM", "LICENSES", "HARDWARE"],
    heroImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Hardware Asset Lifecycle",
        body: "Assets are tracked from procurement through deployment, maintenance, and retirement in one place.",
      },
      {
        title: "Software Asset & License Tracking",
        body: "Entitlements and installations are compared, so over and under licensing are visible before an audit finds them.",
      },
      {
        title: "Renewal & Spend Visibility",
        body: "Renewal dates, contract values, and usage data help you right size before the next negotiation.",
      },
      {
        title: "CMDB Alignment",
        body: "Asset and configuration records stay linked, so ownership, cost, and dependencies tell one consistent story.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between asset management and the CMDB?",
        answer:
          "Asset management tracks financial and lifecycle data such as cost, contracts, and ownership. The CMDB tracks configuration and relationships. In ServiceNow they work best linked together.",
      },
      {
        question: "Can Starfii help us prepare for a software audit?",
        answer:
          "Yes. We set up entitlement and usage tracking so you can see your compliance position and act before an audit.",
      },
      {
        question: "Can we track assets that are not discoverable, such as peripherals?",
        answer:
          "Yes. Assets can be created through procurement, receiving, or import processes, not only through discovery.",
      },
      {
        question: "Can ITAM help reduce license spend?",
        answer:
          "It gives you the visibility to spot unused or overprovisioned licenses, which is the starting point for right sizing at renewal.",
      },
      {
        question: "Does Starfii integrate ITAM with procurement and finance?",
        answer:
          "Yes. We can connect procurement and finance systems so purchase, contract, and asset records stay aligned.",
      },
    ],
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    body: "Automate the repetitive parts of ITSM — approvals, assignments, notifications — so your team spends time on the work that needs judgment.",
    tags: ["AUTOMATION", "FLOW DESIGNER", "WORKFLOWS"],
    heroImage:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Approval & Assignment Automation",
        body: "Rules that route work and collect approvals automatically, removing manual triage from your team's day.",
      },
      {
        title: "Notifications & Escalations",
        body: "The right people are informed at the right time, with escalations that trigger before an SLA is missed.",
      },
      {
        title: "Flow Design & Reusable Actions",
        body: "Flows built from reusable, documented actions, so new automation is faster to build and easier to maintain.",
      },
      {
        title: "Automation Governance",
        body: "Naming, testing, and ownership standards keep automation understandable and upgrade safe.",
      },
    ],
    faqs: [
      {
        question: "Which ITSM tasks are best suited to automation?",
        answer:
          "Repetitive, rule based work such as assignment, approvals, notifications, and standard fulfillment steps. We start with the highest volume candidates.",
      },
      {
        question: "Does automation make the platform harder to upgrade?",
        answer:
          "Not when built with governance. We favor configuration over heavy customization and follow platform standards so upgrades stay routine.",
      },
      {
        question: "Can Starfii review and clean up our existing workflows?",
        answer:
          "Yes. We audit current flows, remove duplicated or obsolete logic, and consolidate them into maintainable patterns.",
      },
      {
        question: "Can automation include external systems?",
        answer:
          "Yes. Workflows can call out to other systems through integrations, so a process can span tools without manual handoffs.",
      },
      {
        question: "How do we know automation is delivering value?",
        answer:
          "We agree on measures such as handling time, manual touches, and backlog before we build, then report on them after go live.",
      },
    ],
  },
  {
    slug: "integrations",
    title: "Integrations",
    body: "Connect ServiceNow ITSM to identity providers, monitoring tools, and the rest of your IT stack, so data flows in one direction, not five.",
    tags: ["INTEGRATIONS", "API", "INTEGRATIONHUB"],
    heroImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Identity & Access Integration",
        body: "Single sign on and user provisioning connected to your identity provider, so access data is consistent.",
      },
      {
        title: "Monitoring & Event Integration",
        body: "Alerts and events from monitoring tools create and enrich incidents automatically.",
      },
      {
        title: "Business System Integration",
        body: "HR, finance, and other business systems connected so requests and records reference a single source of truth.",
      },
      {
        title: "Resilient Integration Design",
        body: "Retries, error handling, and monitoring built into every integration, so failures are visible and recoverable.",
      },
    ],
    faqs: [
      {
        question: "How does Starfii integrate ServiceNow with other systems?",
        answer:
          "We use the approach that fits each case, such as IntegrationHub, REST APIs, or middleware, and design for security, error handling, and monitoring.",
      },
      {
        question: "Can ServiceNow integrate with our monitoring and observability tools?",
        answer:
          "Yes. We connect monitoring tools so events can create, deduplicate, and route incidents automatically.",
      },
      {
        question: "How do you keep integrations secure?",
        answer:
          "We use managed credentials, least privilege access, and secure authentication methods, and we document data flows for your security review.",
      },
      {
        question: "What happens when an integrated system goes down?",
        answer:
          "We design retries and failure handling in, and set up alerting, so errors are detected quickly and data can be reprocessed without loss.",
      },
      {
        question: "Can Starfii take over and repair existing integrations?",
        answer:
          "Yes. We review current integrations, fix reliability and security gaps, and document them so they are supportable.",
      },
    ],
  },
  {
    slug: "custom-applications",
    title: "Custom Applications",
    body: "For the workflows the out of the box platform does not cover, we build governed, low code applications on the same ServiceNow instance.",
    tags: ["CUSTOM APPS", "LOW CODE", "PLATFORM"],
    heroImage:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Requirements & Platform Fit",
        body: "We confirm whether an existing capability meets the need before building, so you only customize where it adds value.",
      },
      {
        title: "Scoped Low Code Applications",
        body: "Applications built as scoped apps on the platform, keeping them isolated, portable, and easier to upgrade.",
      },
      {
        title: "Shared Data & Security Model",
        body: "Custom apps reuse the platform's users, roles, tables, and workflows instead of creating a parallel system.",
      },
      {
        title: "Testing, Deployment & Support",
        body: "Structured testing, release management, and post launch support so custom apps are as dependable as core modules.",
      },
    ],
    faqs: [
      {
        question: "When does a custom application make sense on ServiceNow?",
        answer:
          "When a business workflow needs approvals, tasks, and tracking that existing modules do not cover, and it benefits from the platform's shared data and automation.",
      },
      {
        question: "Will custom applications complicate upgrades?",
        answer:
          "We build as scoped applications and follow platform standards, which keeps them separated from core configuration and helps upgrades stay routine.",
      },
      {
        question: "Can custom applications use our existing ServiceNow data?",
        answer:
          "Yes. That is a key advantage. Custom apps can reference users, groups, CMDB records, and other existing data.",
      },
      {
        question: "Does Starfii support custom apps after launch?",
        answer:
          "Yes. We can provide enhancements, maintenance, and support under a managed services arrangement.",
      },
      {
        question: "Who governs custom applications once built?",
        answer:
          "We help set ownership, change control, and review processes so custom apps stay maintained and do not become unmanaged technical debt.",
      },
    ],
  },
];

export function getCapabilityBySlug(slug: string): Capability | undefined {
  return capabilities.find((c) => c.slug === slug);
}
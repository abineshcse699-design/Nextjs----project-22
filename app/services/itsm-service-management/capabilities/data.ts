// Shared data source for ITSM & Enterprise Service Management capabilities.
// Used by:
//   - app/services/itsm-service-management/ITSMSection.tsx        (the capability grid / focus areas)
//   - app/services/itsm-service-management/capabilities/[slug]/page.tsx (detail page)
//
// Keeping one source of truth means the grid card and its "Learn More"
// destination can never drift out of sync with each other.
//
// Slugs below match exactly what ITSMSection.tsx's focusAreas cards
// generate via:
//   area.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
// so existing "Learn More" links on the main ITSM page resolve correctly.
//
// Structure is identical to app/services/cloud/capabilities/data.ts,
// app/services/data-analytics/capabilities/data.ts and
// app/services/software-product/capabilities/data.ts on purpose, so the
// [slug]/page.tsx, FaqAccordion, Reveal and OtherCapabilities components can
// be reused unchanged across all services.

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
    slug: "itsm-implementation",
    title: "ITSM Implementation",
    body: "Starfii designs and implements ITSM platforms around your operating model, service processes, governance, integrations, and adoption goals.",
    tags: ["ITSM", "PLATFORM", "IMPLEMENTATION"],
    heroImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Operating Model & Process Design",
        body: "We map your current service processes and design the workflows, roles, and governance an ITSM platform needs before any configuration begins.",
      },
      {
        title: "Platform Configuration & Rollout",
        body: "Modules, forms, workflows, and permissions are configured around how your teams actually work, then rolled out in phases your organization can absorb.",
      },
      {
        title: "Integration Ready Architecture",
        body: "Identity, monitoring, collaboration, and business systems are considered from day one, so the platform connects cleanly instead of becoming another silo.",
      },
      {
        title: "Adoption & Change Management",
        body: "Training, documentation, and change management are built into the rollout, so new processes actually stick with the teams using them.",
      },
    ],
    faqs: [
      {
        question: "How long does a typical ITSM implementation take?",
        answer:
          "Timelines vary with scope, but we phase implementations so core modules like incident and request management go live early, with additional practices layered in afterward.",
      },
      {
        question: "Can Starfii implement ITSM on a platform we've already chosen?",
        answer:
          "Yes. We configure and implement around your selected platform, designing workflows and governance to fit its capabilities rather than forcing a generic template.",
      },
      {
        question: "Does implementation include migrating our existing tickets and data?",
        answer:
          "Yes. We plan data migration from legacy tools as part of the implementation, so historical records and open work carry over cleanly.",
      },
      {
        question: "How does Starfii ensure teams actually adopt the new platform?",
        answer:
          "We build training, documentation, and change management into the rollout itself, rather than treating adoption as a concern for after go live.",
      },
    ],
  },
  {
    slug: "service-desk-transformation",
    title: "Service Desk Transformation",
    body: "We redesign service desk experiences, workflows, knowledge practices, and escalation paths to make support faster, more consistent, and easier to use.",
    tags: ["SERVICE DESK", "SELF SERVICE", "KNOWLEDGE"],
    heroImage:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Self Service & Portals",
        body: "We design service portals that let employees and customers find answers and submit requests without waiting on a queue.",
      },
      {
        title: "Knowledge Driven Support",
        body: "Knowledge articles are built into the support workflow, so common issues get resolved through search before they become tickets.",
      },
      {
        title: "Intelligent Routing & Escalation",
        body: "Requests are routed to the right team automatically, with clear escalation paths when an issue needs specialist attention.",
      },
      {
        title: "Consistent Support Experience",
        body: "Support journeys are standardized across channels, so employees get the same quality of experience regardless of how they reach out.",
      },
    ],
    faqs: [
      {
        question: "What does a service desk transformation engagement typically include?",
        answer:
          "We redesign support journeys, self service portals, knowledge practices, and routing rules to reduce ticket volume and speed up resolution.",
      },
      {
        question: "Can Starfii transform our service desk without replacing our ITSM platform?",
        answer:
          "Yes. Most transformations are delivered on top of your existing platform through workflow, portal, and knowledge redesign rather than a full replatform.",
      },
      {
        question: "How does self service reduce the load on our support team?",
        answer:
          "By surfacing relevant knowledge and enabling common requests to be resolved without agent involvement, self service absorbs a meaningful share of routine volume.",
      },
      {
        question: "Does transformation improve support for both employees and customers?",
        answer:
          "Yes. We design consistent support experiences that apply the same principles of routing, knowledge, and escalation across both employee and customer facing support.",
      },
    ],
  },
  {
    slug: "incident-management",
    title: "Incident Management",
    body: "Starfii streamlines incident intake, triage, routing, escalation, communications, and resolution so teams can restore services quickly and consistently.",
    tags: ["INCIDENTS", "TRIAGE", "SLA"],
    heroImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Structured Intake & Triage",
        body: "Incidents are captured with the context responders need, then triaged and prioritized against clear, consistent criteria.",
      },
      {
        title: "Automated Routing & Escalation",
        body: "Incidents route to the right team automatically, with defined escalation paths that trigger when resolution stalls.",
      },
      {
        title: "SLA Tracking & Communication",
        body: "SLA timers, status updates, and stakeholder communications are built into the workflow, so nothing depends on someone remembering to update a ticket.",
      },
      {
        title: "Post Incident Review",
        body: "Resolved incidents feed into review and problem management processes, so patterns get addressed instead of just logged.",
      },
    ],
    faqs: [
      {
        question: "How does Starfii reduce time to resolution for incidents?",
        answer:
          "We streamline intake, triage, and routing so incidents reach the right responder faster, with SLA tracking and escalation built into the workflow.",
      },
      {
        question: "Can incident management integrate with our monitoring and alerting tools?",
        answer:
          "Yes. We connect monitoring and alerting systems into incident workflows, so detected issues can automatically create and route incident records.",
      },
      {
        question: "How are major incidents handled differently from routine ones?",
        answer:
          "We define separate major incident workflows with faster escalation, dedicated communication cadences, and clear ownership for coordinating response.",
      },
      {
        question: "Does Starfii help connect incidents to root cause analysis?",
        answer:
          "Yes. Resolved incidents are linked into problem management, so recurring issues are identified and addressed at the root cause rather than repeatedly resolved.",
      },
    ],
  },
  {
    slug: "problem-management",
    title: "Problem Management",
    body: "We connect recurring incidents to root cause analysis, known error management, and corrective actions to reduce repeat disruption and improve service stability.",
    tags: ["PROBLEM MANAGEMENT", "ROOT CAUSE", "STABILITY"],
    heroImage:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Recurring Incident Analysis",
        body: "Incident patterns are analyzed to identify which recurring issues are worth formal problem investigation.",
      },
      {
        title: "Root Cause Investigation",
        body: "We structure root cause analysis so investigations produce clear findings rather than stalling in open ended discussion.",
      },
      {
        title: "Known Error Management",
        body: "Known errors and workarounds are documented and linked to related incidents, giving responders a faster path to resolution.",
      },
      {
        title: "Corrective Action Tracking",
        body: "Corrective actions are tracked through to completion, so root causes actually get fixed instead of just identified.",
      },
    ],
    faqs: [
      {
        question: "How does problem management differ from incident management?",
        answer:
          "Incident management restores service quickly, while problem management investigates the underlying cause so the same incident doesn't keep recurring.",
      },
      {
        question: "How does Starfii decide which incidents warrant a formal problem investigation?",
        answer:
          "We analyze incident frequency, business impact, and recurrence patterns to prioritize the problems most worth formal root cause investigation.",
      },
      {
        question: "What happens to a known error while a permanent fix is being developed?",
        answer:
          "We document the known error and any available workaround, so responders can resolve related incidents faster while the underlying fix is in progress.",
      },
      {
        question: "How does Starfii ensure corrective actions actually get completed?",
        answer:
          "Corrective actions are tracked with clear ownership and status through to closure, rather than being logged and left open indefinitely.",
      },
    ],
  },
  {
    slug: "change-management",
    title: "Change Management",
    body: "Starfii builds controlled change workflows with approvals, risk assessment, scheduling, and auditability so teams can move quickly without losing operational control.",
    tags: ["CHANGE MANAGEMENT", "APPROVALS", "RISK"],
    heroImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Risk Based Change Categories",
        body: "Changes are categorized by risk, so low impact changes move quickly while higher risk changes get the scrutiny they need.",
      },
      {
        title: "Structured Approval Workflows",
        body: "Approval chains are configured around who actually needs to sign off, avoiding both unnecessary bottlenecks and uncontrolled changes.",
      },
      {
        title: "Change Scheduling & Conflict Checks",
        body: "Changes are scheduled with visibility into other planned work, reducing the chance of conflicting changes causing avoidable incidents.",
      },
      {
        title: "Full Auditability",
        body: "Every change is tracked with its approvals, timing, and outcome, giving teams a clear audit trail when questions come up later.",
      },
    ],
    faqs: [
      {
        question: "Does change management slow down routine, low risk changes?",
        answer:
          "No. We categorize changes by risk, so routine changes move through a lightweight process while only higher risk changes require deeper review.",
      },
      {
        question: "How does Starfii prevent change conflicts across teams?",
        answer:
          "We build scheduling visibility into the change workflow, so teams can see other planned changes and avoid conflicts before they cause incidents.",
      },
      {
        question: "Can change management support emergency changes?",
        answer:
          "Yes. We define a separate emergency change path with expedited approvals for situations that can't wait for the standard process, while still maintaining an audit trail.",
      },
      {
        question: "How does change management help with audit and compliance requirements?",
        answer:
          "Every change is recorded with its approvals, risk assessment, and outcome, giving auditors a clear, structured history of what changed and why.",
      },
    ],
  },
  {
    slug: "request-management",
    title: "Request Management",
    body: "We automate common employee and customer requests with clear fulfillment workflows, approvals, SLAs, and self service experiences.",
    tags: ["REQUESTS", "FULFILLMENT", "SLA"],
    heroImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Standardized Request Types",
        body: "Common requests are defined with the exact fields and approvals they need, removing guesswork for both requesters and fulfillment teams.",
      },
      {
        title: "Automated Fulfillment Workflows",
        body: "Requests route automatically to the right fulfillment team, with status visible to the requester throughout the process.",
      },
      {
        title: "Approval Rules That Fit",
        body: "Approval requirements are configured per request type, so simple requests move fast and higher impact ones get proper sign off.",
      },
      {
        title: "SLA Backed Fulfillment",
        body: "Fulfillment SLAs are tracked against each request type, giving teams visibility into where requests are falling behind.",
      },
    ],
    faqs: [
      {
        question: "How is request management different from incident management?",
        answer:
          "Incident management restores something that's broken, while request management fulfills a standard ask, like provisioning access or ordering equipment.",
      },
      {
        question: "Can Starfii automate multi step approval chains for requests?",
        answer:
          "Yes. Approval rules can be configured per request type, including multi step chains for requests that require more than one sign off.",
      },
      {
        question: "Does request management include self service for employees?",
        answer:
          "Yes. Standardized request types are typically exposed through a self service portal, so employees can submit and track requests without contacting the service desk directly.",
      },
      {
        question: "How does Starfii decide which requests to standardize first?",
        answer:
          "We prioritize the highest volume, most repetitive requests first, since standardizing those delivers the largest reduction in manual effort.",
      },
    ],
  },
  {
    slug: "service-catalog",
    title: "Service Catalog",
    body: "Starfii structures business and technology services into intuitive catalogs that make service offerings discoverable, requestable, and measurable.",
    tags: ["CATALOG", "SELF SERVICE", "DISCOVERABILITY"],
    heroImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Business Aligned Catalog Structure",
        body: "Services are organized around how employees and customers think about their needs, not around internal team boundaries.",
      },
      {
        title: "Clear Service Definitions",
        body: "Each catalog item defines what's included, expected delivery time, and who owns it, so expectations are set before a request is submitted.",
      },
      {
        title: "Requestable, Trackable Offerings",
        body: "Catalog items connect directly into request workflows, so browsing a service and requesting it happen in the same experience.",
      },
      {
        title: "Catalog Usage Insights",
        body: "Usage data on catalog items highlights which services are in demand and where offerings need to be added or retired.",
      },
    ],
    faqs: [
      {
        question: "What's the difference between a service catalog and a request form?",
        answer:
          "A service catalog organizes and describes available services in business friendly terms, while request forms are how each catalog item actually gets fulfilled.",
      },
      {
        question: "Can Starfii build separate catalogs for employees and external customers?",
        answer:
          "Yes. We structure catalogs around the audience, so employees and customers each see the services relevant to them without unnecessary clutter.",
      },
      {
        question: "How does a well structured catalog reduce support tickets?",
        answer:
          "When services are clearly described and directly requestable, fewer requests get misrouted or submitted as unstructured tickets in the first place.",
      },
      {
        question: "Does Starfii help maintain the catalog after launch?",
        answer:
          "Yes. We use catalog usage data to identify services that need updates, additions, or retirement as business needs evolve.",
      },
    ],
  },
  {
    slug: "asset-and-configuration-management",
    title: "Asset and Configuration Management",
    body: "We establish reliable asset and configuration visibility so teams can understand relationships, ownership, dependencies, and operational impact.",
    tags: ["ASSETS", "CMDB", "DEPENDENCIES"],
    heroImage:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Asset Inventory & Ownership",
        body: "Hardware, software, and service assets are tracked with clear ownership, so accountability doesn't depend on institutional memory.",
      },
      {
        title: "Configuration Item Relationships",
        body: "Configuration items are mapped with their relationships and dependencies, giving teams visibility into how components connect.",
      },
      {
        title: "Change and Incident Impact Visibility",
        body: "Asset and configuration data feeds directly into change and incident workflows, so teams can see what else a change or issue might affect.",
      },
      {
        title: "Ongoing Data Accuracy",
        body: "We establish processes to keep asset and configuration data current, rather than letting it decay after the initial rollout.",
      },
    ],
    faqs: [
      {
        question: "What does Starfii track as part of asset and configuration management?",
        answer:
          "We track hardware, software, and service assets along with configuration items and the relationships and dependencies between them.",
      },
      {
        question: "How does a CMDB help with incident and change management?",
        answer:
          "Configuration data shows what depends on what, so teams assessing an incident or a proposed change can see the potential downstream impact.",
      },
      {
        question: "How does Starfii keep asset data accurate after go live?",
        answer:
          "We establish ongoing data governance processes and, where appropriate, automated discovery, so asset and configuration records stay current rather than going stale.",
      },
      {
        question: "Can asset management integrate with our procurement or discovery tools?",
        answer:
          "Yes. We connect asset management to procurement, discovery, and monitoring tools where available, so records reflect what's actually deployed.",
      },
    ],
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    body: "Starfii automates repetitive service operations across intake, approvals, routing, fulfillment, notifications, and cross team handoffs.",
    tags: ["AUTOMATION", "WORKFLOWS", "EFFICIENCY"],
    heroImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Process Mapping & Opportunity Identification",
        body: "We map existing service workflows to identify repetitive steps and bottlenecks worth automating first.",
      },
      {
        title: "Automated Intake & Routing",
        body: "Requests and tickets are classified and routed automatically, reducing manual triage and getting work to the right team faster.",
      },
      {
        title: "Approval & Notification Automation",
        body: "Approvals trigger automatically based on defined rules, with notifications keeping requesters and fulfillment teams informed without manual follow up.",
      },
      {
        title: "Cross Team Handoff Automation",
        body: "Handoffs between teams are automated with the context each team needs, reducing delay and lost information between steps.",
      },
    ],
    faqs: [
      {
        question: "How does Starfii decide which workflows to automate first?",
        answer:
          "We map existing service workflows and prioritize automation around the steps that are most repetitive or cause the most delay.",
      },
      {
        question: "Does workflow automation require replacing our current ITSM platform?",
        answer:
          "No. Most workflow automation is built on top of your existing platform's automation and rules capabilities rather than requiring a new system.",
      },
      {
        question: "Can automated workflows still include manual approval steps?",
        answer:
          "Yes. Automation handles the repetitive parts of a workflow while still routing to a human for approval wherever that judgment is needed.",
      },
      {
        question: "How does workflow automation improve cross team collaboration?",
        answer:
          "Automated handoffs carry the right context between teams automatically, reducing the back and forth that typically slows down multi team requests.",
      },
    ],
  },
];

export function getCapabilityBySlug(slug: string): Capability | undefined {
  return capabilities.find((c) => c.slug === slug);
}
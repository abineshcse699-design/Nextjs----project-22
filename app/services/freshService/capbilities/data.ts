// Shared data source for Freshservice capabilities.
// Used by:
//   - app/services/freshService/page.tsx                     (the capability grid / focus areas)
//   - app/services/freshService/capbilities/[slug]/page.tsx  (detail page)
//
// Keeping one source of truth means the grid card and its "Learn More"
// destination can never drift out of sync with each other.
// Structure is identical to app/services/data-analytics/capabilities/data.ts
// on purpose, so the [slug]/page.tsx, FaqAccordion, Reveal and
// OtherCapabilities components can be reused unchanged across services.

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
    slug: "implementation",
    title: "Freshservice Implementation",
    body: "Starfii configures Freshservice end to end, service desk, workflows, roles, and SLAs, matched to your existing ITSM processes instead of a generic default setup.",
    tags: ["ITSM", "SETUP", "SLAs"],
    heroImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Process-First Configuration",
        body: "We configure Freshservice around your actual ticket volume, escalation paths, and approval chains rather than the out of the box defaults.",
      },
      {
        title: "Roles, SLAs & Permissions",
        body: "Agent roles, groups, and SLA policies are set up to match how your IT team is actually structured, from day one.",
      },
      {
        title: "Phased Rollout Planning",
        body: "Implementation moves in stages, so critical service desk functions stay available to end users throughout the transition.",
      },
      {
        title: "Post Go-Live Validation",
        body: "We validate ticket flow, notifications, and SLA timers against real scenarios before handing the platform fully over to your team.",
      },
    ],
    faqs: [
      {
        question: "How long does a typical Freshservice implementation take?",
        answer:
          "Most implementations run four to eight weeks depending on the number of processes, integrations, and legacy data involved, though larger enterprise rollouts can take longer.",
      },
      {
        question: "Can Starfii implement Freshservice without disrupting our current service desk?",
        answer:
          "Yes. We plan a phased rollout, often running the legacy tool and Freshservice in parallel for critical functions until the team is confident in the new setup.",
      },
      {
        question: "Does implementation include configuring roles and permissions?",
        answer:
          "Yes. Agent roles, groups, and access permissions are configured as part of implementation, matched to how your IT organization is actually structured.",
      },
      {
        question: "What happens after go live?",
        answer:
          "We validate ticket flow, SLA timers, and notifications against real scenarios, then hand over documentation before moving into ongoing optimization and support.",
      },
    ],
  },
  {
    slug: "service-desk",
    title: "Service Desk Setup",
    body: "Starfii builds a Freshservice service desk with structured queues, ticket categorization, and self service options that reduce inbound volume on IT teams.",
    tags: ["SERVICE DESK", "SELF SERVICE", "QUEUES"],
    heroImage:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Structured Ticket Queues",
        body: "Tickets are routed into clearly defined queues by category and priority, so agents work from an organized, predictable backlog.",
      },
      {
        title: "Self Service Portal",
        body: "A branded self service portal with a searchable knowledge base lets employees resolve common issues without opening a ticket.",
      },
      {
        title: "Ticket Categorization Rules",
        body: "Consistent categorization rules make reporting accurate and help route each ticket to the right team automatically.",
      },
      {
        title: "SLA-Aware Views",
        body: "Agent views highlight tickets approaching an SLA breach, so nothing critical slips through an overloaded queue.",
      },
    ],
    faqs: [
      {
        question: "Can the self service portal be branded to match our company?",
        answer:
          "Yes. We configure the Freshservice portal with your branding, logo, and terminology so it feels like an extension of your IT department.",
      },
      {
        question: "How does Starfii reduce ticket volume through the service desk setup?",
        answer:
          "We build a searchable knowledge base and structured request forms into the self service portal, so common issues get resolved without an agent touch.",
      },
      {
        question: "Can we have different queues for different departments or locations?",
        answer:
          "Yes. Queues and ticket categorization can be structured by department, location, or service line, whatever matches how your organization actually operates.",
      },
      {
        question: "Does the service desk setup include SLA configuration?",
        answer:
          "Yes. We configure SLA policies and agent views that flag tickets approaching a breach, so priority issues stay visible before they become a problem.",
      },
    ],
  },
  {
    slug: "incident-management",
    title: "Incident Management",
    body: "Starfii configures Freshservice incident management with clear priority matrices, escalation paths, and major incident workflows to cut resolution time.",
    tags: ["INCIDENTS", "ESCALATION", "MAJOR INCIDENT"],
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Priority & Impact Matrices",
        body: "Incidents are triaged consistently using a priority matrix tied to business impact, not just how loudly a ticket is raised.",
      },
      {
        title: "Automated Escalation Paths",
        body: "Escalation rules move stalled incidents to the next tier automatically, so nothing waits on someone remembering to reassign it.",
      },
      {
        title: "Major Incident Workflows",
        body: "A dedicated major incident process coordinates response, communication, and post-incident review for the highest impact issues.",
      },
      {
        title: "Resolution Time Reporting",
        body: "Dashboards track resolution time by priority and team, giving IT leadership a clear view of where incidents are actually slowing down.",
      },
    ],
    faqs: [
      {
        question: "How does Starfii set up incident priority levels in Freshservice?",
        answer:
          "We configure a priority matrix based on business impact and urgency, so incidents are triaged consistently rather than by whoever raised the loudest ticket.",
      },
      {
        question: "Can escalation happen automatically if an incident isn't resolved in time?",
        answer:
          "Yes. We build escalation rules that move stalled incidents to the next tier automatically based on SLA timers, without requiring manual reassignment.",
      },
      {
        question: "Does Starfii set up a separate process for major incidents?",
        answer:
          "Yes. Major incident workflows coordinate response, stakeholder communication, and a post-incident review, separate from standard ticket handling.",
      },
      {
        question: "Can we track incident resolution trends over time?",
        answer:
          "Yes. We configure dashboards that report resolution time by priority, team, and category, so leadership can see where incidents are actually slowing down.",
      },
    ],
  },
  {
    slug: "problem-change-management",
    title: "Problem & Change Management",
    body: "Starfii sets up problem management for root cause tracking and change management with approval workflows, so changes roll out with less risk.",
    tags: ["PROBLEM", "CHANGE", "APPROVALS"],
    heroImage:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Root Cause Tracking",
        body: "Recurring incidents are linked to problem records, so the underlying cause gets tracked and closed instead of the same ticket repeating.",
      },
      {
        title: "Change Approval Workflows",
        body: "Change requests route through configurable approval chains, matched to the risk level of what's actually being changed.",
      },
      {
        title: "Risk Scoring for Changes",
        body: "Changes are scored for risk before approval, giving reviewers context instead of a bare description to approve or reject.",
      },
      {
        title: "Change Calendar Visibility",
        body: "A shared change calendar shows planned and in-flight changes, reducing the chance of two teams colliding on the same system.",
      },
    ],
    faqs: [
      {
        question: "How does problem management differ from incident management in this setup?",
        answer:
          "Incident management restores service quickly, while problem management investigates the underlying cause behind repeating incidents so it can be permanently resolved.",
      },
      {
        question: "Can change approvals be different for high risk versus low risk changes?",
        answer:
          "Yes. We configure approval workflows and risk scoring so low risk changes move quickly while higher risk changes route through the appropriate reviewers.",
      },
      {
        question: "Does Starfii provide a change calendar to avoid conflicts?",
        answer:
          "Yes. We set up a shared change calendar showing planned and in-flight changes, so teams can see what else is happening before scheduling their own.",
      },
      {
        question: "Can problem records be linked back to the incidents that caused them?",
        answer:
          "Yes. Recurring incidents are linked to their related problem record, so the root cause investigation and its resolution stay tied to the tickets it affected.",
      },
    ],
  },
  {
    slug: "service-catalog",
    title: "Service Catalog & Requests",
    body: "Starfii builds a Freshservice service catalog and request forms that let employees raise the right request the first time, with automatic routing.",
    tags: ["CATALOG", "REQUEST FORMS", "ROUTING"],
    heroImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Structured Service Catalog",
        body: "Services are organized into clear categories, so employees can find the right request instead of defaulting to a generic ticket.",
      },
      {
        title: "Smart Request Forms",
        body: "Request forms capture the exact information a fulfillment team needs upfront, cutting down on back and forth clarification.",
      },
      {
        title: "Automatic Routing & Fulfillment",
        body: "Requests route automatically to the correct fulfillment team based on category, location, or approval outcome.",
      },
      {
        title: "Approval Chains Built In",
        body: "Requests that need sign-off, like new software or hardware, move through the right approval chain before fulfillment begins.",
      },
    ],
    faqs: [
      {
        question: "How is the service catalog organized so employees can find what they need?",
        answer:
          "We organize the catalog into clear, business-friendly categories, tested against how employees actually describe what they need rather than internal IT terminology.",
      },
      {
        question: "Can request forms require approval before fulfillment starts?",
        answer:
          "Yes. We build approval chains directly into relevant request types, like new software or hardware, so fulfillment only begins once sign-off is complete.",
      },
      {
        question: "Does the service catalog reduce back and forth between agents and requesters?",
        answer:
          "Yes. Request forms are designed to capture the exact information a fulfillment team needs upfront, cutting down on clarification tickets and delays.",
      },
      {
        question: "Can requests route automatically to different teams?",
        answer:
          "Yes. Routing rules send each request to the correct fulfillment team automatically, based on category, location, or the outcome of an approval step.",
      },
    ],
  },
  {
    slug: "asset-management-cmdb",
    title: "Asset Management & CMDB",
    body: "Starfii configures Freshservice asset management and CMDB to track hardware, software, and configuration items with accurate relationships and lifecycle data.",
    tags: ["ASSETS", "CMDB", "LIFECYCLE"],
    heroImage:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Hardware & Software Tracking",
        body: "Assets are tracked with accurate ownership, location, and status, so IT always knows what exists and who has it.",
      },
      {
        title: "CMDB Relationship Mapping",
        body: "Configuration items are mapped with real relationships, giving incident and change teams context before they touch production.",
      },
      {
        title: "Automated Discovery",
        body: "Discovery probes and agents keep the asset inventory current without relying on manual spreadsheet updates.",
      },
      {
        title: "Lifecycle & Warranty Alerts",
        body: "Assets nearing end of life or warranty expiry are flagged automatically, so replacements are planned instead of reactive.",
      },
    ],
    faqs: [
      {
        question: "How does Starfii keep the asset inventory accurate over time?",
        answer:
          "We configure automated discovery probes and agents to keep hardware and software records current, rather than relying on manual spreadsheet updates.",
      },
      {
        question: "What does CMDB relationship mapping actually give my team?",
        answer:
          "It shows how configuration items depend on each other, so incident and change teams have real context before making a change in production.",
      },
      {
        question: "Can Freshservice alert us before hardware warranties expire?",
        answer:
          "Yes. We configure lifecycle and warranty alerts so assets nearing end of life or warranty expiry are flagged for planning before they become urgent.",
      },
      {
        question: "Does asset management cover software licenses as well as hardware?",
        answer:
          "Yes. We track software licenses and installations alongside hardware assets, giving visibility into usage and compliance in one place.",
      },
    ],
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    body: "Starfii builds Freshservice workflow automation that assigns, escalates, and closes tickets automatically based on rules, cutting manual triage work.",
    tags: ["AUTOMATION", "RULES", "TRIAGE"],
    heroImage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Automated Assignment Rules",
        body: "Tickets are assigned to the right agent or group automatically based on category, keyword, or requester attributes.",
      },
      {
        title: "Escalation & Reminder Automation",
        body: "Automation rules escalate or remind agents on stalled tickets, so SLA breaches are caught before they happen, not after.",
      },
      {
        title: "Auto-Close & Follow-Up",
        body: "Resolved tickets follow automated close and satisfaction survey sequences, freeing agents from manual wrap-up tasks.",
      },
      {
        title: "Custom Business Rules",
        body: "Automation logic is built around your own rules, not a generic template, so it fits how your service desk actually triages work.",
      },
    ],
    faqs: [
      {
        question: "What kinds of tasks can Freshservice workflow automation handle?",
        answer:
          "Automation rules commonly handle ticket assignment, escalation, reminders, and closing resolved tickets, removing repetitive manual triage from agents' daily work.",
      },
      {
        question: "Can automation rules be customized to our own escalation logic?",
        answer:
          "Yes. We build automation around your specific business rules rather than a generic template, so it reflects how your service desk actually triages work.",
      },
      {
        question: "Does automation help with SLA compliance?",
        answer:
          "Yes. Escalation and reminder automation flags tickets approaching an SLA breach, so agents act before a breach happens rather than after.",
      },
      {
        question: "Can automation trigger satisfaction surveys after a ticket closes?",
        answer:
          "Yes. We configure automated close and follow-up sequences that include satisfaction surveys, without requiring an agent to trigger them manually.",
      },
    ],
  },
  {
    slug: "integrations-customization",
    title: "Integrations & Customization",
    body: "Starfii integrates Freshservice with your existing tools, directory, monitoring, and collaboration platforms, and customizes fields, forms, and views to match your operation.",
    tags: ["INTEGRATIONS", "SSO", "CUSTOM FIELDS"],
    heroImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Directory & SSO Integration",
        body: "Freshservice connects to your identity provider for single sign on and automated user provisioning and deprovisioning.",
      },
      {
        title: "Monitoring & Alerting Integration",
        body: "Monitoring tools feed alerts directly into Freshservice as incidents, so issues are tracked in one place instead of a separate dashboard.",
      },
      {
        title: "Collaboration Tool Integration",
        body: "Teams can update and act on tickets from the collaboration platforms they already use daily, without switching tools.",
      },
      {
        title: "Custom Fields & Views",
        body: "Fields, forms, and agent views are customized to capture and surface exactly the information your team needs, nothing more.",
      },
    ],
    faqs: [
      {
        question: "Can Freshservice integrate with our existing identity provider?",
        answer:
          "Yes. We configure single sign on and automated user provisioning and deprovisioning against your directory, so access stays current without manual admin work.",
      },
      {
        question: "Can monitoring alerts create tickets automatically?",
        answer:
          "Yes. We integrate monitoring tools so alerts flow directly into Freshservice as incidents, keeping everything tracked in one place instead of a separate dashboard.",
      },
      {
        question: "Which collaboration tools can Starfii connect to Freshservice?",
        answer:
          "We commonly integrate Slack and Microsoft Teams, so agents can update and act on tickets from the platforms they already use daily.",
      },
      {
        question: "How customized can fields and forms be for our specific processes?",
        answer:
          "Fully. We build custom fields, forms, and agent views around exactly the information your team needs, rather than the platform's generic defaults.",
      },
    ],
  },
  {
    slug: "data-migration-optimization",
    title: "Data Migration & Optimization",
    body: "Starfii migrates historical tickets, assets, and CMDB data into Freshservice, then continuously optimizes configuration as ticket volume and team structure evolve.",
    tags: ["MIGRATION", "CMDB", "OPTIMIZATION"],
    heroImage:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2400&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Ticket & Asset History Migration",
        body: "Historical tickets, assets, and CMDB relationships move into Freshservice with data integrity validated before cutover.",
      },
      {
        title: "Data Cleansing Before Migration",
        body: "Records are cleaned and de-duplicated before migration, so legacy data problems don't carry over into the new platform.",
      },
      {
        title: "Controlled Cutover Planning",
        body: "Migration is planned in a controlled sequence, reducing the risk of missing or inaccurate data during the switch.",
      },
      {
        title: "Ongoing Configuration Tuning",
        body: "After go live, we continue tuning automation, forms, and SLAs as ticket volume and team structure change over time.",
      },
    ],
    faqs: [
      {
        question: "What data can Starfii migrate into Freshservice?",
        answer:
          "We migrate historical ticket records, asset inventories, and CMDB relationships, validating data integrity before your team fully cuts over to the new platform.",
      },
      {
        question: "How does Starfii handle messy or outdated legacy data?",
        answer:
          "We cleanse and de-duplicate records before migration, so legacy data problems don't carry over and quietly undermine reporting in the new platform.",
      },
      {
        question: "Is migration a one-time event or an ongoing process?",
        answer:
          "The migration itself is a controlled, one-time cutover, but we continue optimizing configuration, automation, and SLAs afterward as your operation evolves.",
      },
      {
        question: "Can migration happen without losing ticket history?",
        answer:
          "Yes. We plan a controlled cutover sequence specifically to preserve ticket and asset history, reducing the risk of missing or inaccurate data in the move.",
      },
    ],
  },
];

export function getCapabilityBySlug(slug: string): Capability | undefined {
  return capabilities.find((c) => c.slug === slug);
}
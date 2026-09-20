// Save as: app/services/servicenow/casestudies/data/casestudies.tsx
//
// NOTE: client names, figures and outcomes below are DRAFT placeholder
// content written to match the tone of the software case studies.
// Replace them with real, approved client data before going live.
//
// NOTE 2: Slugs (URLs), image links and dates keep their hyphens because
// routes and formats need them. Every piece of text shown on the page is
// hyphen free. Negative metrics use a true minus sign, not a hyphen.

export type CaseStudyResult = {
  metric: string;
  label: string;
};

export type CaseStudy = {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  cardDescription: string;

  client: string;
  industry: string;
  services: string[];

  image: string;
  heroImage: string;

  overview: string;
  clientOverview: string;

  challengeIntro: string;
  challengePoints: string[];

  solutionIntro: string;
  solutionDetail: string;
  solution: string[];

  results: CaseStudyResult[];

  benefitsIntro: string;
  benefits: string[];

  summary: string;
  techStack: string[];

  // Publish date, format "YYYY-MM-DD". Used only for ordering: the
  // case study with the latest date always shows first, everywhere
  // this data is used, regardless of where it sits in this array.
  date: string;
};

// Raw list. Order here does NOT matter for display, only `date` does.
// Slugs match the carousel on app/services/servicenow/page.tsx exactly.
const rawCaseStudies: CaseStudy[] = [
  {
    slug: "servicenow-fso-insurance-servicing",
    category: "Insurance",

    title: "How Starfii and ServiceNow FSO Are Reimagining Insurance Servicing",
    subtitle:
      "Policyholder requests bounced between email, a legacy policy screen, and a call center, so a simple address change could take days to close.",
    cardDescription:
      "Explore how Starfii used ServiceNow Financial Services Operations to automate servicing workflows and cut handoffs for a global insurer.",

    client: "Global insurer, 6 servicing centers, ~1.2M policyholders",
    industry: "Insurance",
    services: ["ServiceNow FSO", "Workflow Automation", "Integrations"],

    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2000&auto=format&fit=crop",

    overview: "An insurer whose servicing lived in inboxes and side spreadsheets",
    clientOverview:
      "Servicing agents handled endorsements, address changes, and billing queries across email, phone, and a decade old policy administration screen. Cases had no shared record, so customers repeated themselves at every handoff and managers had no live view of what was waiting or why.",

    challengeIntro: "Fragmented channels and a policy system with no API",
    challengePoints: [
      "Scattered intake: Requests arrived by email, phone, and broker portal with no common case record.",
      "Manual handoffs: Each request passed through 3 to 5 people, and status lived in agents' own trackers.",
      "Legacy policy admin: The policy platform only exposed batch files, so agents rekeyed data by hand.",
    ],

    solutionIntro: "One servicing case model on ServiceNow FSO",
    solutionDetail:
      "Starfii configured ServiceNow Financial Services Operations as the single front door for servicing, with a case type for each common request and an integration layer to the policy administration system.",
    solution: [
      "Unified case management: Every channel creates the same FSO case, with customer and policy context attached.",
      "Guided workflows: Standard requests such as address changes and endorsements follow automated paths with approvals built in.",
      "Policy system integration: An integration layer reads and writes policy data so agents stop rekeying it.",
    ],

    results: [
      { metric: "−46%", label: "Handoffs per servicing request" },
      { metric: "5d → 1d", label: "Time to close a standard endorsement" },
      { metric: "68%", label: "Requests routed with no manual triage" },
      { metric: "6", label: "Servicing centers on one platform" },
    ],

    benefitsIntro: "What changed for servicing teams",
    benefits: [
      "Single customer view: Agents see the full case history and policy context on one screen.",
      "Faster resolution: Routine requests close in about a day instead of most of a week.",
      "Manager visibility: Queue age, SLA risk, and workload are visible live instead of assembled by hand.",
    ],

    summary:
      "The insurer's servicing problem was never agent effort. It was that nobody shared a record. Putting every request on one FSO case model removed the handoffs that were adding days to each request.",

    techStack: [
      "ServiceNow FSO",
      "Flow Designer",
      "IntegrationHub",
      "REST API integration",
      "Performance Analytics",
    ],

    date: "2026-09-01",
  },

  {
    slug: "unified-itsm-rollout-incident-resolution",
    category: "ITSM",

    title: "Cutting Incident Resolution Time by 40% with a Unified ITSM Rollout",
    subtitle:
      "Four support teams ran four queues across three tools, so one outage generated duplicate tickets and nobody owned the SLA.",
    cardDescription:
      "See how one governed incident queue, tuned priorities, and automated assignment took a scattered support model down to a single SLA backed process.",

    client: "Global manufacturer, ~9,000 employees, 4 regional IT support teams",
    industry: "Manufacturing",
    services: ["ServiceNow ITSM", "Incident Management", "Workflow Automation"],

    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop",

    overview: "A support model split across four queues and three tools",
    clientOverview:
      "Regional IT teams tracked incidents in shared mailboxes, a legacy help desk tool, and spreadsheets. Priority was set by whoever logged the ticket, so critical incidents were often noticed late, and there was no reliable company wide measure of resolution time.",

    challengeIntro: "No single queue and no shared definition of priority",
    challengePoints: [
      "Duplicate tickets: One outage could generate dozens of separate tickets across teams.",
      "Inconsistent priority: Impact and urgency were judged by hand, so critical incidents waited behind low value work.",
      "No SLA ownership: Resolution targets existed on paper, but nothing measured or enforced them.",
    ],

    solutionIntro: "One governed incident queue with rules based routing",
    solutionDetail:
      "Starfii implemented ServiceNow ITSM incident management on a single instance, consolidating the four queues and moving every team onto a shared priority matrix.",
    solution: [
      "Priority matrix: Impact and urgency now drive priority automatically instead of by opinion.",
      "Automated assignment: Assignment rules route incidents by category and configuration item to the right group first time.",
      "SLA tracking: Definitions, breach warnings, and escalations run inside the platform with live dashboards.",
    ],

    results: [
      { metric: "−40%", label: "Mean incident resolution time" },
      { metric: "4 → 1", label: "Support queues consolidated" },
      { metric: "−35%", label: "Duplicate and reassigned tickets" },
      { metric: "94%", label: "Incidents resolved within SLA" },
    ],

    benefitsIntro: "What changed for the IT support organization",
    benefits: [
      "Faster resolution: Incidents reach the right resolver group first time instead of bouncing between teams.",
      "Fewer duplicates: Related incidents link to one parent record during a major outage.",
      "Reliable reporting: One data set replaces per team spreadsheets and hand built monthly reports.",
    ],

    summary:
      "Resolution time improved because the work finally had one owner and one clock. A shared queue and a common priority matrix did more than any single automation on its own.",

    techStack: [
      "ServiceNow ITSM",
      "Incident Management",
      "Assignment rules",
      "SLA definitions",
      "Performance Analytics",
    ],

    date: "2026-08-01",
  },

  {
    slug: "cmdb-discovery-modernization",
    category: "CMDB",

    title: "Rebuilding a CMDB Enterprises Could Finally Trust",
    subtitle:
      "Roughly a third of CMDB records were stale, so change approvers ignored it and impact analysis was little more than guesswork.",
    cardDescription:
      "Discovery, data governance, and dependency mapping turned an outdated CMDB into the foundation for impact analysis and change risk scoring.",

    client: "Large enterprise, hybrid on prem and cloud estate, ~18,000 configuration items",
    industry: "Enterprise IT",
    services: ["ServiceNow CMDB", "Discovery", "Data Governance"],

    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop",

    overview: "A CMDB nobody believed, so nobody used",
    clientOverview:
      "The CMDB had been populated by hand during the original ServiceNow rollout and never reconciled since. Change managers stopped consulting it, so risk was assessed from memory, and outages regularly hit systems that no one knew were connected.",

    challengeIntro: "Stale records, no owners, and no dependency data",
    challengePoints: [
      "Stale records: Manually maintained entries drifted from reality shortly after each release.",
      "No ownership: No team was accountable for CI data quality, so errors were never corrected.",
      "Missing relationships: Application to infrastructure dependencies were undocumented, hiding the true impact of a change.",
    ],

    solutionIntro: "Automated discovery with governance built around it",
    solutionDetail:
      "Starfii replaced manual upkeep with scheduled discovery and service mapping, then put ownership and health scoring around the data so it stayed accurate after the project ended.",
    solution: [
      "Automated discovery: Discovery and service mapping populate and refresh CIs on a schedule.",
      "Data governance: Named owners, CMDB health scoring, and a remediation loop keep records accurate.",
      "Change risk scoring: Dependency maps now feed impact analysis inside change management.",
    ],

    results: [
      { metric: "62% → 96%", label: "CI completeness and accuracy score" },
      { metric: "18K", label: "Configuration items under automated discovery" },
      { metric: "−30%", label: "Change related incidents" },
      { metric: "Hours → min", label: "Time to run an impact analysis" },
    ],

    benefitsIntro: "What changed for change and operations teams",
    benefits: [
      "Trusted data: Change approvers use the CMDB again because the records match what is running.",
      "Faster impact analysis: Dependency lookups replace email threads asking who owns what.",
      "Sustained accuracy: Ownership and health scores keep quality from decaying after go live.",
    ],

    summary:
      "Discovery alone would not have fixed this CMDB. The lasting change was pairing automation with named owners and health scores, so accuracy became a routine job instead of a one off cleanup.",

    techStack: [
      "ServiceNow CMDB",
      "Discovery",
      "Service Mapping",
      "CMDB Health",
      "Change Management",
    ],

    date: "2026-07-01",
  },

  {
    slug: "service-catalog-employee-requests",
    category: "Employee Services",

    title: "A Service Catalog That Took Email Out of IT Requests",
    subtitle:
      "Employees asked IT for laptops, access, and software by email, so approvals stalled in inboxes and nobody could say where a request stood.",
    cardDescription:
      "Learn how a redesigned catalog with built in approvals moved thousands of monthly requests off inboxes and into a tracked, auditable workflow.",

    client: "Multinational services firm, ~12,000 employees across 14 offices",
    industry: "Professional Services",
    services: ["ServiceNow Service Catalog", "Request Management", "Employee Experience"],

    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000&auto=format&fit=crop",

    overview: "A firm running its IT requests through free text email",
    clientOverview:
      "Around 4,000 requests a month arrived as unstructured emails to shared mailboxes. Agents had to ask follow up questions before starting work, managers approved by replying to a thread, and employees had no way to check progress without writing again.",

    challengeIntro: "Unstructured requests and untracked approvals",
    challengePoints: [
      "Email based intake: Free text requests lacked the details needed to fulfill them, causing repeated back and forth.",
      "Untracked approvals: Managers approved by reply, leaving no reliable audit trail.",
      "Inconsistent fulfillment: The same request was handled differently in each of the 14 offices.",
    ],

    solutionIntro: "A single catalog with approvals and fulfillment built in",
    solutionDetail:
      "Starfii redesigned the service catalog around the most common request types, so each one collects the right information up front and routes itself through approval and fulfillment.",
    solution: [
      "Orderable catalog items: Each request is a clear form that captures every detail fulfillers need.",
      "Built in approvals: Approval rules route to the right manager automatically and record every decision.",
      "Fulfillment automation: Tasks are created and assigned by rule, with status visible to the requester throughout.",
    ],

    results: [
      { metric: "4,000+", label: "Monthly requests moved off email" },
      { metric: "−58%", label: "Average fulfillment time" },
      { metric: "100%", label: "Approvals with a full audit trail" },
      { metric: "−25%", label: "Service desk contacts asking for status" },
    ],

    benefitsIntro: "What changed for employees and IT",
    benefits: [
      "Self service clarity: Employees order from one place and can see exactly where a request stands.",
      "Audit ready: Every approval is recorded with who approved it and when.",
      "Less back and forth: Required fields remove the follow up emails that used to delay work.",
    ],

    summary:
      "The catalog did not make IT faster by adding tools. It made requests complete on the first attempt, which removed the follow up emails that were consuming most of the time.",

    techStack: [
      "ServiceNow Service Catalog",
      "Record Producers",
      "Flow Designer",
      "Approval workflows",
      "Employee Center",
    ],

    date: "2026-06-01",
  },

  {
    slug: "managed-servicenow-operations",
    category: "Managed Services",

    title: "Managed ServiceNow Operations for a Fortune 500 IT Estate",
    subtitle:
      "A three instance ServiceNow estate was falling behind on upgrades while the internal team spent most of its time on break fix.",
    cardDescription:
      "See how a named support team handled release upgrades, governance, and day to day fixes while internal IT focused on new capability.",

    client: "Fortune 500 enterprise, 3 ServiceNow instances, 800+ fulfillers",
    industry: "Enterprise Technology",
    services: ["ServiceNow Managed Services", "Release Upgrades", "Platform Governance"],

    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop",

    overview: "A platform team stuck keeping the lights on",
    clientOverview:
      "Two of the three instances were more than one family release behind, and the small internal admin team spent most of its week on fixes and access requests. New capability requests from the business sat in a backlog, and changes to the platform were being made without a review step.",

    challengeIntro: "Upgrade backlog, break fix overload, and ad hoc change",
    challengePoints: [
      "Upgrade backlog: Two instances were more than one family release behind, growing the cost of each upgrade.",
      "Break fix overload: Internal admins spent most of their time on fixes instead of improvements.",
      "No governance cadence: Platform changes were made ad hoc, without review or consistent standards.",
    ],

    solutionIntro: "A named team that runs the platform day to day",
    solutionDetail:
      "Starfii took over day to day operation of all three instances with a named team, defined response times, and a governance cadence, so internal IT could refocus on new capability.",
    solution: [
      "Named support team: The same engineers know the configuration and handle break fix under agreed response times.",
      "Upgrade program: Regression scope and customization debt are planned in advance so each release is routine.",
      "Governance forums: A regular review board approves platform changes and enforces configuration standards.",
    ],

    results: [
      { metric: "3", label: "Instances brought current on release" },
      { metric: "−50%", label: "Open platform defect backlog" },
      { metric: "−60%", label: "Internal admin time spent on break fix" },
      { metric: "0", label: "Unplanned outages during upgrades" },
    ],

    benefitsIntro: "What changed for the internal IT team",
    benefits: [
      "Time back: Internal admins now work on new capability requests instead of routine fixes.",
      "Predictable upgrades: Each family release follows a planned, tested path instead of a quarterly scramble.",
      "Controlled change: Every platform change passes a governance review before it reaches production.",
    ],

    summary:
      "The estate did not need more admins. It needed someone accountable for the routine work, so the internal team could spend its time on what the business was actually asking for.",

    techStack: [
      "ServiceNow platform",
      "Release upgrade planning",
      "Automated Test Framework",
      "Platform governance",
      "Managed support",
    ],

    date: "2026-05-01",
  },
];

// Newest date first. This is what every page actually imports.
export const caseStudies: CaseStudy[] = [...rawCaseStudies].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
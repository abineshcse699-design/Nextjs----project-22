// app/services/business-process-services/casestudies/data/casestudies.tsx

export type CaseStudyResult = {
  metric: string;
  label: string;
};

export type CaseStudyDetail = {
  slug: string;

  image: string;
  heroImage: string;

  category: string;
  title: string;
  subtitle: string;
  cardDescription: string;

  client: string;
  industry: string;
  services: string[];
  duration: string;

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

  // Publish date, format "YYYY-MM-DD". Used only for ordering — the
  // case study with the latest date always shows first, everywhere
  // this data is used (business-process-services page carousel AND
  // the /About/case-study all-case-studies filter page).
  date: string;
};

// Raw list — order here does NOT matter for display, only `date`
// controls what shows first. Add new entries anywhere with today's
// date (or later) and it auto-appears first everywhere.
const rawCaseStudies: CaseStudyDetail[] = [
  {
    slug: "manufacturer-order-to-cash-automation",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=900&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1800&auto=format&fit=crop",
    category: "Business Process Services",
    title: "Starfii Cuts Days Sales Outstanding for a Global Manufacturer",
    subtitle:
      "See how Starfii redesigned the order to cash process and introduced RPA to reduce billing disputes, accelerate invoice processing, and improve cash flow visibility.",
    cardDescription:
      "Starfii redesigned order to cash operations and introduced RPA to reduce DSO and billing disputes for a global manufacturer.",
    client: "Global Manufacturing Company",
    industry: "Manufacturing",
    services: ["Order to Cash Management", "RPA", "Managed Business Operations"],
    duration: "9 Months",
    overview:
      "A global manufacturer's order to cash process was spread across regional teams with no shared standard, driving up disputes and slowing collections.",
    clientOverview:
      "The manufacturer operated order to cash activities across multiple regional teams. Different workflows, inconsistent dispute handling, and manual invoice matching created delays between order completion, invoicing, collections, and cash realization.",
    challengeIntro:
      "The manufacturer needed a standardized order to cash process that could reduce exceptions and accelerate the movement from invoice to cash.",
    challengePoints: [
      "Regional inconsistency: Order to cash activities were handled differently across regional teams.",
      "Billing errors: Invoicing inconsistencies created unnecessary disputes and delayed collections.",
      "Manual processing: Invoice matching and exception handling required significant manual effort.",
      "Limited visibility: Finance leadership lacked one consistent view of receivables health across regions.",
    ],
    solutionIntro:
      "Starfii redesigned the order to cash operating model around one standardized workflow and then automated the repetitive activities.",
    solutionDetail:
      "The solution combined business process redesign, robotic process automation, standardized dispute workflows, and managed operations. The new model established clear ownership while automation handled repetitive invoice matching and routing activities.",
    solution: [
      "Process redesign: Regional order to cash workflows were mapped and consolidated into a standardized operating model.",
      "Invoice automation: RPA was introduced for repetitive invoice matching and processing activities.",
      "Dispute routing: Billing exceptions were routed through a standardized workflow with clear ownership.",
      "Managed operations: Starfii's operations team supported day to day execution against defined performance expectations.",
    ],
    results: [
      { metric: "28%", label: "Reduction in DSO" },
      { metric: "45%", label: "Fewer billing disputes" },
      { metric: "3x", label: "Faster invoice processing" },
    ],
    benefitsIntro:
      "The redesigned order to cash operation created a more consistent, visible, and efficient revenue collection process.",
    benefits: [
      "Faster collections: Standardized workflows helped move invoices through the process more efficiently.",
      "Fewer disputes: Improved invoice accuracy reduced avoidable billing exceptions.",
      "Lower manual effort: RPA removed repetitive invoice matching and routing activities.",
      "Better visibility: Finance leadership gained a more consistent view of receivables performance.",
    ],
    summary:
      "Starfii transformed a fragmented order to cash operation into a standardized and partially automated process, helping the manufacturer reduce DSO, lower billing disputes, and accelerate invoice processing.",
    techStack: [
      "RPA",
      "Workflow Automation",
      "Invoice Processing",
      "Order to Cash",
      "Process Mapping",
      "Operational Dashboards",
      "Managed Operations",
    ],
    date: "2026-03-10",
  },

  {
    slug: "retailer-procure-to-pay-transformation",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=900&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1800&auto=format&fit=crop",
    category: "Business Process Services",
    title: "Starfii Transforms Procure-to-Pay for a National Retailer",
    subtitle:
      "Explore how Starfii standardized vendor onboarding and automated invoice matching to reduce procure to pay cycle time across a national retail organization.",
    cardDescription:
      "Starfii standardized vendor onboarding and invoice processing to shorten the procure to pay cycle for a national retailer.",
    client: "National Retail Chain",
    industry: "Retail",
    services: ["Procure to Pay", "Vendor Onboarding", "RPA"],
    duration: "7 Months",
    overview:
      "A national retailer's procurement process relied on manual vendor onboarding and invoice matching, slowing purchase cycles across hundreds of stores.",
    clientOverview:
      "The retailer's procurement organization supported a large store network but relied on manual processes for vendor onboarding, invoice validation, and exception management. The result was inconsistent processing and longer purchasing cycles.",
    challengeIntro:
      "The retailer needed a repeatable procure to pay process that could support high transaction volumes without increasing manual effort.",
    challengePoints: [
      "Slow vendor onboarding: New vendors could take weeks to move through onboarding activities.",
      "Manual invoice matching: Invoice mismatches required significant manual intervention.",
      "Inconsistent controls: Procurement compliance checks were not applied consistently across the business.",
      "Longer purchase cycles: Manual activities slowed the movement from requisition through payment.",
    ],
    solutionIntro:
      "Starfii created a standardized procure to pay workflow and automated repetitive invoice processing activities.",
    solutionDetail:
      "The redesigned process introduced consistent vendor onboarding steps, compliance checkpoints, invoice matching automation, and standardized exception handling across the retailer's procurement operation.",
    solution: [
      "Vendor onboarding: A standardized onboarding workflow reduced variation between business units.",
      "Compliance checkpoints: Required procurement controls were embedded directly into the workflow.",
      "Invoice automation: RPA was used to automate repetitive invoice matching activities.",
      "Exception management: Mismatched invoices were routed through a defined resolution process.",
    ],
    results: [
      { metric: "50%", label: "Faster vendor onboarding" },
      { metric: "38%", label: "Shorter P2P cycle time" },
      { metric: "90%", label: "Invoices auto-matched" },
    ],
    benefitsIntro:
      "The new procure to pay operating model improved speed, consistency, and control across the retailer's procurement workflow.",
    benefits: [
      "Faster supplier activation: Vendors can move through onboarding with fewer manual delays.",
      "Higher automation: A large portion of invoice matching can be completed without manual intervention.",
      "Consistent compliance: Procurement controls are applied through a standardized process.",
      "Shorter cycle times: The complete procure to pay workflow moves faster from request to payment.",
    ],
    summary:
      "Starfii helped the retailer move from fragmented manual procurement operations to a standardized and automated procure to pay model that improved onboarding, invoice processing, and overall cycle time.",
    techStack: [
      "RPA",
      "Invoice Matching",
      "Workflow Automation",
      "Vendor Management",
      "Procure to Pay",
      "Exception Management",
      "Operational Reporting",
    ],
    date: "2026-04-22",
  },

  {
    slug: "hospital-network-revenue-cycle-management",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=900&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1800&auto=format&fit=crop",
    category: "Business Process Services",
    title: "Starfii Modernizes Revenue Cycle Management for a Hospital Network",
    subtitle:
      "Discover how Starfii's HIPAA compliant revenue cycle management program reduced claim denials and accelerated reimbursement across a multi facility hospital network.",
    cardDescription:
      "A standardized revenue cycle management program helped a hospital network reduce denials and accelerate reimbursement.",
    client: "Multi Facility Hospital Network",
    industry: "Healthcare",
    services: ["Revenue Cycle Management", "Claims Processing", "Compliance"],
    duration: "11 Months",
    overview:
      "A hospital network's revenue cycle process suffered from high claim denial rates and slow reimbursement across its facilities.",
    clientOverview:
      "The healthcare organization operated revenue cycle activities across multiple facilities. Variations in eligibility verification, coding quality, and denial handling created inconsistent reimbursement performance.",
    challengeIntro:
      "The hospital network needed to improve revenue cycle consistency while maintaining the compliance requirements of healthcare operations.",
    challengePoints: [
      "Late eligibility checks: Eligibility verification was happening too late in the revenue cycle.",
      "Coding errors: Inaccurate or incomplete coding contributed to avoidable claim denials.",
      "Inconsistent processes: Revenue cycle activities varied between facilities.",
      "Slow reimbursement: Different workflows created inconsistent reimbursement timelines.",
    ],
    solutionIntro:
      "Starfii rebuilt the revenue cycle workflow around earlier verification, stronger coding controls, and standardized denial management.",
    solutionDetail:
      "The solution combined revenue cycle operations, claims processing, compliance controls, eligibility verification, coding accuracy checks, and structured denial management across the hospital network.",
    solution: [
      "Eligibility verification: Earlier checks were introduced to identify potential claim issues before submission.",
      "Coding quality: Additional accuracy checks were incorporated into the claims workflow.",
      "Denial management: Denied claims were routed through a standardized process for faster resolution.",
      "Standardized operations: Revenue cycle activities were aligned across facilities for more consistent performance.",
    ],
    results: [
      { metric: "32%", label: "Fewer claim denials" },
      { metric: "40%", label: "Faster reimbursement" },
      { metric: "HIPAA", label: "Compliant delivery" },
    ],
    benefitsIntro:
      "The redesigned revenue cycle model created a more consistent path from patient service through claim submission and reimbursement.",
    benefits: [
      "Fewer avoidable denials: Earlier eligibility and coding checks help prevent common claim issues.",
      "Faster reimbursement: Standardized workflows reduce unnecessary delays in the revenue cycle.",
      "Consistent performance: Facilities operate against a shared process framework.",
      "Compliance focused delivery: Healthcare operations are structured around appropriate compliance controls.",
    ],
    summary:
      "Starfii modernized the hospital network's revenue cycle operation by standardizing workflows, strengthening upstream claim controls, and creating a more consistent approach to denial management and reimbursement.",
    techStack: [
      "Revenue Cycle Management",
      "Claims Processing",
      "Eligibility Verification",
      "Denial Management",
      "Healthcare Operations",
      "Compliance Controls",
      "Operational Reporting",
    ],
    date: "2026-05-30",
  },

  {
    slug: "insurer-finance-accounting-close",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=900&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1800&auto=format&fit=crop",
    category: "Business Process Services",
    title: "Starfii Shortens Month End Close for a National Insurer",
    subtitle:
      "Learn how Starfii standardized reconciliations and introduced a managed close process to shorten the month end reporting cycle for a national insurer.",
    cardDescription:
      "Standardized reconciliations and managed finance operations helped a national insurer shorten its month end close.",
    client: "National Insurance Provider",
    industry: "Insurance",
    services: ["Finance & Accounting Outsourcing", "Reconciliations", "Reporting"],
    duration: "8 Months",
    overview:
      "A national insurer's month end close process was manual and inconsistent across business units, delaying financial reporting every cycle.",
    clientOverview:
      "Finance teams across business units followed different reconciliation processes and relied on spreadsheets to track close activities. Leadership lacked a consistent view of progress and exceptions during the close cycle.",
    challengeIntro:
      "The insurer needed a standardized finance operations model that could accelerate close activities while improving reconciliation accuracy and visibility.",
    challengePoints: [
      "Inconsistent reconciliations: Business units followed different approaches to reconciliation activities.",
      "Spreadsheet dependency: Close checklists and status tracking relied heavily on spreadsheets.",
      "Limited visibility: Finance leadership could not easily see close progress across every business unit.",
      "Long close cycle: Manual coordination extended the time required to complete month end reporting.",
    ],
    solutionIntro:
      "Starfii standardized reconciliation workflows and introduced a managed close operating model with defined performance expectations.",
    solutionDetail:
      "The new operating model created consistent reconciliation procedures, standardized close checklists, SLA based execution, and dashboards that gave finance leadership visibility into close progress.",
    solution: [
      "Standardized reconciliations: Common reconciliation procedures were introduced across business units.",
      "Managed close process: Finance operations were organized around defined responsibilities and timelines.",
      "Performance dashboards: Leadership received clearer visibility into close progress and exceptions.",
      "Continuous improvement: Recurring reconciliation issues were tracked as improvement opportunities.",
    ],
    results: [
      { metric: "35%", label: "Faster month end close" },
      { metric: "42%", label: "Fewer reconciliation errors" },
      { metric: "100%", label: "Business units standardized" },
    ],
    benefitsIntro:
      "The standardized finance operations model improved close speed, reconciliation quality, and leadership visibility.",
    benefits: [
      "Faster financial reporting: Standardized close activities reduce unnecessary coordination and rework.",
      "Improved accuracy: Consistent reconciliation procedures reduce process variation.",
      "Better visibility: Finance leaders can see close status and exceptions more clearly.",
      "Scalable operations: A common process model can be extended across business units.",
    ],
    summary:
      "Starfii transformed the insurer's month end close from a fragmented spreadsheet driven process into a standardized managed finance operation with clearer controls, visibility, and performance.",
    techStack: [
      "Finance Operations",
      "Reconciliations",
      "Month End Close",
      "Operational Dashboards",
      "SLA Management",
      "Financial Reporting",
      "Process Standardization",
    ],
    date: "2026-07-14",
  },

  {
    slug: "telecom-customer-operations-contact-center",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=900&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1800&auto=format&fit=crop",
    category: "Business Process Services",
    title: "Starfii Runs Customer Operations for a Telecom Provider at Scale",
    subtitle:
      "See how Starfii's managed contact center and ticket triage operation improved first contact resolution and reduced average handling time for a regional telecom provider.",
    cardDescription:
      "Managed customer operations and standardized ticket triage improved resolution performance for a regional telecom provider.",
    client: "Regional Telecom Provider",
    industry: "Telecommunications",
    services: ["Customer Operations", "Contact Center", "Ticket Triage"],
    duration: "10 Months",
    overview:
      "A regional telecom provider's contact center struggled with long resolution times and inconsistent ticket handling across support tiers.",
    clientOverview:
      "The telecom provider managed customer requests across multiple support tiers. Tickets were manually triaged, priorities were inconsistent, and case handling varied between agents, resulting in unnecessary transfers and longer resolution times.",
    challengeIntro:
      "The telecom provider needed a consistent customer operations model that could improve resolution speed without sacrificing service quality.",
    challengePoints: [
      "Manual triage: Customer tickets were manually categorized and routed without consistent priority logic.",
      "Low first contact resolution: Customers frequently needed multiple interactions before their issues were resolved.",
      "Inconsistent handling: Agent workflows varied between teams and support tiers.",
      "Long handling times: Poor routing and repeated case work increased average handling time.",
    ],
    solutionIntro:
      "Starfii introduced standardized ticket triage, agent playbooks, and managed back office case handling.",
    solutionDetail:
      "The new customer operations model established consistent ticket priority rules, standardized agent workflows, structured escalation paths, and managed back office support against defined SLAs.",
    solution: [
      "Standardized triage: Tickets were classified using consistent priority and routing rules.",
      "Agent playbooks: Support teams received repeatable workflows for common customer scenarios.",
      "Back office handling: Complex cases were routed to managed operations teams for structured resolution.",
      "SLA management: Customer operations performance was tracked against agreed service levels.",
    ],
    results: [
      { metric: "31%", label: "Higher first contact resolution" },
      { metric: "26%", label: "Lower average handling time" },
      { metric: "24/7", label: "Managed operations coverage" },
    ],
    benefitsIntro:
      "The new customer operations model created more consistent service delivery while improving resolution efficiency.",
    benefits: [
      "Higher first contact resolution: More customer issues can be resolved during the initial interaction.",
      "Lower handling time: Standardized workflows reduce unnecessary case work.",
      "Consistent service delivery: Agent playbooks create a common operating approach.",
      "Continuous coverage: Managed operations provide scalable support across customer service workflows.",
    ],
    summary:
      "Starfii helped the telecom provider transform fragmented customer support operations into a standardized managed service with stronger ticket routing, clearer workflows, and measurable SLA performance.",
    techStack: [
      "Contact Center",
      "Ticket Triage",
      "Workflow Management",
      "Case Management",
      "SLA Management",
      "Customer Operations",
      "Operational Reporting",
    ],
    date: "2026-08-25",
  },

  
];

// Newest date first — this is what every page actually imports.
export const caseStudies: CaseStudyDetail[] = [...rawCaseStudies].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export function getCaseStudyBySlug(
  slug: string
): CaseStudyDetail | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
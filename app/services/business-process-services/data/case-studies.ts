export type CaseStudyStat = {
  value: string;
  label: string;
};

export type CaseStudyDetail = {
  slug: string;
  image: string;
  heroImage?: string;
  title: string;
  body: string;
  client: string;
  industry: string;
  services: string[];
  duration: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string;
  stats: CaseStudyStat[];
};

export const caseStudies: CaseStudyDetail[] = [
  {
    slug: "manufacturer-order-to-cash-automation",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=900&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1800&auto=format&fit=crop",
    title: "Starfii Cuts Days Sales Outstanding for a Global Manufacturer",
    body: "See how Starfii's order to cash redesign and RPA rollout cut days sales outstanding and reduced billing disputes for a global manufacturing client.",
    client: "Global Manufacturing Company",
    industry: "Manufacturing",
    services: ["Order to Cash Management", "RPA", "Managed Business Operations"],
    duration: "9 Months",
    overview:
      "A global manufacturer's order to cash process was spread across regional teams with no shared standard, driving up disputes and slowing collections.",
    challenge:
      "Invoicing errors and inconsistent dispute handling across regions meant cash was tied up longer than it needed to be, with no single view of receivables health.",
    solution:
      "Starfii redesigned the order to cash process around one standard workflow, then deployed RPA for invoice matching and automated dispute routing, backed by a managed operations team running the process day to day.",
    results:
      "Days sales outstanding dropped, billing disputes fell sharply, and finance leadership gained a single, real time view of receivables across every region.",
    stats: [
      { value: "28%", label: "Reduction in DSO" },
      { value: "45%", label: "Fewer billing disputes" },
      { value: "3x", label: "Faster invoice processing" },
    ],
  },
  {
    slug: "retailer-procure-to-pay-transformation",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=900&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1800&auto=format&fit=crop",
    title: "Starfii Transforms Procure-to-Pay for a National Retailer",
    body: "Explore how Starfii standardized vendor onboarding and automated invoice matching, cutting procure to pay cycle time for a national retail chain.",
    client: "National Retail Chain",
    industry: "Retail",
    services: ["Procure to Pay", "Vendor Onboarding", "RPA"],
    duration: "7 Months",
    overview:
      "A national retailer's procurement process relied on manual vendor onboarding and invoice matching, slowing purchase cycles across hundreds of stores.",
    challenge:
      "Vendor onboarding took weeks, invoice mismatches were resolved manually, and procurement had no consistent compliance checkpoint across the business.",
    solution:
      "Starfii standardized vendor onboarding into a single workflow and automated invoice matching with RPA, giving procurement a compliant, repeatable process end to end.",
    results:
      "Procure to pay cycle time shortened significantly, invoice matching errors dropped, and vendor onboarding time was cut from weeks to days.",
    stats: [
      { value: "50%", label: "Faster vendor onboarding" },
      { value: "38%", label: "Shorter P2P cycle time" },
      { value: "90%", label: "Invoices auto-matched" },
    ],
  },
  {
    slug: "hospital-network-revenue-cycle-management",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=900&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1800&auto=format&fit=crop",
    title: "Starfii Modernizes Revenue Cycle Management for a Hospital Network",
    body: "Discover how Starfii's HIPAA compliant RCM program reduced claim denials and accelerated reimbursement for a multi facility hospital network.",
    client: "Multi Facility Hospital Network",
    industry: "Healthcare",
    services: ["Revenue Cycle Management", "Claims Processing", "Compliance"],
    duration: "11 Months",
    overview:
      "A hospital network's revenue cycle process suffered from high claim denial rates and slow reimbursement across its facilities.",
    challenge:
      "Eligibility checks happened too late in the cycle, coding errors drove denials, and reimbursement timelines varied widely between facilities.",
    solution:
      "Starfii's HIPAA compliant RCM team rebuilt the cycle around earlier eligibility verification, coding accuracy checks, and standardized denial management across every facility.",
    results:
      "Claim denials dropped, reimbursement timelines shortened, and the network gained consistent RCM performance across all facilities.",
    stats: [
      { value: "32%", label: "Fewer claim denials" },
      { value: "40%", label: "Faster reimbursement" },
      { value: "HIPAA", label: "Fully compliant delivery" },
    ],
  },
  {
    slug: "insurer-finance-accounting-close",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=900&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1800&auto=format&fit=crop",
    title: "Starfii Shortens Month End Close for a National Insurer",
    body: "Learn how Starfii's finance and accounting outsourcing team standardized reconciliations and shortened the month end close cycle for a national insurer.",
    client: "National Insurance Provider",
    industry: "Insurance",
    services: ["Finance & Accounting Outsourcing", "Reconciliations", "Reporting"],
    duration: "8 Months",
    overview:
      "A national insurer's month end close process was manual and inconsistent across business units, delaying financial reporting every cycle.",
    challenge:
      "Reconciliations were done differently by each team, close checklists were tracked in spreadsheets, and finance leadership lacked real time visibility into close progress.",
    solution:
      "Starfii standardized reconciliations across business units and introduced a managed close process with defined SLAs and standardized dashboards for tracking progress.",
    results:
      "Month end close time shortened, reconciliation errors dropped, and finance leadership gained real time visibility into close status across every unit.",
    stats: [
      { value: "35%", label: "Faster month end close" },
      { value: "42%", label: "Fewer reconciliation errors" },
      { value: "100%", label: "Business units standardized" },
    ],
  },
  {
    slug: "telecom-customer-operations-contact-center",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=900&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1800&auto=format&fit=crop",
    title: "Starfii Runs Customer Operations for a Telecom Provider at Scale",
    body: "See how Starfii's managed contact center and ticket triage operation improved first contact resolution for a regional telecom provider.",
    client: "Regional Telecom Provider",
    industry: "Telecommunications",
    services: ["Customer Operations", "Contact Center", "Ticket Triage"],
    duration: "10 Months",
    overview:
      "A regional telecom provider's contact center struggled with long resolution times and inconsistent ticket handling across support tiers.",
    challenge:
      "Tickets were triaged manually with no standard priority logic, first contact resolution was low, and case handling varied widely between agents.",
    solution:
      "Starfii's managed customer operations team introduced standardized ticket triage rules, agent playbooks, and back office case handling running against defined SLAs.",
    results:
      "First contact resolution improved, average handling time dropped, and the provider gained consistent, measurable customer operations performance.",
    stats: [
      { value: "31%", label: "Higher first contact resolution" },
      { value: "26%", label: "Lower average handling time" },
      { value: "24/7", label: "Managed operations coverage" },
    ],
  },
];

export function getCaseStudyBySlug(
  slug: string
): CaseStudyDetail | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
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
    slug: "insurance-claims-low-code-platform",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=900&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1800&auto=format&fit=crop",
    title:
      "Starfii Transforms Reinsurance Claims Management with a Low Code Platform",
    body: "Explore how Starfii transformed insurance claims management with a low code digital platform, automating workflows, improving efficiency, and enhancing service quality for a global reinsurer.",
    client: "Global Reinsurance Provider",
    industry: "Insurance",
    services: ["Low Code Engineering", "Workflow Automation", "Claims Systems"],
    duration: "8 Months",
    overview:
      "A global reinsurer needed to replace a slow, paper heavy claims process with a modern digital platform that adjusters, underwriters, and partners could all rely on.",
    challenge:
      "Claims took weeks to move through manual review stages, data lived in disconnected spreadsheets, and there was no single view of a claim's status across teams or regions.",
    solution:
      "Starfii designed and built a low code claims management platform with configurable workflows, automated document intake, and role based dashboards, integrated directly with the reinsurer's existing policy and finance systems.",
    results:
      "Claims cycle time dropped sharply, manual data entry was largely eliminated, and regional teams gained real time visibility into every claim from first notice of loss to settlement.",
    stats: [
      { value: "62%", label: "Faster claims processing" },
      { value: "40+", label: "Workflows automated" },
      { value: "99.9%", label: "Platform uptime" },
    ],
  },
  {
    slug: "regional-bank-digital-banking-experience",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=900&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1800&auto=format&fit=crop",
    title:
      "Starfii Builds a Modern Digital Banking Experience for a Regional Bank",
    body: "See how Starfii's SaaS product engineering team rebuilt a legacy banking front end into a fast, secure digital experience that cut onboarding time and lifted customer satisfaction scores.",
    client: "Regional Retail Bank",
    industry: "Banking & Financial Services",
    services: ["SaaS Product Engineering", "UX Consulting", "Cloud Engineering"],
    duration: "10 Months",
    overview:
      "A regional bank's legacy online banking portal was holding back both customer experience and the pace of new feature delivery.",
    challenge:
      "The existing front end was built on an outdated stack, account opening required multiple branch visits, and every new feature took months to ship due to tight coupling with legacy core banking systems.",
    solution:
      "Starfii rebuilt the digital banking front end on a modern, cloud native architecture, introduced a fully digital onboarding flow, and decoupled the UI from core banking through a dedicated API layer.",
    results:
      "Customers can now open an account end to end online, page load times improved significantly, and the bank's product team ships new features on a weekly cadence instead of quarterly.",
    stats: [
      { value: "55%", label: "Reduction in onboarding time" },
      { value: "4.7/5", label: "Customer satisfaction score" },
      { value: "3x", label: "Faster feature releases" },
    ],
  },
  {
    slug: "utilities-digital-transformation-microsoft",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=900&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1800&auto=format&fit=crop",
    title:
      "Digital Transformation in Utilities Powered by Microsoft Business Applications",
    body: "Discover how Starfii used Microsoft Business Applications to help a utilities provider modernize field operations and give teams real time visibility across the grid.",
    client: "Regional Utilities Provider",
    industry: "Utilities & Energy",
    services: ["Microsoft Business Applications", "Field Operations", "Data Engineering"],
    duration: "12 Months",
    overview:
      "A utilities provider needed a unified way to manage field crews, outages, and grid assets that had previously been tracked across disconnected tools and paper logs.",
    challenge:
      "Field technicians lacked real time access to work orders, outage data was reconciled manually at the end of each shift, and leadership had no live picture of grid health.",
    solution:
      "Starfii implemented a Microsoft Power Platform solution connecting field mobile apps, Dynamics 365, and Power BI dashboards, giving crews, dispatchers, and leadership one connected system.",
    results:
      "Field teams now receive and close out work orders in real time, outage response times improved, and leadership has a live, always current view of grid status across every region.",
    stats: [
      { value: "45%", label: "Faster outage response" },
      { value: "100%", label: "Field crews on the platform" },
      { value: "Real time", label: "Grid visibility for leadership" },
    ],
  },
  {
    slug: "digital-mortgage-automation",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=900&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1800&auto=format&fit=crop",
    title: "Starfii Automates the Digital Mortgage Application Process",
    body: "Learn how Starfii's intelligent automation shortened mortgage approval cycles from weeks to days while keeping every step compliant and fully auditable.",
    client: "National Mortgage Lender",
    industry: "Financial Services",
    services: ["Intelligent Automation", "Compliance Engineering", "Cloud Engineering"],
    duration: "9 Months",
    overview:
      "A national mortgage lender wanted to cut approval times without compromising on the compliance checks required at every stage of the underwriting process.",
    challenge:
      "Manual document verification, disconnected underwriting steps, and a lack of audit trails meant approvals routinely took several weeks and were hard to trace.",
    solution:
      "Starfii introduced intelligent document processing, automated underwriting checkpoints, and a fully auditable workflow engine covering the entire mortgage application lifecycle.",
    results:
      "Approval cycles dropped from weeks to days, every step of the process is now automatically logged for compliance, and underwriters spend far less time on manual verification.",
    stats: [
      { value: "70%", label: "Faster approval cycles" },
      { value: "100%", label: "Steps fully auditable" },
      { value: "35%", label: "Lower processing cost" },
    ],
  },
  {
    slug: "healthcare-saas-platform-scale",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=900&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1800&auto=format&fit=crop",
    title:
      "Starfii Scales a SaaS Platform for a Fortune 500 Healthcare Provider",
    body: "See how Starfii's composable architecture let a healthcare SaaS platform scale to millions of users without sacrificing reliability or HIPAA compliance.",
    client: "Fortune 500 Healthcare Provider",
    industry: "Healthcare",
    services: ["SaaS Product Engineering", "Composable Architecture", "Cloud Engineering"],
    duration: "14 Months",
    overview:
      "A healthcare SaaS platform was hitting scaling limits as user growth accelerated, putting reliability and HIPAA compliance at risk during peak load.",
    challenge:
      "The monolithic platform architecture could not scale horizontally, deployments were risky and infrequent, and compliance reviews were slowing every release.",
    solution:
      "Starfii re architected the platform using a composable, microservices based approach on a HIPAA compliant cloud foundation, with automated compliance checks built into the CI/CD pipeline.",
    results:
      "The platform now scales elastically to millions of users, deployment frequency increased significantly, and compliance validation happens automatically on every release.",
    stats: [
      { value: "5M+", label: "Users supported" },
      { value: "99.99%", label: "Platform uptime" },
      { value: "HIPAA", label: "Fully compliant by design" },
    ],
  },
];



export function getCaseStudyBySlug(
  slug: string
): CaseStudyDetail | undefined {
  return caseStudies.find(
    (study) => study.slug === slug
  );
}


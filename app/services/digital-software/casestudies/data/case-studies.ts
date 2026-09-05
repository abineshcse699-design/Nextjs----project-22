export type CaseStudyStat = {
  value: string;
  label: string;
};

export type CaseStudyTestimonial = {
  quote: string;
  author: string;
  role: string;
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
  tags: string[];
  testimonial: CaseStudyTestimonial;
};

/* ============================================================
   CASE STUDY IMAGE MAP
   Each card + hero uses a visually relevant IT/domain image.
============================================================ */

export const caseStudies: CaseStudyDetail[] = [
  /* ============================================================
     01. INSURANCE — Claims / Digital Workflow
     Image theme: paperwork/contract digitization, claims documents
  ============================================================ */
  {
    slug: "insurance-claims-low-code-platform",

    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2000&auto=format&fit=crop",

    title:
      "Starfii Transforms Reinsurance Claims Management with a Low Code Platform",

    body:
      "Explore how Starfii transformed insurance claims management with a low code digital platform, automating workflows, improving efficiency, and enhancing service quality for a global reinsurer.",

    client: "Global Reinsurance Provider",
    industry: "Insurance",

    services: [
      "Low Code Engineering",
      "Workflow Automation",
      "Claims Systems",
    ],

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

    tags: ["Low-code platforms", "Workflow automation", "Systems integration"],

    testimonial: {
      quote:
        "Our adjusters finally have one place to see a claim's full history. The platform gave us back weeks in every cycle.",
      author: "Director of Claims Operations",
      role: "Global Reinsurance Provider",
    },
  },

  /* ============================================================
     02. BANKING — Digital Banking / FinTech
     Image theme: mobile banking app, digital payments
  ============================================================ */
  {
    slug: "regional-bank-digital-banking-experience",

    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2000&auto=format&fit=crop",

    title:
      "Starfii Builds a Modern Digital Banking Experience for a Regional Bank",

    body:
      "See how Starfii's SaaS product engineering team rebuilt a legacy banking experience into a fast, secure digital platform that improved onboarding and customer engagement.",

    client: "Regional Retail Bank",
    industry: "Banking & Financial Services",

    services: [
      "SaaS Product Engineering",
      "UX Consulting",
      "Cloud Engineering",
    ],

    duration: "10 Months",

    overview:
      "A regional bank's legacy online banking portal was holding back both customer experience and the pace of new feature delivery.",

    challenge:
      "The existing front end was built on an outdated stack, account opening required multiple branch visits, and every new feature took months to ship because the experience was tightly coupled with legacy banking systems.",

    solution:
      "Starfii rebuilt the digital banking experience on a modern cloud native architecture, introduced a fully digital onboarding flow, and decoupled the user experience from core banking through a dedicated API layer.",

    results:
      "Customers can now complete account opening digitally, page performance improved significantly, and the bank's product team can release new capabilities much faster.",

    stats: [
      { value: "55%", label: "Reduction in onboarding time" },
      { value: "4.7/5", label: "Customer satisfaction score" },
      { value: "3x", label: "Faster feature releases" },
    ],

    tags: ["Cloud-native architecture", "API design", "UX research"],

    testimonial: {
      quote:
        "Customers open accounts in minutes now, not branch visits. That shift changed how our product team thinks about every release.",
      author: "Head of Digital Banking",
      role: "Regional Retail Bank",
    },
  },

  /* ============================================================
     03. UTILITIES — Smart Grid / Energy Technology
     Image theme: power lines, energy infrastructure
  ============================================================ */
  {
    slug: "utilities-digital-transformation-microsoft",

    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2000&auto=format&fit=crop",

    title:
      "Digital Transformation in Utilities Powered by Microsoft Business Applications",

    body:
      "Discover how Starfii used Microsoft Business Applications to help a utilities provider modernize field operations and create real time visibility across its infrastructure.",

    client: "Regional Utilities Provider",
    industry: "Utilities & Energy",

    services: [
      "Microsoft Business Applications",
      "Field Operations",
      "Data Engineering",
    ],

    duration: "12 Months",

    overview:
      "A utilities provider needed a unified way to manage field crews, outages, and infrastructure assets that had previously been tracked across disconnected tools and paper based processes.",

    challenge:
      "Field technicians lacked real time access to work orders, outage information was reconciled manually, and leadership had no live view of infrastructure status.",

    solution:
      "Starfii implemented a Microsoft Power Platform solution connecting field mobile applications, Dynamics 365, and Power BI dashboards to create one connected operational environment.",

    results:
      "Field teams can now receive and close work orders in real time, outage response has improved, and leadership has a consolidated view of operational status.",

    stats: [
      { value: "45%", label: "Faster outage response" },
      { value: "100%", label: "Field crews connected" },
      { value: "Real time", label: "Operational visibility" },
    ],

    tags: ["Microsoft Power Platform", "Field mobility", "Data integration"],

    testimonial: {
      quote:
        "Field crews see the same information leadership sees, in real time. Outages get resolved faster because nobody's waiting on a phone call.",
      author: "VP of Field Operations",
      role: "Regional Utilities Provider",
    },
  },

  /* ============================================================
     04. MORTGAGE — Digital Lending / PropTech
     Image theme: home keys, real estate / property documents
  ============================================================ */
  {
    slug: "digital-mortgage-automation",

    image:
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=1200&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=2000&auto=format&fit=crop",

    title:
      "Starfii Automates the Digital Mortgage Application Process",

    body:
      "Learn how Starfii's intelligent automation modernized the mortgage application journey, reducing manual processing while improving compliance and traceability.",

    client: "National Mortgage Lender",
    industry: "Financial Services",

    services: [
      "Intelligent Automation",
      "Compliance Engineering",
      "Cloud Engineering",
    ],

    duration: "9 Months",

    overview:
      "A national mortgage lender wanted to reduce application processing time without compromising the compliance checks required throughout underwriting.",

    challenge:
      "Manual document verification, disconnected underwriting steps, and limited audit visibility meant applications could take several weeks to process.",

    solution:
      "Starfii introduced intelligent document processing, automated underwriting checkpoints, and an auditable workflow engine covering the mortgage application lifecycle.",

    results:
      "Approval cycles were reduced, compliance tracking became more consistent, and underwriting teams spent significantly less time on repetitive document verification.",

    stats: [
      { value: "70%", label: "Faster approval cycles" },
      { value: "100%", label: "Process traceability" },
      { value: "35%", label: "Lower processing effort" },
    ],

    tags: [
      "Intelligent document processing",
      "Compliance automation",
      "Workflow engines",
    ],

    testimonial: {
      quote:
        "We cut weeks out of underwriting without cutting a single compliance check. That was the balance we needed.",
      author: "Head of Underwriting",
      role: "National Mortgage Lender",
    },
  },

  /* ============================================================
     05. HEALTHCARE — Healthcare Technology / SaaS
     Image theme: medical data on tablet/device, digital health
  ============================================================ */
  {
    slug: "healthcare-saas-platform-scale",

    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000&auto=format&fit=crop",

    title:
      "Starfii Scales a SaaS Platform for a Fortune 500 Healthcare Provider",

    body:
      "See how Starfii's composable architecture helped a healthcare SaaS platform scale while improving reliability, deployment velocity, and compliance readiness.",

    client: "Fortune 500 Healthcare Provider",
    industry: "Healthcare",

    services: [
      "SaaS Product Engineering",
      "Composable Architecture",
      "Cloud Engineering",
    ],

    duration: "14 Months",

    overview:
      "A healthcare SaaS platform was reaching architectural scaling limits as adoption accelerated, creating challenges around reliability, releases, and compliance.",

    challenge:
      "The monolithic architecture made horizontal scaling difficult, deployments were risky and infrequent, and compliance reviews added friction to the release process.",

    solution:
      "Starfii re architected the platform using a composable, microservices based approach on a HIPAA aligned cloud foundation, with automated compliance validation integrated into the CI/CD pipeline.",

    results:
      "The platform can now scale more efficiently, deployment frequency increased, and compliance validation became an integrated part of the engineering lifecycle.",

    stats: [
      { value: "5M+", label: "Users supported" },
      { value: "99.99%", label: "Platform uptime" },
      { value: "HIPAA", label: "Compliance ready architecture" },
    ],

    tags: ["Microservices", "HIPAA-aligned cloud", "CI/CD automation"],

    testimonial: {
      quote:
        "We can ship safely now. Compliance checks live inside the pipeline instead of blocking it.",
      author: "VP of Engineering",
      role: "Fortune 500 Healthcare Provider",
    },
  },

  /* ============================================================
     06. AI & DATA
     Image theme: data visualization, code, AI/analytics
  ============================================================ */
  {
    slug: "enterprise-ai-data-analytics-platform",

    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1200&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2000&auto=format&fit=crop",

    title:
      "Starfii Builds an AI Powered Enterprise Data and Analytics Platform",

    body:
      "Discover how Starfii helped an enterprise turn fragmented business data into an intelligent analytics platform with AI driven insights and modern data engineering.",

    client: "Global Enterprise",
    industry: "Technology & Business Services",

    services: [
      "Data Engineering",
      "Generative AI",
      "Business Intelligence",
      "Cloud Engineering",
    ],

    duration: "11 Months",

    overview:
      "A growing enterprise had data distributed across multiple applications, databases, and reporting systems, making it difficult for business teams to access consistent insights.",

    challenge:
      "Data silos, manual reporting, inconsistent definitions, and disconnected analytics tools slowed decision making and created unnecessary operational effort.",

    solution:
      "Starfii designed a modern cloud data platform that unified business data pipelines, analytics dashboards, and AI powered insight generation into a scalable enterprise architecture.",

    results:
      "Business teams gained a more consistent source of operational insight, reporting became significantly more automated, and AI capabilities could be introduced directly into existing analytics workflows.",

    stats: [
      { value: "60%", label: "Less manual reporting" },
      { value: "4x", label: "Faster data availability" },
      { value: "24/7", label: "Automated data pipelines" },
    ],

    tags: ["Data engineering", "Generative AI", "Business intelligence"],

    testimonial: {
      quote:
        "Every team is finally working from the same numbers. That alone changed how fast we make decisions.",
      author: "Head of Data & Analytics",
      role: "Global Enterprise",
    },
  },

  /* ============================================================
     07. CLOUD MODERNIZATION
     Image theme: server room, cloud infrastructure
  ============================================================ */
  {
    slug: "legacy-application-cloud-modernization",

    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2000&auto=format&fit=crop",

    title:
      "Starfii Modernizes a Legacy Enterprise Application for Cloud Scale",

    body:
      "See how Starfii modernized a complex legacy application portfolio with cloud engineering, API modernization, and DevOps automation to create a more scalable digital foundation.",

    client: "Enterprise Technology Provider",
    industry: "Technology & Enterprise Software",

    services: [
      "Legacy Software Modernization",
      "Cloud Engineering",
      "API Modernization",
      "DevOps Automation",
    ],

    duration: "13 Months",

    overview:
      "An enterprise application portfolio had accumulated years of technical complexity, making releases expensive, scaling difficult, and integration with modern applications increasingly challenging.",

    challenge:
      "Legacy dependencies, tightly coupled components, manual deployments, and limited API capabilities slowed product development and increased operational risk.",

    solution:
      "Starfii created a phased modernization roadmap, introduced API based integration, migrated workloads toward cloud native services, and embedded CI/CD automation into the software delivery lifecycle.",

    results:
      "The application portfolio became easier to evolve, deployments became more repeatable, and engineering teams gained a stronger foundation for future digital product development.",

    stats: [
      { value: "50%", label: "Faster release cycles" },
      { value: "40%", label: "Lower deployment effort" },
      { value: "99.9%", label: "Target platform availability" },
    ],

    tags: ["API modernization", "Cloud migration", "DevOps automation"],

    testimonial: {
      quote:
        "Releases used to be an event. Now they're routine, and that changes what our engineers spend their time on.",
      author: "VP of Engineering",
      role: "Enterprise Technology Provider",
    },
  },

  /* ============================================================
     08. RETAIL & E-COMMERCE — Personalization / Digital Storefront
     Image theme: e-commerce, online shopping, digital retail
  ============================================================ */
  {
    slug: "retail-ecommerce-personalization-platform",

    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop",

    title:
      "Starfii Powers a Personalized Digital Storefront for a Global Retailer",

    body:
      "Discover how Starfii helped a global retailer unify its e-commerce experience with a real time personalization engine, boosting conversions and customer loyalty.",

    client: "Global Retail Brand",
    industry: "Retail & E-Commerce",

    services: [
      "SaaS Product Engineering",
      "Personalization Engineering",
      "Cloud Engineering",
    ],

    duration: "10 Months",

    overview:
      "A global retailer wanted to move beyond generic storefronts and deliver a shopping experience tailored to each customer across web and mobile.",

    challenge:
      "Customer data was fragmented across marketing, commerce, and loyalty systems, making it difficult to personalize recommendations or promotions in real time.",

    solution:
      "Starfii built a unified customer data layer and a real time personalization engine, integrated directly into the storefront, checkout, and mobile app experiences.",

    results:
      "The retailer saw stronger engagement on personalized product recommendations, higher repeat purchase rates, and a more consistent experience across every channel.",

    stats: [
      { value: "38%", label: "Increase in conversion rate" },
      { value: "2.5x", label: "Higher repeat purchases" },
      { value: "All channels", label: "Unified customer experience" },
    ],

    tags: [
      "Personalization engines",
      "Customer data platforms",
      "Omnichannel commerce",
    ],

    testimonial: {
      quote:
        "Recommendations feel personal now, on every channel. Customers notice, and they come back more often.",
      author: "Head of Digital Commerce",
      role: "Global Retail Brand",
    },
  },
];

/* ================================================================
   GET CASE STUDY BY SLUG
================================================================ */

export function getCaseStudyBySlug(
  slug: string
): CaseStudyDetail | undefined {
  return caseStudies.find(
    (study) => study.slug === slug
  );
}
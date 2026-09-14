// PLACE THIS FILE AT:
// app/services/software-product-engineering/casestudies/data/casestudies.tsx

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

  // Publish date, format "YYYY-MM-DD". Used only for ordering — the
  // case study with the latest date always shows first, everywhere
  // this data is used (the service page carousel AND the
  // all-case-studies listing page).
  date: string;
};

// Raw list — order here does NOT matter for display, only `date`
// controls what shows first. Add new entries anywhere with today's
// date (or later) and it auto-appears first everywhere.
const rawCaseStudies: CaseStudyDetail[] = [
  {
    slug: "retail-headless-storefront-rebuild",

    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1800&auto=format&fit=crop",

    title:
      "Starfii Rebuilds a National Retailer's Storefront on a Headless Stack",

    body:
      "Starfii re-architected an aging monolithic storefront into a headless, API driven web application, letting merchandising teams ship new experiences without waiting on a platform release cycle.",

    client: "National Retail Chain",

    industry: "Retail & E-Commerce",

    services: [
      "Web Application Development",
      "API & Integrations",
      "Product Modernization",
    ],

    duration: "8 Months",

    overview:
      "A national retailer's storefront was built on a decade old monolithic platform. Every merchandising change required a full platform release, slowing the business down during peak selling seasons.",

    challenge:
      "Marketing and merchandising teams could not launch new landing pages or promotions without engineering support tied to release cycles. Page load times were also degrading as the monolith grew, hurting conversion.",

    solution:
      "Starfii re-architected the storefront as a headless application, decoupling the front end from the commerce backend through a clean API layer. A component library gave merchandising teams a way to compose new pages without new deployments.",

    results:
      "The retailer cut page load times significantly and gave merchandising teams the ability to launch new campaign pages independently of engineering release cycles, directly ahead of peak season.",

    stats: [
      { value: "45%", label: "Faster page load times" },
      { value: "6x", label: "Faster campaign page launches" },
      { value: "0", label: "Engineering-blocked releases" },
    ],

    date: "2026-04-02",
  },

  {
    slug: "fintech-customer-onboarding-portal",

    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1800&auto=format&fit=crop",

    title:
      "A Secure Onboarding Portal Cuts Account Setup From Days to Minutes",

    body:
      "Starfii built a web and mobile onboarding experience for a fintech client, integrating identity verification and core banking APIs into a single guided flow that account holders can complete on their own.",

    client: "Fintech Provider",

    industry: "Financial Services",

    services: [
      "Product Strategy",
      "UI/UX Engineering",
      "Backend Engineering",
      "API & Integrations",
    ],

    duration: "7 Months",

    overview:
      "A fintech provider's account opening process depended on manual document review and back office data entry, creating a multi day delay between application and account activation.",

    challenge:
      "New customers dropped off during a lengthy, manual onboarding process. Back office teams manually reconciled identity documents against core banking records, introducing delay and error into every application.",

    solution:
      "Starfii designed and built a guided web and mobile onboarding flow, integrating identity verification and core banking APIs directly into the application. Real time validation replaced manual document review.",

    results:
      "Account setup time dropped from days to minutes, and the client saw a meaningful improvement in completed applications as friction was removed from the flow.",

    stats: [
      { value: "97%", label: "Faster account activation" },
      { value: "32%", label: "Higher application completion" },
      { value: "0", label: "Manual document reviews" },
    ],

    date: "2026-07-11",
  },

  {
    slug: "b2b-saas-multi-tenant-platform-launch",

    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1800&auto=format&fit=crop",

    title:
      "Launching a Multi Tenant SaaS Platform Built for Enterprise Growth",

    body:
      "Starfii designed the account, billing, and permissioning architecture for a B2B SaaS product's launch, giving the client a platform that scaled from its first customer to its first enterprise contract without a re-platform.",

    client: "B2B SaaS Startup",

    industry: "B2B SaaS",

    services: [
      "SaaS Engineering",
      "Backend Engineering",
      "Enterprise Application Development",
      "QA & Release Engineering",
    ],

    duration: "11 Months",

    overview:
      "A B2B SaaS startup needed a platform architecture that could support its first small customers while remaining ready for the enterprise contracts on its roadmap, without a costly re-architecture later.",

    challenge:
      "Early architecture decisions around tenancy, billing, and permissions are expensive to unwind. The founding team needed a platform that would not need to be rebuilt the moment a large enterprise customer signed.",

    solution:
      "Starfii designed a multi tenant architecture with tenant isolated data, usage based billing, and role based permissioning built in from the start. Automated CI/CD pipelines gave the small team confidence to release frequently.",

    results:
      "The platform onboarded its first enterprise customer without any architecture changes, and the automated release pipeline let a small engineering team ship weekly without production incidents.",

    stats: [
      { value: "0", label: "Re-platforms needed at enterprise scale" },
      { value: "3x", label: "Faster release cadence" },
      { value: "99.9%", label: "Platform uptime" },
    ],

    date: "2026-08-29",
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
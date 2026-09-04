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
    slug: "fintech-saas-platform-mvp-to-scale",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=900&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1800&auto=format&fit=crop",
    title: "Starfii Builds a Fortune 500 Fintech SaaS Platform From MVP to Scale",
    body: "See how Starfii's enterprise product engineering team took a fintech SaaS platform from a three month MVP to a full featured product serving Fortune 500 clients.",
    client: "Fortune 500 Fintech Company",
    industry: "Financial Services",
    services: ["Enterprise Product Engineering", "SaaS Product Engineering", "Cloud Engineering"],
    duration: "14 Months",
    overview:
      "A fintech company needed to move fast from concept to a working product, then scale that same platform to serve Fortune 500 clients without a rebuild.",
    challenge:
      "The client needed a working MVP in months, not years, but also needed the underlying architecture to hold up under enterprise scale and compliance requirements later.",
    solution:
      "Starfii ran product led discovery to scope a lean MVP, shipped it inside three months, then extended the same architecture with additional features, security controls, and cloud scaling as the client base grew to Fortune 500 accounts.",
    results:
      "The platform launched as an MVP in three months, scaled cleanly to serve Fortune 500 clients without a rebuild, and now supports a growing enterprise customer base on the original architecture.",
    stats: [
      { value: "3 mo", label: "MVP to launch" },
      { value: "5+", label: "Fortune 500 clients onboarded" },
      { value: "0", label: "Architecture rebuilds needed" },
    ],
  },
  {
    slug: "regional-bank-digital-banking-experience",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=900&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1800&auto=format&fit=crop",
    title: "Starfii Modernizes a Regional Bank's Digital Banking Experience",
    body: "Explore how Starfii's legacy software modernization team rebuilt a bank's front end into a fast, secure digital experience that cut onboarding time.",
    client: "Regional Retail Bank",
    industry: "Banking & Financial Services",
    services: ["Legacy Software Modernization", "Cloud Engineering", "UI/UX Consulting"],
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
    slug: "healthcare-saas-generative-ai-features",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=900&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1800&auto=format&fit=crop",
    title: "Starfii Ships a Generative AI Feature Set for a Healthcare SaaS Platform",
    body: "Discover how Starfii's Generative AI and LLM engineering team embedded Gen AI features into a HIPAA compliant SaaS platform for a healthcare client.",
    client: "Healthcare SaaS Provider",
    industry: "Healthcare",
    services: ["Generative AI & LLM Engineering", "SaaS Product Engineering", "Compliance Engineering"],
    duration: "9 Months",
    overview:
      "A healthcare SaaS platform wanted to add generative AI features for clinicians without compromising HIPAA compliance or platform stability.",
    challenge:
      "Any AI feature needed to meet strict healthcare compliance requirements, integrate cleanly with the existing platform, and prove real clinical value before rollout.",
    solution:
      "Starfii's Generative AI and LLM engineering team designed and shipped a set of Gen AI features, clinical note summarization and query assist, built on HIPAA compliant infrastructure and integrated directly into the existing SaaS platform.",
    results:
      "Clinicians adopted the new AI features quickly, documentation time dropped, and the platform passed compliance review with no findings.",
    stats: [
      { value: "38%", label: "Less documentation time" },
      { value: "HIPAA", label: "Fully compliant delivery" },
      { value: "9 mo", label: "Concept to production" },
    ],
  },
  {
    slug: "ecommerce-platform-peak-season-scale",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=900&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1800&auto=format&fit=crop",
    title: "Starfii Scales an E Commerce Platform for Peak Season Traffic",
    body: "See how Starfii's cloud engineering team re-architected an e commerce platform on AWS to handle peak season load without downtime.",
    client: "Direct to Consumer E Commerce Brand",
    industry: "E Commerce",
    services: ["Cloud Engineering", "AWS Architecture", "DevOps & Quality Engineering"],
    duration: "6 Months",
    overview:
      "An e commerce platform kept hitting capacity limits during peak sales events, resulting in slow pages and occasional downtime during the highest revenue days of the year.",
    challenge:
      "Traffic spiked far beyond normal load during major sale events, and the existing infrastructure could not scale fast enough to keep the site fast and stable.",
    solution:
      "Starfii's cloud engineering team re-architected the platform on AWS with auto scaling infrastructure, load tested against projected peak traffic, and automated the deployment pipeline so releases stayed safe even during high traffic windows.",
    results:
      "The platform handled its next peak season event with zero downtime, page load times stayed fast under maximum load, and infrastructure costs scaled with actual traffic instead of being over-provisioned year round.",
    stats: [
      { value: "0", label: "Downtime during peak season" },
      { value: "6x", label: "Traffic capacity increase" },
      { value: "25%", label: "Lower infrastructure cost" },
    ],
  },
  {
    slug: "enterprise-legacy-modernization-timeline",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=900&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1800&auto=format&fit=crop",
    title: "Starfii Cuts Legacy Modernization Timelines for an Enterprise Client",
    body: "Learn how Starfii's modernization roadmap moved a complex legacy application portfolio to a scalable cloud platform with minimal business disruption.",
    client: "Enterprise Technology Client",
    industry: "Enterprise Technology",
    services: ["Legacy Software Modernization", "Cloud Engineering", "Data Engineering"],
    duration: "16 Months",
    overview:
      "An enterprise client's application portfolio had grown into a tangle of legacy systems that were expensive to maintain and increasingly risky to change.",
    challenge:
      "Dozens of interdependent legacy applications made even small changes risky, in house teams lacked a clear modernization sequence, and any migration had to happen without disrupting live business operations.",
    solution:
      "Starfii built a phased modernization roadmap that sequenced migrations by business risk and technical dependency, moving each application to a scalable cloud platform while keeping the live system running throughout.",
    results:
      "The modernization program finished ahead of the original timeline, business operations continued without disruption throughout the migration, and the client's application portfolio now runs on a maintainable, cloud ready foundation.",
    stats: [
      { value: "20%", label: "Faster than planned timeline" },
      { value: "0", label: "Business disruption incidents" },
      { value: "30+", label: "Legacy applications modernized" },
    ],
  },
];

export function getCaseStudyBySlug(
  slug: string
): CaseStudyDetail | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
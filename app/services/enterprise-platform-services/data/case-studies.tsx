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
  body: string;

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
};

export const caseStudies: CaseStudyDetail[] = [
  {
    slug: "fintech-saas-platform-mvp-to-scale",

    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=900&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1800&auto=format&fit=crop",

    category: "Enterprise Platform Services",

    title:
      "Starfii Builds a Fortune 500 Fintech SaaS Platform From MVP to Scale",

    subtitle:
      "See how Starfii helped a fintech company move from a three month MVP to an enterprise scale SaaS platform without requiring an architecture rebuild.",

    body:
      "See how Starfii's enterprise product engineering team took a fintech SaaS platform from a three month MVP to a full featured product serving Fortune 500 clients.",

    client: "Fortune 500 Fintech Company",

    industry: "Financial Services",

    services: [
      "Enterprise Product Engineering",
      "SaaS Product Engineering",
      "Cloud Engineering",
    ],

    duration: "14 Months",

    overview:
      "A fintech company needed to move quickly from concept to a working product while ensuring the underlying platform could support enterprise scale, security, and future product growth.",

    clientOverview:
      "The client had a strong product concept but needed an engineering partner that could balance MVP speed with long term platform architecture. The platform needed to evolve from an early product into an enterprise SaaS environment without forcing the business into a costly rebuild.",

    challengeIntro:
      "The platform needed to launch quickly without creating technical debt that would block enterprise growth later.",

    challengePoints: [
      "MVP speed: The client needed a production ready MVP within months rather than years.",

      "Enterprise scale: The initial architecture needed to support a growing enterprise customer base.",

      "Product evolution: New features had to be added without destabilizing the original platform.",

      "Enterprise requirements: Security, reliability, and scalability needed to mature alongside the product.",
    ],

    solutionIntro:
      "Starfii combined product led discovery with scalable enterprise platform engineering to create an architecture that could evolve from MVP to enterprise scale.",

    solutionDetail:
      "Starfii scoped a lean MVP, established the core platform architecture, launched the first production version within three months, and then extended the same architecture with additional product capabilities, security controls, and cloud scalability as the customer base expanded.",

    solution: [
      "Product discovery: Starfii translated the product vision into a focused MVP roadmap and prioritized the capabilities required for launch.",

      "Scalable architecture: The platform foundation was designed to support future enterprise workloads without unnecessary complexity.",

      "Enterprise capabilities: Security, platform controls, and additional SaaS features were introduced as the product matured.",

      "Cloud engineering: Cloud infrastructure was scaled alongside customer and transaction growth rather than rebuilding the platform.",
    ],

    results: [
      {
        metric: "3 mo",
        label: "MVP to launch",
      },
      {
        metric: "5+",
        label: "Fortune 500 clients onboarded",
      },
      {
        metric: "0",
        label: "Architecture rebuilds needed",
      },
    ],

    benefitsIntro:
      "The platform gave the fintech business a faster path from product idea to enterprise adoption while preserving the original technology investment.",

    benefits: [
      "Faster product launch: The MVP reached production in three months.",

      "Enterprise readiness: The same platform architecture evolved to support Fortune 500 customers.",

      "Lower technical risk: The business avoided a disruptive architecture rebuild as adoption increased.",

      "Scalable product foundation: New capabilities could be introduced without replacing the original platform.",
    ],

    summary:
      "Starfii helped the fintech company move from MVP to enterprise scale on the same platform foundation, demonstrating how product engineering and cloud architecture can be designed for both speed and long term growth.",

    techStack: [
      "Enterprise Product Engineering",
      "SaaS Architecture",
      "Cloud Engineering",
      "API Architecture",
      "Security Engineering",
      "Scalable Infrastructure",
      "DevOps",
    ],
  },

  {
    slug: "regional-bank-digital-banking-experience",

    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=900&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1800&auto=format&fit=crop",

    category: "Enterprise Platform Services",

    title:
      "Starfii Modernizes a Regional Bank's Digital Banking Experience",

    subtitle:
      "Explore how Starfii modernized a regional bank's digital banking platform with a cloud native front end, digital onboarding, and a dedicated API layer.",

    body:
      "Explore how Starfii's legacy software modernization team rebuilt a bank's front end into a fast, secure digital experience that cut onboarding time.",

    client: "Regional Retail Bank",

    industry: "Banking & Financial Services",

    services: [
      "Legacy Software Modernization",
      "Cloud Engineering",
      "UI/UX Consulting",
    ],

    duration: "10 Months",

    overview:
      "A regional bank's legacy online banking platform was limiting customer experience and slowing the delivery of new digital banking capabilities.",

    clientOverview:
      "The bank's existing digital banking experience depended heavily on an outdated front end and tightly coupled integrations with core banking systems. Customers faced a fragmented account opening journey while internal product teams struggled to release improvements quickly.",

    challengeIntro:
      "The bank needed a modern digital experience without disrupting the core systems that continued to run critical banking operations.",

    challengePoints: [
      "Legacy front end: The existing user interface was built on an outdated technology stack.",

      "Slow onboarding: Customers needed multiple branch visits to complete account opening.",

      "Tightly coupled systems: New digital features depended heavily on legacy core banking integrations.",

      "Slow releases: Feature delivery took months because changes were closely tied to legacy systems.",
    ],

    solutionIntro:
      "Starfii modernized the digital banking experience while separating the customer facing platform from legacy core banking dependencies.",

    solutionDetail:
      "Starfii rebuilt the digital banking front end using a modern cloud native architecture, introduced an end to end digital onboarding flow, and created a dedicated API layer to decouple the experience from core banking systems.",

    solution: [
      "Modern front end: The legacy interface was rebuilt into a faster and more maintainable digital experience.",

      "Digital onboarding: Account opening was redesigned as an end to end online journey.",

      "API decoupling: A dedicated API layer reduced direct dependency between the front end and legacy core systems.",

      "Cloud architecture: The platform was structured for improved scalability and faster feature delivery.",
    ],

    results: [
      {
        metric: "55%",
        label: "Reduction in onboarding time",
      },
      {
        metric: "4.7/5",
        label: "Customer satisfaction score",
      },
      {
        metric: "3x",
        label: "Faster feature releases",
      },
    ],

    benefitsIntro:
      "The modernization created a faster customer experience while giving the bank a more flexible foundation for future digital banking products.",

    benefits: [
      "Faster account opening: Customers can complete onboarding through a digital journey.",

      "Improved customer experience: The modern interface provides a faster and more consistent experience.",

      "Faster product delivery: Decoupled architecture makes new feature development easier.",

      "Modern platform foundation: The bank has a more maintainable architecture for future digital services.",
    ],

    summary:
      "Starfii modernized the bank's digital platform without replacing the underlying core banking environment, creating a faster customer experience and a more flexible foundation for continuous digital innovation.",

    techStack: [
      "Legacy Modernization",
      "Cloud Native Architecture",
      "API Layer",
      "Digital Banking",
      "UI/UX Engineering",
      "Secure Integration",
      "DevOps",
    ],
  },

  {
    slug: "healthcare-saas-generative-ai-features",

    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=900&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1800&auto=format&fit=crop",

    category: "Enterprise Platform Services",

    title:
      "Starfii Ships a Generative AI Feature Set for a Healthcare SaaS Platform",

    subtitle:
      "Discover how Starfii extended a healthcare SaaS platform with Generative AI capabilities while maintaining HIPAA compliant infrastructure and platform stability.",

    body:
      "Discover how Starfii's Generative AI and LLM engineering team embedded Gen AI features into a HIPAA compliant SaaS platform for a healthcare client.",

    client: "Healthcare SaaS Provider",

    industry: "Healthcare",

    services: [
      "Generative AI & LLM Engineering",
      "SaaS Product Engineering",
      "Compliance Engineering",
    ],

    duration: "9 Months",

    overview:
      "A healthcare SaaS platform wanted to introduce generative AI capabilities for clinicians while maintaining compliance, security, and the reliability of its existing platform.",

    clientOverview:
      "The healthcare SaaS provider already had a production platform but needed to introduce AI functionality without creating a separate disconnected experience. New AI capabilities had to work within the existing SaaS architecture and healthcare compliance environment.",

    challengeIntro:
      "The client needed to introduce useful generative AI features without compromising compliance or the stability of the existing SaaS platform.",

    challengePoints: [
      "Healthcare compliance: AI capabilities needed to operate within a HIPAA compliant environment.",

      "Platform integration: New AI functionality had to fit naturally into the existing SaaS product.",

      "Clinical value: AI features needed to solve practical documentation and information access problems.",

      "Production reliability: AI functionality needed to meet enterprise platform reliability expectations.",
    ],

    solutionIntro:
      "Starfii embedded Generative AI capabilities directly into the existing healthcare SaaS platform.",

    solutionDetail:
      "The engineering team designed and integrated AI assisted clinical documentation and query capabilities within the existing product experience, while maintaining appropriate infrastructure, security, and compliance controls.",

    solution: [
      "AI feature engineering: Generative AI capabilities were designed around practical clinical workflows.",

      "SaaS integration: AI functionality was embedded directly into the existing product instead of creating a separate tool.",

      "Compliance architecture: Infrastructure and data handling were structured around healthcare compliance requirements.",

      "Production delivery: The feature set moved from concept through production within the existing SaaS engineering lifecycle.",
    ],

    results: [
      {
        metric: "38%",
        label: "Less documentation time",
      },
      {
        metric: "HIPAA",
        label: "Fully compliant delivery",
      },
      {
        metric: "9 mo",
        label: "Concept to production",
      },
    ],

    benefitsIntro:
      "The AI enabled platform helped clinicians reduce administrative work while allowing the SaaS provider to extend its existing product without creating a separate technology stack.",

    benefits: [
      "Reduced documentation effort: AI assisted workflows reduced time spent on clinical documentation.",

      "Integrated user experience: Clinicians access AI capabilities within the existing SaaS platform.",

      "Compliance focused architecture: AI functionality operates within the required healthcare environment.",

      "Faster innovation: The existing platform became a foundation for introducing additional AI capabilities.",
    ],

    summary:
      "Starfii extended an existing healthcare SaaS platform with production ready Generative AI capabilities, combining product engineering, AI engineering, and compliance focused platform architecture.",

    techStack: [
      "Generative AI",
      "LLM Engineering",
      "SaaS Engineering",
      "API Integration",
      "Healthcare Compliance",
      "Cloud Infrastructure",
      "AI Feature Engineering",
    ],
  },

  {
    slug: "ecommerce-platform-peak-season-scale",

    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=900&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1800&auto=format&fit=crop",

    category: "Enterprise Platform Services",

    title:
      "Starfii Scales an E Commerce Platform for Peak Season Traffic",

    subtitle:
      "See how Starfii re architected an e commerce platform on AWS to handle peak season traffic with automated scaling, load testing, and safer deployments.",

    body:
      "See how Starfii's cloud engineering team re-architected an e commerce platform on AWS to handle peak season load without downtime.",

    client: "Direct to Consumer E Commerce Brand",

    industry: "E Commerce",

    services: [
      "Cloud Engineering",
      "AWS Architecture",
      "DevOps & Quality Engineering",
    ],

    duration: "6 Months",

    overview:
      "An e commerce platform repeatedly approached infrastructure capacity limits during peak sales events, creating performance and availability risks during critical revenue periods.",

    clientOverview:
      "The business experienced large traffic spikes during major sales events. Its existing infrastructure could not scale quickly enough, creating slow page loads and occasional downtime precisely when customer demand and revenue were highest.",

    challengeIntro:
      "The platform needed to absorb unpredictable peak traffic while keeping customer experience and infrastructure reliability consistent.",

    challengePoints: [
      "Traffic volatility: Major sales events produced traffic far beyond normal operating levels.",

      "Capacity limitations: Existing infrastructure could not scale quickly enough.",

      "Performance risk: High traffic created slow pages and availability concerns.",

      "Deployment risk: Releases during high traffic periods needed stronger automation and controls.",
    ],

    solutionIntro:
      "Starfii re architected the platform around elastic AWS infrastructure and automated deployment practices.",

    solutionDetail:
      "The cloud engineering team introduced auto scaling infrastructure, tested the platform against projected peak traffic, and automated the deployment pipeline so application releases could remain controlled during high demand periods.",

    solution: [
      "AWS re architecture: Infrastructure was redesigned to scale dynamically with traffic demand.",

      "Auto scaling: Platform capacity could expand and contract according to actual workload.",

      "Load testing: The environment was tested against projected peak traffic before the next major sales event.",

      "Deployment automation: CI/CD practices reduced release risk during high traffic periods.",
    ],

    results: [
      {
        metric: "0",
        label: "Downtime during peak season",
      },
      {
        metric: "6x",
        label: "Traffic capacity increase",
      },
      {
        metric: "25%",
        label: "Lower infrastructure cost",
      },
    ],

    benefitsIntro:
      "The redesigned platform gave the e commerce business the capacity and operational confidence required to handle major revenue events.",

    benefits: [
      "Higher resilience: The platform can absorb significantly larger traffic volumes.",

      "Better performance: Elastic infrastructure helps maintain customer experience during peak demand.",

      "Lower infrastructure waste: Capacity scales with actual demand instead of remaining over provisioned year round.",

      "Safer releases: Automated deployment practices reduce operational risk during critical periods.",
    ],

    summary:
      "Starfii transformed a capacity constrained e commerce environment into an elastic cloud platform capable of handling peak demand while reducing infrastructure waste and deployment risk.",

    techStack: [
      "AWS",
      "Cloud Architecture",
      "Auto Scaling",
      "Load Testing",
      "CI/CD",
      "DevOps",
      "Performance Engineering",
    ],
  },

  {
    slug: "enterprise-legacy-modernization-timeline",

    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=900&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1800&auto=format&fit=crop",

    category: "Enterprise Platform Services",

    title:
      "Starfii Cuts Legacy Modernization Timelines for an Enterprise Client",

    subtitle:
      "Learn how Starfii created a phased modernization roadmap that moved a complex legacy application portfolio toward a scalable cloud platform without disrupting live business operations.",

    body:
      "Learn how Starfii's modernization roadmap moved a complex legacy application portfolio to a scalable cloud platform with minimal business disruption.",

    client: "Enterprise Technology Client",

    industry: "Enterprise Technology",

    services: [
      "Legacy Software Modernization",
      "Cloud Engineering",
      "Data Engineering",
    ],

    duration: "16 Months",

    overview:
      "An enterprise client's application portfolio had grown into a complex network of legacy systems that were expensive to maintain and increasingly difficult to change.",

    clientOverview:
      "The organization depended on dozens of interdependent legacy applications supporting live business operations. Modernization needed to be carefully sequenced because even small changes could affect dependent systems and business processes.",

    challengeIntro:
      "The client needed to modernize a complex application estate without turning the transformation into a disruptive big bang migration.",

    challengePoints: [
      "Application dependencies: Dozens of legacy systems were interconnected across business processes.",

      "Modernization risk: Changes to one application could affect dependent systems.",

      "Unclear sequencing: Internal teams lacked a clear order for modernization activities.",

      "Business continuity: Migration had to happen while live operations continued.",
    ],

    solutionIntro:
      "Starfii created a phased modernization roadmap based on business risk, application dependency, and technical readiness.",

    solutionDetail:
      "Applications were assessed and sequenced according to their business importance and technical relationships. Each migration was executed as part of a controlled roadmap while the live environment remained operational.",

    solution: [
      "Application assessment: Legacy applications were evaluated based on business value, dependency, risk, and modernization readiness.",

      "Phased roadmap: Migration activities were sequenced to reduce technical and operational risk.",

      "Cloud migration: Applications were progressively moved toward a scalable cloud ready foundation.",

      "Business continuity: Migration activities were designed to keep live business operations running throughout the program.",
    ],

    results: [
      {
        metric: "20%",
        label: "Faster than planned timeline",
      },
      {
        metric: "0",
        label: "Business disruption incidents",
      },
      {
        metric: "30+",
        label: "Legacy applications modernized",
      },
    ],

    benefitsIntro:
      "The phased modernization approach gave the enterprise a clearer path away from legacy technology while reducing the operational risk normally associated with large transformation programs.",

    benefits: [
      "Faster modernization: The program completed ahead of the original timeline.",

      "Lower business risk: Modernization occurred without recorded business disruption incidents.",

      "Scalable foundation: Applications moved toward a more maintainable cloud ready environment.",

      "Better modernization control: A dependency based roadmap gave technology leaders a clearer sequence for future transformation.",
    ],

    summary:
      "Starfii helped the enterprise modernize more than 30 legacy applications through a phased, dependency aware roadmap that balanced technology transformation with uninterrupted business operations.",

    techStack: [
      "Legacy Modernization",
      "Cloud Engineering",
      "Application Migration",
      "Data Engineering",
      "API Modernization",
      "Dependency Mapping",
      "DevOps",
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
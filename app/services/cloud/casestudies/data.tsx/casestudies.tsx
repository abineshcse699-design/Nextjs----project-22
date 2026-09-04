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
    slug: "reinsurer-aws-core-systems-migration",

    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=900&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1800&auto=format&fit=crop",

    title:
      "Starfii Migrates a Global Reinsurer's Core Systems to AWS",

    body:
      "See how Starfii sequenced a zero downtime migration of core claims systems to AWS, cutting infrastructure cost while improving failover time for a global reinsurer.",

    client: "Global Reinsurance Provider",

    industry: "Insurance",

    services: [
      "AWS Cloud Migration",
      "Cloud Architecture",
      "Disaster Recovery",
    ],

    duration: "12 Months",

    overview:
      "A global reinsurer needed to modernize its core claims infrastructure and move critical workloads to AWS without disrupting business operations or customer service.",

    challenge:
      "The reinsurer was operating critical claims systems on aging infrastructure. Scaling was difficult, infrastructure costs were increasing, and disaster recovery processes required significant manual effort.",

    solution:
      "Starfii designed a phased AWS migration strategy that separated workloads into manageable migration waves. The solution included cloud native architecture, automated infrastructure provisioning, high availability, monitoring, and disaster recovery capabilities.",

    results:
      "The migration was completed with minimal business disruption. The reinsurer gained a more scalable cloud foundation, lower infrastructure costs, faster failover, and improved operational visibility across its critical systems.",

    stats: [
      {
        value: "34%",
        label: "Lower infrastructure cost",
      },
      {
        value: "99.99%",
        label: "Platform availability",
      },
      {
        value: "70%",
        label: "Faster failover",
      },
    ],
  },

  {
    slug: "regional-bank-multi-cloud-modernization",

    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=900&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1800&auto=format&fit=crop",

    title:
      "Starfii Builds a Multi Cloud Foundation for a Regional Bank",

    body:
      "Explore how Starfii's multi cloud architecture gave a regional bank vendor flexibility across AWS and Azure while meeting strict data residency and compliance requirements.",

    client: "Regional Retail Bank",

    industry: "Banking & Financial Services",

    services: [
      "Multi Cloud Architecture",
      "AWS",
      "Azure",
      "Cloud Security",
    ],

    duration: "10 Months",

    overview:
      "A regional bank wanted to modernize its infrastructure while maintaining flexibility across cloud providers and meeting strict financial services compliance requirements.",

    challenge:
      "The bank relied heavily on a single infrastructure environment. Data residency requirements, security controls, and legacy dependencies made cloud modernization difficult.",

    solution:
      "Starfii designed a multi cloud foundation across AWS and Azure with centralized governance, identity management, security controls, workload segmentation, and automated deployment pipelines.",

    results:
      "The bank gained greater infrastructure flexibility, improved governance, stronger security controls, and the ability to place workloads on the cloud platform best suited to their technical and regulatory requirements.",

    stats: [
      {
        value: "2",
        label: "Cloud platforms connected",
      },
      {
        value: "40%",
        label: "Faster infrastructure delivery",
      },
      {
        value: "100%",
        label: "Centralized governance",
      },
    ],
  },

  {
    slug: "utilities-kubernetes-platform",

    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=900&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1800&auto=format&fit=crop",

    title:
      "Starfii Modernizes Field Operations with a Kubernetes Platform on GCP",

    body:
      "Discover how Starfii's Kubernetes platform on GCP gave a utilities provider real time visibility across the grid while cutting deployment time from days to minutes.",

    client: "Regional Utilities Provider",

    industry: "Utilities & Energy",

    services: [
      "Google Cloud Platform",
      "Kubernetes",
      "DevOps Automation",
    ],

    duration: "11 Months",

    overview:
      "A utilities provider needed a scalable cloud platform capable of supporting field applications and real time operational workloads across multiple regions.",

    challenge:
      "The existing deployment process was slow and inconsistent. Field applications were difficult to scale and engineering teams spent significant time managing infrastructure manually.",

    solution:
      "Starfii implemented a Kubernetes based platform on Google Cloud Platform with containerized applications, automated CI/CD pipelines, centralized monitoring, and scalable infrastructure.",

    results:
      "The utilities provider gained a scalable application platform, significantly faster deployments, better operational visibility, and a more reliable foundation for future digital field services.",

    stats: [
      {
        value: "90%",
        label: "Faster deployments",
      },
      {
        value: "5x",
        label: "Faster infrastructure scaling",
      },
      {
        value: "99.9%",
        label: "Platform availability",
      },
    ],
  },

  {
    slug: "healthcare-finops-cost-optimization",

    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=900&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1800&auto=format&fit=crop",

    title:
      "Starfii Cuts Cloud Spend 34 Percent for a Healthcare SaaS Platform",

    body:
      "Learn how Starfii's FinOps program right sized compute and storage across a healthcare SaaS platform without touching uptime or HIPAA compliance.",

    client: "Healthcare SaaS Provider",

    industry: "Healthcare",

    services: [
      "FinOps",
      "Cloud Cost Optimization",
      "Cloud Infrastructure",
    ],

    duration: "7 Months",

    overview:
      "A growing healthcare SaaS platform needed to control cloud infrastructure costs while maintaining uptime, security, and HIPAA compliance.",

    challenge:
      "Cloud resources had grown faster than actual workload demand. Unused compute, oversized infrastructure, and inefficient storage were increasing monthly cloud spend.",

    solution:
      "Starfii introduced a FinOps program covering resource right sizing, storage optimization, workload scheduling, cost monitoring, tagging, and governance across the cloud environment.",

    results:
      "The healthcare SaaS provider reduced cloud spend while maintaining application performance, uptime, and compliance requirements.",

    stats: [
      {
        value: "34%",
        label: "Cloud cost reduction",
      },
      {
        value: "99.99%",
        label: "Platform uptime",
      },
      {
        value: "100%",
        label: "Cost visibility",
      },
    ],
  },

  {
    slug: "ecommerce-sre-uptime-program",

    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=900&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1800&auto=format&fit=crop",

    title:
      "Starfii's SRE Program Lifts Uptime for a Fortune 500 Retailer",

    body:
      "See how Starfii's site reliability engineering practice reduced incident response time and lifted uptime during peak shopping seasons for a Fortune 500 retailer.",

    client: "Fortune 500 Retailer",

    industry: "Retail & E Commerce",

    services: [
      "Site Reliability Engineering",
      "Cloud Operations",
      "Observability",
      "DevOps",
    ],

    duration: "9 Months",

    overview:
      "A Fortune 500 retailer needed to improve application reliability before major seasonal shopping events while reducing the operational burden on engineering teams.",

    challenge:
      "Production incidents required manual investigation, monitoring was fragmented, and peak traffic created significant reliability risks during critical shopping periods.",

    solution:
      "Starfii introduced SRE practices including centralized observability, automated incident response, reliability monitoring, alert optimization, capacity planning, and deployment automation.",

    results:
      "The retailer achieved higher uptime, faster incident response, improved production visibility, and greater confidence during high traffic shopping periods.",

    stats: [
      {
        value: "99.99%",
        label: "Application uptime",
      },
      {
        value: "60%",
        label: "Faster incident response",
      },
      {
        value: "45%",
        label: "Fewer production incidents",
      },
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
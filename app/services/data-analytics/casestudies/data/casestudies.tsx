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
    slug: "regional-insurance-data-modernization",

    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1800&auto=format&fit=crop",

    title:
      "Starfii Cuts Reporting Time by 40% for a Regional Insurance Carrier",

    body:
      "Starfii's data engineering team consolidated claims, policy, and underwriting data into a single governed platform, replacing manual spreadsheets with real time dashboards trusted across the business.",

    client: "Regional Insurance Carrier",

    industry: "Insurance",

    services: [
      "Data Engineering",
      "Data Platform Modernization",
      "Business Intelligence",
    ],

    duration: "9 Months",

    overview:
      "A regional insurance carrier needed to replace fragmented reporting processes with a governed data platform that could provide reliable information across claims, policy, and underwriting teams.",

    challenge:
      "Business teams relied heavily on spreadsheets and disconnected data sources. Reporting required significant manual effort, data quality varied between departments, and leadership lacked a consistent view of business performance.",

    solution:
      "Starfii consolidated claims, policy, and underwriting data into a centralized governed data platform. Automated data pipelines, quality checks, and real time dashboards gave business users access to consistent and trusted information.",

    results:
      "The insurance carrier significantly reduced reporting effort and gained a single source of truth for operational and executive reporting. Teams can now access trusted dashboards without manually combining data from multiple systems.",

    stats: [
      {
        value: "40%",
        label: "Faster reporting",
      },
      {
        value: "60%",
        label: "Less manual data preparation",
      },
      {
        value: "100%",
        label: "Governed reporting platform",
      },
    ],
  },

  {
    slug: "national-retail-customer-data-platform",

    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1800&auto=format&fit=crop",

    title:
      "A Unified Customer Data Platform for a National Retail Chain",

    body:
      "Starfii built a cloud data platform that merged siloed sales, loyalty, and marketing data, giving a national retailer a single customer view that lifted campaign conversion and cut reporting cycles from days to hours.",

    client: "National Retail Chain",

    industry: "Retail",

    services: [
      "Cloud Data Platform",
      "Customer Data Integration",
      "Data Engineering",
      "Analytics",
    ],

    duration: "12 Months",

    overview:
      "A national retailer needed a unified customer data platform to connect sales, loyalty, and marketing information across multiple business systems.",

    challenge:
      "Customer information was fragmented across different platforms. Marketing teams could not easily create a complete customer profile, while reporting teams spent days preparing data for campaign analysis.",

    solution:
      "Starfii designed and implemented a cloud based customer data platform that integrated sales, loyalty, and marketing data. Automated pipelines and centralized customer records provided teams with a consistent customer view.",

    results:
      "The retailer gained a unified customer profile across major business systems, reduced reporting cycles, and enabled marketing teams to make faster and more informed campaign decisions.",

    stats: [
      {
        value: "3x",
        label: "Faster reporting",
      },
      {
        value: "100%",
        label: "Unified customer data",
      },
      {
        value: "35%",
        label: "Higher campaign conversion",
      },
    ],
  },

  {
    slug: "healthcare-generative-ai-clinical-reporting",

    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1800&auto=format&fit=crop",

    title:
      "Generative AI on Enterprise Data Speeds Clinical Reporting",

    body:
      "Starfii connected Generative AI to a governed clinical data warehouse, letting analysts query patient outcome trends in plain language while keeping every result compliant and auditable.",

    client: "Healthcare Provider",

    industry: "Healthcare",

    services: [
      "Generative AI",
      "Enterprise Data Engineering",
      "Data Governance",
      "Analytics",
    ],

    duration: "10 Months",

    overview:
      "A healthcare organization wanted to make clinical data easier for analysts and business teams to access while maintaining strict governance and compliance requirements.",

    challenge:
      "Analysts depended on technical queries and manual reporting processes to understand patient outcome data. Access to information was slow and every new report required significant analyst effort.",

    solution:
      "Starfii connected Generative AI capabilities to a governed clinical data warehouse. Retrieval based architecture, data governance controls, and auditable workflows ensured that AI responses remained grounded in approved enterprise data.",

    results:
      "Analysts can now explore patient outcome trends using natural language while maintaining governance and auditability. Reporting workflows became faster and teams gained easier access to enterprise insights.",

    stats: [
      {
        value: "70%",
        label: "Faster clinical reporting",
      },
      {
        value: "100%",
        label: "Auditable AI workflows",
      },
      {
        value: "24/7",
        label: "Data insight availability",
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
// PLACE THIS FILE AT:
// app/services/data-analytics/casestudies/data/casestudies.tsx
//
// (this is already the path About/case-study/page.tsx imports from)

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

  // Publish date, format "YYYY-MM-DD".
  // Used only for ordering — newest case study always shows first.
  date: string;
};

// Raw list — order here does NOT matter for display.
// Only `date` controls what shows first.
const rawCaseStudies: CaseStudyDetail[] = [
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
      { value: "40%", label: "Faster reporting" },
      { value: "60%", label: "Less manual data preparation" },
      { value: "100%", label: "Governed reporting platform" },
    ],

    date: "2026-03-12",
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
      { value: "3x", label: "Faster reporting" },
      { value: "100%", label: "Unified customer data" },
      { value: "35%", label: "Higher campaign conversion" },
    ],

    date: "2026-06-04",
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
      { value: "70%", label: "Faster clinical reporting" },
      { value: "100%", label: "Auditable AI workflows" },
      { value: "24/7", label: "Data insight availability" },
    ],

    date: "2026-08-17",
  },

  {
    slug: "global-manufacturer-predictive-maintenance-analytics",

    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1800&auto=format&fit=crop",

    title:
      "Predictive Maintenance Analytics Cuts Unplanned Downtime by 45% for a Global Manufacturer",

    body:
      "Starfii piped sensor and equipment telemetry from plant floors into a cloud data platform, building predictive models that flag failures before they happen and give maintenance teams a clear window to act.",

    client: "Global Manufacturing Company",

    industry: "Manufacturing",

    services: [
      "Data Engineering",
      "Cloud Data Platforms",
      "Data Science & Advanced Analytics",
      "IoT Data Integration",
    ],

    duration: "11 Months",

    overview:
      "A global manufacturer with plants across multiple regions needed a way to move from reactive equipment repairs to predictive maintenance, using the sensor data its machines were already generating but not fully using.",

    challenge:
      "Equipment telemetry was captured locally at each plant but rarely centralized or analyzed. Maintenance teams found out about failures only after they happened, leading to unplanned downtime, rushed repairs, and inconsistent production schedules across sites.",

    solution:
      "Starfii built ingestion pipelines that streamed sensor and equipment telemetry from every plant into a single cloud data platform. Data science models trained on this unified data set surfaced early warning signs of equipment failure, feeding directly into maintenance team dashboards and alerts.",

    results:
      "The manufacturer moved from reactive to predictive maintenance across its plant network. Maintenance teams now get advance warning of likely failures, letting them schedule repairs before equipment goes down instead of after.",

    stats: [
      { value: "45%", label: "Less unplanned downtime" },
      { value: "30%", label: "Lower maintenance costs" },
      { value: "12+", label: "Plants unified on one platform" },
    ],

    date: "2026-09-10",
  },

  {
    slug: "regional-bank-fraud-anomaly-detection",

    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1800&auto=format&fit=crop",

    title:
      "Real Time Fraud Detection Cuts Loss Exposure by 55% for a Regional Bank",

    body:
      "Starfii applied data science models to a regional bank's transaction streams, flagging unusual patterns in near real time so fraud analysts could act on risk before losses settled, not after.",

    client: "Regional Bank",

    industry: "Financial Services",

    services: [
      "Data Science & Advanced Analytics",
      "Data Engineering",
      "Real Time Data Pipelines",
      "Data Governance",
    ],

    duration: "8 Months",

    overview:
      "A regional bank relied on batch fraud reviews that ran hours behind live transactions, leaving a window where fraudulent activity could go undetected until it was too late to intervene.",

    challenge:
      "Fraud analysts worked from end of day reports, so suspicious transactions were often flagged well after funds had already moved. Rule based detection alone produced too many false positives, and the team could not keep pace with transaction volume growth.",

    solution:
      "Starfii built real time ingestion pipelines from the bank's transaction systems and layered anomaly detection models on top of the governed data stream. Alerts routed to fraud analysts within seconds of a suspicious transaction, with model scoring tuned to cut false positives without missing real risk.",

    results:
      "The bank now catches suspicious activity while transactions are still in flight instead of after settlement. Fraud analysts spend less time chasing false alarms and more time on genuine risk, and loss exposure from confirmed fraud cases dropped sharply.",

    stats: [
      { value: "55%", label: "Lower fraud loss exposure" },
      { value: "Seconds", label: "Detection to alert time" },
      { value: "40%", label: "Fewer false positive alerts" },
    ],

    date: "2026-09-15",
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
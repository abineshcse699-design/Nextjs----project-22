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
  // this data is used, regardless of where it sits in this array.
  date: string;
};

// Raw list — order here does NOT matter for display, only the
// `date` field controls what shows first. Add new entries anywhere
// (top, bottom, middle) with today's date (or later) and it will
// automatically appear first on every page that reads this file.
const rawCaseStudies: CaseStudyDetail[] = [
  {
    slug: "manufacturer-predictive-maintenance-ai",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=900&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1800&auto=format&fit=crop",
    title: "Starfii Cuts Unplanned Downtime with Predictive Maintenance AI",
    body: "See how Starfii's predictive maintenance models flagged equipment failure risk days in advance for a global manufacturer, cutting unplanned downtime significantly.",
    client: "Global Manufacturing Company",
    industry: "Manufacturing",
    services: ["Predictive Analytics", "Machine Learning Model Development", "MLOps"],
    duration: "9 Months",
    overview:
      "A global manufacturer relied on scheduled maintenance and reactive repairs, leading to unplanned equipment failures that halted production lines without warning.",
    challenge:
      "Sensor data from plant equipment was collected but never modeled, so failure risk was invisible until a machine actually broke down, driving up downtime and repair costs.",
    solution:
      "Starfii built predictive maintenance models trained on historical sensor and maintenance data, deployed with an MLOps pipeline that flags failure risk days in advance and retrains automatically as new data arrives.",
    results:
      "Unplanned downtime dropped sharply, maintenance teams now act on risk scores instead of fixed schedules, and the manufacturer avoided several major line stoppages in the first year alone.",
    stats: [
      { value: "37%", label: "Reduction in unplanned downtime" },
      { value: "5+ days", label: "Advance failure warning" },
      { value: "22%", label: "Lower maintenance cost" },
    ],
    date: "2026-01-15",
  },
  {
    slug: "insurer-fraud-detection-model",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=900&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1800&auto=format&fit=crop",
    title: "Starfii Builds a Real Time Fraud Scoring Model for an Insurer",
    body: "Explore how Starfii's real time anomaly detection model helped a national insurer catch fraudulent claims earlier without slowing down legitimate customers.",
    client: "National Insurance Provider",
    industry: "Insurance",
    services: ["Fraud & Risk Scoring", "Real Time Anomaly Detection", "Model Monitoring"],
    duration: "8 Months",
    overview:
      "A national insurer's fraud review process was manual and reactive, catching fraudulent claims only after payout, while legitimate claims faced unnecessary delays from blanket review rules.",
    challenge:
      "Fraud patterns shifted faster than manual rules could keep up with, and broad review triggers frustrated genuine customers waiting on legitimate claims.",
    solution:
      "Starfii built a real time anomaly detection and risk scoring model that flags high risk claims at intake, routing only genuinely suspicious cases to manual review while legitimate claims move straight through.",
    results:
      "Fraudulent claims are now caught earlier and more accurately, legitimate customers see faster claim resolution, and the fraud review team spends its time on the cases that matter most.",
    stats: [
      { value: "44%", label: "More fraud caught pre-payout" },
      { value: "60%", label: "Fewer false positive reviews" },
      { value: "Real time", label: "Risk scoring at intake" },
    ],
    date: "2026-02-20",
  },
  {
    slug: "retailer-computer-vision-inspection",
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=900&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1800&auto=format&fit=crop",
    title: "Starfii Deploys Computer Vision Quality Inspection on the Line",
    body: "Discover how Starfii's computer vision defect inspection pipeline lifted quality control accuracy on a retail manufacturing line while cutting manual review time.",
    client: "Retail Manufacturing Company",
    industry: "Retail Manufacturing",
    services: ["Computer Vision", "Defect Inspection", "Production AI Deployment"],
    duration: "7 Months",
    overview:
      "A retail manufacturer's quality control process depended on manual visual inspection, which was inconsistent between shifts and slowed down the production line.",
    challenge:
      "Human inspectors missed subtle defects under time pressure, inspection throughput capped the line's overall speed, and defect classification varied from inspector to inspector.",
    solution:
      "Starfii's computer vision team built and deployed a defect detection and image classification pipeline running at production line throughput, trained on the manufacturer's own product imagery.",
    results:
      "Quality control accuracy improved measurably, manual review time dropped, and the line now runs inspection continuously without slowing down for human checks.",
    stats: [
      { value: "41%", label: "Higher defect detection accuracy" },
      { value: "55%", label: "Less manual review time" },
      { value: "24/7", label: "Continuous line inspection" },
    ],
    date: "2026-04-05",
  },
  {
    slug: "healthcare-clinical-decision-support",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=900&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1800&auto=format&fit=crop",
    title: "Starfii Builds Clinical Decision Support AI for a Healthcare Network",
    body: "Learn how Starfii's diagnostic assist model, trained on structured healthcare data, helped clinicians triage faster while staying within compliance requirements.",
    client: "Regional Healthcare Network",
    industry: "Healthcare",
    services: ["Clinical Decision Support", "Responsible AI & Governance", "NLP"],
    duration: "12 Months",
    overview:
      "A healthcare network wanted to help clinicians triage patients faster without compromising on the compliance and explainability standards required in clinical settings.",
    challenge:
      "Clinicians faced growing caseloads with limited time per patient, and any AI assist tool needed full explainability and bias testing before it could be trusted in a clinical workflow.",
    solution:
      "Starfii built a diagnostic assist model trained on structured healthcare data, with bias testing, explainability reporting, and human in the loop review built into the model lifecycle from day one.",
    results:
      "Clinicians triage patients faster with model backed risk indicators, every recommendation remains explainable and auditable, and the network stayed fully within its compliance requirements throughout rollout.",
    stats: [
      { value: "30%", label: "Faster patient triage" },
      { value: "100%", label: "Recommendations explainable" },
      { value: "0", label: "Compliance findings at audit" },
    ],
    date: "2026-06-10",
  },
  {
    slug: "ecommerce-recommendation-engine",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=900&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1800&auto=format&fit=crop",
    title: "Starfii's Recommendation Engine Lifts Conversion for an E Commerce Brand",
    body: "See how Starfii's personalization AI model increased average order value and repeat purchase rate for a direct to consumer e commerce brand.",
    client: "Direct to Consumer E Commerce Brand",
    industry: "E Commerce",
    services: ["Recommendation Engines", "Personalization AI", "AI Data Engineering"],
    duration: "6 Months",
    overview:
      "A direct to consumer e commerce brand showed the same generic product recommendations to every visitor, missing the chance to lift order value and repeat purchases.",
    challenge:
      "Customer behavior data existed but was never used to personalize the shopping experience, so recommendations were static and did not reflect individual browsing or purchase history.",
    solution:
      "Starfii designed a personalization and recommendation AI model, backed by a feature pipeline built from the brand's browsing and purchase data, surfacing relevant products at every stage of the shopping journey.",
    results:
      "Average order value increased, repeat purchase rate climbed, and the brand's product pages now personalize in real time based on each shopper's behavior.",
    stats: [
      { value: "24%", label: "Higher average order value" },
      { value: "19%", label: "Increase in repeat purchases" },
      { value: "Real time", label: "Personalization on every visit" },
    ],
    date: "2026-07-18",
  },
  {
    slug: "abinesh-ai-workforce-productivity-platform",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=900&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1800&auto=format&fit=crop",
    title: "Starfii Builds an AI Workforce Productivity Platform for Abinesh",
    body: "See how Starfii's AI powered productivity models helped Abinesh's operations team automate task prioritization and cut manual reporting time significantly.",
    client: "Abinesh",
    industry: "Professional Services",
    services: ["AI Workflow Automation", "NLP", "AI Data Engineering"],
    duration: "5 Months",
    overview:
      "Abinesh's operations team spent hours every week manually prioritizing tasks and compiling status reports across scattered spreadsheets and email threads.",
    challenge:
      "Work was tracked inconsistently across teams, so nothing predicted which tasks needed urgent attention until a deadline was already at risk, and reporting was fully manual.",
    solution:
      "Starfii built an AI workflow automation model that scores and prioritizes incoming tasks using NLP over existing notes and emails, paired with a feature pipeline that keeps the model's inputs current as new work comes in.",
    results:
      "Abinesh's team now works from a single prioritized queue instead of scattered trackers, status reporting generates automatically, and urgent tasks get flagged well before deadlines slip.",
    stats: [
      { value: "35%", label: "Less time spent on manual reporting" },
      { value: "28%", label: "Faster turnaround on priority tasks" },
      { value: "Automated", label: "Weekly status reporting" },
    ],
    date: "2026-09-11",
  },

    {
    slug: "abinesh-2-ai-customer-insights-platform",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1800&auto=format&fit=crop",
    title: "Starfii Builds an AI Customer Insights Platform for Abines1e2eh",
    body: "See how Starfii's AI powered insights models helped Abinesh's team surface customer trends automatically and cut manual analysis time significantly.",
    client: "Abinesh",
    industry: "Professional Services",
    services: ["Predictive Analytics", "NLP", "AI Data Engineering"],
    duration: "6 Months",
    overview:
      "Abinesh's team manually pulled customer data from multiple sources each week to spot trends, a process that ate into time better spent acting on the insights.",
    challenge:
      "Customer feedback and usage data lived in scattered systems, so patterns only surfaced weeks after they mattered, and no one had a single place to see them.",
    solution:
      "Starfii built a predictive analytics model with NLP over customer feedback, backed by a feature pipeline that consolidates data from every source into one continuously updated view.",
    results:
      "Abinesh's team now sees customer trends as they emerge instead of weeks later, manual analysis time dropped, and decisions get made on current data instead of stale reports.",
    stats: [
      { value: "40%", label: "Less time spent on manual analysis" },
      { value: "3x", label: "Faster trend detection" },
      { value: "Real time", label: "Customer insights dashboard" },
    ],
    date: "2026-09-12",   // ⚠️ latest date — this is what pushes it to #1 everywhere
  },
];

// Newest date first — this is what every page actually imports.
// Whatever entry has the latest `date` above will always be first,
// no matter where you physically place it in rawCaseStudies.
export const caseStudies: CaseStudyDetail[] = [...rawCaseStudies].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export function getCaseStudyBySlug(
  slug: string
): CaseStudyDetail | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
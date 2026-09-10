// PLACE THIS FILE AT: app/About/case-study/page.tsx
//
// Make sure the folder is named "case-study" (hyphen, no space) —
// not "Case study" — otherwise Next.js will 404 on this route.
// If you still have the old "Case study" (with a space) folder,
// delete it after moving this file in, so there's no duplicate route.

import Link from "next/link";
import type { ReactElement } from "react";
import { ArrowUpRight } from "lucide-react";
import { caseStudies as itOperationsCaseStudies } from "@/app/services/digital-it-operations/casestudies/data.tsx/casestudies";
import { caseStudies as dataAnalyticsCaseStudies_ } from "@/app/services/data-analytics/casestudies/data/casestudies";

/* ===============================================================
   BRAND TOKENS — kept identical to the service pages so this
   section reads as the same design system.
================================================================ */
const CHAMPION_BLUE = "#1B2560";
const INDIGO_CTA = "#4F3FE0";

const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

type CaseStudy = {
  slug: string;
  image: string;
  title: string;
  body: string;
  /** Optional eyebrow label above the title (e.g. an industry name).
   *  Falls back to "CASE STUDY" when omitted. */
  category?: string;
};

/* ===============================================================
   DATA — Artificial Intelligence case studies
   (Copied from app/services/artificial-intelligence/page.tsx. If
   you'd rather share one source of truth, move this array into
   app/services/artificial-intelligence/data/case-studies.ts and
   import it from both places instead.)
================================================================ */

const aiCaseStudies: CaseStudy[] = [
  {
    slug: "manufacturer-predictive-maintenance-ai",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Cuts Unplanned Downtime with Predictive Maintenance AI",
    body: "See how Starfii's predictive maintenance models flagged equipment failure risk days in advance for a global manufacturer, cutting unplanned downtime significantly.",
  },
  {
    slug: "insurer-fraud-detection-model",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Builds a Real Time Fraud Scoring Model for an Insurer",
    body: "Explore how Starfii's real time anomaly detection model helped a national insurer catch fraudulent claims earlier without slowing down legitimate customers.",
  },
  {
    slug: "retailer-computer-vision-inspection",
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Deploys Computer Vision Quality Inspection on the Line",
    body: "Discover how Starfii's computer vision defect inspection pipeline lifted quality control accuracy on a retail manufacturing line while cutting manual review time.",
  },
  {
    slug: "healthcare-clinical-decision-support",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Builds Clinical Decision Support AI for a Healthcare Network",
    body: "Learn how Starfii's diagnostic assist model, trained on structured healthcare data, helped clinicians triage faster while staying within compliance requirements.",
  },
  {
    slug: "ecommerce-recommendation-engine",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=900&auto=format&fit=crop",
    title: "Starfii's Recommendation Engine Lifts Conversion for an E Commerce Brand",
    body: "See how Starfii's personalization AI model increased average order value and repeat purchase rate for a direct to consumer e commerce brand.",
  },
];

/* ===============================================================
   DATA — Digital and Software case studies
   (Copied from the Digital & Software Services page. Slugs match
   the /services/digital-software/casestudies/[slug] route used
   there, so "Learn More" links resolve to the same pages.)
================================================================ */

const digitalSoftwareCaseStudies: CaseStudy[] = [
  {
    slug: "insurance-claims-low-code-platform",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=900&auto=format&fit=crop",
    title:
      "Starfii Transforms Reinsurance Claims Management with a Low Code Platform",
    body: "Explore how Starfii transformed insurance claims management with a low code digital platform, automating workflows, improving efficiency, and enhancing service quality for a global reinsurer.",
  },
  {
    slug: "regional-bank-digital-banking-experience",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Builds a Modern Digital Banking Experience for a Regional Bank",
    body: "See how Starfii's SaaS product engineering team rebuilt a legacy banking front end into a fast, secure digital experience that cut onboarding time and lifted customer satisfaction scores.",
  },
  {
    slug: "utilities-digital-transformation-microsoft",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=900&auto=format&fit=crop",
    title: "Digital Transformation in Utilities Powered by Microsoft Business Applications",
    body: "Discover how Starfii used Microsoft Business Applications to help a utilities provider modernize field operations and give teams real time visibility across the grid.",
  },
  {
    slug: "digital-mortgage-automation",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Automates the Digital Mortgage Application Process",
    body: "Learn how Starfii's intelligent automation shortened mortgage approval cycles from weeks to days while keeping every step compliant and fully auditable.",
  },
  {
    slug: "healthcare-saas-platform-scale",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Scales a SaaS Platform for a Fortune 500 Healthcare Provider",
    body: "See how Starfii's composable architecture let a healthcare SaaS platform scale to millions of users without sacrificing reliability or HIPAA compliance.",
  },
];

/* ===============================================================
   DATA — Digital IT Operations case studies
   (Pulled live from the shared data source used by the Digital IT
   Operations page itself, so this section never drifts out of
   sync with that page. Each item's "industry" field becomes the
   eyebrow label on the card, same as it does there.)
================================================================ */

const digitalItOperationsCaseStudies: CaseStudy[] = itOperationsCaseStudies.map(
  (study) => ({
    slug: study.slug,
    image: study.image,
    title: study.title,
    body: study.body,
    category: study.industry?.toUpperCase(),
  })
);

/* ===============================================================
   DATA — Cloud Engineering case studies
   (Copied from the Cloud Engineering Services page. Slugs match
   the /services/cloud/casestudies/[slug] route used there, so
   "Learn More" links resolve to the same pages.)
================================================================ */

const cloudCaseStudies: CaseStudy[] = [
  {
    slug: "reinsurer-aws-core-systems-migration",
    image:
      "https://images.unsplash.com/photo-1683322499436-f4383dd59f5a?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Migrates a Global Reinsurer's Core Systems to AWS",
    body: "See how Starfii sequenced a zero downtime migration of core claims systems to AWS, cutting infrastructure cost while improving failover time for a global reinsurer.",
  },
  {
    slug: "regional-bank-multi-cloud-modernization",
    image:
      "https://images.unsplash.com/photo-1545987796-200677ee1011?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Builds a Multi Cloud Foundation for a Regional Bank",
    body: "Explore how Starfii's multi cloud architecture gave a regional bank vendor flexibility across AWS and Azure while meeting strict data residency and compliance requirements.",
  },
  {
    slug: "utilities-kubernetes-platform",
    image:
      "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Modernizes Field Operations with a Kubernetes Platform on GCP",
    body: "Discover how Starfii's Kubernetes platform on GCP gave a utilities provider real time visibility across the grid while cutting deployment time from days to minutes.",
  },
  {
    slug: "healthcare-finops-cost-optimization",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Cuts Cloud Spend 34 Percent for a Healthcare SaaS Platform",
    body: "Learn how Starfii's FinOps program right sized compute and storage across a healthcare SaaS platform without touching uptime or HIPAA compliance.",
  },
  {
    slug: "ecommerce-sre-uptime-program",
    image:
      "https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=900&auto=format&fit=crop",
    title: "Starfii's SRE Program Lifts Uptime for a Fortune 500 Retailer",
    body: "See how Starfii's site reliability engineering practice reduced incident response time and lifted uptime during peak shopping seasons for a Fortune 500 retailer.",
  },
];

/* ===============================================================
   DATA — Data & Analytics case studies
   (Pulled live from the shared data source used by the Data &
   Analytics page itself, so this section never drifts out of sync
   with that page. Each item's "industry" field becomes the eyebrow
   label on the card, same as it does there.)
================================================================ */

const dataAnalyticsCaseStudies: CaseStudy[] = dataAnalyticsCaseStudies_.map(
  (study) => ({
    slug: study.slug,
    image: study.image,
    title: study.title,
    body: study.body,
    category: study.industry?.toUpperCase(),
  })
);

/* ===============================================================
   DATA — Business Process Services case studies
   (Copied from the Business Process Services page. Slugs match the
   /services/business-process-services/[slug] route used there, so
   "Learn More" links resolve to the same pages.)
================================================================ */

const businessProcessCaseStudies: CaseStudy[] = [
  {
    slug: "manufacturer-order-to-cash-automation",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Cuts Days Sales Outstanding for a Global Manufacturer",
    body: "See how Starfii's order to cash redesign and RPA rollout cut days sales outstanding and reduced billing disputes for a global manufacturing client.",
  },
  {
    slug: "retailer-procure-to-pay-transformation",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Transforms Procure-to-Pay for a National Retailer",
    body: "Explore how Starfii standardized vendor onboarding and automated invoice matching, cutting procure to pay cycle time for a national retail chain.",
  },
  {
    slug: "hospital-network-revenue-cycle-management",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Modernizes Revenue Cycle Management for a Hospital Network",
    body: "Discover how Starfii's HIPAA compliant RCM program reduced claim denials and accelerated reimbursement for a multi facility hospital network.",
  },
  {
    slug: "insurer-finance-accounting-close",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Shortens Month End Close for a National Insurer",
    body: "Learn how Starfii's finance and accounting outsourcing team standardized reconciliations and shortened the month end close cycle for a national insurer.",
  },
  {
    slug: "telecom-customer-operations-contact-center",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Runs Customer Operations for a Telecom Provider at Scale",
    body: "See how Starfii's managed contact center and ticket triage operation improved first contact resolution for a regional telecom provider.",
  },
];

/* ===============================================================
   DATA — Enterprise Platform Services case studies
   (Copied from the Enterprise Platform Services page. Slugs match
   the /services/enterprise-platform-services/casestudies/[slug]
   route used there, so "Learn More" links resolve to the same
   pages.)
================================================================ */

const enterprisePlatformCaseStudies: CaseStudy[] = [
  {
    slug: "fintech-saas-platform-mvp-to-scale",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=900&auto=format&fit=crop",
    title:
      "Starfii Builds a Fortune 500 Fintech SaaS Platform From MVP to Scale",
    body: "See how Starfii's enterprise product engineering team took a fintech SaaS platform from a three month MVP to a full featured product serving Fortune 500 clients.",
  },
  {
    slug: "regional-bank-digital-banking-experience",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Modernizes a Regional Bank's Digital Banking Experience",
    body: "Explore how Starfii's legacy software modernization team rebuilt a bank's front end into a fast, secure digital experience that cut onboarding time.",
  },
  {
    slug: "healthcare-saas-generative-ai-features",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=900&auto=format&fit=crop",
    title:
      "Starfii Ships a Generative AI Feature Set for a Healthcare SaaS Platform",
    body: "Discover how Starfii's Generative AI and LLM engineering team embedded Gen AI features into a HIPAA compliant SaaS platform for a healthcare client.",
  },
  {
    slug: "ecommerce-platform-peak-season-scale",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Scales an E Commerce Platform for Peak Season Traffic",
    body: "See how Starfii's cloud engineering team re-architected an e commerce platform on AWS to handle peak season load without downtime.",
  },
  {
    slug: "enterprise-legacy-modernization-timeline",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=900&auto=format&fit=crop",
    title:
      "Starfii Cuts Legacy Modernization Timelines for an Enterprise Client",
    body: "Learn how Starfii's modernization roadmap moved a complex legacy application portfolio to a scalable cloud platform with minimal business disruption.",
  },
];

/* ===============================================================
   DATA — Global Capability Centers case studies
   (Copied from the Global Capability Centers page. Slugs match the
   /services/global-capability-centers/[slug] route used there, so
   "Learn More" links resolve to the same pages.)
================================================================ */

const gccCaseStudies: CaseStudy[] = [
  {
    slug: "fintech-gcc-launch-five-months",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Sets Up a Global Capability Center for a US Fintech in Under Five Months",
    body: "See how Starfii took a US fintech from entity incorporation to a fully staffed engineering GCC, with governance and compliance built in from day one.",
  },
  {
    slug: "retail-analytics-gcc-scale-up",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Builds an Analytics Focused GCC for a Global Retail Enterprise",
    body: "Explore how Starfii's talent strategy and facility setup gave a retail enterprise a dedicated analytics GCC, cutting time to first insight and easing pressure on the onshore data team.",
  },
  {
    slug: "managed-transition-support-operations",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Transitions Legacy Support Operations Into a Managed GCC",
    body: "Learn how Starfii's structured knowledge transfer plan moved a multinational's support operations into a new GCC without disrupting service levels during the handover.",
  },
  {
    slug: "healthcare-gcc-compliance-first",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Stands Up a Compliance First GCC for a Healthcare Technology Firm",
    body: "Discover how Starfii built HIPAA aligned data residency and information security requirements into a healthcare GCC's operating model from the first day of setup.",
  },
  {
    slug: "manufacturing-gcc-scale-up",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Scales a Manufacturing Enterprise's GCC From 20 to 200",
    body: "See how Starfii's phased scale up plan grew a manufacturing enterprise's GCC from an initial cost focused footprint to a steady state engineering and analytics hub.",
  },
];

/* ===============================================================
   DATA — AI Voice Call case studies
   (Copied from the AI Voice Call page. Slugs match the
   /services/offerings/ai-native-contact-center/[slug] route used
   there, so "Learn More" links resolve to the same pages.)
================================================================ */

const aiVoiceCallCaseStudies: CaseStudy[] = [
  {
    slug: "regional-bank-ai-voice-support",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    title: "Starfii Cuts Wait Times for a Regional Bank with AI Voice Support",
    body: "Explore how Starfii's AI voice agents resolved routine banking enquiries instantly, freeing human agents for complex disputes and high value conversations.",
  },
  {
    slug: "insurer-outbound-renewal-calling",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    title: "Starfii Automates Renewal Outreach for a National Insurer",
    body: "See how outbound AI calling lifted renewal contact rates while giving agents a prioritized list of customers who actually needed a human conversation.",
  },
  {
    slug: "healthcare-appointment-voice-agent",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    title: "Starfii Builds a Voice Agent for Healthcare Appointment Management",
    body: "Learn how a conversational voice agent let patients book, confirm, and reschedule appointments naturally, cutting missed appointment rates.",
  },
  {
    slug: "retail-ecommerce-order-support-voice",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    title: "Starfii Deploys Always On Order Support for a Retail Brand",
    body: "Discover how AI voice call automation handled order status, returns, and delivery updates around the clock during peak retail seasons.",
  },
  {
    slug: "telecom-intelligent-call-routing",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    title: "Starfii Modernizes IVR with Intelligent Call Routing for a Telecom Provider",
    body: "See how replacing a legacy IVR with a conversational voice agent reduced call abandonment and got customers to the right team faster.",
  },
];

/* ===============================================================
   DATA — AI-Powered Medical Coding case studies
   (Copied from the AI-Powered Medical Coding page. Slugs match the
   /services/offerings/enterprise-automation/[slug] route used
   there, so "Read case study" links resolve to the same pages.)
================================================================ */

const medicalCodingCaseStudies: CaseStudy[] = [
  {
    slug: "hospital-ai-assisted-coding",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    title: "Modernizing Hospital Coding With AI-Assisted Clinical Intelligence",
    body: "Explore how an AI-assisted workflow can help coding teams analyze documentation faster, surface relevant coding information, and focus professional review where it adds the most value.",
  },
  {
    slug: "ambulatory-coding-workflow",
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1200&auto=format&fit=crop",
    title: "Improving Coding Turnaround Across Ambulatory Operations",
    body: "See how intelligent document analysis and structured coding recommendations can help ambulatory organizations reduce repetitive work and accelerate coding workflows.",
  },
  {
    slug: "revenue-cycle-coding-intelligence",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    title: "Connecting Coding Intelligence With Revenue Cycle Operations",
    body: "Discover how validated coding outputs can move into claims and revenue cycle workflows to reduce rework and improve operational visibility.",
  },
  {
    slug: "coding-quality-compliance",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    title: "Strengthening Coding Quality, Review, and Audit Readiness",
    body: "Learn how traceable AI recommendations, validation checkpoints, and structured review workflows can support coding quality and governance programs.",
  },
  {
    slug: "specialty-coding-ai",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    title: "Adapting AI Coding Workflows to Specialty Documentation",
    body: "Explore how coding intelligence can be tailored to specialty-specific terminology, documentation patterns, and organizational coding requirements.",
  },
];

/* ===============================================================
   DATA — AI Chat Box case studies
   (Copied from the AI Chat Box page. Slugs match the
   /services/offerings/generative-ai/[slug] route used there, so
   "Learn More" links resolve to the same pages.)
================================================================ */

const aiChatBoxCaseStudies: CaseStudy[] = [
  {
    slug: "customer-support-ai-chat",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    title: "Building an AI Chat Experience for Customer Support",
    body: "See how grounded conversational AI can answer common questions, retrieve trusted information, and route more complex requests to the right support team.",
  },
  {
    slug: "employee-knowledge-assistant",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    title: "Making Enterprise Knowledge Easier to Access",
    body: "Explore how an internal AI assistant can give employees a natural-language interface to policies, procedures, documentation, and organizational knowledge.",
  },
  {
    slug: "sales-ai-assistant",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=900&auto=format&fit=crop",
    title: "Supporting Sales With Context-Aware AI Conversations",
    body: "Discover how AI chat can answer product questions, qualify intent, surface relevant information, and support a faster customer journey.",
  },
  {
    slug: "it-helpdesk-ai",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=900&auto=format&fit=crop",
    title: "Automating Repetitive IT Helpdesk Interactions",
    body: "Learn how conversational AI can resolve common employee requests, guide troubleshooting, and connect interactions to existing support workflows.",
  },
  {
    slug: "document-qa-assistant",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
    title: "Creating a Natural-Language Interface for Enterprise Documents",
    body: "Explore how document-grounded AI lets users ask questions across reports, manuals, policies, contracts, and other business content.",
  },
];

/* ===============================================================
   DATA — AI File Storage case studies
   (Copied from the AI File Storage page. Slugs match the
   /services/offerings/sustainability-services/[slug] route used
   there, so "Learn More" links resolve to the same pages.)
================================================================ */

const aiFileStorageCaseStudies: CaseStudy[] = [
  {
    slug: "enterprise-document-intelligence",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
    title: "Transforming Enterprise Documents Into Searchable Business Knowledge",
    body: "Explore how AI-powered organization, semantic search, and document intelligence can make large enterprise file repositories easier to discover and use.",
  },
  {
    slug: "intelligent-file-management",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=900&auto=format&fit=crop",
    title: "Modernizing File Management With AI-Powered Organization",
    body: "See how automated classification, metadata enrichment, and intelligent information structures can reduce the manual effort required to manage growing file collections.",
  },
  {
    slug: "secure-enterprise-storage",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=900&auto=format&fit=crop",
    title: "Building a Secure and Scalable Enterprise Storage Environment",
    body: "Discover an approach to modern file storage that balances scalability, accessibility, security, governance, and AI-powered information discovery.",
  },
  {
    slug: "ai-enterprise-search",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=900&auto=format&fit=crop",
    title: "Making Enterprise Information Discoverable With Semantic Search",
    body: "Learn how natural-language search can help authorized users find relevant information across distributed document repositories without relying on folder structures.",
  },
  {
    slug: "document-workflow-automation",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=900&auto=format&fit=crop",
    title: "Connecting Intelligent Documents With Business Workflows",
    body: "Explore how extracted document information can move from storage into operational workflows, applications, and decisions.",
  },
];

/* ===============================================================
   DATA — AI Meeting Assistant case studies
   (Copied from the AI Meeting Assistant page. Slugs match the
   /services/offerings/vibe-coding/[slug] route used there, so
   "Learn More" links resolve to the same pages.)
================================================================ */

const aiMeetingAssistantCaseStudies: CaseStudy[] = [
  {
    slug: "executive-meeting-intelligence",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=900&auto=format&fit=crop",
    title: "Turning Executive Meetings Into Structured Strategic Intelligence",
    body: "See how an AI meeting workflow can transform recurring leadership conversations into concise summaries, decision records, action items, and searchable strategic context.",
  },
  {
    slug: "sales-meeting-automation",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=900&auto=format&fit=crop",
    title: "Reducing Manual Follow-Up Across Customer Conversations",
    body: "Explore how meeting intelligence can capture customer requirements, commitments, objections, and next steps while reducing the administrative burden on sales teams.",
  },
  {
    slug: "product-engineering-meeting-intelligence",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=900&auto=format&fit=crop",
    title: "Creating a Searchable Knowledge Layer for Product and Engineering Teams",
    body: "Discover how product and engineering organizations can preserve technical context, decisions, requirements, and action items across a growing volume of meetings.",
  },
  {
    slug: "client-meeting-knowledge",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=900&auto=format&fit=crop",
    title: "Making Client Conversations Easier to Capture and Reuse",
    body: "Learn how AI meeting intelligence can structure client discussions and turn conversation history into reusable knowledge for consulting and professional services teams.",
  },
  {
    slug: "enterprise-meeting-workflows",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=900&auto=format&fit=crop",
    title: "Connecting Meeting Outcomes With Enterprise Workflows",
    body: "Explore an integrated approach where meeting summaries, decisions, and action items move into the systems teams already use for customer, project, and operational work.",
  },
];

export const metadata = {
  title: "Case Studies | Starfii",
  description:
    "Explore how Starfii's Artificial Intelligence, Digital & Software Engineering, Digital IT Operations, Cloud Engineering, Data & Analytics, Business Process, Enterprise Platform, Global Capability Center, AI Voice Call, AI-Powered Medical Coding, AI Chat Box, AI File Storage, and AI Meeting Assistant practices help enterprises unlock measurable value.",
};

/* ===============================================================
   REUSABLE: one heading + grid block, shared by every service
   section on this page.
================================================================ */

function CaseStudyGrid({
  heading,
  description,
  items,
  basePath,
}: {
  heading: string;
  description: string;
  items: CaseStudy[];
  basePath: string;
}): ReactElement {
  return (
    <div className="mt-20 first:mt-0">
      <h2
        className="font-heading text-[30px] font-medium leading-[1.15] lg:text-[36px]"
        style={{ color: CHAMPION_BLUE }}
      >
        {heading}
      </h2>
      <p className="font-body mt-4 max-w-2xl text-[16px] leading-relaxed text-slate-600">
        {description}
      </p>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((study) => (
          <Link
            key={study.slug}
            href={`${basePath}/${study.slug}`}
            className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-2xl"
            style={{ border: "1px solid #ECE7FB" }}
          >
            <div className="h-[220px] flex-shrink-0 overflow-hidden">
              <img
                src={study.image}
                alt={study.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <span
                className="font-body text-[12px] font-semibold tracking-wide"
                style={{ color: INDIGO_CTA }}
              >
                {study.category ?? "CASE STUDY"}
              </span>
              <h3
                className="font-heading mt-2 text-[19px] font-semibold leading-snug"
                style={{
                  color: CHAMPION_BLUE,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {study.title}
              </h3>
              <p
                className="font-body mt-3 text-[14px] leading-relaxed text-slate-600"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {study.body}
              </p>
              <span
                className="font-body mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold transition-transform duration-200 group-hover:translate-x-0.5"
                style={{ color: INDIGO_CTA }}
              >
                Learn More
                <ArrowUpRight size={15} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function CaseStudyPage(): ReactElement {
  return (
    <main className="bg-white">
      <section className={`${ALIGN} py-20 lg:py-28`}>
        {/* Artificial Intelligence case studies */}
        <CaseStudyGrid
          heading="Artificial Intelligence Case Studies"
          description="See how Starfii's machine learning, computer vision, NLP, and predictive AI systems have driven measurable outcomes for real enterprise teams."
          items={aiCaseStudies}
          basePath="/services/artificial-intelligence"
        />

        {/* Digital and Software case studies */}
        <CaseStudyGrid
          heading="Digital and Software Case Studies"
          description="See how Starfii's product engineering, SaaS delivery, and modernization work has helped enterprises ship faster and scale with confidence."
          items={digitalSoftwareCaseStudies}
          basePath="/services/digital-software/casestudies"
        />

        {/* Digital IT Operations case studies */}
        <CaseStudyGrid
          heading="Digital IT Operations Case Studies"
          description="See how Starfii's cloud operations, DevOps, cybersecurity, and modernization work has kept enterprise systems stable, secure, and running."
          items={digitalItOperationsCaseStudies}
          basePath="/services/digital-it-operations/casestudies"
        />

        {/* Cloud Engineering case studies */}
        <CaseStudyGrid
          heading="Cloud Engineering Case Studies"
          description="See how Starfii's cloud migration, multi cloud architecture, FinOps, and site reliability engineering work has delivered measurable results on AWS, Azure, and GCP."
          items={cloudCaseStudies}
          basePath="/services/cloud/casestudies"
        />

        {/* Data & Analytics case studies */}
        <CaseStudyGrid
          heading="Data & Analytics Case Studies"
          description="See how Starfii's data engineering, governance, and BI work has turned fragmented enterprise data into decisions teams can trust."
          items={dataAnalyticsCaseStudies}
          basePath="/services/data-analytics/casestudies"
        />

        {/* Business Process Services case studies */}
        <CaseStudyGrid
          heading="Business Process Case Studies"
          description="See how Starfii's process redesign, RPA, and managed operations work has cut cost per transaction and improved throughput across finance, procurement, and customer operations."
          items={businessProcessCaseStudies}
          basePath="/services/business-process-services"
        />

        {/* Enterprise Platform Services case studies */}
        <CaseStudyGrid
          heading="Enterprise Platform Case Studies"
          description="See how Starfii's platform engineering, modernization, and enterprise AI work has helped organizations scale critical digital platforms."
          items={enterprisePlatformCaseStudies}
          basePath="/services/enterprise-platform-services/casestudies"
        />

        {/* Global Capability Centers case studies */}
        <CaseStudyGrid
          heading="Global Capability Center Case Studies"
          description="See how Starfii's GCC setup, talent strategy, and governance design has taken enterprises from location feasibility to a fully staffed, operational center."
          items={gccCaseStudies}
          basePath="/services/global-capability-centers"
        />

        {/* AI Voice Call case studies */}
        <CaseStudyGrid
          heading="AI Voice Call Case Studies"
          description="See how Starfii's conversational AI and voice automation work has cut wait times, lifted contact rates, and modernized customer conversations."
          items={aiVoiceCallCaseStudies}
          basePath="/services/offerings/ai-native-contact-center"
        />

        {/* AI-Powered Medical Coding case studies */}
        <CaseStudyGrid
          heading="AI-Powered Medical Coding Case Studies"
          description="See how Starfii's AI-assisted clinical documentation analysis and coding intelligence has improved accuracy, turnaround, and compliance for healthcare organizations."
          items={medicalCodingCaseStudies}
          basePath="/services/offerings/enterprise-automation"
        />

        {/* AI Chat Box case studies */}
        <CaseStudyGrid
          heading="AI Chat Box Case Studies"
          description="See how Starfii's conversational AI has helped support, sales, IT helpdesk, and knowledge teams turn questions into faster, grounded answers."
          items={aiChatBoxCaseStudies}
          basePath="/services/offerings/generative-ai"
        />

        {/* AI File Storage case studies */}
        <CaseStudyGrid
          heading="AI File Storage Case Studies"
          description="See how Starfii's AI-powered organization, semantic search, and document intelligence has turned growing file repositories into searchable business knowledge."
          items={aiFileStorageCaseStudies}
          basePath="/services/offerings/sustainability-services"
        />

        {/* AI Meeting Assistant case studies */}
        <CaseStudyGrid
          heading="AI Meeting Assistant Case Studies"
          description="See how Starfii's meeting intelligence has turned conversations into structured knowledge, decisions, and action items across executive, sales, and product teams."
          items={aiMeetingAssistantCaseStudies}
          basePath="/services/offerings/vibe-coding"
        />
      </section>
    </main>
  );
}
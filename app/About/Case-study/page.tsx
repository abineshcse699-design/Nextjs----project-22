// PLACE THIS FILE AT: app/About/case-study/page.tsx
//
// Make sure the folder is named "case-study" (hyphen, no space) —
// not "Case study" — otherwise Next.js will 404 on this route.

import type { ReactElement } from "react";
import { caseStudies as itOperationsCaseStudies } from "@/app/services/digital-it-operations/casestudies/data.tsx/casestudies";
import { caseStudies as dataAnalyticsCaseStudies_ } from "@/app/services/data-analytics/casestudies/data/casestudies";
import CaseStudyFilters, { type CaseStudyGroup } from "../Case-study/CaseStudyFilters";

/* ===============================================================
   DATA — Artificial Intelligence case studies
================================================================ */
const aiCaseStudies = [
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
================================================================ */
const digitalSoftwareCaseStudies = [
  {
    slug: "insurance-claims-low-code-platform",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Transforms Reinsurance Claims Management with a Low Code Platform",
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
   DATA — Digital IT Operations case studies (from shared source)
================================================================ */
const digitalItOperationsCaseStudies = itOperationsCaseStudies.map((study) => ({
  slug: study.slug,
  image: study.image,
  title: study.title,
  body: study.body,
  category: study.industry?.toUpperCase(),
}));

/* ===============================================================
   DATA — Cloud Engineering case studies
================================================================ */
const cloudCaseStudies = [
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
   DATA — Data & Analytics case studies (from shared source)
================================================================ */
const dataAnalyticsCaseStudies = dataAnalyticsCaseStudies_.map((study) => ({
  slug: study.slug,
  image: study.image,
  title: study.title,
  body: study.body,
  category: study.industry?.toUpperCase(),
}));

/* ===============================================================
   DATA — Business Process Services case studies
================================================================ */
const businessProcessCaseStudies = [
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
================================================================ */
const enterprisePlatformCaseStudies = [
  {
    slug: "fintech-saas-platform-mvp-to-scale",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Builds a Fortune 500 Fintech SaaS Platform From MVP to Scale",
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
    title: "Starfii Ships a Generative AI Feature Set for a Healthcare SaaS Platform",
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
    title: "Starfii Cuts Legacy Modernization Timelines for an Enterprise Client",
    body: "Learn how Starfii's modernization roadmap moved a complex legacy application portfolio to a scalable cloud platform with minimal business disruption.",
  },
];

/* ===============================================================
   DATA — Global Capability Centers case studies
================================================================ */
const gccCaseStudies = [
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
================================================================ */
const aiVoiceCallCaseStudies = [
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
================================================================ */
const medicalCodingCaseStudies = [
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
================================================================ */
const aiChatBoxCaseStudies = [
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
================================================================ */
const aiFileStorageCaseStudies = [
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
================================================================ */
const aiMeetingAssistantCaseStudies = [
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
   GROUPS — one entry per filter tab. basePath keeps each card's
   "Learn More" link pointing at the same route it used before.
================================================================ */
const groups: CaseStudyGroup[] = [
  {
    key: "ai",
    label: "Artificial Intelligence",
    basePath: "/services/artificial-intelligence",
    items: aiCaseStudies,
  },
  {
    key: "digital-software",
    label: "Digital and Software",
    basePath: "/services/digital-software/casestudies",
    items: digitalSoftwareCaseStudies,
  },
  {
    key: "it-operations",
    label: "Digital IT Operations",
    basePath: "/services/digital-it-operations/casestudies",
    items: digitalItOperationsCaseStudies,
  },
  {
    key: "cloud",
    label: "Cloud Engineering",
    basePath: "/services/cloud/casestudies",
    items: cloudCaseStudies,
  },
  {
    key: "data-analytics",
    label: "Data & Analytics",
    basePath: "/services/data-analytics/casestudies",
    items: dataAnalyticsCaseStudies,
  },
  {
    key: "business-process",
    label: "Business Process",
    basePath: "/services/business-process-services",
    items: businessProcessCaseStudies,
  },
  {
    key: "enterprise-platform",
    label: "Enterprise Platform",
    basePath: "/services/enterprise-platform-services/casestudies",
    items: enterprisePlatformCaseStudies,
  },
  {
    key: "gcc",
    label: "Global Capability Centers",
    basePath: "/services/global-capability-centers",
    items: gccCaseStudies,
  },
  {
    key: "ai-voice",
    label: "AI Voice Call",
    basePath: "/services/offerings/ai-native-contact-center",
    items: aiVoiceCallCaseStudies,
  },
  {
    key: "medical-coding",
    label: "AI Medical Coding",
    basePath: "/services/offerings/enterprise-automation",
    items: medicalCodingCaseStudies,
  },
  {
    key: "ai-chat",
    label: "AI Chat Box",
    basePath: "/services/offerings/generative-ai",
    items: aiChatBoxCaseStudies,
  },
  {
    key: "ai-file-storage",
    label: "AI File Storage",
    basePath: "/services/offerings/sustainability-services",
    items: aiFileStorageCaseStudies,
  },
  {
    key: "ai-meetings",
    label: "AI Meeting Assistant",
    basePath: "/services/offerings/vibe-coding",
    items: aiMeetingAssistantCaseStudies,
  },
];

export default function CaseStudyPage(): ReactElement {
  return <CaseStudyFilters groups={groups} />;
}
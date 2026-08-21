// app/industries/data.ts
import type { IndustryContent } from "@/app/IndustryPageTemplate/IndustryPageTemplate";

export const industries: Record<string, IndustryContent> = {
  banking: {
    slug: "banking",
    name: "Banking",
    kicker: "INDUSTRY / BANKING",
    headline: "Modern banking, built on systems that can actually keep up.",
    description:
      "We help retail and commercial banks modernize core platforms, ship digital products faster, and stay compliant while doing it — without ripping out what already works.",
    stats: [
      { value: "30%", label: "Average reduction in loan origination turnaround time" },
      { value: "99.98%", label: "Uptime maintained across core banking migrations" },
      { value: "40+", label: "Banking and lending platforms delivered" },
    ],
    capabilities: [
      { title: "Core modernization", description: "Migrate legacy core banking systems to cloud-native platforms without disrupting live operations." },
      { title: "Digital lending", description: "End-to-end loan origination, underwriting, and servicing platforms with automated decisioning." },
      { title: "Open banking & APIs", description: "Secure API layers that connect your bank to fintech partners and regulatory frameworks." },
      { title: "Risk & compliance", description: "Automated KYC/AML workflows and reporting built for evolving regulatory requirements." },
    ],
    solutions: [
      { label: "Digital Banking Platforms" },
      { label: "Loan Origination Systems" },
      { label: "KYC & AML Automation" },
      { label: "Core Banking Migration" },
      { label: "Open Banking APIs" },
      { label: "Fraud Detection Engines" },
    ],
    insight: {
      eyebrow: "Featured Insight",
      title: "Why core banking migrations fail — and how to avoid it",
      blurb: "A look at the operational patterns that separate smooth core migrations from multi-year overruns.",
    },
  },

  "consumer-goods": {
    slug: "consumer-goods",
    name: "Consumer Goods",
    kicker: "INDUSTRY / CONSUMER GOODS",
    headline: "Get closer to the shelf, and closer to the shopper.",
    description:
      "From demand forecasting to direct-to-consumer commerce, we build the data and software backbone that helps CPG brands move faster than the market around them.",
    stats: [
      { value: "18%", label: "Improvement in demand forecast accuracy" },
      { value: "25%", label: "Faster new-product launch cycles" },
      { value: "12+", label: "Global CPG brands supported" },
    ],
    capabilities: [
      { title: "Demand & supply planning", description: "Forecasting and inventory systems that reduce stockouts and overproduction." },
      { title: "Direct-to-consumer commerce", description: "Storefronts and subscription platforms that let brands sell directly, not just through retail." },
      { title: "Trade promotion management", description: "Tools to plan, execute, and measure promotions across retail partners." },
      { title: "Retail analytics", description: "Point-of-sale and shelf data pipelines that turn scattered retailer feeds into one view." },
    ],
    solutions: [
      { label: "D2C Commerce Platforms" },
      { label: "Demand Forecasting Tools" },
      { label: "Trade Promotion Software" },
      { label: "Retail Data Pipelines" },
      { label: "Loyalty & Subscription Apps" },
      { label: "Category Management Tools" },
    ],
    insight: {
      eyebrow: "Featured Insight",
      title: "The D2C playbook CPG brands are quietly rewriting",
      blurb: "How consumer goods leaders are using owned channels to reclaim margin and shopper data.",
    },
  },

  "education-institutions": {
    slug: "education-institutions",
    name: "Education & Institutions",
    kicker: "INDUSTRY / EDUCATION & INSTITUTIONS",
    headline: "Software that keeps up with how people actually learn.",
    description:
      "We build platforms for schools, universities, and training providers — from student information systems to full e-learning experiences that work at scale.",
    stats: [
      { value: "50+", label: "Learning platforms built for institutions and edtechs" },
      { value: "2M+", label: "Learners served across delivered platforms" },
      { value: "35%", label: "Reduction in administrative workload for staff" },
    ],
    capabilities: [
      { title: "Learning management systems", description: "Custom LMS platforms built around your curriculum, not a rigid template." },
      { title: "Student information systems", description: "Enrollment, records, and administration software that replaces manual processes." },
      { title: "Course marketplaces", description: "Platforms where educators publish, sell, and manage courses at scale." },
      { title: "Corporate training", description: "Bulk-user training systems with progress tracking and certification." },
    ],
    solutions: [
      { label: "E-Learning Web Applications" },
      { label: "Student Information Systems" },
      { label: "Course Marketplaces" },
      { label: "Corporate Training Platforms" },
      { label: "Assessment & Proctoring Tools" },
      { label: "Institution Admin Portals" },
    ],
    insight: {
      eyebrow: "Featured Insight",
      title: "What institutions get wrong about LMS procurement",
      blurb: "Off-the-shelf LMS platforms solve 80% of the problem — and quietly create the other 20%.",
    },
  },

  "energy-utilities": {
    slug: "energy-utilities",
    name: "Energy & Utilities",
    kicker: "INDUSTRY / ENERGY & UTILITIES",
    headline: "Grid-scale problems need grid-scale software.",
    description:
      "We help energy and utility providers modernize metering, outage management, and customer systems while managing the operational risk that comes with critical infrastructure.",
    stats: [
      { value: "22%", label: "Reduction in outage response time" },
      { value: "15+", label: "Utility and energy providers modernized" },
      { value: "99.9%", label: "System availability across delivered platforms" },
    ],
    capabilities: [
      { title: "Smart metering platforms", description: "Data pipelines and dashboards for AMI meter networks at scale." },
      { title: "Outage management", description: "Real-time detection and dispatch systems that shorten restoration time." },
      { title: "Customer self-service", description: "Billing, usage insights, and account portals that reduce call center load." },
      { title: "Grid analytics", description: "Load forecasting and asset health monitoring built on live grid data." },
    ],
    solutions: [
      { label: "Smart Metering Dashboards" },
      { label: "Outage Management Systems" },
      { label: "Customer Self-Service Portals" },
      { label: "Grid Analytics Platforms" },
      { label: "Field Service Apps" },
      { label: "Renewable Asset Monitoring" },
    ],
    insight: {
      eyebrow: "Featured Insight",
      title: "Modernizing grid operations without downtime",
      blurb: "How utilities are phasing in modern platforms while keeping critical infrastructure live.",
    },
  },

  "financial-services": {
    slug: "financial-services",
    name: "Financial Services",
    kicker: "INDUSTRY / FINANCIAL SERVICES",
    headline: "Secure, compliant software for how finance moves today.",
    description:
      "We design and build microservices-based platforms for financial institutions — from digital wallets to lending — engineered for security and compliance from day one.",
    stats: [
      { value: "40+", label: "Financial platforms delivered" },
      { value: "99.99%", label: "Transaction system uptime" },
      { value: "3x", label: "Faster feature releases with microservices" },
    ],
    capabilities: [
      { title: "Digital wallets & payments", description: "Secure payment infrastructure built for scale and regulatory compliance." },
      { title: "Personal finance tools", description: "Budgeting, tracking, and financial planning apps consumers actually keep using." },
      { title: "Neobank platforms", description: "Full digital banking stacks for challenger banks and embedded finance." },
      { title: "Leasing & asset finance", description: "Software for structuring, tracking, and servicing leased assets." },
    ],
    solutions: [
      { label: "Digital Banking & Neobank Software" },
      { label: "Personal Finance Management Apps" },
      { label: "E-Wallets" },
      { label: "Leasing Software" },
      { label: "Payment Gateways" },
      { label: "Regulatory Reporting Tools" },
    ],
    insight: {
      eyebrow: "Featured Insight",
      title: "Who owns your AI's memory?",
      blurb: "As financial platforms adopt AI agents, data ownership and auditability become the real design problem.",
    },
  },

  healthcare: {
    slug: "healthcare",
    name: "Healthcare",
    kicker: "INDUSTRY / HEALTHCARE",
    headline: "Better outcomes start with better-connected systems.",
    description:
      "We build digital products and technology services for healthcare practitioners and organizations — designed to increase patient engagement without compromising on compliance.",
    stats: [
      { value: "45%", label: "Increase in patient portal engagement" },
      { value: "20+", label: "Healthcare and telemedicine platforms delivered" },
      { value: "HIPAA", label: "Compliant architecture by default" },
    ],
    capabilities: [
      { title: "Patient engagement", description: "Portals and health-tracking apps that keep patients connected between visits." },
      { title: "Telemedicine", description: "Virtual care platforms with scheduling, video, and e-prescriptions built in." },
      { title: "Clinic & pharmacy systems", description: "Operational software for clinics, pharmacies, and medical centers." },
      { title: "Interoperability", description: "HL7/FHIR-compliant integrations that connect providers, labs, and payers." },
    ],
    solutions: [
      { label: "Health Tracking Applications" },
      { label: "Patient Portals" },
      { label: "Clinic & Pharmacy Systems" },
      { label: "Telemedicine Software" },
      { label: "EHR Integrations" },
      { label: "Appointment Scheduling Platforms" },
    ],
    insight: {
      eyebrow: "Featured Insight",
      title: "Telemedicine adoption is up. Trust is the next hurdle.",
      blurb: "What it takes to design virtual care experiences patients and clinicians both rely on.",
    },
  },

  insurance: {
    slug: "insurance",
    name: "Insurance",
    kicker: "INDUSTRY / INSURANCE",
    headline: "Servicing, reimagined for a digital-first policyholder.",
    description:
      "We partner with insurers to modernize claims, underwriting, and policy servicing — reducing manual work while improving the experience for every policyholder.",
    stats: [
      { value: "35%", label: "Faster claims processing time" },
      { value: "28%", label: "Reduction in manual underwriting effort" },
      { value: "10+", label: "Insurance carriers modernized" },
    ],
    capabilities: [
      { title: "Claims automation", description: "AI-assisted claims intake, triage, and processing that cuts turnaround time." },
      { title: "Underwriting platforms", description: "Rules-driven and predictive underwriting tools that scale with volume." },
      { title: "Policy servicing", description: "Self-service portals for renewals, endorsements, and policy management." },
      { title: "ServiceNow FSO", description: "Insurance servicing workflows built on ServiceNow's Financial Services Operations suite." },
    ],
    solutions: [
      { label: "Claims Management Systems" },
      { label: "Underwriting Platforms" },
      { label: "Policy Servicing Portals" },
      { label: "Agent & Broker Tools" },
      { label: "Fraud Detection Models" },
      { label: "ServiceNow FSO Implementations" },
    ],
    insight: {
      eyebrow: "Featured Insight",
      title: "Reimagining insurance servicing on ServiceNow FSO",
      blurb: "How carriers are consolidating claims and policy workflows onto a single operating layer.",
    },
  },

  "life-sciences": {
    slug: "life-sciences",
    name: "Life Sciences",
    kicker: "INDUSTRY / LIFE SCIENCES",
    headline: "From lab to launch, without losing the data trail.",
    description:
      "We build software for pharmaceutical, biotech, and medical device organizations that keeps research, trials, and regulatory submissions moving — and auditable.",
    stats: [
      { value: "30%", label: "Faster clinical data processing" },
      { value: "15+", label: "Life sciences platforms delivered" },
      { value: "GxP", label: "Aligned development practices" },
    ],
    capabilities: [
      { title: "Clinical trial platforms", description: "Data capture and trial management systems built for regulated environments." },
      { title: "Regulatory submissions", description: "Document and workflow systems that keep submissions organized and traceable." },
      { title: "Lab data systems", description: "LIMS integrations and pipelines that connect lab instruments to research data." },
      { title: "Pharmacovigilance", description: "Adverse event tracking and reporting systems built for compliance." },
    ],
    solutions: [
      { label: "Clinical Trial Management Systems" },
      { label: "Regulatory Document Platforms" },
      { label: "LIMS Integrations" },
      { label: "Pharmacovigilance Tools" },
      { label: "Research Data Pipelines" },
      { label: "Compliance Dashboards" },
    ],
    insight: {
      eyebrow: "Featured Insight",
      title: "Keeping trial data audit-ready from day one",
      blurb: "Why retrofitting compliance into clinical systems costs more than building it in.",
    },
  },

  manufacturing: {
    slug: "manufacturing",
    name: "Manufacturing",
    kicker: "INDUSTRY / MANUFACTURING",
    headline: "Connect the plant floor to the rest of the business.",
    description:
      "We help manufacturers digitize production, supply chain, and quality systems — turning machine and process data into decisions the whole business can act on.",
    stats: [
      { value: "20%", label: "Reduction in unplanned downtime" },
      { value: "25+", label: "Manufacturing plants digitized" },
      { value: "15%", label: "Improvement in production throughput" },
    ],
    capabilities: [
      { title: "MES & shop floor systems", description: "Manufacturing execution systems that connect machines, operators, and ERP." },
      { title: "Predictive maintenance", description: "Sensor-driven models that flag equipment issues before they cause downtime." },
      { title: "Quality management", description: "Digital QMS platforms for inspections, non-conformance, and traceability." },
      { title: "Supply chain visibility", description: "Real-time tracking across suppliers, inventory, and production schedules." },
    ],
    solutions: [
      { label: "Manufacturing Execution Systems" },
      { label: "Predictive Maintenance Platforms" },
      { label: "Quality Management Systems" },
      { label: "Supply Chain Dashboards" },
      { label: "IoT Sensor Integrations" },
      { label: "Production Planning Tools" },
    ],
    insight: {
      eyebrow: "Featured Insight",
      title: "How gen AI makes supply chains decide faster",
      blurb: "Manufacturers are using generative AI to compress planning cycles that used to take days.",
    },
  },

  "private-equity": {
    slug: "private-equity",
    name: "Private Equity",
    kicker: "INDUSTRY / PRIVATE EQUITY",
    headline: "Technology diligence and value creation, on your timeline.",
    description:
      "We support PE firms and portfolio companies through diligence, carve-outs, and post-acquisition technology transformation — built to move at deal speed.",
    stats: [
      { value: "50+", label: "Technology diligence engagements" },
      { value: "6–10 wks", label: "Typical carve-out platform stand-up" },
      { value: "20+", label: "Portfolio companies supported post-close" },
    ],
    capabilities: [
      { title: "Technology diligence", description: "Fast, rigorous assessments of target-company systems, architecture, and risk." },
      { title: "Carve-out execution", description: "Stand up independent IT operations for divested entities on tight timelines." },
      { title: "Value creation planning", description: "Technology roadmaps tied directly to the investment thesis." },
      { title: "Portfolio standardization", description: "Shared platforms and tooling across portfolio companies to cut cost and risk." },
    ],
    solutions: [
      { label: "Technology Due Diligence" },
      { label: "Carve-Out IT Platforms" },
      { label: "Value Creation Roadmaps" },
      { label: "Portfolio Tech Standardization" },
      { label: "Post-Merger Integration" },
      { label: "Interim CTO Support" },
    ],
    insight: {
      eyebrow: "Featured Insight",
      title: "What technology diligence misses under deal-speed pressure",
      blurb: "The architecture and data risks that don't show up until 90 days after close.",
    },
  },

  "professional-services": {
    slug: "professional-services",
    name: "Professional Services",
    kicker: "INDUSTRY / PROFESSIONAL SERVICES",
    headline: "Run the firm on systems built for how you bill and deliver.",
    description:
      "We build practice management, resourcing, and client-delivery platforms for consulting, legal, and advisory firms who've outgrown spreadsheets.",
    stats: [
      { value: "30%", label: "Reduction in resourcing conflicts" },
      { value: "18%", label: "Improvement in billable utilization" },
      { value: "20+", label: "Professional services firms supported" },
    ],
    capabilities: [
      { title: "Practice management", description: "Time, billing, and engagement tracking built around how your firm actually works." },
      { title: "Resource planning", description: "Staffing and capacity tools that match the right people to the right engagements." },
      { title: "Client portals", description: "Secure, branded portals for document sharing and project visibility." },
      { title: "Knowledge management", description: "Systems that make institutional knowledge searchable instead of siloed." },
    ],
    solutions: [
      { label: "Practice Management Platforms" },
      { label: "Resource & Capacity Planning" },
      { label: "Client Delivery Portals" },
      { label: "Time & Billing Systems" },
      { label: "Knowledge Management Tools" },
      { label: "Proposal & Engagement Software" },
    ],
    insight: {
      eyebrow: "Featured Insight",
      title: "Agentic AI, proven across 100+ case studies",
      blurb: "Real results from firms putting agentic AI to work on delivery and internal operations.",
    },
  },

  "public-sector": {
    slug: "public-sector",
    name: "Public Sector",
    kicker: "INDUSTRY / PUBLIC SECTOR",
    headline: "Citizen services that meet people where they are.",
    description:
      "We modernize public-sector systems — from citizen portals to case management — with the accessibility, security, and procurement realities of government in mind.",
    stats: [
      { value: "40%", label: "Reduction in citizen service processing time" },
      { value: "WCAG", label: "Accessibility-compliant by default" },
      { value: "15+", label: "Government and public-sector platforms delivered" },
    ],
    capabilities: [
      { title: "Citizen service portals", description: "Digital front doors for permits, applications, and public services." },
      { title: "Case management", description: "Configurable case workflows for agencies handling high volumes of requests." },
      { title: "Data & records modernization", description: "Migrate legacy records systems without disrupting public-facing services." },
      { title: "Security & compliance", description: "Systems built to government security and accessibility standards from the start." },
    ],
    solutions: [
      { label: "Citizen Service Portals" },
      { label: "Case Management Systems" },
      { label: "Records Modernization" },
      { label: "Permitting & Licensing Platforms" },
      { label: "Grants Management Tools" },
      { label: "Accessibility Compliance Audits" },
    ],
    insight: {
      eyebrow: "Featured Insight",
      title: "Modernizing citizen services without the multi-year overhaul",
      blurb: "How agencies are shipping incremental improvements instead of waiting on a single big-bang launch.",
    },
  },

  retail: {
    slug: "retail",
    name: "Retail",
    kicker: "INDUSTRY / RETAIL",
    headline: "Custom commerce, built to handle real traffic.",
    description:
      "We build e-commerce software with powerful admin panels, payment integrations, and real-time reporting — designed for retailers who've outgrown off-the-shelf platforms.",
    stats: [
      { value: "3x", label: "Peak traffic handled without downtime" },
      { value: "22%", label: "Increase in checkout conversion" },
      { value: "30+", label: "Retail and e-commerce platforms delivered" },
    ],
    capabilities: [
      { title: "Custom storefronts", description: "E-commerce experiences with admin panels built around your catalog and operations." },
      { title: "Payments & checkout", description: "Fast, reliable checkout with integrated payment and fraud protection." },
      { title: "Inventory & fulfillment", description: "Real-time inventory management and shipping automation across channels." },
      { title: "Loyalty & retention", description: "Programs and apps that keep customers coming back after the first purchase." },
    ],
    solutions: [
      { label: "Mobile Applications" },
      { label: "Marketplaces" },
      { label: "Store Inventory Software" },
      { label: "Order Management Solutions" },
      { label: "Loyalty Programs" },
      { label: "Shipping Automation" },
    ],
    insight: {
      eyebrow: "Featured Insight",
      title: "What retailers get wrong migrating off legacy commerce platforms",
      blurb: "The traffic and data-migration mistakes that turn a routine replatform into a launch-day outage.",
    },
  },

  "technology-products-platforms": {
    slug: "technology-products-platforms",
    name: "Technology, Products & Platforms",
    kicker: "INDUSTRY / TECHNOLOGY, PRODUCTS & PLATFORMS",
    headline: "Extra engineering capacity for teams building products.",
    description:
      "We work as an extension of product and engineering teams at software companies — shipping features, scaling infrastructure, and taking on the roadmap work that doesn't fit in-house.",
    stats: [
      { value: "60+", label: "Product engineering engagements" },
      { value: "2x", label: "Average velocity increase on embedded teams" },
      { value: "99.9%", label: "SLA maintained across managed platforms" },
    ],
    capabilities: [
      { title: "Product engineering", description: "Embedded teams that ship features alongside your existing product org." },
      { title: "Platform scaling", description: "Architecture and infrastructure work to handle growth without a rewrite." },
      { title: "API & integrations", description: "Public APIs and partner integrations built for reliability at scale." },
      { title: "DevOps & SRE", description: "CI/CD, observability, and reliability practices for platforms that can't go down." },
    ],
    solutions: [
      { label: "Embedded Product Teams" },
      { label: "Platform Architecture" },
      { label: "API Development" },
      { label: "DevOps & SRE Support" },
      { label: "Technical Due Diligence" },
      { label: "Legacy Modernization" },
    ],
    insight: {
      eyebrow: "Featured Insight",
      title: "Vibe coding in production: where it works, where it doesn't",
      blurb: "How product teams are using AI-assisted development without sacrificing code quality.",
    },
  },

  telecom: {
    slug: "telecom",
    name: "Telecom",
    kicker: "INDUSTRY / TELECOM",
    headline: "Network-grade software for network-scale operators.",
    description:
      "We build OSS/BSS, customer experience, and network operations software for telecom providers managing millions of subscribers and constant change.",
    stats: [
      { value: "25%", label: "Reduction in customer churn via better self-service" },
      { value: "10M+", label: "Subscribers served across delivered platforms" },
      { value: "20%", label: "Faster network incident resolution" },
    ],
    capabilities: [
      { title: "OSS/BSS modernization", description: "Billing, provisioning, and operations support systems built for scale." },
      { title: "Customer self-service", description: "Apps and portals that reduce call volume and improve subscriber satisfaction." },
      { title: "Network operations", description: "Monitoring and incident management tools for network reliability teams." },
      { title: "5G & IoT enablement", description: "Platforms that support new connectivity products and enterprise IoT offerings." },
    ],
    solutions: [
      { label: "OSS/BSS Platforms" },
      { label: "Subscriber Self-Service Apps" },
      { label: "Network Monitoring Dashboards" },
      { label: "Billing & Provisioning Systems" },
      { label: "IoT Connectivity Platforms" },
      { label: "Customer Care Tools" },
    ],
    insight: {
      eyebrow: "Featured Insight",
      title: "Telecom's quiet OSS/BSS modernization wave",
      blurb: "Why operators are replacing decades-old billing systems in phases instead of one migration.",
    },
  },

  "transportation-logistics": {
    slug: "transportation-logistics",
    name: "Transportation & Logistics",
    kicker: "INDUSTRY / TRANSPORTATION & LOGISTICS",
    headline: "Fast, easy access to transportation and logistics services.",
    description:
      "We build scalable software with intuitive interfaces and interactive maps that help logistics providers move goods and people more efficiently.",
    stats: [
      { value: "28%", label: "Improvement in on-time delivery rates" },
      { value: "20+", label: "Logistics and mobility platforms delivered" },
      { value: "15%", label: "Reduction in empty-mile routing" },
    ],
    capabilities: [
      { title: "Fleet & route optimization", description: "Real-time routing and dispatch systems that cut fuel cost and delivery time." },
      { title: "Warehouse management", description: "WMS platforms that connect inventory, picking, and shipping operations." },
      { title: "Last-mile delivery", description: "Delivery and taxi apps with live tracking built for driver and customer experience." },
      { title: "Supply chain visibility", description: "End-to-end shipment tracking across carriers and modes." },
    ],
    solutions: [
      { label: "Supply Chain Management Solutions" },
      { label: "Warehouse Management Software" },
      { label: "Delivery & Taxi Apps" },
      { label: "Vehicle Sharing & Rental Apps" },
      { label: "Route Optimization Engines" },
      { label: "Fleet Tracking Dashboards" },
    ],
    insight: {
      eyebrow: "Featured Insight",
      title: "How gen AI makes supply chains decide faster",
      blurb: "Logistics teams are cutting planning cycles by putting generative AI in front of routing decisions.",
    },
  },

  "travel-hospitality": {
    slug: "travel-hospitality",
    name: "Travel & Hospitality",
    kicker: "INDUSTRY / TRAVEL & HOSPITALITY",
    headline: "Software for advanced traveler experience and agency growth.",
    description:
      "We build booking, property management, and trip-planning software that helps travel and hospitality businesses convert more searches into bookings.",
    stats: [
      { value: "20%", label: "Increase in direct booking conversion" },
      { value: "15+", label: "Travel and hospitality platforms delivered" },
      { value: "30%", label: "Reduction in booking abandonment" },
    ],
    capabilities: [
      { title: "Booking engines", description: "Fast, reliable booking flows integrated with your inventory and payment providers." },
      { title: "Property management", description: "Systems for managing reservations, rates, and operations across properties." },
      { title: "Trip planning tools", description: "Itinerary and personalization features that turn browsing into booking." },
      { title: "Agency sales tools", description: "Software that helps travel agencies manage sales pipelines and commissions." },
    ],
    solutions: [
      { label: "Travel Agency Portals" },
      { label: "Booking Apps" },
      { label: "Hotel Management Systems" },
      { label: "Trip Planning Software" },
      { label: "Dynamic Pricing Engines" },
      { label: "Loyalty & Rewards Platforms" },
    ],
    insight: {
      eyebrow: "Featured Insight",
      title: "Why direct bookings are becoming the priority again",
      blurb: "Travel brands are investing back into owned booking channels to reduce OTA dependency.",
    },
  },
};

export type IndustrySlug = keyof typeof industries;
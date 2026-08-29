// app/industries/data.ts
import type { IndustryContent } from "@/app/industries/IndustryPageTemplate/IndustryPageTemplate";

// Content rewritten for Starfii Technology - an AI-driven software development
// and product engineering company (starfii.com). Copy is written to be SEO,
// AEO (Answer Engine Optimization), and GEO (Generative Engine Optimization)
// friendly: clear entity mentions ("Starfii Technology", "custom software
// development company"), direct-answer style headlines and descriptions,
// and industry + service keywords that map to how buyers and AI search
// engines phrase queries.

export const industries: Record<string, IndustryContent> = {
  banking: {
    slug: "banking",
    name: "Banking",
    kicker: "INDUSTRY / BANKING",
    headline: "AI-driven banking software development, built for security and speed.",
    description:
      "Starfii Technology is a custom software development company that helps banks and lending businesses build secure, AI-powered digital banking platforms. From core banking integrations to loan origination software, our product engineering teams ship compliant fintech solutions without disrupting live operations.",
    stats: [
      { value: "5+", label: "Years delivering software development services to financial and fintech clients" },
      { value: "20+", label: "Successful partnerships with industry leaders, including Fortune 500 companies" },
      { value: "3", label: "Months to MVP - fast launch for new banking and lending products" },
    ],
    capabilities: [
      { title: "Core banking & legacy modernization", description: "Legacy software modernization services that move outdated core banking systems to scalable, cloud-native architecture." },
      { title: "Digital lending platforms", description: "End-to-end loan origination, underwriting, and servicing software with AI/ML-powered automated decisioning." },
      { title: "Open banking & API engineering", description: "Secure API development that connects banks to fintech partners, payment rails, and regulatory reporting systems." },
      { title: "Risk, compliance & fraud detection", description: "Data engineering and Gen AI-driven KYC/AML workflows built for evolving regulatory requirements." },
    ],
    solutions: [
      { label: "Digital Banking Software Development" },
      { label: "Loan Origination Systems" },
      { label: "KYC & AML Automation" },
      { label: "Core Banking Migration" },
      { label: "Open Banking API Development" },
      { label: "AI Fraud Detection Engines" },
    ],
    insight: {
      eyebrow: "Featured Insight",
      title: "Why core banking migrations fail - and how a product engineering partner avoids it",
      blurb: "Starfii Technology breaks down the operational patterns that separate smooth core banking modernization projects from multi-year overruns.",
    },
  },

  "consumer-goods": {
    slug: "consumer-goods",
    name: "Consumer Goods",
    kicker: "INDUSTRY / CONSUMER GOODS",
    headline: "Custom software development for CPG brands that want to sell direct.",
    description:
      "Starfii Technology builds the data engineering and product engineering backbone CPG and consumer goods brands need to forecast demand, launch products faster, and grow direct-to-consumer commerce - powered by AI/ML and Gen AI where it moves the needle.",
    stats: [
      { value: "80+", label: "Skilled software engineers and product specialists" },
      { value: "3", label: "Months to MVP for new D2C and retail-tech products" },
      { value: "100%", label: "Of projects delivered on deadline and within budget" },
    ],
    capabilities: [
      { title: "Demand & supply planning software", description: "AI-powered forecasting and inventory systems that reduce stockouts and overproduction." },
      { title: "Direct-to-consumer commerce development", description: "Custom storefronts and subscription platforms that let CPG brands sell direct, not just through retail." },
      { title: "Trade promotion management software", description: "Tools to plan, execute, and measure promotions across retail partners." },
      { title: "Retail data & analytics engineering", description: "Point-of-sale and shelf data pipelines that turn scattered retailer feeds into one BI dashboard." },
    ],
    solutions: [
      { label: "D2C Commerce Platform Development" },
      { label: "AI Demand Forecasting Software" },
      { label: "Trade Promotion Management Tools" },
      { label: "Retail Data Pipeline Engineering" },
      { label: "Loyalty & Subscription App Development" },
      { label: "Category Management Software" },
    ],
    insight: {
      eyebrow: "Featured Insight",
      title: "The D2C software playbook CPG brands are quietly rewriting",
      blurb: "How Starfii Technology helps consumer goods leaders use owned digital channels to reclaim margin and first-party shopper data.",
    },
  },

  "education-institutions": {
    slug: "education-institutions",
    name: "Education & Institutions",
    kicker: "INDUSTRY / ED-TECH & E-LEARNING",
    headline: "Ed-tech app development that keeps up with how people actually learn.",
    description:
      "As a custom software development company with deep ed-tech and e-learning expertise, Starfii Technology builds learning management systems, student information systems, and full-scale e-learning platforms for schools, universities, and training providers - engineered to scale globally.",
    stats: [
      { value: "5+", label: "Years of experience delivering ed-tech and e-learning software" },
      { value: "80+", label: "Engineers, designers, and QA specialists on our delivery teams" },
      { value: "3+", label: "Global development locations supporting institutional clients" },
    ],
    capabilities: [
      { title: "Learning management system (LMS) development", description: "Custom LMS software built around your curriculum, not a rigid off-the-shelf template." },
      { title: "Student information system (SIS) software", description: "Enrollment, records, and administration software that replaces manual processes." },
      { title: "Course marketplace development", description: "E-learning platforms where educators publish, sell, and manage courses at scale." },
      { title: "Corporate training software", description: "Bulk-user training systems with AI-assisted progress tracking and certification." },
    ],
    solutions: [
      { label: "E-Learning Web & Mobile App Development" },
      { label: "Student Information System Software" },
      { label: "Course Marketplace Development" },
      { label: "Corporate Training Platform Development" },
      { label: "Assessment & Proctoring Software" },
      { label: "Institution Admin Portal Development" },
    ],
    insight: {
      eyebrow: "Featured Insight",
      title: "What institutions get wrong about LMS procurement",
      blurb: "Off-the-shelf LMS software solves most of the problem - Starfii Technology explains why custom development closes the rest.",
    },
  },

  "energy-utilities": {
    slug: "energy-utilities",
    name: "Energy & Utilities",
    kicker: "INDUSTRY / ENERGY & UTILITIES",
    headline: "Grid-scale software engineering for energy and utility providers.",
    description:
      "Starfii Technology's software development services help energy and utility companies modernize metering, outage management, and customer-facing systems - combining cloud engineering, data engineering, and AI/ML to manage the operational risk that comes with critical infrastructure.",
    stats: [
      { value: "5+", label: "Years of enterprise product engineering experience" },
      { value: "99.9%", label: "Target system availability across delivered platforms" },
      { value: "3+", label: "Global delivery locations for round-the-clock engineering support" },
    ],
    capabilities: [
      { title: "Smart metering software", description: "Data pipelines and BI dashboards for AMI meter networks at scale." },
      { title: "Outage management software development", description: "Real-time detection and dispatch systems that shorten restoration time." },
      { title: "Customer self-service portal development", description: "Billing, usage insights, and account portals that reduce call center load." },
      { title: "Grid analytics & forecasting", description: "AI-powered load forecasting and asset health monitoring built on live grid data." },
    ],
    solutions: [
      { label: "Smart Metering Dashboard Development" },
      { label: "Outage Management System Software" },
      { label: "Customer Self-Service Portal Development" },
      { label: "Grid Analytics Platform Engineering" },
      { label: "Field Service App Development" },
      { label: "Renewable Asset Monitoring Software" },
    ],
    insight: {
      eyebrow: "Featured Insight",
      title: "Modernizing grid operations software without downtime",
      blurb: "Starfii Technology on how utilities phase in modern platforms while keeping critical infrastructure live.",
    },
  },

  "financial-services": {
    slug: "financial-services",
    name: "Financial Services",
    kicker: "INDUSTRY / FINANCE",
    headline: "Fintech software development, secure and compliant by design.",
    description:
      "Starfii Technology designs and builds AI-driven, microservices-based software for financial services companies - from digital wallets to neobank platforms - engineered for security and regulatory compliance from day one. We are a trusted fintech software development partner to Fortune 500 companies.",
    stats: [
      { value: "20+", label: "Successful partnerships with financial services and fintech clients" },
      { value: "5+", label: "Years delivering enterprise SaaS product engineering" },
      { value: "3", label: "Months to launch an MVP fintech product" },
    ],
    capabilities: [
      { title: "Digital wallet & payment software", description: "Secure payment infrastructure built for scale and regulatory compliance." },
      { title: "Personal finance app development", description: "Budgeting, tracking, and financial planning apps consumers actually keep using." },
      { title: "Neobank platform development", description: "Full digital banking stacks for challenger banks and embedded finance." },
      { title: "Leasing & asset finance software", description: "Software for structuring, tracking, and servicing leased assets." },
    ],
    solutions: [
      { label: "Digital Banking & Neobank Software Development" },
      { label: "Personal Finance Management App Development" },
      { label: "E-Wallet Development" },
      { label: "Leasing Software Development" },
      { label: "Payment Gateway Integration" },
      { label: "Regulatory Reporting Tools" },
    ],
    insight: {
      eyebrow: "Featured Insight",
      title: "Who owns your AI's memory?",
      blurb: "As financial platforms adopt Gen AI and LLM-powered agents, Starfii Technology looks at why data ownership and auditability become the real design problem.",
    },
  },

  healthcare: {
    slug: "healthcare",
    name: "Healthcare",
    kicker: "INDUSTRY / HEALTHCARE & WELLNESS",
    headline: "Healthcare software development built for patient engagement and compliance.",
    description:
      "Starfii Technology is a healthcare software development company building digital products for practitioners, clinics, and wellness organizations - designed to increase patient engagement, streamline care delivery, and stay compliant with data protection and domain-specific regulations.",
    stats: [
      { value: "5+", label: "Years building healthcare and wellness software" },
      { value: "20+", label: "Enterprise clients supported, including Fortune 500 healthcare brands" },
      { value: "SLA", label: "Backed delivery with a free warranty period on every build" },
    ],
    capabilities: [
      { title: "Patient engagement app development", description: "Portals and health-tracking apps that keep patients connected between visits." },
      { title: "Telemedicine software development", description: "Virtual care platforms with scheduling, video consultations, and e-prescriptions built in." },
      { title: "Clinic & pharmacy management software", description: "Operational software for clinics, pharmacies, and medical centers." },
      { title: "Healthcare interoperability engineering", description: "HL7/FHIR-compliant integrations that connect providers, labs, and payers." },
    ],
    solutions: [
      { label: "Health Tracking App Development" },
      { label: "Patient Portal Development" },
      { label: "Clinic & Pharmacy Software Development" },
      { label: "Telemedicine App Development" },
      { label: "EHR Integration Services" },
      { label: "Appointment Scheduling Software" },
    ],
    insight: {
      eyebrow: "Featured Insight",
      title: "Telemedicine adoption is up. Trust is the next hurdle.",
      blurb: "Starfii Technology on what it takes to design virtual care software that patients and clinicians both rely on.",
    },
  },

  insurance: {
    slug: "insurance",
    name: "Insurance",
    kicker: "INDUSTRY / INSURANCE",
    headline: "Insurance software development for a digital-first policyholder.",
    description:
      "Starfii Technology partners with insurers to build claims, underwriting, and policy servicing software - combining AI/ML automation and quality engineering to reduce manual work while improving the experience for every policyholder.",
    stats: [
      { value: "5+", label: "Years of enterprise and SaaS product engineering experience" },
      { value: "20+", label: "Successful partnerships with industry leaders" },
      { value: "100%", label: "Of engagements delivered on deadline and within budget" },
    ],
    capabilities: [
      { title: "Claims automation software", description: "AI-assisted claims intake, triage, and processing software that cuts turnaround time." },
      { title: "Underwriting platform development", description: "Rules-driven and predictive underwriting software that scales with volume." },
      { title: "Policy servicing portal development", description: "Self-service portals for renewals, endorsements, and policy management." },
      { title: "ServiceNow FSO implementation", description: "Insurance servicing workflows built on ServiceNow's Financial Services Operations suite." },
    ],
    solutions: [
      { label: "Claims Management Software Development" },
      { label: "Underwriting Platform Development" },
      { label: "Policy Servicing Portal Development" },
      { label: "Agent & Broker Tool Development" },
      { label: "AI Fraud Detection Models" },
      { label: "ServiceNow FSO Implementation Services" },
    ],
    insight: {
      eyebrow: "Featured Insight",
      title: "Reimagining insurance servicing software on ServiceNow FSO",
      blurb: "How Starfii Technology helps carriers consolidate claims and policy workflows onto a single operating layer.",
    },
  },

  "life-sciences": {
    slug: "life-sciences",
    name: "Life Sciences",
    kicker: "INDUSTRY / LIFE SCIENCES",
    headline: "Life sciences software development, from lab to launch.",
    description:
      "Starfii Technology builds software for pharmaceutical, biotech, and medical device organizations that keeps research, trials, and regulatory submissions moving - and fully auditable. Our data engineering and QA practices support GxP-aligned development.",
    stats: [
      { value: "5+", label: "Years of enterprise software development experience" },
      { value: "80+", label: "Engineers, data scientists, and QA specialists" },
      { value: "GxP", label: "Aligned development practices for regulated environments" },
    ],
    capabilities: [
      { title: "Clinical trial software development", description: "Data capture and trial management systems built for regulated environments." },
      { title: "Regulatory submission software", description: "Document and workflow systems that keep submissions organized and traceable." },
      { title: "Lab data engineering", description: "LIMS integrations and data pipelines that connect lab instruments to research data." },
      { title: "Pharmacovigilance software", description: "Adverse event tracking and reporting systems built for compliance." },
    ],
    solutions: [
      { label: "Clinical Trial Management Software" },
      { label: "Regulatory Document Platform Development" },
      { label: "LIMS Integration Services" },
      { label: "Pharmacovigilance Tool Development" },
      { label: "Research Data Pipeline Engineering" },
      { label: "Compliance Dashboard Development" },
    ],
    insight: {
      eyebrow: "Featured Insight",
      title: "Keeping clinical trial data audit-ready from day one",
      blurb: "Starfii Technology on why retrofitting compliance into clinical software costs more than building it in from the start.",
    },
  },

  manufacturing: {
    slug: "manufacturing",
    name: "Manufacturing",
    kicker: "INDUSTRY / MANUFACTURING",
    headline: "Manufacturing software development that connects the plant floor to the business.",
    description:
      "Starfii Technology helps manufacturers digitize production, supply chain, and quality systems - turning machine and process data into decisions the whole business can act on, using AI/ML, data engineering, and cloud engineering.",
    stats: [
      { value: "5+", label: "Years delivering enterprise product engineering" },
      { value: "20+", label: "Successful partnerships with industry leaders" },
      { value: "3", label: "Months to MVP for new manufacturing software" },
    ],
    capabilities: [
      { title: "MES & shop floor software development", description: "Manufacturing execution systems that connect machines, operators, and ERP." },
      { title: "Predictive maintenance software", description: "Sensor-driven AI/ML models that flag equipment issues before they cause downtime." },
      { title: "Quality management software", description: "Digital QMS platforms for inspections, non-conformance, and traceability." },
      { title: "Supply chain visibility software", description: "Real-time tracking across suppliers, inventory, and production schedules." },
    ],
    solutions: [
      { label: "Manufacturing Execution System (MES) Development" },
      { label: "Predictive Maintenance Software" },
      { label: "Quality Management System Development" },
      { label: "Supply Chain Dashboard Development" },
      { label: "IoT Sensor Integration Services" },
      { label: "Production Planning Software" },
    ],
    insight: {
      eyebrow: "Featured Insight",
      title: "How Gen AI makes supply chains decide faster",
      blurb: "Starfii Technology on how manufacturers use generative AI to compress planning cycles that used to take days.",
    },
  },

  "private-equity": {
    slug: "private-equity",
    name: "Private Equity",
    kicker: "INDUSTRY / PRIVATE EQUITY",
    headline: "Technology due diligence and value-creation engineering, on deal timelines.",
    description:
      "Starfii Technology supports PE firms and portfolio companies through technology diligence, carve-outs, and post-acquisition software transformation - a software development company built to move at deal speed and deliver MVPs in as little as 3 months.",
    stats: [
      { value: "5+", label: "Years of enterprise software and product engineering experience" },
      { value: "3", label: "Months to stand up an MVP or carve-out platform" },
      { value: "20+", label: "Portfolio and enterprise clients supported" },
    ],
    capabilities: [
      { title: "Technology due diligence", description: "Fast, rigorous assessments of target-company systems, architecture, and technical risk." },
      { title: "Carve-out platform engineering", description: "Stand up independent IT operations for divested entities on tight timelines." },
      { title: "Value creation roadmapping", description: "Technology roadmaps tied directly to the investment thesis." },
      { title: "Portfolio software standardization", description: "Shared platforms and tooling across portfolio companies to cut cost and risk." },
    ],
    solutions: [
      { label: "Technology Due Diligence Services" },
      { label: "Carve-Out IT Platform Development" },
      { label: "Value Creation Roadmap Consulting" },
      { label: "Portfolio Technology Standardization" },
      { label: "Post-Merger Integration Engineering" },
      { label: "Interim CTO & Technical Advisory Support" },
    ],
    insight: {
      eyebrow: "Featured Insight",
      title: "What technology diligence misses under deal-speed pressure",
      blurb: "Starfii Technology on the architecture and data risks that don't surface until 90 days after close.",
    },
  },

  "professional-services": {
    slug: "professional-services",
    name: "Professional Services",
    kicker: "INDUSTRY / PROFESSIONAL SERVICES",
    headline: "Custom software for firms that have outgrown spreadsheets.",
    description:
      "Starfii Technology builds practice management, resourcing, and client-delivery software for consulting, legal, and advisory firms - with AI-assisted knowledge management and reporting built in.",
    stats: [
      { value: "5+", label: "Years of custom software development experience" },
      { value: "80+", label: "Software engineers, designers, and QA specialists" },
      { value: "20+", label: "Professional services and enterprise firms supported" },
    ],
    capabilities: [
      { title: "Practice management software", description: "Time, billing, and engagement tracking built around how your firm actually works." },
      { title: "Resource & capacity planning software", description: "Staffing and capacity tools that match the right people to the right engagements." },
      { title: "Client portal development", description: "Secure, branded portals for document sharing and project visibility." },
      { title: "Knowledge management software", description: "AI-powered systems that make institutional knowledge searchable instead of siloed." },
    ],
    solutions: [
      { label: "Practice Management Software Development" },
      { label: "Resource & Capacity Planning Tools" },
      { label: "Client Delivery Portal Development" },
      { label: "Time & Billing Software Development" },
      { label: "Knowledge Management Software" },
      { label: "Proposal & Engagement Software Development" },
    ],
    insight: {
      eyebrow: "Featured Insight",
      title: "Agentic AI, proven across 100+ case studies",
      blurb: "Real results from firms using Starfii Technology's Gen AI and agentic AI engineering on delivery and internal operations.",
    },
  },

  "public-sector": {
    slug: "public-sector",
    name: "Public Sector",
    kicker: "INDUSTRY / PUBLIC SECTOR",
    headline: "Citizen service software that meets people where they are.",
    description:
      "Starfii Technology modernizes public-sector software - from citizen portals to case management systems - with the accessibility, security, and procurement realities of government software development in mind.",
    stats: [
      { value: "5+", label: "Years of enterprise software development experience" },
      { value: "WCAG", label: "Accessibility-compliant development by default" },
      { value: "3+", label: "Global delivery locations supporting public-sector clients" },
    ],
    capabilities: [
      { title: "Citizen service portal development", description: "Digital front doors for permits, applications, and public services." },
      { title: "Case management software", description: "Configurable case workflows for agencies handling high volumes of requests." },
      { title: "Data & records modernization", description: "Migrate legacy records systems without disrupting public-facing services." },
      { title: "Security & compliance engineering", description: "Software built to government security and accessibility standards from the start." },
    ],
    solutions: [
      { label: "Citizen Service Portal Development" },
      { label: "Case Management Software Development" },
      { label: "Records Modernization Services" },
      { label: "Permitting & Licensing Platform Development" },
      { label: "Grants Management Software" },
      { label: "Accessibility Compliance Audits" },
    ],
    insight: {
      eyebrow: "Featured Insight",
      title: "Modernizing citizen services software without the multi-year overhaul",
      blurb: "Starfii Technology on how agencies ship incremental software improvements instead of waiting on a single big-bang launch.",
    },
  },

  retail: {
    slug: "retail",
    name: "Retail",
    kicker: "INDUSTRY / E-COMMERCE & RETAIL",
    headline: "E-commerce software development built to handle real traffic.",
    description:
      "Starfii Technology builds e-commerce software with powerful admin panels, payment integrations, and real-time reporting - custom retail and marketplace software for businesses that have outgrown off-the-shelf platforms like Shopify or Magento.",
    stats: [
      { value: "5+", label: "Years building e-commerce and retail software" },
      { value: "80+", label: "Engineers, designers, and QA specialists on our teams" },
      { value: "3", label: "Months to MVP for new e-commerce and marketplace products" },
    ],
    capabilities: [
      { title: "Custom e-commerce storefront development", description: "E-commerce experiences with admin panels built around your catalog and operations." },
      { title: "Payment & checkout engineering", description: "Fast, reliable checkout with integrated payment gateways and fraud protection." },
      { title: "Inventory & fulfillment software", description: "Real-time inventory management and shipping automation across channels." },
      { title: "Loyalty & retention app development", description: "Programs and apps that keep customers coming back after the first purchase." },
    ],
    solutions: [
      { label: "E-Commerce Mobile App Development" },
      { label: "Marketplace Development" },
      { label: "Store Inventory Software Development" },
      { label: "Order Management Software" },
      { label: "Loyalty Program App Development" },
      { label: "Shipping Automation Software" },
    ],
    insight: {
      eyebrow: "Featured Insight",
      title: "What retailers get wrong migrating off legacy e-commerce platforms",
      blurb: "Starfii Technology on the traffic and data-migration mistakes that turn a routine replatform into a launch-day outage.",
    },
  },

  "technology-products-platforms": {
    slug: "technology-products-platforms",
    name: "Technology, Products & Platforms",
    kicker: "INDUSTRY / PRODUCT ENGINEERING",
    headline: "Extra product engineering capacity for software and SaaS teams.",
    description:
      "Starfii Technology works as an extension of product and engineering teams at software companies - shipping features, scaling infrastructure, and taking on roadmap work through embedded SaaS product engineering, cloud engineering, and DevOps & quality engineering.",
    stats: [
      { value: "80+", label: "Skilled software engineers driving innovation" },
      { value: "5+", label: "Years delivering SaaS and enterprise product engineering" },
      { value: "20+", label: "Successful partnerships, including Fortune 500 companies" },
    ],
    capabilities: [
      { title: "SaaS product engineering", description: "Embedded teams that ship features alongside your existing product org." },
      { title: "Platform & cloud engineering", description: "Architecture and infrastructure work to handle growth without a rewrite." },
      { title: "API & integration development", description: "Public APIs and partner integrations built for reliability at scale." },
      { title: "DevOps & quality engineering", description: "CI/CD, observability, and test automation for platforms that can't go down." },
    ],
    solutions: [
      { label: "Embedded Product Engineering Teams" },
      { label: "Platform Architecture & Cloud Engineering" },
      { label: "API Development Services" },
      { label: "DevOps & SRE Support" },
      { label: "Technical Due Diligence" },
      { label: "Legacy Software Modernization" },
    ],
    insight: {
      eyebrow: "Featured Insight",
      title: "Vibe coding in production: where it works, where it doesn't",
      blurb: "How Starfii Technology's product teams use AI-assisted software development without sacrificing code quality.",
    },
  },

  telecom: {
    slug: "telecom",
    name: "Telecom",
    kicker: "INDUSTRY / TELECOM",
    headline: "Network-grade software engineering for network-scale operators.",
    description:
      "Starfii Technology builds OSS/BSS, customer experience, and network operations software for telecom providers managing millions of subscribers - pairing data engineering and AI/ML with enterprise-grade cloud engineering.",
    stats: [
      { value: "5+", label: "Years of enterprise software engineering experience" },
      { value: "80+", label: "Engineers and specialists across global delivery locations" },
      { value: "99.9%", label: "Target system availability across delivered platforms" },
    ],
    capabilities: [
      { title: "OSS/BSS modernization", description: "Billing, provisioning, and operations support software built for scale." },
      { title: "Customer self-service app development", description: "Apps and portals that reduce call volume and improve subscriber satisfaction." },
      { title: "Network operations software", description: "Monitoring and incident management tools for network reliability teams." },
      { title: "5G & IoT platform engineering", description: "Software that supports new connectivity products and enterprise IoT offerings." },
    ],
    solutions: [
      { label: "OSS/BSS Software Development" },
      { label: "Subscriber Self-Service App Development" },
      { label: "Network Monitoring Dashboard Development" },
      { label: "Billing & Provisioning Software" },
      { label: "IoT Connectivity Platform Development" },
      { label: "Customer Care Tool Development" },
    ],
    insight: {
      eyebrow: "Featured Insight",
      title: "Telecom's quiet OSS/BSS modernization wave",
      blurb: "Starfii Technology on why operators are replacing decades-old billing software in phases instead of one migration.",
    },
  },

  "transportation-logistics": {
    slug: "transportation-logistics",
    name: "Transportation & Logistics",
    kicker: "INDUSTRY / TRANSPORTATION & LOGISTICS",
    headline: "Logistics software development for fast, easy access to transportation services.",
    description:
      "Starfii Technology builds scalable logistics and mobility software with intuitive interfaces and interactive maps that help transportation and logistics providers move goods and people more efficiently - a proven transportation software development company.",
    stats: [
      { value: "5+", label: "Years building transportation and logistics software" },
      { value: "20+", label: "Successful partnerships with logistics and mobility clients" },
      { value: "3", label: "Months to MVP for new logistics platforms" },
    ],
    capabilities: [
      { title: "Fleet & route optimization software", description: "Real-time routing and dispatch systems that cut fuel cost and delivery time." },
      { title: "Warehouse management software development", description: "WMS platforms that connect inventory, picking, and shipping operations." },
      { title: "Last-mile delivery app development", description: "Delivery and taxi apps with live tracking built for driver and customer experience." },
      { title: "Supply chain visibility software", description: "End-to-end shipment tracking across carriers and modes." },
    ],
    solutions: [
      { label: "Supply Chain Management Software Development" },
      { label: "Warehouse Management Software" },
      { label: "Delivery & Taxi App Development" },
      { label: "Vehicle Sharing & Rental App Development" },
      { label: "Route Optimization Engine Development" },
      { label: "Fleet Tracking Dashboard Development" },
    ],
    insight: {
      eyebrow: "Featured Insight",
      title: "How Gen AI makes supply chains decide faster",
      blurb: "Starfii Technology on how logistics teams cut planning cycles by putting generative AI in front of routing decisions.",
    },
  },

  "travel-hospitality": {
    slug: "travel-hospitality",
    name: "Travel & Hospitality",
    kicker: "INDUSTRY / TRAVEL & BOOKING",
    headline: "Travel and booking software engineered to convert searches into bookings.",
    description:
      "Starfii Technology builds booking engines, property management software, and trip-planning platforms that help travel and hospitality businesses grow direct bookings - a trusted travel software development company for agencies, OTAs, and hotel groups.",
    stats: [
      { value: "5+", label: "Years delivering travel and hospitality software" },
      { value: "80+", label: "Engineers and product specialists on our delivery teams" },
      { value: "3", label: "Months to MVP for new travel and booking products" },
    ],
    capabilities: [
      { title: "Booking engine development", description: "Fast, reliable booking flows integrated with your inventory and payment providers." },
      { title: "Property management software", description: "Systems for managing reservations, rates, and operations across properties." },
      { title: "Trip planning app development", description: "Itinerary and personalization features that turn browsing into booking." },
      { title: "Travel agency sales software", description: "Software that helps travel agencies manage sales pipelines and commissions." },
    ],
    solutions: [
      { label: "Travel Agency Portal Development" },
      { label: "Booking App Development" },
      { label: "Hotel Management Software Development" },
      { label: "Trip Planning Software Development" },
      { label: "Dynamic Pricing Engine Development" },
      { label: "Loyalty & Rewards Platform Development" },
    ],
    insight: {
      eyebrow: "Featured Insight",
      title: "Why direct bookings are becoming the priority again",
      blurb: "Starfii Technology on how travel brands invest back into owned booking software to reduce OTA dependency.",
    },
  },
};

export type IndustrySlug = keyof typeof industries;
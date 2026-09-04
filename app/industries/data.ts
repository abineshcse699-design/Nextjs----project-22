export type IndustryStat = {
  value: string;
  label: string;
};

export type IndustryCapability = {
  title: string;
  description: string;
};

export type IndustrySolution = {
  title: string;
  description: string;
};

export type IndustryFocusArea = {
  title: string;
  description: string;
};

export type IndustryImpactPoint = {
  label: string;
  body: string;
};

export type IndustryInsight = {
  tag: string;
  title: string;
  blurb: string;
};

export type IndustryFaq = {
  question: string;
  answer: string;
};

export type IndustryContent = {
  slug: string;
  name: string;
  kicker: string;
  headline: string;
  description: string;
  stats: IndustryStat[];
  keyTakeaway: string;
  highlight: {
    title: string;
    body: string;
  };
  focusAreas: IndustryFocusArea[];
  impactPoints: IndustryImpactPoint[];
  capabilities: IndustryCapability[];
  solutions: IndustrySolution[];
  techStack: string[];
  insights: IndustryInsight[];
  faqs: IndustryFaq[];
};

const baseStats = (industryNoun: string): IndustryStat[] => [
  { value: "5+", label: `Years delivering ${industryNoun} software` },
  { value: "80+", label: "Engineers, designers and QA on the bench" },
  { value: "3", label: "Delivery locations working across time zones" },
  { value: "20+", label: "Partnerships with industry-leading clients" },
];

export const industries: Record<string, IndustryContent> = {
  /* ============================================================
     E-COMMERCE & RETAIL
  ============================================================ */

  "ecommerce-retail": {
    slug: "ecommerce-retail",
    name: "E-commerce & Retail",
    kicker: "Industry Expertise / E-commerce & Retail",
    headline: "Engineering Commerce Experiences Built for Growth",
    description:
      "We engineer connected commerce ecosystems that unify customer experience, storefronts, payments, inventory, fulfillment, and analytics—helping retail and D2C businesses scale with greater speed, visibility, and control.",
    stats: baseStats("e-commerce"),
    keyTakeaway:
      "Starfii builds commerce platforms around the way your business actually operates, connecting digital experiences with the operational systems behind every transaction.",
    highlight: {
      title: "From Digital Storefront to Intelligent Commerce Engine",
      body:
        "Modern commerce is no longer defined by the storefront alone. High-performing brands need technology that connects customer experience with catalogue management, payments, inventory, fulfillment, and analytics. Starfii engineers these systems as one connected ecosystem, creating faster customer journeys while giving business teams stronger operational visibility.",
    },
    focusAreas: [
      {
        title: "Mobile Commerce Experiences",
        description:
          "Native and cross-platform shopping experiences designed around discovery, conversion, account management, and repeat purchase.",
      },
      {
        title: "Marketplace Platforms",
        description:
          "Multi-vendor commerce platforms with seller onboarding, catalogue governance, commissions, payments, and operational controls.",
      },
      {
        title: "Connected Inventory Management",
        description:
          "Real-time inventory visibility across stores, warehouses, marketplaces, and digital channels.",
      },
      {
        title: "Order & Fulfillment Operations",
        description:
          "Connected order workflows that coordinate checkout, routing, shipping, returns, refunds, and customer communication.",
      },
    ],
    impactPoints: [
      {
        label: "Higher Commerce Conversion",
        body:
          "Frictionless discovery and checkout experiences reduce unnecessary drop-off and create a clearer path from intent to purchase.",
      },
      {
        label: "Real-Time Inventory Confidence",
        body:
          "Connected stock visibility helps teams maintain accurate availability across storefronts, warehouses, and marketplace channels.",
      },
      {
        label: "Stronger Customer Retention",
        body:
          "Personalized experiences, loyalty capabilities, and connected account journeys create stronger reasons for customers to return.",
      },
      {
        label: "More Efficient Fulfillment",
        body:
          "Automated order routing and shipping workflows reduce manual intervention from purchase through dispatch.",
      },
      {
        label: "Decision-Ready Commerce Intelligence",
        body:
          "Connected reporting gives commercial and operational leaders a current view of sales, inventory, fulfillment, and customer behavior.",
      },
    ],
    capabilities: [
      {
        title: "Commerce Platform Engineering",
        description:
          "End-to-end storefront and commerce application development designed around your catalogue, customer journeys, and operating model.",
      },
      {
        title: "Payment & Checkout Integration",
        description:
          "Secure payment integrations and checkout workflows designed for reliability, flexibility, and a frictionless customer experience.",
      },
      {
        title: "Inventory & Catalogue Platforms",
        description:
          "Centralized systems for catalogue, pricing, availability, and inventory management across multiple sales channels.",
      },
      {
        title: "Fulfillment Automation",
        description:
          "Connected shipping, routing, tracking, returns, and order-management workflows that reduce operational overhead.",
      },
      {
        title: "Customer Loyalty Platforms",
        description:
          "Flexible loyalty, rewards, and personalization capabilities designed to increase engagement and customer lifetime value.",
      },
      {
        title: "Commerce Analytics",
        description:
          "Real-time dashboards and reporting that turn transaction, customer, and operational data into actionable intelligence.",
      },
    ],
    solutions: [
      {
        title: "Marketplace Commerce Platform",
        description:
          "A scalable multi-vendor ecosystem connecting sellers, customers, catalogue operations, commissions, payments, and fulfillment.",
      },
      {
        title: "Order Management Platform",
        description:
          "A connected order lifecycle platform spanning checkout, routing, fulfillment, returns, refunds, and operational reporting.",
      },
    ],
    techStack: [
      "React",
      "Node.js",
      "AWS",
      "MongoDB",
      "Postgres",
      "Cloudflare",
    ],
    insights: [
      {
        tag: "Guide",
        title: "Choosing the Right Architecture for Modern Commerce",
        blurb:
          "How storefronts, marketplaces, inventory, payments, and fulfillment should work together as a scalable commerce ecosystem.",
      },
      {
        tag: "Article",
        title: "Why Real-Time Inventory Is a Commerce Advantage",
        blurb:
          "How connected inventory architecture improves customer trust while reducing overselling and operational reconciliation.",
      },
      {
        tag: "Case Study",
        title: "Building a Commerce Platform Without Creating Operational Silos",
        blurb:
          "How a connected technology foundation can align customer experience with the systems responsible for fulfillment and growth.",
      },
    ],
    faqs: [
      {
        question:
          "Can Starfii build a custom commerce platform around our existing operations?",
        answer:
          "Yes. We engineer custom storefronts, administration, catalogue, payments, inventory, fulfillment, and integrations around your specific operating model.",
      },
      {
        question:
          "Can you integrate existing payment and logistics providers?",
        answer:
          "Yes. We integrate the payment gateways, shipping providers, ERP systems, marketplaces, and other services already supporting your business.",
      },
      {
        question:
          "Can Starfii build a multi-vendor marketplace?",
        answer:
          "Yes. We build marketplace platforms with seller onboarding, catalogue governance, commissions, payments, order management, and operational controls.",
      },
      {
        question:
          "Can mobile commerce be part of the same platform?",
        answer:
          "Yes. Mobile applications can share the same commerce, catalogue, inventory, customer, and order infrastructure as your web experience.",
      },
      {
        question:
          "How do you approach scalability for high-volume commerce?",
        answer:
          "We design the architecture around transaction volume, traffic patterns, integrations, reliability, observability, and the future growth requirements of the business.",
      },
    ],
  },

  /* ============================================================
     HEALTHCARE
  ============================================================ */

  healthcare: {
    slug: "healthcare",
    name: "Healthcare",
    kicker: "Industry Expertise / Healthcare",
    headline: "Connected Care, Designed Around People",
    description:
      "We build secure digital healthcare experiences that connect patients, providers, clinical workflows, and operational systems across the complete care journey.",
    stats: baseStats("healthcare"),
    keyTakeaway:
      "Starfii engineers patient-facing and clinical technology that reduces friction, improves access, and keeps critical healthcare information connected across the care ecosystem.",
    highlight: {
      title: "Reimagining the Digital Patient Journey",
      body:
        "Healthcare technology has to work for patients, providers, and operations simultaneously. Starfii builds connected platforms for patient engagement, telemedicine, health tracking, clinic operations, and secure communication—designed around the real workflows that shape modern care delivery.",
    },
    focusAreas: [
      {
        title: "Connected Health Applications",
        description:
          "Digital experiences for symptom, medication, and health tracking that help patients remain connected to their care journey.",
      },
      {
        title: "Patient Experience Platforms",
        description:
          "Secure portals for appointments, records, communication, and self-service interactions with care teams.",
      },
      {
        title: "Clinical & Practice Applications",
        description:
          "Purpose-built software for clinics, pharmacies, medical centers, and specialized healthcare workflows.",
      },
      {
        title: "Virtual Care Platforms",
        description:
          "Telemedicine experiences that connect scheduling, consultation, documentation, communication, and follow-up.",
      },
    ],
    impactPoints: [
      {
        label: "Stronger Patient Engagement",
        body:
          "Connected digital experiences help patients participate more actively in their care before, during, and after appointments.",
      },
      {
        label: "Lower Administrative Friction",
        body:
          "Self-service scheduling, records access, and communication reduce repetitive administrative work for healthcare teams.",
      },
      {
        label: "Expanded Access to Care",
        body:
          "Virtual consultation and remote-care capabilities extend healthcare access beyond traditional physical settings.",
      },
      {
        label: "Better Continuity of Care",
        body:
          "Connected patient information reduces gaps between digital experiences, providers, and operational systems.",
      },
      {
        label: "More Efficient Care Operations",
        body:
          "Purpose-built workflows help healthcare organizations reduce manual coordination and improve operational visibility.",
      },
    ],
    capabilities: [
      {
        title: "Patient Portal Engineering",
        description:
          "Secure patient experiences for appointments, records, prescriptions, messaging, and care-related interactions.",
      },
      {
        title: "Telemedicine Platform Development",
        description:
          "Virtual care platforms combining scheduling, consultations, clinical workflows, notes, and follow-up.",
      },
      {
        title: "Health Tracking Applications",
        description:
          "Patient-facing applications for structured health, symptom, vital, and medication tracking.",
      },
      {
        title: "Healthcare Operations Software",
        description:
          "Purpose-built applications supporting clinic, pharmacy, medical-center, and healthcare administration workflows.",
      },
      {
        title: "Healthcare Data Protection",
        description:
          "Security-conscious architecture designed around sensitive healthcare information and applicable regulatory requirements.",
      },
      {
        title: "Integration & Interoperability",
        description:
          "Connecting patient applications with the clinical and operational systems healthcare organizations already depend on.",
      },
    ],
    solutions: [
      {
        title: "Connected Telemedicine Platform",
        description:
          "A complete virtual-care experience spanning scheduling, consultation, clinical notes, communication, and follow-up.",
      },
      {
        title: "Patient Experience Platform",
        description:
          "A secure digital front door connecting appointments, records, communication, and self-service healthcare journeys.",
      },
    ],
    techStack: [
      "React",
      "Node.js",
      "AWS",
      "Azure",
      "MongoDB",
      "Postgres",
    ],
    insights: [
      {
        tag: "Guide",
        title: "Designing a Digital Patient Experience That Reduces Friction",
        blurb:
          "The technology and experience principles behind patient journeys that are easier to access, navigate, and complete.",
      },
      {
        tag: "Article",
        title: "Engineering Telemedicine for Reliability and Adoption",
        blurb:
          "Why scheduling, connectivity, clinical workflow, and follow-up matter as much as the video experience itself.",
      },
      {
        tag: "Case Study",
        title: "Connecting Patient-Generated Data With Clinical Workflows",
        blurb:
          "How structured health information can move from patient applications into workflows that providers already understand.",
      },
    ],
    faqs: [
      {
        question:
          "Can Starfii build software for sensitive healthcare information?",
        answer:
          "Yes. We design healthcare applications with security, privacy, data protection, integrations, and applicable domain requirements considered from the architecture stage.",
      },
      {
        question:
          "Can you develop a complete telemedicine platform?",
        answer:
          "Yes. We can engineer scheduling, virtual consultations, documentation, communication, follow-up, and supporting administrative workflows.",
      },
      {
        question:
          "Can healthcare software be tailored to our existing workflow?",
        answer:
          "Yes. We build around the operational requirements of clinics, pharmacies, medical centers, and specialized healthcare organizations rather than forcing generic workflows.",
      },
      {
        question:
          "Can patient-facing applications integrate with existing systems?",
        answer:
          "Yes. We design integration layers that keep patient-facing experiences connected with the systems already used by healthcare teams.",
      },
      {
        question:
          "Can you build health tracking applications?",
        answer:
          "Yes. We build structured experiences for tracking symptoms, vitals, medications, and other patient-generated information.",
      },
    ],
  },

  /* ============================================================
     ED-TECH & E-LEARNING
  ============================================================ */

  "edtech-elearning": {
    slug: "edtech-elearning",
    name: "Ed-tech & E-learning",
    kicker: "Industry Expertise / Ed-tech & E-learning",
    headline: "Technology That Turns Learning Into Opportunity",
    description:
      "We build scalable learning platforms that connect educators, learners, institutions, and employers through engaging digital experiences and intelligent learning workflows.",
    stats: baseStats("ed-tech"),
    keyTakeaway:
      "Starfii builds learning ecosystems that support course creation, learner engagement, assessments, certification, corporate training, and industry-aligned development.",
    highlight: {
      title: "From Learning Platform to Opportunity Engine",
      body:
        "The strongest learning platforms do more than host content. They create measurable pathways from learning to capability and opportunity. Starfii engineers platforms that bring educators, students, professionals, and organizations together through structured learning journeys, analytics, assessments, and scalable digital experiences.",
    },
    focusAreas: [
      {
        title: "Digital Learning Platforms",
        description:
          "Scalable environments for delivering structured courses, learning content, assignments, assessments, and learner experiences.",
      },
      {
        title: "Educator & Course Commerce",
        description:
          "Platforms that allow educators to create, manage, monetize, and continuously improve digital learning products.",
      },
      {
        title: "Enterprise Learning & Upskilling",
        description:
          "Corporate training workflows designed for onboarding, bulk enrollment, learning paths, reporting, and workforce development.",
      },
      {
        title: "Industry-Aligned Learning",
        description:
          "Learning experiences structured around practical skills, professional pathways, and measurable learner outcomes.",
      },
    ],
    impactPoints: [
      {
        label: "Higher Learner Engagement",
        body:
          "Thoughtful learning journeys, clear progression, and interactive experiences help learners stay engaged from enrollment to completion.",
      },
      {
        label: "Scalable Knowledge Delivery",
        body:
          "Digital learning infrastructure enables educators and organizations to deliver structured programs to growing audiences.",
      },
      {
        label: "Measurable Learning Outcomes",
        body:
          "Assessment and analytics capabilities make learner progress, completion, and performance more visible.",
      },
      {
        label: "Faster Workforce Development",
        body:
          "Corporate learning workflows help organizations onboard and upskill teams through repeatable digital programs.",
      },
      {
        label: "Stronger Educator Economics",
        body:
          "Course creation, commerce, analytics, and learner management give educators stronger foundations for building sustainable digital offerings.",
      },
    ],
    capabilities: [
      {
        title: "Learning Platform Engineering",
        description:
          "End-to-end learning environments for content delivery, enrollment, learner management, and progress tracking.",
      },
      {
        title: "Course Creation & Commerce",
        description:
          "Tools that enable educators to create, structure, price, publish, and manage digital learning products.",
      },
      {
        title: "Enterprise Training Platforms",
        description:
          "Bulk enrollment, role management, learning paths, reporting, and workforce training workflows for organizations.",
      },
      {
        title: "Assessment & Certification",
        description:
          "Quizzes, assignments, evaluations, completion tracking, and certificate issuance integrated into learning journeys.",
      },
      {
        title: "Learning Analytics",
        description:
          "Engagement, completion, learner progress, and performance analytics for educators, institutions, and organizations.",
      },
      {
        title: "Industry Learning Pathways",
        description:
          "Structured learning journeys aligned with practical skills, professional development, and industry requirements.",
      },
    ],
    solutions: [
      {
        title: "Educator Learning Commerce Platform",
        description:
          "A complete platform for course creation, publishing, payments, learner management, and performance analytics.",
      },
      {
        title: "Enterprise Learning & Upskilling Suite",
        description:
          "A scalable corporate learning environment for bulk training, role-based access, learning paths, and reporting.",
      },
    ],
    techStack: [
      "React",
      "Node.js",
      "AWS",
      "MongoDB",
      "Postgres",
      "OpenAI",
    ],
    insights: [
      {
        tag: "Guide",
        title: "Designing One Learning Platform for Multiple Audiences",
        blurb:
          "How educators, students, professionals, and enterprise teams can share infrastructure while retaining purpose-built experiences.",
      },
      {
        tag: "Article",
        title: "What Makes Enterprise Learning Scalable",
        blurb:
          "The platform capabilities that matter when learning expands from individual users to large organizational programs.",
      },
      {
        tag: "Case Study",
        title: "Turning Educational Expertise Into a Digital Product",
        blurb:
          "The technology foundation required to transform course knowledge into a scalable, measurable learning experience.",
      },
    ],
    faqs: [
      {
        question:
          "Can Starfii build a learning platform from the ground up?",
        answer:
          "Yes. We build learning platforms covering content, enrollment, assessments, certification, analytics, payments, and learner management.",
      },
      {
        question:
          "Can educators monetize their own courses?",
        answer:
          "Yes. We can build course creation, pricing, payment, publishing, learner management, and analytics capabilities for educators.",
      },
      {
        question:
          "Can the same platform support corporate training?",
        answer:
          "Yes. Enterprise workflows can include bulk enrollment, role-based access, learning paths, progress tracking, and reporting.",
      },
      {
        question:
          "Can learning paths be aligned with industry skills?",
        answer:
          "Yes. Learning experiences can be structured around specific skills, roles, competencies, and professional development objectives.",
      },
      {
        question:
          "Can AI capabilities be integrated into an e-learning product?",
        answer:
          "Yes. AI capabilities can be integrated where they create meaningful value, such as content assistance, learner support, personalization, or analytics.",
      },
    ],
  },

  /* ============================================================
     FINANCE
  ============================================================ */

  finance: {
    slug: "finance",
    name: "Finance",
    kicker: "Industry Expertise / Finance",
    headline: "Financial Infrastructure Built for Trust and Scale",
    description:
      "We engineer secure financial products that simplify complex experiences across digital banking, fintech, wallets, personal finance, and financial operations.",
    stats: baseStats("finance"),
    keyTakeaway:
      "Starfii builds financial platforms around security, modularity, scalability, and customer experience—creating technology foundations that can evolve as financial products grow.",
    highlight: {
      title: "Built for Trust. Designed for Scale.",
      body:
        "Financial technology operates where customer trust, security, regulatory expectations, operational complexity, and product innovation meet. Starfii engineers modular financial systems that can support digital banking, wallets, personal finance, leasing, and future product expansion without creating unnecessary architectural constraints.",
    },
    focusAreas: [
      {
        title: "Digital Banking & Neobanking",
        description:
          "Digital-first banking experiences supporting accounts, onboarding, transactions, payments, and customer engagement.",
      },
      {
        title: "Personal Finance Experiences",
        description:
          "Financial management applications that bring budgeting, tracking, planning, and financial visibility into one experience.",
      },
      {
        title: "Digital Wallet Infrastructure",
        description:
          "Secure wallet capabilities for storing, transferring, and managing digital funds.",
      },
      {
        title: "Leasing & Asset Finance",
        description:
          "Connected platforms for agreements, payment schedules, asset tracking, and financial administration.",
      },
    ],
    impactPoints: [
      {
        label: "Security by Architecture",
        body:
          "Financial platforms are designed with isolation, access controls, data protection, and secure service boundaries from the beginning.",
      },
      {
        label: "Compliance-Aware Engineering",
        body:
          "Regulatory and data-protection considerations are incorporated into product and architecture decisions rather than treated as late-stage additions.",
      },
      {
        label: "Independent Product Evolution",
        body:
          "Modular services allow financial products to introduce new capabilities without forcing unnecessary changes across the entire platform.",
      },
      {
        label: "Scalable Transaction Infrastructure",
        body:
          "Architecture is designed around transaction volume, reliability, performance, and future growth requirements.",
      },
      {
        label: "Frictionless Financial Experiences",
        body:
          "Clear digital journeys simplify banking, payments, financial management, and other high-value customer interactions.",
      },
    ],
    capabilities: [
      {
        title: "Digital Banking Platform Engineering",
        description:
          "Digital banking and neobank experiences covering accounts, onboarding, payments, and customer workflows.",
      },
      {
        title: "Digital Wallet Development",
        description:
          "Secure wallet infrastructure for storing, sending, receiving, and managing funds.",
      },
      {
        title: "Personal Finance Applications",
        description:
          "Financial management products designed around real customer behaviors and financial goals.",
      },
      {
        title: "Leasing & Asset Management",
        description:
          "End-to-end systems for agreements, payments, schedules, assets, and operational administration.",
      },
      {
        title: "Modular Financial Architecture",
        description:
          "Service-oriented architecture designed for independent scaling, controlled change, and long-term product evolution.",
      },
      {
        title: "Security & Compliance Engineering",
        description:
          "Security-conscious engineering that incorporates data protection and regulatory considerations into the platform foundation.",
      },
    ],
    solutions: [
      {
        title: "Digital Banking Platform",
        description:
          "A modular digital banking foundation connecting onboarding, accounts, payments, customer journeys, and operational workflows.",
      },
      {
        title: "Digital Wallet Platform",
        description:
          "A secure wallet ecosystem designed for account management, transactions, transfers, and scalable product expansion.",
      },
    ],
    techStack: [
      "Node.js",
      "React",
      "AWS",
      "Postgres",
      "MongoDB",
      "Cloudflare",
    ],
    insights: [
      {
        tag: "Guide",
        title: "Architecting Financial Software for Long-Term Change",
        blurb:
          "Why modular architecture, secure boundaries, and disciplined service design matter when financial products need to evolve continuously.",
      },
      {
        tag: "Article",
        title: "Building Compliance Into the Product Architecture",
        blurb:
          "How security, regulatory requirements, and data protection can become foundational design inputs instead of late-stage constraints.",
      },
      {
        tag: "Case Study",
        title: "Scaling Digital Wallet Infrastructure Without a Rewrite",
        blurb:
          "How modular financial architecture can support new capabilities while protecting existing transaction flows.",
      },
    ],
    faqs: [
      {
        question:
          "Can Starfii build a digital banking or neobank platform?",
        answer:
          "Yes. We can engineer digital banking experiences covering onboarding, accounts, payments, customer journeys, and supporting operational workflows.",
      },
      {
        question:
          "Can you develop an e-wallet from scratch?",
        answer:
          "Yes. We build wallet platforms around secure account, transaction, transfer, and product-management requirements.",
      },
      {
        question:
          "How do you approach financial software security?",
        answer:
          "Security is considered throughout architecture, service boundaries, access controls, data protection, integrations, and deployment practices.",
      },
      {
        question:
          "Can financial platforms scale as transaction volume grows?",
        answer:
          "Yes. We design infrastructure and service boundaries around expected transaction volumes, performance requirements, reliability, and future expansion.",
      },
      {
        question:
          "Can you build leasing and asset-management software?",
        answer:
          "Yes. We build platforms for agreements, payment schedules, asset tracking, workflows, and operational reporting.",
      },
    ],
  },

  /* ============================================================
     TRANSPORTATION & LOGISTICS
  ============================================================ */

  "transportation-logistics": {
    slug: "transportation-logistics",
    name: "Transportation & Logistics",
    kicker: "Industry Expertise / Transportation & Logistics",
    headline: "Real-Time Intelligence for a Moving World",
    description:
      "We build connected transportation and logistics platforms that bring movement, inventory, fleet activity, routing, and delivery operations into one operational view.",
    stats: baseStats("logistics"),
    keyTakeaway:
      "Starfii connects supply chain, warehouse, fleet, delivery, and vehicle-sharing workflows through scalable systems designed for visibility and operational speed.",
    highlight: {
      title: "Turning Logistics Complexity Into Operational Intelligence",
      body:
        "Transportation and logistics organizations operate across constantly changing conditions. The ability to understand where a shipment, vehicle, driver, or inventory unit is—and what needs to happen next—creates a significant operational advantage. Starfii engineers connected systems that bring those signals together in real time.",
    },
    focusAreas: [
      {
        title: "Supply Chain Visibility",
        description:
          "Connected workflows that provide visibility across sourcing, transportation, warehousing, fulfillment, and delivery.",
      },
      {
        title: "Warehouse Management",
        description:
          "Real-time systems for inventory movement, staging, picking, dispatch, and warehouse coordination.",
      },
      {
        title: "Fleet & Delivery Platforms",
        description:
          "Driver, vehicle, dispatch, route, and delivery applications designed for real-world operational environments.",
      },
      {
        title: "Connected Mobility Experiences",
        description:
          "Map-driven transportation products that coordinate riders, vehicles, drivers, availability, and journeys.",
      },
    ],
    impactPoints: [
      {
        label: "Real-Time Operational Visibility",
        body:
          "Live movement and operational data gives teams a clearer view of shipments, vehicles, inventory, and delivery activity.",
      },
      {
        label: "Faster Dispatch Decisions",
        body:
          "Connected location and operational data helps teams coordinate drivers, vehicles, and resources more efficiently.",
      },
      {
        label: "Improved Delivery Performance",
        body:
          "Better routing, tracking, and exception visibility help reduce delays and improve delivery coordination.",
      },
      {
        label: "Higher Warehouse Control",
        body:
          "Connected inventory and warehouse workflows reduce manual reconciliation and improve fulfillment accuracy.",
      },
      {
        label: "Better Customer Visibility",
        body:
          "Customer-facing tracking and communication provide greater transparency throughout the movement lifecycle.",
      },
    ],
    capabilities: [
      {
        title: "Supply Chain Platform Development",
        description:
          "Connected software for planning, tracking, coordination, and visibility across logistics operations.",
      },
      {
        title: "Warehouse Management Systems",
        description:
          "Real-time inventory and warehouse workflows for receiving, staging, fulfillment, and dispatch.",
      },
      {
        title: "Fleet & Driver Applications",
        description:
          "Operational applications for dispatch, driver workflows, vehicle activity, and live movement.",
      },
      {
        title: "Delivery & Mobility Platforms",
        description:
          "Customer and operator applications with tracking, dispatch, routing, and journey management.",
      },
      {
        title: "Interactive Mapping & Tracking",
        description:
          "Map-driven interfaces that make locations, movement, routes, and operational status easier to understand.",
      },
      {
        title: "Logistics Analytics",
        description:
          "Operational dashboards connecting movement, delivery, inventory, fleet, and performance data.",
      },
    ],
    solutions: [
      {
        title: "Connected Logistics Control Platform",
        description:
          "A unified operational layer connecting shipments, inventory, fleet activity, dispatch, and delivery workflows.",
      },
      {
        title: "Fleet & Delivery Management Platform",
        description:
          "A connected system for dispatch, driver operations, route visibility, delivery tracking, and customer communication.",
      },
    ],
    techStack: [
      "React",
      "Node.js",
      "AWS",
      "MongoDB",
      "Postgres",
      "Google Maps",
    ],
    insights: [
      {
        tag: "Guide",
        title: "Designing Logistics Systems Around Real-Time Visibility",
        blurb:
          "The architecture patterns that help logistics teams move from fragmented operational data to one connected view.",
      },
      {
        tag: "Article",
        title: "Why Map-Driven Interfaces Matter in Transportation Technology",
        blurb:
          "How location context can turn complex movement data into decisions teams can act on quickly.",
      },
      {
        tag: "Case Study",
        title: "Connecting Warehouse, Fleet, and Delivery Operations",
        blurb:
          "How a connected operational layer can reduce handoffs and improve visibility from inventory to final delivery.",
      },
    ],
    faqs: [
      {
        question:
          "Can Starfii build a custom logistics management platform?",
        answer:
          "Yes. We build connected logistics systems covering supply chain, warehouse, fleet, dispatch, delivery, tracking, and reporting workflows.",
      },
      {
        question:
          "Can your platforms provide real-time vehicle or shipment tracking?",
        answer:
          "Yes. Tracking capabilities can connect location data with operational workflows and customer-facing experiences.",
      },
      {
        question:
          "Can warehouse management be connected with delivery operations?",
        answer:
          "Yes. We can design integrations that connect warehouse inventory and fulfillment activity with dispatch and delivery workflows.",
      },
      {
        question:
          "Can you build driver and customer mobile applications?",
        answer:
          "Yes. We build role-specific mobile experiences that share the same backend and operational data.",
      },
      {
        question:
          "Can existing logistics systems be integrated?",
        answer:
          "Yes. We design integration layers around the systems, APIs, mapping services, and operational tools already used by your organization.",
      },
    ],
  },

  /* ============================================================
     TRAVEL & BOOKING
  ============================================================ */

  "travel-booking": {
    slug: "travel-booking",
    name: "Travel & Booking",
    kicker: "Industry Expertise / Travel & Booking",
    headline: "Frictionless Technology for Modern Travel",
    description:
      "We build connected travel platforms that simplify discovery, booking, operations, trip management, and guest experiences across the travel lifecycle.",
    stats: baseStats("travel"),
    keyTakeaway:
      "Starfii connects travelers, agencies, properties, inventory, pricing, payments, and trip information through scalable digital travel experiences.",
    highlight: {
      title: "From Search to Stay: Engineering Frictionless Journeys",
      body:
        "Travel customers expect speed, clarity, and continuity from the first search to the final experience. Starfii engineers connected booking ecosystems that bring traveler journeys, agency workflows, availability, pricing, reservations, and operational data together.",
    },
    focusAreas: [
      {
        title: "Travel Agency Platforms",
        description:
          "Back-office experiences for managing bookings, pricing, clients, commissions, and travel operations.",
      },
      {
        title: "Booking Experiences",
        description:
          "Traveler-facing applications for discovery, comparison, booking, payments, and trip management.",
      },
      {
        title: "Hospitality Management",
        description:
          "Property platforms connecting reservations, room inventory, guest information, and operational workflows.",
      },
      {
        title: "Connected Trip Planning",
        description:
          "Itinerary experiences that bring reservations, activities, schedules, and trip information into one journey.",
      },
    ],
    impactPoints: [
      {
        label: "Higher Booking Conversion",
        body:
          "Fast, clear search and booking journeys reduce friction between travel intent and confirmed reservations.",
      },
      {
        label: "Consistent Pricing & Availability",
        body:
          "Shared data foundations help agencies and travelers work from the same current inventory and pricing information.",
      },
      {
        label: "Stronger Agency Productivity",
        body:
          "Connected agency workflows reduce manual coordination across bookings, clients, commissions, and travel operations.",
      },
      {
        label: "Better Guest Operations",
        body:
          "Unified reservation and guest information gives hospitality teams greater control across the guest lifecycle.",
      },
      {
        label: "More Connected Journeys",
        body:
          "Integrated itinerary experiences give travelers one clear view of bookings, activities, and trip details.",
      },
    ],
    capabilities: [
      {
        title: "Travel Agency Platform Development",
        description:
          "Back-office systems for booking management, pricing, client relationships, commissions, and operations.",
      },
      {
        title: "Booking Application Development",
        description:
          "Traveler-facing applications for search, comparison, reservation, payment, and trip management.",
      },
      {
        title: "Hotel Management Systems",
        description:
          "Reservation, room inventory, guest, and property-management workflows designed around hospitality operations.",
      },
      {
        title: "Trip Planning Platforms",
        description:
          "Digital itinerary experiences that consolidate bookings, activities, schedules, and travel information.",
      },
      {
        title: "Payments & Commission Management",
        description:
          "Integrated payment and commission workflows supporting agency-led and direct travel transactions.",
      },
      {
        title: "Search & Availability Architecture",
        description:
          "Fast search and synchronized availability across inventory sources, booking channels, and traveler experiences.",
      },
    ],
    solutions: [
      {
        title: "Connected Travel Booking Platform",
        description:
          "A unified travel ecosystem connecting search, inventory, booking, pricing, payments, and customer experiences.",
      },
      {
        title: "Hospitality Management Platform",
        description:
          "A connected property platform spanning reservations, room inventory, guest management, and operational visibility.",
      },
    ],
    techStack: [
      "React",
      "Node.js",
      "AWS",
      "Postgres",
      "MongoDB",
      "Android",
    ],
    insights: [
      {
        tag: "Guide",
        title: "Keeping Travel Pricing and Availability Consistent",
        blurb:
          "How shared data and integration architecture create more reliable experiences across agency and traveler-facing channels.",
      },
      {
        tag: "Article",
        title: "Designing a Faster Search-to-Booking Journey",
        blurb:
          "The experience and backend decisions that reduce unnecessary friction between travel discovery and confirmation.",
      },
      {
        tag: "Case Study",
        title: "Creating One Connected Travel Itinerary",
        blurb:
          "How combining bookings and activities can create a clearer, more useful experience throughout the journey.",
      },
    ],
    faqs: [
      {
        question:
          "Can Starfii build a booking platform for our travel business?",
        answer:
          "Yes. We build traveler-facing booking applications and connected backend systems for search, availability, reservations, payments, and trip management.",
      },
      {
        question:
          "Can you build an agency back-office platform?",
        answer:
          "Yes. We build agency systems for bookings, pricing, commissions, customer management, and operational workflows.",
      },
      {
        question:
          "Can you develop hotel management software?",
        answer:
          "Yes. We build systems covering reservations, room inventory, guest management, and hospitality operations.",
      },
      {
        question:
          "How do you keep pricing and availability synchronized?",
        answer:
          "We design shared data and integration layers so multiple experiences can work from consistent inventory and pricing sources.",
      },
      {
        question:
          "Can trip planning be integrated with booking?",
        answer:
          "Yes. We can connect reservations, activities, schedules, and itinerary information into one digital travel experience.",
      },
    ],
  },

  /* ============================================================
     CONSUMER GOODS
  ============================================================ */

  "consumer-goods": {
    slug: "consumer-goods",
    name: "Consumer Goods",
    kicker: "Industry Expertise / Consumer Goods",
    headline: "Connecting Demand, Supply and Consumer Growth",
    description:
      "We build connected consumer goods technology that brings demand planning, trade promotion, distribution, retail execution, and direct-to-consumer experiences together.",
    stats: baseStats("consumer goods"),
    keyTakeaway:
      "Starfii helps CPG organizations connect commercial and operational data so teams can plan demand more effectively, manage channels with greater confidence, and respond faster to changing consumer behavior.",
    highlight: {
      title: "From Market Signals to Measurable Growth",
      body:
        "Consumer goods organizations make decisions across demand, supply, promotions, distribution, retail execution, and consumer engagement. When those systems operate independently, valuable signals become fragmented. Starfii builds connected platforms that turn commercial and operational data into a clearer foundation for decision-making.",
    },
    focusAreas: [
      {
        title: "Demand Planning & Forecasting",
        description:
          "Forecasting platforms that bring historical sales, seasonality, promotions, and commercial signals together.",
      },
      {
        title: "Trade Promotion Management",
        description:
          "Technology for planning, executing, monitoring, and evaluating promotional investment across channels.",
      },
      {
        title: "Direct-to-Consumer Commerce",
        description:
          "Digital storefronts and customer experiences that extend brands directly into consumer relationships.",
      },
      {
        title: "Retail Execution & Field Sales",
        description:
          "Mobile and operational tools for store visits, shelf execution, order capture, and field visibility.",
      },
    ],
    impactPoints: [
      {
        label: "More Confident Demand Planning",
        body:
          "Connected sales, promotion, and market data gives planning teams a stronger foundation for forecasting and inventory decisions.",
      },
      {
        label: "More Measurable Trade Investment",
        body:
          "Promotion management capabilities make commercial investment easier to track, evaluate, and optimize.",
      },
      {
        label: "Stronger Channel Visibility",
        body:
          "Connected distributor, retail, and direct channels provide a clearer view of demand and commercial performance.",
      },
      {
        label: "Faster Field Execution",
        body:
          "Mobile field tools help teams capture store-level information and act on operational signals faster.",
      },
      {
        label: "Direct Consumer Relationships",
        body:
          "DTC platforms give brands greater ownership of customer experiences, data, and digital engagement.",
      },
    ],
    capabilities: [
      {
        title: "Demand Planning Platforms",
        description:
          "Forecasting technology combining historical, seasonal, promotional, and commercial data.",
      },
      {
        title: "Trade Promotion Management",
        description:
          "Planning and measurement tools for managing promotional programs and commercial investment.",
      },
      {
        title: "DTC Commerce Platforms",
        description:
          "Direct-to-consumer storefronts and applications designed to complement retail and distributor channels.",
      },
      {
        title: "Distributor Portals",
        description:
          "Self-service ordering, account management, product information, and partner workflows for distribution networks.",
      },
      {
        title: "Field Sales Applications",
        description:
          "Mobile tools for field teams covering store visits, retail execution, audits, and order capture.",
      },
      {
        title: "Consumer & Supply Chain Analytics",
        description:
          "Dashboards that connect demand, inventory, sales, distribution, and consumer performance data.",
      },
    ],
    solutions: [
      {
        title: "Connected Demand Planning Suite",
        description:
          "A forecasting environment that brings sales history, promotions, seasonality, and commercial signals into one planning workflow.",
      },
      {
        title: "DTC Commerce Platform",
        description:
          "A direct-to-consumer digital channel designed to operate alongside existing retail and distribution ecosystems.",
      },
    ],
    techStack: [
      "React",
      "Node.js",
      "AWS",
      "Postgres",
      "MongoDB",
      "Power BI",
    ],
    insights: [
      {
        tag: "Guide",
        title: "Building a More Connected Demand Planning Environment",
        blurb:
          "How better-connected commercial data can improve forecasting confidence and planning visibility.",
      },
      {
        tag: "Article",
        title: "Measuring Trade Promotion Beyond Spend",
        blurb:
          "The data and workflow considerations that help teams understand the commercial value created by promotions.",
      },
      {
        tag: "Case Study",
        title: "Launching DTC Without Fragmenting Existing Channels",
        blurb:
          "How brands can create direct digital relationships while maintaining alignment with retail and distribution partners.",
      },
    ],
    faqs: [
      {
        question:
          "Can Starfii build demand planning software for a CPG organization?",
        answer:
          "Yes. We build planning platforms that connect historical sales, seasonality, promotional activity, and other business signals.",
      },
      {
        question:
          "Can you build a DTC platform alongside our existing channels?",
        answer:
          "Yes. We can engineer direct-to-consumer experiences designed to coexist with retail and distributor operations.",
      },
      {
        question:
          "Can trade promotion management be integrated into the platform?",
        answer:
          "Yes. Promotion planning, execution, measurement, and reporting can be incorporated into a connected commercial workflow.",
      },
      {
        question:
          "Can field sales teams use mobile applications?",
        answer:
          "Yes. We build mobile experiences for store visits, audits, order capture, and field reporting.",
      },
      {
        question:
          "Can distributor ordering be digitized?",
        answer:
          "Yes. We build self-service distributor portals for ordering, account management, product information, and partner workflows.",
      },
    ],
  },

  /* ============================================================
     EDUCATION & INSTITUTIONS
  ============================================================ */

  "education-institutions": {
    slug: "education-institutions",
    name: "Education & Institutions",
    kicker: "Industry Expertise / Education & Institutions",
    headline: "Digital Infrastructure for Institutions of Tomorrow",
    description:
      "We modernize institutional technology through connected student, academic, admissions, and campus platforms that improve experiences while simplifying administration.",
    stats: baseStats("education"),
    keyTakeaway:
      "Starfii connects the systems behind admissions, enrollment, academics, student services, and campus operations to create a more coherent digital institution.",
    highlight: {
      title: "From Fragmented Administration to a Connected Student Experience",
      body:
        "Students and staff experience institutions through dozens of digital touchpoints. When those systems operate independently, information becomes fragmented and administrative work increases. Starfii engineers connected platforms that bring student information, admissions, learning, communication, and campus operations into a more coherent digital environment.",
    },
    focusAreas: [
      {
        title: "Student Information Systems",
        description:
          "Centralized student records covering enrollment, academic history, attendance, grades, and institutional interactions.",
      },
      {
        title: "Learning Management Platforms",
        description:
          "Digital environments for course delivery, assignments, grading, communication, and academic engagement.",
      },
      {
        title: "Admissions & Enrollment",
        description:
          "Structured digital journeys for applications, reviews, decisions, enrollment, and prospective-student communication.",
      },
      {
        title: "Campus Operations",
        description:
          "Technology supporting scheduling, facilities, administration, communication, and everyday institutional operations.",
      },
    ],
    impactPoints: [
      {
        label: "Unified Student Information",
        body:
          "Connected records reduce fragmentation across departments and create a more reliable institutional view of each student.",
      },
      {
        label: "More Efficient Admissions",
        body:
          "Structured application and review workflows reduce manual coordination and improve visibility throughout the admissions journey.",
      },
      {
        label: "Stronger Digital Learning",
        body:
          "Learning platforms designed around institutional workflows create more consistent experiences for students and educators.",
      },
      {
        label: "Simplified Campus Operations",
        body:
          "Connected scheduling and administrative systems reduce repetitive coordination and improve operational visibility.",
      },
      {
        label: "Decision-Ready Institutional Data",
        body:
          "Connected reporting across enrollment, academics, and operations gives leadership a clearer basis for planning.",
      },
    ],
    capabilities: [
      {
        title: "Student Information System Development",
        description:
          "Centralized platforms for enrollment, academic records, attendance, student history, and institutional workflows.",
      },
      {
        title: "Learning Management Platforms",
        description:
          "Scalable course, assignment, grading, communication, and learner-management capabilities.",
      },
      {
        title: "Admissions Platform Engineering",
        description:
          "Digital application, review, decision, communication, and enrollment workflows for institutions.",
      },
      {
        title: "Enrollment Management",
        description:
          "Registration, scheduling, enrollment tracking, and student administration capabilities.",
      },
      {
        title: "Campus Operations Software",
        description:
          "Digital systems for facilities, scheduling, communication, administrative workflows, and campus services.",
      },
      {
        title: "Institutional Analytics",
        description:
          "Reporting environments that connect academic, enrollment, operational, and student experience data.",
      },
    ],
    solutions: [
      {
        title: "Connected Student Lifecycle Platform",
        description:
          "A unified digital environment connecting admissions, enrollment, student records, communication, and academic services.",
      },
      {
        title: "Digital Campus Operations Platform",
        description:
          "Connected administrative and operational workflows designed to make institutional services more efficient and accessible.",
      },
    ],
    techStack: [
      "React",
      "Node.js",
      "AWS",
      "Postgres",
      "MongoDB",
      "Auth0",
    ],
    insights: [
      {
        tag: "Guide",
        title: "Designing a Digital Campus Around the Student Lifecycle",
        blurb:
          "How institutions can connect admissions, enrollment, learning, services, and communication into a coherent digital experience.",
      },
      {
        tag: "Article",
        title: "Modernizing Institutional Systems Without Creating More Silos",
        blurb:
          "The architecture principles that help education organizations connect existing platforms while improving the user experience.",
      },
      {
        tag: "Case Study",
        title: "Creating a More Connected Student Information Environment",
        blurb:
          "How unified student data and workflow automation can improve both administrative efficiency and student experience.",
      },
    ],
    faqs: [
      {
        question:
          "Can Starfii build a student information system?",
        answer:
          "Yes. We build centralized student platforms covering enrollment, academic information, attendance, records, and institutional workflows.",
      },
      {
        question:
          "Can you modernize an existing learning management environment?",
        answer:
          "Yes. We can build new learning capabilities or integrate and modernize existing academic technology.",
      },
      {
        question:
          "Can admissions and enrollment be connected?",
        answer:
          "Yes. We can design a connected digital journey from application and review through enrollment and ongoing student administration.",
      },
      {
        question:
          "Can institutional systems integrate with existing software?",
        answer:
          "Yes. Integration and interoperability can be designed around the systems, APIs, identity providers, and data sources already in use.",
      },
      {
        question:
          "Can you build dashboards for institutional leadership?",
        answer:
          "Yes. We can create dashboards connecting enrollment, academic, operational, and student data for decision-making.",
      },
    ],
  },

  /* ============================================================
     FINANCIAL SERVICES
  ============================================================ */

  "financial-services": {
    slug: "financial-services",
    name: "Financial Services",
    kicker: "Industry Expertise / Financial Services",
    headline: "Intelligence and Control Across the Financial Lifecycle",
    description:
      "We build connected financial platforms that transform fragmented data into decision-ready intelligence across wealth management, investment operations, advisory, and client services.",
    stats: baseStats("financial services"),
    keyTakeaway:
      "Starfii connects financial data, operational workflows, client experiences, reporting, and decision-support systems into scalable digital platforms.",
    highlight: {
      title: "From Fragmented Financial Data to Decision-Ready Intelligence",
      body:
        "Financial organizations need more than dashboards. They need reliable systems that connect client information, portfolios, transactions, reporting, market data, and operational workflows. Starfii engineers financial platforms around that requirement, helping teams move from fragmented information toward stronger visibility and control.",
    },
    focusAreas: [
      {
        title: "Wealth Management Platforms",
        description:
          "Digital environments for portfolio visibility, account management, reporting, advisor workflows, and client engagement.",
      },
      {
        title: "Investment Operations",
        description:
          "Technology supporting portfolio operations, market information, order workflows, and financial reporting.",
      },
      {
        title: "Client Experience Platforms",
        description:
          "Secure digital portals that give clients access to financial information, documents, reporting, and communication.",
      },
      {
        title: "Financial Data Intelligence",
        description:
          "Connected data environments that transform operational and financial information into actionable intelligence.",
      },
    ],
    impactPoints: [
      {
        label: "Greater Financial Visibility",
        body:
          "Connected financial data creates a clearer view of portfolios, clients, operations, and performance.",
      },
      {
        label: "Faster Decision Support",
        body:
          "Structured information and reporting help financial teams move from manual data gathering toward faster decisions.",
      },
      {
        label: "Stronger Client Experiences",
        body:
          "Self-service portals and connected digital experiences give clients easier access to the information they need.",
      },
      {
        label: "Reduced Operational Friction",
        body:
          "Automated workflows reduce repetitive reconciliation, reporting, and administrative coordination.",
      },
      {
        label: "Scalable Financial Operations",
        body:
          "Modular architecture supports growing client, transaction, asset, and data volumes without unnecessary platform rebuilds.",
      },
    ],
    capabilities: [
      {
        title: "Wealth Management Platforms",
        description:
          "Portfolio, account, performance, reporting, and advisor workflows for wealth and asset-management organizations.",
      },
      {
        title: "Client Portal Development",
        description:
          "Secure self-service experiences for account access, statements, documents, communication, and financial reporting.",
      },
      {
        title: "Investment Operations Software",
        description:
          "Digital workflows supporting portfolio operations, orders, market information, and investment processes.",
      },
      {
        title: "Financial Reporting Platforms",
        description:
          "Connected reporting environments that consolidate operational and financial data into decision-ready views.",
      },
      {
        title: "Data & Integration Architecture",
        description:
          "Integration layers that connect financial applications, data sources, market systems, and internal platforms.",
      },
      {
        title: "Security & Access Engineering",
        description:
          "Permission structures, secure data flows, and access controls designed around sensitive financial information.",
      },
    ],
    solutions: [
      {
        title: "Wealth Management Platform",
        description:
          "A connected platform for portfolio management, client reporting, account information, and advisor workflows.",
      },
      {
        title: "Financial Intelligence Portal",
        description:
          "A secure digital environment bringing financial data, reporting, documents, and client information into one experience.",
      },
    ],
    techStack: [
      "React",
      "Node.js",
      "AWS",
      "Postgres",
      "MongoDB",
      "Cloudflare",
    ],
    insights: [
      {
        tag: "Guide",
        title: "What Modern Clients Expect From Financial Portals",
        blurb:
          "The digital capabilities that improve client self-service without removing the value of professional financial relationships.",
      },
      {
        tag: "Article",
        title: "Making Regulatory Reporting Part of the Architecture",
        blurb:
          "Why financial reporting and audit requirements are stronger when they are considered during platform design.",
      },
      {
        tag: "Case Study",
        title: "Scaling Financial Platforms as Client and Asset Volumes Grow",
        blurb:
          "How modular architecture can support growth while maintaining reliable financial workflows.",
      },
    ],
    faqs: [
      {
        question:
          "Can Starfii build wealth management software?",
        answer:
          "Yes. We build portfolio, account, reporting, client portal, and advisor workflow platforms for financial organizations.",
      },
      {
        question:
          "Can you develop secure client-facing financial portals?",
        answer:
          "Yes. We build secure self-service portals for account information, statements, documents, reporting, and communication.",
      },
      {
        question:
          "Can you build order or investment operations systems?",
        answer:
          "Yes. We can engineer order workflows, market-data experiences, portfolio operations, and related financial tooling.",
      },
      {
        question:
          "Can regulatory reporting be integrated into the platform?",
        answer:
          "Yes. Reporting and audit requirements can be incorporated into the architecture and data model from the beginning.",
      },
      {
        question:
          "Can financial systems scale with growing assets and clients?",
        answer:
          "Yes. We design financial platforms around data volume, client growth, transaction requirements, integrations, security, and performance.",
      },
    ],
  },

  /* ============================================================
     ENERGY & UTILITIES
  ============================================================ */

  "energy-utilities": {
    slug: "energy-utilities",
    name: "Energy & Utilities",
    kicker: "Industry Expertise / Energy & Utilities",
    headline: "Digital Infrastructure for Smarter, More Reliable Utilities",
    description:
      "We build connected utility technology spanning smart metering, grid visibility, field operations, energy management, billing, and customer self-service.",
    stats: baseStats("energy and utilities"),
    keyTakeaway:
      "Starfii connects infrastructure data, field operations, energy workflows, billing, and customer experiences so utility teams can operate with greater visibility and control.",
    highlight: {
      title: "From Infrastructure Data to Operational Intelligence",
      body:
        "Utility organizations generate valuable data across meters, infrastructure, field teams, customers, and commercial systems. The challenge is turning that data into timely decisions. Starfii builds connected platforms that bring those operational signals together while creating clearer experiences for both teams and customers.",
    },
    focusAreas: [
      {
        title: "Smart Grid & Metering",
        description:
          "Real-time data collection and monitoring across smart meters and connected infrastructure.",
      },
      {
        title: "Energy Trading & Risk",
        description:
          "Technology for managing positions, pricing, exposure, and operational information across energy markets.",
      },
      {
        title: "Field Service Operations",
        description:
          "Scheduling, dispatch, tracking, and workforce coordination for installations, maintenance, and outage response.",
      },
      {
        title: "Customer Billing & Self-Service",
        description:
          "Digital experiences for usage, billing, account management, communication, and customer support.",
      },
    ],
    impactPoints: [
      {
        label: "Real-Time Grid Visibility",
        body:
          "Connected metering and infrastructure data provides operations teams with a clearer view of current conditions.",
      },
      {
        label: "Faster Outage Response",
        body:
          "Live operational and field information helps teams coordinate response resources more effectively.",
      },
      {
        label: "More Reliable Billing",
        body:
          "Direct integration with usage data reduces manual reconciliation and billing discrepancies.",
      },
      {
        label: "Stronger Energy Risk Visibility",
        body:
          "Connected trading and operational data provides greater insight into pricing and exposure.",
      },
      {
        label: "Higher Customer Self-Service",
        body:
          "Digital account experiences allow customers to access usage, billing, and service information without unnecessary support interactions.",
      },
    ],
    capabilities: [
      {
        title: "Smart Metering Platforms",
        description:
          "Real-time collection, monitoring, and management of smart-meter and usage data.",
      },
      {
        title: "Grid Monitoring Systems",
        description:
          "Operational dashboards providing visibility into grid conditions, load, incidents, and infrastructure activity.",
      },
      {
        title: "Energy Trading Platforms",
        description:
          "Technology supporting position management, pricing, risk visibility, and energy trading workflows.",
      },
      {
        title: "Field Service Management",
        description:
          "Scheduling, dispatch, location tracking, and operational workflows for utility field teams.",
      },
      {
        title: "Customer Billing Systems",
        description:
          "Usage-driven billing and account workflows connected to metering and operational data.",
      },
      {
        title: "Customer Self-Service Platforms",
        description:
          "Digital customer experiences for usage, billing, account management, and service interactions.",
      },
    ],
    solutions: [
      {
        title: "Smart Utility Operations Platform",
        description:
          "A connected environment bringing metering, grid, field, and operational intelligence together.",
      },
      {
        title: "Utility Customer Experience Platform",
        description:
          "A digital self-service experience connecting customer accounts, usage, billing, and service information.",
      },
    ],
    techStack: [
      "React",
      "Node.js",
      "AWS",
      "MongoDB",
      "Postgres",
      "IoT Core",
    ],
    insights: [
      {
        tag: "Guide",
        title: "Unlocking More Value From Smart Metering Data",
        blurb:
          "How connected meter information can support grid visibility, customer experience, billing, and operational intelligence.",
      },
      {
        tag: "Article",
        title: "Engineering Faster Utility Field Response",
        blurb:
          "How real-time location and operational data can improve dispatch and outage coordination.",
      },
      {
        tag: "Case Study",
        title: "Connecting Metering Data Directly to Billing Operations",
        blurb:
          "How stronger integration can improve billing accuracy while reducing manual reconciliation.",
      },
    ],
    faqs: [
      {
        question:
          "Can Starfii build smart metering and grid monitoring software?",
        answer:
          "Yes. We build real-time monitoring and data platforms for smart meters and connected utility infrastructure.",
      },
      {
        question:
          "Can you build customer self-service platforms for utilities?",
        answer:
          "Yes. We build digital experiences for account management, usage, billing, service requests, and customer communication.",
      },
      {
        question:
          "Can field service operations be digitized?",
        answer:
          "Yes. We build scheduling, dispatch, location tracking, and workflow tools for utility field teams.",
      },
      {
        question:
          "Can energy trading workflows be supported?",
        answer:
          "Yes. We build platforms supporting positions, pricing, exposure, risk visibility, and related energy workflows.",
      },
      {
        question:
          "Can billing systems integrate directly with meter data?",
        answer:
          "Yes. We can design integration architectures that connect usage information with billing and customer account workflows.",
      },
    ],
  },

  /* ============================================================
     INSURANCE
  ============================================================ */

  insurance: {
    slug: "insurance",
    name: "Insurance",
    kicker: "Industry Expertise / Insurance",
    headline: "Modernizing Insurance From Quote to Claim",
    description:
      "We build connected insurance platforms that modernize policy administration, underwriting, claims, agent workflows, and customer experiences.",
    stats: baseStats("insurance"),
    keyTakeaway:
      "Starfii connects policy, risk, claims, customer, and partner workflows into technology platforms designed to improve speed, visibility, and operational control.",
    highlight: {
      title: "Turning Insurance Complexity Into Connected Workflows",
      body:
        "Insurance operations span policy administration, underwriting, claims, distribution, customer service, and compliance. When those processes operate through fragmented systems, teams spend valuable time reconciling information. Starfii engineers connected workflows that give insurers a clearer and more consistent operational foundation.",
    },
    focusAreas: [
      {
        title: "Policy Administration",
        description:
          "Digital systems for issuing, managing, servicing, renewing, and maintaining insurance policies.",
      },
      {
        title: "Claims Management",
        description:
          "Connected workflows for claims intake, assessment, documentation, review, settlement, and reporting.",
      },
      {
        title: "Underwriting & Risk",
        description:
          "Structured data and workflow tools that support more consistent risk evaluation and underwriting decisions.",
      },
      {
        title: "Agent & Broker Experiences",
        description:
          "Self-service portals that simplify quoting, policy management, communication, and partner interactions.",
      },
    ],
    impactPoints: [
      {
        label: "Faster Claims Resolution",
        body:
          "Connected claims workflows reduce manual handoffs and improve visibility from intake through settlement.",
      },
      {
        label: "More Consistent Underwriting",
        body:
          "Structured data and decision workflows help underwriting teams work from clearer information.",
      },
      {
        label: "Reduced Policy Administration",
        body:
          "Automated issuance, servicing, and renewal workflows reduce repetitive manual activity.",
      },
      {
        label: "Stronger Distribution Experiences",
        body:
          "Agent and broker portals provide partners with faster access to quoting, policy, and account information.",
      },
      {
        label: "Improved Risk Intelligence",
        body:
          "Connected claims and policy data creates a stronger foundation for identifying patterns and improving risk decisions.",
      },
    ],
    capabilities: [
      {
        title: "Policy Administration Platforms",
        description:
          "Digital workflows for policy issuance, servicing, endorsements, renewals, and lifecycle management.",
      },
      {
        title: "Claims Management Systems",
        description:
          "End-to-end claims workflows covering intake, documentation, assessment, review, and settlement.",
      },
      {
        title: "Underwriting & Risk Platforms",
        description:
          "Structured technology supporting risk assessment, underwriting workflows, and decision-making.",
      },
      {
        title: "Agent & Broker Portals",
        description:
          "Secure self-service experiences for quoting, binding, policy management, and partner communication.",
      },
      {
        title: "Insurance Data Platforms",
        description:
          "Connected data environments that bring policy, claims, customer, and operational information together.",
      },
      {
        title: "Fraud & Claims Intelligence",
        description:
          "Structured data pipelines and analytics capabilities that support pattern detection and claims intelligence.",
      },
    ],
    solutions: [
      {
        title: "Connected Claims Platform",
        description:
          "A digital claims environment connecting intake, documentation, assessment, workflows, settlement, and reporting.",
      },
      {
        title: "Policy & Underwriting Platform",
        description:
          "A connected insurance operating layer spanning policy administration, underwriting, risk, and partner workflows.",
      },
    ],
    techStack: [
      "React",
      "Node.js",
      "AWS",
      "Postgres",
      "MongoDB",
      "Auth0",
    ],
    insights: [
      {
        tag: "Guide",
        title: "Designing Insurance Platforms Around the Complete Policy Lifecycle",
        blurb:
          "How connected architecture can align policy administration, underwriting, claims, and customer experiences.",
      },
      {
        tag: "Article",
        title: "Why Claims Technology Needs More Than Workflow Automation",
        blurb:
          "The role of data, integration, visibility, and decision support in building better claims operations.",
      },
      {
        tag: "Case Study",
        title: "Connecting Policy and Claims Data Into One Operational View",
        blurb:
          "How unified information can reduce manual reconciliation and improve insurance team visibility.",
      },
    ],
    faqs: [
      {
        question:
          "Can Starfii build policy administration software?",
        answer:
          "Yes. We build digital policy workflows covering issuance, servicing, renewals, endorsements, and related administration.",
      },
      {
        question:
          "Can you build a claims management platform?",
        answer:
          "Yes. We build claims platforms covering intake, documentation, assessment, review, settlement, and reporting.",
      },
      {
        question:
          "Can underwriting workflows be digitized?",
        answer:
          "Yes. We build structured underwriting and risk workflows around the data and decisions insurance teams need to manage.",
      },
      {
        question:
          "Can agents and brokers have their own portals?",
        answer:
          "Yes. We build secure partner portals for quoting, policy management, communication, and self-service workflows.",
      },
      {
        question:
          "Can insurance data support fraud detection?",
        answer:
          "Yes. Connected claims and policy data can provide a stronger foundation for analytics and pattern-based risk identification.",
      },
    ],
  },

  /* ============================================================
     LIFE SCIENCES
  ============================================================ */

  "life-sciences": {
    slug: "life-sciences",
    name: "Life Sciences",
    kicker: "Industry Expertise / Life Sciences",
    headline: "Digital Systems Built for Scientific Precision",
    description:
      "We engineer secure, traceable software for clinical trials, laboratories, quality management, pharmacovigilance, and regulated scientific workflows.",
    stats: baseStats("life sciences"),
    keyTakeaway:
      "Starfii builds life sciences platforms around data integrity, traceability, workflow control, regulatory requirements, and operational precision.",
    highlight: {
      title: "Turning Scientific Complexity Into Controlled Digital Workflows",
      body:
        "Life sciences organizations operate in environments where data accuracy, traceability, quality, and compliance are essential. Starfii engineers digital systems that connect clinical, laboratory, quality, and regulatory workflows while maintaining the visibility and control required by high-precision operations.",
    },
    focusAreas: [
      {
        title: "Clinical Trial Management",
        description:
          "Digital systems for planning, tracking, monitoring, and reporting clinical trial activities.",
      },
      {
        title: "Laboratory Information Management",
        description:
          "Structured laboratory workflows for sample tracking, testing, results, and operational visibility.",
      },
      {
        title: "Quality & Regulatory Systems",
        description:
          "Technology supporting controlled documentation, quality workflows, auditability, and regulatory processes.",
      },
      {
        title: "Pharmacovigilance",
        description:
          "Digital workflows for adverse-event capture, assessment, review, documentation, and reporting.",
      },
    ],
    impactPoints: [
      {
        label: "Trusted Scientific Data",
        body:
          "Structured systems preserve data consistency and traceability across complex scientific workflows.",
      },
      {
        label: "Faster Laboratory Operations",
        body:
          "Connected laboratory workflows reduce manual handoffs between sample intake, testing, and results reporting.",
      },
      {
        label: "Audit-Ready Processes",
        body:
          "Quality and regulatory workflows are designed around controlled records, traceability, and review requirements.",
      },
      {
        label: "More Efficient Safety Reporting",
        body:
          "Structured pharmacovigilance workflows help teams manage adverse-event information with greater consistency.",
      },
      {
        label: "Cross-Functional Visibility",
        body:
          "Connected platforms give clinical, laboratory, quality, and regulatory teams access to a more consistent operational picture.",
      },
    ],
    capabilities: [
      {
        title: "Clinical Trial Management Software",
        description:
          "End-to-end technology for trial planning, enrollment, visits, monitoring, documentation, and reporting.",
      },
      {
        title: "LIMS Development",
        description:
          "Laboratory information management platforms for sample tracking, testing workflows, and results management.",
      },
      {
        title: "Regulatory Compliance Platforms",
        description:
          "Digital documentation, workflow, audit, and review capabilities for regulated environments.",
      },
      {
        title: "Quality Management Systems",
        description:
          "Structured quality workflows supporting documentation, review, corrective actions, and controlled processes.",
      },
      {
        title: "Pharmacovigilance Systems",
        description:
          "Technology for adverse-event capture, review, documentation, and reporting workflows.",
      },
      {
        title: "Data Integrity & Traceability",
        description:
          "Architecture designed around controlled data flows, traceability, auditability, and reliable information.",
      },
    ],
    solutions: [
      {
        title: "Clinical Trial Management Platform",
        description:
          "A connected platform for trial planning, enrollment, visit management, documentation, monitoring, and reporting.",
      },
      {
        title: "Laboratory Information Management Platform",
        description:
          "A structured laboratory environment for sample lifecycle management, testing workflows, and results visibility.",
      },
    ],
    techStack: [
      "React",
      "Node.js",
      "AWS",
      "Postgres",
      "MongoDB",
      "Azure",
    ],
    insights: [
      {
        tag: "Guide",
        title: "Designing Clinical Data for Traceability and Review",
        blurb:
          "The architecture principles that help scientific and clinical information remain structured, controlled, and reviewable.",
      },
      {
        tag: "Article",
        title: "Connecting Laboratory Workflows Without Losing Control",
        blurb:
          "How digital integration can improve laboratory throughput while maintaining structured data and workflow governance.",
      },
      {
        tag: "Case Study",
        title: "Engineering More Structured Pharmacovigilance Workflows",
        blurb:
          "How controlled digital processes can improve the movement of safety information from event capture through reporting.",
      },
    ],
    faqs: [
      {
        question:
          "Can Starfii build clinical trial management software?",
        answer:
          "Yes. We build platforms for trial planning, enrollment, visits, documentation, monitoring, and reporting.",
      },
      {
        question:
          "Can you develop a LIMS?",
        answer:
          "Yes. We build laboratory information management systems for sample tracking, testing workflows, results, and laboratory operations.",
      },
      {
        question:
          "Can quality and regulatory workflows be digitized?",
        answer:
          "Yes. We build structured systems for documentation, quality processes, review, auditability, and regulatory workflows.",
      },
      {
        question:
          "Can you build pharmacovigilance software?",
        answer:
          "Yes. We build systems supporting adverse-event capture, review, documentation, and reporting.",
      },
      {
        question:
          "How do you approach data traceability?",
        answer:
          "We design data models, workflows, access controls, and integrations with traceability and auditability considered as core architectural requirements.",
      },
    ],
  },

  /* ============================================================
     MANUFACTURING
  ============================================================ */

  manufacturing: {
    slug: "manufacturing",
    name: "Manufacturing",
    kicker: "Industry Expertise / Manufacturing",
    headline: "Connecting the Factory Floor to the Future",
    description:
      "We build connected manufacturing technology that brings production, equipment, quality, inventory, and supply chain intelligence into the operational picture.",
    stats: baseStats("manufacturing"),
    keyTakeaway:
      "Starfii connects plant-floor data with production, maintenance, quality, procurement, and supply chain workflows to help manufacturers operate with greater visibility.",
    highlight: {
      title: "From Factory Data to Operational Intelligence",
      body:
        "Manufacturing environments generate valuable information across equipment, production, quality, inventory, and suppliers. When that information is fragmented, teams make decisions from incomplete signals. Starfii engineers connected manufacturing systems that bring plant-floor data closer to the people and processes responsible for operational decisions.",
    },
    focusAreas: [
      {
        title: "Manufacturing Execution",
        description:
          "Real-time production tracking connecting planning, shop-floor activity, work orders, and reporting.",
      },
      {
        title: "Predictive Maintenance & IoT",
        description:
          "Connected equipment monitoring designed to identify maintenance signals before they become operational disruptions.",
      },
      {
        title: "Quality Management",
        description:
          "Structured inspection, defect, corrective-action, and quality workflows across production environments.",
      },
      {
        title: "Supply Chain & Procurement",
        description:
          "Connected supplier, inventory, purchasing, and production planning workflows.",
      },
    ],
    impactPoints: [
      {
        label: "Real-Time Production Visibility",
        body:
          "Connected manufacturing systems give planners and operators a clearer view of production activity while work is happening.",
      },
      {
        label: "Reduced Unplanned Downtime",
        body:
          "Equipment monitoring and predictive signals help teams identify potential maintenance issues earlier.",
      },
      {
        label: "Stronger Quality Control",
        body:
          "Structured inspection and defect workflows help organizations identify and manage quality issues closer to their source.",
      },
      {
        label: "Better Supply Chain Coordination",
        body:
          "Connected supplier, inventory, and production information improves planning and operational awareness.",
      },
      {
        label: "Faster Root-Cause Analysis",
        body:
          "Connected production and quality data makes it easier to trace operational issues back to the relevant process or equipment.",
      },
    ],
    capabilities: [
      {
        title: "Manufacturing Execution Systems",
        description:
          "Real-time production tracking connecting planning, operators, work orders, and operational reporting.",
      },
      {
        title: "Predictive Maintenance Platforms",
        description:
          "IoT-enabled equipment monitoring and alerting designed to surface maintenance signals earlier.",
      },
      {
        title: "Quality Management Systems",
        description:
          "Digital workflows for inspections, defects, corrective actions, and quality reporting.",
      },
      {
        title: "Supply Chain & Procurement Software",
        description:
          "Connected systems for suppliers, inventory, procurement, production schedules, and operational planning.",
      },
      {
        title: "Industrial IoT Integration",
        description:
          "Connecting sensors, equipment, and plant-floor systems to centralized operational platforms.",
      },
      {
        title: "Production Analytics",
        description:
          "Dashboards connecting production, equipment, quality, inventory, and supply chain performance.",
      },
    ],
    solutions: [
      {
        title: "Manufacturing Execution Platform",
        description:
          "A connected production environment linking planning, shop-floor activity, work orders, quality, and reporting.",
      },
      {
        title: "Predictive Maintenance Platform",
        description:
          "An equipment intelligence layer using connected data and monitoring to help reduce unexpected downtime.",
      },
    ],
    techStack: [
      "React",
      "Node.js",
      "AWS",
      "MongoDB",
      "Postgres",
      "IoT Core",
    ],
    insights: [
      {
        tag: "Guide",
        title: "What a Modern MES Should Actually Connect",
        blurb:
          "The production, planning, quality, and reporting capabilities that create real operational visibility.",
      },
      {
        tag: "Article",
        title: "Moving Predictive Maintenance From Alerts to Decisions",
        blurb:
          "How equipment data becomes more valuable when it is connected to maintenance workflows and operational context.",
      },
      {
        tag: "Case Study",
        title: "Connecting Production and Quality Data",
        blurb:
          "How integrated operational data can improve root-cause analysis and quality decision-making.",
      },
    ],
    faqs: [
      {
        question:
          "Can Starfii build an MES platform?",
        answer:
          "Yes. We build manufacturing execution systems connecting planning, production, work orders, quality, and reporting.",
      },
      {
        question:
          "Can predictive maintenance be built around existing equipment?",
        answer:
          "Yes. Where data is available, we can integrate sensors, equipment systems, and operational data into monitoring workflows.",
      },
      {
        question:
          "Can quality management be connected to production?",
        answer:
          "Yes. We can connect quality inspections, defects, corrective actions, and production information into a more complete operational view.",
      },
      {
        question:
          "Can supply chain and procurement workflows be integrated?",
        answer:
          "Yes. We build connected supplier, inventory, procurement, and production workflows.",
      },
      {
        question:
          "Can plant-floor data feed management dashboards?",
        answer:
          "Yes. Plant-floor and equipment data can be connected to operational dashboards and reporting environments.",
      },
    ],
  },

  /* ============================================================
     PRIVATE EQUITY
  ============================================================ */

  "private-equity": {
    slug: "private-equity",
    name: "Private Equity",
    kicker: "Industry Expertise / Private Equity",
    headline: "Technology for Better Investment Intelligence",
    description:
      "We build connected investment technology that gives private equity teams stronger visibility across deal flow, portfolio performance, value creation, and LP reporting.",
    stats: baseStats("private equity"),
    keyTakeaway:
      "Starfii transforms fragmented investment information into connected digital workflows across sourcing, diligence, portfolio monitoring, reporting, and value creation.",
    highlight: {
      title: "Turning Portfolio Data Into Investment Intelligence",
      body:
        "Investment teams often depend on information distributed across spreadsheets, documents, emails, portfolio companies, and reporting systems. Starfii engineers platforms that bring these signals together, creating a more structured environment for deal teams, portfolio teams, leadership, and LP communication.",
    },
    focusAreas: [
      {
        title: "Deal Flow Management",
        description:
          "Structured pipelines for sourcing, qualification, diligence, deal progression, and investment workflows.",
      },
      {
        title: "Portfolio Monitoring",
        description:
          "Connected systems for tracking portfolio company performance, operating metrics, initiatives, and investment objectives.",
      },
      {
        title: "LP Reporting & Communication",
        description:
          "Secure digital environments for performance reporting, fund information, documents, and LP communication.",
      },
      {
        title: "Due Diligence & Data Rooms",
        description:
          "Controlled digital workflows for document sharing, access management, diligence, and information review.",
      },
    ],
    impactPoints: [
      {
        label: "Real-Time Portfolio Visibility",
        body:
          "Connected portfolio information gives investment teams a more current view of operating and financial performance.",
      },
      {
        label: "More Structured Deal Flow",
        body:
          "Centralized pipelines reduce the risk of important sourcing and diligence information becoming fragmented.",
      },
      {
        label: "More Efficient LP Reporting",
        body:
          "Structured reporting workflows reduce repetitive manual work while improving consistency and transparency.",
      },
      {
        label: "Faster Investment Decisions",
        body:
          "Decision-ready information helps teams spend less time assembling data and more time evaluating opportunities.",
      },
      {
        label: "Controlled Sensitive Information",
        body:
          "Permission structures and secure access workflows help protect sensitive investment and LP information.",
      },
    ],
    capabilities: [
      {
        title: "Portfolio Monitoring Platforms",
        description:
          "Centralized systems for portfolio company metrics, performance tracking, initiatives, and reporting.",
      },
      {
        title: "Deal Flow Management",
        description:
          "Digital pipelines covering sourcing, qualification, diligence, deal progression, and investment activity.",
      },
      {
        title: "LP Reporting Portals",
        description:
          "Secure self-service environments for fund reporting, documents, performance information, and LP communication.",
      },
      {
        title: "Due Diligence Platforms",
        description:
          "Controlled digital environments for document management, access tracking, information requests, and review.",
      },
      {
        title: "Investment Analytics",
        description:
          "Dashboards connecting investment, portfolio, operating, and financial information into decision-ready views.",
      },
      {
        title: "Access & Security Engineering",
        description:
          "Permission structures and secure information architecture designed around sensitive investment data.",
      },
    ],
    solutions: [
      {
        title: "Portfolio Intelligence Platform",
        description:
          "A connected environment for portfolio monitoring, performance reporting, value-creation initiatives, and investment intelligence.",
      },
      {
        title: "Deal & LP Management Platform",
        description:
          "A digital investment workflow connecting deal pipelines, diligence, fund information, and LP reporting.",
      },
    ],
    techStack: [
      "React",
      "Node.js",
      "AWS",
      "Postgres",
      "MongoDB",
      "Cloudflare",
    ],
    insights: [
      {
        tag: "Guide",
        title: "Designing Portfolio Reporting for Decision-Making",
        blurb:
          "How investment teams can move beyond static reporting toward connected portfolio intelligence.",
      },
      {
        tag: "Article",
        title: "Structuring Deal Data Across the Investment Lifecycle",
        blurb:
          "The technology principles that keep sourcing, diligence, investment decisions, and portfolio information connected.",
      },
      {
        tag: "Case Study",
        title: "Replacing Spreadsheet-Driven Portfolio Monitoring",
        blurb:
          "How a centralized platform can create stronger visibility across portfolio company performance.",
      },
    ],
    faqs: [
      {
        question:
          "Can Starfii build portfolio monitoring software?",
        answer:
          "Yes. We build platforms that consolidate portfolio company metrics, performance data, initiatives, and reporting.",
      },
      {
        question:
          "Can you develop an LP reporting portal?",
        answer:
          "Yes. We build secure portals for fund information, performance reporting, documents, and LP communication.",
      },
      {
        question:
          "Can deal flow management be digitized?",
        answer:
          "Yes. We build structured pipelines for sourcing, qualification, diligence, deal progression, and investment activity.",
      },
      {
        question:
          "Can you build secure diligence environments?",
        answer:
          "Yes. We build controlled document-sharing and information-management environments with access and permission controls.",
      },
      {
        question:
          "How do you handle sensitive investment data?",
        answer:
          "We design access controls, permissions, data flows, and platform security around the sensitivity of investment and LP information.",
      },
    ],
  },

  /* ============================================================
     PROFESSIONAL SERVICES
  ============================================================ */

  "professional-services": {
    slug: "professional-services",
    name: "Professional Services",
    kicker: "Industry Expertise / Professional Services",
    headline: "Engineering Better Economics for Service Businesses",
    description:
      "We build connected technology for professional services firms, linking projects, people, time, billing, clients, knowledge, and profitability.",
    stats: baseStats("professional services"),
    keyTakeaway:
      "Starfii helps professional services firms create stronger operational visibility across delivery, resource utilization, billing, client engagement, and firm knowledge.",
    highlight: {
      title: "Turning Billable Activity Into Business Intelligence",
      body:
        "Professional services economics depend on understanding how people, projects, hours, budgets, billing, and client commitments interact. Starfii engineers connected systems that make those relationships visible while work is happening, helping firms manage engagements with greater commercial control.",
    },
    focusAreas: [
      {
        title: "Project & Resource Management",
        description:
          "Planning and staffing capabilities that align people, expertise, availability, project requirements, and commercial priorities.",
      },
      {
        title: "Time, Billing & Revenue Operations",
        description:
          "Connected time capture, billing, invoicing, budgets, and revenue workflows.",
      },
      {
        title: "Client Collaboration",
        description:
          "Secure client environments for deliverables, communication, documents, project visibility, and engagement management.",
      },
      {
        title: "Knowledge & Firm Intelligence",
        description:
          "Structured knowledge platforms that turn past work, expertise, and engagement data into reusable business assets.",
      },
    ],
    impactPoints: [
      {
        label: "Real-Time Engagement Visibility",
        body:
          "Connected project and resource information shows engagement health while work is underway rather than after the fact.",
      },
      {
        label: "More Accurate Billing",
        body:
          "Integrated time and billing workflows reduce manual reconciliation and improve invoice accuracy.",
      },
      {
        label: "Higher Resource Utilization",
        body:
          "Better visibility into skills, availability, and demand helps firms allocate people more effectively.",
      },
      {
        label: "Stronger Client Transparency",
        body:
          "Client collaboration environments create clearer visibility into deliverables, progress, documents, and communication.",
      },
      {
        label: "Reusable Institutional Knowledge",
        body:
          "Connected knowledge systems make valuable expertise and previous engagement work easier to find and reuse.",
      },
    ],
    capabilities: [
      {
        title: "Project & Resource Management",
        description:
          "Digital planning and staffing tools that align people, skills, availability, engagements, and project requirements.",
      },
      {
        title: "Time & Billing Platforms",
        description:
          "Connected time capture, invoicing, engagement budgets, and revenue workflows.",
      },
      {
        title: "Client Collaboration Portals",
        description:
          "Secure digital spaces for deliverables, files, communication, approvals, and engagement visibility.",
      },
      {
        title: "Knowledge Management Platforms",
        description:
          "Centralized environments for institutional knowledge, templates, documents, and past engagement work.",
      },
      {
        title: "Engagement Analytics",
        description:
          "Dashboards tracking utilization, project health, budgets, billing, profitability, and delivery performance.",
      },
      {
        title: "Proposal & Contract Workflows",
        description:
          "Digital capabilities supporting proposal creation, approvals, contract workflows, and client onboarding.",
      },
    ],
    solutions: [
      {
        title: "Professional Services Operations Platform",
        description:
          "A connected operating layer spanning projects, resources, time, billing, client collaboration, and profitability.",
      },
      {
        title: "Client Collaboration Platform",
        description:
          "A secure client environment for communication, deliverables, documents, approvals, and engagement visibility.",
      },
    ],
    techStack: [
      "React",
      "Node.js",
      "AWS",
      "Postgres",
      "MongoDB",
      "Auth0",
    ],
    insights: [
      {
        tag: "Guide",
        title: "Designing Technology Around Professional Services Economics",
        blurb:
          "The systems that connect utilization, delivery, billing, and profitability into one operating view.",
      },
      {
        tag: "Article",
        title: "Why Engagement Visibility Should Happen in Real Time",
        blurb:
          "How connected project and financial data helps firms act before margin and delivery issues become problems.",
      },
      {
        tag: "Case Study",
        title: "Building a More Connected Operating Model for Service Firms",
        blurb:
          "How integrated workflows can reduce administrative effort while improving commercial visibility.",
      },
    ],
    faqs: [
      {
        question:
          "Can Starfii build project and resource management software?",
        answer:
          "Yes. We build systems for project planning, staffing, resource allocation, delivery tracking, and engagement management.",
      },
      {
        question:
          "Can time tracking connect directly to billing?",
        answer:
          "Yes. We can connect time capture with engagement budgets, invoicing, approvals, and revenue workflows.",
      },
      {
        question:
          "Can you build client collaboration portals?",
        answer:
          "Yes. We build secure environments for deliverables, documents, communication, approvals, and project visibility.",
      },
      {
        question:
          "Can firm knowledge be centralized?",
        answer:
          "Yes. We build structured knowledge platforms that make templates, expertise, documents, and past engagement work easier to manage and reuse.",
      },
      {
        question:
          "Can leadership get real-time engagement profitability visibility?",
        answer:
          "Yes. Connected project, resource, time, and billing data can support dashboards around engagement health and profitability.",
      },
    ],
  },

  /* ============================================================
     PUBLIC SECTOR
  ============================================================ */

  "public-sector": {
    slug: "public-sector",
    name: "Public Sector",
    kicker: "Industry Expertise / Public Sector",
    headline: "Digital Government Built Around Citizens",
    description:
      "We build secure public-sector platforms that make citizen services easier to access while helping agencies modernize workflows, data, and service delivery.",
    stats: baseStats("public sector"),
    keyTakeaway:
      "Starfii engineers citizen portals, permitting, case management, interoperability, and transparency platforms designed around the needs of residents and public-sector teams.",
    highlight: {
      title: "From Administrative Complexity to Citizen-Centered Services",
      body:
        "Citizens increasingly expect public services to be as clear and accessible as the digital experiences they use elsewhere. Starfii builds government platforms that simplify service access while respecting the security, accessibility, interoperability, accountability, and operational requirements of public-sector organizations.",
    },
    focusAreas: [
      {
        title: "Citizen Service Portals",
        description:
          "Digital self-service experiences for residents to access services, submit requests, and track outcomes.",
      },
      {
        title: "Permitting & Licensing",
        description:
          "Structured application, review, approval, renewal, and communication workflows for public services.",
      },
      {
        title: "Case Management",
        description:
          "Digital systems for tracking resident requests, agency cases, investigations, and service outcomes.",
      },
      {
        title: "Data Interoperability",
        description:
          "Secure technology for sharing information across agencies while maintaining control and compliance.",
      },
    ],
    impactPoints: [
      {
        label: "More Accessible Public Services",
        body:
          "Self-service digital experiences make it easier for residents to access information and complete government interactions.",
      },
      {
        label: "Faster Permit & Service Workflows",
        body:
          "Structured workflows reduce unnecessary back-and-forth between residents, applicants, reviewers, and agencies.",
      },
      {
        label: "Consistent Case Management",
        body:
          "Centralized case workflows provide teams with clearer ownership, status, documentation, and history.",
      },
      {
        label: "Secure Cross-Agency Collaboration",
        body:
          "Interoperability platforms allow agencies to share information through controlled and secure data flows.",
      },
      {
        label: "Greater Public Transparency",
        body:
          "Reporting and transparency dashboards make service performance and operational information easier to understand.",
      },
    ],
    capabilities: [
      {
        title: "Citizen Service Portal Development",
        description:
          "Self-service platforms for resident requests, applications, service access, status tracking, and communication.",
      },
      {
        title: "Permitting & Licensing Platforms",
        description:
          "Digital application, review, approval, renewal, and workflow management for public-sector services.",
      },
      {
        title: "Case Management Systems",
        description:
          "Structured platforms for resident cases, investigations, service requests, documentation, and outcomes.",
      },
      {
        title: "Data Interoperability Platforms",
        description:
          "Secure integration and data-sharing capabilities connecting agencies and public-sector systems.",
      },
      {
        title: "Security & Compliance Engineering",
        description:
          "Technology foundations designed around public-sector security, access, privacy, accessibility, and compliance requirements.",
      },
      {
        title: "Reporting & Transparency Dashboards",
        description:
          "Internal and public-facing reporting experiences that provide clearer visibility into service and case performance.",
      },
    ],
    solutions: [
      {
        title: "Citizen Service Platform",
        description:
          "A digital front door for residents to access services, submit requests, track progress, and communicate with agencies.",
      },
      {
        title: "Permitting & Licensing Platform",
        description:
          "A connected workflow environment for applications, reviews, approvals, renewals, and resident communication.",
      },
    ],
    techStack: [
      "React",
      "Node.js",
      "AWS",
      "Postgres",
      "MongoDB",
      "Auth0",
    ],
    insights: [
      {
        tag: "Guide",
        title: "Designing Citizen Services People Will Actually Use",
        blurb:
          "The experience and technology principles that make public-sector self-service simpler and more accessible.",
      },
      {
        tag: "Article",
        title: "Reducing Administrative Friction With Structured Workflows",
        blurb:
          "How workflow design can shorten service journeys while improving visibility for agency teams.",
      },
      {
        tag: "Case Study",
        title: "Connecting Public-Sector Data Without Duplicating Records",
        blurb:
          "How interoperability architecture can support secure information sharing across agencies.",
      },
    ],
    faqs: [
      {
        question:
          "Can Starfii build a citizen service portal?",
        answer:
          "Yes. We build resident-facing portals for service access, requests, applications, tracking, communication, and self-service.",
      },
      {
        question:
          "Can you build permitting and licensing platforms?",
        answer:
          "Yes. We build structured application, review, approval, renewal, and communication workflows.",
      },
      {
        question:
          "Can public-sector case management be digitized?",
        answer:
          "Yes. We build systems for case tracking, documentation, investigations, service requests, and outcomes.",
      },
      {
        question:
          "Can agencies securely share data?",
        answer:
          "Yes. We build interoperability and integration layers designed around controlled access, secure data exchange, and applicable requirements.",
      },
      {
        question:
          "Can you build transparency dashboards?",
        answer:
          "Yes. We build internal and public-facing dashboards for service, case, and operational metrics.",
      },
    ],
  },

  /* ============================================================
     TECHNOLOGY, PRODUCTS & PLATFORMS
  ============================================================ */

  "technology-products-platforms": {
    slug: "technology-products-platforms",
    name: "Technology, Products & Platforms",
    kicker:
      "Industry Expertise / Technology, Products & Platforms",
    headline: "Engineering Platforms Built to Scale With Your Ambition",
    description:
      "We extend technology teams with product engineering, platform architecture, APIs, cloud infrastructure, DevOps, analytics, and experimentation capabilities.",
    stats: baseStats("technology and SaaS"),
    keyTakeaway:
      "Starfii works as an extension of technology teams, strengthening product delivery and platform foundations without forcing organizations into disconnected outsourced workflows.",
    highlight: {
      title: "From Product Vision to Scalable Technology Platform",
      body:
        "Technology companies need engineering capacity that understands the product, the codebase, the users, and the business objectives behind every release. Starfii embeds into existing teams to build product capabilities, platform architecture, APIs, cloud infrastructure, and delivery systems that support sustainable product growth.",
    },
    focusAreas: [
      {
        title: "SaaS Product Engineering",
        description:
          "Embedded engineering capacity for building, evolving, and scaling SaaS product experiences.",
      },
      {
        title: "API & Platform Engineering",
        description:
          "Robust API and platform foundations that enable products, integrations, partners, and future capabilities.",
      },
      {
        title: "Cloud & DevOps Engineering",
        description:
          "Cloud architecture, CI/CD, infrastructure-as-code, observability, and delivery systems designed for reliability.",
      },
      {
        title: "Product Analytics & Experimentation",
        description:
          "Instrumentation, experimentation, feature flags, and product analytics that connect engineering decisions with measurable outcomes.",
      },
    ],
    impactPoints: [
      {
        label: "Accelerated Product Delivery",
        body:
          "Embedded engineering teams integrate directly with your product organization, reducing coordination overhead and increasing delivery capacity.",
      },
      {
        label: "Scalable Platform Foundations",
        body:
          "API and platform architecture is designed around current requirements while creating room for future product expansion.",
      },
      {
        label: "Reliable Release Operations",
        body:
          "Automated delivery pipelines and infrastructure practices reduce friction and risk across frequent product releases.",
      },
      {
        label: "Better Product Decisions",
        body:
          "Analytics and experimentation connect feature usage with the product metrics leadership and teams actually care about.",
      },
      {
        label: "More Efficient Infrastructure",
        body:
          "Cloud architecture is aligned with real usage patterns, performance requirements, reliability needs, and cost considerations.",
      },
    ],
    capabilities: [
      {
        title: "SaaS Product Engineering",
        description:
          "Product development embedded directly into existing applications, teams, roadmaps, and engineering workflows.",
      },
      {
        title: "API & Platform Architecture",
        description:
          "Design and development of stable API layers and platform foundations for products and partner ecosystems.",
      },
      {
        title: "DevOps & CI/CD",
        description:
          "Automated build, test, deployment, and release infrastructure for reliable product delivery.",
      },
      {
        title: "Cloud Infrastructure Engineering",
        description:
          "Infrastructure-as-code and cloud architecture designed around scale, resilience, observability, and efficiency.",
      },
      {
        title: "Product Analytics",
        description:
          "Instrumentation and data capabilities that connect product behavior with meaningful business and product metrics.",
      },
      {
        title: "Experimentation Frameworks",
        description:
          "Feature flags, experimentation, and measurement infrastructure for controlled product learning.",
      },
    ],
    solutions: [
      {
        title: "Embedded Product Engineering Team",
        description:
          "Dedicated engineering capacity working directly inside your existing product organization, codebase, and delivery process.",
      },
      {
        title: "Platform & API Engineering",
        description:
          "A scalable technology foundation for APIs, integrations, partners, and products that need to grow without unnecessary rework.",
      },
    ],
    techStack: [
      "React",
      "Node.js",
      "AWS",
      "Kubernetes",
      "Postgres",
      "Terraform",
    ],
    insights: [
      {
        tag: "Guide",
        title: "Making Embedded Engineering Teams Work at Scale",
        blurb:
          "The operating principles that help external engineering capacity become a true extension of an internal product organization.",
      },
      {
        tag: "Article",
        title: "Designing APIs That Become Product Infrastructure",
        blurb:
          "The architectural decisions that help API platforms remain reliable as products, partners, and integrations grow.",
      },
      {
        tag: "Case Study",
        title: "Reducing Release Risk Through Delivery Automation",
        blurb:
          "How CI/CD, infrastructure-as-code, and observability can create a more predictable engineering operation.",
      },
    ],
    faqs: [
      {
        question:
          "Can Starfii work as an extension of our existing engineering team?",
        answer:
          "Yes. Our engineers can integrate directly into existing product, engineering, architecture, and delivery workflows.",
      },
      {
        question:
          "Can you build APIs and platform infrastructure?",
        answer:
          "Yes. We design and build API and platform layers that support products, integrations, partners, and internal systems.",
      },
      {
        question:
          "Can you modernize our CI/CD and cloud infrastructure?",
        answer:
          "Yes. We build automated delivery pipelines and cloud infrastructure around reliability, scalability, observability, and maintainability.",
      },
      {
        question:
          "Can you implement product analytics?",
        answer:
          "Yes. We implement instrumentation and analytics that connect product usage with meaningful business and product metrics.",
      },
      {
        question:
          "Can you work with our existing technology stack?",
        answer:
          "Yes. We adapt our engineering approach to your existing architecture, technology choices, product roadmap, and team practices.",
      },
    ],
  },

  /* ============================================================
     SAAS
  ============================================================ */

  saas: {
    slug: "saas",
    name: "SaaS",
    kicker: "Industry Expertise / SaaS",
    headline: "Product Engineering Built for Recurring Growth",
    description:
      "We engineer SaaS products around adoption, retention, reliability, scalability, and the product velocity required to compete in recurring-revenue markets.",
    stats: baseStats("SaaS"),
    keyTakeaway:
      "Starfii combines product engineering, platform architecture, cloud infrastructure, analytics, and experimentation to help SaaS businesses turn engineering velocity into sustainable growth.",
    highlight: {
      title: "From Product Vision to Scalable SaaS Platform",
      body:
        "SaaS products need more than feature development. They need a product foundation that supports rapid learning, reliable releases, scalable infrastructure, strong customer experiences, and measurable product outcomes. Starfii works across that complete engineering lifecycle.",
    },
    focusAreas: [
      {
        title: "SaaS Product Engineering",
        description:
          "End-to-end product development for customer-facing SaaS applications and platforms.",
      },
      {
        title: "Customer Experience & Retention",
        description:
          "Product experiences designed around activation, adoption, engagement, self-service, and long-term customer value.",
      },
      {
        title: "Platform Scalability",
        description:
          "Application and infrastructure architecture designed to support growing users, data, integrations, and workloads.",
      },
      {
        title: "Product Intelligence",
        description:
          "Analytics and experimentation capabilities that connect product behavior to measurable growth outcomes.",
      },
    ],
    impactPoints: [
      {
        label: "Faster Product Iteration",
        body:
          "A disciplined product engineering foundation helps teams release, learn, and improve without unnecessary technical friction.",
      },
      {
        label: "Higher Product Adoption",
        body:
          "Clear onboarding, intuitive experiences, and measurable user journeys create stronger paths to product value.",
      },
      {
        label: "Reliable Scale",
        body:
          "Architecture and infrastructure evolve with customer, data, and workload growth while protecting product reliability.",
      },
      {
        label: "Data-Informed Roadmaps",
        body:
          "Product analytics and experimentation give teams stronger evidence for prioritization and feature decisions.",
      },
      {
        label: "Lower Technical Friction",
        body:
          "Modern engineering practices reduce deployment risk, operational overhead, and avoidable complexity as the product grows.",
      },
    ],
    capabilities: [
      {
        title: "SaaS Product Development",
        description:
          "Full-stack product engineering for SaaS applications across web, backend, APIs, and core product workflows.",
      },
      {
        title: "Multi-Tenant Architecture",
        description:
          "Scalable application foundations designed around tenant isolation, data management, access control, and growth.",
      },
      {
        title: "Cloud & DevOps Engineering",
        description:
          "Cloud infrastructure, CI/CD, observability, deployment automation, and reliability engineering.",
      },
      {
        title: "Product Analytics",
        description:
          "Instrumentation and analytics connecting customer behavior with activation, engagement, retention, and business metrics.",
      },
      {
        title: "Experimentation & Feature Management",
        description:
          "Controlled experimentation, feature flags, and measurement systems for continuous product improvement.",
      },
      {
        title: "Performance & Reliability Engineering",
        description:
          "Engineering practices focused on application performance, availability, monitoring, and long-term maintainability.",
      },
    ],
    solutions: [
      {
        title: "SaaS Product Engineering Platform",
        description:
          "A scalable product foundation spanning application engineering, APIs, infrastructure, analytics, and delivery.",
      },
      {
        title: "SaaS Modernization Program",
        description:
          "A structured engineering approach for improving architecture, performance, delivery velocity, and product scalability.",
      },
    ],
    techStack: [
      "React",
      "Node.js",
      "AWS",
      "Kubernetes",
      "Postgres",
      "Terraform",
    ],
    insights: [
      {
        tag: "Guide",
        title: "Engineering SaaS Products for Long-Term Scale",
        blurb:
          "The product and architecture decisions that matter when SaaS products move from early traction to sustained growth.",
      },
      {
        tag: "Article",
        title: "Turning Product Analytics Into Better Roadmaps",
        blurb:
          "How meaningful product instrumentation can improve prioritization, experimentation, and customer understanding.",
      },
      {
        tag: "Case Study",
        title: "Scaling SaaS Without Slowing Product Velocity",
        blurb:
          "How strong platform foundations help teams keep shipping while customer and infrastructure complexity increases.",
      },
    ],
    faqs: [
      {
        question:
          "Can Starfii build a SaaS product from scratch?",
        answer:
          "Yes. We build SaaS applications across product experience, backend services, APIs, databases, cloud infrastructure, analytics, and delivery.",
      },
      {
        question:
          "Can you modernize an existing SaaS platform?",
        answer:
          "Yes. We can improve architecture, performance, reliability, infrastructure, delivery processes, and product capabilities.",
      },
      {
        question:
          "Can you support multi-tenant SaaS architecture?",
        answer:
          "Yes. We design tenant-aware architecture around isolation, access control, data management, scalability, and operational requirements.",
      },
      {
        question:
          "Can product analytics and experimentation be integrated?",
        answer:
          "Yes. We implement instrumentation, analytics, feature flags, and experimentation frameworks connected to product goals.",
      },
      {
        question:
          "Can Starfii work with an existing SaaS engineering team?",
        answer:
          "Yes. We can operate as an embedded product engineering partner alongside your internal team and technology organization.",
      },
    ],
  },

  /* ============================================================
     TELECOM
  ============================================================ */

  telecom: {
    slug: "telecom",
    name: "Telecom",
    kicker: "Industry Expertise / Telecom",
    headline: "Connecting Networks, Customers and Revenue",
    description:
      "We build connected telecom platforms that bring network operations, subscriber management, billing, analytics, and digital customer experiences together.",
    stats: baseStats("telecom"),
    keyTakeaway:
      "Starfii connects OSS/BSS, network monitoring, subscriber services, billing, provisioning, and customer self-service into scalable telecom technology ecosystems.",
    highlight: {
      title: "From Network Complexity to Customer-Centric Intelligence",
      body:
        "Telecom operators manage highly complex infrastructure while customers expect simple, reliable digital experiences. Starfii engineers platforms that connect network operations with subscriber, billing, support, and customer-facing systems—creating stronger visibility across both infrastructure and commercial operations.",
    },
    focusAreas: [
      {
        title: "OSS/BSS Modernization",
        description:
          "Connected operations and business support systems linking network activity with subscriber and commercial workflows.",
      },
      {
        title: "Customer Self-Service",
        description:
          "Digital experiences that allow subscribers to manage plans, accounts, usage, billing, and support interactions.",
      },
      {
        title: "Network Monitoring & Intelligence",
        description:
          "Real-time operational dashboards for network health, capacity, incidents, and infrastructure performance.",
      },
      {
        title: "Subscription & Billing",
        description:
          "Digital systems for plan management, usage-based billing, invoicing, subscriptions, and account operations.",
      },
    ],
    impactPoints: [
      {
        label: "Connected Network & Subscriber Data",
        body:
          "OSS/BSS integration creates a more consistent information flow between infrastructure, operations, billing, and customer systems.",
      },
      {
        label: "Lower Support Demand",
        body:
          "Self-service experiences give subscribers direct access to common account, plan, usage, and billing actions.",
      },
      {
        label: "Faster Network Response",
        body:
          "Real-time monitoring surfaces operational issues earlier and gives teams better context for response.",
      },
      {
        label: "More Accurate Billing",
        body:
          "Connected usage and subscription data reduces manual reconciliation and improves billing consistency.",
      },
      {
        label: "Simpler Subscriber Journeys",
        body:
          "Integrated plan and account workflows make upgrades, changes, payments, and support interactions easier to complete.",
      },
    ],
    capabilities: [
      {
        title: "OSS/BSS Platform Development",
        description:
          "Connected systems linking network operations, subscriber management, billing, support, and business workflows.",
      },
      {
        title: "Customer Self-Service Platforms",
        description:
          "Digital portals and applications for plans, usage, billing, account management, and support.",
      },
      {
        title: "Network Monitoring Systems",
        description:
          "Real-time operational dashboards for network health, capacity, incidents, and infrastructure visibility.",
      },
      {
        title: "Subscription & Billing Platforms",
        description:
          "Technology for plans, usage-based charging, subscriptions, invoices, payments, and account management.",
      },
      {
        title: "Provisioning & Activation",
        description:
          "Automated workflows for subscriber service activation, provisioning, changes, and lifecycle management.",
      },
      {
        title: "Telecom Analytics",
        description:
          "Connected reporting across network performance, subscriber activity, service usage, and commercial metrics.",
      },
    ],
    solutions: [
      {
        title: "Connected OSS/BSS Platform",
        description:
          "A unified telecom operating layer connecting network operations, subscriber management, billing, and support.",
      },
      {
        title: "Subscriber Experience Platform",
        description:
          "A digital customer environment for plan management, billing, usage, support, and self-service interactions.",
      },
    ],
    techStack: [
      "React",
      "Node.js",
      "AWS",
      "Postgres",
      "MongoDB",
      "Kafka",
    ],
    insights: [
      {
        tag: "Guide",
        title: "Modernizing OSS/BSS Without Creating New Silos",
        blurb:
          "How telecom operators can connect network, subscriber, billing, and customer systems through a more coherent architecture.",
      },
      {
        tag: "Article",
        title: "Turning Network Data Into Better Customer Experiences",
        blurb:
          "Why infrastructure intelligence becomes more valuable when it is connected to customer and commercial workflows.",
      },
      {
        tag: "Case Study",
        title: "Connecting Subscriber Services With Billing Operations",
        blurb:
          "How integrated subscriber and billing workflows can reduce manual reconciliation and simplify account management.",
      },
    ],
    faqs: [
      {
        question:
          "Can Starfii build or modernize OSS/BSS systems?",
        answer:
          "Yes. We build and integrate telecom platforms connecting network operations, subscriber management, billing, support, and business workflows.",
      },
      {
        question:
          "Can you build subscriber self-service portals?",
        answer:
          "Yes. We build digital experiences for plan management, usage, billing, account information, payments, and support.",
      },
      {
        question:
          "Can network monitoring be integrated with customer systems?",
        answer:
          "Yes. We can connect operational network data with customer, service, support, and analytics workflows.",
      },
      {
        question:
          "Can you build subscription and usage-based billing?",
        answer:
          "Yes. We build subscription, usage, charging, invoicing, payment, and account-management workflows.",
      },
      {
        question:
          "Can telecom platforms support high transaction and subscriber volumes?",
        answer:
          "Yes. Architecture can be designed around subscriber scale, transaction volume, availability, integrations, and always-on service requirements.",
      },
    ],
  },
};
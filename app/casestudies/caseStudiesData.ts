export interface CaseStudy {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  cardDescription: string;
  image: string;
  heroImage: string;
  client: string;
  industry: string;
  services: string[];
  overview: string;
  clientOverview: string;
  challengeIntro: string;
  challengePoints: string[];
  solutionIntro: string;
  solutionDetail: string;
  solution: string[];
  results: { metric: string; label: string }[];
  benefitsIntro: string;
  benefits: string[];
  summary: string;
  techStack: string[];
}

export const caseStudies: CaseStudy[] = [

  {
    id: 1,
    slug: "25-cost-savings-for-end-to-end-managed-data-delivery-reporting-services",
    title: "25% Cost Savings through Data Transformation for Insurance Reporting",
    subtitle:
      "Reengineering a fragmented BI landscape into a unified, factory-based data delivery model for one of Belgium's largest insurers.",
    category: "Data Engineering & Business Intelligence",
    cardDescription:
      "Starfii transformed a leading Belgian insurer's fragmented reporting landscape into a unified, automation-driven BI organization — cutting costs by 35% and delivering 15+ enterprise Datamarts.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop",
    client: "Leading Belgian Insurance Firm",
    industry: "Insurance & Financial Services",
    services: ["Business Intelligence", "Data Engineering", "Cloud Data Platform"],
    overview: "One of Belgium's largest insurance firms",
    clientOverview:
      "The client is one of Belgium's largest insurance firms, offering solutions across multiple brands and distribution channels — spanning property and casualty insurance, health and provident insurance, and life insurance and pension savings. Years of growth through acquisition had left the client managing fragmented data systems and outdated reporting processes, creating a clear need for enterprise-wide data transformation.",
    challengeIntro:
      "Build a predictable BI organization with a single, enterprise-wide view of the business",
    challengePoints: [
      "No unified enterprise data model across brands and business lines.",
      "Fragmented data consumption spread across multiple siloed systems.",
      "Datamarts built for one-off business reporting rather than long-term architectural sustainability.",
      "A resource-centric delivery model with no alignment on a common goal, producing inconsistent outcomes.",
      "DataHub's operational data store model was incompatible with business reporting and control requirements.",
      "Business departments struggled to align their own reporting needs with the available DataHub structure.",
    ],
    solutionIntro: "A factory-based Business Intelligence Competency Center",
    solutionDetail:
      "Starfii reengineered the client's Business Intelligence Competency Center using a factory-based delivery approach, centralizing data acquisition, preparation, reporting, analytics, dashboards, and insight generation under one coordinated model. A modular framework spanning flexible data provisioning, strong data governance, and reporting-optimized data design replaced the client's ad hoc, resource-centric approach — consolidating change, run, and reporting services into a single, governance-enabled BI organization built to scale.",
    solution: [
      "Reengineered the BI Competency Center around a factory-based, delivery-focused operating model.",
      "Configured DataHub and Datamarts for both commercial and personal lines, covering bound policies and quotes.",
      "Delivered market intelligence reporting on DataHub using SAS DI Studio and SAS Enterprise Guide.",
      "Customized ETL pipelines to meet business requirements outside standard out-of-the-box coverage.",
      "Implemented end-to-end automated reporting with stage-wise traceability for full data reconciliation.",
    ],

    results: [
      { metric: "35%", label: "Reduction in BI operating costs" },
      { metric: "15+", label: "Enterprise Datamarts delivered" },
      { metric: "1", label: "Unified enterprise-wide reporting view" },
      { metric: "100%", label: "Automated, stage-wise traceable reporting" },
    ],
    benefitsIntro: "A scalable BI organization built for informed decision-making",
    benefits: [
      "Achieved approximately 35% cost reduction through consolidation and automation.",
      "Delivered 15+ Datamarts offering unified insight into operations and commercial performance.",
      "Provided intuitive, user-friendly reports that support faster, better-informed decisions.",
      "Established end-to-end automated reporting with stage-wise traceability for seamless reconciliation.",
    ],
    summary:
      "Starfii enabled a leading Belgian insurance firm to achieve 35% cost savings through enterprise data transformation. By consolidating fragmented systems, automating reporting, and implementing a scalable BI framework, we delivered 15+ Datamarts, intuitive insights, and streamlined operations — giving the client unified, traceable, and actionable business intelligence.",
    techStack: ["Guidewire DataHub", "SAS DI Studio", "SAS Enterprise Guide", "SQL", "ETL Automation"],
  },

  {
    id: 2,
    slug: "15-year-digital-evolution-leading-australian-university",
    title: "A 15-Year Digital Evolution at a Leading Australian University",
    subtitle: "Keeping campus and core systems fast, secure, and student-ready — year after year.",
    category: "Managed Services & Digital Transformation",
    cardDescription:
      "Starfii has partnered with a leading Australian university for 15 years, modernizing PeopleSoft, SSO, testing, and automation to keep campus systems reliable through every academic cycle.",
   image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1600&auto=format&fit=crop",
    client: "A research-intensive public university in Australia",
    industry: "Higher Education",
    services: ["PeopleSoft Managed Services", "Testing & QA Automation", "RPA & Infrastructure as Code"],
    overview: "A research-intensive public university in Australia",
    clientOverview:
      "One of the country's largest universities, serving a diverse community of students, academics, and professional staff. The institution operates complex, interdependent systems — student information, HR, finance, research, and collaboration — that must stay available, secure, and easy to use throughout the academic calendar.",
    challengeIntro: "Modernize core platforms without disrupting university operations",
    challengePoints: [
      "Legacy PeopleSoft Campus, Finance, and HR systems needed continuous stabilization without disrupting live academic terms.",
      "Fragmented sign-on across core applications created friction for students, faculty, and staff.",
      "Manual, ad hoc testing slowed release cycles and raised risk during peak enrollment periods.",
      "Repetitive back-office processes consumed staff time needed for student and research support.",
      "Environments were provisioned manually, making deployments inconsistent and hard to recover.",
    ],
    solutionIntro: "A phased, low-risk transformation program",
    solutionDetail:
      "Starfii partnered with the university across multiple modernization waves, planning each step around academic cycles to minimize disruption. Our approach was to co-design with stakeholders, iterate in small batches, and measure outcomes — then reinvest those learnings into the next phase of the university's digital transformation.",
    solution: [
      "PeopleSoft (Campus, Finance, HR): continuous enhancement, stabilization, and managed services for reliable university ERP support.",
      "Oracle SSO: implemented single sign-on for a simpler, more secure experience across key applications.",
      "Collaboration uplift: migrated to SharePoint to streamline content management, teamwork, and governance.",
      "Digital assurance managed services: industrialized testing with reusable assets and risk-based coverage.",
      "CRM operations: supported Microsoft Dynamics CRM to strengthen engagement with students, alumni, and partners.",
      "Infrastructure as Code: codified environments for consistent, repeatable deployments and easier recovery.",
      "Automation with RPA: deployed bots to automate repetitive back-office tasks and free up staff bandwidth.",
    ],

    results: [
      { metric: "15 Yrs", label: "Ongoing strategic partnership" },
      { metric: "10+", label: "Modernization waves delivered" },
      { metric: "5", label: "Core platforms under managed services" },
      { metric: "Zero", label: "Major disruptions to academic operations" },
    ],
    benefitsIntro: "Measurable improvements that compound over time",
    benefits: [
      "A unified login journey and smoother collaboration tools reduced friction for students and staff.",
      "Standardized testing and Infrastructure as Code shortened release cycles and improved change confidence.",
      "Proactive support for Campus, Finance, HR, and CRM platforms stabilized critical services during peak periods.",
      "RPA removed repetitive tasks, letting teams focus on student services, research support, and innovation.",
      "Centralized access and platform controls strengthened compliance across the application estate.",
    ],
    summary:
      "Over 15 years, Starfii has helped this leading university modernize at pace without sacrificing stability. From core SIS/ERP and CRM to collaboration, testing, and automation, we've delivered a repeatable operating model that keeps systems student-ready, secure, and future-proof — an enduring example of university IT modernization done right.",
    techStack: ["PeopleSoft", "Oracle SSO", "SharePoint", "Microsoft Dynamics CRM", "RPA"],
  },

  // ── your other 4 case studies stay exactly as they were ──

  {
    id: 3,
    slug: "logistics-supply-chain-visibility",
    title: "Starfii Gives a Freight Logistics Provider Real-Time Visibility Across Its Entire Supply Chain",
    subtitle:
      "Replacing phone calls and spreadsheets with a live map of every shipment, from pickup to final delivery.",
    category: "SaaS Product Engineering & Data Analytics",
    cardDescription:
      "Starfii built a real-time shipment tracking and analytics platform for a freight logistics provider, cutting customer status-check calls by 70% and giving operations teams a live view of the entire network.",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1600&auto=format&fit=crop",
    client: "Freight Logistics Provider",
    industry: "Logistics & Supply Chain",
    services: ["SaaS Product Engineering", "Data Analytics", "Cloud Engineering"],
    overview:
      "A freight logistics provider coordinating shipments across a network of carriers, warehouses, and delivery partners had no single view of where any given shipment actually was, forcing customers and internal teams alike to chase updates by phone.",
    clientOverview:
      "The client coordinates freight shipments across a network of third-party carriers, regional warehouses, and last-mile delivery partners. Each partner in that network tracked shipment status in its own system, if it tracked it digitally at all, which meant the logistics provider's own operations team had no reliable way to answer a simple question: where is this shipment right now.",
    challengeIntro:
      "Customers wanted real-time answers about their shipments, and operations teams wanted to spot problems in the network before a customer had to call about them. Neither was possible when shipment status lived in a different system, spreadsheet, or phone call for every partner in the chain.",
    challengePoints: [
      "Shipment status data was scattered across carrier systems, warehouse logs, and manual phone updates from delivery partners.",
      "Customer service teams spent a large share of each day fielding status-check calls they couldn't answer without calling a carrier themselves.",
      "Operations had no early warning when a shipment was at risk of a delay until a customer had already noticed.",
      "Each carrier and partner used different systems and data formats, with no common standard for reporting shipment events.",
      "Historical shipment data was never aggregated, making it hard to spot recurring bottlenecks in the network.",
    ],
    solutionIntro:
      "Starfii's product engineering team built a unified tracking platform that pulls shipment events from every partner in the network into one live feed, giving both customers and operations a single source of truth for any shipment.",
    solutionDetail:
      "We built a set of lightweight integration adapters for each carrier and partner system, translating each one's own status format into a common shipment-event schema rather than forcing partners to change how they operate. Those events stream into a real-time platform that reconstructs each shipment's full journey as it happens, from pickup through every handoff to final delivery. On top of that live feed, we built a customer-facing tracking view and an internal operations dashboard that flags shipments falling behind their expected timeline, using historical route data to establish what an on-time shipment actually looks like for each lane.",
    solution: [
      "Built integration adapters that normalize shipment status from every carrier and partner system into one common event schema.",
      "Delivered a real-time tracking platform that reconstructs each shipment's full journey from pickup to final delivery.",
      "Built a customer-facing tracking view so customers can check shipment status themselves without calling support.",
      "Designed an operations dashboard that flags shipments falling behind their expected timeline before customers notice.",
    ],
    results: [
      { metric: "70%", label: "Reduction in customer status-check calls" },
      { metric: "1", label: "Unified live view of the entire shipment network" },
      { metric: "35%", label: "Faster identification of at-risk shipments" },
      { metric: "20+", label: "Carrier and partner systems integrated" },
    ],
    benefitsIntro:
      "A single live view of the network changed how both customers and operations teams experienced the shipping process.",
    benefits: [
      "Customers check shipment status themselves in real time instead of calling support for an update.",
      "Operations teams see shipments falling behind schedule while there's still time to intervene, not after a customer complains.",
      "Recurring bottlenecks in specific lanes or partners are now visible in aggregated historical data instead of anecdotal.",
      "New carrier and partner systems can be connected through the same adapter pattern without disrupting existing integrations.",
    ],
    summary:
      "Starfii replaced a fragmented network of phone calls and spreadsheets with one real-time tracking platform spanning more than 20 carrier and partner systems. Customer status-check calls are down 70%, at-risk shipments get flagged 35% faster, and for the first time, operations teams and customers alike can see exactly where any shipment is, at any moment.",
    techStack: ["React", "Node.js", "AWS", "Kafka", "Mapbox"],
  },
  {
    id: 4,
    slug: "streaming-personalization-engine",
    title: "Starfii Builds a Recommendation Engine That Lifts Watch Time 28% for a Streaming Platform",
    subtitle:
      "Replacing generic content rows with a personalization engine that learns what each viewer actually wants to watch next.",
    category: "Enterprise AI/ML & Data Engineering",
    cardDescription:
      "Starfii designed and deployed a machine learning recommendation engine for a streaming platform, personalizing content discovery and lifting average watch time per user by 28%.",
    image:
      "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=800&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=1600&auto=format&fit=crop",
    client: "Streaming Media Platform",
    industry: "Media & Entertainment",
    services: ["Machine Learning", "Data Engineering", "Cloud Engineering"],
    overview:
      "A streaming platform with a growing content library found that most viewers never made it past the same handful of generic, editorially-curated rows on the home screen, leaving most of the catalog undiscovered.",
    clientOverview:
      "The client operates a subscription streaming platform with a content library spanning original productions and licensed titles across many genres. The home screen was built around editorially curated rows, updated manually by a content team, which worked well for the platform's most popular titles but did little to help viewers discover anything outside of what was already being promoted.",
    challengeIntro:
      "Leadership wanted every viewer's home screen to reflect what they actually liked to watch, not a single curated experience shown to everyone. That meant moving from manual curation to a system that could learn and adapt per viewer, without losing the editorial judgment that made the platform's taste distinctive.",
    challengePoints: [
      "Home screen rows were manually curated and identical for every viewer, regardless of individual watch history.",
      "Most of the content library outside a small set of promoted titles went largely undiscovered.",
      "The platform had rich viewing behavior data but no system turning it into personalized recommendations.",
      "New and niche titles struggled to find an audience without a spot in the manually curated rows.",
      "The content team worried that automated recommendations would flatten the platform's distinct editorial voice.",
    ],
    solutionIntro:
      "Starfii's machine learning team built a recommendation engine that personalizes content discovery for each viewer, designed from the start to work alongside the content team's editorial judgment rather than replace it.",
    solutionDetail:
      "We built a data pipeline that captures viewing behavior, ratings, and engagement signals as they happen, feeding both a collaborative filtering model and a content-based model that understands genre, cast, and thematic similarity between titles. The two models' outputs are blended per viewer, so someone with a long watch history gets recommendations driven mostly by their own behavior, while a new viewer with little history leans more heavily on content-based similarity and editorial signals until the system has enough data to personalize further. Editorial teams retained control over a subset of home screen rows specifically reserved for curated picks, so the platform's distinct voice stayed alongside, not replaced by, the personalized rows.",
    solution: [
      "Built a real-time viewing behavior pipeline capturing watch history, ratings, and engagement signals per viewer.",
      "Deployed a blended collaborative-filtering and content-based recommendation model personalized to each viewer's watch history.",
      "Designed the model to lean on content-based similarity for new viewers with limited watch history, personalizing further over time.",
      "Preserved dedicated editorial rows alongside personalized rows so curated picks remained part of the home screen experience.",
    ],
    results: [
      { metric: "28%", label: "Increase in average watch time per user" },
      { metric: "45%", label: "Increase in catalog titles discovered outside the top 100" },
      { metric: "19%", label: "Reduction in subscriber churn" },
      { metric: "2", label: "Recommendation models blended per viewer" },
    ],
    benefitsIntro:
      "Personalized recommendations changed how much of the catalog viewers actually watched, without pushing editorial curation aside.",
    benefits: [
      "Viewers now see a home screen shaped by their own watch history instead of one identical experience for everyone.",
      "New and niche titles reach viewers likely to enjoy them, instead of relying solely on a spot in curated rows.",
      "New viewers with little watch history still get relevant recommendations through content-based similarity from day one.",
      "The content team's curated rows remain a visible, distinct part of the home screen alongside personalized recommendations.",
    ],
    summary:
      "Starfii built a recommendation engine that gave every viewer a personalized home screen while preserving the platform's editorial voice. Average watch time per user is up 28%, catalog discovery beyond the top 100 titles is up 45%, and subscriber churn has dropped 19% — proof that personalization and curation could work side by side rather than in competition.",
    techStack: ["Python", "AWS", "Spark", "TensorFlow", "Kafka"],
  },
  {
    id: 5,
    slug: "healthcare-telemedicine-platform",
    title: "Starfii Launches a HIPAA-Compliant Telemedicine Platform in Under Four Months",
    subtitle:
      "Connecting patients and providers with a secure, scalable virtual care platform built for rapid growth.",
    category: "Healthcare Software Engineering & Compliance",
    cardDescription:
      "Starfii built a HIPAA-compliant telemedicine platform for a healthcare provider network, enabling secure video visits, e-prescriptions, and EHR integration, and cutting patient no-show rates by 32%.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop",
    client: "Multi-Specialty Healthcare Provider Network",
    industry: "Healthcare & Life Sciences",
    services: ["Healthcare Software Engineering", "Cloud Engineering", "Compliance & Security"],
    overview:
      "A multi-specialty healthcare provider network needed to launch virtual care quickly to keep pace with patient demand, but had no existing infrastructure that met HIPAA requirements for video, messaging, or e-prescriptions.",
    clientOverview:
      "The client operates a network of outpatient clinics across multiple specialties, from primary care to behavioral health. Patient demand for virtual visits had grown well beyond what phone consultations could support, but every off-the-shelf video tool the network evaluated either failed to meet HIPAA compliance requirements or couldn't integrate with the provider network's existing electronic health record system.",
    challengeIntro:
      "Leadership needed a telemedicine platform patients would actually use and providers could trust with real clinical workflows, built fast enough to matter and compliant enough to survive an audit.",
    challengePoints: [
      "No existing video or messaging tool met HIPAA requirements for handling protected health information.",
      "Providers needed virtual visits to fit directly into existing clinical workflows, not a separate disconnected tool.",
      "Patient no-show rates for virtual pilot programs were high due to a confusing, multi-step join process.",
      "E-prescriptions and visit notes had to sync directly with the network's existing EHR system.",
      "The platform needed to scale from a handful of pilot clinics to the entire provider network within months.",
    ],
    solutionIntro:
      "Starfii's healthcare engineering team designed and built a purpose-built telemedicine platform from the ground up, prioritizing HIPAA compliance and EHR integration from day one rather than retrofitting them later.",
    solutionDetail:
      "We built the video and messaging layer on infrastructure specifically configured for HIPAA compliance, with end-to-end encryption and full audit logging on every patient interaction. Rather than requiring patients to download an app or create an account before their first visit, we built a one-click join flow accessible directly from a text or email link, which addressed the biggest driver of no-shows in the pilot program. On the provider side, we built direct integration with the network's EHR system so visit notes, e-prescriptions, and billing codes flowed into existing records automatically instead of requiring manual re-entry after every visit.",
    solution: [
      "Built a HIPAA-compliant video and messaging platform with end-to-end encryption and full audit logging.",
      "Designed a one-click patient join flow from a text or email link, removing app downloads and account creation as barriers.",
      "Integrated e-prescriptions, visit notes, and billing codes directly with the provider network's existing EHR system.",
      "Architected the platform to scale from pilot clinics to the full provider network without re-engineering core infrastructure.",
    ],
    results: [
      { metric: "32%", label: "Reduction in patient no-show rates" },
      { metric: "4 mo", label: "Time from kickoff to full network launch" },
      { metric: "100%", label: "HIPAA-compliant audit pass rate" },
      { metric: "40+", label: "Clinics onboarded across the network" },
    ],
    benefitsIntro:
      "A compliant, easy-to-join platform changed how both patients and providers experienced virtual care.",
    benefits: [
      "Patients join visits directly from a link without downloading an app or creating an account.",
      "Providers document visits once, with notes and prescriptions flowing automatically into the EHR.",
      "Compliance teams have full audit logs on every patient interaction for HIPAA reporting.",
      "New clinics onboard onto the same platform without custom engineering per location.",
    ],
    summary:
      "Starfii took this healthcare network from no virtual care infrastructure to a fully HIPAA-compliant telemedicine platform live across more than 40 clinics in under four months. Patient no-show rates are down 32%, providers document visits directly into existing EHR workflows, and the network now has virtual care built to scale rather than a pilot program stretched thin.",
    techStack: ["React", "Node.js", "AWS", "WebRTC", "HL7/FHIR"],
  },
  {
    id: 6,
    slug: "retail-ecommerce-fulfillment-optimization",
    title: "Starfii Cuts Order Fulfillment Time 50% for a Fast-Growing E-Commerce Retailer",
    subtitle:
      "Rebuilding order routing and warehouse logic so every order takes the fastest path from cart to doorstep.",
    category: "E-Commerce Engineering & Supply Chain Optimization",
    cardDescription:
      "Starfii rebuilt the order routing and warehouse management logic for a fast-growing e-commerce retailer, cutting average fulfillment time in half and reducing shipping costs by 22%.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1600&auto=format&fit=crop",
    client: "Fast-Growing E-Commerce Retailer",
    industry: "Retail & E-Commerce",
    services: ["E-Commerce Engineering", "Supply Chain Optimization", "Data Analytics"],
    overview:
      "A fast-growing e-commerce retailer operating multiple warehouses was routing orders with simple, static rules that ignored real-time inventory and shipping cost, leaving fulfillment slow and expensive as order volume scaled.",
    clientOverview:
      "The client sells direct-to-consumer products through its own e-commerce storefront, fulfilling orders from a growing network of regional warehouses. As the warehouse network expanded, the original order-routing logic, built when the company ran a single warehouse, never caught up. Orders were routed based on fixed rules rather than which warehouse could actually fulfill and ship the order fastest and cheapest.",
    challengeIntro:
      "Leadership needed fulfillment to scale with the warehouse network instead of against it, routing every order to the right warehouse the first time instead of relying on rules built for a single-warehouse business.",
    challengePoints: [
      "Order routing used static rules that ignored real-time inventory levels across warehouses.",
      "Orders were frequently split across multiple warehouses unnecessarily, driving up shipping costs.",
      "Warehouse teams had no visibility into incoming order volume until orders had already been routed.",
      "Shipping cost was not a factor in routing decisions, even when a closer warehouse had stock available.",
      "The routing logic could not scale cleanly as new warehouses were added to the network.",
    ],
    solutionIntro:
      "Starfii's e-commerce engineering team rebuilt order routing around real-time inventory and shipping cost, giving the retailer a system that finds the fastest, cheapest fulfillment path for every order automatically.",
    solutionDetail:
      "We built a real-time inventory sync layer connecting every warehouse's stock levels into a single system, replacing the periodic batch updates that had made routing decisions stale by the time they were made. On top of that live inventory view, we built a routing engine that evaluates stock availability, warehouse capacity, and shipping cost together for every order, splitting an order across warehouses only when it was genuinely the fastest or cheapest option rather than a routing default. Warehouse teams also gained a forecast view showing expected incoming order volume, so staffing and pick schedules could be planned ahead instead of reacting to orders as they landed.",
    solution: [
      "Built a real-time inventory sync layer giving every warehouse a live, shared view of stock across the network.",
      "Deployed a routing engine that evaluates stock, warehouse capacity, and shipping cost together for every order.",
      "Reduced unnecessary order splitting by routing to the single best warehouse whenever possible.",
      "Gave warehouse teams a forecast view of incoming order volume to plan staffing and pick schedules ahead of time.",
    ],
    results: [
      { metric: "50%", label: "Reduction in average order fulfillment time" },
      { metric: "22%", label: "Reduction in shipping costs" },
      { metric: "60%", label: "Fewer orders unnecessarily split across warehouses" },
      { metric: "12", label: "Warehouses connected to the routing engine" },
    ],
    benefitsIntro:
      "Real-time routing changed fulfillment from a fixed set of rules into a system that adapts as the warehouse network grows.",
    benefits: [
      "Orders route to the warehouse that can fulfill and ship them fastest, based on live inventory instead of static rules.",
      "Shipping costs dropped as the routing engine started factoring cost into every decision.",
      "Warehouse teams plan staffing ahead of time using forecasted order volume instead of reacting in real time.",
      "New warehouses join the routing network without requiring custom rule changes.",
    ],
    summary:
      "Starfii replaced static, single-warehouse order routing with a real-time engine that factors in inventory, capacity, and shipping cost for every order. Average fulfillment time is down 50%, shipping costs are down 22%, and this retailer's warehouse network now scales as a coordinated system instead of a set of disconnected locations.",
    techStack: ["Node.js", "React", "AWS", "PostgreSQL", "Redis"],
  },

  {
    id: 7,
    slug: "4-week-amaze-accelerated-assessment-data-platform-modernization",
    title: "4-Week Amaze®-Accelerated Assessment for Data Platform Modernization",
    subtitle:
      "How a 30-year legal services firm chose Microsoft Fabric, cut costs 35–40%, and sped up time-to-market by 60% with an Amaze®-accelerated assessment.",
    category: "Data Platform Modernization & Cloud Migration",
    cardDescription:
      "A US legal services firm with 30+ years of fragmented legacy data ran Starfii's automated Amaze® assessment — choosing Microsoft Fabric, speeding time-to-market by 60%, and cutting cost by 35–40% within 4 weeks.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1600&auto=format&fit=crop",
    client: "US-Headquartered Legal Services Provider",
    industry: "Legal Services",
    services: ["Data Platform Modernization", "Cloud Migration Assessment", "Amaze® Platform"],
    overview: "A prominent US legal services firm serving Fortune 500 companies and startups",
    clientOverview:
      "The US-headquartered legal services provider is a prominent firm known for serving a diverse range of clients, including Fortune 500 companies and innovative startups. With expertise across industries such as technology, finance, and healthcare, it offers comprehensive legal support in areas like mergers and acquisitions, litigation, and regulatory compliance, with a strong focus on customer experience.",
    challengeIntro:
      "Modernize a 30-year legacy data estate while minimizing downtime and cost overruns",
    challengePoints: [
      "Legacy System Complexity: aging and fragmented data platform led to high maintenance costs and limited scalability.",
      "Migration Risks: the client needed a seamless migration with minimal disruption to daily operations.",
      "Modernization Strategy: a systematic assessment of existing infrastructure was required to determine the best path to cloud adoption.",
      "Evaluation of Hyperscaler Options: the client needed to assess and choose between three major hyperscalers — Snowflake, Microsoft Fabric, and Databricks.",
    ],
    solutionIntro: "An Amaze®-accelerated assessment across three leading hyperscalers",
    solutionDetail:
      "Starfii proposed the Amaze® Data and AI platform to accelerate the data modernization assessment process. Microsoft Fabric emerged as the ideal platform for scalable architecture that simplifies data workflows and unifies enterprise data with a single platform, centralizing data discovery, governance, and analytics. Its seamless integration with Power BI, Azure Data Lake, and Synapse Analytics ensured data engineering, storage, and visualization stayed interconnected in one cohesive environment.",
    solution: [
      "Comprehensive Assessment: evaluated the client's data landscape across 16 parameters, comparing all three hyperscalers.",
      "Assessment Acceleration and Automation: used the Amaze® platform to automate key processes, cutting the time and effort required.",
      "Systematic Modernization Strategy: guided the client to select Microsoft Fabric as the preferred hyperscaler platform based on fit.",
      "Metadata-Driven Insights: surfaced actionable insight into optimizing and consolidating data objects ahead of migration.",
    ],
    
    results: [
      { metric: "4 Weeks", label: "Complete data estate assessment" },
      { metric: "60%", label: "Improvement in time to market" },
      { metric: "35–40%", label: "More cost-efficient assessment approach" },
      { metric: "3", label: "Hyperscaler platforms evaluated across 16 parameters" },
    ],
    benefitsIntro: "A faster, more cost-efficient path to cloud modernization",
    benefits: [
      "Comprehensive data estate assessment within 4 weeks: Automated assessments completed within 4 weeks significantly enhanced time to market.",
      "Accelerated and automated assessment: The assessment process was expedited, resulting in a 60% improved time to market.",
      "35 to 40 percent more cost efficient: The approach was 35–40% more cost-effective, reducing overheads and operational costs.",
    ],
    summary:
      "Starfii successfully enabled the client to modernize their legacy data platform by leveraging the Amaze® platform for a systematic, automated, and efficient assessment for their move to Microsoft Fabric. Our case exemplifies the power of innovative tools and processes in driving digital transformation for businesses with complex legacy systems.",
    techStack: ["Microsoft Fabric", "Power BI", "Azure Data Lake", "Synapse Analytics", "Amaze® Platform"],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
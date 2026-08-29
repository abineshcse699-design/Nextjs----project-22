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
    slug: "digital-banking-core-modernization",
    title: "Starfii Modernizes Core Banking Infrastructure for a Mid-Size Digital Bank",
    subtitle:
      "Replacing a brittle monolithic core with a resilient, API-first banking platform without a single day of customer-facing downtime.",
    category: "Legacy Modernization & Cloud Engineering",
    cardDescription:
      "Starfii re-platformed a digital bank's core ledger and account services onto a modern, API-first architecture, cutting transaction latency by 65% and enabling the bank to launch new products in weeks instead of quarters.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1600&auto=format&fit=crop",
    client: "Mid-Size Digital Bank",
    industry: "Banking & Financial Services",
    services: ["Legacy Modernization", "Cloud Engineering", "API Platform Engineering"],
    overview:
      "A fast-growing digital bank had outgrown the monolithic core banking system it launched on. Every new product, from savings accounts to a card program, meant months of custom work against a system that was never designed to be extended this far.",
    clientOverview:
      "The client is a licensed digital bank offering checking, savings, and card products directly to consumers through a mobile-first experience. Its original core banking system was built quickly to get the bank to market, using a single monolithic codebase that combined ledger logic, account servicing, and compliance checks in one tightly coupled application. As the customer base and product catalog grew, that same system became the bank's biggest constraint rather than its foundation.",
    challengeIntro:
      "The bank needed to keep shipping new products on a competitive timeline, but its core system made every change slower and riskier than the one before it. Leadership needed a path to a modern core that didn't require pausing the roadmap for a year to get there.",
    challengePoints: [
      "Ledger, account servicing, and compliance logic were tightly coupled in one monolith, so small changes carried outsized regression risk.",
      "Peak-hour transaction volume routinely pushed latency past customer-acceptable thresholds.",
      "Launching a new product, such as a card program, required months of custom engineering against a system not designed for extension.",
      "The engineering team had no safe way to test core changes without risking live customer balances and transactions.",
      "Compliance and audit reporting depended on direct queries against the production ledger, adding load during the bank's busiest hours.",
    ],
    solutionIntro:
      "Starfii's cloud engineering team designed a phased, strangler-pattern migration — building the new core alongside the old one and moving traffic over incrementally, rather than attempting a single high-risk cutover of a live bank.",
    solutionDetail:
      "We started by extracting the ledger into its own service with a well-defined API contract, running it in shadow mode against real production traffic so every transaction could be verified against the legacy system before the new service was trusted with any live balance. Account servicing and compliance checks were split into independently deployable services behind the same API gateway, which let separate engineering teams ship changes to each without touching the others. Each service was migrated in order of risk, starting with read-only reporting queries and ending with the ledger itself, so the bank always had a safe rollback path at every stage of the migration.",
    solution: [
      "Extracted the monolithic core into independently deployable ledger, account servicing, and compliance services behind a single API gateway.",
      "Ran the new ledger service in shadow mode against live production traffic to validate correctness before cutting over any real balances.",
      "Migrated services in order of risk, starting with read-only reporting and ending with the transactional ledger itself.",
      "Built a dedicated sandbox environment so engineers could test core changes against realistic data without touching production.",
    ],
    results: [
      { metric: "65%", label: "Reduction in peak transaction latency" },
      { metric: "0", label: "Customer-facing outages during migration" },
      { metric: "3x", label: "Faster time-to-launch for new products" },
      { metric: "4", label: "Independently deployable core services" },
    ],
    benefitsIntro:
      "With the monolith broken apart, the bank's engineering teams could finally ship independently — and leadership could trust the core to hold up under growth.",
    benefits: [
      "Product teams ship changes to account servicing without waiting on ledger or compliance release cycles.",
      "Compliance reporting now runs against a dedicated read replica instead of competing with live transactions for capacity.",
      "New product launches that once took months of custom core work now ship in weeks against documented APIs.",
      "Engineers test core changes safely in a realistic sandbox before anything reaches production.",
    ],
    summary:
      "Starfii helped this digital bank replace a brittle monolithic core with an API-first platform, migrated in careful phases with zero customer-facing downtime. The bank now processes transactions 65% faster, ships new products three times as quickly, and finally has a core architecture built to grow with it rather than against it.",
    techStack: ["Kotlin", "AWS", "PostgreSQL", "Kafka", "Kubernetes"],
  },
  {
    id: 2,
    slug: "manufacturing-predictive-maintenance",
    title: "Starfii Builds a Predictive Maintenance Platform That Cuts Unplanned Downtime by 40%",
    subtitle:
      "Turning years of sensor data into early warnings, before a breakdown becomes a production line stoppage.",
    category: "IoT Engineering & Data Science",
    cardDescription:
      "Starfii connected a manufacturer's plant-floor equipment to a predictive maintenance platform, using machine learning on sensor data to flag failures before they happen and cutting unplanned downtime by 40%.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop",
    client: "Industrial Equipment Manufacturer",
    industry: "Manufacturing",
    services: ["IoT Engineering", "Data Science", "Cloud Engineering"],
    overview:
      "An industrial equipment manufacturer running multiple production lines was losing significant time to unplanned equipment failures that maintenance teams only discovered after a breakdown had already stopped the line.",
    clientOverview:
      "The client manufactures heavy industrial equipment across several production facilities, each running dozens of machines on tight production schedules. Maintenance had historically been reactive: teams fixed machines after they failed, or performed maintenance on a fixed calendar schedule regardless of a machine's actual condition. Both approaches meant either unnecessary downtime for healthy machines or unplanned downtime for machines that failed between scheduled checks.",
    challengeIntro:
      "Plant managers needed to know which machines actually needed attention and when, instead of guessing on a fixed schedule or waiting for something to break. Getting there required turning years of underused sensor data into something maintenance teams could actually act on.",
    challengePoints: [
      "Equipment failures were typically discovered only after they had already stopped a production line.",
      "Fixed-schedule maintenance meant healthy machines were serviced unnecessarily while others failed between checks.",
      "Sensor data from plant-floor equipment was collected but never analyzed beyond basic threshold alarms.",
      "Maintenance teams had no way to prioritize which of dozens of machines needed attention first.",
      "Each production facility ran different equipment vendors and sensor formats, with no unified way to compare machine health across sites.",
    ],
    solutionIntro:
      "Starfii's IoT and data science team built a predictive maintenance platform that ingests sensor data from every connected machine, models normal versus degrading behavior, and surfaces early warnings to maintenance teams before a failure occurs.",
    solutionDetail:
      "The first phase focused on getting clean, normalized data flowing from every machine across every facility, regardless of vendor or sensor format, into a single time-series store. From there, we trained failure-prediction models on years of historical sensor readings paired with maintenance logs, learning the specific vibration, temperature, and pressure patterns that preceded a real failure on each equipment type. Rather than a single generic model, each major equipment class got its own tuned model, since a bearing failure pattern on one machine type looks nothing like a motor failure pattern on another. Predictions surface in a maintenance dashboard ranked by urgency, so plant managers can prioritize a short list of machines instead of monitoring dozens of raw sensor feeds.",
    solution: [
      "Connected plant-floor equipment across facilities to a unified IoT data pipeline, normalizing sensor data regardless of vendor or format.",
      "Trained equipment-specific machine learning models on historical sensor data and maintenance logs to detect early failure signatures.",
      "Built a maintenance dashboard that ranks equipment by predicted failure risk instead of surfacing raw sensor alarms.",
      "Integrated predictions with the existing maintenance scheduling system so flagged machines are automatically prioritized.",
    ],
    results: [
      { metric: "40%", label: "Reduction in unplanned downtime" },
      { metric: "25%", label: "Reduction in unnecessary scheduled maintenance" },
      { metric: "6", label: "Production facilities connected to the platform" },
      { metric: "72 hrs", label: "Average early-warning lead time before failure" },
    ],
    benefitsIntro:
      "With failure predictions instead of fixed schedules, maintenance teams shifted from reacting to failures to preventing them.",
    benefits: [
      "Maintenance teams now receive a ranked list of at-risk machines instead of monitoring dozens of raw sensor alarms.",
      "Healthy machines are no longer pulled from production for unnecessary scheduled servicing.",
      "Plant managers get an average of 72 hours of warning before a predicted failure, enough time to schedule a repair without stopping a line.",
      "All six facilities report equipment health through one unified dashboard despite running different equipment vendors.",
    ],
    summary:
      "Starfii turned years of underused sensor data into a predictive maintenance platform that gives this manufacturer's teams a 72-hour head start on equipment failures. Unplanned downtime is down 40%, unnecessary scheduled maintenance is down 25%, and plant managers across six facilities now work from one ranked view of equipment health instead of dozens of disconnected alarms.",
    techStack: ["Python", "AWS IoT Core", "TensorFlow", "TimescaleDB", "Grafana"],
  },
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

];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
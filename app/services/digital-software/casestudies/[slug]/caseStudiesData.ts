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
    slug: "insurance-claims-low-code-platform",
    title: "Starfii Transforms Reinsurance Claims Management with a Low Code Platform",
    subtitle:
      "Replacing manual, paper-heavy claims workflows with a low code platform that gets claims resolved in days, not weeks.",
    category: "Low Code Engineering & Workflow Automation",
    cardDescription:
      "Starfii built a low code claims management platform for a global reinsurer, automating manual workflows and cutting average claims processing time by 55%.",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=800&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1600&auto=format&fit=crop",
    client: "Global Reinsurance Provider",
    industry: "Insurance",
    services: ["Low Code Engineering", "Workflow Automation", "Cloud Engineering"],
    overview:
      "A global reinsurer processing thousands of claims a month was relying on email chains, spreadsheets, and manual handoffs between adjusters, underwriters, and finance teams to move a single claim from intake to payout.",
    clientOverview:
      "The client is a global reinsurance provider that underwrites and settles claims on behalf of primary insurers across multiple lines of business. Claims moved through several internal teams before payout, but each handoff happened over email or shared spreadsheets, with no single system tracking a claim's actual status. Adjusters, underwriters, and finance each kept their own version of the truth.",
    challengeIntro:
      "Leadership needed claims to move through the organization on a predictable timeline, with full visibility into where every claim stood, instead of chasing status updates across teams and inboxes.",
    challengePoints: [
      "Claims moved between adjusters, underwriters, and finance through email and shared spreadsheets with no single source of truth.",
      "No one outside the team currently holding a claim could see its real status without asking directly.",
      "Manual data entry between systems introduced errors that triggered rework and delayed payouts.",
      "Approval routing followed inconsistent, undocumented rules that varied by team and claim type.",
      "Audit and compliance reporting required manually reconstructing a claim's history after the fact.",
    ],
    solutionIntro:
      "Starfii's low code engineering team built a claims management platform that models the entire claims lifecycle as a single, visible workflow, automating handoffs that previously depended on manual follow-up.",
    solutionDetail:
      "We modeled every stage of the claims lifecycle, from intake through adjustment, underwriting review, and final payout, as a configurable workflow on a low code platform, which let the business team adjust approval rules without waiting on a full engineering release cycle. Each handoff between teams now happens automatically inside the platform, with the claim's full history, documents, and notes attached, so no one has to re-key the same information into a different system. We also built a reporting layer on top of the workflow data, giving compliance teams instant access to any claim's complete audit trail instead of reconstructing it after the fact.",
    solution: [
      "Modeled the full claims lifecycle as a configurable low code workflow spanning intake, adjustment, underwriting, and payout.",
      "Automated handoffs between adjusters, underwriters, and finance so claims move without manual follow-up.",
      "Gave business teams the ability to adjust approval rules directly in the platform without engineering releases.",
      "Built a reporting layer providing instant, complete audit trails for any claim on demand.",
    ],
    results: [
      { metric: "55%", label: "Reduction in average claims processing time" },
      { metric: "1", label: "Single source of truth for every claim's status" },
      { metric: "30%", label: "Reduction in data entry errors and rework" },
      { metric: "100%", label: "Claims with a complete, on-demand audit trail" },
    ],
    benefitsIntro:
      "A single visible workflow turned claims processing from a chase for updates into a predictable, trackable process.",
    benefits: [
      "Every team can see a claim's exact status without emailing another team to ask.",
      "Business teams update approval rules themselves as policies change, without waiting on engineering.",
      "Compliance teams pull a complete audit trail for any claim in seconds instead of reconstructing it manually.",
      "Claims data flows between stages automatically, eliminating repeated manual entry and its errors.",
    ],
    summary:
      "Starfii replaced a manual, email-driven claims process with a low code platform that gives this reinsurer a single, visible workflow from intake to payout. Average claims processing time is down 55%, data entry errors are down 30%, and every claim now carries a complete, instantly accessible audit trail.",
    techStack: ["Mendix", "Node.js", "AWS", "PostgreSQL", "Power BI"],
  },
  {
    id: 6,
    slug: "regional-bank-digital-banking-experience",
    title: "Starfii Builds a Modern Digital Banking Experience for a Regional Bank",
    subtitle:
      "Replacing a dated, form-heavy banking front end with a fast, secure digital experience customers actually enjoy using.",
    category: "SaaS Product Engineering & UI/UX",
    cardDescription:
      "Starfii rebuilt a regional bank's legacy digital banking front end into a fast, secure experience, cutting account opening time and lifting customer satisfaction scores.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop",
    client: "Regional Retail Bank",
    industry: "Banking & Financial Services",
    services: ["SaaS Product Engineering", "UI/UX Consulting", "Cloud Engineering"],
    overview:
      "A regional bank's online and mobile banking experience had not been meaningfully redesigned in years, and customers increasingly compared it unfavorably to newer digital-first competitors.",
    clientOverview:
      "The client is a regional retail bank serving individual and small business customers through a network of branches and a digital banking platform built more than a decade ago. That platform had been extended feature by feature over the years without a cohesive design system, resulting in inconsistent navigation, dated visual design, and a multi-step account opening process that pushed many applicants to abandon halfway through.",
    challengeIntro:
      "The bank needed a digital banking experience that matched customer expectations set by newer competitors, without a multi-year replatform of every backend system underneath it.",
    challengePoints: [
      "Account opening required a long, multi-page form flow that a large share of applicants abandoned before completion.",
      "Years of feature additions left the interface inconsistent, with no unified design system across products.",
      "Customers frequently contacted support for tasks that should have been self-service within the app.",
      "The existing front end was tightly coupled to legacy backend systems, making redesign risky without breaking core functionality.",
      "Customer satisfaction scores for the digital experience lagged well behind the bank's in-branch service ratings.",
    ],
    solutionIntro:
      "Starfii's product engineering and UI/UX teams redesigned the digital banking front end around a unified design system, layering the new experience over existing backend systems rather than replacing them outright.",
    solutionDetail:
      "We started with research into where customers actually dropped off during account opening and everyday banking tasks, then redesigned those flows around a new, unified design system built for consistency across web and mobile. Rather than rewriting the bank's core backend systems, we built a modern API layer in front of them, letting the new front end move fast without waiting on a parallel backend migration. The account opening flow was rebuilt as a shorter, progressive form that saves a customer's progress and only asks for information at the point it's actually needed, rather than front-loading every field at once.",
    solution: [
      "Redesigned the digital banking experience around a unified design system spanning web and mobile.",
      "Built a modern API layer in front of existing backend systems, decoupling the new front end from a full backend rewrite.",
      "Rebuilt account opening as a shorter, progressive flow that saves progress and requests information only when needed.",
      "Added self-service flows for the most common support requests, reducing reliance on live support agents.",
    ],
    results: [
      { metric: "45%", label: "Reduction in account opening abandonment" },
      { metric: "38%", label: "Increase in customer satisfaction scores for digital banking" },
      { metric: "30%", label: "Reduction in support contacts for self-service tasks" },
      { metric: "1", label: "Unified design system across web and mobile" },
    ],
    benefitsIntro:
      "A redesigned, consistent digital experience closed much of the gap between the bank's digital and in-branch service ratings.",
    benefits: [
      "New customers complete account opening in a fraction of the steps the old flow required.",
      "Customers resolve common tasks themselves in the app instead of contacting support.",
      "Product teams ship new features faster against a consistent design system instead of one-off patterns.",
      "The bank can now evolve its front end independently of backend system timelines.",
    ],
    summary:
      "Starfii rebuilt this regional bank's digital banking experience around a unified design system and a modern API layer, without requiring a disruptive backend replatform. Account opening abandonment is down 45%, digital customer satisfaction scores are up 38%, and the bank now ships new digital features on its own timeline.",
    techStack: ["React", "TypeScript", "Node.js", "AWS", "GraphQL"],
  },
  {
    id: 7,
    slug: "utilities-digital-transformation-microsoft",
    title: "Digital Transformation in Utilities Powered by Microsoft Business Applications",
    subtitle:
      "Giving field crews and control room teams the same real-time view of the grid for the first time.",
    category: "Enterprise Applications & Field Operations",
    cardDescription:
      "Starfii used Microsoft Business Applications to modernize a utilities provider's field operations, giving crews and control room teams real-time visibility across the grid.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop",
    client: "Regional Utilities Provider",
    industry: "Utilities & Energy",
    services: ["Enterprise Applications", "Microsoft Business Applications", "Cloud Engineering"],
    overview:
      "A regional utilities provider's field crews were working from paper work orders and radio updates, while the control room had no real-time visibility into where crews were or how a job was actually progressing.",
    clientOverview:
      "The client delivers electricity and gas service across a large regional territory, coordinating field crews who handle everything from routine maintenance to emergency outage response. Work orders were dispatched on paper or over radio, and crews reported progress the same way, which meant the control room's picture of grid status and crew location was often minutes to hours out of date.",
    challengeIntro:
      "Control room teams needed to see crew location, job status, and grid conditions in real time, especially during outages, instead of relying on radio updates that lagged behind what was actually happening in the field.",
    challengePoints: [
      "Field crews received and reported on work orders through paper forms and radio calls with no digital record.",
      "The control room had no real-time view of crew location or job progress during active outages.",
      "Outage response coordination relied on manual radio traffic, slowing decisions during high-pressure incidents.",
      "Historical work order data was scattered across paper archives, making it hard to analyze recurring grid issues.",
      "Crews in the field had no mobile access to asset history or job details before arriving on site.",
    ],
    solutionIntro:
      "Starfii implemented Microsoft Business Applications to connect field crews and the control room on one real-time system, replacing paper work orders and radio updates with a live digital view of every job and asset.",
    solutionDetail:
      "We built a mobile field application on Microsoft Power Platform giving crews digital work orders, asset history, and job checklists directly on their devices, with offline support for areas with poor connectivity. Crew locations and job status updates sync in real time into a control room dashboard built on Power BI and Dynamics 365, giving dispatchers a live view of the entire territory during both routine operations and active outages. We also digitized historical work order archives into the same system, so recurring issues on specific grid segments became visible in aggregated reporting for the first time.",
    solution: [
      "Built a mobile field application on Microsoft Power Platform with offline support for digital work orders and asset history.",
      "Connected crew location and job status into a real-time control room dashboard built on Power BI and Dynamics 365.",
      "Replaced radio-based outage coordination with live digital job tracking visible to the whole control room.",
      "Digitized historical work order records to surface recurring issues on specific grid segments through aggregated reporting.",
    ],
    results: [
      { metric: "50%", label: "Faster crew dispatch during active outages" },
      { metric: "100%", label: "Field jobs tracked digitally, up from paper-based" },
      { metric: "35%", label: "Reduction in average outage response time" },
      { metric: "1", label: "Unified real-time view of crews and grid status" },
    ],
    benefitsIntro:
      "Real-time visibility changed how quickly and confidently the control room could respond to conditions across the grid.",
    benefits: [
      "Dispatchers see crew location and job status live instead of waiting on radio updates.",
      "Field crews arrive on site with full asset history and job details already on their device.",
      "Outage response decisions happen faster with a shared, real-time picture of the territory.",
      "Recurring grid issues surface in reporting instead of staying buried in paper archives.",
    ],
    summary:
      "Starfii connected this utilities provider's field crews and control room on one real-time system built on Microsoft Business Applications. Outage response time is down 35%, dispatch during active outages is 50% faster, and for the first time, every field job is tracked digitally from assignment to completion.",
    techStack: ["Microsoft Power Platform", "Dynamics 365", "Power BI", "Azure", "SharePoint"],
  },
  {
    id: 8,
    slug: "digital-mortgage-automation",
    title: "Starfii Automates the Digital Mortgage Application Process",
    subtitle:
      "Shrinking mortgage approval from weeks to days with intelligent automation that keeps every step compliant.",
    category: "Intelligent Automation & FinTech Engineering",
    cardDescription:
      "Starfii automated a lender's mortgage application process end to end, shortening approval cycles from weeks to days while keeping every step fully auditable.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop",
    client: "Residential Mortgage Lender",
    industry: "Banking & Financial Services",
    services: ["Intelligent Automation", "FinTech Engineering", "Cloud Engineering"],
    overview:
      "A residential mortgage lender's application process depended heavily on loan officers manually collecting, verifying, and re-keying borrower documents across multiple internal systems, stretching approvals out over several weeks.",
    clientOverview:
      "The client is a residential mortgage lender processing applications from borrowers working with loan officers across a network of branches. Each application required collecting income statements, tax documents, and credit information, then manually verifying and entering that data into underwriting and compliance systems that didn't talk to each other, with loan officers acting as the human glue between every step.",
    challengeIntro:
      "Borrowers expected a faster, more transparent approval process, and loan officers needed relief from repetitive manual document handling that added weeks to every application without adding value borrowers could see.",
    challengePoints: [
      "Loan officers manually verified and re-entered borrower documents across disconnected underwriting and compliance systems.",
      "Mortgage approvals routinely took several weeks, with borrowers getting little visibility into where their application stood.",
      "Document verification errors caused delays that required borrowers to resubmit paperwork already provided.",
      "Compliance checks happened as a separate manual step late in the process, sometimes surfacing issues after significant work was already done.",
      "There was no consolidated audit trail showing exactly how and when each compliance check was performed.",
    ],
    solutionIntro:
      "Starfii's intelligent automation team rebuilt the mortgage application process around automated document processing and continuous compliance checks, freeing loan officers to focus on borrower relationships rather than paperwork.",
    solutionDetail:
      "We built an intelligent document processing pipeline that extracts and verifies data from income statements, tax forms, and credit reports automatically, flagging only the exceptions that genuinely need a human review instead of routing every document through a loan officer. Compliance checks that previously ran as a late, separate step now run continuously as an application moves through the pipeline, surfacing issues early enough to resolve them without restarting the process. Every automated decision and compliance check is logged in a single audit trail, giving both the lender and its regulators a complete, timestamped record of exactly how each application was processed.",
    solution: [
      "Built an intelligent document processing pipeline that automatically extracts and verifies borrower income, tax, and credit data.",
      "Routed only genuine exceptions to loan officers for manual review instead of every submitted document.",
      "Moved compliance checks earlier into the process, running continuously rather than as a late, separate step.",
      "Logged every automated decision and compliance check into a single, timestamped audit trail.",
    ],
    results: [
      { metric: "60%", label: "Reduction in average mortgage approval time" },
      { metric: "45%", label: "Reduction in manual document handling by loan officers" },
      { metric: "100%", label: "Applications with a complete, timestamped audit trail" },
      { metric: "30%", label: "Reduction in resubmitted paperwork due to verification errors" },
    ],
    benefitsIntro:
      "Automating document handling and compliance checks let the lender approve mortgages faster without loosening its compliance standards.",
    benefits: [
      "Loan officers spend their time on borrower relationships instead of manual document verification.",
      "Borrowers move through approval significantly faster, with fewer requests to resubmit paperwork.",
      "Compliance issues surface early in the process, when they're far easier and cheaper to resolve.",
      "Regulators and internal audit teams get a complete, timestamped record of every application's processing history.",
    ],
    summary:
      "Starfii's intelligent automation shortened this lender's mortgage approval cycle from weeks to days by automating document verification and moving compliance checks earlier into the process. Approval time is down 60%, manual document handling is down 45%, and every application now carries a complete, fully auditable processing history.",
    techStack: ["Python", "UiPath", "AWS", "OCR/NLP", "PostgreSQL"],
  },
  {
    id: 9,
    slug: "healthcare-saas-platform-scale",
    title: "Starfii Scales a SaaS Platform for a Fortune 500 Healthcare Provider",
    subtitle:
      "Rebuilding a healthcare SaaS platform's architecture to scale to millions of users without sacrificing HIPAA compliance.",
    category: "SaaS Product Engineering & Cloud Architecture",
    cardDescription:
      "Starfii re-architected a healthcare SaaS platform using a composable, HIPAA-compliant architecture, scaling it to millions of users without sacrificing reliability.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop",
    client: "Fortune 500 Healthcare Provider",
    industry: "Healthcare & Life Sciences",
    services: ["SaaS Product Engineering", "Cloud Architecture", "Compliance & Security"],
    overview:
      "A Fortune 500 healthcare provider's patient engagement SaaS platform had grown well past the scale its original architecture was designed for, causing reliability issues as user numbers climbed into the millions.",
    clientOverview:
      "The client operates a patient engagement SaaS platform used by healthcare organizations to manage appointment scheduling, secure messaging, and care plan tracking for millions of patients. The platform's original architecture was built for a fraction of its current scale, and as adoption grew across new healthcare systems, the provider saw increasing reliability issues during peak usage periods, particularly around appointment scheduling windows.",
    challengeIntro:
      "The provider needed the platform to scale reliably to millions of concurrent patients across many healthcare organizations, without compromising the HIPAA compliance and data isolation each organization required.",
    challengePoints: [
      "The original architecture struggled under peak load, particularly during high-traffic appointment scheduling windows.",
      "Each healthcare organization on the platform required strict data isolation, complicating any shared infrastructure changes.",
      "Scaling the existing monolithic services required scaling the entire platform even when only one feature was under load.",
      "HIPAA compliance requirements constrained how infrastructure changes could be tested and rolled out.",
      "Onboarding new healthcare organizations took longer than the business needed as the platform grew.",
    ],
    solutionIntro:
      "Starfii's cloud architecture team redesigned the platform around a composable, service-based architecture that scales individual capabilities independently while preserving strict per-organization data isolation.",
    solutionDetail:
      "We broke the platform's core capabilities, scheduling, messaging, and care plan tracking, into independently scalable services, so a spike in appointment scheduling traffic no longer required scaling the entire platform. Each healthcare organization's data remained logically isolated through a multi-tenant data architecture designed specifically to satisfy HIPAA requirements, validated through the same compliance review process used for the original platform. We also built a standardized onboarding pipeline for new healthcare organizations, replacing what had been a largely manual setup process with a repeatable, auditable one.",
    solution: [
      "Re-architected the platform into independently scalable services for scheduling, messaging, and care plan tracking.",
      "Designed a multi-tenant data architecture preserving strict per-organization data isolation under HIPAA requirements.",
      "Built a standardized, auditable onboarding pipeline for new healthcare organizations joining the platform.",
      "Validated the new architecture through the same compliance review process governing the original platform.",
    ],
    results: [
      { metric: "5x", label: "Increase in platform capacity during peak scheduling windows" },
      { metric: "99.99%", label: "Platform uptime after re-architecture" },
      { metric: "100%", label: "HIPAA compliance maintained across the new architecture" },
      { metric: "60%", label: "Faster onboarding for new healthcare organizations" },
    ],
    benefitsIntro:
      "A composable architecture let the platform scale where it actually needed to, without compromising the compliance guarantees every organization depended on.",
    benefits: [
      "Appointment scheduling traffic spikes no longer put the entire platform at risk of slowdowns.",
      "Each healthcare organization's patient data stays isolated under the same compliance standards as before.",
      "New healthcare organizations onboard through a standardized, auditable process instead of manual setup.",
      "Engineering teams scale individual services independently instead of the platform as a whole.",
    ],
    summary:
      "Starfii re-architected this healthcare SaaS platform around independently scalable, HIPAA-compliant services, letting it grow to millions of patients without sacrificing reliability or compliance. Peak capacity is up 5x, uptime sits at 99.99%, and new healthcare organizations onboard 60% faster than before.",
    techStack: ["Java", "AWS", "Kubernetes", "PostgreSQL", "Kafka"],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
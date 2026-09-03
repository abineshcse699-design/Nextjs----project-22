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
  slug: "doodley-pet-care-ecosystem",

  title: "Doodley: Building a Pet Care Ecosystem MVP in Just 2 Months",

  subtitle:
    "How Doodley brought convenient, hospital backed veterinary care to pet parents through a digital first pet care ecosystem.",

  category: "Healthcare & Pet Care Technology",

  cardDescription:
    "Starfii built Doodley's MVP in just 2 months, creating a digital pet care experience that connects pet parents with veterinary services, home visits, vaccinations, consultations, and hospital backed care.",

  image:
    "https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=800&auto=format&fit=crop",

  heroImage:
    "https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=1600&auto=format&fit=crop",

  client: "Doodley",

  industry: "Pet Care & Veterinary Services",

  services: [
    "MVP Product Engineering",
    "Mobile & Web Development",
    "Cloud & API Integration"
  ],

  overview:
    "A digital first pet care ecosystem designed to make trusted veterinary care more accessible and convenient for pet parents",

  clientOverview:
    "Doodley is a pet care startup built around the idea of simplifying pet parenting through convenient access to veterinary and pet care services. Its platform brings together services such as vet home visits, home vaccination, online veterinary consultation, hospital care, surgery, grooming, nutrition, training, boarding, food, pet cakes, and walking services. Doodley's current website highlights hospital backed services, 20+ expert vets, same day home visits, affordable home vaccination, app based booking, and more than 70,000 happy pet parents.",

  challengeIntro:
    "Create a complete digital pet care experience quickly while making veterinary access simple for busy pet parents",

  challengePoints: [
    "Pet parents needed a convenient alternative to repeated clinic visits, traffic, queues, and time consuming appointment processes.",

    "The product needed to bring multiple pet care journeys into one simple digital experience.",

    "Veterinary services required a trustworthy, hospital backed experience rather than a generic marketplace approach.",

    "The MVP had to be delivered rapidly so Doodley could validate the product and take it to market within 2 months.",

    "The platform needed to support different care journeys, including home visits, vaccination, online consultation, and access to hospital services."
  ],

  solutionIntro:
    "A focused MVP that connected pet parents with convenient, hospital backed veterinary care",

  solutionDetail:
    "Starfii focused the initial product on the highest value pet care journeys and built a simple digital experience around booking and accessing veterinary services. The platform supports app based service discovery and booking, helping pet parents add pet details, select the appropriate consultation or care option, choose a health issue, and select an available slot. The product experience was designed around Doodley's broader pet care ecosystem, including home veterinary visits, vaccination, online consultation, and hospital backed treatment.",

  solution: [
    "Built the Doodley MVP and brought the core product experience to market in just 2 months.",

    "Created digital booking journeys for veterinary services, including home visits and online consultations.",

    "Enabled pet parents to manage pet details, select health concerns, and choose available appointment slots through the app.",

    "Supported a hospital backed care model with access to qualified veterinary professionals and specialist care.",

    "Designed the product foundation to support an expanding ecosystem of veterinary and everyday pet care services."
  ],

  results: [
    {
      metric: "2 Months",
      label: "MVP delivered and brought to market"
    },

    {
      metric: "₹30 Cr",
      label: "Achievement enabled through the Doodley journey"
    },

    {
      metric: "70,000+",
      label: "Happy pet parents highlighted by Doodley"
    },

    {
      metric: "20+",
      label: "Expert vets supporting the care ecosystem"
    }
  ],

  benefitsIntro:
    "A fast, digital first product foundation helped Doodley make veterinary care more convenient for pet parents",

  benefits: [
    "Pet parents can book veterinary services through the Doodley app instead of relying only on traditional clinic visits.",

    "Home visits help reduce the time and inconvenience associated with traffic, queues, and transporting pets.",

    "Online consultation provides another accessible route to veterinary advice when an in person visit is not immediately required.",

    "The platform creates a scalable foundation for expanding from individual veterinary services into a broader pet care ecosystem.",

    "Hospital backed services and qualified veterinary professionals strengthen trust in the digital pet care experience."
  ],

  summary:
    "Starfii helped Doodley move from product vision to a working MVP in just 2 months, creating a digital first pet care experience around convenient veterinary access. The solution supports home visits, vaccinations, online consultations, hospital backed care, and an expanding ecosystem of pet services, while Doodley's reported journey has reached more than 70,000 happy pet parents and a ₹30 crore achievement.",

  techStack: [
    "React",
    "Node.js",
    "Mobile App",
    "Cloud APIs",
    "Database & Analytics"
  ]
},

  {
    id: 2,
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
  id: 3,
  slug: "jett-ai-meeting-assistant",

  title: "JETT AI\nIntelligent Meeting Assistant",

  subtitle:
    "Transforming meetings into intelligent, searchable, and actionable conversations automatically.",

  category: "AI Solutions & Intelligent Automation",

  cardDescription:
    "JETT is an AI powered meeting assistant that captures conversations, generates accurate transcripts, summarizes key discussions, identifies action items, and helps teams turn every meeting into measurable outcomes.",

  image:
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format&fit=crop",

  heroImage:
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop",

  client: "JETT AI Powered Meeting Intelligence Platform",

  industry: "Artificial Intelligence and Collaboration Technology",

  services: [
    "AI Meeting Intelligence",
    "Real Time Transcription",
    "Automated Meeting Summaries",
    "Action Item Extraction",
    "AI Powered Meeting Search",
    "Intelligent Meeting Analytics"
  ],

  overview:
    "JETT is an AI meeting assistant designed to help individuals and teams capture, understand, and act on everything discussed during their meetings. By combining speech to text, large language models, and intelligent automation, JETT transforms unstructured conversations into organized, searchable, and actionable information.",

  clientOverview:
    "Modern teams spend significant time in meetings, yet important decisions, responsibilities, and insights can easily become buried within lengthy conversations. JETT addresses this challenge by automatically capturing meeting content and transforming it into structured intelligence. From customer conversations and sales meetings to internal discussions and leadership sessions, JETT helps teams preserve context, improve accountability, and reduce the administrative effort involved in meeting documentation.",

  challengeIntro:
    "Meetings Generate Valuable Information\nBut Important Insights Get Lost",

  challengePoints: [
    "Teams spend valuable time taking notes instead of fully participating in important conversations.",
    "Important decisions and follow up actions can easily be missed after meetings end.",
    "Long meeting recordings are difficult to review when teams need specific information quickly.",
    "Inconsistent note taking can create gaps in accountability across teams and projects.",
    "Manual meeting documentation creates repetitive administrative work and reduces productivity.",
    "Organizations need a centralized and intelligent way to search, understand, and reuse information from previous meetings."
  ],

  solutionIntro:
    "An Intelligent AI Assistant\nBuilt Around Every Meeting",

  solutionDetail:
    "JETT goes beyond traditional meeting recording and transcription by combining speech to text technology with AI powered understanding. The platform captures conversations, identifies important information, and transforms meeting content into structured intelligence. Decisions, action items, key topics, questions, and relevant context are organized into a clear format that teams can immediately understand and act upon.",

  solution: [
    "AI Meeting Capture: Captures meeting conversations automatically, allowing participants to focus on meaningful discussions instead of manual note taking.",

    "Real Time Transcription: Converts spoken conversations into searchable text, creating a reliable digital record of every meeting.",

    "Intelligent Meeting Summaries: Uses AI to create concise summaries that highlight key discussions, outcomes, and important context.",

    "Action Item Detection: Identifies tasks, responsibilities, deadlines, and follow up activities discussed during meetings.",

    "Decision Tracking: Captures important decisions and agreements to provide teams with a clear record of meeting outcomes.",

    "AI Meeting Search: Makes previous conversations searchable so users can quickly find discussions, topics, decisions, and specific information.",

    "Ask JETT AI: Allows users to ask natural language questions about their meeting history and receive relevant, context aware answers.",

    "Meeting Intelligence: Analyzes conversations to identify recurring topics, insights, follow up opportunities, and collaboration patterns.",

    "Workflow Automation: Converts meeting outcomes into structured information that can support task management, CRM processes, reporting, and business workflows.",

    "Centralized Meeting Knowledge: Turns historical meeting conversations into an accessible knowledge base that teams can reference and reuse."
  ],

  results: [
    {
      metric: "AI",
      label: "Powered Meeting Intelligence"
    },
    {
      metric: "100%",
      label: "Searchable Meeting Knowledge"
    },
    {
      metric: "24/7",
      label: "Accessible Meeting Insights"
    },
    {
      metric: "1",
      label: "Centralized Meeting Intelligence Platform"
    }
  ],

  benefitsIntro:
    "From Meeting Notes\nTo Intelligent Business Knowledge",

  benefits: [
    "Teams spend less time documenting meetings and more time participating in meaningful conversations.",

    "AI generated summaries provide stakeholders with a fast and consistent understanding of every meeting.",

    "Action items and responsibilities are clearly identified, helping teams improve accountability and follow through.",

    "Searchable transcripts allow users to retrieve important information without replaying entire meeting recordings.",

    "AI powered Q and A enables teams to extract useful insights from previous meetings using natural language.",

    "Meeting intelligence improves collaboration across sales, operations, leadership, customer success, and delivery teams.",

    "Automated meeting documentation reduces administrative overhead and gives teams more time to focus on high value work.",

    "Historical conversations become a reusable source of business knowledge instead of information that disappears after the meeting."
  ],

  summary:
    "JETT AI Meeting Assistant transforms the way organizations capture, understand, and use meeting information. By combining intelligent transcription, AI generated summaries, action item extraction, decision tracking, searchable conversations, and conversational AI, JETT turns every meeting into a structured source of knowledge and action. Rather than allowing valuable conversations to disappear when a meeting ends, JETT preserves the context, surfaces the outcomes, and helps teams move work forward with greater clarity and efficiency.",

  techStack: [
    "Artificial Intelligence",
    "Large Language Models",
    "Speech to Text",
    "Natural Language Processing",
    "Real Time Transcription",
    "AI Summarization",
    "Meeting Analytics",
    "Workflow Automation"
  ]
},
  // ── your other 4 case studies stay exactly as they were ──

{
  id: 4,
  slug: "appmd-virtual-healthcare-platform",

  title: "AppMD: Transforming Healthcare Through Connected Virtual Care",

  subtitle:
    "Bringing patients and physicians closer through secure, accessible, and technology enabled healthcare experiences.",

  category: "Healthcare Technology & Digital Transformation",

  cardDescription:
    "AppMD is a virtual healthcare platform designed to connect patients with qualified physicians across the United States and India, making expert medical consultation more accessible through a convenient digital experience.",

  image:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",

  heroImage:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop",

  client:
    "AppMD",

  industry:
    "Healthcare & Telemedicine",

  services: [
    "Telemedicine Platform Development",
    "Healthcare Software Engineering",
    "Virtual Physician Consultations",
    "Secure Digital Healthcare",
    "Cloud Infrastructure",
    "Healthcare Technology Integration"
  ],

  overview:
    "AppMD is a digital healthcare platform focused on making quality medical expertise more accessible through virtual consultations. The platform connects patients with physicians across the United States and India, enabling patients to access medical guidance remotely without the limitations of traditional in person consultations.",

  clientOverview:
    "AppMD brings together healthcare expertise and digital technology to create a more connected healthcare experience. By enabling patients to access physicians remotely, the platform supports a flexible model of care that can help overcome geographical barriers and make specialist medical expertise easier to access. Its cross border physician network provides patients with an opportunity to connect with medical professionals from both the United States and India through a convenient virtual care experience.",

  challengeIntro:
    "Making quality medical expertise more accessible across geographical boundaries",

  challengePoints: [
    "Patients often face geographical and logistical barriers when seeking access to qualified medical professionals.",
    "Traditional healthcare journeys can require significant travel, waiting time, and coordination before a consultation can take place.",
    "Patients seeking additional medical perspectives may find it difficult to connect with physicians outside their immediate healthcare network.",
    "Healthcare providers need digital experiences that make remote consultations convenient while maintaining trust, privacy, and professionalism.",
    "Cross border healthcare requires a technology platform capable of supporting patients and physicians across different locations.",
    "The growing demand for digital healthcare creates a need for scalable technology that can support a seamless virtual consultation experience."
  ],

  solutionIntro:
    "A connected virtual healthcare experience designed around patients and physicians",

  solutionDetail:
    "AppMD brings healthcare professionals and patients together through a digital consultation experience designed to make medical expertise more accessible. The platform combines virtual healthcare capabilities with a patient focused digital journey, allowing individuals to connect with physicians across the United States and India. By reducing geographical barriers and simplifying access to medical professionals, AppMD creates a more flexible approach to healthcare delivery while supporting the evolving expectations of digitally connected patients.",

  solution: [
    "Virtual Healthcare Consultations: Enables patients to connect with qualified physicians remotely through a convenient digital healthcare experience.",

    "Cross Border Physician Access: Connects patients with medical professionals across the United States and India, expanding access to healthcare expertise.",

    "Patient Centric Experience: Simplifies the journey from accessing healthcare information to connecting with an appropriate medical professional.",

    "Remote Medical Expertise: Makes it easier for patients to seek professional medical guidance without the need for unnecessary travel.",

    "Digital Healthcare Delivery: Uses modern technology to support a more flexible and accessible model of healthcare delivery.",

    "Secure Healthcare Environment: Designed around the importance of privacy, trust, and responsible handling of healthcare related information.",

    "Scalable Platform Architecture: Provides a technology foundation capable of supporting an expanding patient and physician ecosystem.",

    "Connected Care Experience: Brings patients and healthcare professionals together through a unified digital platform."
  ],

  results: [
    {
      metric: "US + India",
      label: "Connected physician network"
    },
    {
      metric: "24/7",
      label: "Digital access to healthcare services"
    },
    {
      metric: "Virtual",
      label: "Consultation experience"
    },
    {
      metric: "1",
      label: "Connected healthcare platform"
    }
  ],

  benefitsIntro:
    "Making healthcare more accessible, connected, and convenient",

  benefits: [
    "Patients can connect with qualified physicians remotely, reducing geographical barriers to healthcare access.",

    "Access to physicians across the United States and India creates greater flexibility for patients seeking medical expertise.",

    "Virtual consultations provide a convenient alternative for patients who may not be able to attend traditional in person appointments.",

    "A centralized digital experience makes the healthcare journey easier to navigate for patients.",

    "Healthcare professionals can engage with patients through a technology enabled consultation model.",

    "Digital healthcare delivery helps create a more flexible experience aligned with the expectations of modern patients.",

    "The platform provides a scalable foundation for expanding virtual healthcare services and physician access.",

    "AppMD demonstrates how technology can help bring patients and medical expertise closer together."
  ],

  summary:
    "AppMD represents a modern approach to healthcare delivery, connecting patients with qualified physicians across the United States and India through a virtual healthcare platform. By combining digital technology with access to medical expertise, AppMD helps reduce geographical barriers, simplify the consultation journey, and create a more convenient healthcare experience. The platform demonstrates how thoughtful healthcare technology can bring patients and physicians closer while supporting the continued evolution of connected and accessible care.",

  techStack: [
    "React",
    "Node.js",
    "Cloud Infrastructure",
    "Telemedicine",
    "Secure APIs",
    "Healthcare Technology",
    "Virtual Consultation",
    "Digital Healthcare"
  ],
},
  
  {
    id: 5,
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
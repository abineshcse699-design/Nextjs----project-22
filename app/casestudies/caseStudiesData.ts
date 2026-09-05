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
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",

  heroImage:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",

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
  slug: "third-biome-building-indias-first-proprietary-postbiotic-ecommerce-brand",

  title: "Third Biome: Building a Science Led E Commerce Experience for Gut Health",

  subtitle:
    "Creating a science led digital health commerce experience that transforms complex gut health science into a simple, trusted daily wellness journey.",

  category:
    "E Commerce & Digital Health",

  cardDescription:
    "Third Biome brings clinically informed postbiotic science to consumers through a premium e commerce experience — combining product education, evidence led storytelling, personalized discovery, and a seamless path from learning to purchase.",

  // UPDATED: Science + Biotech + Digital Technology

  image:
    "https://static.wixstatic.com/media/b58c66_928929a5140548a99c5050aee0bc0c2e~mv2.png/v1/fill/w_980%2Ch_551%2Cal_c%2Cq_90%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/b58c66_928929a5140548a99c5050aee0bc0c2e~mv2.png",

  heroImage:
    "https://static.wixstatic.com/media/b58c66_928929a5140548a99c5050aee0bc0c2e~mv2.png/v1/fill/w_1600%2Ch_900%2Cal_c%2Cq_90%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/b58c66_928929a5140548a99c5050aee0bc0c2e~mv2.png",

  client: "Third Biome",
  
  industry: "Health, Wellness & E Commerce",

  services: [
    "E Commerce Development",
    "UX/UI Design",
    "Digital Product Strategy",
    "Conversion Optimization",
    "Content & Product Experience"
  ],

  overview:
    "India's first proprietary postbiotic brand",

  clientOverview:
    "Third Biome is an India based health and wellness brand focused on postbiotic innovation and evidence led gut health. Its flagship product, Biome Balance, is powered by Thirdbiome GTB™, a proprietary postbiotic technology designed to deliver butyrate to the colon through a precision delivery system. The brand combines clinical research, responsible manufacturing, educational content, and a doctor guided wellness model to create a more transparent and science led approach to gut health.",

  challengeIntro:
    "Turn complex postbiotic science into a trusted, intuitive e commerce experience",

  challengePoints: [
    "Postbiotics are a relatively new category for Indian consumers, requiring clear education before purchase.",
    "Gut health terminology and scientific mechanisms can be difficult for everyday consumers to understand.",
    "The brand needed to communicate clinical credibility without making the experience feel overly technical or clinical.",
    "Consumers needed a simple path from understanding their gut health concerns to discovering the right product.",
    "The e commerce journey needed to balance education, trust, product discovery, and conversion.",
    "The brand had to differentiate itself from conventional probiotic and supplement companies through science, transparency, and proprietary technology."
  ],

  solutionIntro:
    "A science led e commerce ecosystem built around trust, education, and conversion",

  solutionDetail:
    "The digital experience was structured around a simple principle: educate first, build trust second, and make purchasing effortless. The platform brings together product discovery, postbiotic education, clinical evidence, technology storytelling, customer outcomes, and guided wellness journeys within a unified e commerce experience. Instead of treating the website as a traditional online supplement store, the experience positions Third Biome as a trusted digital destination for modern gut health — helping visitors understand postbiotics, discover Biome Balance, evaluate the evidence, and begin a consistent daily protocol.",

  solution: [
    "Designed a premium, science led e commerce experience that positions Third Biome as a category defining postbiotic brand.",
    "Created a clear product storytelling framework explaining Thirdbiome GTB™, its delivery technology, and its role in supporting gut health.",
    "Developed intuitive product discovery journeys around key consumer goals including digestion, bloating, gut brain support, immunity, and metabolic wellness.",
    "Integrated evidence led content, clinical research, FAQs, and educational resources directly into the purchase journey.",
    "Built conversion focused product and subscription experiences for Biome Balance and the T3B Club.",
    "Created a guided gut health discovery experience that helps customers identify relevant concerns before choosing their starting protocol.",
    "Structured the content architecture to support long term growth across products, education, clinical evidence, community, and future wellness categories."
  ],

  results: [
    {
      metric: "1",
      label: "Unified digital destination for product, science, and education"
    },
    {
      metric: "500 mg",
      label: "Defined GTB™ active per daily capsule"
    },
    {
      metric: "300+",
      label: "T3B Club members across early wellness cohorts"
    },
    {
      metric: "4",
      label: "Clinical and observational cohorts supporting the brand journey"
    }
  ],

  benefitsIntro:
    "A digital health experience designed for long term trust and growth",

  benefits: [
    "Established a differentiated digital presence for an emerging postbiotic category in India.",
    "Simplified complex gut health science into clear, accessible consumer facing experiences.",
    "Connected education, evidence, product discovery, and checkout into a single customer journey.",
    "Strengthened consumer trust through transparent communication around research, technology, manufacturing, and product formulation.",
    "Created a scalable e commerce foundation capable of supporting future products and wellness categories.",
    "Introduced a guided protocol model that encourages consistency and ongoing engagement rather than one time purchases."
  ],

  summary:
    "Third Biome's e commerce experience transforms a complex health category into a clear, credible, and conversion focused digital journey. By combining proprietary postbiotic technology, evidence led education, personalized product discovery, and the T3B Club protocol, the platform helps consumers move confidently from curiosity to understanding and from understanding to action. The result is a scalable digital ecosystem designed to build trust, drive product adoption, and establish Third Biome as a leading postbiotic brand.",

  techStack: [
    "E Commerce Platform",
    "Responsive Web Design",
    "Product Discovery",
    "Conversion Optimization",
    "Content Management",
    "Subscription Commerce",
    "Customer Journey Analytics"
  ]
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
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",

  heroImage:
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop",

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

{
  id: 4,
  slug: "appmd-virtual-healthcare-platform",

  title: "AppMD: Transforming Healthcare Through Connected Virtual Care",

  subtitle:
    "Bringing patients and physicians closer through secure, accessible, and technology enabled healthcare experiences.",

  category: "Healthcare Technology & Digital Transformation",

  cardDescription:
    "AppMD is a virtual healthcare platform designed to connect patients with qualified physicians across the United States and India, making expert medical consultation more accessible through a convenient digital experience.",

  // UPDATED: Telemedicine + Digital Healthcare Technology
  image:
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",

  heroImage:
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop",

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
  slug: "kareersity-pharmaceutical-education-career-readiness-platform",

  title:
    "KareerSity: Transforming Pharmaceutical Education into a Career Ready Digital Learning Experience",

  subtitle:
    "Bridging the gap between academic learning and industry expectations through practical education, professional upskilling, career development, and industry led learning.",

  category: "EdTech & Digital Learning",

  cardDescription:
    "KareerSity connects pharmaceutical education with real world industry requirements, creating a career focused digital experience for students, professionals, and organizations across learning, upskilling, recruitment, consulting, and leadership development.",

  image:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",

  heroImage:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop",

  client: "KareerSity",

  industry: "Education, EdTech & Pharmaceutical",

  services: [
    "Digital Learning Experience",
    "UX/UI Design",
    "Education Technology",
    "Career Development",
    "Content Strategy"
  ],

  overview:
    "An industry aligned EdTech platform focused on pharmaceutical career development",

  clientOverview:
    "KareerSity is an EdTech organization focused on transforming pharmaceutical education by connecting academic learning with real world industry requirements. The platform is designed to prepare students for the workforce while helping working professionals strengthen their skills and advance their careers. Its broader ecosystem brings together workforce preparation, professional upskilling, recruitment and placement, business consulting, and leadership coaching — creating a career development journey that extends beyond traditional classroom education.",

  challengeIntro:
    "Bridge the gap between pharmaceutical education and the skills demanded by the modern workforce",

  challengePoints: [
    "Traditional pharmaceutical education does not always provide enough exposure to real world industry expectations.",
    "Students need practical knowledge, professional skills, and greater confidence before entering the workforce.",
    "Working professionals require continuous upskilling to remain competitive in an evolving pharmaceutical industry.",
    "Academic learning and industry requirements can operate in separate silos, creating a gap between education and employability.",
    "Learners need clearer pathways connecting education, career development, recruitment, and long term professional growth.",
    "Organizations require access to talent with relevant skills, industry awareness, adaptability, and leadership potential."
  ],

  solutionIntro:
    "A career focused learning ecosystem that connects academia, industry, and professional growth",

  solutionDetail:
    "KareerSity was positioned as more than a conventional learning platform. The digital experience brings education, practical industry knowledge, professional development, and career services together within a unified ecosystem. Its learning approach is built around real world workforce requirements, helping students develop the knowledge and confidence needed to transition into professional roles while enabling existing professionals to strengthen their capabilities. The platform also extends beyond learning through recruitment and placement support, business consulting, and leadership coaching — creating a continuous pathway from education to employment and professional advancement.",

  solution: [
    "Created an industry aligned learning experience focused on practical pharmaceutical knowledge and workforce readiness.",
    "Structured learning journeys around the evolving requirements of the pharmaceutical industry rather than traditional academic only models.",
    "Developed professional upskilling pathways for individuals working across sales, marketing, leadership, and related functions.",
    "Connected learning and career development with recruitment and placement opportunities to support the transition from education to employment.",
    "Integrated business consulting and leadership coaching into the broader professional development ecosystem.",
    "Designed the experience to support multiple audiences, including students entering the workforce, professionals seeking advancement, and organizations looking for strategic talent and business support.",
    "Established a scalable digital foundation for continuous learning, professional development, and stronger academia industry collaboration."
  ],

  results: [
    {
      metric: "1",
      label: "Unified ecosystem connecting education and career development"
    },
    {
      metric: "5",
      label: "Core pillars spanning learning, upskilling, recruitment, consulting, and leadership"
    },
    {
      metric: "360°",
      label: "Career development approach from workforce preparation to professional growth"
    },
    {
      metric: "1",
      label: "Bridge connecting academic learning with industry expectations"
    }
  ],

  benefitsIntro:
    "A future ready learning ecosystem designed around real world career outcomes",

  benefits: [
    "Helps pharmaceutical students develop practical skills and confidence before entering the workforce.",
    "Provides professionals with structured opportunities to strengthen their capabilities and advance their careers.",
    "Creates stronger alignment between academic learning and the evolving requirements of industry.",
    "Connects learning with recruitment and placement support to create a clearer pathway into professional opportunities.",
    "Extends beyond education through consulting and leadership development for individuals and organizations.",
    "Builds an adaptable learning ecosystem capable of evolving with changing workforce and industry demands."
  ],

  summary:
    "KareerSity is redefining pharmaceutical education by bringing academic learning, industry knowledge, professional upskilling, recruitment, consulting, and leadership development into a connected career ecosystem. Instead of treating education as an end point, the platform positions learning as the foundation for long term professional growth — helping students become workforce ready, enabling professionals to advance their careers, and strengthening the connection between academia and industry.",

  techStack: [
    "Responsive Web Platform",
    "Learning Experience Design",
    "Content Management",
    "Career Discovery",
    "Digital Education",
    "User Centric UX/UI",
    "Professional Development"
  ],
},

{
  id: 6,
  slug: "filecentral-ai-powered-file-management-platform",

  title:
    "Filecentral: Building an AI Powered File Management Platform for Smarter Information Access",

  subtitle:
    "Transforming scattered business files into an intelligent, searchable, and secure workspace where teams can find information, interact with documents, and turn stored data into actionable insights.",

  category: "AI/ML & SaaS",

  cardDescription:
    "Starfii built Filecentral as an AI powered file management platform that combines secure storage, intelligent search, document conversations, and AI driven insights — helping professionals move from simply storing files to actually understanding and using the information inside them.",

  image:
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",

  heroImage:
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop",

  client: "Filecentral",

  industry:
    "SaaS, AI & Enterprise Productivity",

  services: [
    "AI/ML Development",
    "SaaS Product Development",
    "File Management",
    "AI Powered Search",
    "Cloud Engineering",
    "UX/UI Design"
  ],

  overview:
    "An AI powered SaaS platform that makes business files easier to store, find, understand, and manage.",

  clientOverview:
    "Filecentral is an AI powered file storage and management platform designed for professionals and organizations that need a smarter way to manage growing volumes of digital information. Rather than functioning as a traditional cloud file repository, Filecentral combines centralized storage with intelligent search and an AI assistant called Panda. Users can organize their files, quickly locate information, ask questions about documents, analyze content across multiple files, and manage access through a secure, permission based environment.",

  challengeIntro:
    "Move beyond traditional file storage and make organizational knowledge instantly accessible",

  challengePoints: [
    "Business files were becoming increasingly difficult to organize across growing collections of documents and digital assets.",
    "Traditional folder based navigation required users to remember where information was stored before they could access it.",
    "Finding specific information inside large documents often required manually opening and reviewing multiple files.",
    "Users needed a faster way to understand document content without reading every file from beginning to end.",
    "Organizations required strong access controls and security while making information easier to discover.",
    "The product needed to combine file storage, intelligent search, AI interaction, and document insights within one simple experience."
  ],

  solutionIntro:
    "An intelligent file workspace powered by AI search and conversational document intelligence",

  solutionDetail:
    "Starfii designed and developed Filecentral as a modern SaaS platform that brings storage, organization, search, and AI intelligence into one unified workspace. The platform allows users to centralize their digital files while using intelligent search to locate information based on context rather than relying solely on traditional folder navigation. At the center of the experience is Panda, an AI assistant that allows users to interact directly with their stored documents, retrieve information, generate summaries, and uncover relationships across files. Security and access management were incorporated into the platform architecture so organizations could improve information accessibility without compromising control over sensitive data.",

  solution: [
    "Built the core File Management System for centralized storage, organization, and retrieval of business files.",
    "Developed AI powered search capabilities to help users locate relevant files and information using natural language queries and contextual understanding.",
    "Integrated Panda AI as a conversational assistant that allows users to ask questions directly about their stored documents.",
    "Enabled AI assisted document analysis to extract information, summarize content, and identify relationships across multiple files.",
    "Implemented secure file access and permission controls to ensure sensitive information remains available only to authorized users.",
    "Designed a scalable architecture capable of supporting increasing storage requirements and growing organizational data volumes.",
    "Created a streamlined SaaS experience that reduces the friction between storing information and actually using it."
  ],

  results: [
    {
      metric: "1 Month",
      label: "MVP delivered for the core File Management System and AI experience"
    },
    {
      metric: "3–3.5 Months",
      label: "Full platform development timeline"
    },
    {
      metric: "40%",
      label: "Faster file search and information retrieval"
    },
    {
      metric: "50%",
      label: "Improvement in file organization"
    },
    {
      metric: "30%",
      label: "Increase in productivity"
    }
  ],

  benefitsIntro:
    "Turning file storage into an intelligent productivity layer for modern teams",

  benefits: [
    "Users can find important files and information without manually navigating through complex folder structures.",
    "Panda AI enables teams to interact directly with their documents and retrieve answers in seconds.",
    "Organizations can extract insights and relationships from their existing document collections instead of treating files as passive storage.",
    "Centralized file management creates a single, organized workspace for business information.",
    "Permission based access and secure storage help organizations maintain control over sensitive data.",
    "The scalable SaaS foundation allows Filecentral to grow with increasing file volumes, users, and organizational requirements."
  ],

  summary:
    "Starfii transformed Filecentral from the concept of a traditional file repository into an intelligent AI powered information workspace. By combining centralized file management, contextual search, conversational document interaction through Panda AI, document analysis, and secure access controls, Filecentral helps professionals spend less time searching for information and more time using it. The platform's MVP was delivered in one month, followed by the full product within approximately three to three and a half months, with reported improvements of 40% in search speed, 50% in file organization, and 30% in productivity.",

  techStack: [
    "AI/ML",
    "Python",
    "Cloud Infrastructure",
    "Natural Language Processing",
    "Document Intelligence",
    "SaaS Architecture",
    "Secure File Storage",
    "AI Powered Search"
  ],
},

{
  id: 7,
  slug: "express-roadways-technology-driven-logistics-platform",

  title:
    "Express Roadways: Building a Technology Driven Logistics Platform for Smarter Supply Chain Operations",

  subtitle:
    "Modernizing freight, warehousing, tracking, and supply chain operations through a connected digital experience built for visibility, reliability, and operational efficiency.",

  category:
    "Logistics Technology & Supply Chain",

  cardDescription:
    "Express Roadways combines freight, supply chain, agility, and cold chain capabilities with technology driven operations to deliver reliable, visible, and customized logistics solutions across India.",

  image:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",

  heroImage:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",

  client:
    "Express Roadways",

  industry:
    "Logistics, Transportation & Supply Chain",

  services: [
    "Logistics Technology",
    "Supply Chain Management",
    "Freight Management",
    "Warehousing",
    "Fleet & Shipment Tracking",
    "Digital Operations"
  ],

  overview:
    "A pan India logistics and supply chain organization connecting freight, warehousing, distribution, and technology driven transportation services.",

  clientOverview:
    "Express Roadways is a logistics and supply chain company with more than three decades of industry experience. The organization provides integrated solutions across freight transportation, agile movement, supply chain management, warehousing, distribution, and cold chain logistics. With a pan India operating network, dedicated fleet capabilities, real time tracking, and customized logistics solutions, Express Roadways helps businesses move goods with greater visibility, reliability, and operational control.",

  challengeIntro:
    "Create greater visibility and control across a complex, multi service logistics operation",

  challengePoints: [
    "Large scale logistics operations require coordination across transportation, warehousing, inventory, and distribution.",
    "Customers need real time visibility into shipment movement and delivery status.",
    "Different industries require customized logistics models rather than a one size fits all transportation service.",
    "Managing freight, warehousing, fleet operations, and supply chain activities across multiple locations creates operational complexity.",
    "Time sensitive and temperature sensitive shipments require specialized processes, monitoring, and reliable execution.",
    "Growing logistics operations need technology enabled processes that improve transparency, efficiency, and decision making."
  ],

  solutionIntro:
    "A connected logistics ecosystem built around visibility, technology, and operational reliability",

  solutionDetail:
    "Express Roadways combines logistics expertise with technology driven operations to create a more connected supply chain experience. The digital ecosystem brings together freight movement, agile transportation, warehousing, distribution, tracking, and specialized cold chain capabilities. Real time GPS tracking, technology enabled operational processes, warehouse systems, inventory controls, and customized reporting help provide customers with greater visibility from shipment initiation through delivery. The approach enables Express Roadways to support businesses across industries while maintaining the flexibility required for different cargo, timelines, locations, and supply chain models.",

  solution: [
    "Structured a unified digital experience around four core service areas: Freight, Supply Chain, Agility, and Cold Chain.",
    "Enabled real time fleet and shipment visibility through GPS based tracking technology.",
    "Supported end to end supply chain operations covering warehousing, inventory management, distribution, and last mile movement.",
    "Integrated technology driven warehouse processes including dashboard access, barcoding, scanning, and operational reporting.",
    "Designed logistics solutions around individual customer requirements, business sectors, shipment volumes, and delivery timelines.",
    "Supported temperature sensitive transportation through specialized refrigerated vehicles and monitoring systems.",
    "Created a scalable operational foundation capable of supporting pan India logistics networks and growing customer requirements."
  ],

  results: [
    {
      metric: "98%",
      label: "Customer retention rate"
    },
    {
      metric: "800+",
      label: "Dedicated fleet strength"
    },
    {
      metric: "40+",
      label: "Operational centers across India"
    },
    {
      metric: "4",
      label: "Core logistics service verticals"
    }
  ],

  benefitsIntro:
    "A technology enabled logistics ecosystem designed for visibility, reliability, and scale",

  benefits: [
    "Customers gain greater visibility into shipment movement through real time tracking capabilities.",
    "Integrated freight, warehousing, and supply chain services simplify complex logistics requirements.",
    "Customized logistics models allow businesses to align transportation and distribution with their specific operational needs.",
    "Technology enabled warehouse and inventory processes improve operational transparency and control.",
    "Specialized cold chain capabilities support the safe movement of temperature sensitive products.",
    "A broad operational network enables businesses to connect with markets and distribution points across India.",
    "A technology first operating approach creates a stronger foundation for efficiency, scalability, and long term customer relationships."
  ],

  summary:
    "Express Roadways is building a more connected approach to logistics by combining transportation expertise with technology driven supply chain operations. From freight and agile movement to warehousing, distribution, real time tracking, and cold chain logistics, the organization brings multiple capabilities together under one integrated ecosystem. With a pan India network, dedicated fleet, technology enabled operations, and a strong focus on reliability and transparency, Express Roadways helps businesses move products with greater confidence and control.",

  techStack: [
    "GPS & Real Time Tracking",
    "Warehouse Management",
    "Inventory Management",
    "Digital Operations",
    "Barcoding & Scanning",
    "KPI Reporting",
    "Supply Chain Technology",
    "Fleet Management"
  ],
}
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
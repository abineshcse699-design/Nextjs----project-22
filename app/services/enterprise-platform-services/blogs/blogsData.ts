export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogService =
  | "digital-software"
  | "enterprise-automation"
  | "enterprise-platform-services";

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  service: BlogService;
  lastUpdated: string;
  readTime: string;
  heroImage: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
    photo: string;
    bio: string;
  };
  intro: string[];
  sections: BlogSection[];
};

const AUTHOR = {
  name: "Sanjay Salunkhe",
  role: "President and Global Head of Digital and Software Services",
  photo:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop",
  bio:
    "Sanjay Salunkhe is the President and Global Head of Digital and Software Services of our Company.",
};

/* ============================================================
   ENTERPRISE AUTOMATION BLOGS
============================================================ */

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-powered-automation-enterprise-software",
    title:
      "AI Powered Automation: Transforming Enterprise Software Delivery",
    category: "Enterprise Automation",
    service: "enterprise-automation",
    lastUpdated: "Nov 10, 2025",
    readTime: "6 min read",
    heroImage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Explore how AI powered automation helps enterprises accelerate software delivery, improve quality, reduce repetitive work, and build more reliable digital operations.",
    author: AUTHOR,
    intro: [
      "Enterprise software delivery is becoming increasingly complex. Development teams need to release software faster while maintaining quality, security, scalability, and operational reliability.",
      "AI powered automation is helping enterprises close this gap. Instead of relying entirely on manual development, testing, monitoring, and operational processes, organizations can use intelligent automation to improve productivity across the software lifecycle.",
      "Starfii combines enterprise automation, AI driven engineering, quality engineering, and modern delivery practices to help organizations automate repetitive work while keeping engineering teams focused on higher value business and technology outcomes.",
    ],
    sections: [
      {
        heading: "1. Intelligent Software Delivery",
        paragraphs: [
          "AI powered automation can support software teams across requirements analysis, development, testing, deployment, monitoring, and maintenance. This creates a more connected delivery lifecycle and reduces the amount of repetitive manual work required from engineering teams.",
        ],
      },
      {
        heading: "2. AI Driven Quality Engineering",
        paragraphs: [
          "AI assisted quality engineering helps teams generate test cases, identify potential defects, improve test coverage, and automate regression testing across applications. This allows quality teams to detect issues earlier and support more frequent releases.",
        ],
      },
      {
        heading: "3. Automated Regression Testing",
        paragraphs: [
          "Enterprise applications often require large regression test suites because changes in one area can affect multiple business processes. Intelligent automation can execute repeatable tests consistently and help teams identify failures before software reaches production.",
        ],
      },
      {
        heading: "4. Self Healing Test Automation",
        paragraphs: [
          "Modern AI enabled testing approaches can help identify changes in application interfaces and reduce the maintenance effort associated with automated test scripts. This makes automation more resilient as applications evolve.",
        ],
      },
      {
        heading: "5. Developer Productivity",
        paragraphs: [
          "AI automation can reduce repetitive coding, documentation, testing, debugging, and analysis activities. Developers can spend more time on architecture, business logic, product decisions, and solving complex engineering problems.",
        ],
      },
      {
        heading: "6. Enterprise Workflow Automation",
        paragraphs: [
          "Automation can extend beyond software engineering into enterprise workflows. Organizations can automate repetitive approval processes, data movement, document processing, operational tasks, and business system interactions.",
        ],
      },
      {
        heading: "7. The Business Impact",
        paragraphs: [
          "When intelligent automation is combined with modern engineering practices, enterprises can improve delivery speed, software quality, operational efficiency, and scalability.",
          "The objective is not to replace engineering teams. The objective is to augment their capabilities and allow people to focus on work that requires business context, creativity, judgment, and technical expertise.",
        ],
      },
      {
        heading: "The Future of Enterprise Automation",
        paragraphs: [
          "Enterprise automation is moving toward intelligent systems that can understand context, execute workflows, identify exceptions, and continuously improve processes.",
          "As AI agents become more capable, enterprises will increasingly connect automation across software engineering, business operations, data platforms, customer experiences, and IT operations.",
        ],
      },
    ],
  },

  {
    slug: "intelligent-process-automation-enterprise",
    title:
      "Intelligent Process Automation for Enterprise Operations",
    category: "Enterprise Automation",
    service: "enterprise-automation",
    lastUpdated: "Nov 3, 2025",
    readTime: "7 min read",
    heroImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Learn how intelligent process automation helps enterprises simplify repetitive workflows, improve operational efficiency, and create more scalable business processes.",
    author: AUTHOR,
    intro: [
      "Enterprise operations often depend on repetitive processes that span multiple teams, applications, documents, and approval stages.",
      "Intelligent process automation combines workflow automation, AI, data, and business rules to simplify these processes and reduce manual effort.",
    ],
    sections: [
      {
        heading: "Automating Repetitive Enterprise Processes",
        paragraphs: [
          "Organizations can automate repetitive activities such as data entry, document processing, approvals, notifications, reconciliation, and system updates.",
        ],
      },
      {
        heading: "AI for Decision Support",
        paragraphs: [
          "AI can analyze business information and help teams identify patterns, prioritize work, and make faster decisions while keeping human oversight where it matters.",
        ],
      },
      {
        heading: "Connecting Enterprise Systems",
        paragraphs: [
          "Automation becomes more powerful when applications and business systems can exchange information through APIs and integration platforms.",
        ],
      },
      {
        heading: "Improving Operational Efficiency",
        paragraphs: [
          "By reducing repetitive manual work and standardizing processes, enterprises can improve consistency, reduce delays, and allow employees to focus on higher value activities.",
        ],
      },
    ],
  },

  {
    slug: "hyperautomation-ai-enterprise",
    title:
      "Hyperautomation and AI: Building the Next Generation Enterprise",
    category: "Enterprise Automation",
    service: "enterprise-automation",
    lastUpdated: "Oct 27, 2025",
    readTime: "8 min read",
    heroImage:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Discover how enterprises can combine AI, automation, integration, and analytics to build intelligent and scalable operating models.",
    author: AUTHOR,
    intro: [
      "Traditional automation focuses on individual tasks. Hyperautomation takes a broader approach by connecting processes, systems, data, AI, and automation technologies across the enterprise.",
      "The result is an operating environment where repetitive activities can be automated while employees remain responsible for decisions that require context and judgment.",
    ],
    sections: [
      {
        heading: "What Is Hyperautomation?",
        paragraphs: [
          "Hyperautomation combines multiple technologies and automation techniques to automate processes from beginning to end rather than automating isolated tasks.",
        ],
      },
      {
        heading: "AI and Automation Together",
        paragraphs: [
          "AI adds intelligence to automation by helping systems understand information, classify data, identify patterns, and support decisions.",
        ],
      },
      {
        heading: "Enterprise Integration",
        paragraphs: [
          "Successful automation requires systems to work together. APIs, cloud platforms, integration services, and modern architectures provide the foundation for connected automation.",
        ],
      },
      {
        heading: "Scaling Automation",
        paragraphs: [
          "Enterprises can establish automation standards, reusable components, governance practices, and monitoring capabilities to scale automation across business functions.",
        ],
      },
    ],
  },

  {
    slug: "ai-automation-quality-engineering",
    title:
      "AI Automation in Quality Engineering: Faster and Smarter Software Testing",
    category: "Enterprise Automation",
    service: "enterprise-automation",
    lastUpdated: "Oct 20, 2025",
    readTime: "6 min read",
    heroImage:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Explore how AI automation can modernize quality engineering, increase test coverage, reduce repetitive testing, and support faster enterprise software releases.",
    author: AUTHOR,
    intro: [
      "Quality engineering is becoming a strategic part of modern software delivery. Enterprises need to test complex applications continuously while keeping release cycles short.",
      "AI automation can help quality engineering teams move from repetitive manual testing toward intelligent, continuous, and risk based testing practices.",
    ],
    sections: [
      {
        heading: "AI Assisted Test Case Generation",
        paragraphs: [
          "AI can analyze application requirements and existing test scenarios to help teams create additional test cases and identify areas that may require deeper validation.",
        ],
      },
      {
        heading: "Continuous Regression Testing",
        paragraphs: [
          "Automated regression testing allows teams to repeatedly validate critical application functionality as new features and fixes are introduced.",
        ],
      },
      {
        heading: "Defect Detection",
        paragraphs: [
          "AI assisted analysis can help identify unusual application behavior and prioritize potential defects based on business and technical risk.",
        ],
      },
      {
        heading: "Quality at Enterprise Scale",
        paragraphs: [
          "A combination of automation, AI, test frameworks, CI/CD, and observability enables quality engineering teams to support large application portfolios without relying exclusively on manual testing.",
        ],
      },
    ],
  },

  {
    slug: "enterprise-workflow-automation-digital-transformation",
    title:
      "Enterprise Workflow Automation: From Manual Processes to Digital Operations",
    category: "Enterprise Automation",
    service: "enterprise-automation",
    lastUpdated: "Oct 13, 2025",
    readTime: "7 min read",
    heroImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "See how enterprise workflow automation can simplify complex processes, connect business applications, and create more efficient digital operations.",
    author: AUTHOR,
    intro: [
      "Many enterprises still depend on manual workflows that require employees to move information between applications, validate documents, request approvals, and complete repetitive operational activities.",
      "Workflow automation provides a structured way to digitize these processes and connect people, applications, data, and business rules.",
    ],
    sections: [
      {
        heading: "Digitizing Manual Workflows",
        paragraphs: [
          "Organizations can identify repetitive processes and convert them into digital workflows with defined steps, business rules, notifications, and approvals.",
        ],
      },
      {
        heading: "Connecting People and Applications",
        paragraphs: [
          "Modern workflow automation can connect employees with CRM, ERP, finance, HR, customer service, and other enterprise applications.",
        ],
      },
      {
        heading: "Improving Visibility",
        paragraphs: [
          "Digital workflows create better visibility into process status, bottlenecks, approvals, and operational performance.",
        ],
      },
      {
        heading: "Creating Scalable Operations",
        paragraphs: [
          "Standardized workflows help enterprises handle increasing transaction volumes without proportionally increasing manual operational effort.",
        ],
      },
    ],
  },

  {
    slug: "generative-ai-software-development",
    title:
      "Generative AI for Software Development: Smarter Builds, Faster Delivery, Future Ready Systems",
    category: "Enterprise Automation",
    service: "enterprise-automation",
    lastUpdated: "Nov 17, 2025",
    readTime: "7 min read",
    heroImage:
      "https://images.unsplash.com/photo-1620121684840-edffcfc4b878?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Explore how Starfii uses generative AI to revolutionize software development, accelerating builds, simplifying maintenance, and modernizing legacy systems with intelligent automation.",
    author: AUTHOR,
    intro: [
      "Generative AI is changing how software gets built. Instead of writing every line of code by hand, engineering teams can now use AI to draft code, generate documentation, and accelerate routine development tasks.",
      "Starfii applies generative AI across the software development lifecycle, from initial scaffolding to legacy modernization, so teams can move faster without sacrificing code quality or maintainability.",
    ],
    sections: [
      {
        heading: "Accelerating Code Generation",
        paragraphs: [
          "Generative AI can draft boilerplate code, unit tests, and integration scaffolding, letting developers focus on the business logic and architectural decisions that actually require human judgment.",
        ],
      },
      {
        heading: "Simplifying Maintenance",
        paragraphs: [
          "AI assisted tooling can summarize unfamiliar codebases, flag outdated dependencies, and suggest refactors, reducing the time engineers spend understanding legacy code before they can safely change it.",
        ],
      },
      {
        heading: "Modernizing Legacy Systems",
        paragraphs: [
          "Generative AI can help translate legacy code patterns into modern frameworks and languages, supporting a faster and lower risk migration path for enterprises with aging application portfolios.",
        ],
      },
      {
        heading: "Building Future Ready Systems",
        paragraphs: [
          "Combining generative AI with strong engineering practices, code review, and testing discipline helps enterprises ship software that is both faster to deliver and easier to evolve as requirements change.",
        ],
      },
    ],
  },

  {
    slug: "agile-product-engineering-mach-technologies",
    title:
      "Driving ROI Through Agile Product Engineering and MACH Technologies",
    category: "Enterprise Automation",
    service: "enterprise-automation",
    lastUpdated: "Oct 6, 2025",
    readTime: "7 min read",
    heroImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Stop rebuilding for every channel. See how Starfii combines MACH architecture with agile product engineering to enable modular software products with lower total cost of ownership.",
    author: AUTHOR,
    intro: [
      "Enterprises are under pressure to launch new digital experiences across web, mobile, and emerging channels without rebuilding their entire technology stack each time.",
      "MACH architecture, Microservices, API first, Cloud native, and Headless, combined with agile product engineering practices, gives enterprises a modular foundation that adapts as business needs change.",
    ],
    sections: [
      {
        heading: "What MACH Architecture Enables",
        paragraphs: [
          "MACH principles let enterprises assemble best of breed components instead of committing to a single monolithic platform, making it easier to swap or upgrade individual pieces of the stack over time.",
        ],
      },
      {
        heading: "Agile Product Engineering in Practice",
        paragraphs: [
          "Agile product engineering pairs iterative delivery with continuous customer feedback, helping teams validate features quickly and avoid investing heavily in the wrong direction.",
        ],
      },
      {
        heading: "Reducing Total Cost of Ownership",
        paragraphs: [
          "Modular, API first systems reduce the duplicated engineering effort that comes from building separate solutions for each channel, lowering long term maintenance and integration costs.",
        ],
      },
      {
        heading: "Measuring the Business Impact",
        paragraphs: [
          "Enterprises that combine MACH technologies with agile delivery typically see faster time to market for new features along with a more predictable, lower cost engineering roadmap.",
        ],
      },
    ],
  },

  {
    slug: "ai-led-engineering-digital-products",
    title: "Building Smarter Digital Products with AI Led Engineering",
    category: "Enterprise Automation",
    service: "enterprise-automation",
    lastUpdated: "Sep 29, 2025",
    readTime: "6 min read",
    heroImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Discover how AI led engineering helps product teams move from idea to production faster while improving software quality, scalability, and customer experience.",
    author: AUTHOR,
    intro: [
      "Product teams are expected to ship faster while improving quality and customer experience at the same time, a combination that is difficult to achieve with purely manual engineering processes.",
      "AI led engineering embeds intelligent tooling directly into the product development process, from requirements gathering through release, so improvements compound across every stage of delivery.",
    ],
    sections: [
      {
        heading: "From Idea to Production Faster",
        paragraphs: [
          "AI assisted requirements analysis and prototyping help product teams validate concepts earlier, shortening the path from an initial idea to a working, testable product.",
        ],
      },
      {
        heading: "Improving Software Quality",
        paragraphs: [
          "Embedding AI into code review, testing, and monitoring helps teams catch defects and performance issues earlier in the development cycle rather than after release.",
        ],
      },
      {
        heading: "Scaling Digital Products",
        paragraphs: [
          "AI led engineering practices support scalable architecture decisions by helping teams model expected load, identify bottlenecks, and plan capacity ahead of growth.",
        ],
      },
      {
        heading: "Elevating Customer Experience",
        paragraphs: [
          "With more engineering time freed up from repetitive tasks, product teams can invest more attention in usability, accessibility, and the details that shape customer experience.",
        ],
      },
    ],
  },

  {
    slug: "modern-software-delivery-enterprise-growth",
    title: "Modern Software Delivery for Enterprise Growth",
    category: "Enterprise Automation",
    service: "enterprise-automation",
    lastUpdated: "Sep 22, 2025",
    readTime: "6 min read",
    heroImage:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Learn how modern engineering practices, cloud platforms, and automation help enterprises deliver reliable digital products faster and scale with confidence.",
    author: AUTHOR,
    intro: [
      "As enterprises grow, their software delivery processes need to keep pace without introducing instability or slowing down release cycles.",
      "Modern software delivery brings together cloud native infrastructure, automation, and disciplined engineering practices so growth does not come at the expense of reliability.",
    ],
    sections: [
      {
        heading: "Cloud Native Foundations",
        paragraphs: [
          "Cloud native platforms give enterprises the elasticity to scale infrastructure up or down based on demand, avoiding the capacity planning guesswork of traditional data centers.",
        ],
      },
      {
        heading: "Automating the Delivery Pipeline",
        paragraphs: [
          "CI/CD automation reduces the manual steps involved in building, testing, and releasing software, helping teams ship more frequently with fewer errors introduced during deployment.",
        ],
      },
      {
        heading: "Reliability at Scale",
        paragraphs: [
          "Observability, monitoring, and incident response practices help enterprises catch and resolve issues quickly, keeping digital products dependable as usage grows.",
        ],
      },
      {
        heading: "Supporting Long Term Growth",
        paragraphs: [
          "When modern delivery practices are in place, enterprises can expand into new markets and launch new products without needing to re architect their engineering foundation each time.",
        ],
      },
    ],
  },

  /* ============================================================
     ENTERPRISE PLATFORM SERVICES BLOGS
     These slugs exactly match the homepage insights carousel.
  ============================================================ */

  {
    slug: "enterprise-platform-engineering",
    title:
      "Enterprise Platform Engineering: Building the Foundation for Scalable Digital Operations",
    category: "Enterprise Platform",
    service: "enterprise-platform-services",
    lastUpdated: "Nov 17, 2025",
    readTime: "7 min read",
    heroImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Explore the principles behind resilient enterprise platforms, from architecture and integration to cloud, observability, security, and continuous delivery.",
    author: AUTHOR,
    intro: [
      "Enterprise platforms provide the technology foundation that connects applications, data, infrastructure, APIs, and business workflows across an organization.",
      "A modern platform approach helps enterprises reduce technology complexity while creating reusable capabilities that can support new products, services, and digital experiences.",
      "Starfii helps enterprises engineer secure, scalable platforms across cloud, integration, data, AI, security, observability, and automated delivery.",
    ],
    sections: [
      {
        heading: "1. What Is Enterprise Platform Engineering?",
        paragraphs: [
          "Enterprise platform engineering brings architecture, infrastructure, applications, integration, security, and operational capabilities together around a reusable technology foundation.",
        ],
      },
      {
        heading: "2. Building Reusable Platform Capabilities",
        paragraphs: [
          "Reusable APIs, services, deployment patterns, observability components, identity controls, and infrastructure capabilities help teams deliver new solutions without repeatedly rebuilding the same foundation.",
        ],
      },
      {
        heading: "3. Cloud and Platform Modernization",
        paragraphs: [
          "Cloud native architecture gives enterprise platforms the flexibility to scale while improving resilience, automation, monitoring, and operational efficiency.",
        ],
      },
      {
        heading: "4. Integration and Connectivity",
        paragraphs: [
          "APIs and modern integration patterns connect applications, data sources, partners, and workflows so enterprise capabilities can operate as a connected ecosystem rather than isolated systems.",
        ],
      },
      {
        heading: "5. Security and Observability",
        paragraphs: [
          "Identity, access control, secure architecture, monitoring, logging, tracing, and performance engineering help enterprises operate critical platforms with stronger security and reliability.",
        ],
      },
      {
        heading: "6. The Business Value",
        paragraphs: [
          "A well engineered enterprise platform reduces duplicated technology effort, improves delivery consistency, and creates a foundation that can evolve as business priorities change.",
        ],
      },
    ],
  },

  {
    slug: "enterprise-cloud-modernization",
    title:
      "Enterprise Cloud Modernization: From Legacy Complexity to Scalable Platforms",
    category: "Enterprise Platform",
    service: "enterprise-platform-services",
    lastUpdated: "Nov 10, 2025",
    readTime: "7 min read",
    heroImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Learn how enterprises can modernize critical workloads incrementally while improving resilience, agility, security, and operational efficiency.",
    author: AUTHOR,
    intro: [
      "Many enterprise technology estates contain applications and infrastructure that have evolved over years. Modernization creates a path from this complexity toward more scalable and maintainable platforms.",
      "Cloud modernization does not require every workload to be replaced at once. A structured, incremental approach can protect business continuity while improving the technology foundation.",
    ],
    sections: [
      {
        heading: "1. Assessing the Existing Platform",
        paragraphs: [
          "A successful modernization program begins with understanding application dependencies, data flows, infrastructure constraints, security requirements, and business criticality.",
        ],
      },
      {
        heading: "2. Choosing the Right Modernization Path",
        paragraphs: [
          "Enterprises can combine rehosting, replatforming, refactoring, API enablement, containerization, and selective replacement depending on the needs of each workload.",
        ],
      },
      {
        heading: "3. Cloud Native Architecture",
        paragraphs: [
          "Cloud native services, automation, infrastructure as code, and scalable architectures help create platforms that can respond more efficiently to changing demand.",
        ],
      },
      {
        heading: "4. Modernizing Without Disruption",
        paragraphs: [
          "Incremental migration patterns allow enterprises to modernize critical capabilities while keeping essential business operations running throughout the transformation.",
        ],
      },
      {
        heading: "5. Operating the Modern Platform",
        paragraphs: [
          "Observability, security, DevOps, and reliability engineering are essential to ensuring that modernized workloads remain secure, measurable, and dependable after migration.",
        ],
      },
    ],
  },

  {
    slug: "enterprise-integration-api-strategy",
    title:
      "Enterprise Integration and API Strategy for Connected Systems",
    category: "Enterprise Platform",
    service: "enterprise-platform-services",
    lastUpdated: "Nov 3, 2025",
    readTime: "7 min read",
    heroImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "See how APIs and modern integration patterns help enterprises connect applications, data, partners, and workflows without creating new technology silos.",
    author: AUTHOR,
    intro: [
      "Enterprise organizations depend on many applications, platforms, data sources, and external systems. Without a clear integration strategy, these systems can become isolated and difficult to evolve.",
      "A modern API and integration strategy creates dependable connections between enterprise capabilities while supporting security, reuse, scalability, and operational visibility.",
    ],
    sections: [
      {
        heading: "1. API First Enterprise Architecture",
        paragraphs: [
          "API first architecture exposes reusable business capabilities through well defined interfaces, making it easier for applications and teams to consume enterprise services consistently.",
        ],
      },
      {
        heading: "2. Connecting Applications and Data",
        paragraphs: [
          "Integration services can connect CRM, ERP, finance, customer experience, data, and operational systems so information can move reliably between business processes.",
        ],
      },
      {
        heading: "3. Microservices and Modular Platforms",
        paragraphs: [
          "Modular services allow enterprises to evolve individual capabilities without requiring large scale changes to an entire application estate.",
        ],
      },
      {
        heading: "4. Security and Governance",
        paragraphs: [
          "API authentication, authorization, rate controls, monitoring, lifecycle management, and governance help enterprises expose capabilities safely at scale.",
        ],
      },
      {
        heading: "5. Creating Connected Enterprise Experiences",
        paragraphs: [
          "When systems and capabilities are connected through reliable APIs and integrations, enterprises can create faster employee, partner, and customer experiences.",
        ],
      },
    ],
  },

  {
    slug: "enterprise-ai-platforms",
    title:
      "Enterprise AI Platforms: Moving From Experiments to Business Value",
    category: "Enterprise Platform",
    service: "enterprise-platform-services",
    lastUpdated: "Oct 27, 2025",
    readTime: "8 min read",
    heroImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Discover how organizations can operationalize Generative AI and LLM capabilities with the platform, data, security, and governance needed for enterprise scale.",
    author: AUTHOR,
    intro: [
      "Enterprise AI initiatives often begin with experiments and proofs of concept. The challenge is turning those experiments into secure, governed, reliable capabilities that deliver measurable business value.",
      "An enterprise AI platform provides the foundation for models, data, applications, security, governance, monitoring, and operational workflows to work together.",
    ],
    sections: [
      {
        heading: "1. From AI Experiments to Production",
        paragraphs: [
          "Production AI requires more than a model. Enterprises need dependable data pipelines, application integration, security controls, evaluation practices, monitoring, and operational ownership.",
        ],
      },
      {
        heading: "2. Generative AI and LLM Integration",
        paragraphs: [
          "Generative AI and LLM capabilities can be integrated into enterprise applications, knowledge workflows, customer experiences, and employee productivity solutions.",
        ],
      },
      {
        heading: "3. Data as the AI Foundation",
        paragraphs: [
          "Trusted enterprise data, governed access, quality pipelines, and appropriate context are critical to building AI experiences that are useful and dependable.",
        ],
      },
      {
        heading: "4. Security and Responsible AI",
        paragraphs: [
          "Enterprise AI platforms need controls for identity, data protection, model access, monitoring, evaluation, and governance so AI capabilities can be deployed responsibly.",
        ],
      },
      {
        heading: "5. Scaling AI Across the Enterprise",
        paragraphs: [
          "A shared platform approach makes it easier to reuse AI capabilities and standards across multiple applications instead of creating disconnected AI implementations.",
        ],
      },
    ],
  },

  {
    slug: "enterprise-devops-reliability",
    title:
      "Enterprise DevOps and Reliability for Always On Digital Platforms",
    category: "Enterprise Platform",
    service: "enterprise-platform-services",
    lastUpdated: "Oct 20, 2025",
    readTime: "7 min read",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Learn how automation, observability, SRE, and quality engineering create safer releases and more reliable enterprise technology operations.",
    author: AUTHOR,
    intro: [
      "Enterprise platforms must remain dependable while development teams continue to release new capabilities. DevOps and reliability engineering bring automation and operational discipline into the software lifecycle.",
      "By combining CI/CD, infrastructure automation, observability, quality engineering, and SRE practices, enterprises can improve release confidence and platform resilience.",
    ],
    sections: [
      {
        heading: "1. Automated Software Delivery",
        paragraphs: [
          "CI/CD automation standardizes build, test, deployment, and release activities so teams can deliver changes more frequently with fewer manual errors.",
        ],
      },
      {
        heading: "2. Infrastructure Automation",
        paragraphs: [
          "Infrastructure as code and automated provisioning create repeatable environments and reduce configuration drift across enterprise platforms.",
        ],
      },
      {
        heading: "3. Observability",
        paragraphs: [
          "Metrics, logs, traces, alerts, and service health indicators provide the visibility teams need to understand platform behavior and resolve issues quickly.",
        ],
      },
      {
        heading: "4. Site Reliability Engineering",
        paragraphs: [
          "SRE practices use reliability objectives, automation, incident response, and performance engineering to make availability and operational health measurable.",
        ],
      },
      {
        heading: "5. Quality Engineering at Scale",
        paragraphs: [
          "Automated functional, integration, performance, and regression testing helps enterprise teams maintain quality while increasing the speed of delivery.",
        ],
      },
    ],
  },
];

/* ============================================================
   BLOG HELPERS
============================================================ */

// FIXED: `getBlogBySlug` used to hardcode `service === "enterprise-automation"`,
// so every enterprise-platform-services post returned undefined and any
// page under /enterprise-platform-services/blogs/[slug] triggered notFound().
// It now accepts an optional `service` filter and works for BOTH sections.
export function getBlogBySlug(
  slug: string,
  service?: BlogService
): BlogPost | undefined {
  return blogPosts.find(
    (blog) =>
      blog.slug === slug &&
      (!service || blog.service === service)
  );
}

export function getRelatedBlogs(
  currentSlug: string,
  count = 3
): BlogPost[] {
  const currentBlog = blogPosts.find(
    (blog) => blog.slug === currentSlug
  );

  if (!currentBlog) {
    return [];
  }

  return blogPosts
    .filter(
      (blog) =>
        blog.slug !== currentSlug &&
        blog.service === currentBlog.service
    )
    .slice(0, count);
}
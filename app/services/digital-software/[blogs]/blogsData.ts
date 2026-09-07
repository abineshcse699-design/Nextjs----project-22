
export type BlogHighlight = {
  number: string;
  title: string;
  body: string;
};

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
  quote?: string;
};

export type BlogBenefit = {
  title: string;
  body: string;
};

export type BlogProcessStep = {
  number: string;
  title: string;
  body: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
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

  highlights?: BlogHighlight[];

  sections: BlogSection[];

  benefits?: BlogBenefit[];

  process?: BlogProcessStep[];

  keyTakeaways?: string[];

  conclusion?: string;

  cta?: {
    title: string;
    body: string;
    buttonText: string;
    buttonHref: string;
  };
};

const AUTHOR = {
  name: "Sanjay Salunkhe",
  role: "President and Global Head of Digital and Software Services",
  photo:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop",
  bio:
    "Sanjay Salunkhe is the President and Global Head of Digital and Software Services of our Company.",
};

export const blogPosts: BlogPost[] = [
  {
    slug: "generative-ai-software-development",
    title:
      "Generative AI for Software Development: Smarter Builds, Faster Delivery, Future Ready Systems",
    category: "Blog",
    lastUpdated: "Nov 17, 2025",
    readTime: "8 min read",

    heroImage:
      "https://images.unsplash.com/photo-1620121684840-edffcfc4b878?q=80&w=1600&auto=format&fit=crop",

    excerpt:
      "Explore how Starfii uses generative AI to revolutionize software development, accelerating builds, simplifying maintenance, and modernizing legacy systems with intelligent automation.",

    author: AUTHOR,

    intro: [
      "Software development has always been complex. Developers are under pressure to ship faster, adapt to change quickly, and keep systems secure and scalable. But with increasing complexity and legacy systems dragging performance down, it is getting harder to keep up.",

      "That is where Generative AI steps in. It is not just about writing code faster, though that is a big part of it. Generative AI is helping teams rethink how they build, maintain, and modernize software in scalable and efficient ways.",

      "Think of it as a smart partner that understands your systems, helps with planning, writing, testing, and even modernization, all while learning and adapting to your business context. It helps augment your team's knowledge and accelerates delivery like never before.",
    ],

    highlights: [
      {
        number: "01",
        title: "Faster Development",
        body:
          "AI assisted development can reduce repetitive engineering work and help developers move from idea to implementation faster.",
      },
      {
        number: "02",
        title: "Smarter Engineering",
        body:
          "AI can support architecture, requirements, testing, documentation, and modernization throughout the software lifecycle.",
      },
      {
        number: "03",
        title: "Future Ready Systems",
        body:
          "Organizations can combine AI with modern engineering practices to build software that is easier to evolve and scale.",
      },
    ],

    sections: [
      {
        heading: "1. Faster Code Generation",
        paragraphs: [
          "This is the most well known use case. Developers can now generate boilerplate or even complex code blocks with simple prompts. What used to take hours can now be done in minutes.",

          "It does not just save time. It frees developers to focus on solving harder problems, making architectural decisions, and improving the product itself.",
        ],
      },

      {
        heading: "2. Smarter Design and Architecture",
        paragraphs: [
          "Generative AI does not just write code. It can help teams explore scalable and reusable solutions, compare implementation approaches, and identify potential design issues earlier in the development process.",

          "Used correctly, AI becomes an additional engineering perspective that helps architects and developers evaluate options before significant implementation effort is committed.",
        ],
      },

      {
        heading: "3. Better Testing and QA",
        paragraphs: [
          "AI can create unit tests, regression test cases, test data, and additional scenarios that may otherwise be missed during manual test planning.",

          "This makes testing more proactive rather than reactive. The result can be more stable releases, earlier defect detection, and better confidence across the software delivery lifecycle.",
        ],
      },

      {
        heading: "4. Ongoing Maintenance",
        paragraphs: [
          "Instead of spending hours searching through large codebases, AI assisted tools can analyze source code, identify potential issues, summarize unfamiliar modules, and suggest possible fixes.",

          "This helps maintenance teams spend less time understanding existing systems and more time improving them.",
        ],
      },

      {
        heading: "5. Knowledge Capture and Documentation",
        paragraphs: [
          "AI can turn undocumented code into readable explanations, technical summaries, diagrams, and user documentation.",

          "This is particularly valuable for enterprise applications where knowledge may be concentrated among a small number of experienced engineers.",

          "Better documentation also improves onboarding and makes modernization projects easier to plan.",
        ],
      },

      {
        heading: "6. Effort Estimation and Planning",
        paragraphs: [
          "AI can analyze information from previous projects and engineering work to support estimation, planning, and risk identification.",

          "With better information available during sprint planning and roadmap discussions, teams can make more informed decisions about priorities and delivery expectations.",
        ],
      },

      {
        heading: "7. Legacy System Modernization",
        paragraphs: [
          "Legacy applications often contain decades of business knowledge embedded in code, databases, integrations, and operational processes.",

          "AI can assist engineering teams in understanding legacy applications, identifying business rules, documenting dependencies, and creating modernization roadmaps.",

          "This can reduce the manual analysis required before modernization begins and give organizations a clearer path toward modern platforms.",
        ],
        image:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Enterprise technology infrastructure",
      },

      {
        heading: "8. AI Assisted Requirements Engineering",
        paragraphs: [
          "Requirements are one of the most important foundations of software delivery. Ambiguous requirements can create misunderstandings, rework, delays, and unnecessary development costs.",

          "AI can assist product managers and engineering teams by transforming business requirements into structured user stories, acceptance criteria, technical considerations, and potential test scenarios.",

          "Engineering teams should review and refine these outputs before implementation. Human validation remains essential because business context and product priorities cannot be delegated entirely to automation.",
        ],
      },

      {
        heading: "9. AI Assisted Developer Productivity",
        paragraphs: [
          "AI coding assistants can support developers with code generation, refactoring, debugging, documentation, and repetitive implementation tasks.",

          "The biggest opportunity is not simply producing more code. It is allowing experienced developers to spend more time on architecture, customer problems, complex logic, and engineering quality.",

          "Organizations should therefore measure AI adoption by outcomes such as delivery speed, quality, developer experience, and business value rather than the amount of AI generated code.",
        ],
      },

      {
        heading: "10. AI Powered Quality Engineering",
        paragraphs: [
          "Quality engineering is becoming increasingly important as applications grow more distributed and release cycles become shorter.",

          "AI can support test case generation, defect analysis, regression testing, test prioritization, and failure investigation.",

          "When combined with automation and continuous integration, these capabilities can help teams identify quality risks earlier in the delivery process.",
        ],
        image:
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Software engineering team working together",
      },

      {
        heading: "11. AI Assisted User Experience Design",
        paragraphs: [
          "User experience remains a critical part of digital product success. AI can help UX teams analyze customer behavior, identify friction points, explore user journeys, and generate early design concepts.",

          "AI can also help teams create prototypes that can be tested before significant engineering investment is made.",

          "Human designers remain essential because empathy, accessibility, brand identity, emotion, and customer context require human judgment.",
        ],

        quote:
          "AI can accelerate design exploration, but human empathy remains at the center of great user experiences.",

        image:
          "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "UX designers working on a digital product",
      },

      {
        heading: "12. AI Assisted Code Review",
        paragraphs: [
          "Code review is an important engineering practice, but reviewing large volumes of code can consume significant developer time.",

          "AI assisted code review can help identify potential bugs, security concerns, duplicated logic, performance issues, and maintainability problems before code reaches production.",

          "These recommendations should remain an additional engineering signal rather than an automatic approval mechanism. Experienced developers should validate AI recommendations against application context and business requirements.",
        ],
      },

      {
        heading: "13. AI for Application Performance",
        paragraphs: [
          "Digital products need to remain responsive as traffic, data volumes, and user expectations increase.",

          "AI can help engineering teams analyze application telemetry and identify patterns that may not be obvious through manual analysis.",

          "This creates an opportunity to move from reactive performance troubleshooting toward more proactive engineering practices.",
        ],

        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Enterprise technology infrastructure",
      },

      {
        heading: "14. AI and Cloud Native Product Engineering",
        paragraphs: [
          "Cloud native platforms provide the scalability and flexibility required by modern digital products.",

          "AI can complement cloud native engineering by improving development workflows, testing, monitoring, deployment, and operational decision making.",

          "Engineering teams can combine APIs, containerized applications, cloud platforms, automated deployment pipelines, and AI capabilities to create technology foundations that can evolve as business requirements change.",
        ],
      },

      {
        heading: "15. Responsible AI in Digital Products",
        paragraphs: [
          "As AI becomes part of customer facing products, organizations need to consider responsible AI from the beginning of product development.",

          "Teams should consider privacy, security, transparency, fairness, data quality, model performance, and appropriate human oversight when designing AI powered experiences.",

          "Responsible AI should not be treated as a final compliance activity. It should be incorporated into product strategy, architecture, engineering, testing, and operations from the beginning.",
        ],

        quote:
          "Responsible AI is not separate from product engineering. It is part of building trustworthy digital products.",
      },

      {
        heading: "16. Measuring the Success of AI Led Engineering",
        paragraphs: [
          "AI adoption should be measured through meaningful engineering and business outcomes rather than the number of AI tools introduced into an organization.",

          "Engineering leaders can evaluate improvements in development cycle time, defect rates, test coverage, developer productivity, release frequency, application performance, and customer experience.",

          "Clear measurement allows organizations to identify which AI initiatives are delivering real value and which require adjustment.",
        ],
      },

      {
        heading: "17. Scaling AI Engineering Across Teams",
        paragraphs: [
          "Once successful AI engineering practices have been validated, organizations can create reusable patterns that can be adopted by multiple product teams.",

          "Shared AI platforms, reusable prompts, engineering guidelines, secure development environments, common APIs, and governance frameworks can reduce duplication and make adoption easier.",

          "A centralized enablement model combined with distributed product ownership can help enterprises scale AI capabilities while keeping teams close to their customers.",
        ],

        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Engineering team collaborating on digital products",
      },

      {
        heading: "18. The Next Generation of Digital Product Engineering",
        paragraphs: [
          "The future of digital product engineering will increasingly combine human creativity with AI assisted development.",

          "Product managers, designers, architects, developers, testers, and operations teams will work with intelligent systems throughout the product lifecycle.",

          "AI agents may increasingly help teams understand requirements, generate implementation options, create tests, monitor production systems, and recommend improvements.",

          "However, successful products will continue to depend on human understanding of customers, business strategy, ethics, and technology.",

          "Organizations that build the right balance between AI capabilities and human expertise can create digital products that are faster to build, easier to improve, and better aligned with customer needs.",
        ],
      },
    ],

    benefits: [
      {
        title: "Faster Requirements Analysis",
        body:
          "AI can help product and engineering teams transform business requirements into structured user stories, acceptance criteria, and technical considerations faster.",
      },
      {
        title: "Developer Productivity",
        body:
          "AI assisted development reduces repetitive work and gives engineers more time for architecture, complex problem solving, and customer focused engineering.",
      },
      {
        title: "Better Quality",
        body:
          "AI supported testing and code review can provide additional signals that help engineering teams identify potential issues earlier.",
      },
      {
        title: "Better UX Decisions",
        body:
          "AI assisted analysis can help teams understand customer behavior and identify opportunities to improve digital journeys and experiences.",
      },
      {
        title: "Proactive Performance",
        body:
          "Intelligent analysis of application telemetry can help teams identify performance patterns and potential bottlenecks earlier.",
      },
      {
        title: "Responsible AI Adoption",
        body:
          "Security, privacy, governance, and human oversight can be incorporated into AI powered product engineering from the beginning.",
      },
      {
        title: "Scalable Engineering",
        body:
          "Reusable AI engineering patterns, platforms, and governance models make it easier to scale successful practices across product teams.",
      },
    ],

    process: [
      {
        number: "01",
        title: "Discover",
        body:
          "Understand the product vision, customer needs, business objectives, existing technology landscape, and opportunities where AI can provide meaningful value.",
      },
      {
        number: "02",
        title: "Design",
        body:
          "Define the product experience, architecture, AI capabilities, data requirements, security controls, and engineering approach.",
      },
      {
        number: "03",
        title: "Engineer",
        body:
          "Build the product using modern engineering practices while applying AI assisted development, testing, documentation, and quality engineering where appropriate.",
      },
      {
        number: "04",
        title: "Validate",
        body:
          "Test functionality, performance, security, AI behavior, usability, and business outcomes before production rollout.",
      },
      {
        number: "05",
        title: "Scale",
        body:
          "Continuously improve the product, measure outcomes, optimize engineering workflows, and scale successful AI practices across teams.",
      },
    ],

    keyTakeaways: [
      "AI can improve digital product engineering from discovery through production.",
      "AI assisted requirements engineering can reduce ambiguity and improve collaboration.",
      "AI can accelerate UX exploration while human designers remain responsible for customer empathy and experience quality.",
      "AI assisted code review can provide an additional layer of quality and security analysis.",
      "AI supported testing can help engineering teams identify defects earlier and improve coverage.",
      "Cloud native engineering provides a strong foundation for scalable AI powered products.",
      "Responsible AI should be considered throughout the product lifecycle.",
      "AI engineering success should be measured using business and engineering outcomes.",
      "Reusable AI engineering patterns can help enterprises scale adoption across teams.",
      "Human expertise remains essential for strategy, architecture, customer understanding, and responsible decision making.",
    ],

    conclusion:
      "AI led engineering represents a shift in how digital products are imagined, designed, built, tested, and improved. The opportunity is not to replace engineering expertise, but to augment it with intelligent capabilities that reduce repetitive work, improve decision making, and accelerate learning. Organizations that combine AI with strong product thinking, modern architecture, quality engineering, responsible governance, and human expertise can build digital products that evolve faster and create lasting business value.",

    cta: {
      title: "Ready to Build a Smarter Digital Product?",
      body:
        "Explore how AI led engineering can help your organization accelerate product development, improve software quality, modernize technology, and create better digital experiences.",
      buttonText: "Talk to Starfii",
      buttonHref: "/contact",
    },
  },

  {
    slug: "ai-powered-automation-enterprise-software",
    title:
      "AI Powered Automation: Transforming Enterprise Software Delivery",
    category: "Blog",
    lastUpdated: "Nov 10, 2025",
    readTime: "6 min read",

    heroImage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop",

    excerpt:
      "Stop trading speed for quality. See how Starfii's AI automation cuts test cycles by 70%, boosts developer productivity by 40%, and accelerates enterprise software delivery.",

    author: AUTHOR,

    intro: [
      "Enterprise software delivery has traditionally forced a trade off between speed and quality. AI powered automation is helping close that gap.",
      "Modern engineering teams can apply intelligent automation across testing, development, documentation, monitoring, and delivery workflows.",
    ],

    highlights: [
      {
        number: "01",
        title: "Automate",
        body:
          "Reduce repetitive engineering and testing work through intelligent automation.",
      },
      {
        number: "02",
        title: "Improve",
        body:
          "Use AI assisted quality engineering to identify issues earlier.",
      },
      {
        number: "03",
        title: "Accelerate",
        body:
          "Create shorter and more reliable software delivery cycles.",
      },
    ],

    sections: [
      {
        heading: "Where Automation Moves the Needle",
        paragraphs: [
          "From automated regression suites to intelligent test generation, AI driven QA reduces manual effort while increasing coverage across releases.",
          "Automation also helps teams create repeatable engineering workflows that can scale as applications and teams grow.",
        ],
      },
      {
        heading: "AI Driven Quality Engineering",
        paragraphs: [
          "AI assisted quality engineering helps teams identify defects earlier, improve test coverage, and reduce repetitive testing activities across the software delivery lifecycle.",
          "Combined with continuous integration and delivery, intelligent testing can become part of the development process rather than a final release activity.",
        ],
      },
      {
        heading: "The Business Impact",
        paragraphs: [
          "By combining intelligent automation with modern engineering practices, enterprises can shorten delivery cycles while maintaining software quality and operational reliability.",
          "The most important measure is not automation itself, but the improvement it creates in engineering productivity and customer outcomes.",
        ],
      },
    ],

    benefits: [
      {
        title: "Reduced Manual Effort",
        body:
          "Automate repetitive activities so engineering teams can focus on higher value work.",
      },
      {
        title: "Earlier Defect Detection",
        body:
          "Identify potential quality issues earlier in the software delivery lifecycle.",
      },
      {
        title: "Faster Releases",
        body:
          "Automation supports more frequent and consistent software releases.",
      },
      {
        title: "Better Engineering Visibility",
        body:
          "Intelligent analysis provides additional insight into delivery and quality trends.",
      },
    ],

    process: [
      {
        number: "01",
        title: "Assess",
        body:
          "Identify repetitive activities and quality bottlenecks across the delivery lifecycle.",
      },
      {
        number: "02",
        title: "Automate",
        body:
          "Introduce AI assisted automation where it can provide measurable value.",
      },
      {
        number: "03",
        title: "Integrate",
        body:
          "Connect automation with existing engineering and delivery workflows.",
      },
      {
        number: "04",
        title: "Measure",
        body:
          "Track productivity, quality, release frequency, and business impact.",
      },
    ],

    keyTakeaways: [
      "AI automation can improve enterprise software delivery speed and quality.",
      "Quality engineering becomes more proactive when AI is integrated into testing.",
      "Automation should target repetitive work while keeping human engineering judgment in the loop.",
      "Business outcomes should determine whether an automation initiative is successful.",
    ],

    conclusion:
      "AI powered automation gives enterprise engineering teams an opportunity to improve delivery without sacrificing quality. The strongest results come from combining intelligent automation with sound engineering practices, measurable outcomes, and human oversight.",

    cta: {
      title: "Accelerate Enterprise Software Delivery",
      body:
        "Discover where AI powered automation can improve your engineering lifecycle.",
      buttonText: "Talk to Starfii",
      buttonHref: "/contact",
    },
  },

  {
    slug: "agile-product-engineering-mach-technologies",
    title:
      "Driving ROI Through Agile Product Engineering and MACH Technologies",
    category: "Blog",
    lastUpdated: "Nov 3, 2025",
    readTime: "7 min read",

    heroImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop",

    excerpt:
      "Stop rebuilding for every channel. See how Starfii combines MACH architecture with agile product engineering to enable modular software products with lower total cost of ownership.",

    author: AUTHOR,

    intro: [
      "Modern enterprises need digital products that can evolve quickly as customer expectations, technology, and business models change.",
      "Agile product engineering and MACH principles provide a foundation for building modular and adaptable digital experiences.",
    ],

    highlights: [
      {
        number: "01",
        title: "Agile",
        body:
          "Deliver product improvements through shorter cycles and continuous feedback.",
      },
      {
        number: "02",
        title: "Composable",
        body:
          "Use modular technology components that can evolve independently.",
      },
      {
        number: "03",
        title: "Scalable",
        body:
          "Build technology foundations that can support changing business needs.",
      },
    ],

    sections: [
      {
        heading: "Agile Product Engineering",
        paragraphs: [
          "Agile product engineering helps teams continuously improve digital products through shorter development cycles, customer feedback, and incremental delivery.",
          "This product focused approach keeps engineering closely connected to customer and business outcomes.",
        ],
      },
      {
        heading: "Why MACH Technologies Matter",
        paragraphs: [
          "MACH architecture enables modular technology choices across microservices, APIs, cloud native platforms, and headless experiences.",
          "The modular approach gives organizations more flexibility as technology and customer expectations change.",
        ],
      },
      {
        heading: "Business Impact",
        paragraphs: [
          "Combining agile product engineering with MACH principles helps enterprises improve flexibility, accelerate delivery, and create digital experiences that can scale with business growth.",
        ],
      },
    ],

    benefits: [
      {
        title: "Modular Architecture",
        body:
          "Technology components can evolve independently without requiring complete platform rebuilds.",
      },
      {
        title: "Faster Delivery",
        body:
          "Shorter product cycles help teams deliver improvements continuously.",
      },
      {
        title: "Better Flexibility",
        body:
          "Composable architecture makes it easier to adopt new technologies.",
      },
    ],

    keyTakeaways: [
      "Agile product engineering keeps delivery aligned with customer needs.",
      "MACH principles support modular and flexible digital architecture.",
      "Composable technology can reduce dependency on large monolithic platforms.",
      "Continuous improvement creates stronger long term product value.",
    ],

    conclusion:
      "Agile product engineering combined with MACH principles gives enterprises a practical foundation for building digital products that can adapt to changing markets, customer expectations, and technology requirements.",

    cta: {
      title: "Build a More Flexible Digital Product",
      body:
        "Explore how agile product engineering and modern architecture can support your next product initiative.",
      buttonText: "Talk to Starfii",
      buttonHref: "/contact",
    },
  },

  {
    slug: "modern-software-delivery-enterprise-growth",
    title: "Modern Software Delivery for Enterprise Growth",
    category: "Blog",
    lastUpdated: "Oct 20, 2025",
    readTime: "5 min read",

    heroImage:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop",

    excerpt:
      "Learn how modern engineering practices, cloud platforms, and automation help enterprises deliver reliable digital products faster and scale with confidence.",

    author: AUTHOR,

    intro: [
      "Enterprise software delivery is evolving as organizations adopt cloud platforms, DevOps automation, modern architectures, and AI driven engineering practices.",
      "Modern delivery is increasingly about creating a repeatable engineering system that improves speed, quality, reliability, and scalability.",
    ],

    highlights: [
      {
        number: "01",
        title: "Modernize",
        body:
          "Adopt modern engineering practices and cloud platforms.",
      },
      {
        number: "02",
        title: "Automate",
        body:
          "Use automation to improve software delivery consistency.",
      },
      {
        number: "03",
        title: "Scale",
        body:
          "Create reliable platforms that can evolve with business growth.",
      },
    ],

    sections: [
      {
        heading: "Modern Engineering Practices",
        paragraphs: [
          "Modern software engineering combines automation, continuous integration, continuous delivery, cloud engineering, and quality engineering to improve delivery speed and reliability.",
        ],
      },
      {
        heading: "Cloud and DevOps",
        paragraphs: [
          "Cloud platforms and DevOps automation help engineering teams release software more frequently while maintaining operational reliability and scalability.",
        ],
      },
      {
        heading: "Supporting Enterprise Growth",
        paragraphs: [
          "A modern software delivery approach gives enterprises the flexibility to scale digital products, respond to market changes, and continuously improve customer experiences.",
        ],
      },
    ],

    benefits: [
      {
        title: "Reliable Releases",
        body:
          "Automated delivery pipelines help teams create more consistent software releases.",
      },
      {
        title: "Cloud Scalability",
        body:
          "Cloud platforms provide flexibility as applications and business demand grow.",
      },
      {
        title: "Engineering Efficiency",
        body:
          "Automation reduces repetitive work and improves engineering workflows.",
      },
    ],

    keyTakeaways: [
      "Modern engineering practices improve delivery speed and reliability.",
      "Cloud platforms provide flexibility and scalability.",
      "DevOps automation creates more consistent delivery workflows.",
      "Continuous improvement is essential for long term digital product growth.",
    ],

    conclusion:
      "Modern software delivery gives enterprises the engineering foundation required to move faster while maintaining reliability, scalability, and customer experience.",

    cta: {
      title: "Modernize Your Software Delivery",
      body:
        "Build a more scalable and reliable engineering foundation for enterprise growth.",
      buttonText: "Talk to Starfii",
      buttonHref: "/contact",
    },
  },
];

export function getBlogBySlug(
  slug: string
): BlogPost | undefined {
  return blogPosts.find((blog) => blog.slug === slug);
}

export function getRelatedBlogs(
  currentSlug: string,
  count = 3
): BlogPost[] {
  return blogPosts
    .filter((blog) => blog.slug !== currentSlug)
    .slice(0, count);
}


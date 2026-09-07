export type BlogSection = {
  heading: string;
  paragraphs: string[];
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
      "Software development has always been complex. Developers are under pressure to ship faster, adapt to change quickly, and keep systems secure and scalable. But with increasing complexity and legacy systems dragging performance down, it's getting harder to keep up.",
      "That's where Generative AI steps in. It's not just about writing code faster, though that's a big part of it. Generative AI is helping teams rethink how they build, maintain, and modernize software in scalable and efficient ways.",
      "Think of it as a smart partner that understands your systems, helps with planning, writing, testing, and even modernization, all while learning and adapting to your business context. It helps augment your team's knowledge and accelerates delivery like never before.",
    ],
    sections: [
      {
        heading: "1. Faster Code Generation",
        paragraphs: [
          "This is the most well known use case. Developers can now generate boilerplate or even complex code blocks with simple prompts. What used to take hours can now be done in minutes. It doesn't just save time, it frees up developers to focus on solving harder, more interesting problems.",
        ],
      },
      {
        heading: "2. Smarter Design and Architecture",
        paragraphs: [
          "Generative AI doesn't just write code, it helps design scalable, reusable solutions. It can even guide you toward best practices and spot flaws early in the design stage. In some cases, it can simulate how an architecture might perform before it's implemented.",
        ],
      },
      {
        heading: "3. Better Testing and QA",
        paragraphs: [
          "AI can create unit tests, regression test cases, and simulate scenarios to catch bugs earlier. It helps make testing more proactive rather than reactive. The result is more stable releases, fewer production issues, and a happier end user.",
        ],
      },
      {
        heading: "4. Ongoing Maintenance",
        paragraphs: [
          "Instead of spending hours digging through code, AI agents can analyze the codebase, find issues, and even suggest fixes. Maintenance just got a lot less painful. Teams can focus on innovating instead of putting out fires.",
        ],
      },
      {
        heading: "5. Knowledge Capture and Documentation",
        paragraphs: [
          "AI can turn undocumented code into readable diagrams, summaries, and even user guides. This is a huge win for onboarding and knowledge transfer. It also helps teams avoid being overly dependent on a handful of experts who know the system inside out.",
        ],
      },
      {
        heading: "6. Effort Estimation and Planning",
        paragraphs: [
          "AI can analyze previous projects to help estimate how long something might take or how risky it is. No more wild guesses during sprint planning. With better forecasting, teams can prioritize better and hit deadlines more consistently.",
        ],
      },
      {
        heading: "7. Legacy System Modernization",
        paragraphs: [
          "AI can reverse engineer legacy apps, understand business logic, and generate a roadmap for modernization. This alone saves months of manual analysis. It's like having a technical historian who can dig deep into old systems and help translate them into a modern language.",
        ],
      },
      {
        heading: "Benefits of Using Generative AI in Software Development",
        paragraphs: [
          "Speed: Projects move faster, which means faster releases and quicker time to value.",
          "Consistency: AI promotes standardized code, design patterns, and practices across large, distributed teams.",
          "Quality: With AI catching issues early and supporting testing, quality naturally goes up.",
          "Productivity: Developers spend less time on repetitive tasks and more time solving real problems.",
          "Scalability: Teams can do more without needing to dramatically increase headcount.",
          "Cost Savings: Reduced rework, faster onboarding, and efficient maintenance cut costs over time.",
        ],
      },
      {
        heading: "The Future of Software Development with Generative AI",
        paragraphs: [
          "We're just scratching the surface. The real power of generative AI lies in its ability to act as an intelligent collaborator, not just a tool. Over time, these AI agents will understand your business domain, learn from your application landscape, and make decisions aligned with enterprise strategy.",
          "Imagine a future where AI agents proactively recommend optimizations, alert you to future risks, or automatically modernize your tech stack. It's not that far off, but we'll also need new skills such as prompt engineering, AI governance, and a deeper understanding of how to integrate AI safely and ethically into engineering workflows.",
        ],
      },
    ],
  },

  {
    slug: "ai-powered-automation-enterprise-software",
    title: "AI Powered Automation: Transforming Enterprise Software Delivery",
    category: "Blog",
    lastUpdated: "Nov 10, 2025",
    readTime: "6 min read",
    heroImage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Stop trading speed for quality. See how Starfii's AI automation cuts test cycles by 70%, boosts developer productivity by 40%, and accelerates enterprise software delivery.",
    author: AUTHOR,
    intro: [
      "Enterprise software delivery has traditionally forced a trade off between speed and quality. AI powered automation is closing that gap.",
    ],
    sections: [
      {
        heading: "Where automation moves the needle",
        paragraphs: [
          "From automated regression suites to self healing test scripts, AI driven QA reduces manual effort while increasing coverage across releases.",
        ],
      },
      {
        heading: "AI Driven Quality Engineering",
        paragraphs: [
          "AI assisted quality engineering helps teams identify defects earlier, improve test coverage, and reduce repetitive testing activities across the software delivery lifecycle.",
        ],
      },
      {
        heading: "The Business Impact",
        paragraphs: [
          "By combining intelligent automation with modern engineering practices, enterprises can shorten delivery cycles while maintaining software quality and operational reliability.",
        ],
      },
    ],
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
    ],
    sections: [
      {
        heading: "Agile Product Engineering",
        paragraphs: [
          "Agile product engineering helps teams continuously improve digital products through shorter development cycles, customer feedback, and incremental delivery.",
        ],
      },
      {
        heading: "Why MACH Technologies Matter",
        paragraphs: [
          "MACH architecture enables modular technology choices across microservices, APIs, cloud native platforms, and headless experiences.",
        ],
      },
      {
        heading: "Business Impact",
        paragraphs: [
          "Combining agile product engineering with MACH principles helps enterprises improve flexibility, accelerate delivery, and create digital experiences that can scale with business growth.",
        ],
      },
    ],
  },

  {
    slug: "ai-led-engineering-digital-products",
    title: "Building Smarter Digital Products with AI Led Engineering",
    category: "Blog",
    lastUpdated: "Oct 27, 2025",
    readTime: "6 min read",
    heroImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Discover how AI led engineering helps product teams move from idea to production faster while improving software quality, scalability, and customer experience.",
    author: AUTHOR,
    intro: [
      "AI is changing how digital products are designed, engineered, tested, and continuously improved.",
    ],
    sections: [
      {
        heading: "AI Across the Software Lifecycle",
        paragraphs: [
          "AI can support requirements analysis, software development, testing, documentation, and application modernization across the product lifecycle.",
        ],
      },
      {
        heading: "Faster Product Delivery",
        paragraphs: [
          "AI assisted engineering reduces repetitive work and allows development teams to focus more time on product decisions, architecture, and customer outcomes.",
        ],
      },
      {
        heading: "Building Better Experiences",
        paragraphs: [
          "AI led engineering helps organizations create intelligent and scalable digital products that respond more effectively to changing customer needs.",
        ],
      },
    ],
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

/* ============================================================
   BLOG TYPES
============================================================ */

export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogService =
  | "digital-software"
  | "enterprise-automation"
  | "global-capability-centers"
  | "ai-voice-call";

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

/* ============================================================
   AUTHOR
============================================================ */

const AUTHOR = {
  name: "Sanjay Salunkhe",

  role:
    "President and Global Head of Digital and Software Services",

  photo:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop",

  bio:
    "Sanjay Salunkhe is the President and Global Head of Digital and Software Services of our Company.",
};

/* ============================================================
   AI VOICE CALL BLOGS
============================================================ */

export const blogPosts: BlogPost[] = [
  /* ==========================================================
     BLOG 1
  ========================================================== */

  {
    slug:
      "ai-voice-agents-2026-scripted-ivr-to-real-conversations",

    title:
      "AI Voice Agents in 2026: From Scripted IVR to Real Conversations",

    category:
      "AI Voice Call",

    service:
      "ai-voice-call",

    lastUpdated:
      "Sep 7, 2026",

    readTime:
      "7 min read",

    heroImage:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop",

    excerpt:
      "Discover how AI voice agents are moving beyond scripted IVR experiences to deliver more natural, intelligent, and context aware customer conversations.",

    author: AUTHOR,

    intro: [
      "AI voice agents are changing how enterprises manage customer conversations across sales, service, support, collections, and other high volume calling scenarios.",

      "Traditional IVR systems rely on predefined menus, rigid call flows, and limited customer input. Modern AI voice agents can understand conversational language, maintain context, and respond dynamically to what customers actually say.",

      "For enterprises, the opportunity is not simply to replace an IVR menu. It is to create a more intelligent conversation layer that can connect voice interactions with business processes, customer data, and downstream workflows.",
    ],

    sections: [
      {
        heading:
          "1. From Menu Based IVR to Conversational Voice",

        paragraphs: [
          "Traditional IVR systems guide customers through predefined menu options and require callers to follow a specific sequence.",

          "AI voice agents can interpret natural language and allow customers to explain what they need in their own words.",

          "This conversational approach can reduce friction and create a more natural experience, particularly when customer requests do not fit neatly into predefined menu paths.",
        ],
      },

      {
        heading:
          "2. Context Makes Conversations More Intelligent",

        paragraphs: [
          "Modern AI voice experiences can use relevant customer and interaction context to make conversations more useful.",

          "Instead of asking customers to repeat information already available in the system, the voice agent can use the available context to guide the conversation.",

          "Context can include previous interactions, customer intent, account information, workflow status, and other business signals.",
        ],
      },

      {
        heading:
          "3. Voice Agents Need More Than Speech Recognition",

        paragraphs: [
          "A production grade AI voice solution requires more than converting speech to text.",

          "The overall experience depends on speech recognition, language understanding, reasoning, response generation, text to speech, orchestration, business system integration, and appropriate escalation paths.",

          "Enterprises should therefore evaluate the complete conversation architecture rather than looking at voice AI as a standalone technology component.",
        ],
      },

      {
        heading:
          "4. Connecting Voice Conversations to Business Workflows",

        paragraphs: [
          "The value of an AI voice agent increases when conversations can trigger meaningful business actions.",

          "For example, an interaction may result in a service request, appointment update, account action, case creation, routing decision, or human escalation.",

          "This turns voice automation from a conversational interface into an operational capability.",
        ],
      },

      {
        heading:
          "5. Designing the Human Handoff",

        paragraphs: [
          "AI voice automation should not assume every conversation needs to be completed by the AI.",

          "Complex, sensitive, or high value interactions may require a human agent.",

          "A strong design therefore includes intelligent escalation with relevant conversation context transferred to the human agent so that customers do not have to restart the conversation.",
        ],
      },
    ],
  },

  /* ==========================================================
     BLOG 2
  ========================================================== */

  {
    slug:
      "reducing-call-abandonment-intelligent-routing",

    title:
      "Reducing Call Abandonment with Intelligent Routing",

    category:
      "AI Voice Call",

    service:
      "ai-voice-call",

    lastUpdated:
      "Sep 7, 2026",

    readTime:
      "6 min read",

    heroImage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop",

    excerpt:
      "Explore how intelligent routing and AI powered call orchestration can reduce unnecessary wait times and improve customer outcomes.",

    author: AUTHOR,

    intro: [
      "Call abandonment is often treated as a contact center staffing problem, but the underlying issue can also be related to routing, prioritization, customer intent, and inefficient call flows.",

      "AI powered routing can help enterprises understand why a customer is calling and determine the most appropriate next step before the interaction reaches a human agent.",

      "The result can be a more efficient customer journey with better use of both automated and human support capacity.",
    ],

    sections: [
      {
        heading:
          "1. Understand Customer Intent Earlier",

        paragraphs: [
          "Traditional routing often starts with a menu selection and sends customers through a fixed sequence.",

          "AI voice systems can identify customer intent from conversational input and use that information to determine the appropriate workflow.",

          "Earlier intent recognition can reduce unnecessary transfers and help customers reach the right resolution path faster.",
        ],
      },

      {
        heading:
          "2. Route Based on Context",

        paragraphs: [
          "Intelligent routing can consider more than the initial reason for the call.",

          "Customer profile, account context, previous interactions, issue complexity, language, priority, and available agent capabilities can all contribute to routing decisions.",

          "This allows enterprises to move toward context aware rather than purely menu based routing.",
        ],
      },

      {
        heading:
          "3. Automate Simple Requests",

        paragraphs: [
          "Not every customer interaction requires a human agent.",

          "AI voice automation can handle appropriate repetitive requests such as status checks, basic information requests, scheduling, confirmations, and other predefined business actions.",

          "Keeping suitable interactions within automation can free human agents to focus on more complex customer needs.",
        ],
      },

      {
        heading:
          "4. Escalate Complex Calls Intelligently",

        paragraphs: [
          "When automation cannot safely or effectively complete a request, the system should provide a clear path to a human agent.",

          "The handoff should include relevant conversation context, intent, and information already collected during the automated interaction.",

          "This helps reduce repetitive questioning and creates a smoother transition from AI to human support.",
        ],
      },

      {
        heading:
          "5. Measure the Complete Customer Journey",

        paragraphs: [
          "Reducing abandonment requires visibility across the entire call journey.",

          "Enterprises can measure abandonment, wait time, transfer rates, containment, resolution, escalation, customer satisfaction, and other operational outcomes.",

          "These measurements provide the feedback required to continuously improve routing and conversation design.",
        ],
      },
    ],
  },

  /* ==========================================================
     BLOG 3
  ========================================================== */

  {
    slug:
      "real-time-call-intelligence-customer-insights",

    title:
      "What Real Time Call Intelligence Tells You About Your Customers",

    category:
      "AI Voice Call",

    service:
      "ai-voice-call",

    lastUpdated:
      "Sep 7, 2026",

    readTime:
      "6 min read",

    heroImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",

    excerpt:
      "Learn how real time call intelligence can turn customer conversations into actionable signals for service, operations, product, and business teams.",

    author: AUTHOR,

    intro: [
      "Customer conversations contain valuable information about expectations, problems, product experiences, and emerging needs.",

      "Historically, much of this information remained locked inside recordings, transcripts, agent notes, and manually reviewed interactions.",

      "AI powered call intelligence can help enterprises analyze conversations at scale and identify patterns that can improve both customer experience and business operations.",
    ],

    sections: [
      {
        heading:
          "1. Conversations Contain More Than Call Outcomes",

        paragraphs: [
          "A traditional contact center metric may tell you whether a call was resolved, transferred, or abandoned.",

          "Conversation intelligence can reveal why the customer contacted the enterprise, what they were trying to accomplish, what caused frustration, and where the experience broke down.",

          "These additional signals can provide a more complete view of customer experience.",
        ],
      },

      {
        heading:
          "2. Identify Recurring Customer Problems",

        paragraphs: [
          "When conversations are analyzed at scale, repeated issues can become easier to identify.",

          "Patterns across calls can highlight product problems, process gaps, confusing policies, frequently asked questions, and areas where customers require additional support.",

          "These insights can then be shared with the teams responsible for improving the underlying customer journey.",
        ],
      },

      {
        heading:
          "3. Improve Agent Performance",

        paragraphs: [
          "Call intelligence can also provide feedback about agent interactions.",

          "Organizations can identify common conversation patterns, escalation drivers, adherence to processes, and opportunities for coaching.",

          "This creates a more consistent approach to quality management across large contact center environments.",
        ],
      },

      {
        heading:
          "4. Turn Conversations Into Business Signals",

        paragraphs: [
          "Customer conversations can contain signals relevant to sales, retention, product development, operations, and customer success.",

          "When these signals are connected to enterprise systems, conversational data can become part of broader business intelligence rather than remaining isolated inside the contact center.",
        ],
      },

      {
        heading:
          "5. Build a Continuous Improvement Loop",

        paragraphs: [
          "The strongest call intelligence programs create a continuous feedback loop.",

          "Conversation data reveals patterns, teams prioritize improvements, updated workflows are introduced, and subsequent conversations provide new data for measurement.",

          "This allows the voice experience to improve continuously rather than remaining fixed after the initial implementation.",
        ],
      },
    ],
  },

  /* ==========================================================
     BLOG 4
  ========================================================== */

  {
    slug:
      "ai-voice-automation-scaling-customer-support",

    title:
      "AI Voice Automation: Scaling Customer Support Without More Headcount",

    category:
      "AI Voice Call",

    service:
      "ai-voice-call",

    lastUpdated:
      "Sep 7, 2026",

    readTime:
      "6 min read",

    heroImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop",

    excerpt:
      "See how AI voice automation can increase support capacity, handle repetitive interactions, and help human agents focus on higher value customer conversations.",

    author: AUTHOR,

    intro: [
      "Customer support volumes can increase quickly as businesses grow, launch new products, enter new markets, or expand their customer base.",

      "Adding headcount is one way to address increased demand, but it can also introduce higher operating costs and longer recruitment and training cycles.",

      "AI voice automation provides another approach by handling suitable conversations automatically while allowing human agents to focus on interactions that require judgment, empathy, or specialized knowledge.",
    ],

    sections: [
      {
        heading:
          "1. Automate High Volume Conversations",

        paragraphs: [
          "Many contact centers handle large volumes of repetitive interactions.",

          "Examples can include status requests, appointment confirmations, basic account questions, information requests, and other predictable customer journeys.",

          "These workflows can be strong candidates for AI voice automation when the underlying business rules are clearly defined.",
        ],
      },

      {
        heading:
          "2. Extend Support Availability",

        paragraphs: [
          "AI voice agents can support customer conversations beyond traditional staffed operating hours.",

          "This can help enterprises provide more consistent availability across time zones and customer segments.",

          "The goal is not simply to make the contact center available for longer, but to provide meaningful automated assistance when customers need it.",
        ],
      },

      {
        heading:
          "3. Reduce Pressure on Human Agents",

        paragraphs: [
          "When suitable repetitive interactions are automated, human agents can spend more time on complex or high value cases.",

          "This can improve workload distribution and create opportunities for agents to focus on problem solving, customer retention, and situations requiring human judgment.",
        ],
      },

      {
        heading:
          "4. Scale Without Sacrificing Experience",

        paragraphs: [
          "Automation should not be measured only by the number of calls handled by AI.",

          "Enterprises should also monitor resolution quality, customer satisfaction, escalation rates, accuracy, and the effectiveness of human handoffs.",

          "A scalable voice strategy balances automation efficiency with customer experience.",
        ],
      },

      {
        heading:
          "5. Start With the Right Use Cases",

        paragraphs: [
          "A successful AI voice automation program usually starts with clearly defined, high volume, measurable use cases.",

          "Organizations can begin with a limited number of workflows, measure outcomes, and gradually expand automation as confidence and operational maturity increase.",
        ],
      },
    ],
  },

  /* ==========================================================
     BLOG 5
  ========================================================== */

  {
    slug:
      "voice-ai-integration-business-workflows",

    title:
      "Voice AI Integration: Connecting Conversations to Business Workflows",

    category:
      "AI Voice Call",

    service:
      "ai-voice-call",

    lastUpdated:
      "Sep 7, 2026",

    readTime:
      "6 min read",

    heroImage:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&auto=format&fit=crop",

    excerpt:
      "Understand why connecting voice AI to CRM, contact center, workflow, and enterprise systems is critical for turning conversations into business outcomes.",

    author: AUTHOR,

    intro: [
      "An AI voice agent becomes significantly more valuable when it can interact with the systems that run the business.",

      "Without integration, a voice agent may be able to answer questions or conduct conversations but remain disconnected from the actions required to resolve customer needs.",

      "Voice AI integration connects conversational experiences with CRM, contact center, workflow, knowledge, and other enterprise systems so that conversations can result in meaningful business actions.",
    ],

    sections: [
      {
        heading:
          "1. Connect Voice With Customer Context",

        paragraphs: [
          "Customer conversations are more useful when the voice experience can access the information required to understand the interaction.",

          "Depending on the use case, this may include customer profile information, account status, previous interactions, open cases, preferences, or other relevant business data.",

          "The integration layer should provide only the information required for the specific workflow.",
        ],
      },

      {
        heading:
          "2. Turn Conversations Into Actions",

        paragraphs: [
          "A voice conversation should be able to trigger appropriate business actions when the use case requires it.",

          "Examples include creating a service request, updating information, scheduling an appointment, initiating a workflow, or routing the interaction to an appropriate team.",

          "This allows voice AI to become part of the operational process instead of functioning only as a conversational front end.",
        ],
      },

      {
        heading:
          "3. Integrate With CRM and Contact Center Platforms",

        paragraphs: [
          "CRM and contact center platforms often contain important customer and interaction data.",

          "Connecting voice AI with these platforms can help synchronize conversation context, customer information, interaction history, and escalation details.",

          "The exact integration architecture should be designed around the enterprise's existing technology environment and security requirements.",
        ],
      },

      {
        heading:
          "4. Build Secure Integration Patterns",

        paragraphs: [
          "Voice AI integrations must consider authentication, authorization, data protection, logging, access control, and appropriate handling of sensitive customer information.",

          "Enterprises should establish clear controls around which systems the AI can access and which actions it is authorized to perform.",

          "Security and governance should be part of the architecture from the beginning rather than added after deployment.",
        ],
      },

      {
        heading:
          "5. Create an End to End Conversation Architecture",

        paragraphs: [
          "The strongest voice AI implementations connect the complete journey from customer intent through conversation, decisioning, business action, and outcome measurement.",

          "This architecture allows enterprises to measure not only whether the AI completed a conversation, but whether the interaction achieved the intended business result.",

          "Over time, these measurements can guide optimization of prompts, workflows, routing, integrations, and automation coverage.",
        ],
      },
    ],
  },
];

/* ============================================================
   GET SINGLE AI VOICE CALL BLOG
============================================================ */

export function getBlogBySlug(
  slug: string
): BlogPost | undefined {
  return blogPosts.find(
    (blog) =>
      blog.slug === slug &&
      blog.service === "ai-voice-call"
  );
}

/* ============================================================
   GET RELATED AI VOICE CALL BLOGS
============================================================ */

export function getRelatedBlogs(
  currentSlug: string,
  count = 3
): BlogPost[] {
  const currentBlog = blogPosts.find(
    (blog) =>
      blog.slug === currentSlug &&
      blog.service === "ai-voice-call"
  );

  if (!currentBlog) {
    return [];
  }

  return blogPosts
    .filter(
      (blog) =>
        blog.slug !== currentSlug &&
        blog.service === "ai-voice-call"
    )
    .slice(0, count);
}
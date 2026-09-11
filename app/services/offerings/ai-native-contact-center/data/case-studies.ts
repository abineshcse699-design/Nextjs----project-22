export type CaseStudy = {
  slug: string;
  image: string;

  client: string;
  industry: string;
  duration: string;

  title: string;
  body: string;

  overview: string;

  challenge: string;
  solution: string;
  results: string;

  benefits: string[];
  technology: string[];

  stats: {
    value: string;
    label: string;

  }[];

};

export const caseStudies: CaseStudy[] = [
  {
    slug: "regional-bank-ai-voice-support",

    image:
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1200&auto=format&fit=crop",

    client: "Regional Bank",
    industry: "Banking",
    duration: "12 Weeks",

    title:
      "Starfii Cuts Wait Times for a Regional Bank with AI Voice Support",

    body:
      "Starfii helped a regional bank automate routine customer enquiries with an AI voice agent, allowing customers to receive immediate responses while human agents focused on more complex banking conversations.",

    overview:
      "The bank wanted to create a faster and more efficient customer service experience without compromising access to human support. Starfii introduced a conversational AI voice experience designed around routine banking enquiries, customer intent, and seamless escalation.",

    challenge:
      "The bank was receiving a high volume of repetitive phone enquiries related to account information, transaction status, and common service requests. These conversations consumed valuable agent time and contributed to longer customer wait times. The opportunity was to automate routine interactions while preserving a clear path to human specialists for complex or sensitive requests.",

    solution:
      "Starfii designed and deployed a conversational AI voice agent capable of understanding natural language, identifying customer intent, handling routine enquiries, and routing more complex conversations to the appropriate banking team. The experience was designed to work alongside existing customer service operations rather than replace human expertise.",

    results:
      "The AI voice solution created a faster path for routine customer enquiries and reduced the amount of repetitive call handling required from human service teams. Customers requiring specialist assistance could be routed to the appropriate team with a more relevant and contextual handoff.",

    benefits: [
      "Faster responses for routine banking enquiries",
      "Reduced repetitive workload for customer service teams",
      "Seamless escalation to human specialists",
      "More consistent customer communication",
      "Extended customer support availability",
    ],

    technology: [
      "Conversational AI",
      "Natural Language Understanding",
      "Inbound Call Automation",
      "CRM Integration",
      "Telephony Integration",
      "Intelligent Call Routing",
      "Human Agent Handoff",
    ],

    stats: [
      {
        value: "24/7",
        label: "Automated customer support availability",
      },
      {
        value: "AI",
        label: "Routine enquiries handled conversationally",
      },
      {
        value: "Faster",
        label: "Path to resolution for common requests",
      },
    ],
  },

  {
    slug: "insurer-outbound-renewal-calling",

    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1200&auto=format&fit=crop",

    client: "National Insurer",
    industry: "Insurance",
    duration: "10 Weeks",

    title:
      "Starfii Automates Renewal Outreach for a National Insurer",

    body:
      "Starfii deployed an outbound AI voice solution that helped a national insurer contact policyholders more consistently while enabling human advisors to focus on customers requiring a more detailed conversation.",

    overview:
      "The insurer wanted to modernize its renewal outreach process and make better use of human advisor capacity. Starfii created an outbound conversational voice experience that could engage customers, identify intent, and determine when human intervention was required.",

    challenge:
      "Renewal campaigns required large volumes of outbound calls, but many call attempts did not result in meaningful customer conversations. Human advisors were spending valuable time on repetitive outreach activities instead of focusing on customers who needed advice, clarification, or a more detailed renewal discussion.",

    solution:
      "Starfii implemented an outbound AI voice agent capable of initiating customer conversations, understanding responses, handling common renewal questions, and identifying customers who required human follow-up. The solution created a more structured path from automated outreach to advisor engagement.",

    results:
      "The insurer gained a more consistent approach to renewal outreach while giving human advisors a clearer view of which customers actually needed their attention. Automated conversations reduced repetitive manual calling and helped create a more focused customer journey.",

    benefits: [
      "More consistent renewal outreach",
      "Better prioritization for human advisors",
      "Reduced manual outbound calling",
      "Faster customer follow-up",
      "Scalable customer engagement",
    ],

    technology: [
      "Outbound AI Calling",
      "Conversational AI",
      "Customer Intent Detection",
      "CRM Integration",
      "Campaign Automation",
      "Call Analytics",
      "Human Escalation",
    ],

    stats: [
      {
        value: "Always On",
        label: "Outbound customer engagement capability",
      },
      {
        value: "AI",
        label: "Renewal conversations automated",
      },
      {
        value: "Focused",
        label: "Human advisor follow-up",
      },
    ],
  },

  {
    slug: "healthcare-appointment-voice-agent",

    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=1200&auto=format&fit=crop",

    client: "Healthcare Provider",
    industry: "Healthcare",
    duration: "8 Weeks",

    title:
      "Starfii Builds a Voice Agent for Healthcare Appointment Management",

    body:
      "Starfii developed a conversational voice agent that enabled patients to book, confirm, and reschedule appointments through natural voice conversations.",

    overview:
      "The healthcare provider wanted to make appointment management easier for patients while reducing the volume of repetitive administrative calls handled by staff. Starfii designed a voice experience around booking, confirmation, rescheduling, and appropriate human escalation.",

    challenge:
      "Patients frequently needed to call the healthcare provider to book, confirm, or change appointments. These repetitive conversations placed additional pressure on administrative teams and could require patients to wait for staff availability.",

    solution:
      "Starfii deployed a conversational AI voice agent connected to appointment management workflows. The agent could understand the patient's request, support routine appointment interactions, and transfer exceptions or more complex requests to staff with appropriate context.",

    results:
      "The healthcare provider created a more accessible appointment experience while reducing repetitive administrative call handling. Patients could manage common appointment requests through natural conversation without always needing to wait for a member of staff.",

    benefits: [
      "Simplified appointment booking",
      "Appointment confirmation and reminders",
      "Easier rescheduling",
      "Reduced administrative workload",
      "Faster patient access to routine support",
      "Human escalation for complex requests",
    ],

    technology: [
      "Conversational AI",
      "Voice Automation",
      "Appointment Scheduling",
      "Workflow Integration",
      "Telephony",
      "Customer Context",
      "Human Handoff",
    ],

    stats: [
      {
        value: "24/7",
        label: "Appointment assistance availability",
      },
      {
        value: "AI",
        label: "Routine appointment workflows automated",
      },
      {
        value: "Less",
        label: "Repetitive administrative call handling",
      },
    ],
  },

  {
    slug: "retail-ecommerce-order-support-voice",

    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",

    client: "Retail Brand",
    industry: "Retail & Ecommerce",
    duration: "9 Weeks",

    title:
      "Starfii Deploys Always On Order Support for a Retail Brand",

    body:
      "Starfii implemented an AI voice support solution that handled common ecommerce order, return, and delivery enquiries around the clock.",

    overview:
      "The retailer wanted to provide customers with faster answers to common order-related questions, particularly during periods of increased demand. Starfii connected conversational voice automation with customer service workflows to create an always-on support layer.",

    challenge:
      "Retail customer service teams can experience significant call volumes around order status, delivery updates, returns, and other post-purchase questions. During peak seasons, this can create pressure on support teams and longer waits for customers.",

    solution:
      "Starfii created an AI voice agent capable of understanding common ecommerce support requests and connecting conversations with relevant order and customer workflows. Routine enquiries could be handled automatically, while exceptions could be escalated to human teams.",

    results:
      "The retailer extended its customer support capability beyond traditional operating hours and reduced the pressure created by repetitive order-related calls. Human service teams could spend more time on exceptions and customer conversations requiring judgement.",

    benefits: [
      "Always-on order support",
      "Faster delivery information",
      "Automated routine customer enquiries",
      "Reduced peak-season call pressure",
      "More efficient return support",
      "Human escalation for exceptions",
    ],

    technology: [
      "AI Voice",
      "Conversational AI",
      "Order Management Integration",
      "CRM Integration",
      "Telephony",
      "Workflow Automation",
      "Call Analytics",
    ],

    stats: [
      {
        value: "24/7",
        label: "Order support availability",
      },
      {
        value: "AI",
        label: "Common support enquiries automated",
      },
      {
        value: "Always On",
        label: "Customer communication capability",
      },
    ],
  },

  {
    slug: "telecom-intelligent-call-routing",

    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop",

    client: "Telecom Provider",
    industry: "Telecommunications",
    duration: "14 Weeks",

    title:
      "Starfii Modernizes IVR with Intelligent Call Routing for a Telecom Provider",

    body:
      "Starfii replaced a legacy menu-driven IVR experience with conversational AI that understood customer intent and routed calls intelligently.",

    overview:
      "The telecom provider wanted to simplify its customer call journey and reduce the friction created by traditional menu-driven IVR. Starfii introduced conversational voice AI that could understand intent earlier in the interaction and connect customers with the right team.",

    challenge:
      "Customers navigating traditional IVR systems often need to move through multiple menus before reaching the correct department. This can create frustration, unnecessary transfers, and abandoned calls, particularly when the customer's need does not fit neatly into a predefined menu structure.",

    solution:
      "Starfii introduced a conversational voice agent that listens to the customer's request, understands the underlying intent, and determines the most appropriate routing path. When human support is required, the conversation can be transferred with relevant context.",

    results:
      "The telecom provider created a simpler and more conversational entry point for customer support. Customers could describe what they needed naturally instead of navigating a rigid sequence of menus, while service teams received better-contextualized conversations.",

    benefits: [
      "Simpler customer call journeys",
      "Intent-based call routing",
      "Reduced IVR menu complexity",
      "Better routing to specialist teams",
      "Context-aware human handoff",
      "Improved customer experience",
    ],

    technology: [
      "Conversational AI",
      "Intent Detection",
      "Intelligent Call Routing",
      "Telephony Integration",
      "CRM Integration",
      "Context Management",
      "Human Agent Handoff",
    ],

    stats: [
      {
        value: "AI",
        label: "Intent-based call routing",
      },
      {
        value: "Fewer",
        label: "Traditional IVR navigation steps",
      },
      {
        value: "Better",
        label: "Context for human handoff",
      },
    ],
  },

{
  slug: "abandoned-cart-cod-confirmation-recovery-calls",

  image:
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop",

  client: "D2C Ecommerce Brand",
  industry: "Retail & Ecommerce",
  duration: "8 Weeks",

  title: "How to Use Voice Calls to Recover Lost Sales",

  body:
    "Starfii deployed AI voice agents that called customers who abandoned their carts and confirmed cash on delivery orders before dispatch, helping a growing ecommerce brand recover lost revenue and reduce failed deliveries.",

  overview:
    "The brand was losing a meaningful share of potential revenue to abandoned carts and undelivered cash on delivery orders. Starfii introduced two connected AI voice workflows — one focused on recovering abandoned carts and one focused on confirming COD orders before they shipped — so the business could act on lost sales instead of writing them off.",

  challenge:
    "Customers frequently added products to their cart without completing checkout, and a large share of cash on delivery orders were being cancelled, returned, or marked as failed delivery because no one had confirmed the order or the customer's availability before dispatch. Reaching every customer by phone manually was not realistic at the brand's order volume, and delayed follow-up meant many recoverable customers were never contacted in time.",


  //   {
  //     heading: "Abandoned Cart → Recovery Calls",
  //     body:
  //       "When a customer adds items to their cart but leaves without checking out, an AI voice agent places a short, natural call within minutes of abandonment. The call reminds the customer what's still in their cart, answers quick questions about price, delivery, or availability, and offers to complete the purchase right there on the call — turning a drop-off into a recovered sale instead of a missed one.",
  //   },
  //   {
  //     heading: "COD (Cash on Delivery) → Confirmation Calls",
  //     body:
  //       "Before a cash on delivery order is dispatched, the AI voice agent calls the customer to confirm the order details, delivery address, and whether they'll be available to receive it. This catches orders customers no longer want, incorrect addresses, or fake/duplicate orders before they leave the warehouse, flagging anything uncertain for manual review instead of shipping blind.",
  //   },
  //   {
  //     heading: "Want to Try It? Use Turbodev",
  //     body:
  //       "If you want a ready-made way to run these recovery and confirmation flows without building them from scratch, Turbodev is an AI-powered automation platform built for exactly this. On top of abandoned cart recovery and COD order confirmation, Turbodev covers the full customer communication loop: order confirmation and payment alerts, fulfillment, refund and cancellation updates, real-time Shopify webhook triggers, AI agents that handle customer queries and lead qualification autonomously, click-to-chat ad capture, a shared team inbox for human handoff, broadcast campaigns with contact segmentation and tagging, a synced product catalog for in-chat browsing and checkout, and enterprise-grade security with AES-256 encryption, TLS 1.3, and role-based access control. It's built specifically for Indian and South Asian merchants running on the WhatsApp Business API, and you can request a live demo or test account directly from Turbodev to see the flows in action.",
  //   },
  // ],

  solution:
    "Starfii built two AI voice call flows around the customer journey. The first flow triggered a short, natural voice call to customers who abandoned their cart — reminding them of their items, answering quick questions, and helping them complete the purchase. The second flow triggered a COD confirmation call before dispatch, verifying the order, address, and customer availability, and flagging orders that needed further review or cancellation. Both flows escalated to a human agent whenever a customer needed more support.",

  results:
    "The abandoned cart calls helped recover purchases that would otherwise have been lost, while the COD confirmation calls reduced failed deliveries and unnecessary dispatches on orders customers no longer wanted. Together, the two flows gave the brand a faster, more automated way to protect revenue at two of the most common points of order drop-off.",

  benefits: [
    "Recovered revenue from abandoned carts",
    "Fewer failed and returned COD deliveries",
    "Faster follow-up after cart abandonment",
    "Verified orders before dispatch",
    "Reduced manual outbound calling",
    "Human escalation for orders needing review",
    "Optional Turbodev integration for WhatsApp-based automation, AI agents, broadcasts, and a shared inbox",
  ],

  technology: [
    "Outbound AI Calling",
    "Conversational AI",
    "Ecommerce Platform Integration",
    "Order Management Integration",
    "CRM Integration",
    "Call Analytics",
    "Human Escalation",
    "Turbodev — WhatsApp Business API Automation",
    "Turbodev — AI Agents for Lead Qualification & Support",
    "Turbodev — Shopify Webhook Triggers",
    "Turbodev — Shared Team Inbox & Broadcasts",
  ],

  stats: [
    { value: "AI", label: "Abandoned cart recovery calls" },
    { value: "Verified", label: "COD orders confirmed before dispatch" },
    { value: "Fewer", label: "Failed and returned deliveries" },
  ],
}
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}


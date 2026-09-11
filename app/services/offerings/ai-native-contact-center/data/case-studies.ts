export type CaseStudyStat = {
  value: string;
  label: string;
};

export type CaseStudySubTopic = {
  heading: string;
  body: string;
};

export type CaseStudy = {
  slug: string;
  image: string;
  title: string;
  body: string;         // short card/summary description
  industry: string;
  client: string;
  duration: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string;      // impact summary paragraph
  stats: CaseStudyStat[];
  benefits: string[];
  technology: string[];
  subTopics?: CaseStudySubTopic[];
  // Publish date, format "YYYY-MM-DD". Used only for ordering — the
  // case study with the latest date always shows first, everywhere
  // this data is used, regardless of where it sits in this array.
  date: string;
};

// Raw list — order here does NOT matter for display, only the
// `date` field controls what shows first.
const rawCaseStudies: CaseStudy[] = [
  {
    slug: "abandoned-cart-cod-confirmation-recovery-calls",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop",
    title: "How to Use Voice Calls to Recover Lost Sales",
    body: "See how AI voice calls won back abandoned cart sales and cut failed COD deliveries by confirming orders before dispatch.",
    industry: "Retail & E-commerce",
    client: "D2C retail brand, ~18,000 monthly online orders",
    duration: "10 weeks",
    overview:
      "Abandoned carts and undelivered cash-on-delivery orders were quietly eating into revenue, with no proactive outreach in place to recover either.",
    challenge:
      "Roughly 30% of carts were abandoned before checkout, and a further share of COD orders failed at the door because no one confirmed the order or address before a delivery attempt was made.",
    solution:
      "Starfii deployed outbound AI voice agents that call customers shortly after cart abandonment to offer help completing checkout, and call COD customers before dispatch to confirm the order and address.",
    results:
      "The combined recovery and confirmation calls reduced failed deliveries and recovered a meaningful share of abandoned-cart revenue within the first quarter of launch.",
    stats: [
      { value: "23%", label: "Abandoned carts recovered via voice outreach" },
      { value: "-31%", label: "Failed COD delivery attempts" },
      { value: "24/7", label: "Automated outbound coverage" },
    ],
    benefits: [
      "Recovered revenue that previously went uncaptured",
      "Fewer wasted delivery attempts and reverse logistics costs",
      "No added headcount for outreach calling",
    ],
    technology: [
      "Conversational AI",
      "Outbound AI Calling",
      "CRM & Business Integration",
      "Real Time Call Intelligence",
    ],
    subTopics: [
      {
        heading: "Cart Recovery Calls",
        body: "A short, friendly call goes out within minutes of abandonment, offering to help finish the order or answer last-minute questions.",
      },
      {
        heading: "COD Confirmation Calls",
        body: "Before dispatch, the AI agent confirms the order details and delivery address directly with the customer.",
      },
      {
        heading: "Exception Routing",
        body: "Any uncertain or disputed response is routed straight to a human agent instead of proceeding automatically.",
      },
    ],
    date: "2025-09-20",
  },
  {
    slug: "regional-bank-ai-voice-support",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    title: "Starfii Cuts Wait Times for a Regional Bank with AI Voice Support",
    body: "Explore how Starfii's AI voice agents resolved routine banking enquiries instantly, freeing human agents for complex disputes and high value conversations.",
    industry: "Banking & Financial Services",
    client: "Regional retail bank, ~410,000 active customers",
    duration: "14 weeks",
    overview:
      "Call center wait times were climbing as routine balance and transaction enquiries competed with complex disputes for the same agent queue.",
    challenge:
      "The majority of inbound calls were routine enquiries, but they were handled by the same queue as complex disputes, driving up average wait times for everyone.",
    solution:
      "Starfii deployed a conversational AI voice agent that resolves routine enquiries instantly and routes only complex or sensitive calls to human agents, with full context passed along.",
    results:
      "Routine enquiries are now resolved instantly, and human agents spend a larger share of their time on complex disputes and high-value conversations.",
    stats: [
      { value: "-58%", label: "Average call wait time" },
      { value: "70%", label: "Routine enquiries resolved without a human agent" },
      { value: "24/7", label: "Availability for account enquiries" },
    ],
    benefits: [
      "Shorter wait times across the entire call queue",
      "Agents focus on disputes and high-value conversations",
      "Consistent, compliant responses to common questions",
    ],
    technology: [
      "Conversational AI",
      "Inbound Call Automation",
      "Intelligent Call Routing",
      "CRM & Business Integration",
    ],
    date: "2025-07-08",
  },
  {
    slug: "insurer-outbound-renewal-calling",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    title: "Starfii Automates Renewal Outreach for a National Insurer",
    body: "See how outbound AI calling lifted renewal contact rates while giving agents a prioritized list of customers who actually needed a human conversation.",
    industry: "Insurance",
    client: "National insurance provider, ~2,300 renewals monthly",
    duration: "12 weeks",
    overview:
      "Renewal reminders relied on email and a small outbound calling team that could not reach every policyholder before expiry.",
    challenge:
      "A limited outbound calling team couldn't reach every policyholder before renewal deadlines, and email reminders alone had a low response rate.",
    solution:
      "Starfii's outbound AI voice agents call policyholders ahead of renewal, answer common questions, and flag anyone needing a human conversation to the agent team with full context.",
    results:
      "Contact rates ahead of renewal deadlines rose significantly, and agents now spend their time on the policyholders most likely to need a human touch.",
    stats: [
      { value: "+41%", label: "Pre-renewal contact rate" },
      { value: "2.3x", label: "More renewals contacted per agent hour" },
      { value: "100%", label: "Policyholders reached before expiry" },
    ],
    benefits: [
      "Higher renewal contact rates without adding headcount",
      "Agents prioritized toward at-risk policyholders",
      "Fewer lapses caused by missed reminders",
    ],
    technology: [
      "Outbound AI Calling",
      "CRM & Business Integration",
      "Real Time Call Intelligence",
      "Intelligent Call Routing",
    ],
    date: "2025-05-15",
  },
  {
    slug: "healthcare-appointment-voice-agent",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    title: "Starfii Builds a Voice Agent for Healthcare Appointment Management",
    body: "Learn how a conversational voice agent let patients book, confirm, and reschedule appointments naturally, cutting missed appointment rates.",
    industry: "Healthcare",
    client: "Multi-location outpatient clinic network",
    duration: "10 weeks",
    overview:
      "Missed appointments were a persistent source of lost clinic capacity, and front-desk staff spent much of their day on scheduling calls.",
    challenge:
      "Front-desk staff spent a large share of their day on routine scheduling calls, while missed appointments still went largely unaddressed.",
    solution:
      "Starfii built a conversational voice agent that lets patients book, confirm, and reschedule appointments naturally by phone, with automated reminder calls ahead of each visit.",
    results:
      "Missed appointment rates dropped meaningfully, and front-desk staff regained time previously spent on routine scheduling calls.",
    stats: [
      { value: "-27%", label: "Missed appointment rate" },
      { value: "65%", label: "Scheduling calls handled without staff involvement" },
      { value: "24/7", label: "Booking and rescheduling availability" },
    ],
    benefits: [
      "Fewer missed appointments and better clinic utilization",
      "Front-desk staff freed for in-person patient needs",
      "Natural, low-friction booking experience for patients",
    ],
    technology: [
      "Conversational AI",
      "Inbound Call Automation",
      "Outbound AI Calling",
      "CRM & Business Integration",
    ],
    date: "2025-03-12",
  },
  {
    slug: "retail-ecommerce-order-support-voice",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    title: "Starfii Deploys Always On Order Support for a Retail Brand",
    body: "Discover how AI voice call automation handled order status, returns, and delivery updates around the clock during peak retail seasons.",
    industry: "Retail & E-commerce",
    client: "National retail brand, seasonal order volume spikes",
    duration: "8 weeks",
    overview:
      "Order status and returns calls surged during peak seasons far beyond what the seasonal support team could absorb without long wait times.",
    challenge:
      "Peak season order and returns enquiries regularly overwhelmed the seasonal support team, driving long wait times right when customers needed answers fastest.",
    solution:
      "Starfii deployed an always-on AI voice agent that handles order status, returns, and delivery updates automatically, escalating only complex cases to human agents.",
    results:
      "The brand handled peak season volume without extending wait times or adding seasonal headcount.",
    stats: [
      { value: "3x", label: "Peak call volume absorbed without added staff" },
      { value: "-45%", label: "Average wait time during peak season" },
      { value: "24/7", label: "Order and returns support coverage" },
    ],
    benefits: [
      "Peak season volume handled without extra hiring",
      "Consistent support quality regardless of call volume",
      "Human agents reserved for complex order issues",
    ],
    technology: [
      "Conversational AI",
      "Inbound Call Automation",
      "CRM & Business Integration",
      "Real Time Call Intelligence",
    ],
    date: "2025-01-20",
  },
  {
    slug: "telecom-intelligent-call-routing",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    title: "Starfii Modernizes IVR with Intelligent Call Routing for a Telecom Provider",
    body: "See how replacing a legacy IVR with a conversational voice agent reduced call abandonment and got customers to the right team faster.",
    industry: "Telecommunications",
    client: "Regional telecom provider, multi-department support",
    duration: "12 weeks",
    overview:
      "A rigid, menu-driven IVR was routing customers through multiple transfers before reaching the right department, and many hung up before getting there.",
    challenge:
      "Customers frequently abandoned calls after being routed through several IVR menu layers before reaching the correct department.",
    solution:
      "Starfii replaced the legacy IVR with a conversational voice agent that understands intent directly and routes callers to the right team on the first attempt.",
    results:
      "Call abandonment dropped and customers reached the correct department significantly faster than under the legacy IVR.",
    stats: [
      { value: "-38%", label: "Call abandonment rate" },
      { value: "1 step", label: "Average transfers to reach the right team, down from 3" },
      { value: "+22%", label: "First-contact resolution" },
    ],
    benefits: [
      "Fewer abandoned calls at the routing stage",
      "Customers reach the right team on the first try",
      "Legacy IVR menus retired entirely",
    ],
    technology: [
      "Conversational AI",
      "Intelligent Call Routing",
      "IVR Modernization",
      "CRM & Business Integration",
    ],
    date: "2024-11-25",
  },
];

// Newest date first — this is what every page actually imports.
export const caseStudies: CaseStudy[] = [...rawCaseStudies].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
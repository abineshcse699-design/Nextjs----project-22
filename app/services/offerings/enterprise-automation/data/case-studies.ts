export type CaseStudy = {
  slug: string;
  image: string;
  title: string;
  body: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "regional-bank-ai-voice-support",
    image:
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1200&auto=format&fit=crop",
    title:
      "Improving Customer Support With AI Voice for a Regional Bank",
    body:
      "Explore how an AI voice agent can help banking teams handle routine customer enquiries faster, provide always-on conversational support, and route complex conversations to the right human specialists.",
  },

  {
    slug: "insurance-renewal-ai-calling",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1200&auto=format&fit=crop",
    title:
      "Automating Insurance Renewal Outreach With AI Voice",
    body:
      "See how intelligent outbound AI calling can help insurance teams manage renewal outreach, identify customer intent, reduce repetitive calling work, and focus advisors on conversations that require human expertise.",
  },

  {
    slug: "healthcare-appointment-voice-agent",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=1200&auto=format&fit=crop",
    title:
      "Simplifying Healthcare Appointment Management With AI Voice",
    body:
      "Discover how a conversational AI voice agent can support appointment booking, confirmations, rescheduling, and routine patient enquiries while allowing healthcare teams to focus on more complex requests.",
  },

  {
    slug: "retail-order-support-ai-voice",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
    title:
      "Creating Always-On Order Support With AI Voice for Retail",
    body:
      "Explore how retail organizations can use conversational AI voice support to handle common order, delivery, return, and customer service enquiries while reducing repetitive workload for support teams.",
  },

  {
    slug: "telecom-intelligent-call-routing",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop",
    title:
      "Modernizing Telecom Customer Support With Intelligent AI Call Routing",
    body:
      "Learn how conversational AI can replace complex menu-driven IVR experiences with intelligent intent-based call routing, helping customers reach the right support team faster.",
  },
];

export function getCaseStudyBySlug(
  slug: string
): CaseStudy | undefined {
  return caseStudies.find(
    (study) => study.slug === slug
  );
}
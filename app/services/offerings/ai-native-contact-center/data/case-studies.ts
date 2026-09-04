// app/services/offerings/ai-native-contact-center/data/case-studies.ts
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
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Cuts Wait Times for a Regional Bank with AI Voice Support",
    body: "Explore how Starfii's AI voice agents resolved routine banking enquiries instantly, freeing human agents for complex disputes and high value conversations.",
  },
  {
    slug: "insurer-outbound-renewal-calling",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Automates Renewal Outreach for a National Insurer",
    body: "See how outbound AI calling lifted renewal contact rates while giving agents a prioritized list of customers who actually needed a human conversation.",
  },
  {
    slug: "healthcare-appointment-voice-agent",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Builds a Voice Agent for Healthcare Appointment Management",
    body: "Learn how a conversational voice agent let patients book, confirm, and reschedule appointments naturally, cutting missed appointment rates.",
  },
  {
    slug: "retail-ecommerce-order-support-voice",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Deploys Always On Order Support for a Retail Brand",
    body: "Discover how AI voice call automation handled order status, returns, and delivery updates around the clock during peak retail seasons.",
  },
  {
    slug: "telecom-intelligent-call-routing",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Modernizes IVR with Intelligent Call Routing for a Telecom Provider",
    body: "See how replacing a legacy IVR with a conversational voice agent reduced call abandonment and got customers to the right team faster.",
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((s) => s.slug === slug);
}
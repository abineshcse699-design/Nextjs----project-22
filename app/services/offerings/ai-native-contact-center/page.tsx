import ServicePageTemplate from "../../ServicePageTemplate";

export const metadata = {
  title: "AI-native Contact Center | Starfii",
  description: "Deliver faster, more personal customer experiences with AI built into every conversation.",
};

export default function AINativeContactCenterPage() {
  return (
    <ServicePageTemplate
      eyebrow="Offering"
      name="AI-native Contact Center"
      tagline="Deliver faster, more personal customer experiences with AI built into every conversation."
      intro="We help you reimagine your contact center around AI from the ground up — combining conversational AI, agent assist, and real-time insights to resolve more queries, faster, without sacrificing the human touch."
      stats={[
        { value: "45%", label: "Reduction in average handle time" },
        { value: "60%", label: "Queries resolved without an agent" },
        { value: "24/7", label: "Always-on customer support" },
        { value: "90%+", label: "Customer satisfaction scores" },
      ]}
      features={[
        { title: "Conversational AI", desc: "Natural-language virtual agents handle routine queries end to end." },
        { title: "Agent Assist", desc: "Real-time suggestions and knowledge surfacing speed up human agents." },
        { title: "Omnichannel Support", desc: "Consistent experience across voice, chat, email, and social." },
        { title: "Real-time Insights", desc: "Sentiment and intent analytics guide continuous improvement." },
      ]}
      howItWorks={[
        { title: "Assess", desc: "We review your current contact center volumes, channels, and pain points." },
        { title: "Design", desc: "Conversational flows and agent-assist tools are built around your use cases." },
        { title: "Deploy", desc: "AI is rolled out alongside your existing team and systems." },
        { title: "Improve", desc: "Ongoing tuning based on real conversation data and outcomes." },
      ]}
      useCases={[
        { title: "Tier-1 Query Deflection", desc: "AI handles high-volume, repetitive queries automatically." },
        { title: "Agent Productivity", desc: "Assist tools cut research time during live conversations." },
        { title: "Proactive Outreach", desc: "AI-driven outbound for renewals, reminders, and follow-ups." },
      ]}
      industries={["Banking", "Retail", "Telecom", "Insurance", "Healthcare"]}
      whyUs={[
        "AI designed to work alongside agents, not just replace them.",
        "Proven deflection rates without hurting customer satisfaction.",
        "Seamless integration with your existing CRM and telephony stack.",
        "Continuous tuning based on live conversation data.",
      ]}
      testimonial={{
        quote: "Our contact center now resolves the majority of queries without a single human touch, and customers are happier for it.",
        author: "Head of Customer Experience",
        role: "Retail Sector Client",
      }}
      faqs={[
        { q: "Will this replace our human agents?", a: "No — it's designed to handle routine volume so agents can focus on complex, high-value conversations." },
        { q: "Can it integrate with our existing CRM?", a: "Yes, it's built to plug into your current CRM and telephony systems." },
        { q: "How long does deployment take?", a: "Most deployments go live within 6–10 weeks depending on scope." },
      ]}
    />
  );
}
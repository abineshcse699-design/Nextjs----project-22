// import PlatformPageTemplate from "../../../platform/_components/PlatformPageTemplate";
 import ServicePageTemplate from "../../ServicePageTemplate";

export const metadata = {
  title: "Generative AI | Starfii",
  description: "Apply generative AI to real business problems, safely and at scale.",
};

export default function GenerativeAIPage() {
  return (
    // <PlatformPageTemplate
    <ServicePageTemplate
      eyebrow="Offering"
      name="Generative AI"
      tagline="Apply generative AI to real business problems, safely and at scale."
      intro="We help organizations move beyond generative AI experiments into production-grade solutions — combining strategy, engineering, and governance to deliver measurable business impact."
      stats={[
        { value: "60%", label: "Faster content and code generation" },
        { value: "100+", label: "Generative AI use cases delivered" },
        { value: "40%", label: "Reduction in manual effort" },
        { value: "99%", label: "Model output accuracy on target tasks" },
      ]}
      features={[
        { title: "Use Case Strategy", desc: "Identify and prioritize high-value generative AI opportunities." },
        { title: "Custom Model Solutions", desc: "Build and fine-tune models aligned to your specific business needs." },
        { title: "Responsible AI Governance", desc: "Embed safety, oversight, and compliance into every deployment." },
        { title: "Production Deployment", desc: "Move generative AI from pilot to reliable, scaled production use." },
      ]}
      howItWorks={[
        { title: "Identify", desc: "Pinpoint high-impact generative AI use cases for your business." },
        { title: "Build", desc: "Develop and fine-tune models around your specific needs." },
        { title: "Govern", desc: "Embed responsible AI practices and oversight from the start." },
        { title: "Scale", desc: "Deploy into production with monitoring and continuous improvement." },
      ]}
      useCases={[
        { title: "Content Generation", desc: "Automate creation of marketing, support, and internal content." },
        { title: "Code Assistance", desc: "Accelerate software development with AI-powered coding support." },
        { title: "Knowledge Assistants", desc: "Give employees instant access to institutional knowledge." },
      ]}
      industries={["Technology", "Financial Services", "Retail", "Healthcare", "Telecom"]}
      whyUs={[
        "Focus on production-grade solutions, not just proof-of-concepts.",
        "Responsible AI practices built into every engagement.",
        "Deep experience across industries and use cases.",
        "Clear measurement of business impact, not just technical output.",
      ]}
      testimonial={{
        quote: "They helped us move from a generative AI pilot to a solution our teams use every single day.",
        author: "Chief Digital Officer",
        role: "Financial Services Client",
      }}
      faqs={[
        { q: "How do you ensure responsible AI use?", a: "Governance, oversight, and safety checks are built into every deployment from day one." },
        { q: "Can you fine-tune models for our specific data?", a: "Yes, we build and fine-tune models aligned to your business context and data." },
        { q: "How is business impact measured?", a: "We define clear KPIs tied to efficiency, cost, or revenue outcomes for each use case." },
      ]}
    />
  );
}
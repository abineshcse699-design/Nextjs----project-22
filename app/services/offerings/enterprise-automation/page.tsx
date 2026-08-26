// import PlatformPageTemplate from "../../../platform/_components/PlatformPageTemplate";
 import ServicePageTemplate from "../../ServicePageTemplate";

export const metadata = {
  title: "Enterprise Automation | Starfii",
  description: "Automate complex, cross-functional processes at enterprise scale.",
};

export default function EnterpriseAutomationPage() {
  return (
    // <PlatformPageTemplate
    <ServicePageTemplate
      eyebrow="Offering"
      name="Enterprise Automation"
      tagline="Automate complex, cross-functional processes at enterprise scale."
      intro="We design and implement automation that spans systems, teams, and departments — turning fragmented manual processes into connected, efficient workflows."
      stats={[
        { value: "55%", label: "Reduction in process cycle time" },
        { value: "200+", label: "Workflows automated" },
        { value: "40%", label: "Lower operational costs" },
        { value: "99%", label: "Process accuracy" },
      ]}
      features={[
        { title: "Cross-functional Workflows", desc: "Automate processes that span multiple teams and systems." },
        { title: "Intelligent Orchestration", desc: "Coordinate automation across people, systems, and agents." },
        { title: "Scalable Architecture", desc: "Automation built to scale with growing volume and complexity." },
        { title: "Governance & Control", desc: "Built-in oversight keeps automated processes compliant." },
      ]}
      howItWorks={[
        { title: "Map", desc: "Identify and map end-to-end processes across departments." },
        { title: "Design", desc: "Architect automation flows tailored to your operating model." },
        { title: "Deploy", desc: "Roll out automation with minimal disruption to operations." },
        { title: "Govern", desc: "Ongoing monitoring keeps automated processes compliant and efficient." },
      ]}
      useCases={[
        { title: "Order-to-Cash", desc: "Automate the full cycle from order intake to payment reconciliation." },
        { title: "Procure-to-Pay", desc: "Streamline purchasing, approvals, and vendor payments." },
        { title: "HR Operations", desc: "Automate onboarding, approvals, and case management." },
      ]}
      industries={["Manufacturing", "Retail", "Financial Services", "Healthcare", "Telecom"]}
      whyUs={[
        "Experience automating processes at true enterprise scale.",
        "Automation designed around your operating model, not generic templates.",
        "Built-in governance keeps automated processes auditable.",
        "Proven track record across cross-functional programs.",
      ]}
      testimonial={{
        quote: "We automated processes that touched five different departments — something we thought was years away.",
        author: "COO",
        role: "Manufacturing Sector Client",
      }}
      faqs={[
        { q: "Can automation span multiple departments?", a: "Yes, our approach is designed specifically for cross-functional, end-to-end processes." },
        { q: "How do you ensure governance?", a: "Every automated workflow includes built-in oversight and audit trails." },
        { q: "What's a typical rollout timeline?", a: "Enterprise-wide programs typically span 3–6 months depending on scope." },
      ]}
    />
  );
}
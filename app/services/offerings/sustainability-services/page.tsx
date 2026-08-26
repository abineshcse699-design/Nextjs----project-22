// import PlatformPageTemplate from "../../../platform/_components/PlatformPageTemplate";
 import ServicePageTemplate from "../../ServicePageTemplate";
export const metadata = {
  title: "Sustainability Services | Starfii",
  description: "Turn sustainability goals into measurable, technology-enabled outcomes.",
};

export default function SustainabilityServicesPage() {
  return (
    // <PlatformPageTemplate
    <ServicePageTemplate
      eyebrow="Offering"
      name="Sustainability Services"
      tagline="Turn sustainability goals into measurable, technology-enabled outcomes."
      intro="We help organizations track, report, and act on sustainability metrics — combining data, technology, and strategy to make ESG commitments real and measurable."
      stats={[
        { value: "30%", label: "Average carbon footprint reduction" },
        { value: "100+", label: "ESG programs supported" },
        { value: "100%", label: "Reporting accuracy improvement" },
        { value: "20+", label: "Regulatory frameworks covered" },
      ]}
      features={[
        { title: "ESG Data Management", desc: "Centralize and validate sustainability data across the organization." },
        { title: "Carbon Tracking", desc: "Measure and monitor emissions across your operations and supply chain." },
        { title: "Regulatory Reporting", desc: "Stay compliant with evolving sustainability disclosure requirements." },
        { title: "Strategy & Roadmapping", desc: "Translate sustainability goals into actionable, measurable plans." },
      ]}
      howItWorks={[
        { title: "Baseline", desc: "Assess current sustainability data, processes, and gaps." },
        { title: "Strategize", desc: "Define measurable goals aligned to your ESG commitments." },
        { title: "Implement", desc: "Deploy tools and processes to track and report progress." },
        { title: "Report", desc: "Deliver accurate, audit-ready sustainability reporting." },
      ]}
      useCases={[
        { title: "Carbon Accounting", desc: "Track Scope 1, 2, and 3 emissions across operations." },
        { title: "Supply Chain Sustainability", desc: "Monitor and improve sustainability across your supplier base." },
        { title: "ESG Disclosure", desc: "Meet regulatory and investor reporting requirements accurately." },
      ]}
      industries={["Manufacturing", "Energy & Utilities", "Consumer Goods", "Retail", "Transportation & Logistics"]}
      whyUs={[
        "Deep expertise across evolving global ESG regulations.",
        "Technology-enabled tracking, not manual spreadsheets.",
        "Proven approach linking sustainability to business outcomes.",
        "Support from strategy through to audit-ready reporting.",
      ]}
      testimonial={{
        quote: "We finally have a single, accurate view of our sustainability performance across every business unit.",
        author: "Chief Sustainability Officer",
        role: "Consumer Goods Client",
      }}
      faqs={[
        { q: "Do you support Scope 3 emissions tracking?", a: "Yes, we help track emissions across your full value chain, including suppliers." },
        { q: "Can you help with regulatory disclosures?", a: "Yes, our reporting is built to align with major global ESG frameworks." },
        { q: "How is progress measured?", a: "We define clear, measurable KPIs tied to your sustainability commitments." },
      ]}
    />
  );
}
// import PlatformPageTemplate from "../../../platform/_components/PlatformPageTemplate";
 import ServicePageTemplate from "../../ServicePageTemplate";

export const metadata = {
  title: "Digital Workplace | Starfii",
  description: "Enable your workforce with connected, intuitive digital workplace experiences.",
};

export default function DigitalWorkplacePage() {
  return (
    // <PlatformPageTemplate
    <ServicePageTemplate
      eyebrow="Offering"
      name="Digital Workplace"
      tagline="Enable your workforce with connected, intuitive digital workplace experiences."
      intro="We design and manage digital workplace environments that make it easier for employees to collaborate, access information, and get work done — wherever they are."
      stats={[
        { value: "35%", label: "Increase in employee productivity" },
        { value: "50,000+", label: "Employees supported" },
        { value: "99.9%", label: "Workplace system uptime" },
        { value: "40%", label: "Reduction in IT support tickets" },
      ]}
      features={[
        { title: "Unified Collaboration", desc: "Connect teams across locations with integrated collaboration tools." },
        { title: "Self-service IT", desc: "Employees resolve common issues without waiting on support tickets." },
        { title: "Device Management", desc: "Secure, consistent experiences across all employee devices." },
        { title: "Employee Experience Analytics", desc: "Data-driven insights improve workplace tools over time." },
      ]}
      howItWorks={[
        { title: "Assess", desc: "Understand current workplace tools, gaps, and employee needs." },
        { title: "Design", desc: "Architect a connected digital workplace experience." },
        { title: "Deploy", desc: "Roll out tools and processes with minimal disruption." },
        { title: "Optimize", desc: "Continuously improve based on employee feedback and usage data." },
      ]}
      useCases={[
        { title: "Hybrid Work Enablement", desc: "Support seamless collaboration across office and remote teams." },
        { title: "IT Self-service", desc: "Reduce support tickets with self-service tools and automation." },
        { title: "Employee Onboarding", desc: "Streamline device and access setup for new employees." },
      ]}
      industries={["Technology", "Financial Services", "Professional Services", "Retail", "Telecom"]}
      whyUs={[
        "Workplace experiences designed around how employees actually work.",
        "Proven track record supporting large, distributed workforces.",
        "Reduced IT overhead through self-service and automation.",
        "Continuous improvement driven by real usage data.",
      ]}
      testimonial={{
        quote: "Our employees now have a consistent, reliable digital experience whether they're in the office or remote.",
        author: "Chief Information Officer",
        role: "Professional Services Client",
      }}
      faqs={[
        { q: "Does this support hybrid and remote teams?", a: "Yes, the digital workplace is designed for seamless collaboration across locations." },
        { q: "Can it reduce our IT support workload?", a: "Yes, self-service tools and automation significantly cut routine support tickets." },
        { q: "How is employee experience measured?", a: "We use analytics on usage, satisfaction, and support trends to guide improvements." },
      ]}
    />
  );
}
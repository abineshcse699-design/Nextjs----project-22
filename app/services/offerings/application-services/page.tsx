// import PlatformPageTemplate from "../../../platform/_components/PlatformPageTemplate";
 import ServicePageTemplate from "../../ServicePageTemplate";
export const metadata = {
  title: "Application Services | Starfii",
  description: "Build, modernize, and manage applications across their full lifecycle.",
};

export default function ApplicationServicesPage() {
  return (
    // <PlatformPageTemplate
    <ServicePageTemplate
      eyebrow="Offering"
      name="Application Services"
      tagline="Build, modernize, and manage applications across their full lifecycle."
      intro="From new application development to modernization and ongoing support, we manage the full application lifecycle so your teams can focus on delivering business value."
      stats={[
        { value: "500+", label: "Applications supported" },
        { value: "40%", label: "Faster application delivery" },
        { value: "99.9%", label: "Application uptime" },
        { value: "30%", label: "Lower maintenance costs" },
      ]}
      features={[
        { title: "Application Development", desc: "Build new applications aligned to your business and technical requirements." },
        { title: "Modernization", desc: "Transform legacy applications into scalable, maintainable systems." },
        { title: "Application Support", desc: "Ongoing maintenance and support keep applications running reliably." },
        { title: "Lifecycle Management", desc: "Manage applications from build through retirement." },
      ]}
      howItWorks={[
        { title: "Assess", desc: "Evaluate current applications and identify opportunities." },
        { title: "Design", desc: "Architect solutions aligned to business and technical needs." },
        { title: "Build & Modernize", desc: "Develop new applications or modernize existing ones." },
        { title: "Support", desc: "Provide ongoing maintenance and continuous improvement." },
      ]}
      useCases={[
        { title: "Custom Application Builds", desc: "Develop applications tailored to specific business needs." },
        { title: "Legacy Modernization", desc: "Refactor outdated applications into scalable, modern systems." },
        { title: "Managed Support", desc: "Ongoing application maintenance and issue resolution." },
      ]}
      industries={["Banking", "Healthcare", "Manufacturing", "Retail", "Insurance"]}
      whyUs={[
        "Full lifecycle coverage from build to ongoing support.",
        "Proven modernization approach for complex legacy systems.",
        "Dedicated support teams for reliable, ongoing operations.",
        "Flexible engagement models to match your needs.",
      ]}
      testimonial={{
        quote: "They took ownership of our legacy application portfolio and modernized it without disrupting our operations.",
        author: "IT Director",
        role: "Healthcare Sector Client",
      }}
      faqs={[
        { q: "Do you support both new builds and legacy systems?", a: "Yes, we cover the full spectrum from new development to modernization and support." },
        { q: "What does ongoing support include?", a: "Maintenance, issue resolution, and continuous improvement of your applications." },
        { q: "Can you take over an existing application portfolio?", a: "Yes, we offer managed support engagements for existing application estates." },
      ]}
    />
  );
}
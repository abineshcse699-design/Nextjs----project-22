// import PlatformPageTemplate from "../../../platform/_components/PlatformPageTemplate";
 import ServicePageTemplate from "../../ServicePageTemplate";

export const metadata = {
  title: "Cybersecurity | Starfii",
  description: "Protect your business with proactive, end-to-end cybersecurity services.",
};

export default function CybersecurityPage() {
  return (
    // <PlatformPageTemplate
    <ServicePageTemplate
      eyebrow="Offering"
      name="Cybersecurity"
      tagline="Protect your business with proactive, end-to-end cybersecurity services."
      intro="We help organizations stay ahead of evolving threats with a layered approach — covering risk assessment, threat detection, incident response, and ongoing compliance."
      stats={[
        { value: "24/7", label: "Threat monitoring" },
        { value: "99.9%", label: "Threat detection accuracy" },
        { value: "50%", label: "Faster incident response" },
        { value: "300+", label: "Security assessments delivered" },
      ]}
      features={[
        { title: "Threat Detection", desc: "Continuous monitoring identifies threats before they escalate." },
        { title: "Incident Response", desc: "Rapid containment and remediation when incidents occur." },
        { title: "Risk Assessment", desc: "Comprehensive audits uncover vulnerabilities across your estate." },
        { title: "Compliance Management", desc: "Stay aligned with evolving regulatory and industry standards." },
      ]}
      howItWorks={[
        { title: "Assess", desc: "Evaluate your current security posture and exposure." },
        { title: "Design", desc: "Build a security architecture aligned to your risk profile." },
        { title: "Implement", desc: "Deploy monitoring, controls, and response processes." },
        { title: "Monitor", desc: "Ongoing threat detection and continuous improvement." },
      ]}
      useCases={[
        { title: "Security Operations Center", desc: "24/7 monitoring and response for your entire environment." },
        { title: "Compliance Readiness", desc: "Prepare for audits against industry and regulatory standards." },
        { title: "Cloud Security", desc: "Secure cloud workloads and identities at scale." },
      ]}
      industries={["Banking", "Financial Services", "Healthcare", "Insurance", "Public Sector"]}
      whyUs={[
        "Dedicated security operations with round-the-clock coverage.",
        "Deep experience across regulated, high-risk industries.",
        "Proactive threat hunting, not just reactive monitoring.",
        "Clear reporting that keeps leadership informed.",
      ]}
      testimonial={{
        quote: "Their team caught and contained a threat before it could impact our operations — that level of vigilance is invaluable.",
        author: "CISO",
        role: "Financial Services Client",
      }}
      faqs={[
        { q: "Do you offer 24/7 monitoring?", a: "Yes, our security operations run continuously across all monitored environments." },
        { q: "Can you help with compliance audits?", a: "Yes, we support readiness and ongoing compliance for major industry standards." },
        { q: "How quickly do you respond to incidents?", a: "Our incident response process is designed for rapid containment, typically within hours." },
      ]}
    />
  );
}
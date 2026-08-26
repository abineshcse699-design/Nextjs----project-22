import PlatformPageTemplate from "../PlatformPageTemplate";

export const metadata = {
  title: "Amaze® | Starfii",
  description: "Speed up and steady your product, platform, process, and data journey to the cloud.",
};

export default function AmazePage() {
  return (
    <PlatformPageTemplate
      eyebrow="Platform"
      name="Amaze®"
      tagline="Speed up and steady your product, platform, process, and data journey to the cloud."
      intro="Amaze® is built to de-risk and accelerate cloud transformation — covering migration, modernization, and ongoing optimization in one connected platform."
      stats={[
        { value: "35%", label: "Average cloud cost savings" },
        { value: "2x", label: "Faster migration timelines" },
        { value: "500+", label: "Applications migrated" },
        { value: "99.95%", label: "Post-migration uptime" },
      ]}
      features={[
        { title: "Cloud Migration", desc: "Move workloads to the cloud with predictable timelines and minimal disruption." },
        { title: "Modernization", desc: "Refactor legacy systems into cloud-native architectures built for scale." },
        { title: "Cost Optimization", desc: "Continuous monitoring keeps cloud spend aligned with actual usage." },
        { title: "Resilience & Security", desc: "Best-practice controls are built into every stage of the cloud journey." },
      ]}
      howItWorks={[
        { title: "Assess", desc: "Evaluate current infrastructure, dependencies, and migration readiness." },
        { title: "Plan", desc: "Define a phased migration and modernization roadmap." },
        { title: "Migrate", desc: "Move workloads with minimal downtime and risk." },
        { title: "Optimize", desc: "Continuously tune performance, cost, and security post-migration." },
      ]}
      useCases={[
        { title: "Data Center Exit", desc: "Migrate legacy infrastructure to cloud with a clear, phased plan." },
        { title: "Legacy Modernization", desc: "Refactor monoliths into scalable, cloud-native services." },
        { title: "Multi-cloud Strategy", desc: "Design and manage workloads across multiple cloud providers." },
      ]}
      industries={["Retail", "Telecom", "Manufacturing", "Financial Services", "Travel & Hospitality"]}
      whyUs={[
        "End-to-end coverage from assessment to post-migration optimization.",
        "Proven playbooks for large-scale, low-risk migrations.",
        "Built-in FinOps practices to control cloud spend.",
        "Security and compliance embedded from day one.",
      ]}
      testimonial={{
        quote: "Amaze® gave us a clear roadmap and cut our cloud migration timeline significantly.",
        author: "Head of Infrastructure",
        role: "Retail Enterprise Client",
      }}
      faqs={[
        { q: "Which cloud providers does Amaze® support?", a: "Amaze® supports major providers including AWS, Azure, and Google Cloud." },
        { q: "Can it handle large, complex legacy systems?", a: "Yes, Amaze® is designed for large-scale, high-complexity migrations." },
        { q: "How is cost optimization handled after migration?", a: "Continuous monitoring and FinOps practices keep spend aligned with usage." },
      ]}
    />
  );
}
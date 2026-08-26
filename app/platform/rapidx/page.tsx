import PlatformPageTemplate from "../PlatformPageTemplate";

export const metadata = {
  title: "RapidX® | Starfii",
  description: "Create direct, tailored paths for your teams to develop against any need.",
};

export default function RapidXPage() {
  return (
    <PlatformPageTemplate
      eyebrow="Platform"
      name="RapidX®"
      tagline="Create direct, tailored paths for your teams to develop against any need."
      intro="RapidX® gives your engineering and delivery teams a structured, repeatable way to move from idea to production — cutting delivery cycles while keeping quality and governance intact."
      stats={[
        { value: "40%", label: "Faster time-to-market" },
        { value: "60+", label: "Reusable accelerators" },
        { value: "99.9%", label: "Delivery SLA compliance" },
        { value: "200+", label: "Teams enabled globally" },
      ]}
      features={[
        { title: "Accelerated Delivery", desc: "Pre-built accelerators and reusable components shorten build time across projects." },
        { title: "Tailored Workflows", desc: "Configure paths that match your team's stack, standards, and release cadence." },
        { title: "Built-in Governance", desc: "Quality gates and checkpoints are embedded into every delivery path by default." },
        { title: "Cross-team Visibility", desc: "Shared dashboards keep stakeholders aligned from kickoff to release." },
      ]}
      howItWorks={[
        { title: "Assess", desc: "We map your current delivery process, tools, and bottlenecks." },
        { title: "Configure", desc: "RapidX® paths are tailored to your team's stack and standards." },
        { title: "Deploy", desc: "Teams start delivering through the new, accelerated workflow." },
        { title: "Optimize", desc: "Continuous feedback loops refine paths as needs evolve." },
      ]}
      useCases={[
        { title: "New Product Launches", desc: "Stand up delivery pipelines for greenfield products in days, not months." },
        { title: "Team Onboarding", desc: "Bring new squads up to speed with standardized, ready-to-use paths." },
        { title: "Multi-team Programs", desc: "Keep large, distributed programs aligned on delivery standards." },
      ]}
      industries={["Banking", "Retail", "Healthcare", "Technology", "Insurance", "Telecom"]}
      whyUs={[
        "Proven accelerators built from 100+ real client engagements.",
        "Flexible configuration — no rip-and-replace of existing tools.",
        "Built-in quality and compliance checkpoints at every stage.",
        "Dedicated enablement support during rollout.",
      ]}
      testimonial={{
        quote: "RapidX® cut our release cycle almost in half without adding risk to our process.",
        author: "VP of Engineering",
        role: "Global Financial Services Client",
      }}
      faqs={[
        { q: "Does RapidX® replace our existing tools?", a: "No — it integrates with your current stack and standardizes how teams use it." },
        { q: "How long does onboarding take?", a: "Most teams are up and running within 2–4 weeks depending on scope." },
        { q: "Can it scale across multiple teams?", a: "Yes, RapidX® is designed for both single-team and enterprise-wide rollouts." },
      ]}
    />
  );
}
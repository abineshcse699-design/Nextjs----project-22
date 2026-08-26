import PlatformPageTemplate from "../PlatformPageTemplate";

export const metadata = {
  title: "Agentverse™ | Starfii",
  description: "Use intelligent agents to streamline operations, accelerate decisions, and improve outcomes.",
};

export default function AgentversePage() {
  return (
    <PlatformPageTemplate
      eyebrow="Platform"
      name="Agentverse™"
      tagline="Use intelligent agents to streamline operations, accelerate decisions, and improve outcomes."
      intro="Agentverse™ deploys coordinated AI agents across your workflows — handling routine decisions, surfacing insights, and escalating only what genuinely needs human judgment."
      stats={[
        { value: "50%", label: "Faster decision cycles" },
        { value: "80+", label: "Agent workflows deployed" },
        { value: "24/7", label: "Autonomous operation" },
        { value: "95%", label: "Task resolution without escalation" },
      ]}
      features={[
        { title: "Autonomous Agents", desc: "Purpose-built agents handle end-to-end tasks across business functions." },
        { title: "Faster Decisions", desc: "Agents process and act on data in real time, cutting decision latency." },
        { title: "Human-in-the-loop", desc: "Critical decisions are routed to people, while routine work runs autonomously." },
        { title: "Continuous Learning", desc: "Agents improve over time as they're exposed to more operational data." },
      ]}
      howItWorks={[
        { title: "Identify", desc: "Pinpoint workflows suited to agentic automation." },
        { title: "Deploy Agents", desc: "Configure and launch agents tailored to those workflows." },
        { title: "Monitor", desc: "Track agent performance and decisions in real time." },
        { title: "Refine", desc: "Continuously improve agent behavior based on outcomes." },
      ]}
      useCases={[
        { title: "Customer Support Triage", desc: "Agents resolve routine queries and escalate complex ones." },
        { title: "Operational Monitoring", desc: "Agents flag anomalies and trigger corrective actions automatically." },
        { title: "Decision Support", desc: "Agents surface recommendations to speed up human decision-making." },
      ]}
      industries={["Technology", "Financial Services", "Healthcare", "Telecom", "Public Sector"]}
      whyUs={[
        "Agents designed around real operational workflows, not generic bots.",
        "Clear human-in-the-loop controls for sensitive decisions.",
        "Transparent monitoring of every agent action.",
        "Continuous learning built into agent performance.",
      ]}
      testimonial={{
        quote: "Agentverse™ let us automate decisions we thought would always need a human in the loop.",
        author: "Chief Operations Officer",
        role: "Technology Sector Client",
      }}
      faqs={[
        { q: "How is human oversight maintained?", a: "Agentverse™ routes critical or ambiguous decisions to human reviewers by design." },
        { q: "What kinds of tasks can agents handle?", a: "From triage and monitoring to recommendations and routine decision-making." },
        { q: "Is agent behavior auditable?", a: "Yes, every agent action and decision is logged and reviewable." },
      ]}
    />
  );
}
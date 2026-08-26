import PlatformPageTemplate from "../PlatformPageTemplate";

export const metadata = {
  title: "Zerovity™ | Starfii",
  description: "The platform behind the Zero Friction Enterprise™.",
};

export default function ZerovityPage() {
  return (
    <PlatformPageTemplate
      eyebrow="Platform"
      name="Zerovity™"
      tagline="Captures how your applications actually work, then applies that understanding everywhere."
      intro="Zerovity™ builds a living map of your application landscape and uses it to drive smarter maintenance, modernization, and transformation decisions — powering the Zero Friction Enterprise™."
      stats={[
        { value: "45%", label: "Reduction in maintenance effort" },
        { value: "1000+", label: "Applications mapped" },
        { value: "30%", label: "Faster modernization decisions" },
        { value: "100%", label: "Visibility into dependencies" },
      ]}
      features={[
        { title: "Application Intelligence", desc: "Automatically maps dependencies, usage, and risk across your application estate." },
        { title: "Smarter Maintenance", desc: "Prioritize fixes and updates based on real impact, not guesswork." },
        { title: "Guided Modernization", desc: "Data-driven recommendations chart the safest path to modernize legacy systems." },
        { title: "Zero Friction Operations", desc: "Reduces handoffs and manual coordination across teams and tools." },
      ]}
      howItWorks={[
        { title: "Map", desc: "Zerovity™ scans and maps your entire application landscape." },
        { title: "Analyze", desc: "Dependencies, risks, and usage patterns are surfaced automatically." },
        { title: "Prioritize", desc: "Get clear, data-backed recommendations on what to fix or modernize first." },
        { title: "Execute", desc: "Teams act on guided plans with far less manual coordination." },
      ]}
      useCases={[
        { title: "Application Rationalization", desc: "Identify redundant or underused applications to retire or consolidate." },
        { title: "Modernization Planning", desc: "Prioritize legacy systems for modernization based on real risk and impact." },
        { title: "Maintenance Prioritization", desc: "Focus maintenance effort where it delivers the most operational value." },
      ]}
      industries={["Financial Services", "Insurance", "Manufacturing", "Healthcare", "Technology"]}
      whyUs={[
        "Continuously updated view of your entire application landscape.",
        "Recommendations grounded in real usage and dependency data.",
        "Reduces guesswork in maintenance and modernization planning.",
        "Powers the broader Zero Friction Enterprise™ approach.",
      ]}
      testimonial={{
        quote: "Zerovity™ gave us visibility into our application estate we simply didn't have before.",
        author: "Enterprise Architecture Lead",
        role: "Manufacturing Sector Client",
      }}
      faqs={[
        { q: "How does Zerovity™ map applications?", a: "It analyzes usage, dependencies, and configuration data across your estate automatically." },
        { q: "Does it require agents installed everywhere?", a: "Zerovity™ is designed for lightweight, minimally invasive discovery." },
        { q: "How often is the application map updated?", a: "It updates continuously, reflecting changes as they happen." },
      ]}
    />
  );
}
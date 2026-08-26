import PlatformPageTemplate from "../PlatformPageTemplate";

export const metadata = {
  title: "Tensai® | Starfii",
  description: "Automate your essential processes to increase quality and efficiency.",
};

export default function TensaiPage() {
  return (
    <PlatformPageTemplate
      eyebrow="Platform"
      name="Tensai®"
      tagline="Automate your essential processes to increase quality and efficiency."
      intro="Tensai® applies intelligent automation to repetitive, rule-based work across your operations, freeing teams to focus on higher-value tasks while reducing error rates."
      stats={[
        { value: "70%", label: "Reduction in manual effort" },
        { value: "3x", label: "Faster process turnaround" },
        { value: "99%", label: "Accuracy on automated tasks" },
        { value: "150+", label: "Processes automated" },
      ]}
      features={[
        { title: "Process Automation", desc: "Automate manual, repetitive workflows across departments with minimal setup." },
        { title: "Quality Assurance", desc: "Continuous validation reduces defects before they reach production." },
        { title: "Scalable Efficiency", desc: "Automation scales with volume without a proportional increase in headcount." },
        { title: "Actionable Insights", desc: "Built-in analytics surface bottlenecks and improvement opportunities." },
      ]}
      howItWorks={[
        { title: "Discover", desc: "Identify high-volume, rule-based processes fit for automation." },
        { title: "Design", desc: "Build automation flows tailored to your existing systems." },
        { title: "Validate", desc: "Test against real scenarios before going live." },
        { title: "Scale", desc: "Expand automation across teams and processes over time." },
      ]}
      useCases={[
        { title: "Back-office Operations", desc: "Automate invoice processing, reconciliations, and data entry." },
        { title: "Customer Onboarding", desc: "Speed up document verification and account setup workflows." },
        { title: "Compliance Reporting", desc: "Generate accurate, audit-ready reports on a recurring schedule." },
      ]}
      industries={["Banking", "Insurance", "Manufacturing", "Healthcare", "Public Sector"]}
      whyUs={[
        "Automation designed around your existing systems, not against them.",
        "Built-in quality checks reduce downstream errors.",
        "Transparent reporting on time and cost savings.",
        "Support for both simple task automation and complex process orchestration.",
      ]}
      testimonial={{
        quote: "Tensai® took our reconciliation process from days to hours, with far fewer errors.",
        author: "Director of Operations",
        role: "Insurance Sector Client",
      }}
      faqs={[
        { q: "What kinds of processes can Tensai® automate?", a: "Rule-based, repetitive tasks across finance, operations, HR, and compliance are common starting points." },
        { q: "Does it require major system changes?", a: "No — Tensai® is built to work alongside your current systems and tools." },
        { q: "How is ROI measured?", a: "We track effort saved, error reduction, and turnaround time before and after automation." },
      ]}
    />
  );
}
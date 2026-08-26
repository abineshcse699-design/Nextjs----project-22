// import PlatformPageTemplate from "../../../platform/_components/PlatformPageTemplate";
 import ServicePageTemplate from "../../ServicePageTemplate";

export const metadata = {
  title: "Testing | Starfii",
  description: "Comprehensive quality engineering to ship reliable software, faster.",
};

export default function TestingPage() {
  return (
  <ServicePageTemplate
      eyebrow="Offering"
      name="Testing"
      tagline="Comprehensive quality engineering to ship reliable software, faster."
      intro="We combine automated and manual testing strategies to catch issues early, reduce release risk, and help your teams ship high-quality software with confidence."
      stats={[
        { value: "70%", label: "Test automation coverage" },
        { value: "50%", label: "Faster release cycles" },
        { value: "80%", label: "Reduction in production defects" },
        { value: "1000+", label: "Test suites delivered" },
      ]}
      features={[
        { title: "Test Automation", desc: "Automated test suites catch regressions early and often." },
        { title: "Performance Testing", desc: "Validate application performance under real-world load." },
        { title: "Security Testing", desc: "Identify vulnerabilities before they reach production." },
        { title: "Continuous QA", desc: "Testing embedded directly into your CI/CD pipeline." },
      ]}
      howItWorks={[
        { title: "Assess", desc: "Review current testing practices, coverage, and gaps." },
        { title: "Design", desc: "Build a testing strategy aligned to your release process." },
        { title: "Automate", desc: "Implement automated test suites across critical paths." },
        { title: "Integrate", desc: "Embed testing into CI/CD for continuous quality assurance." },
      ]}
      useCases={[
        { title: "Regression Testing", desc: "Catch breaking changes before every release." },
        { title: "Performance & Load Testing", desc: "Ensure applications hold up under real-world traffic." },
        { title: "Release Quality Gates", desc: "Automated checks prevent low-quality releases from shipping." },
      ]}
      industries={["Banking", "Retail", "Healthcare", "Technology", "Insurance"]}
      whyUs={[
        "Testing strategies built around your specific release cadence.",
        "High automation coverage reduces manual testing overhead.",
        "Testing embedded directly into CI/CD, not bolted on after.",
        "Proven track record reducing production defects at scale.",
      ]}
      testimonial={{
        quote: "Our release confidence improved dramatically once testing became a continuous part of our pipeline, not an afterthought.",
        author: "VP of Engineering",
        role: "Technology Sector Client",
      }}
      faqs={[
        { q: "Do you handle both automated and manual testing?", a: "Yes, we combine both approaches based on what each part of your application needs." },
        { q: "Can testing be integrated into our CI/CD pipeline?", a: "Yes, we embed automated testing directly into your existing pipeline." },
        { q: "How much can automation reduce our testing time?", a: "Most clients see significant reductions in regression testing time after automation." },
      ]}
    />
  );
}
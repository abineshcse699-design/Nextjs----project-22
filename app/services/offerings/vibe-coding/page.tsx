// - import PlatformPageTemplate from "../../../platform/_components/PlatformPageTemplate";
 import ServicePageTemplate from "../../ServicePageTemplate";

export const metadata = {
  title: "Vibe Coding | Starfii",
  description: "AI-assisted development that turns ideas into working software, fast.",
};

export default function VibeCodingPage() {
  return (
    // <PlatformPageTemplate
    <ServicePageTemplate
      eyebrow="Offering"
      name="Vibe Coding"
      tagline="AI-assisted development that turns ideas into working software, fast."
      intro="Vibe Coding pairs skilled engineers with AI-powered development tools to move from concept to working product at a pace traditional development can't match — without cutting corners on quality."
      stats={[
        { value: "3x", label: "Faster prototype-to-production" },
        { value: "50%", label: "Reduction in development time" },
        { value: "100+", label: "AI-assisted builds delivered" },
        { value: "95%", label: "Code quality retention" },
      ]}
      features={[
        { title: "AI-assisted Development", desc: "Engineers use AI tools to accelerate coding without sacrificing quality." },
        { title: "Rapid Prototyping", desc: "Move from concept to working prototype in days, not weeks." },
        { title: "Human-reviewed Output", desc: "Every AI-generated component is reviewed by experienced engineers." },
        { title: "Iterative Delivery", desc: "Fast feedback loops keep development aligned with real needs." },
      ]}
      howItWorks={[
        { title: "Define", desc: "Scope the product or feature and define success criteria." },
        { title: "Build", desc: "AI-assisted engineers rapidly build working software." },
        { title: "Review", desc: "Experienced developers review and refine every component." },
        { title: "Ship", desc: "Deploy and iterate based on real user feedback." },
      ]}
      useCases={[
        { title: "MVP Development", desc: "Get a working product in front of users faster." },
        { title: "Internal Tools", desc: "Build custom internal applications without long development cycles." },
        { title: "Feature Prototyping", desc: "Validate new features quickly before committing to full builds." },
      ]}
      industries={["Technology", "Retail", "Financial Services", "Healthcare", "Professional Services"]}
      whyUs={[
        "Speed without compromising code quality or maintainability.",
        "Experienced engineers guide and review every AI-assisted build.",
        "Faster iteration cycles based on real user feedback.",
        "Flexible engagement for MVPs, prototypes, or full products.",
      ]}
      testimonial={{
        quote: "We went from concept to a working prototype in under two weeks — a timeline we didn't think was possible.",
        author: "Head of Product",
        role: "Technology Sector Client",
      }}
      faqs={[
        { q: "Is AI-generated code production-ready?", a: "All AI-assisted code is reviewed and refined by experienced engineers before release." },
        { q: "How fast can an MVP be built?", a: "Simple MVPs can be delivered in as little as 2–4 weeks depending on scope." },
        { q: "Can this scale to larger products?", a: "Yes, the same approach extends to full-scale product development." },
      ]}
    />
  );
}
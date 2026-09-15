export type Job = {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  mode: "On-site" | "Remote" | "Hybrid";
  postedOn: string;
  summary: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  benefits: string[];
  hiringProcess: { step: string; detail: string }[];
};

export const jobs: Job[] = [
  {
    slug: "senior-software-engineer-platform",
    title: "Senior Software Engineer, Platform",
    department: "Software & Product Engineering",
    location: "Bengaluru, IN",
    type: "Full-time",
    mode: "Hybrid",
    postedOn: "2026-09-02",
    summary:
      "Own core services for Starfii's platform products and mentor engineers building the next generation of Agentverse.",
    overview:
      "You'll work on the backbone services that power TurboDesk and Agentverse — the systems our AI agents and human teams both rely on every day. This is a hands-on engineering role with real ownership: you'll set direction on architecture, not just implement someone else's spec.",
    responsibilities: [
      "Design and build backend services that support high-throughput, low-latency workloads",
      "Partner with product and design to scope features from idea to shipped release",
      "Review code and mentor two to three engineers on the team",
      "Improve reliability, observability, and on-call health for the systems you own",
      "Take part in architecture decisions that shape the platform roadmap",
    ],
    requirements: [
      "5+ years building production backend systems",
      "Strong grounding in distributed systems fundamentals",
      "Experience with TypeScript or Go in production",
      "Comfortable owning a service end-to-end, from design through on-call",
    ],
    niceToHave: [
      "Experience building developer platforms or internal tooling",
      "Exposure to LLM-based agent systems",
      "Open-source contributions",
    ],
    benefits: [
      "Health coverage for you and your family",
      "Flexible hybrid work model",
      "Annual learning stipend",
      "Employee stock options",
    ],
    hiringProcess: [
      { step: "Application review", detail: "Our team reviews your application within 5 working days." },
      { step: "Recruiter screen", detail: "A 30-minute call to talk through your background and the role." },
      { step: "Technical interview", detail: "Two rounds covering system design and hands-on coding." },
      { step: "Team interview", detail: "Meet the team you'd be working with directly." },
      { step: "Offer", detail: "We move fast — most candidates hear back within a week of final interviews." },
    ],
  },
  {
    slug: "ai-ml-engineer-agentverse",
    title: "AI/ML Engineer, Agentverse",
    department: "Software & Product Engineering",
    location: "Bengaluru, IN",
    type: "Full-time",
    mode: "On-site",
    postedOn: "2026-08-20",
    summary:
      "Build the intelligent agents behind Agentverse — from prompting and evaluation to production deployment.",
    overview:
      "Agentverse is Starfii's agent platform, used by enterprise clients to automate real operational work. You'll build, evaluate, and ship agents that make decisions in production, working closely with our applied research and product teams.",
    responsibilities: [
      "Design and evaluate agent workflows for enterprise use cases",
      "Build evaluation harnesses to measure agent quality and safety",
      "Take agents from prototype to production, including monitoring",
      "Collaborate with client-facing teams to translate requirements into agent behavior",
    ],
    requirements: [
      "3+ years working with ML or LLM-based systems",
      "Solid Python skills and experience with modern ML tooling",
      "Understanding of prompting, evaluation, and fine-tuning approaches",
      "Ability to reason about failure modes in probabilistic systems",
    ],
    niceToHave: [
      "Experience with agent frameworks or tool-use systems",
      "Background in applied research or published work",
    ],
    benefits: [
      "Health coverage for you and your family",
      "Compute budget for experimentation",
      "Annual learning stipend",
      "Employee stock options",
    ],
    hiringProcess: [
      { step: "Application review", detail: "Our team reviews your application within 5 working days." },
      { step: "Recruiter screen", detail: "A 30-minute call to talk through your background and the role." },
      { step: "Take-home + review", detail: "A short applied exercise, discussed together afterward." },
      { step: "Team interview", detail: "Meet the team you'd be working with directly." },
      { step: "Offer", detail: "We move fast — most candidates hear back within a week of final interviews." },
    ],
  },
  {
    slug: "product-designer-turbodesk",
    title: "Product Designer, TurboDesk",
    department: "Software & Product Engineering",
    location: "Remote (India)",
    type: "Full-time",
    mode: "Remote",
    postedOn: "2026-09-08",
    summary:
      "Shape the experience of TurboDesk, our service and operations platform used by teams to automate their workflow.",
    overview:
      "You'll lead design end-to-end on TurboDesk features — from early problem framing through shipped UI. You'll work directly with engineering and with the customers who use the product every day.",
    responsibilities: [
      "Lead design for new TurboDesk features, from discovery to launch",
      "Run lightweight research with customers to validate direction",
      "Maintain and evolve the TurboDesk design system",
      "Partner closely with engineering on implementation detail and polish",
    ],
    requirements: [
      "4+ years of product design experience on B2B software",
      "A portfolio that shows end-to-end ownership, not just visuals",
      "Comfortable presenting and defending design decisions to stakeholders",
    ],
    niceToHave: [
      "Experience designing for operations or service-desk tooling",
      "Front-end skills (React/Tailwind) to prototype in code",
    ],
    benefits: [
      "Fully remote, with quarterly team meetups",
      "Health coverage for you and your family",
      "Annual learning stipend",
      "Employee stock options",
    ],
    hiringProcess: [
      { step: "Application review", detail: "Our team reviews your application within 5 working days." },
      { step: "Recruiter screen", detail: "A 30-minute call to talk through your background and the role." },
      { step: "Portfolio review", detail: "A deep walkthrough of past work with the design team." },
      { step: "Design exercise", detail: "A collaborative working session on a real Starfii problem." },
      { step: "Offer", detail: "We move fast — most candidates hear back within a week of final interviews." },
    ],
  },
];

export function getJobBySlug(slug: string) {
  return jobs.find((j) => j.slug === slug);
}
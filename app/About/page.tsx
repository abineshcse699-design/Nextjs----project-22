import Link from "next/link";
import {
  ArrowUpRight,
  Target,
  Sparkles,
  ShieldCheck,
  Users,
  Globe2,
  Rocket,
} from "lucide-react";

/* Same token system as the navbar — kept identical on purpose so the
   page reads as one continuous brand, not a bolted-on subpage. */
const T = {
  ink: "text-[#14163B]",
  inkBg: "bg-[#0C0E2A]",
  primary: "text-[#3B2FE0]",
  primaryBg: "bg-[#3B2FE0]",
  primaryHoverBg: "hover:bg-[#2E24B8]",
  muted: "text-[#5B5D78]",
  border: "border-[#E4E4EF]",
  panelBg: "bg-[#FAFAFD]",
};

/* Same max-width + padding scale as the navbar's inner container, so
   every section on this page lines up edge-to-edge with the nav. */
const CONTAINER = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

export const metadata = {
  title: "About Starfii | AI-Driven Product Engineering",
  description:
    "Starfii is a product engineering company that builds scalable, AI-driven software for enterprise and SaaS teams. Learn our story, mission, and values.",
};

const stats = [
  { value: "9+", label: "Years building products" },
  { value: "120+", label: "Products shipped" },
  { value: "40+", label: "Enterprise & SaaS clients" },
  { value: "6", label: "Countries served" },
];

const values = [
  {
    icon: Target,
    title: "Outcomes over output",
    body:
      "We measure a sprint by the metric it moved, not the tickets it closed. Every engagement starts with the business result we're accountable for.",
  },
  {
    icon: Sparkles,
    title: "AI-native by default",
    body:
      "We don't bolt AI onto finished products — we design with it from the first architecture decision, so automation compounds instead of getting patched in later.",
  },
  {
    icon: ShieldCheck,
    title: "Own it like it's ours",
    body:
      "Your roadmap risk is our roadmap risk. We plan for production from day one: monitoring, security, and on-call, not just a demo that works once.",
  },
  {
    icon: Users,
    title: "Senior hands, not headcount",
    body:
      "Every pod is staffed with engineers who've shipped at scale before, so you get judgment on ambiguous problems, not just execution on a spec.",
  },
];

const timeline = [
  {
    year: "2016",
    title: "Founded as a product engineering studio",
    body: "Started with a single team building a SaaS analytics product end to end for an early fintech client.",
  },
  {
    year: "2019",
    title: "Expanded into data & cloud engineering",
    body: "Grew beyond product build to cover data platforms and cloud migrations as clients scaled past their first product.",
  },
  {
    year: "2022",
    title: "Launched our platform suite",
    body: "Codified repeat patterns from client work into RapidX, Tensai, Amaze, and Agentverse — reusable accelerators, not one-off builds.",
  },
  {
    year: "2025",
    title: "Went AI-native across every engagement",
    body: "Rebuilt our delivery model around generative AI and agentic workflows, from engineering to QA to support.",
  },
];

export default function AboutStarfiiPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="border-b border-[#E4E4EF] pt-40 pb-20 lg:pt-48 lg:pb-28">
        <div className={CONTAINER}>
          <p className={`text-[13px] font-semibold uppercase tracking-[0.14em] ${T.primary}`}>
            About Starfii
          </p>
          <h1 className={`mt-5 max-w-3xl text-[42px] font-bold leading-[1.1] ${T.ink} lg:text-[56px]`}>
            We build the products enterprises bet their next decade on.
          </h1>
          <p className={`mt-6 max-w-2xl text-[18px] leading-relaxed ${T.muted}`}>
            Starfii is a product engineering partner for teams who need to
            ship real software, not slideware. We pair senior engineers with
            an AI-native delivery model to take products from first sketch to
            production — and keep them running once they're live.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className={`inline-flex items-center gap-2 rounded-md ${T.primaryBg} ${T.primaryHoverBg} px-6 py-3 text-[15px] font-semibold text-white transition-colors`}
            >
              Talk to us
              <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/about/leadership"
              className={`inline-flex items-center gap-2 rounded-md border ${T.border} px-6 py-3 text-[15px] font-semibold ${T.ink} transition-colors hover:bg-[#F5F5F9]`}
            >
              Meet the leadership team
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-[#E4E4EF] py-16">
        <div className={`grid grid-cols-2 gap-8 lg:grid-cols-4 ${CONTAINER}`}>
          {stats.map((s) => (
            <div key={s.label}>
              <p className={`text-[38px] font-bold ${T.ink}`}>{s.value}</p>
              <p className={`mt-1.5 text-[14.5px] ${T.muted}`}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28">
        <div className={`grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] ${CONTAINER}`}>
          <div>
            <p className={`text-[13px] font-semibold uppercase tracking-[0.14em] ${T.primary}`}>
              Our mission
            </p>
            <h2 className={`mt-4 text-[30px] font-bold leading-tight ${T.ink} lg:text-[34px]`}>
              Make world-class product engineering accessible to teams who
              don't have the luxury of hiring 40 engineers.
            </h2>
          </div>
          <div className={`space-y-5 text-[16.5px] leading-relaxed ${T.muted}`}>
            <p>
              Most companies with a strong product idea don't fail on the
              idea — they stall on execution: the founding engineer leaves,
              the roadmap outgrows the team, or the MVP was never built to
              scale past the first hundred users.
            </p>
            <p>
              Starfii exists to close that gap. We embed senior product
              engineers, data scientists, and AI specialists directly into
              your team, working against your roadmap and your metrics, so
              the product ships like it was built in-house — just faster,
              and with a bench you don't have to carry on your own payroll.
            </p>
            <p>
              We've done this for fintech, healthcare, and e-commerce teams
              building for Fortune 500 customers, and for founders building
              their very first release. The scale changes; the standard of
              engineering doesn't.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`${T.panelBg} py-20 lg:py-28`}>
        <div className={CONTAINER}>
          <p className={`text-[13px] font-semibold uppercase tracking-[0.14em] ${T.primary}`}>
            How we work
          </p>
          <h2 className={`mt-4 max-w-xl text-[30px] font-bold leading-tight ${T.ink} lg:text-[34px]`}>
            Four principles every engagement is held to.
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className={`rounded-lg border ${T.border} bg-white p-7`}>
                <div className={`flex h-11 w-11 items-center justify-center rounded-md ${T.primaryBg}`}>
                  <v.icon size={20} className="text-white" strokeWidth={2.25} />
                </div>
                <h3 className={`mt-5 text-[18px] font-semibold ${T.ink}`}>{v.title}</h3>
                <p className={`mt-2.5 text-[14.5px] leading-relaxed ${T.muted}`}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28">
        <div className={CONTAINER}>
          <p className={`text-[13px] font-semibold uppercase tracking-[0.14em] ${T.primary}`}>
            Our story
          </p>
          <h2 className={`mt-4 max-w-xl text-[30px] font-bold leading-tight ${T.ink} lg:text-[34px]`}>
            From a two-person build to an AI-native engineering partner.
          </h2>

          <div className="mt-14 space-y-0">
            {timeline.map((t, idx) => (
              <div
                key={t.year}
                className={`grid grid-cols-[80px_1fr] gap-6 border-t ${T.border} py-8 lg:grid-cols-[140px_1fr] ${
                  idx === timeline.length - 1 ? "border-b" : ""
                }`}
              >
                <p className={`text-[17px] font-bold ${T.primary}`}>{t.year}</p>
                <div>
                  <h3 className={`text-[18px] font-semibold ${T.ink}`}>{t.title}</h3>
                  <p className={`mt-2 max-w-2xl text-[14.5px] leading-relaxed ${T.muted}`}>
                    {t.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${T.inkBg} py-20 lg:py-24`}>
        <div className={`flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center ${CONTAINER}`}>
          <div>
            <h2 className="text-[28px] font-bold text-white lg:text-[32px]">
              Have a product to build? Let's talk it through.
            </h2>
            <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-white/70">
              No pitch deck required — bring the problem, we'll bring the
              engineers.
            </p>
          </div>
          <Link
            href="/contact"
            className={`inline-flex shrink-0 items-center gap-2 rounded-md ${T.primaryBg} ${T.primaryHoverBg} px-7 py-3.5 text-[15px] font-semibold text-white transition-colors`}
          >
            Contact us
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
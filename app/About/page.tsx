import Link from "next/link";
import {
  ArrowUpRight,
  Target,
  Sparkles,
  ShieldCheck,
  Users,
  Globe2,
  Rocket,
  Eye,
  Compass,
  Cpu,
  Workflow,
  MapPin,
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
    "Starfii Technologies builds intelligent technology solutions that help businesses move from ideas to meaningful digital outcomes.",
};

const stats = [
  { value: "9+", label: "Years building products" },
  { value: "120+", label: "Products shipped" },
  { value: "40+", label: "Enterprise & SaaS clients" },
  { value: "6", label: "Countries served" },
];

/* 425 — Values */
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

/* 421 — Our Story */
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

/* 426 — Technology expertise */
const expertise = [
  {
    icon: Cpu,
    title: "AI & data engineering",
    body: "LLM-powered products, agentic workflows, data platforms, and MLOps built for production, not demos.",
  },
  {
    icon: Globe2,
    title: "Cloud & platform engineering",
    body: "AWS, GCP, and Azure architectures designed to scale from first launch to enterprise load.",
  },
  {
    icon: ShieldCheck,
    title: "Product & full-stack engineering",
    body: "Web, mobile, and backend systems built with the same rigor as an in-house senior team.",
  },
];

/* 427 — Delivery approach */
const delivery = [
  {
    icon: Workflow,
    title: "Embedded pods, not vendors",
    body: "We plug into your roadmap and rituals — standups, sprints, and metrics — as an extension of your team.",
  },
  {
    icon: Rocket,
    title: "Ship in weeks, not quarters",
    body: "AI-accelerated engineering and reusable platform pieces get a working product in front of users fast.",
  },
  {
    icon: ShieldCheck,
    title: "Built for what happens after launch",
    body: "Monitoring, security, and on-call are part of the plan from day one, not an afterthought post-handoff.",
  },
];

/* 428 — Global presence */
const presence = [
  { region: "India", detail: "Engineering hubs delivering core product and platform work." },
  { region: "North America", detail: "Client-facing teams for enterprise and SaaS partnerships." },
  { region: "Middle East", detail: "Delivery support for fintech and enterprise engagements." },
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
            Starfii Technologies builds intelligent technology solutions that
            help businesses move from ideas to meaningful digital outcomes —
            with senior engineers and an AI-native delivery model, from first
            sketch to production.
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

      {/* 420 — Who We Are */}
      <section className="py-20 lg:py-28">
        <div className={`grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] ${CONTAINER}`}>
          <div>
            <p className={`text-[13px] font-semibold uppercase tracking-[0.14em] ${T.primary}`}>
              Who We Are
            </p>
            <h2 className={`mt-4 text-[30px] font-bold leading-tight ${T.ink} lg:text-[34px]`}>
              A product engineering partner for teams who need to ship real
              software, not slideware.
            </h2>
          </div>
          <div className={`space-y-5 text-[16.5px] leading-relaxed ${T.muted}`}>
            <p>
              Starfii Technologies is a team of senior product engineers,
              data scientists, and AI specialists who embed directly into
              your roadmap. We've done this for fintech, healthcare, and
              e-commerce teams building for Fortune 500 customers, and for
              founders building their very first release.
            </p>
            <p>
              We don't hand off a spec and disappear — we work against your
              metrics, in your sprints, as if we were hired in-house. The
              scale of the engagement changes; the standard of engineering
              never does.
            </p>
          </div>
        </div>
      </section>

      {/* 421 — Our Story */}
      <section className={`${T.panelBg} py-20 lg:py-28`}>
        <div className={CONTAINER}>
          <p className={`text-[13px] font-semibold uppercase tracking-[0.14em] ${T.primary}`}>
            Our Story
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

      {/* 422 — What We Do */}
      <section className="py-20 lg:py-28">
        <div className={CONTAINER}>
          <p className={`text-[13px] font-semibold uppercase tracking-[0.14em] ${T.primary}`}>
            What We Do
          </p>
          <h2 className={`mt-4 max-w-xl text-[30px] font-bold leading-tight ${T.ink} lg:text-[34px]`}>
            We take products from first sketch to production — and keep
            them running once they're live.
          </h2>
          <p className={`mt-5 max-w-2xl text-[16.5px] leading-relaxed ${T.muted}`}>
            From product strategy and design through engineering, data, and
            AI, our pods cover the full lifecycle of a build so you're not
            stitching together five different vendors to ship one product.
          </p>
        </div>
      </section>

      {/* 423 / 424 — Mission & Vision */}
      <section className={`${T.panelBg} py-20 lg:py-28`}>
        <div className={`grid grid-cols-1 gap-10 lg:grid-cols-2 ${CONTAINER}`}>
          <div className={`rounded-lg border ${T.border} bg-white p-8`}>
            <div className={`flex h-11 w-11 items-center justify-center rounded-md ${T.primaryBg}`}>
              <Compass size={20} className="text-white" strokeWidth={2.25} />
            </div>
            <p className={`mt-5 text-[13px] font-semibold uppercase tracking-[0.14em] ${T.primary}`}>
              Mission
            </p>
            <h3 className={`mt-2 text-[22px] font-bold leading-snug ${T.ink}`}>
              Make world-class product engineering accessible to teams who
              don't have the luxury of hiring 40 engineers.
            </h3>
            <p className={`mt-3 text-[14.5px] leading-relaxed ${T.muted}`}>
              We embed senior engineers directly into your team so the
              product ships like it was built in-house — just faster, and
              with a bench you don't have to carry on your own payroll.
            </p>
          </div>

          <div className={`rounded-lg border ${T.border} bg-white p-8`}>
            <div className={`flex h-11 w-11 items-center justify-center rounded-md ${T.primaryBg}`}>
              <Eye size={20} className="text-white" strokeWidth={2.25} />
            </div>
            <p className={`mt-5 text-[13px] font-semibold uppercase tracking-[0.14em] ${T.primary}`}>
              Vision
            </p>
            <h3 className={`mt-2 text-[22px] font-bold leading-snug ${T.ink}`}>
              A future where great engineering isn't gated by headcount.
            </h3>
            <p className={`mt-3 text-[14.5px] leading-relaxed ${T.muted}`}>
              We're building toward a delivery model where AI-native teams
              give any founder or enterprise the engineering bench of a
              much larger company, on demand.
            </p>
          </div>
        </div>
      </section>

      {/* 425 — Values */}
      <section className="py-20 lg:py-28">
        <div className={CONTAINER}>
          <p className={`text-[13px] font-semibold uppercase tracking-[0.14em] ${T.primary}`}>
            Values
          </p>
          <h2 className={`mt-4 max-w-xl text-[30px] font-bold leading-tight ${T.ink} lg:text-[34px]`}>
            Four principles every engagement is held to.
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className={`rounded-lg border ${T.border} ${T.panelBg} p-7`}>
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

      {/* 426 — Technology expertise */}
      <section className={`${T.panelBg} py-20 lg:py-28`}>
        <div className={CONTAINER}>
          <p className={`text-[13px] font-semibold uppercase tracking-[0.14em] ${T.primary}`}>
            Technology Expertise
          </p>
          <h2 className={`mt-4 max-w-xl text-[30px] font-bold leading-tight ${T.ink} lg:text-[34px]`}>
            Deep enough in each stack to be trusted with the hard parts.
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {expertise.map((e) => (
              <div key={e.title} className={`rounded-lg border ${T.border} bg-white p-7`}>
                <div className={`flex h-11 w-11 items-center justify-center rounded-md ${T.primaryBg}`}>
                  <e.icon size={20} className="text-white" strokeWidth={2.25} />
                </div>
                <h3 className={`mt-5 text-[18px] font-semibold ${T.ink}`}>{e.title}</h3>
                <p className={`mt-2.5 text-[14.5px] leading-relaxed ${T.muted}`}>{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 427 — Delivery approach */}
      <section className="py-20 lg:py-28">
        <div className={CONTAINER}>
          <p className={`text-[13px] font-semibold uppercase tracking-[0.14em] ${T.primary}`}>
            Delivery Approach
          </p>
          <h2 className={`mt-4 max-w-xl text-[30px] font-bold leading-tight ${T.ink} lg:text-[34px]`}>
            How an engagement actually runs, week to week.
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {delivery.map((d) => (
              <div key={d.title} className={`rounded-lg border ${T.border} ${T.panelBg} p-7`}>
                <div className={`flex h-11 w-11 items-center justify-center rounded-md ${T.primaryBg}`}>
                  <d.icon size={20} className="text-white" strokeWidth={2.25} />
                </div>
                <h3 className={`mt-5 text-[18px] font-semibold ${T.ink}`}>{d.title}</h3>
                <p className={`mt-2.5 text-[14.5px] leading-relaxed ${T.muted}`}>{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 428 — Global presence */}
      <section className={`${T.panelBg} py-20 lg:py-28`}>
        <div className={CONTAINER}>
          <p className={`text-[13px] font-semibold uppercase tracking-[0.14em] ${T.primary}`}>
            Global Presence
          </p>
          <h2 className={`mt-4 max-w-xl text-[30px] font-bold leading-tight ${T.ink} lg:text-[34px]`}>
            Serving clients across 6 countries and counting.
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {presence.map((p) => (
              <div key={p.region} className={`rounded-lg border ${T.border} bg-white p-7`}>
                <div className={`flex h-11 w-11 items-center justify-center rounded-md ${T.primaryBg}`}>
                  <MapPin size={20} className="text-white" strokeWidth={2.25} />
                </div>
                <h3 className={`mt-5 text-[18px] font-semibold ${T.ink}`}>{p.region}</h3>
                <p className={`mt-2.5 text-[14.5px] leading-relaxed ${T.muted}`}>{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 429 — Leadership */}
      <section className="py-20 lg:py-28">
        <div className={`flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center ${CONTAINER}`}>
          <div>
            <p className={`text-[13px] font-semibold uppercase tracking-[0.14em] ${T.primary}`}>
              Leadership
            </p>
            <h2 className={`mt-4 max-w-xl text-[30px] font-bold leading-tight ${T.ink} lg:text-[34px]`}>
              Led by engineers who've shipped at scale, not just managed it.
            </h2>
            <p className={`mt-4 max-w-xl text-[15px] leading-relaxed ${T.muted}`}>
              Meet the people setting the technical and delivery standard
              behind every Starfii engagement.
            </p>
          </div>
          <Link
            href="/about/leadership"
            className={`inline-flex shrink-0 items-center gap-2 rounded-md border ${T.border} px-6 py-3 text-[15px] font-semibold ${T.ink} transition-colors hover:bg-[#F5F5F9]`}
          >
            Meet the leadership team
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {/* 430 — Why Starfii */}
      <section className={`${T.panelBg} py-20 lg:py-28`}>
        <div className={CONTAINER}>
          <p className={`text-[13px] font-semibold uppercase tracking-[0.14em] ${T.primary}`}>
            Why Starfii
          </p>
          <h2 className={`mt-4 max-w-2xl text-[30px] font-bold leading-tight ${T.ink} lg:text-[34px]`}>
            Senior engineering, AI-native delivery, and a team that's
            accountable for outcomes — not just tickets.
          </h2>
          <p className={`mt-5 max-w-2xl text-[16.5px] leading-relaxed ${T.muted}`}>
            120+ products shipped for 40+ enterprise and SaaS clients across
            6 countries. Whether you're a founder shipping your first
            release or an enterprise team scaling past your MVP, Starfii
            brings the same standard of engineering to the table.
          </p>
        </div>
      </section>

      {/* 431 — CTA */}
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
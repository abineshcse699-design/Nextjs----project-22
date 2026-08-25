"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  ChevronRight,
  Rocket,
  Heart,
  Globe2,
  Sparkles,
  ShieldCheck,
  Users,
  CheckCircle2,
} from "lucide-react";

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

const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

const reasons = [
  {
    icon: Rocket,
    title: "Work on Problems That Matter",
    desc: "You'll build AI-led products and platforms used by Fortune 500 clients across banking, healthcare, and manufacturing — not internal tooling nobody sees.",
  },
  {
    icon: Sparkles,
    title: "AI-First, By Default",
    desc: "Every team — engineering, delivery, operations — works with AI embedded into daily workflows, so you're building with the tools shaping the industry's next decade.",
  },
  {
    icon: Globe2,
    title: "A Genuinely Global Team",
    desc: "Starfii operates across delivery centers worldwide, giving you the chance to work with cross-border teams and clients from day one.",
  },
  {
    icon: Heart,
    title: "Growth Without Guesswork",
    desc: "Clear career tracks, regular skill assessments, and a named manager accountable for your development — not a once-a-year review that goes nowhere.",
  },
  {
    icon: ShieldCheck,
    title: "Stability You Can Plan Around",
    desc: "A company built on long-term enterprise partnerships, not project-to-project churn, so your role isn't tied to the next quarter's pipeline.",
  },
  {
    icon: Users,
    title: "A Culture That Says What It Means",
    desc: "Direct feedback, flat escalation paths, and leadership that's reachable — not layers of process between you and a decision.",
  },
];

const benefits = [
  "Comprehensive health & wellness coverage for you and your family",
  "Flexible and hybrid work arrangements across most roles",
  "Learning stipend for certifications, courses, and conferences",
  "Structured mentorship from senior engineers and delivery leads",
  "Clear promotion cycles with transparent evaluation criteria",
  "Parental leave and family-care support",
];

export default function WhyJoinStarfiiPage() {
  return (
    <main className={`${T.ink} bg-white`}>
      {/* HERO */}
      <section className={`${T.inkBg} relative overflow-hidden pt-[104px] pb-20 sm:pt-[118px]`}>
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-[45%]"
          style={{
            background:
              "radial-gradient(60% 80% at 100% 40%, rgba(59,47,224,0.35) 0%, rgba(143,168,255,0.18) 40%, rgba(12,14,42,0) 72%)",
          }}
        />
        <div className={`relative ${ALIGN}`}>
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] font-medium text-white/50">
            <Link href="/" className="transition-colors hover:text-white/80">Home</Link>
            <ChevronRight size={13} />
            <Link href="/careers" className="transition-colors hover:text-white/80">Careers</Link>
            <ChevronRight size={13} />
            <span className="text-white/75">Why Join Starfii?</span>
          </nav>
          <h1 className="mt-6 max-w-2xl text-[40px] font-bold leading-[1.1] text-white sm:text-[52px]">
            Build Your Career at the{" "}
            <span className="text-[#8FA8FF]">Intersection of AI and Enterprise Impact</span>
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/70">
            Starfii is where AI-led engineering meets real enterprise problems.
            Join a team that builds products Fortune 500 companies actually run on
            — and grows careers just as deliberately as it builds software.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="/careers/jobs" className={`inline-flex h-12 items-center gap-2 rounded-md px-6 text-[15px] font-semibold text-white transition-colors duration-150 ${T.primaryBg} ${T.primaryHoverBg}`}>
              View Open Positions
              <ArrowUpRight size={16} />
            </Link>
            <Link href="/careers/programs-learning" className="inline-flex h-12 items-center gap-2 rounded-md border border-white/20 px-6 text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-white/10">
              Explore Learning Programs
            </Link>
          </div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className={`${ALIGN} py-20`}>
        <h2 className={`text-[28px] font-bold ${T.ink}`}>Why people choose Starfii</h2>
        <p className={`mt-3 max-w-2xl text-[15px] leading-relaxed ${T.muted}`}>
          Six reasons our teams tell us they stay — straight from internal engagement surveys.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div key={title} className={`rounded-xl border ${T.border} bg-white p-6`}>
              <div className={`flex h-10 w-10 items-center justify-center rounded-md ${T.primaryBg}`}>
                <Icon size={18} className="text-white" />
              </div>
              <h3 className={`mt-4 text-[16.5px] font-semibold ${T.ink}`}>{title}</h3>
              <p className={`mt-2.5 text-[14px] leading-relaxed ${T.muted}`}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className={`${T.panelBg} border-y ${T.border}`}>
        <div className={`${ALIGN} py-20`}>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className={`text-[28px] font-bold ${T.ink}`}>What you get, beyond the offer letter</h2>
              <p className={`mt-5 text-[15.5px] leading-relaxed ${T.muted}`}>
                We built our benefits around the things that actually affect how
                you work and live — coverage, flexibility, and a real path to
                grow your skills, not just your title.
              </p>
            </div>
            <ul className="space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className={`mt-0.5 shrink-0 ${T.primary}`} />
                  <span className={`text-[14.5px] leading-relaxed ${T.ink}`}>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${ALIGN} py-20`}>
        <div className={`flex flex-col items-start justify-between gap-6 rounded-2xl border ${T.border} ${T.panelBg} p-10 sm:flex-row sm:items-center`}>
          <div>
            <h3 className={`text-[24px] font-bold ${T.ink}`}>Ready to see where you'd fit?</h3>
            <p className={`mt-2 text-[14.5px] ${T.muted}`}>
              Browse current openings across engineering, delivery, and operations.
            </p>
          </div>
          <Link href="/careers/jobs" className={`inline-flex h-12 shrink-0 items-center gap-2 rounded-md px-6 text-[15px] font-semibold text-white transition-colors duration-150 ${T.primaryBg} ${T.primaryHoverBg}`}>
            View Open Positions
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
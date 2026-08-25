"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  ChevronRight,
  GraduationCap,
  Award,
  Users2,
  BookOpen,
  Layers,
  Target,
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

const programs = [
  {
    icon: GraduationCap,
    title: "Starfii Academy",
    desc: "Structured onboarding tracks for engineering, data, and delivery roles — built to get new hires productive on real client work within weeks, not months.",
  },
  {
    icon: Award,
    title: "Certification Sponsorship",
    desc: "Full or partial sponsorship for cloud (AWS, Azure, GCP), ServiceNow, and AI/ML certifications, tied directly to your role's growth path.",
  },
  {
    icon: Users2,
    title: "Mentorship Program",
    desc: "Every employee is paired with a senior mentor outside their immediate reporting line, for unfiltered career guidance and technical coaching.",
  },
  {
    icon: BookOpen,
    title: "Internal Tech Talks",
    desc: "Monthly sessions where engineers and architects share what they've shipped — real case studies, not vendor slide decks.",
  },
  {
    icon: Layers,
    title: "Cross-Practice Rotations",
    desc: "Structured opportunities to rotate across AI, cloud, and digital engineering practices, so your career isn't boxed into one technology stack.",
  },
  {
    icon: Target,
    title: "Leadership Development Track",
    desc: "A dedicated track for engineers and consultants moving into people or delivery leadership, with coaching built around real accountability, not theory.",
  },
];

const outcomes = [
  { stat: "85%", label: "Of managers promoted internally through our leadership track" },
  { stat: "1,200+", label: "Certifications sponsored across cloud, AI, and platform practices" },
  { stat: "40hrs", label: "Average learning hours per employee, per year" },
];

export default function ProgramsLearningPage() {
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
            <span className="text-white/75">Programs & Learning</span>
          </nav>
          <h1 className="mt-6 max-w-2xl text-[40px] font-bold leading-[1.1] text-white sm:text-[52px]">
            Learning That's Built Into{" "}
            <span className="text-[#8FA8FF]">How We Work</span>, Not Bolted On
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/70">
            From day-one onboarding to leadership tracks, Starfii invests in
            structured programs that turn technical skill into career
            progression — backed by mentorship, certification support, and
            real project exposure.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="/careers/jobs" className={`inline-flex h-12 items-center gap-2 rounded-md px-6 text-[15px] font-semibold text-white transition-colors duration-150 ${T.primaryBg} ${T.primaryHoverBg}`}>
              View Open Positions
              <ArrowUpRight size={16} />
            </Link>
            <Link href="/careers/why-join-starfii" className="inline-flex h-12 items-center gap-2 rounded-md border border-white/20 px-6 text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-white/10">
              Why Join Starfii
            </Link>
          </div>
        </div>
      </section>

      {/* OUTCOMES STRIP */}
      <section className={`border-b ${T.border}`}>
        <div className={`${ALIGN} grid grid-cols-1 gap-8 py-12 sm:grid-cols-3`}>
          {outcomes.map((o) => (
            <div key={o.label}>
              <p className={`text-[30px] font-bold ${T.primary}`}>{o.stat}</p>
              <p className={`mt-1.5 text-[13.5px] leading-relaxed ${T.muted}`}>{o.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAMS */}
      <section className={`${ALIGN} py-20`}>
        <h2 className={`text-[28px] font-bold ${T.ink}`}>Programs we run</h2>
        <p className={`mt-3 max-w-2xl text-[15px] leading-relaxed ${T.muted}`}>
          Every program below is available across practices — engineering, delivery, data, and operations.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map(({ icon: Icon, title, desc }) => (
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

      {/* HOW IT WORKS */}
      <section className={`${T.panelBg} border-y ${T.border}`}>
        <div className={`${ALIGN} py-20`}>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className={`text-[28px] font-bold ${T.ink}`}>
                Growth plans, not generic training calendars
              </h2>
              <p className={`mt-5 text-[15.5px] leading-relaxed ${T.muted}`}>
                Every employee gets a learning plan tied to their actual role
                and the skills their next promotion requires — not a shared
                catalog of optional courses nobody tracks.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Individual development plans reviewed every quarter with your manager",
                  "Certification costs covered upfront, not reimbursed after the fact",
                  "Mentors matched by skill area, not just seniority",
                  "Internal mobility prioritized before external hiring for open roles",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className={`mt-0.5 shrink-0 ${T.primary}`} />
                    <span className={`text-[14.5px] leading-relaxed ${T.ink}`}>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`overflow-hidden rounded-2xl ${T.inkBg} p-8 text-white`}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60">
                A typical first year
              </p>
              <div className="mt-6 space-y-6">
                {[
                  { phase: "Weeks 1–4", desc: "Starfii Academy onboarding and role-specific technical ramp-up" },
                  { phase: "Months 2–6", desc: "Mentor assigned, first certification path agreed with your manager" },
                  { phase: "Months 6–12", desc: "Client project exposure with structured check-ins on skill growth" },
                ].map((s) => (
                  <div key={s.phase} className="border-t border-white/10 pt-5 first:border-t-0 first:pt-0">
                    <p className="text-[15px] font-semibold text-[#8FA8FF]">{s.phase}</p>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-white/70">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${ALIGN} py-20`}>
        <div className={`flex flex-col items-start justify-between gap-6 rounded-2xl border ${T.border} ${T.panelBg} p-10 sm:flex-row sm:items-center`}>
          <div>
            <h3 className={`text-[24px] font-bold ${T.ink}`}>Want to grow inside a team that invests in you?</h3>
            <p className={`mt-2 text-[14.5px] ${T.muted}`}>
              See open roles and where your learning path could start.
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
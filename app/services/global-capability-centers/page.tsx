// app/services/global-capability-centers/page.tsx
"use client";

import {
  ArrowUpRight,
  ChevronRight,
  Building2,
  Users,
  Scale,
  Rocket,
  ShieldCheck,
  Network,
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

// ✅ Matches navbar's outer wrapper exactly: max-w-[1830px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12
const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

const setupPhases = [
  { name: "Entity & Legal Setup", detail: "Company incorporation, statutory registrations, and compliance framework." },
  { name: "Talent Acquisition", detail: "Role definition, sourcing, and hiring for engineering, ops, and support functions." },
  { name: "Facilities & Infrastructure", detail: "Office selection, IT infrastructure, and secure network setup." },
  { name: "Operating Model", detail: "Governance structure, reporting lines, and alignment with HQ processes." },
  { name: "Payroll & HR Operations", detail: "Local payroll, benefits administration, and HR policy localization." },
  { name: "Knowledge Transfer", detail: "Structured onboarding of the GCC team into existing product and process context." },
];

const capabilities = [
  { icon: Building2, title: "Center Setup", desc: "Legal entity formation, facility selection, and infrastructure build-out, sequenced so the center is operational in months, not years." },
  { icon: Users, title: "Talent Strategy", desc: "Role architecture and hiring plans matched to the skill mix your GCC actually needs — engineering, analytics, support, or finance." },
  { icon: Scale, title: "Governance Design", desc: "Clear reporting structures and decision rights between HQ and the GCC, avoiding the ambiguity that stalls delivery early on." },
  { icon: Rocket, title: "Scale-Up Support", desc: "Phased headcount and capability ramp-up plans, moving the center from cost-arbitrage to strategic delivery over time." },
  { icon: ShieldCheck, title: "Compliance & Risk", desc: "Labor law, data residency, and information security compliance built into the center's operating model from setup." },
  { icon: Network, title: "Managed Transition", desc: "For enterprises transferring existing work into the GCC, a structured knowledge-transfer plan with defined exit criteria." },
];

const outcomes = [
  { stat: "4–6 mo", label: "Typical timeline from entity setup to first hires onboarded" },
  { stat: "30–45%", label: "Average operating cost reduction versus onshore delivery" },
  { stat: "100%", label: "Compliance coverage across local labor and data regulations" },
];

const engagementSteps = [
  { title: "Feasibility", desc: "Location analysis, cost modeling, and talent-availability assessment before any commitment." },
  { title: "Setup", desc: "Legal entity, facility, and infrastructure stood up in parallel with the hiring plan." },
  { title: "Ramp-Up", desc: "Phased hiring and onboarding aligned to a defined capability roadmap, not an open-ended headcount target." },
  { title: "Steady-State", desc: "The GCC operates against agreed KPIs, with a governance cadence back to HQ." },
];

export default function GlobalCapabilityCentersPage() {
  return (
    <main className="bg-white">
      {/* ===================== HERO ===================== */}
      <section className={`${T.inkBg} relative overflow-hidden pt-[104px] pb-20 sm:pt-[118px]`}>
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-[45%]"
          style={{
            background:
              "radial-gradient(60% 80% at 100% 40%, rgba(59,47,224,0.35) 0%, rgba(143,168,255,0.18) 40%, rgba(12,14,42,0) 72%)",
          }}
        />
        <div className={`relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] ${ALIGN}`}>
          <div>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] font-medium text-white/50">
              <a href="/" className="transition-colors hover:text-white/80">Home</a>
              <ChevronRight size={13} />
              <a href="/services" className="transition-colors hover:text-white/80">Services</a>
              <ChevronRight size={13} />
              <span className="text-white/75">Global Capability Centers</span>
            </nav>
            <h1 className="mt-6 max-w-xl text-[40px] font-bold leading-[1.1] text-white sm:text-[52px]">
              Stand Up a{" "}
              <span className="text-[#8FA8FF]">Global Capability Center</span>{" "}
              Without the First-Year Guesswork
            </h1>
            <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-white/70">
              From legal entity setup to your first hundred hires, we build
              and stand up global capability centers — the entity, the team,
              the governance, and the infrastructure — as one connected plan.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#talk-to-us" className={`inline-flex h-12 items-center gap-2 rounded-md px-6 text-[15px] font-semibold text-white transition-colors duration-150 ${T.primaryBg} ${T.primaryHoverBg}`}>
                Talk to us
                <ArrowUpRight size={16} />
              </a>
              <a href="#phases" className="inline-flex h-12 items-center gap-2 rounded-md border border-white/20 px-6 text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-white/10">
                See setup phases
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">
                Setup covers
              </p>
              <div className="mt-5 space-y-3">
                {[
                  "Entity & Legal Setup",
                  "Talent Acquisition",
                  "Facilities & Infrastructure",
                  "Governance Design",
                ].map((name) => (
                  <div key={name} className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-[14px] font-medium text-white/85">
                    {name}
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="text-[28px] font-bold text-white">4–6 mo</p>
                <p className="mt-1 text-[13px] leading-relaxed text-white/55">
                  Typical timeline from entity setup to first hires onboarded
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== OUTCOMES STRIP ===================== */}
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

      {/* ===================== OVERVIEW ===================== */}
      <section className={`${ALIGN} py-20`}>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className={`text-[28px] font-bold ${T.ink}`}>
              One plan, not three vendors handing off badly
            </h2>
            <p className={`mt-5 text-[15.5px] leading-relaxed ${T.muted}`}>
              GCC setups usually stall at the seams — the legal partner, the
              staffing firm, and the IT vendor each own a slice, and nobody
              owns the outcome. We run entity setup, hiring, infrastructure,
              and governance design as one accountable engagement.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "A single delivery lead accountable from incorporation through first hires",
                "Hiring plans built around the roles the center actually needs, not generic headcount",
                "Governance model defined before day one — decision rights, reporting, escalation",
                "Data residency and labor-law compliance built into the setup, not audited after",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className={`mt-0.5 shrink-0 ${T.primary}`} />
                  <span className={`text-[14.5px] leading-relaxed ${T.ink}`}>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`overflow-hidden rounded-2xl border ${T.border} ${T.inkBg} p-8 text-white`}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60">
              Who this is for
            </p>
            <h4 className="mt-3 text-[19px] font-semibold leading-snug">
              Enterprises scaling delivery, not just cutting cost
            </h4>
            <p className="mt-3 text-[14px] leading-relaxed text-white/70">
              Best suited to organizations moving engineering, analytics, or
              operations capacity closer to a growing talent market — not a
              short-term staffing fix.
            </p>
            <a href="#steps" className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-white">
              See how it runs
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* ===================== CAPABILITIES ===================== */}
      <section className={`${T.panelBg} border-y ${T.border}`}>
        <div className={`${ALIGN} py-20`}>
          <h2 className={`text-[28px] font-bold ${T.ink}`}>What we deliver</h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ icon: Icon, title, desc }) => (
              <div key={title} className={`rounded-xl border ${T.border} bg-white p-6`}>
                <div className={`flex h-10 w-10 items-center justify-center rounded-md ${T.primaryBg}`}>
                  <Icon size={18} className="text-white" />
                </div>
                <h3 className={`mt-4 text-[16.5px] font-semibold ${T.ink}`}>{title}</h3>
                <p className={`mt-2.5 text-[14px] leading-relaxed ${T.muted}`}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SETUP PHASES ===================== */}
      <section id="phases" className={`${ALIGN} py-20`}>
        <h2 className={`text-[28px] font-bold ${T.ink}`}>What setup covers</h2>
        <p className={`mt-3 max-w-2xl text-[15px] leading-relaxed ${T.muted}`}>
          Every workstream needed to take a GCC from decision to steady-state.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {setupPhases.map((p) => (
            <div key={p.name} className={`border-l-2 ${T.border} pl-5`}>
              <h4 className={`text-[16px] font-semibold ${T.ink}`}>{p.name}</h4>
              <p className={`mt-1.5 text-[13.5px] leading-relaxed ${T.muted}`}>{p.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== ENGAGEMENT MODEL ===================== */}
      <section id="steps" className={T.inkBg}>
        <div className={`${ALIGN} py-20`}>
          <h2 className="text-[28px] font-bold text-white">How an engagement runs</h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {engagementSteps.map((step, i) => (
              <div key={step.title} className="border-t border-white/15 pt-5">
                <p className="text-[13px] font-semibold text-white/50">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h4 className="mt-2 text-[17px] font-semibold text-white">{step.title}</h4>
                <p className="mt-2 text-[13.5px] leading-relaxed text-white/65">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section id="talk-to-us" className={`${ALIGN} py-20`}>
        <div className={`flex flex-col items-start justify-between gap-6 rounded-2xl border ${T.border} ${T.panelBg} p-10 sm:flex-row sm:items-center`}>
          <div>
            <h3 className={`text-[24px] font-bold ${T.ink}`}>
              Evaluating a GCC location right now?
            </h3>
            <p className={`mt-2 text-[14.5px] ${T.muted}`}>
              We'll walk you through the feasibility numbers before you commit to a market.
            </p>
          </div>
          <a href="/contact" className={`inline-flex h-12 shrink-0 items-center gap-2 rounded-md px-6 text-[15px] font-semibold text-white transition-colors duration-150 ${T.primaryBg} ${T.primaryHoverBg}`}>
            Talk to us
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </main>
  );
}
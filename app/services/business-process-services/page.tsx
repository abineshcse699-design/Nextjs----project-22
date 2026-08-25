// app/services/business-process-services/page.tsx
"use client";

import {
  ArrowUpRight,
  ChevronRight,
  ClipboardList,
  Bot,
  Headset,
  FileSpreadsheet,
  ShieldCheck,
  TrendingDown,
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

const processDomains = [
  { name: "Finance & Accounting", detail: "AP/AR, reconciliations, month-end close, and reporting operations." },
  { name: "Order-to-Cash", detail: "Order management, invoicing, collections, and dispute resolution." },
  { name: "Procure-to-Pay", detail: "Purchase requisitions, vendor onboarding, and invoice processing." },
  { name: "Customer Operations", detail: "Contact center, ticket triage, and back-office case handling." },
  { name: "HR Operations", detail: "Onboarding, payroll support, benefits administration, and HR helpdesk." },
  { name: "Revenue Cycle (Healthcare)", detail: "Claims processing, eligibility checks, and HIPAA-compliant RCM." },
];

const capabilities = [
  { icon: ClipboardList, title: "Process Re-engineering", desc: "We map the process as it's actually run today, then redesign it around fewer hand-offs, clear ownership, and measurable SLAs." },
  { icon: Bot, title: "Intelligent Automation", desc: "RPA, workflow rules, and document AI take over the repetitive steps — data entry, matching, routing — inside the existing process." },
  { icon: Headset, title: "Managed Operations", desc: "Dedicated teams run day-to-day operations under agreed SLAs, with a transition plan that keeps continuity during handover." },
  { icon: FileSpreadsheet, title: "Reporting & Controls", desc: "Standardized dashboards and audit trails give operations leaders visibility into throughput, exceptions, and turnaround time." },
  { icon: ShieldCheck, title: "Compliance-First Delivery", desc: "Processes are built to the regulatory bar for the industry involved — HIPAA, SOX, PCI-DSS — not retrofitted after the fact." },
  { icon: TrendingDown, title: "Cost-to-Serve Reduction", desc: "A phased approach — stabilize, standardize, automate — that lowers cost per transaction without a disruptive big-bang switch." },
];

const outcomes = [
  { stat: "35–50%", label: "Typical reduction in manual processing time after automation" },
  { stat: "99.5%", label: "Target SLA accuracy across managed finance & operations processes" },
  { stat: "24/7", label: "Follow-the-sun coverage available across delivery locations" },
];

const engagementSteps = [
  { title: "Diagnose", desc: "Time-and-motion study of the current process to find where effort and errors concentrate." },
  { title: "Redesign", desc: "A target-state process with clear RACI, SLAs, and automation candidates identified." },
  { title: "Transition", desc: "Parallel-run handover with knowledge transfer, so nothing breaks on cutover day." },
  { title: "Operate & Improve", desc: "Steady-state delivery against SLAs, with a continuous improvement backlog." },
];

export default function BusinessProcessServicesPage() {
  return (
    <main className="bg-white">
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
              <span className="text-white/75">Business Process Services</span>
            </nav>
            <h1 className="mt-6 max-w-xl text-[40px] font-bold leading-[1.1] text-white sm:text-[52px]">
              Back-Office Operations,{" "}
              <span className="text-[#8FA8FF]">Run to an SLA</span>, Not Left to Chance
            </h1>
            <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-white/70">
              We redesign, automate, and run the finance, order, procurement,
              and customer operations processes sitting behind your front-end
              business — so throughput goes up and cost per transaction comes down.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#talk-to-us" className={`inline-flex h-12 items-center gap-2 rounded-md px-6 text-[15px] font-semibold text-white transition-colors duration-150 ${T.primaryBg} ${T.primaryHoverBg}`}>
                Talk to us
                <ArrowUpRight size={16} />
              </a>
              <a href="#domains" className="inline-flex h-12 items-center gap-2 rounded-md border border-white/20 px-6 text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-white/10">
                See process domains
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">
                Processes we run
              </p>
              <div className="mt-5 space-y-3">
                {["Finance & Accounting", "Order-to-Cash", "Procure-to-Pay", "Customer Operations"].map((name) => (
                  <div key={name} className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-[14px] font-medium text-white/85">
                    {name}
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="text-[28px] font-bold text-white">35–50%</p>
                <p className="mt-1 text-[13px] leading-relaxed text-white/55">
                  Typical reduction in manual processing time after automation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section className={`${ALIGN} py-20`}>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className={`text-[28px] font-bold ${T.ink}`}>
              Operations delivery, not a headcount swap
            </h2>
            <p className={`mt-5 text-[15.5px] leading-relaxed ${T.muted}`}>
              Outsourcing a broken process just moves the breakage somewhere
              else. We start by fixing the process itself — removing
              duplicate approvals, standardizing exceptions — before deciding
              what should be automated and what should be run by a managed team.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Process maps built from actual transaction data, not interviews alone",
                "Automation scoped only where volume and rules justify it",
                "SLAs tied to business outcomes — cycle time, accuracy, cost per unit",
                "Transition plans that run parallel until performance is proven",
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
              Delivery model
            </p>
            <h4 className="mt-3 text-[19px] font-semibold leading-snug">
              Stabilize, standardize, automate
            </h4>
            <p className="mt-3 text-[14px] leading-relaxed text-white/70">
              We never automate a process that hasn't been stabilized first —
              it just locks in the current inefficiency at machine speed.
              Every engagement moves through the same three gates before
              automation is scoped.
            </p>
            <a href="#steps" className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-white">
              See how it runs
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

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

      <section id="domains" className={`${ALIGN} py-20`}>
        <h2 className={`text-[28px] font-bold ${T.ink}`}>Process domains we run</h2>
        <p className={`mt-3 max-w-2xl text-[15px] leading-relaxed ${T.muted}`}>
          Cross-industry operations coverage, from finance to customer-facing case work.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processDomains.map((p) => (
            <div key={p.name} className={`border-l-2 ${T.border} pl-5`}>
              <h4 className={`text-[16px] font-semibold ${T.ink}`}>{p.name}</h4>
              <p className={`mt-1.5 text-[13.5px] leading-relaxed ${T.muted}`}>{p.detail}</p>
            </div>
          ))}
        </div>
      </section>

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

      <section id="talk-to-us" className={`${ALIGN} py-20`}>
        <div className={`flex flex-col items-start justify-between gap-6 rounded-2xl border ${T.border} ${T.panelBg} p-10 sm:flex-row sm:items-center`}>
          <div>
            <h3 className={`text-[24px] font-bold ${T.ink}`}>
              Know which process is costing you the most?
            </h3>
            <p className={`mt-2 text-[14.5px] ${T.muted}`}>
              Bring us the process — we'll show you where automation actually pays back.
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
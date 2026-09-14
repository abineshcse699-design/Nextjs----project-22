"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  Workflow,
  ShieldCheck,
  Plug,
  Gauge,
  Sparkles,
  Headset,
  ClipboardList,
  BarChart3,
  Layers,
  Zap,
  CheckCircle2,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Theme tokens — matches the T.* tokens used across the platform pages
// (ink / muted / border / primary / inkBg). Adjust to your global theme file
// if you centralize these (e.g. import { T } from "@/lib/theme").
// ---------------------------------------------------------------------------
const T = {
  ink: "text-slate-900",
  muted: "text-slate-600",
  border: "border-slate-200",
  primary: "text-blue-600 hover:text-blue-700",
  inkBg: "bg-slate-900",
  soft: "bg-slate-50",
};

// ---------------------------------------------------------------------------
// Shared bits
// ---------------------------------------------------------------------------
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-[12.5px] font-semibold uppercase tracking-wide text-blue-600">
      {children}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`mx-auto max-w-3xl ${center ? "text-center" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className={`mt-4 text-[32px] font-bold leading-tight sm:text-[38px] ${T.ink}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-[16px] leading-relaxed ${T.muted}`}>{subtitle}</p>
      )}
    </div>
  );
}

function CTAButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex items-center gap-1.5 rounded-md px-5 py-3 text-[14.5px] font-semibold transition-colors";
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "border border-slate-300 text-slate-900 hover:bg-slate-50";
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
      <ArrowUpRight size={16} />
    </Link>
  );
}

// ---------------------------------------------------------------------------
// 194. Hero
// ---------------------------------------------------------------------------
function Hero() {
  return (
    <section className="border-b border-slate-100 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Eyebrow>Platform</Eyebrow>
        <h1 className={`mt-5 text-[40px] font-bold leading-tight sm:text-[52px] ${T.ink}`}>
          TurboDesk
        </h1>
        <p className={`mx-auto mt-5 max-w-2xl text-[18px] leading-relaxed ${T.muted}`}>
          Intelligent service and operations platform built by Starfii — unify
          requests, automate resolution, and give every team a faster path
          from issue to outcome.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <CTAButton href="/contact">Talk to us</CTAButton>
          <CTAButton href="/platform/turbodesk#product-experience" variant="ghost">
            See it in action
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 195. What is TurboDesk?
// ---------------------------------------------------------------------------
function WhatIsTurboDesk() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>What is TurboDesk?</Eyebrow>
            <h2 className={`mt-4 text-[32px] font-bold leading-tight sm:text-[38px] ${T.ink}`}>
              One intelligent desk for every service request
            </h2>
            <p className={`mt-5 text-[16px] leading-relaxed ${T.muted}`}>
              TurboDesk brings ticketing, automation, and AI-assisted
              resolution into a single operations layer. It routes work to
              the right owner, resolves the repetitive cases automatically,
              and gives leaders real-time visibility into how service is
              actually performing — so teams spend less time triaging and
              more time solving.
            </p>
          </div>
          <div className={`rounded-xl border ${T.border} ${T.soft} p-8`}>
            <ul className="space-y-4">
              {[
                "Unified queue across channels and teams",
                "AI-assisted triage, routing, and resolution",
                "Built-in workflows for common request types",
                "Live dashboards for SLAs and throughput",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-blue-600" />
                  <span className={`text-[14.5px] ${T.ink}`}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 196. Core capabilities
// ---------------------------------------------------------------------------
function CoreCapabilities() {
  const capabilities = [
    {
      icon: Workflow,
      title: "Unified request management",
      desc: "Every ticket, task, and request lands in one queue — regardless of source channel.",
    },
    {
      icon: Bot,
      title: "AI-assisted resolution",
      desc: "Common issues get triaged, categorized, and resolved without manual handling.",
    },
    {
      icon: Gauge,
      title: "Operational visibility",
      desc: "Live dashboards surface SLA risk, backlog, and team performance as it happens.",
    },
    {
      icon: Plug,
      title: "Extensible integrations",
      desc: "Connect existing tools so TurboDesk fits into your stack, not around it.",
    },
  ];
  return (
    <section className={`${T.soft} py-20`}>
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Core capabilities"
          title="Everything a modern service desk needs"
          center
        />
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c) => (
            <div key={c.title} className={`rounded-xl border ${T.border} bg-white p-6`}>
              <c.icon size={22} className="text-blue-600" />
              <h3 className={`mt-4 text-[16px] font-semibold ${T.ink}`}>{c.title}</h3>
              <p className={`mt-2 text-[13.5px] leading-relaxed ${T.muted}`}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 197. Key features
// ---------------------------------------------------------------------------
function KeyFeatures() {
  const features = [
    { title: "Smart ticket routing", desc: "Requests are automatically assigned based on skill, load, and priority." },
    { title: "Self-service portal", desc: "Deflect routine requests with a guided, branded self-service experience." },
    { title: "SLA management", desc: "Track and enforce SLAs automatically, with escalation built in." },
    { title: "Knowledge base sync", desc: "Resolutions feed back into a living knowledge base for faster future fixes." },
    { title: "Omnichannel intake", desc: "Email, chat, portal, and API requests all flow into the same queue." },
    { title: "Custom workflows", desc: "Model your own approval chains and resolution paths without code." },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Key features" title="Built for how service teams actually work" center />
        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className={`border-l-2 ${T.border} pl-5`}>
              <h4 className={`text-[16px] font-semibold ${T.ink}`}>{f.title}</h4>
              <p className={`mt-2 text-[13.5px] leading-relaxed ${T.muted}`}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 198. AI capabilities
// ---------------------------------------------------------------------------
function AICapabilities() {
  const items = [
    { icon: Sparkles, title: "Auto-triage", desc: "AI reads incoming requests and classifies intent, urgency, and owner in seconds." },
    { icon: Bot, title: "Resolution assist", desc: "Suggested responses and next steps are generated from historical resolutions." },
    { icon: BarChart3, title: "Predictive SLA risk", desc: "Flags tickets likely to breach SLA before they do, not after." },
  ];
  return (
    <section className={`${T.inkBg} py-20 text-white`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>AI capabilities</Eyebrow>
          <h2 className="mt-4 text-[32px] font-bold leading-tight sm:text-[38px]">
            AI that works the queue with you
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-white/70">
            TurboDesk's AI layer doesn't just flag issues — it triages,
            drafts, and predicts, so your team acts on the highest-impact
            work first.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-xl bg-white/5 p-6">
              <it.icon size={22} className="text-blue-400" />
              <h3 className="mt-4 text-[16px] font-semibold">{it.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-white/70">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 199. Workflow and operations
// ---------------------------------------------------------------------------
function WorkflowAndOperations() {
  const steps = [
    { title: "Capture", desc: "Requests arrive from any channel and land in a unified queue." },
    { title: "Triage", desc: "AI classifies and routes each request to the right owner instantly." },
    { title: "Resolve", desc: "Automated workflows and assist tools speed resolution end to end." },
    { title: "Learn", desc: "Every resolution improves routing accuracy and the knowledge base." },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Workflow and operations" title="From intake to resolution, automatically" center />
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className={`rounded-xl border ${T.border} p-6`}>
              <span className="text-[13px] font-semibold text-blue-600">
                Step {i + 1}
              </span>
              <h3 className={`mt-2 text-[16px] font-semibold ${T.ink}`}>{s.title}</h3>
              <p className={`mt-2 text-[13.5px] leading-relaxed ${T.muted}`}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 200. Enterprise use cases
// ---------------------------------------------------------------------------
function EnterpriseUseCases() {
  const cases = [
    { icon: Headset, title: "Customer support", desc: "Centralize support requests across email, chat, and portal with automated triage." },
    { icon: ClipboardList, title: "IT service management", desc: "Handle internal IT requests with SLA tracking and self-service deflection." },
    { icon: Layers, title: "Shared services", desc: "Run HR, finance, and facilities requests through one operational backbone." },
  ];
  return (
    <section className={`${T.soft} py-20`}>
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Enterprise use cases" title="One platform, many operating teams" center />
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {cases.map((c) => (
            <div key={c.title} className={`rounded-xl border ${T.border} bg-white p-6`}>
              <c.icon size={22} className="text-blue-600" />
              <h3 className={`mt-4 text-[16px] font-semibold ${T.ink}`}>{c.title}</h3>
              <p className={`mt-2 text-[13.5px] leading-relaxed ${T.muted}`}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 201. Integrations
// ---------------------------------------------------------------------------
function Integrations() {
  const integrations = ["Slack", "Microsoft Teams", "Salesforce", "Jira", "Zendesk", "Workday", "ServiceNow", "Okta"];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Integrations" title="Fits into the stack you already run" center />
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {integrations.map((name) => (
            <div
              key={name}
              className={`flex items-center justify-center rounded-lg border ${T.border} px-4 py-6 text-[14px] font-semibold ${T.ink}`}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 202. Security
// ---------------------------------------------------------------------------
function Security() {
  const points = [
    { title: "Role-based access", desc: "Granular permissions ensure the right people see the right requests." },
    { title: "Data encryption", desc: "Data is encrypted in transit and at rest across the platform." },
    { title: "Audit trails", desc: "Every action is logged for compliance and internal review." },
  ];
  return (
    <section className={`${T.soft} py-20`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Security</Eyebrow>
            <h2 className={`mt-4 text-[32px] font-bold leading-tight sm:text-[38px] ${T.ink}`}>
              Enterprise-grade security by default
            </h2>
            <p className={`mt-4 text-[16px] leading-relaxed ${T.muted}`}>
              TurboDesk is built to meet enterprise security and compliance
              requirements from day one, so IT and security teams can approve
              rollout with confidence.
            </p>
          </div>
          <div className="space-y-5">
            {points.map((p) => (
              <div key={p.title} className="flex items-start gap-3">
                <ShieldCheck size={20} className="mt-0.5 shrink-0 text-blue-600" />
                <div>
                  <h4 className={`text-[15px] font-semibold ${T.ink}`}>{p.title}</h4>
                  <p className={`mt-1 text-[13.5px] leading-relaxed ${T.muted}`}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 203. Benefits
// ---------------------------------------------------------------------------
function Benefits() {
  const benefits = [
    { icon: Zap, stat: "40%", desc: "Faster average resolution time" },
    { icon: Gauge, stat: "60%", desc: "Reduction in manual triage effort" },
    { icon: BarChart3, stat: "2x", desc: "Improvement in SLA compliance" },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Benefits" title="The impact teams see with TurboDesk" center />
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.desc} className="text-center">
              <b.icon size={24} className="mx-auto text-blue-600" />
              <p className={`mt-4 text-[36px] font-bold ${T.ink}`}>{b.stat}</p>
              <p className={`mt-1 text-[14px] ${T.muted}`}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 204. Product experience
// ---------------------------------------------------------------------------
function ProductExperience() {
  return (
    <section id="product-experience" className={`${T.soft} py-20`}>
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Product experience" title="Designed for daily use, not just setup" center />
        <div className="mt-12 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center gap-2 border-b border-slate-100 px-5 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
            <span className={`ml-3 text-[12px] ${T.muted}`}>app.turbodesk.ai</span>
          </div>
          <div className="grid grid-cols-1 gap-6 p-8 sm:grid-cols-3">
            {["Queue overview", "Ticket detail", "SLA dashboard"].map((label) => (
              <div key={label} className={`flex h-40 items-center justify-center rounded-lg border ${T.border} ${T.soft} text-[13px] ${T.muted}`}>
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 205. CTA
// ---------------------------------------------------------------------------
function CTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className={`flex flex-col items-center gap-6 rounded-xl ${T.inkBg} p-12 text-center text-white`}>
          <h2 className="text-[28px] font-bold sm:text-[32px]">
            Ready to see TurboDesk in action?
          </h2>
          <p className="max-w-xl text-[15px] leading-relaxed text-white/70">
            Talk to our team about how TurboDesk can streamline service
            operations across your organization.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-md bg-white px-5 py-3 text-[14.5px] font-semibold text-slate-900 transition-colors hover:bg-white/90"
            >
              Talk to us
              <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/platform"
              className="inline-flex items-center gap-1.5 rounded-md bg-white/10 px-5 py-3 text-[14.5px] font-semibold text-white transition-colors hover:bg-white/15"
            >
              Explore all platforms
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Page export
// ---------------------------------------------------------------------------
export default function TurboDeskPage() {
  return (
    <main>
      <Hero />
      <WhatIsTurboDesk />
      <CoreCapabilities />
      <KeyFeatures />
      <AICapabilities />
      <WorkflowAndOperations />
      <EnterpriseUseCases />
      <Integrations />
      <Security />
      <Benefits />
      <ProductExperience />
      <CTA />
    </main>
  );
}
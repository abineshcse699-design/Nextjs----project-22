"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BellRing,
  Bot,
  BrainCircuit,
  Check,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  Cloud,
  Database,
  Gauge,
  Headphones,
  Layers3,
  LockKeyhole,
  Mail,
  MessageSquare,
  Network,
  Plug,
  RefreshCw,
  Search,
  ServerCog,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  TicketCheck,
  TrendingDown,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

/* ==========================================================================
   THEME
   ========================================================================== */

const T = {
  ink: "text-slate-950",
  muted: "text-slate-600",
  subtle: "text-slate-500",
  border: "border-slate-200",
  primary: "text-blue-600",
  soft: "bg-slate-50",
  dark: "bg-slate-950",
};

/* ==========================================================================
   GLOBAL CONTAINER
   ========================================================================== */

function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[1520px] px-6 sm:px-10 lg:px-16 ${className}`}
    >
      {children}
    </div>
  );
}

/* ==========================================================================
   SHARED COMPONENTS
   ========================================================================== */

function Eyebrow({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <span
      className={[
        "inline-flex items-center gap-2 rounded-full px-3 py-1.5",
        "text-[11px] font-bold uppercase tracking-[0.12em]",
        dark
          ? "border border-white/10 bg-white/5 text-blue-300"
          : "border border-blue-100 bg-blue-50 text-blue-700",
      ].join(" ")}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          dark ? "bg-blue-400" : "bg-blue-600"
        }`}
      />
      {children}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <div
      className={[
        "max-w-4xl",
        center ? "mx-auto text-center" : "",
      ].join(" ")}
    >
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}

      <h2
        className={[
          "mt-5 text-[34px] font-bold leading-[1.08]",
          "tracking-[-0.035em]",
          "sm:text-[44px]",
          dark ? "text-white" : T.ink,
        ].join(" ")}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={[
            "mt-5 text-[16px] leading-7 sm:text-[17px]",
            dark ? "text-slate-400" : T.muted,
          ].join(" ")}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-[14px] font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-blue-700"
    >
      {children}

      <ArrowUpRight
        size={16}
        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}

function SecondaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-[14px] font-semibold text-slate-900 transition-all hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50"
    >
      {children}

      <ArrowRight
        size={16}
        className="transition-transform group-hover:translate-x-1"
      />
    </Link>
  );
}

function MiniBadge({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <span className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-600">
      {children}
    </span>
  );
}

function IconBox({
  icon: Icon,
  size = "md",
  dark = false,
}: {
  icon: any;
  size?: "sm" | "md" | "lg";
  dark?: boolean;
}) {
  const sizes = {
    sm: "h-9 w-9",
    md: "h-11 w-11",
    lg: "h-12 w-12",
  };

  return (
    <div
      className={[
        "flex shrink-0 items-center justify-center rounded-xl",
        sizes[size],
        dark
          ? "border border-white/10 bg-white/5 text-blue-300"
          : "border border-blue-100 bg-blue-50 text-blue-600",
      ].join(" ")}
    >
      <Icon size={size === "sm" ? 18 : 21} />
    </div>
  );
}

/* ==========================================================================
   194. HERO
   ========================================================================== */

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-260px] h-[620px] w-[900px] -translate-x-1/2 rounded-full bg-blue-50/80 blur-3xl" />

        <div className="absolute right-[-180px] top-40 h-80 w-80 rounded-full bg-indigo-50 blur-3xl" />
      </div>

      <Container className="relative py-20 sm:py-28 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <Eyebrow>
              194 · Hero · Intelligent Operations
            </Eyebrow>

            <h1 className="mt-6 max-w-5xl text-[46px] font-bold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-[64px] lg:text-[76px]">
              The intelligent
              <span className="block text-blue-600">
                service desk
              </span>
              for modern teams.
            </h1>

            <p className="mt-7 max-w-3xl text-[17px] leading-8 text-slate-600 sm:text-[19px]">
              TurboDesk brings service requests, automation, AI assistance,
              workflows, knowledge, and operational intelligence into one
              connected platform built by Starfii.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <PrimaryButton href="/contact">
                Talk to our team
              </PrimaryButton>

              <SecondaryButton href="#product-experience">
                Explore TurboDesk
              </SecondaryButton>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-[12px] font-medium text-slate-500">
              <span className="flex items-center gap-2">
                <CheckCircle2
                  size={15}
                  className="text-blue-600"
                />
                Unified request management
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2
                  size={15}
                  className="text-blue-600"
                />
                AI-assisted operations
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2
                  size={15}
                  className="text-blue-600"
                />
                Enterprise-ready
              </span>
            </div>
          </div>

          {/* Dashboard */}
          <div className="relative">
            <div className="absolute -inset-5 rounded-[32px] bg-blue-100/50 blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_30px_80px_-25px_rgba(15,23,42,0.25)]">
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                    <Zap size={16} />
                  </div>

                  <div>
                    <p className="text-[12px] font-bold text-slate-900">
                      TurboDesk
                    </p>

                    <p className="text-[10px] text-slate-400">
                      Operations Center
                    </p>
                  </div>
                </div>

                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                </div>
              </div>

              <div className="grid grid-cols-[150px_1fr]">
                <aside className="hidden border-r border-slate-100 bg-slate-50 p-4 sm:block">
                  <p className="mb-3 text-[9px] font-bold uppercase tracking-widest text-slate-400">
                    Workspace
                  </p>

                  <div className="space-y-1">
                    {[
                      ["Overview", Gauge],
                      ["Requests", TicketCheck],
                      ["Automation", Workflow],
                      ["Analytics", BarChart3],
                    ].map(([name, Icon], index) => (
                      <div
                        key={name as string}
                        className={`flex items-center gap-2 rounded-lg px-3 py-2 text-[10px] font-semibold ${
                          index === 0
                            ? "bg-white text-blue-600 shadow-sm"
                            : "text-slate-500"
                        }`}
                      >
                        <Icon size={13} />
                        {name as string}
                      </div>
                    ))}
                  </div>
                </aside>

                <div className="p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-[17px] font-bold text-slate-900">
                        Service overview
                      </p>

                      <p className="mt-1 text-[10px] text-slate-400">
                        Monday, September 14
                      </p>
                    </div>

                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[9px] font-bold text-emerald-600">
                      ● All systems healthy
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      ["1,284", "Open requests", "+12%"],
                      ["94.8%", "SLA compliance", "+4.2%"],
                      ["18m", "Avg. response", "-26%"],
                    ].map(([value, label, change]) => (
                      <div
                        key={label}
                        className="rounded-xl border border-slate-100 bg-slate-50 p-3"
                      >
                        <p className="text-[16px] font-bold text-slate-900">
                          {value}
                        </p>

                        <p className="mt-1 text-[8px] text-slate-400">
                          {label}
                        </p>

                        <p className="mt-2 text-[8px] font-bold text-emerald-600">
                          {change}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-xl border border-slate-100 p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-[10px] font-bold text-slate-700">
                        Request volume
                      </p>

                      <span className="text-[8px] text-slate-400">
                        Last 7 days
                      </span>
                    </div>

                    <div className="mt-5 flex h-24 items-end gap-2">
                      {[
                        34,
                        46,
                        39,
                        62,
                        51,
                        76,
                        68,
                        84,
                        72,
                        91,
                        79,
                        96,
                      ].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-sm bg-blue-100"
                          style={{ height: `${height}%` }}
                        >
                          <div
                            className="h-full w-full rounded-t-sm bg-blue-500"
                            style={{
                              height: `${Math.max(
                                25,
                                height - 25,
                              )}%`,
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 grid gap-2">
                    {[
                      [
                        "#TD-4821",
                        "Password reset request",
                        "AI resolved",
                      ],
                      [
                        "#TD-4819",
                        "Access approval",
                        "Waiting",
                      ],
                      [
                        "#TD-4817",
                        "CRM integration issue",
                        "Assigned",
                      ],
                    ].map(([id, title, status]) => (
                      <div
                        key={id}
                        className="flex items-center gap-3 rounded-lg border border-slate-100 px-3 py-2.5"
                      >
                        <div className="h-7 w-7 rounded-md bg-slate-100" />

                        <div className="min-w-0 flex-1">
                          <p className="truncate text-[9px] font-bold text-slate-800">
                            {title}
                          </p>

                          <p className="text-[8px] text-slate-400">
                            {id}
                          </p>
                        </div>

                        <span className="text-[8px] font-semibold text-blue-600">
                          {status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ==========================================================================
   195. WHAT IS TURBODESK?
   ========================================================================== */

function WhatIsTurboDesk() {
  const points = [
    {
      icon: TicketCheck,
      title: "One request layer",
      desc: "Bring tickets, tasks, approvals, incidents, and service requests into one operational workspace.",
    },
    {
      icon: BrainCircuit,
      title: "Intelligence built in",
      desc: "Use AI to understand requests, recommend actions, surface knowledge, and accelerate resolution.",
    },
    {
      icon: Workflow,
      title: "Automation at every step",
      desc: "Turn repetitive processes into structured workflows with routing, approvals, escalation, and follow-up.",
    },
    {
      icon: BarChart3,
      title: "Visibility for leaders",
      desc: "Understand workload, SLA performance, resolution trends, bottlenecks, and operational health in real time.",
    },
  ];

  return (
    <section className="border-b border-slate-100 bg-white py-24 sm:py-28">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <Eyebrow>
              195 · What is TurboDesk?
            </Eyebrow>

            <h2 className="mt-5 text-[36px] font-bold leading-tight tracking-[-0.04em] text-slate-950 sm:text-[48px]">
              A single operating layer for service.
            </h2>

            <p className="mt-6 text-[16px] leading-8 text-slate-600">
              TurboDesk connects the people, processes, systems, and
              intelligence required to deliver better internal and external
              service.
            </p>

            <p className="mt-4 text-[16px] leading-8 text-slate-600">
              Instead of forcing teams to jump between disconnected queues,
              spreadsheets, chat threads, and tools, TurboDesk creates one
              place to capture work, understand it, route it, resolve it,
              and learn from it.
            </p>

            <Link
              href="#core-capabilities"
              className="mt-7 inline-flex items-center gap-2 text-[14px] font-bold text-blue-600 hover:text-blue-700"
            >
              Explore core capabilities
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {points.map((item, index) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/50"
              >
                <div className="flex items-start justify-between">
                  <IconBox icon={item.icon} />

                  <span className="text-[11px] font-bold text-slate-300">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-[17px] font-bold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-slate-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ==========================================================================
   196. CORE CAPABILITIES
   ========================================================================== */

function CoreCapabilities() {
  const capabilities = [
    {
      icon: Workflow,
      number: "01",
      title: "Unified request management",
      desc: "Create a consistent operational queue for customer support, IT, HR, finance, facilities, and shared-service requests.",
      tags: ["Queues", "Priorities", "Ownership"],
    },
    {
      icon: Bot,
      number: "02",
      title: "AI-assisted resolution",
      desc: "Use AI to classify intent, suggest responses, retrieve knowledge, summarize context, and accelerate repetitive work.",
      tags: ["Triage", "Assist", "Knowledge"],
    },
    {
      icon: Gauge,
      number: "03",
      title: "Operational visibility",
      desc: "Track request volume, backlog, response times, SLA performance, workload, and trends from a shared analytics layer.",
      tags: ["SLAs", "Analytics", "Reports"],
    },
    {
      icon: Plug,
      number: "04",
      title: "Extensible integrations",
      desc: "Connect the applications teams already depend on so service workflows can move across systems without manual duplication.",
      tags: ["APIs", "Apps", "Data"],
    },
    {
      icon: Users,
      number: "05",
      title: "Team collaboration",
      desc: "Give agents, managers, specialists, and stakeholders the right context without creating unnecessary communication loops.",
      tags: ["Teams", "Mentions", "Handoffs"],
    },
    {
      icon: Database,
      number: "06",
      title: "Knowledge intelligence",
      desc: "Turn previous resolutions, documentation, and institutional knowledge into reusable service intelligence.",
      tags: ["Articles", "Search", "Learning"],
    },
  ];

  return (
    <section
      id="core-capabilities"
      className="bg-slate-50 py-24 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="196 · Core capabilities"
          title="Everything your service operation needs to move faster."
          subtitle="TurboDesk combines the fundamental service-desk capabilities teams need with a modern automation and intelligence layer."
          center
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-slate-200/60"
            >
              <div className="flex items-center justify-between">
                <IconBox icon={item.icon} />

                <span className="text-[11px] font-bold tracking-widest text-slate-300">
                  {item.number}
                </span>
              </div>

              <h3 className="mt-7 text-[18px] font-bold text-slate-950">
                {item.title}
              </h3>

              <p className="mt-3 text-[13.5px] leading-6 text-slate-600">
                {item.desc}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <MiniBadge key={tag}>{tag}</MiniBadge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ==========================================================================
   197. KEY FEATURES
   ========================================================================== */

function KeyFeatures() {
  const features = [
    {
      icon: Target,
      title: "Smart ticket routing",
      desc: "Automatically assign requests based on category, priority, skill, ownership, availability, or custom routing logic.",
    },
    {
      icon: Search,
      title: "Self-service portal",
      desc: "Help users find answers, submit requests, check status, and complete guided service journeys without unnecessary agent involvement.",
    },
    {
      icon: Clock3,
      title: "SLA management",
      desc: "Define response and resolution targets with timers, escalation rules, notifications, and visibility into at-risk work.",
    },
    {
      icon: Database,
      title: "Knowledge base sync",
      desc: "Capture successful resolutions and connect service knowledge to future requests so teams continuously improve.",
    },
    {
      icon: Network,
      title: "Omnichannel intake",
      desc: "Bring requests from email, chat, portals, APIs, and other channels into a consistent service experience.",
    },
    {
      icon: Settings2,
      title: "Custom workflows",
      desc: "Design approval paths, conditional actions, notifications, assignments, and resolution processes around your organization.",
    },
    {
      icon: BellRing,
      title: "Escalation engine",
      desc: "Automatically identify aging or high-priority requests and bring the right people into the workflow at the right moment.",
    },
    {
      icon: RefreshCw,
      title: "Continuous improvement",
      desc: "Use service patterns, outcomes, and operational data to identify recurring issues and opportunities for automation.",
    },
  ];

  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="197 · Key features"
          title="Built around the way modern service teams actually work."
          subtitle="Every feature is designed to remove friction between a request arriving and the right outcome being delivered."
          center
        />

        <div className="mt-16 divide-y divide-slate-100 border-y border-slate-100">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group grid gap-5 py-7 md:grid-cols-[70px_1fr_1.5fr_30px] md:items-center"
            >
              <span className="text-[12px] font-bold text-slate-300">
                {String(index + 1).padStart(2, "0")}
              </span>

              <IconBox icon={feature.icon} size="sm" />

              <div>
                <h3 className="text-[16px] font-bold text-slate-950">
                  {feature.title}
                </h3>

                <p className="mt-2 max-w-2xl text-[13px] leading-6 text-slate-600">
                  {feature.desc}
                </p>
              </div>

              <ChevronRight
                size={17}
                className="hidden text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-blue-600 md:block"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ==========================================================================
   198. AI CAPABILITIES
   ========================================================================== */

function AICapabilities() {
  const aiFeatures = [
    {
      icon: Sparkles,
      title: "Auto-triage",
      desc: "Understand incoming requests and classify intent, category, urgency, and ownership before an agent starts working.",
    },
    {
      icon: Bot,
      title: "Resolution assist",
      desc: "Generate response suggestions, summarize context, surface relevant knowledge, and recommend next actions.",
    },
    {
      icon: BarChart3,
      title: "Predictive SLA risk",
      desc: "Identify requests showing signs of delay so teams can intervene before a service target is missed.",
    },
    {
      icon: BrainCircuit,
      title: "Knowledge discovery",
      desc: "Surface relevant internal knowledge from previous resolutions and approved service documentation.",
    },
    {
      icon: MessageSquare,
      title: "Response intelligence",
      desc: "Help agents create clearer, more consistent responses while retaining human review and control.",
    },
    {
      icon: TrendingUp,
      title: "Operational insights",
      desc: "Turn service activity into patterns that help leaders find bottlenecks, recurring issues, and automation opportunities.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

      <Container className="relative">
        <div className="grid gap-16 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <Eyebrow dark>
              198 · AI capabilities
            </Eyebrow>

            <h2 className="mt-5 text-[38px] font-bold leading-[1.05] tracking-[-0.04em] sm:text-[52px]">
              AI that works
              <span className="block text-blue-400">
                with your service team.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-[16px] leading-8 text-slate-400">
              TurboDesk&apos;s AI layer is designed around the service queue.
              It helps teams understand incoming work, reduce repetitive
              effort, find answers faster, and make better operational
              decisions.
            </p>

            <div className="mt-9 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/20 text-blue-300">
                  <Sparkles size={19} />
                </div>

                <div>
                  <p className="text-[13px] font-bold text-white">
                    AI-assisted, human-controlled
                  </p>

                  <p className="mt-1 text-[11px] text-slate-500">
                    Automation supports your team without removing oversight.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-2">
                {[
                  "Intent detection",
                  "Context summaries",
                  "Suggested replies",
                  "Knowledge retrieval",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2.5 text-[10px] font-medium text-slate-300"
                  >
                    <Check size={12} className="text-blue-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {aiFeatures.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-colors hover:border-blue-500/30 hover:bg-white/[0.055]"
              >
                <IconBox icon={item.icon} dark />

                <h3 className="mt-6 text-[16px] font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ==========================================================================
   199. WORKFLOW AND OPERATIONS
   ========================================================================== */

function WorkflowAndOperations() {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Capture",
      desc: "Requests arrive from email, chat, portal, API, or connected business systems.",
    },
    {
      number: "02",
      icon: BrainCircuit,
      title: "Understand",
      desc: "AI and workflow rules classify the request, identify context, and determine priority.",
    },
    {
      number: "03",
      icon: Network,
      title: "Route",
      desc: "The request moves to the right team or owner based on skills, rules, workload, and service targets.",
    },
    {
      number: "04",
      icon: Zap,
      title: "Resolve",
      desc: "Automation, knowledge, AI assistance, approvals, and human expertise work together.",
    },
    {
      number: "05",
      icon: BarChart3,
      title: "Measure",
      desc: "Leaders see performance, backlog, SLA health, workload, and recurring patterns.",
    },
    {
      number: "06",
      icon: RefreshCw,
      title: "Learn",
      desc: "Resolution outcomes feed future workflows, knowledge, and operational improvements.",
    },
  ];

  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="199 · Workflow and operations"
          title="From intake to resolution, every step connected."
          subtitle="TurboDesk creates a repeatable operational flow that combines people, process, automation, and intelligence."
          center
        />

        <div className="relative mt-16">
          <div className="absolute left-[8%] right-[8%] top-8 hidden h-px bg-slate-200 lg:block" />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-100 bg-white text-blue-600 shadow-sm">
                  <step.icon size={22} />
                </div>

                <p className="mt-5 text-[10px] font-bold uppercase tracking-widest text-blue-600">
                  Step {step.number}
                </p>

                <h3 className="mt-2 text-[16px] font-bold text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-2 text-[12px] leading-5 text-slate-600">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-[15px] font-bold text-slate-950">
                Example automated workflow
              </p>

              <p className="mt-1 text-[12px] text-slate-500">
                Access request → approval → provisioning → confirmation
              </p>
            </div>

            <MiniBadge>Workflow active</MiniBadge>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-4">
            {[
              ["Request received", Mail, "Incoming"],
              ["Manager approval", ClipboardCheck, "Waiting"],
              ["System provisioning", ServerCog, "Automated"],
              ["User notified", BellRing, "Completed"],
            ].map(([title, Icon, status], index) => (
              <div key={title as string} className="relative">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="flex items-center justify-between">
                    <IconBox icon={Icon} size="sm" />

                    <span className="text-[10px] font-bold text-slate-300">
                      0{index + 1}
                    </span>
                  </div>

                  <h4 className="mt-5 text-[13px] font-bold text-slate-900">
                    {title as string}
                  </h4>

                  <p className="mt-2 text-[10px] text-slate-500">
                    {status as string}
                  </p>
                </div>

                {index < 3 && (
                  <ArrowRight
                    size={15}
                    className="absolute -right-2 top-1/2 z-20 hidden -translate-y-1/2 text-blue-500 md:block"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ==========================================================================
   200. ENTERPRISE USE CASES
   ========================================================================== */

function EnterpriseUseCases() {
  const cases = [
    {
      icon: Headphones,
      title: "Customer support",
      desc: "Create a consistent customer service experience across channels while giving support teams faster access to context and knowledge.",
      bullets: [
        "Omnichannel request intake",
        "AI-assisted responses",
        "Customer history and context",
        "SLA and escalation management",
      ],
    },
    {
      icon: ServerCog,
      title: "IT service management",
      desc: "Modernize internal IT service delivery with structured requests, automated workflows, knowledge, and operational visibility.",
      bullets: [
        "Access and software requests",
        "Incident and issue workflows",
        "Approvals and provisioning",
        "Self-service knowledge",
      ],
    },
    {
      icon: Layers3,
      title: "Shared services",
      desc: "Give HR, finance, facilities, procurement, and other operational teams a common service layer.",
      bullets: [
        "Cross-functional request routing",
        "Department-specific workflows",
        "Approval orchestration",
        "Centralized reporting",
      ],
    },
    {
      icon: Users,
      title: "Employee experience",
      desc: "Make it easier for employees to get answers and complete internal service requests without knowing which team owns the process.",
      bullets: [
        "Guided service journeys",
        "Self-service portal",
        "Status visibility",
        "Automated notifications",
      ],
    },
  ];

  return (
    <section className="bg-slate-50 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="200 · Enterprise use cases"
          title="One platform. Many operating teams."
          subtitle="TurboDesk can act as the service backbone across customer-facing and internal operational functions."
          center
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {cases.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
            >
              <div className="flex items-start justify-between">
                <IconBox icon={item.icon} size="lg" />

                <ArrowUpRight
                  size={19}
                  className="text-slate-300 transition-colors group-hover:text-blue-600"
                />
              </div>

              <h3 className="mt-7 text-[20px] font-bold text-slate-950">
                {item.title}
              </h3>

              <p className="mt-3 text-[13.5px] leading-6 text-slate-600">
                {item.desc}
              </p>

              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {item.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="flex items-center gap-2 text-[11px] font-medium text-slate-600"
                  >
                    <CheckCircle2
                      size={14}
                      className="shrink-0 text-blue-600"
                    />
                    {bullet}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ==========================================================================
   201. INTEGRATIONS
   ========================================================================== */

function Integrations() {
  const integrations = [
    { name: "Slack", category: "Collaboration" },
    { name: "Microsoft Teams", category: "Collaboration" },
    { name: "Salesforce", category: "CRM" },
    { name: "Jira", category: "Engineering" },
    { name: "Zendesk", category: "Support" },
    { name: "Workday", category: "HR" },
    { name: "ServiceNow", category: "ITSM" },
    { name: "Okta", category: "Identity" },
  ];

  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="201 · Integrations"
          title="Fits into the stack you already run."
          subtitle="TurboDesk is designed to work as an operational layer across your existing systems rather than forcing teams to replace everything."
          center
        />

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {integrations.map((item) => (
            <div
              key={item.name}
              className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-[13px] font-black text-slate-800">
                {item.name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .slice(0, 2)}
              </div>

              <p className="mt-5 text-[14px] font-bold text-slate-900">
                {item.name}
              </p>

              <p className="mt-1 text-[10px] font-medium text-slate-400">
                {item.category}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <IconBox icon={Network} size="sm" />

                <h3 className="text-[16px] font-bold text-slate-950">
                  Connect beyond the standard integrations
                </h3>
              </div>

              <p className="mt-4 max-w-3xl text-[13px] leading-6 text-slate-600">
                Use APIs and integration workflows to connect TurboDesk with
                business applications, internal systems, identity platforms,
                data sources, and custom operational tooling.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-3 text-[13px] font-bold text-slate-900 hover:bg-slate-50"
            >
              Discuss integrations
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ==========================================================================
   202. SECURITY
   ========================================================================== */

function Security() {
  const security = [
    {
      icon: LockKeyhole,
      title: "Role-based access",
      desc: "Define granular permissions around users, teams, requests, workflows, and operational data.",
    },
    {
      icon: ShieldCheck,
      title: "Data protection",
      desc: "Protect information across the platform with appropriate security controls for enterprise environments.",
    },
    {
      icon: ClipboardCheck,
      title: "Audit trails",
      desc: "Maintain visibility into important actions and workflow activity for review and operational accountability.",
    },
    {
      icon: Cloud,
      title: "Enterprise architecture",
      desc: "Design service operations with centralized controls, connected systems, and scalable operational workflows.",
    },
  ];

  return (
    <section className="bg-slate-50 py-24 sm:py-28">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <Eyebrow>202 · Security</Eyebrow>

            <h2 className="mt-5 text-[36px] font-bold leading-tight tracking-[-0.04em] text-slate-950 sm:text-[48px]">
              Enterprise-grade controls for service operations.
            </h2>

            <p className="mt-6 text-[16px] leading-8 text-slate-600">
              Security should be part of the operating model, not an
              afterthought. TurboDesk is designed with controlled access,
              visibility, and governance in mind.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              <MiniBadge>Access control</MiniBadge>
              <MiniBadge>Auditability</MiniBadge>
              <MiniBadge>Governance</MiniBadge>
              <MiniBadge>Data protection</MiniBadge>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {security.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <IconBox icon={item.icon} />

                <h3 className="mt-6 text-[16px] font-bold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-slate-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ==========================================================================
   203. BENEFITS
   ========================================================================== */

function Benefits() {
  const stats = [
    {
      icon: Zap,
      value: "40%",
      label: "Faster resolution",
      desc: "Reduce the time teams spend moving requests from intake to outcome.",
      trend: "Resolution efficiency",
    },
    {
      icon: TrendingDown,
      value: "60%",
      label: "Less manual triage",
      desc: "Automate classification, routing, prioritization, and repetitive service work.",
      trend: "Operational effort",
    },
    {
      icon: TrendingUp,
      value: "2×",
      label: "SLA improvement",
      desc: "Give teams better visibility and earlier signals around service performance.",
      trend: "Service performance",
    },
  ];

  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="203 · Benefits"
          title="Turn service operations into a competitive advantage."
          subtitle="The goal isn't simply to process more tickets. It's to create an operation that is faster, more predictable, more intelligent, and easier to improve."
          center
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-50 blur-3xl" />

              <div className="relative">
                <IconBox icon={item.icon} />

                <p className="mt-7 text-[52px] font-bold leading-none tracking-[-0.05em] text-slate-950">
                  {item.value}
                </p>

                <h3 className="mt-3 text-[17px] font-bold text-slate-950">
                  {item.label}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-slate-600">
                  {item.desc}
                </p>

                <div className="mt-7 border-t border-slate-100 pt-4 text-[10px] font-bold uppercase tracking-widest text-blue-600">
                  {item.trend}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {[
            [
              "Faster teams",
              "Spend less time searching, routing, and updating.",
            ],
            [
              "Better experiences",
              "Give requesters clearer status and faster answers.",
            ],
            [
              "Lower friction",
              "Connect workflows across departments and systems.",
            ],
            [
              "Smarter operations",
              "Use service data to continuously improve.",
            ],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="rounded-xl bg-slate-50 p-5"
            >
              <p className="text-[13px] font-bold text-slate-900">
                {title}
              </p>

              <p className="mt-2 text-[11px] leading-5 text-slate-500">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ==========================================================================
   204. PRODUCT EXPERIENCE
   ========================================================================== */

function ProductExperience() {
  const tabs = [
    "Queue overview",
    "Ticket detail",
    "Automation",
    "SLA dashboard",
  ];

  return (
    <section
      id="product-experience"
      className="bg-slate-50 py-24 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="204 · Product experience"
          title="A product people can actually use every day."
          subtitle="TurboDesk is designed around clarity: what needs attention, why it matters, who owns it, and what should happen next."
          center
        />

        <div className="mt-16 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_30px_80px_-35px_rgba(15,23,42,.25)]">
          {/* Browser */}
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            </div>

            <div className="hidden rounded-md bg-slate-50 px-5 py-1.5 text-[9px] text-slate-400 sm:block">
              app.turbodesk.ai / operations
            </div>

            <Settings2 size={15} className="text-slate-300" />
          </div>

          <div className="grid lg:grid-cols-[190px_1fr]">
            <aside className="hidden border-r border-slate-100 bg-slate-50 p-4 lg:block">
              <div className="flex items-center gap-2 px-2 py-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-600 text-white">
                  <Zap size={13} />
                </div>

                <span className="text-[11px] font-bold text-slate-800">
                  TurboDesk
                </span>
              </div>

              <div className="mt-6 space-y-1">
                {[
                  "Overview",
                  "My queue",
                  "All requests",
                  "Automation",
                  "Knowledge",
                  "Analytics",
                ].map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-lg px-3 py-2 text-[10px] font-semibold ${
                      index === 0
                        ? "bg-white text-blue-600 shadow-sm"
                        : "text-slate-500"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </aside>

            <div className="p-5 sm:p-8">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <p className="text-[20px] font-bold tracking-tight text-slate-950">
                    Operations overview
                  </p>

                  <p className="mt-1 text-[11px] text-slate-400">
                    See what&apos;s happening across your service operation.
                  </p>
                </div>

                <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-[11px] font-bold text-white">
                  <Zap size={13} />
                  Create request
                </button>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  ["1,284", "Open requests", "+12.4%"],
                  ["248", "Due today", "-8.2%"],
                  ["94.8%", "SLA compliance", "+4.2%"],
                  ["18m", "Avg. response", "-26.4%"],
                ].map(([value, label, change]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-slate-100 bg-slate-50 p-4"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-[19px] font-bold text-slate-950">
                        {value}
                      </p>

                      <span className="text-[9px] font-bold text-emerald-600">
                        {change}
                      </span>
                    </div>

                    <p className="mt-1 text-[10px] text-slate-500">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex gap-1 overflow-x-auto border-b border-slate-100">
                {tabs.map((tab, index) => (
                  <div
                    key={tab}
                    className={`whitespace-nowrap px-4 py-3 text-[10px] font-bold ${
                      index === 0
                        ? "border-b-2 border-blue-600 text-blue-600"
                        : "text-slate-400"
                    }`}
                  >
                    {tab}
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-5 xl:grid-cols-[1.3fr_.7fr]">
                <div className="rounded-xl border border-slate-100 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[12px] font-bold text-slate-800">
                        Request activity
                      </p>

                      <p className="mt-1 text-[9px] text-slate-400">
                        Incoming service requests
                      </p>
                    </div>

                    <BarChart3
                      size={15}
                      className="text-blue-600"
                    />
                  </div>

                  <div className="mt-8 flex h-44 items-end gap-2">
                    {[
                      38,
                      45,
                      51,
                      44,
                      62,
                      57,
                      72,
                      65,
                      81,
                      76,
                      89,
                      84,
                      94,
                      88,
                    ].map((height, index) => (
                      <div
                        key={index}
                        className="group relative flex-1 rounded-t-md bg-blue-50"
                        style={{ height: `${height}%` }}
                      >
                        <div
                          className="absolute bottom-0 left-0 right-0 rounded-t-md bg-blue-500 transition-all group-hover:bg-blue-600"
                          style={{
                            height: `${Math.max(
                              35,
                              height - 20,
                            )}%`,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-slate-100 p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-[12px] font-bold text-slate-800">
                      SLA health
                    </p>

                    <Gauge
                      size={15}
                      className="text-blue-600"
                    />
                  </div>

                  <div className="mt-7 flex items-center justify-center">
                    <div className="relative flex h-36 w-36 items-center justify-center rounded-full border-[12px] border-blue-50">
                      <div className="absolute inset-0 rotate-[-35deg] rounded-full border-[12px] border-transparent border-l-blue-600 border-t-blue-600" />

                      <div className="text-center">
                        <p className="text-[25px] font-bold text-slate-950">
                          94.8%
                        </p>

                        <p className="text-[8px] text-slate-400">
                          Compliance
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-2">
                    {[
                      ["Within SLA", "1,216"],
                      ["At risk", "48"],
                      ["Breached", "20"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2"
                      >
                        <span className="text-[9px] text-slate-500">
                          {label}
                        </span>

                        <span className="text-[9px] font-bold text-slate-800">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 overflow-hidden rounded-xl border border-slate-100">
                <div className="grid grid-cols-[90px_1fr_90px_80px] border-b border-slate-100 bg-slate-50 px-4 py-3 text-[8px] font-bold uppercase tracking-wider text-slate-400">
                  <span>ID</span>
                  <span>Request</span>
                  <span>Owner</span>
                  <span>Status</span>
                </div>

                {[
                  [
                    "TD-4821",
                    "Password reset request",
                    "IT Support",
                    "Resolved",
                  ],
                  [
                    "TD-4819",
                    "Finance access approval",
                    "Finance",
                    "Pending",
                  ],
                  [
                    "TD-4817",
                    "CRM integration issue",
                    "Platform",
                    "Active",
                  ],
                ].map(([id, request, owner, status]) => (
                  <div
                    key={id}
                    className="grid grid-cols-[90px_1fr_90px_80px] border-b border-slate-50 px-4 py-3 text-[9px] last:border-0"
                  >
                    <span className="font-semibold text-slate-400">
                      {id}
                    </span>

                    <span className="font-semibold text-slate-700">
                      {request}
                    </span>

                    <span className="text-slate-400">
                      {owner}
                    </span>

                    <span className="font-semibold text-blue-600">
                      {status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            [
              "Clarity first",
              "Make the next action obvious.",
            ],
            [
              "Context everywhere",
              "Keep relevant information close to the work.",
            ],
            [
              "Automation with control",
              "Automate repetitive work while keeping people in charge.",
            ],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="rounded-xl border border-slate-200 bg-white p-5"
            >
              <p className="text-[13px] font-bold text-slate-900">
                {title}
              </p>

              <p className="mt-2 text-[11px] leading-5 text-slate-500">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ==========================================================================
   205. CTA
   ========================================================================== */

function CTA() {
  return (
    <section className="bg-white px-6 py-24 sm:py-28 sm:px-10 lg:px-16">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] bg-slate-950 px-7 py-16 sm:px-12 sm:py-20 lg:px-20">
          <div className="pointer-events-none absolute right-[-100px] top-[-160px] h-[400px] w-[400px] rounded-full bg-blue-600/20 blur-3xl" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_auto]">
            <div>
              <Eyebrow dark>205 · CTA</Eyebrow>

              <h2 className="mt-6 max-w-4xl text-[38px] font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-[54px]">
                Ready to make service operations smarter?
              </h2>

              <p className="mt-6 max-w-3xl text-[16px] leading-7 text-slate-400">
                See how TurboDesk can bring requests, automation, AI,
                workflows, integrations, and operational intelligence
                together across your organization.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-[14px] font-bold text-slate-950 transition-all hover:bg-slate-100"
                >
                  Talk to us

                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <Link
                  href="/platform"
                  className="group inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-[14px] font-bold text-white transition-all hover:bg-white/10"
                >
                  Explore all platforms

                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>

            <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-[11px] font-bold uppercase tracking-widest text-blue-300">
                TurboDesk platform
              </p>

              <div className="mt-6 space-y-4">
                {[
                  "Unified service requests",
                  "AI-assisted resolution",
                  "Workflow automation",
                  "Enterprise integrations",
                  "Operational analytics",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-[12px] font-medium text-slate-300"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/10">
                      <Check
                        size={12}
                        className="text-blue-400"
                      />
                    </div>

                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-7 border-t border-white/10 pt-5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-slate-500">
                    Built by Starfii
                  </span>

                  <Sparkles
                    size={15}
                    className="text-blue-400"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ==========================================================================
   PAGE
   ========================================================================== */

export default function TurboDeskPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
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
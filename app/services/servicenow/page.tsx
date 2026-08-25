// Save this file as: app/servicenow/page.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  MessageSquare,
  Ticket,
  ServerCog,
  Headphones,
  Users,
  ShoppingCart,
  LayoutGrid,
  CheckCircle2,
  Compass,
  Wrench,
  LifeBuoy,
  ShieldCheck,
  Sparkles,
  Layers,
  Plus,
  Zap,
  TrendingUp,
  FileCheck2,
} from "lucide-react";

/* ===============================================================
   DESIGN TOKENS
================================================================ */
const primary = "#7C5CFC";

/* ===============================================================
   SHARED CONTAINER — this single string controls the left/right
   edge of EVERY section on the page. Change it here once and every
   section (hero, capabilities, outcomes, engagements, industries,
   process, why-starfii, faq, insights, cta) moves together.

   ✅ Matches navbar's outer wrapper exactly:
   max-w-[1830px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12
================================================================ */
const CONTAINER = "mx-auto max-w-[1830px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12";

/* ===============================================================
   REVEAL — scroll-triggered fade/rise. Respects reduced motion.
================================================================ */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ===============================================================
   GLOW CARD — icon tile, faded number, title + colored underline,
   description, divider, arrow-bullet list. Hover glows in accent.
================================================================ */
function GlowCard({
  id,
  icon: Icon,
  number,
  title,
  accent,
  desc,
  items,
  delay = 0,
}: {
  id?: string;
  icon: React.ElementType;
  number: string;
  title: string;
  accent: string;
  desc: string;
  items: string[];
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div
        id={id}
        className="svc-target group relative h-full scroll-mt-32 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--accent)]/40 hover:shadow-[0_24px_70px_-20px_var(--glow)]"
        style={{ ["--accent" as string]: accent, ["--glow" as string]: `${accent}55` }}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute right-6 top-2 select-none text-[64px] font-extrabold leading-none text-white/[0.05] transition-colors duration-300 group-hover:text-white/[0.08]"
        >
          {number}
        </span>

        <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-white/[0.06] transition-transform duration-300 group-hover:scale-105">
          <Icon size={24} strokeWidth={2} style={{ color: accent }} />
        </div>

        <h3 className="relative mt-6 text-[20px] font-bold tracking-tight text-white">{title}</h3>
        <div
          className="mt-3 h-[3px] w-10 rounded-full transition-all duration-300 group-hover:w-14"
          style={{ backgroundColor: accent }}
        />

        <p className="relative mt-5 text-[14.5px] leading-relaxed text-white/55">{desc}</p>

        <div className="relative my-6 h-px bg-white/10" />

        <ul className="relative space-y-3">
          {items.map((it) => (
            <li key={it} className="flex items-center gap-2.5 text-[14px] text-white/75">
              <ArrowUpRight size={15} className="shrink-0" style={{ color: accent }} />
              {it}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

/* ===============================================================
   DATA — capabilities
================================================================ */
const CAPABILITIES = [
  {
    id: "itsm",
    number: "01",
    icon: Ticket,
    accent: "#8B7CFF",
    title: "IT Service Management",
    desc: "We replace scattered inboxes and spreadsheets with a governed workflow, so incidents get resolved faster and every change is auditable.",
    items: ["Incident & Problem Management", "Change & Release Management", "Request Fulfilment", "Knowledge Base & Self-Service"],
  },
  {
    id: "itom",
    number: "02",
    icon: ServerCog,
    accent: "#F45B9E",
    title: "IT Operations Management",
    desc: "A live, dependency-aware view of your infrastructure, so your team catches degradation before customers ever notice it.",
    items: ["Discovery & CMDB", "Event & Alert Management", "Service Mapping", "Cloud & Hybrid Insights"],
  },
  {
    id: "csm",
    number: "03",
    icon: Headphones,
    accent: "#F5B942",
    title: "Customer Service Management",
    desc: "Support cases linked to the systems and orders behind them, so agents see full context and close cases on the first reply.",
    items: ["Case Management", "Customer & Partner Portals", "Field Service Management", "Omnichannel Support"],
  },
  {
    id: "hrsd",
    number: "04",
    icon: Users,
    accent: "#4EA1FF",
    title: "HR Service Delivery",
    desc: "A single, self-service front door for employees, so HR spends less time on status updates and more on people.",
    items: ["Employee Onboarding & Offboarding", "HR Case Management", "Employee Center Portal", "Document & Policy Management"],
  },
  {
    id: "s2p",
    number: "05",
    icon: ShoppingCart,
    accent: "#34D399",
    title: "Source-to-Pay Operations",
    desc: "Procurement and payments run on one workflow, giving finance and vendors full visibility from request through to payment.",
    items: ["Requisition to Purchase Order", "Vendor & Contract Management", "Invoice Automation", "Spend Analytics & Reporting"],
  },
  {
    id: "aes",
    number: "06",
    icon: LayoutGrid,
    accent: "#22D3EE",
    title: "App Engine Studio",
    desc: "Purpose-built apps for the workflows ServiceNow doesn't ship out of the box, built and governed on the same platform.",
    items: ["Custom Workflow Apps", "Low-Code / No-Code Studio", "Process Automation", "Platform Integration Hub"],
  },
];

const ENGAGEMENTS = [
  {
    icon: Compass,
    accent: "#8B7CFF",
    title: "Assess & Advise",
    desc: "A structured review of your current-state workflows, licensing, and technical debt, closing with a prioritized roadmap and business case.",
  },
  {
    icon: Wrench,
    accent: "#F45B9E",
    title: "Implement & Integrate",
    desc: "End-to-end configuration, custom app development, and integration with your existing IT and business systems.",
  },
  {
    icon: LifeBuoy,
    accent: "#4EA1FF",
    title: "Support & Evolve",
    desc: "Ongoing managed support, release upgrades, and platform governance, so ServiceNow keeps pace as your workflows change.",
  },
];

const PROCESS = [
  { number: "01", accent: "#8B7CFF", title: "Discover", desc: "We map how work actually moves through your teams today, not how the org chart says it should." },
  { number: "02", accent: "#F45B9E", title: "Design", desc: "Workflows are designed around the modules you need and the outcomes you're after, not the other way round." },
  { number: "03", accent: "#F5B942", title: "Build & configure", desc: "Certified ServiceNow engineers configure, integrate, and test against your real systems and data." },
  { number: "04", accent: "#4EA1FF", title: "Adopt & scale", desc: "We stay on to support rollout, train your teams, and extend the platform as new workflows come up." },
];

const INDUSTRIES = [
  { label: "Banking", href: "/industries/banking" },
  { label: "Financial Services", href: "/industries/financial-services" },
  { label: "Insurance", href: "/industries/insurance" },
  { label: "Healthcare", href: "/industries/healthcare" },
  { label: "Life Sciences", href: "/industries/life-sciences" },
  { label: "Manufacturing", href: "/industries/manufacturing" },
  { label: "Retail", href: "/industries/retail" },
  { label: "Telecom", href: "/industries/telecom" },
  { label: "Public Sector", href: "/industries/public-sector" },
  { label: "Travel & Hospitality", href: "/industries/travel-hospitality" },
];

const OUTCOMES = [
  {
    icon: Zap,
    accent: "#8B7CFF",
    title: "Faster resolution",
    desc: "Incidents and requests move through one governed queue instead of scattered inboxes, so response times drop and nothing falls through.",
  },
  {
    icon: TrendingUp,
    accent: "#F45B9E",
    title: "Fewer escalations",
    desc: "Context travels with the ticket, so agents resolve on first contact instead of bouncing cases between teams.",
  },
  {
    icon: FileCheck2,
    accent: "#F5B942",
    title: "A full audit trail",
    desc: "Every change, approval, and request is logged automatically, so compliance reporting stops being a quarterly scramble.",
  },
  {
    icon: Users,
    accent: "#4EA1FF",
    title: "Higher adoption",
    desc: "Employees use one self-service portal for IT, HR, and support requests, instead of learning five different tools.",
  },
];

const DELIVERABLES = [
  "Discovery workshop and current-state assessment",
  "Workflow blueprint aligned to your operating model",
  "Configured and tested ServiceNow instance",
  "Integration with your existing IT, HR, and business systems",
  "Admin and end-user training",
  "Hypercare support through go-live",
];

const RELATED_INSIGHTS = [
  {
    title: "How Starfii and ServiceNow FSO Are Reimagining Insurance Servicing",
    tag: "Case Study",
  },
  {
    title: "What's Changed in Microsoft Fabric for Responsible AI at Scale",
    tag: "Insight",
  },
];

const FAQS = [
  {
    q: "Is Starfii a certified ServiceNow implementation partner?",
    a: "Yes. We design, build, and run ServiceNow workflows as a certified implementation partner, with engineers who stay accountable through go-live and beyond, not just through the design phase.",
  },
  {
    q: "Which ServiceNow modules do you work with?",
    a: "Our core practice covers ITSM, ITOM, CSM, HR Service Delivery, Source-to-Pay Operations, and custom App Engine Studio builds. If your instance spans other modules, we scope that during the Assess & Advise phase.",
  },
  {
    q: "What does a typical engagement look like?",
    a: "Most engagements start with a discovery workshop and current-state assessment, move into workflow design and configuration, and close with training and hypercare support through go-live. Timelines depend on scope and number of modules involved.",
  },
  {
    q: "Do we need a new ServiceNow license, or can you work with our existing one?",
    a: "We work with your existing ServiceNow license and instance wherever possible. If your licensing doesn't cover the modules you need, we'll flag that during the Assess & Advise phase before any build work starts.",
  },
  {
    q: "Can you integrate ServiceNow with our existing systems?",
    a: "Integration is central to most engagements. We connect ServiceNow to identity providers, ITOM data sources, HRIS, ERP, and other business systems your teams already rely on.",
  },
  {
    q: "Do you support us after go-live?",
    a: "Yes. Our Support & Evolve engagement covers managed support, release upgrades, and ongoing configuration as your workflows and organization change.",
  },
  {
    q: "How does this connect to Starfii's other platforms?",
    a: "Our Zerovity™ platform maps how your applications actually behave, which informs how we configure ServiceNow workflows, so the platform reflects how your systems really run, not just how they're documented.",
  },
];

/* ===============================================================
   SIGNATURE VISUAL — hub-and-spoke diagram
================================================================ */
function WorkflowHub() {
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 200);
    return () => clearTimeout(t);
  }, []);

  const nodes = [
    { label: "ITSM", x: 70, y: 60, accent: "#8B7CFF" },
    { label: "ITOM", x: 330, y: 60, accent: "#F45B9E" },
    { label: "CSM", x: 40, y: 200, accent: "#F5B942" },
    { label: "HRSD", x: 360, y: 200, accent: "#4EA1FF" },
    { label: "S2P", x: 100, y: 330, accent: "#34D399" },
    { label: "AES", x: 300, y: 330, accent: "#22D3EE" },
  ];
  const cx = 200;
  const cy = 195;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[440px]">
      <style>{`
        @keyframes svc-dash { to { stroke-dashoffset: 0; } }
        @keyframes svc-pop { from { opacity: 0; transform: scale(.5); } to { opacity: 1; transform: scale(1); } }
        @keyframes svc-pulse { 0%, 100% { opacity: .5; } 50% { opacity: 1; } }
        .svc-line { stroke-dasharray: 260; stroke-dashoffset: 260; }
        .svc-line.svc-run { animation: svc-dash 1.1s cubic-bezier(.4,0,.2,1) forwards; }
        .svc-node { opacity: 0; transform-origin: center; }
        .svc-node.svc-run { animation: svc-pop .5s cubic-bezier(.34,1.56,.64,1) forwards; }
        .svc-core { animation: svc-pulse 2.6s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .svc-line, .svc-node { animation: none !important; stroke-dashoffset: 0 !important; opacity: 1 !important; }
        }
      `}</style>
      <svg viewBox="0 0 400 390" className="h-full w-full" fill="none">
        <defs>
          <radialGradient id="svc-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={primary} stopOpacity="0.55" />
            <stop offset="100%" stopColor={primary} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx={cx} cy={cy} r={90} fill="url(#svc-glow)" />

        {nodes.map((n, i) => (
          <line
            key={n.label}
            x1={cx}
            y1={cy}
            x2={n.x}
            y2={n.y}
            stroke={n.accent}
            strokeOpacity={0.45}
            strokeWidth={2}
            className={`svc-line ${started ? "svc-run" : ""}`}
            style={{ animationDelay: `${i * 90}ms` }}
          />
        ))}

        <g className={`svc-node ${started ? "svc-run" : ""}`} style={{ animationDelay: "550ms" }}>
          <circle cx={cx} cy={cy} r={46} className="svc-core" fill="#12121C" stroke={primary} strokeWidth={1.5} />
          <text x={cx} y={cy - 3} textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight={700}>
            ServiceNow
          </text>
          <text x={cx} y={cy + 14} textAnchor="middle" fill="#B7ACFF" fontSize="10" fontWeight={600}>
            One platform
          </text>
        </g>

        {nodes.map((n, i) => (
          <g key={n.label} className={`svc-node ${started ? "svc-run" : ""}`} style={{ animationDelay: `${650 + i * 90}ms` }}>
            <circle cx={n.x} cy={n.y} r={30} fill="#12121C" stroke={n.accent} strokeWidth={1.5} />
            <text x={n.x} y={n.y + 4} textAnchor="middle" fill="#FFFFFF" fontSize="11.5" fontWeight={700}>
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ===============================================================
   AMBIENT BACKGROUND
================================================================ */
function AmbientGlow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <style>{`
        @keyframes drift1 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(40px,-30px); } }
        @keyframes drift2 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-30px,40px); } }
        .drift-a { animation: drift1 16s ease-in-out infinite; }
        .drift-b { animation: drift2 18s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .drift-a, .drift-b { animation: none; } }
      `}</style>
      <div
        className="drift-a absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full opacity-25 blur-[120px]"
        style={{ background: "radial-gradient(circle, #7C5CFC, transparent 70%)" }}
      />
      <div
        className="drift-b absolute -right-40 top-1/3 h-[480px] w-[480px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, #F45B9E, transparent 70%)" }}
      />
    </div>
  );
}

/* ===============================================================
   TRUST BADGES — small pill row under the hero copy
================================================================ */
function TrustBadges() {
  const badges = [
    { icon: ShieldCheck, label: "Certified Implementation Partner" },
    { icon: Sparkles, label: "AI-Led Delivery" },
    { icon: Layers, label: "Full-Stack Platform Coverage" },
  ];
  return (
    <div className="flex flex-wrap gap-3">
      {badges.map((b) => {
        const Icon = b.icon;
        return (
          <span
            key={b.label}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[12.5px] font-medium text-white/70"
          >
            <Icon size={14} style={{ color: primary }} />
            {b.label}
          </span>
        );
      })}
    </div>
  );
}

/* ===============================================================
   FAQ ACCORDION
================================================================ */
function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-white/10 py-2">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-[16px] font-semibold text-white">{q}</span>
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          <Plus size={16} className="text-white/70" />
        </span>
      </button>
      <div
        className="grid overflow-hidden transition-all duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div ref={ref} className="min-h-0 overflow-hidden">
          <p className="pb-5 pr-12 text-[14.5px] leading-relaxed text-white/55">{a}</p>
        </div>
      </div>
    </div>
  );
}

/* ===============================================================
   PAGE
================================================================ */
export default function ServiceNowPage() {
  return (
    <main className="relative overflow-hidden bg-[#08080D] text-white">
      <style>{`
        @keyframes svc-target-flash {
          0% { box-shadow: 0 0 0 0 var(--accent); }
          30% { box-shadow: 0 0 0 3px var(--accent), 0 24px 70px -20px var(--glow); }
          100% { box-shadow: 0 0 0 2px var(--accent), 0 24px 70px -20px var(--glow); }
        }
        .svc-target:target {
          border-color: var(--accent);
          animation: svc-target-flash 1.4s ease-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .svc-target:target { animation: none; box-shadow: 0 0 0 2px var(--accent); }
        }
      `}</style>
      <AmbientGlow />

      {/* ---------------- HERO ---------------- */}
      <section className="relative pt-[150px] pb-20 lg:pt-[180px] lg:pb-28">
        <div className={`relative grid grid-cols-1 items-center gap-16 lg:grid-cols-2 ${CONTAINER}`}>
          <div>
            <Reveal>
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: primary }}>
                ServiceNow Practice
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 text-[38px] font-bold leading-[1.12] tracking-tight sm:text-[46px] lg:text-[52px]">
                Every workflow.
                <br />
                One platform.
                <br />
                <span style={{ color: primary }}>Zero friction.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-white/55">
                As a certified ServiceNow implementation partner, Starfii
                designs, builds, and runs ServiceNow workflows that connect
                IT, customer service, and HR operations on a single
                platform, backed by an AI-led engineering practice that
                treats ServiceNow as core infrastructure, not a side project.
              </p>
            </Reveal>
            <Reveal delay={220} className="pt-7">
              <TrustBadges />
            </Reveal>
            <Reveal delay={280} className="flex flex-wrap items-center gap-3 pt-8">
              <button
                type="button"
                className="flex h-12 items-center gap-2 rounded-md px-6 text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{ backgroundColor: primary }}
              >
                <MessageSquare size={17} strokeWidth={2.25} />
                Talk to us
              </button>
              <a
                href="#capabilities"
                className="flex h-12 items-center gap-1.5 rounded-md border border-white/15 px-6 text-[15px] font-semibold text-white/85 transition-colors duration-150 hover:bg-white/5"
              >
                See what we deliver
                <ArrowUpRight size={16} />
              </a>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <WorkflowHub />
          </Reveal>
        </div>
      </section>

      {/* ---------------- CAPABILITIES ---------------- */}
      <section id="capabilities" className="relative py-20 lg:py-28">
        <div className={`relative ${CONTAINER}`}>
          <Reveal className="max-w-2xl">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: primary }}>
              What we run on ServiceNow
            </p>
            <h2 className="mt-4 text-[30px] font-bold leading-tight tracking-tight sm:text-[36px]">
              Six modules. One consistent way of working.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/50">
              Every module below is delivered by the same team, on the same
              platform conventions, so your workflows stay consistent as
              they scale across departments.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {CAPABILITIES.map((c, i) => (
              <GlowCard
                key={c.number}
                id={c.id}
                number={c.number}
                icon={c.icon}
                accent={c.accent}
                title={c.title}
                desc={c.desc}
                items={c.items}
                delay={i * 70}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- OUTCOMES ---------------- */}
      <section className="relative border-y border-white/10 bg-white/[0.015] py-20 lg:py-24">
        <div className={`relative ${CONTAINER}`}>
          <Reveal className="max-w-2xl">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: primary }}>
              What changes for your teams
            </p>
            <h2 className="mt-4 text-[28px] font-bold leading-tight tracking-tight sm:text-[32px]">
              Outcomes teams actually feel, not just dashboards that say so.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {OUTCOMES.map((o, i) => {
              const Icon = o.icon;
              return (
                <Reveal key={o.title} delay={i * 80}>
                  <div className="h-full rounded-xl border border-white/10 bg-white/[0.025] p-6 transition-colors duration-200 hover:border-white/20">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/[0.06]">
                      <Icon size={20} strokeWidth={2} style={{ color: o.accent }} />
                    </div>
                    <h3 className="mt-5 text-[15.5px] font-bold">{o.title}</h3>
                    <p className="mt-2.5 text-[13.5px] leading-relaxed text-white/55">{o.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- ENGAGEMENT MODELS ---------------- */}
      <section className="relative py-20 lg:py-28">
        <div className={`relative ${CONTAINER}`}>
          <Reveal className="max-w-2xl">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: primary }}>
              Engagement Models
            </p>
            <h2 className="mt-4 text-[30px] font-bold leading-tight tracking-tight sm:text-[36px]">
              Work with us at whichever stage you're at.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {ENGAGEMENTS.map((e, i) => {
              const Icon = e.icon;
              return (
                <Reveal key={e.title} delay={i * 90}>
                  <div
                    className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--accent)]/40 hover:shadow-[0_24px_70px_-20px_var(--glow)]"
                    style={{ ["--accent" as string]: e.accent, ["--glow" as string]: `${e.accent}55` }}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/[0.06] transition-transform duration-300 group-hover:scale-105">
                      <Icon size={24} strokeWidth={2} style={{ color: e.accent }} />
                    </div>
                    <h3 className="mt-6 text-[19px] font-bold tracking-tight">{e.title}</h3>
                    <div className="mt-3 h-[3px] w-10 rounded-full" style={{ backgroundColor: e.accent }} />
                    <p className="mt-5 text-[14.5px] leading-relaxed text-white/55">{e.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={200} className="mt-14 rounded-2xl border border-white/10 bg-white/[0.025] p-8 lg:p-10">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: primary }}>
                  What's included
                </p>
                <h3 className="mt-3 text-[22px] font-bold leading-snug tracking-tight">
                  Every engagement ends with a working platform, not a slide deck.
                </h3>
              </div>
              <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                {DELIVERABLES.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-white/75">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0" style={{ color: primary }} />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- INDUSTRIES ---------------- */}
      <section className="relative py-20 lg:py-24">
        <div className={`relative ${CONTAINER}`}>
          <Reveal className="max-w-2xl">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: primary }}>
              Industries
            </p>
            <h2 className="mt-4 text-[26px] font-bold leading-tight tracking-tight sm:text-[30px]">
              ServiceNow workflows, tuned to your sector.
            </h2>
          </Reveal>

          <Reveal delay={100} className="mt-9 flex flex-wrap gap-3">
            {INDUSTRIES.map((ind) => (
              <a
                key={ind.label}
                href={ind.href}
                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-[13.5px] font-medium text-white/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
              >
                {ind.label}
              </a>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------------- PROCESS ---------------- */}
      <section className="relative py-20 lg:py-28">
        <div className={`relative ${CONTAINER}`}>
          <Reveal className="max-w-2xl">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: primary }}>
              How we deliver
            </p>
            <h2 className="mt-4 text-[30px] font-bold leading-tight tracking-tight sm:text-[36px]">
              A rollout built around how your teams already work.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, i) => (
              <Reveal key={step.number} delay={i * 90}>
                <div
                  className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--accent)]/40 hover:shadow-[0_24px_70px_-20px_var(--glow)]"
                  style={{ ["--accent" as string]: step.accent, ["--glow" as string]: `${step.accent}55` }}
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute right-5 top-1 select-none text-[48px] font-extrabold leading-none text-white/[0.05]"
                  >
                    {step.number}
                  </span>
                  <h3 className="relative text-[17px] font-bold">{step.title}</h3>
                  <div className="mt-3 h-[3px] w-8 rounded-full" style={{ backgroundColor: step.accent }} />
                  <p className="relative mt-4 text-[14px] leading-relaxed text-white/55">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- WHY STARFII ---------------- */}
      <section className="relative border-y border-white/10 bg-white/[0.015] py-20 lg:py-28">
        <div className={`relative grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr] ${CONTAINER}`}>
          <Reveal>
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/50">
              Why Starfii for ServiceNow
            </p>
            <h2 className="mt-4 text-[30px] font-bold leading-tight tracking-tight sm:text-[34px]">
              ServiceNow work, built on an AI-led engineering practice.
            </h2>
            <p className="mt-5 max-w-md text-[14.5px] leading-relaxed text-white/55">
              Your ServiceNow instance doesn't sit in isolation. Our
              Zerovity™ platform maps how your applications actually
              behave, so the workflows we configure reflect how your
              systems really run, not just how they're documented.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {[
              "Certified ServiceNow implementation partner",
              "AI-led delivery through our Zero Friction Enterprise™ approach",
              "Engineers who configure, integrate, and support, not just consult",
              "Delivery informed by Zerovity™ and Tensai®, our own platforms",
            ].map((point, i) => (
              <Reveal key={point} delay={i * 80}>
                <div className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-200 hover:border-white/20">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0" style={{ color: primary }} strokeWidth={2} />
                  <p className="text-[14px] leading-relaxed text-white/75">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="relative py-20 lg:py-28">
        <div className={`relative ${CONTAINER}`}>
          <div className="mx-auto max-w-[880px]">
            <Reveal className="text-center">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: primary }}>
                FAQ
              </p>
              <h2 className="mt-4 text-[28px] font-bold leading-tight tracking-tight sm:text-[32px]">
                Common questions about our ServiceNow practice
              </h2>
            </Reveal>

            <Reveal delay={100} className="mt-10">
              {FAQS.map((f, i) => (
                <FaqItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- RELATED INSIGHTS ---------------- */}
      <section className="relative border-t border-white/10 py-20 lg:py-24">
        <div className={`relative ${CONTAINER}`}>
          <Reveal className="max-w-2xl">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: primary }}>
              Related Insights
            </p>
            <h2 className="mt-4 text-[26px] font-bold leading-tight tracking-tight sm:text-[30px]">
              More on how we put ServiceNow to work
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {RELATED_INSIGHTS.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <a
                  href="#"
                  className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/25"
                >
                  <div>
                    <span
                      className="text-[11px] font-semibold uppercase tracking-[0.14em]"
                      style={{ color: primary }}
                    >
                      {item.tag}
                    </span>
                    <h3 className="mt-3 text-[17px] font-semibold leading-snug text-white">
                      {item.title}
                    </h3>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-white/80">
                    Read more
                    <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="relative py-20 lg:py-24">
        <div className={`relative ${CONTAINER}`}>
          <Reveal>
            <div
              className="flex flex-col items-start justify-between gap-8 rounded-2xl border border-white/10 bg-white/[0.03] p-10 sm:flex-row sm:items-center lg:p-14"
              style={{ boxShadow: `0 30px 90px -30px ${primary}40` }}
            >
              <div>
                <h2 className="text-[26px] font-bold leading-tight tracking-tight sm:text-[30px]">
                  Ready to put ServiceNow to work?
                </h2>
                <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-white/55">
                  Tell us which workflows are slowing your teams down. We'll
                  show you how they fit inside a single ServiceNow instance.
                </p>
              </div>
              <button
                type="button"
                className="flex h-12 shrink-0 items-center gap-2 rounded-md px-7 text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{ backgroundColor: primary }}
              >
                <MessageSquare size={17} strokeWidth={2.25} />
                Talk to us
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
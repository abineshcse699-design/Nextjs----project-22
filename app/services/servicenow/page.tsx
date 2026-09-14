// Save this file as: app/services/servicenow/page.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  MessageSquare,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Layers,
  AlertCircle,
  Search,
  GitBranch,
  Inbox,
  LayoutGrid,
  Database,
  Boxes,
  Zap,
  Plug,
  Code2,
} from "lucide-react";

/* ===============================================================
   NOTE ON SEO METADATA
   ------------------------------------------------------------
   This file is a Client Component ("use client"), so it cannot
   export a `metadata` object directly (Next.js App Router only
   reads `metadata` / `generateMetadata` from Server Components).

   Create a sibling file at:  app/services/servicenow/layout.tsx
   (Server Component, no "use client") with the block below, so the
   <title>, meta description, keywords and Open Graph tags are
   emitted correctly for Google/Bing to index:

   export const metadata = {
     title: "ServiceNow ITSM Services | ServiceNow Implementation Partner – Starfii",
     description:
       "Design, implement and optimize ServiceNow solutions that modernize enterprise IT service management. Certified ServiceNow ITSM consulting, implementation, and managed support.",
     keywords: [
       "ServiceNow ITSM",
       "ServiceNow ITSM services",
       "ServiceNow consulting",
       "ServiceNow implementation",
       "incident management",
       "problem management",
       "change management",
       "request management",
       "service catalog",
       "CMDB",
       "IT asset management",
       "workflow automation",
       "ServiceNow integrations",
       "ServiceNow custom applications",
       "ServiceNow optimization",
       "ServiceNow support and managed services",
     ],
     openGraph: {
       title: "ServiceNow ITSM Services | Starfii",
       description:
         "Design, implement and optimize ServiceNow solutions that modernize enterprise IT service management.",
       url: "https://www.starfii.com/services/servicenow",
       siteName: "Starfii Technology",
       type: "website",
     },
     alternates: {
       canonical: "https://www.starfii.com/services/servicenow",
     },
   };
================================================================ */

/* ===============================================================
   DESIGN TOKENS
================================================================ */
const primary = "#7C5CFC";

/* ===============================================================
   SHARED CONTAINER — this single string controls the left/right
   edge of EVERY section on the page. Change it here once and every
   section moves together.
================================================================ */
const CONTAINER = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

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
   description. Used for the ITSM capability grid.
================================================================ */
function GlowCard({
  id,
  icon: Icon,
  number,
  title,
  accent,
  desc,
  delay = 0,
}: {
  id?: string;
  icon: React.ElementType;
  number: string;
  title: string;
  accent: string;
  desc: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div
        id={id}
        className="svc-target group relative h-full scroll-mt-32 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--accent)]/40 hover:shadow-[0_24px_70px_-20px_var(--glow)]"
        style={{ ["--accent" as string]: accent, ["--glow" as string]: `${accent}55` }}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute right-5 top-1 select-none text-[52px] font-extrabold leading-none text-white/[0.05] transition-colors duration-300 group-hover:text-white/[0.08]"
        >
          {number}
        </span>

        <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.06] transition-transform duration-300 group-hover:scale-105">
          <Icon size={22} strokeWidth={2} style={{ color: accent }} />
        </div>

        <h3 className="relative mt-5 text-[17px] font-bold tracking-tight text-white">{title}</h3>
        <div
          className="mt-3 h-[3px] w-9 rounded-full transition-all duration-300 group-hover:w-12"
          style={{ backgroundColor: accent }}
        />
        <p className="relative mt-4 text-[13.5px] leading-relaxed text-white/55">{desc}</p>
      </div>
    </Reveal>
  );
}

/* ===============================================================
   SPLIT SECTION — eyebrow + heading + copy on one side, a checklist
   of points on the other. Reused for Consulting, Implementation,
   Optimization, and Support & Managed Services.
================================================================ */
function SplitSection({
  eyebrow,
  title,
  desc,
  points,
  reverse = false,
  bordered = false,
}: {
  eyebrow: string;
  title: string;
  desc: string;
  points: string[];
  reverse?: boolean;
  bordered?: boolean;
}) {
  return (
    <section
      className={`relative py-16 lg:py-20 ${
        bordered ? "border-y border-white/10 bg-white/[0.015]" : ""
      }`}
    >
      <div className={`relative grid grid-cols-1 items-center gap-14 lg:grid-cols-2 ${CONTAINER}`}>
        <Reveal className={reverse ? "lg:order-2" : ""}>
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: primary }}>
            {eyebrow}
          </p>
          <h2 className="mt-4 text-[28px] font-bold leading-tight tracking-tight sm:text-[34px]">
            {title}
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/55">{desc}</p>
        </Reveal>

        <Reveal delay={120} className={reverse ? "lg:order-1" : ""}>
          <ul className="space-y-4">
            {points.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-5 text-[14px] leading-relaxed text-white/75 transition-colors duration-200 hover:border-white/20"
              >
                <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: primary }} />
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ===============================================================
   DATA
================================================================ */

// ITSM overview + the 10 capabilities from the outline
const CAPABILITIES = [
  {
    id: "incident-management",
    number: "01",
    icon: AlertCircle,
    accent: "#8B7CFF",
    title: "Incident Management",
    desc: "Log, prioritize, and resolve incidents through one governed queue, so nothing sits unassigned and every SLA is visible in real time.",
  },
  {
    id: "problem-management",
    number: "02",
    icon: Search,
    accent: "#F45B9E",
    title: "Problem Management",
    desc: "Trace recurring incidents back to root cause and track the fix through to closure, instead of firefighting the same issue every month.",
  },
  {
    id: "change-management",
    number: "03",
    icon: GitBranch,
    accent: "#F5B942",
    title: "Change Management",
    desc: "Route every change through the right approvals and risk checks automatically, so releases stay controlled without slowing teams down.",
  },
  {
    id: "request-management",
    number: "04",
    icon: Inbox,
    accent: "#4EA1FF",
    title: "Request Management",
    desc: "Give employees a single place to ask for what they need, with status tracking that replaces email threads and follow-up pings.",
  },
  {
    id: "service-catalog",
    number: "05",
    icon: LayoutGrid,
    accent: "#34D399",
    title: "Service Catalog",
    desc: "Present every IT service as a clear, orderable item with the right approvals built in, so requesting something is a click, not a ticket essay.",
  },
  {
    id: "cmdb",
    number: "06",
    icon: Database,
    accent: "#22D3EE",
    title: "CMDB",
    desc: "Keep a live, accurate map of your infrastructure and its dependencies, so impact analysis is a lookup instead of a guess.",
  },
  {
    id: "it-asset-management",
    number: "07",
    icon: Boxes,
    accent: "#8B7CFF",
    title: "IT Asset Management",
    desc: "Track hardware, software, and license usage against your CMDB, so renewals, audits, and spend are never a last-minute scramble.",
  },
  {
    id: "workflow-automation",
    number: "08",
    icon: Zap,
    accent: "#F45B9E",
    title: "Workflow Automation",
    desc: "Automate the repetitive parts of ITSM, approvals, assignments, notifications, so your team spends time on the work that needs judgment.",
  },
  {
    id: "integrations",
    number: "09",
    icon: Plug,
    accent: "#F5B942",
    title: "Integrations",
    desc: "Connect ServiceNow ITSM to identity providers, monitoring tools, and the rest of your IT stack, so data flows in one direction, not five.",
  },
  {
    id: "custom-applications",
    number: "10",
    icon: Code2,
    accent: "#4EA1FF",
    title: "Custom Applications",
    desc: "For the workflows the out of the box platform doesn't cover, we build governed, low code applications on the same ServiceNow instance.",
  },
];

const CONSULTING_POINTS = [
  "Current state assessment of your ITSM workflows, licensing, and technical debt",
  "Gap analysis against ServiceNow ITSM best practice and your operating model",
  "A prioritized implementation roadmap with a clear business case",
  "Recommendations on which ITSM modules to adopt first, and in what order",
];

const IMPLEMENTATION_POINTS = [
  "End to end configuration of incident, problem, change, and request management",
  "Service catalog, CMDB, and IT asset management set up against your real data",
  "Integrations with your identity provider, monitoring tools, and business systems",
  "Admin and end user training, plus hypercare support through go live",
];

const OPTIMIZATION_POINTS = [
  "Regular health checks against ITSM KPIs: resolution time, escalations, backlog age",
  "License and usage optimization so you pay for what teams actually use",
  "Workflow tuning as ticket volumes, teams, and priorities change",
  "Release upgrade planning so your instance stays current without disruption",
];

const SUPPORT_POINTS = [
  "Ongoing ServiceNow ITSM managed support with defined response times",
  "Proactive monitoring of instance health and upcoming release changes",
  "A named team that knows your configuration, not a rotating help desk",
  "Flexible support tiers, from break-fix to fully managed operations",
];

const CASE_STUDIES = [
  {
    title: "How Starfii and ServiceNow FSO Are Reimagining Insurance Servicing",
    tag: "Case Study",
  },
  {
    title: "Cutting Incident Resolution Time by 40% with a Unified ITSM Rollout",
    tag: "Case Study",
  },
];

/* ===============================================================
   SIGNATURE VISUAL — hub-and-spoke diagram of core ITSM processes
================================================================ */
function ITSMHub() {
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 200);
    return () => clearTimeout(t);
  }, []);

  const nodes = [
    { label: "Incident", x: 70, y: 60, accent: "#8B7CFF" },
    { label: "Problem", x: 330, y: 60, accent: "#F45B9E" },
    { label: "Change", x: 40, y: 200, accent: "#F5B942" },
    { label: "Request", x: 360, y: 200, accent: "#4EA1FF" },
    { label: "Catalog", x: 100, y: 330, accent: "#34D399" },
    { label: "CMDB", x: 300, y: 330, accent: "#22D3EE" },
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
            ITSM
          </text>
        </g>

        {nodes.map((n, i) => (
          <g key={n.label} className={`svc-node ${started ? "svc-run" : ""}`} style={{ animationDelay: `${650 + i * 90}ms` }}>
            <circle cx={n.x} cy={n.y} r={30} fill="#12121C" stroke={n.accent} strokeWidth={1.5} />
            <text x={n.x} y={n.y + 4} textAnchor="middle" fill="#FFFFFF" fontSize="10.5" fontWeight={700}>
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
    { icon: ShieldCheck, label: "Certified ServiceNow Implementation Partner" },
    { icon: Sparkles, label: "AI Led ITSM Delivery" },
    { icon: Layers, label: "End-to-End ITSM Coverage" },
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
   STRUCTURED DATA (JSON-LD)
================================================================ */
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "ServiceNow ITSM Implementation and Consulting",
  provider: {
    "@type": "Organization",
    name: "Starfii Technology",
    url: "https://www.starfii.com/",
  },
  areaServed: "Worldwide",
  description:
    "Design, implement and optimize ServiceNow solutions that modernize enterprise IT service management, covering incident, problem, change, and request management, service catalog, CMDB, IT asset management, workflow automation, integrations, and custom applications.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "ServiceNow ITSM Services",
    itemListElement: CAPABILITIES.map((c) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: c.title,
        description: c.desc,
      },
    })),
  },
};

/* ===============================================================
   PAGE
================================================================ */
export default function ServiceNowITSMPage() {
  return (
    <main className="relative overflow-hidden bg-[#08080D] text-white">
      {/* JSON-LD structured data — read by search + AI answer engines,
         invisible to human visitors. Keep this in sync if CAPABILITIES
         copy changes. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSON_LD) }}
      />
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

      {/* ---------------- HERO — ServiceNow overview ---------------- */}
      <section className="relative pt-[150px] pb-20 lg:pt-[180px] lg:pb-28">
        <div className={`relative grid grid-cols-1 items-center gap-16 lg:grid-cols-2 ${CONTAINER}`}>
          <div>
            <Reveal>
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: primary }}>
                ServiceNow ITSM Implementation Partner
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 text-[38px] font-bold leading-[1.12] tracking-tight sm:text-[46px] lg:text-[52px]">
                ServiceNow ITSM
                <br />
                <span style={{ color: primary }}>Services</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-white/55">
                Design, implement and optimize ServiceNow solutions that
                modernize enterprise IT service management. Starfii is a
                certified ServiceNow implementation partner covering the
                full ITSM lifecycle, from incident and change management to
                CMDB, workflow automation, and custom applications.
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
                Talk to a ServiceNow expert
              </button>
              <a
                href="#itsm"
                className="flex h-12 items-center gap-1.5 rounded-md border border-white/15 px-6 text-[15px] font-semibold text-white/85 transition-colors duration-150 hover:bg-white/5"
              >
                See our ITSM capabilities
                <ArrowUpRight size={16} />
              </a>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <ITSMHub />
          </Reveal>
        </div>
      </section>

      {/* ---------------- SERVICENOW CONSULTING ---------------- */}
      <SplitSection
        eyebrow="ServiceNow Consulting"
        title="Start with a clear picture of where ITSM stands today."
        desc="Our ServiceNow consulting engagement reviews your current workflows, licensing, and technical debt, and closes with a prioritized roadmap, so every implementation decision is backed by a business case, not a guess."
        points={CONSULTING_POINTS}
      />

      {/* ---------------- SERVICENOW IMPLEMENTATION ---------------- */}
      <SplitSection
        eyebrow="ServiceNow Implementation"
        title="A ServiceNow ITSM build that matches how your teams actually work."
        desc="Certified engineers configure, integrate, and test every ITSM workflow against your real systems and data, then stay through training and go live, so the platform is adopted, not just switched on."
        points={IMPLEMENTATION_POINTS}
        reverse
        bordered
      />

      {/* ---------------- ITSM CAPABILITIES ---------------- */}
      <section id="itsm" className="relative py-20 lg:py-28">
        <div className={`relative ${CONTAINER}`}>
          <Reveal className="max-w-2xl">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: primary }}>
              ITSM
            </p>
            <h2 className="mt-4 text-[30px] font-bold leading-tight tracking-tight sm:text-[36px]">
              Everything IT Service Management needs, on one instance.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/50">
              From incident and problem management through to CMDB, asset
              tracking, and custom applications, every capability below is
              delivered by the same certified ServiceNow team, on the same
              platform conventions.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((c, i) => (
              <GlowCard
                key={c.number}
                id={c.id}
                number={c.number}
                icon={c.icon}
                accent={c.accent}
                title={c.title}
                desc={c.desc}
                delay={i * 60}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- OPTIMIZATION ---------------- */}
      <SplitSection
        eyebrow="Optimization"
        title="ITSM that keeps getting better after go live."
        desc="A ServiceNow instance drifts out of shape as teams, ticket volumes, and priorities change. We run regular health checks and tune workflows and licensing so ITSM keeps up with the business, not the other way round."
        points={OPTIMIZATION_POINTS}
        bordered
      />

      {/* ---------------- SUPPORT AND MANAGED SERVICES ---------------- */}
      <SplitSection
        eyebrow="Support and Managed Services"
        title="A team that knows your instance, on call when you need them."
        desc="Our ServiceNow ITSM managed support covers day to day break-fix, release upgrades, and platform governance, delivered by a named team rather than a rotating help desk."
        points={SUPPORT_POINTS}
        reverse
      />

      {/* ---------------- CASE STUDIES ---------------- */}
      <section className="relative border-t border-white/10 py-20 lg:py-24">
        <div className={`relative ${CONTAINER}`}>
          <Reveal className="max-w-2xl">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: primary }}>
              Case Studies
            </p>
            <h2 className="mt-4 text-[26px] font-bold leading-tight tracking-tight sm:text-[30px]">
              How teams put ServiceNow ITSM to work
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {CASE_STUDIES.map((item, i) => (
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
                  Ready to put ServiceNow ITSM to work?
                </h2>
                <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-white/55">
                  Tell us which ITSM workflows are slowing your teams down.
                  We'll show you how they fit inside a single ServiceNow
                  instance, built and supported by a certified ServiceNow
                  implementation partner.
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
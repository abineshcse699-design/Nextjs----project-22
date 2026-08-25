// app/services/digital-software/page.tsx
"use client";

import {
  ArrowUpRight,
  ChevronRight,
  Sparkles,
  Cpu,
  Cloud,
  Layers3,
  Rocket,
  BarChart3,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

/* ===============================================================
   DESIGN TOKENS — kept identical to Navbar.tsx / Enterprise
   Platforms page so every service page shares one visual language.
================================================================ */
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
const ALIGN = "mx-auto max-w-[1830px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12";

const technologies = [
  { name: "AI / Gen AI / LLM", detail: "Model selection, fine-tuning, and applied Gen AI features built into your product roadmap." },
  { name: "Cloud — AWS, Azure, GCP", detail: "Cloud-native architecture, migration, and managed operations across all three major providers." },
  { name: "React & Modern Frontend", detail: "Component-driven web and mobile front ends built for speed, accessibility, and scale." },
  { name: "Node / Java / .NET", detail: "Backend services and APIs engineered for reliability under real production load." },
  { name: "Data & Analytics — BI", detail: "Data pipelines, warehousing, and Tableau/Power BI dashboards that turn data into decisions." },
  { name: "DevOps & CI/CD", detail: "Automated pipelines, test automation, and infrastructure-as-code baked into every release." },
];

const capabilities = [
  { icon: Rocket, title: "Enterprise Product Engineering", desc: "We co-create digital products end to end — from ideation through launch — with an AI-assisted framework built for measurable growth." },
  { icon: Cpu, title: "Enterprise AI/ML & Gen AI", desc: "We identify the right models for your business problem and ship Gen AI features that solve it, not just demo it." },
  { icon: Layers3, title: "SaaS Product Engineering", desc: "Fintech, healthcare, and e-commerce SaaS platforms built for Fortune 500 scale, security, and compliance from day one." },
  { icon: Cloud, title: "Cloud Engineering", desc: "Comprehensive cloud engineering on AWS, Azure, and GCP — architecture, migration, and ongoing managed operations." },
  { icon: BarChart3, title: "Data Engineering & BI", desc: "Certified data engineers and data scientists turn fragmented data into a single source of truth for the business." },
  { icon: ShieldCheck, title: "DevOps, QA & Security", desc: "Test automation and DevOps built into every stage of delivery, backed by a cyber framework that protects the whole estate." },
];

const engagementSteps = [
  { title: "Shape", desc: "Product-led discovery turns your vision into a structured, phased roadmap aligned to business outcomes." },
  { title: "Build", desc: "Applications engineered in sprints, with AI embedded in delivery itself — not bolted on after the fact." },
  { title: "Modernize", desc: "Legacy estate assessed and migrated to a scalable platform, with minimal disruption to live operations." },
  { title: "Scale", desc: "AI connected across applications, data, and operations so intelligence compounds across the enterprise." },
];

export default function DigitalSoftwareServicesPage() {
  return (
    <main className="bg-white">
      {/* ===================== HERO ===================== */}
      <section className={`${T.inkBg} relative overflow-hidden pt-[88px] pb-14 sm:pt-[118px] sm:pb-20`}>
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
              <span className="text-white/75">Digital & Software Solutions</span>
            </nav>
            <h1 className="mt-6 max-w-xl text-[40px] font-bold leading-[1.1] text-white sm:text-[52px]">
              Digital and Software Services{" "}
              <span className="text-[#8FA8FF]">for Modern Enterprises</span>
            </h1>
            <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-white/70">
              We design, engineer, and modernize the digital products that run
              your business — turning ideas into scalable software with
              AI-driven engineering and faster delivery cycles.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#connect" className={`inline-flex h-12 items-center gap-2 rounded-md px-6 text-[15px] font-semibold text-white transition-colors duration-150 ${T.primaryBg} ${T.primaryHoverBg}`}>
                Connect Now
                <ArrowUpRight size={16} />
              </a>
              <a href="#capabilities" className="inline-flex h-12 items-center gap-2 rounded-md border border-white/20 px-6 text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-white/10">
                See what we deliver
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">
                Capabilities in scope
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {["Product Eng.", "Gen AI / LLM", "SaaS Eng.", "Cloud", "Data & BI", "DevOps & QA"].map((name) => (
                  <div key={name} className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-[14px] font-medium text-white/85">
                    {name}
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="text-[28px] font-bold text-white">40%</p>
                <p className="mt-1 text-[13px] leading-relaxed text-white/55">
                  Average productivity lift from AI embedded in the delivery process
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== OVERVIEW ===================== */}
      <section className={`${ALIGN} py-20`}>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className={`text-[28px] font-bold ${T.ink}`}>
              One product team, from idea to scaled platform
            </h2>
            <p className={`mt-5 text-[15.5px] leading-relaxed ${T.muted}`}>
              A leader in digital products and software engineering, Starfii
              designs and engineers customer-centric digital experiences
              while modernizing complex application portfolios for speed
              and scale. Our teams stay engaged past launch — tuning
              performance, closing integration gaps, and keeping the
              product aligned as your business changes.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Product-led roadmaps that go beyond planning into real delivery",
                "AI embedded in the engineering process itself, not bolted on after",
                "SaaS products shipped for Fortune 500 clients across fintech, healthcare, and retail",
                "A named delivery lead accountable for the engagement end to end",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className={`mt-0.5 shrink-0 ${T.primary}`} />
                  <span className={`text-[14.5px] leading-relaxed ${T.ink}`}>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`rounded-2xl border ${T.border} ${T.panelBg} p-8`}>
            <p className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${T.primary}`}>
              Why enterprises pick us
            </p>
            <div className="mt-6 space-y-6">
              <div>
                <p className={`text-[28px] font-bold ${T.ink}`}>40%</p>
                <p className={`mt-1 text-[13.5px] ${T.muted}`}>
                  Average productivity lift from AI-led engineering
                </p>
              </div>
              <div>
                <p className={`text-[28px] font-bold ${T.ink}`}>12+</p>
                <p className={`mt-1 text-[13.5px] ${T.muted}`}>
                  Digital and software capabilities under one delivery model
                </p>
              </div>
              <div>
                <p className={`text-[28px] font-bold ${T.ink}`}>Fortune 500</p>
                <p className={`mt-1 text-[13.5px] ${T.muted}`}>
                  SaaS products shipped for leading enterprise clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CAPABILITIES ===================== */}
      <section id="capabilities" className={`${T.panelBg} border-y ${T.border}`}>
        <div className={`${ALIGN} py-20`}>
          <h2 className={`text-[28px] font-bold ${T.ink}`}>What we deliver</h2>
          <p className={`mt-3 max-w-2xl text-[15px] leading-relaxed ${T.muted}`}>
            Plan, design, and scale customer-centric digital products with
            AI-led engineering and modernization strategies that drive
            speed and long-term business value.
          </p>
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

      {/* ===================== TECHNOLOGIES ===================== */}
      <section id="technologies" className={`${ALIGN} py-20`}>
        <h2 className={`text-[28px] font-bold ${T.ink}`}>Technologies we work in</h2>
        <p className={`mt-3 max-w-2xl text-[15px] leading-relaxed ${T.muted}`}>
          Certified engineering teams across the stacks and platforms modern digital products run on.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((t) => (
            <div key={t.name} className={`border-l-2 ${T.border} pl-5`}>
              <h4 className={`text-[16px] font-semibold ${T.ink}`}>{t.name}</h4>
              <p className={`mt-1.5 text-[13.5px] leading-relaxed ${T.muted}`}>{t.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== ENGAGEMENT MODEL ===================== */}
      <section className={`${T.inkBg}`}>
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

      {/* ===================== KEY TAKEAWAYS ===================== */}
      <section className={`${ALIGN} py-20`}>
        <div className={`rounded-2xl border ${T.border} ${T.panelBg} p-8`}>
          <p className={`flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] ${T.primary}`}>
            <Sparkles size={15} />
            Key takeaways
          </p>
          <ul className="mt-6 space-y-4">
            {[
              "Starfii is a leader in digital products and AI-driven software engineering.",
              "We design customer-centric digital experiences and modernize complex application portfolios.",
              "Our focus spans product engineering, digital experience, and digital strategy consulting.",
              "We turn ideas into scalable products through AI-led engineering and faster delivery cycles.",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2 size={18} className={`mt-0.5 shrink-0 ${T.primary}`} />
                <span className={`text-[14.5px] leading-relaxed ${T.ink}`}>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section id="connect" className={`${ALIGN} pb-20`}>
        <div className={`flex flex-col items-start justify-between gap-6 rounded-2xl border ${T.border} ${T.panelBg} p-10 sm:flex-row sm:items-center`}>
          <div>
            <h3 className={`text-[24px] font-bold ${T.ink}`}>
              Have a digital product idea on the roadmap?
            </h3>
            <p className={`mt-2 text-[14.5px] ${T.muted}`}>
              Tell us what you're trying to build — we'll scope the fastest path to launch.
            </p>
          </div>
          <a href="/contact" className={`inline-flex h-12 shrink-0 items-center gap-2 rounded-md px-6 text-[15px] font-semibold text-white transition-colors duration-150 ${T.primaryBg} ${T.primaryHoverBg}`}>
            Connect Now
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </main>
  );
}
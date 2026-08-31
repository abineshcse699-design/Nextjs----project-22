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
import { motion, type Variants } from "framer-motion";

/* ===============================================================
   DESIGN TOKENS, kept identical to Navbar.tsx / Enterprise
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

/* ===============================================================
   ANIMATION VARIANTS — same easing/stagger recipe used in Hero.tsx,
   so every section on this page feels consistent with the homepage.
================================================================ */
const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.4,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Standard viewport-triggered wrapper props, reused on every below-the-fold section
const revealProps = {
  initial: "hidden" as const,
  whileInView: "visible" as const,
  viewport: { once: true, amount: 0.2 },
};

// SEO note: this page maps directly to Starfii's real homepage
// service list, Enterprise Product Engineering, SaaS Product
// Engineering, Enterprise AI/ML & Gen AI, Cloud Engineering, Data
// Engineering & Data Science, DevOps & Quality Engineering. Facts
// below (3+ locations, 80+ professionals, 20+ clients incl. Fortune
// 500, 5+ years, MVP in 3 months) are pulled from starfii.com.
// Primary keyword targets: "digital software development services",
// "enterprise product engineering", "SaaS product engineering",
// "custom software development company", "AI-driven software
// engineering", "legacy software modernization".

const technologies = [
  { name: "AI, Gen AI & LLM Engineering", detail: "Model selection, fine-tuning, and applied Gen AI features built into your product roadmap." },
  { name: "Cloud Engineering, AWS, Azure, GCP", detail: "Cloud-native architecture, migration, and managed operations across all three major providers." },
  { name: "React & Modern Frontend Development", detail: "Component-driven web and mobile front ends built for speed, accessibility, and scale." },
  { name: "Node, Java & .NET Backend Development", detail: "Backend services and APIs engineered for reliability under real production load." },
  { name: "Data Engineering & BI (Tableau, Power BI)", detail: "Data pipelines, warehousing, and BI dashboards that turn data into decisions." },
  { name: "DevOps & CI/CD Automation", detail: "Automated pipelines, test automation, and infrastructure-as-code baked into every release." },
];

const capabilities = [
  { icon: Rocket, title: "Enterprise Product Engineering", desc: "We co-create digital products end to end, from ideation through launch, with an AI-assisted framework built for measurable growth." },
  { icon: Cpu, title: "Enterprise AI/ML & Generative AI", desc: "We identify the right AI models for your business problem and ship Gen AI features that solve it, not just demo it." },
  { icon: Layers3, title: "SaaS Product Engineering", desc: "Fintech, healthcare, and e-commerce SaaS platforms built for Fortune 500 scale, security, and compliance from day one." },
  { icon: Cloud, title: "Cloud Engineering Services", desc: "Comprehensive cloud engineering on AWS, Azure, and GCP, covering architecture, migration, and ongoing managed operations." },
  { icon: BarChart3, title: "Data Engineering & Data Science", desc: "Certified data engineers and data scientists turn fragmented data into a single source of truth for the business." },
  { icon: ShieldCheck, title: "DevOps, Quality Engineering & Security", desc: "Test automation and DevOps built into every stage of delivery, backed by a cyber framework that protects the whole estate." },
];

const engagementSteps = [
  { title: "Shape", desc: "Product-led discovery turns your vision into a structured, phased software development roadmap aligned to business outcomes." },
  { title: "Build", desc: "Applications engineered in sprints, with AI embedded in delivery itself, not bolted on after the fact." },
  { title: "Modernize", desc: "Legacy software estate assessed and migrated to a scalable platform, with minimal disruption to live operations." },
  { title: "Scale", desc: "AI connected across applications, data, and operations so intelligence compounds across the enterprise." },
];

export default function DigitalSoftwareServicesPage() {
  return (
    <main className="bg-white">
      {/* ===================== HERO ===================== */}
      <section className={`${T.inkBg} relative overflow-hidden pt-[88px] pb-14 sm:pt-[118px] sm:pb-20`}>
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute inset-y-0 right-0 w-[45%]"
          style={{
            background:
              "radial-gradient(60% 80% at 100% 40%, rgba(59,47,224,0.35) 0%, rgba(143,168,255,0.18) 40%, rgba(12,14,42,0) 72%)",
          }}
        />
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className={`relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] ${ALIGN}`}
        >
          <div>
            <motion.nav
              variants={item}
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-[13px] font-medium text-white/50"
            >
              <a href="/" className="transition-colors hover:text-white/80">Home</a>
              <ChevronRight size={13} />
              <a href="/services" className="transition-colors hover:text-white/80">Services</a>
              <ChevronRight size={13} />
              <span className="text-white/75">Digital & Software Solutions</span>
            </motion.nav>
            <motion.h1
              variants={item}
              className="mt-6 max-w-xl text-[40px] font-bold leading-[1.1] text-white sm:text-[52px]"
            >
              Digital Software Development Services{" "}
              <span className="text-[#8FA8FF]">for Modern Enterprises</span>
            </motion.h1>
            <motion.p
              variants={item}
              className="mt-6 max-w-lg text-[17px] leading-relaxed text-white/70"
            >
              We design, engineer, and modernize the digital products that
              run your business, turning ideas into scalable custom
              software with AI-driven engineering and faster delivery
              cycles.
            </motion.p>
            <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
              <motion.a
                href="#connect"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`inline-flex h-12 items-center gap-2 rounded-md px-6 text-[15px] font-semibold text-white transition-colors duration-150 ${T.primaryBg} ${T.primaryHoverBg}`}
              >
                Connect Now
                <ArrowUpRight size={16} />
              </motion.a>
              <motion.a
                href="#capabilities"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex h-12 items-center gap-2 rounded-md border border-white/20 px-6 text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-white/10"
              >
                See what we deliver
              </motion.a>
            </motion.div>
          </div>

          <motion.div variants={item} className="hidden lg:block">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">
                Capabilities in scope
              </p>
              <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="mt-5 grid grid-cols-2 gap-3"
              >
                {["Product Eng.", "Gen AI / LLM", "SaaS Eng.", "Cloud", "Data & BI", "DevOps & QA"].map((name) => (
                  <motion.div
                    key={name}
                    variants={cardItem}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-[14px] font-medium text-white/85"
                  >
                    {name}
                  </motion.div>
                ))}
              </motion.div>
              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="text-[28px] font-bold text-white">80+</p>
                <p className="mt-1 text-[13px] leading-relaxed text-white/55">
                  Skilled professionals delivering digital and software engineering across 3+ locations
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ===================== OVERVIEW ===================== */}
      <section className={`${ALIGN} py-20`}>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div {...revealProps} variants={container}>
            <motion.h2 variants={item} className={`text-[28px] font-bold ${T.ink}`}>
              One product team, from idea to scaled platform
            </motion.h2>
            <motion.p variants={item} className={`mt-5 text-[15.5px] leading-relaxed ${T.muted}`}>
              A digital software development company built for enterprise
              scale, Starfii designs and engineers customer-centric digital
              experiences while modernizing complex application portfolios
              for speed and performance. Our teams stay engaged past
              launch, tuning performance, closing integration gaps, and
              keeping the product aligned as your business changes.
            </motion.p>
            <motion.ul variants={container} className="mt-8 space-y-4">
              {[
                "Product-led software roadmaps that go beyond planning into real delivery",
                "AI embedded in the engineering process itself, not bolted on after",
                "SaaS products shipped for Fortune 500 clients across fintech, healthcare, and retail",
                "MVPs launched within 3 months and full-featured products within 5+ months",
              ].map((point) => (
                <motion.li key={point} variants={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className={`mt-0.5 shrink-0 ${T.primary}`} />
                  <span className={`text-[14.5px] leading-relaxed ${T.ink}`}>{point}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className={`rounded-2xl border ${T.border} ${T.panelBg} p-8`}
          >
            <p className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${T.primary}`}>
              Why enterprises pick us
            </p>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="mt-6 space-y-6"
            >
              <motion.div variants={item}>
                <p className={`text-[28px] font-bold ${T.ink}`}>20+</p>
                <p className={`mt-1 text-[13.5px] ${T.muted}`}>
                  Successful partnerships, including Fortune 500 clients
                </p>
              </motion.div>
              <motion.div variants={item}>
                <p className={`text-[28px] font-bold ${T.ink}`}>5+ yrs</p>
                <p className={`mt-1 text-[13.5px] ${T.muted}`}>
                  Delivering enterprise digital and software engineering solutions
                </p>
              </motion.div>
              <motion.div variants={item}>
                <p className={`text-[28px] font-bold ${T.ink}`}>Fortune 500</p>
                <p className={`mt-1 text-[13.5px] ${T.muted}`}>
                  SaaS products shipped for leading enterprise clients
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===================== CAPABILITIES ===================== */}
      <section id="capabilities" className={`${T.panelBg} border-y ${T.border}`}>
        <div className={`${ALIGN} py-20`}>
          <motion.h2 {...revealProps} variants={item} className={`text-[28px] font-bold ${T.ink}`}>
            What we deliver
          </motion.h2>
          <motion.p
            {...revealProps}
            variants={item}
            className={`mt-3 max-w-2xl text-[15px] leading-relaxed ${T.muted}`}
          >
            Plan, design, and scale customer-centric digital products with
            AI-led software engineering and modernization strategies that
            drive speed and long-term business value.
          </motion.p>
          <motion.div
            {...revealProps}
            variants={container}
            className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {capabilities.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={cardItem}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className={`rounded-xl border ${T.border} bg-white p-6`}
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-md ${T.primaryBg}`}>
                  <Icon size={18} className="text-white" />
                </div>
                <h3 className={`mt-4 text-[16.5px] font-semibold ${T.ink}`}>{title}</h3>
                <p className={`mt-2.5 text-[14px] leading-relaxed ${T.muted}`}>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===================== TECHNOLOGIES ===================== */}
      <section id="technologies" className={`${ALIGN} py-20`}>
        <motion.h2 {...revealProps} variants={item} className={`text-[28px] font-bold ${T.ink}`}>
          Technologies we work in
        </motion.h2>
        <motion.p
          {...revealProps}
          variants={item}
          className={`mt-3 max-w-2xl text-[15px] leading-relaxed ${T.muted}`}
        >
          Certified engineering teams across the stacks and platforms modern digital products run on.
        </motion.p>
        <motion.div
          {...revealProps}
          variants={container}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {technologies.map((t) => (
            <motion.div key={t.name} variants={item} className={`border-l-2 ${T.border} pl-5`}>
              <h4 className={`text-[16px] font-semibold ${T.ink}`}>{t.name}</h4>
              <p className={`mt-1.5 text-[13.5px] leading-relaxed ${T.muted}`}>{t.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===================== ENGAGEMENT MODEL ===================== */}
      <section className={`${T.inkBg}`}>
        <div className={`${ALIGN} py-20`}>
          <motion.h2 {...revealProps} variants={item} className="text-[28px] font-bold text-white">
            How an engagement runs
          </motion.h2>
          <motion.div
            {...revealProps}
            variants={container}
            className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {engagementSteps.map((step, i) => (
              <motion.div key={step.title} variants={item} className="border-t border-white/15 pt-5">
                <p className="text-[13px] font-semibold text-white/50">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h4 className="mt-2 text-[17px] font-semibold text-white">{step.title}</h4>
                <p className="mt-2 text-[13.5px] leading-relaxed text-white/65">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===================== KEY TAKEAWAYS ===================== */}
      <section className={`${ALIGN} py-20`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className={`rounded-2xl border ${T.border} ${T.panelBg} p-8`}
        >
          <p className={`flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] ${T.primary}`}>
            <Sparkles size={15} />
            Key takeaways
          </p>
          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-6 space-y-4"
          >
            {[
              "Starfii is a digital software development company delivering AI-driven engineering for enterprise clients.",
              "We design customer-centric digital experiences and modernize complex application portfolios.",
              "Our focus spans enterprise product engineering, SaaS engineering, cloud, data, and DevOps.",
              "We turn ideas into scalable products through AI-led engineering and faster delivery cycles, backed by SLA support and a free warranty period.",
            ].map((point) => (
              <motion.li key={point} variants={item} className="flex items-start gap-3">
                <CheckCircle2 size={18} className={`mt-0.5 shrink-0 ${T.primary}`} />
                <span className={`text-[14.5px] leading-relaxed ${T.ink}`}>{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </section>

      {/* ===================== CTA ===================== */}
      <section id="connect" className={`${ALIGN} pb-20`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className={`flex flex-col items-start justify-between gap-6 rounded-2xl border ${T.border} ${T.panelBg} p-10 sm:flex-row sm:items-center`}
        >
          <div>
            <h3 className={`text-[24px] font-bold ${T.ink}`}>
              Have a digital product idea on the roadmap?
            </h3>
            <p className={`mt-2 text-[14.5px] ${T.muted}`}>
              Tell us what you're trying to build, we'll scope the fastest path to launch.
            </p>
          </div>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className={`inline-flex h-12 shrink-0 items-center gap-2 rounded-md px-6 text-[15px] font-semibold text-white transition-colors duration-150 ${T.primaryBg} ${T.primaryHoverBg}`}
          >
            Connect Now
            <ArrowUpRight size={16} />
          </motion.a>
        </motion.div>
      </section>
    </main>
  );

}


/*
  SEO checklist for this page (apply outside this component, since
  it's a client component and can't export metadata):

  1. Page <title>: "Digital Software Development Services | Enterprise
     Product Engineering | Starfii Technology" (under 60 chars).
  2. Meta description: "Starfii delivers enterprise product
     engineering, SaaS engineering, AI/Gen AI, cloud, data, and DevOps
     under one team, from idea to scaled platform."
  3. This page maps closely to Starfii's real homepage service list,
     good for topical consistency. Link it directly from /services.

*/

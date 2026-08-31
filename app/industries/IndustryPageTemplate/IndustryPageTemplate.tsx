// components/industries/IndustryPageTemplate.tsx
"use client";

import { ArrowUpRight, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

// components/industries/IndustryPageTemplate.tsx  — only this line changes
const T = {
  ink: "text-[#14163B]",
  inkBg: "bg-[#0C0E2A]",
  primary: "text-[#3B2FE0]",
  primaryBg: "bg-[#3B2FE0]",
  primaryHoverBg: "hover:bg-[#2E24B8]",
  muted: "text-[#5B5D78]",
  border: "border-[#E4E4EF]",
  panelBg: "bg-[#FAFAFD]",
  accentOnDark: "text-[#8FA8FF]",
};

// ✅ Matches the navbar's outer wrapper EXACTLY:
// Navbar.tsx wrapper: mx-auto max-w-[1830px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12
// This makes content start EXACTLY where the white rounded navbar box starts,
// and end EXACTLY where it ends — at every breakpoint, on any screen width.
const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

/* ===============================================================
   ANIMATION VARIANTS — same easing/stagger recipe used across the
   site's Hero and service pages, kept here so every industry page
   generated from this template feels consistent.
================================================================ */
const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.4,
    },
  },
};

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
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

export type IndustryStat = { value: string; label: string };
export type IndustryCapability = { title: string; description: string };
export type IndustrySolution = { label: string };
export type IndustryInsight = { eyebrow: string; title: string; blurb: string };

export type IndustryContent = {
  slug: string;
  name: string;
  kicker: string;
  headline: string;
  description: string;
  stats: IndustryStat[];
  capabilities: IndustryCapability[];
  solutions: IndustrySolution[];
  insight: IndustryInsight;

};


export default function IndustryPageTemplate({ data }: { data: IndustryContent }) {
  return (
    <main className={`${T.ink} bg-white`}>
      {/* HERO */}
      <section className="border-b border-[#E4E4EF]">
        {/* pt-36/44 = clean gap under the floating navbar (navbar ≈ 86px tall incl. its own top margin) */}
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className={`${ALIGN} pb-16 pt-36 lg:pt-44`}
        >
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <div>
              <motion.p
                variants={item}
                className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${T.primary}`}
              >
                {data.kicker}
              </motion.p>
              <motion.h1
                variants={item}
                className="mt-5 max-w-3xl text-[38px] font-bold leading-[1.12] tracking-tight sm:text-[46px] lg:text-[52px]"
              >
                {data.headline}
              </motion.h1>
              <motion.p
                variants={item}
                className={`mt-6 max-w-2xl text-[16.5px] leading-relaxed ${T.muted}`}
              >
                {data.description}
              </motion.p>

              <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex h-11 items-center gap-2 rounded-md px-6 text-[15px] font-semibold text-white transition-colors duration-150 ${T.primaryBg} ${T.primaryHoverBg}`}
                >
                  Talk to us
                </motion.button>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="#capabilities"
                    className={`flex h-11 items-center gap-1.5 rounded-md border ${T.border} px-6 text-[15px] font-semibold ${T.ink} transition-colors duration-150 hover:bg-[#F5F5F9]`}
                  >
                    See what we deliver
                    <ArrowRight size={15} />
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              variants={item}
              className={`overflow-hidden rounded-2xl ${T.inkBg} p-8`}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
                {data.name} at a glance
              </p>
              <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="mt-6 space-y-6"
              >
                {data.stats.map((s) => (
                  <motion.div
                    key={s.label}
                    variants={cardItem}
                    className="border-t border-white/10 pt-5 first:border-t-0 first:pt-0"
                  >
                    <p className={`text-[30px] font-bold leading-none ${T.accentOnDark}`}>{s.value}</p>
                    <p className="mt-2 text-[13.5px] leading-snug text-white/65">{s.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className={`${ALIGN} py-20`}>
        <motion.div {...revealProps} variants={container} className="max-w-xl">
          <motion.h2
            variants={item}
            className="text-[13px] font-semibold uppercase tracking-[0.06em] text-[#8A8CA6]"
          >
            What we deliver
          </motion.h2>
          <motion.p variants={item} className="mt-3 text-[22px] font-semibold leading-snug">
            Purpose-built capabilities for {data.name.toLowerCase()}.
          </motion.p>
        </motion.div>

        <motion.div
          {...revealProps}
          variants={container}
          className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2"
        >
          {data.capabilities.map((c) => (
            <motion.div key={c.title} variants={cardItem} className={`border-l-2 ${T.border} pl-5`}>
              <h3 className="text-[17px] font-semibold">{c.title}</h3>
              <p className={`mt-2.5 text-[14.5px] leading-relaxed ${T.muted}`}>{c.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SOLUTIONS */}
      <section className={`${T.panelBg} border-y ${T.border}`}>
        <div className={`${ALIGN} py-20`}>
          <motion.h2
            {...revealProps}
            variants={item}
            className="text-[13px] font-semibold uppercase tracking-[0.06em] text-[#8A8CA6]"
          >
            Solutions we build
          </motion.h2>
          <motion.div
            {...revealProps}
            variants={container}
            className="mt-8 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {data.solutions.map((s) => (
              <motion.div key={s.label} variants={item} className="flex items-center gap-3">
                <CheckCircle2 size={17} className={T.primary} strokeWidth={2.25} />
                <span className="text-[14.5px]">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURED INSIGHT + CTA */}
      <section className={`${ALIGN} py-20`}>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className={`overflow-hidden rounded-2xl border ${T.border} p-8`}
          >
            <p className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${T.primary}`}>
              {data.insight.eyebrow}
            </p>
            <h3 className="mt-3 text-[20px] font-semibold leading-snug">{data.insight.title}</h3>
            <p className={`mt-3 text-[14.5px] leading-relaxed ${T.muted}`}>{data.insight.blurb}</p>
            <motion.a
              href="#"
              whileHover={{ x: 4 }}
              className={`mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold ${T.primary}`}
            >
              Read more
              <ArrowUpRight size={15} />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className={`flex flex-col justify-between overflow-hidden rounded-2xl ${T.inkBg} p-8 text-white sm:flex-row sm:items-center`}
          >
            <div>
              <h3 className="text-[21px] font-semibold leading-snug">
                Ready to talk about {data.name.toLowerCase()}?
              </h3>
              <p className="mt-2 max-w-md text-[14px] leading-relaxed text-white/65">
                Tell us what you&apos;re trying to solve — we&apos;ll bring the right team into the conversation.
              </p>
            </div>
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 flex h-11 shrink-0 items-center gap-2 rounded-md bg-white px-6 text-[15px] font-semibold text-[#14163B] transition-colors duration-150 hover:bg-white/90 sm:mt-0"
            >
              Talk to us
              <ArrowRight size={15} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
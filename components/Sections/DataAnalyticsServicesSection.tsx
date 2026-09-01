"use client";

import { useEffect, useState } from "react";
import {
  ChevronRight,
  ChevronDown,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

const CHAMPION_BLUE = "#1B2560";
const LAVENDER_ACCENT = "#A48FEA";

// Shared page width wrapper, kept in sync with the navbar's own
// max width/padding so every section lines up with it exactly.
const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

// Autoplay timing for the "Data & Analytics Services" tab list
const TAB_AUTOPLAY_MS = 4000;

// --- Shared animation variants ---
// heroContainer / heroItem: play once on page load (hero only)
// container / item: play once, triggered on scroll into view (rest of page)
const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.4,
    },
  },
};

const heroItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const keyTakeaways = [
  "Starfii helps enterprises turn scattered data into a governed, trusted asset that decisions can actually rely on.",
  "We design data platforms, pipelines, and models that scale from a single business unit to the whole enterprise.",
  "Our data engineering and data science services span analytics and governance, wired together end to end.",
  "We pair modern data architecture with AI ready pipelines so analytics keeps up as the business changes.",
];

const focusAreas = [
  {
    title: "Data Engineering",
    body: "Starfii's certified data engineers design and build resilient pipelines and data platforms, so every downstream system works from clean, timely, well governed data.",
  },
  {
    title: "Data Science & Advanced Analytics",
    body: "Our data scientists build the models and surface the patterns behind better decisions, from demand forecasting to anomaly detection to product recommendation.",
  },
  {
    title: "Cloud Data Platforms",
    body: "Starfii architects and migrates data estates onto modern cloud data platforms on AWS, Azure, and GCP, built for scale, cost control, and near real time access.",
  },
  {
    title: "Data Governance & Quality",
    body: "We put stewardship, lineage, and data quality checks in place so your enterprise data stays trustworthy as it moves across systems and teams.",
  },
  {
    title: "Reporting and Dashboards, BI",
    body: "Starfii turns raw data into actionable business intelligence using Tableau and Power BI, so decision makers see what matters without digging for it.",
  },
  {
    title: "MDM & Data Integration",
    body: "We consolidate fragmented sources into a single, reliable master data record, so every team works from the same version of the truth.",
  },
  {
    title: "Generative AI on Enterprise Data",
    body: "Starfii connects Generative AI and LLMs to your own enterprise data safely, so teams can query, summarize, and act on it in plain language.",
  },
  {
    title: "Data Migration & Modernization",
    body: "We move legacy warehouses and data marts onto modern cloud platforms with minimal disruption, closing the gap between old systems and new business demands.",
  },
];

type CaseStudy = { title: string; body: string; tag: string; image: string };

const caseStudies: CaseStudy[] = [
  {
    tag: "INSURANCE",
    title: "Starfii Cuts Reporting Time by 40% for a Regional Insurance Carrier",
    body: "Starfii's data engineering team consolidated claims, policy, and underwriting data into a single governed platform, replacing manual spreadsheets with real time dashboards trusted across the business.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    tag: "RETAIL",
    title: "A Unified Customer Data Platform for a National Retail Chain",
    body: "Starfii built a cloud data platform that merged siloed sales, loyalty, and marketing data, giving a national retailer a single customer view that lifted campaign conversion and cut reporting cycles from days to hours.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    tag: "HEALTHCARE",
    title: "Generative AI on Enterprise Data Speeds Clinical Reporting",
    body: "Starfii connected Generative AI to a governed clinical data warehouse, letting analysts query patient outcome trends in plain language while keeping every result compliant and auditable.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
  },
];

const tabs = [
  {
    label: "Build a Single Source of Truth",
    heading: "One governed data foundation, not a dozen conflicting copies",
    body: "Starfii consolidates fragmented data sources into a governed platform, so every team, from finance to product, works from numbers everyone trusts.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Engineer Pipelines That Scale",
    heading: "Pipelines built for the data volumes you will have next year, not just today",
    body: "Our data engineering teams design ingestion and transformation pipelines that scale with the business, so growth does not mean rebuilding your data stack from scratch.",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Turn Data into Decisions",
    heading: "Analytics and dashboards people actually open",
    body: "Starfii designs reporting and BI experiences around the decisions your teams make every day, not just the metrics that are easy to compute.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Modernize Legacy Data Estates",
    heading: "A clear path off aging warehouses and brittle ETL",
    body: "We assess your existing data estate, build a data modernization roadmap, and migrate you to a cloud native platform with minimal disruption to reporting.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Apply AI to Your Own Data",
    heading: "Gen AI and machine learning grounded in your enterprise data",
    body: "Starfii connects AI models to your governed data safely, so predictions, summaries, and recommendations stay grounded in what is actually true for your business.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function DataAnalyticsServicesSection() {
  const [takeawaysOpen, setTakeawaysOpen] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [tabHovered, setTabHovered] = useState(false);
  const current = tabs[activeTab];

  // --- Autoplay for the left-side tab list ---
  // Advances to the next tab automatically every TAB_AUTOPLAY_MS.
  // Pauses on hover, and restarts the timer whenever the user
  // manually clicks a tab.
  useEffect(() => {
    if (tabHovered) return undefined;
    const id = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, TAB_AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [tabHovered, activeTab]);

  return (
    // pt-[92px] / lg:pt-[100px] added below to offset the fixed Navbar
    // (16px outer top gap + 76px navbar height on mobile = 92px;
    // 16px + 84px navbar height on lg = 100px), so the hero/breadcrumb
    // no longer sits underneath the fixed navbar.
    <main className="bg-white pt-[92px] lg:pt-[100px]">
      {/* Progress-fill keyframe for the autoplaying tab indicator line */}
      <style>{`
        @keyframes ss-tab-progress {
          from { transform: scaleY(0); }
          to   { transform: scaleY(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ss-tab-progress-fill {
            animation: none !important;
            transform: scaleY(1) !important;
          }
        }
      `}</style>

      {/* ============================================================
          HERO — animates once, right after page load
      ============================================================ */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <motion.img
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1800&auto=format&fit=crop"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40" />
        </div>

        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className={`${ALIGN} py-24 lg:py-32`}
        >
          <motion.nav
            variants={heroItem}
            aria-label="Breadcrumb"
            className="font-body flex items-center gap-2 text-[14px] font-medium"
            style={{ color: CHAMPION_BLUE }}
          >
            <a href="/" className="hover:underline">
              Home
            </a>
            <ChevronRight size={14} />
            <a href="/services" className="hover:underline">
              Services
            </a>
            <ChevronRight size={14} />
            <span className="text-slate-500">Data & Analytics</span>
          </motion.nav>

          <motion.h1
            variants={heroItem}
            className="font-heading mt-8 max-w-xl text-[44px] font-medium leading-[1.15] lg:text-[54px]"
            style={{ color: CHAMPION_BLUE }}
          >
            Data & Analytics Services for Decisions You Can Trust
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="font-body mt-6 max-w-lg text-[17px] leading-relaxed text-slate-600"
          >
            Starfii turns scattered, siloed data into a governed platform
            that powers faster, more confident decisions across the
            enterprise.
          </motion.p>

          <motion.a
            variants={heroItem}
            href="#connect"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="font-body mt-9 inline-flex items-center gap-2 rounded-full px-7 py-4 text-[15px] font-semibold text-white"
            style={{ backgroundColor: CHAMPION_BLUE }}
          >
            Connect Now
            <ArrowUpRight size={17} />
          </motion.a>
        </motion.div>
      </section>

      <div className={ALIGN}>
        {/* ============================================================
            KEY TAKEAWAYS — animates on scroll into view
        ============================================================ */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-16"
        >
          <div
            className="overflow-hidden rounded-2xl border"
            style={{ borderColor: LAVENDER_ACCENT }}
          >
            <button
              type="button"
              onClick={() => setTakeawaysOpen((v) => !v)}
              className="flex w-full items-center justify-between px-8 py-6 text-left"
            >
              <span
                className="font-body flex items-center gap-2.5 text-[16px] font-semibold"
                style={{ color: CHAMPION_BLUE }}
              >
                <Sparkles size={18} style={{ color: LAVENDER_ACCENT }} />
                Key Takeaways
              </span>
              <ChevronDown
                size={20}
                style={{ color: CHAMPION_BLUE }}
                className={`transition-transform duration-300 ${
                  takeawaysOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {takeawaysOpen && (
              <ul
                className="space-y-3 px-8 pb-8"
                style={{ borderTop: `1px solid ${LAVENDER_ACCENT}` }}
              >
                {keyTakeaways.map((point, i) => (
                  <li
                    key={i}
                    className="font-body pt-3 text-[15px] leading-relaxed text-slate-700"
                  >
                    • {point}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <p
            className="font-heading mt-10 max-w-3xl text-[26px] leading-snug lg:text-[30px]"
            style={{ color: CHAMPION_BLUE }}
          >
            A trusted data and analytics partner, Starfii builds governed
            platforms and AI ready pipelines that turn scattered
            enterprise data into decisions your business can rely on.
          </p>
        </motion.section>

        {/* ============================================================
            Q&A BLOCK — animates on scroll into view
        ============================================================ */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-20"
        >
          <div
            className="grid grid-cols-1 items-center gap-10 rounded-2xl p-10 lg:grid-cols-2"
            style={{ backgroundColor: "#F5F3FC" }}
          >
            <div>
              <h2
                className="font-heading text-[26px] font-medium leading-snug lg:text-[30px]"
                style={{ color: LAVENDER_ACCENT }}
              >
                How Do Enterprises Turn Raw Data Into a Trusted Asset?
              </h2>
              <p className="font-body mt-5 text-[15px] leading-relaxed text-slate-600">
                Enterprises build trust in their data by combining strong
                governance, scalable data engineering, and analytics that
                answer real business questions. Starfii brings these
                together to reduce data silos, speed up reporting, and
                give every team a foundation of numbers they do not have
                to second guess.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop"
                alt="Analysts reviewing a data dashboard"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* ============================================================
            FOCUS AREAS — grid cards stagger in on scroll
        ============================================================ */}
        <section className="mt-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2.6fr]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <h2
                className="font-heading text-[36px] font-medium leading-[1.15]"
                style={{ color: CHAMPION_BLUE }}
              >
                Our Data & Analytics
                <br />
                Capabilities
              </h2>
              <p className="font-body mt-5 text-[15px] leading-relaxed text-slate-600">
                Starfii plans, engineers, and governs data platforms that
                scale with the business, so analytics and AI stay
                grounded in data you can trust.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={container}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
            >
              {focusAreas.map((area) => (
                <motion.div
                  key={area.title}
                  variants={item}
                  className="rounded-xl p-7 transition-transform duration-300 hover:-translate-y-1"
                  style={{ backgroundColor: "#F5F3FC" }}
                >
                  <h3
                    className="font-heading text-[19px] font-semibold"
                    style={{ color: CHAMPION_BLUE }}
                  >
                    {area.title}
                  </h3>
                  <p className="font-body mt-3 text-[14px] leading-relaxed text-slate-600">
                    {area.body}
                  </p>
                  <a
                    href="#"
                    className="font-body mt-5 inline-flex items-center gap-1.5 text-[14px] font-medium"
                    style={{ color: LAVENDER_ACCENT }}
                  >
                    Learn More
                    <ArrowUpRight size={15} />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ============================================================
            CASE STUDIES — grid cards stagger in on scroll
        ============================================================ */}
        <section className="mt-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="flex items-end justify-between"
          >
            <h2
              className="font-heading text-[36px] font-medium leading-[1.15]"
              style={{ color: CHAMPION_BLUE }}
            >
              Data & Analytics
              <br />
              Case Studies
            </h2>
            <a
              href="#"
              className="font-body hidden items-center gap-1.5 text-[15px] font-semibold sm:flex"
              style={{ color: LAVENDER_ACCENT }}
            >
              View All Case Studies
              <ArrowUpRight size={16} />
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={container}
            className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {caseStudies.map((study) => (
              <motion.div
                key={study.title}
                variants={item}
                className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ border: "1px solid #EDEAFB" }}
              >
                <div className="h-[180px] overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <span
                    className="font-body text-[12px] font-semibold tracking-wide"
                    style={{ color: LAVENDER_ACCENT }}
                  >
                    {study.tag}
                  </span>
                  <h3
                    className="font-heading mt-2 text-[18px] font-semibold leading-snug"
                    style={{ color: CHAMPION_BLUE }}
                  >
                    {study.title}
                  </h3>
                  <p className="font-body mt-3 text-[14px] leading-relaxed text-slate-600">
                    {study.body}
                  </p>
                  <a
                    href="#"
                    className="font-body mt-5 inline-flex items-center gap-1.5 text-[14px] font-medium"
                    style={{ color: LAVENDER_ACCENT }}
                  >
                    Learn More
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ============================================================
            TABBED DEEP-DIVE — auto-advancing tab list
        ============================================================ */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="mt-24 pb-28"
        >
          <h2
            className="font-heading text-[34px] font-medium"
            style={{ color: CHAMPION_BLUE }}
          >
            Data & Analytics Services
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[320px_1fr]">
            {/* Left nav — autoplaying */}
            <ul
              className="space-y-1 border-l"
              style={{ borderColor: "#E5E1F5" }}
              onMouseEnter={() => setTabHovered(true)}
              onMouseLeave={() => setTabHovered(false)}
            >
              {tabs.map((tab, i) => {
                const isActive = i === activeTab;
                return (
                  <li key={tab.label} className="relative -ml-px">
                    {/* Animated progress fill — only rendered on the active tab,
                        remounted via key so the fill restarts from empty each time */}
                    {isActive && (
                      <span
                        key={`${activeTab}-${tabHovered}`}
                        className="ss-tab-progress-fill pointer-events-none absolute inset-y-0 left-0 w-[2px] origin-top"
                        style={{
                          backgroundColor: CHAMPION_BLUE,
                          animation: tabHovered
                            ? "none"
                            : `ss-tab-progress ${TAB_AUTOPLAY_MS}ms linear forwards`,
                          transform: tabHovered ? "scaleY(1)" : undefined,
                        }}
                      />
                    )}
                    <button
                      type="button"
                      onClick={() => setActiveTab(i)}
                      className="font-body block py-3 pl-5 text-left text-[16px] transition-colors duration-200"
                      style={{
                        color: isActive ? CHAMPION_BLUE : "#94A3B8",
                        fontWeight: isActive ? 600 : 500,
                      }}
                    >
                      {tab.label}
                    </button>
                  </li>
                );
              })}
            </ul>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 overflow-hidden rounded-2xl md:h-[340px] md:grid-cols-2"
              style={{ backgroundColor: "#F5F3FC" }}
            >
              <div className="flex flex-col justify-center p-10">
                <h3
                  className="font-heading text-[22px] font-semibold leading-snug"
                  style={{ color: CHAMPION_BLUE }}
                >
                  {current.heading}
                </h3>
                <p className="font-body mt-4 text-[15px] leading-relaxed text-slate-600">
                  {current.body}
                </p>
              </div>

              <div className="h-[280px]">
                <img
                  src={current.image}
                  alt={current.label}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
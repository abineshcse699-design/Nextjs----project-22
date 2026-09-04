"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Sparkles,
  ArrowUpRight,
  Plus,
  Trophy,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { caseStudies as sharedCaseStudies } from "@/app/services/data-analytics/casestudies/data/casestudies";

const CHAMPION_BLUE = "#1B2560";
const LAVENDER_ACCENT = "#A48FEA";

// Colors for the two dark, full-bleed sections (capability cards + impact
// accordion) so they read as a distinct "showcase" register against the
// light sections, matching the reference design.
const DARK_BG = "#0A0A18";
const DARK_CARD = "rgba(255,255,255,0.04)";
const DARK_BORDER = "rgba(255,255,255,0.09)";
const ACCENT_INDIGO = "#6C5DD3";

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

const keyTakeaways: string[] = [
  "Starfii helps businesses transform customer communication with intelligent AI voice agents that understand natural language and respond in real time.",
  "Our AI Voice Call solutions automate inbound support, outbound engagement, lead qualification, appointment scheduling, reminders, and routine customer interactions.",
  "We connect voice AI with CRM, telephony, knowledge bases, and business systems so conversations can move from understanding a request to taking the right action.",
  "Our approach combines automation with human escalation, conversation intelligence, and enterprise governance to deliver reliable customer experiences at scale.",
];

// Each capability now carries short tags, shown as pills on the dark
// numbered cards (mirrors the DATA / BI / ANALYTICS style pills in the
// reference screenshots).
const focusAreas = [
  {
    title: "Data Engineering",
    body: "Starfii's certified data engineers design and build resilient pipelines and data platforms, so every downstream system works from clean, timely, well governed data.",
    tags: ["PIPELINES", "ETL", "ORCHESTRATION"],
  },
  {
    title: "Data Science & Advanced Analytics",
    body: "Our data scientists build the models and surface the patterns behind better decisions, from demand forecasting to anomaly detection to product recommendation.",
    tags: ["ML", "FORECASTING", "ANALYTICS"],
  },
  {
    title: "Cloud Data Platforms",
    body: "Starfii architects and migrates data estates onto modern cloud data platforms on AWS, Azure, and GCP, built for scale, cost control, and near real time access.",
    tags: ["AWS", "AZURE", "GCP"],
  },
  {
    title: "Data Governance & Quality",
    body: "We put stewardship, lineage, and data quality checks in place so your enterprise data stays trustworthy as it moves across systems and teams.",
    tags: ["GOVERNANCE", "LINEAGE", "QUALITY"],
  },
  {
    title: "Reporting and Dashboards, BI",
    body: "Starfii turns raw data into actionable business intelligence using Tableau and Power BI, so decision makers see what matters without digging for it.",
    tags: ["TABLEAU", "POWER BI", "DASHBOARDS"],
  },
  {
    title: "MDM & Data Integration",
    body: "We consolidate fragmented sources into a single, reliable master data record, so every team works from the same version of the truth.",
    tags: ["MDM", "INTEGRATION", "MASTER DATA"],
  },
  {
    title: "Generative AI on Enterprise Data",
    body: "Starfii connects Generative AI and LLMs to your own enterprise data safely, so teams can query, summarize, and act on it in plain language.",
    tags: ["GENAI", "LLM", "RAG"],
  },
  {
    title: "Data Migration & Modernization",
    body: "We move legacy warehouses and data marts onto modern cloud platforms with minimal disruption, closing the gap between old systems and new business demands.",
    tags: ["MIGRATION", "MODERNIZATION", "CLOUD"],
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

// Closing "Impact" accordion — the last section on the page. Each row
// expands in place to show what that impact area actually covers.
const impactAreas = [
  {
    title: "Unify Fragmented Data Sources",
    body: "Bring scattered warehouses, marts, and spreadsheets into one governed platform so every team works from the same numbers.",
  },
  {
    title: "Engineer Pipelines for Scale",
    body: "Build ingestion and transformation pipelines that keep pace with data volume as the business grows, not just today's load.",
  },
  {
    title: "Govern Data You Can Trust",
    body: "Put stewardship, lineage, and quality checks in place so data stays trustworthy as it moves across systems and teams.",
  },
  {
    title: "Apply AI to Enterprise Data",
    body: "Connect Generative AI and LLMs safely to your own data, so teams can query and act on it in plain language.",
  },
  {
    title: "Modernize Legacy Data Estates",
    body: "Move aging warehouses and brittle ETL onto modern cloud platforms with a clear roadmap and minimal disruption.",
  },
  {
    title: "Turn Analytics into Action",
    body: "Design BI and reporting around the decisions teams make every day, not just the metrics that are easiest to compute.",
  },
];

// Industry Recognition — quadrant/award callouts, shown two at a time in a
// carousel with a progress bar, matching the reference layout.
type Recognition = {
  program: string;
  year: string;
  title: string;
  subtitle: string;
  standing: string;
  body: string;
};

const recognitions: Recognition[] = [
  {
    program: "ISG Provider Lens™",
    year: "2026 Quadrant",
    title: "Data Modernization Services",
    subtitle: "Data Engineering & Migration",
    standing: "Leader, U.S.",
    body: "Starfii named a Leader in Data Engineering & Migration in the ISG Provider Lens® Data Modernization Services 2026 U.S. Quadrant Report, recognizing our legacy warehouse migration and pipeline rebuild work.",
  },
  {
    program: "ISG Provider Lens™",
    year: "2025 Quadrant",
    title: "Data & Analytics Services",
    subtitle: "Data Platforms and BI",
    standing: "Leader, U.S.",
    body: "Starfii named a Leader in Data Platforms and BI in the ISG Provider Lens™ Data & Analytics Services 2025 US Quadrant Report, reflecting our governed reporting and dashboarding delivery.",
  },
  {
    program: "ISG Provider Lens™",
    year: "2025 Quadrant",
    title: "Cloud Data Platform Services",
    subtitle: "AWS, Azure & GCP Delivery",
    standing: "Rising Star, U.S.",
    body: "Starfii recognized as a Rising Star in Cloud Data Platform Services in the ISG Provider Lens™ 2025 US Quadrant Report, citing our multi cloud data architecture and migration practice.",
  },
  {
    program: "ISG Provider Lens™",
    year: "2026 Quadrant",
    title: "Generative AI on Enterprise Data",
    subtitle: "AI and LLM Integration",
    standing: "Leader, U.S.",
    body: "Starfii named a Leader in AI and LLM Integration in the ISG Provider Lens® Generative AI Services 2026 U.S. Quadrant Report, recognizing how we ground models in governed enterprise data.",
  },
];

// What's New — insight/blog teasers, shown three at a time with the same
// progress bar and arrow pagination as the recognition carousel.
type Insight = {
  title: string;
  body: string;
  image: string;
  gradient?: boolean;
};

const insights: Insight[] = [
  {
    title: "Generative AI on Enterprise Data: From Warehouses to Answers",
    body: "See how Starfii connects LLMs to governed data so teams get plain language answers, not just another dashboard to read.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    gradient: true,
  },
  {
    title: "Cloud Data Platforms: Choosing Between AWS, Azure, and GCP",
    body: "Compare cost, governance, and near real time access across the three major cloud data stacks and how Starfii picks the right fit.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Data Governance at Scale: Building Trust Into Every Pipeline",
    body: "Explore how lineage, stewardship, and automated quality checks keep enterprise data trustworthy as it scales.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "MDM in Practice: Getting Every Team to One Customer Record",
    body: "A practical look at how master data management removes conflicting records across sales, support, and marketing systems.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "From Legacy Warehouse to Lakehouse: A Migration Playbook",
    body: "Starfii's phased approach to moving reporting off aging warehouses without breaking the dashboards teams rely on daily.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "BI That Gets Opened: Designing Dashboards Around Decisions",
    body: "Why the best dashboards start from the decision a team needs to make, not the metrics that are easiest to compute.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function DataAnalyticsServicesSection() {
  const [takeawaysOpen, setTakeawaysOpen] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [tabHovered, setTabHovered] = useState(false);
  const [openImpact, setOpenImpact] = useState<number | null>(null);
  const [recogPage, setRecogPage] = useState(0);
  const [insightPage, setInsightPage] = useState(0);
  const current = tabs[activeTab];

  // Recognition carousel: 2 cards per page
  const RECOG_PER_PAGE = 2;
  const recogPages = Math.ceil(recognitions.length / RECOG_PER_PAGE);
  const visibleRecognitions = recognitions.slice(
    recogPage * RECOG_PER_PAGE,
    recogPage * RECOG_PER_PAGE + RECOG_PER_PAGE
  );

  // Insights carousel: 3 cards per page
  const INSIGHTS_PER_PAGE = 3;
  const insightPages = Math.ceil(insights.length / INSIGHTS_PER_PAGE);
  const visibleInsights = insights.slice(
    insightPage * INSIGHTS_PER_PAGE,
    insightPage * INSIGHTS_PER_PAGE + INSIGHTS_PER_PAGE
  );

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
      {/* ============================================================
    WHY DATA & ANALYTICS MATTERS
============================================================ */}
<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={fadeUp}
  className="mt-16"
>
  <div
    className="overflow-hidden rounded-[22px] border bg-white"
    style={{ borderColor: LAVENDER_ACCENT }}
  >
    {/* Header */}
    <div
      className="flex min-h-[104px] items-center justify-between px-8 py-6 lg:px-10"
      style={{
        borderBottom: `1px solid ${LAVENDER_ACCENT}`,
      }}
    >
      <div className="flex items-center gap-3">
        <Sparkles
          size={21}
          strokeWidth={1.8}
          style={{ color: LAVENDER_ACCENT }}
        />

        <span
          className="font-body text-[17px] font-semibold"
          style={{ color: CHAMPION_BLUE }}
        >
          Why Data & Analytics Matters
        </span>
      </div>

      <span
        className="font-body rounded-full px-5 py-2.5 text-[13px] font-semibold"
        style={{
          backgroundColor: "#F1EEFC",
          color: ACCENT_INDIGO,
        }}
      >
        Trusted Data
      </span>
    </div>

    {/* Content */}
    <div className="grid grid-cols-1 gap-10 px-8 py-10 md:grid-cols-3 lg:px-10">
      <div>
        <h3
          className="font-heading text-[23px] font-semibold"
          style={{ color: CHAMPION_BLUE }}
        >
          Unify
        </h3>

        <p className="font-body mt-4 text-[15px] leading-[1.8] text-slate-600">
          Bring fragmented enterprise data together into a governed,
          reliable foundation that teams can trust across the business.
        </p>
      </div>

      <div>
        <h3
          className="font-heading text-[23px] font-semibold"
          style={{ color: CHAMPION_BLUE }}
        >
          Analyze
        </h3>

        <p className="font-body mt-4 text-[15px] leading-[1.8] text-slate-600">
          Turn complex data into meaningful analytics, dashboards, and
          insights that help teams understand performance and make
          faster, more confident decisions.
        </p>
      </div>

      <div>
        <h3
          className="font-heading text-[23px] font-semibold"
          style={{ color: CHAMPION_BLUE }}
        >
          Accelerate
        </h3>

        <p className="font-body mt-4 text-[15px] leading-[1.8] text-slate-600">
          Modernize data platforms and connect AI to trusted enterprise
          data so organizations can scale analytics, automation, and
          intelligent decision-making.
        </p>
      </div>
    </div>
  </div>

  {/* Existing supporting paragraph */}
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
      </div>

      {/* ============================================================
          OUR DATA & ANALYTICS CAPABILITIES — full-bleed dark section,
          numbered cards with a tag pill row, matching the reference
          "Our Services & Consulting Capabilities" layout.
      ============================================================ */}
      <section
        className="relative mt-24 overflow-hidden py-24"
        style={{
          background: `radial-gradient(120% 140% at 85% 100%, rgba(108,93,211,0.35), transparent 55%), ${DARK_BG}`,
        }}
      >
        <div className={ALIGN}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="max-w-2xl"
          >
            <h2 className="font-heading text-[36px] font-medium leading-[1.15] text-white lg:text-[44px]">
              Our Data & Analytics
              <br />
              Capabilities
            </h2>
            <p className="font-body mt-5 text-[15px] leading-relaxed text-slate-300">
              Starfii plans, engineers, and governs data platforms that
              scale with the business, so analytics and AI stay grounded
              in data you can trust.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={container}
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
          >
            {focusAreas.map((area, i) => (
              <motion.div
                key={area.title}
                variants={item}
                className="flex flex-col rounded-2xl p-8 transition-colors duration-300 hover:bg-white/[0.06]"
                style={{
                  backgroundColor: DARK_CARD,
                  border: `1px solid ${DARK_BORDER}`,
                }}
              >
                <div className="flex items-start justify-between">
                  <span className="font-body text-[14px] text-slate-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <a
                    href="#"
                    aria-label={`Learn more about ${area.title}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white transition-colors duration-300 hover:border-white/40"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>

                <h3 className="font-heading mt-6 text-[19px] font-semibold text-white">
                  {area.title}
                </h3>
                <p className="font-body mt-3 flex-1 text-[14px] leading-relaxed text-slate-400">
                  {area.body}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-body rounded-full border border-white/15 px-3 py-1 text-[11px] font-medium tracking-wide text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className={ALIGN}>
        {/* ============================================================
            CASE STUDIES — grid cards stagger in on scroll
            (now pulling from the shared casestudies data source so
            "Learn More" links actually navigate to the case study
            detail page instead of a dead "#" anchor)
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
            <Link
              href="/services/data-analytics/casestudies"
              className="font-body hidden items-center gap-1.5 text-[15px] font-semibold sm:flex"
              style={{ color: LAVENDER_ACCENT }}
            >
              View All Case Studies
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={container}
            className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {sharedCaseStudies.map((study) => (
              <motion.div
                key={study.slug}
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
                    {study.industry.toUpperCase()}
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
                  <Link
                    href={`/services/data-analytics/casestudies/${study.slug}`}
                    className="font-body mt-5 inline-flex items-center gap-1.5 text-[14px] font-medium"
                    style={{ color: LAVENDER_ACCENT }}
                  >
                    Learn More
                    <ArrowUpRight size={15} />
                  </Link>
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

      {/* ============================================================
          IMPACT ACROSS YOUR DATA ECOSYSTEM — full-bleed dark section,
          expandable rows. This is the LAST section on the page, matching
          the reference "Impact Across Your Digital Software Ecosystem"
          closing block.
      ============================================================ */}
      <section
        className="relative overflow-hidden py-24"
        style={{
          background: `radial-gradient(110% 130% at 90% 100%, rgba(217,119,87,0.18), transparent 50%), ${DARK_BG}`,
        }}
      >
        <div className={ALIGN}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="font-heading max-w-xl text-[36px] font-medium leading-[1.15] text-white lg:text-[44px]"
          >
            Impact Across Your Data & Analytics Ecosystem
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={container}
            className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2"
          >
            {impactAreas.map((area, i) => {
              const isOpen = openImpact === i;
              return (
                <motion.div key={area.title} variants={item}>
                  <button
                    type="button"
                    onClick={() => setOpenImpact(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 rounded-2xl bg-white px-8 py-6 text-left"
                  >
                    <span
                      className="font-body text-[16px] font-medium"
                      style={{ color: CHAMPION_BLUE }}
                    >
                      {area.title}
                    </span>
                    <span
                      className="flex h-9 w-9 flex-none items-center justify-center rounded-full text-white transition-transform duration-300"
                      style={{
                        backgroundColor: ACCENT_INDIGO,
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      <Plus size={18} />
                    </span>
                  </button>

                  {isOpen && (
                    <p className="font-body mt-3 px-8 text-[14px] leading-relaxed text-slate-300">
                      {area.body}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          INDUSTRY RECOGNITION — dark, full-bleed, matches the reference
          ISG Provider Lens quadrant callouts with a 2-up carousel.
      ============================================================ */}
      <section
        className="relative overflow-hidden py-24"
        style={{
          background: `radial-gradient(110% 130% at 90% 100%, rgba(217,119,87,0.16), transparent 50%), ${DARK_BG}`,
        }}
      >
        <div className={ALIGN}>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr]">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="font-heading text-[36px] font-medium leading-[1.15] text-white lg:text-[44px]"
            >
              Industry
              <br />
              Recognition
            </motion.h2>

            <div>
              <motion.div
                key={recogPage}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 gap-6 md:grid-cols-2"
              >
                {visibleRecognitions.map((rec) => (
                  <div
                    key={rec.title}
                    className="overflow-hidden rounded-2xl bg-white"
                  >
                    <div className="flex items-center justify-between px-8 pt-7">
                      <span
                        className="font-body text-[14px] font-semibold"
                        style={{ color: CHAMPION_BLUE }}
                      >
                        {rec.program}
                      </span>
                      <span className="font-body text-[13px] text-slate-400">
                        {rec.year}
                      </span>
                    </div>

                    <div className="mt-5 px-8">
                      <div
                        className="rounded-xl px-6 py-6"
                        style={{ backgroundColor: CHAMPION_BLUE }}
                      >
                        <h3 className="font-heading text-[20px] font-semibold text-white">
                          {rec.title}
                        </h3>
                        <p
                          className="font-body mt-1.5 text-[14px]"
                          style={{ color: LAVENDER_ACCENT }}
                        >
                          {rec.subtitle}
                        </p>
                        <div className="mt-6 flex items-center justify-between">
                          <span className="font-body text-[15px] font-medium text-white">
                            {rec.standing}
                          </span>
                          <Trophy size={18} className="text-white/80" />
                        </div>
                      </div>
                    </div>

                    <div className="p-8">
                      <p className="font-body text-[14px] leading-relaxed text-slate-600">
                        {rec.body}
                      </p>
                      <a
                        href="#"
                        className="font-body mt-6 inline-flex items-center justify-center rounded-full border px-6 py-2.5 text-[14px] font-semibold"
                        style={{
                          borderColor: ACCENT_INDIGO,
                          color: ACCENT_INDIGO,
                        }}
                      >
                        Know more
                      </a>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Progress bar + pagination */}
              <div className="mt-10 flex items-center gap-6">
                <div className="h-[2px] flex-1 bg-white/15">
                  <div
                    className="h-full transition-all duration-500"
                    style={{
                      backgroundColor: ACCENT_INDIGO,
                      width: `${((recogPage + 1) / recogPages) * 100}%`,
                    }}
                  />
                </div>
                <span className="font-body flex-none text-[14px] text-slate-400">
                  {String(recogPage + 1).padStart(2, "0")} /{" "}
                  {String(recogPages).padStart(2, "0")}
                </span>
                <div className="flex flex-none items-center gap-3">
                  <button
                    type="button"
                    aria-label="Previous recognitions"
                    onClick={() =>
                      setRecogPage((p) => (p - 1 + recogPages) % recogPages)
                    }
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-white/20"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    aria-label="Next recognitions"
                    onClick={() => setRecogPage((p) => (p + 1) % recogPages)}
                    className="flex h-11 w-11 items-center justify-center rounded-full text-white"
                    style={{ backgroundColor: ACCENT_INDIGO }}
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHAT'S NEW IN DATA & ANALYTICS — light section, 3-up insight
          carousel with the same progress bar + arrow pagination.
          This is the LAST section on the page.
      ============================================================ */}
      <section className="py-24" style={{ backgroundColor: "#EEF0FB" }}>
        <div className={ALIGN}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="flex items-end justify-between"
          >
            <h2
              className="font-heading max-w-lg text-[36px] font-medium leading-[1.15] lg:text-[44px]"
              style={{ color: CHAMPION_BLUE }}
            >
              What's New in Data
              <br />
              & Analytics
            </h2>
            <a
              href="#"
              className="font-body hidden items-center gap-1.5 text-[15px] font-semibold sm:flex"
              style={{ color: ACCENT_INDIGO }}
            >
              View All Insights
              <ArrowUpRight size={16} />
            </a>
          </motion.div>

          <motion.div
            key={insightPage}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {visibleInsights.map((post) =>
              post.gradient ? (
                <div
                  key={post.title}
                  className="relative flex min-h-[360px] flex-col justify-end overflow-hidden rounded-2xl p-1"
                  style={{
                    background:
                      "radial-gradient(120% 120% at 20% 10%, #FFD36E 0%, #F97362 45%, #16131F 100%)",
                  }}
                >
                  <div className="m-4 rounded-xl bg-white/95 p-6">
                    <span
                      className="font-body text-[12px] font-semibold tracking-wide"
                      style={{ color: ACCENT_INDIGO }}
                    >
                      BLOG
                    </span>
                    <h3
                      className="font-heading mt-2 text-[18px] font-semibold leading-snug"
                      style={{ color: CHAMPION_BLUE }}
                    >
                      {post.title}
                    </h3>
                    <p className="font-body mt-3 text-[14px] leading-relaxed text-slate-600">
                      {post.body}
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  key={post.title}
                  className="flex min-h-[360px] flex-col overflow-hidden rounded-2xl bg-white"
                >
                  <div className="h-[220px] overflow-hidden bg-slate-900/90">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover opacity-80 transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <span
                      className="font-body text-[12px] font-semibold tracking-wide"
                      style={{ color: ACCENT_INDIGO }}
                    >
                      BLOG
                    </span>
                    <h3
                      className="font-heading mt-2 text-[18px] font-semibold leading-snug"
                      style={{ color: CHAMPION_BLUE }}
                    >
                      {post.title}
                    </h3>
                    <p className="font-body mt-3 text-[14px] leading-relaxed text-slate-600">
                      {post.body}
                    </p>
                  </div>
                </div>
              )
            )}
          </motion.div>

          {/* Progress bar + pagination */}
          <div className="mt-10 flex items-center gap-6">
            <div className="h-[2px] flex-1 bg-slate-300">
              <div
                className="h-full transition-all duration-500"
                style={{
                  backgroundColor: ACCENT_INDIGO,
                  width: `${((insightPage + 1) / insightPages) * 100}%`,
                }}
              />
            </div>
            <div className="flex flex-none items-center gap-3">
              <button
                type="button"
                aria-label="Previous insights"
                onClick={() =>
                  setInsightPage((p) => (p - 1 + insightPages) % insightPages)
                }
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-400 transition-colors duration-300 hover:text-slate-600"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                aria-label="Next insights"
                onClick={() =>
                  setInsightPage((p) => (p + 1) % insightPages)
                }
                className="flex h-11 w-11 items-center justify-center rounded-full text-white"
                style={{ backgroundColor: ACCENT_INDIGO }}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
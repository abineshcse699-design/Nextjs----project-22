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

// Shared page-width wrapper — kept in sync with the navbar's own
// max-width/padding so every section lines up with it exactly.
const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

// Autoplay timing for the "Digital IT Operations Services" tab list
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

// SEO / AEO note: this page is written to sit alongside Starfii's real
// service lines (see https://www.starfii.com/services) — Cloud
// Engineering (AWS/Azure/GCP), DevOps & Quality Engineering,
// Cybersecurity, Data Engineering & BI, and Legacy Modernization —
// rather than inventing a separate managed-IT-operations product.
// Primary keyword targets: "digital IT operations services", "cloud
// infrastructure management", "DevOps operations", "cybersecurity
// operations", "IT support and maintenance", "24/7 SLA support".

const keyTakeaways = [
  "Starfii keeps client systems stable and support responsive by running IT operations across cloud engineering, DevOps, cybersecurity, and data infrastructure as one connected model.",
  "With 3+ development locations and 80+ skilled professionals, Starfii supports operations across time zones with a low-attrition, dedicated delivery team.",
  "We've supported 20+ successful partnerships, including Fortune 500 clients, keeping production systems on AWS, Azure, and GCP running reliably.",
  "Every engagement includes a free warranty period and SLA-backed support, so systems stay covered well after go-live, not just during development.",
];

const focusAreas = [
  {
    title: "Cloud Infrastructure & Operations (AWS, Azure, GCP)",
    body: "We design, monitor, and manage cloud infrastructure across AWS, Azure, and GCP — from architecture and migration through day-to-day operations and cost optimization.",
  },
  {
    title: "DevOps & Continuous Operations",
    body: "We run DevOps and test automation across the delivery pipeline, so releases ship faster and production stays stable as deployment frequency increases.",
  },
  {
    title: "Cybersecurity & Security Operations",
    body: "We build a resilient security framework around your IT infrastructure, helping protect systems and data against evolving cyber threats and compliance risks.",
  },
  {
    title: "Data Engineering, BI & Operational Analytics",
    body: "Our certified data engineers build the data infrastructure, and our data scientists turn operational data into the insights that inform better decisions.",
  },
  {
    title: "Legacy System Modernization & Operational Continuity",
    body: "We assess legacy systems, build a modernization roadmap, and migrate to future-ready platforms without disrupting the operations that depend on them.",
  },
  {
    title: "Enterprise Product Support & Maintenance",
    body: "Beyond launch, we provide ongoing product support and maintenance for enterprise and SaaS platforms, backed by a free warranty period and SLA support.",
  },
  {
    title: "AI/ML-Powered Operations Automation",
    body: "We apply Generative AI and LLM-driven automation to reduce manual operational tasks and improve efficiency across repetitive IT workflows.",
  },
  {
    title: "Flexible Engagement & Team Models",
    body: "Choose the model that fits — time & material or fixed price — and scale from a full delivery team to specific specialists at any project stage.",
  },
];

const tabs = [
  {
    label: "Cloud: Stabilize Multi-Cloud Environments",
    heading: "One consistent operations model across AWS, Azure, and GCP",
    body: "We manage cloud infrastructure end to end — architecture, migration, monitoring, and cost control — so your operations stay consistent whether workloads run on one cloud or several.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "DevOps: Automate the Release Pipeline",
    heading: "Faster, safer releases with DevOps and test automation",
    body: "We integrate DevOps practices and automated testing into your delivery pipeline, so new releases ship quickly without putting production stability at risk.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Cybersecurity: Protect What You Run",
    heading: "A resilient security framework for enterprise IT infrastructure",
    body: "We help build and operate a cybersecurity framework that protects your systems and data from evolving threats, without slowing down the teams that depend on them.",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Data: Turn Operations into Insight",
    heading: "Operational data, engineered and analyzed for better decisions",
    body: "Our data engineers build the pipelines and our data scientists surface the patterns, turning day-to-day operational data into insights leadership can act on.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Modernization: Migrate Without Disruption",
    heading: "Moving off legacy systems without breaking what already works",
    body: "We assess your legacy stack, map a modernization roadmap, and migrate to a future-ready platform in stages, so operations continue running throughout the transition.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
  },
];

// AEO / GEO section — short, self-contained Q&A pairs, grounded in
// Starfii's actual service offerings and public facts so AI answer
// engines (Google AI Overviews, ChatGPT, Perplexity, Gemini) can cite
// this page accurately.
const faqs = [
  {
    q: "What does Starfii's digital IT operations support include?",
    a: "Starfii's IT operations support spans cloud infrastructure management (AWS, Azure, GCP), DevOps and release automation, cybersecurity, data engineering and BI, and ongoing product maintenance — backed by SLA support.",
  },
  {
    q: "Does Starfii support multi-cloud environments?",
    a: "Yes. Starfii designs, migrates, and operates infrastructure across AWS, Azure, and GCP, giving clients one consistent operations model regardless of which cloud platform they run on.",
  },
  {
    q: "What happens after a Starfii project goes live?",
    a: "Every Starfii engagement includes a free warranty period and SLA-backed support after launch, so systems continue to be monitored, maintained, and supported — not just handed off at go-live.",
  },
  {
    q: "Can Starfii modernize legacy systems without disrupting operations?",
    a: "Yes. Starfii assesses existing legacy systems, builds a phased modernization roadmap, and migrates workloads to a scalable, future-ready platform while keeping day-to-day operations running.",
  },
  {
    q: "What engagement models does Starfii offer for ongoing IT operations?",
    a: "Clients can choose time & material or fixed-price engagement models, and can hire a full delivery team or specific specialists at any stage of the project or operations lifecycle.",
  },
];

export default function DigitalITOperationsServicesSection() {
  const [takeawaysOpen, setTakeawaysOpen] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [tabHovered, setTabHovered] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
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
    <main className="bg-white">
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
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1800&auto=format&fit=crop"
            alt="Enterprise IT operations team monitoring cloud infrastructure"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/10" />
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
            <span className="text-slate-500">Digital IT Operations</span>
          </motion.nav>

          <motion.h1
            variants={heroItem}
            className="font-heading mt-8 max-w-xl text-[44px] font-medium leading-[1.15] lg:text-[54px]"
            style={{ color: CHAMPION_BLUE }}
          >
            Digital IT Operations Services for Growing Enterprises
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="font-body mt-6 max-w-lg text-[17px] leading-relaxed text-slate-600"
          >
            Cloud infrastructure, DevOps, cybersecurity, and data
            operations under one dependable delivery model — backed by
            SLA support and a free warranty period on every engagement.
          </motion.p>

          <motion.a
            variants={heroItem}
            href="/services#serviceconact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="font-body mt-9 inline-flex items-center gap-2 rounded-full px-7 py-4 text-[15px] font-semibold text-white"
            style={{ backgroundColor: CHAMPION_BLUE }}
          >
            Request Your POC Now
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
            A dependable digital IT operations partner, Starfii keeps
            enterprise systems stable and support responsive by pairing
            cloud engineering, DevOps, and cybersecurity under one
            delivery model.
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
                How Do Growing Enterprises Keep IT Operations Stable?
              </h2>
              <p className="font-body mt-5 text-[15px] leading-relaxed text-slate-600">
                Enterprises keep IT operations stable by combining
                well-managed cloud infrastructure, disciplined DevOps
                practices, and proactive security operations. Starfii
                brings these together across{" "}
                <a href="/services" className="underline" style={{ color: CHAMPION_BLUE }}>
                  cloud engineering, DevOps, and cybersecurity services
                </a>{" "}
                to catch issues early, cut resolution times, and reduce
                the operational noise that pulls teams away from real
                work.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                alt="IT operations engineers reviewing cloud infrastructure dashboards"
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
                Our IT Operations &
                <br />
                Support Capabilities
              </h2>
              <p className="font-body mt-5 text-[15px] leading-relaxed text-slate-600">
                Monitor, manage, and modernize IT operations across
                cloud, data, and security, so enterprise systems stay
                stable and support stays fast as the business scales.
                See our full{" "}
                <a href="/services" className="underline" style={{ color: LAVENDER_ACCENT }}>
                  service offerings
                </a>
                .
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
                    href="/services"
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
            TABBED DEEP-DIVE — auto-advancing tab list
        ============================================================ */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="mt-24 pb-16"
        >
          <h2
            className="font-heading text-[34px] font-medium"
            style={{ color: CHAMPION_BLUE }}
          >
            Digital IT Operations Services, Explained
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

              <div className="h-[280px] md:h-full">
                <img
                  src={current.image}
                  alt={current.label}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ============================================================
            FAQ — built for AEO/GEO: short, self-contained Q&A pairs
            grounded in real Starfii facts (services, warranty/SLA,
            engagement models). Pair with FAQPage JSON-LD in your
            page/layout file (see note at bottom of this file).
        ============================================================ */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="pb-28"
        >
          <h2
            className="font-heading text-[34px] font-medium"
            style={{ color: CHAMPION_BLUE }}
          >
            Frequently Asked Questions
          </h2>
          <p className="font-body mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600">
            Common questions about Starfii's digital IT operations
            support, cloud engineering, and DevOps services.
          </p>

          <div className="mt-8 divide-y" style={{ borderColor: "#E5E1F5" }}>
            {faqs.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={item.q} style={{ borderColor: "#E5E1F5" }} className="border-t first:border-t-0">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span
                      className="font-body text-[17px] font-medium"
                      style={{ color: CHAMPION_BLUE }}
                    >
                      {item.q}
                    </span>
                    <ChevronDown
                      size={18}
                      style={{ color: LAVENDER_ACCENT }}
                      className={`shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="font-body pb-6 text-[15px] leading-relaxed text-slate-600">
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </motion.section>
      </div>
    </main>
  );
}

/*
  SEO / AEO / GEO checklist for this page (apply outside this
  component, since it's a client component and can't export metadata):

  1. Page <title>: "Digital IT Operations Services | Cloud, DevOps &
     Cybersecurity | Starfii Technology" (under 60 chars).
  2. Meta description: "Starfii runs digital IT operations across
     cloud infrastructure, DevOps, cybersecurity, and data engineering
     — with SLA support and a free warranty period on every project."
  3. Add JSON-LD structured data in your page/layout:
     - Service schema (provider: Starfii Technology Pvt. Ltd.).
     - FAQPage schema mirroring the `faqs` array above.
  4. Internal links added in-page to /services, matching real nav
     structure — this keeps the page topically consistent with the
     rest of starfii.com, which helps both crawlers and AI answer
     engines understand the page correctly.
  5. Content here intentionally avoids claiming services Starfii
     doesn't list publicly (e.g. a dedicated AIOps product, formal
     ITSM/ServiceNow practice, or 24/7 service desk) — if any of these
     are real but just not on the site yet, let me know and I'll fold
     the exact terminology in.
*/
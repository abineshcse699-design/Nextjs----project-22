"use client";

import { useState } from "react";
import {
  ChevronRight,
  ChevronDown,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const CHAMPION_BLUE = "#1B2560";
const LAVENDER_ACCENT = "#A48FEA";

// Shared page-width wrapper — kept in sync with the navbar's own
// max-width/padding so every section lines up with it exactly.
const ALIGN =
  "mx-auto max-w-[1830px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12";

const keyTakeaways = [
  "Starfii helps enterprises turn scattered data into a governed, trusted asset that decisions can actually rely on.",
  "We design data platforms, pipelines, and models that scale from a single business unit to the whole enterprise.",
  "Our focus spans data engineering, data science, analytics, and governance, wired together end to end.",
  "We pair modern data architecture with AI-ready pipelines so analytics keeps up as the business changes.",
];

const focusAreas = [
  {
    title: "Data Engineering",
    body: "We design and build resilient pipelines and data platforms with certified data engineers, so every downstream system works from clean, timely data.",
  },
  {
    title: "Data Science & Advanced Analytics",
    body: "Our data scientists build the models and surface the patterns behind better decisions, from forecasting to anomaly detection to recommendation.",
  },
  {
    title: "Cloud Data Platforms",
    body: "We architect and migrate data estates onto modern cloud platforms, built for scale, cost control, and near-real-time access.",
  },
  {
    title: "Data Governance & Quality",
    body: "We put stewardship, lineage, and quality checks in place so data stays trustworthy as it moves across systems and teams.",
  },
  {
    title: "Reporting and Dashboards — BI",
    body: "We turn raw data into actionable insight using Tableau and Power BI, so decision-makers see what matters without digging for it.",
  },
  {
    title: "MDM & Data Integration",
    body: "We consolidate fragmented sources into a single, reliable master record, so every team works from the same version of the truth.",
  },
  {
    title: "Generative AI on Enterprise Data",
    body: "We connect gen AI and LLMs to your own data safely, so teams can query, summarize, and act on it in plain language.",
  },
  {
    title: "Data Migration & Modernization",
    body: "We move legacy warehouses and marts onto modern platforms with minimal disruption, closing the gap between old systems and new demands.",
  },
];

const tabs = [
  {
    label: "Build a Single Source of Truth",
    heading: "One governed data foundation, not a dozen conflicting copies",
    body: "We consolidate fragmented data sources into a governed platform, so every team — from finance to product — works from numbers everyone trusts.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Engineer Pipelines That Scale",
    heading: "Pipelines built for the data volumes you'll have next year, not just today",
    body: "Our engineering teams design ingestion and transformation pipelines that scale with the business, so growth doesn't mean rebuilding your data stack from scratch.",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Turn Data into Decisions",
    heading: "Analytics and dashboards people actually open",
    body: "We design reporting and BI experiences around the decisions your teams make every day, not just the metrics that are easy to compute.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Modernize Legacy Data Estates",
    heading: "A clear path off aging warehouses and brittle ETL",
    body: "We assess your existing data estate, build a modernization roadmap, and migrate you to a cloud-native platform with minimal disruption to reporting.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Apply AI to Your Own Data",
    heading: "Gen AI and machine learning grounded in your enterprise data",
    body: "We connect models to your governed data safely, so predictions, summaries, and recommendations are grounded in what's actually true for your business.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function DataAnalyticsServicesSection() {
  const [takeawaysOpen, setTakeawaysOpen] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const current = tabs[activeTab];

  return (
    // pt-[92px] / lg:pt-[100px] added below to offset the fixed Navbar
    // (16px outer top gap + 76px navbar height on mobile = 92px;
    // 16px + 84px navbar height on lg = 100px), so the hero/breadcrumb
    // no longer sits underneath the fixed navbar.
    <main className="bg-white pt-[92px] lg:pt-[100px]">
      {/* ============================================================
          HERO
          NOTE: background image swapped to a softer office/workspace
          shot, and the gradient scrim strengthened (white/95 → white/40)
          so the headline stays crisp instead of fighting a busy
          dashboard image behind it.
      ============================================================ */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1800&auto=format&fit=crop"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40" />
        </div>

        <div className={`${ALIGN} py-24 lg:py-32`}>
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[14px] font-medium"
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
          </nav>

          <h1
            className="mt-8 max-w-xl text-[44px] font-medium leading-[1.15] lg:text-[54px]"
            style={{ color: CHAMPION_BLUE }}
          >
            Data & Analytics Services for Decisions You Can Trust
          </h1>

          <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-slate-600">
            Turn scattered, siloed data into a governed platform that
            powers faster, more confident decisions across the
            enterprise.
          </p>

          <a
            href="#connect"
            className="mt-9 inline-flex items-center gap-2 rounded-full px-7 py-4 text-[15px] font-semibold text-white transition-transform hover:scale-[1.03]"
            style={{ backgroundColor: CHAMPION_BLUE }}
          >
            Connect Now
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      <div className={ALIGN}>
        {/* ============================================================
            KEY TAKEAWAYS
        ============================================================ */}
        <section className="mt-16">
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
                className="flex items-center gap-2.5 text-[16px] font-semibold"
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
                    className="pt-3 text-[15px] leading-relaxed text-slate-700"
                  >
                    • {point}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <p
            className="mt-10 max-w-3xl text-[26px] leading-snug lg:text-[30px]"
            style={{ color: CHAMPION_BLUE }}
          >
            A trusted data and analytics partner, Starfii builds governed
            platforms and AI-ready pipelines that turn scattered
            enterprise data into decisions your business can rely on.
          </p>
        </section>

        {/* ============================================================
            Q&A BLOCK
        ============================================================ */}
        <section className="mt-20">
          <div
            className="grid grid-cols-1 items-center gap-10 rounded-2xl p-10 lg:grid-cols-2"
            style={{ backgroundColor: "#F5F3FC" }}
          >
            <div>
              <h2
                className="text-[26px] font-medium leading-snug lg:text-[30px]"
                style={{ color: LAVENDER_ACCENT }}
              >
                How Do Enterprises Turn Raw Data Into a Trusted Asset?
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-slate-600">
                Enterprises build trust in their data by combining strong
                governance, scalable engineering, and analytics that
                answer real business questions. Starfii brings these
                together to reduce data silos, speed up reporting, and
                give every team a foundation of numbers they don't have
                to second-guess.
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
        </section>

        {/* ============================================================
            FOCUS AREAS
        ============================================================ */}
        <section className="mt-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2.6fr]">
            <div>
              <h2
                className="text-[36px] font-medium leading-[1.15]"
                style={{ color: CHAMPION_BLUE }}
              >
                Our Data & Analytics
                <br />
                Capabilities
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-slate-600">
                Plan, engineer, and govern data platforms that scale with
                the business, so analytics and AI stay grounded in data
                you can trust.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {focusAreas.map((area) => (
                <div
                  key={area.title}
                  className="rounded-xl p-7 transition-transform duration-300 hover:-translate-y-1"
                  style={{ backgroundColor: "#F5F3FC" }}
                >
                  <h3
                    className="text-[19px] font-semibold"
                    style={{ color: CHAMPION_BLUE }}
                  >
                    {area.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                    {area.body}
                  </p>
                  <a
                    href="#"
                    className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-medium"
                    style={{ color: LAVENDER_ACCENT }}
                  >
                    Learn More
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            TABBED DEEP-DIVE
        ============================================================ */}
        <section className="mt-24 pb-28">
          <h2
            className="text-[34px] font-medium"
            style={{ color: CHAMPION_BLUE }}
          >
            Data & Analytics Services
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[320px_1fr]">
            <ul className="space-y-1 border-l" style={{ borderColor: "#E5E1F5" }}>
              {tabs.map((tab, i) => {
                const isActive = i === activeTab;
                return (
                  <li key={tab.label}>
                    <button
                      type="button"
                      onClick={() => setActiveTab(i)}
                      className="-ml-px block border-l-2 py-3 pl-5 text-left text-[16px] transition-colors duration-200"
                      style={{
                        borderColor: isActive ? CHAMPION_BLUE : "transparent",
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

            <div
              className="grid grid-cols-1 overflow-hidden rounded-2xl md:grid-cols-2"
              style={{ backgroundColor: "#F5F3FC" }}
            >
              <div className="flex flex-col justify-center p-10">
                <h3
                  className="text-[22px] font-semibold leading-snug"
                  style={{ color: CHAMPION_BLUE }}
                >
                  {current.heading}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                  {current.body}
                </p>
              </div>

              <div className="min-h-[280px]">
                <img
                  src={current.image}
                  alt={current.label}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
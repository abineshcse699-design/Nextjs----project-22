"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ArrowUpRight,
  Plus,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { caseStudies as sharedCaseStudies } from "@/app/services/data-analytics/casestudies/data/casestudies";

const CHAMPION_BLUE = "#1B2560";
const LAVENDER_ACCENT = "#A48FEA";

const DARK_BG = "#0A0A18";
const DARK_CARD = "rgba(255,255,255,0.04)";
const DARK_BORDER = "rgba(255,255,255,0.09)";
const ACCENT_INDIGO = "#6C5DD3";

const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

const TAB_AUTOPLAY_MS = 4000;

const HERO_HEADING =
  "font-heading font-medium leading-[1.08] text-[46px] sm:text-[56px] lg:text-[66px]";

const SECTION_HEADING =
  "font-heading font-medium leading-[1.15] text-[34px] sm:text-[40px] lg:text-[46px]";

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
  "Starfii helps enterprises turn fragmented, siloed data into a single governed platform that every team can trust and act on.",
  "Our data engineering and cloud platform teams build resilient pipelines that scale with the business, so growth never means rebuilding your data stack.",
  "We connect Generative AI and LLMs safely to your own enterprise data, so teams can query, summarize, and act on it in plain language.",
  "Our approach combines data governance, quality checks, and stewardship with modern BI and analytics to deliver decisions your business can rely on.",
];

const focusAreas = [
  {
    title: "Data Engineering",
    body: "Starfii's certified data engineers design and build resilient pipelines and data platforms, so every downstream system works from clean, timely, well governed data.",
    tags: ["PIPELINES", "ETL", "ORCHESTRATION"],
  },
  {
    title: "Data Architecture",
    body: "Starfii designs the blueprints for how data flows, is stored, and is accessed across your organization, so every new source and pipeline fits a plan instead of adding to the sprawl.",
    tags: ["ARCHITECTURE", "DATA MODELING", "SCHEMA DESIGN"],
  },
  {
    title: "Data Pipelines & Orchestration",
    body: "We build ingestion and transformation pipelines with automated orchestration and monitoring, so data lands where it is needed, on schedule, without manual babysitting.",
    tags: ["ORCHESTRATION", "INGESTION", "ETL/ELT"],
  },
  {
    title: "Cloud Data Platforms",
    body: "Starfii architects and migrates data estates onto modern cloud data platforms on AWS, Azure, and GCP, built for scale, cost control, and near real time access.",
    tags: ["AWS", "AZURE", "GCP"],
  },
  {
    title: "Data Analytics",
    body: "Starfii turns raw, siloed data into clear analysis, surfacing trends and answering the business questions teams actually ask.",
    tags: ["ANALYTICS", "SELF-SERVICE", "INSIGHTS"],
  },
  {
    title: "Business Intelligence & Dashboards",
    body: "We turn raw data into actionable business intelligence using Tableau and Power BI, so decision makers see what matters without digging for it.",
    tags: ["TABLEAU", "POWER BI", "DASHBOARDS"],
  },
  {
    title: "Data Science & Advanced Analytics",
    body: "Our data scientists build the models and surface the patterns behind better decisions, from demand forecasting to anomaly detection to product recommendation.",
    tags: ["ML", "FORECASTING", "STATISTICAL MODELING"],
  },
  {
    title: "AI-Ready Data",
    body: "Starfii prepares and governs enterprise data so it is clean, contextual, and safe for AI and LLM consumption, turning raw records into something models can actually reason over.",
    tags: ["AI-READY", "RAG", "DATA QUALITY"],
  },
  {
    title: "Data Modernization",
    body: "We move legacy warehouses and data marts onto modern cloud platforms with minimal disruption, closing the gap between old systems and new business demands.",
    tags: ["MIGRATION", "MODERNIZATION", "CLOUD"],
  },
  {
    title: "Data Governance & Quality",
    body: "We put stewardship, lineage, and data quality checks in place so your enterprise data stays trustworthy as it moves across systems and teams.",
    tags: ["GOVERNANCE", "LINEAGE", "QUALITY"],
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
];

const tabs = [
  {
    label: "Architecture: Design the Foundation",
    heading: "A data architecture blueprint before a single pipeline gets built",
    body: "Starfii maps how data should flow, where it should live, and who should access it, so every new source and pipeline fits a plan instead of adding to the sprawl.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=90&w=1800&auto=format&fit=crop",
  },
  {
    label: "Build a Single Source of Truth",
    heading: "One governed data foundation, not a dozen conflicting copies",
    body: "Starfii consolidates fragmented data sources into a governed platform, so every team, from finance to product, works from numbers everyone trusts.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=90&w=1800&auto=format&fit=crop",
  },
  {
    label: "Engineer Pipelines That Scale",
    heading: "Pipelines built for the data volumes you will have next year, not just today",
    body: "Our data engineering teams design ingestion and transformation pipelines that scale with the business, so growth does not mean rebuilding your data stack from scratch.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=90&w=1800&auto=format&fit=crop",
  },
  {
    label: "Platforms: Pick the Right Cloud Fit",
    heading: "A cloud data platform sized for your workloads, not a one-size-fits-all default",
    body: "Starfii architects and migrates data estates onto AWS, Azure, or GCP data platforms built for scale, cost control, and near real time access.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=90&w=1800&auto=format&fit=crop",
  },
  {
    label: "Turn Data into Decisions",
    heading: "Analytics and dashboards people actually open",
    body: "Starfii designs reporting and BI experiences around the decisions your teams make every day, not just the metrics that are easy to compute.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=90&w=1800&auto=format&fit=crop",
  },
  {
    label: "Data Science: Find the Pattern",
    heading: "Models that surface the pattern behind the decision, not just a dashboard number",
    body: "Starfii's data scientists build forecasting, anomaly detection, and recommendation models grounded in your governed data, so predictions hold up in production.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=90&w=1800&auto=format&fit=crop",
  },
  {
    label: "Modernize Legacy Data Estates",
    heading: "A clear path off aging warehouses and brittle ETL",
    body: "We assess your existing data estate, build a data modernization roadmap, and migrate you to a cloud native platform with minimal disruption to reporting.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=90&w=1800&auto=format&fit=crop",
  },
  {
    label: "Apply AI to Your Own Data",
    heading: "AI-ready data that keeps Gen AI and machine learning grounded in what is true",
    body: "Starfii prepares and connects AI models to your governed data safely, so predictions, summaries, and recommendations stay grounded in your enterprise data, not a generic model's guesswork.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=90&w=1800&auto=format&fit=crop",
  },
];

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

type Insight = {
  slug: string;
  title: string;
  body: string;
  image: string;
  gradient?: boolean;
};

const insights: Insight[] = [
  {
    slug: "generative-ai-enterprise-data-warehouses-to-answers",
    title: "Generative AI on Enterprise Data: From Warehouses to Answers",
    body: "See how Starfii connects LLMs to governed data so teams get plain language answers, not just another dashboard to read.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=90&w=1800&auto=format&fit=crop",
    gradient: false,
  },
  {
    slug: "cloud-data-platforms-aws-azure-gcp",
    title: "Cloud Data Platforms: Choosing Between AWS, Azure, and GCP",
    body: "Compare cost, governance, and near real time access across the three major cloud data stacks and how Starfii picks the right ",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=90&w=1800&auto=format&fit=crop",
  },
  {
    slug: "data-governance-at-scale-trust-every-pipeline",
    title: "Data Governance at Scale: Building Trust Into Every Pipeline",
    body: "Explore how lineage, stewardship, and automated quality checks keep enterprise data trustworthy as it scales.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=90&w=1800&auto=format&fit=crop",
  },
  {
    slug: "mdm-in-practice-one-customer-record",
    title: "MDM in Practice: Getting Every Team to One Customer Record",
    body: "A practical look at how master data management removes conflicting records across sales, support, and marketing systems.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=90&w=3840&auto=format&fit=crop",
  },
  {
    slug: "legacy-warehouse-to-lakehouse-migration-playbook",
    title: "From Legacy Warehouse to Lakehouse: A Migration Playbook",
    body: "Starfii's phased approach to moving reporting off aging warehouses without breaking the dashboards teams rely on daily.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=90&w=1800&auto=format&fit=crop",
  },
  {
    slug: "bi-dashboards-designed-around-decisions",
    title: "BI That Gets Opened: Designing Dashboards Around Decisions",
    body: "Why the best dashboards start from the decision a team needs to make, not the metrics that are easiest to compute.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=90&w=1800&auto=format&fit=crop",
  },
];

type UseCase = {
  industry: string;
  title: string;
  body: string;
};

const useCases: UseCase[] = [
  {
    industry: "Retail & E-Commerce",
    title: "Real Time Demand Forecasting",
    body: "Unify point-of-sale, inventory, and web data into one pipeline so merchandising teams forecast demand and avoid stockouts before they happen.",
  },
  {
    industry: "Financial Services",
    title: "Fraud & Anomaly Detection",
    body: "Apply data science models to transaction streams so unusual patterns get flagged in near real time, not after the fraud has already settled.",
  },
  {
    industry: "Healthcare",
    title: "Unified Patient Data Platform",
    body: "Bring records from EHR, labs, and claims systems into a governed data platform, giving clinicians and analysts one trustworthy view of patient history.",
  },
  {
    industry: "Manufacturing",
    title: "Predictive Maintenance Analytics",
    body: "Pipe sensor and equipment telemetry into a cloud data platform so maintenance teams predict failures before they cause downtime.",
  },
  {
    industry: "Insurance",
    title: "Claims Data Governance",
    body: "Apply lineage, stewardship, and quality checks across claims data so audit and compliance teams trust every number they report on.",
  },
  {
    industry: "Telecom",
    title: "Customer Churn Prediction",
    body: "Combine usage, billing, and support data into AI-ready datasets so retention teams act on churn risk weeks before a customer cancels.",
  },
];

function useTypewriterList(
  items: string[],
  active: boolean,
  speed: number = 16,
  pauseBetween: number = 300
): { displayed: string[]; typingIndex: number } {
  const [displayed, setDisplayed] = useState<string[]>(() => items.map(() => ""));
  const [typingIndex, setTypingIndex] = useState(-1);

  const itemsRef = useRef(items);
  itemsRef.current = items;

  useEffect(() => {
    if (!active) {
      setDisplayed(items.map(() => ""));
      setTypingIndex(-1);
      return undefined;
    }

    let cancelled = false;
    let itemIndex = 0;
    let charIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const typeStep = () => {
      if (cancelled) return;

      const currentItems = itemsRef.current;
      if (itemIndex >= currentItems.length) return;

      const currentLine = currentItems[itemIndex];
      if (currentLine === undefined) return;

      charIndex += 1;
      setTypingIndex(itemIndex);
      setDisplayed((prev) => {
        const next = [...prev];
        while (next.length < currentItems.length) next.push("");
        next[itemIndex] = currentLine.slice(0, charIndex);
        return next;
      });

      if (charIndex >= currentLine.length) {
        itemIndex += 1;
        charIndex = 0;
        timeoutId = setTimeout(typeStep, pauseBetween);
      } else {
        timeoutId = setTimeout(typeStep, speed);
      }
    };

    timeoutId = setTimeout(typeStep, pauseBetween);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, items.join("|"), speed, pauseBetween]);

  return { displayed, typingIndex };
}

function WhyMattersAccordion({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (updater: (prev: boolean) => boolean) => void;
}) {
  const { displayed, typingIndex } = useTypewriterList(keyTakeaways, open);

  return (
    <div
      className="overflow-hidden rounded-[22px] border bg-white transition-colors duration-300"
      style={{ borderColor: open ? ACCENT_INDIGO : LAVENDER_ACCENT }}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full min-h-[104px] items-center justify-between gap-4 px-8 py-6 text-left lg:px-10"
        style={{
          borderBottom: open ? `1px solid ${LAVENDER_ACCENT}` : "1px solid transparent",
        }}
      >
        <div className="flex items-center gap-3">
          <img
            src="/starfii_logo_black.svg"
            alt="Starfii"
            className="h-10 w-20 flex-shrink-0 object-contain"
          />
          <span className="font-body text-[17px] font-semibold" style={{ color: CHAMPION_BLUE }}>
            Why Data &amp; Analytics Matters
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span
            className="font-body hidden rounded-full px-5 py-2.5 text-[13px] font-semibold sm:inline-flex"
            style={{ backgroundColor: "#F1EEFC", color: ACCENT_INDIGO }}
          >
            Trusted Data
          </span>

          <ChevronDown
            size={20}
            strokeWidth={2.2}
            className="flex-shrink-0 transition-transform duration-300"
            style={{
              color: ACCENT_INDIGO,
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </div>
      </button>

      <div
        className="grid transition-all duration-500 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <ul className="space-y-5 px-8 py-10 lg:px-10">
            {keyTakeaways.map((line, i) => {
              const text = displayed[i];
              if (!text && i !== 0) return null;

              const isTyping = i === typingIndex && text.length < line.length;

              return (
                <li
                  key={line}
                  className="flex gap-2 font-body text-[15px] leading-[1.8] text-slate-600"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                    style={{ backgroundColor: ACCENT_INDIGO }}
                  />
                  <span>
                    {text}
                    {isTyping && (
                      <span
                        className="ss-caret ml-0.5 inline-block h-4 w-[2px] align-middle"
                        style={{ backgroundColor: ACCENT_INDIGO }}
                      />
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ===============================================================
   ECOSYSTEM ACCORDION
   Matches the Software page's EcosystemAccordion exactly:
   - Two independent columns (opening a left card never stretches
     the card sitting next to it on the right)
   - Smooth 0fr -> 1fr grid-row expand (no sudden pop)
   - Glow shadow on the open card
   - Plus icon rotates 45deg into an "x" when open
================================================================ */

function EcosystemAccordion() {
  // null = everything closed. 0 = first card open by default.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const columns: { item: (typeof impactAreas)[number]; index: number }[][] = [[], []];
  impactAreas.forEach((entry, index) => {
    const target = columns[index % 2];
    if (target) target.push({ item: entry, index });
  });

  return (
    <div className="mt-14 grid grid-cols-1 items-start gap-5 sm:grid-cols-2">
      {columns.map((column, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-5">
          {column.map(({ item: area, index }) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={area.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={item}
              >
                <div
                  className="overflow-hidden rounded-2xl bg-white transition-shadow duration-300 hover:shadow-xl"
                  style={{
                    boxShadow: isOpen
                      ? "0 18px 40px rgba(15,23,42,0.18)"
                      : undefined,
                  }}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`da-ecosystem-panel-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 px-8 py-7 text-left"
                  >
                    <span
                      className="font-body text-[19px] font-medium leading-snug transition-colors duration-300"
                      style={{ color: isOpen ? ACCENT_INDIGO : CHAMPION_BLUE }}
                    >
                      {area.title}
                    </span>

                    <span
                      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300"
                      style={{
                        backgroundColor: isOpen ? "#E5E1F5" : ACCENT_INDIGO,
                        color: isOpen ? "#8B93A7" : "#FFFFFF",
                      }}
                    >
                      <Plus
                        size={18}
                        style={{
                          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                          transition: "transform 0.3s ease",
                        }}
                      />
                    </span>
                  </button>

                  {/* 0fr -> 1fr gives a smooth auto-height expand */}
                  <div
                    id={`da-ecosystem-panel-${index}`}
                    className="grid transition-all duration-500 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="font-body px-8 pb-8 text-[15px] leading-[1.75] transition-opacity duration-500"
                        style={{ color: CHAMPION_BLUE, opacity: isOpen ? 1 : 0 }}
                      >
                        {area.body}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

/* ===============================================================
   REUSABLE: StepCarousel
   Moves exactly ONE card per arrow click. `gap` controls both the
   spacing between cards AND is baked into the per-card width calc,
   so it must match whatever gap-* / spaceBetween value the caller
   actually renders with. Also supports fractional `perPage` values
   (e.g. 1.15) for a "peek" of the next card on mobile.
================================================================ */

type StepCarouselProps<T> = {
  items: T[];
  itemsPerPage: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  renderItem: (item: T, index: number) => ReactNode;
  dark?: boolean;
  gap?: number; // px — must match the gap actually applied to the track
};

function StepCarousel<T>({
  items,
  itemsPerPage,
  renderItem,
  dark = false,
  gap = 24,
}: StepCarouselProps<T>) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [perPage, setPerPage] = useState(itemsPerPage.desktop);
  const [position, setPosition] = useState(0);
  const [stepWidth, setStepWidth] = useState(0);

  const updatePerPage = useCallback(() => {
    if (window.innerWidth <= 639) {
      setPerPage(itemsPerPage.mobile);
    } else if (window.innerWidth <= 1023) {
      setPerPage(itemsPerPage.tablet);
    } else {
      setPerPage(itemsPerPage.desktop);
    }
  }, [itemsPerPage]);

  const measure = useCallback(() => {
    const track = trackRef.current;
    const firstCard = track?.firstElementChild as HTMLElement | null;
    if (!firstCard) return;
    setStepWidth(firstCard.getBoundingClientRect().width + gap);
  }, [gap]);

  useEffect(() => {
    updatePerPage();
    measure();

    window.addEventListener("resize", updatePerPage);
    window.addEventListener("resize", measure);

    return () => {
      window.removeEventListener("resize", updatePerPage);
      window.removeEventListener("resize", measure);
    };
  }, [updatePerPage, measure]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(track);

    const firstCard = track.firstElementChild as HTMLElement | null;
    if (firstCard) resizeObserver.observe(firstCard);

    return () => resizeObserver.disconnect();
  }, [measure, perPage]);

  // Math.ceil so a fractional perPage (e.g. 1.15 for a "peek" card) still
  // lands on a whole card instead of stopping mid-card.
  const maxPosition = Math.max(0, Math.ceil(items.length - perPage));
  const totalPositions = Math.max(1, maxPosition + 1);

  useEffect(() => {
    setPosition((currentPosition) => Math.min(currentPosition, maxPosition));
  }, [maxPosition]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !stepWidth) return;

    track.scrollTo({
      left: position * stepWidth,
      behavior: "smooth",
    });
  }, [position, stepWidth]);

  const progress = ((position + 1) / totalPositions) * 100;

  return (
    <div>
      <div
        ref={trackRef}
        className="flex overflow-x-auto pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollBehavior: "smooth", gap: `${gap}px` }}
      >
        {items.map((entry, index) => (
          <div
            key={index}
            className="min-w-0 flex-shrink-0 snap-start"
            style={{
              width:
                perPage === 1
                  ? "100%"
                  : `calc((100% - ${(perPage - 1) * gap}px) / ${perPage})`,
            }}
          >
            {renderItem(entry, index)}
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-6">
        <div
          className="h-[2px] flex-1 overflow-hidden rounded-full"
          style={{
            backgroundColor: dark ? "rgba(255,255,255,0.15)" : "#CBD5E1",
          }}
        >
          <div
            className="h-full transition-[width] duration-500 ease-out"
            style={{
              width: `${progress}%`,
              backgroundColor: ACCENT_INDIGO,
            }}
          />
        </div>

        <span
          className="font-body flex-none text-[14px] tabular-nums"
          style={{
            color: dark ? "rgba(255,255,255,0.55)" : "#94A3B8",
          }}
        >
          {String(position + 1).padStart(2, "0")} /{" "}
          {String(totalPositions).padStart(2, "0")}
        </span>

        <div className="flex flex-none items-center gap-3">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => setPosition((p) => Math.max(0, p - 1))}
            disabled={position === 0}
            className="flex h-11 w-11 items-center justify-center rounded-full transition-all duration-200 hover:scale-105 disabled:opacity-40 disabled:hover:scale-100"
            style={{
              backgroundColor: dark ? "rgba(255,255,255,0.10)" : "#E5E1F5",
              color: dark ? "#fff" : CHAMPION_BLUE,
            }}
          >
            <ChevronLeft size={18} />
          </button>

          <button
            type="button"
            aria-label="Next"
            onClick={() => setPosition((p) => Math.min(maxPosition, p + 1))}
            disabled={position === maxPosition}
            className="flex h-11 w-11 items-center justify-center rounded-full text-white transition-all duration-200 hover:scale-105 disabled:opacity-40 disabled:hover:scale-100"
            style={{ backgroundColor: ACCENT_INDIGO }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function DataAnalyticsServicesSection() {
  const [takeawaysOpen, setTakeawaysOpen] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [tabHovered, setTabHovered] = useState(false);
  const [insightPage, setInsightPage] = useState(0);
  const [insightStepWidth, setInsightStepWidth] = useState(0);
  const insightTrackRef = useRef<HTMLDivElement | null>(null);
  const current = tabs[activeTab];

  const INSIGHTS_PER_PAGE = 3;
  const maxInsightPage = Math.max(0, insights.length - INSIGHTS_PER_PAGE);
  const insightPages = maxInsightPage + 1;

  const measureInsightStep = useCallback(() => {
    const track = insightTrackRef.current;
    const firstCard = track?.firstElementChild as HTMLElement | null;
    if (!firstCard) return;
    setInsightStepWidth(firstCard.getBoundingClientRect().width + 24);
  }, []);

  useEffect(() => {
    measureInsightStep();

    window.addEventListener("resize", measureInsightStep);
    return () => window.removeEventListener("resize", measureInsightStep);
  }, [measureInsightStep]);

  useEffect(() => {
    const track = insightTrackRef.current;
    if (!track) return;

    const resizeObserver = new ResizeObserver(measureInsightStep);
    resizeObserver.observe(track);

    const firstCard = track.firstElementChild as HTMLElement | null;
    if (firstCard) resizeObserver.observe(firstCard);

    return () => resizeObserver.disconnect();
  }, [measureInsightStep]);

  useEffect(() => {
    setInsightPage((currentPage) => Math.min(currentPage, maxInsightPage));
  }, [maxInsightPage]);

  useEffect(() => {
    if (tabHovered) return undefined;
    const id = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, TAB_AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [tabHovered, activeTab]);

  return (
    <main className="bg-white">
      <style>{`
        @keyframes ss-tab-progress {
          from { transform: scaleY(0); }
          to   { transform: scaleY(1); }
        }
        @keyframes ss-caret-blink {
          0%, 100% { opacity: 1; }
          50%      { opacity: 0; }
        }
        .ss-caret {
          animation: ss-caret-blink 0.9s steps(1) infinite;
        }
        @keyframes ss-capability-ambient {
          from { transform: translate3d(0, 0, 0) scale(1); }
          to { transform: translate3d(-18px, 14px, 0) scale(1.08); }
        }

        .da-capabilities-grid { position: relative; }
        .da-capabilities-grid::before {
          content: ""; position: absolute; inset: -70px -40px; z-index: 0; pointer-events: none; opacity: 0.42;
          background-image: linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
          background-size: 72px 72px; mask-image: radial-gradient(ellipse at center, black 25%, transparent 78%); -webkit-mask-image: radial-gradient(ellipse at center, black 25%, transparent 78%);
        }
        .da-capability-card {
          position: relative; min-height: 390px; overflow: hidden; isolation: isolate; transform: translateZ(0);
          background: linear-gradient(145deg, rgba(255,255,255,0.045), rgba(255,255,255,0.012) 48%, rgba(164,143,234,0.045)), rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09); box-shadow: 0 18px 50px rgba(0,0,0,0.16);
          transition: transform 0.55s cubic-bezier(0.22,1,0.36,1), border-color 0.4s ease, box-shadow 0.5s ease, background 0.45s ease;
        }
        .da-capability-card::before {
          content: ""; position: absolute; inset: 0; pointer-events: none; opacity: 0;
          background: radial-gradient(320px 220px at 85% 0%, rgba(164,143,234,0.18), transparent 70%), radial-gradient(240px 180px at 0% 100%, rgba(79,63,224,0.10), transparent 70%);
          transition: opacity 0.5s ease;
        }
        .da-capability-card::after {
          content: ""; position: absolute; top: 0; left: -110%; width: 70%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent);
          transition: left 0.8s cubic-bezier(0.22,1,0.36,1);
        }
        .da-capability-card:hover {
          transform: translateY(-9px); border-color: rgba(164,143,234,0.42);
          box-shadow: 0 28px 70px rgba(0,0,0,0.28), 0 0 45px rgba(79,63,224,0.10);
          background: linear-gradient(145deg, rgba(255,255,255,0.065), rgba(255,255,255,0.018) 42%, rgba(164,143,234,0.07)), #11101B;
        }
        .da-capability-card:hover::before { opacity: 1; }
        .da-capability-card:hover::after { left: 120%; }
        .da-capability-grid-texture {
          position: absolute; inset: 0; pointer-events: none; opacity: 0.22;
          background-image: linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
          background-size: 54px 54px; mask-image: linear-gradient(to bottom, transparent, black 20%, black 75%, transparent); -webkit-mask-image: linear-gradient(to bottom, transparent, black 20%, black 75%, transparent);
        }
        .da-capability-number {
          position: absolute; top: -18px; right: 14px; font-family: var(--font-heading, sans-serif); font-size: 112px; line-height: 1; font-weight: 600; letter-spacing: -0.08em; color: rgba(255,255,255,0.025);
          transition: transform 0.55s cubic-bezier(0.22,1,0.36,1), color 0.45s ease;
        }
        .da-capability-card:hover .da-capability-number { transform: translate(-8px, 5px); color: rgba(164,143,234,0.07); }
        .da-capability-icon { transition: transform 0.45s cubic-bezier(0.34,1.56,0.64,1), background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease; }
        .da-capability-card:hover .da-capability-icon { transform: rotate(8deg) scale(1.08); background: #4F3FE0; border-color: #4F3FE0; box-shadow: 0 10px 28px rgba(79,63,224,0.28); }
        .da-capability-title { transition: transform 0.45s cubic-bezier(0.22,1,0.36,1); }
        .da-capability-card:hover .da-capability-title { transform: translateX(4px); }
        .da-capability-tag { transition: color 0.3s ease, border-color 0.3s ease, background-color 0.3s ease, transform 0.3s ease; }
        .da-capability-card:hover .da-capability-tag { color: rgba(255,255,255,0.78); border-color: rgba(164,143,234,0.28); background: rgba(164,143,234,0.06); transform: translateY(-1px); }

        @media (prefers-reduced-motion: reduce) {
          .ss-tab-progress-fill {
            animation: none !important;
            transform: scaleY(1) !important;
          }
          .ss-caret {
            animation: none !important;
          }
          .ss-case-image,
          .ss-case-desc,
          .ss-zoom-img {
            transition: none !important;
          }
          .ss-case-desc {
            max-height: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <section className="relative isolate min-h-[680px] overflow-hidden lg:min-h-[760px]">
        {/* Full-bleed hero image: no white split, image covers the complete section */}
        <div className="absolute inset-0 -z-10">
          <motion.img
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=90&w=1800&auto=format&fit=crop"
            alt="Data analytics team collaborating on enterprise technology"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="h-full w-full object-cover object-[68%_center]"
          />

          {/* Dark left-to-right gradient like the reference design */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(5,7,20,0.94) 0%, rgba(5,7,20,0.84) 28%, rgba(5,7,20,0.58) 48%, rgba(5,7,20,0.18) 70%, rgba(5,7,20,0.02) 100%)",
            }}
          />
        </div>

        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className={`${ALIGN} relative flex min-h-[680px] items-center lg:min-h-[760px]`}
        >
          <div className="w-full max-w-[760px] py-20 lg:py-28">
            <motion.nav
              variants={heroItem}
              aria-label="Breadcrumb"
              className="font-body flex items-center gap-2 text-[14px] font-medium text-white/90"
            >
              <a href="/" className="transition-colors hover:text-white">
                Home
              </a>
              <ChevronRight size={14} />
              <a href="/services" className="transition-colors hover:text-white">
                Services
              </a>
              <ChevronRight size={14} />
              <span className="text-white/70">Data &amp; Analytics</span>
            </motion.nav>

            <motion.h1
              variants={heroItem}
              className="font-heading mt-5 max-w-[720px] text-[48px] font-medium leading-[1.08] tracking-[-0.025em] text-white opacity-0 sm:text-[58px] lg:text-[68px] xl:text-[74px]"
            >
              Data &amp; Analytics Services for Decisions You Can Trust
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="font-body mt-7 max-w-[650px] text-[16px] leading-[1.7] text-white/90 sm:text-[17px] lg:text-[18px]"
            >
              Starfii architects, engineers, and modernizes data platforms
              and pipelines, turning scattered, siloed data into a governed,
              AI-ready foundation that powers faster, more confident
              decisions across the enterprise.
            </motion.p>

            <motion.a
              variants={heroItem}
              href="#connect"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="font-body mt-10 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-semibold"
              style={{ color: CHAMPION_BLUE }}
            >
              Connect Now
              <ArrowUpRight size={17} />
            </motion.a>
          </div>
        </motion.div>
      </section>

      <div className={ALIGN}>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-16"
        >
          <WhyMattersAccordion open={takeawaysOpen} setOpen={setTakeawaysOpen} />

          <p
            className="font-heading mt-10 max-w-8xl text-[26px] leading-snug lg:text-[30px]"
            style={{ color: CHAMPION_BLUE }}
          >
            A trusted data and analytics partner, Starfii builds governed
            platforms and AI ready pipelines that turn scattered
            enterprise data into decisions your business can rely on.
          </p>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-20"
        >
          <div
            className="grid grid-cols-1 items-stretch overflow-hidden rounded-2xl lg:grid-cols-2"
            style={{ backgroundColor: "#F5F3FC" }}
          >
            <div className="p-10 lg:p-14 flex flex-col justify-center">
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

            <div className="relative min-h-[320px] lg:min-h-full">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=90&w=1800&auto=format&fit=crop"
                alt="Analysts reviewing a data dashboard"
                className="ss-zoom-img absolute inset-0 block h-full w-full object-cover transition-transform duration-[800ms] ease-out hover:scale-105"
              />
            </div>
          </div>
        </motion.section>
      </div>

      {/* ============================================================
          CAPABILITIES — Software-page reference design applied to Data & Analytics
          Content remains the original Data & Analytics capabilities.
      ============================================================ */}
      <section
        className="relative mt-24 overflow-hidden bg-[#0A0912] py-24 lg:py-28"
        style={{
          background:
            "radial-gradient(120% 140% at 85% 100%, rgba(108,93,211,0.34), transparent 55%), #0A0912",
        }}
      >
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[620px] w-[620px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(164,143,234,0.20) 0%, rgba(79,63,224,0.08) 42%, transparent 72%)",
            animation: "ss-capability-ambient 12s ease-in-out infinite alternate",
          }}
        />
        <div
          className="pointer-events-none absolute -bottom-52 -left-48 h-[560px] w-[560px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(63,90,214,0.18) 0%, transparent 70%)",
            animation: "ss-capability-ambient 16s ease-in-out infinite alternate-reverse",
          }}
        />

        <div className={`relative ${ALIGN}`}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="relative z-10 max-w-2xl"
          >
            <div className="flex flex-wrap items-center gap-4">
              <span className="font-body inline-flex items-center text-[16px] font-semibold text-white sm:text-[18px]">
                Data &amp; Analytics
              </span>
              <span className="font-body rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-white/45">
                12 CAPABILITIES
              </span>
            </div>

            <h2 className={`${SECTION_HEADING} mt-4 text-white`}>
              Our Data &amp; Analytics Capabilities
            </h2>
            <p className="font-body mt-5 text-[15px] leading-relaxed text-slate-300">
              Starfii plans, engineers, and governs data platforms that scale
              with the business, so analytics and AI stay grounded in data you
              can trust.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={container}
            className="da-capabilities-grid relative z-10 mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
          >
            {focusAreas.map((area, i) => (
              <motion.div key={area.title} variants={item} className="h-full">
                <article className="da-capability-card group flex h-full min-h-[390px] flex-col rounded-2xl p-8">
                  <span className="da-capability-grid-texture" aria-hidden="true" />
                  <span className="da-capability-number" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative z-10 flex items-start justify-between gap-5">
                    <div>
                      <span className="font-body text-[13px] font-medium tracking-[0.08em] text-slate-500">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="mt-3 h-px w-10 bg-white/10 transition-all duration-500 group-hover:w-16 group-hover:bg-[#A48FEA]/60" />
                    </div>
                    <span className="da-capability-icon flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/15 text-white">
                      <ArrowUpRight size={17} />
                    </span>
                  </div>

                  <div className="relative z-10 mt-auto pt-16">
                    <h3 className="da-capability-title font-heading text-[21px] font-semibold leading-snug text-white sm:text-[22px]">
                      {area.title}
                    </h3>
                    <p className="font-body mt-3 text-[14px] leading-relaxed text-slate-400">
                      {area.body}
                    </p>
                  </div>

                  <div className="relative z-10 mt-7 flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
                      <span
                        key={tag}
                        className="da-capability-tag font-body rounded-full border border-white/15 px-3 py-1.5 text-[10px] font-medium tracking-[0.10em] text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className={ALIGN}>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-24"
        >
          <h2 className={SECTION_HEADING} style={{ color: CHAMPION_BLUE }}>
            Data &amp; Analytics Use Cases
          </h2>
          <p className="font-body mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-600">
            A look at how these capabilities play out across industries,
            from real time forecasting to governed claims reporting.
          </p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={container}
            className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
          >
            {useCases.map((useCase) => (
              <motion.div
                key={useCase.title}
                variants={item}
                className="flex h-full flex-col rounded-2xl border p-7 transition-colors duration-300 hover:bg-[#F8F7FD]"
                style={{ borderColor: "#E5E1F5" }}
              >
                <span
                  className="font-body text-[12px] font-semibold tracking-wide"
                  style={{ color: LAVENDER_ACCENT }}
                >
                  {useCase.industry.toUpperCase()}
                </span>
                <h3
                  className="font-heading mt-2 text-[18px] font-semibold leading-snug"
                  style={{ color: CHAMPION_BLUE }}
                >
                  {useCase.title}
                </h3>
                <p className="font-body mt-3 flex-1 text-[14px] leading-relaxed text-slate-600">
                  {useCase.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ============================================================
            CASE STUDIES
            Sizing matched to the reference Swiper carousel:
            slidesPerView 1.15 / 2 / 4, spaceBetween 32, desc max-h-40.
        ============================================================ */}
        <section className="mt-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="flex items-end justify-between"
          >
            <h2 className={SECTION_HEADING} style={{ color: CHAMPION_BLUE }}>
              Data &amp; Analytics Case Studies
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

          <div className="mt-10">
            <StepCarousel
              items={sharedCaseStudies}
              itemsPerPage={{ mobile: 1.15, tablet: 2, desktop: 4 }}
              gap={32}
              renderItem={(study) => (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={item}
                  className="h-full"
                >
                  <Link
                    href={`/services/data-analytics/casestudies/${study.slug}`}
                    aria-label={`Read case study: ${study.title}`}
                    className="group flex h-[500px] flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_2px_rgba(15,23,42,0.06)] transition-shadow duration-500 ease-out hover:shadow-[0_18px_40px_rgba(15,23,42,0.14)]"
                    style={{ border: "1px solid #EDEAFB" }}
                  >
                    <div className="ss-case-image h-[260px] w-full shrink-0 overflow-hidden bg-slate-900 transition-[height] duration-[800ms] ease-in-out group-hover:h-0">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="flex flex-1 flex-col gap-3.5 overflow-hidden p-7">
                      <div className="flex flex-1 flex-col gap-3.5 overflow-hidden">
                        <span
                          className="font-body shrink-0 text-[12px] font-semibold tracking-[0.08em]"
                          style={{ color: LAVENDER_ACCENT }}
                        >
                          {study.industry.toUpperCase()}
                        </span>

                        <h3
                          className="font-heading shrink-0 text-[20px] font-semibold leading-snug"
                          style={{ color: CHAMPION_BLUE }}
                        >
                          {study.title}
                        </h3>

                        <p className="ss-case-desc font-body max-h-0 -translate-y-2 text-[15px] leading-relaxed text-slate-500 opacity-0 transition-all duration-[800ms] ease-in-out group-hover:max-h-40 group-hover:translate-y-0 group-hover:opacity-100">
                          {study.body}
                        </p>
                      </div>

                      <span
                        className="font-body mt-auto inline-flex w-fit shrink-0 items-center gap-1.5 pt-2 text-[16px] font-medium"
                        style={{ color: LAVENDER_ACCENT }}
                      >
                        <span className="relative">
                          Learn More
                          <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-current transition-[width] duration-500 ease-out group-hover:w-full" />
                        </span>
                        <ArrowUpRight
                          size={16}
                          className="transition-transform duration-500 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              )}
            />
          </div>
        </section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="mt-24 pb-28"
        >
          <h2 className={SECTION_HEADING} style={{ color: CHAMPION_BLUE }}>
            Data &amp; Analytics Services
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[320px_1fr]">
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

              <div className="group h-[280px] overflow-hidden">
                <img
                  src={current.image}
                  alt={current.label}
                  className="ss-zoom-img h-full w-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>

      {/* ============================================================
          IMPACT ACROSS ECOSYSTEM (dark) — now uses the same
          EcosystemAccordion pattern as the Software page: smooth
          grid-row expand, glow shadow, two independent columns.
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
            className={`${SECTION_HEADING} max-w-xl text-white`}
          >
            Impact Across Your Data &amp; Analytics Ecosystem
          </motion.h2>

          <EcosystemAccordion />
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: "#EEF0FB" }}>
        <div className={ALIGN}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="flex items-end justify-between"
          >
            <h2 className={`${SECTION_HEADING} max-w-40px`} style={{ color: CHAMPION_BLUE }}>
              What&apos;s New in Data
              {/* <br />             */}
               &amp; Analytics
            </h2>
            <Link
              href="/services/data-analytics/blogs"
              className="font-body hidden items-center gap-1.5 text-[15px] font-semibold sm:flex"
              style={{ color: ACCENT_INDIGO }}
            >
              View All Insights
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-14 overflow-hidden"
          >
            <motion.div
              ref={insightTrackRef}
              animate={{
                x: insightStepWidth ? -(insightPage * insightStepWidth) : 0,
              }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-6"
            >
              {insights.map((post) => (
                <Link
                  key={post.slug}
                  href={`/services/data-analytics/blogs/${post.slug}`}
                  aria-label={`Read ${post.title}`}
                  className="group block h-full w-full flex-none md:w-[calc((100%_-_48px)/3)]"
                >
                  {post.gradient ? (
                    <div
                      className="relative flex min-h-[360px] h-full flex-col justify-end overflow-hidden rounded-2xl p-1 transition-transform duration-300 hover:-translate-y-1"
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
                        <span
                          className="font-body mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold"
                          style={{ color: ACCENT_INDIGO }}
                        >
                          <span className="relative">
                            Read More
                            <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-current transition-[width] duration-500 ease-out group-hover:w-full" />
                          </span>
                          <ArrowUpRight
                            size={15}
                            className="transition-transform duration-500 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex min-h-[360px] h-full flex-col overflow-hidden rounded-2xl bg-white transition-shadow duration-500 ease-out hover:shadow-[0_18px_40px_rgba(15,23,42,0.14)]">
                      <div className="h-[220px] shrink-0 overflow-hidden bg-slate-900/90">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="ss-zoom-img h-full w-full object-cover opacity-80 transition-transform duration-[800ms] ease-out group-hover:scale-110"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
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
                        <p className="font-body mt-3 flex-1 text-[14px] leading-relaxed text-slate-600">
                          {post.body}
                        </p>
                        <span
                          className="font-body mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold"
                          style={{ color: ACCENT_INDIGO }}
                        >
                          <span className="relative">
                            Read More
                            <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-current transition-[width] duration-500 ease-out group-hover:w-full" />
                          </span>
                          <ArrowUpRight
                            size={15}
                            className="transition-transform duration-500 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </span>
                      </div>
                    </div>
                  )}
                </Link>
              ))}
            </motion.div>
          </motion.div>

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
                onClick={() => setInsightPage((p) => Math.max(0, p - 1))}
                disabled={insightPage === 0}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-400 transition-colors duration-300 hover:text-slate-600 disabled:opacity-40"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                aria-label="Next insights"
                onClick={() => setInsightPage((p) => Math.min(maxInsightPage, p + 1))}
                disabled={insightPage === maxInsightPage}
                className="flex h-11 w-11 items-center justify-center rounded-full text-white disabled:opacity-40"
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
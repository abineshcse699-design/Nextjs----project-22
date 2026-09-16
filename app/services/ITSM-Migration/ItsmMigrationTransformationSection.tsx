"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Sparkles,
  ArrowUpRight,
  Plus,
  Minus,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

/* ===============================================================
   BRAND TOKENS
   Kept identical to the Data & Analytics page so both service
   pages render at exactly the same scale and rhythm.
================================================================ */

const CHAMPION_BLUE = "#1B2560";
const LAVENDER_ACCENT = "#A48FEA";

// Colors for the two dark, full-bleed sections (capability cards +
// impact accordion) so they read as a distinct "showcase" register
// against the light sections.
const DARK_BG = "#0A0A18";
const DARK_CARD = "rgba(255,255,255,0.04)";
const DARK_BORDER = "rgba(255,255,255,0.09)";
const ACCENT_INDIGO = "#6C5DD3";

// Shared page width wrapper, kept in sync with the navbar's own
// max width/padding so every section lines up with it exactly.
const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

// Autoplay timing for the "ITSM Migration Services" tab list
const TAB_AUTOPLAY_MS = 4000;

// -----------------------------------------------------------------
// Single source of truth for this service's route base. Every
// internal link is built from this constant, so the folder name and
// the links can never drift apart. This MUST match the folder on
// disk exactly, letter for letter, including case.
// -----------------------------------------------------------------
const BASE_PATH = "/services/ITSM-Migration";

/* ===============================================================
   TYPOGRAPHY TOKENS
   Same scale used on the Data & Analytics and Software & Product
   Engineering pages, so every service page's Hero <h1> and big
   section <h2>s render at identical sizes across the site.
================================================================ */

const HERO_HEADING =
  "font-heading font-medium leading-[1.08] text-[46px] sm:text-[56px] lg:text-[66px]";

const SECTION_HEADING =
  "font-heading font-medium leading-[1.15] text-[34px] sm:text-[40px] lg:text-[46px]";

/* ===============================================================
   SHARED ANIMATION VARIANTS
   heroContainer / heroItem: play once on page load (hero only)
   container / item / fadeUp: play once, on scroll into view
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

/* ===============================================================
   CONTENT
================================================================ */

const keyTakeaways: string[] = [
  "Starfii evaluates existing ITSM platforms, workflows, and integrations to build a clear current state picture and a low risk, structured migration plan.",
  "We move data, configurations, workflows, service catalogs, and CMDB records onto a modern service management environment without disrupting daily operations.",
  "Every migrated process is validated through testing and user acceptance, so agents and end users trust the new platform before it goes live.",
  "Starfii manages cutover with runbooks and rollback plans, then stays on through post migration support and managed services.",
];

type FocusArea = { title: string; body: string; tags: string[] };

const focusAreas: FocusArea[] = [
  {
    title: "Current State Analysis",
    body: "Starfii's ITSM migration team audits your existing service management platform, workflows, and technical debt, so every migration decision is grounded in how the platform is actually used today.",
    tags: ["AUDIT", "DISCOVERY", "ITSM"],
  },
  {
    title: "Target State Design",
    body: "Starfii designs the target ITSM environment around your future operating model, mapping processes, roles, and platform capabilities before a single record is moved.",
    tags: ["ARCHITECTURE", "DESIGN", "ITSM"],
  },
  {
    title: "Migration Strategy",
    body: "Starfii builds a phased migration strategy that sequences data, configuration, and workflow moves to minimize risk and keep service desks running throughout the transition.",
    tags: ["STRATEGY", "ROADMAP", "PLANNING"],
  },
  {
    title: "Data Migration",
    body: "Starfii's data migration practice extracts, cleanses, and transforms incidents, requests, problems, and change records so historical service data arrives accurate and query ready.",
    tags: ["DATA", "ETL", "VALIDATION"],
  },
  {
    title: "Configuration Migration",
    body: "Starfii migrates forms, business rules, SLAs, and platform configurations from legacy ITSM tools, preserving the logic teams depend on while modernizing the underlying platform.",
    tags: ["CONFIGURATION", "RULES", "SLA"],
  },
  {
    title: "Workflow Migration",
    body: "Starfii rebuilds and optimizes approval chains, escalation paths, and automation workflows in the new environment instead of copying legacy limitations forward.",
    tags: ["WORKFLOW", "AUTOMATION", "APPROVALS"],
  },
  {
    title: "Service Catalog Migration",
    body: "Starfii restructures and migrates your service catalog, so end users find the right service requests quickly and IT can manage offerings from a single source of truth.",
    tags: ["CATALOG", "SELF SERVICE", "ITSM"],
  },
  {
    title: "CMDB and Asset Migration",
    body: "Starfii migrates configuration items, asset records, and relationship maps into a clean CMDB, giving teams accurate visibility into infrastructure and service dependencies.",
    tags: ["CMDB", "ASSETS", "DEPENDENCIES"],
  },
  {
    title: "Integration Migration",
    body: "Starfii re-establishes integrations with monitoring, identity, HR, and collaboration tools, so the new ITSM platform connects to your broader technology ecosystem from day one.",
    tags: ["INTEGRATIONS", "API", "ECOSYSTEM"],
  },
];

type ServiceTab = {
  label: string;
  heading: string;
  body: string;
  image: string;
};

const tabs: ServiceTab[] = [
  {
    label: "Migration Assessment",
    heading: "A migration assessment that removes guesswork from ITSM transformation",
    body: "Starfii runs a structured migration assessment across your current ITSM platform, uncovering technical debt, data quality issues, and process gaps before migration planning begins.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Testing and Validation",
    heading: "Testing and validation that confirm every migrated process actually works",
    body: "Starfii's testing and validation team verifies data integrity, workflow logic, and integrations in the new environment, so nothing breaks quietly after go live.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "User Acceptance",
    heading: "User acceptance testing that keeps service desk teams confident and ready",
    body: "Starfii runs structured user acceptance testing with real service desk scenarios, so agents and end users trust the new platform before it goes live.",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Cutover",
    heading: "Cutover planning that protects service continuity during go live",
    body: "Starfii manages cutover with detailed runbooks, rollback plans, and hypercare coverage, so the switch to your new ITSM platform happens with minimal disruption.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Post Migration Support",
    heading: "Post migration support that keeps the new platform running smoothly",
    body: "Starfii provides post migration support and managed services, resolving issues quickly and tuning the platform as usage patterns and business needs evolve.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
  },
];

// Closing "Impact" accordion — each row expands in place to show what
// that migration area actually covers.
const impactAreas = [
  {
    title: "Data Migration",
    body: "Extract, cleanse, and transform incidents, requests, problems, and change records so historical service data arrives accurate and query ready.",
  },
  {
    title: "Configuration Migration",
    body: "Move forms, business rules, and SLAs across from legacy tools, keeping the logic teams depend on while modernizing the platform underneath.",
  },
  {
    title: "Workflow Migration",
    body: "Rebuild approval chains, escalation paths, and automation in the new environment instead of carrying legacy limitations forward.",
  },
  {
    title: "Service Catalog Migration",
    body: "Restructure the catalog so employees find the right request quickly and IT manages every offering from one source of truth.",
  },
  {
    title: "CMDB and Asset Migration",
    body: "Migrate configuration items, asset records, and relationship maps into a clean CMDB with accurate dependency visibility.",
  },
  {
    title: "Integration Migration",
    body: "Re-establish monitoring, identity, HR, and collaboration integrations so the new platform is connected from day one.",
  },
];

type UseCase = { industry: string; title: string; body: string };

const useCases: UseCase[] = [
  {
    industry: "Insurance",
    title: "End of Life Platform Exit",
    body: "Move incidents, changes, and CMDB records off an unsupported ITSM platform on a phased schedule, without a single day of service desk downtime.",
  },
  {
    industry: "Retail",
    title: "Self Service Catalog Rebuild",
    body: "Restructure a sprawling service catalog into a clean request experience, so employees resolve common asks without opening a ticket.",
  },
  {
    industry: "Manufacturing",
    title: "CMDB Consolidation",
    body: "Merge fragmented asset records from every plant into one CMDB with accurate dependency mapping for change impact analysis.",
  },
  {
    industry: "Healthcare",
    title: "Approval Workflow Automation",
    body: "Rebuild approval chains and escalation paths during migration, cutting manual handoffs and shortening incident resolution times.",
  },
  {
    industry: "Banking",
    title: "Audit Ready Change Records",
    body: "Migrate change and approval history with full traceability, so compliance teams can evidence every control after go live.",
  },
  {
    industry: "Technology",
    title: "Integration Re-Platforming",
    body: "Reconnect monitoring, identity, and HR systems to the new ITSM platform so automation keeps running through the cutover window.",
  },
];

type CaseStudy = { slug: string; industry: string; image: string; title: string; body: string };

const caseStudies: CaseStudy[] = [
  {
    slug: "legacy-itsm-platform-migration-insurer",
    industry: "Insurance",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Migrates a Global Insurer From a Legacy ITSM Platform",
    body: "Explore how Starfii moved a global insurer off an end of life ITSM platform, migrating incidents, changes, and CMDB data without a single day of service desk downtime.",
  },
  {
    slug: "service-catalog-modernization-retail",
    industry: "Retail",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Modernizes a Retail Service Catalog for Faster Self Service",
    body: "See how Starfii restructured a sprawling service catalog into a clean, self service experience that cut average request fulfillment time significantly.",
  },
  {
    slug: "cmdb-asset-consolidation-manufacturer",
    industry: "Manufacturing",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=900&auto=format&fit=crop",
    title: "CMDB and Asset Consolidation for a Global Manufacturer",
    body: "Discover how Starfii consolidated fragmented asset records into a single CMDB, giving IT teams accurate dependency mapping across every plant and facility.",
  },
  {
    slug: "workflow-automation-healthcare-itsm",
    industry: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Automates ITSM Workflows for a Healthcare Provider",
    body: "Learn how Starfii rebuilt approval chains and escalation workflows during migration, reducing manual handoffs and improving incident resolution times.",
  },
  {
    slug: "managed-services-post-migration-bank",
    industry: "Banking",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=900&auto=format&fit=crop",
    title: "Post Migration Managed Services for a Regional Bank",
    body: "See how Starfii's managed services team supported a regional bank after ITSM migration, keeping the platform tuned as usage and compliance needs grew.",
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
    slug: "planning-a-low-risk-itsm-migration",
    title: "Planning a Low Risk ITSM Migration: A Practical Roadmap for Enterprises",
    body: "Explore how Starfii structures ITSM migrations into assessment, design, and phased execution, so enterprises modernize without disrupting daily operations.",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200&auto=format&fit=crop",
    gradient: false,
  },
  {
    slug: "cmdb-data-quality-before-migration",
    title: "Why CMDB Data Quality Determines ITSM Migration Success",
    body: "Stop migrating bad data into a new platform. See how Starfii cleanses and validates CMDB records before migration to prevent downstream service disruptions.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "cutover-runbooks-service-continuity",
    title: "Building Cutover Runbooks That Protect Service Continuity",
    body: "Learn how detailed cutover runbooks and rollback plans help IT teams move to a new ITSM platform with confidence and minimal downtime.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "modernizing-service-catalogs-self-service",
    title: "Modernizing Service Catalogs to Drive Self Service Adoption",
    body: "Discover how a restructured service catalog improves employee self service adoption and reduces ticket volume for overloaded service desks.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "managed-services-after-itsm-go-live",
    title: "What Good Managed Services Look Like After ITSM Go Live",
    body: "Learn what to expect from managed services after an ITSM migration, from hypercare support to ongoing platform tuning and optimization.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "measuring-itsm-migration-success",
    title: "Measuring ITSM Migration Success Beyond Go Live Day",
    body: "The metrics that actually show a migration worked, from first contact resolution to change failure rate in the first ninety days.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
];

/* ===============================================================
   HOOK: sequential typewriter for a list of lines
   Types line 0 char-by-char, then line 1, then line 2...
   Resets to empty whenever `active` becomes false. Guarded against
   out-of-bounds reads so it can never crash if the list changes
   shape while a typing loop is still running.
================================================================ */

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

/* ===============================================================
   KEY TAKEAWAYS ACCORDION — "ITSM Migration Overview"
   Click the header to expand/collapse. While open, each line types
   out letter by letter, one after another.
================================================================ */

function OverviewAccordion({
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
          <Sparkles size={21} strokeWidth={1.8} style={{ color: LAVENDER_ACCENT }} />
          <span className="font-body text-[17px] font-semibold" style={{ color: CHAMPION_BLUE }}>
            Why ITSM Migration Matters
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span
            className="font-body hidden rounded-full px-5 py-2.5 text-[13px] font-semibold sm:inline-flex"
            style={{ backgroundColor: "#F1EEFC", color: ACCENT_INDIGO }}
          >
            Low Risk Migration
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
   REUSABLE: StepCarousel — moves exactly ONE card per arrow click
================================================================ */

type StepCarouselProps<T> = {
  items: T[];
  itemsPerPage: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  renderItem: (item: T, index: number) => ReactNode;
  arrowVariant?: "light" | "dark";
  gap?: number; // px gap between cards
};

function StepCarousel<T>({
  items,
  itemsPerPage,
  renderItem,
  arrowVariant = "light",
  gap = 24,
}: StepCarouselProps<T>) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [perPage, setPerPage] = useState(itemsPerPage.desktop);
  const [position, setPosition] = useState(0);
  const [stepWidth, setStepWidth] = useState(0);
  const isDark = arrowVariant === "dark";

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

  // Math.ceil so a fractional perPage (e.g. 1.15 for a "peek" card on
  // mobile) still lands on a whole card instead of stopping mid-card.
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
            backgroundColor: isDark ? "rgba(255,255,255,0.15)" : "#CBD5E1",
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
            color: isDark ? "rgba(255,255,255,0.55)" : "#94A3B8",
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
              backgroundColor: isDark ? "rgba(255,255,255,0.10)" : "#E5E1F5",
              color: isDark ? "#fff" : CHAMPION_BLUE,
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

/* ===============================================================
   IMPACT ACCORDION — matches the Cloud Engineering page's
   "Impact Across Your Cloud Infrastructure" accordion exactly:
   two independent columns (so opening a card on the left never
   stretches its neighbor on the right), a smooth 0fr → 1fr height
   expand, and a plus/minus toggle that rotates in place.
================================================================ */

type ImpactItem = { title: string; body: string };

function ImpactAccordion({ items }: { items: ImpactItem[] }) {
  // null = everything closed. 0 keeps the first card open by default,
  // matching the Cloud page's accordion.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const columns: { entry: ImpactItem; index: number }[][] = [[], []];
  items.forEach((entry, index) => {
    const target = columns[index % 2];
    if (target) target.push({ entry, index });
  });

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={container}
      className="mt-12 grid grid-cols-1 items-start gap-5 sm:grid-cols-2"
    >
      {columns.map((column, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-5">
          {column.map(({ entry, index }) => {
            const isOpen = openIndex === index;

            return (
              <motion.div key={entry.title} variants={item}>
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
                    aria-controls={`itsm-impact-panel-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 px-8 py-7 text-left"
                  >
                    <span
                      className="font-body text-[17px] font-medium leading-snug transition-colors duration-300"
                      style={{ color: isOpen ? ACCENT_INDIGO : CHAMPION_BLUE }}
                    >
                      {entry.title}
                    </span>

                    <span
                      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300"
                      style={{
                        backgroundColor: isOpen ? "#E5E1F5" : ACCENT_INDIGO,
                        color: isOpen ? "#8B93A7" : "#FFFFFF",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>

                  {/* 0fr -> 1fr gives a smooth auto-height expand */}
                  <div
                    id={`itsm-impact-panel-${index}`}
                    className="ss-eco-panel grid transition-all duration-500 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="font-body px-8 pb-8 text-[15px] leading-[1.75] transition-opacity duration-500"
                        style={{ color: CHAMPION_BLUE, opacity: isOpen ? 1 : 0 }}
                      >
                        {entry.body}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      ))}
    </motion.div>
  );
}

/* ===============================================================
   PAGE
================================================================ */

export default function ItsmMigrationTransformationSection() {
  const [takeawaysOpen, setTakeawaysOpen] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [tabHovered, setTabHovered] = useState(false);
  const [insightPage, setInsightPage] = useState(0);
  const [insightStepWidth, setInsightStepWidth] = useState(0);
  const insightTrackRef = useRef<HTMLDivElement | null>(null);
  const current = tabs[activeTab];

  // Insights carousel: keep 3 cards visible and move exactly 1 card per click.
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

  // --- Autoplay for the left-side tab list ---
  // Advances every TAB_AUTOPLAY_MS, pauses on hover, and restarts the
  // timer whenever the user manually clicks a tab.
  useEffect(() => {
    if (tabHovered) return undefined;
    const id = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, TAB_AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [tabHovered, activeTab]);

  return (
    // pt-[92px] / lg:pt-[100px] offsets the fixed Navbar so the
    // hero/breadcrumb no longer sits underneath it.
    <main className="bg-white pt-[92px] lg:pt-[100px]">
      {/* Progress-fill keyframe for the autoplaying tab indicator line,
          plus the typewriter caret blink used in the overview block */}
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
        @media (prefers-reduced-motion: reduce) {
          .ss-tab-progress-fill {
            animation: none !important;
            transform: scaleY(1) !important;
          }
          .ss-caret {
            animation: none !important;
          }
          /* Case study / blog hover motion stays static */
          .ss-case-image,
          .ss-case-desc,
          .ss-zoom-img,
          .ss-eco-panel {
            transition: none !important;
          }
          .ss-case-desc {
            max-height: none !important;
            opacity: 1 !important;
            transform: none !important;
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
            alt=""
            className="h-full w-full object-cover"
          />

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
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight size={14} />
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <ChevronRight size={14} />
            <span className="text-slate-500">ITSM Migration &amp; Transformation</span>
          </motion.nav>

          <motion.h1
            variants={heroItem}
            className={`${HERO_HEADING} mt-8 max-w-2xl text-white`}
          >
            ITSM Migration and Transformation for Modern Service Management
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="font-body mt-6 max-w-lg text-[17px] leading-relaxed text-white"
          >
            Starfii moves enterprises off legacy service management
            platforms and onto modern environments, migrating data,
            configurations, workflows, and integrations with a structured,
            low risk approach that protects daily operations.
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
            WHY ITSM MIGRATION MATTERS — collapsible, typewriter bullets
        ============================================================ */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-16"
        >
          <OverviewAccordion open={takeawaysOpen} setOpen={setTakeawaysOpen} />

          <p
            className="font-heading mt-10 max-w-8xl text-[26px] leading-snug lg:text-[30px]"
            style={{ color: CHAMPION_BLUE }}
          >
            A trusted ITSM migration and transformation partner, Starfii
            moves enterprises off legacy service management platforms with
            a structured, low risk approach that protects the service desk
            and the people who depend on it every day.
          </p>
        </motion.section>

        {/* ============================================================
            Q&A BLOCK — migration assessment
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
                How Do Enterprises Assess Readiness for ITSM Migration?
              </h2>
              <p className="font-body mt-5 text-[15px] leading-relaxed text-slate-600">
                Enterprises assess ITSM migration readiness by reviewing
                current state processes, data quality, integrations, and
                platform limitations before committing to a target
                environment. Starfii runs this assessment early, turning
                fragmented legacy platforms into a clear, structured
                migration plan that protects the service desk and the
                people who depend on it every day.
              </p>
            </div>

            <div className="group overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop"
                alt="Two colleagues reviewing an ITSM migration assessment"
                className="ss-zoom-img h-full w-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </motion.section>
      </div>

      {/* ============================================================
          OUR ITSM MIGRATION CAPABILITIES — full-bleed dark section,
          numbered cards with a tag pill row
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
            <h2 className={`${SECTION_HEADING} text-white`}>
              Our ITSM Migration &amp;
              <br />
              Transformation Capabilities
            </h2>
            <p className="font-body mt-5 text-[15px] leading-relaxed text-slate-300">
              Starfii assesses, designs, and migrates ITSM platforms end to
              end, moving data, configurations, workflows, and integrations
              into a modern service management environment with minimal
              disruption to the business.
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
                    href="#connect"
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
            USE CASES — scannable industry examples
        ============================================================ */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-24"
        >
          <h2 className={SECTION_HEADING} style={{ color: CHAMPION_BLUE }}>
            ITSM Migration Use Cases
          </h2>
          <p className="font-body mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-600">
            A look at how these capabilities play out across industries,
            from end of life platform exits to audit ready change records.
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
            Hover behaviour matches the homepage CaseStudiesSection /
            Software & Product Engineering page: card height is FIXED,
            the image frame collapses from 180px to 0, and the
            description fades/slides into the space the image gives up.
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
              ITSM Migration
              <br />
              Case Studies
            </h2>
            <Link
              href={`${BASE_PATH}/casestudies`}
              className="font-body hidden items-center gap-1.5 text-[15px] font-semibold sm:flex"
              style={{ color: LAVENDER_ACCENT }}
            >
              View All Case Studies
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>

          <div className="mt-10">
            <StepCarousel
              items={caseStudies}
              itemsPerPage={{ mobile: 1.15, tablet: 2, desktop: 4 }}
              gap={32}
              arrowVariant="light"
              renderItem={(study) => (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={item}
                  className="h-full"
                >
                  <Link
                    href={`${BASE_PATH}/casestudies/${study.slug}`}
                    aria-label={`Read case study: ${study.title}`}
                    className="group flex h-[500px] flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_2px_rgba(15,23,42,0.06)] transition-shadow duration-500 ease-out hover:shadow-[0_18px_40px_rgba(15,23,42,0.14)]"
                    style={{ border: "1px solid #EDEAFB" }}
                  >
                    {/* IMAGE FRAME — height animates 260px → 0 on hover */}
                    <div className="ss-case-image h-[260px] w-full shrink-0 overflow-hidden bg-slate-900 transition-[height] duration-[800ms] ease-in-out group-hover:h-0">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* CONTENT — flex-1 grows into the space the image gives up */}
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

                        {/* DESCRIPTION — hidden at rest, fades + slides in on hover */}
                        <p className="ss-case-desc font-body max-h-0 -translate-y-2 text-[15px] leading-relaxed text-slate-500 opacity-0 transition-all duration-[800ms] ease-in-out group-hover:max-h-40 group-hover:translate-y-0 group-hover:opacity-100">
                          {study.body}
                        </p>
                      </div>

                      {/* CTA — sliding underline reveal */}
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
          <h2 className={SECTION_HEADING} style={{ color: CHAMPION_BLUE }}>
            ITSM Migration Services
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
          IMPACT ACROSS YOUR SERVICE MANAGEMENT ECOSYSTEM —
          full-bleed dark section, expandable rows
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
            Impact Across Your Service Management Ecosystem
          </motion.h2>

          <ImpactAccordion items={impactAreas} />
        </div>
      </section>

      {/* ============================================================
          WHAT'S NEW IN ITSM MIGRATION — light section, 3-up insight
          carousel with progress bar + arrow pagination. Blog images
          zoom in on hover inside a fixed frame, so only the picture
          grows, never the card.
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
            <h2 className={`${SECTION_HEADING} max-w-lg`} style={{ color: CHAMPION_BLUE }}>
              What&apos;s New in ITSM
              <br />
              Migration
            </h2>
            <Link
              href={`${BASE_PATH}/blogs`}
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
                  href={`${BASE_PATH}/blogs/${post.slug}`}
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

      {/* ============================================================
          CLOSING CTA
      ============================================================ */}
      <section id="connect" className="bg-white py-24">
        <div className={ALIGN}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="overflow-hidden rounded-[28px] px-8 py-16 text-center sm:px-16"
            style={{ backgroundColor: CHAMPION_BLUE }}
          >
            <h2 className="font-heading mx-auto max-w-2xl text-[32px] font-medium leading-[1.2] text-white lg:text-[40px]">
              Ready to Migrate to a Modern ITSM Platform?
            </h2>
            <p className="font-body mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/70">
              Talk to Starfii about migration assessment, data and
              configuration migration, cutover planning, or post migration
              managed services for your ITSM platform.
            </p>
            <motion.a
              href="mailto:hello@starfii.com"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="font-body mt-9 inline-flex items-center gap-2 rounded-full px-7 py-4 text-[15px] font-semibold"
              style={{ backgroundColor: "#FFFFFF", color: CHAMPION_BLUE }}
            >
              Connect Now
              <ArrowUpRight size={17} />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
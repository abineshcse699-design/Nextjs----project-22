"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ArrowUpRight,
  Plus,
  Minus,
  LogOut,
  LayoutGrid,
  GitMerge,
  Workflow,
  FileCheck2,
  Plug,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import GetInTouch from "../ITSM-Migration/GetTouch";

/* ===============================================================
   BRAND TOKENS — kept identical to the Data & Analytics page
================================================================ */

const CHAMPION_BLUE = "#1B2560";
const LAVENDER_ACCENT = "#A48FEA";

const DARK_BG = "#0A0A18";
const ACCENT_INDIGO = "#6C5DD3";
const INDIGO_CTA = "#4F3FE0";

const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

const TAB_AUTOPLAY_MS = 4000;

const BASE_PATH = "/services/ITSM-Migration";

const SECTION_HEADING =
  "font-heading font-medium leading-[1.15] text-[34px] sm:text-[40px] lg:text-[46px]";

/* ===============================================================
   SHARED ANIMATION VARIANTS
================================================================ */

const heroContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3, delayChildren: 0.4 } },
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
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
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
   CONTENT (ITSM-specific)
================================================================ */

const keyTakeaways: string[] = [
  "Starfii evaluates existing ITSM platforms, workflows, and integrations to build a clear current state picture and a low risk, structured migration plan.",
  "We move data, configurations, workflows, service catalogs, and CMDB records onto a modern service management environment without disrupting daily operations.",
  "Every migrated process is validated through testing and user acceptance, so agents and end users trust the new platform before it goes live.",
  "Starfii manages cutover with runbooks and rollback plans, then stays on through post migration support and managed services.",
];

// FIX: added `slug` so each capability card can link to its detail page
// at /services/ITSM-Migration/capabilities/[slug]. Slugs match exactly
// what's used in capabilities/data.ts.
type FocusArea = { slug: string; title: string; body: string };

const focusAreas: FocusArea[] = [
  {
    slug: "current-state-analysis",
    title: "Current State Analysis",
    body: "Starfii's ITSM migration team audits your existing service management platform, workflows, and technical debt, so every migration decision is grounded in how the platform is actually used today.",
  },
  {
    slug: "target-state-design",
    title: "Target State Design",
    body: "Starfii designs the target ITSM environment around your future operating model, mapping processes, roles, and platform capabilities before a single record is moved.",
  },
  {
    slug: "migration-strategy",
    title: "Migration Strategy",
    body: "Starfii builds a phased migration strategy that sequences data, configuration, and workflow moves to minimize risk and keep service desks running throughout the transition.",
  },
  {
    slug: "data-migration",
    title: "Data Migration",
    body: "Starfii's data migration practice extracts, cleanses, and transforms incidents, requests, problems, and change records so historical service data arrives accurate and query ready.",
  },
  {
    slug: "configuration-migration",
    title: "Configuration Migration",
    body: "Starfii migrates forms, business rules, SLAs, and platform configurations from legacy ITSM tools, preserving the logic teams depend on while modernizing the underlying platform.",
  },
  {
    slug: "workflow-migration",
    title: "Workflow Migration",
    body: "Starfii rebuilds and optimizes approval chains, escalation paths, and automation workflows in the new environment instead of copying legacy limitations forward.",
  },
  {
    slug: "service-catalog-migration",
    title: "Service Catalog Migration",
    body: "Starfii restructures and migrates your service catalog, so end users find the right service requests quickly and IT can manage offerings from a single source of truth.",
  },
  {
    slug: "cmdb-and-asset-migration",
    title: "CMDB and Asset Migration",
    body: "Starfii migrates configuration items, asset records, and relationship maps into a clean CMDB, giving teams accurate visibility into infrastructure and service dependencies.",
  },
  {
    slug: "integration-migration",
    title: "Integration Migration",
    body: "Starfii re-establishes integrations with monitoring, identity, HR, and collaboration tools, so the new ITSM platform connects to your broader technology ecosystem from day one.",
  },
];

type ServiceTab = { label: string; heading: string; body: string; image: string };

const tabs: ServiceTab[] = [
  {
    label: "Migration Assessment",
    heading: "A migration assessment that removes guesswork from ITSM transformation",
    body: "Starfii runs a structured migration assessment across your current ITSM platform, uncovering technical debt, data quality issues, and process gaps before migration planning begins. We review existing workflows, service catalogs, integrations, configurations, historical data, user roles, and platform dependencies to understand what needs to move and what should be improved first. The assessment gives your team a clear view of migration complexity, potential risks, dependencies, and priorities, creating a practical foundation for a controlled ITSM transformation.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=90&w=1800&auto=format&fit=crop",
  },
  {
    label: "Testing and Validation",
    heading: "Testing and validation that confirm every migrated process actually works",
    body: "Starfii's testing and validation team verifies data integrity, workflow logic, and integrations in the new environment, so nothing breaks quietly after go live. We validate migrated records, service requests, incidents, approvals, notifications, automations, integrations, and critical business workflows against the expected outcomes. Structured testing helps identify configuration issues and data inconsistencies early, giving teams the opportunity to resolve them before they affect service operations or end users.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=90&w=1800&auto=format&fit=crop",
  },
  {
    label: "User Acceptance",
    heading: "User acceptance testing that keeps service desk teams confident and ready",
    body: "Starfii runs structured user acceptance testing with real service desk scenarios, so agents and end users trust the new platform before it goes live. We involve key users in validating everyday activities such as ticket creation, assignment, escalation, approvals, knowledge access, service requests, and reporting. Feedback from these sessions is used to refine workflows, permissions, configurations, and user experiences, helping teams enter production with greater confidence and a clear understanding of how the new platform will support their daily work.",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=90&w=1800&auto=format&fit=crop",
  },
  {
    label: "Cutover",
    heading: "Cutover planning that protects service continuity during go live",
    body: "Starfii manages cutover with detailed runbooks, rollback plans, and hypercare coverage, so the switch to your new ITSM platform happens with minimal disruption. We coordinate final data migration, configuration checks, integration validation, user readiness, access verification, and production deployment as part of a controlled cutover plan. Clear ownership, defined checkpoints, and contingency procedures help the team respond quickly to unexpected issues while keeping critical service operations running throughout the transition.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=90&w=1800&auto=format&fit=crop",
  },
  {
    label: "Post Migration Support",
    heading: "Post migration support that keeps the new platform running smoothly",
    body: "Starfii provides post migration support and managed services, resolving issues quickly and tuning the platform as usage patterns and business needs evolve. During the initial stabilization period, we monitor workflows, integrations, user adoption, data quality, and platform performance to identify issues that may not appear during testing. We then make targeted improvements, optimize configurations, support users, and refine automation so the new ITSM environment continues to deliver reliable service as teams, processes, and operational requirements change.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=90&w=1800&auto=format&fit=crop",
  },
];

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

type UseCase = {
  industry: string;
  title: string;
  body: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
};

const useCases: UseCase[] = [
  {
    industry: "Insurance",
    title: "End of Life Platform Exit",
    body: "Move incidents, changes, and CMDB records off an unsupported ITSM platform on a phased schedule, without a single day of service desk downtime.",
    icon: LogOut,
  },
  {
    industry: "Retail",
    title: "Self Service Catalog Rebuild",
    body: "Restructure a sprawling service catalog into a clean request experience, so employees resolve common asks without opening a ticket.",
    icon: LayoutGrid,
  },
  {
    industry: "Manufacturing",
    title: "CMDB Consolidation",
    body: "Merge fragmented asset records from every plant into one CMDB with accurate dependency mapping for change impact analysis.",
    icon: GitMerge,
  },
  {
    industry: "Healthcare",
    title: "Approval Workflow Automation",
    body: "Rebuild approval chains and escalation paths during migration, cutting manual handoffs and shortening incident resolution times.",
    icon: Workflow,
  },
  {
    industry: "Banking",
    title: "Audit Ready Change Records",
    body: "Migrate change and approval history with full traceability, so compliance teams can evidence every control after go live.",
    icon: FileCheck2,
  },
  {
    industry: "Technology",
    title: "Integration Re-Platforming",
    body: "Reconnect monitoring, identity, and HR systems to the new ITSM platform so automation keeps running through the cutover window.",
    icon: Plug,
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

type Insight = { slug: string; title: string; body: string; image: string; gradient?: boolean };

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
   "WHY ITSM MIGRATION MATTERS" ACCORDION — matches Data & Analytics
   WhyMattersAccordion exactly (same font sizes). Logo image replaced
   with an inline sparkle icon (see fix below).
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
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 flex-shrink-0"
            aria-hidden="true"
          >
            <path
              d="M11.5 1L13.2 8.3L20.5 10L13.2 11.7L11.5 19L9.8 11.7L2.5 10L9.8 8.3L11.5 1Z"
              fill={ACCENT_INDIGO}
            />
            <path
              d="M21.5 15L22.4 18.6L26 19.5L22.4 20.4L21.5 24L20.6 20.4L17 19.5L20.6 18.6L21.5 15Z"
              fill={ACCENT_INDIGO}
            />
          </svg>
          <span className="font-body text-[17px] font-semibold" style={{ color: CHAMPION_BLUE }}>
           Key Takeaways
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
                <li key={line} className="flex gap-2 font-body text-[15px] leading-[1.8] text-slate-600">
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
   REUSABLE: StepCarousel
================================================================ */

type StepCarouselProps<T> = {
  items: T[];
  itemsPerPage: { mobile: number; tablet: number; desktop: number };
  renderItem: (item: T, index: number) => ReactNode;
  gap?: number;
};

function StepCarousel<T>({ items, itemsPerPage, renderItem, gap = 24 }: StepCarouselProps<T>) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [perPage, setPerPage] = useState(itemsPerPage.desktop);
  const [position, setPosition] = useState(0);
  const [stepWidth, setStepWidth] = useState(0);

  const updatePerPage = useCallback(() => {
    if (window.innerWidth <= 639) setPerPage(itemsPerPage.mobile);
    else if (window.innerWidth <= 1023) setPerPage(itemsPerPage.tablet);
    else setPerPage(itemsPerPage.desktop);
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

  const maxPosition = Math.max(0, Math.ceil(items.length - perPage));
  const totalPositions = Math.max(1, maxPosition + 1);

  useEffect(() => {
    setPosition((currentPosition) => Math.min(currentPosition, maxPosition));
  }, [maxPosition]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !stepWidth) return;
    track.scrollTo({ left: position * stepWidth, behavior: "smooth" });
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
        <div className="h-[2px] flex-1 overflow-hidden rounded-full" style={{ backgroundColor: "#CBD5E1" }}>
          <div
            className="h-full transition-[width] duration-500 ease-out"
            style={{ width: `${progress}%`, backgroundColor: ACCENT_INDIGO }}
          />
        </div>

        <span className="font-body flex-none text-[14px] tabular-nums" style={{ color: "#94A3B8" }}>
          {String(position + 1).padStart(2, "0")} / {String(totalPositions).padStart(2, "0")}
        </span>

        <div className="flex flex-none items-center gap-3">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => setPosition((p) => Math.max(0, p - 1))}
            disabled={position === 0}
            className="flex h-11 w-11 items-center justify-center rounded-full transition-all duration-200 hover:scale-105 disabled:opacity-40 disabled:hover:scale-100"
            style={{ backgroundColor: "#E5E1F5", color: CHAMPION_BLUE }}
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
   IMPACT ACCORDION — matches Data & Analytics EcosystemAccordion
   exactly: 19px title, single Plus icon rotating 45deg
================================================================ */

function ImpactAccordion({ items }: { items: { title: string; body: string }[] }) {
   const [openIndex, setOpenIndex] = useState<number | null>(null);

  const columns: { entry: { title: string; body: string }; index: number }[][] = [[], []];
  items.forEach((entry, index) => {
    const target = columns[index % 2];
    if (target) target.push({ entry, index });
  });

  return (
    <div className="mt-14 grid grid-cols-1 items-start gap-5 sm:grid-cols-2">
      {columns.map((column, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-5">
          {column.map(({ entry, index }) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={entry.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={item}
              >
                <div
                  className="overflow-hidden rounded-2xl bg-white transition-shadow duration-300 hover:shadow-xl"
                  style={{ boxShadow: isOpen ? "0 18px 40px rgba(15,23,42,0.18)" : undefined }}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`itsm-impact-panel-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 px-8 py-7 text-left"
                  >
                    <span
                      className="font-body text-[19px] font-medium leading-snug transition-colors duration-300"
                      style={{ color: isOpen ? ACCENT_INDIGO : CHAMPION_BLUE }}
                    >
                      {entry.title}
                    </span>
  <span
  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300"
  style={{
    backgroundColor: INDIGO_CTA,
    color: "#FFFFFF",
  }}
>
  {isOpen ? <Minus size={18} /> : <Plus size={18} />}
</span>
                  </button>

                  <div
                    id={`itsm-impact-panel-${index}`}
                    className="grid transition-all duration-500 ease-out"
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
    </div>
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

        /* LIGHT CAPABILITIES GRID — matched to Data & Analytics page */
        .ss-capability-card {
          position: relative;
          background-color: #EEF0F5;
          border-radius: 20px;
          transition:
            background-color 0.35s ease,
            transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.35s ease;
        }
        .ss-capability-card:hover {
          background-color: #E4E7F3;
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(27, 37, 96, 0.08);
        }
        .ss-capability-title {
          transition: color 0.3s ease;
        }
        .ss-capability-learn-more {
          color: ${INDIGO_CTA};
        }
        .ss-capability-learn-more .ss-capability-underline {
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .ss-capability-card:hover .ss-capability-learn-more .ss-capability-underline {
          transform: scaleX(1);
        }
        .ss-capability-card:hover .ss-capability-learn-more svg {
          transform: translate(2px, -2px);
        }
        .ss-capability-learn-more svg {
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }

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
          .ss-zoom-img,
          .ss-capability-card,
          .ss-capability-title,
          .ss-capability-learn-more .ss-capability-underline {
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
          HERO — full-bleed dark gradient hero, matches Data & Analytics
      ============================================================ */}
      <section className="relative isolate min-h-[460px] overflow-hidden lg:min-h-[620px]">
        <div className="absolute inset-0 -z-10">
          <motion.img
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=90&w=1800&auto=format&fit=crop"
            alt="ITSM migration and transformation team collaborating"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="h-full w-full object-cover object-[68%_center]"
          />
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
          className={`${ALIGN} relative flex min-h-[460px] items-start lg:min-h-[620px]`}
        >
          <div className="w-full max-w-[760px] pb-12 pt-[130px] lg:pb-16 lg:pt-[150px]">
            <motion.nav
              variants={heroItem}
              aria-label="Breadcrumb"
              className="font-body flex items-center gap-2 text-[14px] font-medium text-white/90"
            >
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <ChevronRight size={14} />
              <Link href="/services" className="transition-colors hover:text-white">
                Services
              </Link>
              <ChevronRight size={14} />
              <span className="text-white/70">ITSM Migration &amp; Transformation</span>
            </motion.nav>

            <motion.h1
              variants={heroItem}
              className="font-heading mt-5 max-w-[760px] text-[32px] font-medium leading-[1.1] tracking-[-0.025em] text-white sm:text-[38px] lg:text-[44px] xl:text-[48px]"
            >
              ITSM Migration and Transformation for Modern Service Management
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="font-body mt-5 max-w-[650px] text-[16px] leading-[1.7] text-white/90 sm:text-[17px]"
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
              className="font-body mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-semibold"
              style={{ color: CHAMPION_BLUE }}
            >
              Connect Now
              <ArrowUpRight size={17} />
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* ============================================================
          ALIGN WRAPPER #1 — Why Matters + Q&A block only
      ============================================================ */}
      <div className={ALIGN}>
        {/* ============================================================
            WHY ITSM MIGRATION MATTERS
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
            className="font-heading mt-10 max-w-6xl text-[26px] leading-snug lg:text-[30px]"
            style={{ color: CHAMPION_BLUE }}
          >
            A trusted ITSM migration and transformation partner, Starfii
            moves enterprises off legacy service management platforms with
            a structured, low risk approach that protects the service desk
            and the people who depend on it every day.
          </p>
        </motion.section>

        {/* ============================================================
            Q&A BLOCK — whole-card hover, matches Data & Analytics exactly
        ============================================================ */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-20 mb-20 lg:mb-24"
        >
          {/* <div className="group grid grid-cols-1 items-stretch overflow-hidden rounded-lg bg-[#F5F3FC] transition-colors duration-500 ease-out hover:bg-[#EAE4FA] lg:grid-cols-2"> */}
          <div className="group grid grid-cols-1 items-stretch overflow-hidden rounded-[20px] bg-[#F5F3FC] transition-colors duration-500 ease-out hover:bg-[#EAE4FA] lg:grid-cols-2">
            <div className="flex flex-col justify-center p-10 transition-transform duration-500 ease-out group-hover:translate-x-2 lg:p-14">
              <h2 className={`${SECTION_HEADING} mt-4 font-bold`} style={{ color: CHAMPION_BLUE }}>
                How Do Enterprises Assess Readiness for ITSM Migration?
              </h2>

              <p className="font-body mt-5 text-[17px] leading-relaxed text-slate-600 lg:text-[18px]">
                Enterprises assess ITSM migration readiness by reviewing
                current state processes, data quality, integrations, and
                platform limitations before committing to a target
                environment. Starfii runs this assessment early, turning
                fragmented legacy platforms into a clear, structured
                migration plan that protects the service desk and the
                people who depend on it every day.
              </p>
            </div>

            <div className="relative min-h-[320px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=90&w=1800&auto=format&fit=crop"
                alt="Two colleagues reviewing an ITSM migration assessment"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full transform-gpu object-cover transition-transform duration-700 will-change-transform group-hover:scale-110"
              />
            </div>
          </div>
        </motion.section>
      </div>
      {/* ============================================================
          ⬆️ ALIGN WRAPPER #1 CLOSES HERE
      ============================================================ */}

      {/* ============================================================
          OUR ITSM MIGRATION CAPABILITIES — light 2-col sticky layout,
          matches Data & Analytics "Our Data & Analytics Capabilities"
          section exactly (no dark bg, no numbering, no tags)
          FIX: each card is now wrapped in a <Link> to
          /services/ITSM-Migration/capabilities/[slug], so both the
          card and the "Learn More" text navigate to the capability
          detail page.
      ============================================================ */}
      <section className="relative bg-white py-24 lg:py-28">
        <div className={`relative ${ALIGN}`}>
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[380px_1fr] lg:gap-14 xl:grid-cols-[420px_1fr]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="self-start lg:sticky lg:top-28"
            >
              <h2 className={`${SECTION_HEADING} mt-4 font-bold`} style={{ color: CHAMPION_BLUE }}>
                Our ITSM Migration &amp; Transformation Capabilities
              </h2>

              <p className="font-body mt-5 max-w-md text-[15px] leading-relaxed text-slate-600 sm:text-[16px]">
                Starfii assesses, designs, and migrates ITSM platforms end
                to end, moving data, configurations, workflows, and
                integrations into a modern service management environment
                with minimal disruption to the business.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={container}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2"
            >
              {focusAreas.map((area) => (
                <motion.div key={area.title} variants={item} className="h-full">
                  <Link
                    href={`${BASE_PATH}/capabilities/${area.slug}`}
                    aria-label={`Learn more about ${area.title}`}
                    className="ss-capability-card flex h-full flex-col p-8"
                  >
                    <h3
                      className="ss-capability-title font-heading text-[24px] font-semibold leading-[1.2] sm:text-[26px]"
                      style={{ color: CHAMPION_BLUE }}
                    >
                      {area.title}
                    </h3>

                    <p className="font-body mt-4 text-[17px] leading-[1.7] text-slate-600">
                      {area.body}
                    </p>

                    <span className="ss-capability-learn-more font-body mt-6 inline-flex w-fit items-center gap-1.5 text-[15px] font-medium">
                      <span className="relative">
                        Learn More
                        <span
                          className="ss-capability-underline absolute -bottom-0.5 left-0 h-[1.5px] w-full"
                          style={{ backgroundColor: INDIGO_CTA }}
                        />
                      </span>
                      <ArrowUpRight size={16} />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================
          USE CASES — FULL BLEED, deliberately OUTSIDE any ALIGN
          wrapper so the /bluegray.png background covers the full
          viewport width, exactly like the hero section above.
      ============================================================ */}
      <section className="relative isolate overflow-hidden py-24 lg:py-28">
        <div className="absolute inset-0 -z-10" style={{ backgroundColor: DARK_BG }}>
          <img
            src="/bluegray.png"
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,10,24,0.35) 0%, rgba(10,10,24,0.65) 100%)",
            }}
          />
        </div>

        <div className={ALIGN}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <h2 className={`${SECTION_HEADING} mt-4 text-white`}>
              ITSM Migration Use Cases
            </h2>
            <p className="font-body mt-4 max-w-2xl text-[15px] leading-relaxed text-white/60 sm:text-[16px]">
              A look at how these capabilities play out across industries,
              from end of life platform exits to audit ready change records.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={container}
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
          >
            {useCases.map((useCase) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={useCase.title}
                  variants={item}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border p-9 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.035)",
                    borderColor: "rgba(255,255,255,0.12)",
                  }}
                >
                  <div
                    className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full opacity-70 blur-3xl transition-opacity duration-300 group-hover:opacity-90"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(140,110,240,0.55) 0%, rgba(90,60,200,0.15) 55%, transparent 75%)",
                    }}
                  />

                  <span
                    className="relative flex h-12 w-12 items-center justify-center"
                    style={{ color: "#FFFFFF" }}
                  >
                    <Icon size={30} strokeWidth={1.4} />
                  </span>

                  <span
                    className="font-body relative mt-6 text-[12px] font-semibold tracking-[0.08em]"
                    style={{ color: LAVENDER_ACCENT }}
                  >
                    {useCase.industry.toUpperCase()}
                  </span>

                  <h3 className="font-heading relative mt-2 text-[22px] font-semibold leading-[1.3] text-white">
                    {useCase.title}
                  </h3>

                  <p
                    className="font-body relative mt-4 flex-1 text-[15px] font-normal leading-[1.75]"
                    style={{ color: "rgba(255,255,255,0.78)" }}
                  >
                    {useCase.body}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          ALIGN WRAPPER #2 — Case Studies + Tabbed Deep-dive
      ============================================================ */}
      <div className={ALIGN}>
        {/* ============================================================
            CASE STUDIES
        ============================================================ */}
        <section className="mt-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="flex items-end justify-between"
          >
            <h2 className={`${SECTION_HEADING} mt-4`} style={{ color: CHAMPION_BLUE }}>
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
                    <div className="ss-case-image h-[260px] w-full shrink-0 overflow-hidden bg-slate-900 transition-[height] duration-[800ms] ease-in-out group-hover:h-0">
                      <img src={study.image} alt={study.title} className="h-full w-full object-cover" />
                    </div>

                    <div className="flex flex-1 flex-col gap-3.5 overflow-hidden p-7">
                      <div className="flex flex-1 flex-col gap-3.5 overflow-hidden">
                        <span className="font-body shrink-0 text-[12px] font-semibold tracking-[0.08em]" style={{ color: LAVENDER_ACCENT }}>
                          {study.industry.toUpperCase()}
                        </span>

                        <h3 className="font-heading shrink-0 text-[20px] font-semibold leading-snug" style={{ color: CHAMPION_BLUE }}>
                          {study.title}
                        </h3>

                        <p className="ss-case-desc font-body max-h-0 -translate-y-2 text-[15px] leading-relaxed text-slate-500 opacity-0 transition-all duration-[800ms] ease-in-out group-hover:max-h-40 group-hover:translate-y-0 group-hover:opacity-100">
                          {study.body}
                        </p>
                      </div>

                      <span className="font-body mt-auto inline-flex w-fit shrink-0 items-center gap-1.5 pt-2 text-[16px] font-medium" style={{ color: LAVENDER_ACCENT }}>
                        <span className="relative">
                          Learn More
                          <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-current transition-[width] duration-500 ease-out group-hover:w-full" />
                        </span>
                        <ArrowUpRight size={16} className="transition-transform duration-500 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              )}
            />
          </div>
        </section>

        {/* ============================================================
            TABBED DEEP-DIVE — matches Data & Analytics font sizes,
            min-height, and top-aligned content padding
        ============================================================ */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="mt-24 pb-28"
        >
          <h2 className={`${SECTION_HEADING} mt-4 font-bold`} style={{ color: CHAMPION_BLUE }}>
            ITSM Migration Services
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
                          animation: tabHovered ? "none" : `ss-tab-progress ${TAB_AUTOPLAY_MS}ms linear forwards`,
                          transform: tabHovered ? "scaleY(1)" : undefined,
                        }}
                      />
                    )}
                    <button
                      type="button"
                      onClick={() => setActiveTab(i)}
                      className="font-body block py-4 pl-5 text-left text-[19px] transition-colors duration-200 sm:text-[20px]"
                      style={{
                        color: isActive ? CHAMPION_BLUE : "#94A3B8",
                        fontWeight: isActive ? 700 : 500,
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
              className="grid grid-cols-1 overflow-hidden rounded-2xl md:min-h-[420px] md:grid-cols-2"
              style={{ backgroundColor: "#F5F3FC" }}
            >
              <div className="flex flex-col justify-start p-3 pt-2 lg:p-6 lg:pt-5 self-start">
                <h3
                  className="font-heading text-[26px] font-medium leading-snug sm:text-[28px]"
                  style={{ color: CHAMPION_BLUE }}
                >
                  {current.heading}
                </h3>
                <p className="font-body mt-5 text-[17px] leading-relaxed text-slate-600">
                  {current.body}
                </p>
              </div>

              <div className="group relative min-h-[280px] overflow-hidden">
                <img
                  src={current.image}
                  alt={current.label}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full transform-gpu object-cover transition-transform duration-700 will-change-transform group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
      {/* ============================================================
          ⬆️ ALIGN WRAPPER #2 CLOSES HERE
      ============================================================ */}

      {/* ============================================================
          IMPACT ACROSS YOUR SERVICE MANAGEMENT ECOSYSTEM (dark)
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
            className={`${SECTION_HEADING} mt-4 max-w-6xl text-white`}
          >
            Impact Across Your Service Management Ecosystem
          </motion.h2>

          <ImpactAccordion items={impactAreas} />
        </div>
      </section>

      {/* ============================================================
          WHAT'S NEW IN ITSM MIGRATION
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
            <h2 className={`${SECTION_HEADING} mt-4 max-w-lg`} style={{ color: CHAMPION_BLUE }}>
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
              animate={{ x: insightStepWidth ? -(insightPage * insightStepWidth) : 0 }}
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
                        background: "radial-gradient(120% 120% at 20% 10%, #FFD36E 0%, #F97362 45%, #16131F 100%)",
                      }}
                    >
                      <div className="m-4 rounded-xl bg-white/95 p-6">
                        <span className="font-body text-[12px] font-semibold tracking-wide" style={{ color: ACCENT_INDIGO }}>
                          BLOG
                        </span>
                        <h3 className="font-heading mt-2 text-[18px] font-semibold leading-snug" style={{ color: CHAMPION_BLUE }}>
                          {post.title}
                        </h3>
                        <p className="font-body mt-3 text-[14px] leading-relaxed text-slate-600">
                          {post.body}
                        </p>
                        <span className="font-body mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold" style={{ color: ACCENT_INDIGO }}>
                          <span className="relative">
                            Read More
                            <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-current transition-[width] duration-500 ease-out group-hover:w-full" />
                          </span>
                          <ArrowUpRight size={15} className="transition-transform duration-500 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
                        <span className="font-body text-[12px] font-semibold tracking-wide" style={{ color: ACCENT_INDIGO }}>
                          BLOG
                        </span>
                        <h3 className="font-heading mt-2 text-[18px] font-semibold leading-snug" style={{ color: CHAMPION_BLUE }}>
                          {post.title}
                        </h3>
                        <p className="font-body mt-3 flex-1 text-[14px] leading-relaxed text-slate-600">
                          {post.body}
                        </p>
                        <span className="font-body mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold" style={{ color: ACCENT_INDIGO }}>
                          <span className="relative">
                            Read More
                            <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-current transition-[width] duration-500 ease-out group-hover:w-full" />
                          </span>
                          <ArrowUpRight size={15} className="transition-transform duration-500 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
                style={{ backgroundColor: ACCENT_INDIGO, width: `${((insightPage + 1) / insightPages) * 100}%` }}
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

      <GetInTouch />
    </main>
  );
}
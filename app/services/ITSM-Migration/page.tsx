// ITSM Migration & Transformation

"use client";
import Link from "next/link";

import {
  useRef,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
  type Ref,
  type ElementType,
  type ReactElement,
  type HTMLAttributes,
} from "react";
import {
  ChevronRight,
  ChevronDown,
  ChevronLeft,
  Sparkles,
  ArrowUpRight,
  Plus,
  Trophy,
} from "lucide-react";

/* ===============================================================
   BRAND TOKENS
   Primary   Champion Blue  #1B2560
   Secondary Lavender       #ECE7FB (surface) / #A48FEA (accent)
================================================================ */

const CHAMPION_BLUE = "#1B2560";
const LAVENDER_ACCENT = "#A48FEA";
const INDIGO_CTA = "#4F3FE0"; // circular "+" / arrow buttons on dark sections

// Shared page width wrapper, kept in sync with the navbar's own
// max width/padding so every section lines up with it exactly.

const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

// -----------------------------------------------------------------
// FIX: single source of truth for this service's route base.
// Every internal link on this page is now built from this constant
// instead of hardcoded strings, so the folder name and every link
// can never drift apart again. This MUST match the actual folder
// name on disk exactly, letter for letter, including case —
// Next.js routes are case sensitive in production even though a
// mismatch can silently "work" on some local dev setups.
//
// This assumes the route folder has been renamed to lowercase
// "itsm-migration" (app/services/itsm-migration/...). If you
// instead keep the folder as "ITSM-Migration", change BASE_PATH
// below to match that casing exactly — but pick ONE and use it
// everywhere, including in blogData.ts, BlogDetail.tsx, and the
// blogs [slug]/page.tsx canonical path.
// -----------------------------------------------------------------
const BASE_PATH = "/services/ITSM-Migration";

// Autoplay timing for the "ITSM Migration & Transformation" tab list
const TAB_AUTOPLAY_MS = 4000;

/* ===============================================================
   CONTENT
   SEO / AEO optimized: entity first statements ("Starfii is...",
   "Starfii offers..."), keyword rich but natural, no hyphens.

   Headings/subheadings are aligned to the recommended section list:
   157. ITSM migration overview        -> Hero + Key Takeaways
   158. Migration assessment            -> Q&A section
   159. Current-state analysis          -> Focus area card
   160. Target-state design             -> Focus area card
   161. Migration strategy              -> Focus area card
   162. Data migration                  -> Focus area card / Ecosystem impact
   163. Configuration migration         -> Focus area card / Ecosystem impact
   164. Workflow migration              -> Focus area card / Ecosystem impact
   165. Service catalog migration       -> Focus area card / Ecosystem impact
   166. CMDB / asset migration          -> Focus area card / Ecosystem impact
   167. Integration migration           -> Focus area card / Ecosystem impact
   168. Testing and validation          -> Tabbed deep dive
   169. User acceptance                 -> Tabbed deep dive
   170. Cutover                         -> Tabbed deep dive
   171. Post-migration support          -> Tabbed deep dive / Case studies
   172. Managed services                -> Case studies
   173. CTA                             -> Closing CTA section
================================================================ */

// Small dash-led eyebrow, matching the "— ITSM Migration & Transformation"
// heading style used across the page.
function Eyebrow({
  children,
  variant = "light",
}: {
  children: ReactNode;
  variant?: "light" | "dark";
}): ReactElement {
  return (
    <span
      className="font-body inline-flex items-center gap-2 text-[16px] font-semibold sm:text-[18px]"
      style={{ color: variant === "dark" ? "#FFFFFF" : CHAMPION_BLUE }}
    >
      <span aria-hidden="true">—</span>
      <span>{children}</span>
    </span>
  );
}

const keyTakeaways = [
  {
    title: "Assess",
    body: "Evaluate existing ITSM platforms, workflows, and integrations to build a clear current state picture and a low risk, structured migration plan.",
  },
  {
    title: "Migrate",
    body: "Move data, configurations, workflows, service catalogs, and CMDB records to a modern service management environment without disrupting daily operations.",
  },
  {
    title: "Support",
    body: "Validate every migrated process through testing and user acceptance, manage cutover carefully, and provide post migration and managed services support.",
  },
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

type EcosystemImpact = { title: string };

const ecosystemImpact: EcosystemImpact[] = [
  { title: "Data Migration" },
  { title: "Configuration Migration" },
  { title: "Workflow Migration" },
  { title: "Service Catalog Migration" },
  { title: "CMDB and Asset Migration" },
  { title: "Integration Migration" },
];

type CaseStudy = { slug: string; image: string; title: string; body: string };

const caseStudies: CaseStudy[] = [
  {
    slug: "legacy-itsm-platform-migration-insurer",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Migrates a Global Insurer From a Legacy ITSM Platform",
    body: "Explore how Starfii moved a global insurer off an end of life ITSM platform, migrating incidents, changes, and CMDB data without a single day of service desk downtime.",
  },
  {
    slug: "service-catalog-modernization-retail",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Modernizes a Retail Service Catalog for Faster Self Service",
    body: "See how Starfii restructured a sprawling service catalog into a clean, self service experience that cut average request fulfillment time significantly.",
  },
  {
    slug: "cmdb-asset-consolidation-manufacturer",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=900&auto=format&fit=crop",
    title: "CMDB and Asset Consolidation for a Global Manufacturer",
    body: "Discover how Starfii consolidated fragmented asset records into a single CMDB, giving IT teams accurate dependency mapping across every plant and facility.",
  },
  {
    slug: "workflow-automation-healthcare-itsm",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Automates ITSM Workflows for a Healthcare Provider",
    body: "Learn how Starfii rebuilt approval chains and escalation workflows during migration, reducing manual handoffs and improving incident resolution times.",
  },
  {
    slug: "managed-services-post-migration-bank",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=900&auto=format&fit=crop",
    title: "Post Migration Managed Services for a Regional Bank",
    body: "See how Starfii's managed services team supported a regional bank after ITSM migration, keeping the platform tuned as usage and compliance needs grew.",
  },
];

type InsightPost = {
  slug: string;
  large: boolean;
  image: string;
  title: string;
  body: string;
};

const insights: InsightPost[] = [
  {
    slug: "planning-a-low-risk-itsm-migration",
    large: true,
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200&auto=format&fit=crop",
    title:
      "Planning a Low Risk ITSM Migration: A Practical Roadmap for Enterprises",
    body: "Explore how Starfii structures ITSM migrations into assessment, design, and phased execution, so enterprises modernize service management without disrupting daily operations.",
  },
  {
    slug: "cmdb-data-quality-before-migration",
    large: false,
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
    title: "Why CMDB Data Quality Determines ITSM Migration Success",
    body: "Stop migrating bad data into a new platform. See how Starfii cleanses and validates CMDB records before migration to prevent downstream service disruptions.",
  },
  {
    slug: "cutover-runbooks-service-continuity",
    large: false,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
    title: "Building Cutover Runbooks That Protect Service Continuity",
    body: "Learn how detailed cutover runbooks and rollback plans help IT teams move to a new ITSM platform with confidence and minimal downtime.",
  },
  {
    slug: "modernizing-service-catalogs-self-service",
    large: false,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    title: "Modernizing Service Catalogs to Drive Self Service Adoption",
    body: "Discover how a restructured service catalog improves employee self service adoption and reduces ticket volume for overloaded service desks.",
  },
  {
    slug: "managed-services-after-itsm-go-live",
    large: false,
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format&fit=crop",
    title: "What Good Managed Services Look Like After ITSM Go Live",
    body: "Learn what to expect from managed services after an ITSM migration, from hypercare support to ongoing platform tuning and optimization.",
  },
];

/* ===============================================================
   GLOBAL KEYFRAMES
================================================================ */

function AnimationStyles(): ReactElement {
  return (
    <style>{`
      @keyframes ss-fade-up {
        from { opacity: 0; transform: translateY(28px) scale(0.97); }
        to   { opacity: 1; transform: translateY(0) scale(1); }
      }
      @keyframes ss-fade-in {
        from { opacity: 0; }
        to   { opacity: 1; }
      }
      @keyframes ss-drift {
        0%   { transform: translate3d(0, 0, 0) scale(1); }
        50%  { transform: translate3d(-2%, 2%, 0) scale(1.06); }
        100% { transform: translate3d(0, 0, 0) scale(1); }
      }
      @keyframes ss-pulse-soft {
        0%, 100% { opacity: 0.55; }
        50%      { opacity: 1; }
      }
      /* Autoplay progress fill for the tab list's active indicator line */
      @keyframes ss-tab-progress {
        from { transform: scaleY(0); }
        to   { transform: scaleY(1); }
      }

      .ss-reveal {
        opacity: 0;
      }
      .ss-reveal.ss-in-view {
        animation: ss-fade-up 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      }
      .ss-tab-panel {
        animation: ss-fade-in 0.45s ease-out;
      }
      .ss-drift-slow {
        animation: ss-drift 16s ease-in-out infinite;
      }
      .ss-drift-slower {
        animation: ss-drift 22s ease-in-out infinite reverse;
      }
      .ss-arrow-pulse:not(:disabled):hover {
        animation: ss-pulse-soft 1.2s ease-in-out infinite;
      }

      .ss-award-card {
        transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
          box-shadow 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        box-shadow: 0 0 0 rgba(164, 143, 234, 0);
      }
      .ss-award-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 22px 45px -18px rgba(79, 63, 224, 0.55),
          0 0 0 1px rgba(164, 143, 234, 0.35);
      }
      .ss-award-card:hover .ss-trophy {
        transform: rotate(-14deg) scale(1.15);
      }
      .ss-trophy {
        transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      .ss-focus-card {
        transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
          border-color 0.4s ease, background-color 0.4s ease;
      }
      .ss-focus-card:hover {
        transform: translateY(-6px);
        border-color: rgba(164, 143, 234, 0.55);
        background-color: #14121F;
      }
      .ss-focus-card:hover .ss-focus-arrow {
        transform: rotate(45deg);
        background-color: ${INDIGO_CTA};
        border-color: ${INDIGO_CTA};
      }
      .ss-focus-arrow {
        transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
          background-color 0.3s ease, border-color 0.3s ease;
      }

      .ss-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .ss-clamp-3 {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      @media (prefers-reduced-motion: reduce) {
        .ss-reveal, .ss-tab-panel, .ss-drift-slow, .ss-drift-slower, .ss-arrow-pulse {
          animation: none !important;
          opacity: 1 !important;
          transform: none !important;
        }
        .ss-tab-progress-fill {
          animation: none !important;
          transform: scaleY(1) !important;
        }
      }
    `}</style>
  );
}

/* ===============================================================
   HOOK: reveal-on-scroll
================================================================ */

function useReveal<T extends HTMLElement = HTMLElement>(
  options?: IntersectionObserverInit
): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

/* ===============================================================
   HOOK: responsive items-per-page
================================================================ */

type Breakpoints = { mobile: number; tablet: number; desktop: number };

function useItemsPerPage({ mobile, tablet, desktop }: Breakpoints): number {
  const [count, setCount] = useState(desktop);

  useEffect(() => {
    const mqTablet = window.matchMedia("(max-width: 1023px)");
    const mqMobile = window.matchMedia("(max-width: 639px)");

    const update = () => {
      if (mqMobile.matches) setCount(mobile);
      else if (mqTablet.matches) setCount(tablet);
      else setCount(desktop);
    };

    update();
    mqTablet.addEventListener("change", update);
    mqMobile.addEventListener("change", update);
    return () => {
      mqTablet.removeEventListener("change", update);
      mqMobile.removeEventListener("change", update);
    };
  }, [mobile, tablet, desktop]);

  return count;
}

/* ===============================================================
   REUSABLE: Reveal wrapper
================================================================ */

type RevealProps = {
  as?: ElementType;
  delay?: number;
  className?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLElement>;

function Reveal({
  as,
  delay = 0,
  className = "",
  children,
  ...rest
}: RevealProps): ReactElement {
  const Tag = (as ?? "div") as ElementType;
  const [ref, inView] = useReveal<HTMLElement>();

  return (
    <Tag
      ref={ref as Ref<HTMLElement>}
      className={`ss-reveal ${inView ? "ss-in-view" : ""} ${className}`}
      style={{ animationDelay: inView ? `${delay}ms` : undefined }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ===============================================================
   REUSABLE: Free-scroll Carousel
================================================================ */

type CarouselProps = {
  children: ReactNode;
  itemCount: number;
  arrowVariant?: "light" | "dark";
  clickToAdvance?: boolean;
};

function Carousel({
  children,
  itemCount,
  arrowVariant = "light",
  clickToAdvance = false,
}: CarouselProps): ReactElement {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateProgress = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const pct = maxScroll <= 0 ? 1 : el.scrollLeft / maxScroll;
    setProgress(pct);
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= maxScroll - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    updateProgress();
    if (!el) return undefined;
    el.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      el.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [updateProgress]);

  const scrollByCard = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard
      ? firstCard.getBoundingClientRect().width + 24
      : 320;
    el.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  };

  const isDark = arrowVariant === "dark";

  return (
    <div>
      <div
        ref={trackRef}
        onClick={
          clickToAdvance
            ? (event) => {
                const target = event.target as HTMLElement;
                if (target.closest("[data-carousel-card]")) {
                  scrollByCard(1);
                }
              }
            : undefined
        }
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      <div className="mt-8 flex items-center gap-6">
        <div
          className="h-[3px] flex-1 overflow-hidden rounded-full"
          style={{ backgroundColor: isDark ? "rgba(255,255,255,0.18)" : "#E5E1F5" }}
        >
          <div
            className="h-full rounded-full transition-[width] duration-300 ease-out"
            style={{
              width: `${Math.max(progress * 100, itemCount ? 100 / itemCount : 10)}%`,
              backgroundColor: INDIGO_CTA,
            }}
          />
        </div>

        <div className="flex flex-shrink-0 items-center gap-3">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => scrollByCard(-1)}
            disabled={atStart}
            className="ss-arrow-pulse flex h-11 w-11 items-center justify-center rounded-full transition-all duration-200 hover:scale-110 disabled:opacity-40 disabled:hover:scale-100"
            style={{
              backgroundColor: isDark ? "rgba(255,255,255,0.12)" : "#E5E1F5",
              color: isDark ? "#fff" : CHAMPION_BLUE,
            }}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => scrollByCard(1)}
            disabled={atEnd}
            className="ss-arrow-pulse flex h-11 w-11 items-center justify-center rounded-full text-white transition-all duration-200 hover:scale-110 disabled:opacity-40 disabled:hover:scale-100"
            style={{ backgroundColor: INDIGO_CTA }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ===============================================================
   REUSABLE: StepCarousel
   Moves exactly ONE card per arrow click.
   Used only for Case Studies.
================================================================ */

type StepCarouselProps<T> = {
  items: T[];
  itemsPerPage: Breakpoints;
  renderItem: (item: T, index: number) => ReactNode;
  arrowVariant?: "light" | "dark";
};

function StepCarousel<T>({
  items,
  itemsPerPage,
  renderItem,
  arrowVariant = "light",
}: StepCarouselProps<T>): ReactElement {
  const perPage = useItemsPerPage(itemsPerPage);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const [position, setPosition] = useState(0);
  const [stepWidth, setStepWidth] = useState(0);

  const maxPosition = Math.max(0, items.length - perPage);
  const totalPositions = Math.max(1, maxPosition + 1);
  const isDark = arrowVariant === "dark";

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.firstElementChild as HTMLElement | null;
    if (!firstCard) return;

    setStepWidth(firstCard.getBoundingClientRect().width + 24);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(track);

    const firstCard = track.firstElementChild as HTMLElement | null;
    if (firstCard) observer.observe(firstCard);

    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure, perPage]);

  useEffect(() => {
    setPosition((current) => Math.min(current, maxPosition));
  }, [maxPosition]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    track.scrollTo({
      left: position * stepWidth,
      behavior: "smooth",
    });
  }, [position, stepWidth]);

  const goTo = (nextPosition: number) => {
    const next = Math.min(
      Math.max(nextPosition, 0),
      maxPosition
    );

    setPosition(next);
  };

  const progress = ((position + 1) / totalPositions) * 100;

  return (
    <div>
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollBehavior: "smooth" }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="min-w-0 flex-shrink-0 snap-start"
            style={{
              width:
                perPage === 1
                  ? "100%"
                  : `calc((100% - ${(perPage - 1) * 24}px) / ${perPage})`,
            }}
          >
            {renderItem(item, i)}
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-6">
        <div
          className="h-[3px] flex-1 overflow-hidden rounded-full"
          style={{
            backgroundColor: isDark
              ? "rgba(255,255,255,0.18)"
              : "#E5E1F5",
          }}
        >
          <div
            className="h-full rounded-full transition-[width] duration-300 ease-out"
            style={{
              width: `${progress}%`,
              backgroundColor: INDIGO_CTA,
            }}
          />
        </div>

        <span
          className="font-body flex-shrink-0 text-[13px] font-medium tabular-nums"
          style={{
            color: isDark ? "rgba(255,255,255,0.55)" : "#94A3B8",
          }}
        >
          {String(position + 1).padStart(2, "0")} /{" "}
          {String(totalPositions).padStart(2, "0")}
        </span>

        <div className="flex flex-shrink-0 items-center gap-3">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => goTo(position - 1)}
            disabled={position === 0}
            className="ss-arrow-pulse flex h-11 w-11 items-center justify-center rounded-full transition-all duration-200 hover:scale-110 disabled:opacity-40 disabled:hover:scale-100"
            style={{
              backgroundColor: isDark
                ? "rgba(255,255,255,0.12)"
                : "#E5E1F5",
              color: isDark ? "#fff" : CHAMPION_BLUE,
            }}
          >
            <ChevronLeft size={18} />
          </button>

          <button
            type="button"
            aria-label="Next"
            onClick={() => goTo(position + 1)}
            disabled={position === maxPosition}
            className="ss-arrow-pulse flex h-11 w-11 items-center justify-center rounded-full text-white transition-all duration-200 hover:scale-110 disabled:opacity-40 disabled:hover:scale-100"
            style={{ backgroundColor: INDIGO_CTA }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}


/* ===============================================================
   SECTION
================================================================ */

export default function ItsmMigrationTransformationSection(): ReactElement {
  const [takeawaysOpen, setTakeawaysOpen] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [tabHovered, setTabHovered] = useState(false);
  const current = tabs[activeTab];

  // --- Autoplay for the left-side tab list ---
  // Advances to the next tab automatically every TAB_AUTOPLAY_MS.
  // Pausing on hover, and restarting the timer whenever the user
  // manually clicks a tab, so it never fights with manual control.
  useEffect(() => {
    if (tabHovered) return undefined;
    const id = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, TAB_AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [tabHovered, activeTab]);

  return (
    <main className="bg-white">
      <AnimationStyles />

      {/* ============================================================
          BREADCRUMB + HERO
          (157. ITSM migration overview)
      ============================================================ */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1800&auto=format&fit=crop"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/10" />
        </div>

        <div className={`${ALIGN} py-24 lg:py-32`}>
          <nav
            aria-label="Breadcrumb"
            className="font-body flex items-center gap-2 text-[14px] font-medium opacity-0"
            style={{ color: CHAMPION_BLUE, animation: "ss-fade-up 0.6s ease-out 0.05s forwards" }}
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
          </nav>

          <div
            className="mt-8 opacity-0"
            style={{ animation: "ss-fade-up 0.65s ease-out 0.1s forwards" }}
          >
            <Eyebrow>ITSM Migration &amp; Transformation</Eyebrow>
          </div>

          <h1
            className="font-heading mt-4 max-w-xl text-[44px] font-medium leading-[1.15] opacity-0 lg:text-[54px]"
            style={{ color: CHAMPION_BLUE, animation: "ss-fade-up 0.7s ease-out 0.15s forwards" }}
          >
            ITSM Migration and Transformation for Modern Service Management
          </h1>

          <p
            className="font-body mt-6 max-w-lg text-[17px] leading-relaxed text-slate-600 opacity-0"
            style={{ animation: "ss-fade-up 0.7s ease-out 0.28s forwards" }}
          >
            Migrate from legacy or existing ITSM platforms to modern service
            management environments with a structured, low risk approach.
          </p>

          <a
            href="#connect"
            className="font-body mt-9 inline-flex items-center gap-2 rounded-full px-7 py-4 text-[15px] font-semibold text-white opacity-0 transition-transform duration-300 hover:scale-[1.03]"
            style={{
              backgroundColor: CHAMPION_BLUE,
              animation: "ss-fade-up 0.7s ease-out 0.4s forwards",
            }}
          >
            Connect Now
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      <div className={ALIGN}>
        {/* ============================================================
            KEY TAKEAWAYS
            (157. ITSM migration overview)
        ============================================================ */}
        <Reveal as="section" className="mt-16">
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
                  ITSM Migration Overview
                </span>
              </div>

              <span
                className="font-body hidden rounded-full px-5 py-2.5 text-[13px] font-semibold sm:inline-flex"
                style={{
                  backgroundColor: "#F1EEFC",
                  color: INDIGO_CTA,
                }}
              >
                ASSESSMENT • MIGRATION • CUTOVER • SUPPORT
              </span>
            </div>

            {/* Three-column content */}
            <div className="grid grid-cols-1 gap-10 px-8 py-10 md:grid-cols-3 lg:px-10">
              {keyTakeaways.map((point) => (
                <div key={point.title}>
                  <h3
                    className="font-heading text-[23px] font-semibold"
                    style={{ color: CHAMPION_BLUE }}
                  >
                    {point.title}
                  </h3>

                  <p className="font-body mt-4 text-[15px] leading-[1.8] text-slate-600">
                    {point.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p
            className="font-heading mt-10 max-w-3xl text-[26px] leading-snug lg:text-[30px]"
            style={{ color: CHAMPION_BLUE }}
          >
            A trusted ITSM migration and transformation partner, Starfii
            moves enterprises off legacy service management platforms and
            onto modern environments with a structured, low risk approach
            that protects daily operations.
          </p>
        </Reveal>


        {/* ============================================================
            Q&A BLOCK
            (158. Migration assessment)
        ============================================================ */}

        <Reveal as="section" className="mt-20">
          <div
            className="grid grid-cols-1 items-center gap-10 rounded-2xl p-10 lg:grid-cols-2"
            style={{ backgroundColor: "#F5F3FC" }}
          >
            <div>
              <Eyebrow>Migration Assessment</Eyebrow>
              <h2
                className="font-heading mt-4 text-[26px] font-medium leading-snug lg:text-[30px]"
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

            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop"
                alt="Two colleagues reviewing an ITSM migration assessment"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </Reveal>
      </div>

      {/* ============================================================
          FOCUS AREAS
          (159-167. Current state analysis through Integration migration)
      ============================================================ */}


      <section className="relative overflow-hidden bg-[#0A0912] py-24">
        <div
          className="ss-drift-slow pointer-events-none absolute inset-y-0 right-0 w-[45%]"
          style={{
            background:
              "radial-gradient(55% 90% at 100% 0%, rgba(164,143,234,0.32) 0%, rgba(79,63,224,0.18) 40%, rgba(10,9,18,0) 70%)",
          }}
        />
        <div
          className="ss-drift-slower pointer-events-none absolute inset-y-0 left-0 w-[35%]"
          style={{
            background:
              "radial-gradient(55% 80% at 0% 100%, rgba(63,90,214,0.28) 0%, rgba(10,9,18,0) 70%)",
          }}
        />

        <div className={`relative ${ALIGN}`}>
          <Reveal className="max-w-xl">
            <Eyebrow variant="dark">ITSM Migration &amp; Transformation</Eyebrow>
            <h2 className="font-heading mt-4 text-[36px] font-medium leading-[1.15] text-white lg:text-[44px]">
              Our ITSM Migration &amp; Transformation Capabilities
            </h2>
            <p className="font-body mt-5 text-[15px] leading-relaxed text-white/60">
              Starfii assesses, designs, and migrates ITSM platforms end to
              end, moving data, configurations, workflows, and integrations
              into a modern service management environment with minimal
              disruption to the business.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {focusAreas.map((area, i) => (
              <Reveal key={area.title} delay={(i % 3) * 90} className="h-full">
                <div
                  className="ss-focus-card flex h-full flex-col justify-between rounded-2xl border p-8"
                  style={{
                    backgroundColor: "#0F0E18",
                    borderColor: "rgba(255,255,255,0.10)",
                  }}
                >
                  <div className="flex items-start justify-between">
                    <span className="font-body text-[13px] font-medium text-white/35">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="ss-focus-arrow flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border"
                      style={{ borderColor: "rgba(255,255,255,0.18)" }}
                    >
                      <ArrowUpRight size={16} className="text-white" />
                    </span>
                  </div>

                  <div className="mt-16">
                    <h3 className="font-heading text-[22px] font-semibold leading-snug text-white">
                      — {area.title}
                    </h3>
                    <p className="font-body mt-3 text-[14px] leading-relaxed text-white/55">
                      {area.body}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-body rounded-full border px-3 py-1 text-[11px] font-medium tracking-wide text-white/50"
                        style={{ borderColor: "rgba(255,255,255,0.16)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className={ALIGN}>

        {/* ============================================================
            TABBED DEEP-DIVE — auto-advancing tab list
            (158, 168-171. Migration assessment through Post-migration support)
        ============================================================ */}

        <Reveal as="section" className="mt-24 pb-28">
          <Eyebrow>ITSM Migration &amp; Transformation</Eyebrow>
          <h2
            className="font-heading mt-4 text-[34px] font-medium"
            style={{ color: CHAMPION_BLUE }}
          >
            ITSM Migration and Transformation Services
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
                    {/* Static base line */}
                    <span
                      className="pointer-events-none absolute inset-y-0 left-0 w-[2px]"
                      style={{ backgroundColor: "transparent" }}
                    />
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

            {/* Right panel */}
            <div
              key={activeTab}
              className="ss-tab-panel grid grid-cols-1 overflow-hidden rounded-2xl md:grid-cols-2 md:h-[420px]"
              style={{ backgroundColor: "#F5F3FC" }}
            >
              <div className="flex flex-col justify-center p-10">
                <h3
                  className="font-heading text-[22px] font-semibold leading-snug"
                  style={{ color: CHAMPION_BLUE }}
                >
                  — {current.heading}
                </h3>
                <p className="font-body mt-4 text-[15px] leading-relaxed text-slate-600">
                  {current.body}
                </p>
              </div>

              <div className="min-h-[280px] overflow-hidden">
                <img
                  src={current.image}
                  alt={current.label}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ============================================================
          IMPACT ACROSS ECOSYSTEM (dark)
          (162-167. Data migration through Integration migration)
      ============================================================ */}

      <section className="relative overflow-hidden bg-[#08070F] py-24">
        <div
          className="ss-drift-slow pointer-events-none absolute inset-y-0 right-0 w-[55%]"
          style={{
            background:
              "radial-gradient(60% 90% at 100% 100%, rgba(232,110,90,0.55) 0%, rgba(164,143,234,0.35) 35%, rgba(8,7,15,0) 70%)",
          }}
        />
        <div
          className="ss-drift-slower pointer-events-none absolute inset-y-0 left-0 w-[35%]"
          style={{
            background:
              "radial-gradient(60% 80% at 0% 100%, rgba(63,90,214,0.35) 0%, rgba(8,7,15,0) 70%)",
          }}
        />

        <div className={`relative ${ALIGN}`}>
          <Reveal>
            <Eyebrow variant="dark">ITSM Migration &amp; Transformation</Eyebrow>
            <h2 className="font-heading mt-4 max-w-2xl text-[36px] font-medium leading-[1.2] text-white lg:text-[44px]">
              Impact Across Your Service
              <br />
              Management Ecosystem
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {ecosystemImpact.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <a
                  href="#"
                  className="group flex items-center justify-between rounded-2xl bg-white px-8 py-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <span
                    className="font-body text-[19px] font-medium"
                    style={{ color: CHAMPION_BLUE }}
                  >
                    — {item.title}
                  </span>
                  <span
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:rotate-45"
                    style={{ backgroundColor: INDIGO_CTA }}
                  >
                    <Plus size={18} />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

      </section>


      {/* ============================================================
          CASE STUDIES
          (171-172. Post-migration support / Managed services)
      ============================================================ */}

      <section
        className="py-24"
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #E9E4FB 45%, #C9BEF5 100%)",
        }}
      >
        <div className={ALIGN}>
          <Reveal className="flex items-center justify-between">
            <div>
              <Eyebrow>Case Studies</Eyebrow>
              <h2
                className="font-heading mt-4 text-[36px] font-medium lg:text-[44px]"
                style={{ color: CHAMPION_BLUE }}
              >
                Case Studies
              </h2>
            </div>
            {/* FIX: was hardcoded "#", now a real link so "View All"
                actually navigates somewhere. Point this at your real
                case studies index route if different from BASE_PATH. */}
            <Link
              href={`${BASE_PATH}/casestudies`}
              className="font-body hidden items-center gap-1.5 text-[15px] font-semibold transition-transform duration-200 hover:translate-x-1 sm:flex"
              style={{ color: INDIGO_CTA }}
            >
              View All Case Studies
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>

          <div className="mt-12">
            <StepCarousel
              items={caseStudies}
              itemsPerPage={{
                mobile: 1,
                tablet: 2,
                desktop: 3,
              }}
              arrowVariant="light"
              renderItem={(study, i) => (
                <Reveal
                  delay={(i % 3) * 90}
                  className="h-full"
                >
                  {/* FIX: was hardcoded "/services/ITSM-Migration/casestudies/..."
                      (capital, mismatched with the blog links below).
                      Now built from the same BASE_PATH constant as every
                      other link on this page, so it can never drift out
                      of sync with the actual folder name again. */}
                  <Link
                    href={`${BASE_PATH}/casestudies/${study.slug}`}
                    aria-label={`Read case study: ${study.title}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl"
                    style={{
                      border: "1px solid #E5E1F5",
                    }}
                  >
                    {/* IMAGE */}
                    <div className="h-[220px] flex-shrink-0 overflow-hidden">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="flex flex-1 flex-col p-6">

                      <span
                        className="font-body text-[12px] font-semibold tracking-wide"
                        style={{
                          color: INDIGO_CTA,
                        }}
                      >
                        CASE STUDY
                      </span>

                      <h3
                        className="font-heading ss-clamp-2 mt-2 text-[19px] font-semibold leading-snug"
                        style={{
                          color: CHAMPION_BLUE,
                        }}
                      >
                        {study.title}
                      </h3>

                      <p className="font-body ss-clamp-3 mt-3 text-[14px] leading-relaxed text-slate-600">
                        {study.body}
                      </p>

                      {/* LEARN MORE — no longer its own <Link>: the whole card above
                          is now the Link, so this is just a visual affordance that
                          reacts to the card's hover state via the shared "group" class. */}
                      <span
                        className="font-body mt-6 inline-flex w-fit items-center gap-1.5 text-[14px] font-semibold transition-transform duration-200 group-hover:translate-x-1"
                        style={{
                          color: INDIGO_CTA,
                        }}
                      >
                        Learn More
                        <ArrowUpRight size={15} />
                      </span>

                    </div>
                  </Link>
                </Reveal>
              )}
            />
          </div>

        </div>
      </section>


      {/* ============================================================
          INSIGHTS / WHAT'S NEW
      ============================================================ */}
      <section className="bg-[#EEF0F7] py-24">
        <div className={ALIGN}>
          <Reveal className="flex items-center justify-between">
            <div>
              <Eyebrow>ITSM Migration &amp; Transformation</Eyebrow>
              <h2
                className="font-heading mt-4 max-w-lg text-[36px] font-medium leading-[1.15] lg:text-[44px]"
                style={{ color: CHAMPION_BLUE }}
              >
                {"What's New in ITSM Migration & Transformation"}
              </h2>
            </div>

            {/* FIX: built from BASE_PATH instead of a hardcoded string,
                so it always matches the [slug] route folder exactly. */}
            <Link
              href={`${BASE_PATH}/blogs`}
              className="font-body hidden items-center gap-1.5 text-[15px] font-semibold transition-transform duration-200 hover:translate-x-1 sm:flex"
              style={{ color: INDIGO_CTA }}
            >
              View All Insights

              <ArrowUpRight size={16} />
            </Link>
          </Reveal>

          <div className="mt-12">
            <Carousel
              itemCount={insights.length}
              arrowVariant="light"
              clickToAdvance
            >
              {insights.map((post, i) => (
                <Reveal
                  key={post.slug}
                  delay={i * 90}
                  data-carousel-card
                  className={`flex-shrink-0 snap-start ${
                    post.large
                      ? "w-[420px]"
                      : "w-[340px]"
                  }`}
                >
                  {/* FIX: was hardcoded "/services/itsm-migration/blogs/...".
                      Now built from BASE_PATH so it is guaranteed to match
                      the case studies links above and the actual folder
                      name on disk, instead of relying on two separate
                      hardcoded strings staying in sync by hand. */}
                  <Link
                    href={`${BASE_PATH}/blogs/${post.slug}`}
                    className="block h-full"
                    aria-label={`Read ${post.title}`}
                  >
                    {post.large ? (
                      <div className="group relative h-[420px] overflow-hidden rounded-2xl">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-x-4 bottom-4 rounded-xl bg-white/85 p-6 backdrop-blur transition-all duration-300 group-hover:bg-white/95">
                          <span
                            className="font-body text-[12px] font-semibold tracking-wide"
                            style={{
                              color: INDIGO_CTA,
                            }}
                          >
                            BLOG
                          </span>

                          <h3
                            className="font-heading ss-clamp-2 mt-2 text-[19px] font-semibold leading-snug"
                            style={{
                              color: CHAMPION_BLUE,
                            }}
                          >
                            {post.title}
                          </h3>

                          <p className="font-body ss-clamp-2 mt-2 text-[13px] leading-relaxed text-slate-600">
                            {post.body}
                          </p>

                          <span
                            className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold"
                            style={{
                              color: INDIGO_CTA,
                            }}
                          >
                            Read More

                            <ArrowUpRight
                              size={14}
                              className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="group">
                        <div className="h-[220px] overflow-hidden rounded-2xl">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>

                        <div className="pt-5">
                          <span
                            className="font-body text-[12px] font-semibold tracking-wide"
                            style={{
                              color: INDIGO_CTA,
                            }}
                          >
                            BLOG
                          </span>

                          <h3
                            className="font-heading ss-clamp-2 mt-2 text-[19px] font-semibold leading-snug"
                            style={{
                              color: CHAMPION_BLUE,
                            }}
                          >
                            {post.title}
                          </h3>

                          <p className="font-body ss-clamp-3 mt-3 text-[14px] leading-relaxed text-slate-600">
                            {post.body}
                          </p>

                          <span
                            className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold"
                            style={{
                              color: INDIGO_CTA,
                            }}
                          >
                            Read More

                            <ArrowUpRight
                              size={14}
                              className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                          </span>
                        </div>
                      </div>
                    )}
                  </Link>
                </Reveal>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* ============================================================
          CLOSING CTA
          (173. CTA)
      ============================================================ */}
      <section id="connect" className="bg-white py-24">
        <div className={ALIGN}>
          <Reveal
            className="overflow-hidden rounded-[28px] px-8 py-16 text-center sm:px-16"
            style={{ backgroundColor: CHAMPION_BLUE }}
          >
            <Eyebrow variant="dark">CTA</Eyebrow>
            <h2 className="font-heading mx-auto mt-4 max-w-2xl text-[32px] font-medium leading-[1.2] text-white lg:text-[40px]">
              Ready to Migrate to a Modern ITSM Platform?
            </h2>
            <p className="font-body mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/70">
              Talk to Starfii about migration assessment, data and
              configuration migration, cutover planning, or post migration
              managed services for your ITSM platform.
            </p>
            <a
              href="mailto:hello@starfii.com"
              className="font-body mt-9 inline-flex items-center gap-2 rounded-full px-7 py-4 text-[15px] font-semibold transition-transform duration-300 hover:scale-[1.03]"
              style={{ backgroundColor: "#FFFFFF", color: CHAMPION_BLUE }}
            >
              Connect Now
              <ArrowUpRight size={17} />
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
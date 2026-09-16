//  ITSM & Enterprise Service Management -- page

"use client";
import Link from "next/link";
import { caseStudies as itsmCaseStudies } from "./casestudies/data/case-studies";
import { blogPosts } from "./blogs/blogData";

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
  Plus,
  Minus,
  Sparkles,
  ArrowUpRight,
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

// Autoplay timing for the ITSM service capability tab list
const TAB_AUTOPLAY_MS = 4000;

/* ===============================================================
   TYPOGRAPHY TOKENS
   Same scale used on the Data & Analytics Services and Legacy
   Modernization pages, so every service page's Hero <h1> and big
   section <h2>s render at identical sizes across the site.
================================================================ */

const HERO_HEADING =
  "font-heading font-medium leading-[1.08] text-[46px] sm:text-[56px] lg:text-[66px]";

const SECTION_HEADING =
  "font-heading font-medium leading-[1.15] text-[34px] sm:text-[40px] lg:text-[46px]";

// Page 9  ITSM & Enterprise Service Management
// URL: /services/itsm
// (kept in sync with the actual folder this file lives in  see
// CASE_STUDY_BASE below must match the casestudies/[slug] route)
const CASE_STUDY_BASE = "/services/itsm-service-management/casestudies";
// Reusable section eyebrow used by the ITSM sections.
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
      <span aria-hidden="true"></span>
      <span>{children}</span>
    </span>
  );
}

/* ===============================================================
   CONTENT
================================================================ */

const keyTakeaways: string[] = [
  "Starfii helps enterprises modernize IT service operations with modern ITSM platforms, intelligent workflows, and scalable service management solutions.",
  "Our ITSM consulting and implementation services align service management processes, platform capabilities, governance, and user experience around measurable business outcomes.",
  "We transform service desks and core practices across incident management, problem management, change management, request management, service catalogs, and asset and configuration management.",
  "We extend ITSM with workflow automation, AI powered service operations, enterprise integrations, and platform expertise so service management can scale with the business.",
];

type FocusArea = { title: string; body: string; tags: string[] };

const focusAreas: FocusArea[] = [
  {
    title: "ITSM Implementation",
    body: "Starfii designs and implements ITSM platforms around your operating model, service processes, governance, integrations, and adoption goals.",
    tags: ["IMPLEMENTATION", "ITIL", "GOVERNANCE"],
  },
  {
    title: "Service Desk Transformation",
    body: "We redesign service desk experiences, workflows, knowledge practices, and escalation paths to make support faster, more consistent, and easier to use.",
    tags: ["SERVICE DESK", "SELF SERVICE", "EXPERIENCE"],
  },
  {
    title: "Incident Management",
    body: "Starfii streamlines incident intake, triage, routing, escalation, communications, and resolution so teams can restore services quickly and consistently.",
    tags: ["INCIDENTS", "SLA", "ESCALATION"],
  },
  {
    title: "Problem Management",
    body: "We connect recurring incidents to root cause analysis, known error management, and corrective actions to reduce repeat disruption and improve service stability.",
    tags: ["ROOT CAUSE", "KNOWN ERRORS", "PREVENTION"],
  },
  {
    title: "Change Management",
    body: "Starfii builds controlled change workflows with approvals, risk assessment, scheduling, and auditability so teams can move quickly without losing operational control.",
    tags: ["CHANGE", "RISK", "APPROVALS"],
  },
  {
    title: "Request Management",
    body: "We automate common employee and customer requests with clear fulfillment workflows, approvals, SLAs, and self service experiences.",
    tags: ["REQUESTS", "FULFILLMENT", "SELF SERVICE"],
  },
  {
    title: "Service Catalog",
    body: "Starfii structures business and technology services into intuitive catalogs that make service offerings discoverable, requestable, and measurable.",
    tags: ["CATALOG", "SERVICES", "PORTAL"],
  },
  {
    title: "Asset and Configuration Management",
    body: "We establish reliable asset and configuration visibility so teams can understand relationships, ownership, dependencies, and operational impact.",
    tags: ["ASSETS", "CMDB", "DEPENDENCIES"],
  },
  {
    title: "Workflow Automation",
    body: "Starfii automates repetitive service operations across intake, approvals, routing, fulfillment, notifications, and cross team handoffs.",
    tags: ["AUTOMATION", "WORKFLOWS", "ORCHESTRATION"],
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
    label: "AI Powered ITSM",
    heading: "AI powered ITSM for faster, smarter service operations",
    body: "Starfii applies AI to service classification, knowledge discovery, agent assistance, request routing, summarization, and operational insights so service teams can resolve work with less friction.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "ITSM Integrations",
    heading: "ITSM integrations that connect the enterprise",
    body: "Starfii connects ITSM platforms with identity, monitoring, collaboration, cloud, business applications, and other enterprise systems to keep service workflows moving across teams.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Platform Expertise",
    heading: "Platform expertise built around your service management goals",
    body: "Our platform specialists configure, extend, integrate, and optimize ITSM environments while keeping architecture, governance, usability, and long term maintainability in view.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "ITSM Analytics",
    heading: "ITSM analytics that turn service data into better decisions",
    body: "Starfii helps teams turn service data into actionable insights across SLAs, incidents, requests, workloads, service quality, and operational performance so leaders can continuously improve service delivery.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Workflow Automation",
    heading: "Workflow automation that removes repetitive service work",
    body: "Starfii automates intake, approvals, routing, fulfillment, notifications, and cross team handoffs to reduce manual effort and create consistent service experiences at scale.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Service Desk Transformation",
    heading: "Service desk transformation for faster employee support",
    body: "Starfii redesigns service desk journeys with self service, knowledge, intelligent routing, escalation, and modern support experiences that help teams resolve requests faster.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
  },
];

/* ===============================================================
   CASE STUDIES
================================================================ */

type CaseStudyCard = {
  slug: string;
  image: string;
  title: string;
  body: string;
};

// Always derive the cards from the canonical ITSM case-study data.
const caseStudies: CaseStudyCard[] = itsmCaseStudies.map((study) => ({
  slug: study.slug,
  image: study.image,
  title: study.title,
  body: study.cardDescription,
}));

type InsightPost = {
  slug: string;
  large: boolean;
  image: string;
  title: string;
  body: string;
};

// Always derive insight cards from the canonical ITSM blog data.
const insights: InsightPost[] = blogPosts.map((post, i) => ({
  slug: post.slug,
  large: i === 0,
  image: post.heroImage,
  title: post.title,
  body: post.excerpt,
}));

type ITSMImpactItem = {
  title: string;
  body: string;
};

const itsmImpact: ITSMImpactItem[] = [
  {
    title: "Service Desk Transformation",
    body: "Modernize employee and customer support with self service, knowledge, intelligent routing, and consistent escalation experiences.",
  },
  {
    title: "Incident and Problem Management",
    body: "Connect incident response with root cause analysis and known error practices to reduce repeat disruption and improve service stability.",
  },
  {
    title: "Change and Request Management",
    body: "Create governed workflows for approvals, risk assessment, fulfillment, SLAs, and service requests without unnecessary manual effort.",
  },
  {
    title: "Service Catalog and Self Service",
    body: "Make business and technology services easy to discover and request through intuitive catalogs and modern service portals.",
  },
  {
    title: "Asset and Configuration Management",
    body: "Build reliable visibility into assets, configuration items, ownership, dependencies, and operational impact across the enterprise.",
  },
  {
    title: "AI and Workflow Automation",
    body: "Use AI powered classification, knowledge discovery, routing, summarization, and workflow automation to scale service operations.",
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
      /* Typewriter caret blink for the Key Takeaways accordion */
      @keyframes ss-caret-blink {
        0%, 100% { opacity: 1; }
        50%      { opacity: 0; }
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
      .ss-caret {
        animation: ss-caret-blink 0.9s steps(1) infinite;
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
        .ss-reveal, .ss-tab-panel, .ss-drift-slow, .ss-drift-slower, .ss-arrow-pulse, .ss-caret {
          animation: none !important;
          opacity: 1 !important;
          transform: none !important;
        }
        .ss-tab-progress-fill {
          animation: none !important;
          transform: scaleY(1) !important;
        }
        /* Case study / blog hover motion stays static */
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
   KEY TAKEAWAYS ACCORDION
================================================================ */

function TakeawaysAccordion({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (updater: (prev: boolean) => boolean) => void;
}): ReactElement {
  const { displayed, typingIndex } = useTypewriterList(keyTakeaways, open);

  return (
    <div
      className="overflow-hidden rounded-[22px] border bg-white transition-colors duration-300"
      style={{ borderColor: open ? INDIGO_CTA : LAVENDER_ACCENT }}
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
            ITSM & Enterprise Service Management Overview
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span
            className="font-body hidden rounded-full px-5 py-2.5 text-[13px] font-semibold sm:inline-flex"
            style={{ backgroundColor: "#F1EEFC", color: INDIGO_CTA }}
          >
            STRATEGY • AUTOMATION • AI
          </span>

          <ChevronDown
            size={20}
            strokeWidth={2.2}
            className="flex-shrink-0 transition-transform duration-300"
            style={{
              color: INDIGO_CTA,
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
                    style={{ backgroundColor: INDIGO_CTA }}
                  />
                  <span>
                    {text}
                    {isTyping && (
                      <span
                        className="ss-caret ml-0.5 inline-block h-4 w-[2px] align-middle"
                        style={{ backgroundColor: INDIGO_CTA }}
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
   REUSABLE: PagedCarousel
   Kept as-is for the Insights / Blogs section.
================================================================ */

type PagedCarouselProps<T> = {
  items: T[];
  itemsPerPage: Breakpoints;
  renderItem: (item: T, index: number) => ReactNode;
  arrowVariant?: "light" | "dark";
};

function PagedCarousel<T>({
  items,
  itemsPerPage,
  renderItem,
  arrowVariant = "light",
}: PagedCarouselProps<T>): ReactElement {
  const perPage = useItemsPerPage(itemsPerPage);
  const maxPage = Math.max(0, items.length - perPage);
  const totalPositions = maxPage + 1;
  const [page, setPage] = useState(0);
  const [stepWidth, setStepWidth] = useState(0);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const measureStep = useCallback(() => {
    const track = trackRef.current;
    const firstItem = track?.firstElementChild as HTMLElement | null;
    if (!track || !firstItem) return;

    const trackStyles = window.getComputedStyle(track);
    const gap = parseFloat(trackStyles.columnGap || trackStyles.gap || "0");
    setStepWidth(firstItem.getBoundingClientRect().width + gap);
  }, []);

  useEffect(() => {
    setPage((p) => Math.min(p, maxPage));
  }, [maxPage]);

  useEffect(() => {
    measureStep();

    const handleResize = () => measureStep();
    window.addEventListener("resize", handleResize);

    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) {
      return () => window.removeEventListener("resize", handleResize);
    }

    const resizeObserver = new ResizeObserver(measureStep);
    resizeObserver.observe(viewport);
    resizeObserver.observe(track);

    const firstItem = track.firstElementChild as HTMLElement | null;
    if (firstItem) resizeObserver.observe(firstItem);

    return () => {
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
    };
  }, [measureStep, perPage, items.length]);

  const isDark = arrowVariant === "dark";
  const goTo = (next: number) =>
    setPage(Math.min(Math.max(next, 0), maxPage));

  const itemWidthClass =
    perPage === 1
      ? "w-full"
      : perPage === 2
        ? "w-[calc((100%-24px)/2)]"
        : "w-[calc((100%-48px)/3)]";

  return (
    <div>
      <div ref={viewportRef} className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-6 transition-transform duration-500 ease-out"
          style={{
            transform: `translate3d(-${page * stepWidth}px, 0, 0)`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={`min-w-0 flex-shrink-0 ${itemWidthClass}`}
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center gap-6">
        <div
          className="h-[3px] flex-1 overflow-hidden rounded-full"
          style={{
            backgroundColor: isDark ? "rgba(255,255,255,0.18)" : "#E5E1F5",
          }}
        >
          <div
            className="h-full rounded-full transition-[width] duration-300 ease-out"
            style={{
              width: `${((page + 1) / totalPositions) * 100}%`,
              backgroundColor: INDIGO_CTA,
            }}
          />
        </div>

        <span
          className="font-body flex-shrink-0 text-[13px] font-medium tabular-nums"
          style={{ color: isDark ? "rgba(255,255,255,0.55)" : "#94A3B8" }}
        >
          {String(page + 1).padStart(2, "0")} /{" "}
          {String(totalPositions).padStart(2, "0")}
        </span>

        <div className="flex flex-shrink-0 items-center gap-3">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => goTo(page - 1)}
            disabled={page === 0}
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
            onClick={() => goTo(page + 1)}
            disabled={page === maxPage}
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
   Moves exactly ONE card per arrow click. Supports a fractional
   perPage (e.g. 1.15 for a "peek" card) and a configurable gap.
   Used for Case Studies, matching the Software & Product
   Engineering / Cloud / Legacy Modernization pages exactly:
   4 cards on desktop, 32px gap, a peek card on mobile.
================================================================ */

type StepCarouselProps<T> = {
  items: T[];
  itemsPerPage: Breakpoints;
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
}: StepCarouselProps<T>): ReactElement {
  const perPage = useItemsPerPage(itemsPerPage);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const [position, setPosition] = useState(0);
  const [stepWidth, setStepWidth] = useState(0);

  // Math.ceil so a fractional perPage (e.g. 1.15 for a "peek" card)
  // still lands on a whole card instead of stopping mid-card.
  const maxPosition = Math.max(0, Math.ceil(items.length - perPage));
  const totalPositions = Math.max(1, maxPosition + 1);
  const isDark = arrowVariant === "dark";

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.firstElementChild as HTMLElement | null;
    if (!firstCard) return;

    setStepWidth(firstCard.getBoundingClientRect().width + gap);
  }, [gap]);

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
    const next = Math.min(Math.max(nextPosition, 0), maxPosition);
    setPosition(next);
  };

  const progress = ((position + 1) / totalPositions) * 100;

  return (
    <div>
      <div
        ref={trackRef}
        className="flex overflow-x-auto pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollBehavior: "smooth", gap: `${gap}px` }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="min-w-0 flex-shrink-0 snap-start"
            style={{
              width:
                perPage === 1
                  ? "100%"
                  : `calc((100% - ${(perPage - 1) * gap}px) / ${perPage})`,
            }}
          >
            {renderItem(item, i)}
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-6">
        <div
          className="h-[3px] flex-1 overflow-hidden rounded-full"
          style={{ backgroundColor: isDark ? "rgba(255,255,255,0.18)" : "#E5E1F5" }}
        >
          <div
            className="h-full rounded-full transition-[width] duration-300 ease-out"
            style={{ width: `${progress}%`, backgroundColor: INDIGO_CTA }}
          />
        </div>

        <span
          className="font-body flex-shrink-0 text-[13px] font-medium tabular-nums"
          style={{ color: isDark ? "rgba(255,255,255,0.55)" : "#94A3B8" }}
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
              backgroundColor: isDark ? "rgba(255,255,255,0.12)" : "#E5E1F5",
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
   ITSM ECOSYSTEM ACCORDION
   Same interaction pattern as the Cloud Services ecosystem.
=============================================================== */

function ITSMEcosystemAccordion(): ReactElement {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const columns: { item: ITSMImpactItem; index: number }[][] = [[], []];

  itsmImpact.forEach((item, index) => {
    const target = columns[index % 2];
    if (target) target.push({ item, index });
  });

  return (
    <div className="mt-14 grid grid-cols-1 items-start gap-5 sm:grid-cols-2">
      {columns.map((column, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-5">
          {column.map(({ item, index }) => {
            const isOpen = openIndex === index;

            return (
              <Reveal key={item.title} delay={index * 80}>
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
                    aria-controls={`itsm-ecosystem-panel-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 px-8 py-7 text-left"
                  >
                    <span
                      className="font-body text-[19px] font-medium leading-snug transition-colors duration-300"
                      style={{ color: isOpen ? INDIGO_CTA : CHAMPION_BLUE }}
                    >
                      {item.title}
                    </span>
                    <span
                      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300"
                      style={{
                        backgroundColor: isOpen ? "#E5E1F5" : INDIGO_CTA,
                        color: isOpen ? "#8B93A7" : "#FFFFFF",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>

                  <div
                    id={`itsm-ecosystem-panel-${index}`}
                    className="ss-eco-panel grid transition-all duration-500 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="font-body px-8 pb-8 text-[15px] leading-[1.75] transition-opacity duration-500"
                        style={{
                          color: CHAMPION_BLUE,
                          opacity: isOpen ? 1 : 0,
                        }}
                      >
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      ))}
    </div>
  );
}

/* ===============================================================
   SECTION
================================================================ */

export default function ITSMSection(): ReactElement {
  const [takeawaysOpen, setTakeawaysOpen] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [tabHovered, setTabHovered] = useState(false);
  const current = tabs[activeTab];

  // --- Autoplay for the left-side tab list ---
  useEffect(() => {
    if (tabHovered) return undefined;
    const id = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, TAB_AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [tabHovered]);

  return (
    <main className="bg-white">
      <AnimationStyles />

      {/* ============================================================
          BREADCRUMB + HERO
      ============================================================ */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1800&auto=format&fit=crop"
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
            <a href="/" className="hover:underline">
              Home
            </a>
            <ChevronRight size={14} />
            <a href="/services" className="hover:underline">
              Services
            </a>
            <ChevronRight size={14} />
            <span className="text-slate-500">ITSM & Enterprise Service Management</span>
          </nav>

          <h1
            className={`${HERO_HEADING} mt-8 max-w-xl opacity-0`}
            style={{ color: CHAMPION_BLUE, animation: "ss-fade-up 0.7s ease-out 0.15s forwards" }}
          >
            ITSM & Enterprise Service Management for Modern Enterprises
          </h1>

          <p
            className="font-body mt-6 max-w-lg text-[17px] leading-relaxed text-slate-600 opacity-0"
            style={{ animation: "ss-fade-up 0.7s ease-out 0.28s forwards" }}
          >
            Transform IT service operations with modern ITSM platforms,
            intelligent workflows and scalable service management solutions.
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
            KEY TAKEAWAYS — collapsible, typewriter bullets
        ============================================================ */}
        <Reveal as="section" className="mt-16">
          <TakeawaysAccordion open={takeawaysOpen} setOpen={setTakeawaysOpen} />

          <p
            className="font-heading mt-10 max-w-3xl text-[26px] leading-snug lg:text-[30px]"
            style={{ color: CHAMPION_BLUE }}
          >
            Starfii helps enterprises modernize service operations with ITSM consulting,
            implementation, service desk transformation, workflow automation,
            AI powered service management, and connected enterprise integrations.
          </p>
        </Reveal>

        {/* ============================================================
            Q&A BLOCK
        ============================================================ */}

        <Reveal as="section" className="mt-20">
          <div
            className="grid grid-cols-1 items-center gap-10 rounded-2xl p-10 lg:grid-cols-2"
            style={{ backgroundColor: "#F5F3FC" }}
          >
            <div>
              <h2
                className="font-heading text-[26px] font-medium leading-snug lg:text-[30px]"
                style={{ color: LAVENDER_ACCENT }}
              >
                How Do Enterprises Build an ITSM Strategy That Scales?
              </h2>
              <p className="font-body mt-5 text-[15px] leading-relaxed text-slate-600">
                Enterprises build a scalable ITSM strategy by aligning service management
                processes, platform capabilities, governance, integrations, and user
                experience with business priorities. Starfii brings consulting and
                implementation expertise together to design practical service operations
                that can evolve as the organization grows.
              </p>
            </div>

            <div className="group overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop"
                alt="Two colleagues reviewing an ITSM strategy roadmap"
                className="ss-zoom-img h-full w-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </Reveal>
      </div>

      {/* ============================================================
          FOCUS AREAS
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
            <h2 className={`${SECTION_HEADING} text-white`}>
              Our ITSM &amp; Enterprise Service Management Capabilities
            </h2>
            <p className="font-body mt-5 text-[15px] leading-relaxed text-white/60">
              Starfii covers the core service management lifecycle, from service desk
              transformation and incident management to change, requests,
              configuration, automation, and AI powered ITSM.
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
                    <h3 className="font-heading text-[19px] font-semibold leading-snug text-white">
                      {area.title}
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
        ============================================================ */}

        <Reveal as="section" className="mt-24 pb-28">
          <h2 className={`${SECTION_HEADING}`} style={{ color: CHAMPION_BLUE }}>
            ITSM & Enterprise Service Management Services
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
                    <span
                      className="pointer-events-none absolute inset-y-0 left-0 w-[2px]"
                      style={{ backgroundColor: "transparent" }}
                    />
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
                  {current.heading}
                </h3>
                <p className="font-body mt-4 text-[15px] leading-relaxed text-slate-600">
                  {current.body}
                </p>
              </div>

              <div className="group min-h-[280px] overflow-hidden">
                <img
                  src={current.image}
                  alt={current.label}
                  className="ss-zoom-img h-full w-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ============================================================
          IMPACT ACROSS THE ITSM ECOSYSTEM
          Same accordion treatment as Cloud Services.
      ============================================================ */}
      <section className="relative overflow-hidden bg-[#08070F] py-24">
        <div
          className="ss-drift-slow pointer-events-none absolute inset-y-0 right-0 w-[55%]"
          style={{
            background:
              "radial-gradient(60% 90% at 100% 100%, rgba(164,143,234,0.55) 0%, rgba(79,63,224,0.28) 35%, rgba(8,7,15,0) 70%)",
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
            <h2 className={`${SECTION_HEADING} max-w-2xl text-white`}>
              Impact Across Your ITSM
              <br />
              Service Management Ecosystem
            </h2>
          </Reveal>
          <ITSMEcosystemAccordion />
        </div>
      </section>
      {/* ============================================================
          INSIGHTS / BLOGS
          Blog images zoom in on hover inside a fixed frame, so only
          the picture grows, never the card.
      ============================================================ */}
      <section className="bg-[#EEF0F7] py-24">
        <div className={ALIGN}>
          <Reveal className="flex items-center justify-between">
            <div>
              <span
                className="font-body inline-flex items-center gap-2 text-[16px] font-semibold sm:text-[18px]"
                style={{ color: CHAMPION_BLUE }}
              >
                <span aria-hidden="true"></span>
                <span>ITSM &amp; Enterprise Service Management</span>
              </span>

              <h2 className={`${SECTION_HEADING} mt-4 max-w-2xl`} style={{ color: CHAMPION_BLUE }}>
                {"Latest Insights & Blogs"}
              </h2>
            </div>

            <Link
              href="/services/itsm-service-management/blogs"
              className="font-body hidden items-center gap-1.5 text-[15px] font-semibold transition-transform duration-200 hover:translate-x-1 sm:flex"
              style={{ color: INDIGO_CTA }}
            >
              View All Insights
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>

          <div className="mt-12">
            <PagedCarousel
              items={insights}
              itemsPerPage={{ mobile: 1, tablet: 2, desktop: 3 }}
              arrowVariant="light"
              renderItem={(post, i) => (
                <Reveal
                  key={post.slug}
                  delay={i * 90}
                  className="h-full"
                >
                  <Link
                    href={`/services/itsm-service-management/blogs/${post.slug}`}
                    className="group block h-full"
                    aria-label={`Read ${post.title}`}
                  >
                    {post.large ? (
                      <div className="relative h-[420px] overflow-hidden rounded-2xl">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="ss-zoom-img h-full w-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-110"
                        />

                        <div className="absolute inset-x-4 bottom-4 rounded-xl bg-white/85 p-6 backdrop-blur transition-all duration-300 group-hover:bg-white/95">
                          <span
                            className="font-body text-[12px] font-semibold tracking-wide"
                            style={{ color: INDIGO_CTA }}
                          >
                            BLOG
                          </span>

                          <h3
                            className="font-heading ss-clamp-2 mt-2 text-[18px] font-semibold leading-snug"
                            style={{ color: CHAMPION_BLUE }}
                          >
                            {post.title}
                          </h3>

                          <p className="font-body ss-clamp-2 mt-2 text-[13px] leading-relaxed text-slate-600">
                            {post.body}
                          </p>

                          <span
                            className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold"
                            style={{ color: INDIGO_CTA }}
                          >
                            <span className="relative">
                              Read More
                              <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-current transition-[width] duration-500 ease-out group-hover:w-full" />
                            </span>
                            <ArrowUpRight
                              size={14}
                              className="transition-transform duration-500 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="h-[220px] overflow-hidden rounded-2xl">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="ss-zoom-img h-full w-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-110"
                          />
                        </div>

                        <div className="pt-5">
                          <span
                            className="font-body text-[12px] font-semibold tracking-wide"
                            style={{ color: INDIGO_CTA }}
                          >
                            BLOG
                          </span>

                          <h3
                            className="font-heading ss-clamp-2 mt-2 text-[18px] font-semibold leading-snug"
                            style={{ color: CHAMPION_BLUE }}
                          >
                            {post.title}
                          </h3>

                          <p className="font-body ss-clamp-3 mt-3 text-[14px] leading-relaxed text-slate-600">
                            {post.body}
                          </p>

                          <span
                            className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold"
                            style={{ color: INDIGO_CTA }}
                          >
                            <span className="relative">
                              Read More
                              <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-current transition-[width] duration-500 ease-out group-hover:w-full" />
                            </span>
                            <ArrowUpRight
                              size={14}
                              className="transition-transform duration-500 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                          </span>
                        </div>
                      </div>
                    )}
                  </Link>
                </Reveal>
              )}
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          CASE STUDIES
          Card sizing and hover behaviour now match the Software &
          Product Engineering / Cloud / Legacy Modernization pages
          exactly: 500px fixed card height, 260px image frame that
          collapses to 0 on hover, description sliding into the space
          the image gives up, 4 per row on desktop with a 32px gap
          and a peek card on mobile (StepCarousel instead of the
          3-per-page PagedCarousel used before).
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
            <h2 className={`${SECTION_HEADING}`} style={{ color: CHAMPION_BLUE }}>
              ITSM & Enterprise Service Management Case Studies
            </h2>

            <Link
              href={CASE_STUDY_BASE}
              className="font-body hidden items-center gap-1.5 text-[15px] font-semibold transition-transform duration-200 hover:translate-x-1 sm:flex"
              style={{ color: INDIGO_CTA }}
            >
              View All ITSM & Enterprise Service Management Case Studies
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>

          <div className="mt-12">
            <StepCarousel
              items={caseStudies}
              itemsPerPage={{
                mobile: 1.15,
                tablet: 2,
                desktop: 4,
              }}
              gap={32}
              arrowVariant="light"
              renderItem={(study, i) => (
                <Reveal delay={(i % 3) * 90} className="h-full">
                  <Link
                    href={`${CASE_STUDY_BASE}/${study.slug}`}
                    aria-label={`Read case study: ${study.title}`}
                    className="group flex h-[500px] flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_2px_rgba(15,23,42,0.06)] transition-shadow duration-500 ease-out hover:shadow-[0_18px_40px_rgba(15,23,42,0.14)]"
                    style={{ border: "1px solid #E5E1F5" }}
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
                          style={{ color: INDIGO_CTA }}
                        >
                          CASE STUDY
                        </span>

                        <h3
                          className="font-heading ss-clamp-2 shrink-0 text-[20px] font-semibold leading-snug transition-colors duration-200 group-hover:text-[#4F3FE0]"
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
                        style={{ color: INDIGO_CTA }}
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
                </Reveal>
              )}
            />
          </div>

          {/* MOBILE VIEW ALL */}
          <div className="mt-8 flex justify-center sm:hidden">
            <Link
              href={CASE_STUDY_BASE}
              className="font-body inline-flex items-center gap-1.5 text-[15px] font-semibold"
              style={{ color: INDIGO_CTA }}
            >
              View All ITSM & Enterprise Service Management Case Studies
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          CLOSING CTA
      ============================================================ */}
      <section id="connect" className="bg-white py-24">
        <div className={ALIGN}>
          <Reveal
            className="overflow-hidden rounded-[28px] px-8 py-16 text-center sm:px-16"
            style={{ backgroundColor: CHAMPION_BLUE }}
          >
            <h2 className={`${SECTION_HEADING} mx-auto max-w-2xl text-white`}>
              Ready to Build an ITSM Strategy That Scales?
            </h2>
            <p className="font-body mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/70">
              Talk to Starfii about ITSM consulting, implementation, service desk
              transformation, workflow automation, AI powered ITSM, integrations,
              or platform expertise for scalable service operations.
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
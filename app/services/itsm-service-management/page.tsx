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
   SEO / AEO optimized: entity first statements ("Starfii is...",
   "Starfii offers..."), keyword rich but natural, no hyphens.

   Headings/subheadings are aligned to the recommended section list:
   105. ITSM overview                     -> Hero + Key Takeaways
   106. ITSM consulting                  -> Strategy Q&A section
   107. ITSM implementation               -> Focus area card
   108. Service desk transformation       -> Focus area card
   109. Incident management               -> Focus area card
   110. Problem management                -> Focus area card
   111. Change management                 -> Focus area card
   112. Request management                -> Focus area card
   113. Service catalog                   -> Focus area card
   114. Asset and configuration management-> Focus area card
   115. Workflow automation              -> Focus area card
   116. AI powered ITSM                  -> Service tab
   117. ITSM integrations                -> Service tab
   118. Platform expertise               -> Service tab
   119. Case studies                     -> Case Studies section
   120. CTA                              -> Closing CTA section
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
   ITSM & Enterprise Service Management case studies

   IMPORTANT:
   These slugs match the canonical case-study records in
   casestudies/data/case-studies.ts so the cards on this page
   open the correct [slug] detail pages.
=============================================================== */

type CaseStudyCard = {
  slug: string;
  image: string;
  title: string;
  body: string;
};

// Always derive the cards from the canonical ITSM case-study data.
// This keeps the listing page and [slug] detail pages in sync.
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

// Always derive insight cards from the canonical ITSM blog data
// (blogs/blogData.ts). This is the same source of truth used by
// generateStaticParams() in blogs/[slug]/page.tsx, so any slug
// pulled from here is guaranteed to resolve to a real blog page
// instead of 404ing.
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
   REUSABLE: PagedCarousel
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
   SECTION
================================================================ */

export default function ITSMSection(): ReactElement {
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
  }, [tabHovered]);

  return (
    <main className="bg-white">
      <AnimationStyles />

      {/* ============================================================
          BREADCRUMB + HERO
          (105. ITSM overview)
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
            className="font-heading mt-8 max-w-xl text-[44px] font-medium leading-[1.15] opacity-0 lg:text-[54px]"
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
            KEY TAKEAWAYS
            (105. ITSM overview)
        ============================================================ */}
        <Reveal as="section" className="mt-16">
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
                ITSM & Enterprise Service Management Overview
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
                    className="ss-tab-panel font-body pt-3 text-[15px] leading-relaxed text-slate-700"
                    style={{ animationDelay: `${i * 60}ms` }}
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
            Starfii helps enterprises modernize service operations with ITSM consulting,
            implementation, service desk transformation, workflow automation,
            AI powered service management, and connected enterprise integrations.
          </p>
        </Reveal>


        {/* ============================================================
            Q&A BLOCK
            (106. ITSM consulting)
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

            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop"
                alt="Two colleagues reviewing an ITSM strategy roadmap"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </Reveal>
      </div>

      {/* ============================================================
          FOCUS AREAS
          (107-115. Implementation through Workflow automation)
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
            <h2 className="font-heading text-[36px] font-medium leading-[1.15] text-white lg:text-[44px]">
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
                    <h3 className="font-heading text-[22px] font-semibold leading-snug text-white">
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
            TABBED DEEP-DIVE  auto-advancing tab list
            (116-121. AI powered ITSM through Service Desk Transformation)
        ============================================================ */}

        <Reveal as="section" className="mt-24 pb-28">
          <h2
            className="font-heading text-[34px] font-medium"
            style={{ color: CHAMPION_BLUE }}
          >
            ITSM & Enterprise Service Management Services
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[320px_1fr]">
            {/* Left nav  autoplaying */}
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
                    {/* Animated progress fill  only rendered on the active tab,
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
                  {current.heading}
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
          IMPACT ACROSS THE ITSM ECOSYSTEM
          ITSM equivalent of the ITSM & Enterprise Service Management
          "Impact Across Your Ecosystem" section.
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
            <Eyebrow variant="dark">
              ITSM &amp; Enterprise Service Management
            </Eyebrow>

            <h2 className="font-heading mt-4 max-w-2xl text-[36px] font-medium leading-[1.2] text-white lg:text-[44px]">
              Impact Across Your ITSM
              <br />
              Service Management Ecosystem
            </h2>

            <p className="font-body mt-5 max-w-2xl text-[15px] leading-relaxed text-white/60">
              Starfii connects service desk transformation, core ITSM
              practices, automation, AI, integrations, and service visibility
              to create a more connected and scalable service operation.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {itsmImpact.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <a
                  href="#connect"
                  className="group flex min-h-[104px] items-center justify-between gap-6 rounded-2xl bg-white px-8 py-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div>
                    <span
                      className="font-body text-[19px] font-medium"
                      style={{ color: CHAMPION_BLUE }}
                    >
                       {item.title}
                    </span>
                    <p className="font-body mt-2 max-w-xl text-[13px] leading-relaxed text-slate-500">
                      {item.body}
                    </p>
                  </div>

                  <span
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:rotate-45"
                    style={{ backgroundColor: INDIGO_CTA }}
                  >
                    <ArrowUpRight size={18} />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          INSIGHTS / BLOGS
          Derived from blogs/blogData.ts so every card links to a
          real, statically generated blog page (see fix note above).
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

              <h2
                className="font-heading mt-4 max-w-2xl text-[36px] font-medium leading-[1.15] lg:text-[44px]"
                style={{ color: CHAMPION_BLUE }}
              >
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
                            style={{ color: INDIGO_CTA }}
                          >
                            BLOG
                          </span>

                          <h3
                            className="font-heading ss-clamp-2 mt-2 text-[19px] font-semibold leading-snug"
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
                            Read More
                            <ArrowUpRight size={14} />
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
                            style={{ color: INDIGO_CTA }}
                          >
                            BLOG
                          </span>

                          <h3
                            className="font-heading ss-clamp-2 mt-2 text-[19px] font-semibold leading-snug"
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
                            Read More
                            <ArrowUpRight size={14} />
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
          (119. Case studies)
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
      <h2
        className="font-heading text-[36px] font-medium lg:text-[44px]"
        style={{ color: CHAMPION_BLUE }}
      >
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
      <PagedCarousel
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
            <article
              className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl"
              style={{
                border: "1px solid #E5E1F5",
              }}
            >
              {/* IMAGE */}
              <Link
                href={`${CASE_STUDY_BASE}/${study.slug}`}
                aria-label={`Read ${study.title}`}
                className="block h-[220px] flex-shrink-0 overflow-hidden"
              >
                <img
                  src={study.image}
                  alt={study.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </Link>

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

                <Link
                   href={`${CASE_STUDY_BASE}/${study.slug}`}
                  className="block"
                >
                  <h3
                    className="font-heading ss-clamp-2 mt-2 text-[19px] font-semibold leading-snug transition-colors duration-200 group-hover:text-[#4F3FE0]"
                    style={{
                      color: CHAMPION_BLUE,
                    }}
                  >
                    {study.title}
                  </h3>
                </Link>

                <p className="font-body ss-clamp-3 mt-3 text-[14px] leading-relaxed text-slate-600">
                  {study.body}
                </p>

                {/* LEARN MORE */}
                <div className="mt-auto pt-6">
                  <Link
                     href={`${CASE_STUDY_BASE}/${study.slug}`}
                    aria-label={`Learn more about ${study.title}`}
                    className="font-body inline-flex w-fit items-center gap-1.5 text-[14px] font-semibold transition-all duration-200 hover:translate-x-1"
                    style={{
                      color: INDIGO_CTA,
                    }}
                  >
                    Learn More
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            </article>
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
          (120. CTA)
      ============================================================ */}
      <section id="connect" className="bg-white py-24">
        <div className={ALIGN}>
          <Reveal
            className="overflow-hidden rounded-[28px] px-8 py-16 text-center sm:px-16"
            style={{ backgroundColor: CHAMPION_BLUE }}
          >
            <h2 className="font-heading mx-auto max-w-2xl text-[32px] font-medium leading-[1.2] text-white lg:text-[40px]">
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
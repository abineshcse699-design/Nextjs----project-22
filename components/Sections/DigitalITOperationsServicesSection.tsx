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
import { caseStudies as sharedCaseStudies } from "@/app/services/digital-it-operations/casestudies/data.tsx/casestudies";

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

// Autoplay timing for the "Digital IT Operations Services" tab list
const TAB_AUTOPLAY_MS = 4000;

// Base path for this section's case study detail pages, kept in one
// place so the card links and the "View All" link never drift apart.
const CASE_STUDY_BASE_PATH = "/services/digital-it-operations/casestudies";

/* ===============================================================
   CONTENT
   SEO / AEO optimized: entity first statements ("Starfii is...",
   "Starfii offers..."), keyword rich but natural, no hyphens.
   Grounded in Starfii's real service lines — Cloud Engineering
   (AWS/Azure/GCP), DevOps & Quality Engineering, Cybersecurity,
   Data Engineering & BI, and Legacy Modernization — rather than
   inventing a separate managed IT operations product.
================================================================ */

const keyTakeaways = [
  {
    title: "Monitor",
    body: "Keep cloud infrastructure, applications, and critical systems visible with proactive monitoring that helps teams identify operational issues early.",
  },
  {
    title: "Optimize",
    body: "Improve performance, automate repetitive workflows, and optimize cloud environments across AWS, Azure, and GCP as your business scales.",
  },
  {
    title: "Support",
    body: "Maintain reliable day to day operations with responsive support, ongoing maintenance, and SLA backed coverage beyond go live.",
  },
];

type FocusArea = { title: string; body: string; tags: string[] };

const focusAreas: FocusArea[] = [
  {
    title: "Cloud Infrastructure & Operations",
    body: "We design, monitor, and manage cloud infrastructure across AWS, Azure, and GCP, from architecture and migration through day to day operations and cost optimization.",
    tags: ["AWS", "AZURE", "GCP"],
  },
  {
    title: "DevOps & Continuous Operations",
    body: "We run DevOps and test automation across the delivery pipeline, so releases ship faster and production stays stable as deployment frequency increases.",
    tags: ["DEVOPS", "CI/CD", "AUTOMATION"],
  },
  {
    title: "Cybersecurity & Security Operations",
    body: "We build a resilient security framework around your IT infrastructure, helping protect systems and data against evolving cyber threats and compliance risk.",
    tags: ["SECURITY", "RISK", "COMPLIANCE"],
  },
  {
    title: "Data Engineering, BI & Operational Analytics",
    body: "Our certified data engineers build the data infrastructure, and our data scientists turn operational data into the insights that inform better decisions.",
    tags: ["DATA", "BI", "ANALYTICS"],
  },
  {
    title: "Legacy System Modernization",
    body: "We assess legacy systems, build a modernization roadmap, and migrate to future ready platforms without disrupting the operations that depend on them.",
    tags: ["MIGRATION", "MODERNIZATION", "CONTINUITY"],
  },
  {
    title: "Enterprise Product Support & Maintenance",
    body: "Beyond launch, we provide ongoing product support and maintenance for enterprise and SaaS platforms, backed by a free warranty period and SLA support.",
    tags: ["SUPPORT", "SLA", "MAINTENANCE"],
  },
  {
    title: "AI/ML Powered Operations Automation",
    body: "We apply Generative AI and LLM driven automation to reduce manual operational tasks and improve efficiency across repetitive IT workflows.",
    tags: ["AI/ML", "LLM", "AUTOMATION"],
  },
  {
    title: "Flexible Engagement & Team Models",
    body: "Choose the model that fits, time and material or fixed price, and scale from a full delivery team to specific specialists at any project stage.",
    tags: ["STAFFING", "T&M", "FIXED PRICE"],
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
    label: "Cloud: Stabilize Multi-Cloud Environments",
    heading: "One consistent operations model across AWS, Azure, and GCP",
    body: "We manage cloud infrastructure end to end, architecture, migration, monitoring, and cost control, so your operations stay consistent whether workloads run on one cloud or several.",
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
    body: "Our data engineers build the pipelines and our data scientists surface the patterns, turning day to day operational data into insights leadership can act on.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Modernization: Migrate Without Disruption",
    heading: "Moving off legacy systems without breaking what already works",
    body: "We assess your legacy stack, map a modernization roadmap, and migrate to a future ready platform in stages, so operations continue running throughout the transition.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
  },
];

type EcosystemImpact = { title: string };

const ecosystemImpact: EcosystemImpact[] = [
  { title: "Cloud Cost and Performance Optimization" },
  { title: "Zero Downtime Release Operations" },
  { title: "Proactive Security Monitoring" },
  { title: "Data Driven Operational Decisions" },
  { title: "Legacy System Continuity" },
  { title: "SLA Backed Support Coverage" },
];

type IndustryAward = {
  year: string;
  category: string;
  subcategory: string;
  rank: string;
  description: string;
};

const industryAwards: IndustryAward[] = [
  {
    year: "2026 Quadrant",
    category: "Managed Cloud & Infrastructure Services",
    subcategory: "Cloud Operations & Migration",
    rank: "Leader, U.S.",
    description:
      "Starfii named a Leader in Cloud Operations & Migration in the ISG Provider Lens® Managed Cloud & Infrastructure Services 2026 U.S. Quadrant Report, recognizing our multi cloud operations model.",
  },
  {
    year: "2025 Quadrant",
    category: "Cybersecurity Services",
    subcategory: "Security Operations & Risk Management",
    rank: "Leader, U.S.",
    description:
      "Starfii named a Leader in Security Operations & Risk Management in the ISG Provider Lens™ Cybersecurity Services 2025 US Quadrant Report, reflecting our security operations capability.",
  },
  {
    year: "2025 Quadrant",
    category: "IT Operations & DevOps Services",
    subcategory: "Release Automation & Reliability",
    rank: "Leader, U.S.",
    description:
      "Starfii recognized as a Leader in Release Automation & Reliability in the ISG Provider Lens™ IT Operations & DevOps Services 2025 US Quadrant Report, validating our DevOps delivery model.",
  },
];

type InsightPost = {
  large: boolean;
  image: string;
  title: string;
  body: string;
};

const insights: InsightPost[] = [
  {
    large: true,
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1200&auto=format&fit=crop",
    title:
      "Cloud Cost Optimization: Cutting Multi-Cloud Spend Without Losing Performance",
    body: "Explore how Starfii audits, right sizes, and automates cloud spend across AWS, Azure, and GCP, so operations costs come down without touching reliability.",
  },
  {
    large: false,
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
    title: "DevOps Automation: How CI/CD Pipelines Cut Release Time by 60%",
    body: "Stop trading speed for stability. See how Starfii's CI/CD automation and test automation shorten release cycles while keeping production reliable.",
  },
  {
    large: false,
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    title: "Cybersecurity Operations: Building a Framework That Scales With You",
    body: "Stop reacting to threats after the fact. See how Starfii builds continuous security monitoring into everyday IT operations from day one.",
  },
  {
    large: false,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    title: "Cloud Infrastructure Operations: Keeping Enterprise Systems Reliable",
    body: "Explore how modern cloud operations across AWS, Azure, and GCP help enterprise teams improve reliability, visibility, and cost efficiency as workloads scale.",
  },
  {
    large: false,
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    title: "IT Operations Automation: Reducing Manual Work at Scale",
    body: "See how automation across monitoring, DevOps, and repetitive IT workflows helps teams respond faster while keeping day to day operations stable.",
  },
];

// AEO / GEO section — short, self-contained Q&A pairs, grounded in
// Starfii's actual service offerings and public facts so AI answer
// engines (Google AI Overviews, ChatGPT, Perplexity, Gemini) can cite
// this page accurately.
type FaqItem = { q: string; a: string };

const faqs: FaqItem[] = [
  {
    q: "What does Starfii's digital IT operations support include?",
    a: "Starfii's IT operations support spans cloud infrastructure management (AWS, Azure, GCP), DevOps and release automation, cybersecurity, data engineering and BI, and ongoing product maintenance, backed by SLA support.",
  },
  {
    q: "Does Starfii support multi-cloud environments?",
    a: "Yes. Starfii designs, migrates, and operates infrastructure across AWS, Azure, and GCP, giving clients one consistent operations model regardless of which cloud platform they run on.",
  },
  {
    q: "What happens after a Starfii project goes live?",
    a: "Every Starfii engagement includes a free warranty period and SLA backed support after launch, so systems continue to be monitored, maintained, and supported, not just handed off at go live.",
  },
  {
    q: "Can Starfii modernize legacy systems without disrupting operations?",
    a: "Yes. Starfii assesses existing legacy systems, builds a phased modernization roadmap, and migrates workloads to a scalable, future ready platform while keeping day to day operations running.",
  },
  {
    q: "What engagement models does Starfii offer for ongoing IT operations?",
    a: "Clients can choose time and material or fixed price engagement models, and can hire a full delivery team or specific specialists at any stage of the project or operations lifecycle.",
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
   Used by Industry Recognition and Case Studies only.
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

  const maxPosition = Math.max(0, items.length - perPage);
  const totalPositions = Math.max(1, maxPosition + 1);
  const isDark = arrowVariant === "dark";

  const getStep = () => {
    const el = trackRef.current;
    if (!el) return 0;

    const firstCard = el.firstElementChild as HTMLElement | null;
    if (!firstCard) return 0;

    return firstCard.getBoundingClientRect().width + 24;
  };

  const goTo = (nextPosition: number) => {
    const el = trackRef.current;
    if (!el) return;

    const next = Math.min(Math.max(nextPosition, 0), maxPosition);
    const step = getStep();

    el.scrollTo({
      left: next * step,
      behavior: "smooth",
    });

    setPosition(next);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    el.scrollTo({
      left: 0,
      behavior: "auto",
    });

    setPosition(0);
  }, [perPage]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const handleScroll = () => {
      const step = getStep();
      if (!step) return;

      const current = Math.round(el.scrollLeft / step);
      setPosition(Math.min(Math.max(current, 0), maxPosition));
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [maxPosition, perPage]);

  const progress = (position + 1) / totalPositions * 100;

  return (
    <div>
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="min-w-0 flex-shrink-0"
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
  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const [page, setPage] = useState(0);

  useEffect(() => {
    setPage((p) => Math.min(p, totalPages - 1));
  }, [totalPages]);

  const pages: T[][] = [];
  for (let i = 0; i < totalPages; i += 1) {
    pages.push(items.slice(i * perPage, i * perPage + perPage));
  }

  const isDark = arrowVariant === "dark";
  const goTo = (next: number) =>
    setPage(Math.min(Math.max(next, 0), totalPages - 1));

  return (
    <div>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {pages.map((pageItems, pi) => (
            <div key={pi} className="flex w-full flex-shrink-0 gap-6">
              {pageItems.map((item, ii) => (
                <div key={ii} className="min-w-0 flex-1">
                  {renderItem(item, pi * perPage + ii)}
                </div>
              ))}
              {pageItems.length < perPage &&
                Array.from({ length: perPage - pageItems.length }).map(
                  (_, gi) => (
                    <div key={`pad-${gi}`} aria-hidden className="flex-1" />
                  )
                )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center gap-6">
        <div
          className="h-[3px] flex-1 overflow-hidden rounded-full"
          style={{ backgroundColor: isDark ? "rgba(255,255,255,0.18)" : "#E5E1F5" }}
        >
          <div
            className="h-full rounded-full transition-[width] duration-300 ease-out"
            style={{
              width: `${((page + 1) / totalPages) * 100}%`,
              backgroundColor: INDIGO_CTA,
            }}
          />
        </div>

        <span
          className="font-body flex-shrink-0 text-[13px] font-medium tabular-nums"
          style={{ color: isDark ? "rgba(255,255,255,0.55)" : "#94A3B8" }}
        >
          {String(page + 1).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}
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
            disabled={page === totalPages - 1}
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

export default function DigitalITOperationsServicesSection(): ReactElement {
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
      <AnimationStyles />

      {/* ============================================================
          BREADCRUMB + HERO
      ============================================================ */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1800&auto=format&fit=crop"
            alt="Enterprise IT operations team monitoring cloud infrastructure"
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
            <span className="text-slate-500">Digital IT Operations</span>
          </nav>

          <h1
            className="font-heading mt-8 max-w-xl text-[44px] font-medium leading-[1.15] opacity-0 lg:text-[54px]"
            style={{ color: CHAMPION_BLUE, animation: "ss-fade-up 0.7s ease-out 0.15s forwards" }}
          >
            Digital IT Operations Services for Growing Enterprises
          </h1>

          <p
            className="font-body mt-6 max-w-lg text-[17px] leading-relaxed text-slate-600 opacity-0"
            style={{ animation: "ss-fade-up 0.7s ease-out 0.28s forwards" }}
          >
            Cloud infrastructure, DevOps, cybersecurity, and data
            operations under one dependable delivery model, backed by
            SLA support and a free warranty period on every engagement.
          </p>

          <a
            href="/services#serviceconact"
            className="font-body mt-9 inline-flex items-center gap-2 rounded-full px-7 py-4 text-[15px] font-semibold text-white opacity-0 transition-transform duration-300 hover:scale-[1.03]"
            style={{
              backgroundColor: CHAMPION_BLUE,
              animation: "ss-fade-up 0.7s ease-out 0.4s forwards",
            }}
          >
            Request Your POC Now
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      <div className={ALIGN}>
        {/* ============================================================
            DIGITAL IT OPERATIONS AT A GLANCE
            Reference-style three-column intelligence card
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
                  Digital IT Operations at a Glance
                </span>
              </div>

              <span
                className="font-body hidden rounded-full px-5 py-2.5 text-[13px] font-semibold sm:inline-flex"
                style={{
                  backgroundColor: "#F1EEFC",
                  color: INDIGO_CTA,
                }}
              >
                Always On Operations
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
            A dependable digital IT operations partner, Starfii keeps
            enterprise systems stable and support responsive by pairing
            cloud engineering, DevOps, and cybersecurity under one
            delivery model.
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
                How Do Growing Enterprises Keep IT Operations Stable?
              </h2>
              <p className="font-body mt-5 text-[15px] leading-relaxed text-slate-600">
                Enterprises keep IT operations stable by combining well
                managed cloud infrastructure, disciplined DevOps
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
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </Reveal>
      </div>

      {/* ============================================================
          FOCUS AREAS (dark)
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
              Our IT Operations &amp; Support Capabilities
            </h2>
            <p className="font-body mt-5 text-[15px] leading-relaxed text-white/60">
              Starfii monitors, manages, and modernizes IT operations
              across cloud, data, and security, so enterprise systems
              stay stable and support stays fast as the business scales.
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
                    <a
                      href="/services"
                      aria-label={`Learn more about ${area.title}`}
                      className="ss-focus-arrow flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border"
                      style={{ borderColor: "rgba(255,255,255,0.18)" }}
                    >
                      <ArrowUpRight size={16} className="text-white" />
                    </a>
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
            TABBED DEEP-DIVE — auto-advancing tab list
        ============================================================ */}
        <Reveal as="section" className="mt-24 pb-28">
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

            {/* Right panel */}
            <div
              key={activeTab}
              className="ss-tab-panel grid grid-cols-1 overflow-hidden rounded-2xl md:h-[420px] md:grid-cols-2"
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
          IMPACT ACROSS OPERATIONS (dark)
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
            <h2 className="font-heading max-w-2xl text-[36px] font-medium leading-[1.2] text-white lg:text-[44px]">
              Impact Across Your IT
              <br />
              Operations
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {ecosystemImpact.map((impactItem, i) => (
              <Reveal key={impactItem.title} delay={i * 90}>
                <a
                  href="/services"
                  className="group flex items-center justify-between rounded-2xl bg-white px-8 py-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <span
                    className="font-body text-[19px] font-medium"
                    style={{ color: CHAMPION_BLUE }}
                  >
                    {impactItem.title}
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
          INDUSTRY RECOGNITION (dark)
      ============================================================ */}
      <section className="relative overflow-hidden bg-[#0A0912] py-24">
        <div
          className="ss-drift-slow pointer-events-none absolute inset-y-0 right-0 w-[45%]"
          style={{
            background:
              "radial-gradient(55% 90% at 100% 100%, rgba(232,110,90,0.5) 0%, rgba(164,143,234,0.3) 40%, rgba(10,9,18,0) 70%)",
          }}
        />

        <div className={`relative ${ALIGN}`}>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[340px_1fr]">
            <Reveal>
              <h2 className="font-heading text-[36px] font-medium leading-[1.15] text-white lg:text-[44px]">
                Industry
                <br />
                Recognition
              </h2>
            </Reveal>

            <PagedCarousel
              items={industryAwards}
              itemsPerPage={{ mobile: 1, tablet: 1, desktop: 2 }}
              arrowVariant="dark"
              renderItem={(award, i) => (
                <Reveal delay={(i % 2) * 100} className="h-full">
                  <div className="ss-award-card flex h-full flex-col overflow-hidden rounded-2xl bg-white">
                    <div
                      className="font-body flex items-center justify-between px-6 pt-5 text-[13px] font-semibold"
                      style={{ color: CHAMPION_BLUE }}
                    >
                      <span>ISG Provider Lens™</span>
                      <span className="font-normal text-slate-400">
                        {award.year}
                      </span>
                    </div>

                    <div
                      className="mx-6 mt-3 rounded-xl px-5 py-5 text-white"
                      style={{ backgroundColor: CHAMPION_BLUE }}
                    >
                      <p className="font-heading ss-clamp-2 text-[19px] font-semibold leading-snug">
                        {award.category}
                      </p>
                      <p
                        className="font-body mt-1 text-[13px]"
                        style={{ color: LAVENDER_ACCENT }}
                      >
                        {award.subcategory}
                      </p>
                      <div className="font-body mt-6 flex items-center justify-between">
                        <span className="text-[14px]">{award.rank}</span>
                        <Trophy size={20} className="ss-trophy opacity-80" />
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <p className="font-body ss-clamp-3 text-[15px] leading-relaxed text-slate-700">
                        {award.description}
                      </p>
                      <button
                        type="button"
                        className="font-body mt-6 self-start rounded-full border px-6 py-3 text-[14px] font-semibold transition-colors duration-200 hover:bg-[#4F3FE0] hover:text-white"
                        style={{ borderColor: INDIGO_CTA, color: INDIGO_CTA }}
                      >
                        Know more
                      </button>
                    </div>
                  </div>
                </Reveal>
              )}
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          CASE STUDIES
          (now pulling from the shared casestudies data source so
          "Learn More" links navigate to real case study detail pages
          instead of a placeholder route)
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
              Case Studies
            </h2>
            <Link
              href={CASE_STUDY_BASE_PATH}
              className="font-body hidden items-center gap-1.5 text-[15px] font-semibold transition-transform duration-200 hover:translate-x-1 sm:flex"
              style={{ color: INDIGO_CTA }}
            >
              View All Case Studies
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>

          <div className="mt-12">
            <StepCarousel
              items={sharedCaseStudies}
              itemsPerPage={{ mobile: 1, tablet: 2, desktop: 3 }}
              arrowVariant="light"
              renderItem={(study, i) => (
                <Reveal delay={(i % 3) * 90} className="h-full">
                  <Link
                    href={`${CASE_STUDY_BASE_PATH}/${study.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-2xl"
                  >
                    <div className="h-[220px] flex-shrink-0 overflow-hidden">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <span
                        className="font-body text-[12px] font-semibold tracking-wide"
                        style={{ color: INDIGO_CTA }}
                      >
                        {study.industry.toUpperCase()}
                      </span>
                      <h3
                        className="font-heading ss-clamp-2 mt-2 text-[19px] font-semibold leading-snug"
                        style={{ color: CHAMPION_BLUE }}
                      >
                        {study.title}
                      </h3>
                      <p className="font-body ss-clamp-3 mt-3 text-[14px] leading-relaxed text-slate-600">
                        {study.body}
                      </p>
                      <span
                        className="font-body mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold transition-transform duration-200 group-hover:translate-x-0.5"
                        style={{ color: INDIGO_CTA }}
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
            <h2
              className="font-heading max-w-lg text-[36px] font-medium leading-[1.15] lg:text-[44px]"
              style={{ color: CHAMPION_BLUE }}
            >
              {"What's New in IT Operations"}
            </h2>
            <a
              href="#"
              className="font-body hidden items-center gap-1.5 text-[15px] font-semibold transition-transform duration-200 hover:translate-x-1 sm:flex"
              style={{ color: INDIGO_CTA }}
            >
              View All Insights
              <ArrowUpRight size={16} />
            </a>
          </Reveal>

          <div className="mt-12">
            <Carousel
              itemCount={insights.length}
              arrowVariant="light"
              clickToAdvance
            >
              {insights.map((post, i) => (
                <Reveal
                  key={post.title}
                  delay={i * 90}
                  data-carousel-card
                  className={`flex-shrink-0 snap-start cursor-pointer ${
                    post.large ? "w-[420px]" : "w-[340px]"
                  }`}
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
                      </div>
                    </div>
                  )}
                </Reveal>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* ============================================================
          FAQ — built for AEO/GEO: short, self-contained Q&A pairs
          grounded in real Starfii facts (services, warranty/SLA,
          engagement models). This is the LAST section on the page.
          Pair with FAQPage JSON-LD in your page/layout file (see
          note at bottom of this file).
      ============================================================ */}
      <div className={ALIGN}>
        <Reveal as="section" className="py-24">
          <h2
            className="font-heading text-[34px] font-medium"
            style={{ color: CHAMPION_BLUE }}
          >
            Frequently Asked Questions
          </h2>
          <p className="font-body mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600">
            Common questions about Starfii&apos;s digital IT operations
            support, cloud engineering, and DevOps services.
          </p>

          <div className="mt-8 divide-y" style={{ borderColor: "#E5E1F5" }}>
            {faqs.map((faqItem, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={faqItem.q}
                  style={{ borderColor: "#E5E1F5" }}
                  className="border-t first:border-t-0"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span
                      className="font-body text-[17px] font-medium"
                      style={{ color: CHAMPION_BLUE }}
                    >
                      {faqItem.q}
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
                      {faqItem.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>
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
     cloud infrastructure, DevOps, cybersecurity, and data engineering,
     with SLA support and a free warranty period on every project."
  3. Add JSON-LD structured data in your page/layout:
     - Service schema (provider: Starfii Technology Pvt. Ltd.).
     - FAQPage schema mirroring the `faqs` array above.
  4. Internal links added in page to /services and /casestudies,
     matching real nav structure, so both crawlers and AI answer
     engines understand the page correctly.
  5. Content here intentionally avoids claiming services Starfii
     doesn't list publicly (e.g. a dedicated AIOps product, formal
     ITSM/ServiceNow practice, or 24/7 service desk as a named SKU) —
     if any of these are real but just not on the site yet, let me
     know and I'll fold the exact terminology in.
*/
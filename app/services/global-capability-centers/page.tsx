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
   Kept identical to the Digital & Software Services page so this
   page reads as the same product line, not a one-off template.
================================================================ */

const CHAMPION_BLUE = "#1B2560";
const LAVENDER_ACCENT = "#A48FEA";
const INDIGO_CTA = "#4F3FE0"; // circular "+" / arrow buttons on dark sections

// Shared page width wrapper, kept in sync with the navbar's own
// max width/padding so every section lines up with it exactly.
const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

// Autoplay timing for the "GCC Setup Journey" tab list
const TAB_AUTOPLAY_MS = 4000;

/* ===============================================================
   CONTENT
   SEO / AEO optimized: entity first statements ("Starfii is...",
   "Starfii offers..."), keyword rich but natural, no hyphens.
   Primary keyword targets: global capability center setup, GCC
   setup services, offshore development center, captive center
   setup India, GCC talent strategy, GCC governance model.
================================================================ */

const keyTakeaways = [
  {
    title: "Set Up",
    body: "Move from location feasibility to an operational GCC with entity formation, facilities, infrastructure, and statutory compliance handled as one connected setup.",
  },
  {
    title: "Build",
    body: "Create the right GCC team through role architecture, talent acquisition, payroll, HR localization, and structured onboarding aligned to the center's mandate.",
  },
  {
    title: "Scale",
    body: "Grow from the first cohort to steady state delivery with clear governance, phased headcount, knowledge transfer, compliance controls, and measurable operating outcomes.",
  },
];

type StatOutcome = { stat: string; label: string };

const statOutcomes: StatOutcome[] = [
  { stat: "4 to 6 mo", label: "Typical timeline from entity setup to first hires onboarded" },
  { stat: "30 to 45%", label: "Average operating cost reduction versus onshore delivery" },
  { stat: "100%", label: "Compliance coverage across local labor and data regulations" },
];

type FocusArea = { title: string; body: string; tags: string[] };

const focusAreas: FocusArea[] = [
  {
    title: "Global Capability Center Setup",
    body: "Starfii is a Global Capability Center setup partner that combines legal entity formation, facility selection, and infrastructure build out, sequenced so your center is operational in months, not years.",
    tags: ["ENTITY", "INFRASTRUCTURE", "SETUP"],
  },
  {
    title: "GCC Talent Strategy",
    body: "Starfii's GCC talent strategy matches role architecture and hiring plans to the skill mix your center actually needs, whether that is engineering, analytics, support, or finance.",
    tags: ["TALENT", "HIRING", "ROLES"],
  },
  {
    title: "GCC Governance Design",
    body: "As a GCC governance design partner, Starfii defines clear reporting structures and decision rights between HQ and the center, avoiding the ambiguity that stalls delivery in a GCC's first year.",
    tags: ["GOVERNANCE", "REPORTING", "HQ ALIGNMENT"],
  },
  {
    title: "Scale-Up Support",
    body: "Starfii plans phased headcount and capability ramp up for your GCC, moving the center from an initial cost focused footprint to strategic, steady state delivery over time.",
    tags: ["SCALE", "HEADCOUNT", "ROADMAP"],
  },
  {
    title: "Compliance & Risk Management",
    body: "Starfii builds labor law, data residency, and information security compliance into your GCC's operating model from setup, backed by continuous risk monitoring as the center scales.",
    tags: ["COMPLIANCE", "LABOR LAW", "DATA RESIDENCY"],
  },
  {
    title: "Managed GCC Transition",
    body: "For enterprises transferring existing work into a captive center, Starfii's managed GCC transition runs a structured knowledge transfer plan with defined exit criteria and no drop in service.",
    tags: ["TRANSITION", "KNOWLEDGE TRANSFER", "EXIT CRITERIA"],
  },
  {
    title: "Facilities & Infrastructure",
    body: "Starfii selects and stands up GCC facilities and IT infrastructure, from office footprint to secure network design, so the center is ready for its first cohort of hires from week one.",
    tags: ["FACILITIES", "IT", "SECURITY"],
  },
  {
    title: "Payroll & HR Operations",
    body: "Starfii localizes payroll, benefits administration, and HR policy for your GCC, so the center runs on compliant, market appropriate employment practices from the outset.",
    tags: ["PAYROLL", "BENEFITS", "HR"],
  },
  {
    title: "Knowledge Transfer & Onboarding",
    body: "Starfii structures the onboarding of your GCC team into existing product and process context, so the center contributes to live workstreams faster and with less rework.",
    tags: ["ONBOARDING", "PROCESS", "CONTEXT"],
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
    label: "Assess Feasibility First",
    heading: "Location and cost modeling before you commit to a market",
    body: "Starfii runs feasibility analysis, cost modeling, and talent availability assessment across candidate GCC locations, so your location decision rests on data rather than a generic offshore playbook.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Stand Up the Entity",
    heading: "Entity, legal, and compliance work moving in parallel with hiring",
    body: "Starfii incorporates the legal entity, completes statutory registrations, and builds the compliance framework alongside the hiring plan, so entity setup never becomes the bottleneck to onboarding your first hires.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Hire Against a Real Plan",
    heading: "Talent acquisition matched to the roles your GCC actually needs",
    body: "Starfii defines role architecture before sourcing begins, hiring engineering, analytics, operations, or finance talent against a plan built for your center's mandate, not a generic headcount target.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Govern From Day One",
    heading: "Decision rights and reporting lines defined before day one",
    body: "Starfii designs the governance model, reporting structure, and escalation paths between your GCC and headquarters up front, removing the ambiguity that stalls delivery in a center's first year.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Scale to Steady State",
    heading: "A phased ramp from first hires to strategic delivery",
    body: "Starfii plans headcount and capability ramp up in phases, moving your GCC from an initial cost focused footprint to a steady state center delivering against agreed KPIs.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
  },
];

type EcosystemImpact = { title: string };

const ecosystemImpact: EcosystemImpact[] = [
  { title: "Entity Setup and Statutory Compliance" },
  { title: "Talent Acquisition and Role Architecture" },
  { title: "Governance and Reporting Design" },
  { title: "Facilities and Infrastructure Build Out" },
  { title: "Payroll, Benefits and HR Localization" },
  { title: "Knowledge Transfer and Ramp Up" },
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
    category: "Mainframes, Services and Solutions",
    subcategory: "Application Modernization Services",
    rank: "Leader, U.S.",
    description:
      "Starfii named a Leader in Application Modernization Services in the ISG Provider Lens® Mainframes, Services and Solutions 2026 U.S. Quadrant Report, recognizing the same engineering discipline we bring to GCC delivery teams.",
  },
  {
    year: "2025 Quadrant",
    category: "Digital Engineering Services",
    subcategory: "Design and Development",
    rank: "Leader, U.S.",
    description:
      "Starfii named a Leader in Design and Development (Products, Services and Experiences) in the ISG Provider Lens™ Digital Engineering Services 2025 US Quadrant Report, reflecting the product engineering capability GCC teams plug into.",
  },
  {
    year: "2025 Quadrant",
    category: "Cloud and Data Engineering",
    subcategory: "Migration and Modernization",
    rank: "Leader, U.S.",
    description:
      "Starfii recognized as a Leader in Cloud and Data Engineering Migration and Modernization Services in the ISG Provider Lens™ 2025 US Quadrant Report, validating the cloud and data engineering practice a GCC often inherits.",
  },
];

type CaseStudy = { slug: string; image: string; title: string; body: string };

const caseStudies: CaseStudy[] = [
  {
    slug: "fintech-gcc-launch-five-months",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Sets Up a Global Capability Center for a US Fintech in Under Five Months",
    body: "See how Starfii took a US fintech from entity incorporation to a fully staffed engineering GCC, with governance and compliance built in from day one.",
  },
  {
    slug: "retail-analytics-gcc-scale-up",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Builds an Analytics Focused GCC for a Global Retail Enterprise",
    body: "Explore how Starfii's talent strategy and facility setup gave a retail enterprise a dedicated analytics GCC, cutting time to first insight and easing pressure on the onshore data team.",
  },
  {
    slug: "managed-transition-support-operations",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Transitions Legacy Support Operations Into a Managed GCC",
    body: "Learn how Starfii's structured knowledge transfer plan moved a multinational's support operations into a new GCC without disrupting service levels during the handover.",
  },
  {
    slug: "healthcare-gcc-compliance-first",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Stands Up a Compliance First GCC for a Healthcare Technology Firm",
    body: "Discover how Starfii built HIPAA aligned data residency and information security requirements into a healthcare GCC's operating model from the first day of setup.",
  },
  {
    slug: "manufacturing-gcc-scale-up",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Scales a Manufacturing Enterprise's GCC From 20 to 200",
    body: "See how Starfii's phased scale up plan grew a manufacturing enterprise's GCC from an initial cost focused footprint to a steady state engineering and analytics hub.",
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
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop",
    title:
      "Global Capability Centers: Build, Buy, or Partner, Choosing the Right Model",
    body: "Explore the trade offs between building a GCC in house, acquiring an existing center, and partnering with a setup specialist, and how each path affects timeline, cost, and control.",
  },
  {
    large: false,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    title: "GCC Talent Strategy: Structuring Roles Before You Hire",
    body: "See why role architecture has to come before sourcing, and how Starfii turns a vague headcount target into a hiring plan matched to what your GCC actually needs.",
  },
  {
    large: false,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    title: "Governance Models That Keep a GCC Aligned With HQ",
    body: "Stop letting decision rights stay ambiguous. See how a defined governance model prevents the early stalls that slow down new global capability centers.",
  },
  {
    large: false,
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format&fit=crop",
    title: "GCC Operating Model: From Setup to Steady State",
    body: "See how a clear operating model connects governance, delivery, talent, and performance as a new global capability center moves into steady state.",
  },
  {
    large: false,
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
    title: "Scaling GCC Talent Without Losing Delivery Quality",
    body: "Explore how phased hiring, structured onboarding, and capability planning help GCCs scale headcount while keeping delivery quality on track.",
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
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
   REUSABLE: One-card-at-a-time Carousel
   Next/Previous advances exactly ONE card while keeping the
   responsive visible-card count unchanged.
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
  const isDark = arrowVariant === "dark";

  useEffect(() => {
    setPosition((p) => Math.min(p, maxPosition));
  }, [maxPosition]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const measure = () => {
      const firstCard = track.firstElementChild as HTMLElement | null;
      if (!firstCard) return;
      const gap = 24;
      setStepWidth(firstCard.getBoundingClientRect().width + gap);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    if (track.firstElementChild) observer.observe(track.firstElementChild);

    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [perPage, items.length]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !stepWidth) return;
    track.scrollTo({ left: position * stepWidth, behavior: "smooth" });
  }, [position, stepWidth]);

  const goTo = (next: number) => {
    setPosition(Math.min(Math.max(next, 0), maxPosition));
  };

  const totalSteps = Math.max(1, maxPosition + 1);
  const progress = ((position + 1) / totalSteps) * 100;

  return (
    <div>
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="min-w-0 flex-shrink-0 snap-start"
            style={{
              width:
                perPage === 1
                  ? "100%"
                  : `calc((100% - ${(perPage - 1) * 24}px) / ${perPage})`,
            }}
          >
            {renderItem(item, index)}
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
            style={{
              width: `${progress}%`,
              backgroundColor: INDIGO_CTA,
            }}
          />
        </div>

        <span
          className="font-body flex-shrink-0 text-[13px] font-medium tabular-nums"
          style={{ color: isDark ? "rgba(255,255,255,0.55)" : "#94A3B8" }}
        >
          {String(position + 1).padStart(2, "0")} / {String(totalSteps).padStart(2, "0")}
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

export default function GlobalCapabilityCentersSection(): ReactElement {
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
      ============================================================ */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1800&auto=format&fit=crop"
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
            <span className="text-slate-500">Global Capability Centers</span>
          </nav>

          <h1
            className="font-heading mt-8 max-w-xl text-[44px] font-medium leading-[1.15] opacity-0 lg:text-[54px]"
            style={{ color: CHAMPION_BLUE, animation: "ss-fade-up 0.7s ease-out 0.15s forwards" }}
          >
            Global Capability Center Setup for Modern Enterprises
          </h1>

          <p
            className="font-body mt-6 max-w-lg text-[17px] leading-relaxed text-slate-600 opacity-0"
            style={{ animation: "ss-fade-up 0.7s ease-out 0.28s forwards" }}
          >
            Starfii takes your GCC from location feasibility to a fully
            staffed, operational center, covering entity setup, talent
            acquisition, and governance design as one connected engagement.
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
            OUTCOMES STRIP (extra content, styled to match the rest of
            the page rather than the dashboard-stat-card default)
        ============================================================ */}
        <Reveal
          as="section"
          className="mt-16 grid grid-cols-1 gap-8 border-y py-10 sm:grid-cols-3"
          style={{ borderColor: LAVENDER_ACCENT }}
        >
          {statOutcomes.map((o) => (
            <div key={o.label}>
              <p
                className="font-heading text-[32px] font-medium"
                style={{ color: CHAMPION_BLUE }}
              >
                {o.stat}
              </p>
              <p className="font-body mt-2 text-[14px] leading-relaxed text-slate-600">
                {o.label}
              </p>
            </div>
          ))}
        </Reveal>

        {/* ============================================================
            GLOBAL CAPABILITY CENTER AT A GLANCE
            Same reference-style three-column design
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
                  Global Capability Center at a Glance
                </span>
              </div>

              <span
                className="font-body hidden rounded-full px-5 py-2.5 text-[13px] font-semibold sm:inline-flex"
                style={{
                  backgroundColor: "#F1EEFC",
                  color: INDIGO_CTA,
                }}
              >
                End to End GCC Setup
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
            A Global Capability Center setup partner to enterprises and
            Fortune 500 brands, Starfii runs entity formation, talent
            acquisition, and governance design as one accountable
            engagement, not three vendors handing off badly.
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
                How Do Enterprises Set Up and Scale a Global Capability
                Center?
              </h2>
              <p className="font-body mt-5 text-[15px] leading-relaxed text-slate-600">
                Enterprises set up and scale a Global Capability Center by
                treating entity formation, talent acquisition, and
                governance design as one plan instead of three separate
                vendor relationships. Starfii brings these together to take
                a GCC from location feasibility to a fully staffed,
                operational center, with compliance and reporting built in
                rather than audited after the fact.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop"
                alt="A distributed team reviewing a GCC setup roadmap"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
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
            <h2 className="font-heading text-[36px] font-medium leading-[1.15] text-white lg:text-[44px]">
              Our GCC Setup &amp; Consulting Capabilities
            </h2>
            <p className="font-body mt-5 text-[15px] leading-relaxed text-white/60">
              Starfii plans, stands up, and scales global capability
              centers with entity formation, talent strategy, governance
              design, and infrastructure build out that keep a GCC aligned
              with headquarters from day one.
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
            TABBED DEEP-DIVE — auto-advancing tab list
        ============================================================ */}

        <Reveal as="section" className="mt-24 pb-28">
          <h2
            className="font-heading text-[34px] font-medium"
            style={{ color: CHAMPION_BLUE }}
          >
            GCC Setup Journey
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
          IMPACT ACROSS ECOSYSTEM (dark)
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
              Impact Across Your Global
              <br />
              Capability Center
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
                    {item.title}
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
          INDUSTRY RECOGNITION
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

            <StepCarousel
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
            <a
              href="#"
              className="font-body hidden items-center gap-1.5 text-[15px] font-semibold transition-transform duration-200 hover:translate-x-1 sm:flex"
              style={{ color: INDIGO_CTA }}
            >
              View All Case Studies
              <ArrowUpRight size={16} />
            </a>
          </Reveal>

          <div className="mt-12">
            <StepCarousel
              items={caseStudies}
              itemsPerPage={{ mobile: 1, tablet: 2, desktop: 3 }}
              arrowVariant="light"
              renderItem={(study, i) => (
                <Reveal delay={(i % 3) * 90} className="h-full">
                <Link
  href={`/services/global-capability-centers/${study.slug}`}
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
                        CASE STUDY
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
              {"What's New in Global Capability Centers"}
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
            <Carousel itemCount={insights.length} arrowVariant="light" clickToAdvance>
              {insights.map((post, i) => (
                <Reveal
                  key={post.title}
                  delay={i * 90}
                  className={`flex-shrink-0 snap-start cursor-pointer ${
                    post.large ? "w-[420px]" : "w-[340px]"
                  }`}
                  data-carousel-card
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
    </main>
  );
}


/*

  SEO checklist for this page:

  1. Page <title>: "Global Capability Center (GCC) Setup Services |
     Starfii Technology" (under 60 chars).
  2. Meta description: "Starfii sets up global capability centers end
     to end, entity, hiring, governance, and infrastructure, as one
     accountable engagement, typically in 4 to 6 months."
  3. Primary keyword targets used in copy above: global capability
     center setup, GCC setup services, offshore development center,
     captive center setup India, GCC talent strategy, GCC governance
     model.
  4. Confirm GCC is listed as an active offering on /services and in
     the main nav before this page goes live, so the design
     consistency with Digital & Software Services doesn't create a
     mismatch with what search engines see indexed elsewhere.

*/
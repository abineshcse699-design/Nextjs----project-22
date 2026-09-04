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

// Autoplay timing for the "AI Data Extraction" tab list
const TAB_AUTOPLAY_MS = 4000;

/* ===============================================================
   CONTENT
   AI DATA EXTRACTION
================================================================ */

const keyTakeaways: string[] = [
  "Starfii's AI Data Extraction solutions transform unstructured documents and business data into accurate, structured, actionable information.",
  "We combine AI, machine learning, OCR, and natural language processing to extract valuable information from PDFs, images, emails, forms, and other unstructured sources.",
  "Our solutions reduce manual data entry, accelerate document processing, improve data quality, and connect extracted information directly to downstream business workflows.",
  "The approach supports enterprise-scale processing with validation, confidence scoring, human review, secure data handling, and integrations across business systems.",
];

type FocusArea = { title: string; body: string; tags: string[] };

const focusAreas: FocusArea[] = [
  {
    title: "Intelligent Document Processing",
    body: "Automatically extract and classify information from invoices, contracts, forms, reports, applications, and other business documents.",
    tags: ["IDP", "CLASSIFICATION", "DOCUMENTS"],
  },
  {
    title: "AI-Powered OCR",
    body: "Convert scanned documents, images, and handwritten or printed content into machine-readable information using intelligent OCR and document understanding.",
    tags: ["OCR", "IMAGES", "SCANNED"],
  },
  {
    title: "Structured Data Extraction",
    body: "Transform unstructured content into clean, structured JSON, database records, spreadsheets, or other business-ready data formats.",
    tags: ["JSON", "DATA", "STRUCTURED"],
  },
  {
    title: "Natural Language Processing",
    body: "Understand text to identify meaningful entities, relationships, classifications, and insights from complex business information.",
    tags: ["NLP", "ENTITIES", "CONTEXT"],
  },
  {
    title: "Document Classification",
    body: "Automatically identify document types and route each document to the appropriate extraction and processing workflow.",
    tags: ["ROUTING", "WORKFLOWS", "CLASSIFICATION"],
  },
  {
    title: "Data Validation & Enrichment",
    body: "Validate extracted information, detect inconsistencies, enrich data from trusted sources, and improve overall data quality before downstream use.",
    tags: ["VALIDATION", "QUALITY", "ENRICHMENT"],
  },
  {
    title: "Email & Attachment Extraction",
    body: "Extract relevant information from incoming emails and attachments and automatically move structured data into downstream business systems.",
    tags: ["EMAIL", "ATTACHMENTS", "AUTOMATION"],
  },
  {
    title: "AI Workflow Automation",
    body: "Connect extracted data with CRM, ERP, databases, APIs, and internal applications to automate end-to-end business processes.",
    tags: ["CRM", "ERP", "APIs"],
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
    label: "Discover Data Sources",
    heading: "Understand your documents, data, and extraction requirements",
    body: "We assess document types, data sources, business rules, fields, exceptions, and existing workflows to define an extraction strategy aligned with the way your organization operates.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Classify & Understand",
    heading: "Use AI to identify document types and business context",
    body: "AI models, OCR, and natural language processing identify document structures, fields, entities, patterns, and relevant context before information is transformed into structured output.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Extract Structured Data",
    heading: "Turn unstructured information into business-ready data",
    body: "Extract the fields, entities, relationships, and values your workflows need and deliver them in structured formats such as JSON, database records, CSV, or spreadsheets.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Validate & Review",
    heading: "Build confidence with validation, scoring, and human review",
    body: "Apply business rules, confidence thresholds, exception handling, and human-in-the-loop review to verify extracted information before it reaches downstream systems.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Integrate & Automate",
    heading: "Move extracted information directly into business workflows",
    body: "Connect structured output to databases, APIs, CRM, ERP, cloud platforms, and enterprise applications so extraction becomes part of an automated end-to-end process.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
  },
];

type EcosystemImpact = { title: string };

const ecosystemImpact: EcosystemImpact[] = [
  { title: "Invoice & Accounts Payable Automation" },
  { title: "Contract & Legal Document Intelligence" },
  { title: "Healthcare & Insurance Document Processing" },
  { title: "Customer Onboarding & Application Processing" },
  { title: "Purchase Orders & Operational Records" },
  { title: "Enterprise Data Quality & Workflow Automation" },
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
    year: "AI Capability",
    category: "Intelligent Document Processing",
    subcategory: "OCR, Classification & Extraction",
    rank: "Enterprise Ready",
    description:
      "AI-enabled document workflows that classify business documents and extract relevant information from PDFs, scans, images, forms, and other unstructured sources.",
  },
  {
    year: "AI Capability",
    category: "Data Quality Intelligence",
    subcategory: "Validation, Enrichment & Review",
    rank: "Enterprise Ready",
    description:
      "Extraction pipelines that combine confidence scoring, validation rules, enrichment, exception handling, and human review to improve structured data quality.",
  },
  {
    year: "AI Capability",
    category: "Workflow Automation",
    subcategory: "APIs, CRM, ERP & Enterprise Integration",
    rank: "Enterprise Ready",
    description:
      "Business-ready extraction that connects structured information to APIs, databases, CRM, ERP, cloud platforms, and downstream operational workflows.",
  },
];

type CaseStudy = { slug: string; image: string; title: string; body: string };

const caseStudies: CaseStudy[] = [
  {
    slug: "invoice-data-extraction",
    image:
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=900&auto=format&fit=crop",
    title: "Automating Invoice Data Extraction for Faster Accounts Payable",
    body: "Explore how AI-powered document processing can extract invoice fields, validate information, and move structured data into downstream finance workflows.",
  },
  {
    slug: "contract-document-intelligence",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=900&auto=format&fit=crop",
    title: "Turning Contracts Into Searchable, Structured Business Data",
    body: "See how document intelligence can identify clauses, dates, parties, obligations, and other contract information for downstream review and workflows.",
  },
  {
    slug: "healthcare-document-processing",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=900&auto=format&fit=crop",
    title: "Streamlining Healthcare Document Processing With AI",
    body: "Discover how AI, OCR, and structured extraction can reduce manual document handling across healthcare forms, claims, reports, and administrative records.",
  },
  {
    slug: "insurance-claims-extraction",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=900&auto=format&fit=crop",
    title: "Accelerating Insurance Claims Data Capture",
    body: "Learn how structured extraction can surface policy, claim, incident, evidence, and financial information from complex claims documentation.",
  },
  {
    slug: "customer-onboarding-automation",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=900&auto=format&fit=crop",
    title: "Reducing Manual Work in Customer Onboarding",
    body: "Explore how AI extraction can capture customer information from applications, identity documents, forms, and supporting records.",
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
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    title:
      "AI Data Extraction: Turning Unstructured Documents Into Actionable Enterprise Data",
    body: "Explore how AI, OCR, NLP, validation, and workflow automation can transform documents and unstructured information into reliable business data.",
  },
  {
    large: false,
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
    title: "Why Human-in-the-Loop Still Matters in Enterprise Data Extraction",
    body: "Understand how confidence scoring, validation, and human review can strengthen extraction quality for complex and business-critical documents.",
  },
  {
    large: false,
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
    title: "Connecting AI Extraction to CRM, ERP, and Business Workflows",
    body: "See why extraction becomes more valuable when structured information flows directly into the systems and processes that run the business.",
  },
  {
    large: false,
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format&fit=crop",
    title: "AI Document Processing: Scaling Extraction Across Enterprise Operations",
    body: "Explore how intelligent document processing can handle high-volume files while improving consistency, validation, and downstream workflow efficiency.",
  },
  {
    large: false,
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
    title: "Document Intelligence: From Unstructured Files to Trusted Business Data",
    body: "See how AI-powered classification, extraction, and validation can turn complex documents into reliable information for business teams.",
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
  const maxPosition = Math.max(0, items.length - perPage);
  const [position, setPosition] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [stepWidth, setStepWidth] = useState(0);

  useEffect(() => {
    setPosition((p) => Math.min(p, maxPosition));
  }, [maxPosition]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const measure = () => {
      const firstCard = track.firstElementChild as HTMLElement | null;

      if (!firstCard) {
        setStepWidth(0);
        return;
      }

      const gap = 24;
      setStepWidth(firstCard.getBoundingClientRect().width + gap);
    };

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
  }, [perPage, items.length]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !stepWidth) return;

    track.scrollTo({
      left: position * stepWidth,
      behavior: "smooth",
    });
  }, [position, stepWidth]);

  const isDark = arrowVariant === "dark";

  const goTo = (next: number) => {
    setPosition(Math.min(Math.max(next, 0), maxPosition));
  };

  const totalSteps = Math.max(1, maxPosition + 1);

  return (
    <div>
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-hidden pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
              width: `${((position + 1) / totalSteps) * 100}%`,
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
          {String(totalSteps).padStart(2, "0")}
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

export default function AIDataExtractionSection(): ReactElement {
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
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1800&auto=format&fit=crop"
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
            <span className="text-slate-500">AI Data Extraction</span>
          </nav>

          <h1
            className="font-heading mt-8 max-w-xl text-[44px] font-medium leading-[1.15] opacity-0 lg:text-[54px]"
            style={{ color: CHAMPION_BLUE, animation: "ss-fade-up 0.7s ease-out 0.15s forwards" }}
          >
            AI Data Extraction for Modern Healthcare
          </h1>

          <p
            className="font-body mt-6 max-w-lg text-[17px] leading-relaxed text-slate-600 opacity-0"
            style={{ animation: "ss-fade-up 0.7s ease-out 0.28s forwards" }}
          >
            Starfii helps healthcare organizations modernize AI data extraction with AI-assisted unstructured business data analysis, extraction intelligence, validation, and workflow automation.
          </p>

          <a
            href="#connect"
            className="font-body mt-9 inline-flex items-center gap-2 rounded-full px-7 py-4 text-[15px] font-semibold text-white opacity-0 transition-transform duration-300 hover:scale-[1.03]"
            style={{
              backgroundColor: CHAMPION_BLUE,
              animation: "ss-fade-up 0.7s ease-out 0.4s forwards",
            }}
          >
            Explore AI Data Extraction Solutions
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      <div className={ALIGN}>
        {/* ============================================================
            AI DATA EXTRACTION INTELLIGENCE
        ============================================================ */}

        <Reveal as="section" className="mt-16">
          <div
            className="overflow-hidden rounded-2xl border"
            style={{ borderColor: LAVENDER_ACCENT }}
          >
            <div className="flex items-center justify-between px-8 py-6">
              <span
                className="font-body flex items-center gap-2.5 text-[16px] font-semibold"
                style={{ color: CHAMPION_BLUE }}
              >
                <Sparkles size={18} style={{ color: LAVENDER_ACCENT }} />
                AI Data Extraction Intelligence
              </span>

              <span
                className="font-body rounded-full px-4 py-2 text-[12px] font-semibold"
                style={{
                  backgroundColor: "#F1EEFC",
                  color: INDIGO_CTA,
                }}
              >
                Intelligent Document Processing
              </span>
            </div>

            <div
              className="grid grid-cols-1 gap-8 px-8 pb-8 lg:grid-cols-3"
              style={{ borderTop: `1px solid ${LAVENDER_ACCENT}` }}
            >
              <div className="pt-7">
                <h3
                  className="font-heading text-[19px] font-semibold"
                  style={{ color: CHAMPION_BLUE }}
                >
                  Discover
                </h3>
                <p className="font-body mt-3 text-[14px] leading-relaxed text-slate-600">
                  Identify document types, fields, entities, patterns, and
                  extraction requirements across your business data.
                </p>
              </div>

              <div className="pt-7">
                <h3
                  className="font-heading text-[19px] font-semibold"
                  style={{ color: CHAMPION_BLUE }}
                >
                  Extract
                </h3>
                <p className="font-body mt-3 text-[14px] leading-relaxed text-slate-600">
                  Use AI, OCR, and NLP to convert unstructured files into
                  clean, structured, business-ready information.
                </p>
              </div>

              <div className="pt-7">
                <h3
                  className="font-heading text-[19px] font-semibold"
                  style={{ color: CHAMPION_BLUE }}
                >
                  Automate
                </h3>
                <p className="font-body mt-3 text-[14px] leading-relaxed text-slate-600">
                  Validate extracted data and connect it directly to APIs,
                  databases, CRM, ERP, and operational workflows.
                </p>
              </div>
            </div>
          </div>

          <p
            className="font-heading mt-10 max-w-3xl text-[26px] leading-snug lg:text-[30px]"
            style={{ color: CHAMPION_BLUE }}
          >
            Turn unstructured documents into trusted, structured data that
            powers faster decisions, better automation, and more efficient
            business operations.
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
                How Can AI Transform AI Data Extraction Operations?
              </h2>
              <p className="font-body mt-5 text-[15px] leading-relaxed text-slate-600">
                Healthcare organizations can modernize AI data extraction by combining AI-assisted unstructured business data analysis, extraction recommendations, automated validation, and human review. Starfii brings these capabilities together to reduce repetitive work, improve consistency, accelerate turnaround, and connect extraction intelligence with broader revenue cycle operations.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop"
                alt="Business team reviewing extracted data and process workflows"
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
              Our AI Data Extraction &amp; Enterprise AI & Data Capabilities
            </h2>
            <p className="font-body mt-5 text-[15px] leading-relaxed text-white/60">
              Starfii applies healthcare AI to unstructured business data, coding workflows, validation, and revenue cycle operations, helping organizations improve productivity while keeping professional review and governance at the center.
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
            AI Data Extraction Workflow
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
              Impact Across Your Digital
              <br />
              Software Ecosystem
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
              AI Data Extraction Use Cases
            </h2>
            <a
              href="#"
              className="font-body hidden items-center gap-1.5 text-[15px] font-semibold transition-transform duration-200 hover:translate-x-1 sm:flex"
              style={{ color: INDIGO_CTA }}
            >
              View All AI Data Extraction Use Cases
              <ArrowUpRight size={16} />
            </a>
          </Reveal>

         <div className="mt-12">
  <PagedCarousel
    items={caseStudies}
    itemsPerPage={{ mobile: 1, tablet: 2, desktop: 3 }}
    arrowVariant="light"
    renderItem={(study, i) => (
      <Reveal delay={(i % 3) * 90} className="h-full">
        <Link
          href={`/services/offerings/testing/${study.slug}`}
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
              {"Insights on AI Data Extraction"}
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
    </main>
  );
}
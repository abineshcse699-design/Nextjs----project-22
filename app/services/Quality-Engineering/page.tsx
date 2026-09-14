//  Quality Engineering -- page

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

// Autoplay timing for the "Quality Engineering" tab list
const TAB_AUTOPLAY_MS = 4000;

// Page 7 — Quality Engineering
// URL: /services/enterprise-platform-services
// (kept in sync with the actual folder this file lives in — see
// CASE_STUDY_BASE / BLOG_BASE below, which must match [slug] routes)
const BLOG_BASE = "/services/Quality-Engineering/blogs";

const CASE_STUDY_BASE =
  "/services/Quality-Engineering/casestudies";
/* ===============================================================
   CONTENT
   SEO / AEO optimized: entity first statements ("Starfii is...",
   "Starfii offers..."), keyword rich but natural, no hyphens.

   Headings/subheadings are aligned to the recommended section list:
   80. Quality engineering overview -> Key Takeaways
   81. Manual testing               -> Focus area card
   82. Test automation              -> Focus area card
   83. API testing                  -> Focus area card
   84. Performance testing          -> Focus area card
   85. Security testing             -> Focus area card
   86. Mobile testing               -> Focus area card
   87. Continuous testing           -> Focus area card
   88. AI-assisted testing          -> Focus area card
   89. QA automation                -> Focus area card
   90. Quality strategy             -> Q&A section
   91. Case studies                 -> Case Studies section
   92. CTA                          -> Closing CTA section
================================================================ */

const keyTakeaways: string[] = [
  "Starfii is a quality engineering company helping organizations improve software reliability with intelligent testing, automation, and continuous quality practices.",
  "We engineer testing strategies that cover manual testing, test automation, API testing, performance testing, and security testing across web and mobile platforms.",
  "Our quality engineering capabilities span continuous testing, AI assisted testing, and QA automation embedded directly into the software delivery lifecycle.",
  "We help enterprises catch defects earlier, ship with confidence, and build a quality strategy that scales alongside every release.",
];

type FocusArea = { title: string; body: string; tags: string[] };

const focusAreas: FocusArea[] = [
  {
    title: "Manual Testing",
    body: "Starfii's manual testing teams validate real user journeys and edge cases that automation alone can miss, giving your product a human check before every release.",
    tags: ["MANUAL", "EXPLORATORY", "UAT"],
  },
  {
    title: "Test Automation",
    body: "We build durable, maintainable test automation suites that cut regression time and give teams fast, reliable feedback on every build.",
    tags: ["AUTOMATION", "REGRESSION", "CI/CD"],
  },
  {
    title: "API Testing",
    body: "Starfii validates API contracts, payloads, and integrations so services stay reliable as your architecture grows more distributed.",
    tags: ["API", "CONTRACT", "INTEGRATION"],
  },
  {
    title: "Performance Testing",
    body: "We load test and stress test critical systems to uncover bottlenecks before customers do, keeping platforms fast under real world traffic.",
    tags: ["LOAD", "STRESS", "SCALABILITY"],
  },
  {
    title: "Security Testing",
    body: "Starfii's security testing practice identifies vulnerabilities in applications and APIs early, reducing risk before code reaches production.",
    tags: ["SECURITY", "PENTEST", "RISK"],
  },
  {
    title: "Mobile Testing",
    body: "We test mobile applications across real devices, operating systems, and network conditions to make sure quality holds up everywhere your users are.",
    tags: ["IOS", "ANDROID", "DEVICE LAB"],
  },
  {
    title: "Continuous Testing",
    body: "Starfii embeds continuous testing into CI/CD pipelines so quality gates run automatically with every commit, not just before a release.",
    tags: ["CI/CD", "PIPELINES", "SHIFT LEFT"],
  },
  {
    title: "AI Assisted Testing",
    body: "We use AI assisted testing to generate test cases, detect flaky tests, and prioritize the checks that matter most, cutting manual test maintenance.",
    tags: ["AI", "SMART TESTING", "COVERAGE"],
  },
  {
    title: "QA Automation",
    body: "Starfii's QA automation practice builds the frameworks, tooling, and reporting that let quality engineering teams scale coverage without scaling headcount.",
    tags: ["QA", "FRAMEWORKS", "REPORTING"],
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
    label: "Test Automation",
    heading: "Test automation that keeps pace with every release",
    body: "Starfii builds maintainable automation suites across unit, integration, and end to end layers, so regression testing stops being the bottleneck in your release cycle.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "API Testing",
    heading: "API testing that protects every integration point",
    body: "Starfii validates request and response contracts, error handling, and edge cases across your API surface, so downstream services stay reliable as your platform grows.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Performance Testing",
    heading: "Performance testing built for real world traffic",
    body: "Starfii simulates peak load and failure conditions to expose bottlenecks early, so your platform holds up when usage spikes matter most.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Security Testing",
    heading: "Security testing that finds risk before attackers do",
    body: "Starfii's security testing practice probes applications and APIs for vulnerabilities, misconfigurations, and weak points, closing gaps before they reach production.",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Continuous Testing",
    heading: "Continuous testing wired into your delivery pipeline",
    body: "Starfii embeds quality gates directly into CI/CD, so every commit is tested automatically and issues surface long before release day.",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1200&auto=format&fit=crop",
  },
];

type EcosystemImpact = { title: string };

const ecosystemImpact: EcosystemImpact[] = [
  { title: "Manual Testing and Exploratory QA" },
  { title: "Mobile Testing Across Devices" },
  { title: "AI Assisted Testing and Insights" },
  { title: "QA Automation at Scale" },
  { title: "API Testing and Contract Validation" },
  { title: "Continuous Testing in CI/CD" },
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
    year: "Quality Engineering",
    category: "Test Automation",
    subcategory: "Frameworks and Coverage",
    rank: "Enterprise Capability",
    description:
      "Starfii builds test automation frameworks that scale coverage across web, mobile, and API layers while keeping maintenance costs low.",
  },
  {
    year: "Quality Engineering",
    category: "Performance and Security",
    subcategory: "Load, Stress, and Vulnerability Testing",
    rank: "Enterprise Capability",
    description:
      "Starfii applies performance and security testing practices that catch bottlenecks and vulnerabilities before they reach production.",
  },
  {
    year: "Quality Engineering",
    category: "Continuous and AI Assisted Testing",
    subcategory: "CI/CD Quality Gates",
    rank: "Enterprise Capability",
    description:
      "Starfii embeds continuous testing and AI assisted testing into delivery pipelines to keep every release measurably reliable.",
  },
];

/* ===============================================================
   CASE STUDIES
   FIXED: these slugs, titles, images and copy now come directly
   from the real entries in data/case-studies.tsx (getCaseStudyBySlug
   source of truth). The old list referenced slugs like
   "fintech-test-automation-regression-cycle" that don't exist
   anywhere in that data file, so every card 404'd. Nothing here is
   invented — each entry below matches an existing case study.
================================================================ */

type CaseStudy = { slug: string; image: string; title: string; body: string };

const caseStudies: CaseStudy[] = [
  {
    slug: "fintech-saas-platform-mvp-to-scale",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=900&auto=format&fit=crop",
    title:
      "Starfii Builds a Fortune 500 Fintech SaaS Platform From MVP to Scale",
    body: "See how Starfii's enterprise product engineering team took a fintech SaaS platform from a three month MVP to a full featured product serving Fortune 500 clients.",
  },
  {
    slug: "regional-bank-digital-banking-experience",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Modernizes a Regional Bank's Digital Banking Experience",
    body: "Explore how Starfii's legacy software modernization team rebuilt a bank's front end into a fast, secure digital experience that cut onboarding time.",
  },
  {
    slug: "healthcare-saas-generative-ai-features",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=900&auto=format&fit=crop",
    title:
      "Starfii Ships a Generative AI Feature Set for a Healthcare SaaS Platform",
    body: "Discover how Starfii's Generative AI and LLM engineering team embedded Gen AI features into a HIPAA compliant SaaS platform for a healthcare client.",
  },
  {
    slug: "ecommerce-platform-peak-season-scale",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Scales an E Commerce Platform for Peak Season Traffic",
    body: "See how Starfii's cloud engineering team re-architected an e commerce platform on AWS to handle peak season load without downtime.",
  },
  {
    slug: "enterprise-legacy-modernization-timeline",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=900&auto=format&fit=crop",
    title:
      "Starfii Cuts Legacy Modernization Timelines for an Enterprise Client",
    body: "Learn how Starfii's modernization roadmap moved a complex legacy application portfolio to a scalable cloud platform with minimal business disruption.",
  },
];

type InsightPost = {
  slug: string;
  large: boolean;
  image: string;
  title: string;
  body: string;
};

/* ===============================================================
   NOTE ON BLOG SLUGS BELOW:
   These slugs (quality-engineering-overview, test-automation-roi,
   etc.) have NOT been verified against blogsData.ts because that
   file wasn't shared. The [slug]/page.tsx for blogs filters by
   `post.service === "enterprise-platform-services"` AND slug, so if
   these slugs (or that service value) don't match what's actually in
   blogsData.ts, these cards will 404 the same way the case studies
   did. Share blogsData.ts and this list can be corrected the same way.
================================================================ */
const insights: InsightPost[] = [
  {
    slug: "ai-automation-quality-engineering",
    large: true,
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
    title:
      "AI Automation in Quality Engineering: Faster and Smarter Software Testing",
    body: "Explore how AI automation can modernize quality engineering, increase test coverage, reduce repetitive testing, and support faster enterprise software releases.",
  },
  {
    slug: "enterprise-devops-reliability",
    large: false,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    title: "Enterprise DevOps and Reliability for Always On Digital Platforms",
    body: "Learn how automation, observability, SRE, and quality engineering create safer releases and more reliable enterprise technology operations.",
  },
  {
    slug: "enterprise-integration-api-strategy",
    large: false,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    title: "Enterprise Integration and API Strategy for Connected Systems",
    body: "See how APIs and modern integration patterns help enterprises connect applications, data, partners, and workflows without creating new technology silos.",
  },
  {
    slug: "enterprise-ai-platforms",
    large: false,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    title: "Enterprise AI Platforms: Moving From Experiments to Business Value",
    body: "Discover how organizations can operationalize Generative AI and LLM capabilities with the platform, data, security, and governance needed for enterprise scale.",
  },
  {
    slug: "enterprise-cloud-modernization",
    large: false,
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    title:
      "Enterprise Cloud Modernization: From Legacy Complexity to Scalable Platforms",
    body: "Learn how enterprises can modernize critical workloads incrementally while improving resilience, agility, security, and operational efficiency.",
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

export default function QualityEngineeringSection(): ReactElement {
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
          (80. Quality engineering overview)
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
            <a href="/" className="hover:underline">
              Home
            </a>
            <ChevronRight size={14} />
            <a href="/services" className="hover:underline">
              Services
            </a>
            <ChevronRight size={14} />
            <span className="text-slate-500">Quality Engineering</span>
          </nav>

          <h1
            className="font-heading mt-8 max-w-xl text-[44px] font-medium leading-[1.15] opacity-0 lg:text-[54px]"
            style={{ color: CHAMPION_BLUE, animation: "ss-fade-up 0.7s ease-out 0.15s forwards" }}
          >
            Quality Engineering for Modern Enterprises
          </h1>

          <p
            className="font-body mt-6 max-w-lg text-[17px] leading-relaxed text-slate-600 opacity-0"
            style={{ animation: "ss-fade-up 0.7s ease-out 0.28s forwards" }}
          >
            Improve software reliability with intelligent testing,
            automation, and continuous quality engineering.
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
            (80. Quality engineering overview)
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
                Quality Engineering Overview
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
            Starfii helps enterprises improve software reliability by
            engineering testing strategies that combine manual testing,
            automation, and continuous quality checks across every layer
            of the stack.
          </p>
        </Reveal>


        {/* ============================================================
            Q&A BLOCK
            (90. Quality strategy)
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
                How Do Enterprises Build a Quality Strategy That Scales?
              </h2>
              <p className="font-body mt-5 text-[15px] leading-relaxed text-slate-600">
                Enterprises build a lasting quality strategy by combining
                manual testing, test automation, API and performance
                testing, security testing, and continuous testing inside
                the delivery pipeline. Starfii brings these together with
                AI assisted testing and QA automation, so quality holds up
                as release frequency and system complexity grow.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop"
                alt="Two colleagues reviewing a quality strategy roadmap"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </Reveal>
      </div>

      {/* ============================================================
          FOCUS AREAS
          (81-89. Manual testing through QA automation)
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
              Our Quality Engineering &amp; Testing Capabilities
            </h2>
            <p className="font-body mt-5 text-[15px] leading-relaxed text-white/60">
              Starfii covers the full testing lifecycle, from manual
              testing and automation to performance, security, mobile,
              and AI assisted testing, so quality is engineered in, not
              checked at the end.
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
            (82-87. Test automation through Continuous testing)
        ============================================================ */}

        <Reveal as="section" className="mt-24 pb-28">
          <h2
            className="font-heading text-[34px] font-medium"
            style={{ color: CHAMPION_BLUE }}
          >
            Quality Engineering Services
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
          (81, 86, 88, 89, 83, 87. mixed testing disciplines)
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
              Impact Across Your Quality
              <br />
              Engineering Ecosystem
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
          CASE STUDIES
          (91. Case studies)
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
        Quality Engineering Case Studies
      </h2>

      <Link
        href={CASE_STUDY_BASE}
        className="font-body hidden items-center gap-1.5 text-[15px] font-semibold transition-transform duration-200 hover:translate-x-1 sm:flex"
        style={{ color: INDIGO_CTA }}
      >
        View All Quality Engineering Case Studies
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
        View All Quality Engineering Case Studies
        <ArrowUpRight size={16} />
      </Link>
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
        What's New in Quality Engineering
      </h2>

      <Link
        href={BLOG_BASE}
        className="font-body hidden items-center gap-1.5 text-[15px] font-semibold transition-transform duration-200 hover:translate-x-1 sm:flex"
        style={{ color: INDIGO_CTA }}
      >
        View All Blogs
        <ArrowUpRight size={16} />
      </Link>
    </Reveal>

    <div className="mt-12">
      <Carousel
        itemCount={insights.length}
        arrowVariant="light"
        clickToAdvance={false}
      >
        {insights.map((post, i) => (
          <Reveal
            key={post.slug}
            delay={i * 90}
            className={`flex-shrink-0 snap-start ${
              post.large
                ? "w-[420px]"
                : "w-[340px]"
            }`}
          >
            <Link
              href={`${BLOG_BASE}/${post.slug}`}
              className="group block h-full"
              aria-label={`Read ${post.title}`}
            >
              {post.large ? (
                <div className="relative h-[420px] overflow-hidden rounded-2xl">
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
                      QUALITY ENGINEERING
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

                    <div
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold"
                      style={{
                        color: INDIGO_CTA,
                      }}
                    >
                      Read More
                      <ArrowUpRight size={15} />
                    </div>
                  </div>
                </div>
              ) : (
                <div>
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
                      QUALITY ENGINEERING
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

                    <div
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold"
                      style={{
                        color: INDIGO_CTA,
                      }}
                    >
                      Read More
                      <ArrowUpRight size={15} />
                    </div>
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
          (92. CTA)
      ============================================================ */}
      <section id="connect" className="bg-white py-24">
        <div className={ALIGN}>
          <Reveal
            className="overflow-hidden rounded-[28px] px-8 py-16 text-center sm:px-16"
            style={{ backgroundColor: CHAMPION_BLUE }}
          >
            <h2 className="font-heading mx-auto max-w-2xl text-[32px] font-medium leading-[1.2] text-white lg:text-[40px]">
              Ready to Build a Quality Strategy That Scales?
            </h2>
            <p className="font-body mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/70">
              Talk to Starfii about manual testing, test automation, API
              and performance testing, security testing, or embedding
              continuous and AI assisted testing into your pipeline.
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
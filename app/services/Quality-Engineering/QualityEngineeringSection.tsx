//  Quality Engineering -- page
//  Rebuilt on the same design system as "Software & Product Engineering"
//  (Champion Blue / Lavender / Indigo, light theme).

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
  ArrowUpRight,
  Plus,
  Minus,
} from "lucide-react";

/* ===============================================================
   BRAND TOKENS
   Primary   Champion Blue  #1B2560
   Secondary Lavender       #ECE7FB (surface) / #A48FEA (accent)
================================================================ */

const CHAMPION_BLUE = "#1B2560";
const LAVENDER_ACCENT = "#A48FEA";
const INDIGO_CTA = "#4F3FE0";

// Shared page width wrapper, kept in sync with the navbar's own
// max width/padding so every section lines up with it exactly.
const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

// Autoplay timing for the "Quality Engineering" tab list
const TAB_AUTOPLAY_MS = 4000;

// Shared card gap, kept identical to the other service pages.
const CARD_GAP = 32;

/* ===============================================================
   TYPOGRAPHY TOKENS
================================================================ */

const SECTION_HEADING =
  "font-heading font-medium leading-[1.15] text-[34px] sm:text-[40px] lg:text-[46px]";

/* ---------------------------------------------------------------
   ROUTES — must match the actual [slug] folders on disk.
   If you do not have a capabilities route yet, change
   CAPABILITY_BASE usage below to `#${area.slug}` and the cards
   will act as in-page anchors instead of links.
---------------------------------------------------------------- */
const BLOG_BASE = "/services/Quality-Engineering/blogs";
const CASE_STUDY_BASE = "/services/Quality-Engineering/casestudies";
const CAPABILITY_BASE = "/services/Quality-Engineering/capabilities";

/* ===============================================================
   CONTENT
   Section list this page covers:
   80. Quality engineering overview -> Hero + Key Takeaways
   81. Manual testing               -> Capability card
   82. Test automation              -> Capability card + tab
   83. API testing                  -> Capability card + tab
   84. Performance testing          -> Capability card + tab
   85. Security testing             -> Capability card + tab
   86. Mobile testing               -> Capability card
   87. Continuous testing           -> Capability card + tab
   88. AI assisted testing          -> Capability card
   89. QA automation                -> Capability card
   90. Quality strategy             -> Q&A section
   91. Case studies                 -> Case Studies section
   92. CTA                          -> Closing CTA section
================================================================ */

function Eyebrow({
  children,
  variant = "light",
}: {
  children: ReactNode;
  variant?: "light" | "dark" | "black";
}): ReactElement {
  return (
    <span
      className="font-body inline-flex items-center gap-2 text-[16px] font-semibold sm:text-[18px]"
      style={{
        color:
          variant === "dark"
            ? "#FFFFFF"
            : variant === "black"
              ? "#000000"
              : CHAMPION_BLUE,
      }}
    >
      <span>{children}</span>
    </span>
  );
}

const keyTakeaways = [
  {
    title: "Test",
    body: "Starfii is a quality engineering company helping organizations improve software reliability with intelligent testing, automation, and continuous quality practices across web and mobile platforms.",
  },
  {
    title: "Automate",
    body: "We engineer testing strategies that cover manual testing, test automation, API testing, performance testing, and security testing, so regression stops being the bottleneck in your release cycle.",
  },
  {
    title: "Scale",
    body: "Our capabilities span continuous testing, AI assisted testing, and QA automation embedded directly into the delivery lifecycle, so teams catch defects earlier and ship with confidence as release frequency grows.",
  },
];

/* --- 81–89. The nine quality engineering capabilities ----------- */
type Capability = { slug: string; title: string; body: string };

const capabilities: Capability[] = [
  {
    slug: "manual-testing",
    title: "Manual Testing",
    body: "Starfii's manual testing teams validate real user journeys and edge cases that automation alone can miss, giving your product a human check before every release.",
  },
  {
    slug: "test-automation",
    title: "Test Automation",
    body: "We build durable, maintainable test automation suites that cut regression time and give teams fast, reliable feedback on every build.",
  },
  {
    slug: "api-testing",
    title: "API Testing",
    body: "Starfii validates API contracts, payloads, and integrations so services stay reliable as your architecture grows more distributed.",
  },
  {
    slug: "performance-testing",
    title: "Performance Testing",
    body: "We load test and stress test critical systems to uncover bottlenecks before customers do, keeping platforms fast under real world traffic.",
  },
  {
    slug: "security-testing",
    title: "Security Testing",
    body: "Starfii's security testing practice identifies vulnerabilities in applications and APIs early, reducing risk before code reaches production.",
  },
  {
    slug: "mobile-testing",
    title: "Mobile Testing",
    body: "We test mobile applications across real devices, operating systems, and network conditions to make sure quality holds up everywhere your users are.",
  },
  {
    slug: "continuous-testing",
    title: "Continuous Testing",
    body: "Starfii embeds continuous testing into CI/CD pipelines so quality gates run automatically with every commit, not just before a release.",
  },
  {
    slug: "ai-assisted-testing",
    title: "AI Assisted Testing",
    body: "We use AI assisted testing to generate test cases, detect flaky tests, and prioritize the checks that matter most, cutting manual test maintenance.",
  },
  {
    slug: "qa-automation",
    title: "QA Automation",
    body: "Starfii's QA automation practice builds the frameworks, tooling, and reporting that let quality engineering teams scale coverage without scaling headcount.",
  },
];

type ServiceTab = {
  id: string;
  label: string;
  heading: string;
  body: string;
  image: string;
};

const tabs: ServiceTab[] = [
  {
    id: "test-automation",
    label: "Test Automation",
    heading: "Test automation that keeps pace with every release",
    body: "Starfii builds maintainable automation suites across unit, integration, and end to end layers, so regression testing stops being the bottleneck in your release cycle. Frameworks, reporting, and CI integration come as part of the build, not as an afterthought.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "api-testing",
    label: "API Testing",
    heading: "API testing that protects every integration point",
    body: "Starfii validates request and response contracts, error handling, and edge cases across your API surface, so downstream services stay reliable as your platform grows. Breaking changes surface in the pipeline rather than in a partner's inbox.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "performance-testing",
    label: "Performance Testing",
    heading: "Performance testing built for real world traffic",
    body: "Starfii simulates peak load and failure conditions to expose bottlenecks early, so your platform holds up when usage spikes matter most. Results come back as tuning actions, not just a graph of response times.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "security-testing",
    label: "Security Testing",
    heading: "Security testing that finds risk before attackers do",
    body: "Starfii's security testing practice probes applications and APIs for vulnerabilities, misconfigurations, and weak points, closing gaps before they reach production and giving you evidence you can take to an audit.",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "continuous-testing",
    label: "Continuous Testing",
    heading: "Continuous testing wired into your delivery pipeline",
    body: "Starfii embeds quality gates directly into CI/CD, so every commit is tested automatically and issues surface long before release day. Flaky tests get triaged instead of ignored, so the pipeline stays trusted.",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1200&auto=format&fit=crop",
  },
];

type EcosystemImpact = { title: string; body: string };

const ecosystemImpact: EcosystemImpact[] = [
  {
    title: "Manual Testing and Exploratory QA",
    body: "Catch what automation misses. Starfii's manual and exploratory testing validates real user journeys, edge cases, and usability issues before release, giving every build a human check that scripted tests alone cannot provide.",
  },
  {
    title: "Mobile Testing Across Devices",
    body: "Verify quality where users actually are. Starfii tests mobile apps across real devices, operating systems, and network conditions, so performance and behavior hold up consistently across a fragmented mobile landscape.",
  },
  {
    title: "AI Assisted Testing and Insights",
    body: "Cut manual test maintenance with AI. Starfii uses AI assisted testing to generate test cases, flag flaky tests, and prioritize the checks that matter most, so teams focus effort where risk is highest.",
  },
  {
    title: "QA Automation at Scale",
    body: "Scale coverage without scaling headcount. Starfii builds the frameworks, tooling, and reporting that let quality engineering teams expand test coverage steadily as the codebase and release cadence grow.",
  },
  {
    title: "API Testing and Contract Validation",
    body: "Keep every integration point reliable. Starfii validates API contracts, payloads, and error handling across your service surface, catching breaking changes before they reach downstream systems or partners.",
  },
  {
    title: "Continuous Testing in CI/CD",
    body: "Move quality gates earlier in the pipeline. Starfii embeds continuous testing directly into CI/CD, so every commit is tested automatically and issues surface in minutes rather than at release time.",
  },
];

/* ===============================================================
   CASE STUDIES
   Slugs below match real entries in data/case-studies.tsx.
================================================================ */

type CaseStudy = { slug: string; image: string; title: string; body: string };

const caseStudies: CaseStudy[] = [
  {
    slug: "fintech-saas-platform-mvp-to-scale",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Builds a Fortune 500 Fintech SaaS Platform From MVP to Scale",
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
    title: "Starfii Ships a Generative AI Feature Set for a Healthcare SaaS Platform",
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
    title: "Starfii Cuts Legacy Modernization Timelines for an Enterprise Client",
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
   These have NOT been verified against blogsData.ts. The blog
   [slug]/page.tsx filters by `post.service` AND slug, so if these
   slugs or that service value do not match blogsData.ts, the cards
   will 404. Share blogsData.ts and this list can be corrected.
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
      @keyframes ss-tab-progress {
        from { transform: scaleY(0); }
        to   { transform: scaleY(1); }
      }
      @keyframes ss-caret-blink {
        0%, 100% { opacity: 1; }
        50%      { opacity: 0; }
      }

      .ss-reveal { opacity: 0; }
      .ss-reveal.ss-in-view {
        animation: ss-fade-up 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      }
      .ss-tab-panel { animation: ss-fade-in 0.45s ease-out; }
      .ss-drift-slow { animation: ss-drift 16s ease-in-out infinite; }
      .ss-drift-slower { animation: ss-drift 22s ease-in-out infinite reverse; }
      .ss-arrow-pulse:not(:disabled):hover {
        animation: ss-pulse-soft 1.2s ease-in-out infinite;
      }
      .ss-caret { animation: ss-caret-blink 0.9s steps(1) infinite; }

      /* =============================================================
         LIGHT CAPABILITIES GRID
      ============================================================= */
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
      .ss-capability-title { transition: color 0.3s ease; }
      .ss-capability-learn-more { color: ${INDIGO_CTA}; }
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
      .ss-capability-card:target {
        background-color: #E4E7F3;
        box-shadow: 0 0 0 2px ${INDIGO_CTA};
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
        .ss-case-image,
        .ss-case-desc,
        .ss-zoom-img,
        .ss-eco-panel,
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
   KEY TAKEAWAYS ACCORDION — collapsible + typewriter reveal
================================================================ */

function KeyTakeawaysAccordion({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (updater: (prev: boolean) => boolean) => void;
}): ReactElement {
  const lines = keyTakeaways.map((point) => `${point.title}. ${point.body}`);
  const { displayed, typingIndex } = useTypewriterList(lines, open);

  return (
    <div
      className="overflow-hidden rounded-[22px] border bg-white transition-colors duration-300"
      style={{ borderColor: open ? INDIGO_CTA : LAVENDER_ACCENT }}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex min-h-[104px] w-full items-center justify-between gap-4 px-8 py-6 text-left lg:px-10"
        style={{
          borderBottom: open
            ? `1px solid ${LAVENDER_ACCENT}`
            : "1px solid transparent",
        }}
      >
        <div className="flex items-center gap-3">
          <img
            src="/starfii_logo_black.svg"
            alt="Starfii"
            className="h-10 w-20 flex-shrink-0 object-contain"
          />
          <span
            className="font-body text-[17px] font-semibold"
            style={{ color: CHAMPION_BLUE }}
          >
            Quality Engineering Overview
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span
            className="font-body hidden rounded-full px-5 py-2.5 text-[13px] font-semibold sm:inline-flex"
            style={{ backgroundColor: "#F1EEFC", color: INDIGO_CTA }}
          >
            TESTING • AUTOMATION • PERFORMANCE • AI
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
            {lines.map((line, i) => {
              const text = displayed[i];
              if (!text && i !== 0) return null;

              const isTyping = i === typingIndex && text.length < line.length;

              return (
                <li
                  key={line}
                  className="font-body flex gap-2 text-[15px] leading-[1.8] text-slate-600"
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
   ECOSYSTEM ACCORDION
================================================================ */

function EcosystemAccordion(): ReactElement {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const columns: { item: EcosystemImpact; index: number }[][] = [[], []];
  ecosystemImpact.forEach((item, index) => {
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
                    boxShadow: isOpen ? "0 18px 40px rgba(15,23,42,0.18)" : undefined,
                  }}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`qe-ecosystem-panel-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 px-8 py-7 text-left"
                  >
                    <span
                      className="font-heading text-[19px] font-medium leading-snug transition-colors duration-300"
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

                  {/* 0fr -> 1fr gives a smooth auto-height expand */}
                  <div
                    id={`qe-ecosystem-panel-${index}`}
                    className="ss-eco-panel grid transition-all duration-500 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="font-body px-8 pb-8 text-[15px] leading-[1.75] transition-opacity duration-500"
                        style={{ color: CHAMPION_BLUE, opacity: isOpen ? 1 : 0 }}
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

    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
    const pct = maxScroll === 0 ? 1 : el.scrollLeft / maxScroll;

    setProgress(pct);
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= maxScroll - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return undefined;

    updateProgress();

    const handleScroll = () => updateProgress();
    const handleResize = () => updateProgress();

    el.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [updateProgress, itemCount]);

  const getCardElements = () => {
    const el = trackRef.current;
    if (!el) return [] as HTMLElement[];

    return Array.from(el.children).filter(
      (child): child is HTMLElement => child instanceof HTMLElement
    );
  };

  const scrollByCard = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;

    const cards = getCardElements();
    if (!cards.length) return;

    const currentScroll = el.scrollLeft;
    const tolerance = 8;

    if (dir > 0) {
      // First card whose left edge is still ahead of the viewport,
      // so mixed card widths still advance exactly one card.
      const nextCard = cards.find(
        (card) => card.offsetLeft > currentScroll + tolerance
      );

      el.scrollTo({
        left: nextCard ? nextCard.offsetLeft : el.scrollWidth - el.clientWidth,
        behavior: "smooth",
      });
    } else {
      const previousCards = cards.filter(
        (card) => card.offsetLeft < currentScroll - tolerance
      );
      const previousCard = previousCards[previousCards.length - 1];

      el.scrollTo({
        left: Math.max(0, previousCard?.offsetLeft ?? 0),
        behavior: "smooth",
      });
    }
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
   REUSABLE: StepCarousel — one card per arrow click
================================================================ */

type StepCarouselProps<T> = {
  items: T[];
  itemsPerPage: Breakpoints;
  renderItem: (item: T, index: number) => ReactNode;
  arrowVariant?: "light" | "dark";
  gap?: number;
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

    track.scrollTo({ left: position * stepWidth, behavior: "smooth" });
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
        className="flex snap-x snap-mandatory overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
   SECTION
================================================================ */

export default function QualityEngineeringSection(): ReactElement {
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
  }, [tabHovered, activeTab]);

  // Deep links such as ...#performance-testing open that tab
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const index = tabs.findIndex((t) => t.id === hash);
    if (index >= 0) {
      setActiveTab(index);
      setTabHovered(true); // pause autoplay so the linked tab stays put
    }
  }, []);

  return (
    <main className="bg-white">
      <AnimationStyles />

      {/* ============================================================
          BREADCRUMB + HERO  (80. Quality engineering overview)
          Full-bleed image with a dark left-side readability gradient.
      ============================================================ */}
      <section className="relative isolate min-h-[680px] overflow-hidden lg:min-h-[760px]">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=90&w=3840&auto=format&fit=crop"
            alt="Quality engineering team reviewing automated test results"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="h-full w-full object-cover object-[68%_center]"
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.70) 32%, rgba(0,0,0,0.30) 55%, rgba(0,0,0,0.04) 78%, rgba(0,0,0,0) 100%)",
            }}
          />

          <div
            className="absolute inset-x-0 bottom-0 h-20"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.16) 100%)",
            }}
          />
        </div>

        <div className={`${ALIGN} relative flex min-h-[680px] items-center lg:min-h-[760px]`}>
          <div className="w-full max-w-[760px] py-20 lg:py-28">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="font-body mt-8 flex items-center gap-2 text-[14px] font-medium opacity-0"
              style={{
                color: "rgba(255,255,255,0.92)",
                animation: "ss-fade-up 0.6s ease-out 0.05s forwards",
              }}
            >
              <a href="/" className="transition-opacity hover:opacity-70">
                Home
              </a>
              <ChevronRight size={14} />
              <a href="/services" className="transition-opacity hover:opacity-70">
                Services
              </a>
              <ChevronRight size={14} />
              <span className="text-white/60">Quality Engineering</span>
            </nav>

            <h1
              className="font-heading mt-10 max-w-[720px] text-[36px] font-medium leading-[1.1] tracking-[-0.025em] text-white opacity-0 sm:text-[44px] lg:text-[52px] xl:text-[58px]"
              style={{ animation: "ss-fade-up 0.7s ease-out 0.15s forwards" }}
            >
              Quality Engineering for Modern Enterprises
            </h1>

            <p
              className="font-body mt-7 max-w-[650px] text-[16px] leading-[1.7] text-white/90 opacity-0 sm:text-[17px] lg:text-[18px]"
              style={{ animation: "ss-fade-up 0.7s ease-out 0.28s forwards" }}
            >
              Starfii improves software reliability with intelligent testing,
              automation, and continuous quality engineering built into every
              stage of your delivery pipeline.
            </p>

            <a
              href="#connect"
              className="font-body mt-10 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-semibold opacity-0 transition-all duration-300 hover:scale-[1.03] hover:bg-white/90"
              style={{
                color: INDIGO_CTA,
                animation: "ss-fade-up 0.7s ease-out 0.4s forwards",
              }}
            >
              Connect Now
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <div className={ALIGN}>
        {/* ============================================================
            KEY TAKEAWAYS — collapsible, typewriter bullets
        ============================================================ */}
        <Reveal as="section" className="mt-16">
          <KeyTakeawaysAccordion open={takeawaysOpen} setOpen={setTakeawaysOpen} />

          <p
            className="font-heading mt-10 max-w-6xl text-[26px] leading-snug lg:text-[30px]"
            style={{ color: CHAMPION_BLUE }}
          >
            Starfii helps enterprises improve software reliability by
            engineering testing strategies that combine manual testing,
            automation, and continuous quality checks across every layer
            of the stack.
          </p>
        </Reveal>

        {/* ============================================================
            Q&A BLOCK  (90. Quality strategy)
        ============================================================ */}
        <Reveal as="section" className="mb-20 mt-20 lg:mb-24">
          <div className="group grid grid-cols-1 items-stretch overflow-hidden rounded-lg bg-[#F5F3FC] transition-colors duration-500 ease-out hover:bg-[#EAE4FA] lg:grid-cols-2">
            <div className="flex flex-col justify-center p-10 transition-transform duration-500 ease-out group-hover:translate-x-2 lg:p-14">
              <h2 className="font-heading text-[30px] font-semibold leading-snug text-[#1B2560] transition-colors duration-500 ease-out group-hover:text-[#4F3FE0] lg:text-[36px]">
                How Do Enterprises Build a Quality Strategy That Scales?
              </h2>
              <p className="font-body mt-5 text-[17px] leading-relaxed text-slate-600 lg:text-[18px]">
                They combine manual testing, test automation, API and
                performance testing, security testing, and continuous
                testing inside the delivery pipeline. Starfii brings these
                together with AI assisted testing and QA automation, so
                quality holds up as release frequency and system
                complexity grow.
              </p>
            </div>

            <div className="relative min-h-[320px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop"
                alt="Two colleagues reviewing a quality strategy roadmap"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full transform-gpu object-cover transition-transform duration-700 will-change-transform group-hover:scale-110"
              />
            </div>
          </div>
        </Reveal>
      </div>

      {/* ============================================================
          CAPABILITIES  (81–89. Manual testing through QA automation)
      ============================================================ */}
    <section
        id="capabilities"
        className="relative scroll-mt-28 bg-white py-24 lg:py-28"
      >
        <div className={`relative ${ALIGN}`}>
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[380px_1fr] lg:gap-14 xl:grid-cols-[420px_1fr]">
            {/* LEFT — eyebrow, heading, description */}
            <Reveal className="self-start lg:sticky lg:top-28">
              <Eyebrow variant="light">Quality Engineering</Eyebrow>

              <h2
                className="font-heading mt-4 text-[34px] font-bold leading-[1.15] sm:text-[40px] lg:text-[46px]"
                style={{ color: CHAMPION_BLUE }}
              >
                Our Quality Engineering &amp; Testing Capabilities
              </h2>

              <p className="font-body mt-5 max-w-md text-[15px] leading-relaxed text-slate-600 sm:text-[16px]">
                Starfii covers the full testing lifecycle, from manual
                testing and automation to performance, security, mobile,
                and AI assisted testing, so quality is engineered in, not
                checked at the end.
              </p>
            </Reveal>

            {/* RIGHT — capability card grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {capabilities.map((area, i) => (
                <Reveal key={area.slug} delay={(i % 4) * 90} className="h-full">
                  <Link
                    id={area.slug}
                    href={`${CAPABILITY_BASE}/${area.slug}`}
                    aria-label={`Learn more about ${area.title}`}
                    className="ss-capability-card flex h-full scroll-mt-28 flex-col p-8"
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
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className={ALIGN}>
        {/* ============================================================
            TABBED DEEP-DIVE — auto-advancing tab list
            (82–87. Test automation through Continuous testing)
        ============================================================ */}
        <Reveal as="section" className="mt-24 pb-28">
          <Eyebrow>Quality Engineering</Eyebrow>
          <h2
            className={`${SECTION_HEADING} mt-4 font-bold`}
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
                  <li key={tab.label} id={tab.id} className="relative -ml-px scroll-mt-28">
                    {/* Static base line */}
                    <span
                      className="pointer-events-none absolute inset-y-0 left-0 w-[2px]"
                      style={{ backgroundColor: "transparent" }}
                    />
                    {/* Animated progress fill — remounted via key so it
                        restarts from empty on every tab change */}
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

            {/* Right panel */}
            <div
              key={activeTab}
              className="ss-tab-panel isolate grid grid-cols-1 overflow-hidden rounded-2xl md:min-h-[420px] md:grid-cols-2"
              style={{ backgroundColor: "#F5F3FC" }}
            >
              <div className="flex flex-col justify-start self-start p-3 pt-2 lg:p-6 lg:pt-5">
                <h3
                  className="font-heading text-[26px] font-bold leading-snug sm:text-[28px]"
                  style={{ color: CHAMPION_BLUE }}
                >
                  {current.heading}
                </h3>
                <p className="font-body mt-5 text-[17px] leading-relaxed text-slate-600">
                  {current.body}
                </p>
              </div>

              <div className="relative min-h-[280px] overflow-hidden">
                <img
                  src={current.image}
                  alt={current.label}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full transform-gpu object-cover transition-transform duration-700 will-change-transform hover:scale-105"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ============================================================
          IMPACT ACROSS ECOSYSTEM (dark) — click "+" to expand
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
            <Eyebrow variant="dark">Continuous Quality</Eyebrow>
            <h2 className={`${SECTION_HEADING} mt-4 max-w-6xl text-white`}>
              Impact Across Your Quality
              <br />
              Engineering Ecosystem
            </h2>
          </Reveal>

          <EcosystemAccordion />
        </div>
      </section>

      {/* ============================================================
          CASE STUDIES  (91. Case studies)
      ============================================================ */}
      <section
        id="case-studies"
        className="scroll-mt-28 py-24"
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #E9E4FB 45%, #C9BEF5 100%)",
        }}
      >
        <div className={ALIGN}>
          <Reveal className="flex items-center justify-between">
            <div>
              <Eyebrow>Case Studies</Eyebrow>
              <h2 className={`${SECTION_HEADING} mt-4`} style={{ color: CHAMPION_BLUE }}>
                Quality Engineering Case Studies
              </h2>
            </div>

            <Link
              href={CASE_STUDY_BASE}
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
              itemsPerPage={{ mobile: 1.15, tablet: 2, desktop: 4 }}
              gap={CARD_GAP}
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
                        loading="lazy"
                        decoding="async"
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
                          className="font-heading ss-clamp-2 shrink-0 text-[20px] font-semibold leading-snug"
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
                          className="transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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
              View All Case Studies
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
            <div>
              <Eyebrow>Quality Engineering</Eyebrow>
              <h2
                className={`${SECTION_HEADING} mt-4 max-w-500`}
                style={{ color: CHAMPION_BLUE }}
              >
                {"What's New in Quality Engineering"}
              </h2>
            </div>

            <Link
              href={BLOG_BASE}
              className="font-body hidden items-center gap-1.5 text-[15px] font-semibold transition-transform duration-200 hover:translate-x-1 sm:flex"
              style={{ color: INDIGO_CTA }}
            >
              View All Insights
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>

          <div className="mt-12">
            <Carousel itemCount={insights.length} arrowVariant="light" clickToAdvance>
              {insights.map((post, i) => (
                <Reveal
                  key={post.slug}
                  delay={i * 90}
                  data-carousel-card
                  className={`flex-shrink-0 snap-start ${
                    post.large ? "w-[420px]" : "w-[340px]"
                  }`}
                >
                  <Link
                    href={`${BLOG_BASE}/${post.slug}`}
                    className="block h-full"
                    aria-label={`Read ${post.title}`}
                  >
                    {post.large ? (
                      <div className="group relative h-[420px] overflow-hidden rounded-2xl">
                        <img
                          src={post.image}
                          alt={post.title}
                          loading="lazy"
                          decoding="async"
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
                            className="font-heading ss-clamp-2 mt-2 text-[19px] font-semibold leading-snug"
                            style={{ color: CHAMPION_BLUE }}
                          >
                            {post.title}
                          </h3>

                          <p className="font-body ss-clamp-2 mt-2 text-[13px] leading-relaxed text-slate-600">
                            {post.body}
                          </p>

                          <span
                            className="font-body mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold"
                            style={{ color: INDIGO_CTA }}
                          >
                            <span className="relative">
                              Read More
                              <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-current transition-[width] duration-500 ease-out group-hover:w-full" />
                            </span>
                            <ArrowUpRight
                              size={14}
                              className="transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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
                            loading="lazy"
                            decoding="async"
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
                            className="font-heading ss-clamp-2 mt-2 text-[19px] font-semibold leading-snug"
                            style={{ color: CHAMPION_BLUE }}
                          >
                            {post.title}
                          </h3>

                          <p className="font-body ss-clamp-3 mt-3 text-[14px] leading-relaxed text-slate-600">
                            {post.body}
                          </p>

                          <span
                            className="font-body mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold"
                            style={{ color: INDIGO_CTA }}
                          >
                            <span className="relative">
                              Read More
                              <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-current transition-[width] duration-500 ease-out group-hover:w-full" />
                            </span>
                            <ArrowUpRight
                              size={14}
                              className="transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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
          CLOSING CTA  (92. CTA)
      ============================================================ */}
<section id="connect" className="scroll-mt-28 bg-white py-24">
  <div className={ALIGN}>
    <Reveal
      className="relative overflow-hidden rounded-[28px] border px-8 py-14 sm:px-14 sm:py-16"
      style={{ backgroundColor: "#FFFFFF", borderColor: "rgba(0,0,0,0.08)" }}
    >
      {/* Decorative gradient blob, offset to one side */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(164,143,234,0.25) 0%, rgba(164,143,234,0) 70%)",
        }}
      />
      {/* Subtle diagonal lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(0,0,0,0.6) 0px, rgba(0,0,0,0.6) 1px, transparent 1px, transparent 40px)",
        }}
      />

      <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        {/* Left: heading + copy */}
        <div>
          <span
            className="font-body inline-flex items-center rounded-full px-4 py-1.5 text-[12px] font-semibold tracking-[0.08em]"
            style={{ backgroundColor: "rgba(29,53,87,0.08)", color: CHAMPION_BLUE }}
          >
            GET STARTED
          </span>

          <h2 className="font-heading mt-6 max-w-xl text-[32px] font-medium leading-[1.2] text-slate-900 lg:text-[38px]">
            Ready to Build a Quality Strategy That Scales?
          </h2>

          <p className="font-body mt-5 max-w-lg text-[15px] leading-relaxed text-slate-600">
            Talk to Starfii about manual testing, test automation, API
            and performance testing, security testing, or embedding
            continuous and AI assisted testing into your pipeline.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/#form"
              className="font-body inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-[15px] font-semibold text-white transition-transform duration-300 hover:scale-[1.03]"
              style={{ backgroundColor: CHAMPION_BLUE }}
            >
              Connect Now
              <ArrowUpRight size={17} />
            </Link>

            <a
              href="mailto:hello@starfii.com"
              className="font-body inline-flex items-center justify-center gap-2 rounded-full border px-7 py-4 text-[15px] font-semibold text-slate-900 transition-colors duration-300 hover:bg-slate-50"
              style={{ borderColor: "rgba(0,0,0,0.15)" }}
            >
              Email Us
            </a>
          </div>
        </div>

        {/* Right: floating contact card */}
        <div
          className="relative rounded-2xl p-7"
          style={{
            backgroundColor: "rgba(29,53,87,0.04)",
            border: "1px solid rgba(0,0,0,0.08)",
          }}
        >
          <p className="font-body text-[13px] uppercase tracking-[0.08em] text-slate-500">
            Prefer to talk directly?
          </p>
          <p className="font-heading mt-3 text-[22px] font-medium text-slate-900">
            hello@starfii.com
          </p>
          <div className="mt-6 h-px w-full" style={{ backgroundColor: "rgba(0,0,0,0.08)" }} />
          <p className="font-body mt-6 text-[13px] leading-relaxed text-slate-500">
            Typical response time: within 24 hours on business days.
          </p>
        </div>
      </div>
    </Reveal>
  </div>
</section>
    </main>
  );
}
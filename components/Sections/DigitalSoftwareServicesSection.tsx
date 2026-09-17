// Software & Product Engineering

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
  Minus,
} from "lucide-react";
import { capabilities as focusAreas } from "../../app/services/digital-software/capabilities/data";

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

// Autoplay timing for the "Software & Product Engineering" tab list
const TAB_AUTOPLAY_MS = 4000;

/* ===============================================================
   TYPOGRAPHY TOKENS
================================================================ */

const HERO_HEADING =
  "font-heading font-medium leading-[1.08] text-[46px] sm:text-[56px] lg:text-[66px]";

const SECTION_HEADING =
  "font-heading font-medium leading-[1.15] text-[34px] sm:text-[40px] lg:text-[46px]";

/* ===============================================================
   CONTENT
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
      style={{ color:
        variant === "dark"
          ? "#FFFFFF"
          : variant === "black"
            ? "#000000"
            : CHAMPION_BLUE }}
    >
      <span>{children}</span>
    </span>
  );
}

const keyTakeaways = [
  {
    title: "Build",
    body: "Design and engineer scalable digital products across web, mobile, SaaS, and enterprise platforms with AI driven software and product engineering.",
  },
  {
    title: "Modernize",
    body: "Transform legacy applications and complex technology portfolios into modern, cloud ready platforms with minimal disruption to business operations.",
  },
  {
    title: "Scale",
    body: "Accelerate delivery through product strategy, UI/UX engineering, cloud engineering, and quality engineering while keeping performance and customer experience at the center.",
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
    label: "Product Strategy",
    heading: "Product strategy that shapes and realizes your product vision",
    body: "Starfii crafts product strategy and experience roadmaps that go beyond planning to bring your vision into reality. Every phase of our product engineering process is clearly structured and strategically aligned with digital solutions that support innovation.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Web Application Development",
    heading: "Web applications engineered for how digital markets actually move",
    body: "Starfii's web application development team builds products that adapt to shifting user expectations and market conditions, so your software stays competitive long after launch instead of needing a rebuild every cycle.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Mobile Application Development",
    heading: "Mobile applications built for engagement across every device",
    body: "Starfii's mobile application development practice ships fast, reliable iOS, Android, and cross platform experiences that keep users coming back and support the business behind the app.",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Backend Engineering",
    heading: "Backend engineering built to carry your product as it grows",
    body: "Starfii's backend engineering teams design resilient services and data architectures, so performance and reliability hold up as usage, features, and integrations multiply.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Product Modernization",
    heading: "Product modernization that clears the path for what comes next",
    body: "Starfii assesses your legacy technology estate, builds a tailored product modernization roadmap, and transitions you to a scalable cloud platform with minimal disruption to daily business operations.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
  },
];

type EcosystemImpact = { title: string; body: string };

const ecosystemImpact: EcosystemImpact[] = [
  {
    title: "UI/UX Engineering",
    body: "Design digital products that balance user needs with business goals. Starfii's UI/UX engineering teams build research backed interfaces, design systems, and accessible experiences so every screen earns its place and drives measurable engagement.",
  },
  {
    title: "Enterprise Application Development",
    body: "Build enterprise platforms from ideation through launch. Starfii combines AI driven software engineering with proven delivery practices to ship secure, high performance applications that scale with your organization.",
  },
  {
    title: "API & Integrations",
    body: "Connect your software product to partners, internal systems, and third party platforms. Starfii designs API layers and integration architectures that add capability without adding fragility.",
  },
  {
    title: "SaaS Engineering",
    body: "From fintech and healthcare to e commerce, Starfii engineers multi tenant SaaS products with composable architecture, usage based scaling, and the reliability Fortune 500 customers expect.",
  },
  {
    title: "Product Modernization",
    body: "Assess your existing systems, build a tailored migration roadmap, and transition to a scalable, cloud ready, future proof platform with minimal disruption to daily business operations.",
  },
  {
    title: "QA and Release Engineering",
    body: "Get products to market faster with CI/CD automation and test automation built into every stage of the software development lifecycle, so quality is a gate and not an afterthought.",
  },
];

type CaseStudy = { slug: string; image: string; title: string; body: string };

const caseStudies: CaseStudy[] = [
  {
    slug: "insurance-claims-low-code-platform",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Transforms Reinsurance Claims Management with a Low Code Platform",
    body: "Explore how Starfii transformed insurance claims management with a low code digital platform, automating workflows, improving efficiency, and enhancing service quality for a global reinsurer.",
  },
  {
    slug: "regional-bank-digital-banking-experience",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Builds a Modern Digital Banking Experience for a Regional Bank",
    body: "See how Starfii's SaaS engineering team rebuilt a legacy banking front end into a fast, secure digital experience that cut onboarding time and lifted customer satisfaction scores.",
  },
  {
    slug: "utilities-digital-transformation-microsoft",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=900&auto=format&fit=crop",
    title: "Digital Transformation in Utilities Powered by Microsoft Business Applications",
    body: "Discover how Starfii used Microsoft Business Applications to help a utilities provider modernize field operations and give teams real time visibility across the grid.",
  },
  {
    slug: "digital-mortgage-automation",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Automates the Digital Mortgage Application Process",
    body: "Learn how Starfii's intelligent automation shortened mortgage approval cycles from weeks to days while keeping every step compliant and fully auditable.",
  },
  {
    slug: "healthcare-saas-platform-scale",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Scales a SaaS Platform for a Fortune 500 Healthcare Provider",
    body: "See how Starfii's composable architecture let a healthcare SaaS platform scale to millions of users without sacrificing reliability or HIPAA compliance.",
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
    slug: "generative-ai-software-development",
    large: true,
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200&auto=format&fit=crop",
    title:
      "Generative AI for Software Development: Smarter Builds, Faster Delivery, Future Ready Systems",
    body: "Explore how Starfii uses generative AI to revolutionize software development, accelerating builds, simplifying maintenance, and modernizing legacy systems with intelligent automation.",
  },
  {
    slug: "ai-powered-automation-enterprise-software",
    large: false,
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
    title: "AI Powered Automation: Transforming Enterprise Software Delivery",
    body: "Stop trading speed for quality. See how Starfii's AI automation cuts test cycles by 70%, boosts developer productivity by 40%, and accelerates enterprise application development.",
  },
  {
    slug: "agile-product-engineering-mach-technologies",
    large: false,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
    title: "Driving ROI Through Agile Product Engineering and MACH Technologies",
    body: "Stop rebuilding for every channel. See how Starfii combines MACH architecture with agile product engineering to enable modular software products with 30% lower total cost of ownership.",
  },
  {
    slug: "ai-led-engineering-digital-products",
    large: false,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    title: "Building Smarter Digital Products with AI Led Engineering",
    body: "Discover how AI led engineering helps product teams move from idea to production faster while improving software quality, scalability, and customer experience.",
  },
  {
    slug: "modern-software-delivery-enterprise-growth",
    large: false,
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format&fit=crop",
    title: "Modern Software Delivery for Enterprise Growth",
    body: "Learn how modern engineering practices, cloud platforms, and automation help enterprises deliver reliable digital products faster and scale with confidence.",
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
      /* Typewriter cursor blink for Key Takeaways */
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

      /* =============================================================
         PREMIUM CAPABILITIES GRID
         Scoped only to the Focus Areas section.
      ============================================================= */
      .ss-capabilities-section {
        isolation: isolate;
      }

      .ss-capabilities-grid {
        position: relative;
      }

      .ss-capabilities-grid::before {
        content: "";
        position: absolute;
        inset: -70px -40px;
        z-index: -1;
        pointer-events: none;
        opacity: 0.42;
        background-image:
          linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
        background-size: 72px 72px;
        mask-image: radial-gradient(ellipse at center, black 25%, transparent 78%);
        -webkit-mask-image: radial-gradient(ellipse at center, black 25%, transparent 78%);
      }

      .ss-capability-card {
        position: relative;
        min-height: 390px;
        overflow: hidden;
        isolation: isolate;
        background:
          linear-gradient(145deg, rgba(255,255,255,0.045), rgba(255,255,255,0.012) 42%, rgba(164,143,234,0.035)),
          #0F0E18;
        border: 1px solid rgba(255,255,255,0.10);
        box-shadow: 0 20px 55px rgba(0,0,0,0.16);
        transform: translateZ(0);
        transition:
          transform 0.55s cubic-bezier(0.22, 1, 0.36, 1),
          border-color 0.4s ease,
          box-shadow 0.55s ease,
          background 0.45s ease;
      }

      .ss-capability-card::before {
        content: "";
        position: absolute;
        inset: 0;
        z-index: -1;
        pointer-events: none;
        opacity: 0;
        background:
          radial-gradient(260px 180px at 85% 8%, rgba(164,143,234,0.20), transparent 70%),
          radial-gradient(220px 180px at 5% 100%, rgba(79,63,224,0.12), transparent 70%);
        transition: opacity 0.5s ease;
      }

      .ss-capability-card::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        height: 1px;
        opacity: 0;
        transform: translateX(-105%);
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
        transition: opacity 0.25s ease, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
      }

      .ss-capability-card:hover {
        transform: translateY(-10px);
        border-color: rgba(164,143,234,0.48);
        box-shadow:
          0 28px 75px rgba(0,0,0,0.28),
          0 0 0 1px rgba(164,143,234,0.05),
          0 0 55px rgba(79,63,224,0.12);
        background:
          linear-gradient(145deg, rgba(255,255,255,0.065), rgba(255,255,255,0.018) 42%, rgba(164,143,234,0.07)),
          #11101B;
      }

      .ss-capability-card:hover::before {
        opacity: 1;
      }

      .ss-capability-card:hover::after {
        opacity: 1;
        transform: translateX(105%);
      }

      .ss-capability-number {
        position: absolute;
        top: -18px;
        right: 18px;
        z-index: -1;
        font-family: var(--font-heading, sans-serif);
        font-size: 116px;
        line-height: 1;
        font-weight: 600;
        letter-spacing: -0.08em;
        color: rgba(255,255,255,0.025);
        transition: color 0.45s ease, transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
      }

      .ss-capability-card:hover .ss-capability-number {
        color: rgba(164,143,234,0.065);
        transform: translate(-8px, 4px);
      }

      .ss-capability-icon {
        transition:
          transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1),
          background-color 0.35s ease,
          border-color 0.35s ease,
          box-shadow 0.35s ease;
      }

      .ss-capability-card:hover .ss-capability-icon {
        transform: rotate(8deg) scale(1.08);
        background-color: ${INDIGO_CTA};
        border-color: ${INDIGO_CTA};
        box-shadow: 0 10px 28px rgba(79,63,224,0.28);
      }

      .ss-capability-title {
        transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), color 0.3s ease;
      }

      .ss-capability-card:hover .ss-capability-title {
        transform: translateX(4px);
      }

      .ss-capability-line {
        position: relative;
        height: 1px;
        overflow: hidden;
        background: rgba(255,255,255,0.10);
      }

      .ss-capability-line::after {
        content: "";
        position: absolute;
        inset: 0 auto 0 0;
        width: 42%;
        background: linear-gradient(90deg, ${LAVENDER_ACCENT}, transparent);
        transform: translateX(-120%);
        transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
      }

      .ss-capability-card:hover .ss-capability-line::after {
        transform: translateX(250%);
      }

      .ss-capability-tag {
        transition:
          transform 0.3s ease,
          color 0.3s ease,
          border-color 0.3s ease,
          background-color 0.3s ease;
      }

      .ss-capability-card:hover .ss-capability-tag {
        color: rgba(255,255,255,0.78);
        border-color: rgba(164,143,234,0.28);
        background-color: rgba(164,143,234,0.06);
      }

      .ss-capability-orb {
        position: absolute;
        width: 260px;
        height: 260px;
        right: -100px;
        top: 12%;
        border: 1px solid rgba(164,143,234,0.12);
        border-radius: 9999px;
        pointer-events: none;
        animation: ss-capability-orbit 14s linear infinite;
      }

      .ss-capability-orb::after {
        content: "";
        position: absolute;
        width: 7px;
        height: 7px;
        top: 20px;
        left: 50%;
        border-radius: 9999px;
        background: ${LAVENDER_ACCENT};
        box-shadow: 0 0 18px rgba(164,143,234,0.75);
      }

      @keyframes ss-capability-orbit {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      .ss-capability-learn-more {
        transition: color 0.3s ease;
      }

      .ss-capability-learn-more .ss-capability-underline {
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
      }

      .ss-capability-card:hover .ss-capability-learn-more .ss-capability-underline {
        transform: scaleX(1);
      }

      .ss-capability-card:hover .ss-capability-learn-more {
        color: ${LAVENDER_ACCENT};
      }

      @media (max-width: 639px) {
        .ss-capability-card {
          min-height: 390px;
        }

        .ss-capability-number {
          font-size: 88px;
        }

        .ss-capabilities-grid::before {
          background-size: 52px 52px;
        }
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
        /* Card height/description reveal stays static for reduced motion */
        .ss-case-image,
        .ss-case-desc,
        .ss-zoom-img,
        .ss-eco-panel,
        .ss-capability-card,
        .ss-capability-icon,
        .ss-capability-title,
        .ss-capability-tag,
        .ss-capability-learn-more .ss-capability-underline {
          transition: none !important;
        }

        .ss-capability-orb {
          animation: none !important;
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
================================================================ */

type StepCarouselProps<T> = {
  items: T[];
  itemsPerPage: Breakpoints;
  renderItem: (item: T, index: number) => ReactNode;
  arrowVariant?: "light" | "dark";
  gap?: number; // px gap between cards — matches Swiper's spaceBetween
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

  // Math.ceil so a fractional perPage (e.g. 1.15 for a "peek" card) still
  // lands on a whole card instead of stopping mid-card.
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
          style={{
            backgroundColor: isDark ? "rgba(255,255,255,0.18)" : "#E5E1F5",
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
        className="flex w-full min-h-[104px] items-center justify-between gap-4 px-8 py-6 text-left lg:px-10"
        style={{
          borderBottom: open ? `1px solid ${LAVENDER_ACCENT}` : "1px solid transparent",
        }}
      >
        <div className="flex items-center gap-3">
          <Sparkles size={21} strokeWidth={1.8} style={{ color: LAVENDER_ACCENT }} />
          <span className="font-body text-[17px] font-semibold" style={{ color: CHAMPION_BLUE }}>
            Product Engineering Overview
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span
            className="font-body hidden rounded-full px-5 py-2.5 text-[13px] font-semibold sm:inline-flex"
            style={{ backgroundColor: "#F1EEFC", color: INDIGO_CTA }}
          >
            STRATEGY • UI/UX • WEB • MOBILE
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
   ECOSYSTEM ACCORDION
   Click the "+" and the matching content expands in place.
   Two independent columns, so opening a card on the left does not
   stretch the card sitting next to it on the right.
================================================================ */

function EcosystemAccordion(): ReactElement {
  // null = everything closed. Use 0 to have the first card open by default.
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
                    boxShadow: isOpen
                      ? "0 18px 40px rgba(15,23,42,0.18)"
                      : undefined,
                  }}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`ecosystem-panel-${index}`}
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

                  {/* 0fr -> 1fr gives a smooth auto-height expand */}
                  <div
                    id={`ecosystem-panel-${index}`}
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
   SECTION
================================================================ */

export default function SoftwareProductEngineeringSection(): ReactElement {
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

  return (
    <main className="bg-white">
      <AnimationStyles />

      {/* ============================================================
          BREADCRUMB + HERO
          Full-bleed image with a dark left-side readability gradient,
          matching the reference design.
      ============================================================ */}

      <section className="relative isolate min-h-[680px] overflow-hidden lg:min-h-[760px]">
        {/* FULL-BLEED HERO IMAGE */}
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=90&w=3840&auto=format&fit=crop"
            alt="Software engineering team collaborating on a digital product"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="h-full w-full object-cover object-[68%_center]"
          />

          {/* Dark readability gradient — image remains visible on the right */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.70) 32%, rgba(0,0,0,0.30) 55%, rgba(0,0,0,0.04) 78%, rgba(0,0,0,0) 100%)",
            }}
          />

          {/* Small bottom fade for a polished edge */}
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
              className="font-body flex items-center gap-2 text-[14px] font-medium opacity-0"
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
              <span className="text-white/60">
                Software &amp; Product Engineering
              </span>
            </nav>

            {/* Eyebrow */}
            <div
              className="mt-10 opacity-0"
              style={{ animation: "ss-fade-up 0.65s ease-out 0.1s forwards" }}
            >
              <Eyebrow variant="dark">
                Software &amp; Product Engineering
              </Eyebrow>
            </div>

            {/* Main heading */}
            <h1
              className="font-heading mt-5 max-w-[720px] text-[48px] font-medium leading-[1.08] tracking-[-0.025em] text-white opacity-0 sm:text-[58px] lg:text-[68px] xl:text-[74px]"
              style={{ animation: "ss-fade-up 0.7s ease-out 0.15s forwards" }}
            >
              Software and Product Engineering for Modern Enterprises
            </h1>

            {/* Description */}
            <p
              className="font-body mt-7 max-w-[650px] text-[16px] leading-[1.7] text-white/90 opacity-0 sm:text-[17px] lg:text-[18px]"
              style={{ animation: "ss-fade-up 0.7s ease-out 0.28s forwards" }}
            >
              Starfii turns ideas into scalable software products and modern
              platforms with product strategy, AI driven engineering, and
              faster delivery cycles.
            </p>

            {/* CTA */}
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
            A leader in software and product engineering, Starfii designs
            and engineers customer focused digital experiences while
            modernizing complex application portfolios for speed and
            scale.
          </p>
        </Reveal>

        {/* ============================================================
            Q&A BLOCK
        ============================================================ */}
<Reveal as="section" className="mt-20 mb-20 lg:mb-24">
  <div
    className="grid grid-cols-1 items-stretch overflow-hidden rounded-2xl lg:grid-cols-2"
    style={{ backgroundColor: "#F5F3FC" }}
  >
    {/* LEFT — text with padding */}
    <div className="p-10 lg:p-14 flex flex-col justify-center">
      <Eyebrow>Product Strategy</Eyebrow>
      <h2
        className="font-heading mt-4 text-[26px] font-medium leading-snug lg:text-[30px]"
        style={{ color: LAVENDER_ACCENT }}
      >
        How Do Enterprises Build Product Strategy Into Software
        Engineering?
      </h2>
      <p className="font-body mt-5 text-[15px] leading-relaxed text-slate-600">
        Enterprises scale and optimize software operations by
        combining product strategy, AI led engineering, and
        scalable architectures. Starfii brings these together to
        accelerate software development, improve quality, and
        modernize legacy systems, turning ideas into digital
        experiences that users value and businesses depend on
        every day.
      </p>
    </div>

    {/* RIGHT — image fills column completely, no gap, no padding */}
    <div className="relative min-h-[320px] lg:min-h-full">
      <img
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop"
        alt="Two colleagues reviewing a product strategy roadmap"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 block h-full w-full object-cover transition-transform duration-700 hover:scale-105"
      />
    </div>
  </div>
</Reveal>
      </div>

      {/* ============================================================
          FOCUS AREAS — premium capability grid
          Each card now links through to its own detail page at
          /services/digital-software/capabilities/[slug], with a
          "Learn More" affordance that mirrors the case study cards.
      ============================================================ */}
      <section className="ss-capabilities-section relative overflow-hidden bg-[#08070F] py-24 lg:py-28">
        <div
          className="ss-drift-slow pointer-events-none absolute -right-20 top-[-12%] h-[620px] w-[620px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(164,143,234,0.24) 0%, rgba(79,63,224,0.10) 38%, rgba(8,7,15,0) 72%)",
            filter: "blur(4px)",
          }}
        />
        <div
          className="ss-drift-slower pointer-events-none absolute -bottom-40 -left-32 h-[520px] w-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(63,90,214,0.20) 0%, rgba(8,7,15,0) 70%)",
          }}
        />

        <div className={`relative ${ALIGN}`}>
          <Reveal className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-4">
              <Eyebrow variant="dark">Software &amp; Product Engineering</Eyebrow>
              <span className="font-body rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium tracking-[0.16em] text-white/45">
                09 CAPABILITIES
              </span>
            </div>

            <h2 className={`${SECTION_HEADING} mt-5 max-w-3xl text-white`}>
              Our Software &amp; Product Engineering Capabilities
            </h2>

            <p className="font-body mt-5 max-w-2xl text-[15px] leading-relaxed text-white/60 sm:text-[16px]">
              Starfii plans, designs, and scales customer focused digital
              products and platforms with AI led engineering, seamless
              experiences, and modernization strategies that drive speed,
              efficiency, and long term business value.
            </p>
          </Reveal>

          <div className="ss-capabilities-grid mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {focusAreas.map((area, i) => (
              <Reveal key={area.slug} delay={(i % 3) * 90} className="h-full">
                <Link
                  href={`/services/digital-software/capabilities/${area.slug}`}
                  aria-label={`Learn more about ${area.title}`}
                  className="ss-capability-card flex h-full flex-col rounded-[24px] p-7 sm:p-8"
                >
                  <div className="ss-capability-orb" aria-hidden="true" />
                  <span className="ss-capability-number" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span
                        className="font-body text-[12px] font-semibold tracking-[0.18em] text-white/35"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px w-8 bg-white/10" />
                      <span className="font-body text-[10px] font-semibold tracking-[0.18em] text-white/30">
                        CAPABILITY
                      </span>
                    </div>

                    <span
                      className="ss-capability-icon flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border"
                      style={{ borderColor: "rgba(255,255,255,0.16)" }}
                    >
                      <ArrowUpRight size={17} className="text-white" />
                    </span>
                  </div>

                  <div className="relative mt-auto pt-20">
                    <div className="ss-capability-line mb-6" />
                    <h3 className="ss-capability-title font-heading text-[22px] font-semibold leading-[1.18] text-white sm:text-[24px]">
                      {area.title}
                    </h3>
                    <p className="font-body mt-4 text-[14px] leading-[1.75] text-white/50">
                      {area.body}
                    </p>
                  </div>

                  <div className="relative mt-6 flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
                      <span
                        key={tag}
                        className="ss-capability-tag font-body rounded-full border px-3 py-1.5 text-[10px] font-semibold tracking-[0.12em] text-white/45"
                        style={{ borderColor: "rgba(255,255,255,0.12)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="ss-capability-learn-more font-body relative mt-6 inline-flex w-fit items-center gap-1.5 text-[14px] font-medium text-white/70">
                    <span className="relative">
                      Learn More
                      <span
                        className="ss-capability-underline absolute -bottom-0.5 left-0 h-[1.5px] w-full"
                        style={{ backgroundColor: LAVENDER_ACCENT }}
                      />
                    </span>
                    <ArrowUpRight size={15} />
                  </span>
                </Link>
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
          <Eyebrow>Software &amp; Product Engineering</Eyebrow>
          <h2 className={`${SECTION_HEADING} mt-4`} style={{ color: CHAMPION_BLUE }}>
            Software and Product Engineering Services
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

              <div className="min-h-[280px] overflow-hidden">
                <img
                  src={current.image}
                  alt={current.label}
                loading="lazy"
                decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ============================================================
          IMPACT ACROSS ECOSYSTEM (dark) — click "+" to expand content
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
            <Eyebrow variant="dark">Enterprise Application Development</Eyebrow>
            <h2 className={`${SECTION_HEADING} mt-4 max-w-6xl text-white`}>
              Impact Across Your Software
              <br />
              Product Engineering Ecosystem
            </h2>
          </Reveal>

          <EcosystemAccordion />
        </div>
      </section>

      {/* ============================================================
          CASE STUDIES
          Hover behaviour copied from the homepage CaseStudiesSection:
          the card height is FIXED, the image frame collapses from
          260px to 0, and the description fades/slides into the space
          the image gives up. Card size never changes.
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
              <h2 className={`${SECTION_HEADING} mt-4`} style={{ color: CHAMPION_BLUE }}>
                Case Studies
              </h2>
            </div>
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
                    href={`/services/digital-software/casestudies/${study.slug}`}
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
        </div>
      </section>

      {/* ============================================================
          INSIGHTS / WHAT'S NEW
          Blog images zoom in on hover (scale 1 → 1.1) inside a fixed
          frame, so only the picture grows, never the card.
      ============================================================ */}
      <section className="bg-[#EEF0F7] py-24">
        <div className={ALIGN}>
          <Reveal className="flex items-center justify-between">
            <div>
              <Eyebrow>Software &amp; Product Engineering</Eyebrow>
              <h2 className={`${SECTION_HEADING} mt-4 max-w-500`} style={{ color: CHAMPION_BLUE }}>
                {"What's New in Software & Product Engineering"}
              </h2>
            </div>

            <Link
              href="/services/digital-software/blogs"
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
                    href={`/services/digital-software/blogs/${post.slug}`}
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
              ))}
            </Carousel>
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
            <Eyebrow variant="dark">CTA</Eyebrow>
            <h2 className="font-heading mx-auto mt-4 max-w-2xl text-[32px] font-medium leading-[1.2] text-white lg:text-[40px]">
              Ready to Build Your Next Software Product?
            </h2>
            <p className="font-body mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/70">
              Talk to Starfii about product strategy, UI/UX engineering,
              web and mobile application development, backend engineering,
              or modernizing an existing platform.
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
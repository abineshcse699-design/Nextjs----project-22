// Legacy Modernization

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

// Autoplay timing for the "Legacy Modernization" tab list
const TAB_AUTOPLAY_MS = 4000;

// Hero background image — replace this URL with your new image when needed.
const HERO_BACKGROUND_IMAGE =
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=90&w=3840&auto=format&fit=crop";

/* ===============================================================
   TYPOGRAPHY TOKENS
   Same scale used on the Data & Analytics Services page, so every
   service page's Hero <h1> and big section <h2>s render at
   identical sizes across the site.
================================================================ */

const HERO_HEADING =
  "font-heading font-medium leading-[1.08] text-[46px] sm:text-[56px] lg:text-[66px]";

const SECTION_HEADING =
  "font-heading font-medium leading-[1.15] text-[34px] sm:text-[40px] lg:text-[46px]";

/* ===============================================================
   CONTENT
   SEO / AEO optimized: entity first statements ("Starfii is...",
   "Starfii offers..."), keyword rich but natural, no hyphens.

   Headings/subheadings are aligned to the recommended section list:
   93.  Legacy assessment          -> Hero + Key Takeaways
   94.  Modernization strategy     -> Q&A section
   95.  Application modernization  -> Focus area card
   96.  Re-engineering             -> Focus area card
   97.  Re-platforming             -> Focus area card
   98.  Cloud migration            -> Focus area card
   99.  Architecture modernization -> Focus area card
   100. API modernization          -> Focus area card
   101. Database modernization     -> Focus area card
   102. Modernization roadmap      -> Focus area card
   103. Case studies               -> Case Studies section
   104. CTA                        -> Closing CTA section
================================================================ */

// Small dash-led eyebrow, matching the "Legacy Modernization"
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
      <span aria-hidden="true"></span>
      <span>{children}</span>
    </span>
  );
}

// Key Takeaways — same flat, typewriter-friendly string format used on
// the Data & Analytics Services page's "Why Data & Analytics Matters"
// accordion, so both pages share the identical open/close + typing
// animation instead of two different interactions.
const keyTakeaways: string[] = [
  "Assess legacy applications, technical debt, and infrastructure risk to build a clear, prioritized picture of what to modernize first and why.",
  "Modernize by re engineering, re platforming, or migrating legacy systems to modern, cloud ready architectures with minimal disruption to daily business operations.",
  "Scale by modernizing APIs, databases, and application architecture so performance, security, and delivery speed hold up as the business grows.",
];

type FocusArea = { title: string; body: string; tags: string[] };

const focusAreas: FocusArea[] = [
  {
    title: "Legacy Assessment",
    body: "Starfii's legacy assessment maps your existing applications, dependencies, and technical debt, so modernization decisions are grounded in real risk and real business impact instead of guesswork.",
    tags: ["ASSESSMENT", "TECH DEBT", "RISK"],
  },
  {
    title: "Application Modernization",
    body: "Starfii modernizes legacy applications into maintainable, cloud ready systems, preserving business logic that works while replacing what slows the business down.",
    tags: ["APPLICATIONS", "CLOUD", "MAINTAINABILITY"],
  },
  {
    title: "Re-engineering",
    body: "Starfii's re engineering practice rebuilds outdated codebases and workflows around modern languages and frameworks, improving performance without losing years of embedded business rules.",
    tags: ["RE-ENGINEERING", "REFACTORING", "PERFORMANCE"],
  },
  {
    title: "Re-platforming",
    body: "Starfii re platforms legacy systems onto modern runtime environments with targeted code changes, unlocking cloud scalability faster than a full rebuild.",
    tags: ["RE-PLATFORMING", "CLOUD", "SPEED"],
  },
  {
    title: "Cloud Migration",
    body: "Starfii plans and executes cloud migration for legacy workloads, moving applications and data to scalable infrastructure with minimal downtime and a clear rollback path.",
    tags: ["CLOUD", "MIGRATION", "INFRASTRUCTURE"],
  },
  {
    title: "Architecture Modernization",
    body: "Starfii redesigns monolithic and outdated architectures into modular, service based systems that are easier to scale, test, and extend over time.",
    tags: ["ARCHITECTURE", "MICROSERVICES", "SCALE"],
  },
  {
    title: "API Modernization",
    body: "Starfii modernizes legacy interfaces into secure, well documented APIs, so your systems can connect to partners, mobile apps, and third party platforms without added fragility.",
    tags: ["API", "INTEGRATIONS", "SECURITY"],
  },
  {
    title: "Database Modernization",
    body: "Starfii migrates and re architects legacy databases for performance, scalability, and cost efficiency, with a data migration approach that protects data integrity throughout.",
    tags: ["DATABASE", "MIGRATION", "DATA INTEGRITY"],
  },
  {
    title: "Modernization Roadmap",
    body: "Starfii builds a phased modernization roadmap that sequences assessment, migration, and re engineering work around business priorities, so value shows up early and often.",
    tags: ["ROADMAP", "STRATEGY", "PLANNING"],
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
    label: "Modernization Strategy",
    heading: "A modernization strategy sequenced around real business priorities",
    body: "Starfii builds modernization strategy and roadmaps that go beyond a technology audit to align every phase of the work with the outcomes the business actually needs, so investment lands where it matters first.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Application Modernization",
    heading: "Application modernization that keeps what works and replaces what doesn't",
    body: "Starfii's application modernization team rebuilds legacy software into maintainable, cloud ready systems, preserving proven business logic while removing the constraints that slow delivery down.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Re-engineering",
    heading: "Re engineering legacy codebases without losing years of business logic",
    body: "Starfii's re engineering practice modernizes outdated languages, frameworks, and workflows, improving performance and maintainability while carrying forward the rules the business depends on.",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Re-platforming",
    heading: "Re platforming that unlocks cloud scale faster than a full rebuild",
    body: "Starfii re platforms legacy systems onto modern runtime environments with targeted, low risk code changes, so you get cloud scalability and lower operating costs without a ground up rewrite.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Cloud Migration",
    heading: "Cloud migration planned around uptime, not just infrastructure",
    body: "Starfii plans and executes cloud migration for legacy workloads and data, minimizing downtime and business disruption while giving you a clear, tested rollback path at every stage.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
  },
];

/* ===============================================================
   IMPACT ACROSS YOUR LEGACY MODERNIZATION ECOSYSTEM
   Each item now carries a body so the section can expand in place
   like the Software & Product Engineering ecosystem accordion.
================================================================ */

type EcosystemImpact = { title: string; body: string };

const ecosystemImpact: EcosystemImpact[] = [
  {
    title: "Legacy Assessment",
    body: "Map applications, dependencies, and technical debt before committing budget. Starfii grades each system on business risk, maintenance cost, and modernization effort, so the first phase of work targets what actually holds the business back rather than what is easiest to touch.",
  },
  {
    title: "Architecture Modernization",
    body: "Break monoliths into modular, service based systems that are easier to scale, test, and extend. Starfii redesigns outdated architectures with clear service boundaries, so new features stop requiring a full regression cycle across the whole platform.",
  },
  {
    title: "API Modernization",
    body: "Replace brittle point to point integrations with secure, well documented APIs. Starfii modernizes legacy interfaces so partners, mobile apps, and third party platforms can connect in weeks instead of months, without adding fragility to the core system.",
  },
  {
    title: "Database Modernization",
    body: "Migrate and re architect legacy databases for performance, scalability, and cost. Starfii plans schema changes and data migration with integrity checks at every stage, so decades of operational data land in the new platform intact.",
  },
  {
    title: "Modernization Roadmap",
    body: "Sequence assessment, migration, and re engineering work around business priorities. Starfii builds a phased roadmap with clear milestones and rollback points, so value shows up early and each phase funds confidence in the next.",
  },
  {
    title: "Re-engineering",
    body: "Rebuild outdated codebases around modern languages and frameworks while carrying forward the business rules embedded in them. Starfii improves performance and maintainability without losing the logic your operation has depended on for years.",
  },
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
      "Starfii named a Leader in Application Modernization Services in the ISG Provider Lens® Mainframes, Services and Solutions 2026 U.S. Quadrant Report, recognizing our legacy modernization expertise.",
  },
  {
    year: "2025 Quadrant",
    category: "Digital Engineering Services",
    subcategory: "Design and Development",
    rank: "Leader, U.S.",
    description:
      "Starfii named a Leader in Design and Development (Products, Services and Experiences) in the ISG Provider Lens™ Digital Engineering Services 2025 US Quadrant Report, reflecting our modernization capability.",
  },
  {
    year: "2025 Quadrant",
    category: "Cloud and Data Engineering",
    subcategory: "Migration and Modernization",
    rank: "Leader, U.S.",
    description:
      "Starfii recognized as a Leader in Cloud and Data Engineering Migration and Modernization Services in the ISG Provider Lens™ 2025 US Quadrant Report, validating our cloud migration and re platforming services.",
  },
];

type CaseStudy = { slug: string; image: string; title: string; body: string };

const caseStudies: CaseStudy[] = [
  {
    slug: "reinsurance-mainframe-application-modernization",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Modernizes a Legacy Mainframe for a Global Reinsurer",
    body: "Explore how Starfii re engineered a decades old mainframe claims system into a modern, cloud ready platform, cutting processing time and unlocking new integrations.",
  },
  {
    slug: "regional-bank-core-banking-replatform",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Re Platforms Core Banking Systems for a Regional Bank",
    body: "See how Starfii's re platforming approach moved a legacy core banking system to the cloud with zero unplanned downtime and lower operating costs.",
  },
  {
    slug: "utilities-legacy-data-migration",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=900&auto=format&fit=crop",
    title: "Legacy Data Migration for a Utilities Provider",
    body: "Discover how Starfii migrated decades of legacy operational data into a modern database architecture, giving field teams real time visibility across the grid.",
  },
  {
    slug: "insurance-api-modernization",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Modernizes Legacy APIs for a National Insurer",
    body: "Learn how Starfii replaced brittle point to point integrations with modern, secure APIs, cutting partner onboarding time from months to weeks.",
  },
  {
    slug: "healthcare-legacy-architecture-modernization",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Modernizes a Monolithic Platform for a Healthcare Provider",
    body: "See how Starfii broke apart a legacy monolith into a modular, service based architecture that scaled to millions of users while staying HIPAA compliant.",
  },
];

type InsightPost = {
  slug: string;
  large: boolean;
  image: string;
  title: string;
  body: string;
};

// NOTE: previously these pointed at local /images/blog/*.jpg paths that
// don't exist in the project, so the cards rendered broken images.
// Swapped in real, high resolution (up to 4K wide) hosted images that
// match each post's subject, using the same trusted Unsplash source
// already used elsewhere on this page and on the Software & Product
// Engineering page.
const insights: InsightPost[] = [
  {
    slug: "legacy-modernization-with-generative-ai",
    title: "Legacy Modernization with Generative AI",
    body: "How generative AI can accelerate legacy assessment and modernization.",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=90&w=3840&auto=format&fit=crop",
    large: true,
  },
  {
    slug: "when-to-rearchitect-vs-replatform",
    title: "When to Re Architect vs Re Platform",
    body: "How to choose the right modernization path for legacy systems.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=90&w=2400&auto=format&fit=crop",
    large: false,
  },
  {
    slug: "cloud-migration-without-downtime",
    title: "Cloud Migration Without Downtime",
    body: "A practical approach to moving legacy workloads to the cloud.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=90&w=2400&auto=format&fit=crop",
    large: false,
  },
  {
    slug: "database-modernization-strategies",
    title: "Database Modernization Strategies",
    body: "Modern approaches for legacy enterprise databases.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=90&w=2400&auto=format&fit=crop",
    large: false,
  },
  {
    slug: "building-a-modernization-roadmap",
    title: "Building a Modernization Roadmap",
    body: "How to create a practical roadmap for legacy transformation.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=90&w=2400&auto=format&fit=crop",
    large: false,
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

      /* =============================================================
         PREMIUM CAPABILITIES GRID
         Exact same animation language used on the Software &
         Product Engineering capabilities cards.
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
        to   { transform: rotate(360deg); }
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

      @media (max-width: 639px) {
        .ss-capability-card {
          min-height: 350px;
        }

        .ss-capability-number {
          font-size: 88px;
        }

        .ss-capabilities-grid::before {
          background-size: 52px 52px;
        }
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
        /* Card height / description reveal stays static for reduced motion */
        .ss-case-image,
        .ss-case-desc,
        .ss-zoom-img,
        .ss-eco-panel,
        .ss-capability-card,
        .ss-capability-icon,
        .ss-capability-title,
        .ss-capability-tag {
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
   HOOK: sequential typewriter for a list of lines
   Types line 0 char-by-char, then line 1, then line 2...
   Resets to empty whenever `active` becomes false. Guarded against
   out-of-bounds reads so it can never crash if the list changes
   shape while a typing loop is still running.

   Same hook used on the Data & Analytics Services page's Key
   Takeaways accordion, so both pages animate identically.
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
   KEY TAKEAWAYS ACCORDION — "Legacy Modernization Roadmap"
   Click the header to expand/collapse. While open, each line types
   out letter by letter, one after another — identical interaction
   to the Data & Analytics Services page's Key Takeaways block, so
   both service pages feel like one consistent product.
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
          <img
            src="/starfii_logo_black.svg"
            alt="Starfii"
            className="h-10 w-20 flex-shrink-0 object-contain"
          />
          <span className="font-body text-[17px] font-semibold" style={{ color: CHAMPION_BLUE }}>
            Legacy Modernization Roadmap
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span
            className="font-body hidden rounded-full px-5 py-2.5 text-[13px] font-semibold sm:inline-flex"
            style={{ backgroundColor: "#F1EEFC", color: INDIGO_CTA }}
          >
            ASSESS • MODERNIZE • SCALE
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
   ECOSYSTEM ACCORDION
   Click the "+" and the matching content expands in place.
   Two independent columns, so opening a card on the left does not
   stretch the card sitting next to it on the right.
================================================================ */

function EcosystemAccordion(): ReactElement {
  // null = everything closed. 0 keeps the first card open by default.
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
                    aria-controls={`legacy-ecosystem-panel-${index}`}
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
                    id={`legacy-ecosystem-panel-${index}`}
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
   Moves exactly ONE card per arrow click. Supports a fractional
   perPage (e.g. 1.15 for a "peek" card) and a configurable gap,
   matching the Software & Product Engineering page.
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

  // Math.ceil so a fractional perPage still lands on a whole card
  // instead of stopping mid-card at the end of the track.
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
   SECTION
================================================================ */

export default function LegacyModernizationSection(): ReactElement {
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
          (93. Legacy assessment)
      ============================================================ */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={HERO_BACKGROUND_IMAGE}
            alt=""
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
        </div>

        <div className={`${ALIGN} py-24 lg:py-32`}>
          <nav
            aria-label="Breadcrumb"
            className="font-body flex items-center gap-2 text-[14px] font-medium opacity-0"
            style={{ color: "#FFFFFF", animation: "ss-fade-up 0.6s ease-out 0.05s forwards" }}
          >
            <a href="/" className="hover:underline">
              Home
            </a>
            <ChevronRight size={14} />
            <a href="/services" className="hover:underline">
              Services
            </a>
            <ChevronRight size={14} />
            <span className="text-white/80">Legacy Modernization</span>
          </nav>

          <div
            className="mt-8 opacity-0"
            style={{ animation: "ss-fade-up 0.65s ease-out 0.1s forwards" }}
          >
            <Eyebrow variant="dark">Legacy Modernization</Eyebrow>
          </div>

          <h1
            className={`${HERO_HEADING} mt-4 max-w-40px opacity-0`}
            style={{ color: "#FFFFFF", animation: "ss-fade-up 0.7s ease-out 0.15s forwards" }}
          >
            Legacy Modernization for Secure, Scalable Digital Platforms
          </h1>

          <p
            className="font-body mt-6 max-w-lg text-[17px] leading-relaxed text-white opacity-0"
            style={{ animation: "ss-fade-up 0.7s ease-out 0.28s forwards" }}
          >
            Starfii transforms legacy applications into secure, scalable and
            modern digital platforms with a structured modernization
            approach, from assessment through migration.
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
      (93. Legacy assessment)
  ============================================================ */}
  <Reveal as="section" className="mt-16">
    <TakeawaysAccordion
      open={takeawaysOpen}
      setOpen={setTakeawaysOpen}
    />

    <p
      className="font-heading mt-10 max-w-8xl text-[26px] leading-snug lg:text-[30px]"
      style={{ color: CHAMPION_BLUE }}
    >
      A leader in legacy modernization, Starfii assesses complex
      application portfolios and transitions them to secure, scalable
      digital platforms with minimal disruption to daily business
      operations.
    </p>
  </Reveal>

  {/* ============================================================
      Q&A BLOCK
      (94. Modernization strategy)
  ============================================================ */}
  <Reveal as="section" className="mt-20">
    <div
      className="grid grid-cols-1 items-stretch overflow-hidden rounded-2xl lg:grid-cols-2"
      style={{ backgroundColor: "#F5F3FC" }}
    >
      {/* Content */}
      <div className="flex flex-col justify-center p-10 lg:p-14">
        <Eyebrow>Modernization Strategy</Eyebrow>

        <h2
          className="font-heading mt-4 text-[26px] font-medium leading-snug lg:text-[30px]"
          style={{ color: LAVENDER_ACCENT }}
        >
          How Do Enterprises Build a Modernization Strategy That
          Sticks?
        </h2>

        <p className="font-body mt-5 text-[15px] leading-relaxed text-slate-600">
          Enterprises modernize successfully by sequencing legacy
          assessment, migration, and re engineering work around business
          priorities rather than technology alone. Starfii brings these
          together into a structured modernization strategy that reduces
          risk, controls cost, and delivers measurable value at every
          phase of the transition.
        </p>
      </div>

      {/* Image */}
      <div className="relative min-h-[320px] lg:min-h-full">
        <img
          src="https://images.unsplash.com/photo-1758691736979-ff263c04b3d1?q=80&w=1200&auto=format&fit=crop"
          alt="Two colleagues talking while walking through a modern office corridor"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 block h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
    </div>
  </Reveal>
</div>

      {/* ============================================================
          FOCUS AREAS
          (95-102. Application modernization through Modernization roadmap)
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
          <Reveal className="max-w-20px">
            <Eyebrow variant="dark">Legacy Modernization</Eyebrow>
            <h2 className={`${SECTION_HEADING} mt-4 text-white`}>
              Our Legacy Modernization Capabilities
            </h2>
            <p className="font-body mt-5 text-[15px] leading-relaxed text-white/60">
              Starfii assesses, re engineers, and migrates legacy
              applications, architectures, APIs, and databases into
              secure, scalable platforms built for long term business
              value.
            </p>
          </Reveal>

          <div className="ss-capabilities-grid mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {focusAreas.map((area, i) => (
              <Reveal key={area.title} delay={(i % 3) * 90} className="h-full">
                <div className="ss-capability-card flex h-full flex-col justify-between rounded-2xl p-8">
                  <div
                    aria-hidden="true"
                    className="ss-capability-number"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div className="relative z-10 flex items-start justify-between">
                    <span className="font-body text-[13px] font-medium tracking-[0.08em] text-white/35">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <span
                      className="ss-capability-icon flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border"
                      style={{
                        borderColor: "rgba(255,255,255,0.18)",
                        backgroundColor: "rgba(255,255,255,0.02)",
                      }}
                    >
                      <ArrowUpRight size={17} className="text-white" />
                    </span>
                  </div>

                  <div className="relative z-10 mt-14">
                    <h3 className="ss-capability-title font-heading text-[21px] font-semibold leading-snug text-white">
                      {area.title}
                    </h3>

                    <div className="ss-capability-line mt-5" />

                    <p className="font-body mt-5 text-[14px] leading-[1.75] text-white/55">
                      {area.body}
                    </p>
                  </div>

                  <div className="relative z-10 mt-8 flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
                      <span
                        key={tag}
                        className="ss-capability-tag font-body rounded-full border px-3 py-1.5 text-[10px] font-medium tracking-[0.08em] text-white/50"
                        style={{ borderColor: "rgba(255,255,255,0.16)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="ss-capability-orb" aria-hidden="true" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className={ALIGN}>
        {/* ============================================================
            TABBED DEEP-DIVE auto-advancing tab list
            (94-98. Modernization strategy through Cloud migration)
        ============================================================ */}

        <Reveal as="section" className="mt-24 pb-28">
          <Eyebrow>Legacy Modernization</Eyebrow>
          <h2 className={`${SECTION_HEADING} mt-4`} style={{ color: CHAMPION_BLUE }}>
            Legacy Modernization Services
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[320px_1fr]">
            {/* Left nav autoplaying */}
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
                    {/* Animated progress fill only rendered on the active tab,
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
          IMPACT ACROSS ECOSYSTEM (dark)
          (99-102. Architecture modernization through Modernization roadmap)
          Same accordion behaviour as the Software & Product
          Engineering page: click "+" and the content expands in place.
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
            <Eyebrow variant="dark">Architecture Modernization</Eyebrow>
            <h2 className={`${SECTION_HEADING} mt-4 max-w-2xl text-white`}>
              Impact Across Your Legacy
              <br />
              Modernization Ecosystem
            </h2>
          </Reveal>

          <EcosystemAccordion />
        </div>
      </section>

      {/* ============================================================
          CASE STUDIES
          (103. Case studies)
          Card sizing and hover behaviour now match the Software &
          Product Engineering page: 500px fixed card height, 260px
          image frame that collapses to 0 on hover, description
          sliding into the space the image gives up, 4 per row on
          desktop with a 32px gap and a peek card on mobile.
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
                    href={`/services/legacy-Modernization/casestudies/${study.slug}`}
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
      ============================================================ */}
      <section className="bg-[#EEF0F7] py-24">
        <div className={ALIGN}>
          <Reveal className="flex items-center justify-between">
            <div>
              <Eyebrow>Legacy Modernization</Eyebrow>

              <h2 className={`${SECTION_HEADING} mt-4 max-w-30px`} style={{ color: CHAMPION_BLUE }}>
                {"What's New in Legacy Modernization"}
              </h2>
            </div>

            <Link
              href="/services/legacy-Modernization/blogs"
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
                    href={`/services/legacy-Modernization/blogs/${post.slug}`}
                    className="block h-full"
                    aria-label={`Read ${post.title}`}
                  >
                    {post.large ? (
                      <div className="group relative h-[420px] overflow-hidden rounded-2xl transition-[height] duration-500 ease-in-out hover:h-[460px]">
                        <img
                          src={post.image}
                          alt={post.title}
                          loading="lazy"
                          decoding="async"
                          className="ss-zoom-img h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
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
                        <div className="h-[220px] overflow-hidden rounded-2xl transition-[height] duration-500 ease-in-out group-hover:h-[260px]">
                          <img
                            src={post.image}
                            alt={post.title}
                            loading="lazy"
                            decoding="async"
                            className="ss-zoom-img h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
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
          (104. CTA)
      ============================================================ */}
      <section id="connect" className="bg-white py-24">
        <div className={ALIGN}>
          <Reveal
            className="overflow-hidden rounded-[28px] px-8 py-16 text-center sm:px-16"
            style={{ backgroundColor: CHAMPION_BLUE }}
          >
            {/* <Eyebrow variant="dark">CTA</Eyebrow> */}
            <h2 className={`${SECTION_HEADING} mx-auto mt-4 max-w-2xl text-white`}>
              Ready to Modernize Your Legacy Systems?
            </h2>
            <p className="font-body mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/70">
              Talk to Starfii about legacy assessment, modernization
              strategy, application modernization, cloud migration, or
              re engineering an existing platform.
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
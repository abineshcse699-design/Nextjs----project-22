// Save this file as: app/services/servicenow/page.tsx
// ServiceNow ITSM — rebuilt on the same design system as
// "Software & Product Engineering" (Champion Blue / Lavender / Indigo).
// FIXED: Key Takeaways now uses the same collapsible typewriter-bullet
// accordion as the reference page (not separate icon cards), and the
// hero heading spacing now matches exactly (spacer div + mt-5 on H1).

"use client";
import { motion, type Variants } from "framer-motion";
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

import GetInTouch from "../servicenow/GetTouch";

/* ===============================================================
   NOTE ON SEO METADATA
   ------------------------------------------------------------
   This file is a Client Component ("use client"), so it cannot
   export a `metadata` object directly. Create a sibling file at
   app/services/servicenow/layout.tsx (Server Component, no
   "use client") with:

   export const metadata = {
     title: "ServiceNow ITSM Services | ServiceNow Implementation Partner – Starfii",
     description:
       "Design, implement and optimize ServiceNow solutions that modernize enterprise IT service management. Certified ServiceNow ITSM consulting, implementation, and managed support.",
     keywords: [
       "ServiceNow ITSM", "ServiceNow consulting", "ServiceNow implementation",
       "incident management", "problem management", "change management",
       "request management", "service catalog", "CMDB", "IT asset management",
       "workflow automation", "ServiceNow integrations",
       "ServiceNow custom applications", "ServiceNow optimization",
       "ServiceNow support and managed services",
     ],
     openGraph: {
       title: "ServiceNow ITSM Services | Starfii",
       description:
         "Design, implement and optimize ServiceNow solutions that modernize enterprise IT service management.",
       url: "https://www.starfii.com/services/servicenow",
       siteName: "Starfii Technology",
       type: "website",
     },
     alternates: { canonical: "https://www.starfii.com/services/servicenow" },
   };
================================================================ */

/* ===============================================================
   BRAND TOKENS  (identical to the Software & Product Engineering page)
================================================================ */

const CHAMPION_BLUE = "#1B2560";
const LAVENDER_ACCENT = "#A48FEA";
const INDIGO_CTA = "#4F3FE0";

// Shared page width wrapper, kept in sync with the navbar.
const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

// Autoplay timing for the services tab list
const TAB_AUTOPLAY_MS = 4000;

/* ===============================================================
   TYPOGRAPHY TOKENS
================================================================ */

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

/* --- Key Takeaways: same shape as the reference page (title/body) --- */
type KeyTakeaway = { title: string; body: string };

const keyTakeaways: KeyTakeaway[] = [
  {
    title: "Assess",
    body: "Review your current ITSM workflows, licensing, and technical debt, then close with a prioritized ServiceNow roadmap backed by a clear business case.",
  },
  {
    title: "Implement",
    body: "Configure incident, problem, change, and request management, service catalog, CMDB, and asset tracking against your real systems and data, with training and hypercare through go live.",
  },
  {
    title: "Operate",
    body: "Keep the instance healthy after go live with workflow tuning, license optimization, release upgrade planning, and managed support from a named ServiceNow team.",
  },
];

/* --- 143–152. The ten ITSM capabilities --------------------------
   Each card links to its own capability page. If you do not have
   those routes yet, change `href` to `#${area.slug}` and the ids
   below will act as in-page anchors instead.
------------------------------------------------------------------ */
type Capability = { slug: string; title: string; body: string };

const capabilities: Capability[] = [
  {
    slug: "incident-management",
    title: "Incident Management",
    body: "Log, prioritize, and resolve incidents through one governed queue, so nothing sits unassigned and every SLA is visible in real time.",
  },
  {
    slug: "problem-management",
    title: "Problem Management",
    body: "Trace recurring incidents back to root cause and track the fix through to closure, instead of firefighting the same issue every month.",
  },
  {
    slug: "change-management",
    title: "Change Management",
    body: "Route every change through the right approvals and risk checks automatically, so releases stay controlled without slowing teams down.",
  },
  {
    slug: "request-management",
    title: "Request Management",
    body: "Give employees a single place to ask for what they need, with status tracking that replaces email threads and follow up pings.",
  },
  {
    slug: "service-catalog",
    title: "Service Catalog",
    body: "Present every IT service as a clear, orderable item with the right approvals built in, so requesting something is a click, not a ticket essay.",
  },
  {
    slug: "cmdb",
    title: "CMDB",
    body: "Keep a live, accurate map of your infrastructure and its dependencies, so impact analysis is a lookup instead of a guess.",
  },
  {
    slug: "it-asset-management",
    title: "IT Asset Management",
    body: "Track hardware, software, and license usage against your CMDB, so renewals, audits, and spend are never a last minute scramble.",
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    body: "Automate the repetitive parts of ITSM — approvals, assignments, notifications — so your team spends time on the work that needs judgment.",
  },
  {
    slug: "integrations",
    title: "Integrations",
    body: "Connect ServiceNow ITSM to identity providers, monitoring tools, and the rest of your IT stack, so data flows in one direction, not five.",
  },
  {
    slug: "custom-applications",
    title: "Custom Applications",
    body: "For the workflows the out of the box platform does not cover, we build governed, low code applications on the same ServiceNow instance.",
  },
];

/* --- 140, 141, 153, 154 as the tabbed deep dive ------------------ */
type ServiceTab = {
  id: string;
  label: string;
  heading: string;
  body: string;
  image: string;
};

const tabs: ServiceTab[] = [
  {
    id: "consulting",
    label: "ServiceNow Consulting",
    heading: "Start with a clear picture of where ITSM stands today",
    body: "Our ServiceNow consulting engagement reviews your current workflows, licensing, and technical debt, runs a gap analysis against ServiceNow ITSM best practice, and closes with a prioritized roadmap. We assess how incidents, requests, problems, changes, assets, and service data are currently managed to identify process gaps and areas where the platform can create more value. Every implementation decision is backed by a business case, including which modules to adopt first and in what order. The result is a practical roadmap that connects ServiceNow capabilities to measurable operational priorities while avoiding unnecessary customization and complexity.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "implementation",
    label: "ServiceNow Implementation",
    heading: "A ServiceNow ITSM build that matches how your teams actually work",
    body: "Certified engineers configure incident, problem, change, and request management, set up the service catalog, CMDB, and IT asset management against your real data, and integrate your identity provider, monitoring tools, and business systems. We configure workflows, assignment rules, approvals, notifications, SLAs, roles, and service experiences around your organization's operating model rather than relying on a generic setup. Admin and end user training plus hypercare carry the platform through go live, so it is adopted and not just switched on. This approach gives teams a structured ITSM foundation that can scale as processes, users, and service requirements evolve.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "optimization",
    label: "Optimization",
    heading: "ITSM that keeps getting better after go live",
    body: "A ServiceNow instance drifts out of shape as teams, ticket volumes, and priorities change. We run regular health checks against resolution time, escalations, and backlog age, tune workflows, optimize licences so you pay for what teams actually use, and plan release upgrades so the instance stays current without disruption. We also review configurations, automation, integrations, service catalog experiences, reporting, and platform usage to identify areas for continuous improvement. This ongoing optimization helps reduce unnecessary complexity, improve service performance, and ensure the platform continues to support changing business and IT requirements.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "support",
    label: "Support & Managed Services",
    heading: "A team that knows your instance, on call when you need them",
    body: "Our ServiceNow ITSM managed support covers day to day break fix, release upgrades, and platform governance with defined response times. You get a named team that knows your configuration rather than a rotating help desk, and support tiers that flex from break fix to fully managed operations. We monitor platform health, troubleshoot workflow and integration issues, support configuration changes, and help maintain reliable day to day service operations. As your environment grows, the team can also support enhancements, automation improvements, governance activities, and ongoing platform maintenance so your ServiceNow investment continues to deliver value.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
  },
];



type EcosystemImpact = { title: string; body: string };

const ecosystemImpact: EcosystemImpact[] = [
  {
    title: "Employee Service Experience",
    body: "A single portal where employees raise requests, track status, and find answers, backed by a catalog and knowledge base that reduce ticket volume instead of just routing it faster.",
  },
  {
    title: "Governance and Compliance",
    body: "Approval chains, audit trails, and risk checks built into every change and request, so compliance evidence is a report rather than a month of manual collection.",
  },
  {
    title: "Platform Architecture",
    body: "Instance strategy, domain separation, and scoped applications designed so your ServiceNow estate stays upgradable as more business functions move onto it.",
  },
  {
    title: "Data and Reporting",
    body: "Dashboards built on clean CMDB and ticket data, so service owners see resolution time, backlog age, and escalation trends without exporting anything to a spreadsheet.",
  },
  {
    title: "Integration Layer",
    body: "IntegrationHub and API design that connect ServiceNow to identity, monitoring, HR, and finance systems, keeping one source of truth across the stack.",
  },
  {
    title: "Adoption and Enablement",
    body: "Admin, fulfiller, and end user enablement plus governance forums that keep configuration discipline in place long after the implementation team has moved on.",
  },
];

type CaseStudy = { slug: string; image: string; title: string; body: string };

const caseStudies: CaseStudy[] = [
  {
    slug: "servicenow-fso-insurance-servicing",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=900&auto=format&fit=crop",
    title: "How Starfii and ServiceNow FSO Are Reimagining Insurance Servicing",
    body: "Explore how Starfii used ServiceNow Financial Services Operations to automate servicing workflows and cut handoffs for a global insurer.",
  },
  {
    slug: "unified-itsm-rollout-incident-resolution",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=900&auto=format&fit=crop",
    title: "Cutting Incident Resolution Time by 40% with a Unified ITSM Rollout",
    body: "See how one governed incident queue, tuned priorities, and automated assignment took a scattered support model down to a single SLA backed process.",
  },
  {
    slug: "cmdb-discovery-modernization",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=900&auto=format&fit=crop",
    title: "Rebuilding a CMDB Enterprises Could Finally Trust",
    body: "Discovery, data governance, and dependency mapping turned an outdated CMDB into the foundation for impact analysis and change risk scoring.",
  },
  {
    slug: "service-catalog-employee-requests",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=900&auto=format&fit=crop",
    title: "A Service Catalog That Took Email Out of IT Requests",
    body: "Learn how a redesigned catalog with built in approvals moved thousands of monthly requests off inboxes and into a tracked, auditable workflow.",
  },
  {
    slug: "managed-servicenow-operations",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=900&auto=format&fit=crop",
    title: "Managed ServiceNow Operations for a Fortune 500 IT Estate",
    body: "See how a named support team handled release upgrades, governance, and day to day fixes while internal IT focused on new capability.",
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
    slug: "ai-agents-in-servicenow-itsm",
    large: true,
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200&auto=format&fit=crop",
    title:
      "AI in ServiceNow ITSM: Smarter Triage, Faster Resolution, Fewer Repeat Tickets",
    body: "How virtual agents, predictive intelligence, and AI assisted knowledge change the economics of an IT service desk without losing governance.",
  },
  {
    slug: "cmdb-data-quality-playbook",
    large: false,
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
    title: "The CMDB Data Quality Playbook",
    body: "Discovery alone will not fix a CMDB. A practical model for ownership, health scoring, and the remediation loop that keeps records accurate.",
  },
  {
    slug: "change-management-without-slowing-releases",
    large: false,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
    title: "Change Management That Does Not Slow Releases Down",
    body: "Risk scoring, standard change templates, and automated approvals let controlled change coexist with a weekly release cadence.",
  },
  {
    slug: "servicenow-licence-optimization",
    large: false,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    title: "Where ServiceNow Licence Spend Actually Goes",
    body: "A breakdown of fulfiller versus requester usage, common overprovisioning patterns, and how to right size before your next renewal.",
  },
  {
    slug: "planning-servicenow-release-upgrades",
    large: false,
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format&fit=crop",
    title: "Planning ServiceNow Release Upgrades With Zero Drama",
    body: "Regression scope, customization debt, and a test plan that makes each family release routine instead of a quarterly emergency.",
  },
];

/* ===============================================================
   STRUCTURED DATA (JSON-LD)
================================================================ */

const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "ServiceNow ITSM Implementation and Consulting",
  provider: {
    "@type": "Organization",
    name: "Starfii Technology",
    url: "https://www.starfii.com/",
  },
  areaServed: "Worldwide",
  description:
    "Design, implement and optimize ServiceNow solutions that modernize enterprise IT service management, covering incident, problem, change, and request management, service catalog, CMDB, IT asset management, workflow automation, integrations, and custom applications.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "ServiceNow ITSM Services",
    itemListElement: capabilities.map((c) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: c.title,
        description: c.body,
      },
    })),
  },
};

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
      /* Typewriter cursor blink for Key Takeaways */
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
      .ss-caret {
        animation: ss-caret-blink 0.9s steps(1) infinite;
      }

      /* =============================================================
         HERO — hardened stacking context so nothing (analytics
         widgets, other fixed/absolute overlays elsewhere in the app)
         can render on top of or bleed into the hero image + copy.
      ============================================================= */
      .ss-hero {
        isolation: isolate;
        position: relative;
        z-index: 0;
      }
      .ss-hero-bg {
        position: absolute;
        inset: 0;
        z-index: 0;
      }
      .ss-hero-content {
        position: relative;
        z-index: 10;
      }

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

      /* In-page anchor highlight for the ITSM capability deep links */
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
   (identical to the reference page — powers the Key Takeaways
   bullet-by-bullet reveal)
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
   KEY TAKEAWAYS ACCORDION — collapsible + typewriter reveal
   (this now matches the reference page's component exactly)
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
          <span
            aria-hidden="true"
            className="relative inline-flex h-7 w-7 flex-shrink-0 items-center justify-center"
            style={{ color: INDIGO_CTA }}
          >
            <svg
              viewBox="0 0 32 32"
              className="h-7 w-7"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M16 1.5 19.2 12.8 30.5 16l-11.3 3.2L16 30.5l-3.2-11.3L1.5 16l11.3-3.2L16 1.5Z" />
            </svg>
            <svg
              viewBox="0 0 20 20"
              className="absolute -bottom-1 -right-1 h-3.5 w-3.5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10 1.5 11.35 8.65 18.5 10l-7.15 1.35L10 18.5l-1.35-7.15L1.5 10l7.15-1.35L10 1.5Z" />
            </svg>
          </span>
          <span className="font-body text-[17px] font-semibold" style={{ color: INDIGO_CTA }}>
            Key Takeaways
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span
            className="font-body hidden rounded-full px-5 py-2.5 text-[13px] font-semibold sm:inline-flex"
            style={{ backgroundColor: "#F1EEFC", color: INDIGO_CTA }}
          >
            CONSULTING • IMPLEMENTATION • OPTIMIZATION • SUPPORT
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
   ECOSYSTEM ACCORDION (dark section)
================================================================ */

function EcosystemAccordion(): ReactElement {
   const [openIndex, setOpenIndex] = useState<number | null>(null);

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
                    aria-controls={`ecosystem-panel-${index}`}
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
    backgroundColor: INDIGO_CTA,
    color: "#FFFFFF",
  }}
>
  {isOpen ? <Minus size={18} /> : <Plus size={18} />}
</span>
                  </button>

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
   PAGE
   ------------------------------------------------------------
   Site-map outline (items 139–156) maps to this page as:

     139 ServiceNow overview          -> #overview  (hero)
     140 ServiceNow consulting        -> #consulting        (tab)
     141 ServiceNow implementation    -> #implementation    (tab)
     142 ITSM                         -> #itsm  (capability grid)
     143–152 the ten capabilities     -> #incident-management … #custom-applications
     153 Optimization                 -> #optimization      (tab)
     154 Support and managed services -> #support           (tab)
     155 Case studies                 -> #case-studies
     156 CTA                          -> #connect
================================================================ */

export default function ServiceNowITSMPage(): ReactElement {
  const [takeawaysOpen, setTakeawaysOpen] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [tabHovered, setTabHovered] = useState(false);
  const current = tabs[activeTab];

  // Autoplay for the left-side tab list
  useEffect(() => {
    if (tabHovered) return undefined;
    const id = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, TAB_AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [tabHovered, activeTab]);

  // Deep links such as /services/servicenow#optimization open that tab
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

      {/* JSON-LD structured data — read by search + AI answer engines. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSON_LD) }}
      />

      {/* ============================================================
          139. HERO — breadcrumb + full-bleed image
          `.ss-hero` establishes its own stacking context (isolation:
          isolate) so nothing else in the app can render on top of or
          bleed into this section. Spacing now matches the reference
          page exactly: an empty spacer div (mt-10) followed by the
          H1 with mt-5, instead of a single mt-10 on the H1.
      ============================================================ */}
  <section
  id="overview"
  className="ss-hero min-h-[460px] overflow-hidden lg:min-h-[620px]"
>
  <div className="ss-hero-bg">
    <img
      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=85&w=2000&auto=format&fit=crop"
      alt="IT service management team reviewing ServiceNow dashboards"
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

  <div
    className={`${ALIGN} ss-hero-content flex min-h-[460px] items-center lg:min-h-[620px]`}
  >
    <div className="w-full max-w-[760px] py-10 lg:py-12">
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
        <span className="text-white/60">ServiceNow</span>
      </nav>

      {/* Main heading */}
      <h1
        className="font-heading mt-5 max-w-[760px] text-[32px] font-medium leading-[1.1] tracking-[-0.025em] text-white opacity-0 sm:text-[38px] lg:text-[44px] xl:text-[48px]"
        style={{ animation: "ss-fade-up 0.7s ease-out 0.15s forwards" }}
      >
        ServiceNow ITSM Services for Modern Enterprises
      </h1>

      <p
        className="font-body mt-5 max-w-[650px] text-[16px] leading-[1.7] text-white/90 opacity-0 sm:text-[17px]"
        style={{ animation: "ss-fade-up 0.7s ease-out 0.28s forwards" }}
      >
        Starfii designs, implements and optimizes ServiceNow solutions
        that modernize enterprise IT service management, from incident
        and change management to CMDB, workflow automation, and custom
        applications.
      </p>

      <a
        href="#connect"
        className="font-body mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-semibold opacity-0 transition-all duration-300 hover:scale-[1.03] hover:bg-white/90"
        style={{
          color: INDIGO_CTA,
          animation: "ss-fade-up 0.7s ease-out 0.4s forwards",
        }}
      >
        Talk to a ServiceNow expert
        <ArrowUpRight size={17} />
      </a>
    </div>
  </div>
</section>

      <div className={ALIGN}>
        {/* ============================================================
            KEY TAKEAWAYS — collapsible, typewriter bullets
            (matches the reference page's component and sizing)
        ============================================================ */}
        <Reveal as="section" className="mt-16">
          <KeyTakeawaysAccordion open={takeawaysOpen} setOpen={setTakeawaysOpen} />

          <p
            className="font-heading mt-10 max-w-6xl text-[26px] leading-snug lg:text-[30px]"
            style={{ color: CHAMPION_BLUE }}
          >
            A certified ServiceNow implementation partner, Starfii delivers
            the full ITSM lifecycle on a single instance, so service
            workflows, assets, and data stay governed as the business
            grows.
          </p>
        </Reveal>

        {/* ============================================================
            Q&A BLOCK
        ============================================================ */}
        <Reveal as="section" className="mb-20 mt-20 lg:mb-24">
          {/* <div className="group grid grid-cols-1 items-stretch overflow-hidden rounded-lg bg-[#F5F3FC] transition-colors duration-500 ease-out hover:bg-[#EAE4FA] lg:grid-cols-2"> */}

          <div className="group grid grid-cols-1 items-stretch overflow-hidden rounded-[20px] bg-[#F5F3FC] transition-colors duration-500 ease-out hover:bg-[#EAE4FA] lg:grid-cols-2">
            <div className="flex flex-col justify-center p-10 transition-transform duration-500 ease-out group-hover:translate-x-2 lg:p-14">
            

                <h2
                className={`${SECTION_HEADING} mt-4 max-w-500`}
                style={{ color: CHAMPION_BLUE }}
              >
                {"How Do Enterprises Modernize IT Service Management With ServiceNow?"}
              </h2>
              <p className="font-body mt-5 text-[17px] leading-relaxed text-slate-600 lg:text-[18px]">
                They consolidate scattered queues, spreadsheets, and inboxes
                onto one governed platform, then automate the repetitive
                work around them. Starfii assesses the current estate,
                configures ITSM against how teams actually work, connects it
                to the wider IT stack, and supports the instance after go
                live, so service quality improves without adding headcount.
              </p>
            </div>

            <div className="relative min-h-[320px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop"
                alt="Colleagues reviewing an IT service management roadmap"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full transform-gpu object-cover transition-transform duration-700 will-change-transform group-hover:scale-110"
              />
            </div>
          </div>
        </Reveal>
      </div>

      {/* ============================================================
          142. ITSM + 143–152. The ten capabilities
      ============================================================ */}


<section
  id="itsm"
  className="relative scroll-mt-28 bg-white py-24 lg:py-28"
>
        <div className={`relative ${ALIGN}`}>
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[380px_1fr] lg:gap-14 xl:grid-cols-[420px_1fr]">
<div className="relative self-start lg:sticky lg:top-28">
  <Reveal>
    <h2 className={`${SECTION_HEADING} mt-4 max-w-500`} style={{ color: CHAMPION_BLUE }}>
      {"Our ServiceNow ITSM Capabilities"}
    </h2>
    <p className="font-body mt-5 max-w-md text-[15px] leading-relaxed text-slate-600 sm:text-[16px]">
      From incident and problem management through to CMDB, asset
      tracking, and custom applications, every capability below is
      delivered by the same certified ServiceNow team, on the same
      platform conventions.
    </p>
  </Reveal>
</div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {capabilities.map((area, i) => (
                <Reveal key={area.slug} delay={(i % 4) * 90} className="h-full">
                  <Link
                    id={area.slug}
                    href={`/services/servicenow/capabilities/${area.slug}`}
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
            140, 141, 153, 154 — tabbed deep dive, auto-advancing
        ============================================================ */}
        <Reveal as="section" className="mt-24 pb-28">
          {/* <Eyebrow>ServiceNow Services</Eyebrow> */}
          <h2
            className={`${SECTION_HEADING} mt-4 font-bold`}
            style={{ color: CHAMPION_BLUE }}
          >
            How We Deliver ServiceNow
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
  className="font-body block py-4 pl-5 text-left text-[19px] transition-colors duration-200 sm:text-[20px]"
  style={{
    color: isActive ? CHAMPION_BLUE : "#94A3B8",
    fontWeight: isActive ? 600 : 400,
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
  className="font-heading text-[26px] font-medium leading-snug sm:text-[28px]"
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
            {/* <Eyebrow variant="dark">Enterprise Service Management</Eyebrow> */}
            <h2 className={`${SECTION_HEADING} mt-4 max-w-6xl text-white`}>
              Impact Across Your
              <br />
              ServiceNow Ecosystem
            </h2>
          </Reveal>

          <EcosystemAccordion />
        </div>
      </section>

      {/* ============================================================
          155. CASE STUDIES
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
              {/* <Eyebrow>Case Studies</Eyebrow> */}
              <h2 className={`${SECTION_HEADING} mt-4`} style={{ color: CHAMPION_BLUE }}>
                How teams put ServiceNow ITSM to work
              </h2>
            </div>
            <Link
              href="/services/servicenow/casestudies"
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
              gap={32}
              arrowVariant="light"
              renderItem={(study, i) => (
                <Reveal delay={(i % 3) * 90} className="h-full">
                  <Link
                    href={`/services/servicenow/casestudies/${study.slug}`}
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

                        <p className="ss-case-desc font-body max-h-0 -translate-y-2 text-[15px] leading-relaxed text-slate-500 opacity-0 transition-all duration-[800ms] ease-in-out group-hover:max-h-40 group-hover:translate-y-0 group-hover:opacity-100">
                          {study.body}
                        </p>
                      </div>

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
        </div>
      </section>

      {/* ============================================================
          INSIGHTS / WHAT'S NEW
      ============================================================ */}
      <section className="bg-[#EEF0F7] py-24">
        <div className={ALIGN}>
          <Reveal className="flex items-center justify-between">
            <div>
              {/* <Eyebrow>ServiceNow</Eyebrow> */}
              <h2
                className={`${SECTION_HEADING} mt-4 max-w-500`}
                style={{ color: CHAMPION_BLUE }}
              >
                {"What's New in ServiceNow ITSM"}
              </h2>
            </div>

            <Link
              href="/services/servicenow/blogs"
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
                    href={`/services/servicenow/blogs/${post.slug}`}
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
          156. CLOSING CTA
      ============================================================ */}
     


<GetInTouch />

    </main>
  );
}
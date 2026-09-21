//  Transportation & Logistics -- page  (/industries/transportation-logistics)
//  Same design system as the "Banking" page
//  (Champion Blue / Lavender / Indigo, light theme).

"use client";
import Link from "next/link";
// NOTE: adjust this path to wherever GetTouch lives relative to this file.
import GetInTouch from "../transport/getintouch";
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
================================================================ */

const CHAMPION_BLUE = "#1B2560";
const LAVENDER_ACCENT = "#A48FEA";
const INDIGO_CTA = "#4F3FE0";

const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";
const TAB_AUTOPLAY_MS = 4000;
const CARD_GAP = 32;

const SECTION_HEADING =
  "font-heading font-medium leading-[1.15] text-[34px] sm:text-[40px] lg:text-[46px]";

/* ---------------------------------------------------------------
   ROUTES — must match the actual folders on disk.
---------------------------------------------------------------- */
// const CASE_STUDY_BASE = "/industries/transport/casestudies";
// const CAPABILITY_BASE = "/industries/transportation-logistics/capabilities";


// Must match the real folder name on disk (your folder = "transport")
const TL_BASE = "/industries/transport";
const CASE_STUDY_BASE = TL_BASE;
const CASE_STUDY_LIST = `${TL_BASE}#case-studies`;
const CAPABILITY_BASE = `${TL_BASE}/capabilities`;

/* ===============================================================
   CONTENT
   Page 26 — Transportation & Logistics  (/industries/transportation-logistics)
   293. Industry challenges  -> Hero + Key Takeaways + Q&A block
   294. Logistics platforms  -> Capability card + tab
   295. Supply chain         -> Capability card + tab
   296. Fleet and operations -> Capability card + tab
   297. Tracking and visibility -> Capability card + tab
   298. AI                   -> Capability card + tab
   299. Data and analytics   -> Capability card + tab
   300. Mobile applications  -> Capability card + tab
   301. Cloud                -> Capability card + tab
   302. Use cases            -> Use Cases accordion (dark)
   303. Case studies         -> Case Studies section
   304. CTA                  -> Closing CTA (GetInTouch)
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

/* --- FAQ --------------------------------------------------------- */
type Faq = { question: string; answer: string };

const faqs: Faq[] = [
  {
    question:
      "How does Starfii help logistics companies modernize their platforms without disrupting operations?",
    answer:
      "Starfii modernizes logistics platforms in phases instead of a single big bang replacement. We wrap legacy systems with APIs, move workloads in priority order, and run old and new components side by side until each step is validated. This keeps shipments, dispatch, and daily operations moving while the business shifts to a more scalable, connected foundation.",
  },
  {
    question: "How can real time tracking improve visibility across shipments and fleets?",
    answer:
      "Starfii connects tracking signals, shipment information, and operational events into a single view. Teams and customers see where things are, exceptions are flagged early, and response times improve because everyone works from the same trusted information.",
  },
  {
    question: "How does Starfii apply AI in transportation and logistics?",
    answer:
      "Starfii applies AI to areas such as demand insights, exception detection, document processing, customer assistance, and operational decision support. Every solution is built with governance, security, and human oversight, so decisions can be reviewed and trusted by the teams who rely on them.",
  },
  {
    question: "How does Starfii help improve supply chain visibility?",
    answer:
      "We connect supplier, inventory, order, warehouse, transportation, and fulfillment information across systems. Digital experiences and analytics help teams coordinate decisions and respond to change sooner across complex, multi party supply chains.",
  },
  {
    question: "How do data and analytics help logistics teams make better decisions?",
    answer:
      "We bring shipment, fleet, customer, supply chain, and operational data into governed platforms. On top of that, we build dashboards, reporting, and analytics that give teams a trusted, near real time view of performance, exceptions, and opportunities.",
  },
  {
    question: "How does Starfii approach mobile applications for drivers and field teams?",
    answer:
      "Starfii designs secure mobile experiences that connect drivers, field teams, dispatchers, and customers with schedules, tasks, tracking, and communication. Apps are built for reliability in the field, with workflows that keep information flowing back to operations without extra effort.",
  },
  {
    question: "How do you approach cloud migration for logistics workloads?",
    answer:
      "We plan staged migrations that start with the workloads where cloud delivers the most resilience and scalability. Integration, observability, data controls, and governance are designed together, so logistics technology can scale reliably without disrupting the operations it supports.",
  },
  {
    question:
      "How can we get started with Starfii on a transportation and logistics technology initiative?",
    answer:
      "Reach out through the Connect Now button and our team will set up a discovery conversation to understand your priorities, current systems, and operational needs. From there, we propose a phased roadmap with clear milestones, so you see value early and scale with confidence.",
  },
];

const keyTakeaways = [
  {
    title: "Modernize",
    body: "Starfii helps transportation and logistics organizations modernize platforms, applications, and operations with secure, scalable technology built for complex networks.",
  },
  {
    title: "Connect",
    body: "We connect supply chains, fleets, tracking, and data into one operational view, so every shipment, route, and decision feels visible, timely, and coordinated.",
  },
  {
    title: "Optimize",
    body: "Our capabilities span AI, analytics, mobile applications, and cloud, so logistics teams reduce manual effort and delay while they keep pace with rising customer expectations.",
  },
];

/* --- 294–301. The eight logistics capabilities ------------------ */
type Capability = { slug: string; title: string; body: string };

const capabilities: Capability[] = [
  {
    slug: "logistics-platforms",
    title: "Logistics Platforms",
    body: "Starfii modernizes platforms that connect shipments, orders, carriers, customers, and assets, on a scalable foundation with secure integrations.",
  },
  {
    slug: "supply-chain",
    title: "Supply Chain",
    body: "We connect supplier, inventory, order, warehouse, and transportation information so teams can coordinate decisions and respond to change.",
  },
  {
    slug: "fleet-and-operations",
    title: "Fleet and Operations",
    body: "Starfii builds connected experiences for fleet management, dispatch, maintenance, scheduling, and driver workflows, giving operations clearer daily control.",
  },
  {
    slug: "tracking-and-visibility",
    title: "Tracking and Visibility",
    body: "We connect tracking signals, shipment information, and operational events into clear visibility and faster exception response.",
  },
  {
    slug: "ai",
    title: "AI",
    body: "Starfii applies AI to demand insights, exception detection, document processing, and decision support, with governance and human oversight built in.",
  },
  {
    slug: "data-and-analytics",
    title: "Data and Analytics",
    body: "We bring shipment, fleet, customer, and supply chain data together through governed dashboards, reporting, and analytics that teams can act on.",
  },
  {
    slug: "mobile-applications",
    title: "Mobile Applications",
    body: "Starfii designs secure mobile experiences for drivers, field teams, customers, and dispatchers, connecting people with schedules, tasks, and tracking.",
  },
  {
    slug: "cloud",
    title: "Cloud",
    body: "We modernize logistics applications and workloads in secure cloud environments, improving resilience and scalability while daily operations keep running.",
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
    id: "logistics-platforms",
    label: "Logistics Platforms",
    heading: "Connected logistics platforms for complex operations",
    body: "Starfii modernizes platforms that connect shipments, orders, carriers, customers, assets, and operational teams. We use scalable architecture and secure integrations, so new capabilities reach the business quickly without disrupting the operations that depend on them.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "supply-chain",
    label: "Supply Chain",
    heading: "Supply chain technology built for end to end visibility",
    body: "We connect supplier, inventory, order, warehouse, transportation, and fulfillment information so teams can coordinate decisions and respond to change. A shared view across systems helps organizations spot issues sooner and keep goods moving.",
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "fleet-and-operations",
    label: "Fleet and Operations",
    heading: "Digital fleet and operations solutions that improve control",
    body: "Starfii builds connected experiences for fleet management, dispatch, maintenance, scheduling, driver workflows, and service operations. Operations teams get clearer daily control, and drivers get the information they need in the moment.",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "tracking-and-visibility",
    label: "Tracking and Visibility",
    heading: "Real time tracking and visibility across logistics journeys",
    body: "We connect tracking signals, shipment information, operational events, and customer facing experiences to create clearer visibility. Exceptions surface faster, teams respond sooner, and customers stay informed from pickup to delivery.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "ai",
    label: "AI",
    heading: "AI for smarter logistics decisions and operations",
    body: "Starfii applies AI to demand insights, operational support, exception detection, document processing, customer assistance, and decision support. Solutions are built with governance and human oversight, so teams can trust and review what the models recommend.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "data-and-analytics",
    label: "Data and Analytics",
    heading: "Logistics data and analytics that turn signals into action",
    body: "Starfii brings shipment, fleet, customer, supply chain, and operational data together through governed dashboards, reporting, and analytics. Teams gain a clearer view of performance and exceptions, and act on it faster.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "mobile-applications",
    label: "Mobile Applications",
    heading: "Mobile applications for connected transportation workflows",
    body: "We design secure mobile experiences for drivers, field teams, customers, dispatchers, and operations. These apps connect people with schedules, tasks, and tracking, and keep information flowing back to the business in real time.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "cloud",
    label: "Cloud",
    heading: "Cloud foundations for resilient logistics technology",
    body: "Starfii modernizes applications and workloads in secure cloud environments, with strong integration, observability, resilience, data controls, and governance. Organizations modernize step by step while daily operations keep running.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
  },
];

/* --- 302. Use cases --------------------------------------------- */
type UseCase = { title: string; body: string };

const useCases: UseCase[] = [
  {
    title: "Shipment and Order Visibility",
    body: "See every journey. Starfii connects shipment, order, carrier, tracking, and customer information into a consistent view of logistics journeys and exceptions.",
  },
  {
    title: "Fleet Management",
    body: "Run the fleet with confidence. Starfii digitizes scheduling, dispatch, maintenance, driver workflows, and fleet information to support coordinated daily operations.",
  },
  {
    title: "Last Mile Delivery",
    body: "Deliver the final mile smoothly. Starfii connects delivery planning, mobile workflows, tracking, customer communication, and proof of delivery experiences.",
  },
  {
    title: "Supply Chain Analytics",
    body: "Turn data into direction. Starfii brings supply chain and operational data together for dashboards, reporting, performance insights, and decision support.",
  },
  {
    title: "Logistics Workflow Automation",
    body: "Make routine work routine. Starfii automates repetitive processes across documentation, approvals, exception handling, notifications, and service workflows.",
  },
  {
    title: "Connected Driver Experiences",
    body: "Keep drivers in the loop. Starfii gives drivers and field teams mobile access to schedules, tasks, communication, tracking, and operational updates.",
  },
];

/* ===============================================================
   CASE STUDIES
   NOTE: add a `slug` to each entry once the matching entry exists
   in data/case-studies.tsx. Without a slug the card links to the
   case studies listing page instead of a 404.
================================================================ */

// type CaseStudy = { slug?: string; image: string; title: string; body: string };
type CaseStudy = { slug: string; image: string; title: string; body: string };

const caseStudies: CaseStudy[] = [
  {
    slug: "logistics-connected-platform-modernization",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Modernizes a Connected Logistics Platform",
    body: "A digital modernization program connected logistics workflows, applications, and data around a scalable operational technology foundation.",
  },
  {
    slug: "logistics-end-to-end-operational-visibility",
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Creates End to End Operational Visibility",
    body: "Tracking, data integration, and analytics capabilities connected fragmented operational information into clearer visibility.",
  },
  {
    slug: "logistics-mobile-and-cloud-services",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Builds Modern Mobile and Cloud Services",
    body: "Mobile application engineering and cloud modernization created a stronger foundation for connected transportation workflows.",
  },
  {
    slug: "logistics-last-mile-delivery-optimization",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Optimizes Last Mile Delivery Operations",
    body: "Connected delivery planning, mobile workflows, and customer communication improved last mile reliability and customer experience.",
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
          <span
            aria-hidden="true"
            className="relative inline-flex h-8 w-8 flex-shrink-0 items-center justify-center"
            style={{ color: INDIGO_CTA }}
          >
            <svg viewBox="0 0 32 32" className="h-8 w-8" fill="currentColor" aria-hidden="true">
              <path d="M16 1.5C16.7 8.9 18.1 13.2 21.1 14.9C22.8 16 27.1 16 30.5 16C23.1 16.7 18.8 18.1 17.1 21.1C16 22.8 16 27.1 16 30.5C15.3 23.1 13.9 18.8 10.9 17.1C9.2 16 4.9 16 1.5 16C8.9 15.3 13.2 13.9 14.9 10.9C16 9.2 16 4.9 16 1.5Z" />
            </svg>
            <svg
              viewBox="0 0 20 20"
              className="absolute bottom-0 right-0 h-3.5 w-3.5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10 1.5C10.35 6.15 11.15 8.1 12.9 9.05C13.85 9.55 15.8 9.65 18.5 10C15.8 10.35 13.85 10.45 12.9 10.95C11.15 11.9 10.35 13.85 10 18.5C9.65 13.85 8.85 11.9 7.1 10.95C6.15 10.45 4.2 10.35 1.5 10C4.2 9.65 6.15 9.55 7.1 9.05C8.85 8.1 9.65 6.15 10 1.5Z" />
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
            PLATFORMS • TRACKING • DATA • AI
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
   USE CASES ACCORDION
================================================================ */

function UseCasesAccordion(): ReactElement {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const columns: { item: UseCase; index: number }[][] = [[], []];
  useCases.forEach((item, index) => {
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
                    aria-controls={`tl-usecase-panel-${index}`}
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
  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-white transition-transform duration-300"
  style={{
    backgroundColor: INDIGO_CTA,
    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
  }}
>
  {isOpen ? <Minus size={18} /> : <Plus size={18} />}
</span>
                  </button>

                  <div
                    id={`tl-usecase-panel-${index}`}
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
   FAQ SECTION
================================================================ */

function FaqAccordion(): ReactElement {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-4">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;

        return (
          <Reveal key={faq.question} delay={(i % 5) * 70}>
            <div
              className="overflow-hidden rounded-xl bg-white transition-shadow duration-300 hover:shadow-[0_10px_30px_rgba(27,37,96,0.08)]"
              style={{
                border: `1px solid ${isOpen ? LAVENDER_ACCENT : "#E8EAF2"}`,
              }}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`tl-faq-panel-${i}`}
                id={`tl-faq-button-${i}`}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left sm:px-10"
              >
                <span
                  className="font-body text-[16px] font-medium leading-snug sm:text-[18px]"
                  style={{ color: CHAMPION_BLUE }}
                >
                  {faq.question}
                </span>

                <span
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-white transition-transform duration-300"
                  style={{
                    backgroundColor: INDIGO_CTA,
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>

              <div
                id={`tl-faq-panel-${i}`}
                role="region"
                aria-labelledby={`tl-faq-button-${i}`}
                className="ss-eco-panel grid transition-all duration-500 ease-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <p
                    className="font-body px-6 pb-7 text-[15px] leading-[1.8] text-slate-600 transition-opacity duration-500 sm:px-10 sm:text-[16px]"
                    style={{ opacity: isOpen ? 1 : 0 }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

/* ===============================================================
   PAGE
================================================================ */

export default function TransportationLogisticsSection(): ReactElement {
  const [takeawaysOpen, setTakeawaysOpen] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [tabHovered, setTabHovered] = useState(false);
  const current = tabs[activeTab] ?? tabs[0]!;

  // Autoplay for the left-side tab list
  useEffect(() => {
    if (tabHovered) return undefined;
    const id = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, TAB_AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [tabHovered, activeTab]);

  // Deep links such as ...#tracking-and-visibility open that tab
  useEffect(() => {
    const hash = window.location.hash.replace("#", "").replace(/^tab-/, "");
    const index = tabs.findIndex((t) => t.id === hash);
    if (index >= 0) {
      setActiveTab(index);
      setTabHovered(true);
    }
  }, []);

  return (
    <main className="bg-white">
      <AnimationStyles />

      {/* ============================================================
          HERO  (293. Industry challenges)
      ============================================================ */}
      <section className="relative isolate min-h-[460px] overflow-hidden lg:min-h-[620px]">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=85&w=2000&auto=format&fit=crop"
            alt="Transportation and logistics operations"
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

        <div className={`${ALIGN} relative flex min-h-[460px] items-center lg:min-h-[620px]`}>
          <div className="w-full max-w-[760px] py-10 lg:py-12">
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
              <a href="/industries" className="transition-opacity hover:opacity-70">
                Industries
              </a>
              <ChevronRight size={14} />
              <span className="text-white/60">Transportation &amp; Logistics</span>
            </nav>

            <h1
              className="font-heading mt-5 max-w-[760px] text-[32px] font-medium leading-[1.1] tracking-[-0.025em] text-white opacity-0 sm:text-[38px] lg:text-[44px] xl:text-[48px]"
              style={{ animation: "ss-fade-up 0.7s ease-out 0.15s forwards" }}
            >
              Transportation &amp; Logistics Technology Solutions
            </h1>

            <p
              className="font-body mt-5 max-w-[650px] text-[16px] leading-[1.7] text-white/90 opacity-0 sm:text-[17px]"
              style={{ animation: "ss-fade-up 0.7s ease-out 0.28s forwards" }}
            >
              Intelligent digital platforms for logistics, transportation,
              supply chains and operational visibility.
            </p>

            <a
              href="#connect"
              className="font-body mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-semibold opacity-0 transition-all duration-300 hover:scale-[1.03] hover:bg-white/90"
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
            KEY TAKEAWAYS
        ============================================================ */}
        <Reveal as="section" className="mt-16">
          <KeyTakeawaysAccordion open={takeawaysOpen} setOpen={setTakeawaysOpen} />

          <p
            className="font-heading mt-10 max-w-6xl text-[26px] leading-snug lg:text-[30px]"
            style={{ color: CHAMPION_BLUE }}
          >
            Starfii helps transportation and logistics organizations connect
            platforms, supply chains, fleets, and data, modernizing
            operations so they can deliver greater visibility and efficiency
            across every journey.
          </p>
        </Reveal>

        {/* ============================================================
            Q&A BLOCK  (293. Industry challenges)
        ============================================================ */}
        <Reveal as="section" className="mb-20 mt-20 lg:mb-24">
          <div className="group grid grid-cols-1 items-stretch overflow-hidden rounded-lg bg-[#F5F3FC] transition-colors duration-500 ease-out hover:bg-[#EAE4FA] lg:grid-cols-2">
            <div className="flex flex-col justify-center p-10 transition-transform duration-500 ease-out group-hover:translate-x-2 lg:p-14">
              <h2
                className={`${SECTION_HEADING} mt-4 max-w-500`}
                style={{ color: CHAMPION_BLUE }}
              >
                {"What Challenges Do Transportation and Logistics Companies Face in Modernizing Their Technology?"}
              </h2>

              <p className="font-body mt-5 text-[17px] leading-relaxed text-slate-600 lg:text-[18px]">
                Transportation and logistics organizations balance complex
                supply chains, fleet and operational demands, rising customer
                expectations, fragmented systems, real time visibility needs,
                and constant pressure to improve efficiency. Starfii
                addresses these together with logistics platforms, supply
                chain technology, fleet operations, tracking, AI, analytics,
                mobile applications, and cloud capabilities.
              </p>
            </div>

            <div className="relative min-h-[320px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200&auto=format&fit=crop"
                alt="Transportation fleet on the road"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full transform-gpu object-cover transition-transform duration-700 will-change-transform group-hover:scale-110"
              />
            </div>
          </div>
        </Reveal>
      </div>

      {/* ============================================================
          CAPABILITIES  (294–301. Logistics platforms through Cloud)
      ============================================================ */}
      <section
        id="capabilities"
        className="relative scroll-mt-28 bg-white py-24 lg:py-28"
      >
        <div className={`relative ${ALIGN}`}>
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[380px_1fr] lg:gap-14 xl:grid-cols-[420px_1fr]">
            <Reveal className="self-start lg:sticky lg:top-28">
              {/* <Eyebrow variant="light">{"Transportation & Logistics"}</Eyebrow> */}

              <h2
                className={`${SECTION_HEADING} mt-4 max-w-500`}
                style={{ color: CHAMPION_BLUE }}
              >
                {"Our Transportation & Logistics Capabilities"}
              </h2>

              <p className="font-body mt-5 max-w-md text-[15px] leading-relaxed text-slate-600 sm:text-[16px]">
                Starfii covers the full logistics technology landscape, from
                platforms, supply chain, and fleet operations to tracking,
                data, AI, mobile, and cloud, so organizations can modernize
                with confidence.
              </p>
            </Reveal>

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
            TABBED DEEP-DIVE  (294–301)
        ============================================================ */}
        <Reveal as="section" className="mt-24 pb-28">
          {/* <Eyebrow>{"Transportation & Logistics"}</Eyebrow> */}
          <h2
            className={`${SECTION_HEADING} mt-4 font-bold`}
            style={{ color: CHAMPION_BLUE }}
          >
            {"Transportation & Logistics Services"}
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[320px_1fr]">
            <ul
              className="space-y-1 border-l"
              style={{ borderColor: "#E5E1F5" }}
              onMouseEnter={() => setTabHovered(true)}
              onMouseLeave={() => setTabHovered(false)}
            >
              {tabs.map((tab, i) => {
                const isActive = i === activeTab;
                return (
                  <li key={tab.label} id={`tab-${tab.id}`} className="relative -ml-px scroll-mt-28">
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
          USE CASES (dark)  (302. Use cases) — click "+" to expand
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
            {/* <Eyebrow variant="dark">Use Cases</Eyebrow> */}
            <h2 className={`${SECTION_HEADING} mt-4 max-w-6xl text-white`}>
              Transportation &amp; Logistics Use Cases
              <br />
              Across Every Operation
            </h2>
          </Reveal>

          <UseCasesAccordion />
        </div>
      </section>

      {/* ============================================================
          CASE STUDIES  (303. Case studies)
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
                {"Transportation & Logistics Case Studies"}
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
              itemsPerPage={{ mobile: 1.15, tablet: 2, desktop: 3 }}
              gap={CARD_GAP}
              arrowVariant="light"
              renderItem={(study, i) => (
                <Reveal delay={(i % 3) * 90} className="h-full">
                  <Link
                    href={
                      study.slug
                        ? `${CASE_STUDY_BASE}/${study.slug}`
                        : CASE_STUDY_BASE
                    }
                    aria-label={`Read case study: ${study.title}`}
                    className="group flex h-[500px] flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_2px_rgba(15,23,42,0.06)] transition-shadow duration-500 ease-out hover:shadow-[0_18px_40px_rgba(15,23,42,0.14)]"
                    style={{ border: "1px solid #E5E1F5" }}
                  >
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
                          className="font-heading ss-clamp-2 shrink-0 text-[20px] font-semibold leading-snug"
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
          FAQ  (Frequently Asked Questions)
      ============================================================ */}
      <section
        id="faq"
        className="scroll-mt-28 py-24 lg:py-28"
        style={{ backgroundColor: "#EEF0F5" }}
      >
        <div className={ALIGN}>
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[380px_1fr] lg:gap-16 xl:grid-cols-[440px_1fr]">
            <Reveal className="self-start lg:sticky lg:top-28">
              <h2
                className={SECTION_HEADING}
                style={{ color: CHAMPION_BLUE }}
              >
                Frequently Asked Questions
              </h2>
            </Reveal>

            <FaqAccordion />
          </div>
        </div>

        {/* SEO: FAQ structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.answer },
              })),
            }),
          }}
        />
      </section>

      {/* ============================================================
          304 — CTA
      ============================================================ */}
      <section id="connect" className="scroll-mt-24">
        <GetInTouch />
      </section>
    </main>
  );
}
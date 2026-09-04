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
   Kept identical to the Digital & Software Services page so every
   service page in the family shares one visual system.
   Primary   Champion Blue  #1B2560
   Secondary Lavender       #ECE7FB (surface) / #A48FEA (accent)
================================================================ */

const CHAMPION_BLUE = "#1B2560";
const LAVENDER_ACCENT = "#A48FEA";
const INDIGO_CTA = "#4F3FE0"; // circular "+" / arrow buttons on dark sections

const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

// Autoplay timing for the "How It Works" tab list
const TAB_AUTOPLAY_MS = 4000;

/* ===============================================================
   CONTENT — AI Voice Call
   SEO / AEO optimized: entity first statements ("Starfii is...",
   "Starfii offers..."), keyword rich but natural, no hyphens.
================================================================ */

const keyTakeaways: string[] = [
  "Starfii is an AI voice call company that helps businesses transform customer communication with natural, intelligent voice agents.",
  "We build AI powered voice agents that understand natural language, respond in real time, and take action across customer and business workflows.",
  "Our AI Voice Call solutions cover inbound support, lead qualification, appointment scheduling, follow ups, and proactive outreach around the clock.",
  "We connect voice AI with CRM, telephony, and business systems so every conversation becomes a consistent, actionable customer experience.",
];

type FocusArea = { title: string; body: string; tags: string[] };

const focusAreas: FocusArea[] = [
  {
    title: "Conversational AI",
    body: "Starfii's conversational AI engages customers through natural, context aware voice conversations that understand intent, questions, and conversational flow rather than rigid menus.",
    tags: ["NLU", "VOICE", "REAL TIME"],
  },
  {
    title: "Inbound Call Automation",
    body: "Our inbound call automation handles high volume customer support, FAQs, order updates, service requests, bookings, and account enquiries without added headcount.",
    tags: ["SUPPORT", "IVR", "SCALE"],
  },
  {
    title: "Outbound AI Calling",
    body: "Starfii automates proactive customer conversations for follow ups, reminders, renewals, surveys, lead engagement, and service notifications at any volume.",
    tags: ["OUTREACH", "SALES", "RETENTION"],
  },
  {
    title: "Intelligent Call Routing",
    body: "Our AI understands customer intent in the moment and intelligently routes complex, sensitive, or high value conversations to the right human agent.",
    tags: ["ROUTING", "INTENT", "ESCALATION"],
  },
  {
    title: "CRM & Business Integration",
    body: "Starfii connects voice interactions with your CRM, helpdesk, telephony, databases, knowledge systems, and business applications for a single source of truth.",
    tags: ["CRM", "APIS", "TELEPHONY"],
  },
  {
    title: "Real Time Call Intelligence",
    body: "Every conversation is turned into actionable insight, surfacing intent, sentiment, and outcomes that help teams continuously improve customer experience.",
    tags: ["ANALYTICS", "SENTIMENT", "INSIGHTS"],
  },
  {
    title: "Human Handoff",
    body: "Starfii's voice agents transition customers to human agents seamlessly whenever expertise, empathy, or additional support is required, with full context passed along.",
    tags: ["HANDOFF", "CONTEXT", "CX"],
  },
  {
    title: "Personalized Voice Experiences",
    body: "We deliver relevant conversations using customer context, business rules, and real time information, so every call feels considered rather than scripted.",
    tags: ["PERSONALIZATION", "CONTEXT", "CX"],
  },
  {
    title: "Multilingual Voice Support",
    body: "Starfii's voice agents converse fluently across multiple languages and accents, letting global and regional businesses serve every customer in their own language.",
    tags: ["LANGUAGE", "GLOBAL", "ACCESSIBILITY"],
  },
  {
    title: "IVR Modernization",
    body: "We replace rigid, menu driven IVR systems with conversational voice agents that resolve requests faster and reduce abandoned calls.",
    tags: ["IVR", "MODERNIZATION", "UX"],
  },
  {
    title: "Voice QA & Compliance",
    body: "Starfii builds call recording, monitoring, and compliance workflows into every voice deployment, so regulated industries stay audit ready by design.",
    tags: ["COMPLIANCE", "QA", "SECURITY"],
  },
  {
    title: "Speech Analytics & Reporting",
    body: "Our speech analytics surfaces trends across thousands of calls, giving leaders a clear, ongoing view of customer sentiment and agent performance.",
    tags: ["SPEECH AI", "REPORTING", "TRENDS"],
  },
];

type ProcessTab = {
  label: string;
  heading: string;
  body: string;
  image: string;
};

const tabs: ProcessTab[] = [
  {
    label: "Discover Customer Journeys",
    heading: "Understanding the conversations that matter most",
    body: "Starfii studies your customer journeys, call volumes, business objectives, and existing systems to identify the voice interactions that will deliver the greatest impact first.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Design Conversation Flows",
    heading: "Conversation design built around real customer intent",
    body: "We create tailored conversation flows, AI behaviours, business rules, and escalation paths, so the voice agent sounds considered rather than scripted from the first call.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Integrate with Your Systems",
    heading: "Connected to the systems your teams already rely on",
    body: "Starfii connects the AI voice solution to your CRM, telephony infrastructure, knowledge base, APIs, and other business systems, so conversations turn into action automatically.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Launch with Confidence",
    heading: "Tested, monitored, and ready for real customers",
    body: "Every deployment is tested, refined, and launched with appropriate monitoring and human escalation built in, so the customer experience stays reliable from day one.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Optimize Every Conversation",
    heading: "Improving with every conversation, not just at launch",
    body: "Starfii continuously analyzes conversation outcomes and performance to improve accuracy, resolution, customer experience, and operational efficiency over time.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
  },
];

type EcosystemImpact = { title: string };

const ecosystemImpact: EcosystemImpact[] = [
  { title: "Customer Support at Scale" },
  { title: "Lead Qualification and Sales Enablement" },
  { title: "Appointment Scheduling and Reminders" },
  { title: "Customer Feedback and Retention" },
  { title: "Proactive Outreach and Notifications" },
  { title: "Real Time Conversation Intelligence" },
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
      "Starfii named a Leader in Application Modernization Services in the ISG Provider Lens® Mainframes, Services and Solutions 2026 U.S. Quadrant Report, reflecting the same engineering discipline behind our AI voice platform.",
  },
  {
    year: "2025 Quadrant",
    category: "Digital Engineering Services",
    subcategory: "Design and Development",
    rank: "Leader, U.S.",
    description:
      "Starfii named a Leader in Design and Development (Products, Services and Experiences) in the ISG Provider Lens™ Digital Engineering Services 2025 US Quadrant Report, the practice our conversational AI teams build on.",
  },
  {
    year: "2025 Quadrant",
    category: "Cloud and Data Engineering",
    subcategory: "Migration and Modernization",
    rank: "Leader, U.S.",
    description:
      "Starfii recognized as a Leader in Cloud and Data Engineering Migration and Modernization Services in the ISG Provider Lens™ 2025 US Quadrant Report, the same cloud foundation our voice AI runs on at scale.",
  },
];

type CaseStudy = { slug: string; image: string; title: string; body: string };

const caseStudies: CaseStudy[] = [
  {
    slug: "regional-bank-ai-voice-support",
    image:
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Cuts Wait Times for a Regional Bank with AI Voice Support",
    body: "Explore how Starfii's AI voice agents resolved routine banking enquiries instantly, freeing human agents for complex disputes and high value conversations.",
  },
  {
    slug: "insurer-outbound-renewal-calling",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Automates Renewal Outreach for a National Insurer",
    body: "See how outbound AI calling lifted renewal contact rates while giving agents a prioritized list of customers who actually needed a human conversation.",
  },
  {
    slug: "healthcare-appointment-voice-agent",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Builds a Voice Agent for Healthcare Appointment Management",
    body: "Learn how a conversational voice agent let patients book, confirm, and reschedule appointments naturally, cutting missed appointment rates.",
  },
  {
    slug: "retail-ecommerce-order-support-voice",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Deploys Always On Order Support for a Retail Brand",
    body: "Discover how AI voice call automation handled order status, returns, and delivery updates around the clock during peak retail seasons.",
  },
  {
    slug: "telecom-intelligent-call-routing",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Modernizes IVR with Intelligent Call Routing for a Telecom Provider",
    body: "See how replacing a legacy IVR with a conversational voice agent reduced call abandonment and got customers to the right team faster.",
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
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
    title:
      "AI Voice Agents in 2026: From Scripted IVR to Real Conversations",
    body: "Explore how conversational AI is replacing rigid call menus with natural voice conversations that understand intent, context, and customer history.",
  },
  {
    large: false,
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    title: "Reducing Call Abandonment with Intelligent Routing",
    body: "See how understanding intent before a call is routed keeps customers from bouncing between menus, and shortens time to resolution.",
  },
  {
    large: false,
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
    title: "What Real Time Call Intelligence Tells You About Your Customers",
    body: "Stop guessing why customers call. See how sentiment and outcome data from every conversation can guide product and service decisions.",
  },
  {
    large: false,
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format&fit=crop",
    title: "AI Voice Automation: Scaling Customer Support Without More Headcount",
    body: "Explore how AI voice agents handle repetitive customer conversations at scale while keeping human teams focused on complex and high value interactions.",
  },
  {
    large: false,
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
    title: "Voice AI Integration: Connecting Conversations to Business Workflows",
    body: "See how connecting voice agents with CRM, telephony, and business systems turns customer conversations into faster, actionable workflows.",
  },
];

type Faq = { q: string; a: string };

const faqs: Faq[] = [
  {
    q: "What is an AI Voice Call solution?",
    a: "An AI Voice Call solution uses conversational AI to conduct natural voice conversations with customers, understanding spoken requests, identifying intent, and performing business actions or escalating to a human agent when required.",
  },
  {
    q: "Can AI voice agents have natural conversations?",
    a: "Yes. Starfii's voice agents understand natural language and conversational context rather than relying only on rigid, menu based call flows, enabling more flexible customer interactions.",
  },
  {
    q: "Can AI Voice Call integrate with our existing CRM?",
    a: "Yes. AI Voice Call integrates with existing CRM platforms, helpdesks, telephony systems, databases, knowledge bases, and APIs to create connected workflows.",
  },
  {
    q: "Will AI Voice Call replace our human agents?",
    a: "No. AI handles repetitive, high volume, and routine interactions so human teams can focus on complex, sensitive, and high value customer conversations.",
  },
  {
    q: "Can AI Voice Call be used for outbound calls?",
    a: "Yes. Starfii's voice agents support outbound use cases such as lead qualification, follow ups, appointment reminders, renewals, surveys, and proactive engagement.",
  },
  {
    q: "How long does implementation take?",
    a: "Implementation depends on the number of use cases, integrations, and deployment scope. A focused use case can launch in a phased approach and expand as requirements evolve.",
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
      .ss-award-card:hover .ss-trophy { transform: rotate(-14deg) scale(1.15); }
      .ss-trophy { transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1); }

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
        display: -webkit-box; -webkit-line-clamp: 2;
        -webkit-box-orient: vertical; overflow: hidden;
      }
      .ss-clamp-3 {
        display: -webkit-box; -webkit-line-clamp: 3;
        -webkit-box-orient: vertical; overflow: hidden;
      }

      @media (prefers-reduced-motion: reduce) {
        .ss-reveal, .ss-tab-panel, .ss-drift-slow, .ss-drift-slower, .ss-arrow-pulse {
          animation: none !important; opacity: 1 !important; transform: none !important;
        }
        .ss-tab-progress-fill { animation: none !important; transform: scaleY(1) !important; }
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
   REUSABLE: StepCarousel
   Advances exactly ONE card per click while preserving the visible
   card count at each breakpoint.
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
    setPosition((current) => Math.min(current, maxPosition));
  }, [maxPosition]);

  const measureStep = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.firstElementChild as HTMLElement | null;
    if (!firstCard) {
      setStepWidth(0);
      return;
    }

    const gap = 24;
    setStepWidth(firstCard.getBoundingClientRect().width + gap);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    measureStep();

    const observer = new ResizeObserver(measureStep);
    observer.observe(track);

    const firstCard = track.firstElementChild as HTMLElement | null;
    if (firstCard) observer.observe(firstCard);

    window.addEventListener("resize", measureStep);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measureStep);
    };
  }, [measureStep, perPage, items.length]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const fallbackStep =
      track.firstElementChild instanceof HTMLElement
        ? track.firstElementChild.getBoundingClientRect().width + 24
        : 0;

    track.scrollTo({
      left: position * (stepWidth || fallbackStep),
      behavior: "smooth",
    });
  }, [position, stepWidth]);

  const goTo = (next: number) => {
    setPosition(Math.min(Math.max(next, 0), maxPosition));
  };

  const progress =
    maxPosition === 0 ? 1 : (position + 1) / (maxPosition + 1);

  const cardWidth =
    perPage > 1
      ? `calc((100% - ${(perPage - 1) * 24}px) / ${perPage})`
      : "100%";

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
            style={{ width: cardWidth }}
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
              width: `${progress * 100}%`,
              backgroundColor: INDIGO_CTA,
            }}
          />
        </div>

        <span
          className="font-body flex-shrink-0 text-[13px] font-medium tabular-nums"
          style={{ color: isDark ? "rgba(255,255,255,0.55)" : "#94A3B8" }}
        >
          {String(position + 1).padStart(2, "0")} /{" "}
          {String(maxPosition + 1).padStart(2, "0")}
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
   REUSABLE: FAQ accordion row (new — extra content for this page)
================================================================ */

function FaqRow({ item }: { item: Faq }): ReactElement {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b" style={{ borderColor: "#E5E1F5" }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span
          className="font-body text-[16px] font-semibold"
          style={{ color: CHAMPION_BLUE }}
        >
          {item.q}
        </span>
        <ChevronDown
          size={18}
          style={{ color: CHAMPION_BLUE }}
          className={`flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <p className="ss-tab-panel font-body pb-6 text-[15px] leading-relaxed text-slate-600">
          {item.a}
        </p>
      )}
    </div>
  );
}

/* ===============================================================
   SECTION
================================================================ */

export default function AIVoiceCallSection(): ReactElement {
  const [takeawaysOpen, setTakeawaysOpen] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [tabHovered, setTabHovered] = useState(false);
  const current = tabs[activeTab];

  // Autoplay for the "How It Works" tab list — advances every
  // TAB_AUTOPLAY_MS, pauses on hover, restarts on manual click.
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
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1800&auto=format&fit=crop"
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
            <span className="text-slate-500">AI Voice Call</span>
          </nav>

          <h1
            className="font-heading mt-8 max-w-xl text-[44px] font-medium leading-[1.15] opacity-0 lg:text-[54px]"
            style={{ color: CHAMPION_BLUE, animation: "ss-fade-up 0.7s ease-out 0.15s forwards" }}
          >
            AI Voice Call Solutions for Always On Customer Conversations
          </h1>

          <p
            className="font-body mt-6 max-w-lg text-[17px] leading-relaxed text-slate-600 opacity-0"
            style={{ animation: "ss-fade-up 0.7s ease-out 0.28s forwards" }}
          >
            Starfii builds intelligent voice agents that understand natural
            language, respond in real time, and take action across your
            customer and business workflows, working seamlessly with the
            systems you already run.
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
            VOICE AI INTELLIGENCE
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
                Voice AI Intelligence
              </span>

              <span
                className="font-body rounded-full px-4 py-2 text-[12px] font-semibold"
                style={{
                  backgroundColor: "#F1EEFC",
                  color: INDIGO_CTA,
                }}
              >
                Always On Conversations
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
                  Understand
                </h3>
                <p className="font-body mt-3 text-[14px] leading-relaxed text-slate-600">
                  Understand natural language, intent, and customer context
                  so conversations feel relevant rather than scripted.
                </p>
              </div>

              <div className="pt-7">
                <h3
                  className="font-heading text-[19px] font-semibold"
                  style={{ color: CHAMPION_BLUE }}
                >
                  Respond
                </h3>
                <p className="font-body mt-3 text-[14px] leading-relaxed text-slate-600">
                  Respond in real time with business aware answers, relevant
                  information, and personalized guidance.
                </p>
              </div>

              <div className="pt-7">
                <h3
                  className="font-heading text-[19px] font-semibold"
                  style={{ color: CHAMPION_BLUE }}
                >
                  Act
                </h3>
                <p className="font-body mt-3 text-[14px] leading-relaxed text-slate-600">
                  Complete tasks, update systems, route complex requests, and
                  hand conversations to people when human expertise is needed.
                </p>
              </div>
            </div>
          </div>

          <p
            className="font-heading mt-10 max-w-3xl text-[26px] leading-snug lg:text-[30px]"
            style={{ color: CHAMPION_BLUE }}
          >
            Turn every phone conversation into a faster path to resolution,
            stronger customer experiences, and measurable operational value.
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
                How Does AI Voice Call Transform Customer Conversations?
              </h2>
              <p className="font-body mt-5 text-[15px] leading-relaxed text-slate-600">
                AI Voice Call transforms customer conversations by combining
                natural language understanding, real time response, and
                direct integration with business systems. Starfii brings
                these together so voice agents handle routine enquiries
                instantly, route complex conversations to the right person,
                and turn every call into insight your teams can act on.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop"
                alt="Support agent working alongside an AI voice assistant"
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
              Our AI Voice Call Capabilities
            </h2>
            <p className="font-body mt-5 text-[15px] leading-relaxed text-white/60">
              Starfii designs, builds, and operates AI voice agents that
              connect naturally with customers and directly into the
              systems that run your business, from first hello to full
              resolution.
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
            HOW IT WORKS — auto-advancing tab list
        ============================================================ */}
        <Reveal as="section" className="mt-24 pb-28">
          <h2
            className="font-heading text-[34px] font-medium"
            style={{ color: CHAMPION_BLUE }}
          >
            How We Build Your AI Voice Call Solution
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
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ============================================================
          IMPACT ACROSS THE BUSINESS (dark)
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
              Where AI Voice Call Creates
              <br />
              the Biggest Business Impact
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
    <Reveal
      delay={(i % 3) * 90}
      className="h-full"
    >
<Link
  href={`/services/offerings/ai-native-contact-center/${study.slug}`}
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
          TESTIMONIAL (new — extra content for this page)
      ============================================================ */}
      <section className="bg-white py-24">
        <div className={ALIGN}>
          <Reveal
            className="mx-auto max-w-3xl rounded-2xl border p-10 text-center lg:p-14"
            style={{ borderColor: LAVENDER_ACCENT, backgroundColor: "#F5F3FC" }}
          >
            <p
              className="font-heading text-[22px] font-medium leading-relaxed lg:text-[26px]"
              style={{ color: CHAMPION_BLUE }}
            >
              AI Voice Call has helped us move beyond scripted interactions.
              Customers receive immediate, personalized support, while our
              teams focus their time on conversations that genuinely need
              human expertise.
            </p>
            <div className="mt-8">
              <p
                className="font-body text-[15px] font-semibold"
                style={{ color: CHAMPION_BLUE }}
              >
                Head of Customer Experience
              </p>
              <p className="font-body text-[14px] text-slate-500">
                Enterprise Client
              </p>
            </div>
          </Reveal>
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
              {"What's New in AI Voice Call"}
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
          FAQ (new — extra content for this page)
      ============================================================ */}
      <section className="bg-white py-24">
        <div className={ALIGN}>
          <Reveal>
            <h2
              className="font-heading text-[36px] font-medium lg:text-[44px]"
              style={{ color: CHAMPION_BLUE }}
            >
              Frequently Asked Questions
            </h2>
          </Reveal>

          <Reveal delay={80} className="mx-auto mt-10 max-w-3xl">
            {faqs.map((item) => (
              <FaqRow key={item.q} item={item} />
            ))}
          </Reveal>
        </div>
      </section>
    </main>
  );
}
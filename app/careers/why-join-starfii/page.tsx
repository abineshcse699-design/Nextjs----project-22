"use client";

// Why Join Starfii — rebuilt to match the Hexaware "Careers" reference
// section-for-section:
//   Hero -> Key Takeaways accordion -> Why People Choose Starfii (autoplay
//   carousel) -> Our Culture (gradient callout) -> The Starfii Advantage
//   (benefits grid) -> Your Ideas Have a Home (stats bento) ->
//   Get Started with Starfii Careers (tabbed panel) -> final CTA
//
// Shares the same visual primitives (tokens, Reveal, Eyebrow, SafeImg,
// keyframes, typewriter hook) as the About Starfii page so both feel like
// one product.
// -----------------------------------------------------------------------

import Link from "next/link";
import {
  useRef,
  useState,
  useEffect,
  type ReactNode,
  type Ref,
  type ElementType,
  type ReactElement,
  type HTMLAttributes,
  type ImgHTMLAttributes,
} from "react";
import {
  ChevronRight,
  ChevronDown,
  ArrowUpRight,
  Play,
  Rocket,
  Heart,
  Globe2,
  Sparkles,
  ShieldCheck,
  Users,
  BookOpen,
  TrendingUp,
  Scale,
  Award,
} from "lucide-react";

/* ===============================================================
   BRAND TOKENS — identical to the About Starfii page, on purpose.
================================================================ */

const CHAMPION_BLUE = "#1B2560";
const LAVENDER_ACCENT = "#A48FEA";
const INDIGO_CTA = "#4F3FE0";

const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

const SECTION_HEADING =
  "font-heading font-medium leading-[1.15] text-[34px] sm:text-[40px] lg:text-[46px]";

const TAB_AUTOPLAY_MS = 4000;

/* ===============================================================
   IMAGES — all interview-related, pinned to stable images.unsplash.com
   photo IDs (source.unsplash.com is deprecated/unreliable, so it's not
   used here).
================================================================ */

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80";

const IMAGES = {
  // Panel interview / handshake across the table — strong hero image.
  hero:
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop",
  reasons: {
    // Candidate and interviewers across the table, notes in hand.
    impact:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1600&auto=format&fit=crop",
    // Laptop video-call interview.
    aiFirst:
      "https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=1600&auto=format&fit=crop",
    // Diverse panel interview, multiple interviewers.
    global:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1600&auto=format&fit=crop",
    // One-on-one mentoring / interview conversation.
    growth:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop",
    // Handshake after interview / offer moment.
    stability:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop",
    // Group discussion / team interview round.
    culture:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
  },
  // Candid interview conversation.
  culture:
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop",
  // Resume / application review at a laptop (fallback only — each Get
  // Started tab now carries its own image).
  getStarted:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1600&auto=format&fit=crop",
};

/* ===============================================================
   GLOBAL KEYFRAMES / ANIMATION CLASSES
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
      @keyframes ss-tab-progress {
        from { transform: scaleX(0); }
        to   { transform: scaleX(1); }
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
      .ss-caret { animation: ss-caret-blink 0.9s steps(1) infinite; }

      .ss-benefit-card {
        position: relative;
        background-color: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.12);
        border-radius: 20px;
        transition:
          background-color 0.35s ease,
          transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
          box-shadow 0.35s ease;
      }
      .ss-benefit-card:hover {
        background-color: rgba(255,255,255,0.1);
        transform: translateY(-4px);
      }

      @media (prefers-reduced-motion: reduce) {
        .ss-reveal, .ss-tab-panel, .ss-drift-slow, .ss-drift-slower, .ss-caret {
          animation: none !important;
          opacity: 1 !important;
          transform: none !important;
        }
        .ss-tab-progress-fill { animation: none !important; transform: scaleX(1) !important; }
        .ss-benefit-card { transition: none !important; }
      }
    `}</style>
  );
}

/* ===============================================================
   HOOKS + REUSABLES
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
        if (entry?.isIntersecting) {
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
      setDisplayed(itemsRef.current.map(() => ""));
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

type RevealProps = {
  as?: ElementType;
  delay?: number;
  className?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLElement>;

function Reveal({ as, delay = 0, className = "", children, ...rest }: RevealProps): ReactElement {
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
      <span>{children}</span>
    </span>
  );
}

type SafeImgProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  eager?: boolean;
};

function SafeImg({ src, alt, eager = false, ...rest }: SafeImgProps): ReactElement {
  const [current, setCurrent] = useState(src);

  useEffect(() => {
    setCurrent(src);
  }, [src]);

  return (
    <img
      {...rest}
      src={current}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => {
        if (current !== FALLBACK_IMAGE) setCurrent(FALLBACK_IMAGE);
      }}
    />
  );
}

/* ===============================================================
   CONTENT
================================================================ */

const keyTakeaways = [
  "Starfii is where AI led engineering meets real enterprise problems.",
  "Every team works with AI embedded into daily workflows, not bolted on later.",
  "Career growth is structured: named managers, clear tracks, real reviews.",
  "Built on long term enterprise partnerships, not project to project churn.",
];

const reasons = [
  {
    icon: Rocket,
    title: "Work on Problems That Matter",
    image: IMAGES.reasons.impact,
    body:
      "You will build AI led products and platforms used by Fortune 500 clients across banking, healthcare, and manufacturing, not internal tooling nobody sees. Every engagement ships to production, and every release moves a metric a client actually cares about. That's the kind of work that ends up on your resume, not buried in a backlog.",
    highlights: [
      "Production systems for Fortune 500 clients, not internal tools",
      "Work measured by real business metrics, not vanity dashboards",
      "Exposure across banking, healthcare, and manufacturing domains",
    ],
  },
  {
    icon: Sparkles,
    title: "AI First, By Default",
    image: IMAGES.reasons.aiFirst,
    body:
      "Every team, engineering, delivery, operations, works with AI embedded into daily workflows, so you're building with the tools shaping the industry's next decade. You won't spend your first year catching up to what other companies already do, you'll be the one others catch up to.",
    highlights: [
      "AI embedded into daily workflows across every team",
      "Hands-on with the tools shaping the next decade of software",
      "No year-long ramp up chasing what other companies already do",
    ],
  },
  {
    icon: Globe2,
    title: "A Genuinely Global Team",
    image: IMAGES.reasons.global,
    body:
      "Starfii operates across delivery centers worldwide, giving you the chance to work with cross border teams and clients from day one. You'll pair with engineers and stakeholders across time zones, which means your perspective on how software gets built broadens fast.",
    highlights: [
      "Delivery centers spanning multiple countries and time zones",
      "Direct collaboration with global clients from day one",
      "A broader view of how software gets built, faster",
    ],
  },
  {
    icon: Heart,
    title: "Growth Without Guesswork",
    image: IMAGES.reasons.growth,
    body:
      "Clear career tracks, regular skill assessments, and a named manager accountable for your development, not a once a year review that goes nowhere. You'll always know what the next level looks like and what's standing between you and it.",
    highlights: [
      "Named manager accountable for your growth, not HR on paper",
      "Regular skill assessments instead of a once-a-year review",
      "Clear criteria for what the next level actually requires",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Stability You Can Plan Around",
    image: IMAGES.reasons.stability,
    body:
      "A company built on long term enterprise partnerships, not project to project churn, so your role isn't tied to the next quarter's pipeline. You can plan a career here, not just a next assignment.",
    highlights: [
      "Long term enterprise partnerships, not project-to-project churn",
      "Roles not tied to the next quarter's sales pipeline",
      "Room to plan a career here, not just your next assignment",
    ],
  },
  {
    icon: Users,
    title: "A Culture That Says What It Means",
    image: IMAGES.reasons.culture,
    body:
      "Direct feedback, flat escalation paths, and leadership that's reachable, not layers of process between you and a decision. If something needs to change, you'll hear it plainly, and you can say the same back.",
    highlights: [
      "Flat escalation paths, no layers between you and a decision",
      "Leadership that's reachable, not hidden behind process",
      "Direct feedback both ways, plainly and without spin",
    ],
  },
];

const advantages = [
  {
    icon: BookOpen,
    title: "Learning and Development",
    body: "A learning stipend for certifications, courses, and conferences, so skill growth isn't left to chance or your own budget.",
  },
  {
    icon: TrendingUp,
    title: "Clear Career Tracks",
    body: "Structured mentorship from senior engineers and delivery leads, paired with transparent promotion cycles and evaluation criteria.",
  },
  {
    icon: Scale,
    title: "Work Life Balance",
    body: "Flexible and hybrid work arrangements across most roles, built around how you actually work best, not a fixed office schedule.",
  },
  {
    icon: ShieldCheck,
    title: "Health and Wellness",
    body: "Comprehensive health and wellness coverage for you and your family, active from the day you join, not after a waiting period.",
  },
  {
    icon: Users,
    title: "Family Support",
    body: "Parental leave and family care support, because a demanding sprint shouldn't come at the cost of the people you go home to.",
  },
  {
    icon: Award,
    title: "Recognition That Counts",
    body: "Regular skill assessments and a named manager accountable for your growth, not a once a year form nobody reads afterward.",
  },
];

const ideaStats = [
  { value: "300+", body: "Ideas submitted through Sparkboard, our internal innovation program, since launch." },
  { value: "68%", body: "Engineers who have submitted at least one idea through Sparkboard this year." },
  { value: "14", body: "Sparkboard ideas that shipped as production features for real client platforms." },
];

const getStartedTabs = [
  {
    label: "How to Apply for Starfii Roles",
    heading: "Start Your Journey: Browse Roles and Submit Your Profile",
    body:
      "Looking to work at Starfii? Start by browsing open roles on our careers page and submitting your profile. It's the first step toward joining a team that values your judgment and invests in your growth from day one. Our application process is clear, straightforward, and respectful of your time. Every submission is reviewed by a person, not just a filter.",
    image:
      "https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=1600&auto=format&fit=crop",
  },
  {
    label: "Our Recruitment Process",
    heading: "What to Expect: A Straightforward, Honest Process",
    body:
      "After you apply, expect a short screening call, a practical technical conversation with engineers you'd actually work alongside, and a final conversation about fit and expectations on both sides. We keep the process tight, usually two to three weeks end to end, and we tell you where you stand at every step instead of leaving you guessing.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1600&auto=format&fit=crop",
  },
  {
    label: "Benefits Built Around You",
    heading: "Coverage, Flexibility, and Room to Grow",
    body:
      "We built our benefits around the things that actually affect how you work and live: comprehensive health coverage, flexible and hybrid arrangements, a real learning stipend, and structured mentorship. It's a package built for a career here, not just a job offer.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop",
  },
  {
    label: "Life at Starfii",
    heading: "A Day in the Life: What Working Here Actually Feels Like",
    body:
      "No two days look the same, but every day starts with a clear picture of what you're solving and why it matters to the client. Standups are short, decisions happen fast, and you're never more than a message away from the person who can unblock you. It's a pace built for people who like owning their work end to end.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop",
  },
  {
    label: "Diversity & Inclusion",
    heading: "A Team Built on Different Perspectives",
    body:
      "We hire across geographies, backgrounds, and career paths because the best engineering decisions come from rooms with more than one point of view. Every engineer gets the same access to hard problems, mentorship, and growth, regardless of where they joined from or what their path looked like before Starfii.",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1600&auto=format&fit=crop",
  },
  {
    label: "Your First 90 Days",
    heading: "Onboarding That Sets You Up to Contribute Fast",
    body:
      "Your first 90 days follow a structured plan: a dedicated onboarding buddy, a named manager from day one, and clear milestones so you know exactly what 'ramped up' looks like. By the end of it, you're not just settled in, you've already shipped something real.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop",
  },
];

/* ===============================================================
   1. HERO
================================================================ */

function Hero(): ReactElement {
  return (
    <section className="relative isolate min-h-[560px] overflow-hidden lg:min-h-[640px]">
      <div className="absolute inset-0 -z-10">
        <SafeImg
          src={IMAGES.hero}
          alt="Starfii team member at work"
          eager
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
          style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.16) 100%)" }}
        />
      </div>

      <div className={`${ALIGN} relative flex min-h-[560px] items-center lg:min-h-[640px]`}>
        <div className="w-full max-w-[720px] py-20 lg:py-24">
          <nav
            aria-label="Breadcrumb"
            className="font-body flex items-center gap-2 text-[14px] font-medium opacity-0"
            style={{
              color: "rgba(255,255,255,0.92)",
              animation: "ss-fade-up 0.6s ease-out 0.05s forwards",
            }}
          >
            <Link href="/" className="transition-opacity hover:opacity-70">
              Home
            </Link>
            <ChevronRight size={14} />
            <Link href="/careers" className="transition-opacity hover:opacity-70">
              Careers
            </Link>
            <ChevronRight size={14} />
            <span className="text-white/60">Why Join Starfii?</span>
          </nav>

          <h1
            className="font-heading mt-5 max-w-[640px] text-[36px] font-medium leading-[1.1] tracking-[-0.025em] text-white opacity-0 sm:text-[44px] lg:text-[52px]"
            style={{ animation: "ss-fade-up 0.7s ease-out 0.15s forwards" }}
          >
            Build Your Career at the Intersection of AI and Enterprise Impact
          </h1>

          <p
            className="font-body mt-6 max-w-[560px] text-[16px] leading-[1.7] text-white/90 opacity-0 sm:text-[17px] lg:text-[18px]"
            style={{ animation: "ss-fade-up 0.7s ease-out 0.28s forwards" }}
          >
            Starfii is where AI led engineering meets real enterprise
            problems. Join a team that builds products Fortune 500 companies
            actually run on, and grows careers just as deliberately as it
            builds software.
          </p>

          <div
            className="mt-9 flex flex-wrap items-center gap-4 opacity-0"
            style={{ animation: "ss-fade-up 0.7s ease-out 0.4s forwards" }}
          >
            <Link
              href="/careers/jobs"
              className="font-body inline-flex h-12 items-center gap-2 rounded-full px-6 text-[15px] font-semibold text-white transition-transform duration-300 hover:scale-[1.03]"
              style={{ backgroundColor: INDIGO_CTA }}
            >
              View Open Positions
              <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/careers/programs-learning"
              className="font-body inline-flex h-12 items-center gap-2 rounded-full border border-white/25 px-6 text-[15px] font-semibold text-white transition-colors duration-300 hover:bg-white/10"
            >
              Explore Learning Programs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===============================================================
   2. KEY TAKEAWAYS
================================================================ */

function KeyTakeawaysAccordion(): ReactElement {
  const [open, setOpen] = useState(true);
  const { displayed, typingIndex } = useTypewriterList(keyTakeaways, open);

  return (
    <div className={ALIGN}>
      <Reveal as="section" className="mt-14">
        <div
          className="overflow-hidden rounded-[22px] border bg-white transition-colors duration-300"
          style={{ borderColor: open ? INDIGO_CTA : LAVENDER_ACCENT }}
        >
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="flex min-h-[104px] w-full items-center justify-between gap-4 px-8 py-6 text-left lg:px-10"
            style={{ borderBottom: open ? `1px solid ${LAVENDER_ACCENT}` : "1px solid transparent" }}
          >
            <span className="font-body inline-flex items-center gap-2 text-[17px] font-semibold" style={{ color: INDIGO_CTA }}>
              <Sparkles size={16} strokeWidth={2.5} />
              Key Takeaways
            </span>

            <ChevronDown
              size={20}
              strokeWidth={2.2}
              className="flex-shrink-0 transition-transform duration-300"
              style={{ color: INDIGO_CTA, transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </button>

          <div
            className="grid transition-all duration-500 ease-out"
            style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
          >
            <div className="overflow-hidden">
              <ul className="space-y-5 px-8 py-10 lg:px-10">
                {keyTakeaways.map((bullet, i) => {
                  const text = displayed[i] ?? "";
                  if (!text && i !== 0) return null;
                  const isTyping = i === typingIndex && text.length < bullet.length;

                  return (
                    <li key={bullet} className="font-body flex gap-2 text-[15px] leading-[1.8] text-slate-600">
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
      </Reveal>
    </div>
  );
}

/* ===============================================================
   3. WHY PEOPLE CHOOSE STARFII — autoplaying carousel
================================================================ */

function ReasonsCarousel(): ReactElement {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered) return undefined;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % reasons.length);
    }, TAB_AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [hovered]);

  const current = reasons[active];
  if (!current) return <></>;

  const goPrev = () => setActive((prev) => (prev - 1 + reasons.length) % reasons.length);
  const goNext = () => setActive((prev) => (prev + 1) % reasons.length);

  return (
    <section className="py-2 lg:py-4">
      <div className={ALIGN}>
        <Reveal>
          <Eyebrow>Why Starfii</Eyebrow>
          <h2 className={`${SECTION_HEADING} mt-4`} style={{ color: CHAMPION_BLUE }}>
            Why People Choose Starfii
          </h2>
        </Reveal>

        <Reveal
          delay={100}
          className="mt-6"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div
            key={active}
            className="ss-tab-panel grid grid-cols-1 overflow-hidden rounded-lg bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)] lg:grid-cols-2"
          >
            <div className="flex flex-col justify-center p-10 lg:p-14">
              <h3 className="font-heading text-[24px] font-semibold leading-snug" style={{ color: CHAMPION_BLUE }}>
                {current.title}
              </h3>
              <p className="font-body mt-5 text-[15.5px] leading-relaxed text-slate-600">{current.body}</p>

              <ul className="mt-6 space-y-3">
                {current.highlights.map((point) => (
                  <li key={point} className="font-body flex gap-2.5 text-[14.5px] leading-relaxed text-slate-600">
                    <span
                      className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                      style={{ backgroundColor: INDIGO_CTA }}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              className="group/play relative min-h-[320px] overflow-hidden"
              aria-label={`Why Starfii: ${current.title}`}
            >
              <SafeImg
                src={current.image}
                alt={current.title}
                className="absolute inset-0 h-full w-full transform-gpu object-cover transition-transform duration-700 group-hover/play:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-xl transition-transform duration-300 group-hover/play:scale-110">
                  <Play size={22} className="ml-1" fill={INDIGO_CTA} color={INDIGO_CTA} />
                </span>
              </span>
            </button>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <div className="relative h-[3px] flex-1 overflow-hidden rounded-full" style={{ backgroundColor: "#E5E1F5" }}>
              <span
                key={`${active}-${hovered}`}
                className="ss-tab-progress-fill absolute inset-y-0 left-0 origin-left rounded-full"
                style={{
                  width: `${((active + 1) / reasons.length) * 100}%`,
                  backgroundColor: INDIGO_CTA,
                  animation: hovered ? "none" : `ss-tab-progress ${TAB_AUTOPLAY_MS}ms linear forwards`,
                  transform: hovered ? "scaleX(1)" : undefined,
                }}
              />
            </div>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous reason"
              className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border transition-colors"
              style={{ borderColor: LAVENDER_ACCENT, color: INDIGO_CTA }}
            >
              <ChevronRight size={18} className="rotate-180" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next reason"
              className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-white transition-transform hover:scale-105"
              style={{ backgroundColor: INDIGO_CTA }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ===============================================================
   4. OUR CULTURE — gradient callout card
================================================================ */

function CultureCallout(): ReactElement {
  return (
    <section className="py-20 lg:py-24">
      <div className={ALIGN}>
        <Reveal>
          <h2 className={`${SECTION_HEADING} text-center`} style={{ color: CHAMPION_BLUE }}>
            Our Culture at Starfii
          </h2>
        </Reveal>

        <Reveal
          delay={100}
          className="relative mt-14 overflow-hidden rounded-2xl"
          style={{ background: `linear-gradient(120deg, ${INDIGO_CTA} 0%, #6E7BFF 60%, #8FA8FF 100%)` }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col justify-center gap-7 p-10 lg:p-16">
              <p className="font-body text-[16px] leading-[1.8] text-white/95 sm:text-[17px]">
                At Starfii, inclusion and respect aren't programs, they're
                how we work. We're building a team that reflects the full
                range of the people who build software, and every engineer
                gets the same access to hard problems, mentorship, and
                growth, regardless of where they joined from.
              </p>
              <Link
                href="/careers/jobs"
                className="font-body inline-flex w-fit items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold transition-transform duration-300 hover:scale-[1.03]"
                style={{ color: INDIGO_CTA }}
              >
                View Open Roles
              </Link>
            </div>
            <div className="relative min-h-[280px] lg:min-h-[380px]">
              <SafeImg
                src={IMAGES.culture}
                alt="Starfii team collaborating"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ===============================================================
   5. THE STARFII ADVANTAGE — light benefits grid (Software & Product
   Engineering reference style: light gray cards, navy titles, blue
   "Learn More" links with arrow, no icons)
================================================================ */

function AdvantageGrid(): ReactElement {
  return (
    <section className="bg-white py-24">
      <div className={ALIGN}>
        <Reveal>
          <Eyebrow>Benefits</Eyebrow>
          <h2 className={`${SECTION_HEADING} mt-4`} style={{ color: CHAMPION_BLUE }}>
            The Starfii Advantage: Your Workplace Benefits
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((a, i) => (
            <Reveal
              key={a.title}
              delay={i * 70}
              className="rounded-2xl bg-[#F5F5F9] p-8 transition-transform duration-300 hover:-translate-y-1"
            >
              <h3 className="font-heading text-[20px] font-semibold leading-snug" style={{ color: CHAMPION_BLUE }}>
                {a.title}
              </h3>
              <p className="font-body mt-4 text-[15px] leading-relaxed text-slate-600">{a.body}</p>
              <Link
                href="/careers/programs-learning"
                className="font-body mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold"
                style={{ color: INDIGO_CTA }}
              >
                Learn More
                <ArrowUpRight size={14} />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===============================================================
   6. YOUR IDEAS HAVE A HOME — stats bento
================================================================ */

function IdeasStats(): ReactElement {
  return (
    <section className="bg-[#F8F8FB] py-24 lg:py-28">
      <div className={ALIGN}>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_1fr_1fr]">
          <Reveal className="rounded-2xl bg-white p-10 lg:p-12">
            <h2 className="font-heading text-[30px] font-medium leading-[1.15] lg:text-[34px]" style={{ color: CHAMPION_BLUE }}>
              Your Ideas Have a Home at Starfii
            </h2>
            <p className="font-body mt-5 text-[15px] leading-relaxed text-slate-600">
              Our Sparkboard program rewards engineers who bring ideas that
              improve how we build, ship, and support client platforms. The
              best ones don't stay slides, they get built and shipped.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-2">
            {ideaStats.map((s, i) => (
              <Reveal key={s.value} delay={i * 90} className="rounded-2xl bg-white p-10">
                <p className="font-heading text-[44px] font-bold leading-none" style={{ color: INDIGO_CTA }}>
                  {s.value}
                </p>
                <p className="font-body mt-4 text-[14.5px] leading-relaxed text-slate-600">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===============================================================
   7. GET STARTED — tabbed sidebar + content panel
================================================================ */

function GetStarted(): ReactElement {
  const [active, setActive] = useState(0);
  const current = getStartedTabs[active];
  if (!current) return <></>;

  return (
    <section className="py-24 lg:py-28">
      <div className={ALIGN}>
        <Reveal>
          <h2 className={SECTION_HEADING} style={{ color: CHAMPION_BLUE }}>
            Get Started with Starfii Careers
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[320px_1fr]">
          <Reveal delay={80}>
            <ul className="space-y-1">
              {getStartedTabs.map((tab, i) => {
                const isActive = i === active;
                return (
                  <li key={tab.label}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      className="font-body block w-full border-l-2 py-3 pl-5 text-left text-[15.5px] font-medium transition-colors duration-200"
                      style={{
                        borderColor: isActive ? INDIGO_CTA : "transparent",
                        color: isActive ? INDIGO_CTA : "#5B5D78",
                      }}
                    >
                      {tab.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={140} key={active} className="ss-tab-panel overflow-hidden rounded-lg bg-[#F8F8FB] lg:grid lg:grid-cols-2">
            <div className="flex flex-col justify-center p-10 lg:p-12">
              <h3 className="font-heading text-[22px] font-semibold leading-snug" style={{ color: CHAMPION_BLUE }}>
                {current.heading}
              </h3>
              <p className="font-body mt-5 text-[15px] leading-relaxed text-slate-600">{current.body}</p>
            </div>
            <div className="relative min-h-[260px] overflow-hidden">
              <SafeImg
                src={current.image}
                alt={current.heading}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ===============================================================
   8. FINAL CTA
================================================================ */

function FinalCta(): ReactElement {
  return (
    <section className={`${ALIGN} pb-24 lg:pb-28`}>
      <Reveal className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-[#E4E4EF] bg-[#FAFAFD] p-10 sm:flex-row sm:items-center">
        <div>
          <h3 className="font-heading text-[24px] font-semibold" style={{ color: CHAMPION_BLUE }}>
            Ready to see where you would fit?
          </h3>
          <p className="font-body mt-2 text-[14.5px] text-slate-600">
            Browse current openings across engineering, delivery, and operations.
          </p>
        </div>
        <Link
          href="/careers/jobs"
          className="font-body inline-flex h-12 shrink-0 items-center gap-2 rounded-full px-6 text-[15px] font-semibold text-white transition-transform duration-300 hover:scale-[1.03]"
          style={{ backgroundColor: INDIGO_CTA }}
        >
          View Open Positions
          <ArrowUpRight size={16} />
        </Link>
      </Reveal>
    </section>
  );
}

/* ===============================================================
   MAIN PAGE
================================================================ */

export default function WhyJoinStarfiiPage(): ReactElement {
  return (
    <main className="bg-white">
      <AnimationStyles />

      <Hero />
      <KeyTakeawaysAccordion />
      <ReasonsCarousel />
      <CultureCallout />
      <AdvantageGrid />
      <IdeasStats />
      <GetStarted />
      <FinalCta />
    </main>
  );
}
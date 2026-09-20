"use client";

// About Starfii — rebuilt on the Industry Page Template's design system,
// and matched section-for-section to the Hexaware "About" reference:
//   Hero -> Key Takeaways accordion -> intro statement + photo card ->
//   Our Guiding Principles (autoplay carousel) -> Our Responsibilities ->
//   ...Starfii-specific depth sections... -> Starfii at a Glance ->
//   Get in Touch (ConnectFormSection)
//
// This file does NOT modify the industry template. It duplicates the small
// set of shared visual primitives (tokens, Reveal, Eyebrow, SafeImg,
// keyframes, typewriter hook) so this page is self-contained and matches
// the template exactly.
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
  Play,
  ShieldCheck,
  Cpu,
  Globe2,
  Workflow,
  Rocket,
  MapPin,
  HeartHandshake,
  Leaf,
  HandHeart,
} from "lucide-react";

import ConnectFormSection from "@/app/components/Sections/ConnectFormSection";

/* ===============================================================
   BRAND TOKENS — identical to the industry template, on purpose.
================================================================ */

const CHAMPION_BLUE = "#1B2560";
const LAVENDER_ACCENT = "#A48FEA";
const INDIGO_CTA = "#4F3FE0";

const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

const SECTION_HEADING =
  "font-heading font-medium leading-[1.15] text-[34px] sm:text-[40px] lg:text-[46px]";

const TAB_AUTOPLAY_MS = 4000;

/* ===============================================================
   IMAGES
================================================================ */

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80";

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const IMAGES = {
  hero: u("1522071820081-009f0129c71c"), // team working, studio office
  introCard: "https://source.unsplash.com/1600x1000/?businesswoman,office,skyline,confident",
  principles: {
    purpose: u("1522202176988-66273c2fd55f"), // smiling colleague, laptop
    people: u("1521737711867-e3b97375f902"), // team conversation
    craft: u("1531482615713-2afd69097998"), // engineers pairing
    outcomes: u("1460925895917-afdab827c52f"), // reporting laptop
  },
  responsibilities: {
    dei: u("1521737711867-e3b97375f902"),
    esg: u("1497366811353-6870744d04b2"),
    csr: u("1521737604893-d14cc237f11d"),
  },
};

/* ===============================================================
   GLOBAL KEYFRAMES / ANIMATION CLASSES — same names/behaviour as
   the industry template so both pages feel like one product.
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

      @media (prefers-reduced-motion: reduce) {
        .ss-reveal, .ss-tab-panel, .ss-drift-slow, .ss-drift-slower, .ss-caret {
          animation: none !important;
          opacity: 1 !important;
          transform: none !important;
        }
        .ss-tab-progress-fill { animation: none !important; transform: scaleX(1) !important; }
        .ss-capability-card { transition: none !important; }
      }
    `}</style>
  );
}

/* ===============================================================
   HOOKS + REUSABLES — copied 1:1 from the industry template.
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

const glance = [
  { value: "9+", body: "Years in product engineering, a track record built one shipped release at a time." },
  { value: "120+", body: "Products shipped for founders and enterprise teams across every stage of scale." },
  { value: "40+", body: "Enterprise and SaaS clients who keep coming back for the next roadmap." },
  { value: "6", body: "Countries served by embedded pods working in sprint, not over a handoff." },
];

const keyTakeaways = [
  "Starfii is a senior product engineering partner, AI native across every engagement.",
  "We embed directly into your roadmap and sprints, not a spec and disappear vendor.",
  "Capabilities span AI & data engineering, cloud platforms, and full stack product work.",
  "120+ products shipped for 40+ enterprise and SaaS clients across 6 countries.",
];

const principles = [
  {
    label: "Our Purpose",
    image: IMAGES.principles.purpose,
    body:
      "Starfii engineers wake up with a singular purpose: turn ambiguous ideas into software people actually rely on. Our mission goes beyond billable hours, it's about the outcomes we move for the founders and enterprise teams who trust us with their roadmap. We believe great engineering should make the hard things feel inevitable, not miraculous. Every roadmap we join is judged by the outcome it moves, not the tickets it closes. Let's build something worth relying on, together.",
  },
  {
    label: "Our People",
    image: IMAGES.principles.people,
    body:
      "Every pod is staffed with senior engineers who've shipped at scale before, so you get judgment on hard, ambiguous problems, not just execution on a spec someone else wrote. We hire for people who've felt the weight of an on call pager and the pressure of a launch date, not just people who can pass a coding round. That experience shows up in how a pod runs, fewer surprises, faster unblocking, and decisions made with the bigger picture in view. It's why clients keep the same pod across releases instead of rotating through unfamiliar faces.",
  },
  {
    label: "Our Craft",
    image: IMAGES.principles.craft,
    body:
      "We design with AI from the first architecture decision, not bolted on at the end, so automation compounds across the build instead of getting patched in after launch. Craft, for us, means the boring parts get the same attention as the exciting ones, clean data models, sane error handling, tests that actually catch regressions. AI accelerates the work, but judgment decides what's worth building and what isn't. The result is software that holds up under real usage, not just a demo that impressed once.",
  },
  {
    label: "Our Accountability",
    image: IMAGES.principles.outcomes,
    body:
      "Your roadmap risk is our roadmap risk. We plan for production from day one, monitoring, security, and on call, not just a demo that only has to work once. We show up to the retro when something breaks, not just the launch party when it ships. Every engagement is measured against the outcome we committed to, and we'd rather flag a risk early than let it surface as an incident. That's what accountability looks like when it's more than a slide in a pitch deck.",
  },
];

const values = [
  {
    title: "Outcomes over output",
    body: "We measure a sprint by the metric it moved, not the tickets it closed. Every engagement starts with the business result we're accountable for, agreed upfront and revisited at every checkpoint. If a feature ships but the number doesn't move, we treat that as unfinished work, not a win to report.",
  },
  {
    title: "AI native by default",
    body: "We don't bolt AI onto finished products, we design with it from the first architecture decision, so automation compounds instead of getting patched in later. That means faster iteration loops, leaner infrastructure, and teams that spend more time on judgment calls than repetitive work.",
  },
  {
    title: "Own it like it's ours",
    body: "Your roadmap risk is our roadmap risk. We plan for production from day one: monitoring, security, and on call, not just a demo that works once. When something breaks at 2am, we're on the page, not waiting for a ticket to route to us the next morning.",
  },
  {
    title: "Senior hands, not headcount",
    body: "Every pod is staffed with engineers who've shipped at scale before, so you get judgment on ambiguous problems, not just execution on a spec. We'd rather field a smaller, sharper team than pad a roster with junior hours billed at senior rates.",
  },
];

const expertise = [
  {
    icon: Cpu,
    title: "AI & data engineering",
    body: "LLM powered products, agentic workflows, data platforms, and MLOps built for production, not demos.",
  },
  {
    icon: Globe2,
    title: "Cloud & platform engineering",
    body: "AWS, GCP, and Azure architectures designed to scale from first launch to enterprise load.",
  },
  {
    icon: ShieldCheck,
    title: "Product & full stack engineering",
    body: "Web, mobile, and backend systems built with the same rigor as an in-house senior team.",
  },
];

const delivery = [
  {
    icon: Workflow,
    title: "Embedded pods, not vendors",
    body: "We plug into your roadmap and rituals, standups, sprints, and metrics, as an extension of your team.",
  },
  {
    icon: Rocket,
    title: "Ship in weeks, not quarters",
    body: "AI accelerated engineering and reusable platform pieces get a working product in front of users fast.",
  },
  {
    icon: ShieldCheck,
    title: "Built for what happens after launch",
    body: "Monitoring, security, and on call are part of the plan from day one, not an afterthought post handoff.",
  },
];

const presence = [
  { region: "India", detail: "Engineering hubs delivering core product and platform work." },
  { region: "North America", detail: "Client-facing teams for enterprise and SaaS partnerships." },
  { region: "Middle East", detail: "Delivery support for fintech and enterprise engagements." },
];

const responsibilities = [
  {
    tag: "DEI",
    icon: HeartHandshake,
    image: IMAGES.responsibilities.dei,
    title: "To Our People: People First",
    body: "We ensure everyone we work with feels welcome, safe, and heard, respecting the engineers, clients, and partners who build alongside us.",
  },
  {
    tag: "ESG",
    icon: Leaf,
    image: IMAGES.responsibilities.esg,
    title: "To Our Planet: Sustainability",
    body: "Sustainability shapes how we run our studio and advise clients, from remote first delivery to steering builds toward efficient infrastructure.",
  },
  {
    tag: "CSR",
    icon: HandHeart,
    image: IMAGES.responsibilities.csr,
    title: "To Our Communities: Giving Back",
    body: "Putting people first means all people, including the communities around our hubs, through mentorship, fellowships, and pro bono builds.",
  },
];

/* ===============================================================
   1. HERO — matches "About Hexaware": full-bleed photo, breadcrumb,
      headline, one-line description.
================================================================ */

function Hero(): ReactElement {
  return (
       <section className="relative isolate min-h-[460px] overflow-hidden lg:min-h-[620px]">
      <div className="absolute inset-0 -z-10">
        <SafeImg
          src={IMAGES.hero}
          alt="Starfii engineers collaborating"
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

      <div className={`${ALIGN} relative flex min-h-[460px] items-start lg:min-h-[620px]`}>
        <div className="w-full max-w-[760px] pb-12 pt-[130px] lg:pb-16 lg:pt-[150px]">
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
            <span className="text-white/60">About Us</span>
          </nav>

          <h1
            className="font-heading mt-5 max-w-[760px] text-[32px] font-medium leading-[1.1] tracking-[-0.025em] text-white opacity-0 sm:text-[38px] lg:text-[44px] xl:text-[48px]"
            style={{ animation: "ss-fade-up 0.7s ease-out 0.15s forwards" }}
          >
            About Starfii
          </h1>

          <p
            className="font-body mt-5 max-w-[650px] text-[16px] leading-[1.7] text-white/90 opacity-0 sm:text-[17px]"
            style={{ animation: "ss-fade-up 0.7s ease-out 0.28s forwards" }}
          >
            Empowering clients with senior product engineering, AI native
            delivery, and solutions that drive real digital outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ===============================================================
   2. KEY TAKEAWAYS — the exact accordion pattern from the industry
      template (typewriter bullets, kicker chip, chevron toggle).
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
            <span className="font-body text-[17px] font-semibold" style={{ color: CHAMPION_BLUE }}>
              Key Takeaways
            </span>

            <div className="flex items-center gap-4">
              <span
                className="font-body hidden rounded-full px-5 py-2.5 text-[13px] font-semibold sm:inline-flex"
                style={{ backgroundColor: "#F1EEFC", color: INDIGO_CTA }}
              >
                About Starfii
              </span>
              <ChevronDown
                size={20}
                strokeWidth={2.2}
                className="flex-shrink-0 transition-transform duration-300"
                style={{ color: INDIGO_CTA, transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </div>
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
   3. INTRO STATEMENT + PHOTO CARD — matches the "Hexaware is a
      global IT services provider..." block with the split card.
================================================================ */

function IntroStatement(): ReactElement {
  return (
    <div className={ALIGN}>
      <Reveal as="section" className="mt-16">
        <h2
          className="font-heading text-[26px] leading-snug lg:text-[30px]"
          style={{ color: CHAMPION_BLUE }}
        >
          Starfii Technologies is a product engineering partner, combining AI
          with senior engineering talent to help enterprises and founders
          ship real software, not slideware.
        </h2>
      </Reveal>

      <Reveal delay={100} className="mt-10 mb-10 grid grid-cols-1 overflow-hidden rounded-lg bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)] lg:grid-cols-2 lg:mb-14">
        <div className="flex flex-col justify-start p-7 lg:p-9">
        
             <h2 className={`${SECTION_HEADING} mt-4`} style={{ color: CHAMPION_BLUE }}>
          Product Engineering  Powered by AI 
          </h2>
          <p className="font-body mt-5 text-[15.5px] leading-relaxed text-slate-600">
            Every engagement is built on one belief: that the right
            combination of engineering judgment and AI native tooling
            creates outcomes neither could reach alone. Senior talent,
            embedded delivery, and AI accelerated platforms come together
            to help enterprises and founders build, ship, and run software
            at the speed the market demands and the care their product
            deserves.
          </p>
        </div>
        <div className="relative min-h-[320px] overflow-hidden">
          <SafeImg
            src={IMAGES.introCard}
            alt="Starfii leadership at work"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </Reveal>
    </div>
  );
}

/* ===============================================================
   4. OUR GUIDING PRINCIPLES — autoplaying carousel with play button
      and horizontal progress bar + prev/next, same visual family as
      the industry template's tabbed Impact section.
================================================================ */

function GuidingPrinciples(): ReactElement {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered) return undefined;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % principles.length);
    }, TAB_AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [hovered]);

  const current = principles[active];
  if (!current) return <></>;

  const goPrev = () => setActive((prev) => (prev - 1 + principles.length) % principles.length);
  const goNext = () => setActive((prev) => (prev + 1) % principles.length);

  return (
    <section className="py-2 lg:py-4">
      <div className={ALIGN}>
        <Reveal>
          {/* <Eyebrow>Principles</Eyebrow> */}
          <h2 className={`${SECTION_HEADING} mt-4`} style={{ color: CHAMPION_BLUE }}>
            Our Guiding Principles
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
                {current.label}
              </h3>
              <p className="font-body mt-5 text-[15.5px] leading-relaxed text-slate-600">{current.body}</p>
            </div>

            <button
              type="button"
              className="group/play relative min-h-[320px] overflow-hidden"
              aria-label={`About: ${current.label}`}
            >
              <SafeImg
                src={current.image}
                alt={current.label}
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
                  width: `${((active + 1) / principles.length) * 100}%`,
                  backgroundColor: INDIGO_CTA,
                  animation: hovered ? "none" : `ss-tab-progress ${TAB_AUTOPLAY_MS}ms linear forwards`,
                  transform: hovered ? "scaleX(1)" : undefined,
                }}
              />
            </div>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous principle"
              className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border transition-colors"
              style={{ borderColor: LAVENDER_ACCENT, color: INDIGO_CTA }}
            >
              <ChevronRight size={18} className="rotate-180" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next principle"
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
   5. OUR RESPONSIBILITIES — DEI / ESG / CSR photo cards
================================================================ */

function Responsibilities(): ReactElement {
  return (
    <section className="bg-[#F8F8FB] py-24 lg:py-28">
      <div className={ALIGN}>
        <Reveal>
          <h2 className={`${SECTION_HEADING}`} style={{ color: CHAMPION_BLUE }}>
            Our Responsibilities
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {responsibilities.map((r, i) => (
            <Reveal
              key={r.tag}
              delay={i * 90}
              className="group overflow-hidden rounded-2xl bg-white transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="relative h-[220px] overflow-hidden">
                <SafeImg
                  src={r.image}
                  alt={r.title}
                  className="absolute inset-0 h-full w-full transform-gpu object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <span className="font-body inline-flex items-center gap-1.5 text-[13px] font-semibold" style={{ color: INDIGO_CTA }}>
                  <r.icon size={14} strokeWidth={2.5} />
                  {r.tag}
                </span>
                <h3 className="font-heading mt-3 text-[20px] font-semibold leading-snug" style={{ color: CHAMPION_BLUE }}>
                  {r.title}
                </h3>
                <p className="font-body mt-3 text-[14.5px] leading-relaxed text-slate-600">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===============================================================
   6. VALUES — dark, blob-lit section (same treatment as the
      industry template's Capabilities accordion background).
================================================================ */

function Values(): ReactElement {
  return (
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
          background: "radial-gradient(60% 80% at 0% 100%, rgba(63,90,214,0.35) 0%, rgba(8,7,15,0) 70%)",
        }}
      />

      <div className={`relative ${ALIGN}`}>
        <Reveal>
          {/* <Eyebrow variant="dark">Values</Eyebrow> */}
          <h2 className={`${SECTION_HEADING} mt-4 text-white`}>
            Four principles every engagement is held to.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className="rounded-2xl bg-white p-8 transition-shadow duration-300 hover:shadow-xl">
                <h3 className="font-heading text-[19px] font-medium" style={{ color: CHAMPION_BLUE }}>
                  {v.title}
                </h3>
                <p className="font-body mt-3 text-[15px] leading-[1.75] text-slate-600">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===============================================================
   7. TECHNOLOGY EXPERTISE + DELIVERY APPROACH
================================================================ */

function ExpertiseAndDelivery(): ReactElement {
  return (
    <section className="py-24 lg:py-28">
      <div className={ALIGN}>
        <Reveal>
          {/* <Eyebrow>Technology Expertise</Eyebrow> */}
          <h2 className={`${SECTION_HEADING} mt-4`} style={{ color: CHAMPION_BLUE }}>
            Deep enough in each stack to be trusted with the hard parts.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {expertise.map((e, i) => (
            <Reveal key={e.title} delay={i * 80} className="ss-capability-card p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-full" style={{ backgroundColor: INDIGO_CTA }}>
                <e.icon size={20} className="text-white" strokeWidth={2.25} />
              </div>
              <h3 className="font-heading mt-5 text-[19px] font-medium" style={{ color: CHAMPION_BLUE }}>
                {e.title}
              </h3>
              <p className="font-body mt-3 text-[15px] leading-[1.75] text-slate-600">{e.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-24">
          {/* <Eyebrow>Delivery Approach</Eyebrow> */}
          <h2 className={`${SECTION_HEADING} mt-4`} style={{ color: CHAMPION_BLUE }}>
            How an engagement actually runs, week to week.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {delivery.map((d, i) => (
            <Reveal key={d.title} delay={i * 80} className="ss-capability-card p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-full" style={{ backgroundColor: INDIGO_CTA }}>
                <d.icon size={20} className="text-white" strokeWidth={2.25} />
              </div>
              <h3 className="font-heading mt-5 text-[19px] font-medium" style={{ color: CHAMPION_BLUE }}>
                {d.title}
              </h3>
              <p className="font-body mt-3 text-[15px] leading-[1.75] text-slate-600">{d.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===============================================================
   8. STARFII AT A GLANCE — plain big-number section
================================================================ */

function AtAGlance(): ReactElement {
  return (
    <section className="bg-[#F8F8FB] py-24 lg:py-28">
      <div className={ALIGN}>
        <Reveal>
          <h2 className={`${SECTION_HEADING}`} style={{ color: CHAMPION_BLUE }}>
            Starfii at a Glance
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-14 lg:grid-cols-4">
          {glance.map((g, i) => (
            <Reveal key={g.value} delay={i * 90}>
              <p className="font-heading text-[46px] font-bold leading-none sm:text-[54px]" style={{ color: CHAMPION_BLUE }}>
                {g.value}
              </p>
              <p className="font-body mt-4 max-w-[240px] text-[15px] leading-relaxed text-slate-600">{g.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===============================================================
   9. GLOBAL PRESENCE
================================================================ */

function GlobalPresence(): ReactElement {
  return (
    <section className="py-24 lg:py-28">
      <div className={ALIGN}>
        <Reveal>
          {/* <Eyebrow>Global Presence</Eyebrow> */}
          <h2 className={`${SECTION_HEADING} mt-4`} style={{ color: CHAMPION_BLUE }}>
            Serving clients across 6 countries and counting.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {presence.map((p, i) => (
            <Reveal key={p.region} delay={i * 90} className="ss-capability-card p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-full" style={{ backgroundColor: INDIGO_CTA }}>
                <MapPin size={20} className="text-white" strokeWidth={2.25} />
              </div>
              <h3 className="font-heading mt-5 text-[19px] font-medium" style={{ color: CHAMPION_BLUE }}>
                {p.region}
              </h3>
              <p className="font-body mt-3 text-[15px] leading-[1.75] text-slate-600">{p.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===============================================================
   MAIN PAGE
================================================================ */

export default function AboutStarfiiPage(): ReactElement {
  return (
    <main className="bg-white">
      <AnimationStyles />

      <Hero />
      <KeyTakeawaysAccordion />
      <IntroStatement />
      <GuidingPrinciples />
      <Responsibilities />
      <Values />
      <ExpertiseAndDelivery />
      <AtAGlance />
      <GlobalPresence />
      <ConnectFormSection />
    </main>
  );
}
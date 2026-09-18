// Industry Page Template
// -----------------------------------------------------------------
// Changes from the previous version:
//   1. REMOVED  -> Solutions section (StepCarousel case-study cards)
//   2. REMOVED  -> Insights section ("What's New in ...")
//   3. REMOVED  -> Final CTA section ("Ready to Build Better Software ...")
//      ...plus every helper that only existed for them
//      (Carousel, StepCarousel, useItemsPerPage, ChevronLeft import,
//       ss-case-* / ss-zoom-img keyframes).
//   4. ADDED    -> One image pool per industry slug, so /industries/finance
//      and /industries/insurance render completely different, on-topic
//      photography. To swap in your own assets, only edit IMAGE_POOLS.
//   5. ADDED    -> <SafeImg>, so any broken/blocked image URL silently
//      falls back instead of showing a torn-image icon.
//   6. FIXED    -> Stat strip no longer lets the hero photo peek through
//      the card gaps/corners (was transparent before, now sits on a
//      solid white rounded panel).
//   7. ADDED    -> "Learn More" link + hover underline on Focus Area
//      cards, matching the Data & Analytics page's capability cards.
//   8. FIXED    -> Focus Areas section no longer has `overflow-hidden`
//      on its outer <section>. That class turned the section into a
//      scroll container, and `position: sticky` sticks relative to the
//      nearest scroll container — so with overflow-hidden present, the
//      sticky left column (heading/description) could never actually
//      stick while the right-hand card grid scrolled past it. Removing
//      it restores the sticky-left / scrolling-right behavior.
//
// data.ts does NOT need to change. `solutions` and `insights` are still
// part of the type, they are just no longer rendered.
// -----------------------------------------------------------------

"use client";

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
  Plus,
  Minus,
} from "lucide-react";

// Contact form, rendered as the last section (right after the FAQ).
// Adjust this path to wherever the file actually lives in your project,
// e.g. "@/components/sections/ConnectFormSection".
import ConnectFormSection from "@/components/Sections/ConnectFormSection";

/* ===============================================================
   BRAND TOKENS
================================================================ */

const CHAMPION_BLUE = "#1B2560";
const LAVENDER_ACCENT = "#A48FEA";
const INDIGO_CTA = "#4F3FE0";

const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

const TAB_AUTOPLAY_MS = 4000;

const SECTION_HEADING =
  "font-heading font-medium leading-[1.15] text-[34px] sm:text-[40px] lg:text-[46px]";

/* ===============================================================
   TYPES  (unchanged — data.ts stays as it is)
================================================================ */

export type IndustryStat = { value: string; label: string };
export type IndustryCapability = { title: string; description: string };
export type IndustrySolution = { title: string; description: string };
export type IndustryFocusArea = { title: string; description: string };
export type IndustryImpactPoint = { label: string; body: string };
export type IndustryInsight = { tag: string; title: string; blurb: string };
export type IndustryFaq = { question: string; answer: string };

export type IndustryContent = {
  slug: string;
  name: string;
  kicker: string;
  headline: string;
  description: string;
  stats: IndustryStat[];
  keyTakeaway: string;
  highlight: { title: string; body: string };
  focusAreas: IndustryFocusArea[];
  impactPoints: IndustryImpactPoint[];
  capabilities: IndustryCapability[];
  solutions: IndustrySolution[]; // kept for type compatibility, not rendered
  techStack: string[];
  insights: IndustryInsight[]; // kept for type compatibility, not rendered
  faqs: IndustryFaq[];
};

/* ===============================================================
   IMAGES — one pool per industry
   ---------------------------------------------------------------
   Each pool = 6 URLs. They are mapped like this:
     pool[0] -> hero (full-bleed banner)
     pool[1] -> highlight (video block) + last impact tab
     pool[2..5] -> impact tabs
   So every industry page gets its own visual identity, and no two
   slugs share a hero.

   To use your own images, replace the strings with paths from
   /public, e.g. "/industries/finance/hero.jpg". Nothing else needs
   to change.
================================================================ */

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80";

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const FALLBACK_POOL: string[] = [
  u("1497366754035-f200968a6e72"),
  u("1497366811353-6870744d04b2"),
  u("1556761175-b413da4baf72"),
  u("1521737711867-e3b97375f902"),
  u("1460925895917-afdab827c52f"),
  u("1517245386807-bb43f82c33c4"),
];

const IMAGE_POOLS: Record<string, string[]> = {
  /* ---------------- E-commerce & Retail ---------------- */
  "ecommerce-retail": [
    u("1556742049-0cfed4f6a45d"), // card payment
    u("1441986300917-64674bd600d8"), // retail store front
    u("1556740749-887f6717d7e4"), // online shopping
    u("1472851294608-062f824d29cc"), // store shelves
    u("1586528116311-ad8dd3c8310d"), // packed orders
    u("1563013544-824ae1b704d3"), // shopping bags
  ],

  /* ---------------- Healthcare ---------------- */
  healthcare: [
    u("1576091160550-2173dba999ef"), // clinician with tablet
    u("1538108149393-fbbd81895907"), // doctor consultation
    u("1505751172876-fa1923c5c528"), // stethoscope / records
    u("1516549655169-df83a0774514"), // lab & care team
    u("1519494026892-80bbd2d6fd0d"), // hospital corridor
    u("1579684385127-1ef15d508118"), // patient care
  ],

  /* ---------------- Ed-tech & E-learning ---------------- */
  "edtech-elearning": [
    u("1523240795612-9a054b0db644"), // online learning
    u("1503676260728-1c00da094a0b"), // classroom
    u("1522202176988-66273c2fd55f"), // students collaborating
    u("1524178232363-1fb2b075b655"), // lecture hall
    u("1501504905252-473c47e087f8"), // notebook study
    u("1513258496099-48168024aec0"), // library
  ],

  /* ---------------- Finance / Banking & Finance ---------------- */
  finance: [
    u("1554224155-6726b3ff858f"), // calculator & statements
    u("1559526324-593bc073d938"), // banking tower
    u("1556157382-97eda2d62296"), // mobile payments
    u("1450101499163-c8848c66ca85"), // advisory meeting
    u("1601597111158-2fceff292cdc"), // contactless payment
    u("1526304640581-d334cdbbf45e"), // currency / trading desk
  ],

  /* Alias, in case your route uses /industries/banking-finance */
  "banking-finance": [
    u("1554224155-6726b3ff858f"),
    u("1559526324-593bc073d938"),
    u("1556157382-97eda2d62296"),
    u("1450101499163-c8848c66ca85"),
    u("1601597111158-2fceff292cdc"),
    u("1526304640581-d334cdbbf45e"),
  ],

  /* ---------------- Transportation & Logistics ---------------- */
  "transportation-logistics": [
    u("1494412574643-ff11b0a5c1c3"), // warehouse racking
    u("1553413077-190dd305871c"), // delivery truck
    u("1504384308090-c894fdcc538d"), // shipping containers
    u("1566576912321-d58ddd7a6088"), // port logistics
    u("1601584115197-04ecc0da31d7"), // fleet on the road
    u("1586528116493-a029325540fa"), // parcel handling
  ],

  /* ---------------- Travel & Booking ---------------- */
  "travel-booking": [
    u("1436491865332-7a61a109cc05"), // aircraft wing
    u("1566073771259-6a8506099945"), // hotel exterior
    u("1488646953014-85cb44e25828"), // trip planning
    u("1520250497591-112f2f40a3f4"), // hotel room
    u("1507525428034-b723cf961d3e"), // destination beach
    u("1469474968028-56623f02e42e"), // journey landscape
  ],

  /* ---------------- Consumer Goods ---------------- */
  "consumer-goods": [
    u("1578916171728-46686eac8d58"), // product flat lay
    u("1534723452862-4c874018d66d"), // packaged goods
    u("1542838132-92c53300491e"), // market stall
    u("1584008604774-1b0bfb6b4d18"), // production line goods
    u("1607083206869-4c7672e72a8a"), // shelf merchandising
    u("1556740738-b6a63e27c4df"), // field sales / analytics
  ],

  /* ---------------- Education & Institutions ---------------- */
  "education-institutions": [
    u("1562774053-701939374585"), // campus building
    u("1541339907198-e08756dedf3f"), // lecture theatre
    u("1523050854058-8df90110c9f1"), // graduation
    u("1498243691581-b145c3f54a5a"), // campus study
    u("1519452575417-564c1401ecc0"), // admin office
    u("1509062522246-3755977927d7"), // classroom desks
  ],

  /* ---------------- Financial Services ---------------- */
  "financial-services": [
    u("1611974789855-9c2a0a7236a3"), // trading screens
    u("1590283603385-17ffb3a7f29f"), // advisor and client
    u("1551288049-bebda4e38f71"), // performance dashboard
    u("1579532537598-459ecdaf39cc"), // portfolio review
    u("1460925895917-afdab827c52f"), // reporting laptop
    u("1454165804606-c3d57bc86b40"), // boardroom
  ],

  /* ---------------- Energy & Utilities ---------------- */
  "energy-utilities": [
    u("1473341304170-971dccb5ac1e"), // transmission lines
    u("1466611653911-95081537e5b7"), // solar array
    u("1497435334941-8c899ee9e8e9"), // wind turbines
    u("1509391366360-2e959784a276"), // rooftop solar
    u("1581094794329-c8112a89af12"), // field engineer
    u("1516937941344-00b4e0337589"), // substation
  ],

  /* ---------------- Insurance ---------------- */
  insurance: [
    u("1450101499163-c8848c66ca85"), // policy consultation
    u("1521791136064-7986c2920216"), // agreement handshake
    u("1554224154-26032ffc0d07"), // claims paperwork
    u("1582719478250-c89cae4dc85b"), // property cover
    u("1568992687947-868a62a9f521"), // risk review desk
    u("1600880292089-90a7e086ee0c"), // broker meeting
  ],

  /* ---------------- Life Sciences ---------------- */
  "life-sciences": [
    u("1532187863486-abf9dbad1b69"), // laboratory bench
    u("1579154204601-01588f351e67"), // scientist pipetting
    u("1581093458791-9f3c3900df4b"), // research microscope
    u("1576086213369-97a306d36557"), // sample vials
    u("1554475901-4538ddfbccc2"), // clinical documentation
    u("1583912268183-211f0c3a8e1f"), // quality control
  ],

  /* ---------------- Manufacturing ---------------- */
  manufacturing: [
    u("1565043666747-69f6646db940"), // factory floor
    u("1581091226825-a6a2a5aee158"), // engineer with data
    u("1504328345606-18bbc8c9d7d1"), // machinery detail
    u("1518709268805-4e9042af2176"), // industrial robotics
    u("1567789884554-0f76aa6c0b6a"), // assembly line
    u("1581092160562-40aa08e78837"), // maintenance check
  ],

  /* ---------------- Private Equity ---------------- */
  "private-equity": [
    u("1600880292203-757bb62b4baf"), // deal discussion
    u("1573164713988-8665fc963095"), // portfolio analysis
    u("1507679799987-c73779587ccf"), // investment team
    u("1444653614773-995cb1ef9efa"), // documents & diligence
    u("1517048676732-d65bc937f952"), // partner meeting
    u("1542744173-8e7e53415bb0"), // reporting review
  ],

  /* ---------------- Professional Services ---------------- */
  "professional-services": [
    u("1497215842964-222b430dc094"), // consulting office
    u("1519389950473-47ba0277781c"), // project team
    u("1542744094-3a31f272c490"), // planning board
    u("1552581234-26160f608093"), // client workshop
    u("1553877522-43269d4ea984"), // delivery review
    u("1517245386807-bb43f82c33c4"), // workspace
  ],

  /* ---------------- Public Sector ---------------- */
  "public-sector": [
    u("1529107386315-e1a2ed48a620"), // civic building
    u("1589391886645-d51941baf7fb"), // service counter
    u("1573164574572-cb89e39749b4"), // case worker
    u("1521791055366-0d553872125f"), // agency collaboration
    u("1551836022-d5d88e9218df"), // records & permits
    u("1486406146926-c627a92ad1ab"), // government district
  ],

  /* ---------------- Technology, Products & Platforms ---------------- */
  "technology-products-platforms": [
    u("1518770660439-4636190af475"), // circuitry
    u("1531482615713-2afd69097998"), // engineers pairing
    u("1555949963-aa79dcee981c"), // code on screen
    u("1504384764586-bb4cdc1707b0"), // cloud infra
    u("1522071820081-009f0129c71c"), // product team
    u("1497366811353-6870744d04b2"), // studio office
  ],

  /* ---------------- SaaS ---------------- */
  saas: [
    u("1551434678-e076c223a692"), // product engineering
    u("1460925895917-afdab827c52f"), // product analytics
    u("1522202176988-66273c2fd55f"), // team planning
    u("1587440871875-191322ee64b0"), // dashboard UI
    u("1517180102446-f3ece451e9d8"), // release workflow
    u("1499750310107-5fef28a66643"), // build session
  ],

  /* ---------------- Telecom ---------------- */
  telecom: [
    u("1516110833967-0b5716ca1387"), // network tower
    u("1451187580459-43490279c0fa"), // global connectivity
    u("1558494949-ef010cbdcc31"), // data centre
    u("1544197150-b99a580bb7a8"), // fibre / infrastructure
    u("1526628953301-3e589a6a8b74"), // subscriber experience
    u("1581092918056-0c4c3acd3789"), // field technician
  ],
};

type IndustryImages = {
  hero: string;
  highlight: string;
  impact: string[];
};

function getImages(slug: string): IndustryImages {
  const pool = IMAGE_POOLS[slug] ?? FALLBACK_POOL;
  const at = (i: number) => pool[i % pool.length] ?? FALLBACK_IMAGE;

  return {
    hero: at(0),
    highlight: at(1),
    // five impact tabs in data.ts -> five distinct images
    impact: [at(2), at(3), at(4), at(5), at(1)],
  };
}

/* ===============================================================
   SAFE IMAGE
   Plain <img> with a graceful fallback, so a bad URL never breaks
   the layout. Uses native lazy loading everywhere except the hero.
================================================================ */

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

      /* Learn More link + hover underline reveal on Focus Area
         cards — same treatment as the Data & Analytics page's
         capability cards. */
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

      @media (prefers-reduced-motion: reduce) {
        .ss-reveal, .ss-tab-panel, .ss-drift-slow, .ss-drift-slower, .ss-caret {
          animation: none !important;
          opacity: 1 !important;
          transform: none !important;
        }
        .ss-tab-progress-fill { animation: none !important; transform: scaleY(1) !important; }
        .ss-eco-panel, .ss-capability-card, .ss-capability-title,
        .ss-capability-learn-more .ss-capability-underline {
          transition: none !important;
        }
      }
    `}</style>
  );
}

/* ===============================================================
   HOOKS
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

/* ===============================================================
   REUSABLE
================================================================ */

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

/* ===============================================================
   1. HERO
================================================================ */

function Hero({ data, images }: { data: IndustryContent; images: IndustryImages }) {
  return (
    <section className="relative isolate min-h-[680px] overflow-hidden lg:min-h-[760px]">
      <div className="absolute inset-0 -z-10">
        <SafeImg
          src={images.hero}
          alt={data.name}
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

      <div className={`${ALIGN} relative flex min-h-[680px] items-center lg:min-h-[760px]`}>
        <div className="w-full max-w-[760px] py-20 lg:py-28">
          <nav
            aria-label="Breadcrumb"
            className="font-body mt-8 flex items-center gap-2 text-[14px] font-medium opacity-0"
            style={{
              color: "rgba(255,255,255,0.92)",
              animation: "ss-fade-up 0.6s ease-out 0.05s forwards",
            }}
          >
            <Link href="/" className="transition-opacity hover:opacity-70">
              Home
            </Link>
            <ChevronRight size={14} />
            <Link href="/industries" className="transition-opacity hover:opacity-70">
              Industries
            </Link>
            <ChevronRight size={14} />
            <span className="text-white/60">{data.name}</span>
          </nav>

          <h1
            className="font-heading mt-5 max-w-[720px] text-[36px] font-medium leading-[1.1] tracking-[-0.025em] text-white opacity-0 sm:text-[44px] lg:text-[52px] xl:text-[58px]"
            style={{ animation: "ss-fade-up 0.7s ease-out 0.15s forwards" }}
          >
            {data.headline}
          </h1>

          <p
            className="font-body mt-7 max-w-[650px] text-[16px] leading-[1.7] text-white/90 opacity-0 sm:text-[17px] lg:text-[18px]"
            style={{ animation: "ss-fade-up 0.7s ease-out 0.28s forwards" }}
          >
            {data.description}
          </p>

          <Link
            href="/contact"
            className="font-body mt-10 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-semibold opacity-0 transition-all duration-300 hover:scale-[1.03] hover:bg-white/90"
            style={{ color: INDIGO_CTA, animation: "ss-fade-up 0.7s ease-out 0.4s forwards" }}
          >
            Connect Now
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ===============================================================
   2. STAT STRIP
================================================================ */

function StatStrip({ data }: { data: IndustryContent }) {
  if (!data.stats.length) return null;

  return (
    <section className={`${ALIGN} relative z-10 -mt-14`}>
      <div className="relative">
        <div className="absolute inset-0 bg-white" />
        <Reveal className="relative rounded-[24px] bg-white p-3 shadow-[0_16px_40px_rgba(15,23,42,0.10)] sm:p-4">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {data.stats.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 80}
                className="ss-capability-card flex flex-col justify-center gap-1 bg-[#F7F8FB] p-6"
              >
                <span
                  className="font-heading text-[30px] font-bold leading-none sm:text-[34px]"
                  style={{ color: INDIGO_CTA }}
                >
                  {stat.value}
                </span>
                <span className="font-body text-[13px] leading-snug text-slate-500 sm:text-[14px]">
                  {stat.label}
                </span>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ===============================================================
   3. KEY TAKEAWAYS ACCORDION
================================================================ */

function getKeyTakeawayBullets(data: IndustryContent): string[] {
  return [
    `${data.name} is one of Starfii's core areas of industry expertise.`,
    [data.focusAreas[0]?.title, data.focusAreas[1]?.title].filter(Boolean).join(" and "),
    data.capabilities.length
      ? `Capabilities span ${data.capabilities
          .slice(0, 3)
          .map((c) => c.title.toLowerCase())
          .join(", ")}.`
      : "",
    data.impactPoints[0]?.label
      ? `Helps teams achieve ${data.impactPoints[0].label.toLowerCase()}.`
      : "",
  ].filter(Boolean) as string[];
}

function KeyTakeawaysAccordion({
  data,
  open,
  setOpen,
}: {
  data: IndustryContent;
  open: boolean;
  setOpen: (updater: (prev: boolean) => boolean) => void;
}): ReactElement {
  const bullets = getKeyTakeawayBullets(data);
  const { displayed, typingIndex } = useTypewriterList(bullets, open);

  return (
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
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="relative inline-flex h-7 w-7 flex-shrink-0 items-center justify-center"
            style={{ color: INDIGO_CTA }}
          >
            <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
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
            {data.kicker}
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
            {bullets.map((bullet, i) => {
              const text = displayed[i] ?? "";
              if (!text && i !== 0) return null;
              const isTyping = i === typingIndex && text.length < bullet.length;

              return (
                <li
                  key={bullet}
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
   4. HIGHLIGHT BLOCK
================================================================ */

function HighlightBlock({ data, images }: { data: IndustryContent; images: IndustryImages }) {
  return (
    <Reveal as="section" className="mt-20 mb-20 lg:mb-24">
      <div className="group grid grid-cols-1 items-stretch overflow-hidden rounded-lg bg-[#F5F3FC] transition-colors duration-500 ease-out hover:bg-[#EAE4FA] lg:grid-cols-2">
        <div className="flex flex-col justify-center p-10 transition-transform duration-500 ease-out group-hover:translate-x-2 lg:p-14">
          <h2 className="font-heading text-[30px] font-semibold leading-snug text-[#1B2560] transition-colors duration-500 ease-out group-hover:text-[#4F3FE0] lg:text-[36px]">
            {data.highlight.title}
          </h2>
          <p className="font-body mt-5 text-[17px] leading-relaxed text-slate-600 lg:text-[18px]">
            {data.keyTakeaway}
          </p>
        </div>

        <div className="relative min-h-[320px] overflow-hidden">
          <SafeImg
            src={images.highlight}
            alt={data.highlight.title}
            className="absolute inset-0 h-full w-full transform-gpu object-cover transition-transform duration-700 will-change-transform group-hover:scale-110"
          />
        </div>
      </div>
    </Reveal>
  );
}

/* ===============================================================
   5. FOCUS AREAS
================================================================ */

function FocusAreas({ data }: { data: IndustryContent }) {
  if (!data.focusAreas.length) return null;

  return (
    <section className="relative bg-white py-24 lg:py-28">
      <div className={`relative ${ALIGN}`}>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[380px_1fr] lg:gap-14 xl:grid-cols-[420px_1fr]">
          <Reveal className="self-start lg:sticky lg:top-28">
            <Eyebrow>{data.name} Focus Areas</Eyebrow>
          

                 <h2 className={`${SECTION_HEADING} mt-4`} style={{ color: CHAMPION_BLUE }}>
          Where We Focus
          </h2>
            <p className="font-body mt-5 max-w-md text-[15px] leading-relaxed text-slate-600 sm:text-[16px]">
              Transforming {data.name.toLowerCase()} through targeted solutions and
              customer-centric innovation.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {data.focusAreas.map((area, i) => (
              <Reveal key={area.title} delay={(i % 4) * 90} className="h-full">
                <div className="ss-capability-card flex h-full flex-col p-8">
                  <h3
                    className="ss-capability-title font-heading text-[24px] font-semibold leading-[1.2] sm:text-[26px]"
                    style={{ color: CHAMPION_BLUE }}
                  >
                    {area.title}
                  </h3>
                  <p className="font-body mt-4 text-[17px] leading-[1.7] text-slate-600">
                    {area.description}
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
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===============================================================
   6. IMPACT — autoplaying tabbed deep-dive
================================================================ */

function ImpactSection({ data, images }: { data: IndustryContent; images: IndustryImages }) {
  const [activeTab, setActiveTab] = useState(0);
  const [tabHovered, setTabHovered] = useState(false);

  const points = data.impactPoints;
  const safeIndex = points.length > 0 ? Math.min(activeTab, points.length - 1) : 0;
  const current = points[safeIndex];
  const currentImage =
    images.impact[safeIndex % Math.max(images.impact.length, 1)] ?? FALLBACK_IMAGE;

  useEffect(() => {
    if (tabHovered || points.length <= 1) return undefined;
    const id = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % points.length);
    }, TAB_AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [tabHovered, points.length]);

  if (!current) return null;

  return (
    <div className={ALIGN}>
      <Reveal as="section" className="mt-24 pb-28">
        <Eyebrow>Business Impact</Eyebrow>
        <h2 className={`${SECTION_HEADING} mt-4 font-bold`} style={{ color: CHAMPION_BLUE }}>
          The Impact You Can Expect
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[320px_1fr]">
          <ul
            className="space-y-1 border-l"
            style={{ borderColor: "#E5E1F5" }}
            onMouseEnter={() => setTabHovered(true)}
            onMouseLeave={() => setTabHovered(false)}
          >
            {points.map((point, i) => {
              const isActive = i === safeIndex;
              return (
                <li key={point.label} className="relative -ml-px">
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
                      fontWeight: isActive ? 700 : 500,
                    }}
                  >
                    {point.label}
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
                className="font-heading text-[26px] font-bold leading-snug sm:text-[28px]"
                style={{ color: CHAMPION_BLUE }}
              >
                {current.label}
              </h3>
              <p className="font-body mt-5 text-[17px] leading-relaxed text-slate-600">
                {current.body}
              </p>
            </div>

            <div className="relative min-h-[280px] overflow-hidden">
              <SafeImg
                src={currentImage}
                alt={current.label}
                className="absolute inset-0 h-full w-full transform-gpu object-cover transition-transform duration-700 will-change-transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

/* ===============================================================
   7. CAPABILITIES — dark accordion
================================================================ */

function CapabilitiesAccordion({ data }: { data: IndustryContent }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!data.capabilities.length) return null;

  const columns: { item: IndustryCapability; index: number }[][] = [[], []];
  data.capabilities.forEach((item, index) => {
    const target = columns[index % 2];
    if (target) target.push({ item, index });
  });

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
          background:
            "radial-gradient(60% 80% at 0% 100%, rgba(63,90,214,0.35) 0%, rgba(8,7,15,0) 70%)",
        }}
      />

      <div className={`relative ${ALIGN}`}>
        <Reveal>
          <Eyebrow variant="dark">Capabilities</Eyebrow>
          <h2 className={`${SECTION_HEADING} mt-4 max-w-6xl text-white`}>
            Our {data.name} Capabilities
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 items-start gap-5 sm:grid-cols-2">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-5">
              {column.map(({ item, index }) => {
                const isOpen = openIndex === index;
                return (
                  <Reveal key={item.title} delay={index * 80}>
                    <div
                      className="overflow-hidden rounded-2xl bg-white transition-shadow duration-300 hover:shadow-xl"
                      style={{ boxShadow: isOpen ? "0 18px 40px rgba(15,23,42,0.18)" : undefined }}
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`capability-panel-${index}`}
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

                      <div
                        id={`capability-panel-${index}`}
                        className="ss-eco-panel grid transition-all duration-500 ease-out"
                        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                      >
                        <div className="overflow-hidden">
                          <p
                            className="font-body px-8 pb-8 text-[15px] leading-[1.75] transition-opacity duration-500"
                            style={{ color: CHAMPION_BLUE, opacity: isOpen ? 1 : 0 }}
                          >
                            {item.description}
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
      </div>
    </section>
  );
}

/* ===============================================================
   8. PARTNER / TECHNOLOGY ECOSYSTEM
================================================================ */

function PartnerEcosystem({ data }: { data: IndustryContent }) {
  if (!data.techStack.length) return null;

  return (
    <section className="bg-[#EEF0F7] py-24">
      <div className={ALIGN}>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.6fr_1.4fr] lg:items-center">
          <Reveal>
            <Eyebrow>{data.name} Technology Partnership Ecosystem</Eyebrow>
            <h2
              className="font-heading mt-4 text-[30px] font-bold leading-tight tracking-[-0.03em] sm:text-[36px]"
              style={{ color: CHAMPION_BLUE }}
            >
              Joining Forces to Deliver Outcomes
            </h2>
            <p className="font-body mt-4 max-w-sm text-[15px] leading-[1.8] text-slate-600">
              Leading technology partners embedded into every {data.name.toLowerCase()} engagement.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {data.techStack.map((tech, i) => (
              <Reveal
                key={tech}
                delay={i * 60}
                className="ss-capability-card flex h-[90px] items-center justify-center px-4 text-center"
              >
                <span className="font-body text-[15px] font-semibold" style={{ color: CHAMPION_BLUE }}>
                  {tech}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===============================================================
   9. FAQ  (last section on the page)
================================================================ */

function FaqItem({ faq, index }: { faq: IndustryFaq; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div
      className="overflow-hidden rounded-2xl bg-white transition-shadow duration-300 hover:shadow-xl"
      style={{ boxShadow: open ? "0 18px 40px rgba(15,23,42,0.10)" : undefined }}
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 px-8 py-7 text-left"
      >
        <span
          className="font-heading text-[17px] font-medium leading-snug transition-colors duration-300 sm:text-[18px]"
          style={{ color: open ? INDIGO_CTA : CHAMPION_BLUE }}
        >
          {faq.question}
        </span>
        <span
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300"
          style={{
            backgroundColor: open ? "#E5E1F5" : INDIGO_CTA,
            color: open ? "#8B93A7" : "#FFFFFF",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>

      <div
        className="ss-eco-panel grid transition-all duration-500 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="px-8 pb-8" style={{ opacity: open ? 1 : 0, transition: "opacity 0.5s ease" }}>
            <p className="font-body text-[15px] leading-[1.8] text-slate-600">{faq.answer}</p>
            <Link
              href="/contact"
              className="font-body mt-4 inline-flex items-center gap-2 text-[13px] font-bold"
              style={{ color: INDIGO_CTA }}
            >
              Still have questions? Talk to us
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQ({ data }: { data: IndustryContent }) {
  if (!data.faqs.length) return null;

  return (
    <section className="bg-[#F8F8FB] py-24">
      <div className={ALIGN}>
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className={`${SECTION_HEADING} mt-4`} style={{ color: CHAMPION_BLUE }}>
            Frequently Asked Questions
          </h2>
          <p className="font-body mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-600 sm:text-[16px]">
            A few answers about building software for {data.name.toLowerCase()} teams.
          </p>
        </Reveal>

        <div className="mt-12 space-y-4">
          {data.faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 70}>
              <FaqItem faq={faq} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===============================================================
   MAIN TEMPLATE
================================================================ */

export default function IndustryPageTemplate({ data }: { data: IndustryContent }) {
  const [takeawaysOpen, setTakeawaysOpen] = useState(true);
  const images = getImages(data.slug);

  return (
    <main className="bg-white">
      <AnimationStyles />

      <Hero data={data} images={images} />
      <StatStrip data={data} />

      <div className={ALIGN}>
        <Reveal as="section" className="mt-16">
          <KeyTakeawaysAccordion data={data} open={takeawaysOpen} setOpen={setTakeawaysOpen} />

          <p
            className="font-heading mt-10 w-full text-[26px] leading-snug lg:text-[30px]"
            style={{ color: CHAMPION_BLUE }}
          >
            {data.highlight.body}
          </p>
        </Reveal>

        <HighlightBlock data={data} images={images} />
      </div>

      <FocusAreas data={data} />
      <ImpactSection data={data} images={images} />
      <CapabilitiesAccordion data={data} />
      <PartnerEcosystem data={data} />
      <FAQ data={data} />
      <ConnectFormSection />
    </main>
  );
}
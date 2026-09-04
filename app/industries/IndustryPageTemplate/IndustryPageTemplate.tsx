
"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Plus,
  Sparkles,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion, type Variants } from "framer-motion";

/* ===============================================================
   THEME
================================================================ */

const T = {
  ink: "text-[#14163B]",
  inkBg: "bg-[#0B0D27]",
  primary: "text-[#3B2FE0]",
  primaryBg: "bg-[#3B2FE0]",
  muted: "text-[#686A82]",
  border: "border-[#E6E6EF]",
};

/* ===============================================================
   LAYOUT
================================================================ */

const ALIGN =
  "mx-auto w-full max-w-[1480px] px-5 sm:px-8 lg:px-12 xl:px-16";

/* ===============================================================
   TYPES
================================================================ */

export type IndustryStat = {
  value: string;
  label: string;
};

export type IndustryCapability = {
  title: string;
  description: string;
};

export type IndustrySolution = {
  title: string;
  description: string;
};

export type IndustryFocusArea = {
  title: string;
  description: string;
};

export type IndustryImpactPoint = {
  label: string;
  body: string;
};

export type IndustryInsight = {
  tag: string;
  title: string;
  blurb: string;
};

export type IndustryFaq = {
  question: string;
  answer: string;
};

export type IndustryContent = {
  slug: string;
  name: string;
  kicker: string;
  headline: string;
  description: string;
  stats: IndustryStat[];
  keyTakeaway: string;
  highlight: {
    title: string;
    body: string;
  };
  focusAreas: IndustryFocusArea[];
  impactPoints: IndustryImpactPoint[];
  capabilities: IndustryCapability[];
  solutions: IndustrySolution[];
  techStack: string[];
  insights: IndustryInsight[];
  faqs: IndustryFaq[];
};

/* ===============================================================
   ANIMATION
================================================================ */

const reveal: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const cardReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const inView = {
  initial: "hidden" as const,
  whileInView: "visible" as const,
  viewport: {
    once: true,
    amount: 0.15,
  },
};

/* ===============================================================
   IMAGE TYPES
================================================================ */

type IndustryImages = {
  hero: string;
  highlight: string;
  focus: string[];
  impact: string[];
  solutions: string[];
  insights: string[];
};

/* ===============================================================
   FALLBACK IMAGES
================================================================ */

const fallbackImages: IndustryImages = {
  hero:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",

  highlight:
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",

  focus: [
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80",
  ],

  impact: [
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80",
  ],

  solutions: [
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=80",
  ],

  insights: [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=80",
  ],
};

/* ===============================================================
   INDUSTRY IMAGES
   Keep your existing large image map here.
   This section can also be imported from a separate file later.
================================================================ */

const industryImages: Record<string, IndustryImages> = {
  "ecommerce-retail": {
    hero:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
    highlight:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    focus: [
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=1000&q=80",
    ],
    impact: [
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=1000&q=80",
    ],
    solutions: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1000&q=80",
    ],
    insights: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80",
    ],
  },

  healthcare: {
    hero:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80",
    highlight:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80",
    focus: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1000&q=80",
    ],
    impact: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1000&q=80",
    ],
    solutions: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1000&q=80",
    ],
    insights: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80",
    ],
  },

  "edtech-elearning": {
    hero:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80",
    highlight:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    focus: [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80",
    ],
    impact: [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80",
    ],
    solutions: [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80",
    ],
    insights: [
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80",
    ],
  },

  finance: {
    hero:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80",
    highlight:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    focus: [
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=80",
    ],
    impact: [
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=80",
    ],
    solutions: [
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1000&q=80",
    ],
    insights: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=80",
    ],
  },

  "transportation-logistics": {
    hero:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1400&q=80",
    highlight:
      "https://images.unsplash.com/photo-1586528116493-da8b3e6b9d9d?auto=format&fit=crop&w=1200&q=80",
    focus: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80",
    ],
    impact: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80",
    ],
    solutions: [
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
    ],
    insights: [
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1000&q=80",
    ],
  },

  "travel-booking": {
    hero:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=80",
    highlight:
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1200&q=80",
    focus: [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1000&q=80",
    ],
    impact: [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1000&q=80",
    ],
    solutions: [
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
    ],
    insights: [
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80",
    ],
  },
};

/* ===============================================================
   GENERIC IMAGE FALLBACK
================================================================ */

function getImages(slug: string): IndustryImages {
  return industryImages[slug] ?? fallbackImages;
}

/* ===============================================================
   IMAGE COMPONENT
================================================================ */

function IndustryImage({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src?: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  const fallback = fallbackImages.hero;
  const [failed, setFailed] = useState(false);

  const finalSrc = failed ? fallback : src || fallback;

  return (
    <Image
      src={finalSrc}
      alt={alt}
      fill
      priority={priority}
      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 800px"
      quality={78}
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}

/* ===============================================================
   FOUR EXTRA INDUSTRY SECTIONS
   Generated from the actual industry data.

   This means ALL 18 industries automatically receive four
   additional relevant content sections without changing data.ts.
================================================================ */

function getExtraSections(data: IndustryContent) {
  const focusOne = data.focusAreas[0];
  const focusTwo = data.focusAreas[1];
  const focusThree = data.focusAreas[2];
  const focusFour = data.focusAreas[3];

  const capabilityOne = data.capabilities[0];
  const capabilityTwo = data.capabilities[1];

  const impactOne = data.impactPoints[0];
  const impactTwo = data.impactPoints[1];

  return [
    {
      number: "01",
      eyebrow: "Industry challenge",
      title: `Where ${data.name} teams lose time, visibility and momentum`,
      body: `${data.highlight.body} The opportunity is to replace disconnected workflows with software that reflects the way your ${data.name.toLowerCase()} operation actually works.`,
      points: [
        focusOne?.title,
        focusTwo?.title,
        impactOne?.label,
      ].filter(Boolean) as string[],
    },

    {
      number: "02",
      eyebrow: "Digital experience",
      title: `Create better experiences across every ${data.name.toLowerCase()} touchpoint`,
      body: `Modern ${data.name.toLowerCase()} products need to make complex workflows feel simple. We turn the core requirements of your business into clear user journeys, intuitive interfaces and connected digital experiences.`,
      points: [
        focusOne?.description,
        focusThree?.description,
      ].filter(Boolean) as string[],
    },

    {
      number: "03",
      eyebrow: "Connected technology",
      title: `Connect the systems behind your ${data.name.toLowerCase()} business`,
      body: `The strongest industry platforms are not isolated applications. They connect people, data and operational systems so teams can act on current information. Starfii brings application architecture, APIs, cloud infrastructure and integrations together around the business outcome.`,
      points: [
        capabilityOne?.title,
        capabilityTwo?.title,
        focusFour?.title,
      ].filter(Boolean) as string[],
    },

    {
      number: "04",
      eyebrow: "Business impact",
      title: `Turn ${data.name.toLowerCase()} technology into measurable business progress`,
      body: `The goal is not simply to launch another application. It is to create a platform that improves the metrics your team cares about — whether that means faster operations, better customer experiences, stronger visibility, lower manual effort or greater scalability.`,
      points: [
        impactOne?.label,
        impactTwo?.label,
        data.impactPoints[2]?.label,
      ].filter(Boolean) as string[],
    },
  ];
}

/* ===============================================================
   SECTION HEADER
================================================================ */

function SectionHeader({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
}) {
  return (
    <motion.div {...inView} variants={reveal} className="max-w-3xl">
      <div
        className={`flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] ${
          dark ? "text-[#9AA8FF]" : T.primary
        }`}
      >
        <span className="h-px w-7 bg-current" />
        {eyebrow}
      </div>

      <h2
        className={`mt-5 text-[34px] font-bold leading-[1.08] tracking-[-0.035em] sm:text-[42px] lg:text-[52px] ${
          dark ? "text-white" : T.ink
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 max-w-2xl text-[16px] leading-[1.8] ${
            dark ? "text-white/60" : T.muted
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

/* ===============================================================
   STAT STRIP
================================================================ */

function StatsStrip({ stats }: { stats: IndustryStat[] }) {
  return (
    <div className="grid grid-cols-2 border-y border-[#E5E5EF] lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={`${stat.value}-${stat.label}`}
          {...inView}
          variants={cardReveal}
          className={`min-h-[145px] px-5 py-8 sm:px-8 lg:px-10 ${
            index !== stats.length - 1
              ? "border-r border-[#E5E5EF]"
              : ""
          } ${
            index >= 2
              ? "border-t border-[#E5E5EF] lg:border-t-0"
              : ""
          }`}
        >
          <div className="text-[35px] font-bold tracking-[-0.04em] text-[#14163B]">
            {stat.value}
          </div>

          <p className={`mt-2 max-w-[190px] text-[13px] leading-relaxed ${T.muted}`}>
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

/* ===============================================================
   TAKEAWAY
================================================================ */

function Takeaway({ data }: { data: IndustryContent }) {
  return (
    <section className={`${ALIGN} py-20 lg:py-28`}>
      <motion.div
        {...inView}
        variants={reveal}
        className="grid overflow-hidden rounded-[28px] border border-[#E5E5EF] bg-[#F7F7FB] lg:grid-cols-[0.72fr_1.28fr]"
      >
        <div className="relative min-h-[330px]">
          <IndustryImage
            src={getImages(data.slug).highlight}
            alt={data.highlight.title}
            className="transition-transform duration-1000 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D27]/70 via-transparent to-transparent" />

          <div className="absolute bottom-6 left-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md">
              <Sparkles size={13} />
              Key perspective
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
          <p className={`text-[11px] font-bold uppercase tracking-[0.18em] ${T.primary}`}>
            Why it matters
          </p>

          <h2 className="mt-4 max-w-2xl text-[28px] font-bold leading-tight tracking-[-0.025em] sm:text-[36px]">
            {data.highlight.title}
          </h2>

          <p className={`mt-5 max-w-2xl text-[15px] leading-[1.85] ${T.muted}`}>
            {data.keyTakeaway}
          </p>

          <p className={`mt-4 max-w-2xl text-[15px] leading-[1.85] ${T.muted}`}>
            {data.highlight.body}
          </p>
        </div>
      </motion.div>
    </section>
  );
}

/* ===============================================================
   FOUR EXTRA SECTIONS
================================================================ */

function ExtraIndustrySections({
  data,
  images,
}: {
  data: IndustryContent;
  images: IndustryImages;
}) {
  const sections = getExtraSections(data);

  return (
    <section className="overflow-hidden bg-white">
      {sections.map((section, index) => {
        const image =
          images.focus[index % Math.max(images.focus.length, 1)] ??
          fallbackImages.hero;

        const reverse = index % 2 === 1;

        return (
          <div
            key={section.number}
            className={`border-t border-[#E8E8F0] ${
              index % 2 === 1 ? "bg-[#F8F8FB]" : "bg-white"
            }`}
          >
            <div
              className={`${ALIGN} grid min-h-[600px] grid-cols-1 items-center gap-12 py-20 lg:grid-cols-2 lg:gap-20 lg:py-28`}
            >
              <motion.div
                {...inView}
                variants={reveal}
                className={reverse ? "lg:order-2" : ""}
              >
                <div className="flex items-center gap-4">
                  <span className="text-[13px] font-bold text-[#A3A4B4]">
                    {section.number}
                  </span>

                  <span className={`h-px w-9 ${T.primaryBg}`} />

                  <span className={`text-[11px] font-bold uppercase tracking-[0.17em] ${T.primary}`}>
                    {section.eyebrow}
                  </span>
                </div>

                <h2 className="mt-6 max-w-2xl text-[34px] font-bold leading-[1.08] tracking-[-0.035em] sm:text-[42px]">
                  {section.title}
                </h2>

                <p className={`mt-6 max-w-xl text-[15.5px] leading-[1.85] ${T.muted}`}>
                  {section.body}
                </p>

                <div className="mt-8 space-y-3">
                  {section.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ECEBFF] text-[#3B2FE0]">
                        <Check size={12} strokeWidth={3} />
                      </span>

                      <span className="text-[14px] font-medium leading-relaxed text-[#2B2D4B]">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                {...inView}
                variants={reveal}
                className={`relative min-h-[420px] overflow-hidden rounded-[28px] ${
                  reverse ? "lg:order-1" : ""
                }`}
              >
                <IndustryImage
                  src={image}
                  alt={`${data.name} software`}
                  className="transition-transform duration-[1200ms] hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D27]/65 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/70">
                        {data.name}
                      </span>

                      <Zap size={17} className="text-white" />
                    </div>

                    <p className="mt-2 text-[14px] leading-relaxed text-white/85">
                      Digital systems designed around real operational needs.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

/* ===============================================================
   FOCUS AREAS
================================================================ */

function FocusAreas({
  data,
  images,
}: {
  data: IndustryContent;
  images: IndustryImages;
}) {
  return (
    <section className="bg-[#0B0D27] py-24 lg:py-32">
      <div className={ALIGN}>
        <SectionHeader
          dark
          eyebrow="Where we focus"
          title={`Software built around ${data.name.toLowerCase()} workflows`}
          description={`We translate the priorities of ${data.name.toLowerCase()} teams into focused digital products, platforms and operational tools.`}
        />

        <motion.div
          {...inView}
          variants={stagger}
          className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-[24px] border border-white/10 bg-white/10 md:grid-cols-2"
        >
          {data.focusAreas.map((area, index) => (
            <motion.article
              key={area.title}
              variants={cardReveal}
              className="group relative min-h-[330px] overflow-hidden bg-[#11132F] p-7 sm:p-9"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                <IndustryImage
                  src={images.focus[index % images.focus.length]}
                  alt=""
                  className="scale-110 opacity-20 transition-transform duration-1000 group-hover:scale-100"
                />

                <div className="absolute inset-0 bg-[#0B0D27]/70" />
              </div>

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-bold text-white/35">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <ArrowUpRight
                    size={19}
                    className="text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                  />
                </div>

                <div className="mt-auto">
                  <h3 className="max-w-md text-[24px] font-semibold leading-tight text-white">
                    {area.title}
                  </h3>

                  <p className="mt-4 max-w-md text-[14px] leading-[1.75] text-white/55 transition-colors group-hover:text-white/70">
                    {area.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ===============================================================
   IMPACT
================================================================ */

function ImpactSection({
  data,
  images,
}: {
  data: IndustryContent;
  images: IndustryImages;
}) {
  const [active, setActive] = useState(0);

  const points = data.impactPoints;

  const safeIndex =
    points.length > 0 ? Math.min(active, points.length - 1) : 0;

  const current = points[safeIndex];

  const currentImage =
    images.impact[safeIndex % Math.max(images.impact.length, 1)] ??
    fallbackImages.hero;

  useEffect(() => {
    if (points.length <= 1) return;

    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % points.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [points.length]);

  if (!current) return null;

  return (
    <section className={`${ALIGN} py-24 lg:py-32`}>
      <SectionHeader
        eyebrow="Business impact"
        title={`What better ${data.name.toLowerCase()} software changes`}
        description="Technology should create visible operational and commercial improvement. Explore the outcomes that matter most."
      />

      <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="border-l border-[#E4E4EF]">
          {points.map((point, index) => {
            const isActive = index === safeIndex;

            return (
              <button
                key={point.label}
                type="button"
                onClick={() => setActive(index)}
                className={`relative flex min-h-[82px] w-full items-center px-6 text-left transition-all ${
                  isActive
                    ? "bg-[#F7F7FB] text-[#14163B]"
                    : "text-[#8B8D9F] hover:bg-[#FAFAFC]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId={`impact-indicator-${data.slug}`}
                    className="absolute left-[-1px] top-0 h-full w-[3px] bg-[#3B2FE0]"
                  />
                )}

                <span className="flex gap-4">
                  <span className="text-[11px] font-bold text-[#A0A1B0]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-[15px] font-semibold">
                    {point.label}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="overflow-hidden rounded-[26px] border border-[#E5E5EF] bg-[#F7F7FB]">
          <AnimatePresence mode="wait">
            <motion.div
              key={safeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45 }}
              className="grid min-h-[420px] grid-cols-1 md:grid-cols-[1fr_0.9fr]"
            >
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <span className={`text-[11px] font-bold uppercase tracking-[0.15em] ${T.primary}`}>
                  Outcome
                </span>

                <h3 className="mt-4 text-[27px] font-bold leading-tight">
                  {current.label}
                </h3>

                <p className={`mt-5 text-[15px] leading-[1.8] ${T.muted}`}>
                  {current.body}
                </p>
              </div>

              <div className="relative min-h-[300px]">
                <IndustryImage
                  src={currentImage}
                  alt={current.label}
                  className="transition-transform duration-[1000ms] hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D27]/30 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <span className="rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#3B2FE0]">
                    {String(safeIndex + 1).padStart(2, "0")} /{" "}
                    {String(points.length).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ===============================================================
   CAPABILITIES
================================================================ */

function Capabilities({
  data,
}: {
  data: IndustryContent;
}) {
  return (
    <section className="border-y border-[#E5E5EF] bg-[#F8F8FB] py-24 lg:py-32">
      <div className={ALIGN}>
        <SectionHeader
          eyebrow="Capabilities"
          title="From product strategy to production"
          description="Bring product thinking, engineering and infrastructure together in one delivery team."
        />

        <motion.div
          {...inView}
          variants={stagger}
          className="mt-14 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"
        >
          {data.capabilities.map((capability, index) => (
            <motion.article
              key={capability.title}
              variants={cardReveal}
              whileHover={{ y: -5 }}
              className="group min-h-[230px] rounded-[20px] border border-[#E3E3EC] bg-white p-7 transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(20,22,59,0.08)]"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#A5A6B5]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <ArrowUpRight
                  size={17}
                  className="text-[#C0C1CC] transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#3B2FE0]"
                />
              </div>

              <h3 className="mt-12 text-[19px] font-semibold leading-snug">
                {capability.title}
              </h3>

              <p className={`mt-3 text-[14px] leading-[1.75] ${T.muted}`}>
                {capability.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ===============================================================
   SOLUTIONS
================================================================ */

function Solutions({
  data,
  images,
}: {
  data: IndustryContent;
  images: IndustryImages;
}) {
  return (
    <section className={`${ALIGN} py-24 lg:py-32`}>
      <SectionHeader
        eyebrow="Solutions"
        title={`Purpose-built solutions for ${data.name.toLowerCase()}`}
        description="Start with a focused business problem, then build the platform around it."
      />

      <motion.div
        {...inView}
        variants={stagger}
        className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2"
      >
        {data.solutions.map((solution, index) => (
          <motion.article
            key={solution.title}
            variants={cardReveal}
            className="group relative min-h-[450px] overflow-hidden rounded-[26px] bg-[#0B0D27]"
          >
            <IndustryImage
              src={images.solutions[index % Math.max(images.solutions.length, 1)]}
              alt={solution.title}
              className="opacity-55 transition-transform duration-[1200ms] group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#08091E] via-[#0B0D27]/45 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#9AA8FF]">
                  Solution {String(index + 1).padStart(2, "0")}
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#14163B] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={17} />
                </span>
              </div>

              <h3 className="mt-5 max-w-xl text-[27px] font-semibold leading-tight text-white sm:text-[32px]">
                {solution.title}
              </h3>

              <p className="mt-4 max-w-xl text-[14px] leading-[1.75] text-white/60">
                {solution.description}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

/* ===============================================================
   TECHNOLOGY
================================================================ */

function Technology({
  data,
}: {
  data: IndustryContent;
}) {
  return (
    <section className="bg-[#F8F8FB] py-24 lg:py-32">
      <div className={ALIGN}>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionHeader
            eyebrow="Technology"
            title="A stack that supports the product, not the other way around"
            description={`The right technology choices depend on the requirements of your ${data.name.toLowerCase()} platform, integrations and scale.`}
          />

          <motion.div
            {...inView}
            variants={reveal}
            className="grid grid-cols-2 overflow-hidden rounded-[22px] border border-[#E3E3EC] bg-white sm:grid-cols-3"
          >
            {data.techStack.map((technology, index) => (
              <div
                key={technology}
                className={`flex min-h-[100px] items-center justify-center border-[#E3E3EC] px-4 text-center text-[14px] font-semibold text-[#252744] ${
                  index % 3 !== 2 ? "border-r" : ""
                } ${
                  index >= 3 ? "border-t" : ""
                }`}
              >
                {technology}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ===============================================================
   INSIGHTS
================================================================ */

function Insights({
  data,
  images,
}: {
  data: IndustryContent;
  images: IndustryImages;
}) {
  return (
    <section className={`${ALIGN} py-24 lg:py-32`}>
      <SectionHeader
        eyebrow="Industry insights"
        title="Ideas for building better digital products"
        description={`Practical perspectives around technology, product development and ${data.name.toLowerCase()} operations.`}
      />

      <motion.div
        {...inView}
        variants={stagger}
        className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {data.insights.map((insight, index) => (
          <motion.article
            key={insight.title}
            variants={cardReveal}
            className="group overflow-hidden rounded-[22px] border border-[#E4E4ED] bg-white"
          >
            <div className="relative h-[230px] overflow-hidden">
              <IndustryImage
                src={
                  images.insights[
                    index % Math.max(images.insights.length, 1)
                  ]
                }
                alt={insight.title}
                className="transition-transform duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D27]/60 to-transparent" />

              <div className="absolute left-5 top-5">
                <span className="rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[#3B2FE0]">
                  {insight.tag}
                </span>
              </div>
            </div>

            <div className="p-7">
              <p className={`text-[10px] font-bold uppercase tracking-[0.15em] ${T.primary}`}>
                {insight.tag}
              </p>

              <h3 className="mt-3 text-[19px] font-semibold leading-snug">
                {insight.title}
              </h3>

              <p className={`mt-3 text-[14px] leading-[1.75] ${T.muted}`}>
                {insight.blurb}
              </p>

              <div className={`mt-6 flex items-center gap-2 text-[13px] font-bold ${T.primary}`}>
                Read insight
                <ArrowUpRight size={15} />
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

/* ===============================================================
   FAQ
================================================================ */

function FaqItem({
  faq,
  index,
}: {
  faq: IndustryFaq;
  index: number;
}) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div className="border-b border-[#E2E2EB]">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="flex gap-5">
          <span className="pt-1 text-[11px] font-bold text-[#A2A3B1]">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="text-[16px] font-semibold leading-snug text-[#14163B] sm:text-[18px]">
            {faq.question}
          </span>
        </span>

        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#3B2FE0] text-white transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          <Plus size={16} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="pb-7 pl-10 pr-10 text-[14.5px] leading-[1.8] text-[#686A82]">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FAQ({
  data,
}: {
  data: IndustryContent;
}) {
  return (
    <section className="border-y border-[#E5E5EF] bg-[#F8F8FB] py-24 lg:py-32">
      <div className={ALIGN}>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.65fr_1.35fr]">
          <SectionHeader
            eyebrow="FAQ"
            title="Questions before we start"
            description={`A few answers about building software for ${data.name.toLowerCase()} teams.`}
          />

          <motion.div {...inView} variants={stagger}>
            {data.faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                variants={cardReveal}
              >
                <FaqItem faq={faq} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ===============================================================
   FINAL CTA
================================================================ */

function FinalCTA({
  data,
  images,
}: {
  data: IndustryContent;
  images: IndustryImages;
}) {
  return (
    <section className={`${ALIGN} py-20 lg:py-28`}>
      <motion.div
        {...inView}
        variants={reveal}
        className="relative overflow-hidden rounded-[30px] bg-[#0B0D27] px-7 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
      >
        <div className="absolute inset-0">
          <IndustryImage
            src={images.hero}
            alt=""
            className="opacity-20"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D27] via-[#0B0D27]/90 to-[#0B0D27]/50" />
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#9AA8FF]">
              <span className="h-px w-8 bg-[#9AA8FF]" />
              Let&apos;s build
            </div>

            <h2 className="mt-5 max-w-3xl text-[35px] font-bold leading-[1.06] tracking-[-0.035em] text-white sm:text-[45px] lg:text-[58px]">
              Ready to build better software for {data.name.toLowerCase()}?
            </h2>

            <p className="mt-6 max-w-2xl text-[15px] leading-[1.8] text-white/60">
              Tell us what you&apos;re trying to solve. We&apos;ll help you
              shape the right product, architecture and delivery approach.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-[14px] font-bold text-[#14163B] transition-transform duration-300 hover:-translate-y-1"
          >
            Talk to us
            <ArrowRight size={16} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

/* ===============================================================
   MAIN TEMPLATE
================================================================ */

export default function IndustryPageTemplate({
  data,
}: {
  data: IndustryContent;
}) {
  const images = useMemo(
    () => getImages(data.slug),
    [data.slug]
  );

  return (
    <main className={`${T.ink} overflow-hidden bg-white`}>
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative bg-[#F8F8FB] pt-28 lg:pt-36">
        <div className={ALIGN}>
          <div className="mb-8 flex flex-wrap items-center gap-2 text-[12px] text-[#858697]">
            <Link
              href="/"
              className="transition-colors hover:text-[#3B2FE0]"
            >
              Home
            </Link>

            <span>/</span>

            <Link
              href="/industries"
              className="transition-colors hover:text-[#3B2FE0]"
            >
              Industries
            </Link>

            <span>/</span>

            <span className="text-[#14163B]">{data.name}</span>
          </div>

          <div className="grid min-h-[680px] grid-cols-1 items-center gap-12 pb-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:pb-24">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div
                variants={reveal}
                className={`flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] ${T.primary}`}
              >
                <span className="h-px w-8 bg-[#3B2FE0]" />
                {data.kicker}
              </motion.div>

              <motion.h1
                variants={reveal}
                className="mt-6 max-w-3xl text-[43px] font-bold leading-[1.02] tracking-[-0.045em] sm:text-[55px] lg:text-[70px]"
              >
                {data.headline}
              </motion.h1>

              <motion.p
                variants={reveal}
                className={`mt-7 max-w-2xl text-[16px] leading-[1.8] ${T.muted}`}
              >
                {data.description}
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-9 flex flex-wrap gap-3"
              >
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-[#3B2FE0] px-7 text-[14px] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2E24B8]"
                >
                  Start a conversation
                  <ArrowRight size={16} />
                </Link>

                <a
                  href="#solutions"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-[#DADAE5] bg-white px-7 text-[14px] font-bold text-[#14163B] transition-all duration-300 hover:-translate-y-1"
                >
                  Explore solutions
                  <ChevronDown size={16} />
                </a>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-12 flex items-center gap-4"
              >
                <div className="flex -space-x-2">
                  {[0, 1, 2].map((item) => (
                    <span
                      key={item}
                      className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#F8F8FB] bg-[#E8E8F2] text-[#3B2FE0]"
                    >
                      <Sparkles size={13} />
                    </span>
                  ))}
                </div>

                <p className="text-[12px] leading-relaxed text-[#77798B]">
                  Product thinking + engineering + delivery
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 25,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              <div className="absolute -inset-5 rounded-[38px] bg-[#EAE9FF] blur-2xl" />

              <div className="relative h-[500px] overflow-hidden rounded-[30px] border border-white bg-white shadow-[0_30px_100px_rgba(20,22,59,0.14)] sm:h-[600px]">
                <IndustryImage
                  src={images.hero}
                  alt={data.name}
                  priority
                  className="transition-transform duration-[1400ms] hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D27]/70 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-2xl border border-white/15 bg-[#0B0D27]/50 p-5 backdrop-blur-xl">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9AA8FF]">
                      Built around your business
                    </p>

                    <p className="mt-2 text-[15px] font-medium leading-relaxed text-white">
                      {data.keyTakeaway}
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-7 -left-4 hidden rounded-2xl border border-[#E5E5EF] bg-white p-5 shadow-xl sm:block lg:-left-10">
                <div className="text-[28px] font-bold tracking-tight text-[#14163B]">
                  {data.stats[0]?.value ?? "5+"}
                </div>

                <div className="mt-1 max-w-[130px] text-[10px] font-semibold uppercase leading-relaxed tracking-[0.1em] text-[#77798B]">
                  {data.stats[0]?.label ?? "Years delivering software"}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className={ALIGN}>
          <StatsStrip stats={data.stats} />
        </div>
      </section>

      {/* =========================================================
          TAKEAWAY
      ========================================================= */}

      <Takeaway data={data} />

      {/* =========================================================
          FOUR NEW INDUSTRY-SPECIFIC SECTIONS
      ========================================================= */}

      <ExtraIndustrySections
        data={data}
        images={images}
      />

      {/* =========================================================
          FOCUS
      ========================================================= */}

      <FocusAreas
        data={data}
        images={images}
      />

      {/* =========================================================
          IMPACT
      ========================================================= */}

      <ImpactSection
        data={data}
        images={images}
      />

      {/* =========================================================
          CAPABILITIES
      ========================================================= */}

      <Capabilities data={data} />

      {/* =========================================================
          SOLUTIONS
      ========================================================= */}

      <div id="solutions">
        <Solutions
          data={data}
          images={images}
        />
      </div>

      {/* =========================================================
          TECHNOLOGY
      ========================================================= */}

      <Technology data={data} />

      {/* =========================================================
          INSIGHTS
      ========================================================= */}

      <Insights
        data={data}
        images={images}
      />

      {/* =========================================================
          FAQ
      ========================================================= */}

      <FAQ data={data} />

      {/* =========================================================
          CTA
      ========================================================= */}

      <FinalCTA
        data={data}
        images={images}
      />
    </main>
  );
}


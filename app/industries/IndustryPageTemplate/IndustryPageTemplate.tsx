// components/industries/IndustryPageTemplate/IndustryPageTemplate.tsx

"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ChevronDown,
  Plus,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";

/* ===============================================================
   THEME
================================================================ */

const T = {
  ink: "text-[#14163B]",
  inkBg: "bg-[#0C0E2A]",
  primary: "text-[#3B2FE0]",
  primaryBg: "bg-[#3B2FE0]",
  primaryHoverBg: "hover:bg-[#2E24B8]",
  muted: "text-[#5B5D78]",
  border: "border-[#E4E4EF]",
  panelBg: "bg-[#FAFAFD]",
  accentOnDark: "text-[#8FA8FF]",
};

/* ===============================================================
   ALIGNMENT
================================================================ */

const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

/* ===============================================================
   ANIMATION VARIANTS
================================================================ */

const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.4,
    },
  },
};

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardItem: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const revealProps = {
  initial: "hidden" as const,
  whileInView: "visible" as const,
  viewport: {
    once: true,
    amount: 0.2,
  },
};

/* ===============================================================
   CONTENT TYPES
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
   INDUSTRY IMAGE TYPES
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
   INDUSTRY IMAGES
   Content in data.ts is NOT changed.
   Images are selected based on the industry slug.
================================================================ */

const industryImages: Record<string, IndustryImages> = {
  "ecommerce-retail": {
    hero: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1800&q=85",
    highlight:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=85",
    focus: [
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=900&q=85",
    ],

    impact: [
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=1000&q=85",
    ],

    solutions: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1000&q=85",
    ],
    insights: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85",
    ],
  },

  healthcare: {
    hero:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=85",
    highlight:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1400&q=85",
    focus: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=85",
    ],

    impact: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1000&q=85",
    ],

    solutions: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1000&q=85",
    ],
    insights: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=85",
    ],
  },

  "edtech-elearning": {
    hero:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=85",
    highlight:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=85",
    focus: [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=85",
    ],

    impact: [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=85",
    ],

    solutions: [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85",
    ],
    insights: [
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85",
    ],
  },

  finance: {
    hero:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1800&q=85",
    highlight:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
    focus: [
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=85",
    ],

    impact: [
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=85",
    ],

    solutions: [
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1000&q=85",
    ],
    insights: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=85",
    ],
  },

  "transportation-logistics": {
    hero:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1800&q=85",
    highlight:
      "https://images.unsplash.com/photo-1586528116493-da8b3e6b9d9d?auto=format&fit=crop&w=1400&q=85",
    focus: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&q=85",
    ],

    impact: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=85",
    ],

    solutions: [
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=85",
    ],
    insights: [
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1000&q=85",
    ],
  },

  "travel-booking": {
    hero:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=85",
    highlight:
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1400&q=85",
    focus: [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=900&q=85",
    ],

    impact: [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1000&q=85",
    ],

    solutions: [
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=85",
    ],
    insights: [
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=85",
    ],
  },

  "consumer-goods": {
    hero:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1800&q=85",
    highlight:
      "https://images.unsplash.com/photo-1601598851547-4302969d0c2a?auto=format&fit=crop&w=1400&q=85",
    focus: [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1583258292688-7d58d1d4e8c8?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1601598851547-4302969d0c2a?auto=format&fit=crop&w=900&q=85",
    ],

    impact: [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1583258292688-7d58d1d4e8c8?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1601598851547-4302969d0c2a?auto=format&fit=crop&w=1000&q=85",
    ],

    solutions: [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1601598851547-4302969d0c2a?auto=format&fit=crop&w=1000&q=85",
    ],
    insights: [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1601598851547-4302969d0c2a?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1583258292688-7d58d1d4e8c8?auto=format&fit=crop&w=1000&q=85",
    ],
  },

  "education-institutions": {
    hero:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1800&q=85",
    highlight:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=85",
    focus: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=85",
    ],

    impact: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=85",
    ],

    solutions: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85",
    ],
    insights: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=85",
    ],
  },

  "financial-services": {
    hero:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85",
    highlight:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1400&q=85",
    focus: [
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=85",
    ],

    impact: [
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1000&q=85",
    ],

    solutions: [
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1000&q=85",
    ],
    insights: [
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=85",
    ],
  },

  "energy-utilities": {
    hero:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1800&q=85",
    highlight:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=85",
    focus: [
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=900&q=85",
    ],

    impact: [
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1000&q=85",
    ],

    solutions: [
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=85",
    ],
    insights: [
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1000&q=85",
    ],
  },

  insurance: {
    hero:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=85",
    highlight:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
    focus: [
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
    ],

    impact: [
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
    ],

    solutions: [
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=85",
    ],
    insights: [
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=85",
    ],
  },

  "life-sciences": {
    hero:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1800&q=85",
    highlight:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1400&q=85",
    focus: [
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=900&q=85",
    ],

    impact: [
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1000&q=85",
    ],

    solutions: [
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=85",
    ],
    insights: [
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=85",
    ],
  },

  manufacturing: {
    hero:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1800&q=85",
    highlight:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=85",
    focus: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=85",
    ],

    impact: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=85",
    ],

    solutions: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=85",
    ],
    insights: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=85",
    ],
  },

  "private-equity": {
    hero:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85",
    highlight:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85",
    focus: [
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=900&q=85",
    ],

    impact: [
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1000&q=85",
    ],

    solutions: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
    ],
    insights: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=85",
    ],
  },

  "professional-services": {
    hero:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85",
    highlight:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85",
    focus: [
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
    ],

    impact: [
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
    ],

    solutions: [
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
    ],
    insights: [
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
    ],
  },

  "public-sector": {
    hero:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1800&q=85",
    highlight:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85",
    focus: [
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85",
    ],

    impact: [
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=85",
    ],

    solutions: [
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85",
    ],
    insights: [
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=85",
    ],
  },

  "technology-products-platforms": {
    hero:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=85",
    highlight:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=85",
    focus: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
    ],

    impact: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85",
    ],

    solutions: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85",
    ],
    insights: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85",
    ],
  },

  telecom: {
    hero:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=85",
    highlight:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=85",
    focus: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=85",
    ],

    impact: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=85",
    ],

    solutions: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85",
    ],
    insights: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85",
    ],
  },
};

/* ===============================================================
   FALLBACK IMAGE SET
   Prevents broken UI if a future industry is added.
================================================================ */
/* ===============================================================
   FALLBACK IMAGE SET
   Prevents broken UI if a future industry is added.
================================================================ */

const fallbackImages: IndustryImages = {
  hero:
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=85",

  highlight:
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85",

  focus: [
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85",
  ],

  impact: [
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
  ],

  solutions: [
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
  ],

  insights: [
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
  ],
};

/* ===============================================================
   SMALL INTERACTIVE PIECES
================================================================ */

function KeyTakeaways({ text }: { text: string }) {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`overflow-hidden rounded-xl border ${T.border} bg-white`}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-6 py-5 text-left"
      >
        <span
          className={`flex items-center gap-2 text-[15px] font-semibold ${T.primary}`}
        >
          <Sparkles size={16} />
          Key Takeaways
        </span>

        <ChevronDown
          size={18}
          className={`${T.muted} transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
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
            <p
              className={`px-6 pb-6 text-[15px] leading-relaxed ${T.muted}`}
            >
              {text}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ImpactTabs({
  points,
  images,
}: {
  points: IndustryImpactPoint[];
  images: string[];
}) {
  const [active, setActive] = useState(0);
  const current = points[active];
  const currentImage = images[active % images.length];

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.82fr_1.55fr] lg:items-stretch">
      {/* LEFT TABS */}
      <div className="flex flex-col border-l-2 border-[#E4E4EF]">
        {points.map((p, i) => (
          <button
            key={p.label}
            type="button"
            onClick={() => setActive(i)}
            className={`group relative -ml-[2px] flex min-h-[68px] items-center border-l-2 px-6 py-4 text-left text-[15.5px] transition-all duration-200 ${
              i === active
                ? `border-[#3B2FE0] bg-[#FAFAFD] font-semibold ${T.primary}`
                : `border-transparent ${T.muted} hover:border-[#CFCFE3] hover:bg-[#FAFAFD] hover:text-[#14163B]`
            }`}
          >
            <span className="leading-snug">{p.label}</span>
          </button>
        ))}
      </div>

      {/* RIGHT TEXT + IMAGE */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`overflow-hidden rounded-2xl border ${T.border} bg-white`}
      >
        <div className="grid h-full grid-cols-1 md:grid-cols-[1fr_0.9fr]">
          {/* TEXT */}
          <div className="flex flex-col justify-center p-8 lg:p-10">
            <p
              className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${T.primary}`}
            >
              {current.label}
            </p>

            <p className="mt-5 text-[16px] leading-[1.75] text-[#14163B]">
              {current.body}
            </p>
          </div>

          {/* IMAGE */}
          <div className="group relative min-h-[280px] overflow-hidden md:min-h-[360px]">
            <IndustryImage
              src={currentImage}
              alt={current.label}
              className="transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#0C0E2A]/20 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5">
              <span className="rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#3B2FE0] shadow-sm">
                {active + 1} / {points.length}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function CapabilityRow({
  c,
}: {
  c: IndustryCapability;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl bg-white">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-[15.5px] font-semibold text-[#14163B]">
          {c.title}
        </span>

        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${T.primaryBg} text-white transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          <Plus size={14} strokeWidth={2.5} />
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
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p
              className={`px-6 pb-5 text-[14.5px] leading-relaxed ${T.muted}`}
            >
              {c.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FaqRow({
  faq,
}: {
  faq: IndustryFaq;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`overflow-hidden rounded-xl border ${T.border} bg-white`}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
      >
        <span className="text-[15px] font-semibold text-[#14163B]">
          {faq.question}
        </span>

        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${T.primaryBg} text-white transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          <Plus size={14} strokeWidth={2.5} />
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
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p
              className={`px-6 pb-5 text-[14.5px] leading-relaxed ${T.muted}`}
            >
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ===============================================================
   IMAGE COMPONENT
================================================================ */

function IndustryImage({
  src,
  alt = "",
  className = "",
}: {
  src: string;
  alt?: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`h-full w-full object-cover ${className}`}
    />
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
  const images =
    industryImages[data.slug] ?? fallbackImages;

  return (
    <main className={`${T.ink} bg-white`}>
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="border-b border-[#E4E4EF]">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className={`${ALIGN} pb-16 pt-32 lg:pt-40`}
        >
          {/* Breadcrumb */}
          <motion.div
            variants={item}
            className="mb-10 flex items-center gap-2 text-[13px] text-[#77798E]"
          >
            <Link
              href="/"
              className="transition-colors hover:text-[#3B2FE0]"
            >
              Home
            </Link>

            <span>›</span>

            <Link
              href="/industries"
              className="transition-colors hover:text-[#3B2FE0]"
            >
              Industries
            </Link>

            <span>›</span>

            <span className={T.ink}>{data.name}</span>
          </motion.div>

          {/* Hero content */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
            {/* Hero text */}
            <div className="flex h-full flex-col justify-start">
              <motion.p
                variants={item}
                className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${T.primary}`}
              >
                {data.kicker}
              </motion.p>

              <motion.h1
                variants={item}
                className="mt-5 max-w-3xl text-[38px] font-bold leading-[1.08] tracking-tight sm:text-[46px] lg:text-[58px]"
              >
                {data.headline}
              </motion.h1>

              <motion.p
                variants={item}
                className={`mt-6 max-w-2xl text-[16.5px] leading-relaxed ${T.muted}`}
              >
                {data.description}
              </motion.p>

              <motion.div
                variants={item}
                className="mt-9 flex flex-wrap items-center gap-3"
              >
                <motion.button
                  type="button"
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className={`flex h-11 items-center gap-2 rounded-md px-6 text-[15px] font-semibold text-white transition-colors duration-150 ${T.primaryBg} ${T.primaryHoverBg}`}
                >
                  Talk to us
                  <ArrowRight size={15} />
                </motion.button>

                <motion.div
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                >
                  <Link
                    href="#capabilities"
                    className={`flex h-11 items-center gap-1.5 rounded-md border ${T.border} px-6 text-[15px] font-semibold ${T.ink} transition-colors duration-150 hover:bg-[#F5F5F9]`}
                  >
                    See what we deliver
                    <ArrowRight size={15} />
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Hero image */}
            <motion.div
              variants={item}
              className="group relative min-h-[380px] overflow-hidden rounded-2xl sm:min-h-[460px] lg:min-h-[540px]"
            >
              <IndustryImage
                src={images.hero}
                alt={data.name}
                className="transition-transform duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E2A]/65 via-[#0C0E2A]/5 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-xl border border-white/20 bg-white/95 p-5 shadow-xl backdrop-blur-md">
                  <p
                    className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${T.primary}`}
                  >
                    {data.name}
                  </p>

                  <p className="mt-2 text-[16px] font-semibold leading-snug text-[#14163B]">
                    Industry-focused digital solutions
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            variants={item}
            className={`mt-10 overflow-hidden rounded-2xl ${T.inkBg} p-7 sm:p-8`}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
              {data.name} at a glance
            </p>

            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            >
              {data.stats.map((s) => (
                <motion.div
                  key={s.label}
                  variants={cardItem}
                  className="border-white/10 py-4 sm:px-6 sm:first:pl-0 lg:border-l lg:first:border-l-0 lg:first:pl-0"
                >
                  <p
                    className={`text-[30px] font-bold leading-none ${T.accentOnDark}`}
                  >
                    {s.value}
                  </p>

                  <p className="mt-2 max-w-[220px] text-[13.5px] leading-snug text-white/65">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================================
          KEY TAKEAWAYS
      ========================================================= */}

      <section className={`${ALIGN} py-16`}>
        <motion.div {...revealProps} variants={item}>
          <KeyTakeaways text={data.keyTakeaway} />
        </motion.div>

        {/* Highlight with image */}
        <motion.div
          {...revealProps}
          variants={item}
          className={`mt-10 overflow-hidden rounded-2xl border ${T.border} bg-white`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Content */}
            <div className="flex flex-col justify-center p-8 lg:p-10 xl:p-12">
              <p
                className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${T.primary}`}
              >
                Industry perspective
              </p>

              <h2 className="mt-4 text-[24px] font-semibold leading-snug lg:text-[30px]">
                {data.highlight.title}
              </h2>

              <p
                className={`mt-5 max-w-3xl text-[15px] leading-relaxed ${T.muted}`}
              >
                {data.highlight.body}
              </p>
            </div>

            {/* Image */}
            <div className="group relative min-h-[320px] overflow-hidden lg:min-h-[420px]">
              <IndustryImage
                src={images.highlight}
                alt={data.highlight.title}
                className="transition-transform duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#0C0E2A]/10 to-transparent" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          FOCUS AREAS
      ========================================================= */}

      <section className={`${T.panelBg} border-y ${T.border}`}>
        <div className={`${ALIGN} py-20`}>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.75fr_1.5fr] lg:items-start">
            {/* Heading */}
            <motion.div {...revealProps} variants={item}>
              <p
                className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${T.primary}`}
              >
                What we focus on
              </p>

              <h2 className="mt-3 text-[26px] font-bold leading-tight lg:text-[30px]">
                {data.name} focus areas
              </h2>

              <p
                className={`mt-4 text-[15px] leading-relaxed ${T.muted}`}
              >
                Practical, purpose-built solutions across the{" "}
                {data.name.toLowerCase()} value chain.
              </p>
            </motion.div>

            {/* Cards */}
            <motion.div
              {...revealProps}
              variants={container}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2"
            >
              {data.focusAreas.map((f, index) => (
                <motion.div
                  key={f.title}
                  variants={cardItem}
                  className="group overflow-hidden rounded-xl bg-white shadow-[0_1px_0_rgba(20,22,59,0.04)]"
                >
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <IndustryImage
                      src={
                        images.focus[
                          index % images.focus.length
                        ]
                      }
                      alt={f.title}
                      className="transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E2A]/45 to-transparent" />

                    <div className="absolute bottom-4 left-4">
                      <span className="rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-[#3B2FE0]">
                        0{index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="p-6">
                    <h3 className="text-[16px] font-semibold">
                      {f.title}
                    </h3>

                    <p
                      className={`mt-2.5 text-[14px] leading-relaxed ${T.muted}`}
                    >
                      {f.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          IMPACT
      ========================================================= */}

      <section className={`${ALIGN} py-20`}>
        <motion.div {...revealProps} variants={item}>
          <p
            className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${T.primary}`}
          >
            Business outcomes
          </p>

          <h2 className="mt-3 text-[26px] font-bold leading-tight lg:text-[30px]">
            The impact you can expect
          </h2>
        </motion.div>

        <motion.div
          {...revealProps}
          variants={item}
          className="mt-10"
        >
          <ImpactTabs points={data.impactPoints} images={images.impact} />
        </motion.div>
      </section>

      {/* =========================================================
          CAPABILITIES
      ========================================================= */}

      <section id="capabilities" className={T.inkBg}>
        <div className={`${ALIGN} py-20`}>
          <motion.div {...revealProps} variants={item}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8FA8FF]">
              What we deliver
            </p>

            <h2 className="mt-3 max-w-lg text-[26px] font-bold leading-tight text-white lg:text-[30px]">
              Our {data.name.toLowerCase()} capabilities
            </h2>
          </motion.div>

          <motion.div
            {...revealProps}
            variants={container}
            className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2"
          >
            {data.capabilities.map((c) => (
              <motion.div
                key={c.title}
                variants={cardItem}
              >
                <CapabilityRow c={c} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          SOLUTIONS
      ========================================================= */}

      <section className={`border-b ${T.border}`}>
        <div className={`${ALIGN} py-20`}>
          <motion.div {...revealProps} variants={item}>
            <p
              className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${T.primary}`}
            >
              Solutions
            </p>

            <h2 className="mt-3 text-[26px] font-bold leading-tight lg:text-[30px]">
              {data.name} solutions
            </h2>
          </motion.div>

          <motion.div
            {...revealProps}
            variants={container}
            className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {data.solutions.map((s, index) => (
              <motion.div
                key={s.title}
                variants={cardItem}
                className={`group overflow-hidden rounded-2xl ${T.panelBg}`}
              >
                {/* Solution image */}
                <div className="relative h-56 overflow-hidden">
                  <IndustryImage
                    src={
                      images.solutions[
                        index % images.solutions.length
                      ]
                    }
                    alt={s.title}
                    className="transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E2A]/50 to-transparent" />

                  <div className="absolute bottom-5 left-5">
                    <span className="rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-[#3B2FE0]">
                      Solution
                    </span>
                  </div>
                </div>

                {/* Solution content */}
                <div className="p-8">
                  <h3 className="text-[18px] font-semibold">
                    {s.title}
                  </h3>

                  <p
                    className={`mt-3 text-[14.5px] leading-relaxed ${T.muted}`}
                  >
                    {s.description}
                  </p>

                  <motion.a
                    href="#"
                    whileHover={{
                      x: 4,
                    }}
                    className={`mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold ${T.primary}`}
                  >
                    Learn more
                    <ArrowUpRight size={15} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY STACK
      ========================================================= */}

      <section className={`${T.panelBg} border-b ${T.border}`}>
        <div className={`${ALIGN} py-16`}>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.4fr] lg:items-center">
            <motion.div {...revealProps} variants={item}>
              <p
                className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${T.primary}`}
              >
                Technology
              </p>

              <h2 className="mt-3 text-[22px] font-bold leading-snug lg:text-[26px]">
                Technologies we build with
              </h2>

              <p
                className={`mt-3 text-[14.5px] leading-relaxed ${T.muted}`}
              >
                A modern, proven stack chosen for the specific needs of{" "}
                {data.name.toLowerCase()} products.
              </p>
            </motion.div>

            <motion.div
              {...revealProps}
              variants={container}
              className="flex flex-wrap gap-3"
            >
              {data.techStack.map((tName) => (
                <motion.span
                  key={tName}
                  variants={cardItem}
                  className={`flex h-11 items-center rounded-lg border ${T.border} bg-white px-5 text-[14px] font-semibold ${T.ink} transition-all duration-200 hover:-translate-y-0.5 hover:border-[#3B2FE0]/30 hover:shadow-sm`}
                >
                  {tName}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INSIGHTS
      ========================================================= */}

      <section className={`${ALIGN} py-20`}>
        <motion.div
          {...revealProps}
          variants={item}
          className="flex items-end justify-between gap-6"
        >
          <div>
            <p
              className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${T.primary}`}
            >
              Resources
            </p>

            <h2 className="mt-3 text-[26px] font-bold leading-tight lg:text-[30px]">
              Insights
            </h2>
          </div>

          <Link
            href="#"
            className={`hidden shrink-0 items-center gap-1.5 text-[14px] font-semibold ${T.primary} sm:flex`}
          >
            View all insights
            <ArrowUpRight size={15} />
          </Link>
        </motion.div>

        <motion.div
          {...revealProps}
          variants={container}
          className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {data.insights.map((ins, index) => (
            <motion.div
              key={ins.title}
              variants={cardItem}
              className={`group overflow-hidden rounded-2xl border ${T.border} bg-white`}
            >
              {/* Insight image */}
              <div className="relative h-48 overflow-hidden">
                <IndustryImage
                  src={
                    images.insights[
                      index % images.insights.length
                    ]
                  }
                  alt={ins.title}
                  className="transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E2A]/55 to-transparent" />

                <div className="absolute left-5 top-5">
                  <span className="rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#3B2FE0]">
                    {ins.tag}
                  </span>
                </div>
              </div>

              {/* Insight content */}
              <div className="p-7">
                <p
                  className={`text-[11px] font-semibold uppercase tracking-[0.12em] ${T.primary}`}
                >
                  {ins.tag}
                </p>

                <h3 className="mt-3 text-[16.5px] font-semibold leading-snug">
                  {ins.title}
                </h3>

                <p
                  className={`mt-2.5 text-[14px] leading-relaxed ${T.muted}`}
                >
                  {ins.blurb}
                </p>

                <div
                  className={`mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold ${T.primary}`}
                >
                  Read insight
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}

      <section className={`${T.panelBg} border-y ${T.border}`}>
        <div className={`${ALIGN} py-20`}>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.7fr_1.4fr]">
            <motion.div {...revealProps} variants={item}>
              <p
                className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${T.primary}`}
              >
                FAQ
              </p>

              <h2 className="mt-3 text-[26px] font-bold leading-tight lg:text-[30px]">
                Frequently asked questions
              </h2>
            </motion.div>

            <motion.div
              {...revealProps}
              variants={container}
              className="flex flex-col gap-4"
            >
              {data.faqs.map((f) => (
                <motion.div
                  key={f.question}
                  variants={cardItem}
                >
                  <FaqRow faq={f} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CLOSING CTA
      ========================================================= */}

      <section className={`${ALIGN} py-20`}>
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`relative flex flex-col justify-between overflow-hidden rounded-2xl ${T.inkBg} p-8 text-white sm:flex-row sm:items-center lg:p-12`}
        >
          {/* Decorative image */}
          <div className="absolute right-0 top-0 h-full w-full opacity-20 lg:w-[45%]">
            <IndustryImage
              src={images.hero}
              alt=""
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#0C0E2A] via-[#0C0E2A]/70 to-transparent" />
          </div>

          <div className="relative z-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8FA8FF]">
              Let&apos;s build
            </p>

            <h3 className="mt-3 text-[21px] font-semibold leading-snug lg:text-[24px]">
              Ready to talk about {data.name.toLowerCase()}?
            </h3>

            <p className="mt-2 max-w-md text-[14px] leading-relaxed text-white/65">
              Tell us what you&apos;re trying to solve — we&apos;ll bring the
              right team into the conversation.
            </p>
          </div>

          <motion.button
            type="button"
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="relative z-10 mt-6 flex h-11 shrink-0 items-center gap-2 rounded-md bg-white px-6 text-[15px] font-semibold text-[#14163B] transition-colors duration-150 hover:bg-white/90 sm:mt-0"
          >
            Talk to us
            <ArrowRight size={15} />
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
}
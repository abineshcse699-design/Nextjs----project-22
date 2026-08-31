// components/industries/IndustryPageTemplate/IndustryPageTemplate.tsx

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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
    hero: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=72",
    highlight:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=72",
    focus: [
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=800&q=72",
    ],

    impact: [
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=800&q=72",
    ],

    solutions: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=72",
    ],
    insights: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=72",
    ],
  },

  healthcare: {
    hero:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=72",
    highlight:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1000&q=72",
    focus: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=72",
    ],

    impact: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=72",
    ],

    solutions: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&q=72",
    ],
    insights: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=72",
    ],
  },

  "edtech-elearning": {
    hero:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=72",
    highlight:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=72",
    focus: [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=72",
    ],

    impact: [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=72",
    ],

    solutions: [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=72",
    ],
    insights: [
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=72",
    ],
  },

  finance: {
    hero:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=72",
    highlight:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=72",
    focus: [
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=72",
    ],

    impact: [
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=72",
    ],

    solutions: [
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=72",
    ],
    insights: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=72",
    ],
  },

  "transportation-logistics": {
    hero:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1200&q=72",
    highlight:
      "https://images.unsplash.com/photo-1586528116493-da8b3e6b9d9d?auto=format&fit=crop&w=1000&q=72",
    focus: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=72",
    ],

    impact: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=72",
    ],

    solutions: [
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=72",
    ],
    insights: [
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=72",
    ],
  },

  "travel-booking": {
    hero:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=72",
    highlight:
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1000&q=72",
    focus: [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=72",
    ],

    impact: [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=72",
    ],

    solutions: [
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=72",
    ],
    insights: [
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=72",
    ],
  },

  "consumer-goods": {
    hero:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=72",
    highlight:
      "https://images.unsplash.com/photo-1601598851547-4302969d0c2a?auto=format&fit=crop&w=1000&q=72",
    focus: [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1583258292688-7d58d1d4e8c8?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1601598851547-4302969d0c2a?auto=format&fit=crop&w=800&q=72",
    ],

    impact: [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1583258292688-7d58d1d4e8c8?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1601598851547-4302969d0c2a?auto=format&fit=crop&w=800&q=72",
    ],

    solutions: [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1601598851547-4302969d0c2a?auto=format&fit=crop&w=800&q=72",
    ],
    insights: [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1601598851547-4302969d0c2a?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1583258292688-7d58d1d4e8c8?auto=format&fit=crop&w=800&q=72",
    ],
  },

  "education-institutions": {
    hero:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=72",
    highlight:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=72",
    focus: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=72",
    ],

    impact: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=72",
    ],

    solutions: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=72",
    ],
    insights: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=72",
    ],
  },

  "financial-services": {
    hero:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=72",
    highlight:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1000&q=72",
    focus: [
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=72",
    ],

    impact: [
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=72",
    ],

    solutions: [
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=72",
    ],
    insights: [
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=72",
    ],
  },

  "energy-utilities": {
    hero:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=72",
    highlight:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=72",
    focus: [
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=72",
    ],

    impact: [
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=72",
    ],

    solutions: [
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=72",
    ],
    insights: [
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=72",
    ],
  },

  insurance: {
    hero:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=72",
    highlight:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=72",
    focus: [
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=72",
    ],

    impact: [
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=72",
    ],

    solutions: [
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=72",
    ],
    insights: [
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=72",
    ],
  },

  "life-sciences": {
    hero:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=72",
    highlight:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=72",
    focus: [
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=72",
    ],

    impact: [
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=72",
    ],

    solutions: [
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=72",
    ],
    insights: [
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=72",
    ],
  },

  manufacturing: {
    hero:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=72",
    highlight:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=72",
    focus: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=72",
    ],

    impact: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=72",
    ],

    solutions: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=72",
    ],
    insights: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=72",
    ],
  },

  "private-equity": {
    hero:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=72",
    highlight:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=72",
    focus: [
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=72",
    ],

    impact: [
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=72",
    ],

    solutions: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=72",
    ],
    insights: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=72",
    ],
  },

  "professional-services": {
    hero:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=72",
    highlight:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=72",
    focus: [
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=72",
    ],

    impact: [
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=72",
    ],

    solutions: [
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=72",
    ],
    insights: [
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=72",
    ],
  },

  "public-sector": {
    hero:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=72",
    highlight:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=72",
    focus: [
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=72",
    ],

    impact: [
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=72",
    ],

    solutions: [
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=72",
    ],
    insights: [
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=72",
    ],
  },

  "technology-products-platforms": {
    hero:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=72",
    highlight:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=72",
    focus: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=72",
    ],

    impact: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=72",
    ],

    solutions: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=72",
    ],
    insights: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=72",
    ],
  },

  telecom: {
    hero:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=72",
    highlight:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=72",
    focus: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=72",
    ],

    impact: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=72",
    ],

    solutions: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=72",
    ],
    insights: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=72",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=72",
    ],
  },

};

// Route aliases that reuse an existing industry image set.
industryImages.banking = industryImages.finance;
industryImages.retail = industryImages["ecommerce-retail"];
industryImages["travel-hospitality"] = industryImages["travel-booking"];


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
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=72",

  highlight:
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=72",

  focus: [
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=72",
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=72",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=72",
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=72",
  ],

  impact: [
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=72",
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=72",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=72",
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=72",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=72",
  ],

  solutions: [
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=72",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=72",
  ],

  insights: [
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=72",
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=72",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=72",
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

// function ImpactTabs({
//   points,
//   images,
// }: {
//   points: IndustryImpactPoint[];
//   images: string[];
// }) {
//   const [active, setActive] = useState(0);

//   if (!points.length) return null;

//   const safeActive = Math.min(active, points.length - 1);
//   const current = points[safeActive];
//   const currentImage =
//     images.length > 0
//       ? images[safeActive % images.length]
//       : fallbackImages.hero;

//   return (
//     <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.82fr_1.55fr] lg:items-stretch">
//       {/* =========================================================
//           LEFT — VIDEO-MATCHED VERTICAL TABS
//       ========================================================= */}
//       <div className="relative self-stretch">
//         {/* Light vertical rail */}
//         <div className="absolute left-0 top-0 h-full w-px bg-[#E4E4EF]" />

//         <div className="flex flex-col">
//           {points.map((point, index) => {
//             const isActive = index === safeActive;

//             return (
//               <motion.button
//                 key={point.label}
//                 type="button"
//                 onClick={() => setActive(index)}
//                 className="group relative flex min-h-[68px] w-full items-center pl-7 pr-5 text-left"
//                 whileHover={{ x: 3 }}
//                 whileTap={{ scale: 0.995 }}
//                 transition={{ duration: 0.2, ease: "easeOut" }}
//                 aria-current={isActive ? "true" : undefined}
//               >
//                 {/* Moving black indicator — layoutId makes it follow the
//                     exact active row like the reference video. */}
//                 {isActive && (
//                   <motion.span
//                     layoutId="impact-active-indicator"
//                     className="absolute left-0 top-0 h-full w-[2px] bg-[#14163B]"
//                     transition={{
//                       type: "spring",
//                       stiffness: 380,
//                       damping: 34,
//                       mass: 0.7,
//                     }}
//                   />
//                 )}

//                 {/* Very subtle active row background */}
//                 <motion.span
//                   aria-hidden="true"
//                   className="pointer-events-none absolute inset-y-0 left-2 right-0 -z-10 rounded-lg bg-[#FAFAFD]"
//                   initial={false}
//                   animate={{ opacity: isActive ? 1 : 0 }}
//                   transition={{ duration: 0.25, ease: "easeOut" }}
//                 />

//                 <motion.span
//                   animate={{
//                     color: isActive ? "#14163B" : "#77798E",
//                     opacity: isActive ? 1 : 0.72,
//                     fontWeight: isActive ? 600 : 400,
//                   }}
//                   transition={{
//                     duration: 0.3,
//                     ease: [0.22, 1, 0.36, 1],
//                   }}
//                   className="text-[15.5px] leading-snug"
//                 >
//                   {point.label}
//                 </motion.span>
//               </motion.button>
//             );
//           })}
//         </div>
//       </div>

//       {/* =========================================================
//           RIGHT — SMOOTH CONTENT / IMAGE TRANSITION
//       ========================================================= */}
//       <div className="relative min-h-[380px] overflow-hidden rounded-2xl border border-[#E4E4EF] bg-white">
//         <AnimatePresence mode="wait" initial={false}>
//           <motion.div
//             key={safeActive}
//             initial={{ opacity: 0, x: 34 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -24 }}
//             transition={{
//               duration: 0.5,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="h-full"
//           >
//             <div className="grid h-full grid-cols-1 md:grid-cols-[1fr_0.9fr]">
//               {/* TEXT */}
//               <motion.div
//                 initial={{ opacity: 0, y: 18 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 0.55,
//                   delay: 0.08,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//                 className="flex flex-col justify-center p-8 lg:p-10"
//               >
//                 <motion.p
//                   initial={{ opacity: 0, y: 8 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.35, delay: 0.14 }}
//                   className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${T.primary}`}
//                 >
//                   {current.label}
//                 </motion.p>

//                 <motion.p
//                   initial={{ opacity: 0, y: 12 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{
//                     duration: 0.5,
//                     delay: 0.18,
//                     ease: [0.22, 1, 0.36, 1],
//                   }}
//                   className="mt-5 text-[16px] leading-[1.75] text-[#14163B]"
//                 >
//                   {current.body}
//                 </motion.p>
//               </motion.div>

//               {/* IMAGE */}
//               <div className="group relative min-h-[280px] overflow-hidden md:min-h-[380px]">
//                 <motion.div
//                   initial={{ opacity: 0, scale: 1.08 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{
//                     duration: 0.75,
//                     ease: [0.22, 1, 0.36, 1],
//                   }}
//                   className="absolute inset-0"
//                 >
//                   <IndustryImage
//                     src={currentImage}
//                     alt={current.label}
//                     className="transition-transform duration-[1400ms] ease-out group-hover:scale-105"
//                   />
//                 </motion.div>

//                 <div className="absolute inset-0 bg-gradient-to-r from-[#0C0E2A]/20 via-transparent to-transparent" />

//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.35, delay: 0.22 }}
//                   className="absolute bottom-5 left-5"
//                 >
//                   <span className="rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#3B2FE0] shadow-sm backdrop-blur-md">
//                     {String(safeActive + 1).padStart(2, "0")} / {String(points.length).padStart(2, "0")}
//                   </span>
//                 </motion.div>
//               </div>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }

/* ===============================================================
   IMPACT TABS
   Same interaction pattern as Digital & Software Services:
   - autoplay every 4 seconds
   - pause on hover
   - click to select
   - animated vertical progress indicator
   - animated content/image transition
================================================================ */

function ImpactTabs({
  points,
  images,
}: {
  points: IndustryImpactPoint[];
  images: string[];
}) {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);

  /*
   * Prevent invalid active index if data changes.
   */
  const safeActive =
    points.length > 0 ? Math.min(active, points.length - 1) : 0;

  const current = points[safeActive];

  const currentImage =
    images.length > 0
      ? images[safeActive % images.length]
      : fallbackImages.hero;

  /*
   * ---------------------------------------------------------------
   * AUTOPLAY
   * Same behavior as Digital & Software Services.
   * ---------------------------------------------------------------
   */
  useEffect(() => {
  if (!points.length || hovered) {
    return undefined;
  }

  const timer = window.setInterval(() => {
    setActive((prev) => (prev + 1) % points.length);
  }, 4000);

  return () => {
    window.clearInterval(timer);
  };
}, [hovered, points.length]);

  /*
   * No impact points = nothing to render.
   */
  if (!points.length) {
    return null;
  }

  return (
    <>
      {/* =========================================================
          PROGRESS ANIMATION
      ========================================================= */}
      <style>{`
        @keyframes industry-impact-progress {
          from {
            transform: scaleY(0);
          }
          to {
            transform: scaleY(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .industry-impact-progress {
            animation: none !important;
            transform: scaleY(1) !important;
          }
        }
      `}</style>

      <div
        className="grid grid-cols-1 gap-8 lg:grid-cols-[0.82fr_1.55fr] lg:items-stretch"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* =======================================================
            LEFT TAB LIST
        ======================================================= */}
        <div className="relative">
          {/* Full inactive rail */}
          <div className="absolute left-0 top-0 h-full w-[2px] bg-[#E4E4EF]" />

          <div className="flex flex-col">
            {points.map((point, index) => {
              const isActive = index === safeActive;

              return (
                <div
                  key={point.label}
                  className="relative min-h-[68px]"
                >
                  {/* ------------------------------------------------
                      ACTIVE PROGRESS LINE
                  ------------------------------------------------ */}
                {isActive && (
  <span
    key={`${safeActive}-${hovered}`}
    className="industry-impact-progress pointer-events-none absolute left-0 top-0 z-10 h-full w-[2px] origin-top bg-[#3B2FE0]"
    style={{
      animation: hovered
        ? "none"
        : "industry-impact-progress 4000ms linear forwards",
      transform: hovered ? "scaleY(1)" : undefined,
    }}
  />
)}


                  {/* ------------------------------------------------
                      TAB BUTTON
                  ------------------------------------------------ */}
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    aria-current={isActive ? "true" : undefined}
                    className="group relative flex min-h-[68px] w-full items-center px-6 py-4 text-left"
                  >
                    {/* Hover background */}
                    <motion.span
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.25,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="pointer-events-none absolute inset-y-1 left-2 right-0 rounded-lg bg-[#FAFAFD]"
                    />

                    {/* Label */}
                    <motion.span
                      initial={false}
                      animate={{
                        color: isActive ? "#14163B" : "#9CA0B3",
                        x: isActive ? 3 : 0,
                        opacity: isActive ? 1 : 0.8,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="relative z-10 text-[15.5px] leading-snug"
                      style={{
                        fontWeight: isActive ? 600 : 500,
                      }}
                    >
                      {point.label}
                    </motion.span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* =======================================================
            RIGHT CONTENT PANEL
        ======================================================= */}
        <div
          className={`relative min-h-[380px] overflow-hidden rounded-2xl border ${T.border} bg-white`}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={safeActive}
              initial={{
                opacity: 0,
                x: 35,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -25,
              }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid h-full grid-cols-1 md:grid-cols-[1fr_0.9fr]"
            >
              {/* =================================================
                  TEXT
              ================================================= */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 16,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col justify-center p-8 lg:p-10"
              >
                {/* Kicker */}
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.12,
                  }}
                  className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${T.primary}`}
                >
                  {current.label}
                </motion.p>

                {/* Body */}
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 14,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.18,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mt-5 text-[16px] leading-[1.75] text-[#14163B]"
                >
                  {current.body}
                </motion.p>
              </motion.div>

              {/* =================================================
                  IMAGE
              ================================================= */}
              <div className="group relative min-h-[280px] overflow-hidden md:min-h-[380px]">
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 1.08,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0"
                >
                  <IndustryImage
                    src={currentImage}
                    alt={current.label}
                    className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                </motion.div>

                {/* Image overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0C0E2A]/20 via-transparent to-transparent" />

                {/* Counter */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.25,
                  }}
                  className="absolute bottom-5 left-5"
                >
                  <span className="inline-flex rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#3B2FE0] shadow-sm backdrop-blur-md">
                    {String(safeActive + 1).padStart(2, "0")} /{" "}
                    {String(points.length).padStart(2, "0")}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
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
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-[15.5px] font-semibold text-[#14163B]">
          {c.title}
        </span>

        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${T.primaryBg} text-white transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          <Plus size={14} strokeWidth={2.5} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className={`px-6 pb-5 text-[14.5px] leading-relaxed ${T.muted}`}>
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
    <div className={`overflow-hidden rounded-xl border ${T.border} bg-white`}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
      >
        <span className="text-[15px] font-semibold text-[#14163B]">
          {faq.question}
        </span>

        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${T.primaryBg} text-white transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          <Plus size={14} strokeWidth={2.5} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className={`px-6 pb-5 text-[14.5px] leading-relaxed ${T.muted}`}>
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
  priority = false,
}: {
  src?: string;
  alt?: string;
  className?: string;
  priority?: boolean;
}) {
  const fallbackSrc = fallbackImages.hero;

  // Store the URL that failed instead of a global boolean.
  // This is important when ImpactTabs changes from one image to another.
  const [failedSrc, setFailedSrc] = useState<string | null>(null);

  const imageSrc = src || fallbackSrc;
  const isFailed = failedSrc === imageSrc;

  if (isFailed) {
    // The fallback itself failed, so render a safe local-looking placeholder
    // instead of causing an infinite onError -> setState loop.
    if (imageSrc === fallbackSrc) {
      return (
        <div
          className={`h-full w-full bg-[#F1F1F7] ${className}`}
          role="img"
          aria-label={alt || "Image unavailable"}
        />
      );
    }

    return (
      <Image
        src={fallbackSrc}
        alt={alt}
        fill
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        quality={75}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
        onError={() => setFailedSrc(fallbackSrc)}
        className={`object-cover ${className}`}
      />
    );
  }

  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      quality={75}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
      onError={() => setFailedSrc(imageSrc)}
      className={`object-cover ${className}`}
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
    industryImages[data.slug] ??
    fallbackImages;

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
                priority
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
                      images.focus.length > 0 ? images.focus[index % images.focus.length] : fallbackImages.hero
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
  {/* Impact heading animation */}
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
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    }}
  >
    <p
      className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${T.primary}`}
    >
      Business outcomes
    </p>

    <h2 className="mt-3 text-[26px] font-bold leading-tight lg:text-[30px]">
      The impact you can expect
    </h2>
  </motion.div>

  {/* Impact content animation */}
  <motion.div
    initial={{
      opacity: 0,
      y: 35,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    viewport={{
      once: true,
      amount: 0.15,
    }}
    transition={{
      duration: 0.9,
      delay: 0.12,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="mt-10"
  >
    <ImpactTabs
      points={data.impactPoints}
      images={images.impact}
    />
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
                    images.solutions.length > 0 ? images.solutions[index % images.solutions.length] : fallbackImages.hero
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
                  images.insights.length > 0 ? images.insights[index % images.insights.length] : fallbackImages.hero
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
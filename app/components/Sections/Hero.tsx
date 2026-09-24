"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Config — edit these to change copy without touching the JSX below  */
/* ------------------------------------------------------------------ */

const ROTATING_WORDS = [
  "Software Engineering.",
  "Product Engineering.",
  "Cloud Automation.",
  "AI-Native Platforms.",
];

const SERVICE_TICKER = [
  "Product Engineering",
  "AI Integration",
  "Cloud Platforms",
  "DevOps & Automation",
  "Mobile Apps",
  "Data Systems",
  "Design Systems",
];

const PROOF_STATS: { value: string; label: string }[] = [
  { value: "60+", label: "products shipped" },
  { value: "100+", label: "entrance trust page" },
  { value: "24/7", label: "engineering support" },
];

/* ------------------------------------------------------------------ */
/*  SPACING — inga mattum maathina podhum                              */
/*                                                                     */
/*  NAVBAR_H = unga navbar height (px)                                 */
/*  GAP      = navbar-ku keela irukura gap == stats-ku keela irukura   */
/*             gap. Rendu edathulayum idhe value dhaan use aagum.      */
/*                                                                     */
/*  Tailwind dynamic class work aagaadhu, adhunaala inline style       */
/*  use pannirukken.                                                   */
/* ------------------------------------------------------------------ */

const NAVBAR_H = 90; // <-- unga navbar height
const GAP = 100; // <-- top & bottom equal gap

/* ------------------------------------------------------------------ */
/*  Entrance animation variants                                        */
/* ------------------------------------------------------------------ */

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.4,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const helveticaStyle = {
  fontFamily: '"Helvetica Neue", Helvetica, Arial, "Segoe UI", sans-serif',
};

/* ------------------------------------------------------------------ */
/*  Typewriter hook                                                    */
/* ------------------------------------------------------------------ */

function useTypewriter(words: string[]) {
  const [text, setText] = useState(words[0]);
  const [caretPaused, setCaretPaused] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || words.length < 2) {
      setText(words[0]);
      setCaretPaused(true);
      return;
    }

    let wordIndex = 0;
    let charIndex = words[0].length;
    let deleting = true;

    const tick = () => {
      const word = words[wordIndex];

      if (!deleting) {
        charIndex++;
        setText(word.slice(0, charIndex));
        setCaretPaused(false);

        if (charIndex === word.length) {
          deleting = true;
          setCaretPaused(true);
          timeoutRef.current = setTimeout(tick, 1600);
          return;
        }
        timeoutRef.current = setTimeout(tick, 55 + Math.random() * 45);
      } else {
        charIndex--;
        setText(word.slice(0, charIndex));
        setCaretPaused(false);

        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          setCaretPaused(true);
          timeoutRef.current = setTimeout(tick, 320);
          return;
        }
        timeoutRef.current = setTimeout(tick, 32);
      }
    };

    timeoutRef.current = setTimeout(tick, 1700);
    return () => clearTimeout(timeoutRef.current);
  }, [words]);

  return { text, caretPaused };
}

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

export default function Hero() {
  const { text: rotatingText, caretPaused } = useTypewriter(ROTATING_WORDS);
  const tickerLoop = [...SERVICE_TICKER, ...SERVICE_TICKER];

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#08051c]">
      {/* Background */}
      <div aria-hidden="true" className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img
            src="/ai-hero.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-[82%_center]"
          />
        </motion.div>

        {/* Dark left side */}
        <div
          className="
            absolute inset-0 bg-gradient-to-r
            from-[#08051c] via-[#08051c]/75 via-[45%] to-transparent
          "
        />
        {/* Overall dark purple tint */}
        <div className="absolute inset-0 bg-[#08051c]/15" />
        {/* Bottom fade */}
        <div
          className="
            absolute inset-x-0 bottom-0 h-40
            bg-gradient-to-t from-[#08051c] to-transparent
          "
        />
      </div>

      {/* Hero Content
          paddingTop    = NAVBAR_H + GAP  → navbar-ku keela GAP px
          paddingBottom = GAP             → stats-ku keela GAP px
          Rendu gap um exact equal. */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        style={{
          ...helveticaStyle,
          paddingTop: NAVBAR_H + GAP,
          paddingBottom: GAP,
        }}
        className="
          relative z-10 mx-auto max-w-[1520px]
          px-6 sm:px-10 lg:px-16
        "
      >
        {/* Small Label */}
        <motion.p
          variants={item}
          className="text-[13px] font-semibold uppercase tracking-[0.16em] text-white/70"
        >
          AI Led Software Development Company
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          variants={item}
          className="
            mt-5 max-w-[1220px] font-heading font-semibold tracking-[-0.02em]
            leading-[1.05] text-[30px] text-white
            sm:text-[42px] lg:text-[48px] xl:text-[58px]
          "
        >
          <span className="block">AI-Driven</span>
          <span className="block min-h-[1.05em] text-[#8F8CF0]">
            {rotatingText}
            <span
              aria-hidden="true"
              className={`ml-[2px] inline-block h-[0.82em] w-[3px] translate-y-[0.08em] bg-current align-middle ${
                caretPaused ? "animate-pulse" : "opacity-100"
              }`}
            />
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={item}
          className="mt-6 max-w-[900px] text-[17px] font-normal leading-[1.7] text-slate-200/85"
        >
          Starfii designs, builds, and scales high performance web, mobile,
          and AI powered products for enterprises, so your business moves
          from idea to launch with zero friction and unstoppable momentum.
        </motion.p>

        {/* CTA */}
        <motion.div variants={item} className="mt-8">
          <motion.a
            href="/contactpage"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="
              flex w-fit items-center gap-2.5 rounded-xl bg-white
              px-5 py-3 text-[10px] font-bold leading-none text-[#3B2FE0]
              sm:px-8 sm:py-3.5 sm:text-[20px]
            "
          >
            Contact Us
            <ArrowUpRight size={26} strokeWidth={2.75} />
          </motion.a>
        </motion.div>

        {/* Proof stats row */}
        <motion.div variants={item} className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          {PROOF_STATS.map((s) => (
            <span
              key={s.label}
              className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/50"
            >
              <b className="font-semibold text-white/80">{s.value}</b> {s.label}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Service ticker (disabled)
      <div className="relative z-10 overflow-hidden border-t border-white/10 bg-[#08051c]/60 backdrop-blur-sm">
        <div className="starfii-marquee-track flex w-max items-center whitespace-nowrap py-3">
          {tickerLoop.map((label, i) => (
            <span key={`${label}-${i}`} className="flex items-center">
              <span
                style={helveticaStyle}
                className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/60"
              >
                {label}
              </span>
              <span className="mx-4 text-white/30" aria-hidden="true">·</span>
            </span>
          ))}
        </div>
      </div>
      */}
    </section>
  );
}
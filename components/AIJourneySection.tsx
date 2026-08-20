"use client";

import { useEffect, useRef, useState } from "react";

/* ===============================================================
   CONTENT
================================================================ */

const steps = [
  {
    title: "Discover Your AI Opportunity",
    body: "We assess your product, data, and workflows to pinpoint where AI can move the needle fastest — grounded in your business goals, not hype.",
  },
  {
    title: "Design AI-Driven Products",
    body: "Our team architects software and product experiences with AI built in from day one, not bolted on afterward.",
  },
  {
    title: "Engineer at Startup Speed",
    body: "80+ skilled engineers across 3+ development locations ship production-grade software fast, without cutting corners on quality.",
  },
  {
    title: "Scale Across Industries",
    body: "From e-commerce and travel to healthcare, finance, ed-tech, and logistics, we bring proven playbooks tailored to your industry's needs.",
  },
  {
    title: "Partner Beyond Launch",
    body: "5+ years of delivering top solutions means we stay in the loop post-launch — monitoring, optimizing, and evolving your product as you grow.",
  },
];

function StepRow({
  title,
  body,
  isLast,
}: {
  title: string;
  body: string;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group relative isolate z-0 grid grid-cols-1 gap-2 py-9 transition-all duration-700 ease-out sm:grid-cols-[300px_1fr] sm:gap-14 ${
        !isLast ? "border-b border-[#0d1b4c]/10" : ""
      } ${visible ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"}`}
    >
      <h3 className="text-[27px] font-medium leading-snug text-[#0d1b4c] transition-colors duration-300 group-hover:text-[#3B2FE0]">
        {title}
      </h3>
      <p className="self-center text-[16.5px] leading-relaxed text-slate-600">
        {body}
      </p>
    </div>
  );
}

/**
 * Full-bleed flowing ribbon: a glossy 3D tube that sweeps up from
 * the bottom-left corner, S-curves through the middle of the section,
 * and exits near the top-right — with a rainbow-iridescent tip that
 * fades into a satin blue/white body, a bright highlight running
 * along its top edge, and a soft shadow underneath for a rounded,
 * cylindrical (glass-pipe) look, matching the reference recording.
 */
function Ribbon() {
  // Center path: bottom-left tip → rises through the middle →
  // gentle S-bend → exits top-right. Highlight/shadow paths below
  // are the same curve, offset a few px up/down to fake tube volume.
  const CENTER =
    "M -150 980 C 220 860, 480 640, 720 560 C 1000 470, 1120 260, 1280 170 C 1400 105, 1540 150, 1660 280 C 1760 385, 1860 320, 2050 150";
  const HILITE =
    "M -150 968 C 220 848, 480 626, 720 544 C 1000 452, 1120 244, 1280 154 C 1400 90, 1540 134, 1660 262 C 1760 366, 1860 302, 2050 134";
  const SHADOW =
    "M -150 996 C 220 878, 480 658, 720 580 C 1000 492, 1120 280, 1280 190 C 1400 124, 1540 170, 1660 300 C 1760 406, 1860 340, 2050 168";

  return (
    <div className="pointer-events-none absolute inset-0 isolate z-0 overflow-hidden">
      <style>{`
        @keyframes ribbon-float {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(0, -20px, 0) rotate(-0.3deg); }
        }
        @keyframes ribbon-shimmer {
          0% { stroke-dashoffset: 2600; }
          100% { stroke-dashoffset: 0; }
        }
        .ribbon-wrap { animation: ribbon-float 12s ease-in-out infinite; }
        .ribbon-shimmer-path {
          stroke-dasharray: 260 2400;
          animation: ribbon-shimmer 6.5s linear infinite;
        }
      `}</style>

      <svg
        className="ribbon-wrap absolute -left-[6%] -bottom-[12%] h-[130%] w-[112%] min-w-[1400px]"
        viewBox="0 0 1900 1000"
        fill="none"
        preserveAspectRatio="xMidYMax slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* body color: rainbow tip fading into satin blue/white */}
          <linearGradient id="tubeBody" x1="0%" y1="95%" x2="90%" y2="5%">
            <stop offset="0%" stopColor="#3B2FE0" stopOpacity="0" />
            <stop offset="6%" stopColor="#f59e0b" />
            <stop offset="14%" stopColor="#ec4899" />
            <stop offset="24%" stopColor="#a855f7" />
            <stop offset="36%" stopColor="#06b6d4" />
            <stop offset="52%" stopColor="#3b82f6" />
            <stop offset="70%" stopColor="#7fb0fb" />
            <stop offset="88%" stopColor="#cfe1ff" />
            <stop offset="100%" stopColor="#eef4ff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="tubeGlow" x1="0%" y1="95%" x2="90%" y2="5%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0" />
            <stop offset="18%" stopColor="#60a5fa" stopOpacity="0.4" />
            <stop offset="55%" stopColor="#93c5fd" stopOpacity="0.55" />
            <stop offset="85%" stopColor="#dbeafe" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#dbeafe" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="tubeHighlight" x1="0%" y1="95%" x2="90%" y2="5%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="10%" stopColor="#fff7e6" stopOpacity="0.9" />
            <stop offset="30%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="tubeShadow" x1="0%" y1="95%" x2="90%" y2="5%">
            <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0" />
            <stop offset="15%" stopColor="#1e3a8a" stopOpacity="0.35" />
            <stop offset="55%" stopColor="#1e3a8a" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0" />
          </linearGradient>
          <filter id="blurWide" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="30" />
          </filter>
          <filter id="blurSoft" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
          <filter id="blurTiny" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="2.5" />
          </filter>
        </defs>

        {/* wide ambient glow underneath the whole tube */}
        <path
          d={CENTER}
          stroke="url(#tubeGlow)"
          strokeWidth="230"
          strokeLinecap="round"
          filter="url(#blurWide)"
          opacity="0.85"
        />

        {/* tube body — the main satin/glass fill */}
        <path
          d={CENTER}
          stroke="url(#tubeBody)"
          strokeWidth="58"
          strokeLinecap="round"
          filter="url(#blurSoft)"
          opacity="0.95"
        />

        {/* underside shadow, offset slightly below center, for depth */}
        <path
          d={SHADOW}
          stroke="url(#tubeShadow)"
          strokeWidth="22"
          strokeLinecap="round"
          filter="url(#blurSoft)"
        />

        {/* top-edge glossy highlight, offset slightly above center */}
        <path
          d={HILITE}
          stroke="url(#tubeHighlight)"
          strokeWidth="9"
          strokeLinecap="round"
          filter="url(#blurTiny)"
        />

        {/* crisp bright travelling shimmer along the highlight line */}
        <path
          className="ribbon-shimmer-path"
          d={HILITE}
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.95"
        />
      </svg>
    </div>
  );
}

export default function AIJourneySection() {
  return (
    <section className="relative isolate z-0 overflow-hidden bg-white py-32">
      <Ribbon />

      <div className="relative z-10 mx-auto grid max-w-[1900px] grid-cols-1 gap-14 px-8 lg:grid-cols-[480px_1fr] lg:gap-20 lg:px-20">
        {/* Left heading */}
        <div className="lg:sticky lg:top-32 lg:z-0 lg:h-fit">
          <h2 className="text-[46px] font-medium leading-[1.15] text-[#0d1b4c] lg:text-[54px]">
            Take the Next Step
            <br />
            in Your AI Journey
          </h2>
          <p className="mt-5 text-lg text-slate-500">
            Wherever You Are, We Meet You There
          </p>
        </div>

        {/* Right list — sits directly on the ribbon background,
            no card container, matching the reference exactly */}
        <div className="relative z-10">
          {steps.map((s, i) => (
            <StepRow
              key={s.title}
              title={s.title}
              body={s.body}
              isLast={i === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
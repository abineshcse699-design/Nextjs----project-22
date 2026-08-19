"use client";

import { useEffect, useRef, useState } from "react";

/* ===============================================================
   CONTENT
   Design and layout are unchanged — only the copy has been
   rewritten for Starfii (AI-Driven Software & Product Engineering).
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
      className={`group relative isolate z-0 grid grid-cols-1 gap-2 py-8 transition-all duration-700 ease-out sm:grid-cols-[280px_1fr] sm:gap-10 ${
        !isLast ? "border-b border-slate-200" : ""
      } ${visible ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"}`}
    >
      <h3 className="text-[26px] font-medium leading-snug text-[#0d1b4c] transition-colors duration-300 group-hover:text-[#3B2FE0]">
        {title}
      </h3>
      <p className="self-center text-[16px] leading-relaxed text-slate-600">
        {body}
      </p>
    </div>
  );
}

/** Animated iridescent ribbon: floats gently and has a rainbow shimmer traveling along its length. */
function Ribbon() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 isolate z-0 overflow-visible">
      <style>{`
        @keyframes ribbon-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-16px) rotate(-0.6deg); }
        }
        @keyframes ribbon-shimmer {
          0% { stroke-dashoffset: 1400; }
          100% { stroke-dashoffset: 0; }
        }
        .ribbon-wrap { animation: ribbon-float 9s ease-in-out infinite; }
        .ribbon-shimmer-path {
          stroke-dasharray: 260 1200;
          animation: ribbon-shimmer 5s linear infinite;
        }
      `}</style>

      <svg
        className="ribbon-wrap h-[420px] w-[1300px] max-w-none lg:h-[460px] lg:w-[1500px]"
        viewBox="0 0 1500 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="ribbonGrad" x1="0%" y1="40%" x2="100%" y2="60%">
            <stop offset="0%" stopColor="#3B2FE0" stopOpacity="0" />
            <stop offset="14%" stopColor="#2563eb" />
            <stop offset="30%" stopColor="#06b6d4" />
            <stop offset="46%" stopColor="#a855f7" />
            <stop offset="58%" stopColor="#ec4899" />
            <stop offset="68%" stopColor="#f59e0b" />
            <stop offset="80%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
          </linearGradient>
          <filter id="ribbonBlur" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
        </defs>

        {/* soft glow underlayer */}
        <path
          d="M -100 380 C 250 350, 460 200, 720 180 S 1180 70, 1500 -60"
          stroke="url(#ribbonGrad)"
          strokeWidth="80"
          strokeLinecap="round"
          filter="url(#ribbonBlur)"
          opacity="0.5"
        />
        {/* mid band */}
        <path
          d="M -100 380 C 250 350, 460 200, 720 180 S 1180 70, 1500 -60"
          stroke="url(#ribbonGrad)"
          strokeWidth="30"
          strokeLinecap="round"
          opacity="0.85"
        />
        {/* bright travelling shimmer core */}
        <path
          className="ribbon-shimmer-path"
          d="M -100 380 C 250 350, 460 200, 720 180 S 1180 70, 1500 -60"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.95"
        />
      </svg>
    </div>
  );
}

export default function AIJourneySection() {
  return (
    <section className="relative isolate z-0 overflow-hidden bg-white py-28">
      <Ribbon />

      <div className="relative z-10 mx-auto grid max-w-[1760px] grid-cols-1 gap-12 px-8 lg:grid-cols-[520px_1fr] lg:px-16">
        {/* Left heading */}
        <div className="lg:sticky lg:top-32 lg:z-0 lg:h-fit">
          <h2 className="text-[44px] font-medium leading-[1.15] text-[#0d1b4c] lg:text-[52px]">
            Your Tech Partner
            <br />
            for the Next Big Leap
          </h2>
          <p className="mt-5 text-lg text-slate-500">
            From First Idea to Full-Scale AI-Driven Product
          </p>
        </div>

        {/* Right card with rows */}
        <div className="rounded-3xl bg-gradient-to-br from-white via-[#f5f8ff] to-[#eef4ff] px-10 shadow-[0_20px_60px_rgba(59,47,224,0.08)]">
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
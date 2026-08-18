"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";

const pillars = [
  {
    title: "Zero Vulnerability",
    body: "Reduce exposure through continuous attack-surface monitoring, automated compliance controls, and detection that stops threats before they escalate.",
  },
  {
    title: "Zero Backlog",
    body: "Clear every bottleneck from requirement to release, so nothing waits in a queue, stalls between sprints, or gets deprioritized.",
  },
  {
    title: "Zero Tickets",
    body: "Resolve incidents at the root with AIOps-driven anomaly detection and self-healing infrastructure, long before they reach a support queue.",
  },
  {
    title: "Zero Tech Debt",
    body: "Refactor, decouple, and modernize legacy estates, so engineers spend less time on maintenance and more time shipping value.",
  },
  {
    title: "Zero Defects",
    body: "Build quality into every stage of the lifecycle with AI-led engineering that catches issues early and stops defects before they reach production.",
  },
  {
    title: "Zero License",
    body: "Replace per-seat SaaS with agentic, AI-native capability your enterprise can build, own, and scale without a renewal ceiling.",
  },
];

/** Card that fades/slides in the first time it scrolls into view, plus a hover lift + glow. */
function PillarCard({ title, body }: { title: string; body: string }) {
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
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group rounded-2xl bg-white p-8 transition-all duration-700 ease-out
        hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(109,91,255,0.35)]
        ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
    >
      <h3 className="text-2xl font-semibold text-[#1a1150] transition-colors duration-300 group-hover:text-[#3B2FE0]">
        {title}
      </h3>
      <p className="mt-4 text-[15px] leading-relaxed text-slate-500">{body}</p>
      <a
        href="#"
        className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-medium text-[#3B2FE0]"
      >
        Know More
        <ArrowUpRight
          size={16}
          strokeWidth={2.5}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </a>
    </div>
  );
}

function GlowCircle() {
  return (
    <div className="relative mx-auto flex h-[420px] w-[420px] items-center justify-center">
      {/* dotted halo */}
      <div
        className="absolute inset-0 rounded-full opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
          maskImage: "radial-gradient(circle, black 60%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(circle, black 60%, transparent 75%)",
        }}
      />

      {/* outer gradient ring */}
      <div
        className="absolute h-[360px] w-[360px] animate-[spin_14s_linear_infinite] rounded-full p-[1.5px]"
        style={{
          background:
            "conic-gradient(from 200deg, #6d5bff, #a855f7, #ec4899, #6d5bff)",
        }}
      >
        <div className="h-full w-full rounded-full bg-[#050510]" />
      </div>

      {/* glowing purple core */}
      <div
        className="relative flex h-[290px] w-[290px] items-center justify-center rounded-full border border-white/70"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, #8b5cf6, #4c1d95 60%, #0f0a24 100%)",
          boxShadow: "0 0 90px 10px rgba(139,92,246,0.55)",
        }}
      >
        <Sparkles
          size={60}
          strokeWidth={1.5}
          className="text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]"
        />
      </div>
    </div>
  );
}

export default function ZeroFrictionSection() {
  return (
    <section className="bg-[#050510] py-24">
      <div className="mx-auto grid max-w-[1760px] grid-cols-1 gap-16 px-8 lg:grid-cols-[520px_1fr] lg:px-16">
        {/* Sticky left panel: text, then the glow circle sits right below it */}
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <h2 className="text-[40px] font-medium leading-[1.15] text-white lg:text-[46px]">
            Enterprise Progress, Rewritten: The Zero Friction Enterprise™
          </h2>
          <p className="mt-6 text-lg font-medium text-slate-200">
            Driving friction toward zero across the estate, from where
            enterprises are to where they want to be
          </p>
          <p className="mt-6 text-[15px] leading-relaxed text-slate-400">
            Peak performance is rarely lost in one place. Operational and
            technological resistance gathers across the estate—across
            systems, processes, and teams—making the climb steeper. Zero
            Friction Enterprise™ drives that friction toward zero, with
            agentic AI extending the pursuit across a growing set of focus
            areas, founded on infinite trust spanning data readiness,
            security, governance, and observability. And Zerovity™,
            Hexaware&apos;s AI delivery layer, provides the single governed
            command center across the estate.
          </p>

          <div className="mt-12">
            <GlowCircle />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {pillars.map((p) => (
            <PillarCard key={p.title} {...p} />
          ))}

          <p className="sm:col-span-2 mt-4 text-lg text-slate-300">
            Each pillar removes a drag point. Together, they create an
            enterprise that compounds momentum.
          </p>
        </div>
      </div>
    </section>
  );
}
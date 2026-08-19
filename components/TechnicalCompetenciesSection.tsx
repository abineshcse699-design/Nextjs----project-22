"use client";

import { useEffect, useRef, useState } from "react";
import {
  Boxes,
  Database,
  ShieldCheck,
  AppWindow,
  Sparkles,
  Crown,
  ArrowRight,
} from "lucide-react";

/* ===============================================================
   CONTENT
   Rewritten with a more consistent, professional register: each
   body leads with the outcome the client gets, not just the
   activity — and terminology (SaaS, DevOps, AI/ML) is used
   consistently across cards rather than mixed casually.
================================================================ */

const competencies = [
  {
    icon: Boxes,
    title: "Enterprise Product Engineering",
    body: "We design, build, and ship end-to-end enterprise products — pairing proven engineering practice with AI-powered frameworks to deliver scalable growth and measurable performance.",
  },
  {
    icon: AppWindow,
    title: "SaaS Product Engineering",
    body: "From fintech and healthcare to e-commerce and enterprise platforms, we've delivered SaaS products for Fortune 500 companies, with a track record in building complex, scalable solutions.",
  },
  {
    icon: Sparkles,
    title: "Enterprise AI/ML, Gen AI & LLM Engineering",
    body: "We turn workflows into intelligent, scalable systems — reducing manual effort, accelerating decisions, and delivering automation tailored to your business outcomes.",
  },
  {
    icon: Database,
    title: "Data Engineering & Data Science",
    body: "Our certified data engineers build robust, reliable data infrastructure, while our data scientists surface the insights and patterns that drive smarter, faster decision-making.",
  },
  {
    icon: ShieldCheck,
    title: "Legacy Software Modernization",
    body: "We assess your existing systems, build a tailored modernization roadmap, and transition you to a scalable, future-ready platform with minimal operational disruption.",
  },
  {
    icon: Crown,
    title: "DevOps & Quality Engineering",
    body: "We accelerate product delivery with seamless DevOps integration and test automation, so every release ships faster without compromising on quality.",
  },
];

/* ===============================================================
   CARD
================================================================ */

function CompetencyCard({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof Boxes;
  title: string;
  body: string;
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
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group rounded-3xl bg-slate-50 p-9 transition-all duration-700 ease-out
        hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_20px_50px_rgba(59,47,224,0.14)]
        ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
    >
      <div
        className="
          flex h-16 w-16 items-center justify-center rounded-full
          bg-gradient-to-br from-[#6d5bff] to-[#3B2FE0]
          shadow-[0_8px_20px_rgba(59,47,224,0.35)]
          transition-transform duration-300 group-hover:scale-105
        "
      >
        <Icon size={26} strokeWidth={1.75} className="text-white" />
      </div>

      <h3 className="mt-7 text-[19px] font-bold uppercase tracking-tight text-[#0d1b4c]">
        {title}
      </h3>

      <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
        {body}
      </p>
    </div>
  );
}

/* ===============================================================
   SECTION
================================================================ */

export default function TechnicalCompetenciesSection() {
  const left = [competencies[0], competencies[1], competencies[2]];
  const right = [competencies[3], competencies[4], competencies[5]];

  return (
    <section className="relative isolate z-0 bg-white py-28">
      <div className="mx-auto max-w-[1600px] px-8 lg:px-16">
        <h2 className="max-w-2xl text-[38px] font-semibold leading-[1.15] text-[#0d1b4c] lg:text-[44px]">
          Technical Competencies & Service Capabilities
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Left column */}
          <div className="flex flex-col gap-8">
            {left.map((c) => (
              <CompetencyCard key={c.title} {...c} />
            ))}
          </div>

          {/* Right column — offset downward to match the staggered
              reference layout */}
          <div className="flex flex-col gap-8 lg:mt-20">
            {right.map((c) => (
              <CompetencyCard key={c.title} {...c} />
            ))}

            <a
              href="#services"
              className="
                group mt-2 inline-flex w-fit items-center gap-2
                rounded-full border border-slate-300 px-7 py-4
                text-[15px] font-medium text-[#0d1b4c]
                transition-colors duration-300
                hover:border-[#3B2FE0] hover:text-[#3B2FE0]
              "
            >
              Explore More Services
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
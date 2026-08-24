"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

/* ===============================================================
   CONTENT
================================================================ */

const pillars = [
  {
    title: "Enterprise Product Engineering",
    body: "We design, build, and ship end-to-end enterprise products — pairing proven engineering practice with AI-powered frameworks to deliver scalable growth and measurable performance.",
  },
  {
    title: "SaaS Product Engineering",
    body: "From fintech and healthcare to e-commerce and enterprise platforms, we've delivered SaaS products for Fortune 500 companies, with a track record in building complex, scalable solutions.",
  },
  {
    title: "Enterprise AI/ML, Gen AI & LLM Engineering",
    body: "We turn workflows into intelligent, scalable systems — reducing manual effort, accelerating decisions, and delivering automation tailored to your business outcomes.",
  },
  {
    title: "Data Engineering & Data Science",
    body: "Our certified data engineers build robust, reliable data infrastructure, while our data scientists surface the insights and patterns that drive smarter, faster decision-making.",
  },
  {
    title: "Legacy Software Modernization",
    body: "We assess your existing systems, build a tailored modernization roadmap, and transition you to a scalable, future-ready platform with minimal operational disruption.",
  },
  {
    title: "DevOps & Quality Engineering",
    body: "We accelerate product delivery with seamless DevOps integration and test automation, so every release ships faster without compromising on quality.",
  },
];

/* ===============================================================
   PILLAR CARD
================================================================ */

function PillarCard({
  title,
  body,
}: {
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
      {
        threshold: 0.2,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group rounded-2xl bg-white p-8 transition-all duration-700 ease-out
        hover:-translate-y-2
        hover:shadow-[0_20px_45px_rgba(109,91,255,0.35)]
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
    >
      <h3 className="text-2xl font-semibold text-[#1a1150] transition-colors duration-300 group-hover:text-[#3B2FE0]">
        {title}
      </h3>

      <p className="mt-4 text-[15px] leading-relaxed text-slate-500">
        {body}
      </p>

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

/* ===============================================================
   IMAGE
   ch.png already contains the circular artwork.
   No extra CSS circle/mask/border/glow is added.
================================================================ */

const PHOTO_SRC = "/ch.png";

function PortraitCircle() {
  return (
    <div className="relative mx-auto mt-4 flex w-full max-w-[520px] items-center justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={PHOTO_SRC}
        alt="AI and technology illustration"
        className="block h-auto w-full max-w-[520px] object-contain"
      />
    </div>
  );
}

/* ===============================================================
   ZERO FRICTION SECTION
================================================================ */

export default function ZeroFrictionSection() {
  return (
    <section className="relative overflow-hidden bg-[#050510] py-20 lg:py-24">
      <div className="relative z-10 mx-auto grid max-w-[1760px] grid-cols-1 gap-14 px-8 lg:grid-cols-[520px_1fr] lg:gap-16 lg:px-16">
        {/* LEFT CONTENT */}
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <h2 className="text-[40px] font-medium leading-[1.15] text-white lg:text-[46px]">
            Technical Competencies & Service Capabilities
          </h2>

          <p className="mt-6 text-lg font-medium text-slate-200">
            Engineering depth across every layer of the enterprise stack,
            from product to platform to data
          </p>

          <p className="mt-6 text-[15px] leading-relaxed text-slate-400">
            Building resilient, scalable technology takes more than a single
            specialism — it takes engineering, AI, data, and quality working
            together as one system. Our technical competencies span
            end-to-end product engineering, enterprise AI/ML and Gen AI,
            data engineering and data science, legacy modernization, and
            DevOps and quality engineering, so every capability your
            enterprise needs is covered under one roof.
          </p>

          {/* IMAGE */}
          <div className="mt-10">
            <PortraitCircle />
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {pillars.map((p) => (
            <PillarCard
              key={p.title}
              title={p.title}
              body={p.body}
            />
          ))}

          <p className="mt-4 text-lg text-slate-300 sm:col-span-2">
            Each competency strengthens the next. Together, they give the
            enterprise a single, compounding engineering advantage.
          </p>
        </div>
      </div>
    </section>
  );
}
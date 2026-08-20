"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

/* ===============================================================
   CONTENT
   Design and layout are unchanged from the original Zero Friction
   Enterprise section — only the copy has been swapped for the
   Technical Competencies & Service Capabilities content.
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

/* ===============================================================
   PortraitCircle — uses the uploaded photo, masked into a circle,
   with the same dotted-halo + thin gradient ring treatment as
   before. Put the photo file at /public/images/hero-portrait.jpg
   in your project (or change PHOTO_SRC below to wherever you host
   it / your CMS URL).
================================================================ */

const PHOTO_SRC = "/hero-portrait.jpg";

function PortraitCircle() {
  return (
    <div className="relative mx-auto flex h-[480px] w-[480px] items-center justify-center">
      {/* soft dotted field */}
      <div
        className="absolute inset-0 rounded-full opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          maskImage: "radial-gradient(circle, black 40%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(circle, black 40%, transparent 85%)",
        }}
      />

      {/* the actual photo, masked into a circle, with a soft glow behind it */}
      <div
        className="relative h-[360px] w-[360px] overflow-hidden rounded-full border border-white/50"
        style={{
          boxShadow:
            "0 0 110px 20px rgba(139,92,246,0.35), 0 0 40px 6px rgba(168,85,247,0.3)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={PHOTO_SRC}
          alt="Portrait"
          className="h-full w-full object-cover"
        />
        {/* subtle dark-to-transparent overlay so it blends with the section bg */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050510]/40 via-transparent to-transparent" />
      </div>
    </div>
  );
}

export default function ZeroFrictionSection() {
  return (
    <section className="bg-[#050510] py-24">
      <div className="mx-auto grid max-w-[1760px] grid-cols-1 gap-16 px-8 lg:grid-cols-[520px_1fr] lg:px-16">
        {/* Sticky left panel: text, then the portrait circle sits right below it */}
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

          <div className="mt-12">
            <PortraitCircle />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {pillars.map((p) => (
            <PillarCard key={p.title} {...p} />
          ))}

          <p className="sm:col-span-2 mt-4 text-lg text-slate-300">
            Each competency strengthens the next. Together, they give the
            enterprise a single, compounding engineering advantage.
          </p>
        </div>
      </div>
    </section>
  );
}
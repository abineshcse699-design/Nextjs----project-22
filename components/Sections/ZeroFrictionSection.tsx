"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

/* ===============================================================
   CONTENT — SEO / AEO / GEO optimized
   (Titles unchanged. Body copy rewritten with Starfii brand
   mentions + target keywords for search & AI answer engines.)
================================================================ */

const pillars = [
  {
    title: "Enterprise Product Engineering",
    body: "Starfii is an enterprise product engineering company that designs, builds, and ships digital products end to end for global businesses. Our AI driven software development approach combines proven engineering practices with intelligent frameworks, helping enterprises achieve scalable growth, faster time to market, and measurable business performance.",
  },
  {
    title: "SaaS Product Engineering",
    body: "As a trusted SaaS product engineering partner, Starfii builds custom SaaS platforms for fintech, healthcare, e commerce, and enterprise businesses. We have delivered SaaS software development for Fortune 500 companies, bringing deep expertise in building secure, complex, and highly scalable cloud based products.",
  },
  {
    title: "Enterprise AI/ML, Gen AI & LLM Engineering",
    body: "Starfii specializes in enterprise AI/ML, Generative AI, and LLM engineering services that turn manual workflows into intelligent, automated systems. From custom AI model integration to Gen AI powered automation, we help businesses reduce operational costs, accelerate decision making, and unlock measurable ROI from artificial intelligence.",
  },
  {
    title: "Data Engineering & Data Science",
    body: "Our certified data engineers and data scientists at Starfii build reliable, scalable data infrastructure and advanced analytics solutions. Through expert data engineering and data science services, we help enterprises uncover actionable insights, improve data quality, and enable smarter, faster, data driven decision making.",
  },
  {
    title: "Legacy Software Modernization",
    body: "Starfii offers legacy software modernization services from start to finish, beginning with a detailed assessment of your existing systems. We design a tailored modernization roadmap and migrate your business to a scalable, cloud ready, future proof platform, with minimal downtime and zero disruption to operations.",
  },
  {
    title: "DevOps & Quality Engineering",
    body: "Starfii's DevOps and quality engineering services help businesses accelerate software delivery through seamless CI/CD integration and automated testing. Our DevOps consulting and QA engineering practices ensure every release ships faster, remains secure, and meets enterprise grade quality and compliance standards.",
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
      <h3 className="font-heading text-2xl font-semibold text-[#1a1150] transition-colors duration-300 group-hover:text-[#3B2FE0]">
        {title}
      </h3>

      <p className="font-body mt-4 text-[15px] leading-relaxed text-slate-500">
        {body}
      </p>

      <a
        href="#"
        className="font-body mt-6 inline-flex items-center gap-1.5 text-[15px] font-medium text-[#3B2FE0]"
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
        alt="Starfii AI driven software and product engineering illustration"
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
    <section className="relative isolate overflow-hidden py-20 lg:py-24">
      {/* =====================================================
          COLOR GRADE — BACKGROUND
          Opens at #171335 — the exact color AIJourneySection
          fades into at its bottom edge — so the two sections
          share one continuous background with no visible seam.
          Same restrained dusk palette (indigo -> plum ->
          terracotta), carried a little further and then settled
          back to near-black toward the bottom for a clean handoff
          into whatever section follows.
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#171335]" />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(125deg, #171335 0%, #241D4A 22%, #3A2A52 42%, #55344B 60%, #7A4B49 78%, #9C6650 92%, #B07B57 100%)",
            opacity: 0.9,
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(9,7,23,0) 0%, rgba(9,7,23,0.4) 60%, rgba(6,5,17,0.9) 100%)",
          }}
        />

        {/* Soft glow behind the left copy, echoing the hero's bright sky patch */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(42% 50% at 10% 6%, rgba(255,214,180,0.14) 0%, rgba(255,214,180,0) 60%)",
          }}
        />
      </div>

      {/* Container width/padding matched to the navbar's outer wrapper
          (mx-auto max-w-[1520px] px-6 pt-4 sm:px-10 lg:px-16) so this
          section's content lines up under the same edges as the nav. */}
      <div className="relative z-10 mx-auto grid max-w-[1520px] grid-cols-1 gap-14 px-6 sm:px-10 lg:grid-cols-[520px_1fr] lg:gap-16 lg:px-16">
        {/* LEFT CONTENT */}
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <h2 className="font-heading text-[40px] font-medium leading-[1.15] text-white lg:text-[46px]">
            Technical Competencies & Service Capabilities
          </h2>

          <p className="font-body mt-6 text-lg font-medium text-slate-200">
            Starfii delivers engineering depth across every layer of the
            enterprise stack, from product engineering to cloud platforms
            to enterprise data systems
          </p>

          <p className="font-body mt-6 text-[15px] leading-relaxed text-slate-300">
            Starfii is an AI driven software and product engineering company
            trusted by startups and Fortune 500 enterprises worldwide.
            Building resilient, scalable technology takes more than a single
            specialism. It takes software engineering, artificial
            intelligence, data engineering, and quality assurance working
            together as one system. Our core service capabilities span
            end to end enterprise product engineering, SaaS product
            engineering, Generative AI and LLM engineering, data engineering
            and data science, legacy software modernization, and DevOps and
            quality engineering, giving every enterprise the full technology
            stack it needs under one roof.
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

          <p className="font-body mt-4 text-lg text-slate-200 sm:col-span-2">
            Each Starfii service capability strengthens the next, combining
            software engineering, AI, data, and quality engineering into a
            single, compounding technology advantage for your enterprise.
          </p>
        </div>
      </div>
    </section>
  );
}
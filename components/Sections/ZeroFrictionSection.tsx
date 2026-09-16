"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

/* ===============================================================
   FONT
   Helvetica stack — system fonts fallback (free, no download needed).
   Applied once on the outer <section> and inherited by every child,
   so nothing else in this file needs an explicit font-family.
================================================================ */

const helveticaStyle = {
  fontFamily: '"Helvetica Neue", Helvetica, Arial, "Segoe UI", sans-serif',
};

/* ===============================================================
   CONTENT
   Body text for every card trimmed/balanced to roughly 6 lines
   each, so all cards in the grid line up at the same height.
================================================================ */

const pillars = [
  {
    title: "Enterprise Product Engineering",
    body: "Starfii is an enterprise product engineering company that designs, builds, and ships digital products end to end for global businesses. Our AI driven approach combines proven engineering practices with intelligent frameworks for scalable, measurable growth.",
  },
  {
    title: "SaaS Product Engineering",
    body: "As a trusted SaaS product engineering partner, Starfii builds custom SaaS platforms for fintech, healthcare, e commerce, and enterprise businesses. We bring deep expertise in building secure, complex, and highly scalable cloud based products for growing teams.",
  },
  {
    title: "Enterprise AI/ML, Gen AI & LLM Engineering",
    body: "Starfii specializes in enterprise AI/ML, Generative AI, and LLM engineering that turns manual workflows into intelligent, automated systems. From custom model integration to Gen AI powered automation, we help businesses cut costs and unlock measurable ROI.",
  },
  {
    title: "Data Engineering & Data Science",
    body: "Our certified data engineers and data scientists build reliable, scalable data infrastructure and advanced analytics solutions. Through expert data engineering and data science services, we help enterprises uncover insights and enable faster, data driven decisions.",
  },
  {
    title: "Legacy Software Modernization",
    body: "Starfii offers legacy software modernization services from start to finish, beginning with a detailed assessment of your existing systems. We design a tailored roadmap and migrate your business to a scalable, cloud ready platform with zero disruption.",
  },
  {
    title: "DevOps & Quality Engineering",
    body: "Starfii's DevOps and quality engineering services help businesses accelerate delivery through seamless CI/CD integration and automated testing. Our DevOps consulting and QA practices ensure every release ships faster while meeting enterprise grade standards.",
  },
];

/* ===============================================================
   HEADING BLOCK
   Same fade/slide-in-on-scroll animation used for each StepRow in
   AIJourneySection: starts translated + transparent, then eases
   into place the first time it enters the viewport.
================================================================ */

function HeadingBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        relative z-20 w-full transition-all duration-700 ease-out
        lg:sticky lg:top-32 lg:h-fit lg:w-[520px] lg:flex-shrink-0
        ${visible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}
      `}
    >
      {/* font-medium instead of a heavier weight avoids the
          same "popping" look on this heading. */}
      <h2
        className="
          font-medium
          tracking-[-0.025em]
          leading-[1.08]
          text-[42px]
          text-white
          sm:text-[48px]
          lg:-mt-2
          lg:text-[54px]
        "
      >
        Technical Competencies & Service Capabilities
      </h2>

      <p className="mt-6 text-lg font-medium text-slate-200">
        Starfii delivers engineering depth across every layer of the
        enterprise stack, from product engineering to cloud platforms
        to enterprise data systems
      </p>
    </div>
  );
}

/* ===============================================================
   PILLAR CARD
================================================================ */

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
      className={`group flex h-full flex-col justify-between rounded-2xl bg-white p-8 transition-all duration-700 ease-out
        hover:-translate-y-2
        hover:shadow-[0_20px_45px_rgba(109,91,255,0.35)]
        ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
    >
      <div>
        {/* font-semibold (not bold) + tighter tracking keeps the
            heading from "popping" — no sudden heavy-weight jump
            against the lighter body copy below it. */}
        <h3 className="text-2xl font-semibold leading-tight tracking-[-0.01em] text-[#1a1150] transition-colors duration-300 group-hover:text-[#3B2FE0]">
          {title}
        </h3>

        {/* line-clamp-6 caps the body at 6 lines even if the copy
            runs a little long on a smaller card width, so cards
            never grow taller than each other. */}
        <p className="mt-4 line-clamp-6 text-[15px] leading-relaxed text-slate-500">
          {body}
        </p>
      </div>

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
   ZERO FRICTION SECTION
================================================================ */

export default function ZeroFrictionSection() {
  return (
    // Reduced top padding on mobile (pt-8) so the heading sits close
    // to the top of the section instead of a big empty gap; desktop
    // keeps the original larger spacing (lg:pt-24).
    // helveticaStyle set here once — every child below inherits it,
    // so no font-heading / font-body classes are needed anywhere.
    // FIX: removed `overflow-hidden` from here, same reason as
    // AIJourneySection — position: sticky on the left heading is
    // calculated relative to the nearest ancestor with overflow
    // != visible. With overflow-hidden on this <section>, THIS
    // became that ancestor, so the heading never actually stuck
    // to the viewport while scrolling — it just scrolled normally
    // instead of staying pinned like in the reference video.
    <section
      style={helveticaStyle}
      className="relative isolate pb-20 pt-8 lg:pb-24 lg:pt-24"
    >
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

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(42% 50% at 10% 6%, rgba(255,214,180,0.14) 0%, rgba(255,214,180,0) 60%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1520px] flex-col items-start gap-10 px-6 sm:px-10 lg:flex-row lg:items-start lg:gap-16 lg:px-16">
        {/* LEFT CONTENT
            Image removed — this column is now just the heading +
            subtext, kept "stable" while the right column of cards
            scrolls past it. Sticky offset/behavior (lg:sticky
            lg:top-32 lg:h-fit) matches how the left column in
            AIJourneySection stays pinned in place, and HeadingBlock
            carries the same fade/slide-in scroll animation as
            AIJourneySection's StepRow. */}
        <HeadingBlock />

        {/* RIGHT CARDS */}
        <div className="grid w-full grid-cols-1 items-stretch gap-6 sm:grid-cols-2">
          {pillars.map((p) => (
            <PillarCard key={p.title} title={p.title} body={p.body} />
          ))}

          <p className="mt-4 text-lg text-slate-200 sm:col-span-2">
            Each Starfii service capability strengthens the next, combining
            software engineering, AI, data, and quality engineering into a
            single, compounding technology advantage for your enterprise.
          </p>
        </div>
      </div>
    </section>
  );
}
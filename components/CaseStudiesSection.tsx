"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * CaseStudiesSection
 * -------------------
 * "Real Results, Real Impact" case-study carousel.
 *
 * - Horizontal snap-scroll card row
 * - Left/right circular arrow buttons (indigo when active, gray when disabled)
 * - Thin progress bar that fills as you scroll, in sync with drag OR button clicks
 * - Smooth scroll animation, hover lift on cards
 *
 * Usage: drop into app/components/CaseStudiesSection.tsx and add
 * <CaseStudiesSection /> to page.tsx like your other sections.
 */

interface CaseStudy {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "25% Cost Savings through Data Transformation for Insurance Reporting",
    description:
      "Transformed a leading insurer's data systems, achieving 25% cost savings while automating reporting and enabling unified, actionable BI.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
  {
    id: 2,
    title: "A 15-Year Digital Evolution at a Leading Australian University",
    description:
      "15-year partnership modernizing SIS/ERP and collaboration tools. Managed services, SSO, IaC, RPA, testing, and CRM improved speed and reliability.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
  {
    id: 3,
    title: "360° CX Optimization with the Adobe Experience Cloud Suite",
    description:
      "Unified customer data and journeys on Adobe Experience Cloud, driving measurable gains in engagement, conversion, and customer satisfaction.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
  {
    id: 4,
    title: "4-Week Amaze®-Accelerated Assessment for Data Platform Modernization",
    description:
      "A rapid 4-week assessment mapped the fastest path to a modern data platform, cutting typical planning timelines by more than half.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
  {
    id: 5,
    title: "A Global CRO Enhances the Capabilities of eTMF with Intelligent Automation",
    description:
      "Intelligent automation streamlined eTMF operations for a global CRO, reducing manual effort and improving trial document accuracy.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
  {
    id: 6,
    title: "Avaya to Amazon Connect Migration Revitalizes Contact Center Experience",
    description:
      "Migrated a legacy Avaya contact center to Amazon Connect, modernizing the customer experience while lowering operating costs.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
];

export default function CaseStudiesSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  // keep arrow / progress state synced to actual scroll position,
  // whichever caused it (button click, drag, trackpad, keyboard)
  const syncState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const pct = max > 0 ? (el.scrollLeft / max) * 100 : 0;
    setProgress(pct);
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < max - 8);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    syncState();
    el.addEventListener("scroll", syncState, { passive: true });
    window.addEventListener("resize", syncState);
    return () => {
      el.removeEventListener("scroll", syncState);
      window.removeEventListener("resize", syncState);
    };
  }, [syncState]);

  const goTo = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const gap = 24;
    const step = card ? card.offsetWidth + gap : el.clientWidth * 0.85;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#eef0ff] to-[#c7ccfb] px-6 py-20 md:px-16 lg:py-28">
      {/* copy */}
      <div className="mx-auto mb-12 max-w-2xl md:mx-0">
        <h2 className="text-4xl font-semibold tracking-tight text-[#0b1747] md:text-5xl">
          Real Results, Real Impact
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          We help enterprises like yours unlock unparalleled value. Explore
          our case studies to discover how an end-to-end transformation
          partner delivers.
        </p>
      </div>

      {/* carousel track */}
      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
      >
        {caseStudies.map((study) => (
          <a
            key={study.id}
            href={study.href}
            data-card
            className="group relative flex w-[260px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_2px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.14)] sm:w-[300px]"
          >
            {/* image morphs away on hover, revealing the description below */}
            <div className="h-[190px] w-full overflow-hidden bg-slate-900 transition-[height] duration-500 ease-out group-hover:h-0">
              <img
                src={study.image}
                alt={study.title}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
              />
            </div>

            <div className="flex flex-1 flex-col gap-3 p-5">
              <span className="text-xs font-semibold tracking-[0.08em] text-[#2f7dfa]">
                CASE STUDY
              </span>
              <h3 className="line-clamp-3 text-[17px] font-semibold leading-snug text-[#0b1747]">
                {study.title}
              </h3>

              {/* description: collapsed by default, expands smoothly on hover */}
              <p className="grid grid-rows-[0fr] text-[14px] leading-relaxed text-slate-500 opacity-0 transition-all duration-500 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100">
                <span className="overflow-hidden">{study.description}</span>
              </p>

              <span className="mt-auto inline-flex w-fit items-center gap-1.5 pt-2 text-[15px] font-medium text-[#4b5fed] transition-colors group-hover:text-[#37409e]">
                Learn More
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* progress bar + nav arrows */}
      <div className="mt-10 flex items-center gap-5">
        <div className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-[#0b1747]/15">
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-[#3a3ff0] transition-[width] duration-300 ease-out"
            style={{ width: `${Math.max(progress, 3)}%` }}
          />
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => goTo(-1)}
            disabled={!canPrev}
            aria-label="Previous case studies"
            className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300 ${
              canPrev
                ? "bg-[#3a3ff0] text-white hover:bg-[#2c30c9]"
                : "cursor-not-allowed bg-slate-200/70 text-slate-400"
            }`}
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2.25} />
          </button>
          <button
            type="button"
            onClick={() => goTo(1)}
            disabled={!canNext}
            aria-label="Next case studies"
            className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300 ${
              canNext
                ? "bg-[#3a3ff0] text-white hover:bg-[#2c30c9]"
                : "cursor-not-allowed bg-slate-200/70 text-slate-400"
            }`}
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2.25} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
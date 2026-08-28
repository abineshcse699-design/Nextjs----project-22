"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * CaseStudiesSection
 * ------------------
 * "Real Results, Real Impact" Starfii case study carousel.
 *
 * Horizontal snap scroll card row
 * Left/right circular arrow buttons (indigo when active, gray when disabled)
 * Thin progress bar that fills as you scroll, in sync with drag OR button clicks
 * Smooth scroll animation, hover lift on cards
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
    title: "Starfii Cuts Claims Processing Time by 30% for a Regional Insurance Company",
    description:
      "Starfii rebuilt a regional insurer's data pipeline as part of an enterprise data engineering engagement, cutting claims processing time by 30% and giving underwriting teams a single, real time view of risk.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
  {
    id: 2,
    title: "A Six Year Digital Transformation Partnership with a Leading State University System",
    description:
      "As a long term software engineering and cloud migration partner, Starfii modernized student information systems and campus IT. Managed services, identity management, and automation improved uptime and the overall student experience.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
  {
    id: 3,
    title: "Starfii Delivers a Unified Customer Experience Platform for a National Retail Chain",
    description:
      "Through custom SaaS product engineering, Starfii consolidated customer data and touchpoints onto a single platform, lifting engagement and conversion while shortening time to launch for new marketing campaigns.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
  {
    id: 4,
    title: "A Three Week Rapid Assessment That Mapped a Fortune 500 Data Platform Overhaul",
    description:
      "Starfii's data engineering team ran a focused three week assessment to identify the fastest, lowest risk path to a modern data platform, cutting typical planning timelines by more than half.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
  {
    id: 5,
    title: "Intelligent AI Automation Reduces Manual Effort for a Global Clinical Research Organization",
    description:
      "Starfii's Generative AI and LLM engineering team automated document handling and compliance checks for a global CRO, reducing manual review effort and improving accuracy across active clinical trials.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
  {
    id: 6,
    title: "Legacy Contact Center Migration to the Cloud Revitalizes Customer Support",
    description:
      "Starfii's legacy software modernization and DevOps team migrated an on premises contact center to a modern cloud platform, improving customer experience while lowering operating costs.",
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

  // custom eased scroll so we can control the exact speed
  // (native `behavior: "smooth"` snaps too fast to slow down reliably)
  const animateScrollBy = (el: HTMLElement, delta: number, duration = 900) => {
    const start = el.scrollLeft;
    const target = start + delta;
    const startTime = performance.now();

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      el.scrollLeft = start + (target - start) * easeInOutCubic(t);
      if (t < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const goTo = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const gap = 32;
    const step = card ? card.offsetWidth + gap : el.clientWidth * 0.85;
    animateScrollBy(el, direction * step, 900);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#eef0ff] to-[#c7ccfb] py-20 lg:py-28">
      {/* Container width/padding matched to the navbar's outer wrapper
          (mx-auto max-w-[1520px] px-6 pt-4 sm:px-10 lg:px-16) so this
          section's content (heading, carousel, and progress bar)
          lines up under the same edges as the nav. Padding used to sit
          directly on the <section>; it now lives on this wrapper instead. */}
      <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
        {/* copy */}
        <div className="mb-14 max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight text-[#0b1747] md:text-5xl">
            Real Results, Real Impact
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Starfii helps enterprises like yours unlock unparalleled value
            through AI driven software development, enterprise product
            engineering, and data engineering. Explore our case studies to
            discover how Starfii delivers as a true end to end technology
            transformation partner.
          </p>
        </div>

        {/* carousel track — cards scaled up (wider + taller image) from the
            original 260/300px version, everything else (snap, hover morph,
            progress bar, arrows) behaves exactly the same */}
        <div
          ref={trackRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth pb-2"
        >
          {caseStudies.map((study) => (
            <a
              key={study.id}
              href={study.href}
              data-card
              className="group relative flex w-[80%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_2px_rgba(15,23,42,0.06)] transition-all duration-1000 ease-out hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.14)] sm:w-[calc((100%-32px)/2)] lg:w-[calc((100%-96px)/4)]"
            >
              {/* image morphs away on hover, revealing the description below */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-900 transition-[height] duration-1000 ease-out group-hover:h-0">
                <img
                  src={study.image}
                  alt={study.title}
                  className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.06]"
                />
              </div>

              <div className="flex flex-1 flex-col gap-3.5 p-7">
                <span className="text-xs font-semibold tracking-[0.08em] text-[#2f7dfa]">
                  CASE STUDY
                </span>
                <h3 className="line-clamp-3 text-[20px] font-semibold leading-snug text-[#0b1747]">
                  {study.title}
                </h3>

                {/* description: collapsed by default, expands smoothly on hover */}
                <p className="grid grid-rows-[0fr] text-[15px] leading-relaxed text-slate-500 opacity-0 transition-all duration-1000 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100">
                  <span className="overflow-hidden">{study.description}</span>
                </p>

                <span className="mt-auto inline-flex w-fit items-center gap-1.5 pt-2 text-[16px] font-medium text-[#4b5fed] transition-colors duration-700 group-hover:text-[#37409e]">
                  Learn More
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* progress bar + nav arrows */}
        <div className="mt-12 flex items-center gap-5">
          <div className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-[#0b1747]/15">
            <div
              className="absolute left-0 top-0 h-full rounded-full bg-[#3a3ff0] transition-[width] duration-[900ms] ease-out"
              style={{ width: `${Math.max(progress, 3)}%` }}
            />
          </div>

          <div className="flex shrink-0 items-center gap-3">
            
            <button
              type="button"
              onClick={() => goTo(-1)}
              disabled={!canPrev}
              aria-label="Previous case studies"
              className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-700 ${
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
              className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-700 ${
                canNext
                  ? "bg-[#3a3ff0] text-white hover:bg-[#2c30c9]"
                  : "cursor-not-allowed bg-slate-200/70 text-slate-400"
              }`}
            >
              <ChevronRight className="h-5 w-5" strokeWidth={2.25} />
            </button>
          </div>
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
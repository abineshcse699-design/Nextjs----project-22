"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * HexawareNewsSection
 * --------------------
 * Text-only news carousel: date + headline, no images/cards.
 * Same drag/click scroll + progress-bar behaviour as CaseStudiesSection,
 * so it feels consistent with the rest of the page.
 */

interface NewsItem {
  id: number;
  date: string;
  title: string;
  href: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    date: "AUG 17, 2026",
    title: "Hexaware Helps Enterprises Achieve Infinite Momentum by Removing Friction Across the Estate",
    href: "#",
  },
  {
    id: 2,
    date: "AUG 13, 2026",
    title: "Hexaware and upGrad Enterprise Expand Collaboration for Global Enterprise AI Programs",
    href: "#",
  },
  {
    id: 3,
    date: "AUG 6, 2026",
    title: "Hexaware Joins the Microsoft Security Association (MISA)",
    href: "#",
  },
  {
    id: 4,
    date: "AUG 4, 2026",
    title: "Hexaware Named a Top 15 Sourcing Standout by ISG",
    href: "#",
  },
  {
    id: 5,
    date: "JUL 22, 2026",
    title: "Hexaware Dream Runners Half Marathon 2026 Draws 7,339 Runners in Chennai",
    href: "#",
  },
  {
    id: 6,
    date: "JUL 17, 2026",
    title:
      "Hexaware Recognized as a Champion in the 2025 ISG Star of Excellence™ Awards With a Top Score",
    href: "#",
  },
];

export default function HexawareNewsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

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
    const card = el.querySelector<HTMLElement>("[data-news-card]");
    const gap = 64;
    const step = card ? card.offsetWidth + gap : el.clientWidth * 0.85;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section className="bg-[#eef0f4] px-6 py-20 md:px-16 lg:py-24">
      <h2 className="mb-14 text-4xl font-semibold tracking-tight text-[#0b1747] md:text-5xl">
        Hexaware News
      </h2>

      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-16 overflow-x-auto scroll-smooth pb-2"
      >
        {newsItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            data-news-card
            className="group flex w-[260px] shrink-0 snap-start flex-col gap-4 sm:w-[320px]"
          >
            <span className="text-[13px] font-medium tracking-wide text-slate-400">
              {item.date}
            </span>
            <h3 className="text-2xl font-semibold leading-snug text-[#0b1747] transition-colors duration-300 group-hover:text-[#3a3ff0]">
              {item.title}
            </h3>
          </a>
        ))}
      </div>

      <div className="mt-14 flex items-center gap-5">
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
            aria-label="Previous news"
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
            aria-label="Next news"
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
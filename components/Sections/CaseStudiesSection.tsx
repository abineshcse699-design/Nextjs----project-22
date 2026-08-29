"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { caseStudies } from "../../app/casestudies/caseStudiesData";

// Swiper core + navigation styles
import "swiper/css";
import "swiper/css/navigation";

/**
 * CaseStudiesSection
 * ------------------
 * "Real Results, Real Impact" Starfii case study carousel.
 *
 * Card interaction pattern (matches insight-card / cta-card-hover):
 *  - Image sits in a fixed-height frame and scales up subtly on hover
 *    (no height collapse / morph).
 *  - Title + description are always visible, no expand-on-hover.
 *  - The "Learn More" CTA reveals an animated underline that slides in
 *    from the left, driven by the `.cta-underline` span.
 */

export default function CaseStudiesSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const updateState = (swiper: SwiperType) => {
    setCanPrev(!swiper.isBeginning);
    setCanNext(!swiper.isEnd);
    setProgress(swiper.progress * 100);
  };

  // scroll-reveal: watch the section, and once it's ~15% into view,
  // flip isVisible to true once (unobserve after) so the heading +
  // carousel slowly rise up and fade in from below
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#eef0ff] to-[#c7ccfb] py-20 lg:py-28">
      <div ref={sectionRef} className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
        {/* copy — slides up + fades in slowly once scrolled into view */}
        <div
          className={`mb-14 max-w-2xl transition-all duration-[1600ms] ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
        >
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

        {/* Swiper carousel — rises up + fades in on scroll, slightly after
            the heading */}
        <div
          className={`transition-all duration-[1600ms] ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
          style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
        >
          <Swiper
            modules={[Navigation, A11y]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              updateState(swiper);
            }}
            onSlideChange={updateState}
            onProgress={updateState}
            spaceBetween={32}
            slidesPerView={1.15}
            speed={2200}
            grabCursor
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="customSwiper !overflow-visible"
          >
            {caseStudies.map((study) => (
              <SwiperSlide key={study.id} className="pb-2">
                <Link
                  href={`/casestudies/${study.slug}`}
                  className="insight-card cta-card-hover group flex h-full min-h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_2px_rgba(15,23,42,0.06)] transition-shadow duration-300 ease-in-out hover:shadow-[0_18px_40px_rgba(15,23,42,0.14)]"
                >
                  {/* image frame — fixed height, image scales up on hover */}
                  <div className="insight-card-image aspect-[4/3] w-full overflow-hidden bg-slate-900">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08]"
                    />
                  </div>

                  <div className="insight-card-content flex flex-1 flex-col gap-3.5 p-7">
                    <div className="insight-text flex flex-1 flex-col gap-3.5">
                      <p className="fnt_14 text-xs font-semibold tracking-[0.08em] text-[#2f7dfa]">
                        CASE STUDY
                      </p>
                      <p className="fnt_20 insight-title line-clamp-3 text-[20px] font-semibold leading-snug text-[#0b1747]">
                        {study.title}
                      </p>
                      <p className="insight-desc line-clamp-3 text-[15px] leading-relaxed text-slate-500">
                        {study.cardDescription}
                      </p>
                    </div>

                    {/* cta with sliding underline reveal */}
                    <span className="cta cta-underline group/cta relative mt-auto inline-flex w-fit items-center gap-1.5 pt-2 text-[16px] font-medium text-[#4b5fed]">
                      <span className="relative">
                        Learn More
                        <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-current transition-[width] duration-300 ease-out group-hover:w-full" />
                      </span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
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
              onClick={() => swiperRef.current?.slidePrev()}
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
              onClick={() => swiperRef.current?.slideNext()}
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
    </section>
  );
}
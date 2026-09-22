"use client";

// app/services/Quality-Engineering/capabilities/othercapabilities.tsx
// "Other Quality Engineering Capabilities" gradient section with a
// one-card-per-click carousel.

import Link from "next/link";
import {
  useRef,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
  type ReactElement,
} from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Reveal from "./reveal";

const CHAMPION_BLUE = "#1B2560";
const INDIGO_CTA = "#4F3FE0";

const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";
const CARD_GAP = 32;

const SECTION_HEADING =
  "font-heading font-medium leading-[1.15] text-[34px] sm:text-[40px] lg:text-[46px]";

/* ---------------------------------------------------------------
   HOOK: responsive items-per-page
---------------------------------------------------------------- */

type Breakpoints = { mobile: number; tablet: number; desktop: number };

function useItemsPerPage({ mobile, tablet, desktop }: Breakpoints): number {
  const [count, setCount] = useState(desktop);

  useEffect(() => {
    const mqTablet = window.matchMedia("(max-width: 1023px)");
    const mqMobile = window.matchMedia("(max-width: 639px)");

    const update = () => {
      if (mqMobile.matches) setCount(mobile);
      else if (mqTablet.matches) setCount(tablet);
      else setCount(desktop);
    };

    update();
    mqTablet.addEventListener("change", update);
    mqMobile.addEventListener("change", update);
    return () => {
      mqTablet.removeEventListener("change", update);
      mqMobile.removeEventListener("change", update);
    };
  }, [mobile, tablet, desktop]);

  return count;
}

/* ---------------------------------------------------------------
   StepCarousel — one card per arrow click
---------------------------------------------------------------- */

type StepCarouselProps<T> = {
  items: T[];
  itemsPerPage: Breakpoints;
  renderItem: (item: T, index: number) => ReactNode;
  gap?: number;
};

function StepCarousel<T>({
  items,
  itemsPerPage,
  renderItem,
  gap = 24,
}: StepCarouselProps<T>): ReactElement {
  const perPage = useItemsPerPage(itemsPerPage);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const [position, setPosition] = useState(0);
  const [stepWidth, setStepWidth] = useState(0);

  const maxPosition = Math.max(0, Math.ceil(items.length - perPage));
  const totalPositions = Math.max(1, maxPosition + 1);

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.firstElementChild as HTMLElement | null;
    if (!firstCard) return;

    setStepWidth(firstCard.getBoundingClientRect().width + gap);
  }, [gap]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(track);

    const firstCard = track.firstElementChild as HTMLElement | null;
    if (firstCard) observer.observe(firstCard);

    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure, perPage]);

  useEffect(() => {
    setPosition((current) => Math.min(current, maxPosition));
  }, [maxPosition]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    track.scrollTo({ left: position * stepWidth, behavior: "smooth" });
  }, [position, stepWidth]);

  const goTo = (nextPosition: number) => {
    const next = Math.min(Math.max(nextPosition, 0), maxPosition);
    setPosition(next);
  };

  const progress = ((position + 1) / totalPositions) * 100;

  return (
    <div>
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollBehavior: "smooth", gap: `${gap}px` }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="min-w-0 flex-shrink-0 snap-start"
            style={{
              width:
                perPage === 1
                  ? "100%"
                  : `calc((100% - ${(perPage - 1) * gap}px) / ${perPage})`,
            }}
          >
            {renderItem(item, i)}
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-6">
        <div
          className="h-[3px] flex-1 overflow-hidden rounded-full"
          style={{ backgroundColor: "#E5E1F5" }}
        >
          <div
            className="h-full rounded-full transition-[width] duration-300 ease-out"
            style={{ width: `${progress}%`, backgroundColor: INDIGO_CTA }}
          />
        </div>

        <span
          className="font-body flex-shrink-0 text-[13px] font-medium tabular-nums"
          style={{ color: "#94A3B8" }}
        >
          {String(position + 1).padStart(2, "0")} /{" "}
          {String(totalPositions).padStart(2, "0")}
        </span>

        <div className="flex flex-shrink-0 items-center gap-3">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => goTo(position - 1)}
            disabled={position === 0}
            className="ss-arrow-pulse flex h-11 w-11 items-center justify-center rounded-full transition-all duration-200 hover:scale-110 disabled:opacity-40 disabled:hover:scale-100"
            style={{ backgroundColor: "#E5E1F5", color: CHAMPION_BLUE }}
          >
            <ChevronLeft size={18} />
          </button>

          <button
            type="button"
            aria-label="Next"
            onClick={() => goTo(position + 1)}
            disabled={position === maxPosition}
            className="ss-arrow-pulse flex h-11 w-11 items-center justify-center rounded-full text-white transition-all duration-200 hover:scale-110 disabled:opacity-40 disabled:hover:scale-100"
            style={{ backgroundColor: INDIGO_CTA }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------
   SECTION
---------------------------------------------------------------- */

export type OtherCapability = {
  slug: string;
  title: string;
  body: string;
  heroImage: string;
};

export default function OtherCapabilities({
  items,
  basePath,
  viewAllHref,
}: {
  items: OtherCapability[];
  basePath: string;
  viewAllHref: string;
}): ReactElement {
  return (
    <section
      id="other-capabilities"
      className="scroll-mt-28 py-24"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #E9E4FB 45%, #C9BEF5 100%)",
      }}
    >
      <div className={ALIGN}>
        <Reveal className="flex items-center justify-between gap-6">
          <div>
            <h2
              className={`${SECTION_HEADING} mt-4`}
              style={{ color: CHAMPION_BLUE }}
            >
              Other Quality Engineering Capabilities
            </h2>
          </div>

          <Link
            href={viewAllHref}
            className="font-body hidden flex-shrink-0 items-center gap-1.5 text-[15px] font-semibold transition-transform duration-200 hover:translate-x-1 sm:flex"
            style={{ color: INDIGO_CTA }}
          >
            View All Capabilities
            <ArrowUpRight size={16} />
          </Link>
        </Reveal>

        <div className="mt-12">
          <StepCarousel
            items={items}
            itemsPerPage={{ mobile: 1.15, tablet: 2, desktop: 4 }}
            gap={CARD_GAP}
            renderItem={(item, i) => (
              <Reveal delay={(i % 3) * 90} className="h-full">
                <Link
                  href={`${basePath}/${item.slug}`}
                  aria-label={`Learn more about ${item.title}`}
                  className="group flex h-[500px] flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_2px_rgba(15,23,42,0.06)] transition-shadow duration-500 ease-out hover:shadow-[0_18px_40px_rgba(15,23,42,0.14)]"
                  style={{ border: "1px solid #E5E1F5" }}
                >
                  <div className="ss-case-image h-[260px] w-full shrink-0 overflow-hidden bg-slate-900 transition-[height] duration-[800ms] ease-in-out group-hover:h-0">
                    <img
                      src={item.heroImage}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col gap-3.5 overflow-hidden p-7">
                    <div className="flex flex-1 flex-col gap-3.5 overflow-hidden">
                      <span
                        className="font-body shrink-0 text-[12px] font-semibold tracking-[0.08em]"
                        style={{ color: INDIGO_CTA }}
                      >
                        CAPABILITY
                      </span>

                      <h3
                        className="font-heading ss-clamp-2 shrink-0 text-[20px] font-semibold leading-snug"
                        style={{ color: CHAMPION_BLUE }}
                      >
                        {item.title}
                      </h3>

                      <p className="ss-case-desc font-body max-h-0 -translate-y-2 text-[15px] leading-relaxed text-slate-500 opacity-0 transition-all duration-[800ms] ease-in-out group-hover:max-h-40 group-hover:translate-y-0 group-hover:opacity-100">
                        {item.body}
                      </p>
                    </div>

                    <span
                      className="font-body mt-auto inline-flex w-fit shrink-0 items-center gap-1.5 pt-2 text-[16px] font-medium"
                      style={{ color: INDIGO_CTA }}
                    >
                      <span className="relative">
                        Learn More
                        <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-current transition-[width] duration-500 ease-out group-hover:w-full" />
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            )}
          />
        </div>

        <div className="mt-8 flex justify-center sm:hidden">
          <Link
            href={viewAllHref}
            className="font-body inline-flex items-center gap-1.5 text-[15px] font-semibold"
            style={{ color: INDIGO_CTA }}
          >
            View All Capabilities
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
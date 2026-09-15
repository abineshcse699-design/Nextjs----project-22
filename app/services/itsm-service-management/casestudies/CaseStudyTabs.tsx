"use client";

import { useEffect, useState } from "react";

const TABS = [
  {
    id: "client",
    label: "Client",
  },
  {
    id: "challenge",
    label: "Challenge",
  },
  {
    id: "solution",
    label: "Solution",
  },
  {
    id: "benefits",
    label: "Benefits",
  },
  {
    id: "summary",
    label: "Summary",
  },
];

export default function CaseStudyTabs() {
  const [active, setActive] = useState("client");

  useEffect(() => {
    const sections = TABS.map((tab) =>
      document.getElementById(tab.id)
    ).filter((element): element is HTMLElement => Boolean(element));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        /*
         * Only update the active tab when the section enters
         * the center area of the viewport.
         */
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top)
          );

        if (visibleEntries.length > 0) {
          setActive(visibleEntries[0].target.id);
        }
      },
      {
        root: null,

        /*
         * The section is considered active when it reaches
         * the middle portion of the screen.
         *
         * top    = 45%
         * bottom = 45%
         */
        rootMargin: "-45% 0px -45% 0px",

        threshold: 0,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    /*
     * Offset for the sticky tabs/header.
     */
    const HEADER_OFFSET = 88;

    const elementTop =
      element.getBoundingClientRect().top + window.scrollY;

    const scrollPosition = Math.max(
      0,
      elementTop - HEADER_OFFSET
    );

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });

    /*
     * Update immediately so the UI responds
     * before the smooth scroll finishes.
     */
    setActive(id);
  };

  return (
    <div
      className="
        sticky
        top-0
        z-30
        w-full
        border-b
        border-slate-100
        bg-white/90
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-[1520px]
          gap-1
          overflow-x-auto
          px-4
          sm:gap-2
          sm:px-10
          lg:px-16
        "
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {TABS.map((tab) => {
          const isActive = active === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => handleClick(tab.id)}
              aria-current={isActive ? "true" : undefined}
              className={`
                relative
                shrink-0
                px-4
                py-4
                text-sm
                font-medium
                transition-colors
                duration-300
                sm:px-5
                sm:py-5
                ${
                  isActive
                    ? "text-[#3a3ff0]"
                    : "text-slate-500 hover:text-[#0b1747]"
                }
              `}
            >
              {tab.label}

              {/* Active underline */}
              <span
                aria-hidden="true"
                className={`
                  absolute
                  inset-x-4
                  bottom-0
                  h-[2px]
                  rounded-full
                  bg-[#3a3ff0]
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0"
                  }
                `}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
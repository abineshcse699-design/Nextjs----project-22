"use client";

import { useEffect, useState } from "react";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Challenge" },
  { id: "solution", label: "Solution" },
  { id: "results", label: "Results" },
  { id: "services", label: "Services" },
];

export default function CaseStudyTabs() {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const sections = TABS.map((tab) =>
      document.getElementById(tab.id)
    ).filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-18% 0px -62% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const headerOffset = 88;
    const y =
      element.getBoundingClientRect().top +
      window.scrollY -
      headerOffset;

    window.scrollTo({
      top: Math.max(0, y),
      behavior: "smooth",
    });

    setActive(id);
  };

  return (
    <nav
      aria-label="Case study sections"
      className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-[1520px] gap-1 overflow-x-auto px-6 sm:px-10 lg:px-16">
        {TABS.map((tab) => {
          const isActive = active === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => handleClick(tab.id)}
              aria-current={isActive ? "page" : undefined}
              className={`relative shrink-0 px-4 py-4 text-sm font-medium transition-colors duration-200 sm:px-5 ${
                isActive
                  ? "text-[#3a3ff0]"
                  : "text-slate-500 hover:text-[#0b1747]"
              }`}
            >
              {tab.label}

              <span
                aria-hidden="true"
                className={`absolute inset-x-4 bottom-0 h-[2px] rounded-full bg-[#3a3ff0] transition-opacity duration-200 sm:inset-x-5 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              />
            </button>
          );
        })}
      </div>
    </nav>
  );
}

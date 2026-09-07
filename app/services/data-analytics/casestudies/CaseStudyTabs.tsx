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
    const sections = TABS.map(({ id }) =>
      document.getElementById(id)
    ).filter((element): element is HTMLElement => Boolean(element));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const section = document.getElementById(id);

    if (!section) return;

    const headerOffset = 88;
    const top =
      section.getBoundingClientRect().top +
      window.scrollY -
      headerOffset;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: "smooth",
    });

    setActive(id);
  };

  return (
    <nav
      aria-label="Case study sections"
      className="sticky top-0 z-40 border-b border-[#E5E1F5] bg-white/95 backdrop-blur-md"
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
              className={`relative shrink-0 px-4 py-4 text-sm font-semibold transition-colors duration-200 sm:px-5 ${
                isActive
                  ? "text-[#6C5DD3]"
                  : "text-slate-500 hover:text-[#1B2560]"
              }`}
            >
              {tab.label}

              <span
                aria-hidden="true"
                className={`absolute inset-x-4 bottom-0 h-[2px] rounded-full bg-[#6C5DD3] transition-opacity duration-200 sm:inset-x-5 ${
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

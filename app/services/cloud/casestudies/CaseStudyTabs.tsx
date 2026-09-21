"use client";

import { useEffect, useState } from "react";

const TABS = [
  { id: "client", label: "Client" },
  { id: "challenge", label: "Challenge" },
  { id: "solution", label: "The Starfii Solution" },
  { id: "benefits", label: "Benefits" },
  { id: "summary", label: "Summary" },
];

export default function CaseStudyTabs() {
  const [active, setActive] = useState("client");

  useEffect(() => {
    const sections = TABS.map((t) => document.getElementById(t.id)).filter(
      (el): el is HTMLElement => !!el
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      // a section becomes "active" when it crosses the upper part of the viewport
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 104;
    window.scrollTo({ top: y, behavior: "smooth" });
    setActive(id);
  };

  return (
    // Solid grey strip so content never shows above the card while scrolling.
    // -mt-4 + pt-4 keeps the card aligned with the sidebar at the top of the page.
    <nav
      aria-label="Case study sections"
      className="sticky top-0 z-30 -mt-4 bg-[#eef0f5] pb-4 pt-4"
    >
      <div className="flex items-center gap-1 overflow-x-auto rounded-2xl bg-white p-2 [&::-webkit-scrollbar]:hidden md:justify-between">
        {TABS.map((tab) => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => handleClick(tab.id)}
              aria-current={isActive ? "true" : undefined}
              className={`font-body shrink-0 rounded-xl px-5 py-3 text-[16px] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4b4bf0] md:px-8 ${
                isActive
                  ? "bg-[#ecedfa] font-semibold text-[#4b3fe0]"
                  : "font-normal text-[#0b1747] hover:bg-slate-50"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </nav>

  );

}


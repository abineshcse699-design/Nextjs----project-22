"use client";

import { useEffect, useState } from "react";

const TABS = [
  { id: "client", label: "Client" },
  { id: "challenge", label: "Challenge" },
  { id: "solution", label: "Solution" },
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
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="sticky top-0 z-30 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1520px] gap-2 overflow-x-auto px-6 sm:px-10 lg:px-16">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => handleClick(tab.id)}
            className={`relative shrink-0 px-4 py-4 text-sm font-medium transition-colors duration-300 ${
              active === tab.id ? "text-[#3a3ff0]" : "text-slate-500 hover:text-[#0b1747]"
            }`}
          >
            {tab.label}
            <span
              className={`absolute inset-x-4 bottom-0 h-[2px] rounded-full bg-[#3a3ff0] transition-opacity duration-300 ${
                active === tab.id ? "opacity-100" : "opacity-0"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
"use client";

import { useEffect, useState } from "react";

const tabs = [
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
    label: "Modernization Solution",
  },
  {
    id: "results",
    label: "Impact",
  },
  {
    id: "benefits",
    label: "Benefits",
  },
  {
    id: "technology",
    label: "Technology",
  },
];

export default function CaseStudyTabs() {
  const [active, setActive] =
    useState("client");

  useEffect(() => {
    const elements = tabs
      .map((tab) =>
        document.getElementById(tab.id)
      )
      .filter(
        (element): element is HTMLElement =>
          Boolean(element)
      );

    if (!elements.length) return;

    const observer =
      new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter(
              (entry) =>
                entry.isIntersecting
            )
            .sort(
              (a, b) =>
                b.intersectionRatio -
                a.intersectionRatio
            );

          if (visible[0]) {
            setActive(
              visible[0].target.id
            );
          }
        },
        {
          rootMargin:
            "-20% 0px -60% 0px",
          threshold: [
            0.1,
            0.25,
            0.5,
          ],
        }
      );

    elements.forEach((element) =>
      observer.observe(element)
    );

    return () =>
      observer.disconnect();
  }, []);

  const scrollToSection = (
    id: string
  ) => {
    const element =
      document.getElementById(id);

    if (!element) return;

    const offset = 90;

    const top =
      element.getBoundingClientRect()
        .top +
      window.scrollY -
      offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    setActive(id);
  };

  return (
    <nav className="sticky top-0 z-40 border-b border-[#E5E1F5] bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1520px] gap-1 overflow-x-auto px-6 sm:px-10 lg:px-16">
        {tabs.map((tab) => {
          const isActive =
            active === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() =>
                scrollToSection(
                  tab.id
                )
              }
              className={`relative shrink-0 px-4 py-4 text-sm font-semibold transition ${
                isActive
                  ? "text-[#4F3FE0]"
                  : "text-slate-500 hover:text-[#1B2560]"
              }`}
            >
              {tab.label}

              <span
                className={`absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-[#4F3FE0] transition ${
                  isActive
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              />
            </button>
          );
        })}
      </div>
    </nav>
  );
}
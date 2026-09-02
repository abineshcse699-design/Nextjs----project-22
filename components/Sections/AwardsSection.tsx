"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

/* ===============================================================
   BRAND TOKENS — kept identical to the Digital & Software
   Services page so both sections read as one site.
   Primary   — Champion Blue  #1B2560
   Secondary — Lavender        #ECE7FB (surface) / #A48FEA (accent)
================================================================ */

const CHAMPION_BLUE = "#1B2560";
const LAVENDER_SURFACE = "#F5F3FC";
const LAVENDER_ACCENT = "#A48FEA";

const awards = [
  {
    title:
      "Starfii Named a Top-Rated Digital Engineering Partner in the 2025/2026 Global IT Sourcing Study",
    date: "05 AUG 2026",
  },
  {
    title: "Starfii Wins Four Stevie® Awards at the 2026 American Business Awards®",
    date: "27 JUL 2026",
  },
  {
    title: "Starfii Named AI Transformation Partner of the Year 2026 by a Leading Automation Alliance",
    date: "19 JUL 2026",
  },
  {
    title: "Starfii Recognized as a Client Champion in the 2025 ISG Star of Excellence™ Awards With a Top CX Score",
    date: "14 JUL 2026",
  },
  {
    title: "Starfii Ranked Among the Fastest-Growing Software Engineering Brands by Brand Value",
    date: "07 JUL 2026",
  },
  {
    title: "Starfii Featured in the 2026 Global Sustainability Yearbook",
    date: "30 JUN 2026",
  },
  {
    title: "Starfii Earns Gold Sustainability Rating, Placing in the Top 5% Globally",
    date: "22 JUN 2026",
  },
];

export default function AwardsSection() {
  const [active, setActive] = useState(3); // defaults to the ISG award

  return (
    <section className="py-28" style={{ backgroundColor: LAVENDER_SURFACE }}>
      {/* Container width/padding matched to the navbar's outer wrapper
          (mx-auto max-w-[1520px] px-6 pt-4 sm:px-10 lg:px-16) so this
          section's content lines up under the same edges as the nav. */}
      <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
        <h2
          className="font-heading text-[40px] font-medium lg:text-[46px]"
          style={{ color: CHAMPION_BLUE }}
        >
          Awards and Recognitions
        </h2>
        <p className="font-body mt-4 max-w-xl text-lg text-slate-600">
          Recognition that reflects an innovation-first culture and how we
          show up as a reliable transformation partner.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
          {/* Image with sliding caption */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl lg:sticky lg:top-32">
          <img
  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1400&auto=format&fit=crop"
  alt="Starfii team member"
  className="h-full w-full object-cover object-center"
/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-8">
              <p className="font-body text-sm font-medium tracking-wide text-white/80">
                {awards[active].date}
              </p>
              <h3
                key={active}
                className="font-heading mt-3 max-w-md text-2xl font-medium leading-snug text-white transition-opacity duration-500"
              >
                {awards[active].title}
              </h3>
              <a
                href="#"
                className="font-body mt-5 inline-flex items-center gap-1.5 text-[15px] font-medium text-white hover:underline"
              >
                Learn More
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </a>
            </div>
          </div>

          {/* Award list */}
          <div className="flex flex-col">
            {awards.map((a, i) => (
              <button
                key={a.title}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group flex items-center justify-between gap-6 border-b py-6 text-left transition-colors duration-300 first:pt-0"
                style={{
                  borderColor: "#D9D0F5",
                  color: active === i ? CHAMPION_BLUE : "#334155",
                }}
              >
                <span className="font-body text-lg font-medium leading-snug">
                  {a.title}
                </span>
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors duration-300"
                  style={{
                    backgroundColor: active === i ? CHAMPION_BLUE : "#FFFFFF",
                    color: active === i ? "#FFFFFF" : CHAMPION_BLUE,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = CHAMPION_BLUE;
                    e.currentTarget.style.color = "#FFFFFF";
                  }}
                >
                  <ArrowUpRight size={18} strokeWidth={2.5} />
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
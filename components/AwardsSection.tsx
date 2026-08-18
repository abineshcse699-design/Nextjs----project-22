"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const awards = [
  {
    title:
      "Hexaware Named an Exceptional Performer for Overall Client Satisfaction in Whitelane Research's 2025/2026 Europe IT Sourcing Study",
    date: "02 AUG 2026",
  },
  {
    title: "Hexaware Wins Seven Stevie® Awards at the 2026 American Business Awards®",
    date: "28 JUL 2026",
  },
  {
    title: "Hexaware Named Top Business Transformation Partner of the Year 2026 by Automation Anywhere",
    date: "22 JUL 2026",
  },
  {
    title: "Hexaware Recognized as a Client Champion in the 2025 ISG Star of Excellence™ Awards With a Top Overall CX Score",
    date: "17 JUL 2026",
  },
  {
    title: "Hexaware is the Second-Fastest-Growing Indian IT Services Brand by Brand Value",
    date: "09 JUL 2026",
  },
  {
    title: "Hexaware Honored in S&P Global Sustainability Yearbook 2026",
    date: "01 JUL 2026",
  },
  {
    title: "Hexaware Earns Gold Sustainability Rating from EcoVadis, Placing in the Top 5% Globally",
    date: "24 JUN 2026",
  },
];

export default function AwardsSection() {
  const [active, setActive] = useState(3); // defaults to the ISG award, matching the reference image

  return (
    <section className="bg-[#eef1f8] py-28">
      <div className="mx-auto max-w-[1760px] px-8 lg:px-16">
        <h2 className="text-[40px] font-medium text-[#0d1b4c] lg:text-[46px]">
          Awards and Recognitions
        </h2>
        <p className="mt-4 max-w-xl text-lg text-slate-600">
          Recognition that reflects an innovation-first culture and how we
          show up as a reliable transformation partner
        </p>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
          {/* Image with sliding caption */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl lg:sticky lg:top-32">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop"
              alt="Hexaware business professional"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-8">
              <p className="text-sm font-medium tracking-wide text-white/80">
                {awards[active].date}
              </p>
              <h3
                key={active}
                className="mt-3 max-w-md text-2xl font-medium leading-snug text-white transition-opacity duration-500"
              >
                {awards[active].title}
              </h3>
              <a
                href="#"
                className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-medium text-white hover:underline"
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
                className={`group flex items-center justify-between gap-6 border-b border-slate-300/70 py-6 text-left transition-colors duration-300 first:pt-0 ${
                  active === i ? "text-[#3B2FE0]" : "text-[#0d1b4c]"
                }`}
              >
                <span className="text-lg font-medium leading-snug">
                  {a.title}
                </span>
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                    active === i
                      ? "bg-[#3B2FE0] text-white"
                      : "bg-white text-[#0d1b4c] group-hover:bg-[#3B2FE0] group-hover:text-white"
                  }`}
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
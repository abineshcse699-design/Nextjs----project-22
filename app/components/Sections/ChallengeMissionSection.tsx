"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

export default function ChallengeMissionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-[820px] w-full overflow-hidden">
      {/* Background photo — swapped to a higher-resolution (4K, ~2400px
          wide) professional office/team-collaboration shot, keeping the
          same enterprise-technology-consulting theme as before. */}
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2400&auto=format&fit=crop"
        alt="Diverse business team collaborating in a modern office"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

      {/* Container width/padding matched to the navbar's outer wrapper
          (mx-auto max-w-[1520px] px-6 pt-4 sm:px-10 lg:px-16) so this
          section's content lines up under the same edges as the nav. */}
      <div
        ref={ref}
        className="relative z-10 mx-auto flex h-full min-h-[820px] max-w-[1520px] items-center justify-end px-6 py-24 sm:px-10 lg:px-16"
      >
        <div
          className={`w-full max-w-md rounded-3xl bg-white p-10 shadow-[0_25px_60px_rgba(0,0,0,0.25)] transition-all duration-700 ease-out ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl font-medium leading-tight text-[#0d1b4c]">
            Your Challenges = Our Mission
          </h2>

          <p className="mt-6 text-[15px] leading-relaxed text-slate-600">
            Every IT and business challenge is Hexaware territory. With
            global presence and an open and innovative ecosystem, we are the
            trusted partner enterprises rely on. As a technology consulting
            partner, we prioritize reinventing enterprise and high customer
            satisfaction.
          </p>

          <button
            aria-label="Play video"
            className="group mt-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#3B2FE0] text-white transition-transform duration-300 hover:scale-110"
          >
            <Play
              size={22}
              fill="white"
              className="ml-1 transition-transform duration-300 group-hover:scale-110"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
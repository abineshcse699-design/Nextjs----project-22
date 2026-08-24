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
      {/* Background photo */}
      <img
        src="https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=1920&auto=format&fit=crop"
        alt="Two hikers helping each other reach the summit"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

      <div
        ref={ref}
        className="relative z-10 mx-auto flex h-full min-h-[820px] max-w-[1760px] items-center justify-end px-8 py-24 lg:px-16"
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
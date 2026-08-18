"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    prefix: "$",
    value: 1.5,
    decimals: 1,
    suffix: "B+",
    label:
      "Annual revenue driven by long-term client partnerships across 12+ industries",
  },
  {
    prefix: "",
    value: 33,
    decimals: 0,
    suffix: "K+",
    label:
      "Hexawarians who build, transform, run, and optimize technology and operations",
  },
  {
    prefix: "",
    value: 68,
    decimals: 0,
    suffix: "",
    label: "Global offices creating impact for clients and communities worldwide",
  },
  {
    prefix: "",
    value: 33,
    decimals: 0,
    suffix: "+",
    label: "Years of technology leadership helping enterprises navigate change",
  },
];

function useCountUp(target: number, decimals: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1400;
    const start = performance.now();

    let raf: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);

  return value.toFixed(decimals);
}

function StatBlock({
  prefix,
  value,
  decimals,
  suffix,
  label,
  active,
}: (typeof stats)[number] & { active: boolean }) {
  const display = useCountUp(value, decimals, active);
  return (
    <div>
      <div className="text-[52px] font-light leading-none text-[#0d1b4c] lg:text-[60px]">
        {prefix}
        {display}
        {suffix}
      </div>
      <p className="mt-4 max-w-[240px] text-[15px] leading-relaxed text-slate-600">
        {label}
      </p>
    </div>
  );
}

export default function GlanceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-[1760px] px-8 lg:px-16">
        <div
          ref={ref}
          className="rounded-3xl bg-gradient-to-br from-white via-[#f5f8ff] to-[#eef4ff] px-10 py-16 shadow-[0_20px_60px_rgba(59,47,224,0.08)] lg:px-16"
        >
          <h2 className="text-[40px] font-medium text-[#0d1b4c] lg:text-[46px]">
            Hexaware at a Glance
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <StatBlock key={s.label} {...s} active={active} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
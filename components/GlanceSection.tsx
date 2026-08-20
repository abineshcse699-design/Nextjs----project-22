"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    prefix: "",
    value: 3,
    decimals: 0,
    suffix: "+",
    label: "Development Locations",
  },
  {
    prefix: "",
    value: 80,
    decimals: 0,
    suffix: "+",
    label: "Skilled Professionals Driving Innovation",
  },
  {
    prefix: "",
    value: 20,
    decimals: 0,
    suffix: "+",
    label: "Successful Partnerships with Industry Leaders",
  },
  {
    prefix: "",
    value: 5,
    decimals: 0,
    suffix: "+",
    label: "Years of Experience Delivering Top Solutions",
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
    <div className="flex flex-col">
      <div className="whitespace-nowrap text-[56px] font-light leading-none text-[#0b1747] lg:text-[64px]">
        {prefix}
        {display}
        {suffix}
      </div>
      <p className="mt-4 max-w-[220px] text-[15px] leading-relaxed text-[#4a5578]">
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
    <section ref={ref} className="bg-white py-24">
      <div className="mx-auto max-w-[1760px] px-8 lg:px-16">
        <h2 className="max-w-xl text-[42px] font-medium leading-[1.15] text-[#0b1747] lg:text-[48px]">
          Your Tech Partner for
          <br />
          the Next Big Leap
        </h2>

        <div className="mt-20 grid grid-cols-2 gap-x-10 gap-y-14 sm:grid-cols-4">
          {stats.map((s) => (
            <StatBlock key={s.label} {...s} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
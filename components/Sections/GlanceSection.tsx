"use client";

import { Poppins } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

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

function useCountUp(
  target: number,
  decimals: number,
  active: boolean
) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    const duration = 1400;
    const start = performance.now();

    let raf: number;

    const tick = (now: number) => {
      const progress = Math.min(
        (now - start) / duration,
        1
      );

      // Smooth ease-out animation
      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(target * eased);

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
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
      {/* Number */}
      <div
        className="
          whitespace-nowrap
          text-[72px]
          font-light
          leading-[0.95]
          tracking-[-0.035em]
          text-[#0b1747]
          sm:text-[78px]
          lg:text-[84px]
          xl:text-[88px]
        "
      >
        {prefix}
        {display}
        {suffix}
      </div>

      {/* Description */}
      <p
        className="
          mt-6
          max-w-[320px]
          text-[17px]
          font-normal
          leading-[1.5]
          tracking-[-0.01em]
          text-[#0b1747]
          sm:text-[18px]
          lg:text-[19px]
        "
      >
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
      {
        threshold: 0.3,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`${poppins.className} bg-white py-24 lg:py-28`}
    >
      <div
        className="
          mx-auto
          max-w-[1830px]
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          xl:px-12
        "
      >
        {/* Heading */}
        <h2
          className="
            max-w-[800px]
            text-[48px]
            font-light
            leading-[1.1]
            tracking-[-0.03em]
            text-[#0b1747]
            sm:text-[54px]
            lg:text-[62px]
            xl:text-[68px]
          "
        >
          Your Tech Partner for
          <br />
          the Next Big Leap
        </h2>

        {/* Stats */}
        <div
          className="
            mt-24
            grid
            grid-cols-1
            gap-y-16
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-x-12
            xl:gap-x-20
          "
        >
          {stats.map((stat) => (
            <StatBlock
              key={stat.label}
              {...stat}
              active={active}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
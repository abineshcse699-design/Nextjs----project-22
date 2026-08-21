"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    title: "Discover Your AI Opportunity",
    body: "We assess your product, data, and workflows to pinpoint where AI can move the needle fastest — grounded in your business goals, not hype.",
  },
  {
    title: "Design AI-Driven Products",
    body: "Our team architects software and product experiences with AI built in from day one, not bolted on afterward.",
  },
  {
    title: "Engineer at Startup Speed",
    body: "80+ skilled engineers across 3+ development locations ship production-grade software fast, without cutting corners on quality.",
  },
  {
    title: "Scale Across Industries",
    body: "From e-commerce and travel to healthcare, finance, ed-tech, and logistics, we bring proven playbooks tailored to your industry's needs.",
  },
  {
    title: "Partner Beyond Launch",
    body: "5+ years of delivering top solutions means we stay in the loop post-launch — monitoring, optimizing, and evolving your product as you grow.",
  },
];

function StepRow({
  title,
  body,
  isLast,
}: {
  title: string;
  body: string;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        group
        relative
        z-30
        grid
        grid-cols-1
        gap-4
        py-9
        sm:grid-cols-[300px_1fr]
        sm:gap-14
        transition-all
        duration-700
        ease-out
        ${!isLast ? "border-b border-[#0d1b4c]/10" : ""}
        ${
          visible
            ? "translate-x-0 opacity-100"
            : "-translate-x-8 opacity-0"
        }
      `}
    >
      <h3
        className="
          text-[25px]
          font-medium
          leading-[1.2]
          text-[#0d1b4c]
          transition-colors
          duration-300
          group-hover:text-[#3B2FE0]
          sm:text-[27px]
        "
      >
        {title}
      </h3>

      <p
        className="
          self-center
          text-[16px]
          leading-[1.7]
          text-slate-600
          sm:text-[16.5px]
        "
      >
        {body}
      </p>
    </div>
  );
}

export default function AIJourneySection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    const startVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.log("Video autoplay waiting:", error);
      }
    };

    startVideo();

    return () => {
      video.pause();
    };
  }, []);

  return (
    <section
      className="
        relative
        isolate
        min-h-screen
        overflow-hidden
        bg-white
        py-28
        sm:py-32
        lg:py-40
      "
    >
      {/* =====================================================
          VIDEO BACKGROUND ONLY
      ====================================================== */}
{/* VIDEO BACKGROUND */}
<div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
  <video
    ref={videoRef}
    className="
      absolute
      inset-0
      h-full
      w-full
      object-cover
      object-center
    "
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    aria-hidden="true"
  >
    <source src="/videos/a1.mp4" type="video/mp4" />
  </video>

  {/* DARKEN VIDEO ONLY */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Keep content side brighter/cleaner */}
  <div
    className="
      absolute
      inset-0
      bg-gradient-to-r
      from-white/75
      via-white/20
      to-transparent
    "
  />

  {/* Soft bottom white fade */}
  <div
    className="
      absolute
      inset-x-0
      bottom-0
      h-48
      bg-gradient-to-t
      from-white
      via-white/50
      to-transparent
    "
  />

  {/* Soft top white fade */}
  <div
    className="
      absolute
      inset-x-0
      top-0
      h-24
      bg-gradient-to-b
      from-white/70
      to-transparent
    "
  />
</div>

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div
        className="
          relative
          z-30
          mx-auto
          grid
          max-w-[1900px]
          grid-cols-1
          gap-14
          px-6
          sm:px-8
          lg:grid-cols-[480px_1fr]
          lg:gap-20
          lg:px-20
        "
      >
        {/* LEFT CONTENT */}
        <div
          className="
            relative
            z-30
            lg:sticky
            lg:top-32
            lg:h-fit
          "
        >
          <div
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-[#0d1b4c]/10
              bg-white/60
              px-4
              py-2
              backdrop-blur-md
            "
          >
            <span
              className="
                mr-2
                h-2
                w-2
                rounded-full
                bg-[#7C3AED]
                shadow-[0_0_12px_rgba(124,58,237,0.8)]
              "
            />

            <span
              className="
                text-xs
                font-medium
                uppercase
                tracking-[0.18em]
                text-[#0d1b4c]/70
              "
            >
              AI Journey
            </span>
          </div>

          <h2
            className="
              mt-6
              text-[42px]
              font-medium
              leading-[1.08]
              tracking-[-0.025em]
              text-[#0d1b4c]
              sm:text-[48px]
              lg:text-[54px]
            "
          >
            Take the Next Step
            <br />
            in Your AI Journey
          </h2>

          <p
            className="
              mt-5
              max-w-[420px]
              text-base
              leading-relaxed
              text-slate-500
              sm:text-lg
            "
          >
            Wherever You Are, We Meet You There
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div
          className="
            relative
            z-30
            rounded-[32px]
            border
            border-white/50
            bg-white/25
            px-5
            shadow-[0_20px_80px_rgba(13,27,76,0.06)]
            backdrop-blur-[2px]
            sm:px-8
            lg:px-10
          "
        >
          {steps.map((step, index) => (
            <StepRow
              key={step.title}
              title={step.title}
              body={step.body}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
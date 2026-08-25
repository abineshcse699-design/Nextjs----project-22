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
        grid
        grid-cols-1
        gap-4
        py-9
        sm:grid-cols-[300px_1fr]
        sm:gap-14
        transition-all
        duration-700
        ease-out
        ${
          !isLast
            ? "border-b border-white/20"
            : ""
        }
        ${
          visible
            ? "translate-x-0 opacity-100"
            : "-translate-x-8 opacity-0"
        }
      `}
    >
      {/* STEP TITLE */}
      <h3
        className="
          text-[25px]
          font-medium
          leading-[1.2]
          text-white
          transition-all
          duration-300
          group-hover:text-white
          sm:text-[27px]
        "
      >
        {title}
      </h3>

      {/* STEP DESCRIPTION */}
      <p
        className="
          self-center
          text-[16px]
          leading-[1.7]
          text-white/80
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
        py-28
        sm:py-32
        lg:py-40
      "
    >
      {/* =====================================================
          VIDEO BACKGROUND
          bb.mp4
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 z-0">
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
          <source
            src="/videos/bb.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark overlay so text stays readable over the video */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* =====================================================
          MAIN CONTENT
          Container width/padding matched to the navbar's outer
          wrapper (mx-auto max-w-[1520px] px-6 pt-4 sm:px-10 lg:px-16)
          so this section's content lines up under the same edges
          as the nav.
      ====================================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-[1520px]
          grid-cols-1
          gap-14
          px-6
          sm:px-10
          lg:grid-cols-[480px_1fr]
          lg:gap-20
          lg:px-16
        "
      >
        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}
        <div
          className="
            relative
            z-20
            lg:sticky
            lg:top-32
            lg:h-fit
          "
        >
          {/* AI JOURNEY BADGE */}
          <div
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-white/30
              bg-white/10
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
                bg-[#A78BFA]
                shadow-[0_0_12px_rgba(167,139,250,0.9)]
              "
            />

            <span
              className="
                text-xs
                font-medium
                uppercase
                tracking-[0.18em]
                text-white
              "
            >
              AI Journey
            </span>
          </div>

          {/* MAIN HEADING */}
          <h2
            className="
              mt-6
              text-[42px]
              font-medium
              leading-[1.08]
              tracking-[-0.025em]
              text-white
              sm:text-[48px]
              lg:text-[54px]
            "
          >
            Take the Next Step
            <br />
            in Your AI Journey
          </h2>

          {/* SUBTITLE */}
          <p
            className="
              mt-5
              max-w-[420px]
              text-base
              leading-relaxed
              text-white/80
              sm:text-lg
            "
          >
            Wherever You Are, We Meet You There
          </p>
        </div>

        {/* =====================================================
            RIGHT CONTENT
        ====================================================== */}
        <div
          className="
            relative
            z-20
            rounded-[32px]
            border
            border-white/25
            bg-white/10
            px-5
            shadow-[0_20px_80px_rgba(0,0,0,0.12)]
            backdrop-blur-md
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
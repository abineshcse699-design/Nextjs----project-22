"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowUp } from "lucide-react";

/* ---------- From idea to launched product ---------- */
const steps = [
  {
    title: "Discovery & Requirements",
    text: "Working closely with your stakeholders, workflows, and systems, we identify bottlenecks, technical constraints, and high value opportunities where technology can create measurable impact.",
  },
  {
    title: "Architecture & Design",
    text: "We define the architecture, data sources, and integration points with your existing platforms, ensuring security, compliance, and scalability from day one.",
  },
  {
    title: "MVP Build & Validation",
    text: "Your MVP launches within 3 months, with continuous feedback loops so real users shape what gets built next.",
  },
  {
    title: "Scale, Support & Warranty",
    text: "Grow to a full featured product in 5+ months, backed by a free warranty period and SLA support.",
  },
];

export function ProcessSteps() {
  const [active, setActive] = useState(0);
  return (
    <div>
      <p className="font-body max-w-[62ch] text-[17px] leading-relaxed text-slate-600 lg:text-[18px]">
        A structured, low risk path from first idea to launched product, aligned with your existing processes, security needs, and
        delivery timelines.
      </p>
      <div className="mt-4 h-[3px] w-full bg-[#E3E7F0]" role="presentation">
        <div
          className="h-full bg-[#1E88F0] transition-[width] duration-500 ease-out motion-reduce:transition-none"
          style={{ width: `${((active + 1) / steps.length) * 100}%` }}
        />
      </div>
      <ul className="mt-5 space-y-2">
        {steps.map((s, i) => {
          const on = i === active;
          return (
            <li key={s.title}>
              <button
                type="button"
                aria-pressed={on}
                onClick={() => setActive(i)}
                className={`flex w-full gap-5 rounded-r-2xl border-l-[3px] py-5 pl-5 pr-6 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E88F0] ${
                  on ? "border-[#1E88F0] bg-[#EEF1F8]" : "border-[#0B1B33] hover:bg-[#F1F4FA]"
                }`}
              >
                <span className="font-mono text-[28px] font-bold leading-none text-[#FF7A4D]">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span className="font-heading block text-[24px] font-semibold leading-[1.2] text-[#1B2560] sm:text-[26px]">{s.title}</span>
                  <span className="mt-2 block h-[3px] w-4 bg-[#1E88F0]" />
                  <span className="font-body mt-4 block text-[17px] leading-[1.7] text-slate-600">{s.text}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* ---------- Industries timeline ---------- */
const industries = [
  {
    title: "E Commerce & Marketplaces",
    href: "/industries/retail-consumer",
    text: "AI chatbots handle order, shipping, and return queries across WhatsApp, email, and social, while scalable platforms stay fast through peak season traffic.",
  },
  {
    title: "Healthcare & Wellness",
    href: "/industries/health-care",
    text: "AI assisted documentation, patient facing apps, and data protection built in from day one, so care teams spend less time on paperwork.",
  },
  {
    title: "Ed Tech & E Learning",
    href: "/industries/education-institute",
    text: "Learning platforms with personalised paths, mobile first delivery, and analytics that show institutions what is working.",
  },
  {
    title: "Travel & Booking",
    href: "/industries/travel-hospital",
    text: "Booking platforms with real time inventory and pricing, plus AI assistants that handle itinerary questions around the clock.",
  },
  {
    title: "Finance",
    href: "/industries/financial-service",
    text: "Secure, compliant financial products, AI data extraction, and legacy modernization on a tailored roadmap.",
  },
  {
    title: "Transportation & Logistics",
    href: "/industries/transport",
    text: "Real time tracking, data platforms for route and demand planning, and modernized dispatch tools that keep operations running.",
  },
];

export function IndustryTimeline() {
  const [active, setActive] = useState(0);
  return (
    <ol className="relative">
      {industries.map((it, i) => {
        const on = i === active;
        const last = i === industries.length - 1;
        return (
          <li key={it.title} className="relative pb-9 last:pb-0">
            {!last && <span aria-hidden className="absolute left-[21px] top-[50px] bottom-0 border-l border-dashed border-[#F3B7A2]" />}
            <button
              type="button"
              aria-pressed={on}
              onClick={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="flex w-full items-start gap-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E88F0]"
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-mono text-[13px] font-bold transition-all duration-300 motion-reduce:transition-none ${
                  on ? "bg-[#E8500F] text-white shadow-[0_10px_24px_rgba(232,80,15,0.35)]" : "border border-[#E6E9F2] bg-white text-[#C3C9D8]"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={`transition-opacity duration-300 motion-reduce:transition-none ${on ? "opacity-100" : "opacity-45"}`}>
                <span className="font-heading block text-[24px] font-semibold leading-[1.2] text-[#1B2560] sm:text-[26px]">{it.title}</span>
                <span className="font-body mt-4 block max-w-[54ch] text-[17px] leading-[1.7] text-slate-600">{it.text}</span>
              </span>
            </button>
            {on && (
              <Link
                href={it.href}
                className="font-body ml-[68px] mt-3 inline-flex items-center gap-1.5 text-[15px] font-medium text-[#E8500F] hover:underline"
              >
                Explore {it.title} <ArrowRight size={16} />
              </Link>
            )}
          </li>
        );
      })}
    </ol>
  );
}

/* ---------- Scroll to top ---------- */
export function ScrollTopButton() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#0B1B33] text-white shadow-[0_10px_30px_rgba(11,27,51,0.35)] transition-opacity duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E88F0] focus-visible:ring-offset-2 ${
        show ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <ArrowUp size={22} />
    </button>
  );
}
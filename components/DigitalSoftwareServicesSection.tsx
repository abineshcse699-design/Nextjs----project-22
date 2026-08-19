"use client";

import { useState } from "react";
import {
  ChevronRight,
  ChevronDown,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

/* ===============================================================
   BRAND TOKENS
   Primary  — Champion Blue  #1B2560
   Secondary — Lavender       #ECE7FB (surface) / #A48FEA (accent)
   Kept as literal Tailwind arbitrary values below so this file
   is drop-in — pull them into globals.css as CSS vars if you'd
   rather reference them project-wide.
================================================================ */

const CHAMPION_BLUE = "#1B2560";
const LAVENDER_ACCENT = "#A48FEA";

/* ===============================================================
   CONTENT
================================================================ */

const keyTakeaways = [
  "Starfii is a Champion Blue-badged leader in digital products and AI-driven software engineering.",
  "We design customer-centric digital experiences and modernize complex application portfolios.",
  "Our focus spans product engineering, digital experience, and digital strategy consulting.",
  "We turn ideas into scalable products through AI-led engineering and faster delivery cycles.",
];

const focusAreas = [
  {
    title: "Enterprise Product Engineering",
    body: "We co-create what's massive for our clients — from ideation through launch — with an exceptional AI framework that delivers breakthrough growth, value, and performance.",
  },
  {
    title: "Enterprise AI/ML, Gen AI and LLM",
    body: "We collaborate closely with you to define your business problem and identify the most suitable AI models to deliver solutions that effectively address your business challenges.",
  },
  {
    title: "SaaS Product Engineering",
    body: "From fintech and healthcare to e-commerce and enterprise software, we've built SaaS products for leading Fortune 500 companies that demonstrate our capability on real projects.",
  },
  {
    title: "Data Engineering & Data Science",
    body: "We help build your entire data infrastructure with certified data engineers, while our data scientists surface the insights and patterns behind better decision-making.",
  },
  {
    title: "Cloud Engineering – AWS, Azure, GCP",
    body: "We specialize in delivering comprehensive cloud engineering services on leading platforms like AWS, Azure, and GCP, from design through maintenance and support.",
  },
  {
    title: "Legacy Software Modernization",
    body: "We work closely with you to assess your legacy systems, develop a migration plan, and ensure a smooth transition to a more future-proof platform.",
  },
  {
    title: "Reporting and Dashboard – BI",
    body: "We help transform your data into actionable insights using Tableau and Power BI, so you can make informed decisions and drive business growth.",
  },
  {
    title: "Automotive Engineering Services",
    body: "We deliver end-to-end engineering solutions for the automotive industry, supporting the transition to the digital mobility ecosystem.",
  },
  {
    title: "Revenue Cycle Management Service",
    body: "We assist healthcare organizations in streamlining the revenue cycle and patient care with HIPAA-compliant RCM services.",
  },
  {
    title: "Cybersecurity",
    body: "We help build a robust and resilient cyber framework that protects your IT infrastructure against evolving threats.",
  },
  {
    title: "UI/UX Consulting",
    body: "We design digital products that meaningfully balance what users need with what the business needs, so every screen earns its place.",
  },
  {
    title: "DevOps & Quality Engineering",
    body: "We help get your products to market faster with DevOps and test automation built into every stage of development.",
  },
];

const tabs = [
  {
    label: "Shape Product Vision Clearly",
    heading: "Product-led thinking to shape and realize your product vision",
    body: "We craft product and experience roadmaps that go beyond planning to bring your vision into reality. Every phase is clearly structured and strategically aligned, with digital solutions that support innovation and enable consistent progress.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Build Apps for Digital Markets",
    heading: "Applications engineered for how digital markets actually move",
    body: "We build applications that adapt to shifting user expectations and market conditions, so your product stays competitive long after launch instead of needing a rebuild every cycle.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Drive AI-led Software Results",
    heading: "AI embedded in delivery, not bolted on at the end",
    body: "Our engineering teams build AI into the software delivery process itself — from requirements to release — so outcomes improve measurably, not just anecdotally.",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Modernize Legacy for Growth",
    heading: "Modernization that clears the path for what's next",
    body: "We assess your legacy estate, build a tailored modernization roadmap, and transition you to a scalable platform with minimal disruption to the business.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Embed AI Across Ecosystems",
    heading: "AI that works across your whole ecosystem, not one tool",
    body: "We connect AI capability across your applications, data, and operations so intelligence compounds across the enterprise instead of living in a single silo.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
  },
];

/* ===============================================================
   SECTION
================================================================ */

export default function DigitalSoftwareServicesSection() {
  const [takeawaysOpen, setTakeawaysOpen] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const current = tabs[activeTab];

  return (
    <main className="bg-white">
      {/* ============================================================
          BREADCRUMB + HERO
      ============================================================ */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1800&auto=format&fit=crop"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/10" />
        </div>

        <div className="mx-auto max-w-[1600px] px-8 py-24 lg:px-16 lg:py-32">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[14px] font-medium"
            style={{ color: CHAMPION_BLUE }}
          >
            <a href="/" className="hover:underline">
              Home
            </a>
            <ChevronRight size={14} />
            <a href="/services" className="hover:underline">
              Services
            </a>
            <ChevronRight size={14} />
            <span className="text-slate-500">Digital & Software Solutions</span>
          </nav>

          <h1
            className="mt-8 max-w-xl text-[44px] font-medium leading-[1.15] lg:text-[54px]"
            style={{ color: CHAMPION_BLUE }}
          >
            Digital and Software Services for Modern Enterprises
          </h1>

          <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-slate-600">
            Turn ideas into scalable products and modern platforms with
            AI-driven engineering and faster delivery cycles.
          </p>

          <a
            href="#connect"
            className="mt-9 inline-flex items-center gap-2 rounded-full px-7 py-4 text-[15px] font-semibold text-white transition-transform hover:scale-[1.03]"
            style={{ backgroundColor: CHAMPION_BLUE }}
          >
            Connect Now
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      <div className="mx-auto max-w-[1600px] px-8 lg:px-16">
        {/* ============================================================
            KEY TAKEAWAYS
        ============================================================ */}
        <section className="mt-16">
          <div
            className="overflow-hidden rounded-2xl border"
            style={{ borderColor: LAVENDER_ACCENT }}
          >
            <button
              type="button"
              onClick={() => setTakeawaysOpen((v) => !v)}
              className="flex w-full items-center justify-between px-8 py-6 text-left"
            >
              <span
                className="flex items-center gap-2.5 text-[16px] font-semibold"
                style={{ color: CHAMPION_BLUE }}
              >
                <Sparkles size={18} style={{ color: LAVENDER_ACCENT }} />
                Key Takeaways
              </span>
              <ChevronDown
                size={20}
                style={{ color: CHAMPION_BLUE }}
                className={`transition-transform duration-300 ${
                  takeawaysOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {takeawaysOpen && (
              <ul
                className="space-y-3 px-8 pb-8"
                style={{ borderTop: `1px solid ${LAVENDER_ACCENT}` }}
              >
                {keyTakeaways.map((point, i) => (
                  <li
                    key={i}
                    className="pt-3 text-[15px] leading-relaxed text-slate-700"
                  >
                    • {point}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <p
            className="mt-10 max-w-3xl text-[26px] leading-snug lg:text-[30px]"
            style={{ color: CHAMPION_BLUE }}
          >
            A leader in digital products and software engineering, Starfii
            designs and engineers customer-centric digital experiences
            while modernizing complex application portfolios for speed and
            scale.
          </p>
        </section>

        {/* ============================================================
            Q&A BLOCK
        ============================================================ */}
        <section className="mt-20">
          <div
            className="grid grid-cols-1 items-center gap-10 rounded-2xl p-10 lg:grid-cols-2"
            style={{ backgroundColor: "#F5F3FC" }}
          >
            <div>
              <h2
                className="text-[26px] font-medium leading-snug lg:text-[30px]"
                style={{ color: LAVENDER_ACCENT }}
              >
                How Do Enterprises Scale and Optimize Digital and Software
                Operations?
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-slate-600">
                Enterprises scale and optimize digital and software
                operations by combining product thinking, AI-led
                engineering, and scalable architectures. Starfii brings
                these together to accelerate development, improve quality,
                and modernize legacy systems — turning ideas into digital
                experiences that users value and businesses depend on
                every day.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop"
                alt="Two colleagues reviewing a digital roadmap"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* ============================================================
            FOCUS AREAS
        ============================================================ */}
        <section className="mt-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2.6fr]">
            <div>
              <h2
                className="text-[36px] font-medium leading-[1.15]"
                style={{ color: CHAMPION_BLUE }}
              >
                Our Services &
                <br />
                Consulting Capabilities
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-slate-600">
                Plan, design, and scale customer-centric digital products
                and platforms with AI-led engineering, seamless
                experiences, and modernization strategies that drive
                speed, efficiency, and long-term business value.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {focusAreas.map((area) => (
                <div
                  key={area.title}
                  className="rounded-xl p-7 transition-transform duration-300 hover:-translate-y-1"
                  style={{ backgroundColor: "#F5F3FC" }}
                >
                  <h3
                    className="text-[19px] font-semibold"
                    style={{ color: CHAMPION_BLUE }}
                  >
                    {area.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                    {area.body}
                  </p>
                  <a
                    href="#"
                    className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-medium"
                    style={{ color: LAVENDER_ACCENT }}
                  >
                    Learn More
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            TABBED DEEP-DIVE
        ============================================================ */}
        <section className="mt-24 pb-28">
          <h2
            className="text-[34px] font-medium"
            style={{ color: CHAMPION_BLUE }}
          >
            Digital and Software Services
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[320px_1fr]">
            {/* Left nav */}
            <ul className="space-y-1 border-l" style={{ borderColor: "#E5E1F5" }}>
              {tabs.map((tab, i) => {
                const isActive = i === activeTab;
                return (
                  <li key={tab.label}>
                    <button
                      type="button"
                      onClick={() => setActiveTab(i)}
                      className="-ml-px block border-l-2 py-3 pl-5 text-left text-[16px] transition-colors duration-200"
                      style={{
                        borderColor: isActive ? CHAMPION_BLUE : "transparent",
                        color: isActive ? CHAMPION_BLUE : "#94A3B8",
                        fontWeight: isActive ? 600 : 500,
                      }}
                    >
                      {tab.label}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Right panel */}
            
            <div
              className="grid grid-cols-1 overflow-hidden rounded-2xl md:grid-cols-2"
              style={{ backgroundColor: "#F5F3FC" }}
            >
              <div className="flex flex-col justify-center p-10">
                <h3
                  className="text-[22px] font-semibold leading-snug"
                  style={{ color: CHAMPION_BLUE }}
                >
                  {current.heading}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                  {current.body}
                </p>
              </div>

              <div className="min-h-[280px]">
                <img
                  src={current.image}
                  alt={current.label}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
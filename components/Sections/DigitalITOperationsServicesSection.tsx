"use client";

import { useEffect, useState } from "react";
import {
  ChevronRight,
  ChevronDown,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const CHAMPION_BLUE = "#1B2560";
const LAVENDER_ACCENT = "#A48FEA";

// Shared page-width wrapper — kept in sync with the navbar's own
// max-width/padding so every section lines up with it exactly.
const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

// Autoplay timing for the "Digital IT Operations Services" tab list
const TAB_AUTOPLAY_MS = 4000;

const keyTakeaways = [
  "Starfii runs IT operations that stay quiet when things are working and fast to react when they aren't.",
  "We combine AIOps, service management, and infrastructure operations into one connected model.",
  "Our focus spans monitoring, incident response, service desk, and continuous operational improvement.",
  "We reduce ticket volume and downtime by fixing root causes, not just closing tickets faster.",
];

const focusAreas = [
  {
    title: "AIOps & Intelligent Monitoring",
    body: "We use AI-driven monitoring to catch anomalies before they become outages, cutting mean time to detect across your environment.",
  },
  {
    title: "IT Service Management (ITSM)",
    body: "We design and run ITSM processes on platforms like ServiceNow, so incidents, changes, and requests flow through one connected system.",
  },
  {
    title: "Infrastructure Operations",
    body: "We manage servers, networks, and endpoints across hybrid environments, keeping the estate stable as it grows and changes.",
  },
  {
    title: "Service Desk & End-User Support",
    body: "Our service desk teams resolve everyday issues quickly and route complex ones to the right specialists, without the back-and-forth.",
  },
  {
    title: "Automation & Self-Healing",
    body: "We automate repetitive operational tasks and build self-healing responses for common failures, freeing teams to focus on real problems.",
  },
  {
    title: "Cloud & On-Prem Operations",
    body: "We run day-to-day operations across cloud and on-premise systems alike, so the operating model doesn't fracture as you modernize.",
  },
  {
    title: "Security Operations Support",
    body: "We integrate operational monitoring with security response, so incidents get triaged with both uptime and risk in mind.",
  },
  {
    title: "Continuous Operational Improvement",
    body: "We track recurring incidents back to root cause and close the loop, so the same issue doesn't keep reopening month after month.",
  },
];

const tabs = [
  {
    label: "See Problems Before Users Do",
    heading: "Monitoring that catches issues before they become incidents",
    body: "We deploy AI-driven monitoring across your estate so anomalies are caught early, well before they turn into outages your users notice.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Run One Connected Service Desk",
    heading: "IT, HR, and customer service requests on a single workflow",
    body: "We connect service management across departments so requests don't get lost in handoffs, and every ticket has a clear owner from open to close.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Automate the Repetitive Work",
    heading: "Automation for the tickets your team shouldn't have to touch",
    body: "We identify high-volume, low-complexity tickets and automate the resolution path, so your operations team spends time on what actually needs a person.",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Stabilize Hybrid Environments",
    heading: "One operating model across cloud and on-premise systems",
    body: "We run operations consistently whether workloads sit in the cloud or on-premise, so modernization doesn't mean splitting your ops team in two.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Close the Loop on Root Cause",
    heading: "Fixing the reason a ticket exists, not just the ticket",
    body: "We track recurring incidents back to their source and drive fixes upstream, so operations get quieter over time instead of staying reactive.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function DigitalITOperationsServicesSection() {
  const [takeawaysOpen, setTakeawaysOpen] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [tabHovered, setTabHovered] = useState(false);
  const current = tabs[activeTab];

  // --- Autoplay for the left-side tab list ---
  // Advances to the next tab automatically every TAB_AUTOPLAY_MS.
  // Pauses on hover, and restarts the timer whenever the user
  // manually clicks a tab.
  useEffect(() => {
    if (tabHovered) return undefined;
    const id = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, TAB_AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [tabHovered, activeTab]);

  return (
    <main className="bg-white">
      {/* Progress-fill keyframe for the autoplaying tab indicator line */}
      <style>{`
        @keyframes ss-tab-progress {
          from { transform: scaleY(0); }
          to   { transform: scaleY(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ss-tab-progress-fill {
            animation: none !important;
            transform: scaleY(1) !important;
          }
        }
      `}</style>

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1800&auto=format&fit=crop"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/10" />
        </div>

        <div className={`${ALIGN} py-24 lg:py-32`}>
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
            <span className="text-slate-500">Digital IT Operations</span>
          </nav>

          <h1
            className="mt-8 max-w-xl text-[44px] font-medium leading-[1.15] lg:text-[54px]"
            style={{ color: CHAMPION_BLUE }}
          >
            Digital IT Operations Built to Stay Quiet
          </h1>

          <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-slate-600">
            Keep systems stable, incidents rare, and support fast — with
            AIOps and service management that scale as your estate grows.
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

      <div className={ALIGN}>
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
            A dependable IT operations partner, Starfii keeps enterprise
            systems stable and support responsive by pairing AIOps with
            disciplined service management.
          </p>
        </section>

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
                How Do Enterprises Keep Complex IT Estates Stable?
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-slate-600">
                Enterprises keep IT stable by combining proactive
                monitoring, automated response, and disciplined service
                management. Starfii brings these together to catch issues
                early, cut resolution times, and reduce the operational
                noise that pulls teams away from real work.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                alt="Operations team monitoring system dashboards"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mt-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2.6fr]">
            <div>
              <h2
                className="text-[36px] font-medium leading-[1.15]"
                style={{ color: CHAMPION_BLUE }}
              >
                Our IT Operations &
                <br />
                Support Capabilities
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-slate-600">
                Monitor, manage, and automate IT operations across hybrid
                environments, so systems stay stable and support stays
                fast as the business scales.
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
            TABBED DEEP-DIVE — auto-advancing tab list
        ============================================================ */}
        <section className="mt-24 pb-28">
          <h2
            className="text-[34px] font-medium"
            style={{ color: CHAMPION_BLUE }}
          >
            Digital IT Operations Services
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[320px_1fr]">
            {/* Left nav — autoplaying */}
            <ul
              className="space-y-1 border-l"
              style={{ borderColor: "#E5E1F5" }}
              onMouseEnter={() => setTabHovered(true)}
              onMouseLeave={() => setTabHovered(false)}
            >
              {tabs.map((tab, i) => {
                const isActive = i === activeTab;
                return (
                  <li key={tab.label} className="relative -ml-px">
                    {/* Animated progress fill — only rendered on the active tab,
                        remounted via key so the fill restarts from empty each time */}
                    {isActive && (
                      <span
                        key={`${activeTab}-${tabHovered}`}
                        className="ss-tab-progress-fill pointer-events-none absolute inset-y-0 left-0 w-[2px] origin-top"
                        style={{
                          backgroundColor: CHAMPION_BLUE,
                          animation: tabHovered
                            ? "none"
                            : `ss-tab-progress ${TAB_AUTOPLAY_MS}ms linear forwards`,
                          transform: tabHovered ? "scaleY(1)" : undefined,
                        }}
                      />
                    )}
                    <button
                      type="button"
                      onClick={() => setActiveTab(i)}
                      className="block py-3 pl-5 text-left text-[16px] transition-colors duration-200"
                      style={{
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

            <div
              key={activeTab}
              className="grid grid-cols-1 overflow-hidden rounded-2xl md:h-[340px] md:grid-cols-2"
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

              <div className="h-[280px] md:h-full">
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
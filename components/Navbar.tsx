"use client";

import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  MessageSquare,
  ArrowUpRight,
  Play,
} from "lucide-react";

const navItems = [
  "Services",
  "Platforms",
  "Industries",
  "Service Now",
  "Zero Friction Enterprise",
  "Insights",
  "About",
  "Careers",
];

const MENUS_WITH_CONTENT = [
  "Services",
  "Platforms",
  "Industries",
  "Service Now",
  "Zero Friction Enterprise",
  "Insights",
  "About",
  "Careers",
];

/* ===============================================================
   DESIGN TOKENS
================================================================ */
const T = {
  ink: "text-[#14163B]",
  inkBg: "bg-[#0C0E2A]",
  primary: "text-[#3B2FE0]",
  primaryBg: "bg-[#3B2FE0]",
  primaryHoverBg: "hover:bg-[#2E24B8]",
  muted: "text-[#5B5D78]",
  border: "border-[#E4E4EF]",
  panelBg: "bg-[#FAFAFD]",
};

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function clearCloseTimer() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function openMenu(item: string) {
    clearCloseTimer();
    if (MENUS_WITH_CONTENT.includes(item)) {
      setActiveMenu(item);
    } else {
      setActiveMenu(null);
    }
  }

  function scheduleClose() {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearCloseTimer();
    };
  }, []);

  return (
    /* =========================================================
       FLOATING NAVBAR — centered pill with a visible gap on both
       sides and a small top gap, exactly like the reference: the
       hero background shows through the strip above/around it,
       and the white bar itself is centered with equal left/right
       margins (not edge-to-edge).

       Must render as a direct child of <body> in app/layout.tsx
       (a sibling of {children}), never nested inside a section.
       Hero.tsx has no spacer, so its background starts at y=0
       and shows through the gap around this floating bar.
    ========================================================= */
    <header
      onMouseLeave={scheduleClose}
      className="fixed inset-x-0 top-0 z-[2147483647] isolate"
    >
      <div className="mx-auto max-w-[1520px] px-6 pt-4 sm:px-10 lg:px-16">
        <nav
          className={`
            relative w-full rounded-2xl border border-white/40 bg-white
            transition-shadow duration-300
            ${
              isScrolled
                ? "shadow-[0_16px_36px_rgba(10,14,40,0.22)]"
                : "shadow-[0_10px_28px_rgba(10,14,40,0.16)]"
            }
          `}
        >
          <div className="relative flex h-[70px] items-center justify-between px-5 lg:px-7">
            {/* Logo + primary nav */}
            <div className="flex items-center gap-10 lg:gap-12">
              <a href="/" className="flex items-center gap-2.5 shrink-0">
                <span
                  className={`
                    flex h-8 w-8 items-center justify-center rounded-md
                    text-[13px] font-bold text-white
                    ${T.primaryBg}
                  `}
                >
                  S
                </span>
                <span
                  className={`text-[21px] font-bold tracking-tight ${T.ink}`}
                >
                  Starfii
                </span>
              </a>

              <ul className="hidden items-center gap-1 lg:flex">
                {navItems.map((item) => {
                  const isActive = activeMenu === item;
                  return (
                    <li
                      key={item}
                      className="relative"
                      onMouseEnter={() => openMenu(item)}
                    >
                      <button
                        type="button"
                        className={`
                          group flex items-center gap-1 whitespace-nowrap
                          rounded-md px-3 py-2 text-[16px] font-medium
                          transition-colors duration-150
                          ${
                            isActive
                              ? `${T.primary} bg-[#F2F1FD]`
                              : `${T.ink} hover:bg-[#F5F5F9]`
                          }
                        `}
                      >
                        {item}
                        <ChevronDown
                          size={16}
                          strokeWidth={2.25}
                          className={`
                            transition-transform duration-150
                            ${isActive ? "rotate-180" : "text-[#8A8CA6]"}
                          `}
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                className={`
                  flex h-10 items-center gap-2 rounded-md px-5
                  text-[15px] font-semibold text-white
                  transition-colors duration-150
                  ${T.primaryBg} ${T.primaryHoverBg}
                `}
              >
                <MessageSquare size={16} strokeWidth={2.25} />
                <span className="hidden sm:inline">Talk to us</span>
              </button>
            </div>
          </div>

          {/* Mega menu — same rounded pill width as the nav bar
              above it, with a small gap, matching the floating
              card look end-to-end. */}
          {activeMenu && (
            <div
              onMouseEnter={clearCloseTimer}
              onMouseLeave={scheduleClose}
              className={`
                absolute left-0 right-0 top-full z-[99998] mt-2
                overflow-hidden rounded-2xl border ${T.border} bg-white
                shadow-[0_16px_40px_rgba(10,14,40,0.18)]
              `}
            >
              <div className="px-6 py-10 lg:px-10">
                {activeMenu === "Services" && <ServicesMenu />}
                {activeMenu === "Platforms" && <PlatformsMenu />}
                {activeMenu === "Industries" && <IndustriesMenu />}
                {activeMenu === "Service Now" && <ServiceNowMenu />}
                {activeMenu === "Zero Friction Enterprise" && (
                  <ZeroFrictionMenu />
                )}
                {activeMenu === "Insights" && <InsightsMenu />}
                {activeMenu === "About" && <AboutMenu />}
                {activeMenu === "Careers" && <CareersMenu />}
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

/* ---------------- Shared bits ---------------- */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${T.primary}`}>
      {children}
    </p>
  );
}

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className={`mb-4 text-[13px] font-semibold uppercase tracking-[0.06em] text-[#8A8CA6]`}>
      {children}
    </h3>
  );
}

function LinkItem({ href = "#", children }: { href?: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className={`block text-[14.5px] ${T.ink} opacity-80 transition-opacity duration-150 hover:opacity-100 hover:${T.primary}`}
    >
      {children}
    </a>
  );
}

function FeaturedCard({
  eyebrow,
  title,
  blurb,
  dark = true,
}: {
  eyebrow: string;
  title: string;
  blurb?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`
        overflow-hidden rounded-lg border ${T.border}
        ${dark ? `${T.inkBg} text-white` : "bg-white"}
        p-6
      `}
    >
      <p className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${dark ? "text-white/60" : T.muted}`}>
        {eyebrow}
      </p>
      <h4 className="mt-3 text-[19px] font-semibold leading-snug">{title}</h4>
      {blurb && (
        <p className={`mt-3 text-[14px] leading-relaxed ${dark ? "text-white/70" : T.muted}`}>
          {blurb}
        </p>
      )}
      <a
        href="#"
        className={`mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold ${dark ? "text-white" : T.primary}`}
      >
        Learn more
        <ArrowUpRight size={15} />
      </a>
    </div>
  );
}

/* ===============================================================
   SERVICES
================================================================ */
function ServicesMenu() {
  const services = [
    { label: "Digital & Software", href: "/services/digital-software" },
    { label: "Data & Analytics", href: "/services/data-analytics" },
    { label: "Digital IT Operations", href: "/services/digital-it-operations" },
    { label: "Cloud", href: "/services/cloud" },
    { label: "Enterprise Platforms Services", href: "#" },
    { label: "Business Process Services", href: "#" },
    { label: "Artificial Intelligence", href: "#" },
    { label: "Global Capability Centers", href: "#" },
  ];

  const offeringsLeft = [
    "AI-native Contact Center",
    "Cybersecurity",
    "Enterprise Automation",
    "Sustainability Services",
    "Vibe Coding",
  ];

  const offeringsRight = [
    "Application Services",
    "Digital Workplace",
    "Generative AI",
    "Testing",
  ];

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.5fr_0.9fr]">
      <div>
        <ColumnTitle>Services</ColumnTitle>
        <div className="space-y-3.5">
          {services.map((s) => (
            <LinkItem key={s.label} href={s.href}>
              {s.label}
            </LinkItem>
          ))}
        </div>
      </div>

      <div>
        <ColumnTitle>Offerings</ColumnTitle>
        <div className="grid grid-cols-2 gap-x-8 gap-y-3.5">
          {offeringsLeft.map((o) => (
            <LinkItem key={o}>{o}</LinkItem>
          ))}
          {offeringsRight.map((o) => (
            <LinkItem key={o}>{o}</LinkItem>
          ))}
        </div>

        <div className={`mt-6 flex items-center justify-between gap-4 rounded-lg ${T.panelBg} border ${T.border} p-4`}>
          <p className={`text-[14px] font-medium ${T.ink}`}>
            Editor&apos;s pick: Who owns your AI&apos;s memory?
          </p>
          <a href="#" className={`shrink-0 text-[13.5px] font-semibold ${T.primary}`}>
            Read →
          </a>
        </div>
      </div>

      <FeaturedCard
        eyebrow="Featured Publication"
        title="Agentic AI, Proven Across 100+ Case Studies"
        blurb="Real results: lower costs, faster delivery, agentic AI at work."
      />
    </div>
  );
}

/* ===============================================================
   PLATFORMS
================================================================ */
function PlatformsMenu() {
  const platforms = [
    { name: "RapidX®", desc: "Create direct, tailored paths for your teams to develop against any need" },
    { name: "Tensai®", desc: "Automate your essential processes to increase quality and efficiency" },
    { name: "Amaze®", desc: "Speed up and steady your product, platform, process, and data journey to the cloud" },
    { name: "Agentverse™", desc: "Use intelligent agents to streamline operations, accelerate decisions, and improve outcomes" },
  ];

  return (
    <div>
      <ColumnTitle>Platforms</ColumnTitle>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {platforms.map((p) => (
          <div key={p.name} className={`border-l-2 ${T.border} pl-4`}>
            <h4 className={`text-[17px] font-semibold ${T.ink}`}>{p.name}</h4>
            <p className={`mt-2 text-[13.5px] leading-relaxed ${T.muted}`}>{p.desc}</p>
            <a href="#" className={`mt-3 inline-flex items-center gap-1.5 text-[13.5px] font-semibold ${T.primary}`}>
              Learn more
              <ArrowUpRight size={14} />
            </a>
          </div>
        ))}
      </div>

      <div className={`mt-8 flex flex-col gap-4 rounded-lg ${T.inkBg} p-6 text-white sm:flex-row sm:items-center sm:justify-between`}>
        <div>
          <h4 className="text-[18px] font-semibold">Zerovity™</h4>
          <p className="mt-1.5 max-w-xl text-[13.5px] leading-relaxed text-white/70">
            Captures how your applications actually work, then applies that
            understanding across maintenance, modernization, and
            transformation — the platform behind the Zero Friction
            Enterprise™.
          </p>
        </div>
        <a
          href="#"
          className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-md bg-white/10 px-4 py-2 text-[14px] font-semibold text-white transition-colors hover:bg-white/15"
        >
          Learn more
          <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
}

/* ===============================================================
   INDUSTRIES
================================================================ */
function IndustriesMenu() {
  const industriesLeft = [
    "Banking", "Consumer Goods", "Education & Institutions", "Energy & Utilities",
    "Financial Services", "Healthcare", "Insurance", "Life Sciences", "Manufacturing",
  ];
  const industriesRight = [
    "Private Equity", "Professional Services", "Public Sector", "Retail",
    "Technology, Products & Platforms", "Telecom", "Transportation & Logistics", "Travel & Hospitality",
  ];

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.6fr_1fr]">
      <div>
        <ColumnTitle>Industries</ColumnTitle>
        <div className="grid grid-cols-2 gap-x-10 gap-y-3.5">
          {industriesLeft.map((i) => (
            <LinkItem key={i}>{i}</LinkItem>
          ))}
          {industriesRight.map((i) => (
            <LinkItem key={i}>{i}</LinkItem>
          ))}
        </div>
      </div>
      <FeaturedCard eyebrow="Featured Insight" title="How gen AI makes supply chains decide faster." />
    </div>
  );
}

/* ===============================================================
   SERVICE NOW
================================================================ */
function ServiceNowMenu() {
  const capabilitiesLeft = ["IT Service Management (ITSM)", "IT Operations Management (ITOM)", "Customer Service Management (CSM)"];
  const capabilitiesRight = ["HR Service Delivery (HRSD)", "Source-to-Pay Operations", "App Engine Studio"];

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.6fr_1fr]">
      <div>
        <ColumnTitle>ServiceNow</ColumnTitle>
        <p className={`mb-6 max-w-lg text-[14.5px] leading-relaxed ${T.muted}`}>
          As a certified ServiceNow implementation partner, we help
          enterprises design, build, and run ServiceNow workflows that
          connect IT, customer service, and HR operations on a single
          platform.
        </p>
        <div className="grid grid-cols-2 gap-x-10 gap-y-3.5">
          {capabilitiesLeft.map((c) => (
            <LinkItem key={c}>{c}</LinkItem>
          ))}
          {capabilitiesRight.map((c) => (
            <LinkItem key={c}>{c}</LinkItem>
          ))}
        </div>
      </div>
      <FeaturedCard eyebrow="Featured Insight" title="How Starfii and ServiceNow FSO Are Reimagining Insurance Servicing" />
    </div>
  );
}

/* ===============================================================
   ZERO FRICTION ENTERPRISE
================================================================ */
function ZeroFrictionMenu() {
  const leversLeft = ["Zero Tech Debt", "Zero Vulnerability", "Zero Defects"];
  const leversRight = ["Zero Backlog", "Zero Tickets", "Zero License"];

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr]">
      <div>
        <h3 className={`text-[19px] font-semibold ${T.ink}`}>The Zero Friction Enterprise™</h3>
        <p className={`mt-3 text-[14.5px] leading-relaxed ${T.muted}`}>
          Close the gaps that slow change with AI-led delivery designed to
          help enterprises move with greater speed, control, and scale.
        </p>
        <a href="#" className={`mt-3 inline-flex items-center gap-1.5 text-[14.5px] font-semibold ${T.primary}`}>
          Learn more
          <ArrowUpRight size={15} />
        </a>

        <hr className={`my-6 ${T.border}`} />

        <ColumnTitle>The levers that make it possible</ColumnTitle>
        <div className="grid grid-cols-2 gap-x-10 gap-y-3.5">
          {leversLeft.map((l) => (
            <p key={l} className={`text-[14.5px] ${T.ink}`}>{l}</p>
          ))}
          {leversRight.map((l) => (
            <p key={l} className={`text-[14.5px] ${T.ink}`}>{l}</p>
          ))}
        </div>
      </div>

      <div className={`relative aspect-[16/9] overflow-hidden rounded-lg border ${T.border} ${T.inkBg}`}>
        <button
          type="button"
          aria-label="Play video"
          className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white transition-transform hover:scale-105"
        >
          <Play size={20} className={T.primary} fill="currentColor" />
        </button>
      </div>
    </div>
  );
}

/* ===============================================================
   INSIGHTS
================================================================ */
function InsightsMenu() {
  const articles = [
    { label: "Featured Insight", title: "What's Changed in Microsoft Fabric for Responsible AI at Scale" },
    { label: "Featured Insight", title: "How Starfii and ServiceNow FSO Are Reimagining Insurance Servicing" },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className={`flex flex-col justify-between rounded-lg ${T.inkBg} p-8 text-white`}>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60">Insights Hub</p>
          <h4 className="mt-3 text-[22px] font-semibold leading-tight">Discover what&apos;s next in your sector</h4>
        </div>
        <a href="#" className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-white">
          Learn more
          <ArrowUpRight size={16} />
        </a>
      </div>

      {articles.map((a) => (
        <div key={a.title} className={`rounded-lg border ${T.border} p-6`}>
          <Eyebrow>{a.label}</Eyebrow>
          <h4 className={`mt-3 text-[17px] font-semibold leading-snug ${T.ink}`}>{a.title}</h4>
          <a href="#" className={`mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold ${T.primary}`}>
            Learn more
            <ArrowUpRight size={16} />
          </a>
        </div>
      ))}
    </div>
  );
}

/* ===============================================================
   ABOUT
================================================================ */
function AboutMenu() {
  const whoWeAre = ["About Starfii", "Leadership", "Partners", "Locations"];
  const purposeImpact = ["Diversity, Equity & Inclusion", "Environmental, Social & Governance", "Corporate Social Responsibility"];
  const updates = ["Newsroom", "Events", "Awards & Recognitions"];

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr_1fr_0.8fr]">
      <div>
        <ColumnTitle>Who We Are</ColumnTitle>
        <div className="space-y-3.5">
          {whoWeAre.map((i) => (
            <LinkItem key={i}>{i}</LinkItem>
          ))}
        </div>
      </div>

      <div>
        <ColumnTitle>Purpose & Impact</ColumnTitle>
        <div className="space-y-3.5">
          {purposeImpact.map((i) => (
            <LinkItem key={i}>{i}</LinkItem>
          ))}
        </div>
      </div>

      <div>
        <ColumnTitle>Updates & Highlights</ColumnTitle>
        <div className="space-y-3.5">
          {updates.map((i) => (
            <LinkItem key={i}>{i}</LinkItem>
          ))}
        </div>
      </div>

      <div className={`relative overflow-hidden rounded-lg ${T.inkBg}`}>
        <div className="flex aspect-[3/4] flex-col justify-between p-5">
          <p className="text-[13px] font-bold tracking-tight text-white">Starfii</p>
          <p className="text-[14.5px] font-medium leading-snug text-white">
            Artificial Intelligence Led
            <br />
            <span className="text-[#8FA8FF]">Human Intelligence</span>
            <br />
            Perfected
          </p>
        </div>
        <div className={`absolute bottom-4 right-4 rounded-md ${T.primaryBg} px-3 py-2 text-center text-[11px] font-semibold leading-tight text-white`}>
          Annual
          <br />
          Report 2025
        </div>
      </div>
    </div>
  );
}

/* ===============================================================
   CAREERS
================================================================ */
function CareersMenu() {
  const cards = [
    { title: "Why Join Starfii?", desc: "Build your career with opportunities to learn, grow, and contribute." },
    { title: "Programs & Learning", desc: "Empowering growth through learning and development." },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      {cards.map((card) => (
        <div key={card.title} className={`rounded-lg border ${T.border} p-6`}>
          <h4 className={`text-[18px] font-semibold ${T.ink}`}>{card.title}</h4>
          <p className={`mt-2.5 text-[14.5px] leading-relaxed ${T.muted}`}>{card.desc}</p>
          <a href="#" className={`mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold ${T.primary}`}>
            Know more
            <ArrowUpRight size={16} />
          </a>
        </div>
      ))}

      <div className={`rounded-lg ${T.inkBg} p-6 text-white`}>
        <h4 className="text-[18px] font-semibold">Jobs Portal</h4>
        <p className="mt-2.5 text-[14.5px] leading-relaxed text-white/70">
          Ready to own your game with Starfii? Look for open positions now.
        </p>
        <a href="#" className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-white">
          Know more
          <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
}
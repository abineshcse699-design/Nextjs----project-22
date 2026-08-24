"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  MessageSquare,
  ArrowUpRight,
  Play,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  "Services",
  "Platforms",
  "Industries",
  "About",
  "Careers",
];

const MENUS_WITH_CONTENT = [
  "Services",
  "Platforms",
  "Industries",
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(
    null
  );

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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    function closeOnDesktop() {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
        setMobileActiveMenu(null);
      }
    }
    window.addEventListener("resize", closeOnDesktop);
    return () => window.removeEventListener("resize", closeOnDesktop);
  }, []);

  return (
    <header
      onMouseLeave={scheduleClose}
      className="fixed inset-x-0 top-0 z-[2147483647] isolate"
    >
      <div className="mx-auto max-w-[1520px] px-6 pt-4 sm:px-8 md:px-10 lg:px-12 xl:px-16">
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
          <div className="relative flex h-[76px] items-center justify-between gap-6 px-5 lg:h-[84px] lg:px-8">
            {/* Logo */}
            <a href="/" className="flex shrink-0 items-center">
              <img
                src="/starfii_logo_black.svg"
                alt="Starfii"
                className="h-10 w-auto lg:h-12"
              />
            </a>

            {/* Primary nav — centered, spread across the middle */}
            <div className="hidden flex-1 items-center justify-center lg:flex">
              <ul className="flex items-center gap-2 xl:gap-4">
                {navItems.map((item) => {
                  const isActive = activeMenu === item;

                  const triggerClasses = `
                    group flex items-center gap-1.5 whitespace-nowrap
                    rounded-md px-4 py-2.5 text-[17px] font-medium
                    transition-colors duration-150
                    ${
                      isActive
                        ? `${T.primary} bg-[#F2F1FD]`
                        : `${T.ink} hover:bg-[#F5F5F9]`
                    }
                  `;

                  const chevron = MENUS_WITH_CONTENT.includes(item) && (
                    <ChevronDown
                      size={17}
                      strokeWidth={2.25}
                      className={`
                        transition-transform duration-150
                        ${isActive ? "rotate-180" : "text-[#8A8CA6]"}
                      `}
                    />
                  );

                  return (
                    <li
                      key={item}
                      className="relative"
                      onMouseEnter={() => openMenu(item)}
                    >
                      <button type="button" className={triggerClasses}>
                        {item}
                        {chevron}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Right side */}
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                className={`
                  flex h-11 items-center gap-2 rounded-md px-5
                  text-[15px] font-semibold text-white
                  transition-colors duration-150
                  lg:h-12 lg:px-6 lg:text-[16px]
                  ${T.primaryBg} ${T.primaryHoverBg}
                `}
              >
                <MessageSquare size={18} strokeWidth={2.25} className="shrink-0" />
                <span className="hidden sm:inline">Talk to us</span>
              </button>

              {/* Mobile menu toggle — only shown below the lg breakpoint,
                  where the centered nav list is hidden. Without this
                  button, nav items disappear with nothing to replace
                  them once the viewport drops under 1024px. */}
              <button
                type="button"
                onClick={() => {
                  setMobileOpen((v) => !v);
                  setMobileActiveMenu(null);
                }}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                className={`
                  flex h-11 w-11 shrink-0 items-center justify-center
                  rounded-md border ${T.border} ${T.ink}
                  transition-colors duration-150
                  hover:bg-[#F5F5F9]
                  lg:hidden
                `}
              >
                {mobileOpen ? (
                  <X size={20} strokeWidth={2.25} />
                ) : (
                  <Menu size={20} strokeWidth={2.25} />
                )}
              </button>
            </div>
          </div>

          {/* Mobile nav panel — accordion of the same sections used
              in the desktop mega menu, stacked for a narrow viewport. */}
          {mobileOpen && (
            <div className="max-h-[calc(100dvh-96px)] overflow-y-auto border-t border-[#E4E4EF] lg:hidden">
              <ul className="divide-y divide-[#E4E4EF] px-2 py-2">
                {navItems.map((item) => {
                  const isOpen = mobileActiveMenu === item;

                  return (
                    <li key={item}>
                      <button
                        type="button"
                        onClick={() =>
                          setMobileActiveMenu((current) =>
                            current === item ? null : item
                          )
                        }
                        className={`
                          flex w-full items-center justify-between
                          rounded-md px-4 py-3.5 text-left text-[16px]
                          font-medium transition-colors duration-150
                          ${isOpen ? `${T.primary} bg-[#F2F1FD]` : `${T.ink}`}
                        `}
                      >
                        {item}
                        <ChevronDown
                          size={18}
                          strokeWidth={2.25}
                          className={`
                            shrink-0 transition-transform duration-150
                            ${isOpen ? "rotate-180" : "text-[#8A8CA6]"}
                          `}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-2 pb-5 pt-1">
                          {item === "Services" && <ServicesMenu />}
                          {item === "Platforms" && <PlatformsMenu />}
                          {item === "Industries" && <IndustriesMenu />}
                          {item === "About" && <AboutMenu />}
                          {item === "Careers" && <CareersMenu />}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {/* Mega menu — desktop only */}
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
    <h3 className={`mb-4 text-[13.5px] font-semibold uppercase tracking-[0.06em] text-[#8A8CA6]`}>
      {children}
    </h3>
  );
}

function LinkItem({ href = "#", children }: { href?: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className={`block text-[15.5px] ${T.ink} opacity-80 transition-opacity duration-150 hover:opacity-100 hover:${T.primary}`}
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
  href = "#",
}: {
  eyebrow: string;
  title: string;
  blurb?: string;
  dark?: boolean;
  href?: string;
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
        href={href}
        className={`mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold ${dark ? "text-white" : T.primary}`}
      >
        Learn more
        <ArrowUpRight size={15} />
      </a>
    </div>
  );
}

/* ===============================================================
   SERVICES  (Service Now now lives here as a list item)
================================================================ */
function ServicesMenu() {
  const services = [
    { label: "Digital & Software", href: "/services/digital-software" },
    { label: "Data & Analytics", href: "/services/data-analytics" },
    { label: "Digital IT Operations", href: "/services/digital-it-operations" },
    { label: "Cloud", href: "/services/cloud" },
    { label: "Enterprise Platforms Services", href: "/services/enterprise-platform-services" },
    { label: "Business Process Services", href: "/services/business-process-services" },
    { label: "Artificial Intelligence", href: "/services/artificial-intelligence" },
    { label: "Global Capability Centers", href: "/services/global-capability-centers" },
    { label: "Service Now", href: "/services/servicenow" },
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
    { label: "Banking", href: "/industries/banking" },
    { label: "Consumer Goods", href: "/industries/consumer-goods" },
    { label: "Education & Institutions", href: "/industries/education-institutions" },
    { label: "Energy & Utilities", href: "/industries/energy-utilities" },
    { label: "Financial Services", href: "/industries/financial-services" },
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "Insurance", href: "/industries/insurance" },
    { label: "Life Sciences", href: "/industries/life-sciences" },
    { label: "Manufacturing", href: "/industries/manufacturing" },
  ];
  const industriesRight = [
    { label: "Private Equity", href: "/industries/private-equity" },
    { label: "Professional Services", href: "/industries/professional-services" },
    { label: "Public Sector", href: "/industries/public-sector" },
    { label: "Retail", href: "/industries/retail" },
    { label: "Technology, Products & Platforms", href: "/industries/technology-products-platforms" },
    { label: "Telecom", href: "/industries/telecom" },
    { label: "Transportation & Logistics", href: "/industries/transportation-logistics" },
    { label: "Travel & Hospitality", href: "/industries/travel-hospitality" },
  ];

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.6fr_1fr]">
      <div>
        <ColumnTitle>Industries</ColumnTitle>
        <div className="grid grid-cols-2 gap-x-10 gap-y-3.5">
          {industriesLeft.map((i) => (
            <LinkItem key={i.label} href={i.href}>{i.label}</LinkItem>
          ))}
          {industriesRight.map((i) => (
            <LinkItem key={i.label} href={i.href}>{i.label}</LinkItem>
          ))}
        </div>
      </div>
      <FeaturedCard eyebrow="Featured Insight" title="How gen AI makes supply chains decide faster." />
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
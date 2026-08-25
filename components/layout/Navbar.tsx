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

  // Closing the mega menu / mobile panel on navigation (i.e. once a link
  // inside it is actually clicked) matters just as much as opening it —
  // otherwise the panel stays pinned open over the page it just routed to.
  function closeAllMenus() {
    clearCloseTimer();
    setActiveMenu(null);
    setMobileOpen(false);
    setMobileActiveMenu(null);
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
      <div className="mx-auto max-w-[1830px] px-4 pt-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
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
                        transition-transform duration-200 ease-out
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
                {/* Crossfaded + rotated icon swap instead of an instant
                    Menu/X replacement — both icons stay mounted and
                    animate opacity/rotation/scale against each other. */}
                <span className="relative flex h-5 w-5 items-center justify-center">
                  <Menu
                    size={20}
                    strokeWidth={2.25}
                    className={`
                      absolute transition-all duration-300 ease-out
                      ${
                        mobileOpen
                          ? "rotate-90 scale-75 opacity-0"
                          : "rotate-0 scale-100 opacity-100"
                      }
                    `}
                  />
                  <X
                    size={20}
                    strokeWidth={2.25}
                    className={`
                      absolute transition-all duration-300 ease-out
                      ${
                        mobileOpen
                          ? "rotate-0 scale-100 opacity-100"
                          : "-rotate-90 scale-75 opacity-0"
                      }
                    `}
                  />
                </span>
              </button>
            </div>
          </div>

          {/* Mobile nav panel — accordion of the same sections used
              in the desktop mega menu, stacked for a narrow viewport.
              Always mounted; height animates via the grid-rows trick
              (0fr -> 1fr) so it grows/shrinks smoothly instead of
              popping in/out with the old `mobileOpen && <div>` gate. */}
          <div
            className={`
              grid overflow-hidden lg:hidden
              transition-[grid-template-rows] duration-300 ease-out
              ${mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
            `}
          >
            <div className="min-h-0">
              <div
                className={`
                  max-h-[calc(100dvh-96px)] overflow-y-auto
                  border-t ${T.border}
                  transition-opacity duration-300 ease-out
                  ${mobileOpen ? "opacity-100 delay-75" : "opacity-0"}
                `}
              >
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
                              shrink-0 transition-transform duration-250 ease-out
                              ${isOpen ? "rotate-180" : "text-[#8A8CA6]"}
                            `}
                          />
                        </button>

                        {/* Same grid-rows height animation as the outer
                            mobile panel, applied per-item so opening one
                            section eases open instead of snapping. */}
                        <div
                          className={`
                            grid overflow-hidden
                            transition-[grid-template-rows] duration-250 ease-out
                            ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
                          `}
                        >
                          <div className="min-h-0 overflow-hidden">
                            <div
                              className={`
                                px-2 pb-5 pt-1
                                transition-opacity duration-200 ease-out
                                ${isOpen ? "opacity-100 delay-100" : "opacity-0"}
                              `}
                            >
                              {item === "Services" && (
                                <ServicesMenu onNavigate={closeAllMenus} />
                              )}
                              {item === "Platforms" && (
                                <PlatformsMenu onNavigate={closeAllMenus} />
                              )}
                              {item === "Industries" && (
                                <IndustriesMenu onNavigate={closeAllMenus} />
                              )}
                              {item === "About" && (
                                <AboutMenu onNavigate={closeAllMenus} />
                              )}
                              {item === "Careers" && (
                                <CareersMenu onNavigate={closeAllMenus} />
                              )}
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          {/* Mega menu — desktop only. Always mounted; visibility is
              driven by opacity/translate/pointer-events so it can
              animate out instead of vanishing the instant activeMenu
              clears (the old `{activeMenu && <div>}` had no exit
              transition at all). */}
          <div
            onMouseEnter={clearCloseTimer}
            onMouseLeave={scheduleClose}
            className={`
              absolute left-0 right-0 top-full z-[99998] mt-2
              overflow-hidden rounded-2xl border ${T.border} bg-white
              shadow-[0_16px_40px_rgba(10,14,40,0.18)]
              transition-all duration-300 ease-out
              ${
                activeMenu
                  ? "translate-y-0 scale-100 opacity-100"
                  : "pointer-events-none -translate-y-2 scale-[0.98] opacity-0"
              }
            `}
          >
            <div className="px-6 py-10 lg:px-10">
              {activeMenu === "Services" && (
                <ServicesMenu onNavigate={closeAllMenus} />
              )}
              {activeMenu === "Platforms" && (
                <PlatformsMenu onNavigate={closeAllMenus} />
              )}
              {activeMenu === "Industries" && (
                <IndustriesMenu onNavigate={closeAllMenus} />
              )}
              {activeMenu === "About" && (
                <AboutMenu onNavigate={closeAllMenus} />
              )}
              {activeMenu === "Careers" && (
                <CareersMenu onNavigate={closeAllMenus} />
              )}
            </div>
          </div>
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

/*
  LinkItem now supports opening in a new tab via `newTab`.
  When newTab is true we set target="_blank" and the safe
  rel="noopener noreferrer" (prevents the new tab from getting
  a handle back to window.opener). onClick still fires so the
  mega menu / mobile panel closes even though navigation happens
  in a separate tab.
*/
function LinkItem({
  href = "#",
  onClick,
  newTab = false,
  children,
}: {
  href?: string;
  onClick?: () => void;
  newTab?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      className={`block text-[15.5px] ${T.ink} opacity-80 transition-opacity duration-150 hover:opacity-100 hover:${T.primary}`}
    >
      {children}
    </Link>
  );
}

function FeaturedCard({
  eyebrow,
  title,
  blurb,
  dark = true,
  href = "#",
  onClick,
  newTab = false,
}: {
  eyebrow: string;
  title: string;
  blurb?: string;
  dark?: boolean;
  href?: string;
  onClick?: () => void;
  newTab?: boolean;
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
      <Link
        href={href}
        onClick={onClick}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        className={`mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold ${dark ? "text-white" : T.primary}`}
      >
        Learn more
        <ArrowUpRight size={15} />
      </Link>
    </div>
  );
}

/* ===============================================================
   SERVICES  (Service Now now lives here as a list item)
================================================================ */
function ServicesMenu({ onNavigate }: { onNavigate?: () => void }) {
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
            <LinkItem key={s.label} href={s.href} onClick={onNavigate}>
              {s.label}
            </LinkItem>
          ))}
        </div>
      </div>

      <div>
        <ColumnTitle>Offerings</ColumnTitle>
        <div className="grid grid-cols-2 gap-x-8 gap-y-3.5">
          {offeringsLeft.map((o) => (
            <LinkItem key={o} onClick={onNavigate}>{o}</LinkItem>
          ))}
          {offeringsRight.map((o) => (
            <LinkItem key={o} onClick={onNavigate}>{o}</LinkItem>
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
        onClick={onNavigate}
      />
    </div>
  );
}

/* ===============================================================
   PLATFORMS
================================================================ */
function PlatformsMenu({ onNavigate }: { onNavigate?: () => void }) {
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
function IndustriesMenu({ onNavigate }: { onNavigate?: () => void }) {
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
            <LinkItem key={i.label} href={i.href} onClick={onNavigate}>{i.label}</LinkItem>
          ))}
          {industriesRight.map((i) => (
            <LinkItem key={i.label} href={i.href} onClick={onNavigate}>{i.label}</LinkItem>
          ))}
        </div>
      </div>
      <FeaturedCard
        eyebrow="Featured Insight"
        title="How gen AI makes supply chains decide faster."
        onClick={onNavigate}
      />
    </div>
  );
}

/* ===============================================================
   ABOUT
   Routes now match the actual folder casing under /app/About/*
   (About, About/leadership, About/partners, About/locations,
   About/dei, About/esg, About/csr, About/newsroom, About/events,
   About/awards — see the file tree). Since Next.js routes are
   case-sensitive, "/about/dei" would 404 while the real page lives
   at "/About/dei" — that mismatch is why those links weren't going
   anywhere. Every item also opens in a new tab (newTab prop below).
================================================================ */
function AboutMenu({ onNavigate }: { onNavigate?: () => void }) {
  const whoWeAre = [
    { label: "About Starfii", href: "/About" },
    { label: "Leadership", href: "/About/leadership" },
    { label: "Partners", href: "/About/partners" },
    { label: "Locations", href: "/About/locations" },
  ];
  const purposeImpact = [
    { label: "Diversity, Equity & Inclusion", href: "/About/dei" },
    { label: "Environmental, Social & Governance", href: "/About/esg" },
    { label: "Corporate Social Responsibility", href: "/About/csr" },
  ];

  const updates = [
    { label: "Newsroom", href: "/About/newsroom" },
    { label: "Events", href: "/About/events" },
    { label: "Awards & Recognitions", href: "/About/awards" },
  ];


  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr_1fr_0.8fr]">
      <div>
        <ColumnTitle>Who We Are</ColumnTitle>
        <div className="space-y-3.5">
          {whoWeAre.map((i) => (
            <LinkItem key={i.label} href={i.href} onClick={onNavigate} newTab>
              {i.label}
            </LinkItem>
          ))}
        </div>
      </div>

      <div>
        <ColumnTitle>Purpose & Impact</ColumnTitle>
        <div className="space-y-3.5">
          {purposeImpact.map((i) => (
            <LinkItem key={i.label} href={i.href} onClick={onNavigate} newTab>
              {i.label}
            </LinkItem>
          ))}
        </div>
      </div>

      <div>
        <ColumnTitle>Updates & Highlights</ColumnTitle>
        <div className="space-y-3.5">
          {updates.map((i) => (
            <LinkItem key={i.label} href={i.href} onClick={onNavigate} newTab>
              {i.label}
            </LinkItem>
          ))}
        </div>
      </div>

      <Link
        href="/About"
        onClick={onNavigate}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative block overflow-hidden rounded-lg ${T.inkBg}`}
      >
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
      </Link>
    </div>
  );
}

/* ===============================================================
   CAREERS
================================================================ */

function CareersMenu({ onNavigate }: { onNavigate?: () => void }) {
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
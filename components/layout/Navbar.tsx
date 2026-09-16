"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  Phone,
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

            <Link
  href="/#form"
  onClick={closeAllMenus}
  className={`
    flex h-11 items-center gap-2 rounded-md px-5
    text-[15px] font-semibold text-white
    transition-colors duration-150
    lg:h-12 lg:px-6 lg:text-[16px]
    ${T.primaryBg} ${T.primaryHoverBg}
  `}
>
  <Phone size={18} strokeWidth={2.25} className="shrink-0" />
  <span className="hidden sm:inline">Contact</span>
</Link>


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

// `variant` prop:
// - "default" (unchanged): uppercase, muted-gray heading — used by
//   Platforms / Industries / About / Careers, exactly as before.
// - "primary" (new): blue, sentence-case heading — used by the
//   Services menu's "Services" / "Offerings" column titles to match
//   the reference screenshot.
function ColumnTitle({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "primary";
}) {
  if (variant === "primary") {
    return (
      <h3 className={`mb-4 text-[22px] font-semibold ${T.primary}`}>
        {children}
      </h3>
    );
  }
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

// Added optional `image` prop — when passed, renders a photo between
// the title and blurb (matches the "Featured Publication" reference
// screenshot with the eye photo). Cards that don't pass `image`
// render exactly as before.
function FeaturedCard({
  eyebrow,
  title,
  blurb,
  image = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
  dark = true,
  href = "#",
  onClick,
  newTab = false,
}: {
  eyebrow: string;
  title: string;
  blurb?: string;
  image?: string;
  dark?: boolean;
  href?: string;
  onClick?: () => void;
  newTab?: boolean;
}) {
  return (
    <div
      className={`
        group relative isolate min-h-[230px] overflow-hidden rounded-lg
        border ${T.border} p-6
        ${dark ? "text-white" : "bg-white"}
      `}
    >
      {dark && (
        <>
          {/* Photo sits behind everything at -z-10 so it never covers the
              text; a solid wash plus a top-to-bottom gradient on top of it
              keep the eyebrow/title/blurb readable over any image. */}
          <img
            src={image}
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className={`absolute inset-0 -z-10 ${T.inkBg}/30`} />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-transparent to-black/75" />
        </>
      )}

      <p className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${dark ? "text-white/70" : T.muted}`}>
        {eyebrow}
      </p>
      <h4 className="mt-3 text-[19px] font-semibold leading-snug">{title}</h4>

      {blurb && (
        <p className={`mt-3 text-[14px] leading-relaxed ${dark ? "text-white/80" : T.muted}`}>
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

// Shared background-image panel for the dark "editorial" cards (Case
// Study, Blogs, Jobs Portal) — one photo behind a dark wash + gradient,
// content on top. The whole card is a Link so clicking anywhere on it
// (not just the CTA text) navigates, same as the About team banner below.
function ImagePanel({
  title,
  desc,
  image,
  href,
  onClick,
  ctaLabel = "Learn more",
}: {
  title: string;
  desc: string;
  image: string;
  href: string;
  onClick?: () => void;
  ctaLabel?: string;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group relative isolate flex min-h-[190px] flex-col justify-between overflow-hidden rounded-lg p-6 text-white"
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      {/* Thin tint so the photo's own colors don't fight the white text,
          plus dark pads at the top (behind the title) and bottom (behind
          the CTA) — the middle stays clear so the photo is actually
          visible, instead of the old 85%-opaque wash that hid it almost
          entirely. */}
      <div className={`absolute inset-0 -z-10 ${T.inkBg}/35`} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/75 via-transparent to-black/80" />

      <div>
        <h4 className="text-[18px] font-semibold">{title}</h4>
        <p className="mt-3 text-[14px] leading-relaxed text-white/80">{desc}</p>
      </div>
      <span className="mt-5 inline-flex w-fit items-center gap-1.5 text-[14px] font-semibold text-white">
        {ctaLabel}
        <ArrowUpRight size={16} />
      </span>
    </Link>
  );
}

// Image-topped card used in the Platforms menu (Turbodev / TurboDesk),
// matching the reference "Featured Insight" card style: full-width
// photo on top, then eyebrow label, title, and a Learn More link —
// no body paragraph, no dark background.
function PlatformCard({
  image,
  eyebrow,
  title,
  href = "#",
  onClick,
  newTab = false,
}: {
  image: string;
  eyebrow: string;
  title: string;
  href?: string;
  onClick?: () => void;
  newTab?: boolean;
}) {
  return (
    <div className={`overflow-hidden rounded-2xl border ${T.border} bg-white`}>
      <div className="h-44 w-full overflow-hidden bg-[#F5F5F9] sm:h-48 lg:h-44 xl:h-52">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="p-6">
        <p className={`text-[13px] font-medium ${T.primary}`}>{eyebrow}</p>
        <h4 className={`mt-2 text-[19px] font-semibold leading-snug ${T.ink}`}>
          {title}
        </h4>
        <Link
          href={href}
          onClick={onClick}
          target={newTab ? "_blank" : undefined}
          rel={newTab ? "noopener noreferrer" : undefined}
          className={`mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold ${T.primary}`}
        >
          Learn More
          <ArrowUpRight size={15} />
        </Link>
      </div>
    </div>
  );
}

/* ===============================================================
   SERVICES  (Service Now now lives here as a list item)

================================================================ */
/* ===============================================================
   SERVICES MEGA MENU
   Depends on shared navbar helpers already defined in this module:
   ColumnTitle, LinkItem, FeaturedCard, and the theme token object T.

   Fixes applied here:
   1. "Services" / "Offerings" headings now use ColumnTitle
      variant="primary" -> blue, sentence-case (matches reference).
   2. FeaturedCard now gets an `image` so the dark panel shows a
      photo above the blurb (matches reference). Replace the
      Unsplash URL below with your real asset whenever you have one.
================================================================ */
function ServicesMenu({ onNavigate }: { onNavigate?: () => void }) {
  const services = [
    { label: "Software & Product Engineering ", href: "/services/digital-software" },
    { label: "Data & Analytics", href: "/services/data-analytics" },
    // { label: "Digital IT Operations", href: "/services/digital-it-operations" },
    { label: "Cloud & DevOps", href: "/services/cloud" },
    // { label: "enter prise", href: "/services/enterprise-platform-services" },
    { label: "legacy-modernization", href: "/services/legacy-Modernization" },
    { label: "ITSM & Service Management", href: "/services/itsm-service-management" },

    { label: "Freshservice", href: "/services/global-capability-centers" },
    // { label: "Software & Product Engineering", href: "/services/Software & Product Engineering" },
       { label: "ITSM & Migration", href: "/services/ITSM-Migration" },
        { label: "quality-engineering", href: "/services/Quality-Engineering" },

    { label: "Service Now", href: "/services/servicenow" },

    // ITSM & Enterprise Service Management
  ];

  const offeringsLeft = [
    { label: "AI voice call", href: "/services/offerings/ai-native-contact-center" },
    { label: "AI powered Medical Codeing", href: "/services/offerings/enterprise-automation" },
    { label: "AI meeting assistant", href: "/services/offerings/vibe-coding" },
    // { label: "Digital Workplace", href: "/services/offerings/digital-workplace" },
    { label: "AI data extraction", href: "/services/offerings/testing" },
  ];

  const offeringsRight = [
    // { label: "Cybersecurity", href: "/services/offerings/cybersecurity" },
    { label: "AI file storage", href: "/services/offerings/sustainability-services" },
    // { label: "Application Services", href: "/services/offerings/application-services" },
    { label: "AI chatbot & Go AI", href: "/services/offerings/generative-ai" },
  ];

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.5fr_0.9fr]">
      <div className={`border-r ${T.border} pr-10`}>
        <ColumnTitle variant="primary">Services</ColumnTitle>
        <div className="space-y-3.5">
          {services.map((s) => (
            <LinkItem key={s.label} href={s.href} onClick={onNavigate}>
              {s.label}
            </LinkItem>
          ))}
        </div>
      </div>

      <div>
        <ColumnTitle variant="primary">Offerings</ColumnTitle>
        <div className="grid grid-cols-2 gap-x-8 gap-y-3.5">
          {offeringsLeft.map((o) => (
            <LinkItem key={o.label} href={o.href} onClick={onNavigate}>
              {o.label}
            </LinkItem>
          ))}
          {offeringsRight.map((o) => (
            <LinkItem key={o.label} href={o.href} onClick={onNavigate}>
              {o.label}
            </LinkItem>
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
        image="https://images.unsplash.com/photo-1544396821-4dd40b938ad3?q=80&w=1200&auto=format&fit=crop"
        onClick={onNavigate}
      />
    </div>
  );
}

/* ===============================================================
   PLATFORMS
================================================================ */

// import Link from "next/link";
// import { ArrowUpRight } from "lucide-react";

// NOTE: ColumnTitle and T (theme tokens) are assumed to already be defined /
// imported in this file, same as in your original snippet. If they live in a
// separate file, import them the same way you were importing them before,
// e.g.:
// import { ColumnTitle } from "./ColumnTitle";
// import { T } from "@/lib/theme";

function PlatformsMenu({ onNavigate }: { onNavigate?: () => void }) {
  // Only Turbodev and TurboDesk are shown now — Amaze and Agentverse
  // are removed per request. Each renders as an image-topped
  // PlatformCard (see component above), matching the reference
  // "Featured Insight" card layout.
  //
  // Images bumped to w=2400 / q=90 (near-4K, high quality) — Unsplash
  // serves whatever width you ask for via the `w` param, so this pulls
  // a noticeably crisper source image than the previous w=1200 version
  // while still rendering into the same fixed-height card via
  // object-cover in PlatformCard.
  const platforms = [
    {
      name: "Turbodev",
      title: "Turbodev  the revenue engine for Shopify brands",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=90&w=2400&auto=format&fit=crop",
      href: "https://turbodev.ai/",
      newTab: true,
    },
    {
      name: "Turbodesk",
      title: "Turbodesk  intelligent service and operations platform",
      image:
        "https://images.unsplash.com/photo-1758873268745-dd2cf0d677b5?q=90&w=2400&auto=format&fit=crop",
      href: "/platform/turbodesk",
      newTab: false,
    },
  ];

  return (
    <div>
      <ColumnTitle>Platforms</ColumnTitle>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {platforms.map((p) => (
          <PlatformCard
            key={p.name}
            image={p.image}
            eyebrow="Featured Insight"
            title={p.title}
            href={p.href}
            newTab={p.newTab}
            onClick={onNavigate}
          />
        ))}
      </div>

      {/* <div className={`mt-8 flex flex-col gap-4 rounded-lg ${T.inkBg} p-6 text-white sm:flex-row sm:items-center sm:justify-between`}>
        <div>
          <h4 className="text-[18px] font-semibold">Zerovity™</h4>
          <p className="mt-1.5 max-w-xl text-[13.5px] leading-relaxed text-white/70">
            Captures how your applications actually work, then applies that
            understanding across maintenance, modernization, and
            transformation — the platform behind the Zero Friction
            Enterprise™.
          </p>
        </div>
        <Link
          href="/platform/zerovity"
          onClick={onNavigate}
          className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-md bg-white/10 px-4 py-2 text-[14px] font-semibold text-white transition-colors hover:bg-white/15"
        >
          Learn more
          <ArrowUpRight size={16} />
        </Link>
      </div> */}
    </div>
  );
}

// export default PlatformsMenu;

/* ===============================================================
   INDUSTRIES
================================================================ */
function IndustriesMenu({ onNavigate }: { onNavigate?: () => void }) {
  const industriesLeft = [
    { label: "Banking", href: "/industries/banking" },
    { label: "Financial Services", href: "/industries/financial-services" },
    { label: "Insurance", href: "/industries/insurance" },
    { label: "Healthcare & Life Sciences", href: "/industries/healthcare-life-sciences" },
    { label: "Manufacturing", href: "/industries/manufacturing" },
    { label: "Retail & Consumer", href: "/industries/retail-consumer" },
  ];
  const industriesRight = [
    { label: "Education & Institutions", href: "/industries/education-institutions" },
    { label: "Transportation & Logistics", href: "/industries/transportation-logistics" },
    { label: "Travel & Hospitality", href: "/industries/travel-hospitality" },
    { label: "Technology, Products & Platforms", href: "/industries/technology-products-platforms" },
    { label: "Professional Services", href: "/industries/professional-services" },
    { label: "Telecom & Utilities", href: "/industries/telecom-utilities" },
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
        image="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1200&auto=format&fit=crop"
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

   Case Study and Blogs are dark panels (same inkBg treatment as the
   "Zerovity" block in Platforms) sitting under the Who We Are cards:
   heading, one descriptive paragraph, Learn more link — no eyebrow,
   no list of items, matching the two reference screenshots exactly.
================================================================ */

function AboutMenu({ onNavigate }: { onNavigate?: () => void }) {
  const aboutItems = [
    {
      name: "About Starfii",
      desc: "AI led software development company building custom products and platforms that move enterprises from idea to launch with zero friction.",
      href: "/About",
    },
    {
      name: "Leadership",
      desc: "Meet the team steering Starfii's vision — driving innovation across software, data, and AI powered engineering.",
      href: "/About/leadership",
    },
  ];

  return (
    <div>
      <ColumnTitle>Who We Are</ColumnTitle>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {aboutItems.map((item) => (
          <div key={item.name} className={`border-l-2 ${T.border} pl-4`}>
            <h4 className={`text-[17px] font-semibold ${T.ink}`}>{item.name}</h4>
            <p className={`mt-2 text-[13.5px] leading-relaxed ${T.muted}`}>{item.desc}</p>
            <Link
              href={item.href}
              onClick={onNavigate}
              className={`mt-3 inline-flex items-center gap-1.5 text-[13.5px] font-semibold ${T.primary}`}
            >
              Learn more
              <ArrowUpRight size={14} />
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <ImagePanel
          title="Case Study"
          desc="A strategic digital transformation that combines thoughtful design, innovative technology, and a seamless user experience to drive meaningful business growth."
          image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
          href="/About/Case-study"
          onClick={onNavigate}
        />
        <ImagePanel
          title="Blogs"
          desc="Explore insights, ideas, and industry perspectives on emerging technologies, digital innovation, and strategies that shape the future of modern businesses."
          image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop"
          href="/About/blogs"
          onClick={onNavigate}
        />
      </div>

      <Link
        href="/About"
        onClick={onNavigate}
        className={`group relative mt-8 flex flex-col gap-4 overflow-hidden rounded-lg ${T.inkBg} p-6 text-white sm:flex-row sm:items-center sm:justify-between`}
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
          alt="Starfii team"
          className="absolute inset-0 h-full w-full object-cover opacity-30 transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="relative">
          <h4 className="text-[18px] font-semibold">
            Artificial Intelligence Led
            <br />
            <span className="text-[#8FA8FF]">Human Intelligence</span>
            <br />
            Perfected
          </h4>
        </div>
        <span className="relative inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-md bg-white/10 px-4 py-2 text-[14px] font-semibold text-white transition-colors group-hover:bg-white/15">
          Know more
          <ArrowUpRight size={16} />
        </span>
      </Link>
    </div>
  );
}
/* ===============================================================
   CAREERS
================================================================ */
function CareersMenu({ onNavigate }: { onNavigate?: () => void }) {
  const cards = [
    {
      title: "Why Join Starfii?",
      desc: "Build your career with opportunities to learn, grow, and contribute.",
      href: "/careers/why-join-starfii",
    },
    {
      title: "Programs & Learning",
      desc: "Empowering growth through learning and development.",
      href: "/careers/programs-learning",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      {cards.map((card) => (
        <div key={card.title} className={`rounded-lg border ${T.border} p-6`}>
          <h4 className={`text-[18px] font-semibold ${T.ink}`}>{card.title}</h4>
          <p className={`mt-2.5 text-[14.5px] leading-relaxed ${T.muted}`}>{card.desc}</p>
          <Link
            href={card.href}
            onClick={onNavigate}
            className={`mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold ${T.primary}`}
          >
            Know more
            <ArrowUpRight size={16} />
          </Link>
        </div>
      ))}

      <ImagePanel
        title="Jobs Portal"
        desc="Ready to own your game with Starfii? Look for open positions now."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
        href="/careers/jobs"
        onClick={onNavigate}
        ctaLabel="Know more"
      />
    </div>
  );
}
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Phone, ArrowUpRight, Menu, X } from "lucide-react";

const navItems = ["Services", "Products", "Industries", "About", /* , "Careers" */];
const MENUS_WITH_CONTENT = ["Services", "Products", "Industries", "About", /* , "Careers" */];

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

/* Featured Publication image (Unsplash, blue eye close-up) */
const EYE_IMAGE =
  "https://unsplash.com/photos/fuBj4vkp4-g/download?force=true&w=900";

/* Inline fallback — shows a blue eye illustration if the URL ever fails to load */
const EYE_FALLBACK =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="i" cx="50%" cy="50%" r="50%">
          <stop offset="0" stop-color="#0a1a33"/>
          <stop offset="0.35" stop-color="#1e6fd9"/>
          <stop offset="0.8" stop-color="#5fb4ff"/>
          <stop offset="1" stop-color="#0d3a73"/>
        </radialGradient>
        <linearGradient id="s" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#7a4a35"/>
          <stop offset="1" stop-color="#1a0e0a"/>
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill="url(#s)"/>
      <path d="M40 100 Q200 -10 360 100 Q200 210 40 100Z" fill="#f2ece6"/>
      <circle cx="200" cy="100" r="62" fill="url(#i)"/>
      <circle cx="200" cy="100" r="24" fill="#02060d"/>
      <circle cx="222" cy="80" r="10" fill="#fff" opacity="0.85"/>
      <path d="M40 100 Q200 -10 360 100" fill="none" stroke="#1a0e0a" stroke-width="10"/>
    </svg>`
  );

/* Fallback illustrations for the Products cards, used if a live URL ever fails to load */
const TURBODEV_FALLBACK =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220">
      <rect width="400" height="220" fill="#EDEBFF"/>
      <circle cx="330" cy="40" r="70" fill="#DCD8FF"/>
      <rect x="40" y="60" width="180" height="120" rx="14" fill="#FFFFFF" stroke="#D8D5F5"/>
      <rect x="60" y="82" width="120" height="10" rx="5" fill="#3B2FE0"/>
      <rect x="60" y="102" width="90" height="8" rx="4" fill="#C9C6EE"/>
      <rect x="60" y="120" width="100" height="8" rx="4" fill="#C9C6EE"/>
      <circle cx="330" cy="150" r="34" fill="#25D366"/>
      <path d="M315 150l10 10 18-20" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  );

const TURBODESK_FALLBACK =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220">
      <rect width="400" height="220" fill="#EAF2FF"/>
      <rect x="30" y="40" width="220" height="140" rx="14" fill="#FFFFFF" stroke="#D6E4FA"/>
      <rect x="50" y="60" width="140" height="10" rx="5" fill="#2088FF"/>
      <rect x="50" y="82" width="180" height="8" rx="4" fill="#C7DBF7"/>
      <rect x="50" y="100" width="150" height="8" rx="4" fill="#C7DBF7"/>
      <rect x="270" y="60" width="100" height="120" rx="12" fill="#2088FF"/>
      <circle cx="320" cy="100" r="18" fill="#fff"/>
      <rect x="290" y="130" width="60" height="8" rx="4" fill="#BFDCFF"/>
      <rect x="290" y="146" width="40" height="8" rx="4" fill="#BFDCFF"/>
    </svg>`
  );

/* Fallback illustration for the Blogs card, used if the live photo ever fails to load */
const BLOGS_FALLBACK =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220">
      <rect width="400" height="220" fill="#14163B"/>
      <rect x="40" y="50" width="220" height="14" rx="7" fill="#FFFFFF" opacity="0.9"/>
      <rect x="40" y="80" width="170" height="10" rx="5" fill="#8A8CA6"/>
      <rect x="40" y="100" width="190" height="10" rx="5" fill="#8A8CA6"/>
      <rect x="40" y="120" width="130" height="10" rx="5" fill="#8A8CA6"/>
      <circle cx="330" cy="90" r="46" fill="#3B2FE0"/>
      <path d="M312 90h36M330 72v36" stroke="#fff" stroke-width="6" stroke-linecap="round"/>
    </svg>`
  );

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function clearCloseTimer() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function openMenu(item: string) {
    clearCloseTimer();
    setActiveMenu(MENUS_WITH_CONTENT.includes(item) ? item : null);
  }

  function scheduleClose() {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setActiveMenu(null), 180);
  }

  // Close everything once a link inside a menu is clicked.
  function closeAllMenus() {
    clearCloseTimer();
    setActiveMenu(null);
    setMobileOpen(false);
    setMobileActiveMenu(null);
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
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

  // Services menu uses its own gray canvas + white panels (no default padding)
  const isServices = activeMenu === "Services";

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
            <Link href="/" onClick={closeAllMenus} className="flex shrink-0 items-center">
              <img
                src="/starfii_logo_black.svg"
                alt="Starfii"
                className="h-10 w-auto lg:h-12"
              />
            </Link>

            {/* Primary nav */}
            <div className="hidden flex-1 items-center justify-center lg:flex">
              <ul className="flex items-center gap-2 xl:gap-4">
                {navItems.map((item) => {
                  const isActive = activeMenu === item;

                  const triggerClasses = `
                    group flex items-center gap-1.5 whitespace-nowrap
                    rounded-md px-4 py-2.5 text-[15px] font-medium
                    transition-colors duration-150
                    ${
                      isActive
                        ? `${T.primary} bg-[#F2F1FD]`
                        : `${T.ink} hover:bg-[#F5F5F9]`
                    }
                  `;

                  const chevron = MENUS_WITH_CONTENT.includes(item) && (
                    <ChevronDown
                      size={16}
                      strokeWidth={2.25}
                      className={isActive ? "" : "text-[#8A8CA6]"}
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
  href="/contactpage"
  onClick={closeAllMenus}
                className={`
                  flex h-11 items-center gap-2 rounded-md px-5
                  text-[13px] font-semibold text-white
                  transition-colors duration-150
                  lg:h-12 lg:px-6 lg:text-[14px]
                  ${T.primaryBg} ${T.primaryHoverBg}
                `}
              >
                <Phone size={16} strokeWidth={2.25} className="shrink-0" />
                <span className="hidden sm:inline">Contact</span>
              </Link>

              {/* Mobile menu toggle */}
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
                <span className="relative flex h-5 w-5 items-center justify-center">
                  <Menu
                    size={18}
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
                    size={18}
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

          {/* Mobile nav panel */}
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
                            rounded-md px-4 py-3.5 text-left text-[14px]
                            font-medium transition-colors duration-150
                            ${isOpen ? `${T.primary} bg-[#F2F1FD]` : T.ink}
                          `}
                        >
                          {item}
                          <ChevronDown
                            size={16}
                            strokeWidth={2.25}
                            className={`
                              shrink-0 transition-transform duration-200 ease-out
                              ${isOpen ? "rotate-180" : "text-[#8A8CA6]"}
                            `}
                          />
                        </button>

                        <div
                          className={`
                            grid overflow-hidden
                            transition-[grid-template-rows] duration-200 ease-out
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
                              {item === "Services" && <ServicesMenu onNavigate={closeAllMenus} />}
                              {item === "Products" && <PlatformsMenu onNavigate={closeAllMenus} />}
                              {item === "Industries" && <IndustriesMenu onNavigate={closeAllMenus} />}
                              {item === "About" && <AboutMenu onNavigate={closeAllMenus} />}
                              {/* {item === "Careers" && <CareersMenu onNavigate={closeAllMenus} />} */}
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

          {/* Mega menu — desktop only */}
          <div
            onMouseEnter={clearCloseTimer}
            onMouseLeave={scheduleClose}
            className={`
              absolute left-0 right-0 top-full z-[99998] mt-2
              hidden overflow-hidden rounded-2xl border ${T.border}
              ${isServices ? "bg-[#EEEEF4]" : "bg-white"}
              shadow-[0_16px_40px_rgba(10,14,40,0.18)]
              transition-all duration-300 ease-out lg:block
              ${
                activeMenu
                  ? "translate-y-0 scale-100 opacity-100"
                  : "pointer-events-none -translate-y-2 scale-[0.98] opacity-0"
              }
            `}
          >
            <div className={isServices ? "p-4" : "px-6 py-10 lg:px-10"}>
              {activeMenu === "Services" && <ServicesMenu onNavigate={closeAllMenus} />}
              {activeMenu === "Products" && <PlatformsMenu onNavigate={closeAllMenus} />}
              {activeMenu === "Industries" && <IndustriesMenu onNavigate={closeAllMenus} />}
              {activeMenu === "About" && <AboutMenu onNavigate={closeAllMenus} />}
              {/* {activeMenu === "Careers" && <CareersMenu onNavigate={closeAllMenus} />} */}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

/* ---------------- Shared bits ---------------- */

function ColumnTitle({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "primary";
}) {
  if (variant === "primary") {
    return (
      <h3 className={`mb-4 text-[19px] font-semibold ${T.primary}`}>{children}</h3>
    );
  }
  return (
    <h3 className="mb-4 text-[12px] font-semibold uppercase tracking-[0.06em] text-[#8A8CA6]">
      {children}
    </h3>
  );
}

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
      className={`block text-[15px] ${T.ink} opacity-80 transition-all duration-150 hover:text-[#3B2FE0] hover:opacity-100`}
    >
      {children}
    </Link>
  );
}

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
          <img
            src={image}
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 -z-10 bg-[#0C0E2A]/30" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-transparent to-black/75" />
        </>
      )}

      <p
        className={`text-[10px] font-semibold uppercase tracking-[0.14em] ${
          dark ? "text-white/70" : T.muted
        }`}
      >
        {eyebrow}
      </p>
      <h4 className="mt-3 text-[16px] font-semibold leading-snug">{title}</h4>

      {blurb && (
        <p
          className={`mt-3 text-[13px] leading-relaxed ${
            dark ? "text-white/80" : T.muted
          }`}
        >
          {blurb}
        </p>
      )}
      <Link
        href={href}
        onClick={onClick}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        className={`mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold ${
          dark ? "text-white" : T.primary
        }`}
      >
        Learn more
        <ArrowUpRight size={14} />
      </Link>
    </div>
  );
}

/* Blue gradient publication card (used in Services menu) */
function PublicationCard({
  eyebrow,
  title,
  blurb,
  image,
  href = "#",
  onClick,
  ctaLabel = "Know More",
}: {
  eyebrow: string;
  title: string;
  blurb?: string;
  image: string;
  href?: string;
  onClick?: () => void;
  ctaLabel?: string;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group flex h-full min-h-[420px] flex-col rounded-2xl p-6 text-white"
      style={{ background: "linear-gradient(180deg, #3B2FE0 0%, #2088FF 100%)" }}
    >
      <p className="text-[14px] font-medium text-white/90">{eyebrow}</p>
      <h4 className="mt-2 text-[22px] font-semibold leading-[1.2]">{title}</h4>

      <div className="mt-5 h-[190px] w-full overflow-hidden rounded-xl bg-black/20">
        <img
          src={image}
          alt="Featured publication"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = EYE_FALLBACK;
          }}
          className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      {blurb && (
        <p className="mt-4 text-[15px] leading-relaxed text-white">{blurb}</p>
      )}

      <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[16px] font-medium">
        {ctaLabel}
        <ArrowUpRight size={16} />
      </span>
    </Link>
  );
}

/*
 * Product card (Turbodev / Turbodesk / etc).
 * The WHOLE card is now a Link, and it lifts + scales on hover so it
 * reads as clickable the moment the mouse moves over it.
 */
function PlatformCard({
  image,
  fallbackImage,
  eyebrow,
  title,
  href = "#",
  onClick,
  newTab = false,
}: {
  image: string;
  fallbackImage?: string;
  eyebrow: string;
  title: string;
  href?: string;
  onClick?: () => void;
  newTab?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      className="group block overflow-hidden rounded-2xl bg-white shadow-[0_1px_3px_rgba(10,14,40,0.08)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_18px_34px_rgba(10,14,40,0.16)]"
    >
      <div className="h-[190px] w-full overflow-hidden bg-[#F5F5F9]">
        <img
          src={image}
          alt={title}
          onError={
            fallbackImage
              ? (e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = fallbackImage;
                }
              : undefined
          }
          className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.06]"
        />
      </div>
      <div className="p-6">
        {eyebrow && (
          <p className={`text-[12px] font-medium ${T.primary}`}>{eyebrow}</p>
        )}
        <h4 className={`mt-2 text-[17px] font-semibold leading-snug ${T.ink}`}>
          {title}
        </h4>
        <span
          className={`mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold ${T.primary}`}
        >
          Learn More
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </Link>
  );
}

function JobsPortalCard({
  title,
  desc,
  avatars,
  href,
  onClick,
  ctaLabel = "Know More",
}: {
  title: string;
  desc: string;
  avatars: string[];
  href: string;
  onClick?: () => void;
  ctaLabel?: string;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group relative isolate flex min-h-[230px] flex-col justify-between overflow-hidden rounded-2xl p-6 text-white transition-transform duration-300 hover:scale-[1.01]"
      style={{ background: "linear-gradient(135deg, #4F3FF0 0%, #2F6BFF 100%)" }}
    >
      <div>
        <h4 className="text-[22px] font-semibold leading-snug">{title}</h4>
        <p className="mt-3 text-[14px] leading-relaxed text-white/85">{desc}</p>
      </div>

      <div>
        <div className="flex items-center">
          {avatars.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="h-12 w-12 rounded-full border-[2.5px] border-white object-cover shadow-sm"
              style={{ marginLeft: i === 0 ? 0 : -14, zIndex: avatars.length - i }}
            />
          ))}
        </div>
        <span className="mt-5 inline-flex w-fit items-center gap-1.5 text-[13px] font-semibold text-white">
          {ctaLabel}
          <ArrowUpRight size={14} />
        </span>
      </div>
    </Link>
  );
}

function AnimatedInsightCard({
  eyebrow = "Insights Hub",
  title,
  href = "#",
  onClick,
}: {
  eyebrow?: string;
  title: string;
  href?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group relative flex h-full min-h-[330px] flex-col justify-between overflow-hidden rounded-2xl bg-[#0A0B26] p-7 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_18px_34px_rgba(10,14,40,0.35)]"
    >
      <style>{`
        @keyframes ss-ring-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes ss-ring-pulse {
          0%, 100% { opacity: 0.75; }
          50%      { opacity: 1; }
        }
        .ss-nav-ring {
          animation: ss-ring-spin 7s linear infinite, ss-ring-pulse 3.5s ease-in-out infinite;
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className="ss-nav-ring h-[260px] w-[260px] rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, #7C3AED 0deg, #A78BFA 90deg, transparent 180deg, #7C3AED 360deg)",
            WebkitMaskImage:
              "radial-gradient(circle, transparent 60%, black 62%, black 68%, transparent 70%)",
            maskImage:
              "radial-gradient(circle, transparent 60%, black 62%, black 68%, transparent 70%)",
            filter: "blur(1.5px)",
          }}
        />
        <div
          className="absolute h-[260px] w-[260px] rounded-full"
          style={{ boxShadow: "0 0 60px 10px rgba(124,58,237,0.25)" }}
        />
      </div>

      <p className="relative text-[12px] font-medium text-white/70">{eyebrow}</p>

      <div className="relative">
        <h4 className="text-[23px] font-semibold leading-[1.2] text-white">{title}</h4>
        <span className="mt-6 inline-flex w-fit items-center gap-1.5 text-[12px] font-semibold text-white">
          Learn More
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </Link>
  );
}

/* ===============================================================
   SERVICES MEGA MENU
   Desktop: gray canvas (set by the wrapper) + white panel + blue card
   Mobile : simple stacked layout
================================================================ */
function ServicesMenu({ onNavigate }: { onNavigate?: () => void }) {
  const services = [
    { label: "Software & Product Engineering", href: "/services/software-product" },
    { label: "Data & Analytics", href: "/services/data-analytics" },
    { label: "Cloud & DevOps", href: "/services/cloud" },
    { label: "Legacy Modernization", href: "/services/legacy-Modernization" },
    { label: "ITSM & Service Management", href: "/services/itsm-service-management" },
    { label: "Freshservice", href: "/services/freshService" },
    { label: "ITSM & Migration", href: "/services/ITSM-Migration" },
    { label: "Quality Engineering", href: "/services/Quality-Engineering" },
    { label: "ServiceNow", href: "/services/servicenow" },
  ];

  const offerings = [
    { label: "AI Voice Call", href: "/services/offerings/ai-native-contact-center" },
    { label: "AI File Storage", href: "/services/offerings/sustainability-services" },
    { label: "AI Powered Medical Coding", href: "/services/offerings/enterprise-automation" },
    { label: "AI Chatbot & Go AI", href: "/services/offerings/generative-ai" },
    { label: "AI Meeting Assistant", href: "/services/offerings/vibe-coding" },
    { label: "AI Data Extraction", href: "/services/offerings/testing" },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[2.7fr_0.9fr]">
      {/* Left + middle: one white panel with a divider */}
      <div className="grid grid-cols-1 overflow-hidden rounded-2xl bg-white lg:grid-cols-[1.05fr_1.65fr]">
        {/* Services */}
        <div className={`p-8 lg:border-r ${T.border}`}>
          <h3 className={`mb-6 text-[22px] font-normal ${T.primary}`}>Services</h3>
          <div className="space-y-4">
            {services.map((s) => (
              <LinkItem key={s.href} href={s.href} onClick={onNavigate}>
                {s.label}
              </LinkItem>
            ))}
          </div>
        </div>

        {/* Offerings */}
        <div className="p-8">
          <h3 className={`mb-6 text-[22px] font-normal ${T.primary}`}>Offerings</h3>
          <div className="grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
            {offerings.map((o) => (
              <LinkItem key={o.href} href={o.href} onClick={onNavigate}>
                {o.label}
              </LinkItem>
            ))}
          </div>

          {/* Editor's pick */}
          <div className="mt-10 flex min-h-[150px] items-center justify-between gap-6 rounded-2xl bg-[#EEEEF4] px-8 py-8">
            <p className={`max-w-[360px] text-[20px] font-medium leading-[1.4] ${T.ink}`}>
              Editor&apos;s pick: Who owns your AI&apos;s memory?
            </p>
            <Link
              href="#"
              onClick={onNavigate}
              className={`shrink-0 rounded-xl px-8 py-[18px] text-[18px] font-medium text-white transition-colors duration-150 ${T.primaryBg} ${T.primaryHoverBg}`}
            >
              Know More
            </Link>
          </div>
        </div>
      </div>

      {/* Right: gradient publication card */}
      <PublicationCard
        eyebrow="Featured Publication"
        title="Agentic AI, Proven Across 100+ Case Studies"
        blurb="Real results: lower costs, faster delivery, agentic AI at work."
        image={EYE_IMAGE}
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
    {
      name: "Turbodev",
      title: "Turbodev the revenue engine for Shopify brands",
      image:
        "https://turbodev.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshopify_hero.49ab5374.svg&w=1440&q=75",
      fallbackImage: TURBODEV_FALLBACK,
      href: "https://turbodev.ai/",
      newTab: true,
    },
    {
      name: "Turbodesk",
      title: "Turbodesk intelligent service and operations platform",
      image: "https://turbodesk.in/og-image.png",
      fallbackImage: TURBODESK_FALLBACK,
      href: "https://turbodesk.in/",
      newTab: true,
    },
  ];

  return (
    <div>
      <ColumnTitle variant="primary">Products</ColumnTitle>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {platforms.map((p) => (
          <PlatformCard
            key={p.name}
            image={p.image}
            fallbackImage={p.fallbackImage}
            eyebrow=""
            title={p.title}
            href={p.href}
            newTab={p.newTab}
            onClick={onNavigate}
          />
        ))}
        <AnimatedInsightCard
          eyebrow=""
          title="Discover What's Next in Your Sector"
          href="/insights"
          onClick={onNavigate}
        />
      </div>
    </div>
  );
}

/* ===============================================================
   INDUSTRIES
================================================================ */
function IndustriesMenu({ onNavigate }: { onNavigate?: () => void }) {
  const industries = [
    { label: "Banking", href: "/industries/Banking" },
    { label: "Financial Services", href: "/industries/financial-service" },
    { label: "Insurance", href: "/industries/insurencee" },
    { label: "Healthcare & Life Sciences", href: "/industries/health-care" },
    { label: "Manufacturing", href: "/industries/manufacturing" },
    { label: "Retail & Consumer", href: "/industries/retail-consumer" },
    { label: "Education & Institutions", href: "/industries/education-institute" },
    { label: "Professional Services", href: "/industries/professional-service" },
    { label: "Technology, Products & Platforms", href: "/industries/technology-products" },
    { label: "Telecom & Utilities", href: "/industries/telecom-utilties" },
    { label: "Transportation & Logistics", href: "/industries/transport" },
    { label: "Travel & Hospitality", href: "/industries/travel-hospital" },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-12">
      <div>
        <ColumnTitle variant="primary">Industries</ColumnTitle>
        <div className="grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
          {industries.map((i) => (
            <LinkItem key={i.href} href={i.href} onClick={onNavigate}>
              <span className="block leading-snug">{i.label}</span>
            </LinkItem>
          ))}
        </div>
      </div>
      <FeaturedCard
        eyebrow="Featured Insight"
        title="How gen AI makes supply chains decide faster."
        image="https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=1200&auto=format&fit=crop"
        onClick={onNavigate}
      />
    </div>
  );
}
/* ===============================================================
   ABOUT
================================================================ */
function AboutMenu({ onNavigate }: { onNavigate?: () => void }) {
  const aboutCards = [
    {
      eyebrow: "About Starfii",
      title: "AI led software development, from idea to launch",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=90&w=2400&auto=format&fit=crop",
      href: "/About",
    },
    {
      eyebrow: "Case Study",
      title: "A strategic digital transformation built for growth",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=90&w=2400&auto=format&fit=crop",
      href: "/About/Case-study",
    },
    {
      eyebrow: "Blogs",
      title: "Insights and perspectives on modern technology",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=90&w=2400&auto=format&fit=crop",
      fallbackImage: BLOGS_FALLBACK,
      href: "/About/blogs",
    },
  ];

  return (
    <div>
      <ColumnTitle variant="primary">Who We Are</ColumnTitle>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {aboutCards.map((card) => (
          <PlatformCard
            key={card.eyebrow}
            image={card.image}
            fallbackImage={(card as { fallbackImage?: string }).fallbackImage}
            eyebrow={card.eyebrow}
            title={card.title}
            href={card.href}
            onClick={onNavigate}
          />
        ))}
      </div>
    </div>
  );
}
/* ===============================================================
   CAREERS
================================================================ */
// function CareersMenu({ onNavigate }: { onNavigate?: () => void }) {
//   const cards = [
//     {
//       title: "Why Join Starfii?",
//       desc: "Build your career with opportunities to learn, grow, and contribute.",
//       href: "/careers/why-join-starfii",
//     },
//     {
//       title: "Programs & Learning",
//       desc: "Empowering growth through learning and development.",
//       href: "/careers/programs-learning",
//     },
//   ];

//   const jobsPortalAvatars = [
//     "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?q=80&w=200&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
//   ];

//   return (
//     <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
//       {cards.map((card) => (
//         <div key={card.title} className={`rounded-lg border ${T.border} p-6`}>
//           <h4 className={`text-[17px] font-semibold ${T.ink}`}>{card.title}</h4>
//           <p className={`mt-2.5 text-[14px] leading-relaxed ${T.muted}`}>{card.desc}</p>
//           <Link
//             href={card.href}
//             onClick={onNavigate}
//             className={`mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold ${T.primary}`}
//           >
//             Know more
//             <ArrowUpRight size={14} />
//           </Link>
//         </div>
//       ))}

//       <JobsPortalCard
//         title="Jobs Portal"
//         desc="Ready to own your game with Starfii? Look for open positions now!"
//         avatars={jobsPortalAvatars}
//         href="/careers/jobs"
//         onClick={onNavigate}
//         ctaLabel="Know More"
//       />
//     </div>
//   );
// }
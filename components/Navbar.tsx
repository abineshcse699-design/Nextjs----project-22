"use client";

import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  Search,
  Sparkles,
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

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ---------------- Close timer helpers ---------------- */

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

  /* ---------------- Scroll detection ---------------- */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearCloseTimer();
    };
  }, []);

  return (
    <>
      {/* =========================================================
          FIXED / STICKY NAVBAR
          This component must be rendered as a direct child of
          <body> in app/layout.tsx (as a sibling of {children}) —
          NOT nested inside Hero or any other section. Sections use
          `isolate` to contain their own scroll-in animations, and
          if Navbar were rendered inside one of those sections, its
          z-index would be trapped inside that section's stacking
          context and a later section could paint above it.
      ========================================================= */}
      <header
        onMouseLeave={scheduleClose}
        className="fixed inset-x-0 top-0 z-[2147483647] isolate block"
      >
        {/* This layer ALWAYS stays visible */}
        <div
          className={`
            relative z-[99999] w-full bg-white
            transition-shadow duration-300
            ${isScrolled ? "shadow-[0_4px_20px_rgba(15,23,42,0.08)]" : ""}
          `}
        >
          <nav
            className={`
              relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8
              transition-[padding] duration-300
              ${isScrolled ? "py-2" : "py-4"}
            `}
          >
            <div
              className={`
                relative
                z-[99999]
                flex
                min-h-[58px]
                items-center
                justify-between
                rounded-2xl
                bg-white
                px-6
                py-3.5
                shadow-[0_12px_40px_rgba(15,23,42,0.14)]
                transition-shadow
                duration-300
                lg:px-8
                ${isScrolled ? "shadow-[0_8px_28px_rgba(15,23,42,0.18)]" : ""}
              `}
            >
              {/* Logo */}
              <div className="flex items-center gap-8 lg:gap-10">
                <span
                  className="
                    -skew-x-[8deg]
                    whitespace-nowrap
                    text-[23px]
                    font-black
                    italic
                    tracking-tight
                    text-[#3B2FE0]
                    lg:text-[25px]
                  "
                >
                  STARFII
                </span>

                {/* Navigation */}
                <ul className="hidden items-center gap-6 lg:flex xl:gap-7">
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
                            group
                            flex
                            items-center
                            gap-1.5
                            whitespace-nowrap
                            text-[15px]
                            font-medium
                            transition-colors
                            duration-200
                            ${
                              isActive
                                ? "text-[#3B2FE0]"
                                : "text-slate-800 hover:text-[#3B2FE0]"
                            }
                          `}
                        >
                          {item}

                          <ChevronDown
                            size={16}
                            strokeWidth={2}
                            className={`
                              transition-transform duration-200
                              ${
                                isActive
                                  ? "rotate-180 text-[#3B2FE0]"
                                  : "text-slate-500 group-hover:text-[#3B2FE0]"
                              }
                            `}
                          />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Right side */}
              <div className="flex items-center gap-5 lg:gap-6">
                <button
                  type="button"
                  aria-label="AI search"
                  className="relative hidden text-slate-700 sm:block"
                >
                  <Search size={19} strokeWidth={2} />

                  <Sparkles
                    size={9}
                    className="absolute -right-1 -top-1 text-[#3B2FE0]"
                    fill="#3B2FE0"
                  />
                </button>

                <button
                  type="button"
                  className="
                    hidden
                    whitespace-nowrap
                    text-[15px]
                    font-medium
                    text-slate-800
                    sm:block
                  "
                >
                  Investor
                </button>

                <button
                  type="button"
                  aria-label="Chat with us"
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#3B2FE0]
                    text-white
                  "
                >
                  <MessageSquare size={18} strokeWidth={2} />
                </button>
              </div>
            </div>

            {/* Mega menu */}
            {activeMenu && (
              <div
                onMouseEnter={clearCloseTimer}
                onMouseLeave={scheduleClose}
                className="
                  absolute
                  left-4
                  right-4
                  top-full
                  z-[99998]
                  mt-2
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-100
                  bg-white
                  p-8
                  shadow-[0_20px_60px_rgba(15,23,42,0.18)]
                  lg:left-8
                  lg:right-8
                "
              >
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
            )}
          </nav>
        </div>
      </header>

      {/* =========================================================
          NAVBAR SPACER
          Prevents fixed navbar from covering the first section.
          Height matches the navbar's *tallest* state (py-4, un-scrolled)
          so there's never a gap or overlap as isScrolled toggles.
      ========================================================= */}
      <div className="h-[82px] sm:h-[96px]" aria-hidden="true" />
    </>
  );
}

/* ===============================================================
   SERVICES
   NOTE: "services" is now a list of {label, href} objects instead
   of plain strings, so each service can route to its own page.
   Only "Digital & Software" has a real destination right now
   (/services/digital-software) — give me the rest of your real
   route slugs and I'll wire them up the same way.
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
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr_0.9fr]">
      {/* Services */}
      <div>
        <h3 className="mb-4 text-[19px] font-semibold text-[#3B2FE0]">
          Services
        </h3>

        <ul className="space-y-3">
          {services.map((service) => (
            <li key={service.label}>
              <a
                href={service.href}
                className="text-[15px] text-slate-700 transition-colors hover:text-[#3B2FE0]"
              >
                {service.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Offerings */}
      <div>
        <h3 className="mb-4 text-[19px] font-semibold text-[#3B2FE0]">
          Offerings
        </h3>

        <div className="grid grid-cols-2 gap-x-8">
          <ul className="space-y-3">
            {offeringsLeft.map((offering) => (
              <li key={offering}>
                <a
                  href="#"
                  className="text-[15px] text-slate-700 transition-colors hover:text-[#3B2FE0]"
                >
                  {offering}
                </a>
              </li>
            ))}
          </ul>

          <ul className="space-y-3">
            {offeringsRight.map((offering) => (
              <li key={offering}>
                <a
                  href="#"
                  className="text-[15px] text-slate-700 transition-colors hover:text-[#3B2FE0]"
                >
                  {offering}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Editor's pick */}
        <div className="mt-6 flex items-center justify-between gap-4 rounded-xl bg-slate-100 p-5">
          <p className="text-[15px] font-medium text-slate-800">
            Editor&apos;s pick: Who owns your AI&apos;s memory?
          </p>

          <button
            type="button"
            className="shrink-0 rounded-lg bg-[#3B2FE0] px-5 py-2.5 text-[14px] font-medium text-white transition-transform hover:scale-105"
          >
            Know More
          </button>
        </div>
      </div>

      {/* Featured */}
      <div className="overflow-hidden rounded-xl bg-gradient-to-br from-[#3B2FE0] to-[#4A6CF7] p-6 text-white">
        <p className="text-[13px] font-medium text-white/80">
          Featured Publication
        </p>

        <h4 className="mt-2 text-[20px] font-semibold leading-snug">
          Agentic AI, Proven Across 100+ Case Studies
        </h4>

        <div className="mt-4 aspect-[16/10] overflow-hidden rounded-lg bg-black/20" />

        <p className="mt-4 text-[14px] leading-relaxed text-white/85">
          Real results: lower costs, faster delivery, agentic AI at work.
        </p>

        <a
          href="#"
          className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-medium text-white"
        >
          Know More
          <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
}

/* ===============================================================
   PLATFORMS
================================================================ */

function PlatformsMenu() {
  const platforms = [
    {
      name: "RapidX®",
      desc: "Create direct, tailored paths for your teams to develop against any need",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Tensai®",
      desc: "Automate your essential processes to increase quality and efficiency",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Amaze®",
      desc: "Speed up and steady your product, platform, process, and data journey to the cloud",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Agentverse™",
      desc: "Use intelligent agents to streamline operations, accelerate decisions, and improve outcomes",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {platforms.map((platform) => (
          <div key={platform.name}>
            <div className="aspect-[16/10] overflow-hidden rounded-xl bg-slate-200">
              <img
                src={platform.image}
                alt={platform.name}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <h4 className="mt-4 text-[19px] font-semibold text-slate-900">
              {platform.name}
            </h4>

            <p className="mt-2 text-[14px] leading-relaxed text-slate-600">
              {platform.desc}
            </p>

            <a
              href="#"
              className="mt-3 inline-flex items-center gap-1.5 text-[14px] font-medium text-[#3B2FE0]"
            >
              Learn More
              <ArrowUpRight size={15} />
            </a>
          </div>
        ))}
      </div>

      {/* Zerovity */}
      <div className="mt-8 flex flex-col gap-4 rounded-2xl bg-[#0B1130] p-6 text-white sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 shrink-0 rounded-full bg-gradient-to-br from-[#3B2FE0] to-[#8B5CF6]" />

          <div>
            <h4 className="text-[20px] font-semibold">Zerovity™</h4>
          </div>
        </div>

        <p className="max-w-xl text-[14px] leading-relaxed text-white/80">
          Zerovity™ captures how your applications actually work, then
          applies that understanding across maintenance, modernization,
          and transformation. Explore the platform behind Starfii&apos;s
          Zero Friction Enterprise™.
        </p>

        <a
          href="#"
          className="inline-flex shrink-0 items-center gap-1.5 text-[15px] font-medium text-white"
        >
          Learn More
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
    "Banking",
    "Consumer Goods",
    "Education & Institutions",
    "Energy & Utilities",
    "Financial Services",
    "Healthcare",
    "Insurance",
    "Life Sciences",
    "Manufacturing",
  ];

  const industriesRight = [
    "Private Equity",
    "Professional Services",
    "Public Sector",
    "Retail",
    "Technology, Products & Platforms",
    "Telecom",
    "Transportation & Logistics",
    "Travel & Hospitality",
  ];

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.6fr_1fr]">
      <div>
        <h3 className="mb-4 text-[19px] font-semibold text-[#3B2FE0]">
          Industries
        </h3>

        <div className="grid grid-cols-2 gap-x-10">
          <ul className="space-y-3">
            {industriesLeft.map((industry) => (
              <li key={industry}>
                <a
                  href="#"
                  className="text-[15px] text-slate-700 transition-colors hover:text-[#3B2FE0]"
                >
                  {industry}
                </a>
              </li>
            ))}
          </ul>

          <ul className="space-y-3">
            {industriesRight.map((industry) => (
              <li key={industry}>
                <a
                  href="#"
                  className="text-[15px] text-slate-700 transition-colors hover:text-[#3B2FE0]"
                >
                  {industry}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl bg-gradient-to-br from-[#0B1E4D] to-[#123A8F] p-6 text-white">
        <p className="text-[13px] font-medium text-white/80">
          Featured insight
        </p>

        <h4 className="mt-2 text-[22px] font-semibold leading-snug">
          How gen AI makes supply chains decide faster.
        </h4>

        <div className="mt-4 aspect-[16/10] overflow-hidden rounded-lg bg-black/20" />

        <a
          href="#"
          className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-medium text-white"
        >
          Learn More
          <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
}

/* ===============================================================
   SERVICE NOW
================================================================ */

function ServiceNowMenu() {
  const capabilitiesLeft = [
    "IT Service Management (ITSM)",
    "IT Operations Management (ITOM)",
    "Customer Service Management (CSM)",
  ];

  const capabilitiesRight = [
    "HR Service Delivery (HRSD)",
    "Source-to-Pay Operations",
    "App Engine Studio",
  ];

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.6fr_1fr]">
      <div>
        <h3 className="mb-4 text-[19px] font-semibold text-[#3B2FE0]">
          Service Now
        </h3>

        <p className="mb-6 max-w-lg text-[15px] leading-relaxed text-slate-600">
          As a certified ServiceNow implementation partner, we help
          enterprises design, build, and run ServiceNow workflows that
          connect IT, customer service, and HR operations on a single
          platform.
        </p>

        <div className="grid grid-cols-2 gap-x-10">
          <ul className="space-y-3">
            {capabilitiesLeft.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-[15px] text-slate-700 transition-colors hover:text-[#3B2FE0]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <ul className="space-y-3">
            {capabilitiesRight.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-[15px] text-slate-700 transition-colors hover:text-[#3B2FE0]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl bg-gradient-to-br from-[#3B2FE0] to-[#4A6CF7] p-6 text-white">
        <p className="text-[13px] font-medium text-white/80">
          Featured Insight
        </p>

        <h4 className="mt-2 text-[20px] font-semibold leading-snug">
          How Starfii and ServiceNow FSO Are Reimagining Insurance
          Servicing
        </h4>

        <div className="mt-4 aspect-[16/10] overflow-hidden rounded-lg bg-black/20" />

        <a
          href="#"
          className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-medium text-white"
        >
          Learn More
          <ArrowUpRight size={16} />
        </a>
      </div>
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
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr]">
      <div>
        <h3 className="text-[20px] font-semibold text-[#3B2FE0]">
          The Zero Friction Enterprise™
        </h3>

        <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
          Close the gaps that slow change with AI-led delivery designed
          to help enterprises move with greater speed, control, and scale.
        </p>

        <a
          href="#"
          className="mt-3 inline-flex items-center gap-1.5 text-[15px] font-medium text-[#3B2FE0]"
        >
          Learn More
          <ArrowUpRight size={15} />
        </a>

        <hr className="my-6 border-slate-200" />

        <p className="mb-4 text-[15px] font-medium text-slate-800">
          The levers that make Zero Friction possible:
        </p>

        <div className="grid grid-cols-2 gap-x-10">
          <ul className="space-y-3">
            {leversLeft.map((lever) => (
              <li key={lever} className="text-[15px] text-slate-700">
                {lever}
              </li>
            ))}
          </ul>

          <ul className="space-y-3">
            {leversRight.map((lever) => (
              <li key={lever} className="text-[15px] text-slate-700">
                {lever}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-gradient-to-br from-[#0B1130] to-[#0F1F4D]">
        <button
          type="button"
          aria-label="Play video"
          className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white transition-transform hover:scale-105"
        >
          <Play size={24} className="ml-1 text-[#3B2FE0]" fill="#3B2FE0" />
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
    {
      label: "Featured Insight",
      title:
        "What's Changed in Microsoft Fabric for Responsible AI at Scale",
      gradient: "from-[#0B63F6] via-[#3B82F6] to-[#22C55E]",
    },
    {
      label: "Featured Insight",
      title:
        "How Starfii and ServiceNow FSO Are Reimagining Insurance Servicing",
      gradient: "from-[#334155] via-[#475569] to-[#64748B]",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {/* Insights Hub */}
      <div className="flex flex-col justify-between overflow-hidden rounded-xl bg-[#0B0F2E] p-8 text-white">
        <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border border-[#3B82F6]/40">
          <div className="h-28 w-28 rounded-full border-2 border-[#3B82F6] shadow-[0_0_40px_rgba(59,130,246,0.6)]" />
        </div>

        <div className="mt-6 text-center">
          <p className="text-[13px] text-white/70">Insights Hub</p>

          <h4 className="mt-2 text-[26px] font-semibold leading-tight">
            Discover What&apos;s Next in Your Sector
          </h4>

          <a
            href="#"
            className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-medium text-white"
          >
            Learn More
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      {/* Articles */}
      {articles.map((article) => (
        <div key={article.title} className="overflow-hidden rounded-xl">
          <div
            className={`aspect-[16/10] w-full bg-gradient-to-br ${article.gradient}`}
          />

          <div className="pt-4">
            <p className="text-[14px] font-medium text-[#3B2FE0]">
              {article.label}
            </p>

            <h4 className="mt-2 text-[19px] font-semibold leading-snug text-slate-900">
              {article.title}
            </h4>

            <a
              href="#"
              className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-medium text-[#3B2FE0]"
            >
              Learn More
              <ArrowUpRight size={16} />
            </a>
          </div>
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

  const purposeImpact = [
    "Diversity, Equity & Inclusion",
    "Environmental, Social & Governance",
    "Corporate Social Responsibility",
  ];

  const updates = ["Newsroom", "Events", "Awards & Recognitions"];

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr_1fr_0.8fr]">
      {/* Who We Are */}
      <div>
        <h3 className="mb-4 text-[19px] font-semibold text-[#3B2FE0]">
          Who We Are
        </h3>

        <ul className="space-y-3">
          {whoWeAre.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-[15px] text-slate-700 transition-colors hover:text-[#3B2FE0]"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Purpose & Impact */}
      <div>
        <h3 className="mb-4 text-[19px] font-semibold text-[#3B2FE0]">
          Purpose & Impact
        </h3>

        <ul className="space-y-3">
          {purposeImpact.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-[15px] text-slate-700 transition-colors hover:text-[#3B2FE0]"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Updates */}
      <div>
        <h3 className="mb-4 text-[19px] font-semibold text-[#3B2FE0]">
          Updates & Highlights
        </h3>

        <ul className="space-y-3">
          {updates.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-[15px] text-slate-700 transition-colors hover:text-[#3B2FE0]"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Annual Report */}
      <div className="relative overflow-hidden rounded-xl bg-slate-800">
        <div className="flex aspect-[3/4] flex-col justify-between p-4">
          <div>
            <p className="text-[13px] font-black italic tracking-tight text-white">
              STARFII
            </p>

            <p className="mt-8 text-[15px] font-medium leading-snug text-white">
              Artificial Intelligence Led
              <br />
              <span className="text-[#7FB7FF]">Human Intelligence</span>
              <br />
              Perfected
            </p>
          </div>
        </div>

        <div className="absolute -bottom-4 -right-4 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-[#3B2FE0] text-center text-[13px] font-semibold leading-tight text-white shadow-lg">
          Annual
          <br />
          Report
          <br />
          2025
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
    {
      title: "Why Join Starfii?",
      desc: "Build your career with opportunities to learn, grow, and contribute.",
    },
    {
      title: "Programs & Learning",
      desc: "Empowering Growth Through Learning and Development",
    },
  ];

  const avatarColors = [
    "from-pink-400 to-rose-500",
    "from-amber-400 to-orange-500",
    "from-slate-400 to-slate-600",
    "from-indigo-400 to-blue-500",
    "from-teal-400 to-emerald-500",
  ];

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {/* Career cards */}
      {cards.map((card) => (
        <div key={card.title} className="rounded-xl bg-slate-50 p-6">
          <h4 className="text-[20px] font-semibold text-[#3B2FE0]">
            {card.title}
          </h4>

          <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
            {card.desc}
          </p>

          <a
            href="#"
            className="mt-8 inline-flex items-center gap-1.5 text-[15px] font-medium text-[#3B2FE0]"
          >
            Know More
            <ArrowUpRight size={16} />
          </a>
        </div>
      ))}

      {/* Jobs Portal */}
      <div className="rounded-xl bg-gradient-to-br from-[#3B2FE0] to-[#4A6CF7] p-6 text-white">
        <h4 className="text-[20px] font-semibold">Jobs Portal</h4>

        <p className="mt-3 text-[15px] leading-relaxed text-white/90">
          Ready to own your game with Starfii? Look for open positions
          now!
        </p>

        <div className="mt-6 flex -space-x-3">
          {avatarColors.map((gradient, index) => (
            <div
              key={index}
              className={`h-10 w-10 rounded-full border-2 border-white bg-gradient-to-br ${gradient}`}
            />
          ))}
        </div>

        <a
          href="#"
          className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-medium text-white"
        >
          Know More
          <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
}
"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  ChevronRight,
  ChevronLeft,
  Sparkles,
  ArrowUpRight,
  Plus,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { caseStudies as sharedCaseStudies } from "@/app/services/software-product/casestudies/data/case-studies";

const CHAMPION_BLUE = "#1B2560";
const LAVENDER_ACCENT = "#A48FEA";

// Colors for the two dark, full-bleed sections (capability cards + impact
// accordion) so they read as a distinct "showcase" register against the
// light sections, matching the Data & Analytics reference page.
const DARK_BG = "#0A0A18";
const DARK_CARD = "rgba(255,255,255,0.04)";
const DARK_BORDER = "rgba(255,255,255,0.09)";
const ACCENT_INDIGO = "#6C5DD3";

// Shared page width wrapper, kept in sync with the navbar's own
// max width/padding so every section lines up with it exactly.
const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

// Autoplay timing for the "Software & Product Engineering Services" tab list
const TAB_AUTOPLAY_MS = 4000;

// --- Shared animation variants ---
// heroContainer / heroItem: play once on page load (hero only)
// container / item: play once, triggered on scroll into view (rest of page)
const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.4,
    },
  },
};

const heroItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

// Each capability carries short tags, shown as pills on the dark numbered
// cards, mirroring the "Our Data & Analytics Capabilities" pill style.
// Titles map to the recommended sections: Product Strategy, UI/UX
// Engineering, Web App Development, Mobile App Development, Backend
// Engineering, API & Integrations, SaaS Engineering, Enterprise Application
// Development, Product Modernization, QA & Release Engineering.
const focusAreas = [
  {
    title: "Product Strategy",
    body: "Starfii shapes product direction before a line of code is written, aligning roadmap, scope, and success metrics so engineering effort lands on what the business actually needs.",
    tags: ["ROADMAPPING", "DISCOVERY", "MVP SCOPING"],
  },
  {
    title: "UI/UX Engineering",
    body: "Our designers and front end engineers build interfaces people can use without thinking about them, grounded in research and validated with real users before launch.",
    tags: ["UX RESEARCH", "PROTOTYPING", "DESIGN SYSTEMS"],
  },
  {
    title: "Web Application Development",
    body: "Starfii engineers fast, accessible web applications on modern frameworks, built to hold up under real traffic instead of just demo conditions.",
    tags: ["REACT", "NEXT.JS", "PERFORMANCE"],
  },
  {
    title: "Mobile Application Development",
    body: "We build native and cross platform mobile apps that feel at home on each device, from first release through the updates that keep users coming back.",
    tags: ["iOS", "ANDROID", "REACT NATIVE"],
  },
  {
    title: "Backend Engineering",
    body: "Starfii designs backend systems and services that stay reliable as usage grows, so a spike in traffic is a scaling event, not an incident.",
    tags: ["MICROSERVICES", "APIs", "SCALABILITY"],
  },
  {
    title: "API & Integrations",
    body: "We design and build APIs and third party integrations that connect your product to the systems your business already depends on, cleanly and securely.",
    tags: ["REST", "GRAPHQL", "WEBHOOKS"],
  },
  {
    title: "SaaS Engineering",
    body: "Starfii builds multi tenant SaaS platforms from the ground up, with the billing, onboarding, and account architecture a growing subscription business needs.",
    tags: ["MULTI-TENANCY", "BILLING", "ONBOARDING"],
  },
  {
    title: "Enterprise Application Development",
    body: "We build internal and customer facing enterprise applications that meet real compliance and integration requirements without slowing teams down.",
    tags: ["ENTERPRISE", "SECURITY", "INTEGRATION"],
  },
  {
    title: "Product Modernization",
    body: "Starfii re-architects aging products onto current frameworks and infrastructure, closing the gap between legacy systems and what the business needs today.",
    tags: ["MODERNIZATION", "RE-ARCHITECTURE", "MIGRATION"],
  },
  {
    title: "QA & Release Engineering",
    body: "Our QA and release engineers build automated testing and deployment pipelines so every release ships with confidence instead of a war room on standby.",
    tags: ["TEST AUTOMATION", "CI/CD", "RELEASE MGMT"],
  },
];

const tabs = [
  {
    label: "Strategy: Set the Product Direction",
    heading: "A product roadmap grounded in real user and business signals",
    body: "Starfii runs discovery, defines scope, and sets success metrics before engineering starts, so the team builds toward outcomes instead of a feature list.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Design: Build Interfaces People Trust",
    heading: "UI/UX that holds up once real users get their hands on it",
    body: "Our designers prototype, test, and refine interfaces with actual users, so what ships in production matches what worked in the research.",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Web: Engineer for Real Traffic",
    heading: "Web applications built to perform under production load",
    body: "Starfii engineers web applications that stay fast and accessible as usage grows, tested against real traffic conditions, not just demo data.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Mobile: Ship on Every Platform",
    heading: "Mobile apps that feel native, whichever platform users are on",
    body: "We build iOS, Android, and cross platform apps that respect each platform's own conventions, so the app feels native, not ported.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Backend: Architect for Scale",
    heading: "Backend systems sized for the load you will have next year",
    body: "Starfii designs services and data layers that scale with demand, so a traffic spike is a scaling event handled automatically, not a fire drill.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Integrations: Connect What You Already Run",
    heading: "APIs and integrations that connect cleanly to your existing stack",
    body: "We design APIs and integrations that plug your product into the systems your business already depends on, without brittle one-off connectors.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "SaaS: Build for Subscription Growth",
    heading: "Multi tenant SaaS architecture built for how subscriptions actually grow",
    body: "Starfii builds the account, billing, and onboarding architecture a growing SaaS business needs, so scaling customers does not mean re-platforming.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Modernize Legacy Products",
    heading: "A clear path off aging codebases and brittle infrastructure",
    body: "We assess your existing product, build a modernization roadmap, and re-architect onto current frameworks with minimal disruption to users.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
  },
];

// Closing "Impact" accordion — the last dark section on the page. Each row
// expands in place to show what that impact area actually covers.
const impactAreas = [
  {
    title: "Ship Products Users Actually Adopt",
    body: "Ground every release in real user research and validated design, so what ships gets used instead of ignored.",
  },
  {
    title: "Engineer for Scale From Day One",
    body: "Build web, mobile, and backend systems that hold up under production load, not just demo conditions.",
  },
  {
    title: "Connect to the Systems You Run",
    body: "Design APIs and integrations that plug cleanly into your existing stack, without brittle one-off connectors.",
  },
  {
    title: "Build SaaS That Grows With You",
    body: "Put multi tenant architecture, billing, and onboarding in place so scaling customers does not mean re-platforming.",
  },
  {
    title: "Modernize Without Disrupting Users",
    body: "Move legacy products onto current frameworks and infrastructure with a clear roadmap and minimal downtime.",
  },
  {
    title: "Release With Confidence, Not a War Room",
    body: "Automate testing and deployment pipelines so every release ships predictably, with rollback ready if it doesn't.",
  },
];

// What's New — insight/blog teasers, shown three at a time with a
// progress bar and arrow pagination, matching the reference layout.
type Insight = {
  slug: string;
  title: string;
  body: string;
  image: string;
};

const insights: Insight[] = [
  {
    slug: "product-strategy-before-the-first-sprint",
    title: "Product Strategy Before the First Sprint",
    body: "Why the roadmap and success metrics need to be settled before engineering starts, not discovered halfway through the build.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "designing-interfaces-that-survive-contact-with-users",
    title: "Designing Interfaces That Survive Contact With Users",
    body: "How prototyping and usability testing close the gap between what looks good in a design file and what works in production.",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "scaling-backend-systems-before-you-need-to",
    title: "Scaling Backend Systems Before You Need To",
    body: "A look at the architecture decisions that make a traffic spike a non-event instead of an incident.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "multi-tenant-saas-architecture-getting-it-right-early",
    title: "Multi Tenant SaaS Architecture: Getting It Right Early",
    body: "Why account, billing, and tenancy decisions made at the start are expensive to unwind later, and how to make them well.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "legacy-product-to-modern-stack-a-migration-playbook",
    title: "Legacy Product to Modern Stack: A Migration Playbook",
    body: "Starfii's phased approach to re-architecting aging products without breaking the experience users already rely on.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "shipping-with-confidence-ci-cd-that-teams-trust",
    title: "Shipping With Confidence: CI/CD That Teams Trust",
    body: "How automated testing and release pipelines turn deployment from a risky event into a routine one.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
  },
];

// Use Cases — concrete, industry-grounded examples of the capabilities
// above in action. Sits above Case Studies as a lighter, scannable list
// before the full narrative case studies.
type UseCase = {
  industry: string;
  title: string;
  body: string;
};

const useCases: UseCase[] = [
  {
    industry: "Retail & E-Commerce",
    title: "Headless Storefront Rebuild",
    body: "Re-architect an aging storefront onto a headless, API driven stack so merchandising teams ship new experiences without waiting on a platform release.",
  },
  {
    industry: "Financial Services",
    title: "Customer Onboarding Portal",
    body: "Build a secure web and mobile onboarding flow that integrates with identity verification and core banking APIs, cutting account setup from days to minutes.",
  },
  {
    industry: "Healthcare",
    title: "Patient Scheduling Application",
    body: "Engineer a HIPAA-aware scheduling application across web and mobile so patients and staff both work from the same real time availability.",
  },
  {
    industry: "Logistics",
    title: "Real Time Fleet Tracking",
    body: "Build a backend and mobile app that streams live fleet telemetry to dispatchers, so delays get caught before they cascade.",
  },
  {
    industry: "B2B SaaS",
    title: "Multi Tenant Platform Launch",
    body: "Design the account, billing, and permissioning architecture for a new SaaS product from its first enterprise customer onward.",
  },
  {
    industry: "Manufacturing",
    title: "Legacy ERP Modernization",
    body: "Re-platform a legacy ERP front end onto a modern stack with minimal disruption to the shop floor workflows built around it.",
  },
];

type StepCarouselProps<T> = {
  items: T[];
  itemsPerPage: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  renderItem: (item: T, index: number) => ReactNode;
  dark?: boolean;
};

function StepCarousel<T>({
  items,
  itemsPerPage,
  renderItem,
  dark = false,
}: StepCarouselProps<T>) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [perPage, setPerPage] = useState(itemsPerPage.desktop);
  const [position, setPosition] = useState(0);
  const [stepWidth, setStepWidth] = useState(0);

  const updatePerPage = useCallback(() => {
    if (window.innerWidth <= 639) {
      setPerPage(itemsPerPage.mobile);
    } else if (window.innerWidth <= 1023) {
      setPerPage(itemsPerPage.tablet);
    } else {
      setPerPage(itemsPerPage.desktop);
    }
  }, [itemsPerPage]);

  const measure = useCallback(() => {
    const track = trackRef.current;
    const firstCard = track?.firstElementChild as HTMLElement | null;
    if (!firstCard) return;
    setStepWidth(firstCard.getBoundingClientRect().width + 24);
  }, []);

  useEffect(() => {
    updatePerPage();
    measure();

    window.addEventListener("resize", updatePerPage);
    window.addEventListener("resize", measure);

    return () => {
      window.removeEventListener("resize", updatePerPage);
      window.removeEventListener("resize", measure);
    };
  }, [updatePerPage, measure]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(track);

    const firstCard = track.firstElementChild as HTMLElement | null;
    if (firstCard) resizeObserver.observe(firstCard);

    return () => resizeObserver.disconnect();
  }, [measure, perPage]);

  const maxPosition = Math.max(0, items.length - perPage);
  const totalPositions = Math.max(1, maxPosition + 1);

  useEffect(() => {
    setPosition((currentPosition) =>
      Math.min(currentPosition, maxPosition)
    );
  }, [maxPosition]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !stepWidth) return;

    track.scrollTo({
      left: position * stepWidth,
      behavior: "smooth",
    });
  }, [position, stepWidth]);

  const progress = ((position + 1) / totalPositions) * 100;

  return (
    <div>
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollBehavior: "smooth" }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="min-w-0 flex-shrink-0 snap-start"
            style={{
              width:
                perPage === 1
                  ? "100%"
                  : `calc((100% - ${(perPage - 1) * 24}px) / ${perPage})`,
            }}
          >
            {renderItem(item, index)}
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-6">
        <div
          className="h-[2px] flex-1 overflow-hidden rounded-full"
          style={{
            backgroundColor: dark ? "rgba(255,255,255,0.15)" : "#CBD5E1",
          }}
        >
          <div
            className="h-full transition-[width] duration-500 ease-out"
            style={{
              width: `${progress}%`,
              backgroundColor: ACCENT_INDIGO,
            }}
          />
        </div>

        <span
          className="font-body flex-none text-[14px] tabular-nums"
          style={{
            color: dark ? "rgba(255,255,255,0.55)" : "#94A3B8",
          }}
        >
          {String(position + 1).padStart(2, "0")} /{" "}
          {String(totalPositions).padStart(2, "0")}
        </span>

        <div className="flex flex-none items-center gap-3">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => setPosition((p) => Math.max(0, p - 1))}
            disabled={position === 0}
            className="flex h-11 w-11 items-center justify-center rounded-full transition-all duration-200 hover:scale-105 disabled:opacity-40 disabled:hover:scale-100"
            style={{
              backgroundColor: dark ? "rgba(255,255,255,0.10)" : "#E5E1F5",
              color: dark ? "#fff" : CHAMPION_BLUE,
            }}
          >
            <ChevronLeft size={18} />
          </button>

          <button
            type="button"
            aria-label="Next"
            onClick={() =>
              setPosition((p) => Math.min(maxPosition, p + 1))
            }
            disabled={position === maxPosition}
            className="flex h-11 w-11 items-center justify-center rounded-full text-white transition-all duration-200 hover:scale-105 disabled:opacity-40 disabled:hover:scale-100"
            style={{ backgroundColor: ACCENT_INDIGO }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function SoftwareProductEngineeringSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [tabHovered, setTabHovered] = useState(false);
  const [openImpact, setOpenImpact] = useState<number | null>(null);
  const [insightPage, setInsightPage] = useState(0);
  const current = tabs[activeTab];

  // Insights carousel: 3 cards per page
  const INSIGHTS_PER_PAGE = 3;
  const insightPages = Math.ceil(insights.length / INSIGHTS_PER_PAGE);
  const visibleInsights = insights.slice(
    insightPage * INSIGHTS_PER_PAGE,
    insightPage * INSIGHTS_PER_PAGE + INSIGHTS_PER_PAGE
  );

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
    // pt-[92px] / lg:pt-[100px] added below to offset the fixed Navbar
    // (16px outer top gap + 76px navbar height on mobile = 92px;
    // 16px + 84px navbar height on lg = 100px), so the hero/breadcrumb
    // no longer sits underneath the fixed navbar.
    <main className="bg-white pt-[92px] lg:pt-[100px]">
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

      {/* ============================================================
          HERO — animates once, right after page load
          Section 28: Product engineering overview
      ============================================================ */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <motion.img
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1800&auto=format&fit=crop"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40" />
        </div>

        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className={`${ALIGN} py-24 lg:py-32`}
        >
          <motion.nav
            variants={heroItem}
            aria-label="Breadcrumb"
            className="font-body flex items-center gap-2 text-[14px] font-medium"
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
            <span className="text-slate-500">Software & Product Engineering</span>
          </motion.nav>

          <motion.h1
            variants={heroItem}
            className="font-heading mt-8 max-w-xl text-[44px] font-medium leading-[1.15] lg:text-[54px]"
            style={{ color: CHAMPION_BLUE }}
          >
            Software & Product Engineering From Concept to Production
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="font-body mt-6 max-w-lg text-[17px] leading-relaxed text-slate-600"
          >
            Starfii designs, develops, and scales secure digital products,
            applications, and platforms, taking teams from an early
            concept to a production system real users and customers
            depend on.
          </motion.p>

          <motion.a
            variants={heroItem}
            href="#connect"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="font-body mt-9 inline-flex items-center gap-2 rounded-full px-7 py-4 text-[15px] font-semibold text-white"
            style={{ backgroundColor: CHAMPION_BLUE }}
          >
            Connect Now
            <ArrowUpRight size={17} />
          </motion.a>
        </motion.div>
      </section>

      <div className={ALIGN}>
        {/* ============================================================
            WHY SOFTWARE & PRODUCT ENGINEERING MATTERS
        ============================================================ */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-16"
        >
          <div
            className="overflow-hidden rounded-[22px] border bg-white"
            style={{ borderColor: LAVENDER_ACCENT }}
          >
            {/* Header */}
            <div
              className="flex min-h-[104px] items-center justify-between px-8 py-6 lg:px-10"
              style={{
                borderBottom: `1px solid ${LAVENDER_ACCENT}`,
              }}
            >
              <div className="flex items-center gap-3">
                <Sparkles
                  size={21}
                  strokeWidth={1.8}
                  style={{ color: LAVENDER_ACCENT }}
                />

                <span
                  className="font-body text-[17px] font-semibold"
                  style={{ color: CHAMPION_BLUE }}
                >
                  Why Software & Product Engineering Matters
                </span>
              </div>

              <span
                className="font-body rounded-full px-5 py-2.5 text-[13px] font-semibold"
                style={{
                  backgroundColor: "#F1EEFC",
                  color: ACCENT_INDIGO,
                }}
              >
                Built to Scale
              </span>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 gap-10 px-8 py-10 md:grid-cols-3 lg:px-10">
              <div>
                <h3
                  className="font-heading text-[23px] font-semibold"
                  style={{ color: CHAMPION_BLUE }}
                >
                  Design
                </h3>

                <p className="font-body mt-4 text-[15px] leading-[1.8] text-slate-600">
                  Ground every product decision in real user research and
                  validated design, so what ships gets adopted instead of
                  ignored.
                </p>
              </div>

              <div>
                <h3
                  className="font-heading text-[23px] font-semibold"
                  style={{ color: CHAMPION_BLUE }}
                >
                  Build
                </h3>

                <p className="font-body mt-4 text-[15px] leading-[1.8] text-slate-600">
                  Engineer web, mobile, and backend systems that hold up
                  under real usage, not just demo conditions, from the
                  first sprint onward.
                </p>
              </div>

              <div>
                <h3
                  className="font-heading text-[23px] font-semibold"
                  style={{ color: CHAMPION_BLUE }}
                >
                  Scale
                </h3>

                <p className="font-body mt-4 text-[15px] leading-[1.8] text-slate-600">
                  Modernize legacy products and harden release pipelines
                  so growth means more customers, not more incidents.
                </p>
              </div>
            </div>
          </div>

          {/* Supporting paragraph */}
          <p
            className="font-heading mt-10 max-w-3xl text-[26px] leading-snug lg:text-[30px]"
            style={{ color: CHAMPION_BLUE }}
          >
            A trusted product engineering partner, Starfii takes digital
            products from concept to production, and keeps them reliable
            as usage, teams, and scope all grow.
          </p>
        </motion.section>

        {/* ============================================================
            Q&A BLOCK — animates on scroll into view
            Section 29: Product strategy
        ============================================================ */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-20"
        >
          <div
            className="grid grid-cols-1 items-center gap-10 rounded-2xl p-10 lg:grid-cols-2"
            style={{ backgroundColor: "#F5F3FC" }}
          >
            <div>
              <h2
                className="font-heading text-[26px] font-medium leading-snug lg:text-[30px]"
                style={{ color: LAVENDER_ACCENT }}
              >
                How Do You Turn a Product Idea Into a Scalable System?
              </h2>
              <p className="font-body mt-5 text-[15px] leading-relaxed text-slate-600">
                Strong products start with a clear strategy: what the
                product needs to do, for whom, and how success will be
                measured. Starfii pairs that strategy with UI/UX research
                and disciplined engineering, so scope decisions made on
                day one hold up once the product is in front of real
                customers.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop"
                alt="Product team reviewing a roadmap"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.section>
      </div>

      {/* ============================================================
          OUR SOFTWARE & PRODUCT ENGINEERING CAPABILITIES — full-bleed
          dark section, numbered cards with a tag pill row. Covers
          sections 30–38 (UI/UX through QA & release engineering).
      ============================================================ */}
      <section
        className="relative mt-24 overflow-hidden py-24"
        style={{
          background: `radial-gradient(120% 140% at 85% 100%, rgba(108,93,211,0.35), transparent 55%), ${DARK_BG}`,
        }}
      >
        <div className={ALIGN}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="max-w-2xl"
          >
            <h2 className="font-heading text-[36px] font-medium leading-[1.15] text-white lg:text-[44px]">
              Our Software & Product
              <br />
              Engineering Capabilities
            </h2>
            <p className="font-body mt-5 text-[15px] leading-relaxed text-slate-300">
              Starfii designs, builds, and modernizes digital products
              end to end, so every release is grounded in strategy and
              built to hold up in production.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={container}
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
          >
            {focusAreas.map((area, i) => (
              <motion.div
                key={area.title}
                variants={item}
                className="flex flex-col rounded-2xl p-8 transition-colors duration-300 hover:bg-white/[0.06]"
                style={{
                  backgroundColor: DARK_CARD,
                  border: `1px solid ${DARK_BORDER}`,
                }}
              >
                <div className="flex items-start justify-between">
                  <span className="font-body text-[14px] text-slate-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <a
                    href="#"
                    aria-label={`Learn more about ${area.title}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white transition-colors duration-300 hover:border-white/40"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>

                <h3 className="font-heading mt-6 text-[19px] font-semibold text-white">
                  {area.title}
                </h3>
                <p className="font-body mt-3 flex-1 text-[14px] leading-relaxed text-slate-400">
                  {area.body}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-body rounded-full border border-white/15 px-3 py-1 text-[11px] font-medium tracking-wide text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className={ALIGN}>
        {/* ============================================================
            USE CASES — scannable industry examples, light section,
            sits above the full narrative Case Studies below.
        ============================================================ */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-24"
        >
          <h2
            className="font-heading text-[36px] font-medium leading-[1.15]"
            style={{ color: CHAMPION_BLUE }}
          >
            Software & Product Engineering Use Cases
          </h2>
          <p className="font-body mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-600">
            A look at how these capabilities play out across industries,
            from headless storefronts to real time fleet tracking.
          </p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={container}
            className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
          >
            {useCases.map((useCase) => (
              <motion.div
                key={useCase.title}
                variants={item}
                className="flex h-full flex-col rounded-2xl border p-7 transition-colors duration-300 hover:bg-[#F8F7FD]"
                style={{ borderColor: "#E5E1F5" }}
              >
                <span
                  className="font-body text-[12px] font-semibold tracking-wide"
                  style={{ color: LAVENDER_ACCENT }}
                >
                  {useCase.industry.toUpperCase()}
                </span>
                <h3
                  className="font-heading mt-2 text-[18px] font-semibold leading-snug"
                  style={{ color: CHAMPION_BLUE }}
                >
                  {useCase.title}
                </h3>
                <p className="font-body mt-3 flex-1 text-[14px] leading-relaxed text-slate-600">
                  {useCase.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ============================================================
            CASE STUDIES — grid cards stagger in on scroll
            Section 39: Case studies
        ============================================================ */}
        <section className="mt-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="flex items-end justify-between"
          >
            <h2
              className="font-heading text-[36px] font-medium leading-[1.15]"
              style={{ color: CHAMPION_BLUE }}
            >
              Software & Product
              <br />
              Engineering Case Studies
            </h2>
            <Link
              href="/services/software-product-engineering/casestudies"
              className="font-body hidden items-center gap-1.5 text-[15px] font-semibold sm:flex"
              style={{ color: LAVENDER_ACCENT }}
            >
              View All Case Studies
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>

          <div className="mt-10">
            <StepCarousel
              items={sharedCaseStudies}
              itemsPerPage={{ mobile: 1, tablet: 2, desktop: 3 }}
              renderItem={(study) => (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={item}
                  className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ border: "1px solid #EDEAFB" }}
                >
                  <div className="h-[180px] overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <span
                      className="font-body text-[12px] font-semibold tracking-wide"
                      style={{ color: LAVENDER_ACCENT }}
                    >
                      {study.industry.toUpperCase()}
                    </span>
                    <h3
                      className="font-heading mt-2 text-[18px] font-semibold leading-snug"
                      style={{ color: CHAMPION_BLUE }}
                    >
                      {study.title}
                    </h3>
                    <p className="font-body mt-3 text-[14px] leading-relaxed text-slate-600">
                      {study.body}
                    </p>
                    <Link
                      href={`/services/software-product-engineering/casestudies/${study.slug}`}
                      className="font-body mt-5 inline-flex items-center gap-1.5 text-[14px] font-medium"
                      style={{ color: LAVENDER_ACCENT }}
                    >
                      Learn More
                      <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </motion.div>
              )}
            />
          </div>
        </section>

        {/* ============================================================
            TABBED DEEP-DIVE — auto-advancing tab list
            Covers sections 29–37 as a walkthrough
        ============================================================ */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="mt-24 pb-28"
        >
          <h2
            className="font-heading text-[34px] font-medium"
            style={{ color: CHAMPION_BLUE }}
          >
            Software & Product Engineering Services
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
                      className="font-body block py-3 pl-5 text-left text-[16px] transition-colors duration-200"
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

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 overflow-hidden rounded-2xl md:h-[340px] md:grid-cols-2"
              style={{ backgroundColor: "#F5F3FC" }}
            >
              <div className="flex flex-col justify-center p-10">
                <h3
                  className="font-heading text-[22px] font-semibold leading-snug"
                  style={{ color: CHAMPION_BLUE }}
                >
                  {current.heading}
                </h3>
                <p className="font-body mt-4 text-[15px] leading-relaxed text-slate-600">
                  {current.body}
                </p>
              </div>

              <div className="h-[280px]">
                <img
                  src={current.image}
                  alt={current.label}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>

      {/* ============================================================
          IMPACT ACROSS YOUR PRODUCT ECOSYSTEM — full-bleed dark
          section, expandable rows.
      ============================================================ */}
      <section
        className="relative overflow-hidden py-24"
        style={{
          background: `radial-gradient(110% 130% at 90% 100%, rgba(217,119,87,0.18), transparent 50%), ${DARK_BG}`,
        }}
      >
        <div className={ALIGN}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="font-heading max-w-xl text-[36px] font-medium leading-[1.15] text-white lg:text-[44px]"
          >
            Impact Across Your Product Engineering Ecosystem
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={container}
            className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2"
          >
            {impactAreas.map((area, i) => {
              const isOpen = openImpact === i;
              return (
                <motion.div key={area.title} variants={item}>
                  <button
                    type="button"
                    onClick={() => setOpenImpact(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 rounded-2xl bg-white px-8 py-6 text-left"
                  >
                    <span
                      className="font-body text-[16px] font-medium"
                      style={{ color: CHAMPION_BLUE }}
                    >
                      {area.title}
                    </span>
                    <span
                      className="flex h-9 w-9 flex-none items-center justify-center rounded-full text-white transition-transform duration-300"
                      style={{
                        backgroundColor: ACCENT_INDIGO,
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      <Plus size={18} />
                    </span>
                  </button>

                  {isOpen && (
                    <p className="font-body mt-3 px-8 text-[14px] leading-relaxed text-slate-300">
                      {area.body}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          WHAT'S NEW IN SOFTWARE & PRODUCT ENGINEERING — light section,
          3-up insight carousel with a progress bar + arrow pagination.
          This is the LAST section on the page (CTA lives in the hero).
      ============================================================ */}
      <section className="py-24" style={{ backgroundColor: "#EEF0FB" }}>
        <div className={ALIGN}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="flex items-end justify-between"
          >
            <h2
              className="font-heading max-w-lg text-[36px] font-medium leading-[1.15] lg:text-[44px]"
              style={{ color: CHAMPION_BLUE }}
            >
              What's New in Software
              <br />& Product Engineering
            </h2>
            <Link
              href="/services/software-product-engineering/blogs"
              className="font-body hidden items-center gap-1.5 text-[15px] font-semibold sm:flex"
              style={{ color: ACCENT_INDIGO }}
            >
              View All Insights
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            key={insightPage}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {visibleInsights.map((post) => (
              <Link
                key={post.slug}
                href={`/services/software-product-engineering/blogs/${post.slug}`}
                aria-label={`Read ${post.title}`}
                className="block h-full"
              >
                <div className="flex min-h-[360px] h-full flex-col overflow-hidden rounded-2xl bg-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="h-[220px] overflow-hidden bg-slate-900/90">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover opacity-80 transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span
                      className="font-body text-[12px] font-semibold tracking-wide"
                      style={{ color: ACCENT_INDIGO }}
                    >
                      BLOG
                    </span>
                    <h3
                      className="font-heading mt-2 text-[18px] font-semibold leading-snug"
                      style={{ color: CHAMPION_BLUE }}
                    >
                      {post.title}
                    </h3>
                    <p className="font-body mt-3 flex-1 text-[14px] leading-relaxed text-slate-600">
                      {post.body}
                    </p>
                    <span
                      className="font-body mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold"
                      style={{ color: ACCENT_INDIGO }}
                    >
                      Read More
                      <ArrowUpRight size={15} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>

          {/* Progress bar + pagination */}
          <div className="mt-10 flex items-center gap-6">
            <div className="h-[2px] flex-1 bg-slate-300">
              <div
                className="h-full transition-all duration-500"
                style={{
                  backgroundColor: ACCENT_INDIGO,
                  width: `${((insightPage + 1) / insightPages) * 100}%`,
                }}
              />
            </div>
            <div className="flex flex-none items-center gap-3">
              <button
                type="button"
                aria-label="Previous insights"
                onClick={() =>
                  setInsightPage((p) => (p - 1 + insightPages) % insightPages)
                }
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-400 transition-colors duration-300 hover:text-slate-600"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                aria-label="Next insights"
                onClick={() =>
                  setInsightPage((p) => (p + 1) % insightPages)
                }
                className="flex h-11 w-11 items-center justify-center rounded-full text-white"
                style={{ backgroundColor: ACCENT_INDIGO }}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
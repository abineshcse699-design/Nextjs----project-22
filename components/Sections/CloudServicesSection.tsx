"use client";

import Link from "next/link";

import {
  useRef,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
  type Ref,
  type ElementType,
  type ReactElement,
  type HTMLAttributes,
} from "react";

import {
  ChevronRight,
  ChevronLeft,
  Sparkles,
  ArrowUpRight,
  Plus,
  Trophy,
} from "lucide-react";

/* ===============================================================
   BRAND TOKENS
================================================================ */

const CHAMPION_BLUE = "#1B2560";
const LAVENDER_ACCENT = "#A48FEA";
const INDIGO_CTA = "#4F3FE0";

const ALIGN =
  "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

const TAB_AUTOPLAY_MS = 4000;

/* ===============================================================
   CONTENT
================================================================ */

const keyTakeaways = [
  {
    title: "Migrate",
    body: "Move workloads to AWS, Azure, or GCP through a structured migration approach designed to reduce disruption and keep business operations running.",
  },
  {
    title: "Modernize",
    body: "Build cloud native applications and multi cloud environments with architecture focused on scalability, resilience, security, and long term performance.",
  },
  {
    title: "Optimize",
    body: "Continuously improve cloud cost, reliability, and operations through FinOps, DevOps automation, security controls, and proactive cloud management.",
  },
];

type FocusArea = {
  title: string;
  body: string;
  tags: string[];
};

const focusAreas: FocusArea[] = [
  {
    title: "Cloud Migration Services",
    body: "Starfii assesses workloads, sequences the migration plan around business risk, and moves systems to AWS, Azure, or GCP with minimal disruption to day to day operations.",
    tags: ["AWS", "AZURE", "GCP"],
  },
  {
    title: "Cloud Native Application Development",
    body: "As a cloud native application development company, Starfii builds with containers, microservices, and serverless architecture where they deliver the most value, not by default.",
    tags: ["CONTAINERS", "MICROSERVICES", "SERVERLESS"],
  },
  {
    title: "Multi Cloud & Hybrid Cloud Architecture",
    body: "Starfii architects across AWS, Azure, and GCP so workloads run where they perform best, giving you multi cloud flexibility without vendor lock in.",
    tags: ["MULTI-CLOUD", "HYBRID", "ARCHITECTURE"],
  },
  {
    title: "Cloud Security & Compliance",
    body: "Starfii's cloud security consulting builds identity, network, and compliance controls into your environment from day one, so infrastructure growth never outpaces data protection.",
    tags: ["SECURITY", "COMPLIANCE", "IAM"],
  },
  {
    title: "FinOps & Cloud Cost Optimization",
    body: "Starfii monitors and tunes cloud spend continuously through FinOps best practices, keeping infrastructure costs predictable as usage scales across every environment.",
    tags: ["FINOPS", "COST", "OPTIMIZATION"],
  },
  {
    title: "Cloud Operations & Site Reliability Engineering",
    body: "Starfii runs day to day cloud operations with site reliability engineering practices, keeping uptime high and incidents rare across your AWS, Azure, and GCP estate.",
    tags: ["SRE", "UPTIME", "OPERATIONS"],
  },
  {
    title: "DevOps & CI/CD Automation",
    body: "Starfii builds automated CI/CD pipelines that get code to production faster and safer, with testing, monitoring, and rollback built into every release.",
    tags: ["DEVOPS", "CI/CD", "AUTOMATION"],
  },
  {
    title: "Data & AI Workloads on Cloud",
    body: "Starfii designs cloud infrastructure purpose built for data engineering and AI/ML workloads, so pipelines and models run efficiently and reliably at scale.",
    tags: ["DATA", "AI/ML", "PIPELINES"],
  },
  {
    title: "Cloud Managed Services",
    body: "Starfii's managed services team monitors, patches, and optimizes your cloud environment around the clock, so internal teams stay focused on building product, not babysitting infrastructure.",
    tags: ["MANAGED", "MONITORING", "SUPPORT"],
  },
  {
    title: "Kubernetes & Container Orchestration",
    body: "Starfii designs and operates Kubernetes clusters across AWS, Azure, and GCP, giving containerized workloads consistent scaling, deployment, and recovery wherever they run.",
    tags: ["KUBERNETES", "EKS/AKS/GKE", "ORCHESTRATION"],
  },
  {
    title: "Disaster Recovery & Business Continuity",
    body: "Starfii architects cloud disaster recovery and backup strategies that meet real recovery time objectives, so an outage in one region never becomes an outage for the business.",
    tags: ["DR", "BACKUP", "RESILIENCE"],
  },
  {
    title: "Cloud Governance & FinOps Reporting",
    body: "Starfii sets up tagging, budgets, and governance guardrails across your cloud accounts, giving finance and engineering the same real time view of spend and usage.",
    tags: ["GOVERNANCE", "REPORTING", "BUDGETS"],
  },
];

type ServiceTab = {
  label: string;
  heading: string;
  body: string;
  image: string;
};

const tabs: ServiceTab[] = [
  {
    label: "Migration: Plan a Move That Fits",
    heading:
      "A cloud migration roadmap sequenced around business risk, not just technical ease",
    body: "Starfii assesses your workloads and builds a cloud migration plan that moves the right systems in the right order, so the business keeps running while the cloud foundation gets built underneath it.",
    // Server rack / data center — the infrastructure workloads move onto
    image:
      "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Cloud Native: Built For the Cloud",
    heading:
      "Applications engineered for the cloud, not just moved onto it",
    body: "Starfii builds with containers, microservices, and serverless architecture where they genuinely help, so you get the elasticity, scalability, and resilience the cloud is meant to offer.",
    // Cloud icon with data layers — cloud native architecture
    image:
      "https://images.unsplash.com/photo-1690627931320-16ac56eb2588?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "FinOps: Control Cost as You Scale",
    heading:
      "FinOps that keeps cloud spend predictable, not a surprise on the invoice",
    body: "Starfii monitors cloud usage continuously and right sizes resources to match actual demand, so infrastructure cost scales with the business instead of running ahead of it.",
    // Financial market data line graph — cost/spend trend
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Security: Secure by Design",
    heading:
      "Cloud security built into the architecture, not added after launch",
    body: "Starfii embeds identity, network, and compliance controls into the cloud environment from the start, so security scales alongside the workloads it protects.",
    // Golden padlock on a keyboard — access control / security
    image:
      "https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "SRE: Keep Operations Reliable",
    heading:
      "Site reliability engineering that keeps uptime high as complexity grows",
    body: "Starfii's SRE led cloud operations team monitors, automates, and responds to incidents across your AWS, Azure, and GCP estate, so reliability holds steady as workloads multiply.",
    // Performance analytics graphs on a laptop — SRE monitoring
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
];

type EcosystemImpact = {
  title: string;
};

const ecosystemImpact: EcosystemImpact[] = [
  {
    title: "Cloud Migration and Modernization",
  },
  {
    title: "Multi Cloud Architecture and Governance",
  },
  {
    title: "FinOps and Cost Optimization at Scale",
  },
  {
    title: "DevOps and CI/CD Automation",
  },
  {
    title: "Cloud Security and Compliance Engineering",
  },
  {
    title: "Data and AI Workloads on Cloud",
  },
];

type IndustryAward = {
  year: string;
  category: string;
  subcategory: string;
  rank: string;
  description: string;
};

const industryAwards: IndustryAward[] = [
  {
    year: "2026 Quadrant",
    category:
      "Public Cloud Solutions and Service Providers",
    subcategory: "Multi-Cloud Managed Services",
    rank: "Leader, U.S.",
    description:
      "Starfii named a Leader in Multi-Cloud Managed Services in the ISG Provider Lens® Public Cloud Solutions and Service Providers 2026 U.S. Quadrant Report, recognizing our cloud operations expertise.",
  },
  {
    year: "2025 Quadrant",
    category: "Cloud and Data Engineering",
    subcategory: "Migration and Modernization",
    rank: "Leader, U.S.",
    description:
      "Starfii recognized as a Leader in Cloud and Data Engineering Migration and Modernization Services in the ISG Provider Lens™ 2025 US Quadrant Report, validating our cloud migration and data engineering services.",
  },
  {
    year: "2025 Quadrant",
    category: "DevOps Solutions and Services",
    subcategory:
      "CI/CD and Site Reliability Engineering",
    rank: "Rising Star, U.S.",
    description:
      "Starfii named a Rising Star in CI/CD and Site Reliability Engineering in the ISG Provider Lens™ DevOps Solutions and Services 2025 US Quadrant Report, reflecting our growing SRE and automation practice.",
  },
];

/* ===============================================================
   CASE STUDIES
================================================================ */

type CaseStudy = {
  slug: string;
  image: string;
  title: string;
  body: string;
};

const caseStudies: CaseStudy[] = [
  {
    slug: "reinsurer-aws-core-systems-migration",
    // Blue network cabling — core systems / migration infrastructure
    image:
      "https://images.unsplash.com/photo-1683322499436-f4383dd59f5a?q=80&w=900&auto=format&fit=crop",
    title:
      "Starfii Migrates a Global Reinsurer's Core Systems to AWS",
    body:
      "See how Starfii sequenced a zero downtime migration of core claims systems to AWS, cutting infrastructure cost while improving failover time for a global reinsurer.",
  },
  {
    slug: "regional-bank-multi-cloud-modernization",
    // Abstract network / architecture structure — multi cloud design
    image:
      "https://images.unsplash.com/photo-1545987796-200677ee1011?q=80&w=900&auto=format&fit=crop",
    title:
      "Starfii Builds a Multi Cloud Foundation for a Regional Bank",
    body:
      "Explore how Starfii's multi cloud architecture gave a regional bank vendor flexibility across AWS and Azure while meeting strict data residency and compliance requirements.",
  },
  {
    slug: "utilities-kubernetes-platform",
    // Server racks in a data center — Kubernetes / orchestration infra
    image:
      "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?q=80&w=900&auto=format&fit=crop",
    title:
      "Starfii Modernizes Field Operations with a Kubernetes Platform on GCP",
    body:
      "Discover how Starfii's Kubernetes platform on GCP gave a utilities provider real time visibility across the grid while cutting deployment time from days to minutes.",
  },
  {
    slug: "healthcare-finops-cost-optimization",
    // Clinician reviewing data on a laptop — digital healthcare platform
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=900&auto=format&fit=crop",
    title:
      "Starfii Cuts Cloud Spend 34 Percent for a Healthcare SaaS Platform",
    body:
      "Learn how Starfii's FinOps program right sized compute and storage across a healthcare SaaS platform without touching uptime or HIPAA compliance.",
  },
  {
    slug: "ecommerce-sre-uptime-program",
    // Retail checkout moment — Fortune 500 retailer customer experience
    image:
      "https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=900&auto=format&fit=crop",
    title:
      "Starfii's SRE Program Lifts Uptime for a Fortune 500 Retailer",
    body:
      "See how Starfii's site reliability engineering practice reduced incident response time and lifted uptime during peak shopping seasons for a Fortune 500 retailer.",
  },
];

/* ===============================================================
   BLOGS / INSIGHTS
   IMPORTANT: slug added here.
================================================================ */

type InsightPost = {
  slug: string;
  large: boolean;
  image: string;
  title: string;
  body: string;
};

const insights: InsightPost[] = [
  {
    slug: "multi-cloud-architecture-flexibility-control",
    large: true,
    // Complex network of connected nodes — multi cloud architecture
    image:
      "https://images.unsplash.com/photo-1664854953181-b12e6dda8b7c?q=80&w=1200&auto=format&fit=crop",
    title:
      "Multi Cloud Architecture: Designing for Flexibility Without Losing Control",
    body:
      "Explore how Starfii designs multi cloud architecture across AWS, Azure, and GCP that gives enterprises vendor flexibility while keeping governance and cost under control.",
  },
  {
    slug: "finops-cloud-waste-performance",
    large: false,
    // Monitor displaying a cost/performance graph — FinOps waste tracking
    image:
      "https://images.unsplash.com/photo-1560221328-12fe60f83ab8?q=80&w=800&auto=format&fit=crop",
    title:
      "FinOps in Practice: Cutting Cloud Waste Without Cutting Performance",
    body:
      "Stop overpaying for idle compute. See how Starfii's FinOps practice identifies waste and right sizes workloads, often cutting cloud spend by 25 to 35 percent.",
  },
  {
    slug: "site-reliability-engineering-cloud-scale",
    large: false,
    // Live monitoring screen — uptime and reliability at scale
    image:
      "https://images.unsplash.com/photo-1655000278839-b7d7b11251c5?q=80&w=800&auto=format&fit=crop",
    title:
      "Site Reliability Engineering: Keeping Uptime High as Systems Scale",
    body:
      "Stop firefighting incidents. See how Starfii's SRE practice combines automation and observability to keep uptime high as cloud environments grow more complex.",
  },
  {
    slug: "cloud-security-by-design",
    large: false,
    // Teal-lit server/security panel — cloud security architecture
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    title:
      "Cloud Security by Design: Protecting Modern Infrastructure",
    body:
      "Explore how Starfii builds identity, network, monitoring, and compliance controls into cloud architecture so security scales with every workload.",
  },
  {
    slug: "devops-cicd-cloud-reliability",
    large: false,
    // Engineer at a desk with laptop and monitor — DevOps / CI/CD workflow
    image:
      "https://images.unsplash.com/photo-1631624215749-b10b3dd7bca7?q=80&w=800&auto=format&fit=crop",
    title:
      "DevOps and CI/CD: Shipping Faster Without Sacrificing Reliability",
    body:
      "See how Starfii automates testing, deployment, monitoring, and rollback to help cloud teams release faster while keeping production stable.",
  },
];

/* ===============================================================
   ANIMATIONS
================================================================ */

function AnimationStyles(): ReactElement {
  return (
    <style>{`
      @keyframes ss-fade-up {
        from {
          opacity: 0;
          transform: translateY(28px) scale(0.97);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      @keyframes ss-fade-in {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes ss-drift {
        0% {
          transform: translate3d(0, 0, 0) scale(1);
        }
        50% {
          transform: translate3d(-2%, 2%, 0) scale(1.06);
        }
        100% {
          transform: translate3d(0, 0, 0) scale(1);
        }
      }

      @keyframes ss-pulse-soft {
        0%,
        100% {
          opacity: 0.55;
        }

        50% {
          opacity: 1;
        }
      }

      @keyframes ss-tab-progress {
        from {
          transform: scaleY(0);
        }

        to {
          transform: scaleY(1);
        }
      }

      .ss-reveal {
        opacity: 0;
      }

      .ss-reveal.ss-in-view {
        animation:
          ss-fade-up
          0.75s
          cubic-bezier(0.22, 1, 0.36, 1)
          forwards;
      }

      .ss-tab-panel {
        animation: ss-fade-in 0.45s ease-out;
      }

      .ss-drift-slow {
        animation: ss-drift 16s ease-in-out infinite;
      }

      .ss-drift-slower {
        animation: ss-drift 22s ease-in-out infinite reverse;
      }

      .ss-arrow-pulse:not(:disabled):hover {
        animation: ss-pulse-soft 1.2s ease-in-out infinite;
      }

      .ss-award-card {
        transition:
          transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
          box-shadow 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        box-shadow:
          0 0 0 rgba(164, 143, 234, 0);
      }

      .ss-award-card:hover {
        transform: translateY(-6px);
        box-shadow:
          0 22px 45px -18px rgba(79, 63, 224, 0.55),
          0 0 0 1px rgba(164, 143, 234, 0.35);
      }

      .ss-award-card:hover .ss-trophy {
        transform: rotate(-14deg) scale(1.15);
      }

      .ss-trophy {
        transition:
          transform 0.45s
          cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      .ss-focus-card {
        transition:
          transform 0.4s
            cubic-bezier(0.22, 1, 0.36, 1),
          border-color 0.4s ease,
          background-color 0.4s ease;
      }

      .ss-focus-card:hover {
        transform: translateY(-6px);
        border-color: rgba(164, 143, 234, 0.55);
        background-color: #14121f;
      }

      .ss-focus-card:hover .ss-focus-arrow {
        transform: rotate(45deg);
        background-color: ${INDIGO_CTA};
        border-color: ${INDIGO_CTA};
      }

      .ss-focus-arrow {
        transition:
          transform 0.35s
            cubic-bezier(0.34, 1.56, 0.64, 1),
          background-color 0.3s ease,
          border-color 0.3s ease;
      }

      .ss-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .ss-clamp-3 {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      @media (prefers-reduced-motion: reduce) {
        .ss-reveal,
        .ss-tab-panel,
        .ss-drift-slow,
        .ss-drift-slower,
        .ss-arrow-pulse {
          animation: none !important;
          opacity: 1 !important;
          transform: none !important;
        }

        .ss-tab-progress-fill {
          animation: none !important;
          transform: scaleY(1) !important;
        }
      }
    `}</style>
  );
}

/* ===============================================================
   REVEAL HOOK
================================================================ */

function useReveal<T extends HTMLElement = HTMLElement>(
  options?: IntersectionObserverInit
): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;

    if (!el) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        ...options,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

/* ===============================================================
   RESPONSIVE ITEMS
================================================================ */

type Breakpoints = {
  mobile: number;
  tablet: number;
  desktop: number;
};

function useItemsPerPage({
  mobile,
  tablet,
  desktop,
}: Breakpoints): number {
  const [count, setCount] = useState(desktop);

  useEffect(() => {
    const mqTablet = window.matchMedia(
      "(max-width: 1023px)"
    );

    const mqMobile = window.matchMedia(
      "(max-width: 639px)"
    );

    const update = () => {
      if (mqMobile.matches) {
        setCount(mobile);
      } else if (mqTablet.matches) {
        setCount(tablet);
      } else {
        setCount(desktop);
      }
    };

    update();

    mqTablet.addEventListener("change", update);
    mqMobile.addEventListener("change", update);

    return () => {
      mqTablet.removeEventListener("change", update);
      mqMobile.removeEventListener("change", update);
    };
  }, [mobile, tablet, desktop]);

  return count;
}

/* ===============================================================
   REVEAL COMPONENT
================================================================ */

type RevealProps = {
  as?: ElementType;
  delay?: number;
  className?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLElement>;

function Reveal({
  as,
  delay = 0,
  className = "",
  children,
  ...rest
}: RevealProps): ReactElement {
  const Tag = (as ?? "div") as ElementType;

  const [ref, inView] =
    useReveal<HTMLElement>();

  return (
    <Tag
      ref={ref as Ref<HTMLElement>}
      className={`ss-reveal ${
        inView ? "ss-in-view" : ""
      } ${className}`}
      style={{
        animationDelay: inView
          ? `${delay}ms`
          : undefined,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ===============================================================
   FREE SCROLL CAROUSEL
================================================================ */

type CarouselProps = {
  children: ReactNode;
  itemCount: number;
  arrowVariant?: "light" | "dark";
  clickToAdvance?: boolean;
};

function Carousel({
  children,
  itemCount,
  arrowVariant = "light",
  clickToAdvance = false,
}: CarouselProps): ReactElement {
  const trackRef =
    useRef<HTMLDivElement | null>(null);

  const [progress, setProgress] =
    useState(0);

  const [atStart, setAtStart] =
    useState(true);

  const [atEnd, setAtEnd] =
    useState(false);

  const updateProgress =
    useCallback(() => {
      const el = trackRef.current;

      if (!el) return;

      const maxScroll =
        el.scrollWidth - el.clientWidth;

      const pct =
        maxScroll <= 0
          ? 1
          : el.scrollLeft / maxScroll;

      setProgress(pct);

      setAtStart(el.scrollLeft <= 4);

      setAtEnd(
        el.scrollLeft >= maxScroll - 4
      );
    }, []);

  useEffect(() => {
    const el = trackRef.current;

    updateProgress();

    if (!el) {
      return undefined;
    }

    el.addEventListener(
      "scroll",
      updateProgress,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      updateProgress
    );

    return () => {
      el.removeEventListener(
        "scroll",
        updateProgress
      );

      window.removeEventListener(
        "resize",
        updateProgress
      );
    };
  }, [updateProgress]);

  const scrollByCard = (dir: number) => {
    const el = trackRef.current;

    if (!el) return;

    const firstCard =
      el.firstElementChild as
        | HTMLElement
        | null;

    const cardWidth = firstCard
      ? firstCard.getBoundingClientRect()
          .width + 24
      : 320;

    el.scrollBy({
      left: dir * cardWidth,
      behavior: "smooth",
    });
  };

  const isDark =
    arrowVariant === "dark";

  return (
    <div>
      <div
        ref={trackRef}
        onClick={
          clickToAdvance
            ? (event) => {
                const target =
                  event.target as HTMLElement;

                if (
                  target.closest(
                    "[data-carousel-card]"
                  )
                ) {
                  scrollByCard(1);
                }
              }
            : undefined
        }
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      <div className="mt-8 flex items-center gap-6">
        <div
          className="h-[3px] flex-1 overflow-hidden rounded-full"
          style={{
            backgroundColor: isDark
              ? "rgba(255,255,255,0.18)"
              : "#E5E1F5",
          }}
        >
          <div
            className="h-full rounded-full transition-[width] duration-300 ease-out"
            style={{
              width: `${Math.max(
                progress * 100,
                itemCount
                  ? 100 / itemCount
                  : 10
              )}%`,
              backgroundColor: INDIGO_CTA,
            }}
          />
        </div>

        <div className="flex flex-shrink-0 items-center gap-3">
          <button
            type="button"
            aria-label="Previous"
            onClick={() =>
              scrollByCard(-1)
            }
            disabled={atStart}
            className="ss-arrow-pulse flex h-11 w-11 items-center justify-center rounded-full transition-all duration-200 hover:scale-110 disabled:opacity-40 disabled:hover:scale-100"
            style={{
              backgroundColor: isDark
                ? "rgba(255,255,255,0.12)"
                : "#E5E1F5",
              color: isDark
                ? "#fff"
                : CHAMPION_BLUE,
            }}
          >
            <ChevronLeft size={18} />
          </button>

          <button
            type="button"
            aria-label="Next"
            onClick={() =>
              scrollByCard(1)
            }
            disabled={atEnd}
            className="ss-arrow-pulse flex h-11 w-11 items-center justify-center rounded-full text-white transition-all duration-200 hover:scale-110 disabled:opacity-40 disabled:hover:scale-100"
            style={{
              backgroundColor: INDIGO_CTA,
            }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ===============================================================
   STEP CAROUSEL
================================================================ */

type StepCarouselProps<T> = {
  items: T[];
  itemsPerPage: Breakpoints;
  renderItem: (
    item: T,
    index: number
  ) => ReactNode;
  arrowVariant?: "light" | "dark";
};

function StepCarousel<T>({
  items,
  itemsPerPage,
  renderItem,
  arrowVariant = "light",
}: StepCarouselProps<T>): ReactElement {
  const perPage =
    useItemsPerPage(itemsPerPage);

  const trackRef =
    useRef<HTMLDivElement | null>(null);

  const [position, setPosition] =
    useState(0);

  const [stepWidth, setStepWidth] =
    useState(0);

  const maxPosition = Math.max(
    0,
    items.length - perPage
  );

  const totalPositions = Math.max(
    1,
    maxPosition + 1
  );

  const isDark =
    arrowVariant === "dark";

  const measure = useCallback(() => {
    const track = trackRef.current;

    if (!track) return;

    const firstCard =
      track.firstElementChild as
        | HTMLElement
        | null;

    if (!firstCard) return;

    setStepWidth(
      firstCard.getBoundingClientRect()
        .width + 24
    );
  }, []);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return undefined;
    }

    measure();

    const observer =
      new ResizeObserver(measure);

    observer.observe(track);

    const firstCard =
      track.firstElementChild as
        | HTMLElement
        | null;

    if (firstCard) {
      observer.observe(firstCard);
    }

    window.addEventListener(
      "resize",
      measure
    );

    return () => {
      observer.disconnect();

      window.removeEventListener(
        "resize",
        measure
      );
    };
  }, [measure, perPage]);

  useEffect(() => {
    setPosition((current) =>
      Math.min(current, maxPosition)
    );
  }, [maxPosition]);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    track.scrollTo({
      left: position * stepWidth,
      behavior: "smooth",
    });
  }, [position, stepWidth]);

  const goTo = (
    nextPosition: number
  ) => {
    const next = Math.min(
      Math.max(nextPosition, 0),
      maxPosition
    );

    setPosition(next);
  };

  const progress =
    ((position + 1) /
      totalPositions) *
    100;

  return (
    <div>
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{
          scrollBehavior: "smooth",
        }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="min-w-0 flex-shrink-0 snap-start"
            style={{
              width:
                perPage === 1
                  ? "100%"
                  : `calc((100% - ${
                      (perPage - 1) * 24
                    }px) / ${perPage})`,
            }}
          >
            {renderItem(item, i)}
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-6">
        <div
          className="h-[3px] flex-1 overflow-hidden rounded-full"
          style={{
            backgroundColor: isDark
              ? "rgba(255,255,255,0.18)"
              : "#E5E1F5",
          }}
        >
          <div
            className="h-full rounded-full transition-[width] duration-300 ease-out"
            style={{
              width: `${progress}%`,
              backgroundColor: INDIGO_CTA,
            }}
          />
        </div>

        <span
          className="font-body flex-shrink-0 text-[13px] font-medium tabular-nums"
          style={{
            color: isDark
              ? "rgba(255,255,255,0.55)"
              : "#94A3B8",
          }}
        >
          {String(position + 1).padStart(
            2,
            "0"
          )}{" "}
          /{" "}
          {String(totalPositions).padStart(
            2,
            "0"
          )}
        </span>

        <div className="flex flex-shrink-0 items-center gap-3">
          <button
            type="button"
            aria-label="Previous"
            onClick={() =>
              goTo(position - 1)
            }
            disabled={position === 0}
            className="ss-arrow-pulse flex h-11 w-11 items-center justify-center rounded-full transition-all duration-200 hover:scale-110 disabled:opacity-40 disabled:hover:scale-100"
            style={{
              backgroundColor: isDark
                ? "rgba(255,255,255,0.12)"
                : "#E5E1F5",
              color: isDark
                ? "#fff"
                : CHAMPION_BLUE,
            }}
          >
            <ChevronLeft size={18} />
          </button>

          <button
            type="button"
            aria-label="Next"
            onClick={() =>
              goTo(position + 1)
            }
            disabled={
              position === maxPosition
            }
            className="ss-arrow-pulse flex h-11 w-11 items-center justify-center rounded-full text-white transition-all duration-200 hover:scale-110 disabled:opacity-40 disabled:hover:scale-100"
            style={{
              backgroundColor: INDIGO_CTA,
            }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ===============================================================
   CLOUD SERVICES SECTION
================================================================ */

export default function CloudServicesSection(): ReactElement {
  const [activeTab, setActiveTab] =
    useState(0);

  const [tabHovered, setTabHovered] =
    useState(false);

  const current = tabs[activeTab];

  useEffect(() => {
    if (tabHovered) {
      return undefined;
    }

    const id = setInterval(() => {
      setActiveTab(
        (prev) =>
          (prev + 1) % tabs.length
      );
    }, TAB_AUTOPLAY_MS);

    return () =>
      clearInterval(id);
  }, [tabHovered, activeTab]);

  return (
    <main className="bg-white">
      <AnimationStyles />

      {/* ============================================================
          HERO
      ============================================================ */}

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?q=80&w=1800&auto=format&fit=crop"
            alt=""
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/10" />
        </div>

        <div
          className={`${ALIGN} py-24 lg:py-32`}
        >
          <nav
            aria-label="Breadcrumb"
            className="font-body flex items-center gap-2 text-[14px] font-medium opacity-0"
            style={{
              color: CHAMPION_BLUE,
              animation:
                "ss-fade-up 0.6s ease-out 0.05s forwards",
            }}
          >
            <Link
              href="/"
              className="hover:underline"
            >
              Home
            </Link>

            <ChevronRight size={14} />

            <Link
              href="/services"
              className="hover:underline"
            >
              Services
            </Link>

            <ChevronRight size={14} />

            <span className="text-slate-500">
              Cloud Engineering
            </span>
          </nav>

          <h1
            className="font-heading mt-8 max-w-xl text-[44px] font-medium leading-[1.15] opacity-0 lg:text-[54px]"
            style={{
              color: CHAMPION_BLUE,
              animation:
                "ss-fade-up 0.7s ease-out 0.15s forwards",
            }}
          >
            Cloud Engineering Services on AWS,
            Azure & GCP
          </h1>

          <p
            className="font-body mt-6 max-w-lg text-[17px] leading-relaxed text-slate-600 opacity-0"
            style={{
              animation:
                "ss-fade-up 0.7s ease-out 0.28s forwards",
            }}
          >
            Starfii migrates, modernizes, and runs
            workloads on AWS, Azure, and GCP with
            cloud architecture designed for
            performance, security, and cost control
            from day one.
          </p>

          <a
            href="#connect"
            className="font-body mt-9 inline-flex items-center gap-2 rounded-full px-7 py-4 text-[15px] font-semibold text-white opacity-0 transition-transform duration-300 hover:scale-[1.03]"
            style={{
              backgroundColor: CHAMPION_BLUE,
              animation:
                "ss-fade-up 0.7s ease-out 0.4s forwards",
            }}
          >
            Request Your POC Now
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      <div className={ALIGN}>
        {/* ============================================================
            AT A GLANCE
        ============================================================ */}

        <Reveal
          as="section"
          className="mt-16"
        >
          <div
            className="overflow-hidden rounded-[22px] border bg-white"
            style={{
              borderColor: LAVENDER_ACCENT,
            }}
          >
            <div
              className="flex min-h-[104px] items-center justify-between px-8 py-6 lg:px-10"
              style={{
                borderBottom:
                  `1px solid ${LAVENDER_ACCENT}`,
              }}
            >
              <div className="flex items-center gap-3">
                <Sparkles
                  size={21}
                  strokeWidth={1.8}
                  style={{
                    color: LAVENDER_ACCENT,
                  }}
                />

                <span
                  className="font-body text-[17px] font-semibold"
                  style={{
                    color: CHAMPION_BLUE,
                  }}
                >
                  Cloud Engineering at a Glance
                </span>
              </div>

              <span
                className="font-body hidden rounded-full px-5 py-2.5 text-[13px] font-semibold sm:inline-flex"
                style={{
                  backgroundColor: "#F1EEFC",
                  color: INDIGO_CTA,
                }}
              >
                AWS • Azure • GCP
              </span>
            </div>

            <div className="grid grid-cols-1 gap-10 px-8 py-10 md:grid-cols-3 lg:px-10">
              {keyTakeaways.map(
                (point) => (
                  <div key={point.title}>
                    <h3
                      className="font-heading text-[23px] font-semibold"
                      style={{
                        color: CHAMPION_BLUE,
                      }}
                    >
                      {point.title}
                    </h3>

                    <p className="font-body mt-4 text-[15px] leading-[1.8] text-slate-600">
                      {point.body}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          <p
            className="font-heading mt-10 max-w-3xl text-[26px] leading-snug lg:text-[30px]"
            style={{
              color: CHAMPION_BLUE,
            }}
          >
            A specialist cloud engineering
            partner, Starfii designs and runs cloud
            environments on AWS, Azure, and GCP
            that balance performance, security, and
            cost as you scale.
          </p>
        </Reveal>

        {/* ============================================================
            Q&A
        ============================================================ */}

        <Reveal
          as="section"
          className="mt-20"
        >
          <div
            className="grid grid-cols-1 items-center gap-10 rounded-2xl p-10 lg:grid-cols-2"
            style={{
              backgroundColor: "#F5F3FC",
            }}
          >
            <div>
              <h2
                className="font-heading text-[26px] font-medium leading-snug lg:text-[30px]"
                style={{
                  color: LAVENDER_ACCENT,
                }}
              >
                How Do Enterprises Move to the
                Cloud Without Losing Control?
              </h2>

              <p className="font-body mt-5 text-[15px] leading-relaxed text-slate-600">
                Enterprises stay in control during
                cloud adoption by sequencing migration
                around business risk, designing cloud
                native applications from the start,
                and treating cost and security as
                ongoing FinOps and compliance
                practices.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop"
                alt="Cloud engineers reviewing cloud infrastructure architecture"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </Reveal>
      </div>

      {/* ============================================================
          FOCUS AREAS
      ============================================================ */}

      <section className="relative overflow-hidden bg-[#0A0912] py-24">
        <div
          className="ss-drift-slow pointer-events-none absolute inset-y-0 right-0 w-[45%]"
          style={{
            background:
              "radial-gradient(55% 90% at 100% 0%, rgba(164,143,234,0.32) 0%, rgba(79,63,224,0.18) 40%, rgba(10,9,18,0) 70%)",
          }}
        />

        <div
          className={`relative ${ALIGN}`}
        >
          <Reveal className="max-w-xl">
            <h2 className="font-heading text-[36px] font-medium leading-[1.15] text-white lg:text-[44px]">
              Our Cloud Engineering
              Capabilities
            </h2>

            <p className="font-body mt-5 text-[15px] leading-relaxed text-white/60">
              Starfii migrates, builds, and operates
              on AWS, Azure, and GCP with architecture
              designed for scale, resilience, and
              predictable cost.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {focusAreas.map(
              (area, i) => (
                <Reveal
                  key={area.title}
                  delay={(i % 3) * 90}
                  className="h-full"
                >
                  <div
                    className="ss-focus-card flex h-full flex-col justify-between rounded-2xl border p-8"
                    style={{
                      backgroundColor: "#0F0E18",
                      borderColor:
                        "rgba(255,255,255,0.10)",
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-body text-[13px] font-medium text-white/35">
                        {String(i + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <span
                        className="ss-focus-arrow flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border"
                        style={{
                          borderColor:
                            "rgba(255,255,255,0.18)",
                        }}
                      >
                        <ArrowUpRight
                          size={16}
                          className="text-white"
                        />
                      </span>
                    </div>

                    <div className="mt-16">
                      <h3 className="font-heading text-[22px] font-semibold leading-snug text-white">
                        {area.title}
                      </h3>

                      <p className="font-body mt-3 text-[14px] leading-relaxed text-white/55">
                        {area.body}
                      </p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {area.tags.map(
                        (tag) => (
                          <span
                            key={tag}
                            className="font-body rounded-full border px-3 py-1 text-[11px] font-medium tracking-wide text-white/50"
                            style={{
                              borderColor:
                                "rgba(255,255,255,0.16)",
                            }}
                          >
                            {tag}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </Reveal>
              )
            )}
          </div>
        </div>
      </section>

      <div className={ALIGN}>
        {/* ============================================================
            TABS
        ============================================================ */}

        <Reveal
          as="section"
          className="mt-24 pb-28"
        >
          <h2
            className="font-heading text-[34px] font-medium"
            style={{
              color: CHAMPION_BLUE,
            }}
          >
            Cloud Services, Explained
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[320px_1fr]">
            <ul
              className="space-y-1 border-l"
              style={{
                borderColor: "#E5E1F5",
              }}
              onMouseEnter={() =>
                setTabHovered(true)
              }
              onMouseLeave={() =>
                setTabHovered(false)
              }
            >
              {tabs.map((tab, i) => {
                const isActive =
                  i === activeTab;

                return (
                  <li
                    key={tab.label}
                    className="relative -ml-px"
                  >
                    {isActive && (
                      <span
                        key={`${activeTab}-${tabHovered}`}
                        className="ss-tab-progress-fill pointer-events-none absolute inset-y-0 left-0 w-[2px] origin-top"
                        style={{
                          backgroundColor:
                            CHAMPION_BLUE,
                          animation: tabHovered
                            ? "none"
                            : `ss-tab-progress ${TAB_AUTOPLAY_MS}ms linear forwards`,
                          transform:
                            tabHovered
                              ? "scaleY(1)"
                              : undefined,
                        }}
                      />
                    )}

                    <button
                      type="button"
                      onClick={() =>
                        setActiveTab(i)
                      }
                      className="font-body block py-3 pl-5 text-left text-[16px] transition-colors duration-200"
                      style={{
                        color: isActive
                          ? CHAMPION_BLUE
                          : "#94A3B8",
                        fontWeight: isActive
                          ? 600
                          : 500,
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
              className="ss-tab-panel grid grid-cols-1 overflow-hidden rounded-2xl md:grid-cols-2 md:h-[420px]"
              style={{
                backgroundColor: "#F5F3FC",
              }}
            >
              <div className="flex flex-col justify-center p-10">
                <h3
                  className="font-heading text-[22px] font-semibold leading-snug"
                  style={{
                    color: CHAMPION_BLUE,
                  }}
                >
                  {current.heading}
                </h3>

                <p className="font-body mt-4 text-[15px] leading-relaxed text-slate-600">
                  {current.body}
                </p>
              </div>

              <div className="min-h-[280px] overflow-hidden">
                <img
                  src={current.image}
                  alt={current.label}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ============================================================
          IMPACT
      ============================================================ */}

      <section className="relative overflow-hidden bg-[#08070F] py-24">
        <div
          className="relative mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16"
        >
          <Reveal>
            <h2 className="font-heading max-w-2xl text-[36px] font-medium leading-[1.2] text-white lg:text-[44px]">
              Impact Across Your Cloud
              <br />
              Infrastructure
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {ecosystemImpact.map(
              (item, i) => (
                <Reveal
                  key={item.title}
                  delay={i * 90}
                >
                  <a
                    href="#"
                    className="group flex items-center justify-between rounded-2xl bg-white px-8 py-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <span
                      className="font-body text-[19px] font-medium"
                      style={{
                        color: CHAMPION_BLUE,
                      }}
                    >
                      {item.title}
                    </span>

                    <span
                      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:rotate-45"
                      style={{
                        backgroundColor:
                          INDIGO_CTA,
                      }}
                    >
                      <Plus size={18} />
                    </span>
                  </a>
                </Reveal>
              )
            )}
          </div>
        </div>
      </section>

      {/* ============================================================
          INDUSTRY RECOGNITION
      ============================================================ */}

     

      {/* ============================================================
          CASE STUDIES
      ============================================================ */}

      <section
        className="py-24"
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #E9E4FB 45%, #C9BEF5 100%)",
        }}
      >
        <div className={ALIGN}>
          <Reveal className="flex items-center justify-between">
            <h2
              className="font-heading text-[36px] font-medium lg:text-[44px]"
              style={{
                color: CHAMPION_BLUE,
              }}
            >
              Case Studies
            </h2>

            <Link
              href="/services/cloud/casestudies"
              className="font-body hidden items-center gap-1.5 text-[15px] font-semibold transition-transform duration-200 hover:translate-x-1 sm:flex"
              style={{
                color: INDIGO_CTA,
              }}
            >
              View All Case Studies
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>

          <div className="mt-12">
            <StepCarousel
              items={caseStudies}
              itemsPerPage={{
                mobile: 1,
                tablet: 2,
                desktop: 3,
              }}
              arrowVariant="light"
              renderItem={(
                study,
                i
              ) => (
                <Reveal
                  delay={(i % 3) * 90}
                  className="h-full"
                >
                  <article
                    className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-2xl"
                    style={{
                      border:
                        "1px solid #E5E1F5",
                    }}
                  >
                    <div className="h-[220px] flex-shrink-0 overflow-hidden">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <span
                        className="font-body text-[12px] font-semibold tracking-wide"
                        style={{
                          color: INDIGO_CTA,
                        }}
                      >
                        CASE STUDY
                      </span>

                      <h3
                        className="font-heading ss-clamp-2 mt-2 text-[19px] font-semibold leading-snug"
                        style={{
                          color:
                            CHAMPION_BLUE,
                        }}
                      >
                        {study.title}
                      </h3>

                      <p className="font-body ss-clamp-3 mt-3 text-[14px] leading-relaxed text-slate-600">
                        {study.body}
                      </p>

                      <Link
                        href={`/services/cloud/casestudies/${study.slug}`}
                        className="font-body mt-6 inline-flex w-fit items-center gap-1.5 text-[14px] font-semibold transition-transform duration-200 hover:translate-x-1"
                        style={{
                          color: INDIGO_CTA,
                        }}
                      >
                        Learn More
                        <ArrowUpRight
                          size={15}
                        />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              )}
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          BLOGS / INSIGHTS
      ============================================================ */}

      <section className="bg-[#EEF0F7] py-24">
        <div className={ALIGN}>
          <Reveal className="flex items-center justify-between">
            <h2
              className="font-heading max-w-lg text-[36px] font-medium leading-[1.15] lg:text-[44px]"
              style={{
                color: CHAMPION_BLUE,
              }}
            >
              What's New in Cloud
              Engineering
            </h2>

            {/* FIXED VIEW ALL BLOGS LINK */}

            <Link
              href="/services/cloud/blogs"
              className="font-body hidden items-center gap-1.5 text-[15px] font-semibold transition-transform duration-200 hover:translate-x-1 sm:flex"
              style={{
                color: INDIGO_CTA,
              }}
            >
              View All Insights
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>

          <div className="mt-12">
            <Carousel
              itemCount={insights.length}
              arrowVariant="light"
              clickToAdvance={false}
            >
              {insights.map(
                (post, i) => (
                  <Reveal
                    key={post.slug}
                    delay={i * 90}
                    data-carousel-card
                    className={`flex-shrink-0 snap-start ${
                      post.large
                        ? "w-[420px]"
                        : "w-[340px]"
                    }`}
                  >
                    {/* =================================================
                        IMPORTANT:
                        Each blog card links to /blogs/[slug]
                    ================================================= */}

                    <Link
                      href={`/services/cloud/blogs/${post.slug}`}
                      className="block"
                    >
                      {post.large ? (
                        <div className="group relative h-[420px] overflow-hidden rounded-2xl">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />

                          <div className="absolute inset-x-4 bottom-4 rounded-xl bg-white/85 p-6 backdrop-blur transition-all duration-300 group-hover:bg-white/95">
                            <span
                              className="font-body text-[12px] font-semibold tracking-wide"
                              style={{
                                color:
                                  INDIGO_CTA,
                              }}
                            >
                              BLOG
                            </span>

                            <h3
                              className="font-heading ss-clamp-2 mt-2 text-[19px] font-semibold leading-snug"
                              style={{
                                color:
                                  CHAMPION_BLUE,
                              }}
                            >
                              {post.title}
                            </h3>

                            <p className="font-body ss-clamp-2 mt-2 text-[13px] leading-relaxed text-slate-600">
                              {post.body}
                            </p>

                            <span
                              className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold"
                              style={{
                                color:
                                  INDIGO_CTA,
                              }}
                            >
                              Read More
                              <ArrowUpRight
                                size={15}
                              />
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="group">
                          <div className="h-[220px] overflow-hidden rounded-2xl">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                          </div>

                          <div className="pt-5">
                            <span
                              className="font-body text-[12px] font-semibold tracking-wide"
                              style={{
                                color:
                                  INDIGO_CTA,
                              }}
                            >
                              BLOG
                            </span>

                            <h3
                              className="font-heading ss-clamp-2 mt-2 text-[19px] font-semibold leading-snug"
                              style={{
                                color:
                                  CHAMPION_BLUE,
                              }}
                            >
                              {post.title}
                            </h3>

                            <p className="font-body ss-clamp-3 mt-3 text-[14px] leading-relaxed text-slate-600">
                              {post.body}
                            </p>

                            <span
                              className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold"
                              style={{
                                color:
                                  INDIGO_CTA,
                              }}
                            >
                              Read More
                              <ArrowUpRight
                                size={15}
                              />
                            </span>
                          </div>
                        </div>
                      )}
                    </Link>
                  </Reveal>
                )
              )}
            </Carousel>
          </div>
        </div>
      </section>
    </main>
  );
}
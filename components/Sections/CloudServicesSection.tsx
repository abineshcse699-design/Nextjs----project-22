// Cloud Engineering Services

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
  Minus,
  Trophy,
} from "lucide-react";

/* ===============================================================
   BRAND TOKENS
================================================================ */

const CHAMPION_BLUE = "#1B2560";
const LAVENDER_ACCENT = "#A48FEA";
const INDIGO_CTA = "#4F3FE0";

const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

const TAB_AUTOPLAY_MS = 4000;

/* ===============================================================
   TYPOGRAPHY TOKENS
================================================================ */

const HERO_HEADING =
  "font-heading font-medium leading-[1.08] text-[46px] sm:text-[56px] lg:text-[66px]";

const SECTION_HEADING =
  "font-heading font-medium leading-[1.15] text-[34px] sm:text-[40px] lg:text-[46px]";

/* ===============================================================
   CONTENT
================================================================ */

const keyTakeaways = [
  {
    title: "Architect & Migrate",
    body: "Design well architected cloud blueprints and move workloads to AWS, Azure, or GCP through a structured migration approach designed to reduce disruption and keep business operations running.",
  },
  {
    title: "Modernize & Automate",
    body: "Build cloud native applications on modern, multi cloud architecture, backed by DevOps, CI/CD pipelines, and infrastructure as code that turn manual releases into repeatable automation.",
  },
  {
    title: "Operate & Optimize",
    body: "Continuously improve cloud cost, reliability, and security through FinOps, monitoring and observability, security controls, and proactive managed cloud operations.",
  },
];

type FocusArea = {
  title: string;
  body: string;
  tags: string[];
};

const focusAreas: FocusArea[] = [
  {
    title: "Cloud Architecture & Design",
    body: "Starfii designs well architected cloud blueprints across AWS, Azure, and GCP, covering landing zones, networking, and account structure before a single workload moves.",
    tags: ["ARCHITECTURE", "LANDING ZONES", "WELL-ARCHITECTED"],
  },
  {
    title: "Cloud Migration Services",
    body: "Starfii assesses workloads, sequences the migration plan around business risk, and moves systems to AWS, Azure, or GCP with minimal disruption to day to day operations.",
    tags: ["AWS", "AZURE", "GCP"],
  },
  {
    title: "Cloud Modernization",
    body: "Starfii refactors legacy monoliths into modular, cloud ready services, replacing brittle infrastructure with architecture that scales cleanly as the business grows.",
    tags: ["MODERNIZATION", "REFACTORING", "LEGACY SYSTEMS"],
  },
  {
    title: "Cloud Native Application Development",
    body: "As a cloud native application development company, Starfii builds with containers, microservices, and serverless architecture where they deliver the most value, not by default.",
    tags: ["CONTAINERS", "MICROSERVICES", "SERVERLESS"],
  },
  {
    title: "DevOps Engineering",
    body: "Starfii embeds DevOps practices across development and operations teams, aligning tooling, culture, and workflows so releases move faster without added risk.",
    tags: ["DEVOPS", "COLLABORATION", "AUTOMATION"],
  },
  {
    title: "CI/CD Pipeline Automation",
    body: "Starfii builds automated CI/CD pipelines that get code to production faster and safer, with testing, monitoring, and rollback built into every release.",
    tags: ["CI/CD", "TESTING", "RELEASE MANAGEMENT"],
  },
  {
    title: "Infrastructure Automation & IaC",
    body: "Starfii provisions cloud infrastructure as code with Terraform and native tooling, so environments stay consistent, version controlled, and repeatable across every stage.",
    tags: ["TERRAFORM", "IaC", "CONFIGURATION"],
  },
  {
    title: "Monitoring & Observability",
    body: "Starfii instruments applications and infrastructure with unified metrics, logs, and traces, giving teams the visibility to catch issues before they become incidents.",
    tags: ["OBSERVABILITY", "METRICS", "ALERTING"],
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
    title: "Kubernetes & Container Orchestration",
    body: "Starfii designs and operates Kubernetes clusters across AWS, Azure, and GCP, giving containerized workloads consistent scaling, deployment, and recovery wherever they run.",
    tags: ["KUBERNETES", "EKS/AKS/GKE", "ORCHESTRATION"],
  },
  {
    title: "Cloud Managed Services",
    body: "Starfii's managed services team monitors, patches, and optimizes your cloud environment around the clock, so internal teams stay focused on building product, not babysitting infrastructure.",
    tags: ["MANAGED", "SUPPORT", "OPERATIONS"],
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
    label: "Architecture: Design for Scale",
    heading:
      "Cloud architecture blueprints built for scale, security, and cost, before migration begins",
    body: "Starfii designs landing zones, network topology, and account structure across AWS, Azure, and GCP up front, so every workload that moves in has a foundation built to last.",
    image:
      "https://images.unsplash.com/photo-1664854953181-b12e6dda8b7c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Migration: Plan a Move That Fits",
    heading:
      "A cloud migration roadmap sequenced around business risk, not just technical ease",
    body: "Starfii assesses your workloads and builds a cloud migration plan that moves the right systems in the right order, so the business keeps running while the cloud foundation gets built underneath it.",
    image:
      "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Modernize: Cloud Native by Design",
    heading:
      "Applications modernized and engineered for the cloud, not just moved onto it",
    body: "Starfii refactors legacy systems and builds with containers, microservices, and serverless architecture where they genuinely help, so you get the elasticity, scalability, and resilience the cloud is meant to offer.",
    image:
      "https://images.unsplash.com/photo-1690627931320-16ac56eb2588?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "DevOps & CI/CD: Ship Faster, Safer",
    heading:
      "DevOps culture and CI/CD pipelines that get code to production faster, without sacrificing stability",
    body: "Starfii aligns development and operations around automated pipelines, with testing, monitoring, and rollback built into every release, so teams ship more often with less risk.",
    image:
      "https://images.unsplash.com/photo-1631624215749-b10b3dd7bca7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Automation: Infrastructure as Code",
    heading:
      "Infrastructure provisioned as code, so environments stay consistent and repeatable",
    body: "Starfii codifies infrastructure with Terraform and native tooling, replacing manual provisioning with version controlled environments that spin up the same way every time.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Observability: See Issues Before Impact",
    heading:
      "Monitoring and observability that surfaces problems before they become incidents",
    body: "Starfii unifies metrics, logs, and traces across your cloud estate into a single view, with alerting tuned to cut noise so on call teams act on what actually matters.",
    image:
      "https://images.unsplash.com/photo-1655000278839-b7d7b11251c5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Security: Secure by Design",
    heading: "Cloud security built into the architecture, not added after launch",
    body: "Starfii embeds identity, network, and compliance controls into the cloud environment from the start, so security scales alongside the workloads it protects.",
    image:
      "https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Managed Services: Run With Confidence",
    heading:
      "Cloud operations and managed services that keep environments running around the clock",
    body: "Starfii's managed services and SRE led operations team monitors, patches, and responds to incidents across your AWS, Azure, and GCP estate, so reliability holds steady as workloads multiply.",
    image:
      "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?q=80&w=1200&auto=format&fit=crop",
  },
];

/* ===============================================================
   IMPACT ACROSS YOUR CLOUD INFRASTRUCTURE
   Now carries a body per item so it can expand like the
   Software & Product Engineering ecosystem accordion.
================================================================ */

type EcosystemImpact = { title: string; body: string };

const ecosystemImpact: EcosystemImpact[] = [
  {
    title: "Cloud Architecture and Multi Cloud Design",
    body: "Design well architected blueprints across AWS, Azure, and GCP. Starfii sets up landing zones, network topology, and account structure before a single workload moves, so every system that lands in the cloud sits on a foundation built for scale, security, and predictable cost.",
  },
  {
    title: "Cloud Migration and Modernization",
    body: "Assess your workloads, sequence the migration around business risk, and refactor legacy monoliths into modular, cloud ready services. Starfii moves the right systems in the right order, so the business keeps running while the new foundation gets built underneath it.",
  },
  {
    title: "Cloud Native Application Development",
    body: "Build with containers, microservices, and serverless architecture where they deliver real value, not by default. Starfii engineers cloud native applications that scale elastically, recover cleanly, and take full advantage of the platform they run on.",
  },
  {
    title: "DevOps and CI/CD Automation",
    body: "Align development and operations around automated pipelines. Starfii builds CI/CD with testing, monitoring, and rollback wired into every release, so teams ship more often with less risk and quality stays a gate rather than an afterthought.",
  },
  {
    title: "Infrastructure Automation and IaC",
    body: "Provision cloud infrastructure as code with Terraform and native tooling. Starfii replaces manual setup with version controlled environments that spin up the same way every time, across development, staging, and production.",
  },
  {
    title: "Monitoring and Observability",
    body: "Unify metrics, logs, and traces across your cloud estate into a single view. Starfii tunes alerting to cut noise so on call teams act on what actually matters and issues get caught long before they become incidents.",
  },
  {
    title: "Cloud Security and Compliance Engineering",
    body: "Embed identity, network, and compliance controls into the environment from day one. Starfii builds security into the architecture itself, so protection scales alongside the workloads it covers instead of being bolted on after launch.",
  },
  {
    title: "Cloud Managed Services and Operations",
    body: "Keep environments running around the clock with SRE led operations. Starfii monitors, patches, and responds to incidents across your AWS, Azure, and GCP estate, so reliability holds steady as workloads multiply and internal teams stay focused on product.",
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
    category: "Public Cloud Solutions and Service Providers",
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
    subcategory: "CI/CD and Site Reliability Engineering",
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
    image:
      "https://images.unsplash.com/photo-1683322499436-f4383dd59f5a?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Migrates a Global Reinsurer's Core Systems to AWS",
    body: "See how Starfii sequenced a zero downtime migration of core claims systems to AWS, cutting infrastructure cost while improving failover time for a global reinsurer.",
  },
  {
    slug: "regional-bank-multi-cloud-modernization",
    image:
      "https://images.unsplash.com/photo-1545987796-200677ee1011?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Builds a Multi Cloud Foundation for a Regional Bank",
    body: "Explore how Starfii's multi cloud architecture gave a regional bank vendor flexibility across AWS and Azure while meeting strict data residency and compliance requirements.",
  },
  {
    slug: "utilities-kubernetes-platform",
    image:
      "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?q=80&w=900&auto=format&fit=crop",
    title:
      "Starfii Modernizes Field Operations with a Kubernetes Platform on GCP",
    body: "Discover how Starfii's Kubernetes platform on GCP gave a utilities provider real time visibility across the grid while cutting deployment time from days to minutes.",
  },
  {
    slug: "healthcare-finops-cost-optimization",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=900&auto=format&fit=crop",
    title: "Starfii Cuts Cloud Spend 34 Percent for a Healthcare SaaS Platform",
    body: "Learn how Starfii's FinOps program right sized compute and storage across a healthcare SaaS platform without touching uptime or HIPAA compliance.",
  },
  {
    slug: "ecommerce-sre-uptime-program",
    image:
      "https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=900&auto=format&fit=crop",
    title: "Starfii's SRE Program Lifts Uptime for a Fortune 500 Retailer",
    body: "See how Starfii's site reliability engineering practice reduced incident response time and lifted uptime during peak shopping seasons for a Fortune 500 retailer.",
  },
];

/* ===============================================================
   BLOGS / INSIGHTS
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
    image:
      "https://images.unsplash.com/photo-1664854953181-b12e6dda8b7c?q=80&w=1200&auto=format&fit=crop",
    title:
      "Multi Cloud Architecture: Designing for Flexibility Without Losing Control",
    body: "Explore how Starfii designs multi cloud architecture across AWS, Azure, and GCP that gives enterprises vendor flexibility while keeping governance and cost under control.",
  },
  {
    slug: "finops-cloud-waste-performance",
    large: false,
    image:
      "https://images.unsplash.com/photo-1560221328-12fe60f83ab8?q=80&w=800&auto=format&fit=crop",
    title: "FinOps in Practice: Cutting Cloud Waste Without Cutting Performance",
    body: "Stop overpaying for idle compute. See how Starfii's FinOps practice identifies waste and right sizes workloads, often cutting cloud spend by 25 to 35 percent.",
  },
  {
    slug: "site-reliability-engineering-cloud-scale",
    large: false,
    image:
      "https://images.unsplash.com/photo-1655000278839-b7d7b11251c5?q=80&w=800&auto=format&fit=crop",
    title: "Site Reliability Engineering: Keeping Uptime High as Systems Scale",
    body: "Stop firefighting incidents. See how Starfii's SRE practice combines automation and observability to keep uptime high as cloud environments grow more complex.",
  },
  {
    slug: "cloud-security-by-design",
    large: false,
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    title: "Cloud Security by Design: Protecting Modern Infrastructure",
    body: "Explore how Starfii builds identity, network, monitoring, and compliance controls into cloud architecture so security scales with every workload.",
  },
  {
    slug: "devops-cicd-cloud-reliability",
    large: false,
    image:
      "https://images.unsplash.com/photo-1631624215749-b10b3dd7bca7?q=80&w=800&auto=format&fit=crop",
    title: "DevOps and CI/CD: Shipping Faster Without Sacrificing Reliability",
    body: "See how Starfii automates testing, deployment, monitoring, and rollback to help cloud teams release faster while keeping production stable.",
  },
];

/* ===============================================================
   ANIMATIONS
================================================================ */

function AnimationStyles(): ReactElement {
  return (
    <style>{`
      @keyframes ss-fade-up {
        from { opacity: 0; transform: translateY(28px) scale(0.97); }
        to   { opacity: 1; transform: translateY(0) scale(1); }
      }
      @keyframes ss-fade-in {
        from { opacity: 0; }
        to   { opacity: 1; }
      }
      @keyframes ss-drift {
        0%   { transform: translate3d(0, 0, 0) scale(1); }
        50%  { transform: translate3d(-2%, 2%, 0) scale(1.06); }
        100% { transform: translate3d(0, 0, 0) scale(1); }
      }
      @keyframes ss-pulse-soft {
        0%, 100% { opacity: 0.55; }
        50%      { opacity: 1; }
      }
      @keyframes ss-tab-progress {
        from { transform: scaleY(0); }
        to   { transform: scaleY(1); }
      }
      @keyframes ss-caret-blink {
        0%, 100% { opacity: 1; }
        50%      { opacity: 0; }
      }

      .ss-reveal { opacity: 0; }
      .ss-reveal.ss-in-view {
        animation: ss-fade-up 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      }
      .ss-tab-panel { animation: ss-fade-in 0.45s ease-out; }
      .ss-drift-slow { animation: ss-drift 16s ease-in-out infinite; }
      .ss-drift-slower { animation: ss-drift 22s ease-in-out infinite reverse; }
      .ss-arrow-pulse:not(:disabled):hover {
        animation: ss-pulse-soft 1.2s ease-in-out infinite;
      }
      .ss-caret { animation: ss-caret-blink 0.9s steps(1) infinite; }

      .ss-award-card {
        transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
          box-shadow 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        box-shadow: 0 0 0 rgba(164, 143, 234, 0);
      }
      .ss-award-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 22px 45px -18px rgba(79, 63, 224, 0.55),
          0 0 0 1px rgba(164, 143, 234, 0.35);
      }
      .ss-award-card:hover .ss-trophy {
        transform: rotate(-14deg) scale(1.15);
      }
      .ss-trophy {
        transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      .ss-focus-card {
        transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
          border-color 0.4s ease, background-color 0.4s ease;
      }
      .ss-focus-card:hover {
        transform: translateY(-6px);
        border-color: rgba(164, 143, 234, 0.55);
        background-color: #14121F;
      }
      .ss-focus-card:hover .ss-focus-arrow {
        transform: rotate(45deg);
        background-color: ${INDIGO_CTA};
        border-color: ${INDIGO_CTA};
      }
      .ss-focus-arrow {
        transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
          background-color 0.3s ease, border-color 0.3s ease;
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
        .ss-reveal, .ss-tab-panel, .ss-drift-slow, .ss-drift-slower, .ss-arrow-pulse, .ss-caret {
          animation: none !important;
          opacity: 1 !important;
          transform: none !important;
        }
        .ss-tab-progress-fill {
          animation: none !important;
          transform: scaleY(1) !important;
        }
        .ss-case-image,
        .ss-case-desc,
        .ss-zoom-img,
        .ss-eco-panel {
          transition: none !important;
        }
        .ss-case-desc {
          max-height: none !important;
          opacity: 1 !important;
          transform: none !important;
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
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

/* ===============================================================
   RESPONSIVE ITEMS
================================================================ */

type Breakpoints = { mobile: number; tablet: number; desktop: number };

function useItemsPerPage({ mobile, tablet, desktop }: Breakpoints): number {
  const [count, setCount] = useState(desktop);

  useEffect(() => {
    const mqTablet = window.matchMedia("(max-width: 1023px)");
    const mqMobile = window.matchMedia("(max-width: 639px)");

    const update = () => {
      if (mqMobile.matches) setCount(mobile);
      else if (mqTablet.matches) setCount(tablet);
      else setCount(desktop);
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
  const [ref, inView] = useReveal<HTMLElement>();

  return (
    <Tag
      ref={ref as Ref<HTMLElement>}
      className={`ss-reveal ${inView ? "ss-in-view" : ""} ${className}`}
      style={{ animationDelay: inView ? `${delay}ms` : undefined }}
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
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateProgress = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const pct = maxScroll <= 0 ? 1 : el.scrollLeft / maxScroll;
    setProgress(pct);
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= maxScroll - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    updateProgress();
    if (!el) return undefined;
    el.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      el.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [updateProgress]);

  const scrollByCard = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard
      ? firstCard.getBoundingClientRect().width + 24
      : 320;
    el.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  };

  const isDark = arrowVariant === "dark";

  return (
    <div>
      <div
        ref={trackRef}
        onClick={
          clickToAdvance
            ? (event) => {
                const target = event.target as HTMLElement;
                if (target.closest("[data-carousel-card]")) {
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
          style={{ backgroundColor: isDark ? "rgba(255,255,255,0.18)" : "#E5E1F5" }}
        >
          <div
            className="h-full rounded-full transition-[width] duration-300 ease-out"
            style={{
              width: `${Math.max(progress * 100, itemCount ? 100 / itemCount : 10)}%`,
              backgroundColor: INDIGO_CTA,
            }}
          />
        </div>

        <div className="flex flex-shrink-0 items-center gap-3">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => scrollByCard(-1)}
            disabled={atStart}
            className="ss-arrow-pulse flex h-11 w-11 items-center justify-center rounded-full transition-all duration-200 hover:scale-110 disabled:opacity-40 disabled:hover:scale-100"
            style={{
              backgroundColor: isDark ? "rgba(255,255,255,0.12)" : "#E5E1F5",
              color: isDark ? "#fff" : CHAMPION_BLUE,
            }}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => scrollByCard(1)}
            disabled={atEnd}
            className="ss-arrow-pulse flex h-11 w-11 items-center justify-center rounded-full text-white transition-all duration-200 hover:scale-110 disabled:opacity-40 disabled:hover:scale-100"
            style={{ backgroundColor: INDIGO_CTA }}
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
   Same as the Software & Product Engineering page: supports a
   fractional perPage (peek card) and a configurable gap.
================================================================ */

type StepCarouselProps<T> = {
  items: T[];
  itemsPerPage: Breakpoints;
  renderItem: (item: T, index: number) => ReactNode;
  arrowVariant?: "light" | "dark";
  gap?: number; // px gap between cards
};

function StepCarousel<T>({
  items,
  itemsPerPage,
  renderItem,
  arrowVariant = "light",
  gap = 24,
}: StepCarouselProps<T>): ReactElement {
  const perPage = useItemsPerPage(itemsPerPage);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const [position, setPosition] = useState(0);
  const [stepWidth, setStepWidth] = useState(0);

  // Math.ceil so a fractional perPage (e.g. 1.15 for a "peek" card)
  // still lands on a whole card instead of stopping mid-card.
  const maxPosition = Math.max(0, Math.ceil(items.length - perPage));
  const totalPositions = Math.max(1, maxPosition + 1);
  const isDark = arrowVariant === "dark";

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.firstElementChild as HTMLElement | null;
    if (!firstCard) return;

    setStepWidth(firstCard.getBoundingClientRect().width + gap);
  }, [gap]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(track);

    const firstCard = track.firstElementChild as HTMLElement | null;
    if (firstCard) observer.observe(firstCard);

    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure, perPage]);

  useEffect(() => {
    setPosition((current) => Math.min(current, maxPosition));
  }, [maxPosition]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    track.scrollTo({
      left: position * stepWidth,
      behavior: "smooth",
    });
  }, [position, stepWidth]);

  const goTo = (nextPosition: number) => {
    const next = Math.min(Math.max(nextPosition, 0), maxPosition);
    setPosition(next);
  };

  const progress = ((position + 1) / totalPositions) * 100;

  return (
    <div>
      <div
        ref={trackRef}
        className="flex overflow-x-auto pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollBehavior: "smooth", gap: `${gap}px` }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="min-w-0 flex-shrink-0 snap-start"
            style={{
              width:
                perPage === 1
                  ? "100%"
                  : `calc((100% - ${(perPage - 1) * gap}px) / ${perPage})`,
            }}
          >
            {renderItem(item, i)}
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-6">
        <div
          className="h-[3px] flex-1 overflow-hidden rounded-full"
          style={{ backgroundColor: isDark ? "rgba(255,255,255,0.18)" : "#E5E1F5" }}
        >
          <div
            className="h-full rounded-full transition-[width] duration-300 ease-out"
            style={{ width: `${progress}%`, backgroundColor: INDIGO_CTA }}
          />
        </div>

        <span
          className="font-body flex-shrink-0 text-[13px] font-medium tabular-nums"
          style={{ color: isDark ? "rgba(255,255,255,0.55)" : "#94A3B8" }}
        >
          {String(position + 1).padStart(2, "0")} /{" "}
          {String(totalPositions).padStart(2, "0")}
        </span>

        <div className="flex flex-shrink-0 items-center gap-3">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => goTo(position - 1)}
            disabled={position === 0}
            className="ss-arrow-pulse flex h-11 w-11 items-center justify-center rounded-full transition-all duration-200 hover:scale-110 disabled:opacity-40 disabled:hover:scale-100"
            style={{
              backgroundColor: isDark ? "rgba(255,255,255,0.12)" : "#E5E1F5",
              color: isDark ? "#fff" : CHAMPION_BLUE,
            }}
          >
            <ChevronLeft size={18} />
          </button>

          <button
            type="button"
            aria-label="Next"
            onClick={() => goTo(position + 1)}
            disabled={position === maxPosition}
            className="ss-arrow-pulse flex h-11 w-11 items-center justify-center rounded-full text-white transition-all duration-200 hover:scale-110 disabled:opacity-40 disabled:hover:scale-100"
            style={{ backgroundColor: INDIGO_CTA }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ===============================================================
   ECOSYSTEM ACCORDION
   Click the "+" and the matching content expands in place.
   Two independent columns, so opening a card on the left does not
   stretch the card sitting next to it on the right.
================================================================ */

function EcosystemAccordion(): ReactElement {
  // null = everything closed. 0 keeps the first card open by default.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const columns: { item: EcosystemImpact; index: number }[][] = [[], []];
  ecosystemImpact.forEach((item, index) => {
    const target = columns[index % 2];
    if (target) target.push({ item, index });
  });

  return (
    <div className="mt-14 grid grid-cols-1 items-start gap-5 sm:grid-cols-2">
      {columns.map((column, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-5">
          {column.map(({ item, index }) => {
            const isOpen = openIndex === index;

            return (
              <Reveal key={item.title} delay={index * 80}>
                <div
                  className="overflow-hidden rounded-2xl bg-white transition-shadow duration-300 hover:shadow-xl"
                  style={{
                    boxShadow: isOpen
                      ? "0 18px 40px rgba(15,23,42,0.18)"
                      : undefined,
                  }}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`cloud-ecosystem-panel-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 px-8 py-7 text-left"
                  >
                    <span
                      className="font-body text-[19px] font-medium leading-snug transition-colors duration-300"
                      style={{ color: isOpen ? INDIGO_CTA : CHAMPION_BLUE }}
                    >
                      {item.title}
                    </span>

                    <span
                      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300"
                      style={{
                        backgroundColor: isOpen ? "#E5E1F5" : INDIGO_CTA,
                        color: isOpen ? "#8B93A7" : "#FFFFFF",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>

                  {/* 0fr -> 1fr gives a smooth auto-height expand */}
                  <div
                    id={`cloud-ecosystem-panel-${index}`}
                    className="ss-eco-panel grid transition-all duration-500 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="font-body px-8 pb-8 text-[15px] leading-[1.75] transition-opacity duration-500"
                        style={{ color: CHAMPION_BLUE, opacity: isOpen ? 1 : 0 }}
                      >
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      ))}
    </div>
  );
}

/* ===============================================================
   CLOUD SERVICES SECTION
================================================================ */

export default function CloudServicesSection(): ReactElement {
  const [activeTab, setActiveTab] = useState(0);
  const [tabHovered, setTabHovered] = useState(false);
  const current = tabs[activeTab];

  useEffect(() => {
    if (tabHovered) return undefined;
    const id = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, TAB_AUTOPLAY_MS);
    return () => clearInterval(id);
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

        <div className={`${ALIGN} py-24 lg:py-32`}>
          <nav
            aria-label="Breadcrumb"
            className="font-body flex items-center gap-2 text-[14px] font-medium opacity-0"
            style={{
              color: CHAMPION_BLUE,
              animation: "ss-fade-up 0.6s ease-out 0.05s forwards",
            }}
          >
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight size={14} />
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <ChevronRight size={14} />
            <span className="text-slate-500">Cloud Engineering</span>
          </nav>

          <h1
            className={`${HERO_HEADING} mt-8 max-w-xl opacity-0`}
            style={{
              color: CHAMPION_BLUE,
              animation: "ss-fade-up 0.7s ease-out 0.15s forwards",
            }}
          >
            Cloud Engineering Services on AWS, Azure &amp; GCP
          </h1>

          <p
            className="font-body mt-6 max-w-lg text-[17px] leading-relaxed text-slate-600 opacity-0"
            style={{ animation: "ss-fade-up 0.7s ease-out 0.28s forwards" }}
          >
            Starfii architects, migrates, modernizes, and runs workloads on
            AWS, Azure, and GCP, backed by DevOps, CI/CD, and infrastructure
            automation built for performance, security, and cost control
            from day one.
          </p>

          <a
            href="#connect"
            className="font-body mt-9 inline-flex items-center gap-2 rounded-full px-7 py-4 text-[15px] font-semibold text-white opacity-0 transition-transform duration-300 hover:scale-[1.03]"
            style={{
              backgroundColor: CHAMPION_BLUE,
              animation: "ss-fade-up 0.7s ease-out 0.4s forwards",
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

        <Reveal as="section" className="mt-16">
          <div
            className="overflow-hidden rounded-[22px] border bg-white"
            style={{ borderColor: LAVENDER_ACCENT }}
          >
            <div
              className="flex min-h-[104px] items-center justify-between px-8 py-6 lg:px-10"
              style={{ borderBottom: `1px solid ${LAVENDER_ACCENT}` }}
            >
              <div className="flex items-center gap-3">
                <Sparkles size={21} strokeWidth={1.8} style={{ color: LAVENDER_ACCENT }} />
                <span className="font-body text-[17px] font-semibold" style={{ color: CHAMPION_BLUE }}>
                  Cloud Engineering at a Glance
                </span>
              </div>

              <span
                className="font-body hidden rounded-full px-5 py-2.5 text-[13px] font-semibold sm:inline-flex"
                style={{ backgroundColor: "#F1EEFC", color: INDIGO_CTA }}
              >
                AWS • Azure • GCP
              </span>
            </div>

            <div className="grid grid-cols-1 gap-10 px-8 py-10 md:grid-cols-3 lg:px-10">
              {keyTakeaways.map((point) => (
                <div key={point.title}>
                  <h3 className="font-heading text-[23px] font-semibold" style={{ color: CHAMPION_BLUE }}>
                    {point.title}
                  </h3>
                  <p className="font-body mt-4 text-[15px] leading-[1.8] text-slate-600">
                    {point.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p
            className="font-heading mt-10 max-w-3xl text-[26px] leading-snug lg:text-[30px]"
            style={{ color: CHAMPION_BLUE }}
          >
            A specialist cloud engineering partner, Starfii designs and runs
            cloud environments on AWS, Azure, and GCP that balance
            performance, security, and cost as you scale.
          </p>
        </Reveal>

        {/* ============================================================
            Q&A
        ============================================================ */}

        <Reveal as="section" className="mt-20">
          <div
            className="grid grid-cols-1 items-center gap-10 rounded-2xl p-10 lg:grid-cols-2"
            style={{ backgroundColor: "#F5F3FC" }}
          >
            <div>
              <h2
                className="font-heading text-[26px] font-medium leading-snug lg:text-[30px]"
                style={{ color: LAVENDER_ACCENT }}
              >
                How Do Enterprises Move to the Cloud Without Losing Control?
              </h2>
              <p className="font-body mt-5 text-[15px] leading-relaxed text-slate-600">
                Enterprises stay in control during cloud adoption by
                sequencing migration around business risk, designing cloud
                native applications from the start, and automating delivery
                through DevOps, CI/CD, and infrastructure as code, while
                treating cost, security, and observability as ongoing FinOps
                and compliance practices.
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

        <div className={`relative ${ALIGN}`}>
          <Reveal className="max-w-xl">
            <h2 className={`${SECTION_HEADING} text-white`}>
              Our Cloud Engineering Capabilities
            </h2>
            <p className="font-body mt-5 text-[15px] leading-relaxed text-white/60">
              Starfii migrates, builds, and operates on AWS, Azure, and GCP
              with architecture designed for scale, resilience, and
              predictable cost.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {focusAreas.map((area, i) => (
              <Reveal key={area.title} delay={(i % 3) * 90} className="h-full">
                <div
                  className="ss-focus-card flex h-full flex-col justify-between rounded-2xl border p-8"
                  style={{ backgroundColor: "#0F0E18", borderColor: "rgba(255,255,255,0.10)" }}
                >
                  <div className="flex items-start justify-between">
                    <span className="font-body text-[13px] font-medium text-white/35">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="ss-focus-arrow flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border"
                      style={{ borderColor: "rgba(255,255,255,0.18)" }}
                    >
                      <ArrowUpRight size={16} className="text-white" />
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
                    {area.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-body rounded-full border px-3 py-1 text-[11px] font-medium tracking-wide text-white/50"
                        style={{ borderColor: "rgba(255,255,255,0.16)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className={ALIGN}>
        {/* ============================================================
            TABS
        ============================================================ */}

        <Reveal as="section" className="mt-24 pb-28">
          <h2 className={SECTION_HEADING} style={{ color: CHAMPION_BLUE }}>
            Cloud Services, Explained
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[320px_1fr]">
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

            <div
              key={activeTab}
              className="ss-tab-panel grid grid-cols-1 overflow-hidden rounded-2xl md:grid-cols-2 md:h-[420px]"
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
          IMPACT ACROSS YOUR CLOUD INFRASTRUCTURE (dark)
          Same accordion behaviour as the Software & Product
          Engineering ecosystem section: click "+" to expand in place.
      ============================================================ */}

      <section className="relative overflow-hidden bg-[#08070F] py-24">
        <div
          className="ss-drift-slow pointer-events-none absolute inset-y-0 right-0 w-[55%]"
          style={{
            background:
              "radial-gradient(60% 90% at 100% 100%, rgba(232,110,90,0.55) 0%, rgba(164,143,234,0.35) 35%, rgba(8,7,15,0) 70%)",
          }}
        />
        <div
          className="ss-drift-slower pointer-events-none absolute inset-y-0 left-0 w-[35%]"
          style={{
            background:
              "radial-gradient(60% 80% at 0% 100%, rgba(63,90,214,0.35) 0%, rgba(8,7,15,0) 70%)",
          }}
        />

        <div className={`relative ${ALIGN}`}>
          <Reveal>
            <h2 className={`${SECTION_HEADING} max-w-2xl text-white`}>
              Impact Across Your Cloud
              <br />
              Infrastructure
            </h2>
          </Reveal>

          <EcosystemAccordion />
        </div>
      </section>

      {/* ============================================================
          CASE STUDIES
          Card sizing and hover behaviour now match the Software &
          Product Engineering page exactly: 500px fixed card height,
          260px image frame that collapses to 0 on hover, description
          sliding into the space the image gives up, 4 per row on
          desktop with a 32px gap and a peek card on mobile.
      ============================================================ */}

      <section
        className="py-24"
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #E9E4FB 45%, #C9BEF5 100%)",
        }}
      >
        <div className={ALIGN}>
          <Reveal className="flex items-center justify-between">
            <h2 className={SECTION_HEADING} style={{ color: CHAMPION_BLUE }}>
              Case Studies
            </h2>

            <Link
              href="/services/cloud/casestudies"
              className="font-body hidden items-center gap-1.5 text-[15px] font-semibold transition-transform duration-200 hover:translate-x-1 sm:flex"
              style={{ color: INDIGO_CTA }}
            >
              View All Case Studies
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>

          <div className="mt-12">
            <StepCarousel
              items={caseStudies}
              itemsPerPage={{
                mobile: 1.15,
                tablet: 2,
                desktop: 4,
              }}
              gap={32}
              arrowVariant="light"
              renderItem={(study, i) => (
                <Reveal delay={(i % 3) * 90} className="h-full">
                  <Link
                    href={`/services/cloud/casestudies/${study.slug}`}
                    aria-label={`Read case study: ${study.title}`}
                    className="group flex h-[500px] flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_2px_rgba(15,23,42,0.06)] transition-shadow duration-500 ease-out hover:shadow-[0_18px_40px_rgba(15,23,42,0.14)]"
                    style={{ border: "1px solid #E5E1F5" }}
                  >
                    {/* IMAGE FRAME — height animates 260px → 0 on hover */}
                    <div className="ss-case-image h-[260px] w-full shrink-0 overflow-hidden bg-slate-900 transition-[height] duration-[800ms] ease-in-out group-hover:h-0">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* CONTENT — flex-1 grows into the space the image gives up */}
                    <div className="flex flex-1 flex-col gap-3.5 overflow-hidden p-7">
                      <div className="flex flex-1 flex-col gap-3.5 overflow-hidden">
                        <span
                          className="font-body shrink-0 text-[12px] font-semibold tracking-[0.08em]"
                          style={{ color: INDIGO_CTA }}
                        >
                          CASE STUDY
                        </span>

                        <h3
                          className="font-heading shrink-0 text-[20px] font-semibold leading-snug"
                          style={{ color: CHAMPION_BLUE }}
                        >
                          {study.title}
                        </h3>

                        {/* DESCRIPTION — hidden at rest, fades + slides in on hover */}
                        <p className="ss-case-desc font-body max-h-0 -translate-y-2 text-[15px] leading-relaxed text-slate-500 opacity-0 transition-all duration-[800ms] ease-in-out group-hover:max-h-40 group-hover:translate-y-0 group-hover:opacity-100">
                          {study.body}
                        </p>
                      </div>

                      {/* CTA — sliding underline reveal */}
                      <span
                        className="font-body mt-auto inline-flex w-fit shrink-0 items-center gap-1.5 pt-2 text-[16px] font-medium"
                        style={{ color: INDIGO_CTA }}
                      >
                        <span className="relative">
                          Learn More
                          <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-current transition-[width] duration-500 ease-out group-hover:w-full" />
                        </span>
                        <ArrowUpRight
                          size={16}
                          className="transition-transform duration-500 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </span>
                    </div>
                  </Link>
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
            <h2 className={`${SECTION_HEADING} max-w-lg`} style={{ color: CHAMPION_BLUE }}>
              What&apos;s New in Cloud Engineering
            </h2>

            <Link
              href="/services/cloud/blogs"
              className="font-body hidden items-center gap-1.5 text-[15px] font-semibold transition-transform duration-200 hover:translate-x-1 sm:flex"
              style={{ color: INDIGO_CTA }}
            >
              View All Insights
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>

          <div className="mt-12">
            <Carousel itemCount={insights.length} arrowVariant="light" clickToAdvance={false}>
              {insights.map((post, i) => (
                <Reveal
                  key={post.slug}
                  delay={i * 90}
                  data-carousel-card
                  className={`flex-shrink-0 snap-start ${post.large ? "w-[420px]" : "w-[340px]"}`}
                >
                  <Link href={`/services/cloud/blogs/${post.slug}`} className="block">
                    {post.large ? (
                      <div className="group relative h-[420px] overflow-hidden rounded-2xl transition-[height] duration-500 ease-in-out hover:h-[460px]">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="ss-zoom-img h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />

                        <div className="absolute inset-x-4 bottom-4 rounded-xl bg-white/85 p-6 backdrop-blur transition-all duration-300 group-hover:bg-white/95">
                          <span className="font-body text-[12px] font-semibold tracking-wide" style={{ color: INDIGO_CTA }}>
                            BLOG
                          </span>

                          <h3
                            className="font-heading ss-clamp-2 mt-2 text-[19px] font-semibold leading-snug"
                            style={{ color: CHAMPION_BLUE }}
                          >
                            {post.title}
                          </h3>

                          <p className="font-body ss-clamp-2 mt-2 text-[13px] leading-relaxed text-slate-600">
                            {post.body}
                          </p>

                          <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold" style={{ color: INDIGO_CTA }}>
                            Read More
                            <ArrowUpRight size={15} />
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="group">
                        <div className="h-[220px] overflow-hidden rounded-2xl transition-[height] duration-500 ease-in-out group-hover:h-[260px]">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="ss-zoom-img h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                          />
                        </div>

                        <div className="pt-5">
                          <span className="font-body text-[12px] font-semibold tracking-wide" style={{ color: INDIGO_CTA }}>
                            BLOG
                          </span>

                          <h3
                            className="font-heading ss-clamp-2 mt-2 text-[19px] font-semibold leading-snug"
                            style={{ color: CHAMPION_BLUE }}
                          >
                            {post.title}
                          </h3>

                          <p className="font-body ss-clamp-3 mt-3 text-[14px] leading-relaxed text-slate-600">
                            {post.body}
                          </p>

                          <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold" style={{ color: INDIGO_CTA }}>
                            Read More
                            <ArrowUpRight size={15} />
                          </span>
                        </div>
                      </div>
                    )}
                  </Link>
                </Reveal>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </main>
  );
}
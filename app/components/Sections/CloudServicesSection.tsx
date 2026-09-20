// Cloud Engineering Services

"use client";

import Link from "next/link";
import GetInTouch from "../../services/cloud/GetinTouch";
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
  ChevronDown,
  Sparkles,
  ArrowUpRight,
  
  Plus,
  Minus,
} from "lucide-react";

/* ===============================================================
   BRAND TOKENS
================================================================ */

const CHAMPION_BLUE = "#1B2560";
const LAVENDER_ACCENT = "#A48FEA";
const INDIGO_CTA = "#4F3FE0";

const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

const TAB_AUTOPLAY_MS = 4000;

// Shared card gap for Cloud Engineering carousels.
const CARD_GAP = 24;

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
    body: "Starfii designs landing zones, network topology, and account structure across AWS, Azure, and GCP up front, so every workload that moves in has a foundation built to last. We define the right compute, storage, networking, identity, and governance patterns based on your workloads and growth plans. This gives teams a consistent cloud foundation that is easier to manage, secure, and scale as new applications and environments are added.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=90&w=1400&auto=format&fit=crop",
  },
  {
    label: "Migration: Plan a Move That Fits",
    heading:
      "A cloud migration roadmap sequenced around business risk, not just technical ease",
    body: "Starfii assesses your workloads and builds a cloud migration plan that moves the right systems in the right order, so the business keeps running while the cloud foundation gets built underneath it. We evaluate application dependencies, infrastructure requirements, data movement, security considerations, and operational constraints before defining the migration sequence. This helps reduce disruption, identify risks early, and create a practical path from legacy infrastructure to a scalable cloud environment.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=90&w=1400&auto=format&fit=crop",
  },
  {
    label: "Modernize: Cloud Native by Design",
    heading:
      "Applications modernized and engineered for the cloud, not just moved onto it",
    body: "Starfii refactors legacy systems and builds with containers, microservices, and serverless architecture where they genuinely help, so you get the elasticity, scalability, and resilience the cloud is meant to offer. We identify which applications need deeper modernization and which can be migrated with minimal change, avoiding unnecessary rework. The result is an application environment that can scale with demand, recover more reliably, and evolve faster as business requirements change.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=90&w=1400&auto=format&fit=crop",
  },
  {
    label: "DevOps & CI/CD: Ship Faster, Safer",
    heading:
      "DevOps culture and CI/CD pipelines that get code to production faster, without sacrificing stability",
    body: "Starfii aligns development and operations around automated pipelines, with testing, monitoring, and rollback built into every release, so teams ship more often with less risk. We automate build, test, deployment, and release processes while creating consistent environments across development, staging, and production. This reduces manual intervention, shortens release cycles, and gives engineering teams greater confidence when delivering new features and fixes.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=90&w=1400&auto=format&fit=crop",
  },
  {
    label: "Automation: Infrastructure as Code",
    heading:
      "Infrastructure provisioned as code, so environments stay consistent and repeatable",
    body: "Starfii codifies infrastructure with Terraform and native tooling, replacing manual provisioning with version controlled environments that spin up the same way every time. Infrastructure changes can be reviewed, tracked, tested, and reused across environments, reducing configuration drift and deployment errors. This makes it easier to create new environments quickly, manage infrastructure at scale, and maintain a consistent operating model across your cloud estate.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=90&w=1400&auto=format&fit=crop",
  },
  {
    label: "Observability: See Issues Before Impact",
    heading:
      "Monitoring and observability that surfaces problems before they become incidents",
    body: "Starfii unifies metrics, logs, and traces across your cloud estate into a single view, with alerting tuned to cut noise so on call teams act on what actually matters. We establish meaningful service health indicators, performance visibility, and actionable alerts across applications and infrastructure. This helps teams understand what is happening in real time, identify emerging issues earlier, and troubleshoot incidents faster when something goes wrong.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=90&w=1400&auto=format&fit=crop",
  },
  {
    label: "Security: Secure by Design",
    heading: "Cloud security built into the architecture, not added after launch",
    body: "Starfii embeds identity, network, and compliance controls into the cloud environment from the start, so security scales alongside the workloads it protects. We establish access policies, network boundaries, encryption practices, and security controls around the way your applications and teams actually operate. By making security part of the architecture and deployment process, organizations can reduce exposure while maintaining the flexibility needed to scale cloud workloads.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=90&w=1400&auto=format&fit=crop",
  },
  {
    label: "Managed Services: Run With Confidence",
    heading:
      "Cloud operations and managed services that keep environments running around the clock",
    body: "Starfii's managed services and SRE led operations team monitors, patches, and responds to incidents across your AWS, Azure, and GCP estate, so reliability holds steady as workloads multiply. We support day to day cloud operations, infrastructure health, performance monitoring, incident response, and ongoing optimization. With continuous operational oversight and proactive maintenance, your internal teams can focus on product and business priorities while the cloud environment remains stable, secure, and ready to scale.",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=90&w=1400&auto=format&fit=crop",
  },
];



/* ===============================================================
   IMPACT ACROSS YOUR CLOUD INFRASTRUCTURE
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
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=90&w=1200&auto=format&fit=crop",
    title: "Starfii Migrates a Global Reinsurer's Core Systems to AWS",
    body: "See how Starfii sequenced a zero downtime migration of core claims systems to AWS, cutting infrastructure cost while improving failover time for a global reinsurer.",
  },
  {
    slug: "regional-bank-multi-cloud-modernization",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=90&w=1200&auto=format&fit=crop",
    title: "Starfii Builds a Multi Cloud Foundation for a Regional Bank",
    body: "Explore how Starfii's multi cloud architecture gave a regional bank vendor flexibility across AWS and Azure while meeting strict data residency and compliance requirements.",
  },
  {
    slug: "utilities-kubernetes-platform",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=90&w=1200&auto=format&fit=crop",
    title:
      "Starfii Modernizes Field Operations with a Kubernetes Platform on GCP",
    body: "Discover how Starfii's Kubernetes platform on GCP gave a utilities provider real time visibility across the grid while cutting deployment time from days to minutes.",
  },
  {
    slug: "healthcare-finops-cost-optimization",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=90&w=1200&auto=format&fit=crop",
    title: "Starfii Cuts Cloud Spend 34 Percent for a Healthcare SaaS Platform",
    body: "Learn how Starfii's FinOps program right sized compute and storage across a healthcare SaaS platform without touching uptime or HIPAA compliance.",
  },
  {
    slug: "ecommerce-sre-uptime-program",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=90&w=1200&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=90&w=1200&auto=format&fit=crop",
    title:
      "Multi Cloud Architecture: Designing for Flexibility Without Losing Control",
    body: "Explore how Starfii designs multi cloud architecture across AWS, Azure, and GCP that gives enterprises vendor flexibility while keeping governance and cost under control.",
  },
  {
    slug: "finops-cloud-waste-performance",
    large: false,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=90&w=1000&auto=format&fit=crop",
    title: "FinOps in Practice: Cutting Cloud Waste Without Cutting Performance",
    body: "Stop overpaying for idle compute. See how Starfii's FinOps practice identifies waste and right sizes workloads, often cutting cloud spend by 25 to 35 percent.",
  },
  {
    slug: "site-reliability-engineering-cloud-scale",
    large: false,
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=90&w=1000&auto=format&fit=crop",
    title: "Site Reliability Engineering: Keeping Uptime High as Systems Scale",
    body: "Stop firefighting incidents. See how Starfii's SRE practice combines automation and observability to keep uptime high as cloud environments grow more complex.",
  },
  {
    slug: "cloud-security-by-design",
    large: false,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=90&w=1000&auto=format&fit=crop",
    title: "Cloud Security by Design: Protecting Modern Infrastructure",
    body: "Explore how Starfii builds identity, network, monitoring, and compliance controls into cloud architecture so security scales with every workload.",
  },
  {
    slug: "devops-cicd-cloud-reliability",
    large: false,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=90&w=1000&auto=format&fit=crop",
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


      /* =============================================================
         LIGHT CAPABILITIES GRID — matches Software & Product
         Engineering's card design exactly.
         Title: 24px mobile / 26px desktop
         Body: 17px
      ============================================================= */
      .ss-capability-card {
        position: relative;
        background-color: #EEF0F5;
        border-radius: 20px;
        transition:
          background-color 0.35s ease,
          transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
          box-shadow 0.35s ease;
      }

      .ss-capability-card:hover {
        background-color: #E4E7F3;
        transform: translateY(-4px);
        box-shadow: 0 16px 40px rgba(27, 37, 96, 0.08);
      }

      .ss-capability-title {
        transition: color 0.3s ease;
      }

      .ss-capability-learn-more {
        color: ${INDIGO_CTA};
      }

      .ss-capability-learn-more .ss-capability-underline {
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
      }

      .ss-capability-card:hover .ss-capability-learn-more .ss-capability-underline {
        transform: scaleX(1);
      }

      .ss-capability-card:hover .ss-capability-learn-more svg {
        transform: translate(2px, -2px);
      }

      .ss-capability-learn-more svg {
        transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
      }

      /* Whole-card hover owns the image zoom. The card itself never scales. */
      .ss-zoom-img {
        transition: transform 0.8s ease-out;
        will-change: transform;
      }

      .group:hover .ss-zoom-img {
        transform: scale(1.1);
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
        .ss-eco-panel,
        .ss-capability-card,
        .ss-capability-title,
        .ss-capability-learn-more .ss-capability-underline {
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
   HOOK: sequential typewriter for a list of lines
   (matches Software & Product Engineering behaviour)
================================================================ */

function useTypewriterList(
  items: string[],
  active: boolean,
  speed: number = 16,
  pauseBetween: number = 300
): { displayed: string[]; typingIndex: number } {
  const [displayed, setDisplayed] = useState<string[]>(() => items.map(() => ""));
  const [typingIndex, setTypingIndex] = useState(-1);

  const itemsRef = useRef(items);
  itemsRef.current = items;

  useEffect(() => {
    if (!active) {
      setDisplayed(items.map(() => ""));
      setTypingIndex(-1);
      return undefined;
    }

    let cancelled = false;
    let itemIndex = 0;
    let charIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const typeStep = () => {
      if (cancelled) return;

      const currentItems = itemsRef.current;
      if (itemIndex >= currentItems.length) return;

      const currentLine = currentItems[itemIndex];
      if (currentLine === undefined) return;

      charIndex += 1;
      setTypingIndex(itemIndex);
      setDisplayed((prev) => {
        const next = [...prev];
        while (next.length < currentItems.length) next.push("");
        next[itemIndex] = currentLine.slice(0, charIndex);
        return next;
      });

      if (charIndex >= currentLine.length) {
        itemIndex += 1;
        charIndex = 0;
        timeoutId = setTimeout(typeStep, pauseBetween);
      } else {
        timeoutId = setTimeout(typeStep, speed);
      }
    };

    timeoutId = setTimeout(typeStep, pauseBetween);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, items.join("|"), speed, pauseBetween]);

  return { displayed, typingIndex };
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
   KEY TAKEAWAYS ACCORDION — collapsible + typewriter reveal
   Same behaviour and markup as the Software & Product
   Engineering page, adapted for Cloud Engineering content.
================================================================ */

function KeyTakeawaysAccordion({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (updater: (prev: boolean) => boolean) => void;
}): ReactElement {
  const lines = keyTakeaways.map((point) => `${point.title}. ${point.body}`);
  const { displayed, typingIndex } = useTypewriterList(lines, open);

  return (
    <div
      className="overflow-hidden rounded-[22px] border bg-white transition-colors duration-300"
      style={{ borderColor: open ? INDIGO_CTA : LAVENDER_ACCENT }}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full min-h-[104px] items-center justify-between gap-4 px-8 py-6 text-left lg:px-10"
        style={{
          borderBottom: open ? `1px solid ${LAVENDER_ACCENT}` : "1px solid transparent",
        }}
      >
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="relative inline-flex h-8 w-8 flex-shrink-0 items-center justify-center"
            style={{ color: INDIGO_CTA }}
          >
            <svg
              viewBox="0 0 32 32"
              className="h-8 w-8"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M16 1.5C16.7 8.9 18.1 13.2 21.1 14.9C22.8 16 27.1 16 30.5 16C23.1 16.7 18.8 18.1 17.1 21.1C16 22.8 16 27.1 16 30.5C15.3 23.1 13.9 18.8 10.9 17.1C9.2 16 4.9 16 1.5 16C8.9 15.3 13.2 13.9 14.9 10.9C16 9.2 16 4.9 16 1.5Z" />
            </svg>
            <svg
              viewBox="0 0 20 20"
              className="absolute bottom-0 right-0 h-3.5 w-3.5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10 1.5C10.35 6.15 11.15 8.1 12.9 9.05C13.85 9.55 15.8 9.65 18.5 10C15.8 10.35 13.85 10.45 12.9 10.95C11.15 11.9 10.35 13.85 10 18.5C9.65 13.85 8.85 11.9 7.1 10.95C6.15 10.45 4.2 10.35 1.5 10C4.2 9.65 6.15 9.55 7.1 9.05C8.85 8.1 9.65 6.15 10 1.5Z" />
            </svg>
          </span>
          <span className="font-body text-[17px] font-semibold" style={{ color: INDIGO_CTA }}>
            Key Takeaways
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span
            className="font-body hidden rounded-full px-5 py-2.5 text-[13px] font-semibold sm:inline-flex"
            style={{ backgroundColor: "#F1EEFC", color: INDIGO_CTA }}
          >
            AWS • AZURE • GCP
          </span>

          <ChevronDown
            size={20}
            strokeWidth={2.2}
            className="flex-shrink-0 transition-transform duration-300"
            style={{
              color: INDIGO_CTA,
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </div>
      </button>

      <div
        className="grid transition-all duration-500 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <ul className="space-y-5 px-8 py-10 lg:px-10">
            {lines.map((line, i) => {
              const text = displayed[i];
              if (!text && i !== 0) return null;

              const isTyping = i === typingIndex && text.length < line.length;

              return (
                <li
                  key={line}
                  className="flex gap-2 font-body text-[15px] leading-[1.8] text-slate-600"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                    style={{ backgroundColor: INDIGO_CTA }}
                  />
                  <span>
                    {text}
                    {isTyping && (
                      <span
                        className="ss-caret ml-0.5 inline-block h-4 w-[2px] align-middle"
                        style={{ backgroundColor: INDIGO_CTA }}
                      />
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ===============================================================
   ECOSYSTEM ACCORDION
================================================================ */

function EcosystemAccordion(): ReactElement {
   const [openIndex, setOpenIndex] = useState<number | null>(null);

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
                      className="font-heading text-[19px] font-medium leading-snug transition-colors duration-300"
                      style={{ color: isOpen ? INDIGO_CTA : CHAMPION_BLUE }}
                    >
                      {item.title}
                    </span>

                 <span
  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300"
  style={{
    backgroundColor: INDIGO_CTA,
    color: "#FFFFFF",
  }}
>
  {isOpen ? <Minus size={18} /> : <Plus size={18} />}
</span>
                  </button>

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
  const [takeawaysOpen, setTakeawaysOpen] = useState(true);
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

   <section className="relative isolate min-h-[460px] overflow-hidden lg:min-h-[620px]">
  <div className="absolute inset-0 -z-10">
    <img
      src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=85&w=2000&auto=format&fit=crop"
      alt="Modern cloud infrastructure and technology environment"
      loading="eager"
      decoding="async"
      fetchPriority="high"
      className="h-full w-full object-cover object-[65%_center]"
    />
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(90deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.72) 30%, rgba(0,0,0,0.38) 55%, rgba(0,0,0,0.08) 78%, rgba(0,0,0,0) 100%)",
      }}
    />
  </div>

  <div
   className={`${ALIGN} relative flex min-h-[460px] items-start lg:min-h-[620px]`}
>
  <div className="w-full max-w-[760px] pb-12 pt-[130px] lg:pb-16 lg:pt-[150px]">
      <nav
        aria-label="Breadcrumb"
        className="font-body flex items-center gap-2 text-[14px] font-medium opacity-0"
        style={{
          color: "rgba(255,255,255,0.92)",
          animation: "ss-fade-up 0.6s ease-out 0.05s forwards",
        }}
      >
        <Link href="/" className="transition-opacity hover:opacity-70">
          Home
        </Link>
        <ChevronRight size={14} />
        <Link href="/services" className="transition-opacity hover:opacity-70">
          Services
        </Link>
        <ChevronRight size={14} />
        <span className="text-white/60">Cloud Engineering</span>
      </nav>

      <h1
        className="font-heading mt-5 max-w-[760px] text-[32px] font-medium leading-[1.1] tracking-[-0.025em] text-white opacity-0 sm:text-[38px] lg:text-[44px] xl:text-[48px]"
        style={{ animation: "ss-fade-up 0.7s ease-out 0.15s forwards" }}
      >
        Cloud Engineering Services on AWS, Azure &amp; GCP
      </h1>

      <p
        className="font-body mt-5 max-w-[650px] text-[16px] leading-[1.7] text-white/90 opacity-0 sm:text-[17px]"
        style={{ animation: "ss-fade-up 0.7s ease-out 0.28s forwards" }}
      >
        Starfii architects, migrates, modernizes, and runs workloads on
        AWS, Azure, and GCP, backed by DevOps, CI/CD, and infrastructure
        automation built for performance, security, and cost control
        from day one.
      </p>

      <a
        href="#connect"
        className="font-body mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-semibold opacity-0 transition-all duration-300 hover:scale-[1.03] hover:bg-white/90"
        style={{
          color: INDIGO_CTA,
          animation: "ss-fade-up 0.7s ease-out 0.4s forwards",
        }}
      >
        Request Your POC Now
        <ArrowUpRight size={17} />
      </a>
    </div>
  </div>
</section>

      <div className={ALIGN}>
        {/* ============================================================
            KEY TAKEAWAYS — collapsible, typewriter bullets
            (matches Software & Product Engineering exactly)
        ============================================================ */}

        <Reveal as="section" className="mt-16">
          <KeyTakeawaysAccordion open={takeawaysOpen} setOpen={setTakeawaysOpen} />

          <p
            className="font-heading mt-10 max-w-6xl text-[26px] leading-snug lg:text-[30px]"
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

        <Reveal as="section" className="mt-20 mb-20 lg:mb-24">
          <div
            className="group grid grid-cols-1 items-stretch overflow-hidden rounded-lg bg-[#F5F3FC] transition-colors duration-500 ease-out hover:bg-[#EAE4FA] lg:grid-cols-2"
          >
            <div className="flex flex-col justify-center p-10 transition-transform duration-500 ease-out group-hover:translate-x-2 lg:p-14">
           

               <h2 className={`${SECTION_HEADING} max-w-[620px]`} style={{ color: CHAMPION_BLUE }}>
                How Do Enterprises Move to the Cloud Without Losing Control?
            </h2>
              <p className="font-body mt-5 text-[17px] leading-relaxed text-slate-600 lg:text-[18px]">
                Enterprises stay in control during cloud adoption by
                sequencing migration around business risk, designing cloud
                native applications from the start, and automating delivery
                through DevOps, CI/CD, and infrastructure as code, while
                treating cost, security, and observability as ongoing FinOps
                and compliance practices.
              </p>
            </div>

            <div className="relative min-h-[320px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=90&w=1200&auto=format&fit=crop"
                alt="Cloud engineers reviewing cloud infrastructure architecture"
                loading="lazy"
                decoding="async"
                className="ss-zoom-img absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>

      {/* ============================================================
          FOCUS AREAS — premium capability grid
      ============================================================ */}
 <section className="relative bg-white py-24 lg:py-28">
        <div className={`relative ${ALIGN}`}>
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[380px_1fr] lg:gap-14 xl:grid-cols-[420px_1fr]">
            <Reveal className="self-start lg:sticky lg:top-28">
              {/* <Eyebrow variant="light">Cloud Engineering</Eyebrow> */}
    

               <h2 className={`${SECTION_HEADING} max-w-[620px]`} style={{ color: CHAMPION_BLUE }}>
       Our Cloud Engineering Capabilities
            </h2>
              <p className="font-body mt-5 max-w-md text-[15px] leading-relaxed text-slate-600 sm:text-[16px]">
                Starfii migrates, builds, and operates on AWS, Azure, and GCP
                with architecture designed for scale, resilience, and
                predictable cost.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {focusAreas.map((area, i) => (
                <Reveal key={area.title} delay={(i % 4) * 90} className="h-full">
                  <Link
                    href={`/services/cloud/capabilities/${area.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
                    aria-label={`Learn more about ${area.title}`}
                    className="ss-capability-card flex h-full flex-col p-8"
                  >
                    <h3
                      className="ss-capability-title font-heading text-[24px] font-semibold leading-[1.2] sm:text-[26px]"
                      style={{ color: CHAMPION_BLUE }}
                    >
                      {area.title}
                    </h3>

                    <p className="font-body mt-4 text-[17px] leading-[1.7] text-slate-600">
                      {area.body}
                    </p>

                    <span className="ss-capability-learn-more font-body mt-6 inline-flex w-fit items-center gap-1.5 text-[15px] font-medium">
                      <span className="relative">
                        Learn More
                        <span
                          className="ss-capability-underline absolute -bottom-0.5 left-0 h-[1.5px] w-0"
                          style={{ backgroundColor: INDIGO_CTA }}
                        />
                      </span>
                      <ArrowUpRight size={16} />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className={ALIGN}>
        {/* ============================================================
            TABS
        ============================================================ */}

        <Reveal as="section" className="mt-24 pb-28">
          {/* <Eyebrow>Cloud Engineering</Eyebrow> */}
          <h2 className={`${SECTION_HEADING} mt-4 font-bold`} style={{ color: CHAMPION_BLUE }}>
            Cloud Services
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
  role="tab"
  aria-selected={isActive}
  onClick={() => setActiveTab(i)}
  className="font-body block py-4 pl-5 text-left text-[19px] transition-colors duration-200 sm:text-[20px]"
  style={{
    color: isActive ? CHAMPION_BLUE : "#94A3B8",
    fontWeight: isActive ? 600 : 400,
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
              onMouseEnter={() => setTabHovered(true)}
              onMouseLeave={() => setTabHovered(false)}
              className="ss-tab-panel group grid grid-cols-1 overflow-hidden rounded-2xl md:grid-cols-2 md:min-h-[420px] isolate"
              style={{ backgroundColor: "#F5F3FC" }}
            >
              <div className="flex flex-col justify-start p-3 pt-2 lg:p-6 lg:pt-5 self-start">
         <h3
  className="font-heading text-[26px] font-medium leading-snug sm:text-[28px]"
  style={{ color: CHAMPION_BLUE }}
>
  {current.heading}
</h3>
                <p className="font-body mt-5 text-[17px] leading-relaxed text-slate-600">
                  {current.body}
                </p>
              </div>

              <div className="relative min-h-[280px] overflow-hidden">
                <img
                  src={current.image}
                  alt={current.label}
                  className="absolute inset-0 h-full w-full transform-gpu object-cover transition-transform duration-700 will-change-transform group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ============================================================
          IMPACT ACROSS YOUR CLOUD INFRASTRUCTURE (dark)
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
            {/* <Eyebrow variant="dark">Cloud Engineering</Eyebrow> */}
            <h2 className={`${SECTION_HEADING} mt-4 max-w-6xl text-white`}>
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
                    <div className="ss-case-image h-[260px] w-full shrink-0 overflow-hidden bg-slate-900 transition-[height] duration-[800ms] ease-in-out group-hover:h-0">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="h-full w-full object-cover"
                      />
                    </div>

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

                        <p className="ss-case-desc font-body max-h-0 -translate-y-2 text-[15px] leading-relaxed text-slate-500 opacity-0 transition-all duration-[800ms] ease-in-out group-hover:max-h-40 group-hover:translate-y-0 group-hover:opacity-100">
                          {study.body}
                        </p>
                      </div>

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
            <h2 className={`${SECTION_HEADING} max-w-[620px]`} style={{ color: CHAMPION_BLUE }}>
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
            <Carousel itemCount={insights.length} arrowVariant="light" clickToAdvance>
              {insights.map((post, i) => (
                <Reveal
                  key={post.slug}
                  delay={i * 90}
                  data-carousel-card
                  className={`flex-shrink-0 snap-start ${post.large ? "w-[420px]" : "w-[340px]"}`}
                >
                  <Link href={`/services/cloud/blogs/${post.slug}`} className="block h-full" aria-label={`Read ${post.title}`}>
                    {post.large ? (
                      <div className="group relative h-[420px] overflow-hidden rounded-2xl">
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

                          <span
                            className="font-body mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold"
                            style={{ color: INDIGO_CTA }}
                          >
                            <span className="relative">
                              Read More
                              <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-current transition-[width] duration-500 ease-out group-hover:w-full" />
                            </span>
                            <ArrowUpRight
                              size={14}
                              className="transition-transform duration-500 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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

                          <span
                            className="font-body mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold"
                            style={{ color: INDIGO_CTA }}
                          >
                            <span className="relative">
                              Read More
                              <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-current transition-[width] duration-500 ease-out group-hover:w-full" />
                            </span>
                            <ArrowUpRight
                              size={14}
                              className="transition-transform duration-500 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
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

      {/* ============================================================
          CLOSING CTA
      ============================================================ */}
  {/* <section id="connect" className="scroll-mt-28 bg-white py-24">
  <div className={ALIGN}>
    <Reveal
      className="relative overflow-hidden rounded-[28px] border px-8 py-14 sm:px-14 sm:py-16"
      style={{ backgroundColor: "#FFFFFF", borderColor: "rgba(0,0,0,0.08)" }}
    >
     
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(164,143,234,0.25) 0%, rgba(164,143,234,0) 70%)",
        }}
      />
 
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(0,0,0,0.6) 0px, rgba(0,0,0,0.6) 1px, transparent 1px, transparent 40px)",
        }}
      />

      <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">

        <div>
          <span
            className="font-body inline-flex items-center rounded-full px-4 py-1.5 text-[12px] font-semibold tracking-[0.08em]"
            style={{ backgroundColor: "rgba(29,53,87,0.08)", color: CHAMPION_BLUE }}
          >
            GET STARTED
          </span>

          <h2 className="font-heading mt-6 max-w-xl text-[32px] font-medium leading-[1.2] text-slate-900 lg:text-[38px]">
            Ready to Build a Quality Strategy That Scales?
          </h2>

          <p className="font-body mt-5 max-w-lg text-[15px] leading-relaxed text-slate-600">
            Talk to Starfii about manual testing, test automation, API
            and performance testing, security testing, or embedding
            continuous and AI assisted testing into your pipeline.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/#form"
              className="font-body inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-[15px] font-semibold text-white transition-transform duration-300 hover:scale-[1.03]"
              style={{ backgroundColor: CHAMPION_BLUE }}
            >
              Connect Now
              <ArrowUpRight size={17} />
            </Link>

            <a
              href="mailto:hello@starfii.com"
              className="font-body inline-flex items-center justify-center gap-2 rounded-full border px-7 py-4 text-[15px] font-semibold text-slate-900 transition-colors duration-300 hover:bg-slate-50"
              style={{ borderColor: "rgba(0,0,0,0.15)" }}
            >
              Email Us
            </a>
          </div>
        </div>

        <div
          className="relative rounded-2xl p-7"
          style={{
            backgroundColor: "rgba(29,53,87,0.04)",
            border: "1px solid rgba(0,0,0,0.08)",
          }}
        >
          <p className="font-body text-[13px] uppercase tracking-[0.08em] text-slate-500">
            Prefer to talk directly?
          </p>
          <p className="font-heading mt-3 text-[22px] font-medium text-slate-900">
            hello@starfii.com
          </p>
          <div className="mt-6 h-px w-full" style={{ backgroundColor: "rgba(0,0,0,0.08)" }} />
          <p className="font-body mt-6 text-[13px] leading-relaxed text-slate-500">
            Typical response time: within 24 hours on business days.
          </p>
        </div>
      </div>
    </Reveal>
  </div>
</section> */}

      </section>


<GetInTouch />

    </main>
  );
}
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import {
  ArrowUpRight,
  ChevronRight,
  ArrowLeft,
  CheckCircle2,
  Target,
  BrainCircuit,
  TrendingUp,
  Workflow,
  ShieldCheck,
  Database,
  Sparkles,
  Gauge,
} from "lucide-react";

import {
  caseStudies,
  getCaseStudyBySlug,
} from "../data/case-studies";

const CHAMPION_BLUE = "#1B2560";
const LAVENDER_ACCENT = "#A48FEA";
const INDIGO_CTA = "#4F3FE0";

const ALIGN =
  "mx-auto w-full max-w-[1520px] px-6 sm:px-10 lg:px-16";

const BASE_PATH =
  "/services/artificial-intelligence";

/* ============================================================
   STATIC PARAMS
============================================================ */

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

/* ============================================================
   TYPES
============================================================ */

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/* ============================================================
   METADATA
============================================================ */

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return {
      title: "Case Study Not Found | Starfii",
    };
  }

  return {
    title: `${study.title} | Starfii Artificial Intelligence Case Study`,
    description: study.body,
  };
}

/* ============================================================
   PAGE
============================================================ */

export default async function ArtificialIntelligenceCaseStudyPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  /*
   * Current case study exclude pannitu
   * next 4 AI case studies show pannum.
   */
  const related = caseStudies
    .filter((item) => item.slug !== study.slug)
    .slice(0, 4);

  return (
    <main className="overflow-hidden bg-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative isolate overflow-hidden bg-white">

        {/* ==================================================
            DECORATIVE BACKGROUND
        ================================================== */}

        <div
          className="pointer-events-none absolute -right-32 top-20 -z-10 h-[430px] w-[430px] rounded-full blur-3xl"
          style={{
            backgroundColor: `${LAVENDER_ACCENT}20`,
          }}
        />

        <div
          className="pointer-events-none absolute -bottom-20 left-1/3 -z-10 h-[300px] w-[300px] rounded-full blur-3xl"
          style={{
            backgroundColor: `${INDIGO_CTA}12`,
          }}
        />

        {/* ==================================================
            HERO WRAPPER
        ================================================== */}

        <div
          className={`${ALIGN} relative min-h-[700px] pt-28 pb-16 lg:min-h-[760px] lg:pt-32 lg:pb-20`}
        >

          {/* ==================================================
              DESKTOP HERO IMAGE
          ================================================== */}

          <div className="pointer-events-none absolute right-0 top-0 -z-10 hidden h-full w-[56%] lg:block">

            <div className="absolute inset-0 bg-[#F5F3FC]" />

            <img
              src={study.heroImage ?? study.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            {/* Left fade */}

            <div
              className="absolute inset-y-0 left-0 w-[45%]"
              style={{
                background:
                  "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.94) 30%, rgba(255,255,255,0.48) 70%, rgba(255,255,255,0) 100%)",
              }}
            />

            {/* Top fade */}

            <div
              className="absolute inset-x-0 top-0 h-32"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0.72), rgba(255,255,255,0))",
              }}
            />

            {/* Bottom fade */}

            <div
              className="absolute inset-x-0 bottom-0 h-44"
              style={{
                background:
                  "linear-gradient(to top, #ffffff, rgba(255,255,255,0))",
              }}
            />

          </div>

          {/* ==================================================
              MOBILE HERO IMAGE
          ================================================== */}

          <div className="relative mb-10 h-[280px] overflow-hidden rounded-3xl border lg:hidden">

            <img
              src={study.heroImage ?? study.image}
              alt=""
              className="h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />

          </div>

          {/* ==================================================
              HERO CONTENT
          ================================================== */}

          <div className="relative z-10 max-w-[780px] lg:pt-14">

            {/* ==================================================
                BREADCRUMB
            ================================================== */}

            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-[13px] font-medium"
              style={{
                color: CHAMPION_BLUE,
              }}
            >

              <Link
                href="/"
                className="transition-opacity hover:opacity-60"
              >
                Home
              </Link>

              <ChevronRight size={14} />

              <Link
                href="/services"
                className="transition-opacity hover:opacity-60"
              >
                Services
              </Link>

              <ChevronRight size={14} />

              <Link
                href="/services/artificial-intelligence"
                className="transition-opacity hover:opacity-60"
              >
                Artificial Intelligence
              </Link>

              <ChevronRight size={14} />

              <Link
                href={BASE_PATH}
                className="transition-opacity hover:opacity-60"
              >
                Case Studies
              </Link>

              <ChevronRight size={14} />

              <span className="text-slate-500">
                {study.industry}
              </span>

            </nav>

            {/* ==================================================
                AI BADGE
            ================================================== */}

            <div
              className="mt-9 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold text-white shadow-lg"
              style={{
                backgroundColor: INDIGO_CTA,
              }}
            >
              <Sparkles size={15} />
              Artificial Intelligence
            </div>

            {/* ==================================================
                TITLE
            ================================================== */}

            <h1
              className="mt-7 max-w-[780px] text-[38px] font-medium leading-[1.08] tracking-[-0.035em] sm:text-[48px] lg:text-[60px]"
              style={{
                color: CHAMPION_BLUE,
              }}
            >
              {study.title}
            </h1>

            {/* ==================================================
                BODY
            ================================================== */}

            <p className="mt-7 max-w-[700px] text-[17px] leading-8 text-slate-600 lg:text-[18px]">
              {study.body}
            </p>

            {/* ==================================================
                CTA
            ================================================== */}

            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                href="/services/artificial-intelligence#connect"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[14px] font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                style={{
                  backgroundColor: CHAMPION_BLUE,
                }}
              >
                Start an AI project

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href={BASE_PATH}
                className="inline-flex items-center gap-2 rounded-full border bg-white px-7 py-3.5 text-[14px] font-semibold shadow-sm transition-all duration-300 hover:bg-[#FAF9FE] hover:shadow-md"
                style={{
                  borderColor: "#DCD8EF",
                  color: CHAMPION_BLUE,
                }}
              >
                View all case studies
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <div className={ALIGN}>

        {/* ===================================================
            PROJECT SNAPSHOT
        =================================================== */}

        <section className="relative z-20 -mt-2 lg:-mt-8">

          <div
            className="grid overflow-hidden rounded-3xl border bg-white shadow-[0_20px_60px_rgba(27,37,96,0.08)] sm:grid-cols-2 lg:grid-cols-4"
            style={{
              borderColor: "#E8E4F5",
            }}
          >

            {[
              {
                label: "Client",
                value: study.client,
              },
              {
                label: "Industry",
                value: study.industry,
              },
              {
                label: "Duration",
                value: study.duration,
              },
              {
                label: "AI Services",
                value: study.services.join(", "),
              },
            ].map((item, index) => (

              <div
                key={item.label}
                className={`p-7 lg:p-8 ${
                  index !== 0
                    ? "border-t sm:border-t-0 sm:border-l"
                    : ""
                }`}
                style={{
                  borderColor: "#E8E4F5",
                }}
              >

                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                  {item.label}
                </p>

                <p
                  className="mt-3 text-[15px] font-semibold leading-6"
                  style={{
                    color: CHAMPION_BLUE,
                  }}
                >
                  {item.value}
                </p>

              </div>

            ))}

          </div>
        </section>

        {/* ===================================================
            AI IMPACT
        =================================================== */}

        <section className="py-20 lg:py-24">

          <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">

            <div>

              <p
                className="text-[12px] font-bold uppercase tracking-[0.18em]"
                style={{
                  color: INDIGO_CTA,
                }}
              >
                Artificial Intelligence Impact
              </p>

              <h2
                className="mt-3 max-w-2xl text-[30px] font-medium tracking-tight lg:text-[38px]"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                Measurable outcomes from enterprise AI
              </h2>

            </div>

            <p className="max-w-md text-[15px] leading-7 text-slate-500">
              Applied AI can transform how teams work by accelerating
              decisions, automating repetitive processes, and making
              enterprise knowledge easier to access.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">

            {study.stats.map((stat, index) => (

              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  borderColor: "#E5E1F5",
                  backgroundColor:
                    index === 1
                      ? "#F5F3FC"
                      : "#FFFFFF",
                }}
              >

                <div
                  className="absolute -right-16 -top-16 h-32 w-32 rounded-full blur-2xl transition-transform duration-500 group-hover:scale-150"
                  style={{
                    backgroundColor: `${LAVENDER_ACCENT}25`,
                  }}
                />

                <div className="relative">

                  <p
                    className="text-[42px] font-semibold tracking-tight"
                    style={{
                      color: INDIGO_CTA,
                    }}
                  >
                    {stat.value}
                  </p>

                  <div
                    className="mt-5 h-px w-10"
                    style={{
                      backgroundColor: LAVENDER_ACCENT,
                    }}
                  />

                  <p className="mt-4 text-[14px] leading-6 text-slate-600">
                    {stat.label}
                  </p>

                </div>

              </div>

            ))}

          </div>
        </section>

        {/* ===================================================
            AI OPPORTUNITY
        =================================================== */}

        <section className="border-t py-20 lg:py-24">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">

            <div>

              <p
                className="text-[12px] font-bold uppercase tracking-[0.18em]"
                style={{
                  color: INDIGO_CTA,
                }}
              >
                01 / AI Opportunity
              </p>

              <h2
                className="mt-4 text-[32px] font-medium leading-tight lg:text-[42px]"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                Turning enterprise data into intelligent experiences
              </h2>

            </div>

            <div>

              <p className="text-[18px] leading-9 text-slate-600">
                {study.overview}
              </p>

            </div>

          </div>
        </section>

        {/* ===================================================
            CHALLENGE / SOLUTION / RESULTS
        =================================================== */}

        <section className="pb-24">

          <div className="grid gap-6 lg:grid-cols-3">

            {/* ==================================================
                CHALLENGE
            ================================================== */}

            <div
              className="rounded-3xl border p-8 lg:p-9"
              style={{
                borderColor: "#E5E1F5",
              }}
            >

              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{
                  backgroundColor: "#F5F3FC",
                  color: INDIGO_CTA,
                }}
              >
                <Target size={22} />
              </div>

              <p
                className="mt-7 text-[12px] font-bold uppercase tracking-[0.16em]"
                style={{
                  color: INDIGO_CTA,
                }}
              >
                The AI Challenge
              </p>

              <h2
                className="mt-3 text-[25px] font-medium"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                From AI ambition to a practical enterprise solution
              </h2>

              <p className="mt-5 text-[15px] leading-7 text-slate-600">
                {study.challenge}
              </p>

            </div>

            {/* ==================================================
                SOLUTION
            ================================================== */}

            <div
              className="rounded-3xl border p-8 lg:p-9"
              style={{
                borderColor: "#E5E1F5",
                backgroundColor: "#FAF9FE",
              }}
            >

              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{
                  backgroundColor: `${LAVENDER_ACCENT}20`,
                  color: INDIGO_CTA,
                }}
              >
                <BrainCircuit size={22} />
              </div>

              <p
                className="mt-7 text-[12px] font-bold uppercase tracking-[0.16em]"
                style={{
                  color: INDIGO_CTA,
                }}
              >
                The Starfii AI Solution
              </p>

              <h2
                className="mt-3 text-[25px] font-medium"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                Designing AI that works with enterprise data
              </h2>

              <p className="mt-5 text-[15px] leading-7 text-slate-600">
                {study.solution}
              </p>

            </div>

            {/* ==================================================
                RESULTS
            ================================================== */}

            <div
              className="rounded-3xl border p-8 lg:p-9"
              style={{
                borderColor: "#E5E1F5",
              }}
            >

              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{
                  backgroundColor: `${INDIGO_CTA}12`,
                  color: INDIGO_CTA,
                }}
              >
                <TrendingUp size={22} />
              </div>

              <p
                className="mt-7 text-[12px] font-bold uppercase tracking-[0.16em]"
                style={{
                  color: INDIGO_CTA,
                }}
              >
                AI Business Impact
              </p>

              <h2
                className="mt-3 text-[25px] font-medium"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                Faster decisions, smarter workflows
              </h2>

              <p className="mt-5 text-[15px] leading-7 text-slate-600">
                {study.results}
              </p>

            </div>

          </div>
        </section>

        {/* ===================================================
            AI CAPABILITIES
        =================================================== */}

        <section
          className="rounded-[32px] px-7 py-12 sm:px-10 lg:px-14 lg:py-16"
          style={{
            backgroundColor: "#F5F3FC",
          }}
        >

          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">

            <div>

              <p
                className="text-[12px] font-bold uppercase tracking-[0.18em]"
                style={{
                  color: INDIGO_CTA,
                }}
              >
                AI Capabilities
              </p>

              <h2
                className="mt-4 text-[31px] font-medium leading-tight lg:text-[42px]"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                Enterprise AI capabilities built for real business value
              </h2>

              <p className="mt-5 max-w-lg text-[15px] leading-7 text-slate-600">
                Starfii helps organizations move from AI experimentation
                to production with governed data, intelligent automation,
                responsible AI, and scalable enterprise architectures.
              </p>

            </div>

            <div className="grid gap-3 sm:grid-cols-2">

              {study.services.map((service) => (

                <div
                  key={service}
                  className="flex items-center gap-3 rounded-2xl border bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  style={{
                    borderColor: "#E5E1F5",
                  }}
                >

                  <CheckCircle2
                    size={19}
                    style={{
                      color: INDIGO_CTA,
                    }}
                  />

                  <span
                    className="text-[14px] font-semibold"
                    style={{
                      color: CHAMPION_BLUE,
                    }}
                  >
                    {service}
                  </span>

                </div>

              ))}

            </div>

          </div>
        </section>

        {/* ===================================================
            AI VALUE AREAS
        =================================================== */}

        <section className="border-b py-16 lg:py-20">

          <div className="grid gap-10 lg:grid-cols-3">

            {/* Enterprise Intelligence */}

            <div>

              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{
                  backgroundColor: "#F5F3FC",
                  color: INDIGO_CTA,
                }}
              >
                <BrainCircuit size={21} />
              </div>

              <h3
                className="mt-5 text-[21px] font-medium"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                Enterprise Intelligence
              </h3>

              <p className="mt-3 text-[14px] leading-7 text-slate-600">
                Give teams easier access to enterprise knowledge,
                insights, and recommendations through intelligent AI
                experiences.
              </p>

            </div>

            {/* Intelligent Automation */}

            <div>

              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{
                  backgroundColor: "#F5F3FC",
                  color: INDIGO_CTA,
                }}
              >
                <Workflow size={21} />
              </div>

              <h3
                className="mt-5 text-[21px] font-medium"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                Intelligent Automation
              </h3>

              <p className="mt-3 text-[14px] leading-7 text-slate-600">
                Use AI to streamline repetitive workflows, accelerate
                operations, and reduce manual effort across the business.
              </p>

            </div>

            {/* Responsible AI */}

            <div>

              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{
                  backgroundColor: "#F5F3FC",
                  color: INDIGO_CTA,
                }}
              >
                <ShieldCheck size={21} />
              </div>

              <h3
                className="mt-5 text-[21px] font-medium"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                Responsible AI
              </h3>

              <p className="mt-3 text-[14px] leading-7 text-slate-600">
                Build governed AI experiences with appropriate controls
                for security, privacy, traceability, and responsible use.
              </p>

            </div>

          </div>
        </section>

        {/* ===================================================
            AI FOUNDATION
        =================================================== */}

        <section className="py-20 lg:py-24">

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {/* AI Data Foundation */}

            <div
              className="rounded-3xl border p-8"
              style={{
                borderColor: "#E5E1F5",
              }}
            >

              <Database
                size={25}
                style={{
                  color: INDIGO_CTA,
                }}
              />

              <h3
                className="mt-6 text-[20px] font-medium"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                AI Data Foundation
              </h3>

              <p className="mt-3 text-[14px] leading-7 text-slate-600">
                Connect AI applications to trusted, governed enterprise
                data so insights are grounded in the information that
                matters.
              </p>

            </div>

            {/* Generative AI */}

            <div
              className="rounded-3xl border p-8"
              style={{
                borderColor: "#E5E1F5",
              }}
            >

              <Sparkles
                size={25}
                style={{
                  color: INDIGO_CTA,
                }}
              />

              <h3
                className="mt-6 text-[20px] font-medium"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                Generative AI
              </h3>

              <p className="mt-3 text-[14px] leading-7 text-slate-600">
                Create enterprise-ready generative AI experiences for
                knowledge discovery, content generation, analysis, and
                business workflows.
              </p>

            </div>

            {/* AI Performance */}

            <div
              className="rounded-3xl border p-8"
              style={{
                borderColor: "#E5E1F5",
              }}
            >

              <Gauge
                size={25}
                style={{
                  color: INDIGO_CTA,
                }}
              />

              <h3
                className="mt-6 text-[20px] font-medium"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                AI at Scale
              </h3>

              <p className="mt-3 text-[14px] leading-7 text-slate-600">
                Design scalable AI architectures that can support
                growing users, workloads, models, and enterprise
                requirements.
              </p>

            </div>

          </div>
        </section>

        {/* ===================================================
            RELATED CASE STUDIES
        =================================================== */}

        {related.length > 0 && (

          <section
            className="border-t pb-24 pt-20"
            style={{
              borderColor: "#E5E1F5",
            }}
          >

            {/* =================================================
                HEADER
            ================================================= */}

            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">

              <div>

                <p
                  className="text-[12px] font-bold uppercase tracking-[0.18em]"
                  style={{
                    color: INDIGO_CTA,
                  }}
                >
                  Explore More
                </p>

                <h2
                  className="mt-3 text-[31px] font-medium tracking-tight lg:text-[38px]"
                  style={{
                    color: CHAMPION_BLUE,
                  }}
                >
                  More Artificial Intelligence Case Studies
                </h2>

              </div>

              <Link
                href={BASE_PATH}
                className="group inline-flex items-center gap-2 text-[14px] font-semibold"
                style={{
                  color: INDIGO_CTA,
                }}
              >

                View all case studies

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />

              </Link>

            </div>

            {/* =================================================
                FOUR CARDS
            ================================================= */}

            <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">

              {related.map((item) => (

                <Link
                  key={item.slug}
                  href={`${BASE_PATH}/${item.slug}`}
                  className="group flex min-w-0 flex-col overflow-hidden rounded-[26px] border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  style={{
                    borderColor: "#E5E1F5",
                  }}
                >

                  {/* =================================================
                      IMAGE
                  ================================================= */}

                  <div className="relative h-[230px] overflow-hidden">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                    {/* Industry */}

                    <div className="absolute bottom-4 left-4">

                      <span className="inline-flex rounded-full bg-white/95 px-4 py-2 text-[11px] font-semibold text-slate-700 shadow-sm backdrop-blur">
                        {item.industry}
                      </span>

                    </div>

                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <div className="flex min-h-[185px] flex-1 flex-col p-6">

                    <h3
                      className="line-clamp-3 text-[18px] font-semibold leading-[1.4]"
                      style={{
                        color: CHAMPION_BLUE,
                      }}
                    >
                      {item.title}
                    </h3>

                    <div
                      className="mt-auto inline-flex items-center gap-2 pt-7 text-[13px] font-semibold"
                      style={{
                        color: INDIGO_CTA,
                      }}
                    >

                      Read case study

                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />

                    </div>

                  </div>

                </Link>

              ))}

            </div>

          </section>
        )}

        {/* ===================================================
            FINAL CTA
        =================================================== */}

        <section className="pb-20 lg:pb-24">

          <div
            className="relative overflow-hidden rounded-[32px] border px-7 py-12 sm:px-12 lg:px-16 lg:py-16"
            style={{
              borderColor: "#DDD8F0",
              backgroundColor: "#FAF9FE",
            }}
          >

            {/* Glow */}

            <div
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl"
              style={{
                backgroundColor: `${LAVENDER_ACCENT}25`,
              }}
            />

            <div className="relative flex flex-col justify-between gap-9 lg:flex-row lg:items-center">

              <div className="max-w-2xl">

                <p
                  className="text-[12px] font-bold uppercase tracking-[0.18em]"
                  style={{
                    color: INDIGO_CTA,
                  }}
                >
                  AI Transformation
                </p>

                <h2
                  className="mt-4 text-[31px] font-medium leading-tight lg:text-[43px]"
                  style={{
                    color: CHAMPION_BLUE,
                  }}
                >
                  Ready to put AI
                  <br />
                  to work for your business?
                </h2>

                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                  Talk to our Artificial Intelligence team about
                  Generative AI, enterprise AI applications, intelligent
                  automation, AI data foundations, or responsible AI.
                </p>

              </div>

              <Link
                href="/services/artificial-intelligence#connect"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-7 py-4 text-[14px] font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  backgroundColor: INDIGO_CTA,
                }}
              >

                Start an AI conversation

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />

              </Link>

            </div>

          </div>
        </section>

        {/* ===================================================
            BACK
        =================================================== */}

        <div className="border-t py-10">

          <Link
            href="/services/artificial-intelligence"
            className="group inline-flex items-center gap-2 text-[14px] font-semibold"
            style={{
              color: INDIGO_CTA,
            }}
          >

            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            Back to Artificial Intelligence

          </Link>

        </div>

      </div>
    </main>
  );
}
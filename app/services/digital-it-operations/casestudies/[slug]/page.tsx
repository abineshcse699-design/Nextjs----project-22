import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import {
  ArrowUpRight,
  ChevronRight,
  ArrowLeft,
  CheckCircle2,
  Target,
  Settings2,
  TrendingUp,
  ServerCog,
  Workflow,
  ShieldCheck,
} from "lucide-react";

import {
  caseStudies,
  getCaseStudyBySlug,
} from "../data.tsx/casestudies";

const CHAMPION_BLUE = "#1B2560";
const LAVENDER_ACCENT = "#A48FEA";
const ACCENT_INDIGO = "#4F3FE0";

const ALIGN =
  "mx-auto w-full max-w-[1520px] px-6 sm:px-10 lg:px-16";

const BASE_PATH =
  "/services/digital-it-operations/casestudies";

/* ============================================================
   GENERATE STATIC CASE STUDY ROUTES
============================================================ */

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

/* ============================================================
   PAGE PROPS
============================================================ */

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/* ============================================================
   SEO METADATA
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
    title: `${study.title} | Starfii Digital IT Operations Case Study`,
    description: study.body,
  };
}

/* ============================================================
   PAGE
============================================================ */

export default async function DigitalITOperationsCaseStudyPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  /*
    Current case study exclude pannitu
    remaining 4 case studies show pannum.
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
            backgroundColor: `${ACCENT_INDIGO}12`,
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
                  "linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(255,255,255,0))",
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
              MOBILE IMAGE
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

          <div className="relative z-10 max-w-[770px] lg:pt-14">

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
                href="/services/digital-it-operations"
                className="transition-opacity hover:opacity-60"
              >
                Digital IT Operations
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
                INDUSTRY BADGE
            ================================================== */}

            <div
              className="mt-9 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold text-white shadow-lg"
              style={{
                backgroundColor: ACCENT_INDIGO,
              }}
            >
              <Settings2 size={14} />
              {study.industry}
            </div>

            {/* ==================================================
                TITLE
            ================================================== */}

            <h1
              className="mt-7 max-w-[770px] text-[38px] font-medium leading-[1.08] tracking-[-0.035em] sm:text-[48px] lg:text-[60px]"
              style={{
                color: CHAMPION_BLUE,
              }}
            >
              {study.title}
            </h1>

            {/* ==================================================
                DESCRIPTION
            ================================================== */}

            <p className="mt-7 max-w-[690px] text-[17px] leading-8 text-slate-600 lg:text-[18px]">
              {study.body}
            </p>

            {/* ==================================================
                CTA
            ================================================== */}

            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                href="/services/digital-it-operations#serviceconact"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[14px] font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                style={{
                  backgroundColor: CHAMPION_BLUE,
                }}
              >
                Start a similar project

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
          MAIN CONTENT
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
                label: "IT Operations Services",
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
            PROJECT IMPACT
        =================================================== */}

        <section className="py-20 lg:py-24">

          <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">

            <div>

              <p
                className="text-[12px] font-bold uppercase tracking-[0.18em]"
                style={{
                  color: ACCENT_INDIGO,
                }}
              >
                Digital IT Operations Impact
              </p>

              <h2
                className="mt-3 max-w-2xl text-[30px] font-medium tracking-tight lg:text-[38px]"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                Measurable improvements across IT operations
              </h2>

            </div>

            <p className="max-w-md text-[15px] leading-7 text-slate-500">
              Modern IT operations create more reliable services,
              faster incident resolution, stronger visibility, and
              better business continuity.
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
                      color: ACCENT_INDIGO,
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
            OVERVIEW
        =================================================== */}

        <section className="border-t py-20 lg:py-24">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">

            <div>

              <p
                className="text-[12px] font-bold uppercase tracking-[0.18em]"
                style={{
                  color: ACCENT_INDIGO,
                }}
              >
                01 / Operations Opportunity
              </p>

              <h2
                className="mt-4 text-[32px] font-medium leading-tight lg:text-[42px]"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                Building a more reliable and responsive IT operation
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
                  color: ACCENT_INDIGO,
                }}
              >
                <Target size={22} />
              </div>

              <p
                className="mt-7 text-[12px] font-bold uppercase tracking-[0.16em]"
                style={{
                  color: ACCENT_INDIGO,
                }}
              >
                The IT Operations Challenge
              </p>

              <h2
                className="mt-3 text-[25px] font-medium"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                From reactive support to proactive operations
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
                  color: ACCENT_INDIGO,
                }}
              >
                <ServerCog size={22} />
              </div>

              <p
                className="mt-7 text-[12px] font-bold uppercase tracking-[0.16em]"
                style={{
                  color: ACCENT_INDIGO,
                }}
              >
                The Starfii Operations Solution
              </p>

              <h2
                className="mt-3 text-[25px] font-medium"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                Modernizing the IT operating model
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
                  backgroundColor: `${ACCENT_INDIGO}12`,
                  color: ACCENT_INDIGO,
                }}
              >
                <TrendingUp size={22} />
              </div>

              <p
                className="mt-7 text-[12px] font-bold uppercase tracking-[0.16em]"
                style={{
                  color: ACCENT_INDIGO,
                }}
              >
                Operational Impact
              </p>

              <h2
                className="mt-3 text-[25px] font-medium"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                Faster, smarter, more resilient IT
              </h2>

              <p className="mt-5 text-[15px] leading-7 text-slate-600">
                {study.results}
              </p>

            </div>

          </div>
        </section>

        {/* ===================================================
            OPERATIONS CAPABILITIES
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
                  color: ACCENT_INDIGO,
                }}
              >
                IT Operations Capabilities
              </p>

              <h2
                className="mt-4 text-[31px] font-medium leading-tight lg:text-[42px]"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                Capabilities built for modern IT operations
              </h2>

              <p className="mt-5 max-w-lg text-[15px] leading-7 text-slate-600">
                From infrastructure and service management to automation
                and operational monitoring, Starfii helps organizations
                build reliable and scalable IT operations.
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
                      color: ACCENT_INDIGO,
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
            OPERATIONS VALUE
        =================================================== */}

        <section className="border-b py-16 lg:py-20">

          <div className="grid gap-10 lg:grid-cols-3">

            {/* Service Reliability */}

            <div>

              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{
                  backgroundColor: "#F5F3FC",
                  color: ACCENT_INDIGO,
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
                Service Reliability
              </h3>

              <p className="mt-3 text-[14px] leading-7 text-slate-600">
                Improve availability, operational stability, and
                service reliability across critical technology
                environments.
              </p>

            </div>

            {/* Intelligent Automation */}

            <div>

              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{
                  backgroundColor: "#F5F3FC",
                  color: ACCENT_INDIGO,
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
                Automate repetitive operational workflows to reduce
                manual effort and accelerate service delivery.
              </p>

            </div>

            {/* Operational Visibility */}

            <div>

              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{
                  backgroundColor: "#F5F3FC",
                  color: ACCENT_INDIGO,
                }}
              >
                <TrendingUp size={21} />
              </div>

              <h3
                className="mt-5 text-[21px] font-medium"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                Operational Visibility
              </h3>

              <p className="mt-3 text-[14px] leading-7 text-slate-600">
                Gain clearer visibility into infrastructure,
                incidents, performance, and service operations.
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
                    color: ACCENT_INDIGO,
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
                  More Case Studies
                </h2>

              </div>

              <Link
                href={BASE_PATH}
                className="group inline-flex items-center gap-2 text-[14px] font-semibold"
                style={{
                  color: ACCENT_INDIGO,
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
                      CARD CONTENT
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
                      className="mt-auto pt-7 inline-flex items-center gap-2 text-[13px] font-semibold"
                      style={{
                        color: ACCENT_INDIGO,
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
                    color: ACCENT_INDIGO,
                  }}
                >
                  Modernize your IT operations
                </p>

                <h2
                  className="mt-4 text-[31px] font-medium leading-tight lg:text-[43px]"
                  style={{
                    color: CHAMPION_BLUE,
                  }}
                >
                  Have an IT operations challenge?
                  <br />
                  Let&apos;s make it simpler.
                </h2>

                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                  Talk to our Digital IT Operations team about
                  infrastructure, service management, automation,
                  monitoring, cloud operations, or operational
                  transformation.
                </p>

              </div>

              <Link
                href="/services/digital-it-operations#serviceconact"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-7 py-4 text-[14px] font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  backgroundColor: ACCENT_INDIGO,
                }}
              >
                Start a conversation

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
            href="/services/digital-it-operations"
            className="group inline-flex items-center gap-2 text-[14px] font-semibold"
            style={{
              color: ACCENT_INDIGO,
            }}
          >

            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            Back to Digital IT Operations

          </Link>

        </div>

      </div>
    </main>
  );
}
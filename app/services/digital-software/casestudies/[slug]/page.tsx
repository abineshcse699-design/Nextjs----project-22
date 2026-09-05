import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  ChevronRight,
  ArrowLeft,
  CheckCircle2,
  Quote,
  Sparkles,
  Target,
  Layers3,
  TrendingUp,
} from "lucide-react";

import {
  caseStudies,
  getCaseStudyBySlug,
} from "../data/case-studies";

const CHAMPION_BLUE = "#1B2560";
const LAVENDER_ACCENT = "#A48FEA";
const INDIGO_CTA = "#4F3FE0";

const ALIGN =
  "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

const BASE_PATH =
  "/services/digital-software/casestudies";

/* -------------------------------------------------------
   STATIC PARAMS
------------------------------------------------------- */

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

/* -------------------------------------------------------
   TYPES
------------------------------------------------------- */

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/* -------------------------------------------------------
   METADATA
------------------------------------------------------- */

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
    title: `${study.title} | Starfii Case Study`,
    description: study.body,
  };
}

/* -------------------------------------------------------
   PAGE
------------------------------------------------------- */

export default async function CaseStudyDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const related = caseStudies
    .filter((item) => item.slug !== study.slug)
    .slice(0, 4);

  return (
    <main className="overflow-hidden bg-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative isolate min-h-[620px] overflow-hidden lg:min-h-[680px]">

        {/* Background image */}

        <div className="absolute inset-0 -z-20">
          <img
            src={study.heroImage ?? study.image}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        {/* Main gradient */}

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/95 to-white/35" />

        {/* Bottom fade */}

        <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-white to-transparent" />

        {/* Decorative elements */}

        <div
          className="absolute -right-32 top-24 -z-10 h-80 w-80 rounded-full blur-3xl"
          style={{
            backgroundColor: `${LAVENDER_ACCENT}35`,
          }}
        />

        <div
          className="absolute bottom-0 left-1/3 -z-10 h-56 w-56 rounded-full blur-3xl"
          style={{
            backgroundColor: `${INDIGO_CTA}18`,
          }}
        />

        <div className={`${ALIGN} py-12 lg:py-20`}>

          {/* Breadcrumb */}

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
              href="/services/digital-software"
              className="transition-opacity hover:opacity-60"
            >
              Digital &amp; Software
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

          {/* Hero content */}

          <div className="max-w-4xl py-16 lg:py-20">

            {/* Industry badge */}

            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold text-white shadow-lg"
              style={{
                backgroundColor: INDIGO_CTA,
              }}
            >
              <Sparkles size={14} />
              {study.industry}
            </div>

            {/* Title */}

            <h1
              className="mt-7 max-w-4xl text-[40px] font-medium leading-[1.08] tracking-[-0.03em] sm:text-[48px] lg:text-[64px]"
              style={{
                color: CHAMPION_BLUE,
              }}
            >
              {study.title}
            </h1>

            {/* Description */}

            <p className="mt-7 max-w-3xl text-[17px] leading-8 text-slate-600 lg:text-[18px]">
              {study.body}
            </p>

            {/* Hero CTA */}

            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                href="/services/digital-software#connect"
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
                className="inline-flex items-center gap-2 rounded-full border bg-white/80 px-7 py-3.5 text-[14px] font-semibold backdrop-blur-sm transition-all duration-300 hover:bg-white"
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
          CONTENT WRAPPER
      ===================================================== */}

      <div className={ALIGN}>

        {/* ===================================================
            PROJECT SNAPSHOT
        =================================================== */}

        <section className="relative -mt-8 z-10">

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
                label: "Services",
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
            STATS
        =================================================== */}

        <section className="py-20 lg:py-24">

          <div className="mb-10 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">

            <div>
              <p
                className="text-[12px] font-bold uppercase tracking-[0.18em]"
                style={{
                  color: INDIGO_CTA,
                }}
              >
                Project Impact
              </p>

              <h2
                className="mt-3 text-[30px] font-medium tracking-tight lg:text-[38px]"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                Results that move the business forward
              </h2>
            </div>

            <p className="max-w-md text-[15px] leading-7 text-slate-500">
              A closer look at the measurable impact delivered through the
              engagement.
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
                    index === 1 ? "#F5F3FC" : "#FFFFFF",
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
            OVERVIEW
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
                01 / Overview
              </p>

              <h2
                className="mt-4 text-[32px] font-medium leading-tight lg:text-[42px]"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                Understanding the opportunity
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

            {/* Challenge */}

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
                The Challenge
              </p>

              <h2
                className="mt-3 text-[25px] font-medium"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                What needed to change
              </h2>

              <p className="mt-5 text-[15px] leading-7 text-slate-600">
                {study.challenge}
              </p>
            </div>

            {/* Solution */}

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
                <Layers3 size={22} />
              </div>

              <p
                className="mt-7 text-[12px] font-bold uppercase tracking-[0.16em]"
                style={{
                  color: INDIGO_CTA,
                }}
              >
                The Starfii Solution
              </p>

              <h2
                className="mt-3 text-[25px] font-medium"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                How we solved it
              </h2>

              <p className="mt-5 text-[15px] leading-7 text-slate-600">
                {study.solution}
              </p>
            </div>

            {/* Results */}

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
                The Results
              </p>

              <h2
                className="mt-3 text-[25px] font-medium"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                Business impact
              </h2>

              <p className="mt-5 text-[15px] leading-7 text-slate-600">
                {study.results}
              </p>
            </div>

          </div>
        </section>

        {/* ===================================================
            SERVICES / CAPABILITIES
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
                Capabilities
              </p>

              <h2
                className="mt-4 text-[31px] font-medium leading-tight lg:text-[42px]"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                Technology and expertise behind the engagement
              </h2>

              <p className="mt-5 max-w-lg text-[15px] leading-7 text-slate-600">
                The engagement brought together the right engineering,
                technology, and delivery capabilities to address the
                business challenge.
              </p>

            </div>

            <div className="grid gap-3 sm:grid-cols-2">

              {study.services.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3 rounded-2xl border bg-white p-5"
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
            TAGS
        =================================================== */}

        {study.tags.length > 0 && (
          <section className="border-b py-12">

            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

              <div>
                <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-slate-400">
                  Focus Areas
                </p>

                <p
                  className="mt-2 text-[18px] font-medium"
                  style={{
                    color: CHAMPION_BLUE,
                  }}
                >
                  Technologies, platforms &amp; capabilities
                </p>
              </div>

              <div className="flex flex-wrap gap-2">

                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border bg-white px-4 py-2 text-[13px] font-medium text-slate-600"
                    style={{
                      borderColor: "#DDD8F0",
                    }}
                  >
                    {tag}
                  </span>
                ))}

              </div>

            </div>
          </section>
        )}

        {/* ===================================================
            TESTIMONIAL
        =================================================== */}

        {study.testimonial && (
          <section className="py-24 lg:py-28">

            <div
              className="relative overflow-hidden rounded-[32px] px-7 py-12 sm:px-12 lg:px-20 lg:py-16"
              style={{
                backgroundColor: CHAMPION_BLUE,
              }}
            >

              {/* Decorative circles */}

              <div
                className="absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl"
                style={{
                  backgroundColor: `${LAVENDER_ACCENT}30`,
                }}
              />

              <div
                className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full blur-3xl"
                style={{
                  backgroundColor: `${INDIGO_CTA}35`,
                }}
              />

              <div className="relative mx-auto max-w-4xl text-center">

                <div
                  className="mx-auto flex h-14 w-14 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: `${LAVENDER_ACCENT}20`,
                    color: LAVENDER_ACCENT,
                  }}
                >
                  <Quote size={24} />
                </div>

                <blockquote className="mt-8 text-[24px] font-medium leading-9 text-white sm:text-[30px] sm:leading-[1.45] lg:text-[34px]">
                  “{study.testimonial.quote}”
                </blockquote>

                <div className="mt-8">

                  <p className="text-[15px] font-semibold text-white">
                    {study.testimonial.author}
                  </p>

                  <p className="mt-1 text-[14px] text-white/60">
                    {study.testimonial.role}
                  </p>

                </div>

              </div>
            </div>
          </section>
        )}

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
                  className="mt-3 text-[31px] font-medium"
                  style={{
                    color: CHAMPION_BLUE,
                  }}
                >
                  More Case Studies
                </h2>

              </div>

              <Link
                href={BASE_PATH}
                className="inline-flex items-center gap-2 text-[14px] font-semibold"
                style={{
                  color: INDIGO_CTA,
                }}
              >
                View all case studies
                <ArrowUpRight size={16} />
              </Link>

            </div>

            <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`${BASE_PATH}/${item.slug}`}
                  className="group flex flex-col overflow-hidden rounded-3xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  style={{
                    borderColor: "#E5E1F5",
                  }}
                >

                  {/* Image */}

                  <div className="relative h-[190px] overflow-hidden">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4">

                      <span className="rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-slate-700 backdrop-blur">
                        {item.industry}
                      </span>

                    </div>

                  </div>

                  {/* Content */}

                  <div className="flex flex-1 flex-col p-6">

                    <h3
                      className="line-clamp-3 text-[17px] font-semibold leading-6"
                      style={{
                        color: CHAMPION_BLUE,
                      }}
                    >
                      {item.title}
                    </h3>

                    <div
                      className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold"
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
                  Your next transformation
                </p>

                <h2
                  className="mt-4 text-[31px] font-medium leading-tight lg:text-[43px]"
                  style={{
                    color: CHAMPION_BLUE,
                  }}
                >
                  Have a similar challenge?
                  <br />
                  Let&apos;s build the solution.
                </h2>

                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                  Talk to our digital and software engineering team about
                  your product, platform, automation, or modernization
                  requirements.
                </p>

              </div>

              <Link
                href="/services/digital-software#connect"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-7 py-4 text-[14px] font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  backgroundColor: INDIGO_CTA,
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
            href="/services/digital-software"
            className="group inline-flex items-center gap-2 text-[14px] font-semibold"
            style={{
              color: INDIGO_CTA,
            }}
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            Back to Digital &amp; Software Services
          </Link>
        </div>

      </div>
    </main>
  );
}
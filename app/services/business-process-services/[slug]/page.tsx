import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowUpRight,
  AlertCircle,
  Building2,
  CheckCircle2,
  Clock3,
  Gauge,
  ShieldCheck,
  Settings2,
  Sparkles,
  Target,
  TrendingUp,
  UsersRound,
  Workflow,
  Zap,
} from "lucide-react";

import {
  caseStudies,
  getCaseStudyBySlug,
} from "../data/case-studies";

import CaseStudyTabs from "../CaseStudyTabs";

const CHAMPION_BLUE = "#1B2560";
const LAVENDER_ACCENT = "#A48FEA";
const INDIGO_CTA = "#4F3FE0";

const BASE_PATH =
  "/services/business-process-services";

const ALIGN =
  "mx-auto w-full max-w-[1520px] px-6 sm:px-10 lg:px-16";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/* ============================================================
   STATIC PARAMS
============================================================ */

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

/* ============================================================
   METADATA
============================================================ */

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const study =
    getCaseStudyBySlug(slug);

  if (!study) {
    return {
      title:
        "Case Study Not Found | Starfii",
    };
  }

  return {
    title:
      `${study.title} | Starfii Business Process Services Case Study`,
    description:
      study.subtitle,
  };
}

/* ============================================================
   HELPERS
============================================================ */

function splitLead(text: string) {
  const index =
    text.indexOf(":");

  if (
    index > -1 &&
    index < 48
  ) {
    return {
      lead: text.slice(
        0,
        index
      ),
      rest: text
        .slice(index + 1)
        .trim(),
    };
  }

  return {
    lead: null,
    rest: text,
  };
}

function SectionEyebrow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p
      className="text-[12px] font-bold uppercase tracking-[0.18em]"
      style={{
        color: INDIGO_CTA,
      }}
    >
      {children}
    </p>
  );
}

function PointCard({
  text,
  icon,
  accent,
}: {
  text: string;
  icon: React.ReactNode;
  accent: string;
}) {
  const {
    lead,
    rest,
  } = splitLead(text);

  return (
    <div
      className="relative rounded-2xl border bg-white p-6 pl-7 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
      style={{
        borderColor:
          "#E5E1F5",
      }}
    >
      <span
        className="absolute bottom-5 left-0 top-5 w-[3px] rounded-full"
        style={{
          backgroundColor:
            accent,
        }}
      />

      <div className="flex items-start gap-3">
        <span className="mt-1 shrink-0">
          {icon}
        </span>

        <div>
          {lead && (
            <p
              className="text-[15px] font-semibold"
              style={{
                color:
                  CHAMPION_BLUE,
              }}
            >
              {lead}
            </p>
          )}

          <p
            className={`text-[15px] leading-7 text-slate-600 ${
              lead
                ? "mt-1"
                : ""
            }`}
          >
            {rest}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   AT A GLANCE
============================================================ */

function AtAGlance({
  study,
}: {
  study: (typeof caseStudies)[number];
}) {
  return (
    <aside className="lg:sticky lg:top-28">
      <div
        className="rounded-2xl border bg-white p-6"
        style={{
          borderColor:
            "#E5E1F5",
        }}
      >
        <div className="flex items-center gap-2">
          <Building2
            className="h-4 w-4"
            style={{
              color:
                INDIGO_CTA,
            }}
          />

          <p
            className="text-[12px] font-bold uppercase tracking-[0.16em]"
            style={{
              color:
                CHAMPION_BLUE,
            }}
          >
            At a glance
          </p>
        </div>

        <dl className="mt-6 space-y-5">
          <div>
            <dt className="text-[13px] text-slate-400">
              Client
            </dt>

            <dd
              className="mt-1 text-[15px] font-semibold"
              style={{
                color:
                  CHAMPION_BLUE,
              }}
            >
              {study.client}
            </dd>
          </div>

          <div>
            <dt className="text-[13px] text-slate-400">
              Industry
            </dt>

            <dd
              className="mt-1 text-[15px] font-semibold"
              style={{
                color:
                  CHAMPION_BLUE,
              }}
            >
              {study.industry}
            </dd>
          </div>

          <div>
            <dt className="flex items-center gap-1.5 text-[13px] text-slate-400">
              <Clock3 className="h-3.5 w-3.5" />
              Duration
            </dt>

            <dd
              className="mt-1 text-[15px] font-semibold"
              style={{
                color:
                  CHAMPION_BLUE,
              }}
            >
              {study.duration}
            </dd>
          </div>

          <div>
            <dt className="text-[13px] text-slate-400">
              Services
            </dt>

            <dd className="mt-2 flex flex-wrap gap-2">
              {study.services.map(
                (service) => (
                  <span
                    key={service}
                    className="rounded-full bg-[#F5F3FC] px-3 py-1.5 text-[12px] font-semibold text-slate-600"
                  >
                    {service}
                  </span>
                )
              )}
            </dd>
          </div>
        </dl>
      </div>

      {/* RESULTS */}

      <div
        className="mt-5 rounded-2xl border bg-white p-6"
        style={{
          borderColor:
            "#E5E1F5",
        }}
      >
        <p
          className="text-[12px] font-bold uppercase tracking-[0.16em]"
          style={{
            color:
              INDIGO_CTA,
          }}
        >
          Headline results
        </p>

        <div className="mt-5 space-y-5">
          {study.results.map(
            (result) => (
              <div
                key={`${result.metric}-${result.label}`}
                className="flex items-baseline gap-3"
              >
                <span
                  className="text-[25px] font-semibold tracking-tight"
                  style={{
                    color:
                      INDIGO_CTA,
                  }}
                >
                  {result.metric}
                </span>

                <span className="text-[13px] leading-5 text-slate-500">
                  {result.label}
                </span>
              </div>
            )
          )}
        </div>
      </div>

      {/* CTA */}

      <div
        className="mt-5 overflow-hidden rounded-2xl border bg-white"
        style={{
          borderColor:
            "#E5E1F5",
        }}
      >
        <div className="relative h-28">
          <img
            src={
              study.heroImage
            }
            alt=""
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#1B2560]/70 to-transparent" />

          <div className="absolute bottom-4 left-5 flex items-center gap-2 text-white">
            <Workflow className="h-4 w-4" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.14em]">
              Business Process Services
            </span>
          </div>
        </div>

        <div className="p-6">
          <p
            className="text-[16px] font-semibold"
            style={{
              color:
                CHAMPION_BLUE,
            }}
          >
            Get results like these
          </p>

          <p className="mt-2 text-[13px] leading-6 text-slate-500">
            Talk with Starfii about
            your business process
            opportunity.
          </p>

          <Link
            href="/services/business-process-services#connect"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-[13px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            style={{
              backgroundColor:
                INDIGO_CTA,
            }}
          >
            Book a Meeting

            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </aside>
  );
}

/* ============================================================
   RELATED CASE STUDIES
============================================================ */

function RelatedCaseStudies({
  currentSlug,
}: {
  currentSlug: string;
}) {
  const related =
    caseStudies
      .filter(
        (study) =>
          study.slug !==
          currentSlug
      )
      .slice(0, 4);

  return (
    <section
      className="border-t py-20 lg:py-24"
      style={{
        borderColor:
          "#E5E1F5",
      }}
    >
      <div className={ALIGN}>
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <SectionEyebrow>
              Explore More
            </SectionEyebrow>

            <h2
              className="mt-3 text-[30px] font-medium tracking-tight sm:text-[34px] lg:text-[40px]"
              style={{
                color:
                  CHAMPION_BLUE,
              }}
            >
              More Business Process Case Studies
            </h2>
          </div>

          <Link
            href={BASE_PATH}
            className="group inline-flex items-center gap-2 text-[14px] font-semibold"
            style={{
              color:
                INDIGO_CTA,
            }}
          >
            View all case studies

            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {related.map(
            (study) => (
              <Link
                key={study.slug}
                href={`${BASE_PATH}/${study.slug}`}
                className="group flex min-w-0 flex-col overflow-hidden rounded-[26px] border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                style={{
                  borderColor:
                    "#E5E1F5",
                }}
              >
                <div className="relative h-[225px] overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3.5 py-1.5 text-[11px] font-semibold text-slate-700 shadow-sm">
                    {study.industry}
                  </span>
                </div>

                <div className="flex min-h-[190px] flex-1 flex-col p-6">
                  <p
                    className="text-[11px] font-bold uppercase tracking-[0.14em]"
                    style={{
                      color:
                        INDIGO_CTA,
                    }}
                  >
                    Case Study
                  </p>

                  <h3
                    className="mt-2 line-clamp-3 text-[18px] font-semibold leading-[1.4]"
                    style={{
                      color:
                        CHAMPION_BLUE,
                    }}
                  >
                    {study.title}
                  </h3>

                  <span
                    className="mt-auto inline-flex items-center gap-2 pt-6 text-[13px] font-semibold"
                    style={{
                      color:
                        INDIGO_CTA,
                    }}
                  >
                    Read case study

                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PAGE
============================================================ */

export default async function BusinessProcessCaseStudyPage({
  params,
}: PageProps) {
  const { slug } =
    await params;

  const study =
    getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="overflow-hidden bg-white">

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#F1EFFF] to-[#DCD6FA]">
        <div className={ALIGN}>
          <div className="relative py-14 sm:py-16 lg:py-20">

            {/* decorative glow */}

            <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#A48FEA]/20 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[400px] w-[400px] rounded-full bg-[#4F3FE0]/10 blur-3xl" />

            {/* breadcrumb */}

            <nav
              aria-label="Breadcrumb"
              className="relative flex flex-wrap items-center gap-2 text-[13px] font-medium"
              style={{
                color:
                  CHAMPION_BLUE,
              }}
            >
              <Link
                href="/"
                className="hover:opacity-60"
              >
                Home
              </Link>

              <ArrowUpRight
                className="h-3.5 w-3.5 rotate-0"
              />

              <Link
                href="/services"
                className="hover:opacity-60"
              >
                Services
              </Link>

              <ArrowUpRight
                className="h-3.5 w-3.5"
              />

              <Link
                href={BASE_PATH}
                className="hover:opacity-60"
              >
                Business Process Services
              </Link>

              <ArrowUpRight
                className="h-3.5 w-3.5"
              />

              <span className="text-slate-500">
                {study.industry}
              </span>
            </nav>

            <div className="relative mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px] lg:gap-14">

              {/* LEFT */}

              <div>
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] text-white shadow-sm"
                  style={{
                    backgroundColor:
                      INDIGO_CTA,
                  }}
                >
                  <Workflow className="h-4 w-4" />

                  Business Process Services
                </div>

                <h1
                  className="mt-6 max-w-4xl text-[38px] font-medium leading-[1.08] tracking-[-0.035em] sm:text-[48px] lg:text-[58px]"
                  style={{
                    color:
                      CHAMPION_BLUE,
                  }}
                >
                  {study.title}
                </h1>

                <p className="mt-6 max-w-3xl text-[17px] leading-8 text-slate-600 sm:text-[18px]">
                  {study.subtitle}
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-[14px] text-slate-500">
                  <span
                    className="font-semibold"
                    style={{
                      color:
                        CHAMPION_BLUE,
                    }}
                  >
                    {study.client}
                  </span>

                  <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />

                  <span>
                    {study.industry}
                  </span>

                  <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />

                  <span>
                    {study.duration}
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {study.services.map(
                    (service) => (
                      <span
                        key={service}
                        className="rounded-full bg-white/90 px-3.5 py-2 text-[12px] font-semibold text-slate-600 shadow-sm"
                      >
                        {service}
                      </span>
                    )
                  )}
                </div>

                <div className="relative mt-10 overflow-hidden rounded-[28px] border border-white/80 bg-white shadow-[0_24px_70px_rgba(27,37,96,0.15)]">
                  <img
                    src={
                      study.heroImage
                    }
                    alt={
                      study.title
                    }
                    className="h-[300px] w-full object-cover sm:h-[400px] lg:h-[470px]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2560]/20 via-transparent to-transparent" />
                </div>
              </div>

              {/* RIGHT CTA */}

              <div className="lg:pt-12">
                <div className="rounded-[26px] border border-white/80 bg-white/95 p-7 shadow-[0_20px_60px_rgba(27,37,96,0.12)] backdrop-blur lg:sticky lg:top-24">

                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor:
                        "#F5F3FC",
                      color:
                        INDIGO_CTA,
                    }}
                  >
                    <Workflow className="h-5 w-5" />
                  </div>

                  <h2
                    className="mt-6 text-[23px] font-semibold"
                    style={{
                      color:
                        CHAMPION_BLUE,
                    }}
                  >
                    Book a Meeting
                  </h2>

                  <p className="mt-2 text-[14px] leading-6 text-slate-500">
                    Discuss your business
                    process transformation
                    opportunity with Starfii.
                  </p>

                  <Link
                    href="/services/business-process-services#connect"
                    className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[14px] font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                    style={{
                      backgroundColor:
                        CHAMPION_BLUE,
                    }}
                  >
                    Talk to a BPS Expert

                    <ArrowUpRight className="h-4 w-4" />
                  </Link>

                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <p className="text-[12px] leading-5 text-slate-400">
                      Process redesign,
                      automation, managed
                      operations, and
                      measurable SLA driven
                      delivery.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          TRANSITION
      ====================================================== */}

      <div className="h-12 bg-gradient-to-b from-[#DCD6FA] to-[#F1F3F7] sm:h-16" />

      {/* ======================================================
          STICKY TABS
      ====================================================== */}

      <CaseStudyTabs />

      {/* ======================================================
          CONTENT
      ====================================================== */}

      <div className="bg-[#F1F3F7]">

        <div className={ALIGN}>
          <div className="py-12 sm:py-14 lg:py-16">

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">

              {/* ==================================================
                  MAIN ARTICLE
              ================================================== */}

              <article className="rounded-[26px] bg-white p-7 shadow-[0_1px_3px_rgba(15,23,42,0.04)] sm:p-10 lg:p-12">

                {/* CLIENT */}

                <section
                  id="client"
                  className="scroll-mt-28"
                >
                  <SectionEyebrow>
                    Client
                  </SectionEyebrow>

                  <h2
                    className="mt-4 max-w-4xl text-[29px] font-semibold leading-tight sm:text-[34px]"
                    style={{
                      color:
                        CHAMPION_BLUE,
                    }}
                  >
                    {study.overview}
                  </h2>

                  <p className="mt-6 max-w-3xl text-[16px] leading-8 text-slate-600">
                    {study.clientOverview}
                  </p>
                </section>

                <div className="my-16 h-px bg-slate-100" />

                {/* CHALLENGE */}

                <section
                  id="challenge"
                  className="scroll-mt-28"
                >
                  <SectionEyebrow>
                    Challenge
                  </SectionEyebrow>

                  <h2
                    className="mt-4 max-w-4xl text-[29px] font-semibold leading-tight sm:text-[34px]"
                    style={{
                      color:
                        CHAMPION_BLUE,
                    }}
                  >
                    {study.challengeIntro}
                  </h2>

                  <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {study.challengePoints.map(
                      (
                        point,
                        index
                      ) => (
                        <PointCard
                          key={`${point}-${index}`}
                          text={point}
                          accent="#F59E0B"
                          icon={
                            <AlertCircle className="h-4 w-4 text-amber-500" />
                          }
                        />
                      )
                    )}
                  </div>
                </section>

                <div className="my-16 h-px bg-slate-100" />

                {/* SOLUTION */}

                <section
                  id="solution"
                  className="scroll-mt-28"
                >
                  <SectionEyebrow>
                    Solution
                  </SectionEyebrow>

                  <h2
                    className="mt-4 max-w-4xl text-[29px] font-semibold leading-tight sm:text-[34px]"
                    style={{
                      color:
                        CHAMPION_BLUE,
                    }}
                  >
                    {study.solutionIntro}
                  </h2>

                  <p className="mt-6 max-w-3xl text-[16px] leading-8 text-slate-600">
                    {study.solutionDetail}
                  </p>

                  <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {study.solution.map(
                      (
                        point,
                        index
                      ) => (
                        <PointCard
                          key={`${point}-${index}`}
                          text={point}
                          accent={
                            INDIGO_CTA
                          }
                          icon={
                            <CheckCircle2
                              className="h-4 w-4"
                              style={{
                                color:
                                  INDIGO_CTA,
                              }}
                            />
                          }
                        />
                      )
                    )}
                  </div>
                </section>

                <div className="my-16 h-px bg-slate-100" />

                {/* BUSINESS VALUE */}

                <section>
                  <SectionEyebrow>
                    Business Value
                  </SectionEyebrow>

                  <h2
                    className="mt-4 max-w-4xl text-[29px] font-semibold leading-tight sm:text-[34px]"
                    style={{
                      color:
                        CHAMPION_BLUE,
                    }}
                  >
                    Built for measurable operational improvement
                  </h2>

                  <p className="mt-5 max-w-3xl text-[16px] leading-8 text-slate-600">
                    {study.summary}
                  </p>

                  <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {[
                      {
                        icon: Settings2,
                        title:
                          "Optimize",
                        text:
                          "Remove unnecessary hand offs, rework, and process variation.",
                      },
                      {
                        icon: Zap,
                        title:
                          "Automate",
                        text:
                          "Use automation where transaction volume and process clarity justify it.",
                      },
                      {
                        icon: Gauge,
                        title:
                          "Measure",
                        text:
                          "Track operational performance through defined metrics and SLAs.",
                      },
                    ].map(
                      (item) => {
                        const Icon =
                          item.icon;

                        return (
                          <div
                            key={
                              item.title
                            }
                            className="rounded-2xl bg-[#F7F6FB] p-6"
                          >
                            <Icon
                              className="h-5 w-5"
                              style={{
                                color:
                                  INDIGO_CTA,
                              }}
                            />

                            <h3
                              className="mt-4 text-[17px] font-semibold"
                              style={{
                                color:
                                  CHAMPION_BLUE,
                              }}
                            >
                              {item.title}
                            </h3>

                            <p className="mt-2 text-[13px] leading-6 text-slate-600">
                              {item.text}
                            </p>
                          </div>
                        );
                      }
                    )}
                  </div>
                </section>
              </article>

              {/* SIDEBAR */}

              <AtAGlance
                study={study}
              />

            </div>
          </div>
        </div>

        {/* ======================================================
            RESULTS
        ====================================================== */}

        <section
          id="results"
          className="scroll-mt-28 bg-[#1B2560] py-16 sm:py-20"
        >
          <div className={ALIGN}>

            <div className="max-w-3xl">
              <SectionEyebrow>
                Results
              </SectionEyebrow>

              <h2 className="mt-4 text-[32px] font-semibold tracking-tight text-white sm:text-[38px]">
                Results That Matter
              </h2>

              <p className="mt-4 text-[16px] leading-7 text-slate-300">
                The engagement was measured against concrete
                operational outcomes rather than activity alone.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 overflow-hidden rounded-[24px] border border-white/10 sm:grid-cols-3">
              {study.results.map(
                (
                  result,
                  index
                ) => (
                  <div
                    key={`${result.metric}-${result.label}`}
                    className={`p-7 sm:p-9 ${
                      index !== 0
                        ? "border-t border-white/10 sm:border-l sm:border-t-0"
                        : ""
                    }`}
                  >
                    <p className="text-[42px] font-semibold tracking-tight text-[#A48FEA] sm:text-[48px]">
                      {result.metric}
                    </p>

                    <div className="mt-5 h-px w-10 bg-[#A48FEA]" />

                    <p className="mt-4 max-w-[220px] text-[14px] leading-6 text-slate-300">
                      {result.label}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* ======================================================
            BENEFITS / SUMMARY / TECHNOLOGY
        ====================================================== */}

        <div className={ALIGN}>
          <div className="py-12 sm:py-14 lg:py-16">

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">

              <article className="rounded-[26px] bg-white p-7 shadow-[0_1px_3px_rgba(15,23,42,0.04)] sm:p-10 lg:p-12">

                {/* BENEFITS */}

                <section
                  id="benefits"
                  className="scroll-mt-28"
                >
                  <SectionEyebrow>
                    Benefits
                  </SectionEyebrow>

                  <h2
                    className="mt-4 max-w-4xl text-[29px] font-semibold leading-tight sm:text-[34px]"
                    style={{
                      color:
                        CHAMPION_BLUE,
                    }}
                  >
                    {study.benefitsIntro}
                  </h2>

                  <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {study.benefits.map(
                      (
                        benefit,
                        index
                      ) => (
                        <PointCard
                          key={`${benefit}-${index}`}
                          text={
                            benefit
                          }
                          accent="#10B981"
                          icon={
                            <TrendingUp className="h-4 w-4 text-emerald-500" />
                          }
                        />
                      )
                    )}
                  </div>
                </section>

                <div className="my-16 h-px bg-slate-100" />

                {/* SUMMARY */}

                <section
                  id="summary"
                  className="scroll-mt-28"
                >
                  <SectionEyebrow>
                    Summary
                  </SectionEyebrow>

                  <p
                    className="mt-5 max-w-4xl text-[22px] font-medium leading-9 sm:text-[25px]"
                    style={{
                      color:
                        CHAMPION_BLUE,
                    }}
                  >
                    {study.summary}
                  </p>
                </section>

                <div className="my-16 h-px bg-slate-100" />

                {/* TECHNOLOGY */}

                <section
                  id="technology"
                  className="scroll-mt-28"
                >
                  <SectionEyebrow>
                    Technology & Operations
                  </SectionEyebrow>

                  <h2
                    className="mt-4 text-[29px] font-semibold sm:text-[34px]"
                    style={{
                      color:
                        CHAMPION_BLUE,
                    }}
                  >
                    Technology Used
                  </h2>

                  <p className="mt-4 max-w-3xl text-[15px] leading-7 text-slate-600">
                    The technology and operational capabilities were
                    selected around the process requirements, transaction
                    volume, control environment, and service delivery
                    model.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {study.techStack.map(
                      (technology) => (
                        <span
                          key={
                            technology
                          }
                          className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[13px] font-semibold text-slate-600 transition-colors hover:border-[#A48FEA] hover:text-[#4F3FE0]"
                        >
                          {technology}
                        </span>
                      )
                    )}
                  </div>
                </section>

              </article>

              {/* BPS SIDEBAR */}

              <aside className="lg:sticky lg:top-28 lg:self-start">

                <div
                  className="rounded-[24px] border bg-white p-7"
                  style={{
                    borderColor:
                      "#E5E1F5",
                  }}
                >
                  <p
                    className="text-[12px] font-bold uppercase tracking-[0.16em]"
                    style={{
                      color:
                        INDIGO_CTA,
                    }}
                  >
                    BPS Capabilities
                  </p>

                  <h3
                    className="mt-4 text-[22px] font-semibold leading-tight"
                    style={{
                      color:
                        CHAMPION_BLUE,
                    }}
                  >
                    Designed around better business outcomes
                  </h3>

                  <div className="mt-6 space-y-3">

                    {[
                      {
                        icon: Workflow,
                        text:
                          "Process redesign",
                      },
                      {
                        icon: Zap,
                        text:
                          "Intelligent automation",
                      },
                      {
                        icon: UsersRound,
                        text:
                          "Managed operations",
                      },
                      {
                        icon: ShieldCheck,
                        text:
                          "Compliance controls",
                      },
                      {
                        icon: Gauge,
                        text:
                          "SLA based performance",
                      },
                    ].map(
                      ({
                        icon: Icon,
                        text,
                      }) => (
                        <div
                          key={text}
                          className="flex items-start gap-3 rounded-xl bg-[#F7F6FB] p-4"
                        >
                          <Icon
                            className="mt-0.5 h-4 w-4 shrink-0"
                            style={{
                              color:
                                INDIGO_CTA,
                            }}
                          />

                          <span className="text-[13px] leading-5 text-slate-600">
                            {text}
                          </span>
                        </div>
                      )
                    )}

                  </div>

                  <Link
                    href="/services/business-process-services#connect"
                    className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[13px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                    style={{
                      backgroundColor:
                        INDIGO_CTA,
                    }}
                  >
                    Start a BPS Project

                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

              </aside>

            </div>
          </div>
        </div>
      </div>

      {/* ======================================================
          RELATED
      ====================================================== */}

      <RelatedCaseStudies
        currentSlug={
          study.slug
        }
      />

      {/* ======================================================
          FINAL CTA
      ====================================================== */}

      <section className="border-t border-slate-100 bg-[#F7F7FA] py-16 sm:py-20 lg:py-24">
        <div
          className={`${ALIGN} text-center`}
        >
          <SectionEyebrow>
            Business Process Transformation
          </SectionEyebrow>

          <h2
            className="mx-auto mt-4 max-w-3xl text-[32px] font-medium leading-tight tracking-tight sm:text-[40px] lg:text-[46px]"
            style={{
              color:
                CHAMPION_BLUE,
            }}
          >
            Have a similar
            business process
            challenge?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-8 text-slate-600">
            Let's discuss how Starfii can redesign, automate, and
            operate the processes behind your business.
          </p>

          <Link
            href="/services/business-process-services#connect"
            className="group mt-8 inline-flex items-center gap-2 rounded-full px-7 py-4 text-[14px] font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            style={{
              backgroundColor:
                CHAMPION_BLUE,
            }}
          >
            Request a BPS Consultation

            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>

      {/* ======================================================
          BACK
      ====================================================== */}

      <div className="border-t border-slate-100">
        <div className={`${ALIGN} py-9`}>
          <Link
            href={BASE_PATH}
            className="group inline-flex items-center gap-2 text-[14px] font-semibold"
            style={{
              color:
                INDIGO_CTA,
            }}
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />

            Back to Business Process Services
          </Link>
        </div>
      </div>
    </main>
  );
}
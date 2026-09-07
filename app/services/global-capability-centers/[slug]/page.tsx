import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  Globe2,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";

import {
  caseStudies,
  getCaseStudyBySlug,
} from "../data/case-studies";

import CaseStudyTabs from "../CaseStudyTabs";

const CHAMPION_BLUE = "#1B2560";
const LAVENDER_ACCENT = "#A48FEA";
const INDIGO_CTA = "#4F3FE0";

const ALIGN =
  "mx-auto w-full max-w-[1520px] px-6 sm:px-10 lg:px-16";

const BASE_PATH =
  "/services/global-capability-centers";

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
   SEO
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
    title: `${study.title} | Starfii Global Capability Center Case Study`,
    description: study.body,
  };
}

/* ============================================================
   SMALL REUSABLE COMPONENTS
============================================================ */

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
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="relative rounded-2xl border bg-white p-6 pl-7 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
      style={{
        borderColor: "#E5E1F5",
      }}
    >
      <div className="flex items-start gap-4">

        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[11px] font-bold"
          style={{
            backgroundColor: "#F1EEFC",
            color: INDIGO_CTA,
          }}
        >
          {number}
        </span>

        <p className="text-[15px] leading-7 text-slate-600">
          {children}
        </p>

      </div>
    </div>
  );
}

function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{
        borderColor: "#E5E1F5",
      }}
    >
      <div
        className="absolute -right-10 -top-10 h-28 w-28 rounded-full blur-3xl transition-transform duration-500 group-hover:scale-150"
        style={{
          backgroundColor: `${LAVENDER_ACCENT}28`,
        }}
      />

      <div className="relative">

        <p
          className="text-[40px] font-semibold tracking-tight"
          style={{
            color: INDIGO_CTA,
          }}
        >
          {value}
        </p>

        <div
          className="mt-4 h-px w-10"
          style={{
            backgroundColor: LAVENDER_ACCENT,
          }}
        />

        <p className="mt-4 text-[14px] leading-6 text-slate-600">
          {label}
        </p>

      </div>
    </div>
  );
}

/* ============================================================
   SIDEBAR
============================================================ */

function AtAGlanceSidebar({
  study,
}: {
  study: (typeof caseStudies)[number];
}) {
  return (
    <aside className="lg:sticky lg:top-28">

      {/* Project details */}

      <div
        className="rounded-2xl border bg-white p-6"
        style={{
          borderColor: "#E5E1F5",
        }}
      >

        <div className="flex items-center gap-2">

          <Building2
            size={17}
            style={{
              color: INDIGO_CTA,
            }}
          />

          <p
            className="text-[12px] font-bold uppercase tracking-[0.15em]"
            style={{
              color: CHAMPION_BLUE,
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
                color: CHAMPION_BLUE,
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
                color: CHAMPION_BLUE,
              }}
            >
              {study.industry}
            </dd>
          </div>

          <div>
            <dt className="text-[13px] text-slate-400">
              Duration
            </dt>

            <dd
              className="mt-1 text-[15px] font-semibold"
              style={{
                color: CHAMPION_BLUE,
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

              {study.services.map((service) => (
                <span
                  key={service}
                  className="rounded-full px-3 py-1.5 text-[12px] font-medium"
                  style={{
                    backgroundColor: "#F1EEFC",
                    color: INDIGO_CTA,
                  }}
                >
                  {service}
                </span>
              ))}

            </dd>

          </div>

        </dl>

      </div>

      {/* Headline results */}

      <div
        className="mt-5 rounded-2xl border bg-white p-6"
        style={{
          borderColor: "#E5E1F5",
        }}
      >

        <p
          className="text-[12px] font-bold uppercase tracking-[0.15em]"
          style={{
            color: INDIGO_CTA,
          }}
        >
          Headline results
        </p>

        <div className="mt-5 space-y-5">

          {study.stats.map((stat, index) => (
            <div
              key={`${stat.label}-${index}`}
              className="flex items-baseline gap-3"
            >

              <span
                className="text-[25px] font-semibold"
                style={{
                  color: INDIGO_CTA,
                }}
              >
                {stat.value}
              </span>

              <span className="text-[13px] leading-5 text-slate-500">
                {stat.label}
              </span>

            </div>
          ))}

        </div>

      </div>

      {/* CTA card */}

      <div
        className="mt-5 overflow-hidden rounded-2xl border bg-white"
        style={{
          borderColor: "#E5E1F5",
        }}
      >

        <div className="h-28 overflow-hidden">

          <img
            src={study.heroImage ?? study.image}
            alt=""
            className="h-full w-full object-cover"
          />

        </div>

        <div className="p-6">

          <p
            className="text-[17px] font-semibold"
            style={{
              color: CHAMPION_BLUE,
            }}
          >
            Build your GCC with Starfii
          </p>

          <p className="mt-2 text-[13px] leading-6 text-slate-500">
            From entity setup and talent strategy to governance
            and operational scale.
          </p>

          <Link
            href={`${BASE_PATH}#connect`}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-[13px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            style={{
              backgroundColor: INDIGO_CTA,
            }}
          >
            Talk to Starfii
            <ArrowUpRight size={15} />
          </Link>

        </div>

      </div>

    </aside>
  );
}

/* ============================================================
   RELATED CASE STUDIES SIDEBAR
============================================================ */

function MoreCaseStudiesSidebar({
  currentSlug,
}: {
  currentSlug: string;
}) {
  const others = caseStudies
    .filter(
      (study) =>
        study.slug !== currentSlug
    )
    .slice(0, 3);

  if (!others.length) {
    return null;
  }

  return (
    <aside className="lg:sticky lg:top-28">

      <div
        className="rounded-2xl border bg-white p-6"
        style={{
          borderColor: "#E5E1F5",
        }}
      >

        <p
          className="text-[12px] font-bold uppercase tracking-[0.15em]"
          style={{
            color: INDIGO_CTA,
          }}
        >
          More case studies
        </p>

        <div className="mt-6 space-y-6">

          {others.map((study) => (
            <Link
              key={study.slug}
              href={`${BASE_PATH}/${study.slug}`}
              className="group block"
            >

              <div className="overflow-hidden rounded-xl">

                <img
                  src={study.image}
                  alt={study.title}
                  className="h-24 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

              </div>

              <p
                className="mt-3 text-[11px] font-bold uppercase tracking-[0.12em]"
                style={{
                  color: INDIGO_CTA,
                }}
              >
                {study.industry}
              </p>

              <p
                className="mt-1 text-[15px] font-semibold leading-snug transition-colors group-hover:text-[#4F3FE0]"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                {study.title}
              </p>

            </Link>
          ))}

        </div>

        <Link
          href={BASE_PATH}
          className="mt-7 inline-flex items-center gap-2 text-[13px] font-semibold"
          style={{
            color: INDIGO_CTA,
          }}
        >
          View all case studies
          <ArrowUpRight size={15} />
        </Link>

      </div>

    </aside>
  );
}

/* ============================================================
   PAGE
============================================================ */

export default async function CaseStudyDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const related = caseStudies
    .filter(
      (item) =>
        item.slug !== study.slug
    )
    .slice(0, 4);

  return (
    <main className="overflow-hidden bg-white">

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative isolate overflow-hidden bg-white">

        {/* Decorative glow */}

        <div
          className="pointer-events-none absolute -right-32 top-20 -z-10 h-[430px] w-[430px] rounded-full blur-3xl"
          style={{
            backgroundColor:
              `${LAVENDER_ACCENT}20`,
          }}
        />

        <div
          className="pointer-events-none absolute -bottom-20 left-1/3 -z-10 h-[300px] w-[300px] rounded-full blur-3xl"
          style={{
            backgroundColor:
              `${INDIGO_CTA}12`,
          }}
        />

        {/* Desktop hero image */}

        <div className="pointer-events-none absolute right-0 top-0 -z-10 hidden h-full w-[55%] lg:block">

          <div className="absolute inset-0 bg-[#F5F3FC]" />

          <img
            src={
              study.heroImage ??
              study.image
            }
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div
            className="absolute inset-y-0 left-0 w-[55%]"
            style={{
              background:
                "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.96) 30%, rgba(255,255,255,0.55) 68%, rgba(255,255,255,0) 100%)",
            }}
          />

          <div
            className="absolute inset-x-0 top-0 h-32"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0))",
            }}
          />

          <div
            className="absolute inset-x-0 bottom-0 h-40"
            style={{
              background:
                "linear-gradient(to top, #ffffff, rgba(255,255,255,0))",
            }}
          />

        </div>

        <div
          className={`${ALIGN} relative min-h-[690px] py-20 lg:min-h-[750px] lg:py-28`}
        >

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
              href="/services"
              className="transition-opacity hover:opacity-60"
            >
              Services
            </Link>

            <ChevronRight size={14} />

            <Link
              href="/services/global-capability-centers"
              className="transition-opacity hover:opacity-60"
            >
              Global Capability Centers
            </Link>

            <ChevronRight size={14} />

            <span className="text-slate-500">
              Case Studies
            </span>

          </nav>

          {/* Mobile image */}

          <div className="mt-8 overflow-hidden rounded-3xl border border-[#E5E1F5] lg:hidden">

            <img
              src={
                study.heroImage ??
                study.image
              }
              alt={study.title}
              className="h-[280px] w-full object-cover"
            />

          </div>

          {/* Hero content */}

          <div className="relative z-10 max-w-[790px] pt-8 lg:pt-14">

            {/* Badge */}

            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold text-white shadow-lg"
              style={{
                backgroundColor:
                  INDIGO_CTA,
              }}
            >

              <Globe2 size={15} />

              Global Capability Centers

            </div>

            {/* Title */}

            <h1
              className="mt-7 max-w-[790px] text-[38px] font-medium leading-[1.08] tracking-[-0.035em] sm:text-[48px] lg:text-[60px]"
              style={{
                color:
                  CHAMPION_BLUE,
              }}
            >
              {study.title}
            </h1>

            {/* Description */}

            <p className="mt-7 max-w-[700px] text-[17px] leading-8 text-slate-600 lg:text-[18px]">
              {study.body}
            </p>

            {/* Meta */}

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-[14px] text-slate-500">

              <span>
                <strong
                  className="font-semibold"
                  style={{
                    color:
                      CHAMPION_BLUE,
                  }}
                >
                  Client:
                </strong>{" "}
                {study.client}
              </span>

              <span>
                <strong
                  className="font-semibold"
                  style={{
                    color:
                      CHAMPION_BLUE,
                  }}
                >
                  Industry:
                </strong>{" "}
                {study.industry}
              </span>

              <span>
                <strong
                  className="font-semibold"
                  style={{
                    color:
                      CHAMPION_BLUE,
                  }}
                >
                  Duration:
                </strong>{" "}
                {study.duration}
              </span>

            </div>

            {/* CTA */}

            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                href={`${BASE_PATH}#connect`}
                className="group inline-flex items-center gap-2 rounded-full px-7 py-4 text-[14px] font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                style={{
                  backgroundColor:
                    CHAMPION_BLUE,
                }}
              >
                Build a GCC with Starfii

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />

              </Link>

              <Link
                href="#impact"
                className="inline-flex items-center gap-2 rounded-full border bg-white px-7 py-4 text-[14px] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                style={{
                  borderColor:
                    LAVENDER_ACCENT,
                  color:
                    CHAMPION_BLUE,
                }}
              >
                Explore the impact
                <ChevronRight size={16} />
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* ======================================================
          AT A GLANCE
      ====================================================== */}

      <div className={ALIGN}>

        <section className="mt-16">

          <div
            className="overflow-hidden rounded-[22px] border bg-white"
            style={{
              borderColor:
                LAVENDER_ACCENT,
            }}
          >

            {/* Header */}

            <div
              className="flex min-h-[104px] items-center justify-between px-8 py-6 lg:px-10"
              style={{
                borderBottom:
                  `1px solid ${LAVENDER_ACCENT}`,
              }}
            >

              <div className="flex items-center gap-3">

                <Globe2
                  size={21}
                  strokeWidth={1.8}
                  style={{
                    color:
                      LAVENDER_ACCENT,
                  }}
                />

                <span
                  className="text-[17px] font-semibold"
                  style={{
                    color:
                      CHAMPION_BLUE,
                  }}
                >
                  Global Capability Center at a Glance
                </span>

              </div>

              <span
                className="hidden rounded-full px-5 py-2.5 text-[13px] font-semibold sm:inline-flex"
                style={{
                  backgroundColor:
                    "#F1EEFC",
                  color:
                    INDIGO_CTA,
                }}
              >
                End to End GCC Setup
              </span>

            </div>

            {/* Three columns */}

            <div className="grid grid-cols-1 gap-10 px-8 py-10 md:grid-cols-3 lg:px-10">

              <div>

                <h3
                  className="text-[23px] font-semibold"
                  style={{
                    color:
                      CHAMPION_BLUE,
                  }}
                >
                  Set Up
                </h3>

                <p className="mt-4 text-[15px] leading-[1.8] text-slate-600">
                  Establish the right entity, infrastructure,
                  compliance framework, and operating foundation
                  for your Global Capability Center.
                </p>

              </div>

              <div>

                <h3
                  className="text-[23px] font-semibold"
                  style={{
                    color:
                      CHAMPION_BLUE,
                  }}
                >
                  Build
                </h3>

                <p className="mt-4 text-[15px] leading-[1.8] text-slate-600">
                  Build the right talent model, hiring plan,
                  onboarding process, governance structure,
                  and collaboration model.
                </p>

              </div>

              <div>

                <h3
                  className="text-[23px] font-semibold"
                  style={{
                    color:
                      CHAMPION_BLUE,
                  }}
                >
                  Scale
                </h3>

                <p className="mt-4 text-[15px] leading-[1.8] text-slate-600">
                  Scale from the first cohort to steady state
                  operations with phased headcount, knowledge
                  transfer, governance, and measurable outcomes.
                </p>

              </div>

            </div>

          </div>

          <p
            className="mt-10 max-w-4xl text-[26px] leading-snug lg:text-[30px]"
            style={{
              color:
                CHAMPION_BLUE,
            }}
          >
            A Global Capability Center partner, Starfii helps
            enterprises establish, operate, and scale GCCs with
            talent, technology, governance, compliance, and
            delivery capabilities connected from day one.
          </p>

        </section>

      </div>

      {/* ======================================================
          TABS
      ====================================================== */}

      <div className="mt-20">
        <CaseStudyTabs />
      </div>

      {/* ======================================================
          MAIN CASE STUDY CONTENT
      ====================================================== */}

      <div
        className="bg-[#F6F5FA]"
        style={{
          borderTop:
            "1px solid #E5E1F5",
        }}
      >

        <div
          className={`${ALIGN} py-14 lg:py-16`}
        >

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">

            {/* ==================================================
                MAIN ARTICLE
            ================================================== */}

            <article
              className="rounded-2xl bg-white p-8 shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:p-10 lg:p-12"
            >

              {/* ==================================================
                  CLIENT
              ================================================== */}

              <section
                id="client"
                className="scroll-mt-24"
              >

                <SectionEyebrow>
                  01 / Client
                </SectionEyebrow>

                <h2
                  className="mt-4 max-w-3xl text-[30px] font-semibold leading-tight lg:text-[36px]"
                  style={{
                    color:
                      CHAMPION_BLUE,
                  }}
                >
                  {study.overview}
                </h2>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  <div
                    className="rounded-2xl border p-5"
                    style={{
                      borderColor:
                        "#E5E1F5",
                      backgroundColor:
                        "#FAF9FE",
                    }}
                  >

                    <Users
                      size={20}
                      style={{
                        color:
                          INDIGO_CTA,
                      }}
                    />

                    <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
                      Client
                    </p>

                    <p
                      className="mt-2 text-[14px] font-semibold"
                      style={{
                        color:
                          CHAMPION_BLUE,
                      }}
                    >
                      {study.client}
                    </p>

                  </div>

                  <div
                    className="rounded-2xl border p-5"
                    style={{
                      borderColor:
                        "#E5E1F5",
                      backgroundColor:
                        "#FAF9FE",
                    }}
                  >

                    <Globe2
                      size={20}
                      style={{
                        color:
                          INDIGO_CTA,
                      }}
                    />

                    <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
                      Industry
                    </p>

                    <p
                      className="mt-2 text-[14px] font-semibold"
                      style={{
                        color:
                          CHAMPION_BLUE,
                      }}
                    >
                      {study.industry}
                    </p>

                  </div>

                  <div
                    className="rounded-2xl border p-5"
                    style={{
                      borderColor:
                        "#E5E1F5",
                      backgroundColor:
                        "#FAF9FE",
                    }}
                  >

                    <Workflow
                      size={20}
                      style={{
                        color:
                          INDIGO_CTA,
                      }}
                    />

                    <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
                      Engagement
                    </p>

                    <p
                      className="mt-2 text-[14px] font-semibold"
                      style={{
                        color:
                          CHAMPION_BLUE,
                      }}
                    >
                      {study.duration}
                    </p>

                  </div>

                </div>

              </section>

              {/* ==================================================
                  CHALLENGE
              ================================================== */}

              <section
                id="challenge"
                className="mt-20 scroll-mt-24"
              >

                <SectionEyebrow>
                  02 / Challenge
                </SectionEyebrow>

                <h2
                  className="mt-4 max-w-3xl text-[30px] font-semibold leading-tight lg:text-[36px]"
                  style={{
                    color:
                      CHAMPION_BLUE,
                  }}
                >
                  The GCC challenge
                </h2>

                <p className="mt-5 max-w-3xl text-[16px] leading-8 text-slate-600">
                  {study.challenge}
                </p>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

                  <PointCard number="01">
                    Establish the right operating model without
                    creating unnecessary complexity.
                  </PointCard>

                  <PointCard number="02">
                    Build the right talent and capability mix for
                    the GCC mandate.
                  </PointCard>

                  <PointCard number="03">
                    Maintain strong governance and alignment with
                    global headquarters.
                  </PointCard>

                  <PointCard number="04">
                    Create a foundation that can scale as the GCC
                    grows.
                  </PointCard>

                </div>

              </section>

              {/* ==================================================
                  SOLUTION
              ================================================== */}

              <section
                id="solution"
                className="mt-20 scroll-mt-24"
              >

                <SectionEyebrow>
                  03 / Solution
                </SectionEyebrow>

                <h2
                  className="mt-4 max-w-3xl text-[30px] font-semibold leading-tight lg:text-[36px]"
                  style={{
                    color:
                      CHAMPION_BLUE,
                  }}
                >
                  The Starfii GCC solution
                </h2>

                <p className="mt-5 max-w-3xl text-[16px] leading-8 text-slate-600">
                  {study.solution}
                </p>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

                  <div
                    className="rounded-2xl border p-6"
                    style={{
                      borderColor:
                        "#E5E1F5",
                      backgroundColor:
                        "#FAF9FE",
                    }}
                  >

                    <Globe2
                      size={22}
                      style={{
                        color:
                          INDIGO_CTA,
                      }}
                    />

                    <h3
                      className="mt-5 text-[18px] font-semibold"
                      style={{
                        color:
                          CHAMPION_BLUE,
                      }}
                    >
                      GCC Setup
                    </h3>

                    <p className="mt-3 text-[14px] leading-7 text-slate-600">
                      Entity formation, infrastructure,
                      operational readiness, and local setup
                      sequenced as one connected program.
                    </p>

                  </div>

                  <div
                    className="rounded-2xl border p-6"
                    style={{
                      borderColor:
                        "#E5E1F5",
                      backgroundColor:
                        "#FAF9FE",
                    }}
                  >

                    <Users
                      size={22}
                      style={{
                        color:
                          INDIGO_CTA,
                      }}
                    />

                    <h3
                      className="mt-5 text-[18px] font-semibold"
                      style={{
                        color:
                          CHAMPION_BLUE,
                      }}
                    >
                      Talent Strategy
                    </h3>

                    <p className="mt-3 text-[14px] leading-7 text-slate-600">
                      Role architecture, hiring, onboarding, and
                      capability development aligned to the GCC
                      mandate.
                    </p>

                  </div>

                  <div
                    className="rounded-2xl border p-6"
                    style={{
                      borderColor:
                        "#E5E1F5",
                      backgroundColor:
                        "#FAF9FE",
                    }}
                  >

                    <ShieldCheck
                      size={22}
                      style={{
                        color:
                          INDIGO_CTA,
                      }}
                    />

                    <h3
                      className="mt-5 text-[18px] font-semibold"
                      style={{
                        color:
                          CHAMPION_BLUE,
                      }}
                    >
                      Governance & Compliance
                    </h3>

                    <p className="mt-3 text-[14px] leading-7 text-slate-600">
                      Clear decision rights, reporting lines,
                      security, compliance, and operational
                      controls from the start.
                    </p>

                  </div>

                  <div
                    className="rounded-2xl border p-6"
                    style={{
                      borderColor:
                        "#E5E1F5",
                      backgroundColor:
                        "#FAF9FE",
                    }}
                  >

                    <TrendingUp
                      size={22}
                      style={{
                        color:
                          INDIGO_CTA,
                      }}
                    />

                    <h3
                      className="mt-5 text-[18px] font-semibold"
                      style={{
                        color:
                          CHAMPION_BLUE,
                      }}
                    >
                      Scale & Transition
                    </h3>

                    <p className="mt-3 text-[14px] leading-7 text-slate-600">
                      Phased headcount growth, knowledge transfer,
                      delivery transition, and steady state
                      operating support.
                    </p>

                  </div>

                </div>

              </section>

              {/* ==================================================
                  RESULTS
              ================================================== */}

              <section
                id="impact"
                className="mt-20 scroll-mt-24"
              >

                <SectionEyebrow>
                  04 / Results
                </SectionEyebrow>

                <h2
                  className="mt-4 max-w-3xl text-[30px] font-semibold leading-tight lg:text-[36px]"
                  style={{
                    color:
                      CHAMPION_BLUE,
                  }}
                >
                  Measurable GCC impact
                </h2>

                <p className="mt-5 max-w-3xl text-[16px] leading-8 text-slate-600">
                  {study.results}
                </p>

                <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-3">

                  {study.stats.map(
                    (stat, index) => (
                      <StatCard
                        key={`${stat.label}-${index}`}
                        value={stat.value}
                        label={stat.label}
                      />
                    )
                  )}

                </div>

              </section>

              {/* ==================================================
                  OPERATING BENEFITS
              ================================================== */}

              <section className="mt-20">

                <SectionEyebrow>
                  GCC Value
                </SectionEyebrow>

                <h2
                  className="mt-4 max-w-3xl text-[30px] font-semibold leading-tight lg:text-[36px]"
                  style={{
                    color:
                      CHAMPION_BLUE,
                  }}
                >
                  What this GCC foundation enables
                </h2>

                <div className="mt-8 space-y-4">

                  {[
                    "Faster access to specialized global talent.",
                    "Clearer alignment between GCC teams and headquarters.",
                    "Stronger governance and operational control.",
                    "A scalable foundation for future capability expansion.",
                  ].map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-start gap-4 rounded-2xl border p-5"
                      style={{
                        borderColor:
                          "#E5E1F5",
                      }}
                    >

                      <CheckCircle2
                        size={20}
                        className="mt-0.5 shrink-0"
                        style={{
                          color:
                            INDIGO_CTA,
                        }}
                      />

                      <p className="text-[15px] leading-7 text-slate-600">
                        {benefit}
                      </p>

                    </div>
                  ))}

                </div>

              </section>

              {/* ==================================================
                  SERVICES
              ================================================== */}

              <section className="mt-20">

                <SectionEyebrow>
                  Services Delivered
                </SectionEyebrow>

                <h2
                  className="mt-4 text-[30px] font-semibold leading-tight lg:text-[36px]"
                  style={{
                    color:
                      CHAMPION_BLUE,
                  }}
                >
                  GCC capabilities delivered
                </h2>

                <div className="mt-8 flex flex-wrap gap-3">

                  {study.services.map(
                    (service) => (
                      <span
                        key={service}
                        className="inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-[13px] font-semibold"
                        style={{
                          borderColor:
                            "#DCD7EF",
                          color:
                            CHAMPION_BLUE,
                          backgroundColor:
                            "#FAF9FE",
                        }}
                      >
                        <CheckCircle2
                          size={15}
                          style={{
                            color:
                              INDIGO_CTA,
                          }}
                        />

                        {service}
                      </span>
                    )
                  )}

                </div>

              </section>

              {/* ==================================================
                  FINAL SUMMARY
              ================================================== */}

              <section className="mt-20">

                <div
                  className="rounded-3xl p-8 sm:p-10"
                  style={{
                    backgroundColor:
                      "#F1EEFC",
                  }}
                >

                  <div className="flex items-start gap-4">

                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white"
                      style={{
                        color:
                          INDIGO_CTA,
                      }}
                    >
                      <Globe2 size={21} />
                    </div>

                    <div>

                      <p
                        className="text-[12px] font-bold uppercase tracking-[0.15em]"
                        style={{
                          color:
                            INDIGO_CTA,
                        }}
                      >
                        The Starfii approach
                      </p>

                      <p
                        className="mt-4 text-[22px] font-medium leading-snug"
                        style={{
                          color:
                            CHAMPION_BLUE,
                        }}
                      >
                        Build the capability first.
                        Scale the operation second.
                        Optimize continuously.
                      </p>

                    </div>

                  </div>

                </div>

              </section>

            </article>

            {/* ==================================================
                SIDEBAR
            ================================================== */}

            <AtAGlanceSidebar
              study={study}
            />

          </div>

        </div>

      </div>

      {/* ======================================================
          RELATED CASE STUDIES
      ====================================================== */}

      {related.length > 0 && (
        <section
          className="py-20 lg:py-24"
          style={{
            background:
              "linear-gradient(180deg, #FFFFFF 0%, #F5F2FC 100%)",
          }}
        >

          <div className={ALIGN}>

            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

              <div>

                <SectionEyebrow>
                  Explore More
                </SectionEyebrow>

                <h2
                  className="mt-3 text-[31px] font-medium tracking-tight lg:text-[42px]"
                  style={{
                    color:
                      CHAMPION_BLUE,
                  }}
                >
                  More GCC Case Studies
                </h2>

              </div>

              <Link
                href={BASE_PATH}
                className="inline-flex items-center gap-2 text-[14px] font-semibold"
                style={{
                  color:
                    INDIGO_CTA,
                }}
              >
                View All Case Studies
                <ArrowUpRight size={16} />
              </Link>

            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">

              {related.map((item) => (

                <Link
                  key={item.slug}
                  href={`${BASE_PATH}/${item.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl"
                  style={{
                    border:
                      "1px solid #E5E1F5",
                  }}
                >

                  <div className="h-[220px] overflow-hidden">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                  </div>

                  <div className="flex flex-1 flex-col p-6">

                    <span
                      className="text-[12px] font-semibold tracking-wide"
                      style={{
                        color:
                          INDIGO_CTA,
                      }}
                    >
                      CASE STUDY
                    </span>

                    <h3
                      className="mt-2 line-clamp-3 text-[18px] font-semibold leading-snug"
                      style={{
                        color:
                          CHAMPION_BLUE,
                      }}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-[14px] leading-relaxed text-slate-600">
                      {item.body}
                    </p>

                    <span
                      className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold transition-transform duration-200 group-hover:translate-x-1"
                      style={{
                        color:
                          INDIGO_CTA,
                      }}
                    >
                      Read Case Study
                      <ArrowUpRight size={15} />
                    </span>

                  </div>

                </Link>

              ))}

            </div>

          </div>

        </section>
      )}

      {/* ======================================================
          FINAL CTA
      ====================================================== */}

      <section
        id="connect"
        className="py-20 lg:py-24"
      >

        <div className={ALIGN}>

          <div
            className="relative overflow-hidden rounded-[30px] px-8 py-14 sm:px-12 lg:px-16 lg:py-16"
            style={{
              backgroundColor:
                CHAMPION_BLUE,
            }}
          >

            <div
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl"
              style={{
                backgroundColor:
                  `${LAVENDER_ACCENT}25`,
              }}
            />

            <div className="relative max-w-3xl">

              <p
                className="text-[12px] font-bold uppercase tracking-[0.18em]"
                style={{
                  color:
                    LAVENDER_ACCENT,
                }}
              >
                Global Capability Center Transformation
              </p>

              <h2 className="mt-5 text-[32px] font-medium leading-tight text-white sm:text-[42px]">
                Ready to build and scale your GCC?
              </h2>

              <p className="mt-5 text-[16px] leading-8 text-white/70">
                Starfii can help you move from GCC strategy and
                feasibility to entity setup, talent acquisition,
                governance, transition, and steady state delivery.
              </p>

              <Link
                href={BASE_PATH}
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-[14px] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                style={{
                  color:
                    CHAMPION_BLUE,
                }}
              >
                Start a GCC conversation

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />

              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
          BACK
      ====================================================== */}

      <div
        className="border-t bg-white"
        style={{
          borderColor:
            "#E5E1F5",
        }}
      >

        <div className={`${ALIGN} py-10`}>

          <Link
            href={BASE_PATH}
            className="inline-flex items-center gap-2 text-[14px] font-semibold transition-opacity hover:opacity-60"
            style={{
              color:
                INDIGO_CTA,
            }}
          >

            <ArrowLeft size={16} />

            Back to Global Capability Centers

          </Link>

        </div>

      </div>

    </main>
  );
}
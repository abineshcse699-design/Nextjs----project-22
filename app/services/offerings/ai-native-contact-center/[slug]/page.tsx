import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import {
  ArrowLeft,
  ArrowUpRight,
  ChevronRight,
  CheckCircle2,
  Target,
  BrainCircuit,
  TrendingUp,
  Database,
  Workflow,
  ShieldCheck,
  PhoneCall,
  Users,
  Clock3,
  Sparkles,
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
  "/services/offerings/ai-native-contact-center";

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
    title: `${study.title} | Starfii AI Voice Call Case Study`,
    description: study.body,
  };
}

/* ============================================================
   PAGE
============================================================ */

export default async function CaseStudyPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const relatedStudies = caseStudies
    .filter(
      (item) => item.slug !== study.slug
    )
    .slice(0, 3);

  return (
    <main className="overflow-hidden bg-white">

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative isolate overflow-hidden bg-white">

        {/* Background image */}

        <div className="absolute inset-0 -z-10">

          <div className="absolute inset-0 bg-[#F8F7FC]" />

          <img
            src={study.image}
            alt=""
            className="absolute right-0 top-0 h-full w-full object-cover lg:left-[38%] lg:w-[62%]"
          />

          {/* Desktop image fade */}

          <div
            className="absolute inset-y-0 left-0 hidden w-[65%] lg:block"
            style={{
              background:
                "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.98) 35%, rgba(255,255,255,0.80) 55%, rgba(255,255,255,0) 100%)",
            }}
          />

          {/* Bottom fade */}

          <div
            className="absolute inset-x-0 bottom-0 h-40"
            style={{
              background:
                "linear-gradient(to top, #ffffff, rgba(255,255,255,0))",
            }}
          />

          {/* Mobile overlay */}

          <div className="absolute inset-0 bg-white/65 lg:hidden" />

        </div>

        <div
          className={`${ALIGN} relative min-h-[680px] py-24 lg:min-h-[720px] lg:py-28`}
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
              href={BASE_PATH}
              className="transition-opacity hover:opacity-60"
            >
              AI Native Contact Center
            </Link>

            <ChevronRight size={14} />

            <span className="text-slate-500">
              Case Study
            </span>
          </nav>

          {/* Hero content */}

          <div className="relative z-10 mt-14 max-w-[790px]">

            {/* Badge */}

            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-bold uppercase tracking-wide text-white shadow-lg"
              style={{
                backgroundColor: INDIGO_CTA,
              }}
            >
              AI Voice Call
            </div>

            {/* Industry */}

            <div className="mt-5 flex flex-wrap items-center gap-3">

              <span
                className="rounded-full border bg-white/80 px-4 py-2 text-[12px] font-semibold"
                style={{
                  borderColor: "#DDD8F0",
                  color: CHAMPION_BLUE,
                }}
              >
                {study.industry}
              </span>

              <span className="text-[13px] text-slate-500">
                {study.client}
              </span>

            </div>

            {/* Title */}

            <h1
              className="mt-7 max-w-[790px] text-[40px] font-medium leading-[1.08] tracking-[-0.035em] sm:text-[50px] lg:text-[62px]"
              style={{
                color: CHAMPION_BLUE,
              }}
            >
              {study.title}
            </h1>

            {/* Summary */}

            <p className="mt-7 max-w-[710px] text-[17px] leading-8 text-slate-600 lg:text-[18px]">
              {study.body}
            </p>

            {/* CTA */}

            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                href={`${BASE_PATH}#connect`}
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[14px] font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                style={{
                  backgroundColor: CHAMPION_BLUE,
                }}
              >
                Build an AI Voice Agent

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href="#client"
                className="inline-flex items-center gap-2 rounded-full border bg-white/90 px-7 py-3.5 text-[14px] font-semibold shadow-sm transition-all duration-300 hover:bg-white hover:shadow-md"
                style={{
                  borderColor: "#DCD8EF",
                  color: CHAMPION_BLUE,
                }}
              >
                Explore case study
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* ======================================================
          STICKY CASE STUDY NAVIGATION
      ====================================================== */}

      <CaseStudyTabs />

      {/* ======================================================
          MAIN CONTENT
      ====================================================== */}

      <div className={ALIGN}>

        {/* ====================================================
            CLIENT
        ==================================================== */}

        <section
          id="client"
          className="scroll-mt-24 py-16 lg:py-20"
        >

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>

              <p
                className="text-[12px] font-bold uppercase tracking-[0.18em]"
                style={{
                  color: INDIGO_CTA,
                }}
              >
                Client
              </p>

              <h2
                className="mt-4 text-[34px] font-medium leading-tight lg:text-[44px]"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                {study.client}
              </h2>

              <p className="mt-5 max-w-xl text-[16px] leading-8 text-slate-600">
                {study.overview}
              </p>

            </div>

            <div
              className="grid overflow-hidden rounded-3xl border bg-white sm:grid-cols-3"
              style={{
                borderColor: "#E5E1F5",
              }}
            >

              {/* Industry */}

              <div className="p-7 sm:border-r">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-2xl"
                  style={{
                    backgroundColor: "#F5F3FC",
                    color: INDIGO_CTA,
                  }}
                >
                  <Users size={20} />
                </div>

                <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">
                  Industry
                </p>

                <p
                  className="mt-2 text-[16px] font-semibold"
                  style={{
                    color: CHAMPION_BLUE,
                  }}
                >
                  {study.industry}
                </p>
              </div>

              {/* Duration */}

              <div className="border-t p-7 sm:border-t-0 sm:border-r">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-2xl"
                  style={{
                    backgroundColor: "#F5F3FC",
                    color: INDIGO_CTA,
                  }}
                >
                  <Clock3 size={20} />
                </div>

                <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">
                  Duration
                </p>

                <p
                  className="mt-2 text-[16px] font-semibold"
                  style={{
                    color: CHAMPION_BLUE,
                  }}
                >
                  {study.duration}
                </p>
              </div>

              {/* Service */}

              <div className="border-t p-7 sm:border-t-0">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-2xl"
                  style={{
                    backgroundColor: "#F5F3FC",
                    color: INDIGO_CTA,
                  }}
                >
                  <PhoneCall size={20} />
                </div>

                <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">
                  Service
                </p>

                <p
                  className="mt-2 text-[16px] font-semibold"
                  style={{
                    color: CHAMPION_BLUE,
                  }}
                >
                  AI Voice Call
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ====================================================
            FEATURE IMAGE
        ==================================================== */}

        <section className="pb-16 lg:pb-20">

          <div className="overflow-hidden rounded-[32px]">

            <img
              src={study.image}
              alt={study.title}
              className="h-[320px] w-full object-cover sm:h-[430px] lg:h-[560px]"
            />

          </div>

        </section>

        {/* ====================================================
            CHALLENGE
        ==================================================== */}

        <section
          id="challenge"
          className="scroll-mt-24 border-t py-20 lg:py-24"
        >

          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">

            <div>

              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{
                  backgroundColor: "#F5F3FC",
                  color: INDIGO_CTA,
                }}
              >
                <Target size={25} />
              </div>

              <p
                className="mt-7 text-[12px] font-bold uppercase tracking-[0.18em]"
                style={{
                  color: INDIGO_CTA,
                }}
              >
                01 / The Challenge
              </p>

              <h2
                className="mt-4 max-w-md text-[34px] font-medium leading-tight lg:text-[46px]"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                The customer experience challenge
              </h2>

            </div>

            <div>

              <div
                className="rounded-3xl p-8 lg:p-10"
                style={{
                  backgroundColor: "#F5F3FC",
                }}
              >

                <p className="text-[18px] leading-9 text-slate-600">
                  {study.challenge}
                </p>

              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">

                {[
                  "High-volume conversations",
                  "Repetitive customer requests",
                  "Need for human escalation",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border p-5"
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

                    <p
                      className="mt-4 text-[14px] font-semibold leading-6"
                      style={{
                        color: CHAMPION_BLUE,
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ))}

              </div>

            </div>
          </div>
        </section>

        {/* ====================================================
            SUB TOPICS (Abandoned Cart / COD Confirmation / etc.)
        ==================================================== */}

        {study.subTopics && study.subTopics.length > 0 && (
          <section
            id="subtopics"
            className="scroll-mt-24 border-t py-20 lg:py-24"
          >

            <div className="max-w-3xl">

              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{
                  backgroundColor: "#F5F3FC",
                  color: INDIGO_CTA,
                }}
              >
                <Sparkles size={25} />
              </div>

              <p
                className="mt-7 text-[12px] font-bold uppercase tracking-[0.18em]"
                style={{
                  color: INDIGO_CTA,
                }}
              >
                How It Works
              </p>

              <h2
                className="mt-4 text-[34px] font-medium leading-tight lg:text-[46px]"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                How to use voice calls to recover lost sales
              </h2>

            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">

              {study.subTopics.map((topic, index) => (
                <div
                  key={topic.heading}
                  className="group flex flex-col rounded-3xl border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{
                    borderColor: "#E5E1F5",
                  }}
                >

                  <span
                    className="text-[12px] font-bold"
                    style={{
                      color: LAVENDER_ACCENT,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3
                    className="mt-5 text-[19px] font-semibold leading-7"
                    style={{
                      color: CHAMPION_BLUE,
                    }}
                  >
                    {topic.heading}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-slate-600">
                    {topic.body}
                  </p>

                </div>
              ))}

            </div>
          </section>
        )}

        {/* ====================================================
            SOLUTION
        ==================================================== */}

        <section
          id="solution"
          className="scroll-mt-24 border-t py-20 lg:py-24"
        >

          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">

            <div>

              <p
                className="text-[12px] font-bold uppercase tracking-[0.18em]"
                style={{
                  color: INDIGO_CTA,
                }}
              >
                02 / AI Solution
              </p>

              <h2
                className="mt-4 max-w-3xl text-[34px] font-medium leading-tight lg:text-[46px]"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                A conversational AI voice experience built around real customer intent
              </h2>

              <p className="mt-7 max-w-3xl text-[17px] leading-8 text-slate-600">
                {study.solution}
              </p>

            </div>

            <div
              className="rounded-[32px] p-8 lg:p-10"
              style={{
                backgroundColor: CHAMPION_BLUE,
              }}
            >

              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/50">
                Starfii AI Voice
              </p>

              <h3 className="mt-4 text-[28px] font-medium leading-tight text-white">
                Understand.
                <br />
                Respond.
                <br />
                Take action.
              </h3>

              <div className="mt-8 space-y-4">

                {[
                  "Understand customer intent",
                  "Respond naturally in real time",
                  "Connect to business workflows",
                  "Escalate when human expertise is needed",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 flex-shrink-0 text-white"
                    />

                    <p className="text-[14px] leading-6 text-white/75">
                      {item}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </div>

          {/* Workflow */}

          <div className="mt-14">

            <p
              className="text-[12px] font-bold uppercase tracking-[0.18em]"
              style={{
                color: INDIGO_CTA,
              }}
            >
              Conversation Flow
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-5">

              {[
                "Customer calls",
                "AI understands intent",
                "AI handles the request",
                "Business system is updated",
                "Human handoff when required",
              ].map((item, index) => (
                <div
                  key={item}
                  className="relative rounded-2xl border bg-white p-6"
                  style={{
                    borderColor: "#E5E1F5",
                  }}
                >

                  <span
                    className="text-[12px] font-bold"
                    style={{
                      color: LAVENDER_ACCENT,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p
                    className="mt-4 text-[15px] font-semibold leading-6"
                    style={{
                      color: CHAMPION_BLUE,
                    }}
                  >
                    {item}
                  </p>

                </div>
              ))}

            </div>
          </div>
        </section>

        {/* ====================================================
            RESULTS / IMPACT
        ==================================================== */}

        <section
          id="results"
          className="scroll-mt-24 border-t py-20 lg:py-24"
        >

          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">

            <div>

              <p
                className="text-[12px] font-bold uppercase tracking-[0.18em]"
                style={{
                  color: INDIGO_CTA,
                }}
              >
                03 / Impact
              </p>

              <h2
                className="mt-4 max-w-2xl text-[34px] font-medium leading-tight lg:text-[46px]"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                Business impact from AI voice automation
              </h2>

            </div>

            <p className="max-w-lg text-[16px] leading-8 text-slate-600">
              {study.results}
            </p>

          </div>

          {/* Stats */}

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            {study.stats.map(
              (stat, index) => (
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
                    className="absolute -right-14 -top-14 h-32 w-32 rounded-full blur-3xl transition-transform duration-500 group-hover:scale-150"
                    style={{
                      backgroundColor: `${LAVENDER_ACCENT}35`,
                    }}
                  />

                  <div className="relative">

                    <p
                      className="text-[44px] font-semibold tracking-tight"
                      style={{
                        color: INDIGO_CTA,
                      }}
                    >
                      {stat.value}
                    </p>

                    <div
                      className="mt-5 h-px w-12"
                      style={{
                        backgroundColor:
                          LAVENDER_ACCENT,
                      }}
                    />

                    <p className="mt-4 text-[15px] leading-7 text-slate-600">
                      {stat.label}
                    </p>

                  </div>
                </div>
              )
            )}

          </div>

        </section>

        {/* ====================================================
            BENEFITS
        ==================================================== */}

        <section
          id="benefits"
          className="scroll-mt-24 border-t py-20 lg:py-24"
        >

          <div>

            <p
              className="text-[12px] font-bold uppercase tracking-[0.18em]"
              style={{
                color: INDIGO_CTA,
              }}
            >
              04 / Benefits
            </p>

            <h2
              className="mt-4 max-w-3xl text-[34px] font-medium leading-tight lg:text-[46px]"
              style={{
                color: CHAMPION_BLUE,
              }}
            >
              Designed to improve both customer experience and team efficiency
            </h2>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {study.benefits.map(
              (benefit, index) => (
                <div
                  key={benefit}
                  className="group rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    borderColor: "#E5E1F5",
                  }}
                >

                  <div className="flex items-start justify-between">

                    <span
                      className="text-[12px] font-bold"
                      style={{
                        color: LAVENDER_ACCENT,
                      }}
                    >
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full"
                      style={{
                        backgroundColor:
                          "#F5F3FC",
                        color: INDIGO_CTA,
                      }}
                    >
                      <CheckCircle2 size={19} />
                    </div>

                  </div>

                  <h3
                    className="mt-12 text-[19px] font-semibold leading-7"
                    style={{
                      color: CHAMPION_BLUE,
                    }}
                  >
                    {benefit}
                  </h3>

                </div>
              )
            )}

          </div>
        </section>

        {/* ====================================================
            TECHNOLOGY
        ==================================================== */}

        <section
          id="technology"
          className="scroll-mt-24 border-t py-20 lg:py-24"
        >

          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">

            <div>

              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{
                  backgroundColor: "#F5F3FC",
                  color: INDIGO_CTA,
                }}
              >
                <BrainCircuit size={25} />
              </div>

              <p
                className="mt-7 text-[12px] font-bold uppercase tracking-[0.18em]"
                style={{
                  color: INDIGO_CTA,
                }}
              >
                05 / Technology
              </p>

              <h2
                className="mt-4 max-w-md text-[34px] font-medium leading-tight lg:text-[44px]"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                AI technology connected to the business
              </h2>

              <p className="mt-5 max-w-md text-[15px] leading-7 text-slate-600">
                Starfii connects conversational voice AI with the
                telephony, CRM, workflow, and business systems
                required to turn customer conversations into
                actionable outcomes.
              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {study.technology.map(
                (technology, index) => (
                  <div
                    key={technology}
                    className="group flex items-center gap-4 rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    style={{
                      borderColor: "#E5E1F5",
                    }}
                  >

                    <div
                      className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor:
                          "#F5F3FC",
                        color: INDIGO_CTA,
                      }}
                    >
                      {index === 0 ? (
                        <BrainCircuit size={20} />
                      ) : index === 1 ? (
                        <PhoneCall size={20} />
                      ) : index === 2 ? (
                        <Database size={20} />
                      ) : index === 3 ? (
                        <Workflow size={20} />
                      ) : index === 4 ? (
                        <ShieldCheck size={20} />
                      ) : (
                        <TrendingUp size={20} />
                      )}
                    </div>

                    <div>

                      <p
                        className="text-[15px] font-semibold"
                        style={{
                          color: CHAMPION_BLUE,
                        }}
                      >
                        {technology}
                      </p>

                      <p className="mt-1 text-[12px] text-slate-400">
                        AI capability
                      </p>

                    </div>

                  </div>
                )
              )}

            </div>

          </div>
        </section>

        {/* ====================================================
            FINAL SUMMARY
        ==================================================== */}

        <section className="border-t py-20 lg:py-24">

          <div
            className="rounded-[32px] px-8 py-12 sm:px-12 lg:px-16 lg:py-16"
            style={{
              background:
                "linear-gradient(135deg, #F5F3FC 0%, #FFFFFF 60%, #ECE7FB 100%)",
            }}
          >

            <div className="max-w-4xl">

              <p
                className="text-[12px] font-bold uppercase tracking-[0.18em]"
                style={{
                  color: INDIGO_CTA,
                }}
              >
                Case Study Summary
              </p>

              <h2
                className="mt-4 text-[34px] font-medium leading-tight lg:text-[46px]"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                Turning every customer conversation into a more intelligent experience
              </h2>

              <p className="mt-6 text-[17px] leading-8 text-slate-600">
                {study.results}
              </p>

            </div>

          </div>
        </section>

        {/* ====================================================
            RELATED CASE STUDIES
        ==================================================== */}

        {relatedStudies.length > 0 && (
          <section className="border-t py-20 lg:py-24">

            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

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
                  className="mt-3 text-[34px] font-medium leading-tight lg:text-[44px]"
                  style={{
                    color: CHAMPION_BLUE,
                  }}
                >
                  More AI Voice Case Studies
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
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {relatedStudies.map(
                (item) => (
                  <Link
                    key={item.slug}
                    href={`${BASE_PATH}/${item.slug}`}
                    className="group flex flex-col overflow-hidden rounded-[28px] border bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
                    style={{
                      borderColor: "#E5E1F5",
                    }}
                  >

                    <div className="relative h-[230px] overflow-hidden">

                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                      <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-2 text-[11px] font-semibold text-slate-700 shadow-sm">
                        {item.industry}
                      </span>

                    </div>

                    <div className="flex min-h-[210px] flex-1 flex-col p-6">

                      <p
                        className="text-[11px] font-bold uppercase tracking-[0.15em]"
                        style={{
                          color: INDIGO_CTA,
                        }}
                      >
                        AI Voice Call
                      </p>

                      <h3
                        className="mt-3 text-[19px] font-semibold leading-7"
                        style={{
                          color: CHAMPION_BLUE,
                        }}
                      >
                        {item.title}
                      </h3>

                      <p className="mt-3 line-clamp-3 text-[14px] leading-6 text-slate-500">
                        {item.body}
                      </p>

                      <div
                        className="mt-auto flex items-center gap-2 pt-7 text-[14px] font-semibold"
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
                )
              )}

            </div>
          </section>
        )}

        {/* ====================================================
            FINAL CTA
        ==================================================== */}

        <section
          id="connect"
          className="scroll-mt-24 py-20 lg:py-24"
        >

          <div
            className="relative overflow-hidden rounded-[32px] px-8 py-14 sm:px-12 lg:px-16 lg:py-16"
            style={{
              backgroundColor: CHAMPION_BLUE,
            }}
          >

            <div
              className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full blur-3xl"
              style={{
                backgroundColor:
                  `${LAVENDER_ACCENT}35`,
              }}
            />

            <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-center">

              <div className="max-w-3xl">

                <p
                  className="text-[12px] font-bold uppercase tracking-[0.18em]"
                  style={{
                    color: LAVENDER_ACCENT,
                  }}
                >
                  AI Voice Transformation
                </p>

                <h2 className="mt-4 text-[34px] font-medium leading-tight text-white lg:text-[46px]">
                  Ready to transform your customer conversations with AI voice?
                </h2>

                <p className="mt-5 max-w-2xl text-[16px] leading-8 text-white/70">
                  Build intelligent voice experiences that automate
                  routine conversations, improve customer response,
                  and help human teams focus on higher-value
                  interactions.
                </p>

              </div>

              <Link
                href={BASE_PATH}
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-[14px] font-semibold shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                Start an AI Voice conversation

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

            </div>

          </div>
        </section>

        {/* ====================================================
            BACK
        ==================================================== */}

        <section className="border-t py-10">

          <Link
            href={BASE_PATH}
            className="group inline-flex items-center gap-2 text-[14px] font-semibold"
            style={{
              color: INDIGO_CTA,
            }}
          >

            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            Back to AI Native Contact Center

          </Link>

        </section>

      </div>
    </main>
  );
}
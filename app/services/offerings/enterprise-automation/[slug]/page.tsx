import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import {
  ArrowLeft,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  Headphones,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Sparkles,
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

/*
|--------------------------------------------------------------------------
| IMPORTANT
|--------------------------------------------------------------------------
| Your [slug] folder is inside enterprise-automation.
|
| Therefore the route is:
|
| /services/offerings/enterprise-automation/[slug]
|
*/
const BASE_PATH =
  "/services/offerings/enterprise-automation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/*
|--------------------------------------------------------------------------
| STATIC PARAMS
|--------------------------------------------------------------------------
*/

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

/*
|--------------------------------------------------------------------------
| SEO
|--------------------------------------------------------------------------
*/

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return {
      title: "Case Study Not Found | Starfii",
      description:
        "The requested case study could not be found.",
    };
  }

  return {
    title: `${study.title} | Starfii`,
    description: study.body,
  };
}

/*
|--------------------------------------------------------------------------
| PAGE
|--------------------------------------------------------------------------
*/

export default async function CaseStudyPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const study = getCaseStudyBySlug(slug);

  /*
   * If the slug does not exist in case-studies.ts,
   * Next.js will show the 404 page.
   */
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

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative isolate overflow-hidden">

        <div className="absolute inset-0 -z-10">

          <img
            src={study.image}
            alt=""
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/30" />

        </div>

        <div
          className="pointer-events-none absolute -right-32 top-10 -z-10 h-[420px] w-[420px] rounded-full blur-3xl"
          style={{
            backgroundColor:
              `${LAVENDER_ACCENT}25`,
          }}
        />

        <div
          className="pointer-events-none absolute -bottom-32 left-1/3 -z-10 h-[320px] w-[320px] rounded-full blur-3xl"
          style={{
            backgroundColor:
              `${INDIGO_CTA}15`,
          }}
        />

        <div
          className={`${ALIGN} py-20 lg:py-28`}
        >

          {/* Breadcrumb */}

          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-[14px] font-medium"
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
              Enterprise Automation
            </Link>

            <ChevronRight size={14} />

            <span className="text-slate-500">
              Case Study
            </span>

          </nav>

          {/* Badge */}

          <div
            className="mt-9 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold text-white shadow-lg"
            style={{
              backgroundColor: INDIGO_CTA,
            }}
          >
            <Sparkles size={15} />

            AI-Powered Medical Coding
          </div>

          {/* Title */}

          <h1
            className="mt-7 max-w-[900px] text-[40px] font-medium leading-[1.08] tracking-[-0.035em] sm:text-[50px] lg:text-[62px]"
            style={{
              color: CHAMPION_BLUE,
            }}
          >
            {study.title}
          </h1>

          {/* Description */}

          <p className="mt-7 max-w-[720px] text-[17px] leading-8 text-slate-600 lg:text-[18px]">
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
              Talk to our AI team

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <Link
              href="#story"
              className="inline-flex items-center gap-2 rounded-full border bg-white/80 px-7 py-3.5 text-[14px] font-semibold shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
              style={{
                borderColor: LAVENDER_ACCENT,
                color: CHAMPION_BLUE,
              }}
            >
              Explore the case study
            </Link>

          </div>

        </div>
      </section>

      {/* =====================================================
          STICKY TABS
      ===================================================== */}

      <CaseStudyTabs />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className={ALIGN}>

        {/* ===================================================
            CLIENT
        =================================================== */}

        <section
          id="client"
          className="scroll-mt-24 py-20 lg:py-24"
        >

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

            <div>

              <p
                className="text-[12px] font-bold uppercase tracking-[0.18em]"
                style={{
                  color: INDIGO_CTA,
                }}
              >
                CLIENT
              </p>

              <h2
                className="mt-4 text-[34px] font-medium leading-tight lg:text-[46px]"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                Building better customer experiences with AI
              </h2>

            </div>

            <div
              className="rounded-3xl border p-8 lg:p-10"
              style={{
                borderColor: "#E5E1F5",
                backgroundColor: "#FAF9FE",
              }}
            >

              <div className="flex items-start gap-5">

                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                  style={{
                    backgroundColor: "#EDE9FC",
                    color: INDIGO_CTA,
                  }}
                >
                  <Headphones size={22} />
                </div>

                <div>

                  <h3
                    className="text-[20px] font-semibold"
                    style={{
                      color: CHAMPION_BLUE,
                    }}
                  >
                    AI-Powered Medical Coding
                  </h3>

                  <p className="mt-3 text-[15px] leading-7 text-slate-600">
                    This case study explores how
                    AI-assisted clinical intelligence
                    can support documentation analysis,
                    coding recommendations,
                    validation, and professional review.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================
            CHALLENGE
        =================================================== */}

        <section
          id="challenge"
          className="scroll-mt-24 border-t py-20 lg:py-24"
          style={{
            borderColor: "#E5E1F5",
          }}
        >

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[360px_1fr]">

            <div>

              <p
                className="text-[12px] font-bold uppercase tracking-[0.18em]"
                style={{
                  color: INDIGO_CTA,
                }}
              >
                CHALLENGE
              </p>

              <h2
                className="mt-4 text-[32px] font-medium leading-tight lg:text-[42px]"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                Removing friction from coding operations
              </h2>

            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              {[
                {
                  icon: PhoneCall,
                  title: "Manual review",
                  text:
                    "Large volumes of clinical documentation can require significant manual review and coding effort.",
                },
                {
                  icon: MessageCircle,
                  title: "Complex documentation",
                  text:
                    "Clinical language contains context and terminology that cannot always be handled effectively through simple keyword matching.",
                },
                {
                  icon: Workflow,
                  title: "Repetitive workflows",
                  text:
                    "Coding professionals can spend valuable time searching, extracting, validating, and organizing coding information.",
                },
                {
                  icon: ShieldCheck,
                  title: "Professional oversight",
                  text:
                    "Important coding decisions require qualified human review, governance, and traceability.",
                },
              ].map((item) => {

                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border bg-white p-7"
                    style={{
                      borderColor: "#E5E1F5",
                    }}
                  >

                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: "#F1EEFC",
                        color: INDIGO_CTA,
                      }}
                    >
                      <Icon size={20} />
                    </div>

                    <h3
                      className="mt-6 text-[19px] font-semibold"
                      style={{
                        color: CHAMPION_BLUE,
                      }}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-7 text-slate-600">
                      {item.text}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </section>

        {/* ===================================================
            AI SOLUTION
        =================================================== */}

        <section
          id="solution"
          className="scroll-mt-24 py-20 lg:py-24"
        >

          <div
            className="overflow-hidden rounded-[32px] p-8 sm:p-10 lg:p-14"
            style={{
              background:
                "linear-gradient(135deg, #17172A 0%, #211B45 50%, #151528 100%)",
            }}
          >

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

              <div>

                <div className="flex items-center gap-3">

                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor:
                        "rgba(164,143,234,0.18)",
                      color: "#C9BEF5",
                    }}
                  >
                    <BrainCircuit size={21} />
                  </div>

                  <span className="text-[13px] font-semibold uppercase tracking-[0.16em] text-white/60">
                    AI Solution
                  </span>

                </div>

                <h2 className="mt-7 max-w-xl text-[34px] font-medium leading-tight text-white lg:text-[46px]">
                  AI intelligence that supports faster and more consistent coding
                </h2>

                <p className="mt-6 max-w-xl text-[15px] leading-8 text-white/60">
                  AI-assisted clinical documentation
                  analysis, structured code recommendations,
                  validation, and human review can work
                  together as a connected coding workflow.
                </p>

              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                {[
                  "Clinical documentation analysis",
                  "Clinical language understanding",
                  "ICD, CPT and HCPCS recommendations",
                  "Coding validation",
                  "Human-in-the-loop review",
                  "Healthcare system integration",
                ].map((item, index) => (

                  <div
                    key={item}
                    className="rounded-2xl border p-5"
                    style={{
                      borderColor:
                        "rgba(255,255,255,0.10)",
                      backgroundColor:
                        "rgba(255,255,255,0.04)",
                    }}
                  >

                    <div className="flex items-start gap-3">

                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0"
                        style={{
                          color: "#A48FEA",
                        }}
                      />

                      <div>

                        <span className="text-[11px] font-medium text-white/35">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <p className="mt-1 text-[14px] font-medium leading-6 text-white/80">
                          {item}
                        </p>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================
            IMPACT
        =================================================== */}

        <section
          id="results"
          className="scroll-mt-24 border-t py-20 lg:py-24"
          style={{
            borderColor: "#E5E1F5",
          }}
        >

          <div className="max-w-3xl">

            <p
              className="text-[12px] font-bold uppercase tracking-[0.18em]"
              style={{
                color: INDIGO_CTA,
              }}
            >
              IMPACT
            </p>

            <h2
              className="mt-4 text-[34px] font-medium leading-tight lg:text-[46px]"
              style={{
                color: CHAMPION_BLUE,
              }}
            >
              Turning coding workflows into a more efficient operation
            </h2>

            <p className="mt-6 text-[16px] leading-8 text-slate-600">
              {study.body}
            </p>

          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">

            {[
              {
                icon: PhoneCall,
                title: "Faster processing",
                text:
                  "AI can accelerate first-pass analysis and reduce repetitive coding work.",
              },
              {
                icon: Workflow,
                title: "Higher efficiency",
                text:
                  "Coding professionals can focus more of their time on validation, exceptions, and complex decisions.",
              },
              {
                icon: Sparkles,
                title: "Better consistency",
                text:
                  "Structured recommendations and validation workflows can support more consistent coding operations.",
              },
            ].map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border p-7"
                  style={{
                    borderColor: "#E5E1F5",
                  }}
                >

                  <Icon
                    size={23}
                    style={{
                      color: INDIGO_CTA,
                    }}
                  />

                  <h3
                    className="mt-6 text-[20px] font-semibold"
                    style={{
                      color: CHAMPION_BLUE,
                    }}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-7 text-slate-600">
                    {item.text}
                  </p>

                </div>
              );
            })}

          </div>

        </section>

        {/* ===================================================
            BENEFITS
        =================================================== */}

        <section
          id="benefits"
          className="scroll-mt-24 py-20 lg:py-24"
        >

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p
                className="text-[12px] font-bold uppercase tracking-[0.18em]"
                style={{
                  color: INDIGO_CTA,
                }}
              >
                BENEFITS
              </p>

              <h2
                className="mt-4 text-[34px] font-medium leading-tight lg:text-[46px]"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                AI support designed around coding outcomes
              </h2>

            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

              {[
                "Reduce repetitive coding work",
                "Accelerate clinical documentation analysis",
                "Improve coding consistency",
                "Surface relevant code recommendations",
                "Support human review",
                "Improve exception handling",
                "Connect coding with revenue cycle workflows",
                "Maintain traceability and governance",
              ].map((benefit) => (

                <div
                  key={benefit}
                  className="flex items-start gap-3 rounded-xl border p-5"
                  style={{
                    borderColor: "#E5E1F5",
                  }}
                >

                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0"
                    style={{
                      color: INDIGO_CTA,
                    }}
                  />

                  <span className="text-[14px] font-medium leading-6 text-slate-700">
                    {benefit}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* ===================================================
            TECHNOLOGY
        =================================================== */}

        <section
          id="technology"
          className="scroll-mt-24 border-t py-20 lg:py-24"
          style={{
            borderColor: "#E5E1F5",
          }}
        >

          <div className="max-w-3xl">

            <p
              className="text-[12px] font-bold uppercase tracking-[0.18em]"
              style={{
                color: INDIGO_CTA,
              }}
            >
              TECHNOLOGY
            </p>

            <h2
              className="mt-4 text-[34px] font-medium leading-tight lg:text-[46px]"
              style={{
                color: CHAMPION_BLUE,
              }}
            >
              Intelligent coding connected to healthcare workflows
            </h2>

            <p className="mt-6 text-[16px] leading-8 text-slate-600">
              AI-powered coding can connect clinical
              documentation intelligence with validation,
              professional review, healthcare systems,
              and revenue cycle workflows.
            </p>

          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: BrainCircuit,
                title: "AI Intelligence",
                text:
                  "Clinical language understanding and contextual analysis.",
              },
              {
                icon: PhoneCall,
                title: "Coding Intelligence",
                text:
                  "Structured recommendations for relevant coding workflows.",
              },
              {
                icon: Workflow,
                title: "Automation",
                text:
                  "Workflow actions connected to existing healthcare processes.",
              },
              {
                icon: ShieldCheck,
                title: "Human Control",
                text:
                  "Professional review and governance remain part of the workflow.",
              },
            ].map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border p-7"
                  style={{
                    borderColor: "#E5E1F5",
                    backgroundColor: "#FAF9FE",
                  }}
                >

                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: "#EDE9FC",
                      color: INDIGO_CTA,
                    }}
                  >
                    <Icon size={20} />
                  </div>

                  <h3
                    className="mt-6 text-[19px] font-semibold"
                    style={{
                      color: CHAMPION_BLUE,
                    }}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-7 text-slate-600">
                    {item.text}
                  </p>

                </div>
              );
            })}

          </div>

        </section>

      </div>

      {/* =====================================================
          FEATURE IMAGE
      ===================================================== */}

      <section
        id="story"
        className="bg-white pb-20 pt-4 lg:pb-24"
      >

        <div className={ALIGN}>

          <div className="group overflow-hidden rounded-[32px]">

            <img
              src={study.image}
              alt={study.title}
              className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:h-[430px] lg:h-[560px]"
            />

          </div>

        </div>

      </section>

      {/* =====================================================
          RELATED CASE STUDIES
      ===================================================== */}

      {relatedStudies.length > 0 && (
        <section
          className="py-24"
          style={{
            background:
              "linear-gradient(180deg, #FFFFFF 0%, #E9E4FB 48%, #C9BEF5 100%)",
          }}
        >

          <div className={ALIGN}>

            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

              <div>

                <p
                  className="text-[12px] font-bold uppercase tracking-[0.18em]"
                  style={{
                    color: INDIGO_CTA,
                  }}
                >
                  EXPLORE MORE
                </p>

                <h2
                  className="mt-3 max-w-3xl text-[32px] font-medium leading-tight lg:text-[44px]"
                  style={{
                    color: CHAMPION_BLUE,
                  }}
                >
                  More Medical Coding Case Studies
                </h2>

              </div>

              <Link
                href={BASE_PATH}
                className="hidden items-center gap-2 text-[15px] font-semibold sm:flex"
                style={{
                  color: INDIGO_CTA,
                }}
              >
                View all

                <ArrowUpRight size={16} />
              </Link>

            </div>

            <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">

              {relatedStudies.map((item) => (

                <Link
                  key={item.slug}
                  href={`${BASE_PATH}/${item.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl"
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
                        color: INDIGO_CTA,
                      }}
                    >
                      CASE STUDY
                    </span>

                    <h3
                      className="mt-2 text-[19px] font-semibold leading-snug"
                      style={{
                        color: CHAMPION_BLUE,
                      }}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-[14px] leading-relaxed text-slate-600">
                      {item.body}
                    </p>

                    <span
                      className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold"
                      style={{
                        color: INDIGO_CTA,
                      }}
                    >
                      Read case study

                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>

                  </div>

                </Link>

              ))}

            </div>

          </div>

        </section>
      )}

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        id="connect"
        className="pb-20 pt-8 lg:pb-24"
      >

        <div className={ALIGN}>

          <div
            className="relative overflow-hidden rounded-[32px] border px-7 py-12 sm:px-12 lg:px-16 lg:py-16"
            style={{
              borderColor: "#DDD8F0",
              backgroundColor: "#FAF9FE",
            }}
          >

            <div
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl"
              style={{
                backgroundColor:
                  `${LAVENDER_ACCENT}25`,
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
                  AI-POWERED MEDICAL CODING
                </p>

                <h2
                  className="mt-4 text-[31px] font-medium leading-tight lg:text-[43px]"
                  style={{
                    color: CHAMPION_BLUE,
                  }}
                >
                  Ready to modernize medical coding?
                </h2>

                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                  Talk to Starfii about AI-assisted
                  clinical documentation analysis,
                  coding intelligence, validation,
                  and healthcare workflow automation.
                </p>

              </div>

              <Link
                href={`${BASE_PATH}#connect`}
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

        </div>

      </section>

      {/* =====================================================
          BACK
      ===================================================== */}

      <div className={ALIGN}>

        <div
          className="border-t py-10"
          style={{
            borderColor: "#E5E1F5",
          }}
        >

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

            Back to Enterprise Automation

          </Link>

        </div>

      </div>

    </main>
  );
}
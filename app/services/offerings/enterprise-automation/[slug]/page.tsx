import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  BrainCircuit,
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

/* ============================================================
   BRAND
============================================================ */

const CHAMPION_BLUE = "#1B2560";
const LAVENDER_ACCENT = "#A48FEA";
const INDIGO_CTA = "#4F3FE0";

const ALIGN =
  "mx-auto w-full max-w-[1520px] px-6 sm:px-10 lg:px-16";

const BASE_PATH =
  "/services/offerings/ai-native-contact-center";

/* ============================================================
   TYPES
============================================================ */

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
      description:
        "The requested Starfii AI Native Contact Center case study could not be found.",
    };
  }

  return {
    title: `${study.title} | Starfii`,
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

      <section className="relative isolate overflow-hidden">

        {/* Background */}

        <div className="absolute inset-0 -z-10">

          <img
            src={study.image}
            alt=""
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/30" />

        </div>

        {/* Decorative glow */}

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
              AI Native Contact Center
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

            AI Native Contact Center
          </div>

          {/* Title */}

          <h1
            className="mt-7 max-w-[850px] text-[40px] font-medium leading-[1.08] tracking-[-0.035em] sm:text-[50px] lg:text-[62px]"
            style={{
              color: CHAMPION_BLUE,
            }}
          >
            {study.title}
          </h1>

          {/* Body */}

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

      {/* ======================================================
          STICKY TABS
      ====================================================== */}

      <CaseStudyTabs />

      {/* ======================================================
          MAIN
      ====================================================== */}

      <div className={ALIGN}>

        {/* ====================================================
            CLIENT
        ==================================================== */}

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
                Building better customer conversations with AI
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
                    AI Native Contact Center
                  </h3>

                  <p className="mt-3 text-[15px] leading-7 text-slate-600">
                    This case study explores how
                    conversational AI can support
                    customer communication,
                    automate repetitive interactions,
                    and connect customers with the
                    right support experience.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ====================================================
            CHALLENGE
        ==================================================== */}

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
                Removing friction from customer support
              </h2>

            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              {[
                {
                  icon: PhoneCall,
                  title: "High call volumes",
                  text:
                    "Repetitive customer enquiries can consume valuable support capacity and create unnecessary waiting time.",
                },
                {
                  icon: MessageCircle,
                  title: "Rigid conversations",
                  text:
                    "Traditional menu based experiences can make it difficult for customers to explain what they actually need.",
                },
                {
                  icon: Workflow,
                  title: "Manual workflows",
                  text:
                    "Support teams often spend time handling routine tasks that could be automated through connected AI workflows.",
                },
                {
                  icon: ShieldCheck,
                  title: "Human escalation",
                  text:
                    "Complex, sensitive, or high value conversations still need to reach the right human specialist.",
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

        {/* ====================================================
            SOLUTION
        ==================================================== */}

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
                  Conversational AI that understands intent and takes action
                </h2>

                <p className="mt-6 max-w-xl text-[15px] leading-8 text-white/60">
                  Starfii's AI Native Contact Center
                  approach combines natural language
                  understanding, voice automation,
                  intelligent routing, and connected
                  business workflows.
                </p>

              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                {[
                  "Natural language conversations",
                  "Real time intent detection",
                  "Automated customer workflows",
                  "Intelligent human escalation",
                  "CRM and business system integration",
                  "Always on customer availability",
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
                          {String(index + 1).padStart(
                            2,
                            "0"
                          )}
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

        {/* ====================================================
            IMPACT
        ==================================================== */}

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
              Turning every conversation into a more efficient customer experience
            </h2>

            <p className="mt-6 text-[16px] leading-8 text-slate-600">
              {study.body}
            </p>

          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">

            {[
              {
                icon: PhoneCall,
                title: "Faster response",
                text:
                  "Routine enquiries can be handled immediately without requiring a human agent for every interaction.",
              },
              {
                icon: Workflow,
                title: "Higher efficiency",
                text:
                  "Automation reduces repetitive work and allows support teams to concentrate on conversations that matter most.",
              },
              {
                icon: Sparkles,
                title: "Better experience",
                text:
                  "Customers can communicate naturally instead of navigating rigid menu based experiences.",
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

        {/* ====================================================
            BENEFITS
        ==================================================== */}

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
                AI support designed around business outcomes
              </h2>

            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

              {[
                "Reduce repetitive customer support work",
                "Improve availability across customer channels",
                "Accelerate routine enquiry resolution",
                "Route complex conversations intelligently",
                "Give human agents better context",
                "Scale customer communication efficiently",
                "Connect conversations with business workflows",
                "Create a consistent customer experience",
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

        {/* ====================================================
            TECHNOLOGY
        ==================================================== */}

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
              An intelligent voice layer connected to your business
            </h2>

            <p className="mt-6 text-[16px] leading-8 text-slate-600">
              Starfii connects conversational AI with
              the systems and workflows businesses
              already use, creating an intelligent layer
              between customers and operations.
            </p>

          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: BrainCircuit,
                title: "AI Intelligence",
                text:
                  "Natural language understanding and contextual conversation.",
              },
              {
                icon: PhoneCall,
                title: "Voice AI",
                text:
                  "Real time voice interactions for inbound and outbound calls.",
              },
              {
                icon: Workflow,
                title: "Automation",
                text:
                  "Business actions triggered directly from customer conversations.",
              },
              {
                icon: ShieldCheck,
                title: "Human Control",
                text:
                  "Intelligent escalation when human expertise is required.",
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

      {/* ======================================================
          FEATURE IMAGE
      ====================================================== */}

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

      {/* ======================================================
          RELATED CASE STUDIES
      ====================================================== */}

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
                  More AI Native Contact Center Case Studies
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

      {/* ======================================================
          FINAL CTA
      ====================================================== */}

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
                  AI NATIVE CONTACT CENTER
                </p>

                <h2
                  className="mt-4 text-[31px] font-medium leading-tight lg:text-[43px]"
                  style={{
                    color: CHAMPION_BLUE,
                  }}
                >
                  Ready to transform customer conversations?
                </h2>

                <p className="mt-5 text-[15px] leading-7 text-slate-600">
                  Talk to Starfii about conversational
                  AI, voice automation, intelligent routing,
                  customer support workflows, and
                  AI powered contact center transformation.
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

      {/* ======================================================
          BACK
      ====================================================== */}

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

            Back to AI Native Contact Center

          </Link>

        </div>

      </div>

    </main>
  );
}
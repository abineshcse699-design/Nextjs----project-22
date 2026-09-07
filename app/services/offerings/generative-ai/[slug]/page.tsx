import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  BrainCircuit,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Workflow,
  Headphones,
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
  "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

const BASE_PATH =
  "/services/offerings/ai-chat-box";

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

export const dynamicParams = false;

/* ============================================================
   SEO
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
    title: `${study.title} | Starfii AI Chat Box`,
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

  const study =
    getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const relatedStudies =
    caseStudies
      .filter(
        (item) =>
          item.slug !== study.slug
      )
      .slice(0, 3);

  return (
    <main className="bg-white">

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative isolate overflow-hidden">

        <div className="absolute inset-0 -z-10">

          <img
            src={study.image}
            alt=""
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/20" />

        </div>

        <div
          className={`${ALIGN} py-24 lg:py-32`}
        >

          {/* Breadcrumb */}

          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-[14px] font-medium"
            style={{
              color:
                CHAMPION_BLUE,
            }}
          >

            <Link
              href="/"
              className="hover:underline"
            >
              Home
            </Link>

            <ChevronRight size={14} />

            <Link
              href="/services"
              className="hover:underline"
            >
              Services
            </Link>

            <ChevronRight size={14} />

            <Link
              href={BASE_PATH}
              className="hover:underline"
            >
              AI Chat Box
            </Link>

            <ChevronRight size={14} />

            <span className="text-slate-500">
              Case Study
            </span>

          </nav>

          {/* Badge */}

          <div
            className="mt-9 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-semibold"
            style={{
              backgroundColor:
                "#F1EEFC",
              color:
                INDIGO_CTA,
            }}
          >
            <Sparkles size={14} />

            AI CHAT BOX
          </div>

          {/* Title */}

          <h1
            className="mt-6 max-w-4xl text-[42px] font-medium leading-[1.1] sm:text-[50px] lg:text-[60px]"
            style={{
              color:
                CHAMPION_BLUE,
            }}
          >
            {study.title}
          </h1>

          {/* Body */}

          <p className="mt-7 max-w-3xl text-[17px] leading-[1.8] text-slate-600">
            {study.body}
          </p>

          {/* Buttons */}

          <div className="mt-8 flex flex-wrap gap-4">

            <Link
              href={`${BASE_PATH}#connect`}
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[14px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                backgroundColor:
                  CHAMPION_BLUE,
              }}
            >
              Explore AI Chat Solutions

              <ArrowUpRight
                size={16}
              />
            </Link>

            <Link
              href="#story"
              className="inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-[14px] font-semibold"
              style={{
                borderColor:
                  LAVENDER_ACCENT,
                color:
                  CHAMPION_BLUE,
              }}
            >
              Explore Case Study
            </Link>

          </div>

        </div>

      </section>

      {/* ======================================================
          TABS
      ====================================================== */}

      <CaseStudyTabs />

      {/* ======================================================
          FEATURE IMAGE
      ====================================================== */}

      <section
        id="story"
        className="bg-white py-16 lg:py-20"
      >

        <div className={ALIGN}>

          <div className="overflow-hidden rounded-3xl">

            <img
              src={study.image}
              alt={study.title}
              className="h-[320px] w-full object-cover sm:h-[430px] lg:h-[560px]"
            />

          </div>

        </div>

      </section>

      {/* ======================================================
          CLIENT
      ====================================================== */}

      <section
        id="client"
        className="scroll-mt-24 py-20 lg:py-24"
      >

        <div className={ALIGN}>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <p
                className="text-[12px] font-semibold tracking-[0.16em]"
                style={{
                  color:
                    INDIGO_CTA,
                }}
              >
                CLIENT
              </p>

              <h2
                className="mt-4 text-[34px] font-medium leading-tight lg:text-[46px]"
                style={{
                  color:
                    CHAMPION_BLUE,
                }}
              >
                Building a smarter conversational experience
              </h2>

            </div>

            <div
              className="rounded-3xl border p-8"
              style={{
                borderColor:
                  "#E5E1F5",
                backgroundColor:
                  "#FAF9FE",
              }}
            >

              <div className="flex gap-5">

                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                  style={{
                    backgroundColor:
                      "#EDE9FC",
                    color:
                      INDIGO_CTA,
                  }}
                >
                  <Headphones
                    size={22}
                  />
                </div>

                <div>

                  <h3
                    className="text-[20px] font-semibold"
                    style={{
                      color:
                        CHAMPION_BLUE,
                    }}
                  >
                    AI Chat Box
                  </h3>

                  <p className="mt-3 text-[15px] leading-7 text-slate-600">
                    {study.body}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
          CHALLENGE
      ====================================================== */}

      <section
        id="challenge"
        className="scroll-mt-24 border-t py-20 lg:py-24"
        style={{
          borderColor:
            "#E5E1F5",
        }}
      >

        <div className={ALIGN}>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[360px_1fr]">

            <div>

              <p
                className="text-[12px] font-semibold tracking-[0.16em]"
                style={{
                  color:
                    INDIGO_CTA,
                }}
              >
                CHALLENGE
              </p>

              <h2
                className="mt-4 text-[34px] font-medium leading-tight lg:text-[44px]"
                style={{
                  color:
                    CHAMPION_BLUE,
                }}
              >
                Moving beyond traditional chatbot experiences
              </h2>

            </div>

            <div className="space-y-5">

              {[
                "Customers expect natural conversations instead of rigid menus.",
                "Employees need faster access to trusted enterprise information.",
                "Business teams need AI responses grounded in approved knowledge.",
                "Complex conversations still require intelligent human escalation.",
              ].map((item) => (

                <div
                  key={item}
                  className="flex gap-4 rounded-2xl border p-6"
                  style={{
                    borderColor:
                      "#E5E1F5",
                  }}
                >

                  <CheckCircle2
                    size={20}
                    className="mt-1 shrink-0"
                    style={{
                      color:
                        INDIGO_CTA,
                    }}
                  />

                  <p className="text-[15px] leading-7 text-slate-600">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
          AI SOLUTION
      ====================================================== */}

      <section
        id="solution"
        className="scroll-mt-24 py-20 lg:py-24"
      >

        <div className={ALIGN}>

          <div
            className="rounded-[32px] p-8 sm:p-10 lg:p-14"
            style={{
              background:
                "linear-gradient(135deg,#17172A,#211B45,#151528)",
            }}
          >

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">

              <div>

                <div className="flex items-center gap-3">

                  <BrainCircuit
                    size={22}
                    style={{
                      color:
                        LAVENDER_ACCENT,
                    }}
                  />

                  <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/60">
                    AI Solution
                  </span>

                </div>

                <h2 className="mt-6 text-[34px] font-medium leading-tight text-white lg:text-[46px]">
                  Conversational AI grounded in trusted business knowledge
                </h2>

                <p className="mt-6 text-[15px] leading-8 text-white/60">
                  {study.body}
                </p>

              </div>

              <div className="grid gap-4 sm:grid-cols-2">

                {[
                  {
                    icon: MessageCircle,
                    title:
                      "Natural Conversations",
                  },
                  {
                    icon: BrainCircuit,
                    title:
                      "Knowledge Retrieval",
                  },
                  {
                    icon: Workflow,
                    title:
                      "Workflow Automation",
                  },
                  {
                    icon: ShieldCheck,
                    title:
                      "Human Escalation",
                  },
                ].map((item) => {

                  const Icon =
                    item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border p-6"
                      style={{
                        borderColor:
                          "rgba(255,255,255,0.10)",
                        backgroundColor:
                          "rgba(255,255,255,0.04)",
                      }}
                    >

                      <Icon
                        size={21}
                        style={{
                          color:
                            LAVENDER_ACCENT,
                        }}
                      />

                      <h3 className="mt-5 text-[17px] font-semibold text-white">
                        {item.title}
                      </h3>

                    </div>
                  );
                })}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
          IMPACT
      ====================================================== */}

      <section
        id="results"
        className="scroll-mt-24 border-t py-20 lg:py-24"
        style={{
          borderColor:
            "#E5E1F5",
        }}
      >

        <div className={ALIGN}>

          <p
            className="text-[12px] font-semibold tracking-[0.16em]"
            style={{
              color:
                INDIGO_CTA,
            }}
          >
            IMPACT
          </p>

          <h2
            className="mt-4 max-w-3xl text-[34px] font-medium leading-tight lg:text-[46px]"
            style={{
              color:
                CHAMPION_BLUE,
            }}
          >
            Turning conversations into useful business outcomes
          </h2>

          <p className="mt-6 max-w-3xl text-[16px] leading-8 text-slate-600">
            {study.body}
          </p>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">

            {[
              {
                title:
                  "Faster Answers",
                text:
                  "Give users quicker access to relevant information through natural-language conversations.",
              },
              {
                title:
                  "Reduced Repetitive Work",
                text:
                  "Automate common questions and workflows so teams can focus on higher-value work.",
              },
              {
                title:
                  "Better Experiences",
                text:
                  "Create more relevant and contextual interactions across customer and employee journeys.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-2xl border p-7"
                style={{
                  borderColor:
                    "#E5E1F5",
                }}
              >

                <h3
                  className="text-[20px] font-semibold"
                  style={{
                    color:
                      CHAMPION_BLUE,
                  }}
                >
                  {item.title}
                </h3>

                <p className="mt-3 text-[14px] leading-7 text-slate-600">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ======================================================
          BENEFITS
      ====================================================== */}

      <section
        id="benefits"
        className="scroll-mt-24 py-20 lg:py-24"
      >

        <div className={ALIGN}>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

            <div>

              <p
                className="text-[12px] font-semibold tracking-[0.16em]"
                style={{
                  color:
                    INDIGO_CTA,
                }}
              >
                BENEFITS
              </p>

              <h2
                className="mt-4 text-[34px] font-medium leading-tight lg:text-[46px]"
                style={{
                  color:
                    CHAMPION_BLUE,
                }}
              >
                AI conversations designed around business value
              </h2>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {[
                "Natural-language interactions",
                "Trusted knowledge retrieval",
                "Context-aware responses",
                "Business workflow automation",
                "Enterprise integrations",
                "Human handoff",
                "Conversation analytics",
                "Secure AI governance",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border p-5"
                  style={{
                    borderColor:
                      "#E5E1F5",
                  }}
                >

                  <CheckCircle2
                    size={18}
                    style={{
                      color:
                        INDIGO_CTA,
                    }}
                  />

                  <span className="text-[14px] font-medium text-slate-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
          TECHNOLOGY
      ====================================================== */}

      <section
        id="technology"
        className="scroll-mt-24 border-t py-20 lg:py-24"
        style={{
          borderColor:
            "#E5E1F5",
        }}
      >

        <div className={ALIGN}>

          <div className="max-w-3xl">

            <p
              className="text-[12px] font-semibold tracking-[0.16em]"
              style={{
                color:
                  INDIGO_CTA,
              }}
            >
              TECHNOLOGY
            </p>

            <h2
              className="mt-4 text-[34px] font-medium leading-tight lg:text-[46px]"
              style={{
                color:
                  CHAMPION_BLUE,
              }}
            >
              An intelligent conversational layer connected to your enterprise
            </h2>

            <p className="mt-6 text-[16px] leading-8 text-slate-600">
              Starfii connects conversational AI
              with approved knowledge sources,
              enterprise systems, APIs, workflows,
              and human support teams to create
              a reliable AI experience.
            </p>

          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-4">

            {[
              {
                icon: BrainCircuit,
                title:
                  "AI Intelligence",
              },
              {
                icon: MessageCircle,
                title:
                  "Conversation",
              },
              {
                icon: Workflow,
                title:
                  "Automation",
              },
              {
                icon: ShieldCheck,
                title:
                  "Governance",
              },
            ].map((item) => {

              const Icon =
                item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border p-7"
                  style={{
                    borderColor:
                      "#E5E1F5",
                    backgroundColor:
                      "#FAF9FE",
                  }}
                >

                  <Icon
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
                    {item.title}
                  </h3>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* ======================================================
          RELATED CASE STUDIES
      ====================================================== */}

      <section
        className="py-24"
        style={{
          background:
            "linear-gradient(180deg,#FFFFFF 0%,#E9E4FB 45%,#C9BEF5 100%)",
        }}
      >

        <div className={ALIGN}>

          <p
            className="text-[12px] font-semibold tracking-[0.16em]"
            style={{
              color:
                INDIGO_CTA,
            }}
          >
            EXPLORE MORE
          </p>

          <h2
            className="mt-3 max-w-3xl text-[34px] font-medium lg:text-[44px]"
            style={{
              color:
                CHAMPION_BLUE,
            }}
          >
            More AI Chat Box Case Studies
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">

            {relatedStudies.map(
              (item) => (

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
                        color:
                          INDIGO_CTA,
                      }}
                    >
                      CASE STUDY
                    </span>

                    <h3
                      className="mt-2 text-[19px] font-semibold leading-snug"
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
                      className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold"
                      style={{
                        color:
                          INDIGO_CTA,
                      }}
                    >
                      Read Case Study
                      <ArrowUpRight
                        size={15}
                      />
                    </span>

                  </div>

                </Link>

              )
            )}

          </div>

        </div>

      </section>

      {/* ======================================================
          FINAL CTA
      ====================================================== */}

      <section
        id="connect"
        className="bg-white py-20"
      >

        <div className={ALIGN}>

          <div
            className="rounded-3xl px-8 py-14 sm:px-12 lg:px-16"
            style={{
              backgroundColor:
                CHAMPION_BLUE,
            }}
          >

            <div className="max-w-3xl">

              <p
                className="text-[12px] font-semibold tracking-[0.16em]"
                style={{
                  color:
                    LAVENDER_ACCENT,
                }}
              >
                AI CHAT BOX
              </p>

              <h2 className="mt-4 text-[34px] font-medium leading-tight text-white lg:text-[46px]">
                Ready to build a smarter AI chat experience?
              </h2>

              <p className="mt-5 text-[16px] leading-8 text-white/70">
                Connect your customers and
                employees with trusted
                information, intelligent
                conversations, and business
                workflows.
              </p>

              <Link
                href={BASE_PATH}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[14px] font-semibold"
                style={{
                  color:
                    CHAMPION_BLUE,
                }}
              >
                Explore AI Chat Box

                <ArrowUpRight
                  size={16}
                />
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
          BACK
      ====================================================== */}

      <section className="bg-white pb-16">

        <div className={ALIGN}>

          <Link
            href={BASE_PATH}
            className="inline-flex items-center gap-2 text-[14px] font-semibold"
            style={{
              color:
                INDIGO_CTA,
            }}
          >

            <ArrowLeft
              size={16}
            />

            Back to AI Chat Box

          </Link>

        </div>

      </section>

    </main>
  );
}
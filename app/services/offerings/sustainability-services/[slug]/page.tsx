import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronRight,
  Sparkles,
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
  "/services/offerings/ai-meeting-assistant";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export const dynamicParams = false;

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
    title: `${study.title} | Starfii`,
    description: study.body,
  };
}

export default async function AIMeetingAssistantCaseStudyPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const relatedStudies = caseStudies
    .filter((item) => item.slug !== study.slug)
    .slice(0, 3);

  return (
    <main className="bg-white">

      {/* ============================================================
          HERO
      ============================================================ */}

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">

          <img
            src={study.image}
            alt=""
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/30" />

        </div>

        <div className={`${ALIGN} py-24 lg:py-32`}>

          {/* Breadcrumb */}

          <nav
            aria-label="Breadcrumb"
            className="font-body flex flex-wrap items-center gap-2 text-[14px] font-medium"
            style={{ color: CHAMPION_BLUE }}
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
              AI Meeting Assistant
            </Link>

            <ChevronRight size={14} />

            <span className="text-slate-500">
              Case Study
            </span>
          </nav>

          {/* Hero Content */}

          <div className="mt-10 max-w-4xl">

            <span
              className="font-body inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-semibold tracking-wide"
              style={{
                backgroundColor: "#F1EEFC",
                color: INDIGO_CTA,
              }}
            >
              <Sparkles size={14} />
              AI MEETING ASSISTANT
            </span>

            <h1
              className="font-heading mt-6 text-[42px] font-medium leading-[1.12] sm:text-[50px] lg:text-[60px]"
              style={{ color: CHAMPION_BLUE }}
            >
              {study.title}
            </h1>

            <p className="font-body mt-7 max-w-3xl text-[17px] leading-relaxed text-slate-600">
              {study.body}
            </p>

          </div>
        </div>
      </section>

      {/* ============================================================
          FEATURE IMAGE
      ============================================================ */}

      <section className="bg-white py-16 lg:py-20">
        <div className={ALIGN}>

          <div className="overflow-hidden rounded-3xl">
            <img
              src={study.image}
              alt={study.title}
              className="h-[320px] w-full object-cover sm:h-[440px] lg:h-[560px]"
            />
          </div>

        </div>
      </section>

      {/* ============================================================
          CONTENT
      ============================================================ */}

      <section className="pb-24">
        <div
          className={`${ALIGN} grid grid-cols-1 gap-14 lg:grid-cols-[1fr_360px]`}
        >

          {/* ========================================================
              MAIN ARTICLE
          ======================================================== */}

          <article className="max-w-4xl">

            <p
              className="font-body text-[12px] font-semibold tracking-[0.18em]"
              style={{ color: LAVENDER_ACCENT }}
            >
              AI MEETING ASSISTANT
            </p>

            <h2
              className="font-heading mt-3 text-[32px] font-medium lg:text-[42px]"
              style={{ color: CHAMPION_BLUE }}
            >
              Turning Meetings Into Actionable Business Intelligence
            </h2>

            <p className="font-body mt-6 text-[16px] leading-[1.9] text-slate-600">
              {study.body}
            </p>

            <p className="font-body mt-5 text-[16px] leading-[1.9] text-slate-600">
              Modern organizations generate valuable information in
              meetings every day. However, important decisions,
              commitments, customer requirements, and next steps can
              easily become difficult to track when conversations are
              documented manually.
            </p>

            <p className="font-body mt-5 text-[16px] leading-[1.9] text-slate-600">
              Starfii's AI Meeting Assistant helps transform those
              conversations into structured meeting intelligence by
              combining intelligent transcription, contextual analysis,
              generative AI, summarization, and workflow automation.
            </p>

            {/* ======================================================
                CAPABILITY 01
            ====================================================== */}

            <div className="mt-10 space-y-10">

              <div>
                <h3
                  className="font-heading text-[24px] font-semibold"
                  style={{ color: CHAMPION_BLUE }}
                >
                  Intelligent Meeting Transcription
                </h3>

                <p className="font-body mt-3 text-[15px] leading-[1.9] text-slate-600">
                  Capture meeting conversations and convert spoken
                  discussions into structured, searchable information.
                  This creates a reliable digital record that teams can
                  review, analyze, and use across downstream workflows.
                </p>
              </div>

              {/* ====================================================
                  CAPABILITY 02
              ==================================================== */}

              <div>
                <h3
                  className="font-heading text-[24px] font-semibold"
                  style={{ color: CHAMPION_BLUE }}
                >
                  Intelligent Meeting Summaries
                </h3>

                <p className="font-body mt-3 text-[15px] leading-[1.9] text-slate-600">
                  Transform lengthy conversations into concise,
                  structured summaries that highlight important topics,
                  discussion points, decisions, risks, and outcomes.
                </p>
              </div>

              {/* ====================================================
                  CAPABILITY 03
              ==================================================== */}

              <div>
                <h3
                  className="font-heading text-[24px] font-semibold"
                  style={{ color: CHAMPION_BLUE }}
                >
                  Action Item Detection
                </h3>

                <p className="font-body mt-3 text-[15px] leading-[1.9] text-slate-600">
                  Identify tasks, commitments, owners, deadlines, and
                  follow-up activities directly from meeting
                  conversations so teams can move from discussion to
                  execution faster.
                </p>
              </div>

              {/* ====================================================
                  CAPABILITY 04
              ==================================================== */}

              <div>
                <h3
                  className="font-heading text-[24px] font-semibold"
                  style={{ color: CHAMPION_BLUE }}
                >
                  Decision &amp; Conversation Intelligence
                </h3>

                <p className="font-body mt-3 text-[15px] leading-[1.9] text-slate-600">
                  Surface important decisions, customer requirements,
                  recurring themes, risks, commitments, and business
                  context so teams can quickly understand what happened
                  and what needs to happen next.
                </p>
              </div>

              {/* ====================================================
                  CAPABILITY 05
              ==================================================== */}

              <div>
                <h3
                  className="font-heading text-[24px] font-semibold"
                  style={{ color: CHAMPION_BLUE }}
                >
                  Meeting Workflow Automation
                </h3>

                <p className="font-body mt-3 text-[15px] leading-[1.9] text-slate-600">
                  Connect meeting outcomes with CRM platforms, project
                  management tools, collaboration systems,
                  notifications, and enterprise applications to reduce
                  repetitive follow-up work.
                </p>
              </div>

            </div>

          </article>

          {/* ========================================================
              SIDEBAR
          ======================================================== */}

          <aside>

            <div
              className="rounded-2xl p-7 lg:sticky lg:top-8"
              style={{ backgroundColor: "#F5F3FC" }}
            >

              <p
                className="font-body text-[12px] font-semibold tracking-[0.18em]"
                style={{ color: LAVENDER_ACCENT }}
              >
                AI MEETING ASSISTANT
              </p>

              <h3
                className="font-heading mt-3 text-[25px] font-semibold"
                style={{ color: CHAMPION_BLUE }}
              >
                Meeting Intelligence Capabilities
              </h3>

              <div className="mt-7 space-y-3">

                {[
                  "AI Meeting Transcription",
                  "Intelligent Meeting Summaries",
                  "Action Item Detection",
                  "Decision Intelligence",
                  "Speaker & Topic Intelligence",
                  "Meeting Workflow Automation",
                  "Sales Meeting Intelligence",
                  "Meeting Analytics",
                  "Enterprise Collaboration",
                  "Security & Governance",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border-b border-slate-200 pb-3"
                  >
                    <span
                      className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full"
                      style={{
                        backgroundColor: INDIGO_CTA,
                      }}
                    />

                    <span className="font-body text-[14px] leading-relaxed text-slate-600">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

              <Link
                href={BASE_PATH}
                className="font-body mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  backgroundColor: CHAMPION_BLUE,
                }}
              >
                Explore AI Meeting Assistant
                <ArrowUpRight size={16} />
              </Link>

            </div>

          </aside>

        </div>
      </section>

      {/* ============================================================
          BUSINESS VALUE
      ============================================================ */}

      <section className="bg-[#0A0912] py-24">
        <div className={ALIGN}>

          <div className="max-w-3xl">

            <p
              className="font-body text-[12px] font-semibold tracking-[0.18em]"
              style={{ color: LAVENDER_ACCENT }}
            >
              BUSINESS VALUE
            </p>

            <h2 className="font-heading mt-4 text-[36px] font-medium leading-[1.15] text-white lg:text-[46px]">
              Meeting intelligence built to help teams work smarter
            </h2>

            <p className="font-body mt-5 text-[15px] leading-relaxed text-white/60">
              AI-powered meeting workflows can reduce administrative
              effort, improve visibility into conversations, and help
              teams consistently act on the outcomes that matter.
            </p>

          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
              <p className="text-sm font-semibold text-[#A48FEA]">
                01
              </p>

              <h3 className="font-heading mt-5 text-[22px] font-semibold text-white">
                Faster Documentation
              </h3>

              <p className="font-body mt-3 text-[14px] leading-relaxed text-white/55">
                Reduce the time teams spend manually creating notes,
                summaries, and follow-up documentation after meetings.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
              <p className="text-sm font-semibold text-[#A48FEA]">
                02
              </p>

              <h3 className="font-heading mt-5 text-[22px] font-semibold text-white">
                Better Follow-Through
              </h3>

              <p className="font-body mt-3 text-[14px] leading-relaxed text-white/55">
                Keep action items, owners, commitments, and deadlines
                visible so important next steps do not get lost.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
              <p className="text-sm font-semibold text-[#A48FEA]">
                03
              </p>

              <h3 className="font-heading mt-5 text-[22px] font-semibold text-white">
                Stronger Business Visibility
              </h3>

              <p className="font-body mt-3 text-[14px] leading-relaxed text-white/55">
                Turn conversations into structured intelligence that
                helps teams identify decisions, risks, themes, and
                opportunities.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          RELATED CASE STUDIES
      ============================================================ */}

      <section
        className="py-24"
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #E9E4FB 45%, #C9BEF5 100%)",
        }}
      >
        <div className={ALIGN}>

          <div className="flex items-center justify-between">

            <h2
              className="font-heading text-[36px] font-medium lg:text-[44px]"
              style={{ color: CHAMPION_BLUE }}
            >
              Related Case Studies
            </h2>

            <Link
              href={BASE_PATH}
              className="font-body hidden items-center gap-1.5 text-[15px] font-semibold sm:flex"
              style={{ color: INDIGO_CTA }}
            >
              View All
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
                    className="font-body text-[12px] font-semibold tracking-wide"
                    style={{ color: INDIGO_CTA }}
                  >
                    AI MEETING ASSISTANT
                  </span>

                  <h3
                    className="font-heading mt-2 text-[19px] font-semibold leading-snug"
                    style={{ color: CHAMPION_BLUE }}
                  >
                    {item.title}
                  </h3>

                  <p className="font-body mt-3 line-clamp-3 text-[14px] leading-relaxed text-slate-600">
                    {item.body}
                  </p>

                  <span
                    className="font-body mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold"
                    style={{ color: INDIGO_CTA }}
                  >
                    Learn More
                    <ArrowUpRight size={15} />
                  </span>

                </div>

              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* ============================================================
          FINAL CTA
      ============================================================ */}

      <section className="bg-[#F5F3FC] py-20 lg:py-24">
        <div className={`${ALIGN} text-center`}>

          <p
            className="font-body text-[12px] font-semibold tracking-[0.18em]"
            style={{ color: INDIGO_CTA }}
          >
            AI MEETING ASSISTANT
          </p>

          <h2
            className="font-heading mx-auto mt-4 max-w-3xl text-[34px] font-medium leading-tight lg:text-[46px]"
            style={{ color: CHAMPION_BLUE }}
          >
            Ready to turn every meeting into actionable intelligence?
          </h2>

          <p className="font-body mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-slate-600">
            Build an AI-powered meeting experience that captures
            conversations, surfaces decisions and action items, and
            connects meeting outcomes with the workflows that move
            your business forward.
          </p>

          <Link
            href={BASE_PATH}
            className="font-body mt-8 inline-flex items-center gap-2 rounded-full px-7 py-4 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{
              backgroundColor: CHAMPION_BLUE,
            }}
          >
            Explore AI Meeting Assistant
            <ArrowUpRight size={17} />
          </Link>

        </div>
      </section>

      {/* ============================================================
          BACK TO SERVICE
      ============================================================ */}

      <section className="bg-white py-12">
        <div className={ALIGN}>

          <Link
            href={BASE_PATH}
            className="font-body inline-flex items-center gap-2 text-[14px] font-semibold transition-transform duration-200 hover:-translate-x-1"
            style={{ color: INDIGO_CTA }}
          >
            <ArrowLeft size={16} />
            Back to AI Meeting Assistant
          </Link>

        </div>
      </section>

    </main>
  );
}
// app/services/offerings/ai-file-storage/[slug]/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Database,
  FileSearch,
  FolderTree,
  LockKeyhole,
  Search,
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
  "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

const BASE_PATH =
  "/services/offerings/ai-file-storage";

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
      description:
        "The requested AI File Storage case study could not be found.",
    };
  }

  return {
    title:
      `${study.title} | Starfii AI File Storage`,
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

          {/* BREADCRUMB */}

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

            <ChevronRight
              size={14}
            />

            <Link
              href="/services"
              className="hover:underline"
            >
              Services
            </Link>

            <ChevronRight
              size={14}
            />

            <Link
              href={BASE_PATH}
              className="hover:underline"
            >
              AI File Storage
            </Link>

            <ChevronRight
              size={14}
            />

            <span className="text-slate-500">
              Case Study
            </span>

          </nav>

          {/* HERO CONTENT */}

          <div className="mt-10 max-w-4xl">

            <p
              className="text-[12px] font-semibold tracking-[0.18em]"
              style={{
                color:
                  INDIGO_CTA,
              }}
            >
              AI FILE STORAGE CASE STUDY
            </p>

            <h1
              className="font-heading mt-5 max-w-4xl text-[42px] font-medium leading-[1.12] lg:text-[58px]"
              style={{
                color:
                  CHAMPION_BLUE,
              }}
            >
              {study.title}
            </h1>

            <p className="font-body mt-7 max-w-2xl text-[17px] leading-[1.85] text-slate-600">
              {study.body}
            </p>

            <Link
              href={BASE_PATH}
              className="font-body mt-9 inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-[14px] font-semibold transition-all duration-300 hover:-translate-x-1 hover:bg-white"
              style={{
                borderColor:
                  CHAMPION_BLUE,
                color:
                  CHAMPION_BLUE,
              }}
            >
              <ArrowLeft
                size={16}
              />
              Back to AI File Storage
            </Link>

          </div>

        </div>
      </section>

      {/* ======================================================
          STICKY CASE STUDY TABS
      ====================================================== */}

      <CaseStudyTabs />

      {/* ======================================================
          MAIN CONTENT
      ====================================================== */}

      <section className="py-20 lg:py-24">

        <div className={ALIGN}>

          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1fr)_360px]">

            {/* =================================================
                ARTICLE
            ================================================= */}

            <article>

              {/* CLIENT */}

              <section
                id="client"
                className="scroll-mt-28"
              >

                <div className="flex items-center gap-3">

                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full"
                    style={{
                      backgroundColor:
                        "#F1EEFC",
                      color:
                        INDIGO_CTA,
                    }}
                  >
                    <Database
                      size={18}
                    />
                  </span>

                  <div>
                    <p
                      className="text-[12px] font-semibold tracking-[0.18em]"
                      style={{
                        color:
                          LAVENDER_ACCENT,
                      }}
                    >
                      01 / CLIENT
                    </p>

                    <h2
                      className="font-heading mt-1 text-[32px] font-medium leading-tight lg:text-[42px]"
                      style={{
                        color:
                          CHAMPION_BLUE,
                      }}
                    >
                      A modern information foundation for growing enterprises
                    </h2>
                  </div>

                </div>

                <p className="mt-7 text-[16px] leading-[1.9] text-slate-600">
                  Organizations managing large volumes of
                  documents need more than traditional folders
                  and storage locations. The information needs to
                  remain secure, discoverable, organized, and
                  useful across everyday business operations.
                </p>

                <p className="mt-5 text-[16px] leading-[1.9] text-slate-600">
                  Starfii approaches AI File Storage as an
                  intelligent information layer that combines
                  enterprise storage with AI-powered organization,
                  search, document understanding, and workflow
                  connectivity.
                </p>

              </section>

              {/* FEATURE IMAGE */}

              <div className="mt-14 overflow-hidden rounded-2xl">

                <img
                  src={study.image}
                  alt={study.title}
                  className="h-[320px] w-full object-cover lg:h-[460px]"
                />

              </div>

              {/* CHALLENGE */}

              <section
                id="challenge"
                className="scroll-mt-28 pt-20"
              >

                <p
                  className="text-[12px] font-semibold tracking-[0.18em]"
                  style={{
                    color:
                      LAVENDER_ACCENT,
                  }}
                >
                  02 / CHALLENGE
                </p>

                <h2
                  className="font-heading mt-3 text-[32px] font-medium leading-tight lg:text-[42px]"
                  style={{
                    color:
                      CHAMPION_BLUE,
                  }}
                >
                  Growing file repositories create growing information complexity
                </h2>

                <p className="mt-6 text-[16px] leading-[1.9] text-slate-600">
                  As enterprise content grows, employees can
                  spend increasing amounts of time locating the
                  right documents, understanding their contents,
                  maintaining folder structures, and identifying
                  the latest relevant information.
                </p>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

                  {[
                    "Large and distributed document repositories",
                    "Manual folder and file organization",
                    "Difficulty finding information by meaning",
                    "Limited visibility across unstructured content",
                  ].map(
                    (item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-slate-200 bg-white p-5"
                      >
                        <div className="flex items-start gap-3">

                          <CheckCircle2
                            size={19}
                            className="mt-0.5 shrink-0"
                            style={{
                              color:
                                INDIGO_CTA,
                            }}
                          />

                          <span className="text-[14px] leading-relaxed text-slate-600">
                            {item}
                          </span>

                        </div>
                      </div>
                    )
                  )}

                </div>

              </section>

              {/* AI SOLUTION */}

              <section
                id="solution"
                className="scroll-mt-28 pt-20"
              >

                <p
                  className="text-[12px] font-semibold tracking-[0.18em]"
                  style={{
                    color:
                      LAVENDER_ACCENT,
                  }}
                >
                  03 / AI SOLUTION
                </p>

                <h2
                  className="font-heading mt-3 text-[32px] font-medium leading-tight lg:text-[42px]"
                  style={{
                    color:
                      CHAMPION_BLUE,
                  }}
                >
                  Turn stored files into intelligent business information
                </h2>

                <p className="mt-6 text-[16px] leading-[1.9] text-slate-600">
                  AI-powered file storage can add intelligence
                  around the content already stored by an
                  organization. Instead of treating every file as
                  an isolated object, the platform can understand
                  content, metadata, relationships, and context.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">

                  <div className="rounded-2xl border border-[#E5E1F5] bg-[#F8F7FD] p-7">

                    <FolderTree
                      size={24}
                      style={{
                        color:
                          INDIGO_CTA,
                      }}
                    />

                    <h3
                      className="font-heading mt-5 text-[20px] font-semibold"
                      style={{
                        color:
                          CHAMPION_BLUE,
                      }}
                    >
                      Intelligent Organization
                    </h3>

                    <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                      Automatically classify content, enrich
                      metadata, identify document types, and create
                      useful information structures.
                    </p>

                  </div>

                  <div className="rounded-2xl border border-[#E5E1F5] bg-[#F8F7FD] p-7">

                    <FileSearch
                      size={24}
                      style={{
                        color:
                          INDIGO_CTA,
                      }}
                    />

                    <h3
                      className="font-heading mt-5 text-[20px] font-semibold"
                      style={{
                        color:
                          CHAMPION_BLUE,
                      }}
                    >
                      Document Intelligence
                    </h3>

                    <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                      Extract important information, summarize
                      content, identify entities, and make
                      unstructured documents easier to understand.
                    </p>

                  </div>

                  <div className="rounded-2xl border border-[#E5E1F5] bg-[#F8F7FD] p-7">

                    <Search
                      size={24}
                      style={{
                        color:
                          INDIGO_CTA,
                      }}
                    />

                    <h3
                      className="font-heading mt-5 text-[20px] font-semibold"
                      style={{
                        color:
                          CHAMPION_BLUE,
                      }}
                    >
                      Semantic Search
                    </h3>

                    <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                      Help authorized users find relevant
                      information using natural language,
                      meaning, context, and intent.
                    </p>

                  </div>

                  <div className="rounded-2xl border border-[#E5E1F5] bg-[#F8F7FD] p-7">

                    <Workflow
                      size={24}
                      style={{
                        color:
                          INDIGO_CTA,
                      }}
                    />

                    <h3
                      className="font-heading mt-5 text-[20px] font-semibold"
                      style={{
                        color:
                          CHAMPION_BLUE,
                      }}
                    >
                      Workflow Integration
                    </h3>

                    <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                      Connect intelligent documents with business
                      applications, APIs, collaboration systems,
                      and operational workflows.
                    </p>

                  </div>

                </div>

              </section>

              {/* IMPACT */}

              <section
                id="impact"
                className="scroll-mt-28 pt-20"
              >

                <p
                  className="text-[12px] font-semibold tracking-[0.18em]"
                  style={{
                    color:
                      LAVENDER_ACCENT,
                  }}
                >
                  04 / IMPACT
                </p>

                <h2
                  className="font-heading mt-3 text-[32px] font-medium leading-tight lg:text-[42px]"
                  style={{
                    color:
                      CHAMPION_BLUE,
                  }}
                >
                  Make enterprise information easier to find, understand, and use
                </h2>

                <p className="mt-6 text-[16px] leading-[1.9] text-slate-600">
                  The value of intelligent file storage extends
                  beyond simply storing more documents. By adding
                  AI capabilities around information, organizations
                  can create faster paths from stored content to
                  useful business knowledge.
                </p>

                <div className="mt-10 rounded-2xl bg-[#1B2560] p-8 text-white lg:p-10">

                  <div className="flex items-center gap-3">

                    <Sparkles
                      size={22}
                      style={{
                        color:
                          LAVENDER_ACCENT,
                      }}
                    />

                    <h3 className="font-heading text-[23px] font-semibold">
                      Intelligent Information Layer
                    </h3>

                  </div>

                  <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">

                    <div>
                      <p className="text-[13px] font-semibold uppercase tracking-wide text-[#A48FEA]">
                        Discover
                      </p>

                      <p className="mt-2 text-[14px] leading-relaxed text-white/75">
                        Find relevant documents and information
                        faster using semantic discovery.
                      </p>
                    </div>

                    <div>
                      <p className="text-[13px] font-semibold uppercase tracking-wide text-[#A48FEA]">
                        Understand
                      </p>

                      <p className="mt-2 text-[14px] leading-relaxed text-white/75">
                        Extract context and meaning from
                        unstructured business documents.
                      </p>
                    </div>

                    <div>
                      <p className="text-[13px] font-semibold uppercase tracking-wide text-[#A48FEA]">
                        Act
                      </p>

                      <p className="mt-2 text-[14px] leading-relaxed text-white/75">
                        Connect information with workflows,
                        applications, and decisions.
                      </p>
                    </div>

                  </div>

                </div>

              </section>

              {/* BENEFITS */}

              <section
                id="benefits"
                className="scroll-mt-28 pt-20"
              >

                <p
                  className="text-[12px] font-semibold tracking-[0.18em]"
                  style={{
                    color:
                      LAVENDER_ACCENT,
                  }}
                >
                  05 / BENEFITS
                </p>

                <h2
                  className="font-heading mt-3 text-[32px] font-medium leading-tight lg:text-[42px]"
                  style={{
                    color:
                      CHAMPION_BLUE,
                  }}
                >
                  Built around the way enterprise information is actually used
                </h2>

                <div className="mt-8 space-y-4">

                  {[
                    "Reduce the manual effort required to organize large file collections.",
                    "Improve information discovery across distributed repositories.",
                    "Make documents easier to understand with AI-powered extraction and summarization.",
                    "Create consistent metadata and information structures.",
                    "Support secure access, governance, and controlled information usage.",
                    "Connect document intelligence with existing enterprise workflows.",
                  ].map(
                    (item) => (
                      <div
                        key={item}
                        className="flex items-start gap-4 border-b border-slate-200 pb-4"
                      >

                        <span
                          className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                          style={{
                            backgroundColor:
                              "#F1EEFC",
                          }}
                        >
                          <CheckCircle2
                            size={16}
                            style={{
                              color:
                                INDIGO_CTA,
                            }}
                          />
                        </span>

                        <p className="text-[15px] leading-relaxed text-slate-600">
                          {item}
                        </p>

                      </div>
                    )
                  )}

                </div>

              </section>

              {/* TECHNOLOGY */}

              <section
                id="technology"
                className="scroll-mt-28 pt-20"
              >

                <p
                  className="text-[12px] font-semibold tracking-[0.18em]"
                  style={{
                    color:
                      LAVENDER_ACCENT,
                  }}
                >
                  06 / TECHNOLOGY
                </p>

                <h2
                  className="font-heading mt-3 text-[32px] font-medium leading-tight lg:text-[42px]"
                  style={{
                    color:
                      CHAMPION_BLUE,
                  }}
                >
                  A technology foundation for intelligent enterprise content
                </h2>

                <p className="mt-6 text-[16px] leading-[1.9] text-slate-600">
                  AI File Storage can combine secure storage,
                  intelligent retrieval, document processing,
                  metadata services, AI models, APIs, and
                  enterprise security controls into a connected
                  information platform.
                </p>

                <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">

                  {[
                    {
                      icon: Database,
                      title: "Cloud Storage",
                    },
                    {
                      icon: Search,
                      title: "Semantic Search",
                    },
                    {
                      icon: FileSearch,
                      title: "Document Intelligence",
                    },
                    {
                      icon: LockKeyhole,
                      title: "Security & Access Control",
                    },
                    {
                      icon: FolderTree,
                      title: "Metadata & Classification",
                    },
                    {
                      icon: Workflow,
                      title: "API & Workflow Integration",
                    },
                  ].map(
                    ({
                      icon: Icon,
                      title,
                    }) => (
                      <div
                        key={title}
                        className="flex items-center gap-4 rounded-xl border border-slate-200 p-5"
                      >

                        <span
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                          style={{
                            backgroundColor:
                              "#F1EEFC",
                            color:
                              INDIGO_CTA,
                          }}
                        >
                          <Icon
                            size={20}
                          />
                        </span>

                        <span
                          className="text-[14px] font-semibold"
                          style={{
                            color:
                              CHAMPION_BLUE,
                          }}
                        >
                          {title}
                        </span>

                      </div>
                    )
                  )}

                </div>

              </section>

            </article>

            {/* =================================================
                SIDEBAR
            ================================================= */}

            <aside className="lg:sticky lg:top-28 lg:self-start">

              <div
                className="rounded-2xl border p-7"
                style={{
                  borderColor:
                    LAVENDER_ACCENT,
                  backgroundColor:
                    "#F8F7FD",
                }}
              >

                <div className="flex items-center gap-3">

                  <Sparkles
                    size={21}
                    style={{
                      color:
                        INDIGO_CTA,
                    }}
                  />

                  <h3
                    className="font-heading text-[20px] font-semibold"
                    style={{
                      color:
                        CHAMPION_BLUE,
                    }}
                  >
                    AI File Intelligence
                  </h3>

                </div>

                <p className="mt-4 text-[14px] leading-relaxed text-slate-600">
                  Turn enterprise file repositories into
                  intelligent, searchable, connected information
                  environments.
                </p>

                <div className="mt-7 space-y-3">

                  {[
                    "Intelligent organization",
                    "Semantic enterprise search",
                    "Document understanding",
                    "Metadata enrichment",
                    "Security & governance",
                    "Workflow integration",
                  ].map(
                    (item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 border-b border-slate-200 pb-3"
                      >

                        <span
                          className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                          style={{
                            backgroundColor:
                              INDIGO_CTA,
                          }}
                        />

                        <span className="text-[14px] leading-relaxed text-slate-600">
                          {item}
                        </span>

                      </div>
                    )
                  )}

                </div>

                <Link
                  href={`${BASE_PATH}#connect`}
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[14px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  style={{
                    backgroundColor:
                      CHAMPION_BLUE,
                  }}
                >
                  Build AI File Storage
                  <ArrowUpRight
                    size={16}
                  />
                </Link>

              </div>

            </aside>

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
            "linear-gradient(180deg, #FFFFFF 0%, #E9E4FB 45%, #C9BEF5 100%)",
        }}
      >

        <div className={ALIGN}>

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>

              <p
                className="text-[12px] font-semibold tracking-[0.15em]"
                style={{
                  color:
                    INDIGO_CTA,
                }}
              >
                EXPLORE MORE
              </p>

              <h2
                className="font-heading mt-3 max-w-3xl text-[32px] font-medium leading-tight lg:text-[44px]"
                style={{
                  color:
                    CHAMPION_BLUE,
                }}
              >
                More AI File Storage Case Studies
              </h2>

            </div>

            <Link
              href={BASE_PATH}
              className="hidden items-center gap-1.5 text-[15px] font-semibold sm:flex"
              style={{
                color:
                  INDIGO_CTA,
              }}
            >
              View All Case Studies
              <ArrowUpRight
                size={16}
              />
            </Link>

          </div>

          <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">

            {relatedStudies.map(
              (item) => (
                <Link
                  key={item.slug}
                  href={`${BASE_PATH}/${item.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl"
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
                      className="font-heading mt-2 text-[19px] font-semibold leading-snug"
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
          CTA
      ====================================================== */}

      <section
        className="py-24"
        style={{
          backgroundColor:
            CHAMPION_BLUE,
        }}
      >

        <div
          className={`${ALIGN} text-center`}
        >

          <p
            className="text-[12px] font-semibold tracking-[0.18em]"
            style={{
              color:
                LAVENDER_ACCENT,
            }}
          >
            BUILD THE NEXT INFORMATION EXPERIENCE
          </p>

          <h2 className="font-heading mx-auto mt-4 max-w-4xl text-[36px] font-medium leading-tight text-white lg:text-[50px]">
            Turn your enterprise files into intelligent business knowledge
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-white/70">
            Create a secure, scalable, AI-powered information
            environment that helps your teams find, understand,
            and use business content more effectively.
          </p>

          <Link
            href={`${BASE_PATH}#connect`}
            className="mt-9 inline-flex items-center gap-2 rounded-full px-7 py-4 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{
              backgroundColor:
                INDIGO_CTA,
            }}
          >
            Explore AI File Storage
            <ArrowUpRight
              size={17}
            />
          </Link>

        </div>

      </section>

      {/* ======================================================
          BACK LINK
      ====================================================== */}

      <div className="border-t border-slate-200 bg-white">

        <div className={ALIGN}>

          <Link
            href={BASE_PATH}
            className="flex items-center gap-2 py-7 text-[14px] font-semibold"
            style={{
              color:
                INDIGO_CTA,
            }}
          >
            <ArrowLeft
              size={16}
            />
            Back to AI File Storage
          </Link>

        </div>

      </div>

    </main>
  );
}
// app/services/offerings/ai-data-extraction/[slug]/page.tsx

import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  FileSearch,
  Database,
  Workflow,
  ShieldCheck,
  Search,
  Sparkles,
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
  "/services/offerings/ai-data-extraction";

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
        "The requested AI Data Extraction case study could not be found.",
    };
  }

  return {
    title:
      `${study.title} | Starfii AI Data Extraction`,
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
              color: CHAMPION_BLUE,
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
              AI Data Extraction
            </Link>

            <ChevronRight size={14} />

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
              AI DATA EXTRACTION CASE STUDY
            </p>

            <h1
              className="mt-5 max-w-4xl text-[42px] font-medium leading-[1.12] sm:text-[50px] lg:text-[60px]"
              style={{
                color:
                  CHAMPION_BLUE,
              }}
            >
              {study.title}
            </h1>

            <p className="mt-7 max-w-3xl text-[17px] leading-[1.8] text-slate-600">
              {study.body}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href={`${BASE_PATH}#connect`}
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[14px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  backgroundColor:
                    CHAMPION_BLUE,
                }}
              >
                Build an AI Data Solution
                <ArrowUpRight
                  size={16}
                />
              </Link>

              <Link
                href="#story"
                className="inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-[14px] font-semibold transition-all hover:-translate-y-0.5"
                style={{
                  borderColor:
                    LAVENDER_ACCENT,
                  color:
                    CHAMPION_BLUE,
                }}
              >
                Explore the Case Study
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
          STICKY TABS
      ====================================================== */}

      <CaseStudyTabs />

      {/* ======================================================
          FEATURE IMAGE
      ====================================================== */}

      <section className="bg-white py-16 lg:py-20">

        <div className={ALIGN}>

          <div className="group overflow-hidden rounded-3xl">

            <img
              src={study.image}
              alt={study.title}
              className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:h-[420px] lg:h-[560px]"
            />

          </div>

        </div>

      </section>

      {/* ======================================================
          MAIN STORY
      ====================================================== */}

      <section
        id="story"
        className="pb-24"
      >

        <div
          className={`${ALIGN} grid grid-cols-1 gap-14 lg:grid-cols-[1fr_360px]`}
        >

          {/* ==================================================
              ARTICLE
          ================================================== */}

          <article className="max-w-4xl">

            {/* =================================================
                CLIENT
            ================================================= */}

            <div
              id="client"
              className="scroll-mt-28"
            >

              <p
                className="text-[12px] font-semibold tracking-[0.18em]"
                style={{
                  color:
                    LAVENDER_ACCENT,
                }}
              >
                AI DATA EXTRACTION CASE STUDY
              </p>

              <h2
                className="mt-3 text-[32px] font-medium leading-tight lg:text-[42px]"
                style={{
                  color:
                    CHAMPION_BLUE,
                }}
              >
                Turning business documents into intelligent, usable data
              </h2>

              <p className="mt-6 text-[16px] leading-[1.9] text-slate-600">
                {study.body}
              </p>

              <p className="mt-5 text-[16px] leading-[1.9] text-slate-600">
                Starfii helps organizations transform invoices,
                contracts, forms, applications, reports, claims,
                emails, and other unstructured information into
                structured business data using AI-powered document
                intelligence and extraction workflows.
              </p>

            </div>

            {/* =================================================
                CHALLENGE
            ================================================= */}

            <div
              id="challenge"
              className="mt-16 scroll-mt-28"
            >

              <p
                className="text-[12px] font-semibold tracking-[0.18em]"
                style={{
                  color:
                    LAVENDER_ACCENT,
                }}
              >
                01 / DATA EXTRACTION CHALLENGE
              </p>

              <h2
                className="mt-3 text-[32px] font-medium leading-tight lg:text-[42px]"
                style={{
                  color:
                    CHAMPION_BLUE,
                }}
              >
                Moving beyond manual document processing
              </h2>

              <p className="mt-6 text-[16px] leading-[1.9] text-slate-600">
                Business documents often contain valuable
                information, but that information can be difficult
                to use when it remains locked inside PDFs, scans,
                images, forms, emails, and other unstructured
                content.
              </p>

              <p className="mt-5 text-[16px] leading-[1.9] text-slate-600">
                Manual data entry, document review, repetitive
                validation, and disconnected handoffs can slow
                operations and create unnecessary processing work.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

                {[
                  "High volumes of unstructured documents",
                  "Manual field and data entry",
                  "Inconsistent document formats",
                  "Repetitive validation and review",
                  "Disconnected downstream systems",
                  "Limited visibility into extracted information",
                ].map((item) => (

                  <div
                    key={item}
                    className="rounded-2xl p-6"
                    style={{
                      backgroundColor:
                        "#F5F3FC",
                    }}
                  >

                    <div className="flex items-start gap-3">

                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0"
                        style={{
                          color:
                            INDIGO_CTA,
                        }}
                      />

                      <p className="text-[14px] leading-relaxed text-slate-600">
                        {item}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

            {/* =================================================
                SOLUTION
            ================================================= */}

            <div
              id="solution"
              className="mt-16 scroll-mt-28"
            >

              <p
                className="text-[12px] font-semibold tracking-[0.18em]"
                style={{
                  color:
                    LAVENDER_ACCENT,
                }}
              >
                02 / STARFII AI DATA SOLUTION
              </p>

              <h2
                className="mt-3 text-[32px] font-medium leading-tight lg:text-[42px]"
                style={{
                  color:
                    CHAMPION_BLUE,
                }}
              >
                Intelligent extraction built around business context
              </h2>

              <p className="mt-6 text-[16px] leading-[1.9] text-slate-600">
                Starfii combines AI document understanding, OCR,
                natural language processing, structured extraction,
                validation, and workflow automation to transform
                unstructured content into reliable business data.
              </p>

              <p className="mt-5 text-[16px] leading-[1.9] text-slate-600">
                The extracted information can then move into
                databases, APIs, CRM, ERP, finance systems,
                healthcare platforms, insurance workflows, and
                other enterprise applications.
              </p>

              <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">

                {[
                  {
                    icon: FileSearch,
                    title:
                      "Document Understanding",
                    body:
                      "Understand document structures, fields, entities, and context.",
                  },
                  {
                    icon: Search,
                    title:
                      "Intelligent Extraction",
                    body:
                      "Extract the information required for downstream business processes.",
                  },
                  {
                    icon: ShieldCheck,
                    title:
                      "Validation",
                    body:
                      "Apply confidence scoring, validation rules, and exception handling.",
                  },
                  {
                    icon: Workflow,
                    title:
                      "Workflow Automation",
                    body:
                      "Move structured data into systems and operational workflows.",
                  },
                ].map(
                  ({
                    icon: Icon,
                    title,
                    body,
                  }) => (

                    <div
                      key={title}
                      className="rounded-2xl border border-[#E5E1F5] p-6"
                    >

                      <Icon
                        size={23}
                        style={{
                          color:
                            INDIGO_CTA,
                        }}
                      />

                      <h3
                        className="mt-5 text-[19px] font-semibold"
                        style={{
                          color:
                            CHAMPION_BLUE,
                        }}
                      >
                        {title}
                      </h3>

                      <p className="mt-2 text-[14px] leading-relaxed text-slate-600">
                        {body}
                      </p>

                    </div>

                  )
                )}

              </div>

            </div>

            {/* =================================================
                IMPACT
            ================================================= */}

            <div
              id="impact"
              className="mt-16 scroll-mt-28"
            >

              <p
                className="text-[12px] font-semibold tracking-[0.18em]"
                style={{
                  color:
                    LAVENDER_ACCENT,
                }}
              >
                03 / BUSINESS IMPACT
              </p>

              <h2
                className="mt-3 text-[32px] font-medium leading-tight lg:text-[42px]"
                style={{
                  color:
                    CHAMPION_BLUE,
                }}
              >
                From unstructured documents to measurable business value
              </h2>

              <p className="mt-6 text-[16px] leading-[1.9] text-slate-600">
                AI data extraction helps organizations reduce
                repetitive processing, improve information
                accessibility, and create faster document-driven
                workflows.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  {
                    title:
                      "Faster Data Processing",
                    body:
                      "Automate repetitive extraction and reduce the time required to process large document volumes.",
                  },
                  {
                    title:
                      "Improved Data Quality",
                    body:
                      "Use validation, confidence scoring, and exception handling to improve consistency.",
                  },
                  {
                    title:
                      "Better Operational Visibility",
                    body:
                      "Turn document content into structured information that business systems can use.",
                  },
                  {
                    title:
                      "Connected Workflows",
                    body:
                      "Move extracted information directly into downstream systems and operational processes.",
                  },
                ].map(
                  (item) => (

                    <div
                      key={item.title}
                      className="rounded-2xl p-6"
                      style={{
                        backgroundColor:
                          "#F5F3FC",
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

                      <p className="mt-2 text-[14px] leading-[1.8] text-slate-600">
                        {item.body}
                      </p>

                    </div>

                  )
                )}

              </div>

            </div>

            {/* =================================================
                BENEFITS
            ================================================= */}

            <div
              id="benefits"
              className="mt-16 scroll-mt-28"
            >

              <p
                className="text-[12px] font-semibold tracking-[0.18em]"
                style={{
                  color:
                    LAVENDER_ACCENT,
                }}
              >
                04 / BENEFITS
              </p>

              <h2
                className="mt-3 text-[32px] font-medium leading-tight lg:text-[42px]"
                style={{
                  color:
                    CHAMPION_BLUE,
                }}
              >
                Designed to reduce repetitive work and improve data flow
              </h2>

              <div className="mt-8 space-y-4">

                {[
                  "Reduce manual document processing.",
                  "Extract structured information from complex documents.",
                  "Improve consistency across document workflows.",
                  "Support validation and human review.",
                  "Connect extracted data to enterprise systems.",
                  "Scale document processing across business operations.",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-start gap-4 border-b border-slate-200 pb-4"
                  >

                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0"
                      style={{
                        color:
                          INDIGO_CTA,
                      }}
                    />

                    <p className="text-[15px] leading-relaxed text-slate-600">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* =================================================
                TECHNOLOGY
            ================================================= */}

            <div
              id="technology"
              className="mt-16 scroll-mt-28"
            >

              <p
                className="text-[12px] font-semibold tracking-[0.18em]"
                style={{
                  color:
                    LAVENDER_ACCENT,
                }}
              >
                05 / TECHNOLOGY
              </p>

              <h2
                className="mt-3 text-[32px] font-medium leading-tight lg:text-[42px]"
                style={{
                  color:
                    CHAMPION_BLUE,
                }}
              >
                AI technologies that connect extraction with enterprise workflows
              </h2>

              <p className="mt-6 text-[16px] leading-[1.9] text-slate-600">
                Modern AI data extraction workflows can combine
                document intelligence, OCR, machine learning,
                natural language processing, structured output,
                validation, APIs, databases, and enterprise
                integrations.
              </p>

              <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">

                {[
                  {
                    icon: Sparkles,
                    title:
                      "Artificial Intelligence",
                  },
                  {
                    icon: FileSearch,
                    title:
                      "Intelligent Document Processing",
                  },
                  {
                    icon: Search,
                    title:
                      "OCR & Semantic Understanding",
                  },
                  {
                    icon: Database,
                    title:
                      "Structured Data Processing",
                  },
                  {
                    icon: ShieldCheck,
                    title:
                      "Validation & Governance",
                  },
                  {
                    icon: Workflow,
                    title:
                      "API & Workflow Integration",
                  },
                ].map(
                  ({
                    icon: Icon,
                    title,
                  }) => (

                    <div
                      key={title}
                      className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5"
                    >

                      <span
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                        style={{
                          backgroundColor:
                            "#F1EEFC",
                        }}
                      >

                        <Icon
                          size={20}
                          style={{
                            color:
                              INDIGO_CTA,
                          }}
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

            </div>

          </article>

          {/* ==================================================
              SIDEBAR
          ================================================== */}

          <aside>

            <div
              className="rounded-2xl p-7 lg:sticky lg:top-8"
              style={{
                backgroundColor:
                  "#F5F3FC",
              }}
            >

              <p
                className="text-[12px] font-semibold tracking-[0.18em]"
                style={{
                  color:
                    LAVENDER_ACCENT,
                }}
              >
                AI DATA EXTRACTION
              </p>

              <h3
                className="mt-3 text-[25px] font-semibold"
                style={{
                  color:
                    CHAMPION_BLUE,
                }}
              >
                Data Extraction Capabilities
              </h3>

              <div className="mt-7 space-y-3">

                {[
                  "Intelligent Document Processing",
                  "AI-Powered OCR",
                  "Document Classification",
                  "Structured Data Extraction",
                  "Entity & Field Extraction",
                  "Natural Language Processing",
                  "Table & Form Extraction",
                  "Data Validation",
                  "Data Enrichment",
                  "Email & Attachment Extraction",
                  "Human Review Workflows",
                  "Enterprise Workflow Automation",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-start gap-3 border-b border-slate-200 pb-3"
                  >

                    <span
                      className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full"
                      style={{
                        backgroundColor:
                          INDIGO_CTA,
                      }}
                    />

                    <span className="text-[14px] leading-relaxed text-slate-600">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

              <Link
                href={`${BASE_PATH}#connect`}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[14px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  backgroundColor:
                    CHAMPION_BLUE,
                }}
              >
                Build an AI Data Solution
                <ArrowUpRight
                  size={16}
                />
              </Link>

            </div>

          </aside>

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
                className="mt-3 max-w-3xl text-[32px] font-medium leading-tight lg:text-[44px]"
                style={{
                  color:
                    CHAMPION_BLUE,
                }}
              >
                More AI Data Extraction Case Studies
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
          CTA
      ====================================================== */}

      <section className="bg-white py-20">

        <div className={ALIGN}>

          <div
            id="connect"
            className="overflow-hidden rounded-3xl px-7 py-14 sm:px-10 lg:px-16 lg:py-16"
            style={{
              backgroundColor:
                CHAMPION_BLUE,
            }}
          >

            <p
              className="text-[12px] font-semibold tracking-[0.18em]"
              style={{
                color:
                  LAVENDER_ACCENT,
              }}
            >
              AI DATA TRANSFORMATION
            </p>

            <h2 className="mt-4 max-w-4xl text-[34px] font-medium leading-tight text-white sm:text-[42px]">
              Ready to turn unstructured information into intelligent business data?
            </h2>

            <p className="mt-5 max-w-2xl text-[16px] leading-[1.8] text-white/75">
              Build AI-powered extraction workflows that
              understand documents, capture important information,
              validate results, and connect structured data with
              your business systems.
            </p>

            <Link
              href={BASE_PATH}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[14px] font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                color:
                  CHAMPION_BLUE,
              }}
            >
              Explore AI Data Extraction
              <ArrowUpRight
                size={16}
              />
            </Link>

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
            className="inline-flex items-center gap-2 text-[14px] font-semibold transition-transform hover:-translate-x-1"
            style={{
              color:
                INDIGO_CTA,
            }}
          >
            <ArrowLeft size={16} />
            Back to AI Data Extraction
          </Link>

        </div>

      </section>

    </main>
  );
}
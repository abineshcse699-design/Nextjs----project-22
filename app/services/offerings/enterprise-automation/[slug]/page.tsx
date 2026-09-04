import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

import {
  caseStudies,
  getCaseStudyBySlug,
} from "../data/case-studies";

/* ============================================================
   BRAND
============================================================ */

const CHAMPION_BLUE = "#1B2560";
const LAVENDER_ACCENT = "#A48FEA";
const INDIGO_CTA = "#4F3FE0";

const ALIGN =
  "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

/*
 * IMPORTANT:
 * Your actual folder is:
 *
 * enterprise-automation/
 * ├── [slug]/
 * │   └── page.tsx
 * └── data/
 *     └── case-studies.ts
 *
 * Therefore the public route is:
 *
 * /enterprise-automation/[slug]
 */
const BASE_PATH = "/services/offerings/enterprise-automation";

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
      description: "The requested case study could not be found.",
    };
  }

  return {
    title: `${study.title} | Starfii Case Study`,
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

  /*
   * If somebody manually enters an invalid slug,
   * Next.js will show the 404 page.
   */
  if (!study) {
    notFound();
  }

  const relatedStudies = caseStudies
    .filter((item) => item.slug !== study.slug)
    .slice(0, 3);

  return (
    <main className="bg-white">

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative isolate overflow-hidden">

        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <img
            src={study.image}
            alt=""
            className="h-full w-full object-cover"
          />

          {/* White gradient for readable text */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/20" />
        </div>

        <div className={`${ALIGN} py-24 lg:py-32`}>

          {/* ==================================================
              BREADCRUMB
          ================================================== */}

          <nav
            aria-label="Breadcrumb"
            className="font-body flex flex-wrap items-center gap-2 text-[14px] font-medium"
            style={{
              color: CHAMPION_BLUE,
            }}
          >
            <Link
              href="/"
              className="transition-opacity hover:opacity-70 hover:underline"
            >
              Home
            </Link>

            <ChevronRight size={14} />

            <Link
              href="/services"
              className="transition-opacity hover:opacity-70 hover:underline"
            >
              Services
            </Link>

            <ChevronRight size={14} />

            <Link
              href={BASE_PATH}
              className="transition-opacity hover:opacity-70 hover:underline"
            >
              Enterprise Automation
            </Link>

            <ChevronRight size={14} />

            <span className="text-slate-500">
              Case Study
            </span>
          </nav>

          {/* ==================================================
              HERO CONTENT
          ================================================== */}

          <div className="mt-10 max-w-4xl">

            {/* Label */}
            <span
              className="font-body inline-flex rounded-full px-4 py-2 text-[12px] font-semibold tracking-wide"
              style={{
                backgroundColor: "#F1EEFC",
                color: INDIGO_CTA,
              }}
            >
              CASE STUDY
            </span>

            {/* Title */}
            <h1
              className="font-heading mt-6 max-w-4xl text-[42px] font-medium leading-[1.12] sm:text-[48px] lg:text-[60px]"
              style={{
                color: CHAMPION_BLUE,
              }}
            >
              {study.title}
            </h1>

            {/* Description */}
            <p className="font-body mt-7 max-w-3xl text-[17px] leading-relaxed text-slate-600">
              {study.body}
            </p>

          </div>
        </div>
      </section>

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
          MAIN CONTENT
      ====================================================== */}

      <section className="pb-24">
        <div
          className={`${ALIGN} grid grid-cols-1 gap-14 lg:grid-cols-[1fr_360px]`}
        >

          {/* ==================================================
              ARTICLE
          ================================================== */}

          <article className="max-w-4xl">

            {/* Eyebrow */}
            <p
              className="font-body text-[12px] font-semibold tracking-[0.18em]"
              style={{
                color: LAVENDER_ACCENT,
              }}
            >
              CASE STUDY OVERVIEW
            </p>

            {/* Heading */}
            <h2
              className="font-heading mt-3 text-[32px] font-medium lg:text-[42px]"
              style={{
                color: CHAMPION_BLUE,
              }}
            >
              The Story
            </h2>

            {/* Intro */}
            <p className="font-body mt-6 text-[16px] leading-[1.9] text-slate-600">
              {study.body}
            </p>

            {/* ==================================================
                CONTENT BLOCKS
            ================================================== */}

            <div className="mt-10 space-y-10">

              {/* Block 1 */}
              <div>
                <h3
                  className="font-heading text-[24px] font-semibold"
                  style={{
                    color: CHAMPION_BLUE,
                  }}
                >
                  AI-Assisted Medical Coding
                </h3>

                <p className="font-body mt-3 text-[15px] leading-[1.9] text-slate-600">
                  AI-assisted clinical documentation analysis can help
                  coding teams identify relevant diagnoses, procedures,
                  conditions, and other coding-related information more
                  efficiently.
                </p>
              </div>

              {/* Block 2 */}
              <div>
                <h3
                  className="font-heading text-[24px] font-semibold"
                  style={{
                    color: CHAMPION_BLUE,
                  }}
                >
                  Human-in-the-Loop Review
                </h3>

                <p className="font-body mt-3 text-[15px] leading-[1.9] text-slate-600">
                  Professional review remains an important part of the
                  workflow, allowing qualified coding professionals to
                  validate recommendations, review exceptions, and make
                  final coding decisions.
                </p>
              </div>

              {/* Block 3 */}
              <div>
                <h3
                  className="font-heading text-[24px] font-semibold"
                  style={{
                    color: CHAMPION_BLUE,
                  }}
                >
                  Operational Intelligence
                </h3>

                <p className="font-body mt-3 text-[15px] leading-[1.9] text-slate-600">
                  Structured coding intelligence can support workflow
                  consistency, reduce repetitive effort, and connect
                  validated outputs with downstream revenue cycle
                  operations.
                </p>
              </div>

              {/* Block 4 */}
              <div>
                <h3
                  className="font-heading text-[24px] font-semibold"
                  style={{
                    color: CHAMPION_BLUE,
                  }}
                >
                  Coding Quality &amp; Compliance
                </h3>

                <p className="font-body mt-3 text-[15px] leading-[1.9] text-slate-600">
                  Traceable recommendations, validation checkpoints, and
                  structured review workflows can help organizations
                  strengthen coding quality, governance, and audit
                  readiness.
                </p>
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
                backgroundColor: "#F5F3FC",
              }}
            >

              {/* Label */}
              <p
                className="font-body text-[12px] font-semibold tracking-[0.18em]"
                style={{
                  color: LAVENDER_ACCENT,
                }}
              >
                ENTERPRISE AUTOMATION
              </p>

              {/* Heading */}
              <h3
                className="font-heading mt-3 text-[25px] font-semibold"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                Coding Capabilities
              </h3>

              {/* Capability list */}
              <div className="mt-7 space-y-3">

                {[
                  "AI-Assisted Code Assignment",
                  "Clinical Documentation Intelligence",
                  "Coding Accuracy & Consistency",
                  "Human-in-the-Loop Review",
                  "Compliance & Audit Support",
                  "Denials & Revenue Cycle Support",
                  "Specialty Coding Intelligence",
                  "Healthcare System Integration",
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

          {/* Heading */}
          <div className="flex items-center justify-between gap-6">

            <h2
              className="font-heading text-[36px] font-medium lg:text-[44px]"
              style={{
                color: CHAMPION_BLUE,
              }}
            >
              Related Case Studies
            </h2>

            <Link
              href={BASE_PATH}
              className="font-body hidden items-center gap-1.5 text-[15px] font-semibold transition-transform duration-200 hover:translate-x-1 sm:flex"
              style={{
                color: INDIGO_CTA,
              }}
            >
              View All
              <ArrowUpRight size={16} />
            </Link>

          </div>

          {/* Cards */}
          <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">

            {relatedStudies.map((item) => (
              <Link
                key={item.slug}
                href={`${BASE_PATH}/${item.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl"
              >

                {/* Image */}
                <div className="h-[220px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">

                  <span
                    className="font-body text-[12px] font-semibold tracking-wide"
                    style={{
                      color: INDIGO_CTA,
                    }}
                  >
                    CASE STUDY
                  </span>

                  <h3
                    className="font-heading mt-2 text-[19px] font-semibold leading-snug"
                    style={{
                      color: CHAMPION_BLUE,
                    }}
                  >
                    {item.title}
                  </h3>

                  <p className="font-body mt-3 line-clamp-3 text-[14px] leading-relaxed text-slate-600">
                    {item.body}
                  </p>

                  <span
                    className="font-body mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold transition-transform duration-200 group-hover:translate-x-0.5"
                    style={{
                      color: INDIGO_CTA,
                    }}
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

      {/* ======================================================
          BACK BUTTON
      ====================================================== */}

      <section className="bg-white py-12">
        <div className={ALIGN}>

          <Link
            href={BASE_PATH}
            className="font-body inline-flex items-center gap-2 text-[14px] font-semibold transition-transform duration-200 hover:-translate-x-1"
            style={{
              color: INDIGO_CTA,
            }}
          >
            <ArrowLeft size={16} />
            Back to Enterprise Automation
          </Link>

        </div>
      </section>

    </main>
  );
}
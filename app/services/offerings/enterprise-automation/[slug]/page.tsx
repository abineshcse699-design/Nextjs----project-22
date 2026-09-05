// app/services/offerings/ai-powered-medical-coding/[slug]/page.tsx

import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

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

/* ============================================================
   BRAND
============================================================ */

const CHAMPION_BLUE = "#1B2560";
const LAVENDER_ACCENT = "#A48FEA";
const INDIGO_CTA = "#4F3FE0";

const ALIGN =
  "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

const BASE_PATH =
  "/services/offerings/ai-powered-medical-coding";

/* ============================================================
   IT / TECHNOLOGY IMAGES
============================================================ */

/*
  These images replace the old doctor / healthcare images.

  0 - Software / Coding
  1 - AI / Technology
  2 - Cloud / Infrastructure
  3 - IT Team / Office
*/

const IT_IMAGES = [
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=85",

  "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1800&q=85",

  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=85",

  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85",
];

/*
  Use the IT images according to the case-study index.
  This means the existing case-studies data can stay unchanged.
*/

function getITImage(index: number) {
  return IT_IMAGES[index % IT_IMAGES.length];
}

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
        "The requested technology case study could not be found.",
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

  /* ==========================================================
     CURRENT STUDY INDEX
  ========================================================== */

  const studyIndex = Math.max(
    0,
    caseStudies.findIndex(
      (item) => item.slug === study.slug
    )
  );

  /*
    IT image for current case study
  */
  const currentITImage = getITImage(studyIndex);

  /* ==========================================================
     RELATED STUDIES
  ========================================================== */

  const relatedStudies = caseStudies
    .filter((item) => item.slug !== study.slug)
    .slice(0, 3);

  return (
    <main className="bg-white">

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative isolate overflow-hidden">

        {/* ====================================================
            BACKGROUND IMAGE
        ==================================================== */}

        <div className="absolute inset-0 -z-10">

          <img
            src={currentITImage}
            alt=""
            className="h-full w-full object-cover"
          />

          {/* Light overlay for text readability */}

          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/25" />

        </div>

        {/* ====================================================
            HERO CONTENT
        ==================================================== */}

        <div className={`${ALIGN} py-24 lg:py-32`}>

          {/* ==================================================
              BREADCRUMB
          ================================================== */}

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
              Technology
            </Link>

            <ChevronRight size={14} />

            <span className="text-slate-500">
              Case Study
            </span>

          </nav>

          {/* ==================================================
              HERO TEXT
          ================================================== */}

          <div className="mt-10 max-w-4xl">

            {/* CATEGORY */}

            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-semibold tracking-wide"
              style={{
                backgroundColor: "#F1EEFC",
                color: INDIGO_CTA,
              }}
            >
              <Sparkles size={14} />

              TECHNOLOGY &amp; AI
            </span>

            {/* TITLE */}

            <h1
              className="mt-6 max-w-4xl text-[42px] font-medium leading-[1.12] sm:text-[48px] lg:text-[60px]"
              style={{
                color: CHAMPION_BLUE,
              }}
            >
              {study.title}
            </h1>

            {/* DESCRIPTION */}

            <p className="mt-7 max-w-3xl text-[17px] leading-[1.8] text-slate-600">
              {study.body}
            </p>

            {/* BUTTONS */}

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href={`${BASE_PATH}#connect`}
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[14px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  backgroundColor: CHAMPION_BLUE,
                }}
              >
                Explore Technology Solutions

                <ArrowUpRight size={16} />
              </Link>

              <Link
                href="#story"
                className="inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-[14px] font-semibold transition-all hover:-translate-y-0.5"
                style={{
                  borderColor: LAVENDER_ACCENT,
                  color: CHAMPION_BLUE,
                }}
              >
                Explore the Case Study
              </Link>

            </div>

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
              src={currentITImage}
              alt={study.title}
              className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:h-[420px] lg:h-[560px]"
            />

          </div>

        </div>

      </section>

      {/* ======================================================
          MAIN CONTENT
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
                OVERVIEW
            ================================================= */}

            <div>

              <p
                className="text-[12px] font-semibold tracking-[0.18em]"
                style={{
                  color: LAVENDER_ACCENT,
                }}
              >
                TECHNOLOGY &amp; AI
              </p>

              <h2
                className="mt-3 text-[32px] font-medium leading-tight lg:text-[42px]"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                Transforming Technology Operations With Intelligent Solutions
              </h2>

              <p className="mt-6 text-[16px] leading-[1.9] text-slate-600">
                {study.body}
              </p>

              <p className="mt-5 text-[16px] leading-[1.9] text-slate-600">
                Starfii helps organizations modernize their
                technology workflows by combining artificial
                intelligence, software engineering, automation,
                cloud technologies, data intelligence, and
                professional expertise.
              </p>

            </div>

            {/* =================================================
                01 — SOFTWARE INTELLIGENCE
            ================================================= */}

            <div className="mt-16">

              <p
                className="text-[12px] font-semibold tracking-[0.18em]"
                style={{
                  color: LAVENDER_ACCENT,
                }}
              >
                01 / SOFTWARE INTELLIGENCE
              </p>

              <h2
                className="mt-3 text-[32px] font-medium leading-tight lg:text-[42px]"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                Build smarter software workflows
              </h2>

              <p className="mt-6 text-[16px] leading-[1.9] text-slate-600">
                AI-assisted software workflows can help
                engineering teams analyze requirements,
                documentation, application logic, codebases,
                and technical processes across complex
                technology environments.
              </p>

              <p className="mt-5 text-[16px] leading-[1.9] text-slate-600">
                Instead of relying only on repetitive manual
                analysis, teams can use structured intelligence
                to identify relevant information and accelerate
                software development workflows.
              </p>

            </div>

            {/* =================================================
                02 — AI AUTOMATION
            ================================================= */}

            <div className="mt-16">

              <p
                className="text-[12px] font-semibold tracking-[0.18em]"
                style={{
                  color: LAVENDER_ACCENT,
                }}
              >
                02 / AI-ASSISTED AUTOMATION
              </p>

              <h2
                className="mt-3 text-[32px] font-medium leading-tight lg:text-[42px]"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                Automate repetitive technology processes
              </h2>

              <p className="mt-6 text-[16px] leading-[1.9] text-slate-600">
                AI-powered automation can help organizations
                reduce repetitive operational work and improve
                the speed of common technology processes.
              </p>

              <p className="mt-5 text-[16px] leading-[1.9] text-slate-600">
                Intelligent automation can support application
                workflows, data processing, documentation,
                monitoring, testing, and other recurring
                technology operations.
              </p>

            </div>

            {/* =================================================
                03 — HUMAN REVIEW
            ================================================= */}

            <div className="mt-16">

              <p
                className="text-[12px] font-semibold tracking-[0.18em]"
                style={{
                  color: LAVENDER_ACCENT,
                }}
              >
                03 / HUMAN-IN-THE-LOOP TECHNOLOGY
              </p>

              <h2
                className="mt-3 text-[32px] font-medium leading-tight lg:text-[42px]"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                Keep engineering expertise at the center
              </h2>

              <p className="mt-6 text-[16px] leading-[1.9] text-slate-600">
                Technology systems require engineering judgment,
                validation, security awareness, and accountability.
                Starfii's approach keeps experienced professionals
                involved in important technical decisions.
              </p>

              <p className="mt-5 text-[16px] leading-[1.9] text-slate-600">
                AI recommendations, validation checkpoints,
                exception handling, monitoring, and human review
                can work together to create controlled and
                explainable technology workflows.
              </p>

            </div>

            {/* =================================================
                04 — QUALITY & SECURITY
            ================================================= */}

            <div className="mt-16">

              <p
                className="text-[12px] font-semibold tracking-[0.18em]"
                style={{
                  color: LAVENDER_ACCENT,
                }}
              >
                04 / TECHNOLOGY QUALITY &amp; SECURITY
              </p>

              <h2
                className="mt-3 text-[32px] font-medium leading-tight lg:text-[42px]"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                Build reliable, secure, and governed technology workflows
              </h2>

              <p className="mt-6 text-[16px] leading-[1.9] text-slate-600">
                Structured validation, monitoring, access
                controls, documentation, testing, and review
                workflows can support software quality,
                technology governance, security, and operational
                reliability.
              </p>

            </div>

            {/* =================================================
                05 — CLOUD & INFRASTRUCTURE
            ================================================= */}

            <div className="mt-16">

              <p
                className="text-[12px] font-semibold tracking-[0.18em]"
                style={{
                  color: LAVENDER_ACCENT,
                }}
              >
                05 / CLOUD &amp; DIGITAL OPERATIONS
              </p>

              <h2
                className="mt-3 text-[32px] font-medium leading-tight lg:text-[42px]"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                Connect intelligent software with modern infrastructure
              </h2>

              <p className="mt-6 text-[16px] leading-[1.9] text-slate-600">
                Modern software solutions can connect with cloud
                infrastructure, APIs, databases, enterprise
                applications, analytics platforms, and other
                digital systems.
              </p>

              <p className="mt-5 text-[16px] leading-[1.9] text-slate-600">
                Integrated technology workflows help organizations
                improve operational continuity, reduce manual
                handoffs, and create better visibility across
                their digital environment.
              </p>

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

              <p
                className="text-[12px] font-semibold tracking-[0.18em]"
                style={{
                  color: LAVENDER_ACCENT,
                }}
              >
                TECHNOLOGY &amp; AI
              </p>

              <h3
                className="mt-3 text-[25px] font-semibold"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                Technology Capabilities
              </h3>

              <div className="mt-7 space-y-3">

                {[
                  "AI & Machine Learning",
                  "Software Development",
                  "AI-Assisted Coding",
                  "Cloud Solutions",
                  "API Integration",
                  "Data Engineering",
                  "Automation Workflows",
                  "Application Modernization",
                  "Cybersecurity Support",
                  "Technology Consulting",
                  "Analytics & Monitoring",
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
                  backgroundColor: CHAMPION_BLUE,
                }}
              >
                Explore Technology AI

                <ArrowUpRight size={16} />
              </Link>

            </div>

          </aside>

        </div>

      </section>

      {/* ======================================================
          BUSINESS VALUE
      ====================================================== */}

      <section
        className="border-t py-20 lg:py-24"
        style={{
          borderColor: "#E5E1F5",
        }}
      >

        <div className={ALIGN}>

          <div className="max-w-3xl">

            <p
              className="text-[12px] font-semibold tracking-[0.15em]"
              style={{
                color: INDIGO_CTA,
              }}
            >
              BUSINESS VALUE
            </p>

            <h2
              className="mt-4 text-[32px] font-medium leading-tight sm:text-[42px]"
              style={{
                color: CHAMPION_BLUE,
              }}
            >
              Intelligent technology workflows built for measurable impact
            </h2>

            <p className="mt-5 text-[16px] leading-[1.9] text-slate-600">
              AI-powered technology solutions can help
              organizations reduce repetitive work, improve
              development efficiency, accelerate operations,
              and strengthen visibility across digital workflows.
            </p>

          </div>

          {/* ==================================================
              VALUE CARDS
          ================================================== */}

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">

            {[
              {
                number: "01",
                title: "Faster Technology Workflows",
                text:
                  "Reduce repetitive development and operational work so technical teams can focus on higher-value engineering and business priorities.",
              },

              {
                number: "02",
                title: "Improved Software Efficiency",
                text:
                  "Structured AI recommendations and automation workflows help teams improve consistency, productivity, and development speed.",
              },

              {
                number: "03",
                title: "Stronger Digital Operations",
                text:
                  "Connect applications, cloud platforms, APIs, data, and automation workflows to create more connected digital operations.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-2xl p-8"
                style={{
                  backgroundColor: "#F5F3FC",
                }}
              >

                <span
                  className="text-[13px] font-semibold"
                  style={{
                    color: INDIGO_CTA,
                  }}
                >
                  {item.number}
                </span>

                <h3
                  className="mt-6 text-[21px] font-semibold"
                  style={{
                    color: CHAMPION_BLUE,
                  }}
                >
                  {item.title}
                </h3>

                <p className="mt-3 text-[14px] leading-[1.8] text-slate-600">
                  {item.text}
                </p>

              </div>
            ))}

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
              "linear-gradient(180deg, #FFFFFF 0%, #E9E4FB 45%, #C9BEF5 100%)",
          }}
        >

          <div className={ALIGN}>

            {/* ==================================================
                SECTION HEADER
            ================================================== */}

            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

              <div>

                <p
                  className="text-[12px] font-semibold tracking-[0.15em]"
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
                  More Technology &amp; AI Case Studies
                </h2>

              </div>

              <Link
                href={BASE_PATH}
                className="hidden items-center gap-1.5 text-[15px] font-semibold sm:flex"
                style={{
                  color: INDIGO_CTA,
                }}
              >
                View All

                <ArrowUpRight size={16} />
              </Link>

            </div>

            {/* ==================================================
                RELATED CARDS
            ================================================== */}

            <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">

              {relatedStudies.map((item, index) => {

                /*
                  Start from next image so related cards
                  also get different IT images.
                */

                const relatedImage =
                  getITImage(
                    (studyIndex + index + 1) %
                      IT_IMAGES.length
                  );

                return (
                  <Link
                    key={item.slug}
                    href={`${BASE_PATH}/${item.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl"
                  >

                    {/* IMAGE */}

                    <div className="h-[220px] overflow-hidden">

                      <img
                        src={relatedImage}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                    </div>

                    {/* CONTENT */}

                    <div className="flex flex-1 flex-col p-6">

                      <span
                        className="text-[12px] font-semibold tracking-wide"
                        style={{
                          color: INDIGO_CTA,
                        }}
                      >
                        TECHNOLOGY &amp; AI
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
                        Read Case Study

                        <ArrowUpRight size={15} />
                      </span>

                    </div>

                  </Link>
                );
              })}

            </div>

          </div>

        </section>
      )}

      {/* ======================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-white py-20">

        <div className={ALIGN}>

          <div
            id="connect"
            className="overflow-hidden rounded-3xl px-7 py-14 sm:px-10 lg:px-16 lg:py-16"
            style={{
              backgroundColor: CHAMPION_BLUE,
            }}
          >

            <div className="max-w-4xl">

              <p
                className="text-[12px] font-semibold tracking-[0.15em]"
                style={{
                  color: LAVENDER_ACCENT,
                }}
              >
                TECHNOLOGY &amp; AI
              </p>

              <h2 className="mt-4 text-[32px] font-medium leading-tight text-white sm:text-[42px]">
                Ready to modernize your technology workflows with AI?
              </h2>

              <p className="mt-5 max-w-2xl text-[16px] leading-[1.8] text-white/75">
                Transform complex technology processes with
                AI-assisted software development, intelligent
                automation, cloud solutions, data intelligence,
                and professional engineering expertise.
              </p>

              <Link
                href={BASE_PATH}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[14px] font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                Explore Technology Solutions

                <ArrowUpRight size={16} />
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
            className="inline-flex items-center gap-2 text-[14px] font-semibold transition-transform duration-200 hover:-translate-x-1"
            style={{
              color: INDIGO_CTA,
            }}
          >
            <ArrowLeft size={16} />

            Back to Technology &amp; AI
          </Link>

        </div>

      </section>

    </main>
  );
}
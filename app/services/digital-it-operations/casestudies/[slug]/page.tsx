import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { ArrowUpRight, ChevronRight, ArrowLeft } from "lucide-react";

import {
  caseStudies,
  getCaseStudyBySlug,
} from "../data.tsx/casestudies";

const CHAMPION_BLUE = "#1B2560";
const LAVENDER_ACCENT = "#A48FEA";
const ACCENT_INDIGO = "#4F3FE0";

const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

const BASE_PATH = "/services/digital-it-operations/casestudies";

/* ============================================================
   GENERATE STATIC CASE STUDY ROUTES
============================================================ */

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

/* ============================================================
   PAGE PROPS
============================================================ */

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/* ============================================================
   SEO METADATA
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
    title: `${study.title} | Starfii Digital IT Operations Case Study`,
    description: study.body,
  };
}

/* ============================================================
   CASE STUDY DETAIL PAGE
============================================================ */

export default async function DigitalITOperationsCaseStudyPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const study = getCaseStudyBySlug(slug);

  /* ----------------------------------------------------------
     Invalid slug -> Next.js 404
  ---------------------------------------------------------- */

  if (!study) {
    notFound();
  }

  /* ----------------------------------------------------------
     Related case studies
  ---------------------------------------------------------- */

  const related = caseStudies
    .filter((item) => item.slug !== study.slug)
    .slice(0, 3);

  return (
    <main className="bg-white">
      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={study.heroImage ?? study.image}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/20" />
        </div>

        <div className={`${ALIGN} py-20 lg:py-28`}>
          {/* BREADCRUMB */}

          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-[14px] font-medium"
            style={{ color: CHAMPION_BLUE }}
          >
            <Link href="/" className="transition-opacity hover:opacity-70">
              Home
            </Link>

            <ChevronRight size={14} />

            <Link
              href="/services"
              className="transition-opacity hover:opacity-70"
            >
              Services
            </Link>

            <ChevronRight size={14} />

            <Link
              href="/services/digital-it-operations"
              className="transition-opacity hover:opacity-70"
            >
              Digital IT Operations
            </Link>

            <ChevronRight size={14} />

            <Link
              href={BASE_PATH}
              className="transition-opacity hover:opacity-70"
            >
              Case Studies
            </Link>

            <ChevronRight size={14} />

            <span className="text-slate-500">{study.industry}</span>
          </nav>

          {/* INDUSTRY BADGE */}

          <span
            className="mt-8 inline-block rounded-full px-4 py-1.5 text-[13px] font-semibold text-white"
            style={{ backgroundColor: ACCENT_INDIGO }}
          >
            {study.industry}
          </span>

          {/* TITLE */}

          <h1
            className="mt-6 max-w-4xl text-[36px] font-medium leading-[1.15] lg:text-[52px]"
            style={{ color: CHAMPION_BLUE }}
          >
            {study.title}
          </h1>

          {/* DESCRIPTION */}

          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-slate-600">
            {study.body}
          </p>
        </div>
      </section>

      {/* ======================================================
          MAIN CONTENT
      ====================================================== */}

      <div className={ALIGN}>
        {/* META STRIP */}

        <section
          className="grid grid-cols-2 gap-6 border-y py-8 sm:grid-cols-4"
          style={{ borderColor: "#E5E1F5" }}
        >
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-wide text-slate-400">
              Client
            </p>
            <p
              className="mt-2 text-[15px] font-medium"
              style={{ color: CHAMPION_BLUE }}
            >
              {study.client}
            </p>
          </div>

          <div>
            <p className="text-[12px] font-semibold uppercase tracking-wide text-slate-400">
              Industry
            </p>
            <p
              className="mt-2 text-[15px] font-medium"
              style={{ color: CHAMPION_BLUE }}
            >
              {study.industry}
            </p>
          </div>

          <div>
            <p className="text-[12px] font-semibold uppercase tracking-wide text-slate-400">
              Duration
            </p>
            <p
              className="mt-2 text-[15px] font-medium"
              style={{ color: CHAMPION_BLUE }}
            >
              {study.duration}
            </p>
          </div>

          <div>
            <p className="text-[12px] font-semibold uppercase tracking-wide text-slate-400">
              Services
            </p>
            <p
              className="mt-2 text-[15px] font-medium"
              style={{ color: CHAMPION_BLUE }}
            >
              {study.services.join(", ")}
            </p>
          </div>
        </section>

        {/* STATS */}

        <section className="grid grid-cols-1 gap-6 py-16 sm:grid-cols-3">
          {study.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl p-8 text-center"
              style={{ backgroundColor: "#F5F3FC" }}
            >
              <p
                className="text-[36px] font-semibold"
                style={{ color: ACCENT_INDIGO }}
              >
                {stat.value}
              </p>
              <p className="mt-2 text-[14px] text-slate-600">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* CONTENT + SIDEBAR */}

        <section className="grid grid-cols-1 gap-14 pb-24 lg:grid-cols-[1fr_320px]">
          {/* LEFT CONTENT */}

          <div className="space-y-12">
            <div>
              <h2
                className="text-[26px] font-medium"
                style={{ color: CHAMPION_BLUE }}
              >
                Overview
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-slate-600">
                {study.overview}
              </p>
            </div>

            <div>
              <h2
                className="text-[26px] font-medium"
                style={{ color: CHAMPION_BLUE }}
              >
                The Challenge
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-slate-600">
                {study.challenge}
              </p>
            </div>

            <div>
              <h2
                className="text-[26px] font-medium"
                style={{ color: CHAMPION_BLUE }}
              >
                The Starfii Solution
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-slate-600">
                {study.solution}
              </p>
            </div>

            <div>
              <h2
                className="text-[26px] font-medium"
                style={{ color: CHAMPION_BLUE }}
              >
                The Results
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-slate-600">
                {study.results}
              </p>
            </div>
          </div>

          {/* SIDEBAR */}

          <aside
            className="h-fit rounded-2xl border p-8"
            style={{ borderColor: LAVENDER_ACCENT }}
          >
            <h3
              className="text-[18px] font-semibold"
              style={{ color: CHAMPION_BLUE }}
            >
              Services Delivered
            </h3>

            <ul className="mt-4 space-y-3">
              {study.services.map((service) => (
                <li key={service} className="text-[14px] text-slate-600">
                  • {service}
                </li>
              ))}
            </ul>

            <Link
              href="/services/digital-it-operations#serviceconact"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] font-semibold text-white transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: CHAMPION_BLUE }}
            >
              Start a similar project
              <ArrowUpRight size={16} />
            </Link>
          </aside>
        </section>

        {/* RELATED CASE STUDIES */}

        {related.length > 0 && (
          <section
            className="border-t pb-24 pt-16"
            style={{ borderColor: "#E5E1F5" }}
          >
            <h2
              className="text-[26px] font-medium"
              style={{ color: CHAMPION_BLUE }}
            >
              More Digital IT Operations Case Studies
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {related.map((relatedItem) => (
                <Link
                  key={relatedItem.slug}
                  href={`${BASE_PATH}/${relatedItem.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{ border: "1px solid #E5E1F5" }}
                >
                  <div className="h-[170px] overflow-hidden">
                    <img
                      src={relatedItem.image}
                      alt={relatedItem.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-5">
                    <span
                      className="text-[11px] font-semibold tracking-wide"
                      style={{ color: ACCENT_INDIGO }}
                    >
                      {relatedItem.industry}
                    </span>

                    <h3
                      className="mt-2 line-clamp-2 text-[16px] font-semibold leading-snug"
                      style={{ color: CHAMPION_BLUE }}
                    >
                      {relatedItem.title}
                    </h3>

                    <span
                      className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold"
                      style={{ color: ACCENT_INDIGO }}
                    >
                      Read Case Study
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* BACK TO DIGITAL IT OPERATIONS */}

        <div className="pb-16">
          <Link
            href="/services/digital-it-operations"
            className="inline-flex items-center gap-2 text-[14px] font-semibold transition-transform hover:-translate-x-1"
            style={{ color: ACCENT_INDIGO }}
          >
            <ArrowLeft size={16} />
            Back to Digital IT Operations
          </Link>
        </div>
      </div>
    </main>
  );
}
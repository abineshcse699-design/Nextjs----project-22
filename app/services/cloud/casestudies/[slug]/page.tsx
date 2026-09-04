import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";

import {
  caseStudies,
  getCaseStudyBySlug,
} from "../data.tsx/casestudies";

const CHAMPION_BLUE = "#1B2560";
const LAVENDER_ACCENT = "#A48FEA";
const INDIGO_CTA = "#4F3FE0";

const ALIGN =
  "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

const BASE_PATH =
  "/services/cloud/casestudies";

/* ============================================================
   STATIC PARAMS
============================================================ */

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
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
   METADATA
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
    title: `${study.title} | Starfii Cloud Case Study`,
    description: study.body,
  };
}

/* ============================================================
   PAGE
============================================================ */

export default async function CloudCaseStudyPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const related = caseStudies
    .filter((item) => item.slug !== study.slug)
    .slice(0, 3);

  return (
    <main className="bg-white">

      {/* ========================================================
          HERO
      ======================================================== */}

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={study.heroImage ?? study.image}
            alt=""
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/10" />
        </div>

        <div className={`${ALIGN} py-20 lg:py-28`}>

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
              href="/services/cloud"
              className="hover:underline"
            >
              Cloud Engineering
            </Link>

            <ChevronRight size={14} />

            <Link
              href={BASE_PATH}
              className="hover:underline"
            >
              Case Studies
            </Link>

            <ChevronRight size={14} />

            <span className="text-slate-500">
              {study.industry}
            </span>
          </nav>

          {/* CATEGORY */}

          <span
            className="mt-8 inline-block rounded-full px-4 py-1.5 text-[13px] font-semibold text-white"
            style={{
              backgroundColor: INDIGO_CTA,
            }}
          >
            {study.industry}
          </span>

          {/* TITLE */}

          <h1
            className="mt-6 max-w-4xl text-[36px] font-medium leading-[1.15] lg:text-[52px]"
            style={{
              color: CHAMPION_BLUE,
            }}
          >
            {study.title}
          </h1>

          {/* BODY */}

          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-slate-600">
            {study.body}
          </p>

        </div>
      </section>

      {/* ========================================================
          MAIN
      ======================================================== */}

      <div className={ALIGN}>

        {/* META */}

        <section
          className="grid grid-cols-2 gap-6 border-y py-8 sm:grid-cols-4"
          style={{
            borderColor: "#E5E1F5",
          }}
        >
          {[
            {
              label: "Client",
              value: study.client,
            },
            {
              label: "Industry",
              value: study.industry,
            },
            {
              label: "Duration",
              value: study.duration,
            },
            {
              label: "Services",
              value: study.services.join(", "),
            },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-[12px] font-semibold uppercase tracking-wide text-slate-400">
                {item.label}
              </p>

              <p
                className="mt-2 text-[15px] font-medium"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                {item.value}
              </p>
            </div>
          ))}
        </section>

        {/* ======================================================
            STATS
        ====================================================== */}

        <section className="grid grid-cols-1 gap-6 py-16 sm:grid-cols-3">
          {study.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl p-8 text-center"
              style={{
                backgroundColor: "#F5F3FC",
              }}
            >
              <p
                className="text-[36px] font-semibold"
                style={{
                  color: INDIGO_CTA,
                }}
              >
                {stat.value}
              </p>

              <p className="mt-2 text-[14px] text-slate-600">
                {stat.label}
              </p>
            </div>
          ))}
        </section>

        {/* ======================================================
            CONTENT
        ====================================================== */}

        <section className="grid grid-cols-1 gap-14 pb-24 lg:grid-cols-[1fr_320px]">

          <div className="space-y-12">

            {/* OVERVIEW */}

            <div>
              <h2
                className="text-[26px] font-medium"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                Overview
              </h2>

              <p className="mt-4 text-[16px] leading-relaxed text-slate-600">
                {study.overview}
              </p>
            </div>

            {/* CHALLENGE */}

            <div>
              <h2
                className="text-[26px] font-medium"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                The Challenge
              </h2>

              <p className="mt-4 text-[16px] leading-relaxed text-slate-600">
                {study.challenge}
              </p>
            </div>

            {/* SOLUTION */}

            <div>
              <h2
                className="text-[26px] font-medium"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                The Starfii Solution
              </h2>

              <p className="mt-4 text-[16px] leading-relaxed text-slate-600">
                {study.solution}
              </p>
            </div>

            {/* RESULTS */}

            <div>
              <h2
                className="text-[26px] font-medium"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                The Results
              </h2>

              <p className="mt-4 text-[16px] leading-relaxed text-slate-600">
                {study.results}
              </p>
            </div>

          </div>

          {/* ====================================================
              SIDEBAR
          ==================================================== */}

          <aside
            className="h-fit rounded-2xl border p-8"
            style={{
              borderColor: LAVENDER_ACCENT,
            }}
          >
            <h3
              className="text-[18px] font-semibold"
              style={{
                color: CHAMPION_BLUE,
              }}
            >
              Services Delivered
            </h3>

            <ul className="mt-4 space-y-3">
              {study.services.map((service) => (
                <li
                  key={service}
                  className="text-[14px] text-slate-600"
                >
                  • {service}
                </li>
              ))}
            </ul>

            <Link
              href="/services/cloud#connect"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] font-semibold text-white"
              style={{
                backgroundColor: CHAMPION_BLUE,
              }}
            >
              Start a similar project
              <ArrowUpRight size={16} />
            </Link>
          </aside>

        </section>

        {/* ======================================================
            RELATED CASE STUDIES
        ====================================================== */}

        {related.length > 0 && (
          <section
            className="border-t pb-24 pt-16"
            style={{
              borderColor: "#E5E1F5",
            }}
          >
            <h2
              className="text-[26px] font-medium"
              style={{
                color: CHAMPION_BLUE,
              }}
            >
              More Cloud Case Studies
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">

              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`${BASE_PATH}/${item.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{
                    border: "1px solid #E5E1F5",
                  }}
                >
                  <div className="h-[170px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-5">
                    <span
                      className="text-[11px] font-semibold tracking-wide"
                      style={{
                        color: INDIGO_CTA,
                      }}
                    >
                      CLOUD CASE STUDY
                    </span>

                    <h3
                      className="mt-2 line-clamp-2 text-[16px] font-semibold leading-snug"
                      style={{
                        color: CHAMPION_BLUE,
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}

            </div>
          </section>
        )}

        {/* BACK */}

        <div className="pb-16">
          <Link
            href="/services/cloud"
            className="inline-flex items-center gap-2 text-[14px] font-semibold"
            style={{
              color: INDIGO_CTA,
            }}
          >
            <ArrowLeft size={16} />
            Back to Cloud Engineering
          </Link>
        </div>

      </div>
    </main>
  );
}
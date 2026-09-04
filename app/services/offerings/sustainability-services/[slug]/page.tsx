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
  "/services/offerings/sustainability-services";

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

export default async function SustainabilityCaseStudyPage({
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

      {/* HERO */}
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

          <nav
            aria-label="Breadcrumb"
            className="font-body flex flex-wrap items-center gap-2 text-[14px] font-medium"
            style={{ color: CHAMPION_BLUE }}
          >
            <Link href="/" className="hover:underline">
              Home
            </Link>

            <ChevronRight size={14} />

            <Link href="/services" className="hover:underline">
              Services
            </Link>

            <ChevronRight size={14} />

            <Link
              href={BASE_PATH}
              className="hover:underline"
            >
              Sustainability Services
            </Link>

            <ChevronRight size={14} />

            <span className="text-slate-500">
              Case Study
            </span>
          </nav>

          <div className="mt-10 max-w-4xl">

            <span
              className="font-body inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-semibold tracking-wide"
              style={{
                backgroundColor: "#F1EEFC",
                color: INDIGO_CTA,
              }}
            >
              <Sparkles size={14} />
              CASE STUDY
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

      {/* IMAGE */}
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

      {/* CONTENT */}
      <section className="pb-24">
        <div
          className={`${ALIGN} grid grid-cols-1 gap-14 lg:grid-cols-[1fr_360px]`}
        >
          <article className="max-w-4xl">

            <p
              className="font-body text-[12px] font-semibold tracking-[0.18em]"
              style={{ color: LAVENDER_ACCENT }}
            >
              CASE STUDY
            </p>

            <h2
              className="font-heading mt-3 text-[32px] font-medium lg:text-[42px]"
              style={{ color: CHAMPION_BLUE }}
            >
              The Story
            </h2>

            <p className="font-body mt-6 text-[16px] leading-[1.9] text-slate-600">
              {study.body}
            </p>

            <div className="mt-10 space-y-10">

              <div>
                <h3
                  className="font-heading text-[24px] font-semibold"
                  style={{ color: CHAMPION_BLUE }}
                >
                  Sustainable Digital Transformation
                </h3>

                <p className="font-body mt-3 text-[15px] leading-[1.9] text-slate-600">
                  Organizations can combine digital modernization,
                  intelligent automation, and sustainable technology
                  practices to create more efficient and resilient
                  operating environments.
                </p>
              </div>

              <div>
                <h3
                  className="font-heading text-[24px] font-semibold"
                  style={{ color: CHAMPION_BLUE }}
                >
                  Intelligent Operations
                </h3>

                <p className="font-body mt-3 text-[15px] leading-[1.9] text-slate-600">
                  Data-driven workflows can help teams identify
                  inefficiencies, improve resource utilization, and
                  create stronger visibility across business operations.
                </p>
              </div>

              <div>
                <h3
                  className="font-heading text-[24px] font-semibold"
                  style={{ color: CHAMPION_BLUE }}
                >
                  Sustainability Intelligence
                </h3>

                <p className="font-body mt-3 text-[15px] leading-[1.9] text-slate-600">
                  Bringing sustainability information together can
                  help organizations understand performance, identify
                  improvement opportunities, and support better decisions.
                </p>
              </div>

            </div>
          </article>

          <aside>
            <div
              className="rounded-2xl p-7 lg:sticky lg:top-8"
              style={{ backgroundColor: "#F5F3FC" }}
            >
              <p
                className="font-body text-[12px] font-semibold tracking-[0.18em]"
                style={{ color: LAVENDER_ACCENT }}
              >
                SUSTAINABILITY SERVICES
              </p>

              <h3
                className="font-heading mt-3 text-[25px] font-semibold"
                style={{ color: CHAMPION_BLUE }}
              >
                Sustainability Capabilities
              </h3>

              <div className="mt-7 space-y-3">
                {[
                  "Sustainable Digital Transformation",
                  "Green Cloud & Technology Operations",
                  "ESG Data Intelligence",
                  "Sustainable Supply Chain",
                  "Operational Efficiency",
                  "Intelligent Automation",
                  "Technology Modernization",
                  "Sustainability Reporting Support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border-b border-slate-200 pb-3"
                  >
                    <span
                      className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full"
                      style={{ backgroundColor: INDIGO_CTA }}
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

      {/* RELATED */}
      <section
        className="py-24"
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #E9E4FB 45%, #C9BEF5 100%)",
        }}
      >
        <div className={ALIGN}>

          <div className="flex items-center justify-between gap-6">

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
                    CASE STUDY
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

      {/* BACK */}
      <section className="bg-white py-12">
        <div className={ALIGN}>
          <Link
            href={BASE_PATH}
            className="font-body inline-flex items-center gap-2 text-[14px] font-semibold hover:-translate-x-1"
            style={{ color: INDIGO_CTA }}
          >
            <ArrowLeft size={16} />
            Back to Sustainability Services
          </Link>
        </div>
      </section>

    </main>
  );
}
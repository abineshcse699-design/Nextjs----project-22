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

const CHAMPION_BLUE = "#1B2560";
const LAVENDER_ACCENT = "#A48FEA";
const INDIGO_CTA = "#4F3FE0";

const ALIGN =
  "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

const BASE_PATH = "/services/offerings/ai-native-contact-center";

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
    title: `${study.title} | Starfii Case Study`,
    description: study.body,
  };
}

export default async function CaseStudyPage({
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

          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/20" />
        </div>

        <div className={`${ALIGN} py-24 lg:py-32`}>

          {/* BREADCRUMB */}
          <nav
            aria-label="Breadcrumb"
            className="font-body flex flex-wrap items-center gap-2 text-[14px] font-medium"
            style={{ color: CHAMPION_BLUE }}
          >
            <Link href="/" className="hover:underline">
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
              Global Capability Centers
            </Link>

            <ChevronRight size={14} />

            <span className="text-slate-500">
              Case Study
            </span>
          </nav>

          {/* HERO CONTENT */}
          <div className="mt-10 max-w-4xl">

            <span
              className="font-body inline-flex rounded-full px-4 py-2 text-[12px] font-semibold tracking-wide"
              style={{
                backgroundColor: "#F1EEFC",
                color: INDIGO_CTA,
              }}
            >
              CASE STUDY
            </span>

            <h1
              className="font-heading mt-6 max-w-4xl text-[42px] font-medium leading-[1.12] lg:text-[60px]"
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
              className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[560px]"
            />
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-24">
        <div
          className={`${ALIGN} grid grid-cols-1 gap-14 lg:grid-cols-[1fr_360px]`}
        >

          {/* MAIN CONTENT */}
          <article className="max-w-4xl">

            <div>
              <p
                className="font-body text-[12px] font-semibold tracking-widest"
                style={{ color: LAVENDER_ACCENT }}
              >
                CASE STUDY OVERVIEW
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
            </div>

            <div className="mt-16">

              <p
                className="font-body text-[12px] font-semibold tracking-widest"
                style={{ color: LAVENDER_ACCENT }}
              >
                STARFII
              </p>

              <h2
                className="font-heading mt-3 text-[32px] font-medium lg:text-[42px]"
                style={{ color: CHAMPION_BLUE }}
              >
                Global Capability Center Solution
              </h2>

              <p className="font-body mt-6 text-[16px] leading-[1.9] text-slate-600">
                Starfii helps organizations establish and scale
                Global Capability Centers through structured
                strategy, talent, technology, governance, and
                operating models.
              </p>

              <p className="font-body mt-5 text-[16px] leading-[1.9] text-slate-600">
                The approach connects GCC planning with operational
                readiness, helping organizations build capabilities
                that can scale with changing business requirements.
              </p>

            </div>

            <div className="mt-16">

              <p
                className="font-body text-[12px] font-semibold tracking-widest"
                style={{ color: LAVENDER_ACCENT }}
              >
                BUSINESS IMPACT
              </p>

              <h2
                className="font-heading mt-3 text-[32px] font-medium lg:text-[42px]"
                style={{ color: CHAMPION_BLUE }}
              >
                What This Enables
              </h2>

              <div className="mt-7 space-y-4">

                <div className="rounded-2xl bg-[#F5F3FC] p-6">
                  <h3
                    className="font-heading text-[20px] font-semibold"
                    style={{ color: CHAMPION_BLUE }}
                  >
                    Faster GCC Setup
                  </h3>

                  <p className="font-body mt-2 text-[14px] leading-relaxed text-slate-600">
                    A structured approach helps organizations move
                    from GCC planning toward operational readiness
                    with greater clarity.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F5F3FC] p-6">
                  <h3
                    className="font-heading text-[20px] font-semibold"
                    style={{ color: CHAMPION_BLUE }}
                  >
                    Stronger Governance
                  </h3>

                  <p className="font-body mt-2 text-[14px] leading-relaxed text-slate-600">
                    Governance and operating processes are built
                    into the GCC model from the beginning.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F5F3FC] p-6">
                  <h3
                    className="font-heading text-[20px] font-semibold"
                    style={{ color: CHAMPION_BLUE }}
                  >
                    Scalable Operations
                  </h3>

                  <p className="font-body mt-2 text-[14px] leading-relaxed text-slate-600">
                    The GCC model can expand as additional
                    capabilities and business requirements emerge.
                  </p>
                </div>

              </div>
            </div>

          </article>

          {/* SIDEBAR */}
          <aside>
            <div
              className="sticky top-8 rounded-2xl p-7"
              style={{
                backgroundColor: "#F5F3FC",
              }}
            >

              <p
                className="font-body text-[12px] font-semibold tracking-widest"
                style={{
                  color: LAVENDER_ACCENT,
                }}
              >
                GLOBAL CAPABILITY CENTERS
              </p>

              <h3
                className="font-heading mt-3 text-[25px] font-semibold"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                GCC Capabilities
              </h3>

              <div className="mt-7 space-y-3">

                {[
                  "GCC Strategy",
                  "Location Assessment",
                  "Entity Setup",
                  "Talent Acquisition",
                  "Technology Enablement",
                  "Operating Model Design",
                  "Governance",
                  "Transition Management",
                  "Managed Operations",
                  "Capability Scaling",
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

      {/* RELATED CASE STUDIES */}
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
            className="font-body inline-flex items-center gap-2 text-[14px] font-semibold transition-transform hover:-translate-x-1"
            style={{ color: INDIGO_CTA }}
          >
            <ArrowLeft size={16} />
            Back to Global Capability Centers
          </Link>

        </div>
      </section>

    </main>
  );
}
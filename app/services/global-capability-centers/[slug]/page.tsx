import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  ChevronRight,
  ArrowLeft,
  Globe2,
  Users,
  Layers3,
  ShieldCheck,
  Workflow,
  TrendingUp,
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
  "/services/global-capability-centers";

/* ============================================================
   STATIC PARAMS
============================================================ */

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

/* ============================================================
   PAGE PARAMS
============================================================ */

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

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

export default async function CaseStudyDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  /*
   * Keep this GCC page focused on GCC-related case studies.
   * If your data has a service/category field, you can filter
   * by that field here instead.
   */
  const related = caseStudies
    .filter((item) => item.slug !== study.slug)
    .slice(0, 4);

  return (
    <main className="bg-white">

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative isolate overflow-hidden">

        {/* Hero image */}

        <div className="absolute inset-0 -z-10">

          <img
            src={study.heroImage ?? study.image}
            alt=""
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/15" />

        </div>

        <div className={`${ALIGN} py-20 lg:py-28`}>

          {/* Breadcrumb */}

          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-[14px] font-medium"
            style={{
              color: CHAMPION_BLUE,
            }}
          >

            <Link
              href="/"
              className="transition-opacity hover:opacity-70"
            >
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
              href={BASE_PATH}
              className="transition-opacity hover:opacity-70"
            >
              Global Capability Centers
            </Link>

            <ChevronRight size={14} />

            <span className="text-slate-500">
              Case Study
            </span>

          </nav>

          {/* Service badge */}

          <span
            className="mt-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[13px] font-semibold text-white"
            style={{
              backgroundColor: INDIGO_CTA,
            }}
          >
            <Globe2 size={14} />

            Global Capability Centers
          </span>

          {/* Hero title */}

          <h1
            className="mt-6 max-w-4xl text-[36px] font-medium leading-[1.12] sm:text-[44px] lg:text-[52px]"
            style={{
              color: CHAMPION_BLUE,
            }}
          >
            {study.title}
          </h1>

          {/* Hero description */}

          <p className="mt-6 max-w-3xl text-[17px] leading-[1.8] text-slate-600">
            {study.body}
          </p>

          {/* Hero CTA */}

          <div className="mt-8 flex flex-wrap gap-4">

            <Link
              href={`${BASE_PATH}#connect`}
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[14px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                backgroundColor: CHAMPION_BLUE,
              }}
            >
              Build a GCC with Starfii
              <ArrowUpRight size={16} />
            </Link>

            <Link
              href="#impact"
              className="inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-[14px] font-semibold transition-all hover:-translate-y-0.5"
              style={{
                borderColor: LAVENDER_ACCENT,
                color: CHAMPION_BLUE,
              }}
            >
              Explore the impact
            </Link>

          </div>

        </div>
      </section>

      <div className={ALIGN}>

        {/* ====================================================
            PROJECT SNAPSHOT
        ==================================================== */}

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
              label: "Service",
              value: "Global Capability Centers",
            },
          ].map((item) => (
            <div key={item.label}>

              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-400">
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

        {/* ====================================================
            IMPACT
        ==================================================== */}

        <section
          id="impact"
          className="py-20 lg:py-24"
        >

          <div className="max-w-3xl">

            <p
              className="text-[13px] font-semibold uppercase tracking-[0.14em]"
              style={{
                color: INDIGO_CTA,
              }}
            >
              GCC Impact
            </p>

            <h2
              className="mt-4 text-[30px] font-medium leading-tight sm:text-[36px]"
              style={{
                color: CHAMPION_BLUE,
              }}
            >
              Global Capability Center Impact
            </h2>

            <p className="mt-5 text-[16px] leading-[1.8] text-slate-600">
              Building scalable global capabilities that combine
              technology, talent, operational excellence, and
              business value.
            </p>

          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">

            {study.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl p-8 text-center"
                style={{
                  backgroundColor: "#F5F3FC",
                }}
              >

                <p
                  className="text-[38px] font-semibold"
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

          </div>

        </section>

        {/* ====================================================
            GCC OPPORTUNITY
        ==================================================== */}

        <section className="border-t py-20 lg:py-24">

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

            <div>

              <p
                className="text-[13px] font-semibold uppercase tracking-[0.14em]"
                style={{
                  color: INDIGO_CTA,
                }}
              >
                01 / GCC Opportunity
              </p>

            </div>

            <div>

              <h2
                className="text-[30px] font-medium leading-tight sm:text-[38px]"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                Building a high-performing global capability center
              </h2>

              <p className="mt-6 text-[16px] leading-[1.85] text-slate-600">
                Organizations are looking beyond traditional
                offshore models to build strategic capability
                centers that accelerate innovation, strengthen
                digital execution, and create long-term business
                value.
              </p>

              <p className="mt-5 text-[16px] leading-[1.85] text-slate-600">
                Starfii helps organizations establish and scale
                GCC operations with the right combination of
                strategy, technology, talent, governance, and
                delivery capabilities.
              </p>

            </div>

          </div>

        </section>

        {/* ====================================================
            STORY
        ==================================================== */}

        <section className="grid grid-cols-1 gap-14 pb-24 lg:grid-cols-[1fr_320px]">

          {/* Main story */}

          <div className="space-y-14">

            {/* Overview */}

            <div>

              <p
                className="text-[13px] font-semibold uppercase tracking-[0.12em]"
                style={{
                  color: INDIGO_CTA,
                }}
              >
                GCC Context
              </p>

              <h2
                className="mt-3 text-[28px] font-medium"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                Creating a strategic engine for global growth
              </h2>

              <p className="mt-5 text-[16px] leading-[1.85] text-slate-600">
                {study.overview}
              </p>

            </div>

            {/* Challenge */}

            <div>

              <p
                className="text-[13px] font-semibold uppercase tracking-[0.12em]"
                style={{
                  color: INDIGO_CTA,
                }}
              >
                02 / The Challenge
              </p>

              <h2
                className="mt-3 text-[28px] font-medium"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                The GCC Challenge
              </h2>

              <p className="mt-5 text-[16px] leading-[1.85] text-slate-600">
                {study.challenge}
              </p>

            </div>

            {/* Solution */}

            <div>

              <p
                className="text-[13px] font-semibold uppercase tracking-[0.12em]"
                style={{
                  color: INDIGO_CTA,
                }}
              >
                03 / The Solution
              </p>

              <h2
                className="mt-3 text-[28px] font-medium"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                The Starfii GCC Solution
              </h2>

              <p className="mt-5 text-[16px] leading-[1.85] text-slate-600">
                {study.solution}
              </p>

            </div>

            {/* Results */}

            <div>

              <p
                className="text-[13px] font-semibold uppercase tracking-[0.12em]"
                style={{
                  color: INDIGO_CTA,
                }}
              >
                04 / Business Impact
              </p>

              <h2
                className="mt-3 text-[28px] font-medium"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                Business Impact
              </h2>

              <p className="mt-5 text-[16px] leading-[1.85] text-slate-600">
                {study.results}
              </p>

            </div>

          </div>

          {/* Sidebar */}

          <aside
            className="h-fit rounded-2xl border p-8 lg:sticky lg:top-8"
            style={{
              borderColor: LAVENDER_ACCENT,
            }}
          >

            <div
              className="flex h-11 w-11 items-center justify-center rounded-xl"
              style={{
                backgroundColor: "#F5F3FC",
                color: INDIGO_CTA,
              }}
            >
              <Globe2 size={21} />
            </div>

            <h3
              className="mt-5 text-[18px] font-semibold"
              style={{
                color: CHAMPION_BLUE,
              }}
            >
              GCC Services Delivered
            </h3>

            <ul className="mt-5 space-y-3">

              {study.services.map((service) => (
                <li
                  key={service}
                  className="flex gap-2 text-[14px] leading-relaxed text-slate-600"
                >
                  <span
                    className="mt-1"
                    style={{
                      color: INDIGO_CTA,
                    }}
                  >
                    •
                  </span>

                  <span>{service}</span>
                </li>
              ))}

            </ul>

            <Link
              href={`${BASE_PATH}#connect`}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[14px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                backgroundColor: CHAMPION_BLUE,
              }}
            >
              Build a GCC with Starfii
              <ArrowUpRight size={16} />
            </Link>

          </aside>

        </section>

        {/* ====================================================
            GCC CAPABILITIES
        ==================================================== */}

        <section
          className="border-t py-20 lg:py-24"
          style={{
            borderColor: "#E5E1F5",
          }}
        >

          <div className="max-w-3xl">

            <p
              className="text-[13px] font-semibold uppercase tracking-[0.14em]"
              style={{
                color: INDIGO_CTA,
              }}
            >
              Our Capabilities
            </p>

            <h2
              className="mt-4 text-[30px] font-medium sm:text-[36px]"
              style={{
                color: CHAMPION_BLUE,
              }}
            >
              Global Capability Center Capabilities
            </h2>

            <p className="mt-5 text-[16px] leading-[1.8] text-slate-600">
              Technology, talent, operating models, and governance
              designed to help organizations build and scale
              high-performing global capability centers.
            </p>

          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {[
              {
                icon: Globe2,
                title: "GCC Strategy & Setup",
                text: "Designing the GCC vision, operating model, location strategy, governance structure, and roadmap for sustainable growth.",
              },
              {
                icon: Layers3,
                title: "Digital & Technology Operations",
                text: "Building technology capabilities that support engineering, data, cloud, automation, and enterprise digital operations.",
              },
              {
                icon: Users,
                title: "Talent & Delivery Excellence",
                text: "Creating scalable talent models, delivery practices, capability development, and high-performing teams.",
              },
            ].map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    borderColor: "#E5E1F5",
                  }}
                >

                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: "#F5F3FC",
                      color: INDIGO_CTA,
                    }}
                  >
                    <Icon size={21} />
                  </div>

                  <h3
                    className="mt-6 text-[18px] font-semibold"
                    style={{
                      color: CHAMPION_BLUE,
                    }}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-[1.75] text-slate-600">
                    {item.text}
                  </p>

                </div>
              );
            })}

          </div>

        </section>

        {/* ====================================================
            GCC VALUE AREAS
        ==================================================== */}

        <section className="py-20 lg:py-24">

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

            {[
              {
                number: "01",
                icon: Globe2,
                title: "GCC Strategy & Setup",
                text: "From business case to launch, establish the right GCC foundation, operating model, and growth roadmap.",
              },
              {
                number: "02",
                icon: Workflow,
                title: "Digital & Technology Operations",
                text: "Create modern engineering and technology capabilities that support enterprise transformation and innovation.",
              },
              {
                number: "03",
                icon: TrendingUp,
                title: "Talent & Delivery Excellence",
                text: "Build high-performing teams and scalable delivery practices that continuously improve business outcomes.",
              },
            ].map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="relative overflow-hidden rounded-2xl p-8"
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

                  <div
                    className="mt-7 flex h-12 w-12 items-center justify-center rounded-xl bg-white"
                    style={{
                      color: INDIGO_CTA,
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  <h3
                    className="mt-6 text-[20px] font-semibold"
                    style={{
                      color: CHAMPION_BLUE,
                    }}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-[1.75] text-slate-600">
                    {item.text}
                  </p>

                </div>
              );
            })}

          </div>

        </section>

        {/* ====================================================
            GCC FOUNDATION
        ==================================================== */}

        <section
          className="border-t py-20 lg:py-24"
          style={{
            borderColor: "#E5E1F5",
          }}
        >

          <div className="max-w-3xl">

            <p
              className="text-[13px] font-semibold uppercase tracking-[0.14em]"
              style={{
                color: INDIGO_CTA,
              }}
            >
              GCC Foundation
            </p>

            <h2
              className="mt-4 text-[30px] font-medium sm:text-[36px]"
              style={{
                color: CHAMPION_BLUE,
              }}
            >
              Foundations for a scalable GCC
            </h2>

          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">

            {[
              {
                icon: Layers3,
                title: "Global Delivery Model",
                text: "Structured delivery frameworks that connect GCC teams with global business priorities.",
              },
              {
                icon: Users,
                title: "Talent & Capability Development",
                text: "Talent strategies that build specialist capabilities and create sustainable workforce growth.",
              },
              {
                icon: ShieldCheck,
                title: "Governance & Operational Excellence",
                text: "Strong governance, security, performance management, and continuous improvement practices.",
              },
            ].map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border p-7"
                  style={{
                    borderColor: "#E5E1F5",
                  }}
                >

                  <Icon
                    size={23}
                    style={{
                      color: INDIGO_CTA,
                    }}
                  />

                  <h3
                    className="mt-5 text-[18px] font-semibold"
                    style={{
                      color: CHAMPION_BLUE,
                    }}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-[1.75] text-slate-600">
                    {item.text}
                  </p>

                </div>
              );
            })}

          </div>

        </section>

        {/* ====================================================
            RELATED CASE STUDIES
        ==================================================== */}

        {related.length > 0 && (
          <section
            className="border-t pb-24 pt-20"
            style={{
              borderColor: "#E5E1F5",
            }}
          >

            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

              <div>

                <p
                  className="text-[13px] font-semibold uppercase tracking-[0.14em]"
                  style={{
                    color: INDIGO_CTA,
                  }}
                >
                  Explore More
                </p>

                <h2
                  className="mt-3 text-[30px] font-medium sm:text-[36px]"
                  style={{
                    color: CHAMPION_BLUE,
                  }}
                >
                  More Global Capability Center Case Studies
                </h2>

              </div>

              <Link
                href={BASE_PATH}
                className="inline-flex items-center gap-2 text-[14px] font-semibold"
                style={{
                  color: INDIGO_CTA,
                }}
              >
                View all GCC case studies
                <ArrowUpRight size={15} />
              </Link>

            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">

              {related.map((item) => (

                <Link
                  key={item.slug}
                  href={`${BASE_PATH}/${item.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{
                    border: "1px solid #E5E1F5",
                  }}
                >

                  <div className="h-[180px] overflow-hidden">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                  </div>

                  <div className="flex flex-1 flex-col p-5">

                    <p
                      className="text-[12px] font-semibold uppercase tracking-[0.1em]"
                      style={{
                        color: INDIGO_CTA,
                      }}
                    >
                      {item.industry}
                    </p>

                    <h3
                      className="mt-2 line-clamp-3 text-[16px] font-semibold leading-snug"
                      style={{
                        color: CHAMPION_BLUE,
                      }}
                    >
                      {item.title}
                    </h3>

                    <span
                      className="mt-auto pt-5 inline-flex items-center gap-1 text-[13px] font-semibold"
                      style={{
                        color: INDIGO_CTA,
                      }}
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

        {/* ====================================================
            FINAL CTA
        ==================================================== */}

        <section
          id="connect"
          className="mb-20 overflow-hidden rounded-3xl px-7 py-14 sm:px-10 lg:px-16 lg:py-16"
          style={{
            backgroundColor: CHAMPION_BLUE,
          }}
        >

          <div className="max-w-4xl">

            <p
              className="text-[13px] font-semibold uppercase tracking-[0.14em]"
              style={{
                color: LAVENDER_ACCENT,
              }}
            >
              Global Capability Center Transformation
            </p>

            <h2 className="mt-4 text-[30px] font-medium leading-tight text-white sm:text-[40px]">
              Ready to build your next-generation global capability center?
            </h2>

            <p className="mt-5 max-w-2xl text-[16px] leading-[1.8] text-white/75">
              Partner with Starfii to design, launch, and scale a
              high-performing GCC built around technology,
              talent, innovation, and measurable business value.
            </p>

            <Link
              href={BASE_PATH}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[14px] font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                color: CHAMPION_BLUE,
              }}
            >
              Start a GCC conversation
              <ArrowUpRight size={16} />
            </Link>

          </div>

        </section>

        {/* ====================================================
            BACK
        ==================================================== */}

        <div className="pb-16">

          <Link
            href={BASE_PATH}
            className="inline-flex items-center gap-2 text-[14px] font-semibold transition-opacity hover:opacity-70"
            style={{
              color: INDIGO_CTA,
            }}
          >
            <ArrowLeft size={16} />
            Back to Global Capability Centers
          </Link>

        </div>

      </div>
    </main>
  );
}
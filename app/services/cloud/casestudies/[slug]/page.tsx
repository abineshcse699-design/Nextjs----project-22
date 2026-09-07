import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Cloud,
  Building2,
  Clock3,
  ShieldCheck,
  Workflow,
  ServerCog,
  Gauge,
} from "lucide-react";

import {
  caseStudies,
  getCaseStudyBySlug,
} from "../data.tsx/casestudies";

import CaseStudyTabs from "../CaseStudyTabs";

const BASE_PATH = "/services/cloud/casestudies";

const ALIGN =
  "mx-auto w-full max-w-[1520px] px-6 sm:px-10 lg:px-16";

const CHAMPION_BLUE = "#0b1747";
const ACCENT_INDIGO = "#3a3ff0";
const SOFT_INDIGO = "#eef0ff";

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
    title: `${study.title} | Starfii Cloud Engineering Case Study`,
    description: study.body,
  };
}

function SectionEyebrow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#3a3ff0]">
      {children}
    </p>
  );
}

function PointCard({
  text,
  icon,
  accent = ACCENT_INDIGO,
}: {
  text: string;
  icon: React.ReactNode;
  accent?: string;
}) {
  return (
    <div
      className="relative rounded-2xl border bg-white p-6 pl-7"
      style={{ borderColor: "#E5E7EB" }}
    >
      <span
        className="absolute bottom-5 left-0 top-5 w-[3px] rounded-full"
        style={{ backgroundColor: accent }}
      />

      <div className="flex items-start gap-3">
        <span className="mt-1 shrink-0">{icon}</span>

        <p className="text-[15px] leading-7 text-slate-600">
          {text}
        </p>
      </div>
    </div>
  );
}

function AtAGlanceSidebar({
  study,
}: {
  study: (typeof caseStudies)[number];
}) {
  return (
    <aside className="lg:sticky lg:top-28">
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <div className="flex items-center gap-2 text-[#0b1747]">
          <Building2 className="h-4 w-4" />
          <p className="text-sm font-semibold uppercase tracking-[0.08em]">
            At a glance
          </p>
        </div>

        <dl className="mt-5 space-y-5">
          <div>
            <dt className="text-sm text-slate-400">Client</dt>
            <dd className="mt-1 text-base font-medium text-[#0b1747]">
              {study.client}
            </dd>
          </div>

          <div>
            <dt className="text-sm text-slate-400">Industry</dt>
            <dd className="mt-1 text-base font-medium text-[#0b1747]">
              {study.industry}
            </dd>
          </div>

          <div>
            <dt className="text-sm text-slate-400">Duration</dt>
            <dd className="mt-1 flex items-center gap-2 text-base font-medium text-[#0b1747]">
              <Clock3 className="h-4 w-4 text-[#3a3ff0]" />
              {study.duration}
            </dd>
          </div>

          <div>
            <dt className="text-sm text-slate-400">Cloud services</dt>
            <dd className="mt-2 flex flex-wrap gap-1.5">
              {study.services.map((service) => (
                <span
                  key={service}
                  className="rounded-full bg-slate-100 px-2.5 py-1 text-sm font-medium text-slate-600"
                >
                  {service}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </div>

      <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#3a3ff0]">
          Headline results
        </p>

        <div className="mt-5 space-y-5">
          {study.stats.map((stat) => (
            <div key={`${stat.value}-${stat.label}`}>
              <p className="text-2xl font-semibold text-[#3a3ff0]">
                {stat.value}
              </p>
              <p className="mt-1 text-sm leading-snug text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

function MoreCaseStudiesSidebar({
  currentSlug,
}: {
  currentSlug: string;
}) {
  const others = caseStudies
    .filter((study) => study.slug !== currentSlug)
    .slice(0, 3);

  if (!others.length) return null;

  return (
    <aside className="lg:sticky lg:top-28">
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#3a3ff0]">
          More case studies
        </p>

        <div className="mt-5 space-y-5">
          {others.map((item) => (
            <Link
              key={item.slug}
              href={`${BASE_PATH}/${item.slug}`}
              className="group block"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-24 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <p className="mt-2.5 text-xs font-semibold uppercase tracking-[0.06em] text-[#3a3ff0]">
                {item.industry}
              </p>

              <p className="mt-1 text-base font-medium leading-snug text-[#0b1747] transition-colors group-hover:text-[#3a3ff0]">
                {item.title}
              </p>
            </Link>
          ))}
        </div>

        <Link
          href={BASE_PATH}
          className="mt-6 inline-flex items-center gap-1.5 text-base font-semibold text-[#3a3ff0]"
        >
          View all case studies
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </aside>
  );
}

export default async function CloudCaseStudyDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="bg-white">
      {/* =====================================================
          HERO — same visual structure as Digital IT Operations
      ===================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#eef0ff] to-[#c7ccfb] pb-16 pt-14 lg:pb-20 lg:pt-20">
        <div className={ALIGN}>
          <Link
            href={BASE_PATH}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#3a3ff0] transition-colors hover:text-[#0b1747]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to case studies
          </Link>

          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#3a3ff0]/10 px-3 py-1 text-xs font-semibold tracking-[0.08em] text-[#3a3ff0]">
                <Cloud className="h-3.5 w-3.5" />
                {study.industry}
              </span>

              <h1 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-[#0b1747] md:text-5xl lg:text-[58px]">
                {study.title}
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
                {study.body}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-base text-slate-500">
                <span className="font-medium text-[#0b1747]">
                  {study.client}
                </span>

                <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:inline-block" />

                <span>{study.industry}</span>

                <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:inline-block" />

                <span>{study.duration}</span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {study.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-slate-600 shadow-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>

              <div className="mt-10 overflow-hidden rounded-2xl shadow-[0_18px_50px_rgba(15,23,42,0.14)]">
                <img
                  src={study.heroImage ?? study.image}
                  alt={study.title}
                  className="h-[280px] w-full object-cover object-center md:h-[420px]"
                />
              </div>
            </div>

            {/* BOOKING / CONTACT CARD */}
            <div className="w-full max-w-[360px] justify-self-start lg:justify-self-end">
              <div className="rounded-2xl bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.10)] lg:sticky lg:top-24">
                <h3 className="text-xl font-semibold text-[#0b1747]">
                  Book a Meeting
                </h3>

                <p className="mt-1.5 text-sm text-slate-500">
                  Schedule some 1 on 1 time with our cloud experts
                </p>

                <form className="mt-6 flex flex-col gap-3">
                  <input
                    type="text"
                    placeholder="Your name*"
                    className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#0b1747] outline-none focus:border-[#3a3ff0]"
                  />

                  <input
                    type="email"
                    placeholder="Email address*"
                    className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#0b1747] outline-none focus:border-[#3a3ff0]"
                  />

                  <select
                    defaultValue=""
                    className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-500 outline-none focus:border-[#3a3ff0]"
                  >
                    <option value="" disabled>
                      How did you hear about us?*
                    </option>
                    <option value="search">Search Engine</option>
                    <option value="referral">Referral</option>
                    <option value="social">Social Media</option>
                    <option value="event">Event</option>
                    <option value="other">Other</option>
                  </select>

                  <input
                    type="text"
                    placeholder="Enter captcha*"
                    className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#0b1747] outline-none focus:border-[#3a3ff0]"
                  />

                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-[#3a3ff0] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2c30c9]"
                  >
                    Submit
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TABS
      ===================================================== */}
      <CaseStudyTabs />

      {/* =====================================================
          CONTENT — same Digital IT / software case-study layout
      ===================================================== */}
      <div className="bg-[#eef0f5]">
        <div className={ALIGN}>
          <div className="grid grid-cols-1 gap-10 py-14 lg:grid-cols-[1fr_360px]">
            <div className="rounded-2xl bg-white p-8 shadow-sm sm:p-10 lg:p-12">

              {/* OVERVIEW */}
              <section id="overview" className="scroll-mt-24">
                <SectionEyebrow>01 / Overview</SectionEyebrow>

                <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-[#0b1747]">
                  {study.overview}
                </h2>

                <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
                  This cloud engineering engagement focused on creating a
                  stronger, more scalable, secure, and operationally mature
                  foundation for the organization.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl bg-[#f7f8fc] p-5">
                    <Cloud className="h-5 w-5 text-[#3a3ff0]" />
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Cloud
                    </p>
                    <p className="mt-2 font-semibold text-[#0b1747]">
                      Modern foundation
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7f8fc] p-5">
                    <ShieldCheck className="h-5 w-5 text-[#3a3ff0]" />
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Security
                    </p>
                    <p className="mt-2 font-semibold text-[#0b1747]">
                      Secure by design
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7f8fc] p-5">
                    <Workflow className="h-5 w-5 text-[#3a3ff0]" />
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Operations
                    </p>
                    <p className="mt-2 font-semibold text-[#0b1747]">
                      Automated workflows
                    </p>
                  </div>
                </div>
              </section>

              {/* CHALLENGE */}
              <section
                id="challenge"
                className="mt-20 scroll-mt-24 border-t border-slate-100 pt-16"
              >
                <SectionEyebrow>02 / Challenge</SectionEyebrow>

                <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-[#0b1747]">
                  The cloud challenge
                </h2>

                <div className="mt-7 rounded-2xl bg-[#fffaf0] p-6">
                  <p className="text-base leading-8 text-slate-600">
                    {study.challenge}
                  </p>
                </div>
              </section>

              {/* SOLUTION */}
              <section
                id="solution"
                className="mt-20 scroll-mt-24 border-t border-slate-100 pt-16"
              >
                <SectionEyebrow>03 / Solution</SectionEyebrow>

                <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-[#0b1747]">
                  How Starfii solved it
                </h2>

                <div className="mt-7">
                  <PointCard
                    text={study.solution}
                    icon={
                      <CheckCircle2 className="h-5 w-5 text-[#3a3ff0]" />
                    }
                  />
                </div>
              </section>

              {/* SERVICES */}
              <section
                id="services"
                className="mt-20 scroll-mt-24 border-t border-slate-100 pt-16"
              >
                <SectionEyebrow>04 / Services</SectionEyebrow>

                <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-[#0b1747]">
                  Cloud engineering capabilities used
                </h2>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {study.services.map((service) => (
                    <div
                      key={service}
                      className="flex items-start gap-3 rounded-2xl border border-slate-200 p-5"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#3a3ff0]" />
                      <span className="text-[15px] font-semibold leading-6 text-[#0b1747]">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* CLOUD OPERATIONS */}
              <section className="mt-20 border-t border-slate-100 pt-16">
                <SectionEyebrow>05 / Cloud Foundation</SectionEyebrow>

                <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-[#0b1747]">
                  Designed for reliable cloud operations
                </h2>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {[
                    {
                      icon: <ServerCog className="h-5 w-5" />,
                      title: "Infrastructure",
                      text: "Scalable and maintainable cloud infrastructure aligned to business workloads.",
                    },
                    {
                      icon: <Gauge className="h-5 w-5" />,
                      title: "Observability",
                      text: "Improved visibility across cloud performance, availability, and operational health.",
                    },
                    {
                      icon: <ShieldCheck className="h-5 w-5" />,
                      title: "Security",
                      text: "Security and governance practices embedded into the cloud operating model.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl bg-[#f7f8fc] p-5"
                    >
                      <div className="text-[#3a3ff0]">{item.icon}</div>

                      <h3 className="mt-4 font-semibold text-[#0b1747]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <AtAGlanceSidebar study={study} />
          </div>
        </div>

        {/* =====================================================
            RESULTS — dark software-style section
        ===================================================== */}
        <section id="results" className="scroll-mt-24 bg-[#0b1747] py-16">
          <div className={ALIGN}>
            <SectionEyebrow>
              <span className="text-[#8ea1ff]">06 / Results</span>
            </SectionEyebrow>

            <h2 className="mt-3 text-3xl font-semibold text-white">
              Results That Matter
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {study.stats.map((stat) => (
                <div
                  key={`${stat.value}-${stat.label}`}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-7"
                >
                  <p className="text-4xl font-semibold text-[#8ea1ff] md:text-5xl">
                    {stat.value}
                  </p>

                  <p className="mt-3 text-base leading-7 text-slate-300">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-3xl text-base leading-8 text-slate-300">
              {study.results}
            </p>
          </div>
        </section>

        {/* =====================================================
            RELATED / TAKEAWAY
        ===================================================== */}
        <div className={ALIGN}>
          <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-[1fr_360px]">
            <div>
              <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10">
                <SectionEyebrow>Case Study Takeaway</SectionEyebrow>

                <h2 className="mt-3 text-3xl font-semibold text-[#0b1747]">
                  A practical cloud engineering transformation
                </h2>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                  {study.results}
                </p>

                <Link
                  href="/services/cloud#connect"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#3a3ff0] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#2c30c9]"
                >
                  Start a similar cloud project
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <MoreCaseStudiesSidebar currentSlug={study.slug} />
          </div>
        </div>
      </div>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="border-t border-slate-100 bg-slate-50 py-16">
        <div className={`${ALIGN} text-center`}>
          <h2 className="text-3xl font-semibold text-[#0b1747] md:text-4xl">
            Ready to modernize your cloud?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-lg leading-8 text-slate-600">
            Let&apos;s discuss how Starfii can help with cloud migration,
            modernization, infrastructure, automation, security, and
            cloud operations.
          </p>

          <Link
            href="/#contact"
            className="mt-7 inline-flex items-center gap-1.5 rounded-full bg-[#3a3ff0] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#2c30c9]"
          >
            Request Your POC Now
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* BACK */}
      <div className={`${ALIGN} border-t py-10`}>
        <Link
          href="/services/cloud"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-[#3a3ff0]"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Cloud Engineering
        </Link>
      </div>
    </main>
  );
}

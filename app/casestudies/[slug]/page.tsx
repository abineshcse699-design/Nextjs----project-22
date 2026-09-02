import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Building2,
} from "lucide-react";
import { caseStudies, getCaseStudyBySlug } from "../caseStudiesData";
import CaseStudyTabs from "../[slug]/CaseStudyTabs"; // adjust path if it lives elsewhere

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) return { title: "Case Study | Starfii" };

  return {
    title: `${study.title} | Starfii Case Study`,
    description: study.cardDescription,
  };
}

function splitLead(text: string): {
  lead: string | null;
  rest: string;
} {
  const idx = text.indexOf(":");

  if (idx > -1 && idx < 48) {
    return {
      lead: text.slice(0, idx),
      rest: text.slice(idx + 1).trim(),
    };
  }

  return {
    lead: null,
    rest: text,
  };
}

function PointCard({
  text,
  icon,
  accent,
}: {
  text: string;
  icon: React.ReactNode;
  accent: string;
}) {
  const { lead, rest } = splitLead(text);

  return (
    <div className="relative rounded-xl border border-slate-200 bg-white p-6 pl-7">
      <span
        className="absolute bottom-6 left-0 top-6 w-[3px] rounded-full"
        style={{ backgroundColor: accent }}
      />

      <div className="flex items-start gap-3">
        <span className="mt-1 shrink-0">{icon}</span>

        <div>
          {lead && (
            <p className="text-base font-semibold text-[#0b1747]">
              {lead}
            </p>
          )}

          <p className="mt-1 text-[15px] leading-relaxed text-slate-600">
            {rest}
          </p>
        </div>
      </div>
    </div>
  );
}

function SectionEyebrow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#4b5fed]">
      {children}
    </p>
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

        <dl className="mt-5 space-y-4">
          <div>
            <dt className="text-sm text-slate-400">Client</dt>

            <dd className="mt-0.5 text-base font-medium text-[#0b1747]">
              {study.client}
            </dd>
          </div>

          <div>
            <dt className="text-sm text-slate-400">Industry</dt>

            <dd className="mt-0.5 text-base font-medium text-[#0b1747]">
              {study.industry}
            </dd>
          </div>

          <div>
            <dt className="text-sm text-slate-400">Services</dt>

            <dd className="mt-1.5 flex flex-wrap gap-1.5">
              {study.services.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-slate-100 px-2.5 py-1 text-sm font-medium text-slate-600"
                >
                  {s}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </div>

      <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#4b5fed]">
          Headline results
        </p>

        <div className="mt-4 space-y-4">
          {study.results.slice(0, 3).map((r, i) => (
            <div key={i} className="flex items-baseline gap-3">
              <span className="text-2xl font-semibold text-[#3a3ff0]">
                {r.metric}
              </span>

              <span className="text-sm leading-snug text-slate-500">
                {r.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div
          className="h-24 w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${study.heroImage})`,
          }}
        />

        <div className="p-6">
          <p className="text-base font-semibold text-[#0b1747]">
            Get results like these
          </p>

          <Link
            href="/#contact"
            className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[#3a3ff0] px-5 py-2.5 text-base font-semibold text-white transition-colors hover:bg-[#2c30c9]"
          >
            Book a Meeting
            <ArrowUpRight className="h-4 w-4" />
          </Link>
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
    .filter((s) => s.slug !== currentSlug)
    .slice(0, 3);

  if (others.length === 0) return null;

  return (
    <aside className="lg:sticky lg:top-28">
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#4b5fed]">
          More case studies
        </p>

        <div className="mt-5 space-y-5">
          {others.map((s) => (
            <Link
              key={s.slug}
              href={`/case-studies/${s.slug}`}
              className="group block"
            >
              <div className="overflow-hidden rounded-lg">
                <div
                  className="h-24 w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${s.image})`,
                  }}
                />
              </div>

              <p className="mt-2.5 text-xs font-semibold uppercase tracking-[0.06em] text-[#4b5fed]">
                {s.category}
              </p>

              <p className="mt-1 text-base font-medium leading-snug text-[#0b1747] transition-colors group-hover:text-[#3a3ff0]">
                {s.title}
              </p>
            </Link>
          ))}
        </div>

        <Link
          href="/case-studies"
          className="mt-6 inline-flex items-center gap-1.5 text-base font-semibold text-[#3a3ff0]"
        >
          View all case studies
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </aside>
  );
}

export default async function CaseStudyDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const study = getCaseStudyBySlug(slug);

  if (!study) notFound();

  return (
    <main className="bg-white">

      {/* =========================================================
          FIRST HERO SECTION
          ========================================================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#eef0ff] to-[#c7ccfb] pb-16 pt-14 lg:pb-20 lg:pt-20">
        <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">

          <Link
            href="/#case-studies"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#4b5fed] transition-colors hover:text-[#37409e]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to case studies
          </Link>

          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">

            {/* LEFT: TITLE + IMAGE */}
            <div>

              <span className="rounded-full bg-[#4b5fed]/10 px-3 py-1 text-xs font-semibold tracking-[0.08em] text-[#4b5fed]">
                CASE STUDY
              </span>

              <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-[#0b1747] md:text-5xl">
                {study.title}
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
                {study.subtitle}
              </p>

              <div className="mt-10 overflow-hidden rounded-2xl shadow-[0_18px_50px_rgba(15,23,42,0.14)]">
                <img
                  src={study.heroImage}
                  alt={study.title}
                  className="h-[280px] w-full object-cover object-center md:h-[420px]"
                />
              </div>

            </div>

            {/* RIGHT: BOOKING CARD */}
            <div className="w-full max-w-[360px] justify-self-start lg:justify-self-end">

              <div className="rounded-2xl bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.10)] lg:sticky lg:top-24">

                <h3 className="text-xl font-semibold text-[#0b1747]">
                  Book a Meeting
                </h3>

                <p className="mt-1.5 text-sm text-slate-500">
                  Schedule some 1 on 1 time with our experts
                </p>

                <form className="mt-6 flex flex-col gap-3">

                  <input
                    type="text"
                    placeholder="Your name*"
                    className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#0b1747] outline-none transition-colors focus:border-[#3a3ff0]"
                  />

                  <input
                    type="email"
                    placeholder="Email address*"
                    className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#0b1747] outline-none transition-colors focus:border-[#3a3ff0]"
                  />

                  <select
                    defaultValue=""
                    className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-500 outline-none transition-colors focus:border-[#3a3ff0]"
                  >
                    <option value="" disabled>
                      How did you hear about us?*
                    </option>

                    <option value="search">
                      Search Engine
                    </option>

                    <option value="referral">
                      Referral
                    </option>

                    <option value="social">
                      Social Media
                    </option>

                    <option value="event">
                      Event
                    </option>

                    <option value="other">
                      Other
                    </option>
                  </select>

                  <div className="mt-1 flex items-center justify-between gap-3 rounded-lg bg-[#c9dcfb] px-4 py-4">

                    <span className="select-none text-2xl italic tracking-wide text-[#3a3ff0]">
                      LDujDv
                    </span>

                    <div className="flex shrink-0 flex-col gap-2">

                      <button
                        type="button"
                        aria-label="Refresh captcha"
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-[#3a3ff0] transition-colors hover:bg-white"
                      >
                        ↻
                      </button>

                      <button
                        type="button"
                        aria-label="Play captcha audio"
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-[#3a3ff0] transition-colors hover:bg-white"
                      >
                        🔊
                      </button>

                    </div>
                  </div>

                  <p className="text-xs text-slate-500">
                    Type the characters to the left*
                  </p>

                  <input
                    type="text"
                    placeholder="Enter captcha*"
                    className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#0b1747] outline-none transition-colors focus:border-[#3a3ff0]"
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


      {/* =========================================================
          GAP BETWEEN FIRST AND SECOND SECTION
          ONLY THIS GAP IS ADDED / FIXED
          ========================================================= */}

      <div className="h-20 bg-gradient-to-b from-[#c7ccfb] via-[#eef0ff] to-[#f6f7fb] sm:h-24 lg:h-28" />


      {/* =========================================================
          SECOND SECTION
          ========================================================= */}

      <section className="bg-[#f6f7fb]">

        <div className="mx-auto max-w-[1520px] px-6 py-14 sm:px-10 lg:px-16">

          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1.5 text-base font-medium text-slate-500 transition-colors hover:text-[#3a3ff0]"
          >
            <ArrowLeft className="h-4 w-4" />
            All case studies
          </Link>

          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">

            <div>

              <span className="inline-block rounded-full border border-[#4b5fed]/30 bg-[#4b5fed]/5 px-4 py-1.5 text-sm font-semibold text-[#3a3ff0]">
                {study.category}
              </span>

              <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-[#0b1747] md:text-5xl">
                {study.title}
              </h1>

              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
                {study.subtitle}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-base text-slate-500">

                <span className="font-medium text-[#0b1747]">
                  {study.client}
                </span>

                <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:inline-block" />

                <span>
                  {study.industry}
                </span>

              </div>

              <div className="mt-5 flex flex-wrap gap-2">

                {study.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-slate-600 shadow-[0_1px_2px_rgba(15,23,42,0.06)]"
                  >
                    {service}
                  </span>
                ))}

              </div>

            </div>


            {/* COMPACT BOOKING CARD */}

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">

              <div
                className="h-28 w-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${study.heroImage})`,
                }}
              />

              <div className="p-6">

                <p className="text-base font-semibold text-[#0b1747]">
                  Get results like these
                </p>

                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  Talk to our team about a similar challenge in your business.
                </p>

                <Link
                  href="/#contact"
                  className="mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[#3a3ff0] px-5 py-2.5 text-base font-semibold text-white transition-colors hover:bg-[#2c30c9]"
                >
                  Book a Meeting
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

              </div>
            </div>

          </div>
        </div>
      </section>


      <CaseStudyTabs />


      {/* =========================================================
          CASE STUDY CONTENT
          ========================================================= */}

      <div className="bg-[#eef0f5]">

        <div className="mx-auto max-w-[1520px] px-6 py-14 sm:px-10 lg:px-16">

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">

            <div className="rounded-2xl bg-white p-8 shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:p-10 lg:p-12">

              {/* Client */}

              <div
                id="client"
                className="max-w-3xl scroll-mt-24"
              >
                <SectionEyebrow>
                  Client
                </SectionEyebrow>

                <h2 className="mt-3 text-3xl font-semibold text-[#0b1747]">
                  {study.overview}
                </h2>

                <p className="mt-5 text-base leading-relaxed text-slate-600">
                  {study.clientOverview}
                </p>
              </div>


              {/* Challenge */}

              <div
                id="challenge"
                className="mt-16 scroll-mt-24"
              >
                <SectionEyebrow>
                  Challenge
                </SectionEyebrow>

                <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-[#0b1747]">
                  {study.challengeIntro}
                </h2>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

                  {study.challengePoints.map((point, i) => (
                    <PointCard
                      key={i}
                      text={point}
                      accent="#f59e0b"
                      icon={
                        <AlertCircle className="h-4 w-4 text-amber-500" />
                      }
                    />
                  ))}

                </div>
              </div>


              {/* Solution */}

              <div
                id="solution"
                className="mt-16 scroll-mt-24"
              >
                <SectionEyebrow>
                  Solution
                </SectionEyebrow>

                <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-[#0b1747]">
                  {study.solutionIntro}
                </h2>

                <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600">
                  {study.solutionDetail}
                </p>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

                  {study.solution.map((point, i) => (
                    <PointCard
                      key={i}
                      text={point}
                      accent="#4b5fed"
                      icon={
                        <CheckCircle2 className="h-4 w-4 text-[#4b5fed]" />
                      }
                    />
                  ))}

                </div>
              </div>

            </div>


            <AtAGlanceSidebar study={study} />

          </div>
        </div>


        {/* =========================================================
            RESULTS
            ========================================================= */}

        <section
          id="results"
          className="scroll-mt-24 bg-[#0b1747] py-16"
        >

          <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">

            <SectionEyebrow>
              <span className="text-[#8ea1ff]">
                Results
              </span>
            </SectionEyebrow>

            <h2 className="mt-3 text-3xl font-semibold text-white">
              Results That Matter
            </h2>

            <div className="mt-10 grid grid-cols-2 divide-x divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 md:grid-cols-4 md:divide-y-0">

              {study.results.map((r, i) => (
                <div
                  key={i}
                  className="p-6 sm:p-8"
                >
                  <p className="text-4xl font-semibold text-[#8ea1ff] md:text-5xl">
                    {r.metric}
                  </p>

                  <p className="mt-2 text-base leading-snug text-slate-300">
                    {r.label}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </section>


        {/* =========================================================
            BENEFITS / SUMMARY / TECHNOLOGY
            ========================================================= */}

        <div className="mx-auto max-w-[1520px] px-6 py-14 sm:px-10 lg:px-16">

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">

            <div className="rounded-2xl bg-white p-8 shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:p-10 lg:p-12">

              {/* Benefits */}

              <div
                id="benefits"
                className="scroll-mt-24"
              >
                <SectionEyebrow>
                  Benefits
                </SectionEyebrow>

                <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-[#0b1747]">
                  {study.benefitsIntro}
                </h2>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

                  {study.benefits.map((benefit, i) => (
                    <PointCard
                      key={i}
                      text={benefit}
                      accent="#10b981"
                      icon={
                        <TrendingUp className="h-4 w-4 text-emerald-500" />
                      }
                    />
                  ))}

                </div>
              </div>


              {/* Summary */}

              <div
                id="summary"
                className="mt-16 max-w-3xl scroll-mt-24"
              >
                <SectionEyebrow>
                  Summary
                </SectionEyebrow>

                <p className="mt-4 text-2xl font-medium leading-relaxed text-[#0b1747]">
                  {study.summary}
                </p>
              </div>


              {/* Tech Stack */}

              <div className="mt-14 max-w-3xl">

                <h2 className="text-3xl font-semibold text-[#0b1747]">
                  Technology Used
                </h2>

                <div className="mt-5 flex flex-wrap gap-3">

                  {study.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 px-4 py-1.5 text-base font-medium text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}

                </div>
              </div>

            </div>


            <MoreCaseStudiesSidebar
              currentSlug={study.slug}
            />

          </div>
        </div>

      </div>


      {/* =========================================================
          CTA
          ========================================================= */}

      <section className="border-t border-slate-100 bg-slate-50 py-16">

        <div className="mx-auto max-w-[1520px] px-6 text-center sm:px-10 lg:px-16">

          <h2 className="text-3xl font-semibold text-[#0b1747] md:text-4xl">
            Have a similar challenge?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-lg text-slate-600">
            Let&apos;s discuss how Starfii can help your team achieve results like these.
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

    </main>
  );
}
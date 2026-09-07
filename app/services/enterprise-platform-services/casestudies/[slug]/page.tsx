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

import {
  caseStudies,
  getCaseStudyBySlug,
} from "../data/case-studies";

import CaseStudyTabs from "../CaseStudyTab";

/* ============================================================
   FIXED: this must match the actual folder name on disk
   (app/.../enterprise-platform-services/casestudies/[slug]/page.tsx),
   which is what Next.js actually uses to resolve the URL.
   Keep this in sync with CASE_STUDY_BASE in the section component.
============================================================ */
const CASE_STUDY_BASE = "/services/enterprise-platform-services/casestudies";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

/* ============================================================
   STATIC PARAMS
============================================================ */

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

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
      title: "Case Study | Starfii",
      description:
        "Explore Starfii enterprise software, platform engineering, cloud modernization, data, AI, and automation case studies.",
    };
  }

  return {
    title: `${study.title} | Starfii Case Study`,
    // description: study.cardDescription,
  };
}

/* ============================================================
   HELPERS
============================================================ */

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

/* ============================================================
   POINT CARD
============================================================ */

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
    <div className="relative rounded-xl border border-slate-200 bg-white p-6 pl-7 transition-shadow duration-300 hover:shadow-md">
      {/* Accent line */}
      <span
        className="absolute bottom-6 left-0 top-6 w-[3px] rounded-full"
        style={{
          backgroundColor: accent,
        }}
      />

      <div className="flex items-start gap-3">
        <span className="mt-1 shrink-0">
          {icon}
        </span>

        <div>
          {lead && (
            <p className="text-base font-semibold text-[#0b1747]">
              {lead}
            </p>
          )}

          <p
            className={`text-[15px] leading-relaxed text-slate-600 ${
              lead ? "mt-1" : ""
            }`}
          >
            {rest}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   SECTION EYEBROW
============================================================ */

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

/* ============================================================
   AT A GLANCE SIDEBAR
============================================================ */

function AtAGlanceSidebar({
  study,
}: {
  study: (typeof caseStudies)[number];
}) {
  return (
    <aside className="lg:sticky lg:top-28">
      {/* --------------------------------------------------------
         CLIENT / INDUSTRY / SERVICES
      -------------------------------------------------------- */}

      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <div className="flex items-center gap-2 text-[#0b1747]">
          <Building2 className="h-4 w-4" />

          <p className="text-sm font-semibold uppercase tracking-[0.08em]">
            At a glance
          </p>
        </div>

        <dl className="mt-5 space-y-4">
          {/* Client */}
          <div>
            <dt className="text-sm text-slate-400">
              Client
            </dt>

            <dd className="mt-0.5 text-base font-medium text-[#0b1747]">
              {study.client}
            </dd>
          </div>

          {/* Industry */}
          <div>
            <dt className="text-sm text-slate-400">
              Industry
            </dt>

            <dd className="mt-0.5 text-base font-medium text-[#0b1747]">
              {study.industry}
            </dd>
          </div>

          {/* Services */}
          <div>
            <dt className="text-sm text-slate-400">
              Services
            </dt>

            <dd className="mt-1.5 flex flex-wrap gap-1.5">
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

      {/* --------------------------------------------------------
         HEADLINE RESULTS
      -------------------------------------------------------- */}

      <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#4b5fed]">
          Headline results
        </p>

        <div className="mt-4 space-y-4">
          {study.results.slice(0, 3).map((result, index) => (
            <div
              key={`${result.metric}-${index}`}
              className="flex items-baseline gap-3"
            >
              <span className="text-2xl font-semibold text-[#3a3ff0]">
                {result.metric}
              </span>

              <span className="text-sm leading-snug text-slate-500">
                {result.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* --------------------------------------------------------
         CTA CARD
      -------------------------------------------------------- */}

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

/* ============================================================
   MORE CASE STUDIES SIDEBAR
============================================================ */

function MoreCaseStudiesSidebar({
  currentSlug,
}: {
  currentSlug: string;
}) {
  const others = caseStudies
    .filter((study) => study.slug !== currentSlug)
    .slice(0, 3);

  if (others.length === 0) {
    return null;
  }

  return (
    <aside className="lg:sticky lg:top-28">
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#4b5fed]">
          More case studies
        </p>

        <div className="mt-5 space-y-5">
          {others.map((study) => (
            <Link
              key={study.slug}
              href={`${CASE_STUDY_BASE}/${study.slug}`}
              className="group block"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-lg">
                <div
                  className="h-24 w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${study.image})`,
                  }}
                />
              </div>

              {/* Category */}
              <p className="mt-2.5 text-xs font-semibold uppercase tracking-[0.06em] text-[#4b5fed]">
                {study.category}
              </p>

              {/* Title */}
              <p className="mt-1 text-base font-medium leading-snug text-[#0b1747] transition-colors group-hover:text-[#3a3ff0]">
                {study.title}
              </p>
            </Link>
          ))}
        </div>

        {/* View all */}
        <Link
          href={CASE_STUDY_BASE}
          className="mt-6 inline-flex items-center gap-1.5 text-base font-semibold text-[#3a3ff0] transition-transform hover:translate-x-1"
        >
          View all case studies

          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </aside>
  );
}

/* ============================================================
   MAIN PAGE
============================================================ */

export default async function CaseStudyDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const study = getCaseStudyBySlug(slug);

  /* ----------------------------------------------------------
     Invalid slug
  ---------------------------------------------------------- */

  if (!study) {
    notFound();
  }

  return (
    <main className="bg-white">
      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#eef0ff] to-[#c7ccfb] pb-16 pt-14 lg:pb-20 lg:pt-20">
        <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
          {/* --------------------------------------------------
             BACK TO CASE STUDIES
          -------------------------------------------------- */}

          <Link
            href={CASE_STUDY_BASE}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#4b5fed] transition-colors hover:text-[#37409e]"
          >
            <ArrowLeft className="h-4 w-4" />

            Back to case studies
          </Link>

          {/* --------------------------------------------------
             HERO GRID
          -------------------------------------------------- */}

          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
            {/* ==================================================
                LEFT SIDE
            ================================================== */}

            <div>
              {/* Category */}
              <span className="inline-block rounded-full bg-[#4b5fed]/10 px-3 py-1 text-xs font-semibold tracking-[0.08em] text-[#4b5fed]">
                {study.category}
              </span>

              {/* Title */}
              <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-[#0b1747] md:text-5xl">
                {study.title}
              </h1>

              {/* Subtitle */}
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
                {study.subtitle}
              </p>

              {/* Client / Industry */}
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-base text-slate-500">
                <span className="font-medium text-[#0b1747]">
                  {study.client}
                </span>

                <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:inline-block" />

                <span>
                  {study.industry}
                </span>
              </div>

              {/* Services */}
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

              {/* Hero Image */}
              <div className="mt-10 overflow-hidden rounded-2xl shadow-[0_18px_50px_rgba(15,23,42,0.14)]">
                <img
                  src={study.heroImage}
                  alt={study.title}
                  className="h-[280px] w-full object-cover object-center md:h-[420px]"
                />
              </div>
            </div>

            {/* ==================================================
                RIGHT SIDE — BOOKING CARD
            ================================================== */}

            <div className="w-full max-w-[360px] justify-self-start lg:justify-self-end">
              <div className="rounded-2xl bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.10)] lg:sticky lg:top-24">
                {/* Heading */}
                <h3 className="text-xl font-semibold text-[#0b1747]">
                  Book a Meeting
                </h3>

                <p className="mt-1.5 text-sm text-slate-500">
                  Schedule some 1 on 1 time with our experts
                </p>

                {/* Form */}
                <form className="mt-6 flex flex-col gap-3">
                  {/* Name */}
                  <input
                    type="text"
                    placeholder="Your name*"
                    className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#0b1747] outline-none transition-colors focus:border-[#3a3ff0]"
                  />

                  {/* Email */}
                  <input
                    type="email"
                    placeholder="Email address*"
                    className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#0b1747] outline-none transition-colors focus:border-[#3a3ff0]"
                  />

                  {/* Source */}
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

                  {/* ------------------------------------------------
                     CAPTCHA PLACEHOLDER

                     Replace with a real captcha provider before
                     production.
                  ------------------------------------------------ */}

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

                  {/* Captcha input */}
                  <input
                    type="text"
                    placeholder="Enter captcha*"
                    className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#0b1747] outline-none transition-colors focus:border-[#3a3ff0]"
                  />

                  {/* Submit */}
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

      {/* ======================================================
          HERO BOTTOM GRADIENT
      ====================================================== */}

      <div className="h-20 bg-gradient-to-b from-[#c7ccfb] via-[#eef0ff] to-[#f6f7fb] sm:h-24 lg:h-28" />

      {/* ======================================================
          CASE STUDY TABS
      ====================================================== */}

      <CaseStudyTabs />

      {/* ======================================================
          CASE STUDY CONTENT
      ====================================================== */}

      <div className="bg-[#eef0f5]">
        <div className="mx-auto max-w-[1520px] px-6 py-14 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
            {/* ==================================================
                MAIN CONTENT
            ================================================== */}

            <div className="rounded-2xl bg-white p-8 shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:p-10 lg:p-12">
              {/* =================================================
                  CLIENT
              ================================================= */}

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

              {/* =================================================
                  CHALLENGE
              ================================================= */}

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
                  {study.challengePoints.map(
                    (point, index) => (
                      <PointCard
                        key={`${point}-${index}`}
                        text={point}
                        accent="#f59e0b"
                        icon={
                          <AlertCircle className="h-4 w-4 text-amber-500" />
                        }
                      />
                    )
                  )}
                </div>
              </div>

              {/* =================================================
                  SOLUTION
              ================================================= */}

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
                  {study.solution.map(
                    (point, index) => (
                      <PointCard
                        key={`${point}-${index}`}
                        text={point}
                        accent="#4b5fed"
                        icon={
                          <CheckCircle2 className="h-4 w-4 text-[#4b5fed]" />
                        }
                      />
                    )
                  )}
                </div>
              </div>
            </div>

            {/* ==================================================
                SIDEBAR
            ================================================== */}

            <AtAGlanceSidebar
              study={study}
            />
          </div>
        </div>

        {/* ======================================================
            RESULTS
        ====================================================== */}

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

            {/* Results grid */}
            <div className="mt-10 grid grid-cols-2 divide-x divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 md:grid-cols-4 md:divide-y-0">
              {study.results.map(
                (result, index) => (
                  <div
                    key={`${result.metric}-${index}`}
                    className="p-6 sm:p-8"
                  >
                    <p className="text-4xl font-semibold text-[#8ea1ff] md:text-5xl">
                      {result.metric}
                    </p>

                    <p className="mt-2 text-base leading-snug text-slate-300">
                      {result.label}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* ======================================================
            BENEFITS / SUMMARY / TECHNOLOGY
        ====================================================== */}

        <div className="mx-auto max-w-[1520px] px-6 py-14 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
            {/* ==================================================
                MAIN
            ================================================== */}

            <div className="rounded-2xl bg-white p-8 shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:p-10 lg:p-12">
              {/* =================================================
                  BENEFITS
              ================================================= */}

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
                  {study.benefits.map(
                    (benefit, index) => (
                      <PointCard
                        key={`${benefit}-${index}`}
                        text={benefit}
                        accent="#10b981"
                        icon={
                          <TrendingUp className="h-4 w-4 text-emerald-500" />
                        }
                      />
                    )
                  )}
                </div>
              </div>

              {/* =================================================
                  SUMMARY
              ================================================= */}

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

              {/* =================================================
                  TECHNOLOGY
              ================================================= */}

              <div className="mt-14 max-w-3xl">
                <h2 className="text-3xl font-semibold text-[#0b1747]">
                  Technology Used
                </h2>

                <div className="mt-5 flex flex-wrap gap-3">
                  {study.techStack.map(
                    (technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-slate-200 px-4 py-1.5 text-base font-medium text-slate-600"
                      >
                        {technology}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* ==================================================
                MORE CASE STUDIES
            ================================================== */}

            <MoreCaseStudiesSidebar
              currentSlug={study.slug}
            />
          </div>
        </div>
      </div>

      {/* ======================================================
          FINAL CTA
      ====================================================== */}

      <section className="border-t border-slate-100 bg-slate-50 py-16">
        <div className="mx-auto max-w-[1520px] px-6 text-center sm:px-10 lg:px-16">
          <h2 className="text-3xl font-semibold text-[#0b1747] md:text-4xl">
            Have a similar challenge?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-lg text-slate-600">
            Let&apos;s discuss how Starfii can help your team achieve results
            like these.
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
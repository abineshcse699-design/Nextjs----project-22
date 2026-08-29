import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Circle } from "lucide-react";
import { caseStudies, getCaseStudyBySlug } from "../caseStudiesData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return { title: "Case Study | Starfii" };
  return {
    title: `${study.title} | Starfii Case Study`,
    description: study.cardDescription,
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  return (
    <main className="bg-white">
      {/* hero — title/image left, compact "Book a Meeting" card right */}
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
            {/* left: title + image */}
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
                  className="h-[280px] w-full object-cover md:h-[420px]"
                />
              </div>
            </div>

            {/* right: compact "Book a Meeting" card — hero only */}
            <div className="w-full max-w-[360px] justify-self-start lg:justify-self-end">
              <div className="rounded-2xl bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.10)] lg:sticky lg:top-24">
                <h3 className="text-xl font-semibold text-[#0b1747]">Book a Meeting</h3>
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
                    <option value="search">Search Engine</option>
                    <option value="referral">Referral</option>
                    <option value="social">Social Media</option>
                    <option value="event">Event</option>
                    <option value="other">Other</option>
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
                  <p className="text-xs text-slate-500">Type the characters to the left*</p>
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

      {/* everything below sits on ONE light gray/lavender page background,
          matching the reference — content lives inside white rounded
          cards floating on top of it, not full-bleed alternating sections */}
      <div className="bg-[#eef0f5]">
        <div className="mx-auto max-w-[1520px] px-6 py-14 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
            {/* left: continuous white content card — Client, Challenge, Solution */}
            <div className="rounded-2xl bg-white p-8 shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:p-10 lg:p-12">
              {/* Client */}
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#4b5fed]">
                  Client
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-[#0b1747]">{study.overview}</h2>
                <p className="mt-5 text-[15px] leading-relaxed text-slate-600">
                  {study.clientOverview}
                </p>
              </div>

              {/* Challenge */}
              <div className="mt-14 max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#4b5fed]">
                  Challenge
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-[#0b1747]">
                  {study.challengeIntro}
                </h2>
                <ul className="mt-8 flex flex-col gap-4">
                  {study.challengePoints.map((point, i) => (
                    <li key={i} className="flex gap-3">
                      <Circle className="mt-1.5 h-1.5 w-1.5 shrink-0 fill-[#4b5fed] text-[#4b5fed]" />
                      <span className="text-[15px] leading-relaxed text-slate-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution */}
              <div className="mt-14 max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#4b5fed]">
                  Solution
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-[#0b1747]">
                  {study.solutionIntro}
                </h2>
                <p className="mt-5 text-[15px] leading-relaxed text-slate-600">
                  {study.solutionDetail}
                </p>
                <ul className="mt-8 flex flex-col gap-4">
                  {study.solution.map((point, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#4b5fed]" />
                      <span className="text-[15px] leading-relaxed text-slate-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* right column stays empty — just background, aligned to hero's sidebar width */}
            <div className="hidden lg:block" />
          </div>
        </div>

        {/* Results — full-bleed dark stat band, breaks out of the card intentionally */}
        <section className="bg-[#0b1747] py-16">
          <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#8ea1ff]">
              Results
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Results That Matter</h2>
            <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
              {study.results.map((r, i) => (
                <div key={i}>
                  <p className="text-3xl font-semibold text-[#8ea1ff] md:text-4xl">{r.metric}</p>
                  <p className="mt-2 text-sm leading-snug text-slate-300">{r.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-[1520px] px-6 py-14 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
            {/* left: continuous white content card — Benefits, Summary, Tech Stack */}
            <div className="rounded-2xl bg-white p-8 shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:p-10 lg:p-12">
              {/* Benefits */}
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#4b5fed]">
                  Benefits
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-[#0b1747]">
                  {study.benefitsIntro}
                </h2>
                <ul className="mt-8 flex flex-col gap-4">
                  {study.benefits.map((benefit, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#4b5fed]" />
                      <span className="text-[15px] leading-relaxed text-slate-600">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Summary */}
              <div className="mt-14 max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#4b5fed]">
                  Summary
                </p>
                <p className="mt-4 text-xl font-medium leading-relaxed text-[#0b1747]">
                  {study.summary}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="mt-14 max-w-3xl">
                <h2 className="text-2xl font-semibold text-[#0b1747]">Technology Used</h2>
                <div className="mt-5 flex flex-wrap gap-3">
                  {study.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 px-4 py-1.5 text-sm font-medium text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden lg:block" />
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="border-t border-slate-100 bg-slate-50 py-16">
        <div className="mx-auto max-w-[1520px] px-6 text-center sm:px-10 lg:px-16">
          <h2 className="text-2xl font-semibold text-[#0b1747] md:text-3xl">
            Have a similar challenge?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] text-slate-600">
            Let's discuss how Starfii can help your team achieve results like these.
          </p>
          <Link
            href="/#contact"
            className="mt-7 inline-flex items-center gap-1.5 rounded-full bg-[#3a3ff0] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2c30c9]"
          >
            Request Your POC Now
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
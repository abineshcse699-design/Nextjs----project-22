import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Circle } from "lucide-react";
import { caseStudies, getCaseStudyBySlug } from "../caseStudiesData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Pre-render a static page for every case study at build time
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

  const otherStudies = caseStudies.filter((s) => s.slug !== study.slug).slice(0, 3);

  return (
    <main className="bg-white">
      {/* hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#eef0ff] to-[#c7ccfb] pb-16 pt-14 lg:pb-24 lg:pt-20">
        <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
          <Link
            href="/#case-studies"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#4b5fed] transition-colors hover:text-[#37409e]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to case studies
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#4b5fed]/10 px-3 py-1 text-xs font-semibold tracking-[0.08em] text-[#4b5fed]">
              {study.category.toUpperCase()}
            </span>
            <span className="text-sm text-slate-500">{study.industry}</span>
          </div>

          <h1 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-[#0b1747] md:text-5xl">
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
      </section>

      {/* client / industry / services strip */}
      <section className="border-b border-slate-100">
        <div className="mx-auto grid max-w-[1520px] grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-3 sm:px-10 lg:px-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-400">
              Client
            </p>
            <p className="mt-1.5 text-base font-medium text-[#0b1747]">{study.client}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-400">
              Industry
            </p>
            <p className="mt-1.5 text-base font-medium text-[#0b1747]">{study.industry}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-400">
              Services
            </p>
            <p className="mt-1.5 text-base font-medium text-[#0b1747]">
              {study.services.join(" · ")}
            </p>
          </div>
        </div>
      </section>

      {/* client narrative */}
      <section className="mx-auto max-w-[1520px] px-6 py-16 sm:px-10 lg:px-16">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#4b5fed]">
            Client
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-[#0b1747]">{study.overview}</h2>
          <p className="mt-5 text-[15px] leading-relaxed text-slate-600">
            {study.clientOverview}
          </p>
        </div>
      </section>

      {/* challenge */}
      <section className="border-t border-slate-100 bg-slate-50/60 py-16">
        <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#4b5fed]">
            Challenge
          </p>
          <h2 className="mt-3 max-w-3xl text-2xl font-semibold text-[#0b1747]">
            {study.challengeIntro}
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-x-10 gap-y-4 md:grid-cols-2">
            {study.challengePoints.map((point, i) => (
              <li key={i} className="flex gap-3">
                <Circle className="mt-1.5 h-1.5 w-1.5 shrink-0 fill-[#4b5fed] text-[#4b5fed]" />
                <span className="text-[15px] leading-relaxed text-slate-600">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* solution */}
      <section className="mx-auto max-w-[1520px] px-6 py-16 sm:px-10 lg:px-16">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#4b5fed]">
          Solution
        </p>
        <h2 className="mt-3 max-w-3xl text-2xl font-semibold text-[#0b1747]">
          {study.solutionIntro}
        </h2>
        <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-slate-600">
          {study.solutionDetail}
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {study.solution.map((point, i) => (
            <li key={i} className="flex gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#4b5fed]" />
              <span className="text-[15px] leading-relaxed text-slate-600">{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* results */}
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

      {/* benefits */}
      <section className="border-b border-slate-100 py-16">
        <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#4b5fed]">
            Benefits
          </p>
          <h2 className="mt-3 max-w-3xl text-2xl font-semibold text-[#0b1747]">
            {study.benefitsIntro}
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-x-10 gap-y-4 md:grid-cols-2">
            {study.benefits.map((benefit, i) => (
              <li key={i} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#4b5fed]" />
                <span className="text-[15px] leading-relaxed text-slate-600">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* summary */}
      <section className="bg-[#eef0ff] py-16">
        <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#4b5fed]">
            Summary
          </p>
          <p className="mt-4 max-w-3xl text-xl font-medium leading-relaxed text-[#0b1747]">
            {study.summary}
          </p>
        </div>
      </section>

      {/* tech stack */}
      <section className="mx-auto max-w-[1520px] px-6 py-16 sm:px-10 lg:px-16">
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
      </section>

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

      {/* other case studies */}
    

    </main>

  );

}
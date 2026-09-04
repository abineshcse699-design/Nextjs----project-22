import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import {
  caseStudies,
  getCaseStudyBySlug,
} from "../data/case-studies";

const BASE_PATH = "/services/offerings/generative-ai";

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
      description: "The requested case study could not be found.",
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
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0A0912]">
        <div className="absolute inset-0">
          <img
            src={study.image}
            alt=""
            className="h-full w-full object-cover opacity-30"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0912] via-[#0A0912]/90 to-[#0A0912]/50" />
        </div>

        <div className="relative mx-auto max-w-[1520px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm text-white/60"
          >
            <Link
              href="/"
              className="transition-colors hover:text-white"
            >
              Home
            </Link>

            <span>/</span>

            <Link
              href="/services"
              className="transition-colors hover:text-white"
            >
              Services
            </Link>

            <span>/</span>

            <Link
              href={BASE_PATH}
              className="transition-colors hover:text-white"
            >
              Generative AI
            </Link>

            <span>/</span>

            <span className="text-white/90">
              Case Study
            </span>
          </nav>

          {/* Label */}
          <div className="mt-12">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wider text-white">
              CASE STUDY
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-6 max-w-4xl text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">
            {study.title}
          </h1>

          {/* Body */}
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {study.body}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-10 lg:px-16">
          <div className="overflow-hidden rounded-3xl bg-[#F5F3FC]">
            <img
              src={study.image}
              alt={study.title}
              className="h-[320px] w-full object-cover sm:h-[440px]"
            />

            <div className="p-8 sm:p-12">
              <p className="text-xs font-semibold tracking-widest text-[#4F3FE0]">
                AI &amp; DIGITAL INTELLIGENCE
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight text-[#1B2560] sm:text-4xl">
                {study.title}
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600">
                {study.body}
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                This case study explores how Starfii can combine
                conversational AI, trusted enterprise knowledge,
                intelligent workflows, and human oversight to
                create practical business outcomes.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                The approach can be adapted to customer support,
                employee knowledge, sales enablement, IT helpdesk,
                document intelligence, and other enterprise
                conversational AI use cases.
              </p>
            </div>
          </div>

          {/* BACK */}
          <div className="mt-10">
            <Link
              href={BASE_PATH}
              className="inline-flex items-center gap-2 rounded-full bg-[#1B2560] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-x-1"
            >
              <ArrowLeft size={16} />
              Back to Generative AI
            </Link>
          </div>
        </div>
      </section>

      {/* RELATED CASE STUDIES */}
      <section className="bg-[#EEF0F7] py-20">
        <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
          <h2 className="text-3xl font-medium text-[#1B2560] sm:text-4xl">
            Related Case Studies
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {relatedStudies.map((related) => (
              <Link
                key={related.slug}
                href={`${BASE_PATH}/${related.slug}`}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={related.image}
                    alt={related.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <span className="text-xs font-semibold tracking-wider text-[#4F3FE0]">
                    CASE STUDY
                  </span>

                  <h3 className="mt-2 text-xl font-semibold leading-snug text-[#1B2560]">
                    {related.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600">
                    {related.body}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#4F3FE0]">
                    Read Case Study
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
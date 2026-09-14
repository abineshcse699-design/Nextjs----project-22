import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Database,
  Layers3,
  Network,
  ServerCog,
  ShieldCheck,
  Target,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import { caseStudies } from "../data/caseStudies";
import CaseStudyTabs from "../CaseStudyTabs";

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src={study.heroImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40" />

        <div className="relative mx-auto max-w-[1520px] px-6 py-28 sm:px-10 lg:px-16 lg:py-36">
          <div className="flex items-center gap-2 text-sm text-[#1B2560]">
            <Link href="/">Home</Link>
            <ChevronRight size={15} />
            <Link href="/services">Services</Link>
            <ChevronRight size={15} />
            <Link href="/services/legacy-modernization">
              Legacy Modernization
            </Link>
            <ChevronRight size={15} />
            <span className="text-slate-500">Case Study</span>
          </div>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#4F3FE0] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white">
            <Layers3 size={15} />
            Legacy Modernization
          </div>

          <h1 className="mt-7 max-w-4xl text-4xl font-medium leading-tight tracking-tight text-[#1B2560] sm:text-5xl lg:text-6xl">
            {study.title}
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
            {study.body}
          </p>

          <Link
            href="/services/legacy-modernization"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#1B2560] px-7 py-4 text-sm font-semibold text-white"
          >
            <ArrowLeft size={17} />
            Back to Case Studies
          </Link>
        </div>
      </section>

      {/* STICKY TABS — now actually rendered */}
      <CaseStudyTabs />

      {/* INFO */}
      <section id="client" className="scroll-mt-28 py-20 lg:py-24">
        <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4F3FE0]">
                01 / Client
              </p>
              <h2 className="mt-4 text-4xl font-medium text-[#1B2560]">
                Modernization built around the business
              </h2>
            </div>
            <div>
              <p className="text-lg leading-9 text-slate-600">
                {study.overview}
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <Info label="Client" value={study.client} />
                <Info label="Industry" value={study.industry} />
                <Info label="Duration" value={study.duration} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section id="challenge" className="scroll-mt-28 border-t py-20 lg:py-24">
        <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <Icon><Target size={22} /></Icon>
              <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-[#4F3FE0]">
                02 / Challenge
              </p>
              <h2 className="mt-4 text-4xl font-medium text-[#1B2560]">
                Legacy complexity without disruption
              </h2>
            </div>
            <div className="rounded-3xl bg-[#F5F3FC] p-8 lg:p-12">
              <p className="text-lg leading-9 text-slate-600">
                {study.challenge}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section id="solution" className="scroll-mt-28 border-t py-20 lg:py-24">
        <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <Icon><ServerCog size={22} /></Icon>
              <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-[#4F3FE0]">
                03 / Modernization Solution
              </p>
              <h2 className="mt-4 text-4xl font-medium text-[#1B2560]">
                A phased modernization strategy
              </h2>
            </div>
            <div>
              <p className="text-lg leading-9 text-slate-600">
                {study.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section id="results" className="scroll-mt-28 border-t py-20 lg:py-24">
        <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4F3FE0]">
            04 / Impact
          </p>
          <h2 className="mt-4 text-4xl font-medium text-[#1B2560]">
            Measurable modernization outcomes
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {study.stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-[#E5E1F5] p-8">
                <p className="text-5xl font-semibold text-[#4F3FE0]">{stat.value}</p>
                <p className="mt-4 text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-[#F5F3FC] p-8 lg:p-10">
            <div className="flex gap-4">
              <TrendingUp className="shrink-0 text-[#4F3FE0]" size={24} />
              <p className="text-lg leading-8 text-slate-600">{study.results}</p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="scroll-mt-28 border-t py-20 lg:py-24">
        <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <Icon><ShieldCheck size={22} /></Icon>
              <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-[#4F3FE0]">
                05 / Benefits
              </p>
              <h2 className="mt-4 text-4xl font-medium text-[#1B2560]">
                Business benefits beyond migration
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {study.benefits.map((benefit) => (
                <div key={benefit} className="flex gap-3 rounded-2xl border border-[#E5E1F5] p-5">
                  <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-[#4F3FE0]" />
                  <span className="text-sm leading-6 text-slate-600">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section id="technology" className="scroll-mt-28 border-t py-20 lg:py-24">
        <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <Icon><Network size={22} /></Icon>
              <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-[#4F3FE0]">
                06 / Technology
              </p>
              <h2 className="mt-4 text-4xl font-medium text-[#1B2560]">
                Modern technology foundation
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {study.technologies.map((technology) => (
                <div key={technology} className="flex items-center gap-3 rounded-2xl bg-[#F5F3FC] p-5">
                  <Database size={19} className="text-[#4F3FE0]" />
                  <span className="text-sm font-semibold text-[#1B2560]">{technology}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
          <div className="rounded-[32px] bg-[#1B2560] px-8 py-16 text-center sm:px-16">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A48FEA]">
              Legacy Modernization
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-medium text-white lg:text-5xl">
              Ready to modernize your legacy systems?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
              Start with a clear modernization assessment and roadmap built around your business priorities.
            </p>
            <Link
              href="/services/legacy-modernization"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#1B2560]"
            >
              Explore Legacy Modernization
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5F3FC] text-[#4F3FE0]">
      {children}
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[#E5E1F5] p-5">
      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">{label}</p>
      <p className="mt-2 text-sm font-semibold leading-6 text-[#1B2560]">{value}</p>
    </div>
  );
}
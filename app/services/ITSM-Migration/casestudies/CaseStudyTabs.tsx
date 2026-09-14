"use client";

import {
  useEffect,
  useState,
} from "react";

import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Database,
  GitBranch,
  Layers3,
  Network,
  ServerCog,
  ShieldCheck,
  Target,
  TestTube2,
  Users,
  Workflow,
} from "lucide-react";

import type {
  CaseStudy,
} from "./data/caseStudies";

const TABS = [
  {
    id: "client",
    label: "Client",
  },
  {
    id: "challenge",
    label: "Challenge",
  },
  {
    id: "approach",
    label: "Approach",
  },
  {
    id: "solution",
    label: "Solution",
  },
  {
    id: "results",
    label: "Impact",
  },
  {
    id: "benefits",
    label: "Benefits",
  },
  {
    id: "technology",
    label: "Technology",
  },
];

type Props = {
  study: CaseStudy;

  previousStudy?: CaseStudy;

  nextStudy?: CaseStudy;
};

export default function CaseStudyTabs({
  study,
  previousStudy,
  nextStudy,
}: Props) {
  const [active, setActive] =
    useState("client");

  useEffect(() => {
    const sections = TABS.map(
      (tab) =>
        document.getElementById(
          tab.id
        )
    ).filter(
      (
        element
      ): element is HTMLElement =>
        Boolean(element)
    );

    if (!sections.length) {
      return;
    }

    const observer =
      new IntersectionObserver(
        (entries) => {
          const visibleEntries =
            entries
              .filter(
                (entry) =>
                  entry.isIntersecting
              )
              .sort(
                (a, b) =>
                  b.intersectionRatio -
                  a.intersectionRatio
              );

          if (
            visibleEntries.length
          ) {
            setActive(
              visibleEntries[0]
                .target.id
            );
          }
        },
        {
          root: null,

          rootMargin:
            "-18% 0px -62% 0px",

          threshold: [
            0.05,
            0.1,
            0.25,
            0.5,
          ],
        }
      );

    sections.forEach(
      (section) =>
        observer.observe(section)
    );

    return () =>
      observer.disconnect();
  }, []);

  const handleTabClick = (
    id: string
  ) => {
    const element =
      document.getElementById(id);

    if (!element) {
      return;
    }

    const headerOffset = 88;

    const y =
      element.getBoundingClientRect()
        .top +
      window.scrollY -
      headerOffset;

    window.scrollTo({
      top: Math.max(0, y),
      behavior: "smooth",
    });

    setActive(id);
  };

  return (
    <main className="min-h-screen bg-white text-[#1B2560]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative isolate min-h-[680px] overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <img
            src={study.image}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/95 to-white/30" />

        <div className="absolute -right-20 -top-20 -z-10 h-[500px] w-[500px] rounded-full bg-[#A48FEA]/25 blur-[120px]" />

        <div className="mx-auto max-w-[1520px] px-6 py-12 sm:px-10 lg:px-16 lg:py-20">
          {/* Breadcrumb */}

          <nav className="flex flex-wrap items-center gap-2 text-[13px] font-medium text-[#1B2560]">
            <Link
              href="/"
              className="transition-opacity hover:opacity-60"
            >
              Home
            </Link>

            <ArrowRight
              size={14}
            />

            <Link
              href="/services"
              className="transition-opacity hover:opacity-60"
            >
              Services
            </Link>

            <ArrowRight
              size={14}
            />

            <Link
              href="/services/itsm-migration"
              className="transition-opacity hover:opacity-60"
            >
              ITSM Migration
            </Link>

            <ArrowRight
              size={14}
            />

            <span className="text-slate-500">
              Case Study
            </span>
          </nav>

          <div className="max-w-4xl pt-24 lg:pt-32">
            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full bg-[#4F3FE0] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-lg">
              <Layers3 size={14} />

              ITSM Migration
            </div>

            {/* Title */}

            <h1 className="mt-7 max-w-4xl text-[42px] font-medium leading-[1.08] tracking-[-0.03em] text-[#1B2560] sm:text-[54px] lg:text-[68px]">
              {study.title}
            </h1>

            {/* Description */}

            <p className="mt-7 max-w-3xl text-[17px] leading-8 text-slate-600 lg:text-[19px]">
              {study.body}
            </p>

            {/* Buttons */}

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/services/itsm-migration"
                className="inline-flex items-center gap-2 rounded-full bg-[#1B2560] px-7 py-4 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#4F3FE0]"
              >
                <ArrowLeft
                  size={17}
                />

                Back to ITSM Migration
              </Link>

              <button
                type="button"
                onClick={() =>
                  handleTabClick(
                    "challenge"
                  )
                }
                className="inline-flex items-center gap-2 rounded-full border border-[#1B2560]/20 bg-white/80 px-7 py-4 text-[14px] font-semibold text-[#1B2560] backdrop-blur transition-all duration-300 hover:-translate-y-1"
              >
                Explore Case Study

                <ArrowUpRight
                  size={17}
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CLIENT SUMMARY
      ===================================================== */}

      <section className="relative z-10 -mt-8 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1400px] rounded-[28px] border border-[#E5E1F5] bg-white p-6 shadow-[0_20px_70px_-30px_rgba(27,37,96,0.3)] lg:p-8">
          <div className="grid gap-5 md:grid-cols-3">
            <InfoCard
              label="Client"
              value={study.client}
              icon={
                <Users
                  size={19}
                />
              }
            />

            <InfoCard
              label="Industry"
              value={study.industry}
              icon={
                <Layers3
                  size={19}
                />
              }
            />

            <InfoCard
              label="Engagement"
              value={study.duration}
              icon={
                <Workflow
                  size={19}
                />
              }
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          STICKY TABS
      ===================================================== */}

      <nav
        aria-label="Case study sections"
        className="sticky top-0 z-40 mt-12 border-b border-[#E5E1F5] bg-white/95 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-[1520px] gap-1 overflow-x-auto px-6 sm:px-10 lg:px-16">
          {TABS.map((tab) => {
            const isActive =
              active === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() =>
                  handleTabClick(
                    tab.id
                  )
                }
                className={`relative shrink-0 px-4 py-4 text-sm font-semibold transition-colors duration-200 sm:px-5 ${
                  isActive
                    ? "text-[#4F3FE0]"
                    : "text-slate-500 hover:text-[#1B2560]"
                }`}
              >
                {tab.label}

                <span
                  aria-hidden="true"
                  className={`absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-[#4F3FE0] transition-all duration-300 sm:left-5 sm:right-5 ${
                    isActive
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </nav>

      {/* =====================================================
          CLIENT
      ===================================================== */}

      <section
        id="client"
        className="scroll-mt-28 py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <SectionNumber
                number="01"
                label="Client"
              />

              <h2 className="mt-5 text-[36px] font-medium leading-tight lg:text-[48px]">
                Modernization built around the business
              </h2>
            </div>

            <div>
              <p className="text-[18px] leading-[1.9] text-slate-600">
                {study.overview}
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <InfoCard
                  label="Client"
                  value={study.client}
                />

                <InfoCard
                  label="Industry"
                  value={study.industry}
                />

                <InfoCard
                  label="Duration"
                  value={study.duration}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CHALLENGE
      ===================================================== */}

      <section
        id="challenge"
        className="scroll-mt-28 bg-[#08070F] py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <SectionNumber
                number="02"
                label="Challenge"
                dark
              />

              <h2 className="mt-5 text-[36px] font-medium leading-tight text-white lg:text-[48px]">
                Complex legacy environments need a controlled path forward
              </h2>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 lg:p-12">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4F3FE0] text-white">
                <Target
                  size={23}
                />
              </div>

              <p className="mt-7 text-[18px] leading-[1.9] text-white/65">
                {study.challenge}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          APPROACH
      ===================================================== */}

      <section
        id="approach"
        className="scroll-mt-28 py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
          <SectionNumber
            number="03"
            label="Approach"
          />

          <h2 className="mt-5 max-w-4xl text-[38px] font-medium leading-tight lg:text-[52px]">
            Assess first. Design carefully. Migrate in controlled waves.
          </h2>

          <div className="mt-14 rounded-[30px] bg-[#F5F3FC] p-8 lg:p-12">
            <div className="flex flex-col gap-7 lg:flex-row">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#4F3FE0] text-white">
                <ServerCog
                  size={25}
                />
              </div>

              <p className="max-w-5xl text-[18px] leading-[1.9] text-slate-600">
                {study.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MIGRATION JOURNEY
      ===================================================== */}

      <section className="border-y border-[#E8E5F3] bg-[#FBFAFE] py-24 lg:py-32">
        <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
          <SectionNumber
            number="04"
            label="Migration Journey"
          />

          <h2 className="mt-5 max-w-4xl text-[38px] font-medium leading-tight lg:text-[50px]">
            A structured journey from legacy platform to modern service management
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {study.phases.map(
              (phase) => (
                <div
                  key={phase.number}
                  className="group rounded-[24px] border border-[#E5E1F5] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <span className="text-[12px] font-bold tracking-[0.15em] text-[#A48FEA]">
                    {phase.number}
                  </span>

                  <h3 className="mt-12 text-[22px] font-semibold text-[#1B2560]">
                    {phase.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-slate-500">
                    {phase.body}
                  </p>

                  <div className="mt-8 flex h-9 w-9 items-center justify-center rounded-full bg-[#F1EEFC] text-[#4F3FE0] transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight
                      size={16}
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          SOLUTION
      ===================================================== */}

      <section
        id="solution"
        className="scroll-mt-28 py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <SectionNumber
                number="05"
                label="Solution"
              />

              <h2 className="mt-5 text-[38px] font-medium leading-tight lg:text-[50px]">
                Modern capabilities without losing critical business processes
              </h2>
            </div>

            <div>
              <p className="text-[18px] leading-[1.9] text-slate-600">
                {study.solution}
              </p>

              <div className="mt-10 rounded-[26px] bg-[#F5F3FC] p-8">
                <div className="flex gap-4">
                  <GitBranch
                    size={23}
                    className="mt-1 shrink-0 text-[#4F3FE0]"
                  />

                  <p className="text-[15px] leading-7 text-slate-600">
                    {study.migration}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section className="bg-[#08070F] py-24 lg:py-32">
        <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
          <SectionNumber
            number="06"
            label="Capabilities"
            dark
          />

          <h2 className="mt-5 max-w-3xl text-[38px] font-medium leading-tight text-white lg:text-[50px]">
            What Starfii delivered
          </h2>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {study.capabilities.map(
              (item, index) => (
                <div
                  key={item}
                  className="group flex items-center gap-4 rounded-[20px] border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#A48FEA]/50 hover:bg-white/[0.08]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#4F3FE0] text-[11px] font-bold text-white">
                    {String(
                      index + 1
                    ).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <span className="text-[15px] font-medium text-white/75">
                    {item}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          RESULTS
      ===================================================== */}

      <section
        id="results"
        className="scroll-mt-28 py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
          <SectionNumber
            number="07"
            label="Impact"
          />

          <h2 className="mt-5 max-w-4xl text-[38px] font-medium leading-tight lg:text-[50px]">
            Modernization measured by business outcomes
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {study.stats.map(
              (stat) => (
                <div
                  key={stat.label}
                  className="rounded-[28px] border border-[#E5E1F5] bg-white p-8 lg:p-10"
                >
                  <p className="text-[54px] font-semibold tracking-tight text-[#4F3FE0] lg:text-[64px]">
                    {stat.value}
                  </p>

                  <div className="mt-5 h-px w-10 bg-[#A48FEA]" />

                  <p className="mt-5 max-w-xs text-[14px] leading-6 text-slate-500">
                    {stat.label}
                  </p>
                </div>
              )
            )}
          </div>

          <div className="mt-10 rounded-[28px] bg-[#F5F3FC] p-8 lg:p-12">
            <div className="flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#4F3FE0] text-white">
                <CheckCircle2
                  size={23}
                />
              </div>

              <p className="text-[18px] leading-[1.9] text-slate-600">
                {study.results}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section
        id="benefits"
        className="scroll-mt-28 border-y border-[#E8E5F3] bg-[#FBFAFE] py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <SectionNumber
                number="08"
                label="Benefits"
              />

              <h2 className="mt-5 text-[38px] font-medium leading-tight lg:text-[48px]">
                Business value that continues after go live
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {study.benefits.map(
                (benefit) => (
                  <div
                    key={benefit}
                    className="flex gap-4 rounded-[20px] border border-[#E5E1F5] bg-white p-6"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-[#4F3FE0]"
                    />

                    <span className="text-[14px] leading-6 text-slate-600">
                      {benefit}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY
      ===================================================== */}

      <section
        id="technology"
        className="scroll-mt-28 py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
          <SectionNumber
            number="09"
            label="Technology"
          />

          <div className="mt-5 flex items-end justify-between gap-8">
            <h2 className="max-w-4xl text-[38px] font-medium leading-tight lg:text-[50px]">
              Technology designed around the modernization outcome
            </h2>

            <Network
              size={48}
              strokeWidth={1.2}
              className="hidden text-[#A48FEA] lg:block"
            />
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {study.technologies.map(
              (technology) => (
                <div
                  key={technology}
                  className="rounded-[20px] border border-[#E5E1F5] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#A48FEA] hover:shadow-lg"
                >
                  <Database
                    size={21}
                    className="text-[#4F3FE0]"
                  />

                  <p className="mt-5 text-[14px] font-semibold leading-6">
                    {technology}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          VALIDATION
      ===================================================== */}

      <section className="bg-[#F5F3FC] py-24 lg:py-32">
        <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              icon={
                <TestTube2
                  size={24}
                />
              }
              title="Testing & Validation"
              body="Validate data, workflows, integrations, permissions, and business scenarios before production."
            />

            <FeatureCard
              icon={
                <ShieldCheck
                  size={24}
                />
              }
              title="Risk Control"
              body="Use phased migration, reconciliation, rollback planning, and controlled cutover to reduce operational risk."
            />

            <FeatureCard
              icon={
                <Workflow
                  size={24}
                />
              }
              title="Continuous Improvement"
              body="Continue optimizing workflows, integrations, service catalogs, and platform capabilities after go live."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          PREVIOUS / NEXT
      ===================================================== */}

      {(previousStudy ||
        nextStudy) && (
        <section className="border-t border-[#E8E5F3] py-16">
          <div className="mx-auto grid max-w-[1400px] gap-5 px-6 sm:px-10 md:grid-cols-2 lg:px-16">
            {previousStudy ? (
              <Link
                href={`/services/itsm-migration/casestudies/${previousStudy.slug}`}
                className="group rounded-[24px] border border-[#E5E1F5] p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#4F3FE0]">
                  <ArrowLeft
                    size={15}
                  />

                  Previous Case Study
                </div>

                <h3 className="mt-5 text-xl font-semibold leading-snug text-[#1B2560]">
                  {previousStudy.title}
                </h3>

                <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500">
                  {previousStudy.body}
                </p>
              </Link>
            ) : (
              <div />
            )}

            {nextStudy ? (
              <Link
                href={`/services/itsm-migration/casestudies/${nextStudy.slug}`}
                className="group rounded-[24px] border border-[#E5E1F5] p-6 text-right transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center justify-end gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#4F3FE0]">
                  Next Case Study

                  <ArrowRight
                    size={15}
                  />
                </div>

                <h3 className="mt-5 text-xl font-semibold leading-snug text-[#1B2560]">
                  {nextStudy.title}
                </h3>

                <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500">
                  {nextStudy.body}
                </p>
              </Link>
            ) : null}
          </div>
        </section>
      )}

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
          <div className="relative overflow-hidden rounded-[36px] bg-[#1B2560] px-8 py-16 text-center sm:px-16 lg:py-24">
            <div className="absolute -right-20 -top-32 h-[420px] w-[420px] rounded-full bg-[#A48FEA]/25 blur-[90px]" />

            <div className="absolute -bottom-40 -left-20 h-[400px] w-[400px] rounded-full bg-[#4F3FE0]/30 blur-[100px]" />

            <div className="relative">
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#A48FEA]">
                ITSM Migration & Transformation
              </p>

              <h2 className="mx-auto mt-5 max-w-4xl text-[38px] font-medium leading-tight text-white lg:text-[56px]">
                Ready to modernize your ITSM environment?
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-8 text-white/65">
                Start with a structured assessment and build a migration roadmap that protects your people, processes, data, and business operations.
              </p>

              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <Link
                  href="/services/itsm-migration"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-[14px] font-semibold text-[#1B2560] transition-all hover:-translate-y-1"
                >
                  Explore ITSM Migration

                  <ArrowUpRight
                    size={17}
                  />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-[14px] font-semibold text-white transition-all hover:-translate-y-1 hover:bg-white/10"
                >
                  Talk to Starfii

                  <ArrowUpRight
                    size={17}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ============================================================
   COMPONENTS
============================================================ */

function SectionNumber({
  number,
  label,
  dark = false,
}: {
  number: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.18em] ${
        dark
          ? "text-[#A48FEA]"
          : "text-[#4F3FE0]"
      }`}
    >
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-full text-[11px] ${
          dark
            ? "bg-white/10 text-white"
            : "bg-[#F1EEFC] text-[#4F3FE0]"
        }`}
      >
        {number}
      </span>

      <span>{label}</span>
    </div>
  );
}

function InfoCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4 rounded-[20px] bg-[#F8F7FC] p-5">
      {icon && (
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#4F3FE0] shadow-sm">
          {icon}
        </div>
      )}

      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
          {label}
        </p>

        <p className="mt-1 text-[14px] font-semibold leading-6 text-[#1B2560]">
          {value}
        </p>
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-[26px] border border-[#E5E1F5] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F1EEFC] text-[#4F3FE0]">
        {icon}
      </div>

      <h3 className="mt-7 text-[21px] font-semibold text-[#1B2560]">
        {title}
      </h3>

      <p className="mt-4 text-[14px] leading-7 text-slate-500">
        {body}
      </p>
    </div>
  );
}
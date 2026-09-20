"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import type { CaseStudy } from "./casestudies/data/case-studies";

type CaseStudyTabsProps = {
  study: CaseStudy;
  previousStudy?: CaseStudy;
  nextStudy?: CaseStudy;
};

/* ============================================================
   ROUTES
============================================================ */

const INSURANCE_URL = "/industries/insurencee";
const CASE_STUDY_BASE = `${INSURANCE_URL}/casestudies`;

/* ============================================================
   TYPE SCALE (same as Banking / Cloud / Data & Analytics)
============================================================ */

const SECTION_HEADING =
  "font-heading font-medium leading-[1.15] text-[34px] sm:text-[40px] lg:text-[46px] text-[#0b1747]";
const SUB_HEADING =
  "font-heading font-semibold leading-snug text-[20px] sm:text-[22px] text-[#0b1747]";
const BODY = "font-body text-[17px] leading-relaxed text-[#0b1747] lg:text-[18px]";

const TABS = [
  { id: "client", label: "Client" },
  { id: "challenge", label: "Challenge" },
  { id: "solution", label: "The Starfii Solution" },
  { id: "benefits", label: "Benefits" },
  { id: "summary", label: "Summary" },
];

/* ============================================================
   HELPERS
============================================================ */

// Data points are written as "Lead: explanation". Split them so the
// lead can be shown as a small bold heading.
function splitLead(text: string): { lead: string; rest: string } {
  const i = text.indexOf(": ");
  if (i === -1) return { lead: "", rest: text };
  return { lead: text.slice(0, i), rest: text.slice(i + 2) };
}

/* ============================================================
   SMALL BUILDING BLOCKS
============================================================ */

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className={SECTION_HEADING}>{children}</h2>;
}

function Paragraphs({
  items,
  className = "mt-6",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <div className={`${className} space-y-5`}>
      {items.map((p, i) => (
        <p key={i} className={BODY}>
          {p}
        </p>
      ))}
    </div>
  );
}

function TextCard({ text }: { text: string }) {
  return (
    <div className="mt-3 rounded-2xl bg-white px-8 py-6">
      <p className={BODY}>{text}</p>
    </div>
  );
}

function PointCard({ text }: { text: string }) {
  const { lead, rest } = splitLead(text);
  return (
    <div className="rounded-2xl bg-white px-8 py-6">
      {lead && (
        <p className="font-heading text-[18px] font-semibold leading-snug text-[#0b1747] lg:text-[19px]">
          {lead}
        </p>
      )}
      <p
        className={`font-body text-[16px] leading-relaxed text-slate-600 lg:text-[17px] ${
          lead ? "mt-2" : ""
        }`}
      >
        {rest}
      </p>
    </div>
  );
}

function Breadcrumb({ title }: { title: string }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="font-body flex flex-wrap items-center gap-2 text-[14px] font-medium text-[#0b1747]"
    >
      <Link href="/" className="hover:text-[#3a3ff0]">
        Home
      </Link>
      <ChevronRight className="h-3.5 w-3.5" />
      <Link href="/industries" className="hover:text-[#3a3ff0]">
        Industries
      </Link>
      <ChevronRight className="h-3.5 w-3.5" />
      <Link href={INSURANCE_URL} className="hover:text-[#3a3ff0]">
        Insurance
      </Link>
      <ChevronRight className="h-3.5 w-3.5" />
      <span aria-current="page">{title}</span>
    </nav>
  );
}

function Sidebar({ study }: { study: CaseStudy }) {
  return (
    <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
      <div className="rounded-2xl bg-white p-6">
        <h2 className={SUB_HEADING}>At a glance</h2>

        <dl className="mt-5 space-y-4">
          <div>
            <dt className="font-body text-[14px] text-slate-500">Client</dt>
            <dd className="font-body mt-0.5 text-[16px] font-medium text-[#0b1747]">
              {study.client}
            </dd>
          </div>
          <div>
            <dt className="font-body text-[14px] text-slate-500">Industry</dt>
            <dd className="font-body mt-0.5 text-[16px] font-medium text-[#0b1747]">
              {study.industry}
            </dd>
          </div>
          <div>
            <dt className="font-body text-[14px] text-slate-500">Focus area</dt>
            <dd className="font-body mt-0.5 text-[16px] font-medium text-[#0b1747]">
              {study.category}
            </dd>
          </div>
          <div>
            <dt className="font-body text-[14px] text-slate-500">Services</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {study.services.map((s) => (
                <span
                  key={s}
                  className="font-body rounded-full bg-[#ecedfa] px-3 py-1 text-[14px] font-medium text-[#4b3fe0]"
                >
                  {s}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </div>

      <div className="rounded-2xl bg-white p-6">
        <h2 className={SUB_HEADING}>Headline results</h2>
        <div className="mt-4 space-y-4">
          {study.results.slice(0, 3).map((r) => (
            <div key={r.label} className="flex items-baseline gap-3">
              <span className="font-heading min-w-[88px] shrink-0 text-[24px] font-medium text-[#3a3ff0]">
                {r.metric}
              </span>
              <span className="font-body text-[14px] leading-snug text-slate-600">
                {r.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl bg-[#0b1747] p-6">
        <h2 className="font-heading text-[20px] font-semibold leading-snug text-white sm:text-[22px]">
          Want results like these?
        </h2>
        <p className="font-body mt-1.5 text-[15px] text-slate-300">
          Schedule some 1 on 1 time with our insurance experts.
        </p>
        <Link
          href={`${INSURANCE_URL}#connect`}
          className="font-body mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-white px-5 py-3 text-[15px] font-semibold text-[#0b1747] transition-colors hover:bg-[#ecedfa]"
        >
          Book a Meeting
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </aside>
  );
}

/* ============================================================
   STICKY TABS NAV
============================================================ */

function TabsNav({ active, onClick }: { active: string; onClick: (id: string) => void }) {
  return (
    <nav
      aria-label="Case study sections"
      className="sticky top-0 z-30 -mt-4 bg-[#eef0f5] pb-4 pt-4"
    >
      <div className="flex items-center gap-1 overflow-x-auto rounded-2xl bg-white p-2 [&::-webkit-scrollbar]:hidden md:justify-between">
        {TABS.map((tab) => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onClick(tab.id)}
              aria-current={isActive ? "true" : undefined}
              className={`font-body shrink-0 rounded-xl px-5 py-3 text-[16px] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4b4bf0] md:px-8 ${
                isActive
                  ? "bg-[#ecedfa] font-semibold text-[#4b3fe0]"
                  : "font-normal text-[#0b1747] hover:bg-slate-50"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

/* ============================================================
   MAIN COMPONENT
============================================================ */

export default function CaseStudyTabs({
  study,
  previousStudy,
  nextStudy,
}: CaseStudyTabsProps) {
  const [active, setActive] = useState("client");

  useEffect(() => {
    const sections = TABS.map((t) => document.getElementById(t.id)).filter(
      (el): el is HTMLElement => !!el
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleTabClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 104;
    window.scrollTo({ top: y, behavior: "smooth" });
    setActive(id);
  };

  return (
    <main className="bg-[#eef0f5]">
      {/* HERO */}
      <section className="bg-gradient-to-b from-[#cfe3f2] via-[#e1ecf6] to-[#eef0f5] pb-10 pt-28 sm:pt-32">
        <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
          <Breadcrumb title={study.title} />

          <div className="mt-8 grid grid-cols-1 overflow-hidden rounded-3xl bg-white lg:grid-cols-[1fr_36%]">
            <div className="p-8 sm:p-12">
              <p className="font-body text-[16px] font-semibold text-[#1a7cff] sm:text-[18px]">
                Case Study
              </p>

              <h1 className="font-heading mt-6 max-w-3xl text-[32px] font-medium leading-[1.1] tracking-[-0.025em] text-[#0b1747] sm:text-[38px] lg:text-[44px] xl:text-[48px]">
                {study.title}
              </h1>

              <p className="font-body mt-8 max-w-2xl text-[17px] leading-relaxed text-slate-600 lg:text-[18px]">
                {study.cardDescription}
              </p>
            </div>

            <div className="relative min-h-[260px] lg:min-h-[520px]">
              <img
                src={study.image}
                alt={study.title}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BODY: tabs + content on the left, sidebar on the right */}
      <div className="mx-auto max-w-[1520px] px-6 pb-24 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
          <div className="min-w-0">
            <TabsNav active={active} onClick={handleTabClick} />

            <div className="mt-10">
              {/* Client */}
              <section id="client" className="scroll-mt-28">
                <SectionHeading>Client</SectionHeading>
                <h3 className={`${SUB_HEADING} mt-6`}>{study.overview}</h3>
                <Paragraphs items={[study.clientOverview]} className="mt-4" />

                <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
                  <div>
                    <p className="font-heading text-[28px] font-medium leading-tight text-[#3a3ff0] lg:text-[32px]">
                      {study.industry}
                    </p>
                    <p className="font-body mt-2 text-[17px] leading-relaxed text-[#0b1747] lg:text-[18px]">
                      Industry
                    </p>
                  </div>

                  <div>
                    <p className="font-heading text-[28px] font-medium leading-tight text-[#3a3ff0] lg:text-[32px]">
                      {study.category}
                    </p>
                    <p className="font-body mt-2 text-[17px] leading-relaxed text-[#0b1747] lg:text-[18px]">
                      Focus area
                    </p>
                  </div>

                  <div>
                    <p className="font-heading text-[28px] font-medium leading-tight text-[#3a3ff0] lg:text-[32px]">
                      {study.services.length} services
                    </p>
                    <p className="font-body mt-2 text-[17px] leading-relaxed text-[#0b1747] lg:text-[18px]">
                      Services
                    </p>
                  </div>
                </div>
              </section>

              {/* Challenge */}
              <section id="challenge" className="mt-20 scroll-mt-28">
                <SectionHeading>Challenge</SectionHeading>
                <h3 className={`${SUB_HEADING} mt-6`}>{study.challengeIntro}</h3>
                <Paragraphs items={[study.subtitle]} className="mt-4" />

                <div className="mt-6 grid grid-cols-1 gap-4">
                  {study.challengePoints.map((point) => (
                    <PointCard key={point} text={point} />
                  ))}
                </div>
              </section>

              {/* Solution */}
              <section id="solution" className="mt-20 scroll-mt-28">
                <SectionHeading>The Starfii Solution</SectionHeading>
                <h3 className={`${SUB_HEADING} mt-6`}>{study.solutionIntro}</h3>
                <Paragraphs items={[study.solutionDetail]} className="mt-4" />

                <div className="mt-6 grid grid-cols-1 gap-4">
                  {study.solution.map((point) => (
                    <PointCard key={point} text={point} />
                  ))}
                </div>
              </section>

              {/* Benefits */}
              <section id="benefits" className="mt-20 scroll-mt-28">
                <SectionHeading>Benefits</SectionHeading>
                <TextCard text={study.benefitsIntro} />

                <div className="mt-6 grid grid-cols-1 gap-4">
                  {study.benefits.map((benefit) => (
                    <PointCard key={benefit} text={benefit} />
                  ))}
                </div>
              </section>

              {/* Summary */}
              <section id="summary" className="mt-20 scroll-mt-28">
                <SectionHeading>Summary</SectionHeading>
                <Paragraphs items={[study.summary]} />

                <h2 className={`${SUB_HEADING} mt-10`}>Results</h2>
                <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {study.results.map((r) => (
                    <div key={r.label} className="rounded-2xl bg-white px-8 py-6">
                      <p className="font-heading text-[36px] font-medium leading-none text-[#3a3ff0]">
                        {r.metric}
                      </p>
                      <p className="font-body mt-3 text-[17px] leading-relaxed text-[#0b1747] lg:text-[18px]">
                        {r.label}
                      </p>
                    </div>
                  ))}
                </div>

                <h2 className={`${SUB_HEADING} mt-10`}>Services Used</h2>
                <div className="mt-3 flex flex-wrap gap-3">
                  {study.services.map((service) => (
                    <span
                      key={service}
                      className="font-body rounded-full bg-white px-5 py-2 text-[17px] text-[#0b1747] lg:text-[18px]"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <h2 className={`${SUB_HEADING} mt-10`}>Technology Used</h2>
                <div className="mt-3 flex flex-wrap gap-3">
                  {study.techStack.map((technology) => (
                    <span
                      key={technology}
                      className="font-body rounded-full bg-white px-5 py-2 text-[17px] text-[#0b1747] lg:text-[18px]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            {/* PREV / NEXT NAVIGATION */}
            <div className="mt-20 grid gap-5 md:grid-cols-2">
              {previousStudy ? (
                <Link
                  href={`${CASE_STUDY_BASE}/${previousStudy.slug}`}
                  className="group rounded-2xl bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="font-body flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#4b3fe0]">
                    <ArrowLeft size={15} />
                    Previous Case Study
                  </div>
                  <h3 className="font-heading mt-4 text-xl font-semibold leading-snug text-[#0b1747]">
                    {previousStudy.title}
                  </h3>
                  <span className="font-body mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#3a3ff0]">
                    View Case Study
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              ) : (
                <div />
              )}

              {nextStudy ? (
                <Link
                  href={`${CASE_STUDY_BASE}/${nextStudy.slug}`}
                  className="group rounded-2xl bg-white p-7 text-left transition duration-300 hover:-translate-y-1 hover:shadow-lg md:text-right"
                >
                  <div className="font-body flex items-center justify-start gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#4b3fe0] md:justify-end">
                    Next Case Study
                    <ArrowRight size={15} />
                  </div>
                  <h3 className="font-heading mt-4 text-xl font-semibold leading-snug text-[#0b1747]">
                    {nextStudy.title}
                  </h3>
                  <span className="font-body mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#3a3ff0]">
                    View Case Study
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>

          <Sidebar study={study} />
        </div>
      </div>

      {/* CLOSING CTA */}
      <section className="bg-[#0b1747] py-20">
        <div className="mx-auto max-w-[1000px] px-6 text-center sm:px-10">
          <h2 className="font-heading mt-2 text-[34px] font-medium leading-tight tracking-[-0.02em] text-white sm:text-[42px]">
            Building the future of insurance technology
          </h2>
          <p className="font-body mx-auto mt-5 max-w-2xl text-[17px] leading-8 text-slate-300">
            Explore how Starfii helps insurers modernize digital journeys,
            claims, and policy platforms with secure, data driven technology
            built for regulated environments.
          </p>
          <Link
            href={INSURANCE_URL}
            className="font-body mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#0b1747] transition duration-300 hover:-translate-y-1 hover:bg-[#ecedfa]"
          >
            Explore Insurance Solutions
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
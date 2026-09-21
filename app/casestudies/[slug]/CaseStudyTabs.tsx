"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Poppins, Inter } from "next/font/google";

import type { CaseStudy } from "../caseStudiesData";

/* ============================================================
   FONTS — loaded here so this page never falls back to Arial.
   Heading = Poppins, Body = Inter (change here if Banking uses
   a different body font).
============================================================ */

const headingFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--cs-font-heading",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--cs-font-body",
  display: "swap",
});

type CaseStudyTabsProps = {
  study: CaseStudy;
  previousStudy?: CaseStudy;
  nextStudy?: CaseStudy;
};

/* ============================================================
   ROUTES
============================================================ */

// Must match the folder name: app/casestudies/[slug]
const CASE_STUDY_BASE = "/casestudies";

/* ============================================================
   BRAND TOKENS (identical to the Banking page)
============================================================ */

const CHAMPION_BLUE = "#1B2560";
const INDIGO_CTA = "#4F3FE0";

/* ============================================================
   TYPE SCALE (identical to the Banking page)
============================================================ */

// Section headings: 34 / 40 / 46, medium, 1.15
const SECTION_HEADING =
  "font-heading font-medium leading-[1.15] text-[34px] sm:text-[40px] lg:text-[46px] text-[#1B2560]";
// Card / sub headings: 24 / 26, semibold, 1.2
const SUB_HEADING =
  "font-heading font-semibold leading-[1.2] text-[24px] sm:text-[26px] text-[#1B2560]";
// Body copy: 17 / 18, slate-600 (same as Banking Q&A + capability cards)
const BODY =
  "font-body text-[17px] leading-relaxed text-slate-600 lg:text-[18px]";
// Card body copy: 17, 1.7, slate-600 (same as Banking capability cards)
const CARD_BODY = "font-body text-[17px] leading-[1.7] text-slate-600";

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

/** Some titles/intros contain "\n" line breaks (e.g. JETT AI). Flatten for
 *  places where a single line is needed (breadcrumb, alt text, prev/next). */
function flat(text: string) {
  return text.replace(/\s*\n\s*/g, " – ");
}

/** "AI Meeting Capture: Captures meetings..." -> { lead, rest } */
function splitLead(text: string): { lead: string | null; rest: string } {
  const idx = text.indexOf(":");
  if (idx > -1 && idx < 48) {
    return { lead: text.slice(0, idx), rest: text.slice(idx + 1).trim() };
  }
  return { lead: null, rest: text };
}

/* ============================================================
   SMALL BUILDING BLOCKS
============================================================ */

function SectionHeading({ children }: { children: ReactNode }) {
  return <h2 className={SECTION_HEADING}>{children}</h2>;
}

function IntroHeading({ children }: { children: string }) {
  return (
    <h3 className={`${SUB_HEADING} mt-6 max-w-3xl whitespace-pre-line`}>
      {children}
    </h3>
  );
}

function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className="mt-6 space-y-5">
      {items.filter(Boolean).map((p, i) => (
        <p key={i} className={BODY}>
          {p}
        </p>
      ))}
    </div>
  );
}

function PointCard({ text }: { text: string }) {
  const { lead, rest } = splitLead(text);

  return (
    <div className="rounded-2xl bg-white px-6 py-4">
      {lead && (
        <p className="font-body text-[17px] font-semibold leading-[1.7] text-[#1B2560]">
          {lead}
        </p>
      )}
      <p className={`${CARD_BODY} ${lead ? "mt-1" : "font-medium"}`}>{rest}</p>
    </div>
  );
}

function PointGrid({ items }: { items: string[] }) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {items.map((item, i) => (
        <PointCard key={i} text={item} />
      ))}
    </div>
  );
}

function Breadcrumb({ title }: { title: string }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="font-body flex flex-wrap items-center gap-2 text-[14px] font-medium text-[#1B2560]"
    >
      <Link href="/" className="hover:text-[#4F3FE0]">
        Home
      </Link>
      <ChevronRight className="h-3.5 w-3.5" />
      <Link href="/insights" className="hover:text-[#4F3FE0]">
        Insights Hub
      </Link>
      <ChevronRight className="h-3.5 w-3.5" />
      <Link href="/#case-studies" className="hover:text-[#4F3FE0]">
        Case Studies
      </Link>
      <ChevronRight className="h-3.5 w-3.5" />
      <span aria-current="page">{flat(title)}</span>
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
            <dt className="font-body text-[15px] text-slate-500">Client</dt>
            <dd className="font-body mt-0.5 text-[17px] font-medium leading-[1.7] text-[#1B2560]">
              {study.client}
            </dd>
          </div>
          <div>
            <dt className="font-body text-[15px] text-slate-500">Industry</dt>
            <dd className="font-body mt-0.5 text-[17px] font-medium leading-[1.7] text-[#1B2560]">
              {study.industry}
            </dd>
          </div>
          <div>
            <dt className="font-body text-[15px] text-slate-500">Services</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {study.services.map((s) => (
                <span
                  key={s}
                  className="font-body rounded-full bg-[#F1EEFC] px-3 py-1 text-[13px] font-semibold text-[#4F3FE0]"
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
          {study.results.slice(0, 3).map((r, i) => (
            <div key={`${r.metric}-${i}`}>
              <p className="font-heading text-[24px] font-medium leading-[1.2] text-[#4F3FE0] sm:text-[26px]">
                {r.metric}
              </p>
              <p className="font-body mt-0.5 text-[15px] leading-relaxed text-slate-600">
                {r.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl bg-[#1B2560] p-6">
        <h2 className="font-heading text-[24px] font-semibold leading-[1.2] text-white sm:text-[26px]">
          Want results like these?
        </h2>
        <p className="font-body mt-1.5 text-[15px] leading-relaxed text-slate-300">
          Schedule some 1 on 1 time with our experts.
        </p>
        <Link
          href="/#contact"
          className="font-body mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-white px-5 py-3 text-[15px] font-semibold text-[#4F3FE0] transition-colors hover:bg-[#F1EEFC]"
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
              className={`font-body shrink-0 rounded-xl px-5 py-3 text-[19px] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F3FE0] sm:text-[20px] md:px-8 ${
                isActive
                  ? "bg-[#F1EEFC] font-semibold text-[#4F3FE0]"
                  : "font-normal text-[#1B2560] hover:bg-slate-50"
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
   MAIN COMPONENT — owns the entire page
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
    <main
      className={`cs-page ${headingFont.variable} ${bodyFont.variable} bg-[#eef0f5]`}
    >
      <style>{`
        .cs-page .font-heading { font-family: var(--cs-font-heading), "Poppins", sans-serif; }
        .cs-page .font-body { font-family: var(--cs-font-body), "Inter", sans-serif; }
        .cs-page { font-family: var(--cs-font-body), "Inter", sans-serif; }
      `}</style>

      {/* HERO */}
      <section className="bg-gradient-to-b from-[#cfe3f2] via-[#e1ecf6] to-[#eef0f5] pb-10 pt-28 sm:pt-32">
        <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
          <Breadcrumb title={study.title} />

          <div className="mt-8 grid grid-cols-1 overflow-hidden rounded-3xl bg-white lg:grid-cols-[1fr_36%]">
            <div className="p-8 sm:p-12">
              <p className="font-body text-[16px] font-semibold text-[#1a7cff] sm:text-[18px]">
                Case Study
                <span className="text-slate-400"> · </span>
                <span className="text-slate-500">{study.category}</span>
              </p>

              <h1 className="font-heading mt-6 max-w-3xl whitespace-pre-line text-[32px] font-medium leading-[1.1] tracking-[-0.025em] text-[#1B2560] sm:text-[38px] lg:text-[44px] xl:text-[48px]">
                {study.title}
              </h1>

              <p className="font-body mt-8 max-w-2xl text-[16px] leading-[1.7] text-slate-600 sm:text-[17px]">
                {study.subtitle}
              </p>
            </div>

            <div className="relative min-h-[260px] lg:min-h-[520px]">
              <img
                src={study.heroImage}
                alt={flat(study.title)}
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
                <Paragraphs items={[study.overview, study.clientOverview]} />

                <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
                  <div>
                    <p className="font-heading text-[24px] font-medium leading-[1.2] text-[#4F3FE0] sm:text-[26px]">
                      {study.industry}
                    </p>
                    <p className={`${BODY} mt-2`}>Industry</p>
                  </div>

                  <div>
                    <p className="font-heading text-[24px] font-medium leading-[1.2] text-[#4F3FE0] sm:text-[26px]">
                      {study.category}
                    </p>
                    <p className={`${BODY} mt-2`}>Category</p>
                  </div>

                  <div>
                    <p className="font-heading text-[24px] font-medium leading-[1.2] text-[#4F3FE0] sm:text-[26px]">
                      {study.services.length} services
                    </p>
                    <p className={`${BODY} mt-2`}>Delivered</p>
                  </div>
                </div>
              </section>

              {/* Challenge */}
              <section id="challenge" className="mt-20 scroll-mt-28">
                <SectionHeading>Challenge</SectionHeading>
                <IntroHeading>{study.challengeIntro}</IntroHeading>
                <PointGrid items={study.challengePoints} />
              </section>

              {/* Solution */}
              <section id="solution" className="mt-20 scroll-mt-28">
                <SectionHeading>The Starfii Solution</SectionHeading>
                <IntroHeading>{study.solutionIntro}</IntroHeading>
                <Paragraphs items={[study.solutionDetail]} />
                <PointGrid items={study.solution} />
              </section>

              {/* Benefits */}
              <section id="benefits" className="mt-20 scroll-mt-28">
                <SectionHeading>Benefits</SectionHeading>
                <IntroHeading>{study.benefitsIntro}</IntroHeading>
                <PointGrid items={study.benefits} />
              </section>

              {/* Summary */}
              <section id="summary" className="mt-20 scroll-mt-28">
                <SectionHeading>Summary</SectionHeading>
                <Paragraphs items={[study.summary]} />

                <h3 className={`${SUB_HEADING} mt-10`}>Results</h3>
                <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {study.results.map((r, i) => (
                    <div
                      key={`${r.metric}-${i}`}
                      className="rounded-2xl bg-white px-8 py-6"
                    >
                      <p className="font-heading text-[34px] font-medium leading-[1.15] text-[#4F3FE0] sm:text-[40px] lg:text-[46px]">
                        {r.metric}
                      </p>
                      <p className={`${BODY} mt-3`}>{r.label}</p>
                    </div>
                  ))}
                </div>

                <h3 className={`${SUB_HEADING} mt-10`}>Services Provided</h3>
                <div className="mt-3 flex flex-wrap gap-3">
                  {study.services.map((service) => (
                    <span
                      key={service}
                      className="font-body rounded-full bg-white px-5 py-2 text-[17px] text-slate-600 lg:text-[18px]"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <h3 className={`${SUB_HEADING} mt-10`}>Technology Used</h3>
                <div className="mt-3 flex flex-wrap gap-3">
                  {study.techStack.map((technology) => (
                    <span
                      key={technology}
                      className="font-body rounded-full bg-white px-5 py-2 text-[17px] text-slate-600 lg:text-[18px]"
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
                  <div className="font-body flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#4F3FE0]">
                    <ArrowLeft size={15} />
                    Previous Case Study
                  </div>
                  <h3 className="font-heading mt-4 text-[20px] font-semibold leading-snug text-[#1B2560]">
                    {flat(previousStudy.title)}
                  </h3>
                  <span className="font-body mt-5 inline-flex items-center gap-2 text-[16px] font-medium text-[#4F3FE0]">
                    View Case Study
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
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
                  <div className="font-body flex items-center justify-start gap-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#4F3FE0] md:justify-end">
                    Next Case Study
                    <ArrowRight size={15} />
                  </div>
                  <h3 className="font-heading mt-4 text-[20px] font-semibold leading-snug text-[#1B2560]">
                    {flat(nextStudy.title)}
                  </h3>
                  <span className="font-body mt-5 inline-flex items-center gap-2 text-[16px] font-medium text-[#4F3FE0]">
                    View Case Study
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
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
      <section className="bg-[#1B2560] py-20">
        <div className="mx-auto max-w-[1000px] px-6 text-center sm:px-10">
          <h2 className="font-heading mt-2 text-[34px] font-medium leading-[1.15] tracking-[-0.02em] text-white sm:text-[40px] lg:text-[46px]">
            Have a similar challenge?
          </h2>
          <p className="font-body mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-slate-300 lg:text-[18px]">
            Let&apos;s discuss how Starfii can help your team achieve results
            like these.
          </p>
          <Link
            href="/#contact"
            className="font-body mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-semibold text-[#4F3FE0] transition duration-300 hover:-translate-y-1 hover:bg-[#F1EEFC]"
          >
            Request Your POC Now
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
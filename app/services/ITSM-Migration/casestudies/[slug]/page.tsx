import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { caseStudies, getCaseStudyBySlug } from "../data/caseStudies";
import CaseStudyTabs from "../CaseStudyTabs"; // adjust path if it lives elsewhere

type Study = (typeof caseStudies)[number];

interface PageProps {
  params: Promise<{ slug: string }>;
}

/* Same type scale as the Banking page and the software product case studies */
const SECTION_HEADING =
  "font-heading font-medium leading-[1.15] text-[34px] sm:text-[40px] lg:text-[46px] text-[#0b1747]";
const SUB_HEADING =
  "font-heading font-semibold leading-snug text-[20px] sm:text-[22px] text-[#0b1747]";
const GROUP_HEADING =
  "font-heading font-semibold leading-snug text-[18px] sm:text-[20px] text-[#0b1747]";
const BODY =
  "font-body text-[17px] leading-relaxed text-[#0b1747] lg:text-[18px]";

const ITSM_PATH = "/services/itsm-migration";

/* ---------- static ITSM copy (kept from the previous page) ---------- */

const VALIDATION_GROUPS = [
  {
    title: "Testing & Validation",
    points: [
      "Validate data, workflows, integrations, permissions, and business scenarios before production.",
    ],
  },
  {
    title: "Risk Control",
    points: [
      "Use phased migration, reconciliation, rollback planning, and controlled cutover to reduce operational risk.",
    ],
  },
  {
    title: "Continuous Improvement",
    points: [
      "Continue optimizing workflows, integrations, service catalogs, and platform capabilities after go live.",
    ],
  },
];

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
    title: `${study.title} | Starfii ITSM Migration Case Study`,
    description: study.body,
  };
}

/* ---------- small building blocks ---------- */

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className={SECTION_HEADING}>{children}</h2>;
}

function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className="mt-6 space-y-5">
      {items.map((p, i) => (
        <p key={i} className={BODY}>
          {p}
        </p>
      ))}
    </div>
  );
}

/** White rounded card with a list, no bullet dots */
function BulletCard({ points }: { points: string[] }) {
  return (
    <div className="mt-3 rounded-2xl bg-white px-8 py-6">
      <ul className="font-body list-none space-y-3 text-[17px] leading-relaxed text-[#0b1747] lg:text-[18px]">
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

function GroupList({
  groups,
}: {
  groups: { title: string; points: string[] }[];
}) {
  return (
    <div className="mt-8 space-y-8">
      {groups.map((group) => (
        <div key={group.title}>
          <h2 className={SUB_HEADING}>{group.title}</h2>
          <BulletCard points={group.points} />
        </div>
      ))}
    </div>
  );
}

/* ---------- hero ---------- */

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
      <Link href="/services" className="hover:text-[#3a3ff0]">
        Services
      </Link>
      <ChevronRight className="h-3.5 w-3.5" />
      <Link href={ITSM_PATH} className="hover:text-[#3a3ff0]">
        ITSM Migration
      </Link>
      <ChevronRight className="h-3.5 w-3.5" />
      <span aria-current="page">{title}</span>
    </nav>
  );
}

/* ---------- right sidebar ---------- */

function Sidebar({ study }: { study: Study }) {
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
            <dt className="font-body text-[14px] text-slate-500">Engagement</dt>
            <dd className="font-body mt-0.5 text-[16px] font-medium text-[#0b1747]">
              {study.duration}
            </dd>
          </div>
          <div>
            <dt className="font-body text-[14px] text-slate-500">Technology</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {study.technologies.map((t: string) => (
                <span
                  key={t}
                  className="font-body rounded-full bg-[#ecedfa] px-3 py-1 text-[14px] font-medium text-[#4b3fe0]"
                >
                  {t}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </div>

      <div className="rounded-2xl bg-white p-6">
        <h2 className={SUB_HEADING}>Headline results</h2>
        <div className="mt-4 space-y-4">
          {study.stats.slice(0, 3).map((r: { value: string; label: string }) => (
            <div key={r.label} className="flex items-baseline gap-3">
              <span className="font-heading min-w-[88px] text-[24px] font-medium text-[#3a3ff0]">
                {r.value}
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
          Ready to modernize your ITSM environment?
        </h2>
        <p className="font-body mt-1.5 text-[15px] text-slate-300">
          Start with a structured assessment and build a migration roadmap that
          protects your people, processes, data, and business operations.
        </p>
        <Link
          href="/contact"
          className="font-body mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-white px-5 py-3 text-[15px] font-semibold text-[#0b1747] transition-colors hover:bg-[#ecedfa]"
        >
          Talk to Starfii
          <ArrowUpRight className="h-4 w-4" />
        </Link>
        <Link
          href={ITSM_PATH}
          className="font-body mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-white/30 px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
        >
          Explore ITSM Migration
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </aside>
  );
}

/* ---------- page ---------- */

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) notFound();

  return (
    <main className="bg-[#eef0f5]">
      {/* HERO: breadcrumb + white card (text left, image right) */}
      <section className="bg-gradient-to-b from-[#cfe3f2] via-[#e1ecf6] to-[#eef0f5] pb-10 pt-28 sm:pt-32">
        <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
          <Breadcrumb title={study.title} />

          <div className="mt-8 grid grid-cols-1 overflow-hidden rounded-3xl bg-white lg:grid-cols-[1fr_36%]">
            <div className="p-8 sm:p-12">
              <p className="font-body text-[16px] font-semibold text-[#1a7cff] sm:text-[18px]">
                Case Study
              </p>

              {/* Kept as the single h1 of the page for SEO. Change to h2 if you want it too. */}
              <h1 className="font-heading mt-6 max-w-3xl text-[32px] font-medium leading-[1.1] tracking-[-0.025em] text-[#0b1747] sm:text-[38px] lg:text-[44px] xl:text-[48px]">
                {study.title}
              </h1>

              <p className="font-body mt-8 max-w-2xl text-[17px] leading-relaxed text-slate-600 lg:text-[18px]">
                {study.body}
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
            <CaseStudyTabs />

            <div className="mt-10">
              {/* Client */}
              <section id="client" className="scroll-mt-28">
                <SectionHeading>Client</SectionHeading>
                <h2 className={`${SUB_HEADING} mt-6`}>
                  Modernization built around the business
                </h2>
                <Paragraphs items={[study.overview]} />

                <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
                  {[
                    { value: study.client, label: "Client" },
                    { value: study.industry, label: "Industry" },
                    { value: study.duration, label: "Duration" },
                  ].map((tile) => (
                    <div key={tile.label}>
                      <p className="font-heading text-[28px] font-medium leading-tight text-[#3a3ff0] lg:text-[32px]">
                        {tile.value}
                      </p>
                      <p className="font-body mt-2 text-[17px] leading-relaxed text-[#0b1747] lg:text-[18px]">
                        {tile.label}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Challenge */}
              <section id="challenge" className="mt-20 scroll-mt-28">
                <SectionHeading>Challenge</SectionHeading>
                <h2 className={`${SUB_HEADING} mt-6`}>
                  Complex legacy environments need a controlled path forward
                </h2>
                <Paragraphs items={[study.challenge]} />
              </section>

              {/* Solution (approach, solution, migration journey, capabilities) */}
              <section id="solution" className="mt-20 scroll-mt-28">
                <SectionHeading>The Starfii Solution</SectionHeading>
                <h2 className={`${SUB_HEADING} mt-6`}>
                  Assess first. Design carefully. Migrate in controlled waves.
                </h2>
                <Paragraphs items={[study.solution, study.migration]} />

                <h2 className={`${SUB_HEADING} mt-10`}>
                  A structured journey from legacy platform to modern service
                  management
                </h2>
                <div className="mt-6 space-y-8">
                  {study.phases.map(
                    (phase: { number: string; title: string; body: string }) => (
                      <div key={phase.number}>
                        <h2 className={GROUP_HEADING}>
                          {phase.number} {phase.title}
                        </h2>
                        <BulletCard points={[phase.body]} />
                      </div>
                    )
                  )}
                </div>

                <h2 className={`${SUB_HEADING} mt-10`}>What Starfii delivered</h2>
                <BulletCard points={study.capabilities} />
              </section>

              {/* Benefits */}
              <section id="benefits" className="mt-20 scroll-mt-28">
                <SectionHeading>Benefits</SectionHeading>
                <h2 className={`${SUB_HEADING} mt-6`}>
                  Business value that continues after go live
                </h2>
                <BulletCard points={study.benefits} />
                <GroupList groups={VALIDATION_GROUPS} />
              </section>

              {/* Summary */}
              <section id="summary" className="mt-20 scroll-mt-28">
                <SectionHeading>Summary</SectionHeading>
                <Paragraphs items={[study.results]} />

                <h2 className={`${SUB_HEADING} mt-10`}>
                  Modernization measured by business outcomes
                </h2>
                <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {study.stats.map(
                    (r: { value: string; label: string }, i: number) => (
                      <div
                        key={`${r.label}-${i}`}
                        className="rounded-2xl bg-white px-8 py-6"
                      >
                        <p className="font-heading text-[36px] font-medium leading-none text-[#3a3ff0]">
                          {r.value}
                        </p>
                        <p className="font-body mt-3 text-[17px] leading-relaxed text-[#0b1747] lg:text-[18px]">
                          {r.label}
                        </p>
                      </div>
                    )
                  )}
                </div>

                <h2 className={`${SUB_HEADING} mt-10`}>
                  Technology designed around the modernization outcome
                </h2>
                <div className="mt-3 flex flex-wrap gap-3">
                  {study.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="font-body rounded-full bg-white px-5 py-2 text-[17px] text-[#0b1747] lg:text-[18px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <Sidebar study={study} />
        </div>
      </div>
    </main>
  );
}
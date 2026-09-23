// import type { Metadata } from "next";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import { ArrowUpRight, ChevronRight } from "lucide-react";
// import {
//   caseStudies,
//   getCaseStudyBySlug,
//   type CaseStudy,
//   type PointGroup,
// } from "../data/case-studies";
// import CaseStudyTabs from "../CaseStudyTabs"; // adjust path if it lives elsewhere

// interface PageProps {
//   params: Promise<{ slug: string }>;
// }

// /* Same type scale as the Banking page */
// const SECTION_HEADING =
//   "font-heading font-medium leading-[1.15] text-[34px] sm:text-[40px] lg:text-[46px] text-[#0b1747]";
// const SUB_HEADING =
//   "font-heading font-semibold leading-snug text-[20px] sm:text-[22px] text-[#0b1747]";
// const BODY = "font-body text-[17px] leading-relaxed text-[#0b1747] lg:text-[18px]";

// export function generateStaticParams() {
//   return caseStudies.map((study) => ({ slug: study.slug }));
// }

// export async function generateMetadata({
//   params,
// }: PageProps): Promise<Metadata> {
//   const { slug } = await params;
//   const study = getCaseStudyBySlug(slug);

//   if (!study) return { title: "Case Study | Starfii" };

//   return {
//     title: `${study.title} | Starfii Case Study`,
//     description: study.cardDescription,
//   };
// }

// /* ---------- small building blocks ---------- */

// function SectionHeading({ children }: { children: React.ReactNode }) {
//   return <h2 className={SECTION_HEADING}>{children}</h2>;
// }

// function Paragraphs({ items }: { items: string[] }) {
//   return (
//     <div className="mt-6 space-y-5">
//       {items.map((p, i) => (
//         <p key={i} className={BODY}>
//           {p}
//         </p>
//       ))}
//     </div>
//   );
// }

// /** White rounded card with a bulleted list, used for challenges, solution and benefits */
// function BulletCard({ points }: { points: string[] }) {
//   return (
//     <div className="mt-3 rounded-2xl bg-white px-8 py-6">
//       <ul className="font-body list-none space-y-3 text-[17px] leading-relaxed text-[#0b1747] lg:text-[18px]">
//         {points.map((point, i) => (
//           <li key={i}>{point}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function GroupList({ groups }: { groups: PointGroup[] }) {
//   return (
//     <div className="mt-8 space-y-8">
//       {groups.map((group) => (
//         <div key={group.title}>
//           <h2 className={SUB_HEADING}>{group.title}</h2>
//           <BulletCard points={group.points} />
//         </div>
//       ))}
//     </div>
//   );
// }

// /* ---------- hero ---------- */

// function Breadcrumb({ title }: { title: string }) {
//   return (
//     <nav
//       aria-label="Breadcrumb"
//       className="font-body flex flex-wrap items-center gap-2 text-[14px] font-medium text-[#0b1747]"
//     >
//       <Link href="/" className="hover:text-[#3a3ff0]">
//         Home
//       </Link>
//       <ChevronRight className="h-3.5 w-3.5" />
//       <Link href="/insights" className="hover:text-[#3a3ff0]">
//         Insights Hub
//       </Link>
//       <ChevronRight className="h-3.5 w-3.5" />
//       <Link href="/case-studies" className="hover:text-[#3a3ff0]">
//         Case Studies
//       </Link>
//       <ChevronRight className="h-3.5 w-3.5" />
//       <span aria-current="page">{title}</span>
//     </nav>
//   );
// }

// /* ---------- right sidebar ---------- */

// function Sidebar({ study }: { study: CaseStudy }) {
//   return (
//     <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
//       <div className="rounded-2xl bg-white p-6">
//         <h2 className={SUB_HEADING}>At a glance</h2>

//         <dl className="mt-5 space-y-4">
//           <div>
//             <dt className="font-body text-[14px] text-slate-500">Client</dt>
//             <dd className="font-body mt-0.5 text-[16px] font-medium text-[#0b1747]">
//               {study.client}
//             </dd>
//           </div>
//           <div>
//             <dt className="font-body text-[14px] text-slate-500">Industry</dt>
//             <dd className="font-body mt-0.5 text-[16px] font-medium text-[#0b1747]">
//               {study.industry}
//             </dd>
//           </div>
//           <div>
//             <dt className="font-body text-[14px] text-slate-500">Services</dt>
//             <dd className="mt-2 flex flex-wrap gap-2">
//               {study.services.map((s) => (
//                 <span
//                   key={s}
//                   className="font-body rounded-full bg-[#ecedfa] px-3 py-1 text-[14px] font-medium text-[#4b3fe0]"
//                 >
//                   {s}
//                 </span>
//               ))}
//             </dd>
//           </div>
//         </dl>
//       </div>

//       <div className="rounded-2xl bg-white p-6">
//         <h2 className={SUB_HEADING}>Headline results</h2>
//         <div className="mt-4 space-y-4">
//           {study.results.slice(0, 3).map((r) => (
//             <div key={r.label} className="flex items-baseline gap-3">
//               <span className="font-heading min-w-[88px] text-[24px] font-medium text-[#3a3ff0]">
//                 {r.metric}
//               </span>
//               <span className="font-body text-[14px] leading-snug text-slate-600">
//                 {r.label}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="rounded-2xl bg-[#0b1747] p-6">
//         <h2 className="font-heading text-[20px] font-semibold leading-snug text-white sm:text-[22px]">
//           Want results like these?
//         </h2>
//         <p className="font-body mt-1.5 text-[15px] text-slate-300">
//           Schedule some 1 on 1 time with our experts.
//         </p>
//         <Link
//           href="/#contact"
//           className="font-body mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-white px-5 py-3 text-[15px] font-semibold text-[#0b1747] transition-colors hover:bg-[#ecedfa]"
//         >
//           Book a Meeting
//           <ArrowUpRight className="h-4 w-4" />
//         </Link>
//       </div>
//     </aside>
//   );
// }

// /* ---------- page ---------- */

// export default async function CaseStudyDetailPage({ params }: PageProps) {
//   const { slug } = await params;
//   const study = getCaseStudyBySlug(slug);

//   if (!study) notFound();

//   return (
//     <main className="bg-[#eef0f5]">
//       {/* HERO: breadcrumb + white card (text left, image right) */}
//       <section className="bg-gradient-to-b from-[#cfe3f2] via-[#e1ecf6] to-[#eef0f5] pb-10 pt-28 sm:pt-32">
//         <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
//           <Breadcrumb title={study.title} />

//           <div className="mt-8 grid grid-cols-1 overflow-hidden rounded-3xl bg-white lg:grid-cols-[1fr_36%]">
//             <div className="p-8 sm:p-12">
//               <p className="font-body text-[16px] font-semibold text-[#1a7cff] sm:text-[18px]">
//                 Case Study
//               </p>

//               {/* Kept as the single h1 of the page for SEO. Change to h2 if you want it too. */}
//               <h1 className="font-heading mt-6 max-w-3xl text-[32px] font-medium leading-[1.1] tracking-[-0.025em] text-[#0b1747] sm:text-[38px] lg:text-[44px] xl:text-[48px]">
//                 {study.title}
//               </h1>

//               <p className="font-body mt-8 max-w-2xl text-[17px] leading-relaxed text-slate-600 lg:text-[18px]">
//                 {study.subtitle}
//               </p>
//             </div>

//             <div className="relative min-h-[260px] lg:min-h-[520px]">
//               <img
//                 src={study.heroImage}
//                 alt={study.title}
//                 className="absolute inset-0 h-full w-full object-cover object-center"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* BODY: tabs + content on the left, sidebar on the right */}
//       <div className="mx-auto max-w-[1520px] px-6 pb-24 sm:px-10 lg:px-16">
//         <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
//           <div className="min-w-0">
//             <CaseStudyTabs />

//             <div className="mt-10">
//               {/* Client */}
//               <section id="client" className="scroll-mt-28">
//                 <SectionHeading>Client</SectionHeading>
//                 <Paragraphs items={study.clientParagraphs} />

//                 <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
//                   {study.clientStats.map((stat) => (
//                     <div key={stat.label}>
//                       <p className="font-heading text-[44px] font-medium leading-none text-[#3a3ff0] lg:text-[48px]">
//                         {stat.value}
//                       </p>
//                       <p className="font-body mt-2 text-[17px] leading-relaxed text-[#0b1747] lg:text-[18px]">
//                         {stat.label}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </section>

//               {/* Challenge */}
//               <section id="challenge" className="mt-20 scroll-mt-28">
//                 <SectionHeading>Challenge</SectionHeading>
//                 <Paragraphs items={study.challengeParagraphs} />

//                 <h2 className={`${SUB_HEADING} mt-8`}>Major Challenges:</h2>
//                 <BulletCard points={study.challengePoints} />
//               </section>

//               {/* Solution */}
//               <section id="solution" className="mt-20 scroll-mt-28">
//                 <SectionHeading>The Starfii Solution</SectionHeading>
//                 <Paragraphs items={study.solutionParagraphs} />
//                 <GroupList groups={study.solutionGroups} />
//               </section>

//               {/* Benefits */}
//               <section id="benefits" className="mt-20 scroll-mt-28">
//                 <SectionHeading>Benefits</SectionHeading>
//                 <GroupList groups={study.benefitsGroups} />
//               </section>

//               {/* Summary */}
//               <section id="summary" className="mt-20 scroll-mt-28">
//                 <SectionHeading>Summary</SectionHeading>
//                 <Paragraphs items={[study.summary]} />

//                 <h2 className={`${SUB_HEADING} mt-10`}>Results</h2>
//                 <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
//                   {study.results.map((r) => (
//                     <div
//                       key={r.label}
//                       className="rounded-2xl bg-white px-8 py-6"
//                     >
//                       <p className="font-heading text-[36px] font-medium leading-none text-[#3a3ff0]">
//                         {r.metric}
//                       </p>
//                       <p className="font-body mt-3 text-[17px] leading-relaxed text-[#0b1747] lg:text-[18px]">
//                         {r.label}
//                       </p>
//                     </div>
//                   ))}
//                 </div>

//                 <h2 className={`${SUB_HEADING} mt-10`}>Technology Used</h2>
//                 <div className="mt-3 flex flex-wrap gap-3">
//                   {study.techStack.map((tech) => (
//                     <span
//                       key={tech}
//                       className="font-body rounded-full bg-white px-5 py-2 text-[17px] text-[#0b1747] lg:text-[18px]"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </section>
//             </div>
//           </div>

//           <Sidebar study={study} />
//         </div>
//       </div>
//     </main>
//   );
// }



import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import {
  caseStudies,
  getCaseStudyBySlug,
  type CaseStudy,
  type PointGroup,
} from "../data/case-studies";
import CaseStudyTabs from "../CaseStudyTabs"; // adjust path if it lives elsewhere

interface PageProps {
  params: Promise<{ slug: string }>;
}

/* Same type scale as the Banking page */
const SECTION_HEADING =
  "font-heading font-medium leading-[1.15] text-[34px] sm:text-[40px] lg:text-[46px] text-[#0b1747]";
const SUB_HEADING =
  "font-heading font-semibold leading-snug text-[20px] sm:text-[22px] text-[#0b1747]";
const BODY = "font-body text-[17px] leading-relaxed text-[#0b1747] lg:text-[18px]";

const ICONS = {
  icon: [
    {
      url: "/starfii_star_flat.svg",
      type: "image/svg+xml",
      sizes: "32x32",
    },
  ],
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return {
      title: "Case Study | Starfii",
      icons: ICONS,
    };
  }

  return {
    title: `${study.title} | Starfii Case Study`,
    description: study.cardDescription,
    icons: ICONS,
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

/** White rounded card with a bulleted list, used for challenges, solution and benefits */
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

function GroupList({ groups }: { groups: PointGroup[] }) {
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
      <Link href="/insights" className="hover:text-[#3a3ff0]">
        Insights Hub
      </Link>
      <ChevronRight className="h-3.5 w-3.5" />
      <Link href="/case-studies" className="hover:text-[#3a3ff0]">
        Case Studies
      </Link>
      <ChevronRight className="h-3.5 w-3.5" />
      <span aria-current="page">{title}</span>
    </nav>
  );
}

/* ---------- right sidebar ---------- */

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
              <span className="font-heading min-w-[88px] text-[24px] font-medium text-[#3a3ff0]">
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
          Schedule some 1 on 1 time with our experts.
        </p>
        <Link
          href="/#contact"
          className="font-body mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-white px-5 py-3 text-[15px] font-semibold text-[#0b1747] transition-colors hover:bg-[#ecedfa]"
        >
          Book a Meeting
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </aside>
  );
}

/* ---------- page ---------- */

export default async function CaseStudyDetailPage({ params }: PageProps) {
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
                {study.subtitle}
              </p>
            </div>

            <div className="relative min-h-[260px] lg:min-h-[520px]">
              <img
                src={study.heroImage}
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
                <Paragraphs items={study.clientParagraphs} />

                <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
                  {study.clientStats.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-heading text-[44px] font-medium leading-none text-[#3a3ff0] lg:text-[48px]">
                        {stat.value}
                      </p>
                      <p className="font-body mt-2 text-[17px] leading-relaxed text-[#0b1747] lg:text-[18px]">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Challenge */}
              <section id="challenge" className="mt-20 scroll-mt-28">
                <SectionHeading>Challenge</SectionHeading>
                <Paragraphs items={study.challengeParagraphs} />

                <h2 className={`${SUB_HEADING} mt-8`}>Major Challenges:</h2>
                <BulletCard points={study.challengePoints} />
              </section>

              {/* Solution */}
              <section id="solution" className="mt-20 scroll-mt-28">
                <SectionHeading>The Starfii Solution</SectionHeading>
                <Paragraphs items={study.solutionParagraphs} />
                <GroupList groups={study.solutionGroups} />
              </section>

              {/* Benefits */}
              <section id="benefits" className="mt-20 scroll-mt-28">
                <SectionHeading>Benefits</SectionHeading>
                <GroupList groups={study.benefitsGroups} />
              </section>

              {/* Summary */}
              <section id="summary" className="mt-20 scroll-mt-28">
                <SectionHeading>Summary</SectionHeading>
                <Paragraphs items={[study.summary]} />

                <h2 className={`${SUB_HEADING} mt-10`}>Results</h2>
                <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {study.results.map((r) => (
                    <div
                      key={r.label}
                      className="rounded-2xl bg-white px-8 py-6"
                    >
                      <p className="font-heading text-[36px] font-medium leading-none text-[#3a3ff0]">
                        {r.metric}
                      </p>
                      <p className="font-body mt-3 text-[17px] leading-relaxed text-[#0b1747] lg:text-[18px]">
                        {r.label}
                      </p>
                    </div>
                  ))}
                </div>

                <h2 className={`${SUB_HEADING} mt-10`}>Technology Used</h2>
                <div className="mt-3 flex flex-wrap gap-3">
                  {study.techStack.map((tech) => (
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
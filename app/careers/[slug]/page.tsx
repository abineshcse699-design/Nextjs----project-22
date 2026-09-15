import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft, MapPin, Briefcase, Clock } from "lucide-react";
import { jobs, getJobBySlug } from "@/lib/jobs-data";
import ApplicationForm from "./application-form";

const T = {
  ink: "text-[#14163B]",
  inkBg: "bg-[#0C0E2A]",
  primary: "text-[#3B2FE0]",
  primaryBg: "bg-[#3B2FE0]",
  primaryHoverBg: "hover:bg-[#2E24B8]",
  muted: "text-[#5B5D78]",
  border: "border-[#E4E4EF]",
  panelBg: "bg-[#FAFAFD]",
};

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) return {};
  return {
    title: `${job.title} — Starfii Careers`,
    description: `Join Starfii as a ${job.title} and help build the next generation of technology solutions.`,
  };
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className={`text-[22px] font-semibold ${T.ink}`}>{children}</h2>
  );
}

export default async function JobDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();

  const postedDate = new Date(job.postedOn).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="min-h-screen bg-white pt-[140px] pb-24">
      <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
        {/* Back link */}
        <Link
          href="/careers/jobs"
          className={`inline-flex items-center gap-1.5 text-[14px] font-semibold ${T.muted} hover:${T.ink} transition-colors`}
        >
          <ArrowLeft size={15} />
          Back to all roles
        </Link>

        {/* Header */}
        <div className="mt-6 flex flex-col gap-6 border-b border-[#E4E4EF] pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className={`text-[13px] font-semibold ${T.primary}`}>{job.department}</p>
            <h1 className={`mt-2 text-[32px] font-semibold leading-tight ${T.ink} sm:text-[38px]`}>
              {job.title}
            </h1>
            <div className={`mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px] ${T.muted}`}>
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={15} strokeWidth={2} />
                {job.location} · {job.mode}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Briefcase size={15} strokeWidth={2} />
                {job.type}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={15} strokeWidth={2} />
                Posted {postedDate}
              </span>
            </div>
          </div>

          <a
            href="#apply"
            className={`inline-flex shrink-0 items-center gap-1.5 rounded-md px-6 py-3 text-[15px] font-semibold text-white transition-colors ${T.primaryBg} ${T.primaryHoverBg}`}
          >
            Apply now
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="mt-12 flex flex-col-reverse gap-10 lg:grid lg:grid-cols-[1fr_320px] lg:gap-16">
          {/* Main content */}
          <div className="space-y-12">
            {/* 1. Job overview */}
            <section>
              <SectionHeading>Job overview</SectionHeading>
              <p className={`mt-4 text-[15.5px] leading-relaxed ${T.muted}`}>{job.overview}</p>
            </section>

            {/* 2. Responsibilities */}
            <section>
              <SectionHeading>Responsibilities</SectionHeading>
              <ul className="mt-4 space-y-3">
                {job.responsibilities.map((item) => (
                  <li key={item} className={`flex gap-3 text-[15px] leading-relaxed ${T.ink}`}>
                    <span className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${T.primaryBg}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* 3. Requirements */}
            <section>
              <SectionHeading>Requirements</SectionHeading>
              <ul className="mt-4 space-y-3">
                {job.requirements.map((item) => (
                  <li key={item} className={`flex gap-3 text-[15px] leading-relaxed ${T.ink}`}>
                    <span className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${T.primaryBg}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* 4. Nice-to-have skills */}
            <section>
              <SectionHeading>Nice-to-have skills</SectionHeading>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {job.niceToHave.map((item) => (
                  <span
                    key={item}
                    className={`rounded-md ${T.panelBg} border ${T.border} px-3.5 py-2 text-[13.5px] font-medium ${T.ink}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>

            {/* 5. Benefits */}
            <section>
              <SectionHeading>Benefits</SectionHeading>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {job.benefits.map((item) => (
                  <div
                    key={item}
                    className={`rounded-lg border ${T.border} px-4 py-3.5 text-[14.5px] ${T.ink}`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Hiring process */}
            <section>
              <SectionHeading>Hiring process</SectionHeading>
              <ol className="mt-5 space-y-6">
                {job.hiringProcess.map((step, i) => (
                  <li key={step.step} className="flex gap-4">
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${T.inkBg} text-[13px] font-semibold text-white`}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <h3 className={`text-[15.5px] font-semibold ${T.ink}`}>{step.step}</h3>
                      <p className={`mt-1 text-[14px] leading-relaxed ${T.muted}`}>{step.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* 7. Application form */}
            <section id="apply" className="scroll-mt-[120px]">
              <SectionHeading>Application form</SectionHeading>
              <p className={`mt-3 text-[14.5px] ${T.muted}`}>
                Applying for <span className={`font-semibold ${T.ink}`}>{job.title}</span>. It takes about five minutes.
              </p>
              <div className="mt-6">
                <ApplicationForm jobTitle={job.title} />
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-[140px] lg:self-start">
            <div className={`rounded-lg border ${T.border} p-6`}>
              <h3 className={`text-[13px] font-semibold uppercase tracking-[0.06em] ${T.muted}`}>
                At a glance
              </h3>
              <dl className="mt-4 space-y-4 text-[14px]">
                <div>
                  <dt className={`text-[12.5px] ${T.muted}`}>Department</dt>
                  <dd className={`mt-1 font-medium ${T.ink}`}>{job.department}</dd>
                </div>
                <div>
                  <dt className={`text-[12.5px] ${T.muted}`}>Location</dt>
                  <dd className={`mt-1 font-medium ${T.ink}`}>{job.location}</dd>
                </div>
                <div>
                  <dt className={`text-[12.5px] ${T.muted}`}>Work mode</dt>
                  <dd className={`mt-1 font-medium ${T.ink}`}>{job.mode}</dd>
                </div>
                <div>
                  <dt className={`text-[12.5px] ${T.muted}`}>Type</dt>
                  <dd className={`mt-1 font-medium ${T.ink}`}>{job.type}</dd>
                </div>
              </dl>
              <a
                href="#apply"
                className={`mt-6 flex w-full items-center justify-center gap-1.5 rounded-md px-5 py-3 text-[14.5px] font-semibold text-white transition-colors ${T.primaryBg} ${T.primaryHoverBg}`}
              >
                Apply now
                <ArrowUpRight size={15} />
              </a>
            </div>

            <div className={`mt-6 rounded-lg ${T.inkBg} p-6 text-white`}>
              <h3 className="text-[15.5px] font-semibold">Share this role</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-white/70">
                Know someone who'd be a great fit? Send them this page.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
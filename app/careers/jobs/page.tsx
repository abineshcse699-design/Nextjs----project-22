import Link from "next/link";
import { ArrowUpRight, MapPin, Briefcase } from "lucide-react";
import { jobs } from "@/lib/jobs-data";

const T = {
  ink: "text-[#14163B]",
  inkBg: "bg-[#0C0E2A]",
  primary: "text-[#3B2FE0]",
  primaryBg: "bg-[#3B2FE0]",
  muted: "text-[#5B5D78]",
  border: "border-[#E4E4EF]",
  panelBg: "bg-[#FAFAFD]",
};

export const metadata = {
  title: "Jobs Portal — Starfii",
  description: "Open roles at Starfii. Find your next role and help build the next generation of technology solutions.",
};

export default function JobsPortalPage() {
  return (
    <main className="min-h-screen bg-white pt-[140px] pb-24">
      <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="max-w-2xl">
          <p className={`text-[13px] font-semibold ${T.primary}`}>Jobs Portal</p>
          <h1 className={`mt-3 text-[36px] font-semibold leading-tight ${T.ink} sm:text-[44px]`}>
            Own your game with Starfii
          </h1>
          <p className={`mt-4 text-[16px] leading-relaxed ${T.muted}`}>
            {jobs.length} open roles right now. Every position below moves fast —
            here's exactly what to expect once you apply.
          </p>
        </div>

        {/* Job list */}
        <div className={`mt-12 divide-y ${T.border} border-t border-b ${T.border}`}>
          {jobs.map((job) => (
            <Link
              key={job.slug}
              href={`/careers/${job.slug}`}
              className="group flex flex-col gap-3 py-7 transition-colors sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex-1">
                <h2 className={`text-[19px] font-semibold ${T.ink} transition-colors group-hover:${T.primary}`}>
                  {job.title}
                </h2>
                <p className={`mt-1.5 text-[14.5px] leading-relaxed ${T.muted} max-w-xl`}>
                  {job.summary}
                </p>
                <div className={`mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[13.5px] ${T.muted}`}>
                  <span className="inline-flex items-center gap-1.5">
                    <Briefcase size={14} strokeWidth={2} />
                    {job.department}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={14} strokeWidth={2} />
                    {job.location}
                  </span>
                  <span>{job.type}</span>
                </div>
              </div>

              <span
                className={`inline-flex shrink-0 items-center gap-1.5 self-start rounded-md border ${T.border} px-4 py-2.5 text-[14px] font-semibold ${T.ink} transition-colors group-hover:${T.primaryBg} group-hover:text-white group-hover:border-transparent sm:self-center`}
              >
                View role
                <ArrowUpRight size={15} />
              </span>
            </Link>
          ))}
        </div>

        {/* Footer note */}
        <div className={`mt-12 rounded-lg ${T.panelBg} border ${T.border} p-6 text-center`}>
          <p className={`text-[14.5px] ${T.muted}`}>
            Don't see the right fit? We're always open to hearing from strong candidates.{" "}
            <a href="mailto:careers@starfii.com" className={`font-semibold ${T.primary}`}>
              Write to us
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
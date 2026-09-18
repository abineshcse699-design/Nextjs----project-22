"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import {
  Search,
  ChevronDown,
  ChevronRight,
  Star,
  TrendingUp,
  List,
  Map as MapIcon,
  ArrowUpDown,
  X,
} from "lucide-react";

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

type Job = {
  slug: string;
  title: string;
  summary: string;
  department: string;
  location: string;
  mode: string;
  type: string;
  postedOn: string;
};

const DAY = 86_400_000;
const TRENDING_WINDOW = 7 * DAY;
const NEW_WINDOW = 30 * DAY;

const DATE_FILTERS = [
  { id: "any", label: "Any time" },
  { id: "7", label: "Last 7 days" },
  { id: "30", label: "Last 30 days" },
  { id: "90", label: "Last 3 months" },
] as const;

type DateFilter = (typeof DATE_FILTERS)[number]["id"];

function formatPosted(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });
}

/* ------------------------------------------------------------------ */
/* Dropdown                                                            */
/* ------------------------------------------------------------------ */

function Dropdown({
  label,
  active,
  children,
}: {
  label: string;
  active: boolean;
  children: (close: () => void) => React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className="relative"
      onBlur={(e) => {
        if (!ref.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13.5px] font-semibold transition-colors ${
          active
            ? `border-[#3B2FE0] ${T.primary} bg-[#3B2FE0]/[0.06]`
            : `${T.border} ${T.ink} hover:border-[#3B2FE0]`
        }`}
      >
        {label}
        <ChevronDown
          size={14}
          strokeWidth={2.5}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          className={`absolute left-0 top-[calc(100%+8px)] z-30 max-h-[300px] w-[240px] overflow-y-auto rounded-lg border ${T.border} bg-white p-2 shadow-[0_12px_32px_rgba(20,22,59,0.12)]`}
        >
          {children(() => setOpen(false))}
        </div>
      )}
    </div>
  );
}

function OptionRow({
  children,
  selected,
  onClick,
}: {
  children: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-[13.5px] transition-colors hover:bg-[#FAFAFD] ${
        selected ? `font-semibold ${T.primary}` : T.ink
      }`}
    >
      <span className="truncate">{children}</span>
      {selected && <span className={`ml-2 h-1.5 w-1.5 shrink-0 rounded-full ${T.primaryBg}`} />}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Portal                                                              */
/* ------------------------------------------------------------------ */

export default function JobsPortal({ jobs, now }: { jobs: Job[]; now: number }) {
  const [keyword, setKeyword] = useState("");
  const [place, setPlace] = useState("");
  const [tab, setTab] = useState<"all" | "new">("all");
  const [location, setLocation] = useState("all");
  const [dateFilter, setDateFilter] = useState<DateFilter>("any");
  const [sort, setSort] = useState<"relevance" | "newest">("relevance");
  const [view, setView] = useState<"list" | "grouped">("list");
  const [saved, setSaved] = useState<string[]>([]);
  const [searched, setSearched] = useState(false);

  // Results stay hidden until the person actually searches or picks a filter.
  const showResults = searched || location !== "all" || dateFilter !== "any";

  const locations = useMemo(
    () => Array.from(new Set(jobs.map((j) => j.location))).sort(),
    [jobs]
  );

  const newCount = useMemo(
    () => jobs.filter((j) => now - new Date(j.postedOn).getTime() <= NEW_WINDOW).length,
    [jobs, now]
  );

  const results = useMemo(() => {
    const k = keyword.trim().toLowerCase();
    const p = place.trim().toLowerCase();

    let out = jobs.filter((job) => {
      const age = now - new Date(job.postedOn).getTime();

      if (tab === "new" && age > NEW_WINDOW) return false;
      if (location !== "all" && job.location !== location) return false;
      if (dateFilter !== "any" && age > Number(dateFilter) * DAY) return false;

      if (k) {
        const haystack = [job.title, job.department, job.summary, job.type]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(k)) return false;
      }
      if (p && !`${job.location} ${job.mode}`.toLowerCase().includes(p)) return false;

      return true;
    });

    if (sort === "newest") {
      out = [...out].sort(
        (a, b) => new Date(b.postedOn).getTime() - new Date(a.postedOn).getTime()
      );
    } else if (k) {
      out = [...out].sort((a, b) => {
        const score = (j: Job) => (j.title.toLowerCase().includes(k) ? 0 : 1);
        return score(a) - score(b);
      });
    }

    return out;
  }, [jobs, keyword, place, tab, location, dateFilter, sort, now]);

  const grouped = useMemo(() => {
    const map = new Map<string, Job[]>();
    for (const job of results) {
      map.set(job.location, [...(map.get(job.location) ?? []), job]);
    }
    return Array.from(map.entries()).sort((a, b) => b[1].length - a[1].length);
  }, [results]);

  const filtersActive = location !== "all" || dateFilter !== "any" || !!keyword || !!place;

  function toggleSave(slug: string) {
    setSaved((s) => (s.includes(slug) ? s.filter((x) => x !== slug) : [...s, slug]));
  }

  function clearAll() {
    setKeyword("");
    setPlace("");
    setLocation("all");
    setDateFilter("any");
    setSearched(false);
  }

  /* ---------------------------------------------------------------- */

  return (
    <main className="min-h-screen bg-white pb-24 pt-[120px]">
      {/* Hero banner */}
      <section className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
        <div className="relative overflow-hidden rounded-xl">
          <div
            className="relative flex min-h-[280px] items-end sm:min-h-[340px]"
            style={{
              backgroundImage: "url('/hero.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1 className="sr-only">Find your dream job here</h1>
          </div>
        </div>
      </section>

      {/* Search bar */}
      <section className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
        <div className="mx-auto -mt-10 max-w-[960px]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSearched(true);
            }}
            className={`flex flex-col overflow-hidden rounded-xl border ${T.border} bg-white shadow-[0_16px_48px_rgba(20,22,59,0.14)] sm:flex-row`}
          >
            <div className="flex-1 px-7 py-6">
              <label htmlFor="q" className={`block text-[13px] font-medium ${T.muted}`}>
                Find jobs
              </label>
              <input
                id="q"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Job title, skill, keyword"
                className={`mt-1.5 w-full bg-transparent text-[20px] font-semibold outline-none ${T.ink} placeholder:font-semibold placeholder:text-[#8A8CA6]`}
              />
            </div>

            <div className={`border-t sm:border-l sm:border-t-0 ${T.border}`} />

            <div className="flex-1 px-7 py-6">
              <label htmlFor="loc" className={`block text-[13px] font-medium ${T.muted}`}>
                Near location
              </label>
              <input
                id="loc"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                placeholder="City, state, country"
                className={`mt-1.5 w-full bg-transparent text-[20px] font-semibold outline-none ${T.ink} placeholder:font-semibold placeholder:text-[#8A8CA6]`}
              />
            </div>

            <button
              type="submit"
              aria-label="Search jobs"
              className={`flex items-center justify-center px-10 py-6 text-white transition-colors sm:px-9 ${T.primaryBg} ${T.primaryHoverBg}`}
            >
              <Search size={24} strokeWidth={2.5} />
            </button>
          </form>
        </div>
      </section>

      {/* Tabs */}
      <section className="mx-auto mt-12 max-w-[1520px] px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-center gap-10 sm:gap-14">
          {(
            [
              { id: "all", label: "All jobs", count: jobs.length },
              { id: "new", label: "New jobs", count: newCount },
            ] as const
          ).map((t) => {
            const on = tab === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={`-mb-[3px] border-b-[3px] pb-4 text-[24px] transition-colors sm:text-[30px] ${
                  on
                    ? `border-[#3B2FE0] ${T.primary} font-semibold`
                    : `border-transparent ${T.muted} font-medium hover:text-[#14163B]`
                }`}
              >
                {t.label} <span className="font-normal">({t.count})</span>
              </button>
            );
          })}
        </div>
        <div className={`border-t ${T.border}`} />
      </section>

      {/* Filter row */}
      <section className="mx-auto mt-7 max-w-[1520px] px-6 sm:px-10 lg:px-16">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className={`text-[13px] font-semibold uppercase tracking-wide ${T.ink}`}>
            {showResults
              ? `${results.length} ${results.length === 1 ? "match" : "matches"}`
              : `${jobs.length} open ${jobs.length === 1 ? "job" : "jobs"}`}
          </span>
          <span className={`hidden h-4 w-px bg-[#E4E4EF] sm:block`} />

          <Dropdown label="Locations" active={location !== "all"}>
            {(close) => (
              <>
                <OptionRow
                  selected={location === "all"}
                  onClick={() => {
                    setLocation("all");
                    close();
                  }}
                >
                  All locations
                </OptionRow>
                {locations.map((l) => (
                  <OptionRow
                    key={l}
                    selected={location === l}
                    onClick={() => {
                      setLocation(l);
                      close();
                    }}
                  >
                    {l}
                  </OptionRow>
                ))}
              </>
            )}
          </Dropdown>

          <Dropdown label="Posting dates" active={dateFilter !== "any"}>
            {(close) => (
              <>
                {DATE_FILTERS.map((d) => (
                  <OptionRow
                    key={d.id}
                    selected={dateFilter === d.id}
                    onClick={() => {
                      setDateFilter(d.id);
                      close();
                    }}
                  >
                    {d.label}
                  </OptionRow>
                ))}
              </>
            )}
          </Dropdown>

          {filtersActive && (
            <button
              type="button"
              onClick={clearAll}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-[13px] font-semibold ${T.muted} transition-colors hover:text-[#14163B]`}
            >
              <X size={13} strokeWidth={2.5} />
              Clear filters
            </button>
          )}
        </div>
      </section>

      {/* Sort + view toggle */}
      <section
        className={`mx-auto mt-8 max-w-[1100px] px-6 sm:px-10 lg:px-16 ${
          showResults ? "" : "hidden"
        }`}
      >
        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => setSort((s) => (s === "relevance" ? "newest" : "relevance"))}
            className={`inline-flex items-center gap-1.5 text-[14px] font-semibold ${T.ink} transition-colors hover:text-[#3B2FE0]`}
          >
            {sort === "relevance" ? "Relevance" : "Newest first"}
            <ArrowUpDown size={14} strokeWidth={2.5} />
          </button>

          <div className={`flex overflow-hidden rounded-md border ${T.border}`}>
            <button
              type="button"
              aria-label="List view"
              onClick={() => setView("list")}
              className={`px-3 py-2 transition-colors ${
                view === "list" ? `${T.panelBg} ${T.primary}` : `bg-white ${T.muted}`
              }`}
            >
              <List size={16} strokeWidth={2.2} />
            </button>
            <button
              type="button"
              aria-label="Group by location"
              onClick={() => setView("grouped")}
              className={`border-l px-3 py-2 transition-colors ${T.border} ${
                view === "grouped" ? `${T.panelBg} ${T.primary}` : `bg-white ${T.muted}`
              }`}
            >
              <MapIcon size={16} strokeWidth={2.2} />
            </button>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="mx-auto mt-5 max-w-[1100px] px-6 sm:px-10 lg:px-16">
        {!showResults ? (
          <div className={`rounded-lg border ${T.border} ${T.panelBg} px-6 py-20 text-center`}>
            <Search size={26} strokeWidth={2} className={`mx-auto ${T.primary}`} />
            <h2 className={`mt-4 text-[19px] font-semibold ${T.ink}`}>
              Search to see open roles
            </h2>
            <p className={`mx-auto mt-2 max-w-[46ch] text-[14.5px] leading-relaxed ${T.muted}`}>
              Type a job title, skill or city above and press search. Or pick a
              location or posting date to start browsing.
            </p>
            <button
              type="button"
              onClick={() => setSearched(true)}
              className={`mt-6 inline-flex items-center rounded-md px-5 py-2.5 text-[14px] font-semibold text-white transition-colors ${T.primaryBg} ${T.primaryHoverBg}`}
            >
              Browse all {jobs.length} roles
            </button>
          </div>
        ) : results.length === 0 ? (
          <div className={`rounded-lg border ${T.border} ${T.panelBg} px-6 py-16 text-center`}>
            <h2 className={`text-[18px] font-semibold ${T.ink}`}>No roles match that search</h2>
            <p className={`mx-auto mt-2 max-w-[44ch] text-[14.5px] leading-relaxed ${T.muted}`}>
              Try a broader keyword, or clear the filters to see every open role.
            </p>
            <button
              type="button"
              onClick={clearAll}
              className={`mt-5 inline-flex items-center rounded-md px-5 py-2.5 text-[14px] font-semibold text-white transition-colors ${T.primaryBg} ${T.primaryHoverBg}`}
            >
              Show all jobs
            </button>
          </div>
        ) : view === "list" ? (
          <ul className="space-y-3.5">
            {results.map((job) => (
              <JobRow
                key={job.slug}
                job={job}
                now={now}
                saved={saved.includes(job.slug)}
                onSave={() => toggleSave(job.slug)}
              />
            ))}
          </ul>
        ) : (
          <div className="space-y-10">
            {grouped.map(([loc, list]) => (
              <div key={loc}>
                <h2 className={`text-[15px] font-semibold ${T.ink}`}>
                  {loc}{" "}
                  <span className={`font-normal ${T.muted}`}>
                    · {list.length} {list.length === 1 ? "role" : "roles"}
                  </span>
                </h2>
                <ul className="mt-4 space-y-3.5">
                  {list.map((job) => (
                    <JobRow
                      key={job.slug}
                      job={job}
                      now={now}
                      saved={saved.includes(job.slug)}
                      onSave={() => toggleSave(job.slug)}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Candidate experience */}
      <CandidateExperience />
    </main>
  );
}

/* ------------------------------------------------------------------ */
/* Job row                                                             */
/* ------------------------------------------------------------------ */

function JobRow({
  job,
  now,
  saved,
  onSave,
}: {
  job: Job;
  now: number;
  saved: boolean;
  onSave: () => void;
}) {
  const trending = now - new Date(job.postedOn).getTime() <= TRENDING_WINDOW;

  return (
    <li
      className={`group relative rounded-lg border ${T.border} bg-white transition-shadow hover:shadow-[0_6px_22px_rgba(20,22,59,0.09)]`}
    >
      <div className="flex items-center gap-4 px-6 py-5">
        <div className="min-w-0 flex-1">
          <Link
            href={`/careers/${job.slug}`}
            className={`text-[18px] font-medium ${T.ink} outline-none transition-colors group-hover:text-[#3B2FE0] focus-visible:underline`}
          >
            {/* Stretched link so the whole card is clickable */}
            <span className="absolute inset-0" aria-hidden />
            {job.title}
          </Link>

          <div
            className={`relative z-10 mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12.5px] ${T.muted}`}
          >
            <span>{job.location}</span>
            <span className="text-[#C9CAD9]">•</span>
            <span>
              <span className={`font-semibold ${T.ink}`}>Posting date</span>{" "}
              {formatPosted(job.postedOn)}
            </span>
            {trending && (
              <>
                <span className="text-[#C9CAD9]">•</span>
                <span className={`inline-flex items-center gap-1 font-semibold ${T.primary}`}>
                  <TrendingUp size={12} strokeWidth={2.5} />
                  Trending
                </span>
              </>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={onSave}
          aria-pressed={saved}
          aria-label={saved ? `Remove ${job.title} from saved` : `Save ${job.title}`}
          className={`relative z-10 rounded-md p-2 transition-colors ${
            saved ? T.primary : "text-[#A9ABBF] hover:text-[#3B2FE0]"
          }`}
        >
          <Star size={19} strokeWidth={2} fill={saved ? "currentColor" : "none"} />
        </button>

        <ChevronRight size={20} strokeWidth={2} className="shrink-0 text-[#A9ABBF]" />
      </div>
    </li>
  );
}

/* ------------------------------------------------------------------ */
/* Candidate experience                                                */
/* ------------------------------------------------------------------ */

const TESTIMONIALS = [
  {
    quote:
      "I joined expecting a long ramp-up and shipped to production in my second week. The people reviewing my code were the same people who interviewed me, so nothing about the job was a surprise.",
    name: "Aarthi Raghavan",
    role: "Quality Analyst",
    initials: "AR",
  },
  {
    quote:
      "What I noticed first was how quiet the process was — no chasing recruiters for updates. Now I work across two product teams and still get real time to go deep on problems.",
    name: "Daniel Mensah",
    role: "Production Support Specialist",
    initials: "DM",
  },
];

function CandidateExperience() {
  return (
    <section className="mx-auto mt-24 max-w-[1520px] px-6 sm:px-10 lg:px-16">
      <div className={`relative rounded-xl ${T.inkBg} px-6 pb-6 pt-14 sm:px-12 sm:pb-12`}>
        <h2 className="text-center text-[30px] font-semibold tracking-tight text-white sm:text-[38px]">
          What it&apos;s like to join
        </h2>
        <p className="mx-auto mt-3 max-w-[50ch] text-center text-[15px] leading-relaxed text-white/70">
          Two people who went through this exact application form.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-lg bg-white p-7 shadow-[0_10px_30px_rgba(12,14,42,0.20)]"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${T.primaryBg} text-[14px] font-semibold text-white`}
                >
                  {t.initials}
                </div>
                <figcaption>
                  <div className={`text-[15px] font-semibold ${T.ink}`}>{t.name}</div>
                  <div className={`text-[13px] ${T.muted}`}>{t.role}</div>
                </figcaption>
              </div>

              <blockquote
                className={`mt-5 text-[15px] leading-relaxed ${T.ink}`}
              >
                {t.quote}
              </blockquote>
            </figure>
          ))}
        </div>
      </div>

      <div className={`mt-10 rounded-lg ${T.panelBg} border ${T.border} p-6 text-center`}>
        <p className={`text-[14.5px] ${T.muted}`}>
          Don&apos;t see the right fit? We&apos;re always open to hearing from strong
          candidates.{" "}
          <a href="mailto:careers@starfii.com" className={`font-semibold ${T.primary}`}>
            Write to us
          </a>
          .
        </p>
      </div>
    </section>
  );
}
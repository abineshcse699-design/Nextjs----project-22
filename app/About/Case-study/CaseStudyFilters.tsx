// PLACE THIS FILE AT: app/About/case-study/CaseStudyFilters.tsx
"use client";

import { useEffect, useMemo, useRef, useState, type ReactElement } from "react";
import Link from "next/link";
import { ArrowUpRight, Search, X } from "lucide-react";

const CHAMPION_BLUE = "#1B2560";
const INDIGO_CTA = "#4F3FE0";
const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

// Keys of the groups that stay visible as pills. Everything else
// moves into the search/filter dropdown.
const PINNED_KEYS = ["ai", "digital-software", "cloud"];

// Pagination: 5 rows per page. Grid tops out at 3 columns (lg),
// so a "page" is 5 rows x 3 columns worth of cards.
const COLS = 3;
const ROWS_PER_PAGE = 5;
const ITEMS_PER_PAGE = COLS * ROWS_PER_PAGE;

type CaseStudy = {
  slug: string;
  image: string;
  title: string;
  body: string;
  category?: string;
};

export type CaseStudyGroup = {
  key: string;
  label: string;
  basePath: string;
  items: CaseStudy[];
};

type FlatCaseStudy = CaseStudy & { basePath: string; groupLabel: string };

export default function CaseStudyFilters({
  groups,
}: {
  groups: CaseStudyGroup[];
}): ReactElement {
  const [active, setActive] = useState<string>("all");
  const [filterOpen, setFilterOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const filterRef = useRef<HTMLDivElement>(null);

  const pinnedGroups = useMemo(
    () =>
      PINNED_KEYS.map((k) => groups.find((g) => g.key === k)).filter(
        (g): g is CaseStudyGroup => Boolean(g)
      ),
    [groups]
  );
  const extraGroups = useMemo(
    () => groups.filter((g) => !PINNED_KEYS.includes(g.key)),
    [groups]
  );

  // All case studies flattened — used for text search across every group.
  const allFlat: FlatCaseStudy[] = useMemo(
    () =>
      groups.flatMap((g) =>
        g.items.map((item) => ({
          ...item,
          basePath: g.basePath,
          groupLabel: g.label,
        }))
      ),
    [groups]
  );

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return allFlat.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.groupLabel.toLowerCase().includes(q)
    );
  }, [query, allFlat]);

  const extraGroupMatches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return extraGroups;
    return extraGroups.filter((g) => g.label.toLowerCase().includes(q));
  }, [query, extraGroups]);

  const isSearching = query.trim().length > 0;

  // Flat list of cards for the currently active, non-search view —
  // one continuous grid (no per-category headings), 5 rows a page.
  const visibleFlat: FlatCaseStudy[] = useMemo(() => {
    const list = active === "all" ? groups : groups.filter((g) => g.key === active);
    return list.flatMap((g) =>
      g.items.map((item) => ({ ...item, basePath: g.basePath, groupLabel: g.label }))
    );
  }, [active, groups]);

  const activeGroupLabel = useMemo(
    () => groups.find((g) => g.key === active)?.label ?? "",
    [active, groups]
  );

  const currentList = isSearching ? searchResults : visibleFlat;
  const totalPages = Math.max(1, Math.ceil(currentList.length / ITEMS_PER_PAGE));
  const pagedList = useMemo(
    () => currentList.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE),
    [currentList, page]
  );

  // Reset to page 1 whenever the active filter or search query changes.
  useEffect(() => {
    setPage(1);
  }, [active, query]);

  // Click-outside-to-close: this is the ONLY thing that closes the
  // dropdown besides selecting a group or pressing the X. No hover
  // handlers anymore — hover doesn't exist on touch devices anyway,
  // and mixing hover + click was causing the open/close to fight itself.
  useEffect(() => {
    if (!filterOpen) return;

    function handleClickOutside(e: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
        setFilterOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [filterOpen]);

  function selectGroup(key: string) {
    setActive(key);
    setQuery("");
    setFilterOpen(false);
  }

  function goToPage(p: number) {
    const clamped = Math.min(Math.max(p, 1), totalPages);
    setPage(clamped);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderCard(study: CaseStudy, basePath: string) {
    return (
      <Link
        key={`${basePath}-${study.slug}`}
        href={`${basePath}/${study.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-2xl"
        style={{ border: "1px solid #ECE7FB" }}
      >
        <div className="h-[220px] flex-shrink-0 overflow-hidden">
          <img
            src={study.image}
            alt={study.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <span
            className="font-body text-[12px] font-semibold tracking-wide"
            style={{ color: INDIGO_CTA }}
          >
            {study.category ?? "CASE STUDY"}
          </span>
          <h3
            className="font-heading mt-2 text-[19px] font-semibold leading-snug"
            style={{
              color: CHAMPION_BLUE,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {study.title}
          </h3>
          <p
            className="font-body mt-3 text-[14px] leading-relaxed text-slate-600"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {study.body}
          </p>
          <span
            className="font-body mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold transition-transform duration-200 group-hover:translate-x-0.5"
            style={{ color: INDIGO_CTA }}
          >
            Learn More
            <ArrowUpRight size={15} />
          </span>
        </div>
      </Link>
    );
  }

  function renderPagination() {
    if (totalPages <= 1) return null;
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    return (
      <div className="mt-14 flex items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => goToPage(page - 1)}
          disabled={page === 1}
          className="rounded-full px-4 py-2 text-[14px] font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-40"
          style={{ backgroundColor: "#F3F1FD", color: CHAMPION_BLUE }}
        >
          Prev
        </button>
        {pages.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => goToPage(p)}
            aria-current={p === page ? "page" : undefined}
            className="h-10 w-10 rounded-full text-[14px] font-semibold transition-colors"
            style={
              p === page
                ? { backgroundColor: INDIGO_CTA, color: "#fff" }
                : { backgroundColor: "#F3F1FD", color: CHAMPION_BLUE }
            }
          >
            {p}
          </button>
        ))}
        <button
          type="button"
          onClick={() => goToPage(page + 1)}
          disabled={page === totalPages}
          className="rounded-full px-4 py-2 text-[14px] font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-40"
          style={{ backgroundColor: "#F3F1FD", color: CHAMPION_BLUE }}
        >
          Next
        </button>
      </div>
    );
  }

  return (
    <main className="bg-white">
      <section className={`${ALIGN} py-20 lg:py-28`}>
        {/* Page heading */}
        <h1
          className="font-heading text-[34px] font-medium leading-[1.15] lg:text-[44px]"
          style={{ color: CHAMPION_BLUE }}
        >
          Case Studies
        </h1>

        {/* Filter bar */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => selectGroup("all")}
            className="rounded-full px-7 py-3 text-[16px] font-semibold transition-colors"
            style={
              active === "all" && !isSearching
                ? { backgroundColor: INDIGO_CTA, color: "#fff" }
                : { backgroundColor: "#F3F1FD", color: CHAMPION_BLUE }
            }
          >
            All
          </button>

          {pinnedGroups.map((g) => (
            <button
              key={g.key}
              type="button"
              onClick={() => selectGroup(g.key)}
              className="rounded-full px-7 py-3 text-[16px] font-semibold transition-colors"
              style={
                active === g.key && !isSearching
                  ? { backgroundColor: INDIGO_CTA, color: "#fff" }
                  : { backgroundColor: "#F3F1FD", color: CHAMPION_BLUE }
              }
            >
              {g.label}
            </button>
          ))}

          {/* Search & filter trigger — pushed to the end of the row.
              Click-to-open/close only; no hover handlers. */}
          <div className="relative ml-auto" ref={filterRef}>
            <button
              type="button"
              onClick={() => setFilterOpen((v) => !v)}
              aria-label="Search and more filters"
              aria-expanded={filterOpen}
              className="flex items-center gap-2 rounded-full px-7 py-3 text-[16px] font-semibold transition-colors"
              style={
                filterOpen ||
                (isSearching && extraGroups.some((g) => g.key === active))
                  ? { backgroundColor: INDIGO_CTA, color: "#fff" }
                  : { backgroundColor: "#F3F1FD", color: CHAMPION_BLUE }
              }
            >
              <Search size={17} />
              Search
            </button>

            {filterOpen && (
              <div className="absolute right-0 top-full z-20 w-[300px] pt-3">
                <div
                  className="rounded-2xl bg-white p-4 shadow-xl"
                  style={{ border: "1px solid #ECE7FB" }}
                >
                  <div className="flex items-center justify-end">
                    <button
                      type="button"
                      onClick={() => setFilterOpen(false)}
                      aria-label="Close"
                      className="text-slate-400 hover:text-slate-600"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  {/* Search input */}
                  <div
                    className="mt-1 flex items-center gap-2 rounded-full px-4 py-2"
                    style={{ backgroundColor: "#F3F1FD" }}
                  >
                    <Search size={15} color={CHAMPION_BLUE} />
                    <input
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search case studies..."
                      className="w-full bg-transparent text-[14px] outline-none"
                      style={{ color: CHAMPION_BLUE }}
                    />
                    {query && (
                      <button
                        type="button"
                        onClick={() => setQuery("")}
                        aria-label="Clear search"
                        className="text-slate-400 hover:text-slate-600"
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>

                  {/* Remaining categories */}
                  <div className="mt-4 flex flex-col gap-1">
                    {extraGroupMatches.map((g) => (
                      <button
                        key={g.key}
                        type="button"
                        onClick={() => selectGroup(g.key)}
                        className="rounded-lg px-3 py-2 text-left text-[14px] font-semibold transition-colors hover:bg-[#F3F1FD] hover:text-[#4F3FE0]"
                        style={
                          active === g.key && !isSearching
                            ? { backgroundColor: "#F3F1FD", color: INDIGO_CTA }
                            : { color: CHAMPION_BLUE }
                        }
                      >
                        {g.label}
                      </button>
                    ))}
                    {extraGroupMatches.length === 0 && (
                      <p className="px-3 py-2 text-[13px] text-slate-400">
                        No categories match.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Heading: search results, or the selected category's name */}
        {isSearching ? (
          <h2
            className="font-heading mt-14 text-[24px] font-medium leading-[1.15]"
            style={{ color: CHAMPION_BLUE }}
          >
            {searchResults.length > 0
              ? `Results for "${query}"`
              : `No case studies found for "${query}"`}
          </h2>
        ) : (
          active !== "all" && (
            <h2
              className="font-heading mt-14 text-[26px] font-medium leading-[1.15] lg:text-[30px]"
              style={{ color: CHAMPION_BLUE }}
            >
              {activeGroupLabel}
            </h2>
          )
        )}

        {/* Single flat grid — 5 rows per page */}
        <div
          className={`grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 ${
            isSearching || active !== "all" ? "mt-8" : "mt-14"
          }`}
        >
          {pagedList.map((study) => renderCard(study, study.basePath))}
        </div>

        {renderPagination()}
      </section>
    </main>
  );
}
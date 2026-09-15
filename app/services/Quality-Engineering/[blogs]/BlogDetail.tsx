"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ChevronRight,
  Clock3,
  Copy,
  Mail,
} from "lucide-react";

import type { BlogPost } from "./blogData";

type BlogDetailProps = {
  post: BlogPost;
  related: BlogPost[];
};

const CHAMPION_BLUE = "#1B2560";
const INDIGO_CTA = "#4F3FE0";

const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

// NOTE: this file is expected to live at
// app/services/quality-engineering/blogs/BlogDetail.tsx
// Keep BLOG_BASE / SERVICE_BASE in sync with the actual folder name
// (lowercase, hyphenated) — Next.js routes are case-sensitive in
// production even if they resolve locally on a case-insensitive OS.
const BLOG_BASE = "/services/quality-engineering/blogs";
const SERVICE_BASE = "/services/quality-engineering";

function getSectionId(index: number) {
  return `blog-section-${index + 1}`;
}

export default function BlogDetail({
  post,
  related,
}: BlogDetailProps) {
  const [copied, setCopied] = useState(false);

  const pageUrl = useMemo(() => {
    if (typeof window === "undefined") return "";
    return window.location.href;
  }, []);

  const shareText = encodeURIComponent(post.title);
  const shareUrl = encodeURIComponent(pageUrl);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  function shareWindow(url: string) {
    window.open(url, "_blank", "noopener,noreferrer,width=700,height=600");
  }

  return (
    <main className="min-h-screen bg-white">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#0A0912]">
        <div className="absolute inset-0">
          <img
            src={post.heroImage}
            alt={post.title}
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080711] via-[#11102A]/95 to-[#11102A]/60" />
          <div
            className="absolute -right-32 top-[-180px] h-[520px] w-[520px] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(164,143,234,0.35), rgba(79,63,224,0.08), transparent 70%)",
            }}
          />
        </div>

        <div className={`relative ${ALIGN}`}>
          <div className="py-12 sm:py-16 lg:py-20">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-sm text-white/55"
            >
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <ChevronRight size={14} />
              <Link
                href={SERVICE_BASE}
                className="transition-colors hover:text-white"
              >
                Quality Engineering
              </Link>
              <ChevronRight size={14} />
              <Link
                href={BLOG_BASE}
                className="transition-colors hover:text-white"
              >
                Blogs
              </Link>
              <ChevronRight size={14} />
              <span className="line-clamp-1 text-white/75">{post.title}</span>
            </nav>

            <Link
              href={BLOG_BASE}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-transform duration-200 hover:-translate-x-1"
              style={{ color: "#A48FEA" }}
            >
              <ArrowLeft size={16} />
              Back to Quality Engineering Blogs
            </Link>

            <div className="mt-8 max-w-5xl">
              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                {post.category}
              </span>

              <h1 className="mt-7 max-w-5xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[64px]">
                {post.title}
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/65 sm:text-xl">
                {post.excerpt}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-white/55">
                <span>By {post.author}</span>
                <span className="hidden sm:inline">•</span>
                <span>{post.publishedAt}</span>
                <span className="hidden sm:inline">•</span>
                <span className="inline-flex items-center gap-2">
                  <Clock3 size={15} />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <section className="relative">
        <div className={`relative ${ALIGN}`}>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
            {/* ================= ARTICLE ================= */}
            <article className="min-w-0">
              {/* Hero image */}
              <div className="-mt-8 overflow-hidden rounded-[28px] border border-white/20 bg-white shadow-2xl sm:-mt-12">
                <img
                  src={post.heroImage}
                  alt={post.title}
                  className="h-auto max-h-[560px] w-full object-cover"
                />
              </div>

              {/* Share row */}
              <div className="mt-7 flex flex-wrap items-center justify-between gap-5 border-b border-slate-200 pb-7">
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: CHAMPION_BLUE }}
                  >
                    {post.readTime}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Read, share and explore the full insight.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="mr-2 hidden text-sm font-medium text-slate-500 sm:inline">
                    Share
                  </span>

                  <button
                    type="button"
                    aria-label="Share on LinkedIn"
                    onClick={() =>
                      shareWindow(
                        `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`
                      )
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:border-[#1B2560] hover:shadow-md"
                  >
                    <span className="text-sm font-bold text-[#1B2560]">in</span>
                  </button>

                  <button
                    type="button"
                    aria-label="Share on Facebook"
                    onClick={() =>
                      shareWindow(
                        `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`
                      )
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:border-[#1B2560] hover:shadow-md"
                  >
                    <span className="text-sm font-bold text-[#1B2560]">f</span>
                  </button>

                  <button
                    type="button"
                    aria-label="Share via email"
                    onClick={() => {
                      window.location.href = `mailto:?subject=${shareText}&body=${shareUrl}`;
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:border-[#1B2560] hover:shadow-md"
                  >
                    <Mail size={17} style={{ color: CHAMPION_BLUE }} />
                  </button>

                  <button
                    type="button"
                    aria-label="Copy link"
                    onClick={copyLink}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:border-[#1B2560] hover:shadow-md"
                  >
                    {copied ? (
                      <Check size={17} className="text-green-600" />
                    ) : (
                      <Copy size={17} style={{ color: CHAMPION_BLUE }} />
                    )}
                  </button>
                </div>
              </div>

              {/* Lead paragraph */}
              <p className="mt-10 font-heading text-xl font-medium leading-9 text-slate-700 sm:text-2xl">
                {post.body}
              </p>

              {/* Body sections */}
              <div className="mt-16 space-y-16">
                {post.sections.map((section, index) => (
                  <section
                    key={section.heading}
                    id={getSectionId(index)}
                    className="scroll-mt-28"
                  >
                    <h2
                      className="text-2xl font-bold leading-tight sm:text-3xl"
                      style={{ color: CHAMPION_BLUE }}
                    >
                      {section.heading}
                    </h2>

                    <div className="mt-6 space-y-5">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-base leading-8 text-slate-600 sm:text-lg"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="mt-7 space-y-4">
                        {section.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex gap-3 text-base leading-7 text-slate-600"
                          >
                            <span
                              className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                              style={{ backgroundColor: INDIGO_CTA }}
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              {/* CTA */}
              <section className="mt-20 overflow-hidden rounded-[32px] bg-[#1B2560]">
                <div className="relative p-8 sm:p-10 lg:p-12">
                  <div
                    className="pointer-events-none absolute -right-24 -top-32 h-[360px] w-[360px] rounded-full blur-3xl"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(164,143,234,0.35), transparent 70%)",
                    }}
                  />
                  <div className="relative max-w-2xl">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A48FEA]">
                      Continue the conversation
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                      Ready to Build a Better Quality Strategy?
                    </h2>
                    <p className="mt-5 text-base leading-8 text-white/65">
                      Talk to Starfii about quality engineering, test
                      automation, AI assisted testing, API testing,
                      performance testing, and continuous testing.
                    </p>
                    <a
                      href="mailto:hello@starfii.com"
                      className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                      style={{ color: CHAMPION_BLUE }}
                    >
                      Connect Now
                      <ArrowUpRight size={17} />
                    </a>
                  </div>
                </div>
              </section>
            </article>

            {/* ================= SIDEBAR ================= */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="space-y-6">
                {/* Table of contents */}
                {post.sections.length > 0 && (
                  <div className="rounded-[28px] border border-slate-200 bg-[#F8F7FC] p-6">
                    <p
                      className="text-xs font-bold uppercase tracking-[0.16em]"
                      style={{ color: INDIGO_CTA }}
                    >
                      On this page
                    </p>

                    <div className="mt-5 space-y-1">
                      {post.sections.map((section, index) => (
                        <a
                          key={section.heading}
                          href={`#${getSectionId(index)}`}
                          className="group flex gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-white hover:text-[#4F3FE0]"
                        >
                          <span className="w-6 flex-shrink-0 text-xs font-semibold text-slate-400">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="leading-5">{section.heading}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quality Engineering CTA */}
                <div className="rounded-[28px] bg-[#F5F3FC] p-6">
                  <p
                    className="text-xs font-bold uppercase tracking-[0.16em]"
                    style={{ color: INDIGO_CTA }}
                  >
                    Quality Engineering
                  </p>
                  <h2
                    className="mt-3 text-xl font-bold leading-tight"
                    style={{ color: CHAMPION_BLUE }}
                  >
                    Ship faster with confidence
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    Build a modern quality strategy with test automation, AI
                    assisted testing, and continuous testing across your
                    release pipeline.
                  </p>
                  <Link
                    href={`${SERVICE_BASE}#connect`}
                    className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
                    style={{ backgroundColor: CHAMPION_BLUE }}
                  >
                    Connect Now
                    <ArrowUpRight size={15} />
                  </Link>
                </div>

                {/* Related (compact) */}
                {related.length > 0 && (
                  <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center justify-between gap-4">
                      <p
                        className="text-xs font-bold uppercase tracking-[0.16em]"
                        style={{ color: INDIGO_CTA }}
                      >
                        More insights
                      </p>
                      <Link
                        href={BLOG_BASE}
                        className="text-xs font-semibold"
                        style={{ color: CHAMPION_BLUE }}
                      >
                        View all
                      </Link>
                    </div>

                    <div className="mt-5 space-y-4">
                      {related.map((item) => (
                        <Link
                          key={item.slug}
                          href={`${BLOG_BASE}/${item.slug}`}
                          className="group block overflow-hidden rounded-2xl border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                          <div className="h-32 overflow-hidden">
                            <img
                              src={item.heroImage}
                              alt={item.title}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <div className="p-4">
                            <p
                              className="text-[11px] font-bold uppercase tracking-wider"
                              style={{ color: INDIGO_CTA }}
                            >
                              {item.category}
                            </p>
                            <h3
                              className="mt-2 line-clamp-3 text-sm font-semibold leading-6"
                              style={{ color: CHAMPION_BLUE }}
                            >
                              {item.title}
                            </h3>
                            <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-slate-500 group-hover:text-[#4F3FE0]">
                              Read insight
                              <ArrowUpRight size={13} />
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM RELATED (full-width grid)
      ====================================================== */}
      {related.length > 0 && (
        <section className="mt-24 border-t border-slate-200 bg-[#EEF0F7] py-20 lg:py-24">
          <div className={ALIGN}>
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <span
                  className="text-xs font-bold uppercase tracking-[0.18em]"
                  style={{ color: INDIGO_CTA }}
                >
                  More Insights
                </span>
                <h2
                  className="mt-3 text-[32px] font-medium sm:text-[42px]"
                  style={{ color: CHAMPION_BLUE }}
                >
                  Related Quality Engineering Blogs
                </h2>
              </div>

              <Link
                href={BLOG_BASE}
                className="hidden items-center gap-1.5 text-[15px] font-semibold sm:inline-flex"
                style={{ color: INDIGO_CTA }}
              >
                View All Blogs
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`${BLOG_BASE}/${item.slug}`}
                  className="group overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="h-[220px] overflow-hidden">
                    <img
                      src={item.heroImage}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <span
                      className="text-[12px] font-semibold uppercase tracking-wide"
                      style={{ color: INDIGO_CTA }}
                    >
                      {item.category}
                    </span>

                    <h3
                      className="mt-2 text-[19px] font-semibold leading-snug"
                      style={{ color: CHAMPION_BLUE }}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-[14px] leading-relaxed text-slate-600">
                      {item.excerpt}
                    </p>

                    <span
                      className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold"
                      style={{ color: INDIGO_CTA }}
                    >
                      Read More
                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 flex justify-center sm:hidden">
              <Link
                href={BLOG_BASE}
                className="inline-flex items-center gap-1.5 text-[15px] font-semibold"
                style={{ color: INDIGO_CTA }}
              >
                View All Blogs
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
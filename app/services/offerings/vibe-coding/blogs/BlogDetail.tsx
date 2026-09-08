"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Clock3,
  Copy,
  Mail,
  Share2,
} from "lucide-react";
import { useMemo, useState } from "react";

import type { BlogPost } from "./blogsData";

const CHAMPION_BLUE = "#1B2560";
const INDIGO_CTA = "#4F3FE0";
const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

const BLOG_BASE = "/services/offerings/vibe-coding/blogs";

type BlogDetailProps = {
  post: BlogPost;
  related: BlogPost[];
};

function getSectionId(index: number) {
  return `blog-section-${index + 1}`;
}

export default function BlogDetail({ post, related }: BlogDetailProps) {
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

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  }

  function shareWindow(url: string) {
    window.open(url, "_blank", "noopener,noreferrer,width=700,height=600");
  }

  return (
    <main className="bg-white">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#0A0912]">
        <div className="absolute inset-0">
          <img
            src={post.heroImage}
            alt=""
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
                href="/services/offerings/vibe-coding"
                className="transition-colors hover:text-white"
              >
                Vibe Coding
              </Link>

              <ChevronRight size={14} />

              <Link href={BLOG_BASE} className="transition-colors hover:text-white">
                Blogs
              </Link>

              <ChevronRight size={14} />

              <span className="line-clamp-1 text-white/75">{post.title}</span>
            </nav>

            <div className="mt-12 max-w-5xl">
              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                {post.category}
              </span>

              <h1 className="mt-7 max-w-5xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[68px]">
                {post.title}
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/65 sm:text-xl">
                {post.excerpt}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-white/55">
                <span>Last Updated: {post.lastUpdated}</span>

                <span className="hidden sm:inline">•</span>

                <span className="inline-flex items-center gap-2">
                  <Clock3 size={15} />
                  {post.readTime}
                </span>

                <span className="hidden sm:inline">•</span>

                <span>By {post.author.name}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}
      <section className="relative">
        <div className={`relative ${ALIGN}`}>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_350px] lg:gap-16">
            {/* =====================================================
                ARTICLE
            ====================================================== */}
            <article className="min-w-0">
              {/* Hero Image */}
              <div className="-mt-8 overflow-hidden rounded-[28px] border border-white/20 bg-white shadow-2xl sm:-mt-12">
                <img
                  src={post.heroImage}
                  alt={post.title}
                  className="h-auto max-h-[680px] w-full object-cover"
                />
              </div>

              {/* Share Bar */}
              <div className="mt-7 flex flex-wrap items-center justify-between gap-5 border-b border-slate-200 pb-7">
                <div>
                  <p className="text-sm font-semibold" style={{ color: CHAMPION_BLUE }}>
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
                    <svg width="17" height="17" viewBox="0 0 24 24" fill={CHAMPION_BLUE} aria-hidden="true">
                      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2 2 0 1 0 5.25 7 2 2 0 0 0 5.25 3ZM20.44 13.41c0-3.46-1.84-5.07-4.3-5.07-1.98 0-2.87 1.09-3.37 1.86V8.5H9.39V20h3.38v-5.7c0-1.5.28-2.95 2.14-2.95 1.84 0 1.86 1.72 1.86 3.05V20h3.38l.29-6.59Z" />
                    </svg>
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
                    <svg width="17" height="17" viewBox="0 0 24 24" fill={CHAMPION_BLUE} aria-hidden="true">
                      <path d="M14.2 8.2h2.1V4.7c-.36-.05-1.6-.16-3.05-.16-3.02 0-5.1 1.84-5.1 5.22v2.91H4.82v3.91h3.33V24h4.08v-7.42h3.32l.53-3.91h-3.85V10.1c0-1.13.31-1.9 1.97-1.9Z" />
                    </svg>
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

              {/* ===================================================
                  INTRO
              ==================================================== */}
              {post.intro.length > 0 && (
                <div className="mt-10 space-y-6">
                  {post.intro.map((paragraph, index) => (
                    <p
                      key={index}
                      className={
                        index === 0
                          ? "text-xl font-medium leading-9 text-slate-700 sm:text-2xl"
                          : "text-lg leading-8 text-slate-600"
                      }
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {/* ===================================================
                  HIGHLIGHTS
              ==================================================== */}
              {post.highlights && post.highlights.length > 0 && (
                <section className="mt-14">
                  <div className="mb-6">
                    <p
                      className="text-xs font-bold uppercase tracking-[0.18em]"
                      style={{ color: INDIGO_CTA }}
                    >
                      At a glance
                    </p>

                    <h2 className="mt-2 text-3xl font-semibold" style={{ color: CHAMPION_BLUE }}>
                      Key insights
                    </h2>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    {post.highlights.map((item) => (
                      <div
                        key={item.number}
                        className="group rounded-3xl border border-slate-200 bg-[#F8F7FC] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold" style={{ color: INDIGO_CTA }}>
                            {item.number}
                          </span>

                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm">
                            <ArrowUpRight size={16} style={{ color: CHAMPION_BLUE }} />
                          </span>
                        </div>

                        <h3 className="mt-12 text-xl font-semibold" style={{ color: CHAMPION_BLUE }}>
                          {item.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* ===================================================
                  ARTICLE BODY
              ==================================================== */}
              <div className="mt-16">
                <div className="mb-8">
                  <p
                    className="text-xs font-bold uppercase tracking-[0.18em]"
                    style={{ color: INDIGO_CTA }}
                  >
                    The complete insight
                  </p>

                  <h2
                    className="mt-2 text-3xl font-semibold sm:text-4xl"
                    style={{ color: CHAMPION_BLUE }}
                  >
                    AI Meeting Intelligence in Practice
                  </h2>
                </div>

                <div className="space-y-16">
                  {post.sections.map((section, index) => (
                    <section
                      key={`${section.heading}-${index}`}
                      id={getSectionId(index)}
                      className="scroll-mt-28"
                    >
                      <div className="flex gap-5">
                        <div
                          className="hidden h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white sm:flex"
                          style={{ backgroundColor: CHAMPION_BLUE }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        <div className="min-w-0 flex-1">
                          <h2
                            className="text-2xl font-bold leading-tight sm:text-3xl"
                            style={{ color: CHAMPION_BLUE }}
                          >
                            {section.heading}
                          </h2>

                          <div className="mt-6 space-y-5">
                            {section.paragraphs.map((paragraph, paragraphIndex) => {
                              const colonIndex = paragraph.indexOf(":");
                              const hasLabel = colonIndex > 0 && colonIndex < 35;

                              if (hasLabel) {
                                const label = paragraph.slice(0, colonIndex + 1);
                                const content = paragraph.slice(colonIndex + 1);

                                return (
                                  <p
                                    key={paragraphIndex}
                                    className="text-base leading-8 text-slate-600 sm:text-lg"
                                  >
                                    <strong
                                      className="font-semibold"
                                      style={{ color: CHAMPION_BLUE }}
                                    >
                                      {label}
                                    </strong>
                                    {content}
                                  </p>
                                );
                              }

                              return (
                                <p
                                  key={paragraphIndex}
                                  className="text-base leading-8 text-slate-600 sm:text-lg"
                                >
                                  {paragraph}
                                </p>
                              );
                            })}
                          </div>

                          {/* Section Image */}
                          {section.image && (
                            <figure className="mt-8 overflow-hidden rounded-3xl bg-slate-100">
                              <img
                                src={section.image}
                                alt={section.imageAlt || section.heading}
                                className="h-auto max-h-[560px] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                              />

                              {section.imageAlt && (
                                <figcaption className="px-5 py-3 text-xs text-slate-500">
                                  {section.imageAlt}
                                </figcaption>
                              )}
                            </figure>
                          )}

                          {/* Quote */}
                          {section.quote && (
                            <blockquote
                              className="mt-8 rounded-3xl border-l-4 p-7 sm:p-8"
                              style={{
                                borderColor: INDIGO_CTA,
                                backgroundColor: "#F6F3FF",
                              }}
                            >
                              <div className="text-4xl leading-none text-[#A48FEA]">“</div>

                              <p
                                className="mt-2 text-xl font-medium leading-8"
                                style={{ color: CHAMPION_BLUE }}
                              >
                                {section.quote}
                              </p>
                            </blockquote>
                          )}
                        </div>
                      </div>
                    </section>
                  ))}
                </div>
              </div>

              {/* ===================================================
                  BENEFITS
              ==================================================== */}
              {post.benefits && post.benefits.length > 0 && (
                <section className="mt-20 overflow-hidden rounded-[32px] bg-[#0A0912] p-7 sm:p-10 lg:p-12">
                  <div className="max-w-2xl">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A48FEA]">
                      Business value
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                      Why AI meeting intelligence matters
                    </h2>

                    <p className="mt-5 text-base leading-8 text-white/60">
                      The strongest AI meeting programs connect every conversation to
                      measurable follow-through, alignment, and business outcomes.
                    </p>
                  </div>

                  <div className="mt-10 grid gap-4 sm:grid-cols-2">
                    {post.benefits.map((benefit, index) => (
                      <div
                        key={benefit.title}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:bg-white/[0.07]"
                      >
                        <div className="flex items-start gap-4">
                          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <div>
                            <h3 className="text-lg font-semibold text-white">
                              {benefit.title}
                            </h3>

                            <p className="mt-2 text-sm leading-7 text-white/55">
                              {benefit.body}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* ===================================================
                  PROCESS
              ==================================================== */}
              {post.process && post.process.length > 0 && (
                <section className="mt-20">
                  <div className="max-w-2xl">
                    <p
                      className="text-xs font-bold uppercase tracking-[0.18em]"
                      style={{ color: INDIGO_CTA }}
                    >
                      From conversation to action
                    </p>

                    <h2
                      className="mt-3 text-3xl font-semibold sm:text-4xl"
                      style={{ color: CHAMPION_BLUE }}
                    >
                      How AI meeting intelligence works
                    </h2>
                  </div>

                  <div className="relative mt-10">
                    <div
                      className="absolute left-[19px] top-5 hidden h-[calc(100%-40px)] w-px sm:block"
                      style={{ backgroundColor: "#DDD8F3" }}
                    />

                    <div className="space-y-7">
                      {post.process.map((step) => (
                        <div key={step.number} className="relative flex gap-5">
                          <div
                            className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white shadow-lg"
                            style={{ backgroundColor: CHAMPION_BLUE }}
                          >
                            {step.number}
                          </div>

                          <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                            <h3 className="text-xl font-semibold" style={{ color: CHAMPION_BLUE }}>
                              {step.title}
                            </h3>

                            <p className="mt-2 text-base leading-7 text-slate-600">
                              {step.body}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* ===================================================
                  TAKEAWAYS
              ==================================================== */}
              {post.keyTakeaways && post.keyTakeaways.length > 0 && (
                <section className="mt-20 rounded-[32px] border border-[#DDD8F3] bg-[#F7F5FD] p-7 sm:p-10">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-white"
                      style={{ backgroundColor: INDIGO_CTA }}
                    >
                      <Share2 size={19} />
                    </div>

                    <div>
                      <p
                        className="text-xs font-bold uppercase tracking-[0.18em]"
                        style={{ color: INDIGO_CTA }}
                      >
                        Key takeaways
                      </p>

                      <h2 className="mt-2 text-3xl font-semibold" style={{ color: CHAMPION_BLUE }}>
                        What to remember
                      </h2>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {post.keyTakeaways.map((takeaway, index) => (
                      <div key={index} className="flex gap-3 rounded-2xl bg-white p-5 shadow-sm">
                        <Check size={19} className="mt-0.5 flex-shrink-0 text-[#4F3FE0]" />

                        <p className="text-sm leading-7 text-slate-600">{takeaway}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* ===================================================
                  CONCLUSION
              ==================================================== */}
              {post.conclusion && (
                <section className="mt-20">
                  <div className="rounded-[32px] bg-[#ECE7FB] p-8 sm:p-10 lg:p-12">
                    <p
                      className="text-xs font-bold uppercase tracking-[0.18em]"
                      style={{ color: INDIGO_CTA }}
                    >
                      Final perspective
                    </p>

                    <p
                      className="mt-5 max-w-4xl text-2xl font-medium leading-10 sm:text-3xl"
                      style={{ color: CHAMPION_BLUE }}
                    >
                      {post.conclusion}
                    </p>
                  </div>
                </section>
              )}

              {/* ===================================================
                  CTA
              ==================================================== */}
              {post.cta && (
                <section className="mt-12 overflow-hidden rounded-[32px] bg-[#1B2560]">
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
                        {post.cta.title}
                      </h2>

                      <p className="mt-5 text-base leading-8 text-white/65">{post.cta.body}</p>

                      <Link
                        href={post.cta.buttonHref}
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        style={{ color: CHAMPION_BLUE }}
                      >
                        {post.cta.buttonText}
                        <ArrowUpRight size={17} />
                      </Link>
                    </div>
                  </div>
                </section>
              )}
            </article>

            {/* =====================================================
                SIDEBAR
            ====================================================== */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="space-y-6">
                {/* Author */}
                <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                  <p
                    className="text-xs font-bold uppercase tracking-[0.16em]"
                    style={{ color: INDIGO_CTA }}
                  >
                    About the author
                  </p>

                  <div className="mt-5 flex items-center gap-4">
                    <img
                      src={post.author.photo}
                      alt={post.author.name}
                      className="h-16 w-16 rounded-2xl object-cover"
                    />

                    <div className="min-w-0">
                      <h3 className="font-semibold" style={{ color: CHAMPION_BLUE }}>
                        {post.author.name}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {post.author.role}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-600">{post.author.bio}</p>
                </div>

                {/* Table of Contents */}
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

                {/* Related */}
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

      {/* =========================================================
          BOTTOM RELATED SECTION
      ========================================================== */}
      {related.length > 0 && (
        <section className="mt-24 border-t border-slate-200 bg-[#F8F7FC] py-20">
          <div className={ALIGN}>
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-[0.18em]"
                  style={{ color: INDIGO_CTA }}
                >
                  Continue reading
                </p>

                <h2
                  className="mt-2 text-3xl font-semibold sm:text-4xl"
                  style={{ color: CHAMPION_BLUE }}
                >
                  Explore more insights
                </h2>
              </div>

              <Link
                href={BLOG_BASE}
                className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: INDIGO_CTA }}
              >
                All blogs
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`${BLOG_BASE}/${item.slug}`}
                  className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      src={item.heroImage}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-7">
                    <div className="flex items-center justify-between gap-4">
                      <span
                        className="text-xs font-bold uppercase tracking-[0.15em]"
                        style={{ color: INDIGO_CTA }}
                      >
                        {item.category}
                      </span>

                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        style={{ color: CHAMPION_BLUE }}
                      />
                    </div>

                    <h3
                      className="mt-4 text-xl font-semibold leading-7"
                      style={{ color: CHAMPION_BLUE }}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-600">
                      {item.excerpt}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
                      <Clock3 size={14} />
                      {item.readTime}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
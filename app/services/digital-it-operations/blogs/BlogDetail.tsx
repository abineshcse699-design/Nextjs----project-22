// app/services/digital-it-operations/blogs/BlogDetail.tsx

"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronRight,
  MessageCircle,
  Send,
} from "lucide-react";

import type { BlogPost } from "./blogsData";

const CHAMPION_BLUE = "#1B2560";
const INDIGO_CTA = "#4F3FE0";

const ALIGN =
  "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

type BlogDetailProps = {
  post: BlogPost;
  related: BlogPost[];
};

export default function BlogDetail({
  post,
  related,
}: BlogDetailProps) {
  return (
    <main className="bg-white">
      {/* =====================================================
          BREADCRUMB
      ===================================================== */}

      <div className={`${ALIGN} py-8`}>
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-sm text-slate-500"
        >
          <Link
            href="/"
            className="transition-colors hover:text-[#4F3FE0]"
          >
            Home
          </Link>

          <ChevronRight size={15} />

          <Link
            href="/services/digital-it-operations"
            className="transition-colors hover:text-[#4F3FE0]"
          >
            Digital IT Operations
          </Link>

          <ChevronRight size={15} />

          <span className="line-clamp-1 text-slate-400">
            {post.title}
          </span>
        </nav>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <section className={`${ALIGN} pb-24`}>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1fr)_360px]">
          {/* =================================================
              ARTICLE
          ================================================= */}

          <article>
            {/* Category */}

            <div className="mb-5">
              <span
                className="inline-flex rounded-full px-4 py-1.5 text-xs font-bold tracking-wide"
                style={{
                  backgroundColor: "#F0EDFF",
                  color: INDIGO_CTA,
                }}
              >
                {post.category}
              </span>
            </div>

            {/* Title */}

            <h1
              className="font-heading max-w-5xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[58px]"
              style={{ color: CHAMPION_BLUE }}
            >
              {post.title}
            </h1>

            {/* Meta */}

            <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3 border-b border-slate-200 pb-7">
              <span className="text-sm text-slate-500">
                Last Updated:{" "}
                <span className="font-semibold text-slate-700">
                  {post.lastUpdated}
                </span>
              </span>

              <span className="text-slate-300">
                •
              </span>

              <span className="text-sm text-slate-500">
                {post.readTime}
              </span>

              {/* Share */}

              <div className="ml-auto flex items-center gap-3">
                <span className="text-sm font-medium text-slate-500">
                  Share on
                </span>

                {/* LinkedIn */}

                <a
                  href="#"
                  aria-label="Share on LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 transition-all hover:-translate-y-0.5 hover:border-[#1B2560]"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill={CHAMPION_BLUE}
                    aria-hidden="true"
                  >
                    <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2 2 0 1 0 5.25 7 2 2 0 0 0 5.25 3ZM20.44 13.41c0-3.46-1.84-5.07-4.3-5.07-1.98 0-2.87 1.09-3.37 1.86V8.5H9.39V20h3.38v-5.7c0-1.5.28-2.95 2.14-2.95 1.84 0 1.86 1.72 1.86 3.05V20h3.38l.29-6.59Z" />
                  </svg>
                </a>

                {/* Facebook */}

                <a
                  href="#"
                  aria-label="Share on Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 transition-all hover:-translate-y-0.5 hover:border-[#1B2560]"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill={CHAMPION_BLUE}
                    aria-hidden="true"
                  >
                    <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.67.33-1 1-1Z" />
                  </svg>
                </a>

                {/* X */}

                <a
                  href="#"
                  aria-label="Share on X"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 transition-all hover:-translate-y-0.5 hover:border-[#1B2560]"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill={CHAMPION_BLUE}
                    aria-hidden="true"
                  >
                    <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.37l7.24-8.28L2.8 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.83h1.73L8.27 4.05H6.41L17.8 19.83Z" />
                  </svg>
                </a>

                {/* WhatsApp */}

                <a
                  href="#"
                  aria-label="Share on WhatsApp"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 transition-all hover:-translate-y-0.5 hover:border-[#1B2560]"
                >
                  <MessageCircle
                    size={17}
                    style={{
                      color: CHAMPION_BLUE,
                    }}
                  />
                </a>

                {/* Send */}

                <button
                  type="button"
                  aria-label="Share"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 transition-all hover:-translate-y-0.5 hover:border-[#1B2560]"
                >
                  <Send
                    size={16}
                    style={{
                      color: CHAMPION_BLUE,
                    }}
                  />
                </button>
              </div>
            </div>

            {/* Hero Image */}

            <div className="mt-9 overflow-hidden rounded-3xl">
              <img
                src={post.heroImage}
                alt={post.title}
                className="h-auto max-h-[620px] w-full object-cover"
              />
            </div>

            {/* Intro */}

            <div className="mt-10 space-y-6">
              {post.intro.map(
                (paragraph, index) => (
                  <p
                    key={index}
                    className="font-body text-[17px] leading-[1.85] text-slate-700"
                  >
                    {paragraph}
                  </p>
                )
              )}
            </div>

            {/* Sections */}

            <div className="mt-12 space-y-12">
              {post.sections.map(
                (section, index) => (
                  <section
                    key={`${section.heading}-${index}`}
                    id={`section-${index + 1}`}
                    className="scroll-mt-28"
                  >
                    <h2
                      className="font-heading text-2xl font-semibold leading-tight sm:text-3xl"
                      style={{
                        color: CHAMPION_BLUE,
                      }}
                    >
                      {section.heading}
                    </h2>

                    <div className="mt-5 space-y-5">
                      {section.paragraphs.map(
                        (paragraph, paragraphIndex) => (
                          <p
                            key={paragraphIndex}
                            className="font-body text-[16px] leading-[1.85] text-slate-700"
                          >
                            {paragraph}
                          </p>
                        )
                      )}
                    </div>
                  </section>
                )
              )}
            </div>

            {/* Back */}

            <div className="mt-14 border-t border-slate-200 pt-8">
              <Link
                href="/services/digital-it-operations"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-transform hover:-translate-x-1"
                style={{
                  color: INDIGO_CTA,
                }}
              >
                <ArrowLeft size={16} />
                Back to Digital IT Operations
              </Link>
            </div>
          </article>

          {/* =================================================
              SIDEBAR
          ================================================= */}

          <aside className="lg:sticky lg:top-28 lg:self-start">
            {/* Author */}

            <div className="rounded-2xl border border-slate-200 bg-[#F7F7FB] p-6">
              <p
                className="text-xs font-bold uppercase tracking-[0.14em]"
                style={{
                  color: INDIGO_CTA,
                }}
              >
                About the Author
              </p>

              <div className="mt-5 flex items-center gap-4">
                <img
                  src={post.author.photo}
                  alt={post.author.name}
                  className="h-16 w-16 rounded-full object-cover"
                />

                <div>
                  <h3
                    className="font-heading text-lg font-semibold"
                    style={{
                      color: CHAMPION_BLUE,
                    }}
                  >
                    {post.author.name}
                  </h3>

                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    {post.author.role}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                {post.author.bio}
              </p>
            </div>

            {/* Related Blogs */}

            {related.length > 0 && (
              <div className="mt-8">
                <h2
                  className="font-heading text-2xl font-semibold"
                  style={{
                    color: CHAMPION_BLUE,
                  }}
                >
                  Related Insights
                </h2>

                <div className="mt-5 space-y-5">
                  {related.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/services/digital-it-operations/blogs/${item.slug}`}
                      className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="h-40 overflow-hidden">
                        <img
                          src={item.heroImage}
                          alt={item.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div className="p-5">
                        <span
                          className="text-[11px] font-bold tracking-wide"
                          style={{
                            color: INDIGO_CTA,
                          }}
                        >
                          {item.category}
                        </span>

                        <h3
                          className="font-heading mt-2 line-clamp-2 text-[17px] font-semibold leading-snug"
                          style={{
                            color: CHAMPION_BLUE,
                          }}
                        >
                          {item.title}
                        </h3>

                        <span
                          className="mt-4 inline-flex items-center gap-1 text-xs font-semibold"
                          style={{
                            color: INDIGO_CTA,
                          }}
                        >
                          Read More
                          <ArrowUpRight size={13} />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>
    </main>
  );
}
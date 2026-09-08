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

type BlogDetailProps = {
  post: BlogPost;
  related: BlogPost[];
};

export default function BlogDetail({
  post,
  related,
}: BlogDetailProps) {
  const [copied, setCopied] = useState(false);

  const tableOfContents = useMemo(
    () =>
      post.sections.map((section, index) => ({
        id: `section-${index + 1}`,
        title: section.heading,
      })),
    [post.sections]
  );

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(
        window.location.href
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  const shareUrl = encodeURIComponent(
    typeof window !== "undefined"
      ? window.location.href
      : ""
  );

  const shareTitle = encodeURIComponent(
    post.title
  );

  return (
    <main className="bg-white text-slate-900">
      {/* ====================================================
          HERO
      ==================================================== */}

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("${post.heroImage}")`,
          }}
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          {/* Breadcrumb */}

          <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/80">
            <Link
              href="/services/data-analytics"
              className="transition hover:text-white"
            >
              Data & Analytics
            </Link>

            <ChevronRight className="h-4 w-4" />

            <Link
              href="/services/data-analytics/blogs"
              className="transition hover:text-white"
            >
              Insights
            </Link>

            <ChevronRight className="h-4 w-4" />

            <span className="text-white">
              {post.title}
            </span>
          </div>

          <div className="max-w-4xl">
            <div className="mb-5 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur">
              {post.category}
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              {post.title}
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/85 md:text-xl">
              {post.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-white/80">
              <span>
                Updated {post.lastUpdated}
              </span>

              <span className="h-1 w-1 rounded-full bg-white/50" />

              <span className="flex items-center gap-2">
                <Clock3 className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          CONTENT
      ==================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_320px]">
          {/* ==================================================
              MAIN ARTICLE
          ================================================== */}

          <article className="min-w-0">
            {/* Author */}

            <div className="mb-10 flex items-center gap-4 border-b border-slate-200 pb-8">
              <div className="h-14 w-14 overflow-hidden rounded-full bg-slate-100">
                {post.author.photo ? (
                  <img
                    src={post.author.photo}
                    alt={post.author.name}
                    className="h-full w-full object-cover"
                  />
                ) : null}
              </div>

              <div>
                <p className="font-semibold text-slate-900">
                  {post.author.name}
                </p>

                <p className="text-sm text-slate-500">
                  {post.author.role}
                </p>
              </div>
            </div>

            {/* Share */}

            <div className="mb-12 flex flex-wrap items-center gap-3">
              <span className="mr-2 flex items-center gap-2 text-sm font-medium text-slate-600">
                <Share2 className="h-4 w-4" />
                Share
              </span>

              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium transition hover:border-slate-900 hover:bg-slate-900 hover:text-white"
              >
                LinkedIn
              </a>

              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium transition hover:border-slate-900 hover:bg-slate-900 hover:text-white"
              >
                Facebook
              </a>

              <a
                href={`mailto:?subject=${shareTitle}&body=${shareUrl}`}
                className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium transition hover:border-slate-900 hover:bg-slate-900 hover:text-white"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>

              <button
                type="button"
                onClick={copyUrl}
                className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium transition hover:border-slate-900 hover:bg-slate-900 hover:text-white"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy link
                  </>
                )}
              </button>
            </div>

            {/* Intro */}

            <div className="mb-14 space-y-6">
              {post.intro.map(
                (paragraph, index) => (
                  <p
                    key={index}
                    className="text-lg leading-8 text-slate-600"
                  >
                    {paragraph}
                  </p>
                )
              )}
            </div>

            {/* Highlights */}

            {post.highlights &&
              post.highlights.length > 0 && (
                <section className="mb-16">
                  <div className="grid gap-5 md:grid-cols-3">
                    {post.highlights.map(
                      (highlight) => (
                        <div
                          key={highlight.number}
                          className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                        >
                          <div className="mb-5 text-sm font-semibold text-slate-400">
                            {highlight.number}
                          </div>

                          <h3 className="text-lg font-semibold text-slate-900">
                            {highlight.title}
                          </h3>

                          <p className="mt-3 text-sm leading-6 text-slate-600">
                            {highlight.body}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </section>
              )}

            {/* Article Sections */}

            <div className="space-y-16">
              {post.sections.map(
                (section, index) => (
                  <section
                    key={section.heading}
                    id={`section-${index + 1}`}
                    className="scroll-mt-24"
                  >
                    <div className="mb-6 flex items-start gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <h2 className="text-2xl font-semibold leading-tight text-slate-900 md:text-3xl">
                        {section.heading}
                      </h2>
                    </div>

                    <div className="space-y-5 pl-0 md:pl-[52px]">
                      {section.paragraphs.map(
                        (paragraph, paragraphIndex) => (
                          <p
                            key={paragraphIndex}
                            className="text-base leading-8 text-slate-600 md:text-lg"
                          >
                            {paragraph}
                          </p>
                        )
                      )}

                      {section.image && (
                        <figure className="my-8 overflow-hidden rounded-2xl">
                          <img
                            src={section.image}
                            alt={
                              section.imageAlt ??
                              section.heading
                            }
                            className="h-auto w-full object-cover"
                          />
                        </figure>
                      )}

                      {section.quote && (
                        <blockquote className="my-8 border-l-4 border-slate-900 bg-slate-50 px-6 py-5 text-lg font-medium leading-8 text-slate-800">
                          “{section.quote}”
                        </blockquote>
                      )}
                    </div>
                  </section>
                )
              )}
            </div>

            {/* Benefits */}

            {post.benefits &&
              post.benefits.length > 0 && (
                <section className="mt-20 rounded-3xl bg-slate-950 p-8 text-white md:p-10">
                  <h2 className="text-2xl font-semibold md:text-3xl">
                    Business Benefits
                  </h2>

                  <div className="mt-8 grid gap-6 md:grid-cols-2">
                    {post.benefits.map(
                      (benefit) => (
                        <div
                          key={benefit.title}
                          className="border-t border-white/15 pt-5"
                        >
                          <h3 className="font-semibold">
                            {benefit.title}
                          </h3>

                          <p className="mt-2 text-sm leading-6 text-white/70">
                            {benefit.body}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </section>
              )}

            {/* Process */}

            {post.process &&
              post.process.length > 0 && (
                <section className="mt-20">
                  <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
                    Our Approach
                  </h2>

                  <div className="mt-8 space-y-5">
                    {post.process.map((step) => (
                      <div
                        key={step.number}
                        className="flex gap-5 rounded-2xl border border-slate-200 p-6"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-900">
                          {step.number}
                        </div>

                        <div>
                          <h3 className="font-semibold text-slate-900">
                            {step.title}
                          </h3>

                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            {step.body}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

            {/* Key Takeaways */}

            {post.keyTakeaways &&
              post.keyTakeaways.length > 0 && (
                <section className="mt-20">
                  <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
                    Key Takeaways
                  </h2>

                  <div className="mt-7 space-y-4">
                    {post.keyTakeaways.map(
                      (takeaway, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3"
                        >
                          <Check className="mt-1 h-5 w-5 shrink-0 text-slate-900" />

                          <p className="leading-7 text-slate-600">
                            {takeaway}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </section>
              )}

            {/* Conclusion */}

            {post.conclusion && (
              <section className="mt-20 border-t border-slate-200 pt-12">
                <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
                  Conclusion
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  {post.conclusion}
                </p>
              </section>
            )}

            {/* CTA */}

            {post.cta && (
              <section className="mt-16 rounded-3xl bg-slate-100 p-8 md:p-10">
                <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
                  {post.cta.title}
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                  {post.cta.body}
                </p>

                <Link
                  href={post.cta.buttonHref}
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
                >
                  {post.cta.buttonText}

                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </section>
            )}
          </article>

          {/* ==================================================
              SIDEBAR
          ================================================== */}

          <aside className="lg:sticky lg:top-8 lg:h-fit">
            {/* Author Card */}

            <div className="rounded-2xl border border-slate-200 p-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-slate-100">
                  {post.author.photo ? (
                    <img
                      src={post.author.photo}
                      alt={post.author.name}
                      className="h-full w-full object-cover"
                    />
                  ) : null}
                </div>

                <div>
                  <p className="font-semibold text-slate-900">
                    {post.author.name}
                  </p>

                  <p className="text-sm text-slate-500">
                    {post.author.role}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-600">
                {post.author.bio}
              </p>
            </div>

            {/* TOC */}

            {tableOfContents.length > 0 && (
              <div className="mt-6 rounded-2xl border border-slate-200 p-6">
                <h3 className="font-semibold text-slate-900">
                  In this article
                </h3>

                <nav className="mt-5 space-y-3">
                  {tableOfContents.map(
                    (item, index) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="flex gap-3 text-sm leading-5 text-slate-500 transition hover:text-slate-900"
                      >
                        <span className="font-medium text-slate-400">
                          {String(index + 1).padStart(
                            2,
                            "0"
                          )}
                        </span>

                        <span>{item.title}</span>
                      </a>
                    )
                  )}
                </nav>
              </div>
            )}

            {/* Related */}

            {related.length > 0 && (
              <div className="mt-6 rounded-2xl border border-slate-200 p-6">
                <h3 className="font-semibold text-slate-900">
                  Related Insights
                </h3>

                <div className="mt-5 space-y-5">
                  {related.map((blog) => (
                    <Link
                      key={blog.slug}
                      href={`/services/data-analytics/blogs/${blog.slug}`}
                      className="group block"
                    >
                      <p className="text-sm font-semibold leading-6 text-slate-900 transition group-hover:text-slate-600">
                        {blog.title}
                      </p>

                      <div className="mt-2 flex items-center gap-1 text-xs text-slate-400">
                        <span>
                          {blog.readTime}
                        </span>

                        <ArrowUpRight className="h-3 w-3 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>

      {/* ====================================================
          BOTTOM RELATED ARTICLES
      ==================================================== */}

      {related.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  More from Data & Analytics
                </p>

                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
                  Related insights
                </h2>
              </div>

              <Link
                href="/services/data-analytics/blogs"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900"
              >
                View all insights
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {related.map((blog) => (
                <Link
                  key={blog.slug}
                  href={`/services/data-analytics/blogs/${blog.slug}`}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                    <img
                      src={blog.heroImage}
                      alt={blog.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {blog.category}
                      </span>

                      <span className="text-xs text-slate-400">
                        {blog.readTime}
                      </span>
                    </div>

                    <h3 className="mt-4 text-lg font-semibold leading-7 text-slate-900">
                      {blog.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
                      {blog.excerpt}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-slate-900">
                      Read article
                      <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
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
"use client";

import Link from "next/link";

import {
  MessageCircle,
  Send,
  ArrowUpRight,
} from "lucide-react";

import type {
  BlogPost,
  BlogSection,
} from "./blogsData";

/* ============================================================
   BRAND
============================================================ */

const CHAMPION_BLUE =
  "#1B2560";

const INDIGO_CTA =
  "#4F3FE0";

const LAVENDER =
  "#A48FEA";

const ALIGN =
  "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

/* ============================================================
   ROUTES
============================================================ */

const BLOG_BASE =
  "/services/offerings/sustainability-services/blogs";

const SERVICE_URL =
  "/services/offerings/sustainability-services";

/* ============================================================
   PROPS
============================================================ */

type BlogDetailProps = {
  post: BlogPost;
  related: BlogPost[];
};

/* ============================================================
   COMPONENT
============================================================ */

export default function BlogDetail({
  post,
  related,
}: BlogDetailProps) {
  const shareUrl =
    typeof window !==
    "undefined"
      ? window.location.href
      : "";

  const shareText =
    encodeURIComponent(
      post.title
    );

  const encodedUrl =
    encodeURIComponent(
      shareUrl
    );

  const linkedInUrl =
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

  const facebookUrl =
    `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;

  const xUrl =
    `https://twitter.com/intent/tweet?text=${shareText}&url=${encodedUrl}`;

  const handleNativeShare =
    async () => {
      if (
        typeof navigator ===
        "undefined"
      ) {
        return;
      }

      if (
        navigator.share
      ) {
        try {
          await navigator.share({
            title:
              post.title,

            text:
              post.excerpt,

            url:
              window.location.href,
          });
        } catch {
          // User cancelled
        }

        return;
      }

      try {
        if (
          navigator.clipboard
        ) {
          await navigator.clipboard.writeText(
            window.location.href
          );
        }
      } catch {
        // Clipboard unavailable
      }
    };

  const introParagraphs:
    string[] =
    post.intro ?? [];

  const blogSections:
    BlogSection[] =
    post.sections ?? [];

  return (
    <main className="min-h-screen bg-white">

      <div
        className={`${ALIGN} py-8 sm:py-10`}
      >

        {/* ====================================================
            BREADCRUMB
        ==================================================== */}

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

          <span>/</span>

          <Link
            href="/services"
            className="transition-colors hover:text-[#4F3FE0]"
          >
            Services
          </Link>

          <span>/</span>

          <Link
            href={SERVICE_URL}
            className="transition-colors hover:text-[#4F3FE0]"
          >
            Sustainability Services
          </Link>

          <span>/</span>

          <Link
            href={BLOG_BASE}
            className="transition-colors hover:text-[#4F3FE0]"
          >
            Blogs
          </Link>

          <span>/</span>

          <span className="max-w-full truncate text-slate-700 sm:max-w-[420px]">
            {post.title}
          </span>
        </nav>

        {/* ====================================================
            MAIN LAYOUT
        ==================================================== */}

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-14">

          {/* ARTICLE */}

          <article className="min-w-0">

            {/* CATEGORY */}

            <span
              className="inline-flex rounded-full px-4 py-2 text-sm font-semibold"
              style={{
                backgroundColor:
                  "#F0EDFF",

                color:
                  INDIGO_CTA,
              }}
            >
              {post.category}
            </span>

            {/* TITLE */}

            <h1
              className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
              style={{
                color:
                  CHAMPION_BLUE,
              }}
            >
              {post.title}
            </h1>

            {/* META */}

            <div className="mt-7 flex flex-col gap-5 border-b border-slate-200 pb-7 sm:flex-row sm:items-center">

              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <span>
                  Last Updated:{" "}
                  {post.lastUpdated}
                </span>

                <span>
                  •
                </span>

                <span>
                  {post.readTime}
                </span>
              </div>

              {/* SHARE */}

              <div className="sm:ml-auto">

                <div className="flex flex-wrap items-center gap-3">

                  <span className="text-sm font-medium text-slate-600">
                    Share on
                  </span>

                  {/* LINKEDIN */}

                  <a
                    href={
                      linkedInUrl
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on LinkedIn"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white transition-all hover:-translate-y-0.5 hover:border-[#1B2560]"
                  >
                    <span className="text-sm font-bold text-[#1B2560]">
                      in
                    </span>
                  </a>

                  {/* FACEBOOK */}

                  <a
                    href={
                      facebookUrl
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Facebook"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white transition-all hover:-translate-y-0.5 hover:border-[#1B2560]"
                  >
                    <span className="font-bold text-[#1B2560]">
                      f
                    </span>
                  </a>

                  {/* X */}

                  <a
                    href={
                      xUrl
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on X"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white transition-all hover:-translate-y-0.5 hover:border-[#1B2560]"
                  >
                    <span className="font-bold text-[#1B2560]">
                      X
                    </span>
                  </a>

                  <button
                    type="button"
                    onClick={
                      handleNativeShare
                    }
                    aria-label="Share article"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white transition-all hover:-translate-y-0.5 hover:border-[#1B2560]"
                  >
                    <MessageCircle
                      size={18}
                      style={{
                        color:
                          CHAMPION_BLUE,
                      }}
                    />
                  </button>

                  <button
                    type="button"
                    onClick={
                      handleNativeShare
                    }
                    aria-label="Copy article link"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white transition-all hover:-translate-y-0.5 hover:border-[#1B2560]"
                  >
                    <Send
                      size={17}
                      style={{
                        color:
                          CHAMPION_BLUE,
                      }}
                    />
                  </button>

                </div>
              </div>
            </div>

            {/* HERO IMAGE */}

            <div className="mt-8 overflow-hidden rounded-3xl bg-slate-100">

              <img
                src={
                  post.heroImage
                }
                alt={
                  post.title
                }
                className="h-auto max-h-[620px] w-full object-cover"
              />

            </div>

            {/* INTRO */}

            <div className="mt-10 space-y-5">

              {introParagraphs.map(
                (
                  paragraph,
                  index
                ) => (
                  <p
                    key={index}
                    className="text-lg leading-8 text-slate-600"
                  >
                    {paragraph}
                  </p>
                )
              )}

            </div>

            {/* BLOG SECTIONS */}

            <div className="mt-12 space-y-12">

              {blogSections.map(
                (
                  section,
                  index
                ) => (

                  <section
                    key={`${section.heading}-${index}`}
                    className="scroll-mt-24"
                  >

                    <h2
                      className="text-2xl font-bold leading-tight sm:text-3xl"
                      style={{
                        color:
                          CHAMPION_BLUE,
                      }}
                    >
                      {
                        section.heading
                      }
                    </h2>

                    <div className="mt-5 space-y-5">

                      {section.paragraphs.map(
                        (
                          paragraph,
                          paragraphIndex
                        ) => (

                          <p
                            key={`${paragraphIndex}-${paragraph}`}
                            className="text-base leading-8 text-slate-600 sm:text-lg"
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

          </article>

          {/* ==================================================
              SIDEBAR
          ================================================== */}

          <aside className="lg:sticky lg:top-24 lg:self-start">

            {/* AUTHOR */}

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

              <p
                className="text-sm font-semibold uppercase tracking-wider"
                style={{
                  color:
                    INDIGO_CTA,
                }}
              >
                About the Author
              </p>

              <div className="mt-5">

                <div className="flex items-center gap-4">

                  <img
                    src={
                      post.author.photo
                    }
                    alt={
                      post.author.name
                    }
                    className="h-16 w-16 shrink-0 rounded-full object-cover"
                  />

                  <div>

                    <h3
                      className="font-bold"
                      style={{
                        color:
                          CHAMPION_BLUE,
                      }}
                    >
                      {
                        post.author.name
                      }
                    </h3>

                    <p className="mt-1 text-sm leading-5 text-slate-500">
                      {
                        post.author.role
                      }
                    </p>

                  </div>

                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  {
                    post.author.bio
                  }
                </p>

              </div>

            </div>

            {/* CTA */}

            <div className="mt-8 rounded-3xl bg-[#F5F3FC] p-6">

              <p
                className="text-sm font-semibold uppercase tracking-wider"
                style={{
                  color:
                    INDIGO_CTA,
                }}
              >
                Sustainability Services
              </p>

              <h2
                className="mt-3 text-xl font-bold leading-tight"
                style={{
                  color:
                    CHAMPION_BLUE,
                }}
              >
                Build measurable,
                sustainable operations
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Explore how data,
                technology, automation,
                and intelligent workflows
                can support your
                sustainability goals.
              </p>

              <Link
                href={SERVICE_URL}
                className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
                style={{
                  backgroundColor:
                    CHAMPION_BLUE,
                }}
              >
                Explore Services

                <ArrowUpRight
                  size={15}
                />

              </Link>

            </div>

            {/* RELATED BLOGS */}

            {related.length >
              0 && (

              <div className="mt-8">

                <h2
                  className="text-xl font-bold"
                  style={{
                    color:
                      CHAMPION_BLUE,
                  }}
                >
                  Related Blogs
                </h2>

                <div className="mt-5 space-y-4">

                  {related.map(
                    (
                      item
                    ) => (

                      <Link
                        key={
                          item.slug
                        }
                        href={`${BLOG_BASE}/${item.slug}`}
                        className="group block rounded-2xl border border-slate-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-[#A48FEA] hover:shadow-md"
                      >

                        <div className="flex gap-4">

                          <img
                            src={
                              item.heroImage
                            }
                            alt={
                              item.title
                            }
                            className="h-20 w-24 shrink-0 rounded-xl object-cover"
                          />

                          <div className="min-w-0">

                            <span
                              className="text-[11px] font-semibold uppercase tracking-wide"
                              style={{
                                color:
                                  LAVENDER,
                              }}
                            >
                              BLOG
                            </span>

                            <p className="mt-1 line-clamp-3 text-sm font-semibold leading-6 text-slate-800 group-hover:text-[#4F3FE0]">
                              {
                                item.title
                              }
                            </p>

                            <span
                              className="mt-2 flex items-center gap-1 text-xs font-semibold"
                              style={{
                                color:
                                  INDIGO_CTA,
                              }}
                            >
                              Read More

                              <ArrowUpRight
                                size={13}
                              />

                            </span>

                          </div>

                        </div>

                      </Link>

                    )
                  )}

                </div>

              </div>

            )}

            {/* VIEW ALL */}

            <Link
              href={BLOG_BASE}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold transition-all hover:border-[#A48FEA] hover:bg-[#F8F6FF]"
              style={{
                color:
                  INDIGO_CTA,
              }}
            >
              View All Blogs

              <ArrowUpRight
                size={15}
              />

            </Link>

          </aside>

        </div>

      </div>

    </main>
  );
}
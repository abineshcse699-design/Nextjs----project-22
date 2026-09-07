// app/services/cloud/blogs/BlogDetail.tsx

"use client";

import Link from "next/link";
import {
  MessageCircle,
  Send,
  ArrowUpRight,
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
      <div className={`${ALIGN} py-10`}>
        {/* Breadcrumb */}
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
            href="/services/cloud/blogs"
            className="transition-colors hover:text-[#4F3FE0]"
          >
            Blogs
          </Link>

          <span>/</span>

          <span className="line-clamp-1 text-slate-700">
            {post.title}
          </span>
        </nav>

        {/* Main Layout */}
        <div className="mt-10 grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1fr)_360px]">
          {/* Main Content */}
          <article className="min-w-0">
            {/* Category */}
            <span className="inline-flex rounded-full bg-[#F0EDFF] px-4 py-2 text-sm font-semibold text-[#4F3FE0]">
              {post.category}
            </span>

            {/* Title */}
            <h1
              className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
              style={{
                color: CHAMPION_BLUE,
              }}
            >
              {post.title}
            </h1>

            {/* Meta + Share */}
            <div className="mt-6 flex flex-col gap-5 border-b border-slate-200 pb-6 sm:flex-row sm:items-center">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <span>
                  Last Updated: {post.lastUpdated}
                </span>

                <span>•</span>

                <span>{post.readTime}</span>
              </div>

              {/* Share */}
              <div className="sm:ml-auto">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-slate-600">
                    Share on
                  </span>

                  {/* LinkedIn */}
                  <button
                    type="button"
                    aria-label="Share on LinkedIn"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white transition-all hover:-translate-y-0.5 hover:border-[#1B2560] hover:bg-slate-50"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill={CHAMPION_BLUE}
                      aria-hidden="true"
                    >
                      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2 2 0 1 0 5.25 7 2 2 0 0 0 5.25 3ZM20.44 13.41c0-3.46-1.84-5.07-4.3-5.07-1.98 0-2.87 1.09-3.37 1.86V8.5H9.39V20h3.38v-5.7c0-1.5.28-2.95 2.14-2.95 1.84 0 1.86 1.72 1.86 3.05V20h3.38l.29-6.59Z" />
                    </svg>
                  </button>

                  {/* Facebook */}
                  <button
                    type="button"
                    aria-label="Share on Facebook"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white transition-all hover:-translate-y-0.5 hover:border-[#1B2560] hover:bg-slate-50"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill={CHAMPION_BLUE}
                      aria-hidden="true"
                    >
                      <path d="M14.2 8.2h2.1V4.7c-.36-.05-1.6-.16-3.05-.16-3.02 0-5.1 1.84-5.1 5.22v2.91H4.82v3.91h3.33V24h4.08v-7.42h3.32l.53-3.91h-3.85V10.1c0-1.13.31-1.9 1.97-1.9Z" />
                    </svg>
                  </button>

                  {/* X */}
                  <button
                    type="button"
                    aria-label="Share on X"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white transition-all hover:-translate-y-0.5 hover:border-[#1B2560] hover:bg-slate-50"
                  >
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill={CHAMPION_BLUE}
                      aria-hidden="true"
                    >
                      <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.36l7.24-8.28L2.8 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.9h1.73L8.29 3.98H6.43L17.8 19.9Z" />
                    </svg>
                  </button>

                  {/* Message */}
                  <button
                    type="button"
                    aria-label="Share via message"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white transition-all hover:-translate-y-0.5 hover:border-[#1B2560] hover:bg-slate-50"
                  >
                    <MessageCircle
                      size={18}
                      style={{
                        color: CHAMPION_BLUE,
                      }}
                    />
                  </button>

                  {/* Send */}
                  <button
                    type="button"
                    aria-label="Send"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white transition-all hover:-translate-y-0.5 hover:border-[#1B2560] hover:bg-slate-50"
                  >
                    <Send
                      size={17}
                      style={{
                        color: CHAMPION_BLUE,
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="mt-8 overflow-hidden rounded-3xl">
              <img
                src={post.heroImage}
                alt={post.title}
                className="h-auto max-h-[620px] w-full object-cover"
              />
            </div>

            {/* Intro */}
            {post.intro.length > 0 && (
              <div className="mt-10 space-y-5">
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
            )}

            {/* Blog Sections */}
            {post.sections.length > 0 && (
              <div className="mt-12 space-y-12">
                {post.sections.map(
                  (section, index) => (
                    <section
                      key={`${section.heading}-${index}`}
                      className="scroll-mt-24"
                    >
                      <h2
                        className="text-2xl font-bold leading-tight sm:text-3xl"
                        style={{
                          color: CHAMPION_BLUE,
                        }}
                      >
                        {section.heading}
                      </h2>

                      <div className="mt-5 space-y-5">
                        {section.paragraphs.map(
                          (
                            paragraph,
                            paragraphIndex
                          ) => {
                            const colonIndex =
                              paragraph.indexOf(":");

                            const hasLabel =
                              colonIndex > 0 &&
                              colonIndex < 30;

                            if (hasLabel) {
                              const label =
                                paragraph.slice(
                                  0,
                                  colonIndex + 1
                                );

                              const content =
                                paragraph.slice(
                                  colonIndex + 1
                                );

                              return (
                                <p
                                  key={
                                    paragraphIndex
                                  }
                                  className="text-base leading-8 text-slate-600 sm:text-lg"
                                >
                                  <strong
                                    className="font-semibold"
                                    style={{
                                      color:
                                        CHAMPION_BLUE,
                                    }}
                                  >
                                    {label}
                                  </strong>
                                  {content}
                                </p>
                              );
                            }

                            return (
                              <p
                                key={
                                  paragraphIndex
                                }
                                className="text-base leading-8 text-slate-600 sm:text-lg"
                              >
                                {paragraph}
                              </p>
                            );
                          }
                        )}
                      </div>
                    </section>
                  )
                )}
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            {/* Author Card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#4F3FE0]">
                About the Author
              </p>

              <div className="mt-5">
                <div className="flex items-center gap-4">
                  {post.author.photo && (
                    <img
                      src={post.author.photo}
                      alt={post.author.name}
                      className="h-16 w-16 rounded-full object-cover"
                    />
                  )}

                  <div className="min-w-0">
                    <h3
                      className="font-bold"
                      style={{
                        color: CHAMPION_BLUE,
                      }}
                    >
                      {post.author.name}
                    </h3>

                    <p className="mt-1 text-sm leading-5 text-slate-500">
                      {post.author.role}
                    </p>
                  </div>
                </div>

                {post.author.bio && (
                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    {post.author.bio}
                  </p>
                )}
              </div>
            </div>

            {/* Related Blogs */}
            {related.length > 0 && (
              <div className="mt-8">
                <h2
                  className="text-xl font-bold"
                  style={{
                    color: CHAMPION_BLUE,
                  }}
                >
                  Related Blogs
                </h2>

                <div className="mt-5 space-y-4">
                  {related.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/services/cloud/blogs/${item.slug}`}
                      className="group block rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#A48FEA] hover:shadow-md"
                    >
                      <div className="flex gap-4">
                        {item.heroImage && (
                          <img
                            src={item.heroImage}
                            alt={item.title}
                            className="h-20 w-24 shrink-0 rounded-xl object-cover"
                          />
                        )}

                        <div className="min-w-0">
                          <p className="line-clamp-3 text-sm font-semibold leading-6 text-slate-800 transition-colors group-hover:text-[#4F3FE0]">
                            {item.title}
                          </p>

                          <div className="mt-2 flex items-center gap-1 text-xs font-semibold text-[#4F3FE0]">
                            Read More
                            <ArrowUpRight
                              size={13}
                              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
}
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
const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

type BlogDetailProps = {
  post: BlogPost;
  related: BlogPost[];
};

export default function BlogDetail({
  post,
  related,
}: BlogDetailProps) {
  return (
    <main className="bg-white pt-[92px] lg:pt-[100px]">
      <div className={ALIGN}>
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 py-8 text-sm text-slate-500"
        >
          <Link href="/" className="hover:text-[#4F3FE0]">
            Home
          </Link>
          <ChevronRight size={15} />
          <Link
            href="/services/data-analytics"
            className="hover:text-[#4F3FE0]"
          >
            Data & Analytics
          </Link>
          <ChevronRight size={15} />
          <span className="line-clamp-1">{post.title}</span>
        </nav>

        <div className="grid grid-cols-1 gap-14 pb-24 lg:grid-cols-[minmax(0,1fr)_360px]">
          <article>
            <span
              className="inline-flex rounded-full bg-[#F1EEFC] px-4 py-1.5 text-xs font-bold tracking-wide"
              style={{ color: INDIGO_CTA }}
            >
              {post.category}
            </span>

            <h1
              className="mt-5 max-w-5xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[58px]"
              style={{ color: CHAMPION_BLUE }}
            >
              {post.title}
            </h1>

            <div className="mt-7 flex flex-wrap items-center gap-4 border-b border-slate-200 pb-7 text-sm text-slate-500">
              <span>
                Last Updated:{" "}
                <strong className="text-slate-700">
                  {post.lastUpdated}
                </strong>
              </span>
              <span>•</span>
              <span>{post.readTime}</span>

              <div className="ml-auto flex items-center gap-2">
                <span>Share on</span>
                <a href="#" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill={CHAMPION_BLUE}>
                    <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2 2 0 1 0 5.25 7 2 2 0 0 0 5.25 3ZM20.44 13.41c0-3.46-1.84-5.07-4.3-5.07-1.98 0-2.87 1.09-3.37 1.86V8.5H9.39V20h3.38v-5.7c0-1.5.28-2.95 2.14-2.95 1.84 0 1.86 1.72 1.86 3.05V20h3.38l.29-6.59Z" />
                  </svg>
                </a>
                <a href="#" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill={CHAMPION_BLUE}>
                    <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.67.33-1 1-1Z" />
                  </svg>
                </a>
                <a href="#" aria-label="X">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill={CHAMPION_BLUE}>
                    <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.37l7.24-8.28L2.8 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.83h1.73L8.27 4.05H6.41L17.8 19.83Z" />
                  </svg>
                </a>
                <MessageCircle size={18} style={{ color: CHAMPION_BLUE }} />
                <Send size={17} style={{ color: CHAMPION_BLUE }} />
              </div>
            </div>

            <div className="mt-9 overflow-hidden rounded-3xl">
              <img
                src={post.heroImage}
                alt={post.title}
                className="max-h-[620px] w-full object-cover"
              />
            </div>

            <div className="mt-10 space-y-6">
              {post.intro.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[17px] leading-[1.85] text-slate-700"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 space-y-12">
              {post.sections.map((section, index) => (
                <section key={`${section.heading}-${index}`}>
                  <h2
                    className="text-2xl font-semibold sm:text-3xl"
                    style={{ color: CHAMPION_BLUE }}
                  >
                    {section.heading}
                  </h2>

                  <div className="mt-5 space-y-5">
                    {section.paragraphs.map(
                      (paragraph, paragraphIndex) => (
                        <p
                          key={paragraphIndex}
                          className="text-[16px] leading-[1.85] text-slate-700"
                        >
                          {paragraph}
                        </p>
                      )
                    )}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-14 border-t border-slate-200 pt-8">
              <Link
                href="/services/data-analytics"
                className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: INDIGO_CTA }}
              >
                <ArrowLeft size={16} />
                Back to Data & Analytics
              </Link>
            </div>
          </article>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-slate-200 bg-[#F7F7FB] p-6">
              <p
                className="text-xs font-bold uppercase tracking-[0.14em]"
                style={{ color: INDIGO_CTA }}
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
                    className="text-lg font-semibold"
                    style={{ color: CHAMPION_BLUE }}
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

            {related.length > 0 && (
              <div className="mt-8">
                <h2
                  className="text-2xl font-semibold"
                  style={{ color: CHAMPION_BLUE }}
                >
                  Related Insights
                </h2>

                <div className="mt-5 space-y-5">
                  {related.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/services/data-analytics/blogs/${item.slug}`}
                      className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:shadow-lg"
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
                          style={{ color: INDIGO_CTA }}
                        >
                          {item.category}
                        </span>

                        <h3
                          className="mt-2 line-clamp-2 text-[17px] font-semibold leading-snug"
                          style={{ color: CHAMPION_BLUE }}
                        >
                          {item.title}
                        </h3>

                        <span
                          className="mt-4 inline-flex items-center gap-1 text-xs font-semibold"
                          style={{ color: INDIGO_CTA }}
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
      </div>
    </main>
  );
}

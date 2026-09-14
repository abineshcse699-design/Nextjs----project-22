import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Clock3,
} from "lucide-react";

import type { BlogPost } from "../[blogs]/blogData";

type BlogDetailProps = {
  post: BlogPost;
  related: BlogPost[];
};

const CHAMPION_BLUE = "#1B2560";
const INDIGO_CTA = "#4F3FE0";

const BLOG_BASE = "/services/Quality-Engineering/blogs";

export default function BlogDetail({
  post,
  related,
}: BlogDetailProps) {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#EEF0F7]">
        <div className="mx-auto max-w-[1520px] px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
          <Link
            href={BLOG_BASE}
            className="inline-flex items-center gap-2 text-sm font-semibold transition-transform duration-200 hover:-translate-x-1"
            style={{ color: INDIGO_CTA }}
          >
            <ArrowLeft size={16} />
            Back to Quality Engineering Blogs
          </Link>

          <div className="mt-10 max-w-5xl">
            <span
              className="font-body text-xs font-bold uppercase tracking-[0.16em]"
              style={{ color: INDIGO_CTA }}
            >
              {post.category}
            </span>

            <h1
              className="font-heading mt-5 text-[42px] font-medium leading-[1.1] sm:text-[50px] lg:text-[64px]"
              style={{ color: CHAMPION_BLUE }}
            >
              {post.title}
            </h1>

            <p className="font-body mt-7 max-w-3xl text-[17px] leading-relaxed text-slate-600 sm:text-[19px]">
              {post.excerpt}
            </p>

            <div className="font-body mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">
              <span>{post.author}</span>

              <span>{post.publishedAt}</span>

              <span className="inline-flex items-center gap-1.5">
                <Clock3 size={15} />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
        <div className="mt-10 overflow-hidden rounded-3xl">
          <img
            src={post.heroImage}
            alt={post.title}
            className="h-[280px] w-full object-cover sm:h-[420px] lg:h-[560px]"
          />
        </div>
      </section>

      {/* ARTICLE */}
      <article className="mx-auto max-w-[900px] px-6 py-16 sm:px-10 lg:py-24">
        <p className="font-heading text-[21px] font-medium leading-relaxed text-slate-700 sm:text-[25px]">
          {post.body}
        </p>

        <div className="mt-16 space-y-16">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2
                className="font-heading text-[27px] font-semibold leading-snug sm:text-[34px]"
                style={{ color: CHAMPION_BLUE }}
              >
                {section.heading}
              </h2>

              <div className="mt-6 space-y-5">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="font-body text-[16px] leading-8 text-slate-600"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {section.bullets &&
                section.bullets.length > 0 && (
                  <ul className="mt-7 space-y-4">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 font-body text-[16px] leading-7 text-slate-600"
                      >
                        <span
                          className="mt-3 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                          style={{
                            backgroundColor: INDIGO_CTA,
                          }}
                        />

                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
            </section>
          ))}
        </div>
      </article>

      {/* RELATED BLOGS */}
      {related.length > 0 && (
        <section className="bg-[#EEF0F7] py-20 lg:py-24">
          <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
            <div className="flex items-end justify-between gap-6">
              <div>
                <span
                  className="font-body text-xs font-bold uppercase tracking-[0.16em]"
                  style={{ color: INDIGO_CTA }}
                >
                  More Insights
                </span>

                <h2
                  className="font-heading mt-3 text-[32px] font-medium sm:text-[42px]"
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
                      className="font-body text-[12px] font-semibold uppercase tracking-wide"
                      style={{ color: INDIGO_CTA }}
                    >
                      {item.category}
                    </span>

                    <h3
                      className="font-heading mt-2 text-[19px] font-semibold leading-snug"
                      style={{ color: CHAMPION_BLUE }}
                    >
                      {item.title}
                    </h3>

                    <p className="font-body mt-3 line-clamp-3 text-[14px] leading-relaxed text-slate-600">
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

      {/* CTA */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
          <div
            className="overflow-hidden rounded-[28px] px-8 py-16 text-center sm:px-16"
            style={{ backgroundColor: CHAMPION_BLUE }}
          >
            <h2 className="font-heading mx-auto max-w-2xl text-[32px] font-medium leading-[1.2] text-white lg:text-[40px]">
              Ready to Build a Better Quality Strategy?
            </h2>

            <p className="font-body mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/70">
              Talk to Starfii about quality engineering, test
              automation, AI assisted testing, API testing,
              performance testing, and continuous testing.
            </p>

            <a
              href="mailto:hello@starfii.com"
              className="font-body mt-9 inline-flex items-center gap-2 rounded-full px-7 py-4 text-[15px] font-semibold transition-transform duration-300 hover:scale-[1.03]"
              style={{
                backgroundColor: "#FFFFFF",
                color: CHAMPION_BLUE,
              }}
            >
              Connect Now
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
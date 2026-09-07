import Link from "next/link";
import type { BlogPost } from "./blogsData";

type BlogDetailProps = {
  post: BlogPost;
  related: BlogPost[];
};

const CHAMPION_BLUE = "#1B2560";
const INDIGO_CTA = "#4F3FE0";

export default function BlogDetail({
  post,
  related,
}: BlogDetailProps) {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={post.heroImage}
            alt={post.title}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/30" />
        </div>

        <div className="relative mx-auto max-w-[1520px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          {/* BREADCRUMB */}
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <Link
              href="/"
              className="text-slate-600 hover:underline"
            >
              Home
            </Link>

            <span>/</span>

            <Link
              href="/services/offerings/vibe-coding"
              className="text-slate-600 hover:underline"
            >
              Vibe Coding
            </Link>

            <span>/</span>

            <Link
              href="/services/offerings/vibe-coding/blogs"
              className="text-slate-600 hover:underline"
            >
              Blogs
            </Link>
          </div>

          <span
            className="mt-10 inline-block text-xs font-semibold tracking-widest"
            style={{ color: INDIGO_CTA }}
          >
            BLOG
          </span>

          <h1
            className="mt-4 max-w-4xl text-4xl font-semibold leading-tight lg:text-6xl"
            style={{ color: CHAMPION_BLUE }}
          >
            {post.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="mx-auto max-w-4xl px-6 py-20 sm:px-10">
        <div className="space-y-7">
          {post.body.map((paragraph, index) => (
            <p
              key={index}
              className="text-[17px] leading-[1.9] text-slate-700"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      {/* RELATED BLOGS */}
      {related.length > 0 && (
        <section className="bg-[#EEF0F7] py-20">
          <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
            <h2
              className="text-3xl font-semibold lg:text-4xl"
              style={{ color: CHAMPION_BLUE }}
            >
              Related Insights
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/offerings/vibe-coding/blogs/${item.slug}`}
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
                      className="text-xs font-semibold tracking-wider"
                      style={{ color: INDIGO_CTA }}
                    >
                      BLOG
                    </span>

                    <h3
                      className="mt-3 text-xl font-semibold leading-snug"
                      style={{ color: CHAMPION_BLUE }}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {item.excerpt}
                    </p>
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
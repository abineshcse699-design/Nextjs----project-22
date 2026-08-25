import Link from "next/link";
import { ArrowUpRight, Newspaper } from "lucide-react";

const CONTAINER =
  "mx-auto max-w-[1830px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12";

const stories = [
  {
    category: "Company",
    title: "Building the next generation of digital technology with Starfii",
  },
  {
    category: "Technology",
    title: "How AI-powered engineering is changing modern product development",
  },
  {
    category: "Innovation",
    title: "Turning complex technology challenges into scalable digital solutions",
  },
];

export default function NewsroomPage() {
  return (
    <main className="min-h-screen bg-white pt-32">
      <section className="bg-[#0C0E2A]">
        <div className={`${CONTAINER} py-24 lg:py-32`}>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9EA3FF]">
            Updates & Highlights
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
            Newsroom
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70">
            Explore company updates, technology perspectives, announcements,
            and stories from Starfii.
          </p>
        </div>
      </section>

      <section className={`${CONTAINER} py-20 lg:py-28`}>
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#3B2FE0]">
            Latest Updates
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Stories from Starfii
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.title}
              className="group rounded-xl border border-[#E4E4EF] p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F1EFFF] text-[#3B2FE0]">
                <Newspaper size={22} />
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.14em] text-[#8A8CA6]">
                {story.category}
              </p>

              <h3 className="mt-3 text-xl font-semibold leading-snug">
                {story.title}
              </h3>

              <Link
                href="#"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#3B2FE0]"
              >
                Read more
                <ArrowUpRight size={15} />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
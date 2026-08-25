import { CalendarDays, ArrowUpRight } from "lucide-react";

// Shared page-width wrapper — kept in sync with the navbar's own
// max-width/padding so every section lines up with it exactly.
const ALIGN =
  "mx-auto max-w-[1830px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12";

const events = [
  {
    type: "Industry Event",
    title: "Technology & Innovation",
    description:
      "Connect with our team and explore the latest perspectives in technology, AI, engineering, and digital transformation.",
  },
  {
    type: "Leadership",
    title: "Executive Conversations",
    description:
      "Thoughtful conversations around technology strategy, innovation, business transformation, and the future of digital enterprises.",
  },
  {
    type: "Community",
    title: "Starfii Community",
    description:
      "Engagements that bring together technology professionals, innovators, and industry leaders.",
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white pt-32">
      <section className="bg-[#0C0E2A]">
        <div className={`${ALIGN} py-24 lg:py-32`}>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9EA3FF]">
            Updates & Highlights
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
            Events
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70">
            Discover the conversations, engagements, and experiences shaping
            the future of technology and digital business.
          </p>
        </div>
      </section>

      <section className={`${ALIGN} py-20 lg:py-28`}>
        <div className="grid gap-6 md:grid-cols-3">
          {events.map((event) => (
            <article
              key={event.title}
              className="rounded-xl border border-[#E4E4EF] p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F1EFFF] text-[#3B2FE0]">
                <CalendarDays size={23} />
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.14em] text-[#8A8CA6]">
                {event.type}
              </p>

              <h2 className="mt-3 text-2xl font-semibold">
                {event.title}
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-[#5B5D78]">
                {event.description}
              </p>

              <button
                type="button"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#3B2FE0]"
              >
                Explore
                <ArrowUpRight size={15} />
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
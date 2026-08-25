import { Award, Star, Trophy } from "lucide-react";

// Shared page-width wrapper — kept in sync with the navbar's own
// max-width/padding so every section lines up with it exactly.
const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

const recognitionAreas = [
  {
    icon: Award,
    title: "Technology Excellence",
    description:
      "Recognition for our commitment to engineering quality, innovation, and modern technology solutions.",
  },
  {
    icon: Trophy,
    title: "Client Success",
    description:
      "Our strongest recognition comes from delivering meaningful outcomes and building lasting relationships with our clients.",
  },
  {
    icon: Star,
    title: "Innovation",
    description:
      "We continuously explore new technologies and approaches to help organizations solve complex business challenges.",
  },
];

export default function AwardsPage() {
  return (
    <main className="min-h-screen bg-white pt-32">
      <section className="bg-[#0C0E2A]">
        <div className={`${ALIGN} py-24 lg:py-32`}>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9EA3FF]">
            Updates & Highlights
          </p>

          <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
            Awards &
            <br />
            <span className="text-[#9EA3FF]">
              Recognitions
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70">
            Recognition reflects our continued commitment to technology
            excellence, innovation, client success, and meaningful impact.
          </p>
        </div>
      </section>

      <section className={`${ALIGN} py-20 lg:py-28`}>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#3B2FE0]">
            Recognition
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Excellence worth recognizing.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#5B5D78]">
            We are committed to continuously raising the standard across
            technology, engineering, innovation, and client delivery.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {recognitionAreas.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-xl border border-[#E4E4EF] bg-[#FAFAFD] p-8"
              >
                <Icon size={30} className="text-[#3B2FE0]" />

                <h3 className="mt-7 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-[#5B5D78]">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );

}
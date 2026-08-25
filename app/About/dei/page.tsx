import {
  HeartHandshake,
  Users,
  Sparkles,
  ArrowRight,
} from "lucide-react";

// Shared page-width wrapper — kept in sync with the navbar's own
// max-width/padding so every section lines up with it exactly.
const ALIGN =
  "mx-auto max-w-[1830px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12";

const commitments = [
  {
    icon: Users,
    title: "Inclusive Culture",
    description:
      "We foster an environment where people from different backgrounds, experiences, and perspectives can contribute, collaborate, and grow.",
  },
  {
    icon: HeartHandshake,
    title: "Equitable Opportunity",
    description:
      "We believe meaningful opportunities should be accessible to people based on their capabilities, potential, and contributions.",
  },
  {
    icon: Sparkles,
    title: "Diverse Perspectives",
    description:
      "Different perspectives strengthen teams, encourage innovation, and help us create better outcomes for our clients and communities.",
  },
];

export default function DEIPage() {
  return (
    <main className="min-h-screen bg-white pt-32">
      {/* HERO */}
      <section className="bg-[#0C0E2A]">
        <div className={`${ALIGN} py-24 lg:py-32`}>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9EA3FF]">
            Purpose & Impact
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
            Diversity, Equity
            <br />
            <span className="text-[#9EA3FF]">
              & Inclusion
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70">
            We believe diverse perspectives, equitable opportunities, and
            inclusive teams create stronger organizations and better
            technology outcomes.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className={`${ALIGN} py-20 lg:py-28`}>
        <div className="grid gap-12 lg:grid-cols-2">
          <h2 className="text-4xl font-semibold tracking-tight text-[#14163B] sm:text-5xl">
            Building a culture where every perspective matters.
          </h2>

          <p className="text-lg leading-8 text-[#5B5D78]">
            At Starfii, inclusion is part of how we work. We bring together
            people with different experiences, skills, perspectives, and
            ideas to create an environment where everyone can contribute and
            achieve their potential.
          </p>
        </div>
      </section>

      {/* COMMITMENTS */}
      <section className="bg-[#FAFAFD] py-20 lg:py-28">
        <div className={ALIGN}>
          <div className="grid gap-6 md:grid-cols-3">
            {commitments.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-xl border border-[#E4E4EF] bg-white p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F1EFFF] text-[#3B2FE0]">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-7 text-xl font-semibold text-[#14163B]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-[#5B5D78]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#3B2FE0]">
        <div className={`${ALIGN} py-20`}>
          <h2 className="text-4xl font-semibold text-white">
            Together, we create better possibilities.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
            Strong teams are built on respect, inclusion, collaboration, and
            the freedom to bring different perspectives to the table.
          </p>
        </div>
      </section>
    </main>
  );
}
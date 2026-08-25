import {
  Leaf,
  Users,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

// Shared page-width wrapper — kept in sync with the navbar's own
// max-width/padding so every section lines up with it exactly.
const ALIGN =
  "mx-auto max-w-[1830px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12";

const pillars = [
  {
    icon: Leaf,
    title: "Environmental Responsibility",
    description:
      "We recognize the importance of responsible technology and sustainable business practices in creating long-term value.",
  },
  {
    icon: Users,
    title: "Social Impact",
    description:
      "We aim to create positive impact through our people, technology, communities, and the way we engage with our stakeholders.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible Governance",
    description:
      "Strong governance, accountability, transparency, and responsible decision-making are fundamental to sustainable growth.",
  },
];

export default function ESGPage() {
  return (
    <main className="min-h-screen bg-white pt-32">
      <section className="bg-[#0C0E2A]">
        <div className={`${ALIGN} py-24 lg:py-32`}>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9EA3FF]">
            Purpose & Impact
          </p>

          <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
            Environmental,
            <br />
            Social &{" "}
            <span className="text-[#9EA3FF]">
              Governance
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70">
            Our approach to environmental responsibility, social impact, and
            responsible governance supports sustainable value for our people,
            clients, communities, and stakeholders.
          </p>
        </div>
      </section>

      <section className={`${ALIGN} py-20 lg:py-28`}>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#3B2FE0]">
            Our Approach
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#14163B] sm:text-5xl">
            Creating sustainable value through responsible technology.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#5B5D78]">
            We recognize that responsible growth extends beyond business
            performance. Our ESG approach considers how our decisions affect
            people, communities, the environment, and the long-term
            sustainability of our organization.
          </p>
        </div>
      </section>

      <section className="bg-[#FAFAFD] py-20 lg:py-28">
        <div className={`${ALIGN} grid gap-6 md:grid-cols-3`}>
          {pillars.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-xl border border-[#E4E4EF] bg-white p-8"
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
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const T = {
  ink: "text-[#14163B]",
  inkBg: "bg-[#0C0E2A]",
  primary: "text-[#3B2FE0]",
  primaryBg: "bg-[#3B2FE0]",
  primaryHoverBg: "hover:bg-[#2E24B8]",
  muted: "text-[#5B5D78]",
  border: "border-[#E4E4EF]",
  panelBg: "bg-[#FAFAFD]",
};

export const metadata = {
  title: "Leadership | Starfii",
  description:
    "Meet the leadership team steering Starfii's product engineering, AI, and delivery practice.",
};

/* Replace initials/photos with real headshots when available —
   the "initials" field is just a placeholder avatar until then. */

const executives = [
  {
    name: "Arun Prakash",
    role: "Founder & Chief Executive Officer",
    initials: "AP",
    bio: "Started Starfii after leading product engineering teams through three enterprise SaaS scale-ups. Sets the long-term bet on where AI-native delivery is headed.",
  },
  {
    name: "Meera Sundaram",
    role: "Chief Technology Officer",
    initials: "MS",
    bio: "Owns the technical bar across every engagement — architecture reviews, platform strategy, and the engineering standards every pod ships against.",
  },
  {
    name: "Rohan Desai",
    role: "Chief Operating Officer",
    initials: "RD",
    bio: "Runs delivery operations end to end, from pod staffing to client success, so engineering velocity never comes at the cost of predictability.",
  },
  {
    name: "Priya Varma",
    role: "VP, AI & Data Engineering",
    initials: "PV",
    bio: "Leads the applied AI practice — generative AI, LLM engineering, and the data infrastructure that makes both production-ready.",
  },
  {
    name: "Karthik Iyer",
    role: "VP, Enterprise Platforms",
    initials: "KI",
    bio: "Heads the platform group behind RapidX, Tensai, Amaze, and Agentverse, turning repeat client patterns into reusable product accelerators.",
  },
  {
    name: "Divya Nair",
    role: "VP, People & Culture",
    initials: "DN",
    bio: "Builds the hiring bar and growth paths that keep Starfii staffed with senior engineers instead of a rotating bench of juniors.",
  },
];

const principles = [
  {
    title:
      "Decisions move at the speed of the smallest team that needs to make them.",
    body: "We keep engineering pods small and empowered rather than routing every call through a steering committee.",
  },
  {
    title: "Leaders stay close to delivery, not just strategy decks.",
    body: "Every executive here still sits in architecture reviews and client escalations — leadership is accountable to the work, not adjacent to it.",
  },
  {
    title: "We hire leaders who've been the engineer in the room before.",
    body: "Every VP and above has shipped production code themselves, so technical trade-offs get made by people who understand the cost of each one.",
  },
];

export default function LeadershipPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="border-b border-[#E4E4EF] pt-40 pb-20 lg:pt-48 lg:pb-24">
        <div className="mx-auto max-w-[1520px] px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
          <p
            className={`text-[13px] font-semibold uppercase tracking-[0.14em] ${T.primary}`}
          >
            About Starfii / Leadership
          </p>

          <h1
            className={`mt-5 max-w-3xl text-[42px] font-bold leading-[1.1] ${T.ink} lg:text-[52px]`}
          >
            The team accountable for every product we ship.
          </h1>

          <p
            className={`mt-6 max-w-2xl text-[17px] leading-relaxed ${T.muted}`}
          >
            Our leadership team spans product engineering, applied AI, and
            delivery operations — each of them still close enough to the work
            to be the escalation point when a client needs one.
          </p>
        </div>
      </section>

      {/* Executive grid */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-[1520px] px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {executives.map((exec) => (
              <div
                key={exec.name}
                className={`rounded-lg border ${T.border} p-7 transition-shadow duration-150 hover:shadow-[0_12px_28px_rgba(10,14,40,0.08)]`}
              >
                {/* Avatar */}
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-full ${T.inkBg} text-[16px] font-semibold text-white`}
                >
                  {exec.initials}
                </div>

                {/* Name */}
                <h3 className={`mt-5 text-[18px] font-semibold ${T.ink}`}>
                  {exec.name}
                </h3>

                {/* Role */}
                <p
                  className={`mt-1 text-[13.5px] font-semibold ${T.primary}`}
                >
                  {exec.role}
                </p>

                {/* Bio */}
                <p
                  className={`mt-3 text-[14px] leading-relaxed ${T.muted}`}
                >
                  {exec.bio}
                </p>

                {/* LinkedIn */}
                <a
                  href="#"
                  aria-label={`${exec.name} on LinkedIn`}
                  className={`mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold ${T.ink} opacity-70 transition-opacity hover:opacity-100`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>

                  Connect on LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership principles */}
      <section className={`${T.panelBg} py-20 lg:py-24`}>
        <div className="mx-auto max-w-[1520px] px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
          <p
            className={`text-[13px] font-semibold uppercase tracking-[0.14em] ${T.primary}`}
          >
            How we lead
          </p>

          <h2
            className={`mt-4 max-w-xl text-[28px] font-bold leading-tight ${T.ink} lg:text-[32px]`}
          >
            Leadership principles, not a leadership deck.
          </h2>

          <div className={`mt-12 divide-y ${T.border}`}>
            {principles.map((p, idx) => (
              <div
                key={p.title}
                className={`grid grid-cols-1 gap-3 py-8 lg:grid-cols-[60px_1fr_1.2fr] ${
                  idx === 0 ? "border-t border-[#E4E4EF]" : ""
                }`}
              >
                {/* Number */}
                <p className={`text-[15px] font-bold ${T.primary}`}>
                  0{idx + 1}
                </p>

                {/* Principle title */}
                <h3
                  className={`text-[17px] font-semibold leading-snug ${T.ink}`}
                >
                  {p.title}
                </h3>

                {/* Principle description */}
                <p
                  className={`text-[14.5px] leading-relaxed ${T.muted}`}
                >
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${T.inkBg} py-20 lg:py-24`}>
        <div className="mx-auto flex max-w-[1520px] flex-col items-start justify-between gap-8 px-6 sm:px-8 md:px-10 lg:flex-row lg:items-center lg:px-12 xl:px-16">
          <div>
            <h2 className="text-[26px] font-bold text-white lg:text-[30px]">
              Want to meet the team behind your build?
            </h2>

            <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-white/70">
              We'll bring the right lead — engineering, AI, or delivery —
              into your first call.
            </p>
          </div>

          <Link
            href="/contact"
            className={`inline-flex shrink-0 items-center gap-2 rounded-md ${T.primaryBg} ${T.primaryHoverBg} px-7 py-3.5 text-[15px] font-semibold text-white transition-colors`}
          >
            Contact us
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Quote } from "lucide-react";

const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

type Feature = { title: string; desc: string };
type Stat = { value: string; label: string };
type Step = { title: string; desc: string };
type UseCase = { title: string; desc: string };
type FAQ = { q: string; a: string };

type PlatformPageProps = {
  eyebrow: string;
  name: string;
  tagline: string;
  intro: string;
  stats: Stat[];
  features: Feature[];
  howItWorks: Step[];
  useCases: UseCase[];
  industries: string[];
  whyUs: string[];
  testimonial: { quote: string; author: string; role: string };
  faqs: FAQ[];
  ctaHref?: string;
};

export default function PlatformPageTemplate({
  eyebrow,
  name,
  tagline,
  intro,
  stats,
  features,
  howItWorks,
  useCases,
  industries,
  whyUs,
  testimonial,
  faqs,
  ctaHref = "/#form",
}: PlatformPageProps) {
  return (
    <main className={`${ALIGN}  bg-white pb-24 pt-40`}>
      {/* 1. Hero */}
      <section className="max-w-3xl">
        <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#3B2FE0]">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-[40px] font-semibold leading-tight text-[#14163B] sm:text-[52px]">
          {name}
        </h1>
        <p className="mt-4 text-[19px] leading-relaxed text-[#5B5D78]">
          {tagline}
        </p>
        <p className="mt-6 text-[16px] leading-relaxed text-[#5B5D78]">
          {intro}
        </p>
        <Link
          href={ctaHref}
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#3B2FE0] px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#2E24B8]"
        >
          Talk to us
          <ArrowUpRight size={16} />
        </Link>
      </section>

      {/* 2. Stats bar */}
      <section className="mt-16 grid grid-cols-2 gap-6 rounded-2xl border border-[#E4E4EF] p-8 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center sm:text-left">
            <p className="text-[30px] font-semibold text-[#14163B] sm:text-[36px]">
              {s.value}
            </p>
            <p className="mt-1 text-[13.5px] text-[#5B5D78]">{s.label}</p>
          </div>
        ))}
      </section>

      {/* 3. Features */}
      <section className="mt-20">
        <h2 className="text-[26px] font-semibold text-[#14163B]">
          What {name} gives you
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="rounded-lg border border-[#E4E4EF] p-6">
              <CheckCircle2 size={22} className="text-[#3B2FE0]" />
              <h3 className="mt-4 text-[18px] font-semibold text-[#14163B]">
                {f.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-[#5B5D78]">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. How it works */}
      <section className="mt-20">
        <h2 className="text-[26px] font-semibold text-[#14163B]">How it works</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((step, i) => (
            <div key={step.title} className="relative border-l-2 border-[#E4E4EF] pl-5">
              <span className="text-[13px] font-semibold text-[#3B2FE0]">
                Step {i + 1}
              </span>
              <h3 className="mt-2 text-[16.5px] font-semibold text-[#14163B]">
                {step.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[#5B5D78]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Use cases */}
      <section className="mt-20">
        <h2 className="text-[26px] font-semibold text-[#14163B]">Use cases</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {useCases.map((u) => (
            <div key={u.title} className="rounded-lg bg-[#FAFAFD] border border-[#E4E4EF] p-6">
              <h3 className="text-[16.5px] font-semibold text-[#14163B]">{u.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[#5B5D78]">{u.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Industries served */}
      <section className="mt-20">
        <h2 className="text-[26px] font-semibold text-[#14163B]">Industries we serve</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {industries.map((ind) => (
            <span
              key={ind}
              className="rounded-full border border-[#E4E4EF] bg-white px-4 py-2 text-[13.5px] font-medium text-[#14163B]"
            >
              {ind}
            </span>
          ))}
        </div>
      </section>

      {/* 7. Why us */}
      <section className="mt-20 rounded-2xl border border-[#E4E4EF] p-8 sm:p-10">
        <h2 className="text-[26px] font-semibold text-[#14163B]">Why choose {name}</h2>
        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {whyUs.map((w) => (
            <li key={w} className="flex items-start gap-3">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#3B2FE0]" />
              <span className="text-[14.5px] leading-relaxed text-[#5B5D78]">{w}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 8. Testimonial */}
      <section className="mt-20 rounded-2xl bg-[#FAFAFD] p-10">
        <Quote size={28} className="text-[#3B2FE0]" />
        <p className="mt-4 max-w-3xl text-[19px] font-medium leading-relaxed text-[#14163B]">
          {testimonial.quote}
        </p>
        <p className="mt-4 text-[14px] text-[#5B5D78]">
          <span className="font-semibold text-[#14163B]">{testimonial.author}</span>
          {" — "}
          {testimonial.role}
        </p>
      </section>

      {/* 9. FAQ */}
      <section className="mt-20">
        <h2 className="text-[26px] font-semibold text-[#14163B]">
          Frequently asked questions
        </h2>
        <div className="mt-8 divide-y divide-[#E4E4EF] border-t border-[#E4E4EF]">
          {faqs.map((f) => (
            <div key={f.q} className="py-5">
              <h3 className="text-[16px] font-semibold text-[#14163B]">{f.q}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-[#5B5D78]">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. Bottom CTA */}
      <section className="mt-20 rounded-2xl bg-[#0C0E2A] p-10 text-white sm:p-14">
        <h2 className="text-[26px] font-semibold sm:text-[32px]">
          Ready to see {name} in action?
        </h2>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/70">
          Talk to our team to explore how {name} fits into your roadmap.
        </p>
        <Link
          href={ctaHref}
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-white/10 px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-white/15"
        >
          Get in touch
          <ArrowUpRight size={16} />
        </Link>
      </section>
    </main>
  );
}
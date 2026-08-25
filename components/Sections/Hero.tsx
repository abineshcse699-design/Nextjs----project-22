import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[760px] w-full overflow-hidden bg-[#0b1224]">
      {/* Background */}
      <div aria-hidden="true" className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/d1.jpg"
          alt=""
          className="h-full w-full object-cover"
        />

        {/* Light overlay — no dark fade at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1224]/60 via-[#0b1224]/20 to-transparent" />
      </div>

      {/* Hero Content — same max-w and px breakpoints as the navbar's
          outer wrapper (mx-auto max-w-[1830px] px-4 ... xl:px-12) so the
          heading/CTA lines up exactly under the logo/nav edges. */}
      <div className="relative z-10 mx-auto max-w-[1830px] px-4 pt-[170px] sm:px-6 md:px-8 lg:px-10 lg:pt-[190px] xl:px-12">
        <h1 className="max-w-2xl text-[44px] font-medium leading-[1.1] text-white sm:text-[56px] lg:text-[64px]">
          Zero Friction. Infinite
          <br />
          Momentum.
        </h1>

        <p className="mt-6 max-w-lg text-lg text-slate-200/90">
          Eliminate every gap between your enterprise and peak performance.
        </p>

        <a
          href="#contact"
          className="mt-8 flex w-fit items-center gap-2 rounded-xl bg-white px-6 py-4 text-[15px] font-semibold text-[#3B2FE0] transition-transform hover:scale-[1.03]"
        >
          Contact Now
          <ArrowUpRight size={18} strokeWidth={2.5} />
        </a>
      </div>
    </section>
  );
}
import { ArrowUpRight } from "lucide-react";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[820px] w-full overflow-hidden bg-[#0b1a2e]">
      {/* Background photo */}
      <img
        src="/next.svg"
        alt="Homepage Hero Banner"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <Navbar />

      {/* Copy */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1760px] flex-col justify-center px-8 pb-24 pt-[160px] lg:px-16 lg:pt-[180px]">
        <h1 className="max-w-3xl text-[44px] font-medium leading-[1.1] text-white sm:text-[56px] lg:text-[68px]">
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
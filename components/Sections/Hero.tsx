import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[760px] w-full overflow-hidden bg-[#0b1224]">
      {/* Background */}
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src="/d1.jpg"
          alt=""
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1224]/60 via-[#0b1224]/20 to-transparent" />
      </div>

      {/* Hero Content */}
       <div className="relative z-10 mx-auto max-w-[1520px] px-6 pt-[170px] sm:px-10 lg:px-16 lg:pt-[190px]">
        <p className="font-body text-[13px] font-semibold uppercase tracking-[0.16em] text-white/70">
          AI Led Software Development Company
        </p>

        <h1 className="font-heading mt-5 max-w-2xl text-[30px] font-medium leading-[1.15] text-white sm:text-[38px] lg:text-[44px]">
          Custom Software And Product Engineering
          <br />
          Built For Zero Friction Growth
        </h1>

        <p className="font-body mt-6 max-w-lg text-lg text-slate-200/90">
          Starfii designs, builds, and scales high performance web, mobile,
          and AI powered products for enterprises, so your business moves
          from idea to launch with zero friction and unstoppable momentum.
        </p>

        <a
          href="#contact"
          className="font-body mt-8 flex w-fit items-center gap-2 rounded-xl bg-white px-6 py-4 text-[15px] font-semibold text-[#3B2FE0] transition-transform hover:scale-[1.03]"
        >
          Talk To Our Team
          <ArrowUpRight size={18} strokeWidth={2.5} />
        </a>
      </div>
    </section>
  );

}

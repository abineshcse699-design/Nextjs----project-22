import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[760px] w-full overflow-hidden bg-[#0b1224]">
      {/* Background — real photo now (/public/hero-bg.jpg), with a
          dark gradient overlay on top so the white heading/copy stay
          readable. Swap the src below if you rename/replace the file. */}
      <div aria-hidden="true" className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-bg.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1224]/75 via-[#0b1224]/45 to-[#0b1224]/90" />
      </div>

      {/* Glowing ring, echoes the "sun behind the peak" motif from
          the reference without needing a photo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[6%] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full opacity-90 sm:h-[500px] sm:w-[500px] lg:h-[560px] lg:w-[560px]"
        style={{
          background:
            "radial-gradient(circle, transparent 58%, rgba(255,255,255,0.9) 60%, rgba(255,255,255,0.35) 63%, transparent 66%)",
          filter: "blur(2px)",
          boxShadow: "0 0 140px 40px rgba(150,180,255,0.15)",
        }}
      />

      {/* Faint skyline silhouette, purely decorative CSS shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[40%] bg-[linear-gradient(180deg,transparent,rgba(4,8,20,0.85)_70%,#04070f_100%)]"
      />

      {/* Navbar was removed from here — it now lives in app/layout.tsx
          as a direct child of <body>, fixed + floating over this
          section (a rounded white pill with side/top gaps). Don't
          re-add <Navbar /> here, and don't add a spacer above this
          section — the hero starts at the very top of the page so
          its background shows through the gaps around the floating
          navbar. */}

      {/* Copy — pinned with a fixed offset from the top (not
          vertically centered in the viewport) so it always starts
          right below the navbar at the same spot, on any screen
          height, matching the reference. Navbar is roughly ~102px
          tall including its top gap, so pt-[190px] on lg leaves a
          consistent, deliberate gap under it — not a full centered
          block that drifts on tall viewports. */}
      <div className="relative z-10 mx-auto max-w-[1760px] px-8 pt-[170px] lg:px-16 lg:pt-[190px]">
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
"use client";

export default function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/a1.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Darken the video */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Cinematic gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-black/80" />

      {/* Optional subtle side darkness */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/20" />
    </div>
  );
}
// Server Component — this is what Next.js needs `metadata` to live in.
// All the interactive/animated markup lives in AboutStarfiiClient.tsx.

import AboutStarfiiClient from "./AboutStarfiiClient";

export const metadata = {
  title: "About Starfii | AI-Driven Product Engineering",
  description:
    "Starfii Technologies builds intelligent technology solutions that help businesses move from ideas to meaningful digital outcomes.",
      icons: {
    icon: [
      {
        url: "/starfii_star_flat.svg",
        type: "image/svg+xml",
        sizes: "32x32",
      },
    ],
  },
};

export default function AboutStarfiiPage() {
  return <AboutStarfiiClient />;
}
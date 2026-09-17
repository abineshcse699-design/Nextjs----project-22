import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Join Starfii? | Starfii Careers",
  description:
    "Build your career at the intersection of AI and enterprise impact. Discover why people choose to work at Starfii.",
};

export default function WhyJoinStarfiiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
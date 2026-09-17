import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs & Learning | Starfii Careers",
  description:
    "From day-one onboarding to leadership tracks, explore Starfii's structured learning programs, mentorship, and certification support.",
};

export default function ProgramsLearningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Education & Institutions | Starfii",
  description:
    "Digital learning, administration and institutional technology solutions for education organizations.",
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

export default function EducationLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
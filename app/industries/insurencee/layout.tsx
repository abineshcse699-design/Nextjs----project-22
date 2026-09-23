import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Insurance | Starfii",
  description:
    "Modernize insurance products, customer experiences and operations through intelligent technology.",
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

export default function InsuranceLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Transportation & Logistics | Starfii",
  description:
    "Intelligent digital platforms for logistics, transportation, supply chains and operational visibility.",
  icons: {
    icon: [
      {
        url: "/starfii_logo_WHITE.svg",
        type: "image/svg+xml",
        sizes: "32x32",
      },
    ],
  },
};

export default function TransportLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
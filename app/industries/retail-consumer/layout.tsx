import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Retail & Consumer | Starfii",
  description:
    "Connected customer experiences and intelligent digital commerce platforms for retail and consumer businesses.",
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

export default function RetailConsumerLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
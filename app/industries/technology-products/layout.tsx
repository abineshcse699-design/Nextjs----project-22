import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Technology, Products & Platforms | Starfii",
  description:
    "AI-led product engineering and platform development for technology companies and digital businesses.",
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

export default function TechnologyProductsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Healthcare & Life Sciences | Starfii",
  description:
    "Connected, intelligent and secure digital technology for healthcare and life sciences.",
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

export default function HealthcareLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
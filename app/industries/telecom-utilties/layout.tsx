import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Telecom & Utilities | Starfii",
  description:
    "Resilient digital platforms and intelligent operations for connected telecom and utility businesses.",
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

export default function TelecomUtilitiesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
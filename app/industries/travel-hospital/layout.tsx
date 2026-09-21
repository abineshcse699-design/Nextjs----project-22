import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Travel & Hospitality | Starfii",
  description:
    "Seamless digital journeys and intelligent experiences for travelers, guests, and hospitality businesses.",
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

export default function TravelHospitalLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
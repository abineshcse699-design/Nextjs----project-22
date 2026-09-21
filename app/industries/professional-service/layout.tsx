import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Professional Services | Starfii",
  description:
    "Modernize professional services through intelligent applications, automation, data and digital experiences.",
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

export default function ProfessionalServicesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
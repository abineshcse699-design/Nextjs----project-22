import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Financial Services | Starfii",
  description:
    "Intelligent, secure, and scalable digital solutions for financial institutions, platforms, and services.",
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

export default function FinancialServicesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
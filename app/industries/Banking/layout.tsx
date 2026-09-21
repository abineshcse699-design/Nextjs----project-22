import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Banking | Starfii",
  description:
    "Secure and scalable technology solutions for modern banking experiences, operations and platforms.",
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

export default function BankingLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
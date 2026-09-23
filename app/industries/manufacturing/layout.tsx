import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Manufacturing | Starfii",
  description:
    "Connect operations, data and intelligent technology to build smarter manufacturing businesses.",
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

export default function ManufacturingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TurboDesk | Starfii",
  description:
    "TurboDesk brings service requests, automation, AI assistance, workflows, knowledge, and operational intelligence into one connected platform built by Starfii.",
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

export default function TurboDeskLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
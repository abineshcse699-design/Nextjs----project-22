import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TurboDesk | Starfii",
  description:
    "TurboDesk brings service requests, automation, AI assistance, workflows, knowledge, and operational intelligence into one connected platform built by Starfii.",
};

export default function TurboDeskLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
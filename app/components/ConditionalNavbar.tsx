"use client";

import { usePathname } from "next/navigation";
import Navbar from "./layout/Navbar";

// Add any route (or route prefix) here that should NOT show the navbar
const HIDE_NAVBAR_ON = ["/platform/turbodev-ai"];

export default function ConditionalNavbar() {
  const pathname = usePathname();

  const shouldHide = HIDE_NAVBAR_ON.some(
    (path) => pathname === path || pathname?.startsWith(`${path}/`)
  );

  if (shouldHide) return null;

  return <Navbar />;
}
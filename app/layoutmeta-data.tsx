// // app/layout.tsx-la irukkura existing metadata-va idhu vechu replace pannunga.
// // (layout.tsx top-la: import type { Metadata } from "next";)

//   import type { Metadata } from "next";

// export const metadata: Metadata = {
//   metadataBase: new URL("https://www.starfii.com"),
//   title: {
//     default: "IT Services for Business | Starfii Technology",
//     template: "%s | Starfii Technology",
//   },
//   description:
//     "Starfii Technology delivers end to end software development for mobile and web platforms, including custom software, UI/UX design, and product support. We help businesses build scalable, high-quality digital solutions for long-term success.",
//   keywords: [
//     "software development company",
//     "product engineering",
//     "AI software development",
//     "SaaS development",
//     "mobile app development",
//     "web development",
//     "UI/UX design",
//     "Starfii Technology",
//   ],
//   alternates: { canonical: "/" },
//   openGraph: {
//     type: "website",
//     url: "https://www.starfii.com",
//     siteName: "Starfii Technology",
//     title: "IT Services for Business | Starfii Technology",
//     description:
//       "End to end software development for mobile and web: custom software, UI/UX design, and product support.",
//     images: [{ url: "/og-image.png", width: 1200, height: 630 }],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "IT Services for Business | Starfii Technology",
//     description:
//       "End to end software development for mobile and web: custom software, UI/UX design, and product support.",
//     images: ["/og-image.png"],
//   },
//   robots: { index: true, follow: true },
// };




import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/layout/Footer";
import ConditionalNavbar from "@/app/components/ConditionalNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-heading-custom",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.starfii.com"),
  title: {
    default: "IT Services for Business | Starfii Technology",
    template: "%s | Starfii Technology",
  },
  description:
    "Starfii Technology delivers end to end software development for mobile and web platforms, including custom software, UI/UX design, and product support. We help businesses build scalable, high-quality digital solutions for long-term success.",
  keywords: [
    "software development company",
    "product engineering",
    "AI software development",
    "SaaS development",
    "mobile app development",
    "web development",
    "UI/UX design",
    "Starfii Technology",
  ],
  icons: {
    icon: [
      {
        url: "/starfii_star_flat.svg",
        type: "image/svg+xml",
        sizes: "32x32",
      },
    ],
    shortcut: "/starfii_star_flat.svg",
    apple: "/starfii_star_flat.svg",
  },
  openGraph: {
    type: "website",
    url: "https://www.starfii.com",
    siteName: "Starfii Technology",
    title: "IT Services for Business | Starfii Technology",
    description:
      "End to end software development for mobile and web: custom software, UI/UX design, and product support.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Services for Business | Starfii Technology",
    description:
      "End to end software development for mobile and web: custom software, UI/UX design, and product support.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ConditionalNavbar />

        <div className="flex-1">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
export const metadata = {
  title: "Contact Us | Starfii",
  description:
    "Get in touch with Starfii to discuss AI led software development, product engineering, and ITSM services.",

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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
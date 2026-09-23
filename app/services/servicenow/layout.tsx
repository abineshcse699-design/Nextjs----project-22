export const metadata = {
  title: "ServiceNow ITSM Services | Starfii",
  description:
    "Design, implement and optimize ServiceNow solutions that modernize enterprise IT service management.",

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

export default function ServiceNowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
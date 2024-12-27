import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Electisec (previously yAcademy & yAudit)",
  description: "ZK & Smart Contract Security",
  keywords:
    "Electisec, Zero Knowledge, Smart Contract Security, Blockchain Security, Ethereum, Cryptography",
  referrer: "origin",
  creator: "Electisec Team",
  robots: "follow, index",
  openGraph: {
    type: "website",
    url: "https://electisec.dev",
    title: "Electisec (previously yAcademy & yAudit)",
    description: "ZK & Smart Contract Security",
    siteName: "Electisec",
    images: [
      {
        url: "https://electisec.dev/logo.svg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@electisec",
    creator: "@electisec",
    images: "https://electisec.dev/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-red-500`}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import GoogleAnalytics from "@/app/gtag";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <head>
        <GoogleAnalytics />
      </head>
      <body className={""}>{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "yAudit",
  description: "ZK & Smart Contract Security",
  keywords:
    "yAudit, Zero Knowledge, Smart Contract Security, Blockchain Security, Ethereum, Cryptography",
  referrer: "origin",
  creator: "yAudit Team",
  robots: "follow, index",
  icons: {
    icon: [
      { url: "/favicon.svg", sizes: "any" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://yaudit.dev",
    title: "yAudit",
    description:
      "yAudit is focused on smart contracts and zero-knowledge security: auditing, research, and increasingly tooling. We launched to help make DeFi more secure and have since then secured contracts holding billions in TVL.",
    siteName: "yAudit",
    images: [
      {
        url: "https://yaudit.dev/twitter.png",
        width: 1200,
        height: 630,
      },
      {
        url: "https://yaudit.dev/icon.png",
        width: 400,
        height: 400,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@electisec",
    creator: "@electisec",
    images: "https://yaudit.dev/twitter.png",
  },
};

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
  title: "Electisec",
  description: "ZK & Smart Contract Security",
  keywords:
    "Electisec, Zero Knowledge, Smart Contract Security, Blockchain Security, Ethereum, Cryptography",
  referrer: "origin",
  creator: "Electisec Team",
  robots: "follow, index",
  openGraph: {
    type: "website",
    url: "https://electisec.tech",
    title: "Electisec",
    description:
      "Electisec is focused on smart contracts and zero-knowledge security: auditing, research, and increasingly tooling. We launched late 2020 to help make DeFi more secure and have since then secured contracts holding billions in TVL.",
    siteName: "Electisec",
    images: [
      {
        url: "https://electisec.tech/twitter.png",
        width: 1200,
        height: 630,
      },
      // {
      //   url: "https://electisec.tech/icon.png",
      //   width: 400,
      //   height: 400,
      // },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@electisec",
    creator: "@electisec",
    images: "https://electisec.tech/twitter.png",
  },
};

import "./globals.css";
import type { Metadata } from "next";
import { Hind } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import JsonLd from "@/components/JsonLd";
import { absoluteUrl, siteConfig } from "@/lib/site";

const hind = Hind({
  variable: "--font-hind",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const defaultDescription =
  "Manufacturers of Advanced Diamond & Super Abrasive Cutting Tools. Natural Diamond, PCD, CBN, Carbide and Ceramic tooling solutions.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: defaultDescription,
  icons: {
    icon: siteConfig.defaultOgImage,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: defaultDescription,
    url: absoluteUrl("/"),
    images: [
      {
        url: absoluteUrl(siteConfig.defaultOgImage),
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: defaultDescription,
    images: [absoluteUrl(siteConfig.defaultOgImage)],
  },
  alternates: {
    canonical: absoluteUrl("/"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={hind.variable}>
      <body className="antialiased flex min-h-screen flex-col site-body">
        <JsonLd />
        <Header />
        <main className="flex-1 flex flex-col site-main-offset">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}

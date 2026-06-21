import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "./site";

interface PageMetadataOptions {
  title: string;
  description: string;
  /** Path without basePath, e.g. `/about` or `/products/pcd-cbn-tools` */
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function createPageMetadata({
  title,
  description,
  path = "/",
  ogImage = siteConfig.defaultOgImage,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const canonical = absoluteUrl(path);
  const imageUrl = absoluteUrl(ogImage);

  return {
    title,
    description,
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: imageUrl,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export const defaultSiteMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Manufacturers of Advanced Diamond & Super Abrasive Cutting Tools. Natural Diamond, PCD, CBN, Carbide and Ceramic tooling solutions.",
  ...createPageMetadata({
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description:
      "Manufacturers of Advanced Diamond & Super Abrasive Cutting Tools. Natural Diamond, PCD, CBN, Carbide and Ceramic tooling solutions.",
    path: "/",
  }),
};

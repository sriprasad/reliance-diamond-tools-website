/** Site-wide config for SEO, sitemap, and structured data. */
export const siteConfig = {
  name: "Reliance Diamond Tools",
  legalName: "Reliance Diamond Tools",
  tagline: "Engineering Precision Since 1994",
  /** Set NEXT_PUBLIC_SITE_URL in production (e.g. https://www.reliancediamondtools.com) */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.reliancediamondtools.com",
  /** Matches next.config basePath when deployed under a subpath */
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  email: "info@reliancediamondtools.com",
  /** Placeholder — see PLACEHOLDERS.md before launch */
  phone: "+91-XXXXXXXXXX",
  address: {
    streetAddress: "No 6 & 7, Association Road",
    addressLocality: "Madhavaram, Chennai",
    postalCode: "600 060",
    addressCountry: "IN",
  },
  geo: {
    latitude: 13.1485,
    longitude: 80.2314,
  },
  foundingDate: "1994",
  defaultOgImage: "/assert/image/RDTLogo.png",
} as const;

export function absoluteUrl(path: string): string {
  const base = siteConfig.basePath.replace(/\/$/, "");
  let normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized !== "/" && !normalized.endsWith("/")) {
    normalized += "/";
  }
  return `${siteConfig.url.replace(/\/$/, "")}${base}${normalized}`;
}

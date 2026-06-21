import { siteConfig } from "./site";

/**
 * Organization + LocalBusiness JSON-LD.
 * Phone is a placeholder — update siteConfig.phone (see PLACEHOLDERS.md) before launch.
 */
export function organizationJsonLd() {
  const { address, url, email, phone, name, legalName, foundingDate, geo } = siteConfig;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${url}/#organization`,
        name,
        legalName,
        url,
        email,
        foundingDate,
        logo: `${url}${siteConfig.defaultOgImage}`,
        sameAs: [],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${url}/#localbusiness`,
        name,
        url,
        email,
        telephone: phone,
        image: `${url}${siteConfig.defaultOgImage}`,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: address.streetAddress,
          addressLocality: address.addressLocality,
          postalCode: address.postalCode,
          addressCountry: address.addressCountry,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: geo.latitude,
          longitude: geo.longitude,
        },
        parentOrganization: { "@id": `${url}/#organization` },
      },
    ],
  };
}

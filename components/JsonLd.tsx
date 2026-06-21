import { organizationJsonLd } from "@/lib/jsonLd";

export default function JsonLd() {
  const data = organizationJsonLd();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

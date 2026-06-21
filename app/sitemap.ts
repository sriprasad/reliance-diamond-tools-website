import type { MetadataRoute } from "next";
import { productCategories } from "@/data/products";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "about",
    "products",
    "services",
    "industries",
    "customers",
    "contact",
  ];

  const now = new Date();

  const pages: MetadataRoute.Sitemap = staticRoutes.map((segment) => ({
    url: absoluteUrl(segment ? `/${segment}` : "/"),
    lastModified: now,
    changeFrequency: segment === "" ? "weekly" : "monthly",
    priority: segment === "" ? 1 : 0.8,
  }));

  const productPages: MetadataRoute.Sitemap = productCategories.map((cat) => ({
    url: absoluteUrl(`/products/${cat.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...pages, ...productPages];
}

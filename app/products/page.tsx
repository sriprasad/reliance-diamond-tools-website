import type { Metadata } from "next";
import Link from "next/link";
import { productCategories } from "@/data/products";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Products",
  description:
    "Our product portfolio: PCD & CBN Tools, Natural Diamond Tools, Carbide & Ceramic Tools, Honing & Grinding Solutions, Tool Holding Solutions.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <div>
      <section className="page-header py-14 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading page-title text-white mb-3">Our Product Portfolio</h1>
          <p className="text-body-sm text-light-steel-blue">
            Select a category to view products and specifications.
          </p>
        </div>
      </section>
      <div className="py-16 md:py-24 section-muted">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {productCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="group surface-card p-6 text-left"
              >
                <span className="font-heading font-semibold text-black group-hover:text-steel-blue-2 transition-colors">
                  {cat.name}
                </span>
                <p className="text-caption mt-2">{cat.children.length} product lines</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { productCategories, getCategoryBySlug } from "@/data/products";
import ProductCategoryView from "@/components/ProductCategoryView";
import { createPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return productCategories.map((c) => ({ categorySlug: c.slug }));
}

interface Props {
  params: Promise<{ categorySlug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) return { title: "Products" };
  return createPageMetadata({
    title: category.name,
    description: `Explore ${category.name} — ${category.children.map((c) => c.name).join(", ")}.`,
    path: `/products/${categorySlug}`,
  });
}

export default async function ProductCategoryPage({ params }: Props) {
  const { categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) notFound();
  return (
    <div>
      <section className="page-header py-12 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading page-title text-white">{category.name}</h1>
        </div>
      </section>
      <div className="bg-alice-blue">
        <ProductCategoryView category={category} />
      </div>
    </div>
  );
}

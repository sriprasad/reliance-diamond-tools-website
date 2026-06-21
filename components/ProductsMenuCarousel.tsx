"use client";

import Link from "next/link";
import SlideCarousel from "./SlideCarousel";
import { chunkItems } from "@/lib/chunkItems";
import { productCategories, type ProductCategory } from "@/data/products";

const CATEGORIES_PER_SLIDE = 4;

interface ProductsMenuCarouselProps {
  onNavigate?: () => void;
}

function CategoryColumn({
  cat,
  onNavigate,
}: {
  cat: ProductCategory;
  onNavigate?: () => void;
}) {
  return (
    <div className="mega-menu-column">
      <Link
        href={`/products/${cat.slug}`}
        className="mega-menu-cat-title"
        onClick={onNavigate}
      >
        {cat.name}
      </Link>
      <ul className="space-y-0.5">
        {cat.children.slice(0, 4).map((child) => (
          <li key={child.slug}>
            <Link
              href={`/products/${cat.slug}`}
              className="mega-menu-link block py-1.5 px-2"
              onClick={onNavigate}
            >
              {child.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ProductsMenuCarousel({ onNavigate }: ProductsMenuCarouselProps) {
  const slides = chunkItems(productCategories, CATEGORIES_PER_SLIDE).map((chunk, slideIndex) => (
    <div key={slideIndex} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
      {chunk.map((cat) => (
        <CategoryColumn key={cat.slug} cat={cat} onNavigate={onNavigate} />
      ))}
    </div>
  ));

  return (
    <SlideCarousel
      slides={slides}
      theme="light"
      navStyle="chevron"
      className="products-mega-carousel"
    />
  );
}

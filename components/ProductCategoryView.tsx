"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Square,
  Layers,
  CircleDot,
  Box,
  Drill,
  Gem,
  LayoutGrid,
  Scissors,
  Hammer,
  Circle,
  Minus,
  Wrench,
  GripHorizontal,
  GripVertical,
  Ruler,
  RotateCw,
  Target,
  type LucideIcon,
} from "lucide-react";
import type { ProductCategory, ProductChild, ProductItem } from "../data/products";
import ProductDetailModal from "./ProductDetailModal";

const CHILD_ICONS: Record<string, LucideIcon> = {
  square: Square,
  layers: Layers,
  "circle-dot": CircleDot,
  cylinder: Box,
  drill: Drill,
  box: Box,
  gem: Gem,
  "grid-3x3": LayoutGrid,
  slice: Scissors,
  hammer: Hammer,
  circle: Circle,
  minus: Minus,
  disc: Circle,
  wrench: Wrench,
  "grip-horizontal": GripHorizontal,
  "grip-vertical": GripVertical,
  ruler: Ruler,
  "rotate-cw": RotateCw,
  target: Target,
};

interface Props {
  category: ProductCategory;
}

export default function ProductCategoryView({ category }: Props) {
  const [activeChild, setActiveChild] = useState<ProductChild>(category.children[0]);
  const [detailProduct, setDetailProduct] = useState<ProductItem | null>(null);

  useEffect(() => {
    const applyHash = () => {
      const slug = window.location.hash.replace(/^#/, "");
      if (!slug) return;
      const match = category.children.find((c) => c.slug === slug);
      if (match) setActiveChild(match);
    };

    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [category]);

  return (
    <div className="py-4 md:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1 (top): Child menu as horizontal tabs, centered, glossy buttons */}
        <section className="border-b border-gainsboro pb-4 mb-6" aria-label="Product line navigation">
          <nav
            className="flex flex-wrap justify-center gap-3"
            role="tablist"
            aria-label={`${category.name} product lines`}
          >
            {category.children.map((child) => {
              const isActive = activeChild.slug === child.slug;
              const Icon = CHILD_ICONS[child.iconKey] ?? Box;
              return (
                <button
                  key={child.slug}
                  type="button"
                  role="tab"
                  id={`tab-${child.slug}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${child.slug}`}
                  onClick={() => setActiveChild(child)}
                  className={`product-tab-btn flex items-center justify-center gap-2 w-[180px] min-w-[180px] h-10 text-xs font-medium truncate px-2 border ${
                    isActive
                      ? "product-tab-btn-active border-black text-black bg-alice-blue"
                      : "border-gainsboro text-dim-grey-2 bg-white"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span className="truncate" title={child.name}>
                    {child.name}
                  </span>
                </button>
              );
            })}
          </nav>
        </section>

        {/* Section 2 (below): Image & detail grid - 3 columns × N rows */}
        <section
          role="tabpanel"
          id={`panel-${activeChild.slug}`}
          aria-labelledby={`tab-${activeChild.slug}`}
        >
          <h2 className="text-[10px] text-dim-grey-2 uppercase tracking-wider mb-4 font-semibold">
            {activeChild.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeChild.items.map((item) => (
              <div key={item.id} className="product-grid-card card-interactive">
                <div className="product-grid-image relative aspect-[4/3] bg-alice-blue">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="product-grid-name">{item.name}</h3>
                  <p className="text-xs text-grey-2 leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => setDetailProduct(item)}
                      className="link-primary text-xs bg-transparent border-0 cursor-pointer p-0"
                    >
                      View details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <ProductDetailModal product={detailProduct} onClose={() => setDetailProduct(null)} />
    </div>
  );
}

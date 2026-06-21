"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import type { ProductItem } from "@/data/products";

interface Props {
  product: ProductItem | null;
  onClose: () => void;
}

export default function ProductDetailModal({ product, onClose }: Props) {
  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [product]);

  useEffect(() => {
    if (!product) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-detail-title"
    >
      <div
        className="relative w-full max-w-lg border border-gainsboro bg-white shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-1.5 bg-white/90 text-dim-grey-2 hover:bg-alice-blue hover:text-black shadow-sm rounded-sm"
          aria-label="Close product details"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        <div className="relative aspect-[4/3] bg-alice-blue">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 512px) 100vw, 512px"
          />
        </div>
        <div className="p-6">
          <h2 id="product-detail-title" className="font-heading text-lg font-semibold text-black mb-3">
            {product.name}
          </h2>
          <p className="text-body-sm leading-relaxed">{product.description}</p>
        </div>
      </div>
    </div>
  );
}

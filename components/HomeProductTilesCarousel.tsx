"use client";

import Image from "next/image";
import Link from "next/link";
import SlideCarousel from "./SlideCarousel";
import { chunkItems } from "@/lib/chunkItems";
import {
  homeProductTiles,
  HOME_PRODUCT_TILES_PER_SLIDE,
  type HomeProductTile,
} from "@/data/homeProductTiles";

function ProductTile({ tile }: { tile: HomeProductTile }) {
  return (
    <Link
      href={tile.href}
      className="product-tile-card surface-card card-interactive group relative flex h-full flex-col"
    >
      <figure className="product-tile-figure m-0 flex min-h-0 flex-1 flex-col">
        <div className="product-tile-image-wrap">
          {/* TODO: replace with cleaner product photography */}
          <Image
            src={tile.image}
            alt={tile.title}
            width={360}
            height={280}
            className="max-h-36 sm:max-h-40 md:max-h-44 w-auto h-auto object-contain drop-shadow-sm"
            sizes="(max-width: 640px) 45vw, 360px"
            loading="lazy"
          />
        </div>
        <figcaption className="product-tile-body">
          <span className="product-tile-title block">{tile.title}</span>
          <span className="product-tile-label block">{tile.label}</span>
          <span className="product-tile-card__cta btn-secondary">Learn more</span>
        </figcaption>
      </figure>
    </Link>
  );
}

export default function HomeProductTilesCarousel() {
  const slides = chunkItems(homeProductTiles, HOME_PRODUCT_TILES_PER_SLIDE).map(
    (chunk, slideIndex) => {
      const isPartial = chunk.length < HOME_PRODUCT_TILES_PER_SLIDE;
      return (
        <div
          key={slideIndex}
          className={`product-tile-grid grid grid-cols-1 sm:grid-cols-2 ${
            isPartial ? "product-tile-grid--partial" : ""
          }`}
          data-count={chunk.length}
        >
          {chunk.map((tile) => (
            <ProductTile key={tile.title} tile={tile} />
          ))}
        </div>
      );
    }
  );

  return (
    <div className="product-tiles-showcase max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SlideCarousel
        slides={slides}
        theme="light"
        navStyle="round"
        showDots
        className="product-tiles-carousel"
      />
    </div>
  );
}

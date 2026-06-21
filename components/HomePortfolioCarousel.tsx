"use client";

import { useEffect, useMemo, useState } from "react";
import SlideCarousel from "./SlideCarousel";
import PortfolioCategoryCard from "./PortfolioCategoryCard";
import { chunkItems } from "@/lib/chunkItems";
import { productCategories } from "@/data/products";

const DESKTOP_CARDS_PER_SLIDE = 3;

function getCardsPerSlide(viewportWidth: number): number {
  if (viewportWidth >= 768) return DESKTOP_CARDS_PER_SLIDE;
  return 1;
}

export default function HomePortfolioCarousel() {
  const [cardsPerSlide, setCardsPerSlide] = useState(DESKTOP_CARDS_PER_SLIDE);

  useEffect(() => {
    const update = () => setCardsPerSlide(getCardsPerSlide(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const slides = useMemo(
    () =>
      chunkItems(productCategories, cardsPerSlide).map((chunk, slideIndex) => {
        const isPartial = chunk.length < cardsPerSlide;
        return (
          <div
            key={`${cardsPerSlide}-${slideIndex}`}
            className={`portfolio-carousel__slide portfolio-carousel__slide--cols-${cardsPerSlide}${
              isPartial ? " portfolio-carousel__slide--partial" : ""
            }`}
            data-count={chunk.length}
          >
            {chunk.map((category) => (
              <PortfolioCategoryCard key={category.slug} category={category} />
            ))}
          </div>
        );
      }),
    [cardsPerSlide]
  );

  return (
    <SlideCarousel
      key={cardsPerSlide}
      slides={slides}
      theme="light"
      navStyle="chevron"
      showDots={slides.length > 1}
      className="portfolio-carousel"
    />
  );
}

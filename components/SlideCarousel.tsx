"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CarouselDots from "./CarouselDots";

interface SlideCarouselProps {
  slides: React.ReactNode[];
  className?: string;
  theme?: "light" | "dark";
  showDots?: boolean;
  floatingNav?: boolean;
  navStyle?: "round" | "chevron";
}

export default function SlideCarousel({
  slides,
  className = "",
  theme = "light",
  showDots = true,
  floatingNav = false,
  navStyle = "round",
}: SlideCarouselProps) {
  const [index, setIndex] = useState(0);
  const slideCount = slides.length;
  const showNav = slideCount > 1;
  const useChevron = navStyle === "chevron";
  const navClass = useChevron
    ? "carousel-chevron-btn"
    : theme === "dark"
      ? "carousel-nav-btn carousel-nav-btn-dark"
      : "carousel-nav-btn";
  const navPositionClass =
    !useChevron && floatingNav ? "carousel-nav-btn-floating" : "";
  const wrapperPadding =
    showNav && !floatingNav && !useChevron ? "px-10 sm:px-12 md:px-14" : "";

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNext = () => setIndex((i) => Math.min(slideCount - 1, i + 1));

  const track = (
    <div className="overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="w-full shrink-0">
            {slide}
          </div>
        ))}
      </div>
    </div>
  );

  const chevronIconClass = "w-8 h-8 md:w-10 md:h-10";

  return (
    <div className={`relative w-full ${wrapperPadding} ${className}`}>
      {useChevron && showNav ? (
        <div className="carousel-chevron-layout">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={goPrev}
            disabled={index === 0}
            className={`${navClass} carousel-chevron-btn--outside`}
          >
            <ChevronLeft className={chevronIconClass} />
          </button>

          <div className="carousel-chevron-layout__track min-w-0">{track}</div>

          <button
            type="button"
            aria-label="Next slide"
            onClick={goNext}
            disabled={index === slideCount - 1}
            className={`${navClass} carousel-chevron-btn--outside`}
          >
            <ChevronRight className={chevronIconClass} />
          </button>
        </div>
      ) : (
        <div className="relative">
          {showNav && (
            <>
              <button
                type="button"
                aria-label="Previous slide"
                onClick={goPrev}
                disabled={index === 0}
                className={`${navClass} carousel-nav-btn-left ${navPositionClass}`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                aria-label="Next slide"
                onClick={goNext}
                disabled={index === slideCount - 1}
                className={`${navClass} carousel-nav-btn-right ${navPositionClass}`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
          {track}
        </div>
      )}

      {showNav && showDots && (
        <CarouselDots
          count={slideCount}
          activeIndex={index}
          onSelect={setIndex}
          theme={theme}
          variant="inline"
          className="mt-4 pb-2"
        />
      )}
    </div>
  );
}

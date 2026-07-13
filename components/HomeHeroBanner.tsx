"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CarouselDots from "./CarouselDots";
import {
  homeHeroSlides,
  HOME_HERO_ROTATE_MS,
} from "@/data/homeHeroSlides";

const SLIDE_COUNT = homeHeroSlides.length;
const SWIPE_THRESHOLD_PX = 48;

export default function HomeHeroBanner() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const regionRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((next: number) => {
    setIndex(((next % SLIDE_COUNT) + SLIDE_COUNT) % SLIDE_COUNT);
  }, []);

  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);
  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);
  const pause = useCallback(() => setPaused(true), []);
  const resume = useCallback(() => setPaused(false), []);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % SLIDE_COUNT);
    }, HOME_HERO_ROTATE_MS);
    return () => window.clearInterval(timer);
  }, [paused]);

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrev();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    }
  };

  const onTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: React.TouchEvent) => {
    const startX = touchStartX.current;
    const endX = event.changedTouches[0]?.clientX;
    touchStartX.current = null;
    if (startX == null || endX == null) return;
    const delta = endX - startX;
    if (Math.abs(delta) < SWIPE_THRESHOLD_PX) return;
    if (delta > 0) goPrev();
    else goNext();
  };

  return (
    <section className="hero-product-banner" aria-label="Featured precision tools">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={regionRef}
          className="hero-product-slider"
          role="region"
          aria-roledescription="carousel"
          aria-label="Product highlights"
          tabIndex={0}
          onKeyDown={onKeyDown}
          onMouseEnter={pause}
          onMouseLeave={resume}
          onFocusCapture={pause}
          onBlurCapture={(event) => {
            if (!regionRef.current?.contains(event.relatedTarget as Node | null)) {
              resume();
            }
          }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="hero-product-slider__viewport overflow-hidden">
            <div
              className="hero-product-slider__track flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
              aria-live="polite"
            >
              {homeHeroSlides.map((slide) => (
                <article
                  key={slide.id}
                  className="hero-product-slide w-full shrink-0"
                  aria-roledescription="slide"
                >
                  <div className="hero-product-slide__layout">
                    <div className="hero-product-slide__copy">
                      <h2 className="hero-product-slide__title">{slide.title}</h2>
                      <p className="hero-product-slide__body">{slide.content}</p>
                    </div>

                    <div className="hero-product-slide__visual">
                      <div className="hero-product-slide__image-frame">
                        <Image
                          src={slide.image}
                          alt={slide.imageAlt}
                          fill
                          className="hero-product-slide__image object-contain"
                          sizes="(max-width: 1023px) 100vw, 50vw"
                          priority={slide.id === homeHeroSlides[0].id}
                        />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-product-slider__controls">
            <button
              type="button"
              className="carousel-nav-btn hero-product-slider__nav hero-product-slider__nav--prev"
              aria-label="Previous slide"
              onClick={goPrev}
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2.25} />
            </button>

            <CarouselDots
              count={SLIDE_COUNT}
              activeIndex={index}
              onSelect={goTo}
              variant="inline"
              className="hero-product-slider__dots"
              ariaLabel="Product highlight slides"
            />

            <button
              type="button"
              className="carousel-nav-btn hero-product-slider__nav hero-product-slider__nav--next"
              aria-label="Next slide"
              onClick={goNext}
            >
              <ChevronRight className="w-5 h-5" strokeWidth={2.25} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

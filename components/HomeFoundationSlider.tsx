"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  Award,
  ChevronLeft,
  ChevronRight,
  Compass,
  Handshake,
  Lightbulb,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import CarouselDots from "./CarouselDots";
import {
  foundationSlides,
  FOUNDATION_ROTATE_MS,
  type FoundationSlide,
  type FoundationValue,
} from "@/data/foundationSlides";

const SLIDE_COUNT = foundationSlides.length;
const SWIPE_THRESHOLD_PX = 48;

function ValueIcon({ iconKey }: { iconKey: FoundationValue["iconKey"] }) {
  const className = "foundation-value-icon";
  switch (iconKey) {
    case "precision":
      return <Target className={className} strokeWidth={1.75} aria-hidden />;
    case "integrity":
      return <Handshake className={className} strokeWidth={1.75} aria-hidden />;
    case "innovation":
      return <Lightbulb className={className} strokeWidth={1.75} aria-hidden />;
    case "customer-focus":
      return <Users className={className} strokeWidth={1.75} aria-hidden />;
  }
}

function SlideGraphic({ iconKey }: { iconKey: NonNullable<FoundationSlide["iconKey"]> }) {
  const className = "foundation-slide-graphic";
  switch (iconKey) {
    case "vision":
      return <Compass className={className} strokeWidth={1.25} aria-hidden />;
    case "quality":
      return <Award className={className} strokeWidth={1.25} aria-hidden />;
    case "journey":
      return <TrendingUp className={className} strokeWidth={1.25} aria-hidden />;
  }
}

function FoundationSlideContent({ slide }: { slide: FoundationSlide }) {
  if (slide.type === "values" && slide.values) {
    return (
      <div className="foundation-values-grid">
        {slide.values.map((value) => (
          <article key={value.label} className="foundation-value-card">
            <div className="foundation-value-icon-wrap">
              <ValueIcon iconKey={value.iconKey} />
            </div>
            <h3 className="foundation-value-label">{value.label}</h3>
            <p className="foundation-value-desc">{value.description}</p>
          </article>
        ))}
      </div>
    );
  }

  return (
    <p className="foundation-slide-body">{slide.body}</p>
  );
}

export default function HomeFoundationSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const regionRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((next: number) => {
    setIndex(((next % SLIDE_COUNT) + SLIDE_COUNT) % SLIDE_COUNT);
  }, []);

  const goPrev = useCallback(() => {
    setIndex((current) => (current - 1 + SLIDE_COUNT) % SLIDE_COUNT);
  }, []);

  const goNext = useCallback(() => {
    setIndex((current) => (current + 1) % SLIDE_COUNT);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % SLIDE_COUNT);
    }, FOUNDATION_ROTATE_MS);
    return () => window.clearInterval(timer);
  }, [paused]);

  const pause = () => setPaused(true);
  const resume = () => setPaused(false);

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrev();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    }
  };

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const endX = event.changedTouches[0]?.clientX;
    if (endX === undefined) return;
    const delta = touchStartX.current - endX;
    if (Math.abs(delta) >= SWIPE_THRESHOLD_PX) {
      if (delta > 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      className="foundation-section"
      aria-labelledby="foundation-section-title"
    >
      <div className="foundation-section__inner max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p id="foundation-section-title" className="foundation-section__eyebrow">
          Our Foundation
        </p>

        <div
          ref={regionRef}
          className="foundation-slider"
          role="region"
          aria-roledescription="carousel"
          aria-label="Our Foundation"
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
          <button
            type="button"
            className="carousel-nav-btn carousel-nav-btn-dark foundation-slider__nav foundation-slider__nav--prev"
            aria-label="Previous slide"
            onClick={goPrev}
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2.25} />
          </button>

          <button
            type="button"
            className="carousel-nav-btn carousel-nav-btn-dark foundation-slider__nav foundation-slider__nav--next"
            aria-label="Next slide"
            onClick={goNext}
          >
            <ChevronRight className="w-5 h-5" strokeWidth={2.25} />
          </button>

          <div className="foundation-slider__viewport overflow-hidden">
            <div
              className="foundation-slider__track flex transition-transform duration-[400ms] ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
              aria-live="polite"
            >
              {foundationSlides.map((slide, slideIndex) => (
                <article
                  key={slide.id}
                  className="foundation-slide w-full shrink-0"
                  aria-hidden={slideIndex !== index}
                >
                  <div className="foundation-slide__layout">
                    <div className="foundation-slide__content">
                      <h2 className="foundation-slide__heading">{slide.heading}</h2>
                      <FoundationSlideContent slide={slide} />
                    </div>
                    {slide.iconKey ? (
                      <div className="foundation-slide__graphic-wrap" aria-hidden="true">
                        <SlideGraphic iconKey={slide.iconKey} />
                      </div>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <CarouselDots
            count={SLIDE_COUNT}
            activeIndex={index}
            onSelect={goTo}
            theme="dark"
            variant="inline"
            className="foundation-slider__dots"
            ariaLabel="Our Foundation slides"
          />
        </div>
      </div>
    </section>
  );
}

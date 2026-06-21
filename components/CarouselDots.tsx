"use client";

interface CarouselDotsProps {
  count: number;
  activeIndex: number;
  onSelect: (index: number) => void;
  /** light = default page carousels; dark = hero / dark backgrounds */
  theme?: "light" | "dark";
  /** pill = floating pill container (hero banner) */
  variant?: "inline" | "pill";
  className?: string;
  ariaLabel?: string;
}

export default function CarouselDots({
  count,
  activeIndex,
  onSelect,
  theme = "light",
  variant = "inline",
  className = "",
  ariaLabel = "Carousel pagination",
}: CarouselDotsProps) {
  if (count <= 1) return null;

  const dots = (
    <>
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Go to slide ${i + 1}`}
          aria-current={i === activeIndex ? "true" : undefined}
          onClick={() => onSelect(i)}
          className={`carousel-dots__dot ${
            i === activeIndex
              ? "carousel-dots__dot--active"
              : "carousel-dots__dot--inactive"
          } ${theme === "dark" ? "carousel-dots__dot--dark" : ""}`}
        />
      ))}
    </>
  );

  if (variant === "pill") {
    return (
      <div
        className={`carousel-dots carousel-dots--pill ${className}`}
        role="tablist"
        aria-label={ariaLabel}
      >
        {dots}
      </div>
    );
  }

  return (
    <div
      className={`carousel-dots carousel-dots--inline ${className}`}
      role="tablist"
      aria-label={ariaLabel}
    >
      {dots}
    </div>
  );
}

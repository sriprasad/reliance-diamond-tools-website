"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import CarouselDots from "./CarouselDots";

const BANNER_IMAGES = [
  "/assert/image/BannerImage1.png",
  "/assert/image/BannerImage2.png",
  "/assert/image/BannerImage3.png",
  "/assert/image/BannerImage4.png",
];

const ROTATE_MS = 6000;

export default function HomeHeroBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % BANNER_IMAGES.length),
      ROTATE_MS
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-[460px] md:min-h-[500px] lg:min-h-[520px] flex items-center overflow-hidden section-bright pb-14 hero-banner-interactive isolate">
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {BANNER_IMAGES.map((src, i) => {
          const isActive = i === index;
          return (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-[1]" : "opacity-0 z-0 invisible"
              }`}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover object-center hero-bg-image"
                priority={i === 0}
                sizes="100vw"
                aria-hidden={true}
              />
            </div>
          );
        })}
        <div className="absolute inset-0 z-[2] hero-overlay pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="hero-copy max-w-3xl">
          <h1 className="text-sm md:text-base text-black font-semibold leading-snug mb-2 font-heading">
            Manufacturers of Advanced Diamond &amp; Super Abrasive Cutting Tools
          </h1>

          <p className="text-sm text-dim-grey-2 mb-6 max-w-xl leading-relaxed">
            For over three decades, we have delivered precision cutting solutions
            specializing in Natural Diamond, PCD, CBN, Carbide and Ceramic tooling —
            designed to improve productivity and reduce operational costs.
          </p>

          <div className="flex flex-wrap gap-2.5">
            <Link href="/products" className="btn-secondary text-xs px-5 py-2.5">
              Explore Products
            </Link>
            <Link href="/contact" className="btn-primary text-xs px-5 py-2.5">
              Request a Quote
            </Link>
          </div>
        </div>
      </div>

      <CarouselDots
        count={BANNER_IMAGES.length}
        activeIndex={index}
        onSelect={setIndex}
        theme="dark"
        variant="pill"
        className="z-20"
        ariaLabel="Hero banner slides"
      />
    </section>
  );
}

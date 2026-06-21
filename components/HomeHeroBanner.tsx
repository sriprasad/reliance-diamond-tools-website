"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import CarouselDots from "./CarouselDots";
import MediaFigure from "./MediaFigure";

const BANNER_IMAGES = [
  "/assert/image/BannerImage1.png",
  "/assert/image/BannerImage2.png",
  "/assert/image/BannerImage3.png",
  "/assert/image/BannerImage4.png",
];

const ROTATE_MS = 6000;

/** Hero showcase tiles — labels as HTML figcaptions, not embedded in images */
const HERO_SHOWCASE = [
  { src: BANNER_IMAGES[0], label: "PCD & CBN Tools" },
  { src: BANNER_IMAGES[1], label: "Natural Diamond Tools" },
  { src: BANNER_IMAGES[2], label: "Carbide & Ceramic" },
  { src: BANNER_IMAGES[3], label: "Honing & Grinding" },
] as const;

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
    <section className="relative min-h-[500px] md:min-h-[540px] lg:min-h-[580px] flex items-center overflow-hidden section-bright pb-14 hero-banner-interactive isolate">
      {/* Background carousel — only active slide visible & stacked on top */}
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-6 xl:col-span-5 hero-content-panel p-5 md:p-7 lg:p-8 relative z-10">
            <div className="hero-accent-bar h-0.5 w-14 mb-4" />

            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/assert/image/RDTLogo.png"
                alt="Reliance Diamond Tools"
                width={52}
                height={52}
                className="h-11 w-11 md:h-[52px] md:w-[52px] object-contain shrink-0 logo-blood-red"
              />
              <div>
                <p className="text-brand-name text-[11px] md:text-xs tracking-[0.14em] uppercase">
                  Reliance Diamond Tools
                </p>
                <p className="text-brand-tagline text-xs mt-0.5">
                  Engineering Precision Since 1994
                </p>
              </div>
            </div>

            <h1 className="font-heading hero-title mb-3 text-black">
              Engineering Precision
              <span className="block text-royal-blue font-bold mt-0.5">Since 1994</span>
            </h1>

            <p className="text-sm md:text-base text-black font-semibold leading-snug mb-2">
              Manufacturers of Advanced Diamond &amp; Super Abrasive Cutting Tools
            </p>

            <p className="text-sm text-dim-grey-2 mb-6 max-w-xl leading-relaxed">
              For over three decades, we have delivered precision cutting solutions
              specializing in Natural Diamond, PCD, CBN, Carbide and Ceramic tooling —
              designed to improve productivity and reduce operational costs.
            </p>

            <div className="flex flex-wrap gap-2.5 mb-6">
              <Link href="/products" className="btn-secondary text-xs px-5 py-2.5">
                Explore Products
              </Link>
              <Link href="/contact" className="btn-primary text-xs px-5 py-2.5">
                Request a Quote
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { val: "30+", lbl: "Years" },
                { val: "130+", lbl: "Professionals" },
                { val: "38,000", lbl: "Sq Ft" },
                { val: "₹60 Cr", lbl: "Enterprise" },
              ].map((s) => (
                <div key={s.lbl} className="hero-stat-card px-2 py-2.5 text-center">
                  <p className="font-heading text-base md:text-lg hero-stat-value leading-none">
                    {s.val}
                  </p>
                  <p className="text-[9px] md:text-[10px] hero-stat-label uppercase tracking-wider mt-1">
                    {s.lbl}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex lg:col-span-6 xl:col-span-7 items-center justify-end relative z-20">
            <div className="hero-featured-frame isolate w-full max-w-md">
              <div className="relative aspect-[4/3] overflow-hidden bg-white border-2 border-light-steel-blue shadow-[0_12px_48px_rgba(4,88,146,0.15)] hero-featured-box card-interactive p-3 md:p-4">
                <div className="media-figure-grid media-figure-grid--2x2 h-full">
                  {HERO_SHOWCASE.map((item) => (
                    <MediaFigure
                      key={item.label}
                      src={item.src}
                      alt={item.label}
                      caption={item.label}
                      sizes="(max-width: 1280px) 22vw, 200px"
                    />
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute -bottom-2 -right-2 w-16 h-0.5 bg-blood-red z-10" />
              <div className="pointer-events-none absolute -top-2 -left-2 w-0.5 h-16 bg-royal-blue z-10" />
            </div>
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

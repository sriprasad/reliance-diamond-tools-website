"use client";

import { useEffect, useRef, useState } from "react";

const MAP_EMBED_SRC =
  "https://maps.google.com/maps?q=No+6+%26+7+Association+Road+Madhavaram+Chennai+600060&t=&z=15&ie=UTF8&iwloc=&output=embed";

interface LazyMapEmbedProps {
  title?: string;
  className?: string;
}

export default function LazyMapEmbed({
  title = "Reliance Diamond Tools location on Google Maps",
  className = "media-frame w-full min-h-[280px] lg:min-h-[360px]",
}: LazyMapEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {isVisible ? (
        <iframe
          title={title}
          src={MAP_EMBED_SRC}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div
          className="absolute inset-0 flex items-center justify-center bg-ice-blue text-dim-grey-2 text-sm font-medium"
          aria-hidden="true"
        >
          Loading map…
        </div>
      )}
    </div>
  );
}

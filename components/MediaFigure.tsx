import Image from "next/image";

interface MediaFigureProps {
  src: string;
  alt: string;
  caption: string;
  sizes?: string;
  priority?: boolean;
  loading?: "lazy" | "eager";
  /** Optional WebP variant path (defaults to .webp alongside .jpg/.png) */
  webpSrc?: string;
  className?: string;
}

/** Only industry JPGs have generated WebP siblings — not banner PNGs. */
function webpPathFromSrc(src: string): string | undefined {
  if (/\/industries\/[^/]+\.jpe?g$/i.test(src)) {
    return src.replace(/\.jpe?g$/i, ".webp");
  }
  return undefined;
}

/** Single product/media tile with HTML figcaption (not baked into image). */
export default function MediaFigure({
  src,
  alt,
  caption,
  sizes = "160px",
  priority = false,
  loading,
  webpSrc,
  className = "",
}: MediaFigureProps) {
  const resolvedWebp = webpSrc ?? webpPathFromSrc(src);
  const imageLoading = loading ?? (priority ? "eager" : "lazy");

  return (
    <figure className={`media-figure ${className}`}>
      <div className="media-figure__frame">
        {resolvedWebp ? (
          <picture className="absolute inset-0 block">
            <source srcSet={resolvedWebp} type="image/webp" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              loading={imageLoading}
              decoding="async"
              className="absolute inset-0 h-full w-full object-contain p-2"
            />
          </picture>
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain p-2"
            sizes={sizes}
            priority={priority}
            loading={imageLoading}
          />
        )}
      </div>
      <figcaption className="media-figure__caption">{caption}</figcaption>
    </figure>
  );
}

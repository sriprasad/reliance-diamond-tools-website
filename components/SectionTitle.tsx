interface SectionTitleProps {
  title?: string;
  /** Small uppercase kicker above the heading */
  eyebrow?: string;
  className?: string;
  light?: boolean;
  center?: boolean;
}

export default function SectionTitle({
  title,
  eyebrow,
  className = "",
  light = false,
  center = false,
}: SectionTitleProps) {
  const alignClass = center ? "text-center" : "";

  return (
    <div className={alignClass}>
      {eyebrow && (
        <>
          <p
            className={`section-eyebrow ${light ? "section-eyebrow--light" : ""} ${
              center ? "section-eyebrow--center" : ""
            }`}
          >
            {eyebrow}
          </p>
          <div
            className={`section-accent-line ${title ? "mb-3" : ""} ${
              center ? "section-accent-line-center" : ""
            }`}
          />
        </>
      )}
      {title ? (
        <h2
          className={`font-heading section-title ${light ? "text-white" : "text-black"} ${className}`}
        >
          {title}
        </h2>
      ) : null}
    </div>
  );
}

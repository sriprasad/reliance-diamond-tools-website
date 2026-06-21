import Link from "next/link";

interface HeroSectionProps {
  heading: string;
  subheading?: string;
  paragraph?: string;
  primaryButton?: { label: string; href: string };
  secondaryButton?: { label: string; href: string };
}

export default function HeroSection({
  heading,
  subheading,
  paragraph,
  primaryButton,
  secondaryButton,
}: HeroSectionProps) {
  return (
    <section className="relative py-20 md:py-28 bg-alice-blue overflow-hidden">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(201,189,176,0.15),transparent)]"
        aria-hidden
      />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-heading page-title text-black mb-3">{heading}</h1>
        {subheading && (
          <p className="text-base text-grey-2 font-medium mb-4 tracking-tight">{subheading}</p>
        )}
        {paragraph && (
          <p className="text-body-sm max-w-2xl mx-auto mb-8">{paragraph}</p>
        )}
        {(primaryButton || secondaryButton) && (
          <div className="flex flex-wrap justify-center gap-4">
            {primaryButton && (
              <Link href={primaryButton.href} className="btn-primary">
                {primaryButton.label}
              </Link>
            )}
            {secondaryButton && (
              <Link href={secondaryButton.href} className="btn-secondary">
                {secondaryButton.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

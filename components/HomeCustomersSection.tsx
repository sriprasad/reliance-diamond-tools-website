import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

/** TODO: Replace placeholder logos with real customer assets — see PLACEHOLDERS.md */
const PLACEHOLDER_LOGO_COUNT = 6;

export default function HomeCustomersSection() {
  return (
    <section id="customers" className="section-muted section-padding-sm border-y border-gainsboro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Trusted By"
          title="Customers & Partners"
          center
          className="mb-3"
        />
        <p className="section-intro section-intro-center mb-8">
          Trusted by leading manufacturers across automotive, aerospace, optical, and
          general engineering sectors.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {Array.from({ length: PLACEHOLDER_LOGO_COUNT }, (_, i) => (
            <div
              key={i}
              className="surface-card card-interactive aspect-[2/1] flex items-center justify-center px-3 text-center"
              aria-label={`Customer logo placeholder ${i + 1}`}
            >
              <span className="text-caption leading-snug">
                {/* TODO: customer logo */}
                Logo placeholder
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/customers" className="btn-secondary">
            View Customers
          </Link>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Customers",
  description:
    "Trusted by leading brands. Reliable tooling partner with consistent quality and strong technical support.",
  path: "/customers",
});

const testimonials = [
  {
    quote:
      "Reliable tooling partner with consistent quality and strong technical support.",
    author: "Customer A",
    role: "Manufacturing Head",
  },
  {
    quote:
      "Reliable tooling partner with consistent quality and strong technical support.",
    author: "Customer B",
    role: "Production Manager",
  },
  {
    quote:
      "Reliable tooling partner with consistent quality and strong technical support.",
    author: "Customer C",
    role: "Engineering Lead",
  },
];

export default function CustomersPage() {
  return (
    <div>
      <section className="page-header py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading page-title text-white">Trusted by Leading Brands</h1>
        </div>
      </section>
      <div className="py-16 md:py-20 bg-alice-blue">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="mb-16">
            <SectionTitle eyebrow="Partnerships" title="Our Customers" className="mb-6" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="border border-gainsboro bg-white aspect-[2/1] flex items-center justify-center text-caption"
                >
                  Logo placeholder
                </div>
              ))}
            </div>
          </section>
          <section>
            <SectionTitle eyebrow="Feedback" title="Testimonials" className="mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="border border-gainsboro bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <p className="text-body-sm italic mb-3">&ldquo;{t.quote}&rdquo;</p>
                  <p className="text-sm font-semibold text-black">{t.author}</p>
                  <p className="text-caption">{t.role}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

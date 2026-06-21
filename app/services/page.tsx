import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description:
    "Technical support and performance optimization. We work closely with customers to select optimal tool geometry and improve machine parameters.",
  path: "/services",
});

const serviceItems = [
  "Select optimal tool geometry",
  "Improve machine parameters",
  "Increase tool life",
  "Reduce rejection rate",
  "Monitor tool performance",
  "Provide after-sales technical support",
];

export default function ServicesPage() {
  return (
    <div>
      <section className="page-header py-14 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading page-title text-white mb-3">
            Technical Support & Performance Optimization
          </h1>
          <p className="text-body-sm text-light-steel-blue">
            Our technical team works closely with customers to deliver measurable results.
          </p>
        </div>
      </section>
      <div className="py-16 md:py-20 bg-alice-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Our Approach" title="How We Support You" className="mb-8" />
          <ul className="space-y-3 mb-10">
            {serviceItems.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 bg-white border border-light-steel-blue/50 p-4 shadow-sm"
              >
                <span className="card-bullet" />
                <span className="card-text-vivid">{item}</span>
              </li>
            ))}
          </ul>
          <p className="card-text-vivid text-black font-semibold border-l-4 border-blood-red pl-4">
            We stay involved until your tooling performance reaches expected
            output levels.
          </p>
        </div>
      </div>
    </div>
  );
}

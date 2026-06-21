import type { Metadata } from "next";
import IndustryCard from "@/components/IndustryCard";
import { industries } from "@/data/industries";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Industries We Serve",
  description:
    "We serve Automotive, Aerospace, Optical, Medical Devices, Die & Mold, and General Engineering industries.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <div>
      <section className="page-header py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading page-title text-white">Industries We Serve</h1>
        </div>
      </section>
      <div className="py-16 md:py-24 section-bright">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {industries.map((industry) => (
              <IndustryCard
                key={industry.title}
                title={industry.title}
                description={industry.description}
                image={industry.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import {
  History,
  Target,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Us",
  description:
    "Our journey of precision engineering since 1994. From a small unit to a leading manufacturer in super abrasive tools.",
  path: "/about",
});

const infrastructureItems = [
  "38,000 sq.ft facility",
  "Advanced grinding machines",
  "CNC machining centers",
  "Dedicated inspection and quality control systems",
  "Experienced engineers and experts",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="page-header py-14 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading page-title text-white mb-3">
            Our Journey of Precision Engineering
          </h1>
          <p className="text-body-sm text-light-steel-blue max-w-2xl mx-auto">
            From a small craftsmanship-driven unit in 1994 to a leading name in
            super abrasive tooling — quality, innovation and trust at the core.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28 space-y-8 pt-12">
        {[
          {
            icon: History,
            title: "Our History",
            paragraphs: [
              "Reliance Diamond Tools was founded in 1994 by Mr. J. Ravi with a steadfast belief in craftsmanship and precision engineering. What began as a small, dedicated unit has grown into a leading manufacturer of super abrasive tools, trusted by industries across the globe.",
              "Our growth has been built on three pillars: uncompromising quality in every product we deliver, continuous innovation in materials and processes, and lasting relationships with customers who rely on us for consistent performance.",
            ],
          },
          {
            icon: Target,
            title: "Our Philosophy",
            paragraphs: [
              "We believe tooling is not just about supply — it is about improving your productivity and strengthening your competitive edge. Every product we design and deliver is aimed at helping you achieve more: higher output, fewer rejects, and lower total cost of ownership.",
              "Our focus is to optimize production parameters, enhance reliability on the shop floor, and reduce total tool economy cost over the life of your operations.",
            ],
          },
          {
            icon: Building2,
            title: "Infrastructure",
            list: infrastructureItems,
          },
        ].map((section) => (
          <section
            key={section.title}
            className="border border-gainsboro bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-4 mb-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-mobile-blue text-white">
                  <section.icon className="h-5 w-5" />
                </div>
                <h2 className="font-heading section-title text-black">{section.title}</h2>
              </div>
              <div className="space-y-4 pl-0 md:pl-16">
                {section.paragraphs?.map((p) => (
                  <p key={p.slice(0, 30)} className="text-body-sm md:text-base">
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul className="space-y-3">
                    {section.list.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-body-sm md:text-base">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-black" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

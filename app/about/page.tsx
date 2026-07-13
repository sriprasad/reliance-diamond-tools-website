import type { Metadata } from "next";
import { History, Target, Settings2, CheckCircle2 } from "lucide-react";
import {
  aboutIntroParagraphs,
  aboutPhilosophy,
  aboutProductionOptimization,
} from "@/data/aboutContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Us",
  description:
    "Established in 1994 by Mr. J. Ravi. A technology-driven tooling partner with 250+ professionals, 50,000 sq. ft. manufacturing facility, and application-oriented engineering support.",
  path: "/about",
});

export default function AboutPage() {
  const production = aboutProductionOptimization;

  return (
    <div className="min-h-screen">
      <section className="page-header py-14 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading page-title text-white mb-3">About Us</h1>
          <p className="text-body-sm text-light-steel-blue max-w-2xl mx-auto">
            Precision engineering excellence since 1994 — from craftsmanship-driven
            beginnings to a technology-driven tooling partner for modern manufacturing.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28 space-y-8 pt-12">
        <section className="border border-gainsboro bg-white shadow-sm">
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-4 mb-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-mobile-blue text-white">
                <History className="h-5 w-5" />
              </div>
              <h2 className="font-heading section-title text-black">Our Story</h2>
            </div>
            <div className="space-y-4 pl-0 md:pl-16">
              {aboutIntroParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-body-sm md:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="border border-gainsboro bg-white shadow-sm">
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-4 mb-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-mobile-blue text-white">
                <Target className="h-5 w-5" />
              </div>
              <h2 className="font-heading section-title text-black">{aboutPhilosophy.title}</h2>
            </div>
            <div className="space-y-4 pl-0 md:pl-16">
              {aboutPhilosophy.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-body-sm md:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="border border-gainsboro bg-white shadow-sm">
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-4 mb-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-mobile-blue text-white">
                <Settings2 className="h-5 w-5" />
              </div>
              <h2 className="font-heading section-title text-black">{production.title}</h2>
            </div>
            <div className="space-y-4 pl-0 md:pl-16">
              <p className="text-body-sm md:text-base leading-relaxed">{production.intro}</p>
              <p className="text-body-sm md:text-base leading-relaxed">{production.leadIn}</p>
              <ul className="space-y-2.5">
                {production.supportAreas.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-body-sm md:text-base">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-royal-blue mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-body-sm md:text-base leading-relaxed">{production.methodology}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {production.materials.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-body-sm md:text-base">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-royal-blue mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-body-sm md:text-base leading-relaxed">{production.closing}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HomeHeroBanner from "../components/HomeHeroBanner";
import HomeEnterpriseStats from "@/components/HomeEnterpriseStats";
import HomeFoundationSlider from "@/components/HomeFoundationSlider";
import HomeCustomersSection from "@/components/HomeCustomersSection";
import ContactSection from "@/components/ContactSection";
import MediaFigure from "@/components/MediaFigure";
import { homeAboutSectionImages } from "@/data/homePortfolioImages";
import HomePortfolioCarousel from "@/components/HomePortfolioCarousel";
import SectionTitle from "@/components/SectionTitle";
import { createPageMetadata } from "@/lib/seo";
import { industries } from "@/data/industries";

export const metadata: Metadata = createPageMetadata({
  title: "Engineering Precision Since 1994",
  description:
    "Manufacturers of Advanced Diamond & Super Abrasive Cutting Tools. Natural Diamond, PCD, CBN, Carbide and Ceramic tooling solutions for improved productivity.",
  path: "/",
});

const services = [
  "Select optimal tool geometry",
  "Improve machine parameters",
  "Increase tool life",
  "Reduce rejection rate",
  "Monitor tool performance",
  "Provide after-sales technical support",
];

const whyChooseUs = [
  {
    title: "Advanced CNC Manufacturing",
    description: "State-of-the-art machining capability for precision tooling production.",
  },
  {
    title: "High Precision Quality Control",
    description: "Rigorous inspection and validation at every stage of manufacturing.",
  },
  {
    title: "Industry-Specific Solutions",
    description: "Tooling engineered for automotive, aerospace, optical, and more.",
  },
  {
    title: "Customer-Focused Support",
    description: "Engineering assistance from tool selection through performance optimization.",
  },
  {
    title: "ISO Certified Processes",
    description: "Quality management aligned with international manufacturing standards.",
  },
  {
    title: "Fast Delivery & Assistance",
    description: "Responsive turnaround with dedicated technical support when you need it.",
  },
];

export default function HomePage() {
  return (
    <>
      <HomeHeroBanner />

      <HomeEnterpriseStats />

      <HomeFoundationSlider />

      <section id="about" className="section-white section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="about-image-frame card-interactive">
              <div className="media-figure-grid media-figure-grid--2x1">
                <MediaFigure
                  src={homeAboutSectionImages[0]}
                  alt="Reliance Diamond Tools manufacturing facility"
                  caption="Manufacturing Facility — Madhavaram"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  cover
                />
                <MediaFigure
                  src={homeAboutSectionImages[1]}
                  alt="Precision diamond and super abrasive cutting tools"
                  caption="Precision Tooling Production"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  cover
                />
              </div>
            </div>
            <div>
              <SectionTitle
                eyebrow="Who We Are"
                title="About Reliance Diamond Tools"
                className="mb-4"
              />
              <p className="text-body-sm mb-4">
                Founded in 1994 by Mr. J. Ravi, the company began as a small-scale
                craftsmanship-driven unit. Today, it has grown into a ₹60 Crore
                enterprise with over 130 skilled professionals and a 38,000 sq.ft
                manufacturing facility in Madhavaram, Chennai.
              </p>
              <p className="text-body-sm mb-6">
                Our team of engineers and technocrats work together to deliver
                reliable, high-performance tooling solutions across Natural Diamond,
                PCD, CBN, Carbide and Ceramic applications for improved productivity
                and reduced operational costs.
              </p>
              <Link href="/about" className="btn-secondary">
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-muted section-padding portfolio-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Our Products"
            title="Our Product Portfolio"
            center
            className="mb-3"
          />
          <p className="section-intro section-intro-center mb-12">
            Comprehensive range of diamond and super abrasive cutting tools for
            every industrial application.
          </p>
          <HomePortfolioCarousel />
        </div>
      </section>

      <section id="industries" className="section-white section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Sectors"
            title="Industries We Serve"
            center
            className="mb-3"
          />
          <p className="section-intro section-intro-center mb-10">
            Precision tooling solutions for Automotive, Aerospace, Optical, Medical
            Devices, Die &amp; Mold and General Engineering sectors.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {industries.map((ind) => (
              <Link
                key={ind.title}
                href="/industries"
                className="industry-photo-card card-interactive group relative aspect-[4/3] overflow-hidden rounded-sm shadow-[0_8px_24px_rgba(4,88,146,0.1)]"
              >
                <Image
                  src={ind.image}
                  alt={`${ind.title} industry`}
                  fill
                  className="industry-photo-card-image object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 industry-card-overlay pointer-events-none" />
                <div className="absolute inset-0 flex flex-col justify-end industry-photo-card-content pointer-events-none">
                  <h3 className="industry-photo-card-title">
                    <span className="industry-photo-card-title-label">{ind.title}</span>
                  </h3>
                  <span className="industry-photo-card-tag">Products</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/industries" className="btn-secondary">
              View All Industries
            </Link>
          </div>
        </div>
      </section>

      <section className="section-bright section-padding-sm border-y border-gainsboro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center shrink-0">
              <Image
                src="/assert/image/RDTLogo.png"
                alt="Reliance Diamond Tools logo"
                width={48}
                height={48}
                className="h-12 w-12 object-contain logo-blood-red"
              />
              <span className="font-heading text-brand-name text-xs font-bold mt-1 tracking-wide">
                RDT
              </span>
            </div>
            <div>
              <p className="font-bold text-sm text-black">Technical Support &amp; Services</p>
              <p className="text-xs text-dim-grey-2 font-medium">We stay involved until performance targets are met</p>
            </div>
          </div>
          <Link href="/contact" className="cta-chevron-btn">
            Request a Quote
          </Link>
        </div>
      </section>

      <section className="section-muted section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionTitle
                eyebrow="Engineering Support"
                title="Technical Support & Performance Optimization"
                className="mb-4"
              />
              <p className="text-body-sm mb-6">
                Our technical team works closely with customers to optimize tooling
                performance and reduce total cost of ownership.
              </p>
              <Link href="/services" className="btn-secondary">
                View Services
              </Link>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 surface-card card-interactive p-4"
                >
                  <span className="card-bullet" />
                  <span className="card-text-vivid">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="why-us" className="section-padding bg-header-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Our Strengths"
            title="Why Choose Us"
            light
            center
            className="mb-4"
          />
          <p className="text-center text-sm text-on-dark-muted max-w-2xl mx-auto mb-10">
            Precision engineering, quality assurance, and dedicated support — built for
            demanding industrial applications.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="value-card-dark card-interactive">
                <p className="value-card-title">{item.title}</p>
                <p className="value-card-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeCustomersSection />

      <section id="contact" className="section-white section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Contact" title="Get in Touch" center className="mb-3" />
          <p className="section-intro section-intro-center mb-10">
            Reach our team for quotes, technical support, or product enquiries. We respond
            promptly during business hours.
          </p>
          <ContactSection />
        </div>
      </section>
    </>
  );
}

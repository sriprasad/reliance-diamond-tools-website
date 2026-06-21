import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import ContactSection from "@/components/ContactSection";
import SectionTitle from "@/components/SectionTitle";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Get in touch with Reliance Diamond Tools. Chennai office address, email and contact form.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div>
      <section className="page-header py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading page-title text-white">Get in Touch</h1>
          <p className="text-body-sm mt-3 max-w-2xl">
            Contact our engineering team for quotes, technical support, and product enquiries.
          </p>
        </div>
      </section>
      <div className="section-padding bg-alice-blue">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ContactForm />
          <div>
            <SectionTitle eyebrow="Location" title="Find Us" center className="mb-6" />
            <ContactSection showDetails={false} />
          </div>
        </div>
      </div>
    </div>
  );
}

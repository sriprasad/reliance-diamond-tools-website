import Link from "next/link";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import LazyMapEmbed from "./LazyMapEmbed";

interface ContactSectionProps {
  showMap?: boolean;
  showDetails?: boolean;
  compact?: boolean;
}

export default function ContactSection({
  showMap = true,
  showDetails = true,
  compact = false,
}: ContactSectionProps) {
  if (!showDetails && showMap) {
    return <LazyMapEmbed />;
  }

  return (
    <div
      className={
        compact ? "space-y-8" : "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start"
      }
    >
      {showDetails && (
        <div className={compact ? "grid grid-cols-1 sm:grid-cols-2 gap-6" : "space-y-6"}>
          <div className="flex gap-3 surface-card p-4 md:p-5">
            <MapPin className="w-5 h-5 shrink-0 text-royal-blue mt-0.5" />
            <div>
              <p className="font-heading text-sm font-semibold text-black mb-1">Address</p>
              <p className="text-body-sm">
                No 6 &amp; 7, Association Road,
                <br />
                Madhavaram, Chennai – 600 060
              </p>
            </div>
          </div>

          <div className="flex gap-3 surface-card p-4 md:p-5">
            <Mail className="w-5 h-5 shrink-0 text-royal-blue mt-0.5" />
            <div>
              <p className="font-heading text-sm font-semibold text-black mb-1">Email</p>
              <a href="mailto:info@reliancediamondtools.com" className="link-primary text-sm">
                info@reliancediamondtools.com
              </a>
            </div>
          </div>

          <div className="flex gap-3 surface-card p-4 md:p-5">
            <Phone className="w-5 h-5 shrink-0 text-royal-blue mt-0.5" />
            <div>
              <p className="font-heading text-sm font-semibold text-black mb-1">Phone</p>
              <p className="text-body-sm">+91-XXXXXXXXXX</p>
            </div>
          </div>

          <div className="flex gap-3 surface-card p-4 md:p-5">
            <Clock className="w-5 h-5 shrink-0 text-royal-blue mt-0.5" />
            <div>
              <p className="font-heading text-sm font-semibold text-black mb-1">Business Hours</p>
              <p className="text-body-sm">Mon – Sat: 9:00 AM – 6:00 PM</p>
              <p className="text-body-sm">Sunday: Closed</p>
            </div>
          </div>

          <div
            className={
              compact ? "sm:col-span-2 flex flex-wrap gap-3 pt-2" : "flex flex-wrap gap-3 pt-2"
            }
          >
            <Link href="/contact" className="btn-primary">
              Request a Quote
            </Link>
            <Link href="/products" className="btn-secondary">
              Explore Products
            </Link>
          </div>
        </div>
      )}

      {showMap && <LazyMapEmbed />}
    </div>
  );
}

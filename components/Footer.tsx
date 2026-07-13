import Image from "next/image";
import Link from "next/link";
import { industries } from "@/data/industries";
import { productCategories } from "@/data/products";

const footerNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/customers", label: "Customers" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-bright border-t border-gainsboro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-6">
              <Image
                src="/assert/image/Logo.svg"
                alt="Reliance Diamond Tools"
                width={1500}
                height={500}
                className="h-10 w-auto max-w-[10rem] object-contain object-left sm:h-11 sm:max-w-[11.5rem]"
              />
            </div>
            <p className="footer-desc mb-4">
              Manufacturers of Advanced Diamond &amp; Super Abrasive Cutting Tools.
              Engineering Precision Since 1994.
            </p>
            <ul className="space-y-2">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold text-black mb-3">Products</h3>
            <ul className="space-y-2">
              {productCategories.map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/products/${cat.slug}`} className="footer-link">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold text-black mb-3">Industries</h3>
            <ul className="space-y-2">
              {industries.map((ind) => (
                <li key={ind.title}>
                  <Link href="/industries" className="footer-link">
                    {ind.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold text-black mb-3">Contact</h3>
            <address className="not-italic footer-desc space-y-2">
              <p className="text-black font-medium">
                No 6 &amp; 7, Association Road,
                <br />
                Madhavaram, Chennai – 600 060
              </p>
              <p>
                <a
                  href="mailto:info@reliancediamondtools.com"
                  className="link-primary text-sm"
                >
                  info@reliancediamondtools.com
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span>&copy; {new Date().getFullYear()} Reliance Diamond Tools. All rights reserved.</span>
          <span>Founded 1994 · ₹60 Crore Enterprise · 130+ Professionals</span>
        </div>
      </div>
    </footer>
  );
}

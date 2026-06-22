"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Mail } from "lucide-react";
import ProductsMenuCarousel from "./ProductsMenuCarousel";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products", menu: "products" as const },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/customers", label: "Customers" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);

  const closeDesktopMenu = useCallback(() => setDesktopProductsOpen(false), []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const navLinkClass = (active: boolean) =>
    active
      ? "text-white bg-white/12"
      : "text-white/85 hover:text-white hover:bg-white/8";

  /* Close mega menu on route change */
  useEffect(() => {
    setDesktopProductsOpen(false);
    setMobileOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  /* Close on Escape */
  useEffect(() => {
    if (!desktopProductsOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDesktopMenu();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [desktopProductsOpen, closeDesktopMenu]);

  /* Close on outside click */
  useEffect(() => {
    if (!desktopProductsOpen) return;

    const onPointerDown = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        closeDesktopMenu();
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [desktopProductsOpen, closeDesktopMenu]);

  return (
    <>
      {/* Backdrop when desktop mega menu is open */}
      {desktopProductsOpen && (
        <div
          className="mega-menu-backdrop hidden md:block fixed inset-0 top-[76px] md:top-[84px] z-40 bg-header-bg/40 backdrop-blur-[2px]"
          aria-hidden="true"
          onClick={closeDesktopMenu}
        />
      )}

      <header
        ref={headerRef}
        className="site-header fixed top-0 left-0 right-0 z-50 shadow-md border-b border-light-steel-blue/25"
        onMouseLeave={() => setDesktopProductsOpen(false)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[76px] md:h-[84px]">
            <Link href="/" className="header-brand-link flex items-center shrink-0 min-w-0 max-w-[55%] sm:max-w-none">
              <Image
                src="/assert/image/RDTLogo.png"
                alt="Reliance Diamond Tools"
                width={68}
                height={68}
                className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 object-contain shrink-0 header-logo"
                priority
              />
              <div className="min-w-0 hidden sm:block">
                <span className="font-heading header-brand-name truncate">
                  RELIANCE DIAMOND TOOLS
                </span>
                <span className="header-brand-tagline truncate hidden md:block">
                  Engineering Precision Since 1994
                </span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
              {navItems.map((item) =>
                item.menu === "products" ? (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setDesktopProductsOpen(true)}
                  >
                    <button
                      type="button"
                      id="products-menu-trigger"
                      aria-expanded={desktopProductsOpen}
                      aria-haspopup="true"
                      aria-controls="products-mega-menu-panel"
                      className={`flex items-center gap-1 px-2.5 lg:px-3 py-2 text-xs font-medium transition-colors whitespace-nowrap ${navLinkClass(isActive(item.href))}`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform ${desktopProductsOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-2.5 lg:px-3 py-2 text-xs font-medium transition-colors whitespace-nowrap ${navLinkClass(isActive(item.href))}`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            <div className="flex items-center gap-2 shrink-0">
              <Link
                href="/contact"
                className="hidden lg:inline-flex btn-primary text-xs min-h-[2rem] py-1.5 px-3"
              >
                Request Quote
              </Link>
              <a
                href="mailto:info@reliancediamondtools.com"
                className="hidden lg:flex items-center justify-center w-9 h-9 border border-light-steel-blue/50 text-light-steel-blue hover:bg-white/10 hover:text-white transition-colors rounded-sm"
                aria-label="Email info@reliancediamondtools.com"
              >
                <Mail className="w-4 h-4" />
              </a>
              <button
                type="button"
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
                className="md:hidden w-10 h-10 flex items-center justify-center text-white"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {desktopProductsOpen && (
          <div
            id="products-mega-menu-panel"
            role="region"
            aria-labelledby="products-menu-trigger"
            className="products-mega-menu hidden md:block absolute left-0 right-0 top-full z-50"
            onMouseEnter={() => setDesktopProductsOpen(true)}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <ProductsMenuCarousel onNavigate={closeDesktopMenu} />
            </div>
          </div>
        )}

        {mobileOpen && (
          <div className="md:hidden bg-header-bg-dropdown border-t border-light-steel-blue/20 max-h-[80vh] overflow-y-auto">
            <nav className="py-3 px-4 flex flex-col" aria-label="Mobile navigation">
              {navItems.map((item) =>
                item.menu === "products" ? (
                  <div key={item.href}>
                    <button
                      type="button"
                      aria-expanded={productsOpen}
                      aria-controls="mobile-products-panel"
                      className="flex items-center justify-between w-full text-sm font-medium text-white py-3 px-3 border-b border-white/10"
                      onClick={() => setProductsOpen(!productsOpen)}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                    {productsOpen && (
                      <div id="mobile-products-panel" className="py-3 px-2 mega-menu-mobile-panel">
                        <ProductsMenuCarousel onNavigate={() => setMobileOpen(false)} />
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium py-3 px-3 border-b border-white/10 ${
                      isActive(item.href) ? "text-white" : "text-light-steel-blue"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link
                href="/contact"
                className="btn-primary mx-3 mt-4 mb-2 text-center"
                onClick={() => setMobileOpen(false)}
              >
                Request Quote
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

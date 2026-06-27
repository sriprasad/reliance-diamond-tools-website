"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
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
      ? "site-header__nav-link site-header__nav-link--active"
      : "site-header__nav-link";

  useEffect(() => {
    setDesktopProductsOpen(false);
    setMobileOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!desktopProductsOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDesktopMenu();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [desktopProductsOpen, closeDesktopMenu]);

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
      {desktopProductsOpen && (
        <div
          className="mega-menu-backdrop hidden md:block fixed inset-0 top-[var(--site-header-height)] z-40 bg-black/25 backdrop-blur-[1px]"
          aria-hidden="true"
          onClick={closeDesktopMenu}
        />
      )}

      <header
        ref={headerRef}
        className="site-header fixed top-0 left-0 right-0 z-50"
        onMouseLeave={() => setDesktopProductsOpen(false)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="site-header__top">
            <Link href="/" className="site-header__logo-link shrink-0" aria-label="Reliance Diamond Tools home">
              <Image
                src="/assert/image/Logo.svg"
                alt=""
                width={1500}
                height={500}
                className="site-header__logo"
                priority
              />
            </Link>

            <div className="site-header__brand min-w-0">
              <Link href="/" className="site-header__brand-link">
                <span className="header-brand-name">RELIANCE DIMOND TOOLS</span>
                <span className="header-brand-tagline">
                  Engineering Precision Since 1994, Excellence Measured in Microns.
                </span>
              </Link>
            </div>

            <div className="site-header__menu-toggle shrink-0">
              <button
                type="button"
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
                className="md:hidden site-header__icon-btn"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          <nav className="site-header__nav hidden md:flex" aria-label="Main navigation">
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
                    className={`${navLinkClass(isActive(item.href))} inline-flex items-center gap-1`}
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
                  className={navLinkClass(isActive(item.href))}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
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
          <div className="site-header__mobile-panel md:hidden">
            <nav className="py-3 px-4 flex flex-col" aria-label="Mobile navigation">
              {navItems.map((item) =>
                item.menu === "products" ? (
                  <div key={item.href}>
                    <button
                      type="button"
                      aria-expanded={productsOpen}
                      aria-controls="mobile-products-panel"
                      className="site-header__mobile-link flex items-center justify-between w-full"
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
                    className={`site-header__mobile-link ${isActive(item.href) ? "site-header__mobile-link--active" : ""}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link
                href="/contact"
                className="btn-primary mx-1 mt-4 mb-2 text-center text-sm"
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

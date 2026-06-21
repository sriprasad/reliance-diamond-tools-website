"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("rdt-cookie-consent");
    if (!accepted) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("rdt-cookie-consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] bg-mobile-blue text-white py-3 px-4 sm:px-6 border-t border-silver/20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs sm:text-sm text-center sm:text-left text-light-steel-blue">
          This website uses cookies to ensure you get the best experience on our
          website.{" "}
          <Link href="/about" className="underline text-white hover:text-silver">
            Learn more
          </Link>
        </p>
        <button
          type="button"
          onClick={handleAccept}
          className="shrink-0 border border-white text-white px-5 py-1.5 text-sm hover:bg-white hover:text-black transition-colors"
        >
          Got it!
        </button>
      </div>
    </div>
  );
}

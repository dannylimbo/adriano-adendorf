"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const overHero = !scrolled && !menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300 ${
        overHero
          ? "border-transparent bg-transparent shadow-none"
          : scrolled
            ? "border-rotbraun/20 bg-beige/98 shadow-md shadow-rotbraun/5 backdrop-blur-lg"
            : "border-rotbraun/15 bg-beige/96 shadow-sm backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 lg:py-3.5">
        <Link
          href="#start"
          className="group flex flex-col"
          onClick={() => setMenuOpen(false)}
        >
          <span
            className={`font-display text-2xl font-bold tracking-tight transition-colors md:text-3xl ${
              overHero
                ? "text-off-white group-hover:text-vanille"
                : "text-rotbraun group-hover:text-weinrot"
            }`}
          >
            {BUSINESS.name}
          </span>
          <span
            className={`text-xs font-semibold uppercase tracking-widest ${
              overHero ? "text-off-white/75" : "text-text-muted"
            }`}
          >
            {BUSINESS.subtitle}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label="Hauptnavigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-3 py-2 text-sm font-semibold transition-colors ${
                overHero
                  ? "text-off-white/95 hover:bg-off-white/10 hover:text-vanille"
                  : "text-espresso hover:bg-vanille/25 hover:text-rotbraun"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            href={BUSINESS.mapsUrl}
            variant="primary"
            size="sm"
            external
            className="hidden sm:inline-flex"
            ariaLabel="Route zu Adriano öffnen"
          >
            <MapPinIcon />
            Route
          </Button>

          <button
            type="button"
            className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden ${
              overHero
                ? "border-off-white/30 bg-espresso/30 text-off-white hover:bg-off-white/10"
                : "border-rotbraun/20 bg-creme text-rotbraun hover:bg-vanille/30"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="border-t border-rotbraun/15 bg-beige px-4 py-6"
          aria-label="Mobile Navigation"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-xl px-4 py-3 text-lg font-semibold text-espresso transition-colors hover:bg-vanille/20 hover:text-rotbraun"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            <Button
              href={BUSINESS.phoneHref}
              variant="secondary"
              size="lg"
              className="w-full"
              ariaLabel="Adriano anrufen"
            >
              <PhoneIcon />
              Jetzt anrufen
            </Button>
            <Button
              href={BUSINESS.mapsUrl}
              variant="primary"
              size="lg"
              className="w-full"
              external
              ariaLabel="Route öffnen"
            >
              <MapPinIcon />
              Route öffnen
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

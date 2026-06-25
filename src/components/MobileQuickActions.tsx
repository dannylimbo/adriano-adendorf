import { BUSINESS, MENU_PDFS } from "@/lib/constants";

/** Sticky Schnellzugriff für Mobile – Anrufen, Route, Speisekarte */
export function MobileQuickActions() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-rotbraun/10 bg-beige/95 backdrop-blur-md lg:hidden"
      role="navigation"
      aria-label="Schnellzugriff"
    >
      <div className="grid grid-cols-3 divide-x divide-rotbraun/10">
        <a
          href={BUSINESS.phoneHref}
          className="flex min-h-[52px] flex-col items-center justify-center gap-1 py-3 text-xs font-semibold text-rotbraun active:bg-creme"
        >
          <PhoneIcon />
          Anrufen
        </a>
        <a
          href={BUSINESS.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[52px] flex-col items-center justify-center gap-1 py-3 text-xs font-semibold text-rotbraun active:bg-creme"
        >
          <MapIcon />
          Route
        </a>
        <a
          href={MENU_PDFS.speisekarte}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[52px] flex-col items-center justify-center gap-1 py-3 text-xs font-semibold text-rotbraun active:bg-creme"
        >
          <MenuIcon />
          Karte
        </a>
      </div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 6h16M4 12h16M4 18h10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

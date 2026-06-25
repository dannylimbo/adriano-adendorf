import Link from "next/link";
import { BUSINESS, NAV_LINKS, OPENING_HOURS } from "@/lib/constants";

const footerLinks = [
  ...NAV_LINKS,
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

export function Footer() {
  return (
    <footer className="border-t-4 border-vanille bg-espresso text-creme/90" aria-label="Seitenfuß">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Marke */}
          <div>
            <p className="font-display text-3xl font-bold text-vanille">
              {BUSINESS.name}
            </p>
            <p className="mt-1 text-sm uppercase tracking-widest text-creme/70">
              {BUSINESS.subtitle}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-creme/70">
              Italienische Gastfreundschaft, hausgemachtes Eis und knusprige
              Pizza – mitten in Adendorf.
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-vanille">
              Kontakt
            </h3>
            <address className="not-italic text-sm leading-relaxed">
              <p>{BUSINESS.fullName}</p>
              <p className="mt-2">{BUSINESS.address}</p>
              <p>{BUSINESS.city}</p>
              <p className="mt-3">
                <a
                  href={BUSINESS.phoneHref}
                  className="font-medium text-off-white transition-colors hover:text-vanille"
                >
                  {BUSINESS.phone}
                </a>
              </p>
            </address>
          </div>

          {/* Öffnungszeiten kompakt */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-vanille">
              Öffnungszeiten
            </h3>
            <ul className="space-y-1 text-sm">
              {OPENING_HOURS.map((entry) => (
                <li key={entry.day} className="flex justify-between gap-4">
                  <span className="text-creme/70">{entry.day.slice(0, 2)}.</span>
                  <span
                    className={
                      entry.closed ? "text-creme/50 italic" : "text-creme/90"
                    }
                  >
                    {entry.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-vanille">
              Links
            </h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-vanille"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Media Platzhalter */}
            <div className="mt-6 flex gap-3">
              <SocialPlaceholder label="Facebook" />
              <SocialPlaceholder label="Instagram" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-creme/10 pt-8 text-center text-xs text-creme/50">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS.fullName}. Alle Rechte
            vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialPlaceholder({ label }: { label: string }) {
  return (
    <span
      className="flex h-10 w-10 items-center justify-center rounded-full border border-creme/20 text-creme/60"
      aria-label={`${label} (Platzhalter)`}
      title={`${label} – Link folgt`}
    >
      <span className="text-xs font-bold">{label[0]}</span>
    </span>
  );
}

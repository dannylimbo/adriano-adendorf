import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

export const metadata = {
  title: "Impressum – Eiscafé Pizzeria Adriano",
  description: "Impressum der Eiscafé Pizzeria Adriano in Adendorf.",
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <header className="border-b border-rotbraun/10 bg-beige px-4 py-6">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="text-sm font-medium text-rotbraun hover:text-vanille"
          >
            ← Zurück zur Startseite
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="font-display text-3xl font-bold text-espresso">
          Impressum
        </h1>
        <p className="mt-6 text-text-muted leading-relaxed">
          Platzhalter – bitte vor Veröffentlichung mit den rechtlichen Angaben
          des Betreibers ersetzen.
        </p>
        <div className="mt-8 space-y-2 text-text-dark">
          <p className="font-semibold">{BUSINESS.fullName}</p>
          <p>{BUSINESS.address}</p>
          <p>{BUSINESS.city}</p>
          <p>Tel.: {BUSINESS.phone}</p>
        </div>
      </main>
    </div>
  );
}

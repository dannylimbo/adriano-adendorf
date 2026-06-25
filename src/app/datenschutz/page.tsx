import Link from "next/link";

export const metadata = {
  title: "Datenschutz – Eiscafé Pizzeria Adriano",
  description: "Datenschutzerklärung der Eiscafé Pizzeria Adriano in Adendorf.",
};

export default function DatenschutzPage() {
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
          Datenschutzerklärung
        </h1>
        <p className="mt-6 text-text-muted leading-relaxed">
          Platzhalter – bitte vor Veröffentlichung mit der vollständigen
          Datenschutzerklärung ersetzen.
        </p>
      </main>
    </div>
  );
}

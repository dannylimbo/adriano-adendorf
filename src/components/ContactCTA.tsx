import { BUSINESS, MENU_PDFS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function ContactCTA() {
  return (
    <section
      id="kontakt"
      className="relative overflow-hidden bg-espresso py-20 md:py-28"
      aria-labelledby="cta-heading"
    >
      {/* Hintergrund-Dekoration */}
      <div
        className="absolute inset-0 opacity-10"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, var(--vanille) 0%, transparent 50%), radial-gradient(circle at 80% 50%, var(--rotbraun) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center md:px-6">
        <h2
          id="cta-heading"
          className="font-display text-3xl font-bold text-off-white md:text-4xl lg:text-5xl"
        >
          Lust auf Eis, Pizza oder Cappuccino?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-creme/90">
          Besuche Adriano in Adendorf und genieße italienische Momente – vor Ort
          oder zum Mitnehmen.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={BUSINESS.phoneHref} variant="primary" size="lg">
            Jetzt anrufen
          </Button>
          <Button href={BUSINESS.mapsUrl} variant="outline" size="lg" external>
            Route öffnen
          </Button>
          <Button
            href={MENU_PDFS.speisekarte}
            variant="outline"
            size="lg"
            external
          >
            Speisekarte ansehen
          </Button>
        </div>
      </div>
    </section>
  );
}

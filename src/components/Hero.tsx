import { IMAGES } from "@/lib/images";
import { SiteImage } from "@/components/ui/SiteImage";
import {
  BUSINESS,
  DAY_INDEX_TO_NAME,
  MENU_PDFS,
  OPENING_HOURS,
} from "@/lib/constants";
import { Button } from "@/components/ui/Button";

function getTodayStatus() {
  const todayName = DAY_INDEX_TO_NAME[new Date().getDay()];
  const entry = OPENING_HOURS.find((row) => row.day === todayName);
  if (!entry) return null;
  if (entry.closed) {
    return { label: "Heute geschlossen", open: false };
  }
  return { label: `Heute geöffnet · ${entry.hours}`, open: true };
}

export function Hero() {
  const todayStatus = getTodayStatus();

  return (
    <section
      id="start"
      className="relative flex min-h-[min(90vh,52rem)] items-center justify-center overflow-hidden scroll-mt-20"
      aria-label="Willkommen bei Adriano"
    >
      <div className="absolute inset-0">
        <SiteImage {...IMAGES.hero} priority sizes="100vw" />
        <div
          className="absolute inset-0 bg-gradient-to-b from-espresso/85 via-espresso/55 to-espresso/90"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-rotbraun/25 via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-28 text-center md:px-6 md:py-36 lg:py-40">
        <div className="hero-animate mb-6 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-full border border-vanille/35 bg-espresso/40 px-4 py-2 backdrop-blur-sm">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-vanille">
            <span
              className={`h-2 w-2 rounded-full ${
                todayStatus?.open ? "bg-italien-gruen" : "bg-text-muted"
              } motion-safe:animate-pulse motion-reduce:animate-none`}
              aria-hidden="true"
            />
            Seit {BUSINESS.since} in Adendorf
          </span>
          {todayStatus && (
            <>
              <span className="hidden text-vanille/40 sm:inline" aria-hidden="true">
                ·
              </span>
              <span className="text-sm font-medium text-off-white/95">
                {todayStatus.label}
              </span>
            </>
          )}
        </div>

        <h1 className="hero-animate hero-animate-delay-1 font-display text-balance text-[clamp(2.25rem,4.5vw+1rem,4.5rem)] font-bold leading-[1.08] tracking-tight text-off-white">
          Eis, Pizza &amp; Cappuccino —{" "}
          <span className="text-vanille">mitten in Adendorf</span>
        </h1>

        <p className="hero-animate hero-animate-delay-2 mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-off-white/90 md:text-xl">
          Hausgemachtes Eis, knusprige Pizza und guter Kaffee im Kirchweg 19A.
          Vor Ort genießen oder zum Mitnehmen.
        </p>

        <div className="hero-animate hero-animate-delay-3 mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Button
            href={MENU_PDFS.speisekarte}
            variant="primary"
            size="lg"
            external
            className="w-full sm:w-auto"
          >
            Speisekarte ansehen
          </Button>
          <Button
            href={BUSINESS.mapsUrl}
            variant="outline"
            size="lg"
            external
            className="w-full sm:w-auto"
          >
            Route öffnen
          </Button>
          <Button
            href={BUSINESS.phoneHref}
            variant="outline"
            size="lg"
            className="hidden w-full sm:inline-flex sm:w-auto"
          >
            Jetzt anrufen
          </Button>
        </div>

        <p className="mt-6 text-sm text-off-white/75">
          <a
            href="#oeffnungszeiten"
            className="underline decoration-vanille/50 underline-offset-4 transition-colors hover:text-vanille hover:decoration-vanille"
          >
            Alle Öffnungszeiten ansehen
          </a>
        </p>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-vanille/80 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}

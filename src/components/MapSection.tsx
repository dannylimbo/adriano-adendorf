import { BUSINESS, MENU_PDFS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function MapSection() {
  return (
    <section
      id="standort"
      className="bg-creme py-20 md:py-28"
      aria-labelledby="location-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Standort"
          title="So findest du uns"
          description="Mitten in Adendorf – einfach vorbeikommen oder Route planen."
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Kontaktkarte */}
          <div className="flex flex-col justify-center rounded-3xl border border-rotbraun/15 bg-off-white p-8 shadow-md shadow-rotbraun/5 md:p-10">
            <h3 className="font-display text-2xl font-bold text-espresso">
              {BUSINESS.fullName}
            </h3>
            <address className="mt-6 not-italic text-text-muted leading-relaxed">
              <p className="text-lg text-text-dark">{BUSINESS.address}</p>
              <p className="text-lg text-text-dark">{BUSINESS.city}</p>
            </address>

            <div className="mt-6 flex items-center gap-3">
              <PhoneIcon />
              <a
                href={BUSINESS.phoneHref}
                className="text-lg font-semibold text-rotbraun transition-colors hover:text-vanille"
              >
                {BUSINESS.phone}
              </a>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                href={BUSINESS.mapsUrl}
                variant="primary"
                size="md"
                external
                ariaLabel="Route zu Adriano öffnen"
              >
                Route öffnen
              </Button>
              <Button
                href={BUSINESS.phoneHref}
                variant="ghost"
                size="md"
                ariaLabel="Adriano anrufen"
              >
                Anrufen
              </Button>
              <Button
                href={MENU_PDFS.speisekarte}
                variant="ghost"
                size="md"
                external
                ariaLabel="Speisekarte öffnen"
              >
                Speisekarte ansehen
              </Button>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="overflow-hidden rounded-3xl border border-rotbraun/15 shadow-md shadow-rotbraun/5">
            <iframe
              title={`${BUSINESS.fullName} auf Google Maps`}
              src={BUSINESS.mapsEmbed}
              className="h-[350px] w-full md:h-full min-h-[350px] grayscale-[20%] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className="text-rotbraun"
      aria-hidden
    >
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

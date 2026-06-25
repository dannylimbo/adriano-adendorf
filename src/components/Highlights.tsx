import { IMAGES } from "@/lib/images";
import { SiteImage } from "@/components/ui/SiteImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const highlightItems = [
  {
    title: "Eis & Eisspezialitäten",
    description:
      "Cremige Klassiker und saisonale Eisbecher – perfekt für einen süßen Genussmoment.",
    ...IMAGES.highlights.eis,
  },
  {
    title: "Pizza & italienische Klassiker",
    description:
      "Knusprige Pizza und mediterrane Favoriten – frisch zubereitet mit Liebe zum Detail.",
    ...IMAGES.highlights.pizza,
  },
  {
    title: "Kaffee & Cappuccino",
    description:
      "Aromatischer Espresso, cremiger Cappuccino und warme Getränke für jede Tageszeit.",
    ...IMAGES.highlights.kaffee,
  },
  {
    title: "Vor Ort oder mitnehmen",
    description:
      "Gemütlich bei uns genießen oder bequem zum Mitnehmen – wie es dir am besten passt.",
    ...IMAGES.highlights.terrasse,
  },
] as const;

export function Highlights() {
  return (
    <section className="bg-espresso py-20 md:py-28" aria-labelledby="highlights-heading">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Unser Angebot"
            title="Was dich bei Adriano erwartet"
            description="Von Eisbecher bis Pizza — unsere Klassiker auf einen Blick."
            light
          />
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlightItems.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 100}>
              <article
                className="group overflow-hidden rounded-2xl border border-vanille/20 bg-espresso-light/60 shadow-md shadow-black/15 transition-[border-color,box-shadow] duration-300 hover:border-vanille/40 hover:shadow-lg hover:shadow-black/25"
              >
              <div className="relative aspect-[4/3] overflow-hidden">
                <SiteImage
                  src={item.src}
                  alt={item.alt}
                  objectPosition={item.objectPosition}
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="transition-transform duration-500 motion-reduce:transition-none motion-reduce:group-hover:scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-bold text-off-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-creme/80">
                  {item.description}
                </p>
              </div>
            </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

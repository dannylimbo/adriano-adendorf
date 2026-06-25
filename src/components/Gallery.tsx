import { IMAGES } from "@/lib/images";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SiteImage } from "@/components/ui/SiteImage";

/**
 * Galerie: einheitliches 3-Spalten-Grid (Desktop) mit festem 4:3-Seitenverhältnis.
 * Kein Masonry – verhindert Lücken durch gemischte row/col-spans.
 */
export function Gallery() {
  return (
    <section
      className="bg-creme py-20 md:py-28"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Atmosphäre"
          title="Ein Blick ins Adriano"
          description="Warmes Licht, appetitliche Speisen und italienisches Flair – so fühlt es sich bei uns an."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {IMAGES.gallery.map((img) => (
            <figure
              key={img.src}
              className={`group relative overflow-hidden rounded-2xl border border-rotbraun/10 bg-beige shadow-sm ${img.aspect}`}
            >
              <SiteImage
                src={img.src}
                alt={img.alt}
                objectPosition={img.objectPosition}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

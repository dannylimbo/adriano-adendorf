import { BUSINESS, TRUST_BADGES } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SiteImage } from "@/components/ui/SiteImage";

export function About() {
  return (
    <section
      id="ueber-uns"
      className="bg-creme py-20 md:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <div>
              <SectionHeading
                eyebrow="Über uns"
                title="Herzlich willkommen bei Adriano"
                centered={false}
              />
              <p className="text-lg leading-relaxed text-text-muted">
                Eiscafé Pizzeria Adriano ist ein gemütlicher Treffpunkt in
                Adendorf. Ob Eisbecher im Sommer, Pizza zum Mitnehmen oder ein
                Cappuccino zwischendurch – bei Adriano stehen Genuss, freundlicher
                Service und italienisches Flair im Mittelpunkt.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-text-muted">
                Seit {BUSINESS.since} verwöhnen wir Gäste aus Adendorf und Umgebung mit
                hausgemachten Eisspezialitäten, knuspriger Pizza und gutem Kaffee –
                in familiärer Atmosphäre, wie man sie von einem echten
                italienischen Eiscafé kennt.
              </p>

              <ul className="mt-8 flex flex-wrap gap-3">
                {TRUST_BADGES.map((badge) => (
                  <li
                    key={badge}
                    className="rounded-full border border-rotbraun/20 bg-off-white px-4 py-2 text-sm font-medium text-rotbraun"
                  >
                    {badge}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-lg shadow-rotbraun/15">
              <SiteImage
                {...IMAGES.about}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rotbraun/30 to-transparent" />
            </div>
            {/* Dekoratives Element */}
            <div
              className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-3xl border-2 border-vanille/40"
              aria-hidden="true"
            />
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

import { IMAGES } from "@/lib/images";
import { MENU_PDFS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SiteImage } from "@/components/ui/SiteImage";

const menus = [
  {
    id: "eiskarte",
    title: "Eiskarte",
    description:
      "Cremige Eisspezialitäten, Eisbecher und süße Klassiker für jeden Geschmack.",
    pdf: MENU_PDFS.eiskarte,
    ...IMAGES.menus.eiskarte,
    accent: "border-vanille/40",
  },
  {
    id: "speisekarte",
    title: "Speisekarte",
    description:
      "Pizza, kleine Gerichte und italienische Favoriten – frisch zubereitet und auch zum Mitnehmen.",
    pdf: MENU_PDFS.speisekarte,
    ...IMAGES.menus.speisekarte,
    accent: "border-rotbraun/30",
  },
];

export function MenuPreview() {
  return (
    <section
      id="speisekarte"
      className="bg-off-white py-20 md:py-28"
      aria-labelledby="menu-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Speisekarten"
          title="Unsere Karten"
          description="Eis- und Speisekarte als PDF — einfach anklicken und durchstöbern."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {menus.map((menu) => (
            <article
              key={menu.id}
              id={menu.id}
              className={`group overflow-hidden rounded-3xl border-2 ${menu.accent} bg-beige shadow-md shadow-rotbraun/5 transition-[border-color,box-shadow] duration-300 hover:border-vanille/50 hover:shadow-lg hover:shadow-rotbraun/10`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <SiteImage
                  src={menu.src}
                  alt={menu.alt}
                  objectPosition={menu.objectPosition}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="transition-transform duration-500 motion-reduce:transition-none motion-reduce:group-hover:scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/20 to-transparent" />
                <h3 className="absolute bottom-4 left-6 font-display text-3xl font-bold text-off-white md:text-4xl">
                  {menu.title}
                </h3>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-text-muted leading-relaxed">{menu.description}</p>
                <div className="mt-6">
                  <Button
                    href={menu.pdf}
                    variant="primary"
                    size="lg"
                    external
                    ariaLabel={`${menu.title} als PDF öffnen`}
                  >
                    {menu.title} ansehen
                    <ArrowIcon />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-text-muted">
          – zum Öffnen bitte klicken –
        </p>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Lokale Adriano-Bilder – manuell gecroppte Originalfotos
 */

export type SiteImage = {
  src: string;
  alt: string;
  objectPosition?: string;
};

export type GalleryImage = SiteImage & {
  /** Tailwind aspect-ratio Klasse für einheitliches Grid */
  aspect: string;
};

export const IMAGES = {
  hero: {
    src: "/images/hero.webp",
    alt: "Terrasse von Eiscafé Pizzeria Adriano in Adendorf",
    objectPosition: "center 50%",
  },
  highlights: {
    eis: {
      src: "/images/eis-frucht.webp",
      alt: "Fruchtiger Eisbecher bei Adriano",
      objectPosition: "center 45%",
    },
    pizza: {
      src: "/images/pizza.webp",
      alt: "Frische Pizza auf der Terrasse bei Adriano",
      objectPosition: "center 55%",
    },
    kaffee: {
      src: "/images/kaffee.webp",
      alt: "Latte Macchiato auf der Adriano-Terrasse",
      objectPosition: "center 55%",
    },
    terrasse: {
      src: "/images/eisbecher.webp",
      alt: "Eisbecher auf der Terrasse bei Adriano",
      objectPosition: "center 35%",
    },
  },
  menus: {
    eiskarte: {
      src: "/images/eisbecher.webp",
      alt: "Eisspezialitäten bei Adriano",
      objectPosition: "center 30%",
    },
    speisekarte: {
      src: "/images/pizza.webp",
      alt: "Pizza und italienische Speisen bei Adriano",
      objectPosition: "center 50%",
    },
  },
  about: {
    src: "/images/about.webp",
    alt: "Adriano Espresso – Italian Style im Eiscafé",
    objectPosition: "center 35%",
  },
  /** 6 Bilder für 3×2-Grid – einheitliches Seitenverhältnis */
  gallery: [
    {
      src: "/images/eis-frucht.webp",
      alt: "Fruchtiger Eisbecher bei Adriano",
      aspect: "aspect-[4/3]",
      objectPosition: "center 45%",
    },
    {
      src: "/images/pizza.webp",
      alt: "Pizza auf der Terrasse",
      aspect: "aspect-[4/3]",
      objectPosition: "center 50%",
    },
    {
      src: "/images/kaffee.webp",
      alt: "Latte Macchiato bei Adriano",
      aspect: "aspect-[4/3]",
      objectPosition: "center 50%",
    },
    {
      src: "/images/eisbecher.webp",
      alt: "Eisbecher auf der Terrasse",
      aspect: "aspect-[4/3]",
      objectPosition: "center 35%",
    },
    {
      src: "/images/terrasse.webp",
      alt: "Außenterrasse von Adriano",
      aspect: "aspect-[4/3]",
      objectPosition: "center 40%",
    },
    {
      src: "/images/waffel.webp",
      alt: "Waffel mit Kirschen und Vanilleeis bei Adriano",
      aspect: "aspect-[4/3]",
      objectPosition: "center 40%",
    },
  ] satisfies GalleryImage[],
} as const;

export const IMAGE_CLASS =
  "object-cover brightness-[1.02] contrast-[1.03] saturate-[1.04]";

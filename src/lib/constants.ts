/** Zentrale Geschäftsdaten & Navigation für Eiscafé Pizzeria Adriano */

export const BUSINESS = {
  name: "Adriano",
  subtitle: "Eiscafé & Pizzeria",
  fullName: "Eiscafé Pizzeria Adriano",
  address: "Kirchweg 19A",
  city: "21365 Adendorf",
  phone: "04131 709808",
  phoneHref: "tel:+494131709808",
  website: "https://www.adriano-adendorf.de",
  since: "2006",
  mapsUrl:
    "https://www.google.com/maps/place/Eiscafé+Pizzeria+Adriano/@53.2794677,10.4362653,126m/data=!3m1!1e3!4m6!3m5!1s0x47b1ddff7f67b6a5:0xdaa91b69b85a19f6!8m2!3d53.2794677!4d10.4368729!16s%2Fg%2F1hm348cxt",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.5!2d10.4368729!3d53.2794677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b1ddff7f67b6a5%3A0xdaa91b69b85a19f6!2sEiscaf%C3%A9%20Pizzeria%20Adriano!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde",
} as const;

export const NAV_LINKS = [
  { href: "#start", label: "Start" },
  { href: "#speisekarte", label: "Speisekarte" },
  { href: "#eiskarte", label: "Eiskarte" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#oeffnungszeiten", label: "Öffnungszeiten" },
  { href: "#standort", label: "Standort" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

export const MENU_PDFS = {
  eiskarte: "/dokumente/eiskarte.pdf",
  speisekarte: "/dokumente/speisekarte_2025.pdf",
} as const;

/** Öffnungszeiten – vor Veröffentlichung bitte prüfen */
export const OPENING_HOURS = [
  { day: "Montag", hours: "Geschlossen", closed: true },
  { day: "Dienstag", hours: "11:00–21:00", closed: false },
  { day: "Mittwoch", hours: "11:00–21:00", closed: false },
  { day: "Donnerstag", hours: "11:00–21:00", closed: false },
  { day: "Freitag", hours: "11:00–21:00", closed: false },
  { day: "Samstag", hours: "11:00–21:00", closed: false },
  { day: "Sonntag", hours: "12:00–20:30", closed: false },
] as const;

/** Wochentag-Index: 0 = Sonntag (JS getDay) */
export const DAY_INDEX_TO_NAME = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
] as const;

export const FAQ_ITEMS = [
  {
    question: "Wo befindet sich Eiscafé Pizzeria Adriano?",
    answer:
      "Du findest Adriano im Kirchweg 19A, 21365 Adendorf.",
  },
  {
    question: "Bietet Adriano Speisen zum Mitnehmen an?",
    answer:
      "Ja, viele Speisen können auch zum Mitnehmen bestellt werden.",
  },
  {
    question: "Gibt es Pizza?",
    answer:
      "Ja, Adriano bietet verschiedene Pizza-Spezialitäten und italienische Klassiker an.",
  },
  {
    question: "Gibt es Eis und Eisspezialitäten?",
    answer:
      "Ja, Adriano ist Eiscafé und bietet verschiedene Eisbecher und Eisspezialitäten an.",
  },
  {
    question: "Wie kann ich Adriano kontaktieren?",
    answer: "Du erreichst Adriano telefonisch unter 04131 709808.",
  },
  {
    question: "Wo finde ich die Speisekarte?",
    answer:
      "Die Speisekarte und Eiskarte können direkt auf der Website geöffnet werden.",
  },
] as const;

export const TRUST_BADGES = [
  "Zentral in Adendorf",
  "Speisen vor Ort",
  "Zum Mitnehmen",
  "Familienfreundlich",
] as const;

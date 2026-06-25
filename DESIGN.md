---
name: Eiscafé Pizzeria Adriano
description: Warme italienische Marken-Website — Vanille, Rotbraun, Espresso
colors:
  vanille: "#f0c040"
  honig: "#d9a82a"
  creme: "#f3e8d4"
  beige: "#faf3e6"
  off-white: "#fffaf2"
  rotbraun: "#7a2e2e"
  weinrot: "#8b3333"
  espresso: "#2a1810"
  espresso-light: "#3d2418"
  italien-gruen: "#2d5a3d"
  tomatenrot: "#a63d32"
  text-dark: "#2a1a14"
  text-muted: "#5c4038"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontWeight: 700
    lineHeight: 1.1
  body:
    fontFamily: "Nunito Sans, system-ui, sans-serif"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  button: "9999px"
  card: "12px"
  accent: "4px"
spacing:
  section-y: "clamp(4rem, 8vw, 6rem)"
  container: "max-w-7xl"
components:
  button-primary:
    backgroundColor: "{colors.vanille}"
    textColor: "{colors.espresso}"
    rounded: "{rounded.button}"
    padding: "16px 32px"
  button-secondary:
    backgroundColor: "{colors.rotbraun}"
    textColor: "{colors.off-white}"
    rounded: "{rounded.button}"
    padding: "16px 32px"
---

## Overview

Adriano nutzt eine **Hero-Centric + Conversion**-Struktur (ui-ux-pro-max: Bakery/Cafe, Restaurant/Food). Vollflächiges Essens-/Lokal-Foto im Hero, warme Erdtöne, klare CTAs (Speisekarte, Route, Anruf). Register: **brand** — Design ist das Produkt; Besucher sollen Appetit und Vertrauen spüren.

Stack: Next.js App Router, Tailwind CSS v4, Playfair Display + Nunito Sans.

## Colors

| Rolle | Token | Verwendung |
|-------|-------|------------|
| Akzent hell | `vanille` | CTAs, Highlights, Fokus-Ring |
| Akzent dunkel | `honig` | Hover auf primären Buttons |
| Hintergrund | `off-white`, `beige` | Body, Sektionen |
| Fläche warm | `creme` | Scrollbar, dezente Flächen |
| Markenrot | `rotbraun`, `weinrot` | Eyebrows, Sekundär-Buttons, Akzentlinien |
| Dunkel | `espresso` | Hero-Overlay, Überschriften auf hell |
| Grün | `italien-gruen` | Status-Punkte, dezente italienische Akzente |
| Text | `text-dark`, `text-muted` | Fließtext, Beschreibungen |

Farbstrategie: **Committed** — warme Neutrals + gesättigtes Rotbraun/Vanille. Kein kaltes Grau, kein Neon.

## Typography

- **Display:** Playfair Display — Überschriften (Hero h1, Section h2), fett, `leading-tight`
- **Body:** Nunito Sans — Fließtext, Navigation, Buttons, `leading-relaxed`
- **Eyebrows:** uppercase, `tracking-widest`, `text-sm`, `text-rotbraun` (hell: `text-vanille`)
- **Hero-Skala:** `text-4xl` → `xl:text-7xl` mit `clamp`-ähnlicher Responsive-Stufe
- **Section h2:** `text-3xl` → `lg:text-5xl`

## Elevation

Überwiegend flach mit warmen Tönen statt Schatten-Hierarchie. Buttons: leichte `shadow-md shadow-rotbraun/10`. Hero: Gradient-Overlays (`from-espresso/80`) statt harte Box-Shadows. Keine schweren `shadow-lg`-Defaults.

## Components

- **Button:** Pill-Form (`rounded-full`), Varianten `primary` (vanille), `secondary` (rotbraun), `outline` (für dunkle Hero), `ghost`. Hover + `active:scale-[0.98]`.
- **SectionHeading:** optionales Eyebrow, h2, Description, Gradient-Akzentlinie darunter.
- **Header:** `header-bg` semi-transparent beige, sticky.
- **MobileQuickActions:** Feste Quick-Actions (Anruf, Route) am unteren Rand mobil.

## Do's and Don'ts

**Do**
- Echte Adriano-Fotos (Eis, Pizza, Lokal) prominent einsetzen
- Öffnungszeiten und Standort immer leicht auffindbar halten
- Deutsche, konkrete Copy („Speisekarte ansehen“, nicht „Entdecken Sie unser Angebot“)
- Warme Overlays auf Hero-Bildern für Lesbarkeit
- Mobile-first: große Touch-Targets, Quick Actions

**Don't**
- Inter, DM Sans oder generische AI-Font-Paare einführen
- Kalte SaaS-Bento-Grids oder monochrom-editorialen Stil (minimalist-ui)
- Englische Marketing-Floskeln
- Leere farbige Platzhalter statt echter Food-Fotografie
- Cream-Only-Hintergrund ohne Markenidentität (Vanille/Rotbraun/Espresso beibehalten)

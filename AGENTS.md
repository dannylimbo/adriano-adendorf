<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Design Context (Eiscafé Pizzeria Adriano)

Lokale Marken-Website (Register: **brand**). Strategie und Tokens liegen in `PRODUCT.md` und `DESIGN.md` — vor UI-Arbeit immer lesen.

### Aktive Skills für dieses Projekt

| Skill | Wann nutzen |
|-------|-------------|
| **impeccable** | UI bauen, verbessern, polieren, auditieren. Zuerst `node .agents/skills/impeccable/scripts/context.mjs` ausführen. Register: brand → `reference/brand.md`. |
| **frontend-design** | Neue Sektionen, Redesigns, visuelle Richtung — distinctive, nicht templated. |
| **ui-ux-pro-max** | UX-Flows, Restaurant/Café-Patterns, Design-Heuristiken. Daten in `.agents/skills/ui-ux-pro-max/assets/data/`. |

**Nicht verwenden:** `minimalist-ui` (entfernt — widerspricht warmer italienischer Marken-Ästhetik).

### Kurzreferenz Marke

- **Farben:** Vanille `#f0c040`, Rotbraun `#7a2e2e`, Espresso `#2a1810`, Off-White `#fffaf2`
- **Fonts:** Playfair Display (Display), Nunito Sans (Body)
- **CTAs:** Speisekarte, Route, Anruf — mobil priorisieren

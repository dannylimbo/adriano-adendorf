"use client";

import { OPENING_HOURS, DAY_INDEX_TO_NAME } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function OpeningHours() {
  const today = DAY_INDEX_TO_NAME[new Date().getDay()];

  return (
    <section
      id="oeffnungszeiten"
      className="bg-creme py-20 md:py-28"
      aria-labelledby="hours-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Öffnungszeiten"
          title="Wann wir für dich da sind"
          description="Komm vorbei und genieße Eis, Pizza oder einen guten Kaffee."
        />

        <div className="mx-auto max-w-lg">
          <div className="overflow-hidden rounded-3xl border border-rotbraun/15 bg-off-white shadow-md shadow-rotbraun/5">
            <div className="bg-rotbraun px-6 py-4">
              <h3 className="text-center font-display text-xl font-bold text-off-white">
                Öffnungszeiten
              </h3>
            </div>
            <ul className="divide-y divide-creme">
              {OPENING_HOURS.map((entry) => {
                const isToday = entry.day === today;
                return (
                  <li
                    key={entry.day}
                    className={`flex items-center justify-between px-6 py-4 transition-colors ${
                      isToday ? "bg-vanille/20 ring-1 ring-inset ring-vanille/35" : ""
                    }`}
                  >
                    <span
                      className={`font-medium ${
                        isToday ? "text-rotbraun" : "text-text-dark"
                      }`}
                    >
                      {entry.day}
                      {isToday && (
                        <span className="ml-2 text-xs font-semibold uppercase tracking-wide text-vanille bg-rotbraun px-2 py-0.5 rounded-full">
                          Heute
                        </span>
                      )}
                    </span>
                    <span
                      className={`text-sm md:text-base ${
                        entry.closed
                          ? "text-text-muted italic"
                          : isToday
                            ? "font-semibold text-rotbraun"
                            : "text-text-muted"
                      }`}
                    >
                      {entry.hours}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <p className="mt-4 text-center text-xs text-text-muted">
            * Öffnungszeiten vor Veröffentlichung bitte prüfen und ggf. anpassen.
          </p>
        </div>
      </div>
    </section>
  );
}

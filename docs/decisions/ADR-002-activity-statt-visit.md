# ADR-002: Activity statt Visit als Basiskonzept

- **Status:** Akzeptiert
- **Datum:** 2026-08-06

## Kontext

Ein Projekt besteht nicht nur aus Baustellenbesuchen. Telefonate, Lieferungen, Freigaben, Behinderungen, Dokumente und Materialbewegungen benötigen denselben Kontext aus Zeitpunkt, Verantwortlichkeit, Workflow und Ergebnis.

## Entscheidung

Die **Aktivität** wird zum allgemeinen fachlichen Basiskonzept. Ein Baustellenbesuch bleibt als Aktivitätsart mit Vor-Ort-Termin erhalten. Bestehende Besuchsfunktionen werden nicht vorschnell umbenannt; neue Architektur richtet sich schrittweise am Oberbegriff aus.

## Konsequenzen

- Die Activity Engine kann unterschiedliche Vorgänge mit einem gemeinsamen Mechanismus steuern.
- Timeline, Aufgaben und Brain erhalten einheitliche Quellen.
- Besuchsspezifische Daten bleiben klar abgegrenzt.
- Migration und Sprache in bestehenden Oberflächen benötigen eigene Tickets.

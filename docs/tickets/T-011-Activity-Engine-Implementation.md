# T-011 – Activity Engine Foundation

## Ziel

Implementiere das Grundmodell der Activity Engine.

Es soll die zukünftige Basis für:

- Baustellenbesuche
- Aufmaß
- Montage
- Umbau
- Abbau
- Materiallieferung
- Nachträge
- Kontrollen

bilden.

Es wird bewusst nur das Fundament erstellt.

---

## Anforderungen

Erstelle ein gemeinsames Activity-Datenmodell.

Eine Activity besitzt mindestens:

- ID
- Projektreferenz
- Typ
- Titel
- Beschreibung
- Status
- Priorität
- Vorbereitungsgrad (Readiness)
- Geplantes Datum
- Beginn
- Ende
- Verantwortlicher
- Ergebnis
- Erstellungsdatum
- Änderungsdatum

---

## Aktivitätstypen

Vorbereiten:

- Angebotsaufnahme
- Angebot
- Montage
- Umbau
- Abbau
- Kontrolle
- Aufmaß
- Nachtrag
- Materiallieferung
- Materialabholung
- Reklamation
- Besprechung
- Telefonat
- Sonstiges

Nur Datenmodell.

Keine Logik.

---

## Status

Vorbereiten:

- geplant
- vorbereitet
- disponiert
- unterwegs
- begonnen
- pausiert
- abgeschlossen
- storniert

---

## Readiness

Getrennt vom Status.

Mindestens:

- nicht begonnen
- teilweise vorbereitet
- bereit
- blockiert

---

## Project Core

Project Core erweitern.

Bestehende Projekte bleiben kompatibel.

---

## Baustellenbesuche

Bestehende Baustellenbesuche dürfen nicht kaputtgehen.

Sie sollen intern künftig als Activity vorbereitet werden.

Noch keine sichtbare Änderung.

---

## Nicht Bestandteil

Keine Timeline

Keine Disposition

Keine Materiallogik

Keine Brain-Funktionen

Keine KI

Keine UI

---

## Validierung

- npm run lint
- npm run build

Nicht committen.

Nicht pushen.

Geänderte Dateien auflisten.
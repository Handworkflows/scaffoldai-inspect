# Ticket T-006 – Project Core

## User Story

Als Entwickler möchte ich eine zentrale Projektdatenstruktur schaffen, damit alle zukünftigen Module dieselben Informationen nutzen und keine Daten doppelt gespeichert oder gepflegt werden müssen.

---

# Ziel

ScaffoldAI erhält ein zentrales Datenmodell.

Alle Module arbeiten zukünftig auf derselben Datenbasis.

Dieses Ticket fügt möglichst keine neuen Funktionen hinzu.

Der Schwerpunkt liegt auf einer sauberen Architektur.

---

# Anforderungen

## Projekt

Ein Projekt besitzt zukünftig:

- Stammdaten
- Adresse
- Kunde
- Status
- Projektart
- Leistungen

---

## Baustellenbesuche

Ein Projekt besitzt beliebig viele Besuche.

Jeder Besuch besitzt:

- Besuchsart
- Datum
- Status
- Fotos
- Notizen
- Checklisten
- Workflow
- Brain
- Dokumente
- Aufmaß
- Material

---

## Fotos

Fotos sind eigenständige Objekte.

Sie besitzen:

- ID
- Projekt
- Besuch
- Zeitstempel
- Beschreibung
- Dateigröße
- Dateiname
- Tags
- GPS (Vorbereitung)

---

## Notizen

Notizen sind eigenständige Objekte.

Sie besitzen:

- ID
- Projekt
- Besuch
- Text
- Kategorie
- Zeitstempel

---

## Brain

Brain-Einträge sind eigenständige Objekte.

Sie besitzen:

- ID
- Projekt
- Besuch
- Typ
- Priorität
- Status
- Text

---

## Dokumente

Vorbereitung für:

- Gefährdungsbeurteilung
- Montageanweisung
- Tagesbericht
- Aufmaß
- Nachtrag
- Materialliste

---

## Material

Vorbereitung für:

- Materialerkennung
- Lager
- Materialprognose

---

# Architektur

Die Datenstruktur soll zukünftige Erweiterungen erleichtern.

Neue Module sollen ohne große Umbauten ergänzt werden können.

Keine doppelte Datenspeicherung.

Klare Typen und Beziehungen.

---

# Keine neuen Funktionen

Keine KI.

Keine Cloud.

Keine Datenbank.

Keine API.

Nur saubere Architektur.

---

# Validierung

- Bestehende Projekte funktionieren weiterhin.
- Bestehende Besuche funktionieren weiterhin.
- Fotos funktionieren weiterhin.
- Notizen funktionieren weiterhin.
- npm run lint
- npm run build

---

# Commit

refactor(core): introduce unified project data model

---

# Push

origin/main
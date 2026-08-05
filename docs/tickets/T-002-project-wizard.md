# Ticket T-002 – Projekt-Assistent (MVP)

## Ziel

Ein Bauleiter soll innerhalb von 2 Minuten ein neues Projekt anlegen können.

---

## Anforderungen

### 1. Dashboard

- Der Button **„Neues Projekt“** öffnet den Projekt-Assistenten.

---

### 2. Schritt 1 – Grunddaten

Felder:

- Projektname (Pflicht)
- Kunde
- Adresse (Pflicht)
- PLZ
- Ort

Buttons:

- Weiter

---

### 3. Schritt 2 – Projektart

Einfachauswahl:

- Wohnhaus
- Mehrfamilienhaus
- Gewerbe
- Industrie
- Sonstiges

Buttons:

- Zurück
- Weiter

---

### 4. Schritt 3 – Leistung

Mehrfachauswahl:

- Fassadengerüst
- Dacharbeiten
- Schutzdach
- Sonderkonstruktion
- Innenraumgerüst

Buttons:

- Zurück
- Weiter

---

### 5. Schritt 4 – Zusammenfassung

Alle eingegebenen Daten anzeigen.

Buttons:

- Zurück
- Projekt erstellen

---

## Speicherung

Projekt zunächst im LocalStorage speichern.

Keine Datenbank verwenden.

---

## Dashboard

Nach dem Erstellen:

- Dashboard öffnen
- Neues Projekt anzeigen

---

## Design

- Bestehendes Dark Theme beibehalten.
- Modernes Erscheinungsbild.
- Fortschrittsanzeige (1/4, 2/4, 3/4, 4/4).

---

## Definition of Done

- Projekt kann erstellt werden.
- Projekt bleibt nach Browser-Reload erhalten.
- Projekt erscheint im Dashboard.
- npm run build erfolgreich.
- Commit erstellen:
  "Implement Ticket 002 project wizard"
- Änderungen nach GitHub pushen.
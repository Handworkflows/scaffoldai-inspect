# T-013 – Activity Creation

## Ziel

Die Activity Engine soll erstmals aktiv genutzt werden.

Der Nutzer kann auf einer Baustelle eine neue Aktivität anlegen.

Gleichzeitig werden zwei UX-Verbesserungen umgesetzt:

1. „+ Neues Projekt“ wandert aus dem oberen Inhaltsbereich dauerhaft in die linke Navigation.
2. „+ Neuer Baustellenbesuch“ wird nicht mehr unten bei der Historie platziert.

Stattdessen entsteht oben auf der Baustellenseite:

„+ Neue Aktivität“

---

## Neue Aktivität

Auf der Baustellenseite oben gut sichtbar:

+ Neue Aktivität

Beim Klick öffnet sich ein Dialog.

---

## Aktivitätstyp auswählen

Auswahl mindestens:

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

Die vorhandenen Activity Types aus dem gemeinsamen Datenmodell verwenden.

Keine zweite Typenliste erzeugen.

---

## Aktivität anlegen

Nach Auswahl mindestens erfassen:

- Titel
- geplantes Datum und Uhrzeit
- Beschreibung optional
- Priorität
- Vorbereitungsgrad

Standardwerte sinnvoll vorbelegen.

Beispiel:

Status:
geplant

Priorität:
normal

Vorbereitungsgrad:
nicht begonnen

---

## Speicherung

Die neue Aktivität wird in der bestehenden Activity Engine gespeichert.

Project Core verwenden.

Keine parallele Datenhaltung.

Nach Neuladen muss die Aktivität erhalten bleiben.

---

## Darstellung

Neue Aktivität erscheint direkt im Bereich:

Baustellenablauf

beziehungsweise im bestehenden Activity-Bereich.

Die neue Domain Language beachten.

Nutzerseitig möglichst „Baustellenablauf“ statt technischer Bezeichnung „Activities“ verwenden.

---

## Bestehende Baustellenbesuche

Bestehende Baustellenbesuche bleiben vollständig funktionsfähig.

Keine Daten entfernen.

Die bisherige Historie der Baustellenbesuche bleibt weiter unten auf der Seite sichtbar.

Der Button „+ Neuer Baustellenbesuch“ soll dort entfernt werden.

---

## UX – Neues Projekt

Der Button „+ Neues Projekt“ soll aus dem oberen Inhaltsbereich der Heute-Seite entfernt werden.

Stattdessen in der linken Navigation dauerhaft gut sichtbar platzieren.

Beispiel:

+ Neues Projekt

Heute
Projekte
Aufnahmen
Einstellungen

Keine doppelte Schaltfläche anzeigen.

---

## UX – Neue Aktivität

Auf der Baustellenseite soll „+ Neue Aktivität“ oben rechts beziehungsweise im oberen Kopfbereich sichtbar sein.

Der Nutzer soll nicht bis zur Baustellenbesuchs-Historie scrollen müssen, um eine neue Tätigkeit zu beginnen.

---

## Karten

Activity-Karten weiterhin generisch halten.

Keine Sonderlogik nur für Montage oder Kontrolle.

Mindestens anzeigen:

- Typ
- Titel
- geplantes Datum
- Status
- Priorität
- Vorbereitungsgrad

---

## Nicht Bestandteil

- keine Kolonnenzuweisung
- keine Fahrzeuge
- keine Materialplanung
- keine Timeline
- keine KI
- keine automatische Disposition
- keine Dokumentengenerierung

---

## Rückwärtskompatibilität

Bestehende Projekte, Baustellenbesuche, Fotos, Notizen und Checklisten dürfen nicht beschädigt werden.

Bestehende LocalStorage-Daten müssen weiter funktionieren.

---

## Validierung

- neue Aktivität anlegen
- Browser neu laden
- Aktivität bleibt erhalten
- Aktivität erscheint nur einmal
- bestehende Baustellenbesuche funktionieren
- „+ Neues Projekt“ links erreichbar
- alte doppelte Schaltfläche entfernt
- „+ Neue Aktivität“ oben erreichbar
- npm run lint erfolgreich
- npm run build erfolgreich
- git diff --check erfolgreich

## Wichtig

Nicht committen.
Nicht pushen.
Geänderte Dateien am Ende auflisten.
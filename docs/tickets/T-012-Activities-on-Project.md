# T-012 – Erste sichtbare Nutzung der Activity Engine

## Ziel

Die neue Activity Engine soll erstmals sichtbar in der Anwendung genutzt werden.

Baustellenbesuche bleiben bestehen, werden künftig jedoch zusätzlich als Activities dargestellt.

Es werden keine bestehenden Funktionen ersetzt.

Die neue Ansicht ergänzt die bestehende Projektseite.

---

# Anforderungen

## Projektseite

Neuen Bereich

Aktivitäten

unterhalb der Projektinformationen ergänzen.

---

## Anzeigen

Alle Activities des Projekts anzeigen.

Je Eintrag mindestens:

- Typ
- Titel
- Status
- Priorität
- Readiness
- geplantes Datum
- Verantwortlicher (falls vorhanden)

Chronologisch sortieren.

Neueste oben.

---

## Bestehende Baustellenbesuche

Vorhandene Baustellenbesuche sollen automatisch als Activity vorbereitet bzw. angezeigt werden.

Keine Daten verlieren.

Keine Migration vorhandener Besuche zerstören.

---

## Vorbereitung

Die Darstellung muss später weitere Activity-Typen unterstützen:

- Montage
- Umbau
- Abbau
- Materiallieferung
- Materialabholung
- Aufmaß
- Nachtrag
- Telefonat
- Besprechung
- Kontrolle

Keine Sonderbehandlung nur für Baustellenbesuche.

---

## UI

Keine Tabellen.

Kartenansicht.

Status farblich darstellen.

Readiness sichtbar.

Priorität sichtbar.

Responsive.

Dark Theme.

---

## Nicht Bestandteil

Keine Bearbeitung.

Keine Erstellung.

Keine Timeline.

Keine Brain-Funktionen.

Keine Disposition.

Nur Anzeige.

---

## Validierung

- npm run lint
- npm run build

Nicht committen.

Nicht pushen.

Geänderte Dateien auflisten.
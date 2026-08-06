# T-008 – Projektseite als Baustellenzentrale

## Ziel

Baue die bestehende Projektdetailseite zu einer übersichtlichen Baustellenzentrale für Bauleiter aus.

Die vorhandenen Funktionen bleiben erhalten:

- Projekt öffnen
- Baustellenbesuche anzeigen
- neuen Baustellenbesuch anlegen
- bestehende Besuche öffnen
- bestehende LocalStorage-Daten und Project Core verwenden

Es wird kein zweiter Projektworkflow angelegt.

---

## Problem

Die aktuelle Projektseite zeigt hauptsächlich:

- Projektname
- Adresse
- Projektart
- Leistungen
- Baustellenbesuche

Ein Bauleiter benötigt dort jedoch sofort den aktuellen technischen, organisatorischen und kaufmännischen Stand der Baustelle.

---

## Kopfbereich

Oben prominent anzeigen:

- vollständige Baustellenadresse
- Projektname
- Projektstatus
- Projektart
- Leistungen
- Kunde
- Ansprechpartner
- Telefonnummer
- E-Mail-Adresse

Telefonnummer und E-Mail sollen direkt anklickbar sein.

Falls Daten noch nicht vorhanden sind, einen neutralen Hinweis anzeigen und keine Dummy-Daten erzeugen.

---

## Aktueller Baustellenstand

Eigener Bereich mit:

- aktuellem Status
- letzter Aktivität beziehungsweise letztem Baustellenbesuch
- letzten verfügbaren Fotos
- offenen Arbeiten
- offenen Fragen
- nächstem geplanten Einsatz

Solange dafür keine Daten existieren, verständliche Leerzustände anzeigen.

---

## Nächster Einsatz

Anzeigen beziehungsweise vorbereiten:

- Einsatzart
- geplantes Datum
- geplante Arbeiten
- verantwortliche Kolonne als spätere Vorbereitung
- vorhandene Informationen
- fehlende Informationen

Prüfpunkte:

- Fotos vorhanden
- Maße vorhanden
- Ansprechpartner vorhanden
- Unterlagen vorhanden
- Montageanweisung vorhanden
- Gefährdungsbeurteilung vorhanden

Noch keine Disposition oder automatische Dokumentenerstellung bauen.

---

## Technische Projektdaten

Eigener Bereich für:

- Gerüstsystem
- Systembreite, zum Beispiel 0,73 m oder 1,09 m
- Gerüstlängen
- Gerüsthöhen
- Gerüstflächen
- bestellte Leistungen
- Aufmaßstatus
- geplantes Aufmaß
- geplanter Aufbau
- geplanter Umbau
- geplanter Abbau

Diese Felder dürfen zunächst leer und bearbeitbar sein.

Die Daten müssen projektbezogen im bestehenden Project Core gespeichert werden.

---

## Kaufmännischer Überblick

Weiter unten einen vorbereiteten Bereich anzeigen:

- Angebotsstatus
- Abschlagsrechnungsstatus
- Datum der letzten Abschlagsrechnung
- Schlussrechnungsstatus
- offene Nachträge
- abrechenbare Mietmengen
- Beginn der Mietzeit
- Abmeldedatum
- geplanter Abbau

Noch keine Rechnungsberechnung und keine externe Buchhaltungsanbindung bauen.

Es geht zunächst um strukturierte Felder und Übersicht.

---

## Baustellenbesuche

Der bestehende Bereich „Baustellenbesuche“ bleibt vollständig funktionsfähig.

Er soll weiterhin ermöglichen:

- neuen Besuch anzulegen
- Besuchsart auszuwählen
- bestehende Besuche zu öffnen
- Status eines Besuchs zu sehen

---

## Layout

Die Seite soll als übersichtliches Cockpit funktionieren.

Desktop:

- klare Karten oder Bereiche
- wichtigste Daten weit oben
- kaufmännische Daten weiter unten
- Baustellenbesuche weiterhin gut sichtbar

Mobil:

- einspaltige Darstellung
- große Touchflächen
- Adresse und nächster Einsatz sofort sichtbar
- Telefonnummer und E-Mail direkt nutzbar

Bestehendes Dark Theme beibehalten.

---

## Datenmodell

Bestehenden Project Core erweitern, ohne Daten doppelt zu speichern.

Neue Felder müssen:

- optional sein
- rückwärtskompatibel sein
- bei bestehenden Projekten keine Fehler verursachen
- projektbezogen gespeichert werden

Falls eine Migration nötig ist, bestehende Daten erhalten.

---

## Nicht Bestandteil

- keine KI
- keine automatische Kalkulation
- keine Materialplanung
- keine Kolonnenplanung
- keine Rechnungserstellung
- keine Dokumentengenerierung
- kein neuer Kundenanfrage-Workflow
- keine Dummy-Daten

---

## Akzeptanzkriterien

- bestehende Projekte lassen sich weiterhin öffnen
- bestehende Baustellenbesuche funktionieren weiterhin
- Adresse steht prominent im Kopfbereich
- Kunde und Kontaktdaten sind sichtbar
- technischer Projektbereich ist vorhanden
- nächster Einsatz und fehlende Informationen sind sichtbar
- kaufmännischer Überblick ist vorhanden
- neue Daten bleiben nach Neuladen erhalten
- Desktop und Mobile funktionieren
- npm run lint erfolgreich
- npm run build erfolgreich

---

## Wichtig

Nach der Umsetzung:

- nicht committen
- nicht pushen
- Änderungen für den manuellen Review liegen lassen
- kurz auflisten, welche Dateien geändert wurden
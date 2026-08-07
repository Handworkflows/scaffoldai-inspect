# EPIC-002 – Projektlebenszyklus, Buchhaltung & Archivierung

## Ziel

ScaffoldAI soll den vollständigen Lebenszyklus eines Gerüstbau-Vorgangs klar und sichtbar abbilden.

Der Nutzer muss jederzeit erkennen können:

- Was ist noch Angebot?
- Was befindet sich in Einsatzvorbereitung?
- Welche Baustellen laufen?
- Welche Baustellen sind in Abrechnung?
- Welche Projekte sind abgeschlossen?
- Welche Projekte dürfen archiviert werden?

Zusätzlich erhält die Bauleiter-Navigation einen eigenen zentralen Bereich für Buchhaltung.

Diese EPIC definiert die fachliche Zielstruktur.

Es wird noch keine Software implementiert.

---

# Zielnavigation

Die zukünftige Hauptnavigation lautet:

Heute

---

Angebote

Einsatzvorbereitung

Projekte

Buchhaltung

---

Team

Unternehmen

"Projekte" bleibt als zentraler Arbeitsbereich des Bauleiters erhalten.

"Buchhaltung" ist ein eigener Hauptbereich und nicht nur ein Unterpunkt von Unternehmen.

---

# Lebenszyklus

Ein Vorgang besitzt eine stabile Identität.

Der fachliche Lebenszyklus lautet:

Angebot

↓

Einsatzvorbereitung

↓

Laufendes Projekt

↓

Abrechnung

↓

Abgeschlossen

↓

Archiviert

Keine Kopien des Vorgangs erzeugen.

Die gesamte Historie bleibt erhalten.

---

# 1. Angebot

Noch kein bestätigtes Projekt.

Enthält:

- Anfrage
- Angebotsaufnahme
- Angebot
- Angebotsstatus
- Kommunikation
- Bilder
- Pläne
- Maße
- Forecast

Nach Annahme:

→ Einsatzvorbereitung

---

# 2. Einsatzvorbereitung

Bestätigter Auftrag, aber Baustelle noch nicht zur Montage freigegeben.

Mindestens prüfen:

## Technik

- Aufmaß
- Gerüstplanung
- Statik falls erforderlich
- Sonderkonstruktion
- Materialplanung

## Behörden / Genehmigungen

- Sondernutzung falls erforderlich
- Verkehrsrechtliche Anordnung falls erforderlich
- sonstige Genehmigungen

## Logistik

- Parkmöglichkeit geklärt
- Zufahrt geklärt
- Kran geplant falls erforderlich
- Materiallieferung geplant
- LKW geplant

## Personal

- Kolonne
- Vorarbeiter
- Termin

## Dokumente

- Montageanweisung
- Gefährdungsbeurteilung
- Ansprechpartner
- notwendige Unterlagen

Projekt erhält einen sichtbaren Vorbereitungsgrad.

Erst nach Freigabe:

→ Laufendes Projekt

---

# 3. Laufendes Projekt

Hier befinden sich aktive Baustellen.

Phasen können mindestens sein:

- Aufbau
- Nutzung
- Umbau
- Abbau
- Reklamation

Die Projektakte enthält weiterhin:

- Angebot
- Bilder
- Aufmaß
- Dokumente
- Aktivitäten
- Nachträge
- Rechnungen
- Verlauf

---

# Projekte – Hauptansicht

Der Bereich "Projekte" soll einen schnellen Wechsel ermöglichen zwischen:

## Laufend

Aktive Baustellen.

## Kommend

Bestätigte Projekte, die noch nicht aktiv auf der Baustelle laufen.

Hier können insbesondere Projekte in Einsatzvorbereitung sichtbar sein.

## Abgeschlossen

Operativ beendete Projekte, die noch nachvollziehbar bleiben.

Optional zusätzlich:

## Archiv

Archivierte Vorgänge.

Die Umschaltung muss schnell erreichbar sein.

Keine komplizierten Filtermenüs.

---

# Sichtbarer Projektstatus

Auf jeder Projektseite soll der aktuelle Lebenszyklusstatus deutlich sichtbar sein.

Beispiele:

ANGEBOT

EINSATZVORBEREITUNG

LÄUFT

ABRECHNUNG

ABGESCHLOSSEN

ARCHIVIERT

Der Status soll prominent und farblich unterscheidbar dargestellt werden.

Die konkrete Farbwahl bleibt UX-Entscheidung.

Wichtig ist eindeutige Wiedererkennbarkeit.

---

# 4. Abrechnung

Nach operativem Abschluss wechselt ein Projekt nicht sofort ins Archiv.

Es geht zunächst in die Phase:

ABRECHNUNG

Der Bauleiter arbeitet dort weiterhin am Vorgang.

Mindestens relevant:

- letztes Aufmaß
- Nachträge
- Abschlagsrechnungen
- Schlussrechnung
- Mietmengen
- Abmeldedatum
- Zahlungseingänge
- Reklamationen
- offene kaufmännische Punkte

---

# Hauptbereich Buchhaltung

"Buchhaltung" erhält einen direkten Hauptmenüpunkt.

Dieser Bereich ist keine vollständige Finanzbuchhaltung.

Er ist der operative kaufmännische Arbeitsplatz für Bauleitung und Geschäftsführung.

Mindestens vorbereiten:

## Abschlagsrechnungen

Status:

- vorzubereiten
- erstellt
- geprüft
- versendet
- bezahlt
- überfällig

## Schlussrechnungen

Status:

- vorzubereiten
- erstellt
- geprüft
- versendet
- bezahlt
- überfällig

## Nachträge

Status:

- erkannt
- vorzubereiten
- versendet
- freigegeben
- abgelehnt
- fakturiert

## Forderungen

- offen
- fällig
- überfällig
- bezahlt

---

# Bauleiter-Sicht

Ein Bauleiter sieht insbesondere:

- eigene offene Abschlagsrechnungen
- eigene Schlussrechnungen
- offene Nachträge
- Projekte in Abrechnung
- letzte Abschlagsrechnung
- aktuelle abrechenbare Mietmengen
- überfällige Vorgänge

---

# Chef-Sicht

Geschäftsführung kann unter anderem sehen:

- alle offenen Rechnungen
- offene Forderungen
- Projekte ohne aktuelle Abschlagsrechnung
- Nachtragsvolumen
- Projekte in Abrechnung
- Projektabschlussstände

---

# Abschlagsrechnung

ScaffoldAI soll später erkennen können:

- Datum letzte AZ
- wie lange letzte AZ zurückliegt
- aktuelle abrechenbare Leistungen
- aktuelle Mietmengen
- neue Nachträge seit letzter AZ

Beispiel:

Letzte AZ:

vor 38 Tagen

Aktuell zusätzlich abrechenbar:

1.240 m² Miete

Hinweis:

Neue AZ vorbereiten

Noch keine vollständige automatische Rechnungsberechnung in dieser EPIC implementieren.

---

# Projektabschluss

Operativer Abschluss und kaufmännischer Abschluss sind getrennt.

Ein Gerüst kann vollständig abgebaut sein, während das Projekt kaufmännisch noch offen ist.

Beispiel:

Abbau abgeschlossen

↓

Schlussaufmaß

↓

Nachträge abschließen

↓

Schlussrechnung

↓

Zahlungseingang

↓

Projekt abgeschlossen

---

# Archivierungsregeln

Ein Projekt soll nicht versehentlich archiviert werden können.

Vor Archivierung mindestens prüfen:

- operative Arbeiten abgeschlossen
- Abbau abgeschlossen, falls erforderlich
- Aufmaß abgeschlossen
- offene Nachträge geklärt
- Schlussrechnung erstellt
- Schlussrechnung versendet
- Schlussrechnung bezahlt
- relevante Reklamationen geschlossen

Erst danach:

"Projekt kann archiviert werden"

---

# Archivierungsstatus

Beispiel:

Projektabschluss

✓ Arbeiten abgeschlossen
✓ Abbau abgeschlossen
✓ Aufmaß abgeschlossen
✓ Nachträge erledigt
✓ Schlussrechnung erstellt
✓ Schlussrechnung bezahlt

Status:

BEREIT ZUM ARCHIVIEREN

---

# Blockierte Archivierung

Falls noch Punkte offen sind:

ARCHIVIERUNG NOCH NICHT MÖGLICH

Offen:

- Schlussrechnung nicht bezahlt
- Nachtrag 03 ungeklärt

Der berechtigte Nutzer soll klar erkennen, warum der Vorgang noch nicht archiviert werden sollte.

Keine stillschweigende Datenlöschung.

---

# Archiv

Archivierte Projekte verschwinden aus der normalen Ansicht "Laufend".

Sie bleiben jedoch jederzeit auffindbar.

Mindestens recherchierbar über:

- Kunde
- Adresse
- Projektname
- Jahr
- Angebotsnummer
- Rechnungsnummer
- Bauleiter

Archivierung ist keine Löschung.

---

# Heute

"Heute" soll kaufmännische Aufgaben berücksichtigen.

Beispiele:

- AZ vorbereiten
- Schlussrechnung offen
- Kunde wegen Rechnung kontaktieren
- Nachtrag freigeben
- Projekt archivierungsbereit

Prioritäten müssen rollenabhängig sein.

---

# Activity Engine

Kaufmännische Arbeit bleibt ebenfalls Activity-basiert.

Beispiele:

- Aufmaß erstellen
- Nachtrag prüfen
- Abschlagsrechnung vorbereiten
- Rechnung prüfen
- Kunde kontaktieren
- Zahlung prüfen
- Projekt archivieren

Die Activity Engine bleibt die einzige Prozesslogik.

---

# Rechte

W-006 berücksichtigen.

Beispiele:

Bauleiter:

- Rechnungen vorbereiten / bearbeiten
- Nachträge bearbeiten
- Abschluss vorschlagen

Geschäftsführung / berechtigte kaufmännische Rolle:

- kaufmännische Freigaben
- organisationsweite Sicht

Vorarbeiter / Mitarbeiter:

- keine kaufmännischen Unternehmensdaten

---

# Ergebnis dieser EPIC

Dokumentiere verbindlich:

- Projektlebenszyklus
- Projektstatus
- Projektlisten / Sichten
- Abrechnungsphase
- Buchhaltungs-Hauptbereich
- Archivierungsregeln
- Rollenbezug
- Activity-Bezug

Bestehende Architektur-, Workflow-, Product-Map- und Roadmap-Dokumente auf Widersprüche prüfen und gegebenenfalls aktualisieren.

---

# Wichtig

Keine Software implementieren.

Keine UI ändern.

Keine React-Komponenten ändern.

Nur Dokumentation.

Nicht committen.

Nicht pushen.

Geänderte Dokumente auflisten.
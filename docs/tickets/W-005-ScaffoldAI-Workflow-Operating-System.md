# W-005 – ScaffoldAI Workflow Operating System

## Ziel

ScaffoldAI wird nicht länger als klassische Projektverwaltung verstanden.

ScaffoldAI bildet den kompletten operativen Ablauf eines Gerüstbauunternehmens ab.

Der Benutzer arbeitet nicht mit Projekten, sondern mit Vorgängen, die automatisch durch verschiedene Unternehmensbereiche wandern.

Dieser Workshop definiert die zukünftige Produktarchitektur.

Es wird keine Software implementiert.

Nur Produkt-, UX- und Architekturentscheidungen dokumentieren.

---

# Produktvision

ScaffoldAI ist das Betriebssystem eines Gerüstbauunternehmens.

Es verbindet:

- Vertrieb
- Bauleitung
- Vorarbeiter
- Disposition
- Büro
- Geschäftsführung

Alle arbeiten auf derselben Datenbasis.

---

# Neue Hauptnavigation

Die zukünftige Hauptnavigation besteht aus:

🏠 Heute

📄 Angebote

📋 Einsatzvorbereitung

🏗 Betrieb

👷 Mannschaft

📊 Unternehmen

---

# Heute

"Heute" bleibt der persönliche Arbeitsplatz.

Je Rolle unterschiedlich.

Beispiele:

Bauleiter

- Rückrufe
- Termine
- offene Baustellen
- Material fehlt
- neue Bilder
- Nachträge

Vorarbeiter

- heutige Baustellen
- Checklisten
- Material
- Fotos
- Tagesabschluss

Chef

- Engpässe
- Auslastung
- offene Angebote
- fehlende Kolonnen
- offene Rechnungen

Büro

- neue Anfragen
- Rückrufbitten
- Angebotsstatus
- Termine

---

# Angebote

Hier beginnt jeder Vorgang.

Lebenszyklus:

Neue Anfrage

↓

Angebotsaufnahme

↓

Angebot erstellen

↓

Angebot versenden

↓

Warten auf Kunde

↓

Angebot angenommen

↓

Als Projekt übernehmen

↓

Einsatzvorbereitung

Anfragen sind lediglich der erste Status eines Angebots.

Es existiert kein separater Menüpunkt "Anfragen".

---

# Einsatzvorbereitung

Eine Baustelle wird hier vollständig startbereit gemacht.

Checklisten mindestens:

## Technische Vorbereitung

- Aufmaß abgeschlossen
- Gerüstplanung abgeschlossen
- Statik vorhanden (falls erforderlich)
- Sonderkonstruktion geprüft
- Materialliste vollständig

## Behördliche Freigaben

- Sondernutzung liegt vor
- Verkehrsrechtliche Anordnung (falls erforderlich)
- Genehmigungen vollständig

## Logistik

- Material reserviert
- Materiallieferung geplant
- Krantermin geplant (falls erforderlich)
- LKW eingeplant
- Parkmöglichkeit geklärt
- Zufahrt geklärt

## Personal

- Kolonne zugewiesen
- Vorarbeiter bestätigt
- Termin bestätigt

## Dokumente

- Montageanweisung erstellt
- Gefährdungsbeurteilung erstellt
- Ansprechpartner hinterlegt
- Notfallinformationen vorhanden

## Baustellenorganisation

- Arbeitszeiten abgestimmt
- Zugang geklärt
- Schlüssel vorhanden
- Lagerfläche geklärt

ScaffoldAI zeigt einen Vorbereitungsgrad.

Beispiel:

92 %

Noch offen:

- Sondernutzung
- Parkmöglichkeit

Erst danach erfolgt die Freigabe zur Montage.

---

# Betrieb

Hier befinden sich ausschließlich laufende Baustellen.

Phasen:

Vorbereitung abgeschlossen

↓

Montage

↓

Nutzung

↓

Umbau

↓

Abbau

↓

Abrechnung

↓

Archiv

Alle Baustellen besitzen weiterhin ihre vollständige Projektakte.

---

# Mannschaft

Eigener Unternehmensbereich.

Enthält:

- Mitarbeiter
- Vorarbeiter
- Kolonnen
- Fahrzeuge
- Geräte
- persönliche Kalender
- Urlaub
- Krankheit
- Schulungen
- Qualifikationen

Chef sieht alle Kalender.

Mitarbeiter sehen ihre eigenen.

Kolonnenplanung berücksichtigt Urlaub automatisch.

---

# Unternehmen

Enthält:

- Material
- Dokumente
- Brain
- Auswertungen
- Einstellungen

---

# Kommunikation

Telefonate, Rückrufbitten und Wiedervorlagen gehören nicht in Chats.

Sie werden Activities.

Beispiel:

Büro nimmt Anruf entgegen.

↓

Telefonnotiz

↓

automatisch zuständigem Bauleiter zugewiesen

↓

erscheint auf "Heute"

↓

nach Rückruf abgeschlossen

Alle Telefonate bleiben im Projektverlauf.

---

# Grundprinzip

Activities sind die Arbeit.

Projektbereiche zeigen dauerhaft den aktuellen Stand.

Die Activity Engine bleibt die einzige Prozesslogik.

Keine parallelen Workflows.

---

# Ziel

Nach Abschluss dieses Workshops sollen alle zukünftigen Tickets auf dieser Architektur aufbauen.

Keine Software implementieren.

Keine React-Komponenten verändern.

Nur Dokumentation aktualisieren.

Nicht committen.

Nicht pushen.
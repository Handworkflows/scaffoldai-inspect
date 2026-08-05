# Ticket T-003 – Baustellenbesuche

## Ziel

Ein Projekt kann mehrere Baustellenbesuche enthalten. Jeder Besuch dokumentiert einen konkreten Termin auf der Baustelle.

## Anforderungen

### Projekt öffnen

Beim Klick auf eine Projektkarte öffnet sich die Projektseite.

Die Projektseite zeigt:

- Projektname
- Adresse
- Projektart
- Leistungen

### Baustellenbesuche

Die Projektseite enthält den Bereich „Baustellenbesuche“.

Wenn noch keine Besuche vorhanden sind:

„Noch keine Baustellenbesuche.“

Button:

„+ Neuer Baustellenbesuch“

### Besuchsart auswählen

Beim Klick öffnet sich eine Auswahl:

- Angebotsaufnahme
- Montage
- Kontrolle
- Abschlagsaufmaß
- Schlussaufmaß
- Nachtrag
- Umbau
- Abbau
- Sonstiges

### Besuch erstellen

Der Besuch erhält automatisch:

- Datum
- Besuchsart
- Status „Neu“
- eindeutige ID

### Besuch öffnen

Beim Klick auf einen Besuch öffnet sich eine Besuchsseite mit folgenden Bereichen:

- Fotos
- Notizen
- Aufmaß
- Brain
- Timeline

Die Bereiche benötigen in diesem Ticket noch keine vollständigen Funktionen.

## Speicherung

Besuche vorerst im LocalStorage speichern.

Die Besuche müssen nach einem Browser-Reload erhalten bleiben und dem richtigen Projekt zugeordnet sein.

## Design

- Bestehendes Dark Theme beibehalten
- Responsiv für Desktop und Tablet
- Keine zusätzlichen Bibliotheken installieren

## Definition of Done

- Projektkarte kann geöffnet werden
- Projektseite wird angezeigt
- Baustellenbesuch kann erstellt werden
- Besuch erscheint in der Liste
- Besuch bleibt nach Reload erhalten
- Besuchsseite kann geöffnet werden
- npm run lint erfolgreich
- npm run build erfolgreich
- Commit: Implement Ticket 003 site visits
- Push nach origin/main
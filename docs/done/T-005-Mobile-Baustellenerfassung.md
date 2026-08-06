# Ticket T-005 – Mobile Baustellenerfassung

## User Story

Als Bauleiter möchte ich während eines Baustellenbesuchs Fotos und Notizen direkt auf meinem Smartphone erfassen können, damit ich alle Informationen sofort dokumentiere und später für Aufmaß, Nachträge und Abrechnung nutzen kann.

---

## Ziel

Die Baustellenbesuche sollen erstmals echte Inhalte erfassen können.

Die Oberfläche wird Mobile-First entwickelt und bildet die Grundlage für die spätere Smartphone-App.

---

## Anforderungen

### Fotos

- Mehrere Fotos pro Besuch speichern
- Vorschau der aufgenommenen Bilder
- Fotos löschen
- Zeitstempel speichern
- Platzhalter für spätere Kamera-Integration vorbereiten

---

### Notizen

- Mehrzeilige Textnotizen
- Automatische Speicherung
- Bearbeiten jederzeit möglich

---

### Sprache (Vorbereitung)

Button:

🎤 Sprache aufnehmen

Noch keine Sprachverarbeitung.

Nur Architektur und Platzhalter vorbereiten.

---

### Brain

Der Brain soll kontextbezogene Hinweise anzeigen.

Beispiel:

Projekt geöffnet

↓

Angebotsaufnahme

↓

Nächster Schritt:

„Baustelle fotografieren.“

Später können hier KI-Empfehlungen erscheinen.

---

### Mobile First

Alle Elemente müssen auf Smartphones optimal bedienbar sein.

- Große Buttons
- Große Touchflächen
- Responsive Layout

---

### Local Storage

Projektbezogen speichern:

- Fotos
- Notizen
- Workflowstatus

---

## Nicht Bestandteil

- Keine KI
- Keine Bilderkennung
- Keine Cloud
- Keine Datenbank
- Keine Benutzerverwaltung

---

## Tests

- Projekt öffnen
- Besuch öffnen
- Fotos hinzufügen
- Notizen speichern
- Browser neu laden
- Alle Daten bleiben erhalten
- npm run lint
- npm run build

---

## Commit

feat(mobile): add mobile visit capture

---

## Push

origin/main
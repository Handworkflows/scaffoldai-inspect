# Ticket T-004 – Intelligente Baustellen-Workflows

# User Story

Als Bauleiter möchte ich je nach Art meines Baustellenbesuchs automatisch den passenden Arbeitsablauf erhalten, damit ich keine wichtigen Punkte vergesse und alle relevanten Informationen dokumentieren kann.

---

# Ziel

Der Benutzer soll nach Auswahl einer Besuchsart nicht mehr auf einer leeren Seite landen.

Stattdessen startet ein intelligenter Workflow.

Jeder Besuchstyp besitzt seinen eigenen Ablauf.

---

# Besuchsarten

- Angebotsaufnahme
- Montage
- Kontrolle
- Abschlagsaufmaß
- Schlussaufmaß
- Nachtrag
- Umbau
- Abbau
- Sonstiges

---

# Kontrolle

Workflow:

## Schritt 1

Fotos aufnehmen

## Schritt 2

Checkliste

□ Gerüst vollständig?

□ Geländer vorhanden?

□ Bordbretter vorhanden?

□ Beläge vollständig?

□ Verankerungen sichtbar?

□ Schäden entdeckt?

□ Material ausgebaut?

□ Neue Anbauteile?

□ Nachtrag möglich?

## Schritt 3

Notizen

## Schritt 4

Brain-Hinweise

## Schritt 5

Besuch abschließen

---

# Abschlagsaufmaß

Workflow

Fotos

↓

Aufmaß

↓

Vergleich zum letzten Besuch

↓

Neue Leistungen markieren

↓

Brain bewertet mögliche Abschlagszahlung

↓

Besuch speichern

---

# Umbau

Workflow

Fotos Bestand

↓

Beschreibung Umbauwunsch

↓

Brain analysiert

↓

Materialbedarf

↓

Nachtrag möglich?

↓

Fotos nach Umbau

---

# Abbau

Workflow

Fotos

↓

Material dokumentieren

↓

Beschädigungen

↓

Abtransport

↓

Projektstatus aktualisieren

---

# Nachtrag

Workflow

Fotos

↓

Beschreibung

↓

Aufmaß

↓

Brain erkennt mögliche Abrechnung

↓

Nachtrag speichern

---

# UI

Jeder Workflow besitzt:

Fortschrittsanzeige

Schrittanzeige

Weiter

Zurück

Abbrechen

Dark Theme

Responsive

---

# Architektur

Jeder Besuchstyp besitzt eine eigene Workflowdefinition.

Nicht alles hart programmieren.

Vorbereitung für spätere JSON-Workflows.

---

# Validierung

npm run lint

npm run build

---

# Commit

feat(workflows): add intelligent visit workflows

---

# Push

origin/main
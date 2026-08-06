# PS-001 – Activity Engine

Version: 1.0

Sprint: 1

Status: Ready for Development

---

# Ziel

Die Activity Engine wird das Herzstück von ScaffoldAI.

Sie verwaltet jede Aktivität eines Projekts.

Eine Aktivität besitzt:

- Typ
- Status
- Verantwortlichen
- Zeitpunkt
- Ergebnisse
- Fotos
- Dokumente
- Brain-Hinweise

Sie erzeugt automatisch Timeline-Einträge und bildet die Grundlage aller weiteren Module.

---

# Warum?

Der Bauleiter arbeitet nicht in Projekten.

Er arbeitet in Aktivitäten.

Beispiele:

- Angebotsaufnahme
- Baustellenbesuch
- Montage
- Kontrolle
- Aufmaß
- Umbau
- Behinderung
- Abbau
- Telefonat
- Baubesprechung

Alles ist eine Aktivität.

---

# Aktivität

Mindestens:

- ID
- Projekt
- Typ
- Status

Geplant

Aktiv

Pausiert

Abgeschlossen

Abgebrochen

- Verantwortlicher
- Datum
- Priorität
- Beschreibung

---

# Jede Aktivität besitzt

Fotos

Notizen

Checklisten

Dokumente

Brain

Timeline

---

# Brain

Brain bewertet jede Aktivität.

Beispiele:

Fotos fehlen.

Aufmaß fehlt.

Gefährdungsbeurteilung fehlt.

Nachtrag möglich.

Material unvollständig.

---

# Readiness

Jede Aktivität besitzt einen Vorbereitungsgrad.

Zum Beispiel

95 %

Material

✅

Kolonne

✅

Dokumente

⚠

Fotos

✅

Genehmigung

❌

---

# Timeline

Jede Änderung erzeugt automatisch:

Wer?

Wann?

Was?

Warum?

---

# Mobile

Eine Aktivität muss vollständig mobil bearbeitet werden können.

---

# Architektur

Die Activity Engine wird Grundlage für:

- Material Intelligence
- Dokumentengenerator
- Baustellenakte
- Timeline
- Live-Baustelle
- Brain
- Disposition

Kein anderes Modul speichert Aktivitäten selbst.

Alle referenzieren ausschließlich die Activity Engine.

---

# Akzeptanzkriterien

Neue Aktivität erstellen.

Bearbeiten.

Abschließen.

Timeline automatisch.

Fotos zuordnen.

Dokumente zuordnen.

Brain-Hinweise anzeigen.

Readiness berechnen.

Project Core verwenden.

---

# Nicht Bestandteil

Keine KI.

Keine Materialplanung.

Keine Disposition.

Keine automatische Dokumentenerstellung.

Nur das Fundament.
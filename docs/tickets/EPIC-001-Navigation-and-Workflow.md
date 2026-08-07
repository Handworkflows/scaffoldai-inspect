# EPIC-001 – Navigation & Workflow

## Ziel

Die bestehende Navigation wird vollständig an W-005 angepasst.

ScaffoldAI arbeitet künftig entlang des Unternehmens-Workflows und nicht mehr entlang einer klassischen Projektverwaltung.

Diese EPIC beschreibt die vollständige Umsetzung der neuen Informationsarchitektur.

---

# Zielnavigation

Die Hauptnavigation besteht künftig ausschließlich aus:

🏠 Heute

📄 Angebote

📋 Einsatzvorbereitung

🏗 Betrieb

👷 Mannschaft

🏢 Unternehmen

Keine klassische Projektnavigation mehr.

---

# 1. Heute

Persönlicher Arbeitsplatz.

Rollenabhängig.

Zeigt ausschließlich heute relevante Informationen.

Keine Projektlisten.

---

# 2. Angebote

Enthält sämtliche Vertriebsvorgänge.

Lebenszyklus:

Neue Anfrage

↓

Angebotsaufnahme

↓

Angebot erstellen

↓

Angebot versenden

↓

Warten

↓

Angebot angenommen

↓

Als Projekt übernehmen

↓

Einsatzvorbereitung

Keine bestätigten Baustellen anzeigen.

---

# 3. Einsatzvorbereitung

Neuer zentraler Bereich.

Zeigt ausschließlich Projekte, die bestätigt wurden, aber noch nicht montiert werden.

Jede Karte besitzt einen Vorbereitungsgrad.

Beispiel:

92 %

Offen:

- Sondernutzung
- Parkmöglichkeit

Erst nach Freigabe:

→ Betrieb

---

# 4. Betrieb

Zeigt ausschließlich laufende Baustellen.

Gruppierung mindestens:

- Montage
- Nutzung
- Umbau
- Abbau
- Reklamation
- Abrechnung

Projektakte bleibt erhalten.

---

# 5. Mannschaft

Neuer Bereich.

Enthält:

- Mitarbeiter
- Vorarbeiter
- Kolonnen
- Kalender
- Urlaub
- Fahrzeuge
- Geräte
- Qualifikationen

---

# 6. Unternehmen

Enthält:

- Material
- Dokumente
- Brain
- Rechnungen
- Auswertungen
- Einstellungen

---

# Workflow

Ein Vorgang besitzt genau eine Identität.

Der Workflow lautet:

Angebot

↓

Einsatzvorbereitung

↓

Betrieb

↓

Archiv

Keine Kopien.

Keine parallelen Prozesse.

---

# Umsetzung

Diese EPIC erzeugt keine neue Fachlogik.

Sie organisiert ausschließlich Navigation und Informationsarchitektur.

Die Umsetzung erfolgt anschließend über einzelne Tickets.

---

# Nachfolgende Tickets

T-014.1

Neue Navigation

T-014.2

Heute

T-014.3

Angebote

T-014.4

Einsatzvorbereitung

T-014.5

Betrieb

T-014.6

Mannschaft

T-014.7

Unternehmen

---

# Wichtig

Keine Software implementieren.

Keine React-Komponenten ändern.

Nur Roadmap, Product Map und Dokumentation aktualisieren.

Nicht committen.

Nicht pushen.
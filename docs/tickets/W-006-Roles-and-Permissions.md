# W-006 – Rollen & Berechtigungen

## Ziel

ScaffoldAI erhält ein verbindliches Rollen- und Berechtigungsmodell.

Alle Rollen arbeiten am selben Vorgang.

Es gibt keine doppelte Datenhaltung.

Unterschiedlich sind nur:

- Sichtbarkeit
- Bearbeitungsrechte
- Freigaben
- Verantwortlichkeiten

Dieser Workshop verändert keine Software.

---

# Grundsatz

Ein Vorgang existiert genau einmal.

Alle Rollen arbeiten auf demselben Vorgang.

Jede Rolle sieht nur die Informationen und Funktionen, die sie für ihre Arbeit benötigt.

---

# Kernrollen

Mindestens definieren:

- Geschäftsführer / Chef
- Bauleiter
- Büro / Innendienst
- Disposition
- Vorarbeiter
- Mitarbeiter / Monteur

Optional vorbereiten:

- Lager
- Kalkulation
- Buchhaltung
- Administrator

---

# 1. Geschäftsführer / Chef

Soll grundsätzlich Zugriff auf alle Unternehmensbereiche besitzen.

Benötigt insbesondere:

- Heute / Unternehmenslage
- Angebote
- Einsatzvorbereitung
- Betrieb
- Mannschaft
- Material
- Kalender
- Auswertungen
- Rechnungsstatus
- Kapazitäten
- Risiken

Kann grundsätzlich Unternehmensentscheidungen und Freigaben durchführen.

---

# 2. Bauleiter

Benötigt insbesondere:

- eigene Vorgänge
- eigene Angebote
- eigene Baustellen
- Einsatzvorbereitung
- Kolonnen
- Materialstatus
- Kalender
- Rückrufbitten
- Activities
- Dokumente
- Aufmaß
- Nachträge
- Abschlagsrechnungsstatus
- Schlussrechnung
- Brain-Hinweise

Soll fachliche Freigaben ausführen können.

Beispiele:

- Angebot prüfen
- Projekt übernehmen
- Montage freigeben
- Nachtrag freigeben
- Dokumente fachlich prüfen

---

# 3. Büro / Innendienst

Aufgabe:

Bauleiter und Disposition organisatorisch entlasten.

Benötigt insbesondere:

- Angebote
- Kunden
- Ansprechpartner
- Telefonnotizen
- Rückrufbitten
- Termine
- Kalender
- Wiedervorlagen
- Dokumente
- Projektstatus
- Kontaktdaten

Telefonat-Beispiel:

Kunde ruft an

↓

Büro erfasst:

- Kunde
- Baustelle / Vorgang
- Uhrzeit
- Anliegen
- Dringlichkeit
- gewünschter Rückruf

↓

zuständigem Bauleiter zuweisen

↓

erscheint auf dessen "Heute"

↓

nach Rückruf erledigen

Dadurch entfällt ein zusätzliches Abstimmungstelefonat zwischen Büro und Bauleiter.

Büro darf nicht automatisch fachliche oder sicherheitsrelevante Entscheidungen treffen.

---

# 4. Disposition

Benötigt insbesondere:

- Kalender
- Kolonnen
- Mitarbeiter
- Fahrzeuge
- Verfügbarkeiten
- Urlaub
- Krankheit
- Aktivitäten
- bestätigte Projekte
- Forecast aus offenen Angeboten
- Materialverfügbarkeit
- Einsatzdauer
- Restarbeiten

Disposition plant Ressourcen.

Keine fachlichen Gerüstfreigaben.

---

# 5. Vorarbeiter

Mobile-First-Rolle.

Benötigt insbesondere:

- Heute
- eigene Kolonne
- eigene Einsätze
- Baustelleninformationen
- Ansprechpartner
- Fotos
- Montageanweisung
- Gefährdungsbeurteilung
- Material
- Checklisten
- Änderungen
- Tagesabschluss

Vorarbeiter kann tagsüber Material anfordern.

Materialanforderung mindestens:

- Material
- Menge
- benötigter Zeitpunkt
- Dringlichkeit
- Bemerkung
- Foto optional

Materialanforderung wird für Bauleitung, Lager und Disposition sichtbar.

---

# Vorarbeiter-Tagesabschluss

Wenn eine Baustelle am Tagesende nicht abgeschlossen ist, muss der Vorarbeiter mindestens erfassen:

- Was wurde heute erledigt?
- Welche Restarbeiten bestehen?
- geschätzte Restdauer
- benötigte Mitarbeiter am Folgetag
- zusätzlich benötigtes Material
- Behinderungen / Probleme
- Besonderheiten
- voraussichtlicher Zeitpunkt, ab dem die Kolonne frei wird

Diese Informationen fließen in:

- Heute
- Einsatzplanung
- Kolonnenplanung
- Materialplanung
- Baustellenstatus

Beispiel:

Restarbeit:

4 Stunden

Kolonne:

3 Mitarbeiter

Material:

12 Geländer
8 Bordbretter
2 Durchstiege

Voraussichtlich frei:

morgen 13:00 Uhr

---

# 6. Mitarbeiter / Monteur

Soll nur die für ihn notwendigen Informationen sehen.

Beispiele:

- eigene Einsätze
- eigener Kalender
- Urlaub
- Schulungen
- Unterweisungen
- notwendige Baustellendokumente
- eigene Aufgaben

Keine kaufmännischen Unternehmensdaten.

---

# Persönlicher Kalender

Jeder Mitarbeiter besitzt einen eigenen Kalender.

Kalendereinträge können sein:

- Baustelleneinsatz
- Jour Fix
- Termin
- Rückruf
- Urlaub
- Krankheit
- Schulung
- Unterweisung
- Wiedervorlage

Termine können direkt aus Activities entstehen.

Beispiel:

Telefonat mit Kunde

↓

Termin vereinbart

↓

"Termin in Kalender übernehmen"

↓

Vorgang automatisch verknüpft

---

# Chef-Kalender / Unternehmenskalender

Geschäftsführung und berechtigte Disposition können Ressourcen gemeinsam betrachten.

Mindestens:

- Mitarbeiter
- Kolonnen
- Urlaub
- Krankheit
- Schulungen
- Fahrzeuge
- Baustellen
- Termine

Urlaub oder Abwesenheit muss auf die Kolonnenverfügbarkeit wirken.

Beispiel:

Vorarbeiter in KW 34 im Urlaub

↓

Kolonne nicht oder nur eingeschränkt verfügbar

↓

Disposition erhält Warnung

---

# Qualifikationen

Mitarbeiter können Qualifikationen besitzen.

Beispiele:

- Gerüstbauer
- Gerüstbau-Kolonnenführer / Vorarbeiter
- LKW-Führerschein C / CE
- Staplerschein
- Kranqualifikation
- PSAgA
- Ersthelfer
- weitere Schulungen

Diese Qualifikationen sollen später bei der Disposition berücksichtigt werden können.

---

# Berechtigungskategorien

Nicht nur "sehen oder nicht sehen".

Mindestens unterscheiden:

- ansehen
- erstellen
- bearbeiten
- zuweisen
- freigeben
- archivieren
- löschen
- administrieren

---

# Beispiel Berechtigungsmatrix

| Bereich | Chef | Bauleiter | Büro | Disposition | Vorarbeiter | Mitarbeiter |
|---|---|---|---|---|---|---|
| Angebote | Voll | Voll | Bearbeiten | Lesen | Nein | Nein |
| Projekt übernehmen | Ja | Ja | Nein | Nein | Nein | Nein |
| Einsatzvorbereitung | Voll | Voll | Teilweise | Planen | Lesen | Nein |
| Kolonnenplanung | Voll | Lesen/Planen | Lesen | Voll | Eigene | Nein |
| Material | Voll | Voll | Lesen | Planen | Anfordern | Nein |
| Rückrufbitten | Lesen | Erledigen | Erstellen | Lesen | Nein | Nein |
| Tagesabschluss | Lesen | Lesen | Nein | Lesen | Erstellen | Nein |
| Urlaub | Genehmigen | Lesen | Verwalten falls berechtigt | Lesen | Beantragen | Beantragen |
| Rechnungen | Voll | Bearbeiten | Teilweise | Nein | Nein | Nein |
| Sicherheit | Voll | Freigeben | Lesen | Lesen | Ausführen | Ausführen |

Die Matrix darf im Workshop fachlich verbessert werden.

---

# Rollenabhängiges "Heute"

"Heute" ist keine identische Seite für alle Rollen.

## Chef

- Unternehmensengpässe
- kritische Baustellen
- Kapazitäten
- Angebote
- Rechnungen
- Personalprobleme

## Bauleiter

- eigene Kolonnen
- eigene Baustellen
- Rückrufe
- Termine
- offene Aufgaben
- Materialprobleme
- Dokumentationslücken

## Büro

- neue Anrufe
- Rückrufbitten
- Angebote
- Termine
- Wiedervorlagen

## Disposition

- heutige Kolonnen
- ungeplante Ausfälle
- Restarbeiten
- freie Kapazitäten
- Material-/Fahrzeugkonflikte

## Vorarbeiter

- heutige Baustelle
- geplante Arbeiten
- Dokumente
- Material
- offene Punkte
- Tagesabschluss

---

# Sicherheitsregel

Berechtigungen ersetzen keine fachliche Verantwortung.

Sicherheitskritische, technische und kaufmännisch verbindliche Entscheidungen benötigen weiterhin eine entsprechend berechtigte menschliche Rolle.

---

# Ergebnis

Erstelle ein verbindliches Rollen- und Berechtigungsmodell.

Prüfe bestehende Rollen- und Architektur-Dokumente auf Widersprüche und aktualisiere sie gegebenenfalls.

Keine Software implementieren.

Keine UI verändern.

Nicht committen.

Nicht pushen.

Geänderte Dokumente auflisten.
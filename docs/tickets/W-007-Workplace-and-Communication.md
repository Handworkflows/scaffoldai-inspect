# W-007 – Arbeitsplatz & Kommunikation

## Ziel

ScaffoldAI erhält einen persönlichen Arbeitsplatz für jeden Mitarbeiter.

Der Arbeitsplatz bündelt sämtliche persönliche Arbeit:

- Kommunikation
- E-Mails
- Rückrufbitten
- Aufgaben
- Kalender
- Wiedervorlagen
- Benachrichtigungen
- Brain-Hinweise

Er ersetzt nicht Outlook oder Teams.

Er verbindet diese Informationen mit der Activity Engine.

Keine Software implementieren.

Nur Produkt- und Architekturentscheidungen dokumentieren.

---

# Grundidee

Jeder Mitarbeiter besitzt einen persönlichen Arbeitsplatz.

Er sieht ausschließlich seine Informationen.

Der Arbeitsplatz ist rollenabhängig.

---

# Navigation

Neue Hauptnavigation:

Heute

Arbeitsplatz

---

Angebote

Einsatzvorbereitung

---

Projekte

Buchhaltung

---

Team

Unternehmen

---

# Arbeitsplatz

Der Arbeitsplatz besteht mindestens aus:

## Kommunikation

- E-Mail
- Telefonnotizen
- Rückrufbitten
- Benachrichtigungen

---

## Aufgaben

Persönliche Activities

Offene Aufgaben

Freigaben

Wiedervorlagen

---

## Kalender

Eigener Kalender

Jour Fix

Urlaub

Krankheit

Termine

Baustellen

Rückrufe

---

## Brain

Persönliche Hinweise

Empfehlungen

Warnungen

Prioritäten

---

# Kommunikation

Kommunikation besitzt keinen eigenen Workflow.

Sie erzeugt Activities.

Beispiele:

E-Mail

↓

Activity

↓

Heute

↓

Projekt

↓

Verlauf

---

# E-Mail

ScaffoldAI unterstützt zwei Betriebsarten.

## Variante A

Direkte Outlook- bzw. Microsoft-365-Anbindung.

Optional.

OAuth.

Mandantengetrennt.

---

## Variante B

Weiterleitungsmodus.

Der Kunde richtet lediglich eine Weiterleitung ein.

Beispiel:

bauleiter@...

oder

vorgang@...

Dadurch muss ScaffoldAI nicht direkt auf Outlook zugreifen.

---

# Verarbeitung

Eine eingehende E-Mail kann automatisch erkennen:

- Kunde
- Projekt
- Angebot
- Ansprechpartner
- Anhänge
- Termine
- Rückruf
- Materialbedarf
- Rechnung
- Nachtrag

ScaffoldAI erstellt Vorschläge.

Der Mensch bestätigt.

---

# Anhänge

Anhänge werden dem Vorgang zugeordnet.

Beispiele:

Fotos

PDF

Pläne

Lieferscheine

Rechnungen

Aufmaße

---

# Telefonnotiz

Mindestens:

- Kunde
- Telefonnummer
- Uhrzeit
- Ansprechpartner
- Thema
- Dringlichkeit
- Rückruf bis
- Verantwortlicher

Workflow:

Büro

↓

Telefonnotiz

↓

Activity

↓

Heute

↓

Bauleiter

↓

Rückruf

↓

Erledigt

---

# Kalender

Eigener Kalender.

Kann entstehen aus:

- Activity
- Mail
- Telefon
- Termin
- Baustellenbesuch
- Jour Fix
- Wiedervorlage

Keine doppelte Pflege.

---

# Brain

Kann später unterstützen:

- Mail zusammenfassen
- Antwort entwerfen
- Termine erkennen
- Ansprechpartner erkennen
- Materialbedarf erkennen
- Aufgaben erzeugen
- Priorisieren

Keine automatische externe Kommunikation.

Immer Freigabe durch den Benutzer.

---

# Datenschutz

ScaffoldAI muss vollständig nutzbar sein

ohne

Outlook-Anbindung.

Der Weiterleitungsmodus ist gleichwertig zu unterstützen.

---

# Ergebnis

Dokumentiere den persönlichen Arbeitsplatz.

Dokumentiere Kommunikation.

Dokumentiere Datenschutzvarianten.

Dokumentiere die Einbindung in die Activity Engine.

Prüfe:

- Product Map
- Domain Model
- Rollenmodell
- Domain Language
- Roadmap

Keine Software ändern.

Nicht committen.

Nicht pushen.
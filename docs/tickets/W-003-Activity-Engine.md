# W-003 – Activity Engine

## Ziel

Die Activity Engine wird das Herzstück von ScaffoldAI.

In diesem Workshop wird keine Software entwickelt.

Es werden ausschließlich fachliche Regeln, Datenmodelle und Zusammenhänge definiert.

Die Ergebnisse bilden die Grundlage für Timeline, Baustellenakte, Kolonnen, Material, Disposition und Brain.

---

# Ausgangslage

Ein Bauleiter arbeitet nicht mit Projekten.

Er arbeitet den ganzen Tag mit Aktivitäten.

Zum Beispiel:

- Angebot aufnehmen
- Angebot nachfassen
- Baustelle besichtigen
- Material planen
- Material liefern
- Aufbau
- Umbau
- Kontrolle
- Nachtrag aufnehmen
- Aufmaß erstellen
- Abschlagsrechnung
- Schlussrechnung
- Reklamation
- Abbau

Ein Projekt ist lediglich der gemeinsame Kontext.

---

# Ziel

Definiere die fachliche Activity Engine.

Nicht technisch.

Sondern aus Sicht eines Gerüstbauunternehmens.

---

# Zu definieren

## 1.

Was ist eine Aktivität?

Welche Eigenschaften besitzt sie grundsätzlich?

Welche Informationen müssen immer vorhanden sein?

---

## 2.

Welche Aktivitätstypen existieren?

Nicht nur heutige.

Auch zukünftige.

---

## 3.

Lebenszyklus

Welche Status besitzt eine Aktivität?

Beispielsweise

- geplant
- vorbereitet
- disponiert
- unterwegs
- begonnen
- pausiert
- abgeschlossen
- storniert

Nur falls fachlich sinnvoll.

---

## 4.

Beziehungen

Welche Objekte können einer Aktivität zugeordnet sein?

Zum Beispiel

- Projekt
- Kolonne
- Mitarbeiter
- Fahrzeug
- Material
- Fotos
- Dokumente
- Notizen
- Aufmaß
- Nachtrag
- Rechnung

---

## 5.

Abhängigkeiten

Welche Aktivitäten erzeugen andere Aktivitäten?

Beispiel

Angebot

↓

Montage

↓

Aufmaß

↓

Schlussrechnung

---

## 6.

Timeline

Wie entsteht die Projekt-Timeline ausschließlich aus Aktivitäten?

---

## 7.

Dashboard

Welche Aktivitäten erscheinen auf "Heute"?

Welche Prioritäten besitzen sie?

---

## 8.

Brain

Welche Informationen soll das Brain später ausschließlich aus Aktivitäten ableiten können?

---

## 9.

Architekturregeln

Die Activity Engine wird das zentrale Fachmodell.

Neue Module sollen künftig möglichst Aktivitäten erweitern und nicht parallel eigene Prozessmodelle entwickeln.

---

# Ergebnis

Erstelle eine vollständige fachliche Spezifikation.

Keine React-Komponenten.

Keine UI.

Keine Datenbank.

Keine Implementierung.

Nur Architektur, Domänenmodell und Zusammenhänge.

Überarbeite bei Bedarf die Roadmap und bestehende Architektur-Dokumente, falls Widersprüche erkannt werden.

Nicht committen.

Nicht pushen.
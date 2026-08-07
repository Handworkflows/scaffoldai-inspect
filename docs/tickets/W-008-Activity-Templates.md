# W-008 – Activity Templates

## Ziel

ScaffoldAI erhält verbindliche Activity-Templates.

Templates definieren, welche Felder, Checklisten, Dokumente und Folgeaktivitäten je Arbeitsart automatisch vorbereitet werden.

Keine Software implementieren.

Nur Fachlogik, Struktur und Regeln dokumentieren.

---

# Grundprinzip

Eine Activity besteht aus:

1. gemeinsamen Basisfeldern
2. typabhängigen Feldern
3. typabhängiger Checkliste
4. optionalen Dokumentanforderungen
5. optionalen Folgeaktivitäten

Keine eigene Prozesslogik außerhalb der Activity Engine.

---

# Gemeinsame Basisfelder

Jede Activity besitzt weiterhin:

- Typ
- Titel
- Beschreibung
- Status
- Priorität
- Verantwortlicher
- Termin / Fälligkeit
- Projektbezug
- Kommentare
- offene Punkte
- Anhänge
- Verlauf

---

# Template-Kategorien

Mindestens definieren:

## Vertrieb

- Angebotsaufnahme
- Angebot erstellen
- Angebot nachfassen
- Telefonat
- Besprechung

## Vorbereitung

- Aufmaß
- Gerüstplanung
- Materialplanung
- Statik prüfen
- Sondernutzung klären
- Parkmöglichkeit klären
- Kran planen
- Montageanweisung
- Gefährdungsbeurteilung
- Montagefreigabe

## Betrieb

- Montage
- Umbau
- Kontrolle
- Reklamation
- Materiallieferung
- Materialabholung
- Abbau

## Kaufmännisch

- Nachtrag
- Abschlagsrechnung
- Schlussrechnung
- Zahlung prüfen

## Organisation

- Rückruf
- Wiedervorlage
- Tagesabschluss
- Materialanforderung
- Termin
- Jour Fix

---

# Gerüstbezogene Templates

Zusätzlich prüfen, welche Templates abhängig von der Gerüstleistung sinnvoll sind.

Mindestens:

- Fassadengerüst
- Dachfanggerüst / Dachfangschutz
- Schutzgerüst
- Treppenturm
- Hängegerüst
- Industriegerüst
- Wetterschutzdach
- Sonderkonstruktion

Ein Projekt kann mehrere Leistungen gleichzeitig besitzen.

Beispiel:

Fassadengerüst
+
Dachfangschutz
+
Treppenturm

Templates müssen kombinierbar sein.

Keine gegenseitige Überschreibung.

---

# Beispiel: Montage Fassadengerüst

Mögliche Checkliste fachlich prüfen:

- Baustelle zugänglich
- Parkmöglichkeit geklärt
- Material vorhanden
- Kolonne bestätigt
- Unterlagsholz vorhanden
- Fußplatten / Spindeln vorhanden
- Rahmen vorhanden
- Beläge vorhanden
- Geländer vorhanden
- Bordbretter vorhanden
- Diagonalen vorhanden
- Anker vorhanden
- Durchstiege vorhanden
- Montageanweisung vorhanden
- Gefährdungsbeurteilung vorhanden
- Sondernutzung vorhanden, falls erforderlich
- Statik vorhanden, falls erforderlich
- Kran eingeplant, falls erforderlich

Keine pauschale Pflicht für Punkte, die fachlich nicht erforderlich sind.

---

# Beispiel: Dachfangschutz

Prüfen:

- benötigt?
- auf welcher Gebäudeseite?
- wann im Bauablauf benötigt?
- Material erst zum passenden Einsatztag laden
- Bordbretter / Seitenschutz
- Konsolen
- Sonderteile
- Statik falls erforderlich

Wichtig:

Materialplanung muss zeitlich berücksichtigen, dass nicht jedes Material am ersten Einsatztag benötigt wird.

---

# Beispiel: Aufmaß

Mindestens:

- Gebäudeseite / Abschnitt
- Länge
- Höhe
- Fläche
- Gerüstart
- Besonderheiten
- Fotos
- Skizzen
- Zugänge
- Überbrückungen
- Lastanforderungen
- Dachfang
- Treppenturm
- Sonderkonstruktion
- offene Fragen

---

# Beispiel: Kontrolle

Mindestens prüfen:

- Gerüstzustand
- Verankerung
- Seitenschutz
- Beläge
- Zugänge
- Gerüstabschlüsse
- Veränderungen durch Dritte
- Schäden
- Mängel
- Fotos
- Sicherheitsrelevanz
- erforderliche Folgearbeiten

---

# Beispiel: Tagesabschluss Vorarbeiter

Wenn Einsatz nicht abgeschlossen:

- heutige Arbeiten
- Restarbeiten
- geschätzte Restdauer
- benötigte Mitarbeiter
- Materialbedarf
- Materialmenge
- benötigter Zeitpunkt
- Behinderungen
- Besonderheiten
- voraussichtliche Freigabe der Kolonne

Mögliche Folgeaktivitäten:

- Materialanforderung
- Dispositionshinweis
- Rückfrage Bauleiter

---

# Template-Regeln

Templates dürfen:

- Felder definieren
- Checklisten definieren
- Dokumentanforderungen definieren
- Standardprioritäten definieren
- Folgeaktivitäten vorschlagen

Templates dürfen NICHT:

- ungeprüft sicherheitskritische Freigaben erteilen
- verbindliche externe Kommunikation senden
- Fachentscheidungen automatisch ersetzen

---

# Pflicht / optional / bedingt

Jeder Template-Punkt muss klassifiziert werden können als:

- Pflicht
- optional
- bedingt

Beispiel:

Statik

Bedingt:
nur falls außerhalb Regelausführung / statische Prüfung erforderlich.

Sondernutzung

Bedingt:
nur bei Nutzung öffentlichen Raums.

Kran

Bedingt:
nur wenn Transport oder Konstruktion Kran erfordert.

---

# Template-Kombination

Ein Vorgang kann mehrere Templates gleichzeitig aktivieren.

Beispiel:

Fassadengerüst
+
Dachfangschutz
+
Treppenturm

ScaffoldAI soll daraus eine gemeinsame Activity-/Checklistenstruktur erzeugen.

Doppelte Punkte zusammenführen.

Keine redundanten Aufgaben erzeugen.

---

# Firmenindividuelle Templates

Später soll ein Unternehmen eigene Vorlagen anpassen können.

Beispiele:

- zusätzliche Prüfpunkte
- eigene Dokumente
- eigene Freigaberegeln
- firmeneigene Arbeitsweisen

Systemstandard bleibt erhalten.

Firmenanpassungen dürfen darauf aufbauen.

---

# Brain

Der Brain kann Templates später nutzen für:

- fehlende Voraussetzungen erkennen
- nächste Schritte vorschlagen
- Risiken anzeigen
- Dokumentationslücken erkennen
- Materialbedarf vorbereiten

Keine automatische fachliche Freigabe.

---

# Ergebnis

Erstelle eine verbindliche Activity-Template-Architektur.

Definiere:

- Template-Struktur
- Kategorien
- Pflicht/optional/bedingt
- Kombination mehrerer Gerüstleistungen
- Folgeaktivitäten
- Firmenanpassungen
- Brain-Nutzung

Prüfe bestehende Dokumente auf Widersprüche:

- Activity Engine
- Domain Model
- Product Map
- Roadmap
- W-005
- W-006

Keine Software ändern.

Nicht committen.
Nicht pushen.

Geänderte Dokumente auflisten.
# W-005 – ScaffoldAI Workflow Operating System

- **Stand:** 7. August 2026
- **Status:** Zielarchitektur beschlossen
- **Zweck:** verbindliche Produkt-, UX- und Architekturgrundlage für alle folgenden Tickets
- **Betrachtete Rollen:** Vertrieb, Büro, Bauleitung, Vorarbeiter, Mitarbeitende, Disposition und Geschäftsführung
- **Abgrenzung:** keine Implementierung, keine UI- oder Datenmigration

> **Spätere Navigationsergänzung:** [EPIC-002](../../epics/EPIC-002-project-lifecycle-accounting-archive.md) revidiert die konkrete Hauptnavigation: Projekte bleibt als zentraler Bauleiterbereich erhalten, Buchhaltung wird ein eigener Hauptbereich und Mannschaft heißt in der Navigation Team. Die Workflow-, Vorgangs- und Activity-Prinzipien dieses Workshops bleiben verbindlich.

> **Ergänzung durch W-007:** Der persönliche [Arbeitsplatz](../W-007-workplace-communication/SUMMARY.md) wird als eigener Hauptbereich direkt nach Heute ergänzt. Heute bleibt die aktuelle Priorisierung; Arbeitsplatz bündelt persönliche Kommunikation, Activities, Kalender und Hinweise.

## Beschluss

ScaffoldAI ist das Betriebssystem eines Gerüstbauunternehmens, keine klassische Projektverwaltung. Der fachliche Gegenstand ist ein **Vorgang** mit stabiler Identität und gemeinsamer Akte. Er beginnt im Vertrieb, wird bei Annahme verbindlich, durchläuft Einsatzvorbereitung und Betrieb und endet mit Abrechnung und Archivierung.

Alle Rollen arbeiten auf derselben Datenbasis. Bereichswechsel erzeugen weder Kopien noch parallele Prozessobjekte. Sie verändern Zuständigkeit, Sichtbarkeit, Verbindlichkeit und Phase desselben Vorgangs.

## Ursprüngliche Navigationsentscheidung aus W-005

1. **Heute** – persönlicher, rollenabhängiger Arbeitsplatz
2. **Angebote** – Vertriebspipeline vom Erstkontakt bis zur Projektübernahme
3. **Einsatzvorbereitung** – Herstellung und Freigabe der Einsatzbereitschaft
4. **Betrieb** – ausschließlich laufende Baustellen
5. **Mannschaft** – Menschen und mobile Ressourcen
6. **Unternehmen** – Material, Dokumente, Wissen, Auswertungen und Einstellungen

Diese Navigation war der Beschlussstand von W-005. Die Navigation folgt weiterhin Arbeitsbereichen und ein separater Hauptpunkt **Anfragen** bleibt ausgeschlossen. Die konkrete Liste wurde jedoch durch EPIC-002 ersetzt: **Heute, Angebote, Einsatzvorbereitung, Projekte, Buchhaltung, Team und Unternehmen**. Projekte bleibt damit zentraler Bauleiterbereich; Buchhaltung ist nicht mehr nur Bestandteil von Unternehmen.

## Durchgängiger Vorgangsfluss

```text
Neue Anfrage
→ Angebotsaufnahme
→ Angebot erstellen
→ Angebot versenden
→ Warten auf Kunde
→ Angebot angenommen
→ Als Projekt übernehmen
→ Einsatzvorbereitung
→ Freigabe zur Montage
→ Montage
→ Nutzung
→ Umbau
→ Abbau
→ Abrechnung
→ Archiv
```

### Übergaberegeln

- Eine Anfrage ist ein Angebotsvorgang, kein separates langlebiges Grundobjekt.
- Annahme des Angebots und Übernahme als Projekt sind zwei nachvollziehbare fachliche Entscheidungen.
- Die Übernahme erhöht die Verbindlichkeit und öffnet die Einsatzvorbereitung; sie erzeugt keine neue unabhängige Akte.
- Angebot, Annahme, Dokumente, Activities, Bilder, Maße und Kommunikation bleiben historisch referenziert.
- Betrieb enthält nur freigegebene beziehungsweise laufende Baustellen.
- Archivierung beendet die operative Sichtbarkeit, nicht die Nachvollziehbarkeit.

## Arbeitsbereich Heute

**Heute** ist keine allgemeine Unternehmensübersicht. Es ist eine aus Activities, Fristen, Verantwortlichkeiten, Blockaden und Hinweisen zusammengesetzte persönliche Arbeitsliste.

| Rolle | Typische Inhalte |
|---|---|
| Bauleiter | Rückrufe, Termine, offene Baustellen, fehlendes Material, neue Bilder, Nachträge |
| Vorarbeiter | heutige Baustellen, Checklisten, Material, Fotos, Tagesabschluss |
| Geschäftsführung | Engpässe, Auslastung, offene Angebote, fehlende Kolonnen, offene Rechnungen |
| Büro | neue Anfragen, Rückrufbitten, Angebotsstatus, Termine |

Jeder Eintrag zeigt mindestens Grund, Vorgang, Fälligkeit beziehungsweise Zeitbezug, Verantwortlichkeit und nächsten sinnvollen Schritt. Vertriebliche Prognosen und verbindliche Betriebsarbeit werden optisch und semantisch getrennt.

## Arbeitsbereich Angebote

Hier beginnt jeder Vorgang. Die Pipeline unterscheidet mindestens:

- neue Anfrage
- Angebotsaufnahme erforderlich oder geplant
- Angebot in Erstellung
- Angebot versendet
- Warten auf Kunde
- angenommen
- abgelehnt oder abgelaufen
- als Projekt übernommen

Angebotsaufnahme, Rückruf, Prüfung und Versand sind Activities. Der Angebotsstand ist dauerhafter Bereichszustand. Forecasts aus Anfrage und offenem Angebot bleiben unverbindlich; erst die Projektübernahme schafft verbindliche Planungsgrundlage.

## Arbeitsbereich Einsatzvorbereitung

Nach Projektübernahme wird der Vorgang hier startbereit gemacht. Der **Vorbereitungsgrad** verdichtet erfüllte, offene, blockierte und nicht erforderliche Voraussetzungen. Ein Prozentwert allein genügt nicht; offene Blocker müssen immer benannt werden.

### Technische Vorbereitung

- Aufmaß abgeschlossen
- Gerüstplanung abgeschlossen
- Statik vorhanden, falls erforderlich
- Sonderkonstruktion geprüft
- Materialliste vollständig

### Behördliche Freigaben

- Sondernutzung liegt vor
- verkehrsrechtliche Anordnung liegt vor, falls erforderlich
- Genehmigungen vollständig

### Logistik

- Material reserviert
- Materiallieferung geplant
- Krantermin geplant, falls erforderlich
- LKW eingeplant
- Parkmöglichkeit geklärt
- Zufahrt geklärt

### Personal

- Kolonne zugewiesen
- Vorarbeiter bestätigt
- Termin bestätigt

### Dokumente

- Montageanweisung erstellt
- Gefährdungsbeurteilung erstellt
- Ansprechpartner hinterlegt
- Notfallinformationen vorhanden

### Baustellenorganisation

- Arbeitszeiten abgestimmt
- Zugang geklärt
- Schlüssel vorhanden
- Lagerfläche geklärt

### Freigaberegel

Die Freigabe zur Montage ist eine explizite, verantwortete Entscheidung. Zwingende Blocker verhindern die reguläre Freigabe. Abweichungen benötigen Begründung, berechtigte Person und Zeitstempel. Die Activity Engine erzeugt und verfolgt die nötige Arbeit; der Vorbereitungsgrad ist eine Sicht auf deren Ergebnisse und dauerhafte Bereichsdaten, kein zweiter Workflow.

[W-008 – Activity Templates](../W-008-activity-templates/SUMMARY.md) definiert dafür verbindlich Pflicht-, optionale und bedingte Punkte sowie kombinierbare Gerüstleistungs-Overlays. Ein hoher Prozentwert hebt keinen Blocker auf. Templates bereiten Freigabekriterien vor, erteilen aber keine Freigabe.

## Arbeitsbereich Betrieb

Betrieb zeigt ausschließlich tatsächlich laufende Baustellen. Der Zielphasenfluss lautet:

```text
Vorbereitung abgeschlossen → Montage → Nutzung → Umbau → Abbau → Abrechnung → Archiv
```

Die vollständige Vorgangs- und Projektakte bleibt erreichbar. Montage, Kontrolle, Umbau, Lieferung, Behinderung, Aufmaß und Abbau werden als Activities ausgeführt. Projektbereiche zeigen den aktuellen konsolidierten Stand.

## Arbeitsbereich Mannschaft

Mannschaft bündelt:

- Mitarbeiter und Vorarbeiter
- Kolonnen
- Fahrzeuge und Geräte
- persönliche und übergreifende Kalender
- Urlaub und Krankheit
- Schulungen und Qualifikationen

Verfügbarkeiten sind zeitbezogen. Disposition berücksichtigt Abwesenheiten und erforderliche Qualifikationen. Mitarbeitende sehen entsprechend ihrer Rechte eigene Daten; Geschäftsführung und berechtigte Disposition erhalten die notwendige Gesamtsicht.

## Arbeitsbereich Unternehmen

Unternehmen bündelt Material, Dokumente, Brain/Wissensbasis, Auswertungen und Einstellungen. Die Unternehmenssicht aggregiert Quelldaten aus Vorgängen und Activities, führt aber keine parallelen Statusbestände.

## Kommunikation als Arbeit

Telefonate, Rückrufbitten und Wiedervorlagen sind Activities, keine Chats.

```text
Anruf im Büro
→ Telefonnotiz als Activity
→ Verantwortlichkeit zuweisen
→ auf „Heute“ der zuständigen Person anzeigen
→ Rückruf durchführen und Ergebnis dokumentieren
→ Activity abschließen
```

Die Activity bleibt im Verlauf des Vorgangs. Freie Echtzeitkommunikation kann später ergänzen, darf aber Aufgaben, Verantwortlichkeit oder fachliche Ergebnisse nicht ersetzen.

## Architekturprinzipien

1. **Der Vorgang ist die stabile fachliche Identität.** Bereiche sind Sichten und Zustände desselben Vorgangs.
2. **Activities sind die Arbeit.** Telefonat, Prüfung, Besuch, Freigabe, Lieferung und Rückruf folgen einem gemeinsamen Prozessmodell.
3. **Bereiche zeigen dauerhaften Stand.** Angebot, Vorbereitungsgrad und Baustellenstand werden aus autorisierten Quelldaten konsolidiert.
4. **Die Activity Engine ist die einzige Prozesslogik.** Keine separaten Angebots-, Checklisten-, Kommunikations- oder Projekt-Workflow-Engines.
5. **Einmal erfassen, mehrfach verwenden.** Übergaben referenzieren vorhandene Daten.
6. **Historie wird ergänzt, nicht überschrieben.** Entscheidungen und freigegebene Stände bleiben nachvollziehbar.
7. **Forecast und Verpflichtung bleiben getrennt.** Anfrage und Angebot wirken unverbindlich; übernommene Projekte verbindlich.
8. **Rollen steuern Sicht und Verantwortung.** Sie erzeugen keine getrennten Datenwelten.

## Fachliches Zielmodell

```text
Kunde ──< Vorgang >── Baustelle
             │
             ├── Angebotsstände und Annahme
             ├── Projekt-/Betriebsstand
             ├──< Activity >── Verantwortliche / Kolonne
             ├──< Dokument / Bild / Maß / Notiz
             ├──< Ressourcenplanung >── Mitarbeiter / Fahrzeug / Gerät
             └──< Verlaufseintrag (Referenz auf Quelle)
```

`Anfrage`, `Angebot`, `übernommenes Projekt` und `laufende Baustelle` bezeichnen fachliche Zustände beziehungsweise Sichten. Sie dürfen nicht als voneinander unabhängige Kopien modelliert werden.

## UX-Leitlinien

- Nutzer sehen den Arbeitsbereich und den nächsten Schritt, nicht interne Modulnamen.
- Farbe allein darf Verbindlichkeit, Blockade oder Status nicht ausdrücken.
- Bereichslisten zeigen nur dort relevante Vorgänge.
- Herkunft und vorherige Stände bleiben in der Akte sichtbar.
- Vorbereitungsgrad zeigt Prozentwert und konkrete offene Punkte.
- „Heute“ priorisiert persönliche Arbeit; Unternehmenskennzahlen gehören nach Unternehmen.
- Jede ausführbare Karte führt zur Activity oder zur fachlichen Entscheidung, die tatsächlich bearbeitet werden muss.

## Konsequenzen für zukünftige Tickets

Jedes neue Ticket muss beantworten:

1. In welchem der sechs Arbeitsbereiche lebt die Funktion?
2. Welchen Zustand desselben Vorgangs zeigt oder verändert sie?
3. Welche Activity erzeugt, plant oder schließt die Arbeit ab?
4. Welche dauerhaften Bereichsdaten werden aus dem Ergebnis aktualisiert?
5. Wer ist verantwortlich und wer darf freigeben?
6. Ist die Wirkung Forecast oder verbindliche Planung?
7. Wie bleibt Herkunft ohne Datenkopie nachvollziehbar?

Tickets, die parallele Workflowlogik, unabhängige Projektkopien oder Chat-basierte Aufgaben einführen, widersprechen dieser Zielarchitektur.

## Bewusst offen

- konkrete Gewichtung des ergänzenden Vorbereitungsgrads; Klassifikation und Blockerregeln sind in W-008 beschlossen
- betriebliche Ausprägung der in [W-006](../W-006-roles-permissions/SUMMARY.md) beschlossenen Freigabematrix
- genaue Statusautomaten und erlaubte Rücksprünge
- Behandlung mehrerer Baustellen oder Lose innerhalb eines Vorgangs
- Abgrenzung von Abrechnung in Betrieb gegenüber Unternehmensfunktionen
- Detailmodell für Geräte, Qualifikationen und Abwesenheiten
- Migrationspfad von der heutigen Navigation zur Zielnavigation

## Verknüpfte Dokumente

- [Fachliches Domänenmodell](../../architecture/DOMAIN_MODEL.md)
- [Product Map](../../product-map/PRODUCT_MAP.md)
- [Projektlebenszyklus](../../workflows/PROJECT_LIFECYCLE.md)
- [Activity Engine](../../specs/PS-001-Activity-Engine.md)
- [Domain Language Dictionary](../../knowledge/DOMAIN_LANGUAGE.md)
- [W-002 – Operating System](../W-002-operating-system/SUMMARY.md)
- [W-003 – Activity Engine](../W-003-activity-engine/SUMMARY.md)
- [W-006 – Rollen & Berechtigungen](../W-006-roles-permissions/SUMMARY.md)
- [W-008 – Activity Templates](../W-008-activity-templates/SUMMARY.md)

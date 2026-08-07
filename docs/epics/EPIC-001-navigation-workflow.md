# EPIC-001 – Navigation & Workflow

- **Stand:** 7. August 2026
- **Status:** Durch EPIC-002 fachlich revidiert
- **Quelle:** [EPIC-Ticket](../tickets/EPIC-001-Navigation-and-Workflow.md)
- **Fachliche Grundlage:** [W-005 – Workflow Operating System](../workshops/W-005-workflow-operating-system/SUMMARY.md)
- **Berechtigungsgrundlage:** [W-006 – Rollen & Berechtigungen](../workshops/W-006-roles-permissions/SUMMARY.md)

## Ziel

EPIC-001 setzt die in W-005 beschlossene Informationsarchitektur um. ScaffoldAI wird entlang des Unternehmensworkflows organisiert. Die Epic erzeugt keine neue Fachlogik: Bestehende Vorgänge, Activities und Akten werden durch neue Arbeitsbereiche gefiltert und zugänglich gemacht.

> **Revision:** [EPIC-002](EPIC-002-project-lifecycle-accounting-archive.md) ersetzt die nachfolgende Zielnavigation. Insbesondere bleiben **Projekte** als Hauptbereich erhalten, **Buchhaltung** wird ein eigener Hauptbereich und **Betrieb/Mannschaft** heißen in der Navigation **Projekte/Team**. Die Prinzipien der stabilen Vorgangsidentität und der bereichsspezifischen Sichten bleiben gültig.

## Zielnavigation

Die Hauptnavigation besteht ausschließlich aus:

1. **Heute**
2. **Angebote**
3. **Einsatzvorbereitung**
4. **Betrieb**
5. **Mannschaft**
6. **Unternehmen**

Ein Hauptpunkt **Projekte** oder **Anfragen** ist nicht Bestandteil der Zielnavigation. Projekt- und Baustellenakten bleiben aus den jeweiligen Arbeitsbereichen erreichbar.

## Informationsarchitektur

```text
Angebote
  Anfrage → Angebotsaufnahme → Angebot → Warten → Annahme
                                           │
                                           ▼
Einsatzvorbereitung
  bestätigter Vorgang → Voraussetzungen → Vorbereitungsgrad → Freigabe
                                                               │
                                                               ▼
Betrieb
  Montage → Nutzung → Umbau → Abbau → Reklamation/Abrechnung → Archiv
```

Der Vorgang behält über alle Übergänge dieselbe Identität. Bereichswechsel ändern Sichtbarkeit und Zustand, erzeugen aber weder Kopien noch parallele Prozesse.

## Bereichsverträge

### Heute

- persönlicher und rollenabhängiger Arbeitsplatz
- ausschließlich heute relevante Activities, Termine, Entscheidungen und Blockaden
- keine allgemeine Vorgangs- oder Projektliste
- Inhalte folgen W-006 hinsichtlich Sichtbarkeit und Verantwortung

### Angebote

- sämtliche Vertriebsvorgänge vom Erstkontakt bis zur Übernahme
- Anfrage ist ein Angebotsstatus, kein eigener Navigationsbereich
- keine bereits übernommenen beziehungsweise laufenden Baustellen in der aktiven Vertriebsliste
- historische Angebotsdaten bleiben in der Akte sichtbar

### Einsatzvorbereitung

- ausschließlich bestätigte, noch nicht für den Betrieb freigegebene Vorgänge
- jede Karte zeigt Vorbereitungsgrad sowie konkrete offene und blockierende Voraussetzungen
- Übergang in Betrieb erst nach expliziter, berechtigter Freigabe
- der Vorbereitungsgrad ist eine Sicht auf bestehende Fachdaten und Activity-Ergebnisse, kein eigener Workflow

### Betrieb

- ausschließlich laufende oder in Abrechnung befindliche Baustellen
- mindestens nach Montage, Nutzung, Umbau, Abbau, Reklamation und Abrechnung gruppierbar
- vollständige Vorgangs-/Projektakte bleibt erreichbar
- Archiv ist der nachgelagerte, historisch nachvollziehbare Endzustand

### Mannschaft

- Mitarbeiter, Vorarbeiter, Kolonnen, Kalender, Urlaub, Fahrzeuge, Geräte und Qualifikationen
- personenbezogene Sichtbarkeit und Aktionen folgen W-006
- Ressourcen- und Verfügbarkeitsdaten werden referenziert, nicht in Einsatzlisten kopiert

### Unternehmen

- Material, Dokumente, Brain/Wissen, Rechnungen, Auswertungen und Einstellungen
- unternehmensweite Sichten aggregieren vorhandene Quellen
- keine parallelen Status- oder Dokumentbestände

## Ticketstruktur

| Ticket | Gegenstand | Abhängigkeit | Ergebnis |
|---|---|---|---|
| T-014.1 | Neue Navigation | W-005, W-006 | sechs Hauptbereiche und konsistente aktive Zustände |
| T-014.2 | Heute | T-014.1, Activity Engine, W-006 | rollenabhängige heutige Arbeitslage ohne Projektliste |
| T-014.3 | Angebote | T-014.1, Vorgangslebenszyklus | vollständige Vertriebspipeline bis Projektübernahme |
| T-014.4 | Einsatzvorbereitung | T-014.1, T-014.3 | Vorbereitungsgrad, offene Punkte und Freigabeübergang |
| T-014.5 | Betrieb | T-014.1, T-014.4 | laufende Baustellen nach Betriebsphase |
| T-014.6 | Mannschaft | T-014.1, W-006 | Ressourcen-, Kalender- und Qualifikationsbereich |
| T-014.7 | Unternehmen | T-014.1, W-006 | gebündelte Unternehmensfunktionen |

T-014.1 schafft die gemeinsame Navigationshülle. T-014.2 bis T-014.7 können danach fachlich getrennt umgesetzt werden, müssen jedoch dieselben Vorgangs- und Activity-Quellen verwenden. T-014.4 hängt zusätzlich von der Projektübernahme aus T-014.3 ab; T-014.5 vom Freigabeübergang aus T-014.4.

## Gemeinsame Abnahmeregeln

- Die globale Hauptnavigation enthält genau die sechs Zielbereiche.
- Es existiert keine klassische Hauptnavigation „Projekte“ oder „Anfragen“.
- Ein Vorgang behält bei jedem Bereichswechsel seine ID und seine Akte.
- Heute zeigt keine unpriorisierte Projektliste.
- Angebote, Einsatzvorbereitung und Betrieb enthalten ausschließlich Vorgänge ihres fachlichen Zustands.
- Berechtigungen und rollenabhängige Sichten entsprechen W-006.
- Historische Angebote, Activities, Bilder, Maße und Dokumente bleiben erreichbar.
- Direkte Links auf bestehende Akten erhalten einen fachlich sinnvollen Zielkontext oder eine kontrollierte Weiterleitung.
- Mobile und Desktop-Navigation verwenden dieselben Bereichsnamen und Zuständigkeiten.
- Keine Unterseite führt eine parallele Workflow- oder Statuslogik ein.

## Nicht Bestandteil der Epic

- neue Kalkulations-, Material- oder Dispositionslogik
- neue Activity-Typen allein für die Navigation
- automatische Berechnung des Vorbereitungsgrads ohne eigenes Fachticket
- technische Rollen- und Berechtigungsimplementierung außerhalb der jeweiligen Tickets
- Datenkopien oder neue unabhängige Projektakten

## Migrations- und Umsetzungsleitlinien

- Bestehende URLs und gespeicherte Daten dürfen nicht kommentarlos unzugänglich werden.
- Übergangsweiterleitungen müssen fachlichen Zustand und Berechtigung berücksichtigen.
- Historische Begriffe in alten Tickets bleiben als Entstehungskontext erhalten; neue Tickets verwenden ausschließlich die W-005-Navigation.
- Bereichsfilter werden aus vorhandenen Zuständen abgeleitet. Notwendige Statusbereinigungen sind separat und rückwärtskompatibel zu spezifizieren.

## Offene Punkte für die Folgetickets

- konkrete URLs und Weiterleitungsstrategie
- Desktop-, Tablet- und Mobile-Navigationsmuster
- Berechnung und Gewichtung des Vorbereitungsgrads
- genaue Grenze zwischen Reklamation als Betriebsgruppe und Activity-Typ
- Archivzugang innerhalb von Betrieb oder Unternehmen
- Empty States, globale Suche und berechtigungsspezifische Navigationsausblendung

# EPIC-002 – Projektlebenszyklus, Buchhaltung & Archivierung

- **Stand:** 7. August 2026
- **Status:** Fachliche Zielstruktur beschlossen
- **Fachliche Grundlagen:** [W-005](../workshops/W-005-workflow-operating-system/SUMMARY.md), [W-006](../workshops/W-006-roles-permissions/SUMMARY.md)
- **Abgrenzung:** keine Implementierung, keine UI- oder Datenmigration

> **Navigationsergänzung durch W-007:** Der Hauptbereich **Arbeitsplatz** wird direkt nach Heute ergänzt. Die Lebenszyklus-, Projekt-, Buchhaltungs- und Archivierungsentscheidungen dieser Epic bleiben unverändert.

## Beschluss und Revision

Ein Vorgang besitzt vom Angebot bis zum Archiv eine stabile Identität und eine gemeinsame Akte. EPIC-002 präzisiert den Lebenszyklus und revidiert die Navigationsentscheidung aus W-005/EPIC-001:

- **Projekte** bleibt zentraler Arbeitsbereich der Bauleitung.
- **Buchhaltung** wird ein eigener Hauptbereich.
- **Team** ersetzt den Navigationsnamen Mannschaft.
- **Unternehmen** enthält nicht mehr die operative Buchhaltung.

Diese Revision ändert keine Grundprinzipien: keine Kopien, keine parallelen Prozesse, Activities als einzige Prozesslogik und rollenbezogene Rechte nach W-006.

## Verbindliche Zielnavigation

```text
Heute
Arbeitsplatz
──────────────
Angebote
Einsatzvorbereitung
Projekte
Buchhaltung
──────────────
Team
Unternehmen
```

## Verbindlicher Lebenszyklus

```text
ANGEBOT
  ↓ Annahme / Projektübernahme
EINSATZVORBEREITUNG
  ↓ Montagefreigabe
LÄUFT
  ↓ operativer Abschluss
ABRECHNUNG
  ↓ kaufmännischer Abschluss
ABGESCHLOSSEN
  ↓ Archivierungsprüfung und berechtigte Entscheidung
ARCHIVIERT
```

Statuswechsel ändern denselben Vorgang. Angebot, Activities, Bilder, Pläne, Maße, Dokumente, Nachträge, Rechnungen und Verlauf bleiben referenziert.

## Statusdefinitionen

| Lebenszyklusstatus | Bedeutung | Planungswirkung | regulärer Arbeitsbereich |
|---|---|---|---|
| Angebot | noch kein bestätigter Auftrag | unverbindlicher Forecast | Angebote |
| Einsatzvorbereitung | bestätigter Auftrag, noch keine Montagefreigabe | verbindliche Vorbereitung | Einsatzvorbereitung / Projekte „Kommend“ |
| Läuft | freigegebene aktive Baustelle | verbindlicher Betrieb | Projekte „Laufend“ |
| Abrechnung | operativ beendet, kaufmännisch offen | keine reguläre Montageplanung | Buchhaltung / Projekte „Abgeschlossen“ oder eigene Kennzeichnung |
| Abgeschlossen | operativ und kaufmännisch abgeschlossen | historisch aktiv auffindbar | Projekte „Abgeschlossen“ |
| Archiviert | geprüft archiviert, unverändert recherchierbar | keine aktive Planung | Projekte „Archiv“ |

Lebenszyklusstatus, konkrete Projektphase, Angebotsstatus, Rechnungsstatus und Activity-Status sind getrennte Konzepte.

## 1. Angebot

Enthält Anfrage, Angebotsaufnahme, Angebotsversionen und -status, Kommunikation, Bilder, Pläne, Maße sowie Forecast. Eine Annahme allein erhält die Historie; die Projektübernahme wechselt denselben Vorgang in Einsatzvorbereitung.

Übernommene oder laufende Baustellen erscheinen nicht in der aktiven Angebotsliste. Ihr ursprüngliches Angebot bleibt in der Akte sichtbar.

## 2. Einsatzvorbereitung

Der Auftrag ist bestätigt, aber noch nicht zur Montage freigegeben. Der sichtbare Vorbereitungsgrad umfasst mindestens:

- **Technik:** Aufmaß, Gerüstplanung, erforderliche Statik, Sonderkonstruktion, Materialplanung
- **Behörden:** erforderliche Sondernutzung, verkehrsrechtliche Anordnung und sonstige Genehmigungen
- **Logistik:** Parken, Zufahrt, Kran, Materiallieferung und LKW
- **Personal:** Kolonne, Vorarbeiter und Termin
- **Dokumente:** Montageanweisung, Gefährdungsbeurteilung, Ansprechpartner und notwendige Unterlagen

Der Prozentwert wird immer mit offenen und blockierenden Punkten angezeigt. Erst eine nach W-006 berechtigte Montagefreigabe wechselt in **Läuft**.

## 3. Laufendes Projekt

Aktive Baustellen werden innerhalb des Status **Läuft** nach konkreter Phase gruppiert:

- Aufbau
- Nutzung
- Umbau
- Abbau
- Reklamation

Die Projektakte enthält Angebot, Bilder, Aufmaß, Dokumente, Activities, Nachträge, Rechnungen und Verlauf. Reklamation kann eine parallele fachliche Lage während einer Betriebsphase oder eine eigene sichtbare Gruppierung sein; sie erzeugt keine zweite Akte.

## Projekte – Hauptansicht

Die Hauptansicht verwendet eine unmittelbar sichtbare Umschaltung, keine komplexe Filterkonfiguration:

| Sicht | Inhalt |
|---|---|
| Laufend | Status Läuft, gruppierbar nach Aufbau, Nutzung, Umbau, Abbau und Reklamation |
| Kommend | bestätigte Vorgänge in Einsatzvorbereitung |
| Abgeschlossen | Status Abrechnung und Abgeschlossen, eindeutig gekennzeichnet |
| Archiv | Status Archiviert; optional eingeblendet, aber jederzeit erreichbar |

Jede Projektseite zeigt den Lebenszyklusstatus prominent als Text. Farbe unterstützt die Wiedererkennung, ist aber nie alleiniger Informationsträger.

## 4. Abrechnung

Operativer und kaufmännischer Abschluss sind getrennt. Nach Ende der Baustellenarbeit wechselt der Vorgang in **Abrechnung**, nicht direkt in Abgeschlossen oder Archiviert.

Relevanter dauerhafter Stand:

- letztes und finales Aufmaß
- Nachträge
- Abschlagsrechnungen
- Schlussrechnung
- abrechenbare Mietmengen
- Abmeldedatum
- Zahlungseingänge und Forderungen
- Reklamationen
- offene kaufmännische Punkte

```text
Abbau abgeschlossen
→ Schlussaufmaß
→ Nachträge klären
→ Schlussrechnung erstellen und versenden
→ Zahlungseingang prüfen
→ kaufmännisch abschließen
→ Status Abgeschlossen
```

## Hauptbereich Buchhaltung

Buchhaltung ist der operative kaufmännische Arbeitsplatz für Bauleitung, berechtigte kaufmännische Rollen und Geschäftsführung. Sie ist keine vollständige Finanzbuchhaltung.

### Abschlagsrechnungen und Schlussrechnungen

Status: **vorzubereiten → erstellt → geprüft → versendet → bezahlt**. **Überfällig** ist eine aus Fälligkeit und Zahlung abgeleitete Lage, kein alternativer Prozessschritt.

### Nachträge

Status: **erkannt → vorzubereiten → versendet → freigegeben oder abgelehnt → fakturiert**.

### Forderungen

Status beziehungsweise Lage: **offen, fällig, überfällig, bezahlt**.

### Bauleiter-Sicht

- eigene offene Abschlags- und Schlussrechnungen
- offene Nachträge
- eigene Projekte in Abrechnung
- Datum der letzten Abschlagsrechnung
- abrechenbare Mietmengen
- überfällige kaufmännische Activities

### Geschäftsführungs-/Buchhaltungssicht

- alle offenen Rechnungen und Forderungen im berechtigten Umfang
- Projekte ohne aktuelle Abschlagsrechnung
- Nachtragsvolumen
- Projekte in Abrechnung
- Projektabschlussstände

## Abschlagsrechnungsfähigkeit

ScaffoldAI soll später Hinweise aus nachvollziehbaren Quellen ableiten können:

- Datum und Alter der letzten Abschlagsrechnung
- seitdem zusätzlich abrechenbare Leistungen
- aktuelle Mietmengen
- neue Nachträge seit der letzten Abschlagsrechnung

Ein Hinweis wie „Neue AZ vorbereiten“ erzeugt oder priorisiert eine Activity. EPIC-002 enthält keine automatische Rechnungsberechnung.

## Abschluss- und Archivierungsregeln

Ein Vorgang darf erst **Abgeschlossen** werden, wenn der operative Abschluss dokumentiert und alle verpflichtenden kaufmännischen Abschlusskriterien erfüllt oder verantwortet geklärt sind.

Vor Archivierung werden mindestens geprüft:

- operative Arbeiten abgeschlossen
- Abbau abgeschlossen, falls erforderlich
- finales Aufmaß abgeschlossen
- offene Nachträge geklärt
- Schlussrechnung erstellt
- Schlussrechnung versendet
- Schlussrechnung bezahlt
- relevante Reklamationen geschlossen

### Ergebnis der Prüfung

- **BEREIT ZUM ARCHIVIEREN:** alle zwingenden Kriterien erfüllt
- **ARCHIVIERUNG NOCH NICHT MÖGLICH:** mindestens ein zwingender Punkt offen; die offenen Gründe werden konkret benannt

Die Archivierungsprüfung ist eine Projektion vorhandener Ergebnisse. Die tatsächliche Archivierung ist eine eigene, berechtigte und auditierte Activity beziehungsweise Entscheidung.

Archivierung ist keine Löschung. Archivierte Vorgänge verschwinden aus Laufend und Kommend, bleiben aber mindestens über Kunde, Adresse, Projektname, Jahr, Angebotsnummer, Rechnungsnummer und Bauleiter auffindbar.

## Activity-Bezug

Kaufmännische Arbeit bleibt Activity-basiert, beispielsweise:

- Aufmaß erstellen oder prüfen
- Nachtrag vorbereiten oder freigeben
- Abschlagsrechnung vorbereiten
- Rechnung prüfen oder versenden
- Kunde wegen Forderung kontaktieren
- Zahlung prüfen
- Abschluss vorschlagen
- Archivierung prüfen und Projekt archivieren

Bereichsstände referenzieren Activity-Ergebnisse. Buchhaltung führt keinen parallelen Workflow.

## Rollen und Rechte

Gemäß W-006:

- **Bauleiter:** eigene Rechnungen und Nachträge vorbereiten/bearbeiten, Abschluss vorschlagen
- **Geschäftsführung oder berechtigte kaufmännische Rolle:** kaufmännische Freigaben, organisationsweite Sicht und Archivierungsentscheidung nach Regel
- **Büro/Buchhaltung:** kaufmännische Daten im beauftragten Umfang bearbeiten; Freigabe nur mit ausdrücklichem Recht
- **Disposition:** nur planungsrelevante finanzielle Zustände, keine Rechnungsdetails
- **Vorarbeiter/Mitarbeiter:** keine kaufmännischen Unternehmensdaten

## Heute

Rollenabhängig können heute fällige kaufmännische Activities erscheinen, etwa AZ vorbereiten, Schlussrechnung prüfen, Kunde kontaktieren, Nachtrag freigeben oder archivierungsbereiten Vorgang bearbeiten. Heute kopiert keine Rechnungs- oder Projektdaten.

## Invarianten

- Jeder Vorgang besitzt genau eine stabile Identität.
- Operativer Abschluss, kaufmännischer Abschluss und Archivierung sind getrennte Entscheidungen.
- Keine Statusänderung löscht oder überschreibt historische Angebots- oder Rechnungsstände.
- Archivierung ist reversibilitäts- und auditierbar zu behandeln; sie ist keine Löschung.
- Status wird aus autorisierten Quellen verdichtet; Activities bleiben die einzige Prozesslogik.
- Berechtigungen und Freigaben folgen W-006.

## Nicht Bestandteil

- automatische Rechnungskalkulation
- vollständige Finanzbuchhaltung
- Zahlungsimport oder Bankanbindung
- Rechnungs-PDF und externe Buchhaltungsintegration
- technische Navigation, UI oder Migration

## Offene Folgeentscheidungen

- konkrete Wertgrenzen und Vier-Augen-Freigaben
- Fälligkeits- und Mahnregeln
- Umgang mit Teilzahlungen und Gutschriften
- Gewichtung und Ausnahmeverfahren der Archivierungskriterien
- Aufbewahrungsfristen sowie Wiederherstellung aus dem Archiv
- genaue Darstellung von Abrechnung innerhalb der Projektsicht „Abgeschlossen“

## Verknüpfte Dokumente

- [Projektlebenszyklus](../workflows/PROJECT_LIFECYCLE.md)
- [Product Map](../product-map/PRODUCT_MAP.md)
- [Roadmap](../roadmap/ROADMAP.md)
- [Activity Engine](../specs/PS-001-Activity-Engine.md)
- [Rollenmodell](../roles/ROLE_MODEL.md)

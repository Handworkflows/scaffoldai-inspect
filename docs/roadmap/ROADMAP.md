# ScaffoldAI Roadmap

Stand: 7. August 2026

Die Roadmap leitet Produktbausteine aus W-001 und der Master Vision ab. Sie beschreibt fachliche Reihenfolge und Abhängigkeiten, keine verbindlichen Termine. Jede Phase liefert einen nutzbaren Stand; KI-Module folgen belastbaren Daten und menschlich geprüften Prozessen.

## EPIC-001 – Navigation & Workflow

> **Revidiert durch EPIC-002:** Die in diesem Abschnitt beschriebene Sechs-Bereiche-Navigation ist nicht mehr die aktuelle Zielnavigation. Verbindlich sind Heute, Angebote, Einsatzvorbereitung, Projekte, Buchhaltung, Team und Unternehmen gemäß [EPIC-002](../epics/EPIC-002-project-lifecycle-accounting-archive.md). Die T-014-Tickets müssen vor Umsetzung entsprechend neu zugeschnitten werden.

Vor weiterer funktionaler Ausdifferenzierung wird die Informationsarchitektur an [W-005](../workshops/W-005-workflow-operating-system/SUMMARY.md) ausgerichtet. [EPIC-001](../epics/EPIC-001-navigation-workflow.md) organisiert vorhandene Fachlogik in sechs Arbeitsbereiche; sie erzeugt keine neue Prozesslogik.

```text
T-014.1 Neue Navigation
  ├── T-014.2 Heute
  ├── T-014.3 Angebote ──► T-014.4 Einsatzvorbereitung ──► T-014.5 Betrieb
  ├── T-014.6 Mannschaft
  └── T-014.7 Unternehmen
```

| Ticket | Roadmap-Ergebnis | Status |
|---|---|---|
| T-014.1 | Hauptnavigation mit Heute, Angebote, Einsatzvorbereitung, Betrieb, Mannschaft und Unternehmen | geplant |
| T-014.2 | rollenabhängige heutige Arbeitslage ohne allgemeine Projektliste | geplant |
| T-014.3 | Vertriebspipeline vom Anfragezustand bis zur Projektübernahme | geplant |
| T-014.4 | bestätigte Vorgänge mit Vorbereitungsgrad und Freigabeübergang | geplant |
| T-014.5 | laufende Baustellen nach Betriebsphase | geplant |
| T-014.6 | Mitarbeiter, Kolonnen, Kalender, Fahrzeuge, Geräte und Qualifikationen | geplant |
| T-014.7 | Material, Dokumente, Wissen, Rechnungen, Auswertungen und Einstellungen | geplant |

Abhängigkeiten: T-014.1 zuerst. T-014.3 vor T-014.4; T-014.4 vor T-014.5. Rollenabhängige Inhalte in allen Tickets folgen [W-006](../workshops/W-006-roles-permissions/SUMMARY.md). Bestehende Vorgangsidentitäten und Akten bleiben erhalten.

## EPIC-002 – Projektlebenszyklus, Buchhaltung & Archivierung

Ziel: den vollständigen Vorgang vom Angebot bis zum recherchierbaren Archiv sichtbar machen und operative Buchhaltungsarbeit als eigenen Hauptbereich etablieren.

```text
Angebot → Einsatzvorbereitung → Läuft → Abrechnung → Abgeschlossen → Archiviert
```

Roadmap-Ergebnisse:

- revidierte Hauptnavigation mit Projekte, Buchhaltung und Team
- verbindlicher Lebenszyklusstatus, getrennt von Projekt-, Angebots- und Rechnungsstatus
- schnelle Projektsichten Laufend, Kommend, Abgeschlossen und Archiv
- sichtbarer Vorbereitungsgrad vor Montagefreigabe
- operativer Buchhaltungsbereich für Abschläge, Schlussrechnungen, Nachträge und Forderungen
- getrennter operativer und kaufmännischer Abschluss
- erklärbare Archivierungsprüfung und auditierte Archivierungsentscheidung

Abhängigkeiten: Activity Engine und W-006 vor verbindlichen Freigaben. Einsatzvorbereitung vor Läuft; operativer Abschluss vor Abrechnung; kaufmännischer Abschluss vor Abgeschlossen; Abschlussprüfung vor Archiviert. Automatische Rechnungsberechnung und externe Finanzbuchhaltung sind nicht Bestandteil.

## W-007 – Persönlicher Arbeitsplatz & Kommunikation

Ziel: persönliche Arbeit aus Kommunikation, Activities, Kalender, Wiedervorlagen, Benachrichtigungen und Hinweisen in einem rollenabhängigen Arbeitsplatz verbinden.

Roadmap-Bausteine:

1. **Arbeitsplatz-Grundlage:** persönliche Projektion, Bereiche Kommunikation/Aufgaben/Kalender/Hinweise und Abgrenzung zu Heute
2. **Telefonnotiz und Rückruf:** strukturierter Eingang, Zuweisung, Frist und Activity-Ergebnis
3. **Kanonneutraler E-Mail-Eingang:** gemeinsames Nachrichtenmodell für Weiterleitung und optionale Microsoft-365-Anbindung
4. **Bestätigte Zuordnung:** Vorschläge für Kunde, Vorgang, Dokument, Termin und Activity mit menschlicher Bestätigung
5. **Persönlicher Kalender:** zeitliche Sicht ohne doppelte Pflege
6. **Benachrichtigungen:** relevante Zustandsänderungen mit Quelle, Deduplizierung und Rollenprüfung
7. **Brain-Unterstützung:** Zusammenfassung, Entwurf, Erkennung und Priorisierung ohne automatische externe Kommunikation

Abhängigkeiten: Activity Engine, W-006 und stabile Vorgangsidentitäten vor automatischer Zuordnung. Der Weiterleitungsmodus muss ohne Outlook-Verbindung vollständig nutzbar sein. OAuth-/Providerintegration, Aufbewahrung, Malwareprüfung und externe Synchronisation benötigen eigene technische und Datenschutz-Tickets.

## Abhängigkeitsbild

```text
Project Core + Rollen + Timeline
              │
              ▼
Activity Engine ──► Live-Baustelle ──► Change Manager
      │                    │                  │
      ├──► Mobile Capture  ├──► Dokumente ◄──┘
      │                    │
      └──► Baustellenakte ─┴──► Brain-Module

Material Intelligence ──► Materialfluss ──► Lager / Startmaterial
        │                  │
        └──────────► Dispositionsmanager ◄── Mitarbeiter / Fahrzeuge

Aufmaß + Nachträge + Dokumente ──► Angebot / Abschlag / Abrechnung
Alle freigegebenen Bereiche ─────► Unternehmensübersicht
```

## MVP – Baustellenkontext

Ziel: Projekte und Vor-Ort-Aktivitäten mobil, strukturiert und dauerhaft dokumentieren.

- [x] T-001 Dashboard
- [x] T-002 Projekt-Assistent
- [x] T-003 Baustellenbesuche
- [x] T-004 Intelligente Besuchsworkflows
- [x] T-005 Mobile Foto- und Notizerfassung
- [x] T-006 Project Core
- [ ] **Activity Engine – Grundlagen:** Besuch als erste Aktivitätsart, Status, Verantwortlichkeit, Workflow und Ergebnis
- [ ] **Activity Templates – Fachstandard:** versionierte Arbeitsart-Templates, kombinierbare Gerüstleistungs-Overlays, Pflicht/optional/bedingt und Firmen-Governance
- [ ] **Timeline – Grundlagen:** chronologischer Projektverlauf aus referenzierten Ereignissen
- [ ] **Digitale Baustellenakte – Grundlagen:** gemeinsame Sicht auf Aktivitäten, Fotos, Notizen und Checklisten
- [ ] **Mobile Sprache:** Aufnahme, Transkription und Bestätigung als Notizquelle

Abhängigkeiten: Project Core vor Activity Engine; Activity Engine vor generischen Aktivitäten und Live-Baustelle. Verbindliche Activity-Templates bauen auf der Activity Engine auf und gehen regelbasierter Readiness-, Folgeactivity- und Brain-Unterstützung voraus.

## Phase 2 – Operativer Projektfluss

Ziel: Planung, Ausführung, Änderungen und Dokumente ohne Medienbruch verbinden.

- **Live-Baustelle:** aktueller Stand, nächste Schritte, offene Punkte und Verantwortliche
- **Baustellen-Readiness:** messbarer Vorbereitungsgrad aus fachlichen, logistischen und organisatorischen Voraussetzungen
- **Vorbereitete Arbeiten:** prüf- und ausführbare Arbeitspakete mit Kontext, offenen Punkten und Verantwortlichen
- **Auftragssimulator:** regelbasierte Szenarien für Termin, Kapazität, Konstruktion, Statik, Lasten, Logistik und Wirtschaftlichkeit
- **Change Manager:** Änderungen, Umbauten, Behinderungen und Nachtragspotenziale
- **Dokumentencenter:** Versionen, Freigaben und Vorlagen
- **Aufmaß und Nachträge:** strukturierte Mengen und Nachweise aus Aktivitäten
- **Material Intelligence:** Soll, Startmaterial, Ist, Bedarf, Rest, Rücklauf und Prognosen je Einsatz
- **Materialfluss:** Lager, Fahrzeug und Baustelle als nachvollziehbare Bewegungen
- **Einsatzbezogene Beladung:** LKW-Beladung nach Transportkette und nächstem Einsatz vorbereiten
- **Startmaterial:** Ableitung und Freigabe des initialen Materialbedarfs
- **Baustellenlogistik:** Lieferungen, Abholungen, Zeitfenster und Zugänge
- **Dispositionsmanager – Basis:** Kolonnen, Mitarbeiter, Fahrzeuge und Aktivitäten planen
- **Regelbasierte Assistenten:** frühe, nachvollziehbare Prüfungen und Hinweise bereits vor KI-Funktionen
- **Brain Bauleiter / Brain Vorarbeiter:** kontextbezogene operative Hinweise

Abhängigkeiten: Live-Baustelle benötigt Activity Engine und Timeline. Change Manager benötigt Aktivitäten und Baustellenakte. Dokumentencenter nutzt Quellen aus Baustellenakte und Change Manager. Materialfluss benötigt Material Intelligence; Disposition benötigt Ressourcen- und Materialverfügbarkeit. Regelbasierte Assistenten gehen lernenden KI-Funktionen voraus.

## Phase 3 – Unternehmensweite Steuerung

Ziel: Ressourcen, Sicherheit, Dokumente und kaufmännische Ergebnisse projektübergreifend steuern.

- **Lager:** Bestände, Reservierung, Kommissionierung, Rücknahme und Prüfung
- **Disposition – Optimierung:** Konflikte, Kapazität, Touren und Umplanung
- **Mitarbeiter und Qualifikationen:** verfügbare und geeignete Besetzung
- **Fahrzeuge:** Kapazität, Einsatz und Transportbezug
- **Brain Material:** Bedarf, Rücklauf und Prognosen
- **Brain Materialfluss:** einsatzübergreifende Transporte und Beladung
- **Brain Kommunikation:** gebündelte, kontextbezogene Klärungen
- **Brain Disposition:** Engpässe und erklärbare Planungsvorschläge
- **Brain Sicherheit:** adaptive Prüfungen, Risiken und Dokumentationslücken
- **Automatische Dokumententwürfe:** Tagesbericht, Materialliste, Aufmaß, Nachtrag, Gefährdungsbeurteilung und Montageanweisung
- **Unternehmensübersicht:** Pipeline, Leistung, Liquidität, Materialbindung, Auslastung und Risiken

Abhängigkeiten: Brain-Module benötigen fachlich freigegebene Daten ihres Moduls. Die Unternehmensübersicht folgt konsistenten operativen und kaufmännischen Statusmodellen.

## Vision – Digitales Betriebssystem

Ziel: Menschen durch erklärbare Automatisierung entlasten und den vollständigen Betriebsablauf verbinden.

- automatische Material- und Gerüsterkennung
- automatische Risiko- und Nachtragserkennung
- Material- und Kapazitätsprognosen
- KI-gestützte Kalkulation und Personalplanung
- durchgängiges Angebots-, Abschlags-, Rechnungs- und Forderungswesen
- kundenübergreifend lernende Modelle ausschließlich mit Zustimmung und Governance

Abhängigkeiten: Vision-Funktionen setzen ausreichend hochwertige, freigegebene Daten, messbare Prozesse, Rollen/Berechtigungen und menschliche Kontrollpunkte voraus.

## Reihenfolgeregeln

1. Erst gemeinsame Begriffe und Quellen, dann Automatisierung.
2. Erst Activity Engine und Timeline, dann Live-Baustelle und Change Manager.
3. Erst Materialfluss, dann belastbare Lager- und Materialprognosen.
4. Erst Rollen, Ressourcen und Verfügbarkeiten, dann Dispositionsoptimierung.
5. Erst geprüfte Fachprozesse, dann spezialisierte Brain-Module.
6. Erst operative Datenqualität, dann Unternehmenskennzahlen und Forecasts.
7. Erst regelbasierte Assistenten, dann lernende KI-Funktionen.
8. Die durch EPIC-002 revidierten Arbeitsbereiche strukturieren jede neue Oberfläche; historische Navigationsstände bleiben dokumentiert, sind aber nicht Zielarchitektur.
9. Arbeitsplatz und Heute werden aus denselben autorisierten Quellen abgeleitet; Kommunikationskanäle führen keine parallelen Aufgaben- oder Kalenderbestände.
10. Erst verbindliche, versionierte Activity-Templates und Firmen-Governance, dann automatische Template-Auswertung durch Brain.

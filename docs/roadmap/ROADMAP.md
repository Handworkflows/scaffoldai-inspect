# ScaffoldAI Roadmap

Stand: 7. August 2026

Die Roadmap leitet Produktbausteine aus W-001 und der Master Vision ab. Sie beschreibt fachliche Reihenfolge und Abhängigkeiten, keine verbindlichen Termine. Jede Phase liefert einen nutzbaren Stand; KI-Module folgen belastbaren Daten und menschlich geprüften Prozessen.

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
- [ ] **Timeline – Grundlagen:** chronologischer Projektverlauf aus referenzierten Ereignissen
- [ ] **Digitale Baustellenakte – Grundlagen:** gemeinsame Sicht auf Aktivitäten, Fotos, Notizen und Checklisten
- [ ] **Mobile Sprache:** Aufnahme, Transkription und Bestätigung als Notizquelle

Abhängigkeiten: Project Core vor Activity Engine; Activity Engine vor generischen Aktivitäten und Live-Baustelle.

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

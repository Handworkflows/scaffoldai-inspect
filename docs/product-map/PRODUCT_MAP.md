# ScaffoldAI Product Map

Stand: 7. August 2026

> **Zielarchitektur W-005:** Die verbindliche künftige Produktstruktur folgt den Arbeitsbereichen **Heute**, **Angebote**, **Einsatzvorbereitung**, **Betrieb**, **Mannschaft** und **Unternehmen**. Die nachfolgende lebenszyklusorientierte Modulkarte bleibt als fachliche Detaillierung erhalten; bei Navigations- oder Prozesskonflikten gilt [W-005](../workshops/W-005-workflow-operating-system/SUMMARY.md).

> **Aktuelle Revision W-007:** Die konkrete Zielnavigation lautet **Heute**, **Arbeitsplatz**, **Angebote**, **Einsatzvorbereitung**, **Projekte**, **Buchhaltung**, **Team** und **Unternehmen**. W-007 ergänzt den persönlichen Arbeitsplatz; die gemeinsame Vorgangs- und Activity-Architektur bleibt bestehen.

## Zielstruktur der Arbeitsbereiche

```text
Heute (rollenabhängige Activities)
  │
  ├── Angebote: Anfrage → Aufnahme → Angebot → Annahme
  ├── Einsatzvorbereitung: Voraussetzungen → Vorbereitungsgrad → Freigabe
  ├── Betrieb: Montage → Nutzung → Umbau → Abbau → Abrechnung → Archiv
  ├── Mannschaft: Menschen → Kolonnen → Fahrzeuge → Geräte → Verfügbarkeit
  └── Unternehmen: Material → Dokumente → Wissen → Auswertungen → Einstellungen
```

Alle Bereiche greifen auf dieselben Vorgänge und Activities zu. Sie sind keine getrennten Anwendungen und führen keine parallelen Workflows.

Die Umsetzung dieser Zielstruktur wird durch [EPIC-001 – Navigation & Workflow](../epics/EPIC-001-navigation-workflow.md) in die Tickets T-014.1 bis T-014.7 gegliedert.

| Arbeitsbereich | Enthält | Schließt aus | Umsetzung |
|---|---|---|---|
| Heute | heute relevante, rollenabhängige Activities und Entscheidungen | allgemeine Projektlisten | T-014.2 |
| Angebote | Anfragezustände, Angebotsaufnahme, Angebot, Warten und Annahme | laufende Baustellen | T-014.3 |
| Einsatzvorbereitung | bestätigte, noch nicht freigegebene Vorgänge und Vorbereitungsgrad | offene Angebote und laufende Montage | T-014.4 |
| Betrieb | Montage, Nutzung, Umbau, Abbau, Reklamation und Abrechnung | offene Angebote und ungeklärte Vorbereitung | T-014.5 |
| Mannschaft | Menschen, Kolonnen, Kalender, Fahrzeuge, Geräte und Qualifikationen | kaufmännische Vorgangsführung | T-014.6 |
| Unternehmen | Material, Dokumente, Wissen, Rechnungen, Auswertungen und Einstellungen | persönliche Tagessteuerung | T-014.7 |

T-014.1 stellt die gemeinsame Navigationsstruktur bereit. Die Bereichsinhalte bleiben Projektionen derselben Vorgänge und Activities.

## Aktuelle Zielstruktur nach EPIC-002

| Hauptbereich | Fachlicher Inhalt |
|---|---|
| Heute | rollenabhängige, heute relevante Activities und Entscheidungen |
| Arbeitsplatz | persönliche Kommunikation, Activities, Kalender, Wiedervorlagen, Benachrichtigungen und Hinweise |
| Angebote | unverbindliche Vertriebsvorgänge bis Annahme und Übernahme |
| Einsatzvorbereitung | bestätigte, noch nicht zur Montage freigegebene Vorgänge |
| Projekte | Kommend, Laufend, Abrechnung/Abgeschlossen und Archiv mit vollständiger Akte |
| Buchhaltung | Abschlags- und Schlussrechnungen, Nachträge, Forderungen und Abschlussarbeit |
| Team | Mitarbeitende, Kolonnen, Kalender, Fahrzeuge, Geräte und Qualifikationen |
| Unternehmen | Material, Dokumente, Wissen, Auswertungen und Einstellungen |

```text
Angebot
  → Einsatzvorbereitung
  → Projekt: Läuft
  → Buchhaltung: Abrechnung
  → Projekt: Abgeschlossen
  → Projekt: Archiviert
```

Projekte und Buchhaltung sind unterschiedliche Arbeitsbereiche auf derselben Akte. Rechnungen, Nachträge und Forderungen werden nicht aus dem Vorgang herauskopiert.

### Arbeitsplatz

Persönliche Projektion für jeden Mitarbeiter. Sie bündelt Kommunikationseingang, zugewiesene Activities, Freigaben, Wiedervorlagen, persönlichen Kalender, Benachrichtigungen und erklärbare Hinweise. Heute ist die priorisierte Teilmenge; der Arbeitsplatz ist der umfassendere persönliche Arbeitsraum.

Beziehungen: referenziert **Aktivitäten**, **Kommunikation**, **Kalender-/Einsatzdaten** und **Brain-Einträge** entsprechend Rolle und Verantwortlichkeit. Er speichert keine parallelen Aufgaben oder Vorgänge.

### Buchhaltung

Operativer kaufmännischer Arbeitsplatz für Bauleitung, berechtigte kaufmännische Rollen und Geschäftsführung. Er bündelt Rechnungs- und Forderungsstände sowie die zugehörigen Activities, ist aber keine vollständige Finanzbuchhaltung.

Beziehungen: nutzt Aufmaß, Mietmengen, Nachträge, Angebots-/Auftragsstand und Zahlungen; liefert den kaufmännischen Abschluss- und Archivierungsstand an die Projektakte.

### Archiv

Recherchebereich für geprüft archivierte Vorgänge. Archivierung entfernt einen Vorgang aus aktiven Sichten, erhält jedoch Identität, Akte, Historie und Suchbarkeit. Sie ist keine Löschung.

Die Product Map ordnet die fachlichen Module von ScaffoldAI entlang des Lebenszyklus eines Gerüstbauprojekts. Sie beschreibt Verantwortungsbereiche und Informationsflüsse, keine technische Implementierung.

## Gesamtbild

```text
CRM & Vertrieb
      │ Kundenanfrage
      ▼
Angebotswesen ───────────────┐
      │ Auftrag              │ Kalkulation / Nachträge
      ▼                      │
Projekte ◄───────────────────┘
      │ zentrale Identität, Kunde, Adresse, Status, Leistungen
      ▼
Digitale Baustellenakte
      ├── Aktivitäten / Activity Engine
      │     └── Baustellenbesuche und situationsabhängige Workflows
      ├── Fotos, Notizen, Timeline und Dokumente
      ├── Änderungen, Nachträge und Behinderungen
      └── Aufmaß und Leistungsstand
      │
      ├────────► Material ◄──── Lager
      │              ├── Material Intelligence
      │              └── Materialfluss / einsatzbezogene Beladung
      │
      └────────► Disposition
                       ├── Kolonnen / Mitarbeiter
                       ├── Fahrzeuge
                       └── Baustellenlogistik

Brain-Module nutzen den gemeinsamen Kontext aller Module und liefern Hinweise zurück.
Kommunikation verbindet als Querschnittsfunktion alle Module und dokumentiert Klärungen an ihrer fachlichen Quelle.
Administration steuert Stammdaten, Rollen und Module.
Geschäftsführung verdichtet operative Daten zu Steuerungsinformationen.
```

## Module

### CRM & Vertrieb

Verwaltet Interessenten, Kunden, Ansprechpartner, Anfragen und vertriebliche Aktivitäten. Eine qualifizierte Anfrage bildet den Ausgangspunkt für Angebotswesen und Projektanlage.

Beziehungen: liefert Kunden- und Anfragedaten an **Angebotswesen** und **Projekte**; erhält Status, Chancen und Folgeaktivitäten zurück.

### Angebotswesen

Erfasst Leistungsumfang, Baustellensituation, Mengen, Risiken und Kalkulationsgrundlagen. Erstellt Angebote und überführt angenommene Angebote ohne erneute Dateneingabe in Projekte.

Beziehungen: nutzt **CRM**, Angebotsaufnahmen aus **Aktivitäten**, Preise und Materialdaten; liefert Auftrag, Leistungen und Planwerte an **Projekte**.

### Projekte

Stellt die fachliche Klammer für Kunde, Adresse, Projektart, Leistungen, Status und Verantwortlichkeiten bereit. Jede weitere Information wird eindeutig einem Projekt zugeordnet.

Beziehungen: verbindet alle operativen Module und ist Einstiegspunkt in die **digitale Baustellenakte**.

### Digitale Baustellenakte

Ist die zentrale, chronologische und unveränderbar nachvollziehbare Projektquelle. Sie verbindet Planung, Aktivitäten, Fotos, Notizen, Entscheidungen, Materialbewegungen, Dokumente, Nachträge und Abrechnungskontext.

Beziehungen: nimmt Ereignisse aus sämtlichen Modulen auf und versorgt **Brain**, **Dokumente** und **Geschäftsführung** mit Kontext.

### Baustellenbesuche

Sind terminierte Vor-Ort-Aktivitäten, etwa Angebotsaufnahme, Montage, Kontrolle, Aufmaß, Nachtrag, Umbau oder Abbau. Sie bleiben als fachliche Spezialisierung von Aktivitäten erhalten.

Beziehungen: werden durch die **Activity Engine** gesteuert und erzeugen Inhalte für **Baustellenakte**, **Dokumente**, **Material** und **Brain**.

### Aktivitäten

Verallgemeinern jeden relevanten Vorgang: Vor-Ort-Besuch, Telefonat, Lieferung, Freigabe, Behinderung, Prüfung oder Dokumenterstellung. Die Activity Engine löst anhand von Arbeitsart, Projektleistungen und Kontext die verbindlichen [Activity-Templates](../workshops/W-008-activity-templates/SUMMARY.md) auf. Templates bereiten dieselbe Activity vor und bilden kein separates Workflow-Modul.

Beziehungen: verbindet zeitliche Ereignisse mit Projekt, Rollen, Ressourcen und Ergebnissen; speist die **Timeline**.

### Dokumente

Verwaltet Eingangs-, Arbeits- und Ergebnisdokumente wie Gefährdungsbeurteilung, Montageanweisung, Tagesbericht, Aufmaß, Nachtrag und Materialliste einschließlich Version und Freigabe.

Beziehungen: entsteht aus Daten der **Baustellenakte** und liefert freigegebene Ergebnisse an Ausführung, Kunden und Abrechnung.

### Material

Verbindet Material Intelligence, Materialfluss, einsatzbezogene Materialplanung und einsatzbezogene LKW-Beladung. Es beschreibt Bedarf, Startmaterial, geplante und tatsächliche Mengen, Rücklauf, Schäden und Prognosen auf Projekt- und Aktivitätsebene. Material wird für den nächsten Einsatz geplant und geladen, nicht isoliert für eine Baustelle.

Beziehungen: gleicht Bedarf mit **Lager** ab, beauftragt **Disposition** und erhält Ist-Daten aus Baustellenaktivitäten. Der Materialfluss verbindet aufeinanderfolgende Einsätze und vermeidet unnötige Lageraufenthalte.

### Lager

Verwaltet Bestände, Reservierungen, Kommissionierung, Rücknahmen, Prüfung und Verfügbarkeit.

Beziehungen: stellt Material für Projekte bereit und aktualisiert Bestände durch den **Materialfluss**.

### Disposition

Plant Termine, Kolonnen, Mitarbeiter, Fahrzeuge, Material und Transporte. Konflikte und Änderungen werden als Entscheidungen nachvollziehbar dokumentiert.

Beziehungen: nutzt Projektpriorität, Materialverfügbarkeit und Qualifikationen; steuert **Baustellenlogistik**, **Mitarbeiter** und **Fahrzeuge**.

### Mitarbeiter

Verwaltet Rolle, Qualifikation, Verfügbarkeit und Zuordnung zu Kolonnen und Aktivitäten, soweit dies für sichere Planung und Ausführung erforderlich ist.

Beziehungen: wird von **Disposition** geplant und erzeugt Rückmeldungen über Aktivitäten.

### Fahrzeuge

Verwaltet Typ, Kapazität, Verfügbarkeit, Einsatz und Transportbezug.

Beziehungen: verbindet **Disposition**, **Lager**, Materialfluss und Baustelle.

### Baustellenlogistik

Bündelt die Voraussetzungen für einen durchführbaren Baustelleneinsatz: Zufahrt, Parkplatz, Halteverbot, Sondernutzung, Kran, Materialtransport, Laufwege, Dixi sowie Reinigung vor Abbau. Offene oder ungeklärte Voraussetzungen fließen in die Baustellen-Readiness ein.

Beziehungen: liefert Restriktionen und Freigaben an **Disposition**, **Material**, **Fahrzeuge** und **Aktivitäten**; erhält Termin-, Konstruktions- und Baustellenkontext aus dem Projekt.

### Kommunikation

Ist eine Querschnittsfunktion und ein kanonneutraler Eingang für E-Mail, Telefonnotiz und Rückrufbitte. Nachrichten bleiben als Quellen nachvollziehbar; Handlungsbedarf wird als Activity geführt. Direkte Microsoft-365-Anbindung und Weiterleitungsmodus münden in dasselbe Eingangsmodell.

Beziehungen: verbindet Absender, Empfänger, Vorgang, Aktivität und Anhänge, ohne deren fachliche Daten zu duplizieren. Macht Klärungsbedarf für **Arbeitsplatz**, **Heute**, **Baustellen-Readiness** und **Brain** sichtbar.

### Brain

Ist die kontextbezogene Entscheidungshilfe. Spezialisierte Brains bewerten gemeinsame Projektdaten aus Sicht ihrer Rolle, erklären Hinweise und schlagen nächste Schritte vor. Entscheidungen bleiben beim Menschen.

Beziehungen: liest autorisierte Daten aller Module und schreibt Hinweise, Risiken und Empfehlungen als nachvollziehbare Einträge zurück.

### Administration

Verwaltet Organisation, Rollen, Berechtigungen, Stammdaten, Vorlagen, Workflows, Integrationen und aktivierte Module.

Beziehungen: definiert den organisatorischen Rahmen für alle Module, greift aber nicht in fachliche Entscheidungen ein.

### Geschäftsführung

Verdichtet Projekt-, Leistungs-, Material-, Kapazitäts- und Risikodaten zu einem unternehmensweiten Überblick.

Beziehungen: nutzt freigegebene Kennzahlen aus operativen Modulen und gibt Prioritäten an Vertrieb, Bauleitung und Disposition zurück.

## Übergreifende Regeln

- Jede Information besitzt eine eindeutige fachliche Quelle.
- Projekt und Aktivität bilden die primären Kontexte.
- Module referenzieren Informationen, statt sie zu kopieren.
- Jede Änderung erzeugt einen nachvollziehbaren Timeline-Eintrag.
- Automatisch erzeugte Ergebnisse benötigen eine erkennbare Quelle und gegebenenfalls menschliche Freigabe.
- Module können unabhängig aktiviert werden, müssen gemeinsame Begriffe und Beziehungen einhalten.
- Activity-Templates werden aus Systemstandard, Leistungs-/Kontext-Overlays und freigegebenen Firmenanpassungen additiv kombiniert; Konflikte werden sichtbar geklärt.

# ScaffoldAI Product Map

Stand: 6. August 2026

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

Verallgemeinern jeden relevanten Vorgang: Vor-Ort-Besuch, Telefonat, Lieferung, Freigabe, Behinderung, Prüfung oder Dokumenterstellung. Die Activity Engine wählt anhand von Typ, Phase und Kontext den passenden Workflow.

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

Ist eine Querschnittsfunktion für vorbereitete, kontextbezogene Abstimmungen. Anfragen, Antworten, Entscheidungen und offene Klärungen werden an Projekt, Aktivität oder fachlicher Quelle nachvollziehbar, damit Informationen nicht mehrfach erfasst und ungeplante Telefonate reduziert werden.

Beziehungen: verbindet alle Module, ohne deren fachliche Daten zu duplizieren, und macht Klärungsbedarf für **Baustellen-Readiness** und **Brain** sichtbar.

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

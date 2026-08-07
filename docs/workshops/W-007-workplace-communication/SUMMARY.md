# W-007 – Arbeitsplatz & Kommunikation

- **Stand:** 7. August 2026
- **Status:** Fachlich beschlossen
- **Zweck:** persönlicher, rollenabhängiger Arbeitsraum für Kommunikation, Aufgaben, Kalender und Hinweise
- **Grundlagen:** W-005 Workflow Operating System, W-006 Rollen & Berechtigungen, Activity Engine
- **Abgrenzung:** keine Implementierung, kein Ersatz für Outlook oder Teams

## Leitentscheidung

Jeder Mitarbeiter besitzt einen persönlichen **Arbeitsplatz**. Er bündelt autorisierte persönliche Informationen und Arbeit aus verschiedenen Quellen, führt aber weder einen eigenen Workflow noch eigene Kopien von E-Mails, Vorgängen, Terminen oder Activities.

Der Arbeitsplatz beantwortet:

1. Welche Kommunikation benötigt meine Aufmerksamkeit?
2. Welche Activities sind mir zugewiesen?
3. Welche Termine und Wiedervorlagen betreffen mich?
4. Welche Freigaben warten auf mich?
5. Welche Hinweise, Warnungen oder Empfehlungen sind für meine Arbeit relevant?

## Aktuelle Zielnavigation

W-007 ergänzt die durch EPIC-002 revidierte Navigation:

```text
Heute
Arbeitsplatz
──────────────
Angebote
Einsatzvorbereitung
──────────────
Projekte
Buchhaltung
──────────────
Team
Unternehmen
```

**Heute** bleibt die priorisierte Sicht auf heute relevante Arbeit. **Arbeitsplatz** ist der breitere persönliche Arbeitsraum einschließlich Eingang, Aufgabenbestand, Kalender und persönliche Hinweise. Beide sind Sichten auf dieselben Quellen.

## Bestandteile des Arbeitsplatzes

### Kommunikation

- E-Mail-Eingänge und zugeordnete Nachrichten
- Telefonnotizen
- Rückrufbitten
- relevante Benachrichtigungen

Kommunikation besitzt keinen eigenen fachlichen Workflow. Ein kommunikationsbedingter Handlungsbedarf erzeugt oder aktualisiert eine Activity.

### Aufgaben

- persönliche Activities
- offene Aufgaben
- wartende Freigaben
- Wiedervorlagen

Eine „Aufgabe“ ist weiterhin eine einfache Activity beziehungsweise eine nutzernahe Darstellung davon. Der Arbeitsplatz führt keinen zweiten Aufgabenbestand.

### Kalender

- persönlicher Kalender
- Jour fixe
- Urlaub und Krankheit
- Kunden- und interne Termine
- Baustelleneinsätze und -besuche
- Rückrufe und Wiedervorlagen

Der Kalender ist eine zeitliche Projektion von Activities, Einsätzen und Abwesenheiten. Änderungen werden an der fachlichen Quelle gespeichert.

### Persönliche Hinweise

- Hinweise
- Empfehlungen
- Warnungen
- begründete Prioritäten

Brain bleibt interner Produktname. Nutzer sehen konkrete, erklärbare Ausgaben. Hinweise referenzieren ihre Quellen und erzeugen erst nach menschlicher Bestätigung neue oder veränderte Activities.

## Kommunikation und Activity Engine

```text
externer oder interner Eingang
→ fachlichen Kontext vorschlagen oder bestätigen
→ Activity erstellen / zuordnen / aktualisieren
→ in Arbeitsplatz und gegebenenfalls Heute anzeigen
→ Arbeit ausführen und Ergebnis dokumentieren
→ Vorgangsverlauf referenziert Quelle und Activity
```

Eine Nachricht selbst kann als unveränderte Kommunikationsquelle erhalten bleiben. Die zu erledigende Arbeit ist die Activity. „Gelesen“, „beantwortet“ und „fachlich erledigt“ dürfen nicht automatisch gleichgesetzt werden.

## E-Mail-Betriebsarten

### Variante A – Microsoft-365-/Outlook-Anbindung

- optional je Mandant beziehungsweise Organisation
- OAuth-basierte Autorisierung
- mandantengetrennte Konfiguration und Verarbeitung
- minimal notwendige Berechtigungsbereiche
- widerrufbare Verbindung
- nachvollziehbare Synchronisations- und Verarbeitungsereignisse

Die genaue technische Graph-/Outlook-Integration ist ein Folgethema. W-007 legt keine dauerhafte Vollpostfachkopie fest.

### Variante B – Weiterleitungsmodus

- gleichwertig unterstützter Betriebsmodus
- Kunde richtet eine Weiterleitung an eine ScaffoldAI-Eingangsadresse ein
- mögliche Adressen sind beispielsweise persönliche oder vorgangsbezogene Eingänge
- kein direkter Zugriff auf das Outlook-Postfach erforderlich

ScaffoldAI muss ohne Microsoft-365-Anbindung vollständig nutzbar bleiben. Funktionen dürfen den Weiterleitungsmodus nicht künstlich zu einem Zweitklassweg machen; kanalspezifische Unterschiede müssen transparent benannt werden.

## Verarbeitung eingehender E-Mails

ScaffoldAI darf Vorschläge ableiten für:

- Kunde und Ansprechpartner
- Vorgang, Projekt oder Angebot
- Anhänge und Dokumentart
- Termin oder Wiedervorlage
- Rückrufbedarf
- Materialbedarf
- Rechnung oder Nachtrag
- verantwortliche Person

Automatische Erkennung erzeugt zunächst einen Vorschlag mit Quelle und Unsicherheit. Ein Mensch bestätigt Zuordnung, Activity, Termin oder externe Antwort. Ohne ausreichenden Kontext bleibt der Eingang ungeklärt; er wird nicht still einem Vorgang zugeschrieben.

## Anhänge

Fotos, PDFs, Pläne, Lieferscheine, Rechnungen und Aufmaße bleiben als referenzierte Kommunikationsanhänge nachvollziehbar. Nach bestätigter Zuordnung können sie zusätzlich im passenden Dokument- oder Vorgangsbereich sichtbar werden, ohne eine fachlich unabhängige Kopie zu erzeugen.

Mindestens festzuhalten sind Quelle, Eingangszeit, Absender, ursprünglicher Dateiname, Medientyp, Zuordnung, verarbeitende Person und gegebenenfalls Prüfergebnis. Schadsoftwareprüfung, Größenlimits, Dateitypen und Aufbewahrung werden technisch separat spezifiziert.

## Telefonnotiz und Rückruf

Pflichtangaben:

- Kunde beziehungsweise noch ungeklärter Kontakt
- Telefonnummer
- Zeitpunkt
- Ansprechpartner
- Thema
- Dringlichkeit
- Rückruf bis
- verantwortliche Person
- Vorgangsbezug, sofern bekannt

```text
Büro erfasst Telefonnotiz
→ Rückruf-Activity wird verantwortlichem Bauleiter zugewiesen
→ erscheint in Arbeitsplatz und bei heutiger Relevanz auf Heute
→ Bauleiter führt Rückruf aus
→ Ergebnis oder Folgeaktivität dokumentieren
→ Activity abschließen
```

Die Telefonnotiz ersetzt das zusätzliche interne Abstimmungstelefonat, nicht die fachliche Entscheidung des Bauleiters.

## Kalenderregeln

- Ein Termin kann aus Activity, E-Mail, Telefonnotiz, Baustellenbesuch, Jour fixe oder Wiedervorlage entstehen.
- „In Kalender übernehmen“ terminiert eine vorhandene Activity oder erzeugt nach Bestätigung eine verknüpfte Activity.
- Ein Termin besitzt Quelle, verantwortliche beziehungsweise teilnehmende Personen, Zeit, Sichtbarkeit und optionalen Vorgangsbezug.
- Verschiebung im Kalender aktualisiert die Quelle oder erzeugt ein nachvollziehbares Änderungsereignis.
- Externe Kalender-Synchronisation ist optional und darf keine zweite fachliche Terminwahrheit erzeugen.

## Abgrenzung Heute und Arbeitsplatz

| Heute | Arbeitsplatz |
|---|---|
| nur heute beziehungsweise jetzt relevante Arbeit | vollständiger persönlicher Arbeitsraum |
| stark priorisiert | nach Kommunikation, Aufgaben, Kalender und Hinweisen strukturiert |
| wenige nächste Handlungen | Eingang, Bestand, Suche und Planung |
| keine allgemeine Inbox | enthält persönlichen Kommunikationseingang |

Ein Eintrag kann gleichzeitig im Arbeitsplatz und auf Heute sichtbar sein. Das ist keine Datenkopie, sondern dieselbe Activity in zwei Projektionen.

## Rollenbezug

- **Geschäftsführung:** persönliche Freigaben, wichtige Kommunikation, Termine, Entscheidungen und organisationsweite Eskalationen
- **Bauleiter:** eigene Vorgänge, E-Mails, Rückrufe, Aufgaben, Freigaben, Termine und Baustellenhinweise
- **Büro:** eingehende Kommunikation, ungeklärte Zuordnung, Telefonnotizen, Terminpflege und Zuweisung
- **Disposition:** persönliche Planungsaufgaben, Konflikte, Ausfälle und Ressourcentermine
- **Vorarbeiter:** eigene Einsätze, operative Rückfragen, Termine, Materialanforderungen und Hinweise
- **Mitarbeiter:** eigene Aufgaben, Termine, Unterweisungen und persönliche Mitteilungen

Sichtbarkeit und Aktionen folgen W-006. Eine Benachrichtigung darf über Titel, Vorschau, Zähler oder Suche keine Informationen aus einem unberechtigten Vorgang offenlegen.

## Benachrichtigungen

Benachrichtigungen sind Hinweise auf relevante Zustandsänderungen, keine eigene Arbeit und kein eigener Verlauf. Sie referenzieren Activity oder Quelle. Deduplizierung, Lesestatus und persönliche Einstellungen dürfen die fachliche Activity nicht verändern.

Benachrichtigungen sollen insbesondere entstehen bei neuer Zuweisung, Frist, Antwort, Freigabebedarf, Blockade oder wesentlicher Änderung. Reine technische Ereignisse ohne Handlungswert gehören nicht in den persönlichen Arbeitsplatz.

## Brain-Unterstützung

Später mögliche, stets erklärbare Funktionen:

- E-Mail zusammenfassen
- Antwortentwurf vorbereiten
- Termine und Ansprechpartner erkennen
- Materialbedarf und Aufgaben vorschlagen
- persönliche Arbeit priorisieren

Brain sendet keine externe Kommunikation, bestätigt keine Termine und erzeugt keine verbindlichen Activities ohne Nutzerbestätigung. Entwürfe bleiben als Entwürfe erkennbar.

## Datenschutz und Sicherheit

- direkte Outlook-Anbindung ist optional; Weiterleitung ist gleichwertig vorgesehen
- Verarbeitung erfolgt mandantengetrennt und zweckgebunden
- nur für die konkrete Arbeit erforderliche Postfach- und Nachrichtendaten werden verarbeitet
- Zugriffe, Zuordnungen, Exporte und externe Sendungen sind nachvollziehbar
- Verbindungswiderruf muss möglich sein, ohne die fachliche Nutzbarkeit des Arbeitsplatzes zu zerstören
- Aufbewahrung von Originalnachrichten und Anhängen wird je Zweck und Rechtsgrundlage festgelegt
- persönliche und private Inhalte dürfen nicht durch unternehmensweite Suche oder Vorschauen offengelegt werden
- externe Kommunikation erfolgt ausschließlich nach einer bewussten Benutzeraktion

## Architekturprinzipien

1. Arbeitsplatz, Heute und Kalender sind Projektionen, keine Datenquellen.
2. Kommunikation erzeugt beziehungsweise beeinflusst Activities, besitzt aber keinen eigenen Workflow.
3. Originalnachricht, Activity, Fachobjekt und Verlaufseintrag bleiben unterscheidbar und referenziert.
4. Ein Vorgang und eine Activity behalten über alle Sichten stabile Identitäten.
5. Automatische Zuordnung ist ein bestätigungspflichtiger Vorschlag.
6. Outlook-Anbindung und Weiterleitung münden in dasselbe kanonneutrale Eingangsmodell.
7. Keine automatische externe Kommunikation.
8. Rollen- und Mandantengrenzen gelten bereits für Suche, Vorschauen, Zähler und Benachrichtigungen.

## Fachliches Zielmodell

```text
Person ──< persönlicher Arbeitsplatz (Projektion)
                ├── Kommunikationseingang ──< Nachricht / Telefonnotiz
                ├── Aufgaben ───────────────< Activity
                ├── Kalender ───────────────< Activity / Einsatz / Abwesenheit
                └── Hinweise ───────────────< Brain-Eintrag / Benachrichtigung

Nachricht ── Quelle für ──> Activity ── gehört zu ──> Vorgang
     └──< Anhang                         └──> Verlaufseintrag
```

## Konsequenzen für Folgetickets

Jedes Arbeitsplatz- oder Kommunikations-Ticket muss festlegen:

1. Quelle und Kanal,
2. persönliche Sichtbarkeit und Rolle,
3. erzeugte oder aktualisierte Activity,
4. Bestätigungspunkt des Menschen,
5. Vorgangszuordnung und Umgang mit Unklarheit,
6. Kalender- und Heute-Wirkung,
7. Anhänge und Aufbewahrung,
8. Audit- und Datenschutzereignisse,
9. Verhalten ohne Outlook-Anbindung.

## Bewusst offen

- technische Provider- und OAuth-Architektur
- Adressierungsmodell im Weiterleitungsmodus
- Regeln für Threading, Dubletten und Antworten
- Aufbewahrungsfristen und Löschkonzept für Originalnachrichten
- Spam-, Malware- und Dateiprüfung
- Offline-Verhalten und mobile Push-Benachrichtigungen
- genaue Grenze zwischen persönlicher und geteilter Kommunikation

## Verknüpfte Dokumente

- [Product Map](../../product-map/PRODUCT_MAP.md)
- [Domänenmodell](../../architecture/DOMAIN_MODEL.md)
- [Rollenmodell](../../roles/ROLE_MODEL.md)
- [Domain Language Dictionary](../../knowledge/DOMAIN_LANGUAGE.md)
- [Roadmap](../../roadmap/ROADMAP.md)
- [Activity Engine](../../specs/PS-001-Activity-Engine.md)
- [W-005 – Workflow Operating System](../W-005-workflow-operating-system/SUMMARY.md)
- [W-006 – Rollen & Berechtigungen](../W-006-roles-permissions/SUMMARY.md)

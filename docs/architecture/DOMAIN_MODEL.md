# Fachliches Domänenmodell

Dieses Dokument beschreibt die aus W-001 bis W-005 abgeleiteten fachlichen Begriffe und Beziehungen. Es ist bewusst unabhängig von Datenbank, API und konkreter Implementierung. Die vollständigen Regeln der Aktivität definiert [PS-001](../specs/PS-001-Activity-Engine.md); die verbindliche Bereichs- und Vorgangsarchitektur definiert [W-005](../workshops/W-005-workflow-operating-system/SUMMARY.md).

## Modellübersicht

```text
Kunde ──< Vorgang ──< Aktivität ──< Timeline-Eintrag
                 │        │
                 │        ├── Besuch
                 │        ├── Dokument
                 │        ├── Nachtrag
                 │        ├── Behinderung
                 │        ├── Brain-Eintrag
                 │        └── Materialbewegung
                 │
                 ├──< Dokument
                 ├──< Materialbedarf / Materialbewegung >── Material
                 ├──< Kolonneneinsatz >── Kolonne ──< Mitarbeiter
                 └──< Fahrzeugeinsatz >── Fahrzeug
```

## Vorgang

Die stabile fachliche Identität vom ersten Kundenkontakt bis zum Archiv. Anfrage, Angebot, übernommenes Projekt und laufende Baustelle sind Zustände beziehungsweise Sichten desselben Vorgangs. Bereichswechsel erzeugen keine Kopie. Der Vorgang hält Kunde, Baustelle, Herkunft und Referenzen auf Activities sowie dauerhafte fachliche Stände zusammen.

## Projekt

Der verbindliche Zustand eines Vorgangs nach Annahme und Übernahme des Angebots. Er besitzt Auftrag, Leistungen, Verantwortlichkeiten und verbindliche Planungswirkung. Das Projekt ist keine neue Akte und keine Kopie des Angebots.

## Lebenszyklusstatus

Ordnet den gesamten Vorgang eindeutig in Angebot, Einsatzvorbereitung, Läuft, Abrechnung, Abgeschlossen oder Archiviert ein. Er ist gröber als eine konkrete Betriebsphase und unabhängig von Angebots-, Rechnungs-, Dokument- und Activity-Status.

Operativer Abschluss und kaufmännischer Abschluss sind verschiedene fachliche Tatsachen. Archivierungsbereitschaft ist ein abgeleitetes Prüfergebnis; Archivierung selbst ist eine berechtigte Entscheidung.

## Aktivität

Ein zeitlich einordenbarer Vorgang mit Zweck, Typ, Status, Verantwortlichkeit, Priorität, Zeitbezug, Readiness und Ergebnis. Beispiele sind Baustellenbesuch, Telefonat, Lieferung, Kontrolle, Freigabe, Aufmaß oder Dokumentprüfung. Der fachliche Lebenszyklus unterscheidet Entwurf, geplant, vorbereitet, disponiert, unterwegs, begonnen, wartet, pausiert, abgeschlossen und storniert. Nicht jeder Aktivitätstyp verwendet jeden Status.

Beziehungen: gehört zu genau einem Projekt; kann Beteiligte, Kolonne, Fahrzeug, Material, Dokumente, Nachträge, Behinderungen und Brain-Einträge referenzieren; steht über explizite Voraussetzung-, Folge-, Blockade-, Korrektur- oder Nachweisbeziehungen mit anderen Aktivitäten in Verbindung; erzeugt Timeline-Einträge.

## Besuch

Eine Spezialisierung der Aktivität mit Termin und Vor-Ort-Kontext. Die Besuchsart bestimmt den initialen Workflow, darf aber spätere Änderungen und zusätzliche Schritte zulassen. Fotos, Notizen, Checklisten und Aufmaß gehören fachlich zur Aktivität und damit zum Besuchskontext.

## Activity-Template

Eine versionierte fachliche Definition zur Vorbereitung einer Activity. Sie beschreibt typabhängige Felder, Checklistenpunkte, Dokumentanforderungen, Standardwerte und mögliche Folgeactivities. Arbeitsart-, Leistungs-, Kontext- und Firmen-Templates werden additiv aufgelöst.

Das Template besitzt keinen operativen Status und ist keine Activity. Die konkrete Erfüllung, Entscheidung und Historie gehören zur erzeugten Activity beziehungsweise zum referenzierten Fachobjekt. Systemstandard und Firmen-Overlay bleiben unterscheidbar. Verbindliche Regeln definiert [W-008](../workshops/W-008-activity-templates/SUMMARY.md).

## Material

Ein identifizierbarer Materialtyp oder Artikel mit Einheit und gegebenenfalls Hersteller-/Systembezug. Bedarf, Reservierung, Ausgabe, Lieferung, Verbau, Rücklauf und Schaden werden als Bewegungen oder Zustände geführt, nicht durch Überschreiben einer einzigen Menge.

Beziehungen: Materialbewegungen verbinden Projekt, Aktivität, Lager, Fahrzeug und gegebenenfalls verantwortliche Person.

## Kolonne

Eine für einen Zeitraum zusammengestellte operative Einheit mit Vorarbeiter und Mitarbeitenden. Die Zusammensetzung kann sich verändern und wird deshalb zeitbezogen dokumentiert.

Beziehungen: wird Aktivitäten und Projekten disponiert; nutzt Fahrzeuge und Material; erzeugt Rückmeldungen über Fortschritt, Bedarf und Behinderungen.

## Mitarbeiter

Eine Person mit Rolle, Qualifikationen, Verfügbarkeit und organisatorischer Zuordnung. Personenbezogene Daten werden auf den notwendigen Zweck begrenzt.

Beziehungen: kann Mitglied einer Kolonne, verantwortlich für eine Aktivität oder Freigebender eines Dokuments sein.

## Rolle und Berechtigung

Eine Rolle bündelt fachliche Verantwortung und zulässige Aktionen. Eine Berechtigung verbindet Rolle beziehungsweise Person, Aktion, Gegenstand, Reichweite und gegebenenfalls Vorgangszustand. Rollen verändern nicht die Identität oder Datenhaltung eines Vorgangs.

Beziehungen: Personen besitzen zeitlich gültige Rollenzuweisungen; Activities besitzen Verantwortliche; Freigaben dokumentieren Person, wirksame Rolle, Gegenstandsversion und Zeitpunkt. Die normative Matrix definiert [W-006](../workshops/W-006-roles-permissions/SUMMARY.md).

## Fahrzeug

Eine disponierbare Ressource mit Typ, Kapazität, Status und Verfügbarkeit. Ein Fahrzeugeinsatz verbindet Transport, Aktivität, Kolonne und Materialbewegungen.

## Dokument

Ein versioniertes Informationsobjekt mit Typ, Status, Quelle, Gültigkeit und Freigabe. Dokumente können erfasst, aus strukturierten Daten erzeugt oder extern empfangen werden. Ein neuer Stand ersetzt nicht die Nachvollziehbarkeit früherer freigegebener Versionen.

## Nachtrag

Eine erkannte mögliche Leistungsänderung mit Ursache, Beschreibung, Nachweisen, Mengen, Bewertung, Freigabe und Abrechnungsstatus. Der Status trennt Vermutung, Prüfung, Angebot, Beauftragung, Ausführung und Abrechnung.

Beziehungen: wird aus einer oder mehreren Aktivitäten abgeleitet und referenziert Fotos, Notizen, Aufmaß, Kommunikation und Dokumente.

## Behinderung

Ein Ereignis oder Zustand, der geplante Arbeit verhindert oder verzögert. Es besitzt Beginn, Ende, Ursache, Verantwortungsbereich, Auswirkung, Maßnahmen und Nachweise.

Beziehungen: betrifft Projekt und Aktivität, kann Disposition verändern, einen Nachtrag begründen und Dokumente erzeugen.

## Brain

Ein nachvollziehbarer Hinweis, ein Risiko oder eine Empfehlung auf Basis autorisierter Domänendaten. Ein Brain-Eintrag dokumentiert Kontext, Priorität, Status und Begründung. Er ist kein bindender Entschluss.

## Persönlicher Arbeitsplatz

Eine rollen- und personenbezogene Projektion autorisierter Kommunikation, Activities, Kalenderdaten, Wiedervorlagen, Benachrichtigungen und Hinweise. Der Arbeitsplatz besitzt keinen eigenen fachlichen Arbeitsbestand. Heute ist die priorisierte, zeitlich engere Projektion derselben Quellen.

## Nachricht und Kommunikationseingang

Eine Nachricht ist eine eingegangene oder ausgehende Kommunikationsquelle mit Kanal, Absender, Empfängern, Zeitpunkt, Inhalt, Anhängen und Zuordnungsstand. E-Mail und Telefonnotiz sind Kanal- beziehungsweise Quelltypen, keine eigenen Prozessmodelle.

Beziehungen: eine Nachricht kann einem Vorgang und einer oder mehreren Activities zugeordnet werden; Anhänge bleiben an ihrer Quelle referenziert. Unbestätigte automatische Zuordnungen sind Vorschläge und keine fachlichen Tatsachen.

## Benachrichtigung

Ein persönlicher Hinweis auf eine relevante Zustandsänderung, Zuweisung, Frist, Antwort, Freigabe oder Blockade. Sie referenziert ihre Quelle und ist weder Activity noch eigener Verlauf. Lesestatus und persönliche Einstellungen verändern die fachliche Quelle nicht.

## Timeline

Die chronologische Sicht auf fachlich relevante Ereignisse. Ein Timeline-Eintrag verweist auf seine Quelle, statt deren Inhalt zu duplizieren. Beispiele: Statuswechsel, Besuch abgeschlossen, Foto ergänzt, Material geliefert, Behinderung gemeldet, Dokument freigegeben oder Empfehlung bestätigt.

## Invarianten

- Jede Entität besitzt eine stabile ID.
- Ein Bereichswechsel verändert den Zustand eines Vorgangs, niemals seine Identität.
- Anfrage, Angebot und Projekt werden nicht als unabhängige Akten dupliziert.
- Operativer Abschluss, kaufmännischer Abschluss, Archivierungsbereitschaft und Archivierung bleiben getrennte Konzepte.
- Archivierung erhält Identität und Historie und ist keine Löschung.
- Jede Aktivität gehört genau einem Vorgang; vor Projektübernahme kann dieser noch unverbindlich sein.
- Ein Besuch ist eine Aktivität; nicht jede Aktivität ist ein Besuch.
- Historische Fakten werden ergänzt oder versioniert, nicht still überschrieben.
- Timeline-Einträge referenzieren ihre Quelle.
- Brain-Ausgaben bleiben von menschlichen Entscheidungen unterscheidbar.
- Arbeitsplatz, Heute, Kalender und Benachrichtigungen sind Projektionen beziehungsweise Hinweise, keine parallelen Arbeitsbestände.
- Kommunikation erzeugt keine eigene Workflowlogik; fachliche Arbeit wird als Activity geführt.
- Externe Kommunikation wird nicht ohne bewusste Benutzerfreigabe versendet.
- Automatische Nachrichten- und Vorgangszuordnungen bleiben bis zur Bestätigung als Vorschlag erkennbar.
- ScaffoldAI bereitet Entscheidungen vor und unterstützt sie; es ersetzt keinen Bauleiter.
- Rollen, Zeit und Status sind bei disponierten Ressourcen explizit.
- Sichtbarkeit, Bearbeitungsrecht, Zuweisung, Freigabe und fachliche Verantwortung bleiben getrennte Konzepte.
- Administration erteilt keine implizite Fachfreigabe.
- Status, Readiness, Priorität und Ergebnis einer Aktivität bleiben getrennte Konzepte.
- Eine abgeschlossene Aktivität besitzt ein dokumentiertes Ergebnis; Korrekturen und Folgearbeit bleiben historisch nachvollziehbar.
- Timeline, Baustellenakte und „Heute“ referenzieren Aktivitäten, statt parallele Prozessbestände aufzubauen.
- Die Activity Engine ist die einzige Prozesslogik; Bereichsstände und Vorbereitungsgrad sind Projektionen ihrer Quellen und Ergebnisse.
- Activity-Templates konfigurieren Activities, führen aber keinen eigenen Arbeitsbestand oder Prozessstatus.
- Mehrere Leistungs-Templates werden additiv kombiniert; Systempunkte werden nicht still überschrieben.

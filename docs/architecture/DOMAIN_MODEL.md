# Fachliches Domänenmodell

Dieses Dokument beschreibt die aus W-001 abgeleiteten fachlichen Begriffe und Beziehungen. Es ist bewusst unabhängig von Datenbank, API und konkreter Implementierung. Das bestehende Software-Datenmodell wird durch T-007 nicht verändert.

## Modellübersicht

```text
Kunde ──< Projekt ──< Aktivität ──< Timeline-Eintrag
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

## Projekt

Die zentrale fachliche Klammer vom qualifizierten Auftrag bis zum Archiv. Es besitzt Stammdaten, Kunde, Baustelle, Status, Leistungen, Verantwortlichkeiten und Referenzen auf alle zugehörigen Vorgänge. Ein Projekt ist keine Kopie seiner Module; die Informationen werden über Beziehungen zusammengeführt.

## Aktivität

Ein zeitlich einordenbarer Vorgang mit Zweck, Typ, Status, Verantwortlichen, Workflow und Ergebnis. Beispiele sind Baustellenbesuch, Telefonat, Lieferung, Kontrolle, Freigabe, Aufmaß oder Dokumenterstellung. Eine Aktivität kann geplant, laufend, unterbrochen, abgeschlossen oder storniert sein.

Beziehungen: gehört zu genau einem Projekt; kann Beteiligte, Kolonne, Fahrzeug, Material, Dokumente, Nachträge, Behinderungen und Brain-Einträge referenzieren; erzeugt Timeline-Einträge.

## Besuch

Eine Spezialisierung der Aktivität mit Termin und Vor-Ort-Kontext. Die Besuchsart bestimmt den initialen Workflow, darf aber spätere Änderungen und zusätzliche Schritte zulassen. Fotos, Notizen, Checklisten und Aufmaß gehören fachlich zur Aktivität und damit zum Besuchskontext.

## Material

Ein identifizierbarer Materialtyp oder Artikel mit Einheit und gegebenenfalls Hersteller-/Systembezug. Bedarf, Reservierung, Ausgabe, Lieferung, Verbau, Rücklauf und Schaden werden als Bewegungen oder Zustände geführt, nicht durch Überschreiben einer einzigen Menge.

Beziehungen: Materialbewegungen verbinden Projekt, Aktivität, Lager, Fahrzeug und gegebenenfalls verantwortliche Person.

## Kolonne

Eine für einen Zeitraum zusammengestellte operative Einheit mit Vorarbeiter und Mitarbeitenden. Die Zusammensetzung kann sich verändern und wird deshalb zeitbezogen dokumentiert.

Beziehungen: wird Aktivitäten und Projekten disponiert; nutzt Fahrzeuge und Material; erzeugt Rückmeldungen über Fortschritt, Bedarf und Behinderungen.

## Mitarbeiter

Eine Person mit Rolle, Qualifikationen, Verfügbarkeit und organisatorischer Zuordnung. Personenbezogene Daten werden auf den notwendigen Zweck begrenzt.

Beziehungen: kann Mitglied einer Kolonne, verantwortlich für eine Aktivität oder Freigebender eines Dokuments sein.

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

## Timeline

Die chronologische Sicht auf fachlich relevante Ereignisse. Ein Timeline-Eintrag verweist auf seine Quelle, statt deren Inhalt zu duplizieren. Beispiele: Statuswechsel, Besuch abgeschlossen, Foto ergänzt, Material geliefert, Behinderung gemeldet, Dokument freigegeben oder Empfehlung bestätigt.

## Invarianten

- Jede Entität besitzt eine stabile ID.
- Jede Aktivität gehört genau einem Projekt.
- Ein Besuch ist eine Aktivität; nicht jede Aktivität ist ein Besuch.
- Historische Fakten werden ergänzt oder versioniert, nicht still überschrieben.
- Timeline-Einträge referenzieren ihre Quelle.
- Brain-Ausgaben bleiben von menschlichen Entscheidungen unterscheidbar.
- ScaffoldAI bereitet Entscheidungen vor und unterstützt sie; es ersetzt keinen Bauleiter.
- Rollen, Zeit und Status sind bei disponierten Ressourcen explizit.

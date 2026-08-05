# W-001 – Lebenszyklus eines Gerüstbauprojekts

- **Status:** Lebende Zusammenfassung
- **Stand:** 6. August 2026
- **Zweck:** Fachwissen aus dem ersten großen Prozessworkshop dauerhaft für Produkt, Architektur und Brain-Module verfügbar machen

## Quellenlage

Im Repository und im verfügbaren Sitzungsarchiv liegt kein separates Wortprotokoll von W-001 vor. Diese Zusammenfassung verdichtet deshalb die expliziten Inhalte des Tickets T-007, die [ScaffoldAI Master Vision](../../vision/MASTER_VISION.md), die bestehende Produktdokumentation und die bis T-006 umgesetzten fachlichen Konzepte. Sie erhebt keinen Anspruch auf wörtliche Wiedergabe und soll bei Verfügbarkeit weiterer Workshop-Notizen ergänzt werden.

## Kernerkenntnis

ScaffoldAI soll nicht einzelne Formulare digitalisieren, sondern den vollständigen Lebenszyklus eines Gerüstbauprojekts verbinden. Die digitale Baustellenakte ist die gemeinsame Quelle. Aktivitäten erweitern sie fortlaufend. Informationen werden am Entstehungsort einmal erfasst und anschließend für Planung, Material, Dokumente, Nachträge, Aufmaß, Abschläge und Abrechnung wiederverwendet.

## Fachliche Leitlinien

1. **Die Baustelle führt das Produktdesign.** Operative Abläufe müssen zuerst mobil funktionieren.
2. **Aktivität ist der gemeinsame Vorgang.** Der Baustellenbesuch ist eine wichtige, aber nicht die einzige Aktivitätsart.
3. **Projektkontext bleibt erhalten.** Foto, Notiz, Materialbewegung, Dokument und Entscheidung sind dauerhaft mit Projekt und Aktivität verbunden.
4. **Ausnahmen erzeugen Wert.** Änderungen, Behinderungen, Schäden und neue Leistungen müssen früh sichtbar werden.
5. **Einmal erfassen, mehrfach nutzen.** Erfassungen werden nicht für jedes Folgedokument kopiert.
6. **KI ist eine Entscheidungshilfe.** Das Brain erklärt und priorisiert; der Mensch entscheidet und bestätigt.
7. **Module bleiben aktivierbar.** Gemeinsamer Kern und klare Beziehungen erlauben schrittweise Einführung.

## Projektlebenszyklus in Kurzform

```text
Kundenanfrage
→ Qualifizierung
→ Angebotsaufnahme
→ Kalkulation und Angebot
→ Auftrag und Projektanlage
→ Arbeitsvorbereitung
→ Disposition und Materialbereitstellung
→ Anlieferung und Montage
→ Kontrollen / Umbauten / laufende Aktivitäten
→ Änderungen, Behinderungen und Nachträge
→ Abschlagsaufmaß
→ Schlussaufmaß und Abnahme
→ Abbau und Materialrücklauf
→ Schlussrechnung
→ Projektarchiv
```

Die ausführliche Beschreibung steht im [Projektlebenszyklus](../../workflows/PROJECT_LIFECYCLE.md).

## Rollen und Zusammenarbeit

- **Monteur:** führt Aufgaben sicher aus und meldet Fortschritt, Bedarf und Abweichungen.
- **Vorarbeiter:** steuert Kolonne, Tagesablauf, Qualität, Sicherheit und Material vor Ort.
- **Bauleiter:** verbindet Technik, Kunde, Termine, Änderungen, Aufmaß, Nachtrag und Freigaben.
- **Lager:** sorgt für Bestand, Bereitstellung, Rücknahme und Prüfung.
- **Disposition:** koordiniert Menschen, Kolonnen, Fahrzeuge, Material und Zeitfenster.
- **Geschäftsführer:** steuert Portfolio, Kapazität, Ergebnis, Liquidität und Risiken.
- **Administrator:** stellt Rollen, Stammdaten, Vorlagen und Module sicher.

Details: [Rollenmodell](../../roles/ROLE_MODEL.md).

## Zentrale Produktbausteine

- Project Core, digitale Baustellenakte und Timeline
- Activity Engine und dynamische Workflows
- Mobile Erfassung für Foto, Text, Sprache und Checklisten
- Live-Baustelle und Change Manager
- Dokumentencenter, Aufmaß und Nachträge
- Materialmanager, Startmaterial, Materialfluss und Lager
- Dispositionsmanager, Kolonnen, Mitarbeiter und Fahrzeuge
- spezialisierte Brain-Module
- Geschäftsführer-Dashboard

Details: [Product Map](../../product-map/PRODUCT_MAP.md) und [Roadmap](../../roadmap/ROADMAP.md).

## Informationsfluss

Eine Angebotsaufnahme erzeugt nicht nur ein Fotoarchiv. Ihre strukturierten Fakten bilden Eingaben für Angebot, Startmaterial, Planung und Sicherheitsvorbereitung. Montage und Kontrollen ergänzen den Ist-Zustand. Abweichungen können Change, Behinderung oder Nachtrag auslösen. Aufmaß und Materialbewegungen speisen Abschlag, Schlussrechnung und Rücklauf. Die Timeline hält Herkunft und Reihenfolge sichtbar.

## Brain-Landschaft

W-001 führt zu rollen- und domänenspezifischen Brains für Bauleiter, Vorarbeiter, Material, Disposition, Sicherheit und Geschäftsführung. Alle verwenden dieselbe Baustellenakte, unterscheiden sich jedoch in Entscheidung, Datenbedarf und Ausgabe. Die [Brain Knowledge Base](../../knowledge/BRAIN_KNOWLEDGE_BASE.md) beschreibt ihre Grenzen und künftigen Fähigkeiten.

## Priorisierung

- **MVP:** Project Core, mobile Baustellenbesuche, Workflowstatus, digitale Baustellenakte, Activity-/Timeline-Grundlagen.
- **Phase 2:** Live-Baustelle, Change Manager, Dokumente, Aufmaß/Nachtrag, Materialmanager, Materialfluss, Basis-Disposition und operative Brains.
- **Phase 3:** Lager, optimierte Disposition, Sicherheit, automatische Dokumententwürfe und Geschäftsführer-Dashboard.
- **Vision:** Bildverständnis, Prognosen, automatische Erkennung und KI-gestützte Unternehmensplanung.

Details und Einzelideen: [W-001 Backlog](../../backlog/W-001-BACKLOG.md).

## Festgehaltene Entscheidungen

- [Mobile First](../../decisions/ADR-001-mobile-first.md)
- [Activity statt Visit](../../decisions/ADR-002-activity-statt-visit.md)
- [Entscheidungshilfe statt Dateneingabe](../../decisions/ADR-003-entscheidungshilfe.md)
- [Einmal erfassen – mehrfach nutzen](../../decisions/ADR-004-einmal-erfassen.md)
- [KI unterstützt den Menschen](../../decisions/ADR-005-ki-unterstuetzt-menschen.md)
- [Digitale Baustellenakte als zentrale Datenquelle](../../decisions/ADR-006-digitale-baustellenakte.md)
- [Module unabhängig aktivierbar](../../decisions/ADR-007-modulare-aktivierung.md)

## Offene Fragen

- Welche Originalnotizen, Skizzen oder Teilnehmeraussagen aus W-001 müssen nachgetragen werden?
- Welche Aktivitätsarten werden neben Besuchen zuerst benötigt?
- Wo liegen fachliche Freigabegrenzen zwischen Vorarbeiter, Bauleiter und Geschäftsführung?
- Welche Daten dürfen offline erfasst werden und wie werden Konflikte synchronisiert?
- Welche Materialidentifikation ist hersteller- und systemübergreifend tragfähig?
- Welche Normen, TRBS- und DGUV-Inhalte dürfen in welcher Form als Regelwerksbasis genutzt werden?
- Welche Kennzahlen sind für die Geschäftsführung handlungsrelevant, ohne Fehlanreize zu setzen?
- Welche Kundenzustimmung und Governance sind für lernende Brain-Funktionen erforderlich?

## Pflege

Neue Erkenntnisse werden mit Datum ergänzt und in die abgeleiteten Fachdokumente überführt. Gegensätzliche Erkenntnisse werden nicht still überschrieben, sondern als offene Frage oder Architekturentscheidung dokumentiert.

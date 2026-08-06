# W-003 – Activity Engine

- **Stand:** 7. August 2026
- **Status:** Fachlich konsolidiert
- **Zweck:** Activity Engine als zentrales Fachmodell von ScaffoldAI definieren
- **Abgrenzung:** keine UI, Datenbank, API oder Implementierung

## Kernergebnis

Das Projekt bleibt die gemeinsame Baustellenakte. Die Aktivität wird das zentrale Modell für operative Arbeit. Sie verbindet Zweck, Verantwortlichkeit, Zeit, Status, Readiness, Priorität, Nachweise, Ergebnis und Folgearbeit.

Die vollständige normative Spezifikation steht in [PS-001 – Fachliche Spezifikation der Activity Engine](../../specs/PS-001-Activity-Engine.md). Diese Workshop-Zusammenfassung dokumentiert die wichtigsten Entscheidungen und Auswirkungen.

## Zentrale Entscheidungen

1. **Eine operative Arbeit ist eine Aktivität.** Besuch, Telefonat, Lieferung, Montage, Freigabe, Aufmaß und Rechnung verwenden dasselbe Grundmodell.
2. **Jede Aktivität hat Projektkontext.** Frühe Anfragen erhalten bei Bedarf einen minimalen Anfrage-/Projektkontext; dauerhafte kontextlose Arbeit ist ausgeschlossen.
3. **Status, Readiness und Priorität sind getrennt.** „Vorbereitet“ im Lebenszyklus setzt erfüllte oder bewusst freigegebene Blocker voraus, ersetzt aber nicht die detaillierte Readiness.
4. **Abschluss verlangt ein Ergebnis.** Eine Aktivität kann erfolglos, abgelehnt oder ohne Kundenkontakt abgeschlossen sein, sofern das Ergebnis feststeht.
5. **Warten ist explizit.** Gegenstelle, erwartete Information, Frist und Nachfassverantwortung werden benannt.
6. **Abhängigkeiten sind fachliche Beziehungen.** Voraussetzungen, Folge, Auslöser, Blockade, Ersatz, Korrektur, Aufteilung und Nachweis werden unterschieden.
7. **Timeline ist eine Projektion.** Sie entsteht aus Aktivitätsereignissen und kopiert keine Fachdaten.
8. **„Heute“ ist eine Arbeitssicht.** Es zeigt fällige, kritische, wartende, blockierende und entscheidungsreife Aktivitäten, nicht alle Projekte.
9. **Module erweitern Aktivitäten.** Material, Disposition, Dokument, Nachtrag, Abrechnung und Brain dürfen kein paralleles Prozessgrundmodell etablieren.
10. **Der Mensch entscheidet.** Regelbasierte oder spätere lernende Ableitungen bereiten vor und bleiben erklärbar.

## Fachlicher Lebenszyklus

```text
Entwurf
→ Geplant
→ Vorbereitet
→ Disponiert (falls erforderlich)
→ Unterwegs (falls erforderlich)
→ Begonnen
→ Abgeschlossen
```

Aus laufenden Zuständen kann eine Aktivität nach **Wartet** oder **Pausiert** wechseln und anschließend fortgesetzt werden. **Storniert** beendet eine nicht mehr auszuführende Aktivität nachvollziehbar. Nicht jeder Aktivitätstyp verwendet jeden Status.

## Aktivitätsfamilien

- Vertrieb und Kunde
- Planung und Arbeitsvorbereitung
- Disposition und Ressourcen
- Material und Transport
- Ausführung auf der Baustelle
- Kontrolle, Sicherheit und Qualität
- Aufmaß, Änderung und Nachtrag
- kaufmännische Arbeit
- Dokument und Kommunikation
- Abschluss und interne Arbeit

Der Typkatalog ist erweiterbar, aber kontrolliert. Ein neuer Typ benötigt einen fachlichen Unterschied bei Zweck, Verantwortung, Readiness, Ergebnis oder Folgebeziehung.

## Auswirkungen auf bestehende Konzepte

### Timeline

Jede relevante Zustands-, Verantwortlichkeits-, Entscheidungs- oder Ergebnisänderung einer Aktivität wird chronologisch sichtbar. Timeline-Einträge verweisen auf ihre Quelle.

### Baustellenakte

Die Akte führt Aktivitäten und referenzierte Fachobjekte projektbezogen zusammen. Sie ist keine zweite Erfassungsstelle.

### Kolonnen und Disposition

Kolonnen, Mitarbeiter und Fahrzeuge werden geplant und tatsächlich einer Aktivität zugeordnet. Disposition plant Aktivitäten; sie verwaltet keinen separaten Einsatzprozess.

### Material

Materialbedarf und -bewegung beziehen sich auf Einsatzaktivitäten und deren Folgeketten. Geplante und tatsächliche Mengen bleiben unterscheidbar.

### Dashboard „Heute“

Die Arbeitslage wird aus Aktivitäten abgeleitet. Sicherheitsgefahr, Stillstand, wartende Kolonnen, überfällige Fristen und erforderliche Entscheidungen stehen vor regulären Terminen und vorbereitenden Arbeiten.

### Brain

Brain kann später Lücken, Risiken, Wartezeiten, Abweichungen, Folgearbeit und mögliches Nachtrags-/Abrechnungspotenzial ableiten. Quellen, Regeln und Annahmen bleiben erkennbar; es handelt nicht autonom.

## Erkannte und aufgelöste Widersprüche

- Die frühere PS-001 behandelte „Readiness berechnen“ und Status nur grob. Version 2.0 trennt beide Konzepte.
- Der bisherige Status „Aktiv“ war zu unscharf. Er wird fachlich in Begonnen, Wartet und Pausiert differenziert.
- „Alles ist eine Aktivität“ wird präzisiert: Fachobjekte wie Foto, Dokument oder Rechnung sind nicht selbst zwingend Aktivitäten; ihre Bearbeitung und Statusentscheidung erfolgt durch Aktivitäten.
- Timeline, „Heute“ und Baustellenakte sind Sichten auf dieselben Quellen, keine parallelen Arbeitsbestände.

## Offene Folgearbeit

1. minimalen Aktivitätstypkatalog für den ersten Umsetzungsschnitt festlegen,
2. Statusprofile je Typfamilie definieren,
3. Readiness-Blocker je erstem Aktivitätstyp bestimmen,
4. Rollen- und Freigabegrenzen konkretisieren,
5. Regeln für wiederkehrende Aktivitäten und Korrekturen validieren,
6. reale Projektverläufe gegen das Modell testen.

## Verknüpfte Dokumente

- [PS-001 – Activity Engine](../../specs/PS-001-Activity-Engine.md)
- [W-002 – Operating System](../W-002-operating-system/SUMMARY.md)
- [Domänenmodell](../../architecture/DOMAIN_MODEL.md)
- [Projektlebenszyklus](../../workflows/PROJECT_LIFECYCLE.md)
- [ADR-002](../../decisions/ADR-002-activity-statt-visit.md)

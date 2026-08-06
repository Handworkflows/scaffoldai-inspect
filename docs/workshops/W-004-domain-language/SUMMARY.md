# W-004 – ScaffoldAI Domain Language

- **Stand:** 7. August 2026
- **Status:** Verbindlich konsolidiert
- **Zweck:** einheitliche Fachsprache für Anwendung, Produkt und Architektur
- **Betrachtete Rollen:** Bauleiter, Vorarbeiter, Gerüstbauer, Disposition und Geschäftsführung
- **Abgrenzung:** keine Software- oder UI-Änderung

## Ergebnis

Das offizielle Wörterbuch liegt im [ScaffoldAI Domain Language Dictionary](../../knowledge/DOMAIN_LANGUAGE.md). Es definiert bevorzugte Namen, Alternativen, zu vermeidende Begriffe, Definitionen, Einsatzbereiche und Begründungen.

## Wichtigste Entscheidungen

1. Die operative Startseite heißt **Heute**, nicht Dashboard oder Übersicht.
2. **Projekt**, **Baustelle** und **Auftrag** sind keine Synonyme.
3. **Aktivität** bleibt das Fachmodell; Nutzer sehen möglichst den konkreten Typ.
4. **Aufgabe**, **Baustellenbesuch** und **Einsatz** sind fachliche Spezialisierungen beziehungsweise Bündelungen, keine parallelen Grundmodelle.
5. Nutzer sehen den **Verlauf**; Timeline bleibt Architekturbegriff.
6. Nutzer sehen **Hinweis**, **Warnung** oder **Empfehlung**; Brain bleibt interner Produktname.
7. Nutzer sehen den **Vorbereitungsgrad**; Readiness bleibt Architekturbegriff.
8. Status wird immer mit seinem Bezugsobjekt verstanden und bleibt von Phase, Priorität und Vorbereitungsgrad getrennt.
9. **Kolonne**, **Aufmaß**, **Nachtrag**, **Disposition**, **Material** und **Behinderung** bleiben erhalten, weil sie fachlich etabliert sind.
10. Material Intelligence bleibt Produktname; konkrete Nutzerarbeit heißt Materialplanung, Materialbedarf, Materialübersicht oder Materialfluss.

## Rollenbefund

- **Bauleiter:** versteht Projekt, Baustelle, Aktivität, Aufmaß, Nachtrag, Disposition und Status; profitiert von klarer Trennung zwischen Projektlage und konkreter Arbeit.
- **Vorarbeiter:** arbeitet natürlicher mit Baustelle, Einsatz, Kolonne, Tätigkeit, Freigabe und offenen Punkten als mit abstrakten Modulnamen.
- **Gerüstbauer:** benötigt konkrete Tätigkeitsbegriffe; Aktivität, Brain, Readiness und Material Intelligence sind ohne Kontext zu abstrakt.
- **Disposition:** verwendet Einsatz, Kolonne, Zeitfenster, Fahrzeug, Material und Disposition selbstverständlich; „Aktivität“ ist als gemeinsames Planungsobjekt geeignet.
- **Geschäftsführung:** benötigt Projekt, Auftrag, Leistung, Status, Priorität und Unternehmensübersicht; operative Detailbegriffe bleiben bis zur Quelle nachvollziehbar.

## Beseitigte Widersprüche

- Der aktive MVP-Begriff „Dashboard“ wurde für die operative Startseite durch „Heute“ ersetzt.
- Dashboard wird künftig nicht zugleich für operative und strategische Sichten verwendet.
- Timeline/Verlauf und Brain/Hinweis werden als Architektur- versus Nutzerbegriff eindeutig getrennt.
- Projekt/Baustelle/Auftrag sowie Aktivität/Aufgabe/Einsatz erhalten klare Grenzen.

## Folgearbeit

- Neue Spezifikationen und Tickets verwenden das Wörterbuch verbindlich.
- UI-Texte werden erst in eigenen Umsetzungstickets angepasst; W-004 verändert keine Oberfläche.
- Historische Dokumente bleiben als Entstehungskontext erhalten.
- Neue kunden- oder herstellerspezifische Fachbegriffe werden kontrolliert ergänzt.

## Verknüpfte Dokumente

- [Domain Language Dictionary](../../knowledge/DOMAIN_LANGUAGE.md)
- [Domänenmodell](../../architecture/DOMAIN_MODEL.md)
- [Activity Engine](../../specs/PS-001-Activity-Engine.md)
- [W-002 – Operating System](../W-002-operating-system/SUMMARY.md)
- [W-003 – Activity Engine](../W-003-activity-engine/SUMMARY.md)

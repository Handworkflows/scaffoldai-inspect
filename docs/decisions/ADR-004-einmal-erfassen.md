# ADR-004: Einmal erfassen – mehrfach nutzen

- **Status:** Akzeptiert
- **Datum:** 2026-08-06

## Kontext

Fotos, Mengen, Absprachen und Leistungsänderungen werden heute häufig mehrfach für Tagesbericht, Aufmaß, Nachtrag und Rechnung erfasst. Kopien widersprechen sich und verlieren ihren Ursprung.

## Entscheidung

Eine fachliche Information besitzt genau eine autoritative Quelle. Dokumente und Auswertungen referenzieren oder transformieren diese Quelle, statt eine unabhängige Kopie zu pflegen.

## Konsequenzen

- IDs, Beziehungen, Zeitstempel und Herkunft sind verpflichtend.
- Änderungen benötigen Versionierung oder Historie.
- Generatoren müssen reproduzierbar und ihre Ergebnisse prüfbar sein.
- Exporte sind Darstellungen des Systems, nicht neue Wahrheitsquellen.

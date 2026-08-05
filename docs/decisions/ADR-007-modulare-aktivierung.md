# ADR-007: Module unabhängig aktivierbar

- **Status:** Akzeptiert
- **Datum:** 2026-08-06

## Kontext

Gerüstbauunternehmen unterscheiden sich in Größe, Reifegrad und Prozess. Eine monolithische Komplettumstellung erhöht Einführungshürde und Komplexität.

## Entscheidung

Fachmodule können schrittweise und unabhängig aktiviert werden. Ein gemeinsamer Kern für Identität, Beziehungen, Rollen, Aktivitäten und Ereignisse bleibt verbindlich.

## Konsequenzen

- Module definieren klare Verantwortungsgrenzen und Verträge.
- Der Kern darf keine unnötige Abhängigkeit von optionalen Modulen besitzen.
- Fehlende Module erhalten verständliche Übergaben oder reduzierte Abläufe.
- Modulkonfiguration, Berechtigungen und Datenmigration werden Teil der Administration.

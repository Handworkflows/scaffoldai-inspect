# Verbindliches Rollen- und Berechtigungsmodell

- **Stand:** 7. August 2026
- **Status:** Verbindlich gemäß W-006
- **Quelle:** [W-006 – Rollen & Berechtigungen](../workshops/W-006-roles-permissions/SUMMARY.md)

## Grundsatz

Ein Vorgang existiert genau einmal. Rollen steuern Sichtbarkeit, Bearbeitung, Zuweisung, Freigabe und Verantwortung auf derselben Datenbasis. Sie erzeugen keine rollenbezogenen Kopien.

Eine Person kann mehrere Rollen besitzen. Rechte gelten nur in ihrer fachlichen Reichweite: eigen, zugewiesen, eigene Kolonne, Organisationseinheit oder Unternehmen. Zweckbindung und Datenschutz können die Reichweite weiter einschränken.

Jede Person besitzt einen persönlichen Arbeitsplatz als Sicht auf ihre autorisierten Informationen. Der Arbeitsplatz erweitert keine Rechte: Nachrichten-Vorschauen, Zähler, Suche, Kalender und Benachrichtigungen unterliegen denselben Rollen- und Reichweitengrenzen wie ihre Quelle.

## Kernrollen

| Rolle | Primäre Verantwortung | Standardreichweite | Wesentliche Grenze |
|---|---|---|---|
| Geschäftsführer / Chef | Unternehmenssteuerung, Kapazität, Ergebnis und Risiken | Unternehmen | Vollzugriff ersetzt keine technische Qualifikation |
| Bauleiter | technische und organisatorische Vorgangssteuerung | zugewiesene Vorgänge | kaufmännische Endfreigabe nur bei Zusatzrecht |
| Büro / Innendienst | organisatorische Entlastung, Kontakt und Termine | Organisationseinheit | keine technische oder sicherheitsrelevante Freigabe |
| Disposition | Ressourcen-, Einsatz- und Verfügbarkeitsplanung | Organisation/Unternehmen | keine Gerüst-, Montage- oder Sicherheitsfreigabe |
| Vorarbeiter | operative Führung, Material und Tagesabschluss | eigene Kolonne/Einsätze | keine Angebots- oder Rechnungsfreigabe |
| Mitarbeiter / Monteur | sichere Ausführung und Rückmeldung | eigene Person/Arbeit | keine kaufmännischen Unternehmensdaten |

Vorbereitete Zusatzrollen sind Lager, Kalkulation, Buchhaltung und Administrator. Administratoren verwalten das System, erhalten dadurch aber keine fachliche Entscheidungskompetenz.

## Berechtigungskategorien

- **ansehen**
- **erstellen**
- **bearbeiten**
- **zuweisen**
- **freigeben**
- **archivieren**
- **löschen**
- **administrieren**

Freigeben ist eine eigenständige fachliche Handlung. Archivieren und Löschen bleiben getrennt. Kritische Aktionen sind auditpflichtig.

## Verbindliche Grenzen

- Büro und Disposition treffen keine technische oder sicherheitsrelevante Freigabe.
- Vorarbeiter und Mitarbeiter dürfen sicherheitswidrige Arbeit stoppen und Abweichungen melden; die übergeordnete fachliche Freigabe bleibt bei autorisierten Rollen.
- Administration begründet keine fachliche Freigabekompetenz.
- Brain und Automatisierung treffen keine menschlich erforderlichen Entscheidungen.
- Vertretungen sind befristet, zweckgebunden und nachvollziehbar.
- Historische Entscheidungen behalten handelnde Person und damalige wirksame Rolle.

## Rollenbezogene Arbeitsweise

- **Heute** ist eine gefilterte Sicht auf dieselben Activities und unterscheidet sich nach Rolle, Verantwortung und Reichweite.
- **Kalender** zeigt dieselben verknüpften Activities, Einsätze und Abwesenheiten; er ist keine eigene Datenwelt.
- **Buchhaltung** ist ein eigener Arbeitsbereich, aber keine eigene Datenwelt; Rechnungen, Nachträge und Forderungen bleiben mit demselben Vorgang verknüpft.
- **Telefonnotizen**, **Materialanforderungen** und **Tagesabschlüsse** sind Activities desselben Vorgangs.
- **Kommunikation** kann Activities erzeugen oder aktualisieren, führt aber keinen eigenen Workflow.
- **E-Mail-Entwürfe und automatische Zuordnungsvorschläge** benötigen menschliche Bestätigung; externe Kommunikation wird nicht automatisch versendet.
- Urlaub, Krankheit und Qualifikationen wirken auf die Verfügbarkeit; nur notwendige Informationen werden für Planung offengelegt.

## Normative Detailregelung

Die vollständige Berechtigungsmatrix, Freigabeverantwortung, Prozesse für Telefonnotiz, Materialanforderung und Tagesabschluss sowie Auditregeln stehen in [W-006](../workshops/W-006-roles-permissions/SUMMARY.md). Neue Tickets müssen Rolle, Aktion, Reichweite, Verantwortung, Freigabe und Auditverhalten explizit benennen.

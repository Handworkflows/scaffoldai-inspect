# W-006 – Rollen & Berechtigungen

- **Stand:** 7. August 2026
- **Status:** Fachlich beschlossen
- **Zweck:** verbindliches Rollen-, Sichtbarkeits-, Verantwortungs- und Freigabemodell
- **Geltungsbereich:** alle Arbeitsbereiche und alle Zustände eines Vorgangs
- **Abgrenzung:** keine technische Autorisierungsimplementierung, keine UI-Änderung

> **Navigation nach EPIC-002:** Buchhaltung ist ein eigener Hauptbereich und Mannschaft heißt in der Hauptnavigation Team. Die Rollen- und Berechtigungsregeln dieses Workshops gelten unverändert für beide Bereiche.

> **Ergänzung nach W-007:** Jede Rolle erhält einen persönlichen Arbeitsplatz. Er zeigt ausschließlich Informationen innerhalb der bereits definierten Reichweiten und erweitert keine Berechtigung.

## Leitentscheidung

Ein Vorgang existiert genau einmal. Rollen erzeugen keine eigenen Datenbestände oder Kopien, sondern bestimmen:

- welche Vorgänge und Informationen sichtbar sind,
- welche Aktionen ausgeführt werden dürfen,
- wem Activities zugewiesen werden können,
- wer fachliche Entscheidungen und Freigaben verantwortet.

Berechtigung und Verantwortung sind getrennt. Ein technisch erlaubter Zugriff begründet keine fachliche Zuständigkeit. Sicherheitskritische, technische und kaufmännisch verbindliche Entscheidungen benötigen eine dafür autorisierte menschliche Rolle.

## Modell

Eine wirksame Berechtigung ergibt sich aus:

```text
Rolle
× Berechtigungskategorie
× Gegenstand / Arbeitsbereich
× Reichweite
× Vorgangszustand
× konkrete Verantwortlichkeit
```

### Reichweiten

- **eigen:** eigene Person, eigene Activities und eigener Kalender
- **zugewiesen:** Vorgänge, Einsätze oder Activities mit eigener Verantwortung
- **eigene Kolonne:** aktuelle Kolonne und deren zugewiesene Einsätze
- **Organisationseinheit:** beispielsweise Bauleitung, Büro, Lager oder Niederlassung
- **Unternehmen:** alle fachlich zulässigen Unternehmensdaten

Eine Rolle mit Unternehmensreichweite sieht nicht automatisch jedes personenbezogene oder besonders geschützte Detail. Zweckbindung und Datenschutz bleiben zusätzliche Grenzen.

## Berechtigungskategorien

| Kategorie | Bedeutung |
|---|---|
| ansehen | Daten im erlaubten Umfang lesen |
| erstellen | neues Fachobjekt oder neue Activity anlegen |
| bearbeiten | bestehenden, noch bearbeitbaren Stand ändern |
| zuweisen | Verantwortlichkeit oder Ressource an berechtigte Empfänger übertragen |
| freigeben | fachlich verbindliche Entscheidung mit Identität und Zeitpunkt treffen |
| archivieren | aus aktiver Arbeit entfernen, Historie erhalten |
| löschen | im erlaubten Rahmen endgültig entfernen; restriktiv und auditpflichtig |
| administrieren | Rollen, Stammdaten, Vorlagen oder Konfiguration verwalten; keine implizite Fachfreigabe |

Freigeben ist niemals nur eine stärkere Form von Bearbeiten. Löschen ist niemals nur eine stärkere Form von Archivieren.

## Kernrollen

### Geschäftsführer / Chef

- **Reichweite:** grundsätzlich Unternehmen
- **Aufgabe:** Unternehmenssteuerung, Prioritäten, Kapazität, Liquidität, Ergebnis und Risikorahmen
- **Sichten:** Heute/Unternehmenslage, Angebote, Einsatzvorbereitung, Betrieb, Mannschaft, Material, Kalender, Auswertungen, Rechnungsstatus, Kapazitäten und Risiken
- **Rechte:** umfassendes Ansehen und Entscheiden; Unternehmens- und kaufmännische Freigaben entsprechend betrieblicher Zuständigkeit
- **Grenze:** Vollzugriff ersetzt keine erforderliche technische Qualifikation oder konkrete Sicherheitsverantwortung

### Bauleiter

- **Reichweite:** primär zugewiesene Vorgänge und Baustellen; zusätzliche Leserechte nach Organisation
- **Aufgabe:** technische und organisatorische Vorgangs- und Baustellensteuerung
- **Sichten:** eigene Angebote, Einsatzvorbereitung, Projekte, Kolonnenstatus, Materialstatus, Kalender, Rückrufe, Activities, Dokumente, Aufmaß, Nachträge, Buchhaltung/Rechnungsstände und Hinweise
- **Rechte:** fachlich bearbeiten, zuweisen und freigeben; insbesondere Angebot prüfen, Projekt übernehmen, Montage freigeben, Nachtrag fachlich freigeben und Dokumente prüfen
- **Grenze:** kaufmännische Endfreigaben oder Unternehmensentscheidungen nur bei expliziter zusätzlicher Berechtigung

### Büro / Innendienst

- **Reichweite:** vertriebliche und organisatorische Vorgänge der Organisationseinheit
- **Aufgabe:** Bauleitung und Disposition organisatorisch entlasten
- **Sichten:** Angebote, Kunden, Ansprechpartner, Telefonnotizen, Rückrufbitten, Termine, Kalender, Wiedervorlagen, Dokumente, Vorgangsstatus und Kontaktdaten
- **Rechte:** Anfragen und organisatorische Activities erstellen und bearbeiten, Termine pflegen, Rückrufe zuweisen, Dokumente erfassen
- **Grenze:** keine automatische technische, sicherheitsrelevante oder kaufmännisch verbindliche Freigabe

### Disposition

- **Reichweite:** unternehmens- oder organisationsweite Ressourcenplanung
- **Aufgabe:** Menschen, Kolonnen, Fahrzeuge, Material und Zeiten konfliktarm planen
- **Sichten:** Kalender, Kolonnen, Mitarbeiter, Fahrzeuge, Verfügbarkeiten, Urlaub, Krankheit, Activities, bestätigte Projekte, Angebotsforecast, Materialverfügbarkeit, Einsatzdauer und Restarbeiten
- **Rechte:** Ressourcen ansehen, planen, zuweisen und umplanen; Planungskonflikte dokumentieren
- **Grenze:** keine fachliche Gerüst-, Montage- oder Sicherheitsfreigabe; kein verbindlicher Angebotsentscheid

### Vorarbeiter

- **Reichweite:** eigene Kolonne und zugewiesene Einsätze
- **Nutzung:** Mobile First
- **Aufgabe:** sichere operative Führung, Fortschritt, Material und Tagesrückmeldung
- **Sichten:** Heute, eigene Kolonne, Einsätze, Baustelleninformationen, Ansprechpartner, Fotos, Montageanweisung, Gefährdungsbeurteilung, Material, Checklisten und Änderungen
- **Rechte:** Ausführung dokumentieren, Checklisten bearbeiten, Fotos und Meldungen erstellen, Material anfordern und Tagesabschluss erstellen
- **Grenze:** keine Angebots-, Rechnungs- oder übergeordnete Montagefreigabe; Sicherheitsabweichungen werden gemeldet und gegebenenfalls Arbeit gestoppt

### Mitarbeiter / Monteur

- **Reichweite:** eigene Person und zugewiesene Arbeit
- **Aufgabe:** sichere Ausführung und Rückmeldung
- **Sichten:** eigene Einsätze, eigener Kalender, Urlaub, Schulungen, Unterweisungen, notwendige Baustellendokumente und eigene Aufgaben
- **Rechte:** zugewiesene Activities ausführen, Fortschritt und Abweichungen melden, eigene Anträge erstellen
- **Grenze:** keine kaufmännischen Unternehmensdaten, keine Ressourcenplanung und keine fachlichen Freigaben

## Vorbereitete Zusatzrollen

### Lager

Materialbestand, Reservierung, Kommissionierung, Ausgabe, Rücknahme und Prüfung. Sieht freigegebene Materialbedarfe und Materialanforderungen; darf Bestands- und Bereitstellungsstände bearbeiten, aber keine technische Projektfreigabe erteilen.

### Kalkulation

Bearbeitet Kalkulationsgrundlagen und Angebotsstände. Darf Angebote fachlich/kaufmännisch vorbereiten und gemäß betrieblicher Regel zur Prüfung geben; Projektübernahme nur mit expliziter Freigabeberechtigung.

### Buchhaltung

Bearbeitet Rechnungs-, Zahlungs- und Forderungsstände. Technische Baustellendaten sind nur soweit sichtbar, wie sie als Nachweis für Abrechnung benötigt werden.

### Administrator

Verwaltet Benutzer, Rollenzuordnung, Stammdaten, Vorlagen, Module, Integrationen und Auditkonfiguration. Administration erteilt keine implizite fachliche Freigabekompetenz. Ein Administrator darf sich nicht unbemerkt fachliche Entscheidungen zuschreiben.

Für Activity-Templates gilt ergänzend [W-008](../W-008-activity-templates/SUMMARY.md): Systemstandard, Firmen-Overlay, fachliche Prüfung und technische Veröffentlichung sind getrennte Verantwortungen. Administration darf eine freigegebene Version veröffentlichen, aber sicherheitsrelevante Inhalte nicht allein abschwächen oder sich dadurch eine konkrete Montage-, Statik- oder Sicherheitsfreigabe erteilen.

## Verbindliche Berechtigungsmatrix

Legende: **Voll** = im fachlichen Verantwortungsrahmen alle Kategorien; **Teil** = genauer eingeschränkter Umfang; **Eigen** = nur eigene Daten/Arbeit; **Lesen** = ansehen; **–** = regulär kein Zugriff.

| Bereich / Entscheidung | Chef | Bauleiter | Büro | Disposition | Vorarbeiter | Mitarbeiter |
|---|---|---|---|---|---|---|
| Angebote | Voll | eigene: Voll | erstellen/bearbeiten | Forecast lesen | – | – |
| Angebot fachlich prüfen | bei Qualifikation | ja | – | – | – | – |
| Projekt übernehmen | ja | eigene: ja | – | – | – | – |
| Einsatzvorbereitung | Voll | eigene: Voll | organisatorisch bearbeiten | planen/zuweisen | eigene: lesen | einsatzbezogen lesen |
| Montage freigeben | nur fachlich autorisiert | ja | – | – | – | – |
| Betrieb / Baustellenakte | Voll | eigene: Voll | Status/Kontakte lesen | Planung lesen | eigene Einsätze bearbeiten | eigene Einsätze lesen/melden |
| Kolonnenplanung | Voll | lesen/planen | lesen | Voll | eigene Kolonne lesen | – |
| Mitarbeiterkalender | Voll, zweckgebunden | zugewiesene lesen | Termine nach Auftrag | Voll | eigener/kolonnenbezogen | eigener |
| Material | Voll | eigene: Voll | lesen | planen | anfordern | einsatzbezogen lesen/melden |
| Materialanforderung | lesen/freigeben nach Regel | bearbeiten/freigeben | lesen | planen | erstellen | Bedarf melden |
| Telefonnotiz/Rückruf | lesen | eigene erledigen/delegieren | erstellen/zuweisen | lesen | zugewiesen lesen | – |
| Tagesabschluss | lesen | lesen/prüfen | – | lesen/planen | erstellen/bearbeiten | beitragen nach Zuweisung |
| Urlaub/Abwesenheit | genehmigen | lesen | verwalten, falls beauftragt | planen/lesen | beantragen | beantragen |
| Qualifikationen | lesen | einsatzbezogen lesen | pflegen, falls beauftragt | planen/lesen | eigene lesen | eigene lesen |
| Nachträge | Voll | eigene bearbeiten/fachlich freigeben | Unterlagen erfassen | Auswirkung lesen | Änderung melden | Änderung melden |
| Rechnungsstatus | Voll | eigene bearbeiten/lesen | Teil nach Auftrag | – | – | – |
| Sicherheitsdokumente | Voll, zweckgebunden | prüfen/freigeben | erfassen/lesen | einsatzbezogen lesen | ausführen/bestätigen | ausführen/bestätigen |
| Archivieren | Voll | eigene nach Regel | – | – | – | – |
| Löschen | restriktiv | nur explizit und restriktiv | – | – | – | – |
| Rollen administrieren | nur mit Adminrolle | – | – | – | – | – |

Die Matrix beschreibt Standardrechte. Betriebsspezifische Erweiterungen dürfen Rechte enger fassen. Eine Erweiterung darf Freigaben nicht allein aus allgemeinem Lese- oder Bearbeitungsrecht ableiten.

## Kritische Freigaben

| Entscheidung | regulär verantwortlich | mögliche Vertretung | ausgeschlossen ohne Zusatzrolle |
|---|---|---|---|
| Angebot fachlich prüfen | Bauleiter / Kalkulation | fachlich autorisierte Geschäftsführung | Büro, Disposition |
| Projekt übernehmen | Bauleiter / Geschäftsführung | ausdrücklich Bevollmächtigte | Büro, Disposition, Vorarbeiter |
| Montage freigeben | verantwortlicher Bauleiter | technisch qualifizierte Vertretung | Büro, reine Disposition, Administration |
| Nachtrag fachlich freigeben | Bauleiter | Geschäftsführung / autorisierte Vertretung | Vorarbeiter allein |
| Rechnung kaufmännisch freigeben | Geschäftsführung / Buchhaltung nach Regel | autorisierte kaufmännische Vertretung | Disposition, Vorarbeiter |
| Urlaub genehmigen | disziplinarisch Verantwortliche | benannte Vertretung | Antragsteller selbst |

Jede Freigabe dokumentiert Gegenstand und Version, Entscheidung, Person, wirksame Rolle, Zeitpunkt, optional Begründung sowie gegebenenfalls Auflagen. Spätere Änderungen entwerten eine frühere Freigabe nicht still, sondern erzeugen einen neuen prüfpflichtigen Stand.

## Telefonnotiz und Rückruf

```text
Kunde ruft im Büro an
→ Büro erstellt Activity „Telefonnotiz“
→ Kunde, Vorgang/Baustelle, Zeitpunkt, Anliegen, Dringlichkeit und Rückrufwunsch erfassen
→ zuständigem Bauleiter zuweisen
→ Activity erscheint auf dessen „Heute“
→ Bauleiter dokumentiert Rückrufergebnis
→ Activity abschließen oder Folgeaktivität erzeugen
```

Das Büro darf organisatorisch priorisieren und zuweisen. Eine als dringend markierte Notiz ist noch keine technische Entscheidung.

## Materialanforderung des Vorarbeiters

Pflichtangaben:

- Material
- Menge
- benötigter Zeitpunkt
- Dringlichkeit
- Bemerkung beziehungsweise Einsatzbezug
- optional Foto

Die Anforderung ist eine Activity desselben Vorgangs. Bauleitung, Lager und Disposition sehen dieselbe Anforderung mit jeweils rollenbezogenen Aktionen. Es entstehen keine Kopien in separaten Postfächern.

## Vorarbeiter-Tagesabschluss

Wenn der Einsatz nicht abgeschlossen ist, erfasst der Vorarbeiter mindestens:

- heute erledigte Arbeiten
- Restarbeiten
- geschätzte Restdauer
- benötigte Mitarbeiter am Folgetag
- zusätzlich benötigtes Material
- Behinderungen und Probleme
- Besonderheiten
- voraussichtlichen Zeitpunkt der Kolonnenfreigabe

Der Tagesabschluss aktualisiert über referenzierte Ergebnisse die Sichten **Heute**, Einsatzplanung, Kolonnenplanung, Materialplanung und Baustellenstatus. Er ist keine separate Planungsdatenbank. Bauleitung und Disposition sehen Quelle und Erfassungszeitpunkt.

## Kalender und Verfügbarkeit

Kalendereinträge sind zeitliche Sichten auf Activities, Einsätze oder Abwesenheiten:

- Baustelleneinsatz
- Jour fixe und Termin
- Rückruf und Wiedervorlage
- Urlaub und Krankheit
- Schulung und Unterweisung

„Termin in Kalender übernehmen“ erzeugt oder terminiert eine verknüpfte Activity; der Kalender kopiert den Vorgang nicht. Urlaub und Krankheit verändern die Verfügbarkeit. Eine betroffene Kolonnenplanung erzeugt eine Warnung und verlangt Umplanung oder verantwortete Ausnahme.

Geschäftsführung und berechtigte Disposition dürfen die gemeinsame Ressourcenlage sehen. Medizinische Details einer Krankheit sind dafür nicht erforderlich und bleiben geschützt.

## Qualifikationen

Qualifikationen werden mit Typ, Gültigkeit, Nachweis und gegebenenfalls Ablaufdatum geführt. Beispiele:

- Gerüstbauer
- Gerüstbau-Kolonnenführer / Vorarbeiter
- Führerschein C / CE
- Staplerschein
- Kranqualifikation
- PSAgA
- Ersthelfer
- Schulungen und Unterweisungen

Disposition darf für die Einsatzplanung Eignung und Gültigkeit sehen, nicht automatisch sämtliche Nachweisdokumente oder personenbezogenen Details. Fehlende oder abgelaufene Pflichtqualifikationen blockieren reguläre Zuweisung oder erzeugen eine verantwortete Ausnahmeentscheidung.

## Rollenabhängiges Heute

| Rolle | Priorisierte Inhalte |
|---|---|
| Chef | Engpässe, kritische Baustellen, Kapazitäten, Angebote, Rechnungen, Personalprobleme |
| Bauleiter | eigene Kolonnen und Baustellen, Rückrufe, Termine, Aufgaben, Materialprobleme, Dokumentationslücken |
| Büro | neue Anrufe, Rückrufbitten, Angebote, Termine, Wiedervorlagen |
| Disposition | heutige Kolonnen, Ausfälle, Restarbeiten, freie Kapazitäten, Material- und Fahrzeugkonflikte |
| Vorarbeiter | heutige Baustelle, geplante Arbeiten, Dokumente, Material, offene Punkte, Tagesabschluss |
| Mitarbeiter | eigene Einsätze, Aufgaben, Termine, Unterweisungen und notwendige Dokumente |

„Heute“ filtert dieselben Activities nach Sichtbarkeit, Verantwortung und Relevanz. Es führt keine rollenbezogenen Kopien.

## Mehrfachrollen und Vertretung

- Eine Person kann mehrere Rollen besitzen; wirksame Rechte sind nachvollziehbar aus den aktiven Rollenzuweisungen abzuleiten.
- Kritische Freigaben zeigen, in welcher Rolle gehandelt wurde.
- Vertretungen sind befristet, zweckgebunden und auditierbar.
- Eine Person darf eine unzulässige Selbstfreigabe nicht durch Rollenwechsel umgehen.
- Interessenkonflikte und Vier-Augen-Regeln können Rechte zusätzlich begrenzen.

## Audit- und Sicherheitsregeln

- Freigaben, Zuweisungen, Rollenänderungen, Archivierung und Löschung werden protokolliert.
- Das Protokoll enthält handelnde Person, wirksame Rolle, Aktion, Gegenstand, Zeitpunkt und Ergebnis.
- Berechtigungsänderungen wirken nicht rückwirkend auf historische Entscheidungen.
- Entzug einer Rolle beendet zukünftige Rechte, entfernt aber nicht die historische Urheberschaft.
- Automatisierung und Brain dürfen vorbereiten, priorisieren und empfehlen, aber keine menschlich erforderliche Freigabe vortäuschen.
- „Zugriff verweigert“ darf keine geschützten Inhalte über Titel, Zähler, Suche oder Benachrichtigungen offenlegen.

## Konsequenzen für zukünftige Tickets

Jedes Ticket mit Lesen, Ändern, Zuweisen oder Entscheiden muss angeben:

1. betroffene Rollen,
2. Berechtigungskategorie,
3. Reichweite,
4. Vorgangszustand,
5. fachlich verantwortliche Rolle,
6. Freigabe- und Vertretungsregel,
7. Auditereignis,
8. Verhalten bei fehlendem Recht.

„Nur für Admins“ oder „Rolle darf alles“ genügt nicht als Berechtigungsspezifikation.

## Bewusst offen

- konkrete betriebliche Zuordnung von kaufmännischen Freigaben
- optionale Vier-Augen-Regeln und Wertgrenzen
- Niederlassungs-, Mandanten- und Teamhierarchien
- technische Umsetzung von Rollen, Attributen und Richtlinien
- Aufbewahrungs- und Löschfristen je Datenart
- Notfallzugriff mit nachgelagerter Prüfung

## Verknüpfte Dokumente

- [Verbindliches Rollenmodell](../../roles/ROLE_MODEL.md)
- [W-005 – Workflow Operating System](../W-005-workflow-operating-system/SUMMARY.md)
- [Fachliches Domänenmodell](../../architecture/DOMAIN_MODEL.md)
- [Activity Engine](../../specs/PS-001-Activity-Engine.md)
- [Domain Language Dictionary](../../knowledge/DOMAIN_LANGUAGE.md)
- [KI unterstützt den Menschen](../../decisions/ADR-005-ki-unterstuetzt-menschen.md)
- [Digitale Baustellenakte](../../decisions/ADR-006-digitale-baustellenakte.md)
- [W-008 – Activity Templates](../W-008-activity-templates/SUMMARY.md)

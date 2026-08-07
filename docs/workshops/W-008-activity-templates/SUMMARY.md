# W-008 – Verbindliche Activity-Template-Architektur

- **Stand:** 7. August 2026
- **Status:** Fachlich beschlossen
- **Geltung:** Systemstandard für die Vorbereitung von Activities
- **Abgrenzung:** Fachlogik und Governance; keine UI-, Datenbank-, API- oder Implementierungsvorgabe

## Beschluss

Activity-Templates sind versionierte fachliche Definitionen, mit denen die Activity Engine eine konkrete Activity vorbereitet. Sie definieren gemeinsame und typabhängige Felder, Checklistenpunkte, Dokumentanforderungen, Standardwerte sowie mögliche Folgeaktivitäten. Sie sind weder Activities noch eine zweite Prozesslogik.

Die Activity bleibt die einzige operative Arbeitseinheit. Nach der Erzeugung gehören Werte, Bearbeitungsstand, Nachweise, Entscheidungen und Verlauf zur konkreten Activity. Eine spätere Template-Änderung überschreibt keine laufende oder abgeschlossene Activity still.

## 1. Grundmodell

Eine vorbereitete Activity setzt sich aus fünf Ebenen zusammen:

1. gemeinsame Basisfelder der Activity Engine,
2. genau einem Arbeitsart-Template,
3. null bis mehreren Leistungs-Overlays,
4. null bis mehreren Kontext-Overlays,
5. einer optionalen Firmenanpassung auf dem Systemstandard.

```text
Activity-Basis
  + Arbeitsart (z. B. Montage)
  + Leistungen (Fassadengerüst + Dachfangschutz + Treppenturm)
  + Kontext (öffentlicher Raum + Kran erforderlich)
  + freigegebene Firmenanpassung
  = vorbereitete Activity-Struktur
```

Die Ebenen werden zusammengeführt. Sie erzeugen keine Unter-Activities allein deshalb, weil mehrere Templates beteiligt sind.

## 2. Gemeinsame Basisfelder

Jede Activity besitzt unabhängig vom Template:

- Typ,
- Titel und Beschreibung,
- Status und Priorität,
- verantwortliche Rolle oder Person,
- Termin, Fälligkeit oder Zeitfenster,
- Projekt- und Baustellenbezug,
- Kommentare und offene Punkte,
- Anhänge und referenzierte Fachobjekte,
- Ergebnis,
- Verlauf und Quelle.

Templates dürfen Basisfelder vorbelegen oder deren fachliche Relevanz erklären. Sie dürfen Basisfelder nicht umdeuten, duplizieren oder durch einen eigenen Status ersetzen.

## 3. Verbindliche Template-Struktur

Jedes Template wird fachlich mit folgenden Eigenschaften beschrieben:

| Eigenschaft | Regel |
|---|---|
| Template-ID | stabil und unabhängig von Anzeigename oder Version |
| Name | eindeutige Arbeitsart oder Leistung |
| Kategorie | Vertrieb, Vorbereitung, Betrieb, Kaufmännisch oder Organisation |
| Art | Arbeitsart-Template, Leistungs-Overlay, Kontext-Overlay oder Firmen-Overlay |
| Version | nachvollziehbarer fachlicher Stand |
| Gültigkeit | aktiv ab/bis; historische Versionen bleiben referenzierbar |
| Zweck | welches Arbeitsergebnis vorbereitet wird |
| Anwendungsbedingung | wann das Template aktiviert werden darf oder muss |
| Standardpriorität | Vorschlag, keine unveränderliche Entscheidung |
| Felder | typabhängige Eingaben mit Klassifikation und Begründung |
| Checkliste | Vorbereitung, Durchführung oder Abschlussprüfung |
| Dokumentanforderungen | benötigte, zu prüfende oder zu erzeugende Dokumentarten |
| Folgeaktivitäten | Vorschläge oder bedingte Erfordernisse mit Auslöser |
| Abschlusskriterien | fachliches Ergebnis und gegebenenfalls Nachweise |
| Sicherheitsgrenzen | Punkte, die keine automatische Freigabe erlauben |
| Verantwortungsprofil | geeignete Rolle; konkrete Zuweisung bleibt Activity-Datenbestand |

### Template-Punkt

Felder, Checklistenpunkte und Dokumentanforderungen besitzen mindestens:

- stabile Punkt-ID,
- fachliche Bezeichnung,
- Klassifikation Pflicht, optional oder bedingt,
- Bedingung und Begründung, sofern bedingt,
- Kategorie, etwa Material, Sicherheit, Logistik oder Dokument,
- erwarteten Wert oder Nachweis,
- Blocker-Kennzeichen,
- verantwortliche Rolle für Klärung oder Prüfung,
- Herkunft aus Systemstandard, Leistungs-, Kontext- oder Firmen-Overlay.

## 4. Pflicht, optional und bedingt

| Klasse | Bedeutung | Abschluss-/Readiness-Regel |
|---|---|---|
| Pflicht | für jede Anwendung dieses Templates fachlich erforderlich | muss beantwortet beziehungsweise erfüllt sein; ein Pflichtpunkt ist nicht automatisch ein Sicherheitsblocker |
| Optional | kann hilfreich sein, ist aber ohne weitere Bedingung nicht erforderlich | beeinflusst den regulären Abschluss nicht |
| Bedingt | nur erforderlich, wenn die dokumentierte Bedingung zutrifft | Bedingung muss mit ja, nein oder ungeklärt bewertet werden; bei ja gilt die definierte Pflichtregel |

„Nicht erforderlich“ ist ein dokumentiertes Ergebnis eines bedingten Punkts und nicht dasselbe wie „nicht bearbeitet“. „Ungeklärt“ bleibt sichtbar. Ein Blocker ist eine zusätzliche Kritikalität und darf nicht aus einer Prozentzahl verschwinden.

### Verbindliche Beispiele

- **Statik:** bedingt, wenn Regelausführung verlassen wird, statische Prüfung gefordert ist oder Konstruktion/Last dies erfordert.
- **Sondernutzung:** bedingt, wenn öffentlicher Verkehrs- oder Nutzungsraum betroffen ist.
- **Kran:** bedingt, wenn Transportweg, Bauteil oder Konstruktion den Kraneinsatz erfordert.
- **Dachfangschutz:** bedingt nach Bauablauf, Gebäudeseite und tatsächlichem Schutzbedarf.
- **Gefährdungsbeurteilung:** Pflicht für die dafür festgelegte Arbeitsart; fachliche Freigabe bleibt einer berechtigten Person vorbehalten.

## 5. Template-Katalog nach Arbeitsart

Der folgende Katalog ist der verbindliche Mindestumfang. Detaillierte Punkte können versioniert ergänzt werden, ohne einen parallelen Prozess einzuführen.

### Vertrieb

| Template | Typabhängige Kerndaten | Checkliste/Dokumente | Mögliche Folgeaktivitäten |
|---|---|---|---|
| Angebotsaufnahme | Ansprechpartner, Baustelle, Leistungsbedarf, gewünschter Termin, Besonderheiten, offene Fragen | Fotos, Pläne, Maße und Vor-Ort-Bedarf bedingt prüfen | Aufmaß, Rückruf, Gerüstplanung, Angebot erstellen |
| Angebot erstellen | Leistungsumfang, Kalkulationsgrundlagen, Miet-/Ausführungsannahmen, Gültigkeit | Aufmaß, Kalkulation und relevante Freigaben prüfen | Angebot prüfen/freigeben, Angebot versenden |
| Angebot nachfassen | Kontakt, letzter Stand, Wiedervorlage, Ergebnis | versendetes Angebot vorhanden | Telefonat, Besprechung, neue Wiedervorlage, Auftrag/Absage dokumentieren |
| Telefonat | Ansprechpartner, Thema, Ergebnis, Rückruf/Wiedervorlage | keine pauschalen Dokumentpflichten | Rückruf, Besprechung, Klärungs- oder Fachactivity |
| Besprechung | Teilnehmer, Termin, Thema, Entscheidungen, offene Punkte | Protokoll bedingt | Aufgaben/Folgeactivities je bestätigtem Ergebnis |

### Vorbereitung

| Template | Typabhängige Kerndaten | Wesentliche Prüfungen | Mögliche Folgeaktivitäten |
|---|---|---|---|
| Aufmaß | Abschnitt, Länge, Höhe, Fläche, Gerüstart, Besonderheiten | Fotos, Skizzen, Zugänge, Überbrückungen, Lasten, Dachfang, Treppenturm, Sonderkonstruktion, offene Fragen | Gerüstplanung, Statik prüfen, Rückfrage |
| Gerüstplanung | System, Geometrie, Last-/Breitenklasse, Konstruktion, Bauabschnitte | Regelausführung, Sonderbauteile, Anschlüsse und Bauablauf | Materialplanung, Statik prüfen, Montageanweisung |
| Materialplanung | Materialposition, Menge, Einsatzabschnitt, Bedarfszeitpunkt | Bestand, Reservierung, Transport und Rücklauf | Materialanforderung, Lieferung, Nachlieferung |
| Statik prüfen | Konstruktion, Lastannahmen, Prüfbedarf, Prüfer, Ergebnis | vollständige Planungsgrundlagen | Statik anfordern, Planung korrigieren, Freigabeentscheidung |
| Sondernutzung klären | betroffene Fläche, Zeitraum, Behörde, Auflagen | Antrag, Genehmigung, Frist | Unterlagen nachreichen, Termin anpassen |
| Parkmöglichkeit klären | Ort, Fahrzeug, Zeitraum, Halte-/Sperrbedarf | öffentliche Fläche und Zufahrt | Sondernutzung, Rückfrage, Dispositionshinweis |
| Kran planen | Last, Reichweite, Standort, Zeitfenster, Betreiber | Aufstellfläche, Zufahrt, Genehmigung, Qualifikation | Termin, Materialplanung, Dispositionshinweis |
| Montageanweisung | Konstruktion, System, Reihenfolge, Sonderdetails | aktuelle Planung, Statik und Gefährdungsbeurteilung referenzieren | Prüfung/Freigabe, Rückfrage Planung |
| Gefährdungsbeurteilung | Tätigkeit, Gefährdungen, Maßnahmen, Verantwortliche | projekt- und einsatzbezogene Aktualität | Prüfung/Freigabe, Unterweisung |
| Montagefreigabe | Termin, Baustelle, Leistungsumfang, Entscheider | alle blockierenden Voraussetzungen einzeln sichtbar | Montage terminieren oder Klärungsactivities |

### Betrieb

| Template | Typabhängige Kerndaten | Wesentliche Prüfungen | Mögliche Folgeaktivitäten |
|---|---|---|---|
| Montage | Arbeitsabschnitt, Kolonne, Material, Termin, Ergebnis | Zugang, Material, Unterlagen, Sicherheit und Leistungs-Overlays | Kontrolle, Aufmaß, Tagesabschluss, Materialanforderung |
| Umbau | Ist-Zustand, Änderungsumfang, Sperrbereiche, Material, Termin | geänderte Planung, Nutzung, Sicherheit | Kontrolle, Nachtrag, Materialanforderung |
| Kontrolle | Kontrollart, Bereich, Zustand, Mängel, Sicherheitsrelevanz | Verankerung, Seitenschutz, Beläge, Zugänge, Abschlüsse, Fremdveränderung, Schäden, Fotos | Mangel beheben, Sperrung/Klärung, Nachkontrolle |
| Reklamation | Melder, Beanstandung, Ort, Auswirkung, Rückmeldefrist | Fotos, Vertrag/Leistung und Sicherheitsrelevanz | Kontrolle, Mangel beheben, Rückruf, Nachtrag |
| Materiallieferung | Material, Menge, Ziel, Zeitfenster, Empfänger | Verfügbarkeit, Beladung, Zufahrt, Ablageort | Empfang prüfen, Nachlieferung, Montage |
| Materialabholung | Material, Menge, Abholort, Zeitfenster | Ladebedingungen, Restmaterial, Rücknahme | Rücktransport, Materialprüfung, weitere Abholung |
| Abbau | Bereich, Umfang, Termin, Kolonne, Rücktransport | Freimeldung, Zugang, Reinigung, Materialabtransport, Sicherheit | Materialabholung, Schlussaufmaß, Schlussrechnung |

### Kaufmännisch

| Template | Typabhängige Kerndaten | Wesentliche Prüfungen | Mögliche Folgeaktivitäten |
|---|---|---|---|
| Nachtrag | Anlass, zusätzliche Leistung, Menge, Preisgrundlage, Kundenfreigabe | Quelle, Fotos/Aufmaß und Vertragsabgrenzung | Nachtrag anbieten/nachfassen, Rechnung |
| Abschlagsrechnung | Leistungsstand, Aufmaß, Zeitraum, Betrag | Freigaben, Nachträge und bereits berechnete Mengen | Rechnung prüfen/freigeben/versenden, Zahlung prüfen |
| Schlussrechnung | Schlussaufmaß, Leistungsabschluss, Nachträge, Mietende | Vollständigkeit und Abgrenzung zu Abschlägen | Rechnung freigeben/versenden, Zahlung prüfen |
| Zahlung prüfen | Rechnung, Fälligkeit, Betrag, Zahlungseingang | Differenz und Zuordnung | Forderung nachfassen, Klärung Buchhaltung |

### Organisation

| Template | Typabhängige Kerndaten | Wesentliche Prüfungen | Mögliche Folgeaktivitäten |
|---|---|---|---|
| Rückruf | Ansprechpartner, Anlass, Frist, Ergebnis | Erreichbarkeit und Zuständigkeit | neuer Rückruf oder Fachactivity |
| Wiedervorlage | Grund, Termin, erwartete Information/Entscheidung | Quelle und Verantwortlichkeit | passende Fachactivity |
| Tagesabschluss | heutige Arbeiten, Restarbeiten, Restdauer, Mitarbeiter, Material, Behinderungen, Besonderheiten, Kolonnenfreigabe | Vollständigkeit bei nicht abgeschlossenem Einsatz | Materialanforderung, Dispositionshinweis, Rückfrage Bauleiter |
| Materialanforderung | Material, Menge, Bedarfszeitpunkt, Baustelle, Begründung | Bestand, Alternativen, Transport | Materialplanung, Lieferung, Dispositionshinweis |
| Termin | Zweck, Teilnehmer, Ort, Start/Ende | Konflikte und Voraussetzungen | Erinnerung, Rückruf oder Fachactivity |
| Jour Fix | Teilnehmer, Rhythmus, Themen, Entscheidungen | offene Punkte aus vorherigem Termin | benannte Folgeactivities |

## 6. Leistungs-Overlays für den Gerüstbau

Leistungs-Overlays ergänzen ein Arbeitsart-Template. Ein Projekt kann beliebig viele zutreffende Leistungen aktivieren.

| Leistung | Zusätzliche Kerndaten | Typische Checklisten-/Dokumentpunkte |
|---|---|---|
| Fassadengerüst | Gebäudeseite, Länge, Höhe, Fläche, System, Last-/Breitenklasse | Unterlagsholz, Fußplatten/Spindeln, Rahmen, Beläge, Geländer, Bordbretter, Diagonalen, Anker, Durchstiege, Wandabstand, Zugänge |
| Dachfanggerüst / Dachfangschutz | Gebäudeseite, Dachkante, Schutzbedarf, benötigter Bauabschnitt und Zeitpunkt | Bordbretter/Seitenschutz, Konsolen, Schutzwand/-netz, Sonderteile, Statik bedingt |
| Schutzgerüst | Schutzart, Gefahrenbereich, Nutzung darunter, Schutzklasse | Seitenschutz, Schutzlage/-netz, Absperrung, Lastannahmen, Statik bedingt |
| Treppenturm | Standort, Höhe, Nutzung, Personenfrequenz, Anschluss | Fundierung, Podeste, Geländer, Anschlüsse, Zugangsführung, Beleuchtung bedingt |
| Hängegerüst | Aufhängung, Tragkonstruktion, Last, Zugang, Rettung | geprüfte Anschlag-/Aufhängepunkte, Statik, Montagefolge, PSAgA/Rettungskonzept |
| Industriegerüst | Anlagenbereich, Betriebseinflüsse, Freigaben, Schichten | Anlagenfreigabe, Medien/Gefahrstoffe, Brandschutz, Zugangs- und Sperrregeln |
| Wetterschutzdach | Spannweite, Dachform, Entwässerung, Öffnungs-/Bauablauf | Statik, Verankerung/Ballast, Kran, Planen/Kassetten, Entwässerung, Windgrenzen |
| Sonderkonstruktion | Abweichung von Regelausführung, Geometrie, Last, Zweck | Planung, Statik, Montageanweisung, besondere Materialien, dokumentierte fachliche Freigaben |

„Dachfang benötigt?“ ist zunächst eine bedingte Prüfung. Bei Aktivierung werden Gebäudeseite und Bedarfszeitpunkt Pflicht. Material darf nicht pauschal dem ersten Einsatztag zugeordnet werden; jeder zeitabhängige Materialpunkt besitzt den benötigten Bauabschnitt oder Bedarfszeitpunkt.

## 7. Referenz: Montage Fassadengerüst

Das Arbeitsart-Template **Montage** kombiniert mit dem Leistungs-Overlay **Fassadengerüst** bereitet mindestens folgende Punkte vor:

| Punkt | Standardklasse | Bedingung/Hinweis |
|---|---|---|
| Baustelle zugänglich | Pflicht | ungeklärter Zugang kann Blocker sein |
| Parkmöglichkeit geklärt | bedingt | erforderlich nach Fahrzeug, Zufahrt und öffentlichem Raum |
| Material vorhanden | Pflicht | abschnitts- und termingerecht bewerten |
| Kolonne bestätigt | Pflicht | tatsächliche Zuweisung bleibt Activity-/Dispositionsdatenbestand |
| Unterlagsholz, Fußplatten/Spindeln, Rahmen, Beläge, Geländer, Bordbretter, Diagonalen, Anker und Durchstiege | Pflicht | Mengen ergeben sich aus Planung; nicht als pauschale Stückzahl im Template |
| Montageanweisung | Pflicht | Aktualität und Bezug zur Ausführung prüfen |
| Gefährdungsbeurteilung | Pflicht | menschlich verantwortete Prüfung/Freigabe |
| Sondernutzung | bedingt | bei Nutzung öffentlichen Raums |
| Statik | bedingt | außerhalb Regelausführung oder nach Prüfanforderung |
| Kran | bedingt | wenn Transport oder Konstruktion ihn erfordert |

Weitere Leistungs-Overlays ergänzen diese Liste. Ein Treppenturm oder Dachfangschutz überschreibt keinen Fassadengerüst-Punkt.

## 8. Referenz: Aufmaß

Ein Aufmaß bereitet mindestens folgende fachliche Erfassung vor:

- Gebäudeseite oder Abschnitt,
- Länge, Höhe und Fläche,
- Gerüstart und Leistungszuordnung,
- Besonderheiten und Hindernisse,
- Fotos und Skizzen,
- Zugänge und Überbrückungen,
- Lastanforderungen,
- Dachfangbedarf mit Gebäudeseite und Zeitpunkt,
- Treppenturm,
- Sonderkonstruktion,
- offene Fragen.

Mehrere Abschnitte sind wiederholbare Fachdaten derselben Activity. Ein Foto oder eine Skizze bleibt als referenziertes Fachobjekt nachvollziehbar.

## 9. Referenz: Kontrolle

Eine Kontrolle bereitet mindestens vor:

- Gerüstzustand,
- Verankerung,
- Seitenschutz,
- Beläge,
- Zugänge,
- Gerüstabschlüsse,
- Veränderungen durch Dritte,
- Schäden und Mängel,
- Fotos,
- Sicherheitsrelevanz,
- erforderliche Folgearbeiten.

Ein festgestellter Mangel erteilt keine automatische Freigabe. Sicherheitsrelevante Befunde können eine verantwortete Sperr-/Klärungsentscheidung und die Folgeactivities **Mangel beheben** sowie **Nachkontrolle** erfordern.

## 10. Referenz: Tagesabschluss Vorarbeiter

Wenn ein Einsatz nicht abgeschlossen ist, werden mindestens erfasst:

- heutige Arbeiten,
- Restarbeiten,
- geschätzte Restdauer,
- benötigte Mitarbeiter,
- Materialbedarf und Menge,
- benötigter Zeitpunkt,
- Behinderungen,
- Besonderheiten,
- voraussichtliche Freigabe der Kolonne.

Mögliche Folgeactivities sind Materialanforderung, Dispositionshinweis und Rückfrage an die Bauleitung. Sie werden nur erzeugt, wenn die verantwortliche Regel oder Person den konkreten Bedarf bestätigt; derselbe Bedarf wird nicht mehrfach angelegt.

## 11. Kombinations- und Deduplizierungsregeln

Die Auflösung mehrerer Templates folgt verbindlich diesen Schritten:

1. Arbeitsart-Template bestimmen.
2. alle zutreffenden Leistungs-Overlays hinzufügen.
3. Kontextbedingungen aus Projekt, Baustelle und Activity bewerten.
4. freigegebene Firmenanpassung anwenden.
5. Punkte nach stabiler fachlicher Punkt-ID zusammenführen.
6. Klassifikation und Kritikalität nach den folgenden Regeln auflösen.
7. Herkunft jedes resultierenden Punkts erhalten.
8. Konflikte sichtbar machen und nicht still entscheiden.

### Zusammenführung

- Gleiche Punkt-ID ergibt genau einen Punkt.
- Pflicht dominiert optional.
- Eine aktive bedingte Anforderung wird Pflicht; eine ungeklärte Bedingung bleibt bedingt und sichtbar.
- Blocker dominiert Hinweis.
- Frühester konkreter Bedarfszeitpunkt dominiert nicht pauschal: abweichende Bauabschnitte oder Zeitpunkte bleiben getrennte Bedarfe.
- Unterschiedliche Nachweise mit ähnlicher Bezeichnung werden nicht allein aufgrund des Textes zusammengeführt.
- Folgeaktivitäten werden nach Zieltyp, Projekt, Quelle und Anlass dedupliziert.
- Widersprüchliche Vorgaben erzeugen einen Konflikt zur fachlichen Klärung; sie werden nicht nach Reihenfolge überschrieben.

Beispiel:

```text
Montage
  + Fassadengerüst
  + Dachfangschutz (Nordseite, Einsatztag 3)
  + Treppenturm (Ostseite, Einsatztag 1)

= eine Montage-Activity mit gemeinsamer Basischeckliste,
  leistungsbezogenen Zusatzpunkten und zeitlich getrennten Materialbedarfen.
```

## 12. Dokumentanforderungen

Ein Template kann ein Dokument als **benötigt**, **zu prüfen**, **zu erstellen** oder **als Ergebnis erwartet** kennzeichnen. Das Template erzeugt kein Dokument und dupliziert keinen Dokumentstatus.

Jede Anforderung benennt:

- Dokumentart,
- Klassifikation und Bedingung,
- benötigten Zeitpunkt,
- verantwortliche Rolle,
- zulässige Aktualität/Version,
- Prüf- oder Freigabebedarf,
- Kritikalität.

Vorhandene Dokumente werden referenziert. Eine sicherheitskritische Dokumentanforderung gilt erst nach der vorgesehenen menschlichen Prüfung als erfüllt.

## 13. Folgeaktivitäten

Templates dürfen Folgeaktivitäten **vorschlagen** oder als **bedingt erforderlich** kennzeichnen. Sie senden keine Kommunikation und treffen keine Fachentscheidung.

Eine Folgeregel enthält:

- Auslöser aus Ergebnis, Feld, Checklistenpunkt oder Frist,
- Ziel-Activity-Typ,
- Vorschlag für Verantwortungsrolle, Priorität und Termin,
- übernommene Referenzen,
- Deduplizierungsschlüssel,
- Kennzeichnung automatisch vorgeschlagen oder menschlich bestätigt.

Null, eine oder mehrere Folgeactivities sind möglich. „Pflichtfolge“ bedeutet, dass der Bedarf vor Abschluss geklärt werden muss; sie darf nicht als ungeprüfte externe oder sicherheitskritische Entscheidung automatisch ausgeführt werden.

## 14. Firmenindividuelle Anpassungen

Der Systemstandard bleibt unverändert und versioniert erhalten. Unternehmen dürfen darauf ein Firmen-Overlay aufbauen:

- zusätzliche Felder oder Prüfpunkte,
- strengere Klassifikation,
- zusätzliche Dokumentanforderungen,
- eigene Folgeactivity-Vorschläge,
- firmeneigene Arbeitsweisen und Benennungen.

Verbindliche Grenzen:

- Systempunkte werden nicht gelöscht oder unkenntlich gemacht.
- Sicherheits- oder gesetzlich begründete Anforderungen dürfen nicht abgeschwächt werden.
- Abweichungen besitzen Begründung, Version, Freigabe, Gültigkeit und Auditspur.
- Firmen-Overlay und Systemstandard bleiben in der Herkunft unterscheidbar.
- Template-Administration erteilt keine fachliche Freigabekompetenz.
- Laufende Activities werden nur durch bewusste, nachvollziehbare Aktualisierung auf eine neue Template-Version gehoben.

## 15. Rollen und Governance

- Fachverantwortliche definieren Inhalt und Bedingungen.
- Sicherheitsverantwortliche prüfen sicherheitsrelevante Punkte.
- Berechtigte Administration veröffentlicht Versionen, entscheidet aber nicht allein über Fachfreigaben.
- Bauleitung beziehungsweise zuständige Rolle entscheidet im konkreten Projekt über bedingte Erforderlichkeit und Ausnahmen.
- Vorarbeiter und Mitarbeiter bearbeiten nur die für Rolle und Activity freigegebenen Punkte.
- Änderungen, Ausnahmen und bewusste Freigaben sind auditierbar.

## 16. Brain-Nutzung

Brain darf autorisierte Templates und konkrete Activity-Daten später nutzen, um:

- fehlende Voraussetzungen zu erkennen,
- ungeklärte Bedingungen hervorzuheben,
- nächste Schritte und Folgeactivities vorzuschlagen,
- Risiken und Blocker zu erklären,
- Dokumentationslücken festzustellen,
- Materialbedarf nach Bauabschnitt und Zeitpunkt vorzubereiten,
- Abweichungen zwischen Template und Ausführung sichtbar zu machen.

Brain darf nicht:

- sicherheitskritische Punkte eigenständig als erfüllt markieren,
- Statik, Montagefreigabe, Gefährdungsbeurteilung oder andere Fachentscheidungen ersetzen,
- externe Kommunikation verbindlich absenden,
- Firmenregeln verdeckt verändern,
- aus einer Prozentzahl eine fachliche Freigabe ableiten.

Jeder Hinweis nennt Template-Version, betroffene Punkte, verwendete Quellen und verbleibende Unsicherheit.

## 17. Architekturregeln

1. Activity Engine bleibt die einzige Prozesslogik.
2. Templates konfigurieren Activities; sie besitzen keinen eigenen operativen Status.
3. Eine Template-Anwendung erzeugt keine parallele Checklisten-, Dokument- oder Aufgabenakte.
4. Ergebnisse und Bearbeitungsstände gehören zur Activity beziehungsweise zum referenzierten Fachobjekt.
5. Mehrere Leistungen werden additiv kombiniert und nicht gegenseitig überschrieben.
6. Doppelte Punkte und Folgeactivities werden fachlich, nicht nur textuell dedupliziert.
7. Pflichtgrad, Bedingung, Blocker und Readiness bleiben unterscheidbar.
8. Zeitabhängiger Materialbedarf wird nach Bauabschnitt und Bedarfszeitpunkt geführt.
9. Template-Version und Herkunft bleiben an der vorbereiteten Struktur nachvollziehbar.
10. Historische Activities werden durch Template-Änderungen nicht still verändert.
11. Externe Kommunikation und Fachfreigaben benötigen weiterhin autorisierte menschliche Entscheidungen.
12. Brain empfiehlt und erklärt; es erteilt keine Freigabe.

## 18. Prüfung bestehender Grundlagen

| Dokument | Ergebnis | Präzisierung durch W-008 |
|---|---|---|
| PS-001 Activity Engine | kein Grundwiderspruch | Template ist Konfiguration der Activity Engine; Folgeactivities und Readiness erhalten ein kanonisches Definitionsmodell |
| Domain Model | Template-Begriff fehlte | Template und konkrete Activity-Erfüllung werden getrennt |
| Product Map | „Workflow auswählen“ war missverständlich | Activity Engine löst Templates auf; kein separates Workflow-Modul |
| Roadmap | Template-Governance fehlte | verbindliche Standards gehen regelbasierter Assistenz und Brain-Nutzung voraus |
| W-005 | Muss-Kriterien waren bewusst offen | Pflicht/optional/bedingt, Blocker und additive Leistungs-Overlays sind nun beschlossen |
| W-006 | Vorlagenadministration war nicht fachlich abgegrenzt | Firmen-Overlay, Veröffentlichung und Fachfreigabe bleiben getrennte Rechte |

## Verknüpfte Dokumente

- [Activity Engine](../../specs/PS-001-Activity-Engine.md)
- [Fachliches Domänenmodell](../../architecture/DOMAIN_MODEL.md)
- [Product Map](../../product-map/PRODUCT_MAP.md)
- [Roadmap](../../roadmap/ROADMAP.md)
- [W-005 – Workflow Operating System](../W-005-workflow-operating-system/SUMMARY.md)
- [W-006 – Rollen & Berechtigungen](../W-006-roles-permissions/SUMMARY.md)


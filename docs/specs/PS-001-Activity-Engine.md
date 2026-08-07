# PS-001 – Fachliche Spezifikation der Activity Engine

- **Version:** 2.0
- **Stand:** 7. August 2026
- **Status:** Fachlich spezifiziert
- **Quelle:** W-001 Projektlebenszyklus, W-002 Operating System und W-003 Activity Engine
- **Abgrenzung:** fachliches Modell; keine UI-, Datenbank-, API- oder Implementierungsvorgabe

## 1. Zweck und Leitbild

Die Activity Engine ist das zentrale Fachmodell für operative Arbeit in ScaffoldAI. Ein Projekt hält den gemeinsamen Kontext einer Baustelle. Aktivitäten beschreiben, **was getan werden soll, gerade geschieht, entschieden wurde oder als Ergebnis entstanden ist**.

Angebotsaufnahme, Telefonat, Lieferung, Montage, Kontrolle, Freigabe, Aufmaß, Rechnung und Abbau folgen demselben fachlichen Grundmuster. Spezialisierte Module ergänzen dieses Muster um ihre Fachdaten. Sie führen keine parallelen Prozessobjekte für denselben Vorgang.

Die Activity Engine verfolgt fünf Ziele:

1. Arbeit projektübergreifend sichtbar und priorisierbar machen.
2. jede Arbeit mit Verantwortlichkeit, Zeitpunkt, Voraussetzungen und Ergebnis verbinden.
3. Informationen am Entstehungsort einmal erfassen und anschließend referenzieren.
4. die Projekt-Timeline und Baustellenakte aus nachvollziehbaren Aktivitäten ableiten.
5. Entscheidungen vorbereiten, ohne die verantwortliche Person zu ersetzen.

## 2. Was ist eine Aktivität?

Eine Aktivität ist ein fachlich relevanter, zeitlich einordenbarer Arbeitsvorgang mit einem Zweck, einem Verantwortlichen und einem erwarteten oder festgestellten Ergebnis.

Eine Aktivität kann:

- geplant oder ungeplant sein,
- vor Ort, im Büro, telefonisch oder unterwegs stattfinden,
- wenige Minuten oder mehrere Tage dauern,
- ausführende Arbeit, Kommunikation, Prüfung oder Entscheidung darstellen,
- weitere Aktivitäten vorbereiten, blockieren oder auslösen,
- ohne materielles Ergebnis abgeschlossen werden, sofern das Ergebnis nachvollziehbar dokumentiert ist.

### Abgrenzung

- Ein **Projekt** beantwortet: Zu welcher Baustelle und welchem Auftrag gehört die Arbeit?
- Eine **Aktivität** beantwortet: Was ist zu tun oder passiert, wann, durch wen und mit welchem Ergebnis?
- Eine **Aufgabe** ist eine einfache Aktivität ohne eigenen spezialisierten Fachablauf.
- Ein **Baustellenbesuch** ist eine Aktivität mit Vor-Ort-Kontext.
- Ein **Timeline-Eintrag** ist eine chronologische Sicht auf ein Aktivitätsereignis, kein eigener Arbeitsvorgang.
- Ein **Dokument**, Foto, Aufmaß oder Nachtrag ist ein Fachobjekt beziehungsweise Ergebnis und wird mit seiner erzeugenden oder bearbeitenden Aktivität verbunden.

## 3. Fachlicher Kern einer Aktivität

### Immer erforderlich

| Eigenschaft | Fachliche Bedeutung |
|---|---|
| Identität | stabile, eindeutige Referenz der Aktivität |
| Projektkontext | genau ein Projekt beziehungsweise die zugehörige Baustellenakte |
| Aktivitätstyp | bestimmt fachlichen Zweck und erforderliche Regeln |
| Titel/Zweck | handlungsorientierte, verständliche Beschreibung |
| Status | aktueller Zustand im Lebenszyklus |
| Verantwortlichkeit | eine eindeutig verantwortliche Rolle oder Person |
| Priorität | relative Dringlichkeit mit nachvollziehbarer Begründung |
| Zeitbezug | geplanter, tatsächlicher oder fälliger Zeitpunkt |
| Quelle | wer oder welches Ereignis die Aktivität ausgelöst hat |
| Erfassungszeitpunkt | wann die Aktivität erstmals festgehalten wurde |

Ist ein Projekt bei einem frühen Eingang noch nicht fachlich qualifiziert, wird zuerst ein minimaler Projekt-/Anfragekontext angelegt. Eine operative Aktivität existiert nicht dauerhaft ohne Kontext.

### Situationsabhängig erforderlich

- Ort oder Baustellenbereich,
- Beteiligte und Ansprechpartner,
- geplante Dauer oder Zeitfenster,
- Kolonne, Mitarbeiter und Qualifikationen,
- Fahrzeug und Transport,
- Materialbedarf und Materialbewegungen,
- Voraussetzungen, Freigaben und Genehmigungen,
- Checkliste und Readiness-Kriterien,
- Beschreibung, Notizen und Kommunikation,
- Fotos, Maße, Dokumente und weitere Nachweise,
- Kosten-, Leistungs- oder Abrechnungsbezug,
- Ergebnis, Entscheidung und Begründung,
- Folgeaktivitäten und Abhängigkeiten,
- tatsächlicher Beginn, Unterbrechungen und Abschluss.

### Ergebnisregel

Eine Aktivität darf nur abgeschlossen werden, wenn ihr fachliches Ergebnis feststeht. Das Ergebnis kann beispielsweise „Montage ausgeführt“, „Kunde nicht erreicht“, „Freigabe verweigert“, „kein Nachtrag erforderlich“ oder „Folgetermin vereinbart“ lauten. „Abgeschlossen“ bedeutet nicht automatisch „erfolgreich“.

## 4. Aktivitätstypen

Aktivitätstypen werden in Familien organisiert. Die Familie bestimmt gemeinsame Regeln; der konkrete Typ bestimmt Checklisten, Readiness und mögliche Ergebnisse.

### Vertrieb und Kunde

- Kundenanfrage erfassen
- Anfrage qualifizieren
- Angebotsaufnahme vorbereiten
- Angebotsaufnahme vor Ort
- Angebot erstellen/prüfen/freigeben
- Angebot versenden
- Angebot nachfassen
- Kundenrückruf
- Kundenabstimmung
- Reklamation aufnehmen/bearbeiten

### Planung und Arbeitsvorbereitung

- Baustelle besichtigen
- Konstruktion klären
- Statik prüfen
- Lasten klären
- Aufmaß planen
- Materialbedarf vorbereiten
- Logistik klären
- Zufahrt/Parkplatz/Halteverbot/Sondernutzung klären
- Kran oder Transportweg klären
- Gefährdungsbeurteilung prüfen/freigeben
- Montageanweisung prüfen/freigeben
- Einsatz vorbereiten

### Disposition und Ressourcen

- Einsatz terminieren
- Kolonne zuordnen
- Mitarbeiter zuordnen
- Fahrzeug zuordnen
- Einsatz umplanen
- Ressourcenkonflikt klären
- Bereitschaft oder Abholung koordinieren

Diese Aktivitäten bilden die fachlichen Vorgänge der Disposition. Eine spätere Dispositionsoptimierung erweitert sie, ersetzt sie aber nicht.

### Material und Transport

- Material planen
- Material reservieren/kommissionieren
- LKW beladen
- Material liefern
- Material zwischen Baustellen umlagern
- Material nachliefern
- Materialbestand vor Ort prüfen
- Material rückholen
- Material entladen/rücknehmen/prüfen
- Schaden oder Verlust klären

### Ausführung auf der Baustelle

- Anfahrt
- Baustelleneinrichtung
- Materialtransport auf der Baustelle
- Aufbau/Montage
- Freigabe zur Nutzung
- Umbau
- Erweiterung
- Teilabbau
- Abbau
- Reinigung vor Abbau
- Abtransport
- Tagesrückmeldung

### Kontrolle, Sicherheit und Qualität

- Erstkontrolle
- Regelkontrolle
- Anlasskontrolle
- Mangel aufnehmen
- Mangel beheben
- Gerüstfreigabe
- Sicherheitsprüfung
- Abnahme/Baubesprechung
- Behinderung aufnehmen
- Unterbrechung/Eskalation

### Aufmaß, Änderung und Nachtrag

- Zwischenaufmaß
- Abschlagsaufmaß
- Schlussaufmaß
- Leistungsänderung aufnehmen
- Nachtrag prüfen
- Nachtrag anbieten/nachfassen
- Nachtrag freigeben/ablehnen
- Mietmenge oder Standzeit prüfen

### Kaufmännisch

- Kalkulation prüfen
- Abschlagsrechnung vorbereiten/prüfen/freigeben
- Schlussrechnung vorbereiten/prüfen/freigeben
- Rechnung versenden
- Zahlungseingang prüfen
- Forderung nachfassen
- kaufmännischen Projektabschluss prüfen

### Dokument und Kommunikation

- Telefonat
- Nachricht/E-Mail bearbeiten
- Baubesprechung
- Rückfrage klären
- Entscheidung/Freigabe einholen
- Dokument anfordern
- Dokument erstellen/prüfen/freigeben/versenden
- Foto, Notiz oder Nachweis zuordnen

### Abschluss und interne Arbeit

- offene Punkte prüfen
- Baustelle abmelden
- Projektabschluss prüfen
- Baustellenakte archivieren
- allgemeine Aufgabe

Die Liste ist erweiterbar. Ein neuer Typ ist nur erforderlich, wenn sich Zweck, Verantwortlichkeit, Readiness, erlaubte Ergebnisse oder Folgebeziehungen fachlich unterscheiden. Unterschiedliche Formulierungen allein begründen keinen neuen Typ.

## 5. Lebenszyklus

### Activity-Templates

Die verbindliche Struktur für typabhängige Felder, Checklisten, Dokumentanforderungen, Leistungs-Overlays und Folgeactivity-Vorschläge definiert [W-008 – Activity Templates](../workshops/W-008-activity-templates/SUMMARY.md). Templates konfigurieren eine Activity bei ihrer Vorbereitung; sie sind weder Activity noch eigener Workflow und besitzen keinen operativen Status.

Mehrere Gerüstleistungen werden additiv kombiniert. Pflichtgrad, Bedingung, Blocker und Readiness bleiben getrennt. Eine Template-Version darf bestehende Activities nicht still überschreiben und keine sicherheitskritische Freigabe erteilen.

### Fachliche Status

| Status | Bedeutung |
|---|---|
| Entwurf | erfasst, aber noch nicht verbindlich eingeplant |
| Geplant | Zweck, Verantwortlichkeit und Zeitbezug sind festgelegt |
| Vorbereitet | alle zwingenden Readiness-Kriterien sind erfüllt oder bewusst freigegeben |
| Disponiert | erforderliche operative Ressourcen sind verbindlich zugeordnet |
| Unterwegs | Ausführende oder Transport befinden sich auf dem Weg |
| Begonnen | die fachliche Bearbeitung läuft |
| Wartet | Fortsetzung hängt von einer benannten Person, Information oder Frist ab |
| Pausiert | bewusst unterbrochen, ohne externe Warteabhängigkeit |
| Abgeschlossen | Ergebnis und erforderliche Nachweise sind festgehalten |
| Storniert | wird nicht ausgeführt; Grund und Entscheidung sind dokumentiert |

Nicht jeder Typ verwendet jeden Status. Telefonate benötigen beispielsweise weder „Disponiert“ noch „Unterwegs“. Montage und Lieferung können den vollständigen Ablauf verwenden. Für jede Typfamilie wird ein zulässiges Statusprofil definiert.

### Statusregeln

- Jeder Statuswechsel besitzt Zeitpunkt und verantwortlichen Auslöser.
- Rücksprünge sind erlaubt, aber begründungspflichtig.
- „Wartet“ benennt immer, worauf und bis wann gewartet wird sowie wer nachfasst.
- „Pausiert“ benennt Grund, Auswirkung und erwartete Fortsetzung.
- „Storniert“ löscht weder Historie noch bereits erzeugte Nachweise.
- „Abgeschlossen“ verlangt Ergebnis; typspezifisch zusätzlich Nachweise oder Freigabe.
- Eine abgeschlossene Aktivität wird bei neuer Arbeit nicht still wiedergeöffnet. Entweder wird eine begründete Korrektur dokumentiert oder eine Folgeaktivität angelegt.

## 6. Readiness ist kein Status

Readiness beschreibt den messbaren Vorbereitungsgrad einer geplanten Aktivität. Sie beantwortet „Kann diese Arbeit sinnvoll und sicher beginnen?“. Der Lebenszyklusstatus beantwortet dagegen „Wo befindet sich die Aktivität gerade?“.

Ein Readiness-Kriterium besitzt:

- Bezeichnung und Kategorie,
- Zustand: vorhanden, fehlt, ungeklärt, nicht erforderlich oder bewusst freigegeben,
- Quelle und Aktualität,
- Verantwortlichen für die Klärung,
- Kritikalität: Hinweis oder Blocker,
- gegebenenfalls Frist und Freigabebegründung.

Mögliche Kategorien sind Termin, Kapazität, Konstruktion, Statik, Lasten, Logistik, Wirtschaftlichkeit, Material, Kolonne, Fahrzeug, Ansprechpartner, Genehmigung, Dokument, Sicherheit, Maße und Fotos.

Eine Prozentzahl darf nur ergänzend verwendet werden. Blockierende Kriterien bleiben einzeln sichtbar; 95 Prozent Readiness darf einen fehlenden Sicherheitsnachweis nicht verdecken.

## 7. Priorität und Dringlichkeit

Priorität wird nicht allein aus einem frei gewählten Farbwert gebildet. Ihre Begründung kann enthalten:

1. unmittelbare Gefahr oder Sicherheitsrelevanz,
2. wartende Kolonne oder drohender Baustellenstillstand,
3. verbindliche Frist oder Termin,
4. blockierte Folgeaktivitäten,
5. Kunde oder externe Stelle wartet,
6. kaufmännische Auswirkung,
7. reguläre planmäßige Arbeit.

Fachliche Stufen:

- **Kritisch:** sofortiges Eingreifen erforderlich.
- **Hoch:** heute entscheiden oder bearbeiten.
- **Normal:** planmäßig bearbeiten.
- **Niedrig:** keine unmittelbare Auswirkung.

Systemhinweise erklären die Herleitung. Verantwortliche Menschen können die Priorität begründet ändern.

## 8. Beziehungen zu Fachobjekten

| Fachobjekt | Beziehung zur Aktivität |
|---|---|
| Projekt/Baustelle | verpflichtender gemeinsamer Kontext |
| Kunde/Ansprechpartner | Beteiligter, Auslöser, Empfänger oder Entscheider |
| Kolonne | geplante oder tatsächlich ausführende Einheit |
| Mitarbeiter | verantwortlich, beteiligt, prüfend oder freigebend |
| Fahrzeug | für Einsatz oder Transport zugeordnet |
| Material | Bedarf, Reservierung, Ladung, Bewegung oder festgestellter Bestand |
| Foto | Nachweis oder Eingang; besitzt genau eine fachliche Quelle |
| Notiz/Kommunikation | Inhalt und Verlauf im Aktivitätskontext |
| Dokument | Eingang, Voraussetzung, Arbeitsstand oder Ergebnis |
| Checkliste | typspezifische Vorbereitung oder Durchführung |
| Maß/Aufmaß | erfasstes Ergebnis oder Voraussetzung einer Folgeaktivität |
| Nachtrag | aus Abweichungsaktivitäten abgeleitet und weiterbearbeitet |
| Behinderung/Mangel | spezialisiertes Ereignis mit Auswirkung und Maßnahme |
| Angebot/Rechnung | kaufmännischer Gegenstand einer prüfenden oder freigebenden Aktivität |
| Brain-Hinweis | nachvollziehbare Ableitung, niemals bindende Entscheidung |

Zuordnungen unterscheiden geplant und tatsächlich. Eine geplante Kolonne wird nicht automatisch zur tatsächlich ausführenden Kolonne. Fachobjekte werden referenziert, nicht in der Aktivität dupliziert.

## 9. Abhängigkeiten zwischen Aktivitäten

Aktivitäten werden durch gerichtete Beziehungen verbunden:

- **Voraussetzung für:** muss vor einer anderen Aktivität erfüllt sein.
- **Folgt auf:** reguläre fachliche Reihenfolge ohne zwingende Blockade.
- **Erzeugt:** Ergebnis löst eine konkrete Folgeaktivität aus.
- **Blockiert:** verhindert Beginn oder Abschluss einer anderen Aktivität.
- **Wird blockiert durch:** Gegenrichtung einer Blockade.
- **Ersetzt:** dokumentierte Neuplanung; der ersetzte Vorgang bleibt erhalten.
- **Korrigiert:** berichtigt das Ergebnis einer abgeschlossenen Aktivität.
- **Teilt sich in:** ein Vorgang erzeugt mehrere unabhängige Folgearbeiten.
- **Führt zusammen:** mehrere Voraussetzungen münden in eine Folgeaktivität.
- **Nachweis für:** liefert Beleg für Prüfung, Nachtrag oder Abrechnung.

### Typische Ketten

```text
Kundenanfrage
→ Qualifizierung
→ Angebotsaufnahme
→ Kalkulation / Angebot
→ Nachfassen
→ Auftrag

Auftrag
→ Arbeitsvorbereitung
→ Logistik- und Sicherheitsklärung
→ Disposition
→ Lieferung / Montage
→ Kontrolle / Freigabe

Ausführung oder Umbau
→ Aufmaß
→ Nachtrags- oder Abschlagsprüfung
→ Rechnung

Abmeldung
→ Abbau
→ Rücktransport / Materialprüfung
→ Schlussaufmaß
→ Schlussrechnung
→ Projektabschluss
```

Ketten sind keine starren Einbahnstraßen. Reklamation, Behinderung, Terminänderung oder fehlende Freigabe können an jeder Stelle neue Aktivitäten auslösen. Ein Projektstatus wird aus relevanten Aktivitäten verdichtet, ersetzt diese aber nicht.

## 10. Regeln für Folgeaktivitäten

- Eine Folgeaktivität übernimmt Referenzen auf Projekt und relevante Quellen, nicht kopierte Inhalte.
- Auslöser und fachliche Begründung bleiben nachvollziehbar.
- Verpflichtende Folgeaktivitäten sind typspezifisch definiert, dürfen aber begründet entfallen.
- Ein Ergebnis kann null, eine oder mehrere Folgeaktivitäten erzeugen.
- Wiederkehrende Kontrollen bilden einzelne Aktivitäten mit gemeinsamer Serie; vergangene Kontrollen werden nicht überschrieben.
- Eskalation ist eine neue Entscheidungs- oder Klärungsaktivität und kein bloßer Farbwechsel.

## 11. Timeline aus Aktivitäten

Die Projekt-Timeline ist eine chronologische Projektion fachlich relevanter Aktivitätsereignisse. Sie besitzt kein paralleles Prozessmodell.

Timeline-relevant sind mindestens:

- Aktivität angelegt, terminiert, begonnen, wartend, pausiert, abgeschlossen oder storniert,
- Verantwortlichkeit oder verbindlicher Termin geändert,
- Blockade, Behinderung oder Eskalation festgestellt/aufgehoben,
- Entscheidung oder Freigabe erteilt/verweigert,
- relevantes Foto, Maß, Dokument oder Materialereignis hinzugefügt,
- Ergebnis korrigiert,
- Folgeaktivität erzeugt oder Beziehung geändert.

Jeder Timeline-Eintrag beantwortet:

- wann,
- wer oder welche autorisierte Quelle,
- was geschah,
- in welcher Aktivität,
- warum beziehungsweise mit welcher Begründung,
- welche Quelle oder welches Ergebnis betroffen ist.

Die Timeline speichert keine Kopie vollständiger Fachdaten. Sie verweist auf Aktivität und Fachobjekt. Korrekturen ergänzen den Verlauf; sie löschen den ursprünglichen Stand nicht.

## 12. Digitale Baustellenakte

Die Baustellenakte ist die projektbezogene Gesamtsicht auf:

- alle Aktivitäten und ihre Beziehungen,
- daraus abgeleitete Timeline,
- referenzierte Fotos, Notizen, Maße und Dokumente,
- Entscheidungen, Freigaben, Behinderungen und Nachträge,
- geplante und tatsächliche Ressourcen-/Materialbezüge,
- offene, wartende, blockierte und abgeschlossene Arbeit.

Die Akte ist keine zusätzliche Erfassungsstelle. Inhalte werden in ihrer Aktivität beziehungsweise fachlichen Quelle erfasst und in der Akte zusammengeführt.

## 13. Regeln für „Heute“

Auf „Heute“ erscheinen Aktivitäten, wenn mindestens eine Bedingung gilt:

- heute geplant, fällig oder begonnen,
- kritisch oder blockierend,
- wartet heute auf die angemeldete Person,
- eine zugeordnete Kolonne wartet auf Entscheidung oder Voraussetzung,
- Frist ist erreicht oder überschritten,
- heute neu eingegangen und noch nicht eingeordnet,
- Ergebnis ist prüf- oder freigabebereit,
- muss heute vorbereitet werden, damit ein naher Einsatz nicht gefährdet wird.

Nicht automatisch auf „Heute“ erscheinen alle aktiven Projekte, alle offenen Aktivitäten oder rein informative Historieneinträge.

### Reihenfolge auf „Heute“

1. Sicherheitsgefahr und akuter Baustellenstillstand.
2. Wartende Kolonne oder unmittelbar blockierter Einsatz.
3. Überfällige verbindliche Frist.
4. Heute erforderliche Entscheidung/Freigabe.
5. Heutige geplante Ausführung und Termine.
6. Kundenrückruf, Angebot, Aufmaß, Nachtrag und Rechnung mit heutiger Fälligkeit.
7. Vorbereitung der nächsten Einsätze.

Priorisierung berücksichtigt Rolle und Verantwortlichkeit. Eine Person sieht nicht jede betriebliche Aktivität, sondern ihre eigene Arbeitslage und autorisierte Eskalationen.

## 14. Spätere Brain-Ableitungen

Brain darf auf Basis autorisierter Aktivitäten und ihrer referenzierten Fachobjekte später ableiten:

- fehlende Voraussetzungen und Readiness-Lücken,
- drohende Frist-, Termin- oder Baustellenstillstände,
- wartende Personen, Kolonnen und externe Stellen,
- wiederkehrende Behinderungs- oder Mangelursachen,
- fehlende Fotos, Maße, Dokumente oder Freigaben,
- Abweichung zwischen geplanter und tatsächlicher Ausführung,
- mögliches Aufmaß-, Nachtrags- oder Abrechnungspotenzial,
- nächste fachlich plausible Aktivität,
- Kommunikations- und Klärungsbedarf,
- Durchlauf-, Warte- und Unterbrechungszeiten,
- Auslastung, Engpässe und Terminkonflikte,
- Materialfluss und vermeidbare Lageraufenthalte,
- Vollständigkeit vor Projektabschluss.

Jede Ableitung unterscheidet Fakten, Regeln, Annahmen und Empfehlung. Sie nennt Quellen und Aktualität. Brain darf keine Sicherheitsfreigabe, kaufmännische Bindung, Disposition oder Bauleiterentscheidung autonom ausführen.

## 15. Fachliche Architekturregeln

1. Die Activity Engine ist die einzige fachliche Quelle für operative Vorgänge.
2. Jede Aktivität besitzt genau einen Vorgangskontext; dieser kann vor Projektübernahme noch unverbindlich sein.
3. Spezialisierte Module erweitern Aktivitäten oder referenzieren sie; sie duplizieren keine Status-, Verantwortlichkeits- oder Timeline-Logik.
4. Ein Baustellenbesuch ist eine Aktivitätsart, kein paralleles Grundmodell.
5. Timeline und „Heute“ sind Sichten auf Aktivitäten, keine eigenen Arbeitsbestände.
6. Fotos, Notizen, Maße, Dokumente und Materialbewegungen besitzen eine eindeutige fachliche Quelle und werden referenziert.
7. Geplante und tatsächliche Werte bleiben unterscheidbar.
8. Status, Readiness, Priorität und Ergebnis sind getrennte Konzepte.
9. Historie wird ergänzt oder korrigiert, nicht still überschrieben.
10. Abhängigkeiten sind explizit; Blockaden nennen Ursache, Auswirkung und Verantwortlichen.
11. Abschluss verlangt ein fachliches Ergebnis; Erfolg ist keine Voraussetzung für Abschluss.
12. Wartende Arbeit benennt Gegenstelle, Frist und Nachfassverantwortung.
13. Automatisch vorbereitete Inhalte bleiben als Entwurf oder Empfehlung erkennbar.
14. Verbindliche Entscheidungen bleiben bei autorisierten Menschen.
15. Neue Module benötigen eine begründete Ausnahme, wenn sie ein eigenes Prozessmodell statt einer Aktivitätserweiterung einführen.
16. Kommunikation ist Quelle oder Kontext einer Aktivität, aber kein eigener Workflow; E-Mail-, Telefon- und Rückrufzustände ersetzen keinen Activity-Status.
17. Automatisch erkannte Zuordnungen, Termine, Aufgaben oder Antwortentwürfe bleiben bis zur menschlichen Bestätigung Vorschläge.
18. Arbeitsplatz, Heute, Kalender und Benachrichtigungen referenzieren Activities und ihre Quellen, statt eigene Arbeitsbestände zu führen.

## 16. Fachliche Qualitätskriterien

Die Activity Engine ist fachlich tragfähig, wenn:

- alle relevanten Arbeiten des Projektlebenszyklus als Aktivität ausdrückbar sind,
- ein Bauleiter projektübergreifend seine heutige Arbeit erkennen kann,
- jede Aktivität Verantwortlichkeit, Zeitbezug, Status und Ergebnis besitzt,
- Baustellenbesuche ohne Verlust ihrer Spezialdaten eingeordnet werden,
- Readiness und Blockaden vor Arbeitsbeginn sichtbar sind,
- Folgeaktivitäten und Abhängigkeiten nachvollziehbar bleiben,
- Timeline und Baustellenakte ohne Doppelerfassung entstehen,
- geplante und tatsächliche Ressourcen unterscheidbar sind,
- regelbasierte Hinweise bis zur Quelle erklärbar sind,
- neue Fachmodule keine parallelen Aktivitätsbestände aufbauen.

## 17. Offene fachliche Entscheidungen

- Welche Aktivitätstypen bilden den kleinsten sinnvollen ersten Katalog?
- Welche Statusprofile gelten je Typfamilie?
- Welche Readiness-Kriterien sind je Typ zwingende Blocker?
- Welche betriebsspezifischen Einschränkungen ergänzen die in [W-006](../workshops/W-006-roles-permissions/SUMMARY.md) beschlossene Rollen-, Reichweiten- und Freigabematrix je Aktivitätstyp?
- Wann wird eine Korrektur, wann eine neue Folgeaktivität verwendet?
- Welche wiederkehrenden Aktivitäten werden als Serie geplant?
- Wie werden unternehmensspezifische Typen ergänzt, ohne gemeinsame Begriffe zu verlieren?
- Welche Ereignisse sind aus Datenschutz- oder Aufbewahrungsgründen besonders zu behandeln?

## Verknüpfte Grundlagen

- [W-003 – Activity Engine Workshop](../workshops/W-003-activity-engine/SUMMARY.md)
- [W-008 – Activity Templates](../workshops/W-008-activity-templates/SUMMARY.md)
- [W-006 – Rollen & Berechtigungen](../workshops/W-006-roles-permissions/SUMMARY.md)
- [W-002 – Operating System](../workshops/W-002-operating-system/SUMMARY.md)
- [Fachliches Domänenmodell](../architecture/DOMAIN_MODEL.md)
- [Projektlebenszyklus](../workflows/PROJECT_LIFECYCLE.md)
- [ADR-002: Activity statt Visit](../decisions/ADR-002-activity-statt-visit.md)

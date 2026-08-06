# W-002 – ScaffoldAI Operating System Workshop

- **Stand:** 7. August 2026
- **Zweck:** Bedienkonzept für den ereignisorientierten Arbeitstag eines Bauleiters
- **Betrachtet:** Dashboard, Projektübersicht, Projektdetail, Baustellenbesuche und vorhandene Produktkonzepte
- **Abgrenzung:** reine UX- und Produktkonzeption; keine technische Umsetzung

## Leitentscheidung

ScaffoldAI wird im täglichen Gebrauch nicht primär über Projekte, sondern über **Arbeitssituationen und Aktivitäten** organisiert. Das Projekt bleibt die verbindliche fachliche Akte und liefert Kontext. Es ist jedoch nicht der übliche Startpunkt einer Handlung.

Der erste Bildschirm beantwortet deshalb nicht „Welche Projekte gibt es?“, sondern:

1. Was steht jetzt an?
2. Wo droht Stillstand oder Fristverlust?
3. Welche Entscheidung wird von mir benötigt?
4. Was ist bereits vorbereitet?
5. Was kann ich in wenigen Minuten abschließen?

Das zentrale UX-Objekt ist die **Aktivität**. Anruf, Angebotsaufnahme, Freigabe, Problem, Baustellenbesuch, Lieferung, Rückfrage, Dokumentprüfung und Abnahme erscheinen in einer gemeinsamen Arbeitslage. Projekt, Kunde, Baustelle und Beteiligte bleiben jederzeit als Kontext sichtbar.

## Bewertung des heutigen UX-Konzepts

### Dashboard und Projektübersicht

Der heutige Einstieg ist eine visuell klare Projektübersicht mit Projektkarten und einem Assistenten zur Projektanlage. Sie eignet sich zum Anlegen und Wiederfinden weniger Baustellen. Für den Arbeitstag eines Bauleiters skaliert dieses Konzept fachlich nicht:

- Projekte werden gleichrangig dargestellt, obwohl Dringlichkeit und Handlungsbedarf stark variieren.
- Die Seite zeigt Bestand statt Arbeit: Name, Typ, Status und Leistungen, aber keine fälligen Entscheidungen, Rückrufe oder Störungen.
- Der Nutzer muss wissen, in welchem Projekt ein Ereignis liegt, bevor er handeln kann.
- Ein Telefonat, eine Freigabe oder ein Problem hat keinen direkten Einstieg.
- „Neues Projekt“ ist prominent, obwohl „nächste Arbeit erledigen“ häufiger und dringlicher ist.
- Der seitliche Assistent bleibt allgemein und nutzt die aktuelle Arbeitslage nicht sichtbar.

**Urteil:** gute Projektablage, aber kein Tagescockpit.

### Projekte

Die Projektkarten liefern Identität und groben Status. Es fehlen jedoch Readiness, nächster Einsatz, letzter relevanter Vorgang, offene Entscheidung, verantwortliche Person und Eskalationsgrad. Eine reine Projektliste sollte künftig ein gezieltes Nachschlagewerk sein, nicht die Startseite.

### Projektdetail

Die zur Baustellenzentrale ausgebaute Projektseite geht in die richtige Richtung: Adresse, Kontakt, Status, offene Arbeiten, nächster Einsatz, Prüfpunkte, technische und kaufmännische Daten werden zusammengeführt. Sie bleibt aber eine umfangreiche Akte. Für eine spontane Entscheidung muss klarer zwischen „jetzt wichtig“, „nächster Einsatz“, „offene Entscheidungen“ und „Historie/Stammdaten“ getrennt werden.

**Urteil:** notwendige Kontextzentrale, aber nicht das Betriebssystem des Tages.

### Baustellenbesuche

Die Besuchsansicht ist der ereignisorientierteste Teil der Anwendung. Sie führt schrittweise, zeigt Fortschritt, speichert Fotos und Notizen im Kontext und hat ausreichend große mobile Bedienflächen. Einschränkungen des Konzepts:

- Sie ist auf Vor-Ort-Besuche begrenzt; Anruf, Freigabe, Störung oder Dokumentprüfung folgen noch keinem gemeinsamen Muster.
- Vor dem Start fehlt eine klare Readiness: Was ist vorhanden, was fehlt, was blockiert?
- Ergebnis, nächste Entscheidung und Übergabe sollten am Ende stärker verdichtet werden.
- Allgemeine „Brain“-Hinweise dürfen keine dauerhaft belegte Navigationsfläche ohne konkrete Handlung bilden.

**Urteil:** geeigneter Prototyp für die allgemeine Aktivitätsansicht.

# 1. Informationsarchitektur

## Primäre Bereiche

### Heute

Persönliche, priorisierte Arbeitslage. Enthält fällige Aktivitäten, Entscheidungen, Rückrufe, Störungen, Termine und kurze Erledigungen. „Heute“ ist der Standardstart.

### Aktivitäten

Gesamte operative Arbeit unabhängig vom Projekt: geplant, aktiv, wartend, blockiert und abgeschlossen. Filter nach Zeitpunkt, Priorität, Typ, Verantwortlichem, Projekt und Status.

### Baustellen

Projekt- und Baustellenakten zum Nachschlagen und Steuern. Hier liegen Stammdaten, Beteiligte, technischer und kaufmännischer Stand, Timeline sowie alle referenzierten Aktivitäten.

### Kalender

Zeitliche Sicht auf Einsätze, Fristen, Besprechungen, Freigaben, Rückrufe und geplante Aktivitäten. Keine eigenständige Datenwelt, sondern eine Sicht auf Aktivitäten.

### Eingang

Noch nicht eingeordnete Ereignisse: Kundenanfragen, Anrufe, Nachrichten, neue Unterlagen und interne Meldungen. Jeder Eingang wird geklärt, einer Aktivität zugeordnet oder bewusst verworfen.

### Mehr

Sekundäre Bereiche wie Kontakte, Dokumente, Suche, Vorlagen, Einstellungen und Administration. Sie unterstützen Arbeit, bestimmen aber nicht den Tagesfluss.

## Querschnittsfunktionen

- **Globale Suche:** Projekt, Kunde, Adresse, Ansprechpartner, Aktivität oder Dokument finden.
- **Schnellerfassung:** Anruf, Problem, Notiz, Foto, neue Anfrage oder Aufgabe aus jedem Bildschirm erfassen.
- **Benachrichtigungen:** nur zustandsverändernde oder entscheidungsrelevante Hinweise.
- **Kontextleiste:** zeigt bei jeder Aktivität Projekt, Baustelle, Ansprechpartner und Status.
- **Vorbereitung:** macht vorhandene und fehlende Informationen vor Beginn einer Arbeit sichtbar.

## Was zusammengehört

- Aktivität, Timeline-Ereignis, Aufgabe und Kommunikation werden nicht in getrennten Postfächern geführt. Eine Aktivität trägt Verlauf, Kommunikation und Ergebnis.
- Baustelle und Projekt sind im Bedienkonzept eine Kontextzentrale. Eine künstliche Trennung ist für den Bauleiter nicht hilfreich.
- Kalender und „Heute“ sind unterschiedliche Sichten auf dieselben Aktivitäten.
- Fotos, Notizen und Dokumente bleiben bei ihrer Quelle und werden in Aktivität und Baustellenakte referenziert.

# 2. Screen Map

```text
App-Start
└── Heute – Bauleiter-Cockpit
    ├── Aktivität öffnen
    │   ├── vorbereiten / fehlende Informationen klären
    │   ├── bearbeiten / dokumentieren
    │   ├── entscheiden / freigeben
    │   └── abschließen / Folgeaktivität anlegen
    ├── Ereignis schnell erfassen
    │   ├── Anruf
    │   ├── Problem / Behinderung
    │   ├── Foto / Notiz
    │   └── Kundenanfrage
    ├── Baustelle im Kontext öffnen
    │   ├── Aktueller Stand
    │   ├── Nächster Einsatz
    │   ├── Offene Entscheidungen
    │   ├── Aktivitäten / Timeline
    │   └── Technik / Kaufmännisch / Dokumente
    └── Kalender öffnen

Hauptnavigation
├── Heute
├── Aktivitäten
├── Baustellen
├── Kalender
├── Eingang
└── Mehr
```

Die zuerst geöffnete Seite ist **Heute**. Eine zuletzt geöffnete Baustelle darf beim Wechsel zurück erhalten bleiben, ersetzt aber nicht den Tagesstart einer neuen Sitzung.

## Hauptbildschirme

1. **Heute:** priorisierte Arbeitslage.
2. **Aktivitätsliste:** alle Vorgänge mit Arbeitsfiltern.
3. **Aktivitätsdetail:** Vorbereitung, Durchführung, Entscheidung und Ergebnis.
4. **Baustellenliste:** Suche und Portfolioüberblick.
5. **Baustellenzentrale:** aktueller Projektkontext.
6. **Kalender:** zeitliche Planung und Fristen.
7. **Eingang:** ungeklärte Ereignisse.
8. **Globale Erfassung:** kompakter, kontextabhängiger Erfassungsfluss.
9. **Globale Suche:** schneller Direktzugriff ohne Navigationsumweg.

# 3. User Journey – Arbeitstag des Bauleiters

## 06:30 – Arbeitsbeginn

Der Bauleiter öffnet **Heute**. Innerhalb von 30 Sekunden sieht er:

- heutige Einsätze nach Startzeit,
- blockierte oder unzureichend vorbereitete Arbeiten,
- Rückrufe und Fristen,
- Entscheidungen, auf die Kolonnen warten,
- Änderungen seit dem Vorabend.

Er entscheidet: Was muss vor Ausfahrt geklärt werden? Welche Kolonne benötigt eine Freigabe? Welcher Kunde muss zuerst zurückgerufen werden?

## 06:40 – Tagesvorbereitung

Er öffnet die kritischste Aktivität „Montage Baustelle A“. Die Aktivität zeigt Readiness und fehlende Informationen. Von dort springt er nicht in mehrere Module, sondern klärt die fehlende Zufahrtsbestätigung, prüft die Montageanweisung und bestätigt die Vorbereitung.

Benötigt werden Termin, Baustelle, Ansprechpartner, Arbeiten, Kolonne, Unterlagen, Material-/Logistikstatus und Risiken. Entscheidung: einsatzbereit, mit Auflage freigeben oder blockieren.

## 07:00 – Rückfragen der Kolonnen

Ein Anruf wird über die globale Schnellerfassung als Aktivität „Telefonat“ dokumentiert. Projektkontext, Anrufer und offene Baustellenpunkte werden eingeblendet. Das Ergebnis erzeugt bei Bedarf eine Folgeaktivität, beispielsweise „Maß prüfen“ oder „Kundenfreigabe einholen“.

Entscheidung: sofort beantworten, delegieren, terminieren oder eskalieren.

## 08:00 – Fahrt und Baustellenbesuch

Auf dem Smartphone öffnet der Bauleiter aus **Heute** den geplanten Besuch. Oben stehen Adresse, Navigation, Ansprechpartner, Zweck, Readiness und die eine nächste Handlung. Vor Ort führt die Aktivität durch Checkliste, Fotos, Maße und Notizen.

Entscheidung: Arbeit freigeben, Mangel dokumentieren, Nachtrag prüfen, unterbrechen oder Folgearbeit planen.

## 10:30 – Ungeplantes Problem

Eine Behinderung wird über „Problem erfassen“ angelegt. Die App fragt nur nach Mindestangaben: Wo, was passiert, seit wann, Auswirkung und Beleg. Danach zeigt sie die vorbereiteten nächsten Entscheidungen: Kolonne umplanen, Kunden informieren, Nachtrag prüfen, Frist setzen.

Die neue Aktivität erscheint priorisiert in **Heute**, ohne dass der Bauleiter zuerst die Projektakte suchen muss.

## 12:00 – Kunden und Angebote

Im Bereich **Heute** ist ein Block „Kurze Erledigungen“ sichtbar. Der Bauleiter bearbeitet Rückrufe, prüft eine Angebotsaufnahme und ergänzt fehlende Unterlagen. Jede Erledigung öffnet direkt die Aktivität mit Kunden- und Projektkontext.

Entscheidung: Angebot ist kalkulationsbereit, Rückfrage erforderlich oder Anfrage wird nicht weiterverfolgt.

## 14:00 – Koordination und Termine

Im **Kalender** prüft der Bauleiter die kommenden Einsätze. Konflikte werden nicht nur farbig markiert, sondern als fehlende Entscheidung formuliert. Er öffnet eine Aktivität, verschiebt sie oder ergänzt Voraussetzungen. Eine spätere Disposition kann hier anschließen, ist aber nicht Voraussetzung des Bedienkonzepts.

## 15:30 – Dokumentation und Freigaben

Der Bereich „Entscheidungen“ in **Heute** bündelt prüfbereite Ergebnisse: Besuch abschließen, Aufmaß bestätigen, Nachtrag freigeben, Dokument prüfen. Die Software zeigt Quelle, Änderungen, Vollständigkeit und Auswirkung. Der Bauleiter prüft und bestätigt; ScaffoldAI übernimmt nicht seine Entscheidung.

## 16:30 – Tagesabschluss

Die Ansicht **Tagesabschluss** ist ein gefilterter Zustand von „Heute“:

- Was wurde erledigt?
- Was wartet auf andere?
- Was ist blockiert?
- Welche Information fehlt für morgen?
- Welche Folgeaktivitäten wurden noch nicht terminiert?

Der Bauleiter verschiebt bewusst, delegiert oder priorisiert offene Punkte. Danach ist der nächste Morgen vorbereitet.

# 4. Informationshierarchie

## Dashboard „Heute“

### Immer oben

1. aktueller Zeitpunkt und persönliche Arbeitslage,
2. kritische/blockierte Aktivitäten,
3. jetzt und als Nächstes fällige Einsätze,
4. wartende Entscheidungen und Rückrufe,
5. globale Schnellerfassung.

### Mittlere Ebene

- weitere heutige Aktivitäten,
- kurze Erledigungen,
- Änderungen seit letzter Nutzung,
- Vorschau auf morgen.

### Weiter unten oder auf Abruf

- allgemeine Projektkennzahlen,
- abgeschlossene Arbeit,
- langfristige Trends,
- nicht handlungsrelevante Hinweise.

## Baustellenzentrale

### Immer oben

1. Name und vollständige Adresse,
2. Status und aktuelle Phase,
3. nächster Einsatz mit Readiness,
4. kritische offene Entscheidung oder Blockade,
5. Kunde und direkt nutzbarer Ansprechpartner.

### Mittlere Ebene

- aktuelle Arbeiten und Fragen,
- letzte Aktivität und Fotos,
- kommende Aktivitäten,
- technische Eckdaten,
- relevante Dokumente.

### Weiter unten oder in Unteransichten

- vollständige Timeline,
- kaufmännische Details,
- historische Besuche,
- Stammdaten und seltene Einstellungen.

## Aktivität

### Immer oben

1. klare Handlungsüberschrift,
2. Zeitpunkt, Priorität und Status,
3. Baustelle/Projekt und Ansprechpartner,
4. verantwortliche Person,
5. Readiness, Blockade und nächste Handlung.

### Mittlere Ebene

- vorbereitete Informationen und Checkliste,
- Fotos, Notizen, Maße und Dokumente,
- Kommunikation und Entscheidungen,
- kontextabhängiger Workflow.

### Weiter unten oder auf Abruf

- vollständiger Änderungsverlauf,
- verwandte frühere Aktivitäten,
- technische Metadaten und Auditinformationen.

# 5. Navigation

## Bewertung der aktuellen Navigation

„Übersicht“, „Projekte“, „Aufnahmen“ und „Einstellungen“ bilden eine klassische softwarezentrierte Navigation. „Übersicht“ und „Projekte“ sind fachlich kaum unterscheidbar. „Aufnahmen“ bezeichnet ein Datenformat statt ein Arbeitsziel. Einstellungen sind im täglichen Primärraum zu präsent. Die rechte, dauerhaft sichtbare Brain-Spalte beansprucht insbesondere auf kleineren Desktopbreiten viel Platz, ohne immer eine konkrete Entscheidung zu unterstützen.

## Vorgeschlagene Hauptnavigation

1. **Heute** – persönliche Arbeitslage und Standardstart.
2. **Aktivitäten** – alle operative Arbeit.
3. **Baustellen** – Akten, Kontext und Portfolio.
4. **Kalender** – Termine, Fristen und Einsätze.
5. **Eingang** – noch ungeklärte Ereignisse.
6. **Mehr** – Suche, Kontakte, Dokumente, Einstellungen und Administration.

Zusätzlich gibt es unabhängig von der Navigation eine dauerhaft erreichbare Aktion **„Erfassen“**.

## Desktop und Mobil

- Desktop: linke Navigation; keine starre rechte Assistentenspalte. Kontextbezogene Unterstützung erscheint innerhalb der aktuellen Aktivität oder als einblendbares Panel.
- Mobil: untere Navigation für Heute, Aktivitäten, Baustellen und Kalender; zentrale Aktion „Erfassen“; Eingang und weitere Bereiche unter „Mehr“.
- Die aktive Position wird aus dem tatsächlichen Kontext bestimmt, nicht global auf „Übersicht“ fixiert.

## Begründung

Die neue Navigation entspricht den fünf wiederkehrenden Fragen: Was jetzt? Welche Arbeit gibt es? Welche Baustelle betrifft es? Wann passiert es? Was ist noch ungeklärt? Sie reduziert den Zwang, vor jeder Handlung zuerst ein Projekt zu suchen.

# 6. Cockpit-Konzept

## Aufbau des idealen Bauleiter-Cockpits

### Lagekopf

- Datum, Uhrzeit und Arbeitsmodus,
- Anzahl kritischer, heute fälliger und wartender Aktivitäten,
- auffällige Veränderung seit letzter Nutzung,
- globale Erfassung.

### Jetzt kritisch

Maximal drei bis fünf handlungsrelevante Karten. Jede Karte enthält:

- Ereignis oder erforderliche Entscheidung,
- Baustelle und Ansprechpartner,
- Frist beziehungsweise Auswirkung,
- Begründung der Priorität,
- genau eine primäre Handlung.

### Tageslinie

Chronologische Abfolge aus Einsätzen, Besprechungen, Rückrufen und Fristen. Ungeplante Ereignisse werden dort einsortiert, ohne den ursprünglichen Plan zu verdecken.

### Wartet auf mich

Freigaben, Rückfragen und prüfbereite Ergebnisse. Dieser Bereich ist wichtiger als allgemeine Benachrichtigungen.

### Wartet auf andere

Offene externe Antworten mit Verantwortlichem und vereinbarter Frist. Dadurch entfallen Gedächtnislisten und unnötige Nachfragen.

### Schnell erledigen

Kurze Aufgaben wie Rückruf, Foto zuordnen, Termin bestätigen oder Frage beantworten. Ziel: Lücken zwischen Terminen produktiv nutzen.

### Morgen vorbereiten

Einsätze mit niedriger Readiness, fehlenden Dokumenten, Ansprechpartnern oder Freigaben. Der Bereich erscheint schon heute, nicht erst am nächsten Morgen.

## Priorisierungslogik als UX-Regel

Die Reihenfolge wird transparent aus Zeit, Blockadewirkung, Sicherheitsrelevanz, wartenden Personen und wirtschaftlicher Frist gebildet. Nutzer können Prioritäten ändern. Die Oberfläche erklärt, warum etwas oben steht; sie trifft keine bindende Entscheidung.

# 7. Projektseite

## Informationen innerhalb der ersten zehn Sekunden

- Wo ist die Baustelle und wie komme ich hin?
- In welcher Phase und welchem Zustand befindet sie sich?
- Was ist der nächste Einsatz und ist er vorbereitet?
- Was blockiert aktuell?
- Wer ist der Ansprechpartner und wie erreiche ich ihn?
- Was war die letzte relevante Aktivität?

## Fehlende beziehungsweise stärker benötigte Inhalte

- klare Readiness des nächsten Einsatzes,
- offene Entscheidungen statt nur offene Freitexte,
- Verantwortliche und Fristen,
- Aktivitätsstrom über Besuche hinaus,
- Kommunikation mit offen/erledigt/wartet auf,
- erkennbare Veränderungen seit dem letzten Öffnen,
- direkter Einstieg in eine Folgeaktivität.

## Empfohlene Reihenfolge

1. **Lagekopf:** Adresse, Status, Ansprechpartner, kritischer Hinweis.
2. **Nächster Einsatz:** Zweck, Termin, Readiness, fehlende Informationen, Hauptaktion.
3. **Offene Entscheidungen und Arbeiten.**
4. **Aktuelle Aktivität und letzte Veränderungen.**
5. **Technischer Stand und relevante Dokumente.**
6. **Kaufmännischer Stand.**
7. **Timeline und historische Baustellenbesuche.**

Technische und kaufmännische Felder sollen standardmäßig lesend verdichtet sein. Bearbeitung erfolgt gezielt im jeweiligen Abschnitt. Eine dauerhaft vollständig editierbare Formularseite erzeugt visuelle Unruhe und schwächt den Lageüberblick.

# 8. Aktivitätskonzept

## Aktivitätskopf

- handlungsorientierter Titel, beispielsweise „Zufahrt für Montage klären“,
- Typ und Status,
- Projekt/Baustelle mit Adresse,
- Zeitpunkt, Frist und Priorität,
- Verantwortlicher und Beteiligte,
- Readiness und Blockadegrund.

## Vier Phasen einer Aktivität

### 1. Verstehen

Was ist passiert oder soll erreicht werden? Warum ist es relevant? Wer wartet auf das Ergebnis?

### 2. Vorbereiten

Vorhandene Informationen, fehlende Voraussetzungen, passende frühere Daten, Ansprechpartner, Dokumente und Checkliste werden zusammengeführt.

### 3. Bearbeiten und entscheiden

Der kontextabhängige Arbeitsbereich zeigt nur die erforderlichen Eingaben und Entscheidungen. Fotos, Sprache, Notizen, Maße und Dokumente werden direkt im Vorgang erfasst.

### 4. Abschließen und übergeben

Ergebnis, getroffene Entscheidung, offene Folge, Empfänger und nächste Aktivität werden bestätigt. Der Abschluss aktualisiert Timeline und Baustellenstand.

## Automatisch vorzubereitende Informationen

- Projekt-, Kunden-, Adress- und Ansprechpartnerkontext,
- letzte relevante Aktivität und Entscheidung,
- vorhandene Fotos, Maße und Dokumente,
- bekannte Baustellen- und Logistikrestriktionen,
- offene Fragen und Abhängigkeiten,
- Fristen und vereinbarte Termine,
- rollen- und aktivitätsspezifische Prüfpunkte,
- Vorschlag für Folgeaktivität und Empfänger.

Automatisch vorbereitet bedeutet: auffinden, zusammenführen, auf Lücken prüfen und als Entwurf anbieten. Der Mensch bestätigt sicherheitsrelevante, kaufmännische und verbindliche Ergebnisse.

## Aktivitätsarten für den ersten Operating-System-Schnitt

- Baustellenbesuch,
- Telefonat/Rückruf,
- Problem/Behinderung,
- Freigabe/Entscheidung,
- Kundenanfrage/Angebotsaufnahme,
- Dokumentprüfung,
- Termin/Einsatz,
- allgemeine Aufgabe.

Diese Typen teilen Status, Kontext, Verantwortlichkeit, Readiness, Ergebnis und Timeline, besitzen aber unterschiedliche Arbeitsinhalte.

# UX-Prinzipien des ScaffoldAI Operating System

1. **Arbeit vor Ablage:** zuerst Handlungsbedarf, danach Projektstruktur.
2. **Ereignis vor Modul:** ein Vorgang bleibt zusammen, auch wenn er Material, Dokument, Kommunikation und Termin berührt.
3. **Kontext ohne Suche:** Baustelle, Ansprechpartner und Vorgeschichte werden mitgeführt.
4. **Eine nächste Handlung:** jeder kritische Eintrag hat eine klare primäre Aktion.
5. **Vorbereitung sichtbar:** vorhanden, fehlt, blockiert und bereit sind unterscheidbar.
6. **Warten ist ein Zustand:** „wartet auf mich“ und „wartet auf andere“ sind explizit.
7. **Menschliche Entscheidung:** ScaffoldAI bereitet vor, erklärt und erinnert; der Bauleiter entscheidet.
8. **Mobile Ereigniserfassung:** ungeplante Arbeit ist in wenigen Schritten dokumentierbar.
9. **Keine Doppelpflege:** Sichten referenzieren dieselbe Quelle.
10. **Ruhe vor Vollständigkeit:** oben steht nur, was die nächste Entscheidung verbessert.

# Empfohlene Produktentscheidungen

- „Heute“ ersetzt die Projektübersicht als Startseite.
- Aktivitäten werden zum primären Navigations- und Bedienobjekt.
- Projekte bleiben als Baustellenakte und Kontextzentrale erhalten.
- Die starre Brain-Seitenleiste wird durch kontextbezogene Vorbereitung und Hinweise ersetzt.
- „Aufnahmen“ wird nicht als Hauptbereich geführt; Fotos, Notizen und Maße gehören zur Aktivität.
- Eingang, Warten und Entscheidungen werden als Arbeitszustände sichtbar gemacht.
- Der bestehende Besuchsworkflow dient als Ausgangspunkt für eine allgemeine Aktivitätsansicht.

# Erfolgskriterien für das Bedienkonzept

- Der Bauleiter erkennt morgens innerhalb von 30 Sekunden seine kritische Arbeitslage.
- Eine ungeplante Meldung kann ohne vorherige Projektsuche erfasst werden.
- Jede Aktivität zeigt innerhalb von zehn Sekunden Handlung, Kontext, Verantwortlichen und fehlende Voraussetzungen.
- Der Wechsel zwischen Telefonat, Baustelle, Freigabe und Dokumentprüfung folgt demselben Grundmuster.
- Offene Arbeit ist nach „wartet auf mich“, „wartet auf andere“ und „blockiert“ unterscheidbar.
- Der Tagesabschluss lässt keine unbewusst verlorenen Ereignisse zurück.

# Offene Validierungsfragen

- Welche drei Ereignisarten unterbrechen den Bauleiter im realen Alltag am häufigsten?
- Nach welchen Regeln priorisiert ein Bauleiter bei gleichzeitigem Sicherheits-, Termin- und Kundenkonflikt?
- Welche Informationen müssen offline verfügbar sein?
- Welche Aktivitäten darf ein Vorarbeiter selbst abschließen, welche benötigen Bauleiterfreigabe?
- Welche externen Kanäle speisen den Eingang zuerst: Telefonnotiz, E-Mail oder Messenger?
- Welche Readiness-Prüfpunkte sind je Aktivitätsart zwingend und welche optional?

# Empfohlene nächste Schritte

1. Konzept mit zwei bis drei Bauleitern anhand eines echten Arbeitstags validieren.
2. „Heute“-Cockpit und Aktivitätsdetail als Low-Fidelity-Ablauf testen.
3. Priorisierungsregeln und Zustände „wartet auf mich/andere“ fachlich definieren.
4. Bestehende Screens gegen die neue Screen Map inventarisieren: behalten, umordnen, zusammenführen oder später ersetzen.
5. Erst nach Validierung Entwicklungstickets aus dem Bedienkonzept ableiten.

## Verknüpfte Grundlagen

- [W-001 – Projektlebenszyklus](../W-001-project-lifecycle/SUMMARY.md)
- [Activity Engine](../../specs/PS-001-Activity-Engine.md)
- [MVP 1.0](../../MVP.md)
- [Activity statt Visit](../../decisions/ADR-002-activity-statt-visit.md)
- [Rollenmodell](../../roles/ROLE_MODEL.md)

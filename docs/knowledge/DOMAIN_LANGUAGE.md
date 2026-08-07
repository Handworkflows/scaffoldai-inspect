# ScaffoldAI Domain Language Dictionary

- **Version:** 1.0
- **Stand:** 7. August 2026
- **Status:** Verbindlich
- **Quelle:** W-001 bis W-005, bestehende Anwendung und Produktarchitektur
- **Zweck:** gemeinsame Fachsprache für Produkt, UX, Architektur, Tickets und Dokumentation

## Verbindlichkeit

Dieses Wörterbuch legt fest, welche Begriffe ScaffoldAI bevorzugt verwendet. Es unterscheidet drei Ebenen:

1. **Fachbegriff:** eindeutiger Begriff im Domänenmodell und in Spezifikationen.
2. **Nutzerbegriff:** Formulierung, die in der jeweiligen Arbeitssituation verständlich angezeigt wird.
3. **Interner Produktbegriff:** zulässiger Name für Architektur oder Produktfamilien, der nicht ungeprüft in die Oberfläche übernommen wird.

Die bevorzugte Bezeichnung wird in neuen Dokumenten und Oberflächen verwendet. Zulässige Alternativen dürfen in natürlicher Sprache vorkommen, dürfen aber keine zweite Bedeutung erhalten. Als „vermeiden“ markierte Begriffe werden nur in historischen Quellen, Zitaten oder ausdrücklich erklärendem Kontext verwendet.

## Sprachprinzipien

1. **Alltag vor Softwarejargon:** „Verlauf“ statt „Timeline“, wenn ein Bauleiter die chronologische Ansicht benutzt.
2. **Konkrete Arbeit vor Oberbegriff:** „Montage abschließen“ statt „Aktivität bearbeiten“, wenn der Typ bekannt ist.
3. **Objekt und Arbeit trennen:** Ein Angebot ist ein Fachobjekt; „Angebot erstellen“ ist eine Aktivität.
4. **Ort und Geschäftskontext trennen:** Baustelle ist der Ort; Projekt ist die kaufmännisch-organisatorische Klammer.
5. **Zustände nicht vermischen:** Status, Priorität und Vorbereitungsgrad beantworten unterschiedliche Fragen.
6. **Keine unnötigen Anglizismen:** englische Begriffe sind nur als interne Produktnamen oder etablierte Fachkürzel zulässig.
7. **Rollenverständlich formulieren:** Bauleiter, Vorarbeiter, Gerüstbauer, Disposition und Geschäftsführung müssen denselben Kernbegriff wiedererkennen.
8. **Ein Begriff je Bedeutung:** Synonyme dürfen die Lesbarkeit verbessern, aber keine parallelen Modelle erzeugen.

# Kernwörterbuch

## Heute

- **Bevorzugter Name:** Heute
- **Alternativen:** Tagesübersicht, heutige Arbeitslage
- **Vermeiden:** Dashboard, Übersicht, Start-Dashboard
- **Definition:** persönliche, priorisierte Sicht auf die heute relevante Arbeit, Termine, Entscheidungen, Blockaden und Hinweise.
- **Einsatzbereich:** Hauptnavigation, Startseite, Produkt- und UX-Dokumentation.
- **Begründung:** „Heute“ entspricht der Frage eines Bauleiters und ist für alle operativen Rollen unmittelbar verständlich. „Dashboard“ beschreibt eine Softwaredarstellung, keine Arbeitssituation.
- **Rollenbewertung:** für Bauleiter, Vorarbeiter und Disposition sehr natürlich; für Gerüstbauer verständlich; Geschäftsführung benötigt zusätzlich eine eigene Unternehmensübersicht.

## Arbeitsplatz

- **Bevorzugter Name:** Arbeitsplatz
- **Alternativen:** persönlicher Arbeitsplatz
- **Vermeiden:** Inbox, Communication Hub, persönliches Dashboard
- **Definition:** rollenabhängige persönliche Sicht auf Kommunikation, Activities, Aufgaben, Kalender, Wiedervorlagen, Benachrichtigungen und Hinweise.
- **Einsatzbereich:** Hauptnavigation und persönliche Arbeitsorganisation.
- **Abgrenzung:** Heute zeigt nur die aktuell priorisierte Arbeit. Arbeitsplatz umfasst Eingang, Bestand und Planung, erzeugt aber keine eigenen Kopien.

## Kommunikation

- **Bevorzugter Name:** Kommunikation, bei bekanntem Kanal konkreter E-Mail, Telefonnotiz oder Rückrufbitte
- **Alternativen:** Nachricht für ein einzelnes Kommunikationsobjekt
- **Vermeiden:** Chat als Sammelbegriff, wenn keine Echtzeitunterhaltung gemeint ist
- **Definition:** fachliche Quelle und Austauschkontext, aus dem Activities entstehen oder aktualisiert werden können.
- **Abgrenzung:** Kommunikation ist kein eigener Workflow. „Gelesen“ oder „beantwortet“ bedeutet nicht automatisch fachlich erledigt.

## Benachrichtigung

- **Bevorzugter Name:** Benachrichtigung
- **Alternativen:** Hinweis, wenn Inhalt und Handlungsbezug im Vordergrund stehen
- **Vermeiden:** Aufgabe, Activity oder Warnung als pauschales Synonym
- **Definition:** persönlicher Verweis auf eine relevante Änderung, Zuweisung, Frist oder Antwort.
- **Abgrenzung:** Lesestatus einer Benachrichtigung verändert weder Activity noch Vorgang.

## Unternehmensübersicht

- **Bevorzugter Name:** Unternehmensübersicht
- **Alternativen:** Geschäftsführungsübersicht
- **Vermeiden:** Geschäftsführer-Dashboard, Management Dashboard
- **Definition:** verdichtete Sicht auf Pipeline, Leistung, Liquidität, Kapazität und Risiken des Unternehmens.
- **Einsatzbereich:** Geschäftsführung und Roadmap.
- **Begründung:** grenzt die strategische Sicht klar von „Heute“ ab und vermeidet den Sammelbegriff Dashboard.

## Vorgang

- **Bevorzugter Fachbegriff:** Vorgang
- **Nutzerbegriff:** im jeweiligen Arbeitsbereich Anfrage, Angebot, Einsatzvorbereitung, Projekt oder Baustelle
- **Alternativen:** Geschäftsvorgang in erklärendem Kontext
- **Vermeiden:** Vorgang als Synonym für eine einzelne Aktivität
- **Definition:** stabile fachliche Identität vom ersten Kundenkontakt bis zum Archiv, deren Zustände und Sichten ohne Datenkopie durch die Unternehmensbereiche wandern.
- **Einsatzbereich:** Architektur, bereichsübergreifende Referenzen, Lebenszyklus und Übergaben.
- **Begründung:** Der Begriff verbindet Vertrieb, Vorbereitung und Betrieb, ohne eine noch unverbindliche Anfrage fälschlich Projekt zu nennen.
- **Abgrenzung:** Eine Aktivität ist konkrete Arbeit innerhalb eines Vorgangs. Ein Projekt ist der verbindliche Zustand nach Angebotsannahme und Übernahme.

## Projekt

- **Bevorzugter Name:** Projekt
- **Alternativen:** Auftrag, wenn tatsächlich der beauftragte Leistungsumfang gemeint ist
- **Vermeiden:** Baustelle als vollständiges Synonym
- **Definition:** verbindlicher Zustand eines Vorgangs nach Angebotsannahme und Projektübernahme mit Auftrag, Leistungen, Verantwortlichkeiten und verbindlicher Planungswirkung.
- **Einsatzbereich:** Projektakte, Einsatzvorbereitung, Betrieb sowie kaufmännische und organisatorische Zusammenhänge.
- **Begründung:** Im Alltag gebräuchlich, besonders für Bauleitung, Disposition und Geschäftsführung. Gerüstbauer sprechen häufiger von der Baustelle; deshalb muss im operativen Kontext die Baustelle prominent sein.
- **Abgrenzung:** Ein Projekt kann mehrere Orte oder Abschnitte betreffen. Die Baustelle ist der physische Ausführungsort.

## Baustelle

- **Bevorzugter Name:** Baustelle
- **Alternativen:** Einsatzort, Objekt nur wenn betrieblich üblich
- **Vermeiden:** Projekt, wenn ausschließlich Ort oder Baustellensituation gemeint ist
- **Definition:** physischer Ort der Gerüstbauleistung mit Adresse, Zugang, Ansprechpartnern, örtlichen Bedingungen und Gefährdungen.
- **Einsatzbereich:** operative Ansichten, Einsatz, Logistik, Sicherheit, Fotos und Vor-Ort-Arbeit.
- **Begründung:** universell verständlicher Alltagsbegriff für alle betrachteten Rollen.

## Baustellenakte

- **Bevorzugter Name:** Baustellenakte
- **Vollständiger Name:** digitale Baustellenakte
- **Alternativen:** Projektakte, wenn der kaufmännische Gesamtvorgang im Vordergrund steht
- **Vermeiden:** Datei, Ordner, Projektspeicher
- **Definition:** vollständige projektbezogene Gesamtsicht auf Aktivitäten, Verlauf und referenzierte Fachobjekte.
- **Einsatzbereich:** Architektur und zusammenhängende Projekt-/Baustellensicht.
- **Begründung:** „Baustellenakte“ ist anschaulich und verbindet Büro und Baustelle. „Digital“ ist in der Anwendung selbst meist überflüssig.
- **Abgrenzung:** Die Akte ist eine Sicht und keine zweite Erfassungsstelle.

## Aktivität

- **Bevorzugter Fachbegriff:** Aktivität
- **Nutzerbegriff:** konkreter Aktivitätstyp, beispielsweise Montage, Rückruf, Kontrolle oder Aufmaß
- **Alternativen:** Arbeitsschritt
- **Vermeiden:** Activity in deutschsprachigen Oberflächen; Aufgabe oder Vorgang als Synonym für jede Aktivität
- **Definition:** fachlich relevanter, zeitlich einordenbarer Arbeitsvorgang mit Zweck, Verantwortlichkeit, Status, Zeitbezug und Ergebnis.
- **Einsatzbereich:** Domänenmodell, Architektur, übergreifende Listen und Filter.
- **Begründung:** „Aktivität“ ist rollenübergreifend verständlich und weit genug für Telefonat, Lieferung, Montage und Freigabe. Im Alltag ist der konkrete Typ natürlicher als der Oberbegriff.

## Aufgabe

- **Bevorzugter Name:** Aufgabe
- **Alternativen:** To-do nur in informeller Sprache
- **Vermeiden:** Aktivität als pauschales Synonym
- **Definition:** einfache Aktivität mit klarer Erledigung, die keinen spezialisierten Fachablauf benötigt.
- **Einsatzbereich:** persönliche Arbeitslisten und kurze Folgearbeiten.
- **Begründung:** im Alltag aller Rollen üblich. Die Einschränkung verhindert ein zweites, paralleles Aufgabenmodell.

## Baustellentermin

- **Bevorzugter Nutzerbegriff:** Baustellentermin
- **Bevorzugter Fachbegriff:** Baustellenbesuch
- **Alternativen:** Vor-Ort-Termin, Ortstermin
- **Vermeiden:** Visit, Site Visit
- **Definition:** Aktivität mit geplantem oder tatsächlichem Vor-Ort-Kontext auf einer Baustelle.
- **Einsatzbereich:** „Baustellentermin“ in Navigation, Kalender und Alltagssprache; „Baustellenbesuch“ im bestehenden Fachmodell und bei der historischen Aktivitätsart.
- **Begründung:** Bauleiter und Disposition planen Termine; „Besuch“ klingt teilweise unverbindlich. Bei Kontrollen oder Aufnahmen ist „Baustellenbesuch“ dennoch etabliert. Beide Begriffe bezeichnen keine unterschiedlichen Modelle.

## Einsatz

- **Bevorzugter Name:** Einsatz
- **Alternativen:** Kolonneneinsatz, Baustelleneinsatz
- **Vermeiden:** Termin als vollständiges Synonym
- **Definition:** geplante oder tatsächliche Ausführung einer oder mehrerer zusammengehöriger Aktivitäten durch zugeordnete Ressourcen an einem Ort und in einem Zeitfenster.
- **Einsatzbereich:** Tagesplanung, Kolonnen, Fahrzeuge, Logistik und Disposition.
- **Begründung:** für Vorarbeiter, Gerüstbauer und Disposition natürlicher Begriff. Ein Einsatz kann mehrere Aktivitäten enthalten; eine Aktivität kann auch ohne Einsatz stattfinden.

## Kolonne

- **Bevorzugter Name:** Kolonne
- **Alternativen:** Montageteam, Team in allgemeiner Kommunikation
- **Vermeiden:** Crew
- **Definition:** zeitbezogen zusammengestellte operative Einheit aus Vorarbeiter und Mitarbeitenden.
- **Einsatzbereich:** Ausführung, Einsatzplanung und Disposition.
- **Begründung:** etablierter Branchenbegriff. „Team“ ist verständlich, verliert aber den spezifischen Gerüstbaukontext.

## Disposition

- **Bevorzugter Name:** Disposition
- **Alternativen:** Einsatzplanung, wenn die konkrete Tätigkeit gemeint ist
- **Vermeiden:** Scheduling, Ressourcenmanager
- **Definition:** fachliche Planung und Abstimmung von Einsätzen, Kolonnen, Mitarbeitenden, Fahrzeugen, Material und Zeitfenstern.
- **Einsatzbereich:** Rolle, Fachbereich und Planungsvorgänge.
- **Begründung:** für Bauleiter, Disponenten und Geschäftsführung etablierter Begriff. Gerüstbauer verstehen „Einsatzplanung“ meist schneller; deshalb ist dies der bevorzugte Nutzerbegriff für die konkrete Handlung.

## Material

- **Bevorzugter Name:** Material
- **Alternativen:** Gerüstmaterial, Bauteile bei Einzelteilen
- **Vermeiden:** Ware, Bestand als Synonym
- **Definition:** für einen Gerüstbauvorgang benötigte, bewegte, verbaute oder zurückgeführte Gerüstbauteile und zugehörige Ausstattung.
- **Einsatzbereich:** Planung, Lager, Transport, Baustelle und Rücklauf.
- **Begründung:** durchgängig verwendeter Alltagsbegriff. „Bestand“ bezeichnet nur eine Mengenlage, nicht das Material selbst.

## Material Intelligence

- **Bevorzugter Produktname:** Material Intelligence
- **Nutzerbegriffe:** Materialübersicht, Materialplanung, Materialbedarf oder Materialfluss – je nach Tätigkeit
- **Alternativen:** keine als gleichbedeutender Sammelbegriff
- **Vermeiden:** Materialmanager
- **Definition:** Produktbereich, der Bedarf, Verfügbarkeit, Einsatzbezug, Bewegung, Rücklauf und Prognose von Material zusammenführt.
- **Einsatzbereich:** Produktarchitektur und Roadmap; nicht als pauschales UI-Label für jede Materialaufgabe.
- **Begründung:** als Produktname akzeptiert, im Baustellenalltag jedoch zu abstrakt. Nutzer sehen den konkreten Arbeitsbegriff.

## Aufmaß

- **Bevorzugter Name:** Aufmaß
- **Alternativen:** Zwischenaufmaß, Abschlagsaufmaß, Schlussaufmaß als konkrete Typen
- **Vermeiden:** Vermessung, Maße als vollständiges Synonym
- **Definition:** nachvollziehbare Ermittlung und Dokumentation ausgeführter oder abzurechnender Mengen und Leistungen.
- **Einsatzbereich:** technische Aufnahme, Leistungsstand, Nachtrag und Abrechnung.
- **Begründung:** etablierter Fach- und Alltagsbegriff für alle Rollen außer möglicherweise neuen Gerüstbauern; dort kann ein kurzer Kontext helfen.
- **Abgrenzung:** Ein einzelnes Maß ist ein Eingang; das Aufmaß ist das strukturierte fachliche Ergebnis.

## Nachtrag

- **Bevorzugter Name:** Nachtrag
- **Alternativen:** Nachtragsleistung, Nachtragsangebot je nach Stadium
- **Vermeiden:** Change, Change Request
- **Definition:** gegenüber dem beauftragten Leistungsumfang geänderte oder zusätzliche Leistung mit Ursache, Nachweis, Bewertung und Bearbeitungsstand.
- **Einsatzbereich:** Bauleitung, Aufmaß, Angebot und Abrechnung.
- **Begründung:** branchenweit etabliert. Der Zusatz benennt bei Bedarf, ob Leistung, Prüfung oder Angebot gemeint ist.

## Behinderung

- **Bevorzugter Name:** Behinderung
- **Alternativen:** Arbeitsbehinderung; Behinderungsanzeige nur für das formale Dokument
- **Vermeiden:** Problem als Ersatz für den fachlich festgestellten Sachverhalt
- **Definition:** Zustand oder Ereignis, das geplante Arbeit verhindert oder verzögert.
- **Einsatzbereich:** Baustelle, Aktivität, Nachtrag und Kommunikation.
- **Begründung:** fachlich und vertraglich relevanter Begriff. „Problem“ bleibt für noch nicht eingeordnete Meldungen zulässig.

## Verlauf

- **Bevorzugter Nutzerbegriff:** Verlauf
- **Bevorzugter Architekturbegriff:** Timeline
- **Alternativen:** Projektverlauf, Baustellenverlauf
- **Vermeiden:** Historie, wenn nur technische Änderungsprotokolle gemeint sind
- **Definition:** chronologische Sicht auf fachlich relevante Ereignisse und Aktivitäten eines Projekts.
- **Einsatzbereich:** „Verlauf“ in der Oberfläche; „Timeline“ in Architektur und bestehenden Konzeptnamen.
- **Begründung:** „Verlauf“ ist natürliches Deutsch und für alle Rollen verständlich. Timeline bleibt ein klar definierter interner Architekturbegriff.

## Hinweis

- **Bevorzugter Name:** Hinweis
- **Alternativen:** Information, wenn keine Handlung oder Bewertung enthalten ist
- **Vermeiden:** Alert für jeden Hinweis
- **Definition:** kontextbezogene Information, die Aufmerksamkeit verdient, aber nicht zwingend sofortiges Handeln erfordert.
- **Einsatzbereich:** Heute, Aktivität, Baustellenakte und regelbasierte Unterstützung.
- **Begründung:** neutral und verständlich. Hinweise dürfen nicht mit Aufgaben, Risiken oder Entscheidungen vermischt werden.

## Warnung

- **Bevorzugter Name:** Warnung
- **Alternativen:** kritischer Hinweis
- **Vermeiden:** Hinweis bei sicherheits- oder stillstandsrelevanten Sachverhalten
- **Definition:** Information über ein konkretes Risiko, eine Fristverletzung, Blockade oder mögliche schädliche Auswirkung.
- **Einsatzbereich:** Sicherheit, Readiness, Stillstand, Termine und kaufmännische Fristen.
- **Begründung:** trennt harmlose Hinweise von handlungsrelevanten Risiken.

## Empfehlung

- **Bevorzugter Name:** Empfehlung
- **Alternativen:** Vorschlag
- **Vermeiden:** Entscheidung, Anweisung oder Freigabe
- **Definition:** begründeter, nicht bindender Vorschlag für eine mögliche Handlung.
- **Einsatzbereich:** regelbasierte Assistenten und spätere Brain-Funktionen.
- **Begründung:** macht die menschliche Entscheidungshoheit deutlich.

## Brain

- **Bevorzugter interner Produktname:** Brain
- **Bevorzugte Nutzerbegriffe:** Hinweise, Warnungen, Empfehlungen, Vorbereitung – je nach tatsächlichem Inhalt
- **Alternativen:** Assistenz nur als allgemeine Funktionsbeschreibung
- **Vermeiden:** KI, Intelligenz oder Brain als pauschales sichtbares Label ohne konkrete Leistung
- **Definition:** interne Produktfamilie für nachvollziehbare, kontextbezogene Ableitungen und Entscheidungsvorbereitung.
- **Einsatzbereich:** Architektur, Roadmap und Namen spezialisierter Produktmodule.
- **Begründung:** „Brain“ ist kein Gerüstbau-Fachbegriff und erklärt Nutzern nicht, was angezeigt wird. In der Oberfläche soll der konkrete Nutzen benannt werden. Brain ersetzt keine verantwortliche Rolle.

## Vorbereitungsgrad

- **Bevorzugter Nutzerbegriff:** Vorbereitungsgrad
- **Bevorzugter Architekturbegriff:** Readiness
- **Alternativen:** Einsatzbereitschaft nur wenn tatsächlich der gesamte Einsatz gemeint ist; Baustellen-Readiness oder Aktivitäts-Readiness als Präzisierung
- **Vermeiden:** Fertig, vollständig oder Status als Synonym
- **Definition:** messbare Aussage darüber, welche Voraussetzungen einer Aktivität oder Baustelle vorhanden, fehlend, ungeklärt oder blockierend sind.
- **Einsatzbereich:** Arbeitsvorbereitung, Einsatz, Heute, Aktivität und Baustellenzentrale.
- **Begründung:** „Vorbereitungsgrad“ ist verständlicher als der Anglizismus. Readiness bleibt als eindeutig definierter Architekturbegriff zulässig.

## Status

- **Bevorzugter Name:** Status mit eindeutigem Bezugsobjekt
- **Alternativen:** Stand in Fließtext
- **Vermeiden:** Status ohne erkennbaren Kontext; Phase als Synonym
- **Definition:** aktueller Zustand eines bestimmten Fachobjekts in dessen Lebenszyklus.
- **Einsatzbereich:** Aktivitätsstatus, Projektstatus, Angebotsstatus, Dokumentstatus und Rechnungsstatus.
- **Begründung:** im Alltag üblich, aber nur verständlich, wenn klar ist, wessen Status gemeint ist.
- **Abgrenzung:** Status beantwortet „Wo steht das Objekt?“, Priorität „Wie dringend ist es?“, Vorbereitungsgrad „Kann es beginnen?“.

## Projektstatus

- **Bevorzugter Name:** Projektstatus
- **Alternativen:** Projektphase, wenn ausdrücklich eine Lebenszyklusphase gemeint ist
- **Vermeiden:** Baustellenstatus ohne Definition
- **Definition:** verdichteter organisatorischer Zustand des Projekts, abgeleitet aus Auftrag und maßgeblichen Aktivitäten.
- **Einsatzbereich:** Projektliste, Baustellenakte und Geschäftsführung.
- **Begründung:** verständlich, darf aber nicht die detaillierten Aktivitätszustände überschreiben oder ersetzen.

## Aktivitätsstatus

- **Bevorzugter Name:** Aktivitätsstatus
- **Nutzerbegriff:** konkreter Status ohne Vorsilbe, wenn die Aktivität bereits eindeutig ist
- **Alternativen:** Bearbeitungsstand
- **Vermeiden:** Projektstatus für einen einzelnen Vorgang
- **Definition:** Zustand einer Aktivität, beispielsweise geplant, vorbereitet, begonnen, wartet, pausiert, abgeschlossen oder storniert.
- **Einsatzbereich:** Activity Engine und konkrete Vorgänge.
- **Begründung:** verhindert die Vermischung mit Projekt-, Dokument- und Rechnungsstatus.

## Priorität

- **Bevorzugter Name:** Priorität
- **Alternativen:** Dringlichkeit nur für die zeitliche Komponente
- **Vermeiden:** Ampelfarbe ohne Begründung
- **Definition:** begründete relative Reihenfolge, in der Arbeit Aufmerksamkeit oder Bearbeitung benötigt.
- **Einsatzbereich:** Heute, Aktivitäten, Aufgaben und Eskalationen.
- **Begründung:** etablierter Begriff. Priorität kann aus Sicherheit, Stillstand, Frist, wartenden Personen und wirtschaftlicher Wirkung entstehen; sie ist nicht nur eine Farbe.

## Freigabe

- **Bevorzugter Name:** Freigabe mit Gegenstand, beispielsweise Gerüstfreigabe oder Dokumentfreigabe
- **Alternativen:** Bestätigung nur bei nicht verbindlichen Angaben
- **Vermeiden:** OK, erledigt
- **Definition:** verbindliche Entscheidung einer autorisierten Person, dass ein definierter Gegenstand oder Arbeitsschritt verwendet beziehungsweise fortgesetzt werden darf.
- **Einsatzbereich:** Sicherheit, Dokumente, Angebot, Rechnung und Ausführung.
- **Begründung:** fachlich relevant und nicht mit einer einfachen Kenntnisnahme gleichzusetzen.

## Offener Punkt

- **Bevorzugter Name:** offener Punkt
- **Alternativen:** Klärungsbedarf
- **Vermeiden:** Aufgabe, wenn noch keine verantwortliche Folgearbeit festgelegt wurde
- **Definition:** ungeklärter Sachverhalt, für den Ergebnis, Verantwortlichkeit oder nächster Schritt noch nicht vollständig feststeht.
- **Einsatzbereich:** Aktivität, Baustellenakte und Kommunikation.
- **Begründung:** trennt eine offene Frage von einer bereits konkret beauftragten Aufgabe.

# Ergänzende Begriffe

| Bevorzugter Name | Zulässige Alternativen | Definition und Verwendung |
|---|---|---|
| Kunde | Auftraggeber, wenn die vertragliche Rolle gemeint ist | Organisation oder Person, für die das Projekt geführt wird. Auftraggeber ist nicht immer identisch mit Rechnungsempfänger oder Ansprechpartner. |
| Ansprechpartner | Kontaktperson | konkret erreichbare Person für Baustelle, Kunde oder externe Stelle. |
| Auftrag | beauftragter Leistungsumfang | verbindliche Grundlage aus Kunde, Leistung, Bedingungen und Terminrahmen; nicht mit Projekt gleichsetzen. |
| Angebot | Angebotsdokument | fachliches/kaufmännisches Objekt; Erstellen, Prüfen, Versenden und Nachfassen sind Aktivitäten. |
| Rechnung | Abschlagsrechnung, Schlussrechnung | kaufmännisches Fachobjekt; Vorbereitung, Freigabe und Versand sind Aktivitäten. |
| Dokument | Unterlage | versioniertes Informationsobjekt. „Unterlagen“ ist als Sammelbegriff für Pläne, PDFs und externe Dokumente zulässig. |
| Foto | Baustellenfoto, Nachweisfoto | Bild mit eindeutiger Quelle und Kontext; „Aufnahme“ nur, wenn der Erfassungsvorgang gemeint ist. |
| Notiz | Gesprächsnotiz, Baustellennotiz | kurze, kontextbezogene Information; ersetzt keine strukturierte Entscheidung oder Aufgabe. |
| Maß | Messwert | einzelner erfasster Wert; nicht mit Aufmaß gleichsetzen. |
| Ergebnis | Arbeitsergebnis | festgestellter Ausgang einer Aktivität, unabhängig davon, ob er erfolgreich, negativ oder vertagt ist. |
| Verantwortlicher | verantwortliche Person oder Rolle | trägt die fachliche Verantwortung für Fortführung und Ergebnis. „Zugewiesen an“ allein ist schwächer. |
| Beteiligter | Mitwirkender | wirkt mit, trägt aber nicht automatisch Gesamtverantwortung. |
| Blockade | blockierender Grund | verhindert Beginn oder Fortsetzung. Eine Behinderung ist ein fachlich spezialisierter Fall. |
| Risiko | mögliche negative Auswirkung | noch nicht eingetretene Unsicherheit; nicht mit bestehendem Mangel oder Problem verwechseln. |
| Mangel | Abweichung vom geschuldeten oder sicheren Zustand | konkret festgestellter Sachverhalt mit Prüfung und Behebung. |
| Problem | ungeklärte Störung | zulässiger Eingang in Alltagssprache; muss fachlich als Mangel, Behinderung, Risiko oder Aufgabe eingeordnet werden. |
| Phase | Abschnitt des Projektlebenszyklus | beispielsweise Angebot, Ausführung oder Abschluss; nicht als Synonym für Objektstatus verwenden. |
| Verlaufseintrag | Timeline-Eintrag | sichtbarer chronologischer Verweis auf ein fachliches Ereignis. |
| Arbeitsablauf | Workflow | Folge fachlicher Schritte. „Workflow“ ist in Architektur zulässig, Nutzer sehen vorzugsweise Arbeitsablauf oder konkrete Tätigkeit. |
| Regelbasierte Unterstützung | regelbasierter Assistent | nachvollziehbare Prüfung und Vorbereitung ohne lernende KI. |

## Rollenbezeichnungen

| Bevorzugter Name | Alternativen | Definition und Abgrenzung |
|---|---|---|
| Gerüstbauer | Gerüstbaumonteur, Monteur | ausgebildete beziehungsweise ausführende Fachkraft im Gerüstbau. „Monteur“ darf eine betriebliche Einsatzrolle bezeichnen, ist aber weniger branchenspezifisch. |
| Vorarbeiter | Kolonnenführer, wenn betrieblich üblich | führt die Kolonne operativ und verantwortet sichere, vollständige Tagesausführung und Rückmeldung. |
| Bauleiter | Projektleiter nur bei tatsächlich gleicher betrieblicher Verantwortung | verantwortet technische und organisatorische Projektsteuerung, Abstimmung, Aufmaß, Änderungen und Freigaben. |
| Büro / Innendienst | kaufmännischer Innendienst, wenn betrieblich üblich | organisatorische Rolle für Kontakte, Telefonnotizen, Termine, Wiedervorlagen und Unterlagen; keine automatische fachliche Freigabekompetenz. |
| Disponent | Einsatzplaner | Person, die Einsätze und Ressourcen disponiert. Disposition bezeichnet den Fachbereich beziehungsweise die Tätigkeit. |
| Lagerverantwortlicher | Lagerist | verantwortliche Rolle für Bestand, Bereitstellung, Rücknahme und Prüfung; „Lager“ bezeichnet Ort oder Fachbereich. |
| Geschäftsführer | Geschäftsführung als Organisationseinheit | verantwortet Unternehmenssteuerung; „Geschäftsführung“ bezeichnet Rolle oder Gremium, nicht eine konkrete Person. |
| Mitarbeiter / Monteur | Gerüstbauer, wenn die fachliche Qualifikation gemeint ist | ausführende Einsatzrolle mit Zugriff auf eigene Arbeit und notwendige Unterlagen; keine kaufmännische Rolle. |
| Kalkulation | Kalkulator als Personenrolle | bereitet Kalkulationsgrundlagen und Angebote vor; Freigaberechte werden ausdrücklich zugewiesen. |
| Buchhaltung | kaufmännische Sachbearbeitung, wenn zutreffend | bearbeitet Rechnungs-, Zahlungs- und Forderungsstände im erforderlichen Nachweisumfang. |
| Administrator | Systemadministrator | verwaltet Benutzer, Rollen und Konfiguration; besitzt dadurch keine fachliche Freigabekompetenz. |

## Interne Produkt- und Architekturbegriffe

| Interner Name | Bevorzugter Nutzerbegriff | Regel |
|---|---|---|
| Activity Engine | Aktivitäten, Arbeitsabläufe | offizieller Architekturbegriff; „Engine“ wird nicht als notwendiger Nutzerbegriff verwendet. |
| Project Core | Projektdaten, Projektgrundlage | technischer Produktname; kein Gerüstbau-Fachbegriff. |
| Live-Baustelle | aktueller Baustellenstand | Produktkonzept; in der Oberfläche wird der konkrete Stand benannt. |
| Change Manager | Änderungen und Nachträge | interner Produktname; Nutzer sehen Leistungsänderungen, Behinderungen und Nachträge. |
| Material Intelligence | Materialplanung, Materialübersicht oder Materialfluss | Produktbereich; konkrete Tätigkeit bestimmt den Nutzerbegriff. |
| Document Center | Dokumente oder Unterlagen | Anglizismus vermeiden; bei Bedarf Dokumentenübersicht. |
| Mobile Capture | mobile Erfassung | Architektur-/Roadmapbegriff; Nutzer erfassen Fotos, Notizen, Sprache oder Maße. |

# Begriffe nach Rollenperspektive

| Begriff | Bauleiter | Vorarbeiter | Gerüstbauer | Disposition | Geschäftsführung | Urteil |
|---|---|---|---|---|---|---|
| Heute | natürlich | natürlich | verständlich | natürlich | verständlich | verbindlicher Startbegriff |
| Projekt | natürlich | verständlich | eher „Baustelle“ | natürlich | natürlich | beibehalten, Baustelle operativ ergänzen |
| Baustelle | natürlich | natürlich | natürlich | natürlich | verständlich | zentraler operativer Begriff |
| Aktivität | verständlich | verständlich | abstrakt | verständlich | verständlich | Fachbegriff; im Alltag konkreten Typ zeigen |
| Baustellenbesuch | natürlich | verständlich | verständlich | verständlich | verständlich | Fachmodell beibehalten; Planung als Baustellentermin |
| Verlauf | natürlich | natürlich | verständlich | natürlich | natürlich | UI-Begriff statt Timeline |
| Brain | produktintern | abstrakt | unklar | abstrakt | erklärungsbedürftig | nicht als pauschales UI-Label |
| Vorbereitungsgrad | natürlich | verständlich | verständlich | natürlich | verständlich | UI-Begriff statt Readiness |
| Disposition | natürlich | verständlich | teils abstrakt | natürlich | natürlich | Fachbereich; Handlung „Einsatzplanung“ |
| Kolonne | natürlich | natürlich | natürlich | natürlich | natürlich | beibehalten |
| Einsatz | natürlich | natürlich | natürlich | natürlich | verständlich | beibehalten |
| Aufmaß | natürlich | natürlich | fachlich bekannt | verständlich | verständlich | beibehalten |
| Priorität | natürlich | natürlich | verständlich | natürlich | natürlich | beibehalten und begründen |

# Erkannte Doppelungen und Vereinheitlichungen

## Dashboard / Übersicht / Heute

- Die operative Startseite heißt ausschließlich **Heute**.
- „Dashboard“ wird nicht als Nutzerbegriff verwendet.
- Strategische Kennzahlen stehen in der **Unternehmensübersicht**.
- „Übersicht“ darf nur als allgemeine Beschreibung eines Inhalts dienen, nicht als unbestimmter Navigationspunkt.

## Projekt / Baustelle / Auftrag

- **Projekt** ist die organisatorische Klammer.
- **Baustelle** ist Ort und operativer Kontext.
- **Auftrag** ist die verbindliche Leistungsgrundlage.
- Projektkarten dürfen Baustelleninformationen zeigen, verändern damit aber nicht die Begriffsgrenzen.

## Aktivität / Aufgabe / Einsatz / Baustellenbesuch

- **Aktivität** ist das fachliche Grundmodell.
- **Aufgabe** ist eine einfache Aktivität.
- **Baustellenbesuch** ist eine Vor-Ort-Aktivität; in der Planung heißt er bevorzugt Baustellentermin.
- **Einsatz** bündelt Aktivitäten und Ressourcen in Ort und Zeit.

## Timeline / Verlauf / Historie

- Nutzer sehen **Verlauf**.
- Architektur spricht von **Timeline**.
- **Historie** bezeichnet nur die unveränderbare Gesamtheit früherer Stände, nicht automatisch eine sichtbare Ansicht.

## Brain / Hinweis / Warnung / Empfehlung

- **Brain** bleibt interner Produktname.
- Nutzer sehen die konkrete Ausgabeart: Hinweis, Warnung oder Empfehlung.
- Eine Aufgabe ist keine Empfehlung; eine Warnung ist kein neutraler Hinweis.

## Readiness / Vorbereitungsgrad / Einsatzbereitschaft

- Architektur: **Readiness**.
- Nutzer: **Vorbereitungsgrad**.
- **Einsatzbereitschaft** ist das fachliche Ergebnis, wenn alle zwingenden Voraussetzungen eines Einsatzes erfüllt oder autorisiert freigegeben sind.

## Status / Phase / Priorität

- Status gehört immer zu einem Objekt.
- Phase ordnet ein Projekt in einen gröberen Lebenszyklusabschnitt ein.
- Priorität ordnet Arbeit nach Aufmerksamkeit; sie ist kein Status.

## Materialmanager / Material Intelligence / Materialplanung

- **Materialmanager** wird nicht weiterverwendet.
- **Material Intelligence** ist der Produktbereich.
- Nutzer arbeiten mit Materialbedarf, Materialplanung, Materialübersicht oder Materialfluss.

## Activity Engine / Aktivitätssteuerung

- **Activity Engine** bleibt der offizielle interne Architektur- und Produktname.
- In Nutzertexten wird kein technischer „Engine“-Begriff benötigt; dort geht es um Aktivitäten, Arbeitsabläufe und Verlauf.

# Schreib- und Benennungsregeln

- Deutsche Begriffe werden in UI und deutschsprachigen Fachdokumenten bevorzugt.
- Produktnamen wie ScaffoldAI, Brain, Material Intelligence, Project Core und Activity Engine werden großgeschrieben und bei erster Verwendung erklärt.
- Statuswerte werden als Zustände formuliert: „Geplant“, „Wartet“, „Abgeschlossen“.
- Aktivitäten werden handlungsorientiert benannt: „Kunde zurückrufen“, „Aufmaß prüfen“, „Material liefern“.
- Hinweise benennen Sachverhalt und Auswirkung, nicht nur eine Farbe: „Montage blockiert: Genehmigung fehlt“.
- Verantwortlichkeit wird mit Rolle oder Person ausgedrückt, nicht mit unklarem „zuständig“.
- Sammelbegriffe erhalten bei Bedarf ihren Kontext: Projektstatus, Dokumentstatus, Angebotsstatus.
- Abkürzungen wie AZ werden in verbindlichen Texten beim ersten Auftreten als Abschlagsrechnung erläutert.

# Pflege und Governance

- Neue zentrale Begriffe werden vor ihrer breiten Verwendung in dieses Wörterbuch aufgenommen.
- Fachlich andere Bedeutungen erhalten nicht denselben Namen.
- Reine UI-Kürzungen dürfen die Definition nicht verändern.
- Historische Tickets werden nicht rückwirkend umgeschrieben; neue Tickets folgen dem Wörterbuch.
- Abweichungen in Normen, Verträgen oder kundenindividueller Sprache werden als alternative Begriffe dokumentiert.
- Bei Konflikten gilt die Definition dieses Wörterbuchs vor frei verwendeten Synonymen in älteren Dokumenten.

## Verknüpfte Grundlagen

- [W-004 – Domain Language Workshop](../workshops/W-004-domain-language/SUMMARY.md)
- [Fachliches Domänenmodell](../architecture/DOMAIN_MODEL.md)
- [Activity Engine](../specs/PS-001-Activity-Engine.md)
- [W-002 – Operating System](../workshops/W-002-operating-system/SUMMARY.md)
- [Rollenmodell](../roles/ROLE_MODEL.md)

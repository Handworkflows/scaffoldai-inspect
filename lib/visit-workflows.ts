import type { SiteVisitType } from "@/types/site-visit";
import type { VisitWorkflow, WorkflowStep, WorkflowStepKind } from "@/types/workflow";

function step(id: string, title: string, description: string, kind: WorkflowStepKind, items?: readonly string[]): WorkflowStep {
  return { id, title, description, kind, items };
}

export const visitWorkflows: Record<SiteVisitType, VisitWorkflow> = {
  Angebotsaufnahme: {
    visitType: "Angebotsaufnahme",
    description: "Alle Grundlagen für ein belastbares Angebot erfassen.",
    steps: [
      step("site-photos", "Baustelle fotografieren", "Übersicht, Zugänge und besondere Gegebenheiten dokumentieren.", "photos"),
      step("requirements", "Anforderungen aufnehmen", "Gerüstart, Nutzung und gewünschte Ausführung beschreiben.", "notes"),
      step("measurement", "Aufmaß", "Benötigte Flächen, Längen und Höhen aufnehmen.", "measurement"),
      step("brain", "Brain-Hinweise", "Erfasste Angaben auf Risiken und offene Punkte prüfen lassen.", "brain"),
      step("complete", "Aufnahme speichern", "Angebotsaufnahme prüfen und sichern.", "complete"),
    ],
  },
  Montage: {
    visitType: "Montage",
    description: "Montagefortschritt und Baustellensituation strukturiert dokumentieren.",
    steps: [
      step("before-photos", "Fotos vor Montage", "Ausgangssituation und Aufstellflächen festhalten.", "photos"),
      step("progress", "Montagefortschritt", "Ausgeführte Bereiche und Besonderheiten beschreiben.", "notes"),
      step("safety", "Sicherheitscheck", "Zugänge, Seitenschutz und Verankerungen kontrollieren.", "checklist", ["Zugänge vorhanden?", "Seitenschutz vollständig?", "Verankerungen geprüft?"]),
      step("after-photos", "Fotos Montage", "Aktuellen Montagezustand dokumentieren.", "photos"),
      step("complete", "Besuch abschließen", "Montagebesuch prüfen und speichern.", "complete"),
    ],
  },
  Kontrolle: {
    visitType: "Kontrolle",
    description: "Gerüstzustand prüfen und mögliche Maßnahmen erkennen.",
    steps: [
      step("photos", "Fotos aufnehmen", "Aktuellen Gerüstzustand und Auffälligkeiten fotografieren.", "photos"),
      step("checklist", "Checkliste", "Alle sicherheits- und abrechnungsrelevanten Punkte prüfen.", "checklist", ["Gerüst vollständig?", "Geländer vorhanden?", "Bordbretter vorhanden?", "Beläge vollständig?", "Verankerungen sichtbar?", "Schäden entdeckt?", "Material ausgebaut?", "Neue Anbauteile?", "Nachtrag möglich?"]),
      step("notes", "Notizen", "Feststellungen, Absprachen und erforderliche Maßnahmen notieren.", "notes"),
      step("brain", "Brain-Hinweise", "Dokumentation analysieren und auf offene Punkte prüfen.", "brain"),
      step("complete", "Besuch abschließen", "Kontrolle prüfen und Besuch abschließen.", "complete"),
    ],
  },
  Abschlagsaufmaß: {
    visitType: "Abschlagsaufmaß",
    description: "Leistungsstand für eine mögliche Abschlagszahlung erfassen.",
    steps: [
      step("photos", "Fotos", "Aktuellen Leistungsstand fotografisch dokumentieren.", "photos"),
      step("measurement", "Aufmaß", "Ausgeführte Gerüstflächen und Zusatzleistungen aufnehmen.", "measurement"),
      step("comparison", "Vergleich zum letzten Besuch", "Veränderungen seit der letzten Dokumentation prüfen.", "review"),
      step("new-services", "Neue Leistungen markieren", "Zusätzliche oder geänderte Leistungen festhalten.", "checklist", ["Zusätzliche Gerüstfläche", "Veränderte Standzeit", "Neue Anbauteile", "Sonderleistung"]),
      step("brain", "Abschlagszahlung bewerten", "Brain bewertet den dokumentierten Leistungsstand.", "brain"),
      step("complete", "Besuch speichern", "Abschlagsaufmaß prüfen und speichern.", "complete"),
    ],
  },
  Schlussaufmaß: {
    visitType: "Schlussaufmaß",
    description: "Abschließende Leistungen vollständig und prüfbar erfassen.",
    steps: [
      step("photos", "Abschlussfotos", "Ausgeführten Gesamtzustand dokumentieren.", "photos"),
      step("measurement", "Schlussaufmaß", "Alle abrechenbaren Mengen abschließend aufnehmen.", "measurement"),
      step("comparison", "Leistungen abgleichen", "Aufmaß mit Auftrag und Nachträgen vergleichen.", "review"),
      step("brain", "Brain-Prüfung", "Vollständigkeit und mögliche Abweichungen bewerten lassen.", "brain"),
      step("complete", "Schlussaufmaß speichern", "Ergebnis prüfen und Besuch abschließen.", "complete"),
    ],
  },
  Nachtrag: {
    visitType: "Nachtrag",
    description: "Zusätzliche Leistungen nachvollziehbar für die Abrechnung dokumentieren.",
    steps: [
      step("photos", "Fotos", "Ursache und ausgeführte Zusatzleistung fotografieren.", "photos"),
      step("description", "Beschreibung", "Anlass, Umfang und Abstimmung des Nachtrags festhalten.", "notes"),
      step("measurement", "Aufmaß", "Mengen der zusätzlichen Leistung aufnehmen.", "measurement"),
      step("brain", "Mögliche Abrechnung erkennen", "Brain analysiert die Angaben auf abrechenbare Positionen.", "brain"),
      step("complete", "Nachtrag speichern", "Nachtragsdokumentation prüfen und speichern.", "complete"),
    ],
  },
  Umbau: {
    visitType: "Umbau",
    description: "Ausgangszustand, Umbauwunsch und Ergebnis vollständig begleiten.",
    steps: [
      step("before-photos", "Fotos Bestand", "Gerüstzustand vor dem Umbau dokumentieren.", "photos"),
      step("request", "Beschreibung Umbauwunsch", "Gewünschte Änderung und Anlass beschreiben.", "notes"),
      step("brain", "Brain analysiert", "Machbarkeit, Risiken und offene Fragen prüfen lassen.", "brain"),
      step("material", "Materialbedarf", "Benötigtes Material und Mengen dokumentieren.", "material"),
      step("variation", "Nachtrag möglich?", "Prüfen, ob der Umbau eine zusätzliche Leistung darstellt.", "checklist", ["Leistung außerhalb des Auftrags?", "Zusatzmaterial erforderlich?", "Zusätzliche Arbeitszeit?", "Freigabe dokumentiert?"]),
      step("after-photos", "Fotos nach Umbau", "Fertiggestellten Umbau fotografisch festhalten.", "photos"),
    ],
  },
  Abbau: {
    visitType: "Abbau",
    description: "Abbau, Materialzustand und Abtransport nachvollziehbar festhalten.",
    steps: [
      step("photos", "Fotos", "Situation vor und während des Abbaus dokumentieren.", "photos"),
      step("material", "Material dokumentieren", "Abgebautes Material und Auffälligkeiten erfassen.", "material"),
      step("damage", "Beschädigungen", "Schäden an Material oder Bauwerk beschreiben.", "notes"),
      step("transport", "Abtransport", "Abtransport, Restmaterial und offene Abholungen festhalten.", "checklist", ["Material vollständig verladen?", "Restmaterial vorhanden?", "Abtransport abgeschlossen?"]),
      step("complete", "Projektstatus aktualisieren", "Abbaubesuch abschließen und Projektfortschritt dokumentieren.", "complete"),
    ],
  },
  Sonstiges: {
    visitType: "Sonstiges",
    description: "Einen individuellen Baustellentermin flexibel dokumentieren.",
    steps: [
      step("photos", "Fotos", "Relevante Situation fotografisch festhalten.", "photos"),
      step("notes", "Beschreibung", "Anlass, Erkenntnisse und Absprachen dokumentieren.", "notes"),
      step("brain", "Brain-Hinweise", "Angaben analysieren und nächste Schritte ableiten lassen.", "brain"),
      step("complete", "Besuch abschließen", "Dokumentation prüfen und speichern.", "complete"),
    ],
  },
};

export function getVisitWorkflow(type: SiteVisitType): VisitWorkflow {
  return visitWorkflows[type];
}

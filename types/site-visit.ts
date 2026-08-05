export const siteVisitTypes = [
  "Angebotsaufnahme",
  "Montage",
  "Kontrolle",
  "Abschlagsaufmaß",
  "Schlussaufmaß",
  "Nachtrag",
  "Umbau",
  "Abbau",
  "Sonstiges",
] as const;

export type SiteVisitType = (typeof siteVisitTypes)[number];

export interface SiteVisit {
  id: string;
  projectId: string;
  date: string;
  type: SiteVisitType;
  status: "Neu" | "Abgeschlossen";
}

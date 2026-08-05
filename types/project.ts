export type ProjectType =
  | "Wohnhaus"
  | "Mehrfamilienhaus"
  | "Gewerbe"
  | "Industrie"
  | "Sonstiges";

export type ProjectService =
  | "Fassadengerüst"
  | "Dacharbeiten"
  | "Schutzdach"
  | "Sonderkonstruktion"
  | "Innenraumgerüst";

export interface ProjectDraft {
  name: string;
  customer: string;
  address: string;
  postalCode: string;
  city: string;
  type: ProjectType | null;
  services: ProjectService[];
}

export interface Project extends Omit<ProjectDraft, "type"> {
  id: string;
  createdAt: string;
  type: ProjectType;
  status: "Neu" | "Aktiv" | "Abgeschlossen" | "Archiviert";
}

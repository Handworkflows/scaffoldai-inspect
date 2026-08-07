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

export type ProjectPhase = "Anfrage" | "Angebot" | "Auftrag bestätigt" | "Vorbereitung" | "Aufbau" | "Nutzung" | "Umbau" | "Abbau" | "Abrechnung" | "abgeschlossen" | "archiviert";
export type InquiryStatus = "neu" | "in Bearbeitung" | "Angebotsaufnahme" | "Angebot vorbereitet" | "Angebot versendet" | "verloren / abgesagt";
export type OfferStatus = "Entwurf" | "in Prüfung" | "versendet" | "angenommen" | "abgelehnt" | "abgelaufen";
export interface ProjectOffer { number: string; date: string; value?: number; status: OfferStatus; requestedExecutionDate?: string; estimatedDurationDays?: number; estimatedCrewCount?: number; estimatedMaterial?: string; sentAt?: string; acceptedAt?: string; }

export interface Project extends Omit<ProjectDraft, "type"> {
  id: string; createdAt: string; type: ProjectType;
  status: "Neu" | "Aktiv" | "Abgeschlossen" | "Archiviert";
  contactName?: string; contactPhone?: string; contactEmail?: string;
  recordKind?: "inquiry" | "project"; phase?: ProjectPhase; inquiryStatus?: InquiryStatus;
  requestedDate?: string; openQuestions?: string; roughEffort?: string; specialConstructions?: string; permits?: string;
  estimatedMaterial?: string; estimatedCrewCount?: number; offer?: ProjectOffer;
}

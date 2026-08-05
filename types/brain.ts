export type BrainEntryType = "Hinweis" | "Risiko" | "Empfehlung" | "Nachtrag" | "Sicherheit";
export type BrainPriority = "Niedrig" | "Mittel" | "Hoch" | "Kritisch";
export type BrainEntryStatus = "Neu" | "Bestätigt" | "Erledigt" | "Verworfen";

export interface BrainEntry {
  id: string;
  projectId: string;
  visitId: string;
  type: BrainEntryType;
  priority: BrainPriority;
  status: BrainEntryStatus;
  text: string;
}

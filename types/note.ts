export type NoteCategory = "Allgemein" | "Aufmaß" | "Material" | "Umbau" | "Nachtrag" | "Workflow";

export interface ProjectNote {
  id: string;
  projectId: string;
  visitId: string;
  workflowStepId?: string;
  text: string;
  category: NoteCategory;
  timestamp: string;
}

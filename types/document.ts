export type ProjectDocumentType = "Gefährdungsbeurteilung" | "Montageanweisung" | "Tagesbericht" | "Aufmaß" | "Nachtrag" | "Materialliste";
export type ProjectDocumentStatus = "Entwurf" | "Freigegeben" | "Archiviert";

export interface ProjectDocument {
  id: string;
  projectId: string;
  visitId?: string;
  type: ProjectDocumentType;
  status: ProjectDocumentStatus;
  title: string;
  createdAt: string;
  updatedAt: string;
}

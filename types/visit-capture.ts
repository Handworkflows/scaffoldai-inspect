import type { ProjectPhoto } from "@/types/photo";

export type VisitPhoto = ProjectPhoto;

export interface VisitCapture {
  projectId: string;
  visitId: string;
  photos: VisitPhoto[];
  notes: Record<string, string>;
  checkedItems: Record<string, boolean>;
  currentStep: number;
  updatedAt: string;
}

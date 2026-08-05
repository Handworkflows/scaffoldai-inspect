export interface VisitPhoto {
  id: string;
  workflowStepId: string;
  dataUrl: string;
  fileName: string;
  capturedAt: string;
}

export interface VisitCapture {
  projectId: string;
  visitId: string;
  photos: VisitPhoto[];
  notes: Record<string, string>;
  checkedItems: Record<string, boolean>;
  currentStep: number;
  updatedAt: string;
}

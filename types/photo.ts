export interface PhotoGps {
  latitude: number;
  longitude: number;
  accuracy?: number;
}

export interface ProjectPhoto {
  id: string;
  projectId: string;
  visitId: string;
  workflowStepId?: string;
  timestamp: string;
  description: string;
  fileSize: number;
  fileName: string;
  tags: string[];
  gps?: PhotoGps;
  dataUrl: string;
}

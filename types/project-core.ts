import type { BrainEntry } from "@/types/brain";
import type { ProjectDocument } from "@/types/document";
import type { MaterialEntry } from "@/types/material";
import type { ProjectNote } from "@/types/note";
import type { ProjectPhoto } from "@/types/photo";
import type { Project, ProjectService, ProjectType } from "@/types/project";
import type { SiteVisit } from "@/types/site-visit";
import type { ProjectCockpitData } from "@/types/project-cockpit";

export const PROJECT_CORE_SCHEMA_VERSION = 2 as const;

export interface CoreProject {
  id: string;
  masterData: {
    name: string;
    projectType: ProjectType;
    services: ProjectService[];
    createdAt: string;
  };
  address: {
    street: string;
    postalCode: string;
    city: string;
  };
  customer: {
    name: string;
    contactName?: string;
    phone?: string;
    email?: string;
  };
  status: Project["status"];
}

export interface CoreSiteVisit extends SiteVisit {
  createdAt: string;
}

export interface ChecklistEntry {
  id: string;
  projectId: string;
  visitId: string;
  workflowStepId: string;
  item: string;
  checked: boolean;
  updatedAt: string;
}

export interface VisitWorkflowState {
  id: string;
  projectId: string;
  visitId: string;
  currentStep: number;
  updatedAt: string;
}

export interface MeasurementEntry {
  id: string;
  projectId: string;
  visitId: string;
  description: string;
  value?: number;
  unit?: string;
  timestamp: string;
}

export interface ProjectCoreStore {
  schemaVersion: typeof PROJECT_CORE_SCHEMA_VERSION;
  projects: CoreProject[];
  visits: CoreSiteVisit[];
  photos: ProjectPhoto[];
  notes: ProjectNote[];
  checklistEntries: ChecklistEntry[];
  workflowStates: VisitWorkflowState[];
  brainEntries: BrainEntry[];
  documents: ProjectDocument[];
  measurements: MeasurementEntry[];
  materialEntries: MaterialEntry[];
  projectCockpits: ProjectCockpitData[];
}

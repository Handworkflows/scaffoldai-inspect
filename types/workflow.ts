import type { SiteVisitType } from "@/types/site-visit";

export type WorkflowStepKind = "photos" | "checklist" | "notes" | "measurement" | "brain" | "material" | "review" | "complete";

export interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  kind: WorkflowStepKind;
  items?: readonly string[];
}

export interface VisitWorkflow {
  visitType: SiteVisitType;
  description: string;
  steps: readonly WorkflowStep[];
}

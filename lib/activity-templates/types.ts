import type { Activity, ActivityDetailValue, ActivityType } from "@/types/activity";

export type RequirementLevel = "required" | "optional" | "conditional";
export type FieldKind = "text" | "textarea" | "date" | "datetime" | "checkbox" | "select";
export type ServiceOverlay = "Fassadengerüst" | "Dachfangschutz" | "Treppenturm" | "Schutzgerüst" | "Industriegerüst" | "Hängegerüst" | "Wetterschutzdach" | "Sonderkonstruktion";
export type ContextOverlay = "öffentlicher Raum" | "Privatgrundstück" | "Kran erforderlich" | "Statik erforderlich" | "Nachtarbeit" | "Wochenendarbeit";

export interface TemplateField {
  id: string;
  section: string;
  label: string;
  source: "activity" | "details";
  key: string;
  kind: FieldKind;
  options?: readonly string[];
  placeholder?: string;
  requirement?: RequirementLevel;
}

export interface TemplateChecklistItem { id: string; label: string; requirement: RequirementLevel; blocker?: boolean; }
export interface TemplateDocumentRequirement { id: string; label: string; documentType: "Foto" | "Statik" | "Sondernutzung" | "Plan" | "Aufmaß" | "Unterschrift"; requirement: RequirementLevel; blocker?: boolean; }
export interface FollowUpSuggestion { id: string; label: string; targetType: string; trigger: { status?: Activity["status"]; detailKey?: string; detailContains?: string }; }
export interface ContextInformation { id: string; label: string; detailKey?: string; value?: string; }
export type BlockerRule =
  | { id: string; label: string; kind: "missing-detail"; detailKey: string }
  | { id: string; label: string; kind: "negative-detail"; detailKey: string; negativeValues: string[] }
  | { id: string; label: string; kind: "missing-document"; documentType: TemplateDocumentRequirement["documentType"] }
  | { id: string; label: string; kind: "unchecked-checklist"; checklistId: string };

export interface ActivityTemplateFragment {
  id: string;
  label: string;
  fields?: TemplateField[];
  checklist?: TemplateChecklistItem[];
  documents?: TemplateDocumentRequirement[];
  followUps?: FollowUpSuggestion[];
  context?: ContextInformation[];
  blockerRules?: BlockerRule[];
}

export interface CompanyTemplateOverlay extends ActivityTemplateFragment { companyId: string; version: string; }
export interface TemplateDocumentReference { type?: string; title?: string; }
export interface ResolveTemplateInput {
  type: ActivityType;
  services?: readonly string[];
  contexts?: readonly ContextOverlay[];
  companyOverlay?: CompanyTemplateOverlay;
  activity?: Pick<Activity, "status" | "details" | "checklist">;
  documents?: readonly TemplateDocumentReference[];
}

export interface ResolvedTemplateSection { id: string; title: string; fields: TemplateField[]; }
export interface ResolvedBlocker { id: string; label: string; sourceFragmentId: string; }
export interface ResolvedActivityTemplate {
  id: string;
  label: string;
  type: ActivityType;
  fragments: Array<{ id: string; label: string }>;
  sections: ResolvedTemplateSection[];
  checklist: TemplateChecklistItem[];
  documents: TemplateDocumentRequirement[];
  followUps: FollowUpSuggestion[];
  context: ContextInformation[];
  blockers: ResolvedBlocker[];
  progress: { complete: number; total: number; percent: number };
  canRelease: boolean;
}

export function detailString(value: ActivityDetailValue | undefined) { return typeof value === "string" ? value.trim() : ""; }

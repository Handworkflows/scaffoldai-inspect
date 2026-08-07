export const activityTypes = [
  "Angebotsaufnahme",
  "Angebot",
  "Montage",
  "Umbau",
  "Abbau",
  "Kontrolle",
  "Aufmaß",
  "Nachtrag",
  "Materiallieferung",
  "Materialabholung",
  "Reklamation",
  "Besprechung",
  "Telefonat",
  "Sonstiges",
] as const;

export type ActivityType = (typeof activityTypes)[number];

export const activityStatuses = [
  "geplant",
  "vorbereitet",
  "disponiert",
  "unterwegs",
  "begonnen",
  "pausiert",
  "abgeschlossen",
  "storniert",
] as const;

export type ActivityStatus = (typeof activityStatuses)[number];

export const activityPriorities = ["niedrig", "normal", "hoch", "kritisch"] as const;

export type ActivityPriority = (typeof activityPriorities)[number];

export const activityReadinessLevels = [
  "nicht begonnen",
  "teilweise vorbereitet",
  "bereit",
  "blockiert",
] as const;

export type ActivityReadiness = (typeof activityReadinessLevels)[number];

export interface ActivityBuildingSide {
  id: string;
  name: string;
  length: string;
  height: string;
  area: string;
}

export type ActivityDetailValue = string | boolean | string[] | ActivityBuildingSide[];

export interface ActivityAttachment {
  id: string;
  fileName: string;
  mediaType: string;
  fileSize: number;
  dataUrl: string;
  createdAt: string;
}

export interface ActivityChecklistItem {
  id: string;
  label: string;
  checked: boolean;
}

export interface ActivityComment {
  id: string;
  text: string;
  author: string;
  createdAt: string;
}

export interface ActivityOpenItem {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
  completedAt?: string;
}

export type ActivityHistoryKind = "erstellt" | "bearbeitet" | "status" | "abgeschlossen" | "checkliste" | "kommentar" | "offener-punkt";

export interface ActivityHistoryEntry {
  id: string;
  kind: ActivityHistoryKind;
  text: string;
  createdAt: string;
}

export interface Activity {
  id: string;
  projectId: string;
  type: ActivityType;
  title: string;
  description: string;
  status: ActivityStatus;
  priority: ActivityPriority;
  readiness: ActivityReadiness;
  plannedAt: string | null;
  startedAt: string | null;
  endedAt: string | null;
  responsibleId: string | null;
  result: string | null;
  details?: Record<string, ActivityDetailValue>;
  attachments?: ActivityAttachment[];
  checklist?: ActivityChecklistItem[];
  comments?: ActivityComment[];
  openItems?: ActivityOpenItem[];
  history?: ActivityHistoryEntry[];
  createdAt: string;
  updatedAt: string;
}

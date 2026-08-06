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
  createdAt: string;
  updatedAt: string;
}

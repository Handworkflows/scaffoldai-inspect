import type { Activity, ActivityType } from "@/types/activity";
import type { ProjectCoreStore } from "@/types/project-core";
import type { SiteVisitType } from "@/types/site-visit";

const visitActivityTypes: Record<SiteVisitType, ActivityType> = {
  Angebotsaufnahme: "Angebotsaufnahme",
  Montage: "Montage",
  Kontrolle: "Kontrolle",
  Abschlagsaufmaß: "Aufmaß",
  Schlussaufmaß: "Aufmaß",
  Nachtrag: "Nachtrag",
  Umbau: "Umbau",
  Abbau: "Abbau",
  Sonstiges: "Sonstiges",
};

export function getProjectActivities(store: ProjectCoreStore, projectId: string): Activity[] {
  const activities = store.activities.filter((activity) => activity.projectId === projectId);
  const activityIds = new Set(activities.map((activity) => activity.id));
  const visitActivities = store.visits
    .filter((visit) => visit.projectId === projectId && (!visit.activityId || !activityIds.has(visit.activityId)))
    .map<Activity>((visit) => ({
      id: `site-visit:${visit.id}`,
      projectId: visit.projectId,
      type: visitActivityTypes[visit.type],
      title: visit.type,
      description: "Bestehender Baustellenbesuch",
      status: visit.status === "Abgeschlossen" ? "abgeschlossen" : "geplant",
      priority: "normal",
      readiness: visit.status === "Abgeschlossen" ? "bereit" : "nicht begonnen",
      plannedAt: visit.date,
      startedAt: null,
      endedAt: null,
      responsibleId: null,
      result: null,
      createdAt: visit.createdAt,
      updatedAt: visit.createdAt,
    }));

  return [...activities, ...visitActivities].sort((a, b) => activityDate(b).localeCompare(activityDate(a)));
}

function activityDate(activity: Activity) {
  return activity.plannedAt ?? activity.startedAt ?? activity.createdAt;
}

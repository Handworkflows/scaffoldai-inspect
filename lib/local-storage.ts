import type { Project } from "@/types/project";
import type { SiteVisit } from "@/types/site-visit";
import type { VisitCapture } from "@/types/visit-capture";

export const PROJECTS_STORAGE_KEY = "scaffoldai-projects";
export const SITE_VISITS_STORAGE_KEY = "scaffoldai-site-visits";
export const VISIT_CAPTURES_STORAGE_KEY = "scaffoldai-visit-captures";

function readItems<T>(key: string): T[] {
  try {
    const stored = window.localStorage.getItem(key);
    return stored ? (JSON.parse(stored) as T[]) : [];
  } catch {
    return [];
  }
}

export function readProjects(): Project[] {
  return readItems<Project>(PROJECTS_STORAGE_KEY);
}

export function writeProjects(projects: Project[]) {
  window.localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(projects));
}

export function readSiteVisits(): SiteVisit[] {
  return readItems<SiteVisit>(SITE_VISITS_STORAGE_KEY);
}

export function writeSiteVisits(visits: SiteVisit[]) {
  window.localStorage.setItem(SITE_VISITS_STORAGE_KEY, JSON.stringify(visits));
}

export function readVisitCapture(projectId: string, visitId: string): VisitCapture {
  const stored = readItems<VisitCapture>(VISIT_CAPTURES_STORAGE_KEY).find(
    (capture) => capture.projectId === projectId && capture.visitId === visitId,
  );
  return stored ?? {
    projectId,
    visitId,
    photos: [],
    notes: {},
    checkedItems: {},
    currentStep: 0,
    updatedAt: new Date(0).toISOString(),
  };
}

export function writeVisitCapture(capture: VisitCapture) {
  const captures = readItems<VisitCapture>(VISIT_CAPTURES_STORAGE_KEY);
  const existingIndex = captures.findIndex(
    (item) => item.projectId === capture.projectId && item.visitId === capture.visitId,
  );
  const nextCaptures = [...captures];
  if (existingIndex >= 0) nextCaptures[existingIndex] = capture;
  else nextCaptures.push(capture);
  window.localStorage.setItem(VISIT_CAPTURES_STORAGE_KEY, JSON.stringify(nextCaptures));
}

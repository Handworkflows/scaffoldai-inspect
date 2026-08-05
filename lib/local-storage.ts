import type { Project } from "@/types/project";
import type { SiteVisit } from "@/types/site-visit";

export const PROJECTS_STORAGE_KEY = "scaffoldai-projects";
export const SITE_VISITS_STORAGE_KEY = "scaffoldai-site-visits";

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

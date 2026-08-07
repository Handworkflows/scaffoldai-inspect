import { PROJECT_CORE_SCHEMA_VERSION, type CoreProject, type CoreSiteVisit, type ProjectCoreStore } from "@/types/project-core";
import type { ProjectNote } from "@/types/note";
import type { ProjectPhoto } from "@/types/photo";
import type { Project } from "@/types/project";
import type { SiteVisit } from "@/types/site-visit";
import type { VisitCapture } from "@/types/visit-capture";
import { emptyProjectCockpit, type ProjectCockpitData } from "@/types/project-cockpit";
import type { Activity } from "@/types/activity";

export const PROJECT_CORE_STORAGE_KEY = "scaffoldai-project-core";
const LEGACY_PROJECTS_STORAGE_KEY = "scaffoldai-projects";
const LEGACY_SITE_VISITS_STORAGE_KEY = "scaffoldai-site-visits";
const LEGACY_VISIT_CAPTURES_STORAGE_KEY = "scaffoldai-visit-captures";
const LEGACY_KEYS = [LEGACY_PROJECTS_STORAGE_KEY, LEGACY_SITE_VISITS_STORAGE_KEY, LEGACY_VISIT_CAPTURES_STORAGE_KEY] as const;

interface LegacyVisitCapture extends Omit<VisitCapture, "photos"> {
  photos: Array<{
    id: string;
    workflowStepId: string;
    dataUrl: string;
    fileName: string;
    capturedAt: string;
  }>;
}

function emptyCoreStore(): ProjectCoreStore {
  return { schemaVersion: PROJECT_CORE_SCHEMA_VERSION, projects: [], visits: [], photos: [], notes: [], checklistEntries: [], workflowStates: [], brainEntries: [], documents: [], measurements: [], materialEntries: [], projectCockpits: [], activities: [] };
}

function parseArray<T>(value: string | null): T[] {
  if (!value) return [];
  try {
    const parsed: unknown = JSON.parse(value);
    return Array.isArray(parsed) ? parsed as T[] : [];
  } catch {
    return [];
  }
}

function normalizeProject(project: Omit<Project, "status"> & { status?: Project["status"] }): Project {
  const status = project.status ?? "Neu";
  return { ...project, status, recordKind: project.recordKind ?? "project", phase: project.phase ?? (status === "Archiviert" ? "archiviert" : status === "Abgeschlossen" ? "abgeschlossen" : "Auftrag bestätigt"), inquiryStatus: project.inquiryStatus ?? "neu" };
}

function projectToCore(project: Project): CoreProject {
  const { recordKind, phase, inquiryStatus, requestedDate, openQuestions, roughEffort, specialConstructions, permits, estimatedMaterial, estimatedCrewCount, offer } = project;
  return { id: project.id, masterData: { name: project.name, projectType: project.type, services: project.services, createdAt: project.createdAt }, address: { street: project.address, postalCode: project.postalCode, city: project.city }, customer: { name: project.customer, contactName: project.contactName, phone: project.contactPhone, email: project.contactEmail }, status: project.status, lifecycle: { recordKind, phase, inquiryStatus, requestedDate, openQuestions, roughEffort, specialConstructions, permits, estimatedMaterial, estimatedCrewCount, offer } };
}

function projectFromCore(project: CoreProject): Project {
  return normalizeProject({ id: project.id, name: project.masterData.name, type: project.masterData.projectType, services: project.masterData.services, createdAt: project.masterData.createdAt, address: project.address.street, postalCode: project.address.postalCode, city: project.address.city, customer: project.customer.name, contactName: project.customer.contactName, contactPhone: project.customer.phone, contactEmail: project.customer.email, status: project.status, ...project.lifecycle });
}

function legacyPhotoSize(dataUrl: string): number {
  const base64 = dataUrl.split(",")[1] ?? "";
  return Math.max(0, Math.floor((base64.length * 3) / 4));
}

function captureToPhotos(capture: LegacyVisitCapture): ProjectPhoto[] {
  return capture.photos.map((photo) => ({ id: photo.id, projectId: capture.projectId, visitId: capture.visitId, workflowStepId: photo.workflowStepId, timestamp: photo.capturedAt, description: "", fileSize: legacyPhotoSize(photo.dataUrl), fileName: photo.fileName, tags: [], dataUrl: photo.dataUrl }));
}

function captureToNotes(capture: Pick<VisitCapture, "projectId" | "visitId" | "notes" | "updatedAt">): ProjectNote[] {
  return Object.entries(capture.notes).filter(([, text]) => text.length > 0).map(([workflowStepId, text]) => ({ id: `note:${capture.visitId}:${workflowStepId}`, projectId: capture.projectId, visitId: capture.visitId, workflowStepId, text, category: "Workflow", timestamp: capture.updatedAt }));
}

function migrateLegacyStore(): ProjectCoreStore {
  const legacyValues = new Map(LEGACY_KEYS.map((key) => [key, window.localStorage.getItem(key)]));
  const projects = parseArray<Omit<Project, "status"> & { status?: Project["status"] }>(legacyValues.get(LEGACY_PROJECTS_STORAGE_KEY) ?? null).map(normalizeProject);
  const visits = parseArray<SiteVisit>(legacyValues.get(LEGACY_SITE_VISITS_STORAGE_KEY) ?? null);
  const captures = parseArray<LegacyVisitCapture>(legacyValues.get(LEGACY_VISIT_CAPTURES_STORAGE_KEY) ?? null);
  const store: ProjectCoreStore = {
    ...emptyCoreStore(),
    projects: projects.map(projectToCore),
    visits: visits.map((visit) => ({ ...visit, createdAt: visit.date })),
    photos: captures.flatMap(captureToPhotos),
    notes: captures.flatMap(captureToNotes),
    checklistEntries: captures.flatMap((capture) => Object.entries(capture.checkedItems).map(([key, checked]) => { const separator = key.indexOf(":"); return { id: `check:${capture.visitId}:${key}`, projectId: capture.projectId, visitId: capture.visitId, workflowStepId: separator >= 0 ? key.slice(0, separator) : key, item: separator >= 0 ? key.slice(separator + 1) : key, checked, updatedAt: capture.updatedAt }; })),
    workflowStates: captures.map((capture) => ({ id: `workflow:${capture.visitId}`, projectId: capture.projectId, visitId: capture.visitId, currentStep: capture.currentStep, updatedAt: capture.updatedAt })),
  };

  if (legacyValues.values().some(Boolean)) {
    LEGACY_KEYS.forEach((key) => window.localStorage.removeItem(key));
    try {
      window.localStorage.setItem(PROJECT_CORE_STORAGE_KEY, JSON.stringify(store));
    } catch {
      legacyValues.forEach((value, key) => { if (value !== null) window.localStorage.setItem(key, value); });
    }
  }
  return store;
}

export function readProjectCore(): ProjectCoreStore {
  const stored = window.localStorage.getItem(PROJECT_CORE_STORAGE_KEY);
  if (!stored) return migrateLegacyStore();
  try {
    const parsed = JSON.parse(stored) as ProjectCoreStore & { schemaVersion: number };
    if (parsed.schemaVersion === PROJECT_CORE_SCHEMA_VERSION) return parsed;
    if (parsed.schemaVersion === 1) {
      const migrated: ProjectCoreStore = { ...parsed, schemaVersion: PROJECT_CORE_SCHEMA_VERSION, projectCockpits: [], activities: [] };
      writeProjectCore(migrated);
      return migrated;
    }
    if (parsed.schemaVersion === 2) {
      const migrated: ProjectCoreStore = { ...parsed, schemaVersion: PROJECT_CORE_SCHEMA_VERSION, activities: [] };
      writeProjectCore(migrated);
      return migrated;
    }
    if (parsed.schemaVersion === 3) {
      const migrated: ProjectCoreStore = { ...parsed, schemaVersion: PROJECT_CORE_SCHEMA_VERSION };
      writeProjectCore(migrated);
      return migrated;
    }
    return migrateLegacyStore();
  } catch {
    return migrateLegacyStore();
  }
}

export function writeProjectCore(store: ProjectCoreStore) {
  window.localStorage.setItem(PROJECT_CORE_STORAGE_KEY, JSON.stringify(store));
}

export function readProjects(): Project[] {
  return readProjectCore().projects.map(projectFromCore);
}

export function writeProjects(projects: Project[]) {
  writeProjectCore({ ...readProjectCore(), projects: projects.map((project) => projectToCore(normalizeProject(project))) });
}

export function deleteProjectData(projectId: string) {
  const store = readProjectCore();
  writeProjectCore({
    ...store,
    projects: store.projects.filter((item) => item.id !== projectId),
    visits: store.visits.filter((item) => item.projectId !== projectId),
    photos: store.photos.filter((item) => item.projectId !== projectId),
    notes: store.notes.filter((item) => item.projectId !== projectId),
    checklistEntries: store.checklistEntries.filter((item) => item.projectId !== projectId),
    workflowStates: store.workflowStates.filter((item) => item.projectId !== projectId),
    documents: store.documents.filter((item) => item.projectId !== projectId),
    measurements: store.measurements.filter((item) => item.projectId !== projectId),
    materialEntries: store.materialEntries.filter((item) => item.projectId !== projectId),
    projectCockpits: store.projectCockpits.filter((item) => item.projectId !== projectId),
    activities: store.activities.filter((item) => item.projectId !== projectId),
  });
}

export function readProjectCockpit(projectId: string): ProjectCockpitData {
  return readProjectCore().projectCockpits.find((cockpit) => cockpit.projectId === projectId) ?? emptyProjectCockpit(projectId);
}

export function writeProjectCockpit(cockpit: ProjectCockpitData) {
  const store = readProjectCore();
  writeProjectCore({ ...store, projectCockpits: [cockpit, ...store.projectCockpits.filter((item) => item.projectId !== cockpit.projectId)] });
}

export function readActivities(): Activity[] {
  return readProjectCore().activities;
}

export function writeActivities(activities: Activity[]) {
  writeProjectCore({ ...readProjectCore(), activities });
}

export function readSiteVisits(): SiteVisit[] {
  return readProjectCore().visits.map(({ id, projectId, activityId, date, type, status }) => ({ id, projectId, activityId, date, type, status }));
}

export function writeSiteVisits(visits: SiteVisit[]) {
  const store = readProjectCore();
  const createdAtById = new Map(store.visits.map((visit) => [visit.id, visit.createdAt]));
  const activityIdById = new Map(store.visits.map((visit) => [visit.id, visit.activityId]));
  writeProjectCore({ ...store, visits: visits.map((visit): CoreSiteVisit => ({ ...visit, activityId: visit.activityId ?? activityIdById.get(visit.id), createdAt: createdAtById.get(visit.id) ?? visit.date })) });
}

export function readVisitCapture(projectId: string, visitId: string): VisitCapture {
  const store = readProjectCore();
  const workflow = store.workflowStates.find((state) => state.projectId === projectId && state.visitId === visitId);
  const notes = Object.fromEntries(store.notes.filter((note) => note.projectId === projectId && note.visitId === visitId && note.workflowStepId).map((note) => [note.workflowStepId as string, note.text]));
  const checkedItems = Object.fromEntries(store.checklistEntries.filter((entry) => entry.projectId === projectId && entry.visitId === visitId).map((entry) => [`${entry.workflowStepId}:${entry.item}`, entry.checked]));
  return { projectId, visitId, photos: store.photos.filter((photo) => photo.projectId === projectId && photo.visitId === visitId), notes, checkedItems, currentStep: workflow?.currentStep ?? 0, updatedAt: workflow?.updatedAt ?? new Date(0).toISOString() };
}

export function writeVisitCapture(capture: VisitCapture) {
  const store = readProjectCore();
  const belongsToVisit = (item: { projectId: string; visitId: string }) => item.projectId === capture.projectId && item.visitId === capture.visitId;
  const nextPhotos = [...store.photos.filter((photo) => !belongsToVisit(photo)), ...capture.photos];
  const nextNotes = [...store.notes.filter((note) => !belongsToVisit(note)), ...captureToNotes(capture)];
  const nextChecklistEntries = [...store.checklistEntries.filter((entry) => !belongsToVisit(entry)), ...Object.entries(capture.checkedItems).map(([key, checked]) => { const separator = key.indexOf(":"); return { id: `check:${capture.visitId}:${key}`, projectId: capture.projectId, visitId: capture.visitId, workflowStepId: separator >= 0 ? key.slice(0, separator) : key, item: separator >= 0 ? key.slice(separator + 1) : key, checked, updatedAt: capture.updatedAt }; })];
  const nextWorkflowStates = [...store.workflowStates.filter((state) => !belongsToVisit(state)), { id: `workflow:${capture.visitId}`, projectId: capture.projectId, visitId: capture.visitId, currentStep: capture.currentStep, updatedAt: capture.updatedAt }];
  writeProjectCore({ ...store, photos: nextPhotos, notes: nextNotes, checklistEntries: nextChecklistEntries, workflowStates: nextWorkflowStates });
}

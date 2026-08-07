"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { ActivityDialog, type ActivityInput } from "@/components/activities/activity-dialog";
import { AppShell } from "@/components/layout/app-shell";
import { projectTabs, ProjectWorkspace, type ProjectTab } from "@/components/projects/project-tabs";
import { inferContextOverlays, resolveActivityTemplate } from "@/lib/activity-templates";
import { readActivities, readProjectCockpit, readProjectCore, readProjects, readSiteVisits, writeActivities, writeProjectCockpit, writeProjects } from "@/lib/local-storage";
import { getProjectActivities } from "@/lib/project-activities";
import type { Activity } from "@/types/activity";
import type { ProjectDocument } from "@/types/document";
import type { MaterialEntry } from "@/types/material";
import type { ProjectNote } from "@/types/note";
import type { ProjectPhoto } from "@/types/photo";
import type { Project } from "@/types/project";
import { emptyProjectCockpit, type ProjectCockpitData } from "@/types/project-cockpit";
import type { MeasurementEntry } from "@/types/project-core";
import type { SiteVisit } from "@/types/site-visit";

export default function ProjectPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<Project | null>();
  const [visits, setVisits] = useState<SiteVisit[]>([]);
  const [photos, setPhotos] = useState<ProjectPhoto[]>([]);
  const [documents, setDocuments] = useState<ProjectDocument[]>([]);
  const [notes, setNotes] = useState<ProjectNote[]>([]);
  const [measurements, setMeasurements] = useState<MeasurementEntry[]>([]);
  const [materialEntries, setMaterialEntries] = useState<MaterialEntry[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [cockpit, setCockpit] = useState<ProjectCockpitData>(() => emptyProjectCockpit(projectId));
  const [activityDialogOpen, setActivityDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<ProjectTab>("Übersicht");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const store = readProjectCore();
      setProject(readProjects().find((item) => item.id === projectId) ?? null);
      setVisits(readSiteVisits().filter((visit) => visit.projectId === projectId));
      setPhotos(store.photos.filter((item) => item.projectId === projectId).sort((a, b) => b.timestamp.localeCompare(a.timestamp)));
      setDocuments(store.documents.filter((item) => item.projectId === projectId));
      setNotes(store.notes.filter((item) => item.projectId === projectId));
      setMeasurements(store.measurements.filter((item) => item.projectId === projectId));
      setMaterialEntries(store.materialEntries.filter((item) => item.projectId === projectId));
      setActivities(getProjectActivities(store, projectId));
      setCockpit(readProjectCockpit(projectId));
    }, 0);
    return () => window.clearTimeout(timer);
  }, [projectId]);

  const checkpoints = useMemo(() => project ? [photos.length > 0, measurements.length > 0, Boolean(project.contactName), documents.length > 0, documents.some((item) => item.type === "Montageanweisung"), documents.some((item) => item.type === "Gefährdungsbeurteilung")] : [], [project, photos, measurements, documents]);

  function createActivity(input: ActivityInput) { const now = new Date().toISOString(); const activityId = window.crypto.randomUUID(); const template = resolveActivityTemplate({ type: input.type, services: project?.services, contexts: inferContextOverlays(input.details), activity: { status: "geplant", details: input.details, checklist: [] }, documents }); const activity: Activity = { id: activityId, projectId, ...input, status: "geplant", plannedAt: new Date(input.plannedAt).toISOString(), startedAt: null, endedAt: null, responsibleId: null, result: null, checklist: template.checklist.map((item) => ({ id: item.id, label: item.label, checked: false })), comments: [], openItems: [], history: [{ id: window.crypto.randomUUID(), kind: "erstellt", text: `Activity aus Template ${template.label} erstellt`, createdAt: now }], createdAt: now, updatedAt: now }; writeActivities([activity, ...readActivities()]); setActivities(getProjectActivities(readProjectCore(), projectId)); setActivityDialogOpen(false); }
  function updateOperational(key: "openWork" | "openQuestions", value: string) { setCockpit((current) => ({ ...current, operational: { ...current.operational, [key]: value } })); setSaved(false); }
  function saveCockpit() { const next = { ...cockpit, updatedAt: new Date().toISOString() }; writeProjectCockpit(next); setCockpit(next); setSaved(true); }
  function prepareOffer() { if (!project) return; const today = new Date().toISOString().slice(0, 10); const next: Project = { ...project, phase: "Angebot", inquiryStatus: "Angebot vorbereitet", offer: { number: `ANG-${new Date().getFullYear()}-${String(Date.now()).slice(-5)}`, date: today, status: "Entwurf", requestedExecutionDate: project.requestedDate, estimatedCrewCount: project.estimatedCrewCount, estimatedMaterial: project.estimatedMaterial } }; writeProjects(readProjects().map((item) => item.id === project.id ? next : item)); setProject(next); }
  function confirmOffer() { if (!project?.offer || !window.confirm("Auftrag wirklich bestätigen und diesen Vorgang verbindlich als Projekt übernehmen?")) return; const acceptedAt = new Date().toISOString(); const next: Project = { ...project, recordKind: "project", phase: "Auftrag bestätigt", status: "Aktiv", offer: { ...project.offer, status: "angenommen", acceptedAt } }; writeProjects(readProjects().map((item) => item.id === project.id ? next : item)); const nextCockpit = { ...cockpit, updatedAt: acceptedAt, commercial: { ...cockpit.commercial, offerStatus: "Angenommen" } }; writeProjectCockpit(nextCockpit); setCockpit(nextCockpit); setProject(next); setActiveTab("Übersicht"); }

  if (project === undefined) return <PageState text="Projekt wird geladen …" />;
  if (project === null) return <PageState text="Projekt nicht gefunden." />;

  const openActivities = activities.filter((item) => !["abgeschlossen", "storniert"].includes(item.status));
  const latestActivity = [...activities].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))[0];
  const preparationPercent = checkpoints.length ? Math.round(checkpoints.filter(Boolean).length / checkpoints.length * 100) : 0;
  const address = [project.address, [project.postalCode, project.city].filter(Boolean).join(" ")].filter(Boolean).join(", ");

  return <AppShell><div className="min-h-full bg-[#070b14] text-white">
    <div className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#080d17]/95 backdrop-blur-xl">
      <div className="mx-auto max-w-[1480px] px-5 pt-4 sm:px-8 lg:px-10">
        <div className="mb-3 flex items-center justify-between gap-4"><Link href="/projects" className="text-xs text-slate-500 hover:text-cyan-300">← Projekte</Link><button onClick={() => setActivityDialogOpen(true)} className="rounded-lg bg-cyan-300 px-3 py-2 text-xs font-semibold text-slate-950 hover:bg-cyan-200">+ Aktivität</button></div>
        <header className="pb-5"><div className="flex flex-col justify-between gap-5 xl:flex-row xl:items-start"><div className="min-w-0"><p className="truncate text-xs font-medium text-cyan-300">{address || "Baustellenadresse nicht hinterlegt"}</p><div className="mt-2 flex flex-wrap items-center gap-3"><h1 className="truncate text-2xl font-semibold tracking-tight sm:text-3xl">{project.name}</h1><Lifecycle phase={project.phase} /></div></div><div className="grid grid-cols-3 gap-5 sm:grid-cols-6 xl:min-w-[660px]"><HeaderFact label="Bauherr" /><HeaderFact label="Kunde" value={project.customer} /><HeaderFact label="Bauleiter" /><HeaderFact label="Vorarbeiter" /><HeaderFact label="Kolonne" /><HeaderFact label="Vorbereitung" value={`${preparationPercent} %`} /></div></div>
          <div className="mt-5 grid gap-5 border-t border-white/[0.07] pt-4 sm:grid-cols-[1.3fr_1fr] xl:grid-cols-[1.5fr_1fr_1.35fr_0.65fr]"><HeaderProgress phase={project.phase} /><HeaderFact label="Nächster Termin" value={cockpit.nextDeployment.plannedDate ? formatDay(cockpit.nextDeployment.plannedDate) : undefined} /><HeaderFact label="Letzte Activity" value={latestActivity ? `${latestActivity.title} · ${formatDay(latestActivity.updatedAt)}` : undefined} /><HeaderFact label="Offen" value={`${openActivities.length} Activities`} /></div>
        </header>
        <nav aria-label="Projektbereiche" className="scrollbar-hidden flex gap-1 overflow-x-auto border-t border-white/[0.07] py-2">{projectTabs.map((tab) => <button key={tab} onClick={() => setActiveTab(tab)} aria-current={activeTab === tab ? "page" : undefined} className={`shrink-0 rounded-lg px-3 py-2.5 text-xs font-medium transition ${activeTab === tab ? "bg-white text-slate-950" : "text-slate-500 hover:bg-white/[0.05] hover:text-white"}`}>{tab}</button>)}</nav>
      </div>
    </div>
    <div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-10"><ProjectWorkspace tab={activeTab} data={{ project, activities, photos, documents, notes, measurements, materialEntries, visits, cockpit, preparationPercent }} onOpenActivity={() => setActivityDialogOpen(true)} onPrepareOffer={prepareOffer} onConfirmOffer={confirmOffer} onSaveCockpit={saveCockpit} onChangeOpenWork={(value) => updateOperational("openWork", value)} onChangeOpenQuestions={(value) => updateOperational("openQuestions", value)} saved={saved} /></div>
    {activityDialogOpen && <ActivityDialog services={project?.services} onCreate={createActivity} onClose={() => setActivityDialogOpen(false)} />}
  </div></AppShell>;
}

function HeaderFact({ label, value }: { label: string; value?: string }) { return <div className="min-w-0"><p className="text-[10px] uppercase tracking-[0.13em] text-slate-600">{label}</p><p className="mt-1 truncate text-xs font-medium text-slate-300">{value || "Nicht hinterlegt"}</p></div>; }
function Lifecycle({ phase }: { phase?: Project["phase"] }) { const tone = phase === "Aufbau" ? "bg-amber-400/10 text-amber-300" : phase === "Nutzung" ? "bg-emerald-400/10 text-emerald-300" : phase === "Umbau" ? "bg-violet-400/10 text-violet-300" : phase === "Abbau" ? "bg-orange-400/10 text-orange-300" : phase === "Abrechnung" ? "bg-blue-400/10 text-blue-300" : "bg-cyan-400/10 text-cyan-300"; return <span className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] ${tone}`}>{phase || "Status offen"}</span>; }
function HeaderProgress({ phase }: { phase?: Project["phase"] }) { const steps = ["Angebot", "Vorbereitung", "Projekt", "Abrechnung", "Archiv"]; const current = phase === "archiviert" ? 4 : phase === "abgeschlossen" || phase === "Abrechnung" ? 3 : phase === "Anfrage" || phase === "Angebot" ? 0 : phase === "Auftrag bestätigt" || phase === "Vorbereitung" ? 1 : 2; return <div><p className="text-[10px] uppercase tracking-[0.13em] text-slate-600">Fortschritt</p><div className="mt-2 flex gap-1.5">{steps.map((step, index) => <div key={step} title={step} className={`h-1.5 flex-1 rounded-full ${index <= current ? "bg-cyan-300" : "bg-white/[0.08]"}`} />)}</div></div>; }
function formatDay(value: string) { return new Intl.DateTimeFormat("de-DE", { dateStyle: "medium" }).format(new Date(value.includes("T") ? value : `${value}T12:00:00`)); }
function PageState({ text }: { text: string }) { return <AppShell><div className="flex min-h-screen items-center justify-center px-6 text-sm text-slate-500">{text}</div></AppShell>; }

"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { readProjects, readSiteVisits, readVisitCapture, writeSiteVisits, writeVisitCapture } from "@/lib/local-storage";
import { getVisitWorkflow } from "@/lib/visit-workflows";
import type { Project } from "@/types/project";
import type { SiteVisit } from "@/types/site-visit";
import type { VisitCapture, VisitPhoto } from "@/types/visit-capture";
import type { WorkflowStep } from "@/types/workflow";

const stepIcons: Record<WorkflowStep["kind"], string> = { photos: "▧", checklist: "✓", notes: "≡", measurement: "⌗", brain: "✦", material: "◇", review: "↔", complete: "●" };

export default function VisitPage() {
  const router = useRouter();
  const { projectId, visitId } = useParams<{ projectId: string; visitId: string }>();
  const [data, setData] = useState<{ project: Project; visit: SiteVisit } | null>();
  const [capture, setCapture] = useState<VisitCapture>();
  const [storageError, setStorageError] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const project = readProjects().find((item) => item.id === projectId);
      const visit = readSiteVisits().find((item) => item.id === visitId && item.projectId === projectId);
      setData(project && visit ? { project, visit } : null);
      if (project && visit) setCapture(readVisitCapture(projectId, visitId));
    }, 0);
    return () => window.clearTimeout(timer);
  }, [projectId, visitId]);

  if (data === null) return <PageState text="Baustellenbesuch nicht gefunden." />;
  if (data === undefined || capture === undefined) return <PageState text="Baustellenbesuch wird geladen …" />;

  const { project, visit } = data;
  const workflow = getVisitWorkflow(visit.type);
  const currentStep = Math.min(capture.currentStep, workflow.steps.length - 1);
  const activeStep = workflow.steps[currentStep];
  const isLastStep = currentStep === workflow.steps.length - 1;
  const progress = ((currentStep + 1) / workflow.steps.length) * 100;

  function updateCapture(change: (current: VisitCapture) => VisitCapture) {
    const next = { ...change(capture as VisitCapture), updatedAt: new Date().toISOString() };
    try {
      writeVisitCapture(next);
      setCapture(next);
      setStorageError("");
      return true;
    } catch {
      setStorageError("Der lokale Browserspeicher ist voll. Bitte lösche nicht benötigte Fotos und versuche es erneut.");
      return false;
    }
  }

  function goToStep(step: number) {
    updateCapture((current) => ({ ...current, currentStep: Math.max(0, Math.min(workflow.steps.length - 1, step)) }));
  }

  function finishVisit() {
    const visits = readSiteVisits().map((item) => item.id === visitId && item.projectId === projectId ? { ...item, status: "Abgeschlossen" as const } : item);
    writeSiteVisits(visits);
    router.push(`/projects/${projectId}`);
  }

  return (
    <AppShell>
      <div className="relative min-h-full overflow-hidden text-white">
        <div className="pointer-events-none absolute inset-0"><div className="absolute right-[-8rem] top-[-8rem] h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-3xl" /></div>
        <div className="relative mx-auto min-h-screen w-full max-w-5xl px-4 py-5 sm:px-6 sm:py-8 lg:px-10">
          <Link href={`/projects/${projectId}`} className="inline-flex min-h-11 items-center text-sm text-slate-500 transition hover:text-cyan-300">← Zurück zu {project.name}</Link>
          <header className="mt-3 flex flex-col justify-between gap-4 border-b border-white/[0.08] pb-6 sm:mt-6 sm:flex-row sm:items-end sm:pb-7">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-300">Baustellenbesuch</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{visit.type}</h1>
              <p className="mt-3 text-sm text-slate-400">{formatDate(visit.date)}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-white/[0.06] px-3 py-1.5 text-xs text-slate-400">{capture.photos.length} Fotos</span>
              <span className="rounded-full bg-cyan-400/10 px-3 py-1.5 text-xs text-cyan-300">Status: {visit.status}</span>
            </div>
          </header>

          <BrainContext project={project} visit={visit} nextStep={activeStep.title} />

          <section className="py-6 sm:py-8" aria-labelledby="workflow-heading">
            <div className="flex items-end justify-between gap-4">
              <div><p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">Intelligenter Workflow</p><h2 id="workflow-heading" className="mt-1 text-lg font-semibold sm:text-xl">{workflow.description}</h2></div>
              <p className="shrink-0 text-sm font-medium text-cyan-300">{currentStep + 1} / {workflow.steps.length}</p>
            </div>

            <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-white/[0.08]" role="progressbar" aria-label="Workflow-Fortschritt" aria-valuemin={1} aria-valuemax={workflow.steps.length} aria-valuenow={currentStep + 1}>
              <div className="h-full rounded-full bg-cyan-300 transition-[width] duration-300" style={{ width: `${progress}%` }} />
            </div>
            <ol className="mt-4 hidden grid-cols-[repeat(auto-fit,minmax(80px,1fr))] gap-2 lg:grid">
              {workflow.steps.map((step, index) => <li key={step.id} className={`truncate text-xs ${index === currentStep ? "font-medium text-cyan-300" : index < currentStep ? "text-slate-400" : "text-slate-600"}`}><span className="mr-1">{index < currentStep ? "✓" : index + 1}.</span>{step.title}</li>)}
            </ol>

            {storageError && <div role="alert" className="mt-5 rounded-xl border border-rose-300/20 bg-rose-400/[0.08] p-4 text-sm leading-6 text-rose-200">{storageError}</div>}

            <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-xl shadow-black/10 sm:mt-7 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-xl text-cyan-300" aria-hidden="true">{stepIcons[activeStep.kind]}</span>
                <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">Schritt {currentStep + 1}</p><h3 className="mt-1 text-xl font-semibold sm:text-2xl">{activeStep.title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{activeStep.description}</p></div>
              </div>

              <StepContent
                step={activeStep}
                capture={capture}
                onCheck={(key, checked) => updateCapture((current) => ({ ...current, checkedItems: { ...current.checkedItems, [key]: checked } }))}
                onNote={(value) => updateCapture((current) => ({ ...current, notes: { ...current.notes, [activeStep.id]: value } }))}
                onPhotos={(photos) => updateCapture((current) => ({ ...current, photos: [...photos.map((photo) => ({ ...photo, projectId, visitId })), ...current.photos] }))}
                onDeletePhoto={(photoId) => updateCapture((current) => ({ ...current, photos: current.photos.filter((photo) => photo.id !== photoId) }))}
              />

              <div className="mt-8 flex flex-col-reverse gap-3 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center">
                <button type="button" onClick={() => router.push(`/projects/${projectId}`)} className="min-h-12 rounded-xl px-5 py-3 text-sm font-medium text-slate-500 transition hover:bg-white/5 hover:text-slate-200">Abbrechen</button>
                <div className="grid flex-1 grid-cols-2 gap-3 sm:flex sm:justify-end">
                  <button type="button" disabled={currentStep === 0} onClick={() => goToStep(currentStep - 1)} className="min-h-12 rounded-xl border border-white/10 px-5 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-30">Zurück</button>
                  {isLastStep ? <button type="button" onClick={finishVisit} className="min-h-12 rounded-xl bg-cyan-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">Abschließen</button> : <button type="button" onClick={() => goToStep(currentStep + 1)} className="min-h-12 rounded-xl bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">Weiter</button>}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </AppShell>
  );
}

function StepContent({ step, capture, onCheck, onNote, onPhotos, onDeletePhoto }: { step: WorkflowStep; capture: VisitCapture; onCheck: (key: string, checked: boolean) => void; onNote: (value: string) => void; onPhotos: (photos: VisitPhoto[]) => boolean; onDeletePhoto: (photoId: string) => void }) {
  if (step.items) return <div className="mt-7 grid gap-3 sm:grid-cols-2">{step.items.map((item) => { const key = `${step.id}:${item}`; return <label key={item} className="flex min-h-14 cursor-pointer items-center gap-3 rounded-xl border border-white/[0.08] bg-[#070b14]/70 p-4 text-sm text-slate-300 transition hover:border-cyan-300/25"><input type="checkbox" checked={Boolean(capture.checkedItems[key])} onChange={(event) => onCheck(key, event.target.checked)} className="h-5 w-5 shrink-0 accent-cyan-300" /><span>{item}</span></label>; })}</div>;

  if (step.kind === "photos") return <PhotoCapture step={step} photos={capture.photos.filter((photo) => photo.workflowStepId === step.id)} onAdd={onPhotos} onDelete={onDeletePhoto} />;
  if (step.kind === "brain") return <div className="mt-7 rounded-2xl border border-cyan-300/15 bg-cyan-400/[0.055] p-5"><p className="text-sm font-medium text-cyan-200">Kontext ist verfügbar</p><p className="mt-2 text-sm leading-6 text-slate-500">Spätere KI-Empfehlungen können Projekt, Besuchsart und bisherigen Workflowfortschritt auswerten.</p></div>;
  if (step.kind === "complete") return <div className="mt-7 rounded-2xl border border-emerald-300/15 bg-emerald-400/[0.045] p-5"><p className="text-sm font-medium text-emerald-300">Workflow vollständig durchlaufen</p><p className="mt-2 text-sm text-slate-500">Fotos, Notizen und Workflowstatus sind bereits lokal gespeichert.</p></div>;

  const label = step.kind === "measurement" ? "Aufmaß und Mengen" : step.kind === "material" ? "Material und Mengen" : step.kind === "review" ? "Ergebnis des Vergleichs" : "Notizen und Beschreibung";
  return <div className="mt-7"><label className="block"><span className="mb-2 block text-sm font-medium text-slate-300">{label}</span><textarea value={capture.notes[step.id] ?? ""} onChange={(event) => onNote(event.target.value)} rows={7} placeholder="Angaben zu diesem Schritt erfassen …" className="w-full resize-y rounded-2xl border border-white/10 bg-[#070b14] px-4 py-3 text-base leading-6 text-slate-100 outline-none transition placeholder:text-slate-700 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/10" /></label><p className="mt-2 text-xs text-emerald-400">Automatisch lokal gespeichert</p><VoicePlaceholder /></div>;
}

function PhotoCapture({ step, photos, onAdd, onDelete }: { step: WorkflowStep; photos: VisitPhoto[]; onAdd: (photos: VisitPhoto[]) => boolean; onDelete: (photoId: string) => void }) {
  const [processing, setProcessing] = useState(false);

  async function addPhotos(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []);
    if (!files.length) return;
    setProcessing(true);
    try {
      const nextPhotos = await Promise.all(files.map(async (file) => ({ id: window.crypto.randomUUID(), projectId: "", visitId: "", workflowStepId: step.id, dataUrl: await compressImage(file), fileName: file.name, timestamp: new Date().toISOString(), description: "", fileSize: file.size, tags: [] })));
      if (onAdd(nextPhotos)) event.target.value = "";
    } finally {
      setProcessing(false);
    }
  }

  return <div className="mt-7"><label className="flex min-h-16 cursor-pointer items-center justify-center gap-3 rounded-2xl bg-cyan-300 px-5 py-4 text-center text-base font-semibold text-slate-950 transition hover:bg-cyan-200"><span aria-hidden="true">＋</span>{processing ? "Fotos werden vorbereitet …" : "Fotos hinzufügen"}<input type="file" accept="image/*" capture="environment" multiple onChange={addPhotos} disabled={processing} className="sr-only" /></label><p className="mt-3 text-center text-xs leading-5 text-slate-600">Öffnet auf unterstützten Smartphones Kamera oder Galerie. Eine direkte Kameraansicht kann später ergänzt werden.</p>{photos.length > 0 && <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">{photos.map((photo) => <figure key={photo.id} className="overflow-hidden rounded-2xl border border-white/10 bg-[#070b14]"><Image src={photo.dataUrl} alt={`Baustellenfoto ${formatDate(photo.timestamp)}`} width={400} height={400} unoptimized className="aspect-square w-full object-cover" /><figcaption className="p-3"><p className="truncate text-xs text-slate-400">{photo.fileName}</p><p className="mt-1 text-[11px] text-slate-600">{formatDate(photo.timestamp)}</p><button type="button" onClick={() => onDelete(photo.id)} className="mt-3 min-h-11 w-full rounded-xl border border-rose-300/15 px-3 py-2 text-xs font-medium text-rose-300 transition hover:bg-rose-400/10">Foto löschen</button></figcaption></figure>)}</div>}</div>;
}

function VoicePlaceholder() {
  const [messageVisible, setMessageVisible] = useState(false);
  return <div className="mt-5"><button type="button" onClick={() => setMessageVisible(true)} className="min-h-14 w-full rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-cyan-300/25 hover:text-cyan-200">🎤 Sprache aufnehmen</button>{messageVisible && <p className="mt-2 text-center text-xs text-slate-500">Sprachaufnahme wird in Ticket T-007 ergänzt.</p>}</div>;
}

function BrainContext({ project, visit, nextStep }: { project: Project; visit: SiteVisit; nextStep: string }) {
  return <aside className="mt-6 rounded-2xl border border-cyan-300/15 bg-cyan-400/[0.045] p-4 sm:p-5" aria-label="Brain-Kontext"><div className="flex items-start gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300" aria-hidden="true">✦</span><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">Brain-Hinweis</p><p className="mt-2 text-sm text-slate-400">{project.name} · {visit.type}</p><p className="mt-1 text-sm font-medium text-slate-200">Nächster Schritt: „{nextStep}.“</p></div></div></aside>;
}

async function compressImage(file: File): Promise<string> {
  const bitmap = await createImageBitmap(file);
  const maxEdge = 1600;
  const scale = Math.min(1, maxEdge / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(bitmap.width * scale));
  canvas.height = Math.max(1, Math.round(bitmap.height * scale));
  canvas.getContext("2d")?.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();
  return canvas.toDataURL("image/jpeg", 0.78);
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("de-DE", { dateStyle: "medium", timeStyle: "short" }).format(new Date(date));
}

function PageState({ text }: { text: string }) {
  return <AppShell><div className="flex min-h-screen items-center justify-center px-6 text-sm text-slate-500">{text}</div></AppShell>;
}

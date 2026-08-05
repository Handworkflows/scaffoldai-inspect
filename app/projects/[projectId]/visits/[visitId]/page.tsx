"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { readProjects, readSiteVisits, writeSiteVisits } from "@/lib/local-storage";
import { getVisitWorkflow } from "@/lib/visit-workflows";
import type { Project } from "@/types/project";
import type { SiteVisit } from "@/types/site-visit";
import type { WorkflowStep } from "@/types/workflow";

const stepIcons: Record<WorkflowStep["kind"], string> = { photos: "▧", checklist: "✓", notes: "≡", measurement: "⌗", brain: "✦", material: "◇", review: "↔", complete: "●" };

export default function VisitPage() {
  const router = useRouter();
  const { projectId, visitId } = useParams<{ projectId: string; visitId: string }>();
  const [data, setData] = useState<{ project: Project; visit: SiteVisit } | null>();
  const [currentStep, setCurrentStep] = useState(0);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const project = readProjects().find((item) => item.id === projectId);
      const visit = readSiteVisits().find((item) => item.id === visitId && item.projectId === projectId);
      setData(project && visit ? { project, visit } : null);
    }, 0);
    return () => window.clearTimeout(timer);
  }, [projectId, visitId]);

  if (data === undefined) return <PageState text="Baustellenbesuch wird geladen …" />;
  if (data === null) return <PageState text="Baustellenbesuch nicht gefunden." />;

  const { project, visit } = data;
  const workflow = getVisitWorkflow(visit.type);
  const activeStep = workflow.steps[currentStep];
  const isLastStep = currentStep === workflow.steps.length - 1;
  const progress = ((currentStep + 1) / workflow.steps.length) * 100;

  function finishVisit() {
    const visits = readSiteVisits().map((item) => item.id === visitId && item.projectId === projectId ? { ...item, status: "Abgeschlossen" as const } : item);
    writeSiteVisits(visits);
    router.push(`/projects/${projectId}`);
  }

  return (
    <AppShell>
      <div className="relative min-h-full overflow-hidden text-white">
        <div className="pointer-events-none absolute inset-0"><div className="absolute right-[-8rem] top-[-8rem] h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-3xl" /></div>
        <div className="relative mx-auto min-h-screen w-full max-w-5xl px-6 py-8 lg:px-10">
          <Link href={`/projects/${projectId}`} className="text-sm text-slate-500 transition hover:text-cyan-300">← Zurück zu {project.name}</Link>
          <header className="mt-6 flex flex-col justify-between gap-5 border-b border-white/[0.08] pb-7 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-300">Baustellenbesuch</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{visit.type}</h1>
              <p className="mt-3 text-sm text-slate-400">{new Intl.DateTimeFormat("de-DE", { dateStyle: "long", timeStyle: "short" }).format(new Date(visit.date))}</p>
            </div>
            <span className="w-fit rounded-full bg-cyan-400/10 px-3 py-1.5 text-xs text-cyan-300">Status: {visit.status}</span>
          </header>

          <section className="py-8" aria-labelledby="workflow-heading">
            <div className="flex items-end justify-between gap-4">
              <div><p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">Intelligenter Workflow</p><h2 id="workflow-heading" className="mt-1 text-xl font-semibold">{workflow.description}</h2></div>
              <p className="shrink-0 text-sm font-medium text-cyan-300">{currentStep + 1} / {workflow.steps.length}</p>
            </div>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/[0.08]" role="progressbar" aria-label="Workflow-Fortschritt" aria-valuemin={1} aria-valuemax={workflow.steps.length} aria-valuenow={currentStep + 1}>
              <div className="h-full rounded-full bg-cyan-300 transition-[width] duration-300" style={{ width: `${progress}%` }} />
            </div>
            <ol className="mt-4 hidden grid-cols-[repeat(auto-fit,minmax(80px,1fr))] gap-2 lg:grid">
              {workflow.steps.map((step, index) => <li key={step.id} className={`truncate text-xs ${index === currentStep ? "font-medium text-cyan-300" : index < currentStep ? "text-slate-400" : "text-slate-600"}`}><span className="mr-1">{index < currentStep ? "✓" : index + 1}.</span>{step.title}</li>)}
            </ol>

            <div className="mt-7 rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/10 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-xl text-cyan-300" aria-hidden="true">{stepIcons[activeStep.kind]}</span>
                <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">Schritt {currentStep + 1}</p><h3 className="mt-1 text-2xl font-semibold">{activeStep.title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{activeStep.description}</p></div>
              </div>

              <StepContent step={activeStep} checkedItems={checkedItems} onCheck={(key, checked) => setCheckedItems((current) => ({ ...current, [key]: checked }))} />

              <div className="mt-8 flex flex-col-reverse gap-3 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center">
                <button type="button" onClick={() => router.push(`/projects/${projectId}`)} className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-500 transition hover:bg-white/5 hover:text-slate-200">Abbrechen</button>
                <div className="flex flex-1 justify-end gap-3">
                  <button type="button" disabled={currentStep === 0} onClick={() => setCurrentStep((step) => Math.max(0, step - 1))} className="rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-30">Zurück</button>
                  {isLastStep ? <button type="button" onClick={finishVisit} className="rounded-xl bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">Besuch abschließen</button> : <button type="button" onClick={() => setCurrentStep((step) => Math.min(workflow.steps.length - 1, step + 1))} className="rounded-xl bg-cyan-300 px-6 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">Weiter</button>}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </AppShell>
  );
}

function StepContent({ step, checkedItems, onCheck }: { step: WorkflowStep; checkedItems: Record<string, boolean>; onCheck: (key: string, checked: boolean) => void }) {
  if (step.items) return <div className="mt-7 grid gap-3 sm:grid-cols-2">{step.items.map((item) => { const key = `${step.id}:${item}`; return <label key={item} className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/[0.08] bg-[#070b14]/70 p-4 text-sm text-slate-300 transition hover:border-cyan-300/25"><input type="checkbox" checked={Boolean(checkedItems[key])} onChange={(event) => onCheck(key, event.target.checked)} className="h-4 w-4 accent-cyan-300" /><span>{item}</span></label>; })}</div>;

  if (step.kind === "photos") return <div className="mt-7 rounded-2xl border border-dashed border-white/15 bg-[#070b14]/50 px-6 py-10 text-center"><p className="text-sm font-medium text-slate-300">Fotobereich vorbereitet</p><p className="mt-2 text-xs text-slate-600">Die Kamera- und Uploadfunktion folgt in Ticket T-005.</p></div>;
  if (step.kind === "brain") return <div className="mt-7 rounded-2xl border border-cyan-300/15 bg-cyan-400/[0.055] p-5"><p className="text-sm font-medium text-cyan-200">ScaffoldAI Brain ist vorbereitet</p><p className="mt-2 text-sm leading-6 text-slate-500">Die intelligente Auswertung wird mit den erfassten Workflow-Daten in Ticket T-008 aktiviert.</p></div>;
  if (step.kind === "complete") return <div className="mt-7 rounded-2xl border border-emerald-300/15 bg-emerald-400/[0.045] p-5"><p className="text-sm font-medium text-emerald-300">Workflow vollständig durchlaufen</p><p className="mt-2 text-sm text-slate-500">Mit dem Abschluss wird der Status dieses Besuchs aktualisiert.</p></div>;

  const label = step.kind === "measurement" ? "Aufmaß und Mengen" : step.kind === "material" ? "Material und Mengen" : step.kind === "review" ? "Ergebnis des Vergleichs" : "Notizen und Beschreibung";
  return <label className="mt-7 block"><span className="mb-2 block text-sm font-medium text-slate-300">{label}</span><textarea rows={7} placeholder="Angaben zu diesem Schritt erfassen …" className="w-full resize-y rounded-2xl border border-white/10 bg-[#070b14] px-4 py-3 text-sm leading-6 text-slate-100 outline-none transition placeholder:text-slate-700 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/10" /></label>;
}

function PageState({ text }: { text: string }) {
  return <AppShell><div className="flex min-h-screen items-center justify-center px-6 text-sm text-slate-500">{text}</div></AppShell>;
}

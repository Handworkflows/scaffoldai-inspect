"use client";

import { FormEvent, useEffect, useState } from "react";
import { AppShell } from "@/components/layout/app-shell";
import type { Project, ProjectDraft, ProjectService, ProjectType } from "@/types/project";

const STORAGE_KEY = "scaffoldai-projects";
const projectTypes: ProjectType[] = ["Wohnhaus", "Mehrfamilienhaus", "Gewerbe", "Industrie", "Sonstiges"];
const services: ProjectService[] = ["Fassadengerüst", "Dacharbeiten", "Schutzdach", "Sonderkonstruktion", "Innenraumgerüst"];
const emptyDraft: ProjectDraft = {
  name: "",
  customer: "",
  address: "",
  postalCode: "",
  city: "",
  type: null,
  services: [],
};

function readProjects(): Project[] {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as Project[]) : [];
  } catch {
    return [];
  }
}

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [wizardOpen, setWizardOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [draft, setDraft] = useState<ProjectDraft>(emptyDraft);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const loadProjects = window.setTimeout(() => {
      setProjects(readProjects());
      setIsLoaded(true);
    }, 0);

    return () => window.clearTimeout(loadProjects);
  }, []);

  function openWizard() {
    setDraft(emptyDraft);
    setErrors({});
    setStep(1);
    setWizardOpen(true);
  }

  function closeWizard() {
    setWizardOpen(false);
  }

  function continueWizard(event: FormEvent) {
    event.preventDefault();
    if (step === 1) {
      const nextErrors: Record<string, string> = {};
      if (!draft.name.trim()) nextErrors.name = "Bitte einen Projektnamen eingeben.";
      if (!draft.address.trim()) nextErrors.address = "Bitte eine Adresse eingeben.";
      setErrors(nextErrors);
      if (Object.keys(nextErrors).length) return;
    }
    if (step === 2 && !draft.type) {
      setErrors({ type: "Bitte eine Projektart auswählen." });
      return;
    }
    setErrors({});
    setStep((current) => Math.min(4, current + 1));
  }

  function toggleService(service: ProjectService) {
    setDraft((current) => ({
      ...current,
      services: current.services.includes(service)
        ? current.services.filter((item) => item !== service)
        : [...current.services, service],
    }));
  }

  function createProject() {
    const project: Project = {
      ...draft,
      type: draft.type as ProjectType,
      id: globalThis.crypto?.randomUUID?.() ?? `${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    const nextProjects = [project, ...projects];
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextProjects));
    setProjects(nextProjects);
    setWizardOpen(false);
  }

  return (
    <AppShell>
      <div className="relative min-h-full overflow-hidden text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-12rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute bottom-[-14rem] right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-violet-600/10 blur-3xl" />
        </div>

        <div className="relative mx-auto min-h-screen w-full max-w-6xl px-6 py-8 lg:px-10 xl:px-12">
          <header className="flex items-center justify-between border-b border-white/[0.07] pb-5">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">Arbeitsbereich</p>
              <h1 className="mt-1 text-2xl font-semibold">Projektübersicht</h1>
            </div>
            <button onClick={openWizard} className="rounded-xl bg-cyan-300 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">
              + Neues Projekt
            </button>
          </header>

          <section className="py-10">
            <div className="mb-8 max-w-2xl">
              <p className="text-sm font-medium text-cyan-300">Digitale Gerüstprüfung</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Projekte im Blick behalten.</h2>
              <p className="mt-3 text-slate-400">Neue Baustelle anlegen und direkt mit der Dokumentation starten.</p>
            </div>

            {isLoaded && projects.length === 0 ? (
              <button onClick={openWizard} className="group flex min-h-64 w-full flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.025] p-8 text-center transition hover:border-cyan-300/40 hover:bg-cyan-400/[0.035]">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-3xl text-cyan-300">+</span>
                <span className="mt-5 text-lg font-semibold">Erstes Projekt anlegen</span>
                <span className="mt-2 max-w-sm text-sm leading-6 text-slate-500">Der Assistent führt dich in vier kurzen Schritten durch alle Projektdaten.</span>
              </button>
            ) : (
              <div className="grid gap-4 lg:grid-cols-2">
                {projects.map((project) => (
                  <article key={project.id} className="rounded-2xl border border-white/10 bg-white/[0.045] p-6 shadow-xl shadow-black/10">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.16em] text-cyan-300">{project.type}</p>
                        <h3 className="mt-2 text-xl font-semibold text-slate-100">{project.name}</h3>
                      </div>
                      <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">Neu</span>
                    </div>
                    <p className="mt-5 text-sm text-slate-400">{project.address}{project.postalCode || project.city ? ` · ${project.postalCode} ${project.city}` : ""}</p>
                    {project.customer && <p className="mt-2 text-sm text-slate-500">Kunde: {project.customer}</p>}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.services.length ? project.services.map((service) => <span key={service} className="rounded-lg bg-white/[0.055] px-2.5 py-1 text-xs text-slate-400">{service}</span>) : <span className="text-xs text-slate-600">Keine Leistung ausgewählt</span>}
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        </div>

        {wizardOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#03050a]/85 p-4 backdrop-blur-md" role="dialog" aria-modal="true" aria-labelledby="wizard-title">
            <div className="max-h-[calc(100vh-2rem)] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-[#0b111e] shadow-2xl shadow-black/60">
              <div className="border-b border-white/[0.08] px-6 py-5 sm:px-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Schritt {step}/4</p>
                    <h2 id="wizard-title" className="mt-1 text-2xl font-semibold">Neues Projekt</h2>
                  </div>
                  <button onClick={closeWizard} aria-label="Assistent schließen" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-xl text-slate-400 hover:bg-white/5 hover:text-white">×</button>
                </div>
                <div className="mt-5 grid grid-cols-4 gap-2" aria-label={`Fortschritt: Schritt ${step} von 4`}>
                  {[1, 2, 3, 4].map((item) => <span key={item} className={`h-1.5 rounded-full ${item <= step ? "bg-cyan-300" : "bg-white/10"}`} />)}
                </div>
              </div>

              <form onSubmit={continueWizard} className="p-6 sm:p-8">
                {step === 1 && <BasicData draft={draft} errors={errors} onChange={setDraft} />}
                {step === 2 && <ChoiceStep title="Welche Art von Projekt ist es?" error={errors.type} options={projectTypes} selected={draft.type} onSelect={(type) => setDraft({ ...draft, type })} />}
                {step === 3 && <ServiceStep selected={draft.services} onToggle={toggleService} />}
                {step === 4 && <Summary draft={draft} />}

                <div className="mt-8 flex items-center justify-between border-t border-white/[0.08] pt-6">
                  {step > 1 ? <button type="button" onClick={() => { setErrors({}); setStep(step - 1); }} className="rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium text-slate-300 hover:bg-white/5">Zurück</button> : <span />}
                  {step < 4 ? <button type="submit" className="rounded-xl bg-cyan-300 px-6 py-2.5 text-sm font-semibold text-slate-950 hover:bg-cyan-200">Weiter</button> : <button type="button" onClick={createProject} className="rounded-xl bg-cyan-300 px-6 py-2.5 text-sm font-semibold text-slate-950 hover:bg-cyan-200">Projekt erstellen</button>}
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}

function BasicData({ draft, errors, onChange }: { draft: ProjectDraft; errors: Record<string, string>; onChange: (draft: ProjectDraft) => void }) {
  const field = (key: keyof ProjectDraft) => ({ value: String(draft[key] ?? ""), onChange: (event: React.ChangeEvent<HTMLInputElement>) => onChange({ ...draft, [key]: event.target.value }) });
  return <div>
    <h3 className="text-lg font-semibold">Grunddaten</h3><p className="mt-1 text-sm text-slate-500">Die wichtigsten Angaben zu deiner Baustelle.</p>
    <div className="mt-6 grid gap-5 sm:grid-cols-2">
      <Input label="Projektname" required error={errors.name} className="sm:col-span-2" {...field("name")} />
      <Input label="Kunde" className="sm:col-span-2" {...field("customer")} />
      <Input label="Adresse" required error={errors.address} className="sm:col-span-2" {...field("address")} />
      <Input label="PLZ" inputMode="numeric" {...field("postalCode")} />
      <Input label="Ort" {...field("city")} />
    </div>
  </div>;
}

function Input({ label, error, className = "", ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string }) {
  return <label className={`block ${className}`}><span className="mb-2 block text-sm font-medium text-slate-300">{label}{props.required && <span className="text-cyan-300"> *</span>}</span><input {...props} aria-invalid={Boolean(error)} className="w-full rounded-xl border border-white/10 bg-[#070b14] px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-700 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/10" />{error && <span className="mt-1.5 block text-xs text-rose-300">{error}</span>}</label>;
}

function ChoiceStep({ title, error, options, selected, onSelect }: { title: string; error?: string; options: ProjectType[]; selected: ProjectType | null; onSelect: (value: ProjectType) => void }) {
  return <div><h3 className="text-lg font-semibold">Projektart</h3><p className="mt-1 text-sm text-slate-500">{title}</p><div className="mt-6 grid gap-3 sm:grid-cols-2">{options.map((option) => <button key={option} type="button" onClick={() => onSelect(option)} className={`rounded-xl border p-4 text-left text-sm font-medium transition ${selected === option ? "border-cyan-300/60 bg-cyan-400/10 text-cyan-200 ring-1 ring-cyan-300/20" : "border-white/10 bg-white/[0.025] text-slate-300 hover:border-white/20"}`}>{option}<span className="float-right">{selected === option ? "●" : "○"}</span></button>)}</div>{error && <p className="mt-3 text-xs text-rose-300">{error}</p>}</div>;
}

function ServiceStep({ selected, onToggle }: { selected: ProjectService[]; onToggle: (value: ProjectService) => void }) {
  return <div><h3 className="text-lg font-semibold">Leistung</h3><p className="mt-1 text-sm text-slate-500">Eine oder mehrere Leistungen auswählen.</p><div className="mt-6 grid gap-3 sm:grid-cols-2">{services.map((service) => <button key={service} type="button" onClick={() => onToggle(service)} aria-pressed={selected.includes(service)} className={`rounded-xl border p-4 text-left text-sm font-medium transition ${selected.includes(service) ? "border-cyan-300/60 bg-cyan-400/10 text-cyan-200" : "border-white/10 bg-white/[0.025] text-slate-300 hover:border-white/20"}`}><span className={`mr-3 inline-flex h-5 w-5 items-center justify-center rounded border ${selected.includes(service) ? "border-cyan-300 bg-cyan-300 text-slate-950" : "border-slate-600"}`}>{selected.includes(service) && "✓"}</span>{service}</button>)}</div></div>;
}

function Summary({ draft }: { draft: ProjectDraft }) {
  const rows = [["Projektname", draft.name], ["Kunde", draft.customer || "–"], ["Adresse", draft.address], ["PLZ / Ort", `${draft.postalCode} ${draft.city}`.trim() || "–"], ["Projektart", draft.type ?? "–"], ["Leistung", draft.services.join(", ") || "Keine Leistung ausgewählt"]];
  return <div><h3 className="text-lg font-semibold">Zusammenfassung</h3><p className="mt-1 text-sm text-slate-500">Bitte prüfe die Angaben vor dem Erstellen.</p><dl className="mt-6 divide-y divide-white/[0.07] rounded-2xl border border-white/10 bg-white/[0.025] px-5">{rows.map(([label, value]) => <div key={label} className="grid gap-1 py-4 sm:grid-cols-[140px_1fr]"><dt className="text-sm text-slate-500">{label}</dt><dd className="text-sm font-medium text-slate-200">{value}</dd></div>)}</dl></div>;
}

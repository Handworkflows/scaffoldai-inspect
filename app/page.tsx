"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/layout/app-shell";
import { readProjectCore, readProjects, writeProjects } from "@/lib/local-storage";
import type { Project, ProjectDraft, ProjectService, ProjectType } from "@/types/project";
import type { ProjectCockpitData } from "@/types/project-cockpit";
import type { SiteVisit } from "@/types/site-visit";

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

type Priority = "red" | "orange" | "green";
type PriorityEvent = { projectId: string; title: string; detail: string; priority: Priority };
type TaskGroup = { label: string; items: Array<{ projectId: string; detail: string }> };

export default function Home() {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [cockpits, setCockpits] = useState<ProjectCockpitData[]>([]);
  const [visits, setVisits] = useState<SiteVisit[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [wizardOpen, setWizardOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [draft, setDraft] = useState<ProjectDraft>(emptyDraft);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const loadProjects = window.setTimeout(() => {
      const store = readProjectCore();
      setProjects(readProjects());
      setCockpits(store.projectCockpits);
      setVisits(store.visits.map(({ id, projectId, date, type, status }) => ({ id, projectId, date, type, status })));
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
      status: "Neu",
    };
    const nextProjects = [project, ...projects];
    writeProjects(nextProjects);
    setProjects(nextProjects);
    setWizardOpen(false);
  }

  const today = localDateKey(new Date());
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrow = localDateKey(tomorrowDate);
  const projectById = new Map(projects.map((project) => [project.id, project]));
  const cockpitByProject = new Map(cockpits.map((cockpit) => [cockpit.projectId, cockpit]));
  const todayVisits = visits.filter((visit) => localDateKey(new Date(visit.date)) === today).sort((a, b) => a.date.localeCompare(b.date));
  const criticalEvents: PriorityEvent[] = cockpits.flatMap((cockpit) => {
    const events: PriorityEvent[] = [];
    const questions = cockpit.operational.openQuestions.trim();
    const work = cockpit.operational.openWork.trim();
    if (questions) events.push({ projectId: cockpit.projectId, title: "Klärung erforderlich", detail: questions, priority: urgencyFor(questions) });
    if (work && urgencyFor(work) === "red") events.push({ projectId: cockpit.projectId, title: "Kritische offene Arbeit", detail: work, priority: "red" });
    if (isOpen(cockpit.commercial.openChanges)) events.push({ projectId: cockpit.projectId, title: "Nachtrag offen", detail: cockpit.commercial.openChanges, priority: "orange" });
    if (isOpen(cockpit.technical.measurementStatus) && cockpit.technical.plannedMeasurement && cockpit.technical.plannedMeasurement < today) events.push({ projectId: cockpit.projectId, title: "Aufmaß überfällig", detail: cockpit.technical.measurementStatus, priority: "red" });
    return events;
  }).sort((a, b) => priorityRank(a.priority) - priorityRank(b.priority));
  const taskGroups: TaskGroup[] = [
    { label: "Angebote", items: cockpits.filter((item) => isOpen(item.commercial.offerStatus)).map((item) => ({ projectId: item.projectId, detail: item.commercial.offerStatus })) },
    { label: "Aufmaß", items: cockpits.filter((item) => isOpen(item.technical.measurementStatus)).map((item) => ({ projectId: item.projectId, detail: item.technical.measurementStatus })) },
    { label: "Rechnungen", items: cockpits.flatMap((item) => [{ projectId: item.projectId, detail: item.commercial.progressInvoiceStatus }, { projectId: item.projectId, detail: item.commercial.finalInvoiceStatus }].filter((entry) => isOpen(entry.detail))) },
    { label: "Rückrufe", items: cockpits.filter((item) => /rückruf|zurückrufen/i.test(item.operational.openQuestions)).map((item) => ({ projectId: item.projectId, detail: item.operational.openQuestions })) },
    { label: "Nachträge", items: cockpits.filter((item) => isOpen(item.commercial.openChanges)).map((item) => ({ projectId: item.projectId, detail: item.commercial.openChanges })) },
  ];
  const taskCount = taskGroups.reduce((sum, group) => sum + group.items.length, 0);
  const relevantIds = new Set([...todayVisits.map((visit) => visit.projectId), ...criticalEvents.map((event) => event.projectId), ...taskGroups.flatMap((group) => group.items.map((item) => item.projectId)), ...cockpits.filter((cockpit) => cockpit.nextDeployment.plannedDate === today).map((cockpit) => cockpit.projectId)]);
  const relevantProjects = projects.filter((project) => relevantIds.has(project.id));
  const openOffers = cockpits.filter((cockpit) => isOpen(cockpit.commercial.offerStatus)).length;
  const openInvoices = cockpits.filter((cockpit) => isOpen(cockpit.commercial.progressInvoiceStatus) || isOpen(cockpit.commercial.finalInvoiceStatus)).length;
  const openProgressInvoices = cockpits.filter((cockpit) => isOpen(cockpit.commercial.progressInvoiceStatus)).length;
  const openChanges = cockpits.filter((cockpit) => isOpen(cockpit.commercial.openChanges)).length;
  const tomorrowVisits = visits.filter((visit) => localDateKey(new Date(visit.date)) === tomorrow);
  const weekVisits = visits.filter((visit) => isLaterThisWeek(new Date(visit.date), tomorrowDate));

  return (
    <AppShell>
      <div className="relative min-h-full overflow-hidden text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-12rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute bottom-[-14rem] right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-violet-600/10 blur-3xl" />
        </div>

        <div className="relative mx-auto min-h-screen w-full max-w-6xl px-6 py-8 lg:px-10 xl:px-12">
          <header className="flex flex-col justify-between gap-5 border-b border-white/[0.07] pb-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-300">{formatToday()}</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Guten Morgen</h1>
              <p className="mt-2 text-sm text-slate-500">Das ist heute wichtig.</p>
            </div>
            <button onClick={openWizard} className="min-h-12 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-cyan-300/30 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">
              + Neues Projekt
            </button>
          </header>

          <section className="py-7" aria-labelledby="today-summary-heading">
            <h2 id="today-summary-heading" className="sr-only">Heute im Überblick</h2>
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-6">
              <Metric label="Kolonnen" value="–" note="Keine Kolonnenplanung vorhanden" />
              <Metric label="Aktive Baustellen" value={projects.filter((project) => project.status === "Aktiv").length} />
              <Metric label="Kritische Probleme" value={criticalEvents.length} critical={criticalEvents.length > 0} />
              <Metric label="Offene Aufgaben" value={taskCount} />
              <Metric label="Offene Angebote" value={openOffers} />
              <Metric label="Offene Rechnungen" value={openInvoices} />
            </div>
          </section>

          <TodaySection title="Kolonnen heute" subtitle="Heutige Baustelleneinsätze aus den geplanten Besuchen.">
            {todayVisits.length ? <div className="grid gap-3 lg:grid-cols-2">{todayVisits.map((visit) => { const project = projectById.get(visit.projectId); const cockpit = cockpitByProject.get(visit.projectId); const anomaly = cockpit?.operational.openQuestions || cockpit?.operational.openWork; return <button key={visit.id} onClick={() => router.push(`/projects/${visit.projectId}`)} className="min-h-40 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-left transition hover:border-cyan-300/30 hover:bg-white/[0.06]"><div className="flex items-start justify-between gap-3"><div><p className="text-xs text-slate-600">Kolonne noch nicht hinterlegt</p><h3 className="mt-1 font-semibold text-slate-100">{project?.name ?? "Projekt nicht gefunden"}</h3><p className="mt-1 text-xs text-slate-500">{project ? formatAddress(project) : "Adresse nicht verfügbar"}</p></div><span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">{visit.status}</span></div><div className="mt-4 flex items-center justify-between gap-3"><p className="text-sm text-slate-300">{visit.type}</p><p className="text-sm font-medium text-slate-400">{formatTime(visit.date)}</p></div><p className={`mt-3 rounded-lg px-3 py-2 text-xs ${anomaly ? "bg-amber-400/[0.07] text-amber-300" : "bg-emerald-400/[0.05] text-emerald-300"}`}>{anomaly || "Keine Auffälligkeit dokumentiert"}</p></button>; })}</div> : <EmptyState text="Für heute sind keine Kolonnen oder Baustellenbesuche geplant." />}
          </TodaySection>

          <TodaySection title="Sofort handeln" subtitle="Kritische Ereignisse, nach Dringlichkeit priorisiert.">
            {criticalEvents.length ? <div className="grid gap-3">{criticalEvents.map((event, index) => <ActionCard key={`${event.projectId}-${event.title}-${index}`} project={projectById.get(event.projectId)} title={event.title} detail={event.detail} priority={event.priority} onOpen={() => router.push(`/projects/${event.projectId}`)} />)}</div> : <div className="rounded-2xl border border-emerald-300/15 bg-emerald-400/[0.04] px-6 py-8 text-center text-sm text-emerald-300">Keine akuten kritischen Ereignisse dokumentiert.</div>}
          </TodaySection>

          <TodaySection title="Heute erledigen" subtitle="Offene Arbeit aus den vorhandenen Projektständen.">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">{taskGroups.map((group) => <TaskGroupCard key={group.label} group={group} projects={projectById} onOpen={(projectId) => router.push(`/projects/${projectId}`)} />)}</div>
          </TodaySection>

          <TodaySection title="Termine" subtitle="Geplante Baustellenbesuche im zeitlichen Überblick.">
            <div className="grid gap-3 sm:grid-cols-3"><ScheduleCard label="Heute" visits={todayVisits} /><ScheduleCard label="Morgen" visits={tomorrowVisits} /><ScheduleCard label="Diese Woche" visits={weekVisits} /></div>
          </TodaySection>

          <TodaySection title="Aktuelle Projekte" subtitle="Nur Baustellen mit einem heutigen Termin oder offenem Handlungsbedarf.">
            {!isLoaded ? <EmptyState text="Heutige Projekte werden geladen …" /> : relevantProjects.length ? <div className="grid gap-4 lg:grid-cols-2">{relevantProjects.map((project) => <TodayProjectCard key={project.id} project={project} cockpit={cockpitByProject.get(project.id)} lastVisit={latestVisit(visits, project.id)} onOpen={() => router.push(`/projects/${project.id}`)} />)}</div> : <EmptyState text={projects.length ? "Heute benötigt nach den vorhandenen Daten kein Projekt besondere Aufmerksamkeit." : "Noch keine Projekte vorhanden."} action={projects.length ? undefined : openWizard} />}
          </TodaySection>

          <TodaySection title="Kaufmännischer Überblick" subtitle="Statusangaben aus den Projekt-Cockpits; keine Berechnung.">
            <div className="grid gap-3 sm:grid-cols-3"><CommercialCard label="Offene Rechnungen" value={openInvoices} /><CommercialCard label="Offene Abschläge" value={openProgressInvoices} /><CommercialCard label="Offene Nachträge" value={openChanges} /></div>
          </TodaySection>
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

function Metric({ label, value, note, critical = false }: { label: string; value: number | string; note?: string; critical?: boolean }) {
  return <div className={`rounded-2xl border p-4 sm:p-5 ${critical ? "border-rose-300/20 bg-rose-400/[0.06]" : "border-white/10 bg-white/[0.04]"}`}><p className="text-xs leading-5 text-slate-500">{label}</p><p className={`mt-2 text-3xl font-semibold ${critical ? "text-rose-300" : "text-slate-100"}`}>{value}</p>{note && <p className="mt-2 text-[11px] leading-4 text-slate-600">{note}</p>}</div>;
}

function TodaySection({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return <section className="border-t border-white/[0.07] py-8"><div className="mb-5"><h2 className="text-2xl font-semibold tracking-tight">{title}</h2><p className="mt-1 text-sm text-slate-500">{subtitle}</p></div>{children}</section>;
}

function EmptyState({ text, action }: { text: string; action?: () => void }) {
  return <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] px-6 py-10 text-center"><p className="text-sm text-slate-500">{text}</p>{action && <button type="button" onClick={action} className="mt-4 min-h-11 rounded-xl bg-cyan-300 px-5 text-sm font-semibold text-slate-950">Erstes Projekt anlegen</button>}</div>;
}

function ActionCard({ project, title, detail, priority = "green", onOpen }: { project?: Project; title: string; detail?: string; priority?: Priority; onOpen: () => void }) {
  const tone = priority === "red" ? "border-rose-300/25 bg-rose-400/[0.06] hover:border-rose-300/45" : priority === "orange" ? "border-amber-300/20 bg-amber-400/[0.05] hover:border-amber-300/40" : "border-emerald-300/15 bg-emerald-400/[0.04] hover:border-emerald-300/30";
  const labelTone = priority === "red" ? "text-rose-300" : priority === "orange" ? "text-amber-300" : "text-emerald-300";
  return <button type="button" onClick={onOpen} className={`group min-h-28 rounded-2xl border p-5 text-left transition ${tone}`}><div className="flex items-start justify-between gap-4"><div className="min-w-0"><p className={`text-xs font-medium uppercase tracking-[0.15em] ${labelTone}`}>{title}</p><h3 className="mt-1 truncate font-semibold text-slate-100">{project?.name ?? "Projekt nicht gefunden"}</h3></div><span className="text-slate-600 transition group-hover:translate-x-0.5 group-hover:text-cyan-300" aria-hidden="true">→</span></div>{detail && <p className="mt-3 line-clamp-2 text-sm leading-5 text-slate-500">{detail}</p>}</button>;
}

function TodayProjectCard({ project, cockpit, lastVisit, onOpen }: { project: Project; cockpit?: ProjectCockpitData; lastVisit?: SiteVisit; onOpen: () => void }) {
  const next = cockpit?.nextDeployment.plannedDate ? `${cockpit.nextDeployment.type || "Nächster Einsatz"} · ${formatDay(cockpit.nextDeployment.plannedDate)}` : "Kein nächster Einsatz hinterlegt";
  return <button type="button" onClick={onOpen} className="group min-h-56 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-left transition hover:border-cyan-300/30 hover:bg-white/[0.06]"><div className="flex items-start justify-between gap-4"><div><p className="text-xs font-medium uppercase tracking-[0.15em] text-cyan-300">{project.type}</p><h3 className="mt-2 text-xl font-semibold text-slate-100">{project.name}</h3></div><span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">{project.status}</span></div><p className="mt-4 text-sm text-slate-400">{formatAddress(project)}</p><div className="mt-4 grid gap-2 text-xs sm:grid-cols-2"><ProjectFact label="Nächster Einsatz" value={next} /><ProjectFact label="Letzte Aktivität" value={lastVisit ? `${lastVisit.type} · ${formatDay(localDateKey(new Date(lastVisit.date)))}` : "Noch keine Aktivität"} /><ProjectFact label="Offene Arbeiten" value={cockpit?.operational.openWork || "Keine offenen Arbeiten erfasst"} /></div><span className="mt-4 inline-flex text-xs font-medium text-cyan-300">Projekt öffnen →</span></button>;
}

function ProjectFact({ label, value }: { label: string; value: string }) { return <div className="rounded-lg bg-black/10 px-3 py-2 last:sm:col-span-2"><p className="text-[11px] text-slate-600">{label}</p><p className="mt-1 line-clamp-2 text-slate-400">{value}</p></div>; }

function TaskGroupCard({ group, projects, onOpen }: { group: TaskGroup; projects: Map<string, Project>; onOpen: (projectId: string) => void }) { return <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"><div className="flex items-center justify-between gap-2"><h3 className="text-sm font-semibold text-slate-200">{group.label}</h3><span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-xs text-slate-400">{group.items.length}</span></div>{group.items.length ? <div className="mt-3 space-y-2">{group.items.slice(0, 3).map((item, index) => <button key={`${item.projectId}-${index}`} type="button" onClick={() => onOpen(item.projectId)} className="w-full rounded-lg bg-black/10 px-3 py-2 text-left transition hover:bg-white/[0.05]"><p className="truncate text-xs font-medium text-slate-300">{projects.get(item.projectId)?.name ?? "Projekt nicht gefunden"}</p><p className="mt-1 truncate text-[11px] text-slate-600">{item.detail}</p></button>)}</div> : <p className="mt-4 text-xs text-slate-600">Nichts offen</p>}</div>; }

function ScheduleCard({ label, visits }: { label: string; visits: SiteVisit[] }) { return <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"><div className="flex items-center justify-between"><h3 className="font-semibold text-slate-200">{label}</h3><span className="text-2xl font-semibold text-cyan-300">{visits.length}</span></div><p className="mt-3 text-xs text-slate-600">{visits.length === 1 ? "1 geplanter Besuch" : `${visits.length} geplante Besuche`}</p></div>; }

function CommercialCard({ label, value }: { label: string; value: number }) {
  return <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"><p className="text-sm text-slate-500">{label}</p><p className="mt-3 text-3xl font-semibold text-slate-100">{value}</p><p className="mt-2 text-xs text-slate-600">Aus vorhandenen Statusangaben</p></div>;
}

function isOpen(value: string) {
  const normalized = value.trim().toLocaleLowerCase("de-DE");
  return Boolean(normalized) && !["bezahlt", "abgeschlossen", "erledigt", "keine", "kein", "freigegeben"].some((closed) => normalized === closed || normalized.startsWith(`${closed} `));
}

function urgencyFor(value: string): Priority { return /behinderung|wartet|fehlt|überfällig|stillstand|gesperrt|problem/i.test(value) ? "red" : "orange"; }
function priorityRank(priority: Priority) { return priority === "red" ? 0 : priority === "orange" ? 1 : 2; }
function latestVisit(visits: SiteVisit[], projectId: string) { return visits.filter((visit) => visit.projectId === projectId).sort((a, b) => b.date.localeCompare(a.date))[0]; }
function formatAddress(project: Project) { return [project.address, [project.postalCode, project.city].filter(Boolean).join(" ")].filter(Boolean).join(", ") || "Adresse nicht hinterlegt"; }
function isLaterThisWeek(date: Date, tomorrowDate: Date) { const key = localDateKey(date); const tomorrowKey = localDateKey(tomorrowDate); const end = new Date(); end.setHours(23, 59, 59, 999); end.setDate(end.getDate() + ((7 - end.getDay()) % 7)); return key > tomorrowKey && date <= end; }

function localDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatToday() { return new Intl.DateTimeFormat("de-DE", { weekday: "long", day: "2-digit", month: "long" }).format(new Date()); }
function formatTime(date: string) { return new Intl.DateTimeFormat("de-DE", { hour: "2-digit", minute: "2-digit" }).format(new Date(date)); }
function formatDay(date: string) { return new Intl.DateTimeFormat("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" }).format(new Date(`${date}T12:00:00`)); }

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

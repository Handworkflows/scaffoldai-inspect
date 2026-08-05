"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { readProjects, readSiteVisits, writeSiteVisits } from "@/lib/local-storage";
import type { Project } from "@/types/project";
import { siteVisitTypes, type SiteVisit, type SiteVisitType } from "@/types/site-visit";

export default function ProjectPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<Project | null>();
  const [visits, setVisits] = useState<SiteVisit[]>([]);
  const [selectorOpen, setSelectorOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setProject(readProjects().find((item) => item.id === projectId) ?? null);
      setVisits(readSiteVisits().filter((visit) => visit.projectId === projectId));
    }, 0);
    return () => window.clearTimeout(timer);
  }, [projectId]);

  function createVisit(type: SiteVisitType) {
    const visit: SiteVisit = {
      id: window.crypto.randomUUID(),
      projectId,
      date: new Date().toISOString(),
      type,
      status: "Neu",
    };
    const allVisits = readSiteVisits();
    writeSiteVisits([visit, ...allVisits]);
    setVisits((current) => [visit, ...current]);
    setSelectorOpen(false);
  }

  if (project === undefined) return <PageState text="Projekt wird geladen …" />;
  if (project === null) return <PageState text="Projekt nicht gefunden." />;

  return (
    <AppShell>
      <div className="relative min-h-full overflow-hidden text-white">
        <Glow />
        <div className="relative mx-auto min-h-screen w-full max-w-5xl px-6 py-8 lg:px-10">
          <Link href="/" className="text-sm text-slate-500 transition hover:text-cyan-300">← Zurück zur Projektübersicht</Link>

          <header className="mt-6 border-b border-white/[0.08] pb-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-300">{project.type}</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{project.name}</h1>
            <p className="mt-3 text-sm text-slate-400">
              {project.address}{project.postalCode || project.city ? ` · ${project.postalCode} ${project.city}` : ""}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.services.length ? project.services.map((service) => (
                <span key={service} className="rounded-lg border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300">{service}</span>
              )) : <span className="text-xs text-slate-600">Keine Leistungen ausgewählt</span>}
            </div>
          </header>

          <section className="py-8" aria-labelledby="visits-heading">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">Dokumentation</p>
                <h2 id="visits-heading" className="mt-1 text-2xl font-semibold">Baustellenbesuche</h2>
              </div>
              <button onClick={() => setSelectorOpen(true)} className="rounded-xl bg-cyan-300 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">
                + Neuer Baustellenbesuch
              </button>
            </div>

            {visits.length === 0 ? (
              <div className="mt-6 rounded-2xl border border-dashed border-white/15 bg-white/[0.025] px-6 py-14 text-center text-sm text-slate-500">Noch keine Baustellenbesuche.</div>
            ) : (
              <div className="mt-6 grid gap-3">
                {visits.map((visit) => (
                  <Link key={visit.id} href={`/projects/${projectId}/visits/${visit.id}`} className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-300/30 hover:bg-white/[0.06]">
                    <div>
                      <p className="font-semibold text-slate-100 transition group-hover:text-cyan-100">{visit.type}</p>
                      <p className="mt-1 text-sm text-slate-500">{formatDate(visit.date)}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">{visit.status}</span>
                      <span className="text-slate-600 transition group-hover:translate-x-0.5 group-hover:text-cyan-300" aria-hidden="true">→</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </section>
        </div>

        {selectorOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#03050a]/85 p-4 backdrop-blur-md" role="dialog" aria-modal="true" aria-labelledby="visit-selector-title" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectorOpen(false); }}>
            <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-[#0b111e] p-6 shadow-2xl sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Neuer Termin</p><h2 id="visit-selector-title" className="mt-1 text-2xl font-semibold">Besuchsart auswählen</h2></div>
                <button onClick={() => setSelectorOpen(false)} aria-label="Auswahl schließen" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-xl text-slate-400 hover:bg-white/5 hover:text-white">×</button>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {siteVisitTypes.map((type) => <button key={type} onClick={() => createVisit(type)} className="rounded-xl border border-white/10 bg-white/[0.025] p-4 text-left text-sm font-medium text-slate-300 transition hover:border-cyan-300/40 hover:bg-cyan-400/[0.07] hover:text-cyan-200">{type}</button>)}
              </div>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("de-DE", { dateStyle: "long", timeStyle: "short" }).format(new Date(date));
}

function Glow() {
  return <div className="pointer-events-none absolute inset-0"><div className="absolute left-[-12rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-3xl" /><div className="absolute bottom-[-14rem] right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-violet-600/10 blur-3xl" /></div>;
}

function PageState({ text }: { text: string }) {
  return <AppShell><div className="flex min-h-screen items-center justify-center px-6 text-sm text-slate-500">{text}</div></AppShell>;
}

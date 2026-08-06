"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { readProjects } from "@/lib/local-storage";
import type { Project } from "@/types/project";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>();

  useEffect(() => {
    const timer = window.setTimeout(() => setProjects(readProjects()), 0);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AppShell>
      <div className="relative min-h-screen overflow-hidden text-white">
        <div className="pointer-events-none absolute inset-0"><div className="absolute left-[-12rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-3xl" /><div className="absolute bottom-[-14rem] right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-violet-600/10 blur-3xl" /></div>
        <div className="relative mx-auto min-h-screen w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-10 xl:px-12">
          <header className="border-b border-white/[0.07] pb-6">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-300">Baustellen und Projekte</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Projekte</h1>
            <p className="mt-2 text-sm text-slate-500">Alle vorhandenen Projekte öffnen und im Detail bearbeiten.</p>
          </header>

          <section className="py-8" aria-label="Projektübersicht">
            {projects === undefined ? <EmptyState text="Projekte werden geladen …" /> : projects.length === 0 ? <EmptyState text="Noch keine Projekte vorhanden." /> : <div className="grid gap-4 lg:grid-cols-2">{projects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>}
          </section>
        </div>
      </div>
    </AppShell>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return <Link href={`/projects/${project.id}`} aria-label={`Projekt ${project.name} öffnen`} className="group rounded-2xl border border-white/10 bg-white/[0.045] p-6 shadow-xl shadow-black/10 transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"><div className="flex items-start justify-between gap-4"><div><p className="text-xs font-medium uppercase tracking-[0.16em] text-cyan-300">{project.type}</p><h2 className="mt-2 text-xl font-semibold text-slate-100 transition group-hover:text-cyan-100">{project.name}</h2></div><span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">{project.status}</span></div><p className="mt-5 text-sm text-slate-400">{project.address}{project.postalCode || project.city ? ` · ${project.postalCode} ${project.city}` : ""}</p>{project.customer && <p className="mt-2 text-sm text-slate-500">Kunde: {project.customer}</p>}<div className="mt-5 flex flex-wrap gap-2">{project.services.length ? project.services.map((service) => <span key={service} className="rounded-lg bg-white/[0.055] px-2.5 py-1 text-xs text-slate-400">{service}</span>) : <span className="text-xs text-slate-600">Keine Leistung ausgewählt</span>}</div><span className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-cyan-300">Projekt öffnen <span aria-hidden="true">→</span></span></Link>;
}

function EmptyState({ text }: { text: string }) {
  return <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.025] px-6 py-14 text-center text-sm text-slate-500">{text}</div>;
}

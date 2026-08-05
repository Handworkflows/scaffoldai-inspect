"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { readProjects, readSiteVisits } from "@/lib/local-storage";
import type { Project } from "@/types/project";
import type { SiteVisit } from "@/types/site-visit";

const areas = [
  { title: "Fotos", description: "Baustellenbilder erfassen und ordnen.", icon: "▧" },
  { title: "Notizen", description: "Beobachtungen und Absprachen festhalten.", icon: "≡" },
  { title: "Aufmaß", description: "Maße für diesen Besuch dokumentieren.", icon: "⌗" },
  { title: "Brain", description: "Unterstützung bei Prüfung und Dokumentation.", icon: "✦" },
  { title: "Timeline", description: "Aktivitäten dieses Besuchs im Überblick.", icon: "◷" },
];

export default function VisitPage() {
  const { projectId, visitId } = useParams<{ projectId: string; visitId: string }>();
  const [data, setData] = useState<{ project: Project; visit: SiteVisit } | null>();

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
  return (
    <AppShell>
      <div className="relative min-h-full overflow-hidden text-white">
        <div className="pointer-events-none absolute inset-0"><div className="absolute right-[-8rem] top-[-8rem] h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-3xl" /></div>
        <div className="relative mx-auto min-h-screen w-full max-w-5xl px-6 py-8 lg:px-10">
          <Link href={`/projects/${projectId}`} className="text-sm text-slate-500 transition hover:text-cyan-300">← Zurück zu {project.name}</Link>
          <header className="mt-6 flex flex-col justify-between gap-5 border-b border-white/[0.08] pb-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-300">Baustellenbesuch</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{visit.type}</h1>
              <p className="mt-3 text-sm text-slate-400">{new Intl.DateTimeFormat("de-DE", { dateStyle: "long", timeStyle: "short" }).format(new Date(visit.date))}</p>
            </div>
            <span className="w-fit rounded-full bg-cyan-400/10 px-3 py-1.5 text-xs text-cyan-300">Status: {visit.status}</span>
          </header>

          <section className="py-8" aria-labelledby="areas-heading">
            <h2 id="areas-heading" className="text-xl font-semibold">Dokumentation</h2>
            <p className="mt-2 text-sm text-slate-500">Die Arbeitsbereiche werden in den nächsten Tickets erweitert.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {areas.map((area) => (
                <article key={area.title} className="min-h-44 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-lg text-cyan-300" aria-hidden="true">{area.icon}</span>
                  <h3 className="mt-5 font-semibold text-slate-100">{area.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{area.description}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </AppShell>
  );
}

function PageState({ text }: { text: string }) {
  return <AppShell><div className="flex min-h-screen items-center justify-center px-6 text-sm text-slate-500">{text}</div></AppShell>;
}

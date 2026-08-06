"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { readProjectCore, readProjects } from "@/lib/local-storage";

const navigation = [
  { label: "Heute", icon: "⌂", href: "/" },
  { label: "Projekte", icon: "▦", href: "/projects" },
  { label: "Aufnahmen", icon: "□" },
  { label: "Einstellungen", icon: "⚙" },
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [dailyHints, setDailyHints] = useState<Array<{ projectId: string; project: string; text: string }>>([]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const store = readProjectCore();
      const names = new Map(readProjects().map((project) => [project.id, project.name]));
      const today = dateKey(new Date());
      const hints = store.projectCockpits.flatMap((cockpit) => {
        const items: string[] = [];
        if (cockpit.technical.plannedMeasurement && cockpit.technical.plannedMeasurement < today && isPending(cockpit.technical.measurementStatus)) items.push(`Aufmaß seit ${daysBetween(cockpit.technical.plannedMeasurement, today)} Tagen offen`);
        if (cockpit.operational.openWork.trim()) items.push(cockpit.operational.openWork.trim());
        if (cockpit.commercial.lastProgressInvoiceDate && daysBetween(cockpit.commercial.lastProgressInvoiceDate, today) >= 28) items.push(`Letzte Abschlagsrechnung vor ${daysBetween(cockpit.commercial.lastProgressInvoiceDate, today)} Tagen`);
        if (cockpit.technical.plannedDismantling) { const days = daysBetween(today, cockpit.technical.plannedDismantling); if (days >= 0 && days <= 7) items.push(days === 0 ? "Abbau ist heute geplant" : `Abbau in ${days} Tagen geplant`); }
        return items.map((text) => ({ projectId: cockpit.projectId, project: names.get(cockpit.projectId) ?? "Projekt", text }));
      });
      setDailyHints(hints.slice(0, 6));
    }, 0);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100">
      <div className="grid min-h-screen md:grid-cols-[88px_minmax(0,1fr)_280px] xl:grid-cols-[240px_minmax(0,1fr)_320px]">
        <aside className="border-b border-white/[0.08] bg-[#090e19]/95 md:border-r md:border-b-0">
          <div className="flex h-full items-center justify-between px-5 py-4 md:flex-col md:items-stretch md:px-3 md:py-6 xl:px-5">
            <div className="flex items-center gap-3 md:justify-center xl:justify-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-300">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6">
                  <path d="M6 3v18M18 3v18M4 7h16M4 17h16M8 7v10M16 7v10" />
                </svg>
              </div>
              <div className="hidden xl:block">
                <p className="text-sm font-semibold tracking-[0.16em] uppercase">ScaffoldAI</p>
                <p className="text-xs text-slate-500">Inspect</p>
              </div>
            </div>

            <nav aria-label="Hauptnavigation" className="flex gap-1 md:my-auto md:flex-col md:gap-2">
              {navigation.map((item) => {
                const active = item.href === "/" ? pathname === "/" : Boolean(item.href && pathname.startsWith(item.href));
                const className = `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition md:justify-center xl:justify-start ${active ? "bg-cyan-400/10 text-cyan-300 ring-1 ring-inset ring-cyan-300/15" : "text-slate-500 hover:bg-white/[0.04] hover:text-slate-200"}`;
                const content = <><span aria-hidden="true" className="w-5 text-center text-lg">{item.icon}</span><span className="hidden xl:inline">{item.label}</span></>;
                return item.href ? <Link key={item.label} href={item.href} aria-current={active ? "page" : undefined} title={item.label} className={className}>{content}</Link> : <button key={item.label} type="button" title={item.label} className={className}>{content}</button>;
              })}
            </nav>

            <div className="hidden items-center gap-3 rounded-xl border border-white/[0.07] p-3 md:flex md:justify-center xl:justify-start">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-800 text-xs font-semibold">BL</div>
              <div className="hidden min-w-0 xl:block">
                <p className="truncate text-xs font-medium">Bauleitung</p>
                <p className="text-[11px] text-emerald-400">Online</p>
              </div>
            </div>
          </div>
        </aside>

        <main className="relative min-w-0 overflow-hidden">{children}</main>

        <aside className="border-t border-white/[0.08] bg-[#090e19]/95 md:border-l md:border-t-0">
          <div className="flex h-full flex-col p-5 md:p-4 xl:p-6">
            <div><p className="text-xs font-semibold tracking-[0.18em] text-cyan-300 uppercase">Heutige Hinweise</p><p className="mt-1 text-xs text-slate-500">Aus vorhandenen Projektständen</p></div>
            {dailyHints.length ? <div className="mt-6 space-y-3">{dailyHints.map((hint, index) => <Link key={`${hint.projectId}-${index}`} href={`/projects/${hint.projectId}`} className="block rounded-xl border border-white/[0.08] bg-white/[0.03] p-3 transition hover:border-cyan-300/25 hover:bg-white/[0.05]"><p className="text-[11px] font-medium text-cyan-300">{hint.project}</p><p className="mt-1 text-xs leading-5 text-slate-400">{hint.text}</p></Link>)}</div> : <div className="mt-6 rounded-xl border border-dashed border-white/10 p-4 text-center text-xs leading-5 text-slate-600">Keine aktuellen Hinweise aus den vorhandenen Projektdaten.</div>}
          </div>
        </aside>
      </div>
    </div>
  );
}

function dateKey(date: Date) { const year = date.getFullYear(); const month = String(date.getMonth() + 1).padStart(2, "0"); const day = String(date.getDate()).padStart(2, "0"); return `${year}-${month}-${day}`; }
function daysBetween(from: string, to: string) { return Math.floor((new Date(`${to}T12:00:00`).getTime() - new Date(`${from}T12:00:00`).getTime()) / 86_400_000); }
function isPending(value: string) { const normalized = value.trim().toLocaleLowerCase("de-DE"); return Boolean(normalized) && !["erledigt", "abgeschlossen", "freigegeben"].includes(normalized); }

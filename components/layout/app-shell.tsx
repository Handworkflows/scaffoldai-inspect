"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { readProjectCore, readProjects } from "@/lib/local-storage";

type NavigationIcon = "home" | "workspace" | "offer" | "preparation" | "projects" | "accounting" | "team" | "company";
type NavigationEntry = { label: string; icon: NavigationIcon; href?: string };

const navigation: Array<{ label: string; items: NavigationEntry[] }> = [
  { label: "HEUTE", items: [{ label: "Heute", icon: "home", href: "/" }] },
  { label: "PERSÖNLICH", items: [{ label: "Arbeitsplatz", icon: "workspace", href: "/workspace" }] },
  { label: "WORKFLOW", items: [{ label: "Angebote", icon: "offer", href: "/inquiries" }, { label: "Einsatzvorbereitung", icon: "preparation", href: "/preparation" }] },
  { label: "PROJEKTARBEIT", items: [{ label: "Projekte", icon: "projects", href: "/projects" }, { label: "Buchhaltung", icon: "accounting", href: "/accounting" }] },
  { label: "UNTERNEHMEN", items: [{ label: "Team", icon: "team", href: "/team" }, { label: "Unternehmen", icon: "company", href: "/company" }] },
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

  return <div className="min-h-screen bg-[#070b14] text-slate-100 md:h-screen md:overflow-hidden"><div className="grid min-h-screen md:h-screen md:grid-cols-[240px_minmax(0,1fr)_248px] xl:grid-cols-[248px_minmax(0,1fr)_272px]">
    <aside className="border-b border-white/[0.08] bg-[#090e19]/95 md:h-screen md:border-r md:border-b-0"><div className="flex h-full flex-col items-stretch gap-4 px-5 py-4 md:gap-0 md:px-3 md:py-6 xl:px-5">
      <div className="flex items-center gap-3"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-300"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6"><path d="M6 3v18M18 3v18M4 7h16M4 17h16M8 7v10M16 7v10" /></svg></div><div><p className="text-sm font-semibold tracking-[0.16em] uppercase">ScaffoldAI</p><p className="text-xs text-slate-500">Inspect</p></div></div>
      <nav aria-label="Hauptnavigation" className="grid min-w-0 grid-cols-4 gap-2 md:mt-5 md:block md:flex-1">{navigation.map((section) => <div key={section.label} className="contents md:block md:border-t md:border-white/[0.055] md:pt-3"><p className="hidden px-3 pb-1.5 text-[10px] font-semibold tracking-[0.18em] text-slate-600 md:block">{section.label}</p><div className="contents md:block md:space-y-1">{section.items.map((item) => <NavigationItem key={item.label} item={item} pathname={pathname} />)}</div></div>)}</nav>
      <div className="hidden items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-3 md:flex"><div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-800 text-xs font-semibold">BL</div><div className="min-w-0"><p className="truncate text-xs font-medium">Bauleitung</p><p className="text-[11px] text-emerald-400">Online</p></div></div>
    </div></aside>
    <main className="relative min-w-0 overflow-hidden md:h-screen md:overflow-y-auto">{children}</main>
    <aside className="border-t border-white/[0.08] bg-[#090e19]/80 md:h-screen md:overflow-y-auto md:border-l md:border-t-0"><div className="flex h-full flex-col p-5 md:px-4 md:py-6"><div><p className="text-[11px] font-semibold tracking-[0.18em] text-cyan-300 uppercase">Aktuelle Hinweise</p><p className="mt-1 text-[11px] text-slate-600">Relevante Änderungen im Verlauf</p></div>{dailyHints.length ? <div className="relative mt-6 space-y-1 before:absolute before:bottom-2 before:left-[5px] before:top-2 before:w-px before:bg-white/[0.08]">{dailyHints.map((hint, index) => <Link key={`${hint.projectId}-${index}`} href={`/projects/${hint.projectId}`} className="group relative block py-2 pl-5"><span className="absolute left-0 top-4 h-[11px] w-[11px] rounded-full border-2 border-[#090e19] bg-slate-600 transition group-hover:bg-cyan-300" /><p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-500 group-hover:text-cyan-300">{hint.project}</p><p className="mt-1 text-xs leading-5 text-slate-400">{hint.text}</p></Link>)}</div> : <div className="mt-6 rounded-xl border border-dashed border-white/10 p-4 text-center text-xs leading-5 text-slate-600">Keine aktuellen Hinweise.</div>}</div></aside>
  </div></div>;
}

function NavigationItem({ item, pathname }: { item: NavigationEntry; pathname: string }) { const active = item.href === "/" ? pathname === "/" : Boolean(item.href && pathname.startsWith(item.href)); const className = `flex shrink-0 items-center justify-center gap-3 rounded-xl px-3 py-2.5 text-sm transition md:justify-start ${active ? "bg-cyan-400/10 text-cyan-300 ring-1 ring-inset ring-cyan-300/15" : "text-slate-500 hover:bg-white/[0.04] hover:text-slate-200"}`; const content = <><NavigationIcon name={item.icon} /><span className="hidden md:inline">{item.label}</span></>; return item.href ? <Link href={item.href} aria-current={active ? "page" : undefined} title={item.label} className={className}>{content}</Link> : <button type="button" title={item.label} className={className}>{content}</button>; }

function NavigationIcon({ name }: { name: NavigationIcon }) {
  const paths: Record<NavigationIcon, ReactNode> = {
    home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10M9 20v-6h6v6" /></>,
    workspace: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h7l2 2 2-2h7" /></>,
    offer: <><path d="M6 2h9l4 4v16H6z" /><path d="M14 2v5h5M9 12h6M9 16h6" /></>,
    preparation: <><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 3V2h6v1M8 9l2 2 4-4M8 16h8" /></>,
    projects: <><path d="M3 7h7l2 2h9v11H3z" /><path d="M3 7V4h7l2 3" /></>,
    accounting: <><path d="M6 2h12v20l-2-1-2 1-2-1-2 1-2-1-2 1z" /><path d="M9 7h6M9 11h6M9 15h3" /></>,
    team: <><circle cx="9" cy="8" r="3" /><path d="M3 20c0-4 2-6 6-6s6 2 6 6" /><path d="M16 5a3 3 0 0 1 0 6M17 14c2.7.4 4 2.4 4 6" /></>,
    company: <><path d="M4 21V5l8-3 8 3v16M2 21h20" /><path d="M8 8h1M8 12h1M8 16h1M15 8h1M15 12h1M15 16h1" /></>,
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px] shrink-0">{paths[name]}</svg>;
}
function dateKey(date: Date) { const year = date.getFullYear(); const month = String(date.getMonth() + 1).padStart(2, "0"); const day = String(date.getDate()).padStart(2, "0"); return `${year}-${month}-${day}`; }
function daysBetween(from: string, to: string) { return Math.floor((new Date(`${to}T12:00:00`).getTime() - new Date(`${from}T12:00:00`).getTime()) / 86_400_000); }
function isPending(value: string) { const normalized = value.trim().toLocaleLowerCase("de-DE"); return Boolean(normalized) && !["erledigt", "abgeschlossen", "freigegeben"].includes(normalized); }

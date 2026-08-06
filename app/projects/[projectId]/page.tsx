"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { readProjectCockpit, readProjectCore, readProjects, readSiteVisits, writeProjectCockpit, writeSiteVisits } from "@/lib/local-storage";
import type { Project } from "@/types/project";
import { emptyProjectCockpit, type ProjectCockpitData } from "@/types/project-cockpit";
import type { ProjectDocument } from "@/types/document";
import type { ProjectPhoto } from "@/types/photo";
import { siteVisitTypes, type SiteVisit, type SiteVisitType } from "@/types/site-visit";

export default function ProjectPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<Project | null>();
  const [visits, setVisits] = useState<SiteVisit[]>([]);
  const [photos, setPhotos] = useState<ProjectPhoto[]>([]);
  const [documents, setDocuments] = useState<ProjectDocument[]>([]);
  const [hasMeasurements, setHasMeasurements] = useState(false);
  const [cockpit, setCockpit] = useState<ProjectCockpitData>(() => emptyProjectCockpit(projectId));
  const [selectorOpen, setSelectorOpen] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const store = readProjectCore();
      setProject(readProjects().find((item) => item.id === projectId) ?? null);
      setVisits(readSiteVisits().filter((visit) => visit.projectId === projectId));
      setPhotos(store.photos.filter((photo) => photo.projectId === projectId).sort((a, b) => b.timestamp.localeCompare(a.timestamp)));
      setDocuments(store.documents.filter((document) => document.projectId === projectId));
      setHasMeasurements(store.measurements.some((measurement) => measurement.projectId === projectId));
      setCockpit(readProjectCockpit(projectId));
    }, 0);
    return () => window.clearTimeout(timer);
  }, [projectId]);

  const sortedVisits = useMemo(() => [...visits].sort((a, b) => b.date.localeCompare(a.date)), [visits]);
  const lastVisit = sortedVisits[0];
  const checkpoints = project ? [
    { label: "Fotos vorhanden", complete: photos.length > 0 },
    { label: "Maße vorhanden", complete: hasMeasurements },
    { label: "Ansprechpartner vorhanden", complete: Boolean(project.contactName) },
    { label: "Unterlagen vorhanden", complete: documents.length > 0 },
    { label: "Montageanweisung vorhanden", complete: documents.some((item) => item.type === "Montageanweisung") },
    { label: "Gefährdungsbeurteilung vorhanden", complete: documents.some((item) => item.type === "Gefährdungsbeurteilung") },
  ] : [];

  function updateSection<S extends "operational" | "nextDeployment" | "technical" | "commercial", K extends keyof ProjectCockpitData[S]>(section: S, key: K, value: ProjectCockpitData[S][K]) {
    setCockpit((current) => ({ ...current, [section]: { ...current[section], [key]: value } }));
    setSaved(false);
  }

  function saveCockpit() {
    const next = { ...cockpit, updatedAt: new Date().toISOString() };
    writeProjectCockpit(next);
    setCockpit(next);
    setSaved(true);
  }

  function createVisit(type: SiteVisitType) {
    const visit: SiteVisit = { id: window.crypto.randomUUID(), projectId, date: new Date().toISOString(), type, status: "Neu" };
    writeSiteVisits([visit, ...readSiteVisits()]);
    setVisits((current) => [visit, ...current]);
    setSelectorOpen(false);
  }

  if (project === undefined) return <PageState text="Projekt wird geladen …" />;
  if (project === null) return <PageState text="Projekt nicht gefunden." />;

  const address = [project.address, [project.postalCode, project.city].filter(Boolean).join(" ")].filter(Boolean).join(", ");

  return (
    <AppShell>
      <div className="relative min-h-full overflow-hidden text-white">
        <Glow />
        <div className="relative mx-auto min-h-screen w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-10">
          <Link href="/" className="text-sm text-slate-500 transition hover:text-cyan-300">← Zurück zu Heute</Link>

          <header className="mt-5 rounded-3xl border border-white/10 bg-white/[0.035] p-5 shadow-xl shadow-black/10 sm:p-8">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
              <div className="min-w-0">
                <p className="text-sm font-medium text-cyan-300">{address || "Baustellenadresse noch nicht hinterlegt"}</p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{project.name}</h1>
                <div className="mt-4 flex flex-wrap gap-2"><Badge>{project.status}</Badge><Badge muted>{project.type}</Badge>{project.services.map((service) => <Badge key={service} muted>{service}</Badge>)}{project.services.length === 0 && <span className="text-xs text-slate-600">Keine Leistungen hinterlegt</span>}</div>
              </div>
              <div className="grid shrink-0 gap-2 text-sm sm:grid-cols-2 lg:w-[28rem]">
                <Contact label="Kunde" value={project.customer} />
                <Contact label="Ansprechpartner" value={project.contactName} />
                <Contact label="Telefon" value={project.contactPhone} href={project.contactPhone ? `tel:${project.contactPhone}` : undefined} />
                <Contact label="E-Mail" value={project.contactEmail} href={project.contactEmail ? `mailto:${project.contactEmail}` : undefined} />
              </div>
            </div>
          </header>

          <section className="py-8" aria-labelledby="current-heading">
            <SectionTitle eyebrow="Cockpit" title="Aktueller Baustellenstand" id="current-heading" />
            <div className="mt-5 grid gap-4 lg:grid-cols-3">
              <Card title="Status und Aktivität"><DataRow label="Projektstatus" value={project.status} /><DataRow label="Letzter Besuch" value={lastVisit ? `${lastVisit.type} · ${formatDate(lastVisit.date)}` : undefined} /><DataRow label="Nächster Einsatz" value={cockpit.nextDeployment.plannedDate ? `${cockpit.nextDeployment.type || "Einsatz"} · ${formatDay(cockpit.nextDeployment.plannedDate)}` : undefined} /></Card>
              <Card title="Offene Arbeiten"><EditableArea value={cockpit.operational.openWork} placeholder="Noch keine offenen Arbeiten erfasst." onChange={(value) => updateSection("operational", "openWork", value)} /></Card>
              <Card title="Offene Fragen"><EditableArea value={cockpit.operational.openQuestions} placeholder="Keine offenen Fragen erfasst." onChange={(value) => updateSection("operational", "openQuestions", value)} /></Card>
            </div>
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"><h3 className="text-sm font-semibold text-slate-200">Letzte Fotos</h3>{photos.length ? <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">{photos.slice(0, 3).map((photo) => <Image key={photo.id} src={photo.dataUrl} alt={photo.description || photo.fileName} width={420} height={280} unoptimized className="aspect-[3/2] w-full rounded-xl object-cover" />)}</div> : <Empty text="Noch keine Baustellenfotos vorhanden." />}</div>
          </section>

          <section className="border-t border-white/[0.08] py-8" aria-labelledby="deployment-heading">
            <SectionTitle eyebrow="Vorbereitung" title="Nächster Einsatz" id="deployment-heading" />
            <div className="mt-5 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
              <Card title="Einsatzdaten"><div className="grid gap-4 sm:grid-cols-2"><Field label="Einsatzart" value={cockpit.nextDeployment.type} onChange={(value) => updateSection("nextDeployment", "type", value)} placeholder="z. B. Montage" /><Field label="Geplantes Datum" type="date" value={cockpit.nextDeployment.plannedDate} onChange={(value) => updateSection("nextDeployment", "plannedDate", value)} /><Field label="Geplante Arbeiten" multiline className="sm:col-span-2" value={cockpit.nextDeployment.plannedWork} onChange={(value) => updateSection("nextDeployment", "plannedWork", value)} placeholder="Arbeiten für den nächsten Einsatz beschreiben" /><div className="sm:col-span-2 rounded-xl border border-dashed border-white/10 px-4 py-3"><p className="text-xs text-slate-500">Verantwortliche Kolonne</p><p className="mt-1 text-sm text-slate-600">Noch nicht disponiert · spätere Vorbereitung</p></div></div></Card>
              <Card title="Informationsstand"><ul className="space-y-2">{checkpoints.map((item) => <li key={item.label} className="flex items-center justify-between gap-3 rounded-xl bg-white/[0.025] px-3 py-2.5 text-sm"><span className="text-slate-300">{item.label}</span><span className={item.complete ? "text-emerald-300" : "text-amber-300"}>{item.complete ? "Vorhanden" : "Fehlt"}</span></li>)}</ul><div className="mt-4 grid grid-cols-2 gap-3"><SummaryCount label="Vorhanden" count={checkpoints.filter((item) => item.complete).length} good /><SummaryCount label="Fehlend" count={checkpoints.filter((item) => !item.complete).length} /></div></Card>
            </div>
          </section>

          <section className="border-t border-white/[0.08] py-8" aria-labelledby="technical-heading">
            <SectionTitle eyebrow="Fachdaten" title="Technische Projektdaten" id="technical-heading" />
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6"><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"><Field label="Gerüstsystem" value={cockpit.technical.scaffoldSystem} onChange={(value) => updateSection("technical", "scaffoldSystem", value)} /><Field label="Systembreite" value={cockpit.technical.systemWidth} onChange={(value) => updateSection("technical", "systemWidth", value)} placeholder="z. B. 0,73 m" /><Field label="Gerüstlängen" value={cockpit.technical.scaffoldLengths} onChange={(value) => updateSection("technical", "scaffoldLengths", value)} /><Field label="Gerüsthöhen" value={cockpit.technical.scaffoldHeights} onChange={(value) => updateSection("technical", "scaffoldHeights", value)} /><Field label="Gerüstflächen" value={cockpit.technical.scaffoldAreas} onChange={(value) => updateSection("technical", "scaffoldAreas", value)} /><Field label="Aufmaßstatus" value={cockpit.technical.measurementStatus} onChange={(value) => updateSection("technical", "measurementStatus", value)} /><Field label="Geplantes Aufmaß" type="date" value={cockpit.technical.plannedMeasurement} onChange={(value) => updateSection("technical", "plannedMeasurement", value)} /><Field label="Geplanter Aufbau" type="date" value={cockpit.technical.plannedAssembly} onChange={(value) => updateSection("technical", "plannedAssembly", value)} /><Field label="Geplanter Umbau" type="date" value={cockpit.technical.plannedConversion} onChange={(value) => updateSection("technical", "plannedConversion", value)} /><Field label="Geplanter Abbau" type="date" value={cockpit.technical.plannedDismantling} onChange={(value) => updateSection("technical", "plannedDismantling", value)} /><div className="sm:col-span-2 lg:col-span-2"><p className="mb-2 text-sm font-medium text-slate-300">Bestellte Leistungen</p><div className="min-h-12 rounded-xl border border-white/10 bg-[#070b14] px-4 py-3 text-sm text-slate-400">{project.services.join(", ") || "Noch keine Leistungen hinterlegt."}</div></div></div></div>
          </section>

          <section className="border-t border-white/[0.08] py-8" aria-labelledby="commercial-heading">
            <SectionTitle eyebrow="Kaufmännisch" title="Kaufmännischer Überblick" id="commercial-heading" />
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6"><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"><Field label="Angebotsstatus" value={cockpit.commercial.offerStatus} onChange={(value) => updateSection("commercial", "offerStatus", value)} /><Field label="Abschlagsrechnungsstatus" value={cockpit.commercial.progressInvoiceStatus} onChange={(value) => updateSection("commercial", "progressInvoiceStatus", value)} /><Field label="Letzte Abschlagsrechnung" type="date" value={cockpit.commercial.lastProgressInvoiceDate} onChange={(value) => updateSection("commercial", "lastProgressInvoiceDate", value)} /><Field label="Schlussrechnungsstatus" value={cockpit.commercial.finalInvoiceStatus} onChange={(value) => updateSection("commercial", "finalInvoiceStatus", value)} /><Field label="Offene Nachträge" value={cockpit.commercial.openChanges} onChange={(value) => updateSection("commercial", "openChanges", value)} /><Field label="Abrechenbare Mietmengen" value={cockpit.commercial.billableRentalQuantities} onChange={(value) => updateSection("commercial", "billableRentalQuantities", value)} /><Field label="Beginn der Mietzeit" type="date" value={cockpit.commercial.rentalStart} onChange={(value) => updateSection("commercial", "rentalStart", value)} /><Field label="Abmeldedatum" type="date" value={cockpit.commercial.deregistrationDate} onChange={(value) => updateSection("commercial", "deregistrationDate", value)} /><Field label="Geplanter Abbau" type="date" value={cockpit.technical.plannedDismantling} onChange={(value) => updateSection("technical", "plannedDismantling", value)} /></div></div>
          </section>

          <div className="sticky bottom-4 z-20 ml-auto flex w-fit items-center gap-3 rounded-2xl border border-white/10 bg-[#0b111e]/95 p-2 shadow-2xl backdrop-blur"><span aria-live="polite" className="pl-2 text-xs text-emerald-300">{saved ? "Änderungen gespeichert" : ""}</span><button type="button" onClick={saveCockpit} className="min-h-11 rounded-xl bg-cyan-300 px-5 text-sm font-semibold text-slate-950 hover:bg-cyan-200">Projektdaten speichern</button></div>

          <section className="border-t border-white/[0.08] py-8" aria-labelledby="visits-heading">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center"><SectionTitle eyebrow="Dokumentation" title="Baustellenbesuche" id="visits-heading" /><button onClick={() => setSelectorOpen(true)} className="min-h-12 rounded-xl bg-cyan-300 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">+ Neuer Baustellenbesuch</button></div>
            {sortedVisits.length === 0 ? <div className="mt-6 rounded-2xl border border-dashed border-white/15 bg-white/[0.025] px-6 py-14 text-center text-sm text-slate-500">Noch keine Baustellenbesuche.</div> : <div className="mt-6 grid gap-3">{sortedVisits.map((visit) => <Link key={visit.id} href={`/projects/${projectId}/visits/${visit.id}`} className="group flex min-h-20 items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-300/30 hover:bg-white/[0.06]"><div><p className="font-semibold text-slate-100 transition group-hover:text-cyan-100">{visit.type}</p><p className="mt-1 text-sm text-slate-500">{formatDate(visit.date)}</p></div><div className="flex items-center gap-4"><span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">{visit.status}</span><span className="text-slate-600 group-hover:text-cyan-300" aria-hidden="true">→</span></div></Link>)}</div>}
          </section>
        </div>

        {selectorOpen && <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#03050a]/85 p-4 backdrop-blur-md" role="dialog" aria-modal="true" aria-labelledby="visit-selector-title" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectorOpen(false); }}><div className="w-full max-w-xl rounded-3xl border border-white/10 bg-[#0b111e] p-6 shadow-2xl sm:p-8"><div className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Neuer Termin</p><h2 id="visit-selector-title" className="mt-1 text-2xl font-semibold">Besuchsart auswählen</h2></div><button onClick={() => setSelectorOpen(false)} aria-label="Auswahl schließen" className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-xl text-slate-400 hover:bg-white/5 hover:text-white">×</button></div><div className="mt-6 grid gap-3 sm:grid-cols-2">{siteVisitTypes.map((type) => <button key={type} onClick={() => createVisit(type)} className="min-h-14 rounded-xl border border-white/10 bg-white/[0.025] p-4 text-left text-sm font-medium text-slate-300 transition hover:border-cyan-300/40 hover:bg-cyan-400/[0.07] hover:text-cyan-200">{type}</button>)}</div></div></div>}
      </div>
    </AppShell>
  );
}

function SectionTitle({ eyebrow, title, id }: { eyebrow: string; title: string; id: string }) { return <div><p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">{eyebrow}</p><h2 id={id} className="mt-1 text-2xl font-semibold">{title}</h2></div>; }
function Card({ title, children }: { title: string; children: React.ReactNode }) { return <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"><h3 className="text-sm font-semibold text-slate-200">{title}</h3><div className="mt-4 space-y-3">{children}</div></div>; }
function Badge({ children, muted = false }: { children: React.ReactNode; muted?: boolean }) { return <span className={`rounded-lg border px-3 py-1.5 text-xs ${muted ? "border-white/[0.08] bg-white/[0.04] text-slate-300" : "border-emerald-300/10 bg-emerald-400/10 text-emerald-300"}`}>{children}</span>; }
function Contact({ label, value, href }: { label: string; value?: string; href?: string }) { return <div className="rounded-xl bg-black/10 px-3 py-2"><p className="text-[11px] text-slate-600">{label}</p>{value ? href ? <a href={href} className="mt-0.5 block break-all text-sm text-cyan-300 hover:text-cyan-200">{value}</a> : <p className="mt-0.5 text-sm text-slate-300">{value}</p> : <p className="mt-0.5 text-xs text-slate-600">Noch nicht hinterlegt</p>}</div>; }
function DataRow({ label, value }: { label: string; value?: string }) { return <div><p className="text-xs text-slate-600">{label}</p><p className="mt-1 text-sm text-slate-300">{value || "Noch keine Daten vorhanden."}</p></div>; }
function Empty({ text }: { text: string }) { return <p className="mt-4 rounded-xl border border-dashed border-white/10 px-4 py-6 text-center text-sm text-slate-600">{text}</p>; }
function EditableArea({ value, placeholder, onChange }: { value: string; placeholder: string; onChange: (value: string) => void }) { return <textarea value={value} onChange={(event) => onChange(event.target.value)} rows={4} placeholder={placeholder} className="w-full resize-y rounded-xl border border-white/10 bg-[#070b14] px-3 py-2.5 text-sm text-slate-200 outline-none placeholder:text-slate-600 focus:border-cyan-300/50" />; }
function Field({ label, value, onChange, type = "text", placeholder, multiline = false, className = "" }: { label: string; value: string; onChange: (value: string) => void; type?: string; placeholder?: string; multiline?: boolean; className?: string }) { const classes = "min-h-12 w-full rounded-xl border border-white/10 bg-[#070b14] px-3 py-2.5 text-sm text-slate-200 outline-none placeholder:text-slate-700 focus:border-cyan-300/50"; return <label className={className}><span className="mb-2 block text-sm font-medium text-slate-300">{label}</span>{multiline ? <textarea rows={3} value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} className={`${classes} resize-y`} /> : <input type={type} value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} className={classes} />}</label>; }
function SummaryCount({ label, count, good = false }: { label: string; count: number; good?: boolean }) { return <div className={`rounded-xl border p-3 ${good ? "border-emerald-300/10 bg-emerald-400/[0.04]" : "border-amber-300/10 bg-amber-400/[0.04]"}`}><p className="text-xs text-slate-500">{label}</p><p className={`mt-1 text-xl font-semibold ${good ? "text-emerald-300" : "text-amber-300"}`}>{count}</p></div>; }
function formatDate(date: string) { return new Intl.DateTimeFormat("de-DE", { dateStyle: "medium", timeStyle: "short" }).format(new Date(date)); }
function formatDay(date: string) { return new Intl.DateTimeFormat("de-DE", { dateStyle: "medium" }).format(new Date(`${date}T12:00:00`)); }
function Glow() { return <div className="pointer-events-none absolute inset-0"><div className="absolute left-[-12rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-3xl" /><div className="absolute bottom-[-14rem] right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-violet-600/10 blur-3xl" /></div>; }
function PageState({ text }: { text: string }) { return <AppShell><div className="flex min-h-screen items-center justify-center px-6 text-sm text-slate-500">{text}</div></AppShell>; }

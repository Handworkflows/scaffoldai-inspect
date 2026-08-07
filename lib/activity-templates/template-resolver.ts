import { contextOverlayRegistry, getTypeTemplate, serviceOverlayRegistry, templateRegistry } from "@/lib/activity-templates/registry";
import { resolveBlockers } from "@/lib/activity-templates/blocker-resolver";
import { resolveOverlays } from "@/lib/activity-templates/overlay-resolver";
import type { ActivityTemplateFragment, ContextOverlay, ResolvedActivityTemplate, ResolveTemplateInput, ServiceOverlay } from "@/lib/activity-templates/types";
import { detailString } from "@/lib/activity-templates/types";

const serviceNames = new Set(Object.keys(serviceOverlayRegistry) as ServiceOverlay[]);
const contextNames = new Set(Object.keys(contextOverlayRegistry) as ContextOverlay[]);

export function resolveActivityTemplate(input: ResolveTemplateInput): ResolvedActivityTemplate {
  const fragments: ActivityTemplateFragment[] = [templateRegistry.base, getTypeTemplate(input.type)];
  for (const service of input.services || []) if (serviceNames.has(service as ServiceOverlay)) fragments.push(serviceOverlayRegistry[service as ServiceOverlay]);
  for (const context of input.contexts || []) if (contextNames.has(context)) fragments.push(contextOverlayRegistry[context]);
  if (input.companyOverlay) fragments.push(input.companyOverlay);
  const merged = resolveOverlays(fragments);
  const blockers = resolveBlockers(input, merged.blockerRules, merged.checklist, merged.documents);
  const followUps = merged.followUps.filter((item) => (!item.trigger.status || item.trigger.status === input.activity?.status) && (!item.trigger.detailKey || Boolean(detailString(input.activity?.details?.[item.trigger.detailKey]))));
  const checked = new Set(input.activity?.checklist?.filter((item) => item.checked).map((item) => item.id) || []);
  const complete = merged.checklist.filter((item) => checked.has(item.id)).length;
  const sections = [...new Set(merged.fields.map((item) => item.section))].map((title, index) => ({ id: `section:${index}:${title}`, title, fields: merged.fields.filter((item) => item.section === title) }));
  return { id: fragments.map((item) => item.id).join("+"), label: getTypeTemplate(input.type).label, type: input.type, fragments: fragments.map(({ id, label }) => ({ id, label })), sections, checklist: merged.checklist, documents: merged.documents, followUps, context: merged.context, blockers, progress: { complete, total: merged.checklist.length, percent: merged.checklist.length ? Math.round(complete / merged.checklist.length * 100) : 0 }, canRelease: blockers.length === 0 };
}

export function inferContextOverlays(details: Record<string, unknown> | undefined): ContextOverlay[] { const result: ContextOverlay[] = []; const yes = (key: string) => details?.[key] === true || String(details?.[key] || "").toLocaleLowerCase("de-DE") === "ja"; if (yes("publicSpace") || yes("specialUse")) result.push("öffentlicher Raum"); if (yes("privateProperty")) result.push("Privatgrundstück"); if (yes("crane") || yes("craneRequired")) result.push("Kran erforderlich"); if (yes("structuralAnalysisRequired") || yes("staticsRequired")) result.push("Statik erforderlich"); if (yes("nightWork")) result.push("Nachtarbeit"); if (yes("weekendWork")) result.push("Wochenendarbeit"); return result; }

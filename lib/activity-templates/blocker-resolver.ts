import { detailString, type BlockerRule, type ResolvedBlocker, type ResolveTemplateInput, type TemplateChecklistItem, type TemplateDocumentRequirement } from "@/lib/activity-templates/types";
import type { ActivityStatus } from "@/types/activity";

function hasDocument(input: ResolveTemplateInput, type: TemplateDocumentRequirement["documentType"]) { const needle = type.toLocaleLowerCase("de-DE"); return Boolean(input.documents?.some((document) => `${document.type || ""} ${document.title || ""}`.toLocaleLowerCase("de-DE").includes(needle))); }
function ruleBlocks(rule: BlockerRule, input: ResolveTemplateInput) { const details = input.activity?.details || {}; if (rule.kind === "missing-detail") return !detailString(details[rule.detailKey]); if (rule.kind === "negative-detail") { const value = detailString(details[rule.detailKey]).toLocaleLowerCase("de-DE"); return rule.negativeValues.some((negative) => value === negative || Boolean(negative && value.includes(negative))); } if (rule.kind === "missing-document") return !hasDocument(input, rule.documentType); return !input.activity?.checklist?.find((item) => item.id === rule.checklistId)?.checked; }

export function resolveBlockers(input: ResolveTemplateInput, rules: Array<BlockerRule & { sourceFragmentId: string }>, checklist: TemplateChecklistItem[], documents: TemplateDocumentRequirement[]): ResolvedBlocker[] {
  const blockers = rules.filter((rule) => ruleBlocks(rule, input)).map((rule) => ({ id: rule.id, label: rule.label, sourceFragmentId: rule.sourceFragmentId }));
  for (const item of checklist.filter((entry) => entry.blocker)) if (!input.activity?.checklist?.find((entry) => entry.id === item.id)?.checked) blockers.push({ id: `checklist:${item.id}`, label: `${item.label} ist offen`, sourceFragmentId: "checklist" });
  const explicitlyCheckedDocuments = new Set(rules.filter((rule) => rule.kind === "missing-document").map((rule) => rule.kind === "missing-document" ? rule.documentType : ""));
  for (const item of documents.filter((entry) => entry.blocker && !explicitlyCheckedDocuments.has(entry.documentType))) if (!hasDocument(input, item.documentType)) blockers.push({ id: `document:${item.id}`, label: `${item.label} fehlt`, sourceFragmentId: "documents" });
  return [...new Map(blockers.map((blocker) => [blocker.id, blocker])).values()];
}

export function isTemplateTransitionAllowed(status: ActivityStatus, blockerCount: number) { return !["vorbereitet", "abgeschlossen"].includes(status) || blockerCount === 0; }

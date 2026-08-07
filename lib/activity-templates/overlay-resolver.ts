import type { ActivityTemplateFragment, BlockerRule, ContextInformation, FollowUpSuggestion, TemplateChecklistItem, TemplateDocumentRequirement, TemplateField } from "@/lib/activity-templates/types";

const requirementRank = { optional: 0, conditional: 1, required: 2 } as const;
function mergeRequirement<T extends { id: string; requirement: keyof typeof requirementRank; blocker?: boolean }>(current: T, incoming: T): T { return { ...current, ...incoming, requirement: requirementRank[incoming.requirement] > requirementRank[current.requirement] ? incoming.requirement : current.requirement, blocker: Boolean(current.blocker || incoming.blocker) }; }
function mergeById<T extends { id: string }>(items: T[], merge?: (current: T, incoming: T) => T) { const result = new Map<string, T>(); for (const item of items) { const current = result.get(item.id); result.set(item.id, current && merge ? merge(current, item) : current ?? item); } return [...result.values()]; }

export interface MergedTemplateFragments { fields: TemplateField[]; checklist: TemplateChecklistItem[]; documents: TemplateDocumentRequirement[]; followUps: FollowUpSuggestion[]; context: ContextInformation[]; blockerRules: Array<BlockerRule & { sourceFragmentId: string }>; }

export function resolveOverlays(fragments: ActivityTemplateFragment[]): MergedTemplateFragments {
  return {
    fields: mergeById(fragments.flatMap((fragment) => fragment.fields || [])),
    checklist: mergeById(fragments.flatMap((fragment) => fragment.checklist || []), mergeRequirement),
    documents: mergeById(fragments.flatMap((fragment) => fragment.documents || []), mergeRequirement),
    followUps: mergeById(fragments.flatMap((fragment) => fragment.followUps || [])),
    context: mergeById(fragments.flatMap((fragment) => fragment.context || [])),
    blockerRules: mergeById(fragments.flatMap((fragment) => (fragment.blockerRules || []).map((rule) => ({ ...rule, sourceFragmentId: fragment.id })))),
  };
}

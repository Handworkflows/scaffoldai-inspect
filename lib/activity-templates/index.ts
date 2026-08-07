export { templateRegistry, serviceOverlayRegistry, contextOverlayRegistry } from "@/lib/activity-templates/registry";
export { resolveOverlays } from "@/lib/activity-templates/overlay-resolver";
export { isTemplateTransitionAllowed, resolveBlockers } from "@/lib/activity-templates/blocker-resolver";
export { inferContextOverlays, resolveActivityTemplate } from "@/lib/activity-templates/template-resolver";
export type * from "@/lib/activity-templates/types";

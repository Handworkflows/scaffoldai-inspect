export interface MaterialEntry {
  id: string;
  projectId: string;
  visitId?: string;
  name: string;
  quantity: number;
  unit: string;
  source: "Manuell" | "Erkennung" | "Lager" | "Prognose";
  timestamp: string;
}

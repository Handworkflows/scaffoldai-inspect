export interface ProjectCockpitData {
  projectId: string;
  updatedAt: string;
  operational: {
    openWork: string;
    openQuestions: string;
  };
  nextDeployment: {
    type: string;
    plannedDate: string;
    plannedWork: string;
  };
  technical: {
    scaffoldSystem: string;
    systemWidth: string;
    scaffoldLengths: string;
    scaffoldHeights: string;
    scaffoldAreas: string;
    measurementStatus: string;
    plannedMeasurement: string;
    plannedAssembly: string;
    plannedConversion: string;
    plannedDismantling: string;
  };
  commercial: {
    offerStatus: string;
    progressInvoiceStatus: string;
    lastProgressInvoiceDate: string;
    finalInvoiceStatus: string;
    openChanges: string;
    billableRentalQuantities: string;
    rentalStart: string;
    deregistrationDate: string;
  };
}

export function emptyProjectCockpit(projectId: string): ProjectCockpitData {
  return {
    projectId,
    updatedAt: "",
    operational: { openWork: "", openQuestions: "" },
    nextDeployment: { type: "", plannedDate: "", plannedWork: "" },
    technical: { scaffoldSystem: "", systemWidth: "", scaffoldLengths: "", scaffoldHeights: "", scaffoldAreas: "", measurementStatus: "", plannedMeasurement: "", plannedAssembly: "", plannedConversion: "", plannedDismantling: "" },
    commercial: { offerStatus: "", progressInvoiceStatus: "", lastProgressInvoiceDate: "", finalInvoiceStatus: "", openChanges: "", billableRentalQuantities: "", rentalStart: "", deregistrationDate: "" },
  };
}

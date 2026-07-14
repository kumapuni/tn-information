export interface DashboardStatus {

  displayOnline: boolean;

  currentMode: string;

  currentSchedule: string;

  connectedClients: number;

}

export function getDashboardStatus(): DashboardStatus {

  return {

    displayOnline: true,

    currentMode: "通常日課",

    currentSchedule: "授業中",

    connectedClients: 1,

  };

}
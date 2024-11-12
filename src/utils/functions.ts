import { caps } from "../pages/dashboard/sideBar/components/data";

export const getCurrentYear = new Date().getFullYear()


export function getCurrentMonthName(): string {
    const monthNumber = new Date().getMonth() + 1;
    switch (monthNumber) {
      case 1: return 'Enero';
      case 2: return 'Febrero';
      case 3: return 'Marzo';
      case 4: return 'Abril';
      case 5: return 'Mayo';
      case 6: return 'Junio';
      case 7: return 'Julio';
      case 8: return 'Agosto';
      case 9: return 'Septiembre';
      case 10: return 'Octubre';
      case 11: return 'Noviembre';
      case 12: return 'Diciembre';
      default: return 'Enero';
    }
  }

  export function getHealthCenterNameFromId(healthCenterId: number): string {            
    const capsName = caps.find(el => el.id === healthCenterId)?.name;
    return capsName || "";
  }
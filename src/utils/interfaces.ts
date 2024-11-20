export interface Caps {
    id: number;
    name: string
  }


  export interface Data {
    healthCenterId: number;
    year: number;
    month: string;
    data: any[]
  }

  export interface BodyGetDataFilteredYearMonthsHealthcenterId {
    year: number;
    healthCenterId: number;
    months: string[]
  }
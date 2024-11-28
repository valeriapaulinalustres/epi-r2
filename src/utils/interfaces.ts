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

 export interface User {
  id: string;
  first_name: string;
  last_name: string;
  profession: string;
  job: string;
  email: string;
  permission: string;
 }
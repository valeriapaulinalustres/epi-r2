import { createContext, ReactNode, useMemo, useState } from "react";

interface AppProviderProps {
  children: ReactNode;
}

interface MainContextType {
  healthCenter: string;
  setHealthCenter: (value: string) => void;
  months: string[];
  setMonths: React.Dispatch<React.SetStateAction<string[]>>; 
  year: number;
  setYear: (value: number) => void;
  currentYear: number;
  currentMonth: string; 
}

const MainContext = createContext<MainContextType | undefined>(undefined);

const MainContextProvider: React.FC<AppProviderProps> = ({ children }) => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  const currentMonth = useMemo(() => getCurrentMonthName(), []);

  const [healthCenter, setHealthCenter] = useState<string>('Hospital de Morón');
  const [months, setMonths] = useState<string[]>([currentMonth]); 
  const [year, setYear] = useState<number>(currentYear);

  function getCurrentMonthName(): string {
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

  const data = {
    healthCenter,
    setHealthCenter,
    months,
    setMonths,
    year,
    setYear,
    currentYear,
    currentMonth,
    getCurrentMonthName
  };

  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};

export { MainContextProvider };
export default MainContext;

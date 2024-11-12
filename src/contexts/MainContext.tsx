import { createContext, ReactNode, useMemo, useState } from "react";
import { getCurrentMonthName, getCurrentYear } from "../utils/functions";
import { Caps } from "../utils/interfaces";

interface AppProviderProps {
  children: ReactNode;
}

interface MainContextType {
  healthCenter: Caps;
  setHealthCenter: (value: Caps) => void;
  months: string[];
  setMonths: React.Dispatch<React.SetStateAction<string[]>>; 
  year: number;
  setYear: (value: number) => void;
  currentYear: number;
  currentMonth: string; 
}

const MainContext = createContext<MainContextType | undefined>(undefined);

const MainContextProvider: React.FC<AppProviderProps> = ({ children }) => {
  const currentYear = useMemo(() => getCurrentYear, []);
  const currentMonth = useMemo(() => getCurrentMonthName(), []);

  const [healthCenter, setHealthCenter] = useState<Caps>({id:1, name:'Hospital de Morón'});
  const [months, setMonths] = useState<string[]>([currentMonth]); 
  const [year, setYear] = useState<number>(currentYear);



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

import { createContext, ReactNode, useMemo, useState } from "react";
import { Data } from "../utils/interfaces";

interface AppProviderProps {
  children: ReactNode;  
}


interface DataContextType {
  data: Data | undefined;
  setData: React.Dispatch<React.SetStateAction<Data | undefined>>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const DataContextProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [data, setData] = useState<Data | undefined>(undefined);

  const value = useMemo(() => ({ data, setData }), [data]);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export { DataContextProvider };
export default DataContext;

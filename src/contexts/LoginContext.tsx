import { createContext, ReactNode, useMemo, useState } from "react";

interface AppProviderProps {
  children: ReactNode;
}

interface User {
  first_name: string;
  last_name: string;
  email: string;
  profession: string;
  job: string;
  is_admin: boolean;
}

interface LoginContextType {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

const LoginContext = createContext<LoginContextType | undefined>(undefined);

const LoginContextProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  const data = useMemo(() => ({ user, setUser }), [user]);

  return <LoginContext.Provider value={data}>{children}</LoginContext.Provider>;
};

export { LoginContextProvider };
export default LoginContext;

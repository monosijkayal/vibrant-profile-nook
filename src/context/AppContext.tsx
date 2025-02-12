
import React, { createContext } from "react";

interface User {
  name?: string;
  email?: string;
  image?: string;
}

interface AppContextType {
  user: User;
}

export const AppContext = createContext<AppContextType>({ user: {} });

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const user = {
    name: "Add name",
    email: "monosijkayal@gmail.com",
    image: undefined
  };

  return (
    <AppContext.Provider value={{ user }}>
      {children}
    </AppContext.Provider>
  );
};

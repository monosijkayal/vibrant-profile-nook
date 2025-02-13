
import React, { createContext, useState } from "react";

interface User {
  name?: string;
  email?: string;
  image?: string;
  location?: string;
  mobile?: string;
  availability?: string;
}

interface AppContextType {
  user: User;
  updateUser: (data: Partial<User>) => void;
}

export const AppContext = createContext<AppContextType>({
  user: {},
  updateUser: () => {}
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>({
    name: "Add name",
    email: "monosijkayal@gmail.com",
    image: undefined,
    location: "",
    mobile: "",
    availability: ""
  });

  const updateUser = (data: Partial<User>) => {
    setUser(prev => ({
      ...prev,
      ...data
    }));
  };

  return (
    <AppContext.Provider value={{ user, updateUser }}>
      {children}
    </AppContext.Provider>
  );
};

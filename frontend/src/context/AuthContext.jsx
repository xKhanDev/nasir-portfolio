import React, { createContext, useContext, useState } from "react";
import useAuth from "../zustand/useAuth";

export const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);
export const AuthContextProvider = ({ children }) => {
  const { user } = useAuth();
  const [authUser, setAuthUser] = useState(() => {
    const storedUser = user;
    return storedUser || null;
  });
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

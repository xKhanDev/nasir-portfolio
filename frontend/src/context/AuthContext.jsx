import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);
const AuthContextProvider = ({ children }) => {
  const [admin, setAdmin] = useState(() => {
    const storedAdmin = localStorage.getItem("admin");
    return storedAdmin ? JSON.parse(storedAdmin) : null;
  });
  return (
    <AuthContext.Provider value={{ admin, setAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

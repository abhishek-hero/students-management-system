import React, { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const handleUser = (data) => {
    setUser(data);
  };

  return (
    <AuthContext.Provider value={{ handleUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

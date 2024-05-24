import React, { createContext, useState, useContext } from "react";

const TotalContext = createContext();

export const useTotal = () => useContext(TotalContext);

export const TotalProvider = ({ children }) => {
  const [totalCommande, setTotalCommande] = useState(0);

  return (
    <TotalContext.Provider value={{ totalCommande, setTotalCommande }}>
      {children}
    </TotalContext.Provider>
  );
};

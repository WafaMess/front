import React, { createContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [isSearchActive, setIsSearchActive] = useState(true); // Par défaut, activé

  return (
    <SearchContext.Provider value={{ isSearchActive, setIsSearchActive }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;

import { createContext, useContext, useState } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [showStickySearch, setShowStickySearch] = useState(false);

  return (
    <ScrollContext.Provider value={{ showStickySearch, setShowStickySearch }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollState = () => useContext(ScrollContext);

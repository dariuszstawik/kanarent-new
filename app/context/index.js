"use client";

import { createContext, useContext, useState } from "react";

const AppContext = createContext("");

export function AppWrapper({ children }) {
  let [searchResults, setSearchResults] = useState("");
  return (
    <AppContext.Provider value={[searchResults, setSearchResults]}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

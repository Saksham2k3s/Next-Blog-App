"use client"
import React, { useState, createContext, useContext } from "react";

 const ThemeContext = createContext<any>(null);

 export function useThemeContext(){
  return useContext(ThemeContext)
}

 export function ThemeWrapper({children} : {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState('light');

  return(
    <ThemeContext.Provider value={{theme, setTheme}} >
          {children}
    </ThemeContext.Provider>
  )
}







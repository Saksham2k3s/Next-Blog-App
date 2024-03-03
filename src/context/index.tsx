"use client"
// import exp from "constants";
// import React, { useState, createContext, useContext } from "react";

//  const ThemeContext = createContext<any>(undefined);

 

//  export function ThemeWrapper({children} : {
//   children: React.ReactNode;
// }) {
//   const [theme, setTheme] = useState('light');

//   return(
//     <ThemeContext.Provider value={{theme, setTheme}} >
//           {children}
//     </ThemeContext.Provider>
//   )
// }

// export default ThemeContext

// export function useThemeContext(){
//   return useContext(ThemeContext)
// }

// ThemeContext.tsx
import React, { createContext, useContext, useState } from "react";

// Define the type for your context value
type ThemeContextType = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

// Create the context with initial value undefined
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create a custom hook to use the context
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeWrapper");
  }
  return context;
};

// ThemeWrapper component to wrap the children with the context provider
export const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;








import React, { useState, createContext } from "react";
import { useTheme } from "next-themes";
import { theme,setTheme } from "next-themes";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useTheme();
  const [mounted,setMounted]=useState(false)
  
  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

const { createContext, useState } = require("react");

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  <ThemeContext.Provider value={{ theme, toggleTheme }}>
    {children}
  </ThemeContext.Provider>;
};

export default ThemeProvider;

"use client";

import ThemeProvider from "@/utils (Context)/ThemeContext";

const Provider = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Provider;

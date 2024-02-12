"use client";

import ThemeProvider from "@/utils (Context)/ThemeContext";

const ParentWrapper = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default ParentWrapper;

"use client";

import ThemeProvider from "@/utils (Context)/ThemeContext";
import AuthProvider from "@/utils (Context)/authContext.jsx";

const Provider = ({ children }) => {
  return (
    <AuthProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </AuthProvider>
  );
};

export default Provider;

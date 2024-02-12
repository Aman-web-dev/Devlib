"use client";

import ThemeProvider from "@/utils (Context)/ThemeContext";
import AuthProvider from "@/contexts/authContext";

const Provider = ({ children }) => {



  return (
    <AuthProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </AuthProvider>

  )
};

export default Provider;

"use client";

import AuthProvider from "@/utils (Context)/authContext.jsx";
import YouTubeProvider from "@/utils (Context)/YoutubeDetails";
import { ThemeProvider } from "next-themes";
import { useTheme } from "next-themes";


const Provider = ({ children }) => {
  const {theme}=useTheme()
  return (
    <div className={theme==='dark'?"dark":""}>
    <AuthProvider>
      <ThemeProvider enableSystem defaultTheme="system" attribute="class" disableTransitionOnChange>
      <YouTubeProvider>
        {children}
      </YouTubeProvider>
      </ThemeProvider>
    </AuthProvider>
    </div>
  );
};

export default Provider;

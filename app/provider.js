"use client";

import AuthProvider from "@/utils (Context)/authContext.jsx";
import YouTubeProvider from "@/utils (Context)/YoutubeDetails";
import { ThemeProvider } from "next-themes";


const Provider = ({ children }) => {
  return (
    <AuthProvider>
      <ThemeProvider enableSystem={true} attribute="class">
      <YouTubeProvider>
        {children}
      </YouTubeProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default Provider;

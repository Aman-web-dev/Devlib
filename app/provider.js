"use client";

import ThemeProvider from "@/utils (Context)/ThemeContext";
import AuthProvider from "@/utils (Context)/authContext.jsx";
import YouTubeProvider from "@/utils (Context)/YoutubeDetails";

const Provider = ({ children }) => {
  return (
    <AuthProvider>
      <YouTubeProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </YouTubeProvider>
    </AuthProvider>
  );
};

export default Provider;

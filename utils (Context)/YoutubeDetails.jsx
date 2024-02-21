"use client";
import { createContext, useState } from "react";
//this currently contains the youtube Id (further it can contain more info as the application grows)
export const YoutubeContext = createContext();

const YouTubeProvider = ({ children }) => {
  const [youtubeId, setYoutubeId] = useState("");

  return (
    <YoutubeContext.Provider value={{ youtubeId, setYoutubeId }}>
      {children}
    </YoutubeContext.Provider>
  );
};

export default YouTubeProvider;

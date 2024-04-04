"use client";

import { useContext } from "react";
import { create } from "zustand";
import { AuthContext } from "./authContext";

async function getAllLikedVideoByUser() {
  const { currentUser } = useContext(AuthContext);
  // console.log("current user uid: ", currentUser?.uid);
  try {
    const likedVideoResponse = await fetch(
      "http://localhost:4000/api/getAllLikedVideos",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: currentUser.uid }),
      }
    );
    // console.log(likedVideoResponse);
    const response = await likedVideoResponse.json();
    return response.data.liked_videos;
  } catch (error) {
    console.log("error in getting all likes: ", error);
  }
}

const useLikeStore = create((set) => ({
  likeStore: [],
  getUserLikes: async () => {
    const response = await getAllLikedVideoByUser();
    set({ likeStore: response });
    return response;
  },
}));

export default useLikeStore;

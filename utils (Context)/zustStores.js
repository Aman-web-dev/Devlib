"use client";
import { create } from "zustand";

async function getAllLikedVideoByUser(userId) {
  try {
    const likedVideoResponse = await fetch(
      "http://localhost:4000/api/getAllLikedVideos",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: userId }),
      }
    );
    const response = await likedVideoResponse.json();
    return response.data.liked_videos;
  } catch (error) {
    console.log("error in getting all likes: ", error);
  }
}

const useLikeStore = create((set) => ({
  likeStore: [],
  getUserLikes: async (userId) => {
    const response = await getAllLikedVideoByUser(userId);
    set({ likeStore: response });
  },
  toggleVideoId: (vid_id) => {
    set((state) => {
      if (state.likeStore.includes(vid_id)) {
        return {
          likeStore: state.likeStore.filter((id) => id !== vid_id),
        };
      } else {
        return {
          likeStore: [...state.likeStore, vid_id],
        };
      }
    });
  },
}));

export default useLikeStore;

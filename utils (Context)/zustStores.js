"use client";
import { create } from "zustand";

// function to get all liked videos by user;
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
    return response?.data?.liked_videos;
  } catch (error) {
    console.log("error in getting all likes: ", error);
  }
}
const videoData = async () => {
  try {
    const videoResponse = await fetch(
      `https://dev-lib-server.vercel.app/get-yt-vid`,
      {
        method: "GET",
      }
    );
    if (videoResponse.ok) {
      const result = await videoResponse.json();
      return result;
    } else {
      return {
        error: "Unable to fulfill your request. Please try again later.",
      };
    }
  } catch (error) {
    console.log("error during fetching data: ", error);
  }
};

// console.log(videoData());

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

export const useVideoStore = create((set) => ({
  videoStore: [],
  getAllVideos: async () => {
    const response = await videoData();
    set({ videoStore: response });
  },
}));

export default useLikeStore;

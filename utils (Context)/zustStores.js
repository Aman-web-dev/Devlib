"use client";
import { create } from "zustand";

// function to get all liked videos by user;
async function getAllLikedVideoByUser(userId) {
  try {
    if (!userId) {
      return [];
    } else if (userId) {
      const likedVideoResponse = await fetch(
        `http://localhost:4000/api/getAllLikedVideos`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId: userId }),
        }
      );
      const response = await likedVideoResponse.json();
      // console.log("all likes response: ", response);
      return response?.data?.liked_videos;
    }
  } catch (error) {
    console.log("error in getting all likes: ", error);
  }
}
// https://dev-lib-server.vercel.app
const videoData = async () => {
  try {
    const videoResponse = await fetch(`http://localhost:4000/get-yt-vid`, {
      method: "GET",
    });
    if (videoResponse.ok) {
      const result = await videoResponse.json();
      // console.log("all videos: ", result);
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

// get all saved videos of a user
async function getAllSavedVideosData(userId) {
  try {
    if (!userId) {
      return [];
    } else {
      const savedVideosResponse = await fetch(
        "http://localhost:4000/api/getAllSavedVideos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId: userId }),
        }
      );
      const response = await savedVideosResponse.json();
      // console.log("response: ", response);
      return response?.data;
    }
  } catch (error) {
    console.error("error while fetching saved videos: ", error);
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

export const useVideoStore = create((set) => ({
  videoStore: [],
  getAllVideos: async () => {
    const response = await videoData();
    set({ videoStore: response });
  },
}));

export const useSavedVideoStore = create((set) => ({
  savedVideoStore: [],
  getAllSavedVideosOfUser: async (userId) => {
    const response = await getAllSavedVideosData(userId);
    set({ savedVideoStore: response });
  },
  toggleSavedVideos: (vid_id) => {
    set((state) => {
      if (state.savedVideoStore.includes(vid_id)) {
        return {
          savedVideoStore: state.savedVideoStore.filter((id) => id !== vid_id),
        };
      } else {
        return { savedVideoStore: [...state.savedVideoStore, vid_id] };
      }
    });
  },
}));

export default useLikeStore;

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
      return !response?.data?.liked_videos ? [] : response?.data?.liked_videos;
    }
  } catch (error) {
    console.log("error in getting all likes: ", error);
  }
}
// https://dev-lib-server.vercel.app
const videoData = async () => {
  try {
    const videoResponse = await fetch(
      `http://localhost:4000/api/fetch/youtubeVideos`,
      {
        method: "GET",
      }
    );
    if (videoResponse.ok) {
      const result = await videoResponse.json();
      return !result?.data ? [] : result?.data;
    } else {
      return {
        error: "Unable to fetch videos. Please try again later.",
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
      return !response?.data ? [] : response?.data;
    }
  } catch (error) {
    console.error("error while fetching saved videos: ", error);
  }
}

// api to get total likes and dislikes
const getTotalLikesAndDislikes = async () => {
  try {
    const response = await fetch(
      "http://localhost:4000/api/fetch/videos/likesAndDislikes",
      {
        method: "GET",
      }
    );
    const result = await response.json();
    return result?.data;
  } catch (error) {
    console.error("error while fetching total likes:, error");
  }
};

// all stores
const postUserComment = async (
  currentUser,
  id,
  userComment,
  setIsCommenting,
  setUserComment
) => {
  try {
    if (!currentUser) {
      router.push("/authentication");
    } else {
      setIsCommenting(true);
      console.log("currentUser: ", currentUser);
      const commentResponse = await fetch(
        "http://localhost:4000/api/addComment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: currentUser,
            vid_id: id,
            comment: userComment,
          }),
        }
      );
      setUserComment("");
      return commentResponse;
    }
  } catch (error) {
    console.log("error while adding your comment please try again later");
    throw Error(error);
  } finally {
    setIsCommenting(false);
  }
};

const getAllComments = async (id) => {
  try {
    const response = await fetch("http://localhost:4000/api/getAllComments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ vid_id: id }),
    });
    const result = await response.json();
    return !result ? [] : result;
    // console.log("result: ", result);
  } catch (error) {
    console.error("failed to fetch all comments: ", error);
    throw new Error("Failed to fetch all comments");
  }
};

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

export const useLikeAndDislikeCount = create((set) => ({
  likeAndDislikeCount: [],
  getCount: async () => {
    const response = await getTotalLikesAndDislikes();
    set({ likeAndDislikeCount: response });
  },
  toggleLikeCount: (unique_id) => {
    set((state) => {
      // console.log("vid_id from zuststore: ", vid_id);
      const isLiked = useLikeStore.getState().likeStore.includes(unique_id);
      console.log("isLiked: ", isLiked);
      const newData = state.likeAndDislikeCount.map((data) => {
        if (data.unique_id === unique_id) {
          return {
            ...data,
            likecount: isLiked ? data.likecount - 1 : data.likecount + 1,
          };
        }
        return data;
      });
      return { likeAndDislikeCount: newData };
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

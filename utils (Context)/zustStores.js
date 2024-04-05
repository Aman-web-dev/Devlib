"use client";

import { useContext } from "react";
import { create } from "zustand";
import { AuthContext } from "./authContext";

// const { currentUser } = useContext(AuthContext);
async function getAllLikedVideoByUser(userId) {
  // const { currentUser } = useContext(AuthContext);
  // console.log("current user uid: ", currentUser?.uid);
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
    // console.log(likedVideoResponse);
    const response = await likedVideoResponse.json();
    // console.log("response zustand: ", response);
    return response.data.liked_videos;
  } catch (error) {
    console.log("error in getting all likes: ", error);
  }
}

// const useLikeStore = create((set) => ({
//   likeStore: [],
//   getUserLikes: async (userId) => {
//     const response = await getAllLikedVideoByUser(userId);
//     set({ likeStore: response });
//   },
//   addVideoId: (vid_id) => {
//     set((state) => {
//       // If vid_id is already in likeStore, remove it first
//       if (state.likeStore.includes(vid_id)) {
//         return removeVideoId(vid_id)(state);
//       }
//       // If vid_id doesn't exist, add it to the array
//       return {
//         likeStore: [...state.likeStore, vid_id],
//       };
//     });
//   },
//   removeVideoId: (vid_id) => {
//     set((state) => ({
//       likeStore: state.likeStore.filter((id) => id !== vid_id),
//     }));
//   },
// }));
const useLikeStore = create((set) => ({
  likeStore: [],
  getUserLikes: async (userId) => {
    const response = await getAllLikedVideoByUser(userId);
    set({ likeStore: response });
  },
  toggleVideoId: (vid_id) => {
    set((state) => {
      // If vid_id is already in likeStore, remove it; otherwise, add it
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

// console.log(likeStore);

export default useLikeStore;

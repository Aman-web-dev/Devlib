import { create } from "zustand";

const savedVideosStore = (set) => ({
  savedVideos: [],
  addLike: (vid_id) => {
    set((state) => {
      savedVideos: [...state.savedVideos, vid_id];
    });
  },
});

const useSavedVideosStore = create(savedVideosStore);
export default useSavedVideosStore;

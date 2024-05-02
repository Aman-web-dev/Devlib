"use client";
import { create } from "zustand";
// function to get all liked videos by user;
async function getAllLikedVideoByUser(userId) {
  try {
    if (!userId) {
      return [];
    } else if (userId) {
      const likedVideoResponse = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}api/getAllLikedVideos`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId: userId }),
        }
      );
      const response = await likedVideoResponse.json();
      return !response?.data?.liked_videos ? [] : response?.data?.liked_videos;
    }
  } catch (error) {
    console.log("error in getting all likes: ", error);
    return [];
  }
}
// get all saved videos of a user
async function getAllSavedVideosData(userId) {
  try {
    if (!userId) {
      return [];
    } else {
      const savedVideosResponse = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}api/getAllSavedVideos`,
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
    return [];
  }
}

// api to get total likes and dislikes
const getTotalLikesAndDislikes = async (page) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}api/fetch/videos/likesAndDislikes`,
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
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/addComment`,
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
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}api/getAllComments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ vid_id: id }),
      }
    );
    const result = await response.json();
    return !result ? [] : result;
    // console.log("result: ", result);
  } catch (error) {
    console.error("failed to fetch all comments: ", error);
    throw new Error("Failed to fetch all comments");
  }
};

const deleteCommentApi = async (id) => {
  try {
    const deleteCommentResponse = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}api/comment/delete`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      }
    );
  } catch (error) {
    console.log("unable to delete comment due to : ", error);
  }
};

const updateUserComment = async (id, comment) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}api/comment/update`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ comment: comment, id: id }),
      }
    );
  } catch (error) {
    console.log("error while updating comment: ", error);
  }
};

const fetchAllVideos = async (
  query,
  page,
  { setIsEmpty, setPage, setHasMore, setDataMessage },
  isPopular
) => {
  try {
    let url;
    setPage(page + 1);

    if (query !== "" && !isPopular) {
      url = `${process.env.NEXT_PUBLIC_SERVER_URL}api/fetch/youtubeVideos?page=${page}&q=${query}`;
    } else if (!query && !isPopular) {
      url = `${process.env.NEXT_PUBLIC_SERVER_URL}api/fetch/youtubeVideos?page=${page}`;
    } else if (!query && isPopular) {
      url = `${process.env.NEXT_PUBLIC_SERVER_URL}api/fetch/popularVideos?page=${page}`;
    } else if (query !== "" && isPopular) {
      url = `${process.env.NEXT_PUBLIC_SERVER_URL}api/fetch/popularVideoWithQuery?page=${page}&q=${query}`;
    }

    console.log("urls: ", url);
    const response = await fetch(url, {
      method: "GET",
    });
    const data = await response.json();
    if (data?.data.length === 0 && data?.message === 0) {
      setHasMore(false);
      setDataMessage(data?.message);
      setIsEmpty(true);
    }
    console.log("data got: ", data);
    return data?.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const useCommentStore = create((set) => ({
  commentStore: [],
  addComment: (
    userComment,
    displayName,
    photoURL,
    currentUser,
    id,
    setIsCommenting,
    setUserComment
  ) => {
    set(async (state) => {
      try {
        const response = await postUserComment(
          currentUser,
          id,
          userComment,
          setIsCommenting,
          setUserComment
        );
        set((state) => ({
          commentStore: [
            ...state.commentStore,
            {
              comment: userComment,
              name: displayName,
              profilepicture: photoURL,
              user_id: currentUser,
              vid_id: id,
            },
          ],
        }));
      } catch (error) {
        console.error("error while posting comment", error);
      }
    });
  },
  getComments: async (id) => {
    const response = await getAllComments(id);
    set({ commentStore: response });
  },
  deleteComment: async (id) => {
    const response = await deleteCommentApi(id);
    set((state) => {
      const filteredComment = state.commentStore.filter(
        (comment) => comment.id !== id
      );

      return {
        commentStore: filteredComment,
      };
    });
  },
  updateComment: async (id, newComment) => {
    const response = await updateUserComment(id, newComment);
    set((state) => {
      const newCommentStore = state.commentStore.map((comment) => {
        if (comment.id === id) {
          return { ...comment, comment: newComment };
        }
        return comment;
      });
      return { commentStore: newCommentStore };
    });
  },
}));

const useLikeStore = create((set) => ({
  likeStore: [],
  getUserLikes: async (userId) => {
    const response = await getAllLikedVideoByUser(userId);
    set({ likeStore: response });
  },
  toggleVideoId: (id) => {
    set((state) => {
      if (state.likeStore.includes(id.toString())) {
        console.log("likeStore includes the id");
        return {
          likeStore: state.likeStore.filter(
            (primary_id) => primary_id !== id.toString()
          ),
        };
      } else {
        return {
          likeStore: [...state.likeStore, id.toString()],
        };
      }
    });
  },
}));

export const useLikeAndDislikeCount = create((set) => ({
  likeAndDislikeCount: [],
  isLikes: false,
  getCount: async () => {
    const response = await getTotalLikesAndDislikes();
    set({ likeAndDislikeCount: response });
    set({ isLikes: true });
  },
  toggleLikeCount: (unique_id) => {
    // console.log(typeof unique_id);
    set((state) => {
      const isLiked = useLikeStore.getState().likeStore.includes(unique_id);
      isLiked
        ? console.log("yes id founded")
        : console.log("no id not founded");
      const newData = state.likeAndDislikeCount.map((data) => {
        if (data?.id.toString() === unique_id) {
          console.log("found");
          return {
            ...data,
            like_count: isLiked ? data.like_count - 1 : data.like_count + 1,
          };
        }
        return data;
      });
      return { likeAndDislikeCount: newData };
    });
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

export const useVideoStore = create((set) => ({
  videoStore: [],
  getVideos: async (
    query,
    page,
    { setIsEmpty, setPage, setHasMore, setDataMessage },
    isPopular
  ) => {
    const response = await fetchAllVideos(
      query,
      page,
      { setIsEmpty, setPage, setHasMore, setDataMessage },
      isPopular
    );
    useLikeAndDislikeCount.setState(() => ({ isLikes: false }));
    set((state) => {
      return { videoStore: [...state.videoStore, ...response] };
    });
  },
  emptyVideoStore: ({ setIsEmpty, setHasMore }) => {
    setIsEmpty(false);
    setHasMore(true);
    set({ videoStore: [] });
  },
}));

export const useVideoSidebar = create((set) => ({
  videoSideBar: false,
  setVideoSideBar: (value) => set({ videoSideBar: value }),
}));

export default useLikeStore;

import { useContext, useState, useEffect } from "react";
import { youtubeVideoThumbnail } from "@/utils (Context)/constants";
import { useAuth } from "@/utils (Context)/authContext";

import useLikeStore from "@/utils (Context)/zustStores";
import FeedbackComponent from "./feedbackComponent";

function YoutubeCard({ data, likedVideos }) {
  const [likesCount, setLikesCount] = useState(data.likes_count);
  const [userLikes, setUserLikes] = useState([]);

  const [savedVideos, setSavedVideos] = useState([]);
  const { currentUser } = useAuth();

  const [zustLikeStore, setZustLikeStore] = useState(null);
  const { likeStore, toggleVideoId, getUserLikes } = useLikeStore();
  const likeStoreCopy = [...likeStore];
  // useEffect(() => {
  //   const response = getUserLikes(currentUser.uid);
  // }, []);

  function removeVideoIdFromZustandStore(vid_id) {
    toggleVideoId(vid_id);
  }

  // useEffect(() => {
  //   // console.log(likeStoreCopy);
  // }, [likeStore]);

  function addVideoIdInLikeStore(vid_id) {
    toggleVideoId(vid_id);
  }

  useEffect(() => {
    // getAllLikedVideoByUser();
  }, []);

  async function handleLikeCount(e) {
    e.preventDefault();
    e.stopPropagation();
    addLike();
  }

  useEffect(() => {
    // getAllSavedVideosData();
  }, []);

  async function addLike() {
    try {
      if (!likeStoreCopy.includes(data.vid_id)) {
        setLikesCount(likesCount + 1);
        addVideoIdInLikeStore(data.vid_id);
        const incrementLikeCountPromise = fetch(
          "http://localhost:4000/api/incrementLikeCount",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ vid_id: data.vid_id }),
          }
        );
        const addUserLikePromise = fetch("http://localhost:4000/api/addLike", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: currentUser.uid,
            vid_id: data.vid_id,
          }),
        });

        const [incrementLikeCountResponse, addUserLikeResponse] =
          await Promise.all([incrementLikeCountPromise, addUserLikePromise]);
        if (!incrementLikeCountResponse.ok || !addUserLikeResponse.ok) {
          setLikesCount(likesCount - 1);
        }
        // getAllLikedVideoByUser();
        // console.log(incrementLikeCountResponse, addUserLikeResponse);
      } else {
        setLikesCount(likesCount - 1);
        removeVideoIdFromZustandStore(data.vid_id);
        const removeLikeVideoPromise = fetch(
          "http://localhost:4000/api/removeUserLikedVideo",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId: currentUser.uid,
              vid_id: data.vid_id,
            }),
          }
        );
        const decrementLikeCountPromise = fetch(
          "http://localhost:4000/api/decrementLikeCount",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ vid_id: data.vid_id }),
          }
        );

        const [removeLikeVideoResponse, decrementLikeCountResponse] =
          await Promise.all([
            removeLikeVideoPromise,
            decrementLikeCountPromise,
          ]);
        if (!removeLikeVideoResponse.ok || !decrementLikeCountResponse.ok) {
          setLikesCount(likesCount + 1);
        }
        // console.log(removeLikeVideoResponse, decrementLikeCountResponse);
        // getAllLikedVideoByUser();
      }
    } catch (error) {
      throw error;
      console.log("error while checking for likes: ", error);
    }
  }

  async function getAllLikedVideoByUser() {
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
      console.log("response", response);
      setUserLikes(response.data.liked_videos);
    } catch (error) {
      console.log("error in getting all likes: ", error);
    }
  }

  async function getAllSavedVideosData() {
    try {
      const savedVideosResponse = await fetch(
        "http://localhost:4000/api/getAllSavedVideos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId: currentUser.uid }),
        }
      );
      const response = await savedVideosResponse.json();
      // console.log("saved-video data: ", response);
      setSavedVideos(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function addVideosToSavedList(e) {
    e.preventDefault();
    e.stopPropagation();
    try {
      const ifVideoIdExistsResponse = await fetch(
        "http://localhost:4000/api/checkIfVideoIdExists",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: currentUser.uid,
            vid_id: data.vid_id,
          }),
        }
      );
      const response = await ifVideoIdExistsResponse.json();
      // console.log("Check if video exists response:", response);

      if (response.data < 1) {
        const addVideoInSavedList = await fetch(
          "http://localhost:4000/api/updateSavedPost",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId: currentUser.uid,
              vid_id: data.vid_id,
            }),
          }
        );
        if (addVideoInSavedList.ok) {
          setSavedVideos((prev) => [...prev, data.vid_id]);
        }
      } else {
        const removeVideoFromSavedList = await fetch(
          "http://localhost:4000/api/removeVideoFromSavedVideos",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId: currentUser.uid,
              vid_id: data.vid_id,
            }),
          }
        );
        if (removeVideoFromSavedList.ok) {
          const newSavedVideoList = savedVideos.filter(
            (id) => id !== data.vid_id
          );
          // console.log(newSavedVideoList);
          setSavedVideos(newSavedVideoList);
        }
      }
    } catch (error) {
      console.log("Error while adding/removing video:", error);
    }
  }
  //
  return (
    <div className="w-full dark:bg-[#1d1e23] bg-[#d4d4d4] flex h-fit my-4 border border-gray-500 rounded-xl justify-between">
      <div className="flex w-full">
        <div
          className="rounded-l-xl bg-green-500 flex-1"
          style={{
            backgroundImage: `url(${
              youtubeVideoThumbnail + data.vid_id + "/maxresdefault.jpg"
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          key={data.youtubeVideoId}
        >
          <div className="bg-black w-12 h-12  rounded-full m-4">Pfp</div>
        </div>
        <div className="w-2/3">
          <div className="pt-2 px-4">
            <span className={`dark:text-gray-300 text-lg`}>
              {data?.title?.length > 100
                ? data?.title?.slice(0, 100) + "..."
                : data?.title}
            </span>
          </div>
          <div className="px-4 flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="red"
              fill={
                likeStore?.some((id) => data.vid_id === id) ? "red" : "none"
              }
              className="w-6 h-6 cursor-pointer"
              onClick={(e) => handleLikeCount(e)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>

            <span className={`dark:text-gray-300`}>{likesCount}</span>
          </div>
          <div className="px-4 pb-2">
            <FeedbackComponent />
            <span className={`text-blue-500 text-xs`}>
              {new Date(data?.created_at).toDateString()}
            </span>
          </div>
        </div>
      </div>
      <div className="px-4 py-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={
            savedVideos?.some((id) => id === data.vid_id) ? "lightgray" : "none"
          }
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="lightgray"
          className="w-6 h-6"
          onClick={(e) => addVideosToSavedList(e)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
          />
        </svg>
      </div>
    </div>
  );
}

export default YoutubeCard;

import { useState, useEffect } from "react";
import { youtubeVideoThumbnail } from "@/utils (Context)/constants";
import { useAuth } from "@/utils (Context)/authContext";
import { TbArrowBigUp } from "react-icons/tb";
import { TbArrowBigDown } from "react-icons/tb";
import { TbArrowBigUpFilled } from "react-icons/tb";
import useLikeStore, { useSavedVideoStore } from "@/utils (Context)/zustStores";
import FeedbackComponent from "./feedbackComponent";
import { useRouter } from "next/navigation";
import Image from "next/image";

function Card({ data }) {
  const [likesCount, setLikesCount] = useState(data?.likes_count);
  const { currentUser } = useAuth();
  const { likeStore, toggleVideoId, getUserLikes } = useLikeStore();
  const { savedVideoStore, getAllSavedVideosOfUser, toggleSavedVideos } =
    useSavedVideoStore();
  const router = useRouter();

  const likeStoreCopy = [...likeStore];
  const savedVideoStoreCopy = [...savedVideoStore];
  // console.log("likeStore: ", likeStore);
  // console.log("savedVideo: ", savedVideoStore);
  useEffect(() => {
    getUserLikes(currentUser?.uid);
  }, []);

  useEffect(() => {
    getAllSavedVideosOfUser(currentUser?.uid);
  }, []);

  function removeVideoIdFromZustandStore(vid_id) {
    toggleVideoId(vid_id);
  }

  function addVideoIdInLikeStore(vid_id) {
    toggleVideoId(vid_id);
  }

  function addVideoIdInSavedVideoStore(vid_id) {
    toggleSavedVideos(vid_id);
  }

  function removeSavedVideoFromSavedVideoStore(vid_id) {
    toggleSavedVideos(vid_id);
  }

  async function handleLikeCount(e) {
    e.preventDefault();
    e.stopPropagation();
    addLike();
  }

  async function addLike() {
    try {
      if (!currentUser?.uid) {
        router.push("/authentication");
      } else {
        if (!likeStoreCopy.includes(data?.unique_id)) {
          setLikesCount(likesCount + 1);
          addVideoIdInLikeStore(data?.unique_id);
          const incrementLikeCountPromise = fetch(
            "http://localhost:4000/api/incrementLikeCount",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ unique_id: data?.unique_id }),
            }
          );
          const addUserLikePromise = fetch(
            "http://localhost:4000/api/addLike",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                userId: currentUser.uid,
                vid_id: data?.unique_id,
              }),
            }
          );

          const [incrementLikeCountResponse, addUserLikeResponse] =
            await Promise.all([incrementLikeCountPromise, addUserLikePromise]);
          if (
            !incrementLikeCountResponse.ok ||
            (!addUserLikeResponse.ok && likesCount === 0)
          ) {
            setLikesCount(likesCount - 1);
          }
        } else {
          setLikesCount(likesCount - 1);
          removeVideoIdFromZustandStore(data?.unique_id);
          const removeLikeVideoPromise = fetch(
            "http://localhost:4000/api/removeUserLikedVideo",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                userId: currentUser.uid,
                unique_id: data?.unique_id,
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
              body: JSON.stringify({ unique_id: data?.unique_id }),
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
        }
      }
    } catch (error) {
      console.log("error while checking for likes: ", error);
      throw error;
    }
  }

  async function addVideosToSavedList(e) {
    e.preventDefault();
    e.stopPropagation();
    try {
      if (!savedVideoStore.includes(data.vid_id)) {
        addVideoIdInSavedVideoStore(data.vid_id);
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
        if (!addVideoInSavedList.ok) {
          removeSavedVideoFromSavedVideoStore(data.vid_id);
        }
      } else {
        removeSavedVideoFromSavedVideoStore(data.vid_id);
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
        if (!removeVideoFromSavedList.ok) {
          addVideoIdInSavedVideoStore(data.vid_id);
        }
      }
    } catch (error) {
      console.log("Error while adding/removing video:", error);
    }
  }
  console.log(
    "image link: ",
    youtubeVideoThumbnail + data.vid_id + "/maxresdefault.jpg"
  );
  return (
    <div className="dark:bg-[#1d1e23] px-4 py-4 my-4 rounded-xl">
      <div className="w-full dark:bg-[#1d1e23] bg-[#d4d4d4] flex h-fit justify-between">
        <div className="flex w-full">
          <div className="flex-1">
            <div className="relative">
              <Image
                width={1280}
                height={720}
                className="rounded-xl flex-1"
                src={youtubeVideoThumbnail + data.vid_id + "/maxresdefault.jpg"}
                key={data.youtubeVideoId}
              />
              <div className="bg-black w-12 h-12 rounded-full absolute m-2 top-0">
                Pfp
              </div>
              <div className="flex gap-2 items-center bg-[#121212] w-fit px-1 m-2 border border-white rounded-full py-1 my-2 absolute bottom-0">
                <span className="flex">
                  {likeStoreCopy.includes(data?.unique_id) ? (
                    <TbArrowBigUpFilled
                      className="w-6 h-6 cursor-pointer"
                      onClick={(e) => handleLikeCount(e)}
                    />
                  ) : (
                    <TbArrowBigUp
                      className="w-6 h-6 cursor-pointer"
                      onClick={(e) => handleLikeCount(e)}
                    />
                  )}
                  <span className={`dark:text-gray-300`}>{likesCount}</span>
                </span>
                <TbArrowBigDown className="w-6 h-6 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="w-2/3 ">
            <div className="pt-2 px-4">
              <span className={`dark:text-gray-300 text-lg`}>
                {data?.title?.length > 100
                  ? data?.title?.slice(0, 100) + "..."
                  : data?.title}
              </span>
            </div>
            <div className="px-4 pb-2">
              <span className={`text-blue-500 text-xs`}>
                {new Date(data?.created_at).toDateString()}
              </span>
            </div>
            <hr className="mx-4" />
            <div className="px-4 py-3">
              <FeedbackComponent />
            </div>
          </div>
        </div>
        <div className="px-4 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={
              savedVideoStoreCopy?.some((id) => id === data.vid_id)
                ? "lightgray"
                : "none"
            }
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="lightgray"
            className="w-6 h-6 cursor-pointer"
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
    </div>
  );
}

export default Card;

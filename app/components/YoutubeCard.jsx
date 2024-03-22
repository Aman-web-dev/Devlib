import { useContext, useState, useEffect } from "react";
import { youtubeVideoThumbnail } from "@/utils (Context)/constants";
import { useAuth } from "@/utils (Context)/authContext";

function YoutubeCard({ data, likedVideos }) {
  const [likesCount, setLikesCount] = useState(data.likes_count);
  const [action, setAction] = useState(null);
  const { currentUser } = useAuth();
  // async function handleLikeCount(e) {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   try {
  //     // action === "unlike" ? setAction("like") : setAction("unlike");
  //     const isAlreadyLiked = await fetch(
  //       "http://localhost:4000/api/checkLike",
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({
  //           userId: currentUser.uid,
  //           vid_id: data.vid_id,
  //         }),
  //       }
  //     );
  //     if (isAlreadyLiked.ok) {
  //       const resultAlreadyLiked = await isAlreadyLiked.json();
  //       console.log("isalreadyliked: ", resultAlreadyLiked);
  //       if (!resultAlreadyLiked.data || !resultAlreadyLiked.data.action) {
  //         setAction("like");
  //       } else {
  //         setAction(resultAlreadyLiked.data.action);
  //         console.log("action: ", resultAlreadyLiked.data.action);
  //       }
  //     }
  //     // console.log("action-first: ", action);
  //     const likeCountResponse = await fetch("http://localhost:4000/addLike", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         vid_id: data.vid_id,
  //         action: action,
  //       }),
  //     });

  //     if (likeCountResponse.ok) {
  //       await fetch("http://localhost:4000/api/updateUserLikes", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({
  //           userId: currentUser.uid,
  //           vid_id: data.vid_id,
  //           action: action,
  //         }),
  //       });
  //     }

  //     if (likeCountResponse.ok && action === "like") {
  //       setLikesCount(likesCount + 1);
  //     } else if (likeCountResponse.ok && action === "unlike") {
  //       setLikesCount(likesCount - 1);
  //     }
  //   } catch (error) {
  //     console.log("error while adding like: ", error);
  //   }
  // }
  async function handleLikeCount(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  async function addVideosToSavedList(e) {
    e.preventDefault();
    e.stopPropagation();
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
    console.log(response);
    console.log("response: ", response.data);
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
      console.log("performing add video");
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
      console.log("performing remove video");
      console.log("remove video: ", removeVideoFromSavedList);
    }
  }
  // Add this useEffect to monitor changes in 'action' state and make the fetch call
  useEffect(() => {
    if (action) {
      async function addLike() {
        let likeCountResponse;
        try {
          if (action === "like") {
            likeCountResponse = await fetch("http://localhost:4000/addLike", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                vid_id: data.vid_id,
                action: action,
              }),
            });
          } else if (action === "unlike") {
          }

          if (likeCountResponse.ok) {
            await fetch("http://localhost:4000/api/updateUserLikes", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                userId: currentUser.uid,
                vid_id: data.vid_id,
                action: action,
              }),
            });
          }

          if (likeCountResponse.ok && action === "like") {
            setLikesCount(likesCount + 1);
          } else if (likeCountResponse.ok && action === "unlike") {
            setLikesCount(likesCount - 1);
          }
        } catch (error) {
          console.log("error while adding like: ", error);
        }
      }

      addLike();
    }
  }, [action]);

  return (
    <div className="w-full flex h-fit bg-extraDark my-4 border border-gray-500">
      <div className="flex">
        <div className="w-3/12">
          <img
            src={youtubeVideoThumbnail + data.vid_id + "/maxresdefault.jpg"}
            className="w-full h-full object-cover"
            key={data.youtubeVideoId}
          />
        </div>
        <div>
          <div className="pt-2 px-4">
            <span className={`dark:text-gray-300 text-lg`}>
              {data?.title?.length > 40
                ? data?.title?.slice(0, 40) + "..."
                : data?.title}
            </span>
          </div>
          <div className="px-4 flex gap-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={"none"}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke={`lightgray`}
                className="w-6 h-6"
                onClick={(e) => handleLikeCount(e)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                />
              </svg>
            </span>
            <span className={`dark:text-gray-300`}>{likesCount}</span>
          </div>
          <div className="px-4 pb-2">
            <span className={`text-blue-500 text-xs`}>
              {new Date(data?.created_at).toDateString()}
            </span>
          </div>
        </div>
      </div>
      <div className="px-4 py-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
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

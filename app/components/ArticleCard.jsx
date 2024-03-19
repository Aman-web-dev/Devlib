import { useContext, useState } from "react";
import { youtubeVideoThumbnail } from "@/utils (Context)/constants";

function ArticleCard({ data }) {
  const [like, setLike] = useState(data.like_count);

  // function increaseLikeCount() {

  // }
  // console.log("data-got: ", data);
  // async function handleLikeCount(e, video_id) {
  //   e.preventDefault(); // Prevent default behavior (navigation)
  //   e.stopPropagation();
  //   console.log("video id: ", video_id);
  //   try {
  //     const response = await fetch(
  //       "http://localhost:4000/vid/increment-like-count",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ video_id: video_id }),
  //       }
  //     );
  //     if (response) {
  //       const likeCountResponse = await fetch(
  //         "http://localhost:4000/get-like-count",
  //         {
  //           method: "POST",
  //           body: JSON.stringify({ video_id: video_id }),
  //         }
  //       );
  //       // console.log("likeCount: ", likeCount);
  //       // setLike(likeCount);
  //       if (likeCountResponse.ok) {
  //         const likeCountData = await likeCountResponse.json();
  //         const likeCount = likeCountData.rowCount;
  //         setLike(likeCount);
  //         console.log("likeCountData: ", likeCountData);
  //         console.log("likeCount: ", likeCount);
  //       } else {
  //         console.log("Failed to fetch like count", likeCountData.status);
  //       }
  //     }

  //     // console.log("response: ", response);
  //   } catch (error) {
  //     console.log("error while increasing like count: ", error);
  //   }
  // }

  async function handleLikeCount(e, video_id) {
    e.preventDefault(); // Prevent default behavior (navigation)
    e.stopPropagation();
    console.log("video id: ", video_id);
    try {
      const response = await fetch(
        "http://localhost:4000/vid/increment-like-count",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ video_id: video_id }),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const likeCountResponse = await fetch(
        "http://localhost:4000/get-like-count",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ video_id: video_id }),
        }
      );
      if (!likeCountResponse.ok) {
        throw new Error(`HTTP error! status: ${likeCountResponse.status}`);
      }
      const likeCountData = await likeCountResponse.json();
      const likeCount = likeCountData.rowCount;
      setLike(likeCount);
      console.log("likeCountData: ", likeCountData);
      console.log("likeCount: ", likeCount);
    } catch (error) {
      console.log("error while increasing like count: ", error);
    }
  }

  return (
    <div className="w-full flex h-fit bg-extraDark my-4">
      <div className="w-3/12">
        <img
          src={youtubeVideoThumbnail + data.vid_id + "/maxresdefault.jpg"}
          className="w-full h-full object-cover"
          key={data.youtubeVideoId}
        />
      </div>
      <div>
        <div className="pt-2 px-4">
          <span
            className={`dark:text-gray-300"
             text-black text-lg`}
          >
            {data?.title?.length > 40
              ? data?.title?.slice(0, 40) + "..."
              : data?.title}
          </span>
        </div>
        <div className="px-4 flex gap-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke={`dark:lightgray`}
              className="w-6 h-6"
              onClick={(e) => handleLikeCount(e, data.vid_id)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
              />
            </svg>
          </span>
          <span className={`dark:text-gray-300`}>
            {like}
          </span>
        </div>
        <div className="px-4 pb-2">
          <span
            className={`dark:text-blue-500 text-black text-xs`}
          >
            {new Date(data?.created_at).toDateString()}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;

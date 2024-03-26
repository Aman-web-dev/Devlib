"use client";

import { useContext, useEffect, useState } from "react";
import YoutubeCard from "./YoutubeCard";
import axios from "axios";
import { AuthContext, useAuth } from "@/utils (Context)/authContext";
import { youtubeVideoThumbnail } from "@/utils (Context)/constants";
import { YoutubeContext } from "@/utils (Context)/YoutubeDetails";
import Link from "next/link";

function AddNewArticles() {
  const [isNewArticle, setIsNewArticle] = useState(false);
  const [articlesData, setArticlesData] = useState(null);
  const [likedVideo, setLikedVideos] = useState(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { currentUser } = useContext(AuthContext);
  const [dataToBeSend, setDataToBeSend] = useState({
    youtubeLink: "",
    title: "",
    tags: [],
  });

  const { youtubeId, setYoutubeId } = useContext(YoutubeContext);

  const handleTitleChange = (e) => {
    setDataToBeSend((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleYoutubeLinkChange = (e) => {
    setDataToBeSend((prev) => ({ ...prev, youtubeLink: e.target.value }));
  };

  const handleTagsChange = (e) => {
    setDataToBeSend((prev) => ({ ...prev, tags: [e.target.value] }));
  };

  function getId(url) {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? setYoutubeId(match[2]) : null;
  }
  // add youtube videos in the database
  function writeArticle() {
    try {
      setIsSubmitting(true);
      setTimeout(async () => {
        const addVideoResponse = fetch("http://localhost:4000/add-yt-vid", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: currentUser.uid,
            title: dataToBeSend.title,
            vid_id: youtubeId,
          }),
        });
        setIsSubmitting(false);
        setIsNewArticle(false);
        if (addVideoResponse) {
          const addVideoIdInTotalLikesTableResponse = await fetch(
            "http://localhost:4000/api/addVideoId",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ vid_id: youtubeId }),
            }
          );
        }
      }, 2000);

      getYoutubeVideoData();
    } catch (error) {
      console.log("data not added due to: ", error);
    }
  }
  // get all the youtube videos from the data base
  async function getYoutubeVideoData() {
    try {
      const response = axios.get("http://localhost:4000/get-yt-vid");
      response.then((result) => {
        setArticlesData(result.data);
      });
    } catch (error) {
      console.log("error during fetching data: ", error);
    }
  }

  async function getAllLikedVideos() {
    try {
      const response = await fetch("http://localhost:4000/api/likedVideo", {
        method: "GET",
      });
      const likedVideos = await response.json();
      if (response.ok && likedVideos) {
        setLikedVideos(likedVideos.data);
      }
    } catch (error) {
      console.log("error getting likes: ", error);
    }
  }

  useEffect(() => {
    getAllLikedVideos();
  }, []);

  useEffect(() => {
    getYoutubeVideoData();
  }, [isNewArticle]);

  useEffect(() => {
    getId(dataToBeSend.youtubeLink);
  }, [dataToBeSend.youtubeLink]);
  return (
    <section
      className={` dark:bg-[#23272F] w-full px-12 py-12 relative min-h-screen gap-8`}
    >
      {articlesData?.map((data) => {
        // console.log("data: ", data);
        return articlesData.length !== 0 ? (
          <Link href={`/videos/${data.vid_id}`} key={data.vid_id}>
            <YoutubeCard data={data} likedVideos={likedVideo} />
          </Link>
        ) : (
          <ShimmerThumbnail height={250} width={250} />
        );
      })}
      <button
        className={`dark:bg-light fixed right-10 bottom-10 p-4 rounded-full`}
        onClick={() => setIsNewArticle(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
          />
        </svg>
      </button>
      {isNewArticle && (
        <section
          className={`bg-extraDark flex flex-col  px-6 py-12 absolute rounded top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2`}
        >
          <button
            className="absolute  right-5 top-5 bg-light p-1 rounded-full"
            onClick={() => setIsNewArticle(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col">
              <label htmlhtmlFor="title" className={`dark:text-gray-300`}>
                Enter title
              </label>
              <input
                id="title"
                type="text"
                value={dataToBeSend.title}
                onChange={handleTitleChange}
                className={`dark:bg-extraDark border border-gray-600 text-gray-200 "
                 py-2 px-2 rounded-md`}
              />
            </div>
            <div className="flex flex-col">
              <label htmlhtmlFor="youtubelink" className={`dark:text-gray-300`}>
                Enter a valid Youtube Vide Link
              </label>
              <input
                id="youtubelink"
                type="url"
                value={dataToBeSend.youtubeLink}
                onChange={handleYoutubeLinkChange}
                className={`dark:bg-extraDark border border-gray-600 text-gray-200 py-2 px-2 rounded-md`}
              />
            </div>
            <div className="flex flex-col">
              <label htmlhtmlFor="tags" className={`dark:text-gray-300`}>
                Enter a valid Tags
              </label>
              <input
                id="tags"
                type="url"
                value={dataToBeSend.tags}
                onChange={handleTagsChange}
                className={`dark:bg-extraDark border border-gray-600 text-gray-200"
                 py-2 px-2 rounded-md`}
              />
            </div>
          </div>
          <button
            onClick={writeArticle}
            disabled={isSubmitting}
            className={`dark:bg-light border border-black flex gap-4 justify-center py-2 rounded-full my-6`}
          >
            <span>{isSubmitting ? "Uploading..." : "Upload"}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
              />
            </svg>
          </button>
        </section>
      )}
    </section>
  );
}

export default AddNewArticles;

// function AddNewArticles() {
//   return <div>hello world</div>;
// }

// export default AddNewArticles;

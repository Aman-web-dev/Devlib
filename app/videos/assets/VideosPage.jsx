//videosPage
"use client";

import { useContext, useEffect, useState } from "react";
import ShimmerEffect from "../../components/ShimmerEffect";
import Card from "./YoutubeCard";
import Link from "next/link";
import { AuthContext } from "../../../utils (Context)/authContext";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  useVideoSidebar,
  useVideoStore,
} from "../../../utils (Context)/zustStores";
import { FaRocket } from "react-icons/fa6";
import SearchComponent from "../../components/SearchComponent";

function AddNewArticles() {
  const { currentUser } = useContext(AuthContext);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { getVideos, videoStore, emptyVideoStore } = useVideoStore();
  const [isPopular, setIsPopular] = useState(false);
  const [dataMessage, setDataMessage] = useState(null);
  const [isEmpty, setIsEmpty] = useState(null);
  const [fetchHomeVideos, setFetchHomeVideos] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const { videoSideBar, setVideoSideBar } = useVideoSidebar();

  useEffect(() => {
    let delay;
    if (dataMessage === 0 && isEmpty) {
      delay = setTimeout(() => {
        setShowMessage(true);
      }, 2000);
    } else {
      setShowMessage(false);
    }
    return () => clearInterval(delay);
  }, [isEmpty]);

  useEffect(() => {
    let delay;
    emptyVideoStore({ setIsEmpty, setHasMore });
    if (isPopular) {
      delay = setTimeout(() => {
        getVideos(
          "",
          1,
          { setIsEmpty, setPage, setHasMore, setDataMessage },
          true
        );
      }, 1000);
    } else {
      emptyVideoStore({ setIsEmpty, setHasMore });
      console.log("running this");
      delay = setTimeout(() => {
        getVideos(
          "",
          1,
          { setIsEmpty, setPage, setHasMore, setDataMessage },
          false
        );
      }, 1000);
    }

    return () => clearTimeout(delay);
  }, [isPopular, fetchHomeVideos]);

  const ifQuery = () => {
    emptyVideoStore({ setIsEmpty, setHasMore });
    getVideos(
      query,
      1,
      { setIsEmpty, setPage, setHasMore, setDataMessage },
      isPopular
    );
  };

  const fetchVideosWhenNoData = () => {
    emptyVideoStore({ setIsEmpty, setHasMore });
    setFetchHomeVideos((prev) => !prev);
    setIsPopular(false);
    setQuery("");
  };
  // dark:bg-[#121212]
  return (
    <section className={`w-full flex `}>
      <SearchComponent
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onClick={() => ifQuery()}
        setPage={setPage}
        setQuery={setQuery}
        isPopular={isPopular}
        setFetchHomeVideos={setFetchHomeVideos}
        setIsPopular={setIsPopular}
        setIsEmpty={setIsEmpty}
        setHasMore={setHasMore}
        setDataMessage={setDataMessage}
      />
      {videoSideBar && (
        <div
          onClick={() => setVideoSideBar(false)}
          className="fixed top-0 left-0 bottom-0 right-0 bg-gray-500 bg-opacity-50 z-10"
        />
      )}
      <div className="py-12 px-12 gap-8 w-full">
        {videoStore?.length !== 0 || dataMessage == 1 ? (
          <InfiniteScroll
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
            loader={
              <div className="flex justify-center items-center">Loading...</div>
            }
            dataLength={videoStore.length}
            hasMore={hasMore}
            next={() => {
              getVideos(
                query,
                page,
                { setIsEmpty, setPage, setHasMore, setDataMessage },
                isPopular
              );
            }}
          >
            {videoStore?.map((data) => (
              <Link href={`videos/${data?.vid_id}`} key={data?.id}>
                <Card data={data} />
              </Link>
            ))}
          </InfiniteScroll>
        ) : dataMessage === 0 ? (
          showMessage ? (
            <div className="flex flex-col justify-center items-center min-h-[80vh] ">
              <div className="flex items-center text-4xl font-bold gap-2 mb-4">
                <span>No Data Found</span>
                <span className="text-cyan">
                  <FaRocket />
                </span>
              </div>
              <button
                onClick={fetchVideosWhenNoData}
                className="bg-cyan rounded-3xl px-3 py-2"
              >
                Go back to Home page
              </button>
            </div>
          ) : (
            <ShimmerEffect />
          )
        ) : (
          <ShimmerEffect />
        )}

        <Link
          className={`dark:bg-[#149eca] fixed right-10 bottom-10 p-4 rounded-full`}
          href={!currentUser ? "/authentication" : "/videos/addNewVideo"}
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
        </Link>
      </div>
    </section>
  );
}

export default AddNewArticles;

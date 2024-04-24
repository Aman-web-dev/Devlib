"use client";

import { useContext, useEffect, useState } from "react";
import ShimmerEffect from "@/app/components/ShimmerEffect";
import Card from "./YoutubeCard";
import Link from "next/link";
import { AuthContext } from "@/utils (Context)/authContext";
import InfiniteScroll from "react-infinite-scroll-component";

function AddNewArticles() {
  const { currentUser } = useContext(AuthContext);
  const [videoStore, setVideoStore] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const getVideos = (page) => {
    try {
      setTimeout(async () => {
        setPage(page + 1);
        console.log("page values after prev(): ", page);
        const response = await fetch(
          `http://localhost:4000/api/fetch/youtubeVideos?page=${page}`
        );
        const data = await response.json();
        if (data?.data?.length === 0) {
          console.log("length is 0");
          setHasMore(false);
        }
        setVideoStore([...videoStore, ...data.data]);
      }, 500);

      //  setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getVideos(page);
  }, []);
  return (
    <section
      className={`dark:bg-[#121212] w-full px-12 py-12 relative min-h-screen gap-8`}
    >
      {videoStore?.length !== 0 ? (
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
          next={() => getVideos(page)}
        >
          {videoStore?.map((data) => (
            <Link href={`videos/${data?.vid_id}`} key={data?.id}>
              <Card data={data} />
            </Link>
          ))}
        </InfiniteScroll>
      ) : (
        <ShimmerEffect />
      )}
      {/* <div ref={loadMoreRef}>
        {loading && (
          <div className="flex justify-center items-center">
            <Loader size="md" speed="normal" content="Loading..." />
          </div>
        )}
      </div> */}
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
    </section>
  );
}

export default AddNewArticles;

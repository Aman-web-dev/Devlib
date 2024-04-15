import { useEffect, useState } from "react";
import Card from "@/app/videos/assets/YoutubeCard";
import { serverUrl } from "@/utils (Context)/constants";
import ErrorComponent from "@/app/components/ErrorComponent";
import { TbArrowBigUp } from "react-icons/tb";
import { TbArrowBigDown } from "react-icons/tb";
import { TbArrowBigUpFilled } from "react-icons/tb";
import ShimmerEffect from "@/app/components/ShimmerEffect";

export default function ArticlePage() {
  const [articleData, setArticleData] = useState(null);
  const [errors, setErrors] = useState(null);
  const likeStoreCopy = [];
  const savedVideos = [];
  const getAllArticles = async () => {
    try {
      const responseGetAllArticles = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}api/getArticles`,
        {
          method: "GET",
        }
      );
      if (!responseGetAllArticles.ok) {
        throw responseGetAllArticles;
      } else if (
        responseGetAllArticles.ok &&
        responseGetAllArticles.status === 200
      ) {
        const result = await responseGetAllArticles.json();
        setArticleData(result.data);
      }
    } catch (error) {
      console.error("Error fetching articles:", error);
      setErrors({ status: error.status, statusText: error.statusText });
    }
  };

  useEffect(() => {
    getAllArticles();
  }, []);

  console.log("article-data: ", articleData);
  console.log("errors: ", errors);
  return (
    <>
      {!errors ? (
        <section
          className={` dark:bg-[# 121212] w-full px-12 py-12 relative min-h-screen gap-8`}
        >
          {articleData ? (
            articleData.map((data) => {
              return (
                <div
                  className="dark:bg-[#1d1e23] px-4 py-4 my-4 rounded-xl"
                  key={data?.id}
                >
                  <div className="w-full dark:bg-[#1d1e23] bg-[#d4d4d4] flex h-fit justify-between">
                    <div className="flex w-full">
                      <div className="flex-1">
                        <div className="relative">
                          <img
                            className="rounded-xl flex-1 "
                            src={data?.imgurl}
                            key={data?.id}
                          />
                          <div className="bg-black w-12 h-12 rounded-full absolute m-2 top-0">
                            Pfp
                          </div>
                          <div className="flex gap-2 items-center bg-[#121212] w-fit px-1 m-2 border border-white rounded-full py-1 my-2 absolute bottom-0">
                            <span className="flex">
                              {likeStoreCopy.includes(data?.vid_id) ? (
                                <TbArrowBigUpFilled
                                  className="w-6 h-6 cursor-pointer"
                                  // onClick={handleLikeCount}
                                />
                              ) : (
                                <TbArrowBigUp
                                  className="w-6 h-6 cursor-pointer"
                                  // onClick={handleLikeCount}
                                />
                              )}
                              <span className={`dark:text-gray-300`}>
                                {/* {likesCount} */}
                              </span>
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
                        {/* <hr className="mx-4" />
                    <div className="px-4 py-3">
                      <FeedbackComponent />
                    </div> */}
                      </div>
                    </div>
                    <div className="px-4 py-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill={
                          savedVideos?.some((id) => id === data?.vid_id)
                            ? "lightgray"
                            : "none"
                        }
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="lightgray"
                        className="w-6 h-6"
                        //   onClick={handleSavedPost}
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
            })
          ) : (
            <ShimmerEffect />
          )}
        </section>
      ) : (
        <ErrorComponent status={errors.status} statusText={errors.statusText} />
      )}
    </>
  );
}

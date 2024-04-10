export default function Card({
  data,
  likesCount,
  handleLikeCount,
  handleSavedPost,
  likeStoreCopy,
  imgId,
}) {
  return (
    <div className="dark:bg-[#1d1e23] px-4 py-4 my-4 rounded-xl">
      <div className="w-full dark:bg-[#1d1e23] bg-[#d4d4d4] flex h-fit justify-between">
        <div className="flex w-full">
          <div className="flex-1">
            <div className="relative">
              <img
                className="rounded-xl flex-1 "
                style={{
                  backgroundImage: `url(${imgId})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                key={data?.youtubeVideoId}
              />
              <div className="bg-black w-12 h-12 rounded-full absolute m-2 top-0">
                Pfp
              </div>
              <div className="flex gap-2 items-center bg-[#121212] w-fit px-1 m-2 border border-white rounded-full py-1 my-2 absolute bottom-0">
                <span className="flex">
                  {likeStoreCopy.includes(data?.vid_id) ? (
                    <TbArrowBigUpFilled
                      className="w-6 h-6 cursor-pointer"
                      onClick={handleLikeCount}
                    />
                  ) : (
                    <TbArrowBigUp
                      className="w-6 h-6 cursor-pointer"
                      onClick={handleLikeCount}
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
              savedVideos?.some((id) => id === data.vid_id)
                ? "lightgray"
                : "none"
            }
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="lightgray"
            className="w-6 h-6"
            onClick={handleSavedPost}
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

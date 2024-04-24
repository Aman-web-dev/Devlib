import { useState, useEffect, useCallback } from "react";

// const useFetch = (page) => {
//   const [videos, setVideos] = useState([]);
//   console.log("page: ", page);
//   const getVideos = useCallback(async () => {
//     try {
//       const videoResponse = await fetch(
//         `http://localhost:4000/api/fetch/youtubeVideos?page=${page}`,
//         {
//           method: "GET",
//         }
//       );
//       const result = await videoResponse.json();
//       console.log("result: ", result);
//       setVideos((prev) => [...prev, ...result.data]);
//     } catch (error) {
//       console.log("unable to fetch videos due to: ", error);
//     }
//   }, [page]);

//   useEffect(() => {
//     console.log("getVideos called");
//     getVideos();
//   }, [getVideos]);

//   return videos;
// };

const useFetch = (page) => {
  const [videos, setVideos] = useState([]);
  console.log("page: ", page);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const videoResponse = await fetch(
          `http://localhost:4000/api/fetch/youtubeVideos?page=${page}`,
          {
            method: "GET",
          }
        );
        const result = await videoResponse.json();
        console.log("result: ", result);
        setVideos((prev) => [...prev, ...result.data]);
      } catch (error) {
        console.log("unable to fetch videos due to: ", error);
      }
    };

    console.log("getVideos called");
    getVideos();
  }, [page]);

  return videos;
};

export default useFetch;

"use client";

import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import axios from "axios";

function AddNewArticles() {
  const [isNewArticle, setIsNewArticle] = useState(false);
  const [articlesData, setArticlesData] = useState([]);
  const [dataToBeSend, setDataToBeSend] = useState({
    youtubeLink: "",
    userName: "",
  });

  async function writeArticle() {
    try {
      const data = await axios.post("http://localhost:4000/new-article", {
        dataToBeSend,
      });
      const response = await data.json();
    } catch (error) {
      console.log("data not added due to: ", error);
    }
  }

  useEffect(() => {
    writeArticle();
  }, []);

  return (
    <section className="w-full px-12 py-12 relative x h-screen bg-yellow-400">
      {articlesData?.map((data) => {
        return <ArticleCard data={data} />;
      })}
      <button onClick={() => setIsNewArticle(true)}>
        Write a Article{" "}
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
        <section className="flex flex-col items-center px-6 py-12 border-white border bg-red-400 absolute rounded top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-4">
          <input
            type="text"
            value={dataToBeSend.userName}
            onChange={(e) => setDataToBeSend(e.target.value)}
          />
          <input
            type="url"
            value={dataToBeSend.youtubeLink}
            onChange={(e) => setDataToBeSend(e.target.value)}
          />
          <button onClick={writeArticle} className="border border-black">
            Add
          </button>
        </section>
      )}
    </section>
  );
}

export default AddNewArticles;
// bg-[#23272F] bg-[#16181D]

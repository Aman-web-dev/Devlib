"use client";

import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import axios from "axios";
import { useAuth } from "@/utils (Context)/authContext";

function getId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11 ? match[2] : null;
}

function AddNewArticles() {
  const [isNewArticle, setIsNewArticle] = useState(false);
  const [articlesData, setArticlesData] = useState([]);
  console.log("article-data: ", articlesData);
  const { currentUser } = useAuth();
  const [dataToBeSend, setDataToBeSend] = useState({
    youtubeLink: "",
    userName: "",
  });

  const handleUserNameChange = (e) => {
    setDataToBeSend((prev) => ({ ...prev, userName: e.target.value }));
  };

  const handleYoutubeLinkChange = (e) => {
    setDataToBeSend((prev) => ({ ...prev, youtubeLink: e.target.value }));
  };

  const youtbueId = getId(dataToBeSend.youtubeLink);
  
  // console.log("youtubeLink: ", youtbueId);

  async function writeArticle() {
    try {
      const data = await axios.post("http://localhost:4000/new-article", {
        userId: currentUser.uid,
        name: dataToBeSend.userName,
        youtubeLink: `https://www.youtube.com/embed/${youtbueId}`,
      });
      // console.log("data: ", data);
      // const response = await data.json();
      // console.log("response: ", response);
    } catch (error) {
      console.log("data not added due to: ", error);
    }
  }

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("http://localhost:4000/all-data");
        console.log("All data:", response);
        const realData = response.data[0];
        // console.log("real-data: ", realData);
        setArticlesData([response.data[0]]);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }
    getData();
  }, []);

  return (
    <section className="w-full px-12 py-12 relative min-h-screen grid lg:grid-cols-2 gap-4">
      {articlesData?.map((data) => {
        return <ArticleCard key={data.name} data={data} />;
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
            onChange={handleUserNameChange}
          />
          <input
            type="url"
            value={dataToBeSend.youtubeLink}
            onChange={handleYoutubeLinkChange}
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

"use client";

import { useContext, useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import axios from "axios";
import { useAuth } from "@/contexts/authContext";
import { ThemeContext } from "@/utils (Context)/ThemeContext";

function getId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11 ? match[2] : null;
}

function AddNewArticles() {
  const [isNewArticle, setIsNewArticle] = useState(true);
  const [articlesData, setArticlesData] = useState([]);
  const { theme } = useContext(ThemeContext);
  // console.log("article-data: ", articlesData);
  // const { currentUser } = useAuth();
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
  async function writeArticle() {
    try {
      const data = await axios.post("http://localhost:4000/new-article", {
        userId: currentUser.uid,
        name: dataToBeSend.userName,
        youtubeLink: `https://www.youtube.com/embed/${youtbueId}`,
      });
    } catch (error) {
      console.log("data not added due to: ", error);
    }
  }

  useEffect(() => {
    async function getData() {
      try {
        const allData = [];

        const response = await axios.get("http://localhost:4000/all-data");
        // console.log("All data:", response.data);
        response.data.forEach((item) => {
          Object.values(item).forEach((obj) => {
            allData.push(obj);
          });
        });

        setArticlesData(allData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }
    getData();
  }, []);

  console.log(articlesData);
  return (
    <section
      className={`${
        theme === "dark" && "bg-[#23272F]"
      } w-full px-12 py-12 relative min-h-screen grid lg:grid-cols-2 gap-4`}
    >
      {/* {articlesData?.map((data) => {
        return <ArticleCard key={data.youtubeLink} data={data} />;
      })} */}
      <button
        className={`${
          theme === "dark" && "bg-light"
        }  fixed right-10 bottom-10 p-4 rounded-full`}
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
          className={`${
            theme === "dark" && "bg-extraDark"
          } flex flex-col  px-6 py-12 absolute rounded top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2`}
        >
          <div className="flex flex-col gap-8">
            <div className="flex flex-col">
              <label
                htmlFor="username"
                className={`${theme === "dark" && "text-gray-300"}`}
              >
                Enter name
              </label>
              <input
                id="username"
                type="text"
                value={dataToBeSend.userName}
                onChange={handleUserNameChange}
                className={`${
                  theme === "dark" &&
                  "bg-extraDark border border-gray-600 text-gray-200 "
                } py-2 px-2 rounded-md`}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="youtubelink"
                className={`${theme === "dark" && "text-gray-300"}`}
              >
                Enter a valid Youtube Vide Link
              </label>
              <input
                id="youtubelink"
                type="url"
                value={dataToBeSend.youtubeLink}
                onChange={handleYoutubeLinkChange}
                className={`${
                  theme === "dark" &&
                  "bg-extraDark border border-gray-600 text-gray-200 "
                } py-2 px-2 rounded-md`}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="tags"
                className={`${theme === "dark" && "text-gray-300"}`}
              >
                Enter a valid Tags
              </label>
              <input
                id="tags"
                type="url"
                value={""}
                className={`${
                  theme === "dark" &&
                  "bg-extraDark border border-gray-600 text-gray-200"
                } py-2 px-2 rounded-md`}
              />
            </div>
          </div>
          <button
            onClick={writeArticle}
            className={`${
              theme === "dark" && "bg-light"
            } border border-black flex gap-4 justify-center py-2 rounded-full my-6`}
          >
            <span>Upload</span>
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
// bg-[#23272F] bg-[#16181D]

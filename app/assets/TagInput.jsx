"use client";

import React, { useState, useEffect, useRef } from "react";

function TagInput() {
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);

  const handleTagAdd = () => {
    setTags([tag, ...tags]);
    setTag("");
  };

  //     document.addEventListener('click',(event)=>{
  //  console.log(event.target)
  //     })

  const deleteTag=(e,oldTag,oldId)=>{
    e.preventDefault()
    e.stopPropagation();  
    console.log(oldTag)
    console.log(oldId)
      const arr=tags
      console.log(arr,oldId,oldTag)
     let newArr

      newArr=arr.filter((elem,id)=>{return id!=oldId})
      console.log(newArr)
      setTags([...newArr])
  }
  console.log(tags)

//   const deleteTag = (e,elm, oldId) => {
   
//     setTags((prevTags) => prevTags.filter((_, id) => id !== oldId));
//   };

  // useEffect(()=>{
  // props.SendData(tags)
  // },[tags])

  return (
    <div>
      <div className="flex flex-col items-center h-min ">
        <div className="w-full my-8  items-center  rounded-2xl  overflow-hidden sm:max-w-4xl  ">
          <form action="#" className="">
            <div className="flex flex-col items-center mt-1 text-sm sm:flex-row sm:space-y-0 sm:space-x-4">
              <div className="w-full sm:mb-2">
                <label htmlFor="input2">
                  <span className="ml-2text-sm sm:text-base text-gray-800 dark:text-gray-200">
                    What are you most excited to learn about?
                  </span>
                  <input
                    value={tag}
                    onChange={(e) => {
                      setTag(e.target.value);
                    }}
                    id="input2"
                    minLength="5"
                    className="mt-1 py-3 px-5 w-full  rounded-2xl outline-none border bg-[#f9fafb] placeholder:text-gray-400 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer dark:bg-[#374151] dark:text-gray-200 dark:placeholder:text-gray-300 dark:invalid:text-pink-300 "
                    type="text"
                    placeholder="Type something"
                  />
                  <p className="ml-2 text-xs text-pink-700 invisible peer-invalid:visible dark:text-gray-200">
                    less than 5 characters
                  </p>
                </label>
              </div>
              <div
                onClick={handleTagAdd}
                className="w-full text-center py-3 px-8 text-sm font-medium bg-purple-500 text-gray-100 rounded-2xl cursor-pointer sm:w-min hover:bg-purple-700 hover:text-gray-50 dark:bg-[#374151] dark:text-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-50 mb-4 sm:mb-0"
              >
                <span>Add</span>
              </div>
            </div>
          </form>
          <div className="px-2 pt-2 pb-11 mb-3 flex flex-wrap rounded-lg bg-[#f9fafb] border dark:bg-[#374151]">
            {tags.map((elem, index) => {
              return (
                <span
                  key={index + elem}
                  className="flex flex-wrap pl-4 pr-2 py-2 m-1 justify-between items-center text-sm font-medium rounded-xl cursor-pointer bg-purple-500 text-gray-200 hover:bg-purple-600 hover:text-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                >
                  {elem}
                    <div className="bg-blue-400"
                     onClick={(e) => {
                        deleteTag(e,elem,index);
                        }}
                        >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-3 hover:text-gray-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  </div>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TagInput;

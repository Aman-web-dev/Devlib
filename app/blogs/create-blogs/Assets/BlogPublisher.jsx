import React from "react";
import DialogueWrapper from "@/app/assets/dialogueWrapper";
import TagInput from "@/app/assets/TagInput";
import { postBlog } from "../../apiCalls/apiCalls";

function BlogPublisher(props) {
  console.log("blog Publisher Re render")
  return (
    <DialogueWrapper>
      <div
        ref={props.reference}
        className=" w-1/2  bg-white  dark:bg-[#121212] p-4 rounded-xl"
      >
        <div className="flex flex-col gap-4">

            <section>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Modern React Features"
            required
          />
           </section>

           <section>
          <label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <input
            type="text"
            id="large-input"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          </section>
          <TagInput/>
        <UploadButton/>
        </div>
        
      </div>
    </DialogueWrapper>
  );
}

export default BlogPublisher;



function UploadButton() {

  const handleBlogPost=()=>{
    console.log("hello")
    postBlog()
  }
  return (

        <button
        onClick={()=>handleBlogPost()}
    className="align-middle mx-auto select-none text-sm font-sans font-bold text-centertransition-all disabled:opacity-100 disabled:shadow-none disabled:pointer-events-none  py-4 px-8 rounded-lg bg-[#374151] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900  flex items-center gap-3"
    type="button">
    
    Publish Blog
  </button>

  )
}

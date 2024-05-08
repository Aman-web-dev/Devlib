"use client";

import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Preview from "./Preview";
import { useTheme } from "next-themes";
import BlogPublisher from "./BlogPublisher";
import useclickOutisdeHook from "@/hooks/useclickOutisdeHook";
import { postBlog } from "../../apiCalls/apiCalls";


export default function EditorPain() {
  const { theme } = useTheme();
  const [previewBlog, setPreviewBlog] = useState(false);
  const [Publish,setPublish]=useState(false)
  const [previewData, setPreviewData] = useState();
  const editorRef = useRef(null);
  const publisherRef=useRef(null)

  const getDataFromEditor = () => {
    if (editorRef.current) {
      const data = editorRef.current.getContent();
      console.log(data);
      setPreviewData(data);
      setPreviewBlog(!previewBlog);
    }
  };

  
  useclickOutisdeHook(publisherRef,()=>{
    setPublish(false)
  },Publish)
  

  const setDatainEditor = () => {
    if (editorRef.current) {
      editorRef.current.setContent(previewData)
      setPreviewBlog(!previewBlog);
    }
  };

  const handleBlogPublish=()=>{
    if(editorRef.current){
      const data = editorRef.current.getContent();
      console.log(data);
      setPublish(true)
    }
  }


  const handleBlogPost=()=>{
   
  }

  return (
    <>
      <div className="flex flex-col align-center items-center md:w-[80vw] mx-auto ">
        <Heading />
        <SaveBtn onPreviewBtnClick={getDataFromEditor} show={previewBlog} onEditClick={setDatainEditor} onPublishClick={handleBlogPublish}/>
        {previewBlog ? (
          <Preview data={previewData} />
        ) : (
          <Editor
            onInit={(_evt, editor) => (editorRef.current = editor)}
            apiKey="s6hca8dikwmog7ba2xepao0c1irtcudm2pk745vxfriakp1u"
            init={{
              plugins:
                "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate  tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown",
              toolbar:
                "undo redo | blocks fontfamily fontsize codesample| bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat |",
              tinycomments_mode: "embedded",
              height: "200vh",
              width: "100%",

              tinycomments_author: "Author name",
              mergetags_list: [
                { value: "First.Name", title: "First Name" },
                { value: "Email", title: "Email" },
              ],
              content_style: `
        body {
            background:#fff;
            text-wrap-wrap;
        }

        @media (min-width: 840px) {
            html {
                background:#000000;
                min-height: 100%;
                padding: 0 .5rem
            }

            body {
                background-color:#fff;
                box-shadow: 0 0 4px rgba(0, 0, 0, .15);
                box-sizing: border-box;
                margin: 1rem auto 0;
                max-width: 1000px;
                min-height: calc(100vh - 1rem);
                padding:4rem 6rem 6rem 6rem
            }
        }
    `,
            }}
            initialValue={previewData}
          />
        )}
        {Publish?<BlogPublisher reference={publisherRef} />:""}
      </div>
    </>
  );
}

const SaveBtn = (props) => {
  return (
    <div className="flex justify-between p-4 mx-auto w-[80vw] my-8">
      {!props["show"] ? (
        <div className="relative inline-flex  group">
          <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <button
            onClick={props.onPreviewBtnClick}
            title="Get Preview Now"
            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-800 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          >
            Preview Blog
          </button>
        </div>
      ) : (
        <div className="relative inline-flex  group">
          <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <button
            onClick={props.onEditClick}
            title="Get Preview Now"
            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-800 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          >
            Edit Blog
          </button>
        </div>
      )}

      <div className="relative inline-flex  group ml-auto">
        <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
        <a
          href="#"
          title="Get Preview Now"
          className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-black font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          role="button"
          onClick={props.onPublishClick}
        >
          Publish Blog
        </a>
      </div>
    </div>
  );
};

const Heading = () => {
  return (
    <>
      <div className="text-center my-8">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Devlib:{" "}
          <span className="text-blue-600 dark:text-blue-500">
            Insights from the Dev{" "}
          </span>{" "}
          Community
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Share your knowledge, experiences, and projects with fellow coders
        </p>
      </div>
    </>
  );
};

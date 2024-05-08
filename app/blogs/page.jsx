import React from "react";
import BlogContainer from "./create-blogs/Assets/BlogContainer";
import { Suspense } from "react";

function Page() {

  console.log("hey")


  return <div className="min-h-[100vh] md:w-[80vw] mx-auto">


    <Heading/>

    <Suspense fallback={<p>Loading.....</p>}>
    <BlogContainer/>

    </Suspense>
    </div>;
}

export default Page;

const Heading = () => {
  console.log("I loaded")
  return (
    <div className="text-center my-8 px-8">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
       Devlib Blogs:{" "}
        <span className="text-blue-600 dark:text-blue-500">share what you Know</span>{" "}
      Learn What you don't
      </h1>
      <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
       In devlib Blogs You can share your knowledge about tech Effortlessly by just creating a Blog of your own in few Clicks you can read and like Others Blogs and help them know. that they did good work.
      </p>
    </div>
  );
};






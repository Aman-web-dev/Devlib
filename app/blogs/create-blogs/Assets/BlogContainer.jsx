import BlogCard from "./BlogCard";
import { getBlogData } from "../../apiCalls/apiCalls";

const BlogContainer = async () => {

const data=await getBlogData()
console.log("Data",data)

  return (
    <div className="grid grid-cols-1 ">
    {data?.map((elem, index) => {
      return <BlogCard key={index} />;
    })}
  </div>
  );
};

export default BlogContainer;

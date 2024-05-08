const getDataMethod = async (endPoint, endPointObj) => {
  console.log("get Method ran Hurray");
  const url = process.env.NEXT_PUBLIC_SERVER_URL;
  const queryString = new URLSearchParams(endPointObj).toString();
  const URL = url + endPoint + "?" + queryString;
  const data = await fetch(URL, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
  return data;
};

const postDataMethod = async (endpoint, obj) => {
  const url = process.env.NEXT_PUBLIC_SERVER_URL + endpoint;

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = await response.text();
    console.log(responseData);
    return responseData;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

export const getBlogData = async () => {
  const blogs = await getDataMethod("api/blogs", {
    numberofblogs: 20,
    pageNumber: 1,
  }).then((data) => {
    return data;
  });
  console.log("Blogs", blogs);
  return blogs;
};  

const fakeData = {
  author_id: "mdfAQIaKVGZutucST3oJvUaJk6Q2",
  blog_data: "<p>Hello this is test One and is Doe By me</p>",
};

const fakeReference = {
  blog_title: "How to Improve Coding Skills",
  blog_description:
    "This blog discusses various strategies and resources for improving your coding skills.",
  blog_tags: ["Coding", "Programming", "Development"],
  blog_thumbnail_url: "https://example.com/thumbnail1.jpg",
  author_name: "John Doe",
  author_user_id: "mdfAQIaKVGZutucST3oJvUaJk6Q2",
  author_user_name: "",
  user_profile_pic_url: "https://example.com/johndoe.jpg",
};

// export const postBlog = async (referenceData=fakeReference, blogData=fakeData) => {

// console.log(referenceData,blogData)
//   try {
//     const blogPostResponse = await postDataMethod("api/postblog", blogData);

// console.log(blogPostResponse)
//     if (blogPostResponse) {
//       let blogReferenceWithBlogId={blog_id:blogPostResponse.blog_id,...referenceData}
//       const referenceResponse = await postDataMethod(
//         "api/post_blog_reference",
//         blogReferenceWithBlogId
//       );
//       if (referenceResponse && referenceResponse.success) {
//         console.log("Blog and reference data posted successfully.");
//       } else {
//         console.log("error while posting blog-reference")
//       }
//     } else {
//       console.log("error while posting blog")
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

export const postBlog = async (
  referenceData = fakeReference,
  blogData = fakeData
) => {
  console.log(referenceData, blogData);
  try {
    await postDataMethod("api/postblog", blogData).then(async (response) => {
      const result = JSON.parse(response)
      const blogId=result[0].blog_id
      let blogReferenceWithBlogId = {
        blog_id: blogId,
        ...referenceData,
      };
      console.log("blogReferenceWithBlogId", blogReferenceWithBlogId);
      const referenceResponse = await postDataMethod(
        "api/post_blog_reference",
        blogReferenceWithBlogId
      );
    });
  } catch (error) {
    console.log(error);
  }
};

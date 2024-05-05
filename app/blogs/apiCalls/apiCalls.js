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

export const postBlog = async (referenceData, blogData) => {
  try {
    const blogPostResponse = await postDataMethod("/api/post-blog", blogData);

    if (blogPostResponse && blogPostResponse.success) {
      const referenceResponse = await postDataMethod(
        "/api/post-blog-reference",
        referenceData
      );
      if (referenceResponse && referenceResponse.success) {
        console.log("Blog and reference data posted successfully.");
      } else {
        console.log("error while posting blog-reference")
      }
    } else {
      console.log("error while posting blog")
    }
  } catch (error) {
    console.log(error);
  }
};
export const fetchPostData = async (url, obj) => {
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

export const getApiData = async (url) => {
  console.log("heres The URL check ", url);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getUserPostCount = async (userIdObj, callback) => {
  try {
    const count = await fetchPostData(
      `${process.env.NEXT_PUBLIC_SERVER_URL}api/user/post-count`,
      userIdObj
    );
    callback(count);
  } catch (error) {
    console.error(error);
  }
};

export const followUser = async (followedUserObj, callback) => {
 
  try {
    const response = await getApiData(
      `${process.env.NEXT_PUBLIC_SERVER_URL}api/user/on_follow?${ new URLSearchParams(followedUserObj).toString()}`,
    );
    callback(response);
  } catch (error) {
    console.error(error);
  }
};




export const checkUserFollowed = async (userObj) => {
  const params = {
    follow_user: userObj.follower_id,
    followed_user: userObj.followed_id,
  };
console.log("checking User followed ", params)
  try {
    const response = await getApiData(
      `${process.env.NEXT_PUBLIC_SERVER_URL}api/before_follow?${
        new URLSearchParams(params).toString()
      }`
    );

    return response;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};



export const userUnfollow=async(followedUserObj, callback)=>{

console.log("unfollowing User", followedUserObj)
  try {
    const response = await getApiData(
      `${process.env.NEXT_PUBLIC_SERVER_URL}api/user/on_un_follow?${
        new URLSearchParams(followedUserObj).toString()
      }`
    );

    callback(response)
  } catch (error) {
    console.error(error.message);
    throw error;
  }

}
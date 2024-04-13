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
    const count = await fetchPostData("http://localhost:4000/api/user/post-count", userIdObj);
    callback(count);
  } catch (error) {
    console.error(error);
  }
};



export const followUser = async (followedUserObj, callback) => {
  try {
    const response = await fetchPostData("http://localhost:4000/api/follow", followedUserObj);
    callback(response);
  } catch (error) {
    console.error(error);
  }
};


export const checkUserFollowed = async (user_id) => {
  try {
    const response = await getApiData(`http://localhost:4000/api/user?user_id=${user_id}`);
    return response;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};
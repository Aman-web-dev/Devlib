import { generateUsername } from "unique-username-generator";

export const fetchPostData = async (url, obj) => {
  console.log(url, obj);
  const result = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  }).then(async (response) => {
    const final = await response.text();
    console.log("responseOf: ", url, final);
    return final;
  });

  return result;
};

//this is saving the user details in the database after it gets aunthenticated by firebase.
export const saveUserDataToDatabase = async (userObj) => {
  const { displayName, email, photoURL, uid, metadata } = userObj;
  const userName = generateUsername();
  console.log("generated username:", userName);

  const user = {
    name: displayName,
    user_name: userName,
    email: email,
    profilepicture: photoURL,
    user_id: uid,
    creation_time: metadata.creationTime,
    socialmedialinks: {},
  };

  const result = await fetchPostData("http://localhost:4000/adduser", {
    user: user,
  });
  return result;
};

//now i want to make a user video bucket as soon as he sign up in the devlib
export const makeNewVideoBucket = async (uid) => {
  const result = await fetchPostData(
    "http://localhost:4000/addUserVideoBucket",
    { uid: uid }
  );
  return result;
};

export const doesUserExistInDatabase = async (uid) => {
  const result = await fetchPostData("http://localhost:4000/checkUserExist", {
    user_id: uid,
  });
  return result;
};

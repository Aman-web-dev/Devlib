import { generateUsername } from "unique-username-generator";

const userName = generateUsername();

const  fetchPostData =async(url, obj)=> {


  console.log(url,obj)
const result=await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  }).then(async(response) => {
    const final=await response.text()
    console.log("responseOf: ",url, final);
    return final;
  });

  return result
}







export const doesUserExistInDatabase = async (uid) => {
  const result = await fetchPostData("http://localhost:4000/checkUserExist", { user_id: uid });
  return result;
};




//this is saving the user details in the database after it gets aunthenticated by firebase.
export const saveUserDataToDatabase = async (userObj) => {
  const { displayName, email, photoURL, uid, metadata } = userObj;

  const user = {
    name: displayName,
    user_name: userName,
    email: email,
    profilepicture: photoURL,
    user_id: uid,
    creation_time: metadata.creationTime,
    socialmedialinks: {},
  };

  await fetch("http://localhost:4000/adduser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user: user }),
  }).then((response) => {
    console.log("response: ", response);
    return response.text();
  });
};

//now i want to make a user video bucket as soon as he sign up in the devlib
export const makeNewVideoBucket = async (uid) => {
const result = await fetchPostData("http://localhost:4000/addUserVideoBucket", { user_id: uid,user_name:userName });
return result;
};

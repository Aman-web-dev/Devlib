import { fetchPostData } from "../../api/apiCalls";



import axios from "axios";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadString,
} from "firebase/storage";

export const getDataFromDatabase = async (object, url, callback) => {
  try {
    console.log(object);
    const response = await axios.get(url, { params: object });
    console.log("response:", response);
    callback(response);
    return response;
  } catch (error) {
    console.log("error during fetching data: ", error);
    return error;
  }
};




export const updateUserDataToDatabase = async (updatedUserObject,callback) => {
  console.log(updatedUserObject)
  const result = await fetchPostData(`${process.env.NEXT_PUBLIC_SERVER_URL}updateuser`, {
    user: updatedUserObject,
  });
  callback(result)
  return result
};






export const updateUserProfilePicture = async (user_id,img_link) => {
  const obj={
    user_id:user_id,
    img_link:img_link
  }
  console.log("hehehehheehheheehheheheheh")
  console.log(obj)
  const result = await fetchPostData(`${process.env.NEXT_PUBLIC_SERVER_URL}update-profile-picture`,obj);
  return result;
};


export const ImageUpoloadApi = async (imageBase64, nameOfImage) => {

    try{
      const storage = getStorage();
      const storageRef = ref(storage, `user-profile-images/${nameOfImage}.jpg`);
      const uploadTask=await uploadString(storageRef, imageBase64, "data_url")
      console.log("uploadtask",uploadTask)
      const url= await getDownloadURL(uploadTask.ref).then(async(downloadURL) => {
        console.log("downloadUrl",downloadURL)
        updateUserProfilePicture(nameOfImage,downloadURL)
      });

      console.log(url)


    }catch (error){
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case "storage/unauthorized":
          // User doesn't have permission to access the object
          break;
        case "storage/canceled":
          // User canceled the upload
          break;

        // ...

        case "storage/unknown":
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    }
};

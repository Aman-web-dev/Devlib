import { useAuth } from "@/utils (Context)/authContext";
import React, { useEffect, useState } from "react";
import {
  getDataFromDatabase,
  updateUserDataToDatabase,
} from "../../User-updating-apis/apiCalls";
import Profile from "../ImageUpdater/Profile";
import { saveUserDataToDatabase } from "@/app/authentication/api/apiCalls";

function PersonalDetailsUpdate() {
  const { currentUser } = useAuth();
  const [userState, setUserState] = useState({});

  const getData = () => {
    getDataFromDatabase(
      { user_id: currentUser.uid },
      `${process.env.NEXT_PUBLIC_SERVER_URL}getUserDataFromDatabase`,
      (response) => {
        console.log(response.data);
        setUserState(response.data);
      }
    );
  };



  const setDataToDataBase = async () => {
    console.log("userState",userState)
    updateUserDataToDatabase(userState, (response) => {
      console.log(response);
    });
  };



  console.log("userState", userState);

  useEffect(() => {
    console.log("this function is running");
    getData();
  }, []);

  return (
    <>
      <Form userState={userState} setUserState={setUserState} saveData={setDataToDataBase}/>
    </>
  );
}

export default PersonalDetailsUpdate;

const Form = ({ userState, setUserState,saveData }) => {
  function handleOnChange(e, setValOf) {
    setUserState({ ...userState, [setValOf]: e.target.value });
  }
  const handleSocialMediaLinkChange = (e, name) => {
    setUserState({
      ...userState,
      socialmedialinks: {
        ...userState.socialmedialinks,
        [name]: e.target.value,
      },
    });
  };

  return (
    <div className="text-black w-[40vw]  mx-auto my-8">
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Display Name
            </label>
            <input
              value={userState.name ? userState.name : ""}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
              onChange={(e) => handleOnChange(e, "name")}
            />
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              User Name
            </label>
            <input
              disabled
              value={userState?.user_name ? userState.user_name : ""}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
              onChange={(e) => handleOnChange(e, "user_name")}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="flex flex-row items-center w-full px-3">
            <label
              className="block w-3/12 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Email
            </label>
            <input
              value={userState.email ? userState.email : ""}
              className="appearance-none block w-8/12 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="email"
              placeholder="Provide Email"
              onChange={(e) => handleOnChange(e, "email")}
            />
          </div>

          <div className="flex flex-row items-center w-full px-3">
            <label
              className="block w-3/12 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Github
            </label>
            <input
              value={
                userState?.socialmedialinks?.github
                  ? userState.socialmedialinks.github
                  : ""
              }
              className="appearance-none block  bg-gray-200 text-gray-700 border border-gray-200 w-8/12 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="email"
              placeholder="Provide github Link"
              onChange={(e) => {
                handleSocialMediaLinkChange(e, "github");
              }}
            />
          </div>

          <div className="flex flex-row items-center w-full px-3">
            <label
              className="block w-3/12 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Linkedin
            </label>
            <input
              value={
                userState?.socialmedialinks?.linkedin
                  ? userState.socialmedialinks.linkedin
                  : ""
              }
              className="appearance-none block w-8/12 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="email"
              placeholder="Provide Linkedin Link"
              onChange={(e) => {
                handleSocialMediaLinkChange(e, "linkedin");
              }}
            />
          </div>

          <div className="flex flex-rowr items-center w-full px-3">
            <label
              className="block w-3/12 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Discord
            </label>
            <input
              value={
                userState?.socialmedialinks?.discord
                  ? userState.socialmedialinks.discord
                  : ""
              }
              className="appearance-none block w-8/12 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="email"
              placeholder="Provide Discord Links"
              onChange={(e) => {
                handleSocialMediaLinkChange(e, "discord");
              }}
            />
          </div>

          <div className="flex flex-row items-center w-full px-3">
            <label
              className="block w-3/12 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Portfolio
            </label>
            <input
              value={userState.website ? userState.website : ""}
              className="appearance-none block w-8/12 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="email"
              placeholder="Provide Personal Webiste or Portfolio Link"
              onChange={(e) => {
                handleOnChange(e, "website");
              }}
            />
          </div>
        </div>
      </form>

      <button onClick={()=>saveData()} className="relative inline-flex items-center justify-center  p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
        <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
        <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
          <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
          <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
        </span>
        <span className="relative text-white">Save All Data</span>
      </button>
    </div>
  );
};

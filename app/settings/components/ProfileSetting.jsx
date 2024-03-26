import React,{useEffect} from "react";
import { useAuth } from "@/utils (Context)/authContext";
import { redirect } from "next/dist/server/api-utils";



function ProfileSetting() {
  const { currentUser, userLoggedIn, loading } = useAuth();




  console.log(currentUser, userLoggedIn, loading);



  return (
    <div className="bg-[#23272f] text-gray-300">
      <section
        id="profile-Type"
        className="border-b border-gray-300 w-[80%] mx-auto py-4 text-gray-300"
      >
        <p className="text-3xl ">Public Profile</p>
      </section>
      <div className=" w-[100%] flex flex-row-reverse  min-h-screen  mt-8">
        <section className="flex flex-col  justify-center text-center mx-auto mb-auto">
          <img
            src={currentUser?currentUser.photoURL:""}
            className="rounded-full h-40 w-40 mx-auto"
          />
          <p className="text-2xl mt-2 font-sans font-bold">
            {currentUser?currentUser.displayName:""}
          </p>
          <p className="text-xl ">{currentUser?currentUser.email:""}</p>
          <p className="text-xl ">{currentUser?currentUser.phoneNumber:""} </p>
        </section>

        <section id="main-content" className="w-[60%] ml-8 mr-auto">
          <form onChange={()=>{console.log("hello")}}>
            <div className="grid gap-6 mb-6 md:grid-cols-1">
              <div>
                <label
                  htmlhtmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Display Name
                </label>

                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                  value={currentUser?currentUser.displayName:""}
                />

                <label
                  htmlhtmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-[#768390] dark:text--[#768390] "
                >
                  Your name may appear around Devlib where you post Your
                  Suggestion or Discussions. You can remove it at any time.
                </label>
              </div>
              <div>
                <label
                  htmlhtmlFor="last_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                <span className="rounded-full uppercase bg-red-500 mx-4 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                  {/* {currentUser.emailVerified?"Verified":"Not Verified"} */}
                  </span>
                  </label>
                <input
                  type="text"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  // value={currentUser.email}
                  placeholder="Doe"
                  readOnly
                />

                <label
                  htmlhtmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-[#768390] dark:text--[#768390] "
                >
                  Changing the primary email address associated with Your
                  account could potentially pose a security risk
                </label>
              </div>
              <div>
                <label
                  htmlhtmlFor="company"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  User Name
                </label>
                <input
                  type="text"
                  id="company"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Flowbite"
                  required
                />

                <label
                  htmlhtmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-[#768390] dark:text--[#768390] "
                >
                  Every User in Devlib has Their own Unique Username which helps
                  in easy authentication and search accessiblity
                </label>
              </div>
              <div>
                <label
                  htmlhtmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="123-45-678"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                />

                <label
                  htmlhtmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-[#768390] dark:text--[#768390] "
                >
                  Phone Number Helps In accessing Ypur Account in Times when you
                  Forget Your Username or Email
                </label>
              </div>
              <div>
                <label
                  htmlhtmlFor="website"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Pronoun
                </label>
                <select
                  onChange={()=>{console.log("hello")}}
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option  defaultChecked>Choose a Pronoun</option>
                  <option value="US">he/him</option>
                  <option value="CA">they/them</option>
                  <option value="FR">she/her</option>
                  <option value="DE">Custom</option>
                </select>

                <label
                  htmlhtmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-[#768390] dark:text--[#768390] "
                >
                 Select your Pronouns this helps other Users to not misgender you and treat you 
                </label>
              </div>

              <div>
                <label
                  htmlhtmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Bio
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your thoughts here..."
                ></textarea>

                <label
                  htmlhtmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-[#768390] dark:text--[#768390] "
                >
                  Your Bio acts as a Summary Of Your Account that Tells Others Users about you and Your Work.
                </label>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default ProfileSetting;

"use client";

import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "@/utils (Context)/authContext";

import AccountSetting from "./components/AccountSetting";
import PersonalInfo from "./components/PersonalInfo";
import ProfileSetting from "./components/ProfileSetting";
import SecuritySetting from "./components/SecuritySetting";
import EmailSetting from "./components/EmailSetting";
import BillingSetting from "./components/BillingSetting";

function Page() {
  const [currentSetting, setCurrentSetting] = useState(<ProfileSetting />);
  const [activeBtn,setActiveBtn]=useState("Profile")


  const personalComponents = {
    Profile: <ProfileSetting />,
    Account: <AccountSetting />,
    Security: <SecuritySetting />,
    Personal: <PersonalInfo />,
    Email: <EmailSetting />,
    Billing: <BillingSetting />,
  };

  const handleSettingChange = (e) => {
    console.log(e.target.id);
    const key = e.target.id;
    setActiveBtn(e.target.id)

    setCurrentSetting(personalComponents[key]);
  };

  const { currentUser } = useAuth();

  return (
    <div className="bg-black  p-2">
      <div
        id="ProfileDetails"
        className="flex flex-row  bg-[#23272f] text-white py-2 pl-5"
      >
        <img
          src={currentUser?currentUser.photoURL:""}
          alt=""
          className=" my-4 h-20 w-20  rounded-full mx-4 object-cover"
        />
        <section id="userDetails" className="my-auto ">
          <p className="text-3xl font-bold   dark:">
            {currentUser?currentUser.displayName:""}
          </p>
          <p className="text-lg">{currentUser?currentUser.email:""}</p>
          <p>Personal Account</p>
        </section>
      </div>

      <div className="flex flex-row w-full">
        <div
          id="setting-scroll-section"
          className="bg-[#23272f] text-gray-300   w-[25vw]  my-2"
        >
          <div id="optionList" className=" w-[90%] mx-auto">
            <ul className="text-sm gap-2 font-bold border-b py-4">
              <span className="text-sm text-blue-400  ">Personal</span>

              {Object.entries(personalComponents).map(([key, component]) => (
                <li
                  key={key}
                  className={`my-4 cursor-pointer p-2 rounded-lg  ${activeBtn==key?"bg-[#505a6d] border-l-4 border-blue-400":""}`}
                  id={key}
                  onClick={(e) => handleSettingChange(e)}
                >
                  {key}
                </li>
              ))}
            </ul>

            <ul className="text-sm gap-2 border-b font-bold my-4 ">
              <span className="text-sm my-4 mx-4">Products</span>
              <li className="my-4">Articles</li>
              <li className="my-4">Videos</li>
              <li className="my-4">Documentation</li>
            </ul>
          </div>
        </div>

        <div className="min-w-[80vw] bg-white  m-2">{currentSetting}</div>
      </div>
    </div>
  );
}

export default Page;

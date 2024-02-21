"use client";

import React, { useState } from "react";
import { useAuth } from "@/utils (Context)/authContext";

import AccountSetting from "./components/AccountSetting";
import PersonalInfo from "./components/PersonalInfo";
import ProfileSetting from "./components/ProfileSetting";
import SecuritySetting from "./components/SecuritySetting";
import EmailSetting from "./components/EmailSetting";
import BillingSetting from "./components/BillingSetting";

function page() {
  const [currentSetting, setCurrentSetting] = useState(<ProfileSetting />);

  const components = {
    ProfileSetting: <ProfileSetting />,
    AccountSetting: <AccountSetting />,
    SecuritySetting: <SecuritySetting />,
    PersonalInfo: <PersonalInfo />,
    EmailSetting: <EmailSetting />,
    BillingSetting: <BillingSetting />,
  };

  const handleSettingChange = (e) => {
    console.log(e.target.id);
    const keye = e.target.id;

    setCurrentSetting(components[keye]);
  };

  const { currentUser } = useAuth();

  return (
    <div className="bg-black  p-2">
      <div
        id="ProfileDetails"
        className="flex flex-row  bg-[#23272f] text-white py-2 pl-5"
      >
        <img
          src={currentUser.photoURL}
          alt=""
          className=" my-4 h-20 w-20  rounded-full mx-4 object-cover"
        />
        <section id="userDetails" className="my-auto ">
          <p className="text-3xl font-bold   dark:">
            {currentUser.displayName}
          </p>
          <p className="text-lg">{currentUser.email}</p>
          <p>Personal Account</p>
        </section>
      </div>

      <div className="flex flex-row w-full">
        <div
          id="setting-scroll-section"
          className="bg-[#23272f] text-gray-300   w-[25vw]  my-2"
        >
          <div id="optionList" className=" w-[90%] mx-auto">
            <ul className="text-xl font-bold gap-2 border-b">
              <span className="text-sm my-4 mx-4">Personal</span>

              <li
                className="my-4"
                id={"ProfileSetting"}
                onClick={(e) => handleSettingChange(e)}
              >
                Profile
              </li>
              <li
                className="my-4"
                id={"AccountSetting"}
                onClick={(e) => handleSettingChange(e)}
              >
                Account
              </li>
              <li
                id="SecuritySetting"
                className="my-4"
                onClick={(e) => handleSettingChange(e)}
              >
                Security
              </li>
              <li
                className="my-4"
                id={"PersonalInfo"}
                onClick={(e) => handleSettingChange(e)}
              >
                Personal Information
              </li>
              <li
                className="my-4"
                id={"BillingSetting"}
                onClick={(e) => handleSettingChange(e)}
              >
                Billings
              </li>
              <li
                className="my-4"
                id={"EmailSetting"}
                onClick={(e) => handleSettingChange(e)}
              >
                Emails
              </li>
            </ul>

            <ul className="text-xl font-bold gap-2 my-4 border-b">
              <span className="text-sm my-4 mx-4">Products</span>
              <li className="my-4">Articels</li>
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

export default page;

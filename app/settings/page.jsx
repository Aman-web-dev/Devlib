"use client";

import React, { useState } from "react";

function page() {
  const [currentSetting, setCurrentSetting] = useState(<PersonalSetting />);
  const handleSettingChange = (e) => {
    console.log(e.target.id);
    setCurrentSetting(<>{e.target.id}</>)
  };

  return (
    <div className="bg-black min-h-screen p-2">
      <div
        id="ProfileDetails"
        className="flex flex-row  bg-[#23272f] text-white py-2"
      >
        <img
          src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1480&t=st=1708348675~exp=1708349275~hmac=0fea3e54d0a82e991654ae78c3fa832e3428a01f5b5bd72879792850ab0e5df3"
          alt=""
          className=" my-4 h-20 w-20  rounded-full mx-4 object-cover"
        />
        <section id="userDetails" className="my-auto ">
          <p className="text-3xl  dark:">Aman Kumar</p>
          <p>Personal Account</p>
        </section>
      </div>

      <div className="flex flex-row w-full">
        <div
          id="setting-scroll-section"
          className="bg-[#23272f] text-white min-h-screen  w-[30vw]  my-2"
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

        <div className="w-[70vw] bg-white m-2">{currentSetting}</div>
      </div>
    </div>
  );
}

export default page;





const PersonalSetting = () => {
  return (
    <>
    <div className="w-full bg-[#23272f] min-h-screen text-white">

     

    </div>
    </>
  )
};

































const AccountSetting = () => {
  return <p>Account Setting</p>;
};

const SecuritySetting = () => {
  return <p>Security Setting</p>;
};

const PersonalInfo = () => {
  return <p>Personal Info Setting</p>;
};

const BillingSetting = () => {
  return <p>Billing Setting</p>;
};

const EmailSetting = () => {
  return <p>Email Setting</p>;
};

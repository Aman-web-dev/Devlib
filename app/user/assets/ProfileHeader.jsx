"use client";
import FollowButton from "./FollowButton";

import { useRef, useState } from "react";
import { useAuth } from "@/utils (Context)/authContext";
import { useParams } from "next/navigation";
import Modal from "./Modal";
import useclickOutisdeHook from "@/hooks/useclickOutisdeHook";
import { FaDiscord, FaLinkedin, FaFacebook } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const ProfileHeader = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const params = useParams();
  const { currentUser } = useAuth();
  const modalRef = useRef(null);

  useclickOutisdeHook(
    modalRef,
    () => {
      setModalVisible(false);
    },
    modalVisible
  );

  return (
    <div>
      <div className="px-4 my-4 ">
        <img
          src={currentUser?.photoURL}
          className=" w-40 rounded-full border p-1 dark:border-gray-400 border-black"
        />

        <div className=" flex flex-row items-center my-4">
          <h2 className="text-3xl  py-2 ">{currentUser?.displayName} </h2>
          <FollowButton followed_id={params.user_id} />
        </div>

        <div className="flex gap-4 items-center">
          {/* <span>{userPostCount} posts</span> */}{" "}
          <span className="cursor-pointer hover:text-yellow-300 font-bold flex flex-col items-center">
            <p>0</p>
            Posts
          </span>
          <span
            className="cursor-pointer hover:text-yellow-300 font-bold flex flex-col items-center"
            onClick={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <p>0</p>
            Followers
          </span>
          <span
            className="cursor-pointer hover:text-yellow-300 font-bold flex flex-col items-center"
            onClick={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <p>0</p>
            Following
          </span>
          {modalVisible ? <Modal reference={modalRef} /> : ""}
        </div>
        <h2 className=" mt-4 font-bold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam,
          libero earum. Iste officia ut totam culpa numquam cumque asperiores
          fugit!
        </h2>

        <div
          id="social-media-link-handlers"
          className="my-4 flex flex-col gap-4 mt-20"
        >
          <a href="https://www.fbasisabajsfbhas.com" target="_blank">
            <section className="flex flex-row items-center gap-2">
              <FaLinkedin size={25} />
              <p className="font-bold  text-sm hover:text-blue-500">
                www.fbasisabajsfbhas.com
              </p>
            </section>
          </a>

          <a href="https://www.fbasisabajsfbhas.com" target="_blank">
            <section className="flex flex-row items-center gap-2">
              <FaFacebook size={25} />
              <p className="font-bold  text-sm hover:text-blue-500">
                www.fbasisabajsfbhas.com
              </p>
            </section>
          </a>

          <a href="https://www.fbasisabajsfbhas.com" className="" target="_blank">
            <section className="flex flex-row items-center  gap-2">
              <FaDiscord size={25} />
              <p className="font-bold  text-sm hover:text-blue-500">
                www.fbasisabajsfbhas.com
              </p>
            </section>
          </a>

          <a href="https://www.fbasisabajsfbhas.com" target="_blank">
            <section className="flex flex-row items-center gap-2">
              <CgWebsite size={25} />
              <p className="font-bold  text-sm hover:text-blue-500">
                www.fbasisabajsfbhas.com
              </p>
            </section>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;

import { useEffect, useRef, useState } from "react";
import PencilIcon from "./assets/PencilIcon";
import Modal from "./assets/Modal";
import { getDataFromDatabase } from "../../User-updating-apis/apiCalls";
import { useAuth } from "@/utils (Context)/authContext";

const Profile = () => {
  const { currentUser } = useAuth();

  const [avatarUrl, setAvatarUrl] = useState(
    currentUser.photoURL ? currentUser.photoURL : "avatar"
  );

  useEffect(() => {
    if (currentUser) {
      const obj = { user_id: currentUser.uid };
      console.log(
        "this is api call:",
        getDataFromDatabase(
          obj,
          "http://localhost:4000/get-user-profilepicture",
          (response) => {
            if (response.data.profilepicture) {
              console.log("changing");
              setAvatarUrl(response.data.profilepicture);
            }
          }
        )
      );
    }
  }, [currentUser]);

  const [modalOpen, setModalOpen] = useState(false);

  const updateAvatar = (imgSrc) => {
    setAvatarUrl(imgSrc)
    // avatarUrl.current = imgSrc;
  };

  return (
    <div className="flex flex-col items-center pt-12">
      <div className="relative">
        <img
          src={avatarUrl}
          alt="Avatar"
          className="w-[150px] h-[150px] rounded-full border-2 border-gray-400"
        />
        <button
          className="absolute -bottom-3 left-0 right-0 m-auto w-fit p-[.35rem] rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-600"
          title="Change photo"
          onClick={() => setModalOpen(true)}
        >
          <PencilIcon />
        </button>
      </div>
      <h2 className="text-white font-bold mt-6">{currentUser.displayName}</h2>
      <p className="text-white text-lg mt-2">{currentUser.email}</p>
      {modalOpen && (
        <Modal
          updateAvatar={updateAvatar}
          closeModal={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Profile;

import { useEffect, useRef, useState } from "react";
import PencilIcon from "./PencilIcon";
import Modal from "./Modal";
import { getImageFromUserTable } from "../../User-updating-apis/apiCalls";
import { useAuth } from "@/utils (Context)/authContext";

const Profile = () => {
  const { currentUser } = useAuth();

  const [avatarUrl, setAvatarUrl] = useState(
    currentUser.photoURL ? currentUser.photoURL : "avatar"
  );

  // const avatarUrl = useRef(
  //   "https://avatarfiles.alphacoders.com/161/161002.jpg"
  // );

  useEffect(() => {
    if (currentUser) {
      const obj = { user_id: "g6jvHvLep0aPXi32g4261t63y7P2" };
      console.log(
        "this is api call:",
        getImageFromUserTable(
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
    avatarUrl.current = imgSrc;
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
      <h2 className="text-white font-bold mt-6">Mack Aroney</h2>
      <p className="text-gray-500 text-xs mt-2">Software Engineer</p>
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

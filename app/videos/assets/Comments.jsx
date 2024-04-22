import { AuthContext } from "@/utils (Context)/authContext";
import Image from "next/image";
import { useContext, useState, useRef, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useCommentStore } from "@/utils (Context)/zustStores";

function CommentComponent({ data }) {
  const [isOptionsTrue, setIsOptionsTrue] = useState(false);
  const [editComment, setEditComment] = useState(false);
  const [currentComment, setCurrentComment] = useState(
    !data?.comment ? "" : data?.comment
  );
  const { currentUser } = useContext(AuthContext);
  const { deleteComment, updateComment } = useCommentStore();
  const optionsRef = useRef();

  const handleCancelComment = () => {
    setEditComment(false);
  };

  const handleSaveComment = async () => {
    await updateComment(data?.id, currentComment);
    setEditComment(false);
  };

  const handleClickOutside = (event) => {
    if (optionsRef.current && !optionsRef.current.contains(event.target)) {
      console.log("clicked outside");
      setIsOptionsTrue(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex my-6">
      <div className="flex gap-2 w-full items-center ">
        <div>
          <Image
            src={data?.profilepicture}
            alt={data?.name}
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
        <div className="w-full">
          <span className="font-bold">{data?.name}</span>
          {editComment ? (
            <div>
              <input
                type="text"
                value={currentComment}
                onChange={(e) => setCurrentComment(e.target.value)}
                // onBlur={() => setEditComment(false)}
                className="outline-none w-full px-2 py-1 border-b-2"
              />{" "}
              <div className="flex gap-2 mt-4">
                <button
                  onClick={handleCancelComment}
                  className="py-1 px-2 rounded-2xl hover:bg-gray-700"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleSaveComment()}
                  disabled={currentComment === data?.comment}
                  className={`${
                    currentComment === data?.comment &&
                    "cursor-not-allowed bg-gray-500"
                  } py-1 px-4 rounded-2xl bg-blue-700`}
                >
                  Save
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full">{data?.comment}</div>
          )}
        </div>
      </div>
      {currentUser?.uid === data?.user_id && !editComment && (
        <div className="items-start flex relative" ref={optionsRef}>
          <BsThreeDotsVertical
            className="cursor-pointer"
            onClick={() => setIsOptionsTrue(!isOptionsTrue)}
          />
          {isOptionsTrue && (
            <div className="absolute border-white border right-5 py-2 rounded-lg">
              <button
                onClick={() => {
                  console.log("edit button");
                  setEditComment(true);
                  setIsOptionsTrue(false);
                }}
                className="mb-2 flex gap-2 items-center hover:bg-gray-500 hover:bg-opacity-50 w-full px-4"
              >
                <MdEdit className="w-5 h-5" /> <span>Edit</span>
              </button>
              <button
                onClick={() => deleteComment(data?.id)}
                className="flex gap-2 items-center px-4 hover:bg-gray-500 hover:bg-opacity-50"
              >
                <MdDelete className="w-5 h-5" /> <span>Delete</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CommentComponent;

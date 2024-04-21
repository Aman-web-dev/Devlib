import { youtubeLink } from "@/utils (Context)/constants";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CommentComponent from "./Comments";
import { AuthContext } from "@/utils (Context)/authContext";
import { useRouter } from "next/navigation";
import { useCommentStore } from "@/utils (Context)/zustStores";

function Youtube({ link }) {
  const [userComment, setUserComment] = useState("");
  const [allComments, setAllComments] = useState(null);
  const [isCommenting, setIsCommenting] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const { id } = useParams();
  const router = useRouter();
  const { commentStore, postComment, getComments, addComment } =
    useCommentStore();

  useEffect(() => {
    getComments(id);
  }, []);

  return (
    <div className="px-6 py-6">
      <div className="py-6 px-6 w-fit ">
        <iframe
          width="730"
          height="415"
          src={youtubeLink + link}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ border: "0" }}
        ></iframe>
        <div className="add-comment ">
          <div className="py-4 items-center">
            <input
              type="text"
              placeholder="add your thoughts"
              className="w-full px-4 py-3 rounded-full outline-none"
              onChange={(e) => setUserComment(e.target.value)}
              value={userComment}
            />
            <div className="flex gap-2 mt-4">
              <button
                disabled={!userComment}
                className={`${
                  !userComment && "cursor-not-allowed"
                } py-1 px-2 rounded-2xl bg-gray-400`}
                onClick={() => setUserComment("")}
              >
                Cancel
              </button>
              <button
                disabled={!userComment || isCommenting}
                className={`${
                  !userComment && "cursor-not-allowed"
                } py-1 px-2 rounded-2xl bg-blue-700`}
                onClick={() =>
                  addComment(
                    userComment,
                    currentUser?.displayName,
                    currentUser?.photoURL,
                    currentUser?.uid,
                    id,
                    setIsCommenting,
                    setUserComment
                  )
                }
              >
                {!isCommenting ? "Comment" : "Commenting..."}
              </button>
            </div>
          </div>
        </div>
        <hr className="mb-12" />
        {commentStore === null || commentStore?.length === 0 ? (
          <div>No comments</div>
        ) : (
          commentStore?.map((data) => {
            return <CommentComponent data={data} key={data?.comment} />;
          })
        )}
      </div>
    </div>
  );
}

export default Youtube;

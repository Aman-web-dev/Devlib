import { youtubeLink } from "@/utils (Context)/constants";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CommentComponent from "./Comments";
import { AuthContext } from "@/utils (Context)/authContext";
import { useRouter } from "next/navigation";

function Youtube({ link }) {
  const [userComment, setUserComment] = useState("");
  const [allComments, setAllComments] = useState(null);
  const [isCommenting, setIsCommenting] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const { id } = useParams();
  const router = useRouter();

  const getAllComments = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/getAllComments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ vid_id: id }),
      });
      const result = await response.json();
      setAllComments(result);
      console.log("result: ", result);
    } catch (error) {
      console.log("failed to fetch all comments: ", error);
      throw new Error("Failed to fetch all comments");
    }
  };

  const postUserComment = async () => {
    try {
      if (!currentUser) {
        router.push("/authentication");
      } else {
        setIsCommenting(true);
        const commentResponse = await fetch(
          "http://localhost:4000/api/addComment",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId: currentUser.uid,
              vid_id: id,
              comment: userComment,
            }),
          }
        );
        console.log("comment-response :", commentResponse);
      }
    } catch (error) {
      console.log("error while adding your comment please try again later");
      throw Error(error);
    } finally {
      setIsCommenting(false);
    }
  };

  useEffect(() => {
    getAllComments();
  }, []);

  return (
    <div className="px-6 py-6">
      <div className="py-6 px-6 w-fit ">
        <iframe
          width="730"
          height="415"
          src={youtubeLink}
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
                disabled={!userComment}
                className={`${
                  !userComment && "cursor-not-allowed"
                } py-1 px-2 rounded-2xl bg-blue-700`}
                onClick={() => postUserComment()}
              >
                {!isCommenting ? "Comment" : "Commenting..."}
              </button>
            </div>
          </div>
        </div>
        <hr className="mb-12" />
        {allComments === null || allComments?.length === 0 ? (
          <div>No comments</div>
        ) : (
          allComments.map((data) => {
            return <CommentComponent data={data} key={data?.comment} />;
          })
        )}
      </div>
    </div>
  );
}

export default Youtube;

import React, { useState } from "react";

function FeedbackComponent() {
  const [feedbackIndex, setFeedbackIndex] = useState(0);

  const feedbacks = [
    {
      user: "Aman Kumar",
      userProfilePic:
        "https://img.freepik.com/free-photo/young-model-red-shirt-wearing-eyeglasses-crossing-his-arms_114579-17446.jpg?w=740",
      feedBack:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque molestiae dolore ratione mollitia sequi, libero aliquam voluptatum eveniet soluta omnis ipsam, obcaecati natus magni ex, sint enim doloribus sed quibusdam.",
      dateOfFeedback: "12/24/2023",
      likesOnfeedback: "12",
      dislikesOnfeedback: "14",
    },
    {
      user: "Shanu Kumar",
      userProfilePic:
        "https://img.freepik.com/free-photo/young-model-red-shirt-wearing-eyeglasses-crossing-his-arms_114579-17446.jpg?w=740",
      feedBack:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque molestiae dolore ratione mollitia sequi, libero aliquam voluptatum eveniet soluta omnis ipsam, obcaecati natus magni ex, sint enim doloribus sed quibusdam.",
      dateOfFeedback: "12/24/2023",
      likesOnfeedback: "12",
      dislikesOnfeedback: "14",
    },
    {
      user: "Ankish Kumar",
      userProfilePic:
        "https://img.freepik.com/free-photo/young-model-red-shirt-wearing-eyeglasses-crossing-his-arms_114579-17446.jpg?w=740",
      feedBack:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque molestiae dolore ratione mollitia sequi, libero aliquam voluptatum eveniet soluta omnis ipsam, obcaecati natus magni ex, sint enim doloribus sed quibusdam.",
      dateOfFeedback: "12/24/2023",
      likesOnfeedback: "12",
      dislikesOnfeedback: "14",
    },
    {
      user: "Bala Kumar",
      userProfilePic:
        "https://img.freepik.com/free-photo/young-model-red-shirt-wearing-eyeglasses-crossing-his-arms_114579-17446.jpg?w=740",
      feedBack:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque molestiae dolore ratione mollitia sequi, libero aliquam voluptatum eveniet soluta omnis ipsam, obcaecati natus magni ex, sint enim doloribus sed quibusdam.",
      dateOfFeedback: "12/24/2023",
      likesOnfeedback: "12",
      dislikesOnfeedback: "14",
    },
    {
      user: "Nipun Kumar",
      userProfilePic:
        "https://img.freepik.com/free-photo/young-model-red-shirt-wearing-eyeglasses-crossing-his-arms_114579-17446.jpg?w=740",
      feedBack:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque molestiae dolore ratione mollitia sequi, libero aliquam voluptatum eveniet soluta omnis ipsam, obcaecati natus magni ex, sint enim doloribus sed quibusdam.",
      dateOfFeedback: "12/24/2023",
      likesOnfeedback: "12",
      dislikesOnfeedback: "14",
    },
    {
      user: "Abhishek Kumar",
      userProfilePic:
        "https://img.freepik.com/free-photo/young-model-red-shirt-wearing-eyeglasses-crossing-his-arms_114579-17446.jpg?w=740",
      feedBack:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque molestiae dolore ratione mollitia sequi, libero aliquam voluptatum eveniet soluta omnis ipsam, obcaecati natus magni ex, sint enim doloribus sed quibusdam.",
      dateOfFeedback: "12/24/2023",
      likesOnfeedback: "12",
      dislikesOnfeedback: "14",
    },
  ];

  function nextCommment() {
    setFeedbackIndex((prev) => (prev === feedbacks.length - 1 ? 0 : prev + 1));
  }

  // setInterval(nextCommment, 3000);

  return (
    <div className="">
      {/* <button
        className="w-20 h-100 "
        onClick={() => {
          setFeedbackIndex((prev) => (prev != 0 ? prev - 1 : 0));
        }}
      >
        Previous
      </button> */}

      {/* <button
        className="w-20 h-100 bg-blue-400"
        onClick={() => {
          setFeedbackIndex((prev) =>
            prev == feedbacks.length - 1 ? 0 : prev + 1
          );
        }}
      >
        Next
      </button> */}

      {feedbacks?.map((elem, index) => {
        return feedbackIndex == index ? (
          <div id={index} key={index}>
            <section className="flex py-2">
              {/* <div className="flex items-start mr-4">
                <img
                  className="w-12 h-12  rounded-full object-cover object-top border"
                  src={elem.userProfilePic}
                />
              </div> */}

              <div className="w-9/12">
                <p className="text-sm">{elem.user}</p>
                <p className="text-sm text-gray-400">
                  {elem.feedBack.length > 100
                    ? elem.feedBack.slice(0, 100) + "..."
                    : elem.feedBack}
                </p>
                <div className="flex gap-2 text-sm">
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="gray"
                      className="w-5 h-5"
                    >
                      <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                    </svg>
                    <span className="text-gray-400">
                      {elem.likesOnfeedback}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="gray"
                      className="w-5 h-5"
                    >
                      <path d="M15.73 5.5h1.035A7.465 7.465 0 0 1 18 9.625a7.465 7.465 0 0 1-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 0 1-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.499 4.499 0 0 0-.322 1.672v.633A.75.75 0 0 1 9 22a2.25 2.25 0 0 1-2.25-2.25c0-1.152.26-2.243.723-3.218.266-.558-.107-1.282-.725-1.282H3.622c-1.026 0-1.945-.694-2.054-1.715A12.137 12.137 0 0 1 1.5 12.25c0-2.848.992-5.464 2.649-7.521C4.537 4.247 5.136 4 5.754 4H9.77a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23ZM21.669 14.023c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.958 8.958 0 0 1-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227Z" />
                    </svg>
                    <span className="text-gray-400">
                      {elem.dislikesOnfeedback}
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ) : (
          ""
        );
      })}
    </div>
  );
}

export default FeedbackComponent;

import FollowButton from "./FollowButton";
import { FaDiscord, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { getDataFromDatabase } from "@/app/authentication/customization/User-updating-apis/apiCalls";
import { followerCount,followingCount } from "../api/api";
import Modal from "./Modal";

const ProfileHeader = async ({ user_id }) => {
  const getData = async () => {
    let data = await getDataFromDatabase(
      { user_id: user_id },
      `${process.env.NEXT_PUBLIC_SERVER_URL}getUserDataFromDatabase`,
      (response) => {}
    );
    return data.data;
  };

let followers=await followerCount({user_id:user_id})
// let following=await followingCount()

console.log("followers Count",followers)


  let userDetails = await getData();
  console.log("userDetails", userDetails);

  return (
    <div className="min-w-[40vw]">
      <div className="px-4 my-4 ">
        <img
          src={
            userDetails?.profilepiure == null || undefined
              ? "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1713730659~exp=1713734259~hmac=a1572fadc90407b193321ae798ff3bba2dcbd1755eb6a04fad70065818de27dd&w=996"
              : userDetails?.profilepicture
          }
          className=" w-40 rounded-full border p-1 dark:border-gray-400 border-black"
        />

        <div className=" flex flex-row items-center my-4">
          <h2 className="text-3xl  py-2 ">{userDetails?.name} </h2>
          <FollowButton followed_id={userDetails?.user_id} />
        </div>

        <div className="flex gap-4 items-center">
          {/* <span>{userPostCount} posts</span> */}{" "}
          <span className="cursor-pointer hover:text-yellow-300 font-bold flex flex-col items-center">
            <p>0</p>
            Posts
          </span>
          <span
            className="cursor-pointer hover:text-yellow-300 font-bold flex flex-col items-center"
        
          >
            <p>{followers}</p>
            Followers
          </span>
          <span
            className="cursor-pointer hover:text-yellow-300 font-bold flex flex-col items-center"
    
          >
            <p>0</p>
            Following
          </span>
          
  
        </div>
        <h2 className=" mt-4 font-bold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam,
          libero earum. Iste officia ut totam culpa numquam cumque asperiores
          fugit!
        </h2>

        <SocialMediaLinks socialMediaLinks={userDetails?.socialmedialinks} />
      </div>
    </div>
  );
};

export default ProfileHeader;

const SocialMediaLinks = ({ socialMediaLinks }) => {
  const linksArray = Object.entries(socialMediaLinks);

  return (
    <div
      id="social-media-link-handlers"
      className="my-4 flex flex-col gap-4 mt-20"
    >
      {linksArray.map(([key, value]) => (
        <a key={key} href={value} target="_blank" rel="noopener noreferrer">
          <section className="flex flex-row items-center gap-2">
            {key == "github" && <FaGithub size={25} />}
            {key == "linkedin" && <FaLinkedin size={25} />}
            {key == "discord" && <FaDiscord size={25} />}
            {key === "website" && <CgWebsite size={25} />}

            <p className="font-bold text-sm hover:text-blue-500">{value}</p>
          </section>
        </a>
      ))}
    </div>
  );
};

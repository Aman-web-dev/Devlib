import { ThemeContext } from "@/utils (Context)/ThemeContext";
import { useContext } from "react";

function ArticleCard({ data }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="max-w-96 h-fit bg-extraDark">
      <div>
        <img
          src={data.youtubeLink}
          alt={data.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="py-2 px-4">
        <span
          className={`${
            theme === "dark" && "text-gray-300"
          } text-black text-xl`}
        >
          {data?.name}
        </span>
      </div>
    </div>
  );
}

export default ArticleCard;

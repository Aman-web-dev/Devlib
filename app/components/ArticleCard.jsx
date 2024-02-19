import Youtube from "./YoutubeComponent";
function ArticleCard({ data }) {
  console.log("data:", data?.name);
  return (
    <div className="">
      <span>{data.youtubeLink}</span>
      <div>
        <Youtube link={data.youtubeLink} />
      </div>
      <span className="text-black text-2xl">{data?.name}</span>
    </div>
  );
}

export default ArticleCard;

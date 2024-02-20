import YoutubeArticlesDetailsPage from "@/app/components/sections/YoutubeArticlesDetailsPage";

function Page({ params }) {
  return (
    <div>
      <YoutubeArticlesDetailsPage id={params.id} />
    </div>
  );
}

export default Page;

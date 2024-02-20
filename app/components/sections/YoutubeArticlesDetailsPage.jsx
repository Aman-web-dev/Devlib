import Youtube from "../YoutubeComponent";
import { youtubeLink } from "@/utils (Context)/constants";

function YoutubeArticlesDetailsPage({ id }) {
  return (
    <section>
      <Youtube link={youtubeLink + id} />
    </section>
  );
}

export default YoutubeArticlesDetailsPage;

import Youtube from "../YoutubeComponent";
import { youtubeLink } from "@/utils (Context)/constants";
import { useParams } from "next/navigation";

function YoutubeVideoPage() {
  const id = useParams();
  console.log(id);
  return (
    <section>
      <Youtube link={youtubeLink + id} />
    </section>
  );
}

export default YoutubeVideoPage;

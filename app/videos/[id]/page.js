"use client";
import Youtube from "@/app/videos/assets/YoutubeComponent";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <Youtube link={id} />
    </div>
  );
}

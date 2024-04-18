import Image from "next/image";

function CommentComponent({ data }) {
  return (
    <div className="flex gap-2 w-full items-center my-4">
      <div>
        <Image
          src={data?.profilepicture}
          alt={data?.name}
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>
      <div>
        <span>{data?.name}</span>
        <p>{data?.comment}</p>
      </div>
    </div>
  );
}

export default CommentComponent;

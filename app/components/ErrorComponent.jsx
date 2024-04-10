export default function ErrorComponent({ status, statusText }) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border rounded-xl flex flex-col px-4 py-4">
        <span className="font-bold md:text-4xl text-2xl">
          Error code: {status}
        </span>
        <span className="font-bold md:text-4xl text-2xl">
          Error: {statusText}
        </span>
      </div>
    </div>
  );
}

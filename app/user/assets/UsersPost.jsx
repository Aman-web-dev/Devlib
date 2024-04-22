
const UerPost = () => {
    return (
      <div className="border py-4 px-4  ">
        <section className="flex items-center gap-4 my-2">
          <section className="  flex items-center">{/* <BookIcon /> */}</section>
  
          <h1 className=" dark:text-gray-200 font-bold">@My first Project</h1>
        </section>
        <section className="flex flex-row gap-4 my-2x">
          <h1 className=" dark:text-gray-200 font-bold">project</h1>
          <h1 className="text-xs  text-green-700 border border-green-400 rounded-full pt-1  px-2">
            Private
          </h1>
        </section>
        <h1 className="text-sm dark:text-[#717e8b] ">
          Uploaded on Date: 12/05/2023
        </h1>
      </div>
    );
  };


  export default UerPost
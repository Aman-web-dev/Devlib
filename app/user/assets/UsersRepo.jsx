
function UserRepo() {
  return (
    <div>
         <div
        id="repoContainer"
        className="border mx-1  my-1   px-4 py-2 rounded-md shadow-lg dark:shadow-md dark:shadow-gray-700"
      >
        <section className="flex gap-2 my-2">
          {/* <FileIcon Height={20} Width={20} /> */}
          <h1 className="text-green-400 font-bold">UserRepo</h1>
        </section>
        <p className="text-sm font-bold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, sed
          fugit reprehenderit reiciendis fugiat tempore ea cumque nihil at
          laboriosam id nisi, odit eos aliquid dignissimos dolore non aliquam.
          Iste!
        </p>
        <section id="tags" className="flex flex-wrap gap-2">
          <h1 className="text-red-400 mt-2">#React</h1>
          <h1 className="text-blue-400 mt-2">#React</h1>
          <h1 className="text-green-400 mt-2">#React</h1>
          <h1 className="text-yellow-400 mt-2">#React</h1>
        </section>
      </div>
    </div>
  )
}

export default UserRepo
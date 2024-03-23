import React from 'react'
import FileIcon from '../components/search/assests/fileIcon'

function page() {

  return (
    <div className='flex md:flex-row flex-col'>



      <div id="profile" className="flex flex-col md:h-full md:w-2/4">

        <section id='userProfilePhotoAndDetails' className='flex flex-col   p-4'>
          <img src='https://img.freepik.com/free-psd/man-with-thumbs-up_1154-467.jpg?t=st=1711171878~exp=1711175478~hmac=d363f0a905b253a34ff6cef4497910476bfd6af075c9f183e977aaa4d5a8621c&w=826' className=' md:h-[25vw] md:w-[25vw] w-[300px] h-[300px] object-cover  mx-auto ' style={{ borderRadius: "100%" }} />
          <h2 className='text-3xl'>John Wick</h2>
          <h2 className='text-2xl font-thin' >User Name</h2>
          <h2 className=' mt-4 ' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, libero earum. Iste officia ut totam culpa numquam cumque asperiores fugit!</h2>
        </section>




       





      </div>



      <div id="otherDetails" className='mx-4  md:w-full mt-4'>

        Pinned
        <section className='grid md:grid-cols-2 grid-cols-1 mx-auto w-full '>
          <RepoContainer />
          <RepoContainer />
          <RepoContainer />
          <RepoContainer />
        </section>
        hi
      </div>
    </div>
  )
}

export default page




const RepoContainer = () => {
  return (
    <div id='repoContainer' className='border dark:bg-[#374151] my-1  mx-2 px-4 py-2 rounded-md'>
      <section className="flex gap-2 my-2">
        <FileIcon Height={20} Width={20} />
        <h1 className='text-green-400'>Repo</h1>
      </section>
      <p className='text-sm'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, sed fugit reprehenderit reiciendis fugiat tempore ea cumque nihil at laboriosam id nisi, odit eos aliquid dignissimos dolore non aliquam. Iste!
      </p>
      <section id='tags' className='flex flex-wrap gap-2'>
        <h1 className='text-red-400 mt-2'>#React</h1>
        <h1 className='text-blue-400 mt-2'>#React</h1>
        <h1 className='text-green-400 mt-2'>#React</h1>
        <h1 className='text-yellow-400 mt-2'>#React</h1>
      </section>
    </div>
  )
}
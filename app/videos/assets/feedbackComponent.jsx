import React, { useState } from 'react'

function FeedbackComponent() {

    const [feedbackIndex,setFeedbackIndex]=useState(0)

const feedbacks=[


    {
        user:"Aman Kumar",
        userProfilePic:"https://img.freepik.com/free-photo/young-model-red-shirt-wearing-eyeglasses-crossing-his-arms_114579-17446.jpg?w=740",
        feedBack:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque molestiae dolore ratione mollitia sequi, libero aliquam voluptatum eveniet soluta omnis ipsam, obcaecati natus magni ex, sint enim doloribus sed quibusdam.",
        dateOfFeedback:"12/24/2023",
        likesOnfeedback:"12",
        dislikesOnfeedback:"14"
    },
   {
        user:"Shanu Kumar",
        userProfilePic:"https://img.freepik.com/free-photo/young-model-red-shirt-wearing-eyeglasses-crossing-his-arms_114579-17446.jpg?w=740",
        feedBack:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque molestiae dolore ratione mollitia sequi, libero aliquam voluptatum eveniet soluta omnis ipsam, obcaecati natus magni ex, sint enim doloribus sed quibusdam.",
        dateOfFeedback:"12/24/2023",
        likesOnfeedback:"12",
        dislikesOnfeedback:"14"
    },
   {
        user:"Ankish Kumar",
        userProfilePic:"https://img.freepik.com/free-photo/young-model-red-shirt-wearing-eyeglasses-crossing-his-arms_114579-17446.jpg?w=740",
        feedBack:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque molestiae dolore ratione mollitia sequi, libero aliquam voluptatum eveniet soluta omnis ipsam, obcaecati natus magni ex, sint enim doloribus sed quibusdam.",
        dateOfFeedback:"12/24/2023",
        likesOnfeedback:"12",
        dislikesOnfeedback:"14"
    },
 {
        user:"Bala Kumar",
        userProfilePic:"https://img.freepik.com/free-photo/young-model-red-shirt-wearing-eyeglasses-crossing-his-arms_114579-17446.jpg?w=740",
        feedBack:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque molestiae dolore ratione mollitia sequi, libero aliquam voluptatum eveniet soluta omnis ipsam, obcaecati natus magni ex, sint enim doloribus sed quibusdam.",
        dateOfFeedback:"12/24/2023",
        likesOnfeedback:"12",
        dislikesOnfeedback:"14"
    },
    {
        user:"Nipun Kumar",
        userProfilePic:"https://img.freepik.com/free-photo/young-model-red-shirt-wearing-eyeglasses-crossing-his-arms_114579-17446.jpg?w=740",
        feedBack:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque molestiae dolore ratione mollitia sequi, libero aliquam voluptatum eveniet soluta omnis ipsam, obcaecati natus magni ex, sint enim doloribus sed quibusdam.",
        dateOfFeedback:"12/24/2023",
        likesOnfeedback:"12",
        dislikesOnfeedback:"14"
    },
   {
        user:"Abhishek Kumar",
        userProfilePic:"https://img.freepik.com/free-photo/young-model-red-shirt-wearing-eyeglasses-crossing-his-arms_114579-17446.jpg?w=740",
        feedBack:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque molestiae dolore ratione mollitia sequi, libero aliquam voluptatum eveniet soluta omnis ipsam, obcaecati natus magni ex, sint enim doloribus sed quibusdam.",
        dateOfFeedback:"12/24/2023",
        likesOnfeedback:"12",
        dislikesOnfeedback:"14"
    }


]



  return (
    <div className='ml-4 w-[80%] mx-auto '>

        <button className='w-20 h-100 ' onClick={()=>{setFeedbackIndex(prev=>prev!=0?prev-1:0)}}>Previous</button>
         
        <button className='w-20 h-100 bg-blue-400' onClick={()=>{setFeedbackIndex(prev=>prev==feedbacks.length-1?0:prev+1)}}>Next</button>
    


      {
        feedbacks?.map((elem,index)=>{

            return(

             feedbackIndex==index?   
            <div id={index} key={index}>


                <section className='flex gap-4 py-4'>



                 <section>  
                <div className='flex items-center gap-2 '>
                <img className='size-12 rounded-full' src={elem.userProfilePic}></img>
                <p className='font-bold'>{elem.user}</p>
                </div>
                <section className='flex gap-5 my-2'>  
                <p>LIKES:{elem.likesOnfeedback}</p>
                <p>DISLIKES:{elem.dislikesOnfeedback}</p>
                </section>
                </section>


                <p>{elem.feedBack}</p>
               

                </section>

            </div>:""
            )
        })
      }
    </div>
  )
}

export default FeedbackComponent

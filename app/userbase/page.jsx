'use client'

import { useState } from "react"


const page=()=>{
    const [search,setSearch]=useState(null)
    const [result,setResult]=useState(null)

    return(
        <div>
         <span>Put some Value=</span>   
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} className="h-5" placeholder="search User"/>

        

      <p>{search?search:""}</p>
      <p>{result?result:""}</p>
    

        </div>
    )

}


export default page
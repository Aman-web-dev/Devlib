'use client'

import React,{useEffect} from 'react'


const client_id="d8c29a8e39a37033822a"
function page() {

    function loginWithGithub(){
        window.location.assign("https://github.com/login/oauth/authorize?client_id="+ client_id)
    }


    useEffect(()=>{
         
        const queryString=window.location.search
        const urlParams=new URLSearchParams(queryString);
        const codeParam=urlParams.get('code');
        console.log(codeParam)
        console.log(codeParam)
    },[])



  return (
    <div>
      <button onClick={loginWithGithub}>
        Login With Github 
      </button>
    </div>
  )
}

export default page

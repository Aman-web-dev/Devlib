import React from 'react'
import { auth } from './firebase'

import { createUserWithEmailAndPassword,GoogleAuthProvider,GithubAuthProvider,signInWithPopup } from 'firebase/auth';


export const doCreateUserWithEmailAndPassword=async (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
}



export const doSignInWithGoogle=async ()=>{


   console.log("Came to Google Signin")
    const provider = new GoogleAuthProvider();
    const result =await signInWithPopup(auth,provider);
    // result.user
    const user= result.user

    return user

}

export const doSignInWithGithub=async()=>{

const provider = new GithubAuthProvider();

console.log("hello")

 await signInWithPopup(auth, provider).then((result) => {

    console.log(result)
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    console.log(credential)

    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    console.log(error)
    // Handle Errors here.
    const errorCode = error.code;
    console.log(errorCode)
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(error);
    // ...
  });



}

export const doSignOut=()=>{
    return auth.signOut();

}
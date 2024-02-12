import React from 'react'
import { auth } from './firebase'

import { createUserWithEmailAndPassword,GoogleAuthProvider,GithubAuthProvider } from 'firebase/auth';


export const doCreateUserWithEmailAndPassword   =async (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
}



export const doSignInWithGoogle=async ()=>{

    const provider = new GoogleAuthProvider();
    const result =await signInWithPopup(auth,provider);
    // result.user
    const user= result.user

    return user

}

export const doSignInWithGithub=async()=>{

    

}

export const doSignOut=()=>{
    return auth.signOut();

}
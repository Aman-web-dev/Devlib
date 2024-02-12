import React from 'react'
import { auth } from './firebase'

import { createUserWithEmailAndPassword,GoogleAuthProvider } from 'firebase/auth';






export const doCreateUserWithEmailAndPassword   =async (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
}





export const doSignInWithGoogle=async ()=>{

    const provider = new GoogleAuthProvider();
    const result =await signInWithPopup(auth,provider);
    // result.user
    return result

}


export const doSignOut=()=>{
    return auth.signOut();

}
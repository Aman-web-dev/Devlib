'use client'



import { onAuthStateChanged } from 'firebase/auth';
import {auth} from '../../app/firebase/firebase'
import React,{ useState,useContext,useEffect } from 'react';


const AuthContext = React.createContext();


export  function useAuth(){
    return useContext(AuthContext)
}





export function AuthProvider({children}){

    const [currentUser,setCurrentUser]=useState(null)
    const [userLoggedIn,setUserLoggedIn]=useState(false)
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
       const unsubscribe=onAuthStateChanged(auth,initializeUser)
       return unsubscribe
    },[])


    async function initializeUser(){
           if(user){
            setCurrentUser({...user});
            setUserLoggedIn(true)
           }else{
            currentUser(null);
            setUserLoggedIn(false)
           }
           setLoading(false)
    }


    const value={
        currentUser,
        userLoggedIn,
        loading
    }

    return (
   <AuthContext.Provider value={value}>
    {!loading && children}
   </AuthContext.Provider>
    )
}
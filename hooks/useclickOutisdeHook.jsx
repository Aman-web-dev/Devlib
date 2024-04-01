import React, { useEffect, useRef } from "react";

function useclickOutisdeHook(elementRef, callback ,visiblity) {
  const callBackRef = useRef(null);
  callBackRef.current = callback;

  const callBackFunction = function (e) {
    console.log("i have to run now")
    if (e.target != elementRef.current && callBackRef.current) {

      callBackRef.current();
    }
  };


  console.log(visiblity)


    useEffect(() => {
  if(visiblity==true){

    console.log("it was false now click here and there")

      document.addEventListener("click", callBackFunction);
      return () => {
        document.removeEventListener("click", callBackFunction);
      };
    }
    }, [elementRef,callBackRef,visiblity]);
}

export default useclickOutisdeHook;

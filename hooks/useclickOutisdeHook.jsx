import React, { useEffect, useRef } from "react";

function useclickOutisdeHook(elementRef, callback, visiblity) {
  const callBackRef = useRef(null);
  callBackRef.current = callback;

  const callBackFunction = function (e) {
    if (!elementRef.current.contains(e.target) && callBackRef.current) {
     
      console.log("I ran",elementRef.current.contains(e.target) ,!elementRef.current.contains(e.target) && callBackRef.current)
      console.log(elementRef.current,e.target)
      callBackRef.current();
    }
  };


  useEffect(() => {
    if (visiblity == true) {
      document.addEventListener("click", callBackFunction);
      return () => {
        document.removeEventListener("click", callBackFunction);
      };
    }
  }, [elementRef, visiblity]);
}

export default useclickOutisdeHook;

import React, { useEffect, useRef } from "react";

function useclickOutisdeHook(elementRef, callback, visiblity) {
  const callBackRef = useRef(null);
  callBackRef.current = callback;

  const callBackFunction = function (e) {
    if (!elementRef.current.contains(e.target) && callBackRef.current) {
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
  }, [elementRef, callBackRef, visiblity]);
}

export default useclickOutisdeHook;

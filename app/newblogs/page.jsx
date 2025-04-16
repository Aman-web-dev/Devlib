'use client'
import React, { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const page = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      new Quill(editorRef.current, {
        theme: 'snow',
      });
    }
  }, []);

  return <div ref={editorRef} style={{ height: '400px' }} />;
};

export default page;

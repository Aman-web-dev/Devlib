"use client";

import React, { useState } from "react";

function Page() {
  const [elements,setElements]=useState([])



  return (
    <div className="min-h-screen">
      <section id="toolbar" className="w-full bg-black ">
        <ul className="flex gap-8">
          <li>Heading</li>
          <li>Paragraph</li>
          <li>Image</li>
          <li>Small Heading</li>
        </ul>
      </section>
      <div className="w-[80%] mx-auto">
        <section className="flex flex-row mb-6 my-8 gap-4 items-center text-black bg-white h-screen">
          {elements}
        </section>
      </div>
    </div>
  );
}

export default Page;

import React from "react";

function Youtube({ link }) {
  return (
    <div className="video-container">
      <iframe
        width="560"
        height="315"
        src={link}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{ border: "0" }}
      ></iframe>
    </div>
  );
}

export default Youtube;

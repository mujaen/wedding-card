import React from "react";

const videoSrc = "/assets/sample.mp4";

const VideoPlayer = () => (
  <video
    src={videoSrc}
    autoPlay
    muted
    loop
    playsInline
    style={{
      width: "100%",
      height: "auto",
      display: "block",
      objectFit: "cover",
    }}
  />
);

export default React.memo(VideoPlayer);

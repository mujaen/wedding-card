import React, { useRef } from "react";

const videoSrc = "/assets/sample2.mp4";

const VideoPlayer = () => {
  const videoRef = useRef(null);

  return (
    <video
      src={videoSrc}
      autoPlay
      muted
      playsInline
      onEnded={() => {
        if (videoRef.current) {
          videoRef.current.pause();
        }
      }}
      style={{
        width: "100%",
        height: "auto",
        display: "block",
        objectFit: "cover",
      }}
    />
  );
};

export default React.memo(VideoPlayer);

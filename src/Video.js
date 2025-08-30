import React, { useRef, useEffect, useState } from "react";
import mainImage from "./assets/images/main.png";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const videoSrc = "/assets/sample.mp4";
  const [shouldShowImage, setShouldShowImage] = useState(false);

  useEffect(() => {
    const isWindows = navigator.userAgent.includes("Windows");
    if (isWindows) {
      setShouldShowImage(true);
    }
  }, []);

  const handleVideoError = () => {
    setShouldShowImage(true);
  };

  if (shouldShowImage) {
    return (
      <img className="max-w-[600px] w-full" src={mainImage} alt="메인 이미지" />
    );
  }

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
      onError={handleVideoError}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        objectFit: "cover",
      }}
    />
  );
};

export default React.memo(VideoPlayer);

import React, { useRef, useEffect, useState } from "react";
import mainImage from "./assets/images/main.png";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const videoSrc = "/assets/sample.mp4";
  const [shouldShowImage, setShouldShowImage] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    const isWindows = userAgent.includes("Windows");
    //const isAndroid = userAgent.includes("Android");
    //const isSamsung = /SM-|Samsung/i.test(userAgent);

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
        height: "auto",
        display: "block",
        objectFit: "cover",
      }}
    />
  );
};

export default React.memo(VideoPlayer);

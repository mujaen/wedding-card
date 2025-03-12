import React, { useEffect } from "react";

function App() {
  const options = {
    root: null, // viewport
    rootMargin: "20px",
    threshold: 0.5, // 50%가 viewport에 들어와 있어야 callback 실행
  };

  const observer = new IntersectionObserver((entries) => {
    console.log("여기");
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add("inView");
      } else {
        entry.target.classList.remove("inView");
      }
    });
  }, options);

  useEffect(() => {
    const boxList = document.querySelectorAll(".title");

    boxList.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="bg-gray-500">
      <div className="title"></div>
      <div className="title"></div>
      <div className="title"></div>
      <div className="title"></div>
      <div className="title"></div>
      <div className="title"></div>
      <div className="title"></div>
      <div className="title"></div>
      <div className="title"></div>
      <div className="title"></div>
      <div className="title"></div>
      <div className="title"></div>
      <div className="title"></div>
    </div>
  );
}

export default App;

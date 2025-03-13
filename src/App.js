import React, { useEffect } from "react";
import mainImage from "./assets/images/main.jpeg";

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
    const boxList = document.querySelectorAll(".fade");

    boxList.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section>
      <div className="flex justify-center relative bg-white">
        <img
          className="max-w-[768px] w-full"
          src={mainImage}
          alt="메인 이미지"
        />
        <p className="fade dancing-script absolute top-[80px] left-0 right-0 text-center text-xl text-white-900">
          We're Getting Married
        </p>
        <p className="fade eb-garamond absolute top-[110px] left-0 right-0 text-center text-3xl text-white-900">
          김민호 & 이혜진
        </p>
        <p className="fade eb-garamond absolute top-[160px] left-0 right-0 text-center text-base text-white-900">
          2025.12.06. SAT 14:30 PM
        </p>
        <p className="fade eb-garamond absolute top-[186px] left-0 right-0 text-center text-xs text-white-900">
          THE VENUEG SEOUL
        </p>
      </div>
      <div className="bg-gray-500"></div>
    </section>
  );
}

export default App;

import React, { useState, useEffect } from "react";

import mainImage from "./assets/images/main.jpeg";
import broomImage from "./assets/images/broom.png";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const options = {
    root: null, // viewport
    rootMargin: "20px",
    threshold: 0.5, // 50%가 viewport에 들어와 있어야 callback 실행
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add("inView");
      }
      // else {
      //   entry.target.classList.remove("inView");
      // }
    });
  }, options);

  const handleMenuClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const boxList = document.querySelectorAll(".fade");

    boxList.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section>
      <div className="flex justify-center relative bg-white shadow-sm">
        <img
          className="max-w-[600px] w-full"
          src={mainImage}
          alt="메인 이미지"
        />
        <p className="dancing-script absolute top-[80px] left-0 right-0 text-center text-xl text-gray-900">
          We're Getting Married
        </p>
        <p className="arita-buri absolute top-[116px] left-0 right-0 text-center text-[26px] tracking-widest text-gray-900">
          김민호<span className="eb-garamond px-4">&amp;</span>이혜진
        </p>
        <p className="eb-garamond absolute top-[160px] left-0 right-0 text-center text-lg text-gray-900">
          2025.12.06. SAT 14:40 PM
        </p>
        <p className="eb-garamond absolute top-[186px] left-0 right-0 text-center text-base text-gray-900">
          THE VENUEG SEOUL
        </p>
      </div>
      <div className="menu lg:flex lg:px-4 justify-between text-primary-500">
        <h1 className="flex justify-between items-center arita-buri text-xl  lg:border-none border-b">
          <a href="/" className="flex py-5 px-4">
            민호 &amp; 혜진
          </a>
          <a
            href="#"
            className="p-[22px] lg:hidden text-[0px]"
            onClick={handleMenuClick}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.5 10.5H1.5C0.671578 10.5 0 11.1716 0 12C0 12.8284 0.671578 13.5 1.5 13.5H22.5C23.3284 13.5 24 12.8284 24 12C24 11.1716 23.3284 10.5 22.5 10.5Z"
                fill="#EB7B7B"
              />
              <path
                d="M1.5 6.50001H22.5C23.3284 6.50001 24 5.82843 24 5C24 4.17158 23.3284 3.5 22.5 3.5H1.5C0.671578 3.5 0 4.17158 0 5C0 5.82843 0.671578 6.50001 1.5 6.50001Z"
                fill="#EB7B7B"
              />
              <path
                d="M22.5 17.5H1.5C0.671578 17.5 0 18.1716 0 19C0 19.8284 0.671578 20.5 1.5 20.5H22.5C23.3284 20.5 24 19.8284 24 19C24 18.1716 23.3284 17.5 22.5 17.5Z"
                fill="#EB7B7B"
              />
            </svg>
          </a>
        </h1>

        <div className="relative">
          <div
            className={`lg:block lg:static absolute w-full z-50 transition-all duration-300 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul className="lg:flex">
              <li className="arita-buri text-sm  lg:border-none border-b bg-white">
                <a
                  href="/"
                  className="flex py-6 px-4 hover:bg-primary-100 lg:hover:bg-white hover:text-primary-700"
                >
                  신랑 &amp; 신부
                </a>
              </li>
              <li className=" arita-buri text-sm  lg:border-none border-b bg-white">
                <a
                  href="/"
                  className="flex py-6 px-4 hover:bg-primary-100 lg:hover:bg-white hover:text-primary-700"
                >
                  우리의 이야기
                </a>
              </li>
              <li className=" arita-buri text-sm  lg:border-none border-b bg-white">
                <a
                  href="/"
                  className="flex py-6 px-4 hover:bg-primary-100 lg:hover:bg-white hover:text-primary-700"
                >
                  사진첩
                </a>
              </li>
              <li className=" arita-buri text-sm  lg:border-none border-b bg-white">
                <a
                  href="/"
                  className="flex py-6 px-4 hover:bg-primary-100 lg:hover:bg-white hover:text-primary-700"
                >
                  참석정보
                </a>
              </li>
              <li className=" arita-buri text-sm  lg:border-none border-b bg-white">
                <a
                  href="/"
                  className="flex py-6 px-4 hover:bg-primary-100 lg:hover:bg-white hover:text-primary-700"
                >
                  마음 전하실 곳
                </a>
              </li>
              <li className=" arita-buri text-sm  lg:border-none border-b bg-white">
                <a
                  href="/"
                  className="flex py-6 px-4 hover:bg-primary-100 lg:hover:bg-white hover:text-primary-700"
                >
                  오시는 길
                </a>
              </li>
              <li className="arita-buri text-sm  lg:border-none border-b bg-white">
                <a
                  href="/"
                  className="flex py-6 px-4 hover:bg-primary-100 lg:hover:bg-white hover:text-primary-700"
                >
                  방명록
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center py-20 bg-primary-100">
        <h3 className="fade sub-title text-primary-300">INVITATION</h3>
        <h2 className="fade main-title text-gray-800 py-4">
          소중한 분들을 초대합니다
        </h2>
        <div class="fade arita-buri text-center text-[18px] leading-9">
          곁에 있을 때<br />
          가장 나다운 모습이 되게 하는 사람,
          <br />
          꿈을 펼칠 수 있도록
          <br />
          서로에게 날개가 되어줄 한 사람을 만나
          <br />
          삶의 여행을 함께 떠나려 합니다.
          <br />
          <br />
          언제나 저희 곁에 있어주신 소중한 분들과
          <br />
          함께 첫 시작을 내딛고 싶습니다.
          <br />
          귀한 걸음으로 축복해 주시면
          <br />큰 기쁨으로 간직하겠습니다.
        </div>
        <div className="fade pt-8 text-[18px]">
          <div className="py-1">
            김해덕&nbsp;&nbsp;·&nbsp;&nbsp;박경자&nbsp;&nbsp;&nbsp;의&nbsp;&nbsp;차남
            <span className="pl-7 arita-buri text-[22px] font-700">민호</span>
          </div>
          <div className="py-1">
            이영우&nbsp;&nbsp;·&nbsp;&nbsp;최영신&nbsp;&nbsp;&nbsp;의&nbsp;&nbsp;막내
            <span className="pl-7 arita-buri text-[22px] font-700">혜진</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center py-20 bg-white">
        <h3 className="fade sub-title text-primary-300">WEDDING DAY</h3>
        <h2 className="fade flex flex-col items-center main-title2 text-gray-800 py-4">
          <span>2025.12.06. 토요일 오후 2:40</span>
          <span>더 베뉴지 서울 2층 베뉴지홀</span>
        </h2>
        <div className="fade calendar arita-buri border-y py-5 mt-4">
          <div className="calendar-header">
            <span className="text-red-700">S</span>
            <span>M</span>
            <span>T</span>
            <span>W</span>
            <span>T</span>
            <span>F</span>
            <span>S</span>
          </div>
          <div>
            <span></span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span className="bg-red-400 rounded-full text-white">6</span>
          </div>
          <div>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
            <span>11</span>
            <span>12</span>
            <span>13</span>
          </div>
          <div>
            <span>14</span>
            <span>15</span>
            <span>16</span>
            <span>17</span>
            <span>18</span>
            <span>19</span>
            <span>20</span>
          </div>
          <div>
            <span>21</span>
            <span>22</span>
            <span>23</span>
            <span>24</span>
            <span>25</span>
            <span>26</span>
            <span>27</span>
          </div>
          <div>
            <span>28</span>
            <span>29</span>
            <span>30</span>
            <span>31</span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center py-20 bg-white">
        <h3 className="sub-title text-primary-300">GROOM &amp; BRIDE</h3>
        <h2 className="flex flex-col items-center main-title text-gray-800 py-4">
          신랑 &amp; 신부를 소개합니다
        </h2>
        <div className="flex lg:flex-row flex-col gap-[40px] py-[40px]">
          <div className="lg:max-w-[400px] lg:mx-0 mx-[50px]">
            <img
              className="w-full rounded-xl overflow-hidden"
              src={broomImage}
              alt="신랑 이미지"
            />
            <div className="flex justify-center items-baseline gap-[20px] pt-[30px] py-[20px]">
              <span className="text-[15px] arita-buri text-secondary-500">
                신랑
              </span>
              <span className="text-2xl arita-buri-bold tracking-wider">
                김민호
              </span>
            </div>
            <div className="arita-buri leading-8 text-[15px]">
              헬스케어 서비스를 만들고 싶어 약학을 공부했습니다. 프로그래밍
              동아리에서 지금의 신랑을 만나 창업을 함께하며 평생의 짝꿍이라는
              확신이 생겼어요. 함께한 시간들이 행복했던 만큼 앞으로의 날들이
              기대됩니다. 서로 배려하고 사랑하며 예쁘게 살겠습니다.
            </div>
          </div>
          <div className="lg:max-w-[400px] lg:mx-0 mx-[50px]">
            <img
              className="w-full rounded-xl overflow-hidden"
              src={broomImage}
              alt="신부 이미지"
            />
            <div className="flex justify-center items-baseline gap-[20px] pt-[30px] py-[20px]">
              <span className="text-[15px] arita-buri text-primary-500">
                신부
              </span>
              <span className="text-2xl arita-buri-bold tracking-wider">
                이혜진
              </span>
            </div>
            <div className="arita-buri leading-8 text-[15px]">
              헬스케어 서비스를 만들고 싶어 약학을 공부했습니다. 프로그래밍
              동아리에서 지금의 신랑을 만나 창업을 함께하며 평생의 짝꿍이라는
              확신이 생겼어요. 함께한 시간들이 행복했던 만큼 앞으로의 날들이
              기대됩니다. 서로 배려하고 사랑하며 예쁘게 살겠습니다.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center py-20 bg-primary-100">
        <h3 className="fade sub-title text-primary-300">OUR STORY</h3>
        <h2 className="fade main-title text-gray-800 py-4">우리의 이야기</h2>
        <div className="flex lg:flex-row flex-col">
          <img
            className="w-full rounded-xl overflow-hidden"
            src={broomImage}
            alt="이야기1 이미지"
          />
        </div>
      </div>
    </section>
  );
}

export default App;

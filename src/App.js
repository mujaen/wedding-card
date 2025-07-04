import React, { useState, useEffect } from "react";

import mainImage from "./assets/images/main.jpg";
import mainImage3 from "./assets/images/main3.jpg";
import mainImage4 from "./assets/images/main4.jpg";
import broomImage from "./assets/images/broom.png";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const options = {
    root: null, // viewport
    rootMargin: "20px",
    threshold: 0.5, // 50%가 viewport에 들어와 있어야 callback 실행
  };

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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

    const targetDate = new Date("2025-12-06T14:40:00");

    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const totalSeconds = Math.floor(diff / 1000);
      const days = Math.floor(totalSeconds / (3600 * 24));
      const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown(); // 초기 실행
    const timer = setInterval(updateCountdown, 1000); // 1초마다 갱신

    return () => clearInterval(timer);
  }, []);

  return (
    <section>
      <div className="flex justify-center relative bg-white shadow-sm">
        <img
          className="max-w-[600px] w-full"
          src={mainImage}
          alt="메인 이미지"
        />
      </div>
      <div className="flex justify-center relative bg-white shadow-sm">
        <img
          className="max-w-[600px] w-full"
          src={mainImage3}
          alt="메인 이미지"
        />
      </div>
      <div className="flex justify-center relative bg-white shadow-sm">
        <img
          className="max-w-[600px] w-full"
          src={mainImage4}
          alt="메인 이미지"
        />
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
      <div className="flex flex-col items-center py-20 bg-gray-50">
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
        <div className="fade flex mt-8">
          <span className="flex items-center gap-[3px]">
            <span>민호</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.97449 12.9791C4.01296 11.4758 1.33334 8.99241 1.33334 6.64436C1.33334 2.72175 5.00011 1.25725 8 4.28741C10.9999 1.25725 14.6667 2.72175 14.6667 6.64434C14.6667 8.99247 11.9871 11.4758 10.0255 12.9791C9.13754 13.6597 8.69354 14 8 14C7.30647 14 6.86247 13.6597 5.97449 12.9791Z"
                fill="#F87171"
              />
            </svg>
            <span>혜진의</span>
            <span>결혼식까지</span>
          </span>
        </div>
        <div className="fade flex items-center justify-center w-[350px] lg:w-[440px] mt-4 gap-[10px] lg:gap-[20px]">
          <div className="flex-1 text-center rounded-md py-4 bg-white shadow-lg">
            <p className="text-[18px] lg:text-[24px] dancing-script lg:pb-1">
              {timeLeft.days}
            </p>
            <span className="text-[11px] lg:text-[12px] text-gray-400 arita-buri">
              DAYS
            </span>
          </div>
          <div className="flex-1 text-center rounded-md py-4 bg-white shadow-lg">
            <p className="text-[18px] lg:text-[24px] dancing-script lg:pb-1">
              {timeLeft.hours}
            </p>
            <span className="text-[11px] lg:text-[12px] text-gray-400 arita-buri">
              HOURS
            </span>
          </div>
          <div className="flex-1 text-center rounded-md py-4 bg-white shadow-lg">
            <p className="text-[18px] lg:text-[24px] dancing-script lg:pb-1">
              {timeLeft.minutes}
            </p>
            <span className="text-[11px] lg:text-[12px] text-gray-400 arita-buri">
              MINUTES
            </span>
          </div>
          <div className="flex-1 text-center rounded-md py-4 bg-white shadow-lg">
            <p className="text-[18px] lg:text-[24px] dancing-script lg:pb-1">
              {timeLeft.seconds}
            </p>
            <span className="text-[11px] lg:text-[12px] text-gray-400 arita-buri">
              SECONDS
            </span>
          </div>
        </div>
        <a
          href="/"
          className="fade flex justify-between items-center border border-gray-300 hover:border-gray-600 rounded-[8px] gap-[10px] mt-10 py-4 px-16"
        >
          <span className="w-[18px] h-[18px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full pointer-events-none"
            >
              <g clip-path="url(#clip0_406_1953)">
                <path
                  d="M11.9999 0.0424805C9.35386 0.0453916 6.817 1.09776 4.94586 2.96871C3.07472 4.83966 2.0221 7.37642 2.01892 10.0225C2.01892 12.5925 4.00892 16.6145 7.93392 21.9765C8.40118 22.6166 9.01298 23.1374 9.71952 23.4964C10.4261 23.8554 11.2074 24.0425 11.9999 24.0425C12.7924 24.0425 13.5738 23.8554 14.2803 23.4964C14.9869 23.1374 15.5987 22.6166 16.0659 21.9765C19.9909 16.6145 21.9809 12.5925 21.9809 10.0225C21.9777 7.37642 20.9251 4.83966 19.054 2.96871C17.1828 1.09776 14.646 0.0453916 11.9999 0.0424805ZM11.9999 14.0005C11.2088 14.0005 10.4354 13.7659 9.77764 13.3264C9.11984 12.8868 8.60715 12.2621 8.3044 11.5312C8.00165 10.8003 7.92244 9.99605 8.07678 9.22012C8.23112 8.4442 8.61208 7.73146 9.17149 7.17205C9.7309 6.61264 10.4436 6.23168 11.2196 6.07734C11.9955 5.923 12.7998 6.00221 13.5307 6.30496C14.2616 6.60771 14.8863 7.1204 15.3258 7.7782C15.7653 8.436 15.9999 9.20936 15.9999 10.0005C15.9999 11.0613 15.5785 12.0788 14.8283 12.8289C14.0782 13.5791 13.0608 14.0005 11.9999 14.0005Z"
                  fill="#333333"
                />
              </g>
            </svg>
          </span>

          <span className="text-[18px]">위치 안내 바로가기</span>
        </a>
      </div>
      <div className="flex flex-col items-center py-20 bg-white">
        <h3 className="fade sub-title text-primary-300">GROOM &amp; BRIDE</h3>
        <h2 className="fade flex flex-col items-center main-title text-gray-800 py-4">
          신랑 &amp; 신부를 소개합니다
        </h2>
        <div className="flex lg:flex-row flex-col gap-[40px] py-[10px] lg:py-[40px]">
          <div className="lg:max-w-[400px] lg:mx-0 mx-[50px]">
            <img
              className="fade w-full rounded-xl overflow-hidden"
              src={broomImage}
              alt="신랑 이미지"
            />
            <div className="fade flex justify-center items-baseline gap-[20px] pt-[30px] py-[20px]">
              <span className="text-[15px] arita-buri text-secondary-500">
                신랑
              </span>
              <span className="text-2xl arita-buri-bold tracking-wider">
                김민호
              </span>
            </div>
            <div className="fade arita-buri leading-8 text-[15px]">
              헬스케어 서비스를 만들고 싶어 약학을 공부했습니다. 프로그래밍
              동아리에서 지금의 신랑을 만나 창업을 함께하며 평생의 짝꿍이라는
              확신이 생겼어요. 함께한 시간들이 행복했던 만큼 앞으로의 날들이
              기대됩니다. 서로 배려하고 사랑하며 예쁘게 살겠습니다.
            </div>
          </div>
          <div className="lg:max-w-[400px] lg:mx-0 mx-[50px]">
            <img
              className="fade w-full rounded-xl overflow-hidden"
              src={broomImage}
              alt="신부 이미지"
            />
            <div className="fade flex justify-center items-baseline gap-[20px] pt-[30px] py-[20px]">
              <span className="text-[15px] arita-buri text-primary-500">
                신부
              </span>
              <span className="text-2xl arita-buri-bold tracking-wider">
                이혜진
              </span>
            </div>
            <div className="fade arita-buri leading-8 text-[15px]">
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
        <div className="py-[10px] lg:py-[40px]">
          <div className="fade flex lg:flex-row flex-col relative justify-center lg:py-[50px]">
            <div className="lg:w-[450px] lg:mx-0 mx-[50px] lg:pr-[100px] pr-0">
              <img
                className="w-full rounded-xl overflow-hidden"
                src={broomImage}
                alt="이야기1 이미지"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-[20px] lg:w-[450px] lg:mx-0 mx-[50px] lg:pl-[100px] pl-0">
              <h3 className="text-xl arita-buri-bold tracking-wider pt-[30px]">
                첫눈에 서로를 알아본 우리
              </h3>
              <h4 className="arita-buri leading-8 text-[15px]">
                벚꽃 피는 봄날, 오래 알던 친구처럼 대화가 잘 통하는 사람을
                만났습니다. 둘 다 활동적이고 웃음 포인트가 같아 첫 만남부터 "이
                사람이다" 하는 느낌이 왔어요.
              </h4>
            </div>

            <div className="hidden lg:block absolute top-0 bottom-0 left-0 right-0 border-l border-secondary-100 h-full w-[1px] m-auto"></div>
            <span className="hidden lg:block absolute top-0 bottom-0 left-0 right-0 rounded-full w-[21px] h-[21px] bg-secondary-100 m-auto"></span>
          </div>
          <div className="fade flex lg:flex-row-reverse flex-col relative justify-center lg:py-[50px] pt-[40px]">
            <div className="lg:w-[450px] lg:mx-0 mx-[50px] lg:pl-[100px] pl-0">
              <img
                className="w-full rounded-xl overflow-hidden"
                src={broomImage}
                alt="이야기1 이미지"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-[20px] lg:w-[450px] lg:mx-0 mx-[50px] lg:pr-[100px] pr-0">
              <h3 className="text-xl arita-buri-bold tracking-wider pt-[30px]">
                첫눈에 서로를 알아본 우리
              </h3>
              <h4 className="arita-buri leading-8 text-[15px]">
                벚꽃 피는 봄날, 오래 알던 친구처럼 대화가 잘 통하는 사람을
                만났습니다. 둘 다 활동적이고 웃음 포인트가 같아 첫 만남부터 "이
                사람이다" 하는 느낌이 왔어요.
              </h4>
            </div>
            <div className="hidden lg:block absolute top-0 bottom-0 left-0 right-0 border-l border-secondary-100 h-full w-[1px] m-auto"></div>
            <span className="hidden lg:block absolute top-0 bottom-0 left-0 right-0 rounded-full w-[21px] h-[21px] bg-secondary-100 m-auto"></span>
          </div>
          <div className="fade flex lg:flex-row flex-col relative justify-center lg:py-[50px] pt-[40px]">
            <div className="lg:w-[450px] lg:mx-0 mx-[50px] lg:pr-[100px] pr-0">
              <img
                className="w-full rounded-xl overflow-hidden"
                src={broomImage}
                alt="이야기1 이미지"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-[20px] lg:w-[450px] lg:mx-0 mx-[50px] lg:pl-[100px] pl-0">
              <h3 className="text-xl arita-buri-bold tracking-wider pt-[30px]">
                우리의 새로운 시작
              </h3>
              <h4 className="arita-buri leading-8 text-[15px]">
                🤵🏻 신랑 김민호
                <br />
                저, 드디어 장가갑니다! 이 세상에 이 사람보다 나를 더 잘 이해하는
                사람은 없을 거라는 확신이 듭니다. 항상 웃음이 넘치도록
                살겠습니다. 잘 살자, 우리!
                <br />
                <br />
                👰🏻 신부 이혜진
                <br />
                둘이서 함께라면 인생에 어떤 어려운 문제가 주어져도 풀어나갈 수
                있을 것 같다는 용기가 생겨요. 서로에게 가장 좋은 친구이자
                연인으로 즐겁게 살겠습니다.
              </h4>
            </div>
            <div className="hidden lg:block absolute top-0 bottom-0 left-0 right-0 border-l border-secondary-100 h-full w-[1px] m-auto"></div>
            <span className="hidden lg:block absolute top-0 bottom-0 left-0 right-0 rounded-full w-[21px] h-[21px] bg-secondary-100 m-auto"></span>
          </div>
          <div className="fade flex lg:flex-row-reverse flex-col relative justify-center lg:py-[50px] pt-[40px]">
            <div className="lg:w-[450px] lg:mx-0 mx-[50px] lg:pl-[100px] pl-0">
              <img
                className="w-full rounded-xl overflow-hidden"
                src={broomImage}
                alt="이야기1 이미지"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-[20px] lg:w-[450px] lg:mx-0 mx-[50px] lg:pr-[100px] pr-0">
              <h3 className="text-xl arita-buri-bold tracking-wider pt-[30px]">
                우리의 새로운 시작
              </h3>
              <h4 className="arita-buri leading-8 text-[15px]">
                🤵🏻 신랑 김민호
                <br />
                저, 드디어 장가갑니다! 이 세상에 이 사람보다 나를 더 잘 이해하는
                사람은 없을 거라는 확신이 듭니다. 항상 웃음이 넘치도록
                살겠습니다. 잘 살자, 우리!
                <br />
                <br />
                👰🏻 신부 이혜진
                <br />
                둘이서 함께라면 인생에 어떤 어려운 문제가 주어져도 풀어나갈 수
                있을 것 같다는 용기가 생겨요. 서로에게 가장 좋은 친구이자
                연인으로 즐겁게 살겠습니다.
              </h4>
            </div>
            <div className="hidden lg:block absolute top-0 bottom-0 left-0 right-0 border-l border-secondary-100 h-full w-[1px] m-auto"></div>
            <span className="hidden lg:block absolute top-0 bottom-0 left-0 right-0 rounded-full w-[21px] h-[21px] bg-secondary-100 m-auto"></span>
          </div>
        </div>
        <div className="fade hidden lg:block">
          <p className="dancing-script text-primary-300 text-2xl">
            And Now ...
          </p>
          <p className="dancing-script text-primary-300 text-2xl">
            We're Getting Married !
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center py-20 bg-white">
        <h3 className="fade sub-title text-primary-300">GALLERY</h3>
        <h2 className="fade flex flex-col items-center main-title text-gray-800 py-4">
          우리의 소중한 순간
        </h2>
        <div className="fade flex flex-wrap lg:gap-[20px] lg:w-[840px] py-[10px] lg:py-[40px] px-6 lg:px-0">
          <div className="lg:w-[195px] w-1/3 p-2 lg:p-0">
            <img
              className="w-full rounded-md overflow-hidden"
              src={broomImage}
              alt="이야기1 이미지"
            />
          </div>
          <div className="lg:w-[195px] w-1/3 p-2 lg:p-0">
            <img
              className="w-full rounded-md overflow-hidden"
              src={broomImage}
              alt="이야기1 이미지"
            />
          </div>
          <div className="lg:w-[195px] w-1/3 p-2 lg:p-0">
            <img
              className="w-full rounded-md overflow-hidden"
              src={broomImage}
              alt="이야기1 이미지"
            />
          </div>
          <div className="lg:w-[195px] w-1/3 p-2 lg:p-0">
            <img
              className="w-full rounded-md overflow-hidden"
              src={broomImage}
              alt="이야기1 이미지"
            />
          </div>
          <div className="lg:w-[195px] w-1/3 p-2 lg:p-0">
            <img
              className="w-full rounded-md overflow-hidden"
              src={broomImage}
              alt="이야기1 이미지"
            />
          </div>
          <div className="lg:w-[195px] w-1/3 p-2 lg:p-0">
            <img
              className="w-full rounded-md overflow-hidden"
              src={broomImage}
              alt="이야기1 이미지"
            />
          </div>
          <div className="lg:w-[195px] w-1/3 p-2 lg:p-0">
            <img
              className="w-full rounded-md overflow-hidden"
              src={broomImage}
              alt="이야기1 이미지"
            />
          </div>
          <div className="lg:w-[195px] w-1/3 p-2 lg:p-0">
            <img
              className="w-full rounded-md overflow-hidden"
              src={broomImage}
              alt="이야기1 이미지"
            />
          </div>
          <div className="lg:w-[195px] w-1/3 p-2 lg:p-0">
            <img
              className="w-full rounded-md overflow-hidden"
              src={broomImage}
              alt="이야기1 이미지"
            />
          </div>
          <div className="lg:w-[195px] w-1/3 p-2 lg:p-0">
            <img
              className="w-full rounded-md overflow-hidden"
              src={broomImage}
              alt="이야기1 이미지"
            />
          </div>
          <div className="lg:w-[195px] w-1/3 p-2 lg:p-0">
            <img
              className="w-full rounded-md overflow-hidden"
              src={broomImage}
              alt="이야기1 이미지"
            />
          </div>
          <div className="lg:w-[195px] w-1/3 p-2 lg:p-0">
            <img
              className="w-full rounded-md overflow-hidden"
              src={broomImage}
              alt="이야기1 이미지"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center py-20 bg-primary-100">
        <div className="flex items-center justify-center lg:w-[840px] gap-[10px] lg:gap-[20px] px-6 lg:px-0">
          <div className="flex flex-col items-center rounded-md py-4 bg-white w-full">
            <p className="text-[28px] dancing-script pb-2">90</p>
            <span className="text-[14px] text-gray-400 arita-buri">DAYS</span>
          </div>
          <div className="flex flex-col items-center rounded-md py-4 bg-white w-full">
            <p className="text-[28px] dancing-script pb-2">90</p>
            <span className="text-[14px] text-gray-400 arita-buri">HOURS</span>
          </div>
          <div className="flex flex-col items-center rounded-md p-4 bg-white w-full">
            <p className="text-[28px] dancing-script pb-2">90</p>
            <span className="text-[14px] text-gray-400 arita-buri">
              MINUTES
            </span>
          </div>
          <div className="flex flex-col items-center rounded-md p-4 bg-white w-full">
            <p className="text-[28px] dancing-script pb-2">90</p>
            <span className="text-[14px] text-gray-400 arita-buri">
              SECONDS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import mainImage from "./assets/images/main.jpg";
import broomImage from "./assets/images/broom.png";
import "swiper/css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLeft, setIsOpenLeft] = useState(false);
  const [isOpenRight, setIsOpenRight] = useState(false);

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

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("계좌번호가 복사되었습니다.");
  };

  // const handleMenuClick = (e) => {
  //   e.preventDefault();
  //   setIsOpen(!isOpen);
  // };

  const handleLeftButtonClick = () => {
    setIsOpenLeft(!isOpenLeft);
  };

  const handleRightButtonClick = () => {
    setIsOpenRight(!isOpenRight);
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
    <>
      <section className="md:py-12">
        <div className="flex justify-center lg:w-[400px] max-w-md mx-auto lg:rounded-t-3xl overflow-hidden">
          <img
            className="max-w-[600px] w-full"
            src={mainImage}
            alt="메인 이미지"
          />
        </div>

        {/* <div className="menu lg:flex lg:px-4 justify-between text-primary-500">
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
        </div> */}
        <div className="flex flex-col items-center lg:w-[400px] max-w-md mx-auto py-20 bg-white">
          <div className="fade">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 160 52"
              width="160"
              height="52"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <clipPath id="__lottie_element_79">
                  <rect width="160" height="52" x="0" y="0"></rect>
                </clipPath>
              </defs>
              <g clip-path="url(#__lottie_element_79)">
                <g
                  transform="matrix(-1.3799999952316284,0,0,1.3799999952316284,77.25472259521484,25.537220001220703)"
                  opacity="1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill-opacity="0"
                    stroke="#DFA2A2"
                    stroke-opacity="1"
                    stroke-width="2"
                    d=" M-1.7410000562667847,-6.458000183105469 C-1.7410000562667847,-6.458000183105469 8.251999855041504,-14.954000473022461 16.194000244140625,-9.310999870300293 C18.09600067138672,-7.960000038146973 17.510000228881836,-6.383999824523926 17.198999404907227,-5.51200008392334 C16.382999420166016,-3.2269999980926514 12.392000198364258,-2.7109999656677246 8.720999717712402,-4.283999919891357 C3.8940000534057617,-6.353000164031982 -0.2460000067949295,-6.547999858856201 -1.6050000190734863,-6.185999870300293 C-2.9639999866485596,-5.823999881744385 -6.99399995803833,-5.098999977111816 -9.982999801635742,-2.2909998893737793 C-12.972000122070312,0.5170000195503235 -20.98900032043457,3.5969998836517334 -26.785999298095703,1.6039999723434448"
                  ></path>
                </g>
                <g
                  transform="matrix(1.3799999952316284,0,0,1.3799999952316284,82.62027740478516,25.537220001220703)"
                  opacity="1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill-opacity="0"
                    stroke="#DFA2A2"
                    stroke-opacity="1"
                    stroke-width="2"
                    d=" M-1.7410000562667847,-6.458000183105469 C-1.7410000562667847,-6.458000183105469 8.251999855041504,-14.954000473022461 16.194000244140625,-9.310999870300293 C18.09600067138672,-7.960000038146973 17.510000228881836,-6.383999824523926 17.198999404907227,-5.51200008392334 C16.382999420166016,-3.2269999980926514 12.392000198364258,-2.7109999656677246 8.720999717712402,-4.283999919891357 C3.8940000534057617,-6.353000164031982 -0.2460000067949295,-6.547999858856201 -1.6050000190734863,-6.185999870300293 C-2.9639999866485596,-5.823999881744385 -6.99399995803833,-5.098999977111816 -9.982999801635742,-2.2909998893737793 C-12.972000122070312,0.5170000195503235 -20.98900032043457,3.5969998836517334 -26.785999298095703,1.6039999723434448"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <div class="fade suit-regular text-center text-[18px] leading-9">
            사람이 온다는 건 실은 어마어마한 일이다.
            <br />
            그는 그의 과거와 현재와 그리고
            <br />
            그의 미래와 함께 오기 때문이다.
            <br />
            한 사람의 일생이 오기 때문이다.
            <br />
            <br />- 정현종, '방문객'
            <br />
            <br />
            저희 두 사람이 함께하는 새로운 시작에
            <br />
            귀한 발걸음으로 축복해 주시면 감사하겠습니다.
          </div>
          <div className="fade suit-regular pt-8 text-center text-[18px]">
            신랑 김민호 · 신부 이혜진
          </div>
        </div>
        <div className="flex justify-center lg:w-[400px] max-w-md mx-auto">
          <img
            className="max-w-[600px] w-full"
            src={mainImage}
            alt="메인 이미지"
          />
        </div>
        <div className="flex flex-col items-center py-20 lg:w-[400px] max-w-md mx-auto bg-gray-50">
          <h3 className="fade sub-title">WEDDING DAY</h3>
          <h2 className="fade flex flex-col items-center suit-regular py-4 text-[18px]">
            <span>2025년 12월 6일 토요일 오후 2시 40분</span>
            <span>더 베뉴지 서울 2층 베뉴지홀</span>
          </h2>
          <div className="fade calendar arita-buri border-y py-5 mt-4">
            <div className="calendar-header">
              <span className="text-primary-500">일</span>
              <span>월</span>
              <span>화</span>
              <span>수</span>
              <span>목</span>
              <span>금</span>
              <span>토</span>
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
            <span className="flex items-center gap-[3px] suit-regular">
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
          <div className="fade flex items-center justify-center w-[350px] mt-4 gap-[10px]">
            <div className="flex-1 text-center rounded-md py-4 bg-white shadow-lg">
              <p className="text-[18px] dancing-script">{timeLeft.days}</p>
              <span className="text-[11px] text-gray-400 arita-buri">DAYS</span>
            </div>
            <div className="flex-1 text-center rounded-md py-4 bg-white shadow-lg">
              <p className="text-[18px] dancing-script">{timeLeft.hours}</p>
              <span className="text-[11px] text-gray-400 arita-buri">
                HOURS
              </span>
            </div>
            <div className="flex-1 text-center rounded-md py-4 bg-white shadow-lg">
              <p className="text-[18px] dancing-script">{timeLeft.minutes}</p>
              <span className="text-[11px] text-gray-400 arita-buri">
                MINUTES
              </span>
            </div>
            <div className="flex-1 text-center rounded-md py-4 bg-white shadow-lg">
              <p className="text-[18px] dancing-script">{timeLeft.seconds}</p>
              <span className="text-[11px] text-gray-400 arita-buri">
                SECONDS
              </span>
            </div>
          </div>
          <a
            href="/"
            className="fade flex w-[330px] justify-center items-center border border-gray-300 hover:border-gray-600 rounded-[8px] gap-[10px] mt-10 py-4 px-16"
          >
            <span className="w-[18px] h-[18px]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00012 0C7.01167 0.0021837 5.10528 0.793061 3.69923 2.19911C2.29318 3.60516 1.50231 5.51155 1.50012 7.5C1.50012 11.4615 7.80012 16.8998 8.51562 17.5073L9.00012 17.9167L9.48462 17.5073C10.2001 16.8998 16.5001 11.4615 16.5001 7.5C16.4979 5.51155 15.7071 3.60516 14.301 2.19911C12.895 0.793061 10.9886 0.0021837 9.00012 0V0ZM9.00012 11.25C8.25844 11.25 7.53342 11.0301 6.91673 10.618C6.30005 10.206 5.8194 9.62029 5.53557 8.93506C5.25174 8.24984 5.17748 7.49584 5.32218 6.76841C5.46687 6.04098 5.82402 5.3728 6.34847 4.84835C6.87292 4.3239 7.5411 3.96675 8.26853 3.82206C8.99596 3.67736 9.74996 3.75162 10.4352 4.03545C11.1204 4.31928 11.7061 4.79993 12.1181 5.41661C12.5302 6.0333 12.7501 6.75832 12.7501 7.5C12.7489 8.4942 12.3535 9.44733 11.6505 10.1503C10.9475 10.8533 9.99432 11.2488 9.00012 11.25V11.25Z"
                  fill="#333333"
                />
                <path
                  d="M9 9.75C10.2426 9.75 11.25 8.74264 11.25 7.5C11.25 6.25736 10.2426 5.25 9 5.25C7.75736 5.25 6.75 6.25736 6.75 7.5C6.75 8.74264 7.75736 9.75 9 9.75Z"
                  fill="#333333"
                />
              </svg>
            </span>

            <span className="text-[18px]">위치 안내 바로가기</span>
          </a>
        </div>
        <div className="flex flex-col items-center py-20 bg-primary-400 lg:w-[400px] max-w-md mx-auto">
          <h3 className="fade sub-title">GROOM &amp; BRIDE</h3>
          <h2 className="fade flex flex-col items-center text-gray-800 py-4 suit-regular text-[18px]">
            신랑 &amp; 신부를 소개합니다
          </h2>
          <div className="flex flex-col gap-[40px] py-[20px]">
            <div className="max-w-[300px] mx-auto bg-white rounded-xl p-8">
              <img
                className="fade w-full rounded-xl overflow-hidden shadow-md"
                src={broomImage}
                alt="신랑 이미지"
              />
              <div className="fade flex justify-center items-baseline gap-[10px] pt-[30px] py-[20px]">
                <span className="text-[18px] suit-regular text-primary-500">
                  신랑
                </span>
                <span className="text-[18px] suit-regular">김민호</span>
              </div>
              <div className="fade text-center">
                <div className="mb-5 suit-regular text-[15px]">
                  <p>1990년 2월 경기도 시흥 출생</p>
                  <p>이 시대의 최수종 션 모음ZIP.</p>
                </div>

                <ul className="flex justify-center suit-regular text-[13px] gap-[5px]">
                  <li className="px-3 py-1 bg-primary-300 rounded-full text-white">
                    #A형
                  </li>
                  <li className="px-3 py-1 bg-primary-300 rounded-full text-white">
                    #ISFJ
                  </li>
                  <li className="px-3 py-1 bg-primary-300 rounded-full text-white">
                    #다정다감
                  </li>
                </ul>
                <ul className="flex justify-center suit-bold text-[13px] gap-[5px] mt-1">
                  <li className="px-3 py-1 bg-primary-300 rounded-full text-white">
                    #공감왕
                  </li>
                  <li className="px-3 py-1 bg-primary-300 rounded-full text-white">
                    #장난꾸러기
                  </li>
                </ul>
              </div>
            </div>
            <div className="max-w-[300px] mx-auto bg-white rounded-xl p-8">
              <img
                className="fade w-full rounded-xl overflow-hidden shadow-md"
                src={broomImage}
                alt="신부 이미지"
              />
              <div className="fade flex justify-center items-baseline gap-[10px] pt-[30px] py-[20px]">
                <span className="text-[18px] suit-regular text-primary-500">
                  신부
                </span>
                <span className="text-[18px] suit-regular">이혜진</span>
              </div>
              <div className="fade text-center">
                <div className="mb-5 suit-regular text-[15px]">
                  <p>1996년 1월 대구 출생</p>
                  <p>내 말이 곧 법이다 우리집 공주</p>
                </div>

                <ul className="flex justify-center suit-regular text-[13px] gap-[5px]">
                  <li className="px-3 py-1 bg-primary-300 rounded-full text-white">
                    #A형
                  </li>
                  <li className="px-3 py-1 bg-primary-300 rounded-full text-white">
                    #INFJ
                  </li>
                  <li className="px-3 py-1 bg-primary-300 rounded-full text-white">
                    #집순이
                  </li>
                </ul>
                <ul className="flex justify-center suit-regular text-[13px] gap-[5px] mt-1">
                  <li className="px-3 py-1 bg-primary-300 rounded-full text-white">
                    #배려왕
                  </li>
                  <li className="px-3 py-1 bg-primary-300 rounded-full text-white">
                    #금손
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center py-20 lg:w-[400px] max-w-md mx-auto bg-primary-100">
          <h3 className="fade sub-title">OUR STORY</h3>
          <h2 className="fade flex flex-col items-center suit-regular py-4 text-[18px]">
            우리의 이야기
          </h2>
          <div className="py-[20px]">
            <div className="fade flex flex-row relative justify-center">
              <div className="w-full pl-[20px] pr-[40px]">
                <img
                  className="w-full rounded-xl overflow-hidden"
                  src={broomImage}
                  alt="이야기1 이미지"
                />
              </div>
              <div className="w-full flex flex-col justify-center pl-[10px]">
                <div className="flex-inline w-auto self-start px-3 py-1 bg-primary-300 rounded-full text-white">
                  23년 7월, 첫 시작
                </div>
                <h3 className="suit-bold text-[15px] pt-[20px]">
                  첫눈에 서로를 알아본 우리
                </h3>
                <h4 className="suit-regular text-[15px] pt-[20px]">
                  스치면 인연,
                  <br />
                  스며들면 사랑
                  <br />
                  그렇게 시작된 만남
                </h4>
              </div>
              <div className="absolute top-0 bottom-0 left-0 right-0 border-l border-secondary-100 h-full w-[1px] m-auto"></div>
              <span className="absolute top-[20px] left-0 right-0 rounded-full w-[17px] h-[17px] bg-primary-300 border-[4px] border-primary-100 m-auto"></span>
            </div>
            <div className="fade flex flex-row-reverse relative justify-center pt-[40px]">
              <div className="w-full pr-[20px] pl-[40px]">
                <img
                  className="w-full rounded-xl overflow-hidden"
                  src={broomImage}
                  alt="이야기1 이미지"
                />
              </div>
              <div className="w-full flex flex-col justify-center pl-[20px]">
                <div className="flex-inline w-auto self-start px-3 py-1 bg-primary-300 rounded-full text-white">
                  연애기간, 878일
                </div>
                <h3 className="suit-bold text-[15px] pt-[20px]">
                  💕 행복했던 2년 반
                </h3>
                <h4 className="suit-regular text-[15px] pt-[20px] pr-[10px]">
                  함께한 11번의 계절 속<br />
                  너무 닮아버린 우리
                </h4>
              </div>
              <div className="absolute top-0 bottom-0 left-0 right-0 border-l border-secondary-100 h-full w-[1px] m-auto"></div>
              <span className="absolute top-[60px] left-0 right-0 rounded-full w-[17px] h-[17px] bg-primary-300 border-[4px] border-primary-100 m-auto"></span>
            </div>
            <div className="fade flex flex-row relative justify-center pt-[40px]">
              <div className="w-full pl-[20px] pr-[40px]">
                <img
                  className="w-full rounded-xl overflow-hidden"
                  src={broomImage}
                  alt="이야기1 이미지"
                />
              </div>
              <div className="w-full flex flex-col justify-center pl-[10px]">
                <div className="flex-inline w-auto self-start px-3 py-1 bg-primary-300 rounded-full text-white">
                  평생의 약속
                </div>
                <h3 className="suit-bold text-[15px] pt-[20px]">프로포즈</h3>
                <h4 className="suit-regular text-[15px] pt-[20px]">
                  👰🏻 "Will you Marry me?"
                  <br />
                  🤵🏻 "Yes!"
                </h4>
              </div>
              <div className="absolute top-0 bottom-0 left-0 right-0 border-l border-secondary-100 h-full w-[1px] m-auto"></div>
              <span className="absolute top-[60px] left-0 right-0 rounded-full w-[17px] h-[17px] bg-primary-300 border-[4px] border-primary-100 m-auto"></span>
            </div>
            <div className="fade flex flex-row-reverse relative justify-center pt-[40px]">
              <div className="w-full pr-[20px] pl-[40px]">
                <img
                  className="w-full rounded-xl overflow-hidden"
                  src={broomImage}
                  alt="이야기1 이미지"
                />
              </div>
              <div className="w-full flex flex-col justify-center pl-[20px]">
                <div className="flex-inline w-auto self-start px-3 py-1 bg-primary-300 rounded-full text-white">
                  25년 12월 6일
                </div>
                <h3 className="suit-bold text-[15px] pt-[20px]">웨딩데이</h3>
                <h4 className="suit-regular text-[15px] pt-[20px]">
                  두 사람이 사랑의 마음으로 <br />
                  하나 되어 가는 새로운 여정
                </h4>
              </div>
              <div className="absolute top-0 bottom-0 left-0 right-0 border-l border-secondary-100 h-full w-[1px] m-auto"></div>
              <span className="absolute top-[60px] left-0 right-0 rounded-full w-[17px] h-[17px] bg-primary-300 border-[4px] border-primary-100 m-auto"></span>
            </div>
          </div>
          <div className="fade">
            <p className="dancing-script text-primary-300 text-2xl">
              And Now ...
            </p>
            <p className="dancing-script text-primary-300 text-2xl">
              We're Getting Married !
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center py-20 lg:w-[400px] max-w-md mx-auto bg-white">
          <h3 className="fade sub-title text-primary-300">GALLERY</h3>
          <h2 className="fade flex flex-col items-center suit-regular py-4 text-[18px]">
            우리의 소중한 순간
          </h2>
          <div className="fade grid grid-cols-3 py-[10px] gap-[1.5px]">
            <img className="w-full" src={broomImage} alt="이야기1 이미지" />
            <img className="w-full" src={broomImage} alt="이야기1 이미지" />
            <img className="w-full" src={broomImage} alt="이야기1 이미지" />
            <img className="w-full" src={broomImage} alt="이야기1 이미지" />
            <img className="w-full" src={broomImage} alt="이야기1 이미지" />
            <img className="w-full" src={broomImage} alt="이야기1 이미지" />
            <img className="w-full" src={broomImage} alt="이야기1 이미지" />
            <img className="w-full" src={broomImage} alt="이야기1 이미지" />
            <img className="w-full" src={broomImage} alt="이야기1 이미지" />
            <img className="w-full" src={broomImage} alt="이야기1 이미지" />
            <img className="w-full" src={broomImage} alt="이야기1 이미지" />
            <img className="w-full" src={broomImage} alt="이야기1 이미지" />
          </div>
        </div>
        <div className="flex flex-col items-center py-20 lg:w-[400px] max-w-md mx-auto bg-primary-100">
          <h3 className="fade sub-title text-primary-300">ATTENDANCE</h3>
          <h2 className="fade main-title text-gray-800 py-4">
            참석정보를 전달해주세요
          </h2>
          <div class="fade arita-buri text-center text-[18px] leading-9">
            축하의 마음으로 예식에 참석하시는
            <br />
            모든 분들을 더욱 귀하게 모실 수 있도록,
            <br />
            아래 버튼을 눌러 신랑 & 신부에게
            <br />
            참석정보를 전달 부탁드립니다.
          </div>
          <div class="fade attendance arita-buri text-center text-[18px] leading-9">
            <h5 class="flex justify-center items-center gap-[10px]">
              <span className="w-[18px] h-[18px]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2251_2335)">
                    <path
                      d="M18 7.5V18H0V7.5H18ZM18 6V3.75C18 3.15326 17.7629 2.58097 17.341 2.15901C16.919 1.73705 16.3467 1.5 15.75 1.5H13.5V0H12V1.5H6V0H4.5V1.5H2.25C1.65326 1.5 1.08097 1.73705 0.65901 2.15901C0.237053 2.58097 0 3.15326 0 3.75L0 6H18ZM13.5 10.5H12V12H13.5V10.5ZM9.75 10.5H8.25V12H9.75V10.5ZM6 10.5H4.5V12H6V10.5ZM13.5 13.5H12V15H13.5V13.5ZM9.75 13.5H8.25V15H9.75V13.5ZM6 13.5H4.5V15H6V13.5Z"
                      fill="#333333"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2251_2335">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              2025.12.06. 토요일 오후 2:40
            </h5>
            <h5 class="flex justify-center items-center gap-[10px]">
              <span className="w-[18px] h-[18px]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00012 0C7.01167 0.0021837 5.10528 0.793061 3.69923 2.19911C2.29318 3.60516 1.50231 5.51155 1.50012 7.5C1.50012 11.4615 7.80012 16.8998 8.51562 17.5073L9.00012 17.9167L9.48462 17.5073C10.2001 16.8998 16.5001 11.4615 16.5001 7.5C16.4979 5.51155 15.7071 3.60516 14.301 2.19911C12.895 0.793061 10.9886 0.0021837 9.00012 0V0ZM9.00012 11.25C8.25844 11.25 7.53342 11.0301 6.91673 10.618C6.30005 10.206 5.8194 9.62029 5.53557 8.93506C5.25174 8.24984 5.17748 7.49584 5.32218 6.76841C5.46687 6.04098 5.82402 5.3728 6.34847 4.84835C6.87292 4.3239 7.5411 3.96675 8.26853 3.82206C8.99596 3.67736 9.74996 3.75162 10.4352 4.03545C11.1204 4.31928 11.7061 4.79993 12.1181 5.41661C12.5302 6.0333 12.7501 6.75832 12.7501 7.5C12.7489 8.4942 12.3535 9.44733 11.6505 10.1503C10.9475 10.8533 9.99432 11.2488 9.00012 11.25V11.25Z"
                    fill="#333333"
                  />
                  <path
                    d="M9 9.75C10.2426 9.75 11.25 8.74264 11.25 7.5C11.25 6.25736 10.2426 5.25 9 5.25C7.75736 5.25 6.75 6.25736 6.75 7.5C6.75 8.74264 7.75736 9.75 9 9.75Z"
                    fill="#333333"
                  />
                </svg>
              </span>
              더베뉴지 서울 2층 베뉴지홀
            </h5>
          </div>
          <a
            href="/"
            className="fade w-[330px] flex justify-center items-center bg-gray-700 rounded-[8px] gap-[10px] mt-10 py-4 px-16"
          >
            <span className="w-[18px] h-[18px]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2252_2347)">
                  <path
                    d="M9 0C6.61305 0 4.32387 0.948211 2.63604 2.63604C0.948211 4.32387 0 6.61305 0 9C0 11.3869 0.948211 13.6761 2.63604 15.364C4.32387 17.0518 6.61305 18 9 18H18V9C17.9974 6.61384 17.0484 4.32616 15.3611 2.63889C13.6738 0.951621 11.3862 0.00258081 9 0V0ZM8.93175 12.3143C8.65061 12.5943 8.26995 12.7516 7.87313 12.7516C7.4763 12.7516 7.09564 12.5943 6.8145 12.3143L3.975 9.53625L5.025 8.46375L7.86975 11.244L12.9742 6.219L14.0242 7.287L8.93175 12.3143Z"
                    fill="#ffffff"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2252_2347">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>

            <span className="text-[18px] text-white">참석정보 전달하기</span>
          </a>
        </div>
        <div className="flex flex-col items-center py-20 bg-white">
          <h3 className="fade sub-title text-primary-300">
            <svg
              width="32"
              height="18"
              viewBox="0 0 32 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2255_2360)">
                <path
                  d="M27.1252 0.6875C26.2807 0.700636 25.4546 0.93639 24.7303 1.37095C24.006 1.80552 23.4092 2.4235 23.0002 3.1625C22.5912 2.4235 21.9944 1.80552 21.2701 1.37095C20.5459 0.93639 19.7198 0.700636 18.8752 0.6875C17.5289 0.745993 16.2605 1.33494 15.347 2.32567C14.4336 3.31641 13.9494 4.62839 14.0002 5.975C14.0002 11.0563 22.2172 16.925 22.5667 17.174L23.0002 17.4808L23.4337 17.174C23.7832 16.9265 32.0002 11.0563 32.0002 5.975C32.051 4.62839 31.5668 3.31641 30.6534 2.32567C29.7399 1.33494 28.4715 0.745993 27.1252 0.6875V0.6875Z"
                  fill="#E1DDDD"
                />
              </g>
              <g clip-path="url(#clip1_2255_2360)">
                <path
                  d="M13.1252 0.6875C12.2807 0.700636 11.4546 0.93639 10.7303 1.37095C10.006 1.80552 9.40923 2.4235 9.00021 3.1625C8.59119 2.4235 7.99441 1.80552 7.27014 1.37095C6.54587 0.93639 5.71975 0.700636 4.87521 0.6875C3.52892 0.745993 2.26049 1.33494 1.34705 2.32567C0.433607 3.31641 -0.0506 4.62839 0.000212859 5.975C0.000212859 11.0563 8.21721 16.925 8.56671 17.174L9.00021 17.4808L9.43371 17.174C9.78321 16.9265 18.0002 11.0563 18.0002 5.975C18.051 4.62839 17.5668 3.31641 16.6534 2.32567C15.7399 1.33494 14.4715 0.745993 13.1252 0.6875V0.6875Z"
                  fill="#F5AB7F"
                />
              </g>
              <defs>
                <clipPath id="clip0_2255_2360">
                  <rect
                    width="18"
                    height="18"
                    fill="white"
                    transform="translate(14)"
                  />
                </clipPath>
                <clipPath id="clip1_2255_2360">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </h3>
          <h2 className="fade flex flex-col items-center main-title text-gray-800 py-4">
            마음 전하실 곳
          </h2>
          <div class="fade arita-buri text-center text-[18px] leading-9">
            저희 두 사람의 소중한 시작을
            <br />
            축하해주시는 모든 분들께 감사드립니다.
            <br />
            따뜻한 진심을 감사히 오래도록 간직하고
            <br />
            행복하게 잘 살겠습니다.
          </div>
          <div class="fade flex lg:flex-row w-full justify-center flex-col gap-[24px] py-12">
            <div class="lg:w-[500px] lg:px-0 px-8">
              <button
                type="button"
                class="flex justify-between items-center gap-[14px] w-full bg-green-100 px-[25px] py-[20px] border-[0.5px] border-green-300 text-green-700 text-[22px] font-500"
                onClick={() => handleLeftButtonClick()}
              >
                <span class="flex gap-[14px] items-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2269_2347)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.0657 1.06034C17.955 0.938221 16.8345 0.938221 15.7236 1.06034C15.5053 1.08435 15.3102 1.20749 15.1945 1.39426L13.3334 4.39929C13.1882 4.63379 12.8432 4.62215 12.7141 4.37839L11.8375 2.72299C11.6561 2.38048 11.2347 2.24512 10.8877 2.41795C7.67284 4.01957 4.91401 6.07073 3.56834 8.41309C2.88593 9.60093 2.5548 10.8866 2.74439 12.2225C2.79776 12.5985 2.89147 12.9721 3.02603 13.3426C3.09914 13.544 3.33853 13.6204 3.52146 13.5089C5.04356 12.5813 6.43297 11.5605 7.38016 10.6319C7.73226 10.2866 8.29756 10.2922 8.64279 10.6443C8.93564 10.943 8.97604 11.3952 8.7666 11.7362C8.7538 11.757 8.73799 11.7757 8.72044 11.7927C8.04977 12.4442 7.1961 13.1514 6.22586 13.8547C5.95801 14.0489 5.68421 14.2406 5.40646 14.4287C4.98611 14.7053 4.55177 14.9764 4.10954 15.239C4.1049 15.2417 4.10373 15.2479 4.10704 15.2521C4.11033 15.2564 4.10921 15.2626 4.10463 15.2653C2.98884 15.9451 1.85903 16.5391 0.833875 16.9717C0.288691 17.2017 0.0332237 17.8301 0.263274 18.3753C0.493324 18.9206 1.12178 19.176 1.66696 18.946C2.88413 18.4323 4.20553 17.7276 5.48437 16.9323C5.60654 16.8563 5.76203 16.8609 5.88327 16.9384C8.51761 18.6221 12.094 17.8377 14.8619 15.5036C18.0559 12.8102 20.3975 7.9491 19.6976 1.69096C19.6605 1.35883 19.3979 1.09686 19.0657 1.06034Z"
                        fill="#707664"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2269_2347">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  신랑측
                </span>
                <svg
                  class={`${isOpenLeft ? "" : "rotate-180"}`}
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.8259 16.7996L18.0934 11.0684C17.2601 10.2723 16.152 9.82813 14.9996 9.82812C13.8472 9.82812 12.7392 10.2723 11.9059 11.0684L6.17337 16.7996C5.82163 17.1514 5.62402 17.6284 5.62402 18.1259C5.62402 18.6233 5.82163 19.1004 6.17337 19.4521C6.52512 19.8039 7.00218 20.0015 7.49962 20.0015C7.99706 20.0015 8.47413 19.8039 8.82587 19.4521L14.5584 13.7196C14.6756 13.6025 14.8345 13.5366 15.0002 13.5366C15.166 13.5366 15.3249 13.6025 15.4421 13.7196L21.1734 19.4521C21.5251 19.8039 22.0022 20.0015 22.4996 20.0015C22.9971 20.0015 23.4741 19.8039 23.8259 19.4521C24.1776 19.1004 24.3752 18.6233 24.3752 18.1259C24.3752 17.6284 24.1776 17.1514 23.8259 16.7996Z"
                    fill="#707664"
                  />
                </svg>
              </button>
              <div
                class={`${
                  isOpenLeft
                    ? "lg:h-[490px] h-[566px] visible"
                    : "h-0 invisible"
                } transition-all bg-green-50 border-l-[0.5px] border-r-[0.5px] border-green-300`}
              >
                <div class="p-[30px] border-b-[0.5px] border-green-300">
                  <div class="flex justify-between">
                    <span>
                      신랑
                      <em class="not-italic text-[18px] pl-2 font-700">
                        김민호
                      </em>
                    </span>
                    <span>국민 238502-04-127818</span>
                  </div>
                  <div class="flex lg:flex-row flex-col justify-center gap-[20px] pt-[20px]">
                    <button
                      type="button"
                      class="flex items-center justify-center gap-[8px] rounded-full w-full py-4 bg-yellow-700 shadow-lg"
                      onClick={() =>
                        (window.location.href =
                          "https://qr.kakaopay.com/FDBFqcWrK")
                      }
                    >
                      <svg
                        width="18"
                        height="16"
                        viewBox="0 0 18 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 0C13.9706 0 18 3.13401 18 7C18 10.866 13.9706 14 9 14C7.88189 14 6.81193 13.8396 5.82422 13.5498L1.30469 15.4326L2.8916 12.1396C1.11373 10.8609 0 9.03196 0 7C0 3.13401 4.02944 0 9 0Z"
                          fill="#333333"
                        />
                      </svg>

                      <span class="text-[16px]">카카오페이 송금</span>
                    </button>
                    <button
                      type="button"
                      class="flex items-center justify-center gap-[8px] rounded-full w-full py-4 bg-white shadow-lg"
                      onClick={() => copyToClipboard("238502-04-127818")}
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.7501 2.59062L11.2414 0H6.25012C5.75284 0 5.27593 0.197544 4.9243 0.549175C4.57267 0.900805 4.37512 1.37772 4.37512 1.875V2.5H3.12512C2.62784 2.5 2.15093 2.69754 1.7993 3.04917C1.44767 3.40081 1.25012 3.87772 1.25012 4.375V15H11.2501V11.875H13.7501V2.59062ZM10.0001 13.75H2.50012V4.375C2.50012 4.20924 2.56597 4.05027 2.68318 3.93306C2.80039 3.81585 2.95936 3.75 3.12512 3.75H4.37512V11.875H10.0001V13.75ZM5.62512 10.625V1.875C5.62512 1.70924 5.69097 1.55027 5.80818 1.43306C5.92539 1.31585 6.08436 1.25 6.25012 1.25H10.0001V3.75H12.5001V10.625H5.62512Z"
                          fill="#333333"
                        />
                      </svg>
                      <span class="text-[16px]">계좌번호 복사</span>
                    </button>
                  </div>
                </div>
                <div class="p-[30px] border-b-[0.5px] border-green-300">
                  <div class="flex justify-between">
                    <span>
                      혼주
                      <em class="not-italic text-[18px] pl-2 font-700">
                        김해덕
                      </em>
                    </span>
                    <span>국민 606025-90-101196</span>
                  </div>
                  <div class="flex justify-center pt-[20px]">
                    <button
                      type="button"
                      class="flex items-center justify-center gap-[8px] rounded-full w-full py-4 bg-white shadow-lg"
                      onClick={() => copyToClipboard("606025-90-101196")}
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.7501 2.59062L11.2414 0H6.25012C5.75284 0 5.27593 0.197544 4.9243 0.549175C4.57267 0.900805 4.37512 1.37772 4.37512 1.875V2.5H3.12512C2.62784 2.5 2.15093 2.69754 1.7993 3.04917C1.44767 3.40081 1.25012 3.87772 1.25012 4.375V15H11.2501V11.875H13.7501V2.59062ZM10.0001 13.75H2.50012V4.375C2.50012 4.20924 2.56597 4.05027 2.68318 3.93306C2.80039 3.81585 2.95936 3.75 3.12512 3.75H4.37512V11.875H10.0001V13.75ZM5.62512 10.625V1.875C5.62512 1.70924 5.69097 1.55027 5.80818 1.43306C5.92539 1.31585 6.08436 1.25 6.25012 1.25H10.0001V3.75H12.5001V10.625H5.62512Z"
                          fill="#333333"
                        />
                      </svg>
                      <span class="text-[16px]">계좌번호 복사</span>
                    </button>
                  </div>
                </div>
                <div class="p-[30px] border-b-[0.5px] border-green-300">
                  <div class="flex justify-between">
                    <span>
                      혼주
                      <em class="not-italic text-[18px] pl-2 font-700">
                        박경자
                      </em>
                    </span>
                    <span>국민 602825-93-123294</span>
                  </div>
                  <div class="flex justify-center pt-[20px]">
                    <button
                      type="button"
                      class="flex items-center justify-center gap-[8px] rounded-full w-full py-4 bg-white shadow-lg"
                      onClick={() => copyToClipboard("602825-93-123294")}
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.7501 2.59062L11.2414 0H6.25012C5.75284 0 5.27593 0.197544 4.9243 0.549175C4.57267 0.900805 4.37512 1.37772 4.37512 1.875V2.5H3.12512C2.62784 2.5 2.15093 2.69754 1.7993 3.04917C1.44767 3.40081 1.25012 3.87772 1.25012 4.375V15H11.2501V11.875H13.7501V2.59062ZM10.0001 13.75H2.50012V4.375C2.50012 4.20924 2.56597 4.05027 2.68318 3.93306C2.80039 3.81585 2.95936 3.75 3.12512 3.75H4.37512V11.875H10.0001V13.75ZM5.62512 10.625V1.875C5.62512 1.70924 5.69097 1.55027 5.80818 1.43306C5.92539 1.31585 6.08436 1.25 6.25012 1.25H10.0001V3.75H12.5001V10.625H5.62512Z"
                          fill="#333333"
                        />
                      </svg>
                      <span class="text-[16px]">계좌번호 복사</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:w-[500px] lg:px-0 px-8">
              <button
                type="button"
                class="flex justify-between items-center gap-[14px] w-full bg-primary-100  px-[25px] py-[20px] border-[0.5px] border-primary-200 text-secondary-700 text-[22px] font-500"
                onClick={() => handleRightButtonClick()}
              >
                <span class="flex gap-[14px] items-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2269_2347)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.0657 1.06034C17.955 0.938221 16.8345 0.938221 15.7236 1.06034C15.5053 1.08435 15.3102 1.20749 15.1945 1.39426L13.3334 4.39929C13.1882 4.63379 12.8432 4.62215 12.7141 4.37839L11.8375 2.72299C11.6561 2.38048 11.2347 2.24512 10.8877 2.41795C7.67284 4.01957 4.91401 6.07073 3.56834 8.41309C2.88593 9.60093 2.5548 10.8866 2.74439 12.2225C2.79776 12.5985 2.89147 12.9721 3.02603 13.3426C3.09914 13.544 3.33853 13.6204 3.52146 13.5089C5.04356 12.5813 6.43297 11.5605 7.38016 10.6319C7.73226 10.2866 8.29756 10.2922 8.64279 10.6443C8.93564 10.943 8.97604 11.3952 8.7666 11.7362C8.7538 11.757 8.73799 11.7757 8.72044 11.7927C8.04977 12.4442 7.1961 13.1514 6.22586 13.8547C5.95801 14.0489 5.68421 14.2406 5.40646 14.4287C4.98611 14.7053 4.55177 14.9764 4.10954 15.239C4.1049 15.2417 4.10373 15.2479 4.10704 15.2521C4.11033 15.2564 4.10921 15.2626 4.10463 15.2653C2.98884 15.9451 1.85903 16.5391 0.833875 16.9717C0.288691 17.2017 0.0332237 17.8301 0.263274 18.3753C0.493324 18.9206 1.12178 19.176 1.66696 18.946C2.88413 18.4323 4.20553 17.7276 5.48437 16.9323C5.60654 16.8563 5.76203 16.8609 5.88327 16.9384C8.51761 18.6221 12.094 17.8377 14.8619 15.5036C18.0559 12.8102 20.3975 7.9491 19.6976 1.69096C19.6605 1.35883 19.3979 1.09686 19.0657 1.06034Z"
                        fill="#8B6254"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2269_2347">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  신부측
                </span>
                <svg
                  class={`${isOpenRight ? "" : "rotate-180"}`}
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.8259 16.7996L18.0934 11.0684C17.2601 10.2723 16.152 9.82813 14.9996 9.82812C13.8472 9.82812 12.7392 10.2723 11.9059 11.0684L6.17337 16.7996C5.82163 17.1514 5.62402 17.6284 5.62402 18.1259C5.62402 18.6233 5.82163 19.1004 6.17337 19.4521C6.52512 19.8039 7.00218 20.0015 7.49962 20.0015C7.99706 20.0015 8.47413 19.8039 8.82587 19.4521L14.5584 13.7196C14.6756 13.6025 14.8345 13.5366 15.0002 13.5366C15.166 13.5366 15.3249 13.6025 15.4421 13.7196L21.1734 19.4521C21.5251 19.8039 22.0022 20.0015 22.4996 20.0015C22.9971 20.0015 23.4741 19.8039 23.8259 19.4521C24.1776 19.1004 24.3752 18.6233 24.3752 18.1259C24.3752 17.6284 24.1776 17.1514 23.8259 16.7996Z"
                    fill="#8B6254"
                  />
                </svg>
              </button>
              <div
                class={`${
                  isOpenRight
                    ? "lg:h-[163px] h-[240px] visible"
                    : "h-0 invisible"
                } transition-all bg-primary-50 border-l-[0.5px] border-r-[0.5px] border-green-300`}
              >
                <div class="p-[30px] border-b-[0.5px] border-green-300">
                  <div class="flex justify-between">
                    <span>
                      신부
                      <em class="not-italic text-[18px] pl-2 font-700">
                        이혜진
                      </em>
                    </span>
                    <span>토스 1000-9136-201</span>
                  </div>
                  <div class="flex lg:flex-row flex-col justify-center gap-[20px] pt-[20px]">
                    <button
                      type="button"
                      class="flex items-center justify-center gap-[8px] rounded-full w-full py-4 bg-yellow-700 shadow-lg"
                      onClick={() =>
                        (window.location.href =
                          "https://qr.kakaopay.com/Ej7xyipUD")
                      }
                    >
                      <svg
                        width="18"
                        height="16"
                        viewBox="0 0 18 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 0C13.9706 0 18 3.13401 18 7C18 10.866 13.9706 14 9 14C7.88189 14 6.81193 13.8396 5.82422 13.5498L1.30469 15.4326L2.8916 12.1396C1.11373 10.8609 0 9.03196 0 7C0 3.13401 4.02944 0 9 0Z"
                          fill="#333333"
                        />
                      </svg>

                      <span class="text-[16px]">카카오페이 송금</span>
                    </button>
                    <button
                      type="button"
                      class="flex items-center justify-center gap-[8px] rounded-full w-full py-4 bg-white shadow-lg"
                      onClick={() => copyToClipboard("1000-9136-201")}
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.7501 2.59062L11.2414 0H6.25012C5.75284 0 5.27593 0.197544 4.9243 0.549175C4.57267 0.900805 4.37512 1.37772 4.37512 1.875V2.5H3.12512C2.62784 2.5 2.15093 2.69754 1.7993 3.04917C1.44767 3.40081 1.25012 3.87772 1.25012 4.375V15H11.2501V11.875H13.7501V2.59062ZM10.0001 13.75H2.50012V4.375C2.50012 4.20924 2.56597 4.05027 2.68318 3.93306C2.80039 3.81585 2.95936 3.75 3.12512 3.75H4.37512V11.875H10.0001V13.75ZM5.62512 10.625V1.875C5.62512 1.70924 5.69097 1.55027 5.80818 1.43306C5.92539 1.31585 6.08436 1.25 6.25012 1.25H10.0001V3.75H12.5001V10.625H5.62512Z"
                          fill="#333333"
                        />
                      </svg>
                      <span class="text-[16px]">계좌번호 복사</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center py-20 bg-primary-100">
          <h3 className="fade sub-title text-primary-300">LOCATION</h3>
          <h2 className="fade main-title text-gray-800 py-4">오시는 길</h2>

          <div class="location lg:w-[1024px] px-12 flex flex-col gap-[10px] lg:flex-row justify-between items-center arita-buri text-center text-[18px] leading-9">
            <span class="flex justify-center w-full">
              서울 강서구 강서로 388
            </span>
            <span class="lg:w-[2px] w-[30px] h-[1px] lg:h-[26px] bg-primary-300 opacity-30"></span>
            <span class="flex justify-center w-full">
              더베뉴지 서울 2층 베뉴지홀
            </span>
          </div>

          <div class="lg:flex w-full justify-center gap-[40px] py-12">
            <div class="fade lg:w-[480px] w-full px-8 lg:px-0">
              <div class="w-full h-[300px] bg-[url(./assets/images/map.png)] bg-center bg-cover"></div>
              <div class="flex justify-between bg-gray-700 py-4 lg:px-6 px-2">
                <span class="text-white flex items-center gap-[6px]">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.50012 0C5.84308 0.00181975 4.25442 0.660884 3.08271 1.83259C1.91101 3.0043 1.25194 4.59296 1.25012 6.25C1.25012 9.55125 6.50012 14.0831 7.09637 14.5894L7.50012 14.9306L7.90387 14.5894C8.50012 14.0831 13.7501 9.55125 13.7501 6.25C13.7483 4.59296 13.0892 3.0043 11.9175 1.83259C10.7458 0.660884 9.15717 0.00181975 7.50012 0V0ZM7.50012 9.375C6.88206 9.375 6.27787 9.19172 5.76397 8.84834C5.25006 8.50496 4.84952 8.0169 4.613 7.44589C4.37647 6.87487 4.31459 6.24653 4.43517 5.64034C4.55575 5.03415 4.85337 4.47733 5.29041 4.04029C5.72745 3.60325 6.28427 3.30562 6.89046 3.18505C7.49666 3.06447 8.12499 3.12635 8.69601 3.36288C9.26703 3.5994 9.75509 3.99994 10.0985 4.51384C10.4418 5.02775 10.6251 5.63193 10.6251 6.25C10.6241 7.0785 10.2946 7.87278 9.70873 8.45861C9.1229 9.04445 8.32862 9.37401 7.50012 9.375V9.375Z"
                      fill="white"
                    />
                    <path
                      d="M7.5 8.125C8.53553 8.125 9.375 7.28553 9.375 6.25C9.375 5.21447 8.53553 4.375 7.5 4.375C6.46447 4.375 5.625 5.21447 5.625 6.25C5.625 7.28553 6.46447 8.125 7.5 8.125Z"
                      fill="white"
                    />
                  </svg>
                  서울 강서구 강서로 388
                </span>
                <a
                  href="https://map.kakao.com/?from=roughmap&eName=%EB%8D%94%EB%B2%A0%EB%89%B4%EC%A7%80%EC%84%9C%EC%9A%B8&eX=464504.9999999995&eY=1127990.0000000023"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-white flex items-center justify-between"
                >
                  카카오 길찾기
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.80058 15.8846L12.6214 12.0629C13.1521 11.5074 13.4482 10.7687 13.4482 10.0004C13.4482 9.23213 13.1521 8.49342 12.6214 7.9379L8.80058 4.11623C8.56608 3.88174 8.24804 3.75 7.91641 3.75C7.58479 3.75 7.26674 3.88174 7.03225 4.11623C6.79775 4.35073 6.66601 4.66877 6.66601 5.0004C6.66601 5.33203 6.79775 5.65007 7.03225 5.88457L10.8539 9.70623C10.932 9.78437 10.9759 9.89033 10.9759 10.0008C10.9759 10.1113 10.932 10.2173 10.8539 10.2954L7.03224 14.1162C6.79775 14.3507 6.66601 14.6688 6.66601 15.0004C6.66601 15.332 6.79775 15.6501 7.03224 15.8846C7.26674 16.1191 7.58478 16.2508 7.91641 16.2508C8.24804 16.2508 8.56608 16.1191 8.80058 15.8846Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div class="fade lg:w-[480px] lg:px-0 px-8 py-12 lg:py-0">
              <h3 className="text-xl arita-buri-bold tracking-wider">지하철</h3>
              <div class="pt-4">
                <div className="arita-buri text-[15px]">
                  5호선 발산역 3번 출구
                </div>
                <div className="arita-buri text-[15px] pt-1">
                  - 도보 3분 거리
                </div>
              </div>
              <div class="pt-4">
                <div className="arita-buri text-[15px]">
                  9호선 양천향교역 6번 출구
                </div>
                <div className="arita-buri text-[15px] pt-1">
                  - 도보 약 10분 거리
                </div>
              </div>
              <h3 className="pt-6 mt-4 text-xl arita-buri-bold tracking-wider border-t border-primary-300 border-opacity-30">
                버스
              </h3>
              <div class="pt-4">
                <div className="arita-buri text-[15px]">간선버스, 지선버스</div>
                <div className="arita-buri text-[15px] pt-1">
                  - 601, 605, 654, 661, 6630, 6642, 6645, 6712
                </div>
              </div>
              <div class="pt-4">
                <div className="arita-buri text-[15px]">공항버스, 직행버스</div>
                <div className="arita-buri text-[15px] pt-1">
                  - 6003, 3000, 8000
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="gallery flex justify-center items-center bg-black bg-opacity-40">
        <div class="w-[360px]">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log("onSwiper", swiper)}
          >
            <SwiperSlide>
              <img
                className="max-w-[600px] w-full"
                src={mainImage}
                alt="메인 이미지"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="max-w-[600px] w-full"
                src={mainImage}
                alt="메인 이미지"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="max-w-[600px] w-full"
                src={mainImage}
                alt="메인 이미지"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default App;

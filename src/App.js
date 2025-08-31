import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Snowfall from "react-snowfall";

import infoImage from "./assets/images/info.png";
import bannerImage from "./assets/images/banner.png";
import menImage from "./assets/images/men.png";
import womenImage from "./assets/images/women.png";
import storyImage1 from "./assets/images/story1.png";
import storyImage2 from "./assets/images/story2.png";
import storyImage3 from "./assets/images/story3.png";
import storyImage4 from "./assets/images/story4.png";
import "swiper/css";
import Video from "./Video";

const flower1 = document.createElement("img");
flower1.src = "/assets/images/flower_1.png";
const flower2 = document.createElement("img");
flower2.src = "/assets/images/flower_2.png";
const flower3 = document.createElement("img");
flower3.src = "/assets/images/flower_3.png";
const images = [flower1, flower2, flower3];

function App() {
  const audioRef = useRef(null);
  const swiperRef = useRef(null);
  const [isOpenLeft, setIsOpenLeft] = useState(false);
  const [isOpenRight, setIsOpenRight] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const [isGroomBride, setIsGroomBride] = useState("groom");
  const [isPossible, setIsPossible] = useState(true);
  const [name, setName] = useState("");
  const [agree, setAgree] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isFirst, setIsFirst] = useState(true);
  const galleryImageList = [
    "/assets/images/1.png",
    "/assets/images/2.png",
    "/assets/images/3.png",
    "/assets/images/4.png",
    "/assets/images/5.png",
    "/assets/images/6.png",
    "/assets/images/7.png",
    "/assets/images/8.png",
    "/assets/images/9.png",
    "/assets/images/10.png",
    "/assets/images/11.png",
    "/assets/images/12.png",
    "/assets/images/13.png",
    "/assets/images/14.png",
    "/assets/images/15.png",
    "/assets/images/16.png",
    "/assets/images/17.png",
    "/assets/images/18.png",
    "/assets/images/19.png",
    "/assets/images/20.png",
    "/assets/images/21.png",
    "/assets/images/22.png",
    "/assets/images/23.png",
    "/assets/images/24.png",
    "/assets/images/25.png",
    "/assets/images/26.png",
    "/assets/images/27.png",
    "/assets/images/28.png",
    "/assets/images/29.png",
    "/assets/images/30.png",
  ];

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
    });
  }, options);

  const copyToClipboard = (title, text) => {
    navigator.clipboard.writeText(text);
    alert(`${title}가 복사되었습니다.`);
  };

  const togglePlay = () => {
    const audio = audioRef.current;

    if (audio) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play();
        setIsPlaying(true);
      }
    }
    setIsFirst(false);
  };

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const handleLeftButtonClick = () => {
    setIsOpenLeft(!isOpenLeft);
  };

  const handleRightButtonClick = () => {
    setIsOpenRight(!isOpenRight);
  };

  const handleGallerImageClick = (index) => {
    setActiveIndex(index);
    setIsOpenModal(!isOpenModal);
  };

  const handleCloseButtonClick = () => {
    setIsOpenModal(!isOpenModal);
  };

  const shareKaKao = () => {
    window.Kakao.Share.sendCustom({
      templateId: 123846,
    });
  };

  const submit = () => {
    if (!name.trim()) {
      alert(`성함을 입력해 주세요.`);
      return;
    }

    if (!agree) {
      alert("개인정보 수집 및 이용에 동의해주세요.");
      return;
    }

    alert(`참석 의사가 전달되었습니다!`);
    setIsOpenForm(!isOpenForm);
  };

  useEffect(() => {
    if (isOpenModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpenModal]);

  useEffect(() => {
    if (isOpenForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpenForm]);

  useEffect(() => {
    const fadeList = document.querySelectorAll(".fade");
    const fadoutList = document.querySelectorAll(".fadeout");

    const combinedList = [...fadeList, ...fadoutList];

    combinedList.forEach((el) => observer.observe(el));

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
        <div className="max-w-md mx-auto md:rounded-3xl shadow-xl lg:w-[400px]">
          <div className="relative flex flex-col h-screen lg:h-auto justify-center lg:w-[400px] max-w-md mx-auto lg:rounded-t-3xl overflow-hidden">
            <div className="z-50">
              <Snowfall
                speed={[0, 1.4]}
                radius={[11, 11]}
                snowflakeCount={15}
                images={images}
              />
            </div>
            <Video />
            <div class="absolute top-[12px] right-1/2 translate-x-1/2">
              <div class="fadeout toast px-4 py-2 bg-black rounded-full w-full">
                <p class="text-xs text-white text-center whitespace-nowrap">
                  배경음악이 준비 되었습니다.
                </p>
              </div>
            </div>
            <audio src="/assets/music.mp3" ref={audioRef} autoPlay loop />
            <button
              onClick={togglePlay}
              className={`fixed left-4 top-4 ${
                isPlaying ? "opacity-50" : "opacity-15"
              } z-30`}
            >
              {
                <div style={{ width: "23px", height: "23px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 23 23"
                    width="23"
                    height="23"
                    className="play-icon-svg"
                  >
                    <circle cx="11.5" cy="11.5" r="11.5" fill="#101010" />
                    {isPlaying || isFirst ? (
                      <g transform="translate(5.25, 17.5) scale(1, -1)">
                        {[0, 1, 2, 3, 4].map((i) => (
                          <rect
                            key={i}
                            x={i * 2.8}
                            y={0}
                            width="1.2"
                            height="10"
                            fill="white"
                            className={`bar bar-${i}`}
                          />
                        ))}
                      </g>
                    ) : (
                      <polygon points="9,7 16,11.5 9,16" fill="white" />
                    )}
                  </svg>
                </div>
              }
            </button>
          </div>
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
                      stroke="#C99CB2"
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
                      stroke="#C99CB2"
                      stroke-opacity="1"
                      stroke-width="2"
                      d=" M-1.7410000562667847,-6.458000183105469 C-1.7410000562667847,-6.458000183105469 8.251999855041504,-14.954000473022461 16.194000244140625,-9.310999870300293 C18.09600067138672,-7.960000038146973 17.510000228881836,-6.383999824523926 17.198999404907227,-5.51200008392334 C16.382999420166016,-3.2269999980926514 12.392000198364258,-2.7109999656677246 8.720999717712402,-4.283999919891357 C3.8940000534057617,-6.353000164031982 -0.2460000067949295,-6.547999858856201 -1.6050000190734863,-6.185999870300293 C-2.9639999866485596,-5.823999881744385 -6.99399995803833,-5.098999977111816 -9.982999801635742,-2.2909998893737793 C-12.972000122070312,0.5170000195503235 -20.98900032043457,3.5969998836517334 -26.785999298095703,1.6039999723434448"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
            <div class="fade suit-regular text-center text-[18px] text-gray-500 leading-9">
              예쁜 예감이 들었다.
              <br />
              우리는 언제나
              <br />
              손을 잡고 있게될 것이다.
              <br />
              <br />
              이이체 &lt;연인&gt;
              <br />
              <br />
              서로의 인연을 이어 사랑의 결실을 맺으려 합니다.
              <br />
              귀한 걸음으로 축복해 주세요.
            </div>
            <div className="fade suit-regular pt-8 text-center text-[18px]">
              신랑 김민호 · 신부 이혜진
            </div>
          </div>
          <div className="flex flex-col justify-center items-center lg:w-[400px] h-screen max-w-md mx-auto bg-primary-300">
            <div className="flex w-full justify-center items-center gap-5 text-white trumpet-creeper text-[96px]">
              <span className="fade static flex w-fit justify-center align-middle items-center overflow-y-clip h-28">
                <span className="reveal-text reveal-text1">D</span>
                <span className="reveal-text reveal-text2">E</span>
                <span className="reveal-text reveal-text3">C</span>
              </span>
              <span className="fade static flex w-fit justify-center align-middle items-center overflow-y-clip h-28">
                <span className="reveal-text reveal-text4">6</span>
              </span>
            </div>
            <div className="flex w-full justify-center items-center gap-5 text-white trumpet-creeper text-[96px]">
              <span className="fade static flex w-fit justify-center align-middle items-center overflow-y-clip h-28">
                <span className="reveal-text reveal-text5">2</span>
                <span className="reveal-text reveal-text6">0</span>
                <span className="reveal-text reveal-text7">2</span>
                <span className="reveal-text reveal-text8">5</span>
              </span>
            </div>
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
                <span className="text-primary-500">7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
                <span>11</span>
                <span>12</span>
                <span className="text-gray-400">13</span>
              </div>
              <div>
                <span className="text-primary-500">14</span>
                <span>15</span>
                <span>16</span>
                <span>17</span>
                <span>18</span>
                <span>19</span>
                <span className="text-gray-400">20</span>
              </div>
              <div>
                <span className="text-primary-500">21</span>
                <span>22</span>
                <span>23</span>
                <span>24</span>
                <span className="text-primary-500">25</span>
                <span>26</span>
                <span className="text-gray-400"> 27</span>
              </div>
              <div>
                <span className="text-primary-500">28</span>
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
                    fill="#C99CB2"
                  />
                </svg>
                <span>혜진의</span>
                <span>결혼식까지</span>
              </span>
            </div>
            <div className="fade flex items-center justify-center w-[350px] mt-4 gap-[10px]">
              <div className="flex-1 text-center rounded-md py-4 bg-white shadow-lg">
                <p className="text-[18px] dancing-script">{timeLeft.days}</p>
                <span className="text-[11px] text-gray-400 arita-buri">
                  DAYS
                </span>
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
              href="#location"
              className="fade flex w-[300px] justify-center items-center rounded-[8px] bg-primary-300 mt-12 py-3 px-16"
            >
              <span className="text-[16px] suit-regular text-white">
                위치 안내 바로가기
              </span>
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
                  src={menImage}
                  alt="신랑 이미지"
                />
                <div className="fade flex justify-center items-baseline gap-[10px] pt-[30px] py-[20px]">
                  <span className="text-[18px] suit-regular text-primary-300">
                    신랑
                  </span>
                  <span className="text-[18px] suit-regular">김민호</span>
                </div>
                <div className="fade text-center">
                  <div className="mb-5 suit-regular text-[15px]">
                    <p>1990년 2월 경기도 시흥 출생</p>
                    <p>엉뚱한 매력의 온달왕자</p>
                  </div>

                  <ul className="flex justify-center suit-regular text-[13px] gap-[5px] font-700">
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
                  <ul className="flex justify-center suit-regular text-[13px] gap-[5px] mt-1 font-700">
                    <li className="px-3 py-1 bg-primary-300 rounded-full text-white">
                      #꽃미소
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
                  src={womenImage}
                  alt="신부 이미지"
                />
                <div className="fade flex justify-center items-baseline gap-[10px] pt-[30px] py-[20px]">
                  <span className="text-[18px] suit-regular text-primary-300">
                    신부
                  </span>
                  <span className="text-[18px] suit-regular">이혜진</span>
                </div>
                <div className="fade text-center">
                  <div className="mb-5 suit-regular text-[15px]">
                    <p>1996년 1월 대구 출생</p>
                    <p>4차원 내조여왕 평강공주</p>
                  </div>

                  <ul className="flex justify-center suit-regular text-[13px] gap-[5px] font-700">
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
                  <ul className="flex justify-center suit-regular text-[13px] gap-[5px] font-700 mt-1">
                    <li className="px-3 py-1 bg-primary-300 rounded-full text-white">
                      #개그우먼
                    </li>
                    <li className="px-3 py-1 bg-primary-300 rounded-full text-white">
                      #장금이
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center pt-20 pb-10 lg:w-[400px] max-w-md mx-auto bg-gray-50">
            <h3 className="fade sub-title">OUR STORY</h3>
            <h2 className="fade flex flex-col items-center suit-regular py-4 text-[18px]">
              우리의 이야기
            </h2>
            <div className="py-[20px]">
              <div className="fade flex flex-row relative justify-center">
                <div className="w-full pl-[20px] pr-[40px]">
                  <img
                    className="w-full rounded-xl overflow-hidden"
                    src={storyImage1}
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
                  <h4 className="suit-regular text-[15px] pt-[16px]">
                    스치면 인연,
                    <br />
                    스며들면 사랑
                    <br />
                    그렇게 시작된 만남
                  </h4>
                </div>
                <div className="absolute top-0 bottom-0 left-0 right-0 border-l border-secondary-100 h-full w-[1px] m-auto"></div>
                <span className="absolute top-[20px] left-0 right-0 rounded-full w-[17px] h-[17px] bg-primary-300 border-[4px] border-gray-50 m-auto"></span>
              </div>
              <div className="fade flex flex-row-reverse relative justify-center pt-[40px]">
                <div className="w-full pr-[20px] pl-[40px]">
                  <img
                    className="w-full rounded-xl overflow-hidden"
                    src={storyImage2}
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
                  <h4 className="suit-regular text-[15px] pt-[16px]">
                    함께한 11번의 계절 속<br />
                    너무 닮아버린 우리
                  </h4>
                </div>
                <div className="absolute top-0 bottom-0 left-0 right-0 border-l border-secondary-100 h-full w-[1px] m-auto"></div>
                <span className="absolute top-[60px] left-0 right-0 rounded-full w-[17px] h-[17px] bg-primary-300 border-[4px] border-gray-50 m-auto"></span>
              </div>
              <div className="fade flex flex-row relative justify-center pt-[40px]">
                <div className="w-full pl-[20px] pr-[40px]">
                  <img
                    className="w-full rounded-xl overflow-hidden"
                    src={storyImage3}
                    alt="이야기1 이미지"
                  />
                </div>
                <div className="w-full flex flex-col justify-center pl-[10px]">
                  <div className="flex-inline w-auto self-start px-3 py-1 bg-primary-300 rounded-full text-white">
                    평생의 약속
                  </div>
                  <h3 className="suit-bold text-[15px] pt-[20px]">프로포즈</h3>
                  <h4 className="suit-regular text-[15px] pt-[16px]">
                    👰🏻 "Will you Marry me?"
                    <br />
                    🤵🏻 "Yes!"
                  </h4>
                </div>
                <div className="absolute top-0 bottom-0 left-0 right-0 border-l border-secondary-100 h-full w-[1px] m-auto"></div>
                <span className="absolute top-[60px] left-0 right-0 rounded-full w-[17px] h-[17px] bg-primary-300 border-[4px] border-gray-50 m-auto"></span>
              </div>
              <div className="fade flex flex-row-reverse relative justify-center pt-[40px]">
                <div className="w-full pr-[20px] pl-[40px]">
                  <img
                    className="w-full rounded-xl overflow-hidden"
                    src={storyImage4}
                    alt="이야기1 이미지"
                  />
                </div>
                <div className="w-full flex flex-col justify-center pl-[20px]">
                  <div className="flex-inline w-auto self-start px-3 py-1 bg-primary-300 rounded-full text-white">
                    25년 12월 6일
                  </div>
                  <h3 className="suit-bold text-[15px] pt-[20px]">
                    💍 웨딩데이
                  </h3>
                  <h4 className="suit-regular text-[15px] pt-[16px]">
                    두 사람이 사랑의 마음으로 <br />
                    하나 되어 가는 새로운 여정
                  </h4>
                </div>
                <div className="absolute top-0 bottom-0 left-0 right-0 border-l border-secondary-100 h-full w-[1px] m-auto"></div>
                <span className="absolute top-[60px] left-0 right-0 rounded-full w-[17px] h-[17px] bg-primary-300 border-[4px] border-gray-50 m-auto"></span>
              </div>
            </div>
            <div className="fade pt-10">
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
              {galleryImageList
                .map((source, index) => (
                  <div
                    className="flex justify-center items-center"
                    onClick={() => handleGallerImageClick(index)}
                  >
                    <div class="flex items-center rounded-none relative overflow-hidden aspect-square w-80">
                      <div class="absolute top-0 left-0 w-full h-full bg-transparent z-10"></div>
                      <img
                        alt="gallery-grid-6"
                        className="rounded-none object-cover object-top w-full h-full absolute"
                        src={source}
                      ></img>
                    </div>
                  </div>
                ))
                .slice(0, 9)}
            </div>
          </div>
          <div
            id="location"
            className="flex flex-col items-center pt-20 lg:w-[400px] max-w-md mx-auto bg-gray-50"
          >
            <h3 className="fade sub-title">LOCATION</h3>
            <h2 className="fade flex flex-col items-center suit-regular py-4 text-[18px]">
              더베뉴지 서울 2층 베뉴지홀
              <span class="text-gray-400 text-[15px] pt-4">
                서울 강서구 강서로 388
              </span>
            </h2>

            <div class="w-full justify-center gap-[40px] py-10">
              <div class="fade w-full relative">
                <div class="w-full h-[240px] bg-[url(./assets/images/map.png)] bg-center bg-cover"></div>
                <div class="absolute top-4 left-4 py-1 px-2 rounded-md bg-gray-900 bg-opacity-60">
                  <a
                    href="https://kko.kakao.com/X-1yeLI3v2"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-white flex items-center justify-between"
                  >
                    <span class="text-white flex items-center gap-[6px] text-[12px]">
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
                      카카오맵 열기
                    </span>
                  </a>
                </div>
              </div>
              <div class="fade px-8 py-12">
                <h3 className="text-xl suit-bold">지하철</h3>
                <div class="pt-4">
                  <div className="text-[15px]">5호선 발산역 3번 출구</div>
                  <div className="text-[15px] pt-1">- 도보 3분 거리</div>
                </div>
                <div class="pt-4">
                  <div className="text-[15px]">9호선 양천향교역 6번 출구</div>
                  <div className="text-[15px] pt-1">- 도보 약 10분 거리</div>
                </div>
                <h3 className="pt-6 mt-4 text-xl suit-bold tracking-wider border-t border-primary-300 border-opacity-30">
                  버스
                </h3>
                <div class="pt-4">
                  <div className="text-[15px]">간선버스, 지선버스</div>
                  <div className="text-[15px] pt-1">
                    - 601, 605, 654, 661, 6630, 6642, 6645, 6712
                  </div>
                </div>
                <div class="pt-4">
                  <div className="text-[15px]">공항버스, 직행버스</div>
                  <div className="text-[15px] pt-1">- 6003, 3000, 8000</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center py-20 lg:w-[400px] max-w-md mx-auto bg-primary-400">
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
                    fill="#C99CB2"
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
            <h2 className="fade flex flex-col items-center suit-regular py-4 text-[18px]">
              마음 전하실 곳
            </h2>
            <div class="fade suit-regular text-center text-[18px] leading-9">
              저희 두 사람의 소중한 시작을
              <br />
              축하해주시는 모든 분들께 감사드립니다.
              <br />
              따뜻한 진심을 감사히 오래도록 간직하고
              <br />
              행복하게 잘 살겠습니다.
            </div>
            <div class="fade flex w-full justify-center flex-col gap-[16px] py-12">
              <div class="px-8">
                <div
                  data-state={isOpenLeft ? "open" : "close"}
                  className="border-b border-none rounded-lg shadow-md"
                >
                  <button
                    data-state={isOpenLeft ? "open" : "close"}
                    type="button"
                    className="flex w-full flex-1 items-center justify-between font-medium text-gray-600 shadow-sm transition-all hover:rounded-md [&[data-state=open]>svg]:rotate-180 bg-white border-none rounded-lg data-[state=open]:rounded-b-none p-4 text-sm text-tog-444 h-[3.75rem] hover:bg-white"
                    onClick={() => handleLeftButtonClick()}
                  >
                    <span class="flex gap-[14px] text-gray-500 items-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_2269_2347)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.2522 0.846708C14.3636 0.749014 13.4672 0.749014 12.5785 0.846708C12.4039 0.865914 12.2477 0.964433 12.1552 1.11384L10.6663 3.51787C10.5501 3.70547 10.2742 3.69615 10.1709 3.50115L9.4696 2.17683C9.32449 1.90282 8.98734 1.79453 8.7098 1.93279C6.13788 3.2141 3.93082 4.85502 2.85428 6.72891C2.30835 7.67918 2.04345 8.70774 2.19512 9.77643C2.23781 10.0773 2.31279 10.3761 2.42043 10.6725C2.47892 10.8336 2.67043 10.8947 2.81677 10.8055C4.03445 10.0635 5.14599 9.24684 5.90374 8.50393C6.18542 8.22774 6.63765 8.23221 6.91384 8.5139C7.14812 8.75286 7.18044 9.11457 7.01289 9.3874C7.00265 9.40407 6.99 9.41898 6.97596 9.43261C6.43943 9.95379 5.75649 10.5196 4.9803 11.0822C4.76602 11.2375 4.54698 11.3909 4.32478 11.5414C3.9885 11.7627 3.64103 11.9796 3.28724 12.1896C3.28353 12.1918 3.28259 12.1967 3.28524 12.2002C3.28787 12.2036 3.28698 12.2085 3.28331 12.2107C2.39068 12.7546 1.48683 13.2298 0.66671 13.5758C0.230562 13.7598 0.0261884 14.2626 0.210228 14.6987C0.394268 15.1349 0.89703 15.3392 1.33317 15.1552C2.30691 14.7443 3.36403 14.1805 4.38711 13.5443C4.48484 13.4835 4.60923 13.4871 4.70623 13.5492C6.8137 14.8962 9.67481 14.2686 11.8891 12.4013C14.4443 10.2466 16.3176 6.35772 15.7577 1.35121C15.728 1.0855 15.5179 0.875925 15.2522 0.846708Z"
                            fill="#666666"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2269_2347">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      신랑측
                    </span>
                    <svg
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="transition-transform duration-200"
                    >
                      <path
                        d="M1 1L6.29289 6.68539C6.68342 7.10487 7.31658 7.10487 7.70711 6.68539L13 1"
                        stroke="#999"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    data-state={isOpenLeft ? "open" : "close"}
                    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                  >
                    {isOpenLeft && (
                      <div className="flex flex-col gap-[8px] px-3 py-4 rounded-b-lg bg-primary-400">
                        <div class="flex flex-col gap-[20px] bg-white shadow-lg rounded-xl p-5">
                          <div class="flex justify-between">
                            <span>신랑</span>
                            <span>김민호</span>
                          </div>
                          <div class="bg-gray-100 rounded-xl p-4">
                            <div className="flex justify-between">
                              <div>
                                <div className="text-gray-400">국민은행</div>
                                <div>238502-04-127818</div>
                              </div>
                              <div className="flex justify-between gap-[10px]">
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-[40px] rounded-full bg-white shadow-lg"
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
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-[40px] rounded-full bg-white shadow-lg"
                                  onClick={() =>
                                    copyToClipboard(
                                      "계좌번호",
                                      "238502-04-127818"
                                    )
                                  }
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
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-col gap-[20px] bg-white shadow-lg rounded-xl p-5">
                          <div class="flex justify-between">
                            <span>혼주</span>
                            <span>김해덕</span>
                          </div>
                          <div class="bg-gray-100 rounded-xl p-4">
                            <div className="flex justify-between">
                              <div>
                                <div className="text-gray-400">국민은행</div>
                                <div>606025-90-101196</div>
                              </div>
                              <div className="flex justify-between gap-[10px]">
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-[40px] rounded-full bg-white shadow-lg"
                                  onClick={() =>
                                    copyToClipboard(
                                      "계좌번호",
                                      "606025-90-101196"
                                    )
                                  }
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
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-col gap-[20px] bg-white shadow-lg rounded-xl p-5">
                          <div class="flex justify-between">
                            <span>혼주</span>
                            <span>박경자</span>
                          </div>
                          <div class="bg-gray-100 rounded-xl p-4">
                            <div className="flex justify-between">
                              <div>
                                <div className="text-gray-400">국민은행</div>
                                <div>602825-93-123294</div>
                              </div>
                              <div className="flex justify-between gap-[10px]">
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-[40px] rounded-full bg-white shadow-lg"
                                  onClick={() =>
                                    copyToClipboard(
                                      "계좌번호",
                                      "602825-93-123294"
                                    )
                                  }
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
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div class="px-8">
                <div
                  data-state={isOpenRight ? "open" : "close"}
                  className="border-b border-none rounded-lg shadow-md"
                >
                  <button
                    data-state={isOpenRight ? "open" : "close"}
                    type="button"
                    className="flex w-full flex-1 items-center justify-between font-medium text-gray-600 shadow-sm transition-all hover:rounded-md [&[data-state=open]>svg]:rotate-180 bg-white border-none rounded-lg data-[state=open]:rounded-b-none p-4 text-sm text-tog-444 h-[3.75rem] hover:bg-white"
                    onClick={() => handleRightButtonClick()}
                  >
                    <span class="flex gap-[14px] text-gray-500 items-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_2269_2347)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.2522 0.846708C14.3636 0.749014 13.4672 0.749014 12.5785 0.846708C12.4039 0.865914 12.2477 0.964433 12.1552 1.11384L10.6663 3.51787C10.5501 3.70547 10.2742 3.69615 10.1709 3.50115L9.4696 2.17683C9.32449 1.90282 8.98734 1.79453 8.7098 1.93279C6.13788 3.2141 3.93082 4.85502 2.85428 6.72891C2.30835 7.67918 2.04345 8.70774 2.19512 9.77643C2.23781 10.0773 2.31279 10.3761 2.42043 10.6725C2.47892 10.8336 2.67043 10.8947 2.81677 10.8055C4.03445 10.0635 5.14599 9.24684 5.90374 8.50393C6.18542 8.22774 6.63765 8.23221 6.91384 8.5139C7.14812 8.75286 7.18044 9.11457 7.01289 9.3874C7.00265 9.40407 6.99 9.41898 6.97596 9.43261C6.43943 9.95379 5.75649 10.5196 4.9803 11.0822C4.76602 11.2375 4.54698 11.3909 4.32478 11.5414C3.9885 11.7627 3.64103 11.9796 3.28724 12.1896C3.28353 12.1918 3.28259 12.1967 3.28524 12.2002C3.28787 12.2036 3.28698 12.2085 3.28331 12.2107C2.39068 12.7546 1.48683 13.2298 0.66671 13.5758C0.230562 13.7598 0.0261884 14.2626 0.210228 14.6987C0.394268 15.1349 0.89703 15.3392 1.33317 15.1552C2.30691 14.7443 3.36403 14.1805 4.38711 13.5443C4.48484 13.4835 4.60923 13.4871 4.70623 13.5492C6.8137 14.8962 9.67481 14.2686 11.8891 12.4013C14.4443 10.2466 16.3176 6.35772 15.7577 1.35121C15.728 1.0855 15.5179 0.875925 15.2522 0.846708Z"
                            fill="#666666"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2269_2347">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      신부측
                    </span>
                    <svg
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="transition-transform duration-200"
                    >
                      <path
                        d="M1 1L6.29289 6.68539C6.68342 7.10487 7.31658 7.10487 7.70711 6.68539L13 1"
                        stroke="#999"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    data-state={isOpenRight ? "open" : "close"}
                    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                  >
                    {isOpenRight && (
                      <div className="flex flex-col gap-[8px] px-3 py-4 rounded-b-lg bg-primary-400">
                        <div class="flex flex-col gap-[20px] bg-white shadow-lg rounded-xl p-5">
                          <div class="flex justify-between">
                            <span>신부</span>
                            <span>이혜진</span>
                          </div>
                          <div class="bg-gray-100 rounded-xl p-4">
                            <div className="flex justify-between">
                              <div>
                                <div className="text-gray-400">토스뱅크</div>
                                <div>1000-9136-201</div>
                              </div>
                              <div className="flex justify-between gap-[10px]">
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-[40px] rounded-full bg-white shadow-lg"
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
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-[40px] rounded-full bg-white shadow-lg"
                                  onClick={() =>
                                    copyToClipboard("계좌번호", "1000-9136-201")
                                  }
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
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center py-20 lg:w-[400px] max-w-md mx-auto bg-white">
            <h3 className="fade sub-title">ATTENDANCE</h3>
            <h2 className="fade flex flex-col items-center suit-regular py-4 text-[18px] text-center leading-9">
              축하의 마음으로 예식에 참석하시는
              <br />
              모든 분들을 더욱 귀하게 모실 수 있도록,
              <br />
              참석정보를 전해주세요
            </h2>
            <div class="fade suit-regular text-center p-8 mt-8 rounded-xl bg-primary-400">
              <h5 class="flex justify-center items-center gap-[10px] text-gray-600 leading-7">
                2025년 12월 06일
                <br />
                토요일 오후 2:40
              </h5>
              <h5 class="flex justify-center items-center gap-[10px] text-gray-600 mt-6">
                더베뉴지 서울 2층 베뉴지홀
              </h5>
              <button
                type="button"
                onClick={() => setIsOpenForm(!isOpenForm)}
                className="w-[300px] flex justify-center items-center bg-primary-300 rounded-[8px] mt-6 py-3 px-16"
              >
                <span className="text-[16px] text-white">
                  참석정보 전달하기
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center py-20 bg-primary-400 lg:w-[400px] max-w-md mx-auto">
            <h3 className="fade sub-title">INFORMATION</h3>
            <h2 className="fade flex flex-col items-center text-gray-800 py-4 suit-regular text-[18px]">
              저희 웨딩에 대한 사전 안내를 드립니다
            </h2>
            <div className="flex flex-col gap-[40px] py-[20px]">
              <div className="max-w-[340px] mx-auto bg-white rounded-xl p-8">
                <img
                  className="fade w-full rounded-xl overflow-hidden shadow-md"
                  src={infoImage}
                  alt="식사 이미지"
                />
                <div className="fade flex justify-center items-baseline pt-[30px] py-[20px]">
                  <span className="text-[18px] suit-regular">식사안내</span>
                </div>
                <div className="fade text-center">
                  <div className="flex flex-col gap-[20px] mb-5 suit-regular text-[15px] break-words">
                    <p>
                      뷔페 식사 요리가 준비되어 있으며,
                      <br />
                      식사 장소는 홀과 같은 층에 위치해 있습니다.
                    </p>
                    <p>
                      소중한 걸음해 주심에 진심으로 감사드리며
                      <br />
                      즐거운 시간 되시길 바랍니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[400px] max-w-md mx-auto lg:rounded-b-3xl overflow-hidden">
            <img
              className="max-w-[600px] w-full"
              src={bannerImage}
              alt="배너 이미지"
            />
            <div class="flex flex-col items-center justify-center bg-white gsap-div gap-y-3 min-h-28 py-9 px-9">
              <button
                onClick={() => shareKaKao()}
                class="flex items-center justify-between text-sm w-full h-12 px-5 rounded-xl bg-yellow-700 gsap-opacity disabled:bg-[#FCE777]/50"
              >
                <div>카카오톡으로 청첩장 전하기</div>
                <div>
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.1473 18.6464C4.95204 18.8417 4.95204 19.1583 5.1473 19.3536C5.34256 19.5488 5.65915 19.5488 5.85441 19.3536L18 7.20797L18 18C18 18.2761 18.2239 18.5 18.5 18.5C18.7761 18.5 19 18.2761 19 18L19 6C19 5.72386 18.7761 5.5 18.5 5.5L6.49999 5.5C6.22385 5.5 5.99999 5.72386 5.99999 6C5.99999 6.27614 6.22385 6.5 6.49999 6.5L17.2937 6.5L5.1473 18.6464Z"
                      fill="#222222"
                    ></path>
                  </svg>
                </div>
              </button>
              <button
                onClick={() =>
                  copyToClipboard("청첩장 주소", "https://weddinginvite.pics/")
                }
                class="items-center whitespace-nowrap text-sm font-medium ring-offset-background bg-primary-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground py-2 flex justify-between w-full h-12 px-5 rounded-xl gsap-opacity"
              >
                <div class="text-white">청첩장 주소 복사하기</div>
                <div>
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.5 1.5C4.67157 1.5 4 2.17157 4 3V16C4 16.8284 4.67157 17.5 5.5 17.5H15.5C16.3284 17.5 17 16.8284 17 16V3C17 2.17157 16.3284 1.5 15.5 1.5H5.5ZM5 3C5 2.72386 5.22386 2.5 5.5 2.5H15.5C15.7761 2.5 16 2.72386 16 3V16C16 16.2761 15.7761 16.5 15.5 16.5H5.5C5.22386 16.5 5 16.2761 5 16V3ZM21 6C21 5.72386 20.7761 5.5 20.5 5.5C20.2239 5.5 20 5.72386 20 6V19C20 19.8284 19.3284 20.5 18.5 20.5H8.5C8.22386 20.5 8 20.7239 8 21C8 21.2761 8.22386 21.5 8.5 21.5H18.5C19.8807 21.5 21 20.3807 21 19V6Z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      {isOpenModal && (
        <div class="modal flex justify-center items-center bg-black bg-opacity-20 z-50">
          <div className="relative h-full lg:w-[400px] max-w-md mx-auto">
            <button
              class="fixed right-4 top-4 ml-[-16px] z-40 hover:cursor-pointer"
              onClick={() => handleCloseButtonClick()}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="32"
                  height="32"
                  rx="16"
                  fill="white"
                  fill-opacity="0.8"
                ></rect>
                <path
                  d="M23 9L9 23"
                  stroke="#999999"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M23 23L9 9"
                  stroke="#999999"
                  stroke-linecap="round"
                ></path>
              </svg>
            </button>
            <div class="flex h-full lg:w-[400px] max-w-md mx-auto justify-center items-center bg-white">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                  swiper.slideTo(activeIndex, 0);
                }}
                className="h-full"
              >
                {galleryImageList.map((source) => (
                  <SwiperSlide>
                    <div className="flex justify-center items-center h-full">
                      <img
                        className="max-w-[600px] w-full"
                        src={source}
                        alt="메인 이미지"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div
              className="absolute top-0 left-0 w-1/7 h-full z-10"
              onClick={handlePrev}
            />
            <div
              className="absolute top-0 right-0 w-1/7 h-full z-10"
              onClick={handleNext}
            />
          </div>
        </div>
      )}
      {isOpenForm && (
        <div className="modal flex justify-center items-center bg-black bg-opacity-20 z-50">
          <div
            data-state={isOpenForm ? "open" : "closed"}
            className="
              bg-gray-100 relative max-w-lg w-full h-5/6 overflow-scroll py-12 p-6
              shadow-lg duration-200
              md:rounded-md focus:outline-none
            "
          >
            <button
              type="button"
              className="absolute right-3 top-3 p-2"
              onClick={() => setIsOpenForm(!isOpenForm)}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 9L9 23"
                  stroke="#999999"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M23 23L9 9"
                  stroke="#999999"
                  stroke-linecap="round"
                ></path>
              </svg>
            </button>
            <div className="flex flex-col">
              <h2 className="suit-regular py-4 text-[22px] text-center">
                참석 의사 전달하기
              </h2>
              <p className="leading-6 text-gray-500 text-center">
                한 분 한 분을 소중히 모실 수 있도록
                <br />
                참석 의사를 전해주시면 감사하겠습니다.
              </p>
              <div className="pt-12 flex flex-col gap-[25px]">
                <dl className="flex flex-col gap-[7px]">
                  <dt className="flex text-[14px] text-gray-600">
                    어느 분의 하객이신가요?
                    <span class="text-tog-pink ml-1 mt-[1px]">
                      <svg
                        width="4"
                        height="4"
                        viewBox="0 0 4 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="4" height="4" rx="2" fill="#C99CB2"></rect>
                      </svg>
                    </span>
                  </dt>
                  <dd className="flex gap-[10px] w-full">
                    <button
                      type="button"
                      onClick={() => setIsGroomBride("groom")}
                      className={`w-1/2 flex justify-center items-center ${
                        isGroomBride === "groom" ? "bg-primary-300" : "bg-white"
                      }  rounded-[8px] shadow-md py-3 px-16`}
                    >
                      <span
                        className={`text-[16px] ${
                          isGroomBride === "groom"
                            ? "text-white"
                            : "text-gray-400"
                        }`}
                      >
                        신랑
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsGroomBride("bride")}
                      className={`w-1/2 flex justify-center items-center ${
                        isGroomBride === "bride" ? "bg-primary-300" : "bg-white"
                      }  rounded-[8px] shadow-md py-3 px-16`}
                    >
                      <span
                        className={`text-[16px] ${
                          isGroomBride === "bride"
                            ? "text-white"
                            : "text-gray-400"
                        }`}
                      >
                        신부
                      </span>
                    </button>
                  </dd>
                </dl>
                <dl className="flex flex-col gap-[7px]">
                  <dt className="flex text-[14px] text-gray-600">
                    참석여부를 알려주세요
                    <span class="text-tog-pink ml-1 mt-[1px]">
                      <svg
                        width="4"
                        height="4"
                        viewBox="0 0 4 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="4" height="4" rx="2" fill="#C99CB2"></rect>
                      </svg>
                    </span>
                  </dt>
                  <dd className="flex gap-[10px] w-full">
                    <button
                      type="button"
                      onClick={() => setIsPossible(true)}
                      className={`w-1/2 flex justify-center items-center ${
                        isPossible ? "bg-primary-300" : "bg-white"
                      }  rounded-[8px] shadow-md py-3`}
                    >
                      <span
                        className={`text-[16px] ${
                          isPossible ? "text-white" : "text-gray-400"
                        }`}
                      >
                        참석할게요
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsPossible(false)}
                      className={`w-1/2 flex justify-center items-center ${
                        !isPossible ? "bg-primary-300" : "bg-white"
                      }  rounded-[8px] shadow-md py-3`}
                    >
                      <span
                        className={`text-[16px] ${
                          !isPossible ? "text-white" : "text-gray-400"
                        }`}
                      >
                        참석이 어려워요
                      </span>
                    </button>
                  </dd>
                </dl>
                <dl className="flex flex-col gap-[7px]">
                  <dt className="flex text-[14px] text-gray-600">
                    성함
                    <span class="text-tog-pink ml-1 mt-[1px]">
                      <svg
                        width="4"
                        height="4"
                        viewBox="0 0 4 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="4" height="4" rx="2" fill="#C99CB2"></rect>
                      </svg>
                    </span>
                  </dt>
                  <dd className="flex gap-[10px] w-full">
                    <input
                      type="text"
                      placeholder="성함을 입력해 주세요"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="flex w-full border border-input px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-0 focus-visible:ring-offset-0 h-12 shadow-md rounded-md border-none placeholder:text-gray-400"
                    />
                  </dd>
                </dl>
                <dl className="flex flex-col gap-[7px]">
                  <dt className="flex text-[14px] text-gray-600">
                    개인정보 수집 및 이용 동의
                    <span class="text-tog-pink ml-1 mt-[1px]">
                      <svg
                        width="4"
                        height="4"
                        viewBox="0 0 4 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="4" height="4" rx="2" fill="#C99CB2"></rect>
                      </svg>
                    </span>
                  </dt>
                  <dd className="flex flex-col gap-[5px] w-full">
                    <div className="text-[12px] bg-white border border-gray-300  px-3 py-2 w-full rounded-md text-gray-400">
                      참석 정보 전달을 위한 개인정보 수집 및 이용에
                      동의해주세요.
                      <br />
                      항목: 성함 · 보유기간: 청첩장 이용 종료시 까지
                    </div>
                    <label className="flex gap-[5px]">
                      <input
                        type="checkbox"
                        className="border border-gray-400"
                        checked={agree}
                        onChange={(e) => setAgree(e.target.checked)}
                      />
                      <span className="text-[14px] text-gray-600">동의함</span>
                    </label>
                  </dd>
                </dl>
              </div>
              <button
                type="button"
                onClick={() => submit()}
                className="w-full mt-10 flex justify-center items-center bg-primary-300 rounded-[8px] shadow-md py-3 px-16"
              >
                <span className="text-[16px] text-white">전달하기</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

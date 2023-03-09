import React, { useState, useEffect } from "react";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// swiper css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// icons
import { BsStarFill } from "react-icons/bs";
import {
  FiFile,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";

// spotify embed
import { Spotify } from "react-spotify-embed";

// animations
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import { TypeAnimation } from "react-type-animation";

const Cards = () => {
  // clock functions
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  // skills
  const skills = [
    {
      id: 1,
      title: "Node.JS",
      score: 3,
    },
    {
      id: 2,
      title: "ReactJS",
      score: 4,
    },
    {
      id: 3,
      title: "Chess",
      score: 3,
    },
  ];

  return (
    <div className="w-[60vw]">
      {/* desktop view */}
      <div className="desktop-viewer hidden lg:block ">
        <div className="flex flex-row w-max">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="rounded-3xl  z-10 shadow-lg border-l-gray-600 bg-white  border-dashed border-l-4 h-[200px] w-[300px]"
          >
            <div className="flex flex-row justify-between items-center h-full">
              <div className=" transition-all hover:cursor-default w-fit ml-6 rounded-lg border-dashed border-l-gray-500 border-l-4">
                <img
                  src="https://avatars.githubusercontent.com/u/116475964?v=4"
                  alt="profile"
                  className="rounded-md w-[170px] h-auto  "
                />
              </div>
              <div className="p-[10px]">
                <p className="rotate-90 tracking-[10px]">ᚹᚾᚱ</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3 }}
            className="rounded-3xl border-l-gray-600 grid-cols-2 col-span-2 h-[200px]"
          >
            <div className="flex flex-row pl-11 items-center h-full w-[550px]">
              <div className="flex flex-col">
                <p className="text-left font-bold text-2xl">
                  Wake up traveler!
                </p>
                <div className="border-t-gray-400 border-dashed border-[3px] h-[1px] w-[50%]" />
                <p
                  variants={navVariants}
                  initial="hidden"
                  whileinview="show"
                  className="text-left text-[1rem]"
                >
                  My name is Salman, I am a{" "}
                  <span>
                    <TypeAnimation
                      sequence={[
                        "Designer",
                        2000, // Waits 1s
                        "Frontend Developer",
                        2000, // Waits 2s
                        "Backend Developer",
                        2000,

                        () => {},
                      ]}
                      wrapper="span"
                      cursor={true}
                      repeat={Infinity}
                      className="text-[1rem] font-bold"
                    />
                  </span>
                  <br />A 3rd year student at{" "}
                  <span className="font-semibold">
                    University of Diponegoro
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="container mx-auto grid lg:grid-cols-3 pt-4 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3 }}
            className="rounded-3xl overflow-hidden shadow-lg border-l-gray-600 bg-white border-dashed border-l-4 h-[200px]"
          >
            <div className="pt-5 overflow-hidden">
              <p className="font-bold text-lg">Connect w/ me!</p>
            </div>
            <div className="w-full justify-center gap-5 p-3 flex flex-row">
              <a className="" href="https://linkedin.com/in/muhammadsalmoon/">
                <FiLinkedin className="w-[30px] h-[30px] text-gray-600 hover:scale-125 transition-all hover:text-gray-700" />
              </a>
              <a className="" href="https://github.com/MuhammadSalmanAlfarisi/">
                <FiGithub className="w-[30px] h-[30px] text-gray-600 hover:scale-125 transition-all hover:text-gray-700 " />
              </a>
            </div>
            <div className="w-full justify-center gap-5 p-3 flex flex-row">
              <a className="" href="https://instagram.com/msalman_af">
                <FiInstagram className="w-[30px] h-[30px] text-gray-600 hover:scale-125 transition-all hover:text-gray-700" />
              </a>
              <a className="" href="https://twitter.com/">
                <FiTwitter className="w-[30px] h-[30px] text-gray-600 hover:scale-125 transition-all hover:text-gray-700" />
              </a>
              <a
                className=""
                href="https://pdfhost.io/v/LXs9psshx_Muhammad_Salman_Alfarisi_Frontend_Developer"
              >
                <FiFile className="w-[30px] h-[30px] text-gray-600 hover:scale-125 transition-all hover:text-gray-700" />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3 }}
            className="rounded-3xl overflow-hidden shadow-lg border-l-gray-600 bg-white border-dashed border-l-4 h-[200px]"
          >
            <div className="flex flex-col justify-center items-center h-full">
              <p className="text-[20px] font-bold">Skills</p>
              <div className="flex flex-row gap-4">
                {skills.map((skill) => (
                  <div key={skill.id} className="flex flex-col text-md">
                    <p>{skill.title}</p>
                    <div className="flex flex-row">
                      {[...Array(skill.score)].map((star) => (
                        <BsStarFill className="h-5 w-5 text-gray-800" />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3, delay: 0.2 }}
            className="rounded-3xl shadow-lg bg-white h-[200px] overflow-hidden"
          >
            <Spotify
              wide
              link="https://open.spotify.com/playlist/74clBi8Er3mAlibOQPRex1?si=12a8e79b88554ef8"
              className="h-[400px] text-[#1db954]"
            />
          </motion.div>
        </div>

        <div className="container mx-auto grid lg:grid-cols-2 pt-4 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3 }}
            className="rounded-3xl overflow-hidden shadow-lg border-l-gray-600 bg-white border-dashed border-l-4 h-[200px]"
          >
            <div className="flex flex-col place-content-between h-full py-12">
              <div className="japanese-words font-serif text-[24px] bold">
                - <span className="text-[20px] font-normal">サルマン</span> -
              </div>
              <div className="full-name text-gray-800 font-bold text-[36px]">
                <TypeAnimation
                  sequence={[
                    "Muhammad Salman Alfarisi",
                    3000,
                    "Moon",
                    300,
                    () => {},
                  ]}
                  wrapper="div"
                  cursor={false}
                  repeat={Infinity}
                  className="text-[80%] hover:cursor-pointer"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3 }}
            className="rounded-3xl items-center justify-center flex-col flex overflow-hidden shadow-lg border-l-gray-600 bg-white border-dashed border-l-4 h-[200px]"
          >
            <div className="">
              <p className="text-lg font-bold">Projects</p>
              <div className="flex flex-row gap-3 items-center justify-center">
                <img
                  src="./src/assets/magjin.png"
                  alt=""
                  className="w-[25%] h-fit border-2 border-gray-700 border-dashed rounded-md"
                />
                <img
                  src="./src/assets/intech.png"
                  alt=""
                  className="w-[25%] h-fit border-2 border-gray-700 border-dashed rounded-md"
                />
                <img
                  src="./src/assets/spline.png"
                  alt=""
                  className="w-[25%] h-fit border-2 border-gray-700 border-dashed rounded-md"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* mobile view */}
      <div className="mobile-viewer lg:hidden h-full w-full  flex items-center flex-col md:mt-40 md:pb-10">
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-white shadow-sm border-l-2 border-l-gray-600 border-dashed px-[3vw] rounded-xl mb-5 w-full flex"
        >
          <div className="flex flex-row items-center gap-2 justify-around w-full p-[2vw]">
            <img
              src="https://avatars.githubusercontent.com/u/116475964?v=4"
              alt=""
              className="rounded-2xl w-[100px] h-[100px]"
            />
            <div>
              <p className="font-bold text-[13px]">Muhammad Salman Alfarisi</p>
              <div className="flex flex-col items-center justify-start">
                <p className="font-bold text-[13px] flex flex-row text-left">
                  ᚹ -
                  <span>
                    <TypeAnimation
                      sequence={["web", 1000, () => {}]}
                      wrapper="span"
                      cursor={true}
                      repeat={Infinity}
                      className="m-[5px] text-[12px] font-normal"
                      speed={1}
                    />
                  </span>
                </p>
                <p className="font-bold text-[13px]">
                  ᚾ -{" "}
                  <span>
                    <TypeAnimation
                      sequence={["native", 1000, () => {}]}
                      wrapper="span"
                      cursor={true}
                      repeat={Infinity}
                      className="m-[5px] text-[12px] font-normal"
                      speed={1}
                    />
                  </span>
                </p>
                <p className="font-bold text-[13px]">
                  ᚱ -{" "}
                  <span>
                    <TypeAnimation
                      sequence={["react", 1000, () => {}]}
                      wrapper="span"
                      cursor={true}
                      repeat={Infinity}
                      className="m-[5px] text-[12px] font-normal"
                      speed={1}
                    />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1 }}
          className="bg-white flex items-center shadow-sm border-l-2 border-l-gray-600 border-dashed px-[3vw] w-full h-12 rounded-xl"
        >
          <div className="flex flex-row w-full justify-between px-5 gap-5 items-center">
            <a className="" href="https://linkedin.com/in/muhammadsalmoon/">
              <FiLinkedin className="w-[20px] h-[20px] text-gray-600 hover:scale-125 transition-all hover:text-gray-700" />
            </a>
            <a className="" href="https://github.com/MuhammadSalmanAlfarisi/">
              <FiGithub className="w-[20px] h-[20px] text-gray-600 hover:scale-125 transition-all hover:text-gray-700 " />
            </a>
            <a className="" href="https://instagram.com/msalman_af">
              <FiInstagram className="w-[20px] h-[20px] text-gray-600 hover:scale-125 transition-all hover:text-gray-700" />
            </a>
            <a className="" href="https://twitter.com/">
              <FiTwitter className="w-[20px] h-[20px] text-gray-600 hover:scale-125 transition-all hover:text-gray-700" />
            </a>
            <a
              className=""
              href="https://pdfhost.io/v/LXs9psshx_Muhammad_Salman_Alfarisi_Frontend_Developer"
            >
              <FiFile className="w-[20px] h-[20px] text-gray-600 hover:scale-125 transition-all hover:text-gray-700" />
            </a>
          </div>
        </motion.div>
        <div className="my-2">
          <motion.p
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            {date.toLocaleTimeString()}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3 }}
          className="py-2"
        >
          {/* carousel */}
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper h-[130px] w-[250px] md:w-[500px] md:h-[250px] flex  items-center justify-center rounded-2xl shadow-xl border-2 border-gray-700 border-dashed"
          >
            <SwiperSlide>
              <img src="./src/assets/magjin.png" alt="" className="w-full" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./src/assets/intech.png" alt="" className="w-full" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./src/assets/spline.png" alt="" className="w-full" />
            </SwiperSlide>
          </Swiper>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4 }}
          className="py-2"
        >
          {/* carousel */}
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper h-[130px] w-[250px] md:w-[500px] md:h-[250px] flex  items-center justify-center rounded-2xl shadow-xl border-2 border-gray-700 border-dashed"
          >
            <SwiperSlide>
              <img src="./src/assets/magjin.png" alt="" className="w-full" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./src/assets/intech.png" alt="" className="w-full" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./src/assets/spline.png" alt="" className="w-full" />
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
};

export default Cards;

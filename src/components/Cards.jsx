import React from "react";

import { BsStarFill } from "react-icons/bs";
import {
  ImGithub,
  ImInstagram,
  ImLinkedin,
  ImSteam,
  ImTwitter,
} from "react-icons/im";
import { TbPdf } from "react-icons/tb";
import { Spotify } from "react-spotify-embed";

import { motion } from "framer-motion";
import { navVariants, staggerContainer } from "../utils/motion";
import { TypeAnimation } from "react-type-animation";

const Cards = () => {
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
    // desktop view
    <div className="w-[60vw]">
      <div className="desktop-viewer hidden lg:block">
        <div className="container mx-auto grid lg:grid-cols-4 pt-4 gap-4">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="rounded-3xl w-max  z-10 shadow-lg border-l-gray-600 bg-white  border-dashed border-l-4 h-[200px] hover:bg-red"
          >
            <div className="flex flex-row justify-between items-center h-full">
              <div className=" transition-all hover:cursor-default w-fit ml-6 rounded-lg border-dashed border-l-gray-500 border-l-4">
                <img
                  src="https://avatars.githubusercontent.com/u/116475964?v=4"
                  alt="profile"
                  className="rounded-md w-[170px]  "
                />
              </div>
              <div className="p-[10px]">
                <p className="rotate-90 tracking-[10px]">
                  ᚻᛖᚣ
                  {/* <ul>
                  <li>
                    <VscTwitter className="h-6 w-6 my-4 hover:scale-125 hover:cursor-pointer" />
                  </li>
                  <li>
                    <VscGithubAlt className="h-6 w-6 my-4 hover:scale-125 hover:cursor-pointer" />
                  </li>
                  <li>
                    <VscCallIncoming className="h-6 w-6 my-4 hover:scale-125 hover:cursor-pointer" />
                  </li>
                </ul> */}
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3 }}
            className="rounded-3xl overflow-hidden border-l-gray-600 grid-cols-2 col-span-2 h-[200px]"
          >
            <div className="flex flex-row justify-center items-center h-full w-[550px]">
              <div className="flex flex-col">
                <p className="text-left font-bold text-[29px]">
                  Wake up traveler!
                </p>
                <div className="border-t-gray-400 border-dashed border-[3px] h-[1px] w-[400px]" />
                <p
                  variants={navVariants}
                  initial="hidden"
                  whileinview="show"
                  className="text-left text-[19px]"
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

                        () => {
                          console.log("Done typing!"); // Place optional callbacks anywhere in the array
                        },
                      ]}
                      wrapper="span"
                      cursor={true}
                      repeat={Infinity}
                      className="text-[19px] font-bold"
                    />
                  </span>
                  <br />A 3rd year student at{" "}
                  <span className="font-semibold">
                    University of Diponegoro, Semarang
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
              <a
                className="hover:scale-125 transition-all"
                href="https://linkedin.com/in/muhammadsalmoon/"
              >
                <ImLinkedin className="w-[30px] h-[30px]" />
              </a>
              <a
                className="hover:scale-125 transition-all"
                href="https://github.com/MuhammadSalmanAlfarisi/"
              >
                <ImGithub className="w-[30px] h-[30px]" />
              </a>
              <a className="hover:scale-125 transition-all" href="https://steamcommunity.com/id/s4lm00n">
                <ImSteam className="w-[30px] h-[30px]" />
              </a>
            </div>
            <div className="w-full justify-center gap-5 p-3 flex flex-row">
              <a className="hover:scale-125 transition-all" href="https://instagram.com/msalman_af">
                <ImInstagram className="w-[30px] h-[30px]" />
              </a>
              <a className="hover:scale-125 transition-all" href="https://twitter.com/">
                <ImTwitter className="w-[30px] h-[30px]" />
              </a>
              <a className="hover:scale-125 transition-all" href="https://pdfhost.io/v/LXs9psshx_Muhammad_Salman_Alfarisi_Frontend_Developer">
                <TbPdf className="w-[30px] h-[30px]" />
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
                        <BsStarFill className="h-5 w-5 text-yellow-400" />
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
            className="rounded-3xl shadow-lg border-l-gray-600 bg-white border-dashed border-l-4 h-[200px] overflow-hidden"
          >
            <Spotify wide link="https://open.spotify.com/playlist/74clBi8Er3mAlibOQPRex1?si=12a8e79b88554ef8" className="h-[400px]"/>
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
                    // Types 'Three' without deleting 'Two'
                    () => {
                      console.log("Done typing!"); // Place optional callbacks anywhere in the array
                    },
                  ]}
                  wrapper="div"
                  cursor={false}
                  repeat={Infinity}
                  className="text-[36px] hover:cursor-pointer"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3 }}
            className="rounded-3xl overflow-hidden shadow-lg border-l-gray-600 bg-white border-dashed border-l-4 h-[200px]"
          >
            Foto
          </motion.div>
        </div>
      </div>
      {/* mobile view */}
      <div className="mobile-viewer lg:hidden w-full overflow-auto">
        <p>KONTOLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL</p>
      </div>
    </div>
  );
};

export default Cards;

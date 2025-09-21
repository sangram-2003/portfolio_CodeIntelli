import React from "react";
import { FaYoutube } from "react-icons/fa6";

import { FaInstagram } from "react-icons/fa6";
<FaInstagram />;
import { FaXTwitter } from "react-icons/fa6";

import { SiFreelancer } from "react-icons/si";

import { IoLogoLinkedin } from "react-icons/io5";
<IoLogoLinkedin />;
import { FaArrowRightLong } from "react-icons/fa6";

import { FaHtml5 } from "react-icons/fa";

import { IoLogoCss3 } from "react-icons/io";

import { RiTailwindCssFill } from "react-icons/ri";

import { GrJs } from "react-icons/gr";

import { LiaReact } from "react-icons/lia";

import { SiMongodb } from "react-icons/si";

import { TiHome } from "react-icons/ti";

import { BsFillGearFill } from "react-icons/bs";
<BsFillGearFill />;
import { FcManager } from "react-icons/fc";
<FcManager />;
import { IoIosContact } from "react-icons/io";
<IoIosContact />;
import { BiSupport } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="min-h-[10rem] px-2   rounded-md col-span-2 row-span-1 ">
     <div className="h-full px-2 flex-col-reverse flex sm:flex-row rounded-md col-span-2 row-span-1 ">
       <div className="w-full sm:w-1/2 md:w-full h-full  ">
        <h6 className="md:text-[4rem] sm:text-[3.5rem] text-[3.5rem] m-0 tracking-wide font-serif font-semibold">
          Mern Stack Developer
        </h6>
        <p className="-mt-2 w-4/6 leading-5 font-sans tracking-wide text-gray-800">
         
         I am a passionate web developer specializing in the MERN stack, with hands-on experience integrating Large Language Models (LLMs) to build modern, intelligent, and scalable applications.
            </p>
        <div className="flex -mt-3 items-center gap-3 w-full h-10">
          <IconList />
        </div>
      </div>
      <div className="sm:ml-2  w-full   flex sm:flex md:hidden h-full sm:w-1/2 justify-center items-center  ">
        <div className="w-full h-80 sm:h-64 relative ">
          <img src="./Profile.png" className="   w-full h-full rounded-md bg-cover object-cover "></img>
          </div>
          </div>
     </div>
    </div>
  );
};

const IconList = () => (
  <>
    <div className="h-8 w-8 rounded-full backdrop-blur-sm flex items-center justify-center border-2 border-gray-200">
      <SiMongodb className="text-green-900 text-xl font-bold" />
    </div>
    <div className="h-8 w-8 rounded-full bg-white backdrop-blur-sm flex items-center justify-center border-2 border-gray-200">
      <LiaReact className="text-sky-800 text-xl font-bold" />
    </div>
    <div className="h-8 w-8 rounded-full bg-white backdrop-blur-sm flex items-center border-2 border-gray-200">
      <GrJs className="text-yellow-500 text-2xl font-bold -mt-2" />
    </div>
    <div className="h-8 w-8 rounded-full bg-white backdrop-blur-sm flex items-center justify-center border-2 border-gray-200">
      <RiTailwindCssFill className="text-sky-700 text-xl font-bold" />
    </div>
    <div className="h-8 w-8 rounded-full bg-white backdrop-blur-sm flex items-center justify-center border-2 border-gray-200">
      <IoLogoCss3 className="text-blue-600 text-2xl font-bold" />
    </div>
    <div className="h-8 w-8 rounded-full bg-white backdrop-blur-sm flex items-center justify-center border-2 border-gray-200">
      <FaHtml5 className="text-orange-600 text-2xl font-bold" />
    </div>
  </>
);

export default Hero;

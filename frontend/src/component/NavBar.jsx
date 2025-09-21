import React, { useState } from "react";

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
import { GiManualJuicer } from "react-icons/gi";
import { HiViewList } from "react-icons/hi";
import {
  FaAlignJustify,
  FaArrowRight,
  FaAtlassian,
  FaXmark,
} from "react-icons/fa6";
import Wave from "./Wave";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [navToggle, setNavToggle] = useState(false);

  const handleNavToggle = (toggle) => {
    setNavToggle(toggle);
    //console.log(navToggle);
  };
  return (
    <>
      <div
        className={`border-b-2 flex  items-center h-10 justify-between min-h-[3.5rem] px-2 col-span-2 row-span-1 ${
          navToggle === true ? "hidden" : null
        }`}
      >
        <div className="text-xl font-extrabold">
          <span className="text-violet-700 text-[1.5rem]">.</span>
          <span className="text-sky-700">C</span>odeIntelli
        </div>
        <div className="flex items-center space-x-8 w-auto justify-center ">
          <div className="h-8 w-8   rounded-full">
            <NavLink to={"https://github.com/sangram-2003"} target="_blank">
              <FaGithub className="w-full h-full text-black" />
            </NavLink>
           
            
          </div>
          <div
            className="h-8 w-8 md:hidden  rounded-full"
            onClick={() => handleNavToggle(true)}
          >
            <HiViewList className="w-full h-full" />
          </div>
        </div>
      </div>

      <div
        className={`inset-0 z-10 w-screen h-screen  bg-white ${
          navToggle === false ? "hidden" : ""
        } fixed  pointer md:hidden  px-2 `}
      >
        <div className="flex justify-between py-2 px-2">
          <div className="text-xl font-extrabold">
            <span className="text-violet-700 text-[1.5rem]">.</span>
            <span className="text-sky-700">M</span>yfulio
          </div>
          <button
            className="text-xl pr-2 text-gray-600 md:hidden"
            onClick={() => handleNavToggle(false)}
          >
            <FaXmark />
          </button>
        </div>
        <hr className="m-1  border-2 border-gray-700 "></hr>

        <div className="w-full px-4 py-4">
           <div className="w-full h-64 relative flex justify-center  ">
               <img src="./Profile.png" className="   w-2/3 h-full rounded-md bg-cover object-cover "></img>

           </div>
        
                   <div className="w-full px-4 ">
            <p className="text-xl  font-serif mt-2  text-center font-bold tracking-wide">
              Sangram Bauri
            </p>
            <div className="flex  justify-center space-x-3 mb-2 -mt-1 ">
              <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm  flex items-center justify-center border-2 border-gray-200">
                <FaXTwitter className="text-black  text-md  font-bold" />
              </div>
              <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center  border-2 border-gray-200">
                <SiFreelancer className="text-sky-700  text-xl ml-0.5 mt-1 font-bold" />
              </div>
              <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-gray-200">
                <IoLogoLinkedin className="text-blue-900 text-xl  font-bold" />
              </div>
              <div className="h-10 w-10 rounded-full  bg-white/20 backdrop-blur-sm flex items-center justify-center  border-2 border-gray-200">
                <FaYoutube className="text-red-700 text-xl  font-bold" />
              </div>
            </div>
            {/* manu */}
            <div className="flex-col justify-center space-y-1 mt-4 ">
              <div
                className="w-full h-8   px-8 hover:bg-[rgb(123,209,236)]/80   hover:scale-105 transition-all  duration-100 rounded-md flex items-center justify-around
                  
                  text-lg font-medium"
              >
                <TiHome className="text-black text-lg  font-bold" /> Home
              </div>
              <div
                className="w-full h-8 px-8 hover:bg-[rgb(123,209,236)]/80 hover:scale-105 transition-all  duration-100 rounded-md flex items-center justify-around
                  
                  text-lg font-medium"
              >
                <BsFillGearFill className="text-black text-lg  font-bold" />{" "}
                Project
              </div>
              <div
                className="w-full h-8 px-8 hover:bg-[rgb(123,209,236)]/80  hover:scale-105 transition-all  duration-100 rounded-md flex items-center justify-around
                  
                  text-lg font-medium"
              >
                <IoIosContact className="text-black text-lg  font-bold" /> About
              </div>
              <div
                className="w-full h-8 px-8 hover:bg-[rgb(123,209,236)]/80  hover:scale-105 transition-all  duration-100 rounded-md flex items-center justify-around
                  
                  text-lg font-medium"
              >
                <BiSupport className="text-black text-lg  font-bold" /> Contact
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;

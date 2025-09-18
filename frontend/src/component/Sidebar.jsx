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

import { BsFillGearFill, BsRainbow } from "react-icons/bs";
<BsFillGearFill />;
import { FcManager } from "react-icons/fc";
<FcManager />;
import { IoIosContact } from "react-icons/io";
<IoIosContact />;
import { BiBrain, BiSupport } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";
import Wave from "./Wave";
import { Link, NavLink } from "react-router-dom";
import { MdPreview } from "react-icons/md";

const Sidebar = () => {
  return (
    <>
      <div className="bg-white border-r-[0.5px] hidden sm:hidden md:block shadow-xl shadow-black border-gray-200 overflow-hidden relative py-2  min-h-60 md:col-span-3 md:w-[18rem]  md:fixed md:h-full  ">
        <div className="w-full px-4 py-4 ">
          <div className="w-full h-64 relative">
          <img src="./Profile.png" className="   w-full h-full rounded-md bg-cover object-cover "></img>
          </div>
          <div className="w-full px-4 ">
            <p className="text-xl text-violet-800 font-serif mt-2  text-center font-bold tracking-wide">
              Sangram Bauri
            </p>
            <div className="flex  justify-center space-x-3  -mt-2 ">
              <a target="_blank">
                <div className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm  flex items-center justify-center border-2 border-gray-200">
                  <NavLink to={"https://www.freelancer.in/u/sangrambauri2003"} target="_blank">
                  <FaXTwitter className="text-black  text-md  font-bold" />
                  </NavLink>
                  
                </div>
              </a>

              <div className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center  border-2 border-gray-200">
               <NavLink to={"https://www.freelancer.in/u/sangrambauri2003"} target="_blank">
               <SiFreelancer className="text-sky-700  text-xl ml-0.5 mt-1 font-bold" />
               </NavLink>
                
              </div>
              <div className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-gray-200">
               <NavLink to={"https://www.linkedin.com/in/sangram-bauri-995806265/"} target="_blank">
                 <IoLogoLinkedin className="text-blue-900 text-xl  font-bold" />
               </NavLink>
              </div>
              <div className="h-8 w-8 rounded-full  bg-white/20 backdrop-blur-sm flex items-center justify-center  border-2 border-gray-200">
                <FaYoutube className="text-red-700 text-xl  font-bold" />
              </div>
            </div>
            {/* manu */}
            <div className="flex-col justify-center space-y-1 mt-3 ">
              <Link to="/" className="no-underline text-black">
                <div
                  className="w-full h-8  gap-8 px-4 hover:bg-[rgb(123,209,236)]/80   hover:scale-105 transition-all  duration-100 rounded-md flex items-center 
                  
                  text-lg font-medium"
                >
                  <div className="flex items-center justify-center w-10 h-full">
                    <TiHome className="text-black text-lg  font-bold" />
                  </div>
                  <div className="w-28 h-full text-black text-lg  font-bold flex items-center">
                    Home
                  </div>
                  {/* Home */}
                </div>
              </Link>

              <Link to="/projects" className="no-underline text-black">
                <div
                  className="w-full h-8  gap-8 px-4 hover:bg-[rgb(123,209,236)]/80   hover:scale-105 transition-all  duration-100 rounded-md flex items-center 
                  
                  text-lg font-medium"
                >
                  <div className=" flex items-center justify-center w-10 h-full">
                    <BsFillGearFill className="text-black text-lg  font-bold" />{" "}
                  </div>
                  <div className="w-28 h-full text-black text-lg  font-bold flex items-center">
                    Project
                  </div>
                  {/* Home */}
                </div>
              </Link>

              <Link to="/dsa" className="no-underline text-black">
                <div
                  className="w-full h-8  gap-8 px-4 hover:bg-[rgb(123,209,236)]/80   hover:scale-105 transition-all  duration-100 rounded-md flex items-center 
                  
                  text-lg font-medium"
                >
                  <div className="flex items-center justify-center w-10 h-full">
                    <BiBrain className="text-black text-lg  font-bold" />
                  </div>
                  <div className="w-28 h-full text-black text-lg  font-bold flex items-center">
                    Dsa
                  </div>
                  {/* Home */}
                </div>
              </Link>

              <Link to="/reviews" className="no-underline text-black">
                <div
                  className="w-full h-8  gap-8 px-4 hover:bg-[rgb(123,209,236)]/80   hover:scale-105 transition-all  duration-100 rounded-md flex items-center 
                  
                  text-lg font-medium"
                >
                  <div className=" flex items-center justify-center w-10 h-full">
                    <MdPreview className="text-black text-lg  font-bold" />{" "}
                  </div>
                  <div className="w-28 h-full text-black text-lg  font-bold flex items-center">
                    Reviews
                  </div>
                  {/* Home */}
                </div>
              </Link>
              <Link to="/about" className="no-underline text-black">
                <div
                  className="w-full h-8  gap-8 px-4 hover:bg-[rgb(123,209,236)]/80   hover:scale-105 transition-all  duration-100 rounded-md flex items-center 
                  
                  text-lg font-medium"
                >
                  <div className=" flex items-center justify-center w-10 h-full">
                    <IoIosContact className="text-black text-lg  font-bold" />{" "}
                  </div>
                  <div className="w-28 h-full text-black text-lg  font-bold flex items-center">
                    About
                  </div>
                  {/* Home */}
                </div>
              </Link>
              <Link to="/contact" className="no-underline text-black">
                <div
                  className="w-full h-8  gap-8 px-4 hover:bg-[rgb(123,209,236)]/80   hover:scale-105 transition-all  duration-100 rounded-md flex items-center 
                  
                  text-lg font-medium"
                >
                  <div className=" flex items-center justify-center w-10 h-full">
                    <BiSupport className="text-black text-lg  font-bold" />{" "}
                  </div>
                  <div className="w-28 h-full text-black text-lg  font-bold flex items-center">
                    Contact
                  </div>
                  {/* Home */}
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full -z-50">
          <Wave />
        </div>
      </div>
    </>
  );
};

export default Sidebar;

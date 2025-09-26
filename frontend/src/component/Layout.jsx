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

import Wave from "./Wave";
import "../App.css";
import Sidebar from "./Sidebar";
import NavBar from "./NavBar";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="w-full h-auto  ">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 w-full h-full">
          {/* side bar start */}
          <Sidebar />
          {/* side bar end */}
          {/* main container start */}
          <div
            className="  md:max-w-[48rem] md:min-w-[30rem] lg:max-w-full lg:w-full md:ml-[255px] lg:ml-[315px] px-2 md:px-2 w-full  h-full md:col-span-9 grid grid-flow-row-dense  md:grid-cols-2 gap-2 "
            // style={{
            //   marginLeft: "335px",
            // }}
          >
            
              {/*nav bar start*/}
            <NavBar />
            {/*nav bar end*/}

            <Outlet />
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;

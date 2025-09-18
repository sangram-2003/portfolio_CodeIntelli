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

import { Link } from "react-router-dom";
import { MdPreview } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Manu = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex-col mt-3 -space-y-2">
        <div
          className="w-full h-12  group hover:bg-pink-400 hover:scale-105 rounded-md py-2 px-8 flex justify-between items-center transition duration-100"
          onClick={() => navigate("/dashboard")} // Navigate to Home
        >
          <div className="text-md group-hover:text-black">
            <TiHome className="text-black text-lg  font-bold" />
          </div>
          <div className="text-md font-semibold group-hover:text-black">
            Home
          </div>
        </div>

        <div
          className="w-full h-12  group hover:bg-pink-400 hover:scale-105 rounded-md py-2 px-8 flex justify-between items-center transition duration-100"
          onClick={() => navigate("/dashboard/projects")} // Navigate to Projects
        >
          <div className="text-md group-hover:text-black">
            <BsFillGearFill className="text-black text-lg  font-bold" />
          </div>
          <div className="text-md font-semibold group-hover:text-black">
            Projects
          </div>
        </div>

        <div
          className="w-full h-12  group hover:bg-pink-400 hover:scale-105 rounded-md py-2 px-8 flex justify-between items-center transition duration-100"
          onClick={() => navigate("/dashboard/dsa")} // Navigate to Projects
        >
          <div className="text-md group-hover:text-black">
            <BiBrain className="text-black text-lg  font-bold" />
          </div>
          <div className="text-md font-semibold group-hover:text-black">
            Dsa
          </div>
        </div>

        <div
          className="w-full h-12  group hover:bg-pink-400 hover:scale-105 rounded-md py-2 px-8 flex justify-between items-center transition duration-100"
          onClick={() => navigate("/dashboard/message")} // Navigate to Contacts/Message
        >
          <div className="text-md group-hover:text-black">
            <BiSupport className="text-black text-lg  font-bold" />
          </div>
          <div className="text-md font-semibold group-hover:text-black">
            Contacts
          </div>
        </div>

        <div
          className="w-full h-12  group hover:bg-pink-400 hover:scale-105 rounded-md py-2 px-8 flex justify-between items-center transition duration-100"
          onClick={() => navigate("/dashboard/reviews")} // Navigate to Reviews
        >
          <div className="text-md group-hover:text-black">
            <MdPreview className="text-black text-lg  font-bold" />
          </div>
          <div className="text-md font-semibold group-hover:text-black">
            Reviews
          </div>
        </div>
      </div>
    </>
  );
};

export default Manu;

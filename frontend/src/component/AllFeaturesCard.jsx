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
import FeaturesCard from "./FeaturesCard";
import { Link } from "react-router-dom";
const AllFeaturesCard = () => {
  return (
    <>
      <Link to={"/projects"} className="no-underline">
        <FeaturesCard headline={"All features Projects"} />
      </Link>

      <Link to={"/dsa"} className="no-underline">
        <FeaturesCard headline={"All DSA questions"} />
      </Link>
    </>
  );
};

export default AllFeaturesCard;

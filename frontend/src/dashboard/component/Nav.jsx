import { FaArrowLeft, FaGithub } from "react-icons/fa6";
import { GiManualJuicer } from "react-icons/gi";
import { HiViewList } from "react-icons/hi";
import {
  FaAlignJustify,
  FaArrowRight,
  FaAtlassian,
  FaXmark,
} from "react-icons/fa6";

import {
  MdCloudDownload,
  MdNotificationAdd,
  MdNotificationsActive,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import NotificationBtn from "./NotificationBtn";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full   h-full  flex items-center  py-2 px-2 border-b-2 border-gray-200 justify-between">
        <div className="w-12 h-8 flex rounded-md items-center text-2xl font-bold justify-around">
          <NotificationBtn />
        </div>

        <div className="w-[30rem] flex  justify-end gap-6">
          <button
            className="w-32 h-8   rounded-md bg-pink-400 text-md font-semibold "
            onClick={() => navigate("/dashboard/add project")}
          >
            Add Project
          </button>
          <button
            className="w-32  h-8 rounded-md bg-green-400 text-md font-semibold "
            onClick={() => navigate("/dashboard/add dsa")}
          >
            Add Dsa
          </button>

          <button
            className="w-32  h-8 rounded-md bg-violet-400 text-md font-semibold "
            onClick={() => navigate("/dashboard/add review")}
          >
            Add Review
          </button>
          <div className="h-8 w-8   rounded-full">
            <FaGithub className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;

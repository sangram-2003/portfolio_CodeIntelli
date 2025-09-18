import Manu from "./Manu";

const Sidebar = () => {
  return (
    <>
      <div className="w-full  h-full bg-sky-200/50 px-4 py-4 relative">
        <h6 className="text-center text-2xl font-bold tracking-wide">
          DashBoard
        </h6>
        <div className="border-b-2 border-white  h-0 w-full mt-3"></div>
        <Manu />

        <div className="absolute w-full bottom-4 ">
          <button className="text-xl  font-bold bg-pink-400 w-10/12 h-12 text-black rounded-md">
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

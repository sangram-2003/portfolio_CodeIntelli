import { Outlet } from "react-router-dom";
import Home from "../pages/Home_Dashboard";

const Container = () => {
  return (
    <>
      <div className="w-full h-full  ">
        <Outlet />
      </div>
    </>
  );
};

export default Container;

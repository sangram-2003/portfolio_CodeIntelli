import { useEffect } from "react";
import Container from "./component/Cotainer";
import Nav from "./component/Nav";
import Sidebar from "./component/Sidebar";
const Dashboard = () => {
  return (
    <>
      <div className="w-full h-screen  flex   ">
        <div className="w-[16rem] fixed  h-full ">
          <Sidebar />
        </div>
        <div
          className="w-full h-full   flex-col  space-y-4"
          style={{ marginLeft: "17rem" }}
        >
          <div className="w-full h-16  ">
            <Nav />
          </div>
          <div className="w-full h-screen py-2 px-2">
            <Container />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

{
  /* <div className="w-full h-screen  flex space-x-4 gap-8  ">
            <div className="w-1/5 fixed  h-full ">
            <Sidebar/>
            </div>
            <div className="w-full h-full   flex-col space-y-4">
               <div className="w-full h-16 ">
                <Nav/>
               </div>
               <div className="w-full h-screen ">
                 <Container/>
               </div>
            </div>

         </div> */
}
